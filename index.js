
for(var i=0;i<=6;i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function()
{
var innerButton = this.innerHTML;
makesound(innerButton);
});
}
  document.addEventListener("keydown", function(event){
    var keypressed = event.key;
makesound(keypressed);
});
function makesound(key){
    switch (key) {
      case "w":
      var audio =new Audio("crash.mp3");
      audio.play();

        break;
        case "a":
        var audio =new Audio("kick-bass.mp3");
        audio.play();
        break;
        case "s":
        var audio =new Audio("snare.mp3");
        audio.play();
        break;
        case "d":
        var audio =new Audio("tom-1.mp3");
        audio.play();
        break;
        case "j":
        var audio =new Audio("tom-2.mp3");
        audio.play();
        break;
        case "k":
        var audio =new Audio("tom-3.mp3");
        audio.play();
        break;
        case "l":
        var audio =new Audio("tom-4.mp3");
        audio.play();
        break;

      default:console.log(innerButton);

}
};
