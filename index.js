document.addEventListener('DOMContentLoaded', function() {
    updateEventDetails();
    initImageSlider();
});

function updateEventDetails() {
  fetch('https://api.example.com/hyrox/details')
    .then(response => response.json())
    .then(data => {
      const eventDetails = document.createElement('div');
      eventDetails.innerHTML = `<h2>Next Event: ${data.nextEventDate}</h2><p>${data.description}</p>`;
      document.querySelector('.text-content').appendChild(eventDetails);
    })
    .catch(error => console.error('Failed to update event details:', error));
}

function initImageSlider() {
    const slides = document.querySelectorAll('.image-slider img');
    let currentSlide = 0;
    slides[currentSlide].style.display = 'block'; // show the first image

    setInterval(() => {
        slides[currentSlide].style.display = 'none'; // hide current
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block'; // show next
    }, 4000); // change every 4 seconds
}
