const workouts = [
	{
		id: 1,
		name: "Cardio Blast",
		steps: [
			{
				name: "High Knees",
				duration: 60,
				description: "Stand in place and run, bringing your knees up towards your chest as high as possible.",
			},
			{
				name: "Jumping Jacks",
				duration: 60,
				description:
					"Jump with your legs spreading wide and your arms going overhead, then return to the starting position.",
			},
			{
				name: "Mountain Climbers",
				duration: 60,
				description: "In a plank position, alternate bringing your knees to your chest as quickly as possible.",
			},
			{
				name: "Burpees",
				duration: 60,
				description:
					"Start standing, drop into a squat, kick your feet back into a plank, do a push-up (optional), jump your feet back in, and leap up.",
			},
			{
				name: "Rest",
				duration: 30,
				description: "Take a break or march in place.",
			},
			{
				name: "Butt Kicks",
				duration: 60,
				description: "Run in place, kicking your heels toward your glutes.",
			},
			{
				name: "Squat Jumps",
				duration: 60,
				description: "Perform a squat, then jump up explosively, landing softly into the next squat.",
			},
			{
				name: "Lateral Shuffles",
				duration: 60,
				description: "Shuffle quickly from side to side in a small space, staying low.",
			},
			{
				name: "Rest",
				duration: 30,
				description: "Take a break or march in place.",
			},
			{
				name: "Plank to Shoulder Tap",
				duration: 60,
				description: "Hold a plank and tap your opposite shoulder with each hand, alternating sides.",
			},
		],
	},
	{
		id: 2,
		name: "Core and Abs",
		steps: [
			{
				name: "Plank",
				duration: 60,
				description: "Hold a plank position with your body straight, engaging your core.",
			},
			{
				name: "Bicycle Crunches",
				duration: 60,
				description:
					"Lie on your back and alternate bringing your opposite elbow to your knee, twisting your torso.",
			},
			{
				name: "Leg Raises",
				duration: 60,
				description:
					"Lie on your back and lift your legs up towards the ceiling, then lower them slowly without touching the ground.",
			},
			{
				name: "Russian Twists",
				duration: 60,
				description:
					"Sit with your knees bent and feet lifted, twist your torso side to side, touching the ground next to your hips.",
			},
			{
				name: "Rest",
				duration: 30,
				description: "Take a break or march in place.",
			},
			{
				name: "Flutter Kicks",
				duration: 60,
				description: "Lie on your back with legs straight, and alternate small, quick kicks up and down.",
			},
			{
				name: "V-Ups",
				duration: 60,
				description:
					"Lie on your back, then simultaneously lift your legs and upper body, reaching for your toes.",
			},
			{
				name: "Plank with Hip Dips",
				duration: 60,
				description: "Hold a plank on your forearms, dipping your hips from side to side.",
			},
			{
				name: "Rest",
				duration: 30,
				description: "Take a break or march in place.",
			},
			{
				name: "Hollow Body Hold",
				duration: 60,
				description:
					"Lie on your back, lift your shoulders and legs off the ground, holding your body in a curved position.",
			},
		],
	},
	{
		id: 3,
		name: "Full-Body Strength",
		steps: [
			{
				name: "Push-Ups",
				duration: 60,
				description: "Perform as many push-ups as you can with good form, whether on your toes or knees.",
			},
			{
				name: "Squats",
				duration: 60,
				description: "Stand with feet shoulder-width apart, squat down, and return to standing.",
			},
			{
				name: "Lunges",
				duration: 60,
				description: "Step forward into a lunge position, alternating legs with each rep.",
			},
			{
				name: "Plank to Push-Up",
				duration: 60,
				description:
					"Start in a plank position, lower one arm at a time into a forearm plank, then push back up.",
			},
			{
				name: "Rest",
				duration: 30,
				description: "Take a break or march in place.",
			},
			{
				name: "Glute Bridges",
				duration: 60,
				description:
					"Lie on your back with knees bent, lift your hips toward the ceiling, squeezing your glutes.",
			},
			{
				name: "Superman",
				duration: 60,
				description: "Lie on your stomach and lift your arms and legs off the ground simultaneously.",
			},
			{
				name: "Wall Sit",
				duration: 60,
				description: "Press your back against a wall, slide down into a squat position, and hold.",
			},
			{
				name: "Rest",
				duration: 30,
				description: "Take a break or march in place.",
			},
			{
				name: "Inchworms",
				duration: 60,
				description:
					"Stand up, bend over, walk your hands out into a plank, do a push-up, then walk your hands back up.",
			},
		],
	},
	{
		id: 4,
		name: "HIIT",
		steps: [
			{
				name: "Jumping Jacks",
				duration: 30,
				description: "Jump with your legs and arms moving in sync.",
			},
			{
				name: "Squat Jumps",
				duration: 30,
				description: "Perform a squat and jump up explosively.",
			},
			{ name: "Rest", duration: 15, description: "Take a quick rest." },
			{
				name: "Mountain Climbers",
				duration: 30,
				description: "In a plank position, alternate bringing knees to chest.",
			},
			{
				name: "Push-Ups",
				duration: 30,
				description: "Perform push-ups with good form.",
			},
			{ name: "Rest", duration: 15, description: "Take a quick rest." },
			{
				name: "Burpees",
				duration: 30,
				description: "Perform a full burpee with or without a push-up.",
			},
			{
				name: "High Knees",
				duration: 30,
				description: "Run in place, bringing your knees up as high as possible.",
			},
			{ name: "Rest", duration: 15, description: "Take a quick rest." },
			{
				name: "Plank Hold",
				duration: 60,
				description: "Finish strong by holding a plank, engaging your core.",
			},
		],
	},
	{
		id: 5,
		name: "Barbell Cardio Burn",
		steps: [
			{
				name: "Barbell Squat to Press",
				duration: 60,
				description:
					"Hold the barbell at your shoulders, squat down, and as you stand up, press the barbell overhead. Use 2.5 kg or 5 kg depending on your strength level.",
			},
			{
				name: "Barbell Deadlift to Upright Row",
				duration: 60,
				description:
					"With the barbell on the floor, bend your knees and hinge at your hips to pick it up. Stand tall and pull the barbell to your chest. Lower and repeat. Use 2.5 kg or 5 kg.",
			},
			{
				name: "Rest",
				duration: 30,
				description: "Take a break or march in place to keep your heart rate up.",
			},
			{
				name: "Barbell Clean and Press",
				duration: 60,
				description:
					"From the floor, lift the barbell to your shoulders in one motion, then press overhead. Lower it back down and repeat. Use 2.5 kg or 5 kg.",
			},
			{
				name: "Barbell Lunge with Bicep Curl",
				duration: 60,
				description:
					"Step into a lunge position while curling the barbell towards your chest, then return to standing and lower the barbell. Alternate legs. Use 1 kg or 2.5 kg.",
			},
			{
				name: "Rest",
				duration: 30,
				description: "Take a break or march in place.",
			},
			{
				name: "Barbell Row to Tricep Extension",
				duration: 60,
				description:
					"Bend at the waist and row the barbell to your chest, then straighten up and press the barbell overhead, extending your triceps. Use 1 kg or 2.5 kg.",
			},
			{
				name: "Barbell High Knees",
				duration: 60,
				description: "Hold a light barbell (1 kg) at your chest and perform high knees as fast as possible.",
			},
			{
				name: "Rest",
				duration: 30,
				description: "Take a break or march in place.",
			},
			{
				name: "Barbell Russian Twists",
				duration: 60,
				description:
					"Sit on the floor, holding the barbell horizontally with both hands. Twist your torso side to side, touching the barbell to the ground on each side. Use 1 kg or 2.5 kg.",
			},
		],
	},
];
