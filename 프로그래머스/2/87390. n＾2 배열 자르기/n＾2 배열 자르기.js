function solution(n, left, right) {
    const answer = [];
    for(let i = left; i <= right; i++){
        const x = Math.floor(i / n) + 1;
        const y = i % n + 1;
        const e = Math.max(x, y);
        answer.push(e);
    }
    
    return answer;
}