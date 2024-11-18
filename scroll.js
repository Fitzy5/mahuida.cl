// GSAP initialization
gsap.registerPlugin(ScrollTrigger);

// Gallery functionality
const images = document.querySelectorAll('.thumbs a');
let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        e.preventDefault();
        showLightbox(index);
    });
});

function showLightbox(index) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    currentIndex = index;

    const content = `
        <span class="close">×</span>
        <img src="${images[currentIndex].getAttribute('data-src')}" class="lightbox-content">
        <span class="prev">❮</span>
        <span class="next">❯</span>
    `;
    
    lightbox.innerHTML = content;
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';

    // Event listeners
    lightbox.querySelector('.close').onclick = () => {
        document.body.removeChild(lightbox);
        document.body.style.overflow = 'auto';
    };

    lightbox.querySelector('.prev').onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightbox.querySelector('.lightbox-content').src = images[currentIndex].getAttribute('data-src');
    };

    lightbox.querySelector('.next').onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        lightbox.querySelector('.lightbox-content').src = images[currentIndex].getAttribute('data-src');
    };
}

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
