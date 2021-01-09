/**
 * Quick Element Selector
 * 
 * 
 */
function $(name){
	
	if(name.substr(0,1) == '.'){
		return document.getElementsByClassName(name.substr(1))[0];
	}
	if(name.substr(0,1) == '#'){
		return document.getElementById(name.substr(1));
	}
	
	
	return document.getElementsByTagName(name);
}




window.alertBox = function(title,text){
	
	var t = document.createElement("DIV");
		t.setAttribute("class","m_alert");
		t.setAttribute("id","alertbox");
		t.setAttribute("draggable","false");
		
	var c = document.createElement("DIV");
		c.setAttribute("class","m_alert_cover");
		c.setAttribute("id","alertcover");
		
	var str = '\
			<div class="m_alert_title" id="m_alert_tit" draggable="false" >\
				<span draggable="false">[:SNFDSDPM:]</span>\
				<div id="alertcancel" draggable="false">&nbsp;&nbsp;&nbsp;✗</div>\
			</div>\
			<div class="m_alert_body"  draggable="false">\
				<div class="m_alert_left"  draggable="false"><img src="img/1H31U1O-30.gif"  draggable="false" /></div>\
				<div class="m_alert_right"  draggable="false">[:SDBSUD:]</div>\
				<div style="clear: both;"  draggable="false"></div>\
			</div>\
			<div class="m_alert_foot"  draggable="false">\
				<button class="m_alert_btn" id="m_alert_btn" draggable="false">朕知道了</button>\
			</div>\
	';
	
	str = str.replace("[:SNFDSDPM:]",title);
	str = str.replace("[:SDBSUD:]",text);
	
	//to dom
	
	t.innerHTML = str;
	
	
	document.body.appendChild(c);
	document.body.appendChild(t);
	
	//register events
	
	document.getElementById("alertcancel").addEventListener("click",function(e){
		document.body.removeChild(t);
		document.body.removeChild(c);
		e.stopPropagation();
	},false);
	
	document.getElementById("m_alert_btn").addEventListener("click",function(e){
		document.body.removeChild(t);
		document.body.removeChild(c);
		e.stopPropagation();
		e.cancelBubble = true;
	},false);
	
	document.getElementById("m_alert_tit").addEventListener("mousedown",function(e){
		alertBoxDragFlag = true;
		xmae = e.clientX;
		ymae = e.clientY;
		alertBoxinnerTop = e.clientY - e.target.parentNode.offsetTop ;
		alertBoxinnerLeft =e.clientX - e.target.parentNode.offsetLeft;
		
	},false);
	
	document.getElementById("m_alert_tit").addEventListener("mouseup",function(e){
		alertBoxDragFlag = false;
		alertBoxinnerTop = 0;
		alertBoxinnerLeft =0;
	},false);
	document.getElementById("m_alert_tit").addEventListener("mouseout",function(e){
		if(!alertBoxDragFlag)
				return false;
				console.log(e.clientX);
				console.log(e.target.parentNode.offsetLeft);
				
				document.getElementById("alertbox").style.left = (e.clientX - alertBoxinnerLeft) + "px";
				document.getElementById("alertbox").style.top  = (e.clientY - alertBoxinnerTop) + "px";
				
		alertBoxDragFlag = false;
	},false);
	
	document.getElementById("m_alert_tit").addEventListener("mousemove",function(e){
			
			if(!alertBoxDragFlag)
				return false;
				 e.clientX;
				 e.clientY;
				
				
				
				xado = xmae - e.clientX; // > 0 ? -1 : 1;
				//xado = xmae - e.clientX ;// == 0 ? 0 : xado;	
				yado = ymae - e.clientY;// > 0 ? -1 : 1;
				//yado = ymae - e.clientY == 0 ? 0 : yado;
				
				
				
				xmae = e.clientX;
				ymae = e.clientY;
				
				
				document.getElementById("alertbox").style.left = (e.clientX - alertBoxinnerLeft ) + "px";
				document.getElementById("alertbox").style.top  = (e.clientY - alertBoxinnerTop ) + "px";
				
	},false);
	
	
	
	
	
	
}

window.alert = function(text){
	
	alertBox("警告",text);

}


function sscrollTo(maeScrollTop){
		requestAnimationFrame(function(){
		// if(navigator.userAgent.indexOf("Chrome") >= 0){
		// 	if(Math.abs(document.body.scrollTop - maeScrollTop) < 2){ //阈值
		// 		fst = false;
		// 		removeClass(document.body,"disable-hover");	
		// 		return ;
		// 	}
			
		// 	if(document.body.scrollTop < maeScrollTop){
		// 		document.body.scrollTop += Math.ceil(Math.abs(document.body.scrollTop - maeScrollTop)*0.18)+1;
		// 	}else{
		// 		document.body.scrollTop -= Math.ceil(Math.abs(document.body.scrollTop - maeScrollTop)*0.18)+1;
		// 	}
			
		// }else{
			if(Math.abs(document.documentElement.scrollTop - maeScrollTop) < 2){//阈值
				fst = false;
				removeClass(document.body,"disable-hover");	
				return ;
			}
			
			if(document.documentElement.scrollTop < maeScrollTop){
				document.documentElement.scrollTop += Math.ceil(Math.abs(document.documentElement.scrollTop - maeScrollTop)*0.18)+1;
			}else{
				document.documentElement.scrollTop -= Math.ceil(Math.abs(document.documentElement.scrollTop - maeScrollTop)*0.18)+1;
			}
		//}
		requestAnimationFrame(arguments.callee);
	});
}

function softScrollTo(mae){
			
	addClass(document.body,"disable-hover");
	sscrollTo(mae);
	
	setTimeout(function(){
		switch(times){
		case 2:
			addClass(document.getElementById("map_ea"),"slideInLeft");
			addClass(document.getElementById("2"),"slideInRight");
			break;
		case 3:
			addClass(document.getElementById("map_sa"),"slideInRight");
			addClass(document.getElementById("3"),"slideInLeft");
			break;
		case 4:
			addClass(document.getElementById("map_me"),"slideInLeft");
			addClass(document.getElementById("4"),"slideInRight");
			break;
		case 5:
			addClass(document.getElementById("map_afk"),"slideInRight");
			addClass(document.getElementById("5"),"slideInLeft");
			break;
		case 6:
			addClass(document.getElementById("map_eu"),"slideInLeft");
			addClass(document.getElementById("6"),"slideInRight");
			break;
		case 7:
			addClass(document.getElementById("map_ame"),"slideInRight");
			addClass(document.getElementById("7"),"slideInLeft");
			break;
			
	}
		
		
		
	},5);
	setTimeout(function(){
		if(navigator.userAgent.indexOf("Chrome")>=0 ){
			if(times > 1){
				document.getElementById("side").style.opacity = "1";
			}else{
				document.getElementById("side").style.opacity = "0";
			}
			
		}else{
			if(times > 1){
				document.getElementById("side").style.opacity = "1";
			}else{
				document.getElementById("side").style.opacity = "0";
			}
		}
	},100);
			
				
}

function hasClass(elem, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}
 
function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
  }
}
 
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ');
    }
    ele.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}


