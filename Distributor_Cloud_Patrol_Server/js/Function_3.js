/*即時監控*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//記錄各個小框 timer
		Control_Panel_Timer_Array = [];
		//新增監聽
		$("#Mainpage_Header_Function_3").click(function()
		{
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div id="Mainpage_Main_Word_Content" style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary("Immediate_Monitor_Info")+'</div>');
			//時間
			$("#Mainpage_Main").append('<div id="Mainpage_Main_Word_Time" style="font-size: 12pt;margin-top: 15px;margin-left: 10px;margin-bottom:20px;float:left;">' + getDate(new Date(),'-') + " " + getTime(new Date()) + " " + getWeekday(new Date()) + '</div>');
			//寄送信件
			$("#Mainpage_Main").append('<div id="Function_3_sendEmail" style="border: 0px;border-radius: 4px;float: left;text-align: center;width: 70px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;margin-top: 10px;margin-left: 10px;">'+getDictionary("Immediate_Monitor_SendMail")+'</div>');
			//更新時間
			setInterval(function()
			{
				$("#Mainpage_Main_Word_Time").html(getDate(new Date(),'-') + " " + getTime(new Date()) + " " + getWeekday(new Date()));
			},1000);
			//新增即時監控方塊
			$("#Mainpage_Main").append('<div id="Mainpage_Main_Control_Panel" style="width: calc(100% - 20px);margin-left: 10px;height:calc(100% - 100px);overflow-y:scroll;"></div>');
			Control_Panel_Count = 0;
			Control_Panel_refreshAble = true;
			//更新即時監控框
			refreshControl_Panel();
			refreshControl_Panel_Timer = setInterval(function()
			{
				//控制 ajax 是否發送
				if(Control_Panel_refreshAble)
				{
					refreshControl_Panel();
				}
			},2000);
			//如果物件不存在 則刪除 Timer
			$("#Mainpage_Main_Control_Panel").on("remove", function ()
			{
			    //刪除 ajax Timer
				clearInterval(refreshControl_Panel_Timer);
				//控制 ajax 不再發送
				Control_Panel_refreshAble = false;
				//刪除 各個小框顏色 Timer
				for(i=0;i<Control_Panel_Timer_Array.length;i++)
				{
					clearInterval(Control_Panel_Timer_Array[i]);
				}
			});
			//寄送信件
			$("#Function_3_sendEmail").click(function()
			{
				//新增畫面
				Window_Function_3_sendEmail = Window_Define.Initialize();
				Window_Function_3_sendEmail.setMask(true);
				Window_Function_3_sendEmail.setSmartdetect(false);
				Window_Function_3_sendEmail.setWidth(480);
				Window_Function_3_sendEmail.setHeight(336);
				Window_Function_3_sendEmail.setId('Window_Function_3_sendEmail');
				Window_Function_3_sendEmail.setTitle(getDictionary("Immediate_Monitor_SendMail"));
				Window_Function_3_sendEmail.show();
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
				var paggingParameter = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'g_name',
				    'valueField':'g_mail',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋區域',
				    'searchKey':'searchKey'
				};
				Window_Function_3_sendEmail.addComboboxPagging('Function_3_sendEmail_Table_Inner_-1_g_name',getDictionary("Window_Immediate_Monitor_Condominium"),paggingParameter);				
				Window_Function_3_sendEmail.addTextarea('Function_3_sendEmail_Table_Inner_-1_Content',getDictionary("Window_Immediate_Monitor_Content"));
				$("#Function_3_sendEmail_Table_Inner_-1_Content").height(150);
				Window_Function_3_sendEmail.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					Window_Function_3_sendEmail.close();
				},function()
				{
					if(!$("#Function_3_sendEmail_Table_Inner_-1_g_name").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Immediate_Monitor_Condominium"));
					}
					else if(!$("#Function_3_sendEmail_Table_Inner_-1_Content").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Immediate_Monitor_Content"));
					}
					else
					{
						//Loading Mask
						var loadingMask = Loading_Mask.Initialize();
						loadingMask.setTarget('Window_Function_3_sendEmail');
						loadingMask.show();

						var ajaxData = {};
						ajaxData.Mail = $("#Function_3_sendEmail_Table_Inner_-1_g_name_valueField").html();
						ajaxData.Content = $("#Function_3_sendEmail_Table_Inner_-1_Content").val();
						jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_Server/SendMail.ashx",JSON.stringify(ajaxData),function(data)
						{
							//loading
							loadingMask.close();
							//result
							var result = JSON.parse(data);
							if(result.Result == 'true')
							{
								//Msg
								normalSucceed_Msg(getDictionary("Window_Immediate_Send_Succeed"));
								Window_Function_3_sendEmail.close();
							}
							else if(result.Result == 'false')
							{
								if(result.Reason.indexOf("指定字串不在電子郵件地址的必要表單中") != -1)
								{
									//Msg
									normalError_Msg_Withmask(getDictionary("Window_Immediate_Error1"));
									$("#YesNo_Msg").height(185);
								}
								else if(result.Reason.indexOf("伺服器需要安全連接，或用戶端未經驗證") != -1)
								{
									//Msg
									normalError_Msg_Withmask(getDictionary("Window_Immediate_Error2"));
									$("#YesNo_Msg").height(185);
								}
								else
								{
									normalError_Msg_Withmask(result.Reason);
								}
							}
						},function()
						{
							//Msg
							normalError_Msg_Withmask(getDictionary("Window_Immediate_Send_Fail"));
							//loading
							loadingMask.close();
						},function()
						{
							//Msg
							normalError_Msg_Withmask(getDictionary("Window_Immediate_Send_Fail"));
							//loading
							loadingMask.close();
						});
					}
				});
				$("#Window_Function_3_sendEmail_Yes").css("margin-left","80px");
				$("#Function_3_sendEmail_Table_Inner_-1_g_name_Combobox_Pagging_Bottom").css("margin-left","-1px");
				$("#Function_3_sendEmail_Table_Inner_-1_g_name").attr('readonly','true');
				//Window Css
				$("#Window_Function_3_sendEmail .Font.translateHtml").width(140);
				$("#Window_Function_3_sendEmail input").width("calc(100% - 155px)");
				$("#Window_Function_3_sendEmail textarea").width("calc(100% - 155px)");
			});
			//按鈕效果
			$("#Function_3_sendEmail").mousedown(function()
			{
				$(this).css('margin-top','11px');
			});
			$("#Function_3_sendEmail").mouseup(function()
			{
				$(this).css('margin-top','10px');
			});
		});
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}
	}
});
//更新即時監控框
function refreshControl_Panel()
{
	//如果框內還沒有物件 代表是第一次載入
	var loadingMask = null;
	if($("#Mainpage_Main_Control_Panel").children().length == 0)
	{
		//Loading Mask
		loadingMask = Loading_Mask.Initialize();
		loadingMask.setTarget('Mainpage_Main');
		loadingMask.show();
	}
	//新增即時監控
	jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&start=0&limit=10&TableName=Message&Order_field=Id&Order_Sequence=Desc",null,function(response)
	{
		//關閉 loading mask
		if(loadingMask)
		{
			loadingMask.close();
		}
		var result = jQuery.parseJSON(response);
		//數量初始化
		if(Control_Panel_Count == 0 || Control_Panel_Count != result.MaxCount)
		{
			//清空
			$("#Mainpage_Main_Control_Panel").empty();
			//記錄數量
			Control_Panel_Count = result.MaxCount;
			//迴圈新增即時監控內容方塊
			for(var i=0;i<result.MaxCount;i++)
			{
				var id = result.Data[i].Id;
				var userId = result.Data[i].Gd_id;
				//新增即時監控內容方塊
				$("#Mainpage_Main_Control_Panel").append('<div message_flash="false" id="Mainpage_Main_Control_Panel_' + id + '" style="background-color:rgb(226,240,217);height: 160px;width: 180px;border-width: 2px;border-color: rgb(65,113,156);border-style: solid;float: left;cursor:pointer;"></div>');
				//新增監控內容文字 - 所在巡檢單位
				$("#Mainpage_Main_Control_Panel_" + id).append('<div style="font-size: 12pt;margin-top: 12px;margin-left: 10px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">' + ((result.Data[i].g_name)?result.Data[i].g_name:getDictionary('Immediate_Send_Loading')) + '</div>');
				//新增監控內容文字 - 所在區域
				$("#Mainpage_Main_Control_Panel_" + id).append('<div style="font-size: 12pt;margin-top: 12px;margin-left: 10px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">' + ((result.Data[i].region)?result.Data[i].region:getDictionary('Immediate_Send_Loading')) + '</div>');
				//新增監控內容文字 - 所在巡檢點
				$("#Mainpage_Main_Control_Panel_" + id).append('<div style="font-size: 12pt;margin-top: 10px;margin-left: 10px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">' + ((result.Data[i].p_name)?result.Data[i].p_name:getDictionary('Immediate_Send_Loading')) + '</div>');
				//新增監控內容文字 - 巡檢員
				$("#Mainpage_Main_Control_Panel_" + id).append('<div style="font-size: 12pt;margin-top: 12px;margin-left: 10px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">' + ((result.Data[i].gd_name)?result.Data[i].gd_name:getDictionary('Immediate_Send_Loading')) + "(" + ((result.Data[i].j_name)?result.Data[i].j_name:getDictionary('Immediate_Send_Loading')) + ")" + '</div>');
				//新增監控內容文字 - 更新時間
				$("#Mainpage_Main_Control_Panel_" + id).append('<div style="font-size: 12pt;margin-top: 10px;margin-left: 10px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">' + ((result.Data[i].r_time)?result.Data[i].r_time:getDictionary('Immediate_Send_Loading')) + '</div>');
				//記錄系統編號
				$("#Mainpage_Main_Control_Panel_" + id).attr('systemId',id);
				//記錄巡檢員編號
				$("#Mainpage_Main_Control_Panel_" + id).attr('userId',userId);
				//新增點擊監聽
				$("#Mainpage_Main_Control_Panel_" + id).click(function()
				{
					//產生對話框
					createMainpage_Main_Control_Panel_Messagebox($(this).attr('systemId'),$(this).children().eq(0).text() + " " + $(this).children().eq(3).text(),$(this).attr('userId'));
				});
			}
		}
		//數量跟前一次相同
		else if(Control_Panel_Count == result.MaxCount)
		{
			//記錄數量
			Control_Panel_Count = result.MaxCount;
			//迴圈新增即時監控內容方塊
			for(var i=0;i<result.MaxCount;i++)
			{
				var id = result.Data[i].Id;
				//新增監控內容文字 - 所在巡檢單位
				$("#Mainpage_Main_Control_Panel_" + id).children().eq(0).html((result.Data[i].g_name)?result.Data[i].g_name:getDictionary('Immediate_Send_Loading'));
				//新增監控內容文字 - 所在區域
				$("#Mainpage_Main_Control_Panel_" + id).children().eq(1).html((result.Data[i].region)?result.Data[i].region:getDictionary('Immediate_Send_Loading'));
				//新增監控內容文字 - 所在巡檢點
				$("#Mainpage_Main_Control_Panel_" + id).children().eq(2).html((result.Data[i].p_name)?result.Data[i].p_name:getDictionary('Immediate_Send_Loading'));
				//新增監控內容文字 - 巡檢員
				$("#Mainpage_Main_Control_Panel_" + id).children().eq(3).html(((result.Data[i].gd_name)?result.Data[i].gd_name:getDictionary('Immediate_Send_Loading')) + "(" + ((result.Data[i].j_name)?result.Data[i].j_name:getDictionary('Immediate_Send_Loading')) + ")");
				//新增監控內容文字 - 更新時間
				$("#Mainpage_Main_Control_Panel_" + id).children().eq(4).html((result.Data[i].r_time)?result.Data[i].r_time:getDictionary('Immediate_Send_Loading'));
			}
		}
		//判斷訊息是否有未讀
		for(var i=0;i<result.MaxCount;i++)
		{
			var id = result.Data[i].Id;
			//有未讀
			if(!result.Data[i].Message_Status)
			{
				//記錄物件正在閃爍
				$("#Mainpage_Main_Control_Panel_" + id).attr('message_flash','true');
			}
			//有已讀
			else
			{
				//記錄物件正在閃爍
				$("#Mainpage_Main_Control_Panel_" + id).attr('message_flash','false');
			}
			//新增閃爍狀態
			addControl_Panel_Flashed(id);
		}
	},function()
	{
		//關閉 loading mask
		if(loadingMask)
		{
			loadingMask.close();
		}
		var errorMsg = showMsg("錯誤","查詢錯誤",function()
		{
			errorMsg.close();
		},function()
		{
			errorMsg.close();
		});
	},function()
	{
		//關閉 loading mask
		if(loadingMask)
		{
			loadingMask.close();
		}
		var errorMsg = showMsg("錯誤","查詢錯誤",function()
		{
			errorMsg.close();
		},function()
		{
			errorMsg.close();
		});
	});
}
//新增閃爍狀態
function addControl_Panel_Flashed(id)
{
	//如果還沒新增過 Timer 才要新增
	if(jQuery.inArray(id,Control_Panel_Timer_Array) == -1)
	{
		//閃爍顏色
		setInterval(function()
		{
			//如果要閃爍的物件存在
			if($("#Mainpage_Main_Control_Panel_" + id).size() != 0)
			{
				//如果閃爍狀態為 true
				if(JSON.parse($("#Mainpage_Main_Control_Panel_" + id).attr('message_flash')))
				{
					//如果是原本顏色 則換成紅色
					if($("#Mainpage_Main_Control_Panel_" + id).css("background-color") == "rgb(226, 240, 217)")
					{
						$("#Mainpage_Main_Control_Panel_" + id).css("background-color","rgb(236,113,116)");
					}
					else
					{
						$("#Mainpage_Main_Control_Panel_" + id).css("background-color","rgb(226, 240, 217)");
					}
				}
			}
		},1000);
		Control_Panel_Timer_Array.push(id);
	}
}
//更新訊息已讀未讀狀態
function updateMessage_Status(id,stauts)
{
	//如果要改成已讀
	if(stauts)
	{
		$("#Mainpage_Main_Control_Panel_" + id).attr("message_flash",false);
		$("#Mainpage_Main_Control_Panel_" + id).css("border-color","rgb(65, 113, 156)");
	}
	var ajaxData = {};
	ajaxData.Message_Status = stauts;
	ajaxData.Id = id;
	//更改訊息未讀狀態為已讀
	jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_Server/Update_Distributor.ashx?TableName=Message",JSON.stringify(ajaxData),function(data)
	{
		
	},function()
	{
		//Msg
		normalError_Msg('訊息狀態錯誤');
	},function()
	{
		//Msg
		normalError_Msg('訊息狀態錯誤');
	});
}
//新增即時對話方塊
function createMainpage_Main_Control_Panel_Messagebox(id,title,userId)
{
	//更新訊息已讀未讀狀態
	updateMessage_Status(id,true);
	//新增視窗
	Mainpage_Main_Control_Panel_Messagebox = Window_Define.Initialize();
	Mainpage_Main_Control_Panel_Messagebox.setMask(true);
	Mainpage_Main_Control_Panel_Messagebox.setSmartdetect(false);
	Mainpage_Main_Control_Panel_Messagebox.setWidth(480);
	Mainpage_Main_Control_Panel_Messagebox.setHeight(447);
	Mainpage_Main_Control_Panel_Messagebox.setId('Mainpage_Main_Control_Panel_Messagebox');
	Mainpage_Main_Control_Panel_Messagebox.setTitle('即時通訊 - ' + title);
	Mainpage_Main_Control_Panel_Messagebox.show();
	//隱藏標題(一致風格)
	$("#Mainpage_Main_Control_Panel_Messagebox_Title").css
	({
		"font-size":"14pt",
		"background":"rgb(91,155,213)",
		"position":"fixed",
		"line-height":"38px"
	});
	//修改 Css
	$("#Mainpage_Main_Control_Panel_Messagebox_Body").css
	({
		"height":"calc(100% - 97px)",
	    "padding":"10px",
	    "margin-top":"37px",
	    "position":"absolute",
	    "overflow-y":"scroll",
	    "width":"460px"
	});
	//新增發送者資訊
	$("#Mainpage_Main_Control_Panel_Messagebox").attr('Recipient',userId);
	//新增輸入方塊
	$("#Mainpage_Main_Control_Panel_Messagebox").append('<div id="Mainpage_Main_Control_Panel_Messagebox_Bottom" class="Mainpage_Main_Pagging" style="background: rgb(91,155,213);width: 480px;bottom: 45px;border-radius: 4px;position:absolute;bottom:0px;"></div>');
	//新增輸入方塊文字部分
	$("#Mainpage_Main_Control_Panel_Messagebox_Bottom").append('<input id="Mainpage_Main_Control_Panel_Messagebox_Bottom_Input" type="text" style="margin-top: 10px;margin-left: 10px;width: calc(100% - 80px);margin-right: 12px;">');
	//聚焦文字方塊
	$("#Mainpage_Main_Control_Panel_Messagebox_Bottom_Input").focus();
	//新增輸入方塊文字部分監聽
	$("#Mainpage_Main_Control_Panel_Messagebox_Bottom_Input").keyup(function(e)
	{
		//Enter
		if(e.keyCode == 13)
		{
			//顯示 Loading
			var loadingMask = Loading_Mask.Initialize();
			loadingMask.setTarget("Mainpage_Main_Control_Panel_Messagebox");
			loadingMask.show();
			//蒐集傳送資訊
			var newData = {};
			newData.Message_Type = "Control";
			newData.Sender = "0";
			newData.Recipient = $("#Mainpage_Main_Control_Panel_Messagebox").attr('Recipient');
			newData.Content_Type = "txt";
			newData.Content = $(this).val();
			newData.r_time = "";
			newData.x_name = "";
			//送出文字到伺服器
			jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_server/Insert_Distributor.ashx?TableName=Message_Content&_Y02=" + new Date().getTime(),JSON.stringify(newData),function(response)
			{
				//關閉 loading mask
				loadingMask.close();
				var message = newData.Content;
				var time = getDate(new Date(),'-') + " " + getTime(new Date());
				//重整資訊
				loadMainpage_Main_Control_Panel_Messagebox(userId);
				//清空
				$("#Mainpage_Main_Control_Panel_Messagebox_Bottom_Input").val('');
			},function()
			{
				//關閉 loading mask
				if(loadingMask)
				{
					loadingMask.close();
				}
				var errorMsg = showMsg("錯誤","訊息發送錯誤",function()
				{
					errorMsg.close();
				},function()
				{
					errorMsg.close();
				});
			},function()
			{
				//關閉 loading mask
				if(loadingMask)
				{
					loadingMask.close();
				}
				var errorMsg = showMsg("錯誤","訊息發送錯誤",function()
				{
					errorMsg.close();
				},function()
				{
					errorMsg.close();
				});
			});
		}
	});
	//新增輸入方塊按鈕部分
	$("#Mainpage_Main_Control_Panel_Messagebox_Bottom").append('<button id="Mainpage_Main_Control_Panel_Messagebox_Bottom_Button">送出</button>');
	//Loading Mask
	Messagebox_loadingMask = Loading_Mask.Initialize();
	Messagebox_loadingMask.setTarget('Mainpage_Main_Control_Panel_Messagebox');
	Messagebox_loadingMask.show();
	//初始化
	Mainpage_Main_Control_Panel_Messagebox_showCount = 0;
	//載入對話資訊
	loadMainpage_Main_Control_Panel_Messagebox(userId);
	//Timer 重新整理資訊
	loadMainpage_Main_Control_Panel_Messagebox_refreshAble = true;
	loadMainpage_Main_Control_Panel_Messagebox_Timer = setInterval(function()
	{
		//控制 ajax 是否發送
		if(loadMainpage_Main_Control_Panel_Messagebox_refreshAble)
		{
			loadMainpage_Main_Control_Panel_Messagebox(userId);
		}
	},2000);
	//如果物件不存在 則刪除 Timer
	$("#Mainpage_Main_Control_Panel_Messagebox").on("remove", function ()
	{
	    //刪除 ajax Timer
		clearInterval(loadMainpage_Main_Control_Panel_Messagebox_Timer);
		//控制 ajax 不再發送
		loadMainpage_Main_Control_Panel_Messagebox_refreshAble = false;
	});
}
//載入對話資訊
function loadMainpage_Main_Control_Panel_Messagebox(userId)
{
	//載入對話資訊
	jqueryAjax_Get(serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=Message_Content&User_ID=" + userId,function(response)
	{
		//關閉 loading mask
		if(Messagebox_loadingMask)
		{
			Messagebox_loadingMask.close();
		}
		//取得結果資訊
		var result = jQuery.parseJSON(response);
		//如果記錄的比數為零
		if(Mainpage_Main_Control_Panel_Messagebox_showCount == 0)
		{
			//顯示所有比數
			for (var i = 0; i < result.MaxCount; i++)
			{
				//如果是文字
				if(result.Data[i].Content_Type == "txt")
				{
					//如果是中心說的話
					if(result.Data[i].Message_Type == "Control")
					{
						//新增文字訊息
						addMainpage_Main_Control_Panel_Messagebox_Center_Text(result.Data[i].Content,result.Data[i].r_time);
					}
					//如果是巡檢員
					else if(result.Data[i].Message_Type == "Client")
					{
						//巡檢員名稱
						var patrolName = result.Data[i].Sender_Name;// + "(" + result.Data[i].Sender_ttl_j_name + ")";
						//新增文字訊息
						addMainpage_Main_Control_Panel_Messagebox_Patrol_Text(result.Data[i].Content,result.Data[i].r_time,patrolName);
					}
				}
				//如果是圖片
				else if(result.Data[i].Content_Type == "image")
				{
					//巡檢員名稱
					var patrolName = result.Data[i].Sender_Name;// + "(" + result.Data[i].Sender_ttl_j_name + ")";
					//新增圖片訊息
					addMainpage_Main_Control_Panel_Messagebox_Patrol_Img(serverUrl + result.Data[i].Content,result.Data[i].r_time,patrolName);
				}
				//如果是音檔
				else if(result.Data[i].Content_Type == "mp3")
				{
					//巡檢員名稱
					var patrolName = result.Data[i].Sender_Name;// + "(" + result.Data[i].Sender_ttl_j_name + ")";
					//新增音檔訊息
					addMainpage_Main_Control_Panel_Messagebox_Patrol_Audio(serverUrl + result.Data[i].Content,result.Data[i].r_time,patrolName);
				}
			}
			//並記錄已載入筆數
			Mainpage_Main_Control_Panel_Messagebox_showCount = result.MaxCount;
		}
		//取得比數與已顯示不同 則需要把新的資訊顯示出來
		else if(result.MaxCount != Mainpage_Main_Control_Panel_Messagebox_showCount)
		{
			//顯示所有比數
			for (var i = parseInt(result.MaxCount) - 1; i > parseInt(Mainpage_Main_Control_Panel_Messagebox_showCount) - 1; i--)
			{
				//如果是文字
				if(result.Data[i].Content_Type == "txt")
				{
					//如果是中心說的話
					if(result.Data[i].Message_Type == "Control")
					{
						//新增文字訊息
						addMainpage_Main_Control_Panel_Messagebox_Center_Text(result.Data[i].Content,result.Data[i].r_time);
					}
					//如果是巡檢員
					else if(result.Data[i].Message_Type == "Client")
					{
						//巡檢員名稱
						var patrolName = result.Data[i].Sender_Name;// + "(" + result.Data[i].Sender_ttl_j_name + ")";
						//新增文字訊息
						addMainpage_Main_Control_Panel_Messagebox_Patrol_Text(result.Data[i].Content,result.Data[i].r_time,patrolName);
					}
				}
				//如果是圖片
				else if(result.Data[i].Content_Type == "image")
				{
					//巡檢員名稱
					var patrolName = result.Data[i].Sender_Name;// + "(" + result.Data[i].Sender_ttl_j_name + ")";
					//新增圖片訊息
					addMainpage_Main_Control_Panel_Messagebox_Patrol_Img(serverUrl + result.Data[i].Content,result.Data[i].r_time,patrolName);
				}
				//如果是音檔
				else if(result.Data[i].Content_Type == "mp3")
				{
					//巡檢員名稱
					var patrolName = result.Data[i].Sender_Name;// + "(" + result.Data[i].Sender_ttl_j_name + ")";
					//新增音檔訊息
					addMainpage_Main_Control_Panel_Messagebox_Patrol_Audio(serverUrl + result.Data[i].Content,result.Data[i].r_time,patrolName);
				}
			}
			//並記錄已載入筆數
			Mainpage_Main_Control_Panel_Messagebox_showCount = result.MaxCount;
		}
	},function()
	{
		//關閉 loading mask
		if(Messagebox_loadingMask)
		{
			Messagebox_loadingMask.close();
		}
		var errorMsg = showMsg("錯誤","查詢錯誤",function()
		{
			errorMsg.close();
		},function()
		{
			errorMsg.close();
		});
	},function()
	{
		//關閉 loading mask
		if(Messagebox_loadingMask)
		{
			Messagebox_loadingMask.close();
		}
		var errorMsg = showMsg("錯誤","查詢錯誤",function()
		{
			errorMsg.close();
		},function()
		{
			errorMsg.close();
		});
	});
}
//新增巡檢員 - 文字進入文字方塊
function addMainpage_Main_Control_Panel_Messagebox_Patrol_Text(text,time,patrolName)
{
	//隨機不重複編號
	var uuid = guid();
	//新增
	$("#Mainpage_Main_Control_Panel_Messagebox_Body").append
	(
		'<div style="width:100%;clear:both;" id="' + uuid + '">' +
			'<div style="color:rgb(133,139,151);line-height: 30px;float: none;font-size:15px;">' + patrolName + '</div>' + 
			'<div style="color:rgb(53,69,94);line-height: 30px;text-align: justify;word-wrap: break-word;font-size: 15px;float: left;background: rgb(228, 232, 235);border-radius: 10px;margin-bottom: 20px;margin-top: -5px;padding-left: 10px;padding-right: 10px;">' + text + '</div>' +
			'<div style="color:rgb(176,188,208);text-align:justify;word-wrap: break-word;float: left;line-height: 38px;font-size: 10px;font-style: italic;">(' + time + ')</div>' +
		'</div>'
	);
	//自動捲到最下面
	if($("#Mainpage_Main_Control_Panel_Messagebox_Body")[0] != undefined)
	{
		$("#Mainpage_Main_Control_Panel_Messagebox_Body").scrollTop($("#Mainpage_Main_Control_Panel_Messagebox_Body")[0].scrollHeight);
	}
}
//新增巡檢員 - 照片進入文字方塊
function addMainpage_Main_Control_Panel_Messagebox_Patrol_Img(url,time,patrolName)
{
	//隨機不重複編號
	var uuid = guid();
	//檔案名稱 解析網址
	var filenameArray = url.split('/');
	var filename = filenameArray[filenameArray.length - 1];
	var final_filename = filename.split('?')[0];
	//新增
	$("#Mainpage_Main_Control_Panel_Messagebox_Body").append
	(
		'<div style="width:100%;clear:both;" id="' + uuid + '">' +
			'<div style="color:rgb(133,139,151);line-height: 30px;float: none;font-size:15px;">' + patrolName + '</div>' + 
			'<div style="color:rgb(53,69,94);background-image: url(\'' + url + '\');background-size: 100% 100%;background-repeat: no-repeat;width: 50px;cursor: pointer;height: 80px;float: left;border-radius: 10px;margin-bottom: 20px;margin-top: -5px;padding-left: 10px;padding-right: 10px;"></div>' + 
			'<div style="color:rgb(176,188,208);text-align:justify;word-wrap: break-word;float: left;margin-top: 60px;margin-left: 5px;width: 60%;cursor: pointer;font-size: 10px;font-style: italic;">' + "(" + time + ")" + '</div>' +
		'</div>');
	//自動捲到最下面
	if($("#Mainpage_Main_Control_Panel_Messagebox_Body")[0] != undefined)
	{
		$("#Mainpage_Main_Control_Panel_Messagebox_Body").scrollTop($("#Mainpage_Main_Control_Panel_Messagebox_Body")[0].scrollHeight);
	}
	//圖片點擊監聽
	$("#" + uuid).children().eq(1).click(function()
	{
		openImg(url,final_filename);
	});
	$("#" + uuid).children().eq(2).click(function()
	{
		openImg(url,final_filename);
	});
	//開啟圖片
	function openImg(url,final_filename)
	{
		//顯示視窗
		var imgMsg = showMsg_WithMask('查看圖片 - ' + final_filename,'');
		//顯示圖片
		$("#YesNo_Msg_Label").append('<div style="border-radius: 10px;background-image: url(\'' + url + '\');background-size: 100% 100%;background-repeat: no-repeat;width: 200px;height: 200px;margin-left: 30px;"></div>');
		//調整高度
		imgMsg.setHeight(340);
		$("#YesNo_Msg").height(340);
		//調整標題顏色
		$("#YesNo_Msg_Title").css("background","rgb(91, 155, 213)");
		//垂直水平置中
		$("#YesNo_Msg").center();
	}
}
//新增巡檢員 - 聲音進入文字方塊
function addMainpage_Main_Control_Panel_Messagebox_Patrol_Audio(url,time,patrolName)
{
	//隨機不重複編號
	var uuid = guid();
	//檔案名稱 解析網址
	var filenameArray = url.split('/');
	var filename = filenameArray[filenameArray.length - 1];
	var final_filename = filename.split('?')[0];
	//新增
	$("#Mainpage_Main_Control_Panel_Messagebox_Body").append
	(
		'<div style="width:100%;clear:both;" id="' + uuid + '">' +
			'<div style="color:rgb(133,139,151);line-height: 30px;float: none;font-size:15px;">' + patrolName + '</div>' + 
			'<div style="background-image: url(\'image/speaker.png\');background-size: 100% 100%;background-repeat: no-repeat;width: 50px;cursor: pointer;height: 65px;float: left;border-radius: 10px;margin-bottom: 20px;margin-top: 0px;padding-left: 10px;padding-right: 10px;"></div>' + 
			'<div style="color:rgb(176,188,208);text-align:justify;word-wrap: break-word;float: left;margin-top: 38px;margin-left: 5px;width: 60%;cursor: pointer;font-size: 10px;font-style: italic;">' + "(" + time + ")" + '</div>' +
		'</div>');
	//自動捲到最下面
	if($("#Mainpage_Main_Control_Panel_Messagebox_Body")[0] != undefined)
	{
		$("#Mainpage_Main_Control_Panel_Messagebox_Body").scrollTop($("#Mainpage_Main_Control_Panel_Messagebox_Body")[0].scrollHeight);
	}
	//圖片點擊監聽
	$("#" + uuid).children().eq(1).click(function()
	{
		openAudio(url,final_filename);
	});
	$("#" + uuid).children().eq(2).click(function()
	{
		openAudio(url,final_filename);
	});
	//開啟圖片
	function openAudio(url,final_filename)
	{
		//顯示視窗
		var audioMsg = showMsg_WithMask('查看音檔 - ' + final_filename,'');
		//顯示圖片
		$("#YesNo_Msg_Label").append('<audio controls autoplay><source src="' + url + '" type="audio/ogg">Your browser does not support the audio element.</audio>');
		//調整高度
		audioMsg.setHeight(175);
		$("#YesNo_Msg").height(175);
		//調整寬度
		audioMsg.setWidth(350);
		$("#YesNo_Msg").width(350);
		$("#YesNo_Msg_Title").width(350);
		//調整標題顏色
		$("#YesNo_Msg_Title").css("background","rgb(91, 155, 213)");
		//垂直水平置中
		$("#YesNo_Msg").center();
	}
}
//新增中心 - 文字進入文字方塊
function addMainpage_Main_Control_Panel_Messagebox_Center_Text(text,time)
{
	//隨機不重複編號
	var uuid = guid();
	//新增
	$("#Mainpage_Main_Control_Panel_Messagebox_Body").append
	(
		'<div style="width:100%;/*margin-left:50%*/;clear:both;" id="' + uuid + '">' +
			'<div style="color:rgb(133,139,151);line-height: 30px;float: right;font-size:15px;"">中心</div>' +
			'<div style="width: 100%;float:right;"></div>' +
			'<div style="color:rgb(53,69,94);line-height: 30px;text-align: justify;word-wrap: break-word;font-size: 15px;float: right;background: rgb(228, 232, 235);border-radius: 10px;margin-bottom: 20px;margin-top: -5px;padding-left: 10px;padding-right: 10px;">' + text + '</div>' +
			'<div style="color:rgb(176,188,208);text-align:justify;word-wrap: break-word;float: right;margin-top: 10px;cursor: pointer;font-size: 10px;font-style: italic;">' + "(" + time + ")" + '</div>' +
		'</div>'
	);
	//自動捲到最下面
	if($("#Mainpage_Main_Control_Panel_Messagebox_Body")[0] != undefined)
	{
		$("#Mainpage_Main_Control_Panel_Messagebox_Body").scrollTop($("#Mainpage_Main_Control_Panel_Messagebox_Body")[0].scrollHeight);
	}
	//排版
	if($("#" + uuid).children().eq(0).width() > 190)
	{
		$("#" + uuid).children().eq(0).css("width","calc(100% - 36px)");
	}
}


