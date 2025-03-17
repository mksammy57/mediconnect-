
// Medical Quiz Data with Questions and Answers
const detailedMedicalQuizzes = [
  {
    id: 1,
    title: "Anatomy Fundamentals",
    description: "Test your knowledge of basic human anatomy",
    category: "anatomy",
    difficulty: "Beginner",
    questions: [
      {
        question: "Which of the following is NOT a function of the skeletal system?",
        options: [
          "Protection of internal organs",
          "Blood cell production",
          "Hormone secretion",
          "Mineral storage"
        ],
        correctAnswer: 2,
        explanation: "The skeletal system provides protection, allows movement, produces blood cells, and stores minerals. Hormone secretion is primarily a function of the endocrine system."
      },
      {
        question: "The scapula is commonly known as the:",
        options: [
          "Collarbone",
          "Shoulder blade",
          "Hip bone",
          "Breastbone"
        ],
        correctAnswer: 1,
        explanation: "The scapula is commonly known as the shoulder blade. The collarbone is the clavicle, the hip bone is the os coxae, and the breastbone is the sternum."
      },
      {
        question: "Which plane divides the body into anterior and posterior portions?",
        options: [
          "Sagittal plane",
          "Coronal plane",
          "Transverse plane",
          "Oblique plane"
        ],
        correctAnswer: 1,
        explanation: "The coronal (frontal) plane divides the body into anterior (front) and posterior (back) portions. The sagittal plane divides into right and left portions."
      },
      {
        question: "Which of the following is NOT a type of joint movement?",
        options: [
          "Abduction",
          "Rotation",
          "Circumduction",
          "Perfusion"
        ],
        correctAnswer: 3,
        explanation: "Perfusion refers to blood flow through tissues or organs, not a type of joint movement. Abduction, rotation, and circumduction are all types of movements that occur at joints."
      },
      {
        question: "The medial aspect of an anatomical structure refers to:",
        options: [
          "The front side",
          "The back side",
          "The side closer to the midline",
          "The side further from the midline"
        ],
        correctAnswer: 2,
        explanation: "Medial refers to structures closer to the midline (middle) of the body. Lateral refers to structures further from the midline."
      }
    ],
    timeEstimate: "20 minutes",
    imageUrl: "https://images.unsplash.com/photo-1564732005956-20420ebdab60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5hdG9teXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 2,
    title: "Cardiovascular System",
    description: "Challenge yourself on heart and blood vessel functions",
    category: "physiology",
    difficulty: "Intermediate",
    questions: [
      {
        question: "During cardiac diastole:",
        options: [
          "The ventricles contract",
          "The atria contract",
          "The ventricles relax and fill with blood",
          "The heart valves close"
        ],
        correctAnswer: 2,
        explanation: "During diastole, the ventricles relax and fill with blood. Ventricular contraction occurs during systole."
      },
      {
        question: "The pacemaker of the heart is the:",
        options: [
          "AV node",
          "Purkinje fibers",
          "SA node",
          "Bundle of His"
        ],
        correctAnswer: 2,
        explanation: "The sinoatrial (SA) node is the primary pacemaker of the heart, initiating each heartbeat by generating an electrical impulse."
      },
      {
        question: "Which valve separates the left atrium from the left ventricle?",
        options: [
          "Tricuspid valve",
          "Mitral valve",
          "Aortic valve",
          "Pulmonary valve"
        ],
        correctAnswer: 1,
        explanation: "The mitral (bicuspid) valve separates the left atrium from the left ventricle. The tricuspid valve is on the right side of the heart."
      },
      {
        question: "What is the normal resting heart rate for an adult?",
        options: [
          "40-60 beats per minute",
          "60-100 beats per minute",
          "100-120 beats per minute",
          "120-160 beats per minute"
        ],
        correctAnswer: 1,
        explanation: "The normal resting heart rate for adults typically ranges from 60-100 beats per minute. Athletes may have lower resting heart rates."
      },
      {
        question: "Which of the following is NOT a function of the cardiovascular system?",
        options: [
          "Transport of oxygen and nutrients",
          "Regulation of body temperature",
          "Production of digestive enzymes",
          "Immune defense"
        ],
        correctAnswer: 2,
        explanation: "Production of digestive enzymes is a function of the digestive system, particularly the pancreas and small intestine, not the cardiovascular system."
      }
    ],
    timeEstimate: "25 minutes",
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 3,
    title: "Antibiotics & Antimicrobials",
    description: "Test your knowledge of common antibiotics and their uses",
    category: "pharmacology",
    difficulty: "Advanced",
    questions: [
      {
        question: "Which class of antibiotics inhibits bacterial cell wall synthesis?",
        options: [
          "Aminoglycosides",
          "Macrolides",
          "Beta-lactams",
          "Fluoroquinolones"
        ],
        correctAnswer: 2,
        explanation: "Beta-lactam antibiotics, including penicillins and cephalosporins, inhibit bacterial cell wall synthesis by interfering with peptidoglycan cross-linking."
      },
      {
        question: "Aminoglycosides primarily work by:",
        options: [
          "Inhibiting protein synthesis by binding to the 30S ribosomal subunit",
          "Inhibiting protein synthesis by binding to the 50S ribosomal subunit",
          "Inhibiting DNA synthesis",
          "Disrupting the cell membrane"
        ],
        correctAnswer: 0,
        explanation: "Aminoglycosides inhibit protein synthesis by binding to the 30S ribosomal subunit, causing misreading of mRNA and inhibiting translocation."
      },
      {
        question: "Which antibiotic class is associated with tendon rupture as a side effect?",
        options: [
          "Tetracyclines",
          "Macrolides",
          "Fluoroquinolones",
          "Cephalosporins"
        ],
        correctAnswer: 2,
        explanation: "Fluoroquinolones have been associated with tendon inflammation and rupture, particularly affecting the Achilles tendon."
      },
      {
        question: "Which antimicrobial agent is specifically used for Clostridium difficile infections?",
        options: [
          "Azithromycin",
          "Vancomycin",
          "Metronidazole",
          "Clindamycin"
        ],
        correctAnswer: 1,
        explanation: "Vancomycin is often used as a first-line treatment for Clostridium difficile infections, particularly for severe cases. Metronidazole is also used but has lower efficacy."
      },
      {
        question: "Mechanism of bacterial resistance to beta-lactam antibiotics often involves:",
        options: [
          "Efflux pumps",
          "Production of beta-lactamase enzymes",
          "Alteration of ribosomal binding sites",
          "Decreased membrane permeability"
        ],
        correctAnswer: 1,
        explanation: "The production of beta-lactamase enzymes, which hydrolyze the beta-lactam ring, is a common mechanism of resistance to beta-lactam antibiotics."
      }
    ],
    timeEstimate: "30 minutes",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW50aWJpb3RpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 4,
    title: "Pathology Basics",
    description: "Identify common disease patterns and mechanisms",
    category: "pathology",
    difficulty: "Intermediate",
    questions: [
      {
        question: "Which of the following is NOT a characteristic of acute inflammation?",
        options: [
          "Redness",
          "Swelling",
          "Fibrosis",
          "Pain"
        ],
        correctAnswer: 2,
        explanation: "Fibrosis is characteristic of chronic inflammation and tissue repair, not acute inflammation. The cardinal signs of acute inflammation are redness, heat, swelling, pain, and loss of function."
      },
      {
        question: "The term 'metaplasia' refers to:",
        options: [
          "An increase in the number of cells",
          "An increase in the size of cells",
          "Replacement of one cell type by another",
          "Abnormal cell development"
        ],
        correctAnswer: 2,
        explanation: "Metaplasia is the replacement of one differentiated cell type by another mature differentiated cell type, often in response to chronic irritation or inflammation."
      },
      {
        question: "What is the most common cause of cellular injury?",
        options: [
          "Hypoxia",
          "Physical agents",
          "Chemical agents",
          "Radiation"
        ],
        correctAnswer: 0,
        explanation: "Hypoxia (oxygen deficiency) is the most common cause of cellular injury, as all cells require oxygen for aerobic metabolism and energy production."
      },
      {
        question: "Which of the following best describes an embolus?",
        options: [
          "A stationary blood clot",
          "A circulating mass that can obstruct blood flow",
          "A collection of serous fluid",
          "A tumor that spreads to distant sites"
        ],
        correctAnswer: 1,
        explanation: "An embolus is a detached intravascular mass (e.g., blood clot, fat, air) that is carried by the bloodstream and can obstruct blood flow when it lodges in a vessel."
      },
      {
        question: "The primary function of neutrophils in inflammation is:",
        options: [
          "Antigen presentation",
          "Antibody production",
          "Phagocytosis of bacteria",
          "Production of granulation tissue"
        ],
        correctAnswer: 2,
        explanation: "Neutrophils are the primary cells involved in phagocytosis (ingestion and destruction) of bacteria during the acute phase of inflammation."
      }
    ],
    timeEstimate: "25 minutes",
    imageUrl: "https://images.unsplash.com/photo-1580377968103-84cadc052fab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlzZWFzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 5,
    title: "Infectious Disease Agents",
    description: "Test your knowledge of bacteria, viruses, and other pathogens",
    category: "microbiology",
    difficulty: "Advanced",
    questions: [
      {
        question: "Which of the following is an obligate intracellular parasite?",
        options: [
          "Staphylococcus aureus",
          "Virus",
          "Candida albicans",
          "Escherichia coli"
        ],
        correctAnswer: 1,
        explanation: "Viruses are obligate intracellular parasites, meaning they can only replicate within host cells as they lack the necessary machinery for independent replication."
      },
      {
        question: "Gram-positive bacteria appear purple after Gram staining because:",
        options: [
          "They have a thick peptidoglycan layer that retains crystal violet",
          "They produce purple pigments",
          "They have a cell wall that absorbs safranin",
          "They contain purple endospores"
        ],
        correctAnswer: 0,
        explanation: "Gram-positive bacteria have a thick peptidoglycan layer in their cell wall that retains the crystal violet-iodine complex after alcohol decolorization, appearing purple."
      },
      {
        question: "Which of the following is NOT a helminth?",
        options: [
          "Tapeworm",
          "Roundworm",
          "Fluke",
          "Plasmodium"
        ],
        correctAnswer: 3,
        explanation: "Plasmodium is a protozoan parasite that causes malaria. Helminths are parasitic worms, including tapeworms (cestodes), roundworms (nematodes), and flukes (trematodes)."
      },
      {
        question: "Which bacterial structure is primarily responsible for attachment to host cells?",
        options: [
          "Capsule",
          "Flagellum",
          "Pili/fimbriae",
          "Ribosomes"
        ],
        correctAnswer: 2,
        explanation: "Pili (or fimbriae) are hair-like appendages on the bacterial surface that primarily function in adherence to surfaces, including host cells, facilitating colonization."
      },
      {
        question: "The most common mode of action for antiviral drugs is:",
        options: [
          "Inhibition of viral DNA/RNA synthesis",
          "Destruction of the viral envelope",
          "Blocking viral attachment to host cells",
          "Inhibition of viral protein synthesis"
        ],
        correctAnswer: 0,
        explanation: "Most antiviral drugs work by inhibiting viral DNA or RNA synthesis, often by targeting viral polymerases or by acting as nucleoside/nucleotide analogs."
      }
    ],
    timeEstimate: "30 minutes",
    imageUrl: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjdGVyaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 6,
    title: "Clinical Diagnosis",
    description: "Practice your clinical reasoning skills with case studies",
    category: "clinical",
    difficulty: "Advanced",
    questions: [
      {
        question: "A 45-year-old male presents with crushing chest pain radiating to the left arm, diaphoresis, and shortness of breath. The most likely diagnosis is:",
        options: [
          "Pulmonary embolism",
          "Myocardial infarction",
          "Aortic dissection",
          "Gastroesophageal reflux disease"
        ],
        correctAnswer: 1,
        explanation: "These are classic symptoms of myocardial infarction (heart attack): crushing chest pain with radiation to the left arm, accompanied by diaphoresis (sweating) and dyspnea (shortness of breath)."
      },
      {
        question: "A patient presents with fever, productive cough with rusty sputum, and chest X-ray shows lobar consolidation. The most likely pathogen is:",
        options: [
          "Mycoplasma pneumoniae",
          "Streptococcus pneumoniae",
          "Haemophilus influenzae",
          "Legionella pneumophila"
        ],
        correctAnswer: 1,
        explanation: "Streptococcus pneumoniae is the most common cause of community-acquired pneumonia with lobar consolidation and rusty sputum, a classic presentation of pneumococcal pneumonia."
      },
      {
        question: "A child presents with a barking cough, stridor, and low-grade fever. The most likely diagnosis is:",
        options: [
          "Bronchiolitis",
          "Croup (laryngotracheobronchitis)",
          "Epiglottitis",
          "Asthma"
        ],
        correctAnswer: 1,
        explanation: "A barking cough (often described as 'seal-like') and stridor are characteristic of croup (laryngotracheobronchitis), typically caused by parainfluenza virus."
      },
      {
        question: "A patient with a history of alcoholism presents with confusion, ataxia, and ophthalmoplegia. The most appropriate immediate treatment is:",
        options: [
          "Naloxone",
          "Thiamine",
          "Glucose",
          "Benzodiazepines"
        ],
        correctAnswer: 1,
        explanation: "This presentation suggests Wernicke encephalopathy, a thiamine deficiency often seen in alcoholics. Thiamine should be given before glucose to prevent worsening of symptoms."
      },
      {
        question: "A 60-year-old patient presents with painless jaundice and a palpable gallbladder. This clinical finding (Courvoisier's sign) is most suggestive of:",
        options: [
          "Gallstones",
          "Pancreatic cancer",
          "Viral hepatitis",
          "Alcoholic cirrhosis"
        ],
        correctAnswer: 1,
        explanation: "Painless jaundice with a palpable gallbladder (Courvoisier's sign) suggests malignant obstruction of the common bile duct, most commonly from pancreatic cancer of the head of the pancreas."
      }
    ],
    timeEstimate: "35 minutes",
    imageUrl: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 7,
    title: "Epidemiology Principles",
    description: "Test your understanding of disease patterns in populations",
    category: "public-health",
    difficulty: "Intermediate",
    questions: [
      {
        question: "Which measure compares the number of new cases of a disease in a population at risk during a specific time period?",
        options: [
          "Prevalence",
          "Incidence",
          "Mortality rate",
          "Odds ratio"
        ],
        correctAnswer: 1,
        explanation: "Incidence measures the number of new cases of a disease in a population at risk during a specific time period. Prevalence measures all existing cases at a given point in time."
      },
      {
        question: "A study that follows subjects over time and compares outcomes between exposed and unexposed groups is a:",
        options: [
          "Case-control study",
          "Cross-sectional study",
          "Cohort study",
          "Randomized controlled trial"
        ],
        correctAnswer: 2,
        explanation: "A cohort study follows subjects over time and compares outcomes between those exposed to a factor and those not exposed. It establishes temporal sequence and can determine causality."
      },
      {
        question: "The ability of a screening test to correctly identify people without the disease is called:",
        options: [
          "Sensitivity",
          "Specificity",
          "Positive predictive value",
          "Negative predictive value"
        ],
        correctAnswer: 1,
        explanation: "Specificity is the ability of a test to correctly identify people without the disease (true negatives). Sensitivity is the ability to correctly identify those with the disease."
      },
      {
        question: "Herd immunity refers to:",
        options: [
          "The immunity developed after a natural infection",
          "Immunity through vaccination",
          "The resistance to infection of a group due to a high proportion of immune individuals",
          "The gradual adaptation of a pathogen to its host"
        ],
        correctAnswer: 2,
        explanation: "Herd immunity occurs when a significant portion of a population becomes immune to a disease, reducing the likelihood of infection for individuals who are not immune."
      },
      {
        question: "Which of these represents a measure of association in epidemiology?",
        options: [
          "Sensitivity",
          "Relative risk",
          "Prevalence",
          "Incidence"
        ],
        correctAnswer: 1,
        explanation: "Relative risk is a measure of association that compares the incidence of disease in the exposed group to the incidence in the unexposed group. Sensitivity, prevalence, and incidence are not measures of association."
      }
    ],
    timeEstimate: "25 minutes",
    imageUrl: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXBpZGVtaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 8,
    title: "Medical Ethics",
    description: "Examine ethical principles and dilemmas in healthcare",
    category: "ethics",
    difficulty: "Intermediate",
    questions: [
      {
        question: "Which ethical principle emphasizes the duty to treat patients equally and fairly?",
        options: [
          "Autonomy",
          "Beneficence",
          "Justice",
          "Non-maleficence"
        ],
        correctAnswer: 2,
        explanation: "Justice refers to the fair and equitable distribution of healthcare resources and treating patients without discrimination based on factors like socioeconomic status or race."
      },
      {
        question: "A patient refusing treatment despite clear medical benefit demonstrates which ethical principle?",
        options: [
          "Autonomy",
          "Beneficence",
          "Justice",
          "Utilitarianism"
        ],
        correctAnswer: 0,
        explanation: "Autonomy refers to the patient's right to make their own healthcare decisions, including the right to refuse treatment, even when it may be against medical advice."
      },
      {
        question: "Which of the following is NOT one of the four basic principles of medical ethics?",
        options: [
          "Autonomy",
          "Utilitarianism",
          "Non-maleficence",
          "Beneficence"
        ],
        correctAnswer: 1,
        explanation: "The four basic principles are autonomy, beneficence, non-maleficence, and justice. Utilitarianism is an ethical theory but not one of the four principles."
      },
      {
        question: "A physician has a conflict of interest when:",
        options: [
          "They prescribe a medication they believe will help the patient",
          "They have a personal interest that could compromise professional judgment",
          "They disagree with a patient's choice of treatment",
          "They follow evidence-based guidelines"
        ],
        correctAnswer: 1,
        explanation: "A conflict of interest occurs when a physician has personal interests (financial, personal, or professional) that could potentially compromise their professional judgment or obligations to patients."
      },
      {
        question: "Which of the following best defines informed consent?",
        options: [
          "Patient agreeing to any treatment the doctor recommends",
          "Signing a form before any procedure",
          "Patient understanding and voluntarily agreeing to a procedure after being informed of risks, benefits, and alternatives",
          "Family member giving permission for patient treatment"
        ],
        correctAnswer: 2,
        explanation: "Informed consent involves the patient understanding the procedure, its risks and benefits, and alternatives, and then voluntarily agreeing to proceed. It's an ongoing process, not just signing a form."
      }
    ],
    timeEstimate: "25 minutes",
    imageUrl: "https://images.unsplash.com/photo-1577368211130-4bbd0eca5806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNhbCUyMGV0aGljc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 9,
    title: "Cardiology Essentials",
    description: "Explore the fundamentals of heart function and cardiac diseases",
    category: "cardiology",
    difficulty: "Advanced",
    questions: [
      {
        question: "Which ECG finding is characteristic of an acute myocardial infarction?",
        options: [
          "Prolonged PR interval",
          "Delta waves",
          "ST-segment elevation",
          "U waves"
        ],
        correctAnswer: 2,
        explanation: "ST-segment elevation is characteristic of acute myocardial infarction, representing acute injury to the myocardium due to ischemia."
      },
      {
        question: "Which of the following is NOT a risk factor for coronary artery disease?",
        options: [
          "Hypertension",
          "Diabetes mellitus",
          "Hypothyroidism",
          "Smoking"
        ],
        correctAnswer: 2,
        explanation: "Hypothyroidism is not a major risk factor for coronary artery disease. Major risk factors include hypertension, diabetes, smoking, hyperlipidemia, and family history."
      },
      {
        question: "A 65-year-old patient presents with syncope, chest pain on exertion, and a systolic murmur that increases with Valsalva maneuver. The most likely diagnosis is:",
        options: [
          "Mitral regurgitation",
          "Aortic stenosis",
          "Hypertrophic cardiomyopathy",
          "Aortic regurgitation"
        ],
        correctAnswer: 2,
        explanation: "These symptoms suggest hypertrophic cardiomyopathy. The Valsalva maneuver increases the intensity of the murmur in HCM by reducing venous return and ventricular volume, which worsens outflow obstruction."
      },
      {
        question: "First-line treatment for acute pericarditis typically includes:",
        options: [
          "Antibiotics",
          "NSAIDs",
          "Beta-blockers",
          "ACE inhibitors"
        ],
        correctAnswer: 1,
        explanation: "NSAIDs (like ibuprofen or aspirin) are the first-line treatment for acute pericarditis to reduce inflammation. Colchicine is often added for more effective treatment and prevention of recurrence."
      },
      {
        question: "Atrial fibrillation increases the risk of stroke because:",
        options: [
          "It causes coronary artery spasm",
          "It leads to valvular damage",
          "It promotes thrombus formation in the left atrial appendage",
          "It increases pulmonary vascular resistance"
        ],
        correctAnswer: 2,
        explanation: "Atrial fibrillation causes blood stasis in the atria, especially the left atrial appendage, promoting thrombus formation. These thrombi can embolize to the brain, causing ischemic stroke."
      }
    ],
    timeEstimate: "30 minutes",
    imageUrl: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyZGlvbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 10,
    title: "Pediatric Medicine",
    description: "Learn about diseases and conditions affecting children",
    category: "pediatrics",
    difficulty: "Intermediate",
    questions: [
      {
        question: "What is the most common congenital heart defect?",
        options: [
          "Tetralogy of Fallot",
          "Ventricular septal defect",
          "Transposition of the great arteries",
          "Patent ductus arteriosus"
        ],
        correctAnswer: 1,
        explanation: "Ventricular septal defect (VSD) is the most common congenital heart defect, accounting for approximately 20-30% of all congenital heart defects."
      },
      {
        question: "A 2-year-old child presents with fever, cough, and inspiratory stridor. Radiography shows the 'steeple sign.' The most likely diagnosis is:",
        options: [
          "Epiglottitis",
          "Croup",
          "Bacterial tracheitis",
          "Foreign body aspiration"
        ],
        correctAnswer: 1,
        explanation: "Croup (laryngotracheobronchitis) presents with a barking cough, inspiratory stridor, and the 'steeple sign' on X-ray, which shows subglottic narrowing of the trachea."
      },
      {
        question: "Which of the following is a contraindication to breastfeeding?",
        options: [
          "Maternal HIV infection (in developed countries)",
          "Maternal hepatitis B infection",
          "Maternal use of antihypertensive medications",
          "Maternal type 1 diabetes"
        ],
        correctAnswer: 0,
        explanation: "In developed countries with access to safe formula alternatives, maternal HIV infection is a contraindication to breastfeeding due to the risk of transmission. In resource-limited settings, the benefits may outweigh risks."
      },
      {
        question: "A 6-month-old infant cannot roll over, does not reach for objects, and has poor head control. This suggests:",
        options: [
          "Normal development variation",
          "Developmental delay",
          "Attention deficit disorder",
          "Behavioral issues"
        ],
        correctAnswer: 1,
        explanation: "By 6 months, infants typically can roll over, reach for objects, and have good head control. The inability to perform these tasks suggests developmental delay requiring evaluation."
      },
      {
        question: "The vaccine that contains live attenuated virus is:",
        options: [
          "Hepatitis B vaccine",
          "DTaP (Diphtheria, Tetanus, acellular Pertussis)",
          "MMR (Measles, Mumps, Rubella)",
          "Pneumococcal conjugate vaccine"
        ],
        correctAnswer: 2,
        explanation: "The MMR vaccine contains live attenuated viruses. This is why it's contraindicated in severely immunocompromised patients and pregnant women."
      }
    ],
    timeEstimate: "25 minutes",
    imageUrl: "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxkJTIwZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 11,
    title: "Psychiatric Disorders",
    description: "Understand mental health conditions and their management",
    category: "psychiatry",
    difficulty: "Advanced",
    questions: [
      {
        question: "Which of the following is NOT a positive symptom of schizophrenia?",
        options: [
          "Hallucinations",
          "Delusions",
          "Thought disorder",
          "Anhedonia"
        ],
        correctAnswer: 3,
        explanation: "Anhedonia (inability to feel pleasure) is a negative symptom of schizophrenia. Positive symptoms include hallucinations, delusions, and thought disorder, which represent an excess or distortion of normal functions."
      },
      {
        question: "The first-line pharmacological treatment for major depressive disorder typically includes:",
        options: [
          "Benzodiazepines",
          "Selective serotonin reuptake inhibitors (SSRIs)",
          "Tricyclic antidepressants",
          "Mood stabilizers"
        ],
        correctAnswer: 1,
        explanation: "SSRIs are generally considered first-line pharmacological treatment for major depressive disorder due to their relatively favorable side effect profile compared to other antidepressants."
      },
      {
        question: "A panic attack typically reaches its peak intensity within:",
        options: [
          "10 minutes",
          "30 minutes",
          "1 hour",
          "2 hours"
        ],
        correctAnswer: 0,
        explanation: "Panic attacks typically reach peak intensity within about 10 minutes. They involve intense fear with physical symptoms like racing heart, shortness of breath, and a sense of impending doom."
      },
      {
        question: "Which neurotransmitter is most directly targeted by medications used to treat ADHD?",
        options: [
          "Serotonin",
          "GABA",
          "Dopamine",
          "Acetylcholine"
        ],
        correctAnswer: 2,
        explanation: "Medications for ADHD (like methylphenidate and amphetamines) primarily increase dopamine and norepinephrine levels in the brain, improving attention and reducing hyperactivity and impulsivity."
      },
      {
        question: "Which of the following is NOT a criterion for substance use disorder according to DSM-5?",
        options: [
          "Using larger amounts over a longer period than intended",
          "Recurrent use resulting in failure to fulfill major role obligations",
          "Hallucinations during substance use",
          "Continued use despite persistent social problems caused by effects of the substance"
        ],
        correctAnswer: 2,
        explanation: "Hallucinations during substance use are not a diagnostic criterion for substance use disorder; they may be a symptom of intoxication or withdrawal for some substances but are not part of the diagnostic criteria."
      }
    ],
    timeEstimate: "30 minutes",
    imageUrl: "https://images.unsplash.com/photo-1573497491765-55b568ce75fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHN5Y2hpYXRyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
  }
];
