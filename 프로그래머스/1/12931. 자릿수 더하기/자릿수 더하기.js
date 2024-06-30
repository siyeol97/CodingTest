function solution(n){
    let answer = 0;
    [...(''+n)].forEach((x) => {
        answer += Number(x)
    })
    
    return answer;
}