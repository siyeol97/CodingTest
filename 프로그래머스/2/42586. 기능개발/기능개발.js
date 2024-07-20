function solution(progresses, speeds) {
    const day = [];
    for(let i = 0; i < progresses.length; i++){
        day.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    
    const answer = [];
    let stack = [];
    
    for(let i = 0; i < day.length; i++){
        if(stack.length === 0 || stack[0] >= day[i]){
            stack.push(day[i]);
        } else {
            answer.push(stack.length);
            stack = [];
            stack.push(day[i])
        }
        
        if(i === day.length - 1){
            answer.push(stack.length);
        }
    }
    
    return answer;
}