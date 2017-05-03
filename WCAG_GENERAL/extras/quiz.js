document.getElementById("form1").onsubmit=function() {      
       altvar = document.getElementsByName("alt");
	   for (i=0; i<altvar.length; i++) {
           if (altvar[i].checked) {
           ascore = parseInt(altvar[i].value);
           }
       }//end for

       tabvar = document.getElementsByName("tab");
	   for (i=0; i<tabvar.length; i++) {
           if (tabvar[i].checked) {
           tscore = parseInt(tabvar[i].value);
           }
       }//end for

       audiovar = document.getElementsByName("audio");
	   for (i=0; i<audiovar.length; i++) {
           if (audiovar[i].checked) {
           capscore = parseInt(audiovar[i].value);
           }
       }//end for

       langvar = document.getElementsByName("lang");
	   for (i=0; i<langvar.length; i++) {
           if (langvar[i].checked) {
           lscore = parseInt(langvar[i].value);
           }
       }

       result = ascore + tscore + capscore + lscore;
       document.getElementById("grade").innerHTML = result;
       
        if (result == 0) {result2 = "You didn't get any right. Please study the content and try again."};
        if (result == 25) {result2 = "This is not a passing score. Please review the content and try again."};
        if (result == 50) {result2 = "You need to try a little bit harder to pass. Please try again."};
        if (result == 75) {result2 = "Good job, but not perfect. you can do it! Please try again."};
        if (result == 100) {result2 = "Perfect Score! You're an Accessibility Guru!"};
        document.getElementById("grade2").innerHTML = result2; 

return false; 
} 