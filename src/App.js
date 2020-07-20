import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from './SearchParams';

const App = () => {
  // return React.createElement("div", { id: "generic-id-name" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Scarlet",
  //     animal: "Dog",
  //     breed: "Shiba Inu",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Boris",
  //     animal: "Reptile",
  //     breed: "Tortoise",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Boba",
  //     animal: "Reptile",
  //     breed: "Bearded Dragon",
  //   }),
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  )
};

render(<App />, document.getElementById("root"));
