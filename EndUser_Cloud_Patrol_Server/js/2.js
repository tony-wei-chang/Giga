/*巡檢紀錄*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_2").click(function()
		{
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div id="Mainpage_Main_Word_Content" style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary("Check_Point_Record_Info")+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="2_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#2_Function_Row").append('<div class="Window_Cancel" id="2_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("View")+'</div>');
			$("#2_Function_Row").append('<div class="Window_Cancel" id="2_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Reset")+'</div>');
			//巡檢單位
			$("#2_Function_Row").append('<div style="float:left;margin-left: 15px;margin-top: -10px;"><input class="Font Window_Textfield" id="Home_Y02_a_Table_Inner_-1_g_name" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//區域名稱
			$("#2_Function_Row").append('<div style="float:left;margin-left: -20px;margin-top: -10px;"><input class="Font Window_Textfield" id="Home_Y02_a_Table_Inner_-1_region" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//巡檢路線名稱
			$("#2_Function_Row").append('<div style="float:left;margin-left: -20px;margin-top: -10px;"><input class="Font Window_Textfield" id="Home_Y02_a_Table_Inner_-1_r_date" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			$("#2_Select").css("margin-left","0");
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_2" style="clear: left;margin-top: 55px;"></div>');
			//tabs 多選表單
			$('#Mainpage_Main').append
			(
				'<div id="tabs" style="height:100%;">'+
				  	'<ul>'+
				    	'<li id="HomeTab_a" style="margin-top:-3px;">'+
				    		'<a href="#Home_Y02_a">'+getDictionary("Check_Point_Record")+'</a>'+
				    	'</li>'+
				    	'<li id="HomeTab_b" style="margin-top:-3px;margin-left: 1px;">'+
				    		'<a href="#Home_Y02_b">'+getDictionary("Check_Mission_Record")+'</a>'+
				    	'</li>'+
				    	'<li id="HomeTab_c" style="margin-top:-3px;margin-left: 1px;">'+
				    		'<a href="#Home_Y02_c">'+getDictionary("Event_Record")+'</a>'+
				    	'</li>'+
				  	'</ul>'+
				  	'<div id="Home_Y02_a" style="padding: 0px;margin-left: -2px;"></div>'+
				  	'<div id="Home_Y02_b" style="padding: 0px;margin-left: -2px;"></div>'+
				  	'<div id="Home_Y02_c" style="padding: 0px;margin-left: -2px;"></div>'+
				  	'<div id="Home_Y02_d" style="padding: 0px;margin-left: -2px;"></div>'+
				'</div>'
			);
			//tabs jquery ui 建立
			$(function()
			{
				var tabs = $( "#tabs" ).tabs();
				// close icon: removing the tab on click
				tabs.delegate( "span.ui-icon-close", "click", function()
				{
					var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
					$( "#" + panelId ).remove();
					tabs.tabs( "refresh" );
				});
				tabs.bind( "keyup", function(event)
				{
					if ( event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE )
					{
						var panelId = tabs.find( ".ui-tabs-active" ).remove().attr( "aria-controls" );
						$( "#" + panelId ).remove();
						tabs.tabs( "refresh" );
					}
				});
			});
			//打卡紀錄
			new function()
			{
				//修改標題文字
				$("#HomeTab_a a").click(function()
				{
					$("#Mainpage_Main_Word_Content").html(getDictionary("Check_Point_Record_Info"));
					check_TableName();
					ajaxData_withType(Home_Y02_a,"Select",JSON.stringify({"g_name":$("#Home_Y02_a_Table_Inner_-1_g_name").val()}),null);
				});
				//建立客戶設備啟用管理表格
				Home_Y02_a = Grid_Panel_Define.Initialize();
				Home_Y02_a.setId("Home_Y02_a");
				Home_Y02_a.setResizer_ID('Home_Y02_a_Resizer');
				Home_Y02_a.setHeader_Title(['No.',getDictionary("Check_Point_Record_Condominium"),getDictionary("Check_Point_Record_Site"),getDictionary("Check_Point_Record_Route_Name"),getDictionary("Check_Point_Record_Point_Name"),getDictionary("Check_Point_Record_ShiftName"),getDictionary("Check_Point_Record_Tag_ID"),getDictionary("Check_Point_Record_Chick_Time"),getDictionary("Check_Point_Record_Update_Date"),getDictionary("Check_Point_Record_Longitude"),getDictionary("Check_Point_Record_Latitude"),getDictionary("Check_Point_Record_Patrol_Person"),getDictionary("Check_Point_Record_Status")]);
				Home_Y02_a.setModel(['Number','g_name','region','p_name','patrol_point_name','sch_name','r_name','b_time','r_time','gps_lon','gps_lat','gd_name','status']);
				Home_Y02_a.setPagesize(10);
				Home_Y02_a.setfieldShow([true,true,true,true,true,true,true,true,true,true,true,true,true]);
				Home_Y02_a.setHeader_Width(['4.5%','7.9583%','7.9583%','7.9583%','7.9583%','7.9583%','7.9583%','7.9583%','7.9583%','7.9583%','7.9583%','7.9583%','7.9583%']);
				Home_Y02_a.setHeaderMoveable(true);
				Home_Y02_a.setMulti_Selectable(true);
				Home_Y02_a.createHeader();
				Home_Y02_a.createTable();
				//改寫欄位
				Home_Y02_a.setLoad_Callback(function()
				{
					//巡檢單位 隨機巡邏
					for (var i = 0; i < $("#Home_Y02_a_Table").children().find('div[name="g_name"]').length; i++)
					{
						var g_name = $("#Home_Y02_a_Table").children().find('div[name="g_name"]').eq(i).html();
						if(!g_name)
						{
							$("#Home_Y02_a_Table").children().find('div[name="g_name"]').eq(i).html(getDictionary("Random_Patrol"));
							$("#Home_Y02_a_Table").children().find('div[name="g_name"]').eq(i).attr("title",getDictionary("Random_Patrol"));
							$("#Home_Y02_a_Table").children().find('div[name="g_name"]').eq(i).parent().css("background-color","rgb(108,190,122)");
						}
					}
					//區域名稱 隨機巡邏
					for (var i = 0; i < $("#Home_Y02_a_Table").children().find('div[name="region"]').length; i++)
					{
						var region = $("#Home_Y02_a_Table").children().find('div[name="region"]').eq(i).html();
						if(!region)
						{
							$("#Home_Y02_a_Table").children().find('div[name="region"]').eq(i).html(getDictionary("Random_Patrol"));
							$("#Home_Y02_a_Table").children().find('div[name="region"]').eq(i).attr("title",getDictionary("Random_Patrol"));
							$("#Home_Y02_a_Table").children().find('div[name="region"]').eq(i).parent().css("background-color","rgb(108,190,122)");
						}
					}
					//巡檢路線 隨機巡邏
					for (var i = 0; i < $("#Home_Y02_a_Table").children().find('div[name="p_name"]').length; i++)
					{
						var p_name = $("#Home_Y02_a_Table").children().find('div[name="p_name"]').eq(i).html();
						if(!p_name)
						{
							$("#Home_Y02_a_Table").children().find('div[name="p_name"]').eq(i).html(getDictionary("Random_Patrol"));
							$("#Home_Y02_a_Table").children().find('div[name="p_name"]').eq(i).attr("title",getDictionary("Random_Patrol"));
							$("#Home_Y02_a_Table").children().find('div[name="p_name"]').eq(i).parent().css("background-color","rgb(108,190,122)");
						}
					}
					//巡檢班別 隨機巡邏
					for (var i = 0; i < $("#Home_Y02_a_Table").children().find('div[name="sch_name"]').length; i++)
					{
						var sch_name = $("#Home_Y02_a_Table").children().find('div[name="sch_name"]').eq(i).html();
						if(!sch_name)
						{
							$("#Home_Y02_a_Table").children().find('div[name="sch_name"]').eq(i).html(getDictionary("Random_Patrol"));
							$("#Home_Y02_a_Table").children().find('div[name="sch_name"]').eq(i).attr("title",getDictionary("Random_Patrol"));
							$("#Home_Y02_a_Table").children().find('div[name="p_name"]').eq(i).parent().css("background-color","rgb(108,190,122)");
						}
					}
					for(var i = 0; i < $('#' + Home_Y02_a.getId() + '_Table').children().length; i++)
					{
						//項目編號
						$('#' + Home_Y02_a.getId() + '_Table').children().eq(i).children().eq(0).html(Home_Y02_a.getStart() + (i + 1));
						//打卡狀態
						var status = $('#' + Home_Y02_a.getId() + '_Table').children().eq(i).children().eq(12).html();
						$('#' + Home_Y02_a.getId() + '_Table').children().eq(i).children().eq(12).html((status == "")?getDictionary("Check_Point_Record_Not_Used"):getDictionary("Check_Point_Record_Used"))
						$('#' + Home_Y02_a.getId() + '_Table').children().eq(i).children().eq(12).attr("title",(status == "")?getDictionary("Check_Point_Record_Not_Used"):getDictionary("Check_Point_Record_Used"))
						if($('#' + Home_Y02_a.getId() + '_Table').children().eq(i).children().eq(12).html() == getDictionary("Check_Point_Record_Not_Used"))
						{
							$('#' + Home_Y02_a.getId() + '_Table').children().eq(i).children().css('background-color','rgb(236,113,116)');
						}
					};
				});
				Home_Y02_a.createPagging();
				//資料表名稱
				Table_Name = "real_patrol";
				Home_Y02_a.getUrl = function getUrl()
				{
					try
					{
						//組合參數
						var Start = Home_Y02_a.getStart();
						var Limit = Home_Y02_a.getPagesize();
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
				Home_Y02_a.setLoad_Formdata(JSON.stringify(object));
				// $("#Home_Y02_a_Table_Inner_-1_g_name").focus();
				Home_Y02_a.load();
				//CSS
				$("#Home_Y02_a_Header").css("margin-top","1px");
				$("#Home_Y02_a_Table").css("height","calc(100% - 105px)");
				$("#Home_Y02_a").css("height","calc(100% - 120px)");
				//FK 共用設定
				function fkSetting()
				{
					//FK 設定
					$("#Home_Y02_a_Table_Inner_-1_g_name").attr('placeholder',getDictionary("Check_Point_Record_Condominium"));
					//配合 Window_Define 套件建立 div
					$("#Home_Y02_a_Table_Inner_-1_g_name").parent().append('<div id="Home_Y02_a_Table_Inner_-1_g_name_Group"></div>');
					//巡檢單位 fk 下拉式選單
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
					Home_Y02_a_Combobox = Window_Define.Initialize();
					Home_Y02_a_Combobox.setId('Home_Y02_a_Table_Inner_-1_g_name');
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
					Home_Y02_a_Combobox.addComboboxPagging('Home_Y02_a_Table_Inner_-1_g_name','',paggingParameter);
					Home_Y02_a_Combobox['Home_Y02_a_Table_Inner_-1_g_name'].ComboboxPagging_setPagging_Parameter(paggingParameter);
					//Giga 下拉式選單更新美工
					gigaCombobox_UpdateCSS(Home_Y02_a_Combobox,Home_Y02_a_Combobox.getId());
					//回存主物件
					Home_Y02_a['Home_Y02_a_Table_Inner_-1_g_name'] = Home_Y02_a_Combobox;
					//FK 設定

					//當值改變
					var comboboxReset = false;
					$("#Home_Y02_a_Table_Inner_-1_g_name_valueField").bind("DOMSubtreeModified", function()
					{
						paggingParameter2.Url = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Home_Y02_a_Table_Inner_-1_g_name_valueField").html();
						Home_Y02_a['Home_Y02_a_Table_Inner_-1_region']['Home_Y02_a_Table_Inner_-1_region'].ComboboxPagging_setPagging_Parameter(paggingParameter2);
						Home_Y02_a['Home_Y02_a_Table_Inner_-1_region']['Home_Y02_a_Table_Inner_-1_region'].ComboboxPagging_load();
						if(comboboxReset)
						{
							//重設區域名稱
							$("#Home_Y02_a_Table_Inner_-1_region").val("");
							$("#Home_Y02_a_Table_Inner_-1_region_displayField").html("");
							$("#Home_Y02_a_Table_Inner_-1_region_valueField").html("");
						}
						comboboxReset = true;
						check_TableName();
			    		//執行查詢
			    		ajaxData_withType(view,"Select",JSON.stringify({"g_name":$("#Home_Y02_a_Table_Inner_-1_g_name").val()}),null);
					});

					//FK 設定
					$("#Home_Y02_a_Table_Inner_-1_region").attr('placeholder',getDictionary("Check_Point_Record_Site"));
					//配合 Window_Define 套件建立 div
					$("#Home_Y02_a_Table_Inner_-1_region").parent().append('<div id="Home_Y02_a_Table_Inner_-1_region_Group"></div>');
					//巡檢單位 fk 下拉式選單
					var tempUrl = false;
					var Home_Y02_a_Combobox = Window_Define.Initialize();
					Home_Y02_a_Combobox.setId('Home_Y02_a_Table_Inner_-1_region');
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
					Home_Y02_a_Combobox.addComboboxPagging('Home_Y02_a_Table_Inner_-1_region','',paggingParameter2);
					Home_Y02_a_Combobox['Home_Y02_a_Table_Inner_-1_region'].ComboboxPagging_setPagging_Parameter(paggingParameter2);
					//Giga 下拉式選單更新美工
					gigaCombobox_UpdateCSS(Home_Y02_a_Combobox,Home_Y02_a_Combobox.getId());
					//回存主物件
					Home_Y02_a['Home_Y02_a_Table_Inner_-1_region'] = Home_Y02_a_Combobox;
					//當值改變
					$("#Home_Y02_a_Table_Inner_-1_region_valueField").bind("DOMSubtreeModified",function()
					{
						check_TableName();
			    		//執行查詢
			    		ajaxData_withType(view,"Select",JSON.stringify({"g_name":$("#Home_Y02_a_Table_Inner_-1_g_name").val()}),null);
					});
					//FK 設定

					//FK 設定
					$("#Home_Y02_a_Table_Inner_-1_r_date").attr('placeholder',getDictionary("Shift_Date"));
					//記錄日期避免重複執行
					oldDate = $("#Home_Y02_a_Table_Inner_-1_r_date").val();
					//產生日期選擇
					$("#Home_Y02_a_Table_Inner_-1_r_date").datetimepicker
					({
						timepicker:false,
						scrollInput:false,
						format:'Y-m-d'
					});
					$("#Home_Y02_a_Table_Inner_-1_r_date").on('focusin', function()
					{
					    $(this).data('val', $(this).val());
					});
					$("#Home_Y02_a_Table_Inner_-1_r_date").on('change', function()
					{
					    var prev = $(this).data('val');
					    var current = $(this).val();
					    if(prev != current && $("#Home_Y02_a_Table_Inner_-1_r_date").is(":focus"))
					    {
					    	check_TableName();
					    	//執行查詢
					    	ajaxData_withType(view,"Select",JSON.stringify({"g_name":$("#Home_Y02_a_Table_Inner_-1_g_name").val()}),null);
					    }
					});
					//不能選擇案場
					$("#Home_Y02_a_Table_Inner_-1_g_name").attr('readonly',true);
					$("#Home_Y02_a_Table_Inner_-1_g_name").unbind('focus');

					//預設值
					$("#Home_Y02_a_Table_Inner_-1_g_name").val(UserName);
					$("#Home_Y02_a_Table_Inner_-1_g_name_valueField").html(UserPK);
					//FK 設定
				}
				//翻譯後的CSS
				setCss_AfterTranslate();
			}
			//檢查事項紀錄
			new function()
			{
				//修改標題文字
				$("#HomeTab_b a").click(function()
				{
					$("#Mainpage_Main_Word_Content").html(getDictionary("Check_Mission_Record_Info"));
					check_TableName();
					ajaxData_withType(Home_Y02_b,"Select",JSON.stringify({"g_name":$("#Home_Y02_a_Table_Inner_-1_g_name").val()}),null);
				});
				//建立客戶設備啟用管理表格
				Home_Y02_b = Grid_Panel_Define.Initialize();
				Home_Y02_b.setId("Home_Y02_b");
				Home_Y02_b.setResizer_ID('Home_Y02_b_Resizer');
				Home_Y02_b.setHeader_Title(['No.',getDictionary("Check_Mission_Record_Condominium"),getDictionary("Check_Mission_Record_Site"),getDictionary("Check_Mission_Record_Route_Name"),getDictionary("Check_Mission_Record_Mission_Name"),getDictionary("Check_Mission_Record_ShiftName"),getDictionary("Check_Mission_Record_Check_Time"),getDictionary("Check_Mission_Record_Check_Mission"),getDictionary("Check_Mission_Record_Description"),getDictionary("Check_Mission_Record_Result"),getDictionary("Check_Mission_Record_Patrol_Person")]);
				Home_Y02_b.setModel(['Number','g_name','region','p_name','patrol_point_name','sch_name','r_time','c_item','c_desc','check_status','gd_name']);
				Home_Y02_b.setPagesize(10);
				Home_Y02_b.setfieldShow([true,true,true,true,true,true,true,true,true,true,true]);
				Home_Y02_b.setHeader_Width(['4.5%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%']);
				Home_Y02_b.setHeaderMoveable(true);
				Home_Y02_b.setMulti_Selectable(true);
				Home_Y02_b.createHeader();
				Home_Y02_b.createTable();
				//改寫欄位
				Home_Y02_b.setLoad_Callback(function()
				{
					//巡檢單位 隨機巡邏
					for (var i = 0; i < $("#Home_Y02_b_Table").children().find('div[name="g_name"]').length; i++)
					{
						var g_name = $("#Home_Y02_b_Table").children().find('div[name="g_name"]').eq(i).html();
						if(!g_name)
						{
							$("#Home_Y02_b_Table").children().find('div[name="g_name"]').eq(i).html(getDictionary("Random_Patrol"));
							$("#Home_Y02_b_Table").children().find('div[name="g_name"]').eq(i).attr("title",getDictionary("Random_Patrol"));
							$("#Home_Y02_b_Table").children().find('div[name="g_name"]').eq(i).parent().css("background-color","rgb(108,190,122)");
						}
					}
					//區域名稱 隨機巡邏
					for (var i = 0; i < $("#Home_Y02_b_Table").children().find('div[name="region"]').length; i++)
					{
						var region = $("#Home_Y02_b_Table").children().find('div[name="region"]').eq(i).html();
						if(!region)
						{
							$("#Home_Y02_b_Table").children().find('div[name="region"]').eq(i).html(getDictionary("Random_Patrol"));
							$("#Home_Y02_b_Table").children().find('div[name="region"]').eq(i).attr("title",getDictionary("Random_Patrol"));
							$("#Home_Y02_b_Table").children().find('div[name="region"]').eq(i).parent().css("background-color","rgb(108,190,122)");
						}
					}
					//巡檢路線 隨機巡邏
					for (var i = 0; i < $("#Home_Y02_b_Table").children().find('div[name="p_name"]').length; i++)
					{
						var p_name = $("#Home_Y02_b_Table").children().find('div[name="p_name"]').eq(i).html();
						if(!p_name)
						{
							$("#Home_Y02_b_Table").children().find('div[name="p_name"]').eq(i).html(getDictionary("Random_Patrol"));
							$("#Home_Y02_b_Table").children().find('div[name="p_name"]').eq(i).attr("title",getDictionary("Random_Patrol"));
							$("#Home_Y02_b_Table").children().find('div[name="p_name"]').eq(i).parent().css("background-color","rgb(108,190,122)");
						}
					}
					//巡檢班別 隨機巡邏
					for (var i = 0; i < $("#Home_Y02_b_Table").children().find('div[name="sch_name"]').length; i++)
					{
						var sch_name = $("#Home_Y02_b_Table").children().find('div[name="sch_name"]').eq(i).html();
						if(!sch_name)
						{
							$("#Home_Y02_b_Table").children().find('div[name="sch_name"]').eq(i).html(getDictionary("Random_Patrol"));
							$("#Home_Y02_b_Table").children().find('div[name="sch_name"]').eq(i).attr("title",getDictionary("Random_Patrol"));
							$("#Home_Y02_b_Table").children().find('div[name="sch_name"]').eq(i).parent().css("background-color","rgb(108,190,122)");
						}
					}
					//檢查時間為空值
					for (var i = 0; i < $("#Home_Y02_b_Table").children().find('div[name="r_time"]').length; i++)
					{
						var r_time = $("#Home_Y02_b_Table").children().find('div[name="r_time"]').eq(i).html();
						if(!r_time)
						{
							$("#Home_Y02_b_Table").children().find('div[name="r_time"]').eq(i).html(getDictionary("Check_Mission_Record_No_Checked"));
							$("#Home_Y02_b_Table").children().find('div[name="r_time"]').eq(i).attr("title",getDictionary("Check_Mission_Record_No_Checked"));
							$("#Home_Y02_b_Table").children().find('div[name="r_time"]').eq(i).parent().css("background-color","rgb(108,190,122)");
						}
					}
					for(var i = 0; i < $('#' + Home_Y02_b.getId() + '_Table').children().length; i++)
					{
						//項目編號
						$('#' + Home_Y02_b.getId() + '_Table').children().eq(i).children().eq(0).html(Home_Y02_b.getStart() + (i + 1));
						//打卡狀態
						var status = $('#' + Home_Y02_b.getId() + '_Table').children().eq(i).children().eq(9).html();
						$('#' + Home_Y02_b.getId() + '_Table').children().eq(i).children().eq(9).html((status == "")?getDictionary("Check_Mission_Record_Unnormal"):getDictionary("Check_Mission_Record_Normal"));
						$('#' + Home_Y02_b.getId() + '_Table').children().eq(i).children().eq(9).attr("title",(status == "")?getDictionary("Check_Mission_Record_Unnormal"):getDictionary("Check_Mission_Record_Normal"));
						if($('#' + Home_Y02_b.getId() + '_Table').children().eq(i).children().eq(9).html() == getDictionary("Check_Mission_Record_Unnormal"))
						{
							$('#' + Home_Y02_b.getId() + '_Table').children().eq(i).children().css('background-color','rgb(236,113,116)');
						}
					};
				});
				Home_Y02_b.createPagging();
				//資料表名稱
				Table_Name = "real_patrol_check";
				Home_Y02_b.getUrl = function getUrl()
				{
					try
					{
						//組合參數
						var Start = Home_Y02_b.getStart();
						var Limit = Home_Y02_b.getPagesize();
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
				var object = {"g_name":UserName};
				Home_Y02_b.setLoad_Formdata(JSON.stringify(object));
				//Home_Y02_b.load();
				//CSS
				$("#Home_Y02_b_Header").css("margin-top","1px");
				$("#Home_Y02_b_Table").css("height","calc(100% - 105px)");
				$("#Home_Y02_b").css("height","calc(100% - 120px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			}
			//巡檢檢查點事件紀錄
			new function()
			{
				//修改標題文字
				$("#HomeTab_c a").click(function()
				{
					$("#Mainpage_Main_Word_Content").html(getDictionary("Event_Record_Info"));
					check_TableName();
					ajaxData_withType(Home_Y02_c,"Select",JSON.stringify({"g_name":$("#Home_Y02_a_Table_Inner_-1_g_name").val()}),null);
				});
				//建立客戶設備啟用管理表格
				Home_Y02_c = Grid_Panel_Define.Initialize();
				Home_Y02_c.setId("Home_Y02_c");
				Home_Y02_c.setResizer_ID('Home_Y02_c_Resizer');
				Home_Y02_c.setHeader_Title(['No.',getDictionary("Event_Record_Condominium"),getDictionary("Event_Record_Site"),getDictionary("Event_Record_Route_Name"),getDictionary("Event_Record_ShiftName"),getDictionary("Event_Record_Mission_Name"),getDictionary("Event_Record_Check_Mission"),getDictionary("Event_Record_Text"),getDictionary("Event_Record_Image"),getDictionary("Event_Record_Voice"),getDictionary("Event_Record_Check_Time"),getDictionary("Event_Record_Patrol_Person")]);
				Home_Y02_c.setModel(['Number','g_name','region','p_name','sch_name','patrol_point_name','c_item','e_desc','e_fig','e_mp4','e_time','gd_name']);
				Home_Y02_c.setPagesize(10);
				Home_Y02_c.setfieldShow([true,true,true,true,true,true,true,true,true,true,true,true]);
				Home_Y02_c.setHeader_Width(['4.5%','8.68%','8.68%','8.68%','8.68%','8.68%','8.68%','8.68%','8.68%','8.68%','8.68%','8.68%']);
				Home_Y02_c.setHeaderMoveable(true);
				Home_Y02_c.setMulti_Selectable(true);
				Home_Y02_c.createHeader();
				Home_Y02_c.createTable();
				//改寫欄位
				Home_Y02_c.setLoad_Callback(function()
				{
					for(var i = 0; i < $('#' + Home_Y02_c.getId() + '_Table').children().length; i++)
					{
						//項目編號
						$('#' + Home_Y02_c.getId() + '_Table').children().eq(i).children().eq(0).html(Home_Y02_c.getStart() + (i + 1));
						//圖片
						var imgSrc = $('#' + Home_Y02_c.getId() + '_Table').children().eq(i).children().eq(8).html();
						$('#' + Home_Y02_c.getId() + '_Table').children().eq(i).children().eq(8).css("position","relative");
						$('#' + Home_Y02_c.getId() + '_Table').children().eq(i).children().eq(8).attr('imgSrc',imgSrc);
						$('#' + Home_Y02_c.getId() + '_Table').children().eq(i).children().eq(8).html("<img src='" + serverUrl + imgSrc + "' style='cursor:pointer;height: 50px;width: 40px;position: absolute;top: 0px;bottom: 0px;right: 0px;left: 0px;margin: auto;'></img>");
						$('#' + Home_Y02_c.getId() + '_Table').children().eq(i).children().eq(8).children().click(function()
						{
							openImg(serverUrl + $(this).parent().attr('imgSrc'));
						});
						//音檔
						var mp3Src = $('#' + Home_Y02_c.getId() + '_Table').children().eq(i).children().eq(9).html();
						$('#' + Home_Y02_c.getId() + '_Table').children().eq(i).children().eq(9).css("position","relative");
						$('#' + Home_Y02_c.getId() + '_Table').children().eq(i).children().eq(9).html('<div style="background-image: url(\'image/speaker.png\');background-size: 100% 100%;background-repeat: no-repeat;width: 30px;cursor: pointer;height: 30px;position: absolute;top: 0px;bottom: 0px;right: 0px;left: 0px;margin: auto;"></div>');
						$('#' + Home_Y02_c.getId() + '_Table').children().eq(i).children().eq(9).attr('mp3Src',mp3Src);
						$('#' + Home_Y02_c.getId() + '_Table').children().eq(i).children().eq(9).children().click(function()
						{
							openAudio(serverUrl + $(this).parent().attr('mp3Src'));
						});						
					};
					//開啟圖片
					function openAudio(url)
					{
						//顯示視窗
						var audioMsg = showMsg(getDictionary("Event_Record_View_Voice"),'',null,function()
						{
							audioMsg.close();
						});
						//隱藏 No 按鈕
						$('#YesNo_Msg_No').css("display","none");
						//置中 Yes 按鈕
						$('#YesNo_Msg_Yes').css({"margin-left":"4px","width":"97%"});
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
					//開啟圖片
					function openImg(url)
					{
						//顯示視窗
						var imgMsg = showMsg(getDictionary("Event_Record_View_Image"),'',null,function()
						{
							imgMsg.close();
						});
						//隱藏 No 按鈕
						$('#YesNo_Msg_No').css("display","none");
						//置中 Yes 按鈕
						$('#YesNo_Msg_Yes').css({"margin-left":"4px","width":"97%"});
						//顯示圖片
						$("#YesNo_Msg_Label").append('<div style="background-image: url(\'' + url + '\');background-size: 100% 100%;background-repeat: no-repeat;width: 200px;height: 200px;margin-left: 30px;"></div>');
						//調整高度
						imgMsg.setHeight(340);
						$("#YesNo_Msg").height(340);
						//調整標題顏色
						$("#YesNo_Msg_Title").css("background","rgb(91, 155, 213)");
						//垂直水平置中
						$("#YesNo_Msg").center();
					}
				});
				Home_Y02_c.createPagging();
				//資料表名稱
				Table_Name = "real_event";
				Home_Y02_c.getUrl = function getUrl()
				{
					try
					{
						//組合參數
						var Start = Home_Y02_c.getStart();
						var Limit = Home_Y02_c.getPagesize();
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
				var object = {"g_name":UserName};
				Home_Y02_c.setLoad_Formdata(JSON.stringify(object));
				//Home_Y02_c.load();
				//CSS
				$("#Home_Y02_c_Header").css("margin-top","1px");
				$("#Home_Y02_c_Table").css("height","calc(100% - 105px)");
				$("#Home_Y02_c").css("height","calc(100% - 120px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			}
			//新增查詢按鈕監聽
			$("#2_Select").click(function()
			{
				//Tab判斷 替換資料表名稱
				check_TableName();

				//打卡記錄用查詢
				if(Table_Name == "real_patrol")
				{
					//新增畫面
					Home_Y02_a_Window = Window_Define.Initialize();
					Home_Y02_a_Window.setMask(true);
					Home_Y02_a_Window.setSmartdetect(false);
					Home_Y02_a_Window.setWidth(480);
					Home_Y02_a_Window.setHeight(529);
					Home_Y02_a_Window.setId('Home_Y02_a_Window');
					Home_Y02_a_Window.setTitle(getDictionary("Window_Check_Point_Record_View"));
					Home_Y02_a_Window.show();
					Home_Y02_a_Window.addTextfield('Maintable_9_Table_Inner_-1_p_name',getDictionary("Window_Check_Point_Record_Route_Name"));
					Home_Y02_a_Window.addTextfield('Maintable_9_Table_Inner_-1_patrol_point_name',getDictionary("Window_Check_Point_Record_Point_Name"));
					Home_Y02_a_Window.addTextfield('Maintable_9_Table_Inner_-1_sch_name',getDictionary("Window_Check_Point_Record_ShiftName"));
					Home_Y02_a_Window.addTextfield('Maintable_9_Table_Inner_-1_r_name',getDictionary("Window_Check_Point_Record_Tag_ID"));
					Home_Y02_a_Window.addTextfield('Maintable_9_Table_Inner_-1_b_time',getDictionary("Window_Check_Point_Record_Chick_Time"));
					Home_Y02_a_Window.addTextfield('Maintable_9_Table_Inner_-1_e_time',getDictionary("Window_Check_Point_Record_Update_Date"));
					Home_Y02_a_Window.addTextfield('Maintable_9_Table_Inner_-1_gps_lon',getDictionary("Window_Check_Point_Record_Longitude"));
					Home_Y02_a_Window.addTextfield('Maintable_9_Table_Inner_-1_gps_lat',getDictionary("Window_Check_Point_Record_Latitude"));
					Home_Y02_a_Window.addTextfield('Maintable_9_Table_Inner_-1_gd_name',getDictionary("Window_Check_Point_Record_Patrol_Person"));
					Home_Y02_a_Window.addTextfield('Maintable_9_Table_Inner_-1_status',getDictionary("Window_Check_Point_Record_Status"));
					Home_Y02_a_Window.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
					{
						Home_Y02_a_Window.close();
					},function()
					{
						var ajaxData = {};
						ajaxData.g_name = $("#Home_Y02_a_Table_Inner_-1_g_name_valueField").html();
						ajaxData.region = $("#Home_Y02_a_Table_Inner_-1_region_valueField").html();
						ajaxData.r_date = $("#Home_Y02_a_Table_Inner_-1_r_date").val();
						ajaxData.p_name = $("#Maintable_9_Table_Inner_-1_p_name").val();
						ajaxData.patrol_point_name = $("#Maintable_9_Table_Inner_-1_patrol_point_name").val();
						ajaxData.sch_name = $("#Maintable_9_Table_Inner_-1_sch_name").val();
						ajaxData.r_name = $("#Maintable_9_Table_Inner_-1_r_name").val();
						ajaxData.b_time = $("#Maintable_9_Table_Inner_-1_b_time").val();
						ajaxData.r_time = $("#Maintable_9_Table_Inner_-1_r_time").val();
						ajaxData.gps_lon = $("#Maintable_9_Table_Inner_-1_gps_lon").val();
						ajaxData.gps_lat = $("#Maintable_9_Table_Inner_-1_gps_lat").val();
						ajaxData.gd_name = $("#Maintable_9_Table_Inner_-1_gd_name").val();

						if($("#Maintable_9_Table_Inner_-1_status").val() == getDictionary("Check_Point_Record_Used"))
						{
							ajaxData.status = 1;
						}
						else if($("#Maintable_9_Table_Inner_-1_status").val() == getDictionary("Check_Point_Record_Not_Used"))
						{
							ajaxData.status = 0;
						}
						ajaxData_withType(Home_Y02_a,"Select",JSON.stringify(ajaxData));
						Home_Y02_a_Window.close();
					});
					$("#Home_Y02_a_Window_Yes").css
					({
						"margin-left":"75px"
					});
					//產生日期選擇
					$("#Maintable_9_Table_Inner_-1_b_time").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
					$("#Maintable_9_Table_Inner_-1_e_time").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
					//Window Css
					$("#Home_Y02_a_Window .Font.translateHtml").width(155);
					$("#Home_Y02_a_Window input").width("calc(100% - 160px)");
					$("#Home_Y02_a_Window select").width("calc(100% - 160px)");
				}
				//檢查事件記錄
				else if(Table_Name == "real_patrol_check")
				{
					//新增畫面
					Home_Y02_b_Window = Window_Define.Initialize();
					Home_Y02_b_Window.setMask(true);
					Home_Y02_b_Window.setSmartdetect(false);
					Home_Y02_b_Window.setWidth(480);
					Home_Y02_b_Window.setHeight(449);
					Home_Y02_b_Window.setId('Home_Y02_b_Window');
					Home_Y02_b_Window.setTitle(getDictionary("View_Check_Mission_Record"));
					Home_Y02_b_Window.show();
					Home_Y02_b_Window.addTextfield('Maintable_9_Table_Inner_-1_p_name',getDictionary("Window_Check_Mission_Record_Route_Name"));
					Home_Y02_b_Window.addTextfield('Maintable_9_Table_Inner_-1_patrol_point_name',getDictionary("Window_Check_Mission_Record_Mission_Name"));
					Home_Y02_b_Window.addTextfield('Maintable_9_Table_Inner_-1_sch_name',getDictionary("Window_Check_Mission_Record_ShiftName"));
					Home_Y02_b_Window.addTextfield('Maintable_9_Table_Inner_-1_r_time',getDictionary("Window_Check_Mission_Record_Check_Time"));
					Home_Y02_b_Window.addTextfield('Maintable_9_Table_Inner_-1_c_item',getDictionary("Window_Check_Mission_Record_Check_Mission"));
					Home_Y02_b_Window.addTextfield('Maintable_9_Table_Inner_-1_c_desc',getDictionary("Window_Check_Mission_Record_Description"));
					Home_Y02_b_Window.addTextfield('Maintable_9_Table_Inner_-1_check_status',getDictionary("Window_Check_Mission_Record_Result"));
					Home_Y02_b_Window.addTextfield('Maintable_9_Table_Inner_-1_gd_name',getDictionary("Window_Check_Mission_Record_Patrol_Person"));
					Home_Y02_b_Window.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
					{
						Home_Y02_b_Window.close();
					},function()
					{
						var ajaxData = {};
						ajaxData.g_name = $("#Home_Y02_a_Table_Inner_-1_g_name_valueField").html();
						ajaxData.region = $("#Home_Y02_a_Table_Inner_-1_region_valueField").html();
						ajaxData.r_date = $("#Home_Y02_a_Table_Inner_-1_r_date").val();
						ajaxData.p_name = $("#Maintable_9_Table_Inner_-1_p_name").val();
						ajaxData.patrol_point_name = $("#Maintable_9_Table_Inner_-1_patrol_point_name").val();
						ajaxData.sch_name = $("#Maintable_9_Table_Inner_-1_sch_name").val();
						ajaxData.r_time = $("#Maintable_9_Table_Inner_-1_r_time").val();
						ajaxData.c_item = $("#Maintable_9_Table_Inner_-1_c_item").val();
						ajaxData.c_desc = $("#Maintable_9_Table_Inner_-1_c_desc").val();
						ajaxData.check_status = $("#Maintable_9_Table_Inner_-1_check_status").val();
						ajaxData.gd_name = $("#Maintable_9_Table_Inner_-1_gd_name").val();

						if($("#Maintable_9_Table_Inner_-1_check_status").val() == getDictionary("Check_Mission_Record_Unnormal"))
						{
							ajaxData.check_status = 0;
						}
						else if($("#Maintable_9_Table_Inner_-1_check_status").val() == getDictionary("Check_Mission_Record_Normal"))
						{
							ajaxData.check_status = 1;
						}
						ajaxData_withType(Home_Y02_b,"Select",JSON.stringify(ajaxData));
						Home_Y02_b_Window.close();
					});
					$("#Home_Y02_b_Window_Yes").css
					({
						"margin-left":"75px"
					});
					//產生日期選擇
					$("#Maintable_9_Table_Inner_-1_sdate").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
					//Window Css
					$("#Home_Y02_b_Window .Font.translateHtml").width(155);
					$("#Home_Y02_b_Window input").width("calc(100% - 160px)");
					$("#Home_Y02_b_Window select").width("calc(100% - 160px)");
				}
				//巡檢檢查點事件記錄
				else if(Table_Name == "real_event")
				{
					//新增畫面
					Home_Y02_c_Window = Window_Define.Initialize();
					Home_Y02_c_Window.setMask(true);
					Home_Y02_c_Window.setSmartdetect(false);
					Home_Y02_c_Window.setWidth(480);
					Home_Y02_c_Window.setHeight(489);
					Home_Y02_c_Window.setId('Home_Y02_c_Window');
					Home_Y02_c_Window.setTitle(getDictionary("View_Event_Record"));
					Home_Y02_c_Window.show();
					Home_Y02_c_Window.addTextfield('Maintable_9_Table_Inner_-1_p_name',getDictionary("Window_Event_Record_Route_Name"));
					Home_Y02_c_Window.addTextfield('Maintable_9_Table_Inner_-1_sch_name',getDictionary("Window_Event_Record_ShiftName"));
					Home_Y02_c_Window.addTextfield('Maintable_9_Table_Inner_-1_patrol_point_name',getDictionary("Window_Event_Record_Mission_Name"));
					Home_Y02_c_Window.addTextfield('Maintable_9_Table_Inner_-1_c_item',getDictionary("Window_Event_Record_Check_Mission"));
					Home_Y02_c_Window.addTextfield('Maintable_9_Table_Inner_-1_e_desc',getDictionary("Window_Event_Record_Text"));
					Home_Y02_c_Window.addTextfield('Maintable_9_Table_Inner_-1_e_fig',getDictionary("Window_Event_Record_Image"));
					Home_Y02_c_Window.addTextfield('Maintable_9_Table_Inner_-1_e_mp4',getDictionary("Window_Event_Record_Voice"));
					Home_Y02_c_Window.addTextfield('Maintable_9_Table_Inner_-1_e_time',getDictionary("Window_Event_Record_Check_Time"));
					Home_Y02_c_Window.addTextfield('Maintable_9_Table_Inner_-1_gd_name',getDictionary("Window_Event_Record_Patrol_Person"));
					Home_Y02_c_Window.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
					{
						Home_Y02_c_Window.close();
					},function()
					{
						var ajaxData = {};
						ajaxData.g_name = $("#Home_Y02_a_Table_Inner_-1_g_name_valueField").html();
						ajaxData.region = $("#Home_Y02_a_Table_Inner_-1_region_valueField").html();
						ajaxData.r_date = $("#Home_Y02_a_Table_Inner_-1_r_date").val();
						ajaxData.p_name = $("#Maintable_9_Table_Inner_-1_p_name").val();
						ajaxData.patrol_point_name = $("#Maintable_9_Table_Inner_-1_patrol_point_name").val();
						ajaxData.sch_name = $("#Maintable_9_Table_Inner_-1_sch_name").val();
						ajaxData.c_item = $("#Maintable_9_Table_Inner_-1_c_item").val();
						ajaxData.e_desc = $("#Maintable_9_Table_Inner_-1_e_desc").val();
						ajaxData.e_time = $("#Maintable_9_Table_Inner_-1_e_time").val();
						ajaxData.gd_name = $("#Maintable_9_Table_Inner_-1_gd_name").val();
						ajaxData_withType(Home_Y02_c,"Select",JSON.stringify(ajaxData));
						Home_Y02_c_Window.close();
					});
					$("#Home_Y02_c_Window_Yes").css
					({
						"margin-left":"75px"
					});
					//唯讀
					$("#Maintable_9_Table_Inner_-1_e_fig").attr('readonly',true);
					$("#Maintable_9_Table_Inner_-1_e_mp4").attr('readonly',true);
					$("#Maintable_9_Table_Inner_-1_e_fig").val(getDictionary("Can not view."));
					$("#Maintable_9_Table_Inner_-1_e_mp4").val(getDictionary("Can not view."));
					//產生日期選擇
					$("#Maintable_9_Table_Inner_-1_e_time").datetimepicker({timepicker:false,format:'Y-m-d'});
					//Window Css
					$("#Home_Y02_c_Window .Font.translateHtml").width(155);
					$("#Home_Y02_c_Window input").width("calc(100% - 160px)");
					$("#Home_Y02_c_Window select").width("calc(100% - 160px)");
				}
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//重設
			$("#2_Cancel").click(function()
			{
				$("#Mainpage_Menu_Title_2").click();
			});
			//檢查資料表名稱
			check_TableName();
			function check_TableName()
			{
				//Tab判斷 替換資料表名稱
				var activeTabname = $("#Mainpage_Main").find(".ui-state-active").attr('id');
				if(activeTabname == "HomeTab_a")
				{
					Table_Name = "real_patrol";
					view = (typeof(Home_Y02_a) != "undefined")?Home_Y02_a:"";
				}
				else if(activeTabname == "HomeTab_b")
				{
					Table_Name = "real_patrol_check";
					view = (typeof(Home_Y02_b) != "undefined")?Home_Y02_b:"";
				}
				else if(activeTabname == "HomeTab_c")
				{
					Table_Name = "real_event";
					view = (typeof(Home_Y02_c) != "undefined")?Home_Y02_c:"";
				}
			}
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