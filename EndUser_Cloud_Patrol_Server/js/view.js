//Menu 計算
var Mainpage_Menu_Counter = 1;
//Server Url
var serverUrl = "http://140.133.74.49/";
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
		$("#Account").val("test01");
		$("#Password").val("test01");
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
				var url = serverUrl + "EndUser_Cloud_Patrol_Server/Login_EndUser.ashx";
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
						UserPK = result.UserPK;
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
		$('<div id="Login_Content" style="text-align: center;font-size: 18px;font-weight: bold;border-bottom-width: 1px;border-bottom-color: black;border-bottom-style: solid;display: table;margin-top: 15px;margin-left: 120px;">登入系統</div>').insertAfter('#Login_Image');
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
		$("#Language").val("english");
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
function createMainpage(UserName,Power)
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
			$('#Mainpage_Header').append('<div style="line-height: 75px;">End User Cloud Patrol Server V1.1(多國語言完成)</div>');
			//右下角
			$('#Mainpage_Header').append('<div id="Mainpage_Header_person_main" class="translateHtml" style="color: rgb(0, 0, 0);height: 19px;width: 250px;position: absolute;right: 10px;font-size: 15px;margin-top: -25px;"></div>');
			//右下角內容
			$("#Mainpage_Header_person_main").append('<div id="Mainpage_Header_person_logout" style="width: 32px;float: left;border-bottom-width: 1px;border-bottom-color: black;border-bottom-style: solid;cursor: pointer;">登出</div>');
			$("#Mainpage_Header_person_main").append('<div id="Mainpage_Header_person_changPassword" style="width: 60px;float: left;border-width: 2px;border-bottom-width: 1px;border-bottom-color: black;border-bottom-style: solid;margin-left: 15px;margin-right: 15px;cursor: pointer;">修改密碼</div>');
			$("#Mainpage_Header_person_main").append('<div id="Mainpage_Header_person_Time" style="width: 125px;float: left;">' + getDate(new Date(),'.') + " " + getTime(new Date()) + '</div>');
			$("#Mainpage_Header_person_main").append('<div id="Mainpage_Header_person_name" style="width: 120px;float: left;margin-top: -40px;text-align: right;">' + UserName + '</div>');
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
			view.Title = "巡檢單位排班資料";
			view.Id = "1";
			createMainpage_Menu(view);
			var view = {};
			view.Title = "巡檢紀錄";
			view.Id = "2";
			createMainpage_Menu(view);
			//多國語言
			startTranslate('Mainpage_Header');
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
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}
	}
};