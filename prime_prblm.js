let num = 20
let count = 0
for(let i = 1 ; i <= num ; i++){
    (num % i == 0)?count++:null;
}
(count == 2)?console.log("Prime"):console.log("Not Prime");