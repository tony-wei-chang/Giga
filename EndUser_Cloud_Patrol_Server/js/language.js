//創建字典
createDictionary();
function createDictionary()
{
	//字典全域變數
	Dictionary = {};
	//登入畫面
	new function()
	{
		//登入系統
		setDictionary("Login System",
		{
		    "english":"Login System",
		    "simplifiedChinese":"登入系統",
		    "traditionalChinese":"登入系統",
		    "func":"login"
		});
		//語系
		setDictionary("Language",
		{
		    "english":"Language：",
		    "simplifiedChinese":"语系：",
		    "traditionalChinese":"語系：",
		    "func":"login"
		});
		//單位
		setDictionary("Unit",
		{
		    "english":"Unit：",
		    "simplifiedChinese":"单位：",
		    "traditionalChinese":"單位：",
		    "func":"login"
		});
		//帳號
		setDictionary("Account",
		{
		    "english":"Account：",
		    "simplifiedChinese":"帐号：",
		    "traditionalChinese":"帳號：",
		    "func":"login"
		});
		//密碼
		setDictionary("Password",
		{
		    "english":"Password：",
		    "simplifiedChinese":"密码：",
		    "traditionalChinese":"密碼：",
		    "func":"login"
		});
		//驗證碼
		setDictionary("Code",
		{
		    "english":"Code：",
		    "simplifiedChinese":"验证码：",
		    "traditionalChinese":"驗證碼：",
		    "func":"login"
		});
		//離開
		setDictionary("Exit",
		{
		    "english":"Exit",
		    "simplifiedChinese":"离开",
		    "traditionalChinese":"離開",
		    "func":"login"
		});
		//登入
		setDictionary("Login",
		{
		    "english":"Login",
		    "simplifiedChinese":"登入",
		    "traditionalChinese":"登入",
		    "func":"login"
		});
	}
	//登入後上方文字
	new function()
	{
		//修改密碼
		setDictionary("Update_Password",
		{
		    "english":"Update Password",
		    "simplifiedChinese":"修改密码",
		    "traditionalChinese":"修改密碼",
		    "func":"Mainpage_Header"
		});
		//登出
		setDictionary("Logout",
		{
		    "english":"Logout",
		    "simplifiedChinese":"登出",
		    "traditionalChinese":"登出",
		    "func":"Mainpage_Header"
		});
		//基本建檔
		setDictionary("Basic",
		{
		    "english":"Basic",
		    "simplifiedChinese":"基本建档",
		    "traditionalChinese":"基本建檔",
		    "func":"Mainpage_Header"
		});
		//巡檢紀錄
		setDictionary("Patrol Record",
		{
		    "english":"Patrol Record",
		    "simplifiedChinese":"巡检纪录",
		    "traditionalChinese":"巡檢紀錄",
		    "func":"Mainpage_Header"
		});
		//即時監控
		setDictionary("Monitor",
		{
		    "english":"Monitor",
		    "simplifiedChinese":"即时监控",
		    "traditionalChinese":"即時監控",
		    "func":"Mainpage_Header"
		});
		//系統
		setDictionary("System",
		{
		    "english":"System",
		    "simplifiedChinese":"系統",
		    "traditionalChinese":"系統",
		    "func":"Mainpage_Header"
		});
		//下載
		setDictionary("Download",
		{
		    "english":"Download",
		    "simplifiedChinese":"下載",
		    "traditionalChinese":"下載",
		    "func":"Mainpage_Header"
		});
	}
	//登入後左側清單
	new function()
	{
		//標籤資料建檔
		setDictionary("Create_CPS_Card",
		{
		    "english":"Create CPS Card",
		    "simplifiedChinese":"标签资料建档",
		    "traditionalChinese":"標籤資料建檔",
		    "func":"Mainpage_Header"
		});
		//巡檢單位資料建檔
		setDictionary("Create Condominium",
		{
		    "english":"Create Condominium",
		    "simplifiedChinese":"巡检单位资料建档",
		    "traditionalChinese":"巡檢單位資料建檔",
		    "func":"Mainpage_Header"
		});
		//區域資料建檔
		setDictionary("Create Site",
		{
		    "english":"Create Site",
		    "simplifiedChinese":"区域资料建档",
		    "traditionalChinese":"區域資料建檔",
		    "func":"Mainpage_Header"
		});
		//巡檢班別建檔
		setDictionary("Create Shift Name",
		{
		    "english":"Create Shift Name",
		    "simplifiedChinese":"巡检班别建档",
		    "traditionalChinese":"巡檢班別建檔",
		    "func":"Mainpage_Header"
		});
		//巡檢點建檔
		setDictionary("Create Patrol Point",
		{
		    "english":"Create Patrol Point",
		    "simplifiedChinese":"巡检点建档",
		    "traditionalChinese":"巡檢點建檔",
		    "func":"Mainpage_Header"
		});
		//任務資料建檔
		setDictionary("Create Patrol Mission",
		{
		    "english":"Create Patrol Mission",
		    "simplifiedChinese":"任务资料建档",
		    "traditionalChinese":"任務資料建檔",
		    "func":"Mainpage_Header"
		});
		//巡檢路線建檔
		setDictionary("Create Patrol Route",
		{
		    "english":"Create Patrol Route",
		    "simplifiedChinese":"巡检路线建档",
		    "traditionalChinese":"巡檢路線建檔",
		    "func":"Mainpage_Header"
		});
		//巡檢路線明細建檔
		setDictionary("Create Route Detail",
		{
		    "english":"Create Route Detail",
		    "simplifiedChinese":"巡检路线明细建档",
		    "traditionalChinese":"巡檢路線明細建檔",
		    "func":"Mainpage_Header"
		});
		//巡檢單位排班資料
		setDictionary("Shift Arrangement",
		{
		    "english":"Shift Arrangement",
		    "simplifiedChinese":"巡检单位排班资料",
		    "traditionalChinese":"巡檢單位排班資料",
		    "func":"Mainpage_Header"
		});
		//代理商CPS Reader建檔
		setDictionary("Distributor CPS Reader",
		{
		    "english":"Distributor CPS Reader",
		    "simplifiedChinese":"代理商CPS Reader建档",
		    "traditionalChinese":"代理商CPS Reader建檔",
		    "func":"Mainpage_Header"
		});
		//權限管理
		setDictionary("Create Position",
		{
		    "english":"Create Position",
		    "simplifiedChinese":"职位建档",
		    "traditionalChinese":"職位建檔",
		    "func":"Mainpage_Header"
		});
		//使用者建檔
		setDictionary("Create User",
		{
		    "english":"Create User",
		    "simplifiedChinese":"使用者建档",
		    "traditionalChinese":"使用者建檔",
		    "func":"Mainpage_Header"
		});
		//權限管理
		setDictionary("Permission",
		{
		    "english":"Permission",
		    "simplifiedChinese":"权限管理",
		    "traditionalChinese":"權限管理",
		    "func":"Mainpage_Header"
		});
		//參數設定
		setDictionary("Setting",
		{
		    "english":"Setting",
		    "simplifiedChinese":"参数设定",
		    "traditionalChinese":"參數設定",
		    "func":"Mainpage_Header"
		});
	}
	//共用
	new function()
	{
		//新增
		setDictionary("Insert",
		{
		    "english":"Insert",
		    "simplifiedChinese":"新增",
		    "traditionalChinese":"新增",
		    "func":"all"
		});
		//修改
		setDictionary("Update",
		{
		    "english":"Update",
		    "simplifiedChinese":"修改",
		    "traditionalChinese":"修改",
		    "func":"all"
		});
		//刪除
		setDictionary("Delete",
		{
		    "english":"Delete",
		    "simplifiedChinese":"删除",
		    "traditionalChinese":"刪除",
		    "func":"all"
		});
		//查詢
		setDictionary("View",
		{
		    "english":"View",
		    "simplifiedChinese":"查询",
		    "traditionalChinese":"查詢",
		    "func":"all"
		});
		//全部
		setDictionary("Reset",
		{
		    "english":"All",
		    "simplifiedChinese":"全部",
		    "traditionalChinese":"全部",
		    "func":"all"
		});
		//無標籤資料可選擇
		setDictionary("No CPS data can be selected.",
		{
		    "english":"No CPS data can be selected.",
		    "simplifiedChinese":"无标签资料可选择",
		    "traditionalChinese":"無標籤資料可選擇"
		});
		//無區域可選擇
		setDictionary("have no site can be selected.",
		{
		    "english":" have no site can be selected.",
		    "simplifiedChinese":"无区域可选择",
		    "traditionalChinese":"無區域可選擇"
		});
		//無巡檢點可選擇
		setDictionary("have no patrol point can be selected.",
		{
		    "english":" have no patrol point can be selected.",
		    "simplifiedChinese":"无巡检点可选择",
		    "traditionalChinese":"無巡檢點可選擇"
		});
		//無班別可選擇
		setDictionary("have no shift can be selected.",
		{
		    "english":" have no shift can be selected.",
		    "simplifiedChinese":"无班别可选择",
		    "traditionalChinese":"無班別可選擇"
		});
		//無路線可選擇
		setDictionary("have no patrol route can be selected.",
		{
		    "english":" have no patrol route can be selected.",
		    "simplifiedChinese":"无路线可选择",
		    "traditionalChinese":"無路線可選擇"
		});
		//無任務資料可選擇
		setDictionary("have no patrol mission can be selected.",
		{
		    "english":" have no patrol mission can be selected.",
		    "simplifiedChinese":"无巡逻任务可选择",
		    "traditionalChinese":"無巡邏任務可選擇"
		});
		//不可查詢
		setDictionary("Can not view.",
		{
		    "english":"Can not view.",
		    "simplifiedChinese":"不可查询",
		    "traditionalChinese":"不可查詢"
		});
		//不可修改
		setDictionary("Can not update.",
		{
		    "english":"Can not update.",
		    "simplifiedChinese":"不可修改",
		    "traditionalChinese":"不可修改"
		});
	}
	//視窗化 的下拉式選單狀態
	new function()
	{
		//尚未載入
		setDictionary("Window_Pagging_NotLoad",
		{
		    "english":"Not loaded",
		    "simplifiedChinese":"尚未载入",
		    "traditionalChinese":"尚未載入",
		    "func":"Window_Pagging_Status"
		});
		//資料載入中
		setDictionary("Window_Data_Loading",
		{
		    "english":"Data Loading",
		    "simplifiedChinese":"资料载入中",
		    "traditionalChinese":"資料載入中",
		    "func":"Window_Pagging_Status"
		});
	}
	//訊息
	new function()
	{
		//錯誤
		setDictionary("Error",
		{
		    "english":"Error",
		    "simplifiedChinese":"错误",
		    "traditionalChinese":"錯誤",
		    "func":"msg"
		});
		//成功
		setDictionary("Success",
		{
		    "english":"Success",
		    "simplifiedChinese":"成功",
		    "traditionalChinese":"成功",
		    "func":"msg"
		});
		//取消
		setDictionary("Cancel",
		{
		    "english":"Cancel",
		    "simplifiedChinese":"取消",
		    "traditionalChinese":"取消",
		    "func":"msg"
		});
		//確認
		setDictionary("Comfirm",
		{
		    "english":"Comfirm",
		    "simplifiedChinese":"确认",
		    "traditionalChinese":"確認",
		    "func":"msg"
		});
		//新增成功
		setDictionary("Insert Success",
		{
		    "english":"Insert Success",
		    "simplifiedChinese":"新增成功",
		    "traditionalChinese":"新增成功",
		    "func":"msg"
		});
		//新增失敗
		setDictionary("Insert Error",
		{
		    "english":"Insert Error",
		    "simplifiedChinese":"新增失败",
		    "traditionalChinese":"新增失敗",
		    "func":"msg"
		});
		//查詢成功
		setDictionary("View Success",
		{
		    "english":"View Success",
		    "simplifiedChinese":"查询成功",
		    "traditionalChinese":"查詢成功",
		    "func":"msg"
		});
		//查詢失敗
		setDictionary("View Error",
		{
		    "english":"View Error",
		    "simplifiedChinese":"查询失败",
		    "traditionalChinese":"查詢失敗",
		    "func":"msg"
		});
		//修改成功
		setDictionary("Update Success",
		{
		    "english":"Update Success",
		    "simplifiedChinese":"修改成功",
		    "traditionalChinese":"修改成功",
		    "func":"msg"
		});
		//修改失敗
		setDictionary("Update Error",
		{
		    "english":"Update Error",
		    "simplifiedChinese":"修改失败",
		    "traditionalChinese":"修改失敗",
		    "func":"msg"
		});
		//刪除成功
		setDictionary("Delete Success",
		{
		    "english":"Delete Success",
		    "simplifiedChinese":"删除成功",
		    "traditionalChinese":"刪除成功",
		    "func":"msg"
		});
		//刪除失敗
		setDictionary("Delete Error",
		{
		    "english":"Delete Error",
		    "simplifiedChinese":"删除失败",
		    "traditionalChinese":"刪除失敗",
		    "func":"msg"
		});
		//警告
		setDictionary("Warning",
		{
		    "english":"Warning",
		    "simplifiedChinese":"警告",
		    "traditionalChinese":"警告",
		    "func":"msg"
		});
		//確認刪除
		setDictionary("Comfirm to Delete",
		{
		    "english":"Comfirm to Delete",
		    "simplifiedChinese":"确认删除",
		    "traditionalChinese":"確認刪除",
		    "func":"msg"
		});
		//筆資料？
		setDictionary("row",
		{
		    "english":"row?",
		    "simplifiedChinese":"笔资料？",
		    "traditionalChinese":"筆資料？",
		    "func":"msg"
		});
		//請選擇修改項目
		setDictionary("Please choose item to update.",
		{
		    "english":"Please choose item to update.",
		    "simplifiedChinese":"请选择修改项目",
		    "traditionalChinese":"請選擇修改項目",
		    "func":"msg"
		});
		//請選擇刪除項目
		setDictionary("Please choose item to delete.",
		{
		    "english":"Please choose item to delete.",
		    "simplifiedChinese":"请选择删除项目",
		    "traditionalChinese":"請選擇刪除項目",
		    "func":"msg"
		});		
		//請輸入
		setDictionary("Please Insert",
		{
		    "english":"Please Insert",
		    "simplifiedChinese":"请输入",
		    "traditionalChinese":"請輸入",
		    "func":"msg"
		});
	}
	//標籤資料建檔
	new function()
	{
		//標籤資料建檔較長的文字
		setDictionary("CPS_Card_Info",
		{
		    "english":"Home>Basic>Create CPS Card",
		    "simplifiedChinese":"首页>基本建档>标签资料建档",
		    "traditionalChinese":"首頁>基本建檔>標籤資料建檔",
		    "func":"CPS_Data"
		});
		//標籤編號
		setDictionary("CPS_Data Tag_ID",
		{
		    "english":"Tag ID",
		    "simplifiedChinese":"标签编号",
		    "traditionalChinese":"標籤編號",
		    "func":"CPS_Data"
		});
		//是否啟用
		setDictionary("CPS_Data Is_Used",
		{
		    "english":"Is Used",
		    "simplifiedChinese":"是否启用",
		    "traditionalChinese":"是否啟用",
		    "func":"CPS_Data"
		});
		//啟用
		setDictionary("CPS_Data Used",
		{
		    "english":"Used",
		    "simplifiedChinese":"启用",
		    "traditionalChinese":"啟用",
		    "func":"CPS_Data"
		});
		//未啟用
		setDictionary("CPS_Data Not_Used",
		{
		    "english":"Not Used",
		    "simplifiedChinese":"未启用",
		    "traditionalChinese":"未啟用",
		    "func":"CPS_Data"
		});
		//建檔時間
		setDictionary("CPS_Data Create_Date",
		{
		    "english":"Create Date",
		    "simplifiedChinese":"建档时间",
		    "traditionalChinese":"建檔時間",
		    "func":"CPS_Data"
		});
		//異動時間
		setDictionary("CPS_Data Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間",
		    "func":"CPS_Data"
		});
		//異動者
		setDictionary("CPS_Data Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者",
		    "func":"CPS_Data"
		});
		//新增標籤資料建檔
		setDictionary("CPS_Data Insert CPS Card",
		{
		    "english":"Insert CPS Card",
		    "simplifiedChinese":"新增标签资料建档",
		    "traditionalChinese":"新增標籤資料建檔",
		    "func":"CPS_Data_Window"
		});
		//查詢標籤資料建檔
		setDictionary("CPS_Data View CPS Card",
		{
		    "english":"View CPS Card",
		    "simplifiedChinese":"查询标签资料建档",
		    "traditionalChinese":"查詢標籤資料建檔",
		    "func":"CPS_Data_Window"
		});
		//修改標籤資料建檔
		setDictionary("CPS_Data Update CPS Card",
		{
		    "english":"Update CPS Card",
		    "simplifiedChinese":"修改标签资料建档",
		    "traditionalChinese":"修改標籤資料建檔",
		    "func":"CPS_Data_Window"
		});
		//標籤編號 :
		setDictionary("CPS_Data Window Tag_ID",
		{
		    "english":"Tag_ID :",
		    "simplifiedChinese":"标签编号 :",
		    "traditionalChinese":"標籤編號 :",
		    "func":"CPS_Data_Window"
		});
		//是否啟用 :
		setDictionary("CPS_Data Window Is Uesd",
		{
		    "english":"Is Uesd :",
		    "simplifiedChinese":"是否启用 :",
		    "traditionalChinese":"是否啟用 :",
		    "func":"CPS_Data_Window"
		});
		//建檔時間 :
		setDictionary("CPS_Data Window Create_Date",
		{
		    "english":"Create :",
		    "simplifiedChinese":"建档时间 :",
		    "traditionalChinese":"建檔時間 :",
		    "func":"CPS_Data_Window"
		});
		//異動時間 :
		setDictionary("CPS_Data Window Update_Date",
		{
		    "english":"Update :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :",
		    "func":"CPS_Data_Window"
		});
		//異動者 :
		setDictionary("CPS_Data Window Person",
		{
		    "english":"Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :",
		    "func":"CPS_Data_Window"
		});
	}
	//巡檢單位建檔
	new function()
	{
		//巡檢單位資料建檔較長的文字
		setDictionary("Condominium_Info",
		{
		    "english":"Home>Basic>Create Condominium",
		    "simplifiedChinese":"首页>基本建档>巡检单位资料建档",
		    "traditionalChinese":"首頁>基本建檔>巡檢單位資料建檔",
		    "func":"Condominium"
		});
		//合約有效
		setDictionary("Condominium Contract Valid",
		{
		    "english":"Contract Valid",
		    "simplifiedChinese":"合约有效",
		    "traditionalChinese":"合約有效",
		    "func":"Condominium"
		});
		//合約終止
		setDictionary("Condominium Contract Invalid",
		{
		    "english":"Contract Invalid",
		    "simplifiedChinese":"合约终止",
		    "traditionalChinese":"合約終止",
		    "func":"Condominium"
		});
		//編號
		setDictionary("Condominium ID",
		{
		    "english":"ID",
		    "simplifiedChinese":"编号",
		    "traditionalChinese":"編號",
		    "func":"Condominium"
		});
		//巡檢單位
		setDictionary("Condominium Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"巡检单位",
		    "traditionalChinese":"巡檢單位",
		    "func":"Condominium"
		});
		//電話
		setDictionary("Condominium Phone",
		{
		    "english":"Phone",
		    "simplifiedChinese":"电话",
		    "traditionalChinese":"電話",
		    "func":"Condominium"
		});
		//地址
		setDictionary("Condominium Address",
		{
		    "english":"Address",
		    "simplifiedChinese":"地址",
		    "traditionalChinese":"地址",
		    "func":"Condominium"
		});
		//管委會信箱
		setDictionary("Condominium End User Email",
		{
		    "english":"End User Email",
		    "simplifiedChinese":"管委会信箱",
		    "traditionalChinese":"管委會信箱",
		    "func":"Condominium"
		});
		//管委會帳號
		setDictionary("Condominium End User Account",
		{
		    "english":"End User Account",
		    "simplifiedChinese":"管委会帐号",
		    "traditionalChinese":"管委會帳號",
		    "func":"Condominium"
		});
		//管委會密碼
		setDictionary("Condominium End User Password",
		{
		    "english":"End User Password",
		    "simplifiedChinese":"管委会密码",
		    "traditionalChinese":"管委會密碼",
		    "func":"Condominium"
		});
		//終止日期
		setDictionary("Condominium Contract Invalid Date",
		{
		    "english":"Contract Invalid Date",
		    "simplifiedChinese":"终止日期",
		    "traditionalChinese":"終止日期",
		    "func":"Condominium"
		});
		//異動時間
		setDictionary("Condominium Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間",
		    "func":"Condominium"
		});
		//異動者
		setDictionary("Condominium Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者",
		    "func":"Condominium"
		});
		//新增巡檢單位資料建檔
		setDictionary("Condominium Insert Condominium",
		{
		    "english":"Insert Condominium",
		    "simplifiedChinese":"新增巡检单位资料建档",
		    "traditionalChinese":"新增巡檢單位資料建檔",
		    "func":"Condominium_Window"
		});
		//查詢巡檢單位資料建檔
		setDictionary("Condominium View Condominium",
		{
		    "english":"View Condominium",
		    "simplifiedChinese":"查询巡检单位资料建档",
		    "traditionalChinese":"查詢巡檢單位資料建檔",
		    "func":"Condominium_Window"
		});
		//修改巡檢單位資料建檔
		setDictionary("Condominium Update Condominium",
		{
		    "english":"Update Condominium",
		    "simplifiedChinese":"修改巡检单位资料建档",
		    "traditionalChinese":"修改巡檢單位資料建檔",
		    "func":"Condominium_Window"
		});
		//編號
		setDictionary("Condominium ID :",
		{
		    "english":"ID :",
		    "simplifiedChinese":"编号 :",
		    "traditionalChinese":"編號 :",
		    "func":"Condominium_Window"
		});
		//巡檢單位
		setDictionary("Condominium Condominium :",
		{
		    "english":"Condominium :",
		    "simplifiedChinese":"巡检单位 :",
		    "traditionalChinese":"巡檢單位 :",
		    "func":"Condominium_Window"
		});
		//電話
		setDictionary("Condominium Phone :",
		{
		    "english":"Phone :",
		    "simplifiedChinese":"电话 :",
		    "traditionalChinese":"電話 :",
		    "func":"Condominium_Window"
		});
		//地址
		setDictionary("Condominium Address :",
		{
		    "english":"Address :",
		    "simplifiedChinese":" :",
		    "traditionalChinese":"地址 :",
		    "func":"Condominium_Window"
		});
		//管委會信箱
		setDictionary("Condominium End User Email :",
		{
		    "english":"End User Email :",
		    "simplifiedChinese":"管委会信箱 :",
		    "traditionalChinese":"管委會信箱 :",
		    "func":"Condominium_Window"
		});
		//管委會帳號
		setDictionary("Condominium End User Acc :",
		{
		    "english":"End User Acc :",
		    "simplifiedChinese":"管委会帐号 :",
		    "traditionalChinese":"管委會帳號 :",
		    "func":"Condominium_Window"
		});
		//管委會密碼
		setDictionary("Condominium End User Pass :",
		{
		    "english":"End User Pass :",
		    "simplifiedChinese":"管委会密码 :",
		    "traditionalChinese":"管委會密碼 :",
		    "func":"Condominium_Window"
		});
		//終止日期
		setDictionary("Condominium Invalid Date :",
		{
		    "english":"Invalid Date :",
		    "simplifiedChinese":"终止日期 :",
		    "traditionalChinese":"終止日期 :",
		    "func":"Condominium_Window"
		});
		//異動時間 :
		setDictionary("Condominium Window Update_Date",
		{
		    "english":"Update :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :",
		    "func":"Condominium_Window"
		});
		//異動者 :
		setDictionary("Condominium Window Person",
		{
		    "english":"Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :",
		    "func":"Condominium_Window"
		});
	}
	//區域建檔
	new function()
	{
		//區域資料建檔較長的文字
		setDictionary("Site_Info",
		{
		    "english":"Home>Basic>Create Site",
		    "simplifiedChinese":"首页>基本建档>区域资料建档",
		    "traditionalChinese":"首頁>基本建檔>區域資料建檔",
		    "func":"Site"
		});
		//編號
		setDictionary("Site ID",
		{
		    "english":"ID",
		    "simplifiedChinese":"编号",
		    "traditionalChinese":"編號",
		    "func":"Site"
		});
		//巡檢單位
		setDictionary("Site Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"巡检单位",
		    "traditionalChinese":"巡檢單位",
		    "func":"Site"
		});
		//區域名稱
		setDictionary("Site Site",
		{
		    "english":"Site",
		    "simplifiedChinese":"区域名称",
		    "traditionalChinese":"區域名稱",
		    "func":"Site"
		});
		//詳細說明
		setDictionary("Site Description",
		{
		    "english":"Description",
		    "simplifiedChinese":"详细说明",
		    "traditionalChinese":"詳細說明",
		    "func":"Site"
		});
		//建檔日期
		setDictionary("Site Create Date",
		{
		    "english":"Create Date",
		    "simplifiedChinese":"建档时间",
		    "traditionalChinese":"建檔日期",
		    "func":"Site"
		});
		//異動時間
		setDictionary("Site Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間",
		    "func":"Site"
		});
		//異動者
		setDictionary("Site Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者",
		    "func":"Site"
		});
		//編號
		setDictionary("Window Site ID",
		{
		    "english":"ID :",
		    "simplifiedChinese":"编号 :",
		    "traditionalChinese":"編號 :",
		    "func":"Window Site"
		});
		//巡檢單位
		setDictionary("Window Site Condominium",
		{
		    "english":"Condominium :",
		    "simplifiedChinese":"巡检单位 :",
		    "traditionalChinese":"巡檢單位 :",
		    "func":"Window Site"
		});
		//區域名稱
		setDictionary("Window Site Site",
		{
		    "english":"Site :",
		    "simplifiedChinese":"区域名称 :",
		    "traditionalChinese":"區域名稱 :",
		    "func":"Window Site"
		});
		//詳細說明
		setDictionary("Window Site Description",
		{
		    "english":"Description :",
		    "simplifiedChinese":"详细说明 :",
		    "traditionalChinese":"詳細說明 :",
		    "func":"Window Site"
		});
		//建檔時間
		setDictionary("Window Site Create Date",
		{
		    "english":"Create Date :",
		    "simplifiedChinese":"建档时间 :",
		    "traditionalChinese":"建檔時間 :",
		    "func":"Window Site"
		});
		//異動時間
		setDictionary("Window Site Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :",
		    "func":"Window Site"
		});
		//異動者
		setDictionary("Window Site Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :",
		    "func":"Window Site"
		});
		//新增區域資料建檔
		setDictionary("Window Site Insert",
		{
		    "english":"Insert Site",
		    "simplifiedChinese":"新增区域资料建档",
		    "traditionalChinese":"新增區域資料建檔",
		    "func":"Window Site"
		});
		//查詢區域資料建檔
		setDictionary("Window Site View",
		{
		    "english":"View Site",
		    "simplifiedChinese":"查询区域资料建档",
		    "traditionalChinese":"查詢區域資料建檔",
		    "func":"Window Site"
		});
		//修改區域資料建檔
		setDictionary("Window Site Update",
		{
		    "english":"Update Site",
		    "simplifiedChinese":"修改区域资料建档",
		    "traditionalChinese":"修改區域資料建檔",
		    "func":"Window Site"
		});
	}
	//巡檢班別建檔
	new function()
	{
		//巡檢班別建檔較長的文字
		setDictionary("Shift_Name_Info",
		{
		    "english":"Home>Basic>Create Shift Name",
		    "simplifiedChinese":"首页>基本建档>巡检班别建档",
		    "traditionalChinese":"首頁>基本建檔>巡檢班別建檔"
		});
		//巡檢單位
		setDictionary("Shift_Name_Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"巡检单位",
		    "traditionalChinese":"巡檢單位"
		});
		//巡檢班別
		setDictionary("Shift_Name_ShiftName",
		{
		    "english":"Shift Name",
		    "simplifiedChinese":"巡检班别",
		    "traditionalChinese":"巡檢班別"
		});
		//開始時間
		setDictionary("Shift_Name_Begin_Time",
		{
		    "english":"Begin Time",
		    "simplifiedChinese":"开始时间",
		    "traditionalChinese":"開始時間"
		});
		//結束時間
		setDictionary("Shift_Name_End_Time",
		{
		    "english":"End Time",
		    "simplifiedChinese":"结束时间",
		    "traditionalChinese":"結束時間"
		});
		//異動時間
		setDictionary("Shift_Name_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//異動者
		setDictionary("Shift_Name_Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者"
		});
		//巡檢單位
		setDictionary("Window_Shift_Name_Condominium",
		{
		    "english":"Condominium :",
		    "simplifiedChinese":"巡检单位 :",
		    "traditionalChinese":"巡檢單位 :"
		});
		//巡檢班別
		setDictionary("Window_Shift_Name_ShiftName",
		{
		    "english":"Shift Name :",
		    "simplifiedChinese":"巡检班别 :",
		    "traditionalChinese":"巡檢班別 :"
		});
		//開始時間
		setDictionary("Window_Shift_Name_Begin_Time",
		{
		    "english":"Begin Time :",
		    "simplifiedChinese":"开始时间 :",
		    "traditionalChinese":"開始時間 :"
		});
		//結束時間
		setDictionary("Window_Shift_Name_End_Time",
		{
		    "english":"End Time :",
		    "simplifiedChinese":"结束时间 :",
		    "traditionalChinese":"結束時間 :"
		});
		//異動時間
		setDictionary("Window_Shift_Name_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//異動者
		setDictionary("Window_Shift_Name_Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :"
		});
		//新增巡檢班別建檔
		setDictionary("Window_Shift_Name_Insert",
		{
		    "english":"Insert Shift_Name",
		    "simplifiedChinese":"新增巡检班别建档",
		    "traditionalChinese":"新增巡檢班別建檔"
		});
		//查詢巡檢班別建檔
		setDictionary("Window_Shift_Name_View",
		{
		    "english":"View Shift_Name",
		    "simplifiedChinese":"查询巡检班别建档",
		    "traditionalChinese":"查詢巡檢班別建檔"
		});
		//修改巡檢班別建檔
		setDictionary("Window_Shift_Name_Update",
		{
		    "english":"Update Shift_Name",
		    "simplifiedChinese":"修改巡检班别建档",
		    "traditionalChinese":"修改巡檢班別建檔"
		});
	}
	//巡檢點建檔
	new function()
	{
		//巡檢點建檔較長的文字
		setDictionary("Patrol_Point_Info",
		{
		    "english":"Home>Basic>Create Patrol Point",
		    "simplifiedChinese":"首页>基本建档>巡检点建档",
		    "traditionalChinese":"首頁>基本建檔>巡檢點建檔"
		});
		//巡檢單位
		setDictionary("Patrol_Point_Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"巡检单位",
		    "traditionalChinese":"巡檢單位"
		});
		//區域名稱
		setDictionary("Patrol_Point_Site",
		{
		    "english":"Site",
		    "simplifiedChinese":"区域名称",
		    "traditionalChinese":"區域名稱"
		});
		//巡檢點名稱
		setDictionary("Patrol_Point_Name",
		{
		    "english":"Name",
		    "simplifiedChinese":"巡检点名称",
		    "traditionalChinese":"巡檢點名稱"
		});
		//詳細說明
		setDictionary("Patrol_Point_Description",
		{
		    "english":"Description",
		    "simplifiedChinese":"详细说明",
		    "traditionalChinese":"詳細說明"
		});
		//巡檢點照片
		setDictionary("Patrol_Point_Picture",
		{
		    "english":"Picture",
		    "simplifiedChinese":"巡检点照片",
		    "traditionalChinese":"巡檢點照片"
		});
		//巡檢點標籤編號
		setDictionary("Patrol_Point_CPS_Card",
		{
		    "english":"CPS Card",
		    "simplifiedChinese":"巡检点标签编号",
		    "traditionalChinese":"巡檢點標籤編號"
		});
		//經度
		setDictionary("Patrol_Point_Longitude",
		{
		    "english":"Longitude",
		    "simplifiedChinese":"经度",
		    "traditionalChinese":"經度"
		});
		//緯度
		setDictionary("Patrol_Point_Latitude",
		{
		    "english":"Latitude",
		    "simplifiedChinese":"纬度",
		    "traditionalChinese":"緯度"
		});
		//是否啟用
		setDictionary("Patrol_Point_Is_Used",
		{
		    "english":"Is Used",
		    "simplifiedChinese":"是否启用",
		    "traditionalChinese":"是否啟用",
		});
		//啟用
		setDictionary("Patrol_Point_Used",
		{
		    "english":"Used",
		    "simplifiedChinese":"启用",
		    "traditionalChinese":"啟用"
		});
		//未啟用
		setDictionary("Patrol_Point_Not_Used",
		{
		    "english":"Not Used",
		    "simplifiedChinese":"未启用",
		    "traditionalChinese":"未啟用"
		});
		//建檔時間
		setDictionary("Patrol_Point_Create_Date",
		{
		    "english":"Create Date",
		    "simplifiedChinese":"建档时间",
		    "traditionalChinese":"建檔時間"
		});
		//異動時間
		setDictionary("Patrol_Point_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//異動者
		setDictionary("Patrol_Point_Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者"
		});
		//巡檢單位
		setDictionary("Window_Patrol_Point_Condominium",
		{
		    "english":"Condominium :",
		    "simplifiedChinese":"巡检单位 :",
		    "traditionalChinese":"巡檢單位 :"
		});
		//區域名稱
		setDictionary("Window_Patrol_Point_Site",
		{
		    "english":"Site :",
		    "simplifiedChinese":"区域名称 :",
		    "traditionalChinese":"區域名稱 :"
		});
		//巡檢點名稱
		setDictionary("Window_Patrol_Point_Name",
		{
		    "english":"Name :",
		    "simplifiedChinese":"巡检点名称 :",
		    "traditionalChinese":"巡檢點名稱 :"
		});
		//詳細說明
		setDictionary("Window_Patrol_Point_Description",
		{
		    "english":"Description :",
		    "simplifiedChinese":"详细说明 :",
		    "traditionalChinese":"詳細說明 :"
		});
		//巡檢點照片
		setDictionary("Window_Patrol_Point_Picture",
		{
		    "english":"Picture :",
		    "simplifiedChinese":"巡检点照片 :",
		    "traditionalChinese":"巡檢點照片 :"
		});
		//巡檢點標籤編號
		setDictionary("Window_Patrol_Point_CPS_Card",
		{
		    "english":"CPS Card :",
		    "simplifiedChinese":"巡检点标签编号 :",
		    "traditionalChinese":"巡檢點標籤編號 :"
		});
		//經度
		setDictionary("Window_Patrol_Point_Longitude",
		{
		    "english":"Longitude :",
		    "simplifiedChinese":"经度 :",
		    "traditionalChinese":"經度 :"
		});
		//緯度
		setDictionary("Window_Patrol_Point_Latitude",
		{
		    "english":"Latitude :",
		    "simplifiedChinese":"纬度 :",
		    "traditionalChinese":"緯度 :"
		});
		//是否啟用
		setDictionary("Window_Patrol_Point_Is_Used",
		{
		    "english":"Is Used :",
		    "simplifiedChinese":"是否启用 :",
		    "traditionalChinese":"是否啟用 :",
		});
		//啟用
		setDictionary("Window_Patrol_Point_Used",
		{
		    "english":"Used",
		    "simplifiedChinese":"启用",
		    "traditionalChinese":"啟用"
		});
		//未啟用
		setDictionary("Window_Patrol_Point_Not_Used",
		{
		    "english":"Not Used",
		    "simplifiedChinese":"未启用",
		    "traditionalChinese":"未啟用"
		});
		//建檔時間
		setDictionary("Window_Patrol_Point_Create_Date",
		{
		    "english":"Create Date :",
		    "simplifiedChinese":"建档时间 :",
		    "traditionalChinese":"建檔時間 :"
		});
		//異動時間
		setDictionary("Window_Patrol_Point_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//異動者
		setDictionary("Window_Patrol_Point_Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :"
		});
		//新增巡檢點建檔
		setDictionary("Window_Patrol_Point_Insert",
		{
		    "english":"Insert Patrol_Point",
		    "simplifiedChinese":"新增巡检点建档",
		    "traditionalChinese":"新增巡檢點建檔"
		});
		//查詢巡檢點建檔
		setDictionary("Window_Patrol_Point_View",
		{
		    "english":"View Patrol_Point",
		    "simplifiedChinese":"查询巡检点建档",
		    "traditionalChinese":"查詢巡檢點建檔"
		});
		//修改巡檢點建檔
		setDictionary("Window_Patrol_Point_Update",
		{
		    "english":"Update Patrol_Point",
		    "simplifiedChinese":"修改巡检点建档",
		    "traditionalChinese":"修改巡檢點建檔"
		});
	}
	//任務資料建檔
	new function()
	{
		//任務資料建檔較長的文字
		setDictionary("Patrol_Mission_Info",
		{
		    "english":"Home>Basic>Create Patrol Mission",
		    "simplifiedChinese":"首页>基本建档>任务资料建档",
		    "traditionalChinese":"首頁>基本建檔>任務資料建檔"
		});
		//巡檢單位
		setDictionary("Patrol_Mission_Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"巡检单位",
		    "traditionalChinese":"巡檢單位"
		});
		//區域名稱
		setDictionary("Patrol_Mission_Site",
		{
		    "english":"Site",
		    "simplifiedChinese":"区域名称",
		    "traditionalChinese":"區域名稱"
		});
		//巡檢點名稱
		setDictionary("Patrol_Mission_Patrol_Name",
		{
		    "english":"Patrol Name",
		    "simplifiedChinese":"巡检点名称",
		    "traditionalChinese":"巡檢點名稱"
		});
		//任務名稱
		setDictionary("Patrol_Mission_Name",
		{
		    "english":"Mission Name",
		    "simplifiedChinese":"任务名称",
		    "traditionalChinese":"任務名稱"
		});
		//執行動作
		setDictionary("Patrol_Mission_Action",
		{
		    "english":"Mission Action",
		    "simplifiedChinese":"执行动作",
		    "traditionalChinese":"執行動作"
		});
		//詳細說明
		setDictionary("Patrol_Mission_Description",
		{
		    "english":"Description",
		    "simplifiedChinese":"详细说明",
		    "traditionalChinese":"詳細說明"
		});
		//是否啟用
		setDictionary("Patrol_Mission_Is_Used",
		{
		    "english":"Is Used",
		    "simplifiedChinese":"是否启用",
		    "traditionalChinese":"是否啟用",
		});
		//啟用
		setDictionary("Patrol_Mission_Used",
		{
		    "english":"Used",
		    "simplifiedChinese":"启用",
		    "traditionalChinese":"啟用"
		});
		//未啟用
		setDictionary("Patrol_Mission_Not_Used",
		{
		    "english":"Not Used",
		    "simplifiedChinese":"未启用",
		    "traditionalChinese":"未啟用"
		});
		//異動時間
		setDictionary("Patrol_Mission_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//異動者
		setDictionary("Patrol_Mission_Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者"
		});
		//巡檢單位
		setDictionary("Window_Patrol_Mission_Condominium",
		{
		    "english":"Condominium :",
		    "simplifiedChinese":"巡检单位 :",
		    "traditionalChinese":"巡檢單位 :"
		});
		//區域名稱
		setDictionary("Window_Patrol_Mission_Site",
		{
		    "english":"Site :",
		    "simplifiedChinese":"区域名称 :",
		    "traditionalChinese":"區域名稱 :"
		});
		//巡檢點名稱
		setDictionary("Window_Patrol_Mission_Patrol_Name",
		{
		    "english":"Patrol Name :",
		    "simplifiedChinese":"巡检点名称 :",
		    "traditionalChinese":"巡檢點名稱 :"
		});
		//任務名稱
		setDictionary("Window_Patrol_Mission_Name",
		{
		    "english":"Mission Name :",
		    "simplifiedChinese":"任务名称 :",
		    "traditionalChinese":"任務名稱 :"
		});
		//執行動作
		setDictionary("Window_Patrol_Mission_Action",
		{
		    "english":"Mission Action :",
		    "simplifiedChinese":"执行动作 :",
		    "traditionalChinese":"執行動作 :"
		});
		//詳細說明
		setDictionary("Window_Patrol_Mission_Description",
		{
		    "english":"Description :",
		    "simplifiedChinese":"详细说明 :",
		    "traditionalChinese":"詳細說明 :"
		});
		//是否啟用
		setDictionary("Window_Patrol_Mission_Is_Used",
		{
		    "english":"Is Used :",
		    "simplifiedChinese":"是否启用 :",
		    "traditionalChinese":"是否啟用 :",
		});
		//異動時間
		setDictionary("Window_Patrol_Mission_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//異動者
		setDictionary("Window_Patrol_Mission_Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :"
		});
		//新增任務資料建檔
		setDictionary("Window_Patrol_Mission_Insert",
		{
		    "english":"Insert Patrol Mission",
		    "simplifiedChinese":"新增任务资料建档",
		    "traditionalChinese":"新增任務資料建檔"
		});
		//查詢任務資料建檔
		setDictionary("Window_Patrol_Mission_View",
		{
		    "english":"View Patrol Mission",
		    "simplifiedChinese":"查询任务资料建档",
		    "traditionalChinese":"查詢任務資料建檔"
		});
		//修改任務資料建檔
		setDictionary("Window_Patrol_Mission_Update",
		{
		    "english":"Update Patrol Mission",
		    "simplifiedChinese":"修改任务资料建档",
		    "traditionalChinese":"修改任務資料建檔"
		});
		//皆可
		setDictionary("Patrol_Mission_Action_All",
		{
		    "english":"All",
		    "simplifiedChinese":"皆可",
		    "traditionalChinese":"皆可"
		});
		//文字
		setDictionary("Patrol_Mission_Action_Text",
		{
		    "english":"Text",
		    "simplifiedChinese":"文字",
		    "traditionalChinese":"文字"
		});
		//照片
		setDictionary("Patrol_Mission_Action_Picture",
		{
		    "english":"Picture",
		    "simplifiedChinese":"照片",
		    "traditionalChinese":"照片"
		});
		//聲音
		setDictionary("Patrol_Mission_Action_Voice",
		{
		    "english":"Voice",
		    "simplifiedChinese":"声音",
		    "traditionalChinese":"聲音"
		});
	}
	//巡檢路線建檔
	new function()
	{
		//巡檢路線建檔較長的文字
		setDictionary("Patrol_Route_Info",
		{
		    "english":"Home>Basic>Create Patrol Route",
		    "simplifiedChinese":"首页>基本建档>巡检路线建档",
		    "traditionalChinese":"首頁>基本建檔>巡檢路線建檔"
		});
		//巡檢單位
		setDictionary("Patrol_Route_Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"巡检单位",
		    "traditionalChinese":"巡檢單位"
		});
		//區域名稱
		setDictionary("Patrol_Route_Site",
		{
		    "english":"Site",
		    "simplifiedChinese":"区域名称",
		    "traditionalChinese":"區域名稱"
		});
		//巡檢路線名稱
		setDictionary("Patrol_Route_Name",
		{
		    "english":"Route Name",
		    "simplifiedChinese":"巡检路线名称",
		    "traditionalChinese":"巡檢路線名稱"
		});
		//巡檢班別名稱
		setDictionary("Patrol_Route_Shift_Name",
		{
		    "english":"Shift Name",
		    "simplifiedChinese":"巡检班别名称",
		    "traditionalChinese":"巡檢班別名稱"
		});
		//巡檢開始時間
		setDictionary("Patrol_Route_Start_Time",
		{
		    "english":"Start Time",
		    "simplifiedChinese":"巡检开始时间",
		    "traditionalChinese":"巡檢開始時間"
		});
		//巡檢結束時間
		setDictionary("Patrol_Route_End_Time",
		{
		    "english":"End Time",
		    "simplifiedChinese":"巡检结束时间",
		    "traditionalChinese":"巡檢結束時間"
		});
		//是否啟用
		setDictionary("Patrol_Route_Is_Used",
		{
		    "english":"Is Used",
		    "simplifiedChinese":"是否启用",
		    "traditionalChinese":"是否啟用",
		});
		//啟用
		setDictionary("Patrol_Route_Used",
		{
		    "english":"Used",
		    "simplifiedChinese":"启用",
		    "traditionalChinese":"啟用"
		});
		//未啟用
		setDictionary("Patrol_Route_Not_Used",
		{
		    "english":"Not Used",
		    "simplifiedChinese":"未启用",
		    "traditionalChinese":"未啟用"
		});
		//異動時間
		setDictionary("Patrol_Route_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//異動者
		setDictionary("Patrol_Route_Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者"
		});
		//巡檢單位
		setDictionary("Window_Patrol_Route_Condominium",
		{
		    "english":"Condominium :",
		    "simplifiedChinese":"巡检单位 :",
		    "traditionalChinese":"巡檢單位 :"
		});
		//區域名稱
		setDictionary("Window_Patrol_Route_Site",
		{
		    "english":"Site :",
		    "simplifiedChinese":"区域名称 :",
		    "traditionalChinese":"區域名稱 :"
		});
		//巡檢路線名稱
		setDictionary("Window_Patrol_Route_Name",
		{
		    "english":"Route Name :",
		    "simplifiedChinese":"巡检路线名称 :",
		    "traditionalChinese":"巡檢路線名稱 :"
		});
		//巡檢班別名稱
		setDictionary("Window_Patrol_Route_Shift_Name",
		{
		    "english":"Shift Name :",
		    "simplifiedChinese":"巡检班别名称 :",
		    "traditionalChinese":"巡檢班別名稱 :"
		});
		//巡檢開始時間
		setDictionary("Window_Patrol_Route_Start_Time",
		{
		    "english":"Start Time :",
		    "simplifiedChinese":"巡检开始时间 :",
		    "traditionalChinese":"巡檢開始時間 :"
		});
		//巡檢結束時間
		setDictionary("Window_Patrol_Route_End_Time",
		{
		    "english":"End Time :",
		    "simplifiedChinese":"巡检结束时间 :",
		    "traditionalChinese":"巡檢結束時間 :"
		});
		//是否啟用
		setDictionary("Window_Patrol_Route_Is_Used",
		{
		    "english":"Is Used :",
		    "simplifiedChinese":"是否启用 :",
		    "traditionalChinese":"是否啟用 :"
		});
		//異動時間
		setDictionary("Window_Patrol_Route_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//異動者
		setDictionary("Window_Patrol_Route_Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :"
		});
		//新增巡檢路線建檔
		setDictionary("Window_Patrol_Route_Insert",
		{
		    "english":"Insert Patrol Route",
		    "simplifiedChinese":"新增巡检路线建档",
		    "traditionalChinese":"新增巡檢路線建檔"
		});
		//查詢巡檢路線建檔
		setDictionary("Window_Patrol_Route_View",
		{
		    "english":"View Patrol Route",
		    "simplifiedChinese":"查询巡检路线建档",
		    "traditionalChinese":"查詢巡檢路線建檔"
		});
		//修改巡檢路線建檔
		setDictionary("Window_Patrol_Route_Update",
		{
		    "english":"Update Patrol Route",
		    "simplifiedChinese":"修改巡检路线建档",
		    "traditionalChinese":"修改巡檢路線建檔"
		});
	}
	//巡檢路線明細建檔
	new function()
	{
		//巡檢路線明細建檔較長的文字
		setDictionary("Route_Detail_Info",
		{
		    "english":"Home>Basic>Create Route Detail",
		    "simplifiedChinese":"首页>基本建档>巡检路线明细建档",
		    "traditionalChinese":"首頁>基本建檔>巡檢路線明細建檔"
		});
		//巡檢單位
		setDictionary("Route_Detail_Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"巡检单位",
		    "traditionalChinese":"巡檢單位"
		});
		//區域名稱
		setDictionary("Route_Detail_Site",
		{
		    "english":"Site",
		    "simplifiedChinese":"区域名称",
		    "traditionalChinese":"區域名稱"
		});
		//巡檢路線名稱
		setDictionary("Route_Detail_Route_Name",
		{
		    "english":"Route Name",
		    "simplifiedChinese":"巡检路线名称",
		    "traditionalChinese":"巡檢路線名稱"
		});
		//巡檢點名稱
		setDictionary("Route_Detail_Patrol_Point",
		{
		    "english":"Patrol Point",
		    "simplifiedChinese":"巡检点名称",
		    "traditionalChinese":"巡檢點名稱"
		});
		//巡檢次序
		setDictionary("Route_Detail_Patrol_Order",
		{
		    "english":"Patrol Order",
		    "simplifiedChinese":"巡检次序",
		    "traditionalChinese":"巡檢次序"
		});
		//異動時間
		setDictionary("Route_Detail_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//異動者
		setDictionary("Route_Detail_Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者"
		});
		
		//巡檢單位
		setDictionary("Window_Route_Detail_Condominium",
		{
		    "english":"Condominium :",
		    "simplifiedChinese":"巡检单位 :",
		    "traditionalChinese":"巡檢單位 :"
		});
		//區域名稱
		setDictionary("Window_Route_Detail_Site",
		{
		    "english":"Site :",
		    "simplifiedChinese":"区域名称 :",
		    "traditionalChinese":"區域名稱 :"
		});
		//巡檢路線名稱
		setDictionary("Window_Route_Detail_Route_Name",
		{
		    "english":"Route Name :",
		    "simplifiedChinese":"巡检路线名称 :",
		    "traditionalChinese":"巡檢路線名稱 :"
		});
		//巡檢點名稱
		setDictionary("Window_Route_Detail_Patrol_Point",
		{
		    "english":"Patrol Point :",
		    "simplifiedChinese":"巡检点名称 :",
		    "traditionalChinese":"巡檢點名稱 :"
		});
		//巡檢次序
		setDictionary("Window_Route_Detail_Patrol_Order",
		{
		    "english":"Patrol Order :",
		    "simplifiedChinese":"巡检次序 :",
		    "traditionalChinese":"巡檢次序 :"
		});
		//異動時間
		setDictionary("Window_Route_Detail_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//異動者
		setDictionary("Window_Route_Detail_Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :"
		});

		//新增巡檢路線明細建檔
		setDictionary("Window_Route_Detail_Insert",
		{
		    "english":"Insert Patrol Route",
		    "simplifiedChinese":"新增巡检路线明细建档",
		    "traditionalChinese":"新增巡檢路線明細建檔"
		});
		//查詢巡檢路線明細建檔
		setDictionary("Window_Route_Detail_View",
		{
		    "english":"View Patrol Route",
		    "simplifiedChinese":"查询巡检路线明细建档",
		    "traditionalChinese":"查詢巡檢路線明細建檔"
		});
		//修改巡檢路線明細建檔
		setDictionary("Window_Route_Detail_Update",
		{
		    "english":"Update Patrol Route",
		    "simplifiedChinese":"修改巡检路线明细建档",
		    "traditionalChinese":"修改巡檢路線明細建檔"
		});
	}
	//巡檢單位排班資料建檔
	new function()
	{
		//巡檢單位排班資料建檔較長的文字
		setDictionary("Shift_Arrangement_Info",
		{
		    "english":"Home>Basic>Shift Arrangement",
		    "simplifiedChinese":"首页>基本建档>巡检单位排班资料建档",
		    "traditionalChinese":"首頁>基本建檔>巡檢單位排班資料建檔"
		});
		//巡檢單位
		setDictionary("Shift_Arrangement_Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"巡检单位",
		    "traditionalChinese":"巡檢單位"
		});
		//區域名稱
		setDictionary("Shift_Arrangement_Site",
		{
		    "english":"Site",
		    "simplifiedChinese":"区域名称",
		    "traditionalChinese":"區域名稱"
		});
		//巡檢路線名稱
		setDictionary("Shift_Arrangement_Route_Name",
		{
		    "english":"Route Name",
		    "simplifiedChinese":"巡检路线名称",
		    "traditionalChinese":"巡檢路線名稱"
		});
		//巡檢班別名稱
		setDictionary("Shift_Arrangement_Shift_Name",
		{
		    "english":"Shift Name",
		    "simplifiedChinese":"巡检班别名称",
		    "traditionalChinese":"巡檢班別名稱"
		});
		//巡檢日期
		setDictionary("Shift_Arrangement_Patrol_Date",
		{
		    "english":"Patrol Date",
		    "simplifiedChinese":"巡检日期",
		    "traditionalChinese":"巡檢日期"
		});
		//巡檢員
		setDictionary("Shift_Arrangement_Patrol_Person",
		{
		    "english":"Patrol Person",
		    "simplifiedChinese":"巡检员",
		    "traditionalChinese":"巡檢員"
		});
		//異動時間
		setDictionary("Shift_Arrangement_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//異動者
		setDictionary("Shift_Arrangement_Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者"
		});
		
		//巡檢單位
		setDictionary("Window_Shift_Arrangement_Condominium",
		{
		    "english":"Condominium :",
		    "simplifiedChinese":"巡检单位 :",
		    "traditionalChinese":"巡檢單位 :"
		});
		//區域名稱
		setDictionary("Window_Shift_Arrangement_Site",
		{
		    "english":"Site :",
		    "simplifiedChinese":"区域名称 :",
		    "traditionalChinese":"區域名稱 :"
		});
		//巡檢路線名稱
		setDictionary("Window_Shift_Arrangement_Route_Name",
		{
		    "english":"Route Name :",
		    "simplifiedChinese":"巡检路线名称 :",
		    "traditionalChinese":"巡檢路線名稱 :"
		});
		//巡檢班別名稱
		setDictionary("Window_Shift_Arrangement_Shift_Name",
		{
		    "english":"Shift Name :",
		    "simplifiedChinese":"巡检班别名称 :",
		    "traditionalChinese":"巡檢班別名稱 :"
		});
		//巡檢日期
		setDictionary("Window_Shift_Arrangement_Patrol_Date",
		{
		    "english":"Patrol Date :",
		    "simplifiedChinese":"巡检日期 :",
		    "traditionalChinese":"巡檢日期 :"
		});
		//巡檢員
		setDictionary("Window_Shift_Arrangement_Patrol_Person",
		{
		    "english":"Patrol Person :",
		    "simplifiedChinese":"巡检员 :",
		    "traditionalChinese":"巡檢員 :"
		});
		//異動時間
		setDictionary("Window_Shift_Arrangement_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//異動者
		setDictionary("Window_Shift_Arrangement_Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :"
		});

		//新增巡檢單位排班資料建檔
		setDictionary("Window_Shift_Arrangement_Insert",
		{
		    "english":"Insert Shift Arrangement",
		    "simplifiedChinese":"新增巡检单位排班资料建档",
		    "traditionalChinese":"新增巡檢單位排班資料建檔"
		});
		//查詢巡檢單位排班資料建檔
		setDictionary("Window_Shift_Arrangement_View",
		{
		    "english":"View Shift Arrangement",
		    "simplifiedChinese":"查询巡检单位排班资料建档",
		    "traditionalChinese":"查詢巡檢單位排班資料建檔"
		});
		//修改巡檢單位排班資料建檔
		setDictionary("Window_Shift_Arrangement_Update",
		{
		    "english":"Update Shift Arrangement",
		    "simplifiedChinese":"修改巡检单位排班资料建档",
		    "traditionalChinese":"修改巡檢單位排班資料建檔"
		});
	}
	//代理商CPS Reader建檔
	new function()
	{
		//代理商CPS Reader建檔較長的文字
		setDictionary("Distributor_CPS_Reader_Info",
		{
		    "english":"Home>Basic>Distributor CPS Reader",
		    "simplifiedChinese":"首页>基本建档>代理商CPS Reader建档",
		    "traditionalChinese":"首頁>基本建檔>代理商CPS Reader建檔"
		});
		//使用巡檢單位
		setDictionary("Distributor_CPS_Reader_Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"使用巡检单位",
		    "traditionalChinese":"使用巡檢單位"
		});
		//CPS Reader編號
		setDictionary("Distributor_CPS_Reader_CPS_Reader_Number",
		{
		    "english":"CPS Reader Number",
		    "simplifiedChinese":"CPS Reader编号",
		    "traditionalChinese":"CPS Reader編號"
		});
		//是否啟用
		setDictionary("Distributor_CPS_Reader_Is_Used",
		{
		    "english":"Is Used",
		    "simplifiedChinese":"是否启用",
		    "traditionalChinese":"是否啟用",
		});
		//啟用
		setDictionary("Distributor_CPS_Reader_Used",
		{
		    "english":"Used",
		    "simplifiedChinese":"启用",
		    "traditionalChinese":"啟用"
		});
		//未啟用
		setDictionary("Distributor_CPS_Reader_Not_Used",
		{
		    "english":"Not Used",
		    "simplifiedChinese":"未启用",
		    "traditionalChinese":"未啟用"
		});
		//維修
		setDictionary("Distributor_CPS_Reader_Repair",
		{
		    "english":"Repair",
		    "simplifiedChinese":"维修",
		    "traditionalChinese":"維修"
		});
		//啟用日期
		setDictionary("Distributor_CPS_Reader_StartDate",
		{
		    "english":"Start Date",
		    "simplifiedChinese":"启用日期",
		    "traditionalChinese":"啟用日期"
		});
		//到期日期
		setDictionary("Distributor_CPS_Reader_EndDate",
		{
		    "english":"End Date",
		    "simplifiedChinese":"到期日期",
		    "traditionalChinese":"到期日期"
		});
		//異動時間
		setDictionary("Distributor_CPS_Reader_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		
		//使用巡檢單位
		setDictionary("Window_Distributor_CPS_Reader_Condominium",
		{
		    "english":"Condominium :",
		    "simplifiedChinese":"使用巡检单位 :",
		    "traditionalChinese":"使用巡檢單位 :"
		});
		//CPS Reader編號
		setDictionary("Window_Distributor_CPS_Reader_CPS_Reader_Number",
		{
		    "english":"CPS Reader Number :",
		    "simplifiedChinese":"CPS Reader编号 :",
		    "traditionalChinese":"CPS Reader編號 :"
		});
		//是否啟用
		setDictionary("Window_Distributor_CPS_Reader_Is_Used",
		{
		    "english":"Is Used :",
		    "simplifiedChinese":"是否启用 :",
		    "traditionalChinese":"是否啟用 :",
		});
		//啟用日期
		setDictionary("Window_Distributor_CPS_Reader_StartDate",
		{
		    "english":"Start Date :",
		    "simplifiedChinese":"启用日期 :",
		    "traditionalChinese":"啟用日期 :"
		});
		//到期日期
		setDictionary("Window_Distributor_CPS_Reader_EndDate",
		{
		    "english":"End Date :",
		    "simplifiedChinese":"到期日期 :",
		    "traditionalChinese":"到期日期 :"
		});
		//異動時間
		setDictionary("Window_Distributor_CPS_Reader_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});

		//查詢代理商CPS Reader建檔
		setDictionary("Window_Distributor_CPS_Reader_View",
		{
		    "english":"View Distributor CPS Reader",
		    "simplifiedChinese":"查询代理商CPS Reader建档",
		    "traditionalChinese":"查詢代理商CPS Reader建檔"
		});
	}
	//打卡紀錄
	new function()
	{
		//打卡紀錄較長的文字
		setDictionary("Check_Point_Record_Info",
		{
		    "english":"Home>Basic>Check Point Record",
		    "simplifiedChinese":"首页>巡检纪录>打卡纪录",
		    "traditionalChinese":"首頁>巡檢紀錄>打卡紀錄"
		});
		//打卡紀錄
		setDictionary("Check_Point_Record",
		{
		    "english":"Check Point Record",
		    "simplifiedChinese":"打卡纪录",
		    "traditionalChinese":"打卡紀錄"
		});
		//巡檢單位
		setDictionary("Check_Point_Record_Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"巡检单位",
		    "traditionalChinese":"巡檢單位"
		});
		//區域名稱
		setDictionary("Check_Point_Record_Site",
		{
		    "english":"Site",
		    "simplifiedChinese":"区域名称",
		    "traditionalChinese":"區域名稱"
		});
		//巡檢路線名稱
		setDictionary("Check_Point_Record_Route_Name",
		{
		    "english":"Route Name",
		    "simplifiedChinese":"巡检路线名称",
		    "traditionalChinese":"巡檢路線名稱"
		});
		//巡檢點名稱
		setDictionary("Check_Point_Record_Point_Name",
		{
		    "english":"Name",
		    "simplifiedChinese":"巡检点名称",
		    "traditionalChinese":"巡檢點名稱"
		});
		//巡檢班別
		setDictionary("Check_Point_Record_ShiftName",
		{
		    "english":"Shift Name",
		    "simplifiedChinese":"巡检班别",
		    "traditionalChinese":"巡檢班別"
		});
		//標籤編號
		setDictionary("Check_Point_Record_Tag_ID",
		{
		    "english":"Tag ID",
		    "simplifiedChinese":"标签编号",
		    "traditionalChinese":"標籤編號",
		    "func":"CPS_Data"
		});
		//打卡時間
		setDictionary("Check_Point_Record_Chick_Time",
		{
		    "english":"Check Time",
		    "simplifiedChinese":"打卡时间",
		    "traditionalChinese":"打卡時間"
		});
		//異動時間
		setDictionary("Check_Point_Record_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//經度
		setDictionary("Check_Point_Record_Longitude",
		{
		    "english":"Longitude",
		    "simplifiedChinese":"经度",
		    "traditionalChinese":"經度"
		});
		//緯度
		setDictionary("Check_Point_Record_Latitude",
		{
		    "english":"Latitude",
		    "simplifiedChinese":"纬度",
		    "traditionalChinese":"緯度"
		});
		//巡檢員
		setDictionary("Check_Point_Record_Patrol_Person",
		{
		    "english":"Patrol Person",
		    "simplifiedChinese":"巡检员",
		    "traditionalChinese":"巡檢員"
		});
		//是否打卡
		setDictionary("Check_Point_Record_Status",
		{
		    "english":"Status",
		    "simplifiedChinese":"是否打卡",
		    "traditionalChinese":"是否打卡"
		});
		//已打卡
		setDictionary("Check_Point_Record_Used",
		{
		    "english":"Checked",
		    "simplifiedChinese":"已打卡",
		    "traditionalChinese":"已打卡"
		});
		//未打卡
		setDictionary("Check_Point_Record_Not_Used",
		{
		    "english":"Not Checked",
		    "simplifiedChinese":"未打卡",
		    "traditionalChinese":"未打卡"
		});
		//隨機巡邏
		setDictionary("Random_Patrol",
		{
		    "english":"Random Patrol",
		    "simplifiedChinese":"随机巡逻",
		    "traditionalChinese":"隨機巡邏"
		});
		//排班日期
		setDictionary("Shift_Date",
		{
		    "english":"Shift Date",
		    "simplifiedChinese":"排班日期",
		    "traditionalChinese":"排班日期"
		});

		//巡檢路線名稱
		setDictionary("Window_Check_Point_Record_Route_Name",
		{
		    "english":"Route Name :",
		    "simplifiedChinese":"巡检路线名称 :",
		    "traditionalChinese":"巡檢路線名稱 :"
		});
		//巡檢點名稱
		setDictionary("Window_Check_Point_Record_Point_Name",
		{
		    "english":"Name :",
		    "simplifiedChinese":"巡检点名称 :",
		    "traditionalChinese":"巡檢點名稱 :"
		});
		//巡檢班別
		setDictionary("Window_Check_Point_Record_ShiftName",
		{
		    "english":"Shift Name :",
		    "simplifiedChinese":"巡检班别 :",
		    "traditionalChinese":"巡檢班別 :"
		});
		//標籤編號
		setDictionary("Window_Check_Point_Record_Tag_ID",
		{
		    "english":"Tag ID :",
		    "simplifiedChinese":"标签编号 :",
		    "traditionalChinese":"標籤編號 :",
		    "func":"CPS_Data"
		});
		//打卡時間
		setDictionary("Window_Check_Point_Record_Chick_Time",
		{
		    "english":"Check Time :",
		    "simplifiedChinese":"打卡时间 :",
		    "traditionalChinese":"打卡時間 :"
		});
		//異動時間
		setDictionary("Window_Check_Point_Record_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//經度
		setDictionary("Window_Check_Point_Record_Longitude",
		{
		    "english":"Longitude :",
		    "simplifiedChinese":"经度 :",
		    "traditionalChinese":"經度 :"
		});
		//緯度
		setDictionary("Window_Check_Point_Record_Latitude",
		{
		    "english":"Latitude :",
		    "simplifiedChinese":"纬度 :",
		    "traditionalChinese":"緯度 :"
		});
		//巡檢員
		setDictionary("Window_Check_Point_Record_Patrol_Person",
		{
		    "english":"Patrol Person :",
		    "simplifiedChinese":"巡检员 :",
		    "traditionalChinese":"巡檢員 :"
		});
		//是否打卡
		setDictionary("Window_Check_Point_Record_Status",
		{
		    "english":"Status :",
		    "simplifiedChinese":"是否打卡 :",
		    "traditionalChinese":"是否打卡 :"
		});

		//查詢打卡紀錄
		setDictionary("Window_Check_Point_Record_View",
		{
		    "english":"View Check Point Record",
		    "simplifiedChinese":"查询打卡纪录",
		    "traditionalChinese":"查詢打卡紀錄"
		});
	}
	//檢查事項紀錄
	new function()
	{
		//檢查事項紀錄較長的文字
		setDictionary("Check_Mission_Record_Info",
		{
		    "english":"Home>Basic>Check Mission Record",
		    "simplifiedChinese":"首页>巡检纪录>检查事项纪录",
		    "traditionalChinese":"首頁>巡檢紀錄>檢查事項紀錄"
		});
		//檢查事項紀錄
		setDictionary("Check_Mission_Record",
		{
		    "english":"Check Mission Record",
		    "simplifiedChinese":"检查事项纪录",
		    "traditionalChinese":"檢查事項紀錄"
		});
		//巡檢單位
		setDictionary("Check_Mission_Record_Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"巡检单位",
		    "traditionalChinese":"巡檢單位"
		});
		//區域名稱
		setDictionary("Check_Mission_Record_Site",
		{
		    "english":"Site",
		    "simplifiedChinese":"区域名称",
		    "traditionalChinese":"區域名稱"
		});
		//巡檢路線名稱
		setDictionary("Check_Mission_Record_Route_Name",
		{
		    "english":"Route Name",
		    "simplifiedChinese":"巡检路线名称",
		    "traditionalChinese":"巡檢路線名稱"
		});
		//巡檢點名稱
		setDictionary("Check_Mission_Record_Mission_Name",
		{
		    "english":"Name",
		    "simplifiedChinese":"巡检点名称",
		    "traditionalChinese":"巡檢點名稱"
		});
		//巡檢班別
		setDictionary("Check_Mission_Record_ShiftName",
		{
		    "english":"Shift Name",
		    "simplifiedChinese":"巡检班别",
		    "traditionalChinese":"巡檢班別"
		});
		//檢查時間
		setDictionary("Check_Mission_Record_Check_Time",
		{
		    "english":"Check Time",
		    "simplifiedChinese":"检查时间",
		    "traditionalChinese":"檢查時間"
		});
		//檢查事項
		setDictionary("Check_Mission_Record_Check_Mission",
		{
		    "english":"Check Mission",
		    "simplifiedChinese":"检查事项",
		    "traditionalChinese":"檢查事項"
		});
		//詳細說明
		setDictionary("Check_Mission_Record_Description",
		{
		    "english":"Description",
		    "simplifiedChinese":"详细说明",
		    "traditionalChinese":"詳細說明"
		});
		//結果
		setDictionary("Check_Mission_Record_Result",
		{
		    "english":"Result",
		    "simplifiedChinese":"结果",
		    "traditionalChinese":"結果"
		});
		//巡檢員
		setDictionary("Check_Mission_Record_Patrol_Person",
		{
		    "english":"Patrol Person",
		    "simplifiedChinese":"巡检员",
		    "traditionalChinese":"巡檢員"
		});
		//尚未檢查
		setDictionary("Check_Mission_Record_No_Checked",
		{
		    "english":"No Checked",
		    "simplifiedChinese":"尚未检查",
		    "traditionalChinese":"尚未檢查"
		});
		//正常
		setDictionary("Check_Mission_Record_Normal",
		{
		    "english":"Normal",
		    "simplifiedChinese":"正常",
		    "traditionalChinese":"正常"
		});
		//異常
		setDictionary("Check_Mission_Record_Unnormal",
		{
		    "english":"Unnormal",
		    "simplifiedChinese":"异常",
		    "traditionalChinese":"異常"
		});

		//巡檢路線名稱
		setDictionary("Window_Check_Mission_Record_Route_Name",
		{
		    "english":"Route Name :",
		    "simplifiedChinese":"巡检路线名称 :",
		    "traditionalChinese":"巡檢路線名稱 :"
		});
		//巡檢點名稱
		setDictionary("Window_Check_Mission_Record_Mission_Name",
		{
		    "english":"Name :",
		    "simplifiedChinese":"巡检点名称 :",
		    "traditionalChinese":"巡檢點名稱 :"
		});
		//巡檢班別
		setDictionary("Window_Check_Mission_Record_ShiftName",
		{
		    "english":"Shift Name :",
		    "simplifiedChinese":"巡检班别 :",
		    "traditionalChinese":"巡檢班別 :"
		});
		//檢查時間
		setDictionary("Window_Check_Mission_Record_Check_Time",
		{
		    "english":"Check Time :",
		    "simplifiedChinese":"检查时间 :",
		    "traditionalChinese":"檢查時間 :"
		});
		//檢查事項
		setDictionary("Window_Check_Mission_Record_Check_Mission",
		{
		    "english":"Check Mission :",
		    "simplifiedChinese":"检查事项 :",
		    "traditionalChinese":"檢查事項 :"
		});
		//詳細說明
		setDictionary("Window_Check_Mission_Record_Description",
		{
		    "english":"Description :",
		    "simplifiedChinese":"详细说明 :",
		    "traditionalChinese":"詳細說明 :"
		});
		//結果
		setDictionary("Window_Check_Mission_Record_Result",
		{
		    "english":"Result :",
		    "simplifiedChinese":"结果 :",
		    "traditionalChinese":"結果 :"
		});
		//巡檢員
		setDictionary("Window_Check_Mission_Record_Patrol_Person",
		{
		    "english":"Patrol Person :",
		    "simplifiedChinese":"巡检员 :",
		    "traditionalChinese":"巡檢員 :"
		});

		//查詢檢查事項紀錄
		setDictionary("View_Check_Mission_Record",
		{
		    "english":"View Check Mission Record",
		    "simplifiedChinese":"查询检查事项纪录",
		    "traditionalChinese":"查詢檢查事項紀錄"
		});
	}
	//巡檢點檢查紀錄
	new function()
	{
		//檢查事項紀錄較長的文字
		setDictionary("Event_Record_Info",
		{
		    "english":"Home>Basic>Event Record",
		    "simplifiedChinese":"首页>巡检纪录>巡检点检查纪录",
		    "traditionalChinese":"首頁>巡檢紀錄>巡檢點檢查紀錄"
		});
		//巡檢點檢查紀錄
		setDictionary("Event_Record",
		{
		    "english":"Event Record",
		    "simplifiedChinese":"巡检点检查纪录",
		    "traditionalChinese":"巡檢點檢查紀錄"
		});
		//巡檢單位
		setDictionary("Event_Record_Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"巡检单位",
		    "traditionalChinese":"巡檢單位"
		});
		//區域名稱
		setDictionary("Event_Record_Site",
		{
		    "english":"Site",
		    "simplifiedChinese":"区域名称",
		    "traditionalChinese":"區域名稱"
		});
		//巡檢路線名稱
		setDictionary("Event_Record_Route_Name",
		{
		    "english":"Route Name",
		    "simplifiedChinese":"巡检路线名称",
		    "traditionalChinese":"巡檢路線名稱"
		});
		//巡檢點名稱
		setDictionary("Event_Record_Mission_Name",
		{
		    "english":"Name",
		    "simplifiedChinese":"巡检点名称",
		    "traditionalChinese":"巡檢點名稱"
		});
		//巡檢班別
		setDictionary("Event_Record_ShiftName",
		{
		    "english":"Shift Name",
		    "simplifiedChinese":"巡检班别",
		    "traditionalChinese":"巡檢班別"
		});
		//檢查時間
		setDictionary("Event_Record_Check_Time",
		{
		    "english":"Check Time",
		    "simplifiedChinese":"检查时间",
		    "traditionalChinese":"檢查時間"
		});
		//檢查事項
		setDictionary("Event_Record_Check_Mission",
		{
		    "english":"Check Mission",
		    "simplifiedChinese":"检查事项",
		    "traditionalChinese":"檢查事項"
		});
		//巡檢員
		setDictionary("Event_Record_Patrol_Person",
		{
		    "english":"Patrol Person",
		    "simplifiedChinese":"巡检员",
		    "traditionalChinese":"巡檢員"
		});
		//文字紀錄
		setDictionary("Event_Record_Text",
		{
		    "english":"Text",
		    "simplifiedChinese":"文字",
		    "traditionalChinese":"文字"
		});
		//圖片
		setDictionary("Event_Record_Image",
		{
		    "english":"Image",
		    "simplifiedChinese":"图片",
		    "traditionalChinese":"圖片"
		});
		//語音
		setDictionary("Event_Record_Voice",
		{
		    "english":"Voice",
		    "simplifiedChinese":"语音",
		    "traditionalChinese":"語音"
		});
		//查看音檔
		setDictionary("Event_Record_View_Voice",
		{
		    "english":"View Voice",
		    "simplifiedChinese":"查看音档",
		    "traditionalChinese":"查看音檔"
		});
		//查看圖片
		setDictionary("Event_Record_View_Image",
		{
		    "english":"View Image",
		    "simplifiedChinese":"查看图片",
		    "traditionalChinese":"查看圖片"
		});

		//巡檢路線名稱
		setDictionary("Window_Event_Record_Route_Name",
		{
		    "english":"Route Name :",
		    "simplifiedChinese":"巡检路线名称 :",
		    "traditionalChinese":"巡檢路線名稱 :"
		});
		//巡檢班別
		setDictionary("Window_Event_Record_ShiftName",
		{
		    "english":"Shift Name :",
		    "simplifiedChinese":"巡检班别 :",
		    "traditionalChinese":"巡檢班別 :"
		});
		//巡檢點名稱
		setDictionary("Window_Event_Record_Mission_Name",
		{
		    "english":"Name :",
		    "simplifiedChinese":"巡检点名称 :",
		    "traditionalChinese":"巡檢點名稱 :"
		});
		//檢查事項
		setDictionary("Window_Event_Record_Check_Mission",
		{
		    "english":"Check Mission :",
		    "simplifiedChinese":"检查事项 :",
		    "traditionalChinese":"檢查事項 :"
		});
		//文字紀錄
		setDictionary("Window_Event_Record_Text",
		{
		    "english":"Text :",
		    "simplifiedChinese":"文字 :",
		    "traditionalChinese":"文字 :"
		});
		//圖片
		setDictionary("Window_Event_Record_Image",
		{
		    "english":"Image :",
		    "simplifiedChinese":"图片 :",
		    "traditionalChinese":"圖片 :"
		});
		//語音
		setDictionary("Window_Event_Record_Voice",
		{
		    "english":"Voice :",
		    "simplifiedChinese":"语音 :",
		    "traditionalChinese":"語音 :"
		});
		//檢查時間
		setDictionary("Window_Event_Record_Check_Time",
		{
		    "english":"Check Time :",
		    "simplifiedChinese":"检查时间 :",
		    "traditionalChinese":"檢查時間 :"
		});
		//巡檢員
		setDictionary("Window_Event_Record_Patrol_Person",
		{
		    "english":"Patrol Person :",
		    "simplifiedChinese":"巡检员 :",
		    "traditionalChinese":"巡檢員 :"
		});
		//查詢巡檢檢查點事件記錄
		setDictionary("View_Event_Record",
		{
		    "english":"View Event Record",
		    "simplifiedChinese":"查询巡检检查点事件记录",
		    "traditionalChinese":"查詢巡檢檢查點事件記錄"
		});
	}
	//即時監控
	new function()
	{
		//檢查事項紀錄較長的文字
		setDictionary("Immediate_Monitor_Info",
		{
		    "english":"Home>Immediate Monitor",
		    "simplifiedChinese":"首页>即时监控",
		    "traditionalChinese":"首頁>即時監控"
		});
		//發送郵件
		setDictionary("Immediate_Monitor_SendMail",
		{
		    "english":"Send Mail",
		    "simplifiedChinese":"发送邮件",
		    "traditionalChinese":"發送郵件"
		});
		//巡檢單位
		setDictionary("Immediate_Monitor_Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"巡检单位",
		    "traditionalChinese":"巡檢單位"
		});
		//信件內容
		setDictionary("Immediate_Monitor_Content",
		{
		    "english":"Content",
		    "simplifiedChinese":"信件内容",
		    "traditionalChinese":"信件內容"
		});
		//巡檢單位
		setDictionary("Window_Immediate_Monitor_Condominium",
		{
		    "english":"Condominium :",
		    "simplifiedChinese":"巡检单位 :",
		    "traditionalChinese":"巡檢單位 :"
		});
		//信件內容
		setDictionary("Window_Immediate_Monitor_Content",
		{
		    "english":"Content :",
		    "simplifiedChinese":"信件内容 :",
		    "traditionalChinese":"信件內容 :"
		});
		//信件寄送成功
		setDictionary("Window_Immediate_Send_Succeed",
		{
		    "english":"Send Succeed",
		    "simplifiedChinese":"信件寄送成功",
		    "traditionalChinese":"信件寄送成功"
		});
		//信件寄送失敗
		setDictionary("Window_Immediate_Send_Fail",
		{
		    "english":"Send Succeed",
		    "simplifiedChinese":"信件寄送失败",
		    "traditionalChinese":"信件寄送失敗"
		});
		//信件寄送失敗
		setDictionary("Window_Immediate_Error1",
		{
		    "english":"Wrong Email Address.<br/>Please Update Condominium - End User Email",
		    "simplifiedChinese":"电子信箱错误<br/>请修改巡检单位-管委会信箱",
		    "traditionalChinese":"電子信箱錯誤<br/>請修改巡檢單位-管委會信箱"
		});
		//信件寄送失敗
		setDictionary("Window_Immediate_Error2",
		{
		    "english":"Wrong Email Account or Password.<br/>Please Update System - Setting",
		    "simplifiedChinese":"电子信箱帐号或密码错误<br/>请修改系统-参数设定",
		    "traditionalChinese":"電子信箱帳號或密碼錯誤<br/>請修改系統-參數設定"
		});
		//資料讀取中
		setDictionary("Immediate_Send_Loading",
		{
		    "english":"Loading...",
		    "simplifiedChinese":"资料读取中...",
		    "traditionalChinese":"資料讀取中..."
		});
	}
	//職位建檔
	new function()
	{
		//職位建檔較長的文字
		setDictionary("Create_Position_Info",
		{
		    "english":"Home>System>Create Position",
		    "simplifiedChinese":"首页>职位建档",
		    "traditionalChinese":"首頁>職位建檔"
		});
		//職位
		setDictionary("Create_Position_Position",
		{
		    "english":"Position",
		    "simplifiedChinese":"职位",
		    "traditionalChinese":"職位"
		});
		//職務描述
		setDictionary("Create_Position_Description",
		{
		    "english":"Description",
		    "simplifiedChinese":"职务描述",
		    "traditionalChinese":"職務描述"
		});
		//建檔日期
		setDictionary("Create_Position_Create_Date",
		{
		    "english":"Create Date",
		    "simplifiedChinese":"建档时间",
		    "traditionalChinese":"建檔日期"
		});
		//異動時間
		setDictionary("Create_Position_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//異動者
		setDictionary("Create_Position_Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者"
		});

		//職位
		setDictionary("Window_Create_Position_Position",
		{
		    "english":"Position :",
		    "simplifiedChinese":"职位 :",
		    "traditionalChinese":"職位 :"
		});
		//職務描述
		setDictionary("Window_Create_Position_Description",
		{
		    "english":"Description :",
		    "simplifiedChinese":"职务描述 :",
		    "traditionalChinese":"職務描述 :"
		});
		//建檔日期
		setDictionary("Window_Create_Position_Create_Date",
		{
		    "english":"Create Date :",
		    "simplifiedChinese":"建档时间 :",
		    "traditionalChinese":"建檔日期 :"
		});
		//異動時間
		setDictionary("Window_Create_Position_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//異動者
		setDictionary("Window_Create_Position_Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :"
		});

		//新增職位建檔
		setDictionary("Insert_Position",
		{
		    "english":"Insert Position",
		    "simplifiedChinese":"新增职位建档",
		    "traditionalChinese":"新增職位建檔"
		});
		//查詢職位建檔
		setDictionary("View_Position",
		{
		    "english":"View Position",
		    "simplifiedChinese":"查询职位建档",
		    "traditionalChinese":"查詢職位建檔"
		});
		//修改職位建檔
		setDictionary("Update_Position",
		{
		    "english":"Update Position",
		    "simplifiedChinese":"修改职位建档",
		    "traditionalChinese":"修改職位建檔"
		});
	}
	//使用者建檔
	new function()
	{
		//職位建檔較長的文字
		setDictionary("Create_User_Info",
		{
		    "english":"Home>System>Create User",
		    "simplifiedChinese":"首页>系统>使用者建档",
		    "traditionalChinese":"首頁>系統>使用者建檔"
		});
		//員工編號
		setDictionary("Create_User_User_ID",
		{
		    "english":"User ID",
		    "simplifiedChinese":"员工编号",
		    "traditionalChinese":"員工編號"
		});
		//員工姓名
		setDictionary("Create_User_User_Name",
		{
		    "english":"User Name",
		    "simplifiedChinese":"员工姓名",
		    "traditionalChinese":"員工姓名"
		});
		//員工職位
		setDictionary("Create_User_User_Position",
		{
		    "english":"User Position",
		    "simplifiedChinese":"员工职位",
		    "traditionalChinese":"員工職位"
		});
		//員工帳號
		setDictionary("Create_User_User_Account",
		{
		    "english":"User Account",
		    "simplifiedChinese":"员工帐号",
		    "traditionalChinese":"員工帳號"
		});
		//員工電話
		setDictionary("Create_User_User_Phone",
		{
		    "english":"User Phone",
		    "simplifiedChinese":"员工电话",
		    "traditionalChinese":"員工電話"
		});
		//員工權限
		setDictionary("Create_User_User_Permission",
		{
		    "english":"User Permission",
		    "simplifiedChinese":"员工权限",
		    "traditionalChinese":"員工權限"
		});
		//是否在職
		setDictionary("Create_User_User_Leaving",
		{
		    "english":"Is Leaving",
		    "simplifiedChinese":"是否在职",
		    "traditionalChinese":"是否在職"
		});
		//在職
		setDictionary("Create_User_User_Working",
		{
		    "english":"Working",
		    "simplifiedChinese":"在职",
		    "traditionalChinese":"在職"
		});
		//離職
		setDictionary("Create_User_User_Leaving",
		{
		    "english":"Leaving",
		    "simplifiedChinese":"离职",
		    "traditionalChinese":"離職"
		});
		//異動時間
		setDictionary("Create_User_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//異動者
		setDictionary("Create_User_Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者"
		});
		//最高權限
		setDictionary("Create_User_Max",
		{
		    "english":"Max",
		    "simplifiedChinese":"最高权限",
		    "traditionalChinese":"最高權限"
		});
		//巡檢單位主管
		setDictionary("Create_User_Supervisor",
		{
		    "english":"Supervisor",
		    "simplifiedChinese":"巡检单位主管",
		    "traditionalChinese":"巡檢單位主管"
		});
		//最低權限
		setDictionary("Create_User_Min",
		{
		    "english":"Min",
		    "simplifiedChinese":"最低权限",
		    "traditionalChinese":"最低權限"
		});

		//員工編號
		setDictionary("Window_Create_User_User_ID",
		{
		    "english":"User ID :",
		    "simplifiedChinese":"员工编号 :",
		    "traditionalChinese":"員工編號 :"
		});
		//員工姓名
		setDictionary("Window_Create_User_User_Name",
		{
		    "english":"User Name :",
		    "simplifiedChinese":"员工姓名 :",
		    "traditionalChinese":"員工姓名 :"
		});
		//員工職位
		setDictionary("Window_Create_User_User_Position",
		{
		    "english":"User Position :",
		    "simplifiedChinese":"员工职位 :",
		    "traditionalChinese":"員工職位 :"
		});
		//員工帳號
		setDictionary("Window_Create_User_User_Account",
		{
		    "english":"User Account :",
		    "simplifiedChinese":"员工帐号 :",
		    "traditionalChinese":"員工帳號 :"
		});
		//員工電話
		setDictionary("Window_Create_User_User_Phone",
		{
		    "english":"User Phone :",
		    "simplifiedChinese":"员工电话 :",
		    "traditionalChinese":"員工電話 :"
		});
		//員工權限
		setDictionary("Window_Create_User_User_Permission",
		{
		    "english":"User Permission :",
		    "simplifiedChinese":"员工权限 :",
		    "traditionalChinese":"員工權限 :"
		});
		//是否在職
		setDictionary("Window_Create_User_User_Leaving",
		{
		    "english":"Is Leaving :",
		    "simplifiedChinese":"是否在职 :",
		    "traditionalChinese":"是否在職 :"
		});
		//異動時間
		setDictionary("Window_Create_User_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//異動者
		setDictionary("Window_Create_User_Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :"
		});
		
		//新增使用者建檔
		setDictionary("Insert_User",
		{
		    "english":"View User",
		    "simplifiedChinese":"新增使用者建档",
		    "traditionalChinese":"新增使用者建檔"
		});
		//查詢使用者建檔
		setDictionary("View_User",
		{
		    "english":"View User",
		    "simplifiedChinese":"查询使用者建档",
		    "traditionalChinese":"查詢使用者建檔"
		});
		//修改使用者建檔
		setDictionary("Update_User",
		{
		    "english":"Update Position",
		    "simplifiedChinese":"修改使用者建档",
		    "traditionalChinese":"修改使用者建檔"
		});
	}
	//權限管理
	new function()
	{
		//權限管理較長的文字
		setDictionary("Permission_Info",
		{
		    "english":"Home>System>Permission",
		    "simplifiedChinese":"首页>系统>权限管理",
		    "traditionalChinese":"首頁>系統>權限管理"
		});
		//巡檢單位編號
		setDictionary("Permission_Condominium_ID",
		{
		    "english":"Condominium ID",
		    "simplifiedChinese":"巡检单位编号",
		    "traditionalChinese":"巡檢單位編號"
		});
		//巡檢單位
		setDictionary("Permission_Condominium",
		{
		    "english":"Condominium",
		    "simplifiedChinese":"巡检单位",
		    "traditionalChinese":"巡檢單位"
		});
		//管理人員
		setDictionary("Permission_Supervisor",
		{
		    "english":"Supervisor",
		    "simplifiedChinese":"管理人员",
		    "traditionalChinese":"管理人員"
		});

		//巡檢單位編號
		setDictionary("Window_Permission_Condominium_ID",
		{
		    "english":"Condominium ID :",
		    "simplifiedChinese":"巡检单位编号 :",
		    "traditionalChinese":"巡檢單位編號 :"
		});
		//巡檢單位
		setDictionary("Window_Permission_Condominium",
		{
		    "english":"Condominium :",
		    "simplifiedChinese":"巡检单位 :",
		    "traditionalChinese":"巡檢單位 :"
		});
		//管理人員
		setDictionary("Window_Permission_Supervisor",
		{
		    "english":"Supervisor :",
		    "simplifiedChinese":"管理人员 :",
		    "traditionalChinese":"管理人員 :"
		});

		//無
		setDictionary("Permission_None",
		{
		    "english":"None",
		    "simplifiedChinese":"无",
		    "traditionalChinese":"無"
		});
		//查詢權限管理
		setDictionary("View_Permission",
		{
		    "english":"View Permission",
		    "simplifiedChinese":"查询权限管理",
		    "traditionalChinese":"查詢權限管理"
		});
		//修改權限管理
		setDictionary("Update_Permission",
		{
		    "english":"Update Permission",
		    "simplifiedChinese":"修改权限管理",
		    "traditionalChinese":"修改權限管理"
		});
	}
	//參數設定
	new function()
	{
		//修改參數設定
		setDictionary("Update_Setting",
		{
		    "english":"Update Setting",
		    "simplifiedChinese":"修改参数设定",
		    "traditionalChinese":"修改參數設定"
		});
		//公司名稱
		setDictionary("Setting_Company_Name",
		{
		    "english":"Company_Name",
		    "simplifiedChinese":"公司名称",
		    "traditionalChinese":"公司名稱"
		});
		//信箱帳號
		setDictionary("Setting_Email_Account",
		{
		    "english":"Email_Account",
		    "simplifiedChinese":"信箱帐号",
		    "traditionalChinese":"信箱帳號"
		});
		//信箱密碼
		setDictionary("Setting_Email_Password",
		{
		    "english":"Email_Password",
		    "simplifiedChinese":"信箱密码",
		    "traditionalChinese":"信箱密碼"
		});
		//異動時間
		setDictionary("Setting_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//異動者
		setDictionary("Setting_Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者"
		});

		//公司名稱
		setDictionary("Window_Setting_Company_Name",
		{
		    "english":"Company_Name :",
		    "simplifiedChinese":"公司名称 :",
		    "traditionalChinese":"公司名稱 :"
		});
		//信箱帳號
		setDictionary("Window_Setting_Email_Account",
		{
		    "english":"Email_Account :",
		    "simplifiedChinese":"信箱帐号 :",
		    "traditionalChinese":"信箱帳號 :"
		});
		//信箱密碼
		setDictionary("Window_Setting_Email_Password",
		{
		    "english":"Email_Password :",
		    "simplifiedChinese":"信箱密码 :",
		    "traditionalChinese":"信箱密碼 :"
		});
		//異動時間
		setDictionary("Window_Setting_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//異動者
		setDictionary("Window_Setting_Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :"
		});
	}
	//修改密碼
	new function()
	{
		//修改密碼
		setDictionary("Window_Update_Password",
		{
		    "english":"Update Password",
		    "simplifiedChinese":"修改密码",
		    "traditionalChinese":"修改密碼"
		});
		//舊密碼
		setDictionary("Update_Old_Password",
		{
		    "english":"Old Password",
		    "simplifiedChinese":"旧密码",
		    "traditionalChinese":"舊密碼"
		});
		//新密碼
		setDictionary("Update_New_Password",
		{
		    "english":"New Password",
		    "simplifiedChinese":"新密码",
		    "traditionalChinese":"新密碼"
		});
		//舊密碼
		setDictionary("Window_Update_Old_Password",
		{
		    "english":"Old Password :",
		    "simplifiedChinese":"旧密码 :",
		    "traditionalChinese":"舊密碼 :"
		});
		//新密碼
		setDictionary("Window_Update_New_Password",
		{
		    "english":"New Password :",
		    "simplifiedChinese":"新密码 :",
		    "traditionalChinese":"新密碼 :"
		});
		//密碼修改成功<br/>請重新登入
		setDictionary("Update_Succeed",
		{
		    "english":"Update succeed.<br/>Please login again.",
		    "simplifiedChinese":"密码修改成功<br/>请重新登入",
		    "traditionalChinese":"密碼修改成功<br/>請重新登入"
		});
		//舊密碼錯誤
		setDictionary("Update_Wrong_Old_Passwrod",
		{
		    "english":"Wrong Old Password",
		    "simplifiedChinese":"旧密码错误",
		    "traditionalChinese":"舊密碼錯誤"
		});
		//密碼修改錯誤
		setDictionary("Update_Error",
		{
		    "english":"Update Error",
		    "simplifiedChinese":"密码修改错误",
		    "traditionalChinese":"密碼修改錯誤"
		});
	}
}
//設定文字內容
function setTranslate(englishDefind,callback)
{
	//字典存在檢查
	if(typeof(Dictionary[englishDefind]) == "undefined")
	{
		console.log(englishDefind + "不存在於字典中");
		return;
	}
	//永遠用繁體中文來翻譯
	var wordInChinese = Dictionary[englishDefind]["traditionalChinese"];
	var wordInEnglish = Dictionary[englishDefind]["english"];
	//需要被翻譯的可能不只一個
	var needTranslateObject = $("div:contains('" + wordInChinese + "'):not(:has(*))").filter(function()
	{
	    return $(this).text() === wordInChinese;
	});
	//如果需要翻譯的項目不存在 可能需要找 originalText 屬性取的最原始的文字
	if(needTranslateObject.length == 0)
	{
		needTranslateObject = $("div[originaltext='" + wordInChinese + "']:not(:has(*))").filter(function()
		{
		    return $(this).attr('originaltext') === wordInChinese;
		});
	}
	//迴圈檢視需要翻譯的項目
	for (var i = 0; i < needTranslateObject.length; i++)
	{
		//記錄暫存變數
		var temp = needTranslateObject.eq(i);
		//將原文字(繁體中文)記錄在div上 方便在被更改語言之後還能繼續翻譯
		if(temp.attr('originalText') == undefined)
		{
			//記錄原文字
			temp.attr('originalText',temp.text());			
		}
		//更改成翻譯過後的文字
		temp.html(getDictionary(englishDefind));
		//callback
		if(i == needTranslateObject.length - 1)
		{
			if(callback)
			{
				callback();
			}
		}
	}
	//例外翻譯狀況
	new function()
	{
		if($("#Mainpage_Header_Function_5").size())
		{
			$("#Mainpage_Header_Function_5").children().eq(0).text(getDictionary("Download"));
		}
	}
}
//取得字典
function getDictionary(englishDefind)
{
	try
	{
		return Dictionary[englishDefind][languageStatus];
	}
	catch(e)
	{
		console.log('錯誤',englishDefind,languageStatus);
	}
}
//設定字典
function setDictionary(englishDefind,defindObject)
{
	//設定特定語言對應翻譯
	Dictionary[englishDefind] = defindObject;
}
//開始翻譯 記錄哪些文字需要翻譯
function startTranslate(id,callback)
{
	//自動判斷字典內含哪些資料並運行
	$.each(Dictionary, function (key, val)
	{
	    if(typeof(val.func) != "undefined")
	    {
	    	if(val.func == id || val.func == "all")
	    	{
	    		//設定翻譯過後的文字
	    		setTranslate(key,callback);
	    		//翻譯完成後控制板面避免破圖
	    		setCss_AfterTranslate();
	    	}
	    }
	});
}
//翻譯完成後控制板面避免破圖
function setCss_AfterTranslate()
{
	//登入畫面
	if($("#Login_Content").size())
	{
		if(languageStatus == "english")
		{
			//CSS
			$("#Login_Content").css
			({
				"margin-left":"100px"
			});
		}
		else
		{
			//CSS
			$("#Login_Content").css
			({
				"margin-left":"120px"
			});
		}
	}
	if($("#Language_Group").size())
	{
		if(languageStatus == "english")
		{
			//CSS
			$("#Language_Label").css
			({
				"margin-left":"-8px"
			});
			//CSS
			$("#Language").css
			({
				"margin-left":"8px"
			});
		}
		else
		{
			//CSS
			$("#Language_Label").css
			({
				"margin-left":"0px"
			});
			//CSS
			$("#Language").css
			({
				"margin-left":"0px"
			});
		}
	}
	if($("#Password_Group").size())
	{
		if(languageStatus == "english")
		{
			//CSS
			$("#Password_Label").css
			({
				"margin-left":"-6px"
			});
			//CSS
			$("#Password").css
			({
				"margin-left":"6px"
			});
		}
		else
		{
			//CSS
			$("#Password_Label").css
			({
				"margin-left":"0px"
			});
			//CSS
			$("#Password").css
			({
				"margin-left":"0px"
			});
		}
	}
	//登入後上方
	if($("#Mainpage_Header_person_logout").size())
	{
		if(languageStatus == "english")
		{
			//CSS
			$("#Mainpage_Header_person_logout").css
			({
				"width":"60px",
				"margin-left":"-100px"
			});
		}
		else
		{
			//CSS
			$("#Mainpage_Header_person_logout").css
			({
				"width":"32px",
				"margin-left":"0px"
			});
		}
	}
	if($("#Mainpage_Header_person_changPassword").size())
	{
		if(languageStatus == "english")
		{
			//CSS
			$("#Mainpage_Header_person_changPassword").css
			({
				"width":"127px",
				"margin-left":"-20px"
			});
		}
		else
		{
			//CSS
			$("#Mainpage_Header_person_changPassword").css
			({
				"width":"60px",
				"margin-left":"15px"
			});
		}
	}
	if($("#Mainpage_Header_Function_2").size())
	{
		if(languageStatus == "english")
		{
			//CSS
			$("#Mainpage_Header_Function_2").css
			({
				"width":"92px"
			});
		}
		else
		{
			//CSS
			$("#Mainpage_Header_Function_2").css
			({
				"width":"62px"
			});
		}
	}
	if($("#Mainpage_Header_Function_5").size())
	{
		if(languageStatus == "english")
		{
			//CSS
			$("#Mainpage_Header_Function_5").css
			({
				"margin-left":"15px"
			});
		}
		else
		{
			//CSS
			$("#Mainpage_Header_Function_5").css
			({
				"margin-left":"0px"
			});
		}
	}
	//下方分頁資訊
	if($(".Mainpage_Main_Pagging input").size())
	{
		if(languageStatus == "english")
		{
			//CSS
			$(".Mainpage_Main_Pagging input").next().css('width','75px');
			$(".Mainpage_Main_Pagging input").css('margin-left','16px');
			$(".Mainpage_Main_Pagging input").prev().html("Page");
			$(".Mainpage_Main_Pagging input").next().html(", Total Page");
			$(".Mainpage_Main_Pagging input").next().next().next().css('display','none');
			$(".Mainpage_Main_Pagging .Record_0").html("From");
			$(".Mainpage_Main_Pagging .Record_0").css("right","110px");
			$(".Mainpage_Main_Pagging .Record_1").css("right","115px");
			$(".Mainpage_Main_Pagging .Record_2").html("To");
			$(".Mainpage_Main_Pagging .Record_2").css("right","105px");
			$(".Mainpage_Main_Pagging .Record_2").css("margin-top","14px");
			$(".Mainpage_Main_Pagging .Record_3").css("right","70px");
			$(".Mainpage_Main_Pagging .Record_4").html("Total");
			$(".Mainpage_Main_Pagging .Record_5").css("right","10px");
			$(".Mainpage_Main_Pagging .Record_6").css("display","none");
		}
		else
		{
			if(languageStatus == "simplifiedChinese")
			{
				
				$(".Mainpage_Main_Pagging input").next().html("页，共");
				$(".Mainpage_Main_Pagging .Record_0").html("纪录 : 从");
				$(".Mainpage_Main_Pagging .Record_6").html("笔");
			}
			else if(languageStatus == "traditionalChinese")
			{
				$(".Mainpage_Main_Pagging input").next().html("頁，共");
				$(".Mainpage_Main_Pagging .Record_0").html("紀錄 : 從");
				$(".Mainpage_Main_Pagging .Record_6").html("筆");
			}
			//CSS
			$(".Mainpage_Main_Pagging input").prev().html("第");
			$(".Mainpage_Main_Pagging .Record_4").html("共");
			$(".Mainpage_Main_Pagging input").next().css('width','40px');
			$(".Mainpage_Main_Pagging input").css('margin-left','0px');
			$(".Mainpage_Main_Pagging .Record_1").css("right","92px");
			$(".Mainpage_Main_Pagging .Record_2").html(" - ");
			$(".Mainpage_Main_Pagging .Record_2").css("right","89px");
			$(".Mainpage_Main_Pagging .Record_2").css("margin-top","13px");
			$(".Mainpage_Main_Pagging .Record_5").css("right","25px");
			$(".Mainpage_Main_Pagging .Record_6").css("display","block");
			$(".Mainpage_Main_Pagging input").next().next().next().css('display','block');
		}
	}
	//下拉式選單分頁資訊 偷懶沒寫可以自動轉換的
	if($(".Window_Pagging").size())
	{
		if(languageStatus == "english")
		{
			for (var i = 0; i < $(".Window_Pagging").length; i++)
			{
				$(".Window_Pagging").eq(i).prev().prev().html("Not loaded");
				$(".Window_Pagging").eq(i).children().eq(3).html("From");
				$(".Window_Pagging").eq(i).children().eq(3).css
				({
					"margin":"15px 0px 0px 10px"
				});
				$(".Window_Pagging").eq(i).children().eq(4).css
				({
					"margin":"15px 0px 0px -18px"
				});
				$(".Window_Pagging").eq(i).children().eq(5).html("To");
				$(".Window_Pagging").eq(i).children().eq(5).css
				({
					"margin":"15px 0px 0px 7px"
				});
				$(".Window_Pagging").eq(i).children().eq(6).css
				({
					"margin":"15px 0px 0px 15px"
				});
				$(".Window_Pagging").eq(i).children().eq(7).html("Total");
				$(".Window_Pagging").eq(i).children().eq(7).css
				({
					"margin":"15px 0px 0px 7px"
				});
				$(".Window_Pagging").eq(i).children().eq(8).css
				({
					"margin":"15px 0px 0px 15px"
				});
				$(".Window_Pagging").eq(i).children().eq(9).css
				({
					"display":"none"
				});
			}
		}
		else if(languageStatus == "simplifiedChinese")
		{
			for (var i = 0; i < $(".Window_Pagging").length; i++)
			{
				$(".Window_Pagging").eq(i).prev().prev().html("尚未载入");
				$(".Window_Pagging").eq(i).children().eq(3).html("纪录 : 从");
				$(".Window_Pagging").eq(i).children().eq(9).html("笔");
			}
		}
	}
	//巡檢單位資料建檔
	if($("#2_Stop_N").size())
	{
		if(languageStatus == "english")
		{
			$("#2_Stop_N").width(90);
		}
		else
		{
			$("#2_Stop_N").width(70);
		}
	}
	if($("#2_Stop_Y").size())
	{
		if(languageStatus == "english")
		{
			$("#2_Stop_Y").width(95);
		}
		else
		{
			$("#2_Stop_Y").width(70);
		}
	}
	if($("#Window_2").size())
	{
		if(languageStatus == "english")
		{
			//Window Css
			$("#Window_2_Body .Font.translateHtml").width(145);
			$("#Window_2_Body input").width("calc(100% - 150px)");
			$("#Window_2_Body select").width("calc(100% - 150px)");
		}
		else
		{
			//Window Css
			$("#Window_2_Body .Font.translateHtml").width(115);
			$("#Window_2_Body input").width("calc(100% - 120px)");
			$("#Window_2_Body select").width("calc(100% - 120px)");
		}
	}
}