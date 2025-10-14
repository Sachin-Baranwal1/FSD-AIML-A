function Book() {
  const image = React.createElement("img", {
    src: "https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book-500x500.png",
    width: 250,
    height: 250,
    alt: "Physics Book Image",
  });

  const h4 = React.createElement("h4", null, "Title: Physics");
  const h3 = React.createElement("h3", null, "Price: ₹324/-");
  const bt = React.createElement("button", null, "Add To Cart");

  // A parent div that holds everything
  const card = React.createElement(
    "div",
    {
      className: "card",
      style: {
        textAlign: "center",
        padding: "10px",
        backgroundColor: "gold",
        border: "1px solid gray",
        borderRadius: "10px",
        width: "270px",
        margin: "20px auto",
      },
    },image,h4,h3,bt);
  return card;
}

// Render the component to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Book));
