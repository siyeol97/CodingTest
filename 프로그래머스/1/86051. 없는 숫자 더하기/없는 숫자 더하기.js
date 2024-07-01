function solution(numbers) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let answer = 0;
    
    numbers.forEach((i) => {
        for(let j = 0; j < arr.length; j++){
            if(i === arr[j]){
                arr.splice(j, 1);
            }
        }
    })
    
    arr.forEach((i) => {
        answer += i;
    })
    
    return answer;

}