function solution(seoul) {
    let answer = 0;
    seoul.forEach((name, index) => {
        if(name === 'Kim'){
            answer = index;
        }
    })
    
    return `김서방은 ${answer}에 있다`
    
}