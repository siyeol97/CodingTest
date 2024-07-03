function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach((x) => {
        x.sort((a, b) => a - b);
        w = x[0] > w ? x[0] : w;
        h = x[1] > h ? x[1] : h;
    })
    
    return w * h;
}