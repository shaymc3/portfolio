'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

 //sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
	  


    for (let i = 0; i < pages.length; i++) {
		
      if (this.id === pages[i].dataset.page){
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }


  });
}



        function enlargeImage(img) {
            // Get the modal elements
            var modal = document.getElementById("imageModal");
            var enlargedImg = document.getElementById("enlargedImg");
            var imgAlt = document.getElementById("imgAlt");
            
            // Set the image source and alt text
            enlargedImg.src = img.src;
            enlargedImg.alt = img.alt;
            imgAlt.textContent = img.alt;
            
            // Show the modal with fade-in effect
            modal.style.display = "block";
            // Trigger reflow to enable transition
            modal.offsetWidth;
            modal.style.opacity = "1";
            
            // Add event listener to close modal when clicking outside
            modal.addEventListener("click", function(event) {
                if (event.target === modal) {
                    closeModal();
                }
            });
            
            // Add event listener for escape key
            document.addEventListener("keydown", function(event) {
                if (event.key === "Escape") {
                    closeModal();
                }
            });
        }
        
        function closeModal() {
            var modal = document.getElementById("imageModal");
            // Fade out effect
            modal.style.opacity = "0";
            // Wait for transition to complete before hiding
            setTimeout(function() {
                modal.style.display = "none";
            }, 300);
        }

        // Clean up event listeners when modal is closed
        document.addEventListener("DOMContentLoaded", function() {
            var modal = document.getElementById("imageModal");
            modal.addEventListener("transitionend", function() {
                if (modal.style.opacity === "0") {
                    modal.style.display = "none";
                }
            });
        });