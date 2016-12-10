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
		//使用者建檔
		setDictionary("Create User",
		{
		    "english":"Create User",
		    "simplifiedChinese":"使用者建档",
		    "traditionalChinese":"使用者建檔",
		    "func":"Mainpage_Header"
		});
		//客戶資料建檔
		setDictionary("Giga_Customer",
		{
		    "english":"Create Customer",
		    "simplifiedChinese":"客户资料建档",
		    "traditionalChinese":"客戶資料建檔",
		    "func":"Mainpage_Header"
		});
		//CPS型號建檔
		setDictionary("Giga_CPS Model",
		{
		    "english":"Create CPS Model",
		    "simplifiedChinese":"CPS型号建档",
		    "traditionalChinese":"CPS型號建檔",
		    "func":"Mainpage_Header"
		});
		//CPS資料建檔
		setDictionary("Giga_CPS_Data",
		{
		    "english":"Create CPS Data",
		    "simplifiedChinese":"CPS资料建档",
		    "traditionalChinese":"CPS資料建檔",
		    "func":"Mainpage_Header"
		});
		//客戶設備管理
		setDictionary("Giga_Device_Management",
		{
		    "english":"Device Management",
		    "simplifiedChinese":"客户设备管理",
		    "traditionalChinese":"客戶設備管理",
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
		//無CPS可選擇
		setDictionary("have no CPS can be selected.",
		{
		    "english":"Have no CPS can be selected.",
		    "simplifiedChinese":"无CPS可选择",
		    "traditionalChinese":"無CPS可選擇"
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
	//使用者建檔
	new function()
	{
		//使用者建檔
		setDictionary("Giga_Create_User_Info",
		{
		    "english":"Home>Create User",
		    "simplifiedChinese":"首页>使用者建档",
		    "traditionalChinese":"首頁>使用者建檔"
		});
		//員工編號
		setDictionary("Giga_Create_User_User_ID",
		{
		    "english":"User ID",
		    "simplifiedChinese":"员工编号",
		    "traditionalChinese":"員工編號"
		});
		//員工姓名
		setDictionary("Giga_Create_User_User_Name",
		{
		    "english":"User Name",
		    "simplifiedChinese":"员工姓名",
		    "traditionalChinese":"員工姓名"
		});
		//員工職位
		setDictionary("Giga_Create_User_User_Position",
		{
		    "english":"User Position",
		    "simplifiedChinese":"员工职位",
		    "traditionalChinese":"員工職位"
		});
		//員工帳號
		setDictionary("Giga_Create_User_User_Account",
		{
		    "english":"User Account",
		    "simplifiedChinese":"员工帐号",
		    "traditionalChinese":"員工帳號"
		});
		//員工電話
		setDictionary("Giga_Create_User_User_Phone",
		{
		    "english":"User Phone",
		    "simplifiedChinese":"员工电话",
		    "traditionalChinese":"員工電話"
		});
		//員工信箱
		setDictionary("Giga_Create_User_User_Email",
		{
		    "english":"User Email",
		    "simplifiedChinese":"员工信箱",
		    "traditionalChinese":"員工信箱"
		});
		//員工權限
		setDictionary("Giga_Create_User_User_Permission",
		{
		    "english":"User Permission",
		    "simplifiedChinese":"员工权限",
		    "traditionalChinese":"員工權限"
		});
		//是否在職
		setDictionary("Giga_Create_User_User_ifLeaving",
		{
		    "english":"Is Leaving",
		    "simplifiedChinese":"是否在职",
		    "traditionalChinese":"是否在職"
		});
		//在職
		setDictionary("Giga_Create_User_User_Working",
		{
		    "english":"Working",
		    "simplifiedChinese":"在职",
		    "traditionalChinese":"在職"
		});
		//離職
		setDictionary("Giga_Create_User_User_Leaving",
		{
		    "english":"Leaving",
		    "simplifiedChinese":"离职",
		    "traditionalChinese":"離職"
		});
		//異動時間
		setDictionary("Giga_Create_User_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//異動者
		setDictionary("Giga_Create_User_Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者"
		});
		//最高權限
		setDictionary("Giga_Create_User_Max",
		{
		    "english":"Max",
		    "simplifiedChinese":"最高权限",
		    "traditionalChinese":"最高權限"
		});
		//最低權限
		setDictionary("Giga_Create_User_Min",
		{
		    "english":"Min",
		    "simplifiedChinese":"最低权限",
		    "traditionalChinese":"最低權限"
		});

		//員工編號
		setDictionary("Window_Giga_Create_User_User_ID",
		{
		    "english":"User ID :",
		    "simplifiedChinese":"员工编号 :",
		    "traditionalChinese":"員工編號 :"
		});
		//員工姓名
		setDictionary("Window_Giga_Create_User_User_Name",
		{
		    "english":"User Name :",
		    "simplifiedChinese":"员工姓名 :",
		    "traditionalChinese":"員工姓名 :"
		});
		//員工職位
		setDictionary("Window_Giga_Create_User_User_Position",
		{
		    "english":"User Position :",
		    "simplifiedChinese":"员工职位 :",
		    "traditionalChinese":"員工職位 :"
		});
		//員工帳號
		setDictionary("Window_Giga_Create_User_User_Account",
		{
		    "english":"User Account :",
		    "simplifiedChinese":"员工帐号 :",
		    "traditionalChinese":"員工帳號 :"
		});
		//員工電話
		setDictionary("Window_Giga_Create_User_User_Phone",
		{
		    "english":"User Phone :",
		    "simplifiedChinese":"员工电话 :",
		    "traditionalChinese":"員工電話 :"
		});
		//員工信箱
		setDictionary("Window_Giga_Create_User_User_Email",
		{
		    "english":"User Email :",
		    "simplifiedChinese":"员工信箱 :",
		    "traditionalChinese":"員工信箱 :"
		});
		//員工權限
		setDictionary("Window_Giga_Create_User_User_Permission",
		{
		    "english":"User Permission :",
		    "simplifiedChinese":"员工权限 :",
		    "traditionalChinese":"員工權限 :"
		});
		//是否在職
		setDictionary("Window_Giga_Create_User_User_ifLeaving",
		{
		    "english":"Is Leaving :",
		    "simplifiedChinese":"是否在职 :",
		    "traditionalChinese":"是否在職 :"
		});
		//異動時間
		setDictionary("Window_Giga_Create_User_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//異動者
		setDictionary("Window_Giga_Create_User_Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :"
		});
		//新增使用者建檔
		setDictionary("Giga_Insert_User",
		{
		    "english":"Insert User",
		    "simplifiedChinese":"新增使用者建档",
		    "traditionalChinese":"新增使用者建檔"
		});
		//修改使用者建檔
		setDictionary("Giga_Update_User",
		{
		    "english":"Update User",
		    "simplifiedChinese":"修改使用者建档",
		    "traditionalChinese":"修改使用者建檔"
		});
		//查詢使用者建檔
		setDictionary("Giga_View_User",
		{
		    "english":"View User",
		    "simplifiedChinese":"查询使用者建档",
		    "traditionalChinese":"查詢使用者建檔"
		});
		//新增成功<br/>預設員工密碼為員工電話
		setDictionary("Giga_Insert_User_Succeed",
		{
		    "english":"Insert succeed<br/>Default password is user phone.",
		    "simplifiedChinese":"新增成功<br/>预设员工密码为员工电话",
		    "traditionalChinese":"新增成功<br/>預設員工密碼為員工電話"
		});
		//找不到或無法存取伺服器
		setDictionary("Giga_Server_Not_Found",
		{
		    "english":"Server not found or can't access.",
		    "simplifiedChinese":"找不到或无法存取伺服器",
		    "traditionalChinese":"找不到或無法存取伺服器"
		});
	}
	//客戶資料建檔
	new function()
	{
		//客戶資料建檔
		setDictionary("Giga_Customer_Info",
		{
		    "english":"Home>Create Customer",
		    "simplifiedChinese":"首页>客户资料建档",
		    "traditionalChinese":"首頁>客戶資料建檔"
		});
		//客戶編號
		setDictionary("Giga_Customer_ID",
		{
		    "english":"Customer ID",
		    "simplifiedChinese":"客户编号",
		    "traditionalChinese":"客戶編號"
		});
		//客戶姓名
		setDictionary("Giga_Customer_Name",
		{
		    "english":"Customer Name",
		    "simplifiedChinese":"客户姓名",
		    "traditionalChinese":"客戶姓名"
		});
		//客戶電話
		setDictionary("Giga_Customer_Phone",
		{
		    "english":"Customer Phone",
		    "simplifiedChinese":"客户电话",
		    "traditionalChinese":"客戶電話"
		});
		//客戶傳真
		setDictionary("Giga_Customer_Fax",
		{
		    "english":"Customer Fax",
		    "simplifiedChinese":"客户传真",
		    "traditionalChinese":"客戶傳真"
		});
		//客戶地址
		setDictionary("Giga_Customer_Address",
		{
		    "english":"Customer Address",
		    "simplifiedChinese":"客户地址",
		    "traditionalChinese":"客戶地址"
		});
		//公司負責人
		setDictionary("Giga_Customer_Responsible_Person",
		{
		    "english":"Responsible Person",
		    "simplifiedChinese":"公司负责人",
		    "traditionalChinese":"公司負責人"
		});
		//購買方式
		setDictionary("Giga_Customer_Purchase_Way",
		{
		    "english":"Purchase Way",
		    "simplifiedChinese":"购买方式",
		    "traditionalChinese":"購買方式"
		});
		//建立日期
		setDictionary("Giga_Customer_Create_Date",
		{
		    "english":"Create Date",
		    "simplifiedChinese":"建立日期",
		    "traditionalChinese":"建立日期"
		});
		//異動時間
		setDictionary("Giga_Create_User_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//異動者
		setDictionary("Giga_Create_User_Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者"
		});
		//資料庫網址
		setDictionary("Giga_Customer_DataBase_IP",
		{
		    "english":"DataBase IP",
		    "simplifiedChinese":"资料库网址",
		    "traditionalChinese":"資料庫網址"
		});
		//資料庫帳號
		setDictionary("Giga_Customer_DataBase_Account",
		{
		    "english":"DataBase Account",
		    "simplifiedChinese":"资料库帐号",
		    "traditionalChinese":"資料庫帳號"
		});
		//資料庫密碼
		setDictionary("Giga_Customer_DataBase_Password",
		{
		    "english":"DataBase Password",
		    "simplifiedChinese":"资料库密码",
		    "traditionalChinese":"資料庫密碼"
		});
		//租用起始
		setDictionary("Giga_Customer_Rent_Start",
		{
		    "english":"Rent Start",
		    "simplifiedChinese":"租用起始",
		    "traditionalChinese":"租用起始"
		});
		//租用結束
		setDictionary("Giga_Customer_Rent_End",
		{
		    "english":"Rent End",
		    "simplifiedChinese":"租用结束",
		    "traditionalChinese":"租用結束"
		});
		//是否啟用
		setDictionary("Giga_Customer_Is_Used",
		{
		    "english":"Is Used",
		    "simplifiedChinese":"是否启用",
		    "traditionalChinese":"是否啟用"
		});
		//啟用
		setDictionary("Giga_Customer_Used",
		{
		    "english":"Used",
		    "simplifiedChinese":"启用",
		    "traditionalChinese":"啟用"
		});
		//未啟用
		setDictionary("Giga_Customer_Not_Used",
		{
		    "english":"Not Used",
		    "simplifiedChinese":"未启用",
		    "traditionalChinese":"未啟用"
		});
		//備註
		setDictionary("Giga_Customer_Remarks",
		{
		    "english":"Remarks",
		    "simplifiedChinese":"备注",
		    "traditionalChinese":"備註"
		});
		//買斷
		setDictionary("Giga_Customer_Buy",
		{
		    "english":"Buy",
		    "simplifiedChinese":"买断",
		    "traditionalChinese":"買斷"
		});
		//租賃
		setDictionary("Giga_Customer_Rent",
		{
		    "english":"Rent",
		    "simplifiedChinese":"租赁",
		    "traditionalChinese":"租賃"
		});
		//客戶資料明細
		setDictionary("Giga_Customer_Detail",
		{
		    "english":"Customer Detail",
		    "simplifiedChinese":"客户资料明细",
		    "traditionalChinese":"客戶資料明細"
		});
		//點兩下看明細
		setDictionary("Giga_Customer_Double_Click_To_View_Detail",
		{
		    "english":"Double click to view detail.",
		    "simplifiedChinese":"点两下看明细",
		    "traditionalChinese":"點兩下看明細"
		});
		//不需填
		setDictionary("Giga_Customer_No_Need_To_Fill_In",
		{
		    "english":"No need to fill in.",
		    "simplifiedChinese":"不需填",
		    "traditionalChinese":"不需填"
		});

		//客戶編號
		setDictionary("Window_Giga_Customer_ID",
		{
		    "english":"Customer ID :",
		    "simplifiedChinese":"客户编号 :",
		    "traditionalChinese":"客戶編號 :"
		});
		//客戶姓名
		setDictionary("Window_Giga_Customer_Name",
		{
		    "english":"Customer Name :",
		    "simplifiedChinese":"客户姓名 :",
		    "traditionalChinese":"客戶姓名 :"
		});
		//客戶電話
		setDictionary("Window_Giga_Customer_Phone",
		{
		    "english":"Customer Phone :",
		    "simplifiedChinese":"客户电话 :",
		    "traditionalChinese":"客戶電話 :"
		});
		//客戶傳真
		setDictionary("Window_Giga_Customer_Fax",
		{
		    "english":"Customer Fax :",
		    "simplifiedChinese":"客户传真 :",
		    "traditionalChinese":"客戶傳真 :"
		});
		//客戶地址
		setDictionary("Window_Giga_Customer_Address",
		{
		    "english":"Customer Address :",
		    "simplifiedChinese":"客户地址 :",
		    "traditionalChinese":"客戶地址 :"
		});
		//公司負責人
		setDictionary("Window_Giga_Customer_Responsible_Person",
		{
		    "english":"Responsible Person :",
		    "simplifiedChinese":"公司负责人 :",
		    "traditionalChinese":"公司負責人 :"
		});
		//購買方式
		setDictionary("Window_Giga_Customer_Purchase_Way",
		{
		    "english":"Purchase Way :",
		    "simplifiedChinese":"购买方式 :",
		    "traditionalChinese":"購買方式 :"
		});
		//資料庫網址
		setDictionary("Window_Giga_Customer_DataBase_IP",
		{
		    "english":"DataBase IP :",
		    "simplifiedChinese":"资料库网址 :",
		    "traditionalChinese":"資料庫網址 :"
		});
		//資料庫帳號
		setDictionary("Window_Giga_Customer_DataBase_Account",
		{
		    "english":"DataBase Account :",
		    "simplifiedChinese":"资料库帐号 :",
		    "traditionalChinese":"資料庫帳號 :"
		});
		//資料庫密碼
		setDictionary("Window_Giga_Customer_DataBase_Password",
		{
		    "english":"DataBase Password :",
		    "simplifiedChinese":"资料库密码 :",
		    "traditionalChinese":"資料庫密碼 :"
		});
		//租用起始
		setDictionary("Window_Giga_Customer_Rent_Start",
		{
		    "english":"Rent Start :",
		    "simplifiedChinese":"租用起始 :",
		    "traditionalChinese":"租用起始 :"
		});
		//租用結束
		setDictionary("Window_Giga_Customer_Rent_End",
		{
		    "english":"Rent End :",
		    "simplifiedChinese":"租用结束 :",
		    "traditionalChinese":"租用結束 :"
		});
		//是否啟用
		setDictionary("Window_Giga_Customer_Is_Used",
		{
		    "english":"Is Used :",
		    "simplifiedChinese":"是否启用 :",
		    "traditionalChinese":"是否啟用 :"
		});
		//備註
		setDictionary("Window_Giga_Customer_Remarks",
		{
		    "english":"Remarks :",
		    "simplifiedChinese":"备注 :",
		    "traditionalChinese":"備註 :"
		});
		//建立日期
		setDictionary("Window_Giga_Customer_Create_Date",
		{
		    "english":"Create Date :",
		    "simplifiedChinese":"建立日期 :",
		    "traditionalChinese":"建立日期 :"
		});
		//異動時間
		setDictionary("Window_Giga_Customer_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//異動者
		setDictionary("Window_Giga_Customer_Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :"
		});

		//新增客戶設備管理
		setDictionary("Insert_Giga_Customer",
		{
		    "english":"Insert Customer",
		    "simplifiedChinese":"新增客户设备管理",
		    "traditionalChinese":"新增客戶設備管理"
		});
		//查詢客戶設備管理
		setDictionary("View_Giga_Customer",
		{
		    "english":"View Customer",
		    "simplifiedChinese":"查询客户设备管理",
		    "traditionalChinese":"查詢客戶設備管理"
		});
		//修改客戶設備管理
		setDictionary("Update_Giga_Customer",
		{
		    "english":"Update Customer",
		    "simplifiedChinese":"修改客户设备管理",
		    "traditionalChinese":"修改客戶設備管理"
		});
	}
	//CPS型號建檔
	new function()
	{
		//首頁>CPS型號建檔
		setDictionary("Giga_CPS_Model_Info",
		{
		    "english":"Home>Create CPS Model",
		    "simplifiedChinese":"首页>CPS型号建档",
		    "traditionalChinese":"首頁>CPS型號建檔"
		});
		//型號編號
		setDictionary("Giga_CPS_Model_ID",
		{
		    "english":"CPS Model ID",
		    "simplifiedChinese":"CPS型号编号",
		    "traditionalChinese":"CPS型號編號"
		});
		//型號名稱
		setDictionary("Giga_CPS_Model_Name",
		{
		    "english":"CPS Model Name",
		    "simplifiedChinese":"CPS型号名称",
		    "traditionalChinese":"CPS型號名稱"
		});

		//型號編號
		setDictionary("Window_Giga_CPS_Model_ID",
		{
		    "english":"CPS Model ID :",
		    "simplifiedChinese":"CPS型号编号 :",
		    "traditionalChinese":"CPS型號編號 :"
		});
		//型號名稱
		setDictionary("Window_Giga_CPS_Model_Name",
		{
		    "english":"CPS Model Name :",
		    "simplifiedChinese":"CPS型号名称 :",
		    "traditionalChinese":"CPS型號名稱 :"
		});

		//新增CPS型號建檔
		setDictionary("Insert_Giga_CPS_Model",
		{
		    "english":"Insert CPS Model",
		    "simplifiedChinese":"新增CPS型号建档",
		    "traditionalChinese":"新增CPS型號建檔"
		});
		//查詢CPS型號建檔
		setDictionary("View_Giga_CPS_Model",
		{
		    "english":"View CPS Model",
		    "simplifiedChinese":"查询CPS型号建档",
		    "traditionalChinese":"查詢CPS型號建檔"
		});
		//修改CPS型號建檔
		setDictionary("Update_Giga_CPS_Model",
		{
		    "english":"Update CPS Model",
		    "simplifiedChinese":"修改CPS型号建档",
		    "traditionalChinese":"修改CPS型號建檔"
		});
	}
	//CPS資料建檔
	new function()
	{
		//首頁>CPS資料建檔
		setDictionary("Giga_CPS_Data_Info",
		{
		    "english":"Home>Create CPS Data",
		    "simplifiedChinese":"首页>CPS资料建档",
		    "traditionalChinese":"首頁>CPS資料建檔"
		});
		//CPS型號編號
		setDictionary("Giga_CPS_Data_Model_ID",
		{
		    "english":"CPS Model ID",
		    "simplifiedChinese":"CPS型号编号",
		    "traditionalChinese":"CPS型號編號"
		});
		//CPS型號名稱
		setDictionary("Giga_CPS_Data_Model_Name",
		{
		    "english":"CPS Model Name",
		    "simplifiedChinese":"CPS型号名称",
		    "traditionalChinese":"CPS型號名稱"
		});
		//CPS編號
		setDictionary("Giga_CPS_Data_ID",
		{
		    "english":"CPS ID",
		    "simplifiedChinese":"CPS编号",
		    "traditionalChinese":"CPS編號"
		});
		//出貨日期
		setDictionary("Giga_CPS_Sale_Date",
		{
		    "english":"Sale Date",
		    "simplifiedChinese":"出货日期",
		    "traditionalChinese":"出貨日期"
		});
		//是否啟用
		setDictionary("Giga_CPS_Is_Used",
		{
		    "english":"Is Used",
		    "simplifiedChinese":"是否启用",
		    "traditionalChinese":"是否啟用"
		});
		//啟用
		setDictionary("Giga_CPS_Used",
		{
		    "english":"Used",
		    "simplifiedChinese":"启用",
		    "traditionalChinese":"啟用"
		});
		//未啟用
		setDictionary("Giga_CPS_Not_Used",
		{
		    "english":"Not Used",
		    "simplifiedChinese":"未启用",
		    "traditionalChinese":"未啟用"
		});
		//備註
		setDictionary("Giga_CPS_Remarks",
		{
		    "english":"Remarks",
		    "simplifiedChinese":"备注",
		    "traditionalChinese":"備註"
		});
		//異動時間
		setDictionary("Giga_CPS_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//異動者
		setDictionary("Giga_CPS_Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者"
		});

		//CPS型號編號
		setDictionary("Window_Giga_CPS_Data_Model_ID",
		{
		    "english":"CPS Model ID :",
		    "simplifiedChinese":"CPS型号编号 :",
		    "traditionalChinese":"CPS型號編號 :"
		});
		//型號名稱
		setDictionary("Window_Giga_CPS_Data_Model_Name",
		{
		    "english":"CPS Model Name :",
		    "simplifiedChinese":"CPS型号名称 :",
		    "traditionalChinese":"CPS型號名稱 :"
		});
		//CPS編號
		setDictionary("Window_Giga_CPS_Data_ID",
		{
		    "english":"CPS ID :",
		    "simplifiedChinese":"CPS编号 :",
		    "traditionalChinese":"CPS編號 :"
		});
		//出貨日期
		setDictionary("Window_Giga_CPS_Sale_Date",
		{
		    "english":"Sale Date :",
		    "simplifiedChinese":"出货日期 :",
		    "traditionalChinese":"出貨日期 :"
		});
		//是否啟用
		setDictionary("Window_Giga_CPS_Is_Used",
		{
		    "english":"Is Used :",
		    "simplifiedChinese":"是否启用 :",
		    "traditionalChinese":"是否啟用 :"
		});
		//備註
		setDictionary("Window_Giga_CPS_Remarks",
		{
		    "english":"Remarks :",
		    "simplifiedChinese":"备注 :",
		    "traditionalChinese":"備註 :"
		});
		//異動時間
		setDictionary("Window_Giga_CPS_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//異動者
		setDictionary("Window_Giga_CPS_Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :"
		});
		//新增CPS資料建檔
		setDictionary("Insert_Giga_CPS",
		{
		    "english":"Insert Giga CPS",
		    "simplifiedChinese":"新增CPS资料建档",
		    "traditionalChinese":"新增CPS資料建檔"
		});
		//查詢CPS資料建檔
		setDictionary("View_Giga_CPS",
		{
		    "english":"View Giga CPS",
		    "simplifiedChinese":"查询CPS资料建档",
		    "traditionalChinese":"查詢CPS資料建檔"
		});
		//修改CPS資料建檔
		setDictionary("Update_Giga_CPS",
		{
		    "english":"Update Giga CPS",
		    "simplifiedChinese":"修改CPS资料建档",
		    "traditionalChinese":"修改CPS資料建檔"
		});
	}
	//客戶設備管理
	new function()
	{
		//首頁>客戶設備管理
		setDictionary("Giga_Device_Management_Info",
		{
		    "english":"Home>Device Management",
		    "simplifiedChinese":"首页>客户设备管理",
		    "traditionalChinese":"首頁>客戶設備管理"
		});
		//客戶編號
		setDictionary("Giga_Device_Management_Customer_ID",
		{
		    "english":"Customer ID",
		    "simplifiedChinese":"客户编号",
		    "traditionalChinese":"客戶編號"
		});
		//客戶名稱
		setDictionary("Giga_Device_Management_Customer_Name",
		{
		    "english":"Customer Name",
		    "simplifiedChinese":"客户名称",
		    "traditionalChinese":"客戶名稱"
		});
		//CPS型號編號
		setDictionary("Giga_Device_Management_Model_ID",
		{
		    "english":"CPS Model ID",
		    "simplifiedChinese":"CPS型号编号",
		    "traditionalChinese":"CPS型號編號"
		});
		//CPS型號名稱
		setDictionary("Giga_Device_Management_Model_Name",
		{
		    "english":"CPS Model Name",
		    "simplifiedChinese":"CPS型号名称",
		    "traditionalChinese":"CPS型號名稱"
		});
		//CPS編號
		setDictionary("Giga_Device_Management_ID",
		{
		    "english":"CPS ID",
		    "simplifiedChinese":"CPS编号",
		    "traditionalChinese":"CPS編號"
		});
		//出貨日期
		setDictionary("Giga_Device_Management_Sale_Date",
		{
		    "english":"Sale Date",
		    "simplifiedChinese":"出货日期",
		    "traditionalChinese":"出貨日期"
		});
		//異動時間
		setDictionary("Giga_Device_Management_Update_Date",
		{
		    "english":"Update Date",
		    "simplifiedChinese":"异动时间",
		    "traditionalChinese":"異動時間"
		});
		//異動者
		setDictionary("Giga_Device_Management_Update_Person",
		{
		    "english":"Update Person",
		    "simplifiedChinese":"异动者",
		    "traditionalChinese":"異動者"
		});

		//客戶名稱
		setDictionary("Window_Giga_Device_Management_Customer_Name",
		{
		    "english":"Customer Name :",
		    "simplifiedChinese":"客户名称 :",
		    "traditionalChinese":"客戶名稱 :"
		});
		//CPS型號名稱
		setDictionary("Window_Giga_Device_Management_Model_Name",
		{
		    "english":"CPS Model Name :",
		    "simplifiedChinese":"CPS型号名称 :",
		    "traditionalChinese":"CPS型號名稱 :"
		});
		//CPS編號
		setDictionary("Window_Giga_Device_Management_ID",
		{
		    "english":"CPS ID :",
		    "simplifiedChinese":"CPS编号 :",
		    "traditionalChinese":"CPS編號 :"
		});
		//異動時間
		setDictionary("Window_Giga_Device_Management_Update_Date",
		{
		    "english":"Update Date :",
		    "simplifiedChinese":"异动时间 :",
		    "traditionalChinese":"異動時間 :"
		});
		//異動者
		setDictionary("Window_Giga_Device_Management_Update_Person",
		{
		    "english":"Update Person :",
		    "simplifiedChinese":"异动者 :",
		    "traditionalChinese":"異動者 :"
		});

		//新增客戶設備管理
		setDictionary("Insert_Giga_Device_Management",
		{
		    "english":"Insert Device Management",
		    "simplifiedChinese":"新增客户设备管理",
		    "traditionalChinese":"新增客戶設備管理"
		});
		//查詢客戶設備管理
		setDictionary("View_Giga_Device_Management",
		{
		    "english":"View Device Management",
		    "simplifiedChinese":"查询客户设备管理",
		    "traditionalChinese":"查詢客戶設備管理"
		});
		//修改客戶設備管理
		setDictionary("Delete_Giga_Device_Management",
		{
		    "english":"Delete Device Management",
		    "simplifiedChinese":"修改客户设备管理",
		    "traditionalChinese":"修改客戶設備管理"
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