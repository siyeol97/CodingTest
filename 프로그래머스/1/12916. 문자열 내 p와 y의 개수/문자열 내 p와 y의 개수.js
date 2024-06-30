function solution(s){
    let p_count = 0;
    let y_count = 0;

    [...(s.toLowerCase())].forEach((word) => {
        if(word === 'p'){
            p_count++;
        }
        if(word === 'y'){
            y_count++;
        } 
    });
    
    if(p_count === y_count){
        return true;
    } else {
        return false;
    };
}