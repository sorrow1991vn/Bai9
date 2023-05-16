function yclick() {
    alert("I love you , too <3");
}
function noon() {
 let x = Math.round( Math.random()*window.innerWidth);
 let y = Math.round(Math.random()*window.innerHeight);
 document.getElementById('btnNo').style.left = x + 'px';
 document.getElementById('btnNo').style.top = y + 'px';
}