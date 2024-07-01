function solution(left, right) {
    let answer = 0;
    
    for(let i = left; i <= right; i++){
        const count = [];
        
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                count.push(j);
            }
        }
        
        if(count.length % 2 === 0){
            answer += i;
        } else {
            answer -= i;
        }
    
    }
    
    return answer;
}