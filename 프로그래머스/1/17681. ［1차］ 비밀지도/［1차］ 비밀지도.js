function solution(n, arr1, arr2) {
    const answer = [];
    const x = arr1.map((row) => {
        return row.toString(2).padStart(n, '0')
    })
    
    const y = arr2.map((row) => {
        return row.toString(2).padStart(n, '0')
    })
    
    for(let i = 0; i < x.length; i++){
        let temp = '';
        for(let j = 0; j < x[0].length; j++){
            if(x[i][j] + y[i][j] > 0){
                temp += '#';
            } else {
                temp += ' ';
            }
        }
        answer.push(temp);
    }
    
    return answer;
}