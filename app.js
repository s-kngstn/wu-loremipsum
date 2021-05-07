const sentences = [
  "I grew up on the crime side, the New York Times side, Stayin' alive was no jive.",
  "Handcuffed in the back of a bus, forty of us.",
  "Life as a shorty shouldn't be so rough.",
  "We got stick-up kids, corrupt cops, and pop rocks.",
  "Leave it up to me while I be livin' proof",
  "To kick the truth to the young black youth.",
  "Cash rules everything around me, dollar dollar bill, ya'll.",
  "I smoke on the mic like smoking Joe Frazier, the hell raiser, raising hell with the flavor.",
  "Terrorize the jam like troops in Pakistan, swinging through your town like your neighborhood Spiderman.",
  "So uhh, tic toc and keep ticking, while I get you flipping off what I'm kicking.",
  "The rebel, I make more noise than heavy metal.",
  "Rae got it going on pal, call me the rap assassinator, rhymes rugged and built like Schwarzenegger.",
  "Small change, they putting shame in the game.",
  "Shame on you when you stepped through to The Ol Dirty Bastard straight from the Brooklyn Zoo.",
  "Feeling mad hostile, ran the apostle, flowing like Christ when I speak the gospel.",
  "The game of chess, is like a swordfight, you must think first before you move.",
  "Well I'm a sire, I set the microphone on fire, rap styles vary and carry like Mariah.",
  "If what you say is true, the Shaolin and the Wu-Tang could be dangerous.",
  "I come rough, tough like an Elephant tusk.",
  "Your head rush, fly like Egyptian musk.",
  "I bomb atomically Socrates' philosophies and hypothesis can't define how I be dropping these mockeries.",
  "Lyrically perform armed robbery, flee with the lottery, possibly they spotted me.",
  "Shackling the masses with drastic rap tactics, graphic displays melt the steel like blacksmiths.",
  "Behold the bold soldier control the globe slowly, proceeds to blow, swinging swords like Shinobi.",
  "As the world turns I spread like germs, bless the globe with the pestilence, the hard-headed never learn.",
  "Domino effect arts and crafts, paragraphs contain cyanide.",
  "Olympic torch flaming we burn so sweet, the thrill of victory the agony defeat.",
  "Perpendicular to the square we stay in gold like Flair, escape from your dragon's lair in particular.",
  "My beats travel like a vortex through your spine, to the top of your cerebral cortex.",
  "Yes, the rhythm, the rebel, alone in my level heat it up past the boiling point of metal.",
  "Step through your section with the Force like Luke Skywalker, rhyme author, orchestrate mind torture.",
  "I breaks it down to the bone gristle, Ill speaking Scud missile heat seeking, Johnny Blazing.",
  "Nightmares like Wes Craven people gunning, my third eye seen it coming, before it happened.",
  "Protect Ya Neck, my sword still remain imperial before I blast the mic, RZA scratch off the serial.",
  "It was the night before New Year's all through the projects, not a handgun was silent, not even a Tec.",
];
const selectionMenu = document.querySelector("#selection");
const btn = document.querySelector("#btn");
const content = document.querySelector(".content-container");
const regexRemoveChars = /[^\w\s]/gi;
new ClipboardJS(".copy");

const shuffleWords = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const getWords = (words, wordAmount) => words.split(" ").slice(0, wordAmount).join(" ").toLowerCase().replace(regexRemoveChars, '');

const getSentences = amount => {
  let newSentenceArr = [];
  for (let i = 0; i < amount; i++) {
    let randomSentence =
      sentences[Math.floor(Math.random() * sentences.length)];
    newSentenceArr.push(randomSentence);
  }
  return newSentenceArr.join(" ");
}

const getParas = amount => {
  let para = [];
  for (let i = 0; i < amount; i++) {
    // Randomly output 5-10 sentence paragraphs
    let sentenceCount = Math.floor(Math.random() * 6) + 5;
    para.push(getSentences(sentenceCount));
  }
  return para;
}

btn.addEventListener("click", () => {
  document.querySelector(".content-container").innerHTML = "";
  let num = document.querySelector("#input").value;
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
