/**
 * Do the clicking stuff
 *
 */

 /**
 * Measure screen height and browser width
 *
 */
function setHeight() {
  var height = screen.height;
    var width = $(window).width();
    // console.log("width =  " + width);
    // console.log(height);
    var inners = document.getElementsByClassName("inner");
    if(width >= 992) {
      for(var i=0; i<inners.length; i++) {
        inners[i].style.height = height+"px";
      }
    }else {
      var h = height*0.25;
      for(var i=0; i<inners.length; i++) {
        inners[i].style.height = h+"px";
      }
    }
}

(function(){
  setHeight();
  $(window).resize(function(){
    setHeight();
  });
})();

/**
* addEventListener to Glyphicon-envelope
*
*/

(function() {
  var envelope = document.getElementById("message");
  console.log(envelope);
  clickMailListener(envelope);
  function clickMailListener(envelope) {
    envelope.addEventListener("click", function() {
      var messageContent = document.getElementById("message-content");
      var msgIcon = document.getElementById("msg-icon");
      msgIcon.style.display= 'none';
      setTimeout(function() {
        messageContent.style.display = 'inherit';
      }, 500);
      // messageContent.style.webkitAnimationPlayState = "running";
      // console.log("abcd");
    });
  }
})();


/**
* Flip card eventlistener
*
*/
(function() {
  // var buttons = document.querySelectorAll(".card-button");
  var buttons = document.getElementsByClassName("card-button");
   
  for ( var i  = 0, len = buttons.length; i < len; i++ ) {
    var btn = buttons[i];
    clickListener(btn);
  }

  function clickListener(btn) {
    btn.addEventListener( "click", function() {
      // var c = this.classList;
      var elem = document.getElementsByClassName("inner");    
      for(var i=0; i<elem.length; i++) {
        var c = elem[i].classList;
        c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
        // if(c.contains("flipped")) {
        //   console.log("add flipped");
        //   c.add("flipped");
      }
    });
  }
})();


// function clickOrigin(e){
      //   var target = e.target;
      //   var tag = [];
      //   tag.tagType = target.tagName.toLowerCase();
      //   tag.tagClass = target.className.split(' ');
      //   tag.id = target.id;
      //   tag.parent = target.parentNode;
    
      //   return tag;
      // }

      // var tagsToIdentify = ['a'];
      // var flag = false;

      // document.body.onclick = function(e){
      //   elem = clickOrigin(e);
      //   for (i=0;i<tagsToIdentify.length;i++){
      //     if (elem.tagType == tagsToIdentify[i]){
      //       flag = true;
      //       console.log("a clicked?");
      //     }
      //   }
        // if(!flag){
          
        // }
      // };
    // });