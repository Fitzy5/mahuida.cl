// Initialize
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  lerp: 0.075,
  multiplier: 0.9,
  smartphone: {
    smooth: true
  },
  tablet: {
    smooth: true
  }
});

// Sync ScrollTrigger with Locomotive Scroll
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length 
      ? locoScroll.scrollTo(value, 0, 0) 
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

function setupAnimations() {
  // Landing page animation
  gsap.from("#landing-text ul", {
    scrollTrigger: {
      trigger: "#page-landing",
      scroller: ".smooth-scroll",
      start: "top center",
      end: "bottom center",
      scrub: 1
    },
    y: 100,
    opacity: 0,
    duration: 1
  });

  // Volante animation
  gsap.from(".volante img", {
    scrollTrigger: {
      trigger: ".volante",
      scroller: ".smooth-scroll",
      start: "top 80%",
      end: "top 20%",
      scrub: 1
    },
    scale: 0.8,
    opacity: 0,
    duration: 1
  });

  // About section animation
  gsap.from("#about", {
    scrollTrigger: {
      trigger: "#about",
      scroller: ".smooth-scroll",
      start: "top bottom",
      end: "top center",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1
  });

  // Thumbs container animation
  gsap.from(".thumbs", {
    scrollTrigger: {
      trigger: ".thumbs",
      scroller: ".smooth-scroll",
      start: "top bottom",
      end: "top center",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1
  });

  // Form section animation
  gsap.from("#inscription form", {
    scrollTrigger: {
      trigger: "#inscription",
      scroller: ".smooth-scroll",
      start: "top 80%",
      end: "top 20%",
      scrub: 1
    },
    y: 50,
    opacity: 0
  });
}

// Update on resize
function handleResize() {
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

// Initialize everything
function init() {
  setupAnimations();
  handleResize();
  
  // Update locomotive scroll on window resize
  window.addEventListener("resize", () => {
    setTimeout(() => {
      locoScroll.update();
      ScrollTrigger.refresh();
    }, 500);
  });
}

// Run initialization
init();

// Handle navigation clicks
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    locoScroll.scrollTo(target);
  });
});