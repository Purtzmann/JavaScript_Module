//Select Form DOM

const form = document.querySelector(".form-quizz");
let questionTab = [];
let numberQuestion;
let resultTab = [];
let resultVerif = [];
let questionsQuizz = document.querySelectorAll('.question-block')
let score = document.querySelector('.note');

//Good response
const response = ['c', 'a', 'b', 'a', 'c']


//Question Number

questionTab.push(questionsQuizz)
console.log(questionTab[0].length)
numberQuestion = (questionTab[0].length)+1

//Button Submit

form.addEventListener('submit', (e) => {
   e.preventDefault();

   for(i=1; i<numberQuestion; i++){
      resultTab.push(document.querySelector(`input[name="q${i}"]:checked`).value)
   }

   verification(resultTab)
 
   resultTab=[]
   countResult(resultVerif)
   console.log(resultVerif)
   resultVerif=[]
   

})

//Verification results

let verification = (resultTab) =>{
   
   for(i=0; i< resultTab.length; i++){
      if(resultTab[i] === response[i]){
         resultVerif.push(true);
      } else{
         resultVerif.push(false);
      }
   }
   colorFunction(resultVerif)
}

//Count results

let countResult = (tableau) =>{
   let goodResponses = tableau.filter(el => el === true).length
   console.log(goodResponses)
   score.innerText = `Vous avez obtenu le score de ${goodResponses}/${(numberQuestion)-1}`
}

//Style Color Response

let colorFunction = (tabBool) =>{
   for(let i=0; i< tabBool.length; i++){
      if(tabBool[i] === true){
         questionsQuizz[i].style.background = 'lightgreen';
      } else{
         questionsQuizz[i].style.background = '#ffb8b8';
         questionsQuizz[i].classList.add('echec');

         setTimeout(() => {
            questionsQuizz[i].classList.remove('echec');
        }, 500)

      }
   }
}


questionsQuizz.forEach(item => {
   item.addEventListener('click', () => {
       item.style.background = "white";
   })
})



