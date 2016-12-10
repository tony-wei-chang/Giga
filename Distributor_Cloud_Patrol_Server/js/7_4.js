/*巡檢班別建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_7_4").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_1").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary('Shift_Name_Info')+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="7_4_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#7_4_Function_Row").append('<div class="Window_Cancel" id="7_4_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Insert')+'</div>');
			$("#7_4_Function_Row").append('<div class="Window_Cancel" id="7_4_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('View')+'</div>');
			$("#7_4_Function_Row").append('<div class="Window_Cancel" id="7_4_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Update')+'</div>');
			$("#7_4_Function_Row").append('<div class="Window_Cancel" id="7_4_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Delete')+'</div>');
			$("#7_4_Function_Row").append('<div class="Window_Cancel" id="7_4_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Reset')+'</div>');
			//巡檢單位
			$("#7_4_Function_Row").append('<div style="float:left;margin-left: 15px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_7_4_Table_Inner_-1_g_name" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_7_4" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			var Maintable_7_4 = Grid_Panel_Define.Initialize();
			Maintable_7_4.setId("Maintable_7_4");
			Maintable_7_4.setResizer_ID('Maintable_7_4_Resizer');
			Maintable_7_4.setHeader_Title(['No.',getDictionary('Shift_Name_Condominium'),getDictionary('Shift_Name_ShiftName'),getDictionary('Shift_Name_Begin_Time'),getDictionary('Shift_Name_End_Time'),getDictionary('Shift_Name_Update_Date'),getDictionary('Shift_Name_Update_Person'),'系統編號','巡檢單位編號']);
			Maintable_7_4.setModel(['Number','g_name','sch_name','b_time','e_time','xdate','xname','Id','guard_id']);
			Maintable_7_4.setPagesize(10);
			Maintable_7_4.setfieldShow([true,true,true,true,true,true,true,false,false]);
			Maintable_7_4.setHeader_Width(['4.5%','15.91%','15.91%','15.91%','15.91%','15.91%','15.91%','0%','0%']);
			Maintable_7_4.setHeaderMoveable(true);
			Maintable_7_4.setMulti_Selectable(true);
			Maintable_7_4.createHeader();
			Maintable_7_4.createTable();
			//改寫欄位
			Maintable_7_4.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_7_4.getId() + '_Table').children().length; i++)
				{
					$('#' + Maintable_7_4.getId() + '_Table').children().eq(i).children().eq(0).html(Maintable_7_4.getStart() + (i + 1));
				};
			});
			Maintable_7_4.createPagging();
			//資料表名稱
			Table_Name = "patrol_schedule";
			Maintable_7_4.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_7_4.getStart();
					var Limit = Maintable_7_4.getPagesize();
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
			Maintable_7_4.setLoad_Formdata(object);
			Maintable_7_4.load();
			// $("#Maintable_7_4_Table_Inner_-1_g_name").focus();
			//Css 表格捲軸
			$("#Maintable_7_4_Table").css("height","calc(100% - 152px)");
			$("#Maintable_7_4").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#7_4_Insert").click(function()
			{
				//新增畫面
				Window_7_4 = Window_Define.Initialize();
				Window_7_4.setMask(true);
				Window_7_4.setSmartdetect(false);
				Window_7_4.setWidth(480);
				Window_7_4.setHeight(366);
				Window_7_4.setId('Window_7_4');
				Window_7_4.setTitle(getDictionary('Window_Shift_Name_Insert'));
				Window_7_4.show();
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
				    'searchPlaceholder':'搜尋區域',
				    'searchKey':'searchKey'
				};
				Window_7_4.addComboboxPagging('Maintable_7_4_Table_Inner_-1_g_name2',getDictionary('Window_Shift_Name_Condominium'),paggingParameter);
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_sch_name',getDictionary('Window_Shift_Name_ShiftName'));
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_b_time',getDictionary('Window_Shift_Name_Begin_Time'));
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_e_time',getDictionary('Window_Shift_Name_End_Time'));
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_xdate',getDictionary('Window_Shift_Name_Update_Date'));
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_xname',getDictionary('Window_Shift_Name_Update_Person'));
				Window_7_4.addYesNO_Button('取消','確認',function()
				{
					Window_7_4.close();
				},function()
				{
					if(!$("#Maintable_7_4_Table_Inner_-1_sch_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Shift_Name_Condominium'));
					}
					else if(!$("#Maintable_7_4_Table_Inner_-1_g_name2").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Shift_Name_ShiftName'));
					}
					else if(!$("#Maintable_7_4_Table_Inner_-1_b_time").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Shift_Name_Begin_Time'));
					}
					else if(!$("#Maintable_7_4_Table_Inner_-1_e_time").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Shift_Name_End_Time'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.sch_name = $("#Maintable_7_4_Table_Inner_-1_sch_name").val();
						ajaxData.guard_id = $("#Maintable_7_4_Table_Inner_-1_g_name2_valueField").html();
						ajaxData.b_time = $("#Maintable_7_4_Table_Inner_-1_b_time").val();
						ajaxData.e_time = $("#Maintable_7_4_Table_Inner_-1_e_time").val();
						ajaxData.xdate = $("#Maintable_7_4_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_7_4_Table_Inner_-1_xname").val();
						ajaxData_withType(Maintable_7_4,"Insert",JSON.stringify(ajaxData),function()
						{
							Window_7_4.close();
						});
					}
				});
				//CSS
				$("#Window_7_4_Yes").css
				({
					"margin-left":"75px"
				});
				//預設值
				$("#Maintable_7_4_Table_Inner_-1_xdate").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#Maintable_7_4_Table_Inner_-1_xname").val(UserName);
				//唯讀設定
				$("#Maintable_7_4_Table_Inner_-1_g_name2").attr('readonly',true);
				$("#Maintable_7_4_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_7_4_Table_Inner_-1_xname").attr('readonly',true);
				
				//產生日期選擇
				$("#Maintable_7_4_Table_Inner_-1_b_time").datetimepicker({datepicker:false,timepicker:true,format:'H:i'});
				$("#Maintable_7_4_Table_Inner_-1_e_time").datetimepicker({datepicker:false,timepicker:true,format:'H:i'});
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#Window_7_4_Body .Font.translateHtml").width(145);
				$("#Window_7_4_Body input").width("calc(100% - 150px)");
				$("#Window_7_4_Body select").width("calc(100% - 150px)");
			});
			//新增查詢按鈕監聽
			$("#7_4_Select").click(function()
			{
				//新增畫面
				Window_7_4 = Window_Define.Initialize();
				Window_7_4.setMask(true);
				Window_7_4.setSmartdetect(false);
				Window_7_4.setWidth(480);
				Window_7_4.setHeight(366);
				Window_7_4.setId('Window_7_4');
				Window_7_4.setTitle(getDictionary('Window_Shift_Name_View'));
				Window_7_4.show();
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
				    'searchPlaceholder':'搜尋區域',
				    'searchKey':'searchKey'
				};
				Window_7_4.addComboboxPagging('Maintable_7_4_Table_Inner_-1_g_name2',getDictionary('Window_Shift_Name_Condominium'),paggingParameter);	
				//設定使用者設定值
				$("#Maintable_7_4_Table_Inner_-1_g_name2").val($("#Maintable_7_4_Table_Inner_-1_g_name").val());
				$("#Maintable_7_4_Table_Inner_-1_g_name2_valueField").html($("#Maintable_7_4_Table_Inner_-1_g_name_valueField").html());

				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_sch_name',getDictionary('Window_Shift_Name_ShiftName'));
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_b_time',getDictionary('Window_Shift_Name_Begin_Time'));
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_e_time',getDictionary('Window_Shift_Name_End_Time'));
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_xdate',getDictionary('Window_Shift_Name_Update_Date'));
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_xname',getDictionary('Window_Shift_Name_Update_Person'));
				Window_7_4.addYesNO_Button('取消','確認',function()
				{
					Window_7_4.close();
				},function()
				{
					if($("#Maintable_7_4_Table_Inner_-1_g_name2_valueField").html())
					{
						//設定使用者設定值
						$("#Maintable_7_4_Table_Inner_-1_g_name").val($("#Maintable_7_4_Table_Inner_-1_g_name2").val());
						$("#Maintable_7_4_Table_Inner_-1_g_name_valueField").html($("#Maintable_7_4_Table_Inner_-1_g_name2_valueField").html());
					}
					var ajaxData = {};
					ajaxData.sch_name = $("#Maintable_7_4_Table_Inner_-1_sch_name").val();
					ajaxData.b_time = $("#Maintable_7_4_Table_Inner_-1_b_time").val();
					ajaxData.e_time = $("#Maintable_7_4_Table_Inner_-1_e_time").val();
					ajaxData.xdate = $("#Maintable_7_4_Table_Inner_-1_xdate").val();
					ajaxData.xname = $("#Maintable_7_4_Table_Inner_-1_xname").val();
					ajaxData_withType(Maintable_7_4,"Select",JSON.stringify(ajaxData),function()
					{
						Window_7_4.close();
					});
				});
				//CSS
				$("#Window_7_4_Yes").css
				({
					"margin-left":"75px"
				});
				
				//產生日期選擇
				$("#Maintable_7_4_Table_Inner_-1_xdate").datetimepicker({scrollInput:false,datepicker:true,timepicker:false,format:'Y-m-d'});
				$("#Maintable_7_4_Table_Inner_-1_b_time").datetimepicker({datepicker:false,timepicker:true,format:'H:i'});
				$("#Maintable_7_4_Table_Inner_-1_e_time").datetimepicker({datepicker:false,timepicker:true,format:'H:i'});
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#Window_7_4_Body .Font.translateHtml").width(145);
				$("#Window_7_4_Body input").width("calc(100% - 150px)");
				$("#Window_7_4_Body select").width("calc(100% - 150px)");
			});
			//修改
			$("#7_4_Update").click(function()
			{
				if($(".Mainpage_Main_Table_Active").size() == 0)
				{
					normalError_Msg(getDictionary('Please choose item to update.'));
					return;
				}
				//新增畫面
				Window_7_4 = Window_Define.Initialize();
				Window_7_4.setMask(true);
				Window_7_4.setSmartdetect(false);
				Window_7_4.setWidth(480);
				Window_7_4.setHeight(366);
				Window_7_4.setId('Window_7_4');
				Window_7_4.setTitle(getDictionary('Window_Shift_Name_Update'));
				Window_7_4.show();
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
				    'searchPlaceholder':'搜尋區域',
				    'searchKey':'searchKey'
				};
				Window_7_4.addComboboxPagging('Maintable_7_4_Table_Inner_-1_g_name2',getDictionary('Window_Shift_Name_Condominium'),paggingParameter);
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_sch_name',getDictionary('Window_Shift_Name_ShiftName'));
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_b_time',getDictionary('Window_Shift_Name_Begin_Time'));
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_e_time',getDictionary('Window_Shift_Name_End_Time'));
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_xdate',getDictionary('Window_Shift_Name_Update_Date'));
				Window_7_4.addTextfield('Maintable_7_4_Table_Inner_-1_xname',getDictionary('Window_Shift_Name_Update_Person'));
				Window_7_4.addYesNO_Button('取消','確認',function()
				{
					Window_7_4.close();
				},function()
				{
					if(!$("#Maintable_7_4_Table_Inner_-1_sch_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Shift_Name_Condominium'));
					}
					else if(!$("#Maintable_7_4_Table_Inner_-1_g_name2").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Shift_Name_ShiftName'));
					}
					else if(!$("#Maintable_7_4_Table_Inner_-1_b_time").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Shift_Name_Begin_Time'));
					}
					else if(!$("#Maintable_7_4_Table_Inner_-1_e_time").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Shift_Name_End_Time'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.sch_name = $("#Maintable_7_4_Table_Inner_-1_sch_name").val();
						ajaxData.guard_id = $("#Maintable_7_4_Table_Inner_-1_g_name2_valueField").html();
						ajaxData.b_time = $("#Maintable_7_4_Table_Inner_-1_b_time").val();
						ajaxData.e_time = $("#Maintable_7_4_Table_Inner_-1_e_time").val();
						ajaxData.xdate = $("#Maintable_7_4_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_7_4_Table_Inner_-1_xname").val();
						ajaxData.Id = $(".Mainpage_Main_Table_Active").children().eq(7).html();
						ajaxData_withType(Maintable_7_4,"Update",JSON.stringify(ajaxData),function()
						{
							Window_7_4.close();
						});
					}
				});
				//CSS
				$("#Window_7_4_Yes").css
				({
					"margin-left":"75px"
				});
				//唯讀設定
				$("#Maintable_7_4_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_7_4_Table_Inner_-1_xname").attr('readonly',true);
				$("#Maintable_7_4_Table_Inner_-1_g_name2").attr('readonly',true);
				//設定值
				$("#Maintable_7_4_Table_Inner_-1_sch_name").val($(".Mainpage_Main_Table_Active").children().eq(2).html());
				$("#Maintable_7_4_Table_Inner_-1_g_name2").val($(".Mainpage_Main_Table_Active").children().eq(1).html());
				$("#Maintable_7_4_Table_Inner_-1_g_name2_valueField").html($(".Mainpage_Main_Table_Active").children().eq(8).html());
				$("#Maintable_7_4_Table_Inner_-1_b_time").val($(".Mainpage_Main_Table_Active").children().eq(3).html());
				$("#Maintable_7_4_Table_Inner_-1_e_time").val($(".Mainpage_Main_Table_Active").children().eq(4).html());
				$("#Maintable_7_4_Table_Inner_-1_xdate").val($(".Mainpage_Main_Table_Active").children().eq(5).html());
				$("#Maintable_7_4_Table_Inner_-1_xname").val($(".Mainpage_Main_Table_Active").children().eq(6).html());
				
				//產生日期選擇
				$("#Maintable_7_4_Table_Inner_-1_b_time").datetimepicker({datepicker:false,timepicker:true,format:'H:i'});
				$("#Maintable_7_4_Table_Inner_-1_e_time").datetimepicker({datepicker:false,timepicker:true,format:'H:i'});
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#Window_7_4_Body .Font.translateHtml").width(145);
				$("#Window_7_4_Body input").width("calc(100% - 150px)");
				$("#Window_7_4_Body select").width("calc(100% - 150px)");
			});
			//存檔
			$("#7_4_Save").click(function()
			{
				//執行存檔
				saveAjaxfield(Maintable_7_4);
			});
			//取消
			$("#7_4_Cancel").click(function()
			{
				$("#Mainpage_Menu_Title_7_4").children().click();
			});
			//刪除
			$("#7_4_Delete").click(function()
			{
				deleteRow(Maintable_7_4);
			});
			//FK 共用設定
			function fkSetting()
			{
				//FK 設定
				$("#Maintable_7_4_Table_Inner_-1_g_name").attr('placeholder',getDictionary('Shift_Name_Condominium'));
				//FK 設定
				//配合 Window_Define 套件建立 div
				$("#Maintable_7_4_Table_Inner_-1_g_name").parent().append('<div id="Maintable_7_4_Table_Inner_-1_g_name_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
				Maintable_7_4_Combobox = Window_Define.Initialize();
				Maintable_7_4_Combobox.setId('Maintable_7_4_Table_Inner_-1_g_name');
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
				    'searchPlaceholder':'搜尋巡檢單位區域',
				    'searchKey':'searchKey'
				};
				Maintable_7_4_Combobox.addComboboxPagging('Maintable_7_4_Table_Inner_-1_g_name','',paggingParameter);
				Maintable_7_4_Combobox['Maintable_7_4_Table_Inner_-1_g_name'].ComboboxPagging_setPagging_Parameter(paggingParameter);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_7_4_Combobox,Maintable_7_4_Combobox.getId());
				//回存主物件
				Maintable_7_4['Maintable_7_4_Table_Inner_-1_g_name'] = Maintable_7_4_Combobox;
				//下拉式選單值改變
				$("#Maintable_7_4_Table_Inner_-1_g_name_valueField").bind("DOMSubtreeModified", function()
				{
					//重整頁面
					ajaxData_withType(Maintable_7_4,"Select","{}",null);
				});
				//FK 設定
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