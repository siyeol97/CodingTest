function solution(want, number, discount) {
    let answer = 0;
    for(let i = 0; i < discount.length - 9; i++){
        let flag = true;
        const temp = discount.slice(i, i+10);
        for(let j = 0; j < want.length; j++){
            const counts = temp.filter((fruit) => fruit === want[j]).length;
            if(counts < number[j]) {
                flag = false;
                break;
            }
        }
        if(flag){
            answer++;
        }
    }
    return answer;
}