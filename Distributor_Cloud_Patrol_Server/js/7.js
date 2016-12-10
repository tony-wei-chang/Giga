/*任務資料建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_7").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_1").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary('Patrol_Mission_Info')+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="7_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#7_Function_Row").append('<div class="Window_Cancel" id="7_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Insert')+'</div>');
			$("#7_Function_Row").append('<div class="Window_Cancel" id="7_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('View')+'</div>');
			$("#7_Function_Row").append('<div class="Window_Cancel" id="7_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Update')+'</div>');
			$("#7_Function_Row").append('<div class="Window_Cancel" id="7_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Delete')+'</div>');
			$("#7_Function_Row").append('<div class="Window_Cancel" id="7_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Reset')+'</div>');
			//巡檢單位
			$("#7_Function_Row").append('<div style="float:left;margin-left: 15px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_7_Table_Inner_-1_g_name" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//區域名稱
			$("#7_Function_Row").append('<div style="float:left;margin-left: -20px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_7_Table_Inner_-1_region" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//巡檢點名稱
			$("#7_Function_Row").append('<div style="float:left;margin-left: -20px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_7_Table_Inner_-1_p_name" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_7" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_7 = Grid_Panel_Define.Initialize();
			Maintable_7.setId("Maintable_7");
			Maintable_7.setResizer_ID('Maintable_7_Resizer');
			Maintable_7.setHeader_Title(['No.',getDictionary('Patrol_Mission_Condominium'),getDictionary('Patrol_Mission_Site'),getDictionary('Patrol_Mission_Patrol_Name'),getDictionary('Patrol_Mission_Name'),getDictionary('Patrol_Mission_Action'),getDictionary('Patrol_Mission_Description'),getDictionary('Patrol_Mission_Is_Used'),getDictionary('Patrol_Mission_Update_Date'),getDictionary('Patrol_Mission_Update_Person'),'系統編號','巡檢點編號','巡檢單位編號','區域編號']);
			Maintable_7.setModel(['Number','g_name','region','p_name','c_item','c_action','c_desc','stop','xdate','xname','Id','pnt_id','guard_case_Id','region_Id']);
			Maintable_7.setPagesize(10);
			Maintable_7.setfieldShow([true,true,true,true,true,true,true,true,true,true,false,false,false,false]);
			Maintable_7.setHeader_Width(['4.5%','10.61%','10.61%','10.61%','10.61%','10.61%','10.61%','10.61%','10.61%','10.61%','0%','0%','0%','0%']);
			Maintable_7.setHeaderMoveable(true);
			Maintable_7.setMulti_Selectable(true);
			Maintable_7.createHeader();
			Maintable_7.createTable();
			//改寫欄位
			Maintable_7.setLoad_Callback(function()
			{
				//序號
				for (var i = 0; i < $("#Maintable_7_Table").children().find('div[name="Number"]').length; i++)
				{
					$("#Maintable_7_Table").children().find('div[name="Number"]').eq(i).html(Maintable_7.getStart() + (i + 1));
				}
				//使用狀態
				for (var i = 0; i < $("#Maintable_7_Table").children().find('div[name="stop"]').length; i++)
				{
					var stop = $("#Maintable_7_Table").children().find('div[name="stop"]').eq(i).html();
					if(stop == "N")
					{
						$("#Maintable_7_Table").children().find('div[name="stop"]').eq(i).html(getDictionary('Patrol_Mission_Used'));
						$("#Maintable_7_Table").children().find('div[name="stop"]').eq(i).attr("title",getDictionary('Patrol_Mission_Used'));
					}
					else
					{
						$("#Maintable_7_Table").children().find('div[name="stop"]').eq(i).html(getDictionary('Patrol_Mission_Not_Used'));
						$("#Maintable_7_Table").children().find('div[name="stop"]').eq(i).attr("title",getDictionary('Patrol_Mission_Not_Used'));
					}
				}
				//執行動作
				for (var i = 0; i < $("#Maintable_7_Table").children().find('div[name="c_action"]').length; i++)
				{
					var c_action = $("#Maintable_7_Table").children().find('div[name="c_action"]').eq(i).html();
					if(c_action == "no")
					{
						$("#Maintable_7_Table").children().find('div[name="c_action"]').eq(i).html(getDictionary('Patrol_Mission_Action_All'));
						$("#Maintable_7_Table").children().find('div[name="c_action"]').eq(i).attr("title",getDictionary('Patrol_Mission_Action_All'));
					}
					else if(c_action == "image")
					{
						$("#Maintable_7_Table").children().find('div[name="c_action"]').eq(i).html(getDictionary('Patrol_Mission_Action_Picture'));
						$("#Maintable_7_Table").children().find('div[name="c_action"]').eq(i).attr("title",getDictionary('Patrol_Mission_Action_Picture'));
					}
					else if(c_action == "mp3")
					{
						$("#Maintable_7_Table").children().find('div[name="c_action"]').eq(i).html(getDictionary('Patrol_Mission_Action_Voice'));
						$("#Maintable_7_Table").children().find('div[name="c_action"]').eq(i).attr("title",getDictionary('Patrol_Mission_Action_Voice'));
					}
					else if(c_action == "txt")
					{
						$("#Maintable_7_Table").children().find('div[name="c_action"]').eq(i).html(getDictionary('Patrol_Mission_Action_Text'));
						$("#Maintable_7_Table").children().find('div[name="c_action"]').eq(i).attr("title",getDictionary('Patrol_Mission_Action_Text'));
					}
				}
			});
			Maintable_7.createPagging();
			//資料表名稱
			Table_Name = "point_check";
			Maintable_7.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_7.getStart();
					var Limit = Maintable_7.getPagesize();
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
			//載入巡檢單位下拉式選單
			fkSetting();
			//改寫撈資料參數
			var object = "";
			Maintable_7.setLoad_Formdata(object);
			Maintable_7.load();
			// $("#Maintable_7_Table_Inner_-1_g_name").focus();
			//Css 表格捲軸
			$("#Maintable_7_Table").css("height","calc(100% - 152px)");
			$("#Maintable_7").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#7_Insert").click(function()
			{
				//新增畫面
				Window_7 = Window_Define.Initialize();
				Window_7.setMask(true);
				Window_7.setSmartdetect(false);
				Window_7.setWidth(480);
				Window_7.setHeight(486);
				Window_7.setId('Window_7');
				Window_7.setTitle(getDictionary('Window_Patrol_Mission_Insert'));
				Window_7.show();
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
				var paggingParameter = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'g_name',
				    'valueField':'Id',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋巡檢單位',
				    'searchKey':'searchKey'
				};
				Window_7.addComboboxPagging('Maintable_7_Table_Inner_-1_g_name2',getDictionary('Window_Patrol_Mission_Condominium'),paggingParameter);
				//區域名稱
				//當值改變 設定時間
				var comboboxReset = false;
				$("#Maintable_7_Table_Inner_-1_g_name2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_7_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter2.Url = tempUrl;
					Window_7['Maintable_7_Table_Inner_-1_region2']['ComboboxPagging_setPagging_Parameter'](paggingParameter2);
					Window_7['Maintable_7_Table_Inner_-1_region2']['ComboboxPagging_load']();
					if(comboboxReset)
					{
						$("#Maintable_7_Table_Inner_-1_region2_valueField").val("");
						$("#Maintable_7_Table_Inner_-1_region2_displayField").val("");
						$("#Maintable_7_Table_Inner_-1_region2").val("");

						$("#Maintable_7_Table_Inner_-1_p_name2_valueField").val("");
						$("#Maintable_7_Table_Inner_-1_p_name2_displayField").val("");
						$("#Maintable_7_Table_Inner_-1_p_name2").val("");
					}
					comboboxReset = true;
				});
				var paggingParameter2 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'region',
				    'valueField':'Id',
				    'fk_key':'reg_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋區域名稱',
				    'searchKey':'searchKey'
				};
				Window_7.addComboboxPagging('Maintable_7_Table_Inner_-1_region2',getDictionary('Window_Patrol_Mission_Site'),paggingParameter2);
				//確認有無區域可選擇
				Window_7['Maintable_7_Table_Inner_-1_region2'].ComboboxPagging_NoData = function()
				{
					normalError_Msg_Withmask($("#Maintable_7_Table_Inner_-1_g_name2").val() + getDictionary('have no site can be selected.'));
				};
				//CSS
				var newTop = parseFloat($("#Maintable_7_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40;
				var newLeft = parseFloat($("#Maintable_7_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_Table_Inner_-1_region2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_Table_Inner_-1_region2_Combobox_Pagging").css("left",newLeft + "px");
				//區域名稱
				//巡檢點名稱
				var comboboxReset2 = false;
				$("#Maintable_7_Table_Inner_-1_region2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_point&Id=" + $("#Maintable_7_Table_Inner_-1_region2_valueField").html();
					paggingParameter3.Url = tempUrl;
					Window_7['Maintable_7_Table_Inner_-1_p_name2']['ComboboxPagging_setPagging_Parameter'](paggingParameter3);
					Window_7['Maintable_7_Table_Inner_-1_p_name2']['ComboboxPagging_load']();
					if(comboboxReset2)
					{
						$("#Maintable_7_Table_Inner_-1_p_name_valueField").val("");
						$("#Maintable_7_Table_Inner_-1_p_name_displayField").val("");
						$("#Maintable_7_Table_Inner_-1_p_name").val("");
					}
					comboboxReset2 = true;
				});
				var paggingParameter3 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'p_name',
				    'valueField':'Id',
				    'fk_key':'pnt_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋巡檢點名稱',
				    'searchKey':'searchKey'
				};
				Window_7.addComboboxPagging('Maintable_7_Table_Inner_-1_p_name2',getDictionary('Window_Patrol_Mission_Patrol_Name'),paggingParameter3);
				//確認有無巡檢點可選擇
				Window_7['Maintable_7_Table_Inner_-1_p_name2'].ComboboxPagging_NoData = function()
				{
					normalError_Msg_Withmask($("#Maintable_7_Table_Inner_-1_region2").val() + getDictionary('have no patrol point can be selected.'));
				};
				//CSS
				var newTop = parseFloat($("#Maintable_7_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40 * 2;
				var newLeft = parseFloat($("#Maintable_7_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_Table_Inner_-1_p_name2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_Table_Inner_-1_p_name2_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢點名稱
				Window_7.addTextfield('Maintable_7_Table_Inner_-1_c_item',getDictionary('Window_Patrol_Mission_Name'));
				Window_7.addCombobox('Maintable_7_Table_Inner_-1_c_action',getDictionary('Window_Patrol_Mission_Action'));
				$("#Maintable_7_Table_Inner_-1_c_action").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Patrol_Mission_Action_Text')+"'>"+getDictionary('Patrol_Mission_Action_Text')+"</option>" +
					"<option value='"+getDictionary('Patrol_Mission_Action_Voice')+"'>"+getDictionary('Patrol_Mission_Action_Voice')+"</option>" +
					"<option value='"+getDictionary('Patrol_Mission_Action_Picture')+"'>"+getDictionary('Patrol_Mission_Action_Picture')+"</option>" +
					"<option value='"+getDictionary('Patrol_Mission_Action_All')+"'>"+getDictionary('Patrol_Mission_Action_All')+"</option>"
				);
				Window_7.addTextfield('Maintable_7_Table_Inner_-1_c_desc',getDictionary('Window_Patrol_Mission_Description'));
				Window_7.addCombobox('Maintable_7_Table_Inner_-1_stop',getDictionary('Window_Patrol_Mission_Is_Used'));
				$("#Maintable_7_Table_Inner_-1_stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Patrol_Mission_Used')+"'>"+getDictionary('Patrol_Mission_Used')+"</option>" +
					"<option value='"+getDictionary('Patrol_Mission_Not_Used')+"'>"+getDictionary('Patrol_Mission_Not_Used')+"</option>"
				);
				Window_7.addTextfield('Maintable_7_Table_Inner_-1_xdate',getDictionary('Window_Patrol_Mission_Update_Date'));
				Window_7.addTextfield('Maintable_7_Table_Inner_-1_xname',getDictionary('Window_Patrol_Mission_Update_Person'));
				Window_7.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_7.close();
				},function()
				{
					if(!$("#Maintable_7_Table_Inner_-1_g_name2").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Condominium'));
					}
					else if(!$("#Maintable_7_Table_Inner_-1_region2").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Site'));
					}
					else if(!$("#Maintable_7_Table_Inner_-1_p_name2").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Patrol_Name'));
					}
					else if(!$("#Maintable_7_Table_Inner_-1_c_item").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Name'));
					}
					else if(!$("#Maintable_7_Table_Inner_-1_c_action").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Action'));
					}
					else if(!$("#Maintable_7_Table_Inner_-1_c_desc").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Description'));
					}
					else if(!$("#Maintable_7_Table_Inner_-1_stop").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Is_Used'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.pnt_id = $("#Maintable_7_Table_Inner_-1_p_name2_valueField").html();
						ajaxData.c_item = $("#Maintable_7_Table_Inner_-1_c_item").val();
						ajaxData.c_desc = $("#Maintable_7_Table_Inner_-1_c_desc").val();
						var c_action = $("#Maintable_7_Table_Inner_-1_c_action").val();
						if(c_action == getDictionary('Patrol_Mission_Action_All'))
						{
							c_action = "no";
						}
						else if(c_action == getDictionary('Patrol_Mission_Action_Picture'))
						{
							c_action = "image";
						}
						else if(c_action == getDictionary('Patrol_Mission_Action_Voice'))
						{
							c_action = "mp3";
						}
						else if(c_action == getDictionary('Patrol_Mission_Action_Text'))
						{
							c_action = "txt";
						}
						ajaxData.c_action = c_action;
						ajaxData.stop = ($("#Maintable_7_Table_Inner_-1_stop").val() == getDictionary('Patrol_Mission_Used')?"N":"Y");
						ajaxData.xdate = $("#Maintable_7_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_7_Table_Inner_-1_xname").val();
						ajaxData_withType(Maintable_7,"Insert",JSON.stringify(ajaxData),function()
						{
							Window_7.close();
						});
					}
				});
				$("#Window_7_Yes").css
				({
					"margin-left":"75px"
				});
				//預設值
				$("#Maintable_7_Table_Inner_-1_xdate").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#Maintable_7_Table_Inner_-1_xname").val(UserName);
				$("#Maintable_7_Table_Inner_-1_stop").val(getDictionary('Patrol_Mission_Used'));
				//唯讀設定
				$("#Maintable_7_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_7_Table_Inner_-1_xname").attr('readonly',true);
				$("#Maintable_7_Table_Inner_-1_stop").attr('readonly',true);
				$("#Maintable_7_Table_Inner_-1_g_name2").attr('readonly',true);
				$("#Maintable_7_Table_Inner_-1_region2").attr('readonly',true);
				$("#Maintable_7_Table_Inner_-1_p_name2").attr('readonly',true);
				//Window Css
				$("#Window_7_Body .Font.translateHtml").width(145);
				$("#Window_7_Body input").width("calc(100% - 150px)");
				$("#Window_7_Body select").width("calc(100% - 150px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//新增查詢按鈕監聽
			$("#7_Select").click(function()
			{
				//新增畫面
				Window_7 = Window_Define.Initialize();
				Window_7.setMask(true);
				Window_7.setSmartdetect(false);
				Window_7.setWidth(480);
				Window_7.setHeight(486);
				Window_7.setId('Window_7');
				Window_7.setTitle(getDictionary('Window_Patrol_Mission_View'));
				Window_7.show();
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
				var paggingParameter = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'g_name',
				    'valueField':'Id',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋巡檢單位',
				    'searchKey':'searchKey'
				};
				Window_7.addComboboxPagging('Maintable_7_Table_Inner_-1_g_name2',getDictionary('Window_Patrol_Mission_Condominium'),paggingParameter);
				//區域名稱
				//當值改變 設定時間
				var comboboxReset = false;
				$("#Maintable_7_Table_Inner_-1_g_name2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_7_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter2.Url = tempUrl;
					Window_7['Maintable_7_Table_Inner_-1_region2']['ComboboxPagging_setPagging_Parameter'](paggingParameter2);
					Window_7['Maintable_7_Table_Inner_-1_region2']['ComboboxPagging_load']();
					if(comboboxReset)
					{
						$("#Maintable_7_Table_Inner_-1_region2_valueField").val("");
						$("#Maintable_7_Table_Inner_-1_region2_displayField").val("");
						$("#Maintable_7_Table_Inner_-1_region2").val("");

						$("#Maintable_7_Table_Inner_-1_p_name2_valueField").val("");
						$("#Maintable_7_Table_Inner_-1_p_name2_displayField").val("");
						$("#Maintable_7_Table_Inner_-1_p_name2").val("");
					}
					comboboxReset = true;
				});
				var paggingParameter2 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'region',
				    'valueField':'Id',
				    'fk_key':'reg_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋區域名稱',
				    'searchKey':'searchKey'
				};
				Window_7.addComboboxPagging('Maintable_7_Table_Inner_-1_region2',getDictionary('Window_Patrol_Mission_Site'),paggingParameter2);
				//確認有無區域可選擇
				Window_7['Maintable_7_Table_Inner_-1_region2'].ComboboxPagging_NoData = function()
				{
					normalError_Msg_Withmask($("#Maintable_7_Table_Inner_-1_g_name2").val() + getDictionary('have no site can be selected.'));
				};
				//CSS
				var newTop = parseFloat($("#Maintable_7_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40;
				var newLeft = parseFloat($("#Maintable_7_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_Table_Inner_-1_region2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_Table_Inner_-1_region2_Combobox_Pagging").css("left",newLeft + "px");
				//區域名稱
				//巡檢點名稱
				var comboboxReset2 = false;
				$("#Maintable_7_Table_Inner_-1_region2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_point&Id=" + $("#Maintable_7_Table_Inner_-1_region2_valueField").html();
					paggingParameter3.Url = tempUrl;
					Window_7['Maintable_7_Table_Inner_-1_p_name2']['ComboboxPagging_setPagging_Parameter'](paggingParameter3);
					Window_7['Maintable_7_Table_Inner_-1_p_name2']['ComboboxPagging_load']();
					if(comboboxReset2)
					{
						$("#Maintable_7_Table_Inner_-1_p_name_valueField").val("");
						$("#Maintable_7_Table_Inner_-1_p_name_displayField").val("");
						$("#Maintable_7_Table_Inner_-1_p_name").val("");
					}
					comboboxReset2 = true;
				});
				var paggingParameter3 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'p_name',
				    'valueField':'Id',
				    'fk_key':'pnt_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋巡檢點名稱',
				    'searchKey':'searchKey'
				};
				Window_7.addComboboxPagging('Maintable_7_Table_Inner_-1_p_name2',getDictionary('Window_Patrol_Mission_Patrol_Name'),paggingParameter3);
				//CSS
				var newTop = parseFloat($("#Maintable_7_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40 * 2;
				var newLeft = parseFloat($("#Maintable_7_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_Table_Inner_-1_p_name2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_Table_Inner_-1_p_name2_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢點名稱
				Window_7.addTextfield('Maintable_7_Table_Inner_-1_c_item',getDictionary('Window_Patrol_Mission_Name'));
				Window_7.addCombobox('Maintable_7_Table_Inner_-1_c_action',getDictionary('Window_Patrol_Mission_Action'));
				$("#Maintable_7_Table_Inner_-1_c_action").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Patrol_Mission_Action_Text')+"'>"+getDictionary('Patrol_Mission_Action_Text')+"</option>" +
					"<option value='"+getDictionary('Patrol_Mission_Action_Voice')+"'>"+getDictionary('Patrol_Mission_Action_Voice')+"</option>" +
					"<option value='"+getDictionary('Patrol_Mission_Action_Picture')+"'>"+getDictionary('Patrol_Mission_Action_Picture')+"</option>" +
					"<option value='"+getDictionary('Patrol_Mission_Action_All')+"'>"+getDictionary('Patrol_Mission_Action_All')+"</option>"
				);
				Window_7.addTextfield('Maintable_7_Table_Inner_-1_c_desc',getDictionary('Window_Patrol_Mission_Description'));
				Window_7.addCombobox('Maintable_7_Table_Inner_-1_stop',getDictionary('Window_Patrol_Mission_Is_Used'));
				$("#Maintable_7_Table_Inner_-1_stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Patrol_Mission_Used')+"'>"+getDictionary('Patrol_Mission_Used')+"</option>" +
					"<option value='"+getDictionary('Patrol_Mission_Not_Used')+"'>"+getDictionary('Patrol_Mission_Not_Used')+"</option>"
				);
				Window_7.addTextfield('Maintable_7_Table_Inner_-1_xdate',getDictionary('Window_Patrol_Mission_Update_Date'));
				Window_7.addTextfield('Maintable_7_Table_Inner_-1_xname',getDictionary('Window_Patrol_Mission_Update_Person'));
				Window_7.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_7.close();
				},function()
				{
					//設定使用者設定值
					$("#Maintable_7_Table_Inner_-1_g_name").val($("#Maintable_7_Table_Inner_-1_g_name2").val());
					$("#Maintable_7_Table_Inner_-1_g_name_valueField").html($("#Maintable_7_Table_Inner_-1_g_name2_valueField").html());
					$("#Maintable_7_Table_Inner_-1_region").val($("#Maintable_7_Table_Inner_-1_region2").val());
					$("#Maintable_7_Table_Inner_-1_region_valueField").html($("#Maintable_7_Table_Inner_-1_region2_valueField").html());
					$("#Maintable_7_Table_Inner_-1_p_name").val($("#Maintable_7_Table_Inner_-1_p_name2").val());
					$("#Maintable_7_Table_Inner_-1_p_name_valueField").html($("#Maintable_7_Table_Inner_-1_p_name2_valueField").html());
					var ajaxData = {};
					ajaxData.c_item = $("#Maintable_7_Table_Inner_-1_c_item").val();
					if($("#Maintable_7_Table_Inner_-1_c_action").val())
					{
						var c_action = $("#Maintable_7_Table_Inner_-1_c_action").val();
						if(c_action == getDictionary('Patrol_Mission_Action_All'))
						{
							c_action = "no";
						}
						else if(c_action == getDictionary('Patrol_Mission_Action_Picture'))
						{
							c_action = "image";
						}
						else if(c_action == getDictionary('Patrol_Mission_Action_Voice'))
						{
							c_action = "mp3";
						}
						else if(c_action == getDictionary('Patrol_Mission_Action_Text'))
						{
							c_action = "txt";
						}
						ajaxData.c_action = c_action;
					}
					ajaxData.g_name = $("#Maintable_7_Table_Inner_-1_g_name").val();
					ajaxData.region = $("#Maintable_7_Table_Inner_-1_region").val();
					ajaxData.c_desc = $("#Maintable_7_Table_Inner_-1_c_desc").val();
					if($("#Maintable_7_Table_Inner_-1_stop").val())
					{
						ajaxData.stop = ($("#Maintable_7_Table_Inner_-1_stop").val() == getDictionary('Patrol_Mission_Used')?"N":"Y");
					}
					ajaxData.xdate = $("#Maintable_7_Table_Inner_-1_xdate").val();
					ajaxData.xname = $("#Maintable_7_Table_Inner_-1_xname").val();
					ajaxData_withType(Maintable_7,"Select",JSON.stringify(ajaxData),function()
					{
						Window_7.close();
					});
				});
				$("#Window_7_Yes").css
				({
					"margin-left":"75px"
				});
				//Window Css
				$("#Window_7_Body .Font.translateHtml").width(145);
				$("#Window_7_Body input").width("calc(100% - 150px)");
				$("#Window_7_Body select").width("calc(100% - 150px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
				//設定使用者設定值
				$("#Maintable_7_Table_Inner_-1_g_name2").val($("#Maintable_7_Table_Inner_-1_g_name").val());
				$("#Maintable_7_Table_Inner_-1_g_name2_valueField").html($("#Maintable_7_Table_Inner_-1_g_name_valueField").html());
				$("#Maintable_7_Table_Inner_-1_region2").val($("#Maintable_7_Table_Inner_-1_region").val());
				$("#Maintable_7_Table_Inner_-1_region2_valueField").html($("#Maintable_7_Table_Inner_-1_region_valueField").html());
				$("#Maintable_7_Table_Inner_-1_p_name2").val($("#Maintable_7_Table_Inner_-1_p_name").val());
				$("#Maintable_7_Table_Inner_-1_p_name2_valueField").html($("#Maintable_7_Table_Inner_-1_p_name_valueField").html());
				//唯讀
				$("#Maintable_7_Table_Inner_-1_g_name2").attr('readonly',true);
				$("#Maintable_7_Table_Inner_-1_region2").attr('readonly',true);
				$("#Maintable_7_Table_Inner_-1_p_name2").attr('readonly',true);
			});
			//修改
			$("#7_Update").click(function()
			{
				if($(".Mainpage_Main_Table_Active").size() == 0)
				{
					normalError_Msg(getDictionary('Please choose item to update.'));
					return;
				}
				//新增畫面
				Window_7 = Window_Define.Initialize();
				Window_7.setMask(true);
				Window_7.setSmartdetect(false);
				Window_7.setWidth(480);
				Window_7.setHeight(486);
				Window_7.setId('Window_7');
				Window_7.setTitle(getDictionary('Window_Patrol_Mission_Update'));
				Window_7.show();
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
				var paggingParameter = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'g_name',
				    'valueField':'Id',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋巡檢單位',
				    'searchKey':'searchKey'
				};
				Window_7.addComboboxPagging('Maintable_7_Table_Inner_-1_g_name2',getDictionary('Window_Patrol_Mission_Condominium'),paggingParameter);
				//區域名稱
				//當值改變 設定時間
				var comboboxReset = false;
				$("#Maintable_7_Table_Inner_-1_g_name2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_7_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter2.Url = tempUrl;
					Window_7['Maintable_7_Table_Inner_-1_region2']['ComboboxPagging_setPagging_Parameter'](paggingParameter2);
					Window_7['Maintable_7_Table_Inner_-1_region2']['ComboboxPagging_load']();
					if(comboboxReset)
					{
						$("#Maintable_7_Table_Inner_-1_region2_valueField").val("");
						$("#Maintable_7_Table_Inner_-1_region2_displayField").val("");
						$("#Maintable_7_Table_Inner_-1_region2").val("");

						$("#Maintable_7_Table_Inner_-1_p_name2_valueField").val("");
						$("#Maintable_7_Table_Inner_-1_p_name2_displayField").val("");
						$("#Maintable_7_Table_Inner_-1_p_name2").val("");
					}
					comboboxReset = true;
				});
				var paggingParameter2 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'region',
				    'valueField':'Id',
				    'fk_key':'reg_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋區域名稱',
				    'searchKey':'searchKey'
				};
				Window_7.addComboboxPagging('Maintable_7_Table_Inner_-1_region2',getDictionary('Window_Patrol_Mission_Site'),paggingParameter2);
				//CSS
				var newTop = parseFloat($("#Maintable_7_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40;
				var newLeft = parseFloat($("#Maintable_7_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_Table_Inner_-1_region2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_Table_Inner_-1_region2_Combobox_Pagging").css("left",newLeft + "px");
				//區域名稱
				//巡檢點名稱
				var comboboxReset2 = false;
				$("#Maintable_7_Table_Inner_-1_region2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_point&Id=" + $("#Maintable_7_Table_Inner_-1_region2_valueField").html();
					paggingParameter3.Url = tempUrl;
					Window_7['Maintable_7_Table_Inner_-1_p_name2']['ComboboxPagging_setPagging_Parameter'](paggingParameter3);
					Window_7['Maintable_7_Table_Inner_-1_p_name2']['ComboboxPagging_load']();
					if(comboboxReset2)
					{
						$("#Maintable_7_Table_Inner_-1_p_name_valueField").val("");
						$("#Maintable_7_Table_Inner_-1_p_name_displayField").val("");
						$("#Maintable_7_Table_Inner_-1_p_name").val("");
					}
					comboboxReset2 = true;
				});
				var paggingParameter3 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'p_name',
				    'valueField':'Id',
				    'fk_key':'pnt_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋巡檢點名稱',
				    'searchKey':'searchKey'
				};
				Window_7.addComboboxPagging('Maintable_7_Table_Inner_-1_p_name2',getDictionary('Window_Patrol_Mission_Patrol_Name'),paggingParameter3);
				//確認有無巡檢點可選擇
				Window_7['Maintable_7_Table_Inner_-1_p_name2'].ComboboxPagging_NoData = function()
				{
					normalError_Msg_Withmask($("#Maintable_7_Table_Inner_-1_region2").val() + getDictionary('have no patrol point can be selected.'));
				};
				//CSS
				var newTop = parseFloat($("#Maintable_7_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40 * 2;
				var newLeft = parseFloat($("#Maintable_7_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_Table_Inner_-1_p_name2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_Table_Inner_-1_p_name2_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢點名稱
				Window_7.addTextfield('Maintable_7_Table_Inner_-1_c_item',getDictionary('Window_Patrol_Mission_Name'));
				Window_7.addCombobox('Maintable_7_Table_Inner_-1_c_action',getDictionary('Window_Patrol_Mission_Action'));
				$("#Maintable_7_Table_Inner_-1_c_action").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Patrol_Mission_Action_Text')+"'>"+getDictionary('Patrol_Mission_Action_Text')+"</option>" +
					"<option value='"+getDictionary('Patrol_Mission_Action_Voice')+"'>"+getDictionary('Patrol_Mission_Action_Voice')+"</option>" +
					"<option value='"+getDictionary('Patrol_Mission_Action_Picture')+"'>"+getDictionary('Patrol_Mission_Action_Picture')+"</option>" +
					"<option value='"+getDictionary('Patrol_Mission_Action_All')+"'>"+getDictionary('Patrol_Mission_Action_All')+"</option>"
				);
				Window_7.addTextfield('Maintable_7_Table_Inner_-1_c_desc',getDictionary('Window_Patrol_Mission_Description'));
				Window_7.addCombobox('Maintable_7_Table_Inner_-1_stop',getDictionary('Window_Patrol_Mission_Is_Used'));
				$("#Maintable_7_Table_Inner_-1_stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Patrol_Mission_Used')+"'>"+getDictionary('Patrol_Mission_Used')+"</option>" +
					"<option value='"+getDictionary('Patrol_Mission_Not_Used')+"'>"+getDictionary('Patrol_Mission_Not_Used')+"</option>"
				);
				Window_7.addTextfield('Maintable_7_Table_Inner_-1_xdate',getDictionary('Window_Patrol_Mission_Update_Date'));
				Window_7.addTextfield('Maintable_7_Table_Inner_-1_xname',getDictionary('Window_Patrol_Mission_Update_Person'));
				Window_7.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_7.close();
				},function()
				{
					if(!$("#Maintable_7_Table_Inner_-1_g_name2").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Condominium'));
					}
					else if(!$("#Maintable_7_Table_Inner_-1_region2").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Site'));
					}
					else if(!$("#Maintable_7_Table_Inner_-1_p_name2").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Patrol_Name'));
					}
					else if(!$("#Maintable_7_Table_Inner_-1_c_item").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Name'));
					}
					else if(!$("#Maintable_7_Table_Inner_-1_c_action").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Action'));
					}
					else if(!$("#Maintable_7_Table_Inner_-1_c_desc").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Description'));
					}
					else if(!$("#Maintable_7_Table_Inner_-1_stop").val())
					{
						normalError_Msg_Withmask(getDictionary('Pleace Insert')+" "+getDictionary('Patrol_Mission_Is_Used'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.pnt_id = $("#Maintable_7_Table_Inner_-1_p_name2_valueField").html();
						ajaxData.c_item = $("#Maintable_7_Table_Inner_-1_c_item").val();
						ajaxData.c_desc = $("#Maintable_7_Table_Inner_-1_c_desc").val();
						var c_action = $("#Maintable_7_Table_Inner_-1_c_action").val();
						if(c_action == getDictionary('Patrol_Mission_Action_All'))
						{
							c_action = "no";
						}
						else if(c_action == getDictionary('Patrol_Mission_Action_Picture'))
						{
							c_action = "image";
						}
						else if(c_action == getDictionary('Patrol_Mission_Action_Voice'))
						{
							c_action = "mp3";
						}
						else if(c_action == getDictionary('Patrol_Mission_Action_Text'))
						{
							c_action = "txt";
						}
						ajaxData.c_action = c_action;
						ajaxData.stop = ($("#Maintable_7_Table_Inner_-1_stop").val() == getDictionary('Patrol_Mission_Used')?"N":"Y");
						ajaxData.xdate = $("#Maintable_7_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_7_Table_Inner_-1_xname").val();
						ajaxData.Id = $(".Mainpage_Main_Table_Active").children().eq(8).html();
						ajaxData_withType(Maintable_7,"Update",JSON.stringify(ajaxData),function()
						{
							Window_7.close();
						});
					}
				});
				$("#Window_7_Yes").css
				({
					"margin-left":"75px"
				});
				//預設值
				// $("#").val($(".Mainpage_Main_Table_Active div[name='']").html());

				$("#Maintable_7_Table_Inner_-1_g_name2").val($(".Mainpage_Main_Table_Active div[name='g_name']").html());
				$("#Maintable_7_Table_Inner_-1_g_name2_valueField").html($(".Mainpage_Main_Table_Active div[name='guard_case_Id']").html());
				$("#Maintable_7_Table_Inner_-1_region2").val($(".Mainpage_Main_Table_Active div[name='region']").html());
				$("#Maintable_7_Table_Inner_-1_region2_valueField").html($(".Mainpage_Main_Table_Active div[name='region_Id']").html());
				$("#Maintable_7_Table_Inner_-1_p_name2").val($(".Mainpage_Main_Table_Active div[name='p_name']").html());
				$("#Maintable_7_Table_Inner_-1_p_name2_valueField").html($(".Mainpage_Main_Table_Active div[name='pnt_id']").html());
				$("#Maintable_7_Table_Inner_-1_c_action").val($(".Mainpage_Main_Table_Active div[name='c_action']").html());
				$("#Maintable_7_Table_Inner_-1_c_item").val($(".Mainpage_Main_Table_Active div[name='c_item']").html());
				$("#Maintable_7_Table_Inner_-1_c_desc").val($(".Mainpage_Main_Table_Active div[name='c_desc']").html());
				$("#Maintable_7_Table_Inner_-1_stop").val($(".Mainpage_Main_Table_Active div[name='stop']").html());
				$("#Maintable_7_Table_Inner_-1_xdate").val($(".Mainpage_Main_Table_Active div[name='xdate']").html());
				$("#Maintable_7_Table_Inner_-1_xname").val($(".Mainpage_Main_Table_Active div[name='xname']").html());
				//唯讀設定
				$("#Maintable_7_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_7_Table_Inner_-1_xname").attr('readonly',true);
				$("#Maintable_7_Table_Inner_-1_stop").attr('readonly',true);
				// $("#Maintable_7_Table_Inner_-1_g_name2").attr('readonly',true);
				// $("#Maintable_7_Table_Inner_-1_region2").attr('readonly',true);
				$("#Maintable_7_Table_Inner_-1_p_name2").attr('readonly',true);
				//Window Css
				$("#Window_7_Body .Font.translateHtml").width(145);
				$("#Window_7_Body input").width("calc(100% - 150px)");
				$("#Window_7_Body select").width("calc(100% - 150px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//存檔
			$("#7_Save").click(function()
			{
				//執行存檔
				saveAjaxfield(Maintable_7);
			});
			//取消
			$("#7_Cancel").click(function()
			{
				$("#Mainpage_Menu_Title_7").children().click();
			});
			//刪除
			$("#7_Delete").click(function()
			{
				deleteRow(Maintable_7);
			});
			//FK 共用設定
			function fkSetting()
			{
				//FK 設定
				$("#Maintable_7_Table_Inner_-1_g_name").attr('placeholder',getDictionary('Patrol_Mission_Condominium'));
				//FK 設定
				//配合 Window_Define 套件建立 div
				$("#Maintable_7_Table_Inner_-1_g_name").parent().append('<div id="Maintable_7_Table_Inner_-1_g_name_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
				Maintable_7_Combobox = Window_Define.Initialize();
				Maintable_7_Combobox.setId('Maintable_7_Table_Inner_-1_g_name');
				var paggingParameter0 = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'g_name',
				    'valueField':'Id',
				    'fk_key':'reg_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋巡檢單位',
				    'searchKey':'searchKey'
				};
				Maintable_7_Combobox.addComboboxPagging('Maintable_7_Table_Inner_-1_g_name','',paggingParameter0);
				Maintable_7_Combobox['Maintable_7_Table_Inner_-1_g_name'].ComboboxPagging_setPagging_Parameter(paggingParameter0);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_7_Combobox,Maintable_7_Combobox.getId());
				//回存主物件
				Maintable_7['Maintable_7_Table_Inner_-1_g_name'] = Maintable_7_Combobox;
				//FK 設定

				//當值改變 設定時間
				var comboboxReset = false;
				$("#Maintable_7_Table_Inner_-1_g_name_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					if($("#Maintable_7_Table_Inner_-1_g_name_valueField").html())
					{
						var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_7_Table_Inner_-1_g_name_valueField").html();
						paggingParameter.Url = tempUrl;
						Maintable_7['Maintable_7_Table_Inner_-1_region']['Maintable_7_Table_Inner_-1_region'].ComboboxPagging_setPagging_Parameter(paggingParameter);
						Maintable_7['Maintable_7_Table_Inner_-1_region']['Maintable_7_Table_Inner_-1_region'].ComboboxPagging_load();
					}
					if(comboboxReset)
					{
						$("#Maintable_7_Table_Inner_-1_region_valueField").html("");
						$("#Maintable_7_Table_Inner_-1_region_displayField").html("");
						$("#Maintable_7_Table_Inner_-1_region").val("");

						$("#Maintable_7_Table_Inner_-1_p_name_valueField").html("");
						$("#Maintable_7_Table_Inner_-1_p_name_displayField").html("");
						$("#Maintable_7_Table_Inner_-1_p_name").val("");
					}
					comboboxReset = true;
					//查詢
					var ajaxData = {};
					ajaxData.g_name = $("#Maintable_7_Table_Inner_-1_g_name").val();
					ajaxData_withType(Maintable_7,"Select",JSON.stringify(ajaxData));
				});

				//FK 設定
				$("#Maintable_7_Table_Inner_-1_region").attr('placeholder',getDictionary('Patrol_Mission_Site'));
				//配合 Window_Define 套件建立 div
				$("#Maintable_7_Table_Inner_-1_region").parent().append('<div id="Maintable_7_Table_Inner_-1_region_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = "";
				Maintable_7_Combobox = Window_Define.Initialize();
				Maintable_7_Combobox.setId('Maintable_7_Table_Inner_-1_region');
				var paggingParameter = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'region',
				    'valueField':'Id',
				    'fk_key':'reg_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋區域名稱',
				    'searchKey':'searchKey'
				};
				Maintable_7_Combobox.addComboboxPagging('Maintable_7_Table_Inner_-1_region','',paggingParameter);
				Maintable_7_Combobox['Maintable_7_Table_Inner_-1_region'].ComboboxPagging_setPagging_Parameter(paggingParameter);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_7_Combobox,Maintable_7_Combobox.getId());
				//回存主物件
				Maintable_7['Maintable_7_Table_Inner_-1_region'] = Maintable_7_Combobox;
				//FK 設定

				//當值改變 設定時間
				var comboboxReset2 = false;
				$("#Maintable_7_Table_Inner_-1_region_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					if($("#Maintable_7_Table_Inner_-1_region_valueField").html())
					{
						var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_point&Id=" + $("#Maintable_7_Table_Inner_-1_region_valueField").html();
						paggingParameter2.Url = tempUrl;
						Maintable_7['Maintable_7_Table_Inner_-1_p_name']['Maintable_7_Table_Inner_-1_p_name'].ComboboxPagging_setPagging_Parameter(paggingParameter2);
						Maintable_7['Maintable_7_Table_Inner_-1_p_name']['Maintable_7_Table_Inner_-1_p_name'].ComboboxPagging_load();
					}
					if(comboboxReset2)
					{
						$("#Maintable_7_Table_Inner_-1_p_name_valueField").html("");
						$("#Maintable_7_Table_Inner_-1_p_name_displayField").html("");
						$("#Maintable_7_Table_Inner_-1_p_name").val("");
					}
					comboboxReset2 = true;
					//查詢
					var ajaxData = {};
					ajaxData.g_name = $("#Maintable_7_Table_Inner_-1_g_name").val();
					ajaxData.region = $("#Maintable_7_Table_Inner_-1_region").val();
					ajaxData_withType(Maintable_7,"Select",JSON.stringify(ajaxData));
				});

				//FK 設定
				$("#Maintable_7_Table_Inner_-1_p_name").attr('placeholder',getDictionary('Patrol_Mission_Patrol_Name'));
				//配合 Window_Define 套件建立 div
				$("#Maintable_7_Table_Inner_-1_p_name").parent().append('<div id="Maintable_7_Table_Inner_-1_p_name_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = "";
				Maintable_7_Combobox = Window_Define.Initialize();
				Maintable_7_Combobox.setId('Maintable_7_Table_Inner_-1_p_name');
				var paggingParameter2 = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'p_name',
				    'valueField':'Id',
				    'fk_key':'pnt_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋巡檢點名稱',
				    'searchKey':'searchKey'
				};
				Maintable_7_Combobox.addComboboxPagging('Maintable_7_Table_Inner_-1_p_name','',paggingParameter2);
				Maintable_7_Combobox['Maintable_7_Table_Inner_-1_p_name'].ComboboxPagging_setPagging_Parameter(paggingParameter2);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_7_Combobox,Maintable_7_Combobox.getId());
				//回存主物件
				Maintable_7['Maintable_7_Table_Inner_-1_p_name'] = Maintable_7_Combobox;
				//FK 設定

				//當值改變
				$("#Maintable_7_Table_Inner_-1_p_name_valueField").bind("DOMSubtreeModified", function()
				{
					// 重整頁面
					ajaxData_withType(Maintable_7,"Select","{}",null);
				});
			}
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