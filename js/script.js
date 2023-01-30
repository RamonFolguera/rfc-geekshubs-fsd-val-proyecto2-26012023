


// Función para añadir un icono botón al colapsar el menú en small screen

const addButton = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "col-6 col-sm-8 col-lg-6 nav-2 navbar-nav text-lg-start text-sm-start text-center pt-5 topnav") {
      x.className += " responsive";
    } else {
      x.className = "col-6 col-sm-8 col-lg-6 nav-2 navbar-nav text-lg-start text-sm-start text-center pt-5 topnav";
    }
    console.log(x)
  }


// Función para añadir un background al nav cuando pasa del video del header para facilitar la lectura del menú de navegación.
const changeNavBg = () => {
  let navbarMain = document.getElementById('navbar-main')
  let scrollValue = window.scrollY;
  if(scrollValue < 650) {
    navbarMain.classList.remove('navbg');
  } else {
    navbarMain.classList.add('navbg');
  }
}

window.addEventListener('scroll', changeNavBg);