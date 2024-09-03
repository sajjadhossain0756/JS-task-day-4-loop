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

// // task-3 start here;

// for (let i = 1; i <= 100; i++) {
//     if (Number.isInteger(Math.sqrt(i))) { // Check if the square root of the number is an integer
//         console.log(`Encountered the first square number: ${i}`);
//         break;
//     }
// }

// // task-4 start here;
// for(let i = 1; i <= 40; i++){
//     if(i % 2 !== 0){
//         continue;  
//     }
//     console.log(i);
    
// }

// task-5 start here;
for(let x = 55; x <= 85; x++){
    if(x % 5 == 0){
        continue;
    }
    console.log(x);
}

