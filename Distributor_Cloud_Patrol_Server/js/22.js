/*群組人員建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_12").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_4").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">首頁&gt;系統&gt;群組人員建檔</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="22_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#22_Function_Row").append('<div class="Window_Cancel" id="22_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">新增</div>');
			$("#22_Function_Row").append('<div class="Window_Cancel" id="22_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">查詢</div>');
			$("#22_Function_Row").append('<div class="Window_Cancel" id="22_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">修改</div>');
			$("#22_Function_Row").append('<div class="Window_Cancel" id="22_Save" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">存檔</div>');
			$("#22_Function_Row").append('<div class="Window_Cancel" id="22_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">刪除</div>');
			$("#22_Function_Row").append('<div class="Window_Cancel" id="22_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">取消</div>');
			//群組
			$("#22_Function_Row").append('<div style="float: left;font-size: 11px;height: 24px;line-height: 24px;margin-left: 20px;">群組</div>');
			$("#22_Function_Row").append('<div style="float: left;font-size: 11px;height: 24px;line-height: 24px;margin-left: 10px;"><select style="width: 100px;"></select></div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_22" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			Maintable_22 = Grid_Panel_Define.Initialize();
			Maintable_22.setId("Maintable_22");
			Maintable_22.setResizer_ID('Maintable_22_Resizer');
			Maintable_22.setHeader_Title(['No.','使用者姓名','職稱','巡檢單位']);
			Maintable_22.setModel(['Number','1','2','3']);
			Maintable_22.setPagesize(10);
			Maintable_22.setfieldShow([true,true,true,true]);
			Maintable_22.setHeader_Width(['4.5%','31.8%','31.8%','31.8%']);
			Maintable_22.setHeaderMoveable(true);
			Maintable_22.setMulti_Selectable(true);
			Maintable_22.createHeader();
			Maintable_22.createTable();
			//改寫欄位
			Maintable_22.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_22.getId() + '_Table').children().length; i++)
				{
					
				};
			});
			Maintable_22.createPagging();
			Maintable_22.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_22.getStart();
					var Limit = Maintable_22.getPagesize();
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