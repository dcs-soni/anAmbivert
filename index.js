var readlineSync = require("readline-sync");
const chalk = require('chalk');
let center = require('center-align');
const chalkAnimation = require('chalkercli');

const log = console.log;
let ambivert = 0;
let introvert = 0;
let extrovert = 0;
let neutral = 0;


let questions = [
{
  question: "\n1. I don’t like to draw attention to myself."
},
{
  question: "\n2. I don't start conversations with people I don’t know."
},
{
  question: "\n3. I enjoy spending time alone with my own thoughts."
},
{
  question: "\n4. I feel comfortable in groups and like working in them."
},
{
  question: "\n5. I tend not to assert myself."
},
{
  question: "\n6. I talk to a lot of different people at parties."
},
{
  question: "\n7. I’m a good listener."
},
{
  question: "\n8. When I am around people for a long time, my energy fades."
},
{
  question: "\n9. I don’t mind being the center of attention."
},
{
  question: "\n10. I am comfortable being alone and like things I can do alone."
}, 
{
  question: "\n11. I get bored when I’m by myself."
},
{
  question: "\n12. I don’t talk a lot."
},
{
  question: "\n13. I am quiet around strangers."
},

//Add more questions below this line

//Add more questions above this line
{
  options: "\nA. Strongly agree\nB. Agree\nC. Neutral\nD. Disagree\nE. Strongly Disagree\n"
}];





//Start of the game - Description and greetings
function start() {
  log(chalk.yellowBright.underline.bold(center(`ARE YOU AN` + chalk.cyanBright.underline.bold(" AMBIVERT??") + `🙃`, 100)));
  log(` 
Ambivert - a person who has a balance of ` + chalk.greenBright("extrovert") + ` and ` + chalk.redBright("introvert") + ` features in their personality.`      + chalk.magentaBright.underline(" Are you an ambivert?") + ` That'll be cleared upon finishing the quiz.

Enjoy the quiz and have fun 😋 `);

  while(true){
    var userName = readlineSync.question("\nMay I have your name please?");
    if(userName){
      log(`\nHey ` + chalk.yellow.bold(userName) + " Let's start!!");
      log(`\nHere are the ` + chalk.yellow.bgBlackBright("QUESTIONS"));
      break;
    }else{
      log(chalk.redBright("Ohh snap :( ") + ` I didn't get your name. Please try again.\n`);
    }
  }
  return userName;

}



function findType(extrovert, introvert, ambivert, neutral) {

  let ans = [extrovert, introvert, ambivert, neutral];
  let max = -1;
  let type = extrovert;
  for(var i=0; i<ans.length; i++){
    
    if(max < ans[i]){
      max = ans[i];
      type = i;
    }
  }
  return type;
  // printEssay(type);
}

function printEssay(type, name) {
  log(chalk.yellow.bold("\nLet's see you fall in which category 😉"));
  log(chalk.blueBright("----------------------------------------------"));

  if(type === 0){
    log(`
` + (chalk.redBright.bold.underline("Hey " + name + "!!")) + " You got " + chalk.greenBright.bgBlack("Extraversion") + ` 

Extraversion is the state of primarily obtaining gratification from outside oneself.` + chalk.yellow.underline("Extraverts tend to enjoy human interactions and to be enthusiastic") + ", talkative, assertive, and gregarious." + chalk.magentaBright("Extraverts are energized and thrive off being around other people."));

  }

  else if(type === 1){
    log(`
` + chalk.redBright.bold.underline("Hey " + name + "!!") + " You're kind of Introvert type person." + `

` + chalk.greenBright.bold("Introversion") + " is the state of being predominantly interested in one's own mental self. Introverts are typically perceived as more reserved or reflective. " + chalk.whiteBright.underline("Introverts often take pleasure in solitary activities such as reading, writing, or meditating.") + " An introvert is likely to " + chalk.underline.yellowBright("enjoy time spent alone") + " and find less reward in time spent with large groups of people. ");
  }

  else if(type === 2){
    log(`
` + chalk.yellowBright.bold.bgGray("Hey " + name + "!!") + " You're an " + chalk.greenBright.bold.underline("Ambivert") + `

` + "Ambiversion is falling more or less directly in the middle, between" + chalk.underline.bold.magentaBright("Introversion and Extraversion. ") + chalk.blueBright.underline("An ambivert is moderately comfortable with groups and social interaction, but also relishes time alone, away from a crowd.") + " In simpler words, an " + chalk.yellowBright("ambivert") + " is a person whose behaviour changes according to the situation they are in.  " );
  }

  else if(type === 3){
    log("Ahh.. You're" + chalk.yellowBright.bold.underline("neutral") + " Get some life, enjoy and hang out with your friends. Atleast be an" + chalk.blueBright("Ambivert") + " like me 😂");
  }

}


function pickRandomColor(){
  colors = ['whiteBright', 'redBright', 'magentaBright', 'yellowBright', 'blueBright'];
  const randomEle = colors[Math.floor(Math.random() * colors.length)];
  return randomEle;
}

//Checks the answer and temporarily set the type of person.
function play(ques, opt){
  // let color = pickRandomColor();
  log(chalk.magentaBright.bold(ques));
  log(opt);
  let ans = readlineSync.question(chalk.yellowBright.underline("\nYour answer: "));


  if(ans === 'A' || ans === 'a'){
    introvert += 1;
    neutral += 0.5;
  }
  else if(ans === 'B' || ans === 'b'){
    ambivert += 1;
    introvert += 1;
  }
  else if(ans === 'C' || ans === 'c'){
    neutral += 1;
    ambivert += 1;
  }
  else if(ans === 'D' || ans === 'd'){
    extrovert += 1;
    ambivert += 1;
  }
  else if(ans === 'E' || ans === 'e'){
    extrovert += 1;
    introvert += 0.5;
    ambivert += 0.5;
  }
  else {
    log("\nOhh noo😕 you made an invalid choice..");
    play(ques, opt);
  }
}


function questionPrint(questionsList){
  for (var i=0; i<questionsList.length - 1; i++) {
    var currentQuestion = questionsList[i];
    play(currentQuestion.question, questionsList[questions.length - 1]['options']);
    
  }
  type = findType(extrovert, introvert, ambivert, neutral);
  log("Ex" + extrovert);
  log("In" + introvert);
  log("Amb" + ambivert);
  log("Neu" + neutral);
  return type;

}

function playQuiz(){
  name = start(); // name = userName
  type = questionPrint(questions);
  printEssay(type, name);
}


//Quiz starts from here

playQuiz();