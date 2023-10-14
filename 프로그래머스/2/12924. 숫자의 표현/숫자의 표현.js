function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= n; i++){
        let temp = 0;
        for(let j = i; j <= n; j++){
            temp += j
            if(temp === n) answer++;
            else if(temp > n) break;
        }
    }
    return answer;
}