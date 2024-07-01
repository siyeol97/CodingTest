function solution(arr, divisor) {
    const answer = [];
    arr.forEach((num) => {
        if(num % divisor === 0){
            answer.push(num);
        }
    })
    
    if(answer.length === 0){
        return [-1];
    }
    
    return answer.sort((a, b) => a - b);
}