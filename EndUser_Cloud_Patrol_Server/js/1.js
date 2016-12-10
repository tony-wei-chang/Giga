/*巡檢單位排班資料建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_1").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_1").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary("Shift_Arrangement_Info")+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="3_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#3_Function_Row").append('<div class="Window_Cancel" id="3_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("View")+'</div>');
			$("#3_Function_Row").append('<div class="Window_Cancel" id="3_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Reset")+'</div>');
			//巡檢單位
			$("#3_Function_Row").append('<div style="float:left;margin-left: 15px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_3_Table_Inner_-1_g_name" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//區域名稱
			$("#3_Function_Row").append('<div style="float:left;margin-left: -20px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_3_Table_Inner_-1_region" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//巡檢路線名稱
			$("#3_Function_Row").append('<div style="float:left;margin-left: -20px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_3_Table_Inner_-1_pat_name" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_3" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_3 = Grid_Panel_Define.Initialize();
			Maintable_3.setId("Maintable_3");
			Maintable_3.setResizer_ID('Maintable_3_Resizer');
			Maintable_3.setHeader_Title(['No.',getDictionary("Shift_Arrangement_Condominium"),getDictionary("Shift_Arrangement_Site"),getDictionary("Shift_Arrangement_Route_Name"),getDictionary("Shift_Arrangement_Shift_Name"),getDictionary("Shift_Arrangement_Patrol_Date"),getDictionary("Shift_Arrangement_Patrol_Person"),getDictionary("Shift_Arrangement_Update_Date"),getDictionary("Shift_Arrangement_Update_Person"),'系統編號','巡檢單位編號','區域編號','巡檢路線編號','巡檢員編號']);
			Maintable_3.setModel(['Number','g_name','region','p_name','sch_name','date_begin','gd_name','xdate','xname','Id','g_id','region_id','pat_id','gd_id']);
			Maintable_3.setPagesize(10);
			Maintable_3.setfieldShow([true,true,true,true,true,true,true,true,true,false,false,false,false,false]);
			Maintable_3.setHeader_Width(['4.5%','11.9375%','11.9375%','11.9375%','11.9375%','11.9375%','11.9375%','11.9375%','11.9375%','11.9375%','0%','0%','0%','0%']);
			Maintable_3.setHeaderMoveable(true);
			Maintable_3.setMulti_Selectable(true);
			Maintable_3.createHeader();
			Maintable_3.createTable();
			//改寫欄位
			Maintable_3.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_3.getId() + '_Table').children().length; i++)
				{
					$('#' + Maintable_3.getId() + '_Table').children().eq(i).children().eq(0).html(Maintable_3.getStart() + (i + 1));
				};
			});
			Maintable_3.createPagging();
			//資料表名稱
			Table_Name = "guard_schedule";
			Maintable_3.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_3.getStart();
					var Limit = Maintable_3.getPagesize();
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
			var object = {"g_name":UserName};
			Maintable_3.setLoad_Formdata(JSON.stringify(object));
			//Css 表格捲軸
			$("#Maintable_3_Table").css("height","calc(100% - 152px)");
			$("#Maintable_3").css("height","calc(100% - 40px)");
			//新增查詢按鈕監聽
			$("#3_Select").click(function()
			{
				//新增畫面
				Window_3 = Window_Define.Initialize();
				Window_3.setMask(true);
				Window_3.setSmartdetect(false);
				Window_3.setWidth(480);
				Window_3.setHeight(448);
				Window_3.setId('Window_3');
				Window_3.setTitle(getDictionary("Window_Shift_Arrangement_View"));
				Window_3.show();
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
				Window_3.addComboboxPagging('Maintable_3_Table_Inner_-1_g_name2',getDictionary("Window_Shift_Arrangement_Condominium"),paggingParameter);
				//區域名稱
				//當值改變 設定時間
				var comboboxReset_g_name2 = false;
				$("#Maintable_3_Table_Inner_-1_g_name2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_3_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter2.Url = tempUrl;
					Window_3['Maintable_3_Table_Inner_-1_region2']['ComboboxPagging_setPagging_Parameter'](paggingParameter2);
					Window_3['Maintable_3_Table_Inner_-1_region2']['ComboboxPagging_load']();

					if(comboboxReset_g_name2)
					{
						$("#Maintable_3_Table_Inner_-1_region2_valueField").val("");
						$("#Maintable_3_Table_Inner_-1_region2_displayField").val("");
						$("#Maintable_3_Table_Inner_-1_region2").val("");

						$("#Maintable_3_Table_Inner_-1_pat_name2").val("");
						$("#Maintable_3_Table_Inner_-1_pat_name2_valueField").html("");
						$("#Maintable_3_Table_Inner_-1_pat_name2_displayField").html("");

						$("#Maintable_3_Table_Inner_-1_p_name").val("");
						$("#Maintable_3_Table_Inner_-1_p_name_valueField").html("");
						$("#Maintable_3_Table_Inner_-1_p_name_displayField").html("");
					}
					comboboxReset_g_name2 = true;
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
				Window_3.addComboboxPagging('Maintable_3_Table_Inner_-1_region2',getDictionary("Window_Shift_Arrangement_Site"),paggingParameter2);
				var comboboxReset_region2 = false;
				$("#Maintable_3_Table_Inner_-1_region2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl2 = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_route&Id=" + $("#Maintable_3_Table_Inner_-1_region2_valueField").html();
					paggingParameter3.Url = tempUrl2;
					Window_3['Maintable_3_Table_Inner_-1_pat_name2']['ComboboxPagging_setPagging_Parameter'](paggingParameter3);
					Window_3['Maintable_3_Table_Inner_-1_pat_name2']['ComboboxPagging_load']();

					if(comboboxReset_region2)
					{
						$("#Maintable_3_Table_Inner_-1_pat_name2").val("");
						$("#Maintable_3_Table_Inner_-1_pat_name2_valueField").html("");
						$("#Maintable_3_Table_Inner_-1_pat_name2_displayField").html("");

						$("#Maintable_3_Table_Inner_-1_p_name").val("");
						$("#Maintable_3_Table_Inner_-1_p_name_valueField").html("");
						$("#Maintable_3_Table_Inner_-1_p_name_displayField").html("");
					}
					comboboxReset_region2 = true;
				});
				//CSS
				var newTop = parseFloat($("#Maintable_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40;
				var newLeft = parseFloat($("#Maintable_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_3_Table_Inner_-1_region2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_3_Table_Inner_-1_region2_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢路線名稱
				var paggingParameter3 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'p_name',
				    'valueField':'Id',
				    'fk_key':'pat_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋班別編號',
				    'searchKey':'searchKey'
				};
				Window_3.addComboboxPagging('Maintable_3_Table_Inner_-1_pat_name2',getDictionary("Window_Shift_Arrangement_Route_Name"),paggingParameter3);
				$("#Maintable_3_Table_Inner_-1_pat_name2_valueField").bind("DOMSubtreeModified", function()
				{
					var schData = Window_3['Maintable_3_Table_Inner_-1_pat_name2'].ComboboxPagging_getData();
					if(schData)
					{
						for(var i=0;i<schData.length;i++)
						{
							if(schData[i].Id == $("#Maintable_3_Table_Inner_-1_pat_name2_valueField").html())
							{
								$("#Maintable_3_Table_Inner_-1_sch_name").val(schData[i].sch_name);
							}
						}
					}
				});
				//CSS
				var newTop = parseFloat($("#Maintable_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40*2;
				var newLeft = parseFloat($("#Maintable_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_3_Table_Inner_-1_pat_name2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_3_Table_Inner_-1_pat_name2_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢路線名稱
				Window_3.addTextfield('Maintable_3_Table_Inner_-1_sch_name',getDictionary("Window_Shift_Arrangement_Shift_Name"));
				Window_3.addTextfield('Maintable_3_Table_Inner_-1_date_begin',getDictionary("Window_Shift_Arrangement_Patrol_Date"));
				//巡檢員
				var paggingParameter_gd_name = 
				{
					//分頁設定
					'Url':serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=1477734524476&TableName=security_guard&Order_field=Id&Order_Sequence=Asc",
				    'rootProperty':'Data',
				    'displayField':'gd_name',
				    'valueField':'Id',
				    'fk_key':'gd_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋班別編號',
				    'searchKey':'searchKey'
				};
				Window_3.addComboboxPagging('Maintable_3_Table_Inner_-1_gd_name',getDictionary("Window_Shift_Arrangement_Patrol_Person"),paggingParameter_gd_name);
				//CSS
				var newTop = parseFloat($("#Maintable_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40*5;
				var newLeft = parseFloat($("#Maintable_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_3_Table_Inner_-1_gd_name_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_3_Table_Inner_-1_gd_name_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢員
				Window_3.addTextfield('Maintable_3_Table_Inner_-1_xdate',getDictionary("Window_Shift_Arrangement_Update_Date"));
				Window_3.addTextfield('Maintable_3_Table_Inner_-1_xname',getDictionary("Window_Shift_Arrangement_Update_Person"));
				Window_3.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					Window_3.close();
				},function()
				{
					//設定使用者設定值
					$("#Maintable_3_Table_Inner_-1_g_name").val($("#Maintable_3_Table_Inner_-1_g_name2").val());
					$("#Maintable_3_Table_Inner_-1_g_name_valueField").html($("#Maintable_3_Table_Inner_-1_g_name2_valueField").html());
					$("#Maintable_3_Table_Inner_-1_region").val($("#Maintable_3_Table_Inner_-1_region2").val());
					$("#Maintable_3_Table_Inner_-1_region_valueField").html($("#Maintable_3_Table_Inner_-1_region2_valueField").html());
					$("#Maintable_3_Table_Inner_-1_pat_name").val($("#Maintable_3_Table_Inner_-1_pat_name2").val());
					$("#Maintable_3_Table_Inner_-1_pat_name_valueField").html($("#Maintable_3_Table_Inner_-1_pat_name2_valueField").html());
					var ajaxData = {};
					ajaxData.g_name = $("#Maintable_3_Table_Inner_-1_g_name").val();
					ajaxData.region = $("#Maintable_3_Table_Inner_-1_region").val();
					ajaxData.p_name = $("#Maintable_3_Table_Inner_-1_pat_name").val();
					ajaxData.sch_name = $("#Maintable_3_Table_Inner_-1_sch_name").val();
					if($("#Maintable_3_Table_Inner_-1_date_begin").val())
					{
						ajaxData.date_begin = $("#Maintable_3_Table_Inner_-1_date_begin").val();
					}
					ajaxData.gd_name = $("#Maintable_3_Table_Inner_-1_gd_name").val();
					ajaxData.xdate = $("#Maintable_3_Table_Inner_-1_xdate").val();
					ajaxData.xname = $("#Maintable_3_Table_Inner_-1_xname").val();
					ajaxData_withType(Maintable_3,"Select",JSON.stringify(ajaxData));
					Window_3.close();
				});
				$("#Window_3_Yes").css
				({
					"margin-left":"75px"
				});
				
				//產生日期選擇
				$("#Maintable_3_Table_Inner_-1_date_begin").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				//唯讀
				$("#Maintable_3_Table_Inner_-1_g_name2").attr('readonly',true);
				$("#Maintable_3_Table_Inner_-1_region2").attr('readonly',true);
				$("#Maintable_3_Table_Inner_-1_pat_name2").attr('readonly',true);
				$("#Maintable_3_Table_Inner_-1_sch_name").attr('readonly',true);
				//Window Css
				$("#Window_3_Body .Font.translateHtml").width(140);
				$("#Window_3_Body input").width("calc(100% - 145px)");
				//設定使用者設定值
				$("#Maintable_3_Table_Inner_-1_g_name2").val($("#Maintable_3_Table_Inner_-1_g_name").val());
				$("#Maintable_3_Table_Inner_-1_g_name2_valueField").html($("#Maintable_3_Table_Inner_-1_g_name_valueField").html());
				$("#Maintable_3_Table_Inner_-1_region2").val($("#Maintable_3_Table_Inner_-1_region").val());
				$("#Maintable_3_Table_Inner_-1_region2_valueField").html($("#Maintable_3_Table_Inner_-1_region_valueField").html());
				$("#Maintable_3_Table_Inner_-1_pat_name2").val($("#Maintable_3_Table_Inner_-1_pat_name").val());
				$("#Maintable_3_Table_Inner_-1_pat_name2_valueField").html($("#Maintable_3_Table_Inner_-1_pat_name_valueField").html());
				//翻譯後的CSS
				setCss_AfterTranslate();
				//不能選擇案場
				$("#Maintable_3_Table_Inner_-1_g_name2").attr('readonly',true);
				$("#Maintable_3_Table_Inner_-1_g_name2").unbind('focus');
			});
			//取消
			$("#3_Cancel").click(function()
			{
				$("#Mainpage_Menu_Title_1").children().click();
			});
			//FK 共用設定
			function fkSetting()
			{
				//FK 設定
				$("#Maintable_3_Table_Inner_-1_g_name").attr('placeholder',getDictionary("Shift_Arrangement_Condominium"));
				//配合 Window_Define 套件建立 div
				$("#Maintable_3_Table_Inner_-1_g_name").parent().append('<div id="Maintable_3_Table_Inner_-1_g_name_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
				Maintable_3_Combobox = Window_Define.Initialize();
				Maintable_3_Combobox.setId('Maintable_3_Table_Inner_-1_g_name');
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
				Maintable_3_Combobox.addComboboxPagging('Maintable_3_Table_Inner_-1_g_name','',paggingParameter);
				Maintable_3_Combobox['Maintable_3_Table_Inner_-1_g_name'].ComboboxPagging_setPagging_Parameter(paggingParameter);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_3_Combobox,Maintable_3_Combobox.getId());
				//回存主物件
				Maintable_3['Maintable_3_Table_Inner_-1_g_name'] = Maintable_3_Combobox;
				//FK 設定

				//當值改變
				var comboboxReset = false;
				$("#Maintable_3_Table_Inner_-1_g_name_valueField").bind("DOMSubtreeModified", function()
				{
					if($("#Maintable_3_Table_Inner_-1_g_name_valueField").html())
					{
						paggingParameter2.Url = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_3_Table_Inner_-1_g_name_valueField").html();
						Maintable_3['Maintable_3_Table_Inner_-1_region']['Maintable_3_Table_Inner_-1_region'].ComboboxPagging_setPagging_Parameter(paggingParameter2);
						Maintable_3['Maintable_3_Table_Inner_-1_region']['Maintable_3_Table_Inner_-1_region'].ComboboxPagging_load();
					}
					if(comboboxReset)
					{
						//重設區域名稱
						$("#Maintable_3_Table_Inner_-1_region").val("");
						$("#Maintable_3_Table_Inner_-1_region_displayField").html("");
						$("#Maintable_3_Table_Inner_-1_region_valueField").html("");
					}
					comboboxReset = true;
					if($("#Maintable_3_Table_Inner_-1_g_name_valueField").html())
					{
						//查詢
						var ajaxData = {};
						ajaxData.g_name = $("#Maintable_3_Table_Inner_-1_g_name").val();
						ajaxData_withType(Maintable_3,"Select",JSON.stringify(ajaxData));
					}
				});

				//FK 設定
				$("#Maintable_3_Table_Inner_-1_region").attr('placeholder',getDictionary("Shift_Arrangement_Site"));
				//配合 Window_Define 套件建立 div
				$("#Maintable_3_Table_Inner_-1_region").parent().append('<div id="Maintable_3_Table_Inner_-1_region_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = false;
				var Maintable_3_Combobox = Window_Define.Initialize();
				Maintable_3_Combobox.setId('Maintable_3_Table_Inner_-1_region');
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
				Maintable_3_Combobox.addComboboxPagging('Maintable_3_Table_Inner_-1_region','',paggingParameter2);
				Maintable_3_Combobox['Maintable_3_Table_Inner_-1_region'].ComboboxPagging_setPagging_Parameter(paggingParameter2);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_3_Combobox,Maintable_3_Combobox.getId());
				//回存主物件
				Maintable_3['Maintable_3_Table_Inner_-1_region'] = Maintable_3_Combobox;
				//FK 設定

				//當值改變
				var comboboxReset2 = false;
				$("#Maintable_3_Table_Inner_-1_region_valueField").bind("DOMSubtreeModified", function()
				{
					paggingParameter3.Url = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_route&Id=" + $("#Maintable_3_Table_Inner_-1_region_valueField").html();
					Maintable_3['Maintable_3_Table_Inner_-1_pat_name']['Maintable_3_Table_Inner_-1_pat_name'].ComboboxPagging_setPagging_Parameter(paggingParameter3);
					Maintable_3['Maintable_3_Table_Inner_-1_pat_name']['Maintable_3_Table_Inner_-1_pat_name'].ComboboxPagging_load();
					if(comboboxReset2)
					{
						//重設區域名稱
						$("#Maintable_3_Table_Inner_-1_pat_name").val("");
						$("#Maintable_3_Table_Inner_-1_pat_name_displayField").html("");
						$("#Maintable_3_Table_Inner_-1_pat_name_valueField").html("");
					}
					comboboxReset2 = true;
					if($("#Maintable_3_Table_Inner_-1_region_valueField").html())
					{
						//查詢
						var ajaxData = {};
						ajaxData.g_name = $("#Maintable_3_Table_Inner_-1_g_name").val();
						ajaxData.region = $("#Maintable_3_Table_Inner_-1_region").val();
						ajaxData_withType(Maintable_3,"Select",JSON.stringify(ajaxData));
					}
				});

				//FK 設定
				$("#Maintable_3_Table_Inner_-1_pat_name").attr('placeholder',getDictionary("Shift_Arrangement_Route_Name"));
				//配合 Window_Define 套件建立 div
				$("#Maintable_3_Table_Inner_-1_pat_name").parent().append('<div id="Maintable_3_Table_Inner_-1_pat_name_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = "";
				Maintable_3_Combobox = Window_Define.Initialize();
				Maintable_3_Combobox.setId('Maintable_3_Table_Inner_-1_pat_name');
				var paggingParameter3 = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'p_name',
				    'valueField':'Id',
				    'fk_key':'rou_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋路線名稱',
				    'searchKey':'searchKey'
				};
				Maintable_3_Combobox.addComboboxPagging('Maintable_3_Table_Inner_-1_pat_name','',paggingParameter3);
				Maintable_3_Combobox['Maintable_3_Table_Inner_-1_pat_name'].ComboboxPagging_setPagging_Parameter(paggingParameter3);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_3_Combobox,Maintable_3_Combobox.getId());
				//回存主物件
				Maintable_3['Maintable_3_Table_Inner_-1_pat_name'] = Maintable_3_Combobox;
				//FK 設定

				//當值改變
				$("#Maintable_3_Table_Inner_-1_pat_name_valueField").bind("DOMSubtreeModified", function()
				{
					if($("#Maintable_3_Table_Inner_-1_pat_name_valueField").html())
					{
						//查詢
						var ajaxData = {};
						ajaxData.g_name = $("#Maintable_3_Table_Inner_-1_g_name").val();
						ajaxData.region = $("#Maintable_3_Table_Inner_-1_region").val();
						ajaxData.p_name = $("#Maintable_3_Table_Inner_-1_pat_name").val();
						ajaxData_withType(Maintable_3,"Select",JSON.stringify(ajaxData));
					}
				});
				//不能選擇案場
				$("#Maintable_3_Table_Inner_-1_g_name").attr('readonly',true);
				$("#Maintable_3_Table_Inner_-1_g_name").unbind('focus');

				//預設值
				$("#Maintable_3_Table_Inner_-1_g_name").val(UserName);
				$("#Maintable_3_Table_Inner_-1_g_name_valueField").html(UserPK);
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