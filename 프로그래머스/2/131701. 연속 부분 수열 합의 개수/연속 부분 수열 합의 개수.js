function solution(elements) {
    const arr = elements.concat(elements);
    const answer = new Set();
    
    for(let i = 1; i <= elements.length; i++){
        for(let j = 0; j < elements.length; j++){
            let temp = 0;
            for(let k = j; k < j + i; k++){
                temp += arr[k];
            }
            answer.add(temp);
        }
    }
    
    return answer.size
}