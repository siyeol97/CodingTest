function solution(s, n) {
    let answer = '';
    
    [...s].forEach((t) => {
        const newText = t.charCodeAt() + n;
        if(t === ' '){
            answer += ' ';
            return;
        }
        if(t === t.toLowerCase()){
            if( newText > 122){
                answer += String.fromCharCode(96 + (newText % 122))
            } else {
                answer += String.fromCharCode(newText)
            }
        } else {
            if( newText > 90){
                answer += String.fromCharCode(64 + (newText % 90))
            } else {
                answer += String.fromCharCode(newText)
            }
        }
    })
    
    return answer;
}