const navBar = document.querySelector(".navbar");

function toggleMenu() {
  navBar.classList.toggle("hide");
}

/*---------------------Responsible for the grid and list view---------------------------------------*/
const ourScreen = document.querySelector(".businesses");
const links = document.querySelectorAll(".view-option ul li");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    /* Remove all the attribute before adding a new one*/
    links.forEach(function (item) {
      item.classList.remove("active");

      ourScreen.classList.remove("grid-view");
      ourScreen.classList.remove("list-view");
    });

    link.classList.add("active");
    ourScreen.classList.add(link.getAttribute("data-view"));
  });
});

/*---------------------slider view for the news---------------------------------------*/
const slides = document.querySelector(".slides");

function move(sens) {
  var value = document.getElementById("slide-value");

  if (parseInt(value.innerText) == -237 && sens == "1" ) {
    value.innerText = 79;
  }

  if (parseInt(value.innerText) == 0 && sens == "-1" ) {
    value.innerText = -316;
  }
  
  value.innerText = parseInt(value.innerText) - sens * 79;
  slides.style.transform = "translateX(" + parseInt(value.innerText) + "vw)"
}

/*---------------------Last Modified---------------------------------------*/

let dateData = new Date();

let lastModified = document.getElementById("myDate");

lastModified.textContent = document.lastModified;
