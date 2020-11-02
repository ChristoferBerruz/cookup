export interface ingredientsData{
    [key:string]:string[];
}

export default function getAvailableIngredients():ingredientsData {
    const ingredientsDairy = ["milk", "cheese"];
    const ingredientsVeg = ["tomatoes", "carrots"];
    const ingredientsMeat = ["chicken", "beef"];
    const ingredientsSpices= ["paprika", "onion powder"];

    const sections:ingredientsData = {
        "Dairy":ingredientsDairy,
        "Vegetables":ingredientsVeg,
        "Meats":ingredientsMeat,
        "Spices":ingredientsSpices
    };

    return sections;
}