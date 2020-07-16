const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h3", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const x = 5

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
