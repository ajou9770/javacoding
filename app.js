const title = document.querySelector(".title h1");
const title2 = document.querySelector(".title h2");
const title3 = document.querySelector(".title h3");

console.log(title);

function handleMouseEnter() {
    console.log("mouse is enter");
    title.style.color="green";
}


function handleMouseLeave() {
    console.log("mouse is leaver");
    title.style.color="black";
}
function handleTitle2Click() {
    title2.style.color="yellow";
}
function handleTitle3Click() {
    title3.style.color="blue";
}

title2.addEventListener("click", handleTitle2Click);
title3.addEventListener("click", handleTitle3Click);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
