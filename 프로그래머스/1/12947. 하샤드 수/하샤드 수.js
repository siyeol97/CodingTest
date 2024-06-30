function solution(x) {
    let sum = 0;
    
    [...(x + '')].forEach((i) => {
        sum += Number(i);
    })
    
    if(x % sum === 0) {
        return true;
    }
    
    return false;
}