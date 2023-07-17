 

var param = function(){
	var getparam = function(item,rep){var res=location.search.match(new RegExp("[\?\&]"+item+"=([^\&]*)(\&?)","i"));return res?res[1]:rep;};
	return {"gid":getparam("id",0),"type":getparam("type",0),"style":getparam("style",0),"gname":getparam("title","").replace(/</ig,'&lt;').replace(/>/ig,'&gt;'),"page":getparam("page",1),"allowup":getparam("up",0),"iscaptcha":getparam("iscaptcha",0),"islogin":getparam("islogin",0)};
}();
if(param.style)document.write('<link href="images/css/'+ style +'.css" rel="stylesheet" type="text/css" />');

 