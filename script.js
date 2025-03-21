
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu button functionality can be added here if needed
    
    // Add simple scroll animation for elements
    const scrollElements = document.querySelectorAll('.card, .recommendation-card, .project-card');
    
    if (scrollElements.length > 0) {
      window.addEventListener('scroll', fadeInOnScroll);
      window.addEventListener('load', fadeInOnScroll);
      
      // Initial check on page load
      fadeInOnScroll();
    }
    
    function fadeInOnScroll() {
      scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    }
    
    // Testimonial slider for mobile view
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    
    if (prevButton && nextButton) {
      const testimonials = document.querySelectorAll('.recommendation-card');
      let currentTestimonial = 0;
      
      function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
          if (i === index) {
            testimonial.style.display = 'block';
          } else {
            testimonial.style.display = 'none';
          }
        });
      }
      
      // Only initialize slider on mobile
      function checkScreenSize() {
        if (window.innerWidth < 640) {
          // Initialize mobile slider
          showTestimonial(currentTestimonial);
          
          prevButton.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
          });
          
          nextButton.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
          });
        } else {
          // Reset for desktop
          testimonials.forEach(testimonial => {
            testimonial.style.display = 'block';
          });
        }
      }
      
      window.addEventListener('resize', checkScreenSize);
      checkScreenSize(); // Initial check
    }
  });
  