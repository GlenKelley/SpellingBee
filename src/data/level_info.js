
export const LEVEL_INFO = {
	level_1_general:	{ label: 'Level 1 General', stars: 1, color: 'yellow', icon: 'general', description: '', prerequisites: [] },

	level_1_arts:	{ label: 'Level 1 Arts', stars: 1, color: 'yellow', icon: 'arts', description: '', prerequisites: ['level_1_general'] },
	level_1_food:	{ label: 'Level 1 Food', stars: 1, color: 'yellow', icon: 'food', description: '', prerequisites: ['level_1_general'] },
	level_1_geography:	{ label: 'Level 1 Geography', stars: 1, color: 'yellow', icon: 'geography', description: '', prerequisites: ['level_1_general'] },
	level_1_science:	{ label: 'Level 1 Science', stars: 1, color: 'yellow', icon: 'science', description: '', prerequisites: ['level_1_general'] },
	level_1_sports:	{ label: 'Level 1 Sports', stars: 1, color: 'yellow', icon: 'sports', description: '', prerequisites: ['level_1_general'] },

	level_2_general:	{ label: 'Level 2 General', stars: 2, color: 'pink', icon: 'general', description: '', prerequisites: ['level_1_general'] },

	level_2_arts:	{ label: 'Level 2 Arts', stars: 2, color: 'pink', icon: 'arts', description: '', prerequisites: ['level_1_arts', 'level_2_general'] },
	level_2_food:	{ label: 'Level 2 Food', stars: 2, color: 'pink', icon: 'food', description: '', prerequisites: ['level_1_food', 'level_2_general'] },
	level_2_geography:	{ label: 'Level 2 Geography', stars: 2, color: 'pink', icon: 'geography', description: '', prerequisites: ['level_1_geography', 'level_2_general'] },
	level_2_science:	{ label: 'Level 2 Science', stars: 2, color: 'pink', icon: 'science', description: '', prerequisites: ['level_1_science', 'level_2_general'] },
	level_2_sports:	{ label: 'Level 2 Sports', stars: 2, color: 'pink', icon: 'sports', description: '', prerequisites: ['level_1_sports', 'level_2_general'] },

	level_3_general:	{ label: 'Level 3 General', stars: 3, color: 'blue', icon: 'general', description: '', prerequisites: ['level_2_general'] },

	level_3_arts:	{ label: 'Level 3 Arts', stars: 3, color: 'blue', icon: 'arts', description: '', prerequisites: ['level_2_arts', 'level_3_general'] },
	level_3_food:	{ label: 'Level 3 Food', stars: 3, color: 'blue', icon: 'food', description: '', prerequisites: ['level_2_food', 'level_3_general'] },
	level_3_geography:	{ label: 'Level 3 Geography', stars: 3, color: 'blue', icon: 'geography', description: '', prerequisites: ['level_2_geography', 'level_3_general'] },
	level_3_science:	{ label: 'Level 3 Science', stars: 3, color: 'blue', icon: 'science', description: '', prerequisites: ['level_2_science', 'level_3_general'] },
	level_3_sports:	{ label: 'Level 3 Sports', stars: 3, color: 'blue', icon: 'sports', description: '', prerequisites: ['level_2_sports', 'level_3_general'] },

	level_4_general:	{ label: 'Level 4 General', stars: 4, color: 'green', icon: 'general', description: '', prerequisites: ['level_3_general'] },

	level_4_arts:	{ label: 'Level 4 Arts', stars: 4, color: 'green', icon: 'arts', description: '', prerequisites: ['level_3_arts', 'level_4_general'] },
	level_4_food:	{ label: 'Level 4 Food', stars: 4, color: 'green', icon: 'food', description: '', prerequisites: ['level_3_food', 'level_4_general'] },
	level_4_geography:	{ label: 'Level 4 Geography', stars: 4, color: 'green', icon: 'geography', description: '', prerequisites: ['level_3_geography', 'level_4_general'] },
	level_4_science:	{ label: 'Level 4 Science', stars: 4, color: 'green', icon: 'science', description: '', prerequisites: ['level_3_science', 'level_4_general'] },
	level_4_sports:	{ label: 'Level 4 Sports', stars: 4, color: 'green', icon: 'sports', description: '', prerequisites: ['level_3_sports', 'level_4_general'] },

	level_5_general:	{ label: 'Level 5 General', stars: 5, color: 'purple', icon: 'general', description: '', prerequisites: ['level_4_general'] },

	level_5_arts:	{ label: 'Level 5 Arts', stars: 5, color: 'purple', icon: 'arts', description: '', prerequisites: ['level_4_arts', 'level_5_general'] },
	level_5_food:	{ label: 'Level 5 Food', stars: 5, color: 'purple', icon: 'food', description: '', prerequisites: ['level_4_food', 'level_5_general'] },
	level_5_geography:	{ label: 'Level 5 Geography', stars: 5, color: 'purple', icon: 'geography', description: '', prerequisites: ['level_4_geography', 'level_5_general'] },
	level_5_science:	{ label: 'Level 5 Science', stars: 5, color: 'purple', icon: 'science', description: '', prerequisites: ['level_4_science', 'level_5_general'] },
	level_5_sports:	{ label: 'Level 5 Sports', stars: 5, color: 'purple', icon: 'sports', description: '', prerequisites: ['level_4_sports', 'level_5_general'] },
};
