
function lowestNumber(numbers){
    let min = numbers[0]
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const heights2 = [167, 190, 120, 165, 137, 90];
const result = lowestNumber(heights2);
console.log(result);

