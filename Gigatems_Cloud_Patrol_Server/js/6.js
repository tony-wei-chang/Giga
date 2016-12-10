/*客戶設備啟用管理*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_6").children().eq(0).click(function()
		{
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">'+getDictionary('Giga_Create_User_Info')+'</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="6_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#6_Function_Row").append('<div class="Window_Cancel" id="6_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Insert')+'</div>');
			$("#6_Function_Row").append('<div class="Window_Cancel" id="6_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('View')+'</div>');
			$("#6_Function_Row").append('<div class="Window_Cancel" id="6_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Update')+'</div>');
			$("#6_Function_Row").append('<div class="Window_Cancel" id="6_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">'+getDictionary('Delete')+'</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_6" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			var Maintable_6 = Grid_Panel_Define.Initialize();
			Maintable_6.setId("Maintable_6");
			Maintable_6.setResizer_ID('Maintable_6_Resizer');
			Maintable_6.setHeader_Title(['No.',
										getDictionary('Giga_Create_User_User_ID'),
										getDictionary('Giga_Create_User_User_Name'),
										getDictionary('Giga_Create_User_User_Position'),
										getDictionary('Giga_Create_User_User_Account'),
										getDictionary('Giga_Create_User_User_Phone'),
										getDictionary('Giga_Create_User_User_Email'),
										getDictionary('Giga_Create_User_User_Permission'),
										getDictionary('Giga_Create_User_User_ifLeaving'),
										getDictionary('Giga_Create_User_Update_Date'),
										getDictionary('Giga_Create_User_Update_Person'),
										'系統編號']);
			Maintable_6.setModel(['Number','Hq_Id','Hq_Name','Hq_Ttl','Hq_Acct','Hq_Cell','Hq_Mail','Hq_Perm','Stop','X_Date','X_Name','Id']);
			Maintable_6.setPagesize(10);
			Maintable_6.setfieldShow([true,true,true,true,true,true,true,true,true,true,true,false]);
			Maintable_6.setHeader_Width(['4.5%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','9.95%','0%']);
			Maintable_6.setHeaderMoveable(true);
			Maintable_6.setMulti_Selectable(true);
			Maintable_6.createHeader();
			Maintable_6.createTable();
			//改寫欄位
			Maintable_6.setLoad_Callback(function()
			{
				//序號
				for (var i = 0; i < $("#Maintable_6_Table").children().find('div[name="Number"]').length; i++)
				{
					$("#Maintable_6_Table").children().find('div[name="Number"]').eq(i).html(Maintable_6.getStart() + (i + 1));
				}
				//是否使用
				for (var i = 0; i < $("#Maintable_6_Table").children().find('div[name="Stop"]').length; i++)
				{
					var stop = $("#Maintable_6_Table").children().find('div[name="Stop"]').eq(i).html();
					if(stop == "N")
					{
						$("#Maintable_6_Table").children().find('div[name="Stop"]').eq(i).html(getDictionary('Giga_Create_User_User_Working'));
					}
					else
					{
						$("#Maintable_6_Table").children().find('div[name="Stop"]').eq(i).html(getDictionary('Giga_Create_User_User_Leaving'));
					}
				}
				//員工權限
				for (var i = 0; i < $("#Maintable_6_Table").children().find('div[name="Hq_Perm"]').length; i++)
				{
					var Hq_Perm = $("#Maintable_6_Table").children().find('div[name="Hq_Perm"]').eq(i).html();
					if(Hq_Perm == "Max")
					{
						$("#Maintable_6_Table").children().find('div[name="Hq_Perm"]').eq(i).html(getDictionary('Giga_Create_User_Max'));
					}
					else
					{
						$("#Maintable_6_Table").children().find('div[name="Hq_Perm"]').eq(i).html(getDictionary('Giga_Create_User_Min'));
					}
				}
			});
			Maintable_6.createPagging();
			//資料表名稱
			Table_Name = "Hq_Member";
			Maintable_6.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_6.getStart();
					var Limit = Maintable_6.getPagesize();
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
			Maintable_6.setLoad_Formdata(object);
			Maintable_6.load();
			//Css 表格捲軸
			$("#Maintable_6_Table").css("height","calc(100% - 152px)");
			$("#Maintable_6").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#6_Insert").click(function()
			{
				//新增畫面
				myWindow = Window_Define.Initialize();
				myWindow.setMask(true);
				myWindow.setSmartdetect(false);
				myWindow.setWidth(480);
				myWindow.setHeight(525);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary('Giga_Insert_User'));
				myWindow.show();
				myWindow.addTextfield('Hq_Id',getDictionary('Window_Giga_Create_User_User_ID'));
				myWindow.addTextfield('Hq_Name',getDictionary('Window_Giga_Create_User_User_Name'));
				myWindow.addTextfield('Hq_Ttl',getDictionary('Window_Giga_Create_User_User_Position'));
				myWindow.addTextfield('Hq_Acct',getDictionary('Window_Giga_Create_User_User_Account'));
				myWindow.addTextfield('Hq_Cell',getDictionary('Window_Giga_Create_User_User_Phone'));
				myWindow.addTextfield('Hq_Mail',getDictionary('Window_Giga_Create_User_User_Email'));
				myWindow.addCombobox('Hq_Perm',getDictionary('Window_Giga_Create_User_User_Permission'));
				$("#Hq_Perm").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Giga_Create_User_Max')+"'>"+getDictionary('Giga_Create_User_Max')+"</option>" +
					"<option value='"+getDictionary('Giga_Create_User_Min')+"'>"+getDictionary('Giga_Create_User_Min')+"</option>"
				);
				myWindow.addCombobox('Stop',getDictionary('Window_Giga_Create_User_User_ifLeaving'));
				$("#Stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Giga_Create_User_User_Working')+"'>"+getDictionary('Giga_Create_User_User_Working')+"</option>" +
					"<option value='"+getDictionary('Giga_Create_User_User_Leaving')+"'>"+getDictionary('Giga_Create_User_User_Leaving')+"</option>"
				);
				myWindow.addTextfield('X_Date',getDictionary('Window_Giga_Create_User_Update_Date'));
				myWindow.addTextfield('X_Name',getDictionary('Window_Giga_Create_User_Update_Person'));
				myWindow.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					myWindow.close();
				},function()
				{
					if(!$("#Hq_Id").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_ID'));
					}
					else if(!$("#Hq_Name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_Name'));
					}
					else if(!$("#Hq_Ttl").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_Position'));
					}
					else if(!$("#Hq_Acct").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_Account'));
					}
					else if(!$("#Hq_Cell").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_Phone'));
					}
					else if(!$("#Hq_Mail").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_Email'));
					}
					else if(!$("#Hq_Perm").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_Permission'));
					}
					else if(!$("#Stop").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_ifLeaving'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.Hq_Id = $("#Hq_Id").val();
						ajaxData.Hq_Name = $("#Hq_Name").val();
						ajaxData.Hq_Ttl = $("#Hq_Ttl").val();
						ajaxData.Hq_Acct = $("#Hq_Acct").val();
						ajaxData.Hq_Cell = $("#Hq_Cell").val();
						ajaxData.Hq_Mail = $("#Hq_Mail").val();
						ajaxData.Hq_Perm = ($("#Hq_Perm").val() == getDictionary('Giga_Create_User_Max'))?"Max":"Min";
						ajaxData.Stop = ($("#Stop").val() == getDictionary('Giga_Create_User_User_Working'))?"N":"Y";
						ajaxData.X_Date = "";
						ajaxData.X_Name = "";
						ajaxData_withType(Maintable_6,"Insert",JSON.stringify(ajaxData),function()
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
				$("#X_Date").val(getDate(new Date(),'/') + " " + getTime(new Date()));
				$("#X_Name").val(UserName);
				//唯讀設定
				$("#X_Date").attr('readonly',true);
				$("#X_Name").attr('readonly',true);
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#myWindow .Font.translateHtml").width(145);
				$("#myWindow input").width("calc(100% - 150px)");
				$("#myWindow select").width("calc(100% - 150px)");
			});
			//查詢
			$("#6_Select").click(function()
			{
				//新增畫面
				myWindow = Window_Define.Initialize();
				myWindow.setMask(true);
				myWindow.setSmartdetect(false);
				myWindow.setWidth(480);
				myWindow.setHeight(525);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary('Giga_View_User'));
				myWindow.show();
				myWindow.addTextfield('Hq_Id',getDictionary('Window_Giga_Create_User_User_ID'));
				myWindow.addTextfield('Hq_Name',getDictionary('Window_Giga_Create_User_User_Name'));
				myWindow.addTextfield('Hq_Ttl',getDictionary('Window_Giga_Create_User_User_Position'));
				myWindow.addTextfield('Hq_Acct',getDictionary('Window_Giga_Create_User_User_Account'));
				myWindow.addTextfield('Hq_Cell',getDictionary('Window_Giga_Create_User_User_Phone'));
				myWindow.addTextfield('Hq_Mail',getDictionary('Window_Giga_Create_User_User_Email'));
				myWindow.addCombobox('Hq_Perm',getDictionary('Window_Giga_Create_User_User_Permission'));
				$("#Hq_Perm").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Giga_Create_User_Max')+"'>"+getDictionary('Giga_Create_User_Max')+"</option>" +
					"<option value='"+getDictionary('Giga_Create_User_Min')+"'>"+getDictionary('Giga_Create_User_Min')+"</option>"
				);
				myWindow.addCombobox('Stop',getDictionary('Window_Giga_Create_User_User_ifLeaving'));
				$("#Stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Giga_Create_User_User_Working')+"'>"+getDictionary('Giga_Create_User_User_Working')+"</option>" +
					"<option value='"+getDictionary('Giga_Create_User_User_Leaving')+"'>"+getDictionary('Giga_Create_User_User_Leaving')+"</option>"
				);
				myWindow.addTextfield('X_Date',getDictionary('Window_Giga_Create_User_Update_Date'));
				myWindow.addTextfield('X_Name',getDictionary('Window_Giga_Create_User_Update_Person'));
				myWindow.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					myWindow.close();
				},function()
				{
					var ajaxData = {};
					ajaxData.Hq_Id = $("#Hq_Id").val();
					ajaxData.Hq_Name = $("#Hq_Name").val();
					ajaxData.Hq_Ttl = $("#Hq_Ttl").val();
					ajaxData.Hq_Acct = $("#Hq_Acct").val();
					ajaxData.Hq_Cell = $("#Hq_Cell").val();
					ajaxData.Hq_Mail = $("#Hq_Mail").val();
					if($("#Hq_Perm").val())
					{
						ajaxData.Hq_Perm = ($("#Hq_Perm").val() == getDictionary('Giga_Create_User_Max'))?"Max":"Min";
					}
					if($("#Stop").val())
					{
						ajaxData.Stop = ($("#Stop").val() == getDictionary('Giga_Create_User_User_Working'))?"N":"Y";
					}
					ajaxData.X_Date = "";
					ajaxData.X_Name = "";
					ajaxData_withType(Maintable_6,"Select",JSON.stringify(ajaxData),function()
					{
						myWindow.close();
					});
				});
				//CSS
				$("#myWindow_Yes").css
				({
					"margin-left":"75px"
				});
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#myWindow .Font.translateHtml").width(145);
				$("#myWindow input").width("calc(100% - 150px)");
				$("#myWindow select").width("calc(100% - 150px)");
			});
			//修改
			$("#6_Update").click(function()
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
				myWindow.setHeight(525);
				myWindow.setId('myWindow');
				myWindow.setTitle(getDictionary('Giga_Update_User'));
				myWindow.show();
				myWindow.addTextfield('Hq_Id',getDictionary('Window_Giga_Create_User_User_ID'));
				myWindow.addTextfield('Hq_Name',getDictionary('Window_Giga_Create_User_User_Name'));
				myWindow.addTextfield('Hq_Ttl',getDictionary('Window_Giga_Create_User_User_Position'));
				myWindow.addTextfield('Hq_Acct',getDictionary('Window_Giga_Create_User_User_Account'));
				myWindow.addTextfield('Hq_Cell',getDictionary('Window_Giga_Create_User_User_Phone'));
				myWindow.addTextfield('Hq_Mail',getDictionary('Window_Giga_Create_User_User_Email'));
				myWindow.addCombobox('Hq_Perm',getDictionary('Window_Giga_Create_User_User_Permission'));
				$("#Hq_Perm").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Giga_Create_User_Max')+"'>"+getDictionary('Giga_Create_User_Max')+"</option>" +
					"<option value='"+getDictionary('Giga_Create_User_Min')+"'>"+getDictionary('Giga_Create_User_Min')+"</option>"
				);
				myWindow.addCombobox('Stop',getDictionary('Window_Giga_Create_User_User_ifLeaving'));
				$("#Stop").append
				(
					"<option disable hidden checked></option>" +
					"<option value='"+getDictionary('Giga_Create_User_User_Working')+"'>"+getDictionary('Giga_Create_User_User_Working')+"</option>" +
					"<option value='"+getDictionary('Giga_Create_User_User_Leaving')+"'>"+getDictionary('Giga_Create_User_User_Leaving')+"</option>"
				);
				myWindow.addTextfield('X_Date',getDictionary('Window_Giga_Create_User_Update_Date'));
				myWindow.addTextfield('X_Name',getDictionary('Window_Giga_Create_User_Update_Person'));
				myWindow.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					myWindow.close();
				},function()
				{
					if(!$("#Hq_Id").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_ID'));
					}
					else if(!$("#Hq_Name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_Name'));
					}
					else if(!$("#Hq_Ttl").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_Position'));
					}
					else if(!$("#Hq_Acct").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_Account'));
					}
					else if(!$("#Hq_Cell").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_Phone'));
					}
					else if(!$("#Hq_Mail").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_Email'));
					}
					else if(!$("#Hq_Perm").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_Permission'));
					}
					else if(!$("#Stop").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Giga_Create_User_User_ifLeaving'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.Hq_Id = $("#Hq_Id").val();
						ajaxData.Hq_Name = $("#Hq_Name").val();
						ajaxData.Hq_Ttl = $("#Hq_Ttl").val();
						ajaxData.Hq_Cell = $("#Hq_Cell").val();
						ajaxData.Hq_Mail = $("#Hq_Mail").val();
						ajaxData.Hq_Perm = $("#Hq_Perm").val();
						ajaxData.Hq_Perm = ($("#Hq_Perm").val() == getDictionary('Giga_Create_User_Max'))?"Max":"Min";
						ajaxData.Stop = ($("#Stop").val() == getDictionary('Giga_Create_User_User_Working'))?"N":"Y";
						ajaxData.X_Date = "";
						ajaxData.X_Name = "";
						ajaxData.Id = $(".Mainpage_Main_Table_Active div[name='Id']").html();
						ajaxData_withType(Maintable_6,"Update",JSON.stringify(ajaxData),function()
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
				$("#Hq_Id").val($(".Mainpage_Main_Table_Active div[name='Hq_Id']").html());
				$("#Hq_Name").val($(".Mainpage_Main_Table_Active div[name='Hq_Name']").html());
				$("#Hq_Ttl").val($(".Mainpage_Main_Table_Active div[name='Hq_Ttl']").html());
				$("#Hq_Acct").val(getDictionary('Can not update.'));
				$("#Hq_Cell").val($(".Mainpage_Main_Table_Active div[name='Hq_Cell']").html());
				$("#Hq_Mail").val($(".Mainpage_Main_Table_Active div[name='Hq_Mail']").html());
				$("#Hq_Perm").val($(".Mainpage_Main_Table_Active div[name='Hq_Perm']").html());
				$("#Stop").val($(".Mainpage_Main_Table_Active div[name='Stop']").html());
				$("#X_Date").val($(".Mainpage_Main_Table_Active div[name='X_Date']").html());
				$("#X_Name").val($(".Mainpage_Main_Table_Active div[name='X_Name']").html());
				//唯讀設定
				$("#X_Date").attr('readonly',true);
				$("#X_Name").attr('readonly',true);
				$("#Hq_Acct").attr('readonly',true);
				//翻譯後的CSS
				setCss_AfterTranslate();
				//Window Css
				$("#myWindow .Font.translateHtml").width(145);
				$("#myWindow input").width("calc(100% - 150px)");
				$("#myWindow select").width("calc(100% - 150px)");
			});
			//刪除
			$("#6_Delete").click(function()
			{
				deleteRow(Maintable_6);
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