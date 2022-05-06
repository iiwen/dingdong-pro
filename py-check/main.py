import sys
import urllib.request
from urllib import parse
import json
from playsound import playsound
import time
import random
import datetime
print('''【匿名模式】叮咚运力监控已启动
项目为监控首页提示，可能结果出现不准确''')
# ================读取配置-已弃用================
# import configparser
# cf = configparser.ConfigParser()
# cf.read("config.ini")
# waittime = cf.get("Dingdong-normal", "wait-time")
# staid = cf.get("Dingdong-normal", "stationid")
# searchkey = cf.get("Dingdong-normal", "searchkey")
# ================读取配置================
config = open('config.json', 'r', encoding='utf-8')
jconf = json.load(config)
staid = str(jconf['stationid'])
searchkey = str(jconf['search-key'])
waittime = str(jconf['wait-time'])
# ================读取配置================
if len(staid) < 1:
    if (len(searchkey)) < 1:
        print('【☆重要提示☆】stationid为空，请配置文件中填写searchkey字段以检索stationid')
        sys.exit(0)
    else:
        print('stationid为空，启动检索模式，检索关键词：', searchkey)
        searchurl = "https://sunquan.api.ddxq.mobi/api/v1/user/location/search/?city_number=0101&api_version=9.50.2&app_version=2.85.3&applet_source=&app_client_id=4&keyword=" + parse.quote(
            searchkey)
        # print(searchurl)
        searchres = urllib.request.urlopen(searchurl).read().decode('utf-8')
        searchjson = json.loads(searchres)
        if (searchjson['success'] == True):
            for sitem in searchjson['data']['keyword_addresses']:
                print("stationid：", str(sitem['station_id']), "；地址：", str(sitem['location']['address']), "；名字：",
                      str(sitem['location']['name']))
            # print(searchjson['data']['keyword_addresses'])
        print('【☆重要提示☆】请复制你需要的stationid到配置文件中后重启本程序')
        sys.exit(0)

if len(waittime) < 1:
    print('等待时间为空，设置默认值：25秒')
    waittime = 25
# ================简单的初始化【包含查询stationid】================

# ================程序运行================
def tourcheck(sta_id):
    indexurl = "https://maicai.api.ddxq.mobi/homeApi/newDetails?api_version=9.51.0&app_client_id=2&app_version=2.86.2&channel=applet&city_number=0101&station_id=" + sta_id
    indexres = json.loads(urllib.request.urlopen(indexurl).read().decode('utf-8'))
    if indexres['code'] == 0 and indexres['success'] == True:
        if len(indexres['data']['list']) > 3:
            indextips = indexres['data']['list'][3]['new_bill_board']['materials'][0]['content']
            print(datetime.datetime.now(),"【运力检测▶】：", indextips)
            if (indextips.find("约满")) == -1:
                ring(0)
            return True
        else:
            print("请检测配置中stationid是否填写正确")
            return False


def ring(type):
    print("【☆重要提示☆】:👆疑似检测到运力，响铃启动！")
    playsound('alarm.wav')

print('配置文件读取成功，等待时间：' + waittime, '；stationid：' + staid, "测试运行，请关注输出信息")

if not tourcheck(staid):
    sys.exit(0)
else:
    print("【测试】👆请查看输出内容是否正常")
    while True:
        tourcheck(staid)
        time.sleep(int(waittime)+random.randint(-8, 8))
