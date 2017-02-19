var Root = {};
Root.view = function() {
  return [
    m("main", {class: "wrapper container"}, [
      m("h2", "Your Commission Assistant"),
      m("section", {class: "container"}, [
        m("i", "By now, you should've somehow realized what you're not to do. I don't believe that anybody feels the way I do about you now."),
      ]),
      m("section", {class: "container"}, [
        m("button", {class: "button float-right", onclick: Root.vm.load_onclick}, "Load"),
      ]),
      m("br"),
      m("section", {class: "container"}, Root.vm.items.map(function(x, i) {
        return [
	  m("h4", {class: "row"}, x.key),
          m("p", {class: "row",}, [
	    m("label", {class: "column"}, x.val),
	    m("span", {class: "column"}, "=>"),
	    m("input", {type: "text", class: "column"}, "test"),
          ]),
	];
      })),
      m("br"),
      m("section", {class: "container"}, [
        m("button", {class: "button float-right", onclick: Root.vm.print_onclick}, "Print"),
      ]),
  ])];
};
Root.vm = {
  init: function() {
  },
  items: [
    {key: "Composite", val: "K Composite"},
    {key: "Agency", val: "L Agency"},
    {key: "Agent", val: "M Agent"},
    {key: "Contractor", val: "A Contractor"},
    {key: "Insured", val: "B Insured"},
    {key: "Commission Percentage", val: 100},
    {key: "Commission Addition", val: 15},
    {key: "Commission", val: 115},
  ],
  load_onclick: function() {
    alert("Loaded.");
  },
  print_onclick: function() {
    alert("You've got the print!");
  },
};
Root.controller = function() {
  Root.vm.init();
};

m.route(document.getElementById("app"), "/", {
  "/": Root,
//  "/commission": Commission,
});
