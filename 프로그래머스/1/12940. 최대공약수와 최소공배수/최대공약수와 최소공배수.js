function solution(n, m) {
    let l;
    let s;
    let x;
    let y;
    
    if(n < m){
        l = m;
        s = n;
    } else {
        l = n;
        s = m;
    }
    
    while(s !== 0){
        let temp = s;
        s = l % s;
        l = temp;
    }
    
    x = l;
    y = (n * m) / x;
    
    return [x, y];
}
