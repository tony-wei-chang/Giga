/*巡檢點建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_7_2").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_1").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary('Patrol_Point_Info')+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="7_2_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#7_2_Function_Row").append('<div class="Window_Cancel" id="7_2_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Insert')+'</div>');
			$("#7_2_Function_Row").append('<div class="Window_Cancel" id="7_2_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('View')+'</div>');
			$("#7_2_Function_Row").append('<div class="Window_Cancel" id="7_2_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Update')+'</div>');
			$("#7_2_Function_Row").append('<div class="Window_Cancel" id="7_2_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Delete')+'</div>');
			$("#7_2_Function_Row").append('<div class="Window_Cancel" id="7_2_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Reset')+'</div>');
			//巡檢單位
			$("#7_2_Function_Row").append('<div style="float:left;margin-left: 15px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_7_2_Table_Inner_-1_g_name" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//區域名稱
			$("#7_2_Function_Row").append('<div style="float:left;margin-left: -20px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_7_2_Table_Inner_-1_region" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_7_2" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_7_2 = Grid_Panel_Define.Initialize();
			Maintable_7_2.setId("Maintable_7_2");
			Maintable_7_2.setResizer_ID('Maintable_7_2_Resizer');
			Maintable_7_2.setHeader_Title(['No.',getDictionary('Patrol_Point_Condominium'),getDictionary('Patrol_Point_Site'),getDictionary('Patrol_Point_Name'),getDictionary('Patrol_Point_Description'),getDictionary('Patrol_Point_Picture'),getDictionary('Patrol_Point_CPS_Card'),getDictionary('Patrol_Point_Longitude'),getDictionary('Patrol_Point_Latitude'),getDictionary('Patrol_Point_Is_Used'),getDictionary('Patrol_Point_Create_Date'),getDictionary('Patrol_Point_Update_Date'),getDictionary('Patrol_Point_Update_Person'),'系統編號','區域編號','巡檢單位編號','標籤編號']);
			Maintable_7_2.setModel(['Number','g_name','region','p_name','p_desc','p_fig','r_name','gps_lon','gps_lat','stop','sdate','xdate','xname','Id','reg_id','guard_id','p_rfid']);
			Maintable_7_2.setPagesize(10);
			Maintable_7_2.setfieldShow([true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false]);
			Maintable_7_2.setHeader_Width(['4.5%','7.95%','7.95%','7.95%','7.95%','7.95%','7.95%','7.95%','7.95%','7.95%','7.95%','7.95%','7.95%','0%','0%','0%','0%']);
			Maintable_7_2.setHeaderMoveable(true);
			Maintable_7_2.setMulti_Selectable(true);
			Maintable_7_2.createHeader();
			Maintable_7_2.createTable();
			//改寫欄位
			Maintable_7_2.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_7_2.getId() + '_Table').children().length; i++)
				{
					$('#' + Maintable_7_2.getId() + '_Table').children().eq(i).children().eq(0).html(Maintable_7_2.getStart() + (i + 1));
					//是否啟用
					var stop = $('#' + Maintable_7_2.getId() + '_Table').children().eq(i).children().eq(9).html();
					$('#' + Maintable_7_2.getId() + '_Table').children().eq(i).children().eq(9).html((stop == "Y")?getDictionary('Patrol_Point_Not_Used'):getDictionary('Patrol_Point_Used'));
					$('#' + Maintable_7_2.getId() + '_Table').children().eq(i).children().eq(9).attr("title",(stop == "Y")?getDictionary('Patrol_Point_Not_Used'):getDictionary('Patrol_Point_Used'));
					//圖片
					var img = serverUrl + $('#' + Maintable_7_2.getId() + '_Table').children().eq(i).children().eq(5).html();
					$('#' + Maintable_7_2.getId() + '_Table').children().eq(i).children().eq(5).html("<img src='" + img + "' style='height: 50px;width: 40px;position: inherit;top: 0px;bottom: 0px;right: 0px;left: 0px;margin-top: 5px;'></img>");
				};
			});
			Maintable_7_2.createPagging();
			//資料表名稱
			Table_Name = "patrol_point";
			Maintable_7_2.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_7_2.getStart();
					var Limit = Maintable_7_2.getPagesize();
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
			Maintable_7_2.setLoad_Formdata(object);
			Maintable_7_2.load();
			// $("#Maintable_7_2_Table_Inner_-1_g_name").focus();
			//Css 表格捲軸
			$("#Maintable_7_2_Table").css("height","calc(100% - 152px)");
			$("#Maintable_7_2").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#7_2_Insert").click(function()
			{
				//新增畫面
				Window_7_2 = Window_Define.Initialize();
				Window_7_2.setMask(true);
				Window_7_2.setSmartdetect(false);
				Window_7_2.setWidth(480);
				Window_7_2.setHeight(606);
				Window_7_2.setId('Window_7_2');
				Window_7_2.setTitle(getDictionary('Window_Patrol_Point_Insert'));
				Window_7_2.show();
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
				Window_7_2.addComboboxPagging('Maintable_7_2_Table_Inner_-1_g_name2',getDictionary('Window_Patrol_Point_Condominium'),paggingParameter);
				//區域名稱
				//當值改變 設定時間
				var comboboxReset = false;
				$("#Maintable_7_2_Table_Inner_-1_g_name2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_7_2_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter2.Url = tempUrl;
					Window_7_2['Maintable_7_2_Table_Inner_-1_region2']['ComboboxPagging_setPagging_Parameter'](paggingParameter2);
					Window_7_2['Maintable_7_2_Table_Inner_-1_region2']['ComboboxPagging_load']();
					if(comboboxReset)
					{
						$("#Maintable_7_2_Table_Inner_-1_region2_valueField").val("");
						$("#Maintable_7_2_Table_Inner_-1_region2_displayField").val("");
						$("#Maintable_7_2_Table_Inner_-1_region2").val("");
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
				Window_7_2.addComboboxPagging('Maintable_7_2_Table_Inner_-1_region2',getDictionary('Window_Patrol_Point_Site'),paggingParameter2);
				//確認有無區域可選擇
				Window_7_2['Maintable_7_2_Table_Inner_-1_region2'].ComboboxPagging_NoData = function()
				{
					normalError_Msg_Withmask($("#Maintable_7_2_Table_Inner_-1_g_name2").val() + "無區域可選擇");
				};
				//CSS
				var newTop = parseFloat($("#Maintable_7_2_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40;
				var newLeft = parseFloat($("#Maintable_7_2_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_2_Table_Inner_-1_region2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_2_Table_Inner_-1_region2_Combobox_Pagging").css("left",newLeft + "px");
				//區域名稱
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_p_name',getDictionary('Window_Patrol_Point_Name'));
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_p_desc',getDictionary('Window_Patrol_Point_Description'));
				//巡檢點照片
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_p_fig',getDictionary('Window_Patrol_Point_Picture'));
				$("#Maintable_7_2_Table_Inner_-1_p_fig").click(function()
				{
					$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").click();
				});
				//上傳實際輸入框
				$("#Maintable_7_2_Table_Inner_-1_p_fig").parent().append("<input id='Maintable_7_2_Table_Inner_-1_p_fig_hide'>");
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_p_fig_hide','上傳檔案 :');
				$("#Maintable_7_2_Table_Inner_-1_p_fig_hide_Group").hide();
				$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").attr('type','file');
				$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").attr('accept','image/*');
				$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").hide();
				$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").change(function()
				{
					var fileName = $("#Maintable_7_2_Table_Inner_-1_p_fig_hide").val().split("\\")[$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").val().split("\\").length - 1];
					$("#Maintable_7_2_Table_Inner_-1_p_fig").val(fileName);
					$("#Maintable_7_2_Table_Inner_-1_p_fig").attr('title',$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").val());
				});
				//巡檢點照片
				//巡檢點標籤編號
				var paggingParameter3 = 
				{
					//分頁設定
					'Url':serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=rfid",
				    'rootProperty':'Data',
				    'displayField':'r_name',
				    'valueField':'Id',
				    'fk_key':'p_rfid',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋標籤編號',
				    'searchKey':'searchKey'
				};
				Window_7_2.addComboboxPagging('Maintable_7_2_Table_Inner_-1_r_name',getDictionary('Window_Patrol_Point_CPS_Card'),paggingParameter3);
				//確認有無區域可選擇
				Window_7_2['Maintable_7_2_Table_Inner_-1_r_name'].ComboboxPagging_NoData = function()
				{
					normalError_Msg_Withmask(getDictionary('No CPS data can be selected.'));
				};
				//CSS
				var newTop = parseFloat($("#Maintable_7_2_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40*5;
				var newLeft = parseFloat($("#Maintable_7_2_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_2_Table_Inner_-1_r_name_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_2_Table_Inner_-1_r_name_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢點標籤編號
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_gps_lat',getDictionary('Window_Patrol_Point_Longitude'));
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_gps_lon',getDictionary('Window_Patrol_Point_Latitude'));
				Window_7_2.addCombobox('Maintable_7_2_Table_Inner_-1_stop',getDictionary('Window_Patrol_Point_Is_Used'));
				$("#Maintable_7_2_Table_Inner_-1_stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Window_Patrol_Point_Used')+"'>"+getDictionary('Window_Patrol_Point_Used')+"</option>" +
					"<option value='"+getDictionary('Window_Patrol_Point_Not_Used')+"'>"+getDictionary('Window_Patrol_Point_Not_Used')+"</option>"
				);
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_sdate',getDictionary('Window_Patrol_Point_Create_Date'));
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_xdate',getDictionary('Window_Patrol_Point_Update_Date'));
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_xname',getDictionary('Window_Patrol_Point_Update_Person'));
				Window_7_2.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_7_2.close();
				},function()
				{
					if(!$("#Maintable_7_2_Table_Inner_-1_g_name2").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Condominium'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_region2").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Site'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_p_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Name'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_p_desc").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Description'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_p_fig").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Picture'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_r_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_CPS_Card'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_gps_lat").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Longitude'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_gps_lon").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Latitude'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.reg_id = $("#Maintable_7_2_Table_Inner_-1_region2_valueField").html();
						ajaxData.p_name = $("#Maintable_7_2_Table_Inner_-1_p_name").val();
						ajaxData.gps_lon = $("#Maintable_7_2_Table_Inner_-1_gps_lon").val();
						ajaxData.gps_lat = $("#Maintable_7_2_Table_Inner_-1_gps_lat").val();
						ajaxData.p_desc = $("#Maintable_7_2_Table_Inner_-1_p_desc").val();
						ajaxData.p_fig = $("#Maintable_7_2_Table_Inner_-1_p_fig").val();
						ajaxData.stop = ($("#Maintable_7_2_Table_Inner_-1_stop").val() == getDictionary('Patrol_Point_Used')?"N":"Y");
						ajaxData.p_rfid = $("#Maintable_7_2_Table_Inner_-1_r_name_valueField").html();
						ajaxData.sdate = $("#Maintable_7_2_Table_Inner_-1_sdate").val();
						ajaxData.xdate = $("#Maintable_7_2_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_7_2_Table_Inner_-1_xname").val();
						ajaxData_withType(Maintable_7_2,"Insert",JSON.stringify(ajaxData));
					}
				});
				$("#Window_7_2_Yes").css
				({
					"margin-left":"75px"
				});
				//預設值
				$("#Maintable_7_2_Table_Inner_-1_sdate").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#Maintable_7_2_Table_Inner_-1_xdate").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#Maintable_7_2_Table_Inner_-1_xname").val(UserName);
				$("#Maintable_7_2_Table_Inner_-1_stop").val(getDictionary('Window_Patrol_Point_Used'));
				//唯讀設定
				$("#Maintable_7_2_Table_Inner_-1_sdate").attr('readonly',true);
				$("#Maintable_7_2_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_7_2_Table_Inner_-1_xname").attr('readonly',true);
				$("#Maintable_7_2_Table_Inner_-1_stop").attr('readonly',true);
				$("#Maintable_7_2_Table_Inner_-1_g_name2").attr('readonly',true);
				$("#Maintable_7_2_Table_Inner_-1_region2").attr('readonly',true);
				$("#Maintable_7_2_Table_Inner_-1_r_name").attr('readonly',true);
				$("#Maintable_7_2_Table_Inner_-1_p_fig").attr('readonly','true');
				//Window Css
				$("#Window_7_2_Body .Font.translateHtml").width(145);
				$("#Window_7_2_Body input").width("calc(100% - 150px)");
				$("#Window_7_2_Body select").width("calc(100% - 150px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//新增查詢按鈕監聽
			$("#7_2_Select").click(function()
			{
				//新增畫面
				Window_7_2 = Window_Define.Initialize();
				Window_7_2.setMask(true);
				Window_7_2.setSmartdetect(false);
				Window_7_2.setWidth(480);
				Window_7_2.setHeight(606);
				Window_7_2.setId('Window_7_2');
				Window_7_2.setTitle(getDictionary('Window_Patrol_Point_View'));
				Window_7_2.show();var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
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
				Window_7_2.addComboboxPagging('Maintable_7_2_Table_Inner_-1_g_name2',getDictionary('Window_Patrol_Point_Condominium'),paggingParameter);
				//區域名稱
				//當值改變 設定時間
				var comboboxReset = false;
				$("#Maintable_7_2_Table_Inner_-1_g_name2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_7_2_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter2.Url = tempUrl;
					Window_7_2['Maintable_7_2_Table_Inner_-1_region2']['ComboboxPagging_setPagging_Parameter'](paggingParameter2);
					Window_7_2['Maintable_7_2_Table_Inner_-1_region2']['ComboboxPagging_load']();
					if(comboboxReset)
					{
						$("#Maintable_7_2_Table_Inner_-1_region2_valueField").val("");
						$("#Maintable_7_2_Table_Inner_-1_region2_displayField").val("");
						$("#Maintable_7_2_Table_Inner_-1_region2").val("");
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
				Window_7_2.addComboboxPagging('Maintable_7_2_Table_Inner_-1_region2',getDictionary('Window_Patrol_Point_Site'),paggingParameter2);
				//CSS
				var newTop = parseFloat($("#Maintable_7_2_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40;
				var newLeft = parseFloat($("#Maintable_7_2_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_2_Table_Inner_-1_region2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_2_Table_Inner_-1_region2_Combobox_Pagging").css("left",newLeft + "px");
				//區域名稱
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_p_name',getDictionary('Window_Patrol_Point_Name'));
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_p_desc',getDictionary('Window_Patrol_Point_Description'));
				//巡檢點照片
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_p_fig',getDictionary('Window_Patrol_Point_Picture'));
				//巡檢點照片
				//巡檢點標籤編號
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_r_name',getDictionary('Window_Patrol_Point_CPS_Card'));
				//巡檢點標籤編號
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_gps_lat',getDictionary('Window_Patrol_Point_Longitude'));
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_gps_lon',getDictionary('Window_Patrol_Point_Latitude'));
				Window_7_2.addCombobox('Maintable_7_2_Table_Inner_-1_stop',getDictionary('Window_Patrol_Point_Is_Used'));
				$("#Maintable_7_2_Table_Inner_-1_stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Patrol_Point_Used')+"'>"+getDictionary('Patrol_Point_Used')+"</option>" +
					"<option value='"+getDictionary('Patrol_Point_Not_Used')+"'>"+getDictionary('Patrol_Point_Not_Used')+"</option>"
				);
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_sdate',getDictionary('Window_Patrol_Point_Create_Date'));
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_xdate',getDictionary('Window_Patrol_Point_Update_Date'));
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_xname',getDictionary('Window_Patrol_Point_Update_Person'));
				Window_7_2.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_7_2.close();
				},function()
				{
					//設定使用者設定值
					$("#Maintable_7_2_Table_Inner_-1_g_name").val($("#Maintable_7_2_Table_Inner_-1_g_name2").val());
					$("#Maintable_7_2_Table_Inner_-1_g_name_valueField").html($("#Maintable_7_2_Table_Inner_-1_g_name2_valueField").html());
					$("#Maintable_7_2_Table_Inner_-1_region").val($("#Maintable_7_2_Table_Inner_-1_region2").val());
					$("#Maintable_7_2_Table_Inner_-1_region_valueField").html($("#Maintable_7_2_Table_Inner_-1_region2_valueField").html());
					var ajaxData = {};
					ajaxData.g_name = $("#Maintable_7_2_Table_Inner_-1_g_name").val();
					ajaxData.region = $("#Maintable_7_2_Table_Inner_-1_region").val();
					ajaxData.reg_id = $("#Maintable_7_2_Table_Inner_-1_region2_valueField").html();
					ajaxData.p_name = $("#Maintable_7_2_Table_Inner_-1_p_name").val();
					ajaxData.gps_lon = $("#Maintable_7_2_Table_Inner_-1_gps_lon").val();
					ajaxData.gps_lat = $("#Maintable_7_2_Table_Inner_-1_gps_lat").val();
					ajaxData.p_desc = $("#Maintable_7_2_Table_Inner_-1_p_desc").val();
					ajaxData.p_fig = $("#Maintable_7_2_Table_Inner_-1_p_fig").val();
					ajaxData.r_name = $("#Maintable_7_2_Table_Inner_-1_r_name").val();
					if($("#Maintable_7_2_Table_Inner_-1_stop").val())
					{
						ajaxData.stop = ($("#Maintable_7_2_Table_Inner_-1_stop").val() == getDictionary('Patrol_Point_Used')?"N":"Y");
					}
					ajaxData.sdate = $("#Maintable_7_2_Table_Inner_-1_sdate").val();
					ajaxData.xdate = $("#Maintable_7_2_Table_Inner_-1_xdate").val();
					ajaxData.xname = $("#Maintable_7_2_Table_Inner_-1_xname").val();
					ajaxData_withType(Maintable_7_2,"Select",JSON.stringify(ajaxData),function()
					{
						Window_7_2.close();
					});
				});
				$("#Window_7_2_Yes").css
				({
					"margin-left":"75px"
				});
				//唯讀
				$("#Maintable_7_2_Table_Inner_-1_p_fig").attr('readonly','true');
				$("#Maintable_7_2_Table_Inner_-1_g_name2").attr('readonly','true');
				//預設
				$("#Maintable_7_2_Table_Inner_-1_p_fig").val(getDictionary('Can not view.'));
				//Window Css
				$("#Window_7_2_Body .Font.translateHtml").width(145);
				$("#Window_7_2_Body input").width("calc(100% - 150px)");
				$("#Window_7_2_Body select").width("calc(100% - 150px)");
				//設定使用者設定值
				$("#Maintable_7_2_Table_Inner_-1_g_name2").val($("#Maintable_7_2_Table_Inner_-1_g_name").val());
				$("#Maintable_7_2_Table_Inner_-1_g_name2_valueField").html($("#Maintable_7_2_Table_Inner_-1_g_name_valueField").html());
				$("#Maintable_7_2_Table_Inner_-1_region2").val($("#Maintable_7_2_Table_Inner_-1_region").val());
				$("#Maintable_7_2_Table_Inner_-1_region2_valueField").html($("#Maintable_7_2_Table_Inner_-1_region_valueField").html());
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//修改
			$("#7_2_Update").click(function()
			{
				if($(".Mainpage_Main_Table_Active").size() == 0)
				{
					normalError_Msg(getDictionary('Please choose item to update.'));
					return;
				}
				//新增畫面
				Window_7_2 = Window_Define.Initialize();
				Window_7_2.setMask(true);
				Window_7_2.setSmartdetect(false);
				Window_7_2.setWidth(480);
				Window_7_2.setHeight(606);
				Window_7_2.setId('Window_7_2');
				Window_7_2.setTitle(getDictionary('Window_Patrol_Point_Update'));
				Window_7_2.show();
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
				Window_7_2.addComboboxPagging('Maintable_7_2_Table_Inner_-1_g_name2',getDictionary('Window_Patrol_Point_Condominium'),paggingParameter);
				//區域名稱
				//當值改變 設定時間
				var comboboxReset = false;
				$("#Maintable_7_2_Table_Inner_-1_g_name2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_7_2_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter2.Url = tempUrl;
					Window_7_2['Maintable_7_2_Table_Inner_-1_region2']['ComboboxPagging_setPagging_Parameter'](paggingParameter2);
					Window_7_2['Maintable_7_2_Table_Inner_-1_region2']['ComboboxPagging_load']();
					if(comboboxReset)
					{
						$("#Maintable_7_2_Table_Inner_-1_region2_valueField").val("");
						$("#Maintable_7_2_Table_Inner_-1_region2_displayField").val("");
						$("#Maintable_7_2_Table_Inner_-1_region2").val("");
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
				Window_7_2.addComboboxPagging('Maintable_7_2_Table_Inner_-1_region2',getDictionary('Window_Patrol_Point_Site'),paggingParameter2);
				//CSS
				var newTop = parseFloat($("#Maintable_7_2_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40;
				var newLeft = parseFloat($("#Maintable_7_2_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_2_Table_Inner_-1_region2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_2_Table_Inner_-1_region2_Combobox_Pagging").css("left",newLeft + "px");
				//區域名稱
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_p_name',getDictionary('Window_Patrol_Point_Name'));
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_p_desc',getDictionary('Window_Patrol_Point_Description'));
				//巡檢點照片
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_p_fig',getDictionary('Window_Patrol_Point_Picture'));
				$("#Maintable_7_2_Table_Inner_-1_p_fig").click(function()
				{
					$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").click();
				});
				//上傳實際輸入框
				$("#Maintable_7_2_Table_Inner_-1_p_fig").parent().append("<input id='Maintable_7_2_Table_Inner_-1_p_fig_hide'>");
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_p_fig_hide','上傳檔案 :');
				$("#Maintable_7_2_Table_Inner_-1_p_fig_hide_Group").hide();
				$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").attr('type','file');
				$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").attr('accept','image/*');
				$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").hide();
				$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").change(function()
				{
					var fileName = $("#Maintable_7_2_Table_Inner_-1_p_fig_hide").val().split("\\")[$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").val().split("\\").length - 1];
					$("#Maintable_7_2_Table_Inner_-1_p_fig").val(fileName);
					$("#Maintable_7_2_Table_Inner_-1_p_fig").attr('title',$("#Maintable_7_2_Table_Inner_-1_p_fig_hide").val());
				});
				//巡檢點照片
				//巡檢點標籤編號
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_r_name',getDictionary('Window_Patrol_Point_CPS_Card'));
				//CSS
				var newTop = parseFloat($("#Maintable_7_2_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40*5;
				var newLeft = parseFloat($("#Maintable_7_2_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_2_Table_Inner_-1_r_name_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_2_Table_Inner_-1_r_name_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢點標籤編號
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_gps_lat',getDictionary('Window_Patrol_Point_Longitude'));
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_gps_lon',getDictionary('Window_Patrol_Point_Latitude'));
				Window_7_2.addCombobox('Maintable_7_2_Table_Inner_-1_stop',getDictionary('Window_Patrol_Point_Is_Used'));
				$("#Maintable_7_2_Table_Inner_-1_stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Patrol_Point_Used')+"'>"+getDictionary('Patrol_Point_Used')+"</option>" +
					"<option value='"+getDictionary('Patrol_Point_Not_Used')+"'>"+getDictionary('Patrol_Point_Not_Used')+"</option>"
				);
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_sdate',getDictionary('Window_Patrol_Point_Create_Date'));
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_xdate',getDictionary('Window_Patrol_Point_Update_Date'));
				Window_7_2.addTextfield('Maintable_7_2_Table_Inner_-1_xname',getDictionary('Window_Patrol_Point_Update_Person'));
				Window_7_2.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_7_2.close();
				},function()
				{
					if(!$("#Maintable_7_2_Table_Inner_-1_g_name2").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Condominium'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_region2").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Site'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_p_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Name'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_p_desc").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Description'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_p_fig").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Picture'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_r_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_CPS_Card'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_gps_lat").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Longitude'));
					}
					else if(!$("#Maintable_7_2_Table_Inner_-1_gps_lon").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Patrol_Point_Latitude'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.reg_id = $("#Maintable_7_2_Table_Inner_-1_region2_valueField").html();
						ajaxData.p_name = $("#Maintable_7_2_Table_Inner_-1_p_name").val();
						ajaxData.gps_lon = $("#Maintable_7_2_Table_Inner_-1_gps_lon").val();
						ajaxData.gps_lat = $("#Maintable_7_2_Table_Inner_-1_gps_lat").val();
						ajaxData.p_desc = $("#Maintable_7_2_Table_Inner_-1_p_desc").val();
						ajaxData.p_fig = $("#Maintable_7_2_Table_Inner_-1_p_fig").val();
						ajaxData.stop = ($("#Maintable_7_2_Table_Inner_-1_stop").val() == getDictionary('Patrol_Point_Used')?"N":"Y");
						ajaxData.p_rfid = $("#Maintable_7_2_Table_Inner_-1_r_name_valueField").html();
						ajaxData.sdate = $("#Maintable_7_2_Table_Inner_-1_sdate").val();
						ajaxData.xdate = $("#Maintable_7_2_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_7_2_Table_Inner_-1_xname").val();
						ajaxData.Id = $(".Mainpage_Main_Table_Active").children().eq(13).html();
						ajaxData_withType(Maintable_7_2,"Update",JSON.stringify(ajaxData));
					}
				});
				$("#Window_7_2_Yes").css
				({
					"margin-left":"75px"
				});
				//設定值
				$("#Maintable_7_2_Table_Inner_-1_g_name2").val($(".Mainpage_Main_Table_Active").children().eq(1).html());
				$("#Maintable_7_2_Table_Inner_-1_region2").val($(".Mainpage_Main_Table_Active").children().eq(2).html());
				$("#Maintable_7_2_Table_Inner_-1_g_name2_valueField").html($(".Mainpage_Main_Table_Active").children().eq(15).html());
				$("#Maintable_7_2_Table_Inner_-1_region2_valueField").html($(".Mainpage_Main_Table_Active").children().eq(14).html());
				$("#Maintable_7_2_Table_Inner_-1_p_name").val($(".Mainpage_Main_Table_Active").children().eq(3).html());
				$("#Maintable_7_2_Table_Inner_-1_p_desc").val($(".Mainpage_Main_Table_Active").children().eq(4).html());
				$("#Maintable_7_2_Table_Inner_-1_stop").val($(".Mainpage_Main_Table_Active").children().eq(9).html());
				var fileName = $(".Mainpage_Main_Table_Active").children().eq(5).children().attr('src');
				$("#Maintable_7_2_Table_Inner_-1_p_fig").val(fileName.split("/")[fileName.split("/").length - 1]);
				$("#Maintable_7_2_Table_Inner_-1_gps_lat").val($(".Mainpage_Main_Table_Active").children().eq(7).html());
				$("#Maintable_7_2_Table_Inner_-1_gps_lon").val($(".Mainpage_Main_Table_Active").children().eq(8).html());
				$("#Maintable_7_2_Table_Inner_-1_sdate").val($(".Mainpage_Main_Table_Active").children().eq(10).html());
				$("#Maintable_7_2_Table_Inner_-1_xdate").val($(".Mainpage_Main_Table_Active").children().eq(11).html());
				$("#Maintable_7_2_Table_Inner_-1_xname").val($(".Mainpage_Main_Table_Active").children().eq(12).html());
				//Window Css
				$("#Window_7_2_Body .Font.translateHtml").width(145);
				$("#Window_7_2_Body input").width("calc(100% - 150px)");
				$("#Window_7_2_Body select").width("calc(100% - 150px)");
				//唯讀
				$("#Maintable_7_2_Table_Inner_-1_g_name2").attr('readonly','true');
				$("#Maintable_7_2_Table_Inner_-1_region2").attr('readonly','true');
				$("#Maintable_7_2_Table_Inner_-1_r_name").attr('readonly','true');
				$("#Maintable_7_2_Table_Inner_-1_stop").attr('readonly','true');
				$("#Maintable_7_2_Table_Inner_-1_sdate").attr('readonly','true');
				$("#Maintable_7_2_Table_Inner_-1_xdate").attr('readonly','true');
				$("#Maintable_7_2_Table_Inner_-1_xname").attr('readonly','true');
				$("#Maintable_7_2_Table_Inner_-1_p_fig").attr('readonly','true');
				//預設
				$("#Maintable_7_2_Table_Inner_-1_r_name").val(getDictionary('Can not update.'));
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//存檔
			$("#7_2_Save").click(function()
			{
				//執行存檔
				saveAjaxfield(Maintable_7_2);
			});
			//取消
			$("#7_2_Cancel").click(function()
			{
				$("#Mainpage_Menu_Title_7_2").children().click();
			});
			//刪除
			$("#7_2_Delete").click(function()
			{
				deleteRow(Maintable_7_2);
			});
			//FK 共用設定
			function fkSetting()
			{
				//FK 設定
				$("#Maintable_7_2_Table_Inner_-1_g_name").attr('placeholder',getDictionary('Patrol_Point_Condominium'));
				//FK 設定
				//配合 Window_Define 套件建立 div
				$("#Maintable_7_2_Table_Inner_-1_g_name").parent().append('<div id="Maintable_7_2_Table_Inner_-1_g_name_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
				Maintable_7_2_Combobox = Window_Define.Initialize();
				Maintable_7_2_Combobox.setId('Maintable_7_2_Table_Inner_-1_g_name');
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
				Maintable_7_2_Combobox.addComboboxPagging('Maintable_7_2_Table_Inner_-1_g_name','',paggingParameter0);
				Maintable_7_2_Combobox['Maintable_7_2_Table_Inner_-1_g_name'].ComboboxPagging_setPagging_Parameter(paggingParameter0);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_7_2_Combobox,Maintable_7_2_Combobox.getId());
				//回存主物件
				Maintable_7_2['Maintable_7_2_Table_Inner_-1_g_name'] = Maintable_7_2_Combobox;
				//FK 設定

				//當值改變 設定時間
				var comboboxReset = false;
				$("#Maintable_7_2_Table_Inner_-1_g_name_valueField").bind("DOMSubtreeModified", function()
				{
					var dataObject = Maintable_7_2['Maintable_7_2_Table_Inner_-1_g_name']['Maintable_7_2_Table_Inner_-1_g_name']['ComboboxPagging_Data'];
					if(dataObject)
					{
						var valueField = "Id";
						var selected_valueField = $("#Maintable_7_2_Table_Inner_-1_g_name_valueField").html();
						//下拉式選單網址
						var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + selected_valueField;
						paggingParameter.Url = tempUrl;
						Maintable_7_2['Maintable_7_2_Table_Inner_-1_region']['Maintable_7_2_Table_Inner_-1_region'].ComboboxPagging_setPagging_Parameter(paggingParameter);
						Maintable_7_2['Maintable_7_2_Table_Inner_-1_region']['Maintable_7_2_Table_Inner_-1_region'].ComboboxPagging_load();

						//選了之後直接查詢
						var ajaxData = {};
						ajaxData.g_name = $("#Maintable_7_2_Table_Inner_-1_g_name").val();
						ajaxData.region = $("#Maintable_7_2_Table_Inner_-1_region").val();
						ajaxData.reg_id = $("#Maintable_7_2_Table_Inner_-1_region2_valueField").html();
						ajaxData.p_name = $("#Maintable_7_2_Table_Inner_-1_p_name").val();
						ajaxData.gps_lon = $("#Maintable_7_2_Table_Inner_-1_gps_lon").val();
						ajaxData.gps_lat = $("#Maintable_7_2_Table_Inner_-1_gps_lat").val();
						ajaxData.p_desc = $("#Maintable_7_2_Table_Inner_-1_p_desc").val();
						ajaxData.p_fig = $("#Maintable_7_2_Table_Inner_-1_p_fig").val();
						ajaxData.r_name = $("#Maintable_7_2_Table_Inner_-1_r_name").val();
						if($("#Maintable_7_2_Table_Inner_-1_stop").val())
						{
							ajaxData.stop = ($("#Maintable_7_2_Table_Inner_-1_stop").val() == getDictionary('Patrol_Point_Used')?"N":"Y");
						}
						ajaxData.sdate = $("#Maintable_7_2_Table_Inner_-1_sdate").val();
						ajaxData.xdate = $("#Maintable_7_2_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_7_2_Table_Inner_-1_xname").val();
						ajaxData_withType(Maintable_7_2,"Select",JSON.stringify(ajaxData));
					}
					if(comboboxReset)
					{
						$("#Maintable_7_2_Table_Inner_-1_region_valueField").val("");
						$("#Maintable_7_2_Table_Inner_-1_region_displayField").val("");
						$("#Maintable_7_2_Table_Inner_-1_region").val("");
					}
					comboboxReset = true;
				});

				//FK 設定
				$("#Maintable_7_2_Table_Inner_-1_region").attr('placeholder',getDictionary('Patrol_Point_Site'));
				//配合 Window_Define 套件建立 div
				$("#Maintable_7_2_Table_Inner_-1_region").parent().append('<div id="Maintable_7_2_Table_Inner_-1_region_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = "";
				Maintable_7_2_Combobox = Window_Define.Initialize();
				Maintable_7_2_Combobox.setId('Maintable_7_2_Table_Inner_-1_region');
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
				Maintable_7_2_Combobox.addComboboxPagging('Maintable_7_2_Table_Inner_-1_region','',paggingParameter);
				Maintable_7_2_Combobox['Maintable_7_2_Table_Inner_-1_region'].ComboboxPagging_setPagging_Parameter(paggingParameter);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_7_2_Combobox,Maintable_7_2_Combobox.getId());
				//回存主物件
				Maintable_7_2['Maintable_7_2_Table_Inner_-1_region'] = Maintable_7_2_Combobox;
				//FK 設定

				//當值改變 設定時間
				$("#Maintable_7_2_Table_Inner_-1_region_valueField").bind("DOMSubtreeModified", function()
				{
					var dataObject = Maintable_7_2['Maintable_7_2_Table_Inner_-1_region']['Maintable_7_2_Table_Inner_-1_region']['ComboboxPagging_Data'];
					if(dataObject)
					{
						var valueField = "Id";
						var selected_valueField = $("#Maintable_7_2_Table_Inner_-1_region_valueField").html();
						for (var i = 0; i < dataObject.length; i++)
						{
							if(dataObject[i][valueField] == selected_valueField)
							{
								//下拉式選單網址
								var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=rfid&Id=" + selected_valueField;
								paggingParameter2.Url = tempUrl;
							}
						}
					}
					//重整頁面
					ajaxData_withType(Maintable_7_2,"Select","{}",null);
				});

				paggingParameter2 = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'r_name',
				    'valueField':'Id',
				    'fk_key':'p_rfid',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋標籤名稱',
				    'searchKey':'searchKey'
				};

				// //FK 設定
				// //配合 Window_Define 套件建立 div
				// $("#Maintable_7_2_Table_Inner_-1_r_name").parent().append('<div id="Maintable_7_2_Table_Inner_-1_r_name_Group"></div>');
				// //巡檢單位 fk 下拉式選單
				// var tempUrl = "";
				// Maintable_7_2_Combobox = Window_Define.Initialize();
				// Maintable_7_2_Combobox.setId('Maintable_7_2_Table_Inner_-1_r_name');
				// var paggingParameter2 = 
				// {
				// 	//分頁設定
				// 	'Url':tempUrl,
				//     'rootProperty':'Data',
				//     'displayField':'r_name',
				//     'valueField':'Id',
				//     'fk_key':'p_rfid',
				//     'pageSize':'5',
				//     'searchUrl':tempUrl,
				//     'searchPlaceholder':'搜尋標籤名稱',
				//     'searchKey':'searchKey'
				// };
				// Maintable_7_2_Combobox.addComboboxPagging('Maintable_7_2_Table_Inner_-1_r_name','',paggingParameter2);
				// Maintable_7_2_Combobox['Maintable_7_2_Table_Inner_-1_r_name'].ComboboxPagging_setPagging_Parameter(paggingParameter2);
				// //Giga 下拉式選單更新美工
				// gigaCombobox_UpdateCSS(Maintable_7_2_Combobox,Maintable_7_2_Combobox.getId());
				// //回存主物件
				// Maintable_7_2['Maintable_7_2_Table_Inner_-1_r_name'] = Maintable_7_2_Combobox;
				// //FK 設定
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