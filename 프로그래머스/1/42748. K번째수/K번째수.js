function solution(array, commands) {
    const answer = [];
    commands.forEach((condition) => {
        const result = array.slice(condition[0] - 1, condition[1]).sort((a, b) => a - b)[condition[2] - 1];
        answer.push(result);
    })
    
    return answer;
}