function scrollPos() {
  let y = window.scrollY;
  let interval = window.innerHeight * 0.6;
  let index = Math.min(Math.floor(y/interval), 7);
  var x = document.getElementsByClassName("slidingText");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[index].style.display = "block";
  let pixelsIntoPic = y%interval;
  let pixelsToNext = interval - pixelsIntoPic;
  let fadeIn = 0.5*interval;
  let fadeOut = 0.5*interval;
  let flyIn = 100;
  let flyOut = 100;
  let percentIn = 1 - (pixelsToNext / fadeIn);
  let percentOut = (pixelsIntoPic - fadeOut) / fadeOut;

  // if (pixelsIntoPic < fadeIn && index>0) {
  //   x[index].style.opacity = pixelsIntoPic / fadeIn;
  //   x[index].style.transform = "translateY(" + (flyIn - (pixelsIntoPic/fadeIn)*flyIn) + "px)";
  //   console.log("translateY(-" + (flyIn - (pixelsIntoPic/fadeIn)*flyIn) + "px)")
  // }
  if (pixelsToNext < fadeOut) {
    //console.log(percentIn);
    x[index+1].style.display = "block";
    x[index+1].style.opacity = percentIn;
    x[index+1].style.transform = "translateY(" + (flyIn - (percentIn)*flyIn) + "px)";
  }
  if (pixelsIntoPic > fadeOut) {
    x[index].style.opacity = 1 - percentOut;
    x[index].style.transform = "translateY(-" + (flyOut - (1-percentOut)*flyOut) + "px)";
  }
}

var x = document.getElementsByClassName("slidingText");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
}
x[0].style.display = "block";
x[0].style.opacity = 1;

window.onscroll = scrollPos;
