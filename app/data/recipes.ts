export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: string;
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Creamy Tuscan Pasta",
    cuisine: "Italian",
    minutes: 25,
    difficulty: "Easy",
    description: "Creamy pasta with sun-dried tomatoes.",
  },
  {
    id: 2,
    title: "Chicken Biryani",
    cuisine: "Indian",
    minutes: 50,
    difficulty: "Medium",
    description: "Aromatic basmati rice with spiced chicken.",
  },
  {
    id: 3,
    title: "Japanese Ramen",
    cuisine: "Japanese",
    minutes: 35,
    difficulty: "Medium",
    description: "A comforting bowl of noodles and broth.",
  },
  {
    id: 4,
    title: "Veggie Tacos",
    cuisine: "Mexican",
    minutes: 20,
    difficulty: "Easy",
    description: "Fresh tacos filled with vegetables.",
  },
  {
    id: 5,
    title: "Chocolate Pancakes",
    cuisine: "American",
    minutes: 15,
    difficulty: "Easy",
    description: "Fluffy pancakes with chocolate flavour.",
  },
  {
    id: 6,
    title: "Greek Salad",
    cuisine: "Greek",
    minutes: 10,
    difficulty: "Easy",
    description: "Refreshing salad with cucumber and olives.",
  },
];