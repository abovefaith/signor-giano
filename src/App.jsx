import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Signor Gianno's Pizza – Order Now</h1>
      <Pizza
        name="Pepperoni Pizza Deluxe"
        description="Mozzarella Cheese, Double Pepperoni, Extra Sauce"
      />

      <Pizza
        name="Royal Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese, Jalapenos"
      />
      <Pizza
        name="Quattro Carne Pizza"
        description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage, Mozzarella Cheese"
      />
      <Pizza
        name="Four Cheese Pizza"
        description="Mozzarella, Parmesan, Romano, Gorgonzola Cheese"
      />
      <Pizza
        name="Meat Lovers Pizza"
        description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
      />
      <Pizza
        name="Veggie Supreme Pizza"
        description="Mushrooms, Green Peppers, Onions, Black Olives, Mozzarella Cheese"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
