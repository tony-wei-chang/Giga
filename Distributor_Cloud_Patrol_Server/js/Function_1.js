/*巡檢紀錄*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Header_Function_1").click(function()
		{
			//清空 Mainpage_Main
			$('#Mainpage_Main').empty();
			//預設圖片
			$("#Mainpage_Main").append('<div style="background:url(image/login.jpg);background-size: 100% 100%;height: 250px;width: 400px;position: absolute;left: calc(50% + 115px);top: calc(50% + 37.5px);margin-left: -200px;margin-top: -125px;"></div>');
			//顯示清單
			$("div[myId='標籤資料建檔']").show();
			$("div[myId='巡檢單位資料建檔']").show();
			$("div[myId='區域資料建檔']").show();
			$("div[myId='巡檢班別建檔']").show();
			$("div[myId='巡檢點建檔']").show();
			$("div[myId='任務資料建檔']").show();
			$("div[myId='巡檢路線建檔']").show();
			$("div[myId='巡檢路線明細建檔']").show();
			$("div[myId='巡檢單位排班資料建檔']").show();
			$("div[myId='代理商CPS Reader建檔']").show();
			//隱藏清單選項
			$("div[myId='職位建檔']").hide();
			$("div[myId='群組資料建檔']").hide();
			$("div[myId='群組人員建檔']").hide();
			$("div[myId='部門資料建檔']").hide();
			$("div[myId='使用者建檔']").hide();
			$("div[myId='權限管理']").hide();
			$("div[myId='匯入資料作業']").hide();
			$("div[myId='參數設定']").hide();
			$("div[myId='住戶資料匯入']").hide();
			$("div[myId='住戶資料(帳號密碼)']").hide();
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