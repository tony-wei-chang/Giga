/*住戶資料匯入*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_18").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_4").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">首頁&gt;系統&gt;住戶資料匯入</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="28_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#28_Function_Row").append('<div class="Window_Cancel" id="28_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">新增</div>');
			$("#28_Function_Row").append('<div class="Window_Cancel" id="28_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">查詢</div>');
			$("#28_Function_Row").append('<div class="Window_Cancel" id="28_Save" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">存檔</div>');
			$("#28_Function_Row").append('<div class="Window_Cancel" id="28_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">取消</div>');
			//群組
			$("#28_Function_Row").append('<div style="float: left;font-size: 11px;height: 24px;line-height: 24px;margin-left: 20px;">單位</div>');
			$("#28_Function_Row").append('<div style="float: left;font-size: 11px;height: 24px;line-height: 24px;margin-left: 10px;"><select style="width: 100px;"></select></div>');
			$("#28_Function_Row").append('<div class="Window_Cancel" id="28_Import" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">匯入</div>');
			$("#28_Function_Row").append('<div class="Window_Cancel" id="28_Download" style="width: 75px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">格式檔下載</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_28" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_28 = Grid_Panel_Define.Initialize();
			Maintable_28.setId("Maintable_28");
			Maintable_28.setResizer_ID('Maintable_28_Resizer');
			Maintable_28.setHeader_Title(['No.','單位','狀態','匯入時間']);
			Maintable_28.setModel(['Number','1','2','3']);
			Maintable_28.setPagesize(10);
			Maintable_28.setfieldShow([true,true,true,true]);
			Maintable_28.setHeader_Width(['4.5%','31.83%','31.83%','31.83%']);
			Maintable_28.setHeaderMoveable(true);
			Maintable_28.setMulti_Selectable(true);
			Maintable_28.createHeader();
			Maintable_28.createTable();
			//改寫欄位
			Maintable_28.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_28.getId() + '_Table').children().length; i++)
				{
					
				};
			});
			Maintable_28.createPagging();
			Maintable_28.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_28.getStart();
					var Limit = Maintable_28.getPagesize();
					return Url + "?_Y02=" + new Date().getTime() + "&start=" + Start + "&limit=" + Limit;
				}
				catch(err)
				{
					if(App_Debug)
					{
						console.log(err);
					}
				}
			};
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