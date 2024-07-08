function solution(n,a,b){
    let answer = 1;
    let x = Math.ceil(a / 2);
    let y = Math.ceil(b / 2);
    
    while(x != y){
        x = Math.ceil(x / 2);
        y = Math.ceil(y / 2);
        answer++;
    }
    
    return answer;
}