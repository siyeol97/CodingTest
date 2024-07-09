function solution(name, yearning, photo) {
    const answer = [];
    photo.forEach((arr) => {
        let temp = 0;
        arr.forEach((people) => {
           if(name.includes(people)){
               temp += yearning[name.indexOf(people)]
           }
        })
        answer.push(temp);
    }) 
    
    return answer;
}