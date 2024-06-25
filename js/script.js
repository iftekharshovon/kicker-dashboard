// document.addEventListener("DOMContentLoaded", function () {
//   const menuButton = document.getElementById("menuButton");
//   const closeDrawerButton = document.getElementById("closeDrawerButton");
//   const drawer = document.getElementById("drawer");
//   const drawerItems = document.querySelectorAll("#drawer a");

//   menuButton.addEventListener("click", function () {
//     drawer.classList.remove("drawer-hidden");
//     drawer.classList.add("drawer-visible");
//   });

//   closeDrawerButton.addEventListener("click", function () {
//     drawer.classList.remove("drawer-visible");
//     drawer.classList.add("drawer-hidden");
//   });
//   function checkScreenSize() {
//     if (window.innerWidth >= 1024) {
//       drawer.classList.add("hidden");
//     }
//   }

//   closeDrawerButton.addEventListener("click", () => {
//     drawer.classList.add("hidden");
//   });

//   drawerItems.forEach((item) => {
//     item.addEventListener("click", () => {
//       if (window.innerWidth < 1024) {
//         drawer.classList.add("hidden");
//       }
//     });
//   });

//   window.addEventListener("resize", checkScreenSize);
//   checkScreenSize();
// });

document
  .getElementById("openDrawerButton")
  .addEventListener("click", function () {
    document.getElementById("drawer").classList.remove("drawer-hidden");
    document.getElementById("drawer").classList.add("drawer-visible");
  });
document
  .getElementById("closeDrawerButton")
  .addEventListener("click", function () {
    document.getElementById("drawer").classList.remove("drawer-visible");
    document.getElementById("drawer").classList.add("drawer-hidden");
  });
window.addEventListener("resize", function () {
  if (window.innerWidth > 1024) {
    document.getElementById("drawer").classList.remove("drawer-visible");
    document.getElementById("drawer").classList.add("drawer-hidden");
  }
});
