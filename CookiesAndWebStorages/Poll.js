function answerQuestion(){
	setTimer('.timer');
	var result = "";
	$('input[name="question1"]')
			.on('click', function(){
				localStorage.setItem('question1', $(this).attr('id'));
				var valueAnswer = $(this).val();
			    result += valueAnswer + ", ";

		
			});
	
	$('input[name="question2"]')
			.on('click', function(){
				localStorage.setItem('question2', $(this).attr('id'));
				var valueAnswer = $(this).val();
			   result += valueAnswer ;
			});
	$("#submit").on("click",function(){
		var text = "Your answer are: " ;
		$("#wrapper").append(text);
		$("#wrapper").append(result);
	})
	
		
}
function setTimer(selector){
		var timerInSec = 300;
		var seconds = 60;

		var timer = setInterval(function() {
			timerInSec--;
			seconds--;
			var minutes = Math.floor(timerInSec / 60);
			var secondsInString = seconds;
			if (seconds < 10) {
				secondsInString = '0' + seconds;
			}

		    $(selector).text(minutes + ':' + secondsInString);

		    if (seconds == 0) {
				seconds = 60;
			}
			if ((timerInSec / 60) === 0) {
				clearInterval(timer);
				//timeOut();
			}
		}, 1000);
	}
