import { Difficulty } from '../enums/Difficulty';
import { Tag } from '../enums/Tag';
import { Unit } from '../enums/Unit';
import { Recipe } from '../interfaces/Recipe';

export const RECIPES: Recipe[] = [
  {
    id: crypto.randomUUID(),
    name: 'Spaghetti Carbonara',
    description:
      'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Quick, creamy, and comforting.',
    cuisine: 'Italian',
    course: 'Main Course',
    servings: 2,

    tags: [Tag.Vegetarian, Tag.LowCarb, Tag.Quick],
    likes: 250,
    rating: 4.7,
    ratingCount: 128,
    difficulty: Difficulty.Medium,

    prepTime: 10,
    cookTime: 15,
    totalTime: 25,

    ingredients: [
      {
        id: crypto.randomUUID(),
        name: 'Spaghetti',
        amount: 200,
        unit: Unit.Gram,
        category: 'Pasta',
      },
      {
        id: crypto.randomUUID(),
        name: 'Pancetta',
        amount: 100,
        unit: Unit.Gram,
        category: 'Meat',
      },
      {
        id: crypto.randomUUID(),
        name: 'Eggs',
        amount: 2,
        unit: Unit.Piece,
        category: 'Dairy',
      },
      {
        id: crypto.randomUUID(),
        name: 'Parmesan Cheese',
        amount: 50,
        unit: Unit.Gram,
        category: 'Dairy',
        notes: 'Grated',
      },
      {
        id: crypto.randomUUID(),
        name: 'Black Pepper',
        amount: 1,
        unit: Unit.Teaspoon,
        category: 'Spices',
        notes: 'Freshly ground',
      },
      {
        id: crypto.randomUUID(),
        name: 'Salt',
        amount: 0.5,
        unit: Unit.Teaspoon,
      },
    ],

    preparation: [
      {
        id: 'step1',
        title: 'Cook the pasta',
        description:
          'Bring salted water to a boil and cook the spaghetti until al dente. Reserve a cup of pasta water before draining.',
        order: 1,
        duration: 10,
        equipment: ['Pot', 'Strainer'],
        ingredientsUsed: ['Spaghetti', 'Salt'],
      },
      {
        id: 'step2',
        title: 'Prepare the sauce',
        description: 'Whisk together eggs, grated parmesan, and pepper in a bowl. Set aside.',
        order: 2,
        duration: 5,
        ingredientsUsed: ['Eggs', 'Parmesan Cheese', 'Black Pepper'],
      },
      {
        id: 'step3',
        title: 'Cook pancetta',
        description: 'Fry the pancetta in a large pan until crispy, then remove from heat.',
        order: 3,
        duration: 5,
        equipment: ['Frying Pan'],
        ingredientsUsed: ['Pancetta'],
      },
      {
        id: 'step4',
        title: 'Combine everything',
        description:
          'Add the drained pasta to the pancetta and toss. Pour in the egg mixture while stirring quickly to avoid scrambling the eggs. Adjust consistency with pasta water.',
        order: 4,
        duration: 5,
        equipment: ['Pan', 'Tongs'],
      },
      {
        id: 'step5',
        title: 'Serve',
        description: 'Serve immediately with extra parmesan and pepper on top.',
        order: 5,
        duration: 1,
      },
    ],

    equipment: ['Pot', 'Frying Pan', 'Mixing Bowl', 'Strainer', 'Tongs'],

    imagesUrl: [
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0',
      'https://images.unsplash.com/photo-1525755662778-989d0524087e',
    ],
    videosUrl: ['https://www.youtube.com/watch?v=3AAdKl1UYZs'],

    nutrients: {
      calories: 620,
      fat: 28,
      carbs: 60,
      protein: 25,
      fibers: 3,
      sugar: 2,
    },

    author: 'Chef Antonio Rossi',
    createdOn: new Date('2024-03-10T10:00:00Z'),
    lastUpdated: new Date('2025-02-14T15:30:00Z'),
    isDeleted: false,
    isPublic: true,
    version: 1,
  },
];
