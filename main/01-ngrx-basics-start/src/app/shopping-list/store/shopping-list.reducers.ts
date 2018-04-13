import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';



// This is for the initial state
export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initState: State = {
  ingredients:  [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ],
  editedIngredient: null,
  editedIngredientIndex: -1,

};

export function shoppingListReducer (state = initState, action: ShoppingListActions.ShoppingListActions) {
  console.log(action.type);
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          action.payload,
        ],
      }
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          ...action.payload,
        ]
      }
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };
      const ingredients = [
        ...state.ingredients,
      ];

      ingredients[state.editedIngredientIndex] = updatedIngredient;

      return {
        ...state,
        ingredients: ingredients,
        editedIngredient: null,
        editedIngredientIndex: -1,
      }
    case ShoppingListActions.DELETE_INGREDIENT:
      const deletedIngredients = [
        ...state.ingredients,
      ];

      deletedIngredients.splice(state.editedIngredientIndex, 1);

      return {
        ...state,
        ingredients: deletedIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1,
      }
    case ShoppingListActions.START_EDIT:
      const editedIngredient = {...state.ingredients[action.payload]};

      return {
        ...state,
        editedIngredient: editedIngredient,
        editedIngredientIndex: action.payload,
      }
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1,
      }
    default:
      return state;
  }
}
