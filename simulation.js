// State management
let currentOrgan = null;
let currentScenario = null;
let isSimulationRunning = false;
let simulationInterval = null;

// DOM Elements
const organButtons = document.querySelectorAll('.organ-btn');
const scenarioButtons = document.querySelectorAll('.scenario-btn');
const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const selectedOrganTitle = document.getElementById('selected-organ-title');

// Vital signs elements
const heartRateElement = document.getElementById('heart-rate');
const bloodPressureElement = document.getElementById('blood-pressure');
const oxygenElement = document.getElementById('oxygen');
const temperatureElement = document.getElementById('temperature');

// Organ data
const organs = {
    heart: {
        name: 'Cardiovascular System',
        baseVitals: {
            heartRate: 75,
            bloodPressure: '120/80',
            oxygen: 98,
            temperature: 37.0
        }
    },
    brain: {
        name: 'Nervous System',
        baseVitals: {
            heartRate: 72,
            bloodPressure: '118/78',
            oxygen: 99,
            temperature: 37.0
        }
    },
    lungs: {
        name: 'Respiratory System',
        baseVitals: {
            heartRate: 70,
            bloodPressure: '115/75',
            oxygen: 97,
            temperature: 36.8
        }
    }
};

// Vital signs thresholds
const vitalThresholds = {
    heartRate: {
        danger: { low: 50, high: 120 },
        warning: { low: 60, high: 100 }
    },
    bloodPressure: {
        danger: { systolicLow: 90, systolicHigh: 180, diastolicLow: 60, diastolicHigh: 120 },
        warning: { systolicLow: 100, systolicHigh: 140, diastolicLow: 65, diastolicHigh: 90 }
    },
    oxygen: {
        danger: { low: 90 },
        warning: { low: 95 }
    },
    temperature: {
        danger: { low: 35, high: 39 },
        warning: { low: 36, high: 37.8 }
    }
};

// Scenario effects
const scenarioEffects = {
    normal: {
        heartRate: (base) => base,
        bloodPressure: (base) => base,
        oxygen: (base) => base,
        temperature: (base) => base
    },
    tachycardia: {
        heartRate: (base) => base + 50,
        bloodPressure: (base) => {
            const [systolic, diastolic] = base.split('/');
            return `${parseInt(systolic) + 20}/${parseInt(diastolic) + 10}`;
        },
        oxygen: (base) => base - 2,
        temperature: (base) => base + 0.5
    },
    bradycardia: {
        heartRate: (base) => base - 30,
        bloodPressure: (base) => {
            const [systolic, diastolic] = base.split('/');
            return `${parseInt(systolic) - 20}/${parseInt(diastolic) - 10}`;
        },
        oxygen: (base) => base - 1,
        temperature: (base) => base - 0.2
    },
    hypertensive: {
        heartRate: (base) => base + 20,
        bloodPressure: (base) => {
            const [systolic, diastolic] = base.split('/');
            return `${parseInt(systolic) + 40}/${parseInt(diastolic) + 20}`;
        },
        oxygen: (base) => base - 3,
        temperature: (base) => base + 0.3
    }
};

// Event Listeners
organButtons.forEach(button => {
    button.addEventListener('click', () => selectOrgan(button.dataset.organ));
});

scenarioButtons.forEach(button => {
    button.addEventListener('click', () => selectScenario(button.dataset.scenario));
});

startButton.addEventListener('click', toggleSimulation);
resetButton.addEventListener('click', resetSimulation);

// Functions
function selectOrgan(organId) {
    // Reset previous selection
    organButtons.forEach(btn => btn.classList.remove('active'));
    
    // Set new selection
    currentOrgan = organId;
    document.querySelector(`[data-organ="${organId}"]`).classList.add('active');
    selectedOrganTitle.textContent = organs[organId].name;
    
    // Enable controls
    startButton.disabled = false;
    resetButton.disabled = false;
    
    // Reset simulation
    resetSimulation();
    updateVitalSigns(organs[organId].baseVitals);
}

function selectScenario(scenarioId) {
    if (!currentOrgan) return;
    
    // Reset previous selection
    scenarioButtons.forEach(btn => btn.classList.remove('active'));
    
    // Set new selection
    currentScenario = scenarioId;
    document.querySelector(`[data-scenario="${scenarioId}"]`).classList.add('active');
    
    // Start simulation if not running
    if (!isSimulationRunning) {
        toggleSimulation();
    }
}

function toggleSimulation() {
    if (!currentOrgan) return;
    
    isSimulationRunning = !isSimulationRunning;
    startButton.innerHTML = isSimulationRunning ? 
        '<i class="icon-pause"></i>Pause' : 
        '<i class="icon-play"></i>Start';
    
    if (isSimulationRunning) {
        runSimulation();
    } else {
        clearInterval(simulationInterval);
    }
}

function resetSimulation() {
    // Clear simulation
    isSimulationRunning = false;
    clearInterval(simulationInterval);
    currentScenario = null;
    
    // Reset UI
    startButton.innerHTML = '<i class="icon-play"></i>Start';
    scenarioButtons.forEach(btn => btn.classList.remove('active'));
    
    // Reset vital signs
    if (currentOrgan) {
        updateVitalSigns(organs[currentOrgan].baseVitals);
    }
}

function runSimulation() {
    if (!currentOrgan || !currentScenario) return;
    
    clearInterval(simulationInterval);
    simulationInterval = setInterval(() => {
        const baseVitals = organs[currentOrgan].baseVitals;
        const effects = scenarioEffects[currentScenario];
        
        const updatedVitals = {
            heartRate: effects.heartRate(baseVitals.heartRate),
            bloodPressure: effects.bloodPressure(baseVitals.bloodPressure),
            oxygen: effects.oxygen(baseVitals.oxygen),
            temperature: effects.temperature(baseVitals.temperature)
        };
        
        // Add some random variation
        updatedVitals.heartRate += Math.floor(Math.random() * 5) - 2;
        updatedVitals.oxygen += Math.floor(Math.random() * 2) - 1;
        updatedVitals.temperature += (Math.random() * 0.2 - 0.1);
        
        updateVitalSigns(updatedVitals);
    }, 1000);
}

function updateVitalSigns(vitals) {
    // Update display values with animations
    updateVitalValue(heartRateElement, `${Math.round(vitals.heartRate)} BPM`, vitals.heartRate, 'heartRate');
    updateVitalValue(bloodPressureElement, `${vitals.bloodPressure} mmHg`, vitals.bloodPressure, 'bloodPressure');
    updateVitalValue(oxygenElement, `${Math.round(vitals.oxygen)}%`, vitals.oxygen, 'oxygen');
    updateVitalValue(temperatureElement, `${vitals.temperature.toFixed(1)}°C`, vitals.temperature, 'temperature');
}

function updateVitalValue(element, value, rawValue, type) {
    element.textContent = value;
    
    // Remove existing status classes
    element.classList.remove('normal', 'warning', 'danger');
    
    // Add appropriate status class based on thresholds
    const status = getVitalStatus(rawValue, type);
    element.classList.add(status);
}

function getVitalStatus(value, type) {
    if (type === 'bloodPressure') {
        const [systolic, diastolic] = value.split('/').map(Number);
        const thresholds = vitalThresholds.bloodPressure;
        
        if (systolic <= thresholds.danger.systolicLow || systolic >= thresholds.danger.systolicHigh ||
            diastolic <= thresholds.danger.diastolicLow || diastolic >= thresholds.danger.diastolicHigh) {
            return 'danger';
        }
        if (systolic <= thresholds.warning.systolicLow || systolic >= thresholds.warning.systolicHigh ||
            diastolic <= thresholds.warning.diastolicLow || diastolic >= thresholds.warning.diastolicHigh) {
            return 'warning';
        }
        return 'normal';
    }
    
    const thresholds = vitalThresholds[type];
    
    if (thresholds.danger) {
        if ((thresholds.danger.low && value <= thresholds.danger.low) ||
            (thresholds.danger.high && value >= thresholds.danger.high)) {
            return 'danger';
        }
    }
    
    if (thresholds.warning) {
        if ((thresholds.warning.low && value <= thresholds.warning.low) ||
            (thresholds.warning.high && value >= thresholds.warning.high)) {
            return 'warning';
        }
    }
    
    return 'normal';
}