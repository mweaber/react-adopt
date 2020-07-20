import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "generic-id-name" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Scarlet",
      animal: "dog",
      breed: "Shiba Inu",
    }),
    React.createElement(Pet, {
      name: "Boris",
      animal: "Reptile",
      breed: "Tortoise",
    }),
    React.createElement(Pet, {
      name: "Boba",
      animal: "Reptile",
      breed: "Bearded Dragon",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
