function solution(clothes) {
    const arr = {};
    
    clothes.forEach((x) => {
        const [cloth, type] = x;
        if(!arr[type]){
            arr[type] = 1;
        } else {
            arr[type]++;
        }
    })
    
    let count = 1;
    for(let type in arr){
        count *= (arr[type] + 1)
    }
    
    return count - 1;
}