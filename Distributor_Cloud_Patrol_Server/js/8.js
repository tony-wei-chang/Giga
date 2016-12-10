/*事件資料建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		$("#Mainpage_Menu_Title_8").hide();
		//新增監聽
		$("#Mainpage_Menu_Title_8").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_1").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">首頁&gt;基本建檔&gt;事件資料建檔</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="8_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#8_Function_Row").append('<div class="Window_Cancel" id="8_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">新增</div>');
			$("#8_Function_Row").append('<div class="Window_Cancel" id="8_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">查詢</div>');
			$("#8_Function_Row").append('<div class="Window_Cancel" id="8_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">修改</div>');
			$("#8_Function_Row").append('<div class="Window_Cancel" id="8_Save" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">存檔</div>');
			$("#8_Function_Row").append('<div class="Window_Cancel" id="8_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">刪除</div>');
			$("#8_Function_Row").append('<div class="Window_Cancel" id="8_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">取消</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_8" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			var Maintable_8 = Grid_Panel_Define.Initialize();
			Maintable_8.setId("Maintable_8");
			Maintable_8.setResizer_ID('Maintable_8_Resizer');
			Maintable_8.setHeader_Title(['No.','編號','事件','建檔日期','異動時間','異動者']);
			Maintable_8.setModel(['Number','1','2','3','4','5']);
			Maintable_8.setPagesize(10);
			Maintable_8.setfieldShow([true,true,true,true,true,true]);
			Maintable_8.setHeader_Width(['4.5%','19.1%','19.1%','19.1%','19.1%','19.1%']);
			Maintable_8.setHeaderMoveable(true);
			Maintable_8.setMulti_Selectable(true);
			Maintable_8.createHeader();
			Maintable_8.createTable();
			//改寫欄位
			Maintable_8.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_8.getId() + '_Table').children().length; i++)
				{
					
				};
			});
			Maintable_8.createPagging();
			Maintable_8.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_8.getStart();
					var Limit = Maintable_8.getPagesize();
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
			// //改寫撈資料參數
			// var object = {};
			// var array = 
			// [
			//     {
			//       "id": "",
			//       "g_id": "",
			//       "g_name": "",
			//       "g_abbr": "",
			//       "g_desc": "",
			//       "g_tele": "",
			//       "addr": "",
			//       "g_acct": "",
			//       "g_pswd": "",
			//       "g_data": "",
			//       "stop": "",
			//       "sdate": "",
			//       "xdate": "",
			//       "xname": "",
			//       "order_field": "id",
			//       "sequence": "asc"
			//     }
			// ];
			// object.data = array;
			// Maintable_8.setLoad_Formdata(object);
			// Maintable_8.load();
			//Css 表格捲軸
			$("#Maintable_8_Table").css("height","calc(100% - 152px)");
			$("#Maintable_8").css("height","calc(100% - 40px)");
			//資料表名稱
			Table_Name = "";
			//新增按鈕監聽
			$("#8_Insert").click(function()
			{
				//新增一列空白列
				addRow(Maintable_8,'Insert');
			});
			//新增查詢按鈕監聽
			$("#8_Select").click(function()
			{
				//新增一列空白列
				addRow(Maintable_8,'Select');
			});
			//修改
			$("#8_Update").click(function()
			{
				//執行存檔
				modifyRow(Maintable_8);
			});
			//存檔
			$("#8_Save").click(function()
			{
				//執行存檔
				saveAjaxfield(Maintable_8);
			});
			//取消
			$("#8_Cancel").click(function()
			{
				cancelAjaxfield(Maintable_8);
			});
			//刪除
			$("#8_Delete").click(function()
			{
				deleteRow(Maintable_8);
			});
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