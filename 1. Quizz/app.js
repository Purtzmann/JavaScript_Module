//Select Form DOM

const form = document.querySelector(".form-quizz");
let questionTab = [];
let numberQuestion;
let resultTab = [];
let resultVerif = [];
let score = document.querySelector('.note');

//Good response
const response = ['c', 'a', 'b', 'a', 'c']


//Question Number

questionTab.push(document.querySelectorAll('.question-block'))
console.log(questionTab[0].length)
numberQuestion = (questionTab[0].length)+1

//Button Submit

form.addEventListener('submit', (e) => {
   e.preventDefault();

   for(i=1; i<numberQuestion; i++){
      resultTab.push(document.querySelector(`input[name="q${i}"]:checked`).value)
   }
   console.log(resultTab)
   verification(resultTab)

   resultTab=[]
   resultVerif=[]

})

//Verification results

let verification = (resultTab) =>{
   
   for(i=0; i< resultTab.length; i++){
      if(resultTab[i] === response[i]){
         resultVerif.push(true);
      } else{resultVerif.push(false);}
   }
   countResult(resultVerif)
}

//Count results

let countResult = (resultVerif) =>{
   let goodResponses = resultVerif.filter(el => el === true).length
   console.log(goodResponses)
   // score.innerTexte = `Vous avez obtenu le score de ${goodResponses}/${numberQuestion}`
   score.innerTexte = "toto"
}



