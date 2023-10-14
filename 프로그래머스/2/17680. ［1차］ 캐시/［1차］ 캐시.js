function solution(cacheSize, cities) {
    var answer = 0;
    const CACHE_HIT = 1;
    const CACHE_MISS = 5;
    
    let cache = [];
    
    const arrayRemove = (arr, value) => {
        return arr.filter((val) => {
            return val != value;
        });
    };

    
    cities.map((city, i)=>{
        city = city.toLowerCase();

            
        if(cache.includes(city)){ // 중복된 값이 있으면(cache hit)
            cache = arrayRemove(cache, city); // 중복제거
            answer+= CACHE_HIT;
            cache.push(city); // city를 cache 배열에 넣기
        } else { // 중복된 값이 없으면(cache miss)
            answer+= CACHE_MISS;
            cache.push(city); // city를 cache 배열에 넣기
        }

        // cacheSize를 초과했을 때
        if(cache.length > cacheSize){ 
            cache.shift(); // 0번째값 제거
        }
    })
    
    return answer;
}