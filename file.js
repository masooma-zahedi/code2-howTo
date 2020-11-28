function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}
/*--------------------------------------------------------*/
function myFunction2() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display ="";
        } else {
            li[i].style.display = "none";
        }
    }
  }

  /*project 3:---------------------------------------*/
  function myFunction3(){
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0 ; i < acc.length; i++){
      acc[i].addEventListener("click", function(){
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight){
              panel.style.maxHeight= null;
          }else {
              panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
  }
}

/*-------------------------------------------------------*/

function openCity(evt, cityName) {
  var i, tabcontent, tablink;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
   }

  tablink = document.getElementsByClassName("tablink");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "")
  }
  
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/*project 5------------------------------------------------*/
function openCity5(evt,cityName) {
    var i, tabcontent5, tablinks5;
    tabcontent5 = document.getElementsByClassName("tabcontent5");
    for (i = 0; i < tabcontent5.length; i++){
        tabcontent5[i].style.display = "none";
    }
    tablinks5 = document.getElementsByClassName("tablinks5");
    for (i = 0; i < tablinks5.length; i++){
        tablinks5[i].className = tablinks5[i].className.replace("active", " ");
    }
    document.getElementById(cityName).style.display ="block";
    //evt.currentTarget.className += "active";
}
document.getElementById("defaultOpen5").click();

/*project 6--------------------------------------------------*/
function openCity6 (cityName,elmnt,color){
    var i, tabcontent6, tablink6;
    tabcontent6 = document.getElementsByClassName("tabcontent6");
    for( i = 0; i < tabcontent6.length; i++) {
        tabcontent6[i].style.display= "none";
    }
    tablink6 = document.getElementsByClassName("tablink6");
    for ( i = 0; i < tablink6.length; i++) {
        tablink6[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen6").click() ;

/*project 7-------------------------------------------------*/
function openPage7(pageName,elmnt,color){
    var i, tabcontent7, tablink7;
    tabcontent7 = document.getElementsByClassName("tabcontent7");
    for (i = 0; i < tabcontent7.length; i++) {
        tabcontent7[i].style.display = "none"
    }

    tablink7 = document.getElementsByClassName('tablink7');
    for ( i = 0; i < tablink7.length; i++){
        tablink7[i].style.backgroundColor ="";
    }

    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen7").click();

/*project 8------------------------------------------------------*/
function myFunction8() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  /*project 9------------------------------------------------------*/
  function openNav(){
      var x = document.getElementById("mySidenav");
      x.style.height = "100%";
      x.style.textAlign ="center"
  }
 
  function closeNav() {
      var y = document.getElementById("mySidenav");
      y.style.height = "0"
  }
  
  /*project 12------------------------------------------------------*/
  function openNav12(){
    let x = document.getElementById("side12");
    let y = document.getElementsByClassName("main12")[0];
    let z = document.getElementById("open12");
    let b = document.getElementsByClassName("div12")[0];
    x.style.width="160px";
    y.style.marginLeft = "160px";
    y.style.fontSize = "25px";
    z.style.display ="none";
    b.style.backgroundColor = "rgba(0,0,0,.4)";
    y.style.opacity = ".2"
  }

  function closeNav12() {
    let x = document.getElementById("side12");
    let y = document.getElementsByClassName("main12")[0];
    let z = document.getElementById("open12");
    let b = document.getElementsByClassName("div12")[0];

    x.style.width = "0";
    y.style.marginLeft = "0";
    y.style.fontSize = "18px";
    z.style.display = "inline-block";
    b.style.backgroundColor = "#eee";
    y.style.opacity = "1";
  }
/*project 15------------------------------------------------------*/
function myFunction15() {
    var x = document.getElementById("mynav15");
    if (x.className === "navBar15"){
        x.className ="responsive15";
    }else {
        x.className = "navBar15";
    }
}

/*project16------------------------------------------------*/

 window.onscroll = function() {myFunction16()};
function myFunction16(){
    alert("hi its me");
    if( document.getElementById("scroll16").scrollTop > 20 ){
        document.getElementById("nav16").display = "block";
    }else {
        document.getElementById("nav16").display = "none";
    }
}
/*project 20------------------------------------------------*/

function myFunction20(){
    var x = document.getElementsByClassName("dropContent20")[0];
    x.style.display = "block";
}
function back20(){
    var y = document.getElementsByClassName("dropContent20")[0];
    y.style.display = "none";

}

/*project 21------------------------------------------------*/
function myFunction21(){
    var x = document.getElementsByClassName("drop-content21")[0];
    x.classList.toggle("show")
}
/*project 24------------------------------------------------*/
var dropsbtn24 = document.getElementsByClassName("dropbtn24");
dropsbtn24.addEventListener("click",function(){
    this.classList.toggle("active24");
    let dropContent24 = document.getElementsByClassName("drop-content24")[0];
    if ( dropContent24.style.display === "block") {
        dropContent24.style.display = "none";
    } else {
        dropContent24.style.display = "block";
    }
})

/*project 28------------------------------------------------*/

function myFunction28(){
    var x = document.getElementById("link28")
    if (x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
/*project 29------------------------------------------------*/
function myFunction29() {
    var x = document.getElementById("mylink29");
    if ( x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
/*project 30------------------------------------------------*/
function myClose30() {
    document.getElementById("over30").style.width = "0";
}
function myOpenNav30() {
    document.getElementById("over30").style.width = "100%";
}
/*project 31------------------------------------------------*/
function openNav31(){
    document.getElementById("nav31").style.height = "100%"
}
function myclose31() {
    document.getElementById("nav31").style.height = "0"
}
/*project 32------------------------------------------------*/
 function myOpen32(){
     document.getElementById("mynav32").style.width = "200px";
     document.getElementById("main-co").style.marginLeft = "200px";
 }
 function close32(){
     document.getElementById("mynav32").style.width = "0";
     document.getElementById("main-co").style.marginLeft = "0";
 }

 /*project 35------------------------------------------------*/
var modal = document.getElementsByClassName('modal35')[0];
var img = document.getElementsByClassName('main-img35')[0];
var modalImg = document.getElementById("img35");
var caption = document.getElementById("caption35");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close35")[0];

span.onclick = function(){
    modal.style.display = "none";
}

 /*project 37------------------------------------------------*/
 var elements37 = document.getElementsByClassName("column37");
 var i;

 function one() {
     for (i = 0; i < elements37.length; i++){
         elements37[i].style.msFlex = "100%";
         elements37[i].style.flex = "100%";
     }
 }

/*project 38------------------------------------------------*/
function myFunction38(imgs){
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block"
}



