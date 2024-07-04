function solution(s) {
    const arr = [...s]
    const answer = arr.map((t, index) => {
        let location = 0;
        for(let i = 0; i < index; i++){
            if(arr[i] === t){
                location = index - i;
            }
        }
        
        if(location === 0) {
            location = -1;
        }
        
        return location;
    })
    
    return answer;
}