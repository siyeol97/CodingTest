function solution(s) {
    const wordObj = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }
    
    const arr = [...s]
    const answer = [];
    for(let i = 0; i < arr.length; i++){
        if(!Number.isNaN(Number(arr[i]))){
                answer.push(arr[i]);
        } else {
            let temp = '';
            for(let j = i; j < arr.length; j++){
                temp += arr[j];
                if(wordObj.hasOwnProperty(temp)){
                    answer.push(wordObj[temp]);
                    i += temp.length - 1;
                    break;
                }
            }
        }
    }
    
    return Number(answer.join(''));
}