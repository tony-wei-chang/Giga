/*巡檢單位資料建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_2").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_1").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">' + getDictionary('Condominium_Info') + '</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="2_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#2_Function_Row").append('<div class="Window_Cancel" id="2_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">' + getDictionary('Insert') + '</div>');
			$("#2_Function_Row").append('<div class="Window_Cancel" id="2_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">' + getDictionary('View') + '</div>');
			$("#2_Function_Row").append('<div class="Window_Cancel" id="2_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">' + getDictionary('Update') + '</div>');
			$("#2_Function_Row").append('<div class="Window_Cancel" id="2_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">' + getDictionary('Delete') + '</div>');
			$("#2_Function_Row").append('<div class="Window_Cancel" id="2_Stop_N" style="width: 70px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">' + getDictionary('Condominium Contract Valid') + '</div>');
			$("#2_Function_Row").append('<div class="Window_Cancel" id="2_Stop_Y" style="width: 70px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">' + getDictionary('Condominium Contract Invalid') + '</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_2" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_2 = Grid_Panel_Define.Initialize();
			Maintable_2.setId("Maintable_2");
			Maintable_2.setResizer_ID('Maintable_2_Resizer');
			Maintable_2.setHeader_Title(['No.',getDictionary('Condominium ID'),getDictionary('Condominium Condominium'),getDictionary('Condominium Phone'),getDictionary('Condominium Address'),getDictionary('Condominium End User Email'),getDictionary('Condominium End User Account'),getDictionary('Condominium End User Password'),getDictionary('Condominium Contract Invalid Date'),getDictionary('Condominium Update_Date'),getDictionary('Condominium Update_Person'),'系統編號']);
			Maintable_2.setModel(['Number','g_Id','g_name','g_tele','g_addr','g_mail','g_acct','g_pswd','edate','xdate','xname','Id']);
			Maintable_2.setPagesize(10);
			Maintable_2.setfieldShow([true,true,true,true,true,true,true,true,true,true,true,false]);
			Maintable_2.setHeader_Width(['4.5%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','0%']);
			Maintable_2.setHeaderMoveable(true);
			Maintable_2.setMulti_Selectable(true);
			Maintable_2.createHeader();
			Maintable_2.createTable();
			Maintable_2.createPagging();
			//改寫欄位
			Maintable_2.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_2.getId() + '_Table').children().length; i++)
				{
					$('#' + Maintable_2.getId() + '_Table').children().eq(i).children().eq(0).html(Maintable_2.getStart() + (i + 1));
				};
			});
			//資料表名稱
			Table_Name = "guard_case";
			//改寫撈資料方法
			Maintable_2.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_2.getStart();
					var Limit = Maintable_2.getPagesize();
					return serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&start=" + Start + "&limit=" + Limit + "&TableName=" + Table_Name + "&Order_field=Id&Order_Sequence=Asc";
				}
				catch(err)
				{
					if(App_Debug)
					{
						console.log(err);
					}
				}
			};
			//改寫撈資料參數
			var object = "";
			Maintable_2.setLoad_Formdata(object);
			Maintable_2.load();
			//Css 表格捲軸
			$("#Maintable_2_Table").css("height","calc(100% - 152px)");
			$("#Maintable_2").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#2_Insert").click(function()
			{
				//新增畫面
				Window_2 = Window_Define.Initialize();
				Window_2.setMask(true);
				Window_2.setSmartdetect(false);
				Window_2.setWidth(480);
				Window_2.setHeight(524);
				Window_2.setId('Window_2');
				Window_2.setTitle(getDictionary('Condominium Insert Condominium'));
				Window_2.show();
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_Id',getDictionary('Condominium ID :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_name',getDictionary('Condominium Condominium :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_tele',getDictionary('Condominium Phone :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_addr',getDictionary('Condominium Address :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_mail',getDictionary('Condominium End User Email :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_acct',getDictionary('Condominium End User Acc :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_pswd',getDictionary('Condominium End User Pass :'));
				$("#Maintable_2_Table_Inner_-1_g_pswd").attr('type','password');
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_edate',getDictionary('Condominium Invalid Date :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_xdate',getDictionary('Condominium Window Update_Date'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_xname',getDictionary('Condominium Window Person'));
				Window_2.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_2.close();
				},function()
				{
					if(!$("#Maintable_2_Table_Inner_-1_g_Id").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium ID'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_g_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium Condominium'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_g_tele").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium Phone'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_g_addr").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium Address'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_g_mail").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium End User Email'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_g_acct").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium End User Acc'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_g_pswd").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium End User Pass'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_edate").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium Invalid Date'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.g_Id = $("#Maintable_2_Table_Inner_-1_g_Id").val();
						ajaxData.g_name = $("#Maintable_2_Table_Inner_-1_g_name").val();
						ajaxData.g_tele = $("#Maintable_2_Table_Inner_-1_g_tele").val();
						ajaxData.g_addr = $("#Maintable_2_Table_Inner_-1_g_addr").val();
						ajaxData.g_mail = $("#Maintable_2_Table_Inner_-1_g_mail").val();
						ajaxData.g_acct = $("#Maintable_2_Table_Inner_-1_g_acct").val();
						ajaxData.g_pswd = $("#Maintable_2_Table_Inner_-1_g_pswd").val();
						ajaxData.edate = $("#Maintable_2_Table_Inner_-1_edate").val();
						ajaxData.xdate = $("#Maintable_2_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_2_Table_Inner_-1_xname").val();
						ajaxData_withType(Maintable_2,"Insert",JSON.stringify(ajaxData),function()
						{
							Window_2.close();
						});
					}
				});
				//CSS
				$("#Window_2_Yes").css
				({
					"margin-left":"75px"
				});
				//設定語言選項
				if(languageStatus != "english")
				{
					$.datetimepicker.setLocale('zh');
				}
				//產生日期選擇
				$("#Maintable_2_Table_Inner_-1_edate").datetimepicker
				({
					scrollInput:false,
					timepicker:false,
					format:'Y-m-d'
				});
				//預設值
				$("#Maintable_2_Table_Inner_-1_xdate").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#Maintable_2_Table_Inner_-1_xname").val(UserName);
				//唯讀設定
				$("#Maintable_2_Table_Inner_-1_edate").attr('readonly',true);
				$("#Maintable_2_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_2_Table_Inner_-1_xname").attr('readonly',true);
				//Window Css
				$("#Window_2_Body .Font.translateHtml").width(115);
				$("#Window_2_Body input").width("calc(100% - 120px)");
				$("#Window_2_Body select").width("calc(100% - 120px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//新增查詢按鈕監聽
			$("#2_Select").click(function()
			{
				//新增畫面
				Window_2 = Window_Define.Initialize();
				Window_2.setMask(true);
				Window_2.setSmartdetect(false);
				Window_2.setWidth(480);
				Window_2.setHeight(524);
				Window_2.setId('Window_2');
				Window_2.setTitle(getDictionary('Condominium View Condominium'));
				Window_2.show();
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_Id',getDictionary('Condominium ID :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_name',getDictionary('Condominium Condominium :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_tele',getDictionary('Condominium Phone :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_addr',getDictionary('Condominium Address :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_mail',getDictionary('Condominium End User Email :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_acct',getDictionary('Condominium End User Acc :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_pswd',getDictionary('Condominium End User Pass :'));
				$("#Maintable_2_Table_Inner_-1_g_pswd").attr('type','password');
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_edate',getDictionary('Condominium Invalid Date :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_xdate',getDictionary('Condominium Window Update_Date'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_xname',getDictionary('Condominium Window Person'));
				Window_2.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_2.close();
				},function()
				{
					var ajaxData = {};
					if($("#Maintable_2_Table_Inner_-1_g_Id").val())
					{
						ajaxData.g_Id = $("#Maintable_2_Table_Inner_-1_g_Id").val();
					}
					ajaxData.g_name = $("#Maintable_2_Table_Inner_-1_g_name").val();
					ajaxData.g_tele = $("#Maintable_2_Table_Inner_-1_g_tele").val();
					ajaxData.g_addr = $("#Maintable_2_Table_Inner_-1_g_addr").val();
					ajaxData.g_mail = $("#Maintable_2_Table_Inner_-1_g_mail").val();
					ajaxData.g_acct = $("#Maintable_2_Table_Inner_-1_g_acct").val();
					ajaxData.g_pswd = $("#Maintable_2_Table_Inner_-1_g_pswd").val();
					ajaxData.edate = $("#Maintable_2_Table_Inner_-1_edate").val();
					ajaxData.xdate = $("#Maintable_2_Table_Inner_-1_xdate").val();
					ajaxData.xname = $("#Maintable_2_Table_Inner_-1_xname").val();
					ajaxData_withType(Maintable_2,"Select",JSON.stringify(ajaxData),function()
					{
						Window_2.close();
					});
				});
				//CSS
				$("#Window_2_Yes").css
				({
					"margin-left":"75px"
				});
				//設定語言選項
				if(languageStatus != "english")
				{
					$.datetimepicker.setLocale('zh');
				}
				//產生日期選擇
				$("#Maintable_2_Table_Inner_-1_edate").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				$("#Maintable_2_Table_Inner_-1_xdate").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				//Window Css
				$("#Window_2_Body .Font.translateHtml").width(115);
				$("#Window_2_Body input").width("calc(100% - 120px)");
				$("#Window_2_Body select").width("calc(100% - 120px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//修改
			$("#2_Update").click(function()
			{
				if($(".Mainpage_Main_Table_Active").size() == 0)
				{
					normalError_Msg(getDictionary('Please choose item to update.'));
					return;
				}
				//新增畫面
				Window_2 = Window_Define.Initialize();
				Window_2.setMask(true);
				Window_2.setSmartdetect(false);
				Window_2.setWidth(480);
				Window_2.setHeight(524);
				Window_2.setId('Window_2');
				Window_2.setTitle(getDictionary('Condominium Update Condominium'));
				Window_2.show();
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_Id',getDictionary('Condominium ID :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_name',getDictionary('Condominium Condominium :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_tele',getDictionary('Condominium Phone :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_addr',getDictionary('Condominium Address :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_mail',getDictionary('Condominium End User Email :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_acct',getDictionary('Condominium End User Acc :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_g_pswd',getDictionary('Condominium End User Pass :'));
				$("#Maintable_2_Table_Inner_-1_g_pswd").attr('type','password');
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_edate',getDictionary('Condominium Invalid Date :'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_xdate',getDictionary('Condominium Window Update_Date'));
				Window_2.addTextfield('Maintable_2_Table_Inner_-1_xname',getDictionary('Condominium Window Person'));
				Window_2.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_2.close();
				},function()
				{
					if(!$("#Maintable_2_Table_Inner_-1_g_Id").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium ID'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_g_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium Condominium'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_g_tele").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium Phone'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_g_addr").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium Address'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_g_mail").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium End User Email'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_g_acct").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium End User Acc'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_g_pswd").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium End User Pass'));
					}
					else if(!$("#Maintable_2_Table_Inner_-1_edate").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Condominium Invalid Date'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.g_Id = $("#Maintable_2_Table_Inner_-1_g_Id").val();
						ajaxData.g_name = $("#Maintable_2_Table_Inner_-1_g_name").val();
						ajaxData.g_tele = $("#Maintable_2_Table_Inner_-1_g_tele").val();
						ajaxData.g_addr = $("#Maintable_2_Table_Inner_-1_g_addr").val();
						ajaxData.g_mail = $("#Maintable_2_Table_Inner_-1_g_mail").val();
						ajaxData.g_acct = $("#Maintable_2_Table_Inner_-1_g_acct").val();
						ajaxData.g_pswd = $("#Maintable_2_Table_Inner_-1_g_pswd").val();
						ajaxData.edate = $("#Maintable_2_Table_Inner_-1_edate").val();
						ajaxData.xdate = $("#Maintable_2_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_2_Table_Inner_-1_xname").val();
						ajaxData.Id = $(".Mainpage_Main_Table_Active").children().eq(11).html();
						ajaxData_withType(Maintable_2,"Update",JSON.stringify(ajaxData),function()
						{
							Window_2.close();
						});
					}
				});
				//CSS
				$("#Window_2_Yes").css
				({
					"margin-left":"75px"
				});
				//設定語言選項
				if(languageStatus != "english")
				{
					$.datetimepicker.setLocale('zh');
				}
				//產生日期選擇
				$("#Maintable_2_Table_Inner_-1_edate").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				//唯讀設定
				$("#Maintable_2_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_2_Table_Inner_-1_xname").attr('readonly',true);
				//設定值
				$("#Maintable_2_Table_Inner_-1_g_Id").val($(".Mainpage_Main_Table_Active").children().eq(1).html());
				$("#Maintable_2_Table_Inner_-1_g_name").val($(".Mainpage_Main_Table_Active").children().eq(2).html());
				$("#Maintable_2_Table_Inner_-1_g_tele").val($(".Mainpage_Main_Table_Active").children().eq(3).html());
				$("#Maintable_2_Table_Inner_-1_g_addr").val($(".Mainpage_Main_Table_Active").children().eq(4).html());
				$("#Maintable_2_Table_Inner_-1_g_mail").val($(".Mainpage_Main_Table_Active").children().eq(5).html());
				$("#Maintable_2_Table_Inner_-1_g_acct").val($(".Mainpage_Main_Table_Active").children().eq(6).html());
				$("#Maintable_2_Table_Inner_-1_g_pswd").val($(".Mainpage_Main_Table_Active").children().eq(7).html());
				$("#Maintable_2_Table_Inner_-1_edate").val($(".Mainpage_Main_Table_Active").children().eq(8).html());
				$("#Maintable_2_Table_Inner_-1_xdate").val($(".Mainpage_Main_Table_Active").children().eq(9).html());
				$("#Maintable_2_Table_Inner_-1_xname").val($(".Mainpage_Main_Table_Active").children().eq(10).html());
				//Window Css
				$("#Window_2_Body .Font.translateHtml").width(115);
				$("#Window_2_Body input").width("calc(100% - 120px)");
				$("#Window_2_Body select").width("calc(100% - 120px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//合約啟用的巡檢單位
			$("#2_Stop_N").click(function()
			{
				var ajaxData = {};
				ajaxData.stop = "N";
				ajaxData_withType(Maintable_2,"Select",JSON.stringify(ajaxData));
			});
			//合約終止的巡檢單位
			$("#2_Stop_Y").click(function()
			{
				var ajaxData = {};
				ajaxData.stop = "Y";
				ajaxData_withType(Maintable_2,"Select",JSON.stringify(ajaxData));
			});
			//刪除
			$("#2_Delete").click(function()
			{
				deleteRow(Maintable_2);
			});
			//翻譯
			setCss_AfterTranslate();
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