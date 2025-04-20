const workouts = [
	{
		id: 1,
		name: "Full-Body Energizer",
		steps: [
			// Warm-up (3 min)
			{
				name: "March in Place (warm up)",
				duration: 60,
				description: "Lift knees one at a time while swinging arms naturally.",
			},
			{
				name: "Arm Circles (warm up)",
				duration: 60,
				description: "Extend arms to sides and rotate in small circles, forward then backward.",
			},
			{
				name: "Hip Circles (warm up)",
				duration: 60,
				description: "Place hands on hips and rotate in big circles in both directions.",
			},

			// Main (18 min)
			{
				name: "Bodyweight Squats",
				duration: 60,
				description: "Stand with feet shoulder-width apart, squat down and return to standing.",
			},
			{ name: "High Knees", duration: 45, description: "Run in place, lifting your knees as high as possible." },
			{
				name: "Push-ups (knee or full)",
				duration: 45,
				description: "In plank position, lower chest to floor and push back up.",
			},
			{
				name: "Dumbbell Shoulder Press",
				duration: 45,
				description: "Hold dumbbells at shoulders and press them overhead.",
			},
			{ name: "Rest", duration: 30, description: "Catch your breath." },
			{
				name: "Dumbbell Rows",
				duration: 45,
				description: "Hinge forward and pull dumbbells to your sides, squeezing shoulder blades.",
			},
			{
				name: "Mountain Climbers",
				duration: 45,
				description: "In plank position, alternate bringing knees toward chest.",
			},
			{ name: "Glute Bridge", duration: 60, description: "Lie on back, knees bent, and lift hips toward ceiling." },
			{ name: "Dumbbell March", duration: 60, description: "Hold dumbbells and march in place with high knees." },
			{
				name: "Dead Bug",
				duration: 60,
				description: "On your back, lower opposite arm and leg while keeping core tight.",
			},

			// Cool down (4 min)
			{
				name: "Child's Pose (cool down)",
				duration: 60,
				description: "Sit back on heels, stretch arms forward, and breathe.",
			},
			{
				name: "Cat-Cow Stretch (cool down)",
				duration: 60,
				description: "Alternate arching and rounding your back on all fours.",
			},
			{
				name: "Seated Spinal Twist (cool down)",
				duration: 60,
				description: "Twist gently to each side while seated cross-legged.",
			},
			{
				name: "Forward Fold (cool down)",
				duration: 60,
				description: "Bend at hips and reach for your toes while breathing deeply.",
			},
		],
	},
	{
		id: 2,
		name: "Core & Cardio Boost",
		steps: [
			// Warm-up (3 min)
			{
				name: "Jumping Jacks (warm up)",
				duration: 60,
				description: "Jump feet apart and raise arms overhead, then return.",
			},
			{
				name: "Torso Twists (warm up)",
				duration: 60,
				description: "Stand with knees soft and twist side to side gently.",
			},
			{
				name: "Leg Swings (warm up)",
				duration: 60,
				description: "Hold onto a wall and swing one leg forward and back.",
			},

			// Main (18 min)
			{ name: "Plank Hold", duration: 45, description: "Hold a solid plank position on elbows or hands." },
			{
				name: "Toe Taps",
				duration: 60,
				description: "Lie back and alternate tapping toes to the floor from tabletop legs.",
			},
			{ name: "High Knees", duration: 45, description: "Run in place, lifting knees quickly." },
			{ name: "Bird Dog", duration: 60, description: "On all fours, extend opposite arm and leg, then switch." },
			{ name: "Rest", duration: 30, description: "Take deep breaths." },
			{
				name: "Dumbbell Side Bends",
				duration: 60,
				description: "Hold a dumbbell in one hand, bend sideways, and return. Switch sides.",
			},
			{ name: "Mountain Climbers", duration: 45, description: "Alternate legs quickly in plank position." },
			{ name: "Crunches", duration: 45, description: "Lie on back, knees bent, lift shoulders off floor, then lower." },
			{ name: "Dead Bug", duration: 60, description: "Lower opposite arm and leg while keeping your core tight." },
			{
				name: "Standing Knee-to-Elbow",
				duration: 60,
				description: "Bring opposite knee and elbow together while standing, alternating sides.",
			},

			// Cool down (4 min)
			{ name: "Child's Pose (cool down)", duration: 60, description: "Stretch arms forward, rest forehead on mat." },
			{ name: "Cat-Cow Stretch (cool down)", duration: 60, description: "Alternate arching and dipping spine." },
			{
				name: "Supine Twist (cool down)",
				duration: 60,
				description: "Lie on your back, knees to one side, arms stretched out.",
			},
			{
				name: "Neck Rolls (cool down)",
				duration: 60,
				description: "Gently roll neck in circular motion, switching directions.",
			},
		],
	},
	{
		id: 3,
		name: "Strength Starter",
		steps: [
			// Warm-up (3 min)
			{ name: "March in Place (warm up)", duration: 60, description: "Lift knees one at a time while swinging arms." },
			{ name: "Arm Circles (warm up)", duration: 60, description: "Circle arms forward and back to loosen shoulders." },
			{ name: "Air Squats (warm up)", duration: 60, description: "Light squats to get the legs warm." },

			// Main (18 min)
			{
				name: "Dumbbell Goblet Squat",
				duration: 60,
				description: "Hold a dumbbell at chest level and perform deep squats.",
			},
			{ name: "Dumbbell Shoulder Press", duration: 45, description: "Press dumbbells overhead from shoulder height." },
			{ name: "Rest", duration: 30, description: "Breathe and shake it out." },
			{
				name: "Dumbbell Deadlift",
				duration: 60,
				description: "Hinge at hips, keep back straight, lower dumbbells to shin level.",
			},
			{ name: "Dumbbell Row", duration: 60, description: "Pull dumbbells toward ribs with elbows tucked in." },
			{
				name: "Push-ups (knee or full)",
				duration: 45,
				description: "Lower chest to floor and push back up with control.",
			},
			{ name: "Dumbbell Bicep Curls", duration: 45, description: "Curl dumbbells toward shoulders with elbows fixed." },
			{ name: "Glute Bridge", duration: 60, description: "Lift hips while squeezing glutes." },
			{ name: "Standing Calf Raises", duration: 45, description: "Rise onto toes, pause, and lower slowly." },
			{ name: "Wall Sit", duration: 45, description: "Back against wall, knees at 90°, hold the position." },

			// Cool down (4 min)
			{ name: "Standing Forward Fold (cool down)", duration: 60, description: "Stretch your back and hamstrings." },
			{
				name: "Figure Four Stretch (cool down)",
				duration: 60,
				description: "Sit or lie down, cross ankle over opposite knee, gently pull.",
			},
			{ name: "Child's Pose (cool down)", duration: 60, description: "Relax and breathe deeply into the stretch." },
			{ name: "Neck Rolls (cool down)", duration: 60, description: "Slow, controlled neck circles." },
		],
	},
	{
		id: 4,
		name: "Low Impact Burn",
		steps: [
			// Warm-up (3 min)
			{
				name: "Side Steps (warm up)",
				duration: 60,
				description: "Step side to side with slight bend in knees and swing arms.",
			},
			{ name: "Torso Twists (warm up)", duration: 60, description: "Twist gently side to side with feet planted." },
			{ name: "Heel Digs (warm up)", duration: 60, description: "Tap heels forward one at a time with arm curls." },

			// Main (18 min)
			{ name: "Step Back Lunges", duration: 60, description: "Step one foot back into a lunge, return, switch legs." },
			{
				name: "Dumbbell Front Raise",
				duration: 45,
				description: "Raise dumbbells to shoulder height with straight arms.",
			},
			{
				name: "March in Place with Dumbbells",
				duration: 60,
				description: "Controlled high-knee march holding weights.",
			},
			{ name: "Bird Dog", duration: 60, description: "Balance and extend opposite limbs from tabletop position." },
			{ name: "Rest", duration: 30, description: "Catch your breath." },
			{ name: "Dead Bug", duration: 60, description: "Controlled core work lying on your back." },
			{ name: "Side Leg Raises", duration: 45, description: "Lie on your side, raise top leg, hold briefly, lower." },
			{ name: "Dumbbell Side Bends", duration: 60, description: "Bend sideways with dumbbell, return, switch sides." },
			{ name: "Glute Bridge March", duration: 60, description: "In bridge position, lift one foot at a time." },
			{ name: "Wall Push-ups", duration: 45, description: "Stand facing wall, push body away and back." },

			// Cool down (4 min)
			{ name: "Cat-Cow Stretch (cool down)", duration: 60, description: "Gentle spinal mobility." },
			{
				name: "Hamstring Stretch (cool down)",
				duration: 60,
				description: "Sit with one leg extended, reach for toes.",
			},
			{
				name: "Chest Opener (cool down)",
				duration: 60,
				description: "Clasp hands behind your back, lift arms slightly.",
			},
			{ name: "Child's Pose (cool down)", duration: 60, description: "Relax and breathe to finish." },
		],
	},
];
