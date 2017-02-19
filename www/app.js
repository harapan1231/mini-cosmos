var Root = {};
Root.view = function() {
  return m("div", {class: "conatiner"}, [
    m("h5", "Hello, world.")
  ])
}

m.route(document.getElementById("app"), "/", {
  "/": Root,
//  "/commission": Commission,
})
