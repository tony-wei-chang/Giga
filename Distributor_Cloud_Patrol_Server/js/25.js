/*權限管理*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_25").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_4").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary('Permission_Info')+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="25_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#25_Function_Row").append('<div class="Window_Cancel" id="25_Select" style="margin-left:0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('View')+'</div>');
			$("#25_Function_Row").append('<div class="Window_Cancel" id="25_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Update')+'</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_25" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_25 = Grid_Panel_Define.Initialize();
			Maintable_25.setId("Maintable_25");
			Maintable_25.setResizer_ID('Maintable_25_Resizer');
			Maintable_25.setHeader_Title(['No.',getDictionary('Permission_Condominium_ID'),getDictionary('Permission_Condominium'),getDictionary('Permission_Supervisor'),'系統編號','管理人員編號']);
			Maintable_25.setModel(['Number','g_Id','g_name','gd_name','Id','g_manager']);
			Maintable_25.setPagesize(10);
			Maintable_25.setfieldShow([true,true,true,true,false,false]);
			Maintable_25.setHeader_Width(['4.5%','31.83%','31.83%','31.83%','0%','0%']);
			Maintable_25.setHeaderMoveable(true);
			Maintable_25.setMulti_Selectable(true);
			Maintable_25.createHeader();
			Maintable_25.createTable();
			//改寫欄位
			Maintable_25.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_25.getId() + '_Table').children().length; i++)
				{
					//項目編號
					$('#' + Maintable_25.getId() + '_Table').children().eq(i).children().eq(0).html(Maintable_25.getStart() + (i + 1));
					//管理人員
					var superviosr = $('#' + Maintable_25.getId() + '_Table').children().eq(i).children().eq(3).html();
					if(superviosr == "")
					{
						$('#' + Maintable_25.getId() + '_Table').children().eq(i).children().eq(3).html(getDictionary('Permission_None'));
					}
					else
					{
						$('#' + Maintable_25.getId() + '_Table').children().eq(i).children().eq(3).html(superviosr);
					}
				};
			});
			Maintable_25.createPagging();
			//資料表名稱
			Table_Name = "guard_case";
			Maintable_25.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_25.getStart();
					var Limit = Maintable_25.getPagesize();
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
			Maintable_25.setLoad_Formdata(object);
			Maintable_25.load();
			//Css 表格捲軸
			$("#Maintable_25_Table").css("height","calc(100% - 152px)");
			$("#Maintable_25").css("height","calc(100% - 40px)");
			//查詢
			$("#25_Select").click(function()
			{
				//新增畫面
				Window_25_Insert = Window_Define.Initialize();
				Window_25_Insert.setMask(true);
				Window_25_Insert.setSmartdetect(false);
				Window_25_Insert.setWidth(480);
				Window_25_Insert.setHeight(250);
				Window_25_Insert.setId('Window_25_Insert');
				Window_25_Insert.setTitle(getDictionary('View_Permission'));
				Window_25_Insert.show();
				Window_25_Insert.addTextfield('Maintable_25_Table_Inner_g_Id',getDictionary('Window_Permission_Condominium_ID'));				
				Window_25_Insert.addTextfield('Maintable_25_Table_Inner_g_name',getDictionary('Window_Permission_Condominium'));			
				var paggingParameter0 = 
				{
					//分頁設定
					'Url':serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=security_guard&Order_field=Id&Order_Sequence=Asc",
				    'rootProperty':'Data',
				    'displayField':'gd_name',
				    'valueField':'Id',
				    'fk_key':'reg_id',
				    'pageSize':'5',
				    'searchUrl':serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=security_guard&Order_field=Id&Order_Sequence=Asc",
				    'searchPlaceholder':'搜尋巡檢單位',
				    'searchKey':'searchKey'
				};
				Window_25_Insert.addComboboxPagging('Maintable_25_Table_Inner_gd_name',getDictionary('Window_Permission_Supervisor'),paggingParameter0);
				Window_25_Insert.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_25_Insert.close();
				},function()
				{
					var ajaxData = {};
					ajaxData.g_Id = $("#Maintable_25_Table_Inner_g_Id").val();
					ajaxData.g_name = $("#Maintable_25_Table_Inner_g_name").val();
					ajaxData.security_guard_Id = $("#Maintable_25_Table_Inner_gd_name_valueField").html();					
					ajaxData_withType(Maintable_25,"Select",JSON.stringify(ajaxData),function()
					{
						Window_25_Insert.close();
					});
				});
				//CSS
				$("#Window_25_Insert_Yes").css
				({
					"margin-left":"75px"
				});
				//Window Css
				$("#Window_25_Insert_Body .Font.translateHtml").width(130);
				$("#Window_25_Insert_Body input").width("calc(100% - 135px)");
				//Blur
				$("#Maintable_25_Table_Inner_gd_name").blur(function()
				{
					$("#Window_25_Insert").css('overflow-x','hidden');
				});
				$("#Maintable_25_Table_Inner_gd_name_valueField").bind("DOMSubtreeModified", function()
				{
					$("#Window_25_Insert").css('overflow-x','hidden');
				});
				$("#Maintable_25_Table_Inner_gd_name_Combobox_Pagging").css
				({
					"top":"168px"
				});
				//Window Css
				$("#Window_25_Insert .Font.translateHtml").width(155);
				$("#Window_25_Insert input").width("calc(100% - 160px)");
				$("#Window_25_Insert select").width("calc(100% - 160px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//修改
			$("#25_Update").click(function()
			{
				if($(".Mainpage_Main_Table_Active").size() == 0)
				{
					normalError_Msg(getDictionary('Please choose item to update.'));
					return;
				}
				//新增畫面
				Window_25_Insert = Window_Define.Initialize();
				Window_25_Insert.setMask(true);
				Window_25_Insert.setSmartdetect(false);
				Window_25_Insert.setWidth(480);
				Window_25_Insert.setHeight(250);
				Window_25_Insert.setId('Window_25_Insert');
				Window_25_Insert.setTitle(getDictionary('Update_Permission'));
				Window_25_Insert.show();
				Window_25_Insert.addTextfield('Maintable_25_Table_Inner_g_Id',getDictionary('Window_Permission_Condominium_ID'));				
				Window_25_Insert.addTextfield('Maintable_25_Table_Inner_g_name',getDictionary('Window_Permission_Condominium'));			
				var paggingParameter0 = 
				{
					//分頁設定
					'Url':serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=security_guard",
				    'rootProperty':'Data',
				    'displayField':'gd_name',
				    'valueField':'Id',
				    'fk_key':'reg_id',
				    'pageSize':'5',
				    'searchUrl':serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=security_guard",
				    'searchPlaceholder':'搜尋巡檢單位',
				    'searchKey':'searchKey'
				};
				Window_25_Insert.addComboboxPagging('Maintable_25_Table_Inner_gd_name',getDictionary('Window_Permission_Supervisor'),paggingParameter0);
				Window_25_Insert.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_25_Insert.close();
				},function()
				{
					var ajaxData = {};
					ajaxData.g_manager = $("#Maintable_25_Table_Inner_gd_name_valueField").html();
					ajaxData.Id = $(".Mainpage_Main_Table_Active").children().eq(4).html();
					ajaxData_withType(Maintable_25,"Update",JSON.stringify(ajaxData),function()
					{
						Window_25_Insert.close();
					});
				});
				//CSS
				$("#Window_25_Insert_Yes").css
				({
					"margin-left":"75px"
				});
				//設定值
				$("#Maintable_25_Table_Inner_g_Id").val($(".Mainpage_Main_Table_Active").children().eq(1).html());
				$("#Maintable_25_Table_Inner_g_name").val($(".Mainpage_Main_Table_Active").children().eq(2).html());
				$("#Maintable_25_Table_Inner_gd_name").val($(".Mainpage_Main_Table_Active").children().eq(3).html());
				$("#Maintable_25_Table_Inner_gd_name_valueField").html($(".Mainpage_Main_Table_Active").children().eq(4).html());
				//唯讀
				$("#Maintable_25_Table_Inner_g_Id").attr('readonly','true');
				$("#Maintable_25_Table_Inner_g_name").attr('readonly','true');
				//Window Css
				$("#Window_25_Insert_Body .Font.translateHtml").width(130);
				$("#Window_25_Insert_Body input").width("calc(100% - 135px)");
				//Blur
				$("#Maintable_25_Table_Inner_gd_name").blur(function()
				{
					$("#Window_25_Insert").css('overflow-x','hidden');
				});
				$("#Maintable_25_Table_Inner_gd_name_valueField").bind("DOMSubtreeModified", function()
				{
					$("#Window_25_Insert").css('overflow-x','hidden');
				});
				$("#Maintable_25_Table_Inner_gd_name_Combobox_Pagging").css
				({
					"top":"168px"
				});
				$("#Maintable_25_Table_Inner_gd_name").attr('readonly','true');
				//Window Css
				$("#Window_25_Insert .Font.translateHtml").width(155);
				$("#Window_25_Insert input").width("calc(100% - 160px)");
				$("#Window_25_Insert select").width("calc(100% - 160px)");
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