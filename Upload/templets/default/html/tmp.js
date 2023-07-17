 

		function hiddenps(){
			 $(".col-md-wide-75").css("width","100%");
			 $(".col-md-wide-25").css("display","none");
			 $(".is-btn").css("display","none");
		}
		
  

			{if:{playpage:upid} == 1}
			$("#playlist li").addClass("col-md-2 col-sm-5 col-xs-3");
			{elseif:{playpage:upid} == 3}
			$("#playlist li").addClass("col-md-2 col-sm-5 col-xs-3");
			{else}
			$("#playlist li").addClass("col-md-2 col-sm-5 col-xs-4");
			{end if}
			$("#playlist a").addClass("btn btn-min btn-gray");
		
  

			MyTheme.Other.Roll('.tips','-30px');
			$(".tips-close-btn").on("click",function(){
				$(this).parents(".close-box").remove();
				MyTheme.Other.Player();
				Myui.Other.Topbg($("#player-left").outerHeight()+50);
			});
		
  

			Myui.Other.Topbg($("#player-left").outerHeight()+50);
		
  

									var history_get = MyTheme.Cookie.Get("history");
									if (history_get) {
										var json = eval("(" + history_get + ")");
										for (i = 0; i < json.length; i++) {
											document.write("<p><a class='text-333' href='" + json[i].link + "' title='" + json[i].name +"'><span class='pull-right text-red'>" + json[i].part + "</span>" + json[i].name + "</a></p>");
										}
									} else {
										document.write("<p style='padding: 80px 0; text-align: center'>您还没有看过影片哦</p>");
									}
								
  
 Myui.Score();
  

					function echoDown(str,num){
						var s=str.split("###");
						for(var i=0;i<s.length;i++){
							gurl=s[i].split("$");						
							document.write('<li class="striped-head top-line clearfix"><span class="text col-md-wide-25 col-sm-wide-6 col-xs-wide-6"><input type="checkbox" name="down_url_list_'+ num +'" value="'+gurl[1]+'" class="down_url" /> '+gurl[0]+'</span><span class="col-md-wide-4 hidden-sm hidden-xs"><input class="form-control" type="text" name="" value="'+gurl[1]+'" /></span><span class="col-md-wide-35 col-sm-wide-4 col-xs-wide-4 text-right"><a class="btn btn-primary common_down" href=\"javascript:;\">迅雷下载</a><a href="javascript:;" class="btn btn-default hidden-xs thunderkk" style="margin-left:5px;">看看播放</a></span></li>');
						}
					}
				
  
var GvodUrls[downlist:i] = "[downlist:linkstr]";echoDown(GvodUrls[downlist:i],0);
  

	$(".tab-pane:first,.nav-tabs li:first").addClass("active");
	{if:{playpage:upid} == 1}
	$(".sort-list li").addClass("col-md-6 col-sm-4 col-xs-2");
	{elseif:{playpage:upid} == 3}
	$(".sort-list li").addClass("col-md-6 col-sm-4 col-xs-2");
	{else}
	$(".sort-list li").addClass("col-md-8 col-sm-6 col-xs-4");
	{end if}
	$(".sort-list a").addClass("btn btn-default");
	$(".sort-list a[style='color:red']").css("color","").removeClass("btn-gray").addClass("btn-warm active");

  
Myui.Other.Topbg($(".topline").offset().top);
  
Myui.Other.Topbg($("#index-hot").outerHeight()+110);
  
Myui.Other.Topbg($("#type-hot").outerHeight()+110);
  

	MyTheme.Images.Qrcode.Init();
	MyTheme.Link.Short();

  
var sitePath='{seacms:sitepath}', siteUrl='{seacms:siteurl}'
 