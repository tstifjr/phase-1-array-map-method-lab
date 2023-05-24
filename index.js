const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*function capitalizeWords (phrase=''){
  const caps = words[0].toUpperCase();
  return caps;
}*/

// function findSpaces(phrase=""){
  
//   for (let i=0; i<phrase.length; i++){
//     if(phrase[i] === " "){
//       console.log(phrase[i+1]);
//       phrase[i+1].toUpperCase();
//       console.log(phrase[i+1]); 
//     }
//   }
//   console.log(phrase[0].toUpperCase());
//   console.log(phrase);
// }

function capPhrase(phrase=""){ 
  const wordArray = phrase.split(" "); //is array of each word in string
  const capArray = [];
  for (const word of wordArray){
    capArray.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  const capString = capArray.join(" ");
  return capString; //returns string of phrase with proper caps
}


const titleCased = () => {
  const capTutorials = tutorials.map(capPhrase);
  //console.log(capTutorials);
  
  //I want to try a for of loop instead here


  for (let i=0; i<tutorials.length; i++){
  tutorials[i]=capTutorials[i];
  }
  return tutorials
}

titleCased();
console.log(titleCased());

//console.log(tutorials[0].length);
