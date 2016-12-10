/*系統*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Header_Function_4").click(function()
		{
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div id="Mainpage_Main_Word_Content" style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">首頁&gt;即時監控</div>');
			//顯示預設圖片
			$("#Mainpage_Main").empty()
			$("#Mainpage_Main").append('<div style="background:url(image/login.jpg);background-size: 100% 100%;height: 250px;width: 400px;position: absolute;left: calc(50% + 115px);top: calc(50% + 37.5px);margin-left: -200px;margin-top: -125px;"></div>');
			//隱藏清單選項
			$("div[myId='標籤資料建檔']").hide();
			$("div[myId='巡檢單位資料建檔']").hide();
			$("div[myId='區域資料建檔']").hide();
			$("div[myId='巡檢班別建檔']").hide();
			$("div[myId='巡檢點建檔']").hide();
			$("div[myId='任務資料建檔']").hide();
			$("div[myId='巡檢路線建檔']").hide();
			$("div[myId='巡檢路線明細建檔']").hide();
			$("div[myId='巡檢單位排班資料建檔']").hide();
			$("div[myId='代理商CPS Reader建檔']").hide();
			//顯示清單選項

			$("div[myId='職位建檔']").show();
			// $("div[myId='群組建檔']").show();
			// $("div[myId='群組人員建檔']").show();
			// $("div[myId='部門建檔']").show();
			$("div[myId='使用者建檔']").show();
			$("div[myId='權限管理']").show();
			// $("div[myId='匯入資料作業']").show();
			$("div[myId='參數設定']").show();
			// $("div[myId='住戶資料匯入']").show();
			// $("div[myId='住戶資料(帳號密碼)']").show();
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


