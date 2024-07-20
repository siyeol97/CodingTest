function solution(answers) {
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const length = 10000;
    
    const arr1 = Array.from({length}, (_, i) => p1[i%p1.length]);
    const arr2 = Array.from({length}, (_, i) => p2[i%p2.length]);
    const arr3 = Array.from({length}, (_, i) => p3[i%p3.length]);
    
    const count = [0, 0, 0];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === arr1[i]){
            count[0]++;
        }
        if(answers[i] === arr2[i]){
            count[1]++;
        }
        if(answers[i] === arr3[i]){
            count[2]++;
        }
    }
    const answer = [];
    const max = Math.max(...count);
    for(let i = 0; i < 3; i++){
        if(count[i] === max){
            answer.push(i + 1)
        }
    }
    
    return answer;
}