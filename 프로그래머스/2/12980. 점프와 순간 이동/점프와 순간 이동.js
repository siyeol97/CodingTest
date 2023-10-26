function solution(n){
    
    let temp = n;
    let count = 1;
    
    if(n === 1) return 1;
    
    while(1){
        if(temp % 2 === 1){ // 홀수
            temp -= 1;
            count++;
        } else temp = temp / 2; // 짝수
        
        if(temp === 1) break;
    }
    return count;
}