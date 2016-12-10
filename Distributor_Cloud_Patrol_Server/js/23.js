/*部門資料建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_13").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_4").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">首頁&gt;系統&gt;部門資料建檔</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="23_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#23_Function_Row").append('<div class="Window_Cancel" id="23_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">新增</div>');
			$("#23_Function_Row").append('<div class="Window_Cancel" id="23_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">查詢</div>');
			$("#23_Function_Row").append('<div class="Window_Cancel" id="23_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">修改</div>');
			$("#23_Function_Row").append('<div class="Window_Cancel" id="23_Save" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">存檔</div>');
			$("#23_Function_Row").append('<div class="Window_Cancel" id="23_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">刪除</div>');
			$("#23_Function_Row").append('<div class="Window_Cancel" id="23_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">取消</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_23" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_23 = Grid_Panel_Define.Initialize();
			Maintable_23.setId("Maintable_23");
			Maintable_23.setResizer_ID('Maintable_23_Resizer');
			Maintable_23.setHeader_Title(['No.','編號','部門','建檔日期','異動時間','異動者']);
			Maintable_23.setModel(['Number','1','2','3','4','5']);
			Maintable_23.setPagesize(10);
			Maintable_23.setfieldShow([true,true,true,true,true,true]);
			Maintable_23.setHeader_Width(['4.5%','19.1%','19.1%','19.1%','19.1%','19.1%']);
			Maintable_23.setHeaderMoveable(true);
			Maintable_23.setMulti_Selectable(true);
			Maintable_23.createHeader();
			Maintable_23.createTable();
			//改寫欄位
			Maintable_23.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_23.getId() + '_Table').children().length; i++)
				{
					
				};
			});
			Maintable_23.createPagging();
			Maintable_23.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_23.getStart();
					var Limit = Maintable_23.getPagesize();
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