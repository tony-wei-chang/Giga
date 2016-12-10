/*巡檢路線明細建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_7_3").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_1").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary("Route_Detail_Info")+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="7_3_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#7_3_Function_Row").append('<div class="Window_Cancel" id="7_3_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Insert")+'</div>');
			$("#7_3_Function_Row").append('<div class="Window_Cancel" id="7_3_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("View")+'</div>');
			$("#7_3_Function_Row").append('<div class="Window_Cancel" id="7_3_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Update")+'</div>');
			$("#7_3_Function_Row").append('<div class="Window_Cancel" id="7_3_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Delete")+'</div>');
			$("#7_3_Function_Row").append('<div class="Window_Cancel" id="7_3_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary("Reset")+'</div>');
			//巡檢單位
			$("#7_3_Function_Row").append('<div style="float:left;margin-left: 15px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_7_3_Table_Inner_-1_g_name" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//區域名稱
			$("#7_3_Function_Row").append('<div style="float:left;margin-left: -20px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_7_3_Table_Inner_-1_region" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//巡檢路線名稱
			$("#7_3_Function_Row").append('<div style="float:left;margin-left: -20px;margin-top: -10px;"><input class="Font Window_Textfield" id="Maintable_7_3_Table_Inner_-1_pat_name" type="text" style="width: calc(100% - 40px); border-width: 0px 0px 1px; border-top-style: initial; border-right-style: initial; border-bottom-style: solid; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: rgb(152, 152, 152); border-left-color: initial; border-image: initial; margin-top: 18px; text-align: center; font-size: 12px;"></div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_7_3" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_7_3 = Grid_Panel_Define.Initialize();
			Maintable_7_3.setId("Maintable_7_3");
			Maintable_7_3.setResizer_ID('Maintable_7_3_Resizer');
			Maintable_7_3.setHeader_Title(['No.',getDictionary("Route_Detail_Condominium"),getDictionary("Route_Detail_Site"),getDictionary("Route_Detail_Route_Name"),getDictionary("Route_Detail_Patrol_Point"),getDictionary("Route_Detail_Patrol_Order"),getDictionary("Route_Detail_Update_Date"),getDictionary("Route_Detail_Update_Person"),'系統編號','巡檢點編號','巡檢路線編號','巡檢單位編號','區域編號','區域名稱']);
			Maintable_7_3.setModel(['Number','g_name','region','pat_name','p_name','pat_no','xdate','xname','Id','pat_id','rou_id','guard_case_id','region_id','region']);
			Maintable_7_3.setPagesize(10);
			Maintable_7_3.setfieldShow([true,true,true,true,true,true,true,true,false,false,false,false,false,false]);
			Maintable_7_3.setHeader_Width(['4.5%','13.64%','13.64%','13.64%','13.64%','13.64%','13.64%','13.64%','0%','0%','0%','0%','0%','0%']);
			Maintable_7_3.setHeaderMoveable(true);
			Maintable_7_3.setMulti_Selectable(true);
			Maintable_7_3.createHeader();
			Maintable_7_3.createTable();
			//改寫欄位
			Maintable_7_3.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_7_3.getId() + '_Table').children().length; i++)
				{
					$('#' + Maintable_7_3.getId() + '_Table').children().eq(i).children().eq(0).html(Maintable_7_3.getStart() + (i + 1));
				};
			});
			Maintable_7_3.createPagging();
			//資料表名稱
			Table_Name = "patrol_route_detail";
			Maintable_7_3.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_7_3.getStart();
					var Limit = Maintable_7_3.getPagesize();
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
			Maintable_7_3.setLoad_Formdata(object);
			// $("#Maintable_7_3_Table_Inner_-1_g_name").focus();
			Maintable_7_3.load();
			//Css 表格捲軸
			$("#Maintable_7_3_Table").css("height","calc(100% - 152px)");
			$("#Maintable_7_3").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#7_3_Insert").click(function()
			{
				//新增畫面
				Window_7_3 = Window_Define.Initialize();
				Window_7_3.setMask(true);
				Window_7_3.setSmartdetect(false);
				Window_7_3.setWidth(480);
				Window_7_3.setHeight(408);
				Window_7_3.setId('Window_7_3');
				Window_7_3.setTitle(getDictionary("Window_Route_Detail_Insert"));
				Window_7_3.show();
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
				    'searchPlaceholder':'搜尋巡檢單位',
				    'searchKey':'searchKey'
				};
				Window_7_3.addComboboxPagging('Maintable_7_3_Table_Inner_-1_g_name2',getDictionary("Window_Route_Detail_Condominium"),paggingParameter);
				//區域名稱
				//當值改變 設定時間
				var comboboxReset_g_name2 = false;
				$("#Maintable_7_3_Table_Inner_-1_g_name2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_7_3_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter2.Url = tempUrl;
					Window_7_3['Maintable_7_3_Table_Inner_-1_region2']['ComboboxPagging_setPagging_Parameter'](paggingParameter2);
					Window_7_3['Maintable_7_3_Table_Inner_-1_region2']['ComboboxPagging_load']();

					if(comboboxReset_g_name2)
					{
						$("#Maintable_7_3_Table_Inner_-1_region2_valueField").val("");
						$("#Maintable_7_3_Table_Inner_-1_region2_displayField").val("");
						$("#Maintable_7_3_Table_Inner_-1_region2").val("");

						$("#Maintable_7_3_Table_Inner_-1_pat_name2").val("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name2_valueField").html("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name2_displayField").html("");

						$("#Maintable_7_3_Table_Inner_-1_p_name").val("");
						$("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html("");
						$("#Maintable_7_3_Table_Inner_-1_p_name_displayField").html("");
					}
					comboboxReset_g_name2 = true;
				});
				var paggingParameter2 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'region',
				    'valueField':'Id',
				    'fk_key':'reg_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋區域名稱',
				    'searchKey':'searchKey'
				};
				Window_7_3.addComboboxPagging('Maintable_7_3_Table_Inner_-1_region2',getDictionary("Window_Route_Detail_Site"),paggingParameter2);
				var comboboxReset_region2 = false;
				$("#Maintable_7_3_Table_Inner_-1_region2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl2 = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_route&Id=" + $("#Maintable_7_3_Table_Inner_-1_region2_valueField").html();
					paggingParameter3.Url = tempUrl2;
					Window_7_3['Maintable_7_3_Table_Inner_-1_pat_name2']['ComboboxPagging_setPagging_Parameter'](paggingParameter3);
					Window_7_3['Maintable_7_3_Table_Inner_-1_pat_name2']['ComboboxPagging_load']();
					
					//下拉式選單網址
					var tempUrl2 = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_point&Id=" + $("#Maintable_7_3_Table_Inner_-1_region2_valueField").html();
					paggingParameter4.Url = tempUrl2;
					Window_7_3['Maintable_7_3_Table_Inner_-1_p_name']['ComboboxPagging_setPagging_Parameter'](paggingParameter4);
					Window_7_3['Maintable_7_3_Table_Inner_-1_p_name']['ComboboxPagging_load']();

					if(comboboxReset_region2)
					{
						$("#Maintable_7_3_Table_Inner_-1_pat_name2").val("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name2_valueField").html("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name2_displayField").html("");

						$("#Maintable_7_3_Table_Inner_-1_p_name").val("");
						$("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html("");
						$("#Maintable_7_3_Table_Inner_-1_p_name_displayField").html("");
					}
					comboboxReset_region2 = true;
				});
				//確認有無區域可選擇
				Window_7_3['Maintable_7_3_Table_Inner_-1_region2'].ComboboxPagging_NoData = function()
				{
					if($("#YesNo_Msg").size() == 0)
					{
						normalError_Msg_Withmask($("#Maintable_7_3_Table_Inner_-1_g_name2").val() + getDictionary("have no site can be selected."));
					}
				};
				//CSS
				var newTop = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40;
				var newLeft = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_3_Table_Inner_-1_region2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_3_Table_Inner_-1_region2_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢路線名稱
				var paggingParameter3 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'p_name',
				    'valueField':'Id',
				    'fk_key':'pat_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋班別編號',
				    'searchKey':'searchKey'
				};
				Window_7_3.addComboboxPagging('Maintable_7_3_Table_Inner_-1_pat_name2',getDictionary("Window_Route_Detail_Route_Name"),paggingParameter3);
				//確認有無路線可選擇
				Window_7_3['Maintable_7_3_Table_Inner_-1_pat_name2'].ComboboxPagging_NoData = function()
				{
					if($("#YesNo_Msg").size() == 0)
					{
						normalError_Msg_Withmask($("#Maintable_7_3_Table_Inner_-1_region2").val() + getDictionary("have no patrol route can be selected."));
					}
				};
				//CSS
				var newTop = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40*2;
				var newLeft = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_3_Table_Inner_-1_pat_name2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_3_Table_Inner_-1_pat_name2_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢路線名稱
				//巡檢點名稱
				var paggingParameter4 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'p_name',
				    'valueField':'Id',
				    'fk_key':'pat_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋班別編號',
				    'searchKey':'searchKey'
				};
				Window_7_3.addComboboxPagging('Maintable_7_3_Table_Inner_-1_p_name',getDictionary("Window_Route_Detail_Patrol_Point"),paggingParameter4);
				//確認有無區域可選擇
				Window_7_3['Maintable_7_3_Table_Inner_-1_p_name'].ComboboxPagging_NoData = function()
				{
					if($("#YesNo_Msg").size() == 0)
					{
						normalError_Msg_Withmask($("#Maintable_7_3_Table_Inner_-1_region2").val() + getDictionary("have no patrol point can be selected."));
					}
				};
				//CSS
				var newTop = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40*3;
				var newLeft = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_3_Table_Inner_-1_p_name_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_3_Table_Inner_-1_p_name_Combobox_Pagging").css("left",newLeft + "px");
				//當巡邏點改變
				$("#Maintable_7_3_Table_Inner_-1_p_name_valueField").bind("DOMSubtreeModified", function()
				{
					//檢查巡邏點有沒有任務
					if($("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html())
					{
						var ajaxData = {"pnt_id":$("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html()};
						jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02="+new Date().getTime()+"&start=0&limit=1&TableName=point_check&Order_field=Id&Order_Sequence=Asc",JSON.stringify(ajaxData),function(data)
						{
							//result
							var result = JSON.parse(data);
							if(result.Success == 'true')
							{
								if(parseInt(result.MaxCount) == 0)
								{
									//Msg
									normalError_Msg_Withmask($("#Maintable_7_3_Table_Inner_-1_p_name").val() + getDictionary("have no patrol mission can be selected."));
									$("#YesNo_Msg_Yes").click(function()
									{
										$("#Maintable_7_3_Table_Inner_-1_p_name").val("");
										$("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html("");
									});
								}
							}
							else if(result.Success == 'false')
							{
								//Msg
								normalError_Msg_Withmask(result.Reason);
							}
						},function()
						{
							//Msg
							// normalError_Msg_Withmask('任務資料查詢錯誤');
						},function()
						{
							//Msg
							// normalError_Msg_Withmask('任務資料查詢錯誤');
						});
					}
				});
				//巡檢點名稱
				Window_7_3.addTextfield('Maintable_7_3_Table_Inner_-1_pat_no',getDictionary("Window_Route_Detail_Patrol_Order"));
				Window_7_3.addTextfield('Maintable_7_3_Table_Inner_-1_xdate',getDictionary("Window_Route_Detail_Update_Date"));
				Window_7_3.addTextfield('Maintable_7_3_Table_Inner_-1_xname',getDictionary("Window_Route_Detail_Update_Person"));
				Window_7_3.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					Window_7_3.close();
				},function()
				{
					if(!$("#Maintable_7_3_Table_Inner_-1_g_name2").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" "+getDictionary("Route_Detail_Condominium"));
					}
					else if(!$("#Maintable_7_3_Table_Inner_-1_region2").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" "+getDictionary("Route_Detail_Site"));
					}
					else if(!$("#Maintable_7_3_Table_Inner_-1_pat_name2").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" "+getDictionary("Route_Detail_Route_Name"));
					}
					else if(!$("#Maintable_7_3_Table_Inner_-1_p_name").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" "+getDictionary("Route_Detail_Patrol_Point"));
					}
					else if(!$("#Maintable_7_3_Table_Inner_-1_pat_no").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" "+getDictionary("Route_Detail_Patrol_Order"));
					}
					else
					{
						var ajaxData = {};
						ajaxData.rou_id = $("#Maintable_7_3_Table_Inner_-1_pat_name2_valueField").html();
						ajaxData.pat_no = $("#Maintable_7_3_Table_Inner_-1_pat_no").val();
						ajaxData.pat_id = $("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html();
						ajaxData.xdate = $("#Maintable_7_3_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_7_3_Table_Inner_-1_xname").val();
						ajaxData_withType(Maintable_7_3,"Insert",JSON.stringify(ajaxData));
						Window_7_3.close();
					}
				});
				$("#Window_7_3_Yes").css
				({
					"margin-left":"75px"
				});
				//預設值
				$("#Maintable_7_3_Table_Inner_-1_xdate").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#Maintable_7_3_Table_Inner_-1_xname").val(UserName);
				//唯讀設定
				$("#Maintable_7_3_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_7_3_Table_Inner_-1_xname").attr('readonly',true);
				$("#Maintable_7_3_Table_Inner_-1_g_name2").attr('readonly',true);
				$("#Maintable_7_3_Table_Inner_-1_region2").attr('readonly',true);
				$("#Maintable_7_3_Table_Inner_-1_pat_name2").attr('readonly',true);
				//數字格式
				$("#Maintable_7_3_Table_Inner_-1_pat_no").attr('type','Number');
				$("#Maintable_7_3_Table_Inner_-1_pat_no").attr('min','0');
				//Window Css
				$("#Window_7_3_Body .Font.translateHtml").width(140);
				$("#Window_7_3_Body input").width("calc(100% - 145px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//新增查詢按鈕監聽
			$("#7_3_Select").click(function()
			{
				//新增畫面
				Window_7_3 = Window_Define.Initialize();
				Window_7_3.setMask(true);
				Window_7_3.setSmartdetect(false);
				Window_7_3.setWidth(480);
				Window_7_3.setHeight(408);
				Window_7_3.setId('Window_7_3');
				Window_7_3.setTitle(getDictionary("Window_Route_Detail_View"));
				Window_7_3.show();
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
				    'searchPlaceholder':'搜尋巡檢單位',
				    'searchKey':'searchKey'
				};
				Window_7_3.addComboboxPagging('Maintable_7_3_Table_Inner_-1_g_name2',getDictionary("Window_Route_Detail_Condominium"),paggingParameter);
				//區域名稱
				//當值改變 設定時間
				var comboboxReset_g_name2 = false;
				$("#Maintable_7_3_Table_Inner_-1_g_name2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_7_3_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter2.Url = tempUrl;
					Window_7_3['Maintable_7_3_Table_Inner_-1_region2']['ComboboxPagging_setPagging_Parameter'](paggingParameter2);
					Window_7_3['Maintable_7_3_Table_Inner_-1_region2']['ComboboxPagging_load']();

					if(comboboxReset_g_name2)
					{
						$("#Maintable_7_3_Table_Inner_-1_region2_valueField").val("");
						$("#Maintable_7_3_Table_Inner_-1_region2_displayField").val("");
						$("#Maintable_7_3_Table_Inner_-1_region2").val("");

						$("#Maintable_7_3_Table_Inner_-1_pat_name2").val("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name2_valueField").html("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name2_displayField").html("");

						$("#Maintable_7_3_Table_Inner_-1_p_name").val("");
						$("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html("");
						$("#Maintable_7_3_Table_Inner_-1_p_name_displayField").html("");
					}
					comboboxReset_g_name2 = true;
				});
				var paggingParameter2 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'region',
				    'valueField':'Id',
				    'fk_key':'reg_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋區域名稱',
				    'searchKey':'searchKey'
				};
				Window_7_3.addComboboxPagging('Maintable_7_3_Table_Inner_-1_region2',getDictionary("Window_Route_Detail_Site"),paggingParameter2);
				var comboboxReset_region2 = false;
				$("#Maintable_7_3_Table_Inner_-1_region2_valueField").bind("DOMSubtreeModified", function()
				{
					if($("#Maintable_7_3_Table_Inner_-1_region2_valueField").html() != "")
					{
						//下拉式選單網址
						var tempUrl2 = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_route&Id=" + $("#Maintable_7_3_Table_Inner_-1_region2_valueField").html();
						paggingParameter3.Url = tempUrl2;
						Window_7_3['Maintable_7_3_Table_Inner_-1_pat_name2']['ComboboxPagging_setPagging_Parameter'](paggingParameter3);
						Window_7_3['Maintable_7_3_Table_Inner_-1_pat_name2']['ComboboxPagging_load']();
					}

					if(comboboxReset_region2)
					{
						$("#Maintable_7_3_Table_Inner_-1_pat_name2").val("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name2_valueField").html("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name2_displayField").html("");
					}
					comboboxReset_region2 = true;
				});
				//CSS
				var newTop = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40;
				var newLeft = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_3_Table_Inner_-1_region2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_3_Table_Inner_-1_region2_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢路線名稱
				var paggingParameter3 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'p_name',
				    'valueField':'Id',
				    'fk_key':'pat_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋班別編號',
				    'searchKey':'searchKey'
				};
				Window_7_3.addComboboxPagging('Maintable_7_3_Table_Inner_-1_pat_name2',getDictionary("Window_Route_Detail_Route_Name"),paggingParameter3);
				//CSS
				var newTop = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40*2;
				var newLeft = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_3_Table_Inner_-1_pat_name2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_3_Table_Inner_-1_pat_name2_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢路線名稱
				//巡檢點名稱
				Window_7_3.addTextfield('Maintable_7_3_Table_Inner_-1_p_name',getDictionary("Window_Route_Detail_Patrol_Point"));
				//CSS
				var newTop = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40*3;
				var newLeft = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_3_Table_Inner_-1_p_name_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_3_Table_Inner_-1_p_name_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢點名稱
				Window_7_3.addTextfield('Maintable_7_3_Table_Inner_-1_pat_no',getDictionary("Window_Route_Detail_Patrol_Order"));
				Window_7_3.addTextfield('Maintable_7_3_Table_Inner_-1_xdate',getDictionary("Window_Route_Detail_Update_Date"));
				Window_7_3.addTextfield('Maintable_7_3_Table_Inner_-1_xname',getDictionary("Window_Route_Detail_Update_Person"));
				Window_7_3.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					Window_7_3.close();
				},function()
				{
					//設定使用者設定值
					$("#Maintable_7_3_Table_Inner_-1_g_name").val($("#Maintable_7_3_Table_Inner_-1_g_name2").val());
					$("#Maintable_7_3_Table_Inner_-1_g_name_valueField").html($("#Maintable_7_3_Table_Inner_-1_g_name2_valueField").html());
					$("#Maintable_7_3_Table_Inner_-1_region").val($("#Maintable_7_3_Table_Inner_-1_region2").val());
					$("#Maintable_7_3_Table_Inner_-1_region_valueField").html($("#Maintable_7_3_Table_Inner_-1_region2_valueField").html());
					$("#Maintable_7_3_Table_Inner_-1_pat_name").val($("#Maintable_7_3_Table_Inner_-1_pat_name2").val());
					$("#Maintable_7_3_Table_Inner_-1_pat_name_valueField").html($("#Maintable_7_3_Table_Inner_-1_pat_name2_valueField").html());
					var ajaxData = {};
					ajaxData.g_name = $("#Maintable_7_3_Table_Inner_-1_g_name").val();
					ajaxData.region = $("#Maintable_7_3_Table_Inner_-1_region").val();
					ajaxData.pat_name = $("#Maintable_7_3_Table_Inner_-1_pat_name").val();
					ajaxData.pat_no = $("#Maintable_7_3_Table_Inner_-1_pat_no").val();
					ajaxData.p_name = $("#Maintable_7_3_Table_Inner_-1_p_name").val();
					ajaxData.xdate = $("#Maintable_7_3_Table_Inner_-1_xdate").val();
					ajaxData.xname = $("#Maintable_7_3_Table_Inner_-1_xname").val();
					ajaxData_withType(Maintable_7_3,"Select",JSON.stringify(ajaxData));
					Window_7_3.close();
				});
				$("#Window_7_3_Yes").css
				({
					"margin-left":"75px"
				});
				//數字格式
				$("#Maintable_7_3_Table_Inner_-1_pat_no").attr('type','Number');
				$("#Maintable_7_3_Table_Inner_-1_pat_no").attr('min','0');
				//Window Css
				$("#Window_7_3_Body .Font.translateHtml").width(140);
				$("#Window_7_3_Body input").width("calc(100% - 145px)");
				//設定使用者設定值
				$("#Maintable_7_3_Table_Inner_-1_g_name2").val($("#Maintable_7_3_Table_Inner_-1_g_name").val());
				$("#Maintable_7_3_Table_Inner_-1_g_name2_valueField").html($("#Maintable_7_3_Table_Inner_-1_g_name_valueField").html());
				$("#Maintable_7_3_Table_Inner_-1_region2").val($("#Maintable_7_3_Table_Inner_-1_region").val());
				$("#Maintable_7_3_Table_Inner_-1_region2_valueField").html($("#Maintable_7_3_Table_Inner_-1_region_valueField").html());
				$("#Maintable_7_3_Table_Inner_-1_pat_name2").val($("#Maintable_7_3_Table_Inner_-1_pat_name").val());
				$("#Maintable_7_3_Table_Inner_-1_pat_name2_valueField").html($("#Maintable_7_3_Table_Inner_-1_pat_name_valueField").html());
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//修改
			$("#7_3_Update").click(function()
			{
				if($(".Mainpage_Main_Table_Active").size() == 0)
				{
					normalError_Msg(getDictionary('Please choose item to update.'));
					return;
				}
				//新增畫面
				Window_7_3 = Window_Define.Initialize();
				Window_7_3.setMask(true);
				Window_7_3.setSmartdetect(false);
				Window_7_3.setWidth(480);
				Window_7_3.setHeight(408);
				Window_7_3.setId('Window_7_3');
				Window_7_3.setTitle(getDictionary("Window_Route_Detail_Update"));
				Window_7_3.show();
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
				    'searchPlaceholder':'搜尋巡檢單位',
				    'searchKey':'searchKey'
				};
				Window_7_3.addComboboxPagging('Maintable_7_3_Table_Inner_-1_g_name2',getDictionary("Window_Route_Detail_Condominium"),paggingParameter);
				//區域名稱
				//當值改變 設定時間
				var comboboxReset_g_name2 = false;
				$("#Maintable_7_3_Table_Inner_-1_g_name2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_7_3_Table_Inner_-1_g_name2_valueField").html();
					paggingParameter2.Url = tempUrl;
					Window_7_3['Maintable_7_3_Table_Inner_-1_region2']['ComboboxPagging_setPagging_Parameter'](paggingParameter2);
					Window_7_3['Maintable_7_3_Table_Inner_-1_region2']['ComboboxPagging_load']();

					if(comboboxReset_g_name2)
					{
						$("#Maintable_7_3_Table_Inner_-1_region2_valueField").val("");
						$("#Maintable_7_3_Table_Inner_-1_region2_displayField").val("");
						$("#Maintable_7_3_Table_Inner_-1_region2").val("");

						$("#Maintable_7_3_Table_Inner_-1_pat_name2").val("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name2_valueField").html("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name2_displayField").html("");

						$("#Maintable_7_3_Table_Inner_-1_p_name").val("");
						$("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html("");
						$("#Maintable_7_3_Table_Inner_-1_p_name_displayField").html("");
					}
					comboboxReset_g_name2 = true;
				});
				var paggingParameter2 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'region',
				    'valueField':'Id',
				    'fk_key':'reg_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋區域名稱',
				    'searchKey':'searchKey'
				};
				Window_7_3.addComboboxPagging('Maintable_7_3_Table_Inner_-1_region2',getDictionary("Window_Route_Detail_Site"),paggingParameter2);
				var comboboxReset_region2 = false;
				$("#Maintable_7_3_Table_Inner_-1_region2_valueField").bind("DOMSubtreeModified", function()
				{
					//下拉式選單網址
					var tempUrl2 = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_route&Id=" + $("#Maintable_7_3_Table_Inner_-1_region2_valueField").html();
					paggingParameter3.Url = tempUrl2;
					Window_7_3['Maintable_7_3_Table_Inner_-1_pat_name2']['ComboboxPagging_setPagging_Parameter'](paggingParameter3);
					Window_7_3['Maintable_7_3_Table_Inner_-1_pat_name2']['ComboboxPagging_load']();
					
					//下拉式選單網址
					var tempUrl2 = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_point&Id=" + $("#Maintable_7_3_Table_Inner_-1_region2_valueField").html();
					paggingParameter4.Url = tempUrl2;
					Window_7_3['Maintable_7_3_Table_Inner_-1_p_name']['ComboboxPagging_setPagging_Parameter'](paggingParameter4);
					Window_7_3['Maintable_7_3_Table_Inner_-1_p_name']['ComboboxPagging_load']();

					if(comboboxReset_region2)
					{
						$("#Maintable_7_3_Table_Inner_-1_pat_name2").val("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name2_valueField").html("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name2_displayField").html("");

						$("#Maintable_7_3_Table_Inner_-1_p_name").val("");
						$("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html("");
						$("#Maintable_7_3_Table_Inner_-1_p_name_displayField").html("");
					}
					comboboxReset_region2 = true;
				});
				//確認有無區域可選擇
				Window_7_3['Maintable_7_3_Table_Inner_-1_region2'].ComboboxPagging_NoData = function()
				{
					if($("#YesNo_Msg").size() == 0)
					{
						normalError_Msg_Withmask($("#Maintable_7_3_Table_Inner_-1_g_name2").val() + getDictionary("have no site can be selected."));
					}
				};
				//CSS
				var newTop = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40;
				var newLeft = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_3_Table_Inner_-1_region2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_3_Table_Inner_-1_region2_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢路線名稱
				var paggingParameter3 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'p_name',
				    'valueField':'Id',
				    'fk_key':'pat_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋班別編號',
				    'searchKey':'searchKey'
				};
				Window_7_3.addComboboxPagging('Maintable_7_3_Table_Inner_-1_pat_name2',getDictionary("Window_Route_Detail_Route_Name"),paggingParameter3);
				//確認有無路線可選擇
				Window_7_3['Maintable_7_3_Table_Inner_-1_pat_name2'].ComboboxPagging_NoData = function()
				{
					if($("#YesNo_Msg").size() == 0)
					{
						normalError_Msg_Withmask($("#Maintable_7_3_Table_Inner_-1_region2").val() + getDictionary("have no patrol route can be selected."));
					}
				};
				//CSS
				var newTop = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40*2;
				var newLeft = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_3_Table_Inner_-1_pat_name2_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_3_Table_Inner_-1_pat_name2_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢路線名稱
				//巡檢點名稱
				var paggingParameter4 = 
				{
					//分頁設定
					'Url':"",
				    'rootProperty':'Data',
				    'displayField':'p_name',
				    'valueField':'Id',
				    'fk_key':'pat_id',
				    'pageSize':'5',
				    'searchUrl':"",
				    'searchPlaceholder':'搜尋班別編號',
				    'searchKey':'searchKey'
				};
				Window_7_3.addComboboxPagging('Maintable_7_3_Table_Inner_-1_p_name',getDictionary("Window_Route_Detail_Patrol_Point"),paggingParameter4);
				//確認有無區域可選擇
				Window_7_3['Maintable_7_3_Table_Inner_-1_p_name'].ComboboxPagging_NoData = function()
				{
					if($("#YesNo_Msg").size() == 0)
					{
						normalError_Msg_Withmask($("#Maintable_7_3_Table_Inner_-1_region2").val() + getDictionary("have no patrol point can be selected."));
					}
				};
				//當巡邏點改變
				$("#Maintable_7_3_Table_Inner_-1_p_name_valueField").bind("DOMSubtreeModified", function()
				{
					//檢查巡邏點有沒有任務
					if($("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html())
					{
						var ajaxData = {"pnt_id":$("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html()};
						jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02="+new Date().getTime()+"&start=0&limit=1&TableName=point_check&Order_field=Id&Order_Sequence=Asc",JSON.stringify(ajaxData),function(data)
						{
							//result
							var result = JSON.parse(data);
							if(result.Success == 'true')
							{
								if(parseInt(result.MaxCount) == 0)
								{
									//Msg
									normalError_Msg_Withmask($("#Maintable_7_3_Table_Inner_-1_p_name").val() + getDictionary("have no patrol mission can be selected."));
									$("#YesNo_Msg_Yes").click(function()
									{
										$("#Maintable_7_3_Table_Inner_-1_p_name").val("");
										$("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html("");
									});
								}
							}
							else if(result.Success == 'false')
							{
								//Msg
								normalError_Msg_Withmask(result.Reason);
							}
						},function()
						{
							//Msg
							// normalError_Msg_Withmask('任務資料查詢錯誤');
						},function()
						{
							//Msg
							// normalError_Msg_Withmask('任務資料查詢錯誤');
						});
					}
				});
				//CSS
				var newTop = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("top").split('px')[0]) + 40*3;
				var newLeft = parseFloat($("#Maintable_7_3_Table_Inner_-1_g_name2_Combobox_Pagging").css("left"));
				$("#Maintable_7_3_Table_Inner_-1_p_name_Combobox_Pagging").css("top",newTop + "px");
				$("#Maintable_7_3_Table_Inner_-1_p_name_Combobox_Pagging").css("left",newLeft + "px");
				//巡檢點名稱
				Window_7_3.addTextfield('Maintable_7_3_Table_Inner_-1_pat_no',getDictionary("Window_Route_Detail_Patrol_Order"));
				Window_7_3.addTextfield('Maintable_7_3_Table_Inner_-1_xdate',getDictionary("Window_Route_Detail_Update_Date"));
				Window_7_3.addTextfield('Maintable_7_3_Table_Inner_-1_xname',getDictionary("Window_Route_Detail_Update_Person"));
				Window_7_3.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					Window_7_3.close();
				},function()
				{
					if(!$("#Maintable_7_3_Table_Inner_-1_g_name2").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" "+getDictionary("Route_Detail_Condominium"));
					}
					else if(!$("#Maintable_7_3_Table_Inner_-1_region2").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" "+getDictionary("Route_Detail_Site"));
					}
					else if(!$("#Maintable_7_3_Table_Inner_-1_pat_name2").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" "+getDictionary("Route_Detail_Route_Name"));
					}
					else if(!$("#Maintable_7_3_Table_Inner_-1_p_name").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" "+getDictionary("Route_Detail_Patrol_Point"));
					}
					else if(!$("#Maintable_7_3_Table_Inner_-1_pat_no").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert")+" "+getDictionary("Route_Detail_Patrol_Order"));
					}
					else
					{
						var ajaxData = {};
						ajaxData.rou_id = $("#Maintable_7_3_Table_Inner_-1_pat_name2_valueField").html();
						ajaxData.pat_no = $("#Maintable_7_3_Table_Inner_-1_pat_no").val();
						ajaxData.pat_id = $("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html();
						ajaxData.xdate = $("#Maintable_7_3_Table_Inner_-1_xdate").val();
						ajaxData.xname = $("#Maintable_7_3_Table_Inner_-1_xname").val();
						ajaxData.Id = $(".Mainpage_Main_Table_Active").children().eq(8).html();
						ajaxData_withType(Maintable_7_3,"Update",JSON.stringify(ajaxData));
						Window_7_3.close();
					}
				});
				$("#Window_7_3_Yes").css
				({
					"margin-left":"75px"
				});
				//預設值
				$("#Maintable_7_3_Table_Inner_-1_g_name2").val($(".Mainpage_Main_Table_Active").children().eq(1).html());
				$("#Maintable_7_3_Table_Inner_-1_g_name2_valueField").html($(".Mainpage_Main_Table_Active").children().eq(11).html());
				$("#Maintable_7_3_Table_Inner_-1_region2").val($(".Mainpage_Main_Table_Active").children().eq(13).html());
				$("#Maintable_7_3_Table_Inner_-1_region2_valueField").html($(".Mainpage_Main_Table_Active").children().eq(12).html());
				$("#Maintable_7_3_Table_Inner_-1_pat_name2").val($(".Mainpage_Main_Table_Active").children().eq(3).html());
				$("#Maintable_7_3_Table_Inner_-1_pat_name2_valueField").html(10);
				$("#Maintable_7_3_Table_Inner_-1_p_name").val($(".Mainpage_Main_Table_Active").children().eq(4).html());
				$("#Maintable_7_3_Table_Inner_-1_p_name_valueField").html($(".Mainpage_Main_Table_Active").children().eq(9).html());
				$("#Maintable_7_3_Table_Inner_-1_pat_no").val($(".Mainpage_Main_Table_Active").children().eq(5).html());
				$("#Maintable_7_3_Table_Inner_-1_xdate").val($(".Mainpage_Main_Table_Active").children().eq(6).html());
				$("#Maintable_7_3_Table_Inner_-1_xname").val($(".Mainpage_Main_Table_Active").children().eq(7).html());
				//唯讀設定
				$("#Maintable_7_3_Table_Inner_-1_xdate").attr('readonly',true);
				$("#Maintable_7_3_Table_Inner_-1_xname").attr('readonly',true);
				$("#Maintable_7_3_Table_Inner_-1_g_name2").attr('readonly',true);
				$("#Maintable_7_3_Table_Inner_-1_region2").attr('readonly',true);
				$("#Maintable_7_3_Table_Inner_-1_pat_name2").attr('readonly',true);
				//數字格式
				$("#Maintable_7_3_Table_Inner_-1_pat_no").attr('type','Number');
				$("#Maintable_7_3_Table_Inner_-1_pat_no").attr('min','0');
				//Window Css
				$("#Window_7_3_Body .Font.translateHtml").width(140);
				$("#Window_7_3_Body input").width("calc(100% - 145px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//取消
			$("#7_3_Cancel").click(function()
			{
				$("#Mainpage_Menu_Title_7_3").children().click();
			});
			//刪除
			$("#7_3_Delete").click(function()
			{
				deleteRow(Maintable_7_3);
				//翻譯後的CSS
				setCss_AfterTranslate();
			});
			//FK 共用設定
			function fkSetting()
			{
				//FK 設定
				$("#Maintable_7_3_Table_Inner_-1_g_name").attr('placeholder',getDictionary("Route_Detail_Condominium"));
				//配合 Window_Define 套件建立 div
				$("#Maintable_7_3_Table_Inner_-1_g_name").parent().append('<div id="Maintable_7_3_Table_Inner_-1_g_name_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
				Maintable_7_3_Combobox = Window_Define.Initialize();
				Maintable_7_3_Combobox.setId('Maintable_7_3_Table_Inner_-1_g_name');
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
				Maintable_7_3_Combobox.addComboboxPagging('Maintable_7_3_Table_Inner_-1_g_name','',paggingParameter);
				Maintable_7_3_Combobox['Maintable_7_3_Table_Inner_-1_g_name'].ComboboxPagging_setPagging_Parameter(paggingParameter);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_7_3_Combobox,Maintable_7_3_Combobox.getId());
				//回存主物件
				Maintable_7_3['Maintable_7_3_Table_Inner_-1_g_name'] = Maintable_7_3_Combobox;
				//FK 設定

				//當值改變
				var comboboxReset = false;
				$("#Maintable_7_3_Table_Inner_-1_g_name_valueField").bind("DOMSubtreeModified", function()
				{
					if($("#Maintable_7_3_Table_Inner_-1_g_name_valueField").html())
					{
						paggingParameter2.Url = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=region&Id=" + $("#Maintable_7_3_Table_Inner_-1_g_name_valueField").html();
						Maintable_7_3['Maintable_7_3_Table_Inner_-1_region']['Maintable_7_3_Table_Inner_-1_region'].ComboboxPagging_setPagging_Parameter(paggingParameter2);
						Maintable_7_3['Maintable_7_3_Table_Inner_-1_region']['Maintable_7_3_Table_Inner_-1_region'].ComboboxPagging_load();
					}
					if(comboboxReset)
					{
						//重設區域名稱
						$("#Maintable_7_3_Table_Inner_-1_region").val("");
						$("#Maintable_7_3_Table_Inner_-1_region_displayField").html("");
						$("#Maintable_7_3_Table_Inner_-1_region_valueField").html("");
					}
					comboboxReset = true;
					if($("#Maintable_7_3_Table_Inner_-1_g_name_valueField").html())
					{
						//查詢
						var ajaxData = {};
						ajaxData.g_name = $("#Maintable_7_3_Table_Inner_-1_g_name").val();
						ajaxData_withType(Maintable_7_3,"Select",JSON.stringify(ajaxData));
					}
				});

				//FK 設定
				$("#Maintable_7_3_Table_Inner_-1_region").attr('placeholder',getDictionary("Route_Detail_Site"));
				//配合 Window_Define 套件建立 div
				$("#Maintable_7_3_Table_Inner_-1_region").parent().append('<div id="Maintable_7_3_Table_Inner_-1_region_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = false;
				var Maintable_7_3_Combobox = Window_Define.Initialize();
				Maintable_7_3_Combobox.setId('Maintable_7_3_Table_Inner_-1_region');
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
				Maintable_7_3_Combobox.addComboboxPagging('Maintable_7_3_Table_Inner_-1_region','',paggingParameter2);
				Maintable_7_3_Combobox['Maintable_7_3_Table_Inner_-1_region'].ComboboxPagging_setPagging_Parameter(paggingParameter2);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_7_3_Combobox,Maintable_7_3_Combobox.getId());
				//回存主物件
				Maintable_7_3['Maintable_7_3_Table_Inner_-1_region'] = Maintable_7_3_Combobox;
				//FK 設定

				//當值改變
				var comboboxReset2 = false;
				$("#Maintable_7_3_Table_Inner_-1_region_valueField").bind("DOMSubtreeModified", function()
				{
					if($("#Maintable_7_3_Table_Inner_-1_region_valueField").html())
					{
						paggingParameter3.Url = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=patrol_route&Id=" + $("#Maintable_7_3_Table_Inner_-1_region_valueField").html();
						Maintable_7_3['Maintable_7_3_Table_Inner_-1_pat_name']['Maintable_7_3_Table_Inner_-1_pat_name'].ComboboxPagging_setPagging_Parameter(paggingParameter3);
						Maintable_7_3['Maintable_7_3_Table_Inner_-1_pat_name']['Maintable_7_3_Table_Inner_-1_pat_name'].ComboboxPagging_load();
					}
					if(comboboxReset2)
					{
						//重設區域名稱
						$("#Maintable_7_3_Table_Inner_-1_pat_name").val("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name_displayField").html("");
						$("#Maintable_7_3_Table_Inner_-1_pat_name_valueField").html("");
					}
					comboboxReset2 = true;
					if($("#Maintable_7_3_Table_Inner_-1_region_valueField").html())
					{
						//查詢
						var ajaxData = {};
						ajaxData.g_name = $("#Maintable_7_3_Table_Inner_-1_g_name").val();
						ajaxData.region = $("#Maintable_7_3_Table_Inner_-1_region").val();
						ajaxData_withType(Maintable_7_3,"Select",JSON.stringify(ajaxData));
					}
				});

				//FK 設定
				$("#Maintable_7_3_Table_Inner_-1_pat_name").attr('placeholder',getDictionary("Route_Detail_Route_Name"));
				//配合 Window_Define 套件建立 div
				$("#Maintable_7_3_Table_Inner_-1_pat_name").parent().append('<div id="Maintable_7_3_Table_Inner_-1_pat_name_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = "";
				Maintable_7_3_Combobox = Window_Define.Initialize();
				Maintable_7_3_Combobox.setId('Maintable_7_3_Table_Inner_-1_pat_name');
				var paggingParameter3 = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'p_name',
				    'valueField':'Id',
				    'fk_key':'rou_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋路線名稱',
				    'searchKey':'searchKey'
				};
				Maintable_7_3_Combobox.addComboboxPagging('Maintable_7_3_Table_Inner_-1_pat_name','',paggingParameter3);
				Maintable_7_3_Combobox['Maintable_7_3_Table_Inner_-1_pat_name'].ComboboxPagging_setPagging_Parameter(paggingParameter3);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_7_3_Combobox,Maintable_7_3_Combobox.getId());
				//回存主物件
				Maintable_7_3['Maintable_7_3_Table_Inner_-1_pat_name'] = Maintable_7_3_Combobox;
				//FK 設定

				//當值改變
				$("#Maintable_7_3_Table_Inner_-1_pat_name_valueField").bind("DOMSubtreeModified", function()
				{
					if($("#Maintable_7_3_Table_Inner_-1_pat_name_valueField").html())
					{
						//查詢
						var ajaxData = {};
						ajaxData.g_name = $("#Maintable_7_3_Table_Inner_-1_g_name").val();
						ajaxData.region = $("#Maintable_7_3_Table_Inner_-1_region").val();
						ajaxData.pat_name = $("#Maintable_7_3_Table_Inner_-1_pat_name").val();
						ajaxData_withType(Maintable_7_3,"Select",JSON.stringify(ajaxData));
					}
				});
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