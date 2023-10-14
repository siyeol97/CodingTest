import math

def solution(fees, records):
    rec_obj = {}
    car_num = []
    result = []

    for r in records:
        car_num.append(r[6:10])
    car_num = list(set(car_num))
    car_num.sort()

    for c in car_num:
        time = []
        for r in records:
            h = int(r[:2])*60
            m = int(r[3:5])
            t = h + m
            
            if(c == r[6:10]):
                time.append(t)
                
        if(len(time) % 2):
            time.append(1439)
            
        rec_obj[c] = time
    
    for car in rec_obj:
        total = 0
        price = 0
        for i in range(0, len(rec_obj[car])):
            total += pow(-1, i+1) * rec_obj[car][i]
            if( total <= fees[0] ):
                price = fees[1]
            else:
                price = fees[1] + math.ceil(((total - fees[0]) / fees[2])) * fees[3]
        result.append(price)
        rec_obj[car] = price
    
    return result