document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const closeDrawerButton = document.getElementById("closeDrawerButton");
  const drawer = document.getElementById("drawer");

  menuButton.addEventListener("click", function () {
    drawer.classList.remove("drawer-hidden");
    drawer.classList.add("drawer-visible");
  });

  closeDrawerButton.addEventListener("click", function () {
    drawer.classList.remove("drawer-visible");
    drawer.classList.add("drawer-hidden");
  });
});
