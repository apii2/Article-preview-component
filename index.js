document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementsByClassName("btn");
  let ul = document.getElementsByClassName("profile");

  btn[0].addEventListener("click", function () {
    ul[0].style.display = "block";
  });

  btn[0].addEventListener("focusout", function () {
    setTimeout(function () {
      ul[0].style.display = "none";
    }, 500);
  });
});