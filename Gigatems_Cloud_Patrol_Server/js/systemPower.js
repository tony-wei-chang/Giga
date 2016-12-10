/*系統權限 Y02*/
try
{
	//載入指定js
	if(Permissions == "Max")
	{
		loadJs('js/1.js');
		loadJs('js/6.js');
	}
	loadJs('js/2.js');
	loadJs('js/3.js');
	loadJs('js/4.js');
	loadJs('js/5.js');
	loadJs('js/7.js');
}
catch(err)
{
	if(App_Debug)
	{
		console.log(err);
	}
}