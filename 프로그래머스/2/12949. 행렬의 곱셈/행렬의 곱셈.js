function solution(arr1, arr2) {
    const answer = [];
    for(let i = 0; i < arr1.length; i++){
        const temp = [];
        for(let j = 0; j < arr2[0].length; j++){
            let e = 0;
            for(let k = 0; k < arr1[0].length; k++){
                e += arr1[i][k] * arr2[k][j];
            }
            temp.push(e)
        }
        answer.push(temp);
    }
    
    return answer;
}