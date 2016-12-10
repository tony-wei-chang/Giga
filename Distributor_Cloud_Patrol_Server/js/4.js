/*標籤資料建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_4").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_1").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">' + getDictionary("CPS_Card_Info") + '</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="4_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#4_Function_Row").append('<div class="Window_Cancel" id="4_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">' + getDictionary("Insert") + '</div>');
			$("#4_Function_Row").append('<div class="Window_Cancel" id="4_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">' + getDictionary("View") + '</div>');
			$("#4_Function_Row").append('<div class="Window_Cancel" id="4_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">' + getDictionary("Update") + '</div>');
			$("#4_Function_Row").append('<div class="Window_Cancel" id="4_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">' + getDictionary("Delete") + '</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_4" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			var Maintable_4 = Grid_Panel_Define.Initialize();
			Maintable_4.setId("Maintable_4");
			Maintable_4.setResizer_ID('Maintable_4_Resizer');
			Maintable_4.setHeader_Title(['No.',getDictionary('CPS_Data Tag_ID'),getDictionary('CPS_Data Is_Used'),getDictionary('CPS_Data Create_Date'),getDictionary('CPS_Data Update_Date'),getDictionary('CPS_Data Update_Person'),'系統編號']);
			Maintable_4.setModel(['Number','r_name','stop','sdate','xdate','xname','Id']);
			Maintable_4.setPagesize(10);
			Maintable_4.setfieldShow([true,true,true,true,true,true,false]);
			Maintable_4.setHeader_Width(['4.5%','19.5%','19.5%','19.5%','19.5%','19.5%','0%']);
			Maintable_4.setHeaderMoveable(true);
			Maintable_4.setMulti_Selectable(true);
			Maintable_4.createHeader();
			Maintable_4.createTable();
			//改寫欄位
			Maintable_4.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_4.getId() + '_Table').children().length; i++)
				{
					$('#' + Maintable_4.getId() + '_Table').children().eq(i).children().eq(0).html(Maintable_4.getStart() + (i + 1));
					var stop = $('#' + Maintable_4.getId() + '_Table').children().eq(i).children().eq(2).html();
					$('#' + Maintable_4.getId() + '_Table').children().eq(i).children().eq(2).html((stop == "Y")?getDictionary("CPS_Data Not_Used"):getDictionary("CPS_Data Used"));
					$('#' + Maintable_4.getId() + '_Table').children().eq(i).children().eq(2).attr("title",(stop == "Y")?getDictionary("CPS_Data Not_Used"):getDictionary("CPS_Data Used"));
				};
			});
			Maintable_4.createPagging();
			//資料表名稱
			Table_Name = "rfid";
			//改寫撈資料方法
			Maintable_4.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_4.getStart();
					var Limit = Maintable_4.getPagesize();
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
			Maintable_4.setLoad_Formdata(object);
			Maintable_4.load();
			//Css 表格捲軸
			$("#Maintable_4_Table").css("height","calc(100% - 152px)");
			$("#Maintable_4").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#4_Insert").click(function()
			{
				//新增畫面
				Window_4 = Window_Define.Initialize();
				Window_4.setMask(true);
				Window_4.setSmartdetect(false);
				Window_4.setWidth(480);
				Window_4.setHeight(326);
				Window_4.setId('Window_4');
				Window_4.setTitle(getDictionary('CPS_Data Insert CPS Card'));
				Window_4.show();
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_r_name',getDictionary("CPS_Data Window Tag_ID"));				
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_stop',getDictionary("CPS_Data Window Is Uesd"));
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_sdate',getDictionary("CPS_Data Window Create_Date"));
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_xdate',getDictionary("CPS_Data Window Update_Date"));
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_xname',getDictionary("CPS_Data Window Person"));
				Window_4.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					Window_4.close();
				},function()
				{
					if(!$("#Maintable_4_Table_Inner_-1_r_name").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + getDictionary('CPS_Data Tag_ID') + '.');
					}
					else
					{
						var ajaxData = {};
						ajaxData.r_name = $("#Maintable_4_Table_Inner_-1_r_name").val();
						ajaxData.stop = $("#Maintable_4_Table_Inner_-1_stop").val();
						ajaxData.sdate = $("#Maintable_4_Table_Inner_-1_sdate").val();
						ajaxData.xdate = $("#Maintable_4_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_4_Table_Inner_-1_xname").val();
						ajaxData_withType(Maintable_4,"Insert",JSON.stringify(ajaxData),function()
						{
							Window_4.close();
						});
					}
				});
				//CSS
				$("#Window_4_Yes").css
				({
					"margin-left":"75px"
				});
				//預設值
				$("#Maintable_4_Table_Inner_-1_sdate").val(getDate(new Date(),'/') + " " + getTime(new Date()));
				$("#Maintable_4_Table_Inner_-1_xdate").val(getDate(new Date(),'/') + " " + getTime(new Date()));
				$("#Maintable_4_Table_Inner_-1_xname").val(UserName);
				$("#Maintable_4_Table_Inner_-1_stop").val(getDictionary("CPS_Data Not_Used"));
				//唯讀設定
				$("#Maintable_4_Table_Inner_-1_sdate").attr('readonly',true);
				$("#Maintable_4_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_4_Table_Inner_-1_xname").attr('readonly',true);
				$("#Maintable_4_Table_Inner_-1_stop").attr('readonly',true);
			});
			//新增查詢按鈕監聽
			$("#4_Select").click(function()
			{
				//新增畫面
				Window_4 = Window_Define.Initialize();
				Window_4.setMask(true);
				Window_4.setSmartdetect(false);
				Window_4.setWidth(480);
				Window_4.setHeight(326);
				Window_4.setId('Window_4');
				Window_4.setTitle(getDictionary("CPS_Data View CPS Card"));
				Window_4.show();
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_r_name',getDictionary("CPS_Data Window Tag_ID"));
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_stop',getDictionary("CPS_Data Window Is Uesd"));
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_sdate',getDictionary("CPS_Data Window Create_Date"));
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_xdate',getDictionary("CPS_Data Window Update_Date"));
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_xname',getDictionary("CPS_Data Window Person"));
				Window_4.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					Window_4.close();
				},function()
				{
					var ajaxData = {};
					ajaxData.r_name = $("#Maintable_4_Table_Inner_-1_r_name").val();
					ajaxData.stop = $("#Maintable_4_Table_Inner_-1_stop").val();
					ajaxData.sdate = $("#Maintable_4_Table_Inner_-1_sdate").val();
					ajaxData.xdate = $("#Maintable_4_Table_Inner_-1_xdate").val();
					ajaxData.xname = $("#Maintable_4_Table_Inner_-1_xname").val();
					ajaxData_withType(Maintable_4,"Select",JSON.stringify(ajaxData),function()
					{
						Window_4.close();
					});
				});
				//CSS
				$("#Window_4_Yes").css
				({
					"margin-left":"75px"
				});
				
				//產生日期選擇
				$("#Maintable_4_Table_Inner_-1_sdate").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				$("#Maintable_4_Table_Inner_-1_xdate").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
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
				Window_4 = Window_Define.Initialize();
				Window_4.setMask(true);
				Window_4.setSmartdetect(false);
				Window_4.setWidth(480);
				Window_4.setHeight(326);
				Window_4.setId('Window_4');
				Window_4.setTitle(getDictionary("CPS_Data View CPS Card"));
				Window_4.show();
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_r_name',getDictionary("CPS_Data Window Tag_ID"));				
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_stop',getDictionary("CPS_Data Window Is Uesd"));
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_sdate',getDictionary("CPS_Data Window Create_Date"));
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_xdate',getDictionary("CPS_Data Window Update_Date"));
				Window_4.addTextfield('Maintable_4_Table_Inner_-1_xname',getDictionary("CPS_Data Window Person"));
				Window_4.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					Window_4.close();
				},function()
				{
					var ajaxData = {};
					ajaxData.r_name = $("#Maintable_4_Table_Inner_-1_r_name").val();
					ajaxData.stop = $("#Maintable_4_Table_Inner_-1_stop").val();
					ajaxData.xdate = "";
					ajaxData.Id = $(".Mainpage_Main_Table_Active").children().eq(6).html();
					ajaxData_withType(Maintable_4,"Update",JSON.stringify(ajaxData),function()
					{
						Window_4.close();
					});
				});
				//CSS
				$("#Window_4_Yes").css
				({
					"margin-left":"75px"
				});
				//唯讀設定
				$("#Maintable_4_Table_Inner_-1_sdate").attr('readonly',true);
				$("#Maintable_4_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_4_Table_Inner_-1_xname").attr('readonly',true);
				$("#Maintable_4_Table_Inner_-1_stop").attr('readonly',true);
				//設定值
				$("#Maintable_4_Table_Inner_-1_r_name").val($(".Mainpage_Main_Table_Active").children().eq(1).html());
				$("#Maintable_4_Table_Inner_-1_stop").val($(".Mainpage_Main_Table_Active").children().eq(2).html());
				$("#Maintable_4_Table_Inner_-1_sdate").val($(".Mainpage_Main_Table_Active").children().eq(3).html());
				$("#Maintable_4_Table_Inner_-1_xdate").val($(".Mainpage_Main_Table_Active").children().eq(4).html());
				$("#Maintable_4_Table_Inner_-1_xname").val($(".Mainpage_Main_Table_Active").children().eq(5).html());
			});
			//刪除
			$("#4_Delete").click(function()
			{
				deleteRow(Maintable_4);
			});
			//翻譯
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