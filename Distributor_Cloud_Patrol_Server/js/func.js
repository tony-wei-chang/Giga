//是否顯示錯誤訊息
var App_Debug = true;
//除了工單頁面 其他頁面的物件
var GridPanel_Object = {};
//下拉式選單搜尋功能
var comboboxSearchable = false;
//下拉式選單沒資料的時候顯示的列數
var comboboxNondata_Row = 1;

//物件水平垂直置中
jQuery.fn.center = function()
{
    try
	{
		this.css("position","absolute");
		this.css("top", Math.max(0,(($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
		this.css("left", Math.max(0,(($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
		return this;
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}
	}
}
//設定物件模糊效果
function addBlur_Css(id)
{
	try
	{
		if($('#'+id))
		{
			$('#'+id).addClass("Dom_Blur");
		}
	}
	catch(err)
	{
		console.log(err);
	}
}
//取消物件模糊效果
function removeBlur_Css(id)
{
	try
	{
		if($('#'+id))
		{
			$('#'+id).removeClass("Dom_Blur");
		}
	}
	catch(err)
	{
		console.log(err);
	}
}
//取得日期
function getDate(date,string)
{
	try
	{
		if(date)
		{
			var d = new Date(date);

			var month = d.getMonth()+1;
			var day = d.getDate();

			var output = d.getFullYear() + string +
				(month<10 ? '0' : '') + month + string +
				(day<10 ? '0' : '') + day;
			return output;
		}
		else
		{
			return ' ';
		}
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}		
	}
}
//取得時間到秒
function getTimeSecond(date,string)
{
	try
	{
		if(date)
		{
			var d = new Date(date);

			var hours = d.getHours();
			var minutes = d.getMinutes();
			var seconds = d.getSeconds();

			var output = (hours<10 ? '0' : '') + hours + string +
				(minutes<10 ? '0' : '') + minutes + string +
				(seconds<10 ? '0' : '') + seconds;
			return output;
		}
		else
		{
			return ' ';
		}
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}		
	}
}
//取得時間
function getTime(date)
{
	try
	{
		if(date)
		{
			var d = new Date(date);

			var hours = d.getHours();
			var minutes = d.getMinutes();
			var seconds = d.getSeconds();

			var output = (hours<10 ? '0' : '') + hours + ':' +
				(minutes<10 ? '0' : '') + minutes;/* + ':' +
				(seconds<10 ? '0' : '') + seconds;*/
			return output;
		}
		else
		{
			return ' ';
		}
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}		
	}
}
//取得星期名稱
function getWeekday(date)
{
	try
	{
		if(date)
		{
			var d = new Date(date);

			var weekday = new Array(7);
			weekday[0] = "星期日";
			weekday[1] = "星期一";
			weekday[2] = "星期二";
			weekday[3] = "星期三";
			weekday[4] = "星期四";
			weekday[5] = "星期五";
			weekday[6] = "星期六";

			return weekday[d.getUTCDay()];
		}
		else
		{
			return ' ';
		}
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}		
	} 
}
//Ajax Get 共用
function jqueryAjax_Get(url,successFunc,errorFunc,failFunc)
{
	try
	{
		$.ajax
		({
			url:url,
			type:"GET",
			beforeSend:function(xhr)
			{
				// xhr.setRequestHeader("Content-Type","application/json");
				if(typeof(Authorization) != "undefined")
				{
					xhr.setRequestHeader("Authorization",Authorization);
				}
			},
			success:function(result)
			{
				successFunc(result);
			},
			error:function(jqXHR, textStatus, errorThrown)
			{
				if(errorFunc != null)
				{
					errorFunc(JSON.parse(jqXHR.responseText));
				}
			}
		}).fail(function()
		{
			if(failFunc != null)
			{
				failFunc();
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
}
//Ajax Post 共用
function jqueryAjax_Post(url,data,successFunc,errorFunc,failFunc)
{
	try
	{
		if(url.indexOf("guard_case") != -1 && url.indexOf("Select_Distributor") != -1)
		{
			var data = (data == "" || data == null)?{}:JSON.parse(data);
			if(typeof(data.stop) == "undefined")
			{
				data.stop = "N";
			}
			var data = JSON.stringify(data);
		}
		if(data == "" || data == " ")
		{
			data = undefined;
		}
		$.ajax
		({
			url:url,
			type:"POST",
			data:data,
			beforeSend:function(xhr)
			{
				// xhr.setRequestHeader("Content-Type","application/json");
				if(typeof(Authorization) != "undefined")
				{
					xhr.setRequestHeader("Authorization",Authorization);
				}
			},
			success:function(result)
			{
				if(successFunc)
				{
					successFunc(result);
				}
			},
			error:function(jqXHR, textStatus, errorThrown)
			{
				if(errorFunc != null)
				{
					errorFunc(JSON.parse(jqXHR.responseText));
				}
			}
		}).fail(function()
		{
			if(failFunc != null)
			{
				failFunc();
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
}
//Ajax Delete 共用
function jqueryAjax_Delete(url,data,successFunc,errorFunc,failFunc)
{
	try
	{
		$.ajax
		({
			url:url,
			type:"Delete",
			data:data,
			beforeSend:function(xhr)
			{
				xhr.setRequestHeader("Content-Type","application/json");
				xhr.setRequestHeader("Authorization","JAUTH "+localStorage.Auth);
			},
			success:function(result)
			{
				if(successFunc)
				{
					successFunc(result);
				}
			},
			error:function(jqXHR, textStatus, errorThrown)
			{
				if(JSON.parse(jqXHR.responseText).message == "憑證失效")
				{
					var ajaxMsg = showMsg("錯誤",allFunc_Language["Login_Timeout"][languageStatus],null,function()
					{
						location.reload();
					})
					//隱藏 No 按鈕
					$('#YesNo_Msg_No').css("display","none");
					//置中 Yes 按鈕
					$('#YesNo_Msg_Yes').css({"margin-left":"4px","width":"97%"});
				}
				else
				{
					if(errorFunc)
					{
						errorFunc(JSON.parse(jqXHR.responseText));
					}
				}
			}
		}).fail(function()
		{
			if(failFunc != null)
			{
				failFunc();
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
}
//Ajax Put 共用
function jqueryAjax_Put(url,data,successFunc,errorFunc,failFunc)
{
	try
	{
		$.ajax
		({
			url:url,
			type:"Put",
			data:data,
			beforeSend:function(xhr)
			{
				xhr.setRequestHeader("Content-Type","application/json");
				xhr.setRequestHeader("Authorization","JAUTH "+localStorage.Auth);
			},
			success:function(result)
			{
				if(successFunc)
				{
					successFunc(result);
				}
			},
			error:function(jqXHR, textStatus, errorThrown)
			{
				if(JSON.parse(jqXHR.responseText).message == "憑證失效")
				{
					var ajaxMsg = showMsg("錯誤",allFunc_Language["Login_Timeout"][languageStatus],null,function()
					{
						location.reload();
					})
					//隱藏 No 按鈕
					$('#YesNo_Msg_No').css("display","none");
					//置中 Yes 按鈕
					$('#YesNo_Msg_Yes').css({"margin-left":"4px","width":"97%"});
				}
				else
				{
					if(errorFunc)
					{
						errorFunc(JSON.parse(jqXHR.responseText));
					}
				}
			}
		}).fail(function()
		{
			if(failFunc != null)
			{
				failFunc();
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
}
//產生Menu 選項
function createMainpage_Menu(Menu_Array)
{
	try
	{
		//Menu 參數
		var Title = Menu_Array.Title;
		var Id = Menu_Array.Id;
		//Title 沒有重複
		if(!checkMenu_Title(Title))
		{
			//新增Menu
			$('.Mainpage_Section_Outer').append
			(
				'<div class="Mainpage_Section">'+
					'<div id="Mainpage_Menu_Title_' + Id + '">'+
						'<div class="Mainpage_Menu_Title" myId="' + Title + '">' + Title + '</div>'+
					'</div>'+
					'<div id="Menu_' + Id + '_Outer">'+
						'<div class="Mainpage_Menu_Content" id="Menu_' + Id + '">'+
						'</div>'+
					'</div>'+
				'</div>'
			);
			//CSS
			$(".Mainpage_Menu_div").css
			({
				"height":"20px",
				"width":"30px",
				"margin":"5px 0px 0px 5px",
				"border-radius":"30px / 20px",
				"float":"left"
			});
		}
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}
	}
}
//確認 Title 是否有重複
function checkMenu_Title(Title)
{
	if($('.Mainpage_Menu_Title').length == 0)
	{
		return false;
	}
	else
	{
		oldArray = [];
		for(var i = 0; i < $('.Mainpage_Menu_Title').length; i++)
		{
			oldArray.push($('.Mainpage_Menu_Title').eq(i).text());
		};
		if(oldArray.indexOf(Title) == -1)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}
//顯示視窗 共用
function showMsg(title,content,No_Func,Yes_Func)
{
	try
	{
		//建立 YesNo_Msg
		var YesNo_Msg = YesNo_Msg_Define.Initialize();
		YesNo_Msg.setMask(true);
		YesNo_Msg.setSmartdetect(true);
		YesNo_Msg.setWidth(300);
		YesNo_Msg.setHeight(168);
		YesNo_Msg.setId('YesNo_Msg');
		YesNo_Msg.setTitle(title);
		YesNo_Msg.show();
		YesNo_Msg.addMsgContent(content);
		YesNo_Msg.addYesNO_Button(getDictionary('Cancel'),getDictionary('Comfirm'),
		//No
		function()
		{
			if(No_Func)
			{
				No_Func();
			}
		},
		//Yes
		function()
		{
			if(Yes_Func)
			{
				Yes_Func();
			}
		});
		//開啟物化效果
		addBlur_Css('Mainpage');
		//Debug
		$('#YesNo_Msg').css('z-index',100);
		$('#YesNo_Msg_Mask').css('z-index',99);
		//回傳自己
		return YesNo_Msg;
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}
	}
}
//預設訊息視窗 保留螢幕霧化效果
function showMsg_WithMask(title,content)
{
	var Msg_WithMask = showMsg(title,content,function()
	{
		Msg_WithMask.close();
	},function()
	{
		Msg_WithMask.close();
	});
	//複寫方法 保留物化效果
	Msg_WithMask.close = function()
	{
		var ID = Msg_WithMask.getId();
		//移除 Mask
		(Msg_WithMask.getMask())?$('#' + ID + '_Mask').remove():'';
		//移除 Window Resize 監聽
		Msg_WithMask.endResize();
		//智慧偵測 Ese->No Enter->Yes
		if(Msg_WithMask.getSmartdetect())
		{
			Msg_WithMask.endSmartdetect();
		}
		//移除物件
		$('#' + ID).remove();
		//移除可能出現的 loading Mask
		if($("#" + Msg_WithMask.getId() + "_loadingMask").size() != 0)
		{
			$("#" + Msg_WithMask.getId() + "_loadingMask").remove();
		}
	};
	//隱藏 No 按鈕
	$('#YesNo_Msg_No').css("display","none");
	//置中 Yes 按鈕
	$('#YesNo_Msg_Yes').css({"margin-left":"4px","width":"97%"});
	//回傳
	return Msg_WithMask;
}
//預設錯誤訊息視窗
function normalError_Msg(content)
{
	var errorMsg = showMsg(getDictionary('Error'),content,function()
	{
		errorMsg.close();
	},function()
	{
		errorMsg.close();
	});
	//隱藏 No 按鈕
	$('#YesNo_Msg_No').css("display","none");
	//置中 Yes 按鈕
	$('#YesNo_Msg_Yes').css({"margin-left":"4px","width":"97%"});
	//回傳
	return errorMsg;
}
//預設錯誤訊息視窗 保留螢幕霧化效果
function normalError_Msg_Withmask(content)
{
	var errorMsg = showMsg(getDictionary('Error'),content,function()
	{
		errorMsg.close();
		//開啟霧化效果
		addBlur_Css('Mainpage');
	},function()
	{
		errorMsg.close();
		//開啟霧化效果
		addBlur_Css('Mainpage');
	});
	errorMsg.close = function()
	{
		var ID = this.getId();
		//移除 Mask
		(this.getMask())?$('#' + ID + '_Mask').remove():'';
		//移除 Window Resize 監聽
		this.endResize();
		//智慧偵測 Ese->No Enter->Yes
		if(this.getSmartdetect())
		{
			this.endSmartdetect();
		}
		//移除物件
		$('#' + ID).remove();
	};
	//隱藏 No 按鈕
	$('#YesNo_Msg_No').css("display","none");
	//置中 Yes 按鈕
	$('#YesNo_Msg_Yes').css({"margin-left":"4px","width":"97%"});
	//回傳
	return errorMsg;
}
//預設錯誤訊息視窗
function normalSucceed_Msg(content)
{
	var errorMsg = showMsg(getDictionary('Success'),content,function()
	{
		errorMsg.close()
	},function()
	{
		errorMsg.close()
	});
	//隱藏 No 按鈕
	$('#YesNo_Msg_No').css("display","none");
	//置中 Yes 按鈕
	$('#YesNo_Msg_Yes').css({"margin-left":"4px","width":"97%"});
	//回傳
	return errorMsg;
}
//預設錯誤訊息視窗 保留螢幕霧化效果
function normalSucceed_Msg_Withmask(content)
{
	var Succeed_Msg = showMsg(getDictionary('Success'),content,function()
	{
		Succeed_Msg.close();
		//開啟霧化效果
		addBlur_Css('Mainpage');
	},function()
	{
		Succeed_Msg.close();
		//開啟霧化效果
		addBlur_Css('Mainpage');
	});
	//隱藏 No 按鈕
	$('#YesNo_Msg_No').css("display","none");
	//置中 Yes 按鈕
	$('#YesNo_Msg_Yes').css({"margin-left":"4px","width":"97%"});
	//回傳
	return Succeed_Msg;
}
//新增 tab
function addTab(id,label)
{
	try
	{
		//顏色
		var color = ';';
		var a_color = ';';
		//不重複新增
		if($('#' + id + '_a').size() == 0)
		{
			//tab 樣版
			var tabTemplate = "<li id='" + id + "_li' title='" + label + "' style='" + color + "margin-top:-3px;margin-left:0.1px;'><a style='" + a_color + "height:calc(100% - 10px);' href='#{href}' id='" + id + "_a'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>";
			//tab 名字
			var label = label;
			//tab 編號
			var id = id;
			//tab li樣版
			var li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) );
			//新增 tab 
			$("#tabs").tabs().find(".ui-tabs-nav").append(li);
			$("#tabs").tabs().append("<div id='" + id + "'></div>");
			$("#tabs").tabs().tabs("refresh");
			//主動開啟 tab
			$('#' + id + "_a").click();
			//更改內容頁 css
			$('#' + id).css
			({
				"height":"calc(100% - 31px)",
				"padding":"0px",
	    		"margin-left":"-2px"
			});
		}
		//已新增過 開啟 tab
		else
		{
			//主動開啟 tab
			$('#' + id + "_a").click();
		}
		//新增滑鼠中鍵關閉分頁
		$("#" + id + "_li").click(function(e)
		{
			//滑鼠中鍵
			if(e.which == 2)
			{
				//正在開啟的上一頁編號
				var prevPageID = ($("#tabs .ui-state-active").prev().attr('id') == "HomeTab")?$("#tabs .ui-state-active").attr('id'):($("#tabs .ui-state-active").prev().attr('id') != undefined)?$("#tabs .ui-state-active").prev().attr('id').replace('_li',''):null;
				//正在開啟的頁面編號
				var currentPageID = ($("#tabs .ui-state-active").attr('id') == "HomeTab")?$("#tabs .ui-state-active").attr('id'):$("#tabs .ui-state-active").attr('id').replace('_li','');
				//正在開啟的下一頁編號
				var nextPageID = ($("#tabs .ui-state-active").next().size() == 0)?null:$("#tabs .ui-state-active").next().attr('id').replace('_li','');
				//如果要關掉的頁面 不等於 正在開啟的頁面
				if(currentPageID != id)
				{
					//關掉指定頁面
					deleteTab(id);
					//再重新聚焦在原先開啟的頁面
					$("#" + currentPageID + "_a").click();
				}
				//如果要關掉的頁面 等於 正在開啟的頁面
				else
				{
					//如果沒有下一頁
					if($("#tabs .ui-state-active").next().size() == 0)
					{
						//關掉指定頁面
						deleteTab(id);
						//再重新聚焦在上一個頁面 size=0需開起首頁 其他則開起上一頁
						if($("#" + prevPageID + "_a").size() == 0)
						{
							$("#HomeTab a").click();
							//首頁聚焦
							// getNewTaskPage_Record("all");
						}
						else
						{
							$("#" + prevPageID + "_a").click()
						}
					}
					//如果有下一頁
					else
					{
						//關掉指定頁面
						deleteTab(id);
						//再重新聚焦在下一個頁面
						$("#" + nextPageID + "_a").click();
					}
				}
			}
		});
		//新增語言翻譯 class
		$("#" + id + "_a").addClass('translateHtml');
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}
	}
}
//載入 js
function loadJs(fileUrl,callback)
{
	try
	{
		//載入指定 js 檔案
		$.getScript(fileUrl).done(function(script,textStatus)
		{
			(callback)?callback():null;
	  	}).fail(function(jqxhr,settings,exception)
	  	{
		    //顯示錯誤訊息
		    var loadJsshowMsg = showMsg('錯誤','載入 ' + fileUrl + ' 錯誤',function()
	    	{
	    		loadJsshowMsg.close();
	    	},function()
	    	{
	    		loadJsshowMsg.close();
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
}
//刪除 tab
function deleteTab(id)
{
	try
	{
		//刪除內容
		$('#'+id).remove();
		//刪除標籤
		$('#'+id+'_li').remove();
		//Debug
		$(window).resize();
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}
	}
}
//產生UUID
function guid()
{
	try
	{
		function s4()
		{
		  return Math.floor((1 + Math.random()) * 0x10000)
		    .toString(16)
		    .substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		  s4() + '-' + s4() + s4() + s4();
	}
	catch(err)
	{
		if(App_Debug)
		{
			console.log(err);
		}
	}
}
//由大到小
function sortItem_Desc(id,item)
{
	//排序共用
	sortAll_Use(id,item);
	//顯示新排序
	GridPanel_Object[id].setData
	(
		GridPanel_Object[id].getData().sort
		(
			function(a, b)
			{
			    if(new Date(a[item]) == "Invalid Date")
			    {
			    	return ((a[item] < b[item]) ? -1 : ((a[item] > b[item]) ? 1 : 0));
			    }
			    else
			    {
			    	return new Date(a[item]) - new Date(b[item]);
			    }
			}
		)
	);
}
//由小到大
function sortItem_Asc(id,item)
{
	//排序共用
	sortAll_Use(id,item);
	//顯示新排序
	GridPanel_Object[id].setData
	(
		GridPanel_Object[id].getData().sort
		(
			function(a, b)
			{
			    if(new Date(a[item]) == "Invalid Date")
			    {
			    	return ((b[item] < a[item]) ? -1 : ((b[item] > a[item]) ? 1 : 0));
			    }
			    else
			    {
			    	return new Date(b[item]) - new Date(a[item]);
			    }
			}
		)
	);
}
//排序共用
function sortAll_Use(id,item)
{
	//清空資料
	$('#' + id + '_Table').empty();
	//恢復其他標題排序
	var sortObject = $("#" + id + "_Header span");
	for(var i = 0; i < sortObject.length; i++)
	{
		if(sortObject.eq(i).attr('id') != undefined)
		{
			//將不是自己的排序圖示重設
			var myItem = sortObject.eq(i).attr('id').replace(GridPanel_Object[id].getId() + "_",'').replace("_Sort",'');
			if(myItem != item )
			{
				sortObject.eq(i).removeClass('Mainpage_Header_Asc');
				sortObject.eq(i).removeAttr('sort');
				sortObject.eq(i).removeClass('Mainpage_Header_Desc');
				sortObject.eq(i).removeAttr('sort');
				sortObject.eq(i).addClass('Mainpage_Header_All');
			}
		}
	};
}
//新增文字方塊
function addTextfield(parentID,ID,Label,width)
{
	//建立 Window Textfield 群組 Div
	$('#' + parentID).append("<div id='" + ID + "_Group'></div>");
	//建立 Window Textfield label
	$('#' + ID + "_Group").append("<div class='Font' id='" + ID + "_Label' style='text-align:right;'>" + Label + "</div>");
	//建立 Window Textfield text
	$('#' + ID + "_Group").append("<input class='Font Window_Textfield' id='" + ID + "' type='text'></input>");
	//Group Css
	$('#' + ID + "_Group").css
	({
		"margin-top":"15px"
	});
	//label Css
	$('#' + ID + "_Label").css
	({
		"float":"left",
		"width":width + "px",
		"font-size":"15px"
	});
	//Textfield Css
	$('#' + ID).css
	({
		"width":"calc(100% - " + (parseInt(width)+10) + "px)",
		"border":"0px",
		"border-bottom":"rgb(152,152,152) 1px solid",
		"font-size":"15px"
	});
	//建立 Textfield Focus
	$('#' + ID).focus(function()
	{
		$('#' + this.id).css("border-bottom","rgb(69,200,200) 1px solid");
		$('#' + this.id).prev().css("color","rgb(69,200,200)");
	});
	//建立 Textfield Blur
	$('#' + ID).blur(function()
	{
		$('#' + this.id).css("border-bottom","rgb(152,152,152) 1px solid");
		$('#' + this.id).prev().css("color","rgb(60,60,60)");
	});
}
//新增單選
function addRadio(parentID,ID,Label,Radio_Name,Radio1,Radio2,Radio1_Value,Radio2_Value,width)
{
	//建立 Window Radio 群組 Div
	$('#' + parentID).append("<div id='" + ID + "_Group'></div>");
	//建立 Window Radio label
	$('#' + ID + "_Group").append("<div class='Font' id='" + ID + "_Label'>" + Label + "</div>");
	//建立 Window Radio1
	$('#' + ID + "_Group").append("<input class='Font' name='" + Radio_Name + "' id='" + ID + "_1' type='radio' value='" + Radio1_Value + "'></input>");
	//建立 Window Radio1 text
	$('#' + ID + "_Group").append("<div class='Font' id='" + ID + "_1_Div'>" + Radio1 + "</div>");
	//建立 Window Radio2
	$('#' + ID + "_Group").append("<input class='Font' name='" + Radio_Name + "' id='" + ID + "_2' type='radio' value='" + Radio2_Value + "'></input>");
	//建立 Window Radio2 text
	$('#' + ID + "_Group").append("<div class='Font' id='" + ID + "_2_Div'>" + Radio2 + "</div>");
	//Group Css
	$('#' + ID + "_Group").css
	({
		"margin-top":"15px"
	});
	//label Css
	$('#' + ID + "_Label").css
	({
		"float":"left",
		"width":width + "px",
		"font-size":"15px",
		"margin-left":"5px"
	});
	//Radio Css
	$('#' + ID + "_1").css
	({
		"border":"0px",
		"border-bottom":"rgb(152,152,152) 1px solid",
		"float":"left",
		"cursor":"pointer",
		"margin-top":"3px",
		"margin-left":"-5px",
		"margin-right":"5px"
	});
	//Radio Css
	$('#' + ID + "_1_Div").css
	({
		"float":"left",
		"cursor":"pointer",
		"font-size":"15px"
	});
	//Radio Css
	$('#' + ID + "_2").css
	({
		"margin-left":"30px",
		"border":"0px",
		"border-bottom":"rgb(152,152,152) 1px solid",
		"float":"left",
		"cursor":"pointer",
		"margin-top":"3px",
		"margin-right":"5px"
	});
	//Radio Css
	$('#' + ID + "_2_Div").css
	({
		"cursor":"pointer",
		"display":"table",
		"font-size":"15px"
	});
	//建立 Radio_Div Focus
	$('#' + ID + "_1_Div").click(function()
	{
		$('#' + ID + "_Label").css("color","rgb(69,200,200)");
		document.getElementById(ID + "_1").checked = true;
		$('#' + this.id).css("color","rgb(69,200,200)");
		$('#' + this.id).next().next().css("color","rgb(69,60,60)");
	});
	//建立 Radio_Div Focus
	$('#' + ID + "_2_Div").click(function()
	{
		$('#' + ID + "_Label").css("color","rgb(69,200,200)");
		document.getElementById(ID + "_2").checked = true;
		$('#' + this.id).css("color","rgb(69,200,200)");
		$('#' + this.id).prev().prev().css("color","rgb(69,60,60)");
	});
	//建立 Radio Focus
	$('input[type=radio][name=' + Radio_Name + ']').change(function()
	{
        $("#" + this.id).next().click();
    });
}
//新增日期欄位
function addDatetimeField(parentID,ID,Label,width)
{
	//建立 Window DatetimeField 群組 Div
	$('#' + parentID).append("<div id='" + ID + "_Group'></div>");
	//建立 Window DatetimeField label
	$('#' + ID + "_Group").append("<div class='Font' id='" + ID + "_Label' style='text-align:right;'>" + Label + "</div>");
	//建立 Window DatetimeField text
	$('#' + ID + "_Group").append("<input class='Font Window_Textfield' id='" + ID + "' type='text'></input>");
	//設定語言選項
	$.datetimepicker.setLocale('zh');
	//產生日期選擇
	$('#' + ID).datetimepicker();
	//Group Css
	$('#' + ID + "_Group").css
	({
		"margin-top":"15px"
	});
	//label Css
	$('#' + ID + "_Label").css
	({
		"float":"left",
		"width":width + "px",
		"font-size":"15px"
	});
	//DatetimeField Css
	$('#' + ID).css
	({
		"width":"calc(100% - " + (parseInt(width)+10) + "px)",
		"border":"0px",
		"border-bottom":"rgb(152,152,152) 1px solid",
		"margin-top":"0px",
		"padding":"0px",
		"font-size":"15px"
	});
	//建立 Focus Focus
	$('#' + ID).focus(function()
	{
		$('#' + this.id).css("border-bottom","rgb(69,200,200) 1px solid");
		$('#' + this.id).prev().css("color","rgb(69,200,200)");
	});
	//建立 Focus Blur
	$('#' + ID).blur(function()
	{
		$('#' + this.id).css("border-bottom","rgb(152,152,152) 1px solid");
		$('#' + this.id).prev().css("color","rgb(60,60,60)");
	});
}
//在 GridPanel 中新增一列空白列
function addRow(view,func,callback)
{
	//錯誤排除
	if(typeof(view) == "undefined")
	{
		return;
	}
	//記錄功能
	var funcText = "";
	if(func == "Insert")
	{
		//記錄文字
		funcText = "新增";
	}
	else if(func == "Select")
	{
		//記錄文字
		funcText = "查詢";
	}
	//如果在查詢的情況下按下新增 或是在新增的狀況下按查詢
	var viewFunctext = $("#Maintable_7_2_Table_Inner_-1 div[name='Number']").html();
	if(funcText && viewFunctext && (funcText != viewFunctext))
	{
		cancelAjaxfield(view);
		return;
	}
	//如果檢查不通過
	if(!reCheck_Ajaxfield(view))
	{
		//改變顯示功能文字
		$("#" + view.getId() + "_Table_Inner_-1").children().eq(0).html(funcText);
		$("#" + view.getId() + "_Table_Inner_-1").children().eq(0).attr("func",func);
		return;
	}
	//建立空白對應陣列
	var model = view.getModel();
	var emtpyObject = {};
	var Content_Array = [];
	for(var a=0;a<model.length;a++)
	{
		if(a == 0)
		{
			emtpyObject[model[a]] = 0;
		}
		else
		{
			emtpyObject[model[a]] = "";
		}
	}
	Content_Array.push(emtpyObject);
	//依照 Model 資料存入
	var This_Model = view.getModel();
	//回傳內容
	for(var i=0;i<Content_Array.length;i++)
	{
		var Temp_Array = [];
		//Model 欄位
		for(var j=0;j<This_Model.length;j++)
		{
			//將資料轉存成陣列
			Temp_Array.push(Content_Array[i][This_Model[j]]);
			if(j == This_Model.length - 1)
			{
				var This_ID = view.getId();
				//總共新增了幾筆
				var Count = "-1";
				//要新增的 div id
				var Current_ID = This_ID + "_Table_Inner_" + Count;
				//新增區別 div
				$('#' + This_ID + '_Table').prepend("<div id='" + Current_ID + "'></div>");
				//如果有需要多選
				if(view.getMulti_Selectable())
				{
					//新增滑鼠按下監聽 Ctrl
					$('#' + Current_ID).mousedown(function(e)
					{
						//單選
						if(!ctrlKey && !shiftKey)
						{
							var item = $("#" + This_ID + "_Table").children();
							for(var i = 0; i < item.length; i++)
							{
								item.eq(i).removeClass("Mainpage_Main_Table_Active");
							};
							$("#" + view.getId() + " input[name='checkbox']").prop("checked",false);
							$("#" + view.getId() + "_Header input").prop("checked",false);
						}
						//顯示目前選定 判斷要選定或取消
						(!$(this).hasClass("Mainpage_Main_Table_Active"))?$(this).addClass("Mainpage_Main_Table_Active"):$(this).removeClass("Mainpage_Main_Table_Active");
						//如果不是直接點擊核取方塊 則需要協助顯示
						if($(e.target)[0]['name'] != "checkbox")
						{
							(!$(this).find("input").prop("checked"))?$(this).find("input").prop("checked",true):$(this).find("input").prop("checked",false);
						}
						//Shift 多選
						if(shiftKey)//&& getClintOS() != "MacOS"
						{
							//取得第一個選擇的項目編號 由上至下搜尋
							var selectStart_ID = $("#" + view.getId() + "_Table .Mainpage_Main_Table_Active").eq(0).attr('id');
							var selectStart_Number = selectStart_ID.split('_')[selectStart_ID.split('_').length - 1];
							//取得第最後一個選擇的項目編號
							var selectEnd_ID = $(e.target)[0]['parentNode'].id;
							var selectEnd_Number = selectEnd_ID.split('_')[selectEnd_ID.split('_').length - 1];
							//如果第一個與最後一個相同 代表應該從後面開始找第一個選擇的項目編號
							if(selectStart_Number == selectEnd_Number)
							{
								//取得第一個選擇的項目編號 由下至上搜尋
								selectStart_ID = $("#" + view.getId() + "_Table .Mainpage_Main_Table_Active").eq($("#" + view.getId() + "_Table .Mainpage_Main_Table_Active").length - 1).attr('id');
								selectStart_Number = selectStart_ID.split('_')[selectStart_ID.split('_').length - 1];
							}
							//如果第一個項目編號比較小 依照第一個與最後一個的編號多選之間的項目
							if(selectStart_Number < selectEnd_Number)
							{
								for(var i = selectStart_Number; i <= selectEnd_Number; i++)
								{
									$("#" + view.getId() + "_Table_Inner_" + i).addClass("Mainpage_Main_Table_Active");
									$("#" + view.getId() + "_Table_Inner_" + i).find("input").prop("checked",true);
								};
							}
							//如果第一個項目編號比較大 依照第一個與最後一個的編號多選之間的項目
							if(selectStart_Number > selectEnd_Number)
							{
								for(var i = selectStart_Number; i >= selectEnd_Number; i--)
								{
									$("#" + view.getId() + "_Table_Inner_" + i).addClass("Mainpage_Main_Table_Active");
									$("#" + view.getId() + "_Table_Inner_" + i).find("input").prop("checked",true);
								};
							}								
						}
						//判斷是否全選
						var selectItem_Count = $(this).parent().find('.Mainpage_Main_Table_Active').length;
						var gridPanel_Pagesize = view.getPagesize();
						if(selectItem_Count == gridPanel_Pagesize)
						{
							$("#" + view.getId() + "_Header div[name='CheckBox']").find('input').prop("checked",true);
						}
						else
						{
							$("#" + view.getId() + "_Header div[name='CheckBox']").find('input').prop("checked",false);
						}
					});
				}
				//新增文字不能被選取
				$('#' + Current_ID).addClass("noSelected");
				//新增區別 div 的 Contextmenu
				view.createContextmenu(Current_ID);
				//取得 header content
				var Width = view.getHeader_Width();
				//自動計算總寬度 把剩下的寬度在最後一格補上
				var totalWidth = 0;
				var tdWidth = 0;
				//取得最後一筆有顯示的項目編號 翻轉陣列 取得翻轉回來的正常編號
				var lastShow_ID = view.getfieldShow().length - 1 - jQuery.inArray(true,view.getfieldShow().reverse());
				//取得後翻轉回來
				view.getfieldShow().reverse();
				//產生 table 內容 寬度必須對應
				for(var k=0;k<Width.length;k++)
				{
					//依照是否顯示
					var fieldShow_Css = (view.getfieldShow()[k])?'':'display:none;';
					//欄位內值
					var fieldValue = (Temp_Array[k])?Temp_Array[k]:'';
					//如果是最後一筆 且有顯示
					if(k == lastShow_ID && view.getfieldShow()[k])
					{
						tdWidth = (100 - totalWidth) + "%";
					}
					else if(view.getfieldShow()[k])
					{
						tdWidth = Width[k];
					}
					//設定寬度
					$('#'+Current_ID).append("<div class='translateHtml' Header_Width='" + ((view.getHeader_Width()[k] == "0%")?"0%":tdWidth) + "' fieldShow='" + view.getfieldShow()[k] + "' name='" + view.getModel()[k] + "' style='width:calc(" + tdWidth + " - 1px);line-height:" + view.Table_Lineheight + ";display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;height:60px;" + fieldShow_Css + "'>" + fieldValue + "</div>");
					//紀錄寬度
					totalWidth = parseFloat(totalWidth) + parseFloat(Width[k].replace('%',''));
				}
			}
		}
		//最後執行 Callback
		if(i == Content_Array.length - 1)
		{
			//捲到最高
			$("#" + view.getId() + "_Table").scrollTop(0);
			//改變顯示功能文字
			$("#" + view.getId() + "_Table_Inner_-1").children().eq(0).html(funcText);
			$("#" + view.getId() + "_Table_Inner_-1").children().eq(0).attr("func",func);
			//新增用文字方塊
			for(var i=1;i<view.getModel().length;i++)
			{
				//ID
				var ID = view.getId() + "_Table_Inner_-1_" + view.getModel()[i];
				//文字方塊
				$("#" + view.getId() + "_Table_Inner_-1").children().eq(i).append("<input class='Font Window_Textfield' id='" + ID + "' type='text'></input>");
				//Textfield Css
				$('#' + ID).css
				({
					"width":"calc(100% - 100px)",
					"border":"0px",
					"border-bottom":"rgb(152,152,152) 1px solid",
					"margin-top":"18px",
					"text-align":"center",
					"font-size":"12px"
				});
				//建立 Textfield Focus
				$('#' + ID).focus(function()
				{
					$('#' + this.id).css("border-bottom","rgb(69,200,200) 1px solid");
					$('#' + this.id).prev().css("color","rgb(69,200,200)");
				});
				//建立 Textfield Blur
				$('#' + ID).blur(function()
				{
					$('#' + this.id).css("border-bottom","rgb(152,152,152) 1px solid");
					$('#' + this.id).prev().css("color","rgb(60,60,60)");
				});
				//查詢的狀況下 要把上一次的查詢值放入文字方塊
				if(func == "Select")
				{
					//取得上一次查詢的文字
					var selecttext = $("#" + view.getId() + "_Header").children().eq(i).attr('selecttext');
					//文字方塊
					$('#' + ID).val((selecttext == undefined)?"":selecttext);
				}
				//Enter 事件
				// $('#' + ID).keyup(function(e)
				// {
				// 	if(e.keyCode == 13)
				// 	{
				// 		//判斷必填
				// 		if(reCheck_Ajaxfield(view))
				// 		{
				// 			//取消聚焦避免錯誤
				// 			$(this).blur();
				// 		}
				// 	}
				// });
				// //CSS 滑鼠滑入
				// $("#" + view.getId() + "_Table_Inner_-1").mouseenter(function()
				// {
				// 	$("#" + view.getId() + "_Table_Inner_-1 input").css("background-color","rgb(239,239,239) !important");
				// });
				// //CSS 滑鼠滑出
				// $("#" + view.getId() + "_Table_Inner_-1").mouseout(function()
				// {
				// 	$("#" + view.getId() + "_Table_Inner_-1 input").css("background-color","white !important");
				// });
			}
			//如果有 Callback
			if(callback)
			{
				callback();
			}
		}
	}
	//聚焦第一個文字方塊
	$("#" + view.getId() + "_Table_Inner_-1 input").eq(0).focus();
}
//在 GridPanel 中修改一列文字列
function modifyRow(view,callback)
{
	//如果正在做修改 則送出修改狀況
	if($("div[func='update']").size() == 1)
	{
		var modifyMsg = showMsg('警告','確認修改一列？',function()
		{
			modifyMsg.close();
		},function()
		{
			//取得要刪除的項目
			var modifyObject = $(".Mainpage_Main_Table_Active");
			for(var i = 0; i < modifyObject.length; i++)
			{				
				//需要刪除的列
				var modifyObject_EveryRow = $(".Mainpage_Main_Table_Active").eq(i).children();
				//紀錄輸入值
				resultData = {};
				var tempArray = {};
				var resultArray = [];
				//迴圈將值輸入
				for(var j = 1; j < modifyObject_EveryRow.length; j++)
				{
					//紀錄輸入值
					tempArray[modifyObject_EveryRow.eq(j).attr("name")] = modifyObject_EveryRow.eq(j).find('input').val();
				}
				//執行新增
				resultArray.push(tempArray);
				resultData = resultArray;
				//ajax 型式
				var ajaxType = "Update";
				var ajaxData = JSON.stringify(tempArray);
				//發送 ajax
				ajaxData_withType(view,ajaxType,ajaxData);
				//最後一筆完成
				if(i == modifyObject.length - 1)
				{
					modifyMsg.close();
					cancelAjaxfield(view);
				}
			}
		});
	}
	//顯示文字方塊
	else
	{
		//避免錯誤
		cancelAjaxfield(view);
		//取得要刪除的項目
		var modifyObject = $(".Mainpage_Main_Table_Active");
		//都沒選擇的情況下
		if(modifyObject.length == 0)
		{
			normalError_Msg('請選擇要修改的項目！');
		}
		//不能多筆修改
		else if(modifyObject.length != 1)
		{
			normalError_Msg('僅能單筆修改！');
		}
		//單筆修改
		else
		{
			//點擊物件
			var clickObject = $(".Mainpage_Main_Table_Active").children();
			//迴圈新增
			for(var i = 0; i < clickObject.length; i++)
			{
				//原始文字
				var originalText = clickObject.eq(i).html();
				var imgSrc = clickObject.eq(i).children().eq(0).attr('src');
				var filename = (imgSrc)?imgSrc.substring(imgSrc.lastIndexOf('/')+1):"";
				//清空原始文字
				if(i == 0)
				{
					//顯示功能文字
					clickObject.eq(i).html("修改");
					clickObject.eq(i).attr("func","update");
				}
				else
				{
					//清空原始文字
					clickObject.eq(i).html("");
				}
				//原始物件編號
				var originalObject = clickObject.eq(i);
				//ID
				var ID = view.getId() + "_Table_Inner_-1_" + view.getModel()[i] + "_updateInput";
				//文字方塊
				originalObject.append("<input class='Font Window_Textfield' id='" + ID + "' type='text' imgSrc=" + filename + "></input>");
				//Textfield Css
				$('#' + ID).css
				({
					"width":"calc(100% - 100px)",
					"border":"0px",
					"border-bottom":"rgb(152,152,152) 1px solid",
					"margin-top":"18px",
					"text-align":"center",
					"font-size":"12px"
				});
				//如果是圖片欄位
				if($('#' + ID).parent().attr('name') == "p_fig")
				{
					//value
					// console.log(filename);
				}
				//剩餘欄位共用
				else
				{
					//value
					$('#' + ID).val(originalText);
				}
				//第一列例外狀況
				if(view.getModel()[i] == "Number")
				{
					$('#' + ID).hide();
				}
				//callback
				if(i == clickObject.length - 1)
				{
					if(callback)
					{
						callback();
					}
				}
			}
		}
	}
}
//刪除
function deleteRow(view,callback)
{
	//取得要刪除的項目
	var deleteObject = $(".Mainpage_Main_Table_Active");
	//如果不是零筆資料需要刪除
	if(deleteObject.length > 0)
	{
		//顯示提示訊息
		var deleteMsg = showMsg(getDictionary('Warning'),getDictionary('Comfirm to Delete') + " " + deleteObject.length + " " + getDictionary('row'),function()
		{
			deleteMsg.close();
		},function()
		{
			for(var i = 0; i < deleteObject.length; i++)
			{
				//需要刪除的列
				var deleteObject_EveryRow = $(".Mainpage_Main_Table_Active").eq(i).children();
				//紀錄輸入值
				var resultArray = {};
				//迴圈將值輸入
				for(var j = 1; j < deleteObject_EveryRow.length; j++)
				{
					//紀錄輸入值 去掉圖片
					if(deleteObject_EveryRow.eq(j).attr("name") != "p_fig")
					{
						resultArray[deleteObject_EveryRow.eq(j).attr("name")] = deleteObject_EveryRow.eq(j).html();
					}
				}
				//ajax 型式
				var ajaxType = "Delete";
				var ajaxData = JSON.stringify(resultArray);
				//發送 ajax
				ajaxData_withType(view,ajaxType,ajaxData);
				//最後一筆完成
				if(i == deleteObject.length - 1)
				{
					deleteMsg.close();
				}
			}
		});
		//callback
		if(callback)
		{
			callback();
		}
	}
	else if(deleteObject.length == 0)
	{
		normalError_Msg(getDictionary('Please choose item to delete.'));
	}
}
//存檔
function saveAjaxfield(view,callback)
{
	//修改
	if($("div[func='update']").size() == 1)
	{
		modifyRow(view)
	}
	//新增與查詢
	else
	{
		//確認輸入值
		reCheck_Ajaxfield(view);
	}
	//callback
	if(callback)
	{
		callback();
	}
}
//取消
function cancelAjaxfield(view,callback)
{
	//如果正在做修改
	if($("div[func='update']").size() == 1)
	{
		//關閉文字方塊
		$("#" + view.getId() + "_Table_Inner_-1").remove();
		//回覆成 div input->div
		var originalObject = $("div[func='update']").parent().find('input');
		for(var i = 0; i < originalObject.length; i++)
		{
			var originalText = originalObject.eq(i).val();
			originalObject.eq(i).parent().html(originalText);
			originalObject.eq(i).remove();
		}
		//回覆 div func 狀態
		$("div[func='update']").removeAttr('func');
		//重新整理以免錯誤資訊
		view.load();
	}
	//其餘狀況
	else
	{
		//關閉文字方塊
		$("#" + view.getId() + "_Table_Inner_-1").remove();
	}
	//如果曾經查詢過 則把查詢關鍵字刪除
	// if($("#" + view.getId() + "_Header div[selecttext='']").length)
	// {
	// 	view.setLoad_Formdata("");
	// 	view.load();
	// }
	//callback
	if(callback)
	{
		callback();
	}
}
//依照 ajaxType 發送 ajax
function ajaxData_withType(view,ajaxType,ajaxData,callback)
{
	if(Table_Name)
	{
		//特定資料表 新增上傳圖片
		if(Table_Name == "patrol_point" && ajaxType == "Insert")
		{
			//Loading Mask
			loadingMask = Loading_Mask.Initialize();
			loadingMask.setTarget('Window_7_2');
			loadingMask.show();
			//上傳檔案
			var formData = new FormData();
			formData.append('ImageData',$('#Maintable_7_2_Table_Inner_-1_p_fig_hide')[0].files[0]);
			$.ajax
			({
				url: serverUrl + "Distributor_Cloud_Patrol_Server/FileUpload_Distributor.ashx?Document=PatrolPoint&ImageName=" + UserName + "-" + getDate(new Date(),'-') + "-" + getTimeSecond(new Date(),'-'),
				type: "POST",
				data: formData,
				beforeSend:function(xhr)
				{
					xhr.setRequestHeader("Authorization",Authorization);
				},
				processData: false,
				contentType: false,
				success: function(response)
				{
					//result
					var result = JSON.parse(response);
					if(result.Result == 'true')
					{
						//覆蓋檔案名稱
						var newData = JSON.parse(ajaxData);
						newData.p_fig = result.ImageUrl;
						//Ajax
						jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_Server/Insert_Distributor.ashx?TableName=" + Table_Name,JSON.stringify(newData),function(data)
						{
							//result
							var result = JSON.parse(data);
							if(result.Result == 'true')
							{
								//關閉文字方塊
								cancelAjaxfield(view);
								//重整
								view.load();
								//Msg
								var msg = showMsg(getDictionary("Success"),getDictionary('Insert Success'),function()
								{
									//關閉window
									Window_7_2.close();
									//loading
									loadingMask.close();
									//關閉msg
									msg.close();
								},function()
								{
									//關閉window
									Window_7_2.close();
									//loading
									loadingMask.close();
									//關閉msg
									msg.close();
								});
							}
							else if(result.Result == 'false')
							{
								//Msg
								normalError_Msg(result.Reason);
							}
						},function()
						{
							//Msg
							normalError_Msg(getDictionary('Insert Error'));
							//loading
							loadingMask.close();
						},function()
						{
							//Msg
							normalError_Msg(getDictionary('Insert Error'));
							//loading
							loadingMask.close();
						});
					}
					else if(result.Result == 'false')
					{
						//Msg
						normalError_Msg(result.Reason);
					}
				},
				error: function(jqXHR, textStatus, errorMessage)
				{
					
				}
			});
			//防止下方程式碼繼續執行
			return;
		}
		//特定資料表 巡檢路線建檔
		else if(Table_Name == "patrol_route" && ajaxType == "Insert")
		{
			//Loading Mask
			loadingMask = Loading_Mask.Initialize();
			loadingMask.setTarget('Mainpage_Main');
			loadingMask.show();
			//覆蓋檔案名稱
			var newData = JSON.parse(ajaxData);
			delete newData.g_name;
			delete newData.b_time;
			delete newData.e_time;
			//Ajax
			jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_Server/Insert_Distributor.ashx?TableName=" + Table_Name,JSON.stringify(newData),function(data)
			{
				//loading
				loadingMask.close();
				//result
				var result = JSON.parse(data);
				if(result.Result == 'true')
				{
					//Msg
					normalSucceed_Msg(getDictionary('Insert Success'));
					//關閉文字方塊
					cancelAjaxfield(view);
					//重整
					view.load();
				}
				else if(result.Result == 'false')
				{
					//Msg
					normalError_Msg(result.Reason);
				}
			},function()
			{
				//Msg
				normalError_Msg(getDictionary('Insert Error'));
				//loading
				loadingMask.close();
			},function()
			{
				//Msg
				normalError_Msg(getDictionary('Insert Error'));
				//loading
				loadingMask.close();
			});
			//防止下方程式碼繼續執行
			return;
		}
		//特定資料表 巡檢路線建檔
		else if(Table_Name == "patrol_route_detail" && ajaxType == "Insert")
		{
			//Loading Mask
			loadingMask = Loading_Mask.Initialize();
			loadingMask.setTarget('Mainpage_Main');
			loadingMask.show();
			//覆蓋檔案名稱
			var newData = JSON.parse(ajaxData);
			//Ajax
			jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_Server/Insert_Distributor.ashx?TableName=" + Table_Name,JSON.stringify(newData),function(data)
			{
				//loading
				loadingMask.close();
				//result
				var result = JSON.parse(data);
				if(result.Result == 'true')
				{
					//Msg
					normalSucceed_Msg(getDictionary('Insert Success'));
					//關閉文字方塊
					cancelAjaxfield(view);
					//重整
					view.load();
				}
				else if(result.Result == 'false')
				{
					//Msg
					normalError_Msg(result.Reason);
				}
			},function()
			{
				//Msg
				normalError_Msg(getDictionary("Insert Error"));
				//loading
				loadingMask.close();
			},function()
			{
				//Msg
				normalError_Msg(getDictionary("Insert Error"));
				//loading
				loadingMask.close();
			});
			//防止下方程式碼繼續執行
			return;
		}
		//特定資料表 巡檢路線建檔
		else if(Table_Name == "guard_schedule" && ajaxType == "Insert")
		{
			//Loading Mask
			loadingMask = Loading_Mask.Initialize();
			loadingMask.setTarget('Mainpage_Main');
			loadingMask.show();
			//覆蓋檔案名稱
			var newData = JSON.parse(ajaxData);
			delete newData.g_name;
			delete newData.reg_id;
			delete newData.region;
			delete newData.sch_name;
			//Ajax
			jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_Server/Insert_Distributor.ashx?TableName=" + Table_Name,JSON.stringify(newData),function(data)
			{
				//loading
				loadingMask.close();
				//result
				var result = JSON.parse(data);
				if(result.Result == 'true')
				{
					//Msg
					normalSucceed_Msg(getDictionary('Insert Success'));
					//關閉文字方塊
					cancelAjaxfield(view);
					//重整
					view.load();
				}
				else if(result.Result == 'false')
				{
					//Msg
					normalError_Msg(result.Reason);
				}
			},function()
			{
				//Msg
				normalError_Msg(getDictionary("Insert Error"));
				//loading
				loadingMask.close();
			},function()
			{
				//Msg
				normalError_Msg(getDictionary("Insert Error"));
				//loading
				loadingMask.close();
			});
			//防止下方程式碼繼續執行
			return;
		}
		//新增
		else if(ajaxType == "Insert")
		{
			//loading
			var loadingMask = Loading_Mask.Initialize();
			loadingMask.setTarget('Mainpage_Main');
			loadingMask.show();
			//Ajax
			jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_Server/Insert_Distributor.ashx?TableName=" + Table_Name,ajaxData,function(data)
			{
				//loading
				loadingMask.close();
				//result
				var result = JSON.parse(data);
				if(result.Result == 'true')
				{
					//Msg
					normalSucceed_Msg(getDictionary("Insert Success"));
					// if(Table_Name == "security_guard")
					// {
					// 	//Msg
					// 	normalSucceed_Msg("新增成功<br/>預設員工密碼為員工電話");
					// 	$("#YesNo_Msg").height(185);
					// }
					// else
					// {
						
					// }
					//重整
					view.load();
				}
				else if(result.Result == 'false')
				{
					//Msg
					normalError_Msg(result.Reason);
				}
			},function()
			{
				//Msg
				normalError_Msg(getDictionary("Insert Error"));
				//loading
				loadingMask.close();
			},function()
			{
				//Msg
				normalError_Msg(getDictionary("Insert Error"));
				//loading
				loadingMask.close();
			});
		}
		//刪除
		else if(ajaxType == "Delete")
		{
			//loading
			var loadingMask = Loading_Mask.Initialize();
			loadingMask.setTarget('Mainpage_Main');
			loadingMask.show();
			//Ajax
			jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_Server/Delete_Distributor.ashx?TableName=" + Table_Name,ajaxData,function(data)
			{
				//loading
				loadingMask.close();
				//result
				var result = JSON.parse(data);
				if(result.Result == 'true')
				{
					//Msg
					normalSucceed_Msg(getDictionary('Delete Success'));
					//重整
					view.load();
				}
				else if(result.Result == 'false')
				{
					if(Table_Name == "security_guard")
					{
						//Msg
						var tempMsg = normalError_Msg(result.Reason);
						$("#YesNo_Msg").height(185);
						tempMsg.setHeight(185);
					}
					else
					{
						//Msg
						normalError_Msg(result.Reason);
					}
				}
			},function()
			{
				//Msg
				normalError_Msg(getDictionary('Delete Error'));
				//loading
				loadingMask.close();
			},function()
			{
				//Msg
				normalError_Msg(getDictionary('Delete Error'));
				//loading
				loadingMask.close();
			});
		}
		//查詢
		else if(ajaxType == "Select")
		{
			//標籤資料建檔
			if(Table_Name == "rfid")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				if(resultData.stop)
				{
					resultData.stop = (resultData.stop == getDictionary("CPS_Data Used"))?"N":"Y";
				}
				ajaxData = JSON.stringify(resultData);
			}
			//區域資料建檔
			else if(Table_Name == "region")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				//如果有 $("#Maintable_5_Table_Inner_-1_g_name2_valueField").html() 代表是要做總查詢
				if($("#Maintable_5_Table_Inner_-1_g_name_valueField").html() != "")
				{
					resultData.guard_id = $("#Maintable_5_Table_Inner_-1_g_name_valueField").html();
				}
				else
				{
					delete resultData.guard_id;
				}
				if($("#Maintable_5_Table_Inner_-1_r_id").val())
				{
					resultData.r_id = $("#Maintable_5_Table_Inner_-1_r_id").val();
				}
				else
				{
					delete resultData.r_id;
				}

				ajaxData = JSON.stringify(resultData);
			}
			//巡檢班別建檔
			else if(Table_Name == "patrol_schedule")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				if($("#Maintable_7_4_Table_Inner_-1_g_name_valueField").html() != "")
				{
					resultData.guard_id = $("#Maintable_7_4_Table_Inner_-1_g_name_valueField").html();
				}
				else
				{
					delete resultData.guard_id;
				}
				ajaxData = JSON.stringify(resultData);
			}
			//巡檢點建檔
			else if(Table_Name == "patrol_point")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				//無條件刪除非必要編號欄位
				delete resultData.guard_id;
				//delete resultData.p_name;
				delete resultData.p_fig;
				delete resultData.r_id;
				// //不能單查巡檢單位
				// if($("#Maintable_7_2_Table_Inner_-1_g_name_valueField").html() != "" && $("#Maintable_7_2_Table_Inner_-1_region_valueField").html() == "")
				// {
				// 	normalError_Msg('請選擇區域名稱');
				// 	return;
				// }
				//區域編號
				if($("#Maintable_7_2_Table_Inner_-1_region_valueField").html() != "")
				{
					resultData.reg_id = $("#Maintable_7_2_Table_Inner_-1_region_valueField").html();
				}
				else
				{
					delete resultData.reg_id;
				}
				ajaxData = JSON.stringify(resultData);
			}
			//任務資料建檔
			else if(Table_Name == "point_check")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				delete resultData.p_name;
				//巡檢點標籤編號
				if($("#Maintable_7_Table_Inner_-1_p_name_valueField").html() != "")
				{
					resultData.pnt_id = $("#Maintable_7_Table_Inner_-1_p_name_valueField").html();
				}
				else
				{
					delete resultData.pnt_id;
				}
				ajaxData = JSON.stringify(resultData);
			}
			//巡檢路線建檔
			else if(Table_Name == "patrol_route")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				ajaxData = JSON.stringify(resultData);
			}
			//巡檢路線明細
			else if(Table_Name == "patrol_route_detail")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				ajaxData = JSON.stringify(resultData);
			}
			//巡檢單位排班資料建檔
			else if(Table_Name == "guard_schedule")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				ajaxData = JSON.stringify(resultData);
			}
			//打卡記錄
			else if(Table_Name == "real_patrol")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				if($("#Home_Y02_a_Table_Inner_-1_r_id").val())
				{
					resultData.r_id = $("#Home_Y02_a_Table_Inner_-1_r_id").val();
				}
				else
				{
					delete resultData.r_id;
				}
				if($("#Home_Y02_a_Table_Inner_-1_status").val() == getDictionary("Check_Point_Record_Used"))
				{
					resultData.status = 1;
				}
				else if($("#Home_Y02_a_Table_Inner_-1_status").val() == getDictionary("Check_Point_Record_Not_Used"))
				{
					resultData.status = 0;
				}
				//新查詢
				if($("#Home_Y02_a_Table_Inner_-1_g_name_valueField").html())
				{
					resultData.g_name = $("#Home_Y02_a_Table_Inner_-1_g_name_displayField").html();
				}
				if($("#Home_Y02_a_Table_Inner_-1_region_valueField").html())
				{
					resultData.region = $("#Home_Y02_a_Table_Inner_-1_region_displayField").html();
				}
				if($("#Home_Y02_a_Table_Inner_-1_r_date").val())
				{
					resultData.r_date = $("#Home_Y02_a_Table_Inner_-1_r_date").val();
				}
				ajaxData = (JSON.stringify(resultData) == "{}")?"":JSON.stringify(resultData);
			}
			//檢查事件記錄
			else if(Table_Name == "real_patrol_check")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				//新查詢
				if($("#Home_Y02_a_Table_Inner_-1_g_name_valueField").html())
				{
					resultData.g_name = $("#Home_Y02_a_Table_Inner_-1_g_name_displayField").html();
				}
				if($("#Home_Y02_a_Table_Inner_-1_region_valueField").html())
				{
					resultData.region = $("#Home_Y02_a_Table_Inner_-1_region_displayField").html();
				}
				if($("#Home_Y02_a_Table_Inner_-1_r_date").val())
				{
					resultData.r_date = $("#Home_Y02_a_Table_Inner_-1_r_date").val();
				}
				ajaxData = (JSON.stringify(resultData) == "{}")?"":JSON.stringify(resultData);
			}
			//巡檢點事件記錄
			else if(Table_Name == "real_event")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				//新查詢
				if($("#Home_Y02_a_Table_Inner_-1_g_name_valueField").html())
				{
					resultData.g_name = $("#Home_Y02_a_Table_Inner_-1_g_name_displayField").html();
				}
				if($("#Home_Y02_a_Table_Inner_-1_region_valueField").html())
				{
					resultData.region = $("#Home_Y02_a_Table_Inner_-1_region_displayField").html();
				}
				if($("#Home_Y02_a_Table_Inner_-1_r_date").val())
				{
					resultData.r_date = $("#Home_Y02_a_Table_Inner_-1_r_date").val();
				}
				ajaxData = (JSON.stringify(resultData) == "{}")?"":JSON.stringify(resultData);
			}
			//例外處理
			if((Table_Name == "point_check" || Table_Name == "patrol_route" || Table_Name == "patrol_route_detail" || Table_Name == "guard_schedule") && ajaxData == "{}")
			{
				return;
			}
			//改寫撈資料參數
			view.setLoad_Formdata(ajaxData);
			view.load();
		}
		//修改
		else if(ajaxType == "Update")
		{
			//修改 職位建檔
			if(Table_Name == "job_title")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				delete resultData.sdate;
				delete resultData.xname;
				resultData.xdate = "";
				ajaxData = JSON.stringify(resultData);
			}
			//修改 標籤資料建檔
			else if(Table_Name == "rfid")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				delete resultData.stop;
				delete resultData.sdate;
				delete resultData.xname;
				resultData.xdate = "";
				ajaxData = JSON.stringify(resultData);
			}
			//修改 標籤資料建檔
			else if(Table_Name == "guard_case")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				delete resultData.xdate;
				delete resultData.sdate;
				delete resultData.xname;
				resultData.xdate = "";
				ajaxData = JSON.stringify(resultData);
			}
			//修改 區域資料建檔
			else if(Table_Name == "region")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				delete resultData.g_date;
				delete resultData.sdate;
				delete resultData.xname;
				delete resultData.g_name;
				resultData.xdate = "";
				ajaxData = JSON.stringify(resultData);
			}
			//修改 巡檢班別建檔
			else if(Table_Name == "patrol_schedule")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				delete resultData.xname;
				delete resultData.g_name;
				resultData.xdate = "";
				ajaxData = JSON.stringify(resultData);
			}
			//修改巡檢點建檔
			else if(Table_Name == "patrol_point")
			{
				//刪除不必要傳送欄位 沒有修改照片
				if($('#Maintable_7_2_Table_Inner_-1_p_fig_hide')[0].files[0] == undefined)
				{
					var resultData = JSON.parse(ajaxData);
					delete resultData.p_fig;
					resultData.xdate = "";
					ajaxData = JSON.stringify(resultData);
					Window_7_2.close();
				}
				//修改照片
				else
				{
					var resultData = JSON.parse(ajaxData);
					resultData.xdate = "";
					ajaxData = JSON.stringify(resultData);

					//loading
					var loadingMask = Loading_Mask.Initialize();
					loadingMask.setTarget('Window_7_2');
					loadingMask.show();

					//上傳檔案
					var formData = new FormData();
					formData.append('ImageData',$('#Maintable_7_2_Table_Inner_-1_p_fig_hide')[0].files[0]);
					$.ajax
					({
						url: serverUrl + "Distributor_Cloud_Patrol_Server/FileUpload_Distributor.ashx?Document=PatrolPoint&ImageName=" + UserName + "-" + getDate(new Date(),'-') + "-" + getTimeSecond(new Date(),'-'),
						type: "POST",
						data: formData,
						beforeSend:function(xhr)
						{
							xhr.setRequestHeader("Authorization",Authorization);
						},
						processData: false,
						contentType: false,
						success: function(response)
						{
							//result
							var result = JSON.parse(response);
							if(result.Result == 'true')
							{
								//覆蓋檔案名稱
								var newData = JSON.parse(ajaxData);
								newData.p_fig = result.ImageUrl;
								//Ajax
								jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_Server/Update_Distributor.ashx?TableName=" + Table_Name,JSON.stringify(newData),function(data)
								{
									//loading
									loadingMask.close();
									//result
									var result = JSON.parse(data);
									if(result.Result == 'true')
									{
										//Msg
										normalSucceed_Msg(getDictionary('Update Success'));
										//關閉文字方塊
										cancelAjaxfield(view);
										//重整
										view.load();
										Window_7_2.close();
									}
									else if(result.Result == 'false')
									{
										//Msg
										normalError_Msg(result.Reason);
									}
								},function()
								{
									//Msg
									normalError_Msg(getDictionary('Update Error'));
									//loading
									loadingMask.close();
								},function()
								{
									//Msg
									normalError_Msg(getDictionary('Update Error'));
									//loading
									loadingMask.close();
								});
							}
							else if(result.Result == 'false')
							{
								//Msg
								normalError_Msg(result.Reason);
							}
						},
						error: function(jqXHR, textStatus, errorMessage)
						{
							
						}
					});
					//防止下方程式碼繼續執行
					return;				
				}
			}
			//修改任務資料建檔
			else if(Table_Name == "point_check")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				delete resultData.p_name;
				delete resultData.xname;
				resultData.xdate = "";
				ajaxData = JSON.stringify(resultData);
			}
			//修改巡檢路線建檔
			else if(Table_Name == "patrol_route")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				resultData.xdate = "";
				ajaxData = JSON.stringify(resultData);
			}
			//巡檢路線明細建檔
			else if(Table_Name == "patrol_route_detail")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				resultData.xdate = "";
				ajaxData = JSON.stringify(resultData);
			}
			//巡檢單位排班資料建檔
			else if(Table_Name == "guard_schedule")
			{
				//刪除不必要傳送欄位
				var resultData = JSON.parse(ajaxData);
				delete resultData.g_name;
				delete resultData.region;
				delete resultData.p_name;
				delete resultData.sch_name;
				delete resultData.gd_name;
				delete resultData.xname;
				delete resultData.g_id;
				delete resultData.pat_id;
				delete resultData.region_id;
				resultData.rou_id = $("#Maintable_3_Table_Inner_-1_p_name_updateInput_valueField").html();
				resultData.gd_id = $("#Maintable_3_Table_Inner_-1_gd_name_updateInput_valueField").html();
				resultData.xdate = "";
				ajaxData = JSON.stringify(resultData);
			}
			//loading
			var loadingMask = Loading_Mask.Initialize();
			loadingMask.setTarget('Mainpage_Main');
			loadingMask.show();
			//Ajax
			jqueryAjax_Post(serverUrl + "Distributor_Cloud_Patrol_Server/Update_Distributor.ashx?TableName=" + Table_Name,ajaxData,function(data)
			{
				//loading
				loadingMask.close();
				//result
				var result = JSON.parse(data);
				if(result.Result == 'true')
				{
					//Msg
					normalSucceed_Msg(getDictionary('Update Success'));
					//關閉文字方塊
					cancelAjaxfield(view);
					//重整
					view.load();
				}
				else if(result.Result == 'false')
				{
					//Msg
					normalError_Msg(result.Reason);
				}
			},function()
			{
				//Msg
				normalError_Msg(getDictionary('Update Error'));
				//loading
				loadingMask.close();
			},function()
			{
				//Msg
				normalError_Msg(getDictionary('Update Error'));
				//loading
				loadingMask.close();
			});
		}
	}
	else
	{
		console.log('資料表名稱未輸入');
	}
	if(callback)
	{
		callback();
	}
}
//避免重複 與 執行新增
function reCheck_Ajaxfield(view)
{
	//新增與查詢
	if($("#" + view.getId() + "_Table_Inner_-1").size() == 1)
	{
		//判斷全部輸入
		var object = $("#" + view.getId() + "_Table_Inner_-1").children();
		//紀錄是否都已經輸入
		var inserted = true;
		//紀錄輸入值
		resultData = {};
		var resultArray = {};
		//執行方法
		var func = $("#" + view.getId() + "_Table_Inner_-1 div[name='Number']").attr('func');
		//迴圈判斷 input 是否全部輸入
		for(var i = 0; i < object.length; i++)
		{
			//如果有找到 Input
			if(object.eq(i).find('input').size() != 0)
			{
				//沒有輸入 且 空值的不是系統編號欄位 且 不是在做查詢 (因為查詢不用全部欄位都是必填)
				if(!object.eq(i).find('input').eq(0).val() && object.eq(i).attr('name') != "Id" && func != "Select")
				{
					object.eq(i).focus();
					inserted = false;
					break;
				}
				//有輸入
				else if(object.eq(i).attr('name') != "Id")
				{
					//如果有下拉式選單 還多了搜尋文字方塊 且
					if(object.eq(i).find('input[type="text"]').length == 2)
					{
						//紀錄輸入值
						var comboboxValue = view[view.getId() + '_Table_Inner_-1_' + object.eq(i).attr("name")][view.getId() + '_Table_Inner_-1_' + object.eq(i).attr("name")].getComboboxPagging_Value();
						var comboboxdDisplayValue = view[view.getId() + '_Table_Inner_-1_' + object.eq(i).attr("name")][view.getId() + '_Table_Inner_-1_' + object.eq(i).attr("name")].getComboboxPagging_Value('displayField');
						var comboboxKey = view[view.getId() + '_Table_Inner_-1_' + object.eq(i).attr("name")][view.getId() + '_Table_Inner_-1_' + object.eq(i).attr("name")].ComboboxPagging_getPagging_Parameter().fk_key;
						resultArray[comboboxKey] = comboboxValue;
						//在查詢之後 紀錄查詢值
						if(func == "Select")
						{
							//記錄在 Header
							$("#" + view.getId() + "_Header").children().eq(i).attr('selecttext',(comboboxValue)?comboboxdDisplayValue:"");
							$("#" + view.getId() + "_Header").children().eq(i).attr('selectvalue',(comboboxValue)?comboboxValue:"");
						}
					}
					//普通狀況
					else
					{
						//紀錄輸入值
						resultArray[object.eq(i).attr("name")] = object.eq(i).find('input').eq(0).val();
						//在查詢之後 紀錄查詢值
						if(func == "Select")
						{
							//記錄在 Header
							$("#" + view.getId() + "_Header").children().eq(i).attr('selecttext',(object.eq(i).find('input').eq(0).val())?object.eq(i).find('input').eq(0).val():"");
						}
					}
				}
			}
		}
		//如果都已經輸入
		if(inserted || true)
		{
			//ajax 型式
			var ajaxType = $("#" + view.getId() + "_Table_Inner_-1").children().eq(0).attr('func');
			var ajaxData = resultArray;
			//發送 ajax
			ajaxData_withType(view,ajaxType,JSON.stringify(ajaxData));
		}
		return false;
	}
	else
	{
		return true;
	}
}
//Giga 下拉式選單更新美工
function gigaCombobox_UpdateCSS(view,ID)
{
	//文字方塊唯讀
	$("#" + ID).attr('readonly',true);
	//下拉式選單 CSS更新
	$("#" + ID + "_Group").css('margin-top','0px');
	$("#" + ID).css
	({
		"width":"calc(100% - 40px)",
		"height":"15px",
		"text-align":"center",
		"font-size":"12px"
	});
	$("#" + ID).height(15);
	$("#" + ID + "_Combobox_Pagging").width(345);
	$("#" + ID + "_Combobox_Pagging_Bottom").children().css('line-height','16px');
	$("#" + ID + "_Combobox_Pagging_Bottom").css('margin-left','-1px');
	$("#" + ID + "_Combobox_Pagging_Top").children().css('line-height','0px');
	var currentData = view[ID]["ComboboxPagging_getData"]();
	if($("#" + ID).position() || $("." + ID).position())
	{
		$('#' + ID + '_Combobox_Pagging').css
		({
			'left':($('#' + ID).size() != 0)?$('#' + ID).position().left:$('.' + ID).position().left,
			'top':(($('#' + ID).size() != 0)?$('#' + ID).position().top:$('.' + ID).position().top) + (($('#' + ID).size() != 0)?$('#' + ID).height():$('.' + ID).height()) + 3,
		});
	}
	$('#' + ID + '_Combobox_Pagging').css
	({
		'position':'absolute',
		// 'height':((parseInt(currentData.length) + 2) * 40 - 1) + "px", Ajax 結束再做
		'width':345,//($('#' + ID).size() != 0)?$('#' + ID).width():$('.' + ID).width(),
		'z-index':'99',
		'opacity':'1',
		"background-color":"rgb(255,255,255)",
	    "box-shadow":"rgb(136, 136, 136) 0px 0px 10px",
	    "margin":($('#' + ID).size() != 0)?$('#' + ID).css('margin'):$('.' + ID).css('margin'),
	    "border":($('#' + ID).size() != 0)?$('#' + ID).css('border'):$('.' + ID).css('border'),
	    "padding":($('#' + ID).size() != 0)?$('#' + ID).css('padding'):$('.' + ID).css('padding'),
	    "border-radius":($('#' + ID).size() != 0)?$('#' + ID).css('border-radius'):$('.' + ID).css('border-radius'),
	    "display":"none",
	    "border-radius":"4px"
	});
}