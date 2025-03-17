// MediConnect Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all interactive elements
  initializeTabSystem();
  setupLoginModal();
  setupSymptomChecker();
  setupQuizSystem();
  setupMobileNavigation();

  // Initialize user authentication status in UI
  updateAuthUI();

  // Event delegation for dynamically created elements
  document.addEventListener('click', function(e) {
    // Handle logout
    if (e.target.id === 'logout-btn' || e.target.closest('#logout-btn')) {
      logoutUser();
    }

    // Handle symptom checker button on home page
    if (e.target.id === 'check-symptoms-btn' || e.target.closest('#check-symptoms-btn')) {
      openSymptomCheckerModal();
    }

    // Handle suggestion chips in AI responses
    if (e.target.classList.contains('suggestion-chip')) {
      const query = e.target.getAttribute('data-query');
      if (query) {
        const nearestInput = e.target.closest('.symptom-checker').querySelector('textarea');
        if (nearestInput) {
          nearestInput.value = query;
          // Find the nearest form and submit it
          const form = nearestInput.closest('form');
          if (form) {
            const submitEvent = new Event('submit', { cancelable: true });
            form.dispatchEvent(submitEvent);
          }
        }
      }
    }
  });
});

// Update UI based on authentication status
function updateAuthUI() {
  const userJson = localStorage.getItem('user');

  if (userJson) {
    try {
      const user = JSON.parse(userJson);

      // Add user info to header
      const header = document.querySelector('header .container');
      if (header && !document.querySelector('.user-menu')) {
        // Create user menu if it doesn't exist
        const userMenu = document.createElement('div');
        userMenu.className = 'user-menu';

        // Add role badge
        const roleBadge = user.role.charAt(0).toUpperCase() + user.role.slice(1);

        userMenu.innerHTML = `
          <div class="user-profile">
            <div class="avatar">${user.name.charAt(0).toUpperCase()}</div>
            <div class="user-info">
              <span class="user-name">${user.name}</span>
              <span class="user-role">${roleBadge}</span>
            </div>
            <i class="fas fa-chevron-down dropdown-icon"></i>
          </div>
          <div class="user-dropdown">
            <ul>
              <li><a href="${user.role}-dashboard.html"><i class="fas fa-tachometer-alt"></i> Dashboard</a></li>
              <li><a href="${user.role}-dashboard.html#profile"><i class="fas fa-user-circle"></i> Profile</a></li>
              <li><a href="${user.role}-dashboard.html#appointments"><i class="fas fa-calendar-check"></i> Appointments</a></li>
              <li><a href="#" id="logout-btn"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
            </ul>
          </div>
        `;

        // Hide login button when user is logged in
        const loginBtns = document.querySelectorAll('.login-btn');
        loginBtns.forEach(btn => {
          btn.style.display = 'none';
        });

        // Add user menu to header
        header.appendChild(userMenu);

        // Toggle dropdown
        const profileElement = userMenu.querySelector('.user-profile');
        const dropdownElement = userMenu.querySelector('.user-dropdown');

        profileElement.addEventListener('click', function(e) {
          e.preventDefault();
          dropdownElement.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
          if (!userMenu.contains(e.target)) {
            dropdownElement.classList.remove('active');
          }
        });
      }
    } catch (e) {
      console.error('Error parsing user data:', e);
    }
  } else {
    // Show login button when user is not logged in
    const loginBtns = document.querySelectorAll('.login-btn');
    loginBtns.forEach(btn => {
      btn.style.display = 'inline-block';
    });

    // Remove user menu if it exists
    const userMenu = document.querySelector('.user-menu');
    if (userMenu) {
      userMenu.remove();
    }
  }
}

// Logout user function
function logoutUser() {
  localStorage.removeItem('user');
  showToast('You have been logged out successfully.', 'success');

  // Redirect to home page if on dashboard
  const currentPath = window.location.pathname;
  if (currentPath.includes('dashboard')) {
    window.location.href = 'index.html';
  } else {
    // Just refresh the current page to update UI
    window.location.reload();
  }
}

// Show toast notification
function showToast(message, type = 'info') {
  // Remove any existing toasts
  const existingToasts = document.querySelectorAll('.toast');
  existingToasts.forEach(toast => {
    toast.remove();
  });

  // Create new toast
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerText = message;

  // Add to document
  document.body.appendChild(toast);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.add('fadeout');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Show login modal function
function showLoginModal() {
  const modal = document.getElementById('login-modal');
  if (modal) {
    modal.style.display = 'block';
  }
}

// Tab System for the website
function initializeTabSystem() {
  // Handle main navigation tabs
  const navLinks = document.querySelectorAll('nav a[data-tab]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetTab = this.getAttribute('data-tab');
      activateTab(targetTab);
    });
  });

  // Handle in-page tabs (symptom checker, etc.)
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const parent = this.closest('.symptom-checker-tabs, .tabs');
      parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const tabName = this.getAttribute('data-tab');
      const tabContainer = this.closest('.symptom-checker, .dashboard-content, .modal-content').querySelector('.tab-content, .dashboard-tab');

      // If we're in a container with multiple tab contents
      if (tabContainer.classList.contains('tab-content')) {
        const tabContents = tabContainer.parentElement.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
          content.classList.remove('active');
          if (content.id === tabName) {
            content.classList.add('active');
          }
        });
      } else {
        // If we're in a dashboard where each tab is a direct child
        const dashboardTabs = this.closest('.dashboard-content').querySelectorAll('.dashboard-tab');
        dashboardTabs.forEach(tab => {
          tab.style.display = 'none';
          if (tab.id === tabName) {
            tab.style.display = 'block';
          }
        });
      }
    });
  });

  // Set active tab based on URL hash or default to home
  const hash = window.location.hash.substring(1);
  if (hash && document.getElementById(hash)) {
    activateTab(hash);
  }
}

function activateTab(tabId) {
  // Update navigation active state
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-tab') === tabId) {
      link.classList.add('active');
    }
  });

  // Show corresponding tab content
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    targetTab.classList.add('active');
    window.location.hash = tabId;
  }
}

// Login Modal Functionality
function setupLoginModal() {
  const loginBtns = document.querySelectorAll('.login-btn');
  const modal = document.getElementById('login-modal');
  const closeBtn = modal?.querySelector('.close');

  // Check if user is already logged in
  const userJson = localStorage.getItem('user');
  if (userJson) {
    try {
      const user = JSON.parse(userJson);
      // User is logged in, update UI
      updateUIForLoggedInUser(user);
    } catch (e) {
      console.error('Error parsing user data:', e);
    }
  } else {
    // User is not logged in, set up login button
    loginBtns.forEach(loginBtn => {
      if (loginBtn && modal) {
        loginBtn.addEventListener('click', function(e) {
          e.preventDefault();
          modal.style.display = 'block';
        });
      }
    });
  }

  if (modal) {
    closeBtn?.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Handle role selection tabs in login modal
    const tabButtons = modal.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        tabButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Store selected role for form submission
        const roleInput = document.createElement('input');
        roleInput.type = 'hidden';
        roleInput.name = 'role';
        roleInput.value = this.getAttribute('data-tab');

        const form = modal.querySelector('form');
        const existingRole = form.querySelector('input[name="role"]');
        if (existingRole) {
          form.removeChild(existingRole);
        }
        form.appendChild(roleInput);
      });
    });

    // Handle login and signup forms
    const loginForm = modal.querySelector('#login-form');
    const signupForm = modal.querySelector('#signup-form');
    const switchToSignup = modal.querySelector('.switch-to-signup');
    const switchToLogin = modal.querySelector('.switch-to-login');

    if (switchToSignup) {
      switchToSignup.addEventListener('click', function(e) {
        e.preventDefault();
        if (loginForm) loginForm.style.display = 'none';
        if (signupForm) signupForm.style.display = 'block';
      });
    }

    if (switchToLogin) {
      switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        if (signupForm) signupForm.style.display = 'none';
        if (loginForm) loginForm.style.display = 'block';
      });
    }

    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = this.querySelector('#email').value;
        const password = this.querySelector('#password').value;
        const role = modal.querySelector('.tab-btn.active').getAttribute('data-tab');

        console.log(`Login attempt - Email: ${email}, Role: ${role}`);

        // In a real app, this would validate credentials against the database
        // For demo, we'll simulate a successful login

        const existingUsers = JSON.parse(localStorage.getItem('usersList') || '[]');
        const foundUser = existingUsers.find(u => u.email === email);

        if (foundUser && foundUser.password === password && foundUser.role === role) {
          // Valid login
          const user = {
            email: foundUser.email,
            name: foundUser.name,
            role: foundUser.role,
            id: foundUser.id,
            createdAt: foundUser.createdAt
          };

          // Store user info in localStorage (in a real app, this would be a token)
          localStorage.setItem('user', JSON.stringify(user));

          // Close modal
          modal.style.display = 'none';

          // Show toast notification
          showToast(`Welcome back, ${user.name}!`, 'success');

          // Redirect based on role
          switch(role) {
            case 'doctor':
              window.location.href = 'doctor-dashboard.html';
              break;
            case 'patient':
              window.location.href = 'patient-dashboard.html';
              break;
            case 'student':
              window.location.href = 'student-dashboard.html';
              break;
            default:
              window.location.reload();
          }
        } else {
          // Invalid login
          showToast('Invalid email or password. Please try again.', 'error');
        }

        return false;
      });
    }

    if (signupForm) {
      signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = this.querySelector('#signup-name').value;
        const email = this.querySelector('#signup-email').value;
        const password = this.querySelector('#signup-password').value;
        const role = modal.querySelector('.tab-btn.active').getAttribute('data-tab');

        // Validate form
        if (!name || !email || !password) {
          showToast('Please fill in all fields', 'error');
          return false;
        }

        // In a real app, this would create a user in the database
        // For demo, we'll store in localStorage
        const existingUsers = JSON.parse(localStorage.getItem('usersList') || '[]');

        // Check if user already exists
        if (existingUsers.some(u => u.email === email)) {
          showToast('This email is already registered.', 'error');
          return false;
        }

        // Create new user
        const newUser = {
          id: Date.now(),
          name,
          email,
          password, // In a real app, this would be hashed
          role,
          createdAt: new Date().toISOString()
        };

        // Add to users list
        existingUsers.push(newUser);
        localStorage.setItem('usersList', JSON.stringify(existingUsers));

        // Set current user
        const user = {
          email,
          name,
          role,
          id: newUser.id,
          createdAt: newUser.createdAt
        };

        localStorage.setItem('user', JSON.stringify(user));

        // Close modal
        modal.style.display = 'none';

        // Show toast notification
        showToast(`Welcome to MediConnect, ${name}!`, 'success');

        // Redirect based on role
        switch(role) {
          case 'doctor':
            window.location.href = 'doctor-dashboard.html';
            break;
          case 'patient':
            window.location.href = 'patient-dashboard.html';
            break;
          case 'student':
            window.location.href = 'student-dashboard.html';
            break;
          default:
            window.location.reload();
        }

        return false;
      });
    }
  }
}

// Symptom Checker Core Functionality
function setupSymptomChecker() {
  // Set up all symptom checker forms
  const symptomForms = document.querySelectorAll('#symptom-form');
  symptomForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      analyzeSymptoms(this);
    });
  });

  // Body map functionality
  initializeBodyMap();

  // Common symptoms checklist
  const analyzeCommonSymptomsBtn = document.getElementById('analyze-common-symptoms');
  if (analyzeCommonSymptomsBtn) {
    analyzeCommonSymptomsBtn.addEventListener('click', function() {
      analyzeCommonSymptomsList();
    });
  }

  // Handle clearing symptoms and results
  const clearSymptomsBtn = document.querySelectorAll('#clear-symptoms-btn');
  clearSymptomsBtn.forEach(btn => {
    btn.addEventListener('click', function() {
      resetSymptomChecker(this.closest('.symptom-checker'));
    });
  });

  // Handle find doctor button in results
  const findDoctorBtns = document.querySelectorAll('#find-doctor-btn');
  findDoctorBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      window.location.href = 'consultation.html';
    });
  });

  // Handle save results button
  const saveResultsBtns = document.querySelectorAll('#save-results-btn');
  saveResultsBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      saveSymptomResults(this.closest('.results'));
    });
  });
}

function analyzeSymptoms(form) {
  const symptomChecker = form.closest('.symptom-checker');
  const symptomsTextarea = form.querySelector('#symptoms-textarea');
  const durationSelect = form.querySelector('#symptom-duration');
  const severitySelect = form.querySelector('#symptom-severity');
  const resultsDiv = symptomChecker.querySelector('.results');
  const conditionsList = symptomChecker.querySelector('#conditions-list');
  const recommendationsList = symptomChecker.querySelector('#recommendations-list');
  const emergencyWarning = symptomChecker.querySelector('.emergency-warning');

  if (!symptomsTextarea || !resultsDiv || !conditionsList || !recommendationsList) return;

  const symptoms = symptomsTextarea.value.toLowerCase();
  const duration = durationSelect ? durationSelect.value : 'days';
  const severity = severitySelect ? parseInt(severitySelect.value, 10) : 5;

  if (symptoms.trim() === '') {
    alert('Please describe your symptoms first.');
    return;
  }

  // Prepare results area
  conditionsList.innerHTML = '';
  recommendationsList.innerHTML = '';
  emergencyWarning.style.display = 'none';

  // Show loading state
  resultsDiv.innerHTML = `
    <div class="analysis-loading">
      <i class="fas fa-spinner fa-spin"></i>
      <p>Analyzing symptoms...</p>
    </div>
  `;
  resultsDiv.style.display = 'block';

  // Simulate loading delay for better UX
  setTimeout(() => {
    const possibleConditions = [];
    const recommendations = [];
    let isEmergency = false;

    // Core analysis logic
    analyzeSymptomText(symptoms, duration, severity, possibleConditions, recommendations, isEmergency);

    // Display the results
    showResults(symptomChecker, possibleConditions, recommendations, isEmergency);
  }, 1500);
}

function analyzeSymptomText(symptoms, duration, severity, possibleConditions, recommendations, isEmergency) {
  // Comprehensive symptom analysis with additional conditions

  // Headache analysis
  if (symptoms.includes('headache') || symptoms.includes('head pain') || symptoms.includes('migraine')) {
    possibleConditions.push('Tension headache - Common condition characterized by pain or discomfort in the head, scalp, or neck.');
    possibleConditions.push('Migraine - Recurrent headache disorder characterized by moderate to severe pain, often with associated symptoms like nausea and sensitivity to light.');

    if (symptoms.includes('fever') || symptoms.includes('stiff neck')) {
      possibleConditions.push('Meningitis - MEDICAL EMERGENCY: Inflammation of the membranes surrounding the brain and spinal cord.');
      isEmergency = true;
    }

    if (symptoms.includes('worst') || symptoms.includes('severe') || symptoms.includes('sudden')) {
      possibleConditions.push('Possible serious condition - MEDICAL ATTENTION ADVISED: Sudden severe headache may indicate a serious condition.');
      isEmergency = true;
    }

    recommendations.push('Rest in a quiet, dark room if light and sound sensitivity is present.');
    recommendations.push('Apply a cold compress to the forehead or neck.');
    recommendations.push('Consider over-the-counter pain relievers if appropriate.');
    recommendations.push('Stay hydrated and maintain regular sleep patterns.');
  }

  // Fever analysis
  if (symptoms.includes('fever') || symptoms.includes('temperature')) {
    possibleConditions.push('Viral infection - Common cause of fever, often accompanied by body aches, fatigue, and other symptoms.');
    possibleConditions.push('Bacterial infection - Can cause fever along with other symptoms specific to the infection site.');

    if (symptoms.includes('rash')) {
      possibleConditions.push('Possible infectious disease - Some infections that cause both fever and rash may need medical attention.');
    }

    if (symptoms.includes('high fever') || symptoms.includes('very high') || (severity >= 8)) {
      possibleConditions.push('High fever - MEDICAL ATTENTION ADVISED: Fever above 103°F (39.4°C) may require medical evaluation.');
      isEmergency = true;
    }

    recommendations.push('Stay hydrated with water, clear broths, or electrolyte drinks.');
    recommendations.push('Rest to help your body fight the potential infection.');
    recommendations.push('Consider fever-reducing medications if appropriate.');
    recommendations.push('Use lightweight clothing and bedding.');
  }

  // Respiratory analysis
  if (symptoms.includes('cough') || symptoms.includes('breathing') || symptoms.includes('short of breath') || symptoms.includes('shortness of breath')) {
    possibleConditions.push('Upper respiratory infection - Common viral infection affecting the nose, throat, and airways.');
    possibleConditions.push('Bronchitis - Inflammation of the lining of bronchial tubes.');

    if (symptoms.includes('chest pain') || symptoms.includes('tight chest')) {
      possibleConditions.push('Possible pneumonia - Infection that inflames air sacs in one or both lungs.');
    }

    if ((symptoms.includes('severe') && symptoms.includes('breathing')) || symptoms.includes('cannot breathe') || symptoms.includes('blue')) {
      possibleConditions.push('Respiratory distress - MEDICAL EMERGENCY: Severe difficulty breathing requires immediate medical attention.');
      isEmergency = true;
    }

    recommendations.push('Stay upright to ease breathing difficulties.');
    recommendations.push('Use a humidifier or take steamy showers to moisten airways.');
    recommendations.push('Avoid irritants like smoke or air pollution.');
    recommendations.push('Stay hydrated to help thin mucus.');
  }

  // Gastrointestinal analysis
  if (symptoms.includes('nausea') || symptoms.includes('vomit') || symptoms.includes('diarrhea') || symptoms.includes('stomach') || symptoms.includes('abdominal')) {
    possibleConditions.push('Gastroenteritis - Inflammation of the stomach and intestines, often due to viral or bacterial infection.');
    possibleConditions.push('Food poisoning - Illness caused by consuming contaminated food or beverages.');

    if (symptoms.includes('blood') && (symptoms.includes('stool') || symptoms.includes('vomit'))) {
      possibleConditions.push('Gastrointestinal bleeding - MEDICAL EMERGENCY: Blood in vomit or stool requires immediate medical attention.');
      isEmergency = true;
    }

    if (symptoms.includes('severe') && symptoms.includes('pain') && symptoms.includes('right') && symptoms.includes('lower')) {
      possibleConditions.push('Possible appendicitis - MEDICAL EMERGENCY: Inflammation of the appendix that may require surgery.');
      isEmergency = true;
    }

    recommendations.push('Stay hydrated with small sips of clear fluids.');
    recommendations.push('Try the BRAT diet (bananas, rice, applesauce, toast) for mild symptoms.');
    recommendations.push('Avoid dairy, fatty, spicy, or highly seasoned foods.');
    recommendations.push('Rest and monitor for signs of dehydration.');
  }

  // Chest pain analysis
  if (symptoms.includes('chest pain') || (symptoms.includes('chest') && symptoms.includes('pain'))) {
    possibleConditions.push('Muscle strain - Pain due to strained chest muscles.');
    possibleConditions.push('Costochondritis - Inflammation of the cartilage that connects ribs to the breastbone.');
    possibleConditions.push('Gastroesophageal reflux disease (GERD) - When stomach acid frequently flows back into the esophagus.');

    if (symptoms.includes('pressure') || symptoms.includes('squeeze') || symptoms.includes('arm') || symptoms.includes('jaw')) {
      possibleConditions.push('Possible heart attack - MEDICAL EMERGENCY: Chest pain with radiation to arm, jaw, or back, especially with shortness of breath, nausea, or sweating.');
      isEmergency = true;
    }

    if (symptoms.includes('sudden') && symptoms.includes('breath')) {
      possibleConditions.push('Possible pulmonary embolism - MEDICAL EMERGENCY: Blood clot in the lungs can cause chest pain and sudden shortness of breath.');
      isEmergency = true;
    }

    recommendations.push('Seek immediate medical attention for severe or concerning chest pain.');
    recommendations.push('Rest and avoid strenuous activity until evaluated by a healthcare provider.');
    recommendations.push('For suspected reflux, avoid lying down after eating and elevate the head of your bed.');
  }

  // Joint/muscle pain analysis
  if (symptoms.includes('joint pain') || symptoms.includes('muscle pain') || symptoms.includes('arthritis') || (symptoms.includes('joint') && symptoms.includes('pain'))) {
    possibleConditions.push('Osteoarthritis - Degeneration of joint cartilage and underlying bone.');
    possibleConditions.push('Rheumatoid arthritis - Autoimmune disorder affecting the joints.');
    possibleConditions.push('Muscle strain - Overstretching or tearing of muscle fibers.');

    recommendations.push('Rest the affected joint or muscle and apply ice to reduce swelling.');
    recommendations.push('Consider over-the-counter anti-inflammatory medication if appropriate.');
    recommendations.push('Gentle movement and stretching may help maintain mobility.');
    recommendations.push('Alternate between heat and cold therapy to relieve pain.');
  }

  // Back pain analysis
  if (symptoms.includes('back pain') || (symptoms.includes('back') && symptoms.includes('pain'))) {
    possibleConditions.push('Muscle strain - Overstretching or tearing of muscle fibers.');
    possibleConditions.push('Sciatica - Pain that radiates along the sciatic nerve.');
    possibleConditions.push('Herniated disc - Problem with one of the discs between the vertebrae.');

    recommendations.push('Use ice for the first 48-72 hours, then switch to heat.');
    recommendations.push('Maintain physical activity as tolerated, avoid bed rest for extended periods.');
    recommendations.push('Consider over-the-counter pain relievers if appropriate.');
    recommendations.push('Practice good posture and proper lifting techniques.');
  }

  // Skin conditions analysis
  if (symptoms.includes('rash') || symptoms.includes('itch') || symptoms.includes('skin')) {
    possibleConditions.push('Contact dermatitis - Skin reaction from direct contact with an allergen or irritant.');
    possibleConditions.push('Eczema - Inflammation of the skin causing itchy, red, and cracked areas.');
    possibleConditions.push('Hives - Raised, itchy welts on the skin, often due to an allergic reaction.');

    if (symptoms.includes('rash') && symptoms.includes('fever')) {
      possibleConditions.push('Possible infectious condition - Some infections cause both rash and fever.');
    }

    if (symptoms.includes('sudden') && (symptoms.includes('swell') || symptoms.includes('breathing'))) {
      possibleConditions.push('Possible severe allergic reaction - MEDICAL EMERGENCY: Sudden swelling with difficulty breathing may indicate anaphylaxis.');
      isEmergency = true;
    }

    recommendations.push('Avoid scratching to prevent infection and further irritation.');
    recommendations.push('Use mild, fragrance-free soaps and moisturizers.');
    recommendations.push('Apply cool compresses to relieve itching.');
    recommendations.push('Consider over-the-counter antihistamines or cortisone creams if appropriate.');
  }

  // Mental health analysis
  if (symptoms.includes('anxiety') || symptoms.includes('depress') || symptoms.includes('stress') || symptoms.includes('sad') || symptoms.includes('mood')) {
    possibleConditions.push('Anxiety - Persistent worry, fear, or nervousness that interferes with daily activities.');
    possibleConditions.push('Depression - Mood disorder causing persistent feelings of sadness and loss of interest.');
    possibleConditions.push('Stress-related symptoms - Physical and emotional responses to pressure and demands.');

    if (symptoms.includes('suicid') || symptoms.includes('harm') || symptoms.includes('kill')) {
      possibleConditions.push('Mental health crisis - MEDICAL EMERGENCY: Thoughts of suicide or self-harm require immediate professional help.');
      isEmergency = true;
    }

    recommendations.push('Practice relaxation techniques such as deep breathing, meditation, or yoga.');
    recommendations.push('Maintain social connections and talk to trusted friends or family about your feelings.');
    recommendations.push('Establish regular sleep patterns and exercise routines.');
    recommendations.push('Consider speaking with a mental health professional for proper evaluation and treatment.');
  }

  // Duration-based additional analysis
  if (duration === 'months' || duration === 'weeks') {
    recommendations.push('Persistent symptoms lasting weeks or months should be evaluated by a healthcare provider.');

    if (symptoms.includes('weight loss') && !symptoms.includes('diet')) {
      possibleConditions.push('Unexplained weight loss - Persistent unintentional weight loss should be evaluated by a healthcare provider.');
    }

    if (symptoms.includes('fatigue') || symptoms.includes('tired')) {
      possibleConditions.push('Chronic fatigue - Persistent fatigue may be a symptom of various underlying conditions.');
    }
  }

  // Severity-based additional analysis
  if (severity >= 7) {
    recommendations.push('Your reported symptom severity is high. Consider seeking prompt medical attention if symptoms persist or worsen.');
  }

  // Add general recommendations if list is short
  if (recommendations.length < 2) {
    recommendations.push('Monitor your symptoms and seek medical attention if they worsen or persist.');
    recommendations.push('Rest and maintain adequate hydration while recovering.');
  }

  // Always add disclaimer
  recommendations.push('This symptom checker provides general information only and is not a substitute for professional medical advice, diagnosis, or treatment.');
}

function analyzeCommonSymptomsList() {
  const symptomCheckboxes = document.querySelectorAll('.symptom-checkboxes input[type="checkbox"]:checked');
  const selectedSymptoms = Array.from(symptomCheckboxes).map(cb => cb.value);

  if (selectedSymptoms.length === 0) {
    alert('Please select at least one symptom.');
    return;
  }

  const symptomChecker = document.querySelector('.symptom-checker');
  const resultsDiv = symptomChecker.querySelector('.results');
  const conditionsList = symptomChecker.querySelector('#conditions-list');
  const recommendationsList = symptomChecker.querySelector('#recommendations-list');
  const emergencyWarning = symptomChecker.querySelector('.emergency-warning');

  // Prepare results area
  conditionsList.innerHTML = '';
  recommendationsList.innerHTML = '';
  emergencyWarning.style.display = 'none';

  // Show loading state
  resultsDiv.innerHTML = `
    <div class="analysis-loading">
      <i class="fas fa-spinner fa-spin"></i>
      <p>Analyzing symptoms...</p>
    </div>
  `;
  resultsDiv.style.display = 'block';

  // Simulate loading delay for better UX
  setTimeout(() => {
    const possibleConditions = [];
    const recommendations = [];
    let isEmergency = false;

    // Check for symptom combinations
    const hasFever = selectedSymptoms.includes('fever');
    const hasCough = selectedSymptoms.includes('cough');
    const hasSoreThroat = selectedSymptoms.includes('sore throat');
    const hasShortness = selectedSymptoms.includes('shortness of breath');
    const hasHeadache = selectedSymptoms.includes('headache');
    const hasFatigue = selectedSymptoms.includes('fatigue');
    const hasNausea = selectedSymptoms.includes('nausea');
    const hasVomiting = selectedSymptoms.includes('vomiting');
    const hasDiarrhea = selectedSymptoms.includes('diarrhea');
    const hasStomachPain = selectedSymptoms.includes('stomach pain');
    const hasChills = selectedSymptoms.includes('chills');

    // Respiratory conditions
    if ((hasCough || hasSoreThroat) && (hasFever || hasChills)) {
      possibleConditions.push('Upper respiratory infection - Common viral infection affecting the nose, throat, and airways.');

      if (hasShortness) {
        possibleConditions.push('Bronchitis/Pneumonia - Infections affecting the lungs that require medical evaluation.');
        recommendations.push('Seek medical attention for difficulty breathing, especially if severe or worsening.');
      }
    }

    // Flu vs. Cold analysis
    if ((hasFever && hasChills && hasFatigue) && (hasCough || hasSoreThroat)) {
      possibleConditions.push('Influenza (Flu) - Contagious respiratory illness caused by influenza viruses.');
      recommendations.push('Rest and stay hydrated.');
      recommendations.push('Consider over-the-counter fever reducers if appropriate.');
      recommendations.push('Monitor for worsening symptoms, especially respiratory distress.');
    } else if ((hasCough || hasSoreThroat) && !hasFever) {
      possibleConditions.push('Common cold - Mild viral infection of the nose and throat.');
      recommendations.push('Rest and stay hydrated.');
      recommendations.push('Use saline nasal sprays or rinses to relieve congestion.');
      recommendations.push('Consider over-the-counter remedies for specific symptoms.');
    }

    // Gastrointestinal analysis
    if ((hasNausea || hasVomiting || hasDiarrhea) && (hasStomachPain || hasFever)) {
      possibleConditions.push('Gastroenteritis - Inflammation of the stomach and intestines, often caused by infection.');
      recommendations.push('Stay hydrated with small, frequent sips of clear fluids.');
      recommendations.push('Try the BRAT diet (bananas, rice, applesauce, toast) once able to eat.');
      recommendations.push('Seek medical attention for severe symptoms, bloody stool, or signs of dehydration.');
    }

    // Headache analysis
    if (hasHeadache) {
      if (hasFever && hasSoreThroat) {
        possibleConditions.push('Viral syndrome - Combination of symptoms caused by a viral infection.');
      } else if (!hasFever && !hasNausea) {
        possibleConditions.push('Tension headache - Common condition often related to stress or muscle tension.');
        recommendations.push('Rest in a quiet, dark room.');
        recommendations.push('Apply hot or cold compresses to the head or neck.');
        recommendations.push('Consider over-the-counter pain relievers if appropriate.');
      }
    }

    // Check for emergency combination
    if (hasShortness && (hasFever || hasChills) && hasCough) {
      possibleConditions.push('Respiratory infection with breathing difficulty - MEDICAL ATTENTION ADVISED.');
      isEmergency = true;
    }

    if (selectedSymptoms.includes('chest pain')) {
      possibleConditions.push('Chest pain - MEDICAL ATTENTION ADVISED: Chest pain should be evaluated by a healthcare provider.');
      isEmergency = true;
    }

    // Default recommendations if list is empty
    if (recommendations.length === 0) {
      recommendations.push('Monitor your symptoms and seek medical attention if they worsen.');
      recommendations.push('Rest and stay hydrated.');
      recommendations.push('Consider over-the-counter medications appropriate for your specific symptoms.');
    }

    // Always add disclaimer
    recommendations.push('This symptom checker provides general information only and is not a substitute for professional medical advice, diagnosis, or treatment.');

    // Display the results
    showResults(symptomChecker, possibleConditions, recommendations, isEmergency);
  }, 1500);
}

function initializeBodyMap() {
  const bodyParts = document.querySelectorAll('.body-part');
  const selectedPartsList = document.getElementById('selected-parts-list');
  const analyzeBodyPartsBtn = document.getElementById('analyze-body-parts');

  if (!bodyParts || !selectedPartsList || !analyzeBodyPartsBtn) return;

  bodyParts.forEach(part => {
    part.addEventListener('click', function() {
      const partName = this.getAttribute('data-part');
      this.classList.toggle('selected');

      if (this.classList.contains('selected')) {
        // Add to the list
        const listItem = document.createElement('li');
        listItem.setAttribute('data-part', partName);
        listItem.innerHTML = `${formatBodyPartName(partName)} <i class="fas fa-times"></i>`;

        listItem.querySelector('i').addEventListener('click', function() {
          // Remove from list and deselect on map
          selectedPartsList.removeChild(listItem);
          document.querySelector(`.body-part[data-part="${partName}"]`).classList.remove('selected');
          updateAnalyzeButton();
        });

        selectedPartsList.appendChild(listItem);
      } else {
        // Remove from the list
        const existingItem = selectedPartsList.querySelector(`li[data-part="${partName}"]`);
        if (existingItem) {
          selectedPartsList.removeChild(existingItem);
        }
      }

      updateAnalyzeButton();
    });
  });

  function updateAnalyzeButton() {
    if (selectedPartsList.children.length > 0) {
      analyzeBodyPartsBtn.removeAttribute('disabled');
    } else {
      analyzeBodyPartsBtn.setAttribute('disabled', 'disabled');
    }
  }

  // Analyze selected body parts
  analyzeBodyPartsBtn.addEventListener('click', function() {
    const selectedParts = Array.from(selectedPartsList.children).map(item => item.getAttribute('data-part'));
    analyzeBodyPartsSymptoms(selectedParts);
  });
}

function formatBodyPartName(partName) {
  // Convert kebab-case to Title Case
  return partName.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function analyzeBodyPartsSymptoms(selectedParts) {
  const symptomChecker = document.querySelector('.symptom-checker');
  const resultsDiv = symptomChecker.querySelector('.results');
  const conditionsList = symptomChecker.querySelector('#conditions-list');
  const recommendationsList = symptomChecker.querySelector('#recommendations-list');
  const emergencyWarning = symptomChecker.querySelector('.emergency-warning');

  // Prepare results area
  conditionsList.innerHTML = '';
  recommendationsList.innerHTML = '';
  emergencyWarning.style.display = 'none';

  // Show loading state
  resultsDiv.innerHTML = `
    <div class="analysis-loading">
      <i class="fas fa-spinner fa-spin"></i>
      <p>Analyzing body areas...</p>
    </div>
  `;
  resultsDiv.style.display = 'block';

  // Simulate loading delay for better UX
  setTimeout(() => {
    const possibleConditions = [];
    const recommendations = [];
    let isEmergency = false;

    // Analyze each selected body part
    selectedParts.forEach(part => {
      switch(part) {
        case 'head':
          possibleConditions.push('Tension headache - Common condition characterized by pain or discomfort in the head, scalp, or neck.');
          possibleConditions.push('Migraine - Recurrent headache disorder with moderate to severe pain.');
          recommendations.push('Rest in a quiet, dark room if light and sound sensitivity is present.');
          recommendations.push('Consider over-the-counter pain relievers if appropriate.');
          break;
        case 'chest':
          possibleConditions.push('Muscle strain - Pain due to strained chest muscles.');
          possibleConditions.push('Costochondritis - Inflammation of the cartilage that connects ribs to the breastbone.');
          possibleConditions.push('Gastroesophageal reflux disease (GERD) - When stomach acid frequently flows back into the esophagus.');
          recommendations.push('Seek prompt medical attention for chest pain, especially if severe or accompanied by other symptoms.');
          recommendations.push('For mild muscle pain, rest and consider over-the-counter pain relievers if appropriate.');
          isEmergency = true; // Chest pain warrants medical evaluation
          break;
        case 'abdomen':
          possibleConditions.push('Gastritis - Inflammation of the stomach lining.');
          possibleConditions.push('Irritable Bowel Syndrome (IBS) - Common disorder affecting the large intestine.');
          possibleConditions.push('Gastroenteritis - Inflammation of the stomach and intestines.');
          recommendations.push('Stay hydrated and consider a bland diet for mild symptoms.');
          recommendations.push('Seek medical attention for severe or persistent abdominal pain.');
          break;
        case 'left-arm':
        case 'right-arm':
          possibleConditions.push('Muscle strain - Overstretching or tearing of muscle fibers.');
          possibleConditions.push('Tendinitis - Inflammation of a tendon.');
          possibleConditions.push('Joint inflammation - Swelling and pain in the joints.');
          recommendations.push('Rest the affected arm and apply ice to reduce swelling.');
          recommendations.push('Consider over-the-counter anti-inflammatory medication if appropriate.');

          if (part === 'left-arm') {
            possibleConditions.push('Note: Left arm pain can sometimes be associated with heart conditions.');
            recommendations.push('Seek prompt medical attention if left arm pain is accompanied by chest pain, shortness of breath, or nausea.');
          }
          break;
        case 'left-leg':
        case 'right-leg':
          possibleConditions.push('Muscle strain - Overstretching or tearing of muscle fibers.');
          possibleConditions.push('Sciatica - Pain that radiates along the sciatic nerve.');
          possibleConditions.push('Joint inflammation - Swelling and pain in the joints.');
          recommendations.push('Rest the affected leg and apply ice to reduce swelling.');
          recommendations.push('Consider over-the-counter anti-inflammatory medication if appropriate.');
          recommendations.push('Elevate the leg when possible to reduce swelling.');
          break;
      }
    });

    // Check for combinations that might indicate more serious conditions
    if (selectedParts.includes('chest') && selectedParts.includes('left-arm')) {
      possibleConditions.push('Possible cardiac symptoms - MEDICAL ATTENTION ADVISED: Chest pain with left arm pain may indicate a heart condition.');
      isEmergency = true;
    }

    if (selectedParts.includes('head') && selectedParts.includes('chest') && selectedParts.includes('abdomen')) {
      possibleConditions.push('Multiple body systems affected - Consider evaluation for systemic condition or infection.');
      recommendations.push('Consider seeking medical evaluation for symptoms affecting multiple body areas.');
    }

    // Display the results
    showResults(symptomChecker, possibleConditions, recommendations, isEmergency);
  }, 1500);
}

function showResults(symptomChecker, possibleConditions, recommendations, isEmergency) {
  const resultsDiv = symptomChecker.querySelector('.results');
  const conditionsList = symptomChecker.querySelector('#conditions-list');
  const recommendationsList = symptomChecker.querySelector('#recommendations-list');
  const emergencyWarning = symptomChecker.querySelector('.emergency-warning');

  // Clear loading state
  resultsDiv.innerHTML = '';

  // Rebuild the original structure
  resultsDiv.innerHTML = `
    <div class="results-header">
      <h4>Analysis Results</h4>
      <span class="disclaimer-label">For educational purposes only</span>
    </div>
    <div class="conditions-section">
      <h5>Possible Conditions:</h5>
      <ul id="conditions-list"></ul>
    </div>
    <div class="recommendations-section">
      <h5>Recommendations:</h5>
      <ul id="recommendations-list"></ul>
    </div>
    <div class="emergency-warning" style="display: none;">
      <i class="fas fa-exclamation-triangle"></i>
      <strong>WARNING:</strong> Your symptoms may indicate a serious condition that requires immediate medical attention. Please contact emergency services or go to the nearest emergency room.
    </div>
    <div class="next-steps">
      <h5>Next Steps:</h5>
      <div class="next-steps-buttons">
        <button id="find-doctor-btn" class="btn secondary"><i class="fas fa-user-md"></i> Find a Doctor</button>
        <button id="save-results-btn" class="btn secondary"><i class="fas fa-save"></i> Save Results</button>
        <button id="clear-symptoms-btn" class="btn secondary"><i class="fas fa-redo"></i> Start Over</button>
      </div>
    </div>
    <p class="disclaimer">Note: This is not a diagnosis. The symptom checker is for informational purposes only and should not replace professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider for medical advice.</p>
  `;

  // Get the newly created elements
  const newConditionsList = symptomChecker.querySelector('#conditions-list');
  const newRecommendationsList = symptomChecker.querySelector('#recommendations-list');
  const newEmergencyWarning = symptomChecker.querySelector('.emergency-warning');

  // Fill in conditions
  if (possibleConditions.length === 0) {
    newConditionsList.innerHTML = '<li>No specific conditions matched your described symptoms.</li>';
  } else {
    // Remove duplicates
    const uniqueConditions = [...new Set(possibleConditions)];
    uniqueConditions.forEach(condition => {
      const li = document.createElement('li');
      li.innerHTML = condition;
      newConditionsList.appendChild(li);
    });
  }

  // Fill in recommendations
  if (recommendations.length === 0) {
    newRecommendationsList.innerHTML = '<li>Monitor your symptoms and seek medical attention if they worsen.</li>';
  } else {
    // Remove duplicates
    const uniqueRecommendations = [...new Set(recommendations)];
    uniqueRecommendations.forEach(recommendation => {
      const li = document.createElement('li');
      li.innerHTML = recommendation;
      newRecommendationsList.appendChild(li);
    });
  }

  // Show emergency warning if needed
  if (isEmergency) {
    newEmergencyWarning.style.display = 'block';
  } else {
    newEmergencyWarning.style.display = 'none';
  }

  // Re-attach event listeners
  const findDoctorBtn = symptomChecker.querySelector('#find-doctor-btn');
  if (findDoctorBtn) {
    findDoctorBtn.addEventListener('click', function() {
      window.location.href = 'consultation.html';
    });
  }

  const saveResultsBtn = symptomChecker.querySelector('#save-results-btn');
  if (saveResultsBtn) {
    saveResultsBtn.addEventListener('click', function() {
      saveSymptomResults(resultsDiv);
    });
  }

  const clearSymptomsBtn = symptomChecker.querySelector('#clear-symptoms-btn');
  if (clearSymptomsBtn) {
    clearSymptomsBtn.addEventListener('click', function() {
      resetSymptomChecker(symptomChecker);
    });
  }

  // Show the results
  resultsDiv.style.display = 'block';

  // Scroll to results
  resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

function saveSymptomResults(resultsDiv) {
  // In a real app, this would save to server or local storage
  // For demo, create a "saved" visual feedback
  const saveBtn = resultsDiv.querySelector('#save-results-btn');

  if (saveBtn) {
    const originalText = saveBtn.innerHTML;
    saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved';
    saveBtn.disabled = true;

    // Check if user is logged in
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      // Prompt to login
      setTimeout(() => {
        if (confirm('To save your results, you need to be logged in. Would you like to log in now?')) {
          document.querySelector('.login-btn')?.click();
        }
        saveBtn.innerHTML = originalText;
        saveBtn.disabled = false;
      }, 1500);
    } else {
      // Store in localStorage for demo purposes
      try {
        const savedResults = JSON.parse(localStorage.getItem('savedHealthResults') || '[]');
        const conditions = Array.from(resultsDiv.querySelectorAll('#conditions-list li')).map(li => li.innerText);

        const newResult = {
          id: Date.now(),
          date: new Date().toISOString(),
          conditions: conditions,
          emergency: resultsDiv.querySelector('.emergency-warning').style.display !== 'none'
        };

        savedResults.push(newResult);
        localStorage.setItem('savedHealthResults', JSON.stringify(savedResults));

        // Reset button after delay
        setTimeout(() => {
          saveBtn.innerHTML = originalText;
          saveBtn.disabled = false;
        }, 3000);
      } catch (e) {
        console.error('Error saving results:', e);
        saveBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';

        setTimeout(() => {
          saveBtn.innerHTML = originalText;
          saveBtn.disabled = false;
        }, 3000);
      }
    }
  }
}

function resetSymptomChecker(symptomChecker) {
  // Hide results
  const resultsDiv = symptomChecker.querySelector('.results');
  if (resultsDiv) {
    resultsDiv.style.display = 'none';
  }

  // Clear text input
  const symptomsTextarea = symptomChecker.querySelector('#symptoms-textarea');
  if (symptomsTextarea) {
    symptomsTextarea.value = '';
  }

  // Reset duration and severity
  const durationSelect = symptomChecker.querySelector('#symptom-duration');
  if (durationSelect) {
    durationSelect.selectedIndex = 0;
  }

  const severitySelect = symptomChecker.querySelector('#symptom-severity');
  if (severitySelect) {
    severitySelect.value = 5;
  }

  // Clear body map selections
  const bodyParts = symptomChecker.querySelectorAll('.body-part');
  bodyParts.forEach(part => {
    part.classList.remove('selected');
  });

  const selectedPartsList = symptomChecker.querySelector('#selected-parts-list');
  if (selectedPartsList) {
    selectedPartsList.innerHTML = '';
  }

  const analyzeBodyPartsBtn = symptomChecker.querySelector('#analyze-body-parts');
  if (analyzeBodyPartsBtn) {
    analyzeBodyPartsBtn.setAttribute('disabled', 'disabled');
  }

  // Uncheck all symptom checkboxes
  const checkboxes = symptomChecker.querySelectorAll('.symptom-checkboxes input[type="checkbox"]');
  checkboxes.forEach(cb => {
    cb.checked = false;
  });

  // Reset to text input tab
  const tabBtns = symptomChecker.querySelectorAll('.symptom-checker-tabs .tab-btn');
  tabBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === 'text-input') {
      btn.classList.add('active');
    }
  });

  const tabContents = symptomChecker.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.classList.remove('active');
    if (content.id === 'text-input') {
      content.classList.add('active');
    }
  });
}

// Handle Symptom Checker Modal
function openSymptomCheckerModal() {
  const modal = document.getElementById('symptom-checker-modal');
  if (!modal) return;

  modal.style.display = 'block';

  // Close button functionality
  const closeBtn = modal.querySelector('.close');
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Click outside to close
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Quiz System
function setupQuizSystem() {
  const submitQuiz = document.getElementById('submit-quiz');
  if (submitQuiz) {
    submitQuiz.addEventListener('click', function() {
      checkQuizAnswer('quiz', 1, 'Streptococcus pneumoniae is the most common cause of community-acquired pneumonia.');
    });
  }

  const submitQuiz2 = document.getElementById('submit-quiz2');
  if (submitQuiz2) {
    submitQuiz2.addEventListener('click', function() {
      checkQuizAnswer('quiz2', 3, 'Correct! The liver does not produce insulin; that\'s the pancreas\'s job.');
    });
  }
}

function checkQuizAnswer(quizName, correctAnswer, correctMessage) {
  const selectedOption = document.querySelector(`input[name="${quizName}"]:checked`);
  const resultDiv = document.querySelector(`.quiz-result${quizName === 'quiz' ? '' : '2'}`);

  if (!selectedOption) {
    resultDiv.textContent = 'Please select an answer.';
    resultDiv.className = 'quiz-result warning';
    resultDiv.style.display = 'block';
    return;
  }

  if (parseInt(selectedOption.value, 10) === correctAnswer) {
    resultDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${correctMessage}`;
    resultDiv.className = 'quiz-result correct';
  } else {
    resultDiv.innerHTML = '<i class="fas fa-times-circle"></i> Incorrect. Try again!';
    resultDiv.className = 'quiz-result incorrect';
  }

  resultDiv.style.display = 'block';
}

// Mobile Navigation
function setupMobileNavigation() {
  const header = document.querySelector('header');
  if (!header) return;

  // Create mobile menu button if it doesn't exist
  if (!document.querySelector('.mobile-menu-toggle')) {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    header.querySelector('.container').appendChild(menuToggle);

    menuToggle.addEventListener('click', function() {
      const nav = header.querySelector('nav');
      nav.classList.toggle('mobile-open');
      this.innerHTML = nav.classList.contains('mobile-open') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
  }

  // Close mobile menu when link is clicked
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const nav = header.querySelector('nav');
      const menuToggle = document.querySelector('.mobile-menu-toggle');

      if (nav.classList.contains('mobile-open')) {
        nav.classList.remove('mobile-open');
        if (menuToggle) {
          menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
      }
    });
  });
}

// Update UI for logged-in user
function updateUIForLoggedInUser(user) {
  // Set user role as data attribute on body for role-specific styling
  document.body.setAttribute('data-role', user.role);

  // Show user-specific welcome message or banner
  showWelcomeBanner(user);
}

// Show welcome banner for logged in users
function showWelcomeBanner(user) {
  // Check if banner already exists
  if (document.querySelector('.user-welcome-banner')) {
    return;
  }

  const mainElement = document.querySelector('main');
  if (!mainElement) return;

  const banner = document.createElement('div');
  banner.className = 'user-welcome-banner';

  const welcomeContent = document.createElement('div');
  welcomeContent.className = 'welcome-content';

  const welcomeHeader = document.createElement('div');
  welcomeHeader.className = 'welcome-header';

  const avatar = document.createElement('div');
  avatar.className = 'welcome-avatar';
  avatar.textContent = user.avatar || user.name.substring(0, 2).toUpperCase();

  const welcomeText = document.createElement('div');
  welcomeText.innerHTML = `<h3>Welcome, ${user.name}!</h3>
    <p>You are logged in as a ${user.role}. Explore the platform to access your specialized features.</p>`;

  welcomeHeader.appendChild(avatar);
  welcomeHeader.appendChild(welcomeText);

  const welcomeActions = document.createElement('div');
  welcomeActions.className = 'welcome-actions';

  const dashboardButton = document.createElement('a');
  dashboardButton.href = `${user.role}-dashboard.html`;
  dashboardButton.className = 'btn primary';
  dashboardButton.innerHTML = '<i class="fas fa-tachometer-alt"></i> Go to Dashboard';

  welcomeActions.appendChild(dashboardButton);

  welcomeContent.appendChild(welcomeHeader);
  welcomeContent.appendChild(welcomeActions);

  const closeButton = document.createElement('button');
  closeButton.className = 'close-banner';
  closeButton.innerHTML = '<i class="fas fa-times"></i>';
  closeButton.addEventListener('click', () => {
    banner.remove();
  });

  banner.appendChild(welcomeContent);
  banner.appendChild(closeButton);

  // Insert at the beginning of main
  mainElement.insertBefore(banner, mainElement.firstChild);
}

// Remove references to the database.js in server.js

// Login Modal Scripts
const loginModal = document.getElementById('login-modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');
const tabBtns = document.querySelectorAll('.tab-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const switchToSignup = document.querySelector('.switch-to-signup');
const switchToLogin = document.querySelector('.switch-to-login');

let userMenu = null;

// Show login modal function
function showLoginModal() {
  loginModal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Close login modal function
function closeLoginModal() {
  loginModal.style.display = 'none';
  document.body.style.overflow = ''; // Restore scrolling
}

// Show login modal
if (loginBtn && !loginBtn.classList.contains('logged-in')) {
  loginBtn.addEventListener('click', showLoginModal);
}

// Close login modal
if (closeBtn) {
  closeBtn.addEventListener('click', closeLoginModal);
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    closeLoginModal();
  }
});

// Switch between tabs (Patient, Doctor, Student)
if (tabBtns) {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all tabs
      tabBtns.forEach(tab => tab.classList.remove('active'));

      // Add active class to clicked tab
      btn.classList.add('active');

      // Update form fields or labels based on selected role
      const selectedRole = btn.dataset.tab;
      updateFormForRole(selectedRole);
    });
  });
}

// Update form fields based on selected role
function updateFormForRole(role) {
  const roleSpecificFields = document.querySelectorAll('.role-specific-field');
  roleSpecificFields.forEach(field => {
    field.style.display = field.classList.contains(role) ? 'block' : 'none';
  });

  // Update form labels or placeholders
  const emailInput = document.getElementById('email');
  const signupEmailInput = document.getElementById('signup-email');

  if (emailInput) {
    emailInput.placeholder = `${role.charAt(0).toUpperCase() + role.slice(1)} Email`;
  }

  if (signupEmailInput) {
    signupEmailInput.placeholder = `${role.charAt(0).toUpperCase() + role.slice(1)} Email`;
  }
}

// Switch between login and signup forms
if (switchToSignup) {
  switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';

    // Update the active role in signup form
    const activeRole = document.querySelector('.tab-btn.active').dataset.tab;
    updateFormForRole(activeRole);
  });
}

if (switchToLogin) {
  switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';

    // Update the active role in login form
    const activeRole = document.querySelector('.tab-btn.active').dataset.tab;
    updateFormForRole(activeRole);
  });
}

// Form validation
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required]');
  let isValid = true;

  inputs.forEach(input => {
    const errorMessage = input.nextElementSibling;

    if (!input.value.trim()) {
      // If error message doesn't exist yet, create it
      if (!errorMessage || !errorMessage.classList.contains('error-message')) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = 'This field is required';
        input.parentNode.insertBefore(error, input.nextSibling);
      }

      input.classList.add('invalid');
      isValid = false;
    } else {
      // If it's an email field, validate email format
      if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          if (!errorMessage || !errorMessage.classList.contains('error-message')) {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.textContent = 'Please enter a valid email address';
            input.parentNode.insertBefore(error, input.nextSibling);
          }

          input.classList.add('invalid');
          isValid = false;
          return;
        }
      }

      // If it's a password field, validate minimum length
      if (input.type === 'password' && input.value.length < 6) {
        if (!errorMessage || !errorMessage.classList.contains('error-message')) {
          const error = document.createElement('div');
          error.className = 'error-message';
          error.textContent = 'Password must be at least 6 characters';
          input.parentNode.insertBefore(error, input.nextSibling);
        }

        input.classList.add('invalid');
        isValid = false;
        return;
      }

      // Clear error if field is valid
      input.classList.remove('invalid');
      if (errorMessage && errorMessage.classList.contains('error-message')) {
        errorMessage.remove();
      }
    }
  });

  return isValid;
}

// Form submissions
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm(loginForm)) {
      return;
    }

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.querySelector('.tab-btn.active').dataset.tab;

    console.log(`Login attempt - Email: ${email}, Role: ${role}`);

    // In a real app, you would send this data to your server for authentication
    // For this demo, we'll simulate successful login

    // Store user info in localStorage (in a real app, you'd store a token)
    const user = {
      email,
      role,
      name: email.split('@')[0], // Just using the part before @ as the name for demo
      avatar: email.substring(0, 2).toUpperCase() // First two letters as avatar
    };

    localStorage.setItem('user', JSON.stringify(user));

    // Close the modal
    closeLoginModal();

    // Update UI to show logged-in state
    updateUIForLoggedInUser(user);

    // Show success message
    showToast('Logged in successfully!', 'success');
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm(signupForm)) {
      return;
    }

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const role = document.querySelector('.tab-btn.active').dataset.tab;

    console.log(`Signup attempt - Name: ${name}, Email: ${email}, Role: ${role}`);

    // In a real app, you would send this data to your server to create an account
    // For this demo, we'll simulate successful signup

    // Store user info in localStorage (in a real app, you'd store a token)
    const user = {
      name,
      email,
      role,
      avatar: name.substring(0, 2).toUpperCase() // First two letters as avatar
    };

    localStorage.setItem('user', JSON.stringify(user));

    // Close the modal
    closeLoginModal();

    // Update UI to show logged-in state
    updateUIForLoggedInUser(user);

    // Show success message
    showToast('Account created successfully!', 'success');
  });
}

// Function to handle logout
function logout() {
  // Clear user data
  localStorage.removeItem('user');

  // Hide any open user menu
  if (userMenu) {
    userMenu.style.display = 'none';
  }

  // Show toast message
  showToast('Logged out successfully', 'info');

  // Reload the page to reset UI
  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

// Function to show toast notification
function showToast(message, type = 'info') {
  // Remove existing toasts
  const existingToasts = document.querySelectorAll('.toast');
  existingToasts.forEach(toast => {
    toast.remove();
  });

  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  // Add icon based on type
  let icon = 'info-circle';
  if (type === 'success') icon = 'check-circle';
  if (type === 'error') icon = 'exclamation-circle';
  if (type === 'warning') icon = 'exclamation-triangle';

  toast.innerHTML = `<i class="fas fa-${icon}"></i> ${message}`;

  // Add to document
  document.body.appendChild(toast);

  // Add fade-in class
  setTimeout(() => {
    toast.classList.add('fade-in');
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Check if user is already logged in on page load
document.addEventListener('DOMContentLoaded', () => {
  // Set initial role for forms
  const defaultRole = 'patient';
  updateFormForRole(defaultRole);

  // Check for logged in user
  const userJson = localStorage.getItem('user');
  if (userJson) {
    try {
      const user = JSON.parse(userJson);
      updateUIForLoggedInUser(user);
    } catch (e) {
      console.error('Error parsing user data:', e);
      localStorage.removeItem('user'); // Clear invalid data
    }
  }

  // Add input validation listeners
  const formInputs = document.querySelectorAll('input[required]');
  formInputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (!input.value.trim()) {
        input.classList.add('invalid');

        // Add error message if not present
        const nextElement = input.nextElementSibling;
        if (!nextElement || !nextElement.classList.contains('error-message')) {
          const error = document.createElement('div');
          error.className = 'error-message';
          error.textContent = 'This field is required';
          input.parentNode.insertBefore(error, input.nextSibling);
        }
      } else {
        input.classList.remove('invalid');

        // Remove error message if present
        const nextElement = input.nextElementSibling;
        if (nextElement && nextElement.classList.contains('error-message')) {
          nextElement.remove();
        }
      }
    });
  });
});