const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve static files from the root directory
app.use(express.static(__dirname));

// Create default directories if they don't exist
try {
  if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
  }
  
  console.log('Directory structure initialized');
} catch (err) {
  console.error('Failed to create directories:', err);
}

// Sample doctor data for API
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
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
    specialization: "Dermatology",
    experience: "8 years",
    rating: 4.7,
    availableToday: true,
    consultationType: ["video", "chat"],
    price: "$90",
    availableTimeSlots: ["10:00 AM", "01:00 PM", "03:30 PM"],
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  // More doctors would be here in actual implementation
];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Special route handlers for main pages
const pages = ['index.html', 'consultation.html', 'learning.html', 'community.html', 'ai-chat.html', 'about.html'];

pages.forEach(page => {
  const route = page === 'index.html' ? '/' : `/${page.replace('.html', '')}`;
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, page));
  });
});


// API routes
app.get('/api/doctors', (req, res) => {
  res.json(doctorsData);
});

app.post('/api/book-appointment', (req, res) => {
  const { doctorId, date, time, type, symptoms, patientInfo } = req.body;

  // In a real app, this would store the appointment in a database
  console.log('Booking appointment:', { doctorId, date, time, type, symptoms, patientInfo });

  // Simulating successful booking
  res.json({
    success: true,
    message: 'Appointment booked successfully',
    appointmentId: Math.floor(Math.random() * 1000000),
    doctor: doctorsData.find(d => d.id == doctorId)
  });
});

app.post('/api/medical-query', (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ 
      success: false, 
      message: 'Query is required' 
    });
  }

  try {
    // Simplified response system without database
    // Provide a generic response for medical queries
    return res.json({
      success: true,
      data: {
        response: "I understand you're looking for information about " + query + ". For accurate medical information, it's best to consult with a healthcare professional. Would you like to schedule a consultation with one of our doctors?",
        suggestions: [
          "Book a consultation",
          "Learn more about symptoms",
          "Explore health resources"
        ]
      }
    });
  } catch (error) {
    console.error('Error processing medical query:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your query. Please try again.'
    });
  }
});

// Route all other requests to index.html
app.get('*', (req, res) => {
  // Check if the requested file exists
  const filePath = path.join(__dirname, req.url);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File doesn't exist, send index.html
      res.sendFile(path.join(__dirname, 'index.html'));
    } else {
      // File exists, serve it
      res.sendFile(filePath);
    }
  });
});

// Start the server
app.listen(3000, '127.0.0.1', () => {
  console.log(`Server running on port ${3000}`);
  console.log(`Visit http://localhost:${3000} in your browser`);
  console.log('Available pages:');
  pages.forEach(page => {
    console.log(`- ${page}`);
  });
});