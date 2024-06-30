function solution(a, b) {
    const x = (a - b > 0) ? a : b;
    const y = (a - b > 0) ? b : a;
    let answer = 0;
    
    if(a === b){
        return a;
    }
    
    for(let i = y; i <= x; i++){
        answer += i;
    }
    
    return answer;
}