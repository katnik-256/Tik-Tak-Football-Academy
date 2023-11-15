// JavaScript code to animate the text
const movingText = document.querySelector('.moving-text');
const columnWidth = document.querySelector('.col-md').offsetWidth;

// Calculate the initial position of the text
const initialPosition = -movingText.offsetWidth;

// Set the initial position
movingText.style.right = `${initialPosition}px`;

// Function to move the text
function moveText() {
    const currentPosition = parseFloat(getComputedStyle(movingText).right);
    if (currentPosition > columnWidth) {
        movingText.style.right = `${initialPosition}px`;
    } else {
        movingText.style.right = `${currentPosition + 1}px`; // Adjust the speed by changing the increment value
    }
}

// Start the animation
setInterval(moveText, 20); // Adjust the interval for smoother or faster animation

//------------------------social media icon//////////////////////////////////////////

// Get the social icons element
var socialIcons = document.querySelector('.social-icons');

// Function to handle scrolling
function handleScroll() {
  // Get the vertical scroll position
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Show/hide social icons based on scroll position
  if (scrollPosition > 50) { // Change '100' to your preferred scroll position
    socialIcons.style.display = 'block';
  } else {
    socialIcons.style.display = 'none';
  }
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);


//................google map.................................................................//

// Initialize and display the map
        function initMap() {
            // Location coordinates
            var location = { lat: 0.067611, lng: 31.999914 }; // latitudes and longtudes

            // Create a map centered at the given coordinates
            var map = new google.maps.Map(document.getElementById("map"), {
                center: location,
                zoom: 15 // Adjust the zoom level
            });

            // Add a marker at the specified location
            var marker = new google.maps.Marker({
                position: location,
                map: map,
                title: "Tik Tak Football Academy" // Marker title
            });
        }
    
    
        // Initialize the map when the page loads
        window.onload = function() {
            initMap();
        };