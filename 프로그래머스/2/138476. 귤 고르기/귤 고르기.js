function solution(k, tangerine) {
    let map = new Map();
    tangerine.forEach((t) => {
        map.set(t, (map.get(t) || 0) + 1)
    })
    
    let temp = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    let count = 0;
    let type = 0;
    temp.forEach((x) => {
        if(count >= k){
            return;
        }
        count+= x[1];
        type++;
    })
    
    return type;
}