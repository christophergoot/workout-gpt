let currentWorkout;
let currentStep = 0;
let timerInterval;
let timeLeft = 0;
let isTimerRunning = false;
const dingSound = new Audio('ding.mp3');

function init() {
    const workoutOptions = document.getElementById('workout-options');
    workouts.forEach(workout => {
        const button = document.createElement('button');
        button.innerText = workout.name;
        button.onclick = () => selectWorkout(workout.id);
        workoutOptions.appendChild(button);
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

function selectWorkout(workoutId) {
    currentWorkout = workouts.find(workout => workout.id === workoutId);
    currentStep = 0;
    
    document.getElementById("main-title").classList.add("hidden");
    document.getElementById("workout-options").classList.add("hidden");
    document.getElementById("workout-container").classList.remove("hidden");
    
    document.getElementById("workout-name").innerText = currentWorkout.name;
    
    showStep();
}

function showStep() {
    const step = currentWorkout.steps[currentStep];
    document.getElementById("step-name").innerText = `${step.name} (${currentStep+1}/${currentWorkout.steps.length})`;
    document.getElementById("step-description").innerText = step.description;
    document.getElementById("timer").innerText = formatTime(step.duration);
}

function ding() {
    dingSound.currentTime = 0;
    dingSound.play();
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
        alert("Workout Complete!");
        ding();
        resetWorkout();
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
        endWorkout();
    }
}

function startTimer() {
    if (isTimerRunning) return; // Prevent starting a new timer if already running

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
    if (isTimerRunning) return; // Prevent resuming if already running

    startTimer();
}

function endWorkout() {
    resetWorkout();
}

function resetWorkout() {
    currentStep = 0;
    timeLeft = 0;
    clearInterval(timerInterval);
    isTimerRunning = false;
    document.getElementById("main-title").classList.remove("hidden");
    document.getElementById("workout-options").classList.remove("hidden");
    document.getElementById("workout-container").classList.add("hidden");
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Initialize the app
init();
