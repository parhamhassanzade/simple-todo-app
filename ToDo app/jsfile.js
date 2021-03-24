let notes = [];
let counter = 1;

//*create element
let render = function (note) {
  let div = document.querySelector(".diveparent");
  div.style.display = "block";
  const chek = document.createElement("input");
  chek.value = "off";
  chek.setAttribute("type", "checkbox");
  chek.style.cursor = "pointer";
  chek.style.transform = "scale(2) translate(5px, 5px)";
  const p = document.createElement("p");
  p.style.display = "block";
  p.textContent = counter + "." + note.title;
  p.appendChild(chek);
  div.appendChild(p);
  counter++;

  //*check box decoration
  chek.addEventListener("change", function (e) {
    if (e.target.value == "off") {
      p.style.textDecoration = "line-through darkblue";
      p.style.color = "gray";
      chek.value = "on";
    } else if (e.target.value == "on") {
      p.style.textDecoration = "unset";
      p.style.color = "#faa307";
      chek.value = "off";
    }
  });
};
//*add to form
document.querySelector("#nameform").addEventListener("submit", function (e) {
  e.preventDefault();
  notes.push({
    title: e.target.elements.inputText.value,
  });
  render(notes[counter - 1]);
  e.target.elements.inputText.value = "";
});
