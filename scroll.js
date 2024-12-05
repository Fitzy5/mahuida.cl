function updateNavBackground() {
    const nav = document.querySelector('nav');
    const options = {
        threshold: 0.1 // Triggers when just 10% of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                nav.classList.remove('transparent');
            } else {
                nav.classList.add('transparent');
            }
        });
    }, options);

    observer.observe(document.querySelector('.page-landing'));
}

// Call once when page loads
document.addEventListener('DOMContentLoaded', updateNavBackground);











// GSAP initialization
gsap.registerPlugin(ScrollTrigger);

// Gallery functionality
const images = document.querySelectorAll('.thumbs a');
let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        e.preventDefault();
        const container = e.currentTarget;
        
        // Toggle expanded state
        if (container.classList.contains('expanded')) {
            container.classList.remove('expanded');
            const navButtons = container.querySelector('.nav-buttons');
            if (navButtons) navButtons.remove();
        } else {
            // Remove expanded class from any other images
            images.forEach(img => img.classList.remove('expanded'));
            
            container.classList.add('expanded');
            
            // Add navigation buttons
            const nav = document.createElement('div');
            nav.className = 'nav-buttons';
            nav.innerHTML = `
                <button class="nav-button prev">❮</button>
                <button class="nav-button next">❯</button>
            `;
            container.appendChild(nav);
            
            // Add navigation handlers
            nav.querySelector('.prev').onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                images[currentIndex].click();
            };
            
            nav.querySelector('.next').onclick = (e) => {
                e.preventDefault(); 
                e.stopPropagation();
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].click();
            };
        }
    });
});




document.addEventListener('click', (e) => {
    // If click is outside any gallery image
    if (!e.target.closest('.thumbs a')) {
        // Remove expanded class from all images
        images.forEach(img => {
            img.classList.remove('expanded');
            const navButtons = img.querySelector('.nav-buttons');
            if (navButtons) navButtons.remove();
        });
    }
});
















// Scroll animations
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 50,
        duration: 1
    });
});

// Smooth navigation scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Additional animations for specific elements
gsap.from("#landing-text ul", {
    scrollTrigger: {
        trigger: "#page-landing",
        start: "top center",
        end: "bottom center",
        scrub: 1
    },
    y: 100,
    opacity: 1,
    duration: 1
});




gsap.from(".thumbs", {
  scrollTrigger: {
    trigger: ".thumbs",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse"
  },
  y: 50,
  opacity: 1,
  duration: 1
});


gsap.from(".thumbs a", {
  scrollTrigger: {
      trigger: ".thumbs",
      start: "top 80%",
      toggleActions: "play none none reverse"
  },
  scale: 0.5,
  opacity: 0,
  duration: 1,
  stagger: 0.5
});

gsap.from("#volante", {
    scrollTrigger: {
      trigger: "#volante",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 1,
    duration: 1
  });
  

  gsap.from("#volante img", {
    scrollTrigger: {
        trigger: "#volante",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
    },
    scale: 0.8,
    opacity: 1,
    duration: 1.2
});
