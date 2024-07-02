function solution(s) {
    const arr = s.split(' ')
    let answer = [];
    arr.forEach((text, index) => {
        let newText = '';
        for(let i = 0; i < text.length; i++){
            if(i % 2 === 0){
                newText += text[i].toUpperCase();
            } else {
                newText += text[i].toLowerCase();
            }
        }
        answer.push(newText);
    })
    
    
    return answer.join(' ');
}