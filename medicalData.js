
// Comprehensive Medical Data for the MediConnect AI Bot

const medicalData = {
  // Medical conditions database
  medicalConditionsDatabase: {
    'diabetes': {
      title: 'Diabetes',
      description: 'Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose from food get into your cells to be used for energy.',
      symptoms: ['Increased thirst', 'Frequent urination', 'Extreme hunger', 'Unexplained weight loss', 'Fatigue', 'Irritability', 'Blurred vision', 'Slow-healing sores', 'Frequent infections'],
      treatments: ['Insulin therapy', 'Oral medications', 'Healthy diet', 'Regular physical activity', 'Blood sugar monitoring', 'Pancreas transplant (in some cases)']
    },
    'hypertension': {
      title: 'Hypertension (High Blood Pressure)',
      description: 'High blood pressure is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease.',
      symptoms: ['Headaches', 'Shortness of breath', 'Nosebleeds', 'Often asymptomatic ("silent killer")'],
      treatments: ['Diuretics', 'ACE inhibitors', 'Calcium channel blockers', 'Low-sodium diet', 'Regular exercise', 'Limiting alcohol', 'Stress reduction', 'Regular monitoring']
    },
    'asthma': {
      title: 'Asthma',
      description: 'Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, a whistling sound (wheezing) when you breathe out and shortness of breath.',
      symptoms: ['Shortness of breath', 'Chest tightness or pain', 'Wheezing when exhaling', 'Trouble sleeping caused by coughing or wheezing', 'Coughing or wheezing attacks worsened by respiratory viruses'],
      treatments: ['Inhaled corticosteroids', 'Leukotriene modifiers', 'Long-acting beta agonists', 'Combination inhalers', 'Avoiding triggers', 'Bronchodilators', 'Immunotherapy']
    },
    'migraine': {
      title: 'Migraine',
      description: 'A migraine is a headache that can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It\'s often accompanied by nausea, vomiting, and extreme sensitivity to light and sound.',
      symptoms: ['Throbbing pain', 'Nausea', 'Vomiting', 'Sensitivity to light and sound', 'Visual disturbances (aura)', 'Tingling on one side of the face or in arm/leg', 'Difficulty speaking'],
      treatments: ['Pain relievers', 'Triptans', 'Anti-nausea medications', 'Preventive medications', 'Lifestyle changes', 'CGRP antagonists', 'Botox injections']
    },
    'arthritis': {
      title: 'Arthritis',
      description: 'Arthritis is the swelling and tenderness of one or more joints. The main symptoms of arthritis are joint pain and stiffness, which typically worsen with age.',
      symptoms: ['Joint pain', 'Stiffness', 'Swelling', 'Redness', 'Decreased range of motion', 'Morning stiffness', 'Fatigue'],
      treatments: ['Physical therapy', 'Medications', 'Surgery in severe cases', 'Weight loss if needed', 'Regular exercise', 'Heat and cold therapy', 'Joint injections']
    },
    'pneumonia': {
      title: 'Pneumonia',
      description: 'Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus, causing cough with phlegm or pus, fever, chills, and difficulty breathing.',
      symptoms: ['Chest pain when breathing or coughing', 'Confusion (in older people)', 'Cough with phlegm', 'Fatigue', 'Fever, sweating and shaking chills', 'Lower than normal body temperature'],
      treatments: ['Antibiotics', 'Cough medicine', 'Fever reducers/pain relievers', 'Hospitalization in severe cases', 'Oxygen therapy', 'IV fluids', 'Respiratory therapy']
    },
    'cancer': {
      title: 'Cancer',
      description: 'Cancer is a disease in which some of the body\'s cells grow uncontrollably and spread to other parts of the body. It can start almost anywhere in the human body, which is made up of trillions of cells.',
      symptoms: ['Fatigue', 'Lump or area of thickening', 'Weight changes', 'Skin changes', 'Changes in bowel or bladder habits', 'Persistent cough', 'Persistent indigestion', 'Unexplained bleeding'],
      treatments: ['Surgery', 'Chemotherapy', 'Radiation therapy', 'Immunotherapy', 'Targeted therapy', 'Hormone therapy', 'Stem cell transplant', 'Precision medicine']
    },
    'alzheimers': {
      title: 'Alzheimer\'s Disease',
      description: 'Alzheimer\'s disease is a progressive neurologic disorder that causes the brain to shrink (atrophy) and brain cells to die. It is the most common cause of dementia — a continuous decline in thinking, behavioral and social skills that affects a person\'s ability to function independently.',
      symptoms: ['Memory loss', 'Difficulty with familiar tasks', 'Language problems', 'Disorientation', 'Poor judgment', 'Problems with abstract thinking', 'Misplacing things', 'Mood and behavior changes'],
      treatments: ['Cholinesterase inhibitors', 'Memantine', 'Aducanumab', 'Supportive care', 'Lifestyle modifications', 'Environmental modifications', 'Behavioral strategies']
    },
    'heart disease': {
      title: 'Heart Disease',
      description: 'Heart disease describes a range of conditions that affect your heart. Diseases under the heart disease umbrella include blood vessel diseases, such as coronary artery disease; heart rhythm problems (arrhythmias); and heart defects you\'re born with (congenital heart defects), among others.',
      symptoms: ['Chest pain (angina)', 'Shortness of breath', 'Pain in the neck, jaw, throat, upper abdomen or back', 'Numbness, weakness, coldness in legs or arms', 'Racing heartbeat (tachycardia)', 'Slow heartbeat (bradycardia)', 'Lightheadedness', 'Dizziness', 'Fainting (syncope)'],
      treatments: ['Medication', 'Surgery', 'Lifestyle changes', 'Cardiac rehabilitation']
    },
    'heart attack': {
      title: 'Heart Attack (Myocardial Infarction)',
      description: 'A heart attack occurs when blood flow to a part of the heart is blocked, usually by a blood clot. Without oxygenated blood, heart muscles begin to die. A heart attack is a medical emergency that requires immediate attention.',
      symptoms: ['Chest pain or pressure', 'Pain spreading to shoulders, arms, back, neck, or jaw', 'Nausea or vomiting', 'Shortness of breath', 'Cold sweat', 'Fatigue', 'Lightheadedness or dizziness'],
      treatments: ['Aspirin', 'Thrombolytics', 'Antiplatelet agents', 'Coronary angioplasty', 'Coronary artery bypass graft (CABG)', 'Cardiac rehabilitation']
    },
    'stroke': {
      title: 'Stroke',
      description: 'A stroke occurs when blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die within minutes.',
      symptoms: ['Trouble speaking or understanding', 'Paralysis or numbness in face, arm, or leg', 'Vision problems', 'Headache', 'Trouble walking', 'Loss of balance or coordination'],
      treatments: ['Tissue plasminogen activator (tPA)', 'Mechanical thrombectomy', 'Blood pressure medication', 'Anti-platelet drugs', 'Rehabilitation']
    },
    'arrhythmia': {
      title: 'Arrhythmia (Abnormal Heart Rhythm)',
      description: 'An arrhythmia is an irregular heartbeat. Your heart may beat too quickly, too slowly, or with an irregular rhythm.',
      symptoms: ['Fluttering in chest', 'Racing heartbeat', 'Slow heartbeat', 'Chest pain', 'Shortness of breath', 'Lightheadedness', 'Dizziness', 'Fainting'],
      treatments: ['Medications', 'Pacemaker', 'Implantable cardioverter-defibrillator (ICD)', 'Catheter ablation', 'Maze procedure']
    },
    'atherosclerosis': {
      title: 'Atherosclerosis',
      description: 'Atherosclerosis is the buildup of fats, cholesterol and other substances in and on your artery walls, which can restrict blood flow.',
      symptoms: ['Chest pain or pressure (angina)', 'Sudden numbness or weakness in arms or legs', 'Difficulty speaking or slurred speech', 'Drooping facial muscles', 'Leg pain when walking', 'High blood pressure', 'Kidney failure'],
      treatments: ['Statins', 'Anti-platelet medications', 'ACE inhibitors', 'Beta blockers', 'Calcium channel blockers', 'Angioplasty', 'Bypass surgery']
    },
    'copd': {
      title: 'Chronic Obstructive Pulmonary Disease (COPD)',
      description: 'COPD is a chronic inflammatory lung disease that causes obstructed airflow from the lungs.',
      symptoms: ['Shortness of breath', 'Wheezing', 'Chest tightness', 'Chronic cough', 'Frequent respiratory infections', 'Lack of energy', 'Unintended weight loss'],
      treatments: ['Bronchodilators', 'Inhaled steroids', 'Oxygen therapy', 'Pulmonary rehabilitation', 'Surgery', 'Lung transplant']
    },
    'pulmonary embolism': {
      title: 'Pulmonary Embolism',
      description: 'A pulmonary embolism is a blockage in one of the pulmonary arteries in your lungs, most often caused by blood clots that travel to the lungs from deep veins in the legs.',
      symptoms: ['Shortness of breath', 'Chest pain', 'Cough (may cough up blood)', 'Rapid or irregular heartbeat', 'Lightheadedness or dizziness', 'Excessive sweating', 'Fever', 'Leg pain or swelling'],
      treatments: ['Anticoagulants (blood thinners)', 'Thrombolytics', 'Surgical clot removal', 'Vena cava filter']
    },
    'tuberculosis': {
      title: 'Tuberculosis (TB)',
      description: 'Tuberculosis is a potentially serious infectious disease that mainly affects the lungs. The bacteria that cause TB are spread when an infected person coughs or sneezes.',
      symptoms: ['Coughing (may cough up blood)', 'Chest pain', 'Pain with breathing or coughing', 'Night sweats', 'Fever', 'Chills', 'Loss of appetite', 'Unintentional weight loss', 'Fatigue'],
      treatments: ['Antibiotics (for several months)', 'Directly observed therapy']
    },
    'hypothyroidism': {
      title: 'Hypothyroidism',
      description: 'Hypothyroidism (underactive thyroid) is a condition in which your thyroid gland doesn\'t produce enough of certain important hormones.',
      symptoms: ['Fatigue', 'Increased sensitivity to cold', 'Constipation', 'Dry skin', 'Weight gain', 'Puffy face', 'Hoarseness', 'Muscle weakness', 'Elevated blood cholesterol level', 'Muscle aches, tenderness and stiffness', 'Depression', 'Impaired memory'],
      treatments: ['Synthetic thyroid hormone (levothyroxine)', 'Regular monitoring and dosage adjustments']
    },
    'hyperthyroidism': {
      title: 'Hyperthyroidism',
      description: 'Hyperthyroidism (overactive thyroid) occurs when your thyroid gland produces too much of the hormone thyroxine.',
      symptoms: ['Unintentional weight loss', 'Rapid heartbeat (tachycardia)', 'Irregular heartbeat (arrhythmia)', 'Palpitations', 'Increased appetite', 'Nervousness, anxiety and irritability', 'Tremor', 'Sweating', 'Changes in menstrual patterns', 'Increased sensitivity to heat', 'More frequent bowel movements', 'Goiter'],
      treatments: ['Anti-thyroid medications', 'Radioactive iodine', 'Beta blockers', 'Surgery', 'Regular monitoring']
    },
    'cushing syndrome': {
      title: 'Cushing Syndrome',
      description: 'Cushing syndrome occurs when your body is exposed to high levels of the hormone cortisol for a long time.',
      symptoms: ['Weight gain', 'Thinning, fragile skin that bruises easily', 'Acne', 'Slow healing of cuts, insect bites and infections', 'Red, purple stretch marks', 'Depression, anxiety and irritability', 'Loss of emotional control', 'Cognitive difficulties', 'Fatigue', 'Headache', 'Loss of muscle mass and muscle weakness'],
      treatments: ['Reducing corticosteroid medications', 'Surgery', 'Radiation therapy', 'Medications']
    },
    'addison disease': {
      title: 'Addison\'s Disease',
      description: 'Addison\'s disease is a disorder that occurs when your body produces insufficient amounts of certain hormones produced by your adrenal glands.',
      symptoms: ['Extreme fatigue', 'Weight loss', 'Decreased appetite', 'Darkening of skin (hyperpigmentation)', 'Low blood pressure', 'Salt craving', 'Low blood sugar (hypoglycemia)', 'Nausea, diarrhea or vomiting', 'Abdominal pain', 'Muscle or joint pains', 'Irritability', 'Depression'],
      treatments: ['Oral corticosteroids', 'Mineralocorticoids', 'Androgen replacement therapy for women']
    },
    'alzheimer disease': {
      title: 'Alzheimer\'s Disease',
      description: 'Alzheimer\'s disease is a progressive disorder that causes brain cells to waste away (degenerate) and die. It\'s the most common cause of dementia — a continuous decline in thinking, behavioral and social skills that disrupts a person\'s ability to function independently.',
      symptoms: ['Memory loss', 'Difficulty thinking and understanding', 'Confusion', 'Difficulty speaking, swallowing or walking', 'Inability to recognize common things', 'Personality changes', 'Behavioral changes', 'Paranoia and delusions'],
      treatments: ['Cholinesterase inhibitors', 'Memantine', 'Lifestyle modifications', 'Supportive care']
    },
    'parkinson disease': {
      title: 'Parkinson\'s Disease',
      description: 'Parkinson\'s disease is a progressive nervous system disorder that affects movement. Symptoms start gradually, sometimes with a barely noticeable tremor in just one hand.',
      symptoms: ['Tremor', 'Slowed movement (bradykinesia)', 'Rigid muscles', 'Impaired posture and balance', 'Loss of automatic movements', 'Speech changes', 'Writing changes'],
      treatments: ['Medication', 'Deep brain stimulation', 'Physical therapy', 'Speech-language therapy', 'Occupational therapy']
    },
    'multiple sclerosis': {
      title: 'Multiple Sclerosis (MS)',
      description: 'Multiple sclerosis is a potentially disabling disease of the brain and spinal cord (central nervous system). In MS, the immune system attacks the protective sheath (myelin) that covers nerve fibers and causes communication problems between your brain and the rest of your body.',
      symptoms: ['Numbness or weakness in limbs', 'Electric-shock sensations with certain neck movements', 'Tremor', 'Lack of coordination', 'Partial or complete loss of vision', 'Prolonged double vision', 'Dizziness', 'Fatigue', 'Slurred speech', 'Problems with sexual, bowel and bladder function'],
      treatments: ['Corticosteroids', 'Disease-modifying therapies', 'Plasma exchange', 'Physical therapy', 'Muscle relaxants', 'Medications to reduce fatigue']
    },
    'epilepsy': {
      title: 'Epilepsy',
      description: 'Epilepsy is a central nervous system (neurological) disorder in which brain activity becomes abnormal, causing seizures or periods of unusual behavior, sensations, and sometimes loss of awareness.',
      symptoms: ['Temporary confusion', 'Staring spell', 'Uncontrollable jerking movements of the arms and legs', 'Loss of consciousness or awareness', 'Psychic symptoms such as fear, anxiety or deja vu'],
      treatments: ['Anti-seizure medications', 'Surgery', 'Vagus nerve stimulation', 'Ketogenic diet', 'Deep brain stimulation']
    },
    'irritable bowel syndrome': {
      title: 'Irritable Bowel Syndrome (IBS)',
      description: 'Irritable bowel syndrome is a common disorder that affects the large intestine. Signs and symptoms include cramping, abdominal pain, bloating, gas, and diarrhea or constipation, or both.',
      symptoms: ['Abdominal pain, cramping or bloating', 'Excess gas', 'Diarrhea or constipation', 'Mucus in the stool'],
      treatments: ['Fiber supplements', 'Laxatives', 'Anti-diarrheal medications', 'Antispasmodic agents', 'Antidepressants', 'Antibiotics', 'Diet modification', 'Stress reduction']
    },
    'crohn disease': {
      title: 'Crohn\'s Disease',
      description: 'Crohn\'s disease is an inflammatory bowel disease (IBD). It causes inflammation of your digestive tract, which can lead to abdominal pain, severe diarrhea, fatigue, weight loss and malnutrition.',
      symptoms: ['Diarrhea', 'Fever', 'Fatigue', 'Abdominal pain and cramping', 'Blood in stool', 'Mouth sores', 'Reduced appetite and weight loss', 'Pain or drainage near or around the anus'],
      treatments: ['Anti-inflammatory drugs', 'Immune system suppressors', 'Antibiotics', 'Anti-diarrheal medications', 'Pain relievers', 'Iron supplements', 'Vitamin B-12 shots', 'Surgery']
    },
    'ulcerative colitis': {
      title: 'Ulcerative Colitis',
      description: 'Ulcerative colitis is an inflammatory bowel disease (IBD) that causes long-lasting inflammation and ulcers (sores) in your digestive tract. Ulcerative colitis affects the innermost lining of your large intestine (colon) and rectum.',
      symptoms: ['Diarrhea, often with blood or pus', 'Abdominal pain and cramping', 'Rectal pain', 'Rectal bleeding', 'Urgency to defecate', 'Inability to defecate despite urgency', 'Weight loss', 'Fatigue', 'Fever'],
      treatments: ['Anti-inflammatory drugs', 'Immune system suppressors', 'Biologics', 'JAK inhibitors', 'Other medications', 'Surgery']
    },
    'celiac disease': {
      title: 'Celiac Disease',
      description: 'Celiac disease is an immune reaction to eating gluten, a protein found in wheat, barley, and rye. If you have celiac disease, eating gluten triggers an immune response in your small intestine.',
      symptoms: ['Diarrhea', 'Fatigue', 'Weight loss', 'Bloating and gas', 'Abdominal pain', 'Nausea and vomiting', 'Constipation', 'Anemia', 'Reduced bone density (osteoporosis)', 'Rash', 'Headaches and fatigue', 'Nervous system injury', 'Joint pain'],
      treatments: ['Strict gluten-free diet', 'Vitamin and mineral supplements', 'Medication for severe cases']
    },
    'gastroesophageal reflux disease': {
      title: 'Gastroesophageal Reflux Disease (GERD)',
      description: 'Gastroesophageal reflux disease is a condition in which the stomach contents regularly move back up the food pipe. This regurgitation is known as reflux.',
      symptoms: ['Heartburn', 'Regurgitation', 'Dysphagia (difficulty swallowing)', 'Feeling that food is stuck in the throat', 'Chronic cough', 'Chronic sore throat', 'Laryngitis', 'Sleep disruption', 'Asthma'],
      treatments: ['Antacids', 'H2 blockers', 'Proton pump inhibitors', 'Surgery', 'Lifestyle modifications']
    },
    'rheumatoid arthritis': {
      title: 'Rheumatoid Arthritis',
      description: 'Rheumatoid arthritis is a chronic inflammatory disorder affecting many joints, including those in the hands and feet. Unlike osteoarthritis, rheumatoid arthritis affects the lining of your joints, causing a painful swelling that can eventually result in bone erosion and joint deformity.',
      symptoms: ['Tender, warm, swollen joints', 'Joint stiffness that is usually worse in the mornings', 'Fatigue, fever and loss of appetite', 'Symmetric pattern of affected joints'],
      treatments: ['NSAIDs', 'Steroids', 'Disease-modifying antirheumatic drugs (DMARDs)', 'Biologic agents', 'JAK inhibitors', 'Physical therapy', 'Occupational therapy', 'Surgery']
    },
    'osteoarthritis': {
      title: 'Osteoarthritis',
      description: 'Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of your bones wears down over time.',
      symptoms: ['Pain', 'Stiffness', 'Tenderness', 'Loss of flexibility', 'Grating sensation', 'Bone spurs', 'Swelling'],
      treatments: ['Acetaminophen', 'NSAIDs', 'Duloxetine', 'Physical therapy', 'Occupational therapy', 'Cortisone injections', 'Lubrication injections', 'Realigning bones', 'Joint replacement']
    },
    'osteoporosis': {
      title: 'Osteoporosis',
      description: 'Osteoporosis causes bones to become weak and brittle — so brittle that a fall or even mild stresses such as bending over or coughing can cause a fracture.',
      symptoms: ['Back pain', 'Loss of height over time', 'A stooped posture', 'A bone that breaks much more easily than expected'],
      treatments: ['Bisphosphonates', 'Hormone-related therapy', 'Biologics', 'Bone-building medications', 'Regular exercise', 'Calcium and vitamin D supplements']
    },
    'fibromyalgia': {
      title: 'Fibromyalgia',
      description: 'Fibromyalgia is a disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory and mood issues.',
      symptoms: ['Widespread pain', 'Fatigue', 'Cognitive difficulties', 'Headaches', 'Depression', 'Abdominal pain', 'Dry eyes', 'Bladder problems'],
      treatments: ['Pain relievers', 'Antidepressants', 'Anti-seizure drugs', 'Physical therapy', 'Occupational therapy', 'Counseling', 'Lifestyle modifications']
    },
    'eczema': {
      title: 'Eczema (Atopic Dermatitis)',
      description: 'Eczema is a condition where patches of skin become inflamed, itchy, red, cracked, and rough.',
      symptoms: ['Itching', 'Dry skin', 'Red rashes', 'Scaly patches', 'Crusting', 'Fluid-filled blisters', 'Raw skin from scratching'],
      treatments: ['Topical corticosteroids', 'Calcineurin inhibitors', 'Antihistamines', 'Phototherapy', 'Systemic immunosuppressants', 'Biologics', 'Proper skin care']
    },
    'psoriasis': {
      title: 'Psoriasis',
      description: 'Psoriasis is a skin disorder that causes skin cells to multiply up to 10 times faster than normal. This makes the skin build up into bumpy red patches covered with white scales.',
      symptoms: ['Red patches of skin covered with silvery scales', 'Small scaling spots', 'Dry, cracked skin that may bleed', 'Itching, burning or soreness', 'Thickened, pitted or ridged nails', 'Swollen and stiff joints'],
      treatments: ['Topical corticosteroids', 'Vitamin D analogues', 'Retinoids', 'Calcineurin inhibitors', 'Phototherapy', 'Oral or injected medications']
    },
    'acne': {
      title: 'Acne',
      description: 'Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells.',
      symptoms: ['Whiteheads', 'Blackheads', 'Papules', 'Pimples', 'Nodules', 'Cystic lesions'],
      treatments: ['Topical medications', 'Antibiotics', 'Retinoids', 'Hormonal therapy', 'Skin procedures']
    },
    'rosacea': {
      title: 'Rosacea',
      description: 'Rosacea is a common skin condition that causes redness and visible blood vessels in your face. It may also produce small, red, pus-filled bumps.',
      symptoms: ['Facial redness', 'Swollen red bumps', 'Eye problems', 'Enlarged nose', 'Feeling of heat or burning', 'Skin thickening'],
      treatments: ['Topical medications', 'Oral antibiotics', 'Isotretinoin', 'Laser therapy']
    },
    'melanoma': {
      title: 'Melanoma',
      description: 'Melanoma is a type of skin cancer that develops from the pigment-containing cells known as melanocytes. Melanomas typically occur in the skin but may rarely occur in the mouth, intestines, or eye.',
      symptoms: ['A change in an existing mole', 'Development of a new pigmented or unusual-looking growth on your skin', 'Moles with irregular borders', 'Moles with multiple colors', 'Moles larger than 6mm'],
      treatments: ['Surgery', 'Immunotherapy', 'Targeted therapy', 'Radiation therapy', 'Chemotherapy']
    }
  },

  // Medications database
  medicationsDatabase: {
    'aspirin': {
      title: 'Aspirin',
      description: 'Aspirin is a nonsteroidal anti-inflammatory drug (NSAID) used to treat pain, fever, and inflammation. It is also used as a blood thinner to prevent heart attacks and strokes in high-risk patients.',
      dosage: 'Typical dosage ranges from 81mg to 325mg, depending on the condition being treated.',
      sideEffects: ['Stomach upset', 'Heartburn', 'Nausea', 'Stomach bleeding', 'Allergic reactions'],
      warnings: 'Should not be given to children or teenagers with viral illnesses due to risk of Reye\'s syndrome. Consult a doctor before using if you have bleeding disorders, ulcers, or are taking blood thinners.'
    },
    'ibuprofen': {
      title: 'Ibuprofen',
      description: 'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to reduce fever and treat pain or inflammation caused by many conditions such as headache, toothache, back pain, arthritis, menstrual cramps, or minor injury.',
      dosage: 'Adults: 200-400mg every 4-6 hours as needed. Do not exceed 1,200mg in 24 hours without doctor supervision.',
      sideEffects: ['Stomach pain', 'Heartburn', 'Nausea', 'Vomiting', 'Headache', 'Dizziness'],
      warnings: 'Long-term or high-dose use may increase risk of heart attack or stroke. Not recommended during the last trimester of pregnancy.'
    },
    'acetaminophen': {
      title: 'Acetaminophen (Tylenol)',
      description: 'Acetaminophen is used to treat mild to moderate pain and reduce fever. Unlike NSAIDs, it doesn\'t treat inflammation.',
      dosage: 'Adults: 325-650mg every 4-6 hours as needed. Do not exceed 3,000mg in 24 hours.',
      sideEffects: ['Rare when taken as directed', 'Nausea', 'Rash', 'Liver damage (with overuse)'],
      warnings: 'Liver damage can occur if you take more than directed or with alcohol. Many combination medications contain acetaminophen, so be aware of total daily dose.'
    },
    'metformin': {
      title: 'Metformin',
      description: 'Metformin is an oral diabetes medicine that helps control blood sugar levels in people with type 2 diabetes.',
      dosage: 'Starting dose usually 500mg twice daily or 850mg once daily. Maximum dose typically 2,000-2,500mg daily, divided into 2-3 doses.',
      sideEffects: ['Nausea', 'Vomiting', 'Diarrhea', 'Gas', 'Loss of appetite', 'Metallic taste'],
      warnings: 'May cause lactic acidosis (rare but serious side effect). Should not be used in patients with kidney disease, liver disease, or conditions that may cause low oxygen levels.'
    },
    'atorvastatin': {
      title: 'Atorvastatin (Lipitor)',
      description: 'Atorvastatin belongs to a group of drugs called HMG CoA reductase inhibitors, or "statins," used to lower cholesterol and reduce the risk of heart disease.',
      dosage: 'Usual starting dose is 10-20mg once daily. Dose may be adjusted to 10-80mg once daily based on response.',
      sideEffects: ['Muscle pain', 'Joint pain', 'Nausea', 'Constipation', 'Diarrhea', 'Elevated liver enzymes'],
      warnings: 'Report unexplained muscle pain, tenderness, or weakness to your doctor immediately. May interact with grapefruit juice and certain medications.'
    },
    'lisinopril': {
      title: 'Lisinopril (Prinivil, Zestril)',
      description: 'An ACE inhibitor used to treat high blood pressure and heart failure.',
      uses: ['Hypertension treatment', 'Heart failure management', 'Improve survival after heart attack'],
      side_effects: ['Dry cough', 'Dizziness', 'High potassium levels', 'Low blood pressure', 'Angioedema'],
      interactions: ['Potassium supplements', 'Salt substitutes', 'Lithium', 'NSAIDs', 'Diuretics']
    },
    'acetaminophen': {
        name: 'Acetaminophen (Tylenol)',
        description: 'A pain reliever and fever reducer.',
        uses: ['Pain relief', 'Fever reduction'],
        side_effects: ['Rare allergic reaction', 'Liver damage (with high doses or in combination with alcohol)'],
        interactions: ['Alcohol', 'Warfarin', 'Isoniazid', 'Carbamazepine']
      },
      'ibuprofen': {
        name: 'Ibuprofen (Advil, Motrin)',
        description: 'A nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, inflammation, and fever.',
        uses: ['Pain relief', 'Inflammation reduction', 'Fever reduction'],
        side_effects: ['Stomach pain', 'Heartburn', 'Dizziness', 'Increased risk of heart attack or stroke', 'Gastrointestinal bleeding'],
        interactions: ['Aspirin', 'Blood thinners', 'Corticosteroids', 'Diuretics', 'ACE inhibitors']
      },
      'atorvastatin': {
        name: 'Atorvastatin (Lipitor)',
        description: 'A statin medication used to prevent cardiovascular disease and treat abnormal lipid levels.',
        uses: ['Lower cholesterol', 'Reduce risk of heart attack and stroke'],
        side_effects: ['Muscle pain', 'Liver problems', 'Digestive problems', 'Increased blood sugar', 'Memory problems'],
        interactions: ['Grapefruit juice', 'Erythromycin', 'Diltiazem', 'Gemfibrozil', 'Niacin']
      },
      'lisinopril': {
        name: 'Lisinopril (Prinivil, Zestril)',
        description: 'An ACE inhibitor used to treat high blood pressure and heart failure.',
        uses: ['Hypertension treatment', 'Heart failure management', 'Improve survival after heart attack'],
        side_effects: ['Dry cough', 'Dizziness', 'High potassium levels', 'Low blood pressure', 'Angioedema'],
        interactions: ['Potassium supplements', 'Salt substitutes', 'Lithium', 'NSAIDs', 'Diuretics']
      },
      'metformin': {
        name: 'Metformin (Glucophage)',
        description: 'An oral diabetes medicine that helps control blood sugar levels.',
        uses: ['Type 2 diabetes management', 'Insulin resistance in PCOS'],
        side_effects: ['Diarrhea', 'Nausea', 'Stomach upset', 'Metallic taste', 'Vitamin B12 deficiency'],
        interactions: ['Iodinated contrast media', 'Alcohol', 'Cimetidine', 'Certain diuretics', 'Corticosteroids']
      }
  },

  // Procedures database
  proceduresDatabase: {
    'colonoscopy': {
      title: 'Colonoscopy',
      description: 'A procedure to examine the large intestine (colon) and rectum using a flexible tube with a camera.',
      purposes: ['Colorectal cancer screening', 'Investigating intestinal symptoms', 'Removing polyps', 'Diagnosing inflammatory bowel disease'],
      risks: ['Bleeding', 'Infection', 'Bowel tear (perforation)', 'Adverse reaction to sedative'],
      preparation: ['Clear liquid diet for 1-3 days', 'Bowel preparation solution', 'Fasting']
    },
    'echocardiogram': {
      title: 'Echocardiogram',
      description: 'An ultrasound of the heart that creates images of the heart\'s chambers, valves, walls and blood vessels.',
      purposes: ['Assessing heart function', 'Diagnosing heart diseases', 'Monitoring heart conditions', 'Guiding certain heart procedures'],
      risks: ['Minimal to none', 'Discomfort from transducer pressure'],
      preparation: ['Generally no special preparation needed']
    },
    'mri': {
      title: 'Magnetic Resonance Imaging (MRI)',
      description: 'A medical imaging technique that uses a magnetic field and computer-generated radio waves to create detailed images of organs and tissues.',
      purposes: ['Diagnosing tumors', 'Identifying joint or spinal injuries', 'Detecting brain abnormalities', 'Evaluating blood vessels'],
      risks: ['Not suitable for people with certain metal implants', 'Rarely, contrast material can cause allergic reactions', 'Claustrophobia'],
      preparation: ['Remove metal objects', 'May need to avoid eating or drinking', 'Sometimes contrast material is injected']
    },
    'cataract surgery': {
      title: 'Cataract Surgery',
      description: 'A procedure to remove the lens of your eye and, in most cases, replace it with an artificial lens.',
      purposes: ['Improving vision dimmed by cataracts', 'Reducing glare and halos', 'Improving quality of life'],
      risks: ['Inflammation', 'Infection', 'Bleeding', 'Retinal detachment', 'Glaucoma', 'Secondary cataract'],
      preparation: ['Eye measurements before surgery', 'Antibiotic eye drops', 'Fasting before surgery']
    },
    'cesarean section': {
      title: 'Cesarean Section (C-section)',
      description: 'A surgical procedure used to deliver a baby through incisions in the abdomen and uterus.',
      purposes: ['When vaginal delivery would put baby or mother at risk', 'Emergency delivery needed', 'Previous C-section', 'Multiple births'],
      risks: ['Infection', 'Blood loss', 'Blood clots', 'Surgical injury', 'Breathing problems for the baby', 'Risks for future pregnancies'],
      preparation: ['Blood tests', 'Anesthesia consultation', 'Fasting', 'Abdominal preparation']
    }
  },

  // Specialties database
  specialtiesDatabase: {
    'cardiology': {
      name: 'Cardiology',
      description: 'The branch of medicine that deals with the diagnosis and treatment of diseases and disorders of the heart and blood vessels.',
      conditions_treated: ['Coronary artery disease', 'Heart failure', 'Arrhythmias', 'Valve disorders', 'Congenital heart defects'],
      procedures: ['Echocardiogram', 'Cardiac catheterization', 'Angioplasty', 'Pacemaker implantation', 'Cardioversion']
    },
    'neurology': {
      name: 'Neurology',
      description: 'The branch of medicine concerned with the study and treatment of disorders of the nervous system.',
      conditions_treated: ['Stroke', 'Epilepsy', 'Multiple sclerosis', 'Parkinson\'s disease', 'Alzheimer\'s disease', 'Migraine', 'Neuropathy'],
      procedures: ['Electroencephalogram (EEG)', 'Electromyography (EMG)', 'Lumbar puncture', 'Nerve conduction studies', 'Neurological examination']
    },
    'orthopedics': {
      name: 'Orthopedics',
      description: 'The branch of medicine concerned with the correction or prevention of deformities, disorders, or injuries of the skeleton and associated structures.',
      conditions_treated: ['Fractures', 'Joint disorders', 'Osteoarthritis', 'Scoliosis', 'Sports injuries', 'Musculoskeletal tumors'],
      procedures: ['Joint replacement', 'Arthroscopy', 'Fracture repair', 'Spinal fusion', 'Bone grafting']
    },
    'dermatology': {
      name: 'Dermatology',
      description: 'The branch of medicine concerned with the diagnosis and treatment of skin disorders.',
      conditions_treated: ['Acne', 'Psoriasis', 'Eczema', 'Skin cancer', 'Rosacea', 'Dermatitis', 'Fungal infections'],
      procedures: ['Skin biopsy', 'Cryotherapy', 'Laser therapy', 'Mohs surgery', 'Phototherapy']
    },
    'gastroenterology': {
      name: 'Gastroenterology',
      description: 'The branch of medicine focused on the digestive system and its disorders.',
      conditions_treated: ['Gastroesophageal reflux disease', 'Irritable bowel syndrome', 'Inflammatory bowel disease', 'Hepatitis','Pancreatitis', 'Gallbladder disease'],
      procedures: ['Colonoscopy', 'Upper endoscopy', 'ERCP', 'Endoscopic ultrasound', 'Liver biopsy']
    }
  },

  // Symptoms database
  symptomsDatabase: {
    'headache': {
      name: 'Headache',
      description: 'Pain in any region of the head. Headaches may occur on one or both sides of the head, be isolated to a certain location, radiate across the head from one point, or have a viselike quality.',
      potential_causes: ['Tension', 'Migraine', 'Cluster headache', 'Sinusitis', 'High blood pressure', 'Brain tumor (rare)', 'Concussion', 'Dehydration', 'Medication overuse'],
      red_flags: ['Sudden severe headache', 'Headache with fever and stiff neck', 'Headache after head injury', 'Headache with confusion or trouble speaking', 'Headache with weakness or numbness']
    },
    'chest pain': {
      name: 'Chest Pain',
      description: 'Any pain felt in the chest area, from the level of your shoulders to the bottom of your ribs.',
      potential_causes: ['Heart attack', 'Angina', 'Pulmonary embolism', 'Pneumonia', 'Pleurisy', 'Costochondritis', 'Gastroesophageal reflux disease', 'Panic attack', 'Muscle strain'],
      red_flags: ['Pain spreading to arms, neck, jaw or back', 'Sudden severe chest pain', 'Chest pain with shortness of breath', 'Chest pain with nausea or vomiting', 'Chest pain lasting more than a few minutes']
    },
    'abdominal pain': {
      name: 'Abdominal Pain',
      description: 'Pain felt anywhere between the chest and groin. This is often referred to as the stomach region or belly.',
      potential_causes: ['Gastroenteritis', 'Irritable bowel syndrome', 'Appendicitis', 'Gallstones', 'Kidney stones', 'Urinary tract infection', 'Food poisoning', 'Inflammatory bowel disease', 'Pancreatitis', 'Diverticulitis'],
      red_flags: ['Severe pain with fever', 'Blood in stool', 'Persistent nausea and vomiting', 'Yellowing of skin or eyes', 'Abdominal swelling', 'Pain that radiates to back']
    },
    'shortness of breath': {
      name: 'Shortness of Breath (Dyspnea)',
      description: 'A feeling of being unable to get enough air or breathe comfortably.',
      potential_causes: ['Asthma', 'COPD', 'Pneumonia', 'Pulmonary embolism', 'Heart failure', 'Anxiety', 'Anemia', 'Allergic reaction', 'Lung cancer', 'Pleural effusion'],
      red_flags: ['Sudden severe shortness of breath', 'Blue lips or face', 'Shortness of breath with chest pain', 'High fever with shortness of breath', 'Shortness of breath that worsens when lying down']
    },
    'fatigue': {
      name: 'Fatigue',
      description: 'A feeling of tiredness, exhaustion, or lack of energy.',
      potential_causes: ['Anemia', 'Depression', 'Hypothyroidism', 'Sleep apnea', 'Chronic fatigue syndrome', 'Diabetes', 'Heart disease', 'Kidney disease', 'Infection', 'Cancer', 'Medication side effect'],
      red_flags: ['Fatigue with unexplained weight loss', 'Extreme fatigue not improved with rest', 'Fatigue with fever', 'Fatigue with significant psychological distress']
    }
  },
  
  // Vaccines database
  vaccinesDatabase: {
    'flu vaccine': {
      title: 'Influenza (Flu) Vaccine',
      description: 'The flu vaccine is designed to protect against the influenza viruses that research indicates will be most common during the upcoming season.',
      recommendations: ['Recommended annually for everyone 6 months and older', 'Especially important for high-risk groups', 'Best administered before flu season begins'],
      side_effects: ['Soreness at injection site', 'Low-grade fever', 'Aches', 'Headache', 'Fatigue'],
      contraindications: ['Severe allergic reaction to previous dose', 'Severe egg allergy (for some vaccines)', 'History of Guillain-Barré Syndrome within 6 weeks of previous flu vaccination']
    },
    'covid vaccine': {
      title: 'COVID-19 Vaccine',
      description: 'COVID-19 vaccines are designed to provide protection against the SARS-CoV-2 virus that causes COVID-19.',
      recommendations: ['Recommended for eligible population based on current guidelines', 'Booster doses may be recommended based on age and risk factors'],
      side_effects: ['Pain at injection site', 'Fatigue', 'Headache', 'Muscle pain', 'Chills', 'Fever', 'Nausea'],
      contraindications: ['Severe allergic reaction to a previous dose or component of the vaccine']
    },
    'mmr vaccine': {
      title: 'MMR (Measles, Mumps, and Rubella) Vaccine',
      description: 'The MMR vaccine protects against three diseases: measles, mumps, and rubella.',
      recommendations: ['First dose at 12-15 months', 'Second dose at 4-6 years', 'Adults born after 1957 should have documentation of at least one dose'],
      side_effects: ['Soreness at injection site', 'Fever', 'Mild rash', 'Temporary joint pain (more common in adults)'],
      contraindications: ['Pregnancy', 'Severe immunodeficiency', 'Severe allergic reaction to a previous dose']
    }
  },

  // Mental health database
  mentalHealthDatabase: {
    'depression': {
      title: 'Depression',
      description: 'Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. It affects how you feel, think and behave and can lead to a variety of emotional and physical problems.',
      symptoms: ['Persistent sad, anxious, or "empty" mood', 'Feelings of hopelessness', 'Irritability', 'Loss of interest in hobbies and activities', 'Decreased energy', 'Difficulty sleeping or oversleeping', 'Weight changes', 'Thoughts of death or suicide'],
      treatments: ['Psychotherapy', 'Antidepressant medications', 'Lifestyle changes', 'Brain stimulation therapies in severe cases'],
      risk_factors: ['Personal or family history of depression', 'Major life changes, trauma, or stress', 'Certain physical illnesses and medications', 'Female gender', 'Alcohol or drug misuse', 'Certain personality traits']
    },
    'anxiety': {
      title: 'Anxiety Disorders',
      description: 'Anxiety disorders are a group of mental health conditions characterized by significant feelings of anxiety and fear.',
      symptoms: ['Excessive worry', 'Feeling restless or on-edge', 'Fatigue', 'Difficulty concentrating', 'Irritability', 'Muscle tension', 'Sleep disturbances', 'Panic attacks (in some types)'],
      treatments: ['Psychotherapy (especially cognitive-behavioral therapy)', 'Anti-anxiety medications', 'Antidepressants', 'Stress management techniques', 'Lifestyle changes'],
      types: ['Generalized Anxiety Disorder', 'Panic Disorder', 'Social Anxiety Disorder', 'Specific Phobias', 'Agoraphobia', 'Separation Anxiety']
    },
    'bipolar disorder': {
      title: 'Bipolar Disorder',
      description: 'Bipolar disorder is a mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).',
      symptoms: ['Manic episodes: Abnormally elevated mood, increased energy, reduced need for sleep, racing thoughts', 'Depressive episodes: Similar to major depression symptoms', 'Mixed episodes: Features of both mania and depression'],
      treatments: ['Mood stabilizers', 'Antipsychotics', 'Antidepressants (with caution)', 'Psychotherapy', 'Lifestyle management'],
      types: ['Bipolar I Disorder', 'Bipolar II Disorder', 'Cyclothymic Disorder']
    }
  },

  // Nutrition database
  nutritionDatabase: {
    'vitamins': {
      title: 'Vitamins',
      description: 'Vitamins are organic compounds that are essential in small amounts for the normal functioning of the body. They play crucial roles in metabolism, immunity, and overall health maintenance.',
      important_vitamins: [
        'Vitamin A (Retinol): Essential for vision, immune function, cell growth, and reproduction. Found in liver, dairy, fish, and yellow-orange vegetables.',
        'Vitamin B1 (Thiamine): Helps convert nutrients into energy. Found in whole grains, meat, and legumes.',
        'Vitamin B2 (Riboflavin): Important for energy production, cell function, and fat metabolism. Found in dairy products, lean meats, and green vegetables.',
        'Vitamin B3 (Niacin): Assists in DNA repair and stress responses. Found in meat, fish, and nuts.',
        'Vitamin B5 (Pantothenic Acid): Essential for making blood cells and converting food into energy. Found in meat, broccoli, and whole grains.',
        'Vitamin B6 (Pyridoxine): Critical for brain development and function, helps body make serotonin and norepinephrine. Found in poultry, fish, and potatoes.',
        'Vitamin B7 (Biotin): Helps metabolize carbohydrates, fats, and proteins. Found in egg yolks, nuts, and seeds.',
        'Vitamin B9 (Folate): Essential for cell division and DNA synthesis. Crucial during pregnancy. Found in leafy greens, fruits, and beans.',
        'Vitamin B12 (Cobalamin): Vital for nerve tissue health, brain function, and red blood cell formation. Found primarily in animal products.',
        'Vitamin C (Ascorbic Acid): Important for immune function, collagen production, and as an antioxidant. Found in citrus fruits, berries, and peppers.',
        'Vitamin D (Calciferol): Critical for bone health, immune function, and inflammation reduction. Synthesized by skin with sun exposure, also in fatty fish and fortified foods.',
        'Vitamin E (Tocopherol): Acts as an antioxidant, protecting cells from damage. Found in nuts, seeds, and vegetable oils.',
        'Vitamin K: Essential for blood clotting and bone health. Found in leafy greens, vegetable oils, and some fruits.'
      ],
      deficiency_issues: [
        'Vitamin A: Night blindness, increased infections, skin problems',
        'B Vitamins: Fatigue, anemia, neurological problems, skin issues',
        'Vitamin C: Scurvy, poor wound healing, weakened immunity',
        'Vitamin D: Rickets in children, osteomalacia in adults, increased risk of infections',
        'Vitamin E: Nerve and muscle damage, weakened immune function',
        'Vitamin K: Excessive bleeding, poor bone health'
      ],
      sources: [
        'Dark leafy greens (spinach, kale): Vitamins A, C, E, K, B9',
        'Citrus fruits: Vitamin C',
        'Dairy products: Vitamins A, B2, B12, D',
        'Meat and poultry: B vitamins, especially B12',
        'Fish: Vitamins B12, D',
        'Eggs: Vitamins A, D, E, B12',
        'Nuts and seeds: Vitamins E, B1, B3',
        'Legumes: B vitamins, especially B9',
        'Whole grains: B vitamins',
        'Fortified foods: Various vitamins based on fortification',
        'Supplements: Should be used under healthcare guidance'
      ]
    },
    'minerals': {
      title: 'Minerals',
      description: 'Minerals are inorganic elements that come from soil and water and are absorbed by plants or eaten by animals. Your body needs minerals for various critical functions including bone development, fluid regulation, muscle and nerve function, and enzyme production.',
      important_minerals: [
        'Calcium: Critical for bone and teeth formation, muscle function, nerve transmission, and blood clotting. Found in dairy products, leafy greens, and fortified foods.',
        'Iron: Essential component of hemoglobin, carrying oxygen in the blood. Critical for energy production and immune function. Found in red meat, beans, spinach, and fortified cereals.',
        'Zinc: Important for immune function, wound healing, DNA synthesis, and cell division. Found in oysters, red meat, poultry, beans, and nuts.',
        'Magnesium: Required for energy production, muscle and nerve function, blood glucose control, and regulation of blood pressure. Found in nuts, seeds, whole grains, and leafy greens.',
        'Potassium: Critical for heart function, muscle contractions, fluid balance, and nerve signal transmission. Found in bananas, potatoes, legumes, and leafy greens.',
        'Sodium: Needed for fluid balance, nerve transmission, and muscle contractions. Found in table salt and processed foods.',
        'Phosphorus: Important for bone and teeth structure, DNA/RNA formation, and energy metabolism. Found in dairy, meat, fish, and whole grains.',
        'Iodine: Essential for thyroid hormone production, which regulates metabolism. Found in iodized salt, seafood, and dairy.',
        'Selenium: Acts as an antioxidant, important for thyroid function and DNA production. Found in brazil nuts, seafood, and meats.',
        'Copper: Necessary for red blood cell formation and nerve cell function. Found in shellfish, whole grains, beans, and nuts.',
        'Manganese: Important for bone formation, blood clotting, and hormone production. Found in whole grains, nuts, and leafy vegetables.',
        'Chromium: Helps regulate blood sugar by enhancing insulin action. Found in whole grains, broccoli, and garlic.',
        'Molybdenum: Essential for enzyme function. Found in legumes, grains, and nuts.'
      ],
      deficiency_issues: [
        'Calcium: Osteoporosis, rickets, muscle cramps',
        'Iron: Anemia, fatigue, weakened immunity',
        'Zinc: Impaired immune function, delayed wound healing, loss of taste',
        'Magnesium: Muscle cramps, cardiac arrhythmias, high blood pressure',
        'Potassium: Irregular heartbeat, muscle weakness, fatigue',
        'Iodine: Goiter, hypothyroidism, impaired cognitive development',
        'Selenium: Weakened immune system, cognitive decline',
        'Copper: Anemia, neutropenia, osteoporosis'
      ],
      sources: [
        'Dairy products: Calcium, phosphorus',
        'Leafy greens: Calcium, magnesium, iron',
        'Nuts and seeds: Magnesium, zinc, selenium',
        'Meat and poultry: Iron, zinc, phosphorus',
        'Fish and seafood: Selenium, iodine, zinc',
        'Whole grains: Magnesium, selenium, copper',
        'Legumes: Iron, magnesium, potassium',
        'Fruits: Potassium, magnesium',
        'Vegetables: Potassium, magnesium, iron',
        'Salt: Sodium, iodine (if iodized)',
        'Fortified foods: Various minerals based on fortification',
        'Mineral water: Calcium, magnesium (varies by source)'
      ]
    },
    'macronutrients': {
      title: 'Macronutrients',
      description: 'Macronutrients are nutrients that the body requires in large amounts to maintain its functions. The three primary macronutrients are carbohydrates, proteins, and fats.',
      types: [
        {
          name: 'Carbohydrates',
          description: 'Primary energy source for the body, especially the brain and nervous system.',
          subtypes: [
            'Simple carbohydrates: Sugars found in fruits, milk, and refined sugars',
            'Complex carbohydrates: Starches and fibers found in whole grains, legumes, and vegetables'
          ],
          functions: [
            'Provide immediate energy',
            'Spare protein from being used for energy',
            'Prevent ketosis',
            'Fiber supports digestive health',
            'Regulate blood glucose levels (complex carbs)'
          ],
          sources: [
            'Whole grains: Brown rice, whole wheat, oats, quinoa',
            'Fruits: Apples, bananas, berries, citrus fruits',
            'Vegetables: Potatoes, corn, peas',
            'Legumes: Beans, lentils, chickpeas',
            'Dairy: Milk and yogurt'
          ],
          recommendations: 'Should make up 45-65% of daily caloric intake, with emphasis on complex carbohydrates and limited added sugars.'
        },
        {
          name: 'Proteins',
          description: 'Essential for building and repairing tissues, making enzymes and hormones, and supporting immune function.',
          subtypes: [
            'Complete proteins: Contain all essential amino acids (meat, dairy, eggs, quinoa, soy)',
            'Incomplete proteins: Missing one or more essential amino acids (most plant proteins)'
          ],
          functions: [
            'Build and repair tissues',
            'Make enzymes, hormones, and other body chemicals',
            'Maintain acid-base balance',
            'Form antibodies for immune function',
            'Provide energy when carbohydrates are not available'
          ],
          sources: [
            'Animal sources: Meat, poultry, fish, eggs, dairy',
            'Plant sources: Legumes, nuts, seeds, whole grains, soy products'
          ],
          recommendations: 'Should make up 10-35% of daily caloric intake. Adults need approximately 0.8 grams of protein per kilogram of body weight daily, with higher needs for athletes and elderly.'
        },
        {
          name: 'Fats',
          description: 'Essential for energy storage, insulation, protection of organs, and absorption of fat-soluble vitamins.',
          subtypes: [
            'Saturated fats: Solid at room temperature, found in animal products and some tropical oils',
            'Unsaturated fats: Liquid at room temperature, found in plant oils, nuts, seeds, and fish',
            'Trans fats: Artificially created through hydrogenation, found in some processed foods'
          ],
          functions: [
            'Provide energy reserve',
            'Insulate and protect organs',
            'Help absorb fat-soluble vitamins (A, D, E, K)',
            'Provide essential fatty acids for brain health and inflammation regulation',
            'Form cell membranes'
          ],
          sources: [
            'Healthy oils: Olive, avocado, canola',
            'Nuts and seeds: Almonds, walnuts, flaxseeds, chia seeds',
            'Fatty fish: Salmon, mackerel, sardines',
            'Avocados',
            'Eggs and dairy'
          ],
          recommendations: 'Should make up 20-35% of daily caloric intake, with emphasis on unsaturated fats and limited saturated and trans fats.'
        }
      ]
    },
    'dietary patterns': {
      title: 'Evidence-Based Dietary Patterns',
      description: 'Dietary patterns represent overall eating habits and food choices that can promote health and prevent disease. Various evidence-based dietary patterns have been shown to support long-term health outcomes.',
      patterns: [
        {
          name: 'Mediterranean Diet',
          description: 'Based on traditional foods eaten in countries bordering the Mediterranean Sea. Associated with reduced risk of heart disease, certain cancers, diabetes, and cognitive decline.',
          key_components: [
            'Abundant plant foods: fruits, vegetables, whole grains, legumes, nuts',
            'Olive oil as the primary fat source',
            'Moderate consumption of fish and seafood',
            'Limited intake of dairy, eggs, and poultry',
            'Minimal red meat consumption',
            'Moderate wine consumption with meals (optional)'
          ],
          health_benefits: [
            'Reduced risk of cardiovascular disease',
            'Lower rates of certain cancers',
            'Improved cognitive function',
            'Better glycemic control',
            'Reduced inflammation',
            'Longevity'
          ]
        },
        {
          name: 'DASH Diet (Dietary Approaches to Stop Hypertension)',
          description: 'Designed to help treat or prevent high blood pressure. Emphasizes foods rich in potassium, calcium, and magnesium, which help control blood pressure.',
          key_components: [
            'Rich in fruits and vegetables',
            'Includes whole grains, lean proteins, and low-fat dairy',
            'Limits foods high in saturated fats and sugars',
            'Restricts sodium intake',
            'Emphasizes potassium-rich foods'
          ],
          health_benefits: [
            'Lowers blood pressure',
            'Reduces risk of heart disease',
            'May help with weight management',
            'Can improve lipid profiles',
            'May reduce risk of diabetes'
          ]
        },
        {
          name: 'Plant-Based Diets',
          description: 'Emphasizes foods derived from plant sources with limited or no animal products. Includes vegetarian and vegan diets.',
          key_components: [
            'Focus on fruits, vegetables, whole grains, legumes, nuts, and seeds',
            'May include modest amounts of dairy, eggs, and fish (vegetarian variations)',
            'Excludes all animal products (vegan variation)',
            'Emphasizes whole foods over processed alternatives'
          ],
          health_benefits: [
            'Lower risk of heart disease',
            'Better weight management',
            'Reduced risk of certain cancers',
            'Improved blood glucose control',
            'Lower cholesterol levels',
            'Reduced environmental impact'
          ],
          considerations: [
            'May require supplementation (B12, iron, zinc, omega-3s)',
            'Careful planning needed to ensure complete nutrition',
            'Special attention to protein combining for complete amino acid profile'
          ]
        },
        {
          name: 'Nordic Diet',
          description: 'Based on traditional foods from the Nordic countries. Emphasizes locally sourced, seasonal foods.',
          key_components: [
            'Abundant whole grains (especially rye, barley, oats)',
            'Fruits (especially berries)',
            'Vegetables (especially root vegetables)',
            'Fatty fish (salmon, herring, mackerel)',
            'Legumes',
            'Low-fat dairy',
            'Limited processed foods and sweets'
          ],
          health_benefits: [
            'Reduced inflammation',
            'Improved cholesterol levels',
            'Weight management',
            'Lower blood pressure',
            'Reduced risk of type 2 diabetes'
          ]
        },
        {
          name: 'MIND Diet (Mediterranean-DASH Intervention for Neurodegenerative Delay)',
          description: 'Combines elements of the Mediterranean and DASH diets, specifically focused on brain health and reducing dementia risk.',
          key_components: [
            'Green leafy vegetables',
            'Other vegetables',
            'Nuts',
            'Berries (especially blueberries)',
            'Beans and legumes',
            'Whole grains',
            'Fish',
            'Poultry',
            'Olive oil',
            'Limited red meat, butter, cheese, pastries, and sweets',
            'Limited fried food'
          ],
          health_benefits: [
            'Reduced risk of Alzheimer\'s disease and dementia',
            'Slower cognitive decline with aging',
            'Improved verbal memory',
            'Benefits for cardiovascular health'
          ]
        }
      ]
    },
    'healthy diet': {
      title: 'Healthy Diet Guidelines',
      description: 'A healthy diet is one that helps maintain or improve overall health. It provides the body with essential nutrition: fluid, macronutrients, micronutrients, and adequate calories to meet energy needs while supporting physiological functions.',
      principles: [
        'Eat a variety of foods from all food groups to ensure balanced nutrition',
        'Maintain caloric balance with physical activity for healthy weight management',
        'Limit intake of saturated fats, trans fats, added sugars, and sodium',
        'Emphasize nutrient-dense foods over calorie-dense, nutrient-poor options',
        'Choose whole, minimally processed foods whenever possible',
        'Prioritize fruits, vegetables, whole grains, and lean proteins',
        'Stay adequately hydrated, primarily with water',
        'Practice mindful eating and appropriate portion control',
        'Adjust dietary patterns to individual needs based on age, gender, activity level, and health conditions'
      ],
      food_groups: [
        'Fruits: 1.5-2 cups daily, emphasizing whole fruits over juices',
        'Vegetables: 2-3 cups daily, including a variety of colors and types',
        'Grains: 5-8 ounce equivalents daily, with at least half being whole grains',
        'Protein foods: 5-6.5 ounce equivalents daily from diverse sources',
        'Dairy or alternatives: 2-3 cups daily, preferably low-fat or fat-free',
        'Oils: 5-7 teaspoons daily, emphasizing healthy oils'
      ],
      additional_recommendations: [
        'Limit added sugars to less than 10% of daily calories',
        'Limit saturated fats to less than 10% of daily calories',
        'Limit sodium to less than 2,300 mg per day',
        'If alcohol is consumed, do so in moderation (≤1 drink/day for women, ≤2 drinks/day for men)',
        'Consider individual nutrient needs that may vary based on life stage, sex, activity level, and health conditions'
      ],
      special_populations: [
        'Pregnant women: Increased needs for folate, iron, calcium, and overall calories',
        'Children: Appropriate calories and nutrients for growth and development',
        'Older adults: Adequate protein, calcium, vitamin D, and B12',
        'Athletes: Increased energy and possibly protein needs',
        'Those with chronic conditions: Tailored dietary patterns based on specific health needs'
      ]
    },
    'nutritional supplements': {
      title: 'Nutritional Supplements',
      description: 'Nutritional supplements include vitamins, minerals, herbs, amino acids, and enzymes that can be used to supplement the diet. While whole foods should be the primary source of nutrients, supplements may be beneficial in certain circumstances.',
      types: [
        'Vitamin and mineral supplements',
        'Protein supplements (whey, casein, plant-based)',
        'Fatty acid supplements (fish oil, flaxseed oil)',
        'Herbal supplements',
        'Probiotics and prebiotics',
        'Enzyme supplements',
        'Specialized formulations (athletic performance, weight management)'
      ],
      appropriate_uses: [
        'Addressing diagnosed deficiencies',
        'Meeting increased needs during pregnancy, breastfeeding, or growth',
        'Compensating for dietary restrictions or medical conditions that limit nutrient absorption',
        'Supporting specific lifecycle needs (e.g., calcium and vitamin D for postmenopausal women)',
        'Meeting needs in populations at risk for specific deficiencies (e.g., vitamin B12 for vegans)'
      ],
      considerations: [
        'Supplements are not substitutes for a balanced diet',
        'Quality and purity vary among products and manufacturers',
        'Potential for interactions with medications',
        'Risk of toxicity with fat-soluble vitamins and certain minerals when consumed in excess',
        'Limited regulation compared to pharmaceuticals',
        'Cost considerations versus nutritional benefit',
        'Should ideally be used under healthcare provider guidance'
      ],
      safety_concerns: [
        'Upper limits exist for many nutrients, beyond which adverse effects may occur',
        'Supplements may contain ingredients not listed on the label',
        'Some supplements may affect laboratory test results or surgical outcomes',
        'Herbal supplements can have pharmaceutical-like effects and interactions',
        'Claims on supplements are often not evaluated by regulatory agencies'
      ],
      evidence_based_supplements: [
        'Vitamin D and calcium for bone health',
        'Folate for women of childbearing age',
        'Vitamin B12 for older adults and those on plant-based diets',
        'Iron for those with iron-deficiency anemia',
        'Omega-3 fatty acids for heart health',
        'Probiotics for specific gastrointestinal conditions'
      ]
    }
  }
};

// Add additional medical conditions
const additionalConditions = {
  'long covid': {
    title: 'Long COVID (Post-Acute Sequelae of SARS-CoV-2)',
    description: 'Long COVID refers to a range of symptoms that persist for weeks or months after the acute phase of COVID-19 infection. It can affect multiple organ systems and significantly impact quality of life.',
    symptoms: ['Fatigue', 'Shortness of breath', 'Cognitive dysfunction ("brain fog")', 'Headaches', 'Joint or muscle pain', 'Heart palpitations', 'Sleep disturbances', 'Dizziness', 'Post-exertional malaise', 'Persistent loss of smell or taste', 'Depression or anxiety'],
    risk_factors: ['Severity of initial COVID-19 infection', 'Older age', 'Female sex', 'Pre-existing health conditions', 'Not being vaccinated'],
    treatments: ['Symptom-targeted approaches', 'Pulmonary rehabilitation', 'Cardiac rehabilitation', 'Cognitive rehabilitation', 'Physical therapy', 'Mental health support', 'Rest and pacing strategies'],
    diagnosis: ['Clinical evaluation', 'Exclusion of other potential causes', 'Consideration of pre-COVID health status', 'Specialized post-COVID clinics'],
    research_status: 'Active area of research with evolving understanding of mechanisms, risk factors, prevention strategies, and effective treatments'
  },
  'autoimmune disease': {
    title: 'Autoimmune Diseases',
    description: 'Autoimmune diseases occur when the body\'s immune system attacks its own tissues and organs. There are more than 80 different autoimmune diseases affecting various body systems.',
    common_types: ['Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Multiple sclerosis', 'Type 1 diabetes', 'Inflammatory bowel disease', 'Psoriasis', 'Hashimoto\'s thyroiditis', 'Graves\' disease', 'Celiac disease'],
    symptoms: ['Fatigue', 'Joint pain and swelling', 'Skin problems', 'Digestive issues', 'Recurring fever', 'Swollen glands'],
    risk_factors: ['Genetics', 'Sex (more common in women)', 'Certain ethnic backgrounds', 'Environmental triggers', 'Infections', 'Smoking'],
    treatments: ['Immunosuppressive medications', 'Anti-inflammatory drugs', 'Pain management', 'Hormone replacement', 'Biological therapies', 'Lifestyle modifications'],
    complications: ['Increased risk of infections', 'Bone thinning', 'Pregnancy complications', 'Cancer risk in some conditions', 'Cardiovascular disease']
  },
  'precision medicine': {
    title: 'Precision Medicine',
    description: 'Precision medicine is an approach to patient care that allows doctors to select treatments that are most likely to help patients based on a genetic understanding of their disease. It considers individual variability in genes, environment, and lifestyle.',
    key_components: [
      'Genomic sequencing and analysis',
      'Biomarker identification and testing',
      'Targeted therapies',
      'Pharmacogenomics (how genes affect drug response)',
      'AI and machine learning for data analysis',
      'Patient data integration from multiple sources'
    ],
    applications: [
      'Cancer treatment (identifying specific mutations that can be targeted)',
      'Pharmacogenetics (determining which medications will work best based on genetic profile)',
      'Rare disease diagnosis',
      'Risk prediction for common diseases',
      'Infectious disease management',
      'Mental health treatment optimization'
    ],
    benefits: [
      'More effective treatments with fewer side effects',
      'Avoidance of unnecessary treatments',
      'Earlier disease intervention',
      'Improved disease prevention strategies',
      'More accurate prognosis information',
      'Reduced healthcare costs long-term'
    ],
    challenges: [
      'High costs of testing and specialized treatments',
      'Data privacy and security concerns',
      'Need for large, diverse datasets',
      'Healthcare provider education and implementation',
      'Insurance coverage and reimbursement',
      'Ethical considerations around genetic information'
    ],
    future_directions: 'Expanding beyond genomics to include other "-omics" (proteomics, metabolomics, etc.), integration with digital health technologies, and increased accessibility of precision medicine approaches'
  },
  'artificial intelligence in healthcare': {
    title: 'Artificial Intelligence in Healthcare',
    description: 'The application of artificial intelligence technologies in healthcare settings to assist with diagnosis, treatment decisions, patient monitoring, drug development, and healthcare system management.',
    applications: [
      'Medical imaging analysis and interpretation',
      'Disease diagnosis and risk prediction',
      'Treatment planning and optimization',
      'Drug discovery and development',
      'Health monitoring through wearables and IoT devices',
      'Administrative workflow optimization',
      'Virtual health assistants and chatbots',
      'Predictive analytics for population health'
    ],
    technologies: [
      'Machine learning and deep learning',
      'Natural language processing',
      'Computer vision',
      'Robotics',
      'Expert systems',
      'Big data analytics'
    ],
    benefits: [
      'Improved diagnostic accuracy',
      'Earlier disease detection',
      'Personalized treatment recommendations',
      'Reduced healthcare costs',
      'Better resource allocation',
      'Expanded access to healthcare expertise',
      'Reduced clinician burnout through automation of routine tasks'
    ],
    challenges: [
      'Data quality and accessibility issues',
      'Privacy and security concerns',
      'Regulatory hurdles',
      'Implementation and integration with existing systems',
      'Healthcare provider adoption and training',
      'Potential algorithmic bias',
      'Liability and ethical considerations'
    ],
    current_status: 'Rapidly evolving field with increasing implementation in clinical settings, though many applications remain in research or early adoption phases'
  },
  'telemedicine': {
    title: 'Telemedicine',
    description: 'The use of telecommunications technology to provide healthcare services remotely, allowing patients to consult with healthcare providers without in-person visits.',
    types: [
      'Synchronous: Real-time video or phone consultations',
      'Asynchronous: Store-and-forward transmission of medical images, vital signs, etc.',
      'Remote patient monitoring: Continuous monitoring of patient metrics from a distance',
      'Mobile health (mHealth): Healthcare services via mobile devices',
      'Virtual specialized care: Connecting with specialists regardless of location'
    ],
    applications: [
      'Primary care visits',
      'Chronic disease management',
      'Mental health services',
      'Specialist consultations',
      'Post-surgical follow-ups',
      'Medication management',
      'Urgent care for non-emergency conditions',
      'Rural healthcare delivery'
    ],
    benefits: [
      'Increased access to care, especially in underserved areas',
      'Reduced travel time and expenses for patients',
      'Decreased exposure to contagious illnesses',
      'Improved management of chronic conditions',
      'Potentially lower healthcare costs',
      'Increased patient engagement',
      'Reduced burden on emergency departments'
    ],
    limitations: [
      'Technology barriers for some populations',
      'Limited physical examination capabilities',
      'Insurance coverage and reimbursement challenges',
      'Licensing restrictions across jurisdictions',
      'Potential privacy and security concerns',
      'Not suitable for all medical conditions or situations'
    ],
    best_practices: [
      'Clear communication protocols',
      'Secure, HIPAA-compliant platforms',
      'Established criteria for when in-person care is needed',
      'Technical support availability',
      'Integration with electronic health records',
      'Appropriate provider training'
    ]
  }
};

// Add the additional conditions to the medical conditions database
Object.assign(medicalData.medicalConditionsDatabase, additionalConditions);

// Export the medicalData object
module.exports = medicalData;
