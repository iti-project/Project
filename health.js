//About Healthcare
var btnToggle1=document.getElementById('btn-toggle1');
var heading1=document.getElementById('headingOne');
var icon=document.getElementById('icn');
btnToggle1.onclick=function(){  
if( icon.innerHTML=='<i class="fas fa-arrow-up fa-xs mx-2" id="icn"></i>')
{
     icon.innerHTML='<i class="fas fa-arrow-down fa-xs mx-2" id="icn"></i>'; 
    btnToggle1.style.color='#fff';
     heading1.style.backgroundColor='#3c97e8';   
}
else{

    icon.innerHTML='<i class="fas fa-arrow-up fa-xs mx-2" id="icn"></i>'; 
      btnToggle1.style.color='black';
    heading1.style.backgroundColor='#fff';  
}
    
}

var btnToggle2=document.getElementById('btn-toggle2');
var heading2=document.getElementById('headingTwo');
var icon=document.getElementById('icn');
btnToggle2.onclick=function(){  
if( icon.innerHTML=='<i class="fas fa-arrow-down fa-xs mx-2" id="icn"></i>')
{
     icon.innerHTML='<i class="fas fa-arrow-up fa-xs mx-2" id="icn"></i>';
      btnToggle2.style.color='black';
    heading2.style.backgroundColor='#fff';  
}
else{

    icon.innerHTML='<i class="fas fa-arrow-down fa-xs mx-2" id="icn"></i>'; 
     btnToggle2.style.color='#ffff';
    heading2.style.backgroundColor='#3c97e8';  
}
    
}


var btnToggle3=document.getElementById('btn-toggle3');
var heading3=document.getElementById('headingThree');
var icon=document.getElementById('icn');
btnToggle3.onclick=function(){  
if( icon.innerHTML=='<i class="fas fa-arrow-down fa-xs mx-2" id="icn"></i>')
{
     icon.innerHTML='<i class="fas fa-arrow-up fa-xs mx-2" id="icn"></i>'; 
       btnToggle3.style.color='black';
    heading3.style.backgroundColor='#fff';  
}
else{

    icon.innerHTML='<i class="fas fa-arrow-down fa-xs mx-2" id="icn"></i>';
    btnToggle3.style.color='#ffff';
    heading3.style.backgroundColor='#3c97e8';  
}
    
}

//// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
    
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  
    $(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 2000); 
        return false; 
    }); 
});
}




