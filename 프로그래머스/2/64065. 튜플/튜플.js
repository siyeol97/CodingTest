function solution(s) {
    const temp = s.slice(1, s.length - 1).split('},{').map((t) => {
        return t.replace('{', '').replace('}', '').split(',').map((s) => Number(s))
    }).flat()
    
    const count = {};
    
    temp.forEach((num) => {
        if(!count[num]){
            count[num] = 1;
        } else {
            count[num]++
        }
    })
    
    const answer = Object.entries(count).sort((a, b) => b[1] - a[1]).map((c) => Number(c[0]))
    
    return answer;
}