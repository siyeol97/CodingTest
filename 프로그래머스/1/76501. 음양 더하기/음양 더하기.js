function solution(absolutes, signs) {
    let i = 0;
    let answer = 0;
    
    absolutes.forEach((num, index) => {
        if(!signs[index]){
            answer += (num * (-1));
        } else {
            answer += num;
        }
    })
    
    return answer;
}