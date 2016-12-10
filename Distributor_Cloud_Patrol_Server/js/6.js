/*巡檢路線建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_6").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_1").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary('Patrol_Route_Info')+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="6_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#6_Function_Row").append('<div class="Window_Cancel" id="6_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Insert')+'</div>');
			$("#6_Function_Row").append('<div class="Window_Cancel" id="6_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('View')+'</div>');
			$("#6_Function_Row").append('<div class="Window_Cancel" id="6_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Update')+'</div>');
			$("#6_Function_Row").append('<div class="Window_Cancel" id="6_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Delete')+'</div>');
			$("#6_Function_Row").append('<div class="Window_Cancel" id="6_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Reset')+'</div>');
			//巡檢單位
			$("#6_Function_Row").append('<div style="float:left;margin-left: 15px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_6_Table_Inner_-1_g_name" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//區域名稱
			$("#6_Function_Row").append('<div style="float:left;margin-left: -20px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_6_Table_Inner_-1_region" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_6" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_6 = Grid_Panel_Define.Initialize();
			Maintable_6.setId("Maintable_6");
			Maintable_6.setResizer_ID('Maintable_6_Resizer');
			Maintable_6.setHeader_Title(['No.',getDictionary('Patrol_Route_Condominium'),getDictionary('Patrol_Route_Site'),getDictionary('Patrol_Route_Name'),getDictionary('Patrol_Route_Shift_Name'),getDictionary('Patrol_Route_Start_Time'),getDictionary('Patrol_Route_End_Time'),getDictionary('Patrol_Route_Is_Used'),getDictionary('Patrol_Route_Update_Date'),getDictionary('Patrol_Route_Update_Person'),'系統編號','巡檢單位編號','區域編號','巡檢班別編號']);
			Maintable_6.setModel(['Number','g_name','region','p_name','sch_name','b_time','e_time','stop','xdate','xname','Id','guard_id','reg_id','pat_id']);
			Maintable_6.setPagesize(10);
			Maintable_6.setfieldShow([true,true,true,true,true,true,true,true,true,true,false,false,false,false]);
			Maintable_6.setHeader_Width(['4.5%','10.61%','10.61%','10.61%','10.61%','10.61%','10.61%','10.61%','10.61%','10.61%','0%','0%','0%','0%']);
			Maintable_6.setHeaderMoveable(true);
			Maintable_6.setMulti_Selectable(true);
			Maintable_6.createHeader();
			Maintable_6.createTable();
			//改寫欄位
			Maintable_6.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_6.getId() + '_Table').children().length; i++)
				{
					$('#' + Maintable_6.getId() + '_Table').children().eq(i).children().eq(0).html(Maintable_6.getStart() + (i + 1));
					var stop = $('#' + Maintable_6.getId() + '_Table').children().eq(i).children().eq(7).html();
					$('#' + Maintable_6.getId() + '_Table').children().eq(i).children().eq(7).html((stop == "N")?getDictionary('Patrol_Route_Used'):getDictionary('Patrol_Route_Not_Used'));
					$('#' + Maintable_6.getId() + '_Table').children().eq(i).children().eq(7).attr("title",(stop == "N")?getDictionary('Patrol_Route_Used'):getDictionary('Patrol_Route_Not_Used'));
				};
			});
			Maintable_6.createPagging();
			//資料表名稱
			Table_Name = "patrol_route";
			Maintable_6.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_6.getStart();
					var Limit = Maintable_6.getPagesize();
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
			Maintable_6.setLoad_Formdata(object);
			//$("#Maintable_6_Table_Inner_-1_g_name").focus();
			Maintable_6.load();
			//Css 表格捲軸
			$("#Maintable_6_Table").css("height","calc(100% - 152px)");
			$("#Maintable_6").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#6_Insert").click(function()
			{
				//新增畫面
				Window_6 = Window_Define.Initialize();
				Window_6.setMask(true);
				Window_6.setSmartdetect(false);
				Window_6.setWidth(480);
				Window_6.setHeight(488);
				Window_6.setId('Window_6');
				Window_6.setTitle(getDictionary('Window_Patrol_Route_Insert'));
				Window_6.show();
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
				Window_6.addComboboxPagging('Maintable_6_Table_Inner_-1_g_name2',getDictionary('Window_Patrol_Route_Condominium'),paggingParameter);
				//區域名稱
				//當值改變 設定時間
				var comboboxReset = false;
				$("#Maintable_6_Table_Inner_-1_g_name2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_6_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter2.Url = tempUrl;
					Window_6['Maintable_6_Table_Inner_-1_region2']['ComboboxPagging_setPagging_Parameter'](paggingParameter2);
					Window_6['Maintable_6_Table_Inner_-1_region2']['ComboboxPagging_load']();

					//下拉式選單網址
					var tempUrl2 = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_schedule&Id=" + $("#Maintable_6_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter3.Url = tempUrl2;
					Window_6['Maintable_6_Table_Inner_-1_sch_name']['ComboboxPagging_setPagging_Parameter'](paggingParameter3);
					Window_6['Maintable_6_Table_Inner_-1_sch_name']['ComboboxPagging_load']();

					if(comboboxReset)
					{
						$("#Maintable_6_Table_Inner_-1_region2_valueField").val("");
						$("#Maintable_6_Table_Inner_-1_region2_displayField").val("");
						$("#Maintable_6_Table_Inner_-1_region2").val("");

						$("#Maintable_6_Table_Inner_-1_sch_name_valueField").val("");
						$("#Maintable_6_Table_Inner_-1_sch_name_displayField").val("");
						$("#Maintable_6_Table_Inner_-1_sch_name").val("");
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
				Window_6.addComboboxPagging('Maintable_6_Table_Inner_-1_region2',getDictionary('Window_Patrol_Route_Site'),paggingParameter2);
				//確認有無區域可選擇
				Window_6['Maintable_6_Table_Inner_-1_region2'].ComboboxPagging_NoData = function()
				{
					if($("#YesNo_Msg").size() == 0)
					{
						normalError_Msg_Withmask($("#Maintable_6_Table_Inner_-1_g_name2").val() + getDictionary('have no site can be selected.'));
					}
				};
				//CSS
				var newTop = parseFloat($("#Maintable_6_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40;
				var newLeft = parseFloat($("#Maintable_6_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_6_Table_Inner_-1_region2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_6_Table_Inner_-1_region2_Combobox_Pagging").css("left",newLeft + "px");
				//區域名稱				
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_p_name',getDictionary('Window_Patrol_Route_Name'));
				//巡檢班別名稱
				var paggingParameter3 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'sch_name',
				    'valueField':'Id',
				    'fk_key':'sch_name',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋班別編號',
				    'searchKey':'searchKey'
				};
				Window_6.addComboboxPagging('Maintable_6_Table_Inner_-1_sch_name',getDictionary('Window_Patrol_Route_Shift_Name'),paggingParameter3);
				$("#Maintable_6_Table_Inner_-1_sch_name_valueField").bind("DOMSubtreeModified", function()
				{
					var schData = Window_6['Maintable_6_Table_Inner_-1_sch_name'].ComboboxPagging_getData();
					if(schData)
					{
						for(var i=0;i<schData.length;i++)
						{
							if(schData[i].Id == $("#Maintable_6_Table_Inner_-1_sch_name_valueField").html())
							{
								$("#Maintable_6_Table_Inner_-1_b_time").val(schData[i].b_time);
								$("#Maintable_6_Table_Inner_-1_e_time").val(schData[i].e_time);
							}
						}
					}
				});
				//確認有無班別可選擇
				Window_6['Maintable_6_Table_Inner_-1_sch_name'].ComboboxPagging_NoData = function()
				{
					if($("#YesNo_Msg").size() == 0)
					{
						normalError_Msg_Withmask($("#Maintable_6_Table_Inner_-1_region2").val() + getDictionary('have no shift can be selected.'));
					}
				};
				//CSS
				var newTop = parseFloat($("#Maintable_6_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40*3;
				var newLeft = parseFloat($("#Maintable_6_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_6_Table_Inner_-1_sch_name_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_6_Table_Inner_-1_sch_name_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢班別名稱
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_b_time',getDictionary('Window_Patrol_Route_Start_Time'));
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_e_time',getDictionary('Window_Patrol_Route_End_Time'));
				Window_6.addCombobox('Maintable_6_Table_Inner_-1_stop',getDictionary('Window_Patrol_Route_Is_Used'));
				$("#Maintable_6_Table_Inner_-1_stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Patrol_Route_Used')+"'>"+getDictionary('Patrol_Route_Used')+"</option>" +
					"<option value='"+getDictionary('Patrol_Route_Not_Used')+"'>"+getDictionary('Patrol_Route_Not_Used')+"</option>"
				);
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_xdate',getDictionary('Window_Patrol_Route_Update_Date'));
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_xname',getDictionary('Window_Patrol_Route_Update_Person'));
				Window_6.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_6.close();
				},function()
				{
					if(!$("#Maintable_6_Table_Inner_-1_g_name2").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_Condominium'));
					}
					else if(!$("#Maintable_6_Table_Inner_-1_region2").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_Site'));
					}
					else if(!$("#Maintable_6_Table_Inner_-1_p_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_Name'));
					}
					else if(!$("#Maintable_6_Table_Inner_-1_sch_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_Shift_Name'));
					}
					else if(!$("#Maintable_6_Table_Inner_-1_b_time").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_Start_Time'));
					}
					else if(!$("#Maintable_6_Table_Inner_-1_e_time").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_End_Time'));
					}
					else if(!$("#Maintable_6_Table_Inner_-1_stop").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_Is_Used'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.reg_id = $("#Maintable_6_Table_Inner_-1_region2_valueField").html();
						ajaxData.p_name = $("#Maintable_6_Table_Inner_-1_p_name").val();
						ajaxData.pat_id = $("#Maintable_6_Table_Inner_-1_sch_name_valueField").html();
						ajaxData.sdate = $("#Maintable_6_Table_Inner_-1_sdate").val();
						ajaxData.stop = ($("#Maintable_6_Table_Inner_-1_stop").val() == getDictionary('Patrol_Route_Used')?"N":"Y");
						ajaxData.xdate = $("#Maintable_6_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_6_Table_Inner_-1_xname").val();
						ajaxData_withType(Maintable_6,"Insert",JSON.stringify(ajaxData));
						Window_6.close();
					}
				});
				$("#Window_6_Yes").css
				({
					"margin-left":"75px"
				});
				//預設值
				$("#Maintable_6_Table_Inner_-1_sdate").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#Maintable_6_Table_Inner_-1_xdate").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#Maintable_6_Table_Inner_-1_xname").val(UserName);
				$("#Maintable_6_Table_Inner_-1_stop").val('啟用');
				//唯讀設定
				$("#Maintable_6_Table_Inner_-1_sdate").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_xname").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_stop").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_g_name2").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_region2").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_sch_name").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_b_time").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_e_time").attr('readonly',true);
				//Window Css
				$("#Window_6_Body .Font.translateHtml").width(140);
				$("#Window_6_Body input").width("calc(100% - 145px)");
				$("#Window_6_Body select").width("calc(100% - 145px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//新增查詢按鈕監聽
			$("#6_Select").click(function()
			{
				//新增畫面
				Window_6 = Window_Define.Initialize();
				Window_6.setMask(true);
				Window_6.setSmartdetect(false);
				Window_6.setWidth(480);
				Window_6.setHeight(488);
				Window_6.setId('Window_6');
				Window_6.setTitle(getDictionary('Window_Patrol_Route_View'));
				Window_6.show();
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
				Window_6.addComboboxPagging('Maintable_6_Table_Inner_-1_g_name2',getDictionary('Window_Patrol_Route_Condominium'),paggingParameter);
				//區域名稱
				//當值改變 設定時間
				var comboboxReset = false;
				$("#Maintable_6_Table_Inner_-1_g_name2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_6_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter2.Url = tempUrl;
					Window_6['Maintable_6_Table_Inner_-1_region2']['ComboboxPagging_setPagging_Parameter'](paggingParameter2);
					Window_6['Maintable_6_Table_Inner_-1_region2']['ComboboxPagging_load']();

					if(comboboxReset)
					{
						$("#Maintable_6_Table_Inner_-1_region2_valueField").val("");
						$("#Maintable_6_Table_Inner_-1_region2_displayField").val("");
						$("#Maintable_6_Table_Inner_-1_region2").val("");

						$("#Maintable_6_Table_Inner_-1_sch_name_valueField").val("");
						$("#Maintable_6_Table_Inner_-1_sch_name_displayField").val("");
						$("#Maintable_6_Table_Inner_-1_sch_name").val("");
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
				Window_6.addComboboxPagging('Maintable_6_Table_Inner_-1_region2',getDictionary('Window_Patrol_Route_Site'),paggingParameter2);
				//確認有無區域可選擇
				Window_6['Maintable_6_Table_Inner_-1_region2'].ComboboxPagging_NoData = function()
				{
					normalError_Msg_Withmask($("#Maintable_6_Table_Inner_-1_g_name2").val() + getDictionary('have no site can be selected.'));
				};
				//CSS
				var newTop = parseFloat($("#Maintable_6_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40;
				var newLeft = parseFloat($("#Maintable_6_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_6_Table_Inner_-1_region2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_6_Table_Inner_-1_region2_Combobox_Pagging").css("left",newLeft + "px");
				//區域名稱		
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_p_name',getDictionary('Window_Patrol_Route_Name'));
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_sch_name',getDictionary('Window_Patrol_Route_Shift_Name'));
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_b_time',getDictionary('Window_Patrol_Route_Start_Time'));
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_e_time',getDictionary('Window_Patrol_Route_End_Time'));
				Window_6.addCombobox('Maintable_6_Table_Inner_-1_stop',getDictionary('Window_Patrol_Route_Is_Used'));
				$("#Maintable_6_Table_Inner_-1_stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Patrol_Route_Used')+"'>"+getDictionary('Patrol_Route_Used')+"</option>" +
					"<option value='"+getDictionary('Patrol_Route_Not_Used')+"'>"+getDictionary('Patrol_Route_Not_Used')+"</option>"
				);
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_xdate',getDictionary('Window_Patrol_Route_Update_Date'));
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_xname',getDictionary('Window_Patrol_Route_Update_Person'));
				Window_6.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_6.close();
				},function()
				{
					//設定使用者設定值
					$("#Maintable_6_Table_Inner_-1_g_name").val($("#Maintable_6_Table_Inner_-1_g_name2").val());
					$("#Maintable_6_Table_Inner_-1_g_name_valueField").html($("#Maintable_6_Table_Inner_-1_g_name2_valueField").html());
					$("#Maintable_6_Table_Inner_-1_region").val($("#Maintable_6_Table_Inner_-1_region2").val());
					$("#Maintable_6_Table_Inner_-1_region_valueField").html($("#Maintable_6_Table_Inner_-1_region2_valueField").html());
					var ajaxData = {};
					ajaxData.g_name = $("#Maintable_6_Table_Inner_-1_g_name").val();
					ajaxData.region = $("#Maintable_6_Table_Inner_-1_region").val();
					// ajaxData.reg_id = $("#Maintable_6_Table_Inner_-1_region2_valueField").html();
					ajaxData.p_name = $("#Maintable_6_Table_Inner_-1_p_name").val();
					ajaxData.sch_name = $("#Maintable_6_Table_Inner_-1_sch_name").val();
					if($("#Maintable_6_Table_Inner_-1_stop").val())
					{
						ajaxData.stop = ($("#Maintable_6_Table_Inner_-1_stop").val() == getDictionary('Patrol_Route_Used')?"N":"Y");
					}
					ajaxData.b_time = $("#Maintable_6_Table_Inner_-1_b_time").val();
					ajaxData.e_time = $("#Maintable_6_Table_Inner_-1_e_time").val();
					ajaxData.xdate = $("#Maintable_6_Table_Inner_-1_xdate").val();
					ajaxData.xname = $("#Maintable_6_Table_Inner_-1_xname").val();
					ajaxData_withType(Maintable_6,"Select",JSON.stringify(ajaxData));
					Window_6.close();
				});
				$("#Window_6_Yes").css
				({
					"margin-left":"75px"
				});
				//Window Css
				$("#Window_6_Body .Font.translateHtml").width(140);
				$("#Window_6_Body input").width("calc(100% - 145px)");
				$("#Window_6_Body select").width("calc(100% - 145px)");
				
				//產生日期選擇
				$("#Maintable_6_Table_Inner_-1_b_time").datetimepicker({scrollInput:false,timepicker:true,datepicker:false,format:'H:i'});
				$("#Maintable_6_Table_Inner_-1_e_time").datetimepicker({scrollInput:false,timepicker:true,datepicker:false,format:'H:i'});
				$("#Maintable_6_Table_Inner_-1_xdate").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				//設定使用者設定值
				$("#Maintable_6_Table_Inner_-1_g_name2").val($("#Maintable_6_Table_Inner_-1_g_name").val());
				$("#Maintable_6_Table_Inner_-1_g_name2_valueField").html($("#Maintable_6_Table_Inner_-1_g_name_valueField").html());
				$("#Maintable_6_Table_Inner_-1_region2").val($("#Maintable_6_Table_Inner_-1_region").val());
				$("#Maintable_6_Table_Inner_-1_region2_valueField").html($("#Maintable_6_Table_Inner_-1_region_valueField").html());
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//修改
			$("#6_Update").click(function()
			{
				if($(".Mainpage_Main_Table_Active").size() == 0)
				{
					normalError_Msg(getDictionary('Please choose item to update.'));
					return;
				}
				//新增畫面
				Window_6 = Window_Define.Initialize();
				Window_6.setMask(true);
				Window_6.setSmartdetect(false);
				Window_6.setWidth(480);
				Window_6.setHeight(488);
				Window_6.setId('Window_6');
				Window_6.setTitle(getDictionary('Window_Patrol_Route_Update'));
				Window_6.show();
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
				Window_6.addComboboxPagging('Maintable_6_Table_Inner_-1_g_name2',getDictionary('Window_Patrol_Route_Condominium'),paggingParameter);
				//區域名稱
				//當值改變 設定時間
				var comboboxReset = false;
				$("#Maintable_6_Table_Inner_-1_g_name2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_6_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter2.Url = tempUrl;
					Window_6['Maintable_6_Table_Inner_-1_region2']['ComboboxPagging_setPagging_Parameter'](paggingParameter2);
					Window_6['Maintable_6_Table_Inner_-1_region2']['ComboboxPagging_load']();

					//下拉式選單網址
					var tempUrl2 = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_schedule&Id=" + $("#Maintable_6_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter3.Url = tempUrl2;
					Window_6['Maintable_6_Table_Inner_-1_sch_name']['ComboboxPagging_setPagging_Parameter'](paggingParameter3);
					Window_6['Maintable_6_Table_Inner_-1_sch_name']['ComboboxPagging_load']();

					if(comboboxReset)
					{
						$("#Maintable_6_Table_Inner_-1_region2_valueField").val("");
						$("#Maintable_6_Table_Inner_-1_region2_displayField").val("");
						$("#Maintable_6_Table_Inner_-1_region2").val("");

						$("#Maintable_6_Table_Inner_-1_sch_name_valueField").val("");
						$("#Maintable_6_Table_Inner_-1_sch_name_displayField").val("");
						$("#Maintable_6_Table_Inner_-1_sch_name").val("");
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
				Window_6.addComboboxPagging('Maintable_6_Table_Inner_-1_region2',getDictionary('Window_Patrol_Route_Site'),paggingParameter2);
				//確認有無區域可選擇
				Window_6['Maintable_6_Table_Inner_-1_region2'].ComboboxPagging_NoData = function()
				{
					if($("#YesNo_Msg").size() == 0)
					{
						normalError_Msg_Withmask($("#Maintable_6_Table_Inner_-1_g_name2").val() + getDictionary('have no site can be selected.'));
					}
				};
				//CSS
				var newTop = parseFloat($("#Maintable_6_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40;
				var newLeft = parseFloat($("#Maintable_6_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_6_Table_Inner_-1_region2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_6_Table_Inner_-1_region2_Combobox_Pagging").css("left",newLeft + "px");
				//區域名稱				
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_p_name',getDictionary('Window_Patrol_Route_Name'));
				//巡檢班別名稱
				var paggingParameter3 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'sch_name',
				    'valueField':'Id',
				    'fk_key':'sch_name',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋班別編號',
				    'searchKey':'searchKey'
				};
				Window_6.addComboboxPagging('Maintable_6_Table_Inner_-1_sch_name',getDictionary('Window_Patrol_Route_Shift_Name'),paggingParameter3);
				$("#Maintable_6_Table_Inner_-1_sch_name_valueField").bind("DOMSubtreeModified", function()
				{
					var schData = Window_6['Maintable_6_Table_Inner_-1_sch_name'].ComboboxPagging_getData();
					if(schData)
					{
						for(var i=0;i<schData.length;i++)
						{
							if(schData[i].Id == $("#Maintable_6_Table_Inner_-1_sch_name_valueField").html())
							{
								$("#Maintable_6_Table_Inner_-1_b_time").val(schData[i].b_time);
								$("#Maintable_6_Table_Inner_-1_e_time").val(schData[i].e_time);
							}
						}
					}
				});
				//確認有無班別可選擇
				Window_6['Maintable_6_Table_Inner_-1_sch_name'].ComboboxPagging_NoData = function()
				{
					if($("#YesNo_Msg").size() == 0)
					{
						normalError_Msg_Withmask($("#Maintable_6_Table_Inner_-1_region2").val() + getDictionary('have no shift can be selected.'));
					}
				};
				//CSS
				var newTop = parseFloat($("#Maintable_6_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40*3;
				var newLeft = parseFloat($("#Maintable_6_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_6_Table_Inner_-1_sch_name_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_6_Table_Inner_-1_sch_name_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢班別名稱
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_b_time',getDictionary('Window_Patrol_Route_Start_Time'));
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_e_time',getDictionary('Window_Patrol_Route_End_Time'));
				Window_6.addCombobox('Maintable_6_Table_Inner_-1_stop',getDictionary('Window_Patrol_Route_Is_Used'));
				$("#Maintable_6_Table_Inner_-1_stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Patrol_Route_Used')+"'>"+getDictionary('Patrol_Route_Used')+"</option>" +
					"<option value='"+getDictionary('Patrol_Route_Not_Used')+"'>"+getDictionary('Patrol_Route_Not_Used')+"</option>"
				);
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_xdate',getDictionary('Window_Patrol_Route_Update_Date'));
				Window_6.addTextfield('Maintable_6_Table_Inner_-1_xname',getDictionary('Window_Patrol_Route_Update_Person'));
				Window_6.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_6.close();
				},function()
				{
					if(!$("#Maintable_6_Table_Inner_-1_g_name2").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_Condominium'));
					}
					else if(!$("#Maintable_6_Table_Inner_-1_region2").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_Site'));
					}
					else if(!$("#Maintable_6_Table_Inner_-1_p_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_Name'));
					}
					else if(!$("#Maintable_6_Table_Inner_-1_sch_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_Shift_Name'));
					}
					else if(!$("#Maintable_6_Table_Inner_-1_b_time").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_Start_Time'));
					}
					else if(!$("#Maintable_6_Table_Inner_-1_e_time").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_End_Time'));
					}
					else if(!$("#Maintable_6_Table_Inner_-1_stop").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Patrol_Route_Is_Used'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.reg_id = $("#Maintable_6_Table_Inner_-1_region2_valueField").html();
						ajaxData.p_name = $("#Maintable_6_Table_Inner_-1_p_name").val();
						ajaxData.pat_id = $("#Maintable_6_Table_Inner_-1_sch_name_valueField").html();
						ajaxData.sdate = $("#Maintable_6_Table_Inner_-1_sdate").val();
						ajaxData.stop = ($("#Maintable_6_Table_Inner_-1_stop").val() == getDictionary('Patrol_Route_Used')?"N":"Y");
						ajaxData.xdate = $("#Maintable_6_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_6_Table_Inner_-1_xname").val();
						ajaxData.Id = $(".Mainpage_Main_Table_Active").children().eq(10).html();
						ajaxData_withType(Maintable_6,"Update",JSON.stringify(ajaxData));
						Window_6.close();
					}
				});
				$("#Window_6_Yes").css
				({
					"margin-left":"75px"
				});
				//預設值
				$("#Maintable_6_Table_Inner_-1_g_name2").val($(".Mainpage_Main_Table_Active").children().eq(1).html());
				$("#Maintable_6_Table_Inner_-1_g_name2_valueField").html($(".Mainpage_Main_Table_Active").children().eq(11).html());
				$("#Maintable_6_Table_Inner_-1_region2").val($(".Mainpage_Main_Table_Active").children().eq(2).html());
				$("#Maintable_6_Table_Inner_-1_region2_valueField").html($(".Mainpage_Main_Table_Active").children().eq(12).html());
				$("#Maintable_6_Table_Inner_-1_p_name").val($(".Mainpage_Main_Table_Active").children().eq(3).html());
				$("#Maintable_6_Table_Inner_-1_sch_name").val($(".Mainpage_Main_Table_Active").children().eq(4).html());
				$("#Maintable_6_Table_Inner_-1_sch_name_valueField").html($(".Mainpage_Main_Table_Active").children().eq(13).html());
				$("#Maintable_6_Table_Inner_-1_b_time").val($(".Mainpage_Main_Table_Active").children().eq(5).html());
				$("#Maintable_6_Table_Inner_-1_e_time").val($(".Mainpage_Main_Table_Active").children().eq(6).html());
				$("#Maintable_6_Table_Inner_-1_stop").val($(".Mainpage_Main_Table_Active").children().eq(7).html());
				$("#Maintable_6_Table_Inner_-1_xdate").val($(".Mainpage_Main_Table_Active").children().eq(8).html());
				$("#Maintable_6_Table_Inner_-1_xname").val($(".Mainpage_Main_Table_Active").children().eq(9).html());
				//唯讀設定
				$("#Maintable_6_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_xname").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_stop").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_g_name2").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_region2").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_sch_name").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_b_time").attr('readonly',true);
				$("#Maintable_6_Table_Inner_-1_e_time").attr('readonly',true);
				//Window Css
				$("#Window_6_Body .Font.translateHtml").width(140);
				$("#Window_6_Body input").width("calc(100% - 145px)");
				$("#Window_6_Body select").width("calc(100% - 145px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//取消
			$("#6_Cancel").click(function()
			{
				$("#Mainpage_Menu_Title_6").children().click();
			});
			//刪除
			$("#6_Delete").click(function()
			{
				deleteRow(Maintable_6);
			});
			//FK 共用設定
			function fkSetting()
			{
				//FK 設定
				$("#Maintable_6_Table_Inner_-1_g_name").attr('placeholder',getDictionary('Patrol_Route_Condominium'));
				//配合 Window_Define 套件建立 div
				$("#Maintable_6_Table_Inner_-1_g_name").parent().append('<div id="Maintable_6_Table_Inner_-1_g_name_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
				Maintable_6_Combobox = Window_Define.Initialize();
				Maintable_6_Combobox.setId('Maintable_6_Table_Inner_-1_g_name');
				var paggingParameter = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'g_name',
				    'valueField':'Id',
				    'fk_key':'g_name',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋巡檢單位',
				    'searchKey':'searchKey'
				};
				Maintable_6_Combobox.addComboboxPagging('Maintable_6_Table_Inner_-1_g_name','',paggingParameter);
				Maintable_6_Combobox['Maintable_6_Table_Inner_-1_g_name'].ComboboxPagging_setPagging_Parameter(paggingParameter);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_6_Combobox,Maintable_6_Combobox.getId());
				//回存主物件
				Maintable_6['Maintable_6_Table_Inner_-1_g_name'] = Maintable_6_Combobox;
				//FK 設定

				//FK 設定
				$("#Maintable_6_Table_Inner_-1_region").attr('placeholder',getDictionary('Patrol_Route_Site'));
				//配合 Window_Define 套件建立 div
				$("#Maintable_6_Table_Inner_-1_region").parent().append('<div id="Maintable_6_Table_Inner_-1_region_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = false;
				var Maintable_6_Combobox = Window_Define.Initialize();
				Maintable_6_Combobox.setId('Maintable_6_Table_Inner_-1_region');
				var paggingParameter2 = 
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
				Maintable_6_Combobox.addComboboxPagging('Maintable_6_Table_Inner_-1_region','',paggingParameter2);
				Maintable_6_Combobox['Maintable_6_Table_Inner_-1_region'].ComboboxPagging_setPagging_Parameter(paggingParameter2);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_6_Combobox,Maintable_6_Combobox.getId());
				//回存主物件
				Maintable_6['Maintable_6_Table_Inner_-1_region'] = Maintable_6_Combobox;
				//FK 設定

				//當值改變
				var comboboxReset = false;
				$("#Maintable_6_Table_Inner_-1_g_name_valueField").bind("DOMSubtreeModified", function()
				{
					paggingParameter2.Url = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_6_Table_Inner_-1_g_name_valueField").html();
					Maintable_6['Maintable_6_Table_Inner_-1_region']['Maintable_6_Table_Inner_-1_region'].ComboboxPagging_setPagging_Parameter(paggingParameter2);
					Maintable_6['Maintable_6_Table_Inner_-1_region']['Maintable_6_Table_Inner_-1_region'].ComboboxPagging_load();
					if(comboboxReset)
					{
						//重設區域名稱
						$("#Maintable_6_Table_Inner_-1_region").val("");
						$("#Maintable_6_Table_Inner_-1_region_displayField").html("");
						$("#Maintable_6_Table_Inner_-1_region_valueField").html("");
					}
					comboboxReset = true;
					//新查詢
					var ajaxData = {};
					ajaxData.g_name = $("#Maintable_6_Table_Inner_-1_g_name").val();
					ajaxData_withType(Maintable_6,"Select",JSON.stringify(ajaxData));
				});

				//當值改變
				$("#Maintable_6_Table_Inner_-1_region_valueField").bind("DOMSubtreeModified", function()
				{
					if($("#Maintable_6_Table_Inner_-1_region_valueField").html())
					{
						//新查詢
						var ajaxData = {};
						ajaxData.g_name = $("#Maintable_6_Table_Inner_-1_g_name").val();
						ajaxData.region = $("#Maintable_6_Table_Inner_-1_region").val();
						ajaxData_withType(Maintable_6,"Select",JSON.stringify(ajaxData));
						//重整頁面
						ajaxData_withType(Maintable_6,"Select",JSON.stringify(ajaxData),null);
					}
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