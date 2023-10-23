function solution(n, words) {
    let person = 0;
    let used = new Set();
    
    used.add(words[0]);

    for(let i = 1; i < words.length; i++){
        let word = words[i];
        let prevWord = words[i - 1];
        
        if(used.has(word) || word[0] !== prevWord[prevWord.length - 1]){
            person = (i % n) + 1; 
            let count = Math.floor(i / n) + 1; 
            return [person, count];
        }
        
        used.add(word);
    }
        
    return [0, 0];
}
