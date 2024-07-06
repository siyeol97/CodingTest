function solution(k, score) {
    const fame = [];
    const answer = [];
    
    score.forEach((s) => {
        fame.push(s);
        fame.sort((a, b) => b - a);
        if(fame.length > k){
            fame.pop();
        }
        answer.push(Math.min(...fame));
    })
    return answer;
}