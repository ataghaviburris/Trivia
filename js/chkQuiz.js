function chkQuiz(){

				for( i = 1; i < 2; i++) {
					var choices = document.getElementsByName('q'+i);
					for( j = 0; j < choices.length; j++) {
						var selection = choices[j];
						if(selection.value == "correct" && selection.checked) {
						window.alert("Good Job");
						}
					}//end for j
				}//end for i      
	
				
			}//end chkQuiz		