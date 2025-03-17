
// Medical learning content organized by level
const medicalLessons = {
  "Level 1: Medical Basics": [
    {
      category: "Human Anatomy",
      lessons: [
        {
          id: 1,
          title: "Introduction to the Human Body",
          description: "Learn about the fundamental structure and organization of the human body.",
          duration: "45 minutes",
          icon: "fa-user",
          content: {
            sections: [
              {
                title: "Overview of Human Anatomy & Physiology",
                text: "Anatomy is the study of the structure of body parts and their relationships to one another, while Physiology is the study of the functions of these structures. Understanding anatomy and physiology is fundamental for medical professionals to diagnose and treat diseases.",
                subsections: [
                  {
                    title: "Why Study Anatomy & Physiology?",
                    bullets: [
                      "Provides a foundation for medical and health-related fields.",
                      "Helps in understanding diseases and their effects on the body.",
                      "Essential for making informed medical decisions and treatments.",
                      "Enables proper medical research and advancements in treatments.",
                      "Helps in understanding surgical procedures and medical imaging techniques."
                    ]
                  }
                ]
              },
              {
                title: "Basic Terminology",
                text: "To study the human body, it is important to understand common anatomical terms:",
                subsections: [
                  {
                    title: "Anatomical Position & Directional Terms",
                    text: "Anatomical Position: The standard body position used for reference—standing upright, arms at the sides, palms facing forward.",
                    bullets: [
                      "Superior (Above) / Inferior (Below): Used to describe vertical positioning of structures.",
                      "Anterior (Front) / Posterior (Back): Indicates front-facing and back-facing structures.",
                      "Medial (Toward Midline) / Lateral (Away from Midline): Describes structures relative to the midline of the body.",
                      "Proximal (Closer to origin) / Distal (Farther from origin): Used mostly in reference to limbs."
                    ]
                  },
                  {
                    title: "Planes of the Body",
                    bullets: [
                      "Sagittal Plane: Divides body into left and right sections, used for studying side-to-side movement.",
                      "Coronal Plane: Divides body into front and back sections, useful for viewing internal organs.",
                      "Transverse Plane: Divides body into top and bottom sections, often used in imaging techniques like CT scans."
                    ]
                  }
                ]
              },
              {
                title: "Levels of Structural Organization",
                text: "The human body is organized into different levels:",
                bullets: [
                  "Chemical Level - Atoms and molecules (DNA, proteins, carbohydrates, lipids, etc.).",
                  "Cellular Level - Cells, the smallest units of life, responsible for basic functions.",
                  "Tissue Level - Groups of similar cells performing specific functions (e.g., muscle tissue, nerve tissue).",
                  "Organ Level - Two or more tissues working together to perform specific functions (e.g., heart, lungs, liver).",
                  "Organ System Level - Multiple organs working together to maintain homeostasis (e.g., digestive system, nervous system).",
                  "Organismal Level - The complete human body, functioning as a whole."
                ]
              }
            ],
            quiz: {
              title: "Introduction to Human Body Quiz",
              questions: [
                {
                  question: "What is the study of the structure of body parts and their relationships to one another?",
                  options: ["Physiology", "Anatomy", "Biology", "Pathology"],
                  correctAnswer: 1,
                  explanation: "Anatomy is the study of structure, while physiology is the study of function."
                },
                {
                  question: "Which plane divides the body into left and right sections?",
                  options: ["Coronal plane", "Transverse plane", "Sagittal plane", "Horizontal plane"],
                  correctAnswer: 2,
                  explanation: "The sagittal plane divides the body into left and right portions."
                },
                {
                  question: "Which term is used to describe a position closer to the point of attachment?",
                  options: ["Distal", "Lateral", "Medial", "Proximal"],
                  correctAnswer: 3,
                  explanation: "Proximal refers to a position closer to the point of attachment, while distal refers to a position further away."
                }
              ]
            }
          }
        },
        {
          id: 2,
          title: "Skeletal System",
          description: "Explore the framework of bones that support and protect the body.",
          duration: "60 minutes",
          icon: "fa-bone",
          content: {
            sections: [
              {
                title: "Types of Bones",
                text: "The human skeletal system consists of different types of bones classified by their shape and function:",
                bullets: [
                  "Long bones: Found in limbs (e.g., femur, humerus), provide leverage and support",
                  "Short bones: Cube-shaped bones in wrists and ankles, provide stability with limited movement",
                  "Flat bones: Thin, flattened bones (e.g., skull, sternum, ribs), protect organs and provide attachment for muscles",
                  "Irregular bones: Complex shapes (e.g., vertebrae, hip bones), perform various functions",
                  "Sesamoid bones: Small, round bones embedded in tendons (e.g., patella/kneecap), protect tendons and modify forces"
                ]
              },
              {
                title: "Bone Development",
                text: "Bones develop through processes known as ossification:",
                subsections: [
                  {
                    title: "Intramembranous Ossification",
                    text: "Direct formation of bone within connective tissue, primarily in flat bones like the skull.",
                    bullets: []
                  },
                  {
                    title: "Endochondral Ossification",
                    text: "Replacement of cartilage by bone tissue, common in long bones.",
                    bullets: [
                      "Primary ossification: Begins in the diaphysis (shaft) of long bones",
                      "Secondary ossification: Occurs in the epiphyses (ends) of long bones",
                      "Growth plate: Cartilaginous region between diaphysis and epiphysis, responsible for longitudinal growth"
                    ]
                  }
                ]
              },
              {
                title: "Common Fractures",
                text: "Fractures are breaks in bone continuity, classified by their pattern and cause:",
                bullets: [
                  "Closed/Simple fracture: Bone breaks but doesn't penetrate the skin",
                  "Open/Compound fracture: Broken bone penetrates through the skin, risk of infection",
                  "Greenstick fracture: Incomplete fracture where bone bends and partially breaks, common in children",
                  "Comminuted fracture: Bone fragments into multiple pieces",
                  "Spiral fracture: Fracture caused by twisting force, often suspicious for abuse in children",
                  "Stress fracture: Tiny cracks in bone due to repetitive force, common in athletes"
                ]
              }
            ],
            quiz: {
              title: "Skeletal System Quiz",
              questions: [
                {
                  question: "Which of the following is a flat bone?",
                  options: ["Femur", "Scapula", "Talus", "Humerus"],
                  correctAnswer: 1,
                  explanation: "The scapula (shoulder blade) is a flat bone. The femur and humerus are long bones, and the talus is a short bone."
                },
                {
                  question: "What type of ossification occurs in long bones?",
                  options: ["Intramembranous only", "Endochondral only", "Both intramembranous and endochondral", "Neither type of ossification"],
                  correctAnswer: 1,
                  explanation: "Endochondral ossification is the process by which cartilage is replaced by bone tissue in long bones."
                },
                {
                  question: "Which fracture type is characterized by an incomplete break where the bone bends and partially breaks?",
                  options: ["Comminuted fracture", "Spiral fracture", "Greenstick fracture", "Stress fracture"],
                  correctAnswer: 2,
                  explanation: "A greenstick fracture is an incomplete fracture where the bone bends and partially breaks, commonly seen in children."
                }
              ]
            }
          }
        }
      ]
    },
    {
      category: "Physiology",
      lessons: [
        {
          id: 3,
          title: "Homeostasis",
          description: "Learn how the body maintains internal balance.",
          duration: "35 minutes",
          icon: "fa-balance-scale",
          content: {
            sections: [
              {
                title: "Principles of Homeostasis",
                text: "Homeostasis is the maintenance of a relatively stable internal environment despite changes in the external environment. This is a fundamental concept in physiology.",
                bullets: [
                  "Dynamic equilibrium rather than static state",
                  "Involves multiple systems working together",
                  "Essential for survival of cells and the organism"
                ]
              },
              {
                title: "Feedback Mechanisms",
                text: "Homeostasis is maintained through feedback systems:",
                subsections: [
                  {
                    title: "Negative Feedback",
                    text: "The most common homeostatic mechanism that works to reverse a deviation from normal:",
                    bullets: [
                      "Example: Body temperature regulation - when body temperature rises, sweating is activated to cool down",
                      "Example: Blood glucose regulation - when blood glucose rises, insulin is released to lower it",
                      "Acts to minimize change and maintain stability"
                    ]
                  },
                  {
                    title: "Positive Feedback",
                    text: "Amplifies or enhances a change in the body's internal environment:",
                    bullets: [
                      "Less common than negative feedback",
                      "Example: Blood clotting - clotting factors activate more clotting factors",
                      "Example: Childbirth - contractions stimulate release of oxytocin, which stimulates more contractions"
                    ]
                  }
                ]
              },
              {
                title: "Homeostatic Variables",
                text: "Key variables maintained within narrow ranges:",
                bullets: [
                  "Body temperature (36.5-37.5°C)",
                  "Blood glucose (70-110 mg/dL when fasting)",
                  "Blood pH (7.35-7.45)",
                  "Blood pressure (around 120/80 mmHg)",
                  "Oxygen and carbon dioxide levels",
                  "Fluid and electrolyte balance"
                ]
              }
            ],
            quiz: {
              title: "Homeostasis Quiz",
              questions: [
                {
                  question: "Which of the following is an example of negative feedback?",
                  options: ["Blood clotting", "Childbirth contractions", "Body temperature regulation", "Fruit ripening"],
                  correctAnswer: 2,
                  explanation: "Body temperature regulation is a classic example of negative feedback. When body temperature rises, mechanisms like sweating activate to bring it back down."
                },
                {
                  question: "What is the normal pH range of human blood?",
                  options: ["6.5-7.0", "7.0-7.2", "7.35-7.45", "7.5-8.0"],
                  correctAnswer: 2,
                  explanation: "The normal pH range of human blood is 7.35-7.45, which is slightly alkaline. Even small deviations from this range can be life-threatening."
                },
                {
                  question: "Which statement about homeostasis is FALSE?",
                  options: ["It maintains a dynamic equilibrium", "It usually involves negative feedback", "It aims to maintain completely unchanging internal conditions", "It is essential for survival"],
                  correctAnswer: 2,
                  explanation: "Homeostasis doesn't maintain completely unchanging conditions but rather a dynamic equilibrium where variables fluctuate within acceptable ranges."
                }
              ]
            }
          }
        },
        {
          id: 4,
          title: "Cell Physiology",
          description: "Understand the basic functions and processes of cells.",
          duration: "55 minutes",
          icon: "fa-microscope",
          content: {
            sections: [
              {
                title: "Membrane Transport",
                text: "Cellular membranes regulate the movement of substances into and out of cells:",
                subsections: [
                  {
                    title: "Passive Transport",
                    text: "Movement of substances without energy expenditure:",
                    bullets: [
                      "Simple diffusion: Movement of molecules from high to low concentration",
                      "Facilitated diffusion: Assisted movement through membrane proteins",
                      "Osmosis: Diffusion of water across a semipermeable membrane"
                    ]
                  },
                  {
                    title: "Active Transport",
                    text: "Movement against concentration gradient requiring energy:",
                    bullets: [
                      "Primary active transport: Directly uses ATP (e.g., sodium-potassium pump)",
                      "Secondary active transport: Uses ion gradients established by primary active transport"
                    ]
                  },
                  {
                    title: "Bulk Transport",
                    text: "Movement of large molecules or particles:",
                    bullets: [
                      "Endocytosis: Bringing materials into the cell (phagocytosis, pinocytosis, receptor-mediated)",
                      "Exocytosis: Removing materials from the cell"
                    ]
                  }
                ]
              },
              {
                title: "Cell Signaling",
                text: "Mechanisms by which cells communicate and respond to their environment:",
                bullets: [
                  "Autocrine signaling: Cell signals to itself",
                  "Paracrine signaling: Cell signals to nearby cells",
                  "Endocrine signaling: Cell signals to distant cells via bloodstream",
                  "Signal transduction: Process of converting an extracellular signal into an intracellular response"
                ]
              },
              {
                title: "Cell Metabolism",
                text: "Chemical reactions that sustain life by providing energy and building blocks:",
                bullets: [
                  "Glycolysis: Conversion of glucose to pyruvate, occurs in cytoplasm",
                  "Krebs cycle (TCA cycle): Oxidation of acetyl-CoA, occurs in mitochondria",
                  "Electron transport chain: Generation of ATP through oxidative phosphorylation",
                  "Anabolism: Building complex molecules from simpler ones (requires energy)",
                  "Catabolism: Breaking down complex molecules into simpler ones (releases energy)"
                ]
              }
            ],
            quiz: {
              title: "Cell Physiology Quiz",
              questions: [
                {
                  question: "Which of the following is an example of passive transport?",
                  options: ["Sodium-potassium pump", "Facilitated diffusion", "Receptor-mediated endocytosis", "Exocytosis"],
                  correctAnswer: 1,
                  explanation: "Facilitated diffusion is a form of passive transport that uses membrane proteins to assist movement down a concentration gradient without energy expenditure."
                },
                {
                  question: "Where does the Krebs cycle occur in the cell?",
                  options: ["Cytoplasm", "Mitochondria", "Nucleus", "Endoplasmic reticulum"],
                  correctAnswer: 1,
                  explanation: "The Krebs cycle (also known as the TCA cycle) occurs in the mitochondria of cells."
                },
                {
                  question: "Which type of cell signaling involves hormones traveling through the bloodstream?",
                  options: ["Autocrine", "Paracrine", "Endocrine", "Synaptic"],
                  correctAnswer: 2,
                  explanation: "Endocrine signaling involves hormones secreted into the bloodstream to reach distant target cells."
                }
              ]
            }
          }
        }
      ]
    },
    {
      category: "Medical Terminology",
      lessons: [
        {
          id: 5,
          title: "Basic Medical Terms",
          description: "Learn essential terms used in healthcare communication.",
          duration: "35 minutes",
          icon: "fa-language",
          content: {
            sections: [
              {
                title: "Medical Terminology Structure",
                text: "Understanding medical terms by breaking them down into components:",
                subsections: [
                  {
                    title: "Word Roots",
                    text: "The foundation of medical terms, usually derived from Greek or Latin:",
                    bullets: [
                      "cardi/o - heart",
                      "dermat/o - skin",
                      "gastr/o - stomach",
                      "hepat/o - liver",
                      "nephr/o - kidney",
                      "neur/o - nerve"
                    ]
                  },
                  {
                    title: "Prefixes",
                    text: "Added to the beginning of a word to modify its meaning:",
                    bullets: [
                      "a-, an- (without, absence of): anemia = without blood",
                      "brady- (slow): bradycardia = slow heart rate",
                      "dys- (difficult, painful, abnormal): dyspnea = difficult breathing",
                      "hyper- (excessive, above): hypertension = high blood pressure",
                      "hypo- (deficient, below): hypotension = low blood pressure"
                    ]
                  },
                  {
                    title: "Suffixes",
                    text: "Added to the end of a word to modify its meaning:",
                    bullets: [
                      "-algia (pain): neuralgia = nerve pain",
                      "-ectomy (surgical removal): appendectomy = removal of appendix",
                      "-itis (inflammation): gastritis = inflammation of stomach",
                      "-ology (study of): cardiology = study of the heart",
                      "-osis (condition, usually abnormal): dermatosis = skin condition"
                    ]
                  }
                ]
              },
              {
                title: "Directional Terms",
                text: "Terms used to describe location in the body:",
                bullets: [
                  "Anterior/Ventral - Front surface",
                  "Posterior/Dorsal - Back surface",
                  "Superior/Cranial - Toward the head",
                  "Inferior/Caudal - Away from the head",
                  "Medial - Toward the midline",
                  "Lateral - Away from the midline",
                  "Proximal - Closer to the trunk",
                  "Distal - Further from the trunk"
                ]
              },
              {
                title: "Common Medical Terms by System",
                text: "Essential vocabulary organized by body system:",
                bullets: [
                  "Cardiovascular: tachycardia (fast heart rate), myocardial infarction (heart attack), arrhythmia (irregular heartbeat)",
                  "Respiratory: dyspnea (difficulty breathing), tachypnea (rapid breathing), pneumonia (lung infection)",
                  "Gastrointestinal: dysphagia (difficulty swallowing), hepatitis (liver inflammation), cholecystitis (gallbladder inflammation)",
                  "Neurological: neuropathy (nerve disease), hemiparesis (weakness on one side), aphasia (language impairment)"
                ]
              }
            ],
            quiz: {
              title: "Medical Terminology Quiz",
              questions: [
                {
                  question: "The word root 'nephr/o' refers to which body part?",
                  options: ["Liver", "Kidney", "Brain", "Lung"],
                  correctAnswer: 1,
                  explanation: "The word root 'nephr/o' refers to the kidney. For example, nephrology is the study of kidney diseases."
                },
                {
                  question: "What does the suffix '-ectomy' indicate?",
                  options: ["Inflammation", "Study of", "Surgical removal", "Pain"],
                  correctAnswer: 2,
                  explanation: "The suffix '-ectomy' indicates surgical removal. Examples include appendectomy (removal of appendix) and tonsillectomy (removal of tonsils)."
                },
                {
                  question: "Which term describes a condition of difficult or painful breathing?",
                  options: ["Bradypnea", "Tachypnea", "Apnea", "Dyspnea"],
                  correctAnswer: 3,
                  explanation: "Dyspnea describes difficult or painful breathing. The prefix 'dys-' means difficult or painful, and 'pnea' refers to breathing."
                }
              ]
            }
          }
        },
        {
          id: 6,
          title: "Medical Abbreviations",
          description: "Decode common abbreviations used in medical documentation.",
          duration: "30 minutes",
          icon: "fa-file-medical-alt",
          content: {
            sections: [
              {
                title: "Common Medical Abbreviations",
                text: "Abbreviations frequently used in healthcare settings:",
                subsections: [
                  {
                    title: "Vital Signs and Measurements",
                    bullets: [
                      "BP - Blood Pressure",
                      "HR - Heart Rate",
                      "RR - Respiratory Rate",
                      "T - Temperature",
                      "SpO2 - Oxygen Saturation",
                      "BMI - Body Mass Index",
                      "Ht - Height",
                      "Wt - Weight"
                    ]
                  },
                  {
                    title: "Diagnostic Procedures",
                    bullets: [
                      "CBC - Complete Blood Count",
                      "BMP - Basic Metabolic Panel",
                      "CXR - Chest X-Ray",
                      "CT - Computed Tomography",
                      "MRI - Magnetic Resonance Imaging",
                      "EKG/ECG - Electrocardiogram",
                      "US - Ultrasound",
                      "LP - Lumbar Puncture"
                    ]
                  },
                  {
                    title: "Medical Conditions",
                    bullets: [
                      "MI - Myocardial Infarction (heart attack)",
                      "CVA - Cerebrovascular Accident (stroke)",
                      "HTN - Hypertension",
                      "DM - Diabetes Mellitus",
                      "COPD - Chronic Obstructive Pulmonary Disease",
                      "UTI - Urinary Tract Infection",
                      "RA - Rheumatoid Arthritis",
                      "CHF - Congestive Heart Failure"
                    ]
                  }
                ]
              },
              {
                title: "Prescription Abbreviations",
                text: "Abbreviations commonly used in prescriptions:",
                bullets: [
                  "q.d. - Once daily",
                  "b.i.d. - Twice daily",
                  "t.i.d. - Three times daily",
                  "q.i.d. - Four times daily",
                  "p.o. - By mouth (orally)",
                  "p.r.n. - As needed",
                  "NPO - Nothing by mouth",
                  "s.l. - Sublingual (under the tongue)"
                ]
              },
              {
                title: "Caution with Abbreviations",
                text: "Some abbreviations are considered dangerous and should be avoided:",
                bullets: [
                  "U (for units) - Can be mistaken for '0'",
                  "IU (for international units) - Can be mistaken for 'IV'",
                  "QD, QOD (daily, every other day) - Can be mistaken for each other",
                  "MS (morphine sulfate) - Can be confused with magnesium sulfate",
                  "Always spell out 'micrograms' rather than using 'μg'",
                  "Always spell out 'right eye' (OD) and 'left eye' (OS) to avoid confusion"
                ]
              }
            ],
            quiz: {
              title: "Medical Abbreviations Quiz",
              questions: [
                {
                  question: "What does the abbreviation 'BID' stand for in a medication order?",
                  options: ["Before intense dinner", "Bring in daily", "Twice daily", "Best if divided"],
                  correctAnswer: 2,
                  explanation: "BID stands for 'bis in die' in Latin, which means 'twice daily'. It indicates that the medication should be taken two times per day."
                },
                {
                  question: "What medical condition is abbreviated as 'HTN'?",
                  options: ["Hyperthyroidism", "Hypertension", "Hyperglycemia", "Hyperlipidemia"],
                  correctAnswer: 1,
                  explanation: "HTN is the abbreviation for hypertension, which is high blood pressure."
                },
                {
                  question: "What does 'NPO' instruct a patient to do?",
                  options: ["Never postpone operations", "Nothing by mouth", "Normal post-operative", "Needs pain observation"],
                  correctAnswer: 1,
                  explanation: "NPO stands for 'nil per os' in Latin, which means 'nothing by mouth'. Patients are instructed not to eat or drink anything."
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "Level 2: Body Systems": [
    {
      category: "Cardiovascular System",
      lessons: [
        {
          id: 7,
          title: "Heart Structure and Function",
          description: "Explore the anatomy and physiology of the heart.",
          duration: "65 minutes",
          icon: "fa-heart",
          content: {
            sections: [
              {
                title: "Cardiac Anatomy",
                text: "The heart is a muscular organ located in the mediastinum of the thoracic cavity:",
                subsections: [
                  {
                    title: "Chambers and Valves",
                    bullets: [
                      "Four chambers: right atrium, right ventricle, left atrium, left ventricle",
                      "Atrioventricular valves: tricuspid (right), mitral/bicuspid (left)",
                      "Semilunar valves: pulmonary (right), aortic (left)",
                      "Valves ensure unidirectional blood flow through the heart"
                    ]
                  },
                  {
                    title: "Heart Wall Layers",
                    bullets: [
                      "Epicardium (outer): Serous membrane covering the heart",
                      "Myocardium (middle): Cardiac muscle tissue, responsible for contraction",
                      "Endocardium (inner): Smooth lining in contact with blood"
                    ]
                  },
                  {
                    title: "Blood Supply",
                    bullets: [
                      "Coronary arteries: right and left, arising from the aorta",
                      "Left anterior descending (LAD): supplies anterior wall of left ventricle",
                      "Left circumflex (LCX): supplies lateral and posterior walls of left ventricle",
                      "Right coronary artery (RCA): supplies right ventricle and parts of left ventricle",
                      "Cardiac veins drain into the coronary sinus"
                    ]
                  }
                ]
              },
              {
                title: "Cardiac Conduction System",
                text: "Specialized cells that generate and conduct electrical impulses through the heart:",
                bullets: [
                  "Sinoatrial (SA) node: Primary pacemaker, located in right atrium",
                  "Atrioventricular (AV) node: Delays impulse between atria and ventricles",
                  "Bundle of His: Conducts impulse from AV node to ventricles",
                  "Purkinje fibers: Rapidly conduct impulse throughout ventricular myocardium"
                ]
              },
              {
                title: "Cardiac Cycle",
                text: "Sequence of events during a single heartbeat:",
                bullets: [
                  "Systole: Contraction phase, ventricles expel blood",
                  "Diastole: Relaxation phase, ventricles fill with blood",
                  "Heart sounds: 'Lub' (S1) - closure of AV valves; 'Dub' (S2) - closure of semilunar valves",
                  "Cardiac output: Volume of blood pumped per minute (stroke volume × heart rate)"
                ]
              }
            ],
            quiz: {
              title: "Heart Structure and Function Quiz",
              questions: [
                {
                  question: "Which valve is located between the left atrium and left ventricle?",
                  options: ["Tricuspid valve", "Pulmonary valve", "Mitral valve", "Aortic valve"],
                  correctAnswer: 2,
                  explanation: "The mitral valve (also called bicuspid valve) is located between the left atrium and left ventricle."
                },
                {
                  question: "What is the primary pacemaker of the heart?",
                  options: ["AV node", "SA node", "Bundle of His", "Purkinje fibers"],
                  correctAnswer: 1,
                  explanation: "The sinoatrial (SA) node is the primary pacemaker of the heart, initiating each heartbeat."
                },
                {
                  question: "During which phase of the cardiac cycle do the ventricles contract?",
                  options: ["Early diastole", "Late diastole", "Systole", "Isovolumetric relaxation"],
                  correctAnswer: 2,
                  explanation: "Ventricular contraction occurs during systole, when blood is ejected from the ventricles into the aorta and pulmonary artery."
                }
              ]
            }
          }
        },
        {
          id: 8,
          title: "Blood Vessels and Circulation",
          description: "Learn about arteries, veins, and the circulatory network.",
          duration: "60 minutes",
          icon: "fa-wind",
          content: {
            sections: [
              {
                title: "Types of Blood Vessels",
                text: "The circulatory system consists of three main types of vessels:",
                subsections: [
                  {
                    title: "Arteries",
                    text: "Carry blood away from the heart:",
                    bullets: [
                      "Thick, elastic walls to withstand high pressure",
                      "Tunica intima: Endothelium, basement membrane, elastic tissue",
                      "Tunica media: Smooth muscle, elastin (thickest layer)",
                      "Tunica adventitia: Connective tissue"
                    ]
                  },
                  {
                    title: "Veins",
                    text: "Return blood to the heart:",
                    bullets: [
                      "Thinner walls, larger lumen compared to arteries",
                      "Same three layers as arteries but thinner tunica media",
                      "Contain valves to prevent backflow of blood",
                      "Lower pressure system, act as blood reservoirs"
                    ]
                  },
                  {
                    title: "Capillaries",
                    text: "Site of exchange between blood and tissues:",
                    bullets: [
                      "Microscopic vessels connecting arterioles to venules",
                      "Wall consists of only endothelium (single cell layer)",
                      "Permit diffusion of oxygen, nutrients, waste products",
                      "Three types: continuous, fenestrated, sinusoidal"
                    ]
                  }
                ]
              },
              {
                title: "Circulatory Pathways",
                text: "The circulatory system is organized into two main circuits:",
                bullets: [
                  "Systemic circulation: Left heart → body → right heart",
                  "Pulmonary circulation: Right heart → lungs → left heart",
                  "Portal circulation: Digestive organs → liver → systemic circulation",
                  "Coronary circulation: Supplies heart muscle with oxygen and nutrients"
                ]
              },
              {
                title: "Hemodynamics",
                text: "Principles governing blood flow:",
                bullets: [
                  "Blood pressure: Force exerted by blood against vessel walls",
                  "Systolic pressure: Maximum pressure during ventricular contraction",
                  "Diastolic pressure: Minimum pressure during ventricular relaxation",
                  "Resistance: Opposition to blood flow, affected by vessel diameter",
                  "Flow = Pressure difference / Resistance (similar to Ohm's law)"
                ]
              }
            ],
            quiz: {
              title: "Blood Vessels and Circulation Quiz",
              questions: [
                {
                  question: "Which blood vessels have the thinnest walls?",
                  options: ["Arteries", "Veins", "Capillaries", "Arterioles"],
                  correctAnswer: 2,
                  explanation: "Capillaries have the thinnest walls, consisting of only a single layer of endothelial cells, which facilitates exchange of substances."
                },
                {
                  question: "Which structural feature is found in veins but not arteries?",
                  options: ["Tunica media", "Tunica adventitia", "Valves", "Endothelium"],
                  correctAnswer: 2,
                  explanation: "Valves are found in veins but not arteries. They prevent the backflow of blood as it returns to the heart against gravity."
                },
                {
                  question: "Which circulation carries oxygenated blood from the lungs back to the heart?",
                  options: ["Systemic circulation", "Pulmonary circulation", "Portal circulation", "Coronary circulation"],
                  correctAnswer: 1,
                  explanation: "Pulmonary circulation carries deoxygenated blood from the heart to the lungs and oxygenated blood from the lungs back to the heart."
                }
              ]
            }
          }
        }
      ]
    },
    {
      category: "Respiratory System",
      lessons: [
        {
          id: 9,
          title: "Lungs and Breathing Mechanics",
          description: "Understand how we breathe and exchange gases.",
          duration: "55 minutes",
          icon: "fa-lungs",
          content: {
            sections: [
              {
                title: "Respiratory Tract Anatomy",
                text: "The respiratory system consists of the upper and lower respiratory tracts:",
                subsections: [
                  {
                    title: "Upper Respiratory Tract",
                    bullets: [
                      "Nose: Filters, warms, and humidifies air",
                      "Pharynx (throat): Shared passage for air and food",
                      "Larynx (voice box): Contains vocal cords, prevents aspiration"
                    ]
                  },
                  {
                    title: "Lower Respiratory Tract",
                    bullets: [
                      "Trachea (windpipe): Reinforced with C-shaped cartilage rings",
                      "Bronchi: Primary, secondary (lobar), tertiary (segmental)",
                      "Bronchioles: Smaller airways without cartilage",
                      "Alveoli: Microscopic air sacs where gas exchange occurs",
                      "Lungs: Right (3 lobes) and left (2 lobes)"
                    ]
                  }
                ]
              },
              {
                title: "Mechanics of Breathing",
                text: "Ventilation is the movement of air into and out of the lungs:",
                bullets: [
                  "Inspiration (inhalation): Active process, diaphragm contracts and flattens, intercostal muscles elevate ribs, chest cavity expands, pressure decreases, air flows in",
                  "Expiration (exhalation): Usually passive, diaphragm and intercostal muscles relax, chest cavity decreases, pressure increases, air flows out",
                  "Lung compliance: Ability of lungs to expand (decreased in fibrosis)",
                  "Airway resistance: Opposition to airflow (increased in asthma)",
                  "Surfactant: Reduces surface tension in alveoli, prevents collapse"
                ]
              },
              {
                title: "Lung Volumes and Capacities",
                text: "Measurements of air movement during breathing:",
                bullets: [
                  "Tidal volume (TV): Air moved during normal breathing (≈500 mL)",
                  "Inspiratory reserve volume (IRV): Additional air that can be inhaled (≈3000 mL)",
                  "Expiratory reserve volume (ERV): Additional air that can be exhaled (≈1100 mL)",
                  "Residual volume (RV): Air remaining in lungs after maximal exhalation (≈1200 mL)",
                  "Vital capacity (VC): Maximum air that can be exhaled after maximal inhalation (TV+IRV+ERV)",
                  "Total lung capacity (TLC): Total air in fully inflated lungs (VC+RV)"
                ]
              }
            ],
            quiz: {
              title: "Lungs and Breathing Mechanics Quiz",
              questions: [
                {
                  question: "How many lobes are in the right and left lungs, respectively?",
                  options: ["2 and 3", "3 and 2", "2 and 2", "3 and 3"],
                  correctAnswer: 1,
                  explanation: "The right lung has 3 lobes (upper, middle, and lower), while the left lung has 2 lobes (upper and lower), making space for the heart."
                },
                {
                  question: "Which of the following is an active process?",
                  options: ["Normal expiration", "Forced expiration", "Inspiration", "All of the above"],
                  correctAnswer: 2,
                  explanation: "Inspiration is an active process requiring contraction of the diaphragm and external intercostal muscles. Normal expiration is generally passive."
                },
                {
                  question: "What is the function of surfactant in the lungs?",
                  options: ["Provides oxygen to blood", "Reduces surface tension in alveoli", "Increases airway resistance", "Filters air pollutants"],
                  correctAnswer: 1,
                  explanation: "Surfactant reduces surface tension in the alveoli, preventing them from collapsing and making breathing easier."
                }
              ]
            }
          }
        },
        {
          id: 10,
          title: "Gas Exchange and Transport",
          description: "Learn how oxygen is delivered to tissues and used for energy.",
          duration: "50 minutes",
          icon: "fa-atom",
          content: {
            sections: [
              {
                title: "Principles of Gas Exchange",
                text: "Exchange of oxygen and carbon dioxide between air and blood, and between blood and tissues:",
                bullets: [
                  "Driven by partial pressure gradients (high to low concentration)",
                  "Depends on alveolar surface area (decreased in emphysema)",
                  "Depends on diffusion distance (increased in pulmonary edema)",
                  "Depends on ventilation-perfusion matching"
                ]
              },
              {
                title: "Oxygen Transport",
                text: "Oxygen is transported in the blood in two ways:",
                subsections: [
                  {
                    title: "Hemoglobin-Bound (98%)",
                    bullets: [
                      "Each hemoglobin molecule can bind 4 oxygen molecules",
                      "Oxygen binding affected by: oxygen partial pressure, pH, temperature, 2,3-DPG",
                      "Oxygen-hemoglobin dissociation curve: S-shaped relationship between oxygen partial pressure and hemoglobin saturation",
                      "Bohr effect: Increased acidity (lower pH) reduces hemoglobin's affinity for oxygen, facilitating oxygen release to active tissues"
                    ]
                  },
                  {
                    title: "Dissolved in Plasma (2%)",
                    bullets: [
                      "Small amount of oxygen physically dissolved in plasma",
                      "Directly proportional to partial pressure of oxygen (Henry's Law)",
                      "Insufficient alone for metabolic needs"
                    ]
                  }
                ]
              },
              {
                title: "Carbon Dioxide Transport",
                text: "Carbon dioxide is transported in the blood in three ways:",
                bullets: [
                  "Dissolved in plasma (7-10%)",
                  "Bound to hemoglobin as carbaminohemoglobin (20%)",
                  "As bicarbonate ions (70%): CO2 + H2O ⇄ H2CO3 ⇄ H+ + HCO3- (catalyzed by carbonic anhydrase)"
                ]
              }
            ],
            quiz: {
              title: "Gas Exchange and Transport Quiz",
              questions: [
                {
                  question: "What percentage of oxygen is transported bound to hemoglobin?",
                  options: ["About 2%", "About 30%", "About 70%", "About 98%"],
                  correctAnswer: 3,
                  explanation: "Approximately 98% of oxygen is transported bound to hemoglobin, with only about 2% dissolved in plasma."
                },
                {
                  question: "Which of the following would shift the oxygen-hemoglobin dissociation curve to the right?",
                  options: ["Decreased temperature", "Decreased CO2", "Decreased hydrogen ion concentration", "Increased 2,3-DPG"],
                  correctAnswer: 3,
                  explanation: "Increased 2,3-DPG shifts the curve to the right, decreasing hemoglobin's affinity for oxygen and facilitating oxygen release to tissues."
                },
                {
                  question: "What is the primary form of carbon dioxide transport in the blood?",
                  options: ["Dissolved in plasma", "Bound to hemoglobin", "As bicarbonate ions", "As carbonic acid"],
                  correctAnswer: 2,
                  explanation: "About 70% of carbon dioxide is transported as bicarbonate ions (HCO3-), formed from the reaction catalyzed by carbonic anhydrase."
                }
              ]
            }
          }
        }
      ]
    },
    {
      category: "Nervous System",
      lessons: [
        {
          id: 11,
          title: "Brain Structure and Function",
          description: "Explore the central command center of the human body.",
          duration: "70 minutes",
          icon: "fa-brain"
        },
        {
          id: 12,
          title: "Spinal Cord and Peripheral Nerves",
          description: "Learn about the nervous system's communication network.",
          duration: "55 minutes",
          icon: "fa-network-wired"
        }
      ]
    }
  ],
  "Level 3: Disease and Pathology": [
    {
      category: "Infectious Diseases",
      lessons: [
        {
          id: 13,
          title: "Bacterial Infections",
          description: "Learn about common bacterial pathogens and their effects.",
          duration: "60 minutes",
          icon: "fa-bacterium"
        },
        {
          id: 14,
          title: "Viral Diseases",
          description: "Understand viral infections and their impact on health.",
          duration: "65 minutes",
          icon: "fa-virus"
        }
      ]
    },
    {
      category: "Chronic Conditions",
      lessons: [
        {
          id: 15,
          title: "Diabetes Mellitus",
          description: "Learn about the pathophysiology and management of diabetes.",
          duration: "70 minutes",
          icon: "fa-chart-line"
        },
        {
          id: 16,
          title: "Hypertension and Cardiovascular Disease",
          description: "Understand the causes and effects of high blood pressure.",
          duration: "65 minutes",
          icon: "fa-heart-broken"
        }
      ]
    }
  ],
  "Level 4: Diagnostics and Patient Care": [
    {
      category: "Clinical Assessment",
      lessons: [
        {
          id: 17,
          title: "Patient History Taking",
          description: "Learn how to gather essential information from patients.",
          duration: "50 minutes",
          icon: "fa-clipboard-list"
        },
        {
          id: 18,
          title: "Physical Examination Techniques",
          description: "Learn systematic approaches to examining patients.",
          duration: "70 minutes",
          icon: "fa-stethoscope"
        }
      ]
    },
    {
      category: "Emergency Medicine",
      lessons: [
        {
          id: 19,
          title: "Basic Life Support",
          description: "Learn essential skills for cardiopulmonary resuscitation.",
          duration: "65 minutes",
          icon: "fa-hand-holding-medical"
        },
        {
          id: 20,
          title: "Recognizing Medical Emergencies",
          description: "Identify critical conditions requiring immediate intervention.",
          duration: "55 minutes",
          icon: "fa-ambulance"
        }
      ]
    }
  ],
  "Level 5: Advanced Medical Sciences": [
    {
      category: "Pharmacology",
      lessons: [
        {
          id: 21,
          title: "Principles of Drug Action",
          description: "Understand how medications work in the human body.",
          duration: "75 minutes",
          icon: "fa-pills"
        },
        {
          id: 22,
          title: "Drug Interactions and Adverse Effects",
          description: "Learn about medication safety and monitoring.",
          duration: "70 minutes",
          icon: "fa-exclamation-triangle"
        }
      ]
    },
    {
      category: "Research Methodology",
      lessons: [
        {
          id: 23,
          title: "Evidence-Based Medicine",
          description: "Learn how to evaluate and apply medical research.",
          duration: "60 minutes",
          icon: "fa-search"
        },
        {
          id: 24,
          title: "Clinical Trials and Study Design",
          description: "Understand how medical discoveries are validated.",
          duration: "65 minutes",
          icon: "fa-flask"
        }
      ]
    }
  ]
};

// Medical quiz data
const medicalQuizzes = [
  {
    id: 1,
    title: "Anatomy Fundamentals",
    description: "Test your knowledge of basic human anatomy",
    category: "anatomy",
    difficulty: "Beginner",
    questions: 15,
    timeEstimate: "20 minutes",
    image: "https://images.unsplash.com/photo-1564732005956-20420ebdab60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5hdG9teXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 2,
    title: "Cardiovascular System",
    description: "Challenge yourself on heart and blood vessel functions",
    category: "physiology",
    difficulty: "Intermediate",
    questions: 20,
    timeEstimate: "25 minutes",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 3,
    title: "Antibiotics & Antimicrobials",
    description: "Test your knowledge of common antibiotics and their uses",
    category: "pharmacology",
    difficulty: "Advanced",
    questions: 25,
    timeEstimate: "30 minutes",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW50aWJpb3RpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 4,
    title: "Pathology Basics",
    description: "Identify common disease patterns and mechanisms",
    category: "pathology",
    difficulty: "Intermediate",
    questions: 18,
    timeEstimate: "25 minutes",
    image: "https://images.unsplash.com/photo-1580377968103-84cadc052fab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlzZWFzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 5,
    title: "Infectious Disease Agents",
    description: "Test your knowledge of bacteria, viruses, and other pathogens",
    category: "microbiology",
    difficulty: "Advanced",
    questions: 20,
    timeEstimate: "30 minutes",
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjdGVyaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 6,
    title: "Clinical Diagnosis",
    description: "Practice your clinical reasoning skills with case studies",
    category: "clinical",
    difficulty: "Advanced",
    questions: 15,
    timeEstimate: "35 minutes",
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 7,
    title: "Epidemiology Principles",
    description: "Test your understanding of disease patterns in populations",
    category: "public-health",
    difficulty: "Intermediate",
    questions: 20,
    timeEstimate: "25 minutes",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXBpZGVtaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing learning page');
  
  // Check if the lessons container exists
  const lessonsContainer = document.getElementById('lessons-container');
  if (lessonsContainer) {
    console.log('Loading lessons');
    // Initialize the learning page
    loadLessons();
  } else {
    console.log('Lessons container not found');
  }
  
  // Check if quiz containers exist
  const quizFilters = document.querySelectorAll('.quiz-filter-btn');
  const quizzesContainer = document.getElementById('quizzes-container');
  
  if (quizFilters.length > 0 && quizzesContainer) {
    console.log('Loading quizzes');
    setupQuizFilters();
    loadQuizzes('all');
  } else {
    console.log('Quiz containers not found');
  }
});

function loadLessons() {
  const lessonsContainer = document.getElementById('lessons-container');
  if (!lessonsContainer) {
    console.error('Lessons container not found');
    return;
  }
  
  console.log('Medical lessons data:', Object.keys(medicalLessons));
  
  // Create level selection tabs
  let levelHTML = '<div class="level-selection">';
  Object.keys(medicalLessons).forEach((level, index) => {
    levelHTML += `<button class="lesson-level-btn ${index === 0 ? 'active' : ''}" data-level="${level}">${level}</button>`;
  });
  levelHTML += '</div>';
  
  // Load the first level by default
  const firstLevel = Object.keys(medicalLessons)[0];
  const firstLevelContent = createLevelContent(firstLevel, medicalLessons[firstLevel]);
  
  // Clear loading indicator
  lessonsContainer.innerHTML = '';
  
  // Add the level tabs and content
  lessonsContainer.innerHTML = levelHTML + firstLevelContent;
  
  // Add event listeners to level buttons
  const levelButtons = document.querySelectorAll('.lesson-level-btn');
  levelButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log('Level button clicked:', this.getAttribute('data-level'));
      
      // Remove active class from all buttons
      levelButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Load content for selected level
      const level = this.getAttribute('data-level');
      const levelContent = createLevelContent(level, medicalLessons[level]);
      
      // Replace the content but keep the level selection
      const levelContentContainer = document.querySelector('.level-content');
      if (levelContentContainer) {
        levelContentContainer.outerHTML = levelContent;
      } else {
        lessonsContainer.innerHTML = levelHTML + levelContent;
      }

      // Re-attach event listeners to the "Start Learning" buttons
      attachLessonEventListeners();
    });
  });
  
  // Attach event listeners to the "Start Learning" buttons
  attachLessonEventListeners();
}

function attachLessonEventListeners() {
  setTimeout(() => {
    const startLessonButtons = document.querySelectorAll('.start-lesson-btn');
    startLessonButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const lessonId = this.closest('.lesson-card').getAttribute('data-lesson-id');
        
        // Create and show the lesson detail modal
        const lessonModal = document.createElement('div');
        lessonModal.className = 'lesson-modal';
        lessonModal.innerHTML = displayLessonContent(lessonId);
        document.body.appendChild(lessonModal);
        
        // Show the modal with animation
        setTimeout(() => {
          lessonModal.classList.add('active');
        }, 10);
        
        // Add event listener to close button
        const closeBtn = lessonModal.querySelector('.close-lesson-btn');
        if (closeBtn) {
          closeBtn.addEventListener('click', function() {
            lessonModal.classList.remove('active');
            setTimeout(() => {
              document.body.removeChild(lessonModal);
            }, 300);
          });
        }
        
        // Add event listener to mark as complete button
        const completeBtn = lessonModal.querySelector('.mark-complete-btn');
        if (completeBtn) {
          completeBtn.addEventListener('click', function() {
            const progressBar = lessonModal.querySelector('.progress');
            progressBar.style.width = '100%';
            this.textContent = 'Completed!';
            this.classList.add('completed');
            this.disabled = true;
            
            // Show quiz button when lesson is marked as complete
            const quizSection = lessonModal.querySelector('.quiz-section');
            if (quizSection) {
              quizSection.style.display = 'block';
              setupQuizHandlers(lessonModal);
            }
            
            // In a real application, this would save progress to a database
            console.log(`Lesson ${lessonId} marked as complete`);
          });
        }

        // Set up initial quiz state (hidden until lesson completion)
        const quizSection = lessonModal.querySelector('.quiz-section');
        if (quizSection) {
          quizSection.style.display = 'none';
        }
      });
    });
  }, 500);
}

function setupQuizHandlers(lessonModal) {
  const startQuizBtn = lessonModal.querySelector('.start-quiz-btn');
  if (startQuizBtn) {
    startQuizBtn.addEventListener('click', function() {
      const quizContainer = lessonModal.querySelector('.quiz-container');
      if (quizContainer) {
        quizContainer.style.display = 'block';
        this.style.display = 'none';
      }
      
      // Add event listeners to quiz submit button
      const submitQuizBtn = lessonModal.querySelector('.submit-quiz-btn');
      if (submitQuizBtn) {
        submitQuizBtn.addEventListener('click', function() {
          gradeQuiz(lessonModal);
        });
      }
    });
  }
}

function gradeQuiz(lessonModal) {
  const quizContainer = lessonModal.querySelector('.quiz-container');
  const questionElements = quizContainer.querySelectorAll('.quiz-question');
  let correctAnswers = 0;
  let totalQuestions = questionElements.length;
  
  questionElements.forEach((question, index) => {
    const selectedOption = question.querySelector('input[type="radio"]:checked');
    const correctIndex = parseInt(question.getAttribute('data-correct-answer'));
    const questionResult = question.querySelector('.question-result');
    const explanation = question.querySelector('.explanation');
    
    if (selectedOption) {
      const selectedIndex = parseInt(selectedOption.value);
      if (selectedIndex === correctIndex) {
        correctAnswers++;
        questionResult.textContent = 'Correct!';
        questionResult.className = 'question-result correct';
      } else {
        questionResult.textContent = 'Incorrect';
        questionResult.className = 'question-result incorrect';
      }
      questionResult.style.display = 'block';
      explanation.style.display = 'block';
    }
  });
  
  // Show quiz results
  const quizResults = lessonModal.querySelector('.quiz-results');
  const scoreElement = lessonModal.querySelector('.quiz-score');
  const feedbackElement = lessonModal.querySelector('.quiz-feedback');
  
  const percentage = (correctAnswers / totalQuestions) * 100;
  scoreElement.textContent = `${correctAnswers}/${totalQuestions} (${percentage.toFixed(0)}%)`;
  
  if (percentage >= 80) {
    feedbackElement.textContent = 'Excellent! You have a strong understanding of this topic.';
    feedbackElement.className = 'quiz-feedback excellent';
  } else if (percentage >= 60) {
    feedbackElement.textContent = 'Good job! Review the explanations for questions you missed.';
    feedbackElement.className = 'quiz-feedback good';
  } else {
    feedbackElement.textContent = 'You might want to review this lesson again before moving on.';
    feedbackElement.className = 'quiz-feedback needs-improvement';
  }
  
  quizResults.style.display = 'block';
  
  // Disable submit button and options after submission
  const submitQuizBtn = lessonModal.querySelector('.submit-quiz-btn');
  submitQuizBtn.disabled = true;
  
  const allOptions = lessonModal.querySelectorAll('input[type="radio"]');
  allOptions.forEach(option => {
    option.disabled = true;
  });
}

function createLevelContent(levelTitle, categories) {
  let html = `<div class="level-content" data-level="${levelTitle}">`;
  
  // Add level description based on the title
  let levelDescription = "";
  switch(levelTitle) {
    case "Level 1: Medical Basics":
      levelDescription = "Fundamental concepts for beginners in medical studies. Learn the basic terminology, structure, and functions of the human body.";
      break;
    case "Level 2: Body Systems":
      levelDescription = "Detailed exploration of major body systems and their interconnected functions. Build on your basic knowledge with system-specific learning.";
      break;
    case "Level 3: Disease and Pathology":
      levelDescription = "Study how normal function is altered in disease states. Learn about common conditions, their causes, and manifestations.";
      break;
    case "Level 4: Diagnostics and Patient Care":
      levelDescription = "Develop practical skills for patient assessment, diagnostic interpretation, and clinical care applications.";
      break;
    case "Level 5: Advanced Medical Sciences":
      levelDescription = "Explore specialized topics in medicine, research methodologies, and complex clinical scenarios for advanced learners.";
      break;
  }
  html += `<p class="level-description">${levelDescription}</p>`;
  
  // Add each category and its lessons
  categories.forEach(category => {
    html += `
      <div class="subject-section">
        <h4 class="subject-title">${category.category}</h4>
        <div class="lessons-grid">
    `;
    
    // Add each lesson in this category
    category.lessons.forEach(lesson => {
      html += `
        <div class="lesson-card" data-lesson-id="${lesson.id}">
          <div class="lesson-icon">
            <i class="fas ${lesson.icon}"></i>
          </div>
          <div class="lesson-info">
            <h5>${lesson.title}</h5>
            <p>${lesson.description}</p>
            <div class="lesson-meta">
              <span class="duration"><i class="far fa-clock"></i> ${lesson.duration}</span>
              <a href="#" class="start-lesson-btn">Start Learning</a>
            </div>
          </div>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  return html;
}

function displayLessonContent(lessonId) {
  // Find the lesson in the medicalLessons data
  let foundLesson = null;
  
  // Search through all levels and categories to find the lesson
  for (const level in medicalLessons) {
    for (const category of medicalLessons[level]) {
      for (const lesson of category.lessons) {
        if (lesson.id === parseInt(lessonId)) {
          foundLesson = lesson;
          break;
        }
      }
      if (foundLesson) break;
    }
    if (foundLesson) break;
  }
  
  if (!foundLesson || !foundLesson.content) {
    // If lesson content is not available
    return `
      <div class="lesson-detail-container">
        <div class="lesson-detail-header">
          <h3>${foundLesson ? foundLesson.title : 'Lesson Not Found'}</h3>
          <button class="close-lesson-btn"><i class="fas fa-times"></i></button>
        </div>
        <div class="lesson-detail-content">
          <p>Detailed content for this lesson is not available yet. Please check back later.</p>
        </div>
      </div>
    `;
  }
  
  // Create HTML for lesson content
  let html = `
    <div class="lesson-detail-container">
      <div class="lesson-detail-header">
        <h3>${foundLesson.title}</h3>
        <button class="close-lesson-btn"><i class="fas fa-times"></i></button>
      </div>
      <div class="lesson-detail-content">
        <div class="lesson-meta-info">
          <span class="duration"><i class="far fa-clock"></i> ${foundLesson.duration}</span>
        </div>
  `;
  
  // Add sections
  foundLesson.content.sections.forEach(section => {
    html += `<div class="lesson-section">
      <h4>${section.title}</h4>
      ${section.text ? `<p>${section.text}</p>` : ''}
    `;
    
    // Add bullets if present
    if (section.bullets && section.bullets.length > 0) {
      html += '<ul>';
      section.bullets.forEach(bullet => {
        html += `<li>${bullet}</li>`;
      });
      html += '</ul>';
    }
    
    // Add subsections if present
    if (section.subsections && section.subsections.length > 0) {
      section.subsections.forEach(subsection => {
        html += `
          <div class="lesson-subsection">
            <h5>${subsection.title}</h5>
            ${subsection.text ? `<p>${subsection.text}</p>` : ''}
        `;
        
        // Add bullets if present
        if (subsection.bullets && subsection.bullets.length > 0) {
          html += '<ul>';
          subsection.bullets.forEach(bullet => {
            html += `<li>${bullet}</li>`;
          });
          html += '</ul>';
        }
        
        html += '</div>'; // Close subsection
      });
    }
    
    html += '</div>'; // Close section
  });
  
  // Add progress tracking elements
  html += `
        <div class="lesson-progress">
          <div class="progress-bar">
            <div class="progress" style="width: 0%"></div>
          </div>
          <button class="mark-complete-btn">Mark as Complete</button>
        </div>
  `;
  
  // Add quiz section (if available)
  if (foundLesson.content.quiz) {
    const quiz = foundLesson.content.quiz;
    html += `
        <div class="quiz-section">
          <h4>${quiz.title}</h4>
          <p>Test your knowledge of what you've learned in this lesson:</p>
          <button class="start-quiz-btn btn primary">Start Quiz</button>
          
          <div class="quiz-container" style="display: none;">
    `;
    
    // Add questions
    quiz.questions.forEach((question, index) => {
      html += `
            <div class="quiz-question" data-correct-answer="${question.correctAnswer}">
              <p class="question-text">${index + 1}. ${question.question}</p>
              <div class="question-options">
      `;
      
      // Add options
      question.options.forEach((option, optIndex) => {
        html += `
                <div class="option">
                  <input type="radio" id="q${index}-o${optIndex}" name="q${index}" value="${optIndex}">
                  <label for="q${index}-o${optIndex}">${option}</label>
                </div>
        `;
      });
      
      html += `
              </div>
              <div class="question-result" style="display: none;"></div>
              <div class="explanation" style="display: none;">${question.explanation}</div>
            </div>
      `;
    });
    
    // Add submit button and results section
    html += `
            <button class="submit-quiz-btn btn primary">Submit Answers</button>
            
            <div class="quiz-results" style="display: none;">
              <h4>Quiz Results</h4>
              <p>Your score: <span class="quiz-score">0/0</span></p>
              <p class="quiz-feedback"></p>
            </div>
          </div>
        </div>
    `;
  }
  
  html += `
      </div>
    </div>
  `;
  
  return html;
}

function setupQuizFilters() {
  const filterButtons = document.querySelectorAll('.quiz-filter-btn');
  if (!filterButtons.length) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Load quizzes for selected category
      const category = this.getAttribute('data-category');
      loadQuizzes(category);
    });
  });
}

function loadQuizzes(category) {
  const quizzesContainer = document.getElementById('quizzes-container');
  if (!quizzesContainer) return;
  
  // Import detailed quiz data
  let quizData = [];
  
  // Use detailed quiz data if available, otherwise fallback to basic data
  if (typeof detailedMedicalQuizzes !== 'undefined') {
    quizData = detailedMedicalQuizzes;
  } else {
    quizData = medicalQuizzes;
  }
  
  // Filter quizzes by category
  let filteredQuizzes = [];
  if (category === 'all') {
    filteredQuizzes = quizData;
  } else {
    filteredQuizzes = quizData.filter(quiz => quiz.category === category);
  }
  
  // Display message if no quizzes found
  if (filteredQuizzes.length === 0) {
    quizzesContainer.innerHTML = `
      <div class="no-quizzes">
        <i class="fas fa-search"></i>
        <p>No quizzes found in this category. Please try another filter.</p>
      </div>
    `;
    return;
  }
  
  // Create HTML for quizzes
  let quizzesHTML = '<div class="quizzes-grid">';
  
  filteredQuizzes.forEach(quiz => {
    // Determine difficulty class for color-coding
    let difficultyClass = '';
    switch(quiz.difficulty) {
      case 'Beginner':
        difficultyClass = 'beginner';
        break;
      case 'Intermediate':
        difficultyClass = 'intermediate';
        break;
      case 'Advanced':
        difficultyClass = 'advanced';
        break;
    }
    
    // Get question count (either from questions array or questions property)
    const questionCount = quiz.questions.length || quiz.questions;
    
    // Get image (either from imageUrl or image property)
    const imageSource = quiz.imageUrl || quiz.image;
    
    quizzesHTML += `
      <div class="quiz-card" data-quiz-id="${quiz.id}">
        <div class="quiz-image">
          <img src="${imageSource}" alt="${quiz.title}" onerror="this.src='https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'">
          <div class="quiz-category">${quiz.category.charAt(0).toUpperCase() + quiz.category.slice(1)}</div>
        </div>
        <div class="quiz-content">
          <h4>${quiz.title}</h4>
          <p>${quiz.description}</p>
          <div class="quiz-meta">
            <span class="difficulty ${difficultyClass}">${quiz.difficulty}</span>
            <span class="questions">${questionCount} questions</span>
            <span class="time">${quiz.timeEstimate}</span>
          </div>
          <button class="start-quiz-btn">Start Quiz</button>
        </div>
      </div>
    `;
  });
  
  quizzesHTML += '</div>';
  quizzesContainer.innerHTML = quizzesHTML;
  
  // Add event listeners to quiz cards
  const quizButtons = document.querySelectorAll('.start-quiz-btn');
  quizButtons.forEach(button => {
    button.addEventListener('click', function() {
      const quizCard = this.closest('.quiz-card');
      const quizId = quizCard.getAttribute('data-quiz-id');
      startQuiz(quizId);
    });
  });
}

function startQuiz(quizId) {
  // Try to get quiz from detailed data first, fall back to basic data
  let quiz;
  if (typeof detailedMedicalQuizzes !== 'undefined') {
    quiz = detailedMedicalQuizzes.find(q => q.id == quizId);
  }
  
  // If not found in detailed data, try the basic data
  if (!quiz && typeof medicalQuizzes !== 'undefined') {
    quiz = medicalQuizzes.find(q => q.id == quizId);
  }
  
  if (!quiz) return;
  
  // Create a modal for the quiz
  const quizModal = document.createElement('div');
  quizModal.className = 'lesson-modal';
  
  // Generate quiz content HTML
  let quizContentHTML = '';
  let hasDetailedQuestions = quiz.questions && Array.isArray(quiz.questions);
  
  if (hasDetailedQuestions) {
    // Generate content with actual quiz questions
    quizContentHTML = `
      <div class="full-quiz-content">
        <div class="quiz-progress">Question <span id="current-question">1</span> of ${quiz.questions.length}</div>
        <div class="quiz-questions-container">
    `;
    
    quiz.questions.forEach((question, index) => {
      quizContentHTML += `
        <div class="full-quiz-question" id="question-${index}" ${index > 0 ? 'style="display:none;"' : ''}>
          <h4 class="question-text">${question.question}</h4>
          <div class="options-list">
      `;
      
      question.options.forEach((option, optIndex) => {
        quizContentHTML += `
          <div class="quiz-option">
            <input type="radio" id="q${index}-opt${optIndex}" name="quiz-question-${index}" value="${optIndex}">
            <label for="q${index}-opt${optIndex}">${option}</label>
          </div>
        `;
      });
      
      quizContentHTML += `
          </div>
          <div class="question-result" style="display:none;"></div>
          <div class="question-explanation" style="display:none;">${question.explanation}</div>
        </div>
      `;
    });
    
    quizContentHTML += `
        </div>
        <div class="quiz-navigation">
          <button class="quiz-prev-btn" disabled>Previous</button>
          <button class="quiz-next-btn">Next</button>
          <button class="quiz-submit-btn" style="display:none;">Submit Quiz</button>
        </div>
        <div class="quiz-results" style="display:none;">
          <h4>Your Results</h4>
          <div class="score-display">
            <div class="score-circle">
              <span class="score-percentage">0%</span>
            </div>
            <p class="score-text">You answered <span class="correct-count">0</span> out of ${quiz.questions.length} questions correctly.</p>
          </div>
          <div class="result-feedback"></div>
          <button class="review-answers-btn">Review Answers</button>
          <button class="close-quiz-btn">Close Quiz</button>
        </div>
      </div>
    `;
  } else {
    // Fallback content if no detailed questions available
    quizContentHTML = `
      <div class="full-quiz-content" style="display:none;">
        <p>This quiz contains a series of multiple-choice questions to test your knowledge on ${quiz.title}.</p>
        <p>In a complete implementation, this would include:</p>
        <ul>
          <li>Multiple choice questions about ${quiz.category}</li>
          <li>Clinical scenarios and case studies</li>
          <li>Diagnostic challenges</li>
          <li>Treatment decision points</li>
        </ul>
        <p>After completion, you would receive detailed feedback on your performance with explanations for each answer.</p>
      </div>
    `;
  }
  
  // Complete the modal HTML
  quizModal.innerHTML = `
    <div class="lesson-detail-container">
      <div class="lesson-detail-header">
        <h3>${quiz.title}</h3>
        <button class="close-lesson-btn"><i class="fas fa-times"></i></button>
      </div>
      <div class="lesson-detail-content">
        <p>${quiz.description}</p>
        <div class="quiz-info">
          <span class="difficulty ${quiz.difficulty.toLowerCase()}">${quiz.difficulty}</span>
          <span class="questions">${hasDetailedQuestions ? quiz.questions.length : quiz.questions} questions</span>
          <span class="time">${quiz.timeEstimate}</span>
        </div>
        
        <div class="full-quiz-container">
          ${!hasDetailedQuestions ? '<p>This quiz contains a series of multiple-choice questions to test your knowledge.</p>' : ''}
          <button class="start-full-quiz-btn btn primary">Begin Quiz</button>
          ${quizContentHTML}
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(quizModal);
  
  // Show the modal with animation
  setTimeout(() => {
    quizModal.classList.add('active');
  }, 10);
  
  // Add event listener to close button
  const closeBtn = quizModal.querySelector('.close-lesson-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      quizModal.classList.remove('active');
      setTimeout(() => {
        document.body.removeChild(quizModal);
      }, 300);
    });
  }
  
  // Add event listener to start quiz button
  const startBtn = quizModal.querySelector('.start-full-quiz-btn');
  if (startBtn) {
    startBtn.addEventListener('click', function() {
      const quizContent = quizModal.querySelector('.full-quiz-content');
      if (quizContent) {
        quizContent.style.display = 'block';
        this.style.display = 'none';
      }
    });
  }
  
  // If we have detailed questions, set up the quiz navigation
  if (hasDetailedQuestions) {
    // Set up question navigation
    const prevBtn = quizModal.querySelector('.quiz-prev-btn');
    const nextBtn = quizModal.querySelector('.quiz-next-btn');
    const submitBtn = quizModal.querySelector('.quiz-submit-btn');
    const currentQuestionSpan = quizModal.querySelector('#current-question');
    let currentQuestion = 0;
    
    function updateQuestionNavigation() {
      // Update the current question indicator
      if (currentQuestionSpan) {
        currentQuestionSpan.textContent = currentQuestion + 1;
      }
      
      // Update button states
      if (prevBtn) {
        prevBtn.disabled = currentQuestion === 0;
      }
      
      if (nextBtn && submitBtn) {
        if (currentQuestion === quiz.questions.length - 1) {
          nextBtn.style.display = 'none';
          submitBtn.style.display = 'block';
        } else {
          nextBtn.style.display = 'block';
          submitBtn.style.display = 'none';
        }
      }
    }
    
    function showQuestion(index) {
      // Hide all questions
      const allQuestions = quizModal.querySelectorAll('.full-quiz-question');
      allQuestions.forEach(q => q.style.display = 'none');
      
      // Show the specified question
      const questionToShow = quizModal.querySelector(`#question-${index}`);
      if (questionToShow) {
        questionToShow.style.display = 'block';
      }
      
      currentQuestion = index;
      updateQuestionNavigation();
    }
    
    // Add event listeners to navigation buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        if (currentQuestion > 0) {
          showQuestion(currentQuestion - 1);
        }
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        if (currentQuestion < quiz.questions.length - 1) {
          showQuestion(currentQuestion + 1);
        }
      });
    }
    
    if (submitBtn) {
      submitBtn.addEventListener('click', function() {
        gradeQuiz(quizModal, quiz);
      });
    }
    
    // Set up review answers button functionality
    const reviewBtn = quizModal.querySelector('.review-answers-btn');
    if (reviewBtn) {
      reviewBtn.addEventListener('click', function() {
        const resultsSection = quizModal.querySelector('.quiz-results');
        const questionsContainer = quizModal.querySelector('.quiz-questions-container');
        const navigationBtns = quizModal.querySelector('.quiz-navigation');
        
        if (resultsSection) resultsSection.style.display = 'none';
        if (questionsContainer) questionsContainer.style.display = 'block';
        if (navigationBtns) navigationBtns.style.display = 'flex';
        
        // Show all questions with their results
        const allQuestions = quizModal.querySelectorAll('.full-quiz-question');
        allQuestions.forEach(q => {
          q.style.display = 'block';
          const result = q.querySelector('.question-result');
          const explanation = q.querySelector('.question-explanation');
          if (result) result.style.display = 'block';
          if (explanation) explanation.style.display = 'block';
        });
      });
    }
    
    // Set up close quiz button functionality
    const closeQuizBtn = quizModal.querySelector('.close-quiz-btn');
    if (closeQuizBtn) {
      closeQuizBtn.addEventListener('click', function() {
        quizModal.classList.remove('active');
        setTimeout(() => {
          document.body.removeChild(quizModal);
        }, 300);
      });
    }
    
    // Initialize with the first question
    showQuestion(0);
  }
}

function gradeQuiz(quizModal, quiz) {
  let correctAnswers = 0;
  const userAnswers = [];
  
  // Collect user answers
  quiz.questions.forEach((question, index) => {
    const selectedOption = quizModal.querySelector(`input[name="quiz-question-${index}"]:checked`);
    if (selectedOption) {
      const userChoice = parseInt(selectedOption.value);
      userAnswers.push(userChoice);
      
      // Check if answer is correct
      if (userChoice === question.correctAnswer) {
        correctAnswers++;
      }
      
      // Display result for this question
      const questionElement = quizModal.querySelector(`#question-${index}`);
      const resultElement = questionElement.querySelector('.question-result');
      const explanationElement = questionElement.querySelector('.question-explanation');
      
      if (resultElement) {
        if (userChoice === question.correctAnswer) {
          resultElement.textContent = 'Correct!';
          resultElement.className = 'question-result correct';
        } else {
          resultElement.textContent = `Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`;
          resultElement.className = 'question-result incorrect';
        }
        resultElement.style.display = 'block';
      }
      
      if (explanationElement) {
        explanationElement.style.display = 'block';
      }
    }
  });
  
  // Calculate score
  const scorePercentage = Math.round((correctAnswers / quiz.questions.length) * 100);
  
  // Hide questions and show results
  const questionsContainer = quizModal.querySelector('.quiz-questions-container');
  const navigationBtns = quizModal.querySelector('.quiz-navigation');
  const resultsSection = quizModal.querySelector('.quiz-results');
  
  if (questionsContainer) questionsContainer.style.display = 'none';
  if (navigationBtns) navigationBtns.style.display = 'none';
  if (resultsSection) resultsSection.style.display = 'block';
  
  // Update results display
  const scorePercentageElement = quizModal.querySelector('.score-percentage');
  const correctCountElement = quizModal.querySelector('.correct-count');
  const feedbackElement = quizModal.querySelector('.result-feedback');
  
  if (scorePercentageElement) scorePercentageElement.textContent = `${scorePercentage}%`;
  if (correctCountElement) correctCountElement.textContent = correctAnswers;
  
  // Provide feedback based on score
  if (feedbackElement) {
    let feedbackText = '';
    let feedbackClass = '';
    
    if (scorePercentage >= 90) {
      feedbackText = 'Excellent! You have a strong understanding of this topic.';
      feedbackClass = 'excellent';
    } else if (scorePercentage >= 70) {
      feedbackText = 'Good job! You have a solid understanding of the material.';
      feedbackClass = 'good';
    } else if (scorePercentage >= 50) {
      feedbackText = 'Not bad! Review the questions you missed to improve your knowledge.';
      feedbackClass = 'average';
    } else {
      feedbackText = 'Keep studying! Review this topic and try again to improve your score.';
      feedbackClass = 'needs-improvement';
    }
    
    feedbackElement.textContent = feedbackText;
    feedbackElement.className = `result-feedback ${feedbackClass}`;
  }
}

// Simulation related functions (basic implementation)
const vitalSignsData = {
  normal: {
    heartRate: "72 BPM",
    bloodPressure: "120/80 mmHg",
    oxygen: "98%",
    temperature: "36.6°C"
  },
  tachycardia: {
    heartRate: "115 BPM",
    bloodPressure: "135/90 mmHg",
    oxygen: "96%",
    temperature: "37.2°C"
  },
  bradycardia: {
    heartRate: "45 BPM",
    bloodPressure: "95/60 mmHg",
    oxygen: "94%",
    temperature: "36.1°C"
  },
  hypertensive: {
    heartRate: "95 BPM",
    bloodPressure: "190/110 mmHg",
    oxygen: "92%",
    temperature: "37.8°C"
  }
};

document.addEventListener('DOMContentLoaded', function() {
  // Set up simulation event listeners
  const organButtons = document.querySelectorAll('.organ-btn');
  const scenarioButtons = document.querySelectorAll('.scenario-btn');
  const startButton = document.getElementById('start-btn');
  const resetButton = document.getElementById('reset-btn');
  
  if (organButtons.length) {
    organButtons.forEach(button => {
      button.addEventListener('click', function() {
        const organ = this.getAttribute('data-organ');
        selectOrgan(organ, this);
      });
    });
  }
  
  if (scenarioButtons.length) {
    scenarioButtons.forEach(button => {
      button.addEventListener('click', function() {
        const scenario = this.getAttribute('data-scenario');
        selectScenario(scenario, this);
      });
    });
  }
  
  if (startButton) {
    startButton.addEventListener('click', startSimulation);
  }
  
  if (resetButton) {
    resetButton.addEventListener('click', resetSimulation);
  }
});

function selectOrgan(organ, button) {
  // Update UI to show selected organ
  document.querySelectorAll('.organ-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  button.classList.add('active');
  
  // Update title and enable buttons
  const titleElement = document.getElementById('selected-organ-title');
  if (titleElement) {
    switch(organ) {
      case 'heart':
        titleElement.textContent = 'Cardiovascular System Simulation';
        break;
      case 'brain':
        titleElement.textContent = 'Nervous System Simulation';
        break;
      case 'lungs':
        titleElement.textContent = 'Respiratory System Simulation';
        break;
    }
  }
  
  // Enable controls
  document.getElementById('start-btn').disabled = false;
  document.getElementById('reset-btn').disabled = false;
}

function selectScenario(scenario, button) {
  // Update UI to show selected scenario
  document.querySelectorAll('.scenario-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  button.classList.add('active');
}

function startSimulation() {
  const selectedScenarioBtn = document.querySelector('.scenario-btn.active');
  if (!selectedScenarioBtn) {
    alert('Please select a scenario first');
    return;
  }
  
  const scenario = selectedScenarioBtn.getAttribute('data-scenario');
  updateVitalSigns(scenario);
}

function updateVitalSigns(scenario) {
  const data = vitalSignsData[scenario];
  if (!data) return;
  
  document.getElementById('heart-rate').textContent = data.heartRate;
  document.getElementById('blood-pressure').textContent = data.bloodPressure;
  document.getElementById('oxygen').textContent = data.oxygen;
  document.getElementById('temperature').textContent = data.temperature;
}

function resetSimulation() {
  // Reset vital signs display
  document.getElementById('heart-rate').textContent = '-- BPM';
  document.getElementById('blood-pressure').textContent = '--/-- mmHg';
  document.getElementById('oxygen').textContent = '--%';
  document.getElementById('temperature').textContent = '--°C';
  
  // Reset selected scenario
  document.querySelectorAll('.scenario-btn').forEach(btn => {
    btn.classList.remove('active');
  });
}
