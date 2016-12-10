/*職位建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_1").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_4").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary('Create_Position_Info')+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="1_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#1_Function_Row").append('<div class="Window_Cancel" id="1_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Insert')+'</div>');
			$("#1_Function_Row").append('<div class="Window_Cancel" id="1_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('View')+'</div>');
			$("#1_Function_Row").append('<div class="Window_Cancel" id="1_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Update')+'</div>');
			$("#1_Function_Row").append('<div class="Window_Cancel" id="1_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Delete')+'</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_1" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_1 = Grid_Panel_Define.Initialize();
			Maintable_1.setId("Maintable_1");
			Maintable_1.setResizer_ID('Maintable_1_Resizer');
			Maintable_1.setHeader_Title(['No.',getDictionary('Create_Position_Position'),getDictionary('Create_Position_Description'),getDictionary('Create_Position_Create_Date'),getDictionary('Create_Position_Update_Date'),getDictionary('Create_Position_Update_Person'),'系統編號']);
			Maintable_1.setModel(['Number','j_name','j_desc','sdate','xdate','xname','Id']);
			Maintable_1.setPagesize(10);
			Maintable_1.setfieldShow([true,true,true,true,true,true,false]);
			Maintable_1.setHeader_Width(['4.5%','19.1%','19.1%','19.1%','19.1%','19.1%','0%']);
			Maintable_1.setHeaderMoveable(true);
			Maintable_1.setMulti_Selectable(true);
			Maintable_1.createHeader();
			Maintable_1.createTable();
			//改寫欄位
			Maintable_1.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_1.getId() + '_Table').children().length; i++)
				{
					$('#' + Maintable_1.getId() + '_Table').children().eq(i).children().eq(0).html(Maintable_1.getStart() + (i + 1));
				};
			});
			Maintable_1.createPagging();
			//資料表名稱
			Table_Name = "job_title";
			Maintable_1.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_1.getStart();
					var Limit = Maintable_1.getPagesize();
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
			Maintable_1.setLoad_Formdata(object);
			Maintable_1.load();
			//Css 表格捲軸
			$("#Maintable_1_Table").css("height","calc(100% - 152px)");
			$("#Maintable_1").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#1_Insert").click(function()
			{
				//新增畫面
				Window_1_Insert = Window_Define.Initialize();
				Window_1_Insert.setMask(true);
				Window_1_Insert.setSmartdetect(false);
				Window_1_Insert.setWidth(480);
				Window_1_Insert.setHeight(326);
				Window_1_Insert.setId('Window_1_Insert');
				Window_1_Insert.setTitle(getDictionary('Insert_Position'));
				Window_1_Insert.show();
				Window_1_Insert.addTextfield('Maintable_1_Table_Inner_-1_j_name',getDictionary('Window_Create_Position_Position'));
				Window_1_Insert.addTextfield('Maintable_1_Table_Inner_-1_j_desc',getDictionary('Window_Create_Position_Description'));
				Window_1_Insert.addTextfield('Maintable_1_Table_Inner_-1_sdate',getDictionary('Window_Create_Position_Create_Date'));
				Window_1_Insert.addTextfield('Maintable_1_Table_Inner_-1_xdate',getDictionary('Window_Create_Position_Update_Date'));
				Window_1_Insert.addTextfield('Maintable_1_Table_Inner_-1_xname',getDictionary('Window_Create_Position_Update_Person'));
				Window_1_Insert.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_1_Insert.close();
				},function()
				{
					if(!$("#Maintable_1_Table_Inner_-1_j_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Create_Position_Position'));
					}
					else if(!$("#Maintable_1_Table_Inner_-1_j_desc").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Create_Position_Description'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.j_name = $("#Maintable_1_Table_Inner_-1_j_name").val();
						ajaxData.j_desc = $("#Maintable_1_Table_Inner_-1_j_desc").val();
						ajaxData.sdate = $("#Maintable_1_Table_Inner_-1_sdate").val();
						ajaxData.xdate = $("#Maintable_1_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_1_Table_Inner_-1_xname").val();
						ajaxData_withType(Maintable_1,"Insert",JSON.stringify(ajaxData),function()
						{
							Window_1_Insert.close();
						});
					}
				});
				//CSS
				$("#Window_1_Insert_Yes").css
				({
					"margin-left":"75px"
				});
				//預設值
				$("#Maintable_1_Table_Inner_-1_sdate").val(getDate(new Date(),'/') + " " + getTime(new Date()));
				$("#Maintable_1_Table_Inner_-1_xdate").val(getDate(new Date(),'/') + " " + getTime(new Date()));
				$("#Maintable_1_Table_Inner_-1_xname").val(UserName);
				//唯讀設定
				$("#Maintable_1_Table_Inner_-1_sdate").attr('readonly',true);
				$("#Maintable_1_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_1_Table_Inner_-1_xname").attr('readonly',true);
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#Window_1_Insert .Font.translateHtml").width(150);
				$("#Window_1_Insert input").width("calc(100% - 155px)");
				$("#Window_1_Insert select").width("calc(100% - 155px)");
			});
			//新增查詢按鈕監聽
			$("#1_Select").click(function()
			{
				//新增畫面
				Window_1_Select = Window_Define.Initialize();
				Window_1_Select.setMask(true);
				Window_1_Select.setSmartdetect(false);
				Window_1_Select.setWidth(480);
				Window_1_Select.setHeight(326);
				Window_1_Select.setId('Window_1_Select');
				Window_1_Select.setTitle(getDictionary('View_Position'));
				Window_1_Select.show();
				Window_1_Select.addTextfield('Maintable_1_Table_Inner_-1_j_name',getDictionary('Window_Create_Position_Position'));				
				Window_1_Select.addTextfield('Maintable_1_Table_Inner_-1_j_desc',getDictionary('Window_Create_Position_Description'));
				Window_1_Select.addTextfield('Maintable_1_Table_Inner_-1_sdate',getDictionary('Window_Create_Position_Create_Date'));
				Window_1_Select.addTextfield('Maintable_1_Table_Inner_-1_xdate',getDictionary('Window_Create_Position_Update_Date'));
				Window_1_Select.addTextfield('Maintable_1_Table_Inner_-1_xname',getDictionary('Window_Create_Position_Update_Person'));
				Window_1_Select.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_1_Select.close();
				},function()
				{
					var ajaxData = {};
					ajaxData.j_name = $("#Maintable_1_Table_Inner_-1_j_name").val();
					ajaxData.j_desc = $("#Maintable_1_Table_Inner_-1_j_desc").val();
					ajaxData.sdate = $("#Maintable_1_Table_Inner_-1_sdate").val();
					ajaxData.xdate = $("#Maintable_1_Table_Inner_-1_xdate").val();
					ajaxData.xname = $("#Maintable_1_Table_Inner_-1_xname").val();
					ajaxData_withType(Maintable_1,"Select",JSON.stringify(ajaxData),function()
					{
						Window_1_Select.close();
					});
				});
				
				//產生日期選擇
				$("#Maintable_1_Table_Inner_-1_sdate").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				$("#Maintable_1_Table_Inner_-1_xdate").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				//CSS
				$("#Window_1_Select_Yes").css
				({
					"margin-left":"75px"
				});
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#Window_1_Select .Font.translateHtml").width(150);
				$("#Window_1_Select input").width("calc(100% - 155px)");
				$("#Window_1_Select select").width("calc(100% - 155px)");
			});
			//修改
			$("#1_Update").click(function()
			{
				if($(".Mainpage_Main_Table_Active").size() == 0)
				{
					normalError_Msg(getDictionary('Please choose item to update.'));
					return;
				}
				//新增畫面
				Window_1_Modify = Window_Define.Initialize();
				Window_1_Modify.setMask(true);
				Window_1_Modify.setSmartdetect(false);
				Window_1_Modify.setWidth(480);
				Window_1_Modify.setHeight(326);
				Window_1_Modify.setId('Window_1_Modify');
				Window_1_Modify.setTitle(getDictionary('Update_Position'));
				Window_1_Modify.show();
				Window_1_Modify.addTextfield('Maintable_1_Table_Inner_-1_j_name',getDictionary('Window_Create_Position_Position'));				
				Window_1_Modify.addTextfield('Maintable_1_Table_Inner_-1_j_desc',getDictionary('Window_Create_Position_Description'));
				Window_1_Modify.addTextfield('Maintable_1_Table_Inner_-1_sdate',getDictionary('Window_Create_Position_Create_Date'));
				Window_1_Modify.addTextfield('Maintable_1_Table_Inner_-1_xdate',getDictionary('Window_Create_Position_Update_Date'));
				Window_1_Modify.addTextfield('Maintable_1_Table_Inner_-1_xname',getDictionary('Window_Create_Position_Update_Person'));
				Window_1_Modify.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_1_Modify.close();
				},function()
				{
					if(!$("#Maintable_1_Table_Inner_-1_j_name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Create_Position_Position'));
					}
					else if(!$("#Maintable_1_Table_Inner_-1_j_desc").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert') + " " + getDictionary('Create_Position_Description'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.j_name = $("#Maintable_1_Table_Inner_-1_j_name").val();
						ajaxData.j_desc = $("#Maintable_1_Table_Inner_-1_j_desc").val();
						ajaxData.xdate = "";
						ajaxData.Id = $(".Mainpage_Main_Table_Active").children().eq(6).html();
						ajaxData_withType(Maintable_1,"Update",JSON.stringify(ajaxData),function()
						{
							Window_1_Modify.close();
						});
					}
				});
				//唯讀設定
				$("#Maintable_1_Table_Inner_-1_sdate").attr('readonly',true);
				$("#Maintable_1_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_1_Table_Inner_-1_xname").attr('readonly',true);
				//CSS
				$("#Window_1_Modify_Yes").css
				({
					"margin-left":"75px"
				});
				//設定值
				$("#Maintable_1_Table_Inner_-1_j_name").val($(".Mainpage_Main_Table_Active").children().eq(1).html());
				$("#Maintable_1_Table_Inner_-1_j_desc").val($(".Mainpage_Main_Table_Active").children().eq(2).html());
				$("#Maintable_1_Table_Inner_-1_sdate").val($(".Mainpage_Main_Table_Active").children().eq(3).html());
				$("#Maintable_1_Table_Inner_-1_xdate").val($(".Mainpage_Main_Table_Active").children().eq(4).html());
				$("#Maintable_1_Table_Inner_-1_xname").val($(".Mainpage_Main_Table_Active").children().eq(5).html());
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#Window_1_Modify .Font.translateHtml").width(150);
				$("#Window_1_Modify input").width("calc(100% - 155px)");
				$("#Window_1_Modify select").width("calc(100% - 155px)");
			});
			//刪除
			$("#1_Delete").click(function()
			{
				deleteRow(Maintable_1);
				//翻譯後的CSS
				setCss_AfterTranslate();
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