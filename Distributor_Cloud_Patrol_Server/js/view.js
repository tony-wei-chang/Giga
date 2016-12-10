//Menu 計算
var Mainpage_Menu_Counter = 1;
//Server Url
var serverUrl = "http://140.133.74.49/";
// var serverUrl = "http://175.182.239.64/";
//預設畫面
$(document).ready(function()
{
	try
	{
		//開啟主頁面
		createLoginpage();
		//進度條下一步
		Y02_CurrentStage = Y02_TotalStage;
		goProcess();
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}
	}
});
//產生登入畫面
function createLoginpage()
{
	try
	{
		Login_Window = Window_Define.Initialize();
		Login_Window.setMask(true);
		Login_Window.setWidth(300);
		Login_Window.setHeight(400);
		Login_Window.setId('Login_Window');
		Login_Window.setTitle("登入");
		Login_Window.setSmartdetect(false);
		Login_Window.show();
		Login_Window.addCombobox('Language','語系：');
		//覆寫
		$('#Language_Label').width('90');
		$('#Language_Label').css("text-align","right");
		$('#Language').width('calc(100% - 110px)');
		$("#Language").append
		(
			"<option disable hidden selected></option>" +
			"<option value='traditionalChinese'>繁體中文</option>" +
			"<option value='simplifiedChinese'>简体中文</option>" +
			"<option value='english'>English</option>" 
		);
		$("#Language").change(function()
		{
			languageStatus = $(this).val();
			startTranslate('login');
		});
		//隱藏標題
		$("#Login_Window_Title").hide();
		//覆寫 addTextfield CSS
		Login_Window.addTextfield('Unit','單位：');
		$('#Unit_Label').width('90');
		$('#Unit_Label').css("text-align","right");
		$('#Unit').width('calc(100% - 110px)');
		//覆寫 addTextfield CSS
		Login_Window.addTextfield('Account','帳號：');
		$('#Account_Label').width('90');
		$('#Account_Label').css("text-align","right");
		$('#Account').width('calc(100% - 110px)');
		//覆寫 addTextfield CSS
		Login_Window.addTextfield('Password','密碼：');
		$('#Password').attr('type','password');
		$('#Password_Label').width('90');
		$('#Password_Label').css("text-align","right");
		$('#Password').width('calc(100% - 110px)');
		//覆寫 addTextfield CSS
		Login_Window.addTextfield('Code','驗證碼：');
		$("#Code_Label").css
		({
			"width":"90px",
			"text-align":"right"
		});
		$('#Code').css
		({
			"width":"calc(100% - 170px)",
		    "border-width":"0px 0px 1px",
		    "border-bottom-style":"solid",
		    "border-bottom-color":"rgb(152, 152, 152)",
		    "float":"left",
		    "text-transform":"uppercase"
		});
		$("#Code").attr('maxlength','4');
		$("#Code_Group").css("margin-bottom","55px");
		$("#Code_Group").append('<div style="background-image: url(&quot;' + serverUrl + 'captcha.aspx&quot;);float: left;height: 22px;width: 50px;margin-left: 11px;margin-top: 2px;background-size: 100% 100%;background-repeat: no-repeat;"></div>');
		//測試
		$("#Unit").val("TW0001");
		$("#Account").val("admin");
		$("#Password").val("123");
		$('#Code').ready(function()
		{
			$("#Code").focus();
		});
		$("#Code").val("AAAA");
		//帳號欄位自動聚焦
		// $('#Unit').ready(function()
		// {
		// 	$("#Unit").focus();
		// });
		//新增 Enter 事件
		$("#Unit").keyup(function(e)
		{
			if(e.keyCode == 13)
			{
				loginEnter_Function();
			}
		});
		$("#Account").keyup(function(e)
		{
			if(e.keyCode == 13)
			{
				loginEnter_Function();
			}
		});
		$("#Password").keyup(function(e)
		{
			if(e.keyCode == 13)
			{
				loginEnter_Function();
			}
		});
		$("#Code").keyup(function(e)
		{
			if(e.keyCode == 13)
			{
				loginEnter_Function();
			}
		});
		//Enter 方法
		function loginEnter_Function()
		{
			if(!$('#Unit').val())
			{
				$('#Unit').focus();
			}
			else if(!$('#Account').val())
			{
				$('#Account').focus()
			}
			else if(!$('#Password').val())
			{
				$('#Password').focus()
			}
			else if(!$('#Code').val())
			{
				$('#Code').focus()
			}
			else
			{
				var object = 
				{
					"acct":$("#Account").val(),
					"pswd":$("#Password").val(),
					"DataBase":$("#Unit").val(),
					"CheckCode":$("#Code").val().toUpperCase()
				};
				var url = serverUrl + "Distributor_Cloud_Patrol_Server/Login_Distributor.ashx";
				//loading
				var loadingMask = Loading_Mask.Initialize();
				loadingMask.setTarget('Login_Window');
				loadingMask.show();
				//ajax
				jqueryAjax_Post(url,JSON.stringify(object),function(data)
				{
					loadingMask.close();
					var result = JSON.parse(data);
					//回傳成功
					if(JSON.parse(result.Result))
					{
						Login_Window.close();
						createMainpage(result.UserName,result.Permissions);
						Authorization = result.Authorization;
						UserName = result.UserName;
					}
					//回傳失敗
					else
					{
						normalError_Msg(result.Reason);
						$('#Unit').blur();
						$('#Account').blur();
						$('#Password').blur();
						$('#Code').blur();
					}
				},function()
				{
					loadingMask.close();
				},function()
				{
					loadingMask.close();
				});
			}
		}
		//YesNo
		Login_Window.addYesNO_Button("登入","離開",
		//登入
		function(data)
		{
			// Login_Window.close();
			// createMainpage();
			loginEnter_Function();
		},
		//離開
		function()
		{
			var userAgent = navigator.userAgent;

			if(userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Presto") != -1 || userAgent.indexOf("Chrome") != -1)
			{
				document.title = "about:blank";
				setTimeout(function ()
				{
					window.location.replace("about:blank");
				}, 100);
			}
			else
			{
				window.opener = null;
				window.open("", "_self");
				window.close();
			}
		});
		//圖片
		$('<div id="Login_Image" style="width: 180px;height: 60px;border: 2px solid rgb(255, 255, 255);background: url(\'image/login.jpg\') 0% 0% / 100% 100%;margin-top: 15px;margin-left: 60px;"></div>').insertAfter('#Login_Window_Title');
		//文字
		$('<div id="Login_Content" style="text-align: center;font-size: 18px;font-weight: bold;border-bottom-width: 1px;border-bottom-color: black;border-bottom-style: solid;display: table;margin-top: 15px;margin-left: 75px;">登入系統</div>').insertAfter('#Login_Image');
		//按鈕 CSS
		$("#Login_Window_No").css
		({
			'background-color':'rgb(91, 155, 213)',
			'width':'25%',
			'margin-left':'16px'
		});
		$("#Login_Window_Yes").css
		({
			'background-color':'rgb(91, 155, 213)',
			'width':'25%',
			'margin-left':'97px'
		});
		$("#Login_Window_Yes").parent().css("padding-bottom","17px");
		//Login_Window_Body Height Override
		$('#Login_Window_Body').height('calc(100% - 320px)');
		//預設語言
		$("#Language").val('english');
		$("#Language").change();
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}
	}
}
//產生主畫面
function createMainpage(username,Permissions)
{
	try
	{
		//建立 Mainpage
		$('body').append('<div id="Mainpage"></div>');
		//清空
		$('#Mainpage').empty();
		//建立 Mainpage_Header
		new function()
		{
			//新增 Mainpage_Header
			$('#Mainpage').append('<div id="Mainpage_Header"></div>');
			//標題
			$('#Mainpage_Header').append('<div style="line-height: 75px;">Distributor Cloud Patrol Server V1.1(多國語言完成)</div>');
			//右下角
			$('#Mainpage_Header').append('<div id="Mainpage_Header_person_main" class="translateHtml" style="color: rgb(0, 0, 0);height: 19px;width: 250px;position: absolute;right: 10px;font-size: 15px;margin-top: -25px;"></div>');
			//右下角內容
			$("#Mainpage_Header_person_main").append('<div id="Mainpage_Header_person_logout" style="width: 32px;float: left;border-bottom-width: 1px;border-bottom-color: black;border-bottom-style: solid;cursor: pointer;">登出</div>');
			$("#Mainpage_Header_person_main").append('<div id="Mainpage_Header_person_changPassword" style="width: 60px;float: left;border-width: 2px;border-bottom-width: 1px;border-bottom-color: black;border-bottom-style: solid;margin-left: 15px;margin-right: 15px;cursor: pointer;">修改密碼</div>');
			$("#Mainpage_Header_person_main").append('<div id="Mainpage_Header_person_Time" style="width: 125px;float: left;">' + getDate(new Date(),'.') + " " + getTime(new Date()) + '</div>');
			$("#Mainpage_Header_person_main").append('<div id="Mainpage_Header_person_name" style="width: 120px;float: left;margin-top: -40px;text-align:right;">' + username + '</div>');
			//更新時間
			setInterval(function()
			{
				$("#Mainpage_Header_person_Time").html(getDate(new Date(),'.') + " " + getTime(new Date()));
			},1000);
			//登出
			$("#Mainpage_Header_person_logout").click(function()
			{
				location.reload();
			});
			//左下角
			$('#Mainpage_Header').append('<div id="Mainpage_Header_Function" class="translateHtml" style="color: rgb(0, 0, 0);height: 19px;width: 410px;position: absolute;left: 245px;font-size: 15px;margin-top: -25px;"></div>');
			//左下角內容
			$("#Mainpage_Header_Function").append('<div id="Mainpage_Header_Function_1" style="color:rgb(197, 90, 17);cursor: pointer;width: 62px;margin-right: 15px;float: left;">基本建檔</div>');
			$("#Mainpage_Header_Function").append('<div id="Mainpage_Header_Function_2" style="color:rgb(197, 90, 17);cursor: pointer;width: 62px;margin-right: 15px;float: left;">巡檢紀錄</div>');
			$("#Mainpage_Header_Function").append('<div id="Mainpage_Header_Function_3" style="color:rgb(197, 90, 17);cursor: pointer;width: 62px;margin-right: 15px;float: left;">即時監控</div>');
			if(Permissions == "Max")
			{
				$("#Mainpage_Header_Function").append('<div id="Mainpage_Header_Function_4" style="color:rgb(197, 90, 17);cursor: pointer;width: 32px;margin-right: 15px;float: left;text-align: left;">系統</div>');
			}
			$("#Mainpage_Header_Function").append('<div id="Mainpage_Header_Function_5" style="color:rgb(197, 90, 17);cursor: pointer;width: 62px;margin-right: 15px;float: left;text-align: left;"><a href=' + serverUrl + "Distributor_Cloud_Patrol_Server/APK/app-debug.apk" + ' download="' + serverUrl + "Distributor_Cloud_Patrol_Server/APK/app-debug.apk" + '">下載</a></div>');
			//下載
			$("#Mainpage_Header_Function_5").click(function()
			{
				window.location.href = serverUrl + "APK/app-debug.apk";
			});			
			//顏色監聽
			$("#Mainpage_Header_Function_1").click(function()
			{
				$(this).css("color","rgb(255, 0, 0)");
				$("#Mainpage_Header_Function_2").css("color","rgb(197, 90, 17)");
				$("#Mainpage_Header_Function_3").css("color","rgb(197, 90, 17)");
				$("#Mainpage_Header_Function_4").css("color","rgb(197, 90, 17)");
			});
			$("#Mainpage_Header_Function_2").click(function()
			{
				$(this).css("color","rgb(255, 0, 0)");
				$("#Mainpage_Header_Function_1").css("color","rgb(197, 90, 17)");
				$("#Mainpage_Header_Function_3").css("color","rgb(197, 90, 17)");
				$("#Mainpage_Header_Function_4").css("color","rgb(197, 90, 17)");
			});
			$("#Mainpage_Header_Function_3").click(function()
			{
				$(this).css("color","rgb(255, 0, 0)");
				$("#Mainpage_Header_Function_2").css("color","rgb(197, 90, 17)");
				$("#Mainpage_Header_Function_1").css("color","rgb(197, 90, 17)");
				$("#Mainpage_Header_Function_4").css("color","rgb(197, 90, 17)");
			});
			$("#Mainpage_Header_Function_4").click(function()
			{
				$(this).css("color","rgb(255, 0, 0)");
				$("#Mainpage_Header_Function_2").css("color","rgb(197, 90, 17)");
				$("#Mainpage_Header_Function_3").css("color","rgb(197, 90, 17)");
				$("#Mainpage_Header_Function_1").css("color","rgb(197, 90, 17)");
			});
			//預設
			$("#Mainpage_Header_Function_1").click();
			//密碼修改
			$("#Mainpage_Header_person_changPassword").click(function()
			{
				//新增畫面
				changePassword_Window = Window_Define.Initialize();
				changePassword_Window.setMask(true);
				changePassword_Window.setSmartdetect(false);
				changePassword_Window.setWidth(480);
				changePassword_Window.setHeight(210);
				changePassword_Window.setId('changePassword_Window');
				changePassword_Window.setTitle(getDictionary('Window_Update_Password'));
				changePassword_Window.show();
				changePassword_Window.addTextfield('changePassword_oldPassword',getDictionary('Window_Update_Old_Password'));
				$("#changePassword_oldPassword").attr('type','password');				
				changePassword_Window.addTextfield('changePassword_newPassword',getDictionary('Window_Update_New_Password'));
				$("#changePassword_newPassword").attr('type','password');
				changePassword_Window.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					changePassword_Window.close();
				},function()
				{
					if(!$("#changePassword_oldPassword").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+ " " +getDictionary('Update_Old_Password'));
					}
					else if(!$("#changePassword_newPassword").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+ " " +getDictionary('Update_New_Password'));
					}
					else
					{
						//Loading Mask
						var loadingMask = Loading_Mask.Initialize();
						loadingMask.setTarget('changePassword_Window');
						loadingMask.show();

						var ajaxData = {};
						ajaxData.Old_Password = $("#changePassword_oldPassword").val();
						ajaxData.New_Password = $("#changePassword_newPassword").val();
						jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_Server/Update_Password.ashx",JSON.stringify(ajaxData),function(data)
						{
							//loading
							loadingMask.close();
							//result
							var result = JSON.parse(data);
							if(result.Result == 'true')
							{
								//Msg
								normalSucceed_Msg_Withmask(getDictionary('Update_Succeed'));
								$("#YesNo_Msg").height(185);
								$("#YesNo_Msg_Yes").click(function()
								{
									$("#YesNo_Msg").remove();
								});
								$("#YesNo_Msg").on("remove", function()
								{
									location.reload();
								});
							}
							else if(result.Result == 'false')
							{
								if(result.Reason == "舊帳號錯誤")
								{
									normalError_Msg_Withmask(getDictionary('Update_Wrong_Old_Passwrod'));
								}
							}
						},function()
						{
							//Msg
							normalError_Msg_Withmask(getDictionary('Update_Error'));
							//loading
							loadingMask.close();
						},function()
						{
							//Msg
							normalError_Msg_Withmask(getDictionary('Update_Error'));
							//loading
							loadingMask.close();
						});
					}
				});
				$("#changePassword_Window_Yes").css("margin-left","80px");
				//Window Css
				$("#changePassword_Window .Font.translateHtml").width(145);
				$("#changePassword_Window input").width("calc(100% - 150px)");
				$("#changePassword_Window select").width("calc(100% - 150px)");
			});
		}
		//建立 Mainpage_Menu
		new function()
		{
			//新增 Mainpage_Menu
			$('#Mainpage').append
			(
				'<div id="Mainpage_Menu">'+
					'<div class="Mainpage_Section_Outer">'+
					'</div>'+
				'</div>'
			);
			//建立左側功能表
			var view = {};
			view.Title = "職位建檔";
			view.Id = "1";
			createMainpage_Menu(view);
			$("div[myId='職位建檔']").hide();

			view.Title = "標籤資料建檔";
			view.Id = "4";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "巡檢單位資料建檔";
			view.Id = "2";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "區域資料建檔";
			view.Id = "5";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "巡檢班別建檔";
			view.Id = "7_4";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "巡檢點建檔";
			view.Id = "7_2";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "任務資料建檔";
			view.Id = "7";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "巡檢路線建檔";
			view.Id = "6";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "巡檢路線明細建檔";
			view.Id = "7_3";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "巡檢單位排班資料建檔";
			view.Id = "3";
			createMainpage_Menu(view);
						

			//暫不啟用
			var view = {};
			view.Title = "事件資料建檔";
			view.Id = "8";
			createMainpage_Menu(view);
			$("#Mainpage_Menu_Title_8").hide();
			var view = {};
			view.Title = "代理商CPS Reader建檔";
			view.Id = "9";
			createMainpage_Menu(view);
			// var view = {};
			// view.Title = "巡檢單位CPS Reader建檔";
			// view.Id = "10";
			// createMainpage_Menu(view);
		}
		//建立 Mainpage_Menu2 預設不顯示
		new function()
		{
			//建立左側功能表
			var view = {};
			view.Title = "群組資料建檔";
			view.Id = "11";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "群組人員建檔";
			view.Id = "12";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "部門資料建檔";
			view.Id = "13";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "使用者建檔";
			view.Id = "24";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "權限管理";
			view.Id = "25";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "匯入資料作業";
			view.Id = "16";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "參數設定";
			view.Id = "Company_Data";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "住戶資料匯入";
			view.Id = "17";
			createMainpage_Menu(view);

			var view = {};
			view.Title = "住戶資料(帳號密碼)";
			view.Id = "住戶資料(帳號密碼)";
			createMainpage_Menu(view);

			$("div[myId='住戶資料(帳號密碼)']").css("margin-bottom","20px");
			//預設隱藏清單選項
			$("div[myId='群組資料建檔']").hide();
			$("div[myId='群組人員建檔']").hide();
			$("div[myId='部門資料建檔']").hide();
			$("div[myId='使用者建檔']").hide();
			$("div[myId='權限管理']").hide();
			$("div[myId='匯入資料作業']").hide();
			$("div[myId='參數設定']").hide();
			$("div[myId='住戶資料匯入']").hide();
			$("div[myId='住戶資料(帳號密碼)']").hide();
			//參數設定
			$("#Mainpage_Menu_Title_Company_Data").click(function()
			{
				//新增畫面
				Company_Data_Modify = Window_Define.Initialize();
				Company_Data_Modify.setMask(true);
				Company_Data_Modify.setSmartdetect(false);
				Company_Data_Modify.setWidth(480);
				Company_Data_Modify.setHeight(326);
				Company_Data_Modify.setId('Company_Data_Modify');
				Company_Data_Modify.setTitle(getDictionary('Update_Setting'));
				Company_Data_Modify.show();
				Company_Data_Modify.addTextfield('Company_Data_Company_Name',getDictionary('Window_Setting_Company_Name'));
				Company_Data_Modify.addTextfield('Company_Data_Company_Mail',getDictionary('Window_Setting_Email_Account'));
				Company_Data_Modify.addTextfield('Company_Data_Company_Mail_Pswd',getDictionary('Window_Setting_Email_Password'));
				$("#Company_Data_Company_Mail_Pswd").attr('type','password');
				Company_Data_Modify.addTextfield('Company_Data_Company_xdate',getDictionary('Window_Setting_Update_Date'));
				Company_Data_Modify.addTextfield('Company_Data_Company_xname',getDictionary('Window_Setting_Update_Person'));
				Company_Data_Modify.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),function()
				{
					Company_Data_Modify.close();
				},function()
				{
					if(!$("#Company_Data_Company_Name").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Setting_Company_Name'));
					}
					else if(!$("#Company_Data_Company_Mail").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Setting_Email_Account'));
					}
					else if(!$("#Company_Data_Company_Mail_Pswd").val())
					{
						normalError_Msg_Withmask(getDictionary('Please Insert')+" "+getDictionary('Setting_Email_Password'));
					}
					else
					{
						var ajaxData = {};
						ajaxData.Company_Name = $("#Company_Data_Company_Name").val();
						ajaxData.Company_Mail = $("#Company_Data_Company_Mail").val();
						ajaxData.Company_Mail_Pswd = $("#Company_Data_Company_Mail_Pswd").val();
						ajaxData.xdate = "";
						ajaxData.xname = "";
						ajaxData.Id = $("#Company_Data_Modify").attr('pk');
						//loading
						var loadingMask = Loading_Mask.Initialize();
						loadingMask.setTarget('Company_Data_Modify');
						loadingMask.show();
						//Ajax
						jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_Server/Update_Distributor.ashx?TableName=Company_Data",JSON.stringify(ajaxData),function(data)
						{
							//loading
							loadingMask.close();
							//result
							var result = JSON.parse(data);
							if(result.Result == 'true')
							{
								//Msg
								normalSucceed_Msg(getDictionary('Update Success'));
								Company_Data_Modify.close();
							}
							else if(result.Result == 'false')
							{
								//Msg
								normalError_Msg_Withmask(result.Reason);
							}
						},function()
						{
							//Msg
							normalError_Msg_Withmask(getDictionary('Update Error'));
							//loading
							loadingMask.close();
						},function()
						{
							//Msg
							normalError_Msg_Withmask(getDictionary('Update Error'));
							//loading
							loadingMask.close();
						});
					}
				});
				//唯讀設定
				$("#Company_Data_Company_xdate").attr('readonly',true);
				$("#Company_Data_Company_xname").attr('readonly',true);
				//CSS
				$("#Company_Data_Modify_Yes").css
				({
					"margin-left":"75px"
				});
				//Window Css
				$("#Company_Data_Modify .Font.translateHtml").width(165);
				$("#Company_Data_Modify input").width("calc(100% - 170px)");
				$("#Company_Data_Modify select").width("calc(100% - 170px)");
				//Loading Mask
				var loadingMask = Loading_Mask.Initialize();
				loadingMask.setTarget('Company_Data_Modify');
				loadingMask.show();
				jqueryAjax_Get(serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?TableName=Company_Data&start=0&limit=10&Order_field=Id&Order_Sequence=Asc",function(data)
				{
					//loading
					loadingMask.close();
					//result
					result = JSON.parse(data);
					if(result.Success == 'true')
					{
						//設定值
						$("#Company_Data_Company_Name").val(result.Data[0]['Company_Name']);
						$("#Company_Data_Company_Mail").val(result.Data[0]['Company_Mail']);
						$("#Company_Data_Company_Mail_Pswd").val(result.Data[0]['Company_Mail_Pswd']);
						$("#Company_Data_Company_xdate").val(getDate(new Date(),'/') + " " + getTime(new Date()));
						$("#Company_Data_Company_xname").val(UserName);
						$("#Company_Data_Modify").attr('pk',result.Data[0]['Id']);
					}
					else if(result.Success == 'false')
					{
						//Msg
						normalError_Msg(result.Reason);
					}
				},function()
				{
					//Msg
					normalError_Msg(getDictionary('View Error'));
					//loading
					loadingMask.close();
				},function()
				{
					//Msg
					normalError_Msg(getDictionary('View Error'));
					//loading
					loadingMask.close();
				});
			});
		}
		//建立 Mainpage_Main
		new function()
		{
			//新增 Mainpage_Main
			$('#Mainpage').append('<div id="Mainpage_Main"></div>');
			//預設圖片
			$("#Mainpage_Main").append('<div style="background:url(image/login.jpg);background-size: 100% 100%;height: 250px;width: 400px;position: absolute;left: calc(50% + 115px);top: calc(50% + 37.5px);margin-left: -200px;margin-top: -125px;"></div>');
		}
		//載入權限檔案
		loadJs('js/systemPower.js');
		//執行語言包
		startTranslate('Mainpage_Header');
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}
	}
};