import re

def solution(dartResult):
    answer = 0
    pattern = re.compile(r'(\d+[SDT][*#]?)')
    match = re.findall(pattern, dartResult)

    score = []
    for i in match :
        
        if (i[0] == "1") and (i[1] == "0"):
            y = int(i[0]+i[1])
            if i[2] == 'S':
                num = pow(y, 1)
            elif i[2] == 'D':
                num = pow(y, 2)
            elif i[2] == 'T':
                num = pow(y, 3)
            score.append(num)
            
        else :
            if i[1] == 'S':
                num = pow((int(i[0])), 1)
            elif i[1] == 'D':
                num = pow((int(i[0])), 2)
            elif i[1] == 'T' :
                num = pow((int(i[0])), 3)
            score.append(num)
            
            
    for i in range(0, 3) :
        if (match[i][0] == "1") and (match[i][1] == "0"):
            if len(match[i]) == 3 :
                pass
            
            elif match[i][3] == "*" :
                if i == 0 :
                    score[i] = score[i]*2
                else :
                    score[i-1] = score [i-1]*2
                    score[i] = score[i]*2
                
            elif match[i][3] == '#':
                score[i] = score[i] * (-1)
        
        else :
            if len(match[i]) == 2 :
                pass
            
            elif match[i][2] == '*' :
                if i == 0 :
                    score[i] = score[i]*2
                else :
                    score[i-1] = score [i-1]*2
                    score[i] = score[i]*2
                
            elif match[i][2] == '#':
                score[i] = score[i] * (-1)
                
    return sum(score)