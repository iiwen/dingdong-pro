var _slicedToArray = function() {
    function e(e, t) {
        var n = [], r = !0, o = !1, i = void 0;
        try {
            for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
            !t || n.length !== t); r = !0) ;
        } catch (e) {
            o = !0, i = e;
        } finally {
            try {
                !r && c.return && c.return();
            } finally {
                if (o) throw i;
            }
        }
        return n;
    }
    return function(t, n) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/vendor" ], {
    "0031": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : _typeof(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
            })(e);
        }
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function l(e, t, n) {
            return t && u(e.prototype, t), n && u(e, n), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var f = r(n("66fd")), p = r(n("054d")), d = n("1cf5"), h = n("d505"), v = function(e) {
            return e.msg || e.message || "";
        }, _ = function() {
            function e() {
                var t;
                s(this, e), this.codeMap = (t = {
                    500: this.backendError,
                    504: this.timeoutError,
                    noNetwork: this.networkNone
                }, c(t, p.default.NEED_LOGIN, this.needLogin), c(t, p.default.LOGIN_OUT_TIME, this.needLogin), 
                c(t, p.default.MAKEORDER_STOCKOUT, this.makeOrderStockOut), c(t, p.default.MAKEORDER_ERROR, this.makeOrderError), 
                c(t, p.default.MAKEORDER_BACKCART, this.makeOrderBackCart), c(t, p.default.MAKEORDER_INVALID_TIME, this.makeOrderInvalidTime), 
                c(t, p.default.MESSAGE_ALERT, this.messageAlert), c(t, p.default.ACK_REGISTER, this.ackRegister), 
                c(t, p.default.RISK_CONTROL, this.riskControl), c(t, p.default.TOAST_ALERT, this.toastAlert), 
                t);
            }
            return l(e, [ {
                key: "done",
                value: function(e, t, n) {
                    var r = this.codeMap[e];
                    return r ? (f.default.prototype.$loading(-1), n && (t.url = n), r(t)) : {
                        code: e,
                        msg: v(t),
                        success: t.success || !1
                    };
                }
            }, {
                key: "backendError",
                value: function(e) {
                    return f.default.prototype.$toast("请求出错，请重新尝试请求"), {
                        code: e.code,
                        msg: v(e),
                        success: !1
                    };
                }
            }, {
                key: "timeoutError",
                value: function(e) {
                    return new Promise(function(e) {
                        (0, d.getNetworkStatus)().then(function(t) {
                            var n = t && t.networkType || "none";
                            if ("none" === n || "3g" === n) {
                                var r = "请求超时，当前网络为弱网情况，可连上wifi或使用4G网络重新进入";
                                f.default.prototype.$toast(r), e({
                                    code: 504,
                                    msg: r,
                                    success: !1
                                });
                            } else e();
                        });
                    });
                }
            }, {
                key: "needLogin",
                value: function(e) {
                    return f.default.prototype.$gotoLogin(!0), f.default.prototype.$store.commit("user/clearUser"), 
                    {
                        code: e.code,
                        success: !1
                    };
                }
            }, {
                key: "makeOrderStockOut",
                value: function(e) {
                    return {
                        data: e.data,
                        code: e.code,
                        msg: v(e),
                        success: !1
                    };
                }
            }, {
                key: "makeOrderError",
                value: function(e) {
                    return f.default.prototype.$toast(v(e) || "优惠券已过期"), {
                        code: e.code,
                        msg: v(e),
                        success: !1
                    };
                }
            }, {
                key: "makeOrderBackCart",
                value: function(e) {
                    return (0, h.showBackCartAlert)(v(e), e.data, e.code), {
                        code: e.code,
                        success: !1
                    };
                }
            }, {
                key: "makeOrderInvalidTime",
                value: function(e) {
                    return {
                        code: e.code,
                        msg: v(e),
                        success: !1
                    };
                }
            }, {
                key: "messageAlert",
                value: function(e) {
                    return {
                        code: e.code,
                        msg: v(e),
                        success: !1
                    };
                }
            }, {
                key: "ackRegister",
                value: function(e) {
                    return {
                        code: e.code,
                        msg: v(e),
                        success: !1
                    };
                }
            }, {
                key: "riskControl",
                value: function(e) {
                    return {
                        data: e.data,
                        code: e.code,
                        msg: v(e),
                        success: !1
                    };
                }
            }, {
                key: "networkNone",
                value: function(e) {
                    return {
                        code: e.code,
                        msg: v(e),
                        success: !1
                    };
                }
            }, {
                key: "toastAlert",
                value: function(e) {
                    var t = null, n = e.toast, r = void 0 === n ? "" : n, o = e.alert, c = void 0 === o ? {} : o, s = e.url, u = void 0 === s ? "" : s;
                    if (r) f.default.prototype.$toast(r); else if ("object" === a(c) && (null === c || void 0 === c ? void 0 : c.button)) {
                        var l, p, d = c.title, h = void 0 === d ? "" : d, v = c.desc, _ = void 0 === v ? "" : v, g = c.button, m = void 0 === g ? [] : g, y = function(e, t, n) {
                            var r, o;
                            f.default.prototype.$track({
                                pageid: "toastAlertPage",
                                key: "isGlobal/confirm/toastAlert",
                                eventType: "click",
                                other: {
                                    request_url: t,
                                    link_url: null === e || void 0 === e || null === (r = e.button[n]) || void 0 === r ? void 0 : r.wechat_link,
                                    alert_title: null === e || void 0 === e ? void 0 : e.title,
                                    alert_content: null === e || void 0 === e ? void 0 : e.desc,
                                    btn_copywriting: null === e || void 0 === e || null === (o = e.button[n]) || void 0 === o ? void 0 : o.title,
                                    index: n
                                }
                            });
                        }, E = {
                            title: h,
                            content: _,
                            cancelText: (null === (l = m[0]) || void 0 === l ? void 0 : l.title) || "",
                            submitText: (null === (p = m[1]) || void 0 === p ? void 0 : p.title) || "确定",
                            success: function() {
                                var e;
                                y(c, u, 1);
                                var t = null === (e = m[1]) || void 0 === e ? void 0 : e.wechat_link;
                                t && f.default.prototype.$open({
                                    url: t
                                });
                            },
                            cancel: function() {
                                var e;
                                y(c, u, 0);
                                var t = null === (e = m[0]) || void 0 === e ? void 0 : e.wechat_link;
                                t && f.default.prototype.$open({
                                    url: t
                                });
                            }
                        };
                        f.default.prototype.$confirm(E);
                    }
                    return e.data && (t = e.data.alert || e.data.toast ? i(i({}, e.data), {}, {
                        alert: null,
                        toast: ""
                    }) : e.data), {
                        data: t,
                        code: e.code,
                        msg: "",
                        success: e.success
                    };
                }
            } ]), e;
        }(), g = _;
        t.default = g;
    },
    "01de": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SHOULD_MONITOR_KEYS = void 0;
        var r = [ "product_mongo_id", "index", "price", "keyword", "cookbook_id", "cookbook_name", "index", "ad_space_id", "material_id", "material_name", "ad_id", "ad_name", "page_name", "pd_product_mongo_id", "coupon_id", "tab_name", "algo_id" ];
        t.SHOULD_MONITOR_KEYS = r;
    },
    "03ed": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.event = void 0;
        var r = [], o = 1, i = {
            subscribe: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return r.push({
                    id: o,
                    type: e,
                    callback: t,
                    appNo: n
                }), o++;
            },
            unsubscribe: function(e) {
                r = "function" == typeof e ? r.filter(function(t) {
                    return t.callback !== e;
                }) : r.filter(function(t) {
                    return t.type !== e;
                });
            },
            publish: function(e, t) {
                var n = null;
                return r.filter(function(t) {
                    return t.type === e;
                }).forEach(function(e) {
                    return n = e.appNo, e.callback && e.callback(t);
                }), n;
            }
        };
        t.event = i;
    },
    "054d": function(e, t, n) {
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0, function(e) {
            e[e.NEED_LOGIN = 1111] = "NEED_LOGIN", e[e.LOGIN_OUT_TIME = 9007] = "LOGIN_OUT_TIME", 
            e[e.MAKEORDER_STOCKOUT = 5001] = "MAKEORDER_STOCKOUT", e[e.MAKEORDER_ERROR = 5002] = "MAKEORDER_ERROR", 
            e[e.MAKEORDER_BACKCART = 5003] = "MAKEORDER_BACKCART", e[e.MAKEORDER_SUPPLY = 5016] = "MAKEORDER_SUPPLY", 
            e[e.MAKEORDER_JAMLOADING = -3001] = "MAKEORDER_JAMLOADING", e[e.MAKEORDER_BACK_GROUP_LIST = 6003] = "MAKEORDER_BACK_GROUP_LIST", 
            e[e.MAKEORDER_INVALID_TIME = 5004] = "MAKEORDER_INVALID_TIME", e[e.CHECKORDER_JAMALERT = -3100] = "CHECKORDER_JAMALERT", 
            e[e.RISK_CONTROL = 5009] = "RISK_CONTROL", e[e.RISK_CHECK_ORDER_TICKET_ERROR = 5010] = "RISK_CHECK_ORDER_TICKET_ERROR", 
            e[e.RISK_ADD_NEW_ORDER_DELIVERY_ERROR = 5011] = "RISK_ADD_NEW_ORDER_DELIVERY_ERROR", 
            e[e.RISK_CHECK_ORDER_DELIVERY_ERROR = 5012] = "RISK_CHECK_ORDER_DELIVERY_ERROR", 
            e[e.MESSAGE_ALERT = 4006] = "MESSAGE_ALERT", e[e.ACK_REGISTER = 8210] = "ACK_REGISTER", 
            e[e.FREE_DISH_COUPON = 5111] = "FREE_DISH_COUPON", e[e.AUTH_FAIL_OPENID = 1008] = "AUTH_FAIL_OPENID", 
            e[e.HAD_VIP_O99_PRODUCT = 90201] = "HAD_VIP_O99_PRODUCT", e[e.NO_REDUCE = 5112] = "NO_REDUCE", 
            e[e.TOAST_ALERT = 599] = "TOAST_ALERT";
        }(r || (r = {}));
        var o = r;
        t.default = o;
    },
    "0613": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = r(n("66fd")), i = r(n("2f62")), a = r(n("444a")), c = r(n("b553")), s = r(n("78f2")), u = r(n("7031")), l = r(n("60b0")), f = r(n("2c7a")), p = r(n("ed04")), d = r(n("55ab")), h = r(n("9dba")), v = r(n("cf4e")), _ = r(n("8b8e")), g = r(n("30a3")), m = r(n("31ee")), y = r(n("8529")), E = r(n("c237")), A = r(n("88b6")), b = r(n("5509")), P = r(n("0ffd")), O = r(n("4ea8")), T = r(n("91be")), S = r(n("6e87")), R = r(n("6afe")), C = r(n("a206")), w = r(n("dc24")), k = r(n("5196"));
        o.default.use(i.default);
        var I = new i.default.Store({
            getters: a.default,
            modules: {
                toast: s.default,
                cate: c.default,
                loading: u.default,
                jamLoading: l.default,
                confirm: f.default,
                globalData: d.default,
                user: h.default,
                cart: v.default,
                sizeAlert: _.default,
                hotKeyData: g.default,
                form: m.default,
                makeOrder: y.default,
                point: E.default,
                vip: p.default,
                webview: A.default,
                spec: b.default,
                invoice: P.default,
                batchAlert: O.default,
                dimensionAlert: T.default,
                vip099pop: S.default,
                refundTurn: R.default,
                fuliao: C.default,
                flop: w.default,
                mission: k.default
            }
        });
        t.default = I;
    },
    "06ca": function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function s(e, t, n) {
            return t && c(e.prototype, t), n && c(e, n), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = function() {
            function e() {
                a(this, e), this.plugins = new Map();
            }
            return s(e, [ {
                key: "use",
                value: function(e, t) {
                    this.plugins.set(e, t);
                }
            }, {
                key: "useArr",
                value: function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        t.use(e.type, e.callback);
                    });
                }
            }, {
                key: "getPlugins",
                value: function(e) {
                    return this.plugins.get(e);
                }
            }, {
                key: "parse",
                value: function(e, t, n) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r], a = this.getPlugins(i.type);
                        if (!a) return !1;
                        var c = o({}, i), s = t;
                        if ("function" != typeof t && (c.data = t, s = n), !s(a(c), c)) return !1;
                    }
                    return !0;
                }
            } ]), e;
        }();
        t.default = u;
    },
    "0839": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.apiSuggestProducts = function(e) {
            return r.http.get("search/searchSuggest", e);
        }, t.apiGetSearchHotKeys = function() {
            return r.http.get("search/hotKeyword");
        }, t.apiSearchProducts = function(e, t) {
            return r.http.get("search/searchProduct", e, t);
        }, t.apiGetCartHeaderInfo = function() {
            return r.http.get("search/maxDiscountRate");
        }, t.apiSearchOftenBuy = function() {
            return r.http.get("search/oftenBuy");
        }, t.apiTicketSearchProducts = function(e) {
            return r.http.get("guide-service/search/ticket/products", e);
        }, t.apiRecipeGetResult = function(e) {
            return r.http.get("recipe/searchRecipe", e);
        }, t.addCard = t.NOrderSearchProducts = t.apiGetRankList = t.apiGetRankCategoryList = t.apiGetTopicList = t.apiGetRankProductList = t.apiRecipeGetSuggest = void 0;
        var r = n("5ee7");
        t.apiRecipeGetSuggest = function(e) {
            return r.http.get("recipe/searchSuggest", e);
        };
        t.apiGetRankProductList = function(e) {
            return r.http.get("search/rankProductList", e);
        };
        t.apiGetTopicList = function() {
            return r.http.get("search/topicList");
        };
        t.apiGetRankCategoryList = function(e) {
            return r.http.get("search/rankCategoryList", e);
        };
        t.apiGetRankList = function() {
            return r.http.get("search/rankingList");
        };
        t.NOrderSearchProducts = function(e) {
            return r.gateWayHttp.post("promocore-service/client/maicai/cumulativeReward/v1/searchProds", e);
        };
        t.addCard = function(e) {
            return r.http.post("search/addCard", e);
        };
    },
    "0a06": function(e, t, n) {
        function r(e) {
            this.defaults = e, this.interceptors = {
                request: new a(),
                response: new a()
            };
        }
        var o = n("c532"), i = n("30b5"), a = n("f6b4"), c = n("5270"), s = n("4a7b");
        r.prototype.request = function(e) {
            "string" == typeof e ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, 
            (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = [ c, void 0 ], n = Promise.resolve(e);
            for (this.interceptors.request.forEach(function(e) {
                t.unshift(e.fulfilled, e.rejected);
            }), this.interceptors.response.forEach(function(e) {
                t.push(e.fulfilled, e.rejected);
            }); t.length; ) n = n.then(t.shift(), t.shift());
            return n;
        }, r.prototype.getUri = function(e) {
            return e = s(this.defaults, e), i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
        }, o.forEach([ "delete", "get", "head", "options" ], function(e) {
            r.prototype[e] = function(t, n) {
                return this.request(s(n || {}, {
                    method: e,
                    url: t,
                    data: (n || {}).data
                }));
            };
        }), o.forEach([ "post", "put", "patch" ], function(e) {
            r.prototype[e] = function(t, n, r) {
                return this.request(s(r || {}, {
                    method: e,
                    url: t,
                    data: n
                }));
            };
        }), e.exports = r;
    },
    "0d42": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.STORAGE_TYPE = t.STORAGE_SIZE = t.STORAGE_HOT_HEIGHT = t.STORAGE_HEIGHT = t.STORAGE_WIDTH = t.STORAGE_COLOR = t.STORAGE_IMAGE = void 0;
        var r = {
            BINXIAN: "https://pub.ddimg.mobi/develop/16794f1a76c94703817f58ae0e87d125.png",
            LENDONG: "https://pub.ddimg.mobi/develop/3094d70df4d84102b1726b47517d5c39.png",
            LENGXIAN: "https://pub.ddimg.mobi/develop/bdb35a15bac24379b05a53c54f0dca9c.png",
            BINGZHEN: "https://pub.ddimg.mobi/develop/82b6f5fde2d3424996d038457c8bbc00.png",
            RESHI: "https://img.ddimg.mobi/535eed79414611614926553904.png",
            CHILI1: "https://img.ddimg.mobi/88ee8ba93efd81621578359454.png",
            CHILI2: "https://img.ddimg.mobi/376d39c4018cf1621578374867.png",
            CHILI3: "https://img.ddimg.mobi/7b56b0f10ca171621578242512.png",
            SWEET1: "https://img.ddimg.mobi/01f2c5c1388011621578319226.png",
            SWEET2: "https://img.ddimg.mobi/1cdc1334700d81621578284497.png",
            SWEET3: "https://img.ddimg.mobi/fdb2e64e8d6c11621578262956.png"
        };
        t.STORAGE_IMAGE = r;
        var o = {
            BINXIAN: "#146DE0",
            LENDONG: "#146DE0",
            LENGXIAN: "#3F9DF2"
        };
        t.STORAGE_COLOR = o;
        var i = {
            LARGE: 84,
            NORMAL: 46,
            SMALL: 42
        };
        t.STORAGE_WIDTH = i;
        var a = {
            LARGE: 54,
            NORMAL: 26,
            SMALL: 22
        };
        t.STORAGE_HEIGHT = a;
        var c = {
            LARGE: 40,
            NORMAL: 28,
            SMALL: 20
        };
        t.STORAGE_HOT_HEIGHT = c;
        var s = {
            LARGE: 14,
            NORMAL: 9,
            SMALL: 7
        };
        t.STORAGE_SIZE = s;
        var u = {
            3: "LENDONG",
            6: "BINXIAN",
            2: "LENGXIAN",
            7: "RESHI",
            8: "BINGZHEN",
            201: "SWEET1",
            202: "SWEET2",
            203: "SWEET3",
            301: "CHILI1",
            302: "CHILI2",
            303: "CHILI3"
        };
        t.STORAGE_TYPE = u;
    },
    "0d69": function(e, t, n) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : _typeof(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
            })(e);
        }
        function o() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return o = function() {
                return e;
            }, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {};
        t.default = void 0;
        var a = function(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== r(e) && "function" != typeof e) return {
                default: e
            };
            var t = o();
            if (t && t.has(e)) return t.get(e);
            var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                var c = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = e[a];
            }
            return n.default = e, t && t.set(e, n), n;
        }(n("0e36"));
        Object.keys(a).forEach(function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(i, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return a[e];
                }
            }));
        });
        var c = a.default;
        t.default = c;
    },
    "0d86": function(e, t, n) {
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function i(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = function() {
            function e() {
                r(this, e), this.pageStack = new Map(), this.page = [], this.refer = [], this.elapsePage = [], 
                this.isBack = !0, this.pageBack = !0;
            }
            return i(e, [ {
                key: "push",
                value: function(e) {
                    if (this.resetRefer(), this.page.unshift(e), this.pageStack.has(e)) {
                        var t = this.pageStack.get(e);
                        null === t || void 0 === t || t.set(t.size + 1, void 0);
                    } else this.pageStack.set(e, new Map());
                }
            }, {
                key: "pushElapse",
                value: function(e) {
                    this.elapsePage.push(e);
                }
            }, {
                key: "pushEvent",
                value: function(e) {
                    var t = this.page.length, n = e.page_id;
                    if (t) if (this.has(n)) {
                        var r = this.pageStack.get(n), o = r.get(r.size || 1);
                        o ? o.push(e) : r.set(r.size || 1, [ e ]);
                    } else console.error("当前页面栈为空，请先添加页面");
                }
            }, {
                key: "deleteEvent",
                value: function() {
                    if (this.page.length) {
                        var e = this.page[0], t = this.pageStack.get(e), n = null === t || void 0 === t ? void 0 : t.get(t.size || 1);
                        n && n.length && n.splice(0, n.length);
                    }
                }
            }, {
                key: "has",
                value: function(e) {
                    return this.pageStack.has(e);
                }
            }, {
                key: "get",
                value: function(e) {
                    return this.pageStack.get(e);
                }
            }, {
                key: "clear",
                value: function(e) {
                    this.page.length && e === this.page[this.page.length - 1] && (this.page = [], this.refer = [], 
                    this.elapsePage = [], this.pageStack.clear());
                }
            }, {
                key: "back",
                value: function() {
                    this.isBack && this.lastPage && (this.page.shift(), this.deleteEvent(), this.resetRefer(!0));
                }
            }, {
                key: "getLastTabPage",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    if (!e.length) return this.lastPage;
                    for (var t = 0; !e.includes(this.page[t]) && this.page[t]; ) t++;
                    return this.page[t] || "";
                }
            }, {
                key: "resetRefer",
                value: function(e) {
                    var t = this, n = this.page.length;
                    if (this.refer = [], n) {
                        var r = this.page.slice();
                        e && r.shift();
                        var o = {};
                        (n > 3 ? r.slice(0, 3) : r).forEach(function(e) {
                            void 0 !== o[e] ? o[e]++ : o[e] = 0;
                            var n = t.pageStack.get(e), r = null === n || void 0 === n ? void 0 : n.size;
                            if (r) {
                                for (var i, a = r; a; ) {
                                    var c = null === n || void 0 === n ? void 0 : n.get(a - o[e]);
                                    if (c && c.length) {
                                        i = c[c.length - 1];
                                        break;
                                    }
                                    a--;
                                }
                                i && t.refer.push(i);
                            }
                        });
                    }
                }
            }, {
                key: "lastElapseAction",
                get: function() {
                    if (this.elapsePage.length) return this.elapsePage[this.elapsePage.length - 1];
                }
            }, {
                key: "lastPage",
                get: function() {
                    return this.page.length ? this.page[0] : null;
                }
            } ]), e;
        }();
        t.default = a;
    },
    "0df6": function(e, t, n) {
        e.exports = function(e) {
            return function(t) {
                return e.apply(null, t);
            };
        };
    },
    "0e36": function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        function a(e) {
                            o(s, r, i, a, c, "next", e);
                        }
                        function c(e) {
                            o(s, r, i, a, c, "throw", e);
                        }
                        var s = e.apply(t, n);
                        a(void 0);
                    });
                };
            }
            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function(t) {
                        s(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            function f(e, t, n) {
                return t && l(e.prototype, t), n && l(e, n), e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var p = r(n("a34a")), d = r(n("bc3a")), h = r(n("a3108")), v = r(n("a9e0")), _ = function(e) {
                return Promise.resolve({
                    success: !1,
                    msg: e,
                    data: {}
                });
            }, g = function() {
                return new Promise(function(t, n) {
                    e.getNetworkType({
                        success: function(e) {
                            t(e);
                        }
                    });
                });
            }, m = function() {
                function t(e) {
                    u(this, t);
                    var n = {};
                    this.header = e.headers ? c(c({}, n), e.headers) : n, this.baseUrl = e.baseUrl || "/", 
                    this.timeout = e.timeout || 3e5, this.interceptor = {
                        request: new h.default("request"),
                        response: new h.default("response")
                    }, this.errResolve = e.errorCode || {
                        done: function() {
                            return {
                                success: !1,
                                code: "error",
                                msg: "接口错误， 请重试"
                            };
                        }
                    }, e.adapter ? this.adapter = e.adapter : this.adapter = this.createRequest;
                }
                return f(t, [ {
                    key: "getRequestOptions",
                    value: function(e) {
                        return e.wxGw ? {
                            path: "/".concat(e.url),
                            header: e.headers,
                            data: e.data,
                            method: e.method,
                            apiVersion: 1
                        } : {
                            url: "".concat(this.baseUrl).concat(e.url),
                            data: e.data,
                            header: e.headers,
                            method: e.method,
                            timeout: this.timeout,
                            dataType: e.dataType,
                            sslVerify: e.sslVerify,
                            withCredentials: !0,
                            enableHttp2: !0
                        };
                    }
                }, {
                    key: "resolveNetworkError",
                    value: function() {
                        var e = i(p.default.mark(function e(t, n) {
                            var r, o, i, a;
                            return p.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, g();

                                  case 2:
                                    if (r = e.sent, o = r.networkAvailable, i = r.networkType, o || ![ "none" ].includes(i)) {
                                        e.next = 10;
                                        break;
                                    }
                                    return e.next = 8, t.errResolve.done("noNetwork", n);

                                  case 8:
                                    return a = e.sent, e.abrupt("return", a);

                                  case 10:
                                    return e.abrupt("return", {
                                        success: !1,
                                        error: n
                                    });

                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "realRquest",
                    value: function() {
                        var t = i(p.default.mark(function t(n, r, o, a) {
                            var s, u, l, f, d, h, _, g, m;
                            return p.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return l = this, f = null, d = n.wxGw, h = void 0 !== d && d, _ = n.ignoreWxGw, 
                                    f = h && !_ && (null === (s = wx) || void 0 === s || null === (u = s.cloud) || void 0 === u ? void 0 : u.callContainer) ? wx.cloud.callContainer : e.request, 
                                    t.next = 6, v.default.preFetchIntercept(n, null, o);

                                  case 6:
                                    if (!(g = t.sent)) {
                                        t.next = 9;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 9:
                                    return t.next = 11, v.default.checkRandomIntercept(n.url, null, null, o);

                                  case 11:
                                    if (!(m = t.sent)) {
                                        t.next = 14;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 14:
                                    return t.abrupt("return", f(c(c({}, this.getRequestOptions(n)), {}, {
                                        success: function(e) {
                                            return i(p.default.mark(function t() {
                                                var i, s, u;
                                                return p.default.wrap(function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                      case 0:
                                                        if (v.default.remove(r), i = {}, 200 !== e.statusCode) {
                                                            t.next = 35;
                                                            break;
                                                        }
                                                        if (s = e.data, u = 1 * s.code, !(null === s || void 0 === s ? void 0 : s.toast) && !(null === s || void 0 === s ? void 0 : s.alert)) {
                                                            t.next = 18;
                                                            break;
                                                        }
                                                        return t.t0 = c, t.t1 = c, t.t2 = {}, t.next = 11, l.errResolve.done(599, s, n.url);

                                                      case 11:
                                                        t.t3 = t.sent, t.t4 = (0, t.t1)(t.t2, t.t3), t.t5 = {}, t.t6 = {
                                                            response: e
                                                        }, i = (0, t.t0)(t.t4, t.t5, t.t6), t.next = 32;
                                                        break;

                                                      case 18:
                                                        if (u && !n.showData) {
                                                            t.next = 22;
                                                            break;
                                                        }
                                                        i = c(c({}, s), {}, {
                                                            response: e
                                                        }), t.next = 32;
                                                        break;

                                                      case 22:
                                                        return t.t7 = c, t.t8 = c, t.t9 = {}, t.next = 27, l.errResolve.done(s.code, s);

                                                      case 27:
                                                        t.t10 = t.sent, t.t11 = (0, t.t8)(t.t9, t.t10), t.t12 = {}, t.t13 = {
                                                            response: e
                                                        }, i = (0, t.t7)(t.t11, t.t12, t.t13);

                                                      case 32:
                                                        0 === u || s.success || v.default.checkRandomIntercept(n.url, s.ts, s.ts ? i : {}), 
                                                        t.next = 50;
                                                        break;

                                                      case 35:
                                                        if (!n.wxGw || 404 !== e.statusCode) {
                                                            t.next = 40;
                                                            break;
                                                        }
                                                        return n.wxGw = !1, n.wxGwError = !0, l.realRquest(n, r, o, a), t.abrupt("return");

                                                      case 40:
                                                        return t.t14 = c, t.t15 = c, t.t16 = {}, t.next = 45, l.errResolve.done(504, e.data);

                                                      case 45:
                                                        t.t17 = t.sent, t.t18 = (0, t.t15)(t.t16, t.t17), t.t19 = {}, t.t20 = {
                                                            response: e
                                                        }, i = (0, t.t14)(t.t18, t.t19, t.t20);

                                                      case 50:
                                                        n.isPreFetch && v.default.preFetchIntercept(n, 200 === e.statusCode ? i : {
                                                            fail: !0
                                                        }, null), o(i);

                                                      case 52:
                                                      case "end":
                                                        return t.stop();
                                                    }
                                                }, t);
                                            }))();
                                        },
                                        fail: function(e) {
                                            n.isPreFetch && v.default.preFetchIntercept(n, {
                                                fail: !0
                                            }, null), v.default.refresh(r), a({
                                                response: e
                                            });
                                        }
                                    })));

                                  case 15:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e, n, r, o) {
                            return t.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "realH5Rquest",
                    value: function(e, t, n, r) {
                        var o = this;
                        (0, d.default)(c({}, this.getRequestOptions(e))).then(function() {
                            var r = i(p.default.mark(function r(i) {
                                var a, s;
                                return p.default.wrap(function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                      case 0:
                                        if (v.default.remove(t), 200 !== i.status) {
                                            r.next = 20;
                                            break;
                                        }
                                        if (a = i.data, (s = 1 * a.code) && !e.showData) {
                                            r.next = 8;
                                            break;
                                        }
                                        n(c(c({}, a), {}, {
                                            response: i
                                        })), r.next = 20;
                                        break;

                                      case 8:
                                        return r.t0 = n, r.t1 = c, r.t2 = c, r.t3 = {}, r.next = 14, o.errResolve.done(a.code, a);

                                      case 14:
                                        r.t4 = r.sent, r.t5 = (0, r.t2)(r.t3, r.t4), r.t6 = {}, r.t7 = {
                                            response: i
                                        }, r.t8 = (0, r.t1)(r.t5, r.t6, r.t7), (0, r.t0)(r.t8);

                                      case 20:
                                      case "end":
                                        return r.stop();
                                    }
                                }, r);
                            }));
                            return function(e) {
                                return r.apply(this, arguments);
                            };
                        }()).catch(function() {
                            var e = i(p.default.mark(function e(n) {
                                return p.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        v.default.refresh(t), r(n);

                                      case 2:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                            }));
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        }());
                    }
                }, {
                    key: "createRequest",
                    value: function(e) {
                        var t = this, n = this;
                        return new Promise(function(r, o) {
                            var i = "".concat(n.baseUrl).concat(e.url), a = i;
                            "POST" === e.method && (a = "".concat(i).concat(JSON.stringify(e.data)));
                            v.default.add(a, function() {
                                return t.realRquest(e, a, r, o);
                            }, o);
                        }).then(function(n) {
                            return t.interceptor.response.apply(c(c({
                                request: e
                            }, n), {}, {
                                showMsg: e.showMsg,
                                showData: e.showData
                            }));
                        }).catch(function() {
                            var n = i(p.default.mark(function n(r) {
                                return p.default.wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                      case 0:
                                        return n.t0 = t.interceptor.response, n.t1 = c, n.t2 = c, n.t3 = {}, n.next = 6, 
                                        t.resolveNetworkError(t, r);

                                      case 6:
                                        return n.t4 = n.sent, n.t5 = (0, n.t2)(n.t3, n.t4), n.t6 = {}, n.t7 = {
                                            request: e
                                        }, n.t8 = r, n.t9 = (0, n.t1)(n.t5, n.t6, n.t7, n.t8), n.abrupt("return", n.t0.apply.call(n.t0, n.t9));

                                      case 13:
                                      case "end":
                                        return n.stop();
                                    }
                                }, n);
                            }));
                            return function(e) {
                                return n.apply(this, arguments);
                            };
                        }());
                    }
                }, {
                    key: "request",
                    value: function(e) {
                        var t = this.interceptor.request.apply(c({
                            headers: JSON.parse(JSON.stringify(this.header)),
                            timeout: this.timeout,
                            eventStartTime: new Date().getTime()
                        }, e));
                        return t ? this.adapter(t) : _("请求失败，请重新请求");
                    }
                }, {
                    key: "setBaseUrl",
                    value: function(e) {
                        this.baseUrl = e;
                    }
                } ]), t;
            }();
            t.default = m;
        }).call(this, n("543d").default);
    },
    "0eef": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isObject = t.isArray = t.h5Query = void 0;
        t.h5Query = function() {
            return {};
        };
        t.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e);
        };
        t.isObject = function(e) {
            return "[object Object]" === Object.prototype.toString.call(e);
        };
    },
    "0ffd": function(e, t, n) {
        function r(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function o(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, i) {
                    function a(e) {
                        r(s, o, i, a, c, "next", e);
                    }
                    function c(e) {
                        r(s, o, i, a, c, "throw", e);
                    }
                    var s = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("a34a")), u = n("3d58"), l = n("7e40"), f = {
            namespaced: !0,
            state: {
                formData: {
                    content_type: 1,
                    invoice_type: 1,
                    send_mail: "",
                    invoice_title: "",
                    ein: "",
                    buyer_address_phone: "",
                    buyer_bank_account: ""
                },
                result: {
                    action: u.InvoiceTryOpenAction.APPLY,
                    applyInfo: null,
                    apply_url: "invoice-api-service/open/api/apply",
                    img_url: "",
                    apply_id: "",
                    send_mail_url: "",
                    msg: "",
                    tips: ""
                },
                tryOpenParams: {
                    order: ""
                }
            },
            mutations: {
                updateFormData: function(e, t) {
                    e.formData = a(a({}, e.formData), t);
                },
                setResult: function(e, t) {
                    e.result = t;
                },
                setTryOpenPrams: function(e, t) {
                    e.tryOpenParams = t;
                }
            },
            actions: {
                applyInvoice: function(e) {
                    return o(s.default.mark(function t() {
                        var n, r, o, i, c;
                        return s.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e.state, r = n.formData, o = n.result.apply_url, i = a({}, r), t.next = 5, 
                                (0, l.apiApplyInvoice)(o, i).catch(function() {
                                    return {
                                        success: !1,
                                        msg: "发送失败，请稍后重试"
                                    };
                                });

                              case 5:
                                return c = t.sent, t.abrupt("return", c);

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                tryOpen: function(e, t) {
                    return o(s.default.mark(function n() {
                        var r, o, i;
                        return s.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return (r = e.commit)("setTryOpenPrams", t), n.next = 4, (0, l.apiTryOpen)(t).catch(function() {
                                    return {
                                        success: !1,
                                        data: null
                                    };
                                });

                              case 4:
                                return o = n.sent, i = function(e) {
                                    return {
                                        action: e.action,
                                        apply_url: e.apply_url || "",
                                        img_url: e.img_url || "",
                                        apply_id: e.apply_id || "",
                                        send_mail_url: e.send_mail_url || "",
                                        msg: e.msg || "",
                                        tips: e.tips || "",
                                        applyInfo: e.applyInfo || null
                                    };
                                }, o.success && r("setResult", i(o.data || {})), n.abrupt("return", o);

                              case 8:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                }
            }
        };
        t.default = f;
    },
    1030: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function c(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function s(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    function i(e) {
                        c(s, r, o, i, a, "next", e);
                    }
                    function a(e) {
                        c(s, r, o, i, a, "throw", e);
                    }
                    var s = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function f(e, t, n) {
            return t && l(e.prototype, t), n && l(e, n), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var p = r(n("a34a")), d = r(n("624a")), h = r(n("5176")), v = r(n("0d86")), _ = r(n("1415")), g = r(n("cf72")), m = n("01de"), y = "errorHandler", E = function() {
            function e(t) {
                u(this, e), this.name = "", this.options = t, this.isSingle = void 0 !== t.isSingle && t.isSingle, 
                this.httpHead = "https:", this.configUrl = "trackerfeed.ddxq.mobi/getConfigsByPage", 
                this.currentKey = "", this.localKey = "DDMC_TRACK_CONFIG", this.localVersion = "DDMC_TRACK_VERSION", 
                this.loggerParser = d.default, this.ignoreCoverageIndex = t.ignoreCoverageIndex || [], 
                window ? this.isInIframe = window.self != window.top : this.isInIframe = !1, this.logger = new h.default({
                    url: t.uploadUrl,
                    log: t.log,
                    beforeUpload: t.beforeUpload
                }), this.cacheConfig = {}, this.referer = new v.default(), this.tabs = t.tabs || [], 
                this.hidePage = "", this.pageIsShow = {}, this.pageIdParseCache = {}, this.pageObserveCache = {}, 
                this.eventCache = new Map(), this.currentPageId = "", this.configPaths = new Map(), 
                this.eventHandler = new _.default(), this.init(), this.initSelf();
            }
            return f(e, [ {
                key: "init",
                value: function() {}
            }, {
                key: "initSelf",
                value: function() {
                    this.options.errorHandler && this.eventHandler.addEventListener(y, this.options.errorHandler);
                }
            }, {
                key: "getConfig",
                value: function() {
                    var e = s(p.default.mark(function e(t) {
                        var n, r, o, c, s = this;
                        return p.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (t = t.split("/")[0], !this.cacheConfig[t]) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return", this.cacheConfig[t]);

                              case 3:
                                return e.next = 5, this.requestConfig(t);

                              case 5:
                                n = e.sent, r = this.configPaths.get(t) || [], n.success && (o = n.data.events, 
                                c = {}, (null === o || void 0 === o ? void 0 : o.length) && o.forEach(function(e) {
                                    e.actions.forEach(function(t) {
                                        s.options.isPro && r.push(t.path), c[t.path] = i(i({}, c[t.path] || {}), {}, a({}, t.act_type, {
                                            event_id: e.event_id,
                                            event_version: e.event_version,
                                            action: t.attributes,
                                            properties: e.properties
                                        }));
                                    });
                                }), this.options.isPro && this.configPaths.set(t, r), this.cacheConfig[t] = c, this.releaseCache(t));

                              case 8:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }()
            }, {
                key: "requestConfig",
                value: function(e) {
                    var t, n, r, o;
                    if (null === (t = window) || void 0 === t || null === (n = t.trackPlatformConfig) || void 0 === n ? void 0 : n[e]) return null === (r = window) || void 0 === r || null === (o = r.trackPlatformConfig) || void 0 === o ? void 0 : o[e];
                    var i = this.options, a = i.os, c = i.appName, s = i.appVersion, u = "".concat(this.httpHead, "//").concat(this.configUrl), l = "".concat(u, "?os=").concat(a, "&app_id=").concat(c, "&app_version=").concat(s, "&page=").concat(e.split("/")[0]);
                    return this.options.isPro || (l = "".concat(l, "&trial=true")), fetch(l, {
                        method: "GET"
                    }).then(function(e) {
                        return e.json();
                    });
                }
            }, {
                key: "getLocalData",
                value: function() {
                    var e = s(p.default.mark(function e() {
                        var t = arguments;
                        return p.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.length > 0 && void 0 !== t[0] ? t[0] : this.localKey, e.abrupt("return", {});

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }()
            }, {
                key: "setLocalData",
                value: function() {
                    var e = s(p.default.mark(function e(t, n) {
                        return p.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                console.log(123);

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                }()
            }, {
                key: "getPageId",
                value: function(e, t) {
                    var n = /\$\{([\w\W]*)\}/;
                    if (n.test(e)) {
                        var r = RegExp.$1;
                        if (this.pageIdParseCache[r]) return this.pageIdParseCache[r];
                        var o = (0, g.default)({
                            data: {
                                data: t
                            },
                            value: r
                        }), i = e.replace(n, o);
                        return o && (this.pageIdParseCache[r] = i), i;
                    }
                    return e;
                }
            }, {
                key: "pushRefer",
                value: function(e) {
                    var t = this;
                    this.cacheConfig[e] ? this.referer.push(e) : this.setTrackCache(e, function() {
                        t.referer.push(e);
                    });
                }
            }, {
                key: "releaseCache",
                value: function(e) {
                    if (this.eventCache.has(e)) {
                        var t = this.eventCache.get(e) || new Set();
                        Array.from(t || new Set()).forEach(function(e) {
                            return e();
                        }), this.eventCache.delete(e);
                    }
                }
            }, {
                key: "setTrackCache",
                value: function(e, t) {
                    var n = this.eventCache.get(e);
                    n || (n = new Set(), this.eventCache.set(e, n)), n.add(t);
                }
            }, {
                key: "trackAllMemo",
                value: function() {
                    this.logger.track(null, !1, !0);
                }
            }, {
                key: "track",
                value: function() {
                    var e = s(p.default.mark(function e(t) {
                        var n, r, o, a, c, s, u, l, f, d, h, v, _, g, E, A, b, P, O, T, S = this, R = arguments;
                        return p.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (n = R.length > 1 && void 0 !== R[1] ? R[1] : {}, r = R.length > 2 ? R[2] : void 0, 
                                o = t.eventType, a = t.other, c = void 0 === a ? {} : a, s = t.key, u = s.split("/"), 
                                l = u[0], f = "isGlobal" === l, d = {
                                    status: !1,
                                    msg: [],
                                    shouldMonitor: !1
                                }, s) {
                                    e.next = 10;
                                    break;
                                }
                                return e.abrupt("return");

                              case 10:
                                if (f && (l = this.referer.page[0]), h = i(i({}, this.cacheConfig[l]), this.cacheConfig.APP || {}), 
                                this.logger.track(i(i({}, t), {}, {
                                    event_type: t.eventType,
                                    data: n,
                                    isConfig: !0,
                                    os: this.options.os || "",
                                    app_id: this.options.appName || "",
                                    app_version: this.options.appVersion || ""
                                })), this.cacheConfig[l]) {
                                    e.next = 16;
                                    break;
                                }
                                return this.setTrackCache(l, function() {
                                    S.track(t, n, r);
                                }), e.abrupt("return");

                              case 16:
                                if (!(this.referer.page.length && -1 === s.indexOf(this.referer.page[0]) && u.length > 1) || f || -1 !== s.indexOf("APP")) {
                                    e.next = 18;
                                    break;
                                }
                                return e.abrupt("return");

                              case 18:
                                v = {
                                    event_id: 0,
                                    event_version: 0,
                                    properties: {},
                                    act: {
                                        act_type: o,
                                        path: s,
                                        page_id: this.getPageId(n.trackPageId || l, i(i({}, n), c))
                                    }
                                }, h && h[s] && (_ = h[s][o]) && (g = _, this.loggerParser.parse(g.action, {
                                    data: n,
                                    other: c
                                }, function(e, t) {
                                    return void 0 === e ? (d.status = !0, d.msg.push(t.name), !d.shouldMonitor && (d.shouldMonitor = m.SHOULD_MONITOR_KEYS.includes(t.name))) : "APP" !== e && (v.act[t.name] = e), 
                                    !0;
                                }), this.loggerParser.parse(g.properties, {
                                    data: n,
                                    other: c
                                }, function(e, t) {
                                    return v.properties[t.name] = e, void 0 === e && (v.properties[t.name] = "", d.status = !0, 
                                    d.msg.push(t.name), !d.shouldMonitor && (d.shouldMonitor = m.SHOULD_MONITOR_KEYS.includes(t.name))), 
                                    !0;
                                }), v.event_id = _.event_id, v.event_version = _.event_version), c.page_id && (v.act.page_id = c.page_id), 
                                d.status && (E = "\neventInfo: ".concat(JSON.stringify(v), ",\nerrorInfo: 对应的key [").concat(d.msg.toString(), "] 解析存在问题\n\t\t\t"), 
                                this.eventHandler.triggered(y, {
                                    status: !1,
                                    eventInfo: v,
                                    msg: E,
                                    shouldMonitor: d.shouldMonitor
                                })), (h && h[s] && h[s][o] || "click" === o) && (A = v.act, b = new Date().getTime(), 
                                [ "click" ].includes(o) && this.referer.pushEvent(i(i({}, A), {}, {
                                    time: b
                                })), "elapse" === o && this.referer.pushElapse(s), P = this.options, O = P.appName, 
                                T = P.appVersion, this.logger.track(i(i({
                                    time: b,
                                    referer: this.referer.refer,
                                    app_id: O,
                                    app_version: T
                                }, v), t), r));

                              case 23:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }()
            } ]), e;
        }();
        t.default = E;
    },
    1301: function(e, t, n) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : _typeof(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
            })(e);
        }
        function o() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return o = function() {
                return e;
            }, e;
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function c(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var s = function(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== r(e) && "function" != typeof e) return {
                default: e
            };
            var t = o();
            if (t && t.has(e)) return t.get(e);
            var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                var c = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = e[a];
            }
            return n.default = e, t && t.set(e, n), n;
        }(n("fe858")), u = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("cf72")), l = n("5afa"), f = function() {
            function e() {
                i(this, e), this.currentNode = new s.default(), this.calculationNode = this.currentNode;
            }
            return c(e, [ {
                key: "init",
                value: function() {
                    this.currentNode = new s.default(), this.calculationNode = this.currentNode;
                }
            }, {
                key: "done",
                value: function(e) {
                    var t = e.value;
                    return this.init(), this.parser(t), this.calc(this.calculationNode, e.data);
                }
            }, {
                key: "calc",
                value: function(e, t) {
                    var n = "", r = "";
                    return n = e.left && e.type !== s.OPERATE_TYPE.DEFAULT ? this.calc(e.left, t) : isNaN(Number(e.getValue())) ? (0, 
                    u.default)({
                        value: e.getValue(),
                        data: t
                    }) : +e.getValue(), r = e.right && e.type !== s.OPERATE_TYPE.DEFAULT ? this.calc(e.right, t) : isNaN(Number(e.getValue())) ? (0, 
                    u.default)({
                        value: e.getValue(),
                        data: t
                    }) : +e.getValue(), this[e.type]((0, l.getDefaultData)(n), (0, l.getDefaultData)(r));
                }
            }, {
                key: "parser",
                value: function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if ("(" === n) {
                            this.currentNode.confirmType();
                            var r = new s.default();
                            r.preNode = this.currentNode, this.currentNode.left ? this.currentNode.right = r : this.currentNode.left = r, 
                            this.currentNode = r;
                        } else ")" === n ? this.currentNode = this.currentNode.preNode : this.currentNode.plusValue(n);
                    }
                }
            }, {
                key: s.OPERATE_TYPE.AND,
                value: function(e, t) {
                    return e && t;
                }
            }, {
                key: s.OPERATE_TYPE.DIV,
                value: function(e, t) {
                    return e / t;
                }
            }, {
                key: s.OPERATE_TYPE.EQUAL,
                value: function(e, t) {
                    return e == t;
                }
            }, {
                key: s.OPERATE_TYPE.MULT,
                value: function(e, t) {
                    return e * t;
                }
            }, {
                key: s.OPERATE_TYPE.NOT_EQUAL,
                value: function(e, t) {
                    return e != t;
                }
            }, {
                key: s.OPERATE_TYPE.OR,
                value: function(e, t) {
                    return e || t;
                }
            }, {
                key: s.OPERATE_TYPE.PLUS,
                value: function(e, t) {
                    return e + t;
                }
            }, {
                key: s.OPERATE_TYPE.SUB,
                value: function(e, t) {
                    return e - t;
                }
            }, {
                key: s.OPERATE_TYPE.LESS_EUQAL,
                value: function(e, t) {
                    return e <= t;
                }
            }, {
                key: s.OPERATE_TYPE.LESS_THAN,
                value: function(e, t) {
                    return e < t;
                }
            }, {
                key: s.OPERATE_TYPE.MORE_EQUAL,
                value: function(e, t) {
                    return e >= t;
                }
            }, {
                key: s.OPERATE_TYPE.MORE_THAN,
                value: function(e, t) {
                    return e > t;
                }
            }, {
                key: s.OPERATE_TYPE.DEFAULT,
                value: function(e, t) {
                    return e;
                }
            } ]), e;
        }();
        t.default = f;
    },
    1415: function(e, t, n) {
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function i(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = function() {
            function e() {
                r(this, e), this.eventHandler = new Map();
            }
            return i(e, [ {
                key: "addEventListener",
                value: function(e, t) {
                    var n = this.eventHandler.get(e) || new Map();
                    n.set(t.constructor(), t), this.eventHandler.set(e, n);
                }
            }, {
                key: "removeEventListener",
                value: function(e, t) {
                    var n = this.eventHandler.get(e);
                    n && n.delete(t.constructor());
                }
            }, {
                key: "triggered",
                value: function(e, t) {
                    var n = this.eventHandler.get(e);
                    n && Array.from(n.keys()).forEach(function(e) {
                        var r = n.get(e);
                        r && r(t);
                    });
                }
            } ]), e;
        }();
        t.default = a;
    },
    "1cf5": function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        function a(e) {
                            o(s, r, i, a, c, "next", e);
                        }
                        function c(e) {
                            o(s, r, i, a, c, "throw", e);
                        }
                        var s = e.apply(t, n);
                        a(void 0);
                    });
                };
            }
            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function(t) {
                        s(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function u() {
                if (D.length) {
                    var e = D.map(function(e) {
                        return N(e);
                    });
                    D = [], Promise.all(e);
                }
            }
            function l() {
                I.length && (D.push(I), I = [], clearTimeout(L), u());
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.forceUploadAllMonitor = l, t.monitorRequest = t.showTabBar = t.hideTabBar = t.hideLoading = t.hideHomeButton = t.aliNaviageTo = t.hideShareMenu = t.showShareMenu = t.appUpdateManager = t.getUserInfo = t.subMessage = t.onNetworkStatusChange = t.getNetworkType = t.removeTabBarBadge = t.makePhoneCall = t.showTabBarRedDot = t.createSelectorQuery = t.stopPullDownRefresh = t.setNavigationBarColor = t.setNavigationBarTitle = t.setTabBarBadge = t.pageScrollTo = t.getSystemInfoSync = t.getSystemInfo = t.getNetworkStatus = t.get = t.open = void 0;
            var f = r(n("a34a")), p = r(n("66fd")), d = r(n("4328")), h = r(n("eb8e")), v = n("6ddb"), _ = n("48dd"), g = n("f14d"), m = n("a92d"), y = n("aeea1"), E = n("c6a3"), A = r(n("67c5")), b = r(n("b7c7")), P = n("3f46"), O = r(n("c78f")), T = function(e, t) {
                return c(c({}, e), {}, {
                    success: function(n) {
                        e.success && e.success(n), t({
                            success: !0,
                            data: n
                        });
                    },
                    fail: function(n) {
                        e.fail && e.fail(n), t({
                            success: !1,
                            data: n
                        });
                    }
                });
            }, S = function t(n) {
                var r = n.type, o = void 0 === r ? 0 : r, i = n.url, a = n.params, s = void 0 === a ? {} : a, u = n.needLogin, l = void 0 !== u && u, f = n.backDeep, b = void 0 === f ? 2 : f, P = n.notEncode, O = void 0 !== P && P, T = (n.openNew, 
                n.fail), S = o, R = "", C = "", w = "", k = {}, I = "", D = s.gotoNewWebView || !1;
                if (i) {
                    var x = i.split("?"), L = x[0], N = x[1];
                    R = Object.prototype.hasOwnProperty.call(m.MAP_PATH, L) ? m.MAP_PATH[L] : L, (k = N ? c(c({}, d.default.parse(N)), s) : s).needLogin && (l = !0);
                    var j = p.default.prototype.$store.state.globalData.isNative, G = y.MAP_NATIVE_PATH[R];
                    if ((null === G || void 0 === G ? void 0 : G.url) && "1" === j && h.default.isApp && (0, 
                    v.versionCompare)(h.default.appVersion, h.default.carrotAppVersion) >= 0) return void (0, 
                    _.carrotNativeRouter)({
                        appletPath: R,
                        appletParams: k,
                        needLogin: l
                    });
                    var H = k, M = H.backToPage, U = void 0 === M ? "" : M, $ = H.appId, V = H.path;
                    if (-1 !== i.indexOf("thirdSide/thirdSide") && $ && V) return void e.navigateToMiniProgram({
                        appId: $,
                        path: V,
                        fail: function(e) {
                            U && t({
                                url: U
                            });
                        }
                    });
                    if (g.NAV_BAR.indexOf(R) > -1 ? (3 !== S && (S = 2), p.default.prototype.$store.commit("globalData/update", {
                        navParams: k || {}
                    })) : p.default.prototype.$store.commit("globalData/update", {
                        navParams: {}
                    }), I = O ? decodeURIComponent(d.default.stringify(k)) : d.default.stringify(k), 
                    C = "".concat(R).concat(I ? "?" : "").concat(I), w = C, C.indexOf("ddxq://") > -1 && h.default.isApp) return void p.default.prototype.$bridge.openNewWebView({
                        web_url: C,
                        gotoNewWebView: D
                    });
                    var F = p.default.prototype.$store.state.user.isLogin;
                    (l || E.WHITE_LOGIN_BEFORE_OPEN.indexOf(R) > -1) && !1 === F && (S = 0, C = g.PATH.PAGE_LOGIN_CHOOSE, 
                    p.default.prototype.$storage.update({
                        key: A.default.OPEN_ROUTES,
                        data: {
                            nextOpenRoute: w
                        }
                    }));
                }
                if (C || -1 === S || -2 === S) {
                    var B = {
                        url: C
                    };
                    T && (B.fail = T);
                    var K = p.default.prototype.$store.state.globalData.currentRoute;
                    if (K !== C) {
                        -1 !== S && -2 !== S && R !== g.PATH.PAGE_WEB_VIEW && p.default.prototype.$storage.update({
                            key: A.default.OPEN_ROUTES,
                            data: {
                                prevOpenRoute: K
                            }
                        });
                        var W = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, n = p.default.prototype.$storage.load({
                                key: A.default.OPEN_ROUTES
                            }) || {}, r = n.prevOpenRoute, o = void 0 === r ? "" : r, i = n.nextOpenRoute, a = void 0 === i ? "" : i, c = getCurrentPages();
                            if (c.length >= 2 && g.PATH.PAGE_LOGIN_CHOOSE === o && g.PATH.PAGE_LOGIN_CHOOSE !== K && (t = 2), 
                            c.length > t) e.navigateBack({
                                delta: t
                            }); else {
                                var s = o;
                                g.PATH.PAGE_LOGIN_CHOOSE !== o && g.PATH.PAGE_LOGIN !== o || (s = g.PATH.PAGE_HOME), 
                                e.reLaunch({
                                    url: a || s || g.PATH.PAGE_HOME
                                });
                            }
                        };
                        switch (S) {
                          case -2:
                            W(b);
                            break;

                          case -1:
                            W();
                            break;

                          case 0:
                            e.navigateTo(B);
                            break;

                          case 1:
                            e.redirectTo(B);
                            break;

                          case 2:
                            e.switchTab(B);
                            break;

                          case 3:
                            e.reLaunch(B);
                            break;

                          default:
                            e.navigateTo(B);
                        }
                        ![ -2, -1 ].includes(S) && (0, v.changeBackStatus)();
                    }
                }
            };
            t.open = S;
            t.get = function(e, t, n) {
                for (var r = t ? t.split(".") : [], o = e; r.length && o; ) {
                    var i = r.shift() || "", a = /(.+)\[([0-9]*)\]/.exec(i);
                    if (null !== a && 3 === a.length) {
                        var c = {
                            arrName: a[1],
                            arrIndex: a[2]
                        };
                        o = void 0 !== o[c.arrName] ? o[c.arrName][c.arrIndex] : void 0;
                    } else o = o[i];
                }
                return void 0 !== n && void 0 === o ? n : o;
            };
            t.getNetworkStatus = function() {
                return new Promise(function(t, n) {
                    e.getNetworkType({
                        success: function(e) {
                            t(e);
                        }
                    });
                });
            };
            t.hideLoading = function() {
                e.hideLoading();
            };
            t.getSystemInfo = function() {
                return new Promise(function(t, n) {
                    e.getSystemInfo({
                        success: function(e) {
                            t(e);
                        },
                        fail: function() {
                            n();
                        }
                    });
                });
            };
            var R = e.getSystemInfoSync;
            t.getSystemInfoSync = R;
            t.pageScrollTo = function(t) {
                return new Promise(function(n, r) {
                    e.pageScrollTo ? (e.pageScrollTo(t), n()) : r();
                });
            };
            t.setTabBarBadge = function(t) {
                return new Promise(function(n, r) {
                    e.setTabBarBadge ? e.setTabBarBadge(T(t, n)) : r();
                });
            };
            t.hideTabBar = function() {
                e.hideTabBar();
            };
            t.showTabBar = function() {
                e.showTabBar();
            };
            t.setNavigationBarTitle = function(t) {
                return new Promise(function(n, r) {
                    e.setNavigationBarTitle ? (e.setNavigationBarTitle(t), n()) : r();
                });
            };
            t.removeTabBarBadge = function(t) {
                return new Promise(function(n, r) {
                    e.removeTabBarBadge ? e.removeTabBarBadge(T(t, n)) : r();
                });
            };
            t.setNavigationBarColor = function(t) {
                return new Promise(function(n, r) {
                    e.setNavigationBarColor ? (e.setNavigationBarColor(t), n()) : r();
                });
            };
            t.stopPullDownRefresh = function() {
                return new Promise(function(t, n) {
                    e.stopPullDownRefresh ? (e.stopPullDownRefresh(), t()) : n();
                });
            };
            t.createSelectorQuery = function() {
                return new Promise(function(t, n) {
                    e.createSelectorQuery ? t(e.createSelectorQuery()) : n();
                });
            };
            t.showTabBarRedDot = function(t) {
                return new Promise(function(n, r) {
                    e.showTabBarRedDo ? (e.showTabBarRedDot(t), n()) : r();
                });
            };
            t.makePhoneCall = function(t) {
                return new Promise(function(n, r) {
                    e.makePhoneCall ? (e.makePhoneCall(t), n()) : r();
                });
            };
            t.getNetworkType = function() {
                return new Promise(function(t, n) {
                    e.getNetworkType(c({}, T({}, t)));
                });
            };
            t.getUserInfo = function(t) {
                return new Promise(function(n, r) {
                    p.default.prototype.$store.state.globalData.canIUseGetUserProfile ? wx.getUserProfile({
                        desc: "用于完善个人资料",
                        lang: "zh_CN",
                        success: function(e) {
                            b.default.save({
                                key: A.default.USER_AUTHORIZE_USERINFO,
                                data: e.userInfo || {}
                            }), n(e);
                        },
                        fail: function(e) {
                            r(e);
                        }
                    }) : e.getUserInfo({
                        provider: t,
                        success: function(e) {
                            n(e);
                        },
                        fail: function(e) {
                            r(e);
                        }
                    });
                });
            };
            t.onNetworkStatusChange = function(t) {
                return e.onNetworkStatusChange(t);
            };
            var C = function() {
                return new Promise(function(e) {
                    wx.getSetting({
                        withSubscriptions: !0,
                        success: function(t) {
                            e(t);
                        },
                        fail: function() {
                            e();
                        }
                    });
                });
            };
            t.subMessage = function(t, n, r) {
                return new Promise(function() {
                    var o = i(f.default.mark(function o(a) {
                        var c, s, u, l, d, _;
                        return f.default.wrap(function(o) {
                            for (;;) switch (o.prev = o.next) {
                              case 0:
                                if (!(h.default.isMpW && (0, v.versionCompare)(h.default.SDKVersion, "2.8.2") >= 0)) {
                                    o.next = 23;
                                    break;
                                }
                                if (!((0, v.versionCompare)(h.default.SDKVersion, "2.10.1") >= 0)) {
                                    o.next = 20;
                                    break;
                                }
                                return o.next = 4, C();

                              case 4:
                                if (o.t0 = o.sent, o.t0) {
                                    o.next = 7;
                                    break;
                                }
                                o.t0 = {};

                              case 7:
                                if (c = o.t0, s = "", u = c.subscriptionsSetting || {}, (null === t || void 0 === t ? void 0 : t.length) > 0 && (s = t[0]), 
                                l = r || P.trackmap[s]) {
                                    o.next = 15;
                                    break;
                                }
                                return e.requestSubscribeMessage({
                                    tmplIds: t,
                                    complete: function(e) {
                                        a(e);
                                    }
                                }), o.abrupt("return");

                              case 15:
                                d = (0, P.getTranckMap)(l) || {}, void 0 === u[s] && (_ = {
                                    pageid: "messageSubscribe",
                                    cid: d.exposure,
                                    aid: "exposure",
                                    ad_id: t.toString()
                                }, n && n(_), p.default.prototype.$track({
                                    key: "isGlobal/compExp",
                                    eventType: "exposure",
                                    other: {
                                        template_id: t.toString(),
                                        module_type: d.module_type
                                    }
                                })), e.requestSubscribeMessage({
                                    tmplIds: t,
                                    complete: function() {
                                        var e = i(f.default.mark(function e(r) {
                                            var o, i, c, l, h, v;
                                            return f.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    if (void 0 !== u[s]) {
                                                        e.next = 9;
                                                        break;
                                                    }
                                                    return e.next = 3, C();

                                                  case 3:
                                                    if (e.t0 = e.sent, e.t0) {
                                                        e.next = 6;
                                                        break;
                                                    }
                                                    e.t0 = {};

                                                  case 6:
                                                    o = e.t0, void 0 === (i = o.subscriptionsSetting || {})[s] ? (c = r[s], l = {
                                                        pageid: "messageSubscribe",
                                                        cid: d[c],
                                                        aid: "click",
                                                        ad_id: t.toString()
                                                    }, n && n(l), h = "accept" === c ? "Accept" : "Reject", p.default.prototype.$track({
                                                        key: "isGlobal/comp".concat(h),
                                                        eventType: "click",
                                                        other: {
                                                            template_id: t.toString(),
                                                            module_type: d.module_type
                                                        }
                                                    })) : (v = {
                                                        pageid: "messageSubscribe",
                                                        cid: d.always,
                                                        aid: "click",
                                                        ad_id: t.toString()
                                                    }, n && n(v), p.default.prototype.$track({
                                                        key: "isGlobal/compAlways",
                                                        eventType: "click",
                                                        other: {
                                                            template_id: t.toString(),
                                                            module_type: d.module_type
                                                        }
                                                    }));

                                                  case 9:
                                                    a(r);

                                                  case 10:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    }()
                                }), o.next = 21;
                                break;

                              case 20:
                                e.requestSubscribeMessage({
                                    tmplIds: t,
                                    complete: function(e) {
                                        a(e);
                                    }
                                });

                              case 21:
                                o.next = 24;
                                break;

                              case 23:
                                a();

                              case 24:
                              case "end":
                                return o.stop();
                            }
                        }, o);
                    }));
                    return function(e) {
                        return o.apply(this, arguments);
                    };
                }());
            };
            t.appUpdateManager = function() {
                var t = e.getUpdateManager();
                t.onUpdateReady(function() {
                    p.default.prototype.$confirm({
                        title: "更新提示",
                        content: "新版本已经准备好，请重启应用体验新功能",
                        cancelText: "",
                        success: function() {
                            t.applyUpdate();
                        }
                    });
                });
            };
            var w = e.hideShareMenu;
            t.hideShareMenu = w;
            t.hideHomeButton = function() {
                h.default.isMpW ? wx.hideHomeButton() : h.default.isMpA && my.hideBackHome();
            };
            var k = e.showShareMenu;
            t.showShareMenu = k;
            t.aliNaviageTo = function(e, t) {
                if (-1 !== e.indexOf("https://render.alipay.com/p")) {
                    var n = e.split("?src=");
                    if (h.default.isMpUc || h.default.isMpQuark) p.default.prototype.$toast("请在支付宝叮咚买菜小程序尝试哦"); else {
                        var r = d.default.parse(e.slice(e.lastIndexOf("?") > -1 ? e.lastIndexOf("?") + 1 : e.length));
                        t && t(c({
                            cid: "ali-path",
                            aid: "https://render.alipay.com/p",
                            router: e
                        }, r)), my.ap.navigateToAlipayPage({
                            path: 1 === n.length ? n[0] : n[1]
                        });
                    }
                } else S({
                    url: e
                });
            };
            var I = [], D = [], x = null, L = null;
            t.monitorRequest = function(e) {
                x && clearTimeout(x), L && clearTimeout(L), I.push(JSON.stringify(e)), I.length >= 5 && (D.push(I), 
                I = []), x = setTimeout(function() {
                    u();
                }, 2e3), L = setTimeout(function() {
                    l();
                }, 15e3);
            };
            var N = function(t) {
                return new Promise(function(n, r) {
                    var o = {
                        url: O.default.SERVER_MOBITRACK_URL(),
                        method: "POST",
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        dataType: "json",
                        data: {
                            app_info_string_bundle: JSON.stringify(t)
                        },
                        enableHttp2: !0
                    };
                    e.request(o);
                });
            };
        }).call(this, n("543d").default);
    },
    "1d2b": function(e, t, n) {
        e.exports = function(e, t) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return e.apply(t, n);
            };
        };
    },
    "204d": function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.signObj = void 0;
        var a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("8237")), c = n("fc99");
        t.signObj = function(e) {
            var t = e.uid, n = void 0 === t ? "" : t, r = "";
            r = "2lRMzaGLtb1zS5^WkQ3LcuOy^gC$0EB3Ys!%hDSzjQY891$yjB";
            var i = o(o({}, e), {}, {
                private_key: n || r
            }), s = "", u = Object.keys(i).sort();
            u.forEach(function(e, t) {
                s += "".concat(e, "=").concat(i[e]).concat(t < u.length - 1 ? "&" : "");
            });
            var l = (0, a.default)(s);
            return {
                nars: l,
                sesi: (0, c.funSesiEncrypt)(l)
            };
        };
    },
    "20ff": function(e, t, n) {},
    "213c": function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e) {
                return s(e) || c(e) || a(e) || i();
            }
            function i() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function a(e, t) {
                if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0;
                }
            }
            function c(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            }
            function s(e) {
                if (Array.isArray(e)) return u(e);
            }
            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function l(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o);
            }
            function f(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        function i(e) {
                            l(c, r, o, i, a, "next", e);
                        }
                        function a(e) {
                            l(c, r, o, i, a, "throw", e);
                        }
                        var c = e.apply(t, n);
                        i(void 0);
                    });
                };
            }
            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        h(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function v(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function _(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            function g(e, t, n) {
                return t && _(e.prototype, t), n && _(e, n), e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Logger = void 0;
            var m = r(n("a34a")), y = r(n("4328")), E = r(n("5af8")), A = n("5835"), b = r(n("e263")), P = function() {
                function t(e) {
                    var n = this;
                    if (v(this, t), this.memoList = [], this.MEMO_LENGTH = 5, this.UPLOAD_DELAY_TIME = 15e3, 
                    this.uploadTimeout = null, this.beforeUpload = e.beforeUpload, this.isDev = e.isDev, 
                    this.bridge = e.bridge, this.apiUrl = e.isDev ? "https://".concat(e.env || "t", ".bsapi.dingdongxiaoqu.com/track-service") : "https://trackersocket.ddxq.mobi", 
                    this.track_socket_access_token = "", this.cache = new Map(), window) {
                        var r = location.href.split("?")[1];
                        r && r.split("&").forEach(function(e) {
                            var t = e.split("=");
                            e.indexOf("token") >= 0 && (n.track_socket_access_token = t[1]), e.indexOf("baseUrl") >= 0 && (n.apiUrl = decodeURIComponent(t[1]));
                        });
                    }
                }
                return g(t, [ {
                    key: "trackApi",
                    value: function(t) {
                        var n, r = "".concat(this.apiUrl, "/track"), o = d(d({}, t), {}, {
                            socket_token: this.track_socket_access_token
                        });
                        window ? (null === (n = this.bridge) || void 0 === n ? void 0 : n.trackApi) ? this.bridge.trackApi({
                            url: r,
                            method: "POST",
                            data: o
                        }) : fetch(r, {
                            body: JSON.stringify(o),
                            method: "POST",
                            headers: new Headers({
                                "Content-Type": "application/json"
                            })
                        }) : e && e.request({
                            url: r,
                            method: "POST",
                            data: o
                        });
                    }
                }, {
                    key: "setTrackToken",
                    value: function(e, t) {
                        this.track_socket_access_token = e, this.apiUrl = t;
                    }
                }, {
                    key: "collect",
                    value: function() {
                        var t = f(m.default.mark(function t(n, r, o) {
                            var i, a, c, s, u, l, f, p, h, v = this;
                            return m.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (o && this.uploadBundleLog(), n) {
                                        t.next = 3;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 3:
                                    i = this.isDev ? "https://mobitrack.t.dingdongxiaoqu.com/log/i.jpg" : "https://trackercollect.ddxq.mobi/log/i.jpg";
                                    try {
                                        n = JSON.parse(JSON.stringify(n));
                                    } catch (e) {
                                        console.log(e);
                                    }
                                    if (a = n, !1 !== r) {
                                        t.next = 10;
                                        break;
                                    }
                                    if (!this.cache.get(n.key)) {
                                        t.next = 9;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 9:
                                    this.cache.set(n.key, !0);

                                  case 10:
                                    if (!this.beforeUpload) {
                                        t.next = 14;
                                        break;
                                    }
                                    return t.next = 13, this.beforeUpload(n);

                                  case 13:
                                    a = t.sent;

                                  case 14:
                                    if (this.track_socket_access_token && a && (l = d(d({}, n), {}, {
                                        data: (0, b.default)({
                                            data: n.data || {},
                                            other: n.other || {},
                                            public: {
                                                app_version: (null === (c = a) || void 0 === c ? void 0 : c.app_version) || "",
                                                app_id: (null === (s = a) || void 0 === s ? void 0 : s.app_id) || "",
                                                os: (null === (u = a) || void 0 === u ? void 0 : u.os) || ""
                                            },
                                            common: {}
                                        })
                                    }), n.isConfig ? this.trackApi(d({}, l)) : this.trackApi(d(d({}, l), {}, {
                                        track_data: a
                                    }))), !a || !n.act) {
                                        t.next = 25;
                                        break;
                                    }
                                    if (f = {
                                        log_string: JSON.stringify(a)
                                    }, p = "".concat(i, "?").concat(y.default.stringify(f)), !A.isApp) {
                                        t.next = 24;
                                        break;
                                    }
                                    if (h = window && window.ddmcBridge, this.bridge && (h = this.bridge), !h) {
                                        t.next = 24;
                                        break;
                                    }
                                    return (0, E.default)("9.26.1") && h.trackEvent ? h.trackEvent(a) : new Image().src = p, 
                                    t.abrupt("return");

                                  case 24:
                                    window ? new Image().src = p : e && (this.memoList.push(JSON.stringify(a)), clearTimeout(this.uploadTimeout), 
                                    this.uploadTimeout = setTimeout(function() {
                                        v.uploadBundleLog();
                                    }, this.UPLOAD_DELAY_TIME), this.memoList.length >= this.MEMO_LENGTH && this.uploadBundleLog());

                                  case 25:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e, n, r) {
                            return t.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "uploadBundleLog",
                    value: function() {
                        var t = f(m.default.mark(function t(n) {
                            var r, i;
                            return m.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (null === (r = n) || void 0 === r ? void 0 : r.length) {
                                        t.next = 5;
                                        break;
                                    }
                                    if (this.memoList.length) {
                                        t.next = 3;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 3:
                                    n = o(this.memoList), this.memoList = [];

                                  case 5:
                                    i = this.isDev ? "https://mobitrack.t.dingdongxiaoqu.com/log/bundle" : "https://trackercollect.ddxq.mobi/log/bundle", 
                                    e.request({
                                        url: i,
                                        method: "POST",
                                        header: {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        },
                                        dataType: "json",
                                        data: {
                                            log_string_bundle: JSON.stringify(n)
                                        },
                                        enableHttp2: !0
                                    });

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }()
                } ]), t;
            }();
            t.Logger = P;
        }).call(this, n("543d").default);
    },
    2444: function(e, t, n) {
        (function(t) {
            function r(e, t) {
                !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
            }
            var o = n("c532"), i = n("c8af"), a = {
                "Content-Type": "application/x-www-form-urlencoded"
            }, c = {
                adapter: function() {
                    var e;
                    return ("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (e = n("b50d")), 
                    e;
                }(),
                transformRequest: [ function(e, t) {
                    return i(t, "Accept"), i(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), 
                    e.toString()) : o.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
                } ],
                transformResponse: [ function(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e);
                    } catch (e) {}
                    return e;
                } ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300;
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            o.forEach([ "delete", "get", "head" ], function(e) {
                c.headers[e] = {};
            }), o.forEach([ "post", "put", "patch" ], function(e) {
                c.headers[e] = o.merge(a);
            }), e.exports = c;
        }).call(this, n("4362"));
    },
    2606: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = r(n("eb8e")), s = r(n("66fd")).default.extend({
            computed: {
                previewCode: function() {
                    var e = this.$store.state.globalData, t = e.options.query, n = void 0 === t ? {} : t, r = e.aliPreviewCode;
                    if (c.default.isMpA && r) return r;
                    if (c.default.isMpW && (null === n || void 0 === n ? void 0 : n.scene)) {
                        var o = decodeURIComponent(n.scene).match(/previewConfigId=(\d*)/);
                        if (null === o || void 0 === o ? void 0 : o.length) return o[1];
                    }
                    return null === n || void 0 === n ? void 0 : n.previewCode;
                },
                previewToken: function() {
                    return this.$store.state.globalData.previewToken || "";
                }
            },
            methods: {
                clearPreviewToken: function() {
                    this.$store.commit("globalData/update", {
                        previewToken: "",
                        aliPreviewCode: "",
                        options: i(i({}, this.$store.state.globalData.options || {}), {}, {
                            query: {}
                        })
                    });
                },
                togglePreviewBtn: function(e) {
                    var t = (e || {}).preview_config;
                    if (t) {
                        var n = t || {}, r = n.previewing, o = n.clear, i = n.fail_reason, a = n.token_remaining_time, c = void 0 === a ? 0 : a;
                        if (1 === r) {
                            var s = this.$refs.PreviewPageComp;
                            s && (s.showPreviewBtn = !0, s.previewStartTime = Date.now(), s.previewEndTime = s.previewStartTime + 1e3 * c);
                        }
                        1 === o && this.clearPreviewToken(), i && this.$toast(i);
                    }
                }
            }
        });
        t.default = s;
    },
    "27a2": function(e, t, n) {
        var r, o;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DEVICE_SCENE = t.DEVICE_FACTORY = void 0, t.DEVICE_FACTORY = r, function(e) {
            e[e.SHUMEI = 1] = "SHUMEI", e[e.ALI = 2] = "ALI";
        }(r || (t.DEVICE_FACTORY = r = {})), t.DEVICE_SCENE = o, function(e) {
            e[e.LOGIN = 2] = "LOGIN", e[e.CREATE_ORDER = 3] = "CREATE_ORDER", e[e.REPAY = 4] = "REPAY", 
            e[e.INVITE_GIFT_ACCEPT = 5] = "INVITE_GIFT_ACCEPT", e[e.INVITE_GIFT_INVITE = 6] = "INVITE_GIFT_INVITE", 
            e[e.USER_GET_TICKET = 7] = "USER_GET_TICKET", e[e.SYSTEM_GET_TICKET = 8] = "SYSTEM_GET_TICKET", 
            e[e.API_CATEGORY_PAGE = 9] = "API_CATEGORY_PAGE", e[e.API_PRODUCT_DETAIL_PAGE = 10] = "API_PRODUCT_DETAIL_PAGE", 
            e[e.ACCEPT_PRIVACY_RULE = 11] = "ACCEPT_PRIVACY_RULE", e[e.VIEW_CATEGORY_PAGE = 12] = "VIEW_CATEGORY_PAGE", 
            e[e.VIEW_PRODUCT_DETAIL_PAGE = 13] = "VIEW_PRODUCT_DETAIL_PAGE";
        }(o || (t.DEVICE_SCENE = o = {}));
    },
    "2bbd": function bbd(module, exports, __webpack_require__) {
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function parseExpression(json) {
            var _json$data, value = json.value, data = (null === json || void 0 === json || null === (_json$data = json.data) || void 0 === _json$data ? void 0 : _json$data.data) || {}, temp = "";
            if (eval) {
                var isFunction = /function/.test(value), string = "\n\t\t\tvar data = ".concat(JSON.stringify(data), ";\n\t\t\tif (").concat(isFunction, ") {\n\t\t\t\ttemp = ").concat(value, "();\n\t\t\t} else {\n\t\t\t\ttemp = (function() {\n\t\t\t\t\treturn ").concat(value, "\n\t\t\t\t}())\n\t\t\t}\n\t\t");
                eval(string);
            } else temp = calculation.done(json);
            return temp;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = parseExpression;
        var _calculation = _interopRequireDefault(__webpack_require__("1301")), calculation = new _calculation.default();
    },
    "2c7a": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("e552"), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("d9f0")), i = {
            isShow: !1,
            title: "",
            content: "",
            contentAlign: "center",
            contentRich: "",
            contentRichNodes: [],
            submitText: "确定",
            cancelText: "取消",
            submitTextColor: r.COLORS.GREEN,
            cancelTextColor: r.COLORS.GREY_3,
            success: function() {
                return {};
            },
            cancel: function() {
                return {};
            },
            lockSuccess: !1,
            lockCancel: !1,
            animate: !1,
            maskWork: !1,
            noMask: !1,
            noPadding: !1
        }, a = JSON.parse(JSON.stringify(i)), c = {
            namespaced: !0,
            state: i,
            mutations: {
                init: function(e, t) {
                    var n = t.title, r = t.content, i = t.contentAlign, c = t.contentRich, s = t.submitText, u = t.cancelText, l = t.submitTextColor, f = t.cancelTextColor, p = t.success, d = t.cancel, h = t.lockSuccess, v = t.lockCancel, _ = t.noMask, g = t.maskWork, m = t.noPadding, y = t.contentRichNodes, E = void 0 === y ? [] : y;
                    if (e.isShow = !0, e.title = n || a.title, e.contentRichNodes = E, e.content = r || a.content, 
                    e.contentAlign = i || a.contentAlign, e.submitText = "" === s || s ? s : a.submitText, 
                    e.cancelText = "" === u || u ? u : a.cancelText, e.submitTextColor = l || a.submitTextColor, 
                    e.cancelTextColor = f || a.cancelTextColor, e.success = p || a.success, e.cancel = d || a.cancel, 
                    e.lockSuccess = h || a.lockSuccess, e.lockCancel = v || a.lockCancel, e.noMask = _ || a.noMask, 
                    e.noPadding = m || a.noPadding, e.maskWork = g || a.maskWork, c) {
                        var A = (0, o.default)(c);
                        A && (e.contentRichNodes = A);
                    }
                },
                close: function(e) {
                    e.isShow = !1;
                }
            }
        };
        t.default = c;
    },
    "2d83": function(e, t, n) {
        var r = n("387f");
        e.exports = function(e, t, n, o, i) {
            var a = new Error(e);
            return r(a, t, n, o, i);
        };
    },
    "2e67": function(e, t, n) {
        e.exports = function(e) {
            return !(!e || !e.__CANCEL__);
        };
    },
    "2f62": function(e, t, n) {
        function r(e) {
            T && (e._devtoolHook = T, T.emit("vuex:init", e), T.on("vuex:travel-to-state", function(t) {
                e.replaceState(t);
            }), e.subscribe(function(e, t) {
                T.emit("vuex:mutation", e, t);
            }));
        }
        function o(e, t) {
            Object.keys(e).forEach(function(n) {
                return t(e[n], n);
            });
        }
        function i(e) {
            return null !== e && "object" === (void 0 === e ? "undefined" : _typeof(e));
        }
        function a(e) {
            return e && "function" == typeof e.then;
        }
        function c(e, t, n) {
            if (t.update(n), n.modules) for (var r in n.modules) {
                if (!t.getChild(r)) return;
                c(e.concat(r), t.getChild(r), n.modules[r]);
            }
        }
        function s(e, t) {
            return t.indexOf(e) < 0 && t.push(e), function() {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1);
            };
        }
        function u(e, t) {
            e._actions = Object.create(null), e._mutations = Object.create(null), e._wrappedGetters = Object.create(null), 
            e._modulesNamespaceMap = Object.create(null);
            var n = e.state;
            f(e, n, [], e._modules.root, !0), l(e, n, t);
        }
        function l(e, t, n) {
            var r = e._vm;
            e.getters = {};
            var i = {};
            o(e._wrappedGetters, function(t, n) {
                i[n] = function() {
                    return t(e);
                }, Object.defineProperty(e.getters, n, {
                    get: function() {
                        return e._vm[n];
                    },
                    enumerable: !0
                });
            });
            var a = w.config.silent;
            w.config.silent = !0, e._vm = new w({
                data: {
                    $$state: t
                },
                computed: i
            }), w.config.silent = a, e.strict && g(e), r && (n && e._withCommit(function() {
                r._data.$$state = null;
            }), w.nextTick(function() {
                return r.$destroy();
            }));
        }
        function f(e, t, n, r, o) {
            var i = !n.length, a = e._modules.getNamespace(n);
            if (r.namespaced && (e._modulesNamespaceMap[a] = r), !i && !o) {
                var c = m(t, n.slice(0, -1)), s = n[n.length - 1];
                e._withCommit(function() {
                    w.set(c, s, r.state);
                });
            }
            var u = r.context = p(e, a, n);
            r.forEachMutation(function(t, n) {
                h(e, a + n, t, u);
            }), r.forEachAction(function(t, n) {
                var r = t.root ? n : a + n, o = t.handler || t;
                v(e, r, o, u);
            }), r.forEachGetter(function(t, n) {
                _(e, a + n, t, u);
            }), r.forEachChild(function(r, i) {
                f(e, t, n.concat(i), r, o);
            });
        }
        function p(e, t, n) {
            var r = "" === t, o = {
                dispatch: r ? e.dispatch : function(n, r, o) {
                    var i = y(n, r, o), a = i.payload, c = i.options, s = i.type;
                    return c && c.root || (s = t + s), e.dispatch(s, a);
                },
                commit: r ? e.commit : function(n, r, o) {
                    var i = y(n, r, o), a = i.payload, c = i.options, s = i.type;
                    c && c.root || (s = t + s), e.commit(s, a, c);
                }
            };
            return Object.defineProperties(o, {
                getters: {
                    get: r ? function() {
                        return e.getters;
                    } : function() {
                        return d(e, t);
                    }
                },
                state: {
                    get: function() {
                        return m(e.state, n);
                    }
                }
            }), o;
        }
        function d(e, t) {
            var n = {}, r = t.length;
            return Object.keys(e.getters).forEach(function(o) {
                if (o.slice(0, r) === t) {
                    var i = o.slice(r);
                    Object.defineProperty(n, i, {
                        get: function() {
                            return e.getters[o];
                        },
                        enumerable: !0
                    });
                }
            }), n;
        }
        function h(e, t, n, r) {
            (e._mutations[t] || (e._mutations[t] = [])).push(function(t) {
                n.call(e, r.state, t);
            });
        }
        function v(e, t, n, r) {
            (e._actions[t] || (e._actions[t] = [])).push(function(t, o) {
                var i = n.call(e, {
                    dispatch: r.dispatch,
                    commit: r.commit,
                    getters: r.getters,
                    state: r.state,
                    rootGetters: e.getters,
                    rootState: e.state
                }, t, o);
                return a(i) || (i = Promise.resolve(i)), e._devtoolHook ? i.catch(function(t) {
                    throw e._devtoolHook.emit("vuex:error", t), t;
                }) : i;
            });
        }
        function _(e, t, n, r) {
            e._wrappedGetters[t] || (e._wrappedGetters[t] = function(e) {
                return n(r.state, r.getters, e.state, e.getters);
            });
        }
        function g(e) {
            e._vm.$watch(function() {
                return this._data.$$state;
            }, function() {}, {
                deep: !0,
                sync: !0
            });
        }
        function m(e, t) {
            return t.length ? t.reduce(function(e, t) {
                return e[t];
            }, e) : e;
        }
        function y(e, t, n) {
            return i(e) && e.type && (n = t, t = e, e = e.type), {
                type: e,
                payload: t,
                options: n
            };
        }
        function E(e) {
            w && e === w || (w = e, O(w));
        }
        function A(e) {
            return Array.isArray(e) ? e.map(function(e) {
                return {
                    key: e,
                    val: e
                };
            }) : Object.keys(e).map(function(t) {
                return {
                    key: t,
                    val: e[t]
                };
            });
        }
        function b(e) {
            return function(t, n) {
                return "string" != typeof t ? (n = t, t = "") : "/" !== t.charAt(t.length - 1) && (t += "/"), 
                e(t, n);
            };
        }
        function P(e, t, n) {
            return e._modulesNamespaceMap[n];
        }
        n.r(t), n.d(t, "Store", function() {
            return k;
        }), n.d(t, "install", function() {
            return E;
        }), n.d(t, "mapState", function() {
            return D;
        }), n.d(t, "mapMutations", function() {
            return x;
        }), n.d(t, "mapGetters", function() {
            return L;
        }), n.d(t, "mapActions", function() {
            return N;
        }), n.d(t, "createNamespacedHelpers", function() {
            return j;
        });
        var O = function(e) {
            function t() {
                var e = this.$options;
                e.store ? this.$store = "function" == typeof e.store ? e.store() : e.store : e.parent && e.parent.$store && (this.$store = e.parent.$store);
            }
            if (Number(e.version.split(".")[0]) >= 2) e.mixin({
                beforeCreate: t
            }); else {
                var n = e.prototype._init;
                e.prototype._init = function(e) {
                    void 0 === e && (e = {}), e.init = e.init ? [ t ].concat(e.init) : t, n.call(this, e);
                };
            }
        }, T = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, S = function(e, t) {
            this.runtime = t, this._children = Object.create(null), this._rawModule = e;
            var n = e.state;
            this.state = ("function" == typeof n ? n() : n) || {};
        }, R = {
            namespaced: {
                configurable: !0
            }
        };
        R.namespaced.get = function() {
            return !!this._rawModule.namespaced;
        }, S.prototype.addChild = function(e, t) {
            this._children[e] = t;
        }, S.prototype.removeChild = function(e) {
            delete this._children[e];
        }, S.prototype.getChild = function(e) {
            return this._children[e];
        }, S.prototype.update = function(e) {
            this._rawModule.namespaced = e.namespaced, e.actions && (this._rawModule.actions = e.actions), 
            e.mutations && (this._rawModule.mutations = e.mutations), e.getters && (this._rawModule.getters = e.getters);
        }, S.prototype.forEachChild = function(e) {
            o(this._children, e);
        }, S.prototype.forEachGetter = function(e) {
            this._rawModule.getters && o(this._rawModule.getters, e);
        }, S.prototype.forEachAction = function(e) {
            this._rawModule.actions && o(this._rawModule.actions, e);
        }, S.prototype.forEachMutation = function(e) {
            this._rawModule.mutations && o(this._rawModule.mutations, e);
        }, Object.defineProperties(S.prototype, R);
        var C = function(e) {
            this.register([], e, !1);
        };
        C.prototype.get = function(e) {
            return e.reduce(function(e, t) {
                return e.getChild(t);
            }, this.root);
        }, C.prototype.getNamespace = function(e) {
            var t = this.root;
            return e.reduce(function(e, n) {
                return t = t.getChild(n), e + (t.namespaced ? n + "/" : "");
            }, "");
        }, C.prototype.update = function(e) {
            c([], this.root, e);
        }, C.prototype.register = function(e, t, n) {
            var r = this;
            void 0 === n && (n = !0);
            var i = new S(t, n);
            0 === e.length ? this.root = i : this.get(e.slice(0, -1)).addChild(e[e.length - 1], i), 
            t.modules && o(t.modules, function(t, o) {
                r.register(e.concat(o), t, n);
            });
        }, C.prototype.unregister = function(e) {
            var t = this.get(e.slice(0, -1)), n = e[e.length - 1];
            t.getChild(n).runtime && t.removeChild(n);
        };
        var w, k = function(e) {
            var t = this;
            void 0 === e && (e = {}), !w && "undefined" != typeof window && window.Vue && E(window.Vue);
            var n = e.plugins;
            void 0 === n && (n = []);
            var o = e.strict;
            void 0 === o && (o = !1);
            var i = e.state;
            void 0 === i && (i = {}), "function" == typeof i && (i = i() || {}), this._committing = !1, 
            this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), 
            this._wrappedGetters = Object.create(null), this._modules = new C(e), this._modulesNamespaceMap = Object.create(null), 
            this._subscribers = [], this._watcherVM = new w();
            var a = this, c = this, s = c.dispatch, u = c.commit;
            this.dispatch = function(e, t) {
                return s.call(a, e, t);
            }, this.commit = function(e, t, n) {
                return u.call(a, e, t, n);
            }, this.strict = o, f(this, i, [], this._modules.root), l(this, i), n.forEach(function(e) {
                return e(t);
            }), w.config.devtools && r(this);
        }, I = {
            state: {
                configurable: !0
            }
        };
        I.state.get = function() {
            return this._vm._data.$$state;
        }, I.state.set = function(e) {}, k.prototype.commit = function(e, t, n) {
            var r = this, o = y(e, t, n), i = o.type, a = o.payload, c = (o.options, {
                type: i,
                payload: a
            }), s = this._mutations[i];
            s && (this._withCommit(function() {
                s.forEach(function(e) {
                    e(a);
                });
            }), this._subscribers.forEach(function(e) {
                return e(c, r.state);
            }));
        }, k.prototype.dispatch = function(e, t) {
            var n = this, r = y(e, t), o = r.type, i = r.payload, a = {
                type: o,
                payload: i
            }, c = this._actions[o];
            if (c) return this._actionSubscribers.forEach(function(e) {
                return e(a, n.state);
            }), c.length > 1 ? Promise.all(c.map(function(e) {
                return e(i);
            })) : c[0](i);
        }, k.prototype.subscribe = function(e) {
            return s(e, this._subscribers);
        }, k.prototype.subscribeAction = function(e) {
            return s(e, this._actionSubscribers);
        }, k.prototype.watch = function(e, t, n) {
            var r = this;
            return this._watcherVM.$watch(function() {
                return e(r.state, r.getters);
            }, t, n);
        }, k.prototype.replaceState = function(e) {
            var t = this;
            this._withCommit(function() {
                t._vm._data.$$state = e;
            });
        }, k.prototype.registerModule = function(e, t, n) {
            void 0 === n && (n = {}), "string" == typeof e && (e = [ e ]), this._modules.register(e, t), 
            f(this, this.state, e, this._modules.get(e), n.preserveState), l(this, this.state);
        }, k.prototype.unregisterModule = function(e) {
            var t = this;
            "string" == typeof e && (e = [ e ]), this._modules.unregister(e), this._withCommit(function() {
                var n = m(t.state, e.slice(0, -1));
                w.delete(n, e[e.length - 1]);
            }), u(this);
        }, k.prototype.hotUpdate = function(e) {
            this._modules.update(e), u(this, !0);
        }, k.prototype._withCommit = function(e) {
            var t = this._committing;
            this._committing = !0, e(), this._committing = t;
        }, Object.defineProperties(k.prototype, I);
        var D = b(function(e, t) {
            var n = {};
            return A(t).forEach(function(t) {
                var r = t.key, o = t.val;
                n[r] = function() {
                    var t = this.$store.state, n = this.$store.getters;
                    if (e) {
                        var r = P(this.$store, 0, e);
                        if (!r) return;
                        t = r.context.state, n = r.context.getters;
                    }
                    return "function" == typeof o ? o.call(this, t, n) : t[o];
                }, n[r].vuex = !0;
            }), n;
        }), x = b(function(e, t) {
            var n = {};
            return A(t).forEach(function(t) {
                var r = t.key, o = t.val;
                n[r] = function() {
                    for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                    var r = this.$store.commit;
                    if (e) {
                        var i = P(this.$store, 0, e);
                        if (!i) return;
                        r = i.context.commit;
                    }
                    return "function" == typeof o ? o.apply(this, [ r ].concat(t)) : r.apply(this.$store, [ o ].concat(t));
                };
            }), n;
        }), L = b(function(e, t) {
            var n = {};
            return A(t).forEach(function(t) {
                var r = t.key, o = t.val;
                o = e + o, n[r] = function() {
                    if (!e || P(this.$store, 0, e)) return this.$store.getters[o];
                }, n[r].vuex = !0;
            }), n;
        }), N = b(function(e, t) {
            var n = {};
            return A(t).forEach(function(t) {
                var r = t.key, o = t.val;
                n[r] = function() {
                    for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                    var r = this.$store.dispatch;
                    if (e) {
                        var i = P(this.$store, 0, e);
                        if (!i) return;
                        r = i.context.dispatch;
                    }
                    return "function" == typeof o ? o.apply(this, [ r ].concat(t)) : r.apply(this.$store, [ o ].concat(t));
                };
            }), n;
        }), j = function(e) {
            return {
                mapState: D.bind(null, e),
                mapGetters: L.bind(null, e),
                mapMutations: x.bind(null, e),
                mapActions: N.bind(null, e)
            };
        }, G = {
            Store: k,
            install: E,
            version: "3.0.1",
            mapState: D,
            mapMutations: x,
            mapGetters: L,
            mapActions: N,
            createNamespacedHelpers: j
        };
        t.default = G;
    },
    "30a3": function(e, t, n) {
        function r(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function o(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, i) {
                    function a(e) {
                        r(s, o, i, a, c, "next", e);
                    }
                    function c(e) {
                        r(s, o, i, a, c, "throw", e);
                    }
                    var s = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("a34a")), a = n("0839"), c = {
            namespaced: !0,
            state: {
                hotKey: {
                    search_ad_url: [],
                    search_ad: "",
                    keyword: [],
                    new_keywords: []
                },
                randomKey: ""
            },
            mutations: {
                updateHotKey: function(e, t) {
                    e.hotKey = t;
                },
                setRandomKey: function(e, t) {
                    e.randomKey = t;
                }
            },
            actions: {
                getHotKey: function(e) {
                    return o(i.default.mark(function t() {
                        var n, r, o, c, s;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e.commit, r = e.state, o = e.dispatch, t.next = 3, (0, a.apiGetSearchHotKeys)();

                              case 3:
                                if ((c = t.sent).success) {
                                    t.next = 6;
                                    break;
                                }
                                return t.abrupt("return");

                              case 6:
                                s = c.data || {}, n("updateHotKey", s), ("" === r.randomKey || s.search_ad) && o("getRandomKey");

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getRandomKey: function(e) {
                    var t = e.commit, n = e.state, r = "";
                    if (n.hotKey.search_ad) r = n.hotKey.search_ad; else {
                        var o = n.hotKey.keyword;
                        o && o.length > 0 && (r = o[Math.round(Math.random() * (o.length - 1))]);
                    }
                    t("setRandomKey", r);
                }
            }
        };
        t.default = c;
    },
    "30b5": function(e, t, n) {
        function r(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        var o = n("c532");
        e.exports = function(e, t, n) {
            if (!t) return e;
            var i;
            if (n) i = n(t); else if (o.isURLSearchParams(t)) i = t.toString(); else {
                var a = [];
                o.forEach(t, function(e, t) {
                    null !== e && void 0 !== e && (o.isArray(e) ? t += "[]" : e = [ e ], o.forEach(e, function(e) {
                        o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)), a.push(r(t) + "=" + r(e));
                    }));
                }), i = a.join("&");
            }
            if (i) {
                var c = e.indexOf("#");
                -1 !== c && (e = e.slice(0, c)), e += (-1 === e.indexOf("?") ? "?" : "&") + i;
            }
            return e;
        };
    },
    "31ee": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            namespaced: !0,
            state: {
                reportNum: 0
            },
            mutations: {
                addReportNum: function(e) {
                    e.reportNum++;
                }
            }
        };
        t.default = r;
    },
    "325d": function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("eb8e")), c = n("1cf5"), s = {
            api_version: n("a35b").variables.api_version,
            app_version: "",
            applet_source: ""
        };
        a.default.isMpA ? (a.default.isMpUc && (s.applet_source = "uc"), a.default.isMpQuark && (s.applet_source = "quark"), 
        s = o(o({}, s), {}, {
            channel: "applet",
            app_client_id: 10,
            app_version: "2.86.6"
        })) : a.default.isMpW ? s = o(o({}, s), {}, {
            channel: "applet",
            app_client_id: 4,
            app_version: "2.86.6"
        }) : a.default.isH5 && (s = o(o({}, s), {}, {
            app_client_id: 3,
            app_version: "2.86.6",
            h5_source: ""
        }), a.default.isWeixinBroswer && (s.wx = 1)), (0, c.getSystemInfo)().then(function(e) {
            s = o(o({}, s), e);
        });
        var u = s;
        t.default = u;
    },
    "34cf": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.checkCurrentPage = function(e) {
            return r.default.state.globalData.currentRoute === o.PATH[e];
        };
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("0613")), o = n("f14d");
    },
    3716: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.apiEventNewComerActivityRankProduct = t.apiEventNewComerActivityRank = t.apiEventNewComerActivity = t.apiEventCouponReceive = t.apiEventCouponList = t.apiEventCouponTag = t.apiEventAttend = void 0;
        var r = n("27a2"), o = n("5ee7");
        t.apiEventAttend = function(e) {
            return o.http.get("event/attend", e);
        };
        t.apiEventCouponTag = function(e) {
            return o.http.get("event/couponTag", e);
        };
        t.apiEventCouponList = function(e) {
            return o.http.get("event/couponList", e);
        };
        t.apiEventCouponReceive = function(e) {
            return o.http.get("event/couponReceive", e, {
                scene: r.DEVICE_SCENE.USER_GET_TICKET
            });
        };
        t.apiEventNewComerActivity = function(e) {
            return o.http.get("event/getNewUserActivity", e);
        };
        t.apiEventNewComerActivityRank = function(e) {
            return o.http.get("event/getNewUserActivityRank", e);
        };
        t.apiEventNewComerActivityRankProduct = function(e) {
            return o.http.get("event/getNewUserActivityRankProduct", e);
        };
    },
    "37eb": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.apiCheckLogin = function(e) {
            return l.http.get("user/checkLogin", e);
        }, t.apiLogout = function(e) {
            return l.http.post("user/logout", e);
        }, t.apiAppLogout = function(e) {
            return l.pythonHttp.post("api/v1/auth/logout/", e);
        }, t.apiAuthorizate = function(e) {
            return l.http.post("user/wxAppletAuth", e, {
                slient: !0,
                showData: !0
            });
        }, t.apiGetUserInfo = function(e) {
            return l.http.get("user/info", e);
        }, t.apiGetSMSCode = function(e) {
            return l.http.get("user/getSms", e, {
                showMsg: !1
            });
        }, t.apiGetSmsImg = function(e) {
            return "".concat(u.default.SERVER_API_MAICAI(), "user/verifyCode?").concat(Math.random(), "&").concat(c.default.stringify(e));
        }, t.apiPostLogin = function(e) {
            return l.javaUserHttp.get("userportal-service/user/wxApplet/login", e, {
                showData: !0,
                showMsg: !1,
                scene: s.DEVICE_SCENE.LOGIN
            });
        }, t.apiPostCheckLogin = function(e) {
            return l.http.get("user/checkLogin", e);
        }, t.apiGetWxH5Auth = function(e) {
            return "".concat(u.default.SERVER_API_MAICAI(), "weixin/auth?").concat(c.default.stringify(e));
        }, t.apiPostLoginByMobileOld = function(e) {
            return l.http.post("user/wxAppletMobileDecrypt", e, {
                scene: s.DEVICE_SCENE.LOGIN
            });
        }, t.apiPostLoginByMobile = function(e) {
            return l.javaUserHttp.post("userportal-service/user/wxApplet/login", e, {
                scene: s.DEVICE_SCENE.LOGIN
            });
        }, t.apiGetQrCode = function(e) {
            return l.javaUserHttp.post("userportal-service/user/wxApplet/qrCode", e);
        }, t.apiPostAliAppletAuth = function(e) {
            return l.javaUserHttp.post("userportal-service/alipayAppletApi/appletAuth", e, {
                showData: !0,
                scene: s.DEVICE_SCENE.LOGIN
            });
        }, t.apiAliAppletMobileDecrypt = function(e) {
            return l.javaUserHttp.post("userportal-service/alipayAppletApi/appletMobileDecrypt", e, {
                showMsg: !1,
                scene: s.DEVICE_SCENE.LOGIN
            });
        }, t.apiAliAppletLogout = function(e) {
            return l.javaUserHttp.post("userportal-service/alipayAppletApi/logout", e);
        }, t.apiAliAppletRefreshTicketAccessToken = function(e) {
            return l.javaUserHttp.get("userportal-service/alipayAppletApi/voucher/accesstoken/refresh", e);
        }, t.uploadSRStatic = function(e) {
            return l.effectHttp.post("data/v1/order/collect", i({
                dataSourceType: 15
            }, e));
        }, t.getMaicaiConfig = t.apiAdDeviceInfo = t.apiNoticeList = t.getStationNameBySId = t.apiContactChoose = t.apiAdWechatAppletRegister = t.apiGetAppGlobalInfo = t.getABTestGroup = t.getOldRecall = t.getToolH5config = t.decodeDataSign = t.getDataSign = t.apiWxH5Payment = t.apiGetAppInfo = t.reportFormId = void 0;
        var c = r(n("4328")), s = n("27a2"), u = r(n("c78f")), l = n("5ee7");
        t.reportFormId = function(e) {
            return l.http.post("user/uploadAliFormId", e);
        };
        t.apiGetAppInfo = function(e) {
            return l.pythonHttp.get("api/v1/app/info/", e);
        };
        t.apiWxH5Payment = function(e) {
            return l.payHttp.form("".concat(u.default.SERVER_WX_H5_PAY(), "pay/wx.php"), e);
        };
        t.getDataSign = function(e) {
            return l.javaUserHttp.get("userportal-service/commonApi/encrypt", e);
        };
        t.decodeDataSign = function(e) {
            return l.javaUserHttp.get("userportal-service/commonApi/decrypt", e);
        };
        t.getToolH5config = function() {
            return l.trackMaicaiHttp.get("tool/h5config");
        };
        t.getOldRecall = function(e) {
            return l.http.get("event/inviteRecall", e);
        };
        t.getABTestGroup = function() {
            return l.http.get("homeApi/getABTestGroup");
        };
        t.apiGetAppGlobalInfo = function() {
            return l.gateWayHttp.get("configcenter-service/config/app/getGlobalConfig", {
                type: "app_global_config",
                key: "online2"
            }, {
                ignoreWxGw: !0
            });
        };
        t.apiAdWechatAppletRegister = function(e) {
            return l.gateWayHttp.post("web/ad/wechatApplet/register", e);
        };
        t.apiContactChoose = function(e) {
            return l.gateWayHttp.get("cc-admin-service/ccapi/ccGroupStation/find/xcx", e);
        };
        t.getStationNameBySId = function(e) {
            return l.gateWayHttp.get("cc-admin-service/ccapi/sso/getStationById", e);
        };
        t.apiNoticeList = function() {
            return l.gateWayHttp.get("cc-admin-service/ccapi/notice/getNotice");
        };
        t.apiAdDeviceInfo = function(e) {
            return l.http.post("homeApi/deviceInfo", e);
        };
        t.getMaicaiConfig = function() {
            return l.http.get("tool/getConfig");
        };
    },
    "387f": function(e, t, n) {
        e.exports = function(e, t, n, r, o) {
            return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, 
            e.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                };
            }, e;
        };
    },
    3895: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getSubscribeStatus = t.subSampleTasteChannel = t.getStationName = t.getLotteryList = t.sampleLotteryList = t.sampleHistoryToEvaluate = t.getRecipeRecommendProducts = t.getProductCommentList = t.sampleOrderList = t.sampleSaveComment = t.sampleTasteDetail = t.momApplySampleTaste = t.sampleTasteInHistory = t.sampleTasteInProgress = t.listUserTicketsByTag = t.checkInGroup = t.getUnion = t.getMyLeaveRecord = t.getCumulativeOrderActivityRecord = t.getCumulativeOrderActivityInfo = t.combinationDetail = t.BuyCoupons = t.registerPrizeRecord = t.boostPrizeRecord = t.consultFreeFood = t.listSendPrizeRecord = t.pageQueryActivityRecords = t.consultActivityRule = t.consultBoost = t.consultShare = t.listActivity = t.listBoostRecord = t.createShareInfo = t.boost = t.farmAchieve = t.farmTask = t.farmAddName = t.farmReceiveAttend = t.farmBind = t.farmInvite = t.attendApi = t.getIsFirstFollow = t.eventApi = t.cardApi = t.cuanmaApi = t.messageApi = t.leaveAPI = t.barterActivity = t.getNOrderActivityDetail = t.getActivityDetail = t.apiActivityDynamic = void 0;
        var r = n("5ee7"), o = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        t.apiActivityDynamic = function(e) {
            return r.http.get("activity/dynamicPage", e);
        };
        t.getActivityDetail = function(e) {
            return r.http.get("activity/detail", e);
        };
        t.getNOrderActivityDetail = function(e) {
            return r.http.get("activity/toOrderHasGift", e);
        };
        t.barterActivity = function(e) {
            return r.http.get("activity/barter", e);
        };
        t.leaveAPI = function(e) {
            return r.http.get("leaveMessage/leave", e);
        };
        t.messageApi = function(e, t) {
            return r.http.get("leaveMessage/".concat(e), t);
        };
        t.cuanmaApi = function(e, t) {
            return r.http.get("cuanmaActivity/".concat(e), t);
        };
        t.cardApi = function(e, t) {
            return r.http.get("cardLottery/".concat(e), t);
        };
        t.eventApi = function(e) {
            return r.http.get("event/info", e);
        };
        t.getIsFirstFollow = function(e) {
            return r.gateWayHttp.get("mp/info/firstFollow", e);
        };
        t.attendApi = function(e) {
            return r.http.get("event/attend", e);
        };
        t.farmInvite = function(e) {
            return 1 === e.gameId ? r.farmHttp.get("open/page-info/invitation", e) : r.orchardHttp.get("open/page-info/invitation", e);
        };
        t.farmBind = function(e) {
            return 1 === e.gameId ? r.farmHttp.get("api/invite/bindinvite", e) : r.orchardHttp.get("api/invite/bindinvite", e);
        };
        t.farmReceiveAttend = function(e) {
            return 1 === e.gameId ? r.http.post("share/AppletFarmAttend", e) : r.javaUserHttp.post("userportal-service/share/appletOrchardAttend", e);
        };
        t.farmAddName = function(e) {
            return r.javaUserHttp.post("userportal-service/share/appletFarmNeedWxName", e);
        };
        t.farmTask = function(e) {
            return 1 === e.gameId ? r.farmHttp.get("api/v2/task/list", e) : r.orchardHttp.get("api/v2/task/list", e);
        };
        t.farmAchieve = function(e) {
            return 1 === e.gameId ? r.farmHttp.get("api/v2/task/achieve", e) : r.orchardHttp.get("api/v2/task/list", e);
        };
        t.boost = function(e) {
            return r.gateWayHttp.post("promocore-service/client/boost/activityTrigger/v1/boost", e);
        };
        t.createShareInfo = function(e) {
            return r.gateWayHttp.post("promocore-service/client/boost/activityTrigger/v1/createShareInfo", e);
        };
        t.listBoostRecord = function(e) {
            return r.gateWayHttp.post("promocore-service/client/boost/activityRecord/v1/listBoostRecord", e);
        };
        t.listActivity = function(e) {
            return r.gateWayHttp.post("promocore-service/client/boost/activityConsult/v1/listActivity", e);
        };
        t.consultShare = function(e) {
            return r.gateWayHttp.post("promocore-service/client/boost/activityConsult/v1/consultShare", e);
        };
        t.consultBoost = function(e) {
            return r.gateWayHttp.post("promocore-service/client/boost/activityConsult/v1/consultBoost", e);
        };
        t.consultActivityRule = function(e) {
            return r.gateWayHttp.post("promocore-service/client/boost/activityConsult/v1/consultActivityRule", e);
        };
        t.pageQueryActivityRecords = function(e) {
            return r.gateWayHttp.post("promocore-service/client/boost/activityRecord/v1/pageQueryActivityRecords", e);
        };
        t.listSendPrizeRecord = function(e) {
            return r.gateWayHttp.post("promocore-service/client/boost/activityRecord/v1/listSendPrizeRecord", e, {
                showData: !0
            });
        };
        t.consultFreeFood = function(e) {
            return r.gateWayHttp.post("promocore-service/client/boost/activityConsult/v1/consultFreeFood", e, {
                showData: !0
            });
        };
        t.boostPrizeRecord = function(e) {
            return r.gateWayHttp.post("promocore-service/client/boost/activityRecord/v1/boostPrizeRecord", e);
        };
        t.registerPrizeRecord = function() {
            return r.gateWayHttp.get("promocore-service/client/boost/activityRecord/v1/registerPrizeRecord");
        };
        var i = {
            getInfo: function(e) {
                return r.gateWayHttp.post("voucher-order-service/voucher-package/getInfo", e, o);
            },
            buy: function(e) {
                return r.gateWayHttp.post("voucher-order-service/voucher-package/buy", e, o);
            },
            getRecords: function(e) {
                return r.gateWayHttp.post("voucher-order-service/voucher-package/getRecords", e, o);
            },
            getPayConfig: function(e) {
                return r.gateWayHttp.post("voucher-order-service/voucher-order-app/getPayConfig", e, o);
            },
            getActivityShowInfo: function(e) {
                return r.gateWayHttp.get("voucher-order-service/voucher-package/getActivityShowInfo", e, o);
            }
        };
        t.BuyCoupons = i;
        t.combinationDetail = function(e) {
            return r.http.get("activity/detail", e);
        };
        t.getCumulativeOrderActivityInfo = function(e) {
            return r.http.get("activity/detail", e);
        };
        t.getCumulativeOrderActivityRecord = function(e) {
            return r.http.get("activity/record", e);
        };
        t.getMyLeaveRecord = function(e) {
            return r.http.get("leaveMessage/myLeaveRecord", e);
        };
        t.getUnion = function(e) {
            return r.javaUserHttp.get("userportal-service/user/wxAppletUnionIdDecrypt", e);
        };
        t.checkInGroup = function(e) {
            return r.gateWayHttp.get("web/opwx/user/v1/query/user", e);
        };
        t.listUserTicketsByTag = function(e) {
            return r.gateWayJsonHttp.post("vouchercore-service/client/userTicketClient/listQueryUserTickets", e);
        };
        t.sampleTasteInProgress = function(e) {
            return r.gateWayHttp.get("recipe-service/api/v1/-/activity/activeActivityList", e, o);
        };
        t.sampleTasteInHistory = function(e) {
            return r.gateWayHttp.get("recipe-service/api/v1/-/activity/historyActivityList", e, o);
        };
        t.momApplySampleTaste = function(e) {
            return r.gateWayHttp.post("recipe-service/api/v1/activity/userApplyActivity", e, o);
        };
        t.sampleTasteDetail = function(e) {
            return r.gateWayHttp.get("recipe-service/api/v1/-/activity/activityDetail", e, o);
        };
        t.sampleSaveComment = function(e) {
            return r.gateWayHttp.post("recipe-service/api/v1/comment/postComment", e, o);
        };
        t.sampleOrderList = function(e) {
            return r.gateWayHttp.get("recipe-service/api/v1/-/activity/myAttendance", e, o);
        };
        t.getProductCommentList = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return r.gateWayHttp.post("recipe-service/api/v1/comment/foretasteCommentList?page=".concat(t, "&size=10"), e, o);
        };
        t.getRecipeRecommendProducts = function(e) {
            return r.gateWayHttp.post("recipe-service/api/v1/-/publicApi/quickPurchaseIngredients", e, o);
        };
        t.sampleHistoryToEvaluate = function(e) {
            return r.gateWayHttp.get("recipe-service/api/v1/-/activity/myWaitEvaluateNum", e, o);
        };
        t.sampleLotteryList = function(e) {
            return r.gateWayHttp.get("recipe-service/api/v1/-/activity/lotteryList", e, o);
        };
        t.getLotteryList = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                page: 1,
                size: 10
            };
            return r.gateWayHttp.post("recipe-service/api/v1/-/activity/queryActivityLotteryPageList?page=".concat(t.page, "&size=").concat(t.size), e, o);
        };
        t.getStationName = function(e) {
            return r.gateWayHttp.get("recipe-service/api/v1/activity/queryStationName", e, o);
        };
        t.subSampleTasteChannel = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "api/channel/sub/cancel" : "api/channel/sub/add";
            return r.gateWayHttp.post(t, e, o);
        };
        t.getSubscribeStatus = function(e) {
            return r.gateWayHttp.get("recipe-service/api/v1/-/activity/activitySubscribe", e, o);
        };
    },
    3934: function(e, t, n) {
        var r = n("c532");
        e.exports = r.isStandardBrowserEnv() ? function() {
            function e(e) {
                var t = e;
                return n && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), 
                {
                    href: o.href,
                    protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                    host: o.host,
                    search: o.search ? o.search.replace(/^\?/, "") : "",
                    hash: o.hash ? o.hash.replace(/^#/, "") : "",
                    hostname: o.hostname,
                    port: o.port,
                    pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                };
            }
            var t, n = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
            return t = e(window.location.href), function(n) {
                var o = r.isString(n) ? e(n) : n;
                return o.protocol === t.protocol && o.host === t.host;
            };
        }() : function() {
            return !0;
        };
    },
    "3c35": function(e, t) {
        (function(t) {
            e.exports = t;
        }).call(this, {});
    },
    "3c44": function(e, t) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : _typeof(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
            })(e);
        }
        function r(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
        }
        function o(e, t) {
            return e << t | e >>> 32 - t;
        }
        function i(e, t, n, i, a, c) {
            return r(o(r(r(t, e), r(i, c)), a), n);
        }
        function a(e, t, n, r, o, a, c) {
            return i(t & n | ~t & r, e, t, o, a, c);
        }
        function c(e, t, n, r, o, a, c) {
            return i(t & r | n & ~r, e, t, o, a, c);
        }
        function s(e, t, n, r, o, a, c) {
            return i(t ^ n ^ r, e, t, o, a, c);
        }
        function u(e, t, n, r, o, a, c) {
            return i(n ^ (t | ~r), e, t, o, a, c);
        }
        function l(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            var n, o, i, l, f, p = 1732584193, d = -271733879, h = -1732584194, v = 271733878;
            for (n = 0; n < e.length; n += 16) o = p, i = d, l = h, f = v, d = u(d = u(d = u(d = u(d = s(d = s(d = s(d = s(d = c(d = c(d = c(d = c(d = a(d = a(d = a(d = a(d, h = a(h, v = a(v, p = a(p, d, h, v, e[n], 7, -680876936), d, h, e[n + 1], 12, -389564586), p, d, e[n + 2], 17, 606105819), v, p, e[n + 3], 22, -1044525330), h = a(h, v = a(v, p = a(p, d, h, v, e[n + 4], 7, -176418897), d, h, e[n + 5], 12, 1200080426), p, d, e[n + 6], 17, -1473231341), v, p, e[n + 7], 22, -45705983), h = a(h, v = a(v, p = a(p, d, h, v, e[n + 8], 7, 1770035416), d, h, e[n + 9], 12, -1958414417), p, d, e[n + 10], 17, -42063), v, p, e[n + 11], 22, -1990404162), h = a(h, v = a(v, p = a(p, d, h, v, e[n + 12], 7, 1804603682), d, h, e[n + 13], 12, -40341101), p, d, e[n + 14], 17, -1502002290), v, p, e[n + 15], 22, 1236535329), h = c(h, v = c(v, p = c(p, d, h, v, e[n + 1], 5, -165796510), d, h, e[n + 6], 9, -1069501632), p, d, e[n + 11], 14, 643717713), v, p, e[n], 20, -373897302), h = c(h, v = c(v, p = c(p, d, h, v, e[n + 5], 5, -701558691), d, h, e[n + 10], 9, 38016083), p, d, e[n + 15], 14, -660478335), v, p, e[n + 4], 20, -405537848), h = c(h, v = c(v, p = c(p, d, h, v, e[n + 9], 5, 568446438), d, h, e[n + 14], 9, -1019803690), p, d, e[n + 3], 14, -187363961), v, p, e[n + 8], 20, 1163531501), h = c(h, v = c(v, p = c(p, d, h, v, e[n + 13], 5, -1444681467), d, h, e[n + 2], 9, -51403784), p, d, e[n + 7], 14, 1735328473), v, p, e[n + 12], 20, -1926607734), h = s(h, v = s(v, p = s(p, d, h, v, e[n + 5], 4, -378558), d, h, e[n + 8], 11, -2022574463), p, d, e[n + 11], 16, 1839030562), v, p, e[n + 14], 23, -35309556), h = s(h, v = s(v, p = s(p, d, h, v, e[n + 1], 4, -1530992060), d, h, e[n + 4], 11, 1272893353), p, d, e[n + 7], 16, -155497632), v, p, e[n + 10], 23, -1094730640), h = s(h, v = s(v, p = s(p, d, h, v, e[n + 13], 4, 681279174), d, h, e[n], 11, -358537222), p, d, e[n + 3], 16, -722521979), v, p, e[n + 6], 23, 76029189), h = s(h, v = s(v, p = s(p, d, h, v, e[n + 9], 4, -640364487), d, h, e[n + 12], 11, -421815835), p, d, e[n + 15], 16, 530742520), v, p, e[n + 2], 23, -995338651), h = u(h, v = u(v, p = u(p, d, h, v, e[n], 6, -198630844), d, h, e[n + 7], 10, 1126891415), p, d, e[n + 14], 15, -1416354905), v, p, e[n + 5], 21, -57434055), h = u(h, v = u(v, p = u(p, d, h, v, e[n + 12], 6, 1700485571), d, h, e[n + 3], 10, -1894986606), p, d, e[n + 10], 15, -1051523), v, p, e[n + 1], 21, -2054922799), h = u(h, v = u(v, p = u(p, d, h, v, e[n + 8], 6, 1873313359), d, h, e[n + 15], 10, -30611744), p, d, e[n + 6], 15, -1560198380), v, p, e[n + 13], 21, 1309151649), h = u(h, v = u(v, p = u(p, d, h, v, e[n + 4], 6, -145523070), d, h, e[n + 11], 10, -1120210379), p, d, e[n + 2], 15, 718787259), v, p, e[n + 9], 21, -343485551), 
            p = r(p, o), d = r(d, i), h = r(h, l), v = r(v, f);
            return [ p, d, h, v ];
        }
        function f(e) {
            var t, n = "", r = 32 * e.length;
            for (t = 0; t < r; t += 8) n += String.fromCharCode(255 & e[t >> 5] >>> t % 32);
            return n;
        }
        function p(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
            var r = 8 * e.length;
            for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n;
        }
        function d(e) {
            return f(l(p(e), 8 * e.length));
        }
        function h(e) {
            var t, n, r = "0123456789abcdef", o = "";
            for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), o += r.charAt(15 & t >>> 4) + r.charAt(15 & t);
            return o;
        }
        function v(e) {
            return unescape(encodeURIComponent(e));
        }
        function _(e) {
            return d(v(e));
        }
        function g(e) {
            return h(_(e));
        }
        function m(e) {
            return g(e);
        }
        function y(e) {
            e = unescape(e);
            for (var t = String.fromCharCode, n = t(e.charCodeAt(0) - e.length), r = 1; r < e.length; r++) n += t(e.charCodeAt(r) - n.charCodeAt(r - 1));
            return n;
        }
        function E() {
            var e = new Date(), t = e.getFullYear().toString(), n = (e.getMonth() + 1).toString(), r = e.getDate().toString(), o = e.getHours().toString(), i = e.getMinutes().toString(), a = e.getSeconds().toString();
            return n = 9 >= n ? "0" + n : n, r = 9 >= r ? "0" + r : r, o = 9 >= o ? "0" + o : o, 
            i = 9 >= i ? "0" + i : i, a = 9 >= a ? "0" + a : a, t + n + r + o + i + a;
        }
        function A() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 0 | 16 * Math.random();
                return ("x" == e ? t : 8 | 3 & t).toString(16);
            });
        }
        function b() {
            try {
                return wx.getSystemInfoSync();
            } catch (e) {
                return {};
            }
        }
        function P() {
            var e = b(), t = +new Date(), n = S(), r = e.version, o = C();
            return delete e.version, Object.assign({
                appId: te.appId,
                channel: te.channel,
                deviceId: n,
                time: t - ie,
                sessionId: ae,
                version: X,
                subVersion: Q,
                weAppVerion: r,
                res: "".concat(e.screenWidth, "_").concat(e.screenHeight),
                launchOptions: o
            }, e);
        }
        function O(e) {
            var t = [];
            for (var r in e) if (e.hasOwnProperty(r)) {
                var o = e[r];
                "object" == n(e[r]) && (o = JSON.stringify(o)), t.push(r + "=" + encodeURIComponent(o));
            }
            return t.join("&");
        }
        function T() {
            var e = S();
            return new Date(), {
                deviceId: e,
                version: X
            };
        }
        function S() {
            var e;
            try {
                var t = "".concat(wx.env.USER_DATA_PATH, "/SMFP.txt");
                e = wx.getFileSystemManager().readFileSync(t, "utf8");
            } catch (e) {}
            try {
                e = wx.getStorageSync(Z, null);
            } catch (e) {}
            return e || (e = ne), R(e), e;
        }
        function R(e) {
            try {
                var t = "".concat(wx.env.USER_DATA_PATH, "/SMFP.txt"), n = wx.getFileSystemManager();
                wx.setStorageSync(Z, e), n.writeFileSync(t, e, "utf8");
            } catch (e) {}
        }
        function C() {
            var e = {};
            try {
                e = wx.getLaunchOptionsSync();
            } catch (e) {}
            return e;
        }
        function w() {
            return new Promise(function(e) {
                try {
                    try {
                        wx.startWifi({
                            success: function() {
                                wx.getConnectedWifi({
                                    complete: function(t) {
                                        try {
                                            e(t.wifi ? t.wifi : {});
                                        } catch (t) {
                                            e({});
                                        }
                                    }
                                });
                            },
                            fail: function() {
                                e([]);
                            }
                        });
                    } catch (t) {
                        e([]);
                    }
                } catch (t) {
                    e({});
                }
            });
        }
        function k() {
            return new Promise(function(e) {
                try {
                    wx.getLocation({
                        altitude: !0,
                        success: function(t) {
                            try {
                                delete t.errMsg, e(t);
                            } catch (t) {
                                e({});
                            }
                        },
                        fail: function() {
                            e({});
                        }
                    });
                } catch (t) {
                    e({});
                }
            });
        }
        function I() {
            return new Promise(function(e) {
                var t = [];
                try {
                    wx.onAccelerometerChange(function(n) {
                        try {
                            t.push(n), setTimeout(function() {}, 6e3), e(t);
                        } catch (n) {
                            e(t);
                        }
                    }), setTimeout(function() {
                        e(t);
                    }, 1e3);
                } catch (n) {
                    e(t);
                }
            });
        }
        function D() {
            return new Promise(function(e) {
                var t = [];
                try {
                    wx.onCompassChange(function(n) {
                        try {
                            t.push(n.direction), setTimeout(function() {}, 6e3), e(t);
                        } catch (n) {
                            e(t);
                        }
                    }), setTimeout(function() {
                        e(t);
                    }, 1e3);
                } catch (n) {
                    e(t);
                }
            });
        }
        function x() {
            return new Promise(function(e) {
                var t = P();
                try {
                    wx.startWifi({
                        success: function() {
                            if ("android" == t.platform) try {
                                wx.getWifiList({
                                    success: function() {
                                        try {
                                            wx.onGetWifiList(function(t) {
                                                try {
                                                    e(t.wifiList);
                                                } catch (t) {
                                                    e([]);
                                                }
                                            });
                                        } catch (e) {}
                                        setTimeout(function() {
                                            e([]);
                                        }, 1e3);
                                    },
                                    fail: function() {
                                        e([]);
                                    }
                                });
                            } catch (t) {
                                e([]);
                            } else e([]);
                        },
                        fail: function() {
                            e([]);
                        }
                    });
                } catch (t) {
                    e([]);
                }
            });
        }
        function L() {
            return new Promise(function(e) {
                try {
                    wx.getScreenBrightness({
                        success: function(t) {
                            try {
                                e(t.value);
                            } catch (t) {
                                e(-1);
                            }
                        },
                        fail: function() {
                            e(-1);
                        }
                    });
                } catch (t) {
                    e(-1);
                }
            });
        }
        function N() {
            return new Promise(function(e) {
                try {
                    wx.getNetworkType({
                        success: function(t) {
                            try {
                                e(t.networkType);
                            } catch (t) {
                                e("");
                            }
                        },
                        fail: function() {
                            e("");
                        }
                    });
                } catch (t) {
                    e("");
                }
            });
        }
        function j(e, t, n, r) {
            oe.deviceId = e, oe.sign = t, oe.timestamp = n, oe.length = 1 * r;
        }
        function G() {
            return {
                deviceId: oe.deviceId,
                sign: oe.sign,
                timestamp: oe.timestamp,
                length: oe.length
            };
        }
        function H() {
            return {
                deviceId: S(),
                sign: null,
                timestamp: te.timestamp || re.timestamp
            };
        }
        function M(e, t, n) {
            try {
                wx.request({
                    url: e,
                    data: t,
                    method: "POST",
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(e) {
                        var t = {
                            code: 1902,
                            detail: {},
                            deviceId: "",
                            message: "数据解析异常",
                            requestId: "",
                            riskLevel: ""
                        };
                        try {
                            var r = e.data.match(/smCB\((.*)\)/);
                            if (r) {
                                var o = r[1];
                                try {
                                    n(JSON.parse(o));
                                } catch (e) {
                                    n(t);
                                }
                            } else n(t);
                        } catch (e) {
                            n(t);
                        }
                    }
                });
            } catch (e) {}
        }
        function U(e, t) {
            try {
                var n = G().timestamp;
                return B(e(t)) + n;
            } catch (e) {
                var r = H().timestamp;
                return B($(F, t)) + r;
            }
        }
        function $(e, t, n, r, o, i) {
            return e = e || F, n = n || te.key || re.key, r = 0 == r ? 0 : 1, o = 2 == o ? 1 : 0, 
            n += "", 0 == o ? e(n, t, r) : e(n, t, r, o, i);
        }
        function V(e) {
            for (var t, n, r, o = [ 0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964 ], i = [ 0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697 ], a = [ 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272 ], c = [ 0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144 ], s = [ 0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256 ], u = [ 0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488 ], l = [ 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746 ], f = [ 0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568 ], p = [ 0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578 ], d = [ 0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488 ], h = [ 0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800 ], v = [ 0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744 ], _ = [ 0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128 ], g = [ 0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261 ], m = 8 < e.length ? 3 : 1, y = Array(32 * m), E = [ 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0 ], A = 0, b = 0, P = 0; P < m; P++) {
                var O = e.charCodeAt(A++) << 24 | e.charCodeAt(A++) << 16 | e.charCodeAt(A++) << 8 | e.charCodeAt(A++), T = e.charCodeAt(A++) << 24 | e.charCodeAt(A++) << 16 | e.charCodeAt(A++) << 8 | e.charCodeAt(A++);
                O ^= (r = 252645135 & (O >>> 4 ^ T)) << 4, O ^= r = 65535 & ((T ^= r) >>> -16 ^ O), 
                O ^= (r = 858993459 & (O >>> 2 ^ (T ^= r << -16))) << 2, O ^= r = 65535 & ((T ^= r) >>> -16 ^ O), 
                O ^= (r = 1431655765 & (O >>> 1 ^ (T ^= r << -16))) << 1, O ^= r = 16711935 & ((T ^= r) >>> 8 ^ O), 
                r = (O ^= (r = 1431655765 & (O >>> 1 ^ (T ^= r << 8))) << 1) << 8 | 240 & (T ^= r) >>> 20, 
                O = T << 24 | 16711680 & T << 8 | 65280 & T >>> 8 | 240 & T >>> 24, T = r;
                for (var S = 0; S < E.length; S++) E[S] ? (O = O << 2 | O >>> 26, T = T << 2 | T >>> 26) : (O = O << 1 | O >>> 27, 
                T = T << 1 | T >>> 27), T &= -15, t = o[(O &= -15) >>> 28] | i[15 & O >>> 24] | a[15 & O >>> 20] | c[15 & O >>> 16] | s[15 & O >>> 12] | u[15 & O >>> 8] | l[15 & O >>> 4], 
                r = 65535 & ((n = f[T >>> 28] | p[15 & T >>> 24] | d[15 & T >>> 20] | h[15 & T >>> 16] | v[15 & T >>> 12] | _[15 & T >>> 8] | g[15 & T >>> 4]) >>> 16 ^ t), 
                y[b++] = t ^ r, y[b++] = n ^ r << 16;
            }
            return y;
        }
        function F(e, t, n, r, o, i) {
            var a, c, s, u, l, f, p, d, h, v, _, g, m, y, E = String.fromCharCode, A = [ 16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756 ], b = [ -2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344 ], P = [ 520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584 ], O = [ 8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928 ], T = [ 256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080 ], S = [ 536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312 ], R = [ 2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154 ], C = [ 268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696 ], w = V(e), k = 0, I = t.length, D = 0, x = 32 == w.length ? 3 : 9;
            d = 3 == x ? n ? [ 0, 32, 2 ] : [ 30, -2, -2 ] : n ? [ 0, 32, 2, 62, 30, -2, 64, 96, 2 ] : [ 94, 62, -2, 32, 64, 2, 30, -2, -2 ], 
            2 == i ? t += "        " : 1 == i ? (s = 8 - I % 8, t += E(s, s, s, s, s, s, s, s), 
            8 == s && (I += 8)) : !i && (t += "\0\0\0\0\0\0\0\0");
            var L = "", N = "";
            for (1 == r && (h = o.charCodeAt(k++) << 24 | o.charCodeAt(k++) << 16 | o.charCodeAt(k++) << 8 | o.charCodeAt(k++), 
            _ = o.charCodeAt(k++) << 24 | o.charCodeAt(k++) << 16 | o.charCodeAt(k++) << 8 | o.charCodeAt(k++), 
            k = 0); k < I; ) {
                for (f = t.charCodeAt(k++) << 24 | t.charCodeAt(k++) << 16 | t.charCodeAt(k++) << 8 | t.charCodeAt(k++), 
                p = t.charCodeAt(k++) << 24 | t.charCodeAt(k++) << 16 | t.charCodeAt(k++) << 8 | t.charCodeAt(k++), 
                1 == r && (n ? (f ^= h, p ^= _) : (v = h, g = _, h = f, _ = p)), f ^= (s = 252645135 & (f >>> 4 ^ p)) << 4, 
                f ^= (s = 65535 & (f >>> 16 ^ (p ^= s))) << 16, f ^= s = 858993459 & ((p ^= s) >>> 2 ^ f), 
                f ^= s = 16711935 & ((p ^= s << 2) >>> 8 ^ f), f = (f ^= (s = 1431655765 & (f >>> 1 ^ (p ^= s << 8))) << 1) << 1 | f >>> 31, 
                p = (p ^= s) << 1 | p >>> 31, c = 0; c < x; c += 3) {
                    for (m = d[c + 1], y = d[c + 2], a = d[c]; a != m; a += y) u = p ^ w[a], l = (p >>> 4 | p << 28) ^ w[a + 1], 
                    s = f, f = p, p = s ^ (b[63 & u >>> 24] | O[63 & u >>> 16] | S[63 & u >>> 8] | C[63 & u] | A[63 & l >>> 24] | P[63 & l >>> 16] | T[63 & l >>> 8] | R[63 & l]);
                    s = f, f = p, p = s;
                }
                p = p >>> 1 | p << 31, p ^= s = 1431655765 & ((f = f >>> 1 | f << 31) >>> 1 ^ p), 
                p ^= (s = 16711935 & (p >>> 8 ^ (f ^= s << 1))) << 8, p ^= (s = 858993459 & (p >>> 2 ^ (f ^= s))) << 2, 
                p ^= s = 65535 & ((f ^= s) >>> 16 ^ p), p ^= s = 252645135 & ((f ^= s << 16) >>> 4 ^ p), 
                f ^= s << 4, 1 == r && (n ? (h = f, _ = p) : (f ^= v, p ^= g)), N += E(f >>> 24, 255 & f >>> 16, 255 & f >>> 8, 255 & f, p >>> 24, 255 & p >>> 16, 255 & p >>> 8, 255 & p), 
                512 == (D += 8) && (L += N, N = "", D = 0);
            }
            return L + N;
        }
        function B(e) {
            var t, n, r, o, i, a, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for (r = e.length, n = 0, t = ""; n < r; ) {
                if (o = 255 & e.charCodeAt(n++), n == r) {
                    t += c.charAt(o >> 2), t += c.charAt((3 & o) << 4), t += "==";
                    break;
                }
                if (i = e.charCodeAt(n++), n == r) {
                    t += c.charAt(o >> 2), t += c.charAt((3 & o) << 4 | (240 & i) >> 4), t += c.charAt((15 & i) << 2), 
                    t += "=";
                    break;
                }
                a = e.charCodeAt(n++), t += c.charAt(o >> 2), t += c.charAt((3 & o) << 4 | (240 & i) >> 4), 
                t += c.charAt((15 & i) << 2 | (192 & a) >> 6), t += c.charAt(63 & a);
            }
            return t;
        }
        function K(e) {
            var t, n, r, o, i, a, c, s = String.fromCharCode, u = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1 ];
            for (a = e.length, i = 0, c = ""; i < a; ) {
                do {
                    t = u[255 & e.charCodeAt(i++)];
                } while (i < a && -1 == t);
                if (-1 == t) break;
                do {
                    n = u[255 & e.charCodeAt(i++)];
                } while (i < a && -1 == n);
                if (-1 == n) break;
                c += s(t << 2 | (48 & n) >> 4);
                do {
                    if (61 == (r = 255 & e.charCodeAt(i++))) return c;
                    r = u[r];
                } while (i < a && -1 == r);
                if (-1 == r) break;
                c += s((15 & n) << 4 | (60 & r) >> 2);
                do {
                    if (61 == (o = 255 & e.charCodeAt(i++))) return c;
                    o = u[o];
                } while (i < a && -1 == o);
                if (-1 == o) break;
                c += s((3 & r) << 6 | o);
            }
            return c;
        }
        function W(e, t) {
            var n = G().length;
            try {
                var r = $(F, K(e), "", 0).substr(0, n).split(","), o = Y(r[0]), i = null;
                return "function" == typeof o && (i = function(e) {
                    return $(o, e, r[2], r[1], r[3]);
                }), "W" + U(i, t);
            } catch (e) {
                return "W" + U(F, t);
            }
        }
        function Y(e) {
            var t = [ null, F ];
            return t[e] ? t[e] : null;
        }
        function q(e) {
            return new Promise(function(t) {
                var n = O(e), r = "https://" + te.apiHost + te.apiPath, o = H();
                j(o.deviceId, o.sign, o.timestamp, 0), M(r, {
                    organization: te.organization,
                    smdata: W(o.sign, n),
                    os: "weapp",
                    version: X
                }, function(e) {
                    try {
                        if (1100 == e.code) {
                            var n = e.deviceId || S() || te.deviceId || re.deviceId, r = e.detail ? e.detail.timestamp : "", o = e.detail ? e.detail.sign : "", i = e.detail ? e.detail.len : 0;
                            n && o && r && i && (R(n), j(n, o, r, i));
                        }
                    } catch (e) {}
                    t();
                });
            });
        }
        function z(e, t) {
            var n = e;
            try {
                return t && (n = e.sort(function(e, n) {
                    return 0 > e[t] - n[t];
                })), n.slice(0, 10);
            } catch (e) {
                return n.slice(0, 10);
            }
        }
        function J() {
            try {
                var e, t = te.authConf && !0 === te.authConf.location, n = P(), r = [ I(), D(), L(), N(), w() ];
                t && (r.push(x()), r.push(k())), Promise.all(r).then(function(r) {
                    try {
                        var o = {
                            accelerometer: z(r[0]),
                            compass: z(r[1]),
                            screenBright: r[2],
                            networkType: r[3],
                            connectedWifi: r[4]
                        };
                        t && (o.wifiList = z(r[5], "signalStrength"), o.location = r[6]), q(e = Object.assign(n, o));
                    } catch (e) {
                        q(n);
                    }
                }, function() {
                    q(n);
                });
            } catch (e) {}
        }
        var X = "2.0.0", Q = "2.0.12", Z = "smidV2", ee = {
            location: !1
        }, te = {
            appId: "default",
            channel: "",
            organization: "",
            apiHost: "fp-it.fengkongcloud.com",
            apiPath: "/v3/profile/weapp",
            authConf: JSON.parse(JSON.stringify(ee))
        }, ne = function() {
            var e = E() + m(A()) + "00";
            return e + m("smsk_weapp_" + e).substr(0, 14) + 0;
        }(), re = {
            key: y("%5B%A0%C0%DB%DD%E2%D2%CE"),
            deviceId: ne,
            timestamp: y("%3Eelollnmmnhck")
        }, oe = {
            sign: "",
            timestamp: "",
            deviceId: "",
            length: 0
        }, ie = +new Date(), ae = +new Date() + "-" + Math.floor(1e8 * Math.random());
        setTimeout(function() {
            q(P()).then(function() {
                try {
                    setTimeout(J, 2e3);
                } catch (e) {}
            });
            try {
                wx.startAccelerometer && wx.startAccelerometer(), wx.startCompass && wx.startCompass();
            } catch (e) {}
        }, 0), e.exports = {
            initConf: function(e) {
                (te = Object.assign({}, te, e)).authConf = Object.assign({}, ee, e.authConf || {});
            },
            getDeviceId: function() {
                var e = O(T());
                return W(G().sign, e);
            }
        };
    },
    "3d58": function(e, t, n) {
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.InvoiceTryOpenAction = void 0, t.InvoiceTryOpenAction = r, function(e) {
            e.APPLY = "do_apply", e.DISPLAY = "do_display", e.ERROR = "show_err", e.NOTICE = "show_notice";
        }(r || (t.InvoiceTryOpenAction = r = {}));
    },
    "3ea2": function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach(function(t) {
                        a(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function c(e) {
                return S.some(function(t) {
                    return e.includes(t);
                });
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(n("66fd")), u = r(n("4328")), l = r(n("0d69")), f = r(n("325d")), p = r(n("67c5")), d = n("6ddb"), h = n("204d"), v = r(n("eb8e")), _ = n("8288"), g = n("1cf5"), m = n("c6a3"), y = r(n("c78f")), E = r(n("0613")), A = n("27a2"), b = r(n("b7c7")), P = r(n("0031")), O = r(n("f33d")), T = function(e) {
                return {
                    "ddmc-api-version": e.api_version,
                    "ddmc-app-client-id": e.app_client_id,
                    "ddmc-build-version": e.app_version,
                    "ddmc-channel": e.channel,
                    "ddmc-city-number": e.city_number,
                    "ddmc-device-id": e.openid,
                    "ddmc-ip": "",
                    "ddmc-latitude": e.latitude,
                    "ddmc-longitude": e.longitude,
                    "ddmc-os-version": e.system,
                    "ddmc-station-id": e.station_id,
                    "ddmc-uid": e.uid,
                    "ddmc-time": e.time
                };
            }, S = [ "maicai.api", "gw.api" ];
            t.default = function(t) {
                var n = new l.default({
                    headers: t.headers || {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    baseUrl: t.baseUrl || "/",
                    timeout: t.timeout || 3e5,
                    errorCode: new P.default()
                });
                n.interceptor.request.use(function(e) {
                    var r, o, a, u, l, g, m, P = e;
                    if (_.isDev) {
                        var S = b.default.load({
                            key: p.default.MOCK_COLLECTION_ID
                        }), R = b.default.load({
                            key: p.default.MOCK_AUTH_CODE
                        });
                        S && ("user/checkLogin" !== P.url ? (P.headers["ddmc-mock-origin-host"] = t.baseUrl, 
                        P.headers["ddmc-mock-auth-code"] = R, P.headers["ddmc-mock-collection-id"] = S, 
                        n.setBaseUrl("http://mock-api-service.t.dingdongxiaoqu.com/mock-api-service/")) : (delete P.headers["ddmc-mock-origin-host"], 
                        n.setBaseUrl(t.baseUrl || "")));
                    }
                    var C = (null === (r = s.default.prototype.$store.state) || void 0 === r ? void 0 : r.user) || {}, w = C.userInfo, k = void 0 === w ? {} : w, I = C.userAuthInfo, D = void 0 === I ? {} : I, x = C.appDeviceToken, L = void 0 === x ? "" : x, N = (null === (o = s.default.prototype.$store.state) || void 0 === o ? void 0 : o.globalData) || {}, j = N.locationInfo, G = void 0 === j ? {} : j, H = N.h5_source, M = void 0 === H ? "" : H, U = N.domainServiceConfig, $ = void 0 === U ? [] : U, V = (0, 
                    d.isObjectEmpty)(D) ? b.default.load({
                        key: p.default.USER_AUTH_INFO
                    }) || {} : D, F = V.sessionId, B = void 0 === F ? "" : F, K = V.openId, W = void 0 === K ? "" : K, Y = (0, 
                    d.isObjectEmpty)(G) ? b.default.load({
                        key: p.default.LOCATION
                    }) || {} : G, q = Y.location, z = void 0 === q ? {} : q, J = Y.station_id, X = void 0 === J ? "" : J, Q = Y.city_number, Z = void 0 === Q ? "" : Q, ee = (0, 
                    d.isObjectEmpty)(k) ? b.default.load({
                        key: p.default.USER_INFO
                    }) || {} : k, te = ee.uid, ne = void 0 === te ? "" : te, re = ee.id, oe = void 0 === re ? "" : re, ie = y.default.SERVER_API_GATEWAY();
                    $.length && $.includes(t.baseUrl) ? n.baseUrl !== ie && n.setBaseUrl(ie) : n.baseUrl !== t.baseUrl && n.setBaseUrl(t.baseUrl);
                    var ae = (null === (a = s.default.prototype.$store.state) || void 0 === a ? void 0 : a.globalData) || {}, ce = ae.wxGwStatus, se = ae.wxGwWhiteList, ue = void 0 === se ? [] : se;
                    if ("1" === ce && !P.ignoreWxGw && (null === (u = wx) || void 0 === u || null === (l = u.cloud) || void 0 === l ? void 0 : l.callContainer)) {
                        var le = /\/\/(\S*)\//, fe = n.baseUrl.match(le)[1];
                        ue.includes(fe) && (P.wxGw = !0, P.headers["X-WX-EXCLUDE-CREDENTIALS"] = "unionid, cloudbase-access-token, openid", 
                        P.headers["X-WX-GATEWAY-ID"] = "ddmc-prod-3gv9o1xh9f6a1618", P.headers.HOST = fe);
                    }
                    P.headers.Cookie = "DDXQSESSID=".concat(B), P.headers["ddmc-SDKVersion"] = v.default.SDKVersion;
                    var pe = ((null === (g = s.default.prototype.$store.state) || void 0 === g ? void 0 : g.cart) || {}).flashSaleInfo, de = (void 0 === pe ? {} : pe).flash_sale_token, he = void 0 === de ? "" : de;
                    he && (P.headers.flash_sale_token = he);
                    var ve = {
                        longitude: z && z.location && z.location[0] || 0,
                        latitude: z && z.location && z.location[1] || 0,
                        station_id: X || "5500fe01916edfe0738b4e43",
                        city_number: Z
                    }, _e = i(i(i({
                        uid: ne || oe
                    }, ve), f.default), {}, {
                        sharer_uid: "",
                        s_id: B,
                        openid: W,
                        h5_source: M,
                        time: d.timeUtil.getCurrentTime()
                    });
                    if (O.default && O.default.getDeviceId) try {
                        var ge = L || O.default.getDeviceId();
                        _e.device_token = ge;
                        var me = [ A.DEVICE_SCENE.INVITE_GIFT_ACCEPT, A.DEVICE_SCENE.LOGIN ];
                        (E.default.state.user.isLogin || me.includes(P.scene)) && (delete P.data.uploadSmDeivceToken, 
                        O.default.uploadSMDeviceId(P.scene), O.default.uploadPageDeviceId("/".concat(P.url)));
                    } catch (e) {
                        console.log("树美SDK错误 ", e);
                    }
                    return c(n.baseUrl) && (P.headers = i(i({}, P.headers), T(_e))), n.baseUrl.includes("farm.api") && (P.headers = i(i({}, P.headers), {}, {
                        "DDMC-GAME-TID": e.data.gameId || 1
                    })), P.data = i(i(i({}, _e), P.data), (0, h.signObj)(i(i({}, P.data), _e)) || {}), 
                    P.preFetchList = (null === (m = s.default.prototype.$store.state.globalData) || void 0 === m ? void 0 : m.preFetchList) || [], 
                    P;
                });
                var r = 0;
                return n.interceptor.response.use(function(e) {
                    var n, o, a, c = e.request, u = e.data, l = e.error, f = e.showMsg;
                    if (!(null === c || void 0 === c ? void 0 : c.isPreFetch)) {
                        (null === e || void 0 === e ? void 0 : e.server_time) && d.timeUtil.updateServerTime(e.server_time);
                        var p = d.timeUtil.getCurrentTimeMs(), h = (null === e || void 0 === e || null === (n = e.response) || void 0 === n ? void 0 : n.header) || (null === e || void 0 === e || null === (o = e.response) || void 0 === o ? void 0 : o.headers);
                        h && (h["x-app-config"] || h["X-APP-Config"]) && (h["x-app-config"] || h["X-APP-Config"]).split(";").forEach(function(e) {
                            if (0 === e.indexOf("gv=")) {
                                var t = Number(e.split("=")[1] || 0), n = Number(s.default.prototype.$store.state.globalData.configVersion);
                                if (n && t && n !== t) {
                                    var o = d.timeUtil.getCurrentTimeMs();
                                    o - r > 3e3 && (r = o, s.default.prototype.$getGlobalConfig());
                                }
                            }
                        });
                        var v = s.default.prototype.$store.state.globalData, y = v.maicaiAppConfig, E = void 0 === y ? {} : y, A = v.isGotoLoginPage, b = void 0 !== A && A, P = (E || {}).antiClimb, O = (void 0 === P ? {} : P) || {}, T = O.isOpen, S = void 0 !== T && T, R = O.wxUrl, C = void 0 === R ? "" : R, w = 0;
                        w = null === e || void 0 === e || null === (a = e.response) || void 0 === a ? void 0 : a.statusCode, 
                        S && 405 === w && !s.default.prototype.$store.state.user.isLogin && (b || (s.default.prototype.$store.commit("globalData/update", {
                            isGotoLoginPage: !0
                        }), C ? s.default.prototype.$open({
                            url: C
                        }) : setTimeout(function() {
                            s.default.prototype.$gotoLogin();
                        }, 1500), setTimeout(function() {
                            s.default.prototype.$store.commit("globalData/update", {
                                isGotoLoginPage: !1
                            });
                        }, 1e4)));
                        var k = u && 0 === u.code ? u : e, I = e.request_id || h && h["X-ROOT-MESSAGE-ID"];
                        if (f && k && "success" in k && !k.success && s.default.prototype.$toast && s.default.prototype.$toast(e.msg || e.message), 
                        !_.isDev) {
                            var D, x, L, N = c.method, j = c.url, G = c.eventStartTime, H = c.data, M = c.wxGw, U = c.wxGwError, $ = G ? p - (G - 1e3 * d.timeUtil.getDiffTime()) : 0, V = $ > 3e4 ? 408 : -100, F = (s.default.prototype.$store.state.globalData || []).logConfigData, B = (void 0 === F ? [] : F).find(function(e) {
                                return 8 === (null === e || void 0 === e ? void 0 : e.logType);
                            }) || {}, K = B.status, W = void 0 === K ? void 0 : K, Y = B.topic, q = void 0 === Y ? "APPMONITOR" : Y, z = B.apiWhiteList, J = void 0 === z ? [] : z, X = B.otherList, Q = void 0 === X ? {} : X, Z = B.blackCode, ee = void 0 === Z ? [] : Z, te = J.includes("/".concat(j)), ne = e.code || 0 === e.code ? e.code : -2, re = q;
                            if (null === ee || void 0 === ee ? void 0 : ee.includes("".concat(ne))) return l || k;
                            if (Q && (null === Q || void 0 === Q ? void 0 : Q.code) && (null === Q || void 0 === Q ? void 0 : Q.code.length) && (null === Q || void 0 === Q ? void 0 : Q.code.includes("".concat(ne)))) {
                                if (null === Q || void 0 === Q ? void 0 : Q.shieldTime) {
                                    for (var oe = new Date().getHours() + new Date().getMinutes() / 100, ie = !1, ae = 0; ae < (null === Q || void 0 === Q || null === (ce = Q.shieldTime) || void 0 === ce ? void 0 : ce.length); ae++) {
                                        var ce, se = null === Q || void 0 === Q ? void 0 : Q.shieldTime[ae].replace(/:/g, ".").split("～");
                                        if (oe >= Number(se[0]) && oe <= Number(se[1])) {
                                            ie = !0;
                                            break;
                                        }
                                    }
                                    if (ie) return l || k;
                                }
                                (null === Q || void 0 === Q ? void 0 : Q.topic) && (re = null === Q || void 0 === Q ? void 0 : Q.topic);
                            }
                            switch (W) {
                              case 0:
                                return l || k;

                              case 1:
                                if (!te && $ < 1e3 && 0 !== $ && e.success) return l || k;
                            }
                            var ue = "", le = "";
                            m.WHITE_MONITOR_RESPONSE_DATA.indexOf(j) > -1 && (ue = JSON.stringify(u || {})), 
                            (m.WHITE_MONITOR_REQUEST_DATA.indexOf(j) > -1 || !e.success || te) && (le = JSON.stringify(H || {}));
                            var fe = {
                                URL: "".concat(t.baseUrl).concat(j),
                                Method: N,
                                EventTimeStamp: d.timeUtil.getCurrentTimeMs(),
                                TimeCost: $,
                                HttpCode: e.response ? e.response.statusCode || e.response.status || -100 : V,
                                ResponseCode: ne,
                                Success: !!e.success,
                                ResponseData: ue,
                                RequestData: le,
                                ProtocolName: M ? "WxGw" : "Http",
                                RequestId: (null === e || void 0 === e || null === (D = e.response) || void 0 === D ? void 0 : D.callID) || "",
                                ErrorMsg: U ? "WxGw" : (null === e || void 0 === e || null === (x = e.response) || void 0 === x || null === (L = x.data) || void 0 === L ? void 0 : L.msg) || ""
                            };
                            (0, g.monitorRequest)(i(i(i({
                                KEY: re || "APPMONITOR"
                            }, s.default.prototype.$store.getters.monitorInit || {}), fe), {}, {
                                ReportedKey: "request",
                                ReportedVal: I || ""
                            }));
                        }
                        return l || k;
                    }
                }), {
                    get: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
                        return n.request(i({
                            method: "GET",
                            url: e,
                            data: t,
                            showData: t.showData,
                            showMsg: "boolean" != typeof t.showMsg || t.showMsg
                        }, r || {}));
                    },
                    post: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
                        return n.request(i({
                            method: "POST",
                            url: e,
                            data: t,
                            showData: t.showData,
                            showMsg: "boolean" != typeof t.showMsg || t.showMsg
                        }, r || {}));
                    },
                    form: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = (arguments.length > 2 && arguments[2], 
                        document.createElement("form"));
                        n.action = e, n.method = "POST", Object.keys(t).forEach(function(e) {
                            var r = document.createElement("input");
                            r.type = "hidden", r.name = e, r.value = t[e], n.appendChild(r);
                        }), document.body.appendChild(n);
                        try {
                            n.submit();
                        } catch (e) {}
                        document.body.removeChild(n);
                    },
                    log: function(t, n) {
                        var r = "".concat(t, "?").concat(u.default.stringify(n));
                        e.request({
                            url: r,
                            dataType: "base64",
                            enableHttp2: !0
                        });
                    },
                    setUrl: function(e) {
                        n.setBaseUrl(e);
                    }
                };
            };
        }).call(this, n("543d").default);
    },
    "3f46": function(e, t, n) {
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getTranckMap = t.trackmap = void 0;
        var o, i = n("c8cf"), a = (o = {}, r(o, i.NOTICE_ID.ORDER_SEND, "ORDER_SEND"), r(o, i.NOTICE_ID.ORDER_CANCEL, "ORDER_SEND"), 
        r(o, i.NOTICE_ID.ORDER_SUCC, "ORDER_SEND"), r(o, i.NOTICE_ID.ATY_HELP_NOTICE, "ATY_HELP_NOTICE"), 
        r(o, i.NOTICE_ID.ATY_HELP_SUCC, "ATY_HELP_NOTICE"), r(o, i.NOTICE_ID.INVITE_SUCCESS, "INVITE_SUCCESS"), 
        r(o, i.NOTICE_ID.COUPONS_OVER_DATE, "COUPONS_OVER_DATE"), r(o, i.NOTICE_ID.PRODUCT_ARRIVE, "PRODUCT_ARRIVE"), 
        r(o, i.NOTICE_ID.PACKET_EXPIRED, "PACKET_EXPIRED"), o);
        t.trackmap = a;
        var c = {
            PACKET_EXPIRED: {
                exposure: "coupon_widget",
                accept: "coupon_widget_yes",
                reject: "coupon_widget_no",
                always: "coupon_widget_always",
                module_type: "优惠券临期"
            },
            PRODUCT_ARRIVE: {
                exposure: "arrival_widget",
                accept: "arrival_widget_yes",
                reject: "arrival_widget_no",
                always: "arrival_widget_always",
                module_type: "到货提醒"
            },
            ORDER_SEND: {
                exposure: "orderstatus_widget",
                accept: "orderstatus_widget_yes",
                reject: "orderstatus_widget_no",
                always: "orderstatus_widget_always",
                module_type: "订单动态"
            },
            ATY_HELP_NOTICE: {
                exposure: "help_free_widget",
                accept: "help_free_widget_yes",
                reject: "help_free_widget_no",
                always: "help_free_widget_always",
                module_type: "助力领免费菜"
            },
            INVITE_SUCCESS: {
                exposure: "invite_new_widget",
                accept: "invite_new_widget_yes",
                reject: "invite_new_widget_no",
                always: "invite_new_widget_always",
                module_type: "邀请新客"
            },
            COUPONS_OVER_DATE: {
                exposure: "buy_coupon_widget",
                accept: "buy_coupon_widget_yes",
                reject: "buy_coupon_widget_no",
                always: "buy_coupon_widget_always",
                module_type: "优惠券临期"
            }
        };
        t.getTranckMap = function(e) {
            return c[e] || {};
        };
    },
    "403e": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = r(n("66fd")), s = n("1cf5"), u = n("03ed"), l = r(n("eb8e")), f = n("f14d"), p = n("6ddb"), d = n("c8cf"), h = r(n("f33d")), v = c.default.extend({
            onLaunch: function(e) {
                e && (this.pointMethod(e), this.$store.state.globalData.options = i(i({}, e), {}, {
                    launchTime: Date.parse(new Date()) / 1e3
                }));
            },
            onLoad: function(e) {},
            onShow: function(e) {
                var t, n, r = this;
                if (e) try {
                    var o, i = e.scene, c = e.path, s = (o = {}, a(o, f.PATH.PAGE_USER_COUPON, {
                        pageid: "messageModule",
                        cid: "coupon_message",
                        aid: "click",
                        ad_id: "".concat(d.NOTICE_ID.PACKET_EXPIRED),
                        module_type: "优惠券临期"
                    }), a(o, f.PATH.PAGE_GIFT_EARN, {
                        pageid: "messageModule",
                        cid: "invite_new_message",
                        aid: "click",
                        ad_id: "".concat(d.NOTICE_ID.INVITE_SUCCESS),
                        module_type: "邀请新客"
                    }), a(o, f.OLD_PATH.PAGE_GIFT_EARN, {
                        pageid: "messageModule",
                        cid: "invite_new_message",
                        aid: "click",
                        ad_id: "".concat(d.NOTICE_ID.INVITE_SUCCESS),
                        module_type: "邀请新客"
                    }), a(o, f.PATH.PAGE_ORDER_DETAIL, {
                        pageid: "messageModule",
                        cid: "orderstatus_message",
                        aid: "click",
                        ad_id: "".concat(d.NOTICE_ID.ORDER_SEND, ",").concat(d.NOTICE_ID.ORDER_CANCEL, ",").concat(d.NOTICE_ID.ORDER_SUCC),
                        module_type: "订单动态"
                    }), a(o, f.OLD_PATH.PAGE_PRODUCT_DETAIL, {
                        pageid: "messageModule",
                        cid: "arrival_message",
                        aid: "click",
                        ad_id: d.NOTICE_ID.PRODUCT_ARRIVE,
                        module_type: "到货提醒"
                    }), a(o, f.PATH.PAGE_SHARE_HELP_HOME, {
                        pageid: "messageModule",
                        cid: "help_free_message",
                        aid: "click",
                        ad_id: "".concat(d.NOTICE_ID.ATY_HELP_NOTICE, ",").concat(d.NOTICE_ID.ATY_HELP_SUCC),
                        module_type: "助力领免费菜"
                    }), a(o, f.PATH.PAGE_SHARE_HELP_ATY_LIST, {
                        pageid: "messageModule",
                        cid: "help_free_message",
                        aid: "click",
                        ad_id: "".concat(d.NOTICE_ID.ATY_HELP_NOTICE, ",").concat(d.NOTICE_ID.ATY_HELP_SUCC),
                        module_type: "助力领免费菜"
                    }), o);
                    if (1014 === i) {
                        var u = s["/".concat(c)];
                        this.$track({
                            key: "isGlobal/tempExp",
                            eventType: "click",
                            other: {
                                template_id: u.ad_id,
                                module_type: u.module_type
                            }
                        });
                    }
                } catch (e) {}
                this.setCartRedNumber();
                (function e() {
                    var t = r.$store.state.user.userAuthInfo.openId;
                    t ? r.$store.commit("globalData/update", {
                        pvId: "".concat(t, "-").concat(new Date().getTime())
                    }) : setTimeout(function() {
                        e();
                    });
                })(), !this.isCrash && l.default.isApp && (0, p.versionCompare)(l.default.appVersion, "9.26.1") >= 0 && this.$bridge.trackParam({
                    page_id: this.$options.name
                });
                var v, _ = getCurrentPages();
                if (_.length > 0) {
                    var g = _[_.length - 1];
                    f.IGNORE_CURRENT_PATH.includes("/".concat(g.route)), f.IGNORE_CURRENT_PATH.includes("/".concat(g.route)) || this.$store.commit("globalData/update", {
                        currentRoute: "/".concat(g.route)
                    });
                }
                (null === (t = this.$store.state) || void 0 === t || null === (n = t.user) || void 0 === n ? void 0 : n.isLogin) && h.default.uploadPageDeviceId(null === this || void 0 === this || null === (v = this.$options) || void 0 === v ? void 0 : v.name);
            },
            onHide: function() {
                setTimeout(function() {
                    (0, s.forceUploadAllMonitor)();
                }, 2e3), this.$store.commit("confirm/close"), this.$store.commit("batchAlert/setBatchAlertShow", !1), 
                this.$store.commit("dimensionAlert/setDimensionAlertShow", !1), this.$store.dispatch("sizeAlert/setSizeAlertInfo", {
                    showSizeAlert: !1
                });
            },
            onUnload: function() {
                this.$store.commit("confirm/close"), this.$store.commit("batchAlert/setBatchAlertShow", !1), 
                this.$store.commit("dimensionAlert/setDimensionAlertShow", !1), this.$store.dispatch("sizeAlert/setSizeAlertInfo", {
                    showSizeAlert: !1
                });
            },
            computed: {
                isCrash: function() {
                    return this.$store.state.globalData.isCrash;
                },
                locationReady: function() {
                    return this.$store.state.globalData.locationReady;
                }
            },
            methods: {
                setCartRedNumber: function() {
                    var e = this;
                    this.$nextTick(function() {
                        var t = e.$store.state.cart.totalCount;
                        0 === t ? (0, s.removeTabBarBadge)({
                            index: 3
                        }) : (0, s.setTabBarBadge)({
                            index: 3,
                            text: "".concat(t > 99 ? "99+" : t)
                        });
                    });
                },
                pointMethod: function(e) {
                    e && e.query && this.pointOptions(e.query), e && e.scene && this.$store.state.globalData.scene !== e.scene && (this.$store.state.globalData.scene = e.scene);
                },
                pointOptions: function(e) {
                    var t = e.s_share_id, n = e.s, r = e.source, o = e.h5_source, i = e.scene, a = e.ali_source, c = e.isNative, s = e.previewCode, u = e.wx_source;
                    t && this.$store.state.globalData.s_share_id !== t && (this.$store.state.globalData.s_share_id = t), 
                    n && this.$store.state.globalData.s !== n && (this.$store.state.globalData.s = n), 
                    r && this.$store.state.globalData.source !== r && (this.$store.state.globalData.source = r), 
                    i && this.$store.state.globalData.sceneId !== i && (this.$store.state.globalData.sceneId = i), 
                    o && this.$store.state.globalData.h5_source !== o && (this.$store.state.globalData.h5_source = o), 
                    u && this.$store.state.globalData.wx_source !== u && (this.$store.state.globalData.wx_source = u), 
                    a && !this.$store.state.globalData.ali_source && (this.$store.state.globalData.ali_source = a), 
                    c && this.$store.state.globalData.isNative !== c && (this.$store.state.globalData.isNative = c), 
                    s && this.$store.state.globalData.aliPreviewCode !== s && (this.$store.state.globalData.aliPreviewCode = s);
                },
                eventListenerApp: function(e, t, n) {
                    this.$bridge.events(ENUMS_NEW_BRIDGE_EVENTS[e], t, {
                        lock: !!n
                    });
                },
                removeEventListenerApp: function(e) {
                    u.event.unsubscribe(e);
                },
                commitProductImgInfo: function(e, t) {
                    var n = e.small_image, r = e.id, o = n.replace(/\?.+$/, "").replace(/!.+$/, "");
                    this.$store.commit("globalData/update", {
                        productImgInfo: {
                            id: r,
                            width: t,
                            smallImage: n,
                            cacheSrc: "".concat(o, "?imageView2/2/w/").concat(t, "/h/").concat(t, "/q/60")
                        }
                    });
                },
                goto: function(e, t, n) {
                    this.$open({
                        url: f.PATH[e],
                        params: t,
                        type: n
                    });
                }
            }
        });
        t.default = v;
    },
    4127: function(e, t, n) {
        var r = n("d233"), o = n("b313"), i = Object.prototype.hasOwnProperty, a = {
            brackets: function(e) {
                return e + "[]";
            },
            comma: "comma",
            indices: function(e, t) {
                return e + "[" + t + "]";
            },
            repeat: function(e) {
                return e;
            }
        }, c = Array.isArray, s = Array.prototype.push, u = function(e, t) {
            s.apply(e, c(t) ? t : [ t ]);
        }, l = Date.prototype.toISOString, f = o.default, p = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: r.encode,
            encodeValuesOnly: !1,
            format: f,
            formatter: o.formatters[f],
            indices: !1,
            serializeDate: function(e) {
                return l.call(e);
            },
            skipNulls: !1,
            strictNullHandling: !1
        }, d = function(e) {
            return "string" == typeof e || "number" == typeof e || "boolean" == typeof e || "symbol" === (void 0 === e ? "undefined" : _typeof(e)) || "bigint" == typeof e;
        }, h = function e(t, n, o, i, a, s, l, f, h, v, _, g, m) {
            var y = t;
            if ("function" == typeof l ? y = l(n, y) : y instanceof Date ? y = v(y) : "comma" === o && c(y) && (y = y.join(",")), 
            null === y) {
                if (i) return s && !g ? s(n, p.encoder, m, "key") : n;
                y = "";
            }
            if (d(y) || r.isBuffer(y)) return s ? [ _(g ? n : s(n, p.encoder, m, "key")) + "=" + _(s(y, p.encoder, m, "value")) ] : [ _(n) + "=" + _(String(y)) ];
            var E, A = [];
            if (void 0 === y) return A;
            if (c(l)) E = l; else {
                var b = Object.keys(y);
                E = f ? b.sort(f) : b;
            }
            for (var P = 0; P < E.length; ++P) {
                var O = E[P];
                a && null === y[O] || (c(y) ? u(A, e(y[O], "function" == typeof o ? o(n, O) : n, o, i, a, s, l, f, h, v, _, g, m)) : u(A, e(y[O], n + (h ? "." + O : "[" + O + "]"), o, i, a, s, l, f, h, v, _, g, m)));
            }
            return A;
        }, v = function(e) {
            if (!e) return p;
            if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw new TypeError("Encoder has to be a function.");
            var t = e.charset || p.charset;
            if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = o.default;
            if (void 0 !== e.format) {
                if (!i.call(o.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                n = e.format;
            }
            var r = o.formatters[n], a = p.filter;
            return ("function" == typeof e.filter || c(e.filter)) && (a = e.filter), {
                addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
                allowDots: void 0 === e.allowDots ? p.allowDots : !!e.allowDots,
                charset: t,
                charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
                delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
                encode: "boolean" == typeof e.encode ? e.encode : p.encode,
                encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
                encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
                filter: a,
                formatter: r,
                serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
                skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
                sort: "function" == typeof e.sort ? e.sort : null,
                strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
            };
        };
        e.exports = function(e, t) {
            var n, r, o = e, i = v(t);
            "function" == typeof i.filter ? (r = i.filter, o = r("", o)) : c(i.filter) && (r = i.filter, 
            n = r);
            var s, l = [];
            if ("object" !== (void 0 === o ? "undefined" : _typeof(o)) || null === o) return "";
            s = t && t.arrayFormat in a ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
            var f = a[s];
            n || (n = Object.keys(o)), i.sort && n.sort(i.sort);
            for (var p = 0; p < n.length; ++p) {
                var d = n[p];
                i.skipNulls && null === o[d] || u(l, h(o[d], d, f, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.formatter, i.encodeValuesOnly, i.charset));
            }
            var _ = l.join(i.delimiter), g = !0 === i.addQueryPrefix ? "?" : "";
            return i.charsetSentinel && ("iso-8859-1" === i.charset ? g += "utf8=%26%2310003%3B&" : g += "utf8=%E2%9C%93&"), 
            _.length > 0 ? g + _ : "";
        };
    },
    4328: function(e, t, n) {
        var r = n("4127"), o = n("9e6a"), i = n("b313");
        e.exports = {
            formats: i,
            parse: o,
            stringify: r
        };
    },
    4362: function(e, t, n) {
        t.nextTick = function(e) {
            var t = Array.prototype.slice.call(arguments);
            t.shift(), setTimeout(function() {
                e.apply(null, t);
            }, 0);
        }, t.platform = t.arch = t.execPath = t.title = "browser", t.pid = 1, t.browser = !0, 
        t.env = {}, t.argv = [], t.binding = function(e) {
            throw new Error("No such module. (Possibly not yet loaded)");
        }, function() {
            var e, r = "/";
            t.cwd = function() {
                return r;
            }, t.chdir = function(t) {
                e || (e = n("df7c")), r = e.resolve(t, r);
            };
        }(), t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function() {}, 
        t.features = {};
    },
    "444a": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("325d")), o = {
            monitorInit: function(e) {
                var t = e.user, n = void 0 === t ? {} : t, o = e.globalData, i = void 0 === o ? {} : o, a = n.userAuthInfo, c = (void 0 === a ? {} : a).openId, s = void 0 === c ? "" : c, u = i.sys, l = void 0 === u ? {} : u, f = i.trace_id, p = void 0 === f ? "" : f, d = i.locationInfo, h = void 0 === d ? {} : d, v = l.SDKVersion, _ = void 0 === v ? "" : v, g = l.version, m = void 0 === g ? "" : g, y = l.model, E = void 0 === y ? "" : y, A = l.system, b = void 0 === A ? "" : A, P = l.brand, O = void 0 === P ? "" : P, T = h.city_number, S = void 0 === T ? "" : T, R = h.station_id, C = void 0 === R ? "" : R, w = r.default.app_client_id;
                return {
                    Method: "GET",
                    ResponseCode: -2,
                    StationId: C,
                    CityId: S,
                    Success: !1,
                    Version: r.default.app_version,
                    ClientType: {
                        3: "WechatM",
                        4: "WeApplet",
                        10: "AliApplet"
                    }[w],
                    Uid: n.userInfo.id,
                    H5TraceId: p,
                    SDKVersion: _,
                    EnvVersion: m,
                    SystemModel: E,
                    OSVersion: b,
                    DeviceBrand: O,
                    DeviceId: s
                };
            }
        };
        t.default = o;
    },
    "452f": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getQuestionByCategoryPage = t.getQuestionCategories = t.getRemindOrder = t.apiPostOrderChangeCall = t.apiGetUserAvatarList = t.apiUpdateUserInfo = t.apiGiftcardConsume = t.apiGiftcardTopup = t.apiLogoff = t.apiSetPaymentPassword = t.apiSmsCheck = t.apiSmsSend = t.apiUpdateReserveTime = t.apiGetSimilarImg = t.apiNewGetRegularBuy = t.apiGetRegularBuy = t.apiGetOrderLogistics = t.apiGetAskAndQuestion = t.apiPostFeedback = t.apiGetUserScore = t.apiSendSMS = t.apiPostRefundReserveTime = t.apiPostPintuanReserveTime = t.apiPostOrderReserveTime = t.apiPostBatchCompute = t.apiRuleCheck = t.apiGoodsArbitrate = t.apiGoodsConfirm = t.apiGoodsInfos = t.apiPostWholeRefundApply = t.apiPostWholeRefundInfo = t.apiSetOffRefund = t.apiGetRefundDetail = t.apiRefundCheck = t.apiPostRefundApply = t.apiPostRefundInfo = t.apiGetRefundList = t.apiGetRefundOrders = t.apiPostCommentInfoNew = t.apiPostCommentAddAll = t.apiExchangeDetail = t.apiExchangeList = t.apiHasExchangeOrder = t.apiGetOperatorLocation = t.apiPostOrderDetail = t.apiOrderCancelReasons = t.apiPostOrderReminder = t.apiPostOrderDelete = t.apiPostOrderCancel = t.apiPostOrderRepay = t.apiPostHistoryOrder = t.apiPostOrderListEvaluate = t.apiPostOrderListGoods = t.apiPostOrderListNo = t.apiPostOrderList = t.apiSubmitFormId = t.apiGetUserVipAd = t.apiGetUserDetail = t.apiLogout = t.apiGetOrders = t.apiGetUserInfo = void 0;
        var r = n("27a2"), o = n("5ee7");
        t.apiGetUserInfo = function(e) {
            return o.http.get("user/info", e);
        };
        t.apiGetOrders = function(e) {
            return o.http.get("order/list", e);
        };
        t.apiLogout = function() {
            return o.http.post("user/logout", {});
        };
        t.apiGetUserDetail = function(e) {
            return o.pythonHttp.get("api/v1/user/detail/", e);
        };
        t.apiGetUserVipAd = function(e) {
            return o.http.get("vip/getVipAd/", e);
        };
        t.apiSubmitFormId = function(e) {
            return o.http.post("user/uploadFormId", {
                form_id: e
            });
        };
        t.apiPostOrderList = function(e) {
            return o.http.post("order/list", e);
        };
        t.apiPostOrderListNo = function(e) {
            return o.http.post("order/notPayList", e);
        };
        t.apiPostOrderListGoods = function(e) {
            return o.http.post("order/doingList", e);
        };
        t.apiPostOrderListEvaluate = function(e) {
            return o.http.post("order/evaluateList", e);
        };
        t.apiPostHistoryOrder = function(e) {
            return o.http.post("order/listHistory", e);
        };
        t.apiPostOrderRepay = function(e) {
            return o.http.post("order/repay", e, {
                scene: r.DEVICE_SCENE.REPAY
            });
        };
        t.apiPostOrderCancel = function(e) {
            return o.http.post("order/cancel", e);
        };
        t.apiPostOrderDelete = function(e) {
            return o.http.post("order/delete", e);
        };
        t.apiPostOrderReminder = function(e) {
            return o.http.post("order/reminder", e, {
                showMsg: !1
            });
        };
        t.apiOrderCancelReasons = function(e) {
            return o.http.post("order/cancelReasons", e);
        };
        t.apiPostOrderDetail = function(e) {
            return o.http.post("order/orderDetailForSplit", e);
        };
        t.apiGetOperatorLocation = function(e) {
            return o.http.post("order/operatorLocation", e);
        };
        t.apiHasExchangeOrder = function() {
            return o.http.get("order/aggregation/exchange/hasExchangeOrder");
        };
        t.apiExchangeList = function(e) {
            return o.http.get("order/aggregation/exchange/list", e);
        };
        t.apiExchangeDetail = function(e) {
            return o.http.get("order/aggregation/exchange/detail", e);
        };
        t.apiPostCommentAddAll = function(e) {
            return o.http.post("comment/AddComment", e);
        };
        t.apiPostCommentInfoNew = function(e) {
            return o.http.post("comment/infoNew", e);
        };
        t.apiGetRefundOrders = function(e) {
            return o.http.get("refund/orders", e);
        };
        t.apiGetRefundList = function(e) {
            return o.http.get("refund/list", e);
        };
        t.apiPostRefundInfo = function(e) {
            return o.http.post("refund/info", e);
        };
        t.apiPostRefundApply = function(e) {
            return o.http.post("refund/apply", e);
        };
        t.apiRefundCheck = function(e) {
            return o.http.get("refund/check", e);
        };
        t.apiGetRefundDetail = function(e) {
            return o.http.get("refund/detail", e);
        };
        t.apiSetOffRefund = function(e) {
            return o.http.post("refund/applyWithdraw", e);
        };
        t.apiPostWholeRefundInfo = function(e) {
            return o.http.post("refund/batch-info", e);
        };
        t.apiPostWholeRefundApply = function(e) {
            return o.http.post("refund/batch-apply", e);
        };
        t.apiGoodsInfos = function(e) {
            return o.http.get("refund/task/part/info", e);
        };
        t.apiGoodsConfirm = function(e) {
            return o.http.post("refund/task/part/confirm", e);
        };
        t.apiGoodsArbitrate = function(e) {
            return o.http.post("refund/task/part/arbitrate", e);
        };
        t.apiRuleCheck = function(e) {
            return o.http.post("refund/rule/check", e, {
                showMsg: !1
            });
        };
        t.apiPostBatchCompute = function(e) {
            return o.http.post("refund/batch-compute", e);
        };
        t.apiPostOrderReserveTime = function(e) {
            return o.http.post("order/getReserveTime", e);
        };
        t.apiPostPintuanReserveTime = function(e) {
            return o.http.post("groupon/getReserveTime", e);
        };
        t.apiPostRefundReserveTime = function(e) {
            return o.http.post("refund/getVisitTime", e);
        };
        t.apiSendSMS = function(e) {
            return o.http.post("weixinAppletApi/sendSms", e);
        };
        t.apiGetUserScore = function(e) {
            return o.http.post("weixinAppletApi/getUserScore", e);
        };
        t.apiPostFeedback = function(e) {
            return o.pythonHttp.post("api/v1/user/advice/add/", e);
        };
        t.apiGetAskAndQuestion = function(e) {
            return o.http.get("tool/askAndQuestion", e);
        };
        t.apiGetOrderLogistics = function(e) {
            return o.http.get("order/logistics", e);
        };
        t.apiGetRegularBuy = function(e) {
            return o.http.get("productApi/regularBuy", e);
        };
        t.apiNewGetRegularBuy = function(e) {
            return o.http.get("search/rankProductList", e);
        };
        t.apiGetSimilarImg = function(e) {
            return o.http.get("productApi/similarBatch", e);
        };
        t.apiUpdateReserveTime = function(e) {
            return o.http.get("order/updateReserveTime", e);
        };
        t.apiSmsSend = function(e) {
            return o.pythonHttp.post("api/v1/user/sms/send/", e);
        };
        t.apiSmsCheck = function(e) {
            return o.pythonHttp.post("api/v2/user/sms/check/", e);
        };
        t.apiSetPaymentPassword = function(e) {
            return o.pythonHttp.post("api/v2/user/balance/password/", e);
        };
        t.apiLogoff = function(e) {
            return o.http.get("user/cancelRule", e);
        };
        t.apiGiftcardTopup = function(e) {
            return o.http.get("balance/giftCard", e);
        };
        t.apiGiftcardConsume = function(e) {
            return o.http.get("balance/flow", e);
        };
        t.apiUpdateUserInfo = function(e) {
            return o.pythonHttp.post("api/v1/user/info/update/", e);
        };
        t.apiGetUserAvatarList = function(e) {
            return o.pythonHttp.get("api/v2/user/avatar/", e);
        };
        t.apiPostOrderChangeCall = function(e) {
            return o.http.post("order/changeCallPhone", e);
        };
        t.getRemindOrder = function(e) {
            return o.gateWayHttp.get("cc-admin-service/ccapi/find/remindOrder", e);
        };
        t.getQuestionCategories = function(e) {
            return o.gateWayHttp.post("cc-admin-service/ccadmin/question-api/selectQuestionClassifyInfoPage", e, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        };
        t.getQuestionByCategoryPage = function(e) {
            return o.gateWayHttp.post("cc-admin-service/ccadmin/question-api/selectQuestionInfoPage", e, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        };
    },
    "467f": function(e, t, n) {
        var r = n("2d83");
        e.exports = function(e, t, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
        };
    },
    "48dd": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.carrotNativeRouter = void 0;
        t.carrotNativeRouter = function(e) {
            e.appletPath, e.appletParams, e.needLogin;
        };
    },
    "4a7b": function(e, t, n) {
        var r = n("c532");
        e.exports = function(e, t) {
            function n(e, t) {
                return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t;
            }
            function o(o) {
                r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (i[o] = n(void 0, e[o])) : i[o] = n(e[o], t[o]);
            }
            t = t || {};
            var i = {}, a = [ "url", "method", "data" ], c = [ "headers", "auth", "proxy", "params" ], s = [ "baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding" ], u = [ "validateStatus" ];
            r.forEach(a, function(e) {
                r.isUndefined(t[e]) || (i[e] = n(void 0, t[e]));
            }), r.forEach(c, o), r.forEach(s, function(o) {
                r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (i[o] = n(void 0, e[o])) : i[o] = n(void 0, t[o]);
            }), r.forEach(u, function(r) {
                r in t ? i[r] = n(e[r], t[r]) : r in e && (i[r] = n(void 0, e[r]));
            });
            var l = a.concat(c).concat(s).concat(u), f = Object.keys(e).concat(Object.keys(t)).filter(function(e) {
                return -1 === l.indexOf(e);
            });
            return r.forEach(f, o), i;
        };
    },
    "4c69": function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.apiGetOrderToken = t.apiGetEmptyCartAd = t.apiChangeFactor = t.apiGetOnionConfig = t.getAddonFreight = t.updateRecommendStatus = t.getRecommendStatus = t.notTipOnion = t.addOnion = t.deleteCartProducts = t.checkAllProduct = t.checkProduct = t.getGuessLikeProducts = t.setProductSize = t.getCartDetail = t.addCart = void 0;
        var a = n("5ee7");
        t.addCart = function(e) {
            return a.http.post("cart/add", o(o({}, e), {}, {
                products: JSON.stringify(e.products || [])
            }));
        };
        t.getCartDetail = function(e) {
            return a.http.get("cart/index", e);
        };
        t.setProductSize = function(e) {
            return a.http.get("cart/setSize", e);
        };
        t.getGuessLikeProducts = function(e) {
            return a.http.get("order/getRecommend", e);
        };
        t.checkProduct = function(e) {
            return a.http.post("cart/updateCheck", e);
        };
        t.checkAllProduct = function(e) {
            return a.http.get("cart/allCheck", e);
        };
        t.deleteCartProducts = function(e) {
            return a.http.post("cart/del", e);
        };
        t.addOnion = function(e) {
            return a.http.post("cart/addOnion", e);
        };
        t.notTipOnion = function(e) {
            return a.http.post("cart/notTipOnion", e);
        };
        t.getRecommendStatus = function(e) {
            return a.http.post("user/getPersonalRecommend", e);
        };
        t.updateRecommendStatus = function(e) {
            return a.http.post("user/updatePersonalRecommend", e);
        };
        t.getAddonFreight = function(e) {
            return a.http.get("productApi/addonFreight", e);
        };
        t.apiGetOnionConfig = function() {
            return a.http.get("cart/onionConfig");
        };
        t.apiChangeFactor = function(e) {
            return a.http.post("cart/changeFactor", e);
        };
        t.apiGetEmptyCartAd = function(e) {
            return a.http.get("advert/getAd", e);
        };
        t.apiGetOrderToken = function(e) {
            return a.http.get("orderFlashSale/check", e);
        };
    },
    "4ea8": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            namespaced: !0,
            state: {
                showBatchAlert: !1,
                product: {},
                isGift: !1,
                intercept: !1,
                activity_id: "",
                conditions_num: "",
                control: !1,
                cb: Function,
                curPage: "",
                searchPageIsSearch: !0
            },
            mutations: {
                setBatchAlertShow: function(e, t) {
                    e.showBatchAlert = t;
                },
                setBatchProductInfo: function(e, t) {
                    e.product = t.product, e.isGift = t.isGift, e.intercept = t.intercept, e.control = t.control, 
                    e.cb = t.cb, e.activity_id = t.activity_id, e.conditions_num = t.conditions_num;
                },
                setBatchPage: function(e, t) {
                    e.curPage = t;
                },
                setSearchPageIsSearch: function(e, t) {
                    e.searchPageIsSearch = t;
                }
            },
            actions: {
                showBatchAlert: function(e, t) {
                    e.state;
                    var n = e.commit;
                    n("setBatchProductInfo", t), n("setBatchAlertShow", !0);
                }
            }
        };
        t.default = r;
    },
    5176: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function c(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function s(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    function i(e) {
                        c(s, r, o, i, a, "next", e);
                    }
                    function a(e) {
                        c(s, r, o, i, a, "throw", e);
                    }
                    var s = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function f(e, t, n) {
            return t && l(e.prototype, t), n && l(e, n), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var p = r(n("a34a")), d = r(n("4328")), h = function() {
            function e(t) {
                u(this, e), this.options = t, this.log = t.log, this.beforeUpload = t.beforeUpload, 
                this.url = t.url || "https://collect.t.dingdongxiaoqu.com/";
            }
            return f(e, [ {
                key: "track",
                value: function() {
                    var e = s(p.default.mark(function e(t, n, r) {
                        var o;
                        return p.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!this.log) {
                                    e.next = 3;
                                    break;
                                }
                                return this.log(t, n, r), e.abrupt("return");

                              case 3:
                                o = {}, this.beforeUpload && (o = this.beforeUpload(t, n)), new Image().src = "".concat(this.url, "i.png?").concat(d.default.stringify(i(i({}, o), t)));

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t, n, r) {
                        return e.apply(this, arguments);
                    };
                }()
            } ]), e;
        }();
        t.default = h;
    },
    5196: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            namespaced: !0,
            state: {
                completeData: null
            },
            mutations: {
                setCompleteData: function(e, t) {
                    e.completeData = t;
                }
            }
        };
        t.default = r;
    },
    5270: function(e, t, n) {
        function r(e) {
            e.cancelToken && e.cancelToken.throwIfRequested();
        }
        var o = n("c532"), i = n("c401"), a = n("2e67"), c = n("2444");
        e.exports = function(e) {
            return r(e), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), 
            e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), 
            o.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function(t) {
                delete e.headers[t];
            }), (e.adapter || c.adapter)(e).then(function(t) {
                return r(e), t.data = i(t.data, t.headers, e.transformResponse), t;
            }, function(t) {
                return a(t) || (r(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), 
                Promise.reject(t);
            });
        };
    },
    "538b": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("0d42"), o = {
            computed: {
                storageType: function() {
                    return 2 === this.theme ? "LARGE" : "NORMAL";
                },
                storageImage: function() {
                    return this.product ? r.STORAGE_IMAGE[r.STORAGE_TYPE[this.product.storage_value_id || 3] || ""] : "";
                },
                storageImg: function() {
                    return this.product ? r.STORAGE_IMAGE[r.STORAGE_TYPE[this.product.feature_tag] || ""] : "";
                },
                storageColor: function() {
                    return this.product ? r.STORAGE_COLOR[r.STORAGE_TYPE[this.product.storage_value_id || 3] || ""] : "";
                },
                storageWidth: function() {
                    return r.STORAGE_WIDTH[this.storageType];
                },
                storageHeight: function() {
                    return this.product ? 7 === this.product.storage_value_id ? r.STORAGE_HOT_HEIGHT[this.storageType] : r.STORAGE_HEIGHT[this.storageType] : 0;
                },
                storageSize: function() {
                    return r.STORAGE_SIZE[this.storageType];
                },
                storageBadgeImg: function() {
                    var e, t, n;
                    return this.product && (null === (e = this.product) || void 0 === e || null === (t = e.feature_tag_url) || void 0 === t || null === (n = t.url_map) || void 0 === n ? void 0 : n.large) || "";
                },
                storageBadgeWidth: function() {
                    var e, t, n = this.theme, r = (null === (e = this.product) || void 0 === e || null === (t = e.feature_tag_url) || void 0 === t ? void 0 : t.url_map) || {};
                    return 1 === n ? Number(2 * (null === r || void 0 === r ? void 0 : r.middle_width) / 3 || "") || 0 : 2 === n ? Number(2 * (null === r || void 0 === r ? void 0 : r.large_width) / 3 || "") || 0 : Number(2 * (null === r || void 0 === r ? void 0 : r.small_width) / 3 || "") || 0;
                }
            }
        };
        t.default = o;
    },
    "543d": function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    u(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t) {
            return s(e) || c(e, t) || p(e, t) || a();
        }
        function a() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function c(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e;
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            }
        }
        function s(e) {
            if (Array.isArray(e)) return e;
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function l(e) {
            return h(e) || d(e) || p(e) || f();
        }
        function f() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function p(e, t) {
            if (e) {
                if ("string" == typeof e) return v(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0;
            }
        }
        function d(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }
        function h(e) {
            if (Array.isArray(e)) return v(e);
        }
        function v(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function _(e) {
            return (_ = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : _typeof(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
            })(e);
        }
        function g(e) {
            return "function" == typeof e;
        }
        function m(e) {
            return "string" == typeof e;
        }
        function y(e) {
            return "[object Object]" === Ie.call(e);
        }
        function E(e, t) {
            return De.call(e, t);
        }
        function A() {}
        function b(e) {
            var t = Object.create(null);
            return function(n) {
                return t[n] || (t[n] = e(n));
            };
        }
        function P(e, t) {
            var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [ t ] : e;
            return n ? O(n) : n;
        }
        function O(e) {
            for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
        }
        function T(e, t) {
            var n = e.indexOf(t);
            -1 !== n && e.splice(n, 1);
        }
        function S(e, t) {
            Object.keys(t).forEach(function(n) {
                -1 !== Ne.indexOf(n) && g(t[n]) && (e[n] = P(e[n], t[n]));
            });
        }
        function R(e, t) {
            e && t && Object.keys(t).forEach(function(n) {
                -1 !== Ne.indexOf(n) && g(t[n]) && T(e[n], t[n]);
            });
        }
        function C(e) {
            return function(t) {
                return e(t) || t;
            };
        }
        function w(e) {
            return !!e && ("object" === _(e) || "function" == typeof e) && "function" == typeof e.then;
        }
        function k(e, t) {
            for (var n = !1, r = 0; r < e.length; r++) {
                var o = e[r];
                if (n) n = Promise.then(C(o)); else {
                    var i = o(t);
                    if (w(i) && (n = Promise.resolve(i)), !1 === i) return {
                        then: function() {}
                    };
                }
            }
            return n || {
                then: function(e) {
                    return e(t);
                }
            };
        }
        function I(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return [ "success", "fail", "complete" ].forEach(function(n) {
                if (Array.isArray(e[n])) {
                    var r = t[n];
                    t[n] = function(t) {
                        k(e[n], t).then(function(e) {
                            return g(r) && r(e) || e;
                        });
                    };
                }
            }), t;
        }
        function D(e, t) {
            var n = [];
            Array.isArray(je.returnValue) && n.push.apply(n, l(je.returnValue));
            var r = Ge[e];
            return r && Array.isArray(r.returnValue) && n.push.apply(n, l(r.returnValue)), n.forEach(function(e) {
                t = e(t) || t;
            }), t;
        }
        function x(e) {
            var t = Object.create(null);
            Object.keys(je).forEach(function(e) {
                "returnValue" !== e && (t[e] = je[e].slice());
            });
            var n = Ge[e];
            return n && Object.keys(n).forEach(function(e) {
                "returnValue" !== e && (t[e] = (t[e] || []).concat(n[e]));
            }), t;
        }
        function L(e, t, n) {
            for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++) o[i - 3] = arguments[i];
            var a = x(e);
            return a && Object.keys(a).length ? Array.isArray(a.invoke) ? k(a.invoke, n).then(function(e) {
                return t.apply(void 0, [ I(a, e) ].concat(o));
            }) : t.apply(void 0, [ I(a, n) ].concat(o)) : t.apply(void 0, [ n ].concat(o));
        }
        function N(e) {
            return Ue.test(e);
        }
        function j(e) {
            return Me.test(e) && -1 === $e.indexOf(e);
        }
        function G(e) {
            return Ve.test(e) && "onPush" !== e;
        }
        function H(e) {
            return e.then(function(e) {
                return [ null, e ];
            }).catch(function(e) {
                return [ e ];
            });
        }
        function M(e) {
            return !(N(e) || j(e) || G(e));
        }
        function U(e, t) {
            return M(e) ? function() {
                for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                return g(n.success) || g(n.fail) || g(n.complete) ? D(e, L.apply(void 0, [ e, t, n ].concat(o))) : D(e, H(new Promise(function(r, i) {
                    L.apply(void 0, [ e, t, Object.assign({}, n, {
                        success: r,
                        fail: i
                    }) ].concat(o));
                })));
            } : t;
        }
        function $() {
            var e = wx.getSystemInfoSync(), t = e.platform, n = e.pixelRatio, r = e.windowWidth;
            We = r, Ye = n, Ke = "ios" === t;
        }
        function V(e) {
            if (e.safeArea) {
                var t = e.safeArea;
                e.safeAreaInsets = {
                    top: t.top,
                    left: t.left,
                    right: e.windowWidth - t.right,
                    bottom: e.windowHeight - t.bottom
                };
            }
        }
        function F(e, t, n) {
            return function(r) {
                return t(K(e, r, n));
            };
        }
        function B(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (y(t)) {
                var i = !0 === o ? t : {};
                for (var a in g(n) && (n = n(t, i) || {}), t) if (E(n, a)) {
                    var c = n[a];
                    g(c) && (c = c(t[a], t, i)), c ? m(c) ? i[c] = t[a] : y(c) && (i[c.name ? c.name : a] = c.value) : console.warn("微信小程序 ".concat(e, "暂不支持").concat(a));
                } else -1 !== Ze.indexOf(a) ? i[a] = F(e, t[a], r) : o || (i[a] = t[a]);
                return i;
            }
            return g(t) && (t = F(e, t, r)), t;
        }
        function K(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return g(Je.returnValue) && (t = Je.returnValue(e, t)), B(e, t, n, {}, r);
        }
        function W(e, t) {
            if (E(Je, e)) {
                var n = Je[e];
                return n ? function(t, r) {
                    var o = n;
                    g(n) && (o = n(t));
                    var i = [ t = B(e, t, o.args, o.returnValue) ];
                    void 0 !== r && i.push(r);
                    var a = wx[o.name || e].apply(wx, i);
                    return j(e) ? K(e, a, o.returnValue, N(e)) : a;
                } : function() {
                    console.error("微信小程序 暂不支持".concat(e));
                };
            }
            return t;
        }
        function Y(e) {
            return function(t) {
                var n = t.fail, r = t.complete, o = {
                    errMsg: "".concat(e, ":fail:暂不支持 ").concat(e, " 方法")
                };
                g(n) && n(o), g(r) && r(o);
            };
        }
        function q(e, t, n) {
            return e[t].apply(e, n);
        }
        function z(e) {
            if (wx.canIUse("nextTick")) {
                var t = e.triggerEvent;
                e.triggerEvent = function(n) {
                    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                    return t.apply(e, [ ut(n) ].concat(o));
                };
            }
        }
        function J(e, t) {
            var n = t[e];
            t[e] = n ? function() {
                z(this);
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return n.apply(this, t);
            } : function() {
                z(this);
            };
        }
        function X(e, t) {
            var n = e.$mp[e.mpType];
            t.forEach(function(t) {
                E(n, t) && (e[t] = n[t]);
            });
        }
        function Q(e, t) {
            if (!t) return !0;
            if (ke.default.options && Array.isArray(ke.default.options[e])) return !0;
            if (t = t.default || t, g(t)) return !!g(t.extendOptions[e]) || !!(t.super && t.super.options && Array.isArray(t.super.options[e]));
            if (g(t[e])) return !0;
            var n = t.mixins;
            return Array.isArray(n) ? !!n.find(function(t) {
                return Q(e, t);
            }) : void 0;
        }
        function Z(e, t, n) {
            t.forEach(function(t) {
                Q(t, n) && (e[t] = function(e) {
                    return this.$vm && this.$vm.__call_hook(t, e);
                });
            });
        }
        function ee(e, t) {
            var n;
            return t = t.default || t, g(t) ? (n = t, t = n.extendOptions) : n = e.extend(t), 
            [ n, t ];
        }
        function te(e, t) {
            if (Array.isArray(t) && t.length) {
                var n = Object.create(null);
                t.forEach(function(e) {
                    n[e] = !0;
                }), e.$scopedSlots = e.$slots = n;
            }
        }
        function ne(e, t) {
            var n = (e = (e || "").split(",")).length;
            1 === n ? t._$vueId = e[0] : 2 === n && (t._$vueId = e[0], t._$vuePid = e[1]);
        }
        function re(e, t) {
            var n = e.data || {}, r = e.methods || {};
            if ("function" == typeof n) try {
                n = n.call(t);
            } catch (e) {
                Object({
                    NODE_ENV: "production",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", n);
            } else try {
                n = JSON.parse(JSON.stringify(n));
            } catch (e) {}
            return y(n) || (n = {}), Object.keys(r).forEach(function(e) {
                -1 !== t.__lifecycle_hooks__.indexOf(e) || E(n, e) || (n[e] = r[e]);
            }), n;
        }
        function oe(e) {
            return function(t, n) {
                this.$vm && (this.$vm[e] = t);
            };
        }
        function ie(e, t) {
            var n = e.behaviors, r = e.extends, o = e.mixins, i = e.props;
            i || (e.props = i = []);
            var a = [];
            return Array.isArray(n) && n.forEach(function(e) {
                a.push(e.replace("uni://", "wx".concat("://"))), "uni://form-field" === e && (Array.isArray(i) ? (i.push("name"), 
                i.push("value")) : (i.name = {
                    type: String,
                    default: ""
                }, i.value = {
                    type: [ String, Number, Boolean, Array, Object, Date ],
                    default: ""
                }));
            }), y(r) && r.props && a.push(t({
                properties: ce(r.props, !0)
            })), Array.isArray(o) && o.forEach(function(e) {
                y(e) && e.props && a.push(t({
                    properties: ce(e.props, !0)
                }));
            }), a;
        }
        function ae(e, t, n, r) {
            return Array.isArray(t) && 1 === t.length ? t[0] : t;
        }
        function ce(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], 
            {});
            return t || (n.vueId = {
                type: String,
                value: ""
            }, n.vueSlots = {
                type: null,
                value: [],
                observer: function(e, t) {
                    var n = Object.create(null);
                    e.forEach(function(e) {
                        n[e] = !0;
                    }), this.setData({
                        $slots: n
                    });
                }
            }), Array.isArray(e) ? e.forEach(function(e) {
                n[e] = {
                    type: null,
                    observer: oe(e)
                };
            }) : y(e) && Object.keys(e).forEach(function(t) {
                var r = e[t];
                if (y(r)) {
                    var o = r.default;
                    g(o) && (o = o()), r.type = ae(t, r.type), n[t] = {
                        type: -1 !== ft.indexOf(r.type) ? r.type : null,
                        value: o,
                        observer: oe(t)
                    };
                } else {
                    var i = ae(t, r);
                    n[t] = {
                        type: -1 !== ft.indexOf(i) ? i : null,
                        observer: oe(t)
                    };
                }
            }), n;
        }
        function se(e) {
            try {
                e.mp = JSON.parse(JSON.stringify(e));
            } catch (e) {}
            return e.stopPropagation = A, e.preventDefault = A, e.target = e.target || {}, E(e, "detail") || (e.detail = {}), 
            y(e.detail) && (e.target = Object.assign({}, e.target, e.detail)), e;
        }
        function ue(e, t) {
            var n = e;
            return t.forEach(function(t) {
                var r = t[0], o = t[2];
                if (r || void 0 !== o) {
                    var i = t[1], a = t[3], c = r ? e.__get_value(r, n) : n;
                    Number.isInteger(c) ? n = o : i ? Array.isArray(c) ? n = c.find(function(t) {
                        return e.__get_value(i, t) === o;
                    }) : y(c) ? n = Object.keys(c).find(function(t) {
                        return e.__get_value(i, c[t]) === o;
                    }) : console.error("v-for 暂不支持循环数据：", c) : n = c[o], a && (n = e.__get_value(a, n));
                }
            }), n;
        }
        function le(e, t, n) {
            var r = {};
            return Array.isArray(t) && t.length && t.forEach(function(t, o) {
                "string" == typeof t ? t ? "$event" === t ? r["$" + o] = n : 0 === t.indexOf("$event.") ? r["$" + o] = e.__get_value(t.replace("$event.", ""), n) : r["$" + o] = e.__get_value(t) : r["$" + o] = e : r["$" + o] = ue(e, t);
            }), r;
        }
        function fe(e) {
            for (var t = {}, n = 1; n < e.length; n++) {
                var r = e[n];
                t[r[0]] = r[1];
            }
            return t;
        }
        function pe(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], o = arguments.length > 4 ? arguments[4] : void 0, i = arguments.length > 5 ? arguments[5] : void 0, a = !1;
            if (o && (a = t.currentTarget && t.currentTarget.dataset && "wx" === t.currentTarget.dataset.comType, 
            !n.length)) return a ? [ t ] : t.detail.__args__ || t.detail;
            var c = le(e, r, t), s = [];
            return n.forEach(function(e) {
                "$event" === e ? "__set_model" !== i || o ? o && !a ? s.push(t.detail.__args__[0]) : s.push(t) : s.push(t.target.value) : Array.isArray(e) && "o" === e[0] ? s.push(fe(e)) : "string" == typeof e && E(c, e) ? s.push(c[e]) : s.push(e);
            }), s;
        }
        function de(e, t) {
            return e === t || "regionchange" === t && ("begin" === e || "end" === e);
        }
        function he(e) {
            var t = this, n = ((e = se(e)).currentTarget || e.target).dataset;
            if (!n) return console.warn("事件信息不存在");
            var r = n.eventOpts || n["event-opts"];
            if (!r) return console.warn("事件信息不存在");
            var o = e.type, i = [];
            return r.forEach(function(n) {
                var r = n[0], a = n[1], c = r.charAt(0) === dt, s = (r = c ? r.slice(1) : r).charAt(0) === pt;
                r = s ? r.slice(1) : r, a && de(o, r) && a.forEach(function(n) {
                    var r = n[0];
                    if (r) {
                        var o = t.$vm;
                        if (o.$options.generic && o.$parent && o.$parent.$parent && (o = o.$parent.$parent), 
                        "$emit" === r) return void o.$emit.apply(o, pe(t.$vm, e, n[1], n[2], c, r));
                        var a = o[r];
                        if (!g(a)) throw new Error(" _vm.".concat(r, " is not a function"));
                        if (s) {
                            if (a.once) return;
                            a.once = !0;
                        }
                        i.push(a.apply(o, pe(t.$vm, e, n[1], n[2], c, r)));
                    }
                });
            }), "input" === o && 1 === i.length && void 0 !== i[0] ? i[0] : void 0;
        }
        function ve(e, t) {
            var n = t.mocks, r = t.initRefs;
            e.$options.store && (ke.default.prototype.$store = e.$options.store), ke.default.prototype.mpHost = "mp-weixin", 
            ke.default.mixin({
                beforeCreate: function() {
                    this.$options.mpType && (this.mpType = this.$options.mpType, this.$mp = u({
                        data: {}
                    }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, 
                    delete this.$options.mpType, delete this.$options.mpInstance, "app" !== this.mpType && (r(this), 
                    X(this, n)));
                }
            });
            var o = {
                onLaunch: function(t) {
                    this.$vm || (wx.canIUse("nextTick") || console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), 
                    this.$vm = e, this.$vm.$mp = {
                        app: this
                    }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, 
                    this.$vm.__call_hook("mounted", t), this.$vm.__call_hook("onLaunch", t));
                }
            };
            o.globalData = e.$options.globalData || {};
            var i = e.$options.methods;
            return i && Object.keys(i).forEach(function(e) {
                o[e] = i[e];
            }), Z(o, ht), o;
        }
        function _e(e, t) {
            for (var n, r = e.$children, o = r.length - 1; o >= 0; o--) {
                var i = r[o];
                if (i.$scope._$vueId === t) return i;
            }
            for (var a = r.length - 1; a >= 0; a--) if (n = _e(r[a], t)) return n;
        }
        function ge(e) {
            return Behavior(e);
        }
        function me() {
            return !!this.route;
        }
        function ye(e) {
            this.triggerEvent("__l", e);
        }
        function Ee(e) {
            var t = e.$scope;
            Object.defineProperty(e, "$refs", {
                get: function() {
                    var e = {};
                    return t.selectAllComponents(".vue-ref").forEach(function(t) {
                        var n = t.dataset.ref;
                        e[n] = t.$vm || t;
                    }), t.selectAllComponents(".vue-ref-in-for").forEach(function(t) {
                        var n = t.dataset.ref;
                        e[n] || (e[n] = []), e[n].push(t.$vm || t);
                    }), e;
                }
            });
        }
        function Ae(e) {
            var t, n = e.detail || e.value, r = n.vuePid, o = n.vueOptions;
            r && (t = _e(this.$vm, r)), t || (t = this.$vm), o.parent = t;
        }
        function be(e) {
            return ve(e, {
                mocks: vt,
                initRefs: Ee
            });
        }
        function Pe(e) {
            return App(be(e)), e;
        }
        function Oe(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.isPage, r = t.initRelation, a = i(ee(ke.default, e), 2), c = a[0], s = a[1], u = o({
                multipleSlots: !0,
                addGlobalClass: !0
            }, s.options || {});
            s["mp-weixin"] && s["mp-weixin"].options && Object.assign(u, s["mp-weixin"].options);
            var l = {
                options: u,
                data: re(s, ke.default.prototype),
                behaviors: ie(s, ge),
                properties: ce(s.props, !1, s.__file),
                lifetimes: {
                    attached: function() {
                        var e = this.properties, t = {
                            mpType: n.call(this) ? "page" : "component",
                            mpInstance: this,
                            propsData: e
                        };
                        ne(e.vueId, this), r.call(this, {
                            vuePid: this._$vuePid,
                            vueOptions: t
                        }), this.$vm = new c(t), te(this.$vm, e.vueSlots), this.$vm.$mount();
                    },
                    ready: function() {
                        this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                    },
                    detached: function() {
                        this.$vm && this.$vm.$destroy();
                    }
                },
                pageLifetimes: {
                    show: function(e) {
                        this.$vm && this.$vm.__call_hook("onPageShow", e);
                    },
                    hide: function() {
                        this.$vm && this.$vm.__call_hook("onPageHide");
                    },
                    resize: function(e) {
                        this.$vm && this.$vm.__call_hook("onPageResize", e);
                    }
                },
                methods: {
                    __l: Ae,
                    __e: he
                }
            };
            return Array.isArray(s.wxsCallMethods) && s.wxsCallMethods.forEach(function(e) {
                l.methods[e] = function(t) {
                    return this.$vm[e](t);
                };
            }), n ? l : [ l, c ];
        }
        function Te(e) {
            return Oe(e, {
                isPage: me,
                initRelation: ye
            });
        }
        function Se(e, t) {
            t.isPage, t.initRelation;
            var n = Te(e);
            return Z(n.methods, _t, e), n.methods.onLoad = function(e) {
                this.$vm.$mp.query = e, this.$vm.__call_hook("onLoad", e);
            }, n;
        }
        function Re(e) {
            return Se(e, {
                isPage: me,
                initRelation: ye
            });
        }
        function Ce(e) {
            return Component(Re(e));
        }
        function we(e) {
            return Component(Te(e));
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createApp = Pe, t.createComponent = we, t.createPage = Ce, t.default = void 0;
        var ke = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("66fd")), Ie = Object.prototype.toString, De = Object.prototype.hasOwnProperty, xe = /-(\w)/g, Le = b(function(e) {
            return e.replace(xe, function(e, t) {
                return t ? t.toUpperCase() : "";
            });
        }), Ne = [ "invoke", "success", "fail", "complete", "returnValue" ], je = {}, Ge = {}, He = {
            returnValue: function(e) {
                return w(e) ? e.then(function(e) {
                    return e[1];
                }).catch(function(e) {
                    return e[0];
                }) : e;
            }
        }, Me = /^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/, Ue = /^create|Manager$/, $e = [ "createBLEConnection" ], Ve = /^on/;
        Promise.prototype.finally || (Promise.prototype.finally = function(e) {
            var t = this.constructor;
            return this.then(function(n) {
                return t.resolve(e()).then(function() {
                    return n;
                });
            }, function(n) {
                return t.resolve(e()).then(function() {
                    throw n;
                });
            });
        });
        var Fe = 1e-4, Be = 750, Ke = !1, We = 0, Ye = 0, qe = {
            promiseInterceptor: He
        }, ze = Object.freeze({
            __proto__: null,
            upx2px: function(e, t) {
                if (0 === We && $(), 0 === (e = Number(e))) return 0;
                var n = e / Be * (t || We);
                return n < 0 && (n = -n), 0 === (n = Math.floor(n + Fe)) ? 1 !== Ye && Ke ? .5 : 1 : e < 0 ? -n : n;
            },
            interceptors: qe,
            addInterceptor: function(e, t) {
                "string" == typeof e && y(t) ? S(Ge[e] || (Ge[e] = {}), t) : y(e) && S(je, e);
            },
            removeInterceptor: function(e, t) {
                "string" == typeof e ? y(t) ? R(Ge[e], t) : delete Ge[e] : y(e) && R(je, e);
            }
        }), Je = {
            previewImage: {
                args: function(e) {
                    var t = parseInt(e.current);
                    if (!isNaN(t)) {
                        var n = e.urls;
                        if (Array.isArray(n)) {
                            var r = n.length;
                            if (r) return t < 0 ? t = 0 : t >= r && (t = r - 1), t > 0 ? (e.current = n[t], 
                            e.urls = n.filter(function(e, r) {
                                return !(r < t) || e !== n[t];
                            })) : e.current = n[0], {
                                indicator: !1,
                                loop: !1
                            };
                        }
                    }
                }
            },
            getSystemInfo: {
                returnValue: V
            },
            getSystemInfoSync: {
                returnValue: V
            }
        }, Xe = [ "vibrate" ], Qe = [], Ze = [ "success", "fail", "cancel", "complete" ], et = Object.create(null);
        [ "onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ].forEach(function(e) {
            et[e] = Y(e);
        });
        var tt = {
            oauth: [ "weixin" ],
            share: [ "weixin" ],
            payment: [ "wxpay" ],
            push: [ "weixin" ]
        }, nt = Object.freeze({
            __proto__: null,
            getProvider: function(e) {
                var t = e.service, n = e.success, r = e.fail, o = e.complete, i = !1;
                tt[t] ? (i = {
                    errMsg: "getProvider:ok",
                    service: t,
                    provider: tt[t]
                }, g(n) && n(i)) : (i = {
                    errMsg: "getProvider:fail:服务[" + t + "]不存在"
                }, g(r) && r(i)), g(o) && o(i);
            }
        }), rt = function() {
            return "function" == typeof getUniEmitter ? getUniEmitter : function() {
                return e || (e = new ke.default()), e;
            };
            var e;
        }(), ot = Object.freeze({
            __proto__: null,
            $on: function() {
                return q(rt(), "$on", Array.prototype.slice.call(arguments));
            },
            $off: function() {
                return q(rt(), "$off", Array.prototype.slice.call(arguments));
            },
            $once: function() {
                return q(rt(), "$once", Array.prototype.slice.call(arguments));
            },
            $emit: function() {
                return q(rt(), "$emit", Array.prototype.slice.call(arguments));
            }
        }), it = Object.freeze({
            __proto__: null
        }), at = Page, ct = Component, st = /:/g, ut = b(function(e) {
            return Le(e.replace(st, "-"));
        });
        Page = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return J("onLoad", e), at(e);
        }, Component = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return J("created", e), ct(e);
        };
        var lt = [ "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ], ft = [ String, Number, Boolean, Object, Array, null ], pt = "~", dt = "^", ht = [ "onShow", "onHide", "onError", "onPageNotFound" ], vt = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ], _t = [ "onShow", "onHide", "onUnload" ];
        _t.push.apply(_t, lt), Xe.forEach(function(e) {
            Je[e] = !1;
        }), Qe.forEach(function(e) {
            var t = Je[e] && Je[e].name ? Je[e].name : e;
            wx.canIUse(t) || (Je[e] = !1);
        });
        var gt = {};
        "undefined" != typeof Proxy ? gt = new Proxy({}, {
            get: function(e, t) {
                return e[t] ? e[t] : ze[t] ? ze[t] : it[t] ? U(t, it[t]) : nt[t] ? U(t, nt[t]) : et[t] ? U(t, et[t]) : ot[t] ? ot[t] : E(wx, t) || E(Je, t) ? U(t, W(t, wx[t])) : void 0;
            },
            set: function(e, t, n) {
                return e[t] = n, !0;
            }
        }) : (Object.keys(ze).forEach(function(e) {
            gt[e] = ze[e];
        }), Object.keys(et).forEach(function(e) {
            gt[e] = U(e, et[e]);
        }), Object.keys(nt).forEach(function(e) {
            gt[e] = U(e, et[e]);
        }), Object.keys(ot).forEach(function(e) {
            gt[e] = ot[e];
        }), Object.keys(it).forEach(function(e) {
            gt[e] = U(e, it[e]);
        }), Object.keys(wx).forEach(function(e) {
            (E(wx, e) || E(Je, e)) && (gt[e] = U(e, W(e, wx[e])));
        })), wx.createApp = Pe, wx.createPage = Ce, wx.createComponent = we;
        var mt = gt;
        t.default = mt;
    },
    5509: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            namespaced: !0,
            state: {
                showSpec: !1,
                product: {},
                isGift: !1,
                noSizeTip: "",
                requestParams: {},
                noSizeComponentTops: [],
                computedCounter: 0
            },
            mutations: {
                setSpecData: function(e, t) {
                    e.showSpec = t.showSpec, e.product = t.product, e.isGift = !!t.isGift, e.isGiftProduct = !!t.isGiftProduct;
                },
                setSpecTip: function(e, t) {
                    e.noSizeTip = t;
                },
                setSpecRequestParams: function(e, t) {
                    e.requestParams = t;
                },
                pushTop: function(e, t) {
                    e.noSizeComponentTops.push(t);
                },
                addComputedCounter: function(e) {
                    e.noSizeComponentTops = [], e.computedCounter++;
                }
            }
        };
        t.default = r;
    },
    "55ab": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = r(n("67c5")), i = r(n("b7c7")), a = {
            namespaced: !0,
            state: {
                sys: {},
                navParams: {},
                s_share_id: "",
                s: "",
                h5_source: "",
                wx_source: "",
                source: "",
                appInfo: null,
                hasNetwork: !0,
                shareLoginRoute: "",
                currentRoute: "",
                vipPages: {
                    customBottomHeight: 0,
                    routeTabs: []
                },
                customNavHeight: 0,
                k: "",
                f: "",
                priceConvert: !1,
                options: {},
                productImgInfo: {},
                sceneId: "",
                configVersion: 0,
                abInfo: {},
                hiddenHomePopup: [],
                trace_id: "",
                isNative: "0",
                track_session_id: "".concat(new Date().getTime()),
                locationReady: !1,
                locationInfo: {},
                user_city: null,
                loginExtendInfo: {},
                shareExtendInfo: {},
                detailTag: 0,
                isFake: !1,
                isFakeStation: !1,
                javaPhpAB: {},
                wxGwStatus: "0",
                wxGwWhiteList: [],
                isStorage: !1,
                addressTipContinue: !1,
                canIUseGetUserProfile: !1,
                maicaiAppConfig: {},
                checkLoginState: !1,
                pvId: "",
                h5TraceId: "",
                savingPacketRule: "",
                scene: 0,
                previewToken: "",
                aliPreviewCode: "",
                isGotoLoginPage: !1,
                domainServiceConfig: [],
                logConfigData: [],
                preFetchList: []
            },
            mutations: {
                update: function(e, t) {
                    Object.keys(t).forEach(function(n) {
                        n && (e[n] = t[n] || void 0);
                    }), (null === t || void 0 === t ? void 0 : t.isStorage) && i.default.update({
                        key: o.default.GLOBAL_DATA,
                        data: t
                    });
                },
                clearAB: function(e) {
                    e.abInfo = {};
                }
            }
        };
        t.default = a;
    },
    5706: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function i(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, i) {
                    function a(e) {
                        o(s, r, i, a, c, "next", e);
                    }
                    function c(e) {
                        o(s, r, i, a, c, "throw", e);
                    }
                    var s = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = r(n("a34a")), c = r(n("66fd")), s = n("37eb"), u = c.default.extend({
            methods: {
                pushAdPlatformWx: function() {
                    var e = this;
                    return i(a.default.mark(function t() {
                        var n, r, o, i, c;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e.$store.state.globalData.options, r = void 0 === n ? {} : n, o = r.launchTime, 
                                i = e.$store.state.user.userInfo.is_new_user, c = void 0 === i ? 0 : i, t.next = 5, 
                                (0, s.apiAdWechatAppletRegister)({
                                    click_id: "0",
                                    is_new_user: 1 * c,
                                    click_time: o
                                });

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                pushAdDevice: function(e) {
                    return i(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, (0, s.apiAdDeviceInfo)(e);

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            }
        });
        t.default = u;
    },
    5779: function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : _typeof(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
                })(e);
            }
            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach(function(t) {
                        c(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function s(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        function i(e) {
                            s(c, r, o, i, a, "next", e);
                        }
                        function a(e) {
                            s(c, r, o, i, a, "throw", e);
                        }
                        var c = e.apply(t, n);
                        i(void 0);
                    });
                };
            }
            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            function p(e, t, n) {
                return t && f(e.prototype, t), n && f(e, n), e;
            }
            function d(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t);
            }
            function h(e, t) {
                return (h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function v(e) {
                var t = m();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return _(this, n);
                };
            }
            function _(e, t) {
                return !t || "object" !== o(t) && "function" != typeof t ? g(e) : t;
            }
            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function m() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (e) {
                    return !1;
                }
            }
            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TUniapp = void 0;
            var E = r(n("a34a")), A = r(n("66fd")), b = r(n("1030")), P = n("a8f0"), O = r(n("99d2")), T = n("5afa"), S = function(t) {
                function n(e) {
                    var t;
                    return l(this, n), t = r.call(this, e), t.name = "uniapp", t.baseComponentName = e.baseComponentName || "app", 
                    t.preswitchTab = function(e) {}, t.preredirectTo = function(e) {}, t.isRedirect = !1, 
                    t.backNumber = 0, t.init(), t;
                }
                d(n, t);
                var r = v(n);
                return p(n, [ {
                    key: "init",
                    value: function() {
                        var e = this;
                        this.preswitchTab = function(t) {
                            e.referer.isBack = !1, e.referer.pageBack = !1, setTimeout(function() {
                                e.referer.isBack = !0;
                            });
                        }, this.preredirectTo = function(t) {
                            e.backNumber++, e.isRedirect = !0;
                        };
                    }
                }, {
                    key: "requestConfig",
                    value: function(t) {
                        var n = this, r = this.options, o = {
                            os: r.os,
                            app_id: r.appName,
                            app_version: r.appVersion,
                            page: t
                        };
                        return this.options.isPro || (o.trial = !0), new Promise(function(t, r) {
                            e.request({
                                url: "".concat(n.httpHead, "//").concat(n.configUrl),
                                data: o,
                                success: function(e) {
                                    return u(E.default.mark(function n() {
                                        return E.default.wrap(function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                              case 0:
                                                t(e.data || {});

                                              case 1:
                                              case "end":
                                                return n.stop();
                                            }
                                        }, n);
                                    }))();
                                },
                                fail: function() {
                                    r();
                                }
                            });
                        });
                    }
                }, {
                    key: "setLocalData",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.localKey;
                        return new Promise(function(r, o) {
                            e ? e.setStorage({
                                key: n,
                                data: t,
                                success: function() {
                                    r();
                                },
                                fail: function() {
                                    o();
                                }
                            }) : o();
                        });
                    }
                }, {
                    key: "getLocalData",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.localKey;
                        return new Promise(function(n, r) {
                            e ? e.getStorage({
                                key: t,
                                success: function(e) {
                                    n(e.data);
                                },
                                fail: function() {
                                    n(null);
                                }
                            }) : r(new Error("uni.getStorage is not function"));
                        });
                    }
                }, {
                    key: "resetBackNumber",
                    value: function() {
                        this.backNumber = 0;
                    }
                }, {
                    key: "resetRedirectStatus",
                    value: function() {
                        this.isRedirect = !1;
                    }
                }, {
                    key: "resetUniRouterFunc",
                    value: function(t) {
                        var n = e[t], r = this;
                        e[t] = function(e) {
                            r["pre".concat(t)](e), n(e);
                        };
                    }
                }, {
                    key: "mixin",
                    value: function() {
                        var e = this, t = /(VUni)|(^Page)|(pages)|(app)|(App)/, n = {};
                        return this.resetUniRouterFunc("switchTab"), this.resetUniRouterFunc("redirectTo"), 
                        A.default.extend({
                            onShow: function() {
                                var t = this;
                                e.resetRedirectStatus(), setTimeout(function() {
                                    t.pageTrackOnShow();
                                }, 500);
                            },
                            onHide: function() {
                                this.pageTrackOnHide();
                            },
                            onLoad: function(t) {
                                var n = this;
                                this.trackOnLoadOptions = t, setTimeout(function() {
                                    var t = n.currentTrackKey;
                                    t && !e.tabs.includes(t) && e.pushRefer(t);
                                });
                            },
                            onTabItemTap: function(t) {
                                var n = this;
                                this.$nextTick(function() {
                                    var r = e.referer.getLastTabPage(e.tabs);
                                    r && n.currentTrackKey !== r && n.$track({
                                        key: n.currentTrackKey,
                                        eventType: "click",
                                        other: a(a({}, t), {}, {
                                            page_id: r
                                        })
                                    }, n.trackDataComputed());
                                });
                            },
                            destroyed: function() {
                                if (this.pageTrackDestroyed(), this.isTrackPage && e.referer.pageBack && !e.isRedirect && !/System/.test(this.currentTrackKey)) {
                                    e.hidePage = this.currentTrackKey;
                                    for (var t = 0; t <= e.backNumber; t++) e.referer.back();
                                    e.resetBackNumber();
                                }
                            },
                            mounted: function() {
                                var t = this, r = /(VUni)|(App)|(pages)|(app)|(transition)|(AsyncLoading)/, o = this.$options.name || "";
                                if (this.isTrackPage && this.pageElapseByNative(), !r.test(o) && !this.isCloseTrackObserve) {
                                    var i = function(n) {
                                        var r = (0, P.createIntersectionObserver)(t, e.options.isH5).relativeToViewport({
                                            bottom: 20
                                        });
                                        r && r.observe(n, function(e) {
                                            t.pageTrackDomObserve(e);
                                        });
                                    }, a = this.currentTrackKey.split("/")[0];
                                    e.configPaths.get(a) && !(e.configPaths.get(a) || []).find(function(e) {
                                        var n = e.split("/");
                                        return n.splice(-1), t.currentTrackKey === n.join("/");
                                    }) || setTimeout(function() {
                                        try {
                                            if (e.options.isH5) {
                                                var r = document.getElementsByClassName(t.vForTrackIndexClassKey);
                                                r && Array.from(r).forEach(function(e) {
                                                    var t = (0, T.getEleXPath)(e) + e.innerHTML;
                                                    n[t] || (i(e), n[t] = 1);
                                                });
                                            } else i(".".concat(t.vForTrackIndexClassKey));
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    }, 1e3);
                                }
                            }
                        }).extend((0, O.default)(e, t));
                    }
                }, {
                    key: "install",
                    value: function(e) {
                        e.prototype.$track = this.track.bind(this), e.mixin(this.mixin());
                    }
                } ]), n;
            }(b.default);
            t.TUniapp = S;
        }).call(this, n("543d").default);
    },
    5835: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isApp = t.appVersion = void 0;
        var r = navigator && navigator.userAgent, o = r ? r.match(/xzone\/((\d\.?)+)/) : null;
        o && (o = o[1]);
        var i = o;
        t.appVersion = i;
        var a = /xzone/.test(r || "");
        t.isApp = a;
    },
    "5af8": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.compareLastVersion = t.compare = void 0;
        var r = n("5835"), o = function(e, t) {
            for (var n = String(e).split("."), r = t.split("."), o = Math.max(n.length, r.length); n.length < o; ) n.push("0");
            for (;r.length < o; ) r.push("0");
            for (var i = 0; i < o; i++) {
                var a = parseInt(n[i], 10), c = parseInt(r[i], 10);
                if (a > c) return 1;
                if (a < c) return -1;
            }
            return 0;
        };
        t.compare = o;
        t.compareLastVersion = function(e, t) {
            if (o(e, t) >= 0) {
                var n = String(e).split("."), r = t.split(".");
                return n[0] === r[0] && n[1] === r[1];
            }
            return !1;
        };
        t.default = function(e) {
            return o(r.appVersion, e) >= 0;
        };
    },
    "5afa": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getDefaultData = t.isCanObserve = t.getEleXPath = void 0;
        t.getEleXPath = function(e) {
            for (var t = e.tagName, n = e; n.parentElement; ) t += n.tagName, n = n.parentElement;
            return t;
        };
        t.isCanObserve = function(e) {
            for (var t = e; t; ) {
                if (!t.isCanObserve) return !1;
                t = t.$parent;
            }
            return !0;
        };
        t.getDefaultData = function(e) {
            return e || 0 === e ? e : "";
        };
    },
    "5ee7": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resetHttpUrl = t.databusHttp = t.invoiceHttp = t.gateWayJsonHttp = t.effectHttp = t.bffHttp = t.gateWayHttp = t.trackMaicaiHttp = t.trackHttp = t.payHttp = t.orchardHttp = t.farmHttp = t.javaUserHttp = t.http = t.pythonHttp = void 0;
        var o = r(n("3ea2")), i = r(n("c78f")), a = (0, o.default)({
            baseUrl: i.default.SERVER_API_MAICAI_PYTHON()
        });
        t.pythonHttp = a;
        var c = (0, o.default)({
            baseUrl: i.default.SERVER_API_MAICAI()
        });
        t.http = c;
        var s = (0, o.default)({
            baseUrl: i.default.SERVER_API_JAVA_USER()
        });
        t.javaUserHttp = s;
        var u = (0, o.default)({
            baseUrl: i.default.SERVER_API_FARM()
        });
        t.farmHttp = u;
        var l = (0, o.default)({
            baseUrl: i.default.SERVER_API_FARM()
        });
        t.orchardHttp = l;
        var f = (0, o.default)({
            baseUrl: i.default.SERVER_WX_H5_PAY()
        });
        t.payHttp = f;
        var p = (0, o.default)({
            baseUrl: i.default.SERVER_API_TRACK()
        });
        t.trackHttp = p;
        var d = (0, o.default)({
            baseUrl: i.default.SERVER_API_TRACK_MAICAI()
        });
        t.trackMaicaiHttp = d;
        var h = (0, o.default)({
            baseUrl: i.default.SERVER_API_GATEWAY()
        });
        t.gateWayHttp = h;
        var v = (0, o.default)({
            baseUrl: i.default.SERVER_API_BFF()
        });
        t.bffHttp = v;
        var _ = (0, o.default)({
            baseUrl: i.default.SERVER_API_EFFECT(),
            headers: {
                "Content-Type": "application/json"
            }
        });
        t.effectHttp = _;
        var g = (0, o.default)({
            baseUrl: i.default.SERVER_API_GATEWAY(),
            headers: {
                "Content-Type": "application/json"
            }
        });
        t.gateWayJsonHttp = g;
        var m = (0, o.default)({
            baseUrl: i.default.SERVER_API_INVOICE(),
            headers: {
                "Content-Type": "application/json"
            }
        });
        t.invoiceHttp = m;
        var y = (0, o.default)({
            baseUrl: i.default.SERVER_API_DATABUS(),
            headers: {
                "Content-Type": "application/json"
            }
        });
        t.databusHttp = y;
        t.resetHttpUrl = function(e) {
            a.setUrl(i.default.SERVER_API_MAICAI_PYTHON()), s.setUrl(i.default.SERVER_API_JAVA_USER()), 
            c.setUrl(i.default.SERVER_API_MAICAI()), f.setUrl(i.default.SERVER_WX_H5_PAY()), 
            h.setUrl(i.default.SERVER_API_GATEWAY()), g.setUrl(i.default.SERVER_API_GATEWAY()), 
            v.setUrl(i.default.SERVER_API_BFF()), _.setUrl(i.default.SERVER_API_EFFECT());
        };
    },
    "5f02": function(e, t, n) {
        e.exports = function(e) {
            return "object" === (void 0 === e ? "undefined" : _typeof(e)) && !0 === e.isAxiosError;
        };
    },
    "5fee": function(e, t, n) {
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o, i = n("f14d"), a = (o = {}, r(o, i.PATH.PAGE_GROUP_LIST, {
            titleName: "拼团"
        }), r(o, i.PATH.PAGE_GROUP_PRODUCT_DETAIL, {
            titleName: "拼团商品详情"
        }), r(o, i.PATH.PAGE_GROUP_DETAIL, {
            titleName: "拼团详情"
        }), r(o, i.PATH.PAGE_NEW_MAKE_ORDER, {
            titleName: "订单填写"
        }), r(o, i.PATH.PAGE_PAY_RESULT, {
            titleName: "支付结果"
        }), r(o, i.PATH.PAGE_ORDER_DETAIL, {
            titleName: "订单详情"
        }), r(o, i.PATH.PAGE_ADDRESS, {
            titleName: "地址薄列表"
        }), r(o, i.PATH.PAGE_ADDRESS_CREATE, {
            titleName: "创建/修改地址"
        }), r(o, i.PATH.PAGE_MAKE_ORDER_NOTE, {
            titleName: "备注"
        }), o);
        t.default = a;
    },
    "60b0": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = null, o = {
            namespaced: !0,
            state: {
                loadingShow: !1,
                text: ""
            },
            mutations: {
                showLoading: function(e, t) {
                    var n = (null === t || void 0 === t ? void 0 : t.duration) || 0, o = String((null === t || void 0 === t ? void 0 : t.ts) || "");
                    o && (n = 1 * (null === o || void 0 === o ? void 0 : o.substr(-4, 1)) ? 1 * o.substr(-4) : 1 * o.substr(-3)), 
                    t.show && n ? (e.text = (null === t || void 0 === t ? void 0 : t.limitMsg) || "前方拥挤，请稍后再试...", 
                    clearTimeout(r), e.loadingShow = !0, r = setTimeout(function() {
                        e.loadingShow = !1, clearTimeout(r);
                    }, n)) : t.show || (e.loadingShow = !1, clearTimeout(r));
                }
            }
        };
        t.default = o;
    },
    "624a": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = r(n("06ca")), i = r(n("e36c")), a = r(n("cf72")), c = r(n("2bbd")), s = new o.default();
        s.useArr([ {
            type: 1,
            callback: i.default
        }, {
            type: 2,
            callback: a.default
        }, {
            type: 3,
            callback: c.default
        } ]);
        var u = s;
        t.default = u;
    },
    6495: function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.mergeCommonShareParams = t.getPageOrigin = t.setPageOrigin = t.mergePageOrigin = t.ASSOCIATION = void 0;
        var a = "association";
        t.ASSOCIATION = a;
        var c = "", s = function(e) {
            if (c !== a || !e) return e;
            return e.includes("?") ? "".concat(e, "&page_origin=").concat(c) : "".concat(e, "?page_origin=").concat(c);
        };
        t.mergePageOrigin = s;
        t.setPageOrigin = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            c = e;
        };
        t.getPageOrigin = function() {
            return c;
        };
        t.mergeCommonShareParams = function(e) {
            var t = e.path;
            return o(o({}, e), {}, {
                path: s(t)
            });
        };
    },
    "655d": function(e, t, n) {
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SCENES = void 0, t.SCENES = r, function(e) {
            e[e.DEFAULT = 0] = "DEFAULT", e[e.VIP_PAGE_099_TAB_ADD = 1] = "VIP_PAGE_099_TAB_ADD", 
            e[e.REPLACE_099_POP_UP_ADD = 2] = "REPLACE_099_POP_UP_ADD", e[e.FLOOR_099_PRODUCT_LIST_ADD = 3] = "FLOOR_099_PRODUCT_LIST_ADD", 
            e[e.PRODUCT_LIST_ADD = 4] = "PRODUCT_LIST_ADD", e[e.SEARCH_ADD = 5] = "SEARCH_ADD", 
            e[e.PRODUCT_DETAIL_ADD = 6] = "PRODUCT_DETAIL_ADD";
        }(r || (t.SCENES = r = {}));
    },
    "66fd": function(e, t, n) {
        n.r(t), function(e) {
            function n(e) {
                return void 0 === e || null === e;
            }
            function r(e) {
                return void 0 !== e && null !== e;
            }
            function o(e) {
                return !0 === e;
            }
            function i(e) {
                return !1 === e;
            }
            function a(e) {
                return "string" == typeof e || "number" == typeof e || "symbol" === (void 0 === e ? "undefined" : _typeof(e)) || "boolean" == typeof e;
            }
            function c(e) {
                return null !== e && "object" === (void 0 === e ? "undefined" : _typeof(e));
            }
            function s(e) {
                return "[object Object]" === gn.call(e);
            }
            function u(e) {
                return "[object RegExp]" === gn.call(e);
            }
            function l(e) {
                var t = parseFloat(String(e));
                return t >= 0 && Math.floor(t) === t && isFinite(e);
            }
            function f(e) {
                return r(e) && "function" == typeof e.then && "function" == typeof e.catch;
            }
            function p(e) {
                return null == e ? "" : Array.isArray(e) || s(e) && e.toString === gn ? JSON.stringify(e, null, 2) : String(e);
            }
            function d(e) {
                var t = parseFloat(e);
                return isNaN(t) ? e : t;
            }
            function h(e, t) {
                for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
                return t ? function(e) {
                    return n[e.toLowerCase()];
                } : function(e) {
                    return n[e];
                };
            }
            function v(e, t) {
                if (e.length) {
                    var n = e.indexOf(t);
                    if (n > -1) return e.splice(n, 1);
                }
            }
            function _(e, t) {
                return En.call(e, t);
            }
            function g(e) {
                var t = Object.create(null);
                return function(n) {
                    return t[n] || (t[n] = e(n));
                };
            }
            function m(e, t) {
                t = t || 0;
                for (var n = e.length - t, r = new Array(n); n--; ) r[n] = e[n + t];
                return r;
            }
            function y(e, t) {
                for (var n in t) e[n] = t[n];
                return e;
            }
            function E(e) {
                for (var t = {}, n = 0; n < e.length; n++) e[n] && y(t, e[n]);
                return t;
            }
            function A(e, t, n) {}
            function b(e, t) {
                if (e === t) return !0;
                var n = c(e), r = c(t);
                if (!n || !r) return !n && !r && String(e) === String(t);
                try {
                    var o = Array.isArray(e), i = Array.isArray(t);
                    if (o && i) return e.length === t.length && e.every(function(e, n) {
                        return b(e, t[n]);
                    });
                    if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                    if (o || i) return !1;
                    var a = Object.keys(e), s = Object.keys(t);
                    return a.length === s.length && a.every(function(n) {
                        return b(e[n], t[n]);
                    });
                } catch (e) {
                    return !1;
                }
            }
            function P(e, t) {
                for (var n = 0; n < e.length; n++) if (b(e[n], t)) return n;
                return -1;
            }
            function O(e) {
                var t = !1;
                return function() {
                    t || (t = !0, e.apply(this, arguments));
                };
            }
            function T(e) {
                var t = (e + "").charCodeAt(0);
                return 36 === t || 95 === t;
            }
            function S(e, t, n, r) {
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !!r,
                    writable: !0,
                    configurable: !0
                });
            }
            function R(e) {
                if (!xn.test(e)) {
                    var t = e.split(".");
                    return function(e) {
                        for (var n = 0; n < t.length; n++) {
                            if (!e) return;
                            e = e[t[n]];
                        }
                        return e;
                    };
                }
            }
            function C(e) {
                return "function" == typeof e && /native code/.test(e.toString());
            }
            function w(e) {
                zn.SharedObject.targetStack.push(e), zn.SharedObject.target = e;
            }
            function k() {
                zn.SharedObject.targetStack.pop(), zn.SharedObject.target = zn.SharedObject.targetStack[zn.SharedObject.targetStack.length - 1];
            }
            function I(e) {
                return new Jn(void 0, void 0, void 0, String(e));
            }
            function D(e) {
                var t = new Jn(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
                return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, 
                t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, 
                t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
            }
            function x(e) {
                nr = e;
            }
            function L(e, t) {
                e.__proto__ = t;
            }
            function N(e, t, n) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    S(e, i, t[i]);
                }
            }
            function j(e, t) {
                var n;
                if (c(e) && !(e instanceof Jn)) return _(e, "__ob__") && e.__ob__ instanceof rr ? n = e.__ob__ : nr && !Bn() && (Array.isArray(e) || s(e)) && Object.isExtensible(e) && !e._isVue && (n = new rr(e)), 
                t && n && n.vmCount++, n;
            }
            function G(e, t, n, r, o) {
                var i = new zn(), a = Object.getOwnPropertyDescriptor(e, t);
                if (!a || !1 !== a.configurable) {
                    var c = a && a.get, s = a && a.set;
                    c && !s || 2 !== arguments.length || (n = e[t]);
                    var u = !o && j(n);
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var t = c ? c.call(e) : n;
                            return zn.SharedObject.target && (i.depend(), u && (u.dep.depend(), Array.isArray(t) && U(t))), 
                            t;
                        },
                        set: function(t) {
                            var r = c ? c.call(e) : n;
                            t === r || t !== t && r !== r || c && !s || (s ? s.call(e, t) : n = t, u = !o && j(t), 
                            i.notify());
                        }
                    });
                }
            }
            function H(e, t, n) {
                if (Array.isArray(e) && l(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), 
                n;
                if (t in e && !(t in Object.prototype)) return e[t] = n, n;
                var r = e.__ob__;
                return e._isVue || r && r.vmCount ? n : r ? (G(r.value, t, n), r.dep.notify(), n) : (e[t] = n, 
                n);
            }
            function M(e, t) {
                if (Array.isArray(e) && l(t)) e.splice(t, 1); else {
                    var n = e.__ob__;
                    e._isVue || n && n.vmCount || _(e, t) && (delete e[t], n && n.dep.notify());
                }
            }
            function U(e) {
                for (var t = void 0, n = 0, r = e.length; n < r; n++) (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), 
                Array.isArray(t) && U(t);
            }
            function $(e, t) {
                if (!t) return e;
                for (var n, r, o, i = Wn ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < i.length; a++) "__ob__" !== (n = i[a]) && (r = e[n], 
                o = t[n], _(e, n) ? r !== o && s(r) && s(o) && $(r, o) : H(e, n, o));
                return e;
            }
            function V(e, t, n) {
                return n ? function() {
                    var r = "function" == typeof t ? t.call(n, n) : t, o = "function" == typeof e ? e.call(n, n) : e;
                    return r ? $(r, o) : o;
                } : t ? e ? function() {
                    return $("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
                } : t : e;
            }
            function F(e, t) {
                var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [ t ] : e;
                return n ? B(n) : n;
            }
            function B(e) {
                for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t;
            }
            function K(e, t, n, r) {
                var o = Object.create(e || null);
                return t ? y(o, t) : o;
            }
            function W(e, t) {
                var n = e.props;
                if (n) {
                    var r, o, i, a = {};
                    if (Array.isArray(n)) for (r = n.length; r--; ) "string" == typeof (o = n[r]) && (i = bn(o), 
                    a[i] = {
                        type: null
                    }); else if (s(n)) for (var c in n) o = n[c], a[i = bn(c)] = s(o) ? o : {
                        type: o
                    };
                    e.props = a;
                }
            }
            function Y(e, t) {
                var n = e.inject;
                if (n) {
                    var r = e.inject = {};
                    if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r[n[o]] = {
                        from: n[o]
                    }; else if (s(n)) for (var i in n) {
                        var a = n[i];
                        r[i] = s(a) ? y({
                            from: i
                        }, a) : {
                            from: a
                        };
                    }
                }
            }
            function q(e) {
                var t = e.directives;
                if (t) for (var n in t) {
                    var r = t[n];
                    "function" == typeof r && (t[n] = {
                        bind: r,
                        update: r
                    });
                }
            }
            function z(e, t, n) {
                function r(r) {
                    var o = or[r] || ar;
                    c[r] = o(e[r], t[r], n, r);
                }
                if ("function" == typeof t && (t = t.options), W(t, n), Y(t, n), q(t), !t._base && (t.extends && (e = z(e, t.extends, n)), 
                t.mixins)) for (var o = 0, i = t.mixins.length; o < i; o++) e = z(e, t.mixins[o], n);
                var a, c = {};
                for (a in e) r(a);
                for (a in t) _(e, a) || r(a);
                return c;
            }
            function J(e, t, n, r) {
                if ("string" == typeof n) {
                    var o = e[t];
                    if (_(o, n)) return o[n];
                    var i = bn(n);
                    if (_(o, i)) return o[i];
                    var a = Pn(i);
                    return _(o, a) ? o[a] : o[n] || o[i] || o[a];
                }
            }
            function X(e, t, n, r) {
                var o = t[e], i = !_(n, e), a = n[e], c = te(Boolean, o.type);
                if (c > -1) if (i && !_(o, "default")) a = !1; else if ("" === a || a === Tn(e)) {
                    var s = te(String, o.type);
                    (s < 0 || c < s) && (a = !0);
                }
                if (void 0 === a) {
                    a = Q(r, o, e);
                    var u = nr;
                    x(!0), j(a), x(u);
                }
                return a;
            }
            function Q(e, t, n) {
                if (_(t, "default")) {
                    var r = t.default;
                    return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== Z(t.type) ? r.call(e) : r;
                }
            }
            function Z(e) {
                var t = e && e.toString().match(/^\s*function (\w+)/);
                return t ? t[1] : "";
            }
            function ee(e, t) {
                return Z(e) === Z(t);
            }
            function te(e, t) {
                if (!Array.isArray(t)) return ee(t, e) ? 0 : -1;
                for (var n = 0, r = t.length; n < r; n++) if (ee(t[n], e)) return n;
                return -1;
            }
            function ne(e, t, n) {
                w();
                try {
                    if (t) for (var r = t; r = r.$parent; ) {
                        var o = r.$options.errorCaptured;
                        if (o) for (var i = 0; i < o.length; i++) try {
                            if (!1 === o[i].call(r, e, t, n)) return;
                        } catch (e) {
                            oe(e, r, "errorCaptured hook");
                        }
                    }
                    oe(e, t, n);
                } finally {
                    k();
                }
            }
            function re(e, t, n, r, o) {
                var i;
                try {
                    (i = n ? e.apply(t, n) : e.call(t)) && !i._isVue && f(i) && !i._handled && (i.catch(function(e) {
                        return ne(e, r, o + " (Promise/async)");
                    }), i._handled = !0);
                } catch (e) {
                    ne(e, r, o);
                }
                return i;
            }
            function oe(e, t, n) {
                if (In.errorHandler) try {
                    return In.errorHandler.call(null, e, t, n);
                } catch (t) {
                    t !== e && ie(t, null, "config.errorHandler");
                }
                ie(e, t, n);
            }
            function ie(e, t, n) {
                if (!Nn && !jn || "undefined" == typeof console) throw e;
                console.error(e);
            }
            function ae() {
                sr = !1;
                var e = cr.slice(0);
                cr.length = 0;
                for (var t = 0; t < e.length; t++) e[t]();
            }
            function ce(e, t) {
                var n;
                if (cr.push(function() {
                    if (e) try {
                        e.call(t);
                    } catch (e) {
                        ne(e, t, "nextTick");
                    } else n && n(t);
                }), sr || (sr = !0, ir()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
                    n = e;
                });
            }
            function se(e) {
                ue(e, dr), dr.clear();
            }
            function ue(e, t) {
                var n, r, o = Array.isArray(e);
                if (!(!o && !c(e) || Object.isFrozen(e) || e instanceof Jn)) {
                    if (e.__ob__) {
                        var i = e.__ob__.dep.id;
                        if (t.has(i)) return;
                        t.add(i);
                    }
                    if (o) for (n = e.length; n--; ) ue(e[n], t); else for (n = (r = Object.keys(e)).length; n--; ) ue(e[r[n]], t);
                }
            }
            function le(e, t) {
                function n() {
                    var e = arguments, r = n.fns;
                    if (!Array.isArray(r)) return re(r, null, arguments, t, "v-on handler");
                    for (var o = r.slice(), i = 0; i < o.length; i++) re(o[i], null, e, t, "v-on handler");
                }
                return n.fns = e, n;
            }
            function fe(e, t, r, i, a, c) {
                var s, u, l, f;
                for (s in e) u = e[s], l = t[s], f = hr(s), n(u) || (n(l) ? (n(u.fns) && (u = e[s] = le(u, c)), 
                o(f.once) && (u = e[s] = a(f.name, u, f.capture)), r(f.name, u, f.capture, f.passive, f.params)) : u !== l && (l.fns = u, 
                e[s] = l));
                for (s in t) n(e[s]) && (f = hr(s), i(f.name, t[s], f.capture));
            }
            function pe(e, t, o, i) {
                var a = t.options.mpOptions && t.options.mpOptions.properties;
                if (n(a)) return o;
                var c = t.options.mpOptions.externalClasses || [], s = e.attrs, u = e.props;
                if (r(s) || r(u)) for (var l in a) {
                    var f = Tn(l);
                    (he(o, u, l, f, !0) || he(o, s, l, f, !1)) && o[l] && -1 !== c.indexOf(f) && i[bn(o[l])] && (o[l] = i[bn(o[l])]);
                }
                return o;
            }
            function de(e, t, o, i) {
                var a = t.options.props;
                if (n(a)) return pe(e, t, {}, i);
                var c = {}, s = e.attrs, u = e.props;
                if (r(s) || r(u)) for (var l in a) {
                    var f = Tn(l);
                    he(c, u, l, f, !0) || he(c, s, l, f, !1);
                }
                return pe(e, t, c, i);
            }
            function he(e, t, n, o, i) {
                if (r(t)) {
                    if (_(t, n)) return e[n] = t[n], i || delete t[n], !0;
                    if (_(t, o)) return e[n] = t[o], i || delete t[o], !0;
                }
                return !1;
            }
            function ve(e) {
                for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                return e;
            }
            function _e(e) {
                return a(e) ? [ I(e) ] : Array.isArray(e) ? me(e) : void 0;
            }
            function ge(e) {
                return r(e) && r(e.text) && i(e.isComment);
            }
            function me(e, t) {
                var i, c, s, u, l = [];
                for (i = 0; i < e.length; i++) n(c = e[i]) || "boolean" == typeof c || (s = l.length - 1, 
                u = l[s], Array.isArray(c) ? c.length > 0 && (c = me(c, (t || "") + "_" + i), ge(c[0]) && ge(u) && (l[s] = I(u.text + c[0].text), 
                c.shift()), l.push.apply(l, c)) : a(c) ? ge(u) ? l[s] = I(u.text + c) : "" !== c && l.push(I(c)) : ge(c) && ge(u) ? l[s] = I(u.text + c.text) : (o(e._isVList) && r(c.tag) && n(c.key) && r(t) && (c.key = "__vlist" + t + "_" + i + "__"), 
                l.push(c)));
                return l;
            }
            function ye(e) {
                var t = e.$options.provide;
                t && (e._provided = "function" == typeof t ? t.call(e) : t);
            }
            function Ee(e) {
                var t = Ae(e.$options.inject, e);
                t && (x(!1), Object.keys(t).forEach(function(n) {
                    G(e, n, t[n]);
                }), x(!0));
            }
            function Ae(e, t) {
                if (e) {
                    for (var n = Object.create(null), r = Wn ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < r.length; o++) {
                        var i = r[o];
                        if ("__ob__" !== i) {
                            for (var a = e[i].from, c = t; c; ) {
                                if (c._provided && _(c._provided, a)) {
                                    n[i] = c._provided[a];
                                    break;
                                }
                                c = c.$parent;
                            }
                            if (!c && "default" in e[i]) {
                                var s = e[i].default;
                                n[i] = "function" == typeof s ? s.call(t) : s;
                            }
                        }
                    }
                    return n;
                }
            }
            function be(e, t) {
                if (!e || !e.length) return {};
                for (var n = {}, r = 0, o = e.length; r < o; r++) {
                    var i = e[r], a = i.data;
                    if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== t && i.fnContext !== t || !a || null == a.slot) i.asyncMeta && i.asyncMeta.data && "page" === i.asyncMeta.data.slot ? (n.page || (n.page = [])).push(i) : (n.default || (n.default = [])).push(i); else {
                        var c = a.slot, s = n[c] || (n[c] = []);
                        "template" === i.tag ? s.push.apply(s, i.children || []) : s.push(i);
                    }
                }
                for (var u in n) n[u].every(Pe) && delete n[u];
                return n;
            }
            function Pe(e) {
                return e.isComment && !e.asyncFactory || " " === e.text;
            }
            function Oe(e, t, n) {
                var r, o = Object.keys(t).length > 0, i = e ? !!e.$stable : !o, a = e && e.$key;
                if (e) {
                    if (e._normalized) return e._normalized;
                    if (i && n && n !== _n && a === n.$key && !o && !n.$hasNormal) return n;
                    for (var c in r = {}, e) e[c] && "$" !== c[0] && (r[c] = Te(t, c, e[c]));
                } else r = {};
                for (var s in t) s in r || (r[s] = Se(t, s));
                return e && Object.isExtensible(e) && (e._normalized = r), S(r, "$stable", i), S(r, "$key", a), 
                S(r, "$hasNormal", o), r;
            }
            function Te(e, t, n) {
                var r = function() {
                    var e = arguments.length ? n.apply(null, arguments) : n({});
                    return (e = e && "object" === (void 0 === e ? "undefined" : _typeof(e)) && !Array.isArray(e) ? [ e ] : _e(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
                };
                return n.proxy && Object.defineProperty(e, t, {
                    get: r,
                    enumerable: !0,
                    configurable: !0
                }), r;
            }
            function Se(e, t) {
                return function() {
                    return e[t];
                };
            }
            function Re(e, t) {
                var n, o, i, a, s;
                if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), o = 0, 
                i = e.length; o < i; o++) n[o] = t(e[o], o, o, o); else if ("number" == typeof e) for (n = new Array(e), 
                o = 0; o < e; o++) n[o] = t(o + 1, o, o, o); else if (c(e)) if (Wn && e[Symbol.iterator]) {
                    n = [];
                    for (var u = e[Symbol.iterator](), l = u.next(); !l.done; ) n.push(t(l.value, n.length, o++, o)), 
                    l = u.next();
                } else for (a = Object.keys(e), n = new Array(a.length), o = 0, i = a.length; o < i; o++) s = a[o], 
                n[o] = t(e[s], s, o, o);
                return r(n) || (n = []), n._isVList = !0, n;
            }
            function Ce(e, t, n, r) {
                var o, i = this.$scopedSlots[e];
                i ? (n = n || {}, r && (n = y(y({}, r), n)), o = i(n, this, n._i) || t) : o = this.$slots[e] || t;
                var a = n && n.slot;
                return a ? this.$createElement("template", {
                    slot: a
                }, o) : o;
            }
            function we(e) {
                return J(this.$options, "filters", e, !0) || Cn;
            }
            function ke(e, t) {
                return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
            }
            function Ie(e, t, n, r, o) {
                var i = In.keyCodes[t] || n;
                return o && r && !In.keyCodes[t] ? ke(o, r) : i ? ke(i, e) : r ? Tn(r) !== t : void 0;
            }
            function De(e, t, n, r, o) {
                if (n && c(n)) {
                    var i;
                    Array.isArray(n) && (n = E(n));
                    for (var a in n) !function(a) {
                        if ("class" === a || "style" === a || yn(a)) i = e; else {
                            var c = e.attrs && e.attrs.type;
                            i = r || In.mustUseProp(t, c, a) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                        }
                        var s = bn(a), u = Tn(a);
                        s in i || u in i || (i[a] = n[a], !o) || ((e.on || (e.on = {}))["update:" + a] = function(e) {
                            n[a] = e;
                        });
                    }(a);
                }
                return e;
            }
            function xe(e, t) {
                var n = this._staticTrees || (this._staticTrees = []), r = n[e];
                return r && !t || (r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), 
                Ne(r, "__static__" + e, !1)), r;
            }
            function Le(e, t, n) {
                return Ne(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
            }
            function Ne(e, t, n) {
                if (Array.isArray(e)) for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && je(e[r], t + "_" + r, n); else je(e, t, n);
            }
            function je(e, t, n) {
                e.isStatic = !0, e.key = t, e.isOnce = n;
            }
            function Ge(e, t) {
                if (t && s(t)) {
                    var n = e.on = e.on ? y({}, e.on) : {};
                    for (var r in t) {
                        var o = n[r], i = t[r];
                        n[r] = o ? [].concat(o, i) : i;
                    }
                }
                return e;
            }
            function He(e, t, n, r) {
                t = t || {
                    $stable: !n
                };
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    Array.isArray(i) ? He(i, t, n) : i && (i.proxy && (i.fn.proxy = !0), t[i.key] = i.fn);
                }
                return r && (t.$key = r), t;
            }
            function Me(e, t) {
                for (var n = 0; n < t.length; n += 2) {
                    var r = t[n];
                    "string" == typeof r && r && (e[t[n]] = t[n + 1]);
                }
                return e;
            }
            function Ue(e, t) {
                return "string" == typeof e ? t + e : e;
            }
            function $e(e) {
                e._o = Le, e._n = d, e._s = p, e._l = Re, e._t = Ce, e._q = b, e._i = P, e._m = xe, 
                e._f = we, e._k = Ie, e._b = De, e._v = I, e._e = Qn, e._u = He, e._g = Ge, e._d = Me, 
                e._p = Ue;
            }
            function Ve(e, t, n, r, i) {
                var a, c = this, s = i.options;
                _(r, "_uid") ? (a = Object.create(r), a._original = r) : (a = r, r = r._original);
                var u = o(s._compiled), l = !u;
                this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || _n, 
                this.injections = Ae(s.inject, r), this.slots = function() {
                    return c.$slots || Oe(e.scopedSlots, c.$slots = be(n, r)), c.$slots;
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function() {
                        return Oe(e.scopedSlots, this.slots());
                    }
                }), u && (this.$options = s, this.$slots = this.slots(), this.$scopedSlots = Oe(e.scopedSlots, this.$slots)), 
                s._scopeId ? this._c = function(e, t, n, o) {
                    var i = Xe(a, e, t, n, o, l);
                    return i && !Array.isArray(i) && (i.fnScopeId = s._scopeId, i.fnContext = r), i;
                } : this._c = function(e, t, n, r) {
                    return Xe(a, e, t, n, r, l);
                };
            }
            function Fe(e, t, n, o, i) {
                var a = e.options, c = {}, s = a.props;
                if (r(s)) for (var u in s) c[u] = X(u, s, t || _n); else r(n.attrs) && Ke(c, n.attrs), 
                r(n.props) && Ke(c, n.props);
                var l = new Ve(n, c, i, o, e), f = a.render.call(null, l._c, l);
                if (f instanceof Jn) return Be(f, n, l.parent, a, l);
                if (Array.isArray(f)) {
                    for (var p = _e(f) || [], d = new Array(p.length), h = 0; h < p.length; h++) d[h] = Be(p[h], n, l.parent, a, l);
                    return d;
                }
            }
            function Be(e, t, n, r, o) {
                var i = D(e);
                return i.fnContext = n, i.fnOptions = r, t.slot && ((i.data || (i.data = {})).slot = t.slot), 
                i;
            }
            function Ke(e, t) {
                for (var n in t) e[bn(n)] = t[n];
            }
            function We(e, t, i, a, s) {
                if (!n(e)) {
                    var u = i.$options._base;
                    if (c(e) && (e = u.extend(e)), "function" == typeof e) {
                        var l;
                        if (n(e.cid) && (l = e, void 0 === (e = ot(l, u)))) return rt(l, t, i, a, s);
                        t = t || {}, Ht(e), r(t.model) && Je(e.options, t);
                        var f = de(t, e, s, i);
                        if (o(e.options.functional)) return Fe(e, f, t, i, a);
                        var p = t.on;
                        if (t.on = t.nativeOn, o(e.options.abstract)) {
                            var d = t.slot;
                            t = {}, d && (t.slot = d);
                        }
                        qe(t);
                        var h = e.options.name || s;
                        return new Jn("vue-component-" + e.cid + (h ? "-" + h : ""), t, void 0, void 0, void 0, i, {
                            Ctor: e,
                            propsData: f,
                            listeners: p,
                            tag: s,
                            children: a
                        }, l);
                    }
                }
            }
            function Ye(e, t) {
                var n = {
                    _isComponent: !0,
                    _parentVnode: e,
                    parent: t
                }, o = e.data.inlineTemplate;
                return r(o) && (n.render = o.render, n.staticRenderFns = o.staticRenderFns), new e.componentOptions.Ctor(n);
            }
            function qe(e) {
                for (var t = e.hook || (e.hook = {}), n = 0; n < gr.length; n++) {
                    var r = gr[n], o = t[r], i = _r[r];
                    o === i || o && o._merged || (t[r] = o ? ze(i, o) : i);
                }
            }
            function ze(e, t) {
                var n = function(n, r) {
                    e(n, r), t(n, r);
                };
                return n._merged = !0, n;
            }
            function Je(e, t) {
                var n = e.model && e.model.prop || "value", o = e.model && e.model.event || "input";
                (t.attrs || (t.attrs = {}))[n] = t.model.value;
                var i = t.on || (t.on = {}), a = i[o], c = t.model.callback;
                r(a) ? (Array.isArray(a) ? -1 === a.indexOf(c) : a !== c) && (i[o] = [ c ].concat(a)) : i[o] = c;
            }
            function Xe(e, t, n, r, i, c) {
                return (Array.isArray(n) || a(n)) && (i = r, r = n, n = void 0), o(c) && (i = yr), 
                Qe(e, t, n, r, i);
            }
            function Qe(e, t, n, o, i) {
                if (r(n) && r(n.__ob__)) return Qn();
                if (r(n) && r(n.is) && (t = n.is), !t) return Qn();
                var a, c, s;
                return Array.isArray(o) && "function" == typeof o[0] && (n = n || {}, n.scopedSlots = {
                    default: o[0]
                }, o.length = 0), i === yr ? o = _e(o) : i === mr && (o = ve(o)), "string" == typeof t ? (c = e.$vnode && e.$vnode.ns || In.getTagNamespace(t), 
                a = In.isReservedTag(t) ? new Jn(In.parsePlatformTagName(t), n, o, void 0, void 0, e) : n && n.pre || !r(s = J(e.$options, "components", t)) ? new Jn(t, n, o, void 0, void 0, e) : We(s, n, e, o, t)) : a = We(t, n, e, o), 
                Array.isArray(a) ? a : r(a) ? (r(c) && Ze(a, c), r(n) && et(n), a) : Qn();
            }
            function Ze(e, t, i) {
                if (e.ns = t, "foreignObject" === e.tag && (t = void 0, i = !0), r(e.children)) for (var a = 0, c = e.children.length; a < c; a++) {
                    var s = e.children[a];
                    r(s.tag) && (n(s.ns) || o(i) && "svg" !== s.tag) && Ze(s, t, i);
                }
            }
            function et(e) {
                c(e.style) && se(e.style), c(e.class) && se(e.class);
            }
            function tt(e) {
                e._vnode = null, e._staticTrees = null;
                var t = e.$options, n = e.$vnode = t._parentVnode, r = n && n.context;
                e.$slots = be(t._renderChildren, r), e.$scopedSlots = _n, e._c = function(t, n, r, o) {
                    return Xe(e, t, n, r, o, !1);
                }, e.$createElement = function(t, n, r, o) {
                    return Xe(e, t, n, r, o, !0);
                };
                var o = n && n.data;
                G(e, "$attrs", o && o.attrs || _n, null, !0), G(e, "$listeners", t._parentListeners || _n, null, !0);
            }
            function nt(e, t) {
                return (e.__esModule || Wn && "Module" === e[Symbol.toStringTag]) && (e = e.default), 
                c(e) ? t.extend(e) : e;
            }
            function rt(e, t, n, r, o) {
                var i = Qn();
                return i.asyncFactory = e, i.asyncMeta = {
                    data: t,
                    context: n,
                    children: r,
                    tag: o
                }, i;
            }
            function ot(e, t) {
                if (o(e.error) && r(e.errorComp)) return e.errorComp;
                if (r(e.resolved)) return e.resolved;
                var i = Er;
                if (i && r(e.owners) && -1 === e.owners.indexOf(i) && e.owners.push(i), o(e.loading) && r(e.loadingComp)) return e.loadingComp;
                if (i && !r(e.owners)) {
                    var a = e.owners = [ i ], s = !0, u = null, l = null;
                    i.$on("hook:destroyed", function() {
                        return v(a, i);
                    });
                    var p = function(e) {
                        for (var t = 0, n = a.length; t < n; t++) a[t].$forceUpdate();
                        e && (a.length = 0, null !== u && (clearTimeout(u), u = null), null !== l && (clearTimeout(l), 
                        l = null));
                    }, d = O(function(n) {
                        e.resolved = nt(n, t), s ? a.length = 0 : p(!0);
                    }), h = O(function(t) {
                        r(e.errorComp) && (e.error = !0, p(!0));
                    }), _ = e(d, h);
                    return c(_) && (f(_) ? n(e.resolved) && _.then(d, h) : f(_.component) && (_.component.then(d, h), 
                    r(_.error) && (e.errorComp = nt(_.error, t)), r(_.loading) && (e.loadingComp = nt(_.loading, t), 
                    0 === _.delay ? e.loading = !0 : u = setTimeout(function() {
                        u = null, n(e.resolved) && n(e.error) && (e.loading = !0, p(!1));
                    }, _.delay || 200)), r(_.timeout) && (l = setTimeout(function() {
                        l = null, n(e.resolved) && h(null);
                    }, _.timeout)))), s = !1, e.loading ? e.loadingComp : e.resolved;
                }
            }
            function it(e) {
                return e.isComment && e.asyncFactory;
            }
            function at(e) {
                if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (r(n) && (r(n.componentOptions) || it(n))) return n;
                }
            }
            function ct(e) {
                e._events = Object.create(null), e._hasHookEvent = !1;
                var t = e.$options._parentListeners;
                t && ft(e, t);
            }
            function st(e, t) {
                vr.$on(e, t);
            }
            function ut(e, t) {
                vr.$off(e, t);
            }
            function lt(e, t) {
                var n = vr;
                return function r() {
                    null !== t.apply(null, arguments) && n.$off(e, r);
                };
            }
            function ft(e, t, n) {
                vr = e, fe(t, n || {}, st, ut, lt, e), vr = void 0;
            }
            function pt(e) {
                var t = Ar;
                return Ar = e, function() {
                    Ar = t;
                };
            }
            function dt(e) {
                var t = e.$options, n = t.parent;
                if (n && !t.abstract) {
                    for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                    n.$children.push(e);
                }
                e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, 
                e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, 
                e._isBeingDestroyed = !1;
            }
            function ht(e, t, n, r, o) {
                var i = r.data.scopedSlots, a = e.$scopedSlots, c = !!(i && !i.$stable || a !== _n && !a.$stable || i && e.$scopedSlots.$key !== i.$key), s = !!(o || e.$options._renderChildren || c);
                if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), 
                e.$options._renderChildren = o, e.$attrs = r.data.attrs || _n, e.$listeners = n || _n, 
                t && e.$options.props) {
                    x(!1);
                    for (var u = e._props, l = e.$options._propKeys || [], f = 0; f < l.length; f++) {
                        var p = l[f], d = e.$options.props;
                        u[p] = X(p, d, t, e);
                    }
                    x(!0), e.$options.propsData = t;
                }
                e._$updateProperties && e._$updateProperties(e), n = n || _n;
                var h = e.$options._parentListeners;
                e.$options._parentListeners = n, ft(e, n, h), s && (e.$slots = be(o, r.context), 
                e.$forceUpdate());
            }
            function vt(e) {
                for (;e && (e = e.$parent); ) if (e._inactive) return !0;
                return !1;
            }
            function _t(e, t) {
                if (t) {
                    if (e._directInactive = !1, vt(e)) return;
                } else if (e._directInactive) return;
                if (e._inactive || null === e._inactive) {
                    e._inactive = !1;
                    for (var n = 0; n < e.$children.length; n++) _t(e.$children[n]);
                    mt(e, "activated");
                }
            }
            function gt(e, t) {
                if (!(t && (e._directInactive = !0, vt(e)) || e._inactive)) {
                    e._inactive = !0;
                    for (var n = 0; n < e.$children.length; n++) gt(e.$children[n]);
                    mt(e, "deactivated");
                }
            }
            function mt(e, t) {
                w();
                var n = e.$options[t], r = t + " hook";
                if (n) for (var o = 0, i = n.length; o < i; o++) re(n[o], e, null, e, r);
                e._hasHookEvent && e.$emit("hook:" + t), k();
            }
            function yt() {
                Rr = br.length = Pr.length = 0, Or = {}, Tr = Sr = !1;
            }
            function Et() {
                var e, t;
                for (Cr(), Sr = !0, br.sort(function(e, t) {
                    return e.id - t.id;
                }), Rr = 0; Rr < br.length; Rr++) (e = br[Rr]).before && e.before(), t = e.id, Or[t] = null, 
                e.run();
                var n = Pr.slice(), r = br.slice();
                yt(), Pt(n), At(r), Kn && In.devtools && Kn.emit("flush");
            }
            function At(e) {
                for (var t = e.length; t--; ) {
                    var n = e[t], r = n.vm;
                    r._watcher === n && r._isMounted && !r._isDestroyed && mt(r, "updated");
                }
            }
            function bt(e) {
                e._inactive = !1, Pr.push(e);
            }
            function Pt(e) {
                for (var t = 0; t < e.length; t++) e[t]._inactive = !0, _t(e[t], !0);
            }
            function Ot(e) {
                var t = e.id;
                if (null == Or[t]) {
                    if (Or[t] = !0, Sr) {
                        for (var n = br.length - 1; n > Rr && br[n].id > e.id; ) n--;
                        br.splice(n + 1, 0, e);
                    } else br.push(e);
                    Tr || (Tr = !0, ce(Et));
                }
            }
            function Tt(e, t, n) {
                Dr.get = function() {
                    return this[t][n];
                }, Dr.set = function(e) {
                    this[t][n] = e;
                }, Object.defineProperty(e, n, Dr);
            }
            function St(e) {
                e._watchers = [];
                var t = e.$options;
                t.props && Rt(e, t.props), t.methods && Lt(e, t.methods), t.data ? Ct(e) : j(e._data = {}, !0), 
                t.computed && kt(e, t.computed), t.watch && t.watch !== $n && Nt(e, t.watch);
            }
            function Rt(e, t) {
                var n = e.$options.propsData || {}, r = e._props = {}, o = e.$options._propKeys = [];
                !e.$parent || x(!1);
                for (var i in t) !function(i) {
                    o.push(i);
                    var a = X(i, t, n, e);
                    G(r, i, a), i in e || Tt(e, "_props", i);
                }(i);
                x(!0);
            }
            function Ct(e) {
                var t = e.$options.data;
                s(t = e._data = "function" == typeof t ? wt(t, e) : t || {}) || (t = {});
                for (var n = Object.keys(t), r = e.$options.props, o = (e.$options.methods, n.length); o--; ) {
                    var i = n[o];
                    r && _(r, i) || T(i) || Tt(e, "_data", i);
                }
                j(t, !0);
            }
            function wt(e, t) {
                w();
                try {
                    return e.call(t, t);
                } catch (e) {
                    return ne(e, t, "data()"), {};
                } finally {
                    k();
                }
            }
            function kt(e, t) {
                var n = e._computedWatchers = Object.create(null), r = Bn();
                for (var o in t) {
                    var i = t[o], a = "function" == typeof i ? i : i.get;
                    r || (n[o] = new Ir(e, a || A, A, xr)), o in e || It(e, o, i);
                }
            }
            function It(e, t, n) {
                var r = !Bn();
                "function" == typeof n ? (Dr.get = r ? Dt(t) : xt(n), Dr.set = A) : (Dr.get = n.get ? r && !1 !== n.cache ? Dt(t) : xt(n.get) : A, 
                Dr.set = n.set || A), Object.defineProperty(e, t, Dr);
            }
            function Dt(e) {
                return function() {
                    var t = this._computedWatchers && this._computedWatchers[e];
                    if (t) return t.dirty && t.evaluate(), zn.SharedObject.target && t.depend(), t.value;
                };
            }
            function xt(e) {
                return function() {
                    return e.call(this, this);
                };
            }
            function Lt(e, t) {
                e.$options.props;
                for (var n in t) e[n] = "function" != typeof t[n] ? A : Sn(t[n], e);
            }
            function Nt(e, t) {
                for (var n in t) {
                    var r = t[n];
                    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) jt(e, n, r[o]); else jt(e, n, r);
                }
            }
            function jt(e, t, n, r) {
                return s(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
            }
            function Gt(e, t) {
                var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
                n.parent = t.parent, n._parentVnode = r;
                var o = r.componentOptions;
                n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, 
                n._componentTag = o.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
            }
            function Ht(e) {
                var t = e.options;
                if (e.super) {
                    var n = Ht(e.super);
                    if (n !== e.superOptions) {
                        e.superOptions = n;
                        var r = Mt(e);
                        r && y(e.extendOptions, r), (t = e.options = z(n, e.extendOptions)).name && (t.components[t.name] = e);
                    }
                }
                return t;
            }
            function Mt(e) {
                var t, n = e.options, r = e.sealedOptions;
                for (var o in n) n[o] !== r[o] && (t || (t = {}), t[o] = n[o]);
                return t;
            }
            function Ut(e) {
                this._init(e);
            }
            function $t(e) {
                e.use = function(e) {
                    var t = this._installedPlugins || (this._installedPlugins = []);
                    if (t.indexOf(e) > -1) return this;
                    var n = m(arguments, 1);
                    return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), 
                    t.push(e), this;
                };
            }
            function Vt(e) {
                e.mixin = function(e) {
                    return this.options = z(this.options, e), this;
                };
            }
            function Ft(e) {
                e.cid = 0;
                var t = 1;
                e.extend = function(e) {
                    e = e || {};
                    var n = this, r = n.cid, o = e._Ctor || (e._Ctor = {});
                    if (o[r]) return o[r];
                    var i = e.name || n.options.name, a = function(e) {
                        this._init(e);
                    };
                    return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = t++, 
                    a.options = z(n.options, e), a.super = n, a.options.props && Bt(a), a.options.computed && Kt(a), 
                    a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, wn.forEach(function(e) {
                        a[e] = n[e];
                    }), i && (a.options.components[i] = a), a.superOptions = n.options, a.extendOptions = e, 
                    a.sealedOptions = y({}, a.options), o[r] = a, a;
                };
            }
            function Bt(e) {
                var t = e.options.props;
                for (var n in t) Tt(e.prototype, "_props", n);
            }
            function Kt(e) {
                var t = e.options.computed;
                for (var n in t) It(e.prototype, n, t[n]);
            }
            function Wt(e) {
                wn.forEach(function(t) {
                    e[t] = function(e, n) {
                        return n ? ("component" === t && s(n) && (n.name = n.name || e, n = this.options._base.extend(n)), 
                        "directive" === t && "function" == typeof n && (n = {
                            bind: n,
                            update: n
                        }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
                    };
                });
            }
            function Yt(e) {
                return e && (e.Ctor.options.name || e.tag);
            }
            function qt(e, t) {
                return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!u(e) && e.test(t);
            }
            function zt(e, t) {
                var n = e.cache, r = e.keys, o = e._vnode;
                for (var i in n) {
                    var a = n[i];
                    if (a) {
                        var c = Yt(a.componentOptions);
                        c && !t(c) && Jt(n, i, r, o);
                    }
                }
            }
            function Jt(e, t, n, r) {
                var o = e[t];
                !o || r && o.tag === r.tag || o.componentInstance.$destroy(), e[t] = null, v(n, t);
            }
            function Xt(e, t) {
                var n = {};
                return Qt(e, t), Zt(e, t, "", n), n;
            }
            function Qt(e, t) {
                if (e !== t) {
                    var n = tn(e), r = tn(t);
                    if (n == Hr && r == Hr) {
                        if (Object.keys(e).length >= Object.keys(t).length) for (var o in t) {
                            var i = e[o];
                            void 0 === i ? e[o] = null : Qt(i, t[o]);
                        }
                    } else n == Gr && r == Gr && e.length >= t.length && t.forEach(function(t, n) {
                        Qt(e[n], t);
                    });
                }
            }
            function Zt(e, t, n, r) {
                if (e !== t) {
                    var o = tn(e), i = tn(t);
                    if (o == Hr) if (i != Hr || Object.keys(e).length < Object.keys(t).length) en(r, n, e); else {
                        for (var a in e) !function(o) {
                            var i = e[o], a = t[o], c = tn(i), s = tn(a);
                            if (c != Gr && c != Hr) i != t[o] && en(r, ("" == n ? "" : n + ".") + o, i); else if (c == Gr) s != Gr || i.length < a.length ? en(r, ("" == n ? "" : n + ".") + o, i) : i.forEach(function(e, t) {
                                Zt(e, a[t], ("" == n ? "" : n + ".") + o + "[" + t + "]", r);
                            }); else if (c == Hr) if (s != Hr || Object.keys(i).length < Object.keys(a).length) en(r, ("" == n ? "" : n + ".") + o, i); else for (var u in i) Zt(i[u], a[u], ("" == n ? "" : n + ".") + o + "." + u, r);
                        }(a);
                    } else o == Gr ? i != Gr || e.length < t.length ? en(r, n, e) : e.forEach(function(e, o) {
                        Zt(e, t[o], n + "[" + o + "]", r);
                    }) : en(r, n, e);
                }
            }
            function en(e, t, n) {
                e[t] = n;
            }
            function tn(e) {
                return Object.prototype.toString.call(e);
            }
            function nn(e) {
                if (e.__next_tick_callbacks && e.__next_tick_callbacks.length) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var t = e.$scope;
                        console.log("[" + +new Date() + "][" + (t.is || t.route) + "][" + e._uid + "]:flushCallbacks[" + e.__next_tick_callbacks.length + "]");
                    }
                    var n = e.__next_tick_callbacks.slice(0);
                    e.__next_tick_callbacks.length = 0;
                    for (var r = 0; r < n.length; r++) n[r]();
                }
            }
            function rn(e) {
                return br.find(function(t) {
                    return e._watcher === t;
                });
            }
            function on(e, t) {
                if (!e.__next_tick_pending && !rn(e)) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var n = e.$scope;
                        console.log("[" + +new Date() + "][" + (n.is || n.route) + "][" + e._uid + "]:nextVueTick");
                    }
                    return ce(t, e);
                }
                if (Object({
                    NODE_ENV: "production",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var r = e.$scope;
                    console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + e._uid + "]:nextMPTick");
                }
                var o;
                if (e.__next_tick_callbacks || (e.__next_tick_callbacks = []), e.__next_tick_callbacks.push(function() {
                    if (t) try {
                        t.call(e);
                    } catch (t) {
                        ne(t, e, "nextTick");
                    } else o && o(e);
                }), !t && "undefined" != typeof Promise) return new Promise(function(e) {
                    o = e;
                });
            }
            function an(e) {
                var t = Object.create(null);
                return [].concat(Object.keys(e._data || {}), Object.keys(e._computedWatchers || {})).reduce(function(t, n) {
                    return t[n] = e[n], t;
                }, t), Object.assign(t, e.$mp.data || {}), Array.isArray(e.$options.behaviors) && -1 !== e.$options.behaviors.indexOf("uni://form-field") && (t.name = e.name, 
                t.value = e.value), JSON.parse(JSON.stringify(t));
            }
            function cn() {}
            function sn(e, t, n) {
                if (!e.mpType) return e;
                "app" === e.mpType && (e.$options.render = cn), e.$options.render || (e.$options.render = cn), 
                "mp-toutiao" !== e.mpHost && mt(e, "beforeMount");
                return new Ir(e, function() {
                    e._update(e._render(), n);
                }, A, {
                    before: function() {
                        e._isMounted && !e._isDestroyed && mt(e, "beforeUpdate");
                    }
                }, !0), n = !1, e;
            }
            function un(e, t) {
                return r(e) || r(t) ? ln(e, fn(t)) : "";
            }
            function ln(e, t) {
                return e ? t ? e + " " + t : e : t || "";
            }
            function fn(e) {
                return Array.isArray(e) ? pn(e) : c(e) ? dn(e) : "string" == typeof e ? e : "";
            }
            function pn(e) {
                for (var t, n = "", o = 0, i = e.length; o < i; o++) r(t = fn(e[o])) && "" !== t && (n && (n += " "), 
                n += t);
                return n;
            }
            function dn(e) {
                var t = "";
                for (var n in e) e[n] && (t && (t += " "), t += n);
                return t;
            }
            function hn(e) {
                return Array.isArray(e) ? E(e) : "string" == typeof e ? Mr(e) : e;
            }
            function vn(e, t) {
                var n = t.split("."), r = n[0];
                return 0 === r.indexOf("__$n") && (r = parseInt(r.replace("__$n", ""))), 1 === n.length ? e[r] : vn(e[r], n.slice(1).join("."));
            }
            var _n = Object.freeze({}), gn = Object.prototype.toString;
            h("slot,component", !0);
            var mn, yn = h("key,ref,slot,slot-scope,is"), En = Object.prototype.hasOwnProperty, An = /-(\w)/g, bn = g(function(e) {
                return e.replace(An, function(e, t) {
                    return t ? t.toUpperCase() : "";
                });
            }), Pn = g(function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
            }), On = /\B([A-Z])/g, Tn = g(function(e) {
                return e.replace(On, "-$1").toLowerCase();
            }), Sn = Function.prototype.bind ? function(e, t) {
                return e.bind(t);
            } : function(e, t) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
                }
                return n._length = e.length, n;
            }, Rn = function(e, t, n) {
                return !1;
            }, Cn = function(e) {
                return e;
            }, wn = [ "component", "directive", "filter" ], kn = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ], In = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: Rn,
                isReservedAttr: Rn,
                isUnknownElement: Rn,
                getTagNamespace: A,
                parsePlatformTagName: Cn,
                mustUseProp: Rn,
                async: !0,
                _lifecycleHooks: kn
            }, Dn = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/, xn = new RegExp("[^" + Dn.source + ".$_\\d]"), Ln = "__proto__" in {}, Nn = "undefined" != typeof window, jn = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, Gn = jn && WXEnvironment.platform.toLowerCase(), Hn = Nn && window.navigator.userAgent.toLowerCase(), Mn = Hn && /msie|trident/.test(Hn), Un = (Hn && Hn.indexOf("msie 9.0"), 
            Hn && Hn.indexOf("edge/"), Hn && Hn.indexOf("android"), Hn && /iphone|ipad|ipod|ios/.test(Hn) || "ios" === Gn), $n = (Hn && /chrome\/\d+/.test(Hn), 
            Hn && /phantomjs/.test(Hn), Hn && Hn.match(/firefox\/(\d+)/), {}.watch);
            if (Nn) try {
                var Vn = {};
                Object.defineProperty(Vn, "passive", {
                    get: function() {}
                }), window.addEventListener("test-passive", null, Vn);
            } catch (e) {}
            var Fn, Bn = function() {
                return void 0 === mn && (mn = !Nn && !jn && void 0 !== e && e.process && "server" === e.process.env.VUE_ENV), 
                mn;
            }, Kn = Nn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, Wn = "undefined" != typeof Symbol && C(Symbol) && "undefined" != typeof Reflect && C(Reflect.ownKeys);
            Fn = "undefined" != typeof Set && C(Set) ? Set : function() {
                function e() {
                    this.set = Object.create(null);
                }
                return e.prototype.has = function(e) {
                    return !0 === this.set[e];
                }, e.prototype.add = function(e) {
                    this.set[e] = !0;
                }, e.prototype.clear = function() {
                    this.set = Object.create(null);
                }, e;
            }();
            var Yn = A, qn = 0, zn = function() {
                "undefined" != typeof SharedObject ? this.id = SharedObject.uid++ : this.id = qn++, 
                this.subs = [];
            };
            zn.prototype.addSub = function(e) {
                this.subs.push(e);
            }, zn.prototype.removeSub = function(e) {
                v(this.subs, e);
            }, zn.prototype.depend = function() {
                zn.SharedObject.target && zn.SharedObject.target.addDep(this);
            }, zn.prototype.notify = function() {
                for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update();
            }, zn.SharedObject = "undefined" != typeof SharedObject ? SharedObject : {}, zn.SharedObject.target = null, 
            zn.SharedObject.targetStack = [];
            var Jn = function(e, t, n, r, o, i, a, c) {
                this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = o, this.ns = void 0, 
                this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
                this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, 
                this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
                this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = c, 
                this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, Xn = {
                child: {
                    configurable: !0
                }
            };
            Xn.child.get = function() {
                return this.componentInstance;
            }, Object.defineProperties(Jn.prototype, Xn);
            var Qn = function(e) {
                void 0 === e && (e = "");
                var t = new Jn();
                return t.text = e, t.isComment = !0, t;
            }, Zn = Array.prototype, er = Object.create(Zn);
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(e) {
                var t = Zn[e];
                S(er, e, function() {
                    for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
                    var o, i = t.apply(this, n), a = this.__ob__;
                    switch (e) {
                      case "push":
                      case "unshift":
                        o = n;
                        break;

                      case "splice":
                        o = n.slice(2);
                    }
                    return o && a.observeArray(o), a.dep.notify(), i;
                });
            });
            var tr = Object.getOwnPropertyNames(er), nr = !0, rr = function(e) {
                this.value = e, this.dep = new zn(), this.vmCount = 0, S(e, "__ob__", this), Array.isArray(e) ? (Ln ? e.push !== e.__proto__.push ? N(e, er, tr) : L(e, er) : N(e, er, tr), 
                this.observeArray(e)) : this.walk(e);
            };
            rr.prototype.walk = function(e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++) G(e, t[n]);
            }, rr.prototype.observeArray = function(e) {
                for (var t = 0, n = e.length; t < n; t++) j(e[t]);
            };
            var or = In.optionMergeStrategies;
            or.data = function(e, t, n) {
                return n ? V(e, t, n) : t && "function" != typeof t ? e : V(e, t);
            }, kn.forEach(function(e) {
                or[e] = F;
            }), wn.forEach(function(e) {
                or[e + "s"] = K;
            }), or.watch = function(e, t, n, r) {
                if (e === $n && (e = void 0), t === $n && (t = void 0), !t) return Object.create(e || null);
                if (!e) return t;
                var o = {};
                for (var i in y(o, e), t) {
                    var a = o[i], c = t[i];
                    a && !Array.isArray(a) && (a = [ a ]), o[i] = a ? a.concat(c) : Array.isArray(c) ? c : [ c ];
                }
                return o;
            }, or.props = or.methods = or.inject = or.computed = function(e, t, n, r) {
                if (!e) return t;
                var o = Object.create(null);
                return y(o, e), t && y(o, t), o;
            }, or.provide = V;
            var ir, ar = function(e, t) {
                return void 0 === t ? e : t;
            }, cr = [], sr = !1;
            if ("undefined" != typeof Promise && C(Promise)) {
                var ur = Promise.resolve();
                ir = function() {
                    ur.then(ae), Un && setTimeout(A);
                };
            } else if (Mn || "undefined" == typeof MutationObserver || !C(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) ir = "undefined" != typeof setImmediate && C(setImmediate) ? function() {
                setImmediate(ae);
            } : function() {
                setTimeout(ae, 0);
            }; else {
                var lr = 1, fr = new MutationObserver(ae), pr = document.createTextNode(String(lr));
                fr.observe(pr, {
                    characterData: !0
                }), ir = function() {
                    lr = (lr + 1) % 2, pr.data = String(lr);
                };
            }
            var dr = new Fn(), hr = g(function(e) {
                var t = "&" === e.charAt(0), n = "~" === (e = t ? e.slice(1) : e).charAt(0), r = "!" === (e = n ? e.slice(1) : e).charAt(0);
                return e = r ? e.slice(1) : e, {
                    name: e,
                    once: n,
                    capture: r,
                    passive: t
                };
            });
            $e(Ve.prototype);
            var vr, _r = {
                init: function(e, t) {
                    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                        var n = e;
                        _r.prepatch(n, n);
                    } else (e.componentInstance = Ye(e, Ar)).$mount(t ? e.elm : void 0, t);
                },
                prepatch: function(e, t) {
                    var n = t.componentOptions;
                    ht(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
                },
                insert: function(e) {
                    var t = e.context, n = e.componentInstance;
                    n._isMounted || (mt(n, "onServiceCreated"), mt(n, "onServiceAttached"), n._isMounted = !0, 
                    mt(n, "mounted")), e.data.keepAlive && (t._isMounted ? bt(n) : _t(n, !0));
                },
                destroy: function(e) {
                    var t = e.componentInstance;
                    t._isDestroyed || (e.data.keepAlive ? gt(t, !0) : t.$destroy());
                }
            }, gr = Object.keys(_r), mr = 1, yr = 2, Er = null, Ar = null, br = [], Pr = [], Or = {}, Tr = !1, Sr = !1, Rr = 0, Cr = Date.now;
            if (Nn && !Mn) {
                var wr = window.performance;
                wr && "function" == typeof wr.now && Cr() > document.createEvent("Event").timeStamp && (Cr = function() {
                    return wr.now();
                });
            }
            var kr = 0, Ir = function(e, t, n, r, o) {
                this.vm = e, o && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, 
                this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, 
                this.cb = n, this.id = ++kr, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                this.newDeps = [], this.depIds = new Fn(), this.newDepIds = new Fn(), this.expression = "", 
                "function" == typeof t ? this.getter = t : (this.getter = R(t), this.getter || (this.getter = A)), 
                this.value = this.lazy ? void 0 : this.get();
            };
            Ir.prototype.get = function() {
                var e;
                w(this);
                var t = this.vm;
                try {
                    e = this.getter.call(t, t);
                } catch (e) {
                    if (!this.user) throw e;
                    ne(e, t, 'getter for watcher "' + this.expression + '"');
                } finally {
                    this.deep && se(e), k(), this.cleanupDeps();
                }
                return e;
            }, Ir.prototype.addDep = function(e) {
                var t = e.id;
                this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
            }, Ir.prototype.cleanupDeps = function() {
                for (var e = this.deps.length; e--; ) {
                    var t = this.deps[e];
                    this.newDepIds.has(t.id) || t.removeSub(this);
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
                this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
            }, Ir.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : Ot(this);
            }, Ir.prototype.run = function() {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || c(e) || this.deep) {
                        var t = this.value;
                        if (this.value = e, this.user) try {
                            this.cb.call(this.vm, e, t);
                        } catch (e) {
                            ne(e, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, e, t);
                    }
                }
            }, Ir.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1;
            }, Ir.prototype.depend = function() {
                for (var e = this.deps.length; e--; ) this.deps[e].depend();
            }, Ir.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || v(this.vm._watchers, this);
                    for (var e = this.deps.length; e--; ) this.deps[e].removeSub(this);
                    this.active = !1;
                }
            };
            var Dr = {
                enumerable: !0,
                configurable: !0,
                get: A,
                set: A
            }, xr = {
                lazy: !0
            }, Lr = 0;
            (function(e) {
                e.prototype._init = function(e) {
                    var t = this;
                    t._uid = Lr++, t._isVue = !0, e && e._isComponent ? Gt(t, e) : t.$options = z(Ht(t.constructor), e || {}, t), 
                    t._renderProxy = t, t._self = t, dt(t), ct(t), tt(t), mt(t, "beforeCreate"), "mp-toutiao" !== t.mpHost && Ee(t), 
                    St(t), "mp-toutiao" !== t.mpHost && ye(t), "mp-toutiao" !== t.mpHost && mt(t, "created"), 
                    t.$options.el && t.$mount(t.$options.el);
                };
            })(Ut), function(e) {
                var t = {
                    get: function() {
                        return this._data;
                    }
                }, n = {
                    get: function() {
                        return this._props;
                    }
                };
                Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), 
                e.prototype.$set = H, e.prototype.$delete = M, e.prototype.$watch = function(e, t, n) {
                    var r = this;
                    if (s(t)) return jt(r, e, t, n);
                    (n = n || {}).user = !0;
                    var o = new Ir(r, e, t, n);
                    if (n.immediate) try {
                        t.call(r, o.value);
                    } catch (e) {
                        ne(e, r, 'callback for immediate watcher "' + o.expression + '"');
                    }
                    return function() {
                        o.teardown();
                    };
                };
            }(Ut), function(e) {
                var t = /^hook:/;
                e.prototype.$on = function(e, n) {
                    var r = this;
                    if (Array.isArray(e)) for (var o = 0, i = e.length; o < i; o++) r.$on(e[o], n); else (r._events[e] || (r._events[e] = [])).push(n), 
                    t.test(e) && (r._hasHookEvent = !0);
                    return r;
                }, e.prototype.$once = function(e, t) {
                    function n() {
                        r.$off(e, n), t.apply(r, arguments);
                    }
                    var r = this;
                    return n.fn = t, r.$on(e, n), r;
                }, e.prototype.$off = function(e, t) {
                    var n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    if (Array.isArray(e)) {
                        for (var r = 0, o = e.length; r < o; r++) n.$off(e[r], t);
                        return n;
                    }
                    var i, a = n._events[e];
                    if (!a) return n;
                    if (!t) return n._events[e] = null, n;
                    for (var c = a.length; c--; ) if ((i = a[c]) === t || i.fn === t) {
                        a.splice(c, 1);
                        break;
                    }
                    return n;
                }, e.prototype.$emit = function(e) {
                    var t = this, n = t._events[e];
                    if (n) {
                        n = n.length > 1 ? m(n) : n;
                        for (var r = m(arguments, 1), o = 'event handler for "' + e + '"', i = 0, a = n.length; i < a; i++) re(n[i], t, r, t, o);
                    }
                    return t;
                };
            }(Ut), function(e) {
                e.prototype._update = function(e, t) {
                    var n = this, r = n.$el, o = n._vnode, i = pt(n);
                    n._vnode = e, n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1), i(), 
                    r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
                }, e.prototype.$forceUpdate = function() {
                    var e = this;
                    e._watcher && e._watcher.update();
                }, e.prototype.$destroy = function() {
                    var e = this;
                    if (!e._isBeingDestroyed) {
                        mt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                        var t = e.$parent;
                        !t || t._isBeingDestroyed || e.$options.abstract || v(t.$children, e), e._watcher && e._watcher.teardown();
                        for (var n = e._watchers.length; n--; ) e._watchers[n].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), 
                        mt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
                    }
                };
            }(Ut), function(e) {
                $e(e.prototype), e.prototype.$nextTick = function(e) {
                    return ce(e, this);
                }, e.prototype._render = function() {
                    var e, t = this, n = t.$options, r = n.render, o = n._parentVnode;
                    o && (t.$scopedSlots = Oe(o.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = o;
                    try {
                        Er = t, e = r.call(t._renderProxy, t.$createElement);
                    } catch (n) {
                        ne(n, t, "render"), e = t._vnode;
                    } finally {
                        Er = null;
                    }
                    return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof Jn || (e = Qn()), 
                    e.parent = o, e;
                };
            }(Ut);
            var Nr = [ String, RegExp, Array ], jr = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: Nr,
                        exclude: Nr,
                        max: [ String, Number ]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = [];
                    },
                    destroyed: function() {
                        for (var e in this.cache) Jt(this.cache, e, this.keys);
                    },
                    mounted: function() {
                        var e = this;
                        this.$watch("include", function(t) {
                            zt(e, function(e) {
                                return qt(t, e);
                            });
                        }), this.$watch("exclude", function(t) {
                            zt(e, function(e) {
                                return !qt(t, e);
                            });
                        });
                    },
                    render: function() {
                        var e = this.$slots.default, t = at(e), n = t && t.componentOptions;
                        if (n) {
                            var r = Yt(n), o = this, i = o.include, a = o.exclude;
                            if (i && (!r || !qt(i, r)) || a && r && qt(a, r)) return t;
                            var c = this, s = c.cache, u = c.keys, l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                            s[l] ? (t.componentInstance = s[l].componentInstance, v(u, l), u.push(l)) : (s[l] = t, 
                            u.push(l), this.max && u.length > parseInt(this.max) && Jt(s, u[0], u, this._vnode)), 
                            t.data.keepAlive = !0;
                        }
                        return t || e && e[0];
                    }
                }
            };
            (function(e) {
                var t = {
                    get: function() {
                        return In;
                    }
                };
                Object.defineProperty(e, "config", t), e.util = {
                    warn: Yn,
                    extend: y,
                    mergeOptions: z,
                    defineReactive: G
                }, e.set = H, e.delete = M, e.nextTick = ce, e.observable = function(e) {
                    return j(e), e;
                }, e.options = Object.create(null), wn.forEach(function(t) {
                    e.options[t + "s"] = Object.create(null);
                }), e.options._base = e, y(e.options.components, jr), $t(e), Vt(e), Ft(e), Wt(e);
            })(Ut), Object.defineProperty(Ut.prototype, "$isServer", {
                get: Bn
            }), Object.defineProperty(Ut.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), Object.defineProperty(Ut, "FunctionalRenderContext", {
                value: Ve
            }), Ut.version = "2.6.11";
            var Gr = "[object Array]", Hr = "[object Object]", Mr = g(function(e) {
                var t = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
                return e.split(n).forEach(function(e) {
                    if (e) {
                        var n = e.split(r);
                        n.length > 1 && (t[n[0].trim()] = n[1].trim());
                    }
                }), t;
            }), Ur = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ], $r = [ "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onError", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onPageShow", "onPageHide", "onPageResize" ];
            Ut.prototype.__patch__ = function(e, t) {
                var n = this;
                if (null !== t && ("page" === this.mpType || "component" === this.mpType)) {
                    var r = this.$scope, o = Object.create(null);
                    try {
                        o = an(this);
                    } catch (e) {
                        console.error(e);
                    }
                    o.__webviewId__ = r.data.__webviewId__;
                    var i = Object.create(null);
                    Object.keys(o).forEach(function(e) {
                        i[e] = r.data[e];
                    });
                    var a = !1 === this.$shouldDiffData ? o : Xt(o, i);
                    Object.keys(a).length ? (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + this._uid + "]差量更新", JSON.stringify(a)), 
                    this.__next_tick_pending = !0, r.setData(a, function() {
                        n.__next_tick_pending = !1, nn(n);
                    })) : nn(this);
                }
            }, Ut.prototype.$mount = function(e, t) {
                return sn(this, 0, t);
            }, function(e) {
                var t = e.extend;
                e.extend = function(e) {
                    var n = (e = e || {}).methods;
                    return n && Object.keys(n).forEach(function(t) {
                        -1 !== $r.indexOf(t) && (e[t] = n[t], delete n[t]);
                    }), t.call(this, e);
                };
                var n = e.config.optionMergeStrategies, r = n.created;
                $r.forEach(function(e) {
                    n[e] = r;
                }), e.prototype.__lifecycle_hooks__ = $r;
            }(Ut), function(e) {
                e.config.errorHandler = function(e) {
                    console.error(e);
                    var t = getApp();
                    t && t.onError && t.onError(e);
                };
                var t = e.prototype.$emit;
                e.prototype.$emit = function(e) {
                    return this.$scope && e && this.$scope.triggerEvent(e, {
                        __args__: m(arguments, 1)
                    }), t.apply(this, arguments);
                }, e.prototype.$nextTick = function(e) {
                    return on(this, e);
                }, Ur.forEach(function(t) {
                    e.prototype[t] = function(e) {
                        return this.$scope && this.$scope[t] ? this.$scope[t](e) : "undefined" != typeof my ? "createSelectorQuery" === t ? my.createSelectorQuery(e) : "createIntersectionObserver" === t ? my.createIntersectionObserver(e) : void 0 : void 0;
                    };
                }), e.prototype.__init_provide = ye, e.prototype.__init_injections = Ee, e.prototype.__call_hook = function(e, t) {
                    var n = this;
                    w();
                    var r, o = n.$options[e], i = e + " hook";
                    if (o) for (var a = 0, c = o.length; a < c; a++) r = re(o[a], n, t ? [ t ] : null, n, i);
                    return n._hasHookEvent && n.$emit("hook:" + e, t), k(), r;
                }, e.prototype.__set_model = function(e, t, n, r) {
                    Array.isArray(r) && (-1 !== r.indexOf("trim") && (n = n.trim()), -1 !== r.indexOf("number") && (n = this._n(n))), 
                    e || (e = this), e[t] = n;
                }, e.prototype.__set_sync = function(e, t, n) {
                    e || (e = this), e[t] = n;
                }, e.prototype.__get_orig = function(e) {
                    return s(e) && e.$orig || e;
                }, e.prototype.__get_value = function(e, t) {
                    return vn(t || this, e);
                }, e.prototype.__get_class = function(e, t) {
                    return un(t, e);
                }, e.prototype.__get_style = function(e, t) {
                    if (!e && !t) return "";
                    var n = hn(e), r = t ? y(t, n) : n;
                    return Object.keys(r).map(function(e) {
                        return Tn(e) + ":" + r[e];
                    }).join(";");
                }, e.prototype.__map = function(e, t) {
                    var n, r, o, i, a;
                    if (Array.isArray(e)) {
                        for (n = new Array(e.length), r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r);
                        return n;
                    }
                    if (c(e)) {
                        for (i = Object.keys(e), n = Object.create(null), r = 0, o = i.length; r < o; r++) n[a = i[r]] = t(e[a], a, r);
                        return n;
                    }
                    return [];
                };
            }(Ut), t.default = Ut;
        }.call(this, n("c8ba"));
    },
    "67c5": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            LOCATION: "LOCATION",
            USER_CITY: "USER_CITY",
            LOCATION_REJECT: "LOCATION_REJECT",
            LOCATION_CONTACT: "LOCATION_CONTACT",
            LOCATION_ADDRESS: "LOCATION_ADDRESS",
            LOCATION_ADDRESS_CALLBACK: "LOCATION_ADDRESS_CALLBACK",
            LOCATION_ADDRESS_EMPTY: "LOCATION_ADDRESS_EMPTY",
            LOCATION_ADDRESS_CATCH: "LOCATION_ADDRESS_CATCH",
            OPEN_CITY_LIST: "OPEN_CITY_LIST",
            HOTKEY_DATA: "HOTKEY_DATA",
            HISTORY_KEYS: "HISTORY_KEYS",
            SEARCH_RANK_LIST: "SEARCH_RANK_LIST",
            HISTORY_RECIPES_KEYS: "HISTORY_RECIPES_KEYS",
            CATEGORY_HINT_STATUS: "CATEGORY_HINT_STATUS",
            HOME_AD: "HOME_AD",
            HOME_AD_CLICK: "HOME_AD_CLICK",
            HOME_NEWDETAIL: "HOME_NEWDETAIL",
            IS_FIRST_ADD_CART: "IS_FIRST_ADD_CART",
            USER_INFO: "USER_INFO",
            USER_AUTH_INFO: "USER_AUTH_INFO",
            USER_AUTHORIZE: "USER_AUTHORIZE",
            USER_AUTHORIZE_USERINFO: "USER_AUTHORIZE_USERINFO",
            WEIXIN_APPLET_TOKEN: "WEIXIN_APPLET_TOKEN",
            GUIDE_DESKTOP: "GUIDE_DESKTOP",
            ADDRESS_NUMBER: "ADDRESS_INDEX",
            USER_HEAD_AUTH: "AUTH_USER_HEADER",
            LOGIN_INPUT_MOBILE: "LOGIN_INPUT_MOBILE",
            RECIPE_SCENE_HISTORY: "RECIPE_SCENE_HISTORY",
            RECIPE_HINT_POINT: "RECIPE_HINT_POINT",
            RECIPE_HINT_TEXT: "RECIPE_HINT_TEXT",
            APP_INFO: "APP_INFO",
            MAKE_ORDER_DATA: "MAKE_ORDER_DATA",
            MAKE_ORDER_DATA_NOTE: "MAKE_ORDER_DATA_NOTE",
            USE_COUPON_CALLBACK: "USE_COUPON_CALLBACK",
            USE_DELIVERY_COUPON_CALLBACK: "USE_DELIVERY_COUPON_CALLBACK",
            MAKE_ORDER_DATA_PRODUCTS: "MAKE_ORDER_DATA_PRODUCTS",
            ORDER_SEARCH_KEYS: "ORDER_SEARCH_KEYS",
            CART_TOTAL_COUNT: "CART_TOTAL_COUNT",
            ENV: "ENV",
            POINT: "POINT",
            ADD_MINI_APP: "ADD_MINI",
            UPDATE_LAST_TIME_CATE: "UPDATE_LAST_TIME_CATE",
            LOGIN_OUT_PATH: "LOGIN_OUT_PATH",
            VIP_PAGE_DATA: "VIP_PAGE_DATA",
            VIP_HINT: "VIP_HINT",
            VIP_PAYING: "VIP_PAYING",
            VIP_ADV: "VIP_ADV",
            VIP_BUY_CARD_INFO: "VIP_BUY_CARD_INFO",
            EDIT_USERINFO_MSG: "EDIT_USERINFO_MSG",
            ACCOUNT_INFO: "ACCOUNT_INFO",
            CAPTCHA_TICKET: "CAPTCHA_TICKET",
            TXCAPTCHA: "TXCAPTCHA",
            OPEN_ROUTES: "OPEN_ROUTES",
            SEARCH_GUIDE: "SEARCH_GUIDE",
            HOME_PAGE_CACHED_DATA: "HOME_PAGE_CACHED_DATA",
            SEARCH_KEYWORD: "SEARCH_KEYWORD",
            INVITE_STAGE: "INVITE_STAGE",
            ATTENDED_ACTIVITYIDS: "ATTENDED_ACTIVITYIDS",
            FLASH_SALE_REMIND_LIST: "FLASH_SALE_REMIND_LIST",
            GLOBAL_DATA: "GLOBAL_DATA",
            FLOP_HAS_INTERCEPTED: "FLOP_HAS_INTERCEPTED",
            FLOP_HAND_SHOWED: "FLOP_HAND_SHOWED",
            FLOP_CARDS_HAND_SHOWED: "FLOP_CARDS_HAND_SHOWED",
            USER_ADDRESS_TIP: "USER_ADDRESS_TIP",
            COLLECT_GUIDE_LOG: "COLLECT_GUIDE_LOG",
            COLLECT_CHANGE_LOG: "COLLECT_CHANGE_LOG",
            SAMPLE_COMMENT_DATA: "SAMPLE_COMMENT_DATA",
            SAMPLE_CHANGE_LOG: "SAMPLE_CHANGE_LOG",
            SAMPLE_SUBSCRIBE_PROMPT_POP: "SAMPLE_SUBSCRIBE_PROMPT_POP",
            SAMPLE_SUBSCRIBE_CHECKBOX_SHOW: "SAMPLE_SUBSCRIBE_CHECKBOX_SHOW",
            SAMPLE_BABY_INFO: "SAMPLE_BABY_INFO",
            CATE_POP_SHOW: "CATE_POP_SHOW",
            CART_POP_SHOW: "CART_POP_SHOW",
            MOCK_COLLECTION_ID: "MOCK_COLLECTION_ID",
            MOCK_AUTH_CODE: "MOCK_AUTH_CODE",
            WITHDRAW_ID: "WITHDRAW_ID",
            ADD_ORDER_GUIDE: "ADD_ORDER_GUIDE"
        };
        t.default = r;
    },
    "6afe": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            namespaced: !0,
            state: {
                isTrigger: !1
            },
            mutations: {
                SET_TRIGGER: function(e, t) {
                    e.isTrigger = t.isTrigger;
                }
            },
            actions: {
                setRefundTrigger: function(e, t) {
                    (0, e.commit)("SET_TRIGGER", t);
                }
            }
        };
        t.default = r;
    },
    "6cdc": function(e, t) {},
    "6ddb": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            return u(e) || s(e, t) || a(e, t) || i();
        }
        function i() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function a(e, t) {
            if (e) {
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0;
            }
        }
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function s(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e;
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            }
        }
        function u(e) {
            if (Array.isArray(e)) return e;
        }
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach(function(t) {
                    p(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : _typeof(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
            })(e);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.limitTextByLength = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 ? arguments[1] : void 0, n = e.split(""), r = [];
            return n.forEach(function(e, t) {
                e && (e.match(/[^\u4E00-\u9FA5]/) && n[t + 1] && n[t + 1].match(/[^\u4E00-\u9FA5]/) ? (r.push(e + n[t + 1]), 
                n[t + 1] = "") : r.push(e));
            }), r.length > t ? "".concat(r.slice(0, t - 1).join(""), "...") : r.join("");
        }, t.changeBackStatus = function() {}, t.getComparableVersion = t.handleCardVirtualHeight = t.getTextWidth = t.timeout = t.mixArray = t.getRandomArbitrary = t.sqlInjection = t.changeTitle = t.getOpacity0xColor = t.validate0xColor = t.getUserCityNumber = t.waitAllImages = t.setState = t.styleToString = t.checkURL = t.compactObject = t.randStr = t.getTruthConfig = t.checkDevUrl = t.cssPreload = t.jsPreload = t.fromDateWeek = t.throttle = t.debounce = t.dataExposure = t.formatDate = t.isNull = t.imgZip = t.timeUtil = t.isZero = t.fMoney2Str = t.isObjectEmpty = t.deepCopy = t.versionCompare = t.format = t.leftTimeStr = t.UUID = t.validateSmsCode = t.validateMobile = t.validateImgCode = t.debounceNew = t.throttleTime = void 0;
        var h = r(n("d9f0")), v = r(n("67c5")), _ = r(n("b7c7")), g = r(n("5fee")), m = r(n("eb8e"));
        t.validateMobile = function(e) {
            return /^1[3456789]\d{9}$/.test(e) ? null : "您输入的手机号码不正确";
        };
        t.validateSmsCode = function(e) {
            return /^\d{4}$/.test(e) ? null : "您输入的验证码格式不正确";
        };
        t.validateImgCode = function(e) {
            return /[a-zA-Z0-9]{4}$/.test(e) ? null : "您输入的图形验证码格式不正确";
        };
        t.UUID = function() {
            return "a1234567890".concat(new Date().getTime());
        };
        t.leftTimeStr = function(e) {
            var t = e % 86400 / 3600, n = e % 86400 % 3600 / 60, r = e % 86400 % 3600 % 60, o = "", i = "";
            return n <= 9 && (o = "0".concat(n)), r <= 9 && (i = "0".concat(r)), t > 0 ? t <= 9 ? "0".concat(t, ":").concat(o, ":").concat(i) : "".concat(t, ":").concat(o, ":").concat(i) : "".concat(o, ":").concat(i);
        };
        t.format = function(e) {
            var t = e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd hh:mm:ss";
            "[object Date]" !== Object.prototype.toString.call(e) && (t = new Date(e));
            var r = {
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds(),
                "q+": Math.floor((e.getMonth() + 3) / 3),
                S: t.getMilliseconds()
            };
            return /(y+)/.test(n) && (n = n.replace(RegExp.$1, "".concat(t.getFullYear()).substr(4 - RegExp.$1.length))), 
            Object.keys(r).forEach(function(e) {
                new RegExp("(".concat(e, ")")).test(n) && (n = n.replace(RegExp.$1, 1 === RegExp.$1.length ? r[e] : "00".concat(r[e]).substr("".concat(r[e]).length)));
            }), n;
        };
        t.versionCompare = function(e, t) {
            for (var n = String(e).split("."), r = String(t).split("."), o = Math.max(n.length, r.length); n.length < o; ) n.push("0");
            for (;r.length < o; ) r.push("0");
            for (var i = 0; i < o; i++) {
                var a = parseInt(n[i], 0), c = parseInt(r[i], 0);
                if (a > c) return 1;
                if (a < c) return -1;
            }
            return 0;
        };
        t.deepCopy = function(e) {
            e.constructor, Array;
            if ("object" !== d(e)) throw new Error("拷贝类型错误");
            var t = JSON.stringify(e);
            return JSON.parse(t);
        };
        t.isObjectEmpty = function(e) {
            return void 0 === e || null == e || !Object.keys(e).length;
        };
        t.isNull = function(e) {
            return "{}" === JSON.stringify(e) || "[]" === JSON.stringify(e);
        };
        t.fMoney2Str = function(e) {
            try {
                return parseFloat("".concat(e)).toFixed(2);
            } catch (t) {
                return e;
            }
        };
        t.isZero = function(e) {
            var t = "".concat(e);
            try {
                return "0.0" === t || "0" === t || "0.00" === t;
            } catch (e) {
                return !1;
            }
        };
        var y = {
            updateServerTime: function(e) {
                var t, n, r = getApp;
                "function" == typeof r && ((null === (t = r()) || void 0 === t || null === (n = t.globalData) || void 0 === n ? void 0 : n.mTimeOffset) || (r().globalData.mTimeOffset = this.getCurrentSystemTime() - (e || 0)));
            },
            getDiffTime: function() {
                var e, t, n = getApp;
                return "function" == typeof n && (null === (e = n()) || void 0 === e || null === (t = e.globalData) || void 0 === t ? void 0 : t.mTimeOffset) || 0;
            },
            getCurrentTime: function() {
                var e = (getApp() || {}).globalData, t = (void 0 === e ? {} : e).mTimeOffset, n = void 0 === t ? 0 : t;
                return parseInt(this.getCurrentSystemTime() - n);
            },
            getCurrentTimeMs: function() {
                var e = (getApp() || {}).globalData, t = (void 0 === e ? {} : e).mTimeOffset, n = void 0 === t ? 0 : t;
                return new Date().getTime() - 1e3 * n;
            },
            getCurrentSystemTime: function() {
                var e = new Date().getTime();
                return e /= 1e3;
            }
        };
        t.timeUtil = y;
        t.imgZip = function(e, t) {
            var n = "";
            return t || (t = 700), e && (n = e.indexOf("?") > 0 ? e.split("?")[0] : e.indexOf("!") > 0 ? e.split("!")[0] : e), 
            n ? "".concat(n, "?imageMogr2/thumbnail/").concat(t, "x").concat(t) : "";
        };
        t.formatDate = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd hh:mm:ss";
            "[object Date]" !== Object.prototype.toString.call(e) && (e = new Date(e));
            var n = {
                "M+": e.getMonth() + 1,
                "d+": e.getDate(),
                "h+": e.getHours(),
                "m+": e.getMinutes(),
                "s+": e.getSeconds(),
                "q+": Math.floor((e.getMonth() + 3) / 3),
                S: e.getMilliseconds()
            };
            return /(y+)/.test(t) && (t = t.replace(RegExp.$1, "".concat(e.getFullYear()).substr(4 - RegExp.$1.length))), 
            Object.keys(n).forEach(function(e) {
                new RegExp("(".concat(e, ")")).test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? n[e] : "00".concat(n[e]).substr("".concat(n[e]).length)));
            }), t;
        };
        t.dataExposure = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (!e) return [];
            var n = {
                "<font": "<text",
                "</font>": "</text>"
            };
            return Object.keys(n).forEach(function(t) {
                e = e.replace(new RegExp(t, "g"), n[t]);
            }), (0, h.default)(e).map(function(e) {
                return e.attrs ? f(f({}, e), {}, {
                    name: "span",
                    attrs: f(f({}, e.attrs), {}, t ? {
                        style: e.attrs.color ? "".concat(e.attrs.style || "", ";color:").concat(e.attrs.color, ";") : e.attrs.style || ""
                    } : {
                        style: "color:".concat(e.attrs.color || "inhert", ";")
                    })
                }) : f({}, e);
            });
        };
        t.debounce = function(e, t, n) {
            var r = null, o = function(o) {
                r = setTimeout(function() {
                    clearTimeout(r), r = null, e.apply(n, o);
                }, t);
            };
            return function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (r) return clearTimeout(r), r = null, void o(t);
                o(t);
            };
        };
        t.throttle = function(e, t, n) {
            var r = null, o = function(o) {
                r = setTimeout(function() {
                    e.apply(n, o), clearTimeout(r), r = null;
                }, t);
            };
            return function() {
                if (!r) {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    o(t);
                }
            };
        };
        var E = 0;
        t.throttleTime = function(e, t) {
            var n = Date.now();
            n - E > t && ("function" == typeof e && e(), E = n);
        };
        var A = null;
        t.debounceNew = function(e, t) {
            A ? clearTimeout(A) : A = setTimeout(function() {
                "function" == typeof e && e();
            }, t || 500);
        };
        t.fromDateWeek = function(e) {
            return e ? [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ][new Date(e).getDay()] : "";
        };
        t.cssPreload = function(e) {
            var t = function(e) {
                return new Promise(function(t, n) {
                    for (var r = document.getElementsByTagName("link"), o = !1, i = 0; i < r.length; i++) r[i].href === e && (o = !0);
                    if (o) t(); else {
                        var a = document.createElement("link");
                        a.href = e, a.rel = "stylesheet", a.type = "text/css", document.body.appendChild(a), 
                        a.onload = function() {
                            t(e);
                        }, a.onerror = function() {
                            n();
                        };
                    }
                });
            }, n = e.map(function(e) {
                return t(e);
            });
            return Promise.all(n);
        };
        t.jsPreload = function(e) {
            var t = function(e) {
                return new Promise(function(t, n) {
                    for (var r = document.getElementsByTagName("script"), o = !1, i = 0; i < r.length; i++) r[i].src === e && (o = !0);
                    if (o) t(); else {
                        var a = document.createElement("script");
                        a.type = "text/javascript", a.src = e, document.body.appendChild(a), a.onload = function() {
                            t(e);
                        }, a.onerror = function() {
                            n();
                        };
                    }
                });
            }, n = e.map(function(e) {
                return t(e);
            });
            return Promise.all(n);
        };
        t.checkDevUrl = function() {
            return /(\.(\S|ua)\.)dingdongxiaoqu/.test(window.location.origin);
        };
        t.getTruthConfig = function(e) {
            return Object.entries(e).filter(function(e) {
                return e[1];
            }).map(function(e) {
                return e[0];
            });
        };
        t.checkURL = function(e) {
            return /^https?:\/\//.test(e);
        };
        var b = function(e) {
            return e.replace(/[A-Z]/g, function(e) {
                return "-".concat(e.toLowerCase());
            });
        };
        t.styleToString = function(e) {
            var t = "";
            return Object.keys(e).forEach(function(n) {
                t += "".concat(b(n), ": ").concat(e[n], ";");
            }), t;
        };
        t.randStr = function() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz12345678", n = "", r = 0; r < e; r++) n += t.charAt(Math.floor(Math.random() * t.length));
            return n;
        };
        t.compactObject = function(e) {
            var t = {};
            return Object.keys(e).forEach(function(n) {
                null != e[n] && (t[n] = e[n]);
            }), t;
        };
        t.setState = function(e, t) {
            Object.keys(t).forEach(function(n) {
                e[n] = t[n];
            });
        };
        t.waitAllImages = function() {
            return new Promise(function(e) {});
        };
        t.getUserCityNumber = function() {
            var e = _.default.load({
                key: v.default.USER_CITY
            }), t = _.default.load({
                key: v.default.LOCATION
            });
            return (m.default.isApp || m.default.isH5) && e ? e.city_number || "" : (null === t || void 0 === t ? void 0 : t.city_number) || "";
        };
        var P = function(e) {
            return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(e);
        };
        t.validate0xColor = P;
        t.getOpacity0xColor = function(e, t) {
            if (e < 0 || e > 100 || !P(t)) return t;
            var n = t.slice(1), r = 1;
            n.length < 5 && (n = n.replace(/[\s\S]/g, function(e) {
                return "".concat(e).concat(e);
            })), 8 === n.length && (r = Number("0x".concat(n.slice(-2))) / 255, n = n.slice(0, -2));
            var o = Math.round(e * r * 2.55).toString(16);
            return o = o.length < 2 ? "0".concat(o) : o, "#".concat(n).concat(o);
        };
        var O = function() {
            var e = location.hash.split("#");
            return e[1] ? e[1].split("?")[0] : "";
        };
        t.changeTitle = function() {
            var e, t = O();
            t && (null === (e = g.default[t]) || void 0 === e || e.titleName);
        };
        t.sqlInjection = function(e) {
            return /select|update|delete|exec|count|'|"|=|;|>|<|%/.test(e) ? "输入字符非法" : null;
        };
        t.getRandomArbitrary = function(e, t) {
            var n = e, r = Array.from({
                length: t - e + 1
            }, function() {
                return n++;
            });
            return function() {
                var e = Math.random() * r.length;
                return o(r.splice(e, 1), 1)[0];
            };
        };
        t.mixArray = function(e) {
            return e.slice().sort(function() {
                return Math.random() - .5;
            });
        };
        t.timeout = function(e) {
            return new Promise(function(t) {
                setTimeout(function() {
                    t("timeout");
                }, e);
            });
        };
        var T = function(e) {
            for (var t = 0, n = e.length, r = -1, o = 0; o < n; o++) t += (r = e.charCodeAt(o)) >= 0 && r <= 128 ? 1 : 2;
            return t;
        };
        t.getTextWidth = T;
        var S = function(e) {
            return function(t) {
                var n, r, o, i = Number(null === e || void 0 === e || null === (n = e.tag_info) || void 0 === n || null === (r = n.card_vertical_1_2) || void 0 === r || null === (o = r[t]) || void 0 === o ? void 0 : o.showType);
                return 0 === i ? 0 : 1 === i ? 1 : i || 2;
            };
        }, R = function(e) {
            return function(t) {
                var n, r, o;
                return (null === e || void 0 === e || null === (n = e.tag_info) || void 0 === n || null === (r = n.card_vertical_1_2) || void 0 === r || null === (o = r[t]) || void 0 === o ? void 0 : o.tagList) || [];
            };
        };
        t.handleCardVirtualHeight = function(e) {
            var t, n, r, o, i, a;
            if (e.isRecipeCard) return 559;
            if (e.isRecommend) return 520;
            if (e.list_id) return 542;
            var c = S(e), s = R(e), u = 0;
            u += 350;
            var l, f = 2 * (null === (t = e.product_name) || void 0 === t ? void 0 : t.length);
            if (1 === c("pos_title")) null === (l = s("pos_title")) || void 0 === l || l.forEach(function(e) {
                var t, n;
                f += 1.5 * (null === e || void 0 === e || null === (t = e.data) || void 0 === t || null === (n = t.content) || void 0 === n ? void 0 : n.length);
            }); else if (2 === c("pos_title")) {
                var p;
                null === (p = e.attribute_tags) || void 0 === p || p.forEach(function(e) {
                    var t;
                    f += 1.5 * (null === (t = e.name) || void 0 === t ? void 0 : t.length);
                });
            }
            u += f > 26 ? 72 : 40, u += 38;
            var d, h = 0;
            if (1 === c("pos_tag")) null === (d = s("pos_tag")) || void 0 === d || d.forEach(function(e) {
                var t;
                h += T(null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.content);
            }); else if (2 === c("pos_tag")) {
                var v;
                null === (v = e.marketing_tags) || void 0 === v || v.forEach(function(e) {
                    h += T(e.name);
                });
            }
            u += h <= 22 ? 46 : h > 22 && h <= 42 ? 84 : 122;
            var _ = null === (n = e.alg_tags) || void 0 === n ? void 0 : n.filter(function(e) {
                return "orderCountTag" === e.tag_type;
            })[0], g = null === (r = e.alg_tags) || void 0 === r ? void 0 : r.filter(function(e) {
                return "productLastOrderTimeTag" === e.tag_type;
            })[0];
            (1 === c("pos_order_promotion") && (null === (o = s("pos_order_promotion")) || void 0 === o ? void 0 : o.length) || 2 === c("pos_order_promotion") && ((null === e || void 0 === e ? void 0 : e.sale_batches) || (null === e || void 0 === e ? void 0 : e.product_date) || (null === _ || void 0 === _ ? void 0 : _.tag_name) || (null === g || void 0 === g ? void 0 : g.tag_name))) && (u += 44), 
            u += 46;
            var m = null === (i = e.alg_tags) || void 0 === i ? void 0 : i.filter(function(e) {
                return "rankinglist" === e.tag_type;
            })[0];
            return (1 === c("pos_rank_promotion") && (null === (a = s("pos_rank_promotion")) || void 0 === a ? void 0 : a.length) || 2 === c("pos_rank_promotion") && (null === m || void 0 === m ? void 0 : m.tag_name)) && (u += 68), 
            u += 40, c = null, s = null, u;
        };
        t.getComparableVersion = function(e) {
            try {
                var t = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/gm;
                return "string" == typeof e && t.test(e) ? e.split(".").map(function(e) {
                    if (Number.isNaN(+e)) return "000";
                    var t = 1e3 * +e;
                    return 0 === t ? "000" : t.toString().slice(0, 3);
                }).join("") : "";
            } catch (e) {
                return "";
            }
        };
    },
    "6e87": function(e, t, n) {
        function r(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function o(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, i) {
                    function a(e) {
                        r(s, o, i, a, c, "next", e);
                    }
                    function c(e) {
                        r(s, o, i, a, c, "throw", e);
                    }
                    var s = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("a34a")), a = n("655d"), c = n("a438"), s = {
            close: function(e) {
                (0, e.commit)("setShow", !1);
            },
            show: function(e, t) {
                return o(i.default.mark(function n() {
                    var r, o, s, u, l, f, p, d, h, v, _, g, m, y, E, A, b, P, O, T, S, R, C, w, k, I, D, x, L, N, j, G, H;
                    return i.default.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (r = e.commit, o = t.theme, s = void 0 === o ? 0 : o, u = t.popTitle, l = void 0 === u ? "天天0.99购商品" : u, 
                            f = t.btnTxt, p = void 0 === f ? "确定" : f, d = t.desc, h = void 0 === d ? "" : d, 
                            v = t.products, _ = void 0 === v ? [] : v, g = t.addScene, m = void 0 === g ? a.SCENES.REPLACE_099_POP_UP_ADD : g, 
                            y = {
                                theme: s,
                                popTitle: l,
                                btnTxt: p,
                                desc: h,
                                addScene: m
                            }, E = !1, 0 !== s) {
                                n.next = 18;
                                break;
                            }
                            return n.next = 7, (0, c.apiGet099AddBenefitList)({});

                          case 7:
                            A = n.sent, b = A.code, P = A.data, E = 0 !== b, T = [], S = (O = void 0 === P ? {} : P).benefitProductList, 
                            (R = void 0 === S ? null : S) && (T = R), y.list = T, n.next = 31;
                            break;

                          case 18:
                            return C = _.add, w = _.exist, n.next = 21, (0, c.apiGet099BenefitReplaceList)({
                                replace_from_product_id: (w[0] || {}).productId || "",
                                replace_to_product_id: (C[0] || {}).productId || ""
                            });

                          case 21:
                            k = n.sent, I = k.code, D = k.data, E = 0 !== I, L = (x = void 0 === D ? {} : D).replaceFromProduct, 
                            N = void 0 === L ? null : L, j = x.replaceToProduct, G = void 0 === j ? null : j, 
                            H = [], N && H.push(N), G && H.push(G), y.list = H;

                          case 31:
                            if (!E) {
                                n.next = 33;
                                break;
                            }
                            return n.abrupt("return", !1);

                          case 33:
                            r("setShow", !0), r("setPop", y);

                          case 35:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }))();
            }
        }, u = {
            namespaced: !0,
            state: {
                show: !1,
                theme: 0,
                list: [],
                target: {},
                origin: {},
                btnTxt: "确定",
                popTitle: "",
                addScene: a.SCENES.REPLACE_099_POP_UP_ADD,
                desc: ""
            },
            mutations: {
                setShow: function(e, t) {
                    e.show = t, t || (e.btnTxt = "确定", e.desc = "", e.theme = 0, e.list = [], e.target = {}, 
                    e.origin = {}, e.addScene = a.SCENES.REPLACE_099_POP_UP_ADD);
                },
                setPop: function(e, t) {
                    e.list = t.list || [], e.target = t.target || {}, e.origin = t.origin || {}, e.btnTxt = t.btnTxt || e.btnTxt, 
                    e.popTitle = t.popTitle || e.popTitle, e.theme = 0 === t.theme ? 0 : 1, e.addScene = t.addScene || e.addScene, 
                    e.desc = t.desc || "";
                }
            },
            actions: s
        };
        t.default = u;
    },
    "6ea8": function(e, t, n) {
        (function(r) {
            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : _typeof(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
                })(e);
            }
            var i, a;
            !function(r, c) {
                "object" == o(t) && void 0 !== e ? e.exports = c() : (i = c, void 0 === (a = "function" == typeof i ? i.call(t, n, t, e) : i) || (e.exports = a));
            }(0, function() {
                function e(e, t) {
                    function n() {
                        this.constructor = e;
                    }
                    d(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
                    new n());
                }
                function t(e, t, n, r) {
                    var i, a = arguments.length, c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" == ("undefined" == typeof Reflect ? "undefined" : o(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(t, n, c) : i(t, n)) || c);
                    return a > 3 && c && Object.defineProperty(t, n, c), c;
                }
                function n() {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    var r = Array(e), o = 0;
                    for (t = 0; t < n; t++) for (var i = arguments[t], a = 0, c = i.length; a < c; a++, 
                    o++) r[o] = i[a];
                    return r;
                }
                function i(e, t, r, o) {
                    void 0 === o && (o = !1);
                    var i = e[t];
                    e[t] = function() {
                        for (var e = arguments, t = this, a = [], c = 0; c < arguments.length; c++) a[c] = e[c];
                        var s = function() {
                            return i && i.apply(t, a);
                        };
                        return o && (s = function() {
                            return Promise.resolve().then(function() {
                                return i.apply(t, a);
                            });
                        }), r.apply(this, n([ s ], a));
                    };
                }
                function a() {
                    var e = getCurrentPages() || "";
                    return e[e.length - 1] || "";
                }
                function c(e) {
                    var t = "/";
                    try {
                        var n = a();
                        if (!n) return n;
                        var r, o = n.route, i = n.options;
                        for (var c in r = n.options, t = o + "?", i) "share" === e && "txsrShareInfoSdk" === c || R(c) && r[c] && (t += c + "=" + i[c] + "&");
                        t = t.substring(0, t.length - 1);
                    } catch (e) {
                        console.error("getCurrentPageUrlWithArgs error", e);
                    }
                    return t;
                }
                function s(e) {
                    try {
                        var t = a();
                        return t ? (t.options, t.options[e] || "") : t;
                    } catch (e) {
                        console.error("getCurrentPageKey error", e);
                    }
                    return "/";
                }
                function u() {
                    var e = a();
                    try {
                        var t = __wxConfig.global.window.navigationBarTitleText;
                        return (e ? (__wxConfig.page[e.route + ".html"].window || {}).navigationBarTitleText : "") || t || "未知";
                    } catch (e) {}
                    return "未知";
                }
                function l() {
                    return "devtools" === function() {
                        try {
                            return __wxConfig.platform;
                        } catch (e) {
                            console.error("getEnv failed: ", e);
                        }
                        return "";
                    }();
                }
                function f(e, t, n) {
                    try {
                        var r = e[0], o = void 0 === r ? {} : r;
                        if (o) switch (o.type) {
                          case "tap":
                          case "change":
                          case "longpress":
                          case "confirm":
                            var i = (o.currentTarget || {}).dataset, a = void 0 === i ? {} : i, c = this || {}, s = c.is;
                            t("element", h({
                                is_sdk_auto_track: !0,
                                is: void 0 === s ? "" : s,
                                type: o.type,
                                element_id: "#" + n
                            }, a));
                        }
                    } catch (e) {
                        console.error("elementEventTrack error", e);
                    }
                }
                function p() {
                    var e, t = "" + V, n = (a() || {}).route || "";
                    try {
                        e = wx.getStorageSync(j.SDK + "_" + t);
                    } catch (e) {
                        console.error("CacheManager.get error", e);
                    }
                    var r = e.USER_INFO || {}, o = r.local_id, i = r.txsr_from_share_info, c = void 0 === i ? {} : i, s = c.mi, u = void 0 === s ? "" : s, l = c.d, f = void 0 === l ? 0 : l, p = c.o, d = void 0 === p ? "" : p, h = $.init(o + n), v = "" !== u && h === u ? f : f + 1;
                    return u = $.init(o + n), 0 === f && (d = u), JSON.stringify({
                        mi: u,
                        d: v,
                        o: d
                    });
                }
                var d = function(e, t) {
                    return (d = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    })(e, t);
                }, h = function() {
                    return (h = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
                };
                try {
                    Object.entries || (Object.entries = function(e) {
                        for (var t = Object.keys(e), n = t.length, r = new Array(n); n--; ) r[n] = [ t[n], e[t[n]] ];
                        return r;
                    }), Array.prototype.includes || (Array.prototype.includes = function(e) {
                        return !!~this.indexOf(e);
                    });
                } catch (e) {
                    console.error("polyfill exec failed", e);
                }
                var v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", _ = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, g = function(e) {
                    return function(e) {
                        for (var t, n, r, o, i = "", a = 0, c = (e = String(e)).length % 3; a < e.length; ) {
                            if ((n = e.charCodeAt(a++)) > 255 || (r = e.charCodeAt(a++)) > 255 || (o = e.charCodeAt(a++)) > 255) throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
                            i += v.charAt((t = n << 16 | r << 8 | o) >> 18 & 63) + v.charAt(t >> 12 & 63) + v.charAt(t >> 6 & 63) + v.charAt(63 & t);
                        }
                        return c ? i.slice(0, c - 3) + "===".substring(c) : i;
                    }(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, t) {
                        var n;
                        return n = "0x" + t, String.fromCharCode(n);
                    }));
                }, m = function(e) {
                    return decodeURIComponent(function(e) {
                        if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !_.test(e)) throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
                        e += "==".slice(2 - (3 & e.length));
                        for (var t, n, r, o = "", i = 0; i < e.length; ) t = v.indexOf(e.charAt(i++)) << 18 | v.indexOf(e.charAt(i++)) << 12 | (n = v.indexOf(e.charAt(i++))) << 6 | (r = v.indexOf(e.charAt(i++))), 
                        o += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === r ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
                        return o;
                    }(e).split("").map(function(e) {
                        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                    }).join(""));
                }, y = {
                    encode: function(e) {
                        return g(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
                    },
                    decode: function(e) {
                        var t = (e = e.replace(/\-/g, "+").replace(/_/g, "/")).length % 4;
                        return t > 0 && (e += "====".substring(t)), m(e);
                    }
                }, E = Object.prototype.toString, A = y, b = function(e) {
                    return "[object Object]" === E.call(e);
                }, P = function(e) {
                    return "[object Array]" === E.call(e);
                }, O = function(e, t) {
                    var n;
                    void 0 === t && (t = 0);
                    var r = [];
                    return function() {
                        for (var t = arguments, o = [], i = 0; i < arguments.length; i++) o[i] = t[i];
                        return n && clearTimeout(n), arguments && JSON.stringify(arguments) !== {} && (n = setTimeout(function() {
                            var t = e.apply(void 0, o);
                            r.forEach(function(e) {
                                return e(t);
                            }), r = [];
                        }, 2e3)), new Promise(function(e) {
                            return r.push(e);
                        });
                    };
                }, T = function() {
                    return Date.now() + "-" + "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16);
                    });
                }, S = function e() {
                    for (var t = arguments, r = [], o = 0; o < arguments.length; o++) r[o] = t[o];
                    return 0 === r.length ? {} : r.length < 2 ? r[0] : r.reduce(function(t, r) {
                        if (!b(t) || !b(r)) return console.error("deepMerge arguments only access object"), 
                        t;
                        var o = t || {};
                        return Object.entries(r).forEach(function(r) {
                            var i = r[0], a = r[1];
                            if (void 0 !== a) if (t[i]) if (P(t[i])) {
                                if (!P(a)) return void (o[i] = a);
                                var c = P(a) ? a : [ a ];
                                o[i] = n(t[i], c);
                            } else b(t[i]) ? o[i] = e(t[i], a) : o[i] = a; else o[i] = a;
                        }), o;
                    });
                }, R = function(e) {
                    return !!/^[a-zA-Z\$_][a-zA-Z\d_]*$/.test(e);
                }, C = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i, w = function(e) {
                    if ("string" != typeof e) throw new TypeError("Invalid argument expected string");
                    if (!C.test(e)) throw new Error("Invalid argument not valid semver ('" + e + "' received)");
                }, k = function(e) {
                    return isNaN(Number(e)) ? e : Number(e);
                }, I = function(e) {
                    var t, n, r = e.replace(/^v/, "").replace(/\+.*$/, ""), o = (n = "-", -1 === (t = r).indexOf("-") ? t.length : t.indexOf("-")), i = r.substring(0, o).split(".");
                    return i.push(r.substring(o + 1)), i;
                }, D = function(e, t) {
                    [ e, t ].forEach(w);
                    for (var n = I(e), r = I(t), o = 0; o < Math.max(n.length - 1, r.length - 1); o++) {
                        var i = parseInt(n[o] || 0, 10), a = parseInt(r[o] || 0, 10);
                        if (i > a) return 1;
                        if (a > i) return -1;
                    }
                    var c = n[n.length - 1], s = r[r.length - 1];
                    if (c && s) {
                        var u = c.split(".").map(k), l = s.split(".").map(k);
                        for (o = 0; o < Math.max(u.length, l.length); o++) {
                            if (void 0 === u[o] || "string" == typeof l[o] && "number" == typeof u[o]) return -1;
                            if (void 0 === l[o] || "string" == typeof u[o] && "number" == typeof l[o]) return 1;
                            if (u[o] > l[o]) return 1;
                            if (l[o] > u[o]) return -1;
                        }
                    } else if (c || s) return c ? -1 : 1;
                    return 0;
                }, x = function(t) {
                    function n(e) {
                        var n = t.call(this, e.request) || this;
                        return n.stack = [], n.initialize = function() {
                            return Promise.resolve(!0);
                        }, n.add = function(e) {
                            n.stack.push(e);
                        }, n.getItems = function() {
                            return n.stack;
                        }, n.unshift = function(e) {
                            var t;
                            return (t = n.stack).unshift.apply(t, e);
                        }, n.clean = function() {
                            var e = n.stack;
                            return n.stack = [], e;
                        }, n.option = e, n.initialize(), n;
                    }
                    return e(n, t), n.prototype.flush = function(e) {
                        var t = this;
                        if (void 0 === e && (e = {}), this.stack.length) {
                            var n = this.stack.map(function(t) {
                                return t.props = h(h({}, t.props), e), t;
                            });
                            this.stack = [], this.upload({
                                events: n
                            }).then(function(e) {
                                e.success || (t.stack = n);
                            }).catch(function() {
                                t.stack = n;
                            });
                        }
                    }, n;
                }(function(e) {
                    this.delay = 100, this.upload = O(e, this.delay);
                }), L = function(e, t, n) {
                    var r = n.value;
                    return n.value = function() {
                        var e;
                        try {
                            e = r.apply(this, arguments);
                        } catch (e) {
                            try {
                                console.error("Calling " + t + " error with", arguments), console.error(e);
                                var n = this.getServerUrl();
                                this.request({
                                    type: "sdk api exec error",
                                    props: {
                                        sr_sdk_version: this.version,
                                        system_info: this.getSystemInfo(),
                                        framework_info: this.getFrameworkInfo(),
                                        message: (e || {}).message || e,
                                        stack: (e || {}).stack
                                    }
                                }, {
                                    url: n,
                                    method: "POST"
                                });
                            } catch (e) {}
                        }
                        return e;
                    }, n;
                }, N = function(e, t, n) {
                    var r = n.value;
                    return n.value = function() {
                        if (this.inited) return r.apply(this, arguments);
                        console.error("请先完成初始化");
                    }, n;
                }, j = {
                    SDK: "__SR_SDK_TRACKER__",
                    TRACKS: "TRACKS",
                    USER_INFO: "USER_INFO",
                    LOGID_EVENTS: "LOGID_EVENTS"
                }, G = {
                    WAITING: "WAITING",
                    REPORTING: "REPORTING",
                    PAUSED: "PAUSED"
                }, H = {
                    MISS: "should exec cacheManagerInitialize first"
                }, M = {};
                try {
                    M = JSON.parse('{"mp":{"version":{"min":"1.3.6","max":"1.3.15"},"download":"https://sr-home-1257214331.cos.ap-guangzhou.myqcloud.com/sdk/sdk-weapp/index.js"},"xxx-for-git":{}}');
                } catch (e) {}
                var U = function() {
                    function e() {
                        var e = this;
                        this.versions = M, this.env = "production", this.cachePrefix = j.SDK, this.inited = !1, 
                        this.option = {}, this.context = {}, this.reportState = G.WAITING, this.triggerFlush = O(function() {
                            e.checkAndUpload();
                        }, 1e3), this.eventDataFmatter = function(t) {
                            var n = +new Date(), r = e.getPageInfo();
                            if (void 0 !== e._onQueue) {
                                var o = e._onQueue(t);
                                b(t) ? t = o : console.warn("eventDataFmatter should return Object type");
                            }
                            return h(h(h({}, r), t), {
                                time: n
                            });
                        }, this.checkRequiredOptionItem = function() {
                            return !!e.option.token || (e.option.skipTokenCheck ? (console.warn("token 未配置，已跳过该检查"), 
                            !0) : (console.error("sdk.init - Option 必要参数配置缺失，请检查"), !1));
                        }, this.checkVersionInfo = function() {
                            e.setContext({
                                sr_sdk_version: e.version
                            });
                            var t = "https://sr-home-1257214331.cos.ap-guangzhou.myqcloud.com/sdk/sr-sdk-version-info.json?timesamp=" + Date.now();
                            return e.request({}, {
                                url: t,
                                method: "GET"
                            }).then(function(t) {
                                var n = (t.data || {})[e.name], r = !0;
                                if (n) {
                                    var o = (((e.versions || {})[e.name] || {}).version || {}).max;
                                    return o && (1 === D(n.version.min, o) ? (console.error("当前SDK版本过低, 请升级！"), r = !1) : 1 === D(n.version.max, o) && console.warn("当前SDK有更新, 推荐升级！")), 
                                    {
                                        success: r,
                                        data: n,
                                        msg: ""
                                    };
                                }
                            }).catch(function(e) {
                                return void 0 === e && (e = {}), {
                                    success: !1,
                                    data: void 0,
                                    msg: e.errMsg
                                };
                            });
                        }, this.queueInitialize = function() {
                            var t = e.getServerUrl();
                            return e.queue = new x({
                                request: function(n) {
                                    var r = n.events.map(function(t) {
                                        return h(h({}, t), {
                                            from: "sr-sdk-wxapp",
                                            tracking_id: e.tracking_id,
                                            log_id: ++e.log_id
                                        });
                                    });
                                    return e.setCache(j.LOGID_EVENTS, {
                                        last_tracking_id: e.tracking_id,
                                        last_max_log_id: e.log_id
                                    }), e.request(r, {
                                        url: t,
                                        method: "POST"
                                    }).catch(function(e) {
                                        return console.error("APICaller error", e), "request:fail url not in domain list" === e.msg ? h(h({}, e), {
                                            success: !0
                                        }) : e;
                                    });
                                }
                            }), !0;
                        }, this.trackLogEvents = function() {
                            var t = e.getCache(j.LOGID_EVENTS) || {};
                            return t.last_max_log_id ? (e.track("logid_events", t), !0) : (++e.log_id, !1);
                        }, this.tracking_id = T(), this.log_id = -1, this.checkStaticMethods();
                    }
                    return e.prototype.init = function(e) {
                        if (this.inited) return this;
                        if (this.version = ((this.versions[this.name] || {}).version || {}).max, this.option = S(this.defaultOptions, this.option, e), 
                        !this.checkRequiredOptionItem()) return this;
                        this.cacheManagerInitialize();
                        try {
                            this.proxyInitialize();
                        } catch (e) {
                            this.errorHandle(e);
                        }
                        return this.queueInitialize(), this.contextInitialize(), this.inited = !0, this.option.autoStart && this.startReport(), 
                        this.checkVersionInfo(), this.trackLogEvents(), this;
                    }, e.prototype.track = function(e, t) {
                        var n = this.option.debug;
                        JSON.stringify(t || {}).length > 5e3 && console.warn("监测到超过5000的上报日志：" + e);
                        var r = this.eventDataFmatter(t);
                        return n && console && "function" == typeof console.log && console.log("【Track】 " + e, r), 
                        this.queue.add({
                            type: e,
                            props: r
                        }), this.triggerFlush(), this;
                    }, e.prototype.setContext = function(e) {
                        return console.warn("setContext 不在推荐使用，请用更轻便的 setUser、setChan等方法代替"), this.context = h(h(h({}, this.context), e), {
                            wx_user: h(h({}, this.context.wx_user), e.wx_user || {}),
                            chan: h(h({}, this.context.chan), e.chan || {})
                        }), this;
                    }, e.prototype.setUser = function(e) {
                        return void 0 === e && (e = {}), this.context = Object.assign({}, this.context, {
                            wx_user: h(h({}, this.context.wx_user), e)
                        }), this.setCache(j.USER_INFO, this.context.wx_user), this;
                    }, e.prototype.setChan = function(e) {
                        var t = e.chan_id, n = (this.context.chan || {}).chan_id;
                        return this.context = Object.assign({}, this.context, {
                            chan: h(h(h({}, this.context.chan), e), {
                                chan_id: t || n || ""
                            })
                        }), this;
                    }, e.prototype.setComponent = function(e) {
                        var t = e.component_id, n = e.component_name;
                        return this.context = Object.assign({}, this.context, {
                            component: h(h({}, e), {
                                component_id: t,
                                component_name: n
                            })
                        }), this;
                    }, e.prototype.clearComponent = function() {
                        return delete this.context.component, this;
                    }, e.prototype.setActivityInfo = function(e) {
                        var t = e.activity_id, n = e.activity_name, r = e.activity_type, o = e.activity_index;
                        return this.context = Object.assign({}, this.context, {
                            activity_info: h(h({}, e), {
                                activity_id: t,
                                activity_name: n,
                                activity_type: r,
                                activity_index: o
                            })
                        }), this;
                    }, e.prototype.clearActivityInfo = function() {
                        return delete this.context.activity_info, this;
                    }, e.prototype.startReport = function() {
                        return this.reportState = G.REPORTING, this.triggerFlush(), this;
                    }, e.prototype.resumeReport = function() {
                        var e = this.getCache(j.TRACKS) || [];
                        return this.queue.unshift(e), this.reportState === G.PAUSED && (this.reportState = G.REPORTING), 
                        this.triggerFlush(), this;
                    }, e.prototype.pauseReport = function() {
                        return this.reportState = G.PAUSED, this.setCache(j.TRACKS, this.queue.clean()), 
                        this;
                    }, e.prototype.flush = function() {
                        return this.queue.flush(this.context), this;
                    }, e.prototype.onQueue = function(e) {
                        return this._onQueue = e, this;
                    }, e.prototype.getInfo = function() {
                        var e = {
                            option: this.option,
                            tracking_id: this.tracking_id,
                            context: this.context,
                            is_dev: this.isDev()
                        };
                        return "SR_SDK_INFO=" + A.encode(JSON.stringify(e));
                    }, e.prototype.checkStaticMethods = function() {
                        if ("development" === this.env) try {
                            var e = this.constructor;
                            [ "create" ].forEach(function(t) {
                                !e[t] && console.error("static " + t + " should be implement");
                            });
                        } catch (e) {
                            console.error("checkStaticMethods error", e);
                        }
                    }, e.prototype.checkAndUpload = function() {
                        this.reportState === G.REPORTING && this.flush();
                    }, e.prototype.contextInitialize = function() {
                        var e = this.getUser(), t = this.getSystemInfo(), n = t.brand, r = t.model, o = t.version, i = t.environment, a = t.screenWidth, c = t.screenHeight, s = t.system, u = t.platform, l = this.getFrameworkInfo();
                        this.context = S(this.context, {
                            wx_user: h({
                                app_id: this.option.appid
                            }, e),
                            system_info: {
                                brand: n,
                                model: r,
                                version: o,
                                environment: i,
                                screenWidth: a,
                                screenHeight: c,
                                system: s,
                                platform: u
                            },
                            framework_info: l,
                            chan: {}
                        });
                    }, e.prototype.getUser = function() {
                        var e = this.context.wx_user || this.getCache(j.USER_INFO) || {};
                        return e.local_id && 50 === e.local_id.length || (e = {
                            local_id: T()
                        }, this.setCache(j.USER_INFO, e)), e;
                    }, e.prototype.cacheManagerInitialize = function() {
                        var e = this.getCacheManager();
                        this.cacheManager = e;
                    }, e.prototype.getCache = function(e) {
                        return this.cacheManager ? (this.cacheManager.get(j.SDK) || {})[e] : (console.error(H.MISS), 
                        {});
                    }, e.prototype.setCache = function(e, t) {
                        var n;
                        this.cacheManager || console.error(H.MISS);
                        var r = h(h({}, this.cacheManager.get(j.SDK) || {}), ((n = {})[e] = t, n));
                        this.cacheManager.set(j.SDK, r);
                    }, e.prototype.getServerUrl = function() {
                        return ("function" == typeof this.option.serverUrl ? this.option.serverUrl.call(this) : this.option.serverUrl || "https://zhls.qq.com/api/report") + "?token=" + this.option.token;
                    }, e.prototype.getTrackingId = function() {
                        return this.tracking_id;
                    }, t([ L ], e.prototype, "init", null), t([ L, N ], e.prototype, "track", null), 
                    t([ L, N ], e.prototype, "setContext", null), t([ L, N ], e.prototype, "setUser", null), 
                    t([ L, N ], e.prototype, "setChan", null), t([ L, N ], e.prototype, "setComponent", null), 
                    t([ L, N ], e.prototype, "clearComponent", null), t([ L, N ], e.prototype, "setActivityInfo", null), 
                    t([ L, N ], e.prototype, "clearActivityInfo", null), t([ L, N ], e.prototype, "startReport", null), 
                    t([ L, N ], e.prototype, "resumeReport", null), t([ L, N ], e.prototype, "pauseReport", null), 
                    t([ L, N ], e.prototype, "flush", null), t([ L, N ], e.prototype, "onQueue", null), 
                    t([ L, N ], e.prototype, "getInfo", null), e;
                }(), $ = function() {
                    function e() {}
                    return e.AddUnsigned = function(e, t) {
                        var n, r, o, i, a;
                        return o = 2147483648 & e, i = 2147483648 & t, a = (1073741823 & e) + (1073741823 & t), 
                        (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i;
                    }, e.FF = function(e, t, n, r, o, i, a) {
                        return e = this.AddUnsigned(e, this.AddUnsigned(this.AddUnsigned(this.F(t, n, r), o), a)), 
                        this.AddUnsigned(this.RotateLeft(e, i), t);
                    }, e.GG = function(e, t, n, r, o, i, a) {
                        return e = this.AddUnsigned(e, this.AddUnsigned(this.AddUnsigned(this.G(t, n, r), o), a)), 
                        this.AddUnsigned(this.RotateLeft(e, i), t);
                    }, e.HH = function(e, t, n, r, o, i, a) {
                        return e = this.AddUnsigned(e, this.AddUnsigned(this.AddUnsigned(this.H(t, n, r), o), a)), 
                        this.AddUnsigned(this.RotateLeft(e, i), t);
                    }, e.II = function(e, t, n, r, o, i, a) {
                        return e = this.AddUnsigned(e, this.AddUnsigned(this.AddUnsigned(this.I(t, n, r), o), a)), 
                        this.AddUnsigned(this.RotateLeft(e, i), t);
                    }, e.ConvertToWordArray = function(e) {
                        for (var t, n = e.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), i = Array(o - 1), a = 0, c = 0; c < n; ) a = c % 4 * 8, 
                        i[t = (c - c % 4) / 4] = i[t] | e.charCodeAt(c) << a, c++;
                        return a = c % 4 * 8, i[t = (c - c % 4) / 4] = i[t] | 128 << a, i[o - 2] = n << 3, 
                        i[o - 1] = n >>> 29, i;
                    }, e.WordToHex = function(e) {
                        var t, n = "", r = "";
                        for (t = 0; t <= 3; t++) n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
                        return n;
                    }, e.Utf8Encode = function(e) {
                        var t, n = "";
                        e = e.replace(/\r\n/g, "\n");
                        for (var r = 0; r < e.length; r++) (t = e.charCodeAt(r)) < 128 ? n += String.fromCharCode(t) : t > 127 && t < 2048 ? (n += String.fromCharCode(t >> 6 | 192), 
                        n += String.fromCharCode(63 & t | 128)) : (n += String.fromCharCode(t >> 12 | 224), 
                        n += String.fromCharCode(t >> 6 & 63 | 128), n += String.fromCharCode(63 & t | 128));
                        return n;
                    }, e.init = function(e) {
                        for ("string" != typeof e && (e = JSON.stringify(e)), this._string = this.Utf8Encode(e), 
                        this.x = this.ConvertToWordArray(this._string), this.a = 1732584193, this.b = 4023233417, 
                        this.c = 2562383102, this.d = 271733878, this.k = 0; this.k < this.x.length; this.k += 16) this.AA = this.a, 
                        this.BB = this.b, this.CC = this.c, this.DD = this.d, this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k], this.S11, 3614090360), 
                        this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 1], this.S12, 3905402710), 
                        this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 2], this.S13, 606105819), 
                        this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 3], this.S14, 3250441966), 
                        this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k + 4], this.S11, 4118548399), 
                        this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 5], this.S12, 1200080426), 
                        this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 6], this.S13, 2821735955), 
                        this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 7], this.S14, 4249261313), 
                        this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k + 8], this.S11, 1770035416), 
                        this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 9], this.S12, 2336552879), 
                        this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 10], this.S13, 4294925233), 
                        this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 11], this.S14, 2304563134), 
                        this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k + 12], this.S11, 1804603682), 
                        this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 13], this.S12, 4254626195), 
                        this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 14], this.S13, 2792965006), 
                        this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 15], this.S14, 1236535329), 
                        this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 1], this.S21, 4129170786), 
                        this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 6], this.S22, 3225465664), 
                        this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 11], this.S23, 643717713), 
                        this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k], this.S24, 3921069994), 
                        this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 5], this.S21, 3593408605), 
                        this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 10], this.S22, 38016083), 
                        this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 15], this.S23, 3634488961), 
                        this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k + 4], this.S24, 3889429448), 
                        this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 9], this.S21, 568446438), 
                        this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 14], this.S22, 3275163606), 
                        this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 3], this.S23, 4107603335), 
                        this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k + 8], this.S24, 1163531501), 
                        this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 13], this.S21, 2850285829), 
                        this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 2], this.S22, 4243563512), 
                        this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 7], this.S23, 1735328473), 
                        this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k + 12], this.S24, 2368359562), 
                        this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 5], this.S31, 4294588738), 
                        this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k + 8], this.S32, 2272392833), 
                        this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 11], this.S33, 1839030562), 
                        this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 14], this.S34, 4259657740), 
                        this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 1], this.S31, 2763975236), 
                        this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k + 4], this.S32, 1272893353), 
                        this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 7], this.S33, 4139469664), 
                        this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 10], this.S34, 3200236656), 
                        this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 13], this.S31, 681279174), 
                        this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k], this.S32, 3936430074), 
                        this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 3], this.S33, 3572445317), 
                        this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 6], this.S34, 76029189), 
                        this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 9], this.S31, 3654602809), 
                        this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k + 12], this.S32, 3873151461), 
                        this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 15], this.S33, 530742520), 
                        this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 2], this.S34, 3299628645), 
                        this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k], this.S41, 4096336452), 
                        this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 7], this.S42, 1126891415), 
                        this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 14], this.S43, 2878612391), 
                        this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 5], this.S44, 4237533241), 
                        this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k + 12], this.S41, 1700485571), 
                        this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 3], this.S42, 2399980690), 
                        this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 10], this.S43, 4293915773), 
                        this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 1], this.S44, 2240044497), 
                        this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k + 8], this.S41, 1873313359), 
                        this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 15], this.S42, 4264355552), 
                        this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 6], this.S43, 2734768916), 
                        this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 13], this.S44, 1309151649), 
                        this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k + 4], this.S41, 4149444226), 
                        this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 11], this.S42, 3174756917), 
                        this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 2], this.S43, 718787259), 
                        this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 9], this.S44, 3951481745), 
                        this.a = this.AddUnsigned(this.a, this.AA), this.b = this.AddUnsigned(this.b, this.BB), 
                        this.c = this.AddUnsigned(this.c, this.CC), this.d = this.AddUnsigned(this.d, this.DD);
                        return (this.WordToHex(this.a) + this.WordToHex(this.b) + this.WordToHex(this.c) + this.WordToHex(this.d)).toLowerCase();
                    }, e.x = Array(), e.S11 = 7, e.S12 = 12, e.S13 = 17, e.S14 = 22, e.S21 = 5, e.S22 = 9, 
                    e.S23 = 14, e.S24 = 20, e.S31 = 4, e.S32 = 11, e.S33 = 16, e.S34 = 23, e.S41 = 6, 
                    e.S42 = 10, e.S43 = 15, e.S44 = 21, e.RotateLeft = function(e, t) {
                        return e << t | e >>> 32 - t;
                    }, e.F = function(e, t, n) {
                        return e & t | ~e & n;
                    }, e.G = function(e, t, n) {
                        return e & n | t & ~n;
                    }, e.H = function(e, t, n) {
                        return e ^ t ^ n;
                    }, e.I = function(e, t, n) {
                        return t ^ (e | ~n);
                    }, e;
                }(), V = "production", F = function() {}, B = {}, K = {}, W = function() {
                    return new Date().getTime();
                }, Y = function(e, t, n, r) {
                    return function(o) {
                        return function(e, t, n, r, o) {
                            if (i(e, "onLoad", function(e, t) {
                                e(), this.lauchTime = W();
                            }), i(e, "onShow", function(e) {
                                var r = this, o = function() {
                                    r.showTime = W();
                                    var e = s.call(r, "room_id");
                                    e && n({
                                        room_id: e
                                    }), t("browse_wxapp_page", {
                                        is_sdk_auto_track: !0,
                                        refer_page: K.route,
                                        is_newly_open: !B[r.route]
                                    }), B[r.route] = !0, K = r;
                                };
                                e().then(o).catch(o);
                            }, !0), i(e, "onHide", function(e) {
                                e();
                                var n = this.showTime ? W() - this.showTime : 0;
                                t("leave_wxapp_page", {
                                    is_sdk_auto_track: !0,
                                    stay_time: n = n > 144e5 ? 0 : n
                                });
                            }), i(e, "onUnload", function(e) {
                                e();
                                var n = this.lauchTime ? W() - this.lauchTime : 0;
                                t("leave_wxapp_page", {
                                    is_sdk_auto_track: !0,
                                    stay_time: n = n > 144e5 ? 0 : n
                                });
                            }), i(e, "onPullDownRefresh", function(e) {
                                e(), t("page_pull_down_refresh", {
                                    is_sdk_auto_track: !0
                                });
                            }), i(e, "onReachBottom", function(e) {
                                e(), t("page_reach_bottom", {
                                    is_sdk_auto_track: !0
                                });
                            }), "function" == typeof e.onShareAppMessage) {
                                var a = e.onShareAppMessage || F, u = e.onShareTimeline || F;
                                e.onShareAppMessage = function(e) {
                                    void 0 === e && (e = {});
                                    var n = a.call(this, e) || {};
                                    try {
                                        var r = n.path || c.call(this, "share");
                                        -1 === r.indexOf("?") ? r += "?" : "&" !== r.slice(-1) && (r += "&");
                                        var i = void 0, s = void 0;
                                        o && (i = p(), s = JSON.parse(i), r = r + "txsrShareInfoSdk=" + encodeURIComponent(i)), 
                                        t("page_share_app_message", {
                                            is_sdk_auto_track: !0,
                                            from_type: e.from || "未知",
                                            share_to: "friends",
                                            share_path: r,
                                            share_title: n.title,
                                            share_image_url: n.imageUrl,
                                            txsr_share_info_sdk: s
                                        }), n.path = r;
                                    } catch (e) {
                                        console.error("onShareAppMessage error", e);
                                    }
                                    return n;
                                }, e.onShareTimeline = function(e) {
                                    void 0 === e && (e = {});
                                    var n = u.call(this, e) || {};
                                    try {
                                        var r = n.path || c.call(this, "share"), i = n.query || "";
                                        -1 === r.indexOf("?") ? r += "?" : "&" !== r.slice(-1) && (r += "&");
                                        var a = void 0, s = void 0;
                                        o && (a = p(), s = JSON.parse(a), r = r + "txsrShareInfoSdk=" + encodeURIComponent(a)), 
                                        t("page_share_app_message", {
                                            is_sdk_auto_track: !0,
                                            from_type: e.from || "未知",
                                            share_to: "timeline",
                                            query: i,
                                            share_path: r,
                                            share_title: n.title,
                                            share_image_url: n.imageUrl,
                                            txsr_share_info_sdk: s
                                        }), n.path = r;
                                    } catch (e) {
                                        console.error("onShareAppMessage error", e);
                                    }
                                    return n;
                                };
                            }
                            return r && Object.entries(e).filter(function(e) {
                                var t = e[0];
                                return e[1], ![ "onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onPageScroll", "onShareAppMessage", "onResize", "onTabItemTap" ].includes(t);
                            }).forEach(function(n) {
                                var r = n[0];
                                "function" == typeof n[1] && i(e, r, function(e) {
                                    for (var n = arguments, o = [], i = 1; i < arguments.length; i++) o[i - 1] = n[i];
                                    return f.call(this, o, t, r), e();
                                });
                            }), e;
                        }(o, e, t, n, r);
                    };
                }, q = function() {}, z = {}, J = {}, X = function() {
                    return new Date().getTime();
                }, Q = function(e, t, n, r) {
                    return function(o) {
                        return function(e, t, n, r, o) {
                            try {
                                if (e.methods = e.methods || {}, i(e.methods, "onLoad", function(e, t) {
                                    e(), this.lauchTime = X();
                                }), i(e.methods, "onShow", function(e) {
                                    var r = this, o = function() {
                                        r.showTime = X();
                                        var e = s.call(r, "room_id");
                                        e && n({
                                            room_id: e
                                        }), t("browse_wxapp_page", {
                                            is_sdk_auto_track: !0,
                                            refer_page: J.route,
                                            is_newly_open: !z[r.route]
                                        }), z[r.route] = !0, J = r;
                                    };
                                    e().then(o).catch(o);
                                }, !0), i(e.methods, "onUnload", function(e) {
                                    e();
                                    var n = this.lauchTime ? X() - this.lauchTime : 0;
                                    t("leave_wxapp_page", {
                                        is_sdk_auto_track: !0,
                                        stay_time: n = n > 144e5 ? 0 : n
                                    });
                                }), i(e.methods, "onPullDownRefresh", function(e) {
                                    e(), t("page_pull_down_refresh", {
                                        is_sdk_auto_track: !0
                                    });
                                }), i(e.methods, "onReachBottom", function(e) {
                                    e(), t("page_reach_bottom", {
                                        is_sdk_auto_track: !0
                                    });
                                }), i(e.methods, "onHide", function(e) {
                                    e();
                                    var n = this.showTime ? X() - this.showTime : 0;
                                    t("leave_wxapp_page", {
                                        is_sdk_auto_track: !0,
                                        stay_time: n = n > 144e5 ? 0 : n
                                    });
                                }), "function" == typeof e.methods.onShareAppMessage) {
                                    var a = e.methods.onShareAppMessage || q, u = e.methods.onShareTimeline || q;
                                    e.methods.onShareAppMessage = function(e) {
                                        void 0 === e && (e = {});
                                        var n = a.call(this, e) || {};
                                        try {
                                            var r = n.path || c.call(this, "share");
                                            -1 === r.indexOf("?") ? r += "?" : "&" !== r.slice(-1) && (r += "&");
                                            var i = void 0, s = void 0;
                                            o && (i = p(), s = JSON.parse(i), r = r + "txsrShareInfoSdk=" + encodeURIComponent(i)), 
                                            t("page_share_app_message", {
                                                is_sdk_auto_track: !0,
                                                from_type: e.from || "未知",
                                                share_to: "friends",
                                                share_path: r,
                                                share_title: n.title,
                                                share_image_url: n.imageUrl,
                                                txsr_share_info_sdk: s
                                            }), n.path = r;
                                        } catch (e) {
                                            console.error("onShareAppMessage error", e);
                                        }
                                        return n;
                                    }, e.methods.onShareTimeline = function(e) {
                                        void 0 === e && (e = {});
                                        var n = u.call(this, e) || {};
                                        try {
                                            var r = n.path || c.call(this, "share"), i = n.query || "";
                                            -1 === r.indexOf("?") ? r += "?" : "&" !== r.slice(-1) && (r += "&");
                                            var a = void 0, s = void 0;
                                            o && (a = p(), s = JSON.parse(a), r = r + "txsrShareInfoSdk=" + encodeURIComponent(a)), 
                                            t("page_share_app_message", {
                                                is_sdk_auto_track: !0,
                                                from_type: e.from || "未知",
                                                share_to: "timeline",
                                                share_path: r,
                                                query: i,
                                                share_title: n.title,
                                                share_image_url: n.imageUrl,
                                                txsr_share_info_sdk: s
                                            }), n.path = r;
                                        } catch (e) {
                                            console.error("onShareAppMessage error", e);
                                        }
                                        return n;
                                    };
                                }
                                e.methods && r && Object.entries(e.methods).filter(function(e) {
                                    var t = e[0];
                                    return e[1], ![ "onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onPageScroll", "onShareAppMessage", "onResize", "onTabItemTap", "observer" ].includes(t);
                                }).forEach(function(n) {
                                    var r = n[0];
                                    "function" == typeof n[1] && i(e.methods, r, function(e) {
                                        for (var n = arguments, o = [], i = 1; i < arguments.length; i++) o[i - 1] = n[i];
                                        return f.call(this, o, t, r), e();
                                    });
                                });
                            } catch (e) {
                                console.error("componentProxy error", e);
                            }
                            return e;
                        }(o, e, t, n, r);
                    };
                }, Z = {}, ee = function(e) {
                    return e;
                }, te = function() {
                    return new Date().getTime();
                }, ne = function(t) {
                    function n() {
                        var e = t.call(this) || this;
                        return e.name = "mp", e.component = ee, e.page = ee, e.proxySetNavigation = function() {
                            try {
                                var e = wx.setNavigationBarTitle;
                                Object.defineProperty(wx, "setNavigationBarTitle", {
                                    get: function() {
                                        return function(t) {
                                            void 0 === t && (t = {});
                                            try {
                                                var n = a();
                                                __wxConfig.page = __wxConfig.page || {};
                                                var r = __wxConfig.page[n.route + ".html"];
                                                r && ((r.window || {}).navigationBarTitleText = t.title);
                                            } catch (e) {}
                                            e.call(this, t);
                                        };
                                    }
                                });
                            } catch (e) {
                                console.warn("proxySetNavigation failed", e);
                            }
                        }, e.request = function(t, n) {
                            var r = function(e) {
                                return void 0 === e && (e = {}), 0 === e.code;
                            };
                            return "function" == typeof e.option.onUploaded && (r = e.option.onUploaded), new Promise(function(e, o) {
                                wx.request({
                                    url: n.url,
                                    method: n.method || "POST",
                                    data: t,
                                    enableHttp2: !0,
                                    success: function(t) {
                                        void 0 === t && (t = {});
                                        var n = t.data, o = void 0 === n ? {} : n, i = r(o);
                                        e({
                                            success: void 0 === i || i,
                                            data: o.data || o,
                                            msg: o.errMsg
                                        });
                                    },
                                    fail: function(e) {
                                        o({
                                            success: !1,
                                            data: void 0,
                                            msg: e.errMsg
                                        });
                                    }
                                });
                            });
                        }, e.defaultOptions = {
                            autoStart: !0,
                            debug: !1,
                            usePlugin: !1,
                            proxyPage: !1,
                            proxyComponent: !1,
                            autoTrack: !1,
                            trackApp: !0,
                            openSdkShareDepth: !1,
                            installFrom: "",
                            openAutoTrackOpenId: !1
                        }, e.proxySetNavigation(), e;
                    }
                    return e(n, t), n.prototype.getCacheManager = function() {
                        var e = "" + this.env, t = function(t) {
                            return t + "_" + e;
                        };
                        return {
                            get: function(e) {
                                var n;
                                try {
                                    n = wx.getStorageSync(t(e));
                                } catch (e) {
                                    return console.error("CacheManager.get error", e), n;
                                }
                                return n;
                            },
                            set: function(e, n) {
                                try {
                                    wx.setStorageSync(t(e), n);
                                } catch (e) {
                                    return console.error("CacheManager.set error", e), !1;
                                }
                                return !0;
                            }
                        };
                    }, n.prototype.proxyInitialize = function() {
                        return ne.options = this.option, this.trackApp(), !0;
                    }, n.prototype.trackApp = function() {
                        var e = this, t = !1;
                        wx.onAppShow(function(n) {
                            void 0 === n && (n = {});
                            var r = n, o = r.query, i = void 0 === o ? {} : o, a = r.path, c = r.shareTicket, s = e.option.openSdkShareDepth, u = e.option.openAutoTrackOpenId, l = e.option.appid, f = e.cacheManager.get(j.SDK) || {}, p = function(e) {
                                void 0 === e && (e = {});
                                var t = {};
                                if (e.scene) {
                                    try {
                                        var n = decodeURIComponent(e.scene);
                                        (n = n.replace("?", "").trim()).split("&").map(function(e) {
                                            if (e) {
                                                var n = e.split("="), r = n[0], o = n[1];
                                                R(r) && (t[r] = void 0 === o || o);
                                            }
                                        });
                                    } catch (e) {
                                        console.error(e);
                                    }
                                    e = h(h({}, e), t);
                                }
                                return e;
                            }(i || {}), d = p.txsrShareInfoSdk || "{}", v = e, _ = f.USER_INFO, g = (_.open_id, 
                            _.union_id, _.get_auto_id_time);
                            if (p && "{}" !== JSON.stringify(p)) {
                                var m = "?";
                                Object.entries(p).forEach(function(e, t) {
                                    var n = e[0], r = e[1];
                                    m += (0 === t ? "" : "&") + n + "=" + r;
                                }), a += m;
                            }
                            if (e.setChan(h(h({}, p), {
                                chan_wxapp_scene: n.scene,
                                chan_refer_app_id: (n.referrerInfo || {}).appId
                            })), p.chan_id && e.setChan({
                                chan_id: p.chan_id
                            }), !t) {
                                if (t = !0, s && "{}" !== d) try {
                                    e.setUser({
                                        txsr_from_share_info: JSON.parse(decodeURIComponent(d))
                                    });
                                } catch (e) {}
                                e.option.trackApp && e.track("app_launch", {
                                    is_sdk_auto_track: !0,
                                    page: a
                                });
                            }
                            if (s || u && (!g || te() - g >= 2592e5)) try {
                                wx.login({
                                    success: function(e) {
                                        var t = e.code;
                                        wx.request({
                                            enableHttp2: !0,
                                            url: "https://zhls.qq.com/wxlogin/getOpenId?appid=" + l + "&js_code=" + t,
                                            data: {},
                                            header: {
                                                "content-type": "json"
                                            },
                                            success: function(e) {
                                                var t = e.data, n = t.openId, r = t.unionId, o = void 0 === r ? "" : r;
                                                v.setUser({
                                                    open_id: n,
                                                    union_id: o,
                                                    get_auto_id_time: te()
                                                }), s && c && n && wx.getShareInfo({
                                                    shareTicket: c,
                                                    success: function(e) {
                                                        var t = e.iv, r = e.encryptedData;
                                                        wx.request({
                                                            enableHttp2: !0,
                                                            url: "https://zhls.qq.com/wxlogin/convertData",
                                                            data: {
                                                                appid: l,
                                                                openid: n,
                                                                data: r,
                                                                iv: t
                                                            },
                                                            header: {
                                                                "content-type": "json"
                                                            },
                                                            success: function(e) {
                                                                var t = (e && e.data).openGId;
                                                                t && v.setChan({
                                                                    openGId: t
                                                                });
                                                            }
                                                        });
                                                    },
                                                    fail: function(e) {}
                                                });
                                            }
                                        });
                                    }
                                });
                            } catch (t) {
                                e.errorHandle(t);
                            }
                            e.option.trackApp && e.track("app_show", {
                                is_sdk_auto_track: !0,
                                page: a
                            });
                        }), wx.onAppHide(function() {
                            e.option.trackApp && e.track("exit_wxapp", {
                                is_sdk_auto_track: !0
                            });
                        });
                    }, n.prototype.errorHandle = function(e) {
                        try {
                            var t = this.getServerUrl();
                            this.request({
                                type: "sdk api exec error",
                                props: {
                                    sr_sdk_version: this.version,
                                    system_info: this.getSystemInfo(),
                                    framework_info: this.getFrameworkInfo(),
                                    message: e,
                                    stack: e
                                }
                            }, {
                                url: t,
                                method: "POST"
                            });
                        } catch (e) {
                            console.log("errorHandle error", e);
                        }
                    }, n.prototype.getSystemInfo = function() {
                        try {
                            return wx.getSystemInfoSync();
                        } catch (e) {
                            return {};
                        }
                    }, n.prototype.getFrameworkInfo = function() {
                        var e, t;
                        try {
                            if (r && Object({
                                NODE_ENV: "production",
                                VUE_APP_PLATFORM: "mp-weixin",
                                BASE_URL: "/"
                            }) && Object({
                                NODE_ENV: "production",
                                VUE_APP_PLATFORM: "mp-weixin",
                                BASE_URL: "/"
                            }).TARO_ENV && (e = "taro"), this.option.installFrom) {
                                var n = String(this.option.installFrom).toLowerCase(), o = /^((taro)|(uni[\-]?app)|(chameleon)|(wepy)|(mpvue))(@v?([\S]*))?/g.exec(n);
                                o && o[1] && ("taro" === e && o[2] ? t = o[8] : "taro" !== e && (t = o[8], e = o[3] ? "uni-app" : o[4] || o[5] || o[6] || "unknow"));
                            }
                        } catch (t) {
                            e = "unkonw";
                        }
                        return {
                            framework: e,
                            version: t
                        };
                    }, n.prototype.getPageInfo = function() {
                        var e = c(), t = a() || {}, n = u, r = (t.data || {}).title || t.title;
                        try {
                            void 0 === r && e && !Z[e] && (Z[e] = !0, console.warn("页面[" + e + "]没有实现 title 属性，会导致部分机型下收集不到页面标题!")), 
                            "string" == typeof r && (n = function() {
                                return r;
                            }), "function" == typeof r && (n = r);
                        } catch (e) {
                            console.error("curPage.data.title 执行错误", e);
                        }
                        return {
                            page: e,
                            page_title: r || n()
                        };
                    }, n.prototype.isDev = function() {
                        return l();
                    }, n.create = function() {
                        var e;
                        try {
                            e = new n();
                        } catch (t) {
                            e = n.prototype, console.error("new sr_sdk failed", t);
                        }
                        return e;
                    }, n;
                }(U).create(), re = Page, oe = Component;
                return Page = function(e) {
                    if (ne.option.proxyPage) {
                        var t = Y(ne.track.bind(ne), ne.setChan.bind(ne), ne.option.autoTrack, ne.option.openSdkShareDepth);
                        re(t(e));
                    } else re(e);
                }, Component = function(e) {
                    if (ne.option.proxyComponent) {
                        var t = Q(ne.track.bind(ne), ne.setChan.bind(ne), ne.option.autoTrack, ne.option.openSdkShareDepth);
                        return oe(t(e));
                    }
                    return oe(e);
                }, ne;
            });
        }).call(this, n("4362"));
    },
    "6ec1": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e) {
            return s(e) || c(e) || a(e) || i();
        }
        function i() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function a(e, t) {
            if (e) {
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0;
            }
        }
        function c(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }
        function s(e) {
            if (Array.isArray(e)) return u(e);
        }
        function u(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function l(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function f(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    function i(e) {
                        l(c, r, o, i, a, "next", e);
                    }
                    function a(e) {
                        l(c, r, o, i, a, "throw", e);
                    }
                    var c = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        function p() {
            return (p = f(h.default.mark(function e() {
                var t, n, r, o;
                return h.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (E) {
                            e.next = 19;
                            break;
                        }
                        return E = !0, e.prev = 2, e.next = 5, (0, _.apiGetAppGlobalInfo)();

                      case 5:
                        if (t = e.sent, (0, v.set)(m.default.GLOBAL_CONFIG), 0 !== Number(t.code)) {
                            e.next = 14;
                            break;
                        }
                        if (!(o = null === t || void 0 === t || null === (n = t.datas) || void 0 === n || null === (r = n.val) || void 0 === r ? void 0 : r.content)) {
                            e.next = 14;
                            break;
                        }
                        return d(o), g.default.commit("globalData/update", {
                            configVersion: t.datas.version
                        }), E = !1, e.abrupt("return");

                      case 14:
                        e.next = 19;
                        break;

                      case 16:
                        e.prev = 16, e.t0 = e.catch(2), E = !1;

                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 2, 16 ] ]);
            }))).apply(this, arguments);
        }
        function d(e) {
            var t, n = e || {}, r = n.HIDDEN_HOME_POPUP, i = n.DOMAIN_SERVICE, a = n.WX_GW, c = n.LOG_WHITE_LIST;
            if ((null === e || void 0 === e || null === (t = e.PRE_FEATCH_LIST) || void 0 === t ? void 0 : t.enable) && g.default.commit("globalData/update", {
                preFetchList: o(JSON.parse(e.PRE_FEATCH_LIST.payLoad))
            }), c && (null === c || void 0 === c ? void 0 : c.enable) && g.default.commit("globalData/update", {
                logConfigData: JSON.parse(c.payLoad)
            }), r && r.enable && g.default.commit("globalData/update", {
                hiddenHomePopup: (0, y.getTruthConfig)(JSON.parse(r.payLoad))
            }), (null === i || void 0 === i ? void 0 : i.enable) && (null === i || void 0 === i ? void 0 : i.payLoad) && g.default.commit("globalData/update", {
                domainServiceConfig: i.payLoad
            }), (null === a || void 0 === a ? void 0 : a.enable) && (null === a || void 0 === a ? void 0 : a.payLoad)) {
                var s = JSON.parse(null === a || void 0 === a ? void 0 : a.payLoad), u = s.status, l = s.list;
                g.default.commit("globalData/update", {
                    wxGwStatus: u,
                    wxGwWhiteList: l
                });
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getGlobalConfig = function() {
            return p.apply(this, arguments);
        };
        var h = r(n("a34a")), v = n("8548"), _ = n("37eb"), g = r(n("0613")), m = r(n("9c2d")), y = n("6ddb"), E = !1;
    },
    7031: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            namespaced: !0,
            state: {
                LoadingStatus: -1,
                LoadingShowImg: !0,
                loadingTimeout: [],
                left: 0,
                top: 0,
                text: ""
            },
            mutations: {
                showLoading: function(e, t) {
                    if (t.status >= 0 && t.status < 2) {
                        var n = setTimeout(function() {
                            e.LoadingStatus = t.status;
                        }, 100);
                        e.loadingTimeout.push(n);
                    } else e.loadingTimeout.forEach(function(e) {
                        e && clearTimeout(e);
                    }), e.loadingTimeout = [], e.LoadingStatus = t.status;
                    e.LoadingShowImg = !1 !== t.showImg, e.top = t.top || 0, e.left = t.left || 0, e.text = t.text || "";
                }
            }
        };
        t.default = r;
    },
    7282: function(e, t) {
        function n(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var n = 271733878, r = -271733879, u = 1732584193, l = -1732584194, f = 0; f < e.length; f += 16) {
                var p = n, d = r, h = u, v = l;
                r = c(r = c(r = c(r = c(r = a(r = a(r = a(r = a(r = i(r = i(r = i(r = i(r = o(r = o(r = o(r = o(r, u = o(u, l = o(l, n = o(n, r, u, l, e[f + 0], 7, -680876936), r, u, e[f + 1], 12, -389564586), n, r, e[f + 2], 17, 606105819), l, n, e[f + 3], 22, -1044525330), u = o(u, l = o(l, n = o(n, r, u, l, e[f + 4], 7, -176418897), r, u, e[f + 5], 12, 1200080426), n, r, e[f + 6], 17, -1473231341), l, n, e[f + 7], 22, -45705983), u = o(u, l = o(l, n = o(n, r, u, l, e[f + 8], 7, 1770035416), r, u, e[f + 9], 12, -1958414417), n, r, e[f + 10], 17, -42063), l, n, e[f + 11], 22, -1990404162), u = o(u, l = o(l, n = o(n, r, u, l, e[f + 12], 7, 1804603682), r, u, e[f + 13], 12, -40341101), n, r, e[f + 14], 17, -1502002290), l, n, e[f + 15], 22, 1236535329), u = i(u, l = i(l, n = i(n, r, u, l, e[f + 1], 5, -165796510), r, u, e[f + 6], 9, -1069501632), n, r, e[f + 11], 14, 643717713), l, n, e[f + 0], 20, -373897302), u = i(u, l = i(l, n = i(n, r, u, l, e[f + 5], 5, -701558691), r, u, e[f + 10], 9, 38016083), n, r, e[f + 15], 14, -660478335), l, n, e[f + 4], 20, -405537848), u = i(u, l = i(l, n = i(n, r, u, l, e[f + 9], 5, 568446438), r, u, e[f + 14], 9, -1019803690), n, r, e[f + 3], 14, -187363961), l, n, e[f + 8], 20, 1163531501), u = i(u, l = i(l, n = i(n, r, u, l, e[f + 13], 5, -1444681467), r, u, e[f + 2], 9, -51403784), n, r, e[f + 7], 14, 1735328473), l, n, e[f + 12], 20, -1926607734), u = a(u, l = a(l, n = a(n, r, u, l, e[f + 5], 4, -378558), r, u, e[f + 8], 11, -2022574463), n, r, e[f + 11], 16, 1839030562), l, n, e[f + 14], 23, -35309556), u = a(u, l = a(l, n = a(n, r, u, l, e[f + 1], 4, -1530992060), r, u, e[f + 4], 11, 1272893353), n, r, e[f + 7], 16, -155497632), l, n, e[f + 10], 23, -1094730640), u = a(u, l = a(l, n = a(n, r, u, l, e[f + 13], 4, 681279174), r, u, e[f + 0], 11, -358537222), n, r, e[f + 3], 16, -722521979), l, n, e[f + 6], 23, 76029189), u = a(u, l = a(l, n = a(n, r, u, l, e[f + 9], 4, -640364487), r, u, e[f + 12], 11, -421815835), n, r, e[f + 15], 16, 530742520), l, n, e[f + 2], 23, -995338651), u = c(u, l = c(l, n = c(n, r, u, l, e[f + 0], 6, -198630844), r, u, e[f + 7], 10, 1126891415), n, r, e[f + 14], 15, -1416354905), l, n, e[f + 5], 21, -57434055), u = c(u, l = c(l, n = c(n, r, u, l, e[f + 12], 6, 1700485571), r, u, e[f + 3], 10, -1894986606), n, r, e[f + 10], 15, -1051523), l, n, e[f + 1], 21, -2054922799), u = c(u, l = c(l, n = c(n, r, u, l, e[f + 8], 6, 1873313359), r, u, e[f + 15], 10, -30611744), n, r, e[f + 6], 15, -1560198380), l, n, e[f + 13], 21, 1309151649), u = c(u, l = c(l, n = c(n, r, u, l, e[f + 4], 6, -145523070), r, u, e[f + 11], 10, -1120210379), n, r, e[f + 2], 15, 718787259), l, n, e[f + 9], 21, -343485551), 
                n = s(n, p), r = s(r, d), u = s(u, h), l = s(l, v);
            }
            return [ n, r, u, l ];
        }
        function r(e, t, n, r, o, i) {
            return s(u(s(s(t, e), s(r, i)), o), n);
        }
        function o(e, t, n, o, i, a, c) {
            return r(t & n | ~t & o, e, t, i, a, c);
        }
        function i(e, t, n, o, i, a, c) {
            return r(t & o | n & ~o, e, t, i, a, c);
        }
        function a(e, t, n, o, i, a, c) {
            return r(t ^ n ^ o, e, t, i, a, c);
        }
        function c(e, t, n, o, i, a, c) {
            return r(n ^ (t | ~o), e, t, i, a, c);
        }
        function s(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
        }
        function u(e, t) {
            return e << t | e >>> 32 - t;
        }
        function l(e) {
            for (var t = [], n = (1 << d) - 1, r = 0; r < e.length * d; r += d) t[r >> 5] |= (e.charCodeAt(r / d) & n) << r % 32;
            return t;
        }
        function f(e) {
            for (var t = p ? "0123456789ABCDEF" : "0123456789abcdef", n = "", r = 0; r < 4 * e.length; r++) n += t.charAt(e[r >> 2] >> r % 4 * 8 + 4 & 15) + t.charAt(e[r >> 2] >> r % 4 * 8 & 15);
            return n;
        }
        var p = 0, d = 8;
        e.exports = {
            hex_md5: function(e) {
                return f(n(l(e), e.length * d));
            }
        };
    },
    "78f2": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = r(n("66fd")), i = r(n("eb8e")), a = n("6ddb"), c = {
            namespaced: !0,
            state: {
                isShow: !1,
                text: "",
                iconName: "",
                iconColor: "",
                style: {}
            },
            mutations: {
                show: function(e, t) {
                    e.text = t.text, e.iconName = t.iconName, e.style = t.style, e.isShow = !0, e.iconColor = t.iconColor;
                },
                hide: function(e) {
                    e.isShow = !1;
                }
            },
            actions: {
                show: function(e, t) {
                    !o.default.prototype.$store.state.globalData.isCrash && i.default.isApp && (0, a.versionCompare)(i.default.appVersion, i.default.carrotAppVersion) >= 0 ? o.default.prototype.$bridge.toastMsg({
                        msg: t.text,
                        time: t.delay
                    }) : (e.commit("show", t), setTimeout(function() {
                        e.commit("hide");
                    }, t.delay || 1e3));
                }
            }
        };
        t.default = c;
    },
    "7a77": function(e, t, n) {
        function r(e) {
            this.message = e;
        }
        r.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "");
        }, r.prototype.__CANCEL__ = !0, e.exports = r;
    },
    "7aac": function(e, t, n) {
        var r = n("c532");
        e.exports = r.isStandardBrowserEnv() ? {
            write: function(e, t, n, o, i, a) {
                var c = [];
                c.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && c.push("expires=" + new Date(n).toGMTString()), 
                r.isString(o) && c.push("path=" + o), r.isString(i) && c.push("domain=" + i), !0 === a && c.push("secure"), 
                document.cookie = c.join("; ");
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5);
            }
        } : {
            write: function() {},
            read: function() {
                return null;
            },
            remove: function() {}
        };
    },
    "7e40": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.apiApplyInvoice = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "invoice-api-service/open/api/apply", t = arguments.length > 1 ? arguments[1] : void 0;
            return r.gateWayHttp.post(e, t, o);
        }, t.apiSendEmail = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "invoice-api-service/open/api/send-mail", t = arguments.length > 1 ? arguments[1] : void 0;
            return r.gateWayHttp.post(e, t, o);
        }, t.apiTryOpen = function(e) {
            return r.gateWayHttp.get("invoice-api-service/open/api/try-open", e, o);
        };
        var r = n("5ee7"), o = {
            headers: {
                "Content-Type": "application/json"
            }
        };
    },
    "7f9b": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function i(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, i) {
                    function a(e) {
                        o(s, r, i, a, c, "next", e);
                    }
                    function c(e) {
                        o(s, r, i, a, c, "throw", e);
                    }
                    var s = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach(function(t) {
                    s(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.userAddressMethods = t.userAddress = void 0;
        var u, l = r(n("a34a")), f = r(n("66fd")), p = n("cd5a"), d = r(n("67c5")), h = n("f14d"), v = !1, _ = f.default.extend({
            computed: {
                isLogin: function() {
                    return this.$store.state.user.isLogin;
                },
                addressTipContinue: {
                    get: function() {
                        return this.$store.state.globalData.addressTipContinue;
                    },
                    set: function(e) {
                        this.$store.commit("globalData/update", {
                            addressTipContinue: e
                        });
                    }
                }
            },
            methods: {
                asyncConfirm: function(e) {
                    var t = this;
                    return new Promise(function(n, r) {
                        t.$confirm(c(c({}, e), {}, {
                            success: function() {
                                n("");
                            },
                            cancel: function() {
                                r();
                            }
                        }));
                    });
                },
                userAddressTip: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        uid: "",
                        requestParams: {}
                    };
                    if (v) return Promise.resolve(!1);
                    v = !0;
                    var n = t || {}, r = n.uid, o = n.requestParams, i = this.$storage.load({
                        key: d.default.USER_ADDRESS_TIP
                    }) || {}, a = r || this.$store.state.user.userInfo.id;
                    if (!a) return v = !1, Promise.resolve(!0);
                    if (i[a]) {
                        var u = i[a] || {}, l = u.is_need_repeat, f = u.expire;
                        if (0 === l) return v = !1, Promise.resolve(!0);
                        if (1 === l && Date.now() < f) return v = !1, Promise.resolve(!0);
                    }
                    return (0, p.apiGetAddressSetTip)(o).then(function(t) {
                        var n = t.data;
                        if (!t.success) return Promise.reject();
                        if (!n) return Promise.reject();
                        var r = n.is_need_repeat, o = n.content1, u = n.content2, l = c(c({}, i), {}, s({}, a, {
                            is_need_repeat: r,
                            expire: Date.now() + 864e5
                        }));
                        return e.$storage.save({
                            key: d.default.USER_ADDRESS_TIP,
                            data: l
                        }), 1 !== r ? Promise.reject() : o && u ? (e.$track({
                            key: "homepage/newer_addrsetup_welfare_exposure",
                            eventType: "exposure"
                        }, e.trackDataComputed()), e.asyncConfirm({
                            noPadding: !0,
                            contentRichNodes: [ {
                                name: "div",
                                attrs: {
                                    style: "width: 100%;"
                                },
                                children: [ {
                                    name: "img",
                                    attrs: {
                                        src: "https://img.ddimg.mobi/8c33a38bfe01a1619335782268.png",
                                        style: "display:block;width:100%;height:200px;"
                                    }
                                }, {
                                    name: "div",
                                    attrs: {
                                        style: "padding-top:20px;font-size:16px;color:#333333;font-weight:bold;"
                                    },
                                    children: [ {
                                        type: "text",
                                        text: o
                                    } ]
                                }, {
                                    name: "div",
                                    attrs: {
                                        style: "padding:9px 0 20px 0; font-size:14px; color: #333333;"
                                    },
                                    children: [ {
                                        type: "text",
                                        text: u
                                    } ]
                                } ]
                            } ],
                            contentAlign: "center",
                            cancelText: "知道了",
                            submitText: "去设置"
                        })) : Promise.reject();
                    }).then(function() {
                        return e.$track({
                            key: "homepage/newer_addrsetup_welfare",
                            eventType: "click"
                        }, e.trackDataComputed()), e.$open({
                            type: 3,
                            url: h.PATH.PAGE_ADDRESS_LOCAL
                        }), Promise.resolve(!1);
                    }).catch(function() {
                        return e.$track({
                            key: "homepage/newer_addrsetup_welfare_know",
                            eventType: "click"
                        }, e.trackDataComputed()), Promise.resolve(!0);
                    }).finally(function() {
                        v = !1;
                    });
                }
            }
        });
        t.userAddressMethods = _;
        var g = f.default.extend({
            mixins: [ _ ],
            data: function() {
                return {
                    mixinRequestParams: {}
                };
            },
            onShow: function() {
                var e = this;
                this.addressTipContinue = !1, u = this.$watch(function() {
                    return e.isLogin;
                }, function() {
                    var t = i(l.default.mark(function t(n) {
                        return l.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (null !== n) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                if (!n) {
                                    t.next = 9;
                                    break;
                                }
                                return t.next = 5, e.userAddressTip({
                                    requestParams: e.mixinRequestParams
                                });

                              case 5:
                                e.addressTipContinue = t.sent, u(), t.next = 10;
                                break;

                              case 9:
                                e.addressTipContinue = !0;

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(), {
                    immediate: !0
                });
            },
            onHide: function() {
                u && u(), u = null;
            }
        });
        t.userAddress = g;
    },
    8237: function _(module, exports, __webpack_require__) {
        (function(process, global) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            !function() {
                function Md5(e) {
                    if (e) blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, 
                    this.blocks = blocks, this.buffer8 = buffer8; else if (ARRAY_BUFFER) {
                        var t = new ArrayBuffer(68);
                        this.buffer8 = new Uint8Array(t), this.blocks = new Uint32Array(t);
                    } else this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
                    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, 
                    this.finalized = this.hashed = !1, this.first = !0;
                }
                var ERROR = "input is invalid type", WINDOW = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)), root = WINDOW ? window : {};
                root.JS_MD5_NO_WINDOW && (WINDOW = !1);
                var WEB_WORKER = !WINDOW && "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)), NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" === (void 0 === process ? "undefined" : _typeof(process)) && process.versions && process.versions.node;
                NODE_JS ? root = global : WEB_WORKER && (root = self);
                var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" === (void 0 === module ? "undefined" : _typeof(module)) && module.exports, AMD = __webpack_require__("3c35"), ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [ 128, 32768, 8388608, -2147483648 ], SHIFT = [ 0, 8, 16, 24 ], OUTPUT_TYPES = [ "hex", "array", "digest", "buffer", "arrayBuffer", "base64" ], BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), blocks = [], buffer8;
                if (ARRAY_BUFFER) {
                    var buffer = new ArrayBuffer(68);
                    buffer8 = new Uint8Array(buffer), blocks = new Uint32Array(buffer);
                }
                !root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                }), !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                    return "object" === (void 0 === e ? "undefined" : _typeof(e)) && e.buffer && e.buffer.constructor === ArrayBuffer;
                });
                var createOutputMethod = function(e) {
                    return function(t) {
                        return new Md5(!0).update(t)[e]();
                    };
                }, createMethod = function() {
                    var e = createOutputMethod("hex");
                    NODE_JS && (e = nodeWrap(e)), e.create = function() {
                        return new Md5();
                    }, e.update = function(t) {
                        return e.create().update(t);
                    };
                    for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
                        var n = OUTPUT_TYPES[t];
                        e[n] = createOutputMethod(n);
                    }
                    return e;
                }, nodeWrap = function nodeWrap(method) {
                    var crypto = eval("require('crypto')"), Buffer = eval("require('buffer').Buffer"), nodeMethod = function(e) {
                        if ("string" == typeof e) return crypto.createHash("md5").update(e, "utf8").digest("hex");
                        if (null === e || void 0 === e) throw ERROR;
                        return e.constructor === ArrayBuffer && (e = new Uint8Array(e)), Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(e)).digest("hex") : method(e);
                    };
                    return nodeMethod;
                };
                Md5.prototype.update = function(e) {
                    if (!this.finalized) {
                        var t, n = void 0 === e ? "undefined" : _typeof(e);
                        if ("string" !== n) {
                            if ("object" !== n) throw ERROR;
                            if (null === e) throw ERROR;
                            if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e); else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e))) throw ERROR;
                            t = !0;
                        }
                        for (var r, o, i = 0, a = e.length, c = this.blocks, s = this.buffer8; i < a; ) {
                            if (this.hashed && (this.hashed = !1, c[0] = c[16], c[16] = c[1] = c[2] = c[3] = c[4] = c[5] = c[6] = c[7] = c[8] = c[9] = c[10] = c[11] = c[12] = c[13] = c[14] = c[15] = 0), 
                            t) if (ARRAY_BUFFER) for (o = this.start; i < a && o < 64; ++i) s[o++] = e[i]; else for (o = this.start; i < a && o < 64; ++i) c[o >> 2] |= e[i] << SHIFT[3 & o++]; else if (ARRAY_BUFFER) for (o = this.start; i < a && o < 64; ++i) (r = e.charCodeAt(i)) < 128 ? s[o++] = r : r < 2048 ? (s[o++] = 192 | r >> 6, 
                            s[o++] = 128 | 63 & r) : r < 55296 || r >= 57344 ? (s[o++] = 224 | r >> 12, s[o++] = 128 | r >> 6 & 63, 
                            s[o++] = 128 | 63 & r) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++i)), 
                            s[o++] = 240 | r >> 18, s[o++] = 128 | r >> 12 & 63, s[o++] = 128 | r >> 6 & 63, 
                            s[o++] = 128 | 63 & r); else for (o = this.start; i < a && o < 64; ++i) (r = e.charCodeAt(i)) < 128 ? c[o >> 2] |= r << SHIFT[3 & o++] : r < 2048 ? (c[o >> 2] |= (192 | r >> 6) << SHIFT[3 & o++], 
                            c[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]) : r < 55296 || r >= 57344 ? (c[o >> 2] |= (224 | r >> 12) << SHIFT[3 & o++], 
                            c[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & o++], c[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++i)), 
                            c[o >> 2] |= (240 | r >> 18) << SHIFT[3 & o++], c[o >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & o++], 
                            c[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & o++], c[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]);
                            this.lastByteIndex = o, this.bytes += o - this.start, o >= 64 ? (this.start = o - 64, 
                            this.hash(), this.hashed = !0) : this.start = o;
                        }
                        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, 
                        this.bytes = this.bytes % 4294967296), this;
                    }
                }, Md5.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var e = this.blocks, t = this.lastByteIndex;
                        e[t >> 2] |= EXTRA[3 & t], t >= 56 && (this.hashed || this.hash(), e[0] = e[16], 
                        e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), 
                        e[14] = this.bytes << 3, e[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
                    }
                }, Md5.prototype.hash = function() {
                    var e, t, n, r, o, i, a = this.blocks;
                    this.first ? (e = a[0] - 680876937, e = (e << 7 | e >>> 25) - 271733879 << 0, r = (-1732584194 ^ 2004318071 & e) + a[1] - 117830708, 
                    r = (r << 12 | r >>> 20) + e << 0, n = (-271733879 ^ r & (-271733879 ^ e)) + a[2] - 1126478375, 
                    n = (n << 17 | n >>> 15) + r << 0, t = (e ^ n & (r ^ e)) + a[3] - 1316259209, t = (t << 22 | t >>> 10) + n << 0) : (e = this.h0, 
                    t = this.h1, n = this.h2, r = this.h3, e += (r ^ t & (n ^ r)) + a[0] - 680876936, 
                    e = (e << 7 | e >>> 25) + t << 0, r += (n ^ e & (t ^ n)) + a[1] - 389564586, r = (r << 12 | r >>> 20) + e << 0, 
                    n += (t ^ r & (e ^ t)) + a[2] + 606105819, n = (n << 17 | n >>> 15) + r << 0, t += (e ^ n & (r ^ e)) + a[3] - 1044525330, 
                    t = (t << 22 | t >>> 10) + n << 0), t = ((t += ((e = ((e += (r ^ t & (n ^ r)) + a[4] - 176418897) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (r = ((r += (n ^ e & (t ^ n)) + a[5] + 1200080426) << 12 | r >>> 20) + e << 0) & (e ^ t)) + a[6] - 1473231341) << 17 | n >>> 15) + r << 0) & (r ^ e)) + a[7] - 45705983) << 22 | t >>> 10) + n << 0, 
                    t = ((t += ((e = ((e += (r ^ t & (n ^ r)) + a[8] + 1770035416) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (r = ((r += (n ^ e & (t ^ n)) + a[9] - 1958414417) << 12 | r >>> 20) + e << 0) & (e ^ t)) + a[10] - 42063) << 17 | n >>> 15) + r << 0) & (r ^ e)) + a[11] - 1990404162) << 22 | t >>> 10) + n << 0, 
                    t = ((t += ((e = ((e += (r ^ t & (n ^ r)) + a[12] + 1804603682) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (r = ((r += (n ^ e & (t ^ n)) + a[13] - 40341101) << 12 | r >>> 20) + e << 0) & (e ^ t)) + a[14] - 1502002290) << 17 | n >>> 15) + r << 0) & (r ^ e)) + a[15] + 1236535329) << 22 | t >>> 10) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ n & ((e = ((e += (n ^ r & (t ^ n)) + a[1] - 165796510) << 5 | e >>> 27) + t << 0) ^ t)) + a[6] - 1069501632) << 9 | r >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (r ^ e)) + a[11] + 643717713) << 14 | n >>> 18) + r << 0) ^ r)) + a[0] - 373897302) << 20 | t >>> 12) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ n & ((e = ((e += (n ^ r & (t ^ n)) + a[5] - 701558691) << 5 | e >>> 27) + t << 0) ^ t)) + a[10] + 38016083) << 9 | r >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (r ^ e)) + a[15] - 660478335) << 14 | n >>> 18) + r << 0) ^ r)) + a[4] - 405537848) << 20 | t >>> 12) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ n & ((e = ((e += (n ^ r & (t ^ n)) + a[9] + 568446438) << 5 | e >>> 27) + t << 0) ^ t)) + a[14] - 1019803690) << 9 | r >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (r ^ e)) + a[3] - 187363961) << 14 | n >>> 18) + r << 0) ^ r)) + a[8] + 1163531501) << 20 | t >>> 12) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ n & ((e = ((e += (n ^ r & (t ^ n)) + a[13] - 1444681467) << 5 | e >>> 27) + t << 0) ^ t)) + a[2] - 51403784) << 9 | r >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (r ^ e)) + a[7] + 1735328473) << 14 | n >>> 18) + r << 0) ^ r)) + a[12] - 1926607734) << 20 | t >>> 12) + n << 0, 
                    t = ((t += ((i = (r = ((r += ((o = t ^ n) ^ (e = ((e += (o ^ r) + a[5] - 378558) << 4 | e >>> 28) + t << 0)) + a[8] - 2022574463) << 11 | r >>> 21) + e << 0) ^ e) ^ (n = ((n += (i ^ t) + a[11] + 1839030562) << 16 | n >>> 16) + r << 0)) + a[14] - 35309556) << 23 | t >>> 9) + n << 0, 
                    t = ((t += ((i = (r = ((r += ((o = t ^ n) ^ (e = ((e += (o ^ r) + a[1] - 1530992060) << 4 | e >>> 28) + t << 0)) + a[4] + 1272893353) << 11 | r >>> 21) + e << 0) ^ e) ^ (n = ((n += (i ^ t) + a[7] - 155497632) << 16 | n >>> 16) + r << 0)) + a[10] - 1094730640) << 23 | t >>> 9) + n << 0, 
                    t = ((t += ((i = (r = ((r += ((o = t ^ n) ^ (e = ((e += (o ^ r) + a[13] + 681279174) << 4 | e >>> 28) + t << 0)) + a[0] - 358537222) << 11 | r >>> 21) + e << 0) ^ e) ^ (n = ((n += (i ^ t) + a[3] - 722521979) << 16 | n >>> 16) + r << 0)) + a[6] + 76029189) << 23 | t >>> 9) + n << 0, 
                    t = ((t += ((i = (r = ((r += ((o = t ^ n) ^ (e = ((e += (o ^ r) + a[9] - 640364487) << 4 | e >>> 28) + t << 0)) + a[12] - 421815835) << 11 | r >>> 21) + e << 0) ^ e) ^ (n = ((n += (i ^ t) + a[15] + 530742520) << 16 | n >>> 16) + r << 0)) + a[2] - 995338651) << 23 | t >>> 9) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ ((e = ((e += (n ^ (t | ~r)) + a[0] - 198630844) << 6 | e >>> 26) + t << 0) | ~n)) + a[7] + 1126891415) << 10 | r >>> 22) + e << 0) ^ ((n = ((n += (e ^ (r | ~t)) + a[14] - 1416354905) << 15 | n >>> 17) + r << 0) | ~e)) + a[5] - 57434055) << 21 | t >>> 11) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ ((e = ((e += (n ^ (t | ~r)) + a[12] + 1700485571) << 6 | e >>> 26) + t << 0) | ~n)) + a[3] - 1894986606) << 10 | r >>> 22) + e << 0) ^ ((n = ((n += (e ^ (r | ~t)) + a[10] - 1051523) << 15 | n >>> 17) + r << 0) | ~e)) + a[1] - 2054922799) << 21 | t >>> 11) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ ((e = ((e += (n ^ (t | ~r)) + a[8] + 1873313359) << 6 | e >>> 26) + t << 0) | ~n)) + a[15] - 30611744) << 10 | r >>> 22) + e << 0) ^ ((n = ((n += (e ^ (r | ~t)) + a[6] - 1560198380) << 15 | n >>> 17) + r << 0) | ~e)) + a[13] + 1309151649) << 21 | t >>> 11) + n << 0, 
                    t = ((t += ((r = ((r += (t ^ ((e = ((e += (n ^ (t | ~r)) + a[4] - 145523070) << 6 | e >>> 26) + t << 0) | ~n)) + a[11] - 1120210379) << 10 | r >>> 22) + e << 0) ^ ((n = ((n += (e ^ (r | ~t)) + a[2] + 718787259) << 15 | n >>> 17) + r << 0) | ~e)) + a[9] - 343485551) << 21 | t >>> 11) + n << 0, 
                    this.first ? (this.h0 = e + 1732584193 << 0, this.h1 = t - 271733879 << 0, this.h2 = n - 1732584194 << 0, 
                    this.h3 = r + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + e << 0, this.h1 = this.h1 + t << 0, 
                    this.h2 = this.h2 + n << 0, this.h3 = this.h3 + r << 0);
                }, Md5.prototype.hex = function() {
                    this.finalize();
                    var e = this.h0, t = this.h1, n = this.h2, r = this.h3;
                    return HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15];
                }, Md5.prototype.toString = Md5.prototype.hex, Md5.prototype.digest = function() {
                    this.finalize();
                    var e = this.h0, t = this.h1, n = this.h2, r = this.h3;
                    return [ 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255 ];
                }, Md5.prototype.array = Md5.prototype.digest, Md5.prototype.arrayBuffer = function() {
                    this.finalize();
                    var e = new ArrayBuffer(16), t = new Uint32Array(e);
                    return t[0] = this.h0, t[1] = this.h1, t[2] = this.h2, t[3] = this.h3, e;
                }, Md5.prototype.buffer = Md5.prototype.arrayBuffer, Md5.prototype.base64 = function() {
                    for (var e, t, n, r = "", o = this.array(), i = 0; i < 15; ) e = o[i++], t = o[i++], 
                    n = o[i++], r += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[63 & (e << 4 | t >>> 4)] + BASE64_ENCODE_CHAR[63 & (t << 2 | n >>> 6)] + BASE64_ENCODE_CHAR[63 & n];
                    return e = o[i], r += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[e << 4 & 63] + "==";
                };
                var exports = createMethod();
                COMMON_JS ? module.exports = exports : (root.md5 = exports, AMD && (void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return exports;
                }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
            }();
        }).call(this, __webpack_require__("4362"), __webpack_require__("c8ba"));
    },
    8288: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isDev = t.AD_ID = void 0;
        var r = {
            mine: 5009,
            productDetail: 5003,
            productDetailFromShare: 5100,
            coupon: 5004,
            commentGood: 2004
        };
        t.AD_ID = r;
        var o = !1, i = o = Object({
            NODE_ENV: "production",
            VUE_APP_PLATFORM: "mp-weixin",
            BASE_URL: "/"
        }).BUILD_DEV || !1;
        t.isDev = i;
    },
    "83b9": function(e, t, n) {
        var r = n("d925"), o = n("e683");
        e.exports = function(e, t) {
            return e && !r(t) ? o(e, t) : t;
        };
    },
    "84f1": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.THEME_TYPE = t.TAGS_PRE_ICON = t.TAGS_PRE_NAME = t.MARKETIG_TAGS_PRE_NAME = t.TAG_STYLE_TYPE = void 0;
        var r = {
            style_image: [ "IMAGE", "tag-name-green" ],
            style_image_auto: [ "IMAGE_AUTO", "tag-name-green" ],
            style_tag_nb_g: [ "TAG", "tag-name-green" ],
            style_tag_nb_r: [ "TAG", "tag-name-red" ],
            style_tag_nb_p: [ "TAG", "tag-name-pink" ],
            style_prd_star: [ "TAG", "tag-name-light-green" ],
            style_tag_bd_g: [ "TAG", "tag-spec-green" ],
            style_tag_bd_b: [ "TAG", "tag-spec-blue" ],
            style_tag_bd_r: [ "TAG", "tag-spec-red" ],
            style_tag_bd_y: [ "TAG", "tag-spec-orange" ],
            style_tag_bd_hy: [ "TAG", "tag-spec-less-orange" ],
            style_tag_hd_economize: [ "HTAG", "tag-spec-red" ],
            style_tag_hd_discount: [ "HTAG", "tag-spec-red" ],
            style_tag_hd_reduce: [ "HTAG", "tag-spec-red" ],
            style_tag_hd_barter: [ "HTAG", "tag-spec-red" ],
            style_tag_hd_coupon: [ "HTAG", "tag-spec-red" ],
            style_tag_hd_gifts: [ "HTAG", "tag-spec-red" ],
            style_text_g: [ "TEXT", "#20b255" ],
            style_text_recommend_gray: [ "RECOMMEND", "#A4A4A4" ],
            style_text_recommend_g: [ "RECOMMEND", "#2FB157" ],
            style_text_desc_gray: [ "DESC", "#A4A4A4" ],
            style_text_gd: [ "TEXT", "#C08D34" ],
            style_text_rank_gd: [ "TAG_RANK", "text-gold" ],
            style_tag_hd_rank_gd: [ "NEW_TAG_RANK", "text-gold" ],
            style_tag_vip_promo: [ "TAG", "tag-spec-gold" ]
        };
        t.TAG_STYLE_TYPE = r;
        var o = {
            114: "省",
            115: "折",
            116: "减",
            118: "赠",
            119: "赠",
            120: "返",
            121: "换",
            125: "折",
            126: "减"
        };
        t.MARKETIG_TAGS_PRE_NAME = o;
        var i = {
            style_tag_hd_economize: "省",
            style_tag_hd_discount: "折",
            style_tag_hd_reduce: "减",
            style_tag_hd_barter: "换",
            style_tag_hd_coupon: "返",
            style_tag_hd_gifts: "赠"
        };
        t.TAGS_PRE_NAME = i;
        var a = {
            style_tag_vip_promo: "style-tag-vip-promo"
        };
        t.TAGS_PRE_ICON = a;
        var c = {
            1: "card_horizontal_1_1",
            2: "card_vertical_1_2",
            3: "card_vertical_1_3",
            4: "card_vertical_1_4"
        };
        t.THEME_TYPE = c;
    },
    8529: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            payResult: {
                currentOrderNumber: "",
                isSuccess: !1,
                reason: ""
            },
            groupShakeFlag: !1,
            orderData: null,
            point: {
                len: -1,
                sign: -1,
                et: -1,
                poi: -1
            }
        }, o = {
            namespaced: !0,
            state: r,
            mutations: {
                setPayResult: function(e, t) {
                    e.payResult = t || r.payResult;
                },
                setGroupShakeFlag: function(e, t) {
                    e.groupShakeFlag = t;
                },
                setOrderData: function(e, t) {
                    e.orderData = t.orderData;
                },
                setPoint: function(e, t) {
                    e.point = t.point;
                }
            }
        };
        t.default = o;
    },
    8548: function(e, t, n) {
        function r() {
            var e = new Map(), t = new Set(), n = function(t) {
                for (var n = 0; n < t.length; n++) if (!e.has(t[n])) return !1;
                return !0;
            };
            return {
                wait: function() {
                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                    return new Promise(function(r) {
                        var o = !1, i = function i() {
                            if (n(e)) {
                                if (o) throw new Error("Called More Than One Times!");
                                o = !0, t.delete(i), r();
                            }
                        };
                        i(), o || t.add(i);
                    });
                },
                set: function(n, r) {
                    return e.set(n, r) && t.forEach(i);
                },
                get: function(t) {
                    return e.get(t);
                },
                del: function(t) {
                    return e.delete(t);
                },
                has: function(t) {
                    return e.has(t);
                },
                keys: function() {
                    return Array.from(e.keys());
                },
                values: function() {
                    return Array.from(e.values());
                },
                all: function() {
                    return Array.from(e);
                },
                clear: function() {
                    return e.clear();
                },
                size: function() {
                    return e.size;
                },
                clearDeps: function() {
                    return t.clear();
                }
            };
        }
        function o(e) {
            if (a.has(e)) return a.get(e);
            var t = r();
            return t.namespace = e, a.set(e, t), t;
        }
        n.r(t), n.d(t, "all", function() {
            return v;
        }), n.d(t, "clear", function() {
            return _;
        }), n.d(t, "clearDeps", function() {
            return m;
        }), n.d(t, "del", function() {
            return f;
        }), n.d(t, "get", function() {
            return u;
        }), n.d(t, "has", function() {
            return p;
        }), n.d(t, "keys", function() {
            return d;
        }), n.d(t, "namespace", function() {
            return o;
        }), n.d(t, "set", function() {
            return s;
        }), n.d(t, "size", function() {
            return g;
        }), n.d(t, "values", function() {
            return h;
        }), n.d(t, "wait", function() {
            return l;
        });
        var i = function(e) {
            return e();
        }, a = new Map(), c = o(Symbol("async-store")), s = c.set, u = c.get, l = c.wait, f = c.del, p = c.has, d = c.keys, h = c.values, v = c.all, _ = c.clear, g = c.size, m = c.clearDeps;
    },
    8576: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.WEB_URL = void 0;
        var r = {
            LOGIN_SERVICE_DEAL: "https://maicai.api.ddxq.mobi/info/single?alias=services_protocols",
            LOGIN_PRIVATE_POLICE: "https://maicai.api.ddxq.mobi/info/single?alias=privacy_policy",
            CARD_RULES: "https://maicai.api.ddxq.mobi/info/single?alias=card_collection",
            FOLD_PRODUCT_EVALUATION: "https://maicai.api.ddxq.mobi/info/single?alias=FoldProductEvaluation"
        };
        t.WEB_URL = r;
    },
    8607: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sleep = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
            return new Promise(function(n) {
                setTimeout(function() {
                    n(t);
                }, e);
            });
        }, t.formatTime = void 0;
        t.formatTime = function(e, t) {
            var n = {
                "M+": e.getMonth() + 1,
                "d+": e.getDate(),
                "h+": e.getHours(),
                "m+": e.getMinutes(),
                "s+": e.getSeconds(),
                "q+": Math.floor((e.getMonth() + 3) / 3),
                S: e.getMilliseconds()
            };
            return /(y+)/.test(t) && (t = t.replace(RegExp.$1, "".concat(e.getFullYear()).substr(4 - RegExp.$1.length))), 
            Object.keys(n).forEach(function(e) {
                var r = n[e].toString();
                new RegExp("(".concat(e, ")")).test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? r : "00".concat(r).substr("".concat(r).length)));
            }), t;
        };
    },
    "88b6": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            namespaced: !0,
            state: {
                reload: !1,
                gameReload: !1
            },
            mutations: {
                reload: function(e, t) {
                    e.reload = t;
                },
                gameReload: function(e, t) {
                    e.gameReload = t;
                }
            },
            actions: {}
        };
        t.default = r;
    },
    "8b8e": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function i(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, i) {
                    function a(e) {
                        o(s, r, i, a, c, "next", e);
                    }
                    function c(e) {
                        o(s, r, i, a, c, "throw", e);
                    }
                    var s = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = r(n("a34a")), c = r(n("66fd")), s = n("655d"), u = {
            setSizeAlertInfo: function(e, t) {
                return i(a.default.mark(function n() {
                    var r, o, i, u, l, f, p, d, h, v, _, g, m, y, E, A, b, P, O, T, S, R, C, w, k, I, D, x, L, N, j, G, H, M, U, $, V, F;
                    return a.default.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            if (r = e.commit, o = e.dispatch, r("dimensionAlert/setDefeaultDimensionData", {}, {
                                root: !0
                            }), i = t.product, u = void 0 === i ? null : i, l = t.showSizeAlert, f = void 0 !== l && l, 
                            p = t.isGift, d = void 0 !== p && p, h = t.intercept, v = void 0 !== h && h, _ = t.control, 
                            g = void 0 !== _ && _, m = t.cb, y = t.activity_id, E = void 0 === y ? "" : y, A = t.vip_activity_id, 
                            b = void 0 === A ? "" : A, P = t.conditions_num, O = void 0 === P ? "" : P, T = t.add_scene, 
                            S = void 0 === T ? s.SCENES.DEFAULT : T, R = t.exChange_mask, C = void 0 === R ? 0 : R, 
                            w = t.isOrderBarter, k = void 0 !== w && w, I = t.sizeType, D = void 0 === I ? 1 : I, 
                            x = t.addType, f) {
                                n.next = 7;
                                break;
                            }
                            return r("setSizeAlertInfo", {
                                showSizeAlert: f
                            }), n.abrupt("return");

                          case 7:
                            if (L = u || {}, N = L.scene_id, 1 !== (j = void 0 === N ? -1 : N)) {
                                n.next = 11;
                                break;
                            }
                            return o("toast/show", {
                                text: "抱歉！不能再添加了",
                                delay: 1500
                            }, {
                                root: !0
                            }), n.abrupt("return");

                          case 11:
                            if ("number" == typeof x) {
                                n.next = 16;
                                break;
                            }
                            return n.next = 14, c.default.prototype.$getProductAddType(u, !1);

                          case 14:
                            G = n.sent, x = G.addType;

                          case 16:
                            if (2 !== x) {
                                n.next = 19;
                                break;
                            }
                            return o("batchAlert/showBatchAlert", t, {
                                root: !0
                            }), n.abrupt("return");

                          case 19:
                            if (3 !== x) {
                                n.next = 24;
                                break;
                            }
                            return H = u.supplementary_list, M = void 0 === H ? [] : H, U = u.aggregation_id, 
                            o("dimensionAlert/setDimensionAlertInfo", t, {
                                root: !0
                            }), U ? o("dimensionAlert/getDimensions", u, {
                                root: !0
                            }) : M && M.length && o("dimensionAlert/setDimensionOneProductAlertShow", {
                                isShow: !0
                            }, {
                                root: !0
                            }), n.abrupt("return");

                          case 24:
                            u && ($ = u.sizes, V = u.sub_list, F = [], $ && $.length ? $.forEach(function() {
                                F.push(-1);
                            }) : V.forEach(function(e) {
                                F.push(e.sizes && e.sizes.length ? -1 : null);
                            }), u.selectSizesNum = F, u.selectNum = 1, u.activity_id && Number(u.buy_limit) > 0 && Number(u.buy_limit) < u.stock_number ? u.limitAdd = {
                                limitNum: Number(u.buy_limit),
                                toastMsg: "该商品最多限购".concat(Number(u.buy_limit), "件")
                            } : u.limitAdd = {
                                limitNum: u.stock_number,
                                toastMsg: "该商品被你买光了"
                            }), r("setSizeAlertInfo", {
                                product: f && u || null,
                                showSizeAlert: f,
                                isGift: d,
                                activity_id: E,
                                vip_activity_id: b,
                                add_scene: S,
                                conditions_num: O,
                                exChange_mask: C,
                                intercept: v,
                                control: g,
                                cb: m,
                                isOrderBarter: k,
                                sizeType: D
                            });

                          case 26:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }))();
            }
        }, l = {
            namespaced: !0,
            state: {
                product: null,
                showSizeAlert: !1,
                isGift: !1,
                intercept: !1,
                activity_id: "",
                vip_activity_id: "",
                sizeType: 1,
                isOrderBarter: !1,
                conditions_num: "",
                cb: function() {
                    return null;
                },
                add_scene: s.SCENES.DEFAULT,
                exChange_mask: 0
            },
            mutations: {
                setSizeAlertInfo: function(e, t) {
                    Object.keys(t).forEach(function(n) {
                        e[n] = t[n] || void 0;
                    });
                }
            },
            actions: u
        };
        t.default = l;
    },
    "8df4": function(e, t, n) {
        function r(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function(e) {
                t = e;
            });
            var n = this;
            e(function(e) {
                n.reason || (n.reason = new o(e), t(n.reason));
            });
        }
        var o = n("7a77");
        r.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason;
        }, r.source = function() {
            var e;
            return {
                token: new r(function(t) {
                    e = t;
                }),
                cancel: e
            };
        }, e.exports = r;
    },
    "91be": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function i(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, i) {
                    function a(e) {
                        o(s, r, i, a, c, "next", e);
                    }
                    function c(e) {
                        o(s, r, i, a, c, "throw", e);
                    }
                    var s = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach(function(t) {
                    s(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = r(n("a34a")), l = r(n("66fd")), f = n("c0f2"), p = {
            namespaced: !0,
            state: {
                showDimensionAlert: !1,
                dimensionData: {
                    aggregationType: -1,
                    dimensions: [],
                    products: [],
                    defaultSkuId: ""
                },
                configInfo: {}
            },
            mutations: {
                setDimensionAlertShow: function(e, t) {
                    e.showDimensionAlert = t;
                },
                setDimensionProductInfo: function(e, t) {
                    e.dimensionData = t;
                },
                setDefeaultDimensionData: function(e) {
                    e.dimensionData = {
                        aggregationType: -1,
                        dimensions: [],
                        products: [],
                        defaultSkuId: ""
                    };
                },
                setAlertInfo: function(e, t) {
                    e.configInfo = t;
                }
            },
            actions: {
                setDimensionOneProductAlertShow: function(e, t) {
                    (0, e.commit)("setDimensionAlertShow", t.isShow);
                },
                setDimensionAlertInfo: function(e, t) {
                    (0, e.commit)("setAlertInfo", t);
                },
                showDimensionAlert: function(e, t) {
                    var n = e.commit;
                    n("setDimensionProductInfo", t), n("setDimensionAlertShow", !0);
                },
                addProduct: function(e, t) {
                    e.commit;
                    var n = t.activity_id, r = t.conditions_num, o = n && r ? {
                        activity_id: n,
                        conditions_num: r
                    } : {};
                    l.default.prototype.$addCart(c(c({
                        showData: !0,
                        product: t
                    }, o), {}, {
                        isLoad: 1
                    }));
                },
                getDimensions: function(e, t) {
                    return i(u.default.mark(function n() {
                        var r, o, i, a, c, s, l, p, d, h, v, _, g, m, y, E, A, b, P, O, T, S, R, C, w, k;
                        return u.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return d = e.rootState, h = e.dispatch, n.next = 3, (0, f.apiGetSupPanelInfo)({
                                    aggregation_id: t.aggregation_id,
                                    productId: t.id
                                });

                              case 3:
                                if (v = n.sent, _ = v.data, v.success && (null === _ || void 0 === _ || null === (r = _.products) || void 0 === r ? void 0 : r.length)) {
                                    n.next = 9;
                                    break;
                                }
                                return h("addProduct", t), h("sizeAlert/setSizeAlertInfo", {
                                    showSizeAlert: !1
                                }, {
                                    root: !0
                                }), n.abrupt("return");

                              case 9:
                                return g = _.products, m = void 0 === g ? [] : g, y = _.sups, E = void 0 === y ? [] : y, 
                                n.next = 12, h("fuliao/factorFuliaoProducts", {
                                    products: m,
                                    sups: E
                                }, {
                                    root: !0
                                });

                              case 12:
                                if (A = n.sent, b = (null === A || void 0 === A ? void 0 : A.products) || [], P = t.id, 
                                O = null === b || void 0 === b ? void 0 : b.filter(function(e) {
                                    return e.productInfoVO.id === P;
                                }), _.stockout_reserved_new) {
                                    n.next = 20;
                                    break;
                                }
                                if (0 !== O.length) {
                                    n.next = 20;
                                    break;
                                }
                                return h("toast/show", {
                                    text: "该商品无货",
                                    delay: 2e3
                                }, {
                                    root: !0
                                }), n.abrupt("return");

                              case 20:
                                if ((T = (null === b || void 0 === b ? void 0 : b.filter(function(e) {
                                    var t;
                                    return (null === (t = e.productInfoVO) || void 0 === t ? void 0 : t.stock_number) > 0;
                                })) || []).length) {
                                    n.next = 24;
                                    break;
                                }
                                return _.stockout_reserved_new ? (t.stockoutForceAddCart = !0, h("addProduct", t)) : h("toast/show", {
                                    text: "该商品无货",
                                    delay: 2e3
                                }, {
                                    root: !0
                                }), n.abrupt("return");

                              case 24:
                                if (S = T[0].productInfoVO, R = (null === d || void 0 === d || null === (p = d.globalData) || void 0 === p ? void 0 : p.maicaiAppConfig) || {}, 
                                C = R.merge_product_config, C = void 0 === C ? {} : C, w = C.smallprogram_white_list, 
                                (k = void 0 === w ? [] : w).includes(d.globalData.currentRoute) || (_.aggregationType = -1, 
                                _.products = O), (1 !== T.length || S.id !== P || (null === (o = S.supplementary_list) || void 0 === o ? void 0 : o.length) || _.stockout_reserved_new) && (-1 !== _.aggregationType || (null === O || void 0 === O || null === (i = O[0]) || void 0 === i || null === (a = i.productInfoVO) || void 0 === a || null === (c = a.supplementary_list) || void 0 === c ? void 0 : c.length) && !((null === O || void 0 === O || null === (s = O[0]) || void 0 === s || null === (l = s.productInfoVO) || void 0 === l ? void 0 : l.stock_number) <= 0))) {
                                    n.next = 32;
                                    break;
                                }
                                return h("addProduct", t), n.abrupt("return");

                              case 32:
                                _.sups && _.sups.length && (_.defaultProduct = null === O || void 0 === O ? void 0 : O[0], 
                                h("fuliao/setFuliaoInfo", _, {
                                    root: !0
                                })), _.defaultSkuId = P, h("showDimensionAlert", _);

                              case 35:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                }
            }
        };
        t.default = p;
    },
    9410: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : _typeof(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
            })(e);
        }
        function i(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function a(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    function a(e) {
                        i(s, r, o, a, c, "next", e);
                    }
                    function c(e) {
                        i(s, r, o, a, c, "throw", e);
                    }
                    var s = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function u(e, t, n) {
            return t && s(e.prototype, t), n && s(e, n), e;
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t);
        }
        function f(e, t) {
            return (f = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function p(e) {
            var t = v();
            return function() {
                var n, r = _(e);
                if (t) {
                    var o = _(this).constructor;
                    n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return d(this, n);
            };
        }
        function d(e, t) {
            return !t || "object" !== o(t) && "function" != typeof t ? h(e) : t;
        }
        function h(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function v() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (e) {
                return !1;
            }
        }
        function _(e) {
            return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.TH5 = void 0;
        var g = r(n("a34a")), m = r(n("1030")), y = function(e) {
            function t(e) {
                return c(this, t), n.call(this, e);
            }
            l(t, m.default);
            var n = p(t);
            return u(t, [ {
                key: "setLocalData",
                value: function() {
                    var e = a(g.default.mark(function e(t) {
                        return g.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                localStorage.setItem(this.localKey, t);

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }()
            }, {
                key: "getLocalData",
                value: function() {
                    var e = a(g.default.mark(function e() {
                        return g.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.abrupt("return", localStorage.getItem(this.localKey));

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }()
            } ]), t;
        }();
        t.TH5 = y;
    },
    9559: function(e, t, n) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : _typeof(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
            })(e);
        }
        function o() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return o = function() {
                return e;
            }, e;
        }
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach(function(t) {
                    s(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function f(e, t, n) {
            return t && l(e.prototype, t), n && l(e, n), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LoggerController = void 0;
        var p = i(n("66fd")), d = n("d52e"), h = n("c001"), v = function(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== r(e) && "function" != typeof e) return {
                default: e
            };
            var t = o();
            if (t && t.has(e)) return t.get(e);
            var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                var c = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = e[a];
            }
            return n.default = e, t && t.set(e, n), n;
        }(n("c78f")), _ = (n("5ee7"), i(n("325d"))), g = i(n("0613")), m = i(n("b7c7")), y = i(n("67c5")), E = i(n("eb8e")), A = n("8288"), b = n("6495"), P = function() {
            function e() {
                u(this, e), this.cache = new Map(), this.enabled = !1, this.logger = new h.Logger({
                    isDev: A.isDev,
                    beforeUpload: this.beforeUpload
                }), this.trackController = new d.TUniapp({
                    log: this.logger.collect.bind(this.logger),
                    baseComponentName: "APP",
                    tabs: [ "homePage", "cartPage", "myVipPage", "categoryPage", "minePage" ],
                    isPro: !A.isDev,
                    os: "4",
                    appName: "ddmc",
                    appVersion: _.default.app_version,
                    isH5: E.default.isH5,
                    env: "".concat(v.env.getEnv()).concat("t" === v.env.getEnv() ? "" : "e")
                }), p.default.use(this.trackController);
            }
            return f(e, [ {
                key: "beforeUpload",
                value: function(e) {
                    if (g.default.state.globalData.isFake) return !1;
                    var t = _.default.app_client_id;
                    return E.default.isApp && (t = E.default.isIos ? 1 : 2), m.default.loadAsync({
                        key: y.default.LOCATION
                    }).then(function(n) {
                        var r, o, i, a = g.default.state.globalData, s = a.s_share_id, u = void 0 === s ? "" : s, l = a.s, f = void 0 === l ? "" : l, d = a.scene, h = void 0 === d ? "" : d, v = a.h5_source, m = void 0 === v ? "" : v, y = a.wx_source, A = void 0 === y ? "" : y, P = a.ali_source, O = void 0 === P ? "" : P, T = a.trace_id, S = void 0 === T ? "" : T, R = a.track_session_id, C = void 0 === R ? "" : R, w = a.pvId, k = n || {}, I = k.station_id, D = void 0 === I ? "" : I, x = k.village_id, L = void 0 === x ? "" : x, N = 0, j = 0;
                        (n || {}).location && (N = n.location.location[1], j = n.location.location[0]);
                        var G = g.default.state.user || {}, H = G.userInfo, M = void 0 === H ? {} : H, U = G.userAuthInfo, $ = M && M.is_vip ? 1 : 0, V = 1 === g.default.state.user.rcmnd_status, F = (0, 
                        b.getPageOrigin)(), B = e.act, K = e.referer, W = e.properties, Y = e.time, q = e.event_id, z = e.event_version, J = p.default.prototype.$store.state.globalData.sys || {}, X = {
                            model: J.model,
                            system: J.system,
                            version: J.version,
                            platform: J.platform,
                            benchmarkLevel: J.benchmarkLevel
                        };
                        return c(c({}, e.act ? {} : e), {}, {
                            act: B,
                            referer: K,
                            page_type: E.default.isApp ? 4 : "",
                            event_id: q,
                            event_version: z,
                            uid: M.id || "a1234567890".concat(U.openId),
                            latitude: N,
                            longitude: j,
                            session_id: C,
                            trace_id: S,
                            os: t,
                            channel: _.default.channel,
                            area_id: L,
                            time: Y,
                            is_vip: $,
                            rcmnd_status: V,
                            station_id: D,
                            pv_id: w,
                            is_fake: Number(!!g.default.state.globalData.isFakeStation),
                            app_id: "ddmc",
                            app_version: _.default.app_version,
                            api_version: _.default.api_version,
                            properties: c(c(c(c({}, X), W), F ? {
                                page_origin: F
                            } : {}), {}, {
                                open_id: (null === (r = p.default.prototype.$store.state) || void 0 === r || null === (o = r.user) || void 0 === o || null === (i = o.userAuthInfo) || void 0 === i ? void 0 : i.openId) || "",
                                s_share_id: u,
                                s: f || "",
                                h5_source: m,
                                wx_source: A,
                                ali_source: O,
                                from: h,
                                mobile_brand: "ios" === _.default.platform ? "Apple" : _.default.brand,
                                mobile_model: _.default.model,
                                applet_source: _.default.applet_source
                            })
                        });
                    });
                }
            }, {
                key: "collect",
                value: function(e, t) {}
            } ]), e;
        }();
        t.LoggerController = P;
    },
    "95fa": function(e, t, n) {
        n.r(t), function(e) {
            n.d(t, "h5Performance", function() {
                return i;
            }), n.d(t, "wxAppletPerformance", function() {
                return a;
            }), n.d(t, "memoryWarning", function() {
                return u;
            });
            var r = "//collect.ddxq.mobi/appinfo", o = "//collect.t.dingdongxiaoqu.com/appinfo", i = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.native, n = e.query, i = void 0 === n ? {} : n, a = e.timeEnd, u = void 0 === a ? {} : a, l = e.offlineAssets, f = void 0 === l ? [] : l, h = c(), v = h.OS, _ = h.OSVersion;
                if (window && window.performance) {
                    var g = location.hostname, m = location.href, y = g.includes("dingdongxiaoqu"), E = g.match(/.+(?=\.\S+\.)/g)[0].toUpperCase(), A = function(e) {
                        var t = e.method, n = void 0 === t ? "POST" : t, r = e.url, o = void 0 === r ? "" : r, i = e.params, a = void 0 === i ? {} : i;
                        o && fetch(o, {
                            method: n,
                            body: JSON.stringify(a),
                            headers: new Headers({
                                "Content-Type": "application/x-www-form-urlencoded"
                            }),
                            mode: "cors"
                        }).then(function(e) {
                            return e.json();
                        }).catch(function(e) {
                            return console.error("Push Error:", e);
                        });
                    }, b = function() {
                        var e = window.performance.timing, n = e.domainLookupEnd, a = e.domainLookupStart, c = e.connectEnd, l = e.connectStart, h = e.requestStart, g = e.responseEnd, b = e.domInteractive, P = e.domContentLoadedEventEnd, O = e.domComplete, T = e.navigationStart, S = s(u, T) || {};
                        if (!O) return !1;
                        var R = window.performance.memory || {}, C = R.totalJSHeapSize, w = void 0 === C ? 0 : C, k = R.usedJSHeapSize, I = void 0 === k ? 0 : k, D = (I / (w + I) * 100).toFixed(2) + "%";
                        Promise.all([ p(f), d(t) ]).then(function(e) {
                            var t = _slicedToArray(e, 2), s = t[0], u = void 0 === s ? {} : s, f = t[1], p = void 0 === f ? {} : f, d = p.BeginLoad, R = void 0 === d ? 0 : d, C = p.OnPageFinish, k = void 0 === C ? 0 : C, x = p.TimeTraceId, L = void 0 === x ? "" : x, N = p.DeviceId, j = void 0 === N ? "" : N, G = u.OfflineHits, H = void 0 === G ? 0 : G, M = u.ChunkHits, U = void 0 === M ? 0 : M, $ = Object.assign(i, S, {
                                KEY: "APPMONITOR-WEB",
                                UA: navigator.userAgent,
                                URL: m || "",
                                ClientType: "H5-" + E,
                                OS: v,
                                OSVersion: _,
                                TimeTraceId: L,
                                NavigationStart: T,
                                WebViewInit: L ? T - R : 0,
                                BeginLoad: R,
                                DeviceId: j,
                                OnPageFinish: k,
                                DnsResolve: n - a,
                                TcpConnect: c - l,
                                ResourceRequest: g - h,
                                DomBefore: g - T,
                                DomReady: P - T,
                                DomReadyTime: P,
                                DomParse: O - b,
                                FirstPage: O - T,
                                FirstPageTime: O,
                                PerJSHeapSize: D,
                                TotalJSHeapSize: w,
                                UsedJSHeapSize: I,
                                OfflineHits: H,
                                ChunkHits: U
                            });
                            A({
                                url: y ? o : r,
                                params: $
                            });
                        });
                    };
                    window.addEventListener("load", function() {
                        b();
                    });
                }
            }, a = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.query, i = void 0 === n ? {} : n, a = t.isDev, c = void 0 === a || a, u = t.clientType, l = void 0 === u ? "" : u, f = t.timeEnd, p = void 0 === f ? {} : f;
                if (l) {
                    if (wx.getPerformance) {
                        var d = wx.getPerformance();
                        d && d.createObserver(function(t) {
                            var n = t.getEntries(), a = {}, u = {}, f = {
                                duration: 0
                            };
                            n && n.length && n.forEach(function(e) {
                                var t = e.entryType, n = void 0 === t ? "" : t, r = e.name, o = void 0 === r ? "" : r;
                                "navigation" === n && (a = e), "script" === n && (u = e), "render" === n && "firstRender" === o && (f = e);
                            });
                            var d = a.startTime || f.startTime || "", h = s(p, d) || {}, v = u.duration ? u.duration + f.duration : f.duration;
                            if (v) {
                                var _ = Object.assign(i, h, {
                                    KEY: "APPMONITOR-WEB",
                                    ClientType: l,
                                    ReportedKey: "WxPerformance",
                                    URL: a.path || f.path || "",
                                    NavigationName: a.name || "tabs",
                                    NavigationType: a.navigationType || "tabs",
                                    NavigationStart: a.startTime || f.startTime || "",
                                    FirstPage: a.duration || v,
                                    ScriptStart: u.startTime,
                                    ScriptParse: u.duration,
                                    DomBefore: f.startTime,
                                    DomParse: f.duration
                                });
                                e.request({
                                    url: "https:" + (c ? o : r),
                                    method: "POST",
                                    enableHttp2: !0,
                                    data: _,
                                    fail: function(e) {
                                        console.error("性能指标上报异常：" + e);
                                    }
                                }), a && "appLaunch" === a.name && wx.reportPerformance && !c && wx.reportPerformance(2001, a.duration, "appLaunch");
                            }
                        }).observe({
                            entryTypes: [ "navigation", "script", "render" ]
                        });
                    }
                } else console.error("缺少渠道参!!!clientType");
            }, c = function() {
                try {
                    var e = navigator.userAgent, t = e.match(/.*Android\s([\d.]+)/), n = e.match(/.*OS\s([\d_]+)/), r = /micromessenger/.test(e.toLowerCase()), o = /xzone/.test(e), i = "", a = "";
                    return n && (i = "Ios", a = n[1].replace(/_/g, ".").slice(0, 2) || 0), t && (i = "Android", 
                    a = t[1] || 0), r ? e.match(/miniProgram/i) || "miniprogram" == window.__wxjs_environment ? i += "-WxApplet" : i += "-Wx" : e.match(/alipayclient/i) ? i += "-AliApplet" : i += o ? "-App" : "-Web", 
                    {
                        OS: i,
                        OSVersion: a
                    };
                } catch (e) {
                    return console.log(e), {};
                }
            }, s = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                try {
                    var n = {}, r = !0, o = !1, i = void 0;
                    try {
                        for (var a, c = Object.keys(e)[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
                            var s = a.value;
                            if ("number" != typeof e[s]) return console.error(s + " Type must is Number"), n;
                            if ("Invalid Date" == new Date(e[s])) return console.error(s + " Invalid Date"), 
                            n;
                            n[s] = e[s], n[s + "Duration"] = e[s] - t;
                        }
                    } catch (e) {
                        o = !0, i = e;
                    } finally {
                        try {
                            !r && c.return && c.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                    return n;
                } catch (e) {
                    console.log(e);
                }
            }, u = function(t) {
                e.onMemoryWarning && e.onMemoryWarning(function(e) {
                    var n = (e || {}).level, r = void 0 === n ? 0 : n;
                    "function" == typeof t ? t(r) : console.error("callback不是一个函数");
                });
            }, l = function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = !1, r = 0; r < t.length; r++) e.indexOf(t[r]) > -1 && (n = !0);
                return n;
            }, f = function() {
                return /xzone/.test(navigator.userAgent);
            }, p = function(e) {
                var t = {
                    OfflineHits: 0,
                    ChunkHits: 0
                }, n = [ "static/js/index", "static/js/chunk-vendors" ];
                return Array.isArray(e) && window.ddmcBridge && window.ddmcBridge.isOffline && f() ? new Promise(function(r) {
                    try {
                        var o = {
                            assets: e,
                            callback: function(e) {
                                if ("object" === (void 0 === e ? "undefined" : _typeof(e))) {
                                    for (var o = Object.keys(e), i = 0, a = 0, c = 0; c < o.length; c++) {
                                        var s = o[c];
                                        e[s] && (i += 1, l(s, n) && (a += 1));
                                    }
                                    r({
                                        OfflineHits: i,
                                        ChunkHits: a
                                    });
                                }
                                r(t);
                            }
                        };
                        window.ddmcBridge.isOffline(o);
                    } catch (e) {
                        console.warn(e), r(t);
                    }
                }) : Promise.resolve(t);
            }, d = function(e) {
                return new Promise(function(t) {
                    try {
                        window.ddmcBridge && window.ddmcBridge.webViewPerformanceTiming && f() ? window.ddmcBridge.webViewPerformanceTiming(function(e) {
                            t(e || {});
                        }) : e && e.invoke && f() ? e.invoke("webViewPerformanceTiming", {}, !1, function(e) {
                            t(e || {});
                        }) : t({});
                    } catch (e) {
                        t({});
                    }
                });
            };
        }.call(this, n("543d").default);
    },
    "96cf": function(e, t) {
        !function(t) {
            function n(e, t, n, r) {
                var i = t && t.prototype instanceof o ? t : o, a = Object.create(i.prototype), c = new d(r || []);
                return a._invoke = u(e, n, c), a;
            }
            function r(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    };
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    };
                }
            }
            function o() {}
            function i() {}
            function a() {}
            function c(e) {
                [ "next", "throw", "return" ].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e);
                    };
                });
            }
            function s(e) {
                function t(n, o, i, a) {
                    var c = r(e[n], e, o);
                    if ("throw" !== c.type) {
                        var s = c.arg, u = s.value;
                        return u && "object" === (void 0 === u ? "undefined" : _typeof(u)) && m.call(u, "__await") ? Promise.resolve(u.__await).then(function(e) {
                            t("next", e, i, a);
                        }, function(e) {
                            t("throw", e, i, a);
                        }) : Promise.resolve(u).then(function(e) {
                            s.value = e, i(s);
                        }, function(e) {
                            return t("throw", e, i, a);
                        });
                    }
                    a(c.arg);
                }
                var n;
                this._invoke = function(e, r) {
                    function o() {
                        return new Promise(function(n, o) {
                            t(e, r, n, o);
                        });
                    }
                    return n = n ? n.then(o, o) : o();
                };
            }
            function u(e, t, n) {
                var o = T;
                return function(i, a) {
                    if (o === R) throw new Error("Generator is already running");
                    if (o === C) {
                        if ("throw" === i) throw a;
                        return v();
                    }
                    for (n.method = i, n.arg = a; ;) {
                        var c = n.delegate;
                        if (c) {
                            var s = l(c, n);
                            if (s) {
                                if (s === w) continue;
                                return s;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if (o === T) throw o = C, n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        o = R;
                        var u = r(e, t, n);
                        if ("normal" === u.type) {
                            if (o = n.done ? C : S, u.arg === w) continue;
                            return {
                                value: u.arg,
                                done: n.done
                            };
                        }
                        "throw" === u.type && (o = C, n.method = "throw", n.arg = u.arg);
                    }
                };
            }
            function l(e, t) {
                var n = e.iterator[t.method];
                if (n === _) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = _, l(e, t), "throw" === t.method)) return w;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return w;
                }
                var o = r(n, e.iterator, t.arg);
                if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, 
                w;
                var i = o.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
                t.arg = _), t.delegate = null, w) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
                t.delegate = null, w);
            }
            function f(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                this.tryEntries.push(t);
            }
            function p(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function d(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(f, this), this.reset(!0);
            }
            function h(e) {
                if (e) {
                    var t = e[E];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1, r = function t() {
                            for (;++n < e.length; ) if (m.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = _, t.done = !0, t;
                        };
                        return r.next = r;
                    }
                }
                return {
                    next: v
                };
            }
            function v() {
                return {
                    value: _,
                    done: !0
                };
            }
            var _, g = Object.prototype, m = g.hasOwnProperty, y = "function" == typeof Symbol ? Symbol : {}, E = y.iterator || "@@iterator", A = y.asyncIterator || "@@asyncIterator", b = y.toStringTag || "@@toStringTag", P = "object" === (void 0 === e ? "undefined" : _typeof(e)), O = t.regeneratorRuntime;
            if (O) P && (e.exports = O); else {
                (O = t.regeneratorRuntime = P ? e.exports : {}).wrap = n;
                var T = "suspendedStart", S = "suspendedYield", R = "executing", C = "completed", w = {}, k = {};
                k[E] = function() {
                    return this;
                };
                var I = Object.getPrototypeOf, D = I && I(I(h([])));
                D && D !== g && m.call(D, E) && (k = D);
                var x = a.prototype = o.prototype = Object.create(k);
                i.prototype = x.constructor = a, a.constructor = i, a[b] = i.displayName = "GeneratorFunction", 
                O.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === i || "GeneratorFunction" === (t.displayName || t.name));
                }, O.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, b in e || (e[b] = "GeneratorFunction")), 
                    e.prototype = Object.create(x), e;
                }, O.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, c(s.prototype), s.prototype[A] = function() {
                    return this;
                }, O.AsyncIterator = s, O.async = function(e, t, r, o) {
                    var i = new s(n(e, t, r, o));
                    return O.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next();
                    });
                }, c(x), x[b] = "Generator", x[E] = function() {
                    return this;
                }, x.toString = function() {
                    return "[object Generator]";
                }, O.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(), function n() {
                        for (;t.length; ) {
                            var r = t.pop();
                            if (r in e) return n.value = r, n.done = !1, n;
                        }
                        return n.done = !0, n;
                    };
                }, O.values = h, d.prototype = {
                    constructor: d,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = _, this.done = !1, this.delegate = null, 
                        this.method = "next", this.arg = _, this.tryEntries.forEach(p), !e) for (var t in this) "t" === t.charAt(0) && m.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = _);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        function t(t, r) {
                            return i.type = "throw", i.arg = e, n.next = t, r && (n.method = "next", n.arg = _), 
                            !!r;
                        }
                        if (this.done) throw e;
                        for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r], i = o.completion;
                            if ("root" === o.tryLoc) return t("end");
                            if (o.tryLoc <= this.prev) {
                                var a = m.call(o, "catchLoc"), c = m.call(o, "finallyLoc");
                                if (a && c) {
                                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                                } else if (a) {
                                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && m.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break;
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, 
                        w) : this.complete(i);
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                        this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                        w;
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), p(n), w;
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    p(n);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: h(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = _), w;
                    }
                };
            }
        }(function() {
            return this || "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)) && self;
        }() || Function("return this")());
    },
    "98be": function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.uploadDeviceToken = void 0;
        var a = n("5ee7");
        t.uploadDeviceToken = function(e) {
            return a.databusHttp.post("finger/pageReport", o({}, e), {
                showMsg: !1
            });
        };
    },
    "99d2": function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        t.default = function(e, t) {
            return {
                data: function() {
                    return {
                        currentTrackKey: "",
                        trackObserveCache: {},
                        trackElapseTime: "",
                        trackOnLoadOptions: {},
                        isCanObserve: !0
                    };
                },
                computed: {
                    vForTrackIndexClassKey: function() {
                        var e = this, t = e.vForTrackIndex, n = void 0 === t ? 0 : t, r = e.currentTrackKey, o = (void 0 === r ? "" : r).replace(/\//g, "-");
                        return "ddmc-track-observe-".concat(o, "-").concat(n, "-").concat(e._uid);
                    },
                    isTrackPage: function() {
                        var e = this.currentTrackKey, t = this.$options, n = this.trackPageId;
                        return e && 1 === e.split("/").length || t.trackPage || n;
                    },
                    trackVIfComputed: function() {
                        var e = this, t = {};
                        return function(n, r, o) {
                            var i = e;
                            return n && !t[o] && i.$nextTick(function() {
                                i.$track({
                                    key: "".concat(i.currentTrackKey, "/v-if/").concat(o),
                                    eventType: "exposure"
                                }, i.trackDataComputed());
                            }), t[o] = n, n;
                        };
                    },
                    trackVforIndexComputed: function() {
                        var e = (this.vForTrackIndex || "").split("-");
                        return e.length ? e[e.length - 1] : "";
                    }
                },
                created: function() {
                    var n = this, r = n.$options.name || "", o = !1;
                    if (!n.currentTrackKey && !t.test(r) && !/uni/.test(n.$options.__file)) {
                        var i, a, c, s;
                        !n.$options.name && n.$options.__file && n._uid !== n.$root._uid && console.error("存在组件没有name属性", this);
                        for (var u = this, l = null === (i = u) || void 0 === i || null === (a = i.$parent) || void 0 === a || null === (c = a.$options) || void 0 === c ? void 0 : c.name, f = e.ignoreCoverageIndex.includes(l) ? 1 : null === (s = u) || void 0 === s ? void 0 : s.fullCoverageTrackIndex, p = "".concat(r).concat(f ? "/".concat(f) : ""); u.$parent; ) {
                            var d = u.$parent.$options.name;
                            if (d && !t.test(d) && d !== e.baseComponentName) {
                                var h, v, _, g, m, y, E = null === (h = u) || void 0 === h || null === (v = h.$parent) || void 0 === v || null === (_ = v.$parent) || void 0 === _ || null === (g = _.$options) || void 0 === g ? void 0 : g.name, A = e.ignoreCoverageIndex.includes(E) ? 1 : null === (m = u) || void 0 === m || null === (y = m.$parent) || void 0 === y ? void 0 : y.fullCoverageTrackIndex;
                                p = "".concat(d, "/").concat(A ? "".concat(A, "/") : "").concat(p);
                            }
                            u.isGlobalComponent && (o = !0), u = u.$parent;
                        }
                        if (this.isGlobalComponent || o) {
                            var b = p.split("/");
                            b[0] = "isGlobal", p = b.join("/");
                        }
                        this.currentTrackKey = p;
                    }
                },
                methods: {
                    trackDataComputed: function(e) {
                        for (var n = this, r = n.$parent, i = function(e, t) {
                            var n = Object.keys(e || {}), r = {};
                            return n.length && n.forEach(function(e) {
                                r[e] = void 0 === t[e] ? "" : t[e];
                            }), r;
                        }, a = {}, c = a; r; ) {
                            var s, u;
                            (null === (s = r) || void 0 === s || null === (u = s.$options) || void 0 === u ? void 0 : u.name) && !t.test(r.$options.name) && -1 === r.$options.name.indexOf("pageContent") && (c.trackParentData = function(e) {
                                return o(o(o({}, e ? i(e.$options.computed, e) : {}), e ? e.$data : {}), e ? e.$props : {});
                            }(r), c = c.trackParentData), r = r.$parent;
                        }
                        return o(o(o({
                            vForData: e || {},
                            trackParentData: a.trackParentData
                        }, i(n.$options.computed, this)), n.$data), n.$props || {});
                    },
                    track: function(t, n, r) {
                        for (var o = this, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "click", a = arguments.length, c = new Array(a > 4 ? a - 4 : 0), s = 4; s < a; s++) c[s - 4] = arguments[s];
                        var u = c || [], l = Array.from(u), f = l.length, p = "isTrackVFor" === u[f - 1], d = {};
                        try {
                            d = l[f - 3] && JSON.parse(JSON.stringify(l[f - 3]));
                        } catch (e) {
                            d = l[f - 3];
                        }
                        var h = l[f - 2];
                        if (p && (l = l.splice(0, f - 3)), l.length || l.unshift(r), setTimeout(function() {
                            e.track({
                                key: "".concat(o.currentTrackKey, "/").concat(t),
                                eventType: i,
                                other: {
                                    index: p ? h : void 0
                                }
                            }, o.trackDataComputed(p ? d : void 0));
                        }, 50), n.indexOf("=") >= 0) {
                            var v = n.split("="), _ = v[0].trim(), g = v[1].trim();
                            isNaN(Number(g)) ? this[_] = "false" === g || "true" === g ? "true" === g : g : this[_] = Number(g);
                        } else {
                            var m;
                            n && (null === (m = this[n.trim()]) || void 0 === m || m.apply(this, l));
                        }
                    },
                    pageElapseByNative: function() {
                        var t = this;
                        if (window) {
                            var n = window._dd_bridge_notify_ || function() {};
                            window._dd_bridge_notify_ = function(r, o) {
                                "TAP_BACKBUTTON" === r && 0 === e.referer.refer.length && t.$track({
                                    key: t.currentTrackKey,
                                    eventType: "elapse"
                                }, t.trackDataComputed()), n(r, o);
                            };
                        }
                    },
                    pageTrackDestroyed: function() {
                        var t = this;
                        t.trackObserveCache = {};
                        var n = new Date().getTime();
                        e.pageIsShow[t.currentTrackKey] = !1, t.isTrackPage && "uniapp" === e.name && e.track({
                            key: t.currentTrackKey,
                            eventType: "elapse",
                            other: {
                                time: n - t.trackElapseTime
                            }
                        }, this.trackDataComputed());
                    },
                    pageTrackOnShow: function(t) {
                        var n = t || this, r = n.currentTrackKey, o = n.isTrackPage;
                        n.trackElapseTime = new Date().getTime(), n.trackObserveCache = {}, o && r && (e.getConfig(r), 
                        n.$nextTick(function() {
                            !e.tabs.includes(r) || e.hidePage === r || e.pageIsShow[r] || e.referer.pageBack && !e.tabs.includes(e.hidePage) && e.hidePage || e.pushRefer(r), 
                            e.pageIsShow[n.currentTrackKey] || e.hidePage === r || (e.pageIsShow[n.currentTrackKey] = !0, 
                            n.$track({
                                key: r,
                                eventType: "exposure"
                            }, n.trackDataComputed())), e.referer.pageBack = !0;
                        }));
                    },
                    pageTrackOnHide: function(t) {
                        var n = t || this;
                        n.trackObserveCache = {};
                        var r = new Date().getTime();
                        e.pageIsShow[n.currentTrackKey] = !1, e.hidePage = n.currentTrackKey, e.track({
                            key: n.currentTrackKey,
                            eventType: "elapse",
                            other: {
                                time: r - n.trackElapseTime
                            }
                        }, n.trackDataComputed()), e.trackAllMemo();
                    },
                    pageTrackDomObserve: function(t) {
                        var n = this, r = this;
                        setTimeout(function() {
                            var o, i = t && (t.id || (null === (o = t.target) || void 0 === o ? void 0 : o.id));
                            if (t.intersectionRatio && i) {
                                var a = i.split("_"), c = a[0].split("-"), s = "".concat(r.currentTrackKey).concat(a[1] ? "/".concat(a[1]) : "");
                                e.pageObserveCache[r.vForTrackIndexClassKey] = setTimeout(function() {
                                    r.$nextTick(function() {
                                        r.$track({
                                            key: s,
                                            eventType: "exposure",
                                            other: {
                                                index: c[1] || 0
                                            }
                                        }, n.trackDataComputed(r[c[0]]));
                                    });
                                }, 500);
                            } else clearTimeout(e.pageObserveCache[r.vForTrackIndexClassKey]);
                        });
                    },
                    stopObserve: function() {
                        this.isCanObserve = !1;
                    },
                    reStartObserve: function() {
                        this.isCanObserve = !0, e.deferObserveArr.forEach(function(e) {
                            e();
                        });
                    }
                }
            };
        };
    },
    "9c2d": function(e, t, n) {
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0, function(e) {
            e[e.GLOBAL_CONFIG = 0] = "GLOBAL_CONFIG", e[e.PRODUCT_DETAIL_LAZY_LOAD = 1] = "PRODUCT_DETAIL_LAZY_LOAD", 
            e[e.PRODUCT_DETAIL_API = 2] = "PRODUCT_DETAIL_API";
        }(r || (r = {}));
        var o = r;
        t.default = o;
    },
    "9dba": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function c(e, t) {
            s ? (s(t), s = void 0) : e.checkLoginReady = Promise.resolve(t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var s, u = r(n("67c5")), l = r(n("b7c7")), f = n("6ddb"), p = {
            setUser: function(e, t) {
                var n = t.userInfo, r = t.notStorage, o = n.id, a = (0, f.isNull)(n) ? {} : i(i({}, e.userInfo), n);
                e.userInfo = a, r || (l.default.save({
                    key: u.default.USER_INFO,
                    data: a
                }), o && p.setIsLogin(e, !0));
            },
            setLogin: function(e, t) {
                if (t) {
                    var n = l.default.load({
                        key: u.default.USER_INFO
                    });
                    n && !(0, f.isNull)(n) && p.setUser(e, {
                        userInfo: n,
                        notStorage: !0
                    });
                }
                p.setIsLogin(e, t);
            },
            setIsLogin: function(e, t) {
                e.isLogin = t, c(e, t);
            },
            setAuthInfo: function(e, t) {
                var n = (0, f.isNull)(t) ? {} : i(i({}, e.userAuthInfo), t);
                e.userAuthInfo = n, (0, f.isNull)(t) ? l.default.remove({
                    key: u.default.USER_AUTH_INFO
                }) : l.default.update({
                    key: u.default.USER_AUTH_INFO,
                    data: n
                });
            },
            clearUser: function(e) {
                p.setUser(e, {
                    userInfo: {}
                }), p.setAuthInfo(e, {}), p.setLogin(e, !1), e.userAuthInfo = {}, e.isAuthAliTicket = !1;
            },
            setDeviceInfo: function(e, t) {
                var n = t.appDeviceToken, r = void 0 === n ? "" : n;
                r && (e.appDeviceToken = r);
            },
            setRcmndStatus: function(e, t) {
                e.rcmnd_status = t;
            }
        }, d = {
            namespaced: !0,
            state: {
                isLogin: null,
                isAuthAliTicket: !1,
                userInfo: {},
                userAuthInfo: {},
                checkLoginReady: new Promise(function(e) {
                    s = e;
                }),
                appDeviceToken: "",
                rcmnd_status: 2
            },
            mutations: p
        };
        t.default = d;
    },
    "9e6a": function(e, t, n) {
        var r = n("d233"), o = Object.prototype.hasOwnProperty, i = Array.isArray, a = {
            allowDots: !1,
            allowPrototypes: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: r.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        }, c = function(e) {
            return e.replace(/&#(\d+);/g, function(e, t) {
                return String.fromCharCode(parseInt(t, 10));
            });
        }, s = function(e, t) {
            return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
        }, u = function(e, t) {
            if (i(e)) {
                for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
                return n;
            }
            return t(e);
        }, l = function(e, t) {
            var n, l = {}, f = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, p = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, d = f.split(t.delimiter, p), h = -1, v = t.charset;
            if (t.charsetSentinel) for (n = 0; n < d.length; ++n) 0 === d[n].indexOf("utf8=") && ("utf8=%E2%9C%93" === d[n] ? v = "utf-8" : "utf8=%26%2310003%3B" === d[n] && (v = "iso-8859-1"), 
            h = n, n = d.length);
            for (n = 0; n < d.length; ++n) if (n !== h) {
                var _, g, m = d[n], y = m.indexOf("]="), E = -1 === y ? m.indexOf("=") : y + 1;
                -1 === E ? (_ = t.decoder(m, a.decoder, v, "key"), g = t.strictNullHandling ? null : "") : (_ = t.decoder(m.slice(0, E), a.decoder, v, "key"), 
                g = u(s(m.slice(E + 1), t), function(e) {
                    return t.decoder(e, a.decoder, v, "value");
                })), g && t.interpretNumericEntities && "iso-8859-1" === v && (g = c(g)), m.indexOf("[]=") > -1 && (g = i(g) ? [ g ] : g), 
                o.call(l, _) ? l[_] = r.combine(l[_], g) : l[_] = g;
            }
            return l;
        }, f = function(e, t, n, r) {
            for (var o = r ? t : s(t, n), i = e.length - 1; i >= 0; --i) {
                var a, c = e[i];
                if ("[]" === c && n.parseArrays) a = [].concat(o); else {
                    a = n.plainObjects ? Object.create(null) : {};
                    var u = "[" === c.charAt(0) && "]" === c.charAt(c.length - 1) ? c.slice(1, -1) : c, l = parseInt(u, 10);
                    n.parseArrays || "" !== u ? !isNaN(l) && c !== u && String(l) === u && l >= 0 && n.parseArrays && l <= n.arrayLimit ? (a = [], 
                    a[l] = o) : a[u] = o : a = {
                        0: o
                    };
                }
                o = a;
            }
            return o;
        }, p = function(e, t, n, r) {
            if (e) {
                var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, a = /(\[[^[\]]*])/, c = /(\[[^[\]]*])/g, s = n.depth > 0 && a.exec(i), u = s ? i.slice(0, s.index) : i, l = [];
                if (u) {
                    if (!n.plainObjects && o.call(Object.prototype, u) && !n.allowPrototypes) return;
                    l.push(u);
                }
                for (var p = 0; n.depth > 0 && null !== (s = c.exec(i)) && p < n.depth; ) {
                    if (p += 1, !n.plainObjects && o.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes) return;
                    l.push(s[1]);
                }
                return s && l.push("[" + i.slice(s.index) + "]"), f(l, t, n, r);
            }
        }, d = function(e) {
            if (!e) return a;
            if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw new TypeError("Decoder has to be a function.");
            if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var t = void 0 === e.charset ? a.charset : e.charset;
            return {
                allowDots: void 0 === e.allowDots ? a.allowDots : !!e.allowDots,
                allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : a.allowPrototypes,
                arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
                charset: t,
                charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : a.charsetSentinel,
                comma: "boolean" == typeof e.comma ? e.comma : a.comma,
                decoder: "function" == typeof e.decoder ? e.decoder : a.decoder,
                delimiter: "string" == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : a.delimiter,
                depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
                ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : a.interpretNumericEntities,
                parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : a.parameterLimit,
                parseArrays: !1 !== e.parseArrays,
                plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : a.plainObjects,
                strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : a.strictNullHandling
            };
        };
        e.exports = function(e, t) {
            var n = d(t);
            if ("" === e || null === e || void 0 === e) return n.plainObjects ? Object.create(null) : {};
            for (var o = "string" == typeof e ? l(e, n) : e, i = n.plainObjects ? Object.create(null) : {}, a = Object.keys(o), c = 0; c < a.length; ++c) {
                var s = a[c], u = p(s, o[s], n, "string" == typeof e);
                i = r.merge(i, u, n);
            }
            return r.compact(i);
        };
    },
    "9fc9": function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : _typeof(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
                })(e);
            }
            function i(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o);
            }
            function a(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        function a(e) {
                            i(s, r, o, a, c, "next", e);
                        }
                        function c(e) {
                            i(s, r, o, a, c, "throw", e);
                        }
                        var s = e.apply(t, n);
                        a(void 0);
                    });
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var c = r(n("a34a")), s = r(n("66fd")), u = n("37eb"), l = n("f14d"), f = r(n("c78f")), p = r(n("e381")), d = r(n("eb8e")), h = s.default.extend({
                mixins: [ p.default ],
                data: function() {
                    return {
                        flagStatus: !1,
                        txCaptcha: {}
                    };
                },
                methods: {
                    requestGetSMSCode: function(e, t, n) {
                        var r = this, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                        if (!this.flagStatus) {
                            this.flagStatus = !0, setTimeout(function() {
                                r.flagStatus = !1;
                            }, 1200), this.stateCoding = !1;
                            var s = this;
                            return new Promise(function() {
                                var l = a(c.default.mark(function a(l) {
                                    var f, p, h, v, _, g, m, y, E;
                                    return c.default.wrap(function(a) {
                                        for (;;) switch (a.prev = a.next) {
                                          case 0:
                                            return f = {
                                                mobile: e,
                                                verify_code: t,
                                                type: n,
                                                showData: !0
                                            }, i && "string" == typeof i ? f.transTicket = i : i && "object" === o(i) && (f.ticket = i.ticket, 
                                            f.randstr = i.randstr), a.next = 4, (0, u.apiGetSMSCode)(f);

                                          case 4:
                                            if (p = a.sent, h = p.data, v = p.code, _ = p.msg, 0 !== v) {
                                                a.next = 12;
                                                break;
                                            }
                                            r.startCountDown(), a.next = 29;
                                            break;

                                          case 12:
                                            if (g = h || {}, m = g.need_verify_code, y = void 0 === m ? 0 : m, E = g.captcha_type, 
                                            r.stateCoding = !0, r.needVerifyCode = y, y && (r.verifyCode = "", r.getCodeUrl()), 
                                            1205 !== v) {
                                                a.next = 20;
                                                break;
                                            }
                                            r.$confirm({
                                                title: "建议获取语音验证码",
                                                content: "收不到验证码？可尝试语音验证码，请点击确定后注意接听电话",
                                                success: function() {
                                                    r.$track({
                                                        key: "loginPage/getVoice",
                                                        eventType: "click"
                                                    }), s.type = 3, r.flagStatus = !1, s.requestGetSMSCode(e, t, 3, i);
                                                }
                                            }), a.next = 29;
                                            break;

                                          case 20:
                                            if (-1001 !== v) {
                                                a.next = 28;
                                                break;
                                            }
                                            if (!i) {
                                                a.next = 24;
                                                break;
                                            }
                                            return s.$toast("当前服务异常，请稍后重试！", 2e3), a.abrupt("return");

                                          case 24:
                                            r.$track({
                                                key: "loginPage/DDCaptcha",
                                                eventType: "exposure"
                                            }), "dingdong" === E ? r.gotoDDCaptcha(e) : r.gotoTXCaptcha(), a.next = 29;
                                            break;

                                          case 28:
                                            1 !== v || "请在小程序中授权" !== _ || d.default.isH5 ? _ && s.$toast(_) : (r.$toast("授权失败，请稍后重试"), 
                                            r.autoLogin());

                                          case 29:
                                            l({
                                                code: v
                                            });

                                          case 30:
                                          case "end":
                                            return a.stop();
                                        }
                                    }, a);
                                }));
                                return function(e) {
                                    return l.apply(this, arguments);
                                };
                            }());
                        }
                    },
                    getSmsImg: function() {
                        return (0, u.apiGetSmsImg)({
                            session_id: this.$store.state.user.userAuthInfo.sessionId
                        });
                    },
                    gotoDDCaptcha: function(e) {
                        var t = "".concat(f.default.SERVER_API_CAPTCHA(), "&phoneNum=").concat(e);
                        this.$open({
                            url: l.PATH.PAGE_WEB_VIEW,
                            params: {
                                src: t
                            }
                        });
                    },
                    messageEvent: function(e) {
                        var t = e.data;
                        t && 0 === t.ret && (1 === this.captchaType ? this.getCode(t.ticket) : this.eventGoLogin(t.ticket));
                        var n = document.getElementById("captcha_iframe");
                        n.parentNode && n.parentNode.removeChild(n), window.removeEventListener("message", this.messageEvent, !1);
                    },
                    gotoTXCaptcha: function() {
                        return a(c.default.mark(function t() {
                            return c.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    e.navigateToMiniProgram({
                                        appId: "wx5a3a7366fd07e119",
                                        path: "/pages/captcha/index",
                                        extraData: {
                                            appId: "2091774026"
                                        },
                                        envVersion: "release"
                                    });

                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            });
            t.default = h;
        }).call(this, n("543d").default);
    },
    a19ef: function(e, t, n) {
        n.r(t), function(e) {
            t.default = {
                data: function() {
                    return {
                        position: [],
                        button: []
                    };
                },
                computed: {
                    pos: function() {
                        return JSON.stringify(this.position);
                    },
                    btn: function() {
                        return JSON.stringify(this.button);
                    }
                },
                watch: {
                    show: function(e) {
                        if (!this.autoClose) {
                            var t = this.position[0];
                            t ? (t.show = e, this.$set(this.position, 0, t)) : this.init();
                        }
                    }
                },
                created: function() {
                    void 0 !== this.swipeaction.children && this.swipeaction.children.push(this);
                },
                mounted: function() {
                    this.init();
                },
                beforeDestroy: function() {
                    var e = this;
                    this.swipeaction.children.forEach(function(t, n) {
                        t === e && e.swipeaction.children.splice(n, 1);
                    });
                },
                methods: {
                    init: function() {
                        var e = this;
                        setTimeout(function() {
                            e.getSize(), e.getButtonSize();
                        }, 50);
                    },
                    closeSwipe: function(e) {
                        this.autoClose && this.swipeaction.closeOther(this);
                    },
                    change: function(e) {
                        this.$emit("change", e.open);
                        var t = this.position[0];
                        t.show !== e.open && (t.show = e.open, this.$set(this.position, 0, t));
                    },
                    onClick: function(e, t) {
                        this.$emit("click", {
                            content: t,
                            index: e
                        });
                    },
                    getSize: function() {
                        var t = this;
                        e.createSelectorQuery().in(this).selectAll(".selector-query-hock").boundingClientRect(function(e) {
                            t.autoClose ? e[0].show = !1 : e[0].show = t.show, t.position = e;
                        }).exec();
                    },
                    getButtonSize: function() {
                        var t = this;
                        e.createSelectorQuery().in(this).selectAll(".button-hock").boundingClientRect(function(e) {
                            t.button = e;
                        }).exec();
                    }
                }
            };
        }.call(this, n("543d").default);
    },
    a203: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createIntersectionObserver = function(e, t) {
                return n(e, t);
            };
            var n = function(t, n) {
                return (0, e.createIntersectionObserver)(t, n);
            };
        }).call(this, n("543d").default);
    },
    a206: function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function a(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function c(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    function i(e) {
                        a(s, r, o, i, c, "next", e);
                    }
                    function c(e) {
                        a(s, r, o, i, c, "throw", e);
                    }
                    var s = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("a34a")), u = {
            namespaced: !0,
            state: {
                showFuliaoDetailPop: !1,
                fuliaoDetailProduct: null,
                fuliaoInfo: null,
                cartProduct: null
            },
            mutations: {
                setFuliaoDetailPopVisible: function(e, t) {
                    e.showFuliaoDetailPop = t;
                },
                setFuliaoDetailProduct: function(e, t) {
                    e.fuliaoDetailProduct = t;
                },
                setFuliaoInfo: function(e, t) {
                    e.fuliaoInfo = t;
                },
                setCartProduct: function(e, t) {
                    e.cartProduct = t;
                }
            },
            actions: {
                showFuliaoPop: function(e, t) {
                    var n = e.commit, r = t.visible, o = t.product;
                    n("setFuliaoDetailPopVisible", r), r ? n("setFuliaoDetailProduct", o) : setTimeout(function() {
                        n("setFuliaoDetailProduct", o);
                    }, 300);
                },
                setFuliaoInfo: function(e, t) {
                    return c(s.default.mark(function n() {
                        var r, o, i, a, c, u, l, f, p, d, h, v, _, g;
                        return s.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (r = e.commit, o = e.dispatch, i = e.rootState, !t) {
                                    n.next = 13;
                                    break;
                                }
                                return f = t.products, p = t.aggregationType, d = (null === i || void 0 === i || null === (l = i.globalData) || void 0 === l ? void 0 : l.maicaiAppConfig) || {}, 
                                h = d.merge_product_config, h = void 0 === h ? {} : h, v = h.smallprogram_white_list, 
                                (_ = void 0 === v ? [] : v).includes(i.globalData.currentRoute) || (p = -1, f = [ t.defaultProduct ]), 
                                n.next = 9, o("factorFuliaoProducts", {
                                    products: f,
                                    sups: t.sups
                                });

                              case 9:
                                if (g = n.sent, t.products = g.products, !(-1 === p && (null === g || void 0 === g ? void 0 : g.stock_number) <= 0) || (null === t || void 0 === t || null === (a = t.products[0]) || void 0 === a || null === (c = a.productInfoVO) || void 0 === c || null === (u = c.supplementary_list) || void 0 === u ? void 0 : u.length)) {
                                    n.next = 13;
                                    break;
                                }
                                return n.abrupt("return", !1);

                              case 13:
                                return r("setFuliaoInfo", t), n.abrupt("return", !0);

                              case 15:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                factorFuliaoProducts: function(e, t) {
                    var n = t.products, r = t.sups, i = 0;
                    return n && n.length ? (n.map(function(e) {
                        var t, n, a = e.productInfoVO, c = 0;
                        return (null === a || void 0 === a || null === (t = a.supplementary_list) || void 0 === t ? void 0 : t.length) && (a.supplementary_list = null === a || void 0 === a || null === (n = a.supplementary_list.map(function(e) {
                            var t;
                            return e.product_list = null === (t = e.product_list.map(function(e) {
                                var t = e;
                                return r && r.length && r.forEach(function(n) {
                                    var r, a;
                                    n.id === e.id && (t = o(o({}, e), n), i += null === (r = t) || void 0 === r ? void 0 : r.stock_number, 
                                    c += null === (a = t) || void 0 === a ? void 0 : a.stock_number);
                                }), t;
                            })) || void 0 === t ? void 0 : t.filter(function(e) {
                                return e.price;
                            }), e;
                        })) || void 0 === n ? void 0 : n.filter(function(e) {
                            var t;
                            return null === (t = e.product_list) || void 0 === t ? void 0 : t.length;
                        }), c <= 0 && (a.supplementary_list = [])), e;
                    }), {
                        products: n,
                        stock_number: i
                    }) : {};
                },
                clearFuliaoInfo: function(e) {
                    (0, e.commit)("setFuliaoInfo", null);
                },
                setCartProduct: function(e, t) {
                    (0, e.commit)("setCartProduct", t.product);
                }
            }
        };
        t.default = u;
    },
    a3108: function(e, t, n) {
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function i(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = function() {
            function e(t) {
                r(this, e), this.name = t, this.callback = [];
            }
            return i(e, [ {
                key: "use",
                value: function(e) {
                    this.callback.push(e);
                }
            }, {
                key: "apply",
                value: function(e) {
                    var t = e;
                    return this.callback.forEach(function(n) {
                        t && (t = n(e));
                    }), t;
                }
            } ]), e;
        }();
        t.default = a;
    },
    a34a: function(e, t, n) {
        e.exports = n("bbdd");
    },
    a35b: function(e, t) {
        e.exports = {
            variables: {
                api_version: "9.51.0"
            },
            cdn: "static-wechat.ddimg.mobi"
        };
    },
    a438: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.apiGet099BenefitReplaceList = function(e) {
            return o.http.get("buy/benefitReplaceListPopUp", e);
        }, t.apiGet099AddBenefitList = function(e) {
            return o.http.get("buy/addBenefitListPopUp", e);
        }, t.getVipBuyCoupon = t.apiVipUnsign = t.apiTodayFreeDishNew = t.apiGetAskAndQuestion = t.apiAchievementTip = t.apiActivityCouponTip = t.apiGetVipUserInfo = t.apiChooseTicketRecieve = t.apiChooseTicketIndex = t.apiThirdVipSync = t.apiPopupInfo = t.apiGetVipPaySelf = t.apiGetVipPayCombineCalculateUsing = t.apiGetVipPayDetail2021 = t.apiGetVipDetail2021 = t.apiGetVipOrderCheck = t.apiGetVipRecord = t.apiSetVipAck = t.apiGetVipBuy = t.apiGetVipCard = t.apiGetVipCateProduct = t.apiGetVipProduct = t.apiGetVipFreeProduct = t.apiJavaGetVipCoupon = t.apiGetVipCoupon = t.apiGetVipExchangeCode = t.apiGetVipLog = t.apiGetVipDetail = void 0;
        var r = n("27a2"), o = n("5ee7");
        t.apiGetVipDetail = function(e) {
            return o.http.get("vip/v97Detail", e);
        };
        t.apiGetVipLog = function(e) {
            return o.http.get("vip/log", e);
        };
        t.apiGetVipExchangeCode = function(e) {
            return o.http.get("vip/exchange", e);
        };
        t.apiGetVipCoupon = function(e) {
            return o.http.get("vip/receiveTicket", e, {
                scene: r.DEVICE_SCENE.USER_GET_TICKET
            });
        };
        t.apiJavaGetVipCoupon = function(e) {
            return o.gateWayHttp.get("vip-app-service/vip/receiveTicket", e, {
                scene: r.DEVICE_SCENE.USER_GET_TICKET
            });
        };
        t.apiGetVipFreeProduct = function(e) {
            return o.http.post("cart/receiveTicketV97", e, {
                scene: r.DEVICE_SCENE.USER_GET_TICKET
            });
        };
        t.apiGetVipProduct = function(e) {
            return o.gateWayHttp.get("vip-app-service/vip/product", e);
        };
        t.apiGetVipCateProduct = function(e) {
            return o.gateWayHttp.get("vip-app-service/vip/categoryProduct", e);
        };
        t.apiGetVipCard = function(e) {
            return o.http.get("vip/card", e);
        };
        t.apiGetVipBuy = function(e) {
            return o.http.get("vip/buy", e);
        };
        t.apiSetVipAck = function(e) {
            return o.http.get("vip/ack", e);
        };
        t.apiGetVipRecord = function(e) {
            return o.http.get("vip/log", e);
        };
        t.apiGetVipOrderCheck = function(e) {
            return o.http.get("vip/payCheck", e);
        };
        t.apiGetVipDetail2021 = function(e) {
            return o.gateWayHttp.get("vip-app-service/vip/static/index", e);
        };
        t.apiGetVipPayDetail2021 = function(e) {
            return o.gateWayHttp.get("vip-app-service/vip/static/pay/page", e);
        };
        t.apiGetVipPayCombineCalculateUsing = function(e) {
            return o.gateWayHttp.get("vip-app-service/vip/static/combineCalculate", e);
        };
        t.apiGetVipPaySelf = function(e) {
            return o.gateWayHttp.get("vip-app-service/vip/userInfo", e);
        };
        t.apiPopupInfo = function(e) {
            return o.gateWayHttp.get("vip-app-service/popup/popupInfo", e);
        };
        t.apiThirdVipSync = function(e) {
            return o.gateWayHttp.get("vip-app-service/thirdVip/alipayCardSync", e);
        };
        t.apiChooseTicketIndex = function(e) {
            return o.gateWayHttp.get("vip-app-service/unionVip/chooseTicket/index", e);
        };
        t.apiChooseTicketRecieve = function(e) {
            return o.gateWayHttp.post("vip-app-service/unionVip/chooseTicket/receive", e, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        };
        t.apiGetVipUserInfo = function(e) {
            return o.gateWayHttp.get("vip-app-service/vip/userInfo", e);
        };
        t.apiActivityCouponTip = function(e) {
            return o.http.get("vip/activityCouponTip", e);
        };
        t.apiAchievementTip = function(e) {
            return o.http.get("vip/achievementTip", e);
        };
        t.apiGetAskAndQuestion = function(e) {
            return o.http.get("tool/askAndQuestion", e);
        };
        t.apiTodayFreeDishNew = function(e) {
            return o.http.get("vip/todayFreeDishNew", e);
        };
        t.apiVipUnsign = function(e) {
            return o.http.get("vip/unsign", e);
        };
        t.getVipBuyCoupon = function(e) {
            return o.http.get("vip/getVipBuyCoupon", e);
        };
    },
    a65f: function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach(function(t) {
                        a(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function c(t, n) {
                return new Promise(function(r, o) {
                    var i = "".concat(l.default.SERVER_API_GALLERY(), "tool/uploadImage");
                    e.uploadFile({
                        url: i,
                        filePath: t,
                        name: "file",
                        fileType: "image",
                        formData: {
                            type: n
                        },
                        success: function(e) {
                            var a = JSON.parse(e.data || "{}");
                            0 === a.code && a.data ? r(a.data) : (p({
                                url: i,
                                filePath: t,
                                type: n,
                                data: a
                            }), o(a.msg));
                        },
                        fail: function(e) {
                            p({
                                url: i,
                                filePath: t,
                                type: n,
                                data: {
                                    err: e
                                }
                            }), o(e);
                        }
                    });
                });
            }
            function s(t, n, r) {
                var o = "".concat(l.default.SERVER_API_GALLERY(), "tool/uploadImage");
                return e.uploadFile({
                    url: o,
                    filePath: t,
                    name: "file",
                    fileType: "image",
                    formData: {
                        type: n
                    },
                    success: function(e) {
                        var i = JSON.parse(e.data || "{}");
                        0 === i.code && i.data || p({
                            url: o,
                            filePath: t,
                            type: n,
                            data: i
                        }), r(i);
                    },
                    fail: function(e) {
                        p({
                            url: o,
                            filePath: t,
                            type: n,
                            data: {
                                err: e
                            }
                        });
                    }
                });
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.uploadImgByUrl = c, t.chooseAndUploadImg = function(t, n) {
                return new Promise(function(r, o) {
                    e.chooseImage(i(i({}, t), {}, {
                        success: function(e) {
                            var t = e.tempFilePaths;
                            t && 0 !== t.length || r({
                                data: [],
                                origin: []
                            }), Promise.all(t.map(function(e) {
                                return c(e, n);
                            })).then(function(e) {
                                r({
                                    data: e,
                                    origin: t
                                });
                            }).catch(o);
                        },
                        fail: function() {
                            o();
                        }
                    }));
                });
            }, t.qiniuUpLoadUrls = function(e, t) {
                return Promise.all(e.map(function(e) {
                    return c(e, t);
                }));
            }, t.qiniuUpLoadUrl = s, t.qiniuUpLoadUrls2 = function(e, t, n) {
                return Promise.all(e.map(function(e) {
                    return new Promise(function(n) {
                        var r = s(e, t, function(e) {
                            n(e.data);
                        });
                        setTimeout(function() {
                            r.abort(), n("");
                        }, 3e4);
                    });
                })).then(function(e) {
                    return n && n(e), e;
                });
            };
            var u = r(n("66fd")), l = r(n("c78f")), f = n("1cf5"), p = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.url, n = e.filePath, r = e.type, o = e.data;
                (0, f.monitorRequest)(i(i({
                    KEY: "APPMONITOR"
                }, u.default.prototype.$store.getters.monitorInit || {}), {}, {
                    URL: t,
                    ReportedKey: "requestUpload",
                    ReportedVal: n,
                    RequestData: r,
                    ResponseData: JSON.stringify(o)
                }));
            };
        }).call(this, n("543d").default);
    },
    a8f0: function(e, t, n) {
        (function(e) {
            function n(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(r), !0).forEach(function(t) {
                        o(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createIntersectionObserver = function(e) {
                return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] ? i(e) : a(e);
            };
            var i = function(t, n) {
                return (0, e.createIntersectionObserver)(t, r(r({}, n), {}, {
                    observeAll: !0
                }));
            }, a = function(e, t) {
                var n = null, r = function(e) {
                    var t = null, n = e.substr(1, e.length);
                    switch (e[0]) {
                      case "#":
                        t = document.getElementById(n);
                        break;

                      case ".":
                        t = Array.from(document.getElementsByClassName(n))[0];
                        break;

                      default:
                        t = null;
                    }
                    return t;
                }, o = function(e, t) {
                    var o = null, i = e || {};
                    return t && (o = r(t)), new IntersectionObserver(function(e) {
                        var t = n.cb.get(e[0].target);
                        t && t(e[0]);
                    }, {
                        root: o,
                        rootMargin: "".concat(i.top || 0, "px ").concat(i.right || 0, "px ").concat(i.bottom || 0, "px ").concat(i.left || 0, "px")
                    });
                };
                return n = {
                    currentObserve: null,
                    cb: new WeakMap(),
                    relativeTo: function(e, t) {
                        return this.currentObserve = o(t, e), this;
                    },
                    relativeToViewport: function(e) {
                        return this.currentObserve = o(e), this;
                    },
                    observe: function(e, t) {
                        var n = e;
                        "string" == typeof n && (n = r(e)), n && (this.currentObserve.observe(n), this.cb.set(n, t));
                    },
                    disconnect: function() {
                        this.currentObserve.disconnect();
                    }
                };
            };
        }).call(this, n("543d").default);
    },
    a92d: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MAP_PATH = void 0;
        var r = n("f14d"), o = {
            "/pages/home/home": r.PATH.PAGE_HOME,
            "/pages/cartNew/cartNew": r.PATH.PAGE_CART,
            "/pages/login/login": r.PATH.PAGE_LOGIN,
            "/pages/mine/mine": r.PATH.PAGE_MINE,
            "/pages/productDetail/productDetail": r.PATH.PAGE_PRODUCT_DETAIL,
            "/pages/goodPackage/goodPackage": r.PATH.PAGE_GOOD_PACKAGE,
            "/pages/addressLocal/addressLocal": r.PATH.PAGE_ADDRESS_LOCAL,
            "/pages/local/local": r.PATH.PAGE_LOCAL,
            "/pages/search/search": r.PATH.PAGE_SEARCH,
            "/pages/mineOrders/mineOrders": r.PATH.PAGE_ORDERS,
            "/pages/mineOrderDetail/mineOrderDetail": r.PATH.PAGE_ORDER_DETAIL,
            "/pages/makeOrder/makeOrder": r.PATH.PAGE_MAKE_ORDER,
            "/pages/makeOrderProductList/makeOrderProductList": r.PATH.PAGE_MAKE_ORDER_PRODUCT_LIST,
            "/pages/useCoupon/useCoupon": r.PATH.PAGE_USE_COUPON,
            "/pages/refund/refund": r.PATH.PAGE_REFUND,
            "/pages/refundApply/refundApply": r.PATH.PAGE_REFUND_APPLY,
            "/pages/refundDetail/refundDetail": r.PATH.PAGE_REFUND_DETAIL,
            "/pages/accountManage/accountManage": r.PATH.PAGE_ACCOUNT,
            "/pages/about/about": r.PATH.PAGE_ABOUT,
            "/pages/refundCycle/refundCycle": r.PATH.PAGE_REFUND_CYCLE,
            "/pages/refundResult/refundResult": r.PATH.PAGE_REFUND_RESULT,
            "/pages/payResult/payResult": r.PATH.PAGE_PAY_RESULT,
            "/pages/userCoupon/userCoupon": r.PATH.PAGE_USER_COUPON,
            "/pages/address/address": r.PATH.PAGE_ADDRESS,
            "/pages/addressCreate/addressCreate": r.PATH.PAGE_ADDRESS_CREATE,
            "/pages/webView/webView": r.PATH.PAGE_WEB_VIEW,
            "/pages/orderState/orderState": r.PATH.PAGE_ORDER_STATE,
            "/pages/contactHelp/contactHelp": r.PATH.PAGE_CONTACT_HELP,
            "/pages/recipesPush/recipesPush": r.PATH.PAGE_RECIPES_PUSH,
            "/pages/recipesAuthor/recipesAuthor": r.PATH.PAGE_RECIPES_AUTHOR,
            "/pages/recipesDetail/recipesDetail": r.PATH.PAGE_RECIPES_DETAIL,
            "/pages/recipes/recipes": r.PATH.PAGE_RECIPES,
            "/pages/recipesMeales/recipesMeales": r.PATH.PAGE_MEALS_ALL,
            "/pages/searchRecipes/searchRecipes": r.PATH.PAGE_RECIPES_SEARCH,
            "/pages/recipesAll/recipesAll": r.PATH.PAGE_RECIPES_ALL,
            "/pages/recipesCategoryMeales/recipesCategoryMeales": r.PATH.PAGE_MEALS_CATEGORY_ALL,
            "/pages/cate/cate": r.PATH.PAGE_CATE,
            "/pages/flashSale/flashSale": r.PATH.PAGE_FLASH_SALE,
            "/pages/pieceTogether/pieceTogether": r.PATH.PAGE_PIECE_TOGETHER,
            "/pages/tradeList/tradeList": r.PATH.PAGE_TRADE_LIST,
            "/pages/tradePiece/tradePiece": r.PATH.PAGE_TRADE_PIECE,
            "/pages/special/special": r.PATH.PAGE_SPECIAL,
            "/pages/newZone/newZone": r.PATH.PAGE_SPECIAL_NEW_COMER,
            "/pages/download/download": r.PATH.PAGE_DOWNLOAD,
            "/pages/feedback/feedback": r.PATH.PAGE_FEEDBACK,
            "/pages/loginChoose/loginChoose": r.PATH.PAGE_LOGIN_CHOOSE,
            "/pages/vip/vip": r.PATH.PAGE_VIP,
            "/pages/vipPackage/vip/vip": r.PATH.PAGE_VIP,
            "/pages/vipPay/vipPay": r.PATH.PAGE_VIP_PAY,
            "/pages/vipProducts/vipProducts": r.PATH.PAGE_VIP_PRODUCTS,
            "/pages/vipPayResult/vipPayResult": r.PATH.PAGE_VIP_PAY_RESULT,
            "/pages/giftEarn/giftEarn": r.PATH.PAGE_GIFT_EARN,
            "/pages/giftReceive/giftReceive": r.PATH.PAGE_GIFT_RECEIVE,
            "/pages/acceptDetail/acceptDetail": r.PATH.PAGE_ACCEPT_DETAIL,
            "/pages/leaveMessage/leaveMessage": r.PATH.PAGE_LEAVE_MSG,
            "/pages/addMessage/addMessage": r.PATH.PAGE_ADD_MSG,
            "/pages/msgResult/msgResult": r.PATH.PAGE_ADD_MSG_RESULT,
            "/pages/couponsActivity/couponsActivity": r.PATH.PAGE_COUPON_ACTIVITY,
            "/pages/spellLuckRedPacket/spellLuckRedPacket": r.PATH.PAGE_LUCK_RED_PACKET,
            "/pages/mainPackage/productDetail/productDetail": r.PATH.PAGE_PRODUCT_DETAIL,
            "/pages/mainPackage/special/special": r.PATH.PAGE_SPECIAL,
            "/pages/mainPackage/special/specialNewComer": r.PATH.PAGE_SPECIAL_NEW_COMER
        };
        t.MAP_PATH = o;
    },
    a9e0: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {}, o = {}, i = function(e) {
            r[e] && (r[e].forEach(function(e) {
                return e.reject();
            }), delete r[e], delete o[e]);
        }, a = function(e) {
            var t = [ "nars", "sesi", "algoId", "image", "pageid", "cid", "product_id", "api_version", "app_client_id", "app_version", "channel", "device_token", "h5_source", "openid", "city_number", "latitude", "longitude", "uid", "s_id", "applet_source" ], n = "";
            for (var r in e) !t.includes(r) && e[r] && (n += e[r] + "_");
            return n;
        }, c = {}, s = {}, u = {
            add: function(e, t, n) {
                !r[e] || Array.isArray(r[e]) && 0 === r[e].length ? (r[e] = [], o[e] = {
                    task: t(),
                    reject: n
                }) : r[e].push({
                    task: t,
                    reject: n
                });
            },
            remove: i,
            abort: function(e) {
                if (e) return o[e].task.abort(), o[e].reject(), r[e].forEach(function(e) {
                    return e.reject();
                }), delete r[e], void delete o[e];
                var t = Object.keys(o);
                t.length && (t.forEach(function(e) {
                    return o[e].task.abort();
                }), o = {}, r = {});
            },
            has: function(e) {
                return r[e];
            },
            refresh: function(e) {
                var t = r[e];
                t && Array.isArray(t) && (t.length > 1 ? r[e].shift().task() : i(e));
            },
            preFetchIntercept: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0;
                return new Promise(function(r) {
                    var o, i, s, u = e.preFetchList, l = e.isPreFetch, f = e.url, p = e.data;
                    if (null === u || void 0 === u ? void 0 : u.includes(f)) {
                        if (l) l && !t && (c = {}), c.url = f, c.data = p, t && !t.fail ? (null === (o = c) || void 0 === o ? void 0 : o.realResolve) ? (c.realResolve(t), 
                        c = {}) : c.res = t : t && t.fail && (c.fail = !0); else if (f === (null === (i = c) || void 0 === i ? void 0 : i.url) && n && a(c.data) === a(p) && !(null === (s = c) || void 0 === s ? void 0 : s.fail)) {
                            var d, h;
                            (null === (d = c) || void 0 === d ? void 0 : d.res) ? (n(null === (h = c) || void 0 === h ? void 0 : h.res), 
                            c = {}) : c.realResolve = n, r(!0);
                        }
                    } else l && r(!0);
                    r();
                });
            },
            checkRandomIntercept: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0;
                return new Promise(function(o) {
                    if (n) if (t && e) {
                        var i = String(t).substr(-6), a = {
                            count: 0,
                            barrier: {
                                passRatio: Number(i[0]) / 10 || 0,
                                maxCount: Number(i[1]) || 0,
                                duration: Number(i.substr(-4))
                            },
                            res: n
                        };
                        s[e] = a;
                    } else s[e] && (s[e] = void 0); else if (s[e]) {
                        var c = s[e] || {}, u = c.count, l = c.barrier, f = c.res, p = l.passRatio;
                        if (u < l.maxCount) {
                            var d = Math.random() > p;
                            d && (s[e] = {
                                count: u + 1,
                                barrier: l,
                                res: f
                            }, r && f && r(f)), o(d);
                        } else o(!1);
                    }
                    o(!1);
                });
            }
        };
        t.default = u;
    },
    aba5: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.apiGetCity = function(e) {
            return r.pythonHttp.get("api/v2/user/location/city/", e);
        }, t.apiGetLocationSearch = function(e) {
            return r.pythonHttp.get("api/v1/user/location/search/", e);
        }, t.apiGetLocation = function(e) {
            return r.pythonHttp.get("api/v1/user/location/", e);
        }, t.apiGetLocationAround = function(e) {
            return r.pythonHttp.get("api/v1/user/location/around/", e);
        }, t.apiGetLocationCheck = function(e) {
            return r.pythonHttp.get("api/v1/user/location/check/", e);
        }, t.apiGetAddressList = function() {
            return r.pythonHttp.get("api/v1/user/address/", {
                source_type: 5
            });
        }, t.apiUpdateAddress = function(e) {
            return r.pythonHttp.post("api/v1/user/address/upsert/", e);
        }, t.apiGetAddressLabels = function() {
            return r.pythonHttp.get("api/v1/user/address/label/", {
                isBridge: !1
            }, {
                showMsg: !1
            });
        }, t.apiCheckAddressvalid = function(e) {
            return r.pythonHttp.post("api/v1/user/address/check/", {
                address_station_id: e
            });
        }, t.apiRemoveAddress = function(e) {
            return r.pythonHttp.post("api/v1/user/address/delete/", e);
        }, t.addressUpsertDefault = function(e) {
            return r.pythonHttp.post("api/v1/user/address/default/upsert/", e);
        }, t.apiRefreshLocation = function(e) {
            return r.pythonHttp.get("api/v2/user/location/refresh/", e);
        }, t.apiGetLocationDistance = function(e) {
            return r.javaUserHttp.get("userportal-service/api/v1/user/address/tips", e);
        };
        var r = n("5ee7");
    },
    aeea1: function(e, t, n) {
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MAP_NATIVE_PATH = void 0;
        var o, i = n("f14d"), a = (o = {}, r(o, i.PATH.PAGE_HOME, {
            url: "ddxq://product/home",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_CART, {
            url: "ddxq://cart/daimaicai",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_LOGIN, {
            url: "ddxq://login",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_MINE, {
            url: "ddxq://ddmc/mine/main",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_PRODUCT_DETAIL, {
            url: "ddxq://product/detail",
            mpKeys: {
                product_id: "id",
                id: "id"
            }
        }), r(o, i.PATH.PAGE_GOOD_PACKAGE, {
            url: "ddxq://product/list",
            mpKeys: {
                category_id: "id"
            }
        }), r(o, i.PATH.PAGE_ADDRESS_LOCAL, {
            url: "ddxq://address/select",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_LOCAL, {
            url: "ddxq://address/add",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_SEARCH, {
            url: "ddxq://product/search",
            mpKeys: {
                activity_id: "activity_id",
                search_key: "search_key"
            }
        }), r(o, i.PATH.PAGE_LEADER_BOARD, {
            url: "ddxq://product/rankingList",
            mpKeys: {
                listId: "cate_id",
                cate_name: "cate_name",
                rankCardId: "rank_card_id",
                list_suffix: "list_suffix"
            }
        }), r(o, i.PATH.PAGE_ORDERS, {
            url: "ddxq://order/list",
            mpKeys: {
                type: "state"
            }
        }), r(o, i.PATH.PAGE_ORDER_DETAIL, {
            url: "ddxq://order/detail",
            mpKeys: {
                order_number: "id"
            }
        }), r(o, i.PATH.PAGE_COMMENT_ADD, {
            url: "ddxq://orderComment",
            mpKeys: {
                order_number: "order_number"
            }
        }), r(o, i.PATH.PAGE_COMMENT_PRODUCT, {
            url: "ddxq://ddmc/comment/product/comment/list",
            mpKeys: {
                product_id: "product_id",
                product_name: "product_name"
            }
        }), r(o, i.PATH.PAGE_COMMENT_IMAGE, {
            url: "ddxq://ddmc/comment/product/buyersshow/list",
            mpKeys: {
                product_id: "product_id",
                product_name: "product_name"
            }
        }), r(o, i.PATH.PAGE_MAKE_ORDER, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_MAKE_ORDER_NOTE, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_MAKE_ORDER_PRODUCT_LIST, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_USE_COUPON, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_REFUND, {
            url: "ddxq://aftersale",
            mpKeys: {
                state: "state"
            }
        }), r(o, i.PATH.PAGE_REFUND_APPLY, {
            url: "ddxq://ddmc/aftersale/apply",
            mpKeys: {
                product_id: "product_id",
                order_number: "order_number",
                number: "product_number"
            }
        }), r(o, i.PATH.PAGE_REFUND_RESULT, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_ACCOUNT, {
            url: "ddxq://ddmc/setting/main",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_ABOUT, {
            url: "ddxq://ddmc/setting/about",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_REFUND_CYCLE, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_REFUND_DETAIL, {
            url: "ddxq://ddmc/aftersale/detail",
            mpKeys: {
                refund_id: "refund_id"
            }
        }), r(o, i.PATH.PAGE_SECURITY, {
            url: "ddxq://ddmc/setting/security",
            mpKeys: {
                hasPayPassword: "hasPayPassword"
            }
        }), r(o, i.PATH.PAGE_PRIVACY, {
            url: "ddxq://ddmc/setting/privacy",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_MOBILE_AUTH, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_PAYMENT_PASS, {
            url: "ddxq://ddmc/setting/security/pay/password",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_GIFT_CARD_TRANSACTIONS, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_PAY_RESULT, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_USER_COUPON, {
            url: "ddxq://coupon/list",
            mpKeys: {
                state: "state"
            }
        }), r(o, i.PATH.PAGE_ADDRESS, {
            url: "ddxq://address/list",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_ADDRESS_CREATE, {
            url: "ddxq://address/add",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_WEB_VIEW, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_ORDER_STATE, {
            url: "ddxq://ddmc/order/status",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_CONTACT_HELP, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_RECIPES_PUSH, {
            url: "ddxq://recipe/recommendByProduct",
            mpKeys: {
                product_id: "id"
            }
        }), r(o, i.PATH.PAGE_RECIPES_AUTHOR, {
            url: "ddxq://ddmc/recipe/author",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_RECIPES_DETAIL, {
            url: "ddxq://recipe/detail",
            mpKeys: {
                recipe_id: "id",
                product_id: "product_id"
            }
        }), r(o, i.PATH.PAGE_MEALS_ALL, {
            url: "ddxq://recipe/recommendByProduc",
            mpKeys: {
                id: "id",
                title: "title"
            }
        }), r(o, i.PATH.PAGE_RECIPES_SEARCH, {
            url: "ddxq://recipe/search",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_RECIPES_ALL, {
            url: "ddxq://recipe/home",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_MEALS_CATEGORY_ALL, {
            url: "ddxq://recipe/category",
            mpKeys: {
                id: "",
                title: ""
            }
        }), r(o, i.PATH.PAGE_CATE, {
            url: "ddxq://product/category",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_FLASH_SALE, {
            url: "ddxq://product/panic",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_PIECE_TOGETHER, {
            url: "ddxq://ddmc/product/activity/common",
            mpKeys: {
                activity_id: "activity_id",
                activity_name: "activity_name",
                activity_type: "condition_num"
            }
        }), r(o, i.PATH.PAGE_COMBINATION_PRODUCT, {
            url: "ddxq://ddmc/product/combination",
            mpKeys: {
                activity_id: "activity_id",
                activity_name: "activity_name",
                activity_type: ""
            }
        }), r(o, i.PATH.PAGE_TRADE_LIST, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_TRADE_PIECE, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_DEVELOPER, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_SPECIAL, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_SPECIAL_NEW_COMER, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_DOWNLOAD, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_FEEDBACK, {
            url: "ddxq://ddmc/feedback/main",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_LOGIN_CHOOSE, {
            url: "ddxq://login",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_VIP, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_VIP_PAY, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_VIP_PRODUCTS, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_VIP_PAY_RESULT, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_VIP_PAY_CARD_SIGN_DETAIL, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_REGULAR_BUY_LIST, {
            url: "ddxq://product/regularBuy/list",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_COMPENSATE_REMARK, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_GIFT_EARN, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_GIFT_RECEIVE, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_ACCEPT_DETAIL, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_LIKE_PRODUCT, {
            url: "ddxq://ddmc/product/similar",
            mpKeys: {
                product_id: "product_id"
            }
        }), r(o, i.PATH.PAGE_LEAVE_MSG, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_LEAVE_MSG_LIST, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_ADD_MSG, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_ADD_MSG_RESULT, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_HOARDLOTTERY, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_HOARDLOTTERY_RANK, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_HOARDLOTTERY_TICKET, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_HOARDLOTTERY_AWARD, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_USER_INFO, {
            url: "ddxq://ddmc/mine/info",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_USER_GENDER, {
            url: "ddxq://ddmc/mine/sex",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_USER_NAME, {
            url: "ddxq://ddmc/mine/nickName",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_GIFT_CARD, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_QUESTIONS, {
            url: "ddxq://ddmc/product/questionList",
            mpKeys: {
                product_id: "id",
                product_name: "product_name"
            }
        }), r(o, i.PATH.PAGE_INTEGRAL_LOTTERY, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_RECORD_LOTTERY, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_CARD_LOTTERY, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_CARD_LOTTERY_RECORD, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_COUPON_ACTIVITY, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_LUCK_RED_PACKET, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_FARM_INVITE, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_LIVE_SHARE, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_CUMULATIVE_ORDERS, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_SHARE_HELP_HOME, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_SHARE_HELP_HELP_RECORD, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_SHARE_HELP_ATY_RULE, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_SHARE_HELP_ATY_RECORD, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_SHARE_HELP_ATY_LIST, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_BUY_COUPONS_INDEX, {
            url: "",
            mpKeys: {}
        }), r(o, i.PATH.PAGE_BUY_COUPONS_RECORDS, {
            url: "",
            mpKeys: {}
        }), o);
        t.MAP_NATIVE_PATH = a;
    },
    b313: function(e, t, n) {
        var r = String.prototype.replace, o = /%20/g, i = n("d233"), a = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        };
        e.exports = i.assign({
            default: a.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return r.call(e, o, "+");
                },
                RFC3986: function(e) {
                    return String(e);
                }
            }
        }, a);
    },
    b50d: function(e, t, n) {
        var r = n("c532"), o = n("467f"), i = n("7aac"), a = n("30b5"), c = n("83b9"), s = n("c345"), u = n("3934"), l = n("2d83");
        e.exports = function(e) {
            return new Promise(function(t, n) {
                var f = e.data, p = e.headers;
                r.isFormData(f) && delete p["Content-Type"];
                var d = new XMLHttpRequest();
                if (e.auth) {
                    var h = e.auth.username || "", v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                    p.Authorization = "Basic " + btoa(h + ":" + v);
                }
                var _ = c(e.baseURL, e.url);
                if (d.open(e.method.toUpperCase(), a(_, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, 
                d.onreadystatechange = function() {
                    if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                        var r = "getAllResponseHeaders" in d ? s(d.getAllResponseHeaders()) : null, i = {
                            data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
                            status: d.status,
                            statusText: d.statusText,
                            headers: r,
                            config: e,
                            request: d
                        };
                        o(t, n, i), d = null;
                    }
                }, d.onabort = function() {
                    d && (n(l("Request aborted", e, "ECONNABORTED", d)), d = null);
                }, d.onerror = function() {
                    n(l("Network Error", e, null, d)), d = null;
                }, d.ontimeout = function() {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(l(t, e, "ECONNABORTED", d)), 
                    d = null;
                }, r.isStandardBrowserEnv()) {
                    var g = (e.withCredentials || u(_)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                    g && (p[e.xsrfHeaderName] = g);
                }
                if ("setRequestHeader" in d && r.forEach(p, function(e, t) {
                    void 0 === f && "content-type" === t.toLowerCase() ? delete p[t] : d.setRequestHeader(t, e);
                }), r.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), 
                e.responseType) try {
                    d.responseType = e.responseType;
                } catch (t) {
                    if ("json" !== e.responseType) throw t;
                }
                "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), 
                "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), 
                e.cancelToken && e.cancelToken.promise.then(function(e) {
                    d && (d.abort(), n(e), d = null);
                }), f || (f = null), d.send(f);
            });
        };
    },
    b553: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            namespaced: !0,
            state: {
                name: ""
            },
            mutations: {
                SET_NAME: function(e, t) {
                    e.name = t;
                }
            },
            actions: {
                setName: function(e, t) {
                    (0, e.commit)("SET_NAME", t);
                }
            }
        };
        t.default = r;
    },
    b7c7: function(e, t, n) {
        (function(e) {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : _typeof(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
                })(e);
            }
            function o(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        function a(e) {
                            o(s, r, i, a, c, "next", e);
                        }
                        function c(e) {
                            o(s, r, i, a, c, "throw", e);
                        }
                        var s = e.apply(t, n);
                        a(void 0);
                    });
                };
            }
            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function(t) {
                        s(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            function f(e, t, n) {
                return t && l(e.prototype, t), n && l(e, n), e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var p = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a")), d = new (function() {
                function t() {
                    u(this, t), this.version = "1.0", this.prefix = "DDMC", this.timePrefix = "@TIME_MARK@";
                }
                return f(t, [ {
                    key: "initParams",
                    value: function(e) {
                        return e.data = {
                            originData: e.data
                        }, "expire" in e && "number" == typeof e.expire && (e.data.expire = new Date().getTime() + 36e5 * e.expire), 
                        c(c({
                            async: e.async || !1
                        }, e), {}, {
                            key: "".concat(this.prefix, "_").concat(this.version, "_").concat(e.key.toUpperCase())
                        });
                    }
                }, {
                    key: "checkExpire",
                    value: function(t, n) {
                        return !(n && n > new Date().getTime() && (e.removeStorageSync(t.key), 1));
                    }
                }, {
                    key: "load",
                    value: function(t) {
                        var n = this;
                        if ((t = this.initParams(t)).async) return new Promise(function(r, o) {
                            e.getStorage(c(c({}, t), {}, {
                                success: function(e) {
                                    r(n.checkExpire(t, e && e.expire || 0) ? e.data && e.data.originData : null);
                                },
                                fail: function(e) {
                                    o();
                                }
                            }));
                        }).catch(function() {});
                        var r = e.getStorageSync(t.key);
                        return this.checkExpire(t, r && r.expire || 0) ? r.originData : null;
                    }
                }, {
                    key: "loadAsync",
                    value: function(e) {
                        var t = this;
                        return new Promise(function(n, r) {
                            n(t.load(e));
                        });
                    }
                }, {
                    key: "save",
                    value: function(t) {
                        return (t = this.initParams(t)).async ? new Promise(function(n, r) {
                            e.setStorage(c(c({}, t), {}, {
                                complete: function(e) {
                                    "setStorage:ok" === e.errMsg ? n() : r();
                                }
                            }));
                        }).catch(function() {}) : e.setStorageSync(t.key, t.data);
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        var t = this;
                        return new Promise(function() {
                            var n = i(p.default.mark(function n(o, i) {
                                var a, s, u;
                                return p.default.wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                      case 0:
                                        return a = e.data, n.next = 3, t.load({
                                            key: e.key,
                                            async: !0
                                        });

                                      case 3:
                                        if (n.t0 = n.sent, n.t0) {
                                            n.next = 6;
                                            break;
                                        }
                                        n.t0 = {};

                                      case 6:
                                        s = n.t0, "object" === r(a) ? (u = c(c({}, s), a), t.save(c(c({}, e), {}, {
                                            data: u
                                        })), o()) : i();

                                      case 8:
                                      case "end":
                                        return n.stop();
                                    }
                                }, n);
                            }));
                            return function(e, t) {
                                return n.apply(this, arguments);
                            };
                        }()).catch(function() {});
                    }
                }, {
                    key: "getStorageInfo",
                    value: function(t) {
                        return t.async ? new Promise(function(t, n) {
                            e.getStorageInfo({
                                success: function(e) {
                                    "getStorageInfo:ok" === e.errMsg ? t(e) : n();
                                }
                            });
                        }).catch(function() {}) : e.getStorageInfoSync();
                    }
                }, {
                    key: "remove",
                    value: function(t) {
                        return (t = this.initParams(t)).async ? new Promise(function(n, r) {
                            e.removeStorage(c(c({}, t), {}, {
                                complete: function(e) {
                                    "removeStorage:ok" === e.errMsg ? n() : r();
                                }
                            }));
                        }).catch(function() {}) : e.removeStorageSync(t.key);
                    }
                }, {
                    key: "clear",
                    value: function() {
                        var t = !0;
                        try {
                            e.clearStorageSync();
                        } catch (e) {
                            t = !1;
                        }
                        return t;
                    }
                } ]), t;
            }())();
            t.default = d;
        }).call(this, n("543d").default);
    },
    b84e: function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        function a(e) {
                            o(s, r, i, a, c, "next", e);
                        }
                        function c(e) {
                            o(s, r, i, a, c, "throw", e);
                        }
                        var s = e.apply(t, n);
                        a(void 0);
                    });
                };
            }
            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function(t) {
                        s(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PAY_MESSAGE = t.repay = t.pay = void 0;
            var u = r(n("a34a")), l = n("6ddb"), f = n("452f"), p = r(n("0613")), d = n("c8cf"), h = {
                SUCCESS: "SUCCESS",
                FAIL: "FAIL",
                CANCEL: "CANCEL",
                TIME_OUT: "TIME_OUT"
            };
            t.PAY_MESSAGE = h;
            var v = function(e) {
                var t = "", n = e.errMsg;
                return e.resultCode, "requestPayment:ok" === n ? t = h.SUCCESS : (t = h.FAIL, n.indexOf("requestPayment:fail cancel") > -1 && (t = h.CANCEL)), 
                {
                    errMsg: t
                };
            }, _ = function(t) {
                var n = t.pay_url, r = t.order_number;
                return t.redirect_url, t.pay_type, new Promise(function(t, o) {
                    if ("success" === n) t({
                        success: !0,
                        order_number: r,
                        errMsg: h.SUCCESS
                    }); else if ("fail" !== n && n) {
                        var i = null, a = i = JSON.parse(n), s = a.package, u = a.signType, f = a.sign, d = a.nonceStr;
                        i = {
                            timeStamp: "".concat(i.timeStamp),
                            nonceStr: d,
                            package: s,
                            signType: u,
                            paySign: f
                        }, e.requestPayment || o();
                        var _ = !1;
                        e.requestPayment(c(c({}, i), {}, {
                            success: function() {
                                for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                                var i = n[0];
                                _ = !0, t(c({
                                    success: !0,
                                    order_number: r
                                }, v(i)));
                            },
                            fail: function() {
                                for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                                var i = n[0];
                                _ = !0, t(c({
                                    success: !1,
                                    order_number: r
                                }, v(i)));
                            },
                            complete: function() {
                                _ = !0;
                                for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                                var i = n[0], a = p.default.state.globalData.sys.version;
                                (0, l.versionCompare)(a, "6.5.2") <= 0 && "requestPayment:cancel" === i.errMsg && t(c({
                                    success: !1,
                                    order_number: r
                                }, v(i)));
                            }
                        })), setTimeout(function() {
                            _ || t({
                                success: !1,
                                order_number: r,
                                errMsg: h.TIME_OUT
                            });
                        }, 3e4);
                    } else t({
                        success: !1,
                        order_number: r,
                        errMsg: h.FAIL
                    });
                });
            };
            t.pay = _;
            t.repay = function(e, t) {
                return arguments.length > 2 && void 0 !== arguments[2] && arguments[2], new Promise(function() {
                    var t = i(u.default.mark(function t(n, r) {
                        var o, i, a, s, l;
                        return u.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return o = {
                                    order_number: e
                                }, o.pay_type = d.PAY_TYPE.WX_APPLET, t.next = 4, (0, f.apiPostOrderRepay)(c(c({}, o), {}, {
                                    isBridge: !1
                                }));

                              case 4:
                                if (i = t.sent, a = i.data, s = i.msg, !a) {
                                    t.next = 20;
                                    break;
                                }
                                return t.prev = 8, t.next = 11, _(c(c({}, a), {}, {
                                    pay_type: o.pay_type
                                }));

                              case 11:
                                l = t.sent, n(l), t.next = 18;
                                break;

                              case 15:
                                t.prev = 15, t.t0 = t.catch(8), n({
                                    success: !1
                                });

                              case 18:
                                t.next = 21;
                                break;

                              case 20:
                                n({
                                    success: !1,
                                    msg: s
                                });

                              case 21:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 8, 15 ] ]);
                    }));
                    return function(e, n) {
                        return t.apply(this, arguments);
                    };
                }());
            };
        }).call(this, n("543d").default);
    },
    b9cd: function(e, t, n) {},
    bbdd: function(e, t, n) {
        var r = function() {
            return this || "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)) && self;
        }() || Function("return this")(), o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0, i = o && r.regeneratorRuntime;
        if (r.regeneratorRuntime = void 0, e.exports = n("96cf"), o) r.regeneratorRuntime = i; else try {
            delete r.regeneratorRuntime;
        } catch (e) {
            r.regeneratorRuntime = void 0;
        }
    },
    bc3a: function(e, t, n) {
        e.exports = n("cee4");
    },
    bfa6: function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t) {
                return u(e) || s(e, t) || a(e, t) || i();
            }
            function i() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function a(e, t) {
                if (e) {
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0;
                }
            }
            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function s(e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [], r = !0, o = !1, i = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), 
                        !t || n.length !== t); r = !0) ;
                    } catch (e) {
                        o = !0, i = e;
                    } finally {
                        try {
                            r || null == c.return || c.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                    return n;
                }
            }
            function u(e) {
                if (Array.isArray(e)) return e;
            }
            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        p(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function p(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function d(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o);
            }
            function h(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        function i(e) {
                            d(c, r, o, i, a, "next", e);
                        }
                        function a(e) {
                            d(c, r, o, i, a, "throw", e);
                        }
                        var c = e.apply(t, n);
                        i(void 0);
                    });
                };
            }
            function v(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "wgs84";
                e.getLocation({
                    type: n,
                    success: function(e) {
                        P.default.save({
                            key: b.default.LOCATION_ADDRESS_CATCH,
                            data: {
                                localResCatch: e
                            }
                        }), t && t(e);
                    },
                    fail: function(e) {
                        if (console.log(e), R.isDev) {
                            var n = (P.default.load({
                                key: b.default.LOCATION_ADDRESS_CATCH,
                                async: !1
                            }) || {}).localResCatch;
                            if (n && (e || {}).errMsg.indexOf("getLocation:fail") > -1) return void (t && t(n));
                        }
                        t && t(void 0, e);
                    }
                });
            }
            function _() {
                return new Promise(function(t) {
                    e.getSetting({
                        success: function(e) {
                            t(e.authSetting && !1 === e.authSetting[w]);
                        },
                        fail: function(e) {
                            console.log(e), t(!1);
                        }
                    });
                });
            }
            function g() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
                    return {};
                };
                e.getSetting(), v(function() {
                    var n = h(E.default.mark(function n(r, o) {
                        var i, a, c, s, u;
                        return E.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (!r) {
                                    n.next = 11;
                                    break;
                                }
                                if (i = r || {}, a = i.latitude, c = void 0 === a ? 0 : a, s = i.longitude, u = void 0 === s ? 0 : s, 
                                n.t0 = t, !n.t0) {
                                    n.next = 9;
                                    break;
                                }
                                return n.t1 = t, n.next = 7, k(c, u);

                              case 7:
                                n.t2 = n.sent, (0, n.t1)(n.t2);

                              case 9:
                                n.next = 12;
                                break;

                              case 11:
                                _().then(function() {
                                    var n = h(E.default.mark(function n(r) {
                                        return E.default.wrap(function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                              case 0:
                                                if (!r) {
                                                    n.next = 4;
                                                    break;
                                                }
                                                e.showModal({
                                                    content: "您已拒绝获取定位授权，将无法获取您的位置",
                                                    cancelText: "知道了",
                                                    confirmText: "重新打开",
                                                    success: function() {
                                                        var n = h(E.default.mark(function n(r) {
                                                            return E.default.wrap(function(n) {
                                                                for (;;) switch (n.prev = n.next) {
                                                                  case 0:
                                                                    if (!r.confirm || !e.openSetting) {
                                                                        n.next = 4;
                                                                        break;
                                                                    }
                                                                    e.openSetting({
                                                                        success: function() {
                                                                            var e = h(E.default.mark(function e(n) {
                                                                                return E.default.wrap(function(e) {
                                                                                    for (;;) switch (e.prev = e.next) {
                                                                                      case 0:
                                                                                        if (!n.authSetting[w]) {
                                                                                            e.next = 4;
                                                                                            break;
                                                                                        }
                                                                                        g(t), e.next = 11;
                                                                                        break;

                                                                                      case 4:
                                                                                        if (e.t0 = t, !e.t0) {
                                                                                            e.next = 11;
                                                                                            break;
                                                                                        }
                                                                                        return e.t1 = t, e.next = 9, k(0, 0);

                                                                                      case 9:
                                                                                        e.t2 = e.sent, (0, e.t1)(e.t2);

                                                                                      case 11:
                                                                                      case "end":
                                                                                        return e.stop();
                                                                                    }
                                                                                }, e);
                                                                            }));
                                                                            return function(t) {
                                                                                return e.apply(this, arguments);
                                                                            };
                                                                        }()
                                                                    }), n.next = 11;
                                                                    break;

                                                                  case 4:
                                                                    if (n.t0 = t, !n.t0) {
                                                                        n.next = 11;
                                                                        break;
                                                                    }
                                                                    return n.t1 = t, n.next = 9, k(0, 0);

                                                                  case 9:
                                                                    n.t2 = n.sent, (0, n.t1)(n.t2);

                                                                  case 11:
                                                                  case "end":
                                                                    return n.stop();
                                                                }
                                                            }, n);
                                                        }));
                                                        return function(e) {
                                                            return n.apply(this, arguments);
                                                        };
                                                    }()
                                                }), n.next = 11;
                                                break;

                                              case 4:
                                                if (n.t0 = t, !n.t0) {
                                                    n.next = 11;
                                                    break;
                                                }
                                                return n.t1 = t, n.next = 9, k(0, 0);

                                              case 9:
                                                n.t2 = n.sent, (0, n.t1)(n.t2);

                                              case 11:
                                              case "end":
                                                return n.stop();
                                            }
                                        }, n);
                                    }));
                                    return function(e) {
                                        return n.apply(this, arguments);
                                    };
                                }());

                              case 12:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }));
                    return function(e, t) {
                        return n.apply(this, arguments);
                    };
                }());
            }
            function m(e) {
                return y.apply(this, arguments);
            }
            function y() {
                return (y = h(E.default.mark(function e(t) {
                    var n, r, i, a, c, s, u, l, f, p, d, h, v, _, g, m, y, O, S, R;
                    return E.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, P.default.load({
                                key: b.default.LOCATION,
                                async: !0
                            });

                          case 2:
                            if (!(n = e.sent) || !n.location) {
                                e.next = 21;
                                break;
                            }
                            return r = n.location.location || [], i = o(r, 2), a = i[0], c = void 0 === a ? 0 : a, 
                            s = i[1], u = void 0 === s ? 0 : s, e.next = 7, (0, A.apiRefreshLocation)({
                                longitude: c,
                                latitude: u
                            });

                          case 7:
                            if ((l = e.sent).success) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return");

                          case 10:
                            return f = l.data, p = f.station_info, d = f.station_id, h = void 0 === d ? "" : d, 
                            v = f.fake_station_id, _ = void 0 === v ? "" : v, g = f.village_id, m = void 0 === g ? "" : g, 
                            y = f.city_number, O = void 0 === y ? "" : y, n.city_number = O, n.station_id = h || _, 
                            n.fake_station_id = _, n.village_id = m, p && (S = p || {}, R = S.city_name, n.city_name = R), 
                            P.default.save({
                                key: b.default.LOCATION,
                                data: n,
                                async: !0
                            }), T.default.commit("globalData/update", {
                                locationInfo: n,
                                isFakeStation: !h
                            }), t && t(), e.abrupt("return", n);

                          case 21:
                            return e.abrupt("return", n);

                          case 22:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }))).apply(this, arguments);
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getPureLocation = v, t.checkLocationRejected = _, t.getLocation = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "wgs84";
                _().then(function(r) {
                    r ? e.openSetting({
                        success: function() {
                            var e = h(E.default.mark(function e() {
                                var r;
                                return E.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, _();

                                      case 2:
                                        (r = e.sent) ? t && t(void 0) : v(t, n);

                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                            }));
                            return function() {
                                return e.apply(this, arguments);
                            };
                        }(),
                        fail: function(e) {
                            console.log(e), t && t(void 0, e);
                        }
                    }) : v(t, n);
                });
            }, t.getLocationStationId = g, t.refreshLocation = m, t.checkLocationReady = function() {
                var e = getCurrentPages(), t = e[e.length - 1];
                if (S.WHITE_LOCATION_START.indexOf("/".concat(null === t || void 0 === t ? void 0 : t.route)) > -1) {
                    if (T.default.state.globalData.locationReady) return;
                    P.default.load({
                        key: b.default.LOCATION,
                        async: !0
                    }).then(function(e) {
                        e && e.location && !O.default.isApp ? T.default.commit("globalData/update", {
                            locationReady: !0
                        }) : g();
                    });
                }
            }, t.getCheckStationId = t.locationScope = void 0;
            var E = r(n("a34a")), A = n("aba5"), b = r(n("67c5")), P = r(n("b7c7")), O = r(n("eb8e")), T = r(n("0613")), S = n("c6a3"), R = n("8288"), C = "", w = C = "scope.userLocation";
            t.locationScope = w;
            var k = function() {
                var e = h(E.default.mark(function e() {
                    var t, n, r, o, i, a, c, s, u, l, p, d, h, v, _, g = arguments;
                    return E.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = g.length > 0 && void 0 !== g[0] ? g[0] : 0, n = g.length > 1 && void 0 !== g[1] ? g[1] : 0, 
                            e.next = 4, (0, A.apiGetLocationCheck)({
                                lat: t,
                                lng: n,
                                user_city: 1
                            });

                          case 4:
                            if ((r = e.sent).success) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return", {});

                          case 7:
                            if (o = r.data, i = o.user_city, a = o.fake_station_info, c = o.around_addresses, 
                            s = void 0 === c ? {} : c, u = "", l = "", p = "", d = -1, !t) {
                                e.next = 24;
                                break;
                            }
                            return u = a ? a.id : s.station_id, l = a ? a.city_number || "" : s.city_number || "", 
                            p = a ? (null === a || void 0 === a ? void 0 : a.city_name) || "" : (null === (h = s.location) || void 0 === h ? void 0 : h.city_name) || "", 
                            d = a ? -2 : 1, s.status = d, v = f(f({}, s), {}, {
                                location_status: !0,
                                station_id: u,
                                city_number: l,
                                city_name: p
                            }), P.default.save({
                                key: b.default.LOCATION,
                                data: v
                            }), P.default.save({
                                key: b.default.USER_CITY,
                                data: i
                            }), T.default.commit("globalData/update", {
                                locationInfo: v,
                                locationReady: !0,
                                user_city: i || {}
                            }), m(), e.abrupt("return", v);

                          case 24:
                            return _ = {
                                location_status: !1,
                                status: -1,
                                station_id: a.id || "",
                                city_number: a.city_number || "",
                                city_name: (null === a || void 0 === a ? void 0 : a.city_name) || "",
                                location: null
                            }, P.default.save({
                                key: b.default.LOCATION,
                                data: _
                            }), T.default.commit("globalData/update", {
                                locationInfo: _,
                                locationReady: !0
                            }), e.abrupt("return", _);

                          case 28:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }();
            t.getCheckStationId = k;
        }).call(this, n("543d").default);
    },
    c001: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("213c");
        Object.keys(r).forEach(function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e];
                }
            });
        });
    },
    c0f2: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.apiGetFlashSale = function(e) {
            return r.http.get("productApi/getPanicList", e);
        }, t.apiGetFlashRob = function(e) {
            return r.http.get("activity/limitRob", e);
        }, t.apiGetGoodPackage = function(e) {
            return r.http.get("productApi/getCategory", e);
        }, t.apiGetQuestionAnswer = function(e) {
            return r.http.get("productApi/questionAndAnswerList", e);
        }, t.apiProductGetDetail = function(e, t) {
            return r.http.get("guide-service/productApi/productDetail/info", e, t);
        }, t.apiProductGetSchemaLink = function(e) {
            return r.http.get("guide-service/homeApi/appletJump", e);
        }, t.apiProductGetGuessULike = function(e) {
            return r.http.get("guide-service/productApi/productDetail/gussLike", e);
        }, t.apiProductGetFindSimilar = function(e) {
            return r.http.get("guide-service/productApi/productDetail/similarInfo", e);
        }, t.apiPostMessage = function(e) {
            return r.http.post("productApi/setStockoutNotify", e);
        }, t.apiGetFavorite = function(e) {
            return r.http.get("productApi/myFavorite", e);
        }, t.apiAddFavorite = function(e) {
            return r.http.post("productApi/addFavorite", e);
        }, t.apiCancelFavorite = function(e) {
            return r.http.post("productApi/cancelFavorite", e);
        }, t.apiGetProductsCalendar = function() {
            return r.http.get("newProductLaunch/calendar");
        }, t.apiNewProductSellNotify = function(e) {
            return r.http.post("newProductLaunch/newProductSellNotify", e, o);
        }, t.apiGetMoreProducts = function(e) {
            return r.http.get("newProductLaunch/calendarMore", e);
        }, t.apiGetNewProducts = function(e) {
            return r.http.get("newProductRelease/newProduct", e);
        }, t.apiGetSuperProducts = function(e) {
            return r.http.get("guide-service/newProductRelease/superProduct", e);
        }, t.apiGetProductsFlow = function(e) {
            return r.http.get("guide-service/newProductRelease/productFlow", e);
        }, t.apiGetNewProductsFlow = function(e) {
            return r.http.get("newProductRelease/newProductFlow", e);
        }, t.apiGetSupPanelInfo = function(e) {
            return r.http.get("guide-service/panel/addCartSupPanel", e);
        }, t.apiGetNewOnSaleProducts = function() {
            return r.http.get("guide-service/newProductRelease/shelfProducts");
        }, t.apiGetSimilarRecommend = function(e) {
            return r.http.get("guide-service/productApi/similarRecommend", e);
        }, t.apiProductSimilar = t.apiGetBuyerInfo = void 0;
        var r = n("5ee7"), o = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        t.apiGetBuyerInfo = function(e) {
            return r.http.get("productApi/buyer", e);
        };
        t.apiProductSimilar = function(e) {
            return r.http.get("productApi/similar", e);
        };
    },
    c237: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            namespaced: !0,
            state: {
                product: {},
                productExpore: {},
                guessStart: {
                    time: 0,
                    status: 0
                },
                guessEnd: {
                    time: 0,
                    status: 0
                },
                tabInfo: {
                    title: "",
                    tab_type: -1
                }
            },
            mutations: {
                setProduct: function(e, t) {
                    e.product = t;
                },
                setProductExpore: function(e, t) {
                    e.productExpore = t;
                },
                setGuessStart: function(e, t) {
                    e.guessStart = Object.assign(e.guessStart, t);
                },
                setGuessEnd: function(e, t) {
                    e.guessEnd = Object.assign(e.guessEnd, t);
                },
                setTabInfo: function(e, t) {
                    e.tabInfo = Object.assign(e.tabInfo, t);
                }
            }
        };
        t.default = r;
    },
    c2a8: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("66fd")).default.extend({
            data: function() {
                return {
                    isUserRisk: !1,
                    riskPopMsg: ""
                };
            },
            computed: {
                shareButtonOpenType: function() {
                    return this.isUserRisk ? "" : "share";
                }
            },
            methods: {
                getUserRisk: function(e) {
                    if (!e) return this.isUserRisk = !1, void (this.riskPopMsg = "");
                    this.isUserRisk = e.canTrigger, this.riskPopMsg = e.toastInfo;
                },
                showRiskConfirm: function(e) {
                    var t = {
                        title: "提示",
                        content: e || this.riskPopMsg,
                        contentAlign: "left",
                        submitText: "知道了",
                        submitTextColor: "#333333",
                        cancelText: ""
                    };
                    this.$confirm(t);
                }
            }
        });
        t.default = r;
    },
    c345: function(e, t, n) {
        var r = n("c532"), o = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
        e.exports = function(e) {
            var t, n, i, a = {};
            return e ? (r.forEach(e.split("\n"), function(e) {
                if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), 
                t) {
                    if (a[t] && o.indexOf(t) >= 0) return;
                    a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([ n ]) : a[t] ? a[t] + ", " + n : n;
                }
            }), a) : a;
        };
    },
    c401: function(e, t, n) {
        var r = n("c532");
        e.exports = function(e, t, n) {
            return r.forEach(n, function(n) {
                e = n(e, t);
            }), e;
        };
    },
    c40a: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            EMPTY_LOCATION: "https://img.ddimg.mobi/bc8bff1f317a61631774978009.png",
            EMPTY_CART: "https://img.ddimg.mobi/2539ff89d35aa1631774978083.png",
            VIP_NO_LOGIN: "https://img.ddimg.mobi/318a45b7eed031631774978682.png",
            ERROR_NETWORK: "https://img.ddimg.mobi/30047d697d7fa1631774978458.png",
            COUPON_CELL_RIGHT_HAS_EXPIRED: "https://img.ddimg.mobi/assets/wx/has-expired.png",
            COUPON_CELL_RIGHT_HAS_USED: "https://img.ddimg.mobi/assets/wx/has-used.png",
            COUPON_CELL_RIGHT_HAS_VOIDED: "https://img.ddimg.mobi/assets/wx/has-voided.png",
            EMPTY_COUPON: "https://img.ddimg.mobi/79c1448fb86891631774978625.png",
            EMPTY_SEARCH: "https://img.ddimg.mobi/225c82842890b1631774978547.png",
            EMPTY_ORDER: "https://img.ddimg.mobi/61260e2b82eaf1631774978048.png",
            MINE_HEADER: "https://img.ddimg.mobi/a7515b51fed1c1604906060414.png",
            UNKNOW_PERSON: "https://img.ddimg.mobi/assets/wx/73495da0d58d71515565845351.png",
            DEFAULT_BG: "https://img.ddimg.mobi/default-bg.png",
            COUPON_BG: "https://img.ddimg.mobi/assets/wx/coupons/wICsMV72o9EwtyKPuh8WG1Bp1.png",
            COUPON_BG_NEW: "https://img.ddimg.mobi/assets/wx/NlKBgDS81Mqaxj3ZpF57eHsT.png",
            RECIPES_EMPTY: "https://img.ddimg.mobi/ef150d2c474171631774978426.png",
            RECIPES_SEARCH: "https://img.ddimg.mobi/225c82842890b1631774978547.png",
            LOGO_AND_TAG: "https://img.ddimg.mobi/assets/wx/login-choose-logo-new.png",
            MAKE_ORDER_ADDRESS_LINE: "https://img.ddimg.mobi/35e338e53781589026166160.png",
            MAKE_ORDER_ADDRESS_VIP: "https://img.ddimg.mobi/5422fc0497b021637221636811.png",
            DEFAULT_USER_AVATAR_NEW: "https://img.ddimg.mobi/assets/h5/44b2872a591fe1503888813415.png",
            IMG_APP_SHARE: "https://img.ddimg.mobi/assets/h5/4602b1a87656d1501819113290.png",
            COMMENT_GRAY_HAND: "https://img.ddimg.mobi/assets/h5/gray-hand-1.png",
            COMMENT_GREEN_HAND: "https://img.ddimg.mobi/assets/h5/green-hand-1.png",
            COMMENT_LIKE_HAND: "https://img.ddimg.mobi/assets/h5/like-icon-1.gif",
            RANK_EMPTY: "https://img.ddimg.mobi/assets/h5/hoard-lottery-empty-02.png",
            RANK_EMPTY_TICKET: "https://img.ddimg.mobi/assets/h5/hoard-lottery-empty-01.png",
            FlASH_SALE_SHARE_IMG: "https://img.ddimg.mobi/274e144a114211627269292482.png"
        };
        t.default = r;
    },
    c532: function(e, t, n) {
        function r(e) {
            return "[object Array]" === f.call(e);
        }
        function o(e) {
            return void 0 === e;
        }
        function i(e) {
            return null !== e && "object" === (void 0 === e ? "undefined" : _typeof(e));
        }
        function a(e) {
            if ("[object Object]" !== f.call(e)) return !1;
            var t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype;
        }
        function c(e) {
            return "[object Function]" === f.call(e);
        }
        function s(e, t) {
            if (null !== e && void 0 !== e) if ("object" !== (void 0 === e ? "undefined" : _typeof(e)) && (e = [ e ]), 
            r(e)) for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
        }
        function u() {
            for (var e = {}, t = 0, n = arguments.length; t < n; t++) s(arguments[t], function(t, n) {
                a(e[n]) && a(t) ? e[n] = u(e[n], t) : a(t) ? e[n] = u({}, t) : r(t) ? e[n] = t.slice() : e[n] = t;
            });
            return e;
        }
        var l = n("1d2b"), f = Object.prototype.toString;
        e.exports = {
            isArray: r,
            isArrayBuffer: function(e) {
                return "[object ArrayBuffer]" === f.call(e);
            },
            isBuffer: function(e) {
                return null !== e && !o(e) && null !== e.constructor && !o(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
            },
            isFormData: function(e) {
                return "undefined" != typeof FormData && e instanceof FormData;
            },
            isArrayBufferView: function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
            },
            isString: function(e) {
                return "string" == typeof e;
            },
            isNumber: function(e) {
                return "number" == typeof e;
            },
            isObject: i,
            isPlainObject: a,
            isUndefined: o,
            isDate: function(e) {
                return "[object Date]" === f.call(e);
            },
            isFile: function(e) {
                return "[object File]" === f.call(e);
            },
            isBlob: function(e) {
                return "[object Blob]" === f.call(e);
            },
            isFunction: c,
            isStream: function(e) {
                return i(e) && c(e.pipe);
            },
            isURLSearchParams: function(e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
            },
            forEach: s,
            merge: u,
            extend: function(e, t, n) {
                return s(t, function(t, r) {
                    e[r] = n && "function" == typeof t ? l(t, n) : t;
                }), e;
            },
            trim: function(e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "");
            },
            stripBOM: function(e) {
                return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
            }
        };
    },
    c6a3: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.WHITE_REQUEST_SYNC_LOCATION = t.WHITE_H5_NO_LOGIN = t.WHITE_MONITOR_RESPONSE_DATA = t.WHITE_MONITOR_REQUEST_DATA = t.WHITE_LOGIN_SHARE_OPEN = t.WHITE_SCAN_MISSION = t.WHITE_LOGIN_BEFORE_OPEN = t.WHITE_LOCATION_START = void 0;
        var r = n("f14d"), o = [ r.PATH.PAGE_LUCK_RED_PACKET, r.PATH.PAGE_SHARE_RED_PACKET, r.PATH.PAGE_CATE, r.PATH.PAGE_SPECIAL, r.PATH.PAGE_PRODUCT_DETAIL, r.PATH.PAGE_HOARDLOTTERY, r.PATH.PAGE_GIFT_EARN, r.PATH.PAGE_GIFT_RECEIVE, r.PATH.PAGE_CUMULATIVE_ORDERS, r.PATH.PAGE_WEB_VIEW, r.PATH.PAGE_GAME_WEB_VIEW, r.PATH.PAGE_SHARE_HELP_HOME, r.PATH.PAGE_SHARE_HELP_ATY_LIST, r.PATH.PAGE_BUY_COUPONS_INDEX, r.PATH.PAGE_VIP, r.PATH.PAGE_NEW_FlASHSALE, r.PATH.PAGE_MARKETING_LOTTERY, r.PATH.PAGE_EASY_ORDER ];
        t.WHITE_LOCATION_START = o;
        var i = [ r.PATH.PAGE_VIP, r.PATH.PAGE_VIP_PAY, r.PATH.PAGE_HOARDLOTTERY, r.PATH.PAGE_USER_COUPON, r.PATH.PAGE_COUPON_ACTIVITY, r.PATH.PAGE_DOWNLOAD, r.PATH.PAGE_GAME_WEB_VIEW, r.PATH.PAGE_EASY_ORDER ];
        t.WHITE_LOGIN_BEFORE_OPEN = i;
        var a = [ r.PATH.PAGE_GIFT_EARN, r.PATH.PAGE_GIFT_RECEIVE, r.PATH.PAGE_SHARE_HELP_ATY_LIST, r.PATH.PAGE_SHARE_HELP_HOME, r.PATH.PAGE_SHARE_RED_PACKET, r.PATH.PAGE_NEW_FlASHSALE, r.PATH.PAGE_FLASH_SALE, r.PATH.PAGE_BUY_COUPONS_INDEX ];
        t.WHITE_SCAN_MISSION = a;
        var c = [ r.PATH.PAGE_HOARDLOTTERY, r.PATH.PAGE_COUPON_ACTIVITY ];
        t.WHITE_LOGIN_SHARE_OPEN = c;
        var s = [ "cart/add", "user/getSms" ];
        t.WHITE_MONITOR_REQUEST_DATA = s;
        var u = [ "user/wxAppletMobileDecrypt", "user/getSms" ];
        t.WHITE_MONITOR_RESPONSE_DATA = u;
        var l = [ r.PATH.PAGE_GIFT_WEBVIEW_RECEIVE ];
        t.WHITE_H5_NO_LOGIN = l;
        var f = [ "order/addNewOrder", "productApi/getPanicList", "promocore-service/client/flop/v1/consultFlopV2", "promomission-service/mission/search/v1/searchMissionById", "promocore-service/client/flop/v1/getFlopBaseInfo", "promocore-service/client/flop/v1/triggerFlop", "promocore-service/client/flop/v1/getLastDiscountGoods", "promocore-service/client/flop/v1/triggerFlopV2", "promomission-service/mission/notice/v1/notice" ];
        t.WHITE_REQUEST_SYNC_LOCATION = f;
    },
    c78f: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.env = void 0;
        var o = r(n("67c5")), i = r(n("b7c7")), a = n("8288"), c = "http";
        c = "https:";
        var s = {
            getEnv: function() {
                return a.isDev ? i.default.load({
                    key: o.default.ENV
                }) || "t" : "";
            }
        };
        t.env = s;
        var u = function(e, t) {
            var n = s.getEnv();
            return "p" !== n && n ? t : e;
        }, l = {
            SERVER_API_MAICAI: function() {
                return "".concat(c, "//maicai.api.ddxq.mobi/");
            },
            SERVER_API_MAICAI_PYTHON: function() {
                return "".concat(c, "//sunquan.api.ddxq.mobi/");
            },
            SERVER_API_JAVA_USER: function() {
                return "".concat(c, "//user.api.ddxq.mobi/");
            },
            SERVER_API_PHP_IMG: function() {
                return "".concat(c, "//img.api.ddxq.mobi/");
            },
            SERVER_TIME_TRACK: function() {
                return "".concat(c, "//collect.ddxq.mobi/i.png");
            },
            SERVER_TIME_MONITOR: function() {
                return "".concat(c, "//collect.ddxq.mobi/appinfo");
            },
            SERVER_WX_H5_PAY: function() {
                return "".concat(c, "//payment.api.ddxq.mobi/");
            },
            SERVER_API_FARM: function() {
                return "https://farm.api.ddxq.mobi/";
            },
            SERVER_API_CAPTCHA: function() {
                return "https://captcha.ddxq.mobi?appId=690f7971";
            },
            SERVER_API_TRACK: function() {
                return "http://track.t.dingdongxiaoqu.com/";
            },
            SERVER_GAME_URL: function() {
                return "https://game.m.ddxq.mobi/";
            },
            SERVER_ORCHARD_URL: function() {
                return "https://orchard.m.ddxq.mobi/";
            },
            SERVER_API_TRACK_MAICAI: function() {
                return "".concat(c, "//maicai.api.ddxq.mobi/");
            },
            SERVER_API_GATEWAY: function() {
                return "".concat(c, "//gw.api.ddxq.mobi/");
            },
            SERVER_API_BFF: function() {
                return "".concat(c, "//bffdc.api.ddxq.mobi/");
            },
            SERVER_API_EFFECT: function() {
                return "".concat(c, "//youshu.ddxq.mobi/");
            },
            SERVER_API_GALLERY: function() {
                return "".concat(c, "//gallery.api.ddxq.mobi/");
            },
            SERVER_API_INVOICE: function() {
                return "".concat(c, "//invoice-api.ddxq.mobi/");
            },
            SERVER_API_DATABUS: function() {
                return "".concat(c, "//databus.api.ddxq.mobi/");
            },
            SERVER_CONTACT_URL: function() {
                return "".concat(c, "//im-egoo.ddxq.mobi/");
            },
            SERVER_GIFT_RECEIVE_URL: function() {
                return "".concat(c, "//wx.m.ddxq.mobi/");
            },
            SERVER_MOBITRACK_URL: function() {
                return "".concat(c, "//trackercollect.ddxq.mobi/appInfo/bundle");
            }
        }, f = {
            SERVER_API_MAICAI: function() {
                return u(l.SERVER_API_MAICAI(), "".concat(c, "//maicai.api.").concat(s.getEnv(), ".dingdongxiaoqu.com/"));
            },
            SERVER_API_MAICAI_PYTHON: function() {
                return u(l.SERVER_API_MAICAI_PYTHON(), "".concat(c, "//api7.").concat(s.getEnv(), ".dingdongxiaoqu.com/"));
            },
            SERVER_API_JAVA_USER: function() {
                return u(l.SERVER_API_JAVA_USER(), "".concat(c, "//user.api.").concat(s.getEnv(), ".dingdongxiaoqu.com/"));
            },
            SERVER_API_PHP_IMG: function() {
                return u(l.SERVER_API_PHP_IMG(), "".concat(c, "//img.api.").concat(s.getEnv(), ".dingdongxiaoqu.com/"));
            },
            SERVER_API_FARM: function() {
                return u(l.SERVER_API_FARM(), "http://farm.api.".concat(s.getEnv(), ".dingdongxiaoqu.com/"));
            },
            SERVER_TIME_TRACK: function() {
                return u(l.SERVER_TIME_TRACK(), "".concat(c, "//collect.t.dingdongxiaoqu.com/i.png"));
            },
            SERVER_TIME_MONITOR: function() {
                return u(l.SERVER_TIME_MONITOR(), "".concat(c, "//collect.t.dingdongxiaoqu.com/appinfo"));
            },
            SERVER_WX_H5_PAY: function() {
                return u(l.SERVER_WX_H5_PAY(), l.SERVER_WX_H5_PAY());
            },
            SERVER_API_CAPTCHA: function() {
                return u(l.SERVER_API_CAPTCHA(), "".concat(c, "//captcha.").concat(s.getEnv(), ".dingdongxiaoqu.com?appId=690f7971"));
            },
            SERVER_API_TRACK: function() {
                return u(l.SERVER_API_TRACK(), "http://track.".concat(s.getEnv()).concat("t" === s.getEnv() ? "" : "e", ".dingdongxiaoqu.com/"));
            },
            SERVER_GAME_URL: function() {
                return u(l.SERVER_GAME_URL(), "http://game.m.".concat(s.getEnv(), ".dingdongxiaoqu.com/"));
            },
            SERVER_ORCHARD_URL: function() {
                return u(l.SERVER_ORCHARD_URL(), "http://orchard-m.".concat(s.getEnv(), ".dingdongxiaoqu.com/"));
            },
            SERVER_API_TRACK_MAICAI: function() {
                return u(l.SERVER_API_TRACK_MAICAI(), "http://maicai.api.t.dingdongxiaoqu.com/");
            },
            SERVER_API_GATEWAY: function() {
                return u(l.SERVER_API_GATEWAY(), "".concat(c, "//gw.api.").concat(s.getEnv(), ".dingdongxiaoqu.com/"));
            },
            SERVER_API_BFF: function() {
                return u(l.SERVER_API_BFF(), "".concat(c, "//bffdc.api.t.dingdongxiaoqu.com/"));
            },
            SERVER_API_EFFECT: function() {
                return u(l.SERVER_API_EFFECT(), "".concat(c, "//youshu.t.dingdongxiaoqu.com/"));
            },
            SERVER_API_GALLERY: function() {
                return u(l.SERVER_API_GALLERY(), "http://gallery.api.".concat(s.getEnv(), ".dingdongxiaoqu.com/"));
            },
            SERVER_API_INVOICE: function() {
                return u(l.SERVER_API_INVOICE(), "http://invoice-api-service.te.test.srv.mc.dd/");
            },
            SERVER_API_DATABUS: function() {
                return u(l.SERVER_API_DATABUS(), "http://databus-service.".concat(s.getEnv(), ".dingdongxiaoqu.com/"));
            },
            SERVER_CONTACT_URL: function() {
                return u(l.SERVER_CONTACT_URL(), "http://10.23.33.122/");
            },
            SERVER_GIFT_RECEIVE_URL: function() {
                return u(l.SERVER_GIFT_RECEIVE_URL(), "".concat(c, "//wechat.").concat(s.getEnv(), ".dingdongxiaoqu.com/"));
            },
            SERVER_MOBITRACK_URL: function() {
                return u(l.SERVER_MOBITRACK_URL(), "".concat(c, "//mobitrack.").concat(s.getEnv(), ".dingdongxiaoqu.com/appInfo/bundle"));
            }
        };
        t.default = f;
    },
    c8af: function(e, t, n) {
        var r = n("c532");
        e.exports = function(e, t) {
            r.forEach(e, function(n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
            });
        };
    },
    c8ba: function(e, t) {
        var n;
        n = function() {
            return this;
        }();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && (n = window);
        }
        e.exports = n;
    },
    c8cf: function(e, t, n) {
        var r, o, i, a, c, s, u, l, f, p, d, h;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ACTIVITY_SOURCE = t.TICKET_TYPE = t.SEARCH_SOURCE = t.PRODUCT_COMP_SOURCE = t.ACTIVITY_TYPE = t.COUPON_SELF_STATUS = t.NOTICE_ID = t.LEADER_BORDER_SOURCE = t.COUPON_SCENE_TYPE = t.COUPON_TYPE = t.COUPON_STATUS = t.PAY_TYPE = void 0, 
        t.PAY_TYPE = r, function(e) {
            e[e.ALI_APP = 2] = "ALI_APP", e[e.WX_H5 = 3] = "WX_H5", e[e.WX_APP = 4] = "WX_APP", 
            e[e.H5 = 5] = "H5", e[e.WX_APPLET = 6] = "WX_APPLET", e[e.ALI_APPLET = 25] = "ALI_APPLET", 
            e[e.ALI_WAP = 5] = "ALI_WAP", e[e.PAY_THREE = 10] = "PAY_THREE", e[e.PAY_GAT = 11] = "PAY_GAT", 
            e[e.PAY_OK = 12] = "PAY_OK";
        }(r || (t.PAY_TYPE = r = {})), t.COUPON_STATUS = o, function(e) {
            e[e.DEL = -1] = "DEL", e[e.UN = 0] = "UN", e[e.NEW = 1] = "NEW", e[e.INVALID = 2] = "INVALID", 
            e[e.OVER = 3] = "OVER", e[e.USED = 4] = "USED";
        }(o || (t.COUPON_STATUS = o = {})), t.COUPON_SELF_STATUS = i, function(e) {
            e[e.INVALID = 3] = "INVALID", e[e.OVER = 4] = "OVER";
        }(i || (t.COUPON_SELF_STATUS = i = {})), t.COUPON_TYPE = a, function(e) {
            e[e.DISCOUNT = 1] = "DISCOUNT", e[e.GIFT = 2] = "GIFT", e[e.ONSALE = 3] = "ONSALE";
        }(a || (t.COUPON_TYPE = a = {})), t.COUPON_SCENE_TYPE = c, function(e) {
            e[e.REGISTER = 0] = "REGISTER", e[e.INVITE = 1] = "INVITE", e[e.EVENT = 2] = "EVENT", 
            e[e.SHARE = 3] = "SHARE", e[e.ADMIN = 4] = "ADMIN", e[e.SHARE_RED_PACKETS = 5] = "SHARE_RED_PACKETS", 
            e[e.ACTIVITY_RETURN = 6] = "ACTIVITY_RETURN", e[e.OVERTIME_PAYMENT = 7] = "OVERTIME_PAYMENT", 
            e[e.PURCHASE_STOCKOUT = 8] = "PURCHASE_STOCKOUT", e[e.NEW_YEAR_RED_PACKETS = 9] = "NEW_YEAR_RED_PACKETS", 
            e[e.USER_RECALL = 10] = "USER_RECALL", e[e.FESTIVAL_LOTTERY = 11] = "FESTIVAL_LOTTERY", 
            e[e.USER_VIP = 12] = "USER_VIP", e[e.SHARE_AWARD = 14] = "SHARE_AWARD", e[e.USER_RECHARGE_SUCCESS = 13] = "USER_RECHARGE_SUCCESS", 
            e[e.USER_CARD_LOTTERY = 15] = "USER_CARD_LOTTERY", e[e.USER_APP_RECEIVE = 16] = "USER_APP_RECEIVE", 
            e[e.TICKET_EXCHANGE = 17] = "TICKET_EXCHANGE", e[e.USER_LOTTERY = 18] = "USER_LOTTERY", 
            e[e.PLANT_TREE = 19] = "PLANT_TREE", e[e.PLANT_NOVICE_TASK = 20] = "PLANT_NOVICE_TASK", 
            e[e.USER_SIGN = 21] = "USER_SIGN", e[e.USER_BUYING_EXCAVATE = 22] = "USER_BUYING_EXCAVATE", 
            e[e.EXTERNAL = 23] = "EXTERNAL", e[e.NEIGHBOUR_SHARE = 24] = "NEIGHBOUR_SHARE";
        }(c || (t.COUPON_SCENE_TYPE = c = {})), t.LEADER_BORDER_SOURCE = s, function(e) {
            e[e.HOME = 1] = "HOME", e[e.HOME_PRO = 2] = "HOME_PRO", e[e.SEARCH = 3] = "SEARCH", 
            e[e.SEARCH_PRO = 4] = "SEARCH_PRO", e[e.CATE_PRO = 5] = "CATE_PRO", e[e.PRO_DETAIL_RANK = 6] = "PRO_DETAIL_RANK", 
            e[e.CART = 11] = "CART";
        }(s || (t.LEADER_BORDER_SOURCE = s = {})), t.NOTICE_ID = u, function(e) {
            e.INVITE_NEIGHBOR_SUCCESS = "7hGu340BHfaCLlOOobbNTe_9oN8gWRR7Prk56JpK4v0", e.INVITE_SUCCESS = "uHBJmT6xKBb73MBb9FeEiu_ifF6f6CSTYY0C05aT2IE", 
            e.ORDER_SEND = "kjAyqhyWdPIOBmFZ6_RowbNwVqUSICEQtGTWEXg-in4", e.ORDER_CANCEL = "EvDDL8359Hav9cpA5GAOzuYokGAE6bnSslBl_TvFhUI", 
            e.ORDER_SUCC = "6bSvD8uOk2eNUgX2yTfmypZEWUqyzzWPvHusqJ1xFqY", e.REFUND_NOTICE = "zJuSfBVVgKIGMMmNAOJvrMaL-_2zI-HxZa26BK1OfiE", 
            e.ATY_HELP_NOTICE = "Sz6Oa8Z1m5-mIuHUuHSRCqNV0PmdiE09FFmizkFQRbg", e.ATY_HELP_SUCC = "BgE3Btn47plQ13rbrNCn4-OmZIZo4vKUQy8B-fGG4Zw", 
            e.COUPONS_OVER_DATE = "sBip5V1jFcKdcLk_DBTqtroxPzWM2BRQ2QssyMkdb84", e.PRODUCT_ARRIVE = "Lu3WCvlAdtC0crFxvSK2_uGQEoRrZgosMD2cmFguC5M", 
            e.PACKET_EXPIRED = "sBip5V1jFcKdcLk_DBTqtroxPzWM2BRQ2QssyMkdb84";
        }(u || (t.NOTICE_ID = u = {})), t.ACTIVITY_TYPE = l, function(e) {
            e[e.TYPE_FULL_REDUCTION = 1] = "TYPE_FULL_REDUCTION", e[e.TYPE_FULL_DISCOUNT = 2] = "TYPE_FULL_DISCOUNT", 
            e[e.TYPE_FULL_COUPON = 3] = "TYPE_FULL_COUPON", e[e.TYPE_FULL_PRODUCT = 4] = "TYPE_FULL_PRODUCT", 
            e[e.TYPE_FULL_GIFTS = 5] = "TYPE_FULL_GIFTS", e[e.TYPE_SPECIAL_OFFER = 6] = "TYPE_SPECIAL_OFFER", 
            e[e.TYPE_VIP = 7] = "TYPE_VIP", e[e.TYPE_BARTER = 8] = "TYPE_BARTER", e[e.TYPE_MY_NJ = 9] = "TYPE_MY_NJ", 
            e[e.TYPE_SPECIAL_USER = 10] = "TYPE_SPECIAL_USER", e[e.TYPE_NEW_USER = 11] = "TYPE_NEW_USER", 
            e[e.TYPE_CONTINUOUS_ORDER = 12] = "TYPE_CONTINUOUS_ORDER", e[e.TYPE_CUSTOMER_PKG = 13] = "TYPE_CUSTOMER_PKG", 
            e[e.TYPE_M_CHOOSE_N = 14] = "TYPE_M_CHOOSE_N";
        }(l || (t.ACTIVITY_TYPE = l = {})), t.PRODUCT_COMP_SOURCE = f, function(e) {
            e[e.RECIPE_LIST = 0] = "RECIPE_LIST", e[e.USER_RECOMMEND = 1] = "USER_RECOMMEND";
        }(f || (t.PRODUCT_COMP_SOURCE = f = {})), t.SEARCH_SOURCE = p, function(e) {
            e.FROM_HOME_TOP = "homeTop", e.FROM_HOME_FLOW = "homeFlow", e.FROM_CATE = "cate", 
            e.FROM_TRADE_PIECE = "tradePiece", e.FROM_TOPIC = "topic", e.FROM_N_ORDER = "Norder", 
            e.FROM_HOME_HOTWORD = "homeHotword";
        }(p || (t.SEARCH_SOURCE = p = {})), t.TICKET_TYPE = d, function(e) {
            e.ALIPAY_VOUCHER = "ALIPAY_VOUCHER", e.DDMC_VOUCHER = "DDMC_VOUCHER";
        }(d || (t.TICKET_TYPE = d = {})), t.ACTIVITY_SOURCE = h, (h || (t.ACTIVITY_SOURCE = h = {})).CHINESE_VALENTINE_DAY = "CHINESE_VALENTINE_DAY";
    },
    ca81: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MARKETIG_TAGS_PRE_NAME = void 0;
        var r = {
            114: "省",
            115: "折",
            116: "减",
            118: "赠",
            119: "赠",
            120: "返",
            121: "换",
            125: "折",
            126: "减"
        };
        t.MARKETIG_TAGS_PRE_NAME = r;
    },
    cd5a: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.apiGetHomeDetail = function(e) {
            return r.http.get("homeApi/newDetails", e);
        }, t.apiGetPreviewToken = function(e) {
            return r.http.post("guide-service/preview/getToken", e, o);
        }, t.apiCancelPreview = function(e) {
            return r.http.post("guide-service/preview/cancelPreview", e, o);
        }, t.apiGetAddressSetTip = function(e) {
            return r.http.get("homeApi/addressSetTip", e);
        }, t.apiGetHomeKeyword = function(e) {
            return r.http.get("search/hotKeyword", e);
        }, t.apiGethomeFlowDetail = function(e) {
            return r.http.get("homeApi/homeFlowDetail", e);
        }, t.apiGetUserLike = function(e) {
            return r.http.get("homeApi/userLike", e);
        }, t.apiGetCategories = function(e) {
            return r.http.get("homeApi/newCategories", e);
        }, t.apiGetCategoriesDetail = function(e) {
            return r.http.get("homeApi/categoriesNewDetail", e);
        }, t.apiGetHomeAdPop = function(e) {
            return r.http.get("homeApi/getHomeAdPop", e);
        }, t.apiAddCartRecommend = function(e) {
            return r.http.get("search/addCartRecommend", e);
        }, t.apiGetHomeHotKey = function(e) {
            return r.http.get("search/rollHotKeyword", e);
        }, t.apiGetHomeSceneCard = function(e) {
            return r.http.get("homeApi/sceneCard", e);
        }, t.apiGetHomeOrderStatus = function(e) {
            return r.http.get("guide-service/homeApi/orderStatus", e);
        }, t.apiAdvertisingReport = function(e) {
            return r.http.post("web/ad/wechatApplet/binding/clickId", e, o);
        };
        var r = n("5ee7"), o = {
            headers: {
                "Content-Type": "application/json"
            }
        };
    },
    cee4: function(e, t, n) {
        function r(e) {
            var t = new a(e), n = i(a.prototype.request, t);
            return o.extend(n, a.prototype, t), o.extend(n, t), n;
        }
        var o = n("c532"), i = n("1d2b"), a = n("0a06"), c = n("4a7b"), s = r(n("2444"));
        s.Axios = a, s.create = function(e) {
            return r(c(s.defaults, e));
        }, s.Cancel = n("7a77"), s.CancelToken = n("8df4"), s.isCancel = n("2e67"), s.all = function(e) {
            return Promise.all(e);
        }, s.spread = n("0df6"), s.isAxiosError = n("5f02"), e.exports = s, e.exports.default = s;
    },
    cf4e: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = r(n("66fd")), s = r(n("eb8e")), u = r(n("054d")), l = n("f14d"), f = n("1cf5"), p = n("655d"), d = n("6ddb"), h = n("4c69"), v = {
            namespaced: !0,
            state: {
                count: 1,
                totalCount: 0,
                showOnion: !0,
                showOnionDefaultAdd: !0,
                cartProduct: {},
                flashSaleInfo: {}
            },
            mutations: {
                setTotalCount: function(e, t) {
                    if (t > 0) {
                        (0, f.setTabBarBadge)({
                            index: 3,
                            text: t > 99 ? "99+" : "".concat(t)
                        });
                    } else (0, f.removeTabBarBadge)({
                        index: 3
                    });
                    e.totalCount = t;
                },
                setCount: function(e, t) {
                    e.count = t;
                },
                setCartProduct: function(e, t) {
                    e.cartProduct = t;
                },
                setProductNum: function(e, t) {
                    var n = t.id, r = t.num;
                    e.cartProduct[n] ? e.cartProduct[n] += r : r > 0 && (e.cartProduct[n] = r);
                },
                setShowOnion: function(e, t) {
                    e.showOnion = t;
                },
                setFlashSaleInfo: function(e, t) {
                    e.flashSaleInfo = t;
                },
                setShowOnionDefaultAdd: function(e, t) {
                    e.showOnionDefaultAdd = t;
                }
            },
            actions: {
                setAddCart: function(e, t) {
                    var n, r = e.dispatch, o = e.state, a = t.products, s = t.product, u = t.count, l = void 0 === u ? 1 : u, f = t.is_filter, v = void 0 === f ? 1 : f, _ = t.conditions_num, g = t.sizeType, m = void 0 === g ? 1 : g, y = t.isLoad, E = void 0 === y ? 0 : y, A = t.ignoreSuccess, b = void 0 !== A && A, P = t.showData, O = void 0 !== P && P, T = t.is_force_gift_coupon, S = void 0 === T ? 0 : T, R = t.vip_activity_id, C = void 0 === R ? "" : R, w = t.is_coupon_gift, k = t.mandatory_check, I = void 0 === k ? "1" : k, D = t.success, x = t.vip_page, L = void 0 === x ? 0 : x, N = t.mandatory_count, j = void 0 === N ? 0 : N, G = t.bulk_weight, H = void 0 === G ? 0 : G, M = t.fromInfo, U = void 0 === M ? {
                        cid: "",
                        pageid: ""
                    } : M, $ = t.useEmptySizes, V = void 0 !== $ && $, F = t.ab_config, B = t.api_version, K = t.batch_type, W = void 0 === K ? -1 : K, Y = t.add_scene, q = void 0 === Y ? p.SCENES.DEFAULT : Y, z = t.addReduceMode, J = void 0 !== z && z, X = t.exChange_mask, Q = t.is_guide_goods_onion, Z = void 0 === Q ? 0 : Q, ee = o.cartProduct, te = "";
                    if (1 === (null === (n = a) || void 0 === n ? void 0 : n.length) || s) {
                        var ne, re, oe = (null === (ne = a) || void 0 === ne ? void 0 : ne[0]) || s, ie = oe.min_order_quantity, ae = void 0 === ie ? 1 : ie, ce = oe.sale_unit, se = void 0 === ce ? "件" : ce, ue = oe.id, le = (null === (re = c.default.prototype.$store.state.cart.cartProduct) || void 0 === re ? void 0 : re[ue]) || 0;
                        ae > 1 && le < ae && le <= 0 && (te = "该商品".concat(ae).concat(se, "起购，加购成功"));
                    }
                    var fe, pe = t.showMsg, de = void 0 === pe || pe, he = t.activity_id, ve = void 0 === he ? "" : he;
                    if (a && (a = a.map(function(e) {
                        var t = e.min_order_quantity, n = void 0 === t ? 1 : t, r = {
                            id: e.id,
                            count: e.count,
                            cart_id: e.cart_id,
                            sizes: e.selectSizes || e.sizes,
                            algo_info: {
                                algo_id: e.algo_id
                            },
                            activity_id: ve,
                            conditions_num: _,
                            batch_type: "number" == typeof e.batch_type ? e.batch_type : -1,
                            supplementary_list: e.edit_supplementary_list
                        };
                        return n > 1 && (!(null === ee || void 0 === ee ? void 0 : ee[r.id]) || ee[r.id] <= 0) && (r.x_buy_count = n), 
                        r;
                    })), s) {
                        var _e;
                        fe = (null === s || void 0 === s ? void 0 : s.stockoutForceAddCart) && 0 === (null === s || void 0 === s ? void 0 : s.stock_number);
                        var ge = s.id, me = s.selectSizes, ye = s.sizes, Ee = s.cart_id, Ae = s.algo_id, be = s.edit_supplementary_list, Pe = s.min_order_quantity, Oe = void 0 === Pe ? 1 : Pe, Te = s.sale_batches, Se = void 0 === Te ? {} : Te;
                        Se = null !== (_e = Se) && void 0 !== _e ? _e : {};
                        var Re = {
                            id: ge,
                            cart_id: Ee,
                            count: l,
                            is_coupon_gift: w,
                            activity_id: ve,
                            vip_activity_id: C,
                            mandatory_check: I,
                            mandatory_count: j,
                            batch_type: W,
                            supplementary_list: be
                        };
                        if (Oe > 1 && (!(null === ee || void 0 === ee ? void 0 : ee[Re.id]) || ee[Re.id] <= 0) && (Re.x_buy_count = Oe), 
                        a = [ Re ], _ && (a[0].conditions_num = _), a[0].algo_info = {
                            algo_id: Ae
                        }, -1 !== W) a[0].batch_type = W; else {
                            var Ce, we, ke = Se.batches, Ie = void 0 === ke ? [] : ke;
                            a[0].batch_type = null !== (Ce = null === (we = Ie[0]) || void 0 === we ? void 0 : we.batch_type) && void 0 !== Ce ? Ce : -1;
                        }
                        1 === m ? a[0].sizes = me || ye || [] : a[0].sub_list = me || ye || [], H && (a[0].bulk_weight = H), 
                        V && (a[0].sizes = []), J && l < 0 && (delete a[0].batch_type, de = !1), 1 === X && (ve = "");
                    }
                    var De = U.pageid, xe = void 0 === De ? "" : De, Le = U.cid, Ne = {
                        products: a,
                        is_filter: v,
                        activity_id: ve,
                        vip_activity_id: C,
                        is_load: E,
                        add_scene: q,
                        showData: O,
                        is_force_gift_coupon: S,
                        pageid: xe,
                        cid: void 0 === Le ? "" : Le,
                        vip_page: L,
                        is_guide_goods_onion: Z,
                        filter_stock: fe ? 1 : 0
                    };
                    B && (Ne.api_version = B), (0, d.throttleTime)(function() {
                        (0, h.addCart)(i(i({}, Ne), {}, {
                            showMsg: !1,
                            ab_config: F || JSON.stringify({
                                key_onion: "C"
                            })
                        })).then(function(e) {
                            te && e.data && (e.data.toast = te), r("updateCartInfo", {
                                res: e,
                                success: D,
                                ignoreSuccess: b,
                                showMsg: de,
                                showData: O
                            });
                        });
                    }, 500);
                },
                updateCartInfo: function(e, t) {
                    var n, r, o = e.commit, i = e.dispatch, a = t.res, f = t.success, p = t.ignoreSuccess, d = void 0 !== p && p, h = t.showMsg, v = void 0 === h || h, _ = t.showData, g = void 0 !== _ && _, m = t.onlyShowNativeMsg, y = void 0 !== m && m, E = a.data, A = a.code, b = a.msg, P = void 0 === b ? "" : b, O = "string" == typeof E ? JSON.parse(E) : E, T = (null === (n = a.request) || void 0 === n || null === (r = n.data) || void 0 === r ? void 0 : r.products) || "", S = [], R = [];
                    if (T && (S = "string" == typeof T ? JSON.parse(T) : T), S.length && S.forEach(function(e) {
                        R.push(e.id);
                    }), 0 === A) {
                        var C = O.total_count, w = O.cart_count, k = O.toast, I = void 0 === k ? "" : k, D = O.product_num;
                        f && f({
                            data: O,
                            code: A
                        });
                        var x = c.default.prototype.$store.state.globalData.isCrash, L = I || "加入购物车成功";
                        d || (L && c.default.prototype.$track({
                            key: "isGlobal/Product/Add/Toast",
                            eventType: "exposure",
                            other: {
                                product: R.toString(),
                                msg: L
                            }
                        }), y && !x && s.default.isApp && I || i("toast/show", {
                            text: L,
                            delay: 1500
                        }, {
                            root: !0
                        })), !x && s.default.isApp && c.default.prototype.$bridge.updateCartCount({
                            count: C,
                            index: 0
                        }), o("setTotalCount", C), o("setCount", w), o("setCartProduct", D || {});
                    } else if (A === u.default.MESSAGE_ALERT) {
                        var N = O.alert;
                        ((null === N || void 0 === N ? void 0 : N.name) || (null === N || void 0 === N ? void 0 : N.desc)) && o("confirm/init", {
                            title: (null === N || void 0 === N ? void 0 : N.name) || "",
                            content: (null === N || void 0 === N ? void 0 : N.desc) || "",
                            submitText: "知道了",
                            cancelText: ""
                        }, {
                            root: !0
                        }), f && f({
                            code: A
                        });
                    } else if (A === u.default.HAD_VIP_O99_PRODUCT) i("vip099pop/show", {
                        theme: 1,
                        popTitle: "替换商品",
                        btnTxt: "替换",
                        desc: "购物车已有权益商品，每次限购1份，确定要替换成当前商品吗？",
                        products: E
                    }, {
                        root: !0
                    }); else {
                        if (4007 === A) return void o("confirm/init", {
                            content: P,
                            submitText: "去购物车",
                            submitTextColor: "#2FB157",
                            cancelText: "取消",
                            cancelTextColor: "#2FB157",
                            success: function() {
                                this.$open({
                                    url: l.PATH.PAGE_CART,
                                    type: 2
                                });
                            }
                        }, {
                            root: !0
                        });
                        v && A !== u.default.NO_REDUCE && (c.default.prototype.$track({
                            key: "isGlobal/Product/Add/Toast",
                            eventType: "exposure",
                            other: {
                                product: R.toString(),
                                msg: P
                            }
                        }), i("toast/show", {
                            text: P,
                            delay: 1500
                        }, {
                            root: !0
                        })), f && f(g ? a : {
                            code: A
                        });
                    }
                },
                setCartTotalCount: function(e, t) {
                    var n = e.commit;
                    e.rootState, (0, h.getCartDetail)({
                        is_load: 0,
                        ab_config: JSON.stringify({
                            key_onion: "C"
                        })
                    }).then(function(e) {
                        var t = e.data;
                        if (t) {
                            var r = t.total_count, o = t.cart_count, i = t.product_num;
                            n("setTotalCount", r), n("setCount", o), n("setCartProduct", i);
                        }
                    });
                }
            }
        };
        t.default = v;
    },
    cf72: function(e, t, n) {
        function r(e) {
            var t = e.value, n = e.data, a = t[0], c = i.includes(a);
            c && (t = t.slice(1));
            for (var s = /\[([\w\W]*)\]/; s.test(t); ) {
                var u = RegExp.$1;
                isNaN(Number(u)) && (t = t.replace(RegExp.$1, r({
                    data: n,
                    value: RegExp.$1
                }))), t = t.replace(/\[/g, ".").replace(/\]/g, "");
            }
            for (var l = t.split("."), f = n || {}, p = 0; p < l.length; p++) {
                var d = l[p];
                if (void 0 === f[d] || null === f[d]) return;
                f = f[d];
            }
            return c && (f = o[a](f)), f;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var o = {
            "+": function(e) {
                return +e;
            },
            "!": function(e) {
                return !e;
            }
        }, i = Object.keys(o);
    },
    d04f: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.apiCreateServerComment = t.apiGetCommentReplyIsUseful = t.apiGetCommentInfo = t.apiPostCommentAdd = t.apiGetCommentPop = void 0;
        var r = n("5ee7");
        t.apiGetCommentPop = function(e) {
            return r.http.get("comment/deliveryEvaluatePop", e);
        };
        t.apiPostCommentAdd = function(e) {
            return r.http.post("comment/add", e);
        };
        t.apiGetCommentInfo = function(e) {
            return r.http.get("comment/info", e);
        };
        t.apiGetCommentReplyIsUseful = function(e) {
            return r.http.get("comment/replyIsUseful", e);
        };
        t.apiCreateServerComment = function(e) {
            return r.http.post("comment-service/client/PopComment/createPopUserComment", e);
        };
    },
    d083: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getCouponCalAmount = t.getCouponUsable = t.giftCoupon = t.noticeCoupon = t.getDefaultCoupon = t.getUsableCoupon = t.getcouponlist = t.apiGetEventInvite = t.apiGetCouponUnable = t.apiGetCouponUnsed = void 0;
        var r = n("5ee7");
        t.apiGetCouponUnsed = function(e) {
            return r.http.get("coupon/unused", e);
        };
        t.apiGetCouponUnable = function(e) {
            return r.http.get("coupon/unable", e);
        };
        t.apiGetEventInvite = function(e) {
            return r.http.get("event/invite", e);
        };
        t.getcouponlist = function(e) {
            return r.http.post("coupon/list", e);
        };
        t.getUsableCoupon = function(e) {
            return r.http.post("coupon/usable", e);
        };
        t.getDefaultCoupon = function(e) {
            return r.http.post("coupon/default", e);
        };
        t.noticeCoupon = function(e) {
            return r.http.post("coupon/notice", e);
        };
        t.giftCoupon = function(e) {
            return r.http.post("coupon/giftCoupon", e);
        };
        t.getCouponUsable = function(e) {
            return r.http.post("coupon/usable", e);
        };
        t.getCouponCalAmount = function(e) {
            return r.http.post("coupon/calAmount", e);
        };
    },
    d233: function(e, t, n) {
        var r = Object.prototype.hasOwnProperty, o = Array.isArray, i = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e;
        }(), a = function(e) {
            for (;e.length > 1; ) {
                var t = e.pop(), n = t.obj[t.prop];
                if (o(n)) {
                    for (var r = [], i = 0; i < n.length; ++i) void 0 !== n[i] && r.push(n[i]);
                    t.obj[t.prop] = r;
                }
            }
        }, c = function(e, t) {
            for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) void 0 !== e[r] && (n[r] = e[r]);
            return n;
        };
        e.exports = {
            arrayToObject: c,
            assign: function(e, t) {
                return Object.keys(t).reduce(function(e, n) {
                    return e[n] = t[n], e;
                }, e);
            },
            combine: function(e, t) {
                return [].concat(e, t);
            },
            compact: function(e) {
                for (var t = [ {
                    obj: {
                        o: e
                    },
                    prop: "o"
                } ], n = [], r = 0; r < t.length; ++r) for (var o = t[r], i = o.obj[o.prop], c = Object.keys(i), s = 0; s < c.length; ++s) {
                    var u = c[s], l = i[u];
                    "object" === (void 0 === l ? "undefined" : _typeof(l)) && null !== l && -1 === n.indexOf(l) && (t.push({
                        obj: i,
                        prop: u
                    }), n.push(l));
                }
                return a(t), e;
            },
            decode: function(e, t, n) {
                var r = e.replace(/\+/g, " ");
                if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(r);
                } catch (e) {
                    return r;
                }
            },
            encode: function(e, t, n) {
                if (0 === e.length) return e;
                var r = e;
                if ("symbol" === (void 0 === e ? "undefined" : _typeof(e)) ? r = Symbol.prototype.toString.call(e) : "string" != typeof e && (r = String(e)), 
                "iso-8859-1" === n) return escape(r).replace(/%u[0-9a-f]{4}/gi, function(e) {
                    return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
                });
                for (var o = "", a = 0; a < r.length; ++a) {
                    var c = r.charCodeAt(a);
                    45 === c || 46 === c || 95 === c || 126 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 ? o += r.charAt(a) : c < 128 ? o += i[c] : c < 2048 ? o += i[192 | c >> 6] + i[128 | 63 & c] : c < 55296 || c >= 57344 ? o += i[224 | c >> 12] + i[128 | c >> 6 & 63] + i[128 | 63 & c] : (a += 1, 
                    c = 65536 + ((1023 & c) << 10 | 1023 & r.charCodeAt(a)), o += i[240 | c >> 18] + i[128 | c >> 12 & 63] + i[128 | c >> 6 & 63] + i[128 | 63 & c]);
                }
                return o;
            },
            isBuffer: function(e) {
                return !(!e || "object" !== (void 0 === e ? "undefined" : _typeof(e)) || !(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e)));
            },
            isRegExp: function(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e);
            },
            merge: function e(t, n, i) {
                if (!n) return t;
                if ("object" !== (void 0 === n ? "undefined" : _typeof(n))) {
                    if (o(t)) t.push(n); else {
                        if (!t || "object" !== (void 0 === t ? "undefined" : _typeof(t))) return [ t, n ];
                        (i && (i.plainObjects || i.allowPrototypes) || !r.call(Object.prototype, n)) && (t[n] = !0);
                    }
                    return t;
                }
                if (!t || "object" !== (void 0 === t ? "undefined" : _typeof(t))) return [ t ].concat(n);
                var a = t;
                return o(t) && !o(n) && (a = c(t, i)), o(t) && o(n) ? (n.forEach(function(n, o) {
                    if (r.call(t, o)) {
                        var a = t[o];
                        a && "object" === (void 0 === a ? "undefined" : _typeof(a)) && n && "object" === (void 0 === n ? "undefined" : _typeof(n)) ? t[o] = e(a, n, i) : t.push(n);
                    } else t[o] = n;
                }), t) : Object.keys(n).reduce(function(t, o) {
                    var a = n[o];
                    return r.call(t, o) ? t[o] = e(t[o], a, i) : t[o] = a, t;
                }, a);
            }
        };
    },
    d505: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.showBackCartAlert = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
            if (t && t.station_id) {
                var r = i(i({}, s.default.load({
                    key: u.default.LOCATION
                })), {}, {
                    station_id: t.station_id
                });
                s.default.save({
                    key: u.default.LOCATION,
                    data: r
                }), c.default.prototype.$store.commit("globalData/update", {
                    locationInfo: r
                });
            }
            c.default.prototype.$confirm({
                title: "提示",
                content: e,
                cancelText: "",
                submitText: "返回购物车",
                success: function() {
                    switch (n) {
                      case f.default.MAKEORDER_BACKCART:
                        this.$track({
                            key: "makeOrder/click_sell_out_all",
                            eventType: "click"
                        });
                        break;

                      case f.default.MAKEORDER_STOCKOUT:
                        this.$track({
                            key: "makeOrder/click_sell_out",
                            eventType: "exposure"
                        });
                    }
                    (0, p.open)({
                        url: l.PATH.PAGE_CART
                    });
                }
            });
        }, t.getSelectTimeLabelText = function(e) {
            switch (e) {
              case 3:
                return "请选择";

              case 2:
              case 1:
              default:
                return "请选择送达时间";
            }
        };
        var c = r(n("66fd")), s = r(n("b7c7")), u = r(n("67c5")), l = n("f14d"), f = r(n("054d")), p = n("1cf5");
    },
    d52e: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("9410");
        Object.keys(r).forEach(function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e];
                }
            });
        });
        var o = n("5779");
        Object.keys(o).forEach(function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return o[e];
                }
            });
        });
        var i = n("f0df");
        Object.keys(i).forEach(function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e];
                }
            });
        });
    },
    d90a: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.addGroupOrder = t.getGroupStranger = t.getGroupAds = t.getGroupProductDetail = t.getGroupOrderList = t.apiGroupDetail = void 0;
        var r = n("5ee7");
        t.apiGroupDetail = function(e) {
            return r.http.get("groupon/detail", e);
        };
        t.getGroupOrderList = function(e) {
            return r.http.get("groupon/list", e, {
                isBridge: e.isBridge
            });
        };
        t.getGroupProductDetail = function(e) {
            return r.http.get("groupon/productDetail", e);
        };
        t.getGroupAds = function(e) {
            return r.http.get("advert/getAd", e);
        };
        t.getGroupStranger = function(e) {
            return r.http.get("groupon/stranger", e);
        };
        t.addGroupOrder = function(e) {
            return r.http.post("groupon/addOrder", e);
        };
    },
    d925: function(e, t, n) {
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
    },
    d9c2: function(e, t, n) {},
    d9f0: function(e, t, n) {
        function r(e, t) {
            function n(e, n) {
                if (n) for (r = a.length - 1; r >= 0 && a[r] != n; r--) ; else var r = 0;
                if (r >= 0) {
                    for (var o = a.length - 1; o >= r; o--) t.end && t.end(a[o]);
                    a.length = r;
                }
            }
            var r, o, i, a = [], _ = e;
            for (a.last = function() {
                return this[this.length - 1];
            }; e; ) {
                if (o = !0, a.last() && v[a.last()]) e = e.replace(new RegExp("([\\s\\S]*?)</".concat(a.last(), "[^>]*>")), function(e, n) {
                    return n = n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2"), t.chars && t.chars(n), 
                    "";
                }), n(0, a.last()); else if (0 == e.indexOf("\x3c!--") ? (r = e.indexOf("--\x3e")) >= 0 && (t.comment && t.comment(e.substring(4, r)), 
                e = e.substring(r + 3), o = !1) : 0 == e.indexOf("</") ? (i = e.match(s)) && (e = e.substring(i[0].length), 
                i[0].replace(s, n), o = !1) : 0 == e.indexOf("<") && (i = e.match(c)) && (e = e.substring(i[0].length), 
                i[0].replace(c, function(e, r, o, i) {
                    if (r = r.toLowerCase(), f[r]) for (;a.last() && p[a.last()]; ) n(0, a.last());
                    if (d[r] && a.last() == r && n(0, r), (i = l[r] || !!i) || a.push(r), t.start) {
                        var c = [];
                        o.replace(u, function(e, t) {
                            var n = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : h[t] ? t : "";
                            c.push({
                                name: t,
                                value: n,
                                escaped: n.replace(/(^|[^\\])"/g, '$1\\"')
                            });
                        }), t.start && t.start(r, c, i);
                    }
                }), o = !1), o) {
                    var g = (r = e.indexOf("<")) < 0 ? e : e.substring(0, r);
                    e = r < 0 ? "" : e.substring(r), t.chars && t.chars(g);
                }
                if (e == _) throw "Parse Error: ".concat(e);
                _ = e;
            }
            n();
        }
        function o(e) {
            for (var t = {}, n = e.split(","), r = 0; r < n.length; r++) t[n[r]] = !0;
            return t;
        }
        function i(e) {
            return e.replace(/<\?xml.*\?>\n/, "").replace(/<!doctype.*>\n/, "").replace(/<!DOCTYPE.*>\n/, "");
        }
        function a(e) {
            return e.reduce(function(e, t) {
                var n = t.value, r = t.name;
                return e[r] ? e[r] = "".concat(e[r], " ").concat(n) : e[r] = n, e;
            }, {});
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, s = /^<\/([-A-Za-z0-9_]+)[^>]*>/, u = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g, l = o("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), f = o("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), p = o("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), d = o("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), h = o("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), v = o("script,style");
        t.default = function(e) {
            var t = [], n = {
                node: "root",
                children: []
            };
            return r(e = i(e), {
                start: function(e, r, o) {
                    var i = {
                        name: e
                    };
                    if (0 !== r.length && (i.attrs = a(r)), o) {
                        var c = t[0] || n;
                        c.children || (c.children = []), c.children.push(i);
                    } else t.unshift(i);
                },
                end: function(e) {
                    var r = t.shift();
                    if (r.name !== e && console.error("invalid state: mismatch end tag"), 0 === t.length) n.children.push(r); else {
                        var o = t[0];
                        o.children || (o.children = []), o.children.push(r);
                    }
                },
                chars: function(e) {
                    var r = {
                        type: "text",
                        text: e
                    };
                    if (0 === t.length) n.children.push(r); else {
                        var o = t[0];
                        o.children || (o.children = []), o.children.push(r);
                    }
                },
                comment: function(e) {
                    var n = {
                        node: "comment",
                        text: e
                    }, r = t[0];
                    r.children || (r.children = []), r.children.push(n);
                }
            }), n.children;
        };
    },
    dac2: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.saveHomePageCachedData = function(e) {
            o.default.save({
                key: i.default.HOME_PAGE_CACHED_DATA,
                data: e,
                async: !0
            });
        }, t.loadHomePageCachedData = function() {
            return o.default.load({
                key: i.default.HOME_PAGE_CACHED_DATA,
                async: !0
            });
        };
        var o = r(n("b7c7")), i = r(n("67c5"));
    },
    dbf8: function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.clearAddDeliveryGoodsFlag = t.markAddDeliveryGoodsFlag = t.checkNote = t.getGuessLikeProducts = t.pushDownAppSms = t.queryOrderRedPacket = t.queryLastRedPacket = t.orderFinishTrigger = t.orderCheckPayStatus = t.orderPayStatusText = t.getMultiReserveTime = t.getOrderReserveTime = t.orderCancel = t.getOrderState = t.getOrderDetail = t.getOrderList = t.repay = t.getRecommend = t.checkCart = t.checkOrder = t.cartCouponList = t.orderCreate = void 0;
        var a = n("27a2"), c = n("5ee7");
        t.orderCreate = function(e) {
            return c.http.post("order/addNewOrder", o({}, e), {
                scene: a.DEVICE_SCENE.CREATE_ORDER
            });
        };
        t.cartCouponList = function(e) {
            return c.http.post("coupon/cartUsable", o({}, e));
        };
        t.checkOrder = function(e) {
            return c.http.post("order/checkOrder", e);
        };
        t.checkCart = function(e) {
            return c.http.post("order/checkCart", e);
        };
        t.getRecommend = function(e) {
            return c.http.post("order/getRecommend", e);
        };
        t.repay = function(e) {
            return c.http.post("order/repay", e, {
                scene: a.DEVICE_SCENE.REPAY
            });
        };
        t.getOrderList = function(e) {
            return c.http.get("order/list", e);
        };
        t.getOrderDetail = function(e) {
            return c.http.get("order/detail", e);
        };
        t.getOrderState = function(e) {
            return c.http.get("order/orderStates", e);
        };
        t.orderCancel = function(e) {
            return c.http.post("order/cancel", e);
        };
        t.getOrderReserveTime = function(e) {
            return c.http.post("order/getReserveTime", e);
        };
        t.getMultiReserveTime = function(e) {
            return c.http.post("order/getMultiReserveTime", e);
        };
        t.orderPayStatusText = function(e) {
            return c.http.get("order/getOrderShowTitle", e);
        };
        t.orderCheckPayStatus = function(e) {
            return c.http.post("order/checkPayStatus", e);
        };
        t.orderFinishTrigger = function(e) {
            return c.gateWayJsonHttp.post("promocore-service/client/order/redPacketShare/v1/orderFinishTrigger", e);
        };
        t.queryLastRedPacket = function() {
            return c.gateWayJsonHttp.post("promocore-service/client/order/redPacketShare/v1/queryLastRedPacket");
        };
        t.queryOrderRedPacket = function(e) {
            return c.gateWayJsonHttp.post("promocore-service/client/order/redPacketShare/v1/queryOrderRedPacket", e);
        };
        t.pushDownAppSms = function(e) {
            return c.http.post("order/sendSms", e);
        };
        t.getGuessLikeProducts = function(e) {
            return c.http.get("order/getRecommend", e);
        };
        t.checkNote = function(e) {
            return c.http.post("order/checkNote", e);
        };
        t.markAddDeliveryGoodsFlag = function(e) {
            return c.http.get("order/markAddDeliveryGoodsFlag", e);
        };
        t.clearAddDeliveryGoodsFlag = function(e) {
            return c.http.get("order/clearAddDeliveryGoodsFlag", e);
        };
    },
    dc24: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            namespaced: !0,
            state: {
                tipVisible: !1,
                pageScroll: !0
            },
            mutations: {
                updateTipVisible: function(e, t) {
                    e.tipVisible = t;
                },
                updatePageScroll: function(e, t) {
                    e.pageScroll = t;
                }
            },
            actions: {}
        };
        t.default = r;
    },
    df7c: function(e, t, n) {
        (function(e) {
            function n(e, t) {
                for (var n = 0, r = e.length - 1; r >= 0; r--) {
                    var o = e[r];
                    "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), 
                    n--);
                }
                if (t) for (;n--; n) e.unshift("..");
                return e;
            }
            function r(e) {
                "string" != typeof e && (e += "");
                var t, n = 0, r = -1, o = !0;
                for (t = e.length - 1; t >= 0; --t) if (47 === e.charCodeAt(t)) {
                    if (!o) {
                        n = t + 1;
                        break;
                    }
                } else -1 === r && (o = !1, r = t + 1);
                return -1 === r ? "" : e.slice(n, r);
            }
            function o(e, t) {
                if (e.filter) return e.filter(t);
                for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
                return n;
            }
            t.resolve = function() {
                for (var t = "", r = !1, i = arguments.length - 1; i >= -1 && !r; i--) {
                    var a = i >= 0 ? arguments[i] : e.cwd();
                    if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                    a && (t = a + "/" + t, r = "/" === a.charAt(0));
                }
                return t = n(o(t.split("/"), function(e) {
                    return !!e;
                }), !r).join("/"), (r ? "/" : "") + t || ".";
            }, t.normalize = function(e) {
                var r = t.isAbsolute(e), a = "/" === i(e, -1);
                return (e = n(o(e.split("/"), function(e) {
                    return !!e;
                }), !r).join("/")) || r || (e = "."), e && a && (e += "/"), (r ? "/" : "") + e;
            }, t.isAbsolute = function(e) {
                return "/" === e.charAt(0);
            }, t.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return t.normalize(o(e, function(e, t) {
                    if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                    return e;
                }).join("/"));
            }, t.relative = function(e, n) {
                function r(e) {
                    for (var t = 0; t < e.length && "" === e[t]; t++) ;
                    for (var n = e.length - 1; n >= 0 && "" === e[n]; n--) ;
                    return t > n ? [] : e.slice(t, n - t + 1);
                }
                e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
                for (var o = r(e.split("/")), i = r(n.split("/")), a = Math.min(o.length, i.length), c = a, s = 0; s < a; s++) if (o[s] !== i[s]) {
                    c = s;
                    break;
                }
                var u = [];
                for (s = c; s < o.length; s++) u.push("..");
                return (u = u.concat(i.slice(c))).join("/");
            }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
                if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
                for (var t = e.charCodeAt(0), n = 47 === t, r = -1, o = !0, i = e.length - 1; i >= 1; --i) if (47 === (t = e.charCodeAt(i))) {
                    if (!o) {
                        r = i;
                        break;
                    }
                } else o = !1;
                return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r);
            }, t.basename = function(e, t) {
                var n = r(e);
                return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), 
                n;
            }, t.extname = function(e) {
                "string" != typeof e && (e += "");
                for (var t = -1, n = 0, r = -1, o = !0, i = 0, a = e.length - 1; a >= 0; --a) {
                    var c = e.charCodeAt(a);
                    if (47 !== c) -1 === r && (o = !1, r = a + 1), 46 === c ? -1 === t ? t = a : 1 !== i && (i = 1) : -1 !== t && (i = -1); else if (!o) {
                        n = a + 1;
                        break;
                    }
                }
                return -1 === t || -1 === r || 0 === i || 1 === i && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
            };
            var i = "b" === "ab".substr(-1) ? function(e, t, n) {
                return e.substr(t, n);
            } : function(e, t, n) {
                return t < 0 && (t = e.length + t), e.substr(t, n);
            };
        }).call(this, n("4362"));
    },
    e263: function(e, t, n) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : _typeof(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
            })(e);
        }
        function o(e, t) {
            for (var n = -1, r = e.length; ++n < r; ) t(e[n], n);
            return e;
        }
        function i(e) {
            var t = r(e);
            return null !== e && ("object" === t || "function" === t);
        }
        function a(e) {
            return Object.prototype.toString.call(e);
        }
        function c(e) {
            return new (0, e.constructor)();
        }
        function s(e) {
            return Object(Symbol.prototype.valueOf.call(e));
        }
        function u(e) {
            var t = /\w*$/, n = new e.constructor(e.source, t.exec(e));
            return n.lastIndex = e.lastIndex, n;
        }
        function l(e, t) {
            var n = e.constructor;
            switch (t) {
              case v:
              case g:
              case m:
              case E:
              case _:
                return new n(e);

              case A:
                return u(e);

              case y:
                return s(e);

              case b:
                return "";

              default:
                return null;
            }
        }
        function f(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new WeakMap(), n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            if (!i(e)) return e;
            var r, s = a(e);
            if (!P.includes(s)) return l(e, s);
            r = c(e);
            var u = t.get(e);
            if (u && u === n) return "";
            if (t.set(e, n), s === d) return e.forEach(function(e) {
                r.add(f(e, t));
            }), r;
            if (s === p) return e.forEach(function(e, n) {
                r.set(n, f(e, t));
            }), r;
            var v = s === h ? void 0 : Object.keys(e);
            return o(v || e, function(n, o) {
                v && (o = n), r[o] = f(e[o], t, o);
            }), r;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = f;
        var p = "[object Map]", d = "[object Set]", h = "[object Array]", v = "[object Boolean]", _ = "[object Date]", g = "[object Number]", m = "[object String]", y = "[object Symbol]", E = "[object Error]", A = "[object RegExp]", b = "[object Function]", P = [ p, d, h, "[object Object]", "[object Arguments]" ];
    },
    e36c: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return e.value;
        };
    },
    e381: function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : _typeof(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
                })(e);
            }
            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach(function(t) {
                        c(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function s(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        function i(e) {
                            s(c, r, o, i, a, "next", e);
                        }
                        function a(e) {
                            s(c, r, o, i, a, "throw", e);
                        }
                        var c = e.apply(t, n);
                        i(void 0);
                    });
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = r(n("a34a")), f = r(n("4328")), p = r(n("66fd")), d = n("f14d"), h = n("37eb"), v = n("452f"), _ = n("0eef"), g = r(n("eb8e")), m = r(n("67c5")), y = r(n("054d")), E = n("7f9b"), A = r(n("b7c7")), b = n("bfa6"), P = !1, O = p.default.extend({
                mixins: [ E.userAddressMethods ],
                methods: {
                    getAliTicketAuth: function() {
                        var e = this, t = this;
                        return new Promise(function(n) {
                            e.$store.state.user.isLogin && !e.$store.state.user.isAuthAliTicket ? (e.$store.state.user.isAuthAliTicket = !0, 
                            my.getAuthCode({
                                scopes: "voucher_query",
                                success: function() {
                                    var e = u(l.default.mark(function e(r) {
                                        return l.default.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                return e.next = 2, (0, h.apiAliAppletRefreshTicketAccessToken)({
                                                    code: r.authCode
                                                });

                                              case 2:
                                                (null === t || void 0 === t ? void 0 : t.initPageInfo) && (null === t || void 0 === t || t.initPageInfo()), 
                                                n();

                                              case 4:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }(),
                                fail: function() {
                                    n();
                                }
                            })) : n();
                        });
                    },
                    modelGetPhoneNumber: function(e) {
                        var t = arguments, n = this;
                        return u(l.default.mark(function r() {
                            var o, i, c, s, u, f, p, d, h, v, _, g, m, y, E;
                            return l.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    if (o = t.length > 1 && void 0 !== t[1] && t[1], i = t.length > 2 && void 0 !== t[2] && t[2], 
                                    c = t.length > 3 && void 0 !== t[3] && t[3], s = t.length > 4 && void 0 !== t[4] ? t[4] : "", 
                                    u = t.length > 5 ? t[5] : void 0, f = t.length > 6 ? t[6] : void 0, n.$loading(0), 
                                    p = n, d = e.errMsg, h = void 0 === d ? "" : d, v = e.encryptedData, _ = e.iv, g = e.loginType, 
                                    m = {
                                        data: null
                                    }, y = function() {
                                        var e = {
                                            title: "授权失败",
                                            content: "您已拒绝获取绑定手机号登录授权，可使用其他手机号验证登录",
                                            cancelText: "知道了"
                                        };
                                        e.submitText = i ? "" : "验证登录", p.$confirm(a(a({}, e), {}, {
                                            success: function() {
                                                p.modelManualLogin({
                                                    loginType: g
                                                });
                                            }
                                        }));
                                    }, "getPhoneNumber:ok" !== h) {
                                        r.next = 19;
                                        break;
                                    }
                                    return u && u(), r.next = 15, n.modelCheckLocalSession();

                                  case 15:
                                    (E = r.sent) && (!o && p.requestLoginMobile({
                                        encrypted_data: v,
                                        iv: _,
                                        loginType: g
                                    }, c, s), m = {
                                        data: {
                                            encrypted_data: v,
                                            iv: _
                                        }
                                    }), r.next = 21;
                                    break;

                                  case 19:
                                    f && f(), y();

                                  case 21:
                                    return n.$loading(-1), r.abrupt("return", m);

                                  case 23:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    requestLoginMobile: function(e) {
                        var t = arguments, n = this;
                        return u(l.default.mark(function r() {
                            var o, i, c, s, u, f, p, v, _, E, b, P, O, T, S, R, C, w, k, I, D, x, L, N, j, G;
                            return l.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return o = t.length > 1 && void 0 !== t[1] && t[1], i = t.length > 2 && void 0 !== t[2] ? t[2] : "", 
                                    n.$loading(0), c = n, s = e.iv, u = e.encrypted_data, f = e.loginType, p = g.default.isMpW ? h.apiPostLoginByMobile : h.apiAliAppletMobileDecrypt, 
                                    v = n.$store.state.globalData, _ = v.source, E = v.loginExtendInfo, b = v.shareExtendInfo, 
                                    P = v.sys, O = void 0 === P ? {} : P, T = O.model, S = void 0 === T ? "" : T, R = a(a({
                                        iv: s,
                                        encrypted_data: u
                                    }, b), {}, {
                                        model: S
                                    }), R.source = i || _, R.extendInfo = E ? JSON.stringify(E) : "", r.next = 13, p(R);

                                  case 13:
                                    if (C = r.sent, w = C.data, k = C.code, I = C.msg, D = C.success) {
                                        r.next = 23;
                                        break;
                                    }
                                    2 === k || 1 === k && "请退出小程序重新登录" === I || k === y.default.AUTH_FAIL_OPENID ? (c.autoLogin(), 
                                    c.$toast("一键登录失败，请重试")) : 3 === k ? c.$confirm({
                                        content: "仅支持中国大陆手机号登录，请尝试使用其他手机号获取验证码登录",
                                        submitText: "验证登录",
                                        success: function() {
                                            c.modelManualLogin();
                                        }
                                    }) : c.$toast(I), n.$loading(-1), r.next = 34;
                                    break;

                                  case 23:
                                    if (x = w, L = x.id, N = x.mobile, j = x.sms_login, G = x.session_id, n.$store.commit("user/setUser", {
                                        userInfo: x
                                    }), G && c.$store.commit("user/setAuthInfo", {
                                        sessionId: G
                                    }), !j) {
                                        r.next = 31;
                                        break;
                                    }
                                    return A.default.save({
                                        key: m.default.LOGIN_INPUT_MOBILE,
                                        data: N
                                    }), n.$open({
                                        url: d.PATH.PAGE_LOGIN,
                                        params: {
                                            loginType: f,
                                            source: i
                                        }
                                    }), r.abrupt("return");

                                  case 31:
                                    c.$toast("登录成功"), o ? n.$loading(-1) : (n.$loading(0, !1), setTimeout(function() {
                                        n.$loading(-1, !1), c.$open({
                                            type: -1
                                        });
                                    }, 1e3)), [ "appletAttend" ].includes(f) || setTimeout(function() {
                                        n.addressTipContinue = n.userAddressTip({
                                            uid: L
                                        });
                                    }, 2e3);

                                  case 34:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    modelCheckLocalSession: function() {
                        var t = this, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], r = this;
                        return new Promise(function() {
                            var o = u(l.default.mark(function o(i) {
                                var a, c, s;
                                return l.default.wrap(function(o) {
                                    for (;;) switch (o.prev = o.next) {
                                      case 0:
                                        if (a = t.$store.state.user.userAuthInfo.sessionId, c = t.$store.state.user.userInfo.id, 
                                        s = function() {
                                            var e = u(l.default.mark(function e() {
                                                var t, o, a;
                                                return l.default.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                        return e.next = 2, r.autoLogin(n);

                                                      case 2:
                                                        t = e.sent, (o = t.data) ? (a = o.session_id, i(a)) : i(!1);

                                                      case 5:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                            }));
                                            return function() {
                                                return e.apply(this, arguments);
                                            };
                                        }(), a) {
                                            o.next = 8;
                                            break;
                                        }
                                        return o.next = 6, s();

                                      case 6:
                                        o.next = 9;
                                        break;

                                      case 8:
                                        e.checkSession({
                                            success: function() {
                                                r.$store.commit("user/setLogin", !!c), r.$store.commit("user/setAuthInfo", {
                                                    sessionId: a
                                                }), i(a);
                                            },
                                            fail: function() {
                                                return u(l.default.mark(function e() {
                                                    return l.default.wrap(function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                          case 0:
                                                            return e.next = 2, s();

                                                          case 2:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    }, e);
                                                }))();
                                            }
                                        });

                                      case 9:
                                      case "end":
                                        return o.stop();
                                    }
                                }, o);
                            }));
                            return function(e) {
                                return o.apply(this, arguments);
                            };
                        }());
                    },
                    autoLogin: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = this;
                        return new Promise(function(r) {
                            e.login({
                                success: function(e) {
                                    return u(l.default.mark(function o() {
                                        var i, a, c, s, u, f, p, d, v, _, m, y, E;
                                        return l.default.wrap(function(o) {
                                            for (;;) switch (o.prev = o.next) {
                                              case 0:
                                                if (i = n.$store.state.globalData.sys.model, a = void 0 === i ? "" : i, !e.code) {
                                                    o.next = 15;
                                                    break;
                                                }
                                                return c = null, g.default.isMpW && (c = h.apiAuthorizate), g.default.isMpA && (c = h.apiPostAliAppletAuth), 
                                                o.next = 7, c({
                                                    code: e.code,
                                                    model: a,
                                                    showData: !0,
                                                    showMsg: !1
                                                });

                                              case 7:
                                                s = o.sent, u = s.data, f = s.code, d = (p = u || {}).user_info, v = p.session_id, 
                                                _ = p.openid, m = p.uid, y = p.unionid, E = p.alipay_userid, u ? (t && (d ? n.$store.commit("user/setUser", {
                                                    userInfo: d
                                                }) : n.$store.commit("user/setLogin", !1)), n.$store.commit("user/setAuthInfo", {
                                                    sessionId: v,
                                                    openId: _ || E || "",
                                                    uid: m,
                                                    unionId: y
                                                })) : 1 === f ? n.$confirm({
                                                    content: "获取用户授权状态失败，请重新获取",
                                                    success: function() {
                                                        n.autoLogin();
                                                    },
                                                    cancel: function() {
                                                        n.$open({
                                                            type: -1
                                                        });
                                                    }
                                                }) : 2 === f && n.$store.commit("user/setAuthInfo", {
                                                    sessionId: v,
                                                    openId: _ || E || ""
                                                }), r({
                                                    data: u
                                                }), o.next = 17;
                                                break;

                                              case 15:
                                                n.$toast("获取用户授权态失败,请退出重新登录"), r({
                                                    error: !0
                                                });

                                              case 17:
                                              case "end":
                                                return o.stop();
                                            }
                                        }, o);
                                    }))();
                                },
                                fail: function() {
                                    n.$toast("获取用户授权态失败,请退出重新登录"), r({
                                        error: !0
                                    });
                                }
                            });
                        });
                    },
                    requestDoLogin: function(e, t) {
                        var n = arguments, r = this;
                        return u(l.default.mark(function i() {
                            var c, s, f, p, d, v, _, g, E, b, P, O, T, S, R, C, w, k, I, D, x, L, N;
                            return l.default.wrap(function(i) {
                                for (;;) switch (i.prev = i.next) {
                                  case 0:
                                    return c = n.length > 2 && void 0 !== n[2] ? n[2] : "", s = n.length > 3 && void 0 !== n[3] ? n[3] : "", 
                                    f = n.length > 4 && void 0 !== n[4] ? n[4] : "", p = n.length > 5 ? n[5] : void 0, 
                                    d = n.length > 6 && void 0 !== n[6] ? n[6] : {}, v = n.length > 7 && void 0 !== n[7] ? n[7] : {}, 
                                    _ = r.$store.state.globalData, g = _.source, E = _.loginExtendInfo, b = _.shareExtendInfo, 
                                    P = _.sys, O = void 0 === P ? {} : P, T = O.model, S = void 0 === T ? "" : T, r.$storage.remove({
                                        key: m.default.LOCATION
                                    }), R = r, C = a({
                                        ack_register: c,
                                        mobile: e,
                                        code: t,
                                        nickname: "",
                                        headimgurl: "",
                                        model: S,
                                        source: f || g,
                                        extendInfo: JSON.stringify(E)
                                    }, b), s && "string" == typeof s ? C.transTicket = s : s && "object" === o(s) && (C.ticket = s.ticket, 
                                    C.randstr = s.randstr), d.event_id && (C.event_id = d.event_id), d.share_uid && (C.share_uid = d.share_uid), 
                                    C = a(a({}, C), v), (w = A.default.load({
                                        key: "USER_AUTHORIZE_USERINFO"
                                    })) && w.nickName && (C.wx_nick_name = w.nickName, C.wx_img_url = w.avatarUrl), 
                                    i.next = 19, (0, h.apiPostLogin)(C);

                                  case 19:
                                    if (k = i.sent, I = k.data, D = k.code, x = k.msg, 0 === D) {
                                        i.next = 48;
                                        break;
                                    }
                                    if (D !== y.default.ACK_REGISTER) {
                                        i.next = 27;
                                        break;
                                    }
                                    R.$track({
                                        key: "loginPage/reregister",
                                        eventType: "exposure"
                                    }), r.$confirm({
                                        title: "确认重新注册吗？",
                                        content: "当前手机号以前注册过叮咚买菜APP，并已完成注销",
                                        success: function() {
                                            R.requestDoLogin(e, t, "1", s, f, p, d), R.$track({
                                                key: "loginPage/reregister/confirm",
                                                eventType: "click"
                                            });
                                        },
                                        cancel: function() {
                                            R.$track({
                                                key: "loginPage/reregister/cancel",
                                                eventType: "click"
                                            });
                                        }
                                    }), i.next = 46;
                                    break;

                                  case 27:
                                    if ((1 !== D || "请退出小程序重新登录" !== x) && D !== y.default.AUTH_FAIL_OPENID) {
                                        i.next = 32;
                                        break;
                                    }
                                    r.autoLogin(), R.$toast("登录失败，请重试"), i.next = 46;
                                    break;

                                  case 32:
                                    if (-2 !== D) {
                                        i.next = 37;
                                        break;
                                    }
                                    x && R.$toast(x), r.autoLogin(), i.next = 46;
                                    break;

                                  case 37:
                                    if (-1001 !== D) {
                                        i.next = 45;
                                        break;
                                    }
                                    if (!s) {
                                        i.next = 42;
                                        break;
                                    }
                                    return R.type = 2, R.$toast("当前服务异常，请稍后重试！", 2e3), i.abrupt("return");

                                  case 42:
                                    "dingdong" === I.captcha_type ? r.gotoDDCaptcha(e) : "tencent" === I.captcha_type && r.gotoTXCaptcha(), 
                                    i.next = 46;
                                    break;

                                  case 45:
                                    x && R.$toast(x);

                                  case 46:
                                    i.next = 54;
                                    break;

                                  case 48:
                                    L = I.id, N = I.session_id, r.$store.commit("user/setUser", {
                                        userInfo: I
                                    }), N && R.$store.commit("user/setAuthInfo", {
                                        sessionId: N
                                    }), R.$toast("登录成功", 2e3), p && "function" == typeof p ? p(I) : setTimeout(function() {
                                        R.$open({
                                            type: -1
                                        });
                                    }, 1e3), [ "appletAttend" ].includes(v.loginType) || setTimeout(u(l.default.mark(function e() {
                                        return l.default.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                return e.next = 2, r.userAddressTip({
                                                    uid: L
                                                });

                                              case 2:
                                                r.addressTipContinue = e.sent;

                                              case 3:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                    })), 2e3);

                                  case 54:
                                  case "end":
                                    return i.stop();
                                }
                            }, i);
                        }))();
                    },
                    modelCheckLogin: function() {
                        var e = this;
                        return new Promise(function() {
                            var t = u(l.default.mark(function t(n) {
                                var r, o, i, c, s, u, f, p;
                                return l.default.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        if (!g.default.isApp) {
                                            t.next = 4;
                                            break;
                                        }
                                        e.$bridge.getUserInfo(function(t) {
                                            var r = t.data;
                                            if (r) {
                                                var o = r.uid, i = r.device_token, c = void 0 === i ? "" : i, s = !!o;
                                                r.user_login = s, s ? (e.$store.commit("user/setUser", {
                                                    userInfo: a(a({}, r), {}, {
                                                        id: o
                                                    })
                                                }), e.modelGetAppInfo()) : e.$store.commit("user/clearUser"), e.$store.commit("user/setIsLogin", s), 
                                                e.$store.commit("user/setDeviceInfo", {
                                                    appDeviceToken: c
                                                });
                                            }
                                            n(r || {
                                                user_login: 0
                                            });
                                        }), t.next = 19;
                                        break;

                                      case 4:
                                        return t.next = 6, (0, h.apiPostCheckLogin)({});

                                      case 6:
                                        if (r = t.sent, !(o = r.data)) {
                                            t.next = 18;
                                            break;
                                        }
                                        if (i = o.user_login, c = o.wx_auth, s = (0, _.h5Query)(), i && (u = document.cookie.match(new RegExp("(^| )".concat("DDXQSESSID", "=([^;]*)(;|$)"))), 
                                        e.$store.commit("user/setAuthInfo", {
                                            sessionId: u ? u[2] : ""
                                        }), e.modelGetUserInfo(), e.modelGetAppInfo()), !g.default.isWeixinBroswer || c || s.h5_source) {
                                            t.next = 17;
                                            break;
                                        }
                                        return f = window.location.toString(), p = (0, h.apiGetWxH5Auth)({
                                            pageUrl: f
                                        }), e.$open({
                                            url: p
                                        }), t.abrupt("return");

                                      case 17:
                                        e.$store.commit("user/setIsLogin", !!i);

                                      case 18:
                                        n(o || {
                                            user_login: 0
                                        });

                                      case 19:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                            }));
                            return function(e) {
                                return t.apply(this, arguments);
                            };
                        }());
                    },
                    modelManualLogin: function(e) {
                        g.default.isMpUc || g.default.isMpQuark ? this.$toast("".concat(g.default.isMpUc ? "UC" : "夸克", "\b仅支持用户一键登录")) : this.$open({
                            url: d.PATH.PAGE_LOGIN,
                            params: e || {}
                        });
                    },
                    logout: function() {
                        var e = this, t = this;
                        return new Promise(function() {
                            var n = u(l.default.mark(function n(r) {
                                var o, i, a;
                                return l.default.wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                      case 0:
                                        return o = {}, o = h.apiLogout, n.next = 4, o({
                                            showMsg: !1
                                        });

                                      case 4:
                                        i = n.sent, (a = i.data) ? (e.$store.commit("globalData/clearAB"), e.$store.commit("user/clearUser"), 
                                        e.$store.commit("cart/setCartProduct", {}), e.$store.commit("cart/setTotalCount", 0), 
                                        e.$store.commit("globalData/update", {
                                            source: "",
                                            shareExtendInfo: void 0
                                        }), e.$storage.remove({
                                            key: m.default.LOCATION
                                        }), e.$storage.remove({
                                            key: m.default.LOCATION_ADDRESS
                                        }), (0, b.getLocationStationId)(function() {
                                            return r(a);
                                        }), e.autoLogin(), setTimeout(function() {
                                            t.$open({
                                                type: -1
                                            });
                                        }, 500)) : r();

                                      case 7:
                                      case "end":
                                        return n.stop();
                                    }
                                }, n);
                            }));
                            return function(e) {
                                return n.apply(this, arguments);
                            };
                        }());
                    },
                    modelAllCheckLogin: function() {
                        var e = this;
                        return u(l.default.mark(function t() {
                            return l.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.modelCheckLocalSession(!0);

                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    modelGetAppInfo: function() {
                        var e = arguments, t = this;
                        return u(l.default.mark(function n() {
                            var r, o, i, c;
                            return l.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, o = r.city_number, n.next = 3, 
                                    (0, h.apiGetAppInfo)(a({
                                        ver: new Date().getTime(),
                                        showMsg: !1
                                    }, o ? {
                                        city_number: o
                                    } : {}));

                                  case 3:
                                    i = n.sent, (c = i.data) && (t.$store.state.globalData.appInfo = c, t.$storage.save({
                                        key: m.default.APP_INFO,
                                        data: c
                                    }));

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    modelGetUserInfo: function() {
                        var e = this;
                        return u(l.default.mark(function t() {
                            var n, r;
                            return l.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, (0, h.apiGetUserInfo)({});

                                  case 2:
                                    return n = t.sent, (r = n.data) && e.$store.commit("user/setUser", {
                                        userInfo: r
                                    }), t.abrupt("return", r);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    modelGetUserDetail: function() {
                        var e = this;
                        return u(l.default.mark(function t() {
                            var n, r, o, i;
                            return l.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, (0, v.apiGetUserDetail)();

                                  case 2:
                                    n = t.sent, (r = n.data) && (o = r.user_info, i = r.session_id, e.$store.commit("user/setUser", {
                                        userInfo: o
                                    }), i && e.$store.commit("user/setAuthInfo", {
                                        sessionId: i
                                    }));

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    checkOldRecall: function() {
                        var e = this;
                        return u(l.default.mark(function t() {
                            var n, r, o, i, a, c;
                            return l.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!((n = e.$store.state.globalData.sceneId) && n.indexOf("invite") > -1) || P) {
                                        t.next = 19;
                                        break;
                                    }
                                    return P = !0, r = decodeURIComponent(n), o = f.default.parse(r), i = o.invite, 
                                    e.$loading(.4, !1), t.prev = 6, t.next = 9, (0, h.getOldRecall)({
                                        decrypt_key: i
                                    });

                                  case 9:
                                    a = t.sent, (c = a.success) && e.$toast("登录成功", 2e3), t.next = 18;
                                    break;

                                  case 14:
                                    t.prev = 14, t.t0 = t.catch(6), e.$toast("系统异常请稍后再试"), e.$loading(-1, !1);

                                  case 18:
                                    setTimeout(function() {
                                        e.$loading(-1, !1), P = !1, e.$open({
                                            url: d.PATH.PAGE_HOME
                                        });
                                    }, 2e3);

                                  case 19:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 6, 14 ] ]);
                        }))();
                    }
                }
            });
            t.default = O;
        }).call(this, n("543d").default);
    },
    e552: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LOYOUT = t.COLORS = void 0;
        var r = {
            GREEN: "#2FB157",
            GREY_3: "#333333"
        };
        t.COLORS = r;
        var o = {};
        t.LOYOUT = o;
    },
    e683: function(e, t, n) {
        e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
    },
    eb8e: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                isAndroid: !1,
                isIos: !1,
                isApp: !1,
                isWeixinBroswer: !1,
                isAlipayBroswer: !1,
                isH5: !1,
                version: 0,
                appVersion: 0,
                station: "",
                isMpW: !1,
                isMpA: !1,
                isMpUc: !1,
                isMpQuark: !1,
                isGat: !1,
                isOk: !1,
                isZgh: !1,
                isNative: !1,
                carrotAppVersion: ""
            };
            e.getSystemInfo({
                success: function(e) {
                    var t = e.version, r = e.SDKVersion, o = void 0 === r ? "0" : r, i = e.system;
                    n.isAndroid = "android" === e.platform, n.isIos = "ios" === e.platform, n.version = i, 
                    n.appVersion = t, n.SDKVersion = o, n.sysInfo = e, n.isMpUc = "UC" === e.app, n.isMpQuark = "QUARK" === e.app;
                }
            }), n.isMpA = !1, n.isMpW = !0, n.name = "", n.name = "mp-weixin";
            var r = n;
            t.default = r;
        }).call(this, n("543d").default);
    },
    ed04: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = [ 6, 1, 2, 0, 7, 4, 3, 5 ], o = {
            namespaced: !0,
            state: {
                activeTabId: 1,
                blockInViewEl: {},
                blockInViewId: {},
                showDot: !0,
                dotLeft: 0
            },
            mutations: {
                setBlockInView: function(e, t) {
                    var n = e.blockInViewId;
                    n[t.id] = t.intersectionRatio;
                    for (var o = 0; o < r.length; o++) if (n[r[o]]) {
                        e.activeTabId = r[o];
                        break;
                    }
                },
                setBlockInViewEl: function(e, t) {
                    e.blockInViewEl[t.id] = t.query;
                },
                setVipPayDot: function(e, t) {
                    e.showDot = t;
                },
                setVipPayDotLeft: function(e, t) {
                    e.showDot = !0, e.dotLeft = t;
                }
            }
        };
        t.default = o;
    },
    f0bd: function(e, t, n) {
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.addCartType = void 0, t.addCartType = r, function(e) {
            e[e.ACTIVITY = 0] = "ACTIVITY", e[e.NORMAL = 1] = "NORMAL", e[e.DELIVER = 2] = "DELIVER", 
            e[e.FREE_FOOD = 3] = "FREE_FOOD", e[e.FREE_TICKET = 4] = "FREE_TICKET";
        }(r || (t.addCartType = r = {}));
    },
    f0c5: function(e, t, n) {
        function r(e, t, n, r, o, i, a, c, s, u) {
            var l, f = "function" == typeof e ? e.options : e;
            if (s) {
                f.components || (f.components = {});
                var p = Object.prototype.hasOwnProperty;
                for (var d in s) p.call(s, d) && !p.call(f.components, d) && (f.components[d] = s[d]);
            }
            if (u && ((u.beforeCreate || (u.beforeCreate = [])).unshift(function() {
                this[u.__module] = this;
            }), (f.mixins || (f.mixins = [])).push(u)), t && (f.render = t, f.staticRenderFns = n, 
            f._compiled = !0), r && (f.functional = !0), i && (f._scopeId = "data-v-" + i), 
            a ? (l = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), 
                o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a);
            }, f._ssrRegister = l) : o && (l = c ? function() {
                o.call(this, this.$root.$options.shadowRoot);
            } : o), l) if (f.functional) {
                f._injectStyles = l;
                var h = f.render;
                f.render = function(e, t) {
                    return l.call(t), h(e, t);
                };
            } else {
                var v = f.beforeCreate;
                f.beforeCreate = v ? [].concat(v, l) : [ l ];
            }
            return {
                exports: e,
                options: f
            };
        }
        n.d(t, "a", function() {
            return r;
        });
    },
    f0df: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : _typeof(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
            })(e);
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function s(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function u(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    function i(e) {
                        s(c, r, o, i, a, "next", e);
                    }
                    function a(e) {
                        s(c, r, o, i, a, "throw", e);
                    }
                    var c = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function p(e, t, n) {
            return t && f(e.prototype, t), n && f(e, n), e;
        }
        function d(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t);
        }
        function h(e, t) {
            return (h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e;
            })(e, t);
        }
        function v(e) {
            var t = m();
            return function() {
                var n, r = y(e);
                if (t) {
                    var o = y(this).constructor;
                    n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return _(this, n);
            };
        }
        function _(e, t) {
            return !t || "object" !== o(t) && "function" != typeof t ? g(e) : t;
        }
        function g(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function m() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                !0;
            } catch (e) {
                return !1;
            }
        }
        function y(e) {
            return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.TVue = void 0;
        var E = r(n("a34a")), A = n("5afa"), b = r(n("1030")), P = r(n("99d2")), O = function(e) {
            function t(e) {
                var r;
                return l(this, t), r = n.call(this, e), r.name = "vue", r.httpHead = window.location.protocol, 
                r.deferObserveArr = [], r.baseComponentName = e.baseComponentName || "app", r;
            }
            d(t, b.default);
            var n = v(t);
            return p(t, [ {
                key: "setLocalData",
                value: function() {
                    var e = u(E.default.mark(function e(t) {
                        var n, r = arguments;
                        return E.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                n = r.length > 1 && void 0 !== r[1] ? r[1] : this.localKey, localStorage.setItem(n, JSON.stringify(t));

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }()
            }, {
                key: "getLocalData",
                value: function() {
                    var e = u(E.default.mark(function e() {
                        var t, n, r = arguments;
                        return E.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t = r.length > 0 && void 0 !== r[0] ? r[0] : this.localKey, n = localStorage.getItem(t), 
                                e.abrupt("return", n ? JSON.parse(n) : null);

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }()
            }, {
                key: "mixin",
                value: function() {
                    var e = this, t = /(App)|(div)|(span)/, n = {}, r = {}, o = function(t) {
                        if (e.referer.page, t.isTrackPage) {
                            var n = e.referer.page;
                            if (t.isTrackPage) {
                                var r = t.currentTrackKey.split("/")[0];
                                n.length > 1 && n[1] === r ? e.referer.back() : e.referer.push(r), t.pageTrackOnShow(t);
                            }
                        }
                    };
                    e.getConfig("APP");
                    var i = {
                        beforeRouteEnter: function(e, t, n) {
                            n(function(e) {
                                e.isRouterEnter = !0, o(e);
                            });
                        },
                        beforeRouteLeave: function(e, t, n) {
                            this.isTrackPage && this.pageTrackOnHide(), n();
                        }
                    };
                    return a(a(a({}, {
                        mounted: function() {
                            var t = this, i = this.currentTrackKey;
                            this.$options.trackPage && this.pageElapseByNative(), !e.isSingle && this.$options.trackPage && (e.getConfig(i), 
                            setTimeout(function() {
                                t.$track({
                                    key: i,
                                    eventType: "exposure"
                                }, t.trackDataComputed());
                            })), this.$options.trackPage && e.options.isSingle && !this.isRouterEnter && o(this), 
                            this.isTrackPage && !n[i] && (n[i] = function() {
                                !t.isTrackPage || t.currentTrackKey.split("/")[0] !== e.referer.page[0] && e.referer.page[0] || ("hidden" === document.visibilityState ? t.pageTrackOnHide() : e.hidePage && e.hidePage === t.currentTrackKey && t.$track({
                                    key: i,
                                    eventType: "exposure"
                                }, t.trackDataComputed()));
                            }, document.addEventListener("visibilitychange", n[i]));
                            var a = new IntersectionObserver(function(n) {
                                n.forEach(function(n) {
                                    e.ignoreCoverageIndex.length && !n.intersectionRatio || t.pageTrackDomObserve(n);
                                });
                            }, {
                                rootMargin: "0px"
                            }), c = this.currentTrackKey.split("/")[0];
                            if (!e.configPaths.get(c) || (e.configPaths.get(c) || []).find(function(e) {
                                var n = e.split("/");
                                return n.splice(-1), t.currentTrackKey === n.join("/");
                            })) {
                                var s = function() {
                                    Array.from(document.getElementsByClassName("".concat(t.vForTrackIndexClassKey))).forEach(function(e) {
                                        var t = (0, A.getEleXPath)(e) + e.innerHTML;
                                        r[t] || (a.observe(e), r[t] = 1);
                                    });
                                };
                                setTimeout(function() {
                                    (0, A.isCanObserve)(t) ? s() : e.deferObserveArr.push(s);
                                }, 1e3);
                            }
                        },
                        beforeDestroy: function() {
                            this.isTrackPage && (r = {}), this.pageTrackDestroyed();
                        }
                    }), e.isSingle ? i : {}), (0, P.default)(e, t));
                }
            }, {
                key: "install",
                value: function(e, t) {
                    e.prototype.$track = this.track.bind(this), e.mixin(this.mixin());
                }
            } ]), t;
        }();
        t.TVue = O;
    },
    f14d: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.IGNORE_CURRENT_PATH = t.OLD_PATH = t.NAV_BAR = t.PATH = void 0;
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("eb8e")), o = {
            PAGE_HOME: "/pages/mainPackage/home/home",
            PAGE_CART: "/pages/mainPackage/cart/cart",
            PAGE_LOGIN: "/pages/common/login/login",
            PAGE_MINE: "/pages/mainPackage/mine/mine",
            PAGE_MIDDLE_PRODUCT_DETAIL: "/pages/productDetail/productDetail",
            PAGE_PRODUCT_DETAIL: "/pages/productPackage/productDetail/productDetail",
            PAGE_PRODUCT_DETAIL_NATIVE: "/pages/productPackage/productDetail/productDetailNative",
            PAGE_GOOD_PACKAGE: "/pages/productPackage/goodPackage/goodPackage",
            PAGE_ADDRESS_LOCAL: "/pages/addressPackage/addressLocal/addressLocal",
            PAGE_LOCAL: "/pages/addressPackage/local/local",
            PAGE_SEARCH: "/pages/common/search/search",
            PAGE_SEARCH_HISTORY: "/pages/common/search/searchHistory",
            PAGE_SEARCH_RESULT: "/pages/common/search/searchResult",
            PAGE_SUB_SEARCH_RESULT: "/pages/common/search/subSearchResult",
            PAGE_SUB_SEARCH_REC: "/pages/common/search/subSearchRecommend",
            PAGE_LEADER_BOARD: "/pages/common/leaderBoard/leaderBoard",
            PAGE_TOPIC_BOARD: "/pages/common/topicBoard/topicBoard",
            PAGE_ORDERS: "/pages/orderPackage/mineOrders/mineOrders",
            PAGE_ORDER_DETAIL: "/pages/orderPackage/mineOrderDetail/mineOrderDetail",
            PAGE_COMMENT_ADD: "/pages/orderPackage/commentAdd/commentAdd",
            PAGE_COMMENT_OVER: "/pages/orderPackage/commentAdd/commentOver",
            PAGE_MOTHER_MOTERCHANNEL: "/pages/activityPackage/motherChannel/motherChannel",
            PAGE_COMMENT_PRODUCT: "/pages/orderPackage/commentProduct/commentProduct",
            PAGE_COMMENT_IMAGE: "/pages/orderPackage/commentImage/commentImage",
            PAGE_NEW_MAKE_ORDER: "/pages/orderPackage/makeOrder/newMakeOrder",
            PAGE_MAKE_ORDER_NOTE: "/pages/orderPackage/makeOrder/editNote/editNote",
            PAGE_MAKE_ORDER_MULTIPLE_NOTE: "/pages/orderPackage/makeOrder/multipleNote/multipleNote",
            PAGE_MAKE_ORDER_PRODUCT_LIST: "/pages/orderPackage/makeOrder/productList/productList",
            PAGE_USE_COUPON: "/pages/couponPackage/useCoupon/useCoupon",
            PAGE_ORDER_SEARCH: "/pages/orderPackage/orderSearch/orderSearch",
            PAGE_REFUND: "/pages/afterSalePackage/refund/refund",
            PAGE_REFUND_APPLY: "/pages/afterSalePackage/refundApply/refundApply",
            PAGE_REFUND_DETAIL: "/pages/afterSalePackage/refundDetail/refundDetail",
            PAGE_EXCHANGE_GOODS: "/pages/afterSalePackage/exchangeGoods/exchangeGoods",
            PAGE_GETGOODS: "/pages/afterSalePackage/getGoods/getGoods",
            PAGE_ACCOUNT: "/pages/minePackage/accountManage/accountManage",
            PAGE_ABOUT: "/pages/minePackage/about/about",
            PAGE_REFUND_CYCLE: "/pages/minePackage/refundCycle/refundCycle",
            PAGE_REFUND_RESULT: "/pages/minePackage/refundResult/refundResult",
            PAGE_SECURITY: "/pages/minePackage/security/security",
            PAGE_PRIVACY: "/pages/minePackage/security/privacy",
            PAGE_MOBILE_AUTH: "/pages/minePackage/security/mobileAuth",
            PAGE_PAYMENT_PASS: "/pages/minePackage/security/paymentPass",
            PAGE_GIFT_CARD_TRANSACTIONS: "/pages/giftCardPackage/giftCardTransactions/giftCardTransactions",
            PAGE_PAY_RESULT: "/pages/orderPackage/makeOrder/payResult/payResult",
            PAGE_USER_COUPON: "/pages/couponPackage/userCoupon/userCoupon",
            PAGE_ADDRESS: "/pages/addressPackage/address/address",
            PAGE_ADDRESS_CREATE: "/pages/addressPackage/addressCreate/addressCreate",
            PAGE_WEB_VIEW: "/pages/common/webView/webView",
            PAGE_GAME_WEB_VIEW: "/pages/activityPackage/gameWebview/gameWebview",
            PAGE_ORDER_STATE: "/pages/orderPackage/orderState/orderState",
            PAGE_CONTACT_HELP: "/pages/minePackage/contactHelp/contactHelp",
            PAGE_REMINDED_ORDER: "/pages/minePackage/remindedOrder/remindedOrder",
            PAGE_INVOICING_SERVER: "/pages/minePackage/invoicing/invoicingServer",
            PAGE_INVOICING: "/pages/minePackage/invoicing/invoicing",
            PAGE_INVOICING_DETAIL: "/pages/minePackage/invoicing/invoicingDetail",
            PAGE_INVOICING_HISTORY: "/pages/minePackage/invoicing/invoicingHistory",
            PAGE_QUESTION_DETAIL: "/pages/minePackage/questionDetail/questionDetail",
            PAGE_RECIPES_PUSH: "/pages/recipesPackage/recipesPush/recipesPush",
            PAGE_RECIPES_AUTHOR: "/pages/recipesPackage/recipesAuthor/recipesAuthor",
            PAGE_RECIPES_DETAIL: "/pages/recipesPackage/recipesDetail/recipesDetail",
            PAGE_MEALS_ALL: "/pages/recipesPackage/recipesMeales/recipesMeales",
            PAGE_RECIPES_SEARCH: "/pages/recipesPackage/searchRecipes/searchRecipes",
            PAGE_RECIPES_ALL: "/pages/recipesPackage/recipesAll/recipesAll",
            PAGE_MEALS_CATEGORY_ALL: "/pages/recipesPackage/recipesCategoryMeales/recipesCategoryMeales",
            PAGE_CATE: "/pages/mainPackage/cate/cate",
            PAGE_FLASH_SALE: "/pages/productPackage/flashSale/flashSale",
            PAGE_PIECE_TOGETHER: "/pages/productPackage/pieceTogether/pieceTogether",
            PAGE_COMBINATION_PRODUCT: "/pages/productPackage/combinationProduct/combinationProduct",
            PAGE_PRODUCT_CHANNEL: "/pages/productPackage/productChannel/productChannel",
            PAGE_TRADE_LIST: "/pages/productPackage/tradeList/tradeList",
            PAGE_TRADE_PIECE: "/pages/productPackage/tradePiece/tradePiece",
            PAGE_DEVELOPER: "/pages/minePackage/developer/developer",
            PAGE_SPECIAL: "/pages/specialPackage/special/special",
            PAGE_SPECIAL_NEW_COMER: "/pages/specialPackage/specialNewComer/specialNewComer",
            PAGE_DOWNLOAD: "/pages/minePackage/download/download",
            PAGE_FEEDBACK: "/pages/minePackage/feedback/feedback",
            PAGE_LOGIN_CHOOSE: "/pages/common/loginChoose/loginChoose",
            PAGE_REDIRECT_VIP: "/pages/mainPackage/redirectVip/redirectVip",
            PAGE_VIP: "/pages/mainPackage/vip/vip",
            PAGE_VIP_PAY: "/pages/vipPackage/vipPay/vipPay",
            PAGE_VIP_SELF: "/pages/vipPackage/vipSelf/vipSelf",
            PAGE_VIP_PRODUCTS: "/pages/vipPackage/vipProduct/vipProduct",
            PAGE_VIP_PAY_RESULT: "/pages/vipPackage/vipPayResult/vipPayResult",
            PAGE_VIP_PAY_CARD_SIGN_DETAIL: "/pages/vipPackage/vipSignCardDetail/vipSignCardDetail",
            PAGE_VIP_RECORD: "/pages/vipPackage/vipRecord/vipRecord",
            PAGE_VIP_GIFTS: "/pages/vipPackage/vipGifts/vipGifts",
            PAGE_REGULAR_BUY_LIST: "/pages/orderPackage/regularBuy/regularBuy",
            PAGE_OFTEN_BUY: "/pages/orderPackage/oftenBuy/oftenBuy",
            PAGE_COMPENSATE_REMARK: "/pages/orderPackage/compensateRemark/compensateRemark",
            PAGE_GIFT_EARN: "/pages/minePackage/giftEarn/giftEarn",
            PAGE_GIFT_RECEIVE: "/pages/minePackage/giftReceive/giftReceive",
            PAGE_GIFT_WEBVIEW_RECEIVE: "/pages/minePackage/giftReceive/giftReceiveWebview",
            PAGE_GIFT_RECEIVE_WEBVIEW: "/pages/minePackage/giftReceiveWebview/giftReceiveWebview",
            PAGE_ACCEPT_DETAIL: "/pages/minePackage/acceptDetail/acceptDetail",
            PAGE_LIKE_PRODUCT: "/pages/productPackage/likePackage/likePackage",
            PAGE_LEAVE_MSG: "/pages/activityPackage/leaveMessage/leaveMessage",
            PAGE_LEAVE_MSG_LIST: "/pages/activityPackage/leaveMessage/messageList",
            PAGE_ADD_MSG: "/pages/activityPackage/addMessage/addMessage",
            PAGE_ADD_MSG_RESULT: "/pages/activityPackage/msgResult/msgResult",
            PAGE_HOARDLOTTERY: "/pages/activityPackage/hoardLottery/hoardLottery",
            PAGE_HOARDLOTTERY_RANK: "/pages/activityPackage/hoardLottery/hoardLotteryRank",
            PAGE_HOARDLOTTERY_TICKET: "/pages/activityPackage/hoardLottery/hoardLotteryTicket",
            PAGE_HOARDLOTTERY_AWARD: "/pages/activityPackage/hoardLottery/hoardLotteryAward",
            PAGE_USER_INFO: "/pages/minePackage/userInfo/userInfo",
            PAGE_USER_GENDER: "/pages/minePackage/userGender/userGender",
            PAGE_USER_NAME: "/pages/minePackage/userName/userName",
            PAGE_GIFT_CARD: "/pages/giftCardPackage/giftCard/giftCard",
            PAGE_QUESTIONS: "/pages/productPackage/questions/questions",
            PAGE_INTEGRAL_LOTTERY: "/pages/lotteryPackage/orderLottery/orderLottery",
            PAGE_RECORD_LOTTERY: "/pages/lotteryPackage/prizeRecord/prizeRecord",
            PAGE_MARKETING_LOTTERY: "/pages/lotteryPackage/marketingLottery/marketingLottery",
            PAGE_MARKETING_RECORD_LOTTERY: "/pages/lotteryPackage/marketingLotteryRecord/marketingLotteryRecord",
            PAGE_CARD_LOTTERY: "/pages/activityPackage/cardLottery/cardLottery",
            PAGE_CARD_LOTTERY_RECORD: "/pages/activityPackage/cardLotteryRecord/cardLotteryRecord",
            PAGE_COUPON_ACTIVITY: "/pages/activityPackage/couponActivity/couponActivity",
            PAGE_LUCK_RED_PACKET: "/pages/redPacketPackage/luckRedPacket/luckRedPacket",
            PAGE_SHARE_RED_PACKET: "/pages/redPacketPackage/shareRedPacket/shareRedPacket",
            PAGE_SHARE_RED_PACKET_RULE: "/pages/redPacketPackage/redPacketRule/redPacketRule",
            PAGE_FARM_INVITE: "/pages/activityPackage/farmInvite/farmInvite",
            PAGE_FARM_INVITE_OLD: "/pages/farmInvite/farmInvite",
            PAGE_LIVE_SHARE: "/pages/activityPackage/liveShare/liveShare",
            PAGE_CUMULATIVE_ORDERS: "/pages/activityPackage/cumulativeOrders/cumulativeOrders",
            PAGE_SHARE_HELP_HOME: "/pages/shareHelpPackage/atyDetail/atyDetail",
            PAGE_SHARE_HELP_HELP_RECORD: "/pages/shareHelpPackage/helpRecord/helpRecord",
            PAGE_SHARE_HELP_ATY_RULE: "/pages/shareHelpPackage/atyRule/atyRule",
            PAGE_SHARE_HELP_ATY_RECORD: "/pages/shareHelpPackage/atyRecord/atyRecord",
            PAGE_SHARE_HELP_ATY_LIST: "/pages/shareHelpPackage/atyList/atyList",
            PAGE_GAME: "/pages/game/game",
            PAGE_BUY_COUPONS_INDEX: "/pages/activityPackage/buyCoupons/buyCoupons",
            PAGE_BUY_COUPONS_RECORDS: "/pages/activityPackage/buyCouponsRecords/buyCouponsRecords",
            PAGE_BUY_COUPONS_RULES: "/pages/activityPackage/buyCoupons/buyCouponRules",
            PAGE_GIFTSMANAGE: "/pages/minePackage/gifts/gifts",
            PAGE_INVOICE: "/pages/invoicePackage/invoice/invoice",
            PAGE_INVOICE_DETAIL: "/pages/invoicePackage/invoice/detailInfo",
            PAGE_INVOICE_RESULT: "/pages/invoicePackage/invoice/submitResult",
            PAGE_INVOICE_VIEWER: "/pages/invoicePackage/viewer/viewer",
            PAGE_INVOICE_SCAN: "/pages/invoicePackage/scan/scan",
            PAGE_AUTO_SCENE_BOARD: "/pages/autoScenePackage/board/board",
            PAGE_COLLECTION: "/pages/minePackage/collection/collection",
            PAGE_GROUP_LIST: "/pages/groupPackage/groupList/groupList",
            PAGE_GROUP_PRODUCT_DETAIL: "/pages/groupPackage/groupProductDetail/groupProductDetail",
            PAGE_GROUP_DETAIL: "/pages/groupPackage/groupDetail/groupDetail",
            PAGE_SAMPLE_TASTE: "/pages/activityPackage/sampleTaste/sampleTaste",
            PAGE_SAMPLE_TASTE_DETAIL: "/pages/activityPackage/sampleDetail/sampleDetail",
            PAGE_SAMPLE_COMMENT: "/pages/activityPackage/sampleComment/sampleComment",
            PAGE_NEW_FlASHSALE: "/pages/newFlashSale/newFlashSale",
            PAGE_SAMPLE_ORDER_LIST: "/pages/activityPackage/sampleOrderList/sampleOrderList",
            PAGE_SAMPLE_LOTTERY_LIST: "/pages/activityPackage/SampleLotteryList/SampleLotteryList",
            PAGE_FLOP_PRIZE_RECORDS: "/pages/newFlashSale/flopPrizeRecords",
            PAGE_EASY_ORDER_RECORD: "/pages/activityPackage/easyOrder/easyOrderRecord",
            PAGE_EASY_ORDER: "/pages/activityPackage/easyOrder/easyOrder",
            PAGE_THIRD_SIDE: "/pages/autoScenePackage/thirdSide/thirdSide",
            PAGE_PRODUCT_COMMENT: "/pages/productPackage/productComment/productComment",
            PAGE_COLLAPSED_COMMENT: "/pages/productPackage/collapsedComment/collapsedComment"
        };
        t.PATH = o, o.PAGE_RECIPES = "/pages/recipesPackage/recipes/recipes";
        var i = [ o.PAGE_HOME, o.PAGE_CATE, o.PAGE_REDIRECT_VIP, o.PAGE_CART, o.PAGE_MINE ];
        t.NAV_BAR = i;
        var a = [ o.PAGE_REDIRECT_VIP ];
        t.IGNORE_CURRENT_PATH = a;
        var c = {
            PAGE_HOME: "/pages/home/home",
            PAGE_GIFT_EARN: "/pages/giftEarn/giftEarn",
            PAGE_GIFT_RECEIVE: "/pages/giftReceive/giftReceive",
            PAGE_LUCK_RED_PACKET: "/pages/spellLuckRedPacket/spellLuckRedPacket",
            PAGE_PRODUCT_DETAIL: r.default.isMpW ? "/pages/productDetail/productDetail" : "/pages/mainPackage/productDetail/productDetail",
            PAGE_RECIPES_DETAIL: "/pages/recipesDetail/recipesDetail",
            PAGE_SPECIAL: r.default.isMpW ? "/pages/special/special" : "/pages/mainPackage/special/special",
            PAGE_SPECIAL_NEW_COMER: r.default.isMpW ? "/pages/newZone/newZone" : "/pages/mainPackage/special/specialNewComer",
            PAGE_COUPON_ACTIVITY: "/pages/couponsActivity/couponsActivity",
            PAGE_LEAVE_MSG: "/pages/leaveMessage/leaveMessage",
            PAGE_FLASH_SALE: "/pages/flashSale/flashSale"
        };
        t.OLD_PATH = c;
    },
    f33d: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.reqeuestSMDeviceId = void 0;
        var c = n("27a2"), s = n("98be"), u = r(n("0613")), l = r(n("3c44"));
        l.default.initConf({
            organization: "dHlAZfLJWqK2ndgYwMU0",
            apiHost: "ddriskfp.api.ddxq.mobi",
            key: "DDMC-tx"
        });
        var f = function(e) {
            var t, n = (null === (t = u.default.state) || void 0 === t ? void 0 : t.user) || {}, r = n.userInfo, o = void 0 === r ? {} : r, i = n.userAuthInfo, a = void 0 === i ? {} : i;
            setTimeout(function() {
                (0, s.uploadDeviceToken)({
                    data: e,
                    device_id: a.openId || o.id
                });
            });
        };
        t.reqeuestSMDeviceId = f;
        var p = {}, d = {
            categoryPage: c.DEVICE_SCENE.VIEW_CATEGORY_PAGE,
            productDetailPage: c.DEVICE_SCENE.VIEW_PRODUCT_DETAIL_PAGE,
            "/homeApi/newCategories": c.DEVICE_SCENE.API_CATEGORY_PAGE,
            "/productApi/productDetail": c.DEVICE_SCENE.API_PRODUCT_DETAIL_PAGE
        };
        l.default.uploadPageDeviceId = function(e) {
            var t, n, r = (null === (t = u.default.state) || void 0 === t || null === (n = t.globalData) || void 0 === n ? void 0 : n.maicaiAppConfig) || {}, o = r.fp_scene_count, a = r.fp_api_count, c = i(i({}, o), a);
            c && c[e] && d[e] && (p[e] || (p[e] = 0), p[e]++, c[e] <= p[e] && (l.default.uploadSMDeviceId(d[e]), 
            delete d[e]));
        }, l.default.uploadSMDeviceId = function(e) {
            if (e) {
                var t, n, r, o = {
                    source: c.DEVICE_FACTORY.SHUMEI,
                    token: l.default.getDeviceId(),
                    uid: null === (t = u.default.state) || void 0 === t || null === (n = t.user) || void 0 === n || null === (r = n.userInfo) || void 0 === r ? void 0 : r.id,
                    scene: e
                };
                f(o);
            }
        };
        var h = l.default;
        t.default = h;
    },
    f6b4: function(e, t, n) {
        function r() {
            this.handlers = [];
        }
        var o = n("c532");
        r.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }), this.handlers.length - 1;
        }, r.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null);
        }, r.prototype.forEach = function(e) {
            o.forEach(this.handlers, function(t) {
                null !== t && e(t);
            });
        }, e.exports = r;
    },
    fc99: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.funSesiEncrypt = void 0;
        var r = n("6ddb"), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("8237")), i = n("7282");
        t.funSesiEncrypt = function(e) {
            try {
                var t = i.hex_md5(e).substring(5, 21), n = (0, r.randStr)(7), a = (0, o.default)(n);
                return n + i.hex_md5(a + e + t + n);
            } catch (e) {
                var c = (0, r.randStr)(18);
                return (0, o.default)(c) + c.substring(5, 12);
            }
        };
    },
    fccf: function(e, t, n) {
        var r, o;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RANK_LAYOUT = t.SEARCH_LAYOUT = void 0, t.SEARCH_LAYOUT = r, function(e) {
            e[e.ONE = 0] = "ONE", e[e.TWO = 1] = "TWO";
        }(r || (t.SEARCH_LAYOUT = r = {})), t.RANK_LAYOUT = o, function(e) {
            e[e.HOME_TWO = 2] = "HOME_TWO", e[e.SEARCH_TWO = 3] = "SEARCH_TWO", e[e.SEARCH_ONE = 1] = "SEARCH_ONE";
        }(o || (t.RANK_LAYOUT = o = {}));
    },
    fe858: function(e, t, n) {
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function i(e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e;
        }
        var a, c;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.CALCULATION_TYPE = t.OPERATE_TYPE = void 0, t.OPERATE_TYPE = a, 
        function(e) {
            e[e.PLUS = 0] = "PLUS", e[e.SUB = 1] = "SUB", e[e.MULT = 2] = "MULT", e[e.DIV = 3] = "DIV", 
            e[e.AND = 4] = "AND", e[e.OR = 5] = "OR", e[e.EQUAL = 6] = "EQUAL", e[e.NOT_EQUAL = 7] = "NOT_EQUAL", 
            e[e.DEFAULT = 8] = "DEFAULT", e[e.MORE_THAN = 9] = "MORE_THAN", e[e.LESS_THAN = 10] = "LESS_THAN", 
            e[e.MORE_EQUAL = 11] = "MORE_EQUAL", e[e.LESS_EUQAL = 12] = "LESS_EUQAL";
        }(a || (t.OPERATE_TYPE = a = {})), t.CALCULATION_TYPE = c, function(e) {
            e[e.EXPRESSION = 0] = "EXPRESSION", e[e.PATH = 1] = "PATH", e[e.NORMAL = 2] = "NORMAL";
        }(c || (t.CALCULATION_TYPE = c = {}));
        var s = function() {
            function e() {
                r(this, e), this.type = a.DEFAULT, this.left = null, this.right = null, this.preNode = null, 
                this.value = "";
            }
            return i(e, [ {
                key: "setValue",
                value: function(e) {
                    this.value = e;
                }
            }, {
                key: "plusValue",
                value: function(e) {
                    this.value += e;
                }
            }, {
                key: "getValue",
                value: function() {
                    return this.value;
                }
            }, {
                key: "confirmType",
                value: function() {
                    switch (this.value.trim()) {
                      case "+":
                        this.type = a.PLUS;
                        break;

                      case "-":
                        this.type = a.SUB;
                        break;

                      case "*":
                        this.type = a.MULT;
                        break;

                      case "/":
                        this.type = a.DIV;
                        break;

                      case "||":
                        this.type = a.OR;
                        break;

                      case "&&":
                        this.type = a.AND;
                        break;

                      case "!=":
                      case "!==":
                        this.type = a.NOT_EQUAL;
                        break;

                      case "===":
                      case "==":
                        this.type = a.EQUAL;
                        break;

                      case ">":
                        this.type = a.MORE_THAN;
                        break;

                      case "<":
                        this.type = a.LESS_THAN;
                        break;

                      case "<=":
                        this.type = a.LESS_EUQAL;
                        break;

                      case ">=":
                        this.type = a.MORE_EQUAL;
                    }
                }
            } ]), e;
        }();
        t.default = s;
    },
    fe91: function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function a(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        function c(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    function i(e) {
                        a(s, r, o, i, c, "next", e);
                    }
                    function c(e) {
                        a(s, r, o, i, c, "throw", e);
                    }
                    var s = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.OffRefundTextMixin = void 0;
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("a34a")), u = n("f14d"), l = n("452f"), f = {
            data: function() {
                return {
                    trackOrderInfo: {}
                };
            },
            methods: {
                offRefundAlert: function(e, t) {
                    var n = this;
                    if (n.customFn) n.$emit("success"); else {
                        var r = t ? e : n;
                        n.trackOrderInfo = {
                            refundNo: r.refund_id || "",
                            orderNo: r.order_number || "",
                            productId: r.product_id || "",
                            number: r.number || 0
                        }, n.$confirm({
                            title: "提示",
                            content: "确认取消退款申请？如有问题可再次申请",
                            submitText: "确认",
                            submitTextColor: "#2FB157",
                            cancelText: "取消",
                            cancelTextColor: "#2FB157",
                            success: function() {
                                var e = c(s.default.mark(function e() {
                                    return s.default.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            return e.next = 2, n.handleOffRefund(n.trackOrderInfo);

                                          case 2:
                                            if (n.$store.dispatch("refundTurn/setRefundTrigger", {
                                                isTrigger: !0
                                            }), !t) {
                                                e.next = 6;
                                                break;
                                            }
                                            return t("success"), e.abrupt("return");

                                          case 6:
                                            n.$emit("success");

                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                return function() {
                                    return e.apply(this, arguments);
                                };
                            }(),
                            cancel: function() {
                                t ? t("fail") : n.$emit("fail");
                            }
                        });
                    }
                },
                handleOffRefund: function(e) {
                    var t = this;
                    return c(s.default.mark(function n() {
                        var r;
                        return s.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return r = t, n.abrupt("return", new Promise(function() {
                                    var t = c(s.default.mark(function t(n) {
                                        var i;
                                        return s.default.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                              case 0:
                                                return t.next = 2, (0, l.apiSetOffRefund)(o({}, e));

                                              case 2:
                                                (i = t.sent) && !i.code ? n(!0) : r.$toast(i.msg);

                                              case 4:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                    }));
                                    return function(e) {
                                        return t.apply(this, arguments);
                                    };
                                }()));

                              case 2:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                handleGoRefund: function(e) {
                    var t = this, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "whole", o = this, i = {
                        refundNo: e.refund_id || "",
                        orderNo: e.order_number || "",
                        productId: e.product_id || "",
                        number: e.number || ""
                    };
                    return o.trackOrderInfo = i, new Promise(function() {
                        var a = c(s.default.mark(function a(c) {
                            return s.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    if (!n) {
                                        a.next = 3;
                                        break;
                                    }
                                    return a.next = 3, t.showRefundAlert({
                                        order_number: e.order_number,
                                        opType: 2
                                    });

                                  case 3:
                                    c(1), o.$open({
                                        url: u.PATH.PAGE_REFUND_APPLY,
                                        params: {
                                            product_id: i.productId,
                                            order_number: i.orderNo,
                                            number: i.number,
                                            scence: r
                                        }
                                    });

                                  case 5:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                        }));
                        return function(e) {
                            return a.apply(this, arguments);
                        };
                    }());
                },
                showRefundAlert: function(e) {
                    var t = this, n = this, r = [], o = e.opType;
                    if ([ 1, 3 ].includes(o)) {
                        r.push({
                            id: e.id,
                            number: e.number
                        });
                        var i = e.ingredients_goods_list || e.ingredients_product_list;
                        i && i.length && i.forEach(function(e) {
                            return r.push({
                                id: e.id,
                                number: e.number
                            });
                        });
                    }
                    return e.products = JSON.stringify(r), new Promise(function() {
                        var r = c(s.default.mark(function r(o) {
                            var i, a, c, u, f;
                            return s.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, (0, l.apiRuleCheck)({
                                        orderNumber: e.order_number,
                                        opType: e.opType,
                                        products: e.products,
                                        showData: !0
                                    });

                                  case 2:
                                    if (i = r.sent, a = i.code, c = i.success, u = i.data, f = i.msg, !c || a) {
                                        r.next = 10;
                                        break;
                                    }
                                    return o(1), r.abrupt("return");

                                  case 10:
                                    if (200000006 === a) {
                                        r.next = 13;
                                        break;
                                    }
                                    return t.$toast(f), r.abrupt("return");

                                  case 13:
                                    n.$confirm({
                                        title: u.title,
                                        content: u.content,
                                        submitText: "知道了",
                                        submitTextColor: "#2FB157",
                                        cancelText: ""
                                    });

                                  case 14:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }));
                        return function(e) {
                            return r.apply(this, arguments);
                        };
                    }());
                }
            }
        };
        t.OffRefundTextMixin = f;
    }
} ]);