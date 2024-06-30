function solution(arr) {
    let total = 0;
    
    arr.forEach((i) => {
        total += i;
    })
    
    return total / arr.length;
}