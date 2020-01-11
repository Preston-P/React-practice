import React, { useState, Component } from "react";
import Coffee from "./coffee";
import Menu from "../Home-components/menu";

function CoffeeContext() {
  const [coffees, setCoffees] = useState([
    { type: "Fruity", descr: "light roast" },
    { type: "Biscuit", descr: "medium roast" },
    { type: "Chocolate", descr: "medium light roast" },
    { type: "Earthy", descr: "dark roast" }
  ]);

  const handleSubmit = event => {
    alert(`your favorite flavor is ${coffees.type}`);
    event.preventDefault();
  };

  const handleChange = event => {
    setCoffees({ type: event.target.value });
  };

  const filterDescr = descr => {
    setCoffees(coffee => {
      const coffees = coffee.coffees.filter(item => item.descr !== descr);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Menu onChange={handleChange} value={coffees.type}>
          <option value="Fruity">Fruity</option>
          <option value="Biscuit">Biscuit/Malt</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Earthy">Earthy</option>
        </Menu>
        <input type="submit" value="submit"></input>;
      </label>
    </form>
  );
}

export default CoffeeContext;

/* The main  information that is passed through the context and is passed down 
to other componnents  */

/* Will output all 3 of drip, espresso, and cold brew and their descriptions */
