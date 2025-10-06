window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.rev');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal2);

function reveal2(){
  var reveals = document.querySelectorAll('.rev2');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active2');
    }
    else{
      reveals[i].classList.remove('active2');
    }
  }
}


