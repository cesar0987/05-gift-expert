import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const onAddCategory = (newCategory) => {
    //setCategories(["HunterXHunter", ...categories]);
  };

  console.log(categories);

  return (
    <div>
      {/*Titulo*/}
      <h2>GiftExpertApp</h2>
      <button onClick={onAddCategory}>Agregar</button>
      {/*Input*/}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/*Listado de Cateogorias*/}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
};
