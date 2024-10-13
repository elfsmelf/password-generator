const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = 15;

const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");

const password1CopiedText = document.getElementById("copied-text1");
const password2CopiedText = document.getElementById("copied-text2");

function generatePasswords() {
  let password1 = "";
  let password2 = "";
  for (let i = 0; i < passwordLength; i++) {
    password1 += characters[Math.floor(Math.random() * characters.length)];
    password1El.textContent = password1;
  }

  for (let i = 0; i < passwordLength; i++) {
    password2 += characters[Math.floor(Math.random() * characters.length)];
    password2El.textContent = password2;
  }
}

function copyPassword(password) {
  if (password === "password1") {
    password1CopiedText.classList.remove("fade-out");
    navigator.clipboard.writeText(password1El.textContent);
    password1CopiedText.textContent = "Copied Text!";
  } else if (password === "password2") {
    password2CopiedText.classList.remove("fade-out");
    navigator.clipboard.writeText(password2El.textContent);
    password2CopiedText.textContent = "Copied Text!";
  }
}

password1El.addEventListener("click", function () {
  setTimeout(function () {
    password1CopiedText.classList.add("fade-out");
  }, 3000);
});

password2El.addEventListener("click", function () {
  setTimeout(function () {
    password2CopiedText.classList.add("fade-out");
  }, 3000);
});
