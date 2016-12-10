/*區域資料建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_5").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_1").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary('Site_Info')+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="5_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#5_Function_Row").append('<div class="Window_Cancel" id="5_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Insert')+'</div>');
			$("#5_Function_Row").append('<div class="Window_Cancel" id="5_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('View')+'</div>');
			$("#5_Function_Row").append('<div class="Window_Cancel" id="5_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Update')+'</div>');
			$("#5_Function_Row").append('<div class="Window_Cancel" id="5_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Delete')+'</div>');
			$("#5_Function_Row").append('<div class="Window_Cancel" id="5_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Reset')+'</div>');
			//巡檢單位
			$("#5_Function_Row").append('<div style="float:left;margin-left: 15px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_5_Table_Inner_-1_g_name" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_5" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_5 = Grid_Panel_Define.Initialize();
			Maintable_5.setId("Maintable_5");
			Maintable_5.setResizer_ID('Maintable_5_Resizer');
			Maintable_5.setHeader_Title(['No.',getDictionary('Site ID'),getDictionary('Site Condominium'),getDictionary('Site Site'),getDictionary('Site Description'),getDictionary('Site Create Date'),getDictionary('Site Update_Date'),getDictionary('Site Update_Person'),'系統編號','巡檢單位編號']);
			Maintable_5.setModel(['Number','r_id','g_name','region','r_desc','g_date','xdate','xname','Id','guard_id']);
			Maintable_5.setPagesize(10);
			Maintable_5.setfieldShow([true,true,true,true,true,true,true,true,false,false]);
			Maintable_5.setHeader_Width(['4.5%','13.64%','13.64%','13.64%','13.64%','13.64%','13.64%','13.64%','0%','0%']);
			Maintable_5.setHeaderMoveable(true);
			Maintable_5.setMulti_Selectable(true);
			Maintable_5.createHeader();
			Maintable_5.createTable();
			//改寫欄位
			Maintable_5.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_5.getId() + '_Table').children().length; i++)
				{
					$('#' + Maintable_5.getId() + '_Table').children().eq(i).children().eq(0).html(Maintable_5.getStart() + (i + 1));
				};
			});
			Maintable_5.createPagging();
			//資料表名稱
			Table_Name = "region";
			Maintable_5.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_5.getStart();
					var Limit = Maintable_5.getPagesize();
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
			Maintable_5.setLoad_Formdata(object);
			Maintable_5.load();
			//Css 表格捲軸
			$("#Maintable_5_Table").css("height","calc(100% - 152px)");
			$("#Maintable_5").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#5_Insert").click(function()
			{
				//新增畫面
				Window_5 = Window_Define.Initialize();
				Window_5.setMask(true);
				Window_5.setSmartdetect(false);
				Window_5.setWidth(480);
				Window_5.setHeight(406);
				Window_5.setId('Window_5');
				Window_5.setTitle(getDictionary('Window Site Insert'));
				Window_5.show();
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_r_id',getDictionary('Window Site ID'));
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
				Window_5.addComboboxPagging('Maintable_5_Table_Inner_-1_g_name2',getDictionary('Window Site Condominium'),paggingParameter);				
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_region',getDictionary('Window Site Site'));
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_r_desc',getDictionary('Window Site Description'));
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_g_date',getDictionary('Window Site Create Date'));
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_xdate',getDictionary('Window Site Update_Date'));
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_xname',getDictionary('Window Site Update_Person'));
				Window_5.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_5.close();
				},function()
				{
					if(!$("#Maintable_5_Table_Inner_-1_r_id").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+' '+getDictionary('Site ID'));
					}
					else if(!$("#Maintable_5_Table_Inner_-1_g_name2_valueField").html())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+' '+getDictionary('Site Condominium'));
					}
					else if(!$("#Maintable_5_Table_Inner_-1_region").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+' '+getDictionary('Site Site'));
					}
					else if(!$("#Maintable_5_Table_Inner_-1_r_desc").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+' '+getDictionary('Site Description'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.r_id = $("#Maintable_5_Table_Inner_-1_r_id").val();
						ajaxData.guard_id = $("#Maintable_5_Table_Inner_-1_g_name2_valueField").html();
						ajaxData.region = $("#Maintable_5_Table_Inner_-1_region").val();
						ajaxData.r_desc = $("#Maintable_5_Table_Inner_-1_r_desc").val();
						ajaxData.g_date = $("#Maintable_5_Table_Inner_-1_g_date").val();
						ajaxData.xdate = $("#Maintable_5_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_5_Table_Inner_-1_xname").val();
						ajaxData_withType(Maintable_5,"Insert",JSON.stringify(ajaxData),function()
						{
							Window_5.close();
						});
					}
				});
				//CSS
				$("#Window_5_Yes").css
				({
					"margin-left":"75px"
				});
				//預設值
				$("#Maintable_5_Table_Inner_-1_g_date").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#Maintable_5_Table_Inner_-1_xdate").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#Maintable_5_Table_Inner_-1_xname").val(UserName);
				//唯讀設定
				$("#Maintable_5_Table_Inner_-1_g_name2").attr('readonly',true);
				$("#Maintable_5_Table_Inner_-1_g_date").attr('readonly',true);
				$("#Maintable_5_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_5_Table_Inner_-1_xname").attr('readonly',true);
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#Window_5_Body .Font.translateHtml").width(145);
				$("#Window_5_Body input").width("calc(100% - 150px)");
				$("#Window_5_Body select").width("calc(100% - 150px)");
			});
			//新增查詢按鈕監聽
			$("#5_Select").click(function()
			{
				//新增畫面
				Window_5 = Window_Define.Initialize();
				Window_5.setMask(true);
				Window_5.setSmartdetect(false);
				Window_5.setWidth(480);
				Window_5.setHeight(406);
				Window_5.setId('Window_5');
				Window_5.setTitle('查詢區域資料建檔');
				Window_5.show();
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_r_id',getDictionary('Window Site ID'));
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
				Window_5.addComboboxPagging('Maintable_5_Table_Inner_-1_g_name2',getDictionary('Window Site Condominium'),paggingParameter);
				//設定使用者設定值
				$("#Maintable_5_Table_Inner_-1_g_name2").val($("#Maintable_5_Table_Inner_-1_g_name").val());
				$("#Maintable_5_Table_Inner_-1_g_name2_valueField").html($("#Maintable_5_Table_Inner_-1_g_name_valueField").html());
				
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_region',getDictionary('Window Site Site'));
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_r_desc',getDictionary('Window Site Description'));
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_g_date',getDictionary('Window Site Create Date'));
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_xdate',getDictionary('Window Site Update_Date'));
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_xname',getDictionary('Window Site Update_Person'));
				Window_5.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_5.close();
				},function()
				{
					if($("#Maintable_5_Table_Inner_-1_g_name2_valueField").html())
					{
						//設定使用者設定值
						$("#Maintable_5_Table_Inner_-1_g_name").val($("#Maintable_5_Table_Inner_-1_g_name2").val());
						$("#Maintable_5_Table_Inner_-1_g_name_valueField").html($("#Maintable_5_Table_Inner_-1_g_name2_valueField").html());
					}
					var ajaxData = {};
					ajaxData.region = $("#Maintable_5_Table_Inner_-1_region").val();
					ajaxData.r_desc = $("#Maintable_5_Table_Inner_-1_r_desc").val();
					ajaxData.g_date = $("#Maintable_5_Table_Inner_-1_g_date").val();
					ajaxData.xdate = $("#Maintable_5_Table_Inner_-1_xdate").val();
					ajaxData.xname = $("#Maintable_5_Table_Inner_-1_xname").val();
					ajaxData_withType(Maintable_5,"Select",JSON.stringify(ajaxData),function()
					{
						Window_5.close();
					});
				});
				//CSS
				$("#Window_5_Yes").css
				({
					"margin-left":"75px"
				});
				//唯讀設定
				$("#Maintable_5_Table_Inner_-1_g_name2").attr('readonly',true);
				
				//產生日期選擇
				$("#Maintable_5_Table_Inner_-1_g_date").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				$("#Maintable_5_Table_Inner_-1_xdate").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#Window_5_Body .Font.translateHtml").width(145);
				$("#Window_5_Body input").width("calc(100% - 150px)");
				$("#Window_5_Body select").width("calc(100% - 150px)");
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
				Window_5 = Window_Define.Initialize();
				Window_5.setMask(true);
				Window_5.setSmartdetect(false);
				Window_5.setWidth(480);
				Window_5.setHeight(406);
				Window_5.setId('Window_5');
				Window_5.setTitle(getDictionary('Window Site Update'));
				Window_5.show();
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_r_id',getDictionary('Window Site ID'));
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
				Window_5.addComboboxPagging('Maintable_5_Table_Inner_-1_g_name2',getDictionary('Window Site Condominium'),paggingParameter);				
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_region',getDictionary('Window Site Site'));
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_r_desc',getDictionary('Window Site Description'));
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_g_date',getDictionary('Window Site Create Date'));
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_xdate',getDictionary('Window Site Update_Date'));
				Window_5.addTextfield('Maintable_5_Table_Inner_-1_xname',getDictionary('Window Site Update_Person'));
				Window_5.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Window_5.close();
				},function()
				{
					if(!$("#Maintable_5_Table_Inner_-1_r_id").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+' '+getDictionary('Site ID'));
					}
					else if(!$("#Maintable_5_Table_Inner_-1_g_name2_valueField").html())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+' '+getDictionary('Site Condominium'));
					}
					else if(!$("#Maintable_5_Table_Inner_-1_region").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+' '+getDictionary('Site Site'));
					}
					else if(!$("#Maintable_5_Table_Inner_-1_r_desc").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+' '+getDictionary('Site Description'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.r_id = $("#Maintable_5_Table_Inner_-1_r_id").val();
						ajaxData.guard_id = $("#Maintable_5_Table_Inner_-1_g_name2_valueField").html();
						ajaxData.region = $("#Maintable_5_Table_Inner_-1_region").val();
						ajaxData.r_desc = $("#Maintable_5_Table_Inner_-1_r_desc").val();
						ajaxData.g_date = $("#Maintable_5_Table_Inner_-1_g_date").val();
						ajaxData.xdate = $("#Maintable_5_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_5_Table_Inner_-1_xname").val();
						ajaxData.Id = $(".Mainpage_Main_Table_Active").children().eq(8).html();
						ajaxData_withType(Maintable_5,"Update",JSON.stringify(ajaxData),function()
						{
							Window_5.close();
						});
					}
				});
				//CSS
				$("#Window_5_Yes").css
				({
					"margin-left":"75px"
				});
				//唯讀設定
				$("#Maintable_5_Table_Inner_-1_g_date").attr('readonly',true);
				$("#Maintable_5_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_5_Table_Inner_-1_xname").attr('readonly',true);
				$("#Maintable_5_Table_Inner_-1_g_name2").attr('readonly',true);
				//設定值
				$("#Maintable_5_Table_Inner_-1_r_id").val($(".Mainpage_Main_Table_Active").children().eq(1).html());
				$("#Maintable_5_Table_Inner_-1_g_name2").val($(".Mainpage_Main_Table_Active").children().eq(2).html());
				$("#Maintable_5_Table_Inner_-1_g_name2_valueField").html($(".Mainpage_Main_Table_Active").children().eq(9).html());
				$("#Maintable_5_Table_Inner_-1_region").val($(".Mainpage_Main_Table_Active").children().eq(3).html());
				$("#Maintable_5_Table_Inner_-1_r_desc").val($(".Mainpage_Main_Table_Active").children().eq(4).html());
				$("#Maintable_5_Table_Inner_-1_g_date").val($(".Mainpage_Main_Table_Active").children().eq(5).html());
				$("#Maintable_5_Table_Inner_-1_xdate").val($(".Mainpage_Main_Table_Active").children().eq(6).html());
				$("#Maintable_5_Table_Inner_-1_xname").val($(".Mainpage_Main_Table_Active").children().eq(7).html());
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#Window_5_Body .Font.translateHtml").width(145);
				$("#Window_5_Body input").width("calc(100% - 150px)");
				$("#Window_5_Body select").width("calc(100% - 150px)");
			});
			//取消
			$("#5_Cancel").click(function()
			{
				$("#Mainpage_Menu_Title_5").children().click();
			});
			//刪除
			$("#5_Delete").click(function()
			{
				deleteRow(Maintable_5);
			});
			//FK 共用設定
			function fkSetting()
			{
				//FK 設定
				$("#Maintable_5_Table_Inner_-1_g_name").attr('placeholder',getDictionary('Site Condominium'));
				//配合 Window_Define 套件建立 div
				$("#Maintable_5_Table_Inner_-1_g_name").parent().append('<div id="Maintable_5_Table_Inner_-1_g_name_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
				Maintable_5_Combobox = Window_Define.Initialize();
				Maintable_5_Combobox.setId('Maintable_5_Table_Inner_-1_g_name');
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
				Maintable_5_Combobox.addComboboxPagging('Maintable_5_Table_Inner_-1_g_name','',paggingParameter);
				Maintable_5_Combobox['Maintable_5_Table_Inner_-1_g_name'].ComboboxPagging_setPagging_Parameter(paggingParameter);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_5_Combobox,Maintable_5_Combobox.getId());
				//回存主物件
				Maintable_5[Maintable_5_Combobox.getId()] = Maintable_5_Combobox;
				//下拉式選單值改變
				$("#Maintable_5_Table_Inner_-1_g_name_valueField").bind("DOMSubtreeModified", function()
				{
					//重整頁面
					ajaxData_withType(Maintable_5,"Select","{}",null);
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