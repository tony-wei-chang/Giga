/*CPS資料建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_5").children().eq(0).click(function()
		{
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary("Giga_CPS_Data_Info")+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="5_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#5_Function_Row").append('<div class="Window_Cancel" id="5_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Insert")+'</div>');
			$("#5_Function_Row").append('<div class="Window_Cancel" id="5_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("View")+'</div>');
			$("#5_Function_Row").append('<div class="Window_Cancel" id="5_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Update")+'</div>');
			$("#5_Function_Row").append('<div class="Window_Cancel" id="5_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Delete")+'</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_5" style="clear: left;margin-top: 55px;"></div>');
			//建立CPS資料建檔表格
			var Maintable_5 = Grid_Panel_Define.Initialize();
			Maintable_5.setId("Maintable_5");
			Maintable_5.setResizer_ID('Maintable_5_Resizer');
			Maintable_5.setHeader_Title(['No.',
										getDictionary("Giga_CPS_Data_Model_ID"),
										getDictionary("Giga_CPS_Data_Model_Name"),
										getDictionary("Giga_CPS_Data_ID"),
										getDictionary("Giga_CPS_Sale_Date"),
										getDictionary("Giga_CPS_Is_Used"),
										getDictionary("Giga_CPS_Remarks"),
										getDictionary("Giga_CPS_Update_Date"),
										getDictionary("Giga_CPS_Update_Person"),
										'系統編號',
										'CPS系統編號']);
			Maintable_5.setModel(['Number','CPS_Specification','CPS_Name','CPS_Reader_id','Sale','CPS_Status','CPS_Desc','X_Date','X_Name','Id','CPS_Reader_No']);
			Maintable_5.setPagesize(10);
			Maintable_5.setfieldShow([true,true,true,true,true,true,true,true,true,false,false]);
			Maintable_5.setHeader_Width(['4.5%','11.9375%','11.9375%','11.9375%','11.9375%','11.9375%','11.9375%','11.9375%','11.9375%','0%','0%']);
			Maintable_5.setHeaderMoveable(true);
			Maintable_5.setMulti_Selectable(true);
			Maintable_5.createHeader();
			Maintable_5.createTable();
			//改寫欄位
			Maintable_5.setLoad_Callback(function()
			{
				//序號
				for (var i = 0; i < $("#Maintable_5_Table").children().find('div[name="Number"]').length; i++)
				{
					$("#Maintable_5_Table").children().find('div[name="Number"]').eq(i).html(Maintable_5.getStart() + (i + 1));
				}
				//使用狀態
				for (var i = 0; i < $("#Maintable_5_Table").children().find('div[name="CPS_Status"]').length; i++)
				{
					var CPS_Status = $("#Maintable_5_Table").children().find('div[name="CPS_Status"]').eq(i).html();
					if(CPS_Status == "N")
					{
						$("#Maintable_5_Table").children().find('div[name="CPS_Status"]').eq(i).html(getDictionary("Giga_CPS_Used"));
					}
					else
					{
						$("#Maintable_5_Table").children().find('div[name="CPS_Status"]').eq(i).html(getDictionary("Giga_CPS_Not_Used"));
					}
				}
			});
			Maintable_5.createPagging();
			//資料表名稱
			Table_Name = "CPS_Data";
			Maintable_5.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_5.getStart();
					var Limit = Maintable_5.getPagesize();
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
			Maintable_5.setLoad_Formdata(object);
			Maintable_5.load();
			//Css 表格捲軸
			$("#Maintable_5_Table").css("height","calc(100% - 152px)");
			$("#Maintable_5").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#5_Insert").click(function()
			{
				//新增畫面
				myWindow = Window_Define.Initialize();
				myWindow.setMask(true);
				myWindow.setSmartdetect(false);
				myWindow.setWidth(480);
				myWindow.setHeight(440);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary("Insert_Giga_CPS"));
				myWindow.show();
				var tempUrl = serverUrl + "Select_Gigatems.ashx?_Y02=" + new Date().getTime() + "&TableName=CPS_Specification&Order_field=Id&Order_Sequence=Asc";
				var paggingParameter = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'CPS_Name',
				    'valueField':'Id',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋區域',
				    'searchKey':'searchKey'
				};
				myWindow.addComboboxPagging('CPS_Name',getDictionary("Window_Giga_CPS_Data_Model_Name"),paggingParameter);
				myWindow.addTextfield('CPS_Reader_id',getDictionary("Window_Giga_CPS_Data_ID"));
				myWindow.addTextfield('Sale',getDictionary("Window_Giga_CPS_Sale_Date"));
				myWindow.addCombobox('CPS_Status',getDictionary("Window_Giga_CPS_Is_Used"));
				$("#CPS_Status").append
				(
					"<option checked value='"+getDictionary("Giga_CPS_Not_Used")+"'>"+getDictionary("Giga_CPS_Not_Used")+"</option>"
				);
				myWindow.addTextarea('CPS_Desc',getDictionary("Window_Giga_CPS_Remarks"));
				myWindow.addTextfield('X_Date',getDictionary("Window_Giga_CPS_Update_Date"));
				myWindow.addTextfield('X_Name',getDictionary("Window_Giga_CPS_Update_Person"));
				myWindow.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					myWindow.close();
				},function()
				{
					if(!$("#CPS_Name").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Data_Model_Name"));
					}
					else if(!$("#CPS_Reader_id").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Data_ID"));
					} 
					else if(!$("#Sale").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Sale_Date"));
					}
					else if(!$("#CPS_Status").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Is_Used"));
					}
					else if(!$("#CPS_Desc").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Remarks"));
					}
					else
					{
						var ajaxData = {};
						ajaxData.CPS_Reader_id = $("#CPS_Reader_id").val();
						ajaxData.CPS_Reader_No = $("#CPS_Name_valueField").html();
						ajaxData.Sale = $("#Sale").val();
						ajaxData.CPS_Status = ($("#CPS_Status").val() == getDictionary("Giga_CPS_Used"))?"N":"Y";
						ajaxData.CPS_Desc = $("#CPS_Desc").val();
						ajaxData.X_Date = "";
						ajaxData.X_Name = "";
						ajaxData_withType(Maintable_5,"Insert",JSON.stringify(ajaxData),function()
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
				//產生日期選擇
				$("#Sale").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				//Window Css
				$("#myWindow_Body .Font.translateHtml").width(155);
				$("#myWindow_Body input").width("calc(100% - 160px)");
				$("#myWindow_Body select").width("calc(100% - 160px)");
				$("#myWindow_Body textarea").width("calc(100% - 160px)");
				//CSS
				var newTop = parseFloat($("#CPS_Name_Combobox_Pagging").css("top").split('px')[0]);
				var newLeft = parseFloat($("#CPS_Name_Combobox_Pagging").css("left")) + 10;
				$("#CPS_Name_Combobox_Pagging").css("top",newTop + "px");
				$("#CPS_Name_Combobox_Pagging").css("left",newLeft + "px");
				//設定值
				$("#X_Date").val(getDate(new Date(),'/') + " " + getTime(new Date()));
				$("#X_Name").val(UserName);
				//唯讀設定
				$("#C_Date").attr('readonly',true);
				$("#X_Date").attr('readonly',true);
				$("#CPS_Status").attr('readonly',true);
				$("#CPS_Name").attr('readonly',true);
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//查詢
			$("#5_Select").click(function()
			{
				//新增畫面
				myWindow = Window_Define.Initialize();
				myWindow.setMask(true);
				myWindow.setSmartdetect(false);
				myWindow.setWidth(480);
				myWindow.setHeight(440);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary("View_Giga_CPS"));
				myWindow.show();
				myWindow.addTextfield('CPS_Name',getDictionary("Window_Giga_CPS_Data_Model_Name"));
				myWindow.addTextfield('CPS_Reader_id',getDictionary("Window_Giga_CPS_Data_ID"));
				myWindow.addTextfield('Sale',getDictionary("Window_Giga_CPS_Sale_Date"));
				myWindow.addCombobox('CPS_Status',getDictionary("Window_Giga_CPS_Is_Used"));
				$("#CPS_Status").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary("Giga_CPS_Used")+"'>"+getDictionary("Giga_CPS_Used")+"</option>" +
					"<option value='"+getDictionary("Giga_CPS_Not_Used")+"'>"+getDictionary("Giga_CPS_Not_Used")+"</option>"
				);
				myWindow.addTextarea('CPS_Desc',getDictionary("Window_Giga_CPS_Remarks"));
				myWindow.addTextfield('X_Date',getDictionary("Window_Giga_CPS_Update_Date"));
				myWindow.addTextfield('X_Name',getDictionary("Window_Giga_CPS_Update_Person"));
				myWindow.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					myWindow.close();
				},function()
				{
					var ajaxData = {};
					if($("#CPS_Reader_id").val())
					{
						ajaxData.CPS_Reader_id = $("#CPS_Reader_id").val();
					}
					ajaxData.CPS_Name = $("#CPS_Name").val();
					ajaxData.Sale = $("#Sale").val();
					if($("#CPS_Status").val())
					{
						ajaxData.CPS_Status = ($("#CPS_Status").val() == getDictionary("Giga_CPS_Used"))?"N":"Y";
					}
					ajaxData.CPS_Desc = $("#CPS_Desc").val();
					ajaxData.X_Date = "";
					ajaxData.X_Name = "";
					ajaxData_withType(Maintable_5,"Select",JSON.stringify(ajaxData),function()
					{
						myWindow.close();
					});
				});
				//CSS
				$("#myWindow_Yes").css
				({
					"margin-left":"75px"
				});
				
				//產生日期選擇
				$("#Sale").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				$("#X_Date").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
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
			$("#5_Update").click(function()
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
				myWindow.setHeight(440);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary("Update_Giga_CPS"));
				myWindow.show();
				var tempUrl = serverUrl + "Select_Gigatems.ashx?_Y02=" + new Date().getTime() + "&TableName=CPS_Specification&Order_field=Id&Order_Sequence=Asc";
				var paggingParameter = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'CPS_Name',
				    'valueField':'Id',
				    'fk_key':'guard_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋區域',
				    'searchKey':'searchKey'
				};
				myWindow.addComboboxPagging('CPS_Name',getDictionary("Window_Giga_CPS_Data_Model_Name"),paggingParameter);
				myWindow.addTextfield('CPS_Reader_id',getDictionary("Window_Giga_CPS_Data_ID"));
				myWindow.addTextfield('Sale',getDictionary("Window_Giga_CPS_Sale_Date"));
				myWindow.addTextfield('CPS_Status',getDictionary("Window_Giga_CPS_Is_Used"));
				myWindow.addTextarea('CPS_Desc',getDictionary("Window_Giga_CPS_Remarks"));
				myWindow.addTextfield('X_Date',getDictionary("Window_Giga_CPS_Update_Date"));
				myWindow.addTextfield('X_Name',getDictionary("Window_Giga_CPS_Update_Person"));
				myWindow.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					myWindow.close();
				},function()
				{
					if(!$("#CPS_Name").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Data_Model_Name"));
					}
					else if(!$("#CPS_Reader_id").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Data_ID"));
					} 
					else if(!$("#Sale").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Sale_Date"));
					}
					else if(!$("#CPS_Status").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Is_Used"));
					}
					else if(!$("#CPS_Desc").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Remarks"));
					}
					else
					{
						var ajaxData = {};
						ajaxData.CPS_Reader_id = $("#CPS_Reader_id").val();
						ajaxData.CPS_Reader_No = $("#CPS_Name_valueField").html();
						ajaxData.Sale = $("#Sale").val();
						// ajaxData.CPS_Status = ($("#CPS_Status").val() == getDictionary("Giga_CPS_Used"))?"N":"Y";
						ajaxData.CPS_Desc = $("#CPS_Desc").val();
						ajaxData.X_Date = "";
						ajaxData.X_Name = "";
						ajaxData.Id = $(".Mainpage_Main_Table_Active div[name='Id']").html();
						ajaxData_withType(Maintable_5,"Update",JSON.stringify(ajaxData),function()
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
				
				//產生日期選擇
				$("#Sale").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				//Window Css
				$("#myWindow_Body .Font.translateHtml").width(155);
				$("#myWindow_Body input").width("calc(100% - 160px)");
				$("#myWindow_Body select").width("calc(100% - 160px)");
				$("#myWindow_Body textarea").width("calc(100% - 160px)");
				//CSS
				var newTop = parseFloat($("#CPS_Name_Combobox_Pagging").css("top").split('px')[0]);
				var newLeft = parseFloat($("#CPS_Name_Combobox_Pagging").css("left")) + 10;
				$("#CPS_Name_Combobox_Pagging").css("top",newTop + "px");
				$("#CPS_Name_Combobox_Pagging").css("left",newLeft + "px");
				$("#CPS_Name_Combobox_Pagging").css("top",newTop + "px");
				$("#CPS_Name_Combobox_Pagging").css("left",newLeft + "px");
				//設定值
				$("#CPS_Reader_id").val($(".Mainpage_Main_Table_Active div[name='CPS_Reader_id']").html());
				$("#CPS_Name_valueField").html($(".Mainpage_Main_Table_Active div[name='CPS_Reader_No']").html());
				$("#CPS_Name").val($(".Mainpage_Main_Table_Active div[name='CPS_Name']").html());
				$("#Sale").val($(".Mainpage_Main_Table_Active div[name='Sale']").html());
				$("#CPS_Status").val(getDictionary("Can not update."));
				$("#CPS_Desc").val($(".Mainpage_Main_Table_Active div[name='CPS_Desc']").html());
				$("#X_Date").val($(".Mainpage_Main_Table_Active div[name='X_Date']").html());
				$("#X_Name").val($(".Mainpage_Main_Table_Active div[name='X_Name']").html());
				//唯讀設定
				$("#CPS_Name").attr('readonly',true);
				$("#C_Date").attr('readonly',true);
				$("#X_Date").attr('readonly',true);
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//刪除
			$("#5_Delete").click(function()
			{
				deleteRow(Maintable_5);
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