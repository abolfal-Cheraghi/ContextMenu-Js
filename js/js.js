const contextMenu = document.querySelector(".con");
const subMenu = document.querySelector(".share-menu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let x = e.offsetX;
  let y = e.offsetY;
  //Find page width and menu width
  let winWidth = window.innerWidth;
  let cmWidth = contextMenu.offsetWidth;
  //find the screen height and height menu
  let winHeight = window.innerHeight;
  let cmHeight = contextMenu.offsetHeight;
  // x = x > winWidth - cmWidth ? winWidth - cmWidth : x
  // foe example
  // 850 > 1000px - 300px ?  1000px - 300px = 700px : x
  if (x > winWidth - cmWidth) {
    x = winWidth - cmWidth;
  }
  if (y > winHeight - cmHeight) {
    y = winHeight - cmHeight;
  }
  if (x > winWidth - cmWidth - subMenu.offsetWidth) {
    subMenu.style.left = "-195px";
  } else {
    subMenu.style.left = "270px";
  }
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
});
document.addEventListener('click' , ()=>{
    contextMenu.style.visibility = "hidden";
})







