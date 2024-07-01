function solution(phone_number) {
    let j = 0;
    let arr = [...phone_number];
    
    for(let i = arr.length - 1; i >= 0; i--){
        if(j < 4){
            j++;
            continue;
        }
        
        arr.splice(i, 1, '*');
    }
    
    return arr.join('');
}