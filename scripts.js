let currentWorkout;
let currentStep = 0;
let timerInterval;
let timeLeft = 0;
let isTimerRunning = false;
const bellSound = new Audio('./sounds/bell.mp3');
const boxingBellSound = new Audio('./sounds/boxing-bell.mp3');

function init() {
    const workoutOptions = document.getElementById('workout-options');
    workouts.forEach(workout => {
        const button = document.createElement('button');
        button.innerText = workout.name;
        button.onclick = () => selectWorkout(workout.id);
        workoutOptions.appendChild(button);
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        loadState();
    });

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            if (isTimerRunning) {
                pauseTimer();
            } else {
                startTimer();
            }
        }
    });
}

function saveState() {
    const state = {
        currentWorkoutId: currentWorkout ? currentWorkout.id : null,
        currentStep: currentStep,
        timeLeft: timeLeft,
        isTimerRunning: isTimerRunning
    };
    localStorage.setItem('workoutState', JSON.stringify(state));
}

function loadState() {
    const state = JSON.parse(localStorage.getItem('workoutState'));
    if (state) {
        currentWorkout = workouts.find(workout => workout.id === state.currentWorkoutId);
        currentStep = state.currentStep;
        timeLeft = state.timeLeft;
        isTimerRunning = state.isTimerRunning;

        if (currentWorkout) {
            document.getElementById("main-title").classList.add("hidden");
            document.getElementById("workout-selection").classList.add("hidden");
            document.getElementById("workout-container").classList.remove("hidden");
            document.getElementById("workout-name").innerText = currentWorkout.name;
            document.getElementById("header").classList.remove("hidden");
            document.getElementById("footer").classList.remove("hidden");
            showStep();
            if (isTimerRunning) {
                startTimer();
            }
        }
    }
}

function selectWorkout(workoutId) {
    currentWorkout = workouts.find(workout => workout.id === workoutId);
    currentStep = 0;
    
    document.getElementById("workout-selection").classList.add("hidden");
    document.getElementById("workout-container").classList.remove("hidden");
    document.getElementById("header").classList.remove("hidden");
    document.getElementById("footer").classList.remove("hidden");
    
    document.getElementById("workout-name").innerText = currentWorkout.name;
    
    showStep();
}

function showStep() {
    const step = currentWorkout.steps[currentStep];
    document.getElementById("step-name").innerText = `${step.name} (${currentStep+1}/${currentWorkout.steps.length})`;
    document.getElementById("step-description").innerText = step.description;
    document.getElementById("timer").innerText = formatTime(step.duration);
    saveState();
}

function ding() {
    bellSound.currentTime = 0;
    bellSound.play();
}

function nextStep() {
    currentStep++;
    timeLeft = 0;
    clearInterval(timerInterval);
    isTimerRunning = false;

    if (currentStep < currentWorkout.steps.length) {
        showStep();
        ding();
    } else {
        endWorkout();
    }
}

function previousStep() {
    currentStep--;
    timeLeft = 0;
    clearInterval(timerInterval);
    isTimerRunning = false;

    if (currentStep >= 0) {
        ding();
        showStep();
    } else {
        resetWorkout();
    }
}

function startTimer() {
    if (isTimerRunning) return;

    const step = currentWorkout.steps[currentStep];
    if (timeLeft <= 0) {
        timeLeft = step.duration;
    }

    document.getElementById("start-button").innerText = "Pause";
    document.getElementById("start-button").onclick = pauseTimer;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            isTimerRunning = false;
            document.getElementById("start-button").innerText = "Start";
            document.getElementById("start-button").onclick = startTimer;
            nextStep();
        }
    }, 1000);

    isTimerRunning = true;
}

function pauseTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    document.getElementById("start-button").innerText = "Resume";
    document.getElementById("start-button").onclick = resumeTimer;
}

function resumeTimer() {
    if (isTimerRunning) return;

    startTimer();
}

function endWorkout() {
    boxingBellSound.play();
    alert("Workout Complete!");
    resetWorkout();
}

function resetWorkout() {
    currentStep = 0;
    timeLeft = 0;
    clearInterval(timerInterval);
    isTimerRunning = false;
    document.getElementById("workout-selection").classList.remove("hidden");
    document.getElementById("workout-container").classList.add("hidden");
    document.getElementById("header").classList.add("hidden");
    document.getElementById("footer").classList.add("hidden");
    localStorage.removeItem('workoutState');
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Initialize the app
init();
