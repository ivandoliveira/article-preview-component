const socialContainer = document.querySelector(".social-container");
const iconShare = document.querySelector(".icon-share");
const shareContainerMb = document.querySelector(".share-container-mobile");
const cardInfo = document.querySelector(".card-info");

iconShare.addEventListener("click", function () {
  let midia = window.matchMedia("(max-width: 700px)");
  if (midia.matches) {
    socialContainer.classList.toggle("hide");
    cardInfo.style.borderRadius = "0px";
    shareContainerMb.classList.toggle("show");
  } else {
    const shareContainer = document.querySelector(".share-container");
    shareContainer.classList.toggle("show");
    console.log("clicou");
  }
});
