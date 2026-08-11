// ============================================================
// DATA
// ============================================================
const services = [
  {
    id: '1',
    title: 'Ceramic Coating',
    description: 'Long-lasting hydrophobic gloss & protection against elements. Our advanced formula bonds with your paint to create a sacrificial layer.',
    icon: 'pi pi-shield',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800',
    badge: 'Most Popular'
  },
  {
    id: '2',
    title: 'Paint Protection Film (PPF)',
    description: 'Self-healing armor against scratches, stone chips, and road debris.',
    icon: 'pi pi-star',
    imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600'
  },
  {
    id: '3',
    title: 'Car Wash',
    description: 'Premium foam wash & interior vacuum for a pristine, streak-free finish.',
    icon: 'pi pi-car',
    imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600'
  },
  {
    id: '4',
    title: 'Bike Wash',
    description: 'Detailed cleaning for engine & chains, restoring showroom shine to your ride.',
    icon: 'pi pi-bolt',
    imageUrl: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=600'
  },
  {
    id: '5',
    title: 'Deep Chemical Wash',
    description: 'Removal of tar, iron, and deep contaminants for complete paint correction.',
    icon: 'pi pi-sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600'
  }
];

const testimonials = [
  {
    id: '1',
    customerName: 'Marcus Thorn',
    carModel: 'Porsche 911 GT3',
    rating: 5,
    review: 'Absolutely incredible work. The ceramic coating makes my 911 look deeper than the day I bought it. The attention to detail is unmatched in the city. They even cleaned the engine bay to perfection.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    date: '2 days ago',
    likes: 12
  },
  {
    id: '2',
    customerName: 'Elena Rodriguez',
    carModel: 'Tesla Model S',
    rating: 5,
    review: 'Professional, timely, and the results speak for themselves. My Tesla interior looks brand new despite having two kids and a dog. Highly recommend the full interior detail package.',
    avatar: 'https://i.pravatar.cc/150?img=45',
    date: '1 week ago',
    likes: 8
  },
  {
    id: '3',
    customerName: 'David Chen',
    carModel: 'BMW M3 Comp',
    rating: 5,
    review: 'RR Detailers are the only ones I trust with my M3. They removed all the swirl marks from the previous owner, and the paint correction is absolutely flawless. Worth every penny.',
    avatar: 'https://i.pravatar.cc/150?img=33',
    date: '3 weeks ago',
    likes: 5
  },
  {
    id: '4',
    customerName: 'Sarah Johnson',
    carModel: 'Mercedes-Benz AMG GT',
    rating: 5,
    review: "Outstanding service from start to finish. The PPF installation was seamless and the finish is perfect. My AMG looks stunning and I have peace of mind knowing it's protected.",
    avatar: 'https://i.pravatar.cc/150?img=28',
    date: '1 month ago',
    likes: 15
  },
  {
    id: '5',
    customerName: 'James Wilson',
    carModel: 'Audi RS6 Avant',
    rating: 5,
    review: "Best detailing experience I've ever had. They took their time and didn't rush anything. Every corner of my RS6 was meticulously cleaned. Will definitely be returning.",
    avatar: 'https://i.pravatar.cc/150?img=51',
    date: '1 month ago',
    likes: 10
  },
  {
    id: '6',
    customerName: 'Priya Patel',
    carModel: 'Range Rover Velar',
    rating: 5,
    review: "Exceptional attention to detail! My Velar's leather seats look and smell brand new. The ceramic coating on the paint is amazing - water just beads right off.",
    avatar: 'https://i.pravatar.cc/150?img=41',
    date: '2 months ago',
    likes: 7
  }
];

const ratingDistribution = [
  { stars: 5, percentage: 87 },
  { stars: 4, percentage: 10 },
  { stars: 3, percentage: 2 },
  { stars: 2, percentage: 1 }
];

const contactInfo = [
  { icon: 'pi pi-phone', label: 'Phone', value: '+91 98765 43210', link: 'tel:+919876543210' },
  { icon: 'pi pi-envelope', label: 'Email', value: 'support@rrdetailers.com', link: 'mailto:support@rrdetailers.com' },
  { icon: 'pi pi-map-marker', label: 'Workshop', value: '123 Speedster Lane, Auto District', link: '#' }
];

const businessHoursTemplate = [
  { day: 'Monday', hours: '9:00 AM - 7:00 PM', dow: 1 },
  { day: 'Tuesday', hours: '9:00 AM - 7:00 PM', dow: 2 },
  { day: 'Wednesday', hours: '9:00 AM - 7:00 PM', dow: 3 },
  { day: 'Thursday', hours: '9:00 AM - 7:00 PM', dow: 4 },
  { day: 'Friday', hours: '9:00 AM - 7:00 PM', dow: 5 },
  { day: 'Saturday', hours: '10:00 AM - 6:00 PM', dow: 6 },
  { day: 'Sunday', hours: 'Closed', dow: 0 }
];

// ============================================================
// NAVBAR
// ============================================================
const navbar = document.getElementById('navbar');
const menuItems = ['home', 'services', 'testimonials', 'contact', 'location'];
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileSideMenu = document.getElementById('mobileSideMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const sideMenuOverlay = document.getElementById('sideMenuOverlay');

function scrollToSection(anchor) {
  closeMenu();
  if (anchor === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(anchor);
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

document.querySelectorAll('[data-scroll]').forEach((el) => {
  el.addEventListener('click', () => scrollToSection(el.getAttribute('data-scroll')));
});

document.getElementById('bookNowBtn').addEventListener('click', () => scrollToSection('contact'));
document.getElementById('bookNowBtnMobile').addEventListener('click', () => scrollToSection('contact'));

function openMenu() {
  mobileSideMenu.classList.add('open');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  mobileSideMenu.classList.remove('open');
  document.body.classList.remove('menu-open');
}

mobileMenuToggle.addEventListener('click', openMenu);
closeMobileMenu.addEventListener('click', closeMenu);
sideMenuOverlay.addEventListener('click', closeMenu);

function updateActiveSection() {
  let active = 'home';
  if (window.pageYOffset >= 100) {
    const scrollPosition = window.pageYOffset + 150;
    for (let i = menuItems.length - 1; i >= 0; i--) {
      const section = document.getElementById(menuItems[i]);
      if (section && section.offsetTop <= scrollPosition) {
        active = menuItems[i];
        break;
      }
    }
  }
  document.querySelectorAll('.menu-item, .side-menu-item').forEach((el) => {
    el.classList.toggle('active', el.getAttribute('data-scroll') === active);
  });
}

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.pageYOffset > 50);
  updateActiveSection();
});

updateActiveSection();

// ============================================================
// SERVICES SLIDESHOW
// ============================================================
const slidesWrapper = document.getElementById('slidesWrapper');
const slideIndicators = document.getElementById('slideIndicators');
let currentSlideIndex = 0;
let slideInterval = null;

function renderSlides() {
  slidesWrapper.innerHTML = services.map((service, i) => `
    <div class="service-slide${i === 0 ? ' active' : ''}" data-index="${i}">
      <div class="slide-image">
        <img src="${service.imageUrl}" alt="${service.title}">
        <div class="slide-overlay"></div>
      </div>
      <div class="slide-content">
        ${service.badge ? `<span class="slide-badge">${service.badge}</span>` : ''}
        <i class="${service.icon} slide-icon"></i>
        <h3 class="slide-title">${service.title}</h3>
        <p class="slide-description">${service.description}</p>
        <button class="slide-button" data-scroll="contact">Learn More <i class="pi pi-arrow-right"></i></button>
      </div>
    </div>
  `).join('');

  slideIndicators.innerHTML = services.map((_, i) => `
    <button class="indicator${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>
  `).join('');

  slidesWrapper.querySelectorAll('[data-scroll]').forEach((el) => {
    el.addEventListener('click', () => scrollToSection(el.getAttribute('data-scroll')));
  });

  slideIndicators.querySelectorAll('.indicator').forEach((btn) => {
    btn.addEventListener('click', () => goToSlide(parseInt(btn.getAttribute('data-index'), 10)));
  });
}

function showSlide(index) {
  currentSlideIndex = index;
  slidesWrapper.querySelectorAll('.service-slide').forEach((slide) => {
    slide.classList.toggle('active', parseInt(slide.getAttribute('data-index'), 10) === index);
  });
  slideIndicators.querySelectorAll('.indicator').forEach((btn) => {
    btn.classList.toggle('active', parseInt(btn.getAttribute('data-index'), 10) === index);
  });
}

function nextSlide() {
  showSlide((currentSlideIndex + 1) % services.length);
}

function goToSlide(index) {
  showSlide(index);
  stopAutoSlide();
  startAutoSlide();
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  if (slideInterval) clearInterval(slideInterval);
}

renderSlides();
startAutoSlide();

const slideshowContainer = document.getElementById('slideshowContainer');
slideshowContainer.addEventListener('mouseenter', stopAutoSlide);
slideshowContainer.addEventListener('mouseleave', startAutoSlide);

// ============================================================
// TESTIMONIALS
// ============================================================
const ratingBreakdown = document.getElementById('ratingBreakdown');
ratingBreakdown.innerHTML = ratingDistribution.map((dist) => `
  <div class="rating-bar-row">
    <span class="star-label">${dist.stars}</span>
    <div class="progress-bar"><div class="progress-fill" style="width:${dist.percentage}%"></div></div>
    <span class="percentage-label">${dist.percentage}%</span>
  </div>
`).join('');

const testimonialsGrid = document.getElementById('testimonialsGrid');

function starsHtml(rating) {
  let html = '';
  for (let i = 0; i < 5; i++) {
    html += `<i class="pi ${i < rating ? 'pi-star-fill' : 'pi-star'}"></i>`;
  }
  return html;
}

function renderTestimonials() {
  testimonialsGrid.innerHTML = testimonials.map((t) => `
    <article class="testimonial-card" data-id="${t.id}">
      <div class="card-header">
        <div class="customer-info">
          <div class="customer-avatar"><img src="${t.avatar}" alt="${t.customerName}"></div>
          <div class="customer-details">
            <h4 class="customer-name">${t.customerName}</h4>
            <p class="car-model">${t.carModel}</p>
          </div>
        </div>
        <i class="pi pi-comment quote-icon"></i>
      </div>
      <div class="review-rating">${starsHtml(t.rating)}</div>
      <p class="review-text">${t.review}</p>
      <div class="card-footer">
        <span class="review-date">${t.date}</span>
        <button class="like-button" data-id="${t.id}">
          <i class="pi pi-thumbs-up"></i>
          <span>${t.likes}</span>
        </button>
      </div>
    </article>
  `).join('');

  testimonialsGrid.querySelectorAll('.like-button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const testimonial = testimonials.find((t) => t.id === id);
      if (!testimonial || btn.classList.contains('liked')) return;
      testimonial.likes++;
      btn.querySelector('span').textContent = testimonial.likes;
      btn.classList.add('liked');
    });
  });
}

renderTestimonials();

// ============================================================
// CONTACT CARDS
// ============================================================
const contactCards = document.getElementById('contactCards');
contactCards.innerHTML = contactInfo.map((info) => `
  <a href="${info.link}" class="contact-card">
    <div class="card-icon"><i class="${info.icon}"></i></div>
    <div class="card-content">
      <span class="card-label">${info.label}</span>
      <p class="card-value">${info.value}</p>
    </div>
    <div class="card-arrow"><i class="pi pi-arrow-right"></i></div>
  </a>
`).join('');

// ============================================================
// CONTACT FORM VALIDATION
// ============================================================
const contactForm = document.getElementById('contactForm');
const formFields = {
  name: { required: true, minLength: 2, message: 'Name is required' },
  email: { required: true, email: true, message: 'Email is required' },
  phone: { required: true, pattern: /^[0-9]{10}$/, message: 'Phone is required', patternMessage: 'Enter 10 digit number' },
  service: { required: true, message: 'Please select a service' },
  vehicleType: { required: true, message: 'Please select vehicle type' },
  message: { required: true, minLength: 10, message: 'Message is required', minLengthMessage: 'Message must be at least 10 characters' }
};

function validateField(name) {
  const el = contactForm.elements[name];
  const rules = formFields[name];
  const errorEl = contactForm.querySelector(`[data-error-for="${name}"]`);
  const value = el.value.trim();
  let error = '';

  if (rules.required && !value) {
    error = rules.message;
  } else if (rules.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    error = 'Invalid email format';
  } else if (rules.pattern && value && !rules.pattern.test(value)) {
    error = rules.patternMessage;
  } else if (rules.minLength && value && value.length < rules.minLength) {
    error = rules.minLengthMessage || `Minimum ${rules.minLength} characters required`;
  }

  el.classList.toggle('error', !!error);
  errorEl.textContent = error;
  errorEl.classList.toggle('show', !!error);

  return !error;
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;
  Object.keys(formFields).forEach((name) => {
    if (!validateField(name)) isValid = false;
  });

  if (!isValid) return;

  alert('Thank you! We will contact you soon.');
  contactForm.reset();
  Object.keys(formFields).forEach((name) => {
    contactForm.elements[name].classList.remove('error');
    const errorEl = contactForm.querySelector(`[data-error-for="${name}"]`);
    errorEl.classList.remove('show');
  });
});

Object.keys(formFields).forEach((name) => {
  contactForm.elements[name].addEventListener('blur', () => validateField(name));
});

// ============================================================
// LOCATION - BUSINESS HOURS
// ============================================================
const hoursList = document.getElementById('hoursList');
const today = new Date().getDay();
hoursList.innerHTML = businessHoursTemplate.map((h) => `
  <div class="hours-item${h.dow === today ? ' today' : ''}">
    <span class="day">${h.day}</span>
    <span class="time">${h.hours}</span>
  </div>
`).join('');

// ============================================================
// FOOTER
// ============================================================
document.getElementById('currentYear').textContent = new Date().getFullYear();
