/*群組資料建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_11").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_4").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">首頁&gt;系統&gt;群組資料建檔</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="21_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#21_Function_Row").append('<div class="Window_Cancel" id="21_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">新增</div>');
			$("#21_Function_Row").append('<div class="Window_Cancel" id="21_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">查詢</div>');
			$("#21_Function_Row").append('<div class="Window_Cancel" id="21_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">修改</div>');
			$("#21_Function_Row").append('<div class="Window_Cancel" id="21_Save" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">存檔</div>');
			$("#21_Function_Row").append('<div class="Window_Cancel" id="21_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">刪除</div>');
			$("#21_Function_Row").append('<div class="Window_Cancel" id="21_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">取消</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_21" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_21 = Grid_Panel_Define.Initialize();
			Maintable_21.setId("Maintable_21");
			Maintable_21.setResizer_ID('Maintable_21_Resizer');
			Maintable_21.setHeader_Title(['No.','編號','群組','建檔日期','異動時間','異動者']);
			Maintable_21.setModel(['Number','1','2','3','4','5']);
			Maintable_21.setPagesize(10);
			Maintable_21.setfieldShow([true,true,true,true,true,true]);
			Maintable_21.setHeader_Width(['4.5%','19.1%','19.1%','19.1%','19.1%','19.1%']);
			Maintable_21.setHeaderMoveable(true);
			Maintable_21.setMulti_Selectable(true);
			Maintable_21.createHeader();
			Maintable_21.createTable();
			//改寫欄位
			Maintable_21.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_21.getId() + '_Table').children().length; i++)
				{
					
				};
			});
			Maintable_21.createPagging();
			Maintable_21.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_21.getStart();
					var Limit = Maintable_21.getPagesize();
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