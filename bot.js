
// Advanced Medical AI Bot with expanded knowledge base

// Define comprehensive medical data for responses
const medicalData = {
  medicalConditionsDatabase: {
    // Existing data from medicalData.js will be merged here
    'diabetes': {
      title: 'Diabetes',
      description: 'Diabetes is a disease that occurs when your blood glucose is too high. Blood glucose is your main source of energy and comes from the food you eat.',
      symptoms: ['Increased thirst', 'Frequent urination', 'Extreme hunger', 'Unexplained weight loss', 'Fatigue', 'Irritability', 'Blurred vision'],
      treatments: ['Insulin therapy', 'Oral medications', 'Healthy diet', 'Regular physical activity', 'Blood sugar monitoring']
    },
    'hypertension': {
      title: 'Hypertension (High Blood Pressure)',
      description: 'High blood pressure is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems.',
      symptoms: ['Headaches', 'Shortness of breath', 'Nosebleeds', 'Often asymptomatic ("silent killer")'],
      treatments: ['Diuretics', 'ACE inhibitors', 'Calcium channel blockers', 'Low-sodium diet', 'Regular exercise', 'Limiting alcohol', 'Stress reduction']
    },
    // More conditions will be loaded dynamically
  },
  
  // Other database sections remain similar to existing structure
  medicationsDatabase: {
    // Base medications data
    'aspirin': {
      title: 'Aspirin',
      description: 'Aspirin is a nonsteroidal anti-inflammatory drug (NSAID) used to treat pain, fever, and inflammation.',
      dosage: 'Typical dosage ranges from 81mg to 325mg, depending on the condition being treated.',
      sideEffects: ['Stomach upset', 'Heartburn', 'Nausea', 'Stomach bleeding', 'Allergic reactions'],
      warnings: 'Should not be given to children or teenagers with viral illnesses due to risk of Reye\'s syndrome.'
    },
    // More medications will be loaded dynamically
  },
  
  symptomsDatabase: {
    // Base symptoms data
    'headache': {
      name: 'Headache',
      description: 'Pain in any region of the head.',
      potential_causes: ['Tension', 'Migraine', 'Cluster headache', 'Sinusitis', 'High blood pressure', 'Dehydration'],
      red_flags: ['Sudden severe headache', 'Headache with fever and stiff neck', 'Headache after head injury']
    },
    // More symptoms will be loaded dynamically
  },
  
  // Add new database sections for comprehensive information
  nutritionDatabase: {},
  proceduresDatabase: {},
  preventiveHealthDatabase: {},
  emergencyGuidelinesDatabase: {},
  mentalHealthDatabase: {},
  pediatricHealthDatabase: {},
  elderlyHealthDatabase: {},
  womensHealthDatabase: {},
  mensHealthDatabase: {},
  alternativeMedicineDatabase: {}
};

// Dynamic data loading from medicalData.js
try {
  // Load comprehensive data if available
  if (typeof window !== 'undefined' && window.comprehensiveData) {
    // Browser environment
    Object.assign(medicalData, window.comprehensiveData);
  } else if (typeof require !== 'undefined') {
    // Node.js environment
    try {
      const externalData = require('./medicalData.js');
      // Deep merge the data
      for (const category in externalData) {
        if (medicalData[category]) {
          Object.assign(medicalData[category], externalData[category]);
        } else {
          medicalData[category] = externalData[category];
        }
      }
      console.log('Loaded extended medical data successfully');
    } catch (e) {
      console.warn('Could not load medicalData.js:', e.message);
    }
  }
} catch (e) {
  console.warn('Error loading additional data:', e.message);
}

// Add data from API or other sources if available (in a real production environment)
// This would be a placeholder for dynamic API integration
async function enrichDataFromAPI() {
  // This would connect to a medical API in a production environment
  // For now, we'll just log the intention
  console.log('Enriching data from API would happen here in production');
  return true;
}

// Advanced key term extraction using NLP-like techniques
function extractKeyTerms(query) {
  // Medical-specific stopwords (common words that don't help with search)
  const stopWords = [
    'what', 'is', 'are', 'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 
    'to', 'for', 'with', 'about', 'of', 'by', 'how', 'why', 'when', 'where', 'who', 
    'which', 'can', 'could', 'would', 'should', 'do', 'does', 'did', 'have', 'has', 
    'had', 'symptoms', 'treatment', 'cause', 'causes', 'tell', 'me', 'information',
    'please', 'help', 'know', 'need', 'want', 'looking', 'search', 'find'
  ];

  // Clean the query
  let cleanedQuery = query.toLowerCase()
    .replace(/[.,?!;:()"']/g, '') // Remove punctuation
    .split(' ');
  
  // Remove stopwords and single characters
  cleanedQuery = cleanedQuery.filter(word => !stopWords.includes(word) && word.length > 1);
  
  // Extract medical phrases (e.g., "heart attack" as one term)
  const medicalPhrases = [];
  for (let i = 0; i < cleanedQuery.length - 1; i++) {
    const possiblePhrase = cleanedQuery[i] + ' ' + cleanedQuery[i + 1];
    // Check if this is a known medical phrase
    for (const category in medicalData) {
      for (const key in medicalData[category]) {
        if (key === possiblePhrase || 
            (medicalData[category][key].title && 
             medicalData[category][key].title.toLowerCase().includes(possiblePhrase))) {
          medicalPhrases.push(possiblePhrase);
          // Remove the individual words as they're now part of a phrase
          cleanedQuery[i] = '';
          cleanedQuery[i + 1] = '';
        }
      }
    }
  }
  
  // Filter out empty strings after phrase extraction
  cleanedQuery = cleanedQuery.filter(word => word !== '');
  
  // Combine individual terms and phrases
  return [...new Set([...medicalPhrases, ...cleanedQuery])];
}

// Vector-like similarity for fuzzy matching
function calculateSimilarity(term1, term2) {
  term1 = term1.toLowerCase();
  term2 = term2.toLowerCase();
  
  if (term1 === term2) return 1.0;  // Exact match
  if (term1.includes(term2) || term2.includes(term1)) return 0.8;  // Substring match
  
  // Simple character-based similarity (Levenshtein distance would be better)
  let matches = 0;
  const minLength = Math.min(term1.length, term2.length);
  for (let i = 0; i < minLength; i++) {
    if (term1[i] === term2[i]) matches++;
  }
  
  return matches / Math.max(term1.length, term2.length);
}

// Enhanced database search with intelligent matching
async function searchDatabase(query) {
  try {
    // First, check for special queries
    if (isGreeting(query)) {
      return generateGreetingResponse();
    }
    
    if (isThanks(query)) {
      return generateThanksResponse();
    }
    
    // Extract key terms from the query
    const keyTerms = extractKeyTerms(query);
    console.log('Extracted key terms:', keyTerms);
    
    if (keyTerms.length === 0) {
      return generateNoTermsResponse(query);
    }
    
    // Structured search results by category
    const searchResults = {
      conditions: [],
      medications: [],
      symptoms: [],
      treatments: [],
      other: []
    };
    
    // Search through each database category
    for (const keyTerm of keyTerms) {
      // 1. Exact matches
      const exactMatches = findExactMatches(keyTerm);
      
      // 2. If no exact matches, try fuzzy matching
      if (Object.values(exactMatches).every(arr => arr.length === 0)) {
        const fuzzyMatches = findFuzzyMatches(keyTerm);
        mergeResults(searchResults, fuzzyMatches);
      } else {
        mergeResults(searchResults, exactMatches);
      }
    }
    
    // 3. Check for query context to prioritize results
    const contextualizedResults = applyQueryContext(query, searchResults);
    
    // 4. Generate response from the best matches
    return generateResponse(query, contextualizedResults);
  } catch (error) {
    console.error('Error in search:', error);
    return {
      success: false,
      data: {
        title: 'System Error',
        description: 'I encountered an error while processing your request. Please try again with a different question.'
      }
    };
  }
}

// Check if query is a greeting
function isGreeting(query) {
  const greetings = ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'howdy'];
  return greetings.some(greeting => query.toLowerCase().startsWith(greeting));
}

// Check if query is a thank you
function isThanks(query) {
  return query.toLowerCase().match(/(thank|thanks).*/);
}

// Generate greeting response
function generateGreetingResponse() {
  return {
    success: true,
    data: {
      title: 'Hello!',
      description: 'I\'m MediBot, your medical information assistant. I can provide educational information about medical conditions, medications, symptoms, treatments, and more. How can I help you today?',
      suggestions: [
        'What is diabetes?',
        'Tell me about hypertension',
        'What causes headaches?',
        'Side effects of aspirin',
        'How to prevent heart disease?'
      ]
    }
  };
}

// Generate thanks response
function generateThanksResponse() {
  return {
    success: true,
    data: {
      title: 'You\'re Welcome!',
      description: 'I\'m glad I could help. Feel free to ask if you have any more health-related questions.',
      suggestions: [
        'What is diabetes?',
        'Tell me about hypertension',
        'What causes headaches?',
        'Healthy diet recommendations'
      ]
    }
  };
}

// Generate response when no terms are found
function generateNoTermsResponse(query) {
  return {
    success: false,
    data: {
      title: 'I need more information',
      description: `I couldn't identify specific medical terms in your query: "${query}". Could you please provide more details or try asking about a specific medical condition, medication, or symptom?`,
      suggestions: [
        'What is diabetes?',
        'Tell me about hypertension',
        'What causes headaches?',
        'Side effects of aspirin'
      ]
    }
  };
}

// Find exact matches across all database categories
function findExactMatches(term) {
  const results = {
    conditions: [],
    medications: [],
    symptoms: [],
    other: []
  };
  
  // Check medical conditions
  for (const key in medicalData.medicalConditionsDatabase) {
    if (key === term || (medicalData.medicalConditionsDatabase[key].title && 
                          medicalData.medicalConditionsDatabase[key].title.toLowerCase() === term)) {
      results.conditions.push({
        key: key,
        data: medicalData.medicalConditionsDatabase[key],
        matchScore: 1.0
      });
    }
  }
  
  // Check medications
  for (const key in medicalData.medicationsDatabase) {
    if (key === term || (medicalData.medicationsDatabase[key].title && 
                          medicalData.medicationsDatabase[key].title.toLowerCase() === term)) {
      results.medications.push({
        key: key,
        data: medicalData.medicationsDatabase[key],
        matchScore: 1.0
      });
    }
  }
  
  // Check symptoms
  for (const key in medicalData.symptomsDatabase) {
    if (key === term || (medicalData.symptomsDatabase[key].name && 
                          medicalData.symptomsDatabase[key].name.toLowerCase() === term)) {
      results.symptoms.push({
        key: key,
        data: medicalData.symptomsDatabase[key],
        matchScore: 1.0
      });
    }
  }
  
  // Check other databases
  const otherDatabases = [
    'nutritionDatabase', 'proceduresDatabase', 'preventiveHealthDatabase', 
    'emergencyGuidelinesDatabase', 'mentalHealthDatabase'
  ];
  
  for (const dbName of otherDatabases) {
    if (medicalData[dbName]) {
      for (const key in medicalData[dbName]) {
        if (key === term || (medicalData[dbName][key].title && 
                              medicalData[dbName][key].title.toLowerCase() === term)) {
          results.other.push({
            key: key,
            data: medicalData[dbName][key],
            category: dbName,
            matchScore: 1.0
          });
        }
      }
    }
  }
  
  return results;
}

// Find fuzzy matches when exact matches fail
function findFuzzyMatches(term) {
  const results = {
    conditions: [],
    medications: [],
    symptoms: [],
    other: []
  };
  const similarityThreshold = 0.6;  // Minimum similarity score to consider a match
  
  // Check medical conditions with fuzzy matching
  for (const key in medicalData.medicalConditionsDatabase) {
    const condition = medicalData.medicalConditionsDatabase[key];
    let maxScore = calculateSimilarity(key, term);
    
    // Also check title
    if (condition.title) {
      const titleScore = calculateSimilarity(condition.title.toLowerCase(), term);
      maxScore = Math.max(maxScore, titleScore);
    }
    
    // Check description for term (lower weight)
    if (condition.description && condition.description.toLowerCase().includes(term)) {
      maxScore = Math.max(maxScore, 0.7);
    }
    
    if (maxScore >= similarityThreshold) {
      results.conditions.push({
        key: key,
        data: condition,
        matchScore: maxScore
      });
    }
  }
  
  // Apply same fuzzy matching to medications
  for (const key in medicalData.medicationsDatabase) {
    const medication = medicalData.medicationsDatabase[key];
    let maxScore = calculateSimilarity(key, term);
    
    if (medication.title) {
      const titleScore = calculateSimilarity(medication.title.toLowerCase(), term);
      maxScore = Math.max(maxScore, titleScore);
    }
    
    if (maxScore >= similarityThreshold) {
      results.medications.push({
        key: key,
        data: medication,
        matchScore: maxScore
      });
    }
  }
  
  // Apply same fuzzy matching to symptoms
  for (const key in medicalData.symptomsDatabase) {
    const symptom = medicalData.symptomsDatabase[key];
    let maxScore = calculateSimilarity(key, term);
    
    if (symptom.name) {
      const nameScore = calculateSimilarity(symptom.name.toLowerCase(), term);
      maxScore = Math.max(maxScore, nameScore);
    }
    
    if (maxScore >= similarityThreshold) {
      results.symptoms.push({
        key: key,
        data: symptom,
        matchScore: maxScore
      });
    }
  }
  
  // Check other databases
  const otherDatabases = [
    'nutritionDatabase', 'proceduresDatabase', 'preventiveHealthDatabase', 
    'emergencyGuidelinesDatabase', 'mentalHealthDatabase'
  ];
  
  for (const dbName of otherDatabases) {
    if (medicalData[dbName]) {
      for (const key in medicalData[dbName]) {
        const entry = medicalData[dbName][key];
        let maxScore = calculateSimilarity(key, term);
        
        if (entry.title) {
          const titleScore = calculateSimilarity(entry.title.toLowerCase(), term);
          maxScore = Math.max(maxScore, titleScore);
        }
        
        if (maxScore >= similarityThreshold) {
          results.other.push({
            key: key,
            data: entry,
            category: dbName,
            matchScore: maxScore
          });
        }
      }
    }
  }
  
  // Sort results by match score
  results.conditions.sort((a, b) => b.matchScore - a.matchScore);
  results.medications.sort((a, b) => b.matchScore - a.matchScore);
  results.symptoms.sort((a, b) => b.matchScore - a.matchScore);
  results.other.sort((a, b) => b.matchScore - a.matchScore);
  
  return results;
}

// Merge search results, avoiding duplicates
function mergeResults(target, source) {
  for (const category in source) {
    if (!target[category]) continue;
    
    for (const item of source[category]) {
      // Check if this item already exists in the target
      const exists = target[category].some(existing => 
        existing.key === item.key && 
        (existing.category === item.category || (!existing.category && !item.category))
      );
      
      if (!exists) {
        target[category].push(item);
      }
    }
  }
}

// Apply query context to prioritize certain types of results
function applyQueryContext(query, results) {
  const lowerQuery = query.toLowerCase();
  
  // Check for context clues in the query
  const contextClues = {
    symptom: ['symptom', 'feeling', 'pain', 'experiencing', 'suffering'],
    medication: ['medicine', 'drug', 'pill', 'prescription', 'medication', 'take for'],
    treatment: ['treatment', 'cure', 'therapy', 'manage', 'handle', 'deal with'],
    cause: ['cause', 'reason', 'why', 'leads to', 'result in'],
    prevention: ['prevent', 'avoid', 'reduce risk', 'stop', 'protect against']
  };
  
  let primaryContext = null;
  
  // Determine primary context
  for (const context in contextClues) {
    if (contextClues[context].some(clue => lowerQuery.includes(clue))) {
      primaryContext = context;
      break;
    }
  }
  
  // If we detected a primary context, prioritize those results
  if (primaryContext) {
    const contextualizedResults = {...results};
    
    switch (primaryContext) {
      case 'symptom':
        // Move symptom results to the top
        contextualizedResults.symptoms = [...results.symptoms];
        break;
      case 'medication':
        // Move medication results to the top
        contextualizedResults.medications = [...results.medications];
        break;
      case 'treatment':
        // For treatment queries, look for treatment information in conditions
        if (results.conditions.length > 0) {
          for (const condition of results.conditions) {
            if (condition.data.treatments) {
              contextualizedResults.treatments.push({
                key: condition.key,
                data: {
                  title: `Treatment for ${condition.data.title || condition.key}`,
                  description: `Common treatments for ${condition.data.title || condition.key} include:`,
                  list: condition.data.treatments
                },
                matchScore: condition.matchScore
              });
            }
          }
        }
        break;
      case 'cause':
        // For cause queries, look for cause information in symptoms
        if (results.symptoms.length > 0) {
          for (const symptom of results.symptoms) {
            if (symptom.data.potential_causes) {
              contextualizedResults.other.push({
                key: symptom.key,
                data: {
                  title: `Causes of ${symptom.data.name || symptom.key}`,
                  description: `Common causes of ${symptom.data.name || symptom.key} include:`,
                  list: symptom.data.potential_causes
                },
                matchScore: symptom.matchScore
              });
            }
          }
        }
        break;
      case 'prevention':
        // For prevention queries, look for prevention information
        for (const condition of results.conditions) {
          if (condition.data.preventions) {
            contextualizedResults.other.push({
              key: condition.key,
              data: {
                title: `Prevention of ${condition.data.title || condition.key}`,
                description: `Ways to prevent ${condition.data.title || condition.key} include:`,
                list: condition.data.preventions
              },
              matchScore: condition.matchScore
            });
          }
        }
        break;
    }
    
    return contextualizedResults;
  }
  
  return results;
}

// Generate the final response from search results
function generateResponse(query, results) {
  // Check for emergency keywords
  const emergencyKeywords = ['emergency', 'urgent', 'severe pain', 'can\'t breathe', 'suicide', 'dying', 'heart attack', 'stroke'];
  if (emergencyKeywords.some(keyword => query.toLowerCase().includes(keyword))) {
    return {
      success: true,
      data: {
        title: 'Medical Emergency',
        description: 'If you\'re experiencing a medical emergency, please call emergency services (911) immediately. This AI assistant cannot provide emergency medical advice or assistance.',
        isEmergency: true
      }
    };
  }
  
  // Check if we have any results
  const allResults = [
    ...results.conditions, 
    ...results.medications, 
    ...results.symptoms, 
    ...results.treatments,
    ...results.other
  ];
  
  if (allResults.length === 0) {
    return {
      success: false,
      data: {
        title: 'Information Not Found',
        description: 'I couldn\'t find specific information about that in my knowledge base. Here are some topics I can help with:',
        suggestions: [
          'What is diabetes?',
          'Tell me about hypertension',
          'What are the symptoms of asthma?',
          'Side effects of aspirin',
          'How to maintain a healthy diet'
        ]
      }
    };
  }
  
  // Sort all results by match score
  allResults.sort((a, b) => b.matchScore - a.matchScore);
  
  // Take the best match
  const bestMatch = allResults[0];
  
  // Return appropriate response based on the best match
  return {
    success: true,
    data: bestMatch.data
  };
}

// Main function to process user messages
async function processMessage(userMessage) {
  try {
    console.log('Processing message:', userMessage);

    // Check for emergencies
    const emergencyKeywords = ['emergency', 'urgent', 'severe pain', 'can\'t breathe', 'suicide', 'dying', 'heart attack', 'stroke'];
    if (emergencyKeywords.some(keyword => userMessage.toLowerCase().includes(keyword))) {
      return '<p class="red-flags"><strong>IMPORTANT:</strong> If you\'re experiencing a medical emergency, please call emergency services (911) immediately. This AI assistant cannot provide emergency medical advice or assistance.</p>';
    }

    // Try to enrich data from API if needed (in production)
    await enrichDataFromAPI();
    
    // Get response from database search
    const response = await searchDatabase(userMessage);
    
    let botMessage = '';
    
    if (response.success) {
      const data = response.data;
      
      // Format the response based on the type of data
      botMessage = `<h3>${data.title}</h3><p>${data.description}</p>`;
      
      // Add emergency warning if present
      if (data.isEmergency) {
        botMessage = `<div class="emergency-warning">${botMessage}</div>`;
        return botMessage;
      }
      
      // Add symptoms if available
      if (data.symptoms && data.symptoms.length > 0) {
        botMessage += '<h4>Common Symptoms:</h4><ul>';
        data.symptoms.forEach(symptom => {
          botMessage += `<li>${symptom}</li>`;
        });
        botMessage += '</ul>';
      }
      
      // Add specific list if available (used for custom responses)
      if (data.list && data.list.length > 0) {
        botMessage += '<ul>';
        data.list.forEach(item => {
          botMessage += `<li>${item}</li>`;
        });
        botMessage += '</ul>';
      }
      
      // Add treatments if available
      if (data.treatments && data.treatments.length > 0) {
        botMessage += '<h4>Common Treatments:</h4><ul>';
        data.treatments.forEach(treatment => {
          botMessage += `<li>${treatment}</li>`;
        });
        botMessage += '</ul>';
      }
      
      // Add side effects if available
      if (data.sideEffects && data.sideEffects.length > 0) {
        botMessage += '<h4>Side Effects:</h4><ul>';
        data.sideEffects.forEach(effect => {
          botMessage += `<li>${effect}</li>`;
        });
        botMessage += '</ul>';
      }
      
      // Add dosage if available
      if (data.dosage) {
        botMessage += `<h4>Typical Dosage:</h4><p>${data.dosage}</p>`;
      }
      
      // Add warnings if available
      if (data.warnings) {
        botMessage += `<h4>Important Warnings:</h4><p class="red-flags">${data.warnings}</p>`;
      }
      
      // Add potential causes if available
      if (data.potential_causes && data.potential_causes.length > 0) {
        botMessage += '<h4>Potential Causes:</h4><ul>';
        data.potential_causes.forEach(cause => {
          botMessage += `<li>${cause}</li>`;
        });
        botMessage += '</ul>';
      }
      
      // Add red flags if available
      if (data.red_flags && data.red_flags.length > 0) {
        botMessage += '<h4>Warning Signs (Seek Medical Attention):</h4><ul class="red-flags">';
        data.red_flags.forEach(flag => {
          botMessage += `<li>${flag}</li>`;
        });
        botMessage += '</ul>';
      }
      
      // Add suggestions if available
      if (data.suggestions && data.suggestions.length > 0) {
        botMessage += '<div class="suggestions"><p>You might want to know about:</p><div>';
        data.suggestions.forEach(suggestion => {
          botMessage += `<div class="suggestion-chip" data-query="${suggestion}">${suggestion}</div>`;
        });
        botMessage += '</div></div>';
      }
      
      // Add disclaimer
      botMessage += '<p class="disclaimer">Disclaimer: This information is for educational purposes only and not intended as medical advice. Always consult with a healthcare professional for diagnosis and treatment.</p>';
    } else {
      // Fallback response
      botMessage = `<h3>${response.data.title}</h3><p>${response.data.description}</p>`;
      
      if (response.data.suggestions && response.data.suggestions.length > 0) {
        botMessage += '<div class="suggestions"><div>';
        response.data.suggestions.forEach(suggestion => {
          botMessage += `<div class="suggestion-chip" data-query="${suggestion}">${suggestion}</div>`;
        });
        botMessage += '</div></div>';
      }
      
      botMessage += '<p class="disclaimer">Disclaimer: This information is for educational purposes only and not intended as medical advice. Always consult with a healthcare professional for diagnosis and treatment.</p>';
    }
    
    return botMessage;
  } catch (error) {
    console.error('Error in processMessage:', error);
    return '<p class="error">I encountered an error processing your request. Please try again with a different question.</p>';
  }
}

// Export the function to be used by the frontend
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { processMessage, medicalData };
} else {
  // For browser environments
  window.processMessage = processMessage;
}
