function solution(s) {
    const test = [...s].some((t) => {
        if(Number.isNaN(Number(t))){
            return true;
        }
    }) 
    console.log(test)
    if((s.length === 4 || s.length === 6) && !test){
        return true;
    } else {
        return false;
    }
}