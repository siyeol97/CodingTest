function solution(num) {
    let i = 0;
    let running = true;
    
    if(num === 1){
        return 0;
    }
    
    while(running){
        if(num % 2 === 0){
            num = num / 2;
        } else {
            num = num * 3 + 1
        }
        i++;
        
        if(num === 1){
            return i;
        }
        
        if(i >= 500 ){
            return -1;
        }
    }
}