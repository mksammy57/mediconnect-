// Student Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize the dashboard
  initializeDashboard();

  // Set up event listeners
  setupEventListeners();

  // Load user data
  loadUserData();

  // Load courses and activities
  loadCourses();
  loadActivities();

  // Initialize symptom checker
  initializeSymptomChecker();

  // Add quick actions
  setupQuickActionSection();

  // Enhance sidebar navigation
  enhanceSidebarNavigation();

  // Initialize quizzes
  initializeQuizzes();

  // Setup settings forms
  setupSettingsForms();
});

// Make sidebar navigation more interactive and functional
function enhanceSidebarNavigation() {
  const sidebarItems = document.querySelectorAll('.dashboard-nav li');

  sidebarItems.forEach(item => {
    // Transform list items into functional buttons
    item.classList.add('nav-button');
    const tabId = item.getAttribute('data-tab');

    // Create button element inside list item
    const button = document.createElement('button');
    button.className = 'sidebar-button';
    button.innerHTML = item.innerHTML;
    item.innerHTML = '';
    item.appendChild(button);

    // Add visual feedback on hover
    button.addEventListener('mouseenter', function() {
      item.style.transform = 'translateX(5px)';
    });

    button.addEventListener('mouseleave', function() {
      item.style.transform = 'translateX(0)';
    });

    // Make buttons functional with animation
    button.addEventListener('click', function() {
      // Add ripple effect
      addRippleEffect(this);

      // Remove active class from all items
      sidebarItems.forEach(nav => {
        nav.classList.remove('active');
      });

      // Add active class to clicked item
      item.classList.add('active');

      // Show corresponding tab
      const tabs = document.querySelectorAll('.dashboard-tab');
      tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.style.display = 'none';
      });

      const selectedTab = document.getElementById(tabId);
      if (selectedTab) {
        selectedTab.classList.add('active');
        selectedTab.style.display = 'block';

        // Add entrance animation
        selectedTab.style.opacity = '0';
        selectedTab.style.transform = 'translateY(10px)';

        setTimeout(() => {
          selectedTab.style.transition = 'all 0.5s ease';
          selectedTab.style.opacity = '1';
          selectedTab.style.transform = 'translateY(0)';
        }, 50);
      }
    });
  });
}

// Ripple effect for buttons and nav items
function addRippleEffect(element) {
  const ripple = document.createElement('span');
  ripple.className = 'ripple-effect';

  // Position the ripple based on click location
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = `${size}px`;

  // Center the ripple in the element
  ripple.style.left = '50%';
  ripple.style.top = '50%';
  ripple.style.transform = 'translate(-50%, -50%) scale(0)';

  // Add and animate the ripple
  element.appendChild(ripple);

  // Force reflow
  void ripple.offsetWidth;

  // Start animation
  ripple.style.transform = 'translate(-50%, -50%) scale(1)';
  ripple.style.opacity = '0';

  // Remove ripple after animation completes
  setTimeout(() => {
    if (element.contains(ripple)) {
      element.removeChild(ripple);
    }
  }, 800);
}

// Initialize quizzes with real content
function initializeQuizzes() {
  if (!document.getElementById('quizzes')) return;

  // Load quizzes data from medical-quizzes.js if available
  if (typeof detailedMedicalQuizzes !== 'undefined') {
    // Display available quizzes
    displayAvailableQuizzes();
  } else {
    console.warn('Medical quizzes data not found, using fallback data');
    // Use fallback quiz data if medical-quizzes.js is not loaded
    const fallbackQuizzes = [
      {
        id: 1,
        title: "Anatomy Basics",
        description: "Test your knowledge of basic human anatomy",
        difficulty: "Beginner",
        timeEstimate: "15 minutes",
        questions: [
          {
            question: "Which of the following is NOT a function of the skeletal system?",
            options: ["Protection of internal organs", "Blood cell production", "Hormone regulation", "Mineral storage"],
            correctAnswer: 2,
            explanation: "Hormone regulation is primarily a function of the endocrine system, not the skeletal system."
          },
          {
            question: "The largest bone in the human body is:",
            options: ["Humerus", "Femur", "Tibia", "Pelvis"],
            correctAnswer: 1,
            explanation: "The femur (thigh bone) is the largest bone in the human body."
          },
          {
            question: "How many bones are in an adult human body?",
            options: ["106", "206", "306", "406"],
            correctAnswer: 1,
            explanation: "An adult human body typically has 206 bones."
          }
        ]
      },
      {
        id: 2,
        title: "Medical Terminology",
        description: "Review common medical terms and definitions",
        difficulty: "Intermediate",
        timeEstimate: "20 minutes",
        questions: [
          {
            question: "What does the prefix 'brady-' mean?",
            options: ["Fast", "Slow", "Painful", "Difficult"],
            correctAnswer: 1,
            explanation: "The prefix 'brady-' means slow, as in bradycardia (slow heart rate)."
          },
          {
            question: "The suffix '-itis' indicates:",
            options: ["Disease", "Inflammation", "Removal", "Condition"],
            correctAnswer: 1,
            explanation: "The suffix '-itis' indicates inflammation, as in appendicitis (inflammation of the appendix)."
          },
          {
            question: "The medical term 'myalgia' refers to:",
            options: ["Muscle pain", "Bone disease", "Joint stiffness", "Blood disorder"],
            correctAnswer: 0,
            explanation: "Myalgia refers to muscle pain ('my-' referring to muscle, '-algia' meaning pain)."
          }
        ]
      },
      {
        id: 3,
        title: "Pathophysiology",
        description: "Test your understanding of disease mechanisms",
        difficulty: "Advanced",
        timeEstimate: "30 minutes",
        questions: [
          {
            question: "Which of the following is a characteristic of acute inflammation?",
            options: ["Fibrosis", "Granuloma formation", "Increased vascular permeability", "Scar tissue development"],
            correctAnswer: 2,
            explanation: "Increased vascular permeability is a key feature of acute inflammation, allowing immune cells to enter tissues."
          },
          {
            question: "The primary cause of cell injury in most cases is:",
            options: ["Physical trauma", "Hypoxia", "Chemical injury", "Radiation"],
            correctAnswer: 1,
            explanation: "Hypoxia (oxygen deficiency) is the most common cause of cell injury in most pathological processes."
          },
          {
            question: "Atherosclerosis primarily affects which blood vessels?",
            options: ["Veins", "Capillaries", "Arteries", "Lymphatic vessels"],
            correctAnswer: 2,
            explanation: "Atherosclerosis primarily affects arteries, causing plaque buildup and narrowing of these blood vessels."
          }
        ]
      }
    ];

    displayQuizzes(fallbackQuizzes);
  }
}

// Display available quizzes
function displayAvailableQuizzes() {
  if (typeof detailedMedicalQuizzes === 'undefined') return;

  displayQuizzes(detailedMedicalQuizzes);
}

// Display quizzes in the quizzes tab
function displayQuizzes(quizzes) {
  const quizCategory = document.querySelector('.quiz-category:first-child .quiz-cards');
  if (!quizCategory) return;

  // Clear existing quizzes
  quizCategory.innerHTML = '';

  // Add quizzes to the container with animation
  quizzes.forEach((quiz, index) => {
    const quizCard = document.createElement('div');
    quizCard.className = 'quiz-card';
    quizCard.dataset.quizId = quiz.id;

    // Add initial styling for animation
    quizCard.style.opacity = '0';
    quizCard.style.transform = 'translateY(20px)';

    // Determine appropriate icon based on quiz category or title
    let iconClass = 'fas fa-question-circle';
    if (quiz.category) {
      switch(quiz.category.toLowerCase()) {
        case 'anatomy': iconClass = 'fas fa-bone'; break;
        case 'physiology': iconClass = 'fas fa-heartbeat'; break;
        case 'pharmacology': iconClass = 'fas fa-pills'; break;
        case 'pathology': iconClass = 'fas fa-viruses'; break;
        case 'microbiology': iconClass = 'fas fa-bacteria'; break;
        case 'clinical': iconClass = 'fas fa-stethoscope'; break;
        case 'cardiology': iconClass = 'fas fa-heart'; break;
        case 'psychiatry': iconClass = 'fas fa-brain'; break;
      }
    } else {
      // Assign icons based on title if category is not available
      if (quiz.title.toLowerCase().includes('anatomy')) iconClass = 'fas fa-bone';
      else if (quiz.title.toLowerCase().includes('terminology')) iconClass = 'fas fa-language';
      else if (quiz.title.toLowerCase().includes('pathophysiology')) iconClass = 'fas fa-viruses';
    }

    quizCard.innerHTML = `
      <div class="quiz-icon"><i class="${iconClass}"></i></div>
      <h5>${quiz.title}</h5>
      <p>${quiz.description || 'Test your medical knowledge'}</p>
      <div class="quiz-meta">
        <span><i class="fas fa-question-circle"></i> ${quiz.questions ? (Array.isArray(quiz.questions) ? quiz.questions.length : quiz.questions) : '15'} Questions</span>
        <span><i class="fas fa-clock"></i> ${quiz.timeEstimate || '15 Minutes'}</span>
      </div>
      <button class="btn primary take-quiz-btn" data-quiz-id="${quiz.id}">Take Quiz</button>
    `;

    quizCategory.appendChild(quizCard);

    // Animate card entrance with delay
    setTimeout(() => {
      quizCard.style.transition = 'all 0.5s ease';
      quizCard.style.opacity = '1';
      quizCard.style.transform = 'translateY(0)';
    }, 100 * (index + 1));

    // Add event listener to the Take Quiz button
    const takeQuizBtn = quizCard.querySelector('.take-quiz-btn');
    takeQuizBtn.addEventListener('click', function() {
      const quizId = this.getAttribute('data-quiz-id');
      const selectedQuiz = quizzes.find(q => q.id == quizId);
      if (selectedQuiz) {
        launchQuiz(selectedQuiz);
      } else {
        showToast('Quiz not found', 'error');
      }
    });
  });

  // Add completed quizzes section if needed
  const completedCategory = document.querySelector('.quiz-category:nth-child(2) .quiz-cards');
  if (completedCategory && completedCategory.children.length === 0) {
    // Add a sample completed quiz
    const completedQuiz = document.createElement('div');
    completedQuiz.className = 'quiz-card completed';
    completedQuiz.style.opacity = '0';
    completedQuiz.style.transform = 'translateY(20px)';

    completedQuiz.innerHTML = `
      <div class="quiz-icon"><i class="fas fa-award"></i></div>
      <h5>Basic Medical Terminology</h5>
      <div class="quiz-score">
        <div class="score-circle">88%</div>
        <p>Your Score</p>
      </div>
      <div class="quiz-meta">
        <span><i class="fas fa-calendar-alt"></i> Completed today</span>
      </div>
      <button class="btn secondary">Review Answers</button>
    `;
    completedCategory.appendChild(completedQuiz);

    // Animate entrance
    setTimeout(() => {
      completedQuiz.style.transition = 'all 0.5s ease';
      completedQuiz.style.opacity = '1';
      completedQuiz.style.transform = 'translateY(0)';
    }, 300);

    // Add event listener to the Review button
    const reviewBtn = completedQuiz.querySelector('.btn.secondary');
    reviewBtn.addEventListener('click', function() {
      showToast('Showing quiz review', 'info');

      // Show a modal with quiz review
      const reviewModal = document.createElement('div');
      reviewModal.className = 'modal';
      reviewModal.innerHTML = `
        <div class="modal-content">
          <span class="close" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
          <h2>Quiz Review</h2>
          <p>Your feedback will be displayed here.</p>
        </div>
      `;
      document.body.appendChild(reviewModal);
      reviewModal.style.display = 'block';
      
      // Close modal on click outside
      window.onclick = function(event) {
        if (event.target === reviewModal) {
          reviewModal.style.display = 'none';
        }
      };
    });
  }
}