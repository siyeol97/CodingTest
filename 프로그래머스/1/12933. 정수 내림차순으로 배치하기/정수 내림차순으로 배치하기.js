function solution(n) {
    const temp = [...(''+n)];
    const arr = [];
    let answer = '';
    
    temp.forEach((i) => {
        arr.push(Number(i));
    })
    
    arr.sort((a, b) => b - a);
    
    arr.forEach((i) => {
        answer += String(i)
    })
    
    return Number(answer);
}