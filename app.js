var inputBox = document.querySelector(".input-box");

var text = inputBox.value;

function upperc() {
  var text = inputBox.value;
  text = text.toUpperCase();
  inputBox.value = text;
}

function lowerc() {
  var text = inputBox.value;
  text = text.toLowerCase();
  inputBox.value = text;
}

function radcse() {
  var text = inputBox.value;
  var tempWord = [];
  text.split("").map((letter) => {
    let randomn = Math.round(Math.random());
    if (randomn == 1) {
      tempWord.push(letter.toUpperCase());
    } else {
      tempWord.push(letter.toLowerCase());
    }
  });
  text = tempWord.join("");
  inputBox.value = text;
}

function fstletwrduc() {
  var text = inputBox.value;
  text = text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  inputBox.value = text;
}

function sentfstuc() {
  var text = inputBox.value;
  text = text
    .split(".")
    .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
    .join(".");
  inputBox.value = text;
}

/**
 * Save file
 */

const downloadToFile = (content, filename, contentType) => {
  const link = document.createElement("a");
  const file = new Blob([content], { type: contentType });

  link.href = URL.createObjectURL(file);
  link.download = filename;
  link.click();

  URL.revokeObjectURL(link.href);
};

function saveas() {
  var text = inputBox.value;
  downloadToFile(text, "new-text.txt", "text/plain");
}

/**
 * Copy Text
 */

function copytxt() {
  var text = inputBox.value;
  console.log(navigator);
  navigator.clipboard.writeText(text);
}

/**
 * Load File
 */

function loadfile(event) {
  var reader = new FileReader();

  reader.onload = function (event) {
    inputBox.innerHTML = event.target.result;
  };

  reader.readAsText(event.target.files[0]);
}
