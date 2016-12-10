/*客戶設備啟用管理*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_3").children().eq(0).click(function()
		{
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">首頁&gt;租賃管理</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="3_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#3_Function_Row").append('<div class="Window_Cancel" id="3_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">新增</div>');
			$("#3_Function_Row").append('<div class="Window_Cancel" id="3_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">查詢</div>');
			$("#3_Function_Row").append('<div class="Window_Cancel" id="3_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">修改</div>');
			$("#3_Function_Row").append('<div class="Window_Cancel" id="3_Save" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">存檔</div>');
			$("#3_Function_Row").append('<div class="Window_Cancel" id="3_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">刪除</div>');
			$("#3_Function_Row").append('<div class="Window_Cancel" id="3_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">取消</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_3" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			var Maintable_3 = Grid_Panel_Define.Initialize();
			Maintable_3.setId("Maintable_3");
			Maintable_3.setResizer_ID('Maintable_3_Resizer');
			Maintable_3.setHeader_Title(['No.','客戶編號','公司名稱','聯絡人姓名','聯絡人手機','公司電話','租賃開始日期','租賃停止日期','緩衝幾天','狀態','備註']);
			Maintable_3.setModel(['Number','1','2','3','4','5','6','7','8','9','10']);
			Maintable_3.setPagesize(10);
			Maintable_3.setfieldShow([true,true,true,true,true,true,true,true,true,true,true]);
			Maintable_3.setHeader_Width(['4.5%','9.55%','9.55%','9.55%','9.55%','9.55%','9.55%','9.55%','9.55%','9.55%','9.55%']);
			Maintable_3.setHeaderMoveable(true);
			Maintable_3.setMulti_Selectable(true);
			Maintable_3.createHeader();
			Maintable_3.createTable();
			//改寫欄位
			Maintable_3.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_3.getId() + '_Table').children().length; i++)
				{
					
				};
			});
			Maintable_3.createPagging();
			Maintable_3.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_3.getStart();
					var Limit = Maintable_3.getPagesize();
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