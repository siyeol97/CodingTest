function solution(n) {
    const x = Math.sqrt(n);
    
    if(x % 1 === 0) {
        return (x + 1) ** 2;
    }

    return -1;
}