 var readlineSync=require('readline-sync');

var userName =  readlineSync.question("Please Input your name : ");
console.log("Welcome "+userName);


var QuestionList=[{
  question:"What is the most popular sport in India? ",
  answer:"Cricket"
},
{
  question:"How many states are there in India ? ",
  answer:"28"
},
  {
  question:"National Flower of India is ? ",
  answer:"Lotus"
},
{
  question:"National Bird of India ? ",
  answer:"Peacock"
},
{
  question:"In which state is the Kaziranga National Park located ? ",
  answer:"Assam"
}];



function play()
  {
   var Score=0;    
    for (var i=0; i<QuestionList.length;i++)
      {
        var UserInput=readlineSync.question(QuestionList[i].question);
        if(UserInput.toLowerCase()===QuestionList[i].answer.toLowerCase())
        {
          Score=Score+1;
          console.log("Correct");
          // console.log("Your Score is: "+ Score);
          console.log("-------------------------");
        }
        else
        {
          console.log("Wrong Answer");
          // console.log("Your Score is: "+ Score);
          console.log("-------------------------");
        }
      }

    console.log("Your Final Score is : " + Score);
  }


play();





