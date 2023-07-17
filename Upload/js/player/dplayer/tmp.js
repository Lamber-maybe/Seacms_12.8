 

	//获取地址栏里传递过来的视频地址
	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg); //匹配目标参数
		if(r != null) return unescape(r[2]);
		return null; //返回参数值
	}
	
	
   //设置浏览器缓存项值，参数：项名,值,有效时间(小时)
    function setCookie(c_name, value, expireHours) {
      var exdate = new Date();
      exdate.setHours(exdate.getHours() + expireHours);
      document.cookie = c_name + "=" + escape(value) + ((expireHours === null) ? "" : ";expires=" + exdate.toGMTString());
    }
    //获取浏览器缓存项值，参数：项名
    function getCookie(c_name) {
      if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start !== -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end === -1) {
                c_end = document.cookie.length;
            };
            return unescape(document.cookie.substring(c_start, c_end));
         }
     }
    return "";
   }
	

	
	var videoUrl2 =getUrlParam('videourl');
	var a=videoUrl2.split(",");
	var nextpage=a[0];
	var videoUrl=a[1];
	var videoUrl=videoUrl.split("|");
	var zm=videoUrl[1];
	var videoUrl=videoUrl[0];	
	var vid=a[3];
	var vfrom=a[4];
	var vpart=a[5];
	var vpart2=parseInt(a[5])+1;
	var did=hex_md5(videoUrl);
	var headtime=Number(getCookie(did) || 0);

//获取剧集数据
    function getvideo(url){  	
    		$.ajax({
				url: '/ass.php?url=dp&vid='+vid+'&vfrom='+vfrom+'&vpart='+vpart,
				dataType: 'jsonp',
				jsonp: 'cb',                 
				success:function(data){					
					//剧集及当前集数
				     xyplay=data.s;						 
				     if(xyplay.part>0){xyplay.part--;}
				},				
    		})
	
    }
	//获取剧集数据
	if("undefined" !== typeof nextpage && nextpage!=""){getvideo(nextpage);}
 

  

    var type='normal';
    var live=false;
    if(videoUrl.indexOf('.m3u8')>-1){
        type='hls';
        live=true;
    }
    else if(videoUrl.indexOf('magnet:')>-1){
        type='webtorrent';
    }
    else if(videoUrl.indexOf('.flv')>-1){
        type='flv';
    }
    else if(videoUrl.indexOf('.mpd')>-1){
        type='dash';
    }
	
    var dp = new DPlayer({
        container: document.getElementById('playerCnt'),
        autoplay: true,
		airplay:true,
        video: {
            url: videoUrl,
            type:type
        },
		subtitle: {
        url:zm,
        type: 'webvtt',
        fontSize: '26px',
        bottom: '10px',
        color: '#b7daff',
    },
        front:"video_front",
        next:"video_next",
    });
	dp.subtitle.show();
	

	
//试看
	dp.on('timeupdate', function () {
	var vtry_time=xyplay['try'];
	var vjifen=xyplay['jifen'];
	var vjifenname=xyplay['jifenname'];
	var vhouz=xyplay['houz'];
	var vippart=parseInt(xyplay.part);
	var viparr2=xyplay.vipp;
	var viparr=Object.values(viparr2);
	var vpart3=vpart2-1;
	var isauth=xyplay['isauth'];
          if (IsInArray(viparr,vippart) && isauth=='n' && dp.video.currentTime > vtry_time) {
                 dp.pause();
				 dp.fullScreen.cancel('playerCnt');
				 
document.write("<div class='x-showtips-txt'  style='position:absolute;top:50%;left:50%;width: 100%;transform:translate(-50%,-50%);text-align:center;background:#1a1b1b;padding: 20px;'><div class='x-tips-title' style='font-size:16px;font-weight:700;color:#fff';>抱歉，本片需要购买观看完整版</div><div class='x-tips-subTitle'   style='font-size: 12px;color: #ccc;margin-top: 4px;max-height: 17px';>开通VIP购买此片，可享受会员权限</div><div class='x-showtips-btn'   style='width: 100%;float: left;padding: 5px';><div class='x-btn x-btn-try'  style='border: 1px solid #ebba73;border-radius: 22.5px;box-sizing: border-box;width: 150pxposition: relative;margin-top: 14px;display: inline-block;padding: 0 12px; margin-right: 12px;color: #c8a764;background-image: linear-gradient(270deg,#1b1b1b 0,#000 99%)';><div class='x-btn-text' ><a style='display: inline-block;text-align: center;font-size: 13px;color: #ebba73;height: 32px;line-height: 30px; width: 100%;max-width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-decoration:none';  href=/video/?"+vid+"-"+vfrom+"-"+vpart3+vhouz+"&action=pay&from2="+vpart3+" target='_blank'>非会员"+vjifen+""+vjifenname+"购买</a></div></div><div class='x-btn x-btn-buy' style='border: 1px solid #ebba73;border-radius: 22.5px;box-sizing: border-box;width: 150px;position: relative;margin-top: 14px;display: inline-block;padding: 0 12px;background-image: linear-gradient(132deg,#e1b271 0,#fce5aa 100%)';><div class='x-btn-text x-btn-buy-text'><a  style='display: inline-block;text-align: center;font-size: 13px;color: #ebba73;height: 32px;line-height: 30px;width: 100%;max-width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size: 13px;font-size: 13px;font-weight: 700;color: #5b3301;text-decoration:none'; href='/member.php' target='_blank'>开通会员</a></div></div></div></div>");                    
           }
});
	

	//绑定准备就绪回调
    dp.on("loadedmetadata", function () {loadedmetadataHandler();});

	
	//绑定播放结束回调
    dp.on("ended", function () {endedHandler();});
	
	
	
	//视频就绪回调,用来监控播放开始 
      function loadedmetadataHandler() {
                if (  headtime > 0 && dp.video.currentTime < headtime) {
                        dp.seek(headtime);
                        dp.notice("继续上次播放");
 
                } else {
                       dp.notice("视频已就绪");
            
                }
                        dp.on("timeupdate", function () {
                        timeupdateHandler();
                    })
					$("#playerCnt").addClass("dplayer-hide-controller");
           
            }
       //播放进度回调  	
         function timeupdateHandler() {
                 setCookie(did,dp.video.currentTime,24);
           }
	

          //播放结束回调		
            function endedHandler() {
               
             setCookie(did,"",-1);
                
            if ("undefined" !== typeof xyplay && "undefined" !== typeof xyplay.video){
               
                if (Number(xyplay.part) + 1 <= xyplay.video.length){
                     dp.notice("视频已结束,为您跳到下一集");
                     setTimeout(function () {video_next();}, 500);
                } else {
                    dp.notice("视频播放已结束");
                }
           
             }else{
             	
              	if("undefined" !== typeof nextpage && nextpage!=""){ top.location.href=nextpage;}	

             }
           
            }


	 //播放下集
function IsInArray(arr,value){
    for(var i = 0; i < arr.length; i++){
        if(value === arr[i]){
            return true;
        }
    }
    return false;
}
            function video_next() {
                if ("undefined" !== typeof xyplay && "undefined" !== typeof xyplay.video)
                    if (Number(xyplay.part) + 1>= xyplay.video.length) {
                    	dp.notice("已经是最后一集");
	
                        return false;
                    }
                xyplay.part++; 		
                myplay(xyplay.video[xyplay.part]);
               
            }
	
	
	//播放上集	
            function video_front() {
                if ("undefined" !== typeof xyplay && "undefined" !== typeof xyplay.video)
                    if (Number(xyplay.part) <= 0) {
                    	dp.notice("已经是最前一集");
                        return false;
                    }
                xyplay.part--;
                myplay(xyplay.video[xyplay.part]);

            }
	
	
	 //调用播放
            function myplay(url) { 
var vippart=parseInt(xyplay.part)+1;
var houz=xyplay['houz'];
var vtry=xyplay['try'];
var viparr2=xyplay.vipp;
var viparr=Object.values(viparr2);
if(IsInArray(viparr,vippart) && vtry =='0' ){top.location.href="/video/?"+vid+"-"+vfrom+"-"+vpart2+houz;}	           	
                videoUrl=url; did=hex_md5(videoUrl);
                headtime= Number(getCookie(did));
				videoUrl=videoUrl.split("|");
				zm2=videoUrl[1];
				videoUrl2=videoUrl[0];

                dp.switchVideo(
				{url: videoUrl2,}
				);
				
				dp.play();dp.subtitle.hide();
				

	
            }
	

 