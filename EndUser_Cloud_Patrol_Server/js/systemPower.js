/*系統權限 Y02*/
try
{
	//載入指定js
	loadJs('js/1.js');
	loadJs('js/2.js');
}
catch(err)
{
	if(App_Debug)
	{
		console.log(err);
	}
}