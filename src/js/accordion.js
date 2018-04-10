     var accordionFull = document.getElementsByClassName("accordion-full");
     var accordionHalf = document.getElementsByClassName("accordion-half");
     for (var i = 0; i < accordionFull.length || i< accordionHalf.length; i++) {
         if(i < accordionFull.length){
            accordionFull[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                panel.style.maxHeight = null;
                } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                }
                });
         }

         if(i < accordionHalf.length){
            accordionHalf[i].addEventListener("click", function() {
                console.log("Clicked");
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                panel.style.maxHeight = null;
                } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                }
                });
         }
            }
     
     
     
     
      