const cityDetails = {
  taj: {
    name: 'Taj Mahal',
    image: 'assets/taj.jpg',
    location: 'Agra, Uttar Pradesh',
    bestTime: 'October to March',
    idealFor: 'Couples, history lovers, photographers',
    duration: '1 day',
    description: 'A white marble masterpiece and symbol of eternal love, the Taj Mahal is a must-visit landmark known for its symmetry, artistry and cultural importance.',
    highlights: ['Sunrise view', 'Architecture tour', 'Mughal heritage walk']
  },
  varanasi: {
    name: 'Varanasi',
    image: 'assets/varanasi.jpg',
    location: 'Varanasi, Uttar Pradesh',
    bestTime: 'October to February',
    idealFor: 'Spiritual travellers, culture seekers',
    duration: '2–3 days',
    description: 'Varanasi brings together ghats, rituals, music, temples and profound spiritual energy that shape one of India’s most iconic experiences.',
    highlights: ['Ganga Aarti', 'Boat ride at dawn', 'Temple visits']
  },
  lucknow: {
    name: 'Lucknow',
    image: 'assets/lucknow.jpg',
    location: 'Lucknow, Uttar Pradesh',
    bestTime: 'November to February',
    idealFor: 'Food lovers, heritage explorers',
    duration: '2 days',
    description: 'Known as the city of nawabs, Lucknow offers a wonderful mix of architecture, poetry, food culture and warm hospitality.',
    highlights: ['Awadhi food', 'Chota Imambara', 'Bara Imambara']
  },
  ayodhya: {
    name: 'Ayodhya',
    image: 'assets/ayodhya.jpg',
    location: 'Ayodhya, Uttar Pradesh',
    bestTime: 'October to March',
    idealFor: 'Pilgrims and spiritual travellers',
    duration: '1–2 days',
    description: 'Ayodhya is one of the most revered spiritual cities in India, known for its temples, sacred ghats and deeply rooted history.',
    highlights: ['Ram Mandir', 'Saryu River', 'Temple route']
  }
};

const famousFoods = [
  {
    name: 'Aaloo Tikki',
    image: 'assets/food-aaloo-tikki.jpg',
    description: 'Crispy potato patties served with tamarind chutney, green chili and chaat masala.'
  },
  {
    name: 'Jalebi',
    image: 'assets/food-jalebi.jpg',
    description: 'A sweet spiral fried to golden perfection and enjoyed fresh with rabri or tea.'
  },
  {
    name: 'Banarasi Paan',
    image: 'assets/food-paan.jpg',
    description: 'A traditional paan from Banaras with a rich mix of ingredients and flavors.'
  },
  {
    name: 'Petha',
    image: 'assets/food-petha.jpg',
    description: 'A soft and sweet agra specialty made with pumpkin and flavored with saffron and rose.'
  },
  {
    name: 'Lucknowi Biryani',
    image: 'assets/food-biryani.jpg',
    description: 'A fragrant rice and meat dish prepared with rich Awadhi spices and slow-cooked flavor.'
  },
  {
    name: 'Chaat',
    image: 'assets/food-chaat.jpg',
    description: 'A tangy, spicy and crunchy street food favorite with a burst of flavors in every bite.'
  }
];

const modal = document.getElementById('food-modal');
const modalImage = document.getElementById('food-modal-image');
const modalTitle = document.getElementById('food-modal-title');
const modalDescription = document.getElementById('food-modal-description');

function openFoodModal(food) {
  if (!modal || !modalImage || !modalTitle || !modalDescription) return;
  modalImage.src = food.image;
  modalTitle.textContent = food.name;
  modalDescription.textContent = food.description;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeFoodModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function bindFoodModal() {
  const triggerButtons = document.querySelectorAll('.food-trigger');
  if (triggerButtons.length) {
    triggerButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = famousFoods[0];
        openFoodModal(item);
      });
    });
  }

  const closeButtons = document.querySelectorAll('[data-close-modal="true"], .modal-close');
  closeButtons.forEach((button) => {
    button.addEventListener('click', closeFoodModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeFoodModal();
  });
}

function renderCityPage() {
  const detailRoot = document.getElementById('city-detail-root');
  if (!detailRoot) return;

  const params = new URLSearchParams(window.location.search);
  const cityKey = params.get('city') || 'varanasi';
  const city = cityDetails[cityKey] || cityDetails.varanasi;

  detailRoot.innerHTML = `
    <section class="detail-page">
      <div class="container">
        <div class="detail-hero">
          <div>
            <p class="eyebrow">Explore city</p>
            <h1>${city.name}</h1>
            <p>${city.description}</p>
            <div class="detail-meta">
              <span class="meta-pill">📍 ${city.location}</span>
              <span class="meta-pill">🕒 ${city.bestTime}</span>
              <span class="meta-pill">🎯 ${city.idealFor}</span>
            </div>
          </div>
          <img src="${city.image}" alt="${city.name}" />
        </div>

        <div class="detail-content">
          <div class="detail-card">
            <h3>Highlights</h3>
            <ul>
              ${city.highlights.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </div>

          <div class="detail-card">
            <h3>Travel Summary</h3>
            <p><strong>Best time:</strong> ${city.bestTime}</p>
            <p><strong>Ideal for:</strong> ${city.idealFor}</p>
            <p><strong>Trip length:</strong> ${city.duration}</p>
            <p><strong>Tip:</strong> Start early in the morning to enjoy peaceful views and avoid peak crowds.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function bindNavigation() {
  const dropdown = document.querySelector('.nav-dropdown');
  const toggle = document.querySelector('.nav-dropdown-toggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (toggle && dropdown) {
    toggle.addEventListener('click', () => {
      const isOpen = dropdown.classList.contains('open');
      dropdown.classList.toggle('open', !isOpen);
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  document.addEventListener('click', (event) => {
    if (dropdown && !dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    }

    if (menuToggle && mainNav && !menuToggle.contains(event.target) && !mainNav.contains(event.target)) {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (!mainNav) return;
      const isOpen = mainNav.classList.contains('open');
      mainNav.classList.toggle('open', !isOpen);
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
    });
  }
}

function bindCityCards() {
  document.querySelectorAll('.place-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.place-card');
      const city = card?.dataset.place || 'varanasi';
      window.location.href = `city-details.html?city=${city}`;
    });
  });
}

function bindBookingForm() {
  const forms = document.querySelectorAll('.booking-form');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button');
      if (button) {
        const original = button.textContent;
        button.textContent = 'Submitted';
        setTimeout(() => { button.textContent = original; form.reset(); }, 1400);
      }
    });
  });
};

function updateYear() {
  const yearNode = document.getElementById('year');
  if (yearNode) yearNode.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  updateYear();
  bindNavigation();
  bindCityCards();
  bindBookingForm();
  bindFoodModal();
  renderCityPage();
});
