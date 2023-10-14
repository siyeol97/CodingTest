function solution(s) {
    
    let nums = s.split(' ')
    let new_nums = [];
    
    nums.forEach((n) => {
        let a = parseInt(n);
        new_nums.push(a);
    });
    
    const max = Math.max(...new_nums);
    const min = Math.min(...new_nums);
    
    let ans = [String(min), String(max)];
    
    const answer = ans.join(' ')
    
    return answer
}