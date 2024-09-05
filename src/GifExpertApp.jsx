import { useState } from "react";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  console.log(categories);

  return (
    <div>
      {/*Titulo*/}
      <h2>GiftExpertApp</h2>
      {/*Input*/}

      {/*Listado de Cateogorias*/}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
};
