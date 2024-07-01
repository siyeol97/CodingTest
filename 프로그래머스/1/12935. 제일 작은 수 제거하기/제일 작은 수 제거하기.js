function solution(arr) {
    if(arr.length === 1){
        return [-1];
    }
    
    const answer = arr.filter((num) => {
        return num !== Math.min(...arr);
    })
    
    return answer;
}