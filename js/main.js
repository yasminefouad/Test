"use strict";
var toggleBtn = document.getElementById("toggleBtn");
var toggleContainer = document.getElementsByClassName("main-header")[0];

toggleBtn.addEventListener(
    'click',
    function(){
        toggleContainer.classList.toggle('show-menu');
    }
)
