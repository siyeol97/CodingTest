function solution(s) {
    let count = 0;
    for(let x = 0; x < s.length; x++){
        let flag = true;
        const temp = [...s];
        const stack = [];
        const pair = {
            '}': '{',
            ')': '(',
            ']': '['
        };
        
        for(let i = 0; i < x; i++){
            const t = temp.shift();
            temp.push(t);
        }
        
        for(let j = 0; j < temp.length; j++){
            if(temp[j] === '{' || temp[j] === '(' || temp[j] === '['){
                stack.push(temp[j]);
            } else {
                if(stack.length === 0 || stack.pop() !== pair[temp[j]]){
                    flag = false;
                    break;
                }
            }
        }
        if(flag && stack.length === 0){
            count++;
        }
    }
    
    return count;
}