/*匯入資料作業*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_16").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_4").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">首頁&gt;系統&gt;匯入資料作業</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="26_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#26_Function_Row").append('<div class="Window_Cancel" id="26_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">新增</div>');
			$("#26_Function_Row").append('<div class="Window_Cancel" id="26_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">查詢</div>');
			$("#26_Function_Row").append('<div class="Window_Cancel" id="26_Save" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">存檔</div>');
			$("#26_Function_Row").append('<div class="Window_Cancel" id="26_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">取消</div>');
			//群組
			$("#26_Function_Row").append('<div style="float: left;font-size: 11px;height: 24px;line-height: 24px;margin-left: 20px;">單位</div>');
			$("#26_Function_Row").append('<div style="float: left;font-size: 11px;height: 24px;line-height: 24px;margin-left: 10px;"><select style="width: 100px;"></select></div>');
			$("#26_Function_Row").append('<div class="Window_Cancel" id="26_Import" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">匯入</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_26" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_26 = Grid_Panel_Define.Initialize();
			Maintable_26.setId("Maintable_26");
			Maintable_26.setResizer_ID('Maintable_26_Resizer');
			Maintable_26.setHeader_Title(['No.','格式檔種類','格式檔下載','狀態','匯入時間']);
			Maintable_26.setModel(['Number','1','2','3','4']);
			Maintable_26.setPagesize(10);
			Maintable_26.setfieldShow([true,true,true,true,true]);
			Maintable_26.setHeader_Width(['4.5%','23.875%','23.875%','23.875%','23.875%']);
			Maintable_26.setHeaderMoveable(true);
			Maintable_26.setMulti_Selectable(true);
			Maintable_26.createHeader();
			Maintable_26.createTable();
			//改寫欄位
			Maintable_26.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_26.getId() + '_Table').children().length; i++)
				{
					
				};
			});
			Maintable_26.createPagging();
			Maintable_26.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_26.getStart();
					var Limit = Maintable_26.getPagesize();
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