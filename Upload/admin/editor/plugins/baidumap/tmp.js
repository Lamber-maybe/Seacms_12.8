 

			var map, geocoder;
			function initialize() {
				map = new BMap.Map('map_canvas');
				var point = new BMap.Point(121.473704, 31.230393);
				map.centerAndZoom(point, 11);
				map.addControl(new BMap.NavigationControl());
				map.enableScrollWheelZoom();

				var gc = new BMap.Geocoder();
				gc.getLocation(point, function(rs){
					var addComp = rs.addressComponents;
					var address = [addComp.city].join('');
					parent.document.getElementById("kindeditor_plugin_map_address").value = address;
				});
			}
			function search(address) {
				if (!map) return;
				var local = new BMap.LocalSearch(map, {
					renderOptions: {
						map: map,
						autoViewport: true,
						selectFirstResult: false
					}
				});
				local.search(address);
			}
		
  

	function getParam(name) {
		return location.href.match(new RegExp('[?&]' + name + '=([^?&]+)', 'i')) ? decodeURIComponent(RegExp.$1) : '';
	}
	var centerParam = getParam('center');
	var zoomParam = getParam('zoom');
	var widthParam = getParam('width');
	var heightParam = getParam('height');
	var markersParam = getParam('markers');
	var markerStylesParam = getParam('markerStyles');

	//创建和初始化地图函数：
	function initMap(){
		// [FF]切换模式后报错
		if (!window.BMap) {
			return;
		}
		var dituContent = document.getElementById('dituContent');
		dituContent.style.width = widthParam + 'px';
		dituContent.style.height = heightParam + 'px';

		createMap();//创建地图
		setMapEvent();//设置地图事件
		addMapControl();//向地图添加控件

		// 创建标注
		var markersArr = markersParam.split(',');
		var point = new BMap.Point(markersArr[0], markersArr[1]);
		var marker = new BMap.Marker(point);
		map.addOverlay(marker); // 将标注添加到地图中
	}

	//创建地图函数：
	function createMap(){
		var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
		var centerArr = centerParam.split(',');
		var point = new BMap.Point(centerArr[0], centerArr[1]);//定义一个中心点坐标
		map.centerAndZoom(point, zoomParam);//设定地图的中心点和坐标并将地图显示在地图容器中
		window.map = map;//将map变量存储在全局
	}

	//地图事件设置函数：
	function setMapEvent(){
		map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
		map.enableScrollWheelZoom();//启用地图滚轮放大缩小
		map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
		map.enableKeyboard();//启用键盘上下左右键移动地图
	}

	//地图控件添加函数：
	function addMapControl(){
		//向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
		//向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
		//向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
	}

 