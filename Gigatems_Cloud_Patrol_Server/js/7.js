/*客戶設備啟用管理*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_7").children().eq(0).click(function()
		{
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">首頁&gt;權限管理</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="7_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#7_Function_Row").append('<div class="Window_Cancel" id="7_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">新增</div>');
			$("#7_Function_Row").append('<div class="Window_Cancel" id="7_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">查詢</div>');
			$("#7_Function_Row").append('<div class="Window_Cancel" id="7_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">修改</div>');
			$("#7_Function_Row").append('<div class="Window_Cancel" id="7_Save" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">存檔</div>');
			$("#7_Function_Row").append('<div class="Window_Cancel" id="7_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">刪除</div>');
			$("#7_Function_Row").append('<div class="Window_Cancel" id="7_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">取消</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_7" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			var Maintable_7 = Grid_Panel_Define.Initialize();
			Maintable_7.setId("Maintable_7");
			Maintable_7.setResizer_ID('Maintable_7_Resizer');
			Maintable_7.setHeader_Title(['No.','功能項目','瀏覽','全選/全不選','新增','查詢','修改','刪除','存檔','列印','備註']);
			Maintable_7.setModel(['Number','1','2','3','4','5','6','7','8','9','10']);
			Maintable_7.setPagesize(10);
			Maintable_7.setfieldShow([true,true,true,true,true,true,true,true,true,true,true]);
			Maintable_7.setHeader_Width(['4.5%','9.55%','9.55%','9.55%','9.55%','9.55%','9.55%','9.55%','9.55%','9.55%','9.55%']);
			Maintable_7.setHeaderMoveable(true);
			Maintable_7.setMulti_Selectable(true);
			Maintable_7.createHeader();
			Maintable_7.createTable();
			//改寫欄位
			Maintable_7.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_7.getId() + '_Table').children().length; i++)
				{
					
				};
			});
			Maintable_7.createPagging();
			Maintable_7.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_7.getStart();
					var Limit = Maintable_7.getPagesize();
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