function solution(a, b, n) {
    let answer = 0;
    
    while(n >= a){
        let x = Math.floor(n / a) * b;
        let remain = n % a;
        answer += x;
        n = x + remain;
    }
    
    return answer;
}