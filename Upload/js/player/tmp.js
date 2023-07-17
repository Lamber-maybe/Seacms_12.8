 

var ffhd_url=parent.now;//鎾斁瑙嗛鍦板潃
var ffhd_w = parent.playerw;//鎾斁鍣ㄥ搴?
var ffhd_h = parent.playerh;//鎾斁鍣ㄩ珮搴?
var ffhd_adh = ffhd_adh;//骞垮憡楂樺害
var ffhd_ad = parent.adsPage;//缂撳啿鍜屾殏鍋滆皟鐢ㄥ箍鍛婂湴
var ffhd_c = 'seacms'; //闈炲嚒褰遍煶鎺ㄥ箍娓犻亾锛屼竴鑸负鍩熷悕绠€鍐欙紝濡俠aidu
var ffhd_install = 'http://error.xfplay.com/error.htm'; //瀹夎缃戦〉锛屾渶濂芥湰鍦板寲
var ffhd_weburl = parent.webpageurl;

function isIE() {
	if (!!window.ActiveXObject || "ActiveXObject" in window)  
		return true;  
	else  
		return false;  
}  
function $ShowSetup() {
	return '<iframe src="http://error.xfplay.com/error.htm" width="100%" height="'+ffhd_h+'" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" scrolling="no" vspale="0" noResize></iframe>';
}
function WriteShowSetup(){
	document.getElementById('FFHDPlayer').style.display='none';
	document.write($ShowSetup());
}
function $PlayerNt(){
	if (navigator.plugins) {
		var install = true;
		for (var i=0;i<navigator.plugins.length;i++) {
			if(navigator.plugins[i].name == 'xfplay p2p plugin'){
				install = false;break;
			}
		}
		if(!install){
			player = '<object id="FFHDPlayer" name="FFHDPlayer" type="application/xfplay-plugin" width="100%" height="'+ffhd_h+'"  PARAM_URL="'+ffhd_url+'" CurWebPage="'+ffhd_weburl+'"></object>';
			return player;
		}
	}
	return $ShowSetup();
}
function $PlayerIe(){
	player = '<object classid="clsid:E38F2429-07FE-464A-9DF6-C14EF88117DD" width="100%" height="'+ffhd_h+'" id="FFHDPlayer" name="FFHDPlayer" onerror="WriteShowSetup();"><param name="url" value="'+ffhd_url+'"/><param name="CurWebPage" value="'+ffhd_weburl+'"/></object>';
	return player;
}
function $Showhtml(){
	if(!isIE()){
		return $PlayerNt();
	}else{
		return $PlayerIe();
	}
}
document.write($Showhtml());

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
document.getElementById('player').innerHTML = '<embed type="application/x-shockwave-flash" src="http://p.you.video.sina.com.cn/swf/tvPlayer20110412_V4_2_39_23.swf" id="Player" bgcolor="#FFFFFF" quality="high" allowfullscreen="true" allowNetworking="internal" allowscriptaccess="never" wmode="transparent" menu="false" always="false"  pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="'+playerh+'" flashvars="&container=main_flash&pid=1000&tid=1&autoLoad=1&autoPlay=1&as=1&tj=0&tjAD=0&casualPlay=1&logo=1&vname=&movietvid=hdm&next_url=&actlogActive=0&HTML5Player_skin=black&vid='+parent.now+'">';

  

var XgPlayer = {
'Url': parent.now,  //本集播放地址，需更改
'NextcacheUrl': parent.next,  //缓冲下一集，需更改
'LastWebPage': '',
'NextWebPage': parent.nextPage,  //下一集播放页面地址，需更改
'Buffer': parent.adsPage,  // 播缓冲AD，需更改
'Pase': parent.adsPage,  // 暂停AD，需更改
'Width': parent.playerw,   // 播放器显示宽度
'Height': parent.playerh,  // 播放器显示高度
'Second': parent.adsTime,  // 缓冲时间
"Installpage":'http://static.xigua.com/installpage.html'
};

document.write('<script language="javascript" src="http://static.xigua.com/m_xiguaplayer.js" charset="utf-8"><\/script>');          

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
document.getElementById('player').innerHTML  = '<iframe width="100%" height='+playerh+' src="dmplayer/player/index.php?url='+parent.now + '&next='+parent.nextPage+'&vid='+parent.vid+'-'+parent.vfrom+'-'+parent.vpart+'&nextdz='+parent.next +'" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>';

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  

var now = parent.now;  //本集播放地址，需更改
var next = parent.next;  //缓冲下一集，需更改
var nextPage =  parent.nextPage;  //下一集播放页面地址，需更改
var adsPage = parent.adsPage;  // 播缓冲AD，需更改
var adsPage =  parent.adsPage;  // 暂停AD，需更改
var playerw =  parent.playerw;   // 播放器显示宽度
var playerh = parent.playerh;  // 播放器显示高度
var adsTime =  parent.adsTime;  // 缓冲时间

var playerh=parent.playerh;
document.getElementById('player').innerHTML = '<h2 style="color:red">SeaCms ERROR：</h2><h4>错误提示：播放地址没有后缀，导致无对应播放器!<h4>';

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
document.getElementById('player').innerHTML  = '<embed type="application/x-shockwave-flash" src="http://tv.sohu.com/upload/swf/20101021/Main.swf?autoplay=true&vid='+parent.now+'" width="100%" height="'+playerh+'" type="application/x-shockwave-flash" allowFullScreen="true" allownetworking="internal" allowscriptaccess="never" wmode="opaque">';

  

var ffhd_url=parent.now;//鎾斁瑙嗛鍦板潃
var ffhd_w = parent.playerw;//鎾斁鍣ㄥ搴?
var ffhd_h = parent.playerh;//鎾斁鍣ㄩ珮搴?
var ffhd_adh = ffhd_adh;//骞垮憡楂樺害
var ffhd_ad = parent.adsPage;//缂撳啿鍜屾殏鍋滆皟鐢ㄥ箍鍛婂湴
var ffhd_c = 'seacms'; //闈炲嚒褰遍煶鎺ㄥ箍娓犻亾锛屼竴鑸负鍩熷悕绠€鍐欙紝濡俠aidu
var ffhd_install = 'http://www.ffplay.net/install.html'; //瀹夎缃戦〉锛屾渶濂芥湰鍦板寲
var ffhd_weburl = parent.webpageurl;

function isIE() {
	if (!!window.ActiveXObject || "ActiveXObject" in window)  
		return true;  
	else  
		return false;  
}  
function $ShowSetup() {
	return '<iframe src="http://www.ffplay.net/install.html" width="100%" height="'+ffhd_h+'" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" scrolling="no" vspale="0" noResize></iframe>';
}
function WriteShowSetup(){
	document.getElementById('FFHDPlayer').style.display='none';
	document.write($ShowSetup());
}
function $PlayerNt(){
	if (navigator.plugins) {
		var install = true;
		for (var i=0;i<navigator.plugins.length;i++) {
			if(navigator.plugins[i].name == 'FFPlayer Plug-In'){
				install = false;break;
			}
		}
		if(!install){
			player = '<object id="FFHDPlayer" name="FFHDPlayer" type="application/npFFPlayer" width="100%" height="'+ffhd_h+'" progid="XLIB.FFPlayer.1" url="'+ffhd_url+'" CurWebPage="'+ffhd_weburl+'"></object>';
			return player;
		}
	}
	return $ShowSetup();
}
function $PlayerIe(){
	player = '<object classid="clsid:D154C77B-73C3-4096-ABC4-4AFAE87AB206" width="100%" height="'+ffhd_h+'" id="FFHDPlayer" name="FFHDPlayer" onerror="WriteShowSetup();"><param name="url" value="'+ffhd_url+'"/><param name="CurWebPage" value="'+ffhd_weburl+'"/></object>';
	return player;
}
function $Showhtml(){
	if(!isIE()){
		return $PlayerNt();
	}else{
		return $PlayerIe();
	}
}
document.write($Showhtml());

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
var str = parent.now;
if(str.indexOf("http://")>=0)
{
var substr = str.substr(str.lastIndexOf('/') + 1);
document.getElementById('player').innerHTML  = '<embed allowfullscreen="true" wmode="opaque" src="http://player.cntv.cn/standard/cntvplayer.swf?v=0.171.5.7.9.0&videoCenterId='+substr+'&videoId=20110711" quality="high" bgcolor="#000" width="100%" height="'+playerh+'" name="player" id="playerr" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>';
}
else
{
document.getElementById('player').innerHTML  = '<embed allowfullscreen="true" wmode="opaque" src="http://player.cntv.cn/standard/cntvplayer.swf?v=0.171.5.7.9.0&videoCenterId='+parent.now+'&videoId=20110711" quality="high" bgcolor="#000" width="100%" height="'+playerh+'" name="player" id="playerr" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>';
}

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
var str = parent.now;
if(str.indexOf("http://")>=0)
{
var substr = str.match(/id_(\S*).html/)[1];
document.getElementById('player').innerHTML  = '<embed type="application/x-shockwave-flash" src="http://static.youku.com/v1.0.0242/v/swf/qplayer.swf" id="Player" bgcolor="#FFFFFF" quality="high" allowfullscreen="true" allowNetworking="internal" allowscriptaccess="never" wmode="transparent" menu="false" always="false" flashvars="isShowRelatedVideo=false&showAd=0&show_pre=1&show_next=1&VideoIDS='+substr+'&isAutoPlay=true&isDebug=false&UserID=&winType=adshow&playMovie=true&MMControl=false&MMout=false&RecordCode=1001,1002,1003,1004,1005,1006,2001,3001,3002,3003,3004,3005,3007,3008,9999" pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="'+playerh+'">';
}
else
{
document.getElementById('player').innerHTML  = '<embed type="application/x-shockwave-flash" src="http://static.youku.com/v1.0.0242/v/swf/qplayer.swf" id="Player" bgcolor="#FFFFFF" quality="high" allowfullscreen="true" allowNetworking="internal" allowscriptaccess="never" wmode="transparent" menu="false" always="false" flashvars="isShowRelatedVideo=false&showAd=0&show_pre=1&show_next=1&VideoIDS='+parent.now+'&isAutoPlay=true&isDebug=false&UserID=&winType=adshow&playMovie=true&MMControl=false&MMout=false&RecordCode=1001,1002,1003,1004,1005,1006,2001,3001,3002,3003,3004,3005,3007,3008,9999" pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="'+playerh+'">';
}

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;

var a=parent.now.split(",");
	var u1=a[0];
	var u2=a[1];
	
document.getElementById('player').innerHTML  = '<br><br><br><center>点击此处获取地址：<a href="'+u1+'" target="_blank">'+u1+'</a></center>';
if(u2==undefined)
{document.getElementById('player').innerHTML  += '<center><br>无需提取密码</center>';}
else
{document.getElementById('player').innerHTML  += '<center><br>提取密码：'+u2+'</center>'; }

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
var str = parent.now;
var s1 = str;
var s2 = str;
var s3 = str;
if (str.length < 10){
document.writeln(str);
document.getElementById('player').innerHTML  = '<embed type="application/x-shockwave-flash" src="http://www.tudou.com/v/'+parent.now+'/dW5pb25faWQ9MTAyMTk1XzEwMDAwMV8wMV8wMQ/&videoClickNavigate=false&withRecommendList=false&withFirstFrame=false&autoPlay=true/v.swf" id="Player" name="Player" bgcolor="#FFFFFF" quality="high" allowfullscreen="true" allowNetworking="internal" allowscriptaccess="never" wmode="transparent" menu="false" always="false"  pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="'+playerh+'" flashvars="">';
}
else if (str.indexOf("albumplay")>=0)
{
if (str.length > 47){
var substr = str.match(/albumplay(\S*).html/)[1];
s1 = substr.substring(13,24);
document.writeln(s1);
document.getElementById('player').innerHTML  = '<embed src="http://www.tudou.com/v/'+s1+'/&resourceId=0_04_05_99&autoPlay=true/v.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="100%" height="'+playerh+'">';
}else
var substr1 = str.match(/albumplay(\S*).html/)[1];
s2 = substr1.substring(1,12);
document.writeln(s2);
document.getElementById('player').innerHTML  = '<embed src="http://www.tudou.com/a/'+s2+'/&resourceId=0_05_05_99&autoPlay=true/v.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="100%" height="'+playerh+'">';
}
else (str.indexOf("listplay")>=0)
{
var substr2 = str.match(/listplay(\S*).html/)[1];
s3 = substr2.substring(13,24);
document.writeln(s3);
document.getElementById('player').innerHTML  = '<embed src="http://www.tudou.com/v/'+s3+'/&resourceId=0_04_05_99&autoPlay=true/v.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="100%" height="'+playerh+'">';
}

  
 
adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  

var playerh=parent.playerh;
document.getElementById('player').innerHTML  = '<iframe width="100%" height='+playerh+' src="ckplayerX/ckplayer.html?videourl='+parent.nextPage+","+parent.now+'" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>';

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
document.getElementById('player').innerHTML  = '<embed type="application/x-shockwave-flash" src="http://player.pps.tv/static/vs/v1.0.0/v/swf/flvplay_s.swf" width="100%" height="'+playerh+'" id="myDynamicContent" name="myDynamicContent" bgcolor="#00000" quality="high" allowscriptaccess="always" allowfullscreen="true" wmode="transparent" menu="false" flashvars="url_key='+parent.now+'&video_id=888888888&referer=http://tv.pps.tv/&fid=feifeicms"></embed>';

  

var jjvod_url = parent.now;//播放视频地址
var jjvod_w = parent.playerw;//播放器宽度
var jjvod_h = parent.playerh;//播放器高度
var jjvod_adh = jjvod_h-40;//广告高度
var jjvod_ad = parent.adsPage;//缓冲和暂停调用广告地址
var jjvod_c = 'seacms'; //吉吉影音推广渠道，一般为域名简写，如baidu
var jjvod_install = 'http://player.jjvod.com/js/jjplayer_install.html?v=1&c='+jjvod_c;
var jjvod_weburl = unescape(window.location.href);
var jjvod_nextpage = parent.nextPage;

function jjvodstatus(offest){
    if(document.getElementById('jjvodPlayer').PlayState==3){
         document.getElementById('jjad').style.display='none';
    }else if(document.getElementById('jjvodPlayer').PlayState==2||document.getElementById('jjvodPlayer').PlayState==4){
         document.getElementById('jjad').style.display='block';
    }else if(document.getElementById('jjvodPlayer').PlayState==12){
		if(jjvod_nextpage!=''){
			window.parent.location.href=jjvod_nextpage;
		}
	}
}


//加载jjvod
function addJJVod(){
if(!!window.ActiveXObject || "ActiveXObject" in window){
		document.write("<div style='position:relative'>");
		document.write('<div id="jjad" style="position:absolute; z-index:1001"><iframe marginWidth="0" id="wdqad" name="wdqad" marginHeight="0" src="'+jjvod_ad+'" frameBorder="0" width="'+jjvod_w+'" scrolling="no" height="'+jjvod_adh+'"></iframe></div>');
		document.write("<object classid='clsid:C56A576C-CC4F-4414-8CB1-9AAC2F535837' width='"+jjvod_w+"' height='"+jjvod_h+"' id='jjvodPlayer' name='jjvodPlayer' onerror=\"document.getElementById('jjvodPlayer').style.display='none';document.getElementById('jjad').style.display='block';document.getElementById('wdqad').src='"+jjvod_install+"';\"><PARAM NAME='URL' VALUE='"+jjvod_url+"'><PARAM NAME='WEB_URL' VALUE='"+jjvod_weburl+"'><param name='Autoplay' value='1'></object>");
		document.write("</div>");
		var ver = chkJJActivexVer();
		setInterval('jjvodstatus()','1000');

}else{
	if (navigator.plugins) {
		var install = false;
		for (var i=0;i<navigator.plugins.length;i++) {
			if(navigator.plugins[i].name == 'JJvod Plugin'){
				install = true;break;
			}
		}
		
		if(install){//已安装
			document.write('<div style="width:'+jjvod_w+'px; height:'+jjvod_h+'px;overflow:hidden;position:relative">');
			document.write('<div id="jjad" style="position:absolute;z-index:2;top:0px;left:0px"><iframe border="0" src="'+jjvod_ad+'" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" noResize scrolling="no" width="'+jjvod_w+'" height="'+jjvod_adh+'" vspale="0"></iframe></div>');
			document.write('<object id="jjvodPlayer" name="jjvodPlayer" TYPE="application/x-itst-activex" ALIGN="baseline" BORDER="0" WIDTH="'+jjvod_w+'" HEIGHT="'+jjvod_h+'" progid="WEBPLAYER.WebPlayerCtrl.2" param_URL="'+jjvod_url+'" param_WEB_URL="'+jjvod_weburl+'"></object>');
			document.write("</div>");
			setInterval('jjvodstatus()','1000');
		}else{
			document.write('<div id="jjad"><iframe border="0" src="'+jjvod_install+'" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" noResize scrolling="no" width="'+jjvod_w+'" height="410" vspale="0"></iframe></div>');
		}
	}
}
}

function killErrors(){return true;}window.onerror = killErrors;

addJJVod();

function chkJJActivexVer(){
	var playerS = document.getElementById('jjvodPlayer');
	if(playerS.GetVer&&typeof(playerS.GetVer)=="number"){
		return ;
	}else{//下载升级官方最新版
		var play = checkPlugins('WEBPLAYER.WebPlayerCtrl.1');
		if(play){
			if(confirm("请下载升级最新吉吉影音播放器，以便更流畅播放影片！")){
				window.location.href="http://dl.jijivod.com/JJPlayer_"+jjvod_c+".exe";
			}else{
				return false;
			}
		}
	}
}
function checkPlugins(activexObjectName) {
	var np = navigator.plugins;	
	if (np && np.length)// 针对于FF等非IE.
	{
		for(var i = 0; i < np.length; i ++) {
			if(np[i].name.indexOf(activexObjectName)!= -1)
			{
				return true;
			}
		}
	}
	else if (window.ActiveXObject)// 针对于IE
	{
		try {
			new ActiveXObject(activexObjectName);
			return true;
		}
		catch (e) {
			return false;
		}
	}
	return false;
}

var EventUtil =
	{
	    addHandler: function (element, type, handler) {
	        if (element.addEventListener) {
	            element.addEventListener(type, handler, false);
	        }
	        else {
	            element.attachEvent("on" + type, handler);
	        }
	    },

	    removeHandler: function (element, type, handler) {
	        if (element.removeEventListener) {
	            element.removeEventListener(type, handler, false);
	        }
	        else {
	            element.detachEvent("on" + type, handler);
	        }
	    }
	};    
var unloadhandler = function () {
	var playerS = document.getElementById('jjvodPlayer');
        if (playerS != null) {
            playerS.Close();
            playerS = null;
        }
}

var beforeunloadhandler = function () { 
   var playerS = document.getElementById('jjvodPlayer');
   if (playerS != null) {
       playerS.Close();
       playerS = null;
   }
}  
EventUtil.addHandler(window, "beforeunload", beforeunloadhandler);

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
document.getElementById('player').innerHTML = '<embed type="application/x-shockwave-flash" src="http://static.funshion.com/market/p2p/vod/2014-9-26/FunPlayerUi_3.0.0.25.swf" id="Player" bgcolor="#FFFFFF" quality="high" allowfullscreen="true" allowNetworking="internal" allowscriptaccess="never" wmode="transparent" menu="false" always="false" flashvars="pauseAp=&mediaAp=c_wb_1_lv&userSeek=1&type=movie&partner=69&funshionSetup=0&start=1&itemid='+parent.now+'&data=1&startAd=0&userMac=&poster=&stopUrl=" pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="'+playerh+'">';

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  

var now=parent.now;//鎾斁瑙嗛鍦板潃
var playerw = parent.playerw;//鎾斁鍣ㄥ搴?
var playerh = parent.playerh;//鎾斁鍣ㄩ珮搴?
var ffhd_adh = playerh-40;//骞垮憡楂樺害
var adsPage = parent.adsPage;//缂撳啿鍜屾殏鍋滆皟鐢ㄥ箍鍛婂湴

var playerh=parent.playerh;
document.getElementById('player').innerHTML = '<iframe border="0" src="ffhd2.html" width="100%" height="'+ playerh +'" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" scrolling="no" vspale="0" noResize></iframe>';

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
document.getElementById('player').innerHTML  = '<embed type="application/x-shockwave-flash" src="http://player.ku6cdn.com/default/out/pV2.7.3.swf" id="mymovie" name="mymovie" quality="high" flashvars="ver=108&amp;jump=0&amp;api=1&amp;auto=1&amp;color=0&amp;deflogo=0&amp;flag=hd&amp;adss=0&amp;vid='+parent.now+'&amp;type=v" wmode="transparent" allowscriptaccess="always" allowfullscreen="true" width="100%" height="'+playerh+'"></embed>';

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
var str = parent.now;
//document.getElementById('player').innerHTML  = '<embed height=\"'+playerh+'\" width=\"100%\" class=\"player\" allowFullScreenInteractive=\"true\" pluginspage=\"http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash\" AllowScriptAccess=\"always\" rel=\"noreferrer\" flashvars=\"vid='+parent.now+'\" src=\"http://cdn.aixifan.com/player/ACFlashPlayer.out.swf?vid='+parent.now+'\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" quality=\"high\" wmode=\"window\"></embed>'

document.getElementById('player').innerHTML  = '<iframe width="100%" height="'+playerh+'" src="http://cdn.aixifan.com/player/ACFlashPlayer.out.swf?vid='+parent.now+'" id="ACFlashPlayer-re" frameborder="0"></iframe>';


  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;

var a=parent.now.split(",");
	var u1=a[0];
	var u2=a[1];
	
document.getElementById('player').innerHTML  = '<embed width="100%" height="'+playerh+'" align="middle" id="flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="http://dispatcher.video.qiyi.com/disp/shareplayer.swf" type="application/x-shockwave-flash" allowscriptaccess="always" flashvars="vid='+u1+'&&tvid='+u2+'&coop=coop_qire&cid=qc_100001_10001111&bd=1&autoPlay=1" bgcolor="#000000" menu="true" allowfullscreen="true" devicefont="false" scale="showall" quality="hight" play="true" loop="true"/>';


  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
document.getElementById('player').innerHTML  = '<iframe width="100%" height='+playerh+' src="dplayer/dplayer.html?videourl='+parent.nextPage+','+parent.now + ','+parent.next+','+parent.vid+','+parent.vfrom+','+parent.vpart+'" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>';

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
var a=parent.now.split("-");
	var u1=a[0];
	var u2=a[1];
	
document.getElementById('player').innerHTML  = '<embed allowfullscreen="true" wmode="transparent" quality="high" src="http://video.kankan.com/dt/swf/v_sina.swf?id='+u1+'&sid='+u2+'&vtype=1&mtype=teleplay" quality="high" bgcolor="#000" width="100%" height="'+playerh+'" name="player" id="playerr" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>';

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
document.getElementById('player').innerHTML  = '<embed id="embed_flash_player" wmode="opaque" allowscriptaccess="always" src="http://s1.56img.com/flashApp/v_player.13.07.11.as3.b.swf?vid='+parent.now+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowfullscreen="true" width="100%" height="'+playerh+'"></embed>';

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
document.getElementById('player').innerHTML  = '<object classid="clsid:D27CDB6E-AE6D-11CF-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" border="0" width="100%" height="'+playerh+'" ><param name="movie" value="'+parent.now+'"><param name="quality" value="High"><embed src="'+parent.now+'" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowfullscreen="true" name="obj1" quality="High" width="100%" height="'+playerh+'"></object>';

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
var str = parent.now;
if (str.length < 8)
{
document.getElementById('player').innerHTML  = '<embed height="'+playerh+'" width="100%" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://static.hdslb.com/miniloader.swf" flashvars="aid='+str+'&page=1" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>';
}
else if(str.indexOf("http://")>=0)
{
if (str.length > 40){
var a=str.split("/index_");
	var u1=a[0].substring(32,39);
	var u2=a[1].substring(0,1); 
document.getElementById('player').innerHTML  = '<embed height="'+playerh+'" width="100%" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://static.hdslb.com/miniloader.swf" flashvars="aid='+u1+'&page='+u2+'" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>';
}
else
var substr = /av(\w+)\W/gi.exec(str);
document.getElementById('player').innerHTML  = '<embed height="'+playerh+'" width="100%" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://static.hdslb.com/miniloader.swf" flashvars="aid='+substr[1]+'&page=1" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>';
}

  

adTime=parent.adsTime;  

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  

var playerh=parent.playerh;
document.getElementById('player').innerHTML  = '<iframe src="'+parent.now+'" scrolling="0" frameborder="0" width="100%" height="'+playerh+'" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>';

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var now = parent.now;  //本集播放地址，需更改
var next = parent.next;  //缓冲下一集，需更改
var nextPage =  parent.nextPage;  //下一集播放页面地址，需更改
var adsPage = parent.adsPage;  // 播缓冲AD，需更改
var adsPage =  parent.adsPage;  // 暂停AD，需更改
var playerw =  parent.playerw;   // 播放器显示宽度
var playerh = parent.playerh;  // 播放器显示高度
var adsTime =  parent.adsTime;  // 缓冲时间




var playerh=parent.playerh;
document.getElementById('player').innerHTML = '<iframe border="0" src="xigua2.html" width="100%" height="'+ playerh +'" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" scrolling="no" vspale="0" noResize></iframe>';      

  
 
adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


//可选配置
var oncolor="#3ea23d";   //选中颜色
var ontext="▶";       //选中附加文本

//生成解析数组,方便后续操作
var jxname=new Array(5);
var jxapi=new Array(5);

for(i=0;i<5;i++)
 {
switch (i)
{
case 0:
    jxname[0]=parent.jxAname;
	jxapi[0]=parent.jxAapi;
    break;
case 1:
    jxname[1]=parent.jxBname;
	jxapi[1]=parent.jxBapi;
	break;
case 2:
    jxname[2]=parent.jxCname;
	jxapi[2]=parent.jxCapi;
   break;
case 3:
  jxname[3]=parent.jxDname;
	jxapi[3]=parent.jxDapi;
  break;
case 4:
   jxname[4]=parent.jxEname;
   jxapi[4]=parent.jxEapi;
  break;
}
 
}

//获取并设置解析
var jxnum=Number(localStorage.getItem("jxnum"));

//设置缓存及选行选中项
 function col(num)
{
//删除原选中项
var x=document.getElementById("jx"+jxnum);x.style.color="#aaa";x.innerHTML=jxname[jxnum];
//设置选行选中项
var x=document.getElementById("jx"+num);x.style.color=oncolor;x.innerHTML=jxname[num]+ontext;
//更新缓存
jxnum=num;localStorage.setItem("jxnum", num);
 }

var playerh=parent.playerh;
document.getElementById('player').innerHTML  = '<div style="height:26px; background-color:#2E2E2E; line-height:26px; color:#aaa;">&nbsp;线路:&nbsp;<a  id="jx0"  target="zzapi"  href="'+parent.jxAapi+parent.now+'" onclick="col(0);"><font style="color:#aaa">'+parent.jxAname+'</font></a> &nbsp;&nbsp;&nbsp;<a id="jx1" target="zzapi"  href="'+parent.jxBapi+parent.now+'" onclick="col(1);" ><font style="color:#aaa">'+parent.jxBname+'</font></a>&nbsp;&nbsp;&nbsp;<a id="jx2" target="zzapi"  href="'+parent.jxCapi+parent.now+'" onclick="col(2);" ><font style="color:#aaa">'+parent.jxCname+'</font></a> &nbsp;&nbsp;&nbsp;<a id="jx3" target="zzapi"  href="'+parent.jxDapi+parent.now+'" onclick="col(3);"><font style="color:#aaa">'+parent.jxDname+'</font></a> &nbsp;&nbsp;&nbsp;<a id="jx4" target="zzapi"  href="'+parent.jxEapi+parent.now+'" onclick="col(4);" ><font style="color:#aaa">'+parent.jxEname+'</font></a> </div><div style="height:calc(100% - 26px);"><iframe name="zzapi" id="zzapi" src="'+jxapi[jxnum]+parent.now+'" scrolling="0" frameborder="0" width="100%" height="100%" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe></div>';
var x=document.getElementById("jx"+jxnum);x.innerHTML=jxname[jxnum]+ontext;x.style.color=oncolor;

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
document.getElementById('player').innerHTML  = '<br><br><br><center><a href="'+parent.now+'" target="_blank">3秒后系统会自动跳转，也可点击本处直接跳</a></center>';

 
function jumpurl(){  
  parent.location=parent.now;  
}  
setTimeout('jumpurl()',3000);  


  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
var str = parent.now;
if(str.indexOf("http://")>=0)
{
var substr = str.match(/([^/]*).html/)[1];
document.getElementById('player').innerHTML = '<embed type="application/x-shockwave-flash" src="http://static.video.qq.com/TencentPlayer.swf?vid='+substr+'&auto=1&outhost=http://cf.qq.com/" id="Player" bgcolor="#FFFFFF" quality="high" allowfullscreen="true" allowNetworking="internal" allowscriptaccess="never" wmode="transparent" menu="false" always="false"  pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="'+playerh+'" flashvars="">';
}
else
{
document.getElementById('player').innerHTML = '<embed type="application/x-shockwave-flash" src="http://static.video.qq.com/TencentPlayer.swf?vid='+parent.now+'&auto=1&outhost=http://cf.qq.com/" id="Player" bgcolor="#FFFFFF" quality="high" allowfullscreen="true" allowNetworking="internal" allowscriptaccess="never" wmode="transparent" menu="false" always="false"  pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="'+playerh+'" flashvars="">';
}

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  

var now = parent.now;//播放视频地址
var playerw = parent.playerw;//播放器宽度
var playerh = parent.playerh;//播放器高度
var jjvod_h = jjvod_h;//广告高度
var adsPage = parent.adsPage;//缓冲和暂停调用广告地址
var jjvod_c = 'seacms'; //吉吉影音推广渠道，一般为域名简写，如baidu
var jjvod_install = 'http://player.jjvod.com/js/jjplayer_install.html?v=1&c='+jjvod_c;
var jjvod_weburl = unescape(window.location.href);
var nextPage = parent.nextPage;


var playerh=parent.playerh;
document.getElementById('player').innerHTML = '<iframe border="0" src="jjvod2.html" width="100%" height="'+ playerh +'" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" scrolling="no" vspale="0" noResize></iframe>';

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  

var now = parent.now;  //本集播放地址，需更改
var next = parent.next;  //缓冲下一集，需更改
var nextPage =  parent.nextPage;  //下一集播放页面地址，需更改
var adsPage = parent.adsPage;  // 播缓冲AD，需更改
var adsPage =  parent.adsPage;  // 暂停AD，需更改
var playerw =  parent.playerw;   // 播放器显示宽度
var playerh = parent.playerh;  // 播放器显示高度
var adsTime =  parent.adsTime;  // 缓冲时间

var playerh=parent.playerh;
document.getElementById('player').innerHTML = '<iframe border="0" src="xfplay2.html" width="100%" height="'+ playerh +'" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" scrolling="no" vspale="0" noResize></iframe>';

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
var str = parent.now;
if(str.indexOf("http://")>=0)
{
var substr = str.match(/([^/]*).html/)[1];
document.getElementById('player').innerHTML = '<embed type="application/x-shockwave-flash" src="http://www.letv.com/player/x'+substr+'.swf" id="Player" bgcolor="#FFFFFF" quality="high" allowfullscreen="true" allowNetworking="internal" allowscriptaccess="never" wmode="transparent" menu="false" always="false"  pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="'+playerh+'" flashvars="">';
}
else
{
document.getElementById('player').innerHTML = '<embed type="application/x-shockwave-flash" src="http://www.letv.com/player/x'+parent.now+'.swf" id="Player" bgcolor="#FFFFFF" quality="high" allowfullscreen="true" allowNetworking="internal" allowscriptaccess="never" wmode="transparent" menu="false" always="false"  pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="'+playerh+'" flashvars="">';
}

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
var str = parent.now;
if(str.indexOf("http://")>=0)
{
var substr = str.match(/([^/]*).shtml/)[1];
document.getElementById('player').innerHTML  = '<embed type="application/x-shockwave-flash" src="http://static.m1905.com/v/20140716/v.swf" width="100%" height="'+playerh+'" style="" id="__M1905FlashPlayer__" name="__M1905FlashPlayer__" bgcolor="#00000" quality="high" allowscriptaccess="always" allownetworking="all" allowfullscreen="true" wmode="Opaque" flashvars="configUrl=http://static.m1905.com/profile/vod/'+substr.substring(0,1)+'/'+substr.substring(1,2)+'/'+substr+'_1.xml&LoGo=false&wide=false&hd=true&light=true&playAd=false&autoPlay=true&cdn=false">';
}
else
{
document.getElementById('player').innerHTML  = '<embed type="application/x-shockwave-flash" src="http://static.m1905.com/v/20140716/v.swf" width="100%" height="'+playerh+'" style="" id="__M1905FlashPlayer__" name="__M1905FlashPlayer__" bgcolor="#00000" quality="high" allowscriptaccess="always" allownetworking="all" allowfullscreen="true" wmode="Opaque" flashvars="configUrl=http://static.m1905.com/profile/vod/'+parent.now.substring(0,1)+'/'+parent.now.substring(1,2)+'/'+parent.now+'_1.xml&LoGo=false&wide=false&hd=true&light=true&playAd=false&autoPlay=true&cdn=false">';
}

  

adTime=parent.adsTime; 
chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  

var playerh=parent.playerh;
var jpurl=parent.now;
var xurl=parent.nextPage;
var surl=parent.prePage;
var urlname=parent.vpart; 



    var playhtml='<div class="oldPlayer"><div id="cscms_jplayer"class="jp-jplayer"></div><div id="jp_container_1"class="jp-audio"><div class="jp-type-single"><div class="jp-interface clearfix"><div class="playerMain-01"><div class="jp-time-holder"><div class="jp-current-time">00:00</div>/<div class="jp-duration">00:00</div></div></div><div class="playerMain-02"><div class="jp-progress"><div class="jp-seek-bar"><div class="jp-play-bar"></div></div></div></div><div class="playerMain-03"><div class="fl"><ul class="jp-controls"><li><a href="'+surl+'"target="_top" class="jp-previous" tabindex="1">上一首</a></li><li><a href="javascript:{};"class="jp-play"tabindex="1">播放</a></li><li><a style="display:none;"href="javascript:{};"class="jp-pause"tabindex="1">暂停</a></li><li><a href="'+xurl+'"target="_top" class="jp-next"tabindex="1">下一首</a></li></ul></div>';
    playhtml+='<div class="fr"><ul class="ku-volume"><li><a href="javascript:{};"class="jp-mute"tabindex="1"title="静音">静音</a></li><li><a href="javascript:{};"class="jp-unmute"style="display:none;"tabindex="1"title="取消静音">取消静音</a></li><li class="volume-bar-wrap"><div class="jp-volume-bar"><div class="jp-volume-bar-value"></div></div></li><li><a href="javascript:{};"class="jp-volume-max"tabindex="1"title="最大音量">最大音量</a></li></ul></div></div></div><div class="jp-no-solution"><span>播放出现故障,您需要更新！</span>对不起，您需要更新您的浏览器到最新版本或更新您的flash播放器版本！<br/><a href="http://get.adobe.com/flashplayer/"target="_blank">点击下载Flash plugin>></a></div></div></div></div></div>';
    document.getElementById('player').innerHTML = playhtml;
    $("#cscms_jplayer").jPlayer({
        supplied: "mp3,m4a",
        swfPath: "jplayer/jplayer.swf",
        wmode: "window",
        ready:function (event){ getjp_play(); },
        ended: function () { getjp_next(); }
    });




function getjp_next() {
        if( xurl != "") {
              top.location =  xurl;
        }else{
              getjp_play();
        }
}
function getjp_play() {
	if(jpurl.indexOf(".mp3")>0){		
		$("#cscms_jplayer").jPlayer("setMedia", {mp3:jpurl}).jPlayer("play");
	}else{
		$("#cscms_jplayer").jPlayer("setMedia", {m4a:jpurl}).jPlayer("play");
	}
}


  

	function parseVideo(type,vid)
	{
		//去除地址中的“$”并重新进行拼接地址
		while(vid.indexOf("$") > -1) {
			var string_index = vid.indexOf("$");
			if(string_index == 0) {
				vid = vid.replace("$", "");
			} else {
				vid = vid.substring(string_index, "");
			}
		}

		// 判断视频地址变量是否是id
		if(vid.indexOf("http://") === -1 && vid.indexOf("https://") === -1) {
			if (type == 'youku') {
				vid = "http://v.youku.com/v_show/id_" + vid + ".html";
			} else if (type == 'qq'){
				vid = 'http://v.qq.com/x/cover/' + vid + '.html';
			}else if(type=='ykyun'){
				vid = 'http://www.xiguaso.com/api/index.php?url='+vid+'==~ykyun';
			}
		}

		try{
			document.getElementById('playerBox').style.height = parent.playerh + 'px';
			if(type=='ykyun'){document.getElementById('playerBox').src =  vid;}
			else{
			document.getElementById('playerBox').src = "http://cytron.cdn.videojj.com/latest/player.iframe.html?appkey=S1Q2Of8Vg&video=" + vid;
			}
		}
		catch(e){}
	}
	var playData = parent.handleParas(parent.paras[2],parent.paras[1]);
	parseVideo(playData[2],playData[1]);
	

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
var str = parent.now;
if(str.indexOf("http://")>=0)
{
var substr = str.match(/([^/]*).html/)[1];
document.getElementById('player').innerHTML  = '<embed src="http://i1.hunantv.com/ui/swf/share/player.swf?play_type=1&video_id='+parent.now+'" allowFullScreen="true" quality="high" width="100%" height="'+playerh+'" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>';
}
else
{
document.getElementById('player').innerHTML  = '<embed src="http://i1.hunantv.com/ui/swf/share/player.swf?play_type=1&video_id='+parent.now+'" allowFullScreen="true" quality="high" width="100%" height="'+playerh+'" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>';
}

  

adTime=parent.adsTime; 

chanceAd=1;
var ns=(document.layers);
var ie=(document.all);
var w3=(document.getElementById  &&  !ie);
adCount=0;
function initAd(){
        if(!ns  &&  !ie  &&  !w3) return;
        if(ie)             adDiv=eval('document.all.sponsorAdDiv.style');
        else if(ns)        adDiv=eval('document.layers["sponsorAdDiv"]');
        else if(w3)        adDiv=eval('document.getElementById("sponsorAdDiv").style');
        randAd=Math.ceil(Math.random()*chanceAd);
        if (ie||w3)
        adDiv.visibility="visible";
        else
        adDiv.visibility ="show";
        if(randAd==1) showAd();
		document.getElementById("zzzif").src=parent.adsPage; 
		document.getElementById("zzzif").height=parent.playerh;
		document.getElementById("zzzif").width=parent.playerw; 		
}
function showAd(){
if(adCount<adTime*10){adCount+=1;
        if (ie){documentWidth  =document.body.offsetWidth/2+document.body.scrollLeft-20;
        documentHeight =document.body.offsetHeight/2+document.body.scrollTop-20;}
        else if (ns){documentWidth=window.innerWidth/2+window.pageXOffset-20;
        documentHeight=window.innerHeight/2+window.pageYOffset-20;}
        else if (w3){documentWidth=self.innerWidth/2+window.pageXOffset-20;
        documentHeight=self.innerHeight/2+window.pageYOffset-20;}
        adDiv.left=documentWidth-200;adDiv.top =documentHeight-200;
        setTimeout("showAd()",100);}else closeAd();
}
function closeAd(){
if (ie||w3)
adDiv.display="none";
else
adDiv.visibility ="hide";
}
onload=initAd;

  


var playerh=parent.playerh;
document.getElementById('player').innerHTML = '<embed type="application/x-shockwave-flash" src="http://player.pptv.com/v/'+parent.now+'.swf" id="Player" bgcolor="#FFFFFF" quality="high" allowfullscreen="true" allowNetworking="internal" allowscriptaccess="never" wmode="transparent" menu="false" always="false"  pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="'+playerh+'" flashvars="">';

 