


// const addRemoveClass = () => {
//     let nav2Div = document.querySelector(".nav-2");
//     if (nav2Div.className === "col-2 col-sm-8 col-lg-6 class nav-2 navbar-nav text-lg-start text-sm-start text-center pt-5") {
//       nav2Div.className += " responsive";
//     } else {
//       nav2Div.className = "col-2 col-sm-8 col-lg-6 class nav-2 navbar-nav text-lg-start text-sm-start text-center pt-5";
//     }
// console.log(nav2Div)
// }


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "col-6 col-sm-8 col-lg-6 nav-2 navbar-nav text-lg-start text-sm-start text-center pt-5 topnav") {
      x.className += " responsive";
    } else {
      x.className = "col-6 col-sm-8 col-lg-6 nav-2 navbar-nav text-lg-start text-sm-start text-center pt-5 topnav";
    }
    console.log(x)
  }