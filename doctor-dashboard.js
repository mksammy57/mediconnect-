
document.addEventListener('DOMContentLoaded', function() {
  // Check user role and redirect if needed
  checkUserRoleAndRedirect();

  // Initialize dashboard components
  initializeDashboard();

  // Set up tab navigation
  setupTabNavigation();

  // Initialize calendar and schedule
  initializeCalendar();

  // Set up messaging functionality
  initializeMessaging();

  // Set up appointments handling
  initializeAppointments();

  // Add the home page dashboard features
  setupHomeDashboardFeatures();
});

function checkUserRoleAndRedirect() {
  const userJson = localStorage.getItem('user');
  if (userJson) {
    try {
      const user = JSON.parse(userJson);
      document.body.setAttribute('data-role', user.role);

      // Redirect if not a doctor
      if (user.role !== 'doctor') {
        window.location.href = 'index.html';
        alert('This page is for doctors only. Redirecting to home page.');
      } else {
        // If doctor, update the doctor name in the UI
        updateDoctorInfo(user);
      }
    } catch (e) {
      console.error('Error parsing user data:', e);
    }
  }
}

function updateDoctorInfo(user) {
  // Update doctor name throughout the UI
  const doctorNameElements = document.querySelectorAll('[id="doctor-name"]');
  const doctorNameGreeting = document.getElementById('doctor-name-greeting');

  if (doctorNameElements.length > 0) {
    doctorNameElements.forEach(element => {
      element.textContent = user.name || 'Dr. Smith';
    });
  }

  if (doctorNameGreeting) {
    doctorNameGreeting.textContent = user.name || 'Dr. Smith';
  }
}

function initializeDashboard() {
  // Set current date
  displayCurrentDate();

  // Load dashboard stats 
  loadDashboardStats();

  // Load today's appointments
  loadTodaysAppointments();

  // Load recent messages
  loadRecentMessages();
}

function displayCurrentDate() {
  const currentDateElement = document.getElementById('current-date');
  if (currentDateElement) {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = today.toLocaleDateString('en-US', options);
  }
}

function loadDashboardStats() {
  // Simulate loading dashboard stats with real-time data
  const statNumbers = document.querySelectorAll('.stat-info h3');

  if (statNumbers.length > 0) {
    // Animate the counter for a better effect
    statNumbers.forEach(statElement => {
      const finalValue = parseInt(statElement.textContent);
      let startValue = 0;
      const duration = 1000;
      const increment = finalValue / (duration / 20);

      const updateCount = () => {
        startValue += increment;
        if (startValue < finalValue) {
          statElement.textContent = Math.floor(startValue);
          setTimeout(updateCount, 20);
        } else {
          statElement.textContent = finalValue;
        }
      };

      updateCount();
    });
  }
}

function loadTodaysAppointments() {
  // Get patient data from localStorage or fetch from API
  const patients = [
    { id: 1, name: "John Davis", reason: "Follow-up • Hypertension", time: "09:00 AM", type: "video" },
    { id: 2, name: "Sarah Johnson", reason: "New Patient • Chest Pain", time: "10:30 AM", type: "video" },
    { id: 3, name: "Robert Chen", reason: "Follow-up • Post Surgery", time: "08:00 AM", type: "video", completed: true },
    { id: 4, name: "Emily Wilson", reason: "Medication Review", time: "01:00 PM", type: "chat" },
    { id: 5, name: "Michael Rodriguez", reason: "Hypertension monitoring", time: "02:00 PM", type: "voice" }
  ];

  // Update the appointment list
  const appointmentList = document.querySelector('.appointment-list');
  if (appointmentList) {
    appointmentList.innerHTML = '';

    patients.forEach(patient => {
      if (patient.completed) {
        appointmentList.innerHTML += `
          <div class="appointment-card completed" data-patient-id="${patient.id}">
            <div class="appointment-time">${patient.time}</div>
            <div class="appointment-details">
              <h4>${patient.name}</h4>
              <p>${patient.reason}</p>
            </div>
            <div class="appointment-actions">
              <span class="status-badge completed">Completed</span>
            </div>
          </div>
        `;
      } else {
        appointmentList.innerHTML += `
          <div class="appointment-card" data-patient-id="${patient.id}">
            <div class="appointment-time">${patient.time}</div>
            <div class="appointment-details">
              <h4>${patient.name}</h4>
              <p>${patient.reason}</p>
            </div>
            <div class="appointment-actions">
              <button class="btn primary small start-session-btn" data-type="${patient.type}" data-patient="${patient.name}">
                <i class="fas fa-${patient.type === 'video' ? 'video' : patient.type === 'chat' ? 'comment' : 'phone'}"></i> Start
              </button>
              <div class="quick-appointment-actions">
                <button class="quick-action-icon ${patient.type}" title="Start ${patient.type.charAt(0).toUpperCase() + patient.type.slice(1)}" data-patient="${patient.name}">
                  <i class="fas fa-${patient.type === 'video' ? 'video' : patient.type === 'chat' ? 'comment-alt' : 'phone-alt'}"></i>
                </button>
                <button class="quick-action-icon reschedule" title="Reschedule Appointment" data-patient="${patient.name}">
                  <i class="fas fa-calendar-alt"></i>
                </button>
                <button class="quick-action-icon history" title="View Medical History" data-patient="${patient.name}">
                  <i class="fas fa-file-medical"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      }
    });

    // Add event listeners to the new buttons
    setupAppointmentActions();
  }
}

function loadRecentMessages() {
  // Sample patient messages
  const messages = [
    { id: 1, sender: "Emily Wilson", avatar: "https://randomuser.me/api/portraits/women/68.jpg", time: "11:45 AM", message: "Thank you for the prescription, doctor. I wanted to ask about the dosage...", unread: true },
    { id: 2, sender: "James Brown", avatar: "https://randomuser.me/api/portraits/men/54.jpg", time: "10:23 AM", message: "I'm experiencing some side effects from the medication you prescribed...", unread: true },
    { id: 3, sender: "Lisa Kumar", avatar: "https://randomuser.me/api/portraits/women/32.jpg", time: "Yesterday", message: "My blood pressure readings for this week as requested...", unread: false }
  ];

  // Update the messages list
  const messagesList = document.querySelector('.messages-list');
  if (messagesList) {
    messagesList.innerHTML = '';

    messages.forEach(msg => {
      messagesList.innerHTML += `
        <div class="message-preview ${msg.unread ? 'unread' : ''}" data-message-id="${msg.id}" data-patient-name="${msg.sender}">
          <div class="message-avatar">
            <img src="${msg.avatar}" alt="${msg.sender}">
          </div>
          <div class="message-content">
            <h4>${msg.sender} <span class="time">${msg.time}</span></h4>
            <p>${msg.message}</p>
          </div>
          <div class="message-quick-actions">
            <button class="action-btn reply-btn" title="Quick Reply" data-patient="${msg.sender}">
              <i class="fas fa-reply"></i>
            </button>
            <button class="action-btn call-btn" title="Call Patient" data-patient="${msg.sender}">
              <i class="fas fa-phone"></i>
            </button>
            <button class="action-btn video-btn" title="Video Call" data-patient="${msg.sender}">
              <i class="fas fa-video"></i>
            </button>
          </div>
        </div>
      `;
    });

    // Add event listeners
    setupMessagePreviewListeners();
  }
}

function setupMessagePreviewListeners() {
  // Message preview clicks
  const messagePreviews = document.querySelectorAll('.message-preview');
  messagePreviews.forEach(preview => {
    preview.addEventListener('click', function() {
      const patientName = this.getAttribute('data-patient-name') || this.querySelector('h4').textContent.split(' ')[0];
      openMessageConversation(patientName);
    });

    // Quick action buttons
    const replyBtn = preview.querySelector('.reply-btn');
    const callBtn = preview.querySelector('.call-btn');
    const videoBtn = preview.querySelector('.video-btn');

    if (replyBtn) {
      replyBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const patientName = this.getAttribute('data-patient');
        quickReplyToMessage(patientName);
      });
    }

    if (callBtn) {
      callBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const patientName = this.getAttribute('data-patient');
        startVoiceCall(patientName);
      });
    }

    if (videoBtn) {
      videoBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const patientName = this.getAttribute('data-patient');
        startVideoCall(patientName);
      });
    }
  });
}

function openMessageConversation(patientName) {
  // Switch to messages tab
  const messagesTab = document.querySelector('.sidebar-menu a[data-tab="messages"]');
  if (messagesTab) {
    messagesTab.click();

    // Find and select the message from this patient
    setTimeout(() => {
      const messageItems = document.querySelectorAll('.message-item');
      let patientFound = false;
      
      messageItems.forEach(item => {
        const itemName = item.querySelector('h4').textContent;
        if (itemName.includes(patientName)) {
          item.click();
          patientFound = true;
        }
      });
      
      // If patient not found in existing conversations, create a new one
      if (!patientFound) {
        // Create a new conversation with this patient
        createNewConversation(patientName);
      }
    }, 300);
  }
}

function createNewConversation(patientName) {
  // Get the conversations list
  const conversationsList = document.querySelector('.messages-list');
  if (!conversationsList) return;
  
  // Create a new message item
  const messageItem = document.createElement('div');
  messageItem.className = 'message-item';
  messageItem.setAttribute('data-patient', patientName);
  
  // Generate unique but consistent avatar number
  const avatarNumber = Math.abs(patientName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 99);
  const gender = ['Emily', 'Sarah', 'Lisa', 'Maria', 'Amy', 'Karen', 'Linda', 'Patricia', 'Susan', 'Michelle'].includes(patientName.split(' ')[0]) ? 'women' : 'men';
  
  messageItem.innerHTML = `
    <div class="message-avatar">
      <img src="https://randomuser.me/api/portraits/${gender}/${avatarNumber}.jpg" alt="${patientName}">
    </div>
    <div class="message-preview">
      <div class="message-header">
        <h4>${patientName}</h4>
        <span class="message-time">Just now</span>
      </div>
      <p class="message-snippet">New conversation</p>
    </div>
  `;
  
  // Add to the list
  conversationsList.appendChild(messageItem);
  
  // Add event listener
  messageItem.addEventListener('click', function() {
    const items = document.querySelectorAll('.message-item');
    items.forEach(item => item.classList.remove('selected'));
    this.classList.add('selected');
    
    // Load empty conversation
    loadConversation(patientName, true);
  });
  
  // Simulate click
  messageItem.click();
}

function setupTabNavigation() {
  const navLinks = document.querySelectorAll('.sidebar-menu a');
  const tabContents = document.querySelectorAll('.dashboard-tab');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove active class from all links and tabs
      navLinks.forEach(link => link.classList.remove('active'));
      tabContents.forEach(tab => tab.classList.remove('active'));

      // Add active class to clicked link and corresponding tab
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Handle "View All" links
  const viewAllLinks = document.querySelectorAll('.view-all');
  viewAllLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const tabId = this.getAttribute('data-tab');
      navLinks.forEach(link => {
        if (link.getAttribute('data-tab') === tabId) {
          link.click();
        }
      });
    });
  });
}

function initializeCalendar() {
  // Set up calendar day selection
  const calendarDays = document.querySelectorAll('.days-grid .day');
  calendarDays.forEach(day => {
    day.addEventListener('click', function() {
      if (!this.classList.contains('other-month')) {
        calendarDays.forEach(day => day.classList.remove('active'));
        this.classList.add('active');

        // Update daily schedule
        const dayNumber = this.textContent.trim().split(' ')[0];
        updateDailySchedule(dayNumber);
      }
    });
  });

  // Set up filter tabs
  const filterTabs = document.querySelectorAll('.filter-tabs .filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      filterTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      // Filter appointments based on selected tab
      const filter = this.getAttribute('data-filter');
      filterAppointments(filter);
    });
  });
}

function updateDailySchedule(dayNumber) {
  // Update the schedule title
  const scheduleTitle = document.querySelector('.daily-schedule h3');
  if (scheduleTitle) {
    scheduleTitle.textContent = `June ${dayNumber}, 2023`;
  }

  // In a real app, this would fetch appointments for the selected day
  // For now, we'll just toggle the visibility of some time slots to simulate loading different days
  const timeSlots = document.querySelectorAll('.time-slot');
  timeSlots.forEach((slot, index) => {
    // Simple algorithm to show/hide slots based on the day number
    const shouldShow = (index + parseInt(dayNumber)) % 3 !== 0;
    slot.style.display = shouldShow ? 'flex' : 'none';
  });
}

function filterAppointments(filter) {
  // Get all appointment cards in the appointments tab
  const appointmentCards = document.querySelectorAll('.appointment-card');

  appointmentCards.forEach(card => {
    const isCompleted = card.classList.contains('completed');
    const isCancelled = card.classList.contains('cancelled');

    switch(filter) {
      case 'upcoming':
        card.style.display = (!isCompleted && !isCancelled) ? 'flex' : 'none';
        break;
      case 'past':
        card.style.display = isCompleted ? 'flex' : 'none';
        break;
      case 'cancelled':
        card.style.display = isCancelled ? 'flex' : 'none';
        break;
      default:
        card.style.display = 'flex';
    }
  });
}

function initializeMessaging() {
  // Set up message selection
  const messageItems = document.querySelectorAll('.message-item');
  messageItems.forEach(item => {
    item.addEventListener('click', function() {
      messageItems.forEach(item => item.classList.remove('selected'));
      this.classList.add('selected');

      // Mark as read
      this.classList.remove('unread');

      // Remove badge if present
      const badge = this.querySelector('.conversation-badge');
      if (badge) {
        badge.remove();
      }

      // Load conversation
      const senderName = this.querySelector('h4').textContent.trim();
      loadConversation(senderName);

      // Show small visual feedback
      showToast(`Opened conversation with ${senderName}`);

      // If on mobile, show conversation and hide sidebar
      if (window.innerWidth < 768) {
        const messagesSidebar = document.querySelector('.messages-sidebar');
        const messageConversation = document.querySelector('.message-conversation');

        if (messagesSidebar && messageConversation) {
          messagesSidebar.style.display = 'none';
          messageConversation.style.display = 'flex';

          // Add back button for mobile
          if (!document.querySelector('.mobile-back-btn')) {
            const backBtn = document.createElement('button');
            backBtn.className = 'mobile-back-btn';
            backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back';
            backBtn.addEventListener('click', function() {
              messagesSidebar.style.display = 'flex';
              messageConversation.style.display = 'none';
              this.remove();
            });

            document.querySelector('.conversation-header').prepend(backBtn);
          }
        }
      }
    });
  });

  // Set up message filters
  const messageFilters = document.querySelectorAll('.messages-filters .filter');
  messageFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      messageFilters.forEach(f => f.classList.remove('active'));
      this.classList.add('active');

      // Filter messages
      const filterType = this.getAttribute('data-filter');
      filterMessages(filterType);
    });
  });

  // Set up message sending
  setupMessageSending();
  
  // Add patient selection in the Messages tab
  addPatientSelectionToMessagesTab();
}

function addPatientSelectionToMessagesTab() {
  // Get the messages container
  const messagesContainer = document.querySelector('.messages-container');
  if (!messagesContainer) return;
  
  // Create the patient selection panel
  const patientSelectionPanel = document.createElement('div');
  patientSelectionPanel.className = 'patient-selection-panel';
  patientSelectionPanel.style.cssText = 'margin-bottom: 20px; background-color: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);';
  patientSelectionPanel.innerHTML = `
    <h4 style="margin-bottom: 10px;">Select a patient to message</h4>
    <div class="patient-selection">
      <select id="patient-select" style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ddd; margin-bottom: 10px;">
        <option value="">Select a patient</option>
        <option value="John Davis">John Davis</option>
        <option value="Sarah Johnson">Sarah Johnson</option>
        <option value="Robert Chen">Robert Chen</option>
        <option value="Emily Wilson">Emily Wilson</option>
        <option value="Michael Rodriguez">Michael Rodriguez</option>
        <option value="Lisa Kumar">Lisa Kumar</option>
        <option value="James Brown">James Brown</option>
      </select>
      <div class="communication-buttons" style="display: flex; gap: 10px;">
        <button id="start-chat-with-patient" class="btn secondary" style="flex: 1;"><i class="fas fa-comment"></i> Chat</button>
        <button id="start-voice-with-patient" class="btn secondary" style="flex: 1;"><i class="fas fa-phone"></i> Voice Call</button>
        <button id="start-video-with-patient" class="btn primary" style="flex: 1;"><i class="fas fa-video"></i> Video Call</button>
      </div>
    </div>
  `;
  
  // Insert the panel at the top of the messages tab
  const messagesTab = document.getElementById('messages');
  if (messagesTab) {
    messagesTab.insertBefore(patientSelectionPanel, messagesTab.firstChild);
    
    // Add event listeners to the communication buttons
    const patientSelect = document.getElementById('patient-select');
    const startChatBtn = document.getElementById('start-chat-with-patient');
    const startVoiceBtn = document.getElementById('start-voice-with-patient');
    const startVideoBtn = document.getElementById('start-video-with-patient');
    
    if (startChatBtn) {
      startChatBtn.addEventListener('click', function() {
        const selectedPatient = patientSelect.value;
        if (selectedPatient) {
          quickReplyToMessage(selectedPatient);
        } else {
          alert('Please select a patient first');
        }
      });
    }
    
    if (startVoiceBtn) {
      startVoiceBtn.addEventListener('click', function() {
        const selectedPatient = patientSelect.value;
        if (selectedPatient) {
          startVoiceCall(selectedPatient);
        } else {
          alert('Please select a patient first');
        }
      });
    }
    
    if (startVideoBtn) {
      startVideoBtn.addEventListener('click', function() {
        const selectedPatient = patientSelect.value;
        if (selectedPatient) {
          startVideoCall(selectedPatient);
        } else {
          alert('Please select a patient first');
        }
      });
    }
  }
}

function loadConversation(senderName, isNew = false) {
  // Update conversation header
  const conversationHeader = document.querySelector('.conversation-header .patient-info h3');
  if (conversationHeader) {
    conversationHeader.textContent = senderName;
  }

  // Create the conversation body if it doesn't exist
  const conversationBody = document.querySelector('.conversation-body');
  if (!conversationBody) return;
  
  // Clear the conversation first
  conversationBody.innerHTML = '<div class="conversation-date">Today</div>';
  
  // If this is a new conversation, only show a welcome message
  if (isNew) {
    conversationBody.innerHTML += `
      <div class="message-bubble sent">
        <div class="message-text">
          Hello ${senderName}, how can I assist you today?
        </div>
        <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
      </div>
    `;
    return;
  }

  // Generate a conversation based on the sender
  const conversations = {
    "Emily Wilson": [
      { time: "10:15 AM", text: "Good morning Dr. Smith, I hope you're doing well today.", sender: "patient" },
      { time: "10:16 AM", text: "I wanted to thank you for the prescription you sent over yesterday. I was able to get it filled at the pharmacy without any issues.", sender: "patient" },
      { time: "10:20 AM", text: "Good morning Emily. I'm glad to hear that. How are you feeling today?", sender: "doctor" },
      { time: "10:25 AM", text: "I'm feeling a bit better, thank you. The pain is less intense, but I'm still experiencing some discomfort in the evening.", sender: "patient" },
      { time: "10:30 AM", text: "That's good to hear there's some improvement. The medication may take a few days to reach its full effect. Keep monitoring your symptoms and let me know if there's any significant change.", sender: "doctor" },
      { time: "11:45 AM", text: "Thank you for the prescription, doctor. I wanted to ask about the dosage - is it normal to take it twice a day? The pharmacist mentioned something about taking it with food, but I wasn't sure if I should take it with breakfast and dinner or at different times.", sender: "patient" }
    ],
    "James Brown": [
      { time: "9:30 AM", text: "Hello Dr. Smith, I've been taking the medication for three days now and I'm experiencing some side effects - mainly dizziness and mild nausea.", sender: "patient" },
      { time: "9:45 AM", text: "Good morning James. I'm sorry to hear about the side effects. Are they occurring right after taking the medication or throughout the day?", sender: "doctor" },
      { time: "10:00 AM", text: "It's mostly within an hour after taking the medication, especially in the morning.", sender: "patient" },
      { time: "10:23 AM", text: "I'm experiencing some side effects from the medication you prescribed. The dizziness is making it difficult to drive. Is there an alternative medication we could try?", sender: "patient" }
    ],
    "Lisa Kumar": [
      { time: "Yesterday, 2:15 PM", text: "Hello Dr. Smith, as requested, here are my blood pressure readings for this week: Monday: 135/85, Tuesday: 130/83, Wednesday: 128/80, Thursday: 126/78, Friday: 127/79", sender: "patient" },
      { time: "Yesterday, 3:30 PM", text: "Thank you for sending these readings, Lisa. I'm pleased to see your blood pressure is trending down. The medication appears to be working well. Let's continue with the current dosage and review again in two weeks.", sender: "doctor" },
      { time: "Yesterday, 4:00 PM", text: "That sounds good, Doctor. I'm also trying to maintain a low-sodium diet and walking 30 minutes each day. Should I continue with these lifestyle changes?", sender: "patient" },
      { time: "Yesterday, 4:15 PM", text: "Absolutely, those lifestyle changes are excellent and likely contributing to your improving numbers. Keep up the good work! The combination of medication and these healthy habits is the ideal approach.", sender: "doctor" }
    ],
    "John Davis": [
      { time: "Yesterday, 11:30 AM", text: "Dr. Smith, I've been monitoring my blood pressure as you suggested. The readings have been between 130/85 and 140/90.", sender: "patient" },
      { time: "Yesterday, 1:20 PM", text: "Thanks for keeping track of those readings, John. They're still a bit elevated. How are you doing with the medication? Any side effects?", sender: "doctor" },
      { time: "Yesterday, 2:05 PM", text: "No side effects so far. I've also been trying to reduce salt in my diet and exercise more regularly as you suggested.", sender: "patient" },
      { time: "Yesterday, 2:30 PM", text: "That's excellent, John. Keep up with those lifestyle changes - they're just as important as the medication. Let's stay with the current dosage for now and re-evaluate in our appointment tomorrow.", sender: "doctor" }
    ],
    "Sarah Johnson": [
      { time: "2 days ago, 9:45 AM", text: "Good morning, Dr. Smith. I've been experiencing chest pain that comes and goes. I'm worried it might be something serious.", sender: "patient" },
      { time: "2 days ago, 10:15 AM", text: "Hello Sarah, I understand your concern. Can you describe the pain in more detail? Is it sharp or dull? Does it radiate to your arm or jaw?", sender: "doctor" },
      { time: "2 days ago, 10:30 AM", text: "It's a sharp pain that sometimes spreads to my left shoulder. It usually happens when I'm walking up stairs or exercising.", sender: "patient" },
      { time: "2 days ago, 10:45 AM", text: "Thank you for the details. This is something we should investigate promptly. Let's schedule you for an appointment tomorrow for a thorough examination. In the meantime, if the pain becomes severe or persistent, please go to the emergency room immediately.", sender: "doctor" },
      { time: "2 days ago, 11:00 AM", text: "Thank you, doctor. I've booked the appointment for tomorrow at 10:30 AM.", sender: "patient" }
    ],
    "Michael Rodriguez": [
      { time: "3 days ago, 1:15 PM", text: "Dr. Smith, I wanted to check in about my blood pressure medication. I've been taking it regularly, but I still feel some headaches occasionally.", sender: "patient" },
      { time: "3 days ago, 2:30 PM", text: "Hello Michael. Have you been monitoring your blood pressure at home? If so, what have your readings been?", sender: "doctor" },
      { time: "3 days ago, 3:00 PM", text: "Yes, I've been checking it daily. It's usually around 135/85 in the morning and 140/90 in the evening.", sender: "patient" },
      { time: "3 days ago, 3:45 PM", text: "Those readings suggest we may need to adjust your medication. The headaches could be related to your blood pressure still being slightly elevated. Let's discuss this more during your appointment tomorrow. Continue taking your current medication until then.", sender: "doctor" }
    ],
    "Robert Chen": [
      { time: "1 week ago, 10:00 AM", text: "Dr. Smith, I have a follow-up question about my post-surgery care. The incision site is healing well, but I'm still experiencing some stiffness in the area.", sender: "patient" },
      { time: "1 week ago, 11:30 AM", text: "Hello Robert, some stiffness is normal during the recovery process. Have you been doing the gentle stretching exercises we discussed?", sender: "doctor" },
      { time: "1 week ago, 12:15 PM", text: "Yes, I've been doing them twice daily as recommended. Should I increase the frequency?", sender: "patient" },
      { time: "1 week ago, 1:00 PM", text: "Twice daily is appropriate for now. Make sure you're not pushing too hard - the stretches should cause mild tension but not pain. If the stiffness doesn't improve by our next appointment, we can consider physical therapy as an additional option.", sender: "doctor" }
    ]
  };

  // If we have a conversation for this sender, display it
  if (conversations[senderName]) {
    conversations[senderName].forEach(message => {
      const bubbleClass = message.sender === 'doctor' ? 'sent' : 'received';
      conversationBody.innerHTML += `
        <div class="message-bubble ${bubbleClass}">
          <div class="message-text">
            ${message.text}
          </div>
          <div class="message-time">${message.time}</div>
        </div>
      `;
    });
  } else {
    // Generic conversation if sender not found
    conversationBody.innerHTML += `
      <div class="message-bubble received">
        <div class="message-text">
          Hello doctor, I have a question about my recent prescription.
        </div>
        <div class="message-time">11:30 AM</div>
      </div>
      <div class="message-bubble sent">
        <div class="message-text">
          Hello ${senderName}, I'm happy to help. What would you like to know?
        </div>
        <div class="message-time">11:35 AM</div>
      </div>
    `;
  }

  // Scroll to bottom
  conversationBody.scrollTop = conversationBody.scrollHeight;
  
  // Add call options to conversation header
  updateConversationHeaderWithCallOptions(senderName);
}

function updateConversationHeaderWithCallOptions(patientName) {
  const conversationActions = document.querySelector('.conversation-actions');
  if (!conversationActions) return;
  
  // Update existing buttons with patient data
  const videoCallBtn = conversationActions.querySelector('button:nth-child(1)');
  const voiceCallBtn = conversationActions.querySelector('button:nth-child(2)');
  
  if (videoCallBtn) {
    videoCallBtn.setAttribute('data-patient', patientName);
    videoCallBtn.addEventListener('click', function() {
      const patient = this.getAttribute('data-patient');
      startVideoCall(patient);
    });
  }
  
  if (voiceCallBtn) {
    voiceCallBtn.setAttribute('data-patient', patientName);
    voiceCallBtn.addEventListener('click', function() {
      const patient = this.getAttribute('data-patient');
      startVoiceCall(patient);
    });
  }
}

function filterMessages(filterType) {
  // Get all message items
  const messageItems = document.querySelectorAll('.message-item');

  switch (filterType) {
    case 'unread':
      messageItems.forEach(item => {
        item.style.display = item.classList.contains('unread') ? 'flex' : 'none';
      });
      break;
    case 'flagged':
      messageItems.forEach(item => {
        item.style.display = item.classList.contains('flagged') ? 'flex' : 'none';
      });
      break;
    case 'all':
    default:
      messageItems.forEach(item => {
        item.style.display = 'flex';
      });
      break;
  }
}

function setupMessageSending() {
  const sendBtn = document.querySelector('.send-btn');
  const messageInput = document.querySelector('.conversation-input textarea');

  if (sendBtn && messageInput) {
    sendBtn.addEventListener('click', function() {
      sendMessage();
    });

    messageInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }
}

function sendMessage() {
  const messageInput = document.querySelector('.conversation-input textarea');
  const message = messageInput.value.trim();

  if (message) {
    const conversationBody = document.querySelector('.conversation-body');
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const messageBubble = document.createElement('div');
    messageBubble.className = 'message-bubble sent';
    messageBubble.innerHTML = `
      <div class="message-text">${message}</div>
      <div class="message-time">${currentTime}</div>
    `;

    conversationBody.appendChild(messageBubble);
    conversationBody.scrollTop = conversationBody.scrollHeight;
    messageInput.value = '';
  }
}

function initializeAppointments() {
  // Load time slot data
  loadTimeSlots();

  // Set up appointment actions
  setupAppointmentActions();
}

function loadTimeSlots() {
  // Sample time slots for the schedule
  const timeSlots = [
    { time: "8:00 AM", patient: "Robert Chen", reason: "Follow-up • Post Surgery", type: "video", status: "completed" },
    { time: "9:00 AM", patient: "John Davis", reason: "Follow-up • Hypertension", type: "video", status: "current" },
    { time: "9:30 AM", patient: null, status: "empty" },
    { time: "10:30 AM", patient: "Sarah Johnson", reason: "New Patient • Chest Pain", type: "video", status: "upcoming" },
    { time: "11:30 AM", patient: "Daniel Wong", reason: "Follow-up • Diabetes Management", type: "chat", status: "upcoming" },
    { time: "12:30 PM", patient: null, status: "lunch-break" },
    { time: "2:00 PM", patient: "Maria Hernandez", reason: "Follow-up • Medication Review", type: "voice", status: "upcoming" }
  ];

  // Update the time slots in the daily schedule
  const timeSlotsContainer = document.querySelector('.time-slots');
  if (timeSlotsContainer) {
    timeSlotsContainer.innerHTML = '';

    timeSlots.forEach(slot => {
      if (slot.status === 'empty' || slot.status === 'lunch-break') {
        // Empty slot or lunch break
        timeSlotsContainer.innerHTML += `
          <div class="time-slot ${slot.status === 'lunch-break' ? 'lunch-break' : 'empty'}">
            <div class="time">${slot.time}</div>
            <div class="empty-slot">
              <span>${slot.status === 'lunch-break' ? 'Lunch Break' : 'No appointments scheduled'}</span>
            </div>
          </div>
        `;
      } else {
        // Appointment slot
        timeSlotsContainer.innerHTML += `
          <div class="time-slot">
            <div class="time">${slot.time}</div>
            <div class="appointment-details ${slot.status}">
              <div class="patient-info">
                <div class="patient-avatar">
                  <img src="https://randomuser.me/api/portraits/${slot.patient.includes('Maria') || slot.patient.includes('Sarah') ? 'women' : 'men'}/${Math.floor(Math.random() * 90) + 10}.jpg" alt="${slot.patient}">
                </div>
                <div class="patient-name-details">
                  <h4>${slot.patient}</h4>
                  <p>${slot.reason}</p>
                </div>
              </div>
              <div class="appointment-type">
                <span class="type-badge ${slot.type}">${slot.type.charAt(0).toUpperCase() + slot.type.slice(1)} ${slot.type === 'video' ? 'Call' : slot.type === 'chat' ? 'Consultation' : 'Call'}</span>
              </div>
              <div class="appointment-status">
                <span class="status-badge ${slot.status}">${slot.status === 'completed' ? 'Completed' : slot.status === 'current' ? 'Starting in 5 min' : 'Upcoming'}</span>
              </div>
              <div class="appointment-actions">
                ${slot.status === 'completed' ? 
                  `<button class="btn secondary small">View Notes</button>` : 
                  `<button class="btn ${slot.status === 'current' ? 'primary' : 'secondary'} small start-session-btn" data-type="${slot.type}" data-patient="${slot.patient}">
                    ${slot.status === 'current' ? 'Start Session' : 'View Medical History'}
                  </button>
                  ${slot.status === 'current' ? '<button class="btn secondary small">View Medical History</button>' : ''}`
                }
              </div>
            </div>
          </div>
        `;
      }
    });
  }
}

function setupAppointmentActions() {
  // Start session buttons
  const startSessionBtns = document.querySelectorAll('.start-session-btn');
  startSessionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const sessionType = this.getAttribute('data-type');
      const patientName = this.getAttribute('data-patient') || 
                          this.closest('.appointment-details')?.querySelector('h4')?.textContent || 
                          this.closest('.appointment-card')?.querySelector('h4')?.textContent;

      if (patientName) {
        switch (sessionType) {
          case 'video':
            startVideoCall(patientName);
            break;
          case 'chat':
            startChat(patientName);
            break;
          case 'voice':
            startVoiceCall(patientName);
            break;
          default:
            startSession(patientName);
        }
      } else {
        console.error('Patient name not found');
      }
    });
  });

  // Quick action buttons
  const quickActionButtons = document.querySelectorAll('.quick-action-icon');
  quickActionButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();

      const appointmentCard = this.closest('.appointment-card') || this.closest('.appointment-details');
      const patientName = this.getAttribute('data-patient') || appointmentCard?.querySelector('h4')?.textContent;

      if (patientName) {
        if (this.classList.contains('video')) {
          startVideoCall(patientName);
        } else if (this.classList.contains('chat')) {
          startChat(patientName);
        } else if (this.classList.contains('call')) {
          startVoiceCall(patientName);
        } else if (this.classList.contains('reschedule')) {
          showRescheduleInterface(patientName);
        } else if (this.classList.contains('history')) {
          viewMedicalHistory(patientName);
        }
      } else {
        console.error('Patient name not found');
      }
    });
  });
}

function startSession(patientName) {
  // Default to video call if no specific type is specified
  startVideoCall(patientName);
}

function startChat(patientName) {
  // Create or open chat window
  openMessageConversation(patientName);
  
  // Show success toast
  showToast(`Started chat with ${patientName}`);
}

function startVideoCall(patientName) {
  // Create a video call modal
  const modal = document.createElement('div');
  modal.className = 'video-call-modal';
  modal.innerHTML = `
    <div class="video-call-container">
      <div class="video-call-header">
        <h3>Video Call with ${patientName}</h3>
        <button class="close-video-call"><i class="fas fa-times"></i></button>
        <div class="call-timer">00:00</div>
      </div>
      <div class="video-main">
        <div class="video-large">
          <div class="video-placeholder">
            <i class="fas fa-user"></i>
            <p>Connecting to ${patientName}...</p>
          </div>
        </div>
        <div class="video-small">
          <div class="video-placeholder self-video">
            <i class="fas fa-user-md"></i>
            <p>You</p>
          </div>
        </div>
      </div>
      <div class="call-status-container">
        <div class="call-status-indicator connecting">
          <div class="call-spinner"></div>
          <span>Connecting...</span>
        </div>
      </div>
      <div class="video-controls">
        <button class="control-btn mute-btn" title="Mute"><i class="fas fa-microphone"></i></button>
        <button class="control-btn video-off-btn" title="Turn off camera"><i class="fas fa-video"></i></button>
        <button class="control-btn screen-share-btn" title="Share screen"><i class="fas fa-desktop"></i></button>
        <button class="control-btn end-call" title="End call"><i class="fas fa-phone-slash"></i></button>
      </div>
    </div>
  `;

  // Add to body
  document.body.appendChild(modal);

  // Add event listeners
  const closeBtn = modal.querySelector('.close-video-call');
  const endCallBtn = modal.querySelector('.end-call');
  const controlBtns = modal.querySelectorAll('.control-btn:not(.end-call)');

  // Close button
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  // End call button
  endCallBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
    showToast(`Call with ${patientName} ended`);
  });

  // Control buttons (mute, video off, screen share)
  controlBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');

      // Update icon if necessary
      const icon = this.querySelector('i');
      if (this.classList.contains('mute-btn')) {
        icon.className = this.classList.contains('active') ? 'fas fa-microphone-slash' : 'fas fa-microphone';
        showToast(this.classList.contains('active') ? 'Microphone muted' : 'Microphone unmuted');
      } else if (this.classList.contains('video-off-btn')) {
        icon.className = this.classList.contains('active') ? 'fas fa-video-slash' : 'fas fa-video';
        showToast(this.classList.contains('active') ? 'Camera turned off' : 'Camera turned on');
      } else if (this.classList.contains('screen-share-btn')) {
        showToast(this.classList.contains('active') ? 'Screen sharing started' : 'Screen sharing stopped');
      }
    });
  });

  // Simulate connection establishment
  setTimeout(() => {
    // Update status indicator
    const statusIndicator = modal.querySelector('.call-status-indicator');
    if (statusIndicator) {
      statusIndicator.classList.remove('connecting');
      statusIndicator.classList.add('connected');
      statusIndicator.innerHTML = '<span>Connected</span>';
    }
    
    // Update video placeholder with patient avatar
    const videoPlaceholder = modal.querySelector('.video-large .video-placeholder');
    if (videoPlaceholder) {
      // Generate avatar based on patient name
      const avatarNumber = Math.abs(patientName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 99);
      const gender = ['Emily', 'Sarah', 'Lisa', 'Maria', 'Amy', 'Karen', 'Linda', 'Patricia', 'Susan', 'Michelle'].includes(patientName.split(' ')[0]) ? 'women' : 'men';
      
      videoPlaceholder.innerHTML = `
        <img src="https://randomuser.me/api/portraits/${gender}/${avatarNumber}.jpg" 
             alt="${patientName}" style="width: 100%; height: 100%; object-fit: cover;">
      `;
    }
    
    // Start call timer
    let seconds = 0;
    const timerElement = modal.querySelector('.call-timer');
    const timer = setInterval(() => {
      seconds++;
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }, 1000);
    
    // Update doctor video (self)
    const selfVideo = modal.querySelector('.video-small .video-placeholder');
    if (selfVideo) {
      selfVideo.innerHTML = `
        <img src="https://randomuser.me/api/portraits/men/32.jpg" 
             alt="Doctor" style="width: 100%; height: 100%; object-fit: cover;">
      `;
    }
    
    // Add cleanup for timer
    closeBtn.addEventListener('click', () => clearInterval(timer));
    endCallBtn.addEventListener('click', () => clearInterval(timer));
    
    // Show toast notification
    showToast(`Connected to ${patientName}`);
  }, 2000);
}

function startVoiceCall(patientName) {
  // Generate unique but consistent number for avatar
  const avatarNumber = Math.abs(patientName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 99);
  const gender = ['Emily', 'Sarah', 'Lisa', 'Maria', 'Amy', 'Karen', 'Linda', 'Patricia', 'Susan', 'Michelle'].includes(patientName.split(' ')[0]) ? 'women' : 'men';
  const patientAvatar = `https://randomuser.me/api/portraits/${gender}/${avatarNumber}.jpg`;

  // Create voice call modal
  const modal = document.createElement('div');
  modal.className = 'voice-call-modal';
  modal.id = 'voice-call-modal';
  modal.innerHTML = `
    <div class="voice-call-container">
      <div class="voice-call-header">
        <h3>Voice Call</h3>
        <button class="close-voice-call"><i class="fas fa-times"></i></button>
      </div>
      <div class="voice-call-content">
        <div class="doctor-avatar large">
          <img src="${patientAvatar}" alt="${patientName}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
        </div>
        <div class="doctor-name">${patientName}</div>
        <div class="call-status">Calling...</div>
        <div class="audio-visualizer">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div class="call-duration">00:00</div>
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

  // Add event listeners
  const closeBtn = modal.querySelector('.close-voice-call');
  const endCallBtn = modal.querySelector('.end-call');
  const controlBtns = modal.querySelectorAll('.control-btn:not(.end-call)');

  // Close button
  closeBtn.addEventListener('click', () => {
    // Show confirmation dialog
    if (confirm("End the call with " + patientName + "?")) {
      document.body.removeChild(modal);
    }
  });

  // End call button
  endCallBtn.addEventListener('click', () => {
    // Show confirmation dialog
    if (confirm("End the call with " + patientName + "?")) {
      document.body.removeChild(modal);
      showToast(`Call with ${patientName} ended`);
    }
  });

  // Control buttons (mute, speaker)
  controlBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');

      // Update icon if necessary
      const icon = this.querySelector('i');
      if (this.classList.contains('mute-btn')) {
        icon.className = this.classList.contains('active') ? 'fas fa-microphone-slash' : 'fas fa-microphone';
        showToast(this.classList.contains('active') ? "Microphone muted" : "Microphone unmuted");
      } else if (this.classList.contains('speaker-btn')) {
        icon.className = this.classList.contains('active') ? 'fas fa-volume-mute' : 'fas fa-volume-up';
        showToast(this.classList.contains('active') ? "Speaker off" : "Speaker on");
      }
    });
  });

  // Add ringing sounds
  const ringingSound = document.createElement('audio');
  ringingSound.src = 'https://assets.mixkit.co/active_storage/sfx/951/951-preview.mp3';
  ringingSound.loop = true;
  ringingSound.volume = 0.3;
  ringingSound.play();

  // Simulate voice activity with audio visualizer
  function startVisualizer() {
    const bars = modal.querySelectorAll('.audio-visualizer .bar');

    // Animate bars randomly to simulate audio activity
    function animateBars() {
      bars.forEach(bar => {
        const height = Math.floor(Math.random() * 20) + 5;
        bar.style.height = `${height}px`;
      });
    }

    // Start animation
    const visualizerInterval = setInterval(animateBars, 100);

    // Return cleanup function
    return () => clearInterval(visualizerInterval);
  }

  // Simulate connecting after a delay
  setTimeout(() => {
    // Stop ringing
    ringingSound.pause();

    const callStatus = modal.querySelector('.call-status');
    if (callStatus) {
      callStatus.textContent = 'Connected';
      callStatus.style.color = '#28a745';
    }

    // Show connected notification
    showToast(`Connected to ${patientName}`);

    // Start audio visualizer
    const stopVisualizer = startVisualizer();

    // Start the call timer
    let seconds = 0;
    const durationElement = modal.querySelector('.call-duration');
    const timer = setInterval(() => {
      seconds++;
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      durationElement.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }, 1000);

    // Clean up the timer and visualizer when call ends
    const cleanup = () => {
      clearInterval(timer);
      stopVisualizer();
    };

    closeBtn.addEventListener('click', cleanup);
    endCallBtn.addEventListener('click', cleanup);
  }, 3000);
}

function viewMedicalHistory(patientName) {
  // Simulate opening medical history
  alert(`Viewing medical history for ${patientName}`);
}

function showRescheduleInterface(patientName) {
  // Create a modal for rescheduling
  const modal = document.createElement('div');
  modal.className = 'reschedule-modal';
  modal.innerHTML = `
    <div class="reschedule-container">
      <div class="reschedule-header">
        <h3>Reschedule Appointment</h3>
        <button class="close-reschedule"><i class="fas fa-times"></i></button>
      </div>
      <div class="reschedule-body">
        <p>Select a new date and time for ${patientName}'s appointment.</p>
        <div class="reschedule-form">
          <div class="form-group">
            <label for="reschedule-date">Date</label>
            <input type="date" id="reschedule-date" value="${getTomorrowDate()}">
          </div>
          <div class="form-group">
            <label for="reschedule-time">Time</label>
            <select id="reschedule-time">
              <option value="9:00">9:00 AM</option>
              <option value="9:30">9:30 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="10:30">10:30 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="11:30">11:30 AM</option>
              <option value="1:00">1:00 PM</option>
              <option value="1:30">1:30 PM</option>
              <option value="2:00">2:00 PM</option>
              <option value="2:30">2:30 PM</option>
              <option value="3:00">3:00 PM</option>
              <option value="3:30">3:30 PM</option>
              <option value="4:00">4:00 PM</option>
              <option value="4:30">4:30 PM</option>
            </select>
          </div>
          <div class="form-group">
            <label for="reschedule-notes">Notes</label>
            <textarea id="reschedule-notes" placeholder="Optional notes about rescheduling"></textarea>
          </div>
        </div>
      </div>
      <div class="reschedule-footer">
        <button class="btn secondary" id="cancel-reschedule">Cancel</button>
        <button class="btn primary" id="confirm-reschedule">Confirm Reschedule</button>
      </div>
    </div>
  `;

  // Add to body
  document.body.appendChild(modal);

  // Add event listeners
  const closeBtn = modal.querySelector('.close-reschedule');
  const cancelBtn = modal.querySelector('#cancel-reschedule');
  const confirmBtn = modal.querySelector('#confirm-reschedule');

  const closeModal = () => {
    document.body.removeChild(modal);
  };

  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);

  confirmBtn.addEventListener('click', () => {
    const date = document.getElementById('reschedule-date').value;
    const time = document.getElementById('reschedule-time').value;
    const notes = document.getElementById('reschedule-notes').value;

    // Simulate rescheduling
    showToast(`Appointment with ${patientName} rescheduled to ${date} at ${time}`);
    closeModal();
  });
}

function getTomorrowDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0]; // Format as YYYY-MM-DD
}

function setupHomeDashboardFeatures() {
  // Create dashboard widgets for homepage
  createDashboardWidgets();

  // Set up quick actions for messages
  setupQuickMessageActions();

  // Set up quick actions for appointments
  setupQuickAppointmentActions();
}

function createDashboardWidgets() {
  // Get the dashboard sections container
  const dashboardSections = document.querySelector('.dashboard-sections');
  if (!dashboardSections) return;

  // Create a new widget for immediate actions
  const quickActionsWidget = document.createElement('div');
  quickActionsWidget.className = 'section quick-actions';
  quickActionsWidget.innerHTML = `
    <div class="section-header">
      <h3>Quick Actions</h3>
    </div>
    <div class="quick-actions-grid">
      <button class="quick-action-btn" data-action="start-next-appointment">
        <i class="fas fa-video"></i>
        <span>Start Next Appointment</span>
      </button>
      <button class="quick-action-btn" data-action="respond-messages">
        <i class="fas fa-comment-dots"></i>
        <span>Respond to Messages</span>
      </button>
      <button class="quick-action-btn" data-action="view-todays-schedule">
        <i class="fas fa-calendar-day"></i>
        <span>Today's Schedule</span>
      </button>
      <button class="quick-action-btn" data-action="patient-records">
        <i class="fas fa-file-medical"></i>
        <span>Patient Records</span>
      </button>
    </div>
  `;

  // Insert the widget at the beginning
  if (dashboardSections.firstChild) {
    dashboardSections.insertBefore(quickActionsWidget, dashboardSections.firstChild);
  } else {
    dashboardSections.appendChild(quickActionsWidget);
  }

  // Set up event listeners for quick action buttons
  setupQuickActionButtons();
}

function setupQuickActionButtons() {
  const quickActionBtns = document.querySelectorAll('.quick-action-btn');
  quickActionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const action = this.getAttribute('data-action');

      switch(action) {
        case 'start-next-appointment':
          startNextAppointment();
          break;
        case 'respond-messages':
          showMessagingInterface();
          break;
        case 'view-todays-schedule':
          showTodaysSchedule();
          break;
        case 'patient-records':
          showPatientRecords();
          break;
      }
    });
  });
}

function startNextAppointment() {
  // Find the next appointment
  const nextAppointment = document.querySelector('.appointment-card:not(.completed)');
  if (nextAppointment) {
    const patientName = nextAppointment.querySelector('.appointment-details h4').textContent;
    const startBtn = nextAppointment.querySelector('.btn.primary');

    if (startBtn) {
      // Trigger the button click
      startBtn.click();
    } else {
      startSession(patientName);
    }
  } else {
    alert("No upcoming appointments found.");
  }
}

function showMessagingInterface() {
  // Switch to messages tab
  const messagesTab = document.querySelector('.sidebar-menu a[data-tab="messages"]');
  if (messagesTab) {
    messagesTab.click();

    // Auto-open the first unread message
    setTimeout(() => {
      const unreadMessage = document.querySelector('.message-item.unread');
      if (unreadMessage) {
        unreadMessage.click();
      }
    }, 300);
  }
}

function showTodaysSchedule() {
  // Switch to schedule tab
  const scheduleTab = document.querySelector('.sidebar-menu a[data-tab="schedule"]');
  if (scheduleTab) {
    scheduleTab.click();
  }
}

function showPatientRecords() {
  // Switch to patients tab
  const patientsTab = document.querySelector('.sidebar-menu a[data-tab="patients"]');
  if (patientsTab) {
    patientsTab.click();
  }
}

function setupQuickMessageActions() {
  // Add floating action buttons to message previews
  const messagePreviews = document.querySelectorAll('.message-preview');

  messagePreviews.forEach(preview => {
    // Skip if quick actions already added
    if (preview.querySelector('.message-quick-actions')) return;

    const patientName = preview.getAttribute('data-patient-name') || 
                         preview.querySelector('h4')?.textContent.split(' ')[0];
    if (!patientName) return;

    const messageActions = document.createElement('div');
    messageActions.className = 'message-quick-actions';
    messageActions.innerHTML = `
      <button class="action-btn reply-btn" title="Quick Reply" data-patient="${patientName}">
        <i class="fas fa-reply"></i>
      </button>
      <button class="action-btn call-btn" title="Call Patient" data-patient="${patientName}">
        <i class="fas fa-phone"></i>
      </button>
      <button class="action-btn video-btn" title="Video Call" data-patient="${patientName}">
        <i class="fas fa-video"></i>
      </button>
    `;

    preview.appendChild(messageActions);
  });
}

function quickReplyToMessage(patientName) {
  // Switch to messages tab
  const messagesTab = document.querySelector('.sidebar-menu a[data-tab="messages"]');
  if (messagesTab) {
    messagesTab.click();

    // Find and click on the message from this patient
    setTimeout(() => {
      const messageItems = document.querySelectorAll('.message-item');
      let found = false;
      
      for (const item of messageItems) {
        const itemName = item.querySelector('h4').textContent;
        if (itemName.includes(patientName)) {
          item.click();
          found = true;

          // Focus the message input
          setTimeout(() => {
            const messageInput = document.querySelector('.conversation-input textarea');
            if (messageInput) {
              messageInput.focus();
            }
          }, 300);

          break;
        }
      }
      
      // If not found, create a new conversation
      if (!found) {
        createNewConversation(patientName);
      }
    }, 300);
  }
}

function setupQuickAppointmentActions() {
  // This is handled by the setupAppointmentActions function
}

// Add responsive design improvements
window.addEventListener('resize', adjustForMobileView);

function adjustForMobileView() {
  const isMobile = window.innerWidth < 768;

  // Adjust sidebar display for mobile
  const doctorSidebar = document.querySelector('.doctor-sidebar');
  const dashboardContent = document.querySelector('.dashboard-content');

  if (isMobile) {
    // For mobile view, make sidebar collapsible
    if (doctorSidebar && !doctorSidebar.querySelector('.sidebar-toggle')) {
      const toggleButton = document.createElement('button');
      toggleButton.className = 'sidebar-toggle';
      toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
      doctorSidebar.insertBefore(toggleButton, doctorSidebar.firstChild);

      toggleButton.addEventListener('click', function() {
        doctorSidebar.classList.toggle('collapsed');
      });

      // Initially collapse sidebar on mobile
      doctorSidebar.classList.add('collapsed');
    }
  } else {
    // For desktop view, ensure sidebar is expanded
    if (doctorSidebar) {
      doctorSidebar.classList.remove('collapsed');
      const toggleButton = doctorSidebar.querySelector('.sidebar-toggle');
      if (toggleButton) {
        toggleButton.remove();
      }
    }
  }

  // Adjust chat layout for mobile
  const messagesContainer = document.querySelector('.messages-container');
  if (messagesContainer) {
    if (isMobile) {
      messagesContainer.classList.add('mobile-view');
    } else {
      messagesContainer.classList.remove('mobile-view');
    }
  }
}

// Call on initial load
adjustForMobileView();

// Add CSS to handle mobile responsiveness dynamically
const responsiveStyles = document.createElement('style');
responsiveStyles.textContent = `
  @media (max-width: 768px) {
    .doctor-dashboard {
      flex-direction: column;
    }

    .doctor-sidebar {
      flex: 0 0 auto;
      transition: all 0.3s ease;
    }

    .doctor-sidebar.collapsed {
      max-height: 60px;
      overflow: hidden;
    }

    .sidebar-toggle {
      position: absolute;
      top: 15px;
      right: 15px;
      background: var(--primary-color);
      color: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
    }

    .messages-container.mobile-view {
      flex-direction: column;
      height: auto;
    }

    .messages-container.mobile-view .messages-sidebar {
      height: 300px;
    }

    .time-slot {
      flex-direction: column;
    }

    .time-slot .time {
      flex: 0 0 auto;
      width: 100%;
      text-align: left;
      padding-bottom: 5px;
    }

    .appointment-details {
      flex-direction: column;
    }

    .patient-info {
      flex-direction: column;
      align-items: flex-start;
    }

    .quick-appointment-actions {
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
    }
  }
`;
document.head.appendChild(responsiveStyles);

// Helper function for showing toast messages
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fadeOut');
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 500);
  }, 2500);
}
