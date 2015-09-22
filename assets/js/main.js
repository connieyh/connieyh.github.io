/**
*
*	Measure screen height & width
*
*/

function setHeight() {
	var height = screen.height;
	var width = $(window).width();
 	var inners = document.getElementsByClassName("inner");
 	if(width >= 992) {
 		for(var i = 0; i < inners.length; i++) {
 			inners[i].style.height = height + "px";
 		}
 	}else {
 		var h = height*0.25;
 		for(var i = 0; i < inners.length; i++) {
 			inners[i].style.height = h + "px";
 		}
 	}
}

(function() {
	setHeight();
	$(window).resize(function() {
		setHeight();
	});
})();

/**
*
*	Add addEventListener to Glyphicon-envelope
*
*/

(function() {
	var envelope = document.getElementById("message");
	var isRead = false;
	clickMailListener(envelope);

	function clickMailListener(envelope) {
		envelope.addEventListener("click", function() {
			// console.log("abcddddd");
			var messageContent = document.getElementById("message-content");
			var msgIcon = document.getElementById("msg-icon");
			msgIcon.style.display= 'none';
			setTimeout(function() {
				messageContent.style.display = 'block';
				isRead = true;
				if(isRead){
					mouseActionAndFlip();
				}
			}, 500);

		});
	}
	
	/**
	*
	*	Mouseover to show in/out button & Flip Cards
	*
	*/
	// mouseActionAndFlip();
	function mouseActionAndFlip() {
		var loginButtons = document.getElementsByClassName("card-button-in");
		var cards = document.getElementsByClassName("inner");
		var logoutButtons = document.getElementsByClassName("card-button-out");
		// console.log(cards);
		for(var i = 0; i < loginButtons.length; i++) {
			var loginBtn = loginButtons[i];
			var card = cards[i];
			var logoutBtn = logoutButtons[i];
			// clickCardListener(loginBtn, card, i);
			clickCardListener(loginBtn, card, logoutBtn, i);
			detectMouseover(loginBtn, card, logoutBtn, i);
			detectMouseout(loginBtn, card, logoutBtn, i)
		}

		function detectMouseover(loginBtn, card, logoutBtn, index) {
			card.addEventListener("mouseover", function() {
				// console.log("mouseover la~~~~~~");
				loginBtn.style.display = 'block';
				logoutBtn.style.display = 'block';
			});
		}

		function detectMouseout(loginBtn, card, logoutBtn, index) {
			card.addEventListener("mouseout", function() {
				loginBtn.style.display = 'none';
				logoutBtn.style.display = 'none';
			});
		}

		function clickCardListener(loginBtn, card, logoutBtn, index) {
			// console.log("click card listener");
			loginBtn.addEventListener("click", function() {
				// var cardClassList = card.classList;
				// cardClassList.contains("flipped") === true ? cardClassList.remove("flipped") : cardClassList.add("flipped");
				addOrRemoveFlipped(card);
			});

			// var logoutBtn = document.getElementsByClassName("card-button-out")[index];
			logoutBtn.addEventListener("click", function() {
				addOrRemoveFlipped(card);
			})
		}
		
		function addOrRemoveFlipped(card) {
			var cardClassList = card.classList;
			cardClassList.contains("flipped") === true ? cardClassList.remove("flipped") : cardClassList.add("flipped");
		}
	}
})();



(function() {
	// var messageContent = document.getElementById("message-content");

	
	

})();

