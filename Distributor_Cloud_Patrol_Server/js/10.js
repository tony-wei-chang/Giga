/*巡檢單位CPS Reader建檔*/
//Jquery 準備好
$('#Mainpage_Menu').ready(function()
{
	try
	{
		//新增監聽
		$("#Mainpage_Menu_Title_10").children().eq(0).click(function()
		{
			//基本資料建檔
			$("#Mainpage_Header_Function_1").click();
			//清空內容
			$("#Mainpage_Main").empty();
			//標題
			$("#Mainpage_Main").append('<div style="color: rgb(197, 90, 17);calc(100% - 10px);font-size: 12pt;margin-top: 15px;margin-left: 10px;">首頁&gt;基本建檔&gt;巡檢單位CPS Reader建檔</div>');
			//功能列
			$("#Mainpage_Main").append('<div id="10_Function_Row" style="margin-top: 15px;margin-left: 10px;"></div>');
			//功能按鈕
			$("#10_Function_Row").append('<div class="Window_Cancel" id="10_Insert" style="margin-left: 0px;width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">新增</div>');
			$("#10_Function_Row").append('<div class="Window_Cancel" id="10_Select" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">查詢</div>');
			$("#10_Function_Row").append('<div class="Window_Cancel" id="10_Update" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">修改</div>');
			$("#10_Function_Row").append('<div class="Window_Cancel" id="10_Save" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">存檔</div>');
			$("#10_Function_Row").append('<div class="Window_Cancel" id="10_Delete" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">刪除</div>');
			$("#10_Function_Row").append('<div class="Window_Cancel" id="10_Cancel" style="width: 50px;background-color: rgb(222, 235, 247);color: black;box-shadow: rgb(136, 136, 136) 5px 3px 5px;font-size: 11px;height: 24px;line-height: 24px;cursor: pointer;">取消</div>');
			//表格
			$("#Mainpage_Main").append('<div id="Maintable_10" style="clear: left;margin-top: 55px;"></div>');
			//建立客戶設備啟用管理表格
			var Maintable_10 = Grid_Panel_Define.Initialize();
			Maintable_10.setId("Maintable_10");
			Maintable_10.setResizer_ID('Maintable_10_Resizer');
			Maintable_10.setHeader_Title(['No.','巡檢單位','CPS Reader編號','啟用時間','異動時間','異動者','系統編號']);
			Maintable_10.setModel(['Number','g_name','CPS_Reader_Name','sdate','xdate','xname','id']);
			Maintable_10.setPagesize(10);
			Maintable_10.setfieldShow([true,true,true,true,true,true,false]);
			Maintable_10.setHeader_Width(['4.5%','19.1%','19.1%','19.1%','19.1%','19.1%','0%']);
			Maintable_10.setHeaderMoveable(true);
			Maintable_10.setMulti_Selectable(true);
			Maintable_10.createHeader();
			Maintable_10.createTable();
			//改寫欄位
			Maintable_10.setLoad_Callback(function()
			{
				for(var i = 0; i < $('#' + Maintable_10.getId() + '_Table').children().length; i++)
				{
					$('#' + Maintable_10.getId() + '_Table').children().eq(i).children().eq(0).html(Maintable_10.getStart() + (i + 1));
				};
			});
			Maintable_10.createPagging();
			//資料表名稱
			Table_Name = "Guard_Case_CPS";
			Maintable_10.getUrl = function getUrl()
			{
				try
				{
					//組合參數
					var Start = Maintable_10.getStart();
					var Limit = Maintable_10.getPagesize();
					return serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&start=" + Start + "&limit=" + Limit + "&TableName=" + Table_Name + "&Order_field=Id&Order_Sequence=Asc";
				}
				catch(err)
				{
					if(App_Debug)
					{
						console.log(err);
					}
				}
			};
			//改寫撈資料參數
			var object = "";
			Maintable_10.setLoad_Formdata(object);
			Maintable_10.load();
			//Css 表格捲軸
			$("#Maintable_10_Table").css("height","calc(100% - 152px)");
			$("#Maintable_10").css("height","calc(100% - 40px)");
			//新增按鈕監聽
			$("#10_Insert").click(function()
			{
				//新增一列空白列
				addRow(Maintable_10,'Insert',function()
				{
					//預設值
					$("#" + Maintable_10.getId() + "_Table_Inner_-1 div[name='sdate'] input").val(getDate(new Date(),'/') + " " + getTime(new Date()));
					$("#" + Maintable_10.getId() + "_Table_Inner_-1 div[name='xdate'] input").val(getDate(new Date(),'/') + " " + getTime(new Date()));
					$("#" + Maintable_10.getId() + "_Table_Inner_-1 div[name='xname'] input").val(UserName);
					//唯讀設定
					$("#" + Maintable_10.getId() + "_Table_Inner_-1 div[name='sdate'] input").attr('readonly',true);
					$("#" + Maintable_10.getId() + "_Table_Inner_-1 div[name='xdate'] input").attr('readonly',true);
					$("#" + Maintable_10.getId() + "_Table_Inner_-1 div[name='xname'] input").attr('readonly',true);
					//FK 共用設定
					fkSetting();
					//寬度統一設定
					$("#Maintable_10_Table_Inner_-1 input").css('width','calc(100% - 25px)');
				});
			});
			//新增查詢按鈕監聽
			$("#10_Select").click(function()
			{
				//新增一列空白列
				addRow(Maintable_10,'Select');
			});
			//修改
			$("#10_Update").click(function()
			{
				//執行存檔
				modifyRow(Maintable_10);
			});
			//存檔
			$("#10_Save").click(function()
			{
				//執行存檔
				saveAjaxfield(Maintable_10);
			});
			//取消
			$("#10_Cancel").click(function()
			{
				cancelAjaxfield(Maintable_10);
			});
			//刪除
			$("#10_Delete").click(function()
			{
				deleteRow(Maintable_10);
			});
			//FK 共用設定
			function fkSetting()
			{
				//FK 設定
				//配合 Window_Define 套件建立 div
				$("#Maintable_10_Table_Inner_-1_g_name").parent().append('<div id="Maintable_10_Table_Inner_-1_g_name_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Distributor.ashx?_Y02=" + new Date().getTime() + "&TableName=guard_case&Order_field=Id&Order_Sequence=Asc";
				Maintable_10_Combobox = Window_Define.Initialize();
				Maintable_10_Combobox.setId('Maintable_10_Table_Inner_-1_g_name');
				var paggingParameter = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'g_name',
				    'valueField':'Id',
				    'fk_key':'Guard_Case_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋巡檢單位區域',
				    'searchKey':'searchKey'
				};
				Maintable_10_Combobox.addComboboxPagging('Maintable_10_Table_Inner_-1_g_name','',paggingParameter);
				Maintable_10_Combobox['Maintable_10_Table_Inner_-1_g_name'].ComboboxPagging_setPagging_Parameter(paggingParameter);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_10_Combobox,Maintable_10_Combobox.getId());
				//回存主物件
				Maintable_10['Maintable_10_Table_Inner_-1_g_name'] = Maintable_10_Combobox;
				//FK 設定

				//FK 設定
				//配合 Window_Define 套件建立 div
				$("#Maintable_10_Table_Inner_-1_CPS_Reader_Name").parent().append('<div id="Maintable_10_Table_Inner_-1_CPS_Reader_Name_Group"></div>');
				//巡檢單位 fk 下拉式選單
				var tempUrl = serverUrl + "Distributor_Cloud_Patrol_server/Select_Tag.ashx?_Y02=" + new Date().getTime() + "&TableName=CPS_Data&Order_field=Id&Order_Sequence=Asc";
				Maintable_10_Combobox = Window_Define.Initialize();
				Maintable_10_Combobox.setId('Maintable_10_Table_Inner_-1_CPS_Reader_Name');
				var paggingParameter = 
				{
					//分頁設定
					'Url':tempUrl,
				    'rootProperty':'Data',
				    'displayField':'CPS_Reader_Name',
				    'valueField':'Id',
				    'fk_key':'CPS_Data_id',
				    'pageSize':'5',
				    'searchUrl':tempUrl,
				    'searchPlaceholder':'搜尋巡檢單位區域',
				    'searchKey':'searchKey'
				};
				Maintable_10_Combobox.addComboboxPagging('Maintable_10_Table_Inner_-1_CPS_Reader_Name','',paggingParameter);
				Maintable_10_Combobox['Maintable_10_Table_Inner_-1_CPS_Reader_Name'].ComboboxPagging_setPagging_Parameter(paggingParameter);
				//Giga 下拉式選單更新美工
				gigaCombobox_UpdateCSS(Maintable_10_Combobox,Maintable_10_Combobox.getId());
				//回存主物件
				Maintable_10['Maintable_10_Table_Inner_-1_CPS_Reader_Name'] = Maintable_10_Combobox;
				//FK 設定
			}
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