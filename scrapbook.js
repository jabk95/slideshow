var images = ["sample.jpeg", "sample2.jpeg", "sample3.jpeg"];
var curImg = 0;
function carousel(){
  if (curImg < images.length-1){
    curImg+=1;
    document.getElementById('slide').setAttribute("src", images[curImg]);
  } else {
    curImg = 0;
    document.getElementById('slide').setAttribute("src", images[curImg]);
  }
  setTimeout(carousel, 2000);
}
