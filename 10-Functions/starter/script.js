'use strict';
const flight ='LH234'
const jonas={
    name:'was defd',
    passport :254286249
}
const checkIn=function(flightNum,passenger){
    flightNum='LH999';
    passenger.name="Mr. "+passenger.name;
    if(passenger.passport===254286249){
        alert('Check In');
    }else{
        alert('Wrong passport')
    }
}
checkIn(flight,jonas); 
///////////////////////////
 const poll={
    question:'What is your favourite programming language?',
    options:['0:JavaScript','1: Python','2: Rust','3: C++'],
    answers: new Array(4).fill(0),
    
    registerNewAnswerfunction(){
       const ans= prompt(`${poll.question}\n ${poll.options[0]}\n ${poll.options[1]}\n ${poll.options[2]}\n ${poll.options[3]}\n (write option number)`)
        if(ans===0||1||2||4){
            poll.answers[ans]+=1
        }

     displayResults(poll.answers);
    }
}
document.querySelector('.poll').addEventListener('click',poll.registerNewAnswerfunction);
const displayResults=function (type){
   typeof type==="Array"?console.log(type):console.log(`Poll Result are ${type[0]},${type[1]},${type[2]},${type[3]}`);
}