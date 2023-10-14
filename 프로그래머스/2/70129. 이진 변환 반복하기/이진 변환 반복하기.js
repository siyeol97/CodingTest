function solution(s) {
    let countzero = 0;
    let temp, res;
    let new_arr = [];
    let running = true;
    let countloop = 0;
    
    let arr = [...s];
    
    while(running){
        for(let n of arr){
            if(n === '0'){
                countzero++; //제거할 0 갯수 세기
            }
        }
        new_arr = arr.filter(n => n === '1'); // 0 제거
        temp = new_arr.length;
        res = temp.toString(2);
        arr = [...res];
        countloop++;
        
        if(res === "1") running = false;
    }
    return [countloop, countzero]
}