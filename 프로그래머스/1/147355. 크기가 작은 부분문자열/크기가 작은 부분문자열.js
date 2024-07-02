function solution(t, p) {
    let arr = [];
    const compare = Number(p);
    let count = 0;
    
    for(let i = 0; i < t.length - p.length + 1; i++){
        if(Number([...t].splice(i, p.length).join('')) <= compare){
            count++;
        }
    }
    
    return count;
}