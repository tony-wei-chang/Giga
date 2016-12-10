/*使用者建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_24").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_4").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary('Create_User_Info')+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="24_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#24_Function_Row").append('<div class="Window_Cancel" id="24_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Insert')+'</div>');
			$("#24_Function_Row").append('<div class="Window_Cancel" id="24_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('View')+'</div>');
			$("#24_Function_Row").append('<div class="Window_Cancel" id="24_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Update')+'</div>');
			$("#24_Function_Row").append('<div class="Window_Cancel" id="24_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Delete')+'</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_24" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_24 = Grid_Panel_Define.Initialize();
			Maintable_24.setId("Maintable_24");
			Maintable_24.setResizer_ID('Maintable_24_Resizer');
			Maintable_24.setHeader_Title(['No.',getDictionary('Create_User_User_ID'),getDictionary('Create_User_User_Name'),getDictionary('Create_User_User_Position'),getDictionary('Create_User_User_Account'),getDictionary('Create_User_User_Phone'),getDictionary('Create_User_User_Permission'),getDictionary('Create_User_User_ifLeaving'),getDictionary('Create_User_Update_Date'),getDictionary('Create_User_Update_Person'),'系統編號','職位編號']);
			Maintable_24.setModel(['Number','gd_Id','gd_name','j_name','gd_acct','gd_cell','gd_perm','stop','xdate','xname','Id','gd_ttl']);
			Maintable_24.setPagesize(10);
			Maintable_24.setfieldShow([true,true,true,true,true,true,true,true,true,true,false,false]);
			Maintable_24.setHeader_Width(['4.5%','10.61%','10.61%','10.61%','10.61%','10.61%','10.61%','10.61%','10.61%','10.61%','0%','0%']);
			Maintable_24.setHeaderMoveable(true);
			Maintable_24.setMulti_Selectable(true);
			Maintable_24.createHeader();
			Maintable_24.createTable();
			//改寫欄位
			Maintable_24.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_24.getId() + '_Table').children().length; i++)
				{
					//項目編號
					$('#' + Maintable_24.getId() + '_Table').children().eq(i).children().eq(0).html(Maintable_24.getStart() + (i + 1));
					//權限
					var power = $('#' + Maintable_24.getId() + '_Table').children().eq(i).children().eq(6).html();
					if(power == "Max")
					{
						power = getDictionary('Create_User_Max');
					}
					else if(power == "Supervisor")
					{
						power = getDictionary('Create_User_Supervisor');
					}
					else if(power == "Min")
					{
						power = getDictionary('Create_User_Min');
					}
					$('#' + Maintable_24.getId() + '_Table').children().eq(i).children().eq(6).html(power);
					//是否啟用
					var stop = $('#' + Maintable_24.getId() + '_Table').children().eq(i).children().eq(7).html();
					if(stop == "N")
					{
						stop = getDictionary('Create_User_User_Working');
					}
					else if(stop == "Y")
					{
						stop = getDictionary('Create_User_User_Leaving');
					}
					$('#' + Maintable_24.getId() + '_Table').children().eq(i).children().eq(7).html(stop);
				};
			});
			Maintable_24.createPagging();
			//資料表名稱
			Table_Name = "security_guard";
			Maintable_24.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_24.getStart();
					var Limit = Maintable_24.getPagesize();
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
			Maintable_24.setLoad_Formdata(object);
			Maintable_24.load();
			//Css 表格捲軸
			$("#Maintable_24_Table").css("height","calc(100% - 152px)");
			$("#Maintable_24").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#24_Insert").click(function()
			{
				//新增畫面
				Window_24_Insert = Window_Define.Initialize();
				Window_24_Insert.setMask(true);
				Window_24_Insert.setSmartdetect(false);
				Window_24_Insert.setWidth(480);
				Window_24_Insert.setHeight(488);
				Window_24_Insert.setId('Window_24_Insert');
				Window_24_Insert.setTitle(getDictionary('Insert_User'));
				Window_24_Insert.show();
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_gd_Id',getDictionary('Window_Create_User_User_ID'));	
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_gd_name',getDictionary('Window_Create_User_User_Name'));
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=job_title&Order_field=Id&Order_Sequence=Asc";
				var paggingParameter = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'j_name',
				    'valueField':'Id',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋巡檢單位',
				    'searchKey':'searchKey'
				};
				Window_24_Insert.addComboboxPagging('Maintable_24_Table_Inner_j_name',getDictionary('Window_Create_User_User_Position'),paggingParameter);
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_gd_acct',getDictionary('Window_Create_User_User_Account'));
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_gd_cell',getDictionary('Window_Create_User_User_Phone'));
				Window_24_Insert.addCombobox('Maintable_24_Table_Inner_gd_perm',getDictionary('Window_Create_User_User_Permission'));
				$("#Maintable_24_Table_Inner_gd_perm").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Create_User_Max')+"'>"+getDictionary('Create_User_Max')+"</option>" +
					"<option value='"+getDictionary('Create_User_Supervisor')+"'>"+getDictionary('Create_User_Supervisor')+"</option>" +
					"<option value='"+getDictionary('Create_User_Min')+"'>"+getDictionary('Create_User_Min')+"</option>"
				);
				Window_24_Insert.addCombobox('Maintable_24_Table_Inner_stop',getDictionary('Window_Create_User_User_Leaving'));
				$("#Maintable_24_Table_Inner_stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Create_User_User_Working')+"'>"+getDictionary('Create_User_User_Working')+"</option>" +
					"<option value='"+getDictionary('Create_User_User_Leaving')+"'>"+getDictionary('Create_User_User_Leaving')+"</option>"
				);
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_xdate',getDictionary('Window_Create_User_Update_Date'));
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_xname',getDictionary('Window_Create_User_Update_Person'));
				Window_24_Insert.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_24_Insert.close();
				},function()
				{
					if(!$("#Maintable_24_Table_Inner_gd_Id").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Create_User_User_ID'));
					}
					else if(!$("#Maintable_24_Table_Inner_gd_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Create_User_User_Name'));
					}
					else if(!$("#Maintable_24_Table_Inner_j_name_valueField").html())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Create_User_User_Position'));
					}
					else if(!$("#Maintable_24_Table_Inner_gd_acct").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Create_User_User_Account'));
					}
					else if(!$("#Maintable_24_Table_Inner_gd_cell").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Create_User_User_Phone'));
					}
					else if(!$("#Maintable_24_Table_Inner_gd_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Create_User_User_Permission'));
					}
					else if(!$("#Maintable_24_Table_Inner_stop").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Create_User_User_ifLeaving'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.gd_Id = $("#Maintable_24_Table_Inner_gd_Id").val();
						ajaxData.gd_name = $("#Maintable_24_Table_Inner_gd_name").val();
						ajaxData.gd_ttl = $("#Maintable_24_Table_Inner_j_name_valueField").html();
						ajaxData.gd_acct = $("#Maintable_24_Table_Inner_gd_acct").val();
						ajaxData.gd_cell = $("#Maintable_24_Table_Inner_gd_cell").val();
						//權限
						var power = $("#Maintable_24_Table_Inner_gd_perm").val();
						if(power == getDictionary('Create_User_Max'))
						{
							power = "Max";
						}
						else if(power == getDictionary('Create_User_Supervisor'))
						{
							power = "Supervisor";
						}
						else if(power == getDictionary('Create_User_Min'))
						{
							power = "Min";
						}
						//是否啟用
						var stop = $("#Maintable_24_Table_Inner_stop").val();
						if(stop == getDictionary('Create_User_User_Working'))
						{
							stop = "N";
						}
						else if(stop == getDictionary('Create_User_User_Leaving'))
						{
							stop = "Y";
						}
						ajaxData.gd_perm = power;
						ajaxData.stop = stop;
						ajaxData.xdate = $("#Maintable_24_Table_Inner_xdate").val();
						ajaxData.xname = $("#Maintable_24_Table_Inner_xname").val();
						ajaxData_withType(Maintable_24,"Insert",JSON.stringify(ajaxData),function()
						{
							Window_24_Insert.close();
						});
					}
				});
				//CSS
				$("#Window_24_Insert_Yes").css
				({
					"margin-left":"75px"
				});
				//預設值
				$("#Maintable_24_Table_Inner_xdate").val(getDate(new Date(),'/') + " " + getTime(new Date()));
				$("#Maintable_24_Table_Inner_xname").val(UserName);
				//唯讀設定
				$("#Maintable_24_Table_Inner_xdate").attr('readonly',true);
				$("#Maintable_24_Table_Inner_xname").attr('readonly',true);
				$("#Maintable_24_Table_Inner_j_name").attr('readonly',true);
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#Window_24_Insert .Font.translateHtml").width(145);
				$("#Window_24_Insert input").width("calc(100% - 150px)");
				$("#Window_24_Insert select").width("calc(100% - 150px)");
				//CSS
				$("#Maintable_24_Table_Inner_j_name_Combobox_Pagging").css
				({
					"left":"120px",
					"top":"168px"
				});
			});
			//新增查詢按鈕監聽
			$("#24_Select").click(function()
			{
				//新增畫面
				Window_24_Insert = Window_Define.Initialize();
				Window_24_Insert.setMask(true);
				Window_24_Insert.setSmartdetect(false);
				Window_24_Insert.setWidth(480);
				Window_24_Insert.setHeight(488);
				Window_24_Insert.setId('Window_24_Insert');
				Window_24_Insert.setTitle(getDictionary('View_User'));
				Window_24_Insert.show();
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_gd_Id',getDictionary('Window_Create_User_User_ID'));				
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_gd_name',getDictionary('Window_Create_User_User_Name'));
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_j_name',getDictionary('Window_Create_User_User_Position'));
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_gd_acct',getDictionary('Window_Create_User_User_Account'));
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_gd_cell',getDictionary('Window_Create_User_User_Phone'));
				Window_24_Insert.addCombobox('Maintable_24_Table_Inner_gd_perm',getDictionary('Window_Create_User_User_Permission'));
				$("#Maintable_24_Table_Inner_gd_perm").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Create_User_Max')+"'>"+getDictionary('Create_User_Max')+"</option>" +
					"<option value='"+getDictionary('Create_User_Supervisor')+"'>"+getDictionary('Create_User_Supervisor')+"</option>" +
					"<option value='"+getDictionary('Create_User_Min')+"'>"+getDictionary('Create_User_Min')+"</option>"
				);
				Window_24_Insert.addCombobox('Maintable_24_Table_Inner_stop',getDictionary('Window_Create_User_User_Leaving'));
				$("#Maintable_24_Table_Inner_stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Create_User_User_Working')+"'>"+getDictionary('Create_User_User_Working')+"</option>" +
					"<option value='"+getDictionary('Create_User_User_Leaving')+"'>"+getDictionary('Create_User_User_Leaving')+"</option>"
				);
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_xdate',getDictionary('Window_Create_User_Update_Date'));
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_xname',getDictionary('Window_Create_User_Update_Person'));
				Window_24_Insert.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_24_Insert.close();
				},function()
				{
					var ajaxData = {};
					ajaxData.gd_Id = $("#Maintable_24_Table_Inner_gd_Id").val();
					ajaxData.gd_name = $("#Maintable_24_Table_Inner_gd_name").val();
					ajaxData.j_name = $("#Maintable_24_Table_Inner_j_name").val();
					ajaxData.gd_acct = $("#Maintable_24_Table_Inner_gd_acct").val();
					ajaxData.gd_cell = $("#Maintable_24_Table_Inner_gd_cell").val();
					//權限
					var power = $("#Maintable_24_Table_Inner_gd_perm").val();
					if(power == getDictionary('Create_User_Max'))
					{
						power = "Max";
					}
					else if(power == getDictionary('Create_User_Supervisor'))
					{
						power = "Supervisor";
					}
					else if(power == getDictionary('Create_User_Min'))
					{
						power = "Min";
					}
					//是否啟用
					var stop = $("#Maintable_24_Table_Inner_stop").val();
					if(stop == getDictionary('Create_User_User_Working'))
					{
						stop = "N";
					}
					else if(stop == getDictionary('Create_User_User_Leaving'))
					{
						stop = "Y";
					}
					ajaxData.gd_perm = power;
					ajaxData.stop = stop;
					ajaxData.xdate = $("#Maintable_24_Table_Inner_xdate").val();
					ajaxData.xname = $("#Maintable_24_Table_Inner_xname").val();
					ajaxData_withType(Maintable_24,"Select",JSON.stringify(ajaxData),function()
					{
						Window_24_Insert.close();
					});
				});
				//CSS
				$("#Window_24_Insert_Yes").css
				({
					"margin-left":"75px"
				});
				
				//產生日期選擇
				$("#Maintable_24_Table_Inner_xdate").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#Window_24_Insert .Font.translateHtml").width(145);
				$("#Window_24_Insert input").width("calc(100% - 150px)");
				$("#Window_24_Insert select").width("calc(100% - 150px)");
				//CSS
				$("#Maintable_24_Table_Inner_j_name_Combobox_Pagging").css
				({
					"left":"120px",
					"top":"168px"
				});
			});
			//修改
			$("#24_Update").click(function()
			{
				if($(".Mainpage_Main_Table_Active").size() == 0)
				{
					normalError_Msg(getDictionary('Please choose item to update.'));
					return;
				}
				//新增畫面
				Window_24_Insert = Window_Define.Initialize();
				Window_24_Insert.setMask(true);
				Window_24_Insert.setSmartdetect(false);
				Window_24_Insert.setWidth(480);
				Window_24_Insert.setHeight(488);
				Window_24_Insert.setId('Window_24_Insert');
				Window_24_Insert.setTitle(getDictionary('Update_User'));
				Window_24_Insert.show();
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_gd_Id',getDictionary('Window_Create_User_User_ID'));				
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_gd_name',getDictionary('Window_Create_User_User_Name'));
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=job_title&Order_field=Id&Order_Sequence=Asc";
				var paggingParameter = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'j_name',
				    'valueField':'Id',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋巡檢單位',
				    'searchKey':'searchKey'
				};
				Window_24_Insert.addComboboxPagging('Maintable_24_Table_Inner_j_name',getDictionary('Window_Create_User_User_Position'),paggingParameter);
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_gd_acct',getDictionary('Window_Create_User_User_Account'));
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_gd_cell',getDictionary('Window_Create_User_User_Phone'));
				Window_24_Insert.addCombobox('Maintable_24_Table_Inner_gd_perm',getDictionary('Window_Create_User_User_Permission'));
				$("#Maintable_24_Table_Inner_gd_perm").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Create_User_Max')+"'>"+getDictionary('Create_User_Max')+"</option>" +
					"<option value='"+getDictionary('Create_User_Supervisor')+"'>"+getDictionary('Create_User_Supervisor')+"</option>" +
					"<option value='"+getDictionary('Create_User_Min')+"'>"+getDictionary('Create_User_Min')+"</option>"
				);
				Window_24_Insert.addCombobox('Maintable_24_Table_Inner_stop',getDictionary('Window_Create_User_User_Leaving'));
				$("#Maintable_24_Table_Inner_stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Create_User_User_Working')+"'>"+getDictionary('Create_User_User_Working')+"</option>" +
					"<option value='"+getDictionary('Create_User_User_Leaving')+"'>"+getDictionary('Create_User_User_Leaving')+"</option>"
				);
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_xdate',getDictionary('Window_Create_User_Update_Date'));
				Window_24_Insert.addTextfield('Maintable_24_Table_Inner_xname',getDictionary('Window_Create_User_Update_Person'));
				Window_24_Insert.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_24_Insert.close();
				},function()
				{
					if(!$("#Maintable_24_Table_Inner_gd_Id").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Create_User_User_ID'));
					}
					else if(!$("#Maintable_24_Table_Inner_gd_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Create_User_User_Name'));
					}
					else if(!$("#Maintable_24_Table_Inner_j_name_valueField").html())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Create_User_User_Position'));
					}
					else if(!$("#Maintable_24_Table_Inner_gd_cell").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Create_User_User_Phone'));
					}
					else if(!$("#Maintable_24_Table_Inner_gd_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Create_User_User_Permission'));
					}
					else if(!$("#Maintable_24_Table_Inner_stop").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Create_User_User_ifLeaving'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.gd_Id = $("#Maintable_24_Table_Inner_gd_Id").val();
						ajaxData.gd_name = $("#Maintable_24_Table_Inner_gd_name").val();
						ajaxData.gd_ttl = $("#Maintable_24_Table_Inner_j_name_valueField").html();
						ajaxData.gd_cell = $("#Maintable_24_Table_Inner_gd_cell").val();
						//權限
						var power = $("#Maintable_24_Table_Inner_gd_perm").val();
						if(power == getDictionary('Create_User_Max'))
						{
							power = "Max";
						}
						else if(power == getDictionary('Create_User_Supervisor'))
						{
							power = "Supervisor";
						}
						else if(power == getDictionary('Create_User_Min'))
						{
							power = "Min";
						}
						//是否啟用
						var stop = $("#Maintable_24_Table_Inner_stop").val();
						if(stop == getDictionary('Create_User_User_Working'))
						{
							stop = "N";
						}
						else if(stop == getDictionary('Create_User_User_Leaving'))
						{
							stop = "Y";
						}
						ajaxData.gd_perm = power;
						ajaxData.stop = stop;
						ajaxData.xdate = $("#Maintable_24_Table_Inner_xdate").val();
						ajaxData.xname = $("#Maintable_24_Table_Inner_xname").val();
						ajaxData.Id = $(".Mainpage_Main_Table_Active div[name='Id']").html();
						ajaxData_withType(Maintable_24,"Update",JSON.stringify(ajaxData),function()
						{
							Window_24_Insert.close();
						});
					}
				});
				//CSS
				$("#Window_24_Insert_Yes").css
				({
					"margin-left":"75px"
				});
				//預設值
				$("#Maintable_24_Table_Inner_xdate").val(getDate(new Date(),'/') + " " + getTime(new Date()));
				$("#Maintable_24_Table_Inner_xname").val(UserName);
				//唯讀設定
				$("#Maintable_24_Table_Inner_xdate").attr('readonly',true);
				$("#Maintable_24_Table_Inner_xname").attr('readonly',true);
				$("#Maintable_24_Table_Inner_j_name").attr('readonly',true);
				$("#Maintable_24_Table_Inner_gd_acct").attr('readonly',true);
				//設定值
				$("#Maintable_24_Table_Inner_gd_Id").val($(".Mainpage_Main_Table_Active div[name='gd_Id']").html());
				$("#Maintable_24_Table_Inner_gd_name").val($(".Mainpage_Main_Table_Active div[name='gd_name']").html());
				$("#Maintable_24_Table_Inner_j_name").val($(".Mainpage_Main_Table_Active div[name='j_name']").html());
				$("#Maintable_24_Table_Inner_j_name_valueField").html($(".Mainpage_Main_Table_Active div[name='gd_ttl']").html());
				$("#Maintable_24_Table_Inner_gd_acct").val(getDictionary('Can not update.'));
				$("#Maintable_24_Table_Inner_gd_cell").val($(".Mainpage_Main_Table_Active div[name='gd_cell']").html());
				$("#Maintable_24_Table_Inner_gd_perm").val($(".Mainpage_Main_Table_Active div[name='gd_perm']").html());
				$("#Maintable_24_Table_Inner_stop").val($(".Mainpage_Main_Table_Active div[name='stop']").html());
				$("#Maintable_24_Table_Inner_xdate").val($(".Mainpage_Main_Table_Active div[name='xdate']").html());
				$("#Maintable_24_Table_Inner_xname").val($(".Mainpage_Main_Table_Active div[name='xname']").html());
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#Window_24_Insert .Font.translateHtml").width(145);
				$("#Window_24_Insert input").width("calc(100% - 150px)");
				$("#Window_24_Insert select").width("calc(100% - 150px)");
				//CSS
				$("#Maintable_24_Table_Inner_j_name_Combobox_Pagging").css
				({
					"left":"120px",
					"top":"168px"
				});
			});
			//刪除
			$("#24_Delete").click(function()
			{
				deleteRow(Maintable_24);
			});
			//翻譯後的CSS
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