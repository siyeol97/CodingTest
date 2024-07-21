function solution(number, limit, power) {
    let answer = 0;

    let arr = new Array(number + 1).fill(0)
    for(let i = 1; i <= number; i++){
        for(let j = i; j <= number; j += i){
            arr[j]++;
        }
    }
    
    for(let count of arr){
        if(count > limit){
            answer += power;
        } else {
            answer += count;
        }
    }
    
    return answer;
    
}