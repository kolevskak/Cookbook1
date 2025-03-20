// Get the "Next" button by its ID
const buttonNext = document.getElementById("next");
const buttonPrevious = document.getElementById("previous");

// Function to go to the next page based on the current page
const goToNextPage = () => {
  if (window.location.href.includes("appetizers.html")) {
    window.location.href = "desserts.html";
  } else if (window.location.href.includes("desserts.html")) {
    window.location.href = "main_courses.html";
  } else if (window.location.href.includes("main_courses.html")) {
    window.location.href = "appetizers.html";
  }
};

const goToPreviousPage = () => {
  if (window.location.href.includes("appetizers.html")) {
    window.location.href = "main_courses.html";
  } else if (window.location.href.includes("desserts.html")) {
    window.location.href = "appetizers.html";
  } else if (window.location.href.includes("main_courses.html")) {
    window.location.href = "desserts.html";
  }
};

// Attach the goToNextPage function to the "Next" button
buttonNext.addEventListener("click", goToNextPage);
buttonPrevious.addEventListener("click", goToPreviousPage);
