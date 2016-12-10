/*CPS型號建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_4").children().eq(0).click(function()
		{
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary("Giga_CPS_Model_Info")+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="4_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#4_Function_Row").append('<div class="Window_Cancel" id="4_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Insert")+'</div>');
			$("#4_Function_Row").append('<div class="Window_Cancel" id="4_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("View")+'</div>');
			$("#4_Function_Row").append('<div class="Window_Cancel" id="4_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Update")+'</div>');
			$("#4_Function_Row").append('<div class="Window_Cancel" id="4_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Delete")+'</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_4" style="clear: left;margin-top: 55px;"></div>');
			//建立CPS型號建檔表格
			var Maintable_4 = Grid_Panel_Define.Initialize();
			Maintable_4.setId("Maintable_4");
			Maintable_4.setResizer_ID('Maintable_4_Resizer');
			Maintable_4.setHeader_Title(['No.',getDictionary("Giga_CPS_Model_ID"),getDictionary("Giga_CPS_Model_Name"),'系統編號']);
			Maintable_4.setModel(['Number','CPS_Specification','CPS_Name','Id']);
			Maintable_4.setPagesize(10);
			Maintable_4.setfieldShow([true,true,true,false]);
			Maintable_4.setHeader_Width(['4.5%','47.75%','47.75%','0%']);
			Maintable_4.setHeaderMoveable(true);
			Maintable_4.setMulti_Selectable(true);
			Maintable_4.createHeader();
			Maintable_4.createTable();
			//改寫欄位
			Maintable_4.setLoad_Callback(function()
			{
				//序號
				for (var i = 0; i < $("#Maintable_4_Table").children().find('div[name="Number"]').length; i++)
				{
					$("#Maintable_4_Table").children().find('div[name="Number"]').eq(i).html(Maintable_4.getStart() + (i + 1));
				}
			});
			Maintable_4.createPagging();
			//資料表名稱
			Table_Name = "CPS_Specification";
			Maintable_4.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_4.getStart();
					var Limit = Maintable_4.getPagesize();
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
			Maintable_4.setLoad_Formdata(object);
			Maintable_4.load();
			//Css 表格捲軸
			$("#Maintable_4_Table").css("height","calc(100% - 152px)");
			$("#Maintable_4").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#4_Insert").click(function()
			{
				//新增畫面
				myWindow = Window_Define.Initialize();
				myWindow.setMask(true);
				myWindow.setSmartdetect(false);
				myWindow.setWidth(480);
				myWindow.setHeight(210);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary("Insert_Giga_CPS_Model"));
				myWindow.show();
				myWindow.addTextfield('CPS_Specification',getDictionary("Window_Giga_CPS_Model_ID"));
				myWindow.addTextfield('CPS_Name',getDictionary("Window_Giga_CPS_Model_Name"));
				myWindow.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					myWindow.close();
				},function()
				{
					if(!$("#CPS_Specification").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Model_ID"));
					}
					else if(!$("#CPS_Name").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Model_Name"));
					}
					else
					{
						var ajaxData = {};
						ajaxData.CPS_Specification = $("#CPS_Specification").val();
						ajaxData.CPS_Name = $("#CPS_Name").val();
						ajaxData_withType(Maintable_4,"Insert",JSON.stringify(ajaxData),function()
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
				$("#myWindow .Font.translateHtml").width(175);
				$("#myWindow input").width("calc(100% - 180px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//查詢
			$("#4_Select").click(function()
			{
				//新增畫面
				myWindow = Window_Define.Initialize();
				myWindow.setMask(true);
				myWindow.setSmartdetect(false);
				myWindow.setWidth(480);
				myWindow.setHeight(210);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary("View_Giga_CPS_Model"));
				myWindow.show();
				myWindow.addTextfield('CPS_Specification',getDictionary("Window_Giga_CPS_Model_ID"));
				myWindow.addTextfield('CPS_Name',getDictionary("Window_Giga_CPS_Model_Name"));
				myWindow.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					myWindow.close();
				},function()
				{
					var ajaxData = {};
					ajaxData.CPS_Specification = $("#CPS_Specification").val();
					ajaxData.CPS_Name = $("#CPS_Name").val();
					ajaxData_withType(Maintable_4,"Select",JSON.stringify(ajaxData),function()
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
				$("#myWindow .Font.translateHtml").width(175);
				$("#myWindow input").width("calc(100% - 180px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//修改
			$("#4_Update").click(function()
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
				myWindow.setHeight(210);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary("Update_Giga_CPS_Model"));
				myWindow.show();
				myWindow.addTextfield('CPS_Specification',getDictionary("Window_Giga_CPS_Model_ID"));
				myWindow.addTextfield('CPS_Name',getDictionary("Window_Giga_CPS_Model_Name"));
				myWindow.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					myWindow.close();
				},function()
				{
					if(!$("#CPS_Specification").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Model_ID"));
					}
					else if(!$("#CPS_Name").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_CPS_Model_Name"));
					}
					else
					{
						var ajaxData = {};
						ajaxData.CPS_Specification = $("#CPS_Specification").val();
						ajaxData.CPS_Name = $("#CPS_Name").val();
						ajaxData.Id = $(".Mainpage_Main_Table_Active div[name='Id']").html();
						ajaxData_withType(Maintable_4,"Update",JSON.stringify(ajaxData),function()
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
				//預設值
				$("#CPS_Specification").val($(".Mainpage_Main_Table_Active div[name='CPS_Specification']").html());
				$("#CPS_Name").val($(".Mainpage_Main_Table_Active div[name='CPS_Name']").html());
				//Window Css
				$("#myWindow .Font.translateHtml").width(175);
				$("#myWindow input").width("calc(100% - 180px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//刪除
			$("#4_Delete").click(function()
			{
				deleteRow(Maintable_4);
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