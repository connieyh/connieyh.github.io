/**
 * Do the clicking stuff
 *
 */

(function() {
  var cards = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }


  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      if(c.contains("flipped")) {
        c.add("flipped");
      }
      function clickOrigin(e){
        var target = e.target;
        var tag = [];
        tag.tagType = target.tagName.toLowerCase();
        tag.tagClass = target.className.split(' ');
        tag.id = target.id;
        tag.parent = target.parentNode;
    
        return tag;
      }

      var tagsToIdentify = ['a'];
      var flag = false;

      document.body.onclick = function(e){
        elem = clickOrigin(e);
        for (i=0;i<tagsToIdentify.length;i++){
          if (elem.tagType == tagsToIdentify[i]){
            flag = true;
            console.log("a clicked?");
          }
        }
        if(!flag){
          c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");  
        }
      };
      

      
      
    });
  }
})();