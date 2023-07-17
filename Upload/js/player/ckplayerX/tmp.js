 

			//获取地址栏里传递过来的视频地址
			function getUrlParam(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
				var r = window.location.search.substr(1).match(reg); 
				if(r != null) return unescape(r[2]);
				return null; //返回参数值
			}
			var videoUrl2 =getUrlParam('videourl');
			var a=videoUrl2.split(",");
			var nextpage=a[0];
			var videoUrl=a[1];
			var vUrl=videoUrl.split("|");
			var playurl=vUrl[0];
			var zm=vUrl[1];
			var videoObject = {
				container: '#video',
				html5m3u8: true,
				track:[
			{
				kind:'subtitles',
				src:zm,
				srclang:'zh',
				label:'字幕',
				default:true,
			}
			],
				variable:'player',
				autoplay: true, 
				loop: false, 
				live: false, 
				flashplayer: false, 
				loaded: 'loadedHandler', 
				plug:'hls.js',
				video:playurl

			};


			var player=new ckplayer(videoObject);

			player.ended(function(){
				if(nextpage!='' && nextpage !='undefined'){top.location.href = nextpage;}
			});
	
	

	
	
		
 