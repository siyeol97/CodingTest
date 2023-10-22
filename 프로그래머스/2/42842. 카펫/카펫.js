function solution(brown, yellow) {
    for(let i=yellow; i>=1; i--){
        if(yellow % i === 0){
            let height = yellow / i; // 세로
            let width = i; // 가로
            if((width+2) * (height+2) - yellow === brown) return [width+2, height+2]
        }
    }
}