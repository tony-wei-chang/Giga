/*代理商CPS Reader建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_9").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_1").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary("Distributor_CPS_Reader_Info")+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="9_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#9_Function_Row").append('<div class="Window_Cancel" id="9_Select" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("View")+'</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_9" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			var Maintable_9 = Grid_Panel_Define.Initialize();
			Maintable_9.setId("Maintable_9");
			Maintable_9.setResizer_ID('Maintable_9_Resizer');
			Maintable_9.setHeader_Title(['No.',getDictionary("Distributor_CPS_Reader_Condominium"),getDictionary("Distributor_CPS_Reader_CPS_Reader_Number"),getDictionary("Distributor_CPS_Reader_Is_Used"),getDictionary("Distributor_CPS_Reader_StartDate"),getDictionary("Distributor_CPS_Reader_EndDate"),getDictionary("Distributor_CPS_Reader_Update_Date"),"系統編號"]);
			Maintable_9.setModel(['Number','g_name','CPS_Reader_Name','Status','Xdate','Edate','r_time','Id']);
			Maintable_9.setPagesize(10);
			Maintable_9.setfieldShow([true,true,true,true,true,true,true,false]);
			Maintable_9.setHeader_Width(['4.5%','15.91%','15.91%','15.91%','15.91%','15.91%','15.91%','0%']);
			Maintable_9.setHeaderMoveable(true);
			Maintable_9.setMulti_Selectable(true);
			Maintable_9.createHeader();
			Maintable_9.createTable();
			//改寫欄位
			Maintable_9.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_9.getId() + '_Table').children().length; i++)
				{
					$('#' + Maintable_9.getId() + '_Table').children().eq(i).children().eq(0).html(Maintable_9.getStart() + (i + 1));
					var status = $('#' + Maintable_9.getId() + '_Table').children().eq(i).children().eq(3).html();
					if(status == "Y")
					{
						status = getDictionary("Distributor_CPS_Reader_Not_Used");
					}
					else if(status == "N")
					{
						status = getDictionary("Distributor_CPS_Reader_Used");
					}
					else if(status == "R")
					{
						status = getDictionary("Distributor_CPS_Reader_Repair");
					}
					$('#' + Maintable_9.getId() + '_Table').children().eq(i).children().eq(3).html(status);
					$('#' + Maintable_9.getId() + '_Table').children().eq(i).children().eq(3).attr("title",status);
				};
			});
			Maintable_9.createPagging();
			//資料表名稱
			Table_Name = "CPS_Data";
			Maintable_9.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_9.getStart();
					var Limit = Maintable_9.getPagesize();
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
			Maintable_9.setLoad_Formdata(object);
			Maintable_9.load();
			//Css 表格捲軸
			$("#Maintable_9_Table").css("height","calc(100% - 152px)");
			$("#Maintable_9").css("height","calc(100% - 40px)");
			//新增查詢按鈕監聽
			$("#9_Select").click(function()
			{
				//新增畫面
				Window_9 = Window_Define.Initialize();
				Window_9.setMask(true);
				Window_9.setSmartdetect(false);
				Window_9.setWidth(480);
				Window_9.setHeight(368);
				Window_9.setId('Window_9');
				Window_9.setTitle(getDictionary("Window_Distributor_CPS_Reader_View"));
				Window_9.show();
				Window_9.addTextfield('Maintable_9_Table_Inner_-1_g_name',getDictionary("Window_Distributor_CPS_Reader_Condominium"));
				Window_9.addTextfield('Maintable_9_Table_Inner_-1_CPS_Reader_Name',getDictionary("Window_Distributor_CPS_Reader_CPS_Reader_Number"));
				Window_9.addTextfield('Maintable_9_Table_Inner_-1_Status',getDictionary("Window_Distributor_CPS_Reader_Is_Used"));
				Window_9.addTextfield('Maintable_9_Table_Inner_-1_Xdate',getDictionary("Window_Distributor_CPS_Reader_StartDate"));
				Window_9.addTextfield('Maintable_9_Table_Inner_-1_Edate',getDictionary("Window_Distributor_CPS_Reader_EndDate"));
				Window_9.addTextfield('Maintable_9_Table_Inner_-1_r_time',getDictionary("Window_Distributor_CPS_Reader_Update_Date"));
				Window_9.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					Window_9.close();
				},function()
				{
					var ajaxData = {};
					ajaxData.g_name = $("#Maintable_9_Table_Inner_-1_g_name").val();
					ajaxData.CPS_Reader_Name = $("#Maintable_9_Table_Inner_-1_CPS_Reader_Name").val();
					var status = $("#Maintable_9_Table_Inner_-1_Status").val();
					if(status == getDictionary("Distributor_CPS_Reader_Not_Used"))
					{
						status = "Y";
					}
					else if(status == getDictionary("Distributor_CPS_Reader_Used"))
					{
						status = "N";
					}
					else if(status == getDictionary("Distributor_CPS_Reader_Repair"))
					{
						status = "R";
					}
					ajaxData.Status = status;
					ajaxData.Xdate = $("#Maintable_9_Table_Inner_-1_Xdate").val();
					ajaxData.Sdate = $("#Maintable_9_Table_Inner_-1_Sdate").val();
					ajaxData.r_time = $("#Maintable_9_Table_Inner_-1_r_time").val();
					ajaxData_withType(Maintable_9,"Select",JSON.stringify(ajaxData));
					Window_9.close();
				});
				$("#Window_9_Yes").css
				({
					"margin-left":"75px"
				});
				//Window Css
				$("#Window_9_Body .Font.translateHtml").width(185);
				$("#Window_9_Body input").width("calc(100% - 190px)");
				//產生日期選擇
				$("#Maintable_9_Table_Inner_-1_Xdate").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				$("#Maintable_9_Table_Inner_-1_Sdate").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				$("#Maintable_9_Table_Inner_-1_r_time").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				$("#Maintable_9_Table_Inner_-1_CPS_Reader_Name_Label").css("margin-left","-2px");
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