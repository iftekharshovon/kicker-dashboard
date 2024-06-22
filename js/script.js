document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const closeDrawerButton = document.getElementById("closeDrawerButton");
  const drawer = document.getElementById("drawer");
  const drawerItems = document.querySelectorAll("#drawer a");

  menuButton.addEventListener("click", function () {
    drawer.classList.remove("drawer-hidden");
    drawer.classList.add("drawer-visible");
  });

  closeDrawerButton.addEventListener("click", function () {
    drawer.classList.remove("drawer-visible");
    drawer.classList.add("drawer-hidden");
  });
  function checkScreenSize() {
    if (window.innerWidth >= 1024) {
      drawer.classList.add("hidden");
    }
  }

  closeDrawerButton.addEventListener("click", () => {
    drawer.classList.add("hidden");
  });

  drawerItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        drawer.classList.add("hidden");
      }
    });
  });

  window.addEventListener("resize", checkScreenSize);

  // Initial check
  checkScreenSize();
});
//step
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Done";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " done";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }

  x[n].className += " active";
}

const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  input = dropArea.querySelector("input");
let file;
var filename;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function (e) {
  var fileName = e.target.files[0].name;
  let filedata = `
    <form action="" method="post">
    <div class="form">
    <h4>${fileName}</h4>
    <button class="btn">Upload</button>
    </div>
    </form>`;
  dropArea.innerHTML = filedata;
});
