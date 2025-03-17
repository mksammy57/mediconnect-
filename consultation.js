
// Start voice call with a doctor
function startVoiceCall(doctorId) {
  const doctor = doctorsData.find(d => d.id == doctorId);
  if (!doctor) return;
  
  // Create voice call modal
  const modal = document.createElement('div');
  modal.className = 'voice-call-modal';
  modal.innerHTML = `
    <div class="voice-call-container">
      <div class="voice-call-header">
        <h3>Voice Call</h3>
        <button class="close-voice-call"><i class="fas fa-times"></i></button>
      </div>
      <div class="voice-call-content">
        <div class="doctor-avatar large">${doctor.name.charAt(0)}</div>
        <h3 class="doctor-name">${doctor.name}</h3>
        <p class="call-status">Calling...</p>
        <p class="call-duration">00:00</p>
      </div>
      <div class="voice-call-controls">
        <button class="control-btn mute-btn" title="Mute"><i class="fas fa-microphone"></i></button>
        <button class="control-btn speaker-btn" title="Speaker"><i class="fas fa-volume-up"></i></button>
        <button class="control-btn end-call" title="End Call"><i class="fas fa-phone-slash"></i></button>
      </div>
    </div>
  `;
  
  // Add to body
  document.body.appendChild(modal);
  
  // Set up event listeners
  const closeBtn = modal.querySelector('.close-voice-call');
  const endCallBtn = modal.querySelector('.end-call');
  const controlBtns = modal.querySelectorAll('.control-btn:not(.end-call)');
  
  const closeModal = () => {
    document.body.removeChild(modal);
  };
  
  closeBtn.addEventListener('click', closeModal);
  endCallBtn.addEventListener('click', closeModal);
  
  // Toggle mute and speaker
  controlBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      
      // Update icon for mute button
      if (this.classList.contains('mute-btn')) {
        const icon = this.querySelector('i');
        icon.className = this.classList.contains('active') ? 'fas fa-microphone-slash' : 'fas fa-microphone';
      }
    });
  });
  
  // Simulate call connection
  setTimeout(() => {
    const statusElement = modal.querySelector('.call-status');
    if (statusElement) {
      statusElement.textContent = 'Connected';
      statusElement.style.color = '#4CAF50';
    }
    
    // Start timer
    let seconds = 0;
    const durationElement = modal.querySelector('.call-duration');
    const timer = setInterval(() => {
      seconds++;
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      durationElement.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
    
    // Clear timer when call ends
    closeBtn.addEventListener('click', () => clearInterval(timer));
    endCallBtn.addEventListener('click', () => clearInterval(timer));
  }, 2000);
}

// Start video call with a doctor
function startVideoCall(doctorId) {
  const doctor = doctorsData.find(d => d.id == doctorId);
  if (!doctor) return;
  
  // Create video call modal
  const modal = document.createElement('div');
  modal.className = 'video-call-modal';
  modal.innerHTML = `
    <div class="video-call-container">
      <div class="video-call-header">
        <h3>Video Call with ${doctor.name}</h3>
        <button class="close-video-call"><i class="fas fa-times"></i></button>
      </div>
      <div class="video-main">
        <div class="video-large">
          <div class="video-placeholder">
            <i class="fas fa-user"></i>
            <p>Connecting to ${doctor.name}...</p>
          </div>
        </div>
        <div class="video-small">
          <div class="video-placeholder self-video">
            <i class="fas fa-user"></i>
            <p>You</p>
          </div>
        </div>
      </div>
      <div class="video-controls">
        <button class="control-btn mute-btn" title="Mute"><i class="fas fa-microphone"></i></button>
        <button class="control-btn video-off-btn" title="Camera"><i class="fas fa-video"></i></button>
        <button class="control-btn screen-share-btn" title="Share Screen"><i class="fas fa-desktop"></i></button>
        <button class="control-btn end-call" title="End Call"><i class="fas fa-phone-slash"></i></button>
      </div>
    </div>
  `;
  
  // Add to body
  document.body.appendChild(modal);
  
  // Set up event listeners
  const closeBtn = modal.querySelector('.close-video-call');
  const endCallBtn = modal.querySelector('.end-call');
  const controlBtns = modal.querySelectorAll('.control-btn:not(.end-call)');
  
  const closeModal = () => {
    document.body.removeChild(modal);
  };
  
  closeBtn.addEventListener('click', closeModal);
  endCallBtn.addEventListener('click', closeModal);
  
  // Toggle controls
  controlBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      
      // Update icons
      const icon = this.querySelector('i');
      if (this.classList.contains('mute-btn')) {
        icon.className = this.classList.contains('active') ? 'fas fa-microphone-slash' : 'fas fa-microphone';
      } else if (this.classList.contains('video-off-btn')) {
        icon.className = this.classList.contains('active') ? 'fas fa-video-slash' : 'fas fa-video';
      }
    });
  });
  
  // Simulate connecting
  setTimeout(() => {
    const placeholder = modal.querySelector('.video-large .video-placeholder');
    if (placeholder) {
      placeholder.innerHTML = `
        <img src="https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg" 
             alt="${doctor.name}" style="width: 100%; height: 100%; object-fit: cover;">
      `;
    }
  }, 2000);
}


// Doctor data - In a production environment, this would come from an API
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "cardiology",
    experience: "15 years",
    rating: 4.9,
    availableToday: true,
    consultationType: ["video", "voice", "chat"],
    price: "$100",
    availableTimeSlots: ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"],
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "dermatology",
    experience: "8 years",
    rating: 4.7,
    availableToday: true,
    consultationType: ["video", "chat"],
    price: "$90",
    availableTimeSlots: ["10:00 AM", "01:00 PM", "03:30 PM"],
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "neurology",
    experience: "12 years",
    rating: 4.8,
    availableToday: false,
    consultationType: ["video", "voice"],
    price: "$120",
    availableTimeSlots: ["09:30 AM", "02:30 PM", "05:00 PM"],
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialization: "pediatrics",
    experience: "20 years",
    rating: 5.0,
    availableToday: true,
    consultationType: ["video", "voice", "chat"],
    price: "$95",
    availableTimeSlots: ["08:00 AM", "10:30 AM", "01:30 PM", "04:00 PM"],
    image: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    id: 5,
    name: "Dr. Olivia Kim",
    specialization: "psychiatry",
    experience: "10 years",
    rating: 4.6,
    availableToday: false,
    consultationType: ["video", "chat"],
    price: "$110",
    availableTimeSlots: ["11:00 AM", "02:00 PM", "04:30 PM"],
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: 6,
    name: "Dr. Robert Thompson",
    specialization: "orthopedics",
    experience: "18 years",
    rating: 4.8,
    availableToday: true,
    consultationType: ["video", "voice"],
    price: "$115",
    availableTimeSlots: ["09:00 AM", "12:00 PM", "03:00 PM"],
    image: "https://randomuser.me/api/portraits/men/53.jpg"
  },
  {
    id: 7,
    name: "Dr. Maria Garcia",
    specialization: "gynecology",
    experience: "14 years",
    rating: 4.9,
    availableToday: true,
    consultationType: ["video", "voice", "chat"],
    price: "$105",
    availableTimeSlots: ["10:30 AM", "01:30 PM", "04:00 PM"],
    image: "https://randomuser.me/api/portraits/women/82.jpg"
  },
  {
    id: 8,
    name: "Dr. David Lee",
    specialization: "internal",
    experience: "9 years",
    rating: 4.5,
    availableToday: false,
    consultationType: ["video", "chat"],
    price: "$85",
    availableTimeSlots: ["09:30 AM", "12:30 PM", "03:30 PM"],
    image: "https://randomuser.me/api/portraits/men/81.jpg"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  // Initialize the doctors display
  console.log('Loading doctors data:', doctorsData.length, 'doctors available');
  
  // Check if user is a doctor and redirect to dashboard if needed
  const userJson = localStorage.getItem('user');
  if (userJson) {
    try {
      const user = JSON.parse(userJson);
      if (user.role === 'doctor') {
        // Add dashboard link to the header navigation
        const navUl = document.querySelector('header nav ul');
        if (navUl) {
          const dashboardLi = document.createElement('li');
          dashboardLi.innerHTML = '<a href="doctor-dashboard.html" class="dashboard-link">My Dashboard</a>';
          
          // Insert before the last item (login button)
          navUl.insertBefore(dashboardLi, navUl.lastElementChild);
        }
      }
    } catch (e) {
      console.error('Error parsing user data:', e);
    }
  }
  
  if (document.getElementById('doctors-list')) {
    displayDoctors(doctorsData);
    
    // Set up event listeners
    setupEventListeners();
    
    // Apply initial filters automatically
    applyFilters();
    
    // Initialize doctor messaging functionality
    initializeDoctorMessaging();
    
    // Initialize chat functionality
    initializeChat();
  } else {
    console.log('Doctors list container not found');
  }
});

function setupEventListeners() {
  // Filter form events
  const applyFiltersBtn = document.getElementById('apply-filters');
  const resetFiltersBtn = document.getElementById('reset-filters');
  
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', function() {
      applyFilters();
    });
  }
  
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', function() {
      resetFilters();
    });
  }

  // Active filter tags - for removing filters
  const activeFiltersContainer = document.querySelector('.active-filters');
  if (activeFiltersContainer) {
    activeFiltersContainer.addEventListener('click', function(e) {
      if (e.target.classList.contains('fa-times')) {
        removeFilter(
          e.target.getAttribute('data-filter-type'),
          e.target.getAttribute('data-filter-value')
        );
      }
    });
  }

  // Doctor booking events
  document.addEventListener('click', function(e) {
    // Book appointment button
    if (e.target.classList.contains('book-appointment-btn')) {
      const doctorId = e.target.getAttribute('data-doctor-id');
      showBookingForm(doctorId);
    }
    
    // Start chat button
    if (e.target.classList.contains('start-chat-btn')) {
      const doctorId = e.target.getAttribute('data-doctor-id');
      startChat(doctorId);
    }
    
    // Start video call button
    if (e.target.classList.contains('start-video-btn')) {
      const doctorId = e.target.getAttribute('data-doctor-id');
      startVideoCall(doctorId);
    }
    
    // Start voice call button
    if (e.target.classList.contains('start-voice-btn')) {
      const doctorId = e.target.getAttribute('data-doctor-id');
      startVoiceCall(doctorId);
    }
    
    // Cancel booking button
    if (e.target.id === 'cancel-booking') {
      hideBookingForm();
    }
    
    // Time slot selection
    if (e.target.classList.contains('time-slot')) {
      selectTimeSlot(e.target);
    }
  });
  
  // Appointment form submission
  const appointmentForm = document.getElementById('appointment-form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      bookAppointment();
    });
  }
  
  // Chat input handlers
  const sendMessageBtn = document.getElementById('send-message-btn');
  const chatInput = document.getElementById('doctor-chat-input');
  const closeChat = document.getElementById('close-chat');
  
  if (sendMessageBtn && chatInput) {
    sendMessageBtn.addEventListener('click', function() {
      sendChatMessage();
    });
    
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendChatMessage();
      }
    });
  }
  
  if (closeChat) {
    closeChat.addEventListener('click', function() {
      document.getElementById('doctor-chat-window').style.display = 'none';
    });
  }
}

function displayDoctors(doctors) {
  const doctorsContainer = document.getElementById('doctors-list');
  if (!doctorsContainer) return;
  
  // Clear loading message
  doctorsContainer.innerHTML = '';
  
  if (doctors.length === 0) {
    doctorsContainer.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <p>No doctors match your current filters. Please try different criteria.</p>
      </div>
    `;
    return;
  }
  
  // Create doctor cards
  doctors.forEach(doctor => {
    const doctorCard = createDoctorCard(doctor);
    doctorsContainer.appendChild(doctorCard);
  });

  console.log(`Displaying ${doctors.length} doctors`);
}

function createDoctorCard(doctor) {
  const card = document.createElement('div');
  card.className = 'doctor-card';
  card.setAttribute('data-doctor-id', doctor.id);
  
  // Calculate star display
  const fullStars = Math.floor(doctor.rating);
  const hasHalfStar = doctor.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let starsHTML = '';
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>';
  }
  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>';
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>';
  }
  
  // Available types badges
  let typeBadges = '';
  doctor.consultationType.forEach(type => {
    let icon, label;
    switch(type) {
      case 'video':
        icon = 'fa-video';
        label = 'Video';
        break;
      case 'voice':
        icon = 'fa-phone-alt';
        label = 'Voice';
        break;
      case 'chat':
        icon = 'fa-comment-alt';
        label = 'Chat';
        break;
    }
    typeBadges += `<div class="consultation-type"><i class="fas ${icon}"></i> ${label}</div>`;
  });
  
  // Availability badge
  const availabilityBadge = doctor.availableToday 
    ? '<div class="availability available"><i class="fas fa-clock"></i> Available Today</div>'
    : '<div class="availability unavailable"><i class="fas fa-calendar-alt"></i> Next Available: Tomorrow</div>';
  
  card.innerHTML = `
    <div class="doctor-card-header">
      <div class="doctor-photo">
        <img src="${doctor.image}" alt="${doctor.name}">
      </div>
      <div class="doctor-details">
        <h3>${doctor.name}</h3>
        <div class="specialty">${doctor.specialization.charAt(0).toUpperCase() + doctor.specialization.slice(1)}</div>
        <div class="experience">${doctor.experience} experience</div>
        <div class="doctor-rating">
          ${starsHTML}
          <span class="rating-number">${doctor.rating}</span>
        </div>
      </div>
    </div>
    <div class="doctor-card-body">
      <div class="consultation-info">
        <div class="consultation-types">
          ${typeBadges}
        </div>
        ${availabilityBadge}
      </div>
      <div class="doctor-price">
        <span class="price">${doctor.price}</span>
        <span class="per-session">per session</span>
      </div>
      <div class="doctor-action-buttons">
        <button class="book-appointment-btn btn primary" data-doctor-id="${doctor.id}">
          Book Appointment
        </button>
        ${doctor.availableToday ? `
          <div class="instant-consultation-buttons">
            ${doctor.consultationType.includes('chat') ? 
              `<button class="start-chat-btn btn secondary" data-doctor-id="${doctor.id}">
                <i class="fas fa-comment-alt"></i> Chat Now
              </button>` : ''}
            ${doctor.consultationType.includes('video') ? 
              `<button class="start-video-btn btn secondary" data-doctor-id="${doctor.id}">
                <i class="fas fa-video"></i> Video Call
              </button>` : ''}
            ${doctor.consultationType.includes('voice') ? 
              `<button class="start-voice-btn btn secondary" data-doctor-id="${doctor.id}">
                <i class="fas fa-phone-alt"></i> Voice Call
              </button>` : ''}
          </div>
        ` : ''}
      </div>
    </div>
  `;
  
  return card;
}

function applyFilters() {
  // Show loading indicator
  const doctorsContainer = document.getElementById('doctors-list');
  if (doctorsContainer) {
    doctorsContainer.innerHTML = `
      <div class="loading-doctors">
        <i class="fas fa-spinner fa-spin"></i>
        <p>Filtering doctors...</p>
      </div>
    `;
  }

  // Get all filter values
  const specializations = getCheckedValues('specialization');
  const availableToday = document.querySelector('input[name="availability"]:checked') !== null;
  const consultationTypes = getCheckedValues('type');
  const ratingValue = document.querySelector('input[name="rating"]:checked')?.value || '0';
  const priceRange = document.querySelector('select[name="price"]').value;
  
  console.log('Applying filters:', {
    specializations,
    availableToday,
    consultationTypes,
    ratingValue,
    priceRange
  });
  
  // Filter the doctors based on criteria (with small delay to show loading)
  setTimeout(() => {
    let filteredDoctors = doctorsData.filter(doctor => {
      // Check specialization
      if (specializations.length > 0 && !specializations.includes(doctor.specialization)) {
        return false;
      }
      
      // Check availability
      if (availableToday && !doctor.availableToday) {
        return false;
      }
      
      // Check consultation type
      if (consultationTypes.length > 0 && !consultationTypes.some(type => doctor.consultationType.includes(type))) {
        return false;
      }
      
      // Check rating
      if (parseFloat(ratingValue) > 0 && doctor.rating < parseFloat(ratingValue)) {
        return false;
      }
      
      // Check price range
      if (priceRange) {
        const price = parseFloat(doctor.price.replace('$', ''));
        switch(priceRange) {
          case 'under-90':
            if (price >= 90) return false;
            break;
          case '90-100':
            if (price < 90 || price > 100) return false;
            break;
          case 'over-100':
            if (price <= 100) return false;
            break;
        }
      }
      
      return true;
    });
    
    // Show active filters
    displayActiveFilters(specializations, availableToday, consultationTypes, ratingValue, priceRange);
    
    // Display the filtered doctors
    displayDoctors(filteredDoctors);
  }, 500); // Short delay to show loading state
}

function getCheckedValues(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  return Array.from(checkboxes).map(cb => cb.value);
}

function displayActiveFilters(specializations, availableToday, types, rating, price) {
  const activeFiltersContainer = document.querySelector('.active-filters');
  if (!activeFiltersContainer) return;
  
  let filtersHTML = '<h4>Active Filters:</h4><div class="filter-tags">';
  let hasFilters = false;
  
  // Add specialization filters
  specializations.forEach(spec => {
    filtersHTML += `<div class="filter-tag">${spec.charAt(0).toUpperCase() + spec.slice(1)} <i class="fas fa-times" data-filter-type="specialization" data-filter-value="${spec}"></i></div>`;
    hasFilters = true;
  });
  
  // Add availability filter
  if (availableToday) {
    filtersHTML += `<div class="filter-tag">Available Today <i class="fas fa-times" data-filter-type="availability"></i></div>`;
    hasFilters = true;
  }
  
  // Add consultation type filters
  types.forEach(type => {
    filtersHTML += `<div class="filter-tag">${type.charAt(0).toUpperCase() + type.slice(1)} <i class="fas fa-times" data-filter-type="type" data-filter-value="${type}"></i></div>`;
    hasFilters = true;
  });
  
  // Add rating filter
  if (parseFloat(rating) > 0) {
    filtersHTML += `<div class="filter-tag">${rating}+ Stars <i class="fas fa-times" data-filter-type="rating"></i></div>`;
    hasFilters = true;
  }
  
  // Add price filter
  if (price) {
    let priceText;
    switch(price) {
      case 'under-90':
        priceText = 'Under $90';
        break;
      case '90-100':
        priceText = '$90 - $100';
        break;
      case 'over-100':
        priceText = 'Over $100';
        break;
    }
    filtersHTML += `<div class="filter-tag">${priceText} <i class="fas fa-times" data-filter-type="price"></i></div>`;
    hasFilters = true;
  }
  
  filtersHTML += '</div>';
  
  if (hasFilters) {
    activeFiltersContainer.innerHTML = filtersHTML;
    activeFiltersContainer.style.display = 'block';
  } else {
    activeFiltersContainer.style.display = 'none';
  }
}

function removeFilter(filterType, filterValue) {
  console.log('Removing filter:', filterType, filterValue);
  
  switch(filterType) {
    case 'specialization':
      const specCheckbox = document.querySelector(`input[name="specialization"][value="${filterValue}"]`);
      if (specCheckbox) specCheckbox.checked = false;
      break;
    case 'availability':
      const availCheckbox = document.querySelector('input[name="availability"]');
      if (availCheckbox) availCheckbox.checked = false;
      break;
    case 'type':
      const typeCheckbox = document.querySelector(`input[name="type"][value="${filterValue}"]`);
      if (typeCheckbox) typeCheckbox.checked = false;
      break;
    case 'rating':
      const ratingRadios = document.querySelectorAll('input[name="rating"]');
      ratingRadios.forEach(radio => {
        if (radio.value === '0') radio.checked = true;
        else radio.checked = false;
      });
      break;
    case 'price':
      const priceSelect = document.querySelector('select[name="price"]');
      if (priceSelect) priceSelect.value = '';
      break;
  }
  
  // Re-apply the filters
  applyFilters();
}

function resetFilters() {
  // Clear all checkboxes and selects
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    if (radio.value === '0') radio.checked = true;
    else radio.checked = false;
  });
  document.querySelector('select[name="price"]').value = '';
  
  // Hide the active filters
  const activeFiltersContainer = document.querySelector('.active-filters');
  if (activeFiltersContainer) {
    activeFiltersContainer.innerHTML = '';
    activeFiltersContainer.style.display = 'none';
  }
  
  // Show all doctors
  displayDoctors(doctorsData);
}

function showBookingForm(doctorId) {
  const doctor = doctorsData.find(d => d.id == doctorId);
  if (!doctor) return;
  
  const bookingForm = document.getElementById('booking-form');
  const doctorInfoContainer = bookingForm.querySelector('.booking-doctor-info');
  const doctorIdInput = document.getElementById('doctor-id');
  const consultationTypeSelect = document.getElementById('consultation-type');
  
  // Set the doctor ID
  doctorIdInput.value = doctor.id;
  
  // Update doctor info
  doctorInfoContainer.innerHTML = `
    <div class="booking-doctor-photo">
      <img src="${doctor.image}" alt="${doctor.name}">
    </div>
    <div class="booking-doctor-details">
      <h4>${doctor.name}</h4>
      <div class="specialty">${doctor.specialization.charAt(0).toUpperCase() + doctor.specialization.slice(1)}</div>
      <div class="price">${doctor.price} per session</div>
    </div>
  `;
  
  // Update consultation type options
  consultationTypeSelect.innerHTML = '';
  doctor.consultationType.forEach(type => {
    const option = document.createElement('option');
    option.value = type;
    option.textContent = type.charAt(0).toUpperCase() + type.slice(1) + ' Call';
    consultationTypeSelect.appendChild(option);
  });
  
  // Set default date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateInput = document.getElementById('appointment-date');
  dateInput.value = tomorrow.toISOString().split('T')[0];
  dateInput.min = tomorrow.toISOString().split('T')[0];
  
  // Update available time slots
  updateTimeSlots(doctor.availableTimeSlots);
  
  // Show the booking form
  bookingForm.style.display = 'block';
  
  // Scroll to the booking form
  bookingForm.scrollIntoView({ behavior: 'smooth' });
}

function updateTimeSlots(availableSlots) {
  const timeSlotsContainer = document.querySelector('.time-slots-container');
  if (!timeSlotsContainer) return;
  
  let timeSlotsHTML = '<h5>Available Time Slots</h5><div class="time-slots">';
  
  availableSlots.forEach(slot => {
    timeSlotsHTML += `<div class="time-slot" data-time="${slot}">${slot}</div>`;
  });
  
  timeSlotsHTML += '</div>';
  timeSlotsContainer.innerHTML = timeSlotsHTML;
}

function selectTimeSlot(slotElement) {
  // Remove selected class from all time slots
  document.querySelectorAll('.time-slot').forEach(slot => {
    slot.classList.remove('selected');
  });
  
  // Add selected class to clicked time slot
  slotElement.classList.add('selected');
  
  // Update hidden input with selected time
  const selectedTimeInput = document.getElementById('selected-time');
  selectedTimeInput.value = slotElement.getAttribute('data-time');
}

function hideBookingForm() {
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.style.display = 'none';
  }
}

function bookAppointment() {
  const doctorId = document.getElementById('doctor-id').value;
  const selectedTime = document.getElementById('selected-time').value;
  const appointmentDate = document.getElementById('appointment-date').value;
  const consultationType = document.getElementById('consultation-type').value;
  const symptoms = document.getElementById('symptoms').value;
  const patientName = document.getElementById('patient-name').value;
  const patientEmail = document.getElementById('patient-email').value;
  
  // Validate inputs
  if (!selectedTime) {
    alert('Please select a time slot');
    return;
  }
  
  // In a real app, this would send data to a server
  console.log('Booking appointment:', {
    doctorId,
    appointmentDate,
    selectedTime,
    consultationType,
    symptoms,
    patientName,
    patientEmail
  });
  
  // Show success message
  const bookingForm = document.getElementById('booking-form');
  bookingForm.innerHTML = `
    <div class="booking-success">
      <i class="fas fa-check-circle"></i>
      <h3>Appointment Booked Successfully!</h3>
      <p>Your appointment with ${doctorsData.find(d => d.id == doctorId).name} has been confirmed.</p>
      <p><strong>Date:</strong> ${formatDate(appointmentDate)}</p>
      <p><strong>Time:</strong> ${selectedTime}</p>
      <p><strong>Type:</strong> ${consultationType.charAt(0).toUpperCase() + consultationType.slice(1)} Call</p>
      <p>You will receive a confirmation email shortly at ${patientEmail}.</p>
      <button class="btn primary" id="back-to-doctors">Back to Doctors</button>
    </div>
  `;
  
  // Add event listener to back button
  document.getElementById('back-to-doctors').addEventListener('click', function() {
    hideBookingForm();
    
    // Reset the booking form for future use
    setTimeout(() => {
      bookingForm.innerHTML = `
        <h3>Book Your Appointment</h3>
        <div class="booking-doctor-info"></div>
        <form id="appointment-form">
          <input type="hidden" id="doctor-id" name="doctor-id">
          <input type="hidden" id="selected-time" name="selected-time">
          <div class="form-section">
            <h4>1. Select Date & Time</h4>
            <div class="form-row">
              <div class="form-group">
                <label for="appointment-date">Date</label>
                <input type="date" id="appointment-date" name="appointment-date" required>
              </div>
              <div class="form-group">
                <label for="consultation-type">Consultation Type</label>
                <select id="consultation-type" name="consultation-type" required></select>
              </div>
            </div>
            <div class="time-slots-container"></div>
          </div>
          <div class="form-section">
            <h4>2. Describe Your Symptoms</h4>
            <textarea id="symptoms" name="symptoms" placeholder="Please describe your symptoms or reason for consultation..." rows="4" required></textarea>
          </div>
          <div class="form-section">
            <h4>3. Your Information</h4>
            <div class="form-row">
              <div class="form-group">
                <label for="patient-name">Full Name</label>
                <input type="text" id="patient-name" name="patient-name" required>
              </div>
              <div class="form-group">
                <label for="patient-email">Email</label>
                <input type="email" id="patient-email" name="patient-email" required>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="patient-phone">Phone Number</label>
                <input type="tel" id="patient-phone" name="patient-phone">
              </div>
              <div class="form-group">
                <label for="patient-dob">Date of Birth</label>
                <input type="date" id="patient-dob" name="patient-dob">
              </div>
            </div>
          </div>
          <div class="form-actions">
            <button type="button" id="cancel-booking" class="btn secondary">Cancel</button>
            <button type="submit" class="btn primary">Confirm Booking</button>
          </div>
        </form>
      `;
      
      // Re-attach event listeners
      setupEventListeners();
    }, 500);
  });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Chat functionality
function sendChatMessage() {
  const chatInput = document.getElementById('doctor-chat-input');
  const message = chatInput.value.trim();
  if (!message) return;
  
  const chatMessages = document.getElementById('doctor-chat-messages');
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  // Add user message
  chatMessages.innerHTML += `
    <div class="chat-message user">
      <div class="message-content">${message}</div>
      <div class="message-time">${currentTime} <i class="fas fa-check-double" style="color: #34b7f1; margin-left: 3px; font-size: 0.8em;"></i></div>
    </div>
  `;
  
  // Clear input
  chatInput.value = '';
  
  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  // Show typing indicator
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'typing-indicator';
  typingIndicator.innerHTML = `
    <div class="chat-message doctor">
      <div class="message-content">
        <div class="typing-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  `;
  chatMessages.appendChild(typingIndicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  // Simulate doctor response (after a short delay)
  setTimeout(() => {
    // Remove typing indicator
    chatMessages.removeChild(typingIndicator);
    
    const responseTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Get appropriate response based on message content
    let responseText = "Thank you for your message. I understand your concerns. How long have you been experiencing these symptoms?";
    
    if (message.toLowerCase().includes("headache") || message.toLowerCase().includes("head") || message.toLowerCase().includes("pain")) {
      responseText = "I'm sorry to hear about your headache. Could you tell me more about the pain? Is it sharp, dull, or throbbing? And which part of your head is affected?";
    } else if (message.toLowerCase().includes("fever") || message.toLowerCase().includes("temperature")) {
      responseText = "Fever can be a sign of infection. Have you measured your temperature? Any other symptoms accompanying the fever like chills or body aches?";
    } else if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi") || message.toLowerCase().includes("hey")) {
      responseText = "Hello! How can I help you today? Please describe your symptoms or medical concerns.";
    } else if (message.toLowerCase().includes("appointment") || message.toLowerCase().includes("book")) {
      responseText = "I'd be happy to schedule an appointment for you. Would you prefer a video consultation or an in-person visit? I have availability this week on Tuesday and Thursday.";
    }
    
    chatMessages.innerHTML += `
      <div class="chat-message doctor">
        <div class="message-content">${responseText}</div>
        <div class="message-time">${responseTime}</div>
      </div>
    `;
    
    // Add quick reply options based on context
    const quickReplyOptions = document.createElement('div');
    quickReplyOptions.className = 'quick-reply-options';
    quickReplyOptions.innerHTML = `
      <div class="quick-reply-title">Quick replies</div>
      <div class="quick-reply-buttons">
        <button class="quick-reply-btn">Yes, for about 2 days</button>
        <button class="quick-reply-btn">It's getting worse</button>
        <button class="quick-reply-btn">I've tried medication</button>
        <button class="quick-reply-btn">I need an appointment</button>
      </div>
    `;
    chatMessages.appendChild(quickReplyOptions);
    
    // Add event listeners to quick reply buttons
    const quickReplyBtns = quickReplyOptions.querySelectorAll('.quick-reply-btn');
    quickReplyBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const replyText = this.textContent;
        chatInput.value = replyText;
        // Remove quick reply options
        chatMessages.removeChild(quickReplyOptions);
        // Send the quick reply
        sendChatMessage();
      });
    });
    
    // Scroll to bottom again
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1500 + Math.random() * 1000);
}

// Start chat with a doctor
function startChat(doctorId) {
  const doctor = doctorsData.find(d => d.id == doctorId);
  if (!doctor) return;
  
  // Update chat window header with doctor info
  const chatWindow = document.getElementById('doctor-chat-window');
  const doctorName = chatWindow.querySelector('.doctor-chat-name');
  const doctorAvatar = chatWindow.querySelector('.doctor-chat-avatar');
  
  doctorName.textContent = doctor.name;
  doctorAvatar.textContent = doctor.name.charAt(0);
  
  // Clear previous messages except the welcome message
  const chatMessages = document.getElementById('doctor-chat-messages');
  chatMessages.innerHTML = `
    <div class="chat-date-divider">Today</div>
    <div class="chat-message doctor">
      <div class="message-content">Hi there! I'm ${doctor.name}. How can I help you today?</div>
      <div class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
    </div>
  `;
  
  // Set active doctor ID for reference
  chatWindow.setAttribute('data-doctor-id', doctorId);
  
  // Show the chat window
  chatWindow.style.display = 'flex';
  
  // Focus on the input field
  const chatInput = document.getElementById('doctor-chat-input');
  if (chatInput) {
    setTimeout(() => chatInput.focus(), 300);
  }
}

// Start video call with a doctor
function startVideoCall(doctorId) {
  const doctor = doctorsData.find(d => d.id == doctorId);
  if (!doctor) return;
  
  // Create and show the video call modal
  const videoCallModal = document.createElement('div');
  videoCallModal.className = 'video-call-modal';
  videoCallModal.innerHTML = `
    <div class="video-call-container">
      <div class="video-call-header">
        <h3>Video Call with ${doctor.name}</h3>
        <button class="close-video-call"><i class="fas fa-times"></i></button>
      </div>
      <div class="video-main">
        <div class="video-large">
          <div class="video-placeholder">
            <i class="fas fa-user-md"></i>
            <p>Doctor's video will appear here</p>
          </div>
        </div>
        <div class="video-small">
          <div class="video-placeholder self-video">
            <i class="fas fa-user"></i>
            <p>Your video</p>
          </div>
        </div>
      </div>
      <div class="video-controls">
        <button class="control-btn mute"><i class="fas fa-microphone"></i></button>
        <button class="control-btn video-toggle"><i class="fas fa-video"></i></button>
        <button class="control-btn end-call"><i class="fas fa-phone-slash"></i></button>
      </div>
    </div>
  `;
  
  document.body.appendChild(videoCallModal);
  
  // Add event listener to close button
  const closeButton = videoCallModal.querySelector('.close-video-call');
  closeButton.addEventListener('click', function() {
    document.body.removeChild(videoCallModal);
  });
  
  // Add event listener to end call button
  const endCallButton = videoCallModal.querySelector('.end-call');
  endCallButton.addEventListener('click', function() {
    document.body.removeChild(videoCallModal);
  });
  
  // Add toggle functionality to mute and video buttons
  const muteButton = videoCallModal.querySelector('.mute');
  muteButton.addEventListener('click', function() {
    this.classList.toggle('active');
    const icon = this.querySelector('i');
    if (this.classList.contains('active')) {
      icon.className = 'fas fa-microphone-slash';
    } else {
      icon.className = 'fas fa-microphone';
    }
  });
  
  const videoToggleButton = videoCallModal.querySelector('.video-toggle');
  videoToggleButton.addEventListener('click', function() {
    this.classList.toggle('active');
    const icon = this.querySelector('i');
    if (this.classList.contains('active')) {
      icon.className = 'fas fa-video-slash';
    } else {
      icon.className = 'fas fa-video';
    }
  });
}

// Start voice call with a doctor
function startVoiceCall(doctorId) {
  const doctor = doctorsData.find(d => d.id == doctorId);
  if (!doctor) return;
  
  // Create and show the voice call modal
  const voiceCallModal = document.createElement('div');
  voiceCallModal.className = 'voice-call-modal';
  voiceCallModal.innerHTML = `
    <div class="voice-call-container">
      <div class="voice-call-header">
        <h3>Voice Call with ${doctor.name}</h3>
        <button class="close-voice-call"><i class="fas fa-times"></i></button>
      </div>
      <div class="voice-call-content">
        <div class="doctor-avatar large">
          ${doctor.name.charAt(0)}
        </div>
        <p class="doctor-name">${doctor.name}</p>
        <p class="call-status">Connected</p>
        <p class="call-duration">00:00</p>
      </div>
      <div class="voice-call-controls">
        <button class="control-btn mute"><i class="fas fa-microphone"></i></button>
        <button class="control-btn speaker"><i class="fas fa-volume-up"></i></button>
        <button class="control-btn end-call"><i class="fas fa-phone-slash"></i></button>
      </div>
    </div>
  `;
  
  document.body.appendChild(voiceCallModal);
  
  // Add event listener to close button
  const closeButton = voiceCallModal.querySelector('.close-voice-call');
  closeButton.addEventListener('click', function() {
    document.body.removeChild(voiceCallModal);
    clearInterval(callTimer);
  });
  
  // Add event listener to end call button
  const endCallButton = voiceCallModal.querySelector('.end-call');
  endCallButton.addEventListener('click', function() {
    document.body.removeChild(voiceCallModal);
    clearInterval(callTimer);
  });
  
  // Start call duration timer
  let seconds = 0;
  const durationElement = voiceCallModal.querySelector('.call-duration');
  const callTimer = setInterval(() => {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    durationElement.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }, 1000);
  
  // Add toggle functionality to mute and speaker buttons
  const muteButton = voiceCallModal.querySelector('.mute');
  muteButton.addEventListener('click', function() {
    this.classList.toggle('active');
    const icon = this.querySelector('i');
    if (this.classList.contains('active')) {
      icon.className = 'fas fa-microphone-slash';
    } else {
      icon.className = 'fas fa-microphone';
    }
  });
  
  const speakerButton = voiceCallModal.querySelector('.speaker');
  speakerButton.addEventListener('click', function() {
    this.classList.toggle('active');
    const icon = this.querySelector('i');
    if (this.classList.contains('active')) {
      icon.className = 'fas fa-volume-mute';
    } else {
      icon.className = 'fas fa-volume-up';
    }
  });
}

// For messaging doctors in the sidebar
function initializeDoctorMessaging() {
  const doctorsList = document.getElementById('message-doctors-list');
  if (!doctorsList) return;
  
  // Create the doctor selection area with radio buttons for better UX
  let doctorsHTML = '<div class="doctors-options"><h4>Select a doctor to message:</h4>';
  
  doctorsData.forEach(doctor => {
    doctorsHTML += `
      <div class="doctor-option">
        <input type="radio" id="doctor-${doctor.id}" name="doctor-select" value="${doctor.id}" required>
        <label for="doctor-${doctor.id}">
          <div class="doctor-info">
            <div class="doctor-avatar">${doctor.name.charAt(0)}</div>
            <div class="doctor-details">
              <strong>${doctor.name}</strong>
              <div>${doctor.specialization.charAt(0).toUpperCase() + doctor.specialization.slice(1)}</div>
              <div class="doctor-status ${doctor.available ? 'online' : ''}">
                ${doctor.available ? 'Online' : 'Offline'}
              </div>
            </div>
          </div>
        </label>
      </div>
    `;
  });
  
  doctorsHTML += '</div>';
  doctorsList.innerHTML = doctorsHTML;
  
  // Add click events to doctor options for better selection experience
  const doctorOptions = document.querySelectorAll('.doctor-option');
  doctorOptions.forEach(option => {
    const radioInput = option.querySelector('input[type="radio"]');
    const label = option.querySelector('label');
    
    option.addEventListener('click', function() {
      radioInput.checked = true;
      
      // Visual feedback for selected doctor
      doctorOptions.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
    });
  });
  
  // Message form submission
  const messageForm = document.getElementById('doctor-message-form');
  if (messageForm) {
    messageForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get selected doctor
      const selectedDoctor = document.querySelector('input[name="doctor-select"]:checked');
      if (!selectedDoctor) {
        alert('Please select a doctor first');
        return;
      }
      
      sendDoctorMessage();
    });
  }
}

function sendDoctorMessage() {
  const selectedDoctor = document.querySelector('input[name="doctor-select"]:checked');
  const messageText = document.getElementById('doctor-message');
  const statusElement = document.getElementById('message-status');
  
  if (!selectedDoctor) {
    statusElement.textContent = 'Please select a doctor';
    statusElement.className = 'error-message';
    statusElement.style.display = 'block';
    return;
  }
  
  if (!messageText.value.trim()) {
    statusElement.textContent = 'Please enter a message';
    statusElement.className = 'error-message';
    statusElement.style.display = 'block';
    return;
  }
  
  const doctorId = selectedDoctor.value;
  const doctor = doctorsData.find(d => d.id == doctorId);
  
  // In a real app, this would send data to a server
  console.log('Sending message:', {
    doctorId: doctorId,
    doctorName: doctor.name,
    message: messageText.value.trim()
  });
  
  // Option to start a chat directly after sending a message
  if (doctor.available) {
    statusElement.innerHTML = `Message sent successfully! <button class="btn small primary start-chat-now" data-doctor-id="${doctorId}">Start Chat Now</button>`;
  } else {
    statusElement.textContent = 'Message sent successfully! The doctor will respond to you soon.';
  }
  
  statusElement.className = 'success-message';
  statusElement.style.display = 'block';
  
  // Add event listener for start chat button
  const startChatBtn = statusElement.querySelector('.start-chat-now');
  if (startChatBtn) {
    startChatBtn.addEventListener('click', function() {
      const doctorId = this.getAttribute('data-doctor-id');
      startChat(doctorId);
    });
  }
  
  // Clear form
  messageText.value = '';
  
  // Hide message after 8 seconds
  setTimeout(() => {
    statusElement.style.display = 'none';
  }, 8000);
}

// Initialize chat functionality
function initializeChat() {
  const chatInput = document.getElementById('doctor-chat-input');
  const sendBtn = document.getElementById('send-message-btn');
  const chatMessages = document.getElementById('doctor-chat-messages');
  const closeChat = document.getElementById('close-chat');
  const chatOptions = document.querySelector('.chat-options');
  
  if (sendBtn && chatInput && chatMessages) {
    // Send message button click
    sendBtn.addEventListener('click', function() {
      sendChatMessage();
    });
    
    // Enter key press in chat input
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendChatMessage();
      }
    });
  }
  
  // Close chat button
  if (closeChat) {
    closeChat.addEventListener('click', function() {
      const chatWindow = document.getElementById('doctor-chat-window');
      if (chatWindow) {
        chatWindow.style.display = 'none';
      }
    });
  }
  
  // Chat options (voice call, video call)
  if (chatOptions) {
    const voiceCallBtn = document.createElement('i');
    voiceCallBtn.className = 'fas fa-phone';
    voiceCallBtn.title = 'Start Voice Call';
    
    const videoCallBtn = document.createElement('i');
    videoCallBtn.className = 'fas fa-video';
    videoCallBtn.title = 'Start Video Call';
    
    chatOptions.appendChild(voiceCallBtn);
    chatOptions.appendChild(videoCallBtn);
    
    // Voice call button click
    voiceCallBtn.addEventListener('click', function() {
      const chatWindow = document.getElementById('doctor-chat-window');
      const doctorId = chatWindow.getAttribute('data-doctor-id');
      if (doctorId) {
        startVoiceCall(doctorId);
      }
    });
    
    // Video call button click
    videoCallBtn.addEventListener('click', function() {
      const chatWindow = document.getElementById('doctor-chat-window');
      const doctorId = chatWindow.getAttribute('data-doctor-id');
      if (doctorId) {
        startVideoCall(doctorId);
      }
    });
  }
}
