
// //loader
// window.onload = function(){
//   let loader = document.getElementById("loader");
//   window.setTimeout(()=>{
//     loader.style.opacity = '0';
//     loader.style.zIndex = '-1';

//   }, 1000);
// }
// grab an element
var myElement = document.querySelector(".headroom");
// construct an instance of Headroom, passing the element
var headroom = new Headroom(myElement);
// initialise
// headroom.init();



//button to top


window.addEventListener("scroll", () => {
  var toTop = document.querySelector(".go-to-top");
  if (window.pageYOffset > 700) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active")
  }
})

//wow plugin
new WOW().init();

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}




// // go to section not refresh & pages
// let tabs = document.querySelectorAll("body");
// tabs.forEach(tab => {
//   let tabsBtns = tab.querySelector(".tabs-btns").children;
//   let tabsContainer = tab.querySelector("#parent-section").children;
//   for(let i = 0 ; i < tabsBtns.length ; i++){
//     tabsBtns[i].addEventListener("click" , e => {
//       for(let j = 0 ; j < tabsContainer.length ; j++){
//         tabsContainer[j].classList.remove("active1");
//       }
//       tabsContainer[i].classList.add("active1");
//     })
//   }
// })




