/*客戶設備管理*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_2").children().eq(0).click(function()
		{
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary("Giga_Device_Management_Info")+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="2_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#2_Function_Row").append('<div class="Window_Cancel" id="2_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Insert")+'</div>');
			$("#2_Function_Row").append('<div class="Window_Cancel" id="2_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("View")+'</div>');
			$("#2_Function_Row").append('<div class="Window_Cancel" id="2_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Update")+'</div>');
			$("#2_Function_Row").append('<div class="Window_Cancel" id="2_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Delete")+'</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_2" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備管理表格
			var Maintable_2 = Grid_Panel_Define.Initialize();
			Maintable_2.setId("Maintable_2");
			Maintable_2.setResizer_ID('Maintable_2_Resizer');
			Maintable_2.setHeader_Title(['No.',
										getDictionary("Giga_Device_Management_Customer_ID"),
										getDictionary("Giga_Device_Management_Customer_Name"),
										getDictionary("Giga_Device_Management_Model_ID"),
										getDictionary("Giga_Device_Management_Model_Name"),
										getDictionary("Giga_Device_Management_ID"),
										getDictionary("Giga_Device_Management_Sale_Date"),
										getDictionary("Giga_Device_Management_Update_Date"),
										getDictionary("Giga_Device_Management_Update_Person"),
										'系統編號',
										'客戶編號',
										'CPS編號',
										'CPS型號編號']);
			Maintable_2.setModel(['Number','Ag_Id','Ag_Name','CPS_Specification','CPS_Name','CPS_Reader_id','Sale','X_Date','X_Name','Id','Agent_id','CPS_id','CPS_Specification_Id']);
			Maintable_2.setPagesize(10);
			Maintable_2.setfieldShow([true,true,true,true,true,true,true,true,true,false,false,false,false]);
			Maintable_2.setHeader_Width(['4.5%','11.9375%','11.9375%','11.9375%','11.9375%','11.9375%','11.9375%','11.9375%','11.9375%','0%','0%','0%','0%']);
			Maintable_2.setHeaderMoveable(true);
			Maintable_2.setMulti_Selectable(true);
			Maintable_2.createHeader();
			Maintable_2.createTable();
			//改寫欄位
			Maintable_2.setLoad_Callback(function()
			{
				//序號
				for (var i = 0; i < $("#Maintable_2_Table").children().find('div[name="Number"]').length; i++)
				{
					$("#Maintable_2_Table").children().find('div[name="Number"]').eq(i).html(Maintable_2.getStart() + (i + 1));
				}
			});
			Maintable_2.createPagging();
			//資料表名稱
			Table_Name = "CPS_Agent";
			Maintable_2.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_2.getStart();
					var Limit = Maintable_2.getPagesize();
					return serverUrl + "Select_Gigatems.ashx?_Y02=" + new Date().getTime() + "&start=" + Start + "&limit=" + Limit + "&TableName=" + Table_Name + "&Order_field=Id&Order_Sequence=Asc";
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
				myWindow = Window_Define.Initialize();
				myWindow.setMask(true);
				myWindow.setSmartdetect(false);
				myWindow.setWidth(480);
				myWindow.setHeight(330);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary("Insert_Giga_Device_Management"));
				myWindow.show();
				var Ag_Name_paggingParameter = 
				{
					//分頁設定
					'Url':serverUrl + "Select_Gigatems.ashx?_Y02=" + new Date().getTime() + "&TableName=Agent&Order_field=Id&Order_Sequence=Asc",
				    'rootProperty':'Data',
				    'displayField':'Ag_Name',
				    'valueField':'Id',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':serverUrl + "Select_Gigatems.ashx?_Y02=" + new Date().getTime() + "&TableName=Agent&Order_field=Id&Order_Sequence=Asc",
				    'searchPlaceholder':'搜尋區域',
				    'searchKey':'searchKey'
				};
				myWindow.addComboboxPagging('Ag_Name',getDictionary("Window_Giga_Device_Management_Customer_Name"),Ag_Name_paggingParameter);
				var CPS_Name_paggingParameter = 
				{
					//分頁設定
					'Url':serverUrl + "Select_Gigatems.ashx?_Y02=" + new Date().getTime() + "&TableName=CPS_Specification&Order_field=Id&Order_Sequence=Asc",
				    'rootProperty':'Data',
				    'displayField':'CPS_Name',
				    'valueField':'Id',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':serverUrl + "Select_Gigatems.ashx?_Y02=" + new Date().getTime() + "&TableName=CPS_Specification&Order_field=Id&Order_Sequence=Asc",
				    'searchPlaceholder':'搜尋區域',
				    'searchKey':'searchKey'
				};
				myWindow.addComboboxPagging('CPS_Name',getDictionary("Window_Giga_Device_Management_Model_Name"),CPS_Name_paggingParameter);
				var CPS_Reader_id_paggingParameter = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'CPS_Reader_id',
				    'valueField':'Id',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋區域',
				    'searchKey':'searchKey'
				};
				myWindow.addComboboxPagging('CPS_Reader_id',getDictionary("Window_Giga_Device_Management_ID"),CPS_Reader_id_paggingParameter);
				//CPS型號名稱改變時
				var comboboxReset = false;
				$("#CPS_Name_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Select_Gigatems.ashx?_Y02=" + new Date().getTime() + "&TableName=SELECT_CPS_Data&Order_field=Id&Order_Sequence=Asc&Id=" + $("#CPS_Name_valueField").html();
					CPS_Reader_id_paggingParameter.Url = tempUrl;
					myWindow['CPS_Reader_id']['ComboboxPagging_setPagging_Parameter'](CPS_Reader_id_paggingParameter);
					myWindow['CPS_Reader_id']['ComboboxPagging_load']();
					if(comboboxReset)
					{
						$("#CPS_Reader_id_valueField").val("");
						$("#CPS_Reader_id_displayField").val("");
						$("#CPS_Reader_id").val("");
					}
					comboboxReset = true;
				});
				//確認有無區域可選擇
				myWindow['CPS_Reader_id'].ComboboxPagging_NoData = function()
				{
					normalError_Msg_Withmask(getDictionary("have no CPS can be selected."));
				};
				myWindow.addTextfield('X_Date',getDictionary("Window_Giga_Device_Management_Update_Date"));
				myWindow.addTextfield('X_Name',getDictionary("Window_Giga_Device_Management_Update_Person"));
				myWindow.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					myWindow.close();
				},function()
				{
					if(!$("#Ag_Name_valueField").html())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" " +getDictionary("Giga_Device_Management_Customer_Name"));
					}
					else if(!$("#CPS_Name_valueField").html())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" " +getDictionary("Giga_Device_Management_Model_Name"));
					}
					else if(!$("#CPS_Reader_id_valueField").html())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" " +getDictionary("Giga_Device_Management_ID"));
					}
					else
					{
						var ajaxData = {};
						ajaxData.Agent_id = $("#Ag_Name_valueField").html();
						ajaxData.CPS_id = $("#CPS_Reader_id_valueField").html();
						ajaxData.X_Date = "";
						ajaxData.X_Name = "";
						ajaxData_withType(Maintable_2,"Insert",JSON.stringify(ajaxData),function()
						{
							myWindow.close();
						});
					}
				});
				//CSS
				$("#myWindow_Yes").css
				({
					"margin-left":"75px"
				});
				//Window Css
				$("#myWindow_Body .Font.translateHtml").width(155);
				$("#myWindow_Body input").width("calc(100% - 160px)");
				$("#myWindow_Body select").width("calc(100% - 160px)");
				$("#myWindow_Body textarea").width("calc(100% - 160px)");
				//下拉式選單 CSS
				var newTop = parseFloat($("#CPS_Name_Combobox_Pagging").css("top").split('px')[0]) - 43;
				var newLeft = parseFloat($("#CPS_Name_Combobox_Pagging").css("left")) + 95;
				$("#CPS_Name_Combobox_Pagging").css("top",newTop + "px");
				$("#CPS_Name_Combobox_Pagging").css("left",newLeft + "px");
				//下拉式選單 CSS
				var newTop = parseFloat($("#CPS_Reader_id_Combobox_Pagging").css("top").split('px')[0]) - 43;
				$("#CPS_Reader_id_Combobox_Pagging").css("top",newTop + "px");
				//設定值
				$("#X_Date").val(getDate(new Date(),'/') + " " + getTime(new Date()));
				$("#X_Name").val(UserName);
				//唯讀設定
				$("#C_Date").attr('readonly',true);
				$("#X_Date").attr('readonly',true);
				$("#CPS_Name").attr('readonly',true);
				$("#Ag_Name").attr('readonly',true);
				$("#CPS_Reader_id").attr('readonly',true);
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//查詢
			$("#2_Select").click(function()
			{
				//新增畫面
				myWindow = Window_Define.Initialize();
				myWindow.setMask(true);
				myWindow.setSmartdetect(false);
				myWindow.setWidth(480);
				myWindow.setHeight(330);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary("View_Giga_Device_Management"));
				myWindow.show();
				myWindow.addTextfield('Ag_Name',getDictionary("Window_Giga_Device_Management_Customer_Name"));
				myWindow.addTextfield('CPS_Name',getDictionary("Window_Giga_Device_Management_Model_Name"));
				myWindow.addTextfield('CPS_Reader_id',getDictionary("Window_Giga_Device_Management_ID"));
				myWindow.addTextfield('X_Date',getDictionary("Window_Giga_Device_Management_Update_Date"));
				myWindow.addTextfield('X_Name',getDictionary("Window_Giga_Device_Management_Update_Person"));
				myWindow.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					myWindow.close();
				},function()
				{
					var ajaxData = {};
					ajaxData.Ag_Name = $("#Ag_Name").val();
					ajaxData.CPS_Name = $("#CPS_Name").val();
					ajaxData.CPS_Reader_id = $("#CPS_Reader_id").val();
					ajaxData.X_Date = "";
					ajaxData.X_Name = "";
					ajaxData_withType(Maintable_2,"Select",JSON.stringify(ajaxData),function()
					{
						myWindow.close();
					});
				});
				//CSS
				$("#myWindow_Yes").css
				({
					"margin-left":"75px"
				});
				//Window Css
				$("#myWindow_Body .Font.translateHtml").width(155);
				$("#myWindow_Body input").width("calc(100% - 160px)");
				$("#myWindow_Body select").width("calc(100% - 160px)");
				$("#myWindow_Body textarea").width("calc(100% - 160px)");
				//唯讀設定
				$("#C_Date").attr('readonly',true);
				$("#X_Date").attr('readonly',true);
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
				myWindow = Window_Define.Initialize();
				myWindow.setMask(true);
				myWindow.setSmartdetect(false);
				myWindow.setWidth(480);
				myWindow.setHeight(330);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary("Delete_Giga_Device_Management"));
				myWindow.show();
				var Ag_Name_paggingParameter = 
				{
					//分頁設定
					'Url':serverUrl + "Select_Gigatems.ashx?_Y02=" + new Date().getTime() + "&TableName=Agent&Order_field=Id&Order_Sequence=Asc",
				    'rootProperty':'Data',
				    'displayField':'Ag_Name',
				    'valueField':'Id',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':serverUrl + "Select_Gigatems.ashx?_Y02=" + new Date().getTime() + "&TableName=Agent&Order_field=Id&Order_Sequence=Asc",
				    'searchPlaceholder':'搜尋區域',
				    'searchKey':'searchKey'
				};
				myWindow.addComboboxPagging('Ag_Name',getDictionary("Window_Giga_Device_Management_Customer_Name"),Ag_Name_paggingParameter);
				var CPS_Name_paggingParameter = 
				{
					//分頁設定
					'Url':serverUrl + "Select_Gigatems.ashx?_Y02=" + new Date().getTime() + "&TableName=CPS_Specification&Order_field=Id&Order_Sequence=Asc",
				    'rootProperty':'Data',
				    'displayField':'CPS_Name',
				    'valueField':'Id',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':serverUrl + "Select_Gigatems.ashx?_Y02=" + new Date().getTime() + "&TableName=CPS_Specification&Order_field=Id&Order_Sequence=Asc",
				    'searchPlaceholder':'搜尋區域',
				    'searchKey':'searchKey'
				};
				myWindow.addComboboxPagging('CPS_Name',getDictionary("Window_Giga_Device_Management_Model_Name"),CPS_Name_paggingParameter);
				var CPS_Reader_id_paggingParameter = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'CPS_Reader_id',
				    'valueField':'Id',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋區域',
				    'searchKey':'searchKey'
				};
				myWindow.addComboboxPagging('CPS_Reader_id',getDictionary("Window_Giga_Device_Management_ID"),CPS_Reader_id_paggingParameter);
				//CPS型號名稱改變時
				var comboboxReset = false;
				$("#CPS_Name_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Select_Gigatems.ashx?_Y02=" + new Date().getTime() + "&TableName=SELECT_CPS_Data&Order_field=Id&Order_Sequence=Asc&Id=" + $("#CPS_Name_valueField").html();
					CPS_Reader_id_paggingParameter.Url = tempUrl;
					myWindow['CPS_Reader_id']['ComboboxPagging_setPagging_Parameter'](CPS_Reader_id_paggingParameter);
					myWindow['CPS_Reader_id']['ComboboxPagging_load']();
					if(comboboxReset)
					{
						$("#CPS_Reader_id_valueField").val("");
						$("#CPS_Reader_id_displayField").val("");
						$("#CPS_Reader_id").val("");
					}
					comboboxReset = true;
				});
				//確認有無區域可選擇
				myWindow['CPS_Reader_id'].ComboboxPagging_NoData = function()
				{
					normalError_Msg_Withmask(getDictionary("have no CPS can be selected."));
				};
				myWindow.addTextfield('X_Date',getDictionary("Window_Giga_Device_Management_Update_Date"));
				myWindow.addTextfield('X_Name',getDictionary("Window_Giga_Device_Management_Update_Person"));
				myWindow.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					myWindow.close();
				},function()
				{
					if(!$("#Ag_Name_valueField").html())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" " +getDictionary("Giga_Device_Management_Customer_Name"));
					}
					else if(!$("#CPS_Name_valueField").html())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" " +getDictionary("Giga_Device_Management_Model_Name"));
					}
					else if(!$("#CPS_Reader_id_valueField").html())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" " +getDictionary("Giga_Device_Management_ID"));
					}
					else
					{
						var ajaxData = {};
						ajaxData.Agent_id = $("#Ag_Name_valueField").html();
						ajaxData.CPS_id = $("#CPS_Reader_id_valueField").html();
						ajaxData.X_Date = "";
						ajaxData.X_Name = "";
						ajaxData_withType(Maintable_2,"Insert",JSON.stringify(ajaxData),function()
						{
							myWindow.close();
						});
					}
				});
				//CSS
				$("#myWindow_Yes").css
				({
					"margin-left":"75px"
				});
				//Window Css
				$("#myWindow_Body .Font.translateHtml").width(155);
				$("#myWindow_Body input").width("calc(100% - 160px)");
				$("#myWindow_Body select").width("calc(100% - 160px)");
				$("#myWindow_Body textarea").width("calc(100% - 160px)");
				//下拉式選單 CSS
				var newTop = parseFloat($("#CPS_Name_Combobox_Pagging").css("top").split('px')[0]) - 43;
				var newLeft = parseFloat($("#CPS_Name_Combobox_Pagging").css("left")) + 95;
				$("#CPS_Name_Combobox_Pagging").css("top",newTop + "px");
				$("#CPS_Name_Combobox_Pagging").css("left",newLeft + "px");
				//下拉式選單 CSS
				var newTop = parseFloat($("#CPS_Reader_id_Combobox_Pagging").css("top").split('px')[0]) - 43;
				$("#CPS_Reader_id_Combobox_Pagging").css("top",newTop + "px");
				//設定值
				$("#CPS_Reader_id_valueField").html($(".Mainpage_Main_Table_Active div[name='CPS_id']").html());
				$("#Ag_Name_valueField").html($(".Mainpage_Main_Table_Active div[name='Agent_id']").html());
				$("#CPS_Name_valueField").html($(".Mainpage_Main_Table_Active div[name='CPS_Specification_Id']").html());
				$("#Ag_Name").val($(".Mainpage_Main_Table_Active div[name='Ag_Name']").html());
				$("#CPS_Name").val($(".Mainpage_Main_Table_Active div[name='CPS_Name']").html());
				$("#CPS_Reader_id").val($(".Mainpage_Main_Table_Active div[name='CPS_Reader_id']").html());
				$("#X_Date").val($(".Mainpage_Main_Table_Active div[name='X_Date']").html());
				$("#X_Name").val($(".Mainpage_Main_Table_Active div[name='X_Name']").html());
				//唯讀設定
				$("#C_Date").attr('readonly',true);
				$("#X_Date").attr('readonly',true);
				$("#CPS_Name").attr('readonly',true);
				$("#Ag_Name").attr('readonly',true);
				$("#CPS_Reader_id").attr('readonly',true);
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//刪除
			$("#2_Delete").click(function()
			{
				deleteRow(Maintable_2);
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