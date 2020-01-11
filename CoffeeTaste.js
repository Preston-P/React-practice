import React, { useState, Component } from "react";
import Coffee from "./coffee";
import Menu from "../Home-components/menu";
import Form from "../Home-components/form";

function CoffeeContext() {
  const [coffees, setCoffees] = useState([
    { type: "Fruity", descr: "light roast" },
    { type: "Biscuit", descr: "medium roast" },
    { type: "Chocolate", descr: "medium light roast" },
    { type: "Earthy", descr: "dark roast" }
  ]);

  const handleSubmit = event => {
    // alert("your favorite flavor is" + event.target.value);
    event.preventDefault();
  };

  const handleChange = event => {
    setCoffees({ descr: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Menu>
          {coffees.map(coffee => (
            <option key={coffees.type} value={coffee.type}>
              {coffee.type}
            </option>
          ))}
        </Menu>
        <input
          type="submit"
          value="Submit"
          name="text"
          onChange={handleChange}
        ></input>
        ;
      </label>
      <div>
        {coffees.map(coffee => (
          <div>
            {coffee.descr}
            <br />
          </div>
        ))}
      </div>
    </form>
  );
}

export default CoffeeContext;

/* The main  information that is passed through the context and is passed down 
to other componnents  */

/* Will output all 3 of drip, espresso, and cold brew and their descriptions */
