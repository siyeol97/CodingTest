function solution(citations) {
    let h = 0;
    while(true){
        let x = 0;
        for(let i = 0; i < citations.length; i++){
            if(citations[i] >= h){
                x++;
            }
        }
        
        if(x < h){
            break;
        }
        
        h++;
    }

    return h-1;
}