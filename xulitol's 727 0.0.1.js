// ==UserScript==
// @name         xulitol's 727 0.0.1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       xulitol
// @noframes
// @include      http://osu.ppy.sh*
// @include      https://osu.ppy.sh*
// @include      http://old.ppy.sh*
// @include      https://old.ppy.sh*
// @icon         https://ih1.redbubble.net/image.511263913.1648/st,small,507x507-pad,600x600,f8f8f8.u3.jpg
// ==/UserScript==

(function() {
    'use strict';
    function changeIcons() {
        if (document.querySelector('.fal').className == 'fal fa-extra-mode-osu') {
            var diffIcon = document.querySelectorAll('.beatmap-icon');
            for( let i = 0; i < diffIcon.length; i++) {
                diffIcon[i].innerHTML = '';
                var newIcon = diffIcon[i].appendChild(document.createElement('i'));
                newIcon.classList.add('fal');
                newIcon.innerHTML = '727';
            }
            var beatmapPicker = document.querySelectorAll('.beatmapset-beatmap-picker__beatmap');
            for( let i = 0; i < beatmapPicker.length; i++) {
                beatmapPicker[i].style.width = '49.5px';
            }
        }
    }
    setInterval(changeIcons);
})();