let body = document.body;
let click = document.querySelector("#click");
let click2 = document.querySelector("#click2");
let context = document.querySelector("#context");
let mousewheel = document.querySelector("#mousewheel");
let wheel = document.querySelector("#wheel");
let mousemove = document.querySelector("#mousemove");
let scroll = document.querySelector("#scroll");
let touchstart = document.querySelector("#touchstart");
let touchmove = document.querySelector("#touchmove");

let nope = (element) => (element.innerText = "😫");
let yep = (element) => (element.innerText = "👹");

let reset = () => {
  [click, click2, mousewheel, wheel, context, mousemove, scroll, touchstart, touchmove].forEach(nope);
};

reset();

document.querySelector("#reset").addEventListener("click", reset);

body.addEventListener("mousedown", (e) => {
  if (e.button === 0) {
    yep(click);
  } else if (e.button === 2) {
    yep(click2);
  }
});

body.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  yep(context);
});

body.addEventListener("mousewheel", () => yep(mousewheel));

body.addEventListener(
  "wheel",
  (e) => {
    yep(wheel);
  },
  { passive: false }
);

body.addEventListener("mousemove", () => yep(mousemove));

body.addEventListener("scroll", (e) => {
  e.preventDefault();
  yep(scroll);
});

body.addEventListener("touchstart", () => yep(touchstart));

body.addEventListener("touchmove", () => yep(touchmove));
