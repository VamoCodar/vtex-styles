! function (e) {
    function t(t) {
        for (var r, a, u = t[0], c = t[1], l = t[2], f = 0, p = []; f < u.length; f++) a = u[f], Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]), o[a] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (s && s(t); p.length;) p.shift()();
        return i.push.apply(i, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], r = !0, u = 1; u < n.length; u++) {
                var c = n[u];
                0 !== o[c] && (r = !1)
            }
            r && (i.splice(t--, 1), e = a(a.s = n[0]))
        }
        return e
    }
    var r = {},
        o = {
            12: 0
        },
        i = [];

    function a(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = r, a.d = function (e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) a.d(n, r, function (t) {
                return e[t]
            }.bind(null, r));
        return n
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "/arquivos/";
    var u = this.webpackJsonp = this.webpackJsonp || [],
        c = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var l = 0; l < u.length; l++) t(u[l]);
    var s = c;
    i.push([1, 0]), n()
}({
    1: function (e, t, n) {
        n("hQ+O"), e.exports = n("8m0n")
    },
    "6RL6": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return s
        }), t = n("pNMO"), t = n("4Brf"), t = n("0oug"), t = n("QWBl"), t = n("pjDv"), t = n("4mDm"), t = n("+2oP"), t = n("sMBO"), t = n("NBAS"), t = n("07d7"), t = n("SuFq"), t = n("JfAA"), t = n("PKPk"), t = n("FZtP"), t = n("3bBZ");
        var r = n("aFEr");

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function i(e) {
            return function (e) {
                if (Array.isArray(e)) return a(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                }
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function u(e, t) {
            return (u = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function c(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = l(e);
                return n = t ? (n = l(this).constructor, Reflect.construct(r, arguments, n)) : r.apply(this, arguments), r = this, !(n = n) || "object" !== o(n) && "function" != typeof n ? function (e) {
                    if (void 0 !== r) return r;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }() : n
            }
        }

        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var s = function () {
            ! function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && u(e, t)
            }(n, r.a);
            var e, t = c(n);

            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this), (e = t.call(this))._modalComponentClass = ".js-modalComponent", e._modalComponentActiveClass = "modalComponent--active", e._modalComponentCloseUtil = ".js-modalComponentUtil", e._modalComponentClose = ".js-modalComponentClose", e
            }
            return (e = [{
                key: "load",
                value: function () {
                    this.eventHandlerFindModal(), this.eventHandlerHide()
                }
            }, {
                key: "eventHandlerFindModal",
                value: function () {
                    var e = this,
                        t = document.querySelectorAll("[data-modal-component-name]");
                    console.log(t), i(t).forEach(function (t) {
                        t.addEventListener("click", function (t) {
                            t.preventDefault(), t = t.currentTarget.dataset.modalComponentName, console.log("click"), e.enventHandlerShow(t)
                        })
                    })
                }
            }, {
                key: "enventHandlerShow",
                value: function (e) {
                    (e = document.querySelector('[data-modal-component-element="'.concat(e, '"]'))).classList.add(this._modalComponentActiveClass), this.eventHandlerHide(e)
                }
            }, {
                key: "eventHandlerHide",
                value: function (e) {
                    var t = this;
                    i(document.querySelectorAll(this._modalComponentClose)).forEach(function (n) {
                        n.addEventListener("click", function (n) {
                            n.preventDefault(), e.classList.remove(t._modalComponentActiveClass)
                        })
                    })
                }
            }]) && function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }(n.prototype, e), n
        }()
    },
    "702q": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return u
        }), t = n("07d7"), t = n("5s+n"), t = n("ls82");
        var r = n("mgwz");

        function o(e, t, n, r, o, i, a) {
            try {
                var u = e[i](a),
                    c = u.value
            } catch (e) {
                return void n(e)
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function i(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (r, i) {
                    var a = e.apply(t, n);

                    function u(e) {
                        o(a, r, i, u, c, "next", e)
                    }

                    function c(e) {
                        o(a, r, i, u, c, "throw", e)
                    }
                    u(void 0)
                })
            }
        }
        var a = "/api/catalog_system/pub/products/search",
            u = function () {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : new r.a;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.httpClient_ = t
                }
                var t, n, o, u, c, l;
                return t = e, (n = [{
                    key: "getBySkuId",
                    value: (l = i(regeneratorRuntime.mark(function e() {
                        var t, n = arguments;
                        return regeneratorRuntime.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = 0 < n.length && void 0 !== n[0] ? n[0] : 0, t = this.httpClient_.get("".concat(a, "/?fq=productId:").concat(t)), e.abrupt("return", t[0]);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function () {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "getSpecificationByProductId",
                    value: (c = i(regeneratorRuntime.mark(function e() {
                        var t, n, r = arguments;
                        return regeneratorRuntime.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = 0 < r.length && void 0 !== r[0] ? r[0] : 0, t = 1 < r.length ? r[1] : void 0, n = this.httpClient_.get("".concat(a, "/?fq=productId:").concat(n))) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 5:
                                    return e.abrupt("return", n[0][t]);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function () {
                        return c.apply(this, arguments)
                    })
                }, {
                    key: "getSimilarBySkuId",
                    value: (u = i(regeneratorRuntime.mark(function e() {
                        var t, n = arguments;
                        return regeneratorRuntime.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = 0 < n.length && void 0 !== n[0] ? n[0] : 0, e.next = 3, this.httpClient_.get("".concat("/api/catalog_system/pub/products/crossselling/", "/similars/").concat(t));
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function () {
                        return u.apply(this, arguments)
                    })
                }, {
                    key: "getFirstImagesBySkuId",
                    value: (o = i(regeneratorRuntime.mark(function e() {
                        var t, n, r = arguments;
                        return regeneratorRuntime.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = 0 < r.length && void 0 !== r[0] ? r[0] : 0, e.next = 3, this.httpClient_.get("".concat(a, "/?fq=productId:").concat(t));
                                case 3:
                                    if (n = e.sent) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 6:
                                    return e.abrupt("return", n[0].items[0].images);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    })), function () {
                        return o.apply(this, arguments)
                    })
                }]) && function (e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }(t.prototype, n), e
            }()
    },
    "8m0n": function (e, t, n) {},
    aFEr: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        }), t = n("pNMO"), t = n("4Brf"), t = n("0oug"), t = n("QWBl"), t = n("pjDv"), t = n("4mDm"), t = n("+2oP"), t = n("sMBO"), t = n("07d7"), t = n("JfAA"), t = n("PKPk"), t = n("FZtP"), t = n("3bBZ");
        var r = n("i9kX"),
            o = n("fKjP");

        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        var a = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.app_ = new o.a, this.logger_ = new r.a, this.props = this.app_.props
            }
            var t;
            return (t = [{
                key: "render",
                value: function (e, t) {
                    var n = document.querySelector(String(e));
                    n ? n.innerHTML = String(t) : this.logger_.info("element '".concat(e, "' not found on page!"))
                }
            }, {
                key: "getElement",
                value: function (e) {
                    return e = 0 < arguments.length && void 0 !== e ? e : "", document.querySelector(String(e))
                }
            }, {
                key: "getElements",
                value: function (e) {
                    var t = [];
                    return function (e) {
                        return function (e) {
                            if (Array.isArray(e)) return i(e)
                        }(e) || function (e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                        }(e) || function (e, t) {
                            if (e) {
                                if ("string" == typeof e) return i(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                            }
                        }(e) || function () {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }(0 < arguments.length && void 0 !== e ? e : []).forEach(function (e) {
                        (e = document.querySelector(String(e))) && t.push(e)
                    }), t
                }
            }, {
                key: "getAllElements",
                value: function (e) {
                    return e = 0 < arguments.length && void 0 !== e ? e : "", document.querySelectorAll(String(e))
                }
            }]) && function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }(e.prototype, t), e
        }()
    },
    fKjP: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var r = function e() {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.props = {
                language: navigator.language || navigator.userLanguage,
                currency: "BRL",
                currencyLocale: "pt-br",
                minimumFractionDigits: 2,
                storeId: "autosuperstore"
            }
        }
    },
    "hQ+O": function (e, t, n) {
        "use strict";
        n.r(t), t = n("pNMO"), t = n("4Brf"), t = n("0oug"), t = n("QWBl"), t = n("pjDv"), t = n("4mDm"), t = n("+2oP"), t = n("sMBO"), t = n("07d7"), t = n("JfAA"), t = n("PKPk"), t = n("FZtP"), t = n("3bBZ"), t = n("xeH2");
        var r = n.n(t),
            o = (t = n("Zej/"), n("6RL6")),
            i = n("vl1s"),
            a = n("702q");

        function u(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = c(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0;
                    return {
                        s: t = function () {},
                        n: function () {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function (e) {
                            throw e
                        },
                        f: t
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, i = !0,
                a = !1;
            return {
                s: function () {
                    n = e[Symbol.iterator]()
                },
                n: function () {
                    var e = n.next();
                    return i = e.done, e
                },
                e: function (e) {
                    a = !0, o = e
                },
                f: function () {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (a) throw o
                    }
                }
            }
        }

        function c(e, t) {
            if (e) {
                if ("string" == typeof e) return l(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
            }
        }

        function l(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        new(function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.collectionComponent_ = new i.a, this.modalComponent_ = new o.a, this.productRepository_ = new a.a, this.componentBuilder()
            }
            var t;
            return (t = [{
                key: "slickInit",
                value: function (e, t) {
                    e && e.slick(t)
                }
            }, {
                key: "initSliders",
                value: function () {
                    var e = r()(".js-main-banners-slider"),
                        t = r()(".js-main-banners-slider-mobile");
                    e && e.slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0,
                            dots: !0,
                            arrows: true,
                            swipeToSlide: !0,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            lazyLoad: "ondemand"
                        }), t && t.slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0,
                            dots: !1,
                            arrows: true,
                            swipeToSlide: !0,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            lazyLoad: "ondemand"
                        }),
                        function (e) {
                            return function (e) {
                                if (Array.isArray(e)) return l(e)
                            }(e) || function (e) {
                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                            }(e) || c(e) || function () {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }(document.querySelectorAll(".js-main-banners-slider .box-banner img")).forEach(function (e) {
                            e.parentElement.dataset.altName = e.getAttribute("alt")
                        })
                }
            }, {
                key: "highlightedCategories",
                value: function () {
                    var e = document.querySelector(".js-highlighted-categories"),
                        t = document.querySelector(".js-highlighted-categories-mobile"),
                        n = e.querySelectorAll(".box-banner"),
                        r = (t = t.querySelectorAll(".box-banner"), u(n));
                    try {
                        for (r.s(); !(o = r.n()).done;) {
                            var o, i = o.value.querySelector("img");
                            i && (o = i.getAttribute("alt"), i.insertAdjacentHTML("afterend", '<div class="category-info"><span class="category-info__title">'.concat(o, "</span><span class='italic'>Ver mais</span></div>")))
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    var a = u(t);
                    try {
                        for (a.s(); !(l = a.n()).done;) {
                            var c = l.value.querySelector("img"),
                                l = c.getAttribute("alt");
                            c.insertAdjacentHTML("afterend", '<div class="category-info"><span class="category-info__title">'.concat(l, "</span><span class='italic'>Ver mais</span></div>"))
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                }
            }, {
                key: "componentBuilder",
                value: function () {
                    var e = this;
                    document.addEventListener("DOMContentLoaded", function () {
                        e.collectionComponent_.load(), e.modalComponent_.load(), e.initSliders(), e.highlightedCategories()
                    })
                }
            }]) && function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }(e.prototype, t), e
        }())
    },
    i9kX: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var r = function () {
            function e() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "B8ONE Logger Component";
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.logName = t
            }
            var t;
            return (t = [{
                key: "error",
                value: function (e, t) {
                    e = 0 < arguments.length && void 0 !== e ? e : "", t = 1 < arguments.length && void 0 !== t ? t : {}, console.error(e, t)
                }
            }, {
                key: "info",
                value: function (e) {
                    e = 0 < arguments.length && void 0 !== e ? e : "", console.info(e)
                }
            }, {
                key: "warning",
                value: function (e) {
                    e = 0 < arguments.length && void 0 !== e ? e : "", console.warn(this.logName, e)
                }
            }, {
                key: "log",
                value: function (e) {
                    e = 0 < arguments.length && void 0 !== e ? e : "", console.log(e)
                }
            }, {
                key: "log",
                value: function (e, t) {
                    e = 0 < arguments.length && void 0 !== e ? e : "", t = 1 < arguments.length && void 0 !== t ? t : {}, console.log(e, t)
                }
            }]) && function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }(e.prototype, t), e
        }()
    },
    mgwz: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i
        }), t = n("07d7"), t = n("5s+n"), t = n("ls82");
        var r = n("i9kX");

        function o(e, t, n, r, o, i, a) {
            try {
                var u = e[i](a),
                    c = u.value
            } catch (e) {
                return void n(e)
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o)
        }
        var i = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.logger_ = new r.a("httpClient")
            }
            var t, n, i, a;
            return t = e, (n = [{
                key: "get",
                value: function (e) {
                    return this._execute(e, "GET")
                }
            }, {
                key: "delete",
                value: function (e) {
                    return this._execute(e, "DELETE")
                }
            }, {
                key: "post",
                value: function (e, t) {
                    return t = 1 < arguments.length && void 0 !== t ? t : {}, this._execute(e, "POST", t)
                }
            }, {
                key: "put",
                value: function (e, t) {
                    return this._execute(e, "PUT", t)
                }
            }, {
                key: "patch",
                value: function (e, t) {
                    return this._execute(e, "PATCH", t)
                }
            }, {
                key: "_execute",
                value: function (e, t, n) {
                    var r = this;
                    return t = {
                        method: t,
                        mode: "cors",
                        headers: {
                            accept: "application/vnd.vtex.masterdata.v10+json",
                            "content-type": "application/json; charset=utf-8",
                            "Access-Control-Allow-Origin": "*"
                        }
                    }, n && (t.body = JSON.stringify(n)), fetch(e, t).then(this.validateResponse).then(this.parseResponseToJson).then(function (e) {
                        return e
                    }).catch(function (e) {
                        return r.logger_.log("Request succeeded with JSON response", e), e
                    })
                }
            }, {
                key: "parseResponseToJson",
                value: (i = regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t.ok) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 2:
                                return e.next = 4, t.json();
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }), a = function () {
                    var e = this,
                        t = arguments;
                    return new Promise(function (n, r) {
                        var a = i.apply(e, t);

                        function u(e) {
                            o(a, n, r, u, c, "next", e)
                        }

                        function c(e) {
                            o(a, n, r, u, c, "throw", e)
                        }
                        u(void 0)
                    })
                }, function (e) {
                    return a.apply(this, arguments)
                })
            }, {
                key: "validateResponse",
                value: function (e) {
                    return e.ok ? Promise.resolve(e) : Promise.reject(new Error(e.statusText))
                }
            }]) && function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }(t.prototype, n), e
        }()
    },
    vl1s: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i
        }), t = n("pNMO"), t = n("4Brf"), t = n("0oug"), t = n("QWBl"), t = n("pjDv"), t = n("4mDm"), t = n("+2oP"), t = n("sMBO"), t = n("toAj"), t = n("07d7"), t = n("rB9j"), t = n("JfAA"), t = n("PKPk"), t = n("UxlC"), t = n("EnZy"), t = n("FZtP"), t = n("3bBZ"), t = n("xeH2");
        var r = n.n(t);

        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        var i = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.collectionElement = ".js-collection-slider", this.collectionItemHelper = ".helperComplement"
            }
            var t;
            return (t = [{
                key: "initSlider",
                value: function () {
                    r()(this.collectionItemHelper).remove(), 4 < r()("".concat(this.collectionElement, " ul li")).length ? r()("".concat(this.collectionElement, " ul")).slick({
                        infinite: !0,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        dots: !0,
                        swipe: !0
                    }) : r()("".concat(this.collectionElement, " ul")).addClass("collection--disabled")
                }
            }, {
                key: "setFlagDiscount",
                value: function () {
                    var e = document.querySelectorAll(".shelfProduct");
                    e && function (e) {
                        return function (e) {
                            if (Array.isArray(e)) return o(e)
                        }(e) || function (e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                        }(e) || function (e, t) {
                            if (e) {
                                if ("string" == typeof e) return o(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                            }
                        }(e) || function () {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }(e).forEach(function (e) {
                        var t = e.querySelector(".js-old-price"),
                            n = e.querySelector(".js-new-price");
                        e = e.querySelector(".shelfProduct__flag"), t && (t = ((t = t.innerHTML.split("R$ ")[1].replace(/\./g, "").replace(",", ".")) - n.innerHTML.split("R$ ")[1].replace(/\./g, "").replace(",", ".")) / t * 100, !isNaN(t) && e && e.insertAdjacentHTML("afterbegin", '<span class="shelfProduct__flag--discount">-'.concat(t.toFixed(0), "% OFF</span>")))
                    })
                }
            }, {
                key: "load",
                value: function () {
                    this.initSlider(), this.setFlagDiscount()
                }
            }]) && function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }(e.prototype, t), e
        }()
    },
    xeH2: function (e, t) {
        e.exports = jQuery
    }
});