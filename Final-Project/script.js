

import { emojiCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";
new emojiCursor({emoji: ["🦝"] });

let clickCount = 0;
document.getElementById("raccoonGame").addEventListener("click", freeRaccoonTwo);
document.getElementById("raccoonGame").addEventListener("click", freeRaccoon, {once: true});
function freeRaccoon() {
    document.getElementById("raccoonGame").innerHTML= "😄 He likes you and decided to stick around! 😄 <br><br> Click here again to feed him!";
    clickCount++;
    return;
};  
function freeRaccoonTwo() {
    if (clickCount === 1) {
    document.getElementById("raccoonGame").innerHTML= "Uh oh! You summoned his friends! <br><br> Now they'll follow you around the website!";
}
};   

let styles = "h6 {color: pink;} * {cursor:url('data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='100' height='120' viewport='0 0 100 100' style='fill:black;font-size:60px;><text y='50%'>🦝</text></svg>') 16 0,auto; /*!emojicursor.app*/}";

let styleSheet = document.createElement("style");

styleSheet.innerText = styles;
document.body.appendChild(styleSheet);