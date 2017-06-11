// Code goes here
function init(){
      var b = document.getElementById('button');
      b.addEventListener("click", slideDown);
      var click = 0;
      function slideDown(){
        var c = document.getElementById('fill');
        if(click===0){
          c.style.width = '100vw';
          c.style.height = '100vh';
          c.style.borderBottomRightRadius = '0';
          c.style.borderBottomLeftRadius = '0';
          // We're using a timer to set opacity = 0 because setting max-height = 0 doesn't (completely) hide the element.
          c.style.opacity   = '1';
          click = 1;
        }else{
          c.removeAttribute('style');
          click = 0;
        }

      }
  }
