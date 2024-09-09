import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const onAddCategory = () => {
    setCategories(["HunterXHunter", ...categories]);
  };

  console.log(categories);

  return (
    <div>
      {/*Titulo*/}
      <h2>GiftExpertApp</h2>
      <button onClick={onAddCategory}>Agregar</button>
      {/*Input*/}
      <AddCategory />
      {/*Listado de Cateogorias*/}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
};
