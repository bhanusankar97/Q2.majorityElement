let array = [3, 3, 4, 2, 4, 4, 2, 4, 4];
let len = array.length;
let n = len/2;
let dict_a = [];
for (let i of array){
    let count = 0; 
    for(let j of array){
        if(i==j){
            count = count + 1;
        }
    }
    if(count>n){
        dict_a.push(i);
    }
}
if(dict_a.length === 0){
    console.log("No Majority Element");
}else{
    console.log(dict_a[0]);
}