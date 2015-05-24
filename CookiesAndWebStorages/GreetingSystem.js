function checkLog() {
				console.log("ehooo");
			if (!localStorage.length) {
				localStorage.setItem("counterLocal", 0);
				sessionStorage.setItem("counterSession", 0);
				var inputItem = $("<input>");
				var wrapper = $("#wrapper");
				wrapper.append("Enter name: ").append(inputItem);
				
				var button = $("<button>");
				button.text("Put in locale Storage");
				wrapper.append(" ").append(button);

				
				button.on('click', function(){
					var inputValue = inputItem.val();
					localStorage.setItem("name", inputValue);
					var result ="<br>" + inputValue + " is put in locale Storage"+"<br>";
					wrapper.append(result);
				});
				
			}
			else{
				var currentCountLocal = parseInt(localStorage.getItem("counterLocal"));
			    currentCountLocal++;
			    localStorage.setItem("counterLocal", currentCountLocal);

			    
				var currentCountSession = parseInt(sessionStorage.getItem("counterSession"));
				currentCountSession++;
				sessionStorage.setItem("counterSession", currentCountSession);
			    
				var wrapper = $("#wrapper");
				var message = "Greeting! " + localStorage.getItem("name");
				wrapper.append(message).append("<br>");
				wrapper.append("Counter local: ").append(currentCountLocal).append("<br>");
				wrapper.append("Counter session: ").append(currentCountSession);
			}
};