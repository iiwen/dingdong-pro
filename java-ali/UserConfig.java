import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * 用户信息
 * 通过小程序抓包购物车接口获取headers和body中的数据填入
 */
public class UserConfig {

    //城市
    public static final String cityId = "0101";//默认上海

    //站点id
    public static final String stationId = "";

    //收货地址id
    public static final String addressId = "";

    //生成随机mark，此处填写抓包中任意的一个alipayminimark
    public static final String alipaymarkdemo = "抓包随机填写一个";
    /**
     * 确认收货地址id和站点id
     * 每天抢之前先允许一下此接口 确认登录信息是否有效 如果失效了重新抓一次包
     */
    public static void main(String[] args) {
        Api.checkUserConfig();
		System.out.println("【获取Alipaymark测试】"+Api.getMark(alipaymarkdemo));
    }

    /**
     * 抓包后参考项目中的image/headers.jpeg 把信息一行一行copy到下面 没有的key不需要复制
     */
    public static Map<String, String> getHeaders() {
        Map<String, String> headers = new HashMap<>();
        headers.put("ddmc-city-number", cityId);
        headers.put("ddmc-time", String.valueOf(new Date().getTime() / 1000));
        headers.put("ddmc-build-version", "2.86.2");
        headers.put("ddmc-station-id", stationId);
        headers.put("ddmc-channel", "applet");
        headers.put("ddmc-os-version", "[object Undefined]");
        headers.put("ddmc-app-client-id", "10");
        headers.put("ddmc-ip", "");
        headers.put("ddmc-api-version", "9.51.0");
        headers.put("ddmc-sdkversion", "0");
        headers.put("accept-encoding", "gzip, deflate, br");
        headers.put("tinyapp-intercept", "tiny");
        headers.put("accept-language", "zh-CN,en-US;q=0.8");
        headers.put("content-type", "application/x-www-form-urlencoded");
        headers.put("accept-charset", "utf-8");
        headers.put("accept", "*/*");
        headers.put("alipayminimark",Api.getMark(alipaymarkdemo));
        // ------------  填入以下6项 上面不要动 ------------
        headers.put("ddmc-device-id", "抓包");
        headers.put("cookie", "抓包");
        headers.put("ddmc-longitude", "抓包");
        headers.put("ddmc-latitude", "抓包");
        headers.put("ddmc-uid", "抓包");
        headers.put("user-agent", "抓包");
        headers.put("alipayminimark","抓包中随意填一个");
        return headers;
    }

    /**
     * 抓包后参考项目中的image/body.jpeg 把信息一行一行copy到下面 没有的key不需要复制
     * <p>
     * 这里不能加泛型 有些接口是params  泛型必须要求<String,String> 有些是form表单 泛型要求<String,Object> 无法统一
     */
    public static Map getBody(Map<String, String> headers) {
        Map body = new HashMap<>();
        body.put("uid", headers.get("ddmc-uid"));
        body.put("longitude", headers.get("ddmc-longitude"));
        body.put("latitude ", headers.get("ddmc-latitude"));
        body.put("station_id", headers.get("ddmc-station-id"));
        body.put("city_number", headers.get("ddmc-city-number"));
        body.put("api_version", headers.get("ddmc-api-version"));
        body.put("app_version ", headers.get("ddmc-build-version"));
        body.put("applet_source", "");
        body.put("channel", "applet");
        body.put("app_client_id", "10");
        body.put("sharer_uid", "");
        body.put("h5_source", "");
        body.put("time", headers.get("ddmc-time"));
        body.put("openid", headers.get("ddmc-device-id"));
        // ------------  填入这2项上面不要动 ------------
        body.put("s_id", "抓包");
        return body;
    }
}
