const sentences = [
  "This is a sentence of words.",
  "Today the goat went for a walk.",
  "I like ice cream sandwiches because they are tasty.",
  "I used to live in San Francisco, but now I live in London.",
  "I really hope this is the better solution to this problem than my previous effort.",
  "Sometimes in life we need a little randomness.",
  "Lets all just talk about whats going on in the world today.",
  "How many woods would a would chuck chuck, if a wood chuck could chuck wood.",
];
const selectionMenu = document.querySelector("#selection");
const btn = document.querySelector("#btn");
const content = document.querySelector(".content-container");
new ClipboardJS(".copy");

function shuffleWords(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getWords(words, wordAmount) {
  return words.split(" ").slice(0, wordAmount).join(" ").toLowerCase();
}

function getSentences(amount) {
  let newSentenceArr = [];
  for (let i = 0; i < amount; i++) {
    let randomSentence =
      sentences[Math.floor(Math.random() * sentences.length)];
    newSentenceArr.push(randomSentence);
  }
  return newSentenceArr.join(" ");
}

function getParas(amount) {
  let para = [];
  for (let i = 0; i < amount; i++) {
    let sentenceCount = Math.floor(Math.random() * 2) + 5;
    para.push(getSentences(sentenceCount));
  }
  return para;
}

btn.addEventListener("click", () => {
  document.querySelector(".content-container").innerHTML = "";
  const num = document.querySelector("#input").value;
  let newPara;

  if (selectionMenu.value === "words") {
    newPara = document.createElement("p");
    newPara.innerText = getWords(shuffleWords(sentences).join(" "), num);
    content.append(newPara);
  } else if (selectionMenu.value === "sentences") {
    newPara = document.createElement("p");
    newPara.innerText = getSentences(num);
    content.append(newPara);
  } else if (selectionMenu.value === "paragraphs") {
    getParas(num).map(function (para) {
      newPara = document.createElement("p");
      const br = document.createElement("br");
      newPara.appendChild(document.createTextNode(para));
      content.append(br);
      content.append(newPara);
    });
  }
});
