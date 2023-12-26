def solution(wallpaper):
    answer = []
    
    left = []
    
    for i in range(0, len(wallpaper)):
        for j in range(0, len(wallpaper[i])):
            if(wallpaper[i][j] == "#"):
                left.append([i, j])
    
    temp_min1 = []
    temp_min2 = []
    
    for i in range(0, len(left)): 
        temp_min1.append(left[i][0])
        temp_min2.append(left[i][1])
    
    answer = [min(temp_min1), min(temp_min2), max(temp_min1)+1, max(temp_min2)+1]
    print(answer)
    
    
    return answer