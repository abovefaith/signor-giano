import React from "react";
import { createRoot } from "react-dom/client";


const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pixel Perfect Pizzas"),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza Deluxe",
      description: "Mozzarella Cheese, Double Pepperoni, Extra Sauce",
    }),
    React.createElement(Pizza, {
      name: "Royal Hawaiian Pizza",
      description: "Sliced Ham, Pineapple, Mozzarella Cheese, Jalapenos",
    }),
    React.createElement(Pizza, {
      name: "Quattro Carne Pizza",
      description:
        "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage, Mozzarella Cheese",
    }),
    React.createElement(Pizza, {
      name: "Four Cheese Pizza",
      description: "Mozzarella, Parmesan, Romano, Gorgonzola Cheese",
    }),
    React.createElement(Pizza, {
      name: "Veggie Supreme Pizza",
      description:
        "Mushrooms, Green Peppers, Onions, Black Olives, Mozzarella Cheese",
    }),

  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
