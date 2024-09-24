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

function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  // SVG for Down icon
  const downSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    `;

  // SVG for Up icon
  const upSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
      </svg>
    `;

  // Toggle the content's max-height for smooth opening and closing
  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0";
    icon.innerHTML = upSVG;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.innerHTML = downSVG;
  }
}

const steps = 3;
let currentStep = 1;

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const updateStepper = () => {
  // Update step indicators
  for (let i = 1; i <= steps; i++) {
    const stepIndicator = document.getElementById(`step-${i}`);
    const stepContent = document.getElementById(`content-${i}`);

    if (i === currentStep) {
      stepIndicator.classList.remove("bg-gray-500");
      stepIndicator.classList.add("bg-purple-600");
      stepContent.classList.remove("hidden");
    } else {
      stepIndicator.classList.remove("bg-purple-600");
      stepIndicator.classList.add("bg-gray-500");
      stepContent.classList.add("hidden");
    }
  }

  // Enable or disable buttons based on step
  prevBtn.disabled = currentStep === 1;
  nextBtn.textContent = currentStep === steps ? "Finish" : "Continue";
};

// Button event listeners
prevBtn.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateStepper();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentStep < steps) {
    currentStep++;
  } else {
    alert("Stepper completed!");
  }
  updateStepper();
});

// Initialize the stepper
updateStepper();

