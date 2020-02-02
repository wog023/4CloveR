

function changeLogo() {
	var pic1 = "images/pic1.jpg"
	var pic2 = "images/pic2.jpg"
	var pic = document.getElementById('pic')

	switch(pic.getAttribute('src')){
		case "images/pic1.jpg":
		pic.src=pic2
		break;

		case "images/pic2.jpg":
		pic.src=pic1
		break;
	}
}



/////////////////////pre next 按鈕動////////////////////////
var preBtn = document.getElementById('preBtn')
	preBtn.onmouseover = function (){
		this.src = "images/pre_icon_bright.png"
	}
	preBtn.onmouseout = function (event){
		this.src = "images/pre_icon.png"
	}
var nextBtn = document.getElementById('nextBtn')
	nextBtn.onmouseover = function (event){
		this.src = "images/next_icon_bright.png"
	}
	nextBtn.onmouseout = function (event){
		this.src = "images/next_icon.png"
	}


	
///////////////////////album 簡介//////////////////////////////
document.getElementById('album').onmouseover = function(){
	getElementById('albumInfo').style.visibility = "visible"
}
///////////////////info 按鈕///////////////////////////////////////// 
 var infoBtn=document.getElementById('infoBtn')
 var infoColumn = document.getElementById('leftColumn')
 
 	// console.log('123')
 	
 		if(window.innerWidth>900){
 			infoColumn.style.display='block'
 		}else{
 			infoBtn.onclick= function(){
 				if(infoColumn.style.display==='none'){
 					infoColumn.style.display='block'
 				}else{
 					infoColumn.style.display='none'
 				}
 			}
 		}




			

			










			
		




