function solution(n) {
    let answer = 0;
    let numCount1 = 0;
    let np = 0;
    
    let num = n.toString(2);
    for(let i = 0; i<num.length; i++){
        if(num[i] === '1') numCount1++;
    };
    
    np = n + 1;
    while(1){
        let xCount1 = 0;
        let x = np.toString(2);
        
        for(let i = 0; i<x.length; i++){
            if(x[i] === '1') xCount1++;
        }
        
        if(xCount1 == numCount1){
            answer = np;
            break;
        } else {
            np++;
        }
    };
    
    return answer;
}