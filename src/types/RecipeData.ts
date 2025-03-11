export type { RecipeData }; 

type RecipeData = {
  id: string;
  name: string;
  calories: number;
  category: string;
  image_url: string;
  cook_time: number;
  cost: number;
  created_at: string;
  created_by: string;
  instructions: string;
  prep_time: number;
  published: boolean;
  servings: number;
  when_to_eat: string;
};

