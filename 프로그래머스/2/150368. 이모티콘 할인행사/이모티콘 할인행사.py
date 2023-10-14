from itertools import product
import math

def dynamic_product(*args, users, repeat=1):
        
        final_signcount = 0
        final_price = 0
        
        for c in product(*args, repeat=repeat):
            t = [] # 사용자별 총 구매비용
            
            for i in range(0, len((list(c))[0])): # 각 사용자의 할인율별 총 구매비용
                tot = 0
                for j in range(0, len(list(c))):
                    tot += list(c)[j][i]
                    
                t.append(tot) 
                
            signcount = 0 # 서비스 가입자 수 
            totalprice = 0 # 매출액
            for x in range(0, len(t)):
                if(users[x][1] <= t[x]): # 사용자의 구매비용 기준 이상이라면
                    t[x] = 0 # 모든 구매를 취소하고 
                    signcount += 1 # 이모티콘 플러스 서비스 가입
                    
            totalprice  = sum(t)
            
            if(final_signcount < signcount):
                final_signcount = signcount
                final_price = totalprice
            elif((final_signcount == signcount) & (final_price < totalprice)):
                final_price = totalprice
                
        return [final_signcount, final_price]
    
def solution(users, emoticons):
        answer = []
        arr = []
        discount = [10, 20, 30, 40]
        
        for emo in emoticons:
            dis_arr = []
            for dis in discount:
                price_arr = []
                for user in users:
                    price = 0
                    if(user[0] <= dis):
                        price = math.ceil(emo * ((100-dis) / 100))
                        price_arr.append(price)
                    else:
                        price_arr.append(price)
                dis_arr.append(price_arr)
            arr.append(dis_arr)
        
        answer = dynamic_product(*arr, users=users)

        return answer