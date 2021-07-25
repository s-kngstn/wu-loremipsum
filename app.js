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
  "First I'm gonna getcha, once I gotcha, I gat-cha, You could never capture the Method Man's stature.",
  "I come with that ol' loco style from my vocal, Couldn't peep it with a pair of bi-focals.",
  "I'm no joker! Play me like poker! Be on you like a house on fire! Smoke ya!",
  "The Wu is comin thru, the outcome is critical, Muckin wit my style, is sort of like a Miracle.",
  "One who just represent the Wu-Tang click with the game and soul, of an old school flick.",
  "Cuz I don't know ya therefore show me what you know, I come sharp as a blade and I cut you slow.",
  "How ya sound B? You're better off a quitter cuz I'm on the mound G, and it's a no-hitter.",
  "My DJ the catcher, he's my man, anyway he's the one who devised the plan.",
  "I be that insane one from the psycho ward, I'm on the trigger, plus I got the Wu-Tang sword.",
  "I leave the mic in body bags, my rap style has, the force to leave you lost, like the tribe of Shabazz.",
  "Murderous material, made by a madman, it's the mic wrecker, Inspector, bad man.",
  "Dare to compare, get pierced just like an ear, the zoo-we-do-wop-bop strictly hardware.",
  "Armed and geared cause I just broke out the prison charged by the system - for murdering the rhythm!",
  "Now, lo and behold, another deadly episode, bound to catch another charge when I explode",
  "Slammin a hype verse til ya head burst.",
  "Approachin me, you out of respect, chops ya neck, I get vexed, like crashing up a phat-ol Lex'.",
];

const selectionMenu = document.querySelector("#selection");
const btn = document.querySelector("#btn");
const content = document.querySelector(".content-container");
const regexRemoveChars = /[^\w\s]/gi;
new ClipboardJS(".copy");

const shuffleWords = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const getWords = (words, wordAmount) =>
  words
    .split(" ")
    .slice(0, wordAmount)
    .join(" ")
    .toLowerCase()
    .replace(regexRemoveChars, "");

const getSentences = (amount) => {
  let newSentenceArr = [];
  for (let i = 0; i < amount; i++) {
    let randomSentence =
      sentences[Math.floor(Math.random() * sentences.length)];
    newSentenceArr.push(randomSentence);
  }
  return newSentenceArr.join(" ");
};

const getParas = (amount) => {
  let para = [];
  for (let i = 0; i < amount; i++) {
    // Randomly output 5-10 sentence paragraphs
    let sentenceCount = Math.floor(Math.random() * 6) + 5;
    para.push(getSentences(sentenceCount));
  }
  return para;
};

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
