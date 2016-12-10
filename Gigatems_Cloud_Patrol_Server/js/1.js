/*客戶資料建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_1").children().eq(0).click(function()
		{
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary("Giga_Customer_Info")+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="1_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#1_Function_Row").append('<div class="Window_Cancel" id="1_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Insert')+'</div>');
			$("#1_Function_Row").append('<div class="Window_Cancel" id="1_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('View')+'</div>');
			$("#1_Function_Row").append('<div class="Window_Cancel" id="1_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Update')+'</div>');
			$("#1_Function_Row").append('<div class="Window_Cancel" id="1_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Delete')+'</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_1" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶資料建檔表格
			Maintable_1 = Grid_Panel_Define.Initialize();
			Maintable_1.setId("Maintable_1");
			Maintable_1.setResizer_ID('Maintable_1_Resizer');
			Maintable_1.setHeader_Title(['No.',
										getDictionary("Giga_Customer_ID"),
										getDictionary("Giga_Customer_Name"),
										getDictionary("Giga_Customer_Phone"),
										getDictionary("Giga_Customer_Fax"),
										getDictionary("Giga_Customer_Address"),
										getDictionary("Giga_Customer_Responsible_Person"),
										getDictionary("Giga_Customer_Purchase_Way"),
										getDictionary("Giga_Customer_Create_Date"),
										getDictionary("Giga_Create_User_Update_Date"),
										getDictionary("Giga_Create_User_Update_Person"),
										'系統編號',
										getDictionary("Giga_Customer_DataBase_IP"),
										getDictionary("Giga_Customer_DataBase_Account"),
										getDictionary("Giga_Customer_DataBase_Password"),
										getDictionary("Giga_Customer_Rent_Start"),
										getDictionary("Giga_Customer_Rent_End"),
										'緩衝天數',
										getDictionary("Giga_Customer_Is_Used"),
										getDictionary("Giga_Customer_Remarks")]);
			Maintable_1.setModel(['Number','Ag_Id','Ag_Name','Ag_Tele','Ag_Fax','Ag_Addr','Ag_Owner','Ag_Buy','C_Date','X_Date','X_Name','Id','Ag_IP','Ag_MSSQL_Acct','Ag_MSSQL_Pswd','Rb_Date','Re_Date','Buf_Date','Ag_Status','Ag_Desc']);
			Maintable_1.setPagesize(10);
			Maintable_1.setfieldShow([true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false]);
			Maintable_1.setHeader_Width(['4.5%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','0%','0%','0%','0%','0%','0%','0%','0%','0%']);
			Maintable_1.setHeaderMoveable(true);
			Maintable_1.setMulti_Selectable(true);
			Maintable_1.createHeader();
			Maintable_1.createTable();
			//改寫欄位
			Maintable_1.setLoad_Callback(function()
			{
				//序號
				for (var i = 0; i < $("#Maintable_1_Table").children().find('div[name="Number"]').length; i++)
				{
					$("#Maintable_1_Table").children().find('div[name="Number"]').eq(i).html(Maintable_1.getStart() + (i + 1));
				}
				//購買方式
				for (var i = 0; i < $("#Maintable_1_Table").children().find('div[name="Ag_Buy"]').length; i++)
				{
					var Ag_Buy = $("#Maintable_1_Table").children().find('div[name="Ag_Buy"]').eq(i).html();
					if(Ag_Buy == "B")
					{
						$("#Maintable_1_Table").children().find('div[name="Ag_Buy"]').eq(i).html(getDictionary("Giga_Customer_Buy"));
					}
					else
					{
						$("#Maintable_1_Table").children().find('div[name="Ag_Buy"]').eq(i).html(getDictionary("Giga_Customer_Rent"));
					}
				}
				//狀態
				for (var i = 0; i < $("#Maintable_1_Table").children().find('div[name="Ag_Status"]').length; i++)
				{
					var Ag_Status = $("#Maintable_1_Table").children().find('div[name="Ag_Status"]').eq(i).html();
					if(Ag_Status == "N")
					{
						$("#Maintable_1_Table").children().find('div[name="Ag_Status"]').eq(i).html(getDictionary("Giga_Customer_Used"));
					}
					else
					{
						$("#Maintable_1_Table").children().find('div[name="Ag_Status"]').eq(i).html(getDictionary("Giga_Customer_Not_Used"));
					}
				}
				//新增明細監聽
				for(var i = 0; i < $("#Maintable_1_Table").children().length; i++)
				{
					$("#Maintable_1_Table").children().eq(i).dblclick(function()
					{
						showDetail($(this).find("div[name='Ag_Name']").html() + '-' + getDictionary("Giga_Customer_Detail"));
					});
					$("#Maintable_1_Table").children().eq(i).attr('title',getDictionary("Giga_Customer_Double_Click_To_View_Detail"));
				};
			});
			Maintable_1.createPagging();
			//資料表名稱
			Table_Name = "Agent";
			Maintable_1.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_1.getStart();
					var Limit = Maintable_1.getPagesize();
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
			Maintable_1.setLoad_Formdata(object);
			Maintable_1.load();
			//Css 表格捲軸
			$("#Maintable_1_Table").css("height","calc(100% - 152px)");
			$("#Maintable_1").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#1_Insert").click(function()
			{
				//新增畫面
				myWindow = Window_Define.Initialize();
				myWindow.setMask(true);
				myWindow.setSmartdetect(false);
				myWindow.setWidth(480);
				myWindow.setHeight(880);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary("Insert_Giga_Customer"));
				myWindow.show();
				myWindow.addTextfield('Ag_Id',getDictionary("Window_Giga_Customer_ID"));
				myWindow.addTextfield('Ag_Name',getDictionary("Window_Giga_Customer_Name"));
				myWindow.addTextfield('Ag_Tele',getDictionary("Window_Giga_Customer_Phone"));
				myWindow.addTextfield('Ag_Fax',getDictionary("Window_Giga_Customer_Fax"));
				myWindow.addTextfield('Ag_Addr',getDictionary("Window_Giga_Customer_Address"));
				myWindow.addTextfield('Ag_Owner',getDictionary("Window_Giga_Customer_Responsible_Person"));
				myWindow.addCombobox('Ag_Buy',getDictionary("Window_Giga_Customer_Purchase_Way"));
				$("#Ag_Buy").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary("Giga_Customer_Buy")+"'>"+getDictionary("Giga_Customer_Buy")+"</option>" +
					"<option value='"+getDictionary("Giga_Customer_Rent")+"'>"+getDictionary("Giga_Customer_Rent")+"</option>"
				);
				myWindow.addTextfield('Ag_IP',getDictionary("Window_Giga_Customer_DataBase_IP"));
				myWindow.addTextfield('Ag_MSSQL_Acct',getDictionary("Window_Giga_Customer_DataBase_Account"));
				myWindow.addTextfield('Ag_MSSQL_Pswd',getDictionary("Window_Giga_Customer_DataBase_Password"));
				myWindow.addTextfield('Rb_Date',getDictionary("Window_Giga_Customer_Rent_Start"));
				myWindow.addTextfield('Re_Date',getDictionary("Window_Giga_Customer_Rent_End"));
				// myWindow.addTextfield('Buf_Date','　緩衝天數 :');
				myWindow.addCombobox('Ag_Status',getDictionary("Window_Giga_Customer_Is_Used"));
				$("#Ag_Status").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary("Giga_Customer_Used")+"'>"+getDictionary("Giga_Customer_Used")+"</option>" +
					"<option value='"+getDictionary("Giga_Customer_Not_Used")+"'>"+getDictionary("Giga_Customer_Not_Used")+"</option>"
				);
				myWindow.addTextarea('Ag_Desc',getDictionary("Window_Giga_Customer_Remarks"));
				myWindow.addTextfield('C_Date',getDictionary("Window_Giga_Customer_Create_Date"));
				myWindow.addTextfield('X_Date',getDictionary("Window_Giga_Customer_Update_Date"));
				myWindow.addTextfield('X_Name',getDictionary("Window_Giga_Customer_Update_Person"));
				myWindow.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					myWindow.close();
				},function()
				{
					if(!$("#Ag_Id").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_ID"));
					}
					else if(!$("#Ag_Name").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Name"));
					}
					else if(!$("#Ag_Tele").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Phone"));
					}
					else if(!$("#Ag_Fax").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Fax"));
					}
					else if(!$("#Ag_Addr").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Address"));
					}
					else if(!$("#Ag_Owner").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Responsible_Person"));
					}
					else if(!$("#Ag_Buy").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Purchase_Way"));
					}
					else if(!$("#Ag_IP").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_DataBase_IP"));
					}
					else if(!$("#Ag_MSSQL_Acct").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_DataBase_Account"));
					}
					else if(!$("#Ag_MSSQL_Pswd").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_DataBase_Password"));
					}
					// else if(!$("#Rb_Date").val())
					// {
					// 	normalError_Msg_Withmask(getDictionary("Please Insert") + " " + '租用起始');
					// }
					// else if(!$("#Re_Date").val())
					// {
					// 	normalError_Msg_Withmask(getDictionary("Please Insert") + " " + '租用結束');
					// }
					// else if(!$("#Buf_Date").val())
					// {
					// 	normalError_Msg_Withmask(getDictionary("Please Insert") + " " + '緩衝天數');
					// }
					else if(!$("#Ag_Status").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Is_Used"));
					}
					else if(!$("#Ag_Desc").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Remarks"));
					}
					else
					{
						var ajaxData = {};
						ajaxData.Ag_Id = $("#Ag_Id").val();
						ajaxData.Ag_Name = $("#Ag_Name").val();
						ajaxData.Ag_Tele = $("#Ag_Tele").val();
						ajaxData.Ag_Fax = $("#Ag_Fax").val();
						ajaxData.Ag_Addr = $("#Ag_Addr").val();
						ajaxData.Ag_Owner = $("#Ag_Owner").val();
						ajaxData.Ag_Buy = ($("#Ag_Buy").val() == getDictionary("Giga_Customer_Buy"))?"B":"R";
						ajaxData.C_Date = $("#C_Date").val();
						ajaxData.X_Date = $("#X_Date").val();
						ajaxData.X_Name = $("#X_Name").val();
						ajaxData.Ag_IP = $("#Ag_IP").val();
						ajaxData.Ag_MSSQL_Acct = $("#Ag_MSSQL_Acct").val();
						ajaxData.Ag_MSSQL_Pswd = $("#Ag_MSSQL_Pswd").val();
						ajaxData.Rb_Date = $("#Rb_Date").val();
						ajaxData.Re_Date = $("#Re_Date").val();
						ajaxData.Buf_Date = $("#Buf_Date").val();
						ajaxData.Ag_Status = ($("#Ag_Status").val() == getDictionary("Giga_Customer_Used"))?"N":"Y";
						ajaxData.Ag_Desc = $("#Ag_Desc").val();
						ajaxData.X_Date = "";
						ajaxData.X_Name = "";
						ajaxData.Ag_Cont = "";
						ajaxData.Ag_Ttl = "";
						ajaxData.Ag_Cell = "";
						ajaxData.Ag_Mail = "";
						ajaxData_withType(Maintable_1,"Insert",JSON.stringify(ajaxData),function()
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
				$("#Rb_Date").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				$("#Re_Date").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
				//購買方式監聽
				$('#Ag_Buy').on('change', function()
				{
					var myValue = this.value;
					if(myValue == getDictionary("Giga_Customer_Rent"))
					{
						$("#Rb_Date").attr('readonly',false);
						$("#Re_Date").attr('readonly',false);
						$("#Rb_Date").attr('placeholder','');
						$("#Re_Date").attr('placeholder','');
						//產生日期選擇
						$("#Rb_Date").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
						$("#Re_Date").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
					}
					else if(myValue == getDictionary("Giga_Customer_Buy"))
					{
						$("#Rb_Date").attr('readonly',true);
						$("#Re_Date").attr('readonly',true);
						$("#Rb_Date").attr('placeholder',getDictionary("Giga_Customer_No_Need_To_Fill_In"));
						$("#Re_Date").attr('placeholder',getDictionary("Giga_Customer_No_Need_To_Fill_In"));
						$("#Rb_Date").datetimepicker('destroy');
						$("#Re_Date").datetimepicker('destroy');
					}
				});
				//預設值
				$("#C_Date").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#X_Date").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#X_Name").val(UserName);
				//唯讀設定
				$("#C_Date").attr('readonly',true);
				$("#X_Date").attr('readonly',true);
				$("#X_Name").attr('readonly',true);
				//Window Css
				$("#myWindow .Font.translateHtml").width(175);
				$("#myWindow input").width("calc(100% - 180px)");
				$("#myWindow select").width("calc(100% - 180px)");
				$("#myWindow textarea").width("calc(100% - 180px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Debug
				$('#Ag_Buy').change();
			});
			//查詢
			$("#1_Select").click(function()
			{
				//新增畫面
				myWindow = Window_Define.Initialize();
				myWindow.setMask(true);
				myWindow.setSmartdetect(false);
				myWindow.setWidth(480);
				myWindow.setHeight(880);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary("View_Giga_Customer"));
				myWindow.show();
				myWindow.addTextfield('Ag_Id',getDictionary("Window_Giga_Customer_ID"));
				myWindow.addTextfield('Ag_Name',getDictionary("Window_Giga_Customer_Name"));
				myWindow.addTextfield('Ag_Tele',getDictionary("Window_Giga_Customer_Phone"));
				myWindow.addTextfield('Ag_Fax',getDictionary("Window_Giga_Customer_Fax"));
				myWindow.addTextfield('Ag_Addr',getDictionary("Window_Giga_Customer_Address"));
				myWindow.addTextfield('Ag_Owner',getDictionary("Window_Giga_Customer_Responsible_Person"));
				myWindow.addCombobox('Ag_Buy',getDictionary("Window_Giga_Customer_Purchase_Way"));
				$("#Ag_Buy").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary("Giga_Customer_Buy")+"'>"+getDictionary("Giga_Customer_Buy")+"</option>" +
					"<option value='"+getDictionary("Giga_Customer_Rent")+"'>"+getDictionary("Giga_Customer_Rent")+"</option>"
				);
				myWindow.addTextfield('Ag_IP',getDictionary("Window_Giga_Customer_DataBase_IP"));
				myWindow.addTextfield('Ag_MSSQL_Acct',getDictionary("Window_Giga_Customer_DataBase_Account"));
				myWindow.addTextfield('Ag_MSSQL_Pswd',getDictionary("Window_Giga_Customer_DataBase_Password"));
				myWindow.addTextfield('Rb_Date',getDictionary("Window_Giga_Customer_Rent_Start"));
				myWindow.addTextfield('Re_Date',getDictionary("Window_Giga_Customer_Rent_End"));
				// myWindow.addTextfield('Buf_Date','　緩衝天數 :');
				myWindow.addTextfield('Ag_Status',getDictionary("Window_Giga_Customer_Is_Used"));
				myWindow.addTextarea('Ag_Desc',getDictionary("Window_Giga_Customer_Remarks"));
				myWindow.addTextfield('C_Date',getDictionary("Window_Giga_Customer_Create_Date"));
				myWindow.addTextfield('X_Date',getDictionary("Window_Giga_Customer_Update_Date"));
				myWindow.addTextfield('X_Name',getDictionary("Window_Giga_Customer_Update_Person"));
				myWindow.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					myWindow.close();
				},function()
				{
					var ajaxData = {};
					ajaxData.Ag_Id = $("#Ag_Id").val();
					ajaxData.Ag_Name = $("#Ag_Name").val();
					ajaxData.Ag_Tele = $("#Ag_Tele").val();
					ajaxData.Ag_Fax = $("#Ag_Fax").val();
					ajaxData.Ag_Addr = $("#Ag_Addr").val();
					ajaxData.Ag_Owner = $("#Ag_Owner").val();
					if($("#Ag_Buy").val())
					{
						ajaxData.Ag_Buy = ($("#Ag_Buy").val() == getDictionary("Giga_Customer_Buy"))?"B":"R";
					}
					ajaxData.C_Date = $("#C_Date").val();
					ajaxData.X_Date = $("#X_Date").val();
					ajaxData.X_Name = $("#X_Name").val();
					ajaxData.Ag_IP = $("#Ag_IP").val();
					ajaxData.Ag_MSSQL_Acct = $("#Ag_MSSQL_Acct").val();
					ajaxData.Ag_MSSQL_Pswd = $("#Ag_MSSQL_Pswd").val();
					ajaxData.Rb_Date = $("#Rb_Date").val();
					ajaxData.Re_Date = $("#Re_Date").val();
					ajaxData.Buf_Date = $("#Buf_Date").val();
					ajaxData.Ag_Status = $("#Ag_Status").val();
					ajaxData.Ag_Desc = $("#Ag_Desc").val();
					ajaxData.X_Date = "";
					ajaxData.X_Name = "";
					ajaxData.Ag_Cont = "";
					ajaxData.Ag_Ttl = "";
					ajaxData.Ag_Cell = "";
					ajaxData.Ag_Mail = "";
					ajaxData_withType(Maintable_1,"Select",JSON.stringify(ajaxData),function()
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
				$("#myWindow select").width("calc(100% - 180px)");
				$("#myWindow textarea").width("calc(100% - 180px)");
				//翻譯後的CSS
				setCss_AfterTranslate();
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
				myWindow = Window_Define.Initialize();
				myWindow.setMask(true);
				myWindow.setSmartdetect(false);
				myWindow.setWidth(480);
				myWindow.setHeight(880);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary("Update_Giga_Customer"));
				myWindow.show();
				myWindow.addTextfield('Ag_Id',getDictionary("Window_Giga_Customer_ID"));
				myWindow.addTextfield('Ag_Name',getDictionary("Window_Giga_Customer_Name"));
				myWindow.addTextfield('Ag_Tele',getDictionary("Window_Giga_Customer_Phone"));
				myWindow.addTextfield('Ag_Fax',getDictionary("Window_Giga_Customer_Fax"));
				myWindow.addTextfield('Ag_Addr',getDictionary("Window_Giga_Customer_Address"));
				myWindow.addTextfield('Ag_Owner',getDictionary("Window_Giga_Customer_Responsible_Person"));
				myWindow.addCombobox('Ag_Buy',getDictionary("Window_Giga_Customer_Purchase_Way"));
				$("#Ag_Buy").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary("Giga_Customer_Buy")+"'>"+getDictionary("Giga_Customer_Buy")+"</option>" +
					"<option value='"+getDictionary("Giga_Customer_Rent")+"'>"+getDictionary("Giga_Customer_Rent")+"</option>"
				);
				myWindow.addTextfield('Ag_IP',getDictionary("Window_Giga_Customer_DataBase_IP"));
				myWindow.addTextfield('Ag_MSSQL_Acct',getDictionary("Window_Giga_Customer_DataBase_Account"));
				myWindow.addTextfield('Ag_MSSQL_Pswd',getDictionary("Window_Giga_Customer_DataBase_Password"));
				myWindow.addTextfield('Rb_Date',getDictionary("Window_Giga_Customer_Rent_Start"));
				myWindow.addTextfield('Re_Date',getDictionary("Window_Giga_Customer_Rent_End"));
				// myWindow.addTextfield('Buf_Date','　緩衝天數 :');
				myWindow.addCombobox('Ag_Status',getDictionary("Window_Giga_Customer_Is_Used"));
				$("#Ag_Status").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary("Giga_Customer_Used")+"'>"+getDictionary("Giga_Customer_Used")+"</option>" +
					"<option value='"+getDictionary("Giga_Customer_Not_Used")+"'>"+getDictionary("Giga_Customer_Not_Used")+"</option>"
				);
				myWindow.addTextarea('Ag_Desc',getDictionary("Window_Giga_Customer_Remarks"));
				myWindow.addTextfield('C_Date',getDictionary("Window_Giga_Customer_Create_Date"));
				myWindow.addTextfield('X_Date',getDictionary("Window_Giga_Customer_Update_Date"));
				myWindow.addTextfield('X_Name',getDictionary("Window_Giga_Customer_Update_Person"));
				myWindow.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
				{
					myWindow.close();
				},function()
				{
					if(!$("#Ag_Id").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_ID"));
					}
					else if(!$("#Ag_Name").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Name"));
					}
					else if(!$("#Ag_Tele").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Phone"));
					}
					else if(!$("#Ag_Fax").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Fax"));
					}
					else if(!$("#Ag_Addr").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Address"));
					}
					else if(!$("#Ag_Owner").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Responsible_Person"));
					}
					else if(!$("#Ag_Buy").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Purchase_Way"));
					}
					else if(!$("#Ag_IP").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_DataBase_IP"));
					}
					else if(!$("#Ag_MSSQL_Acct").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_DataBase_Account"));
					}
					else if(!$("#Ag_MSSQL_Pswd").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_DataBase_Password"));
					}
					// else if(!$("#Rb_Date").val())
					// {
					// 	normalError_Msg_Withmask(getDictionary("Please Insert") + " " + '租用起始');
					// }
					// else if(!$("#Re_Date").val())
					// {
					// 	normalError_Msg_Withmask(getDictionary("Please Insert") + " " + '租用結束');
					// }
					// else if(!$("#Buf_Date").val())
					// {
					// 	normalError_Msg_Withmask(getDictionary("Please Insert") + " " + '緩衝天數');
					// }
					else if(!$("#Ag_Status").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Is_Used"));
					}
					else if(!$("#Ag_Desc").val())
					{
						normalError_Msg_Withmask(getDictionary("Please Insert") + " " + getDictionary("Giga_Customer_Remarks"));
					}
					else
					{
						var ajaxData = {};
						ajaxData.Ag_Id = $("#Ag_Id").val();
						ajaxData.Ag_Name = $("#Ag_Name").val();
						ajaxData.Ag_Tele = $("#Ag_Tele").val();
						ajaxData.Ag_Fax = $("#Ag_Fax").val();
						ajaxData.Ag_Addr = $("#Ag_Addr").val();
						ajaxData.Ag_Owner = $("#Ag_Owner").val();
						ajaxData.Ag_Buy = ($("#Ag_Buy").val() == getDictionary("Giga_Customer_Buy"))?"B":"R";
						ajaxData.C_Date = $("#C_Date").val();
						ajaxData.X_Date = $("#X_Date").val();
						ajaxData.X_Name = $("#X_Name").val();
						ajaxData.Ag_IP = $("#Ag_IP").val();
						ajaxData.Ag_MSSQL_Acct = $("#Ag_MSSQL_Acct").val();
						ajaxData.Ag_MSSQL_Pswd = $("#Ag_MSSQL_Pswd").val();
						ajaxData.Rb_Date = $("#Rb_Date").val();
						ajaxData.Re_Date = $("#Re_Date").val();
						ajaxData.Buf_Date = $("#Buf_Date").val();
						ajaxData.Ag_Status = ($("#Ag_Status").val() == getDictionary("Giga_Customer_Used"))?"N":"Y";
						ajaxData.Ag_Desc = $("#Ag_Desc").val();
						ajaxData.X_Date = "";
						ajaxData.X_Name = "";
						ajaxData.Ag_Cont = "";
						ajaxData.Ag_Ttl = "";
						ajaxData.Ag_Cell = "";
						ajaxData.Ag_Mail = "";
						ajaxData.Id = $(".Mainpage_Main_Table_Active div[name='Id']").html();
						ajaxData_withType(Maintable_1,"Update",JSON.stringify(ajaxData),function()
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
				//購買方式監聽
				$('#Ag_Buy').on('change', function()
				{
					var myValue = this.value;
					if(myValue == getDictionary("Giga_Customer_Rent"))
					{
						$("#Rb_Date").attr('readonly',false);
						$("#Re_Date").attr('readonly',false);
						$("#Rb_Date").attr('placeholder','');
						$("#Re_Date").attr('placeholder','');
						//產生日期選擇
						$("#Rb_Date").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
						$("#Re_Date").datetimepicker({scrollInput:false,timepicker:false,format:'Y-m-d'});
					}
					else if(myValue == getDictionary("Giga_Customer_Buy"))
					{
						$("#Rb_Date").attr('readonly',true);
						$("#Re_Date").attr('readonly',true);
						$("#Rb_Date").attr('placeholder',getDictionary("Giga_Customer_No_Need_To_Fill_In"));
						$("#Re_Date").attr('placeholder',getDictionary("Giga_Customer_No_Need_To_Fill_In"));
						$("#Rb_Date").datetimepicker('destroy');
						$("#Re_Date").datetimepicker('destroy');
					}
				});
				//預設值
				$("#C_Date").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#X_Date").val(getDate(new Date(),'-') + " " + getTime(new Date()));
				$("#X_Name").val(UserName);
				//唯讀設定
				$("#C_Date").attr('readonly',true);
				$("#X_Date").attr('readonly',true);
				$("#X_Name").attr('readonly',true);
				$("#Rb_Date").attr('readonly',true);
				$("#Re_Date").attr('readonly',true);
				//Window Css
				$("#myWindow .Font.translateHtml").width(175);
				$("#myWindow input").width("calc(100% - 180px)");
				$("#myWindow select").width("calc(100% - 180px)");
				$("#myWindow textarea").width("calc(100% - 180px)");
				//預設值
				$("#Ag_Id").val($(".Mainpage_Main_Table_Active div[name='Ag_Id']").html());
				$("#Ag_Name").val($(".Mainpage_Main_Table_Active div[name='Ag_Name']").html());
				$("#Ag_Tele").val($(".Mainpage_Main_Table_Active div[name='Ag_Tele']").html());
				$("#Ag_Fax").val($(".Mainpage_Main_Table_Active div[name='Ag_Fax']").html());
				$("#Ag_Addr").val($(".Mainpage_Main_Table_Active div[name='Ag_Addr']").html());
				$("#Ag_Owner").val($(".Mainpage_Main_Table_Active div[name='Ag_Owner']").html());
				$("#Ag_Buy").val($(".Mainpage_Main_Table_Active div[name='Ag_Buy']").html());
				$("#C_Date").val($(".Mainpage_Main_Table_Active div[name='C_Date']").html());
				$("#X_Date").val($(".Mainpage_Main_Table_Active div[name='X_Date']").html());
				$("#X_Name").val($(".Mainpage_Main_Table_Active div[name='X_Name']").html());
				$("#Ag_IP").val($(".Mainpage_Main_Table_Active div[name='Ag_IP']").html());
				$("#Ag_MSSQL_Acct").val($(".Mainpage_Main_Table_Active div[name='Ag_MSSQL_Acct']").html());
				$("#Ag_MSSQL_Pswd").val($(".Mainpage_Main_Table_Active div[name='Ag_MSSQL_Pswd']").html());
				$("#Rb_Date").val($(".Mainpage_Main_Table_Active div[name='Rb_Date']").html());
				$("#Re_Date").val($(".Mainpage_Main_Table_Active div[name='Re_Date']").html());
				$("#Buf_Date").val($(".Mainpage_Main_Table_Active div[name='Buf_Date']").html());
				$("#Ag_Status").val($(".Mainpage_Main_Table_Active div[name='Ag_Status']").html());
				$("#Ag_Desc").val($(".Mainpage_Main_Table_Active div[name='Ag_Desc']").html());
				//時間判斷
				var myValue = $(".Mainpage_Main_Table_Active div[name='Ag_Buy']").html();
				if(myValue == getDictionary("Giga_Customer_Rent"))
				{
					$("#Rb_Date").attr('readonly',false);
					$("#Re_Date").attr('readonly',false);
					$("#Rb_Date").attr('placeholder','');
					$("#Re_Date").attr('placeholder','');
				}
				else if(myValue == getDictionary("Giga_Customer_Buy"))
				{
					$("#Rb_Date").attr('readonly',true);
					$("#Re_Date").attr('readonly',true);
					$("#Rb_Date").attr('placeholder',getDictionary("Giga_Customer_No_Need_To_Fill_In"));
					$("#Re_Date").attr('placeholder',getDictionary("Giga_Customer_No_Need_To_Fill_In"));
				}
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Debug
				$('#Ag_Buy').change();
			});
			//刪除
			$("#1_Delete").click(function()
			{
				deleteRow(Maintable_1);
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
//顯示明細
function showDetail(title)
{
	//新增畫面
	myWindow = Window_Define.Initialize();
	myWindow.setMask(true);
	myWindow.setSmartdetect(false);
	myWindow.setWidth(480);
	myWindow.setHeight(440);
	myWindow.setId('myWindow');
	myWindow.setTitle(title);
	myWindow.show();
	myWindow.addTextfield('Ag_IP',getDictionary("Window_Giga_Customer_DataBase_IP"));
	myWindow.addTextfield('Ag_MSSQL_Acct',getDictionary("Window_Giga_Customer_DataBase_Account"));
	myWindow.addTextfield('Ag_MSSQL_Pswd',getDictionary("Window_Giga_Customer_DataBase_Password"));
	myWindow.addTextfield('Rb_Date',getDictionary("Window_Giga_Customer_Rent_Start"));
	myWindow.addTextfield('Re_Date',getDictionary("Window_Giga_Customer_Rent_End"));
	// myWindow.addTextfield('Buf_Date','　緩衝天數 :');
	myWindow.addTextfield('Ag_Status',getDictionary("Window_Giga_Customer_Is_Used"));
	myWindow.addTextarea('Ag_Desc',getDictionary("Window_Giga_Customer_Remarks"));
	myWindow.addYesNO_Button(getDictionary("Cancel"),getDictionary("Comfirm"),function()
	{
		myWindow.close();
	},function()
	{
		myWindow.close();
	});
	//CSS
	$("#myWindow_Yes").css
	({
		"margin-left":"75px"
	});
	//預設值
	$("#Ag_IP").val($(".Mainpage_Main_Table_Active div[name='Ag_IP']").html());
	$("#Ag_MSSQL_Acct").val($(".Mainpage_Main_Table_Active div[name='Ag_MSSQL_Acct']").html());
	$("#Ag_MSSQL_Pswd").val($(".Mainpage_Main_Table_Active div[name='Ag_MSSQL_Pswd']").html());
	$("#Rb_Date").val($(".Mainpage_Main_Table_Active div[name='Rb_Date']").html());
	$("#Re_Date").val($(".Mainpage_Main_Table_Active div[name='Re_Date']").html());
	$("#Buf_Date").val($(".Mainpage_Main_Table_Active div[name='Buf_Date']").html());
	$("#Ag_Status").val(($(".Mainpage_Main_Table_Active div[name='Ag_Status']").html() == "N")?getDictionary("Giga_Customer_Used"):getDictionary("Giga_Customer_Not_Used"));
	$("#Ag_Desc").val($(".Mainpage_Main_Table_Active div[name='Ag_Desc']").html());
	//Window Css
	$("#myWindow_Body .Font.translateHtml").width(175);
	$("#myWindow_Body input").width("calc(100% - 180px)");
	$("#myWindow_Body select").width("calc(100% - 180px)");
	$("#myWindow_Body textarea").width("calc(100% - 180px)");
	//所有唯讀
	$("#myWindow input").attr('readonly','true');
	$("#myWindow textarea").attr('readonly','true');
	//翻譯後的CSS
	setCss_AfterTranslate();
}