// Js-day-4 about loop ::
// task-1 stat here;

// for(let i = 0; i <= 200; i++){

//    console.log(i);

//    if(i == 100){

//       break;  
//    }  
// }

// task-2 start here;
let num = 1;
let sum = 0;

while(num <= 20){
    
    sum += num;
    if(sum >= 100){
        break;
    }
    num++
}
console.log(sum);