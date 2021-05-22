! function (e) {
    function t(t) {
        for (var i, r, s = t[0], l = t[1], c = t[2], f = 0, d = []; f < s.length; f++) r = s[f], a[r] && d.push(a[r][0]), a[r] = 0;
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
        for (u && u(t); d.length;) d.shift()();
        return o.push.apply(o, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], i = !0, s = 1; s < n.length; s++) {
                var l = n[s];
                0 !== a[l] && (i = !1)
            }
            i && (o.splice(t--, 1), e = r(r.s = n[0]))
        }
        return e
    }
    var i = {},
        a = {
            3: 0
        },
        o = [];

    function r(t) {
        if (i[t]) return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = i, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function (t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "//mnweb.mini1.cn/mnxgc/";
    var s = window.webpackJsonp = window.webpackJsonp || [],
        l = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var c = 0; c < s.length; c++) t(s[c]);
    var u = l;
    o.push([3, 0]), n()
}([, , , function (e, t, n) {
    n(4), n(5), n(1), n(2), n(6), e.exports = n(7)
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var t, n, i, a, o;
        t = e, n = window, i = document, o = t(n), t.fn.lazyload = function (e) {
            var r, s = this,
                l = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: n,
                    data_attribute: "original",
                    skip_invisible: !0,
                    appear: null,
                    load: null,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                };

            function c() {
                var e = 0;
                s.each(function () {
                    var n = t(this);
                    if (!l.skip_invisible || n.is(":visible"))
                        if (t.abovethetop(this, l) || t.leftofbegin(this, l));
                        else if (t.belowthefold(this, l) || t.rightoffold(this, l)) {
                        if (++e > l.failure_limit) return !1
                    } else n.trigger("appear"), e = 0
                })
            }
            return e && (a !== e.failurelimit && (e.failure_limit = e.failurelimit, delete e.failurelimit), a !== e.effectspeed && (e.effect_speed = e.effectspeed, delete e.effectspeed), t.extend(l, e)), r = l.container === a || l.container === n ? o : t(l.container), 0 === l.event.indexOf("scroll") && r.bind(l.event, function () {
                return c()
            }), this.each(function () {
                var e = this,
                    n = t(e);
                e.loaded = !1, n.attr("src") !== a && !1 !== n.attr("src") || n.is("img") && n.attr("src", l.placeholder), n.one("appear", function () {
                    if (!this.loaded) {
                        if (l.appear) {
                            var i = s.length;
                            l.appear.call(e, i, l)
                        }
                        t("<img />").bind("load", function () {
                            var i = n.attr("data-" + l.data_attribute);
                            n.hide(), n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"), n[l.effect](l.effect_speed), e.loaded = !0;
                            var a = t.grep(s, function (e) {
                                return !e.loaded
                            });
                            if (s = t(a), l.load) {
                                var o = s.length;
                                l.load.call(e, o, l)
                            }
                        }).attr("src", n.attr("data-" + l.data_attribute))
                    }
                }), 0 !== l.event.indexOf("scroll") && n.bind(l.event, function () {
                    e.loaded || n.trigger("appear")
                })
            }), o.bind("resize", function () {
                c()
            }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.bind("pageshow", function (e) {
                e.originalEvent && e.originalEvent.persisted && s.each(function () {
                    t(this).trigger("appear")
                })
            }), t(i).ready(function () {
                c()
            }), this
        }, t.belowthefold = function (e, i) {
            return (i.container === a || i.container === n ? (n.innerHeight ? n.innerHeight : o.height()) + o.scrollTop() : t(i.container).offset().top + t(i.container).height()) <= t(e).offset().top - i.threshold
        }, t.rightoffold = function (e, i) {
            return (i.container === a || i.container === n ? o.width() + o.scrollLeft() : t(i.container).offset().left + t(i.container).width()) <= t(e).offset().left - i.threshold
        }, t.abovethetop = function (e, i) {
            return (i.container === a || i.container === n ? o.scrollTop() : t(i.container).offset().top) >= t(e).offset().top + i.threshold + t(e).height()
        }, t.leftofbegin = function (e, i) {
            return (i.container === a || i.container === n ? o.scrollLeft() : t(i.container).offset().left) >= t(e).offset().left + i.threshold + t(e).width()
        }, t.inviewport = function (e, n) {
            return !(t.rightoffold(e, n) || t.leftofbegin(e, n) || t.belowthefold(e, n) || t.abovethetop(e, n))
        }, t.extend(t.expr[":"], {
            "below-the-fold": function (e) {
                return t.belowthefold(e, {
                    threshold: 0
                })
            },
            "above-the-top": function (e) {
                return !t.belowthefold(e, {
                    threshold: 0
                })
            },
            "right-of-screen": function (e) {
                return t.rightoffold(e, {
                    threshold: 0
                })
            },
            "left-of-screen": function (e) {
                return !t.rightoffold(e, {
                    threshold: 0
                })
            },
            "in-viewport": function (e) {
                return t.inviewport(e, {
                    threshold: 0
                })
            },
            "above-the-fold": function (e) {
                return !t.belowthefold(e, {
                    threshold: 0
                })
            },
            "right-of-fold": function (e) {
                return t.rightoffold(e, {
                    threshold: 0
                })
            },
            "left-of-fold": function (e) {
                return !t.rightoffold(e, {
                    threshold: 0
                })
            }
        })
    }).call(this, n(0))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var t;
        (t = e).fn.slide = function (e) {
            return t.fn.slide.defaults = {
                type: "slide",
                effect: "fade",
                autoPlay: !1,
                delayTime: 500,
                interTime: 2500,
                triggerTime: 150,
                defaultIndex: 0,
                titCell: ".hd li",
                mainCell: ".bd",
                targetCell: null,
                trigger: "mouseover",
                scroll: 1,
                vis: 1,
                titOnClassName: "on",
                autoPage: !1,
                prevCell: ".prev",
                nextCell: ".next",
                pageStateCell: ".pageState",
                opp: !1,
                pnLoop: !0,
                easing: "swing",
                startFun: null,
                endFun: null,
                switchLoad: null,
                playStateCell: ".playState",
                mouseOverStop: !0,
                defaultPlay: !0,
                returnDefault: !1
            }, this.each(function () {
                var n, i, a, o, r, s, l, c, u, f, d, h, p, m, g, v, b, w, y, C, k, x, A, I, M, O, q, P, S, _, T, L, B, j, z, Q, D, E, F, N, U, R, W, H, J, V, X, Y, Z, G = t.extend({}, t.fn.slide.defaults, e),
                    K = t(this),
                    $ = G.effect,
                    ee = t(G.prevCell, K),
                    te = t(G.nextCell, K),
                    ne = t(G.pageStateCell, K),
                    ie = t(G.playStateCell, K),
                    ae = t(G.titCell, K),
                    oe = ae.length,
                    re = t(G.mainCell, K),
                    se = re.children().length,
                    le = G.switchLoad,
                    ce = t(G.targetCell, K),
                    ue = parseInt(G.defaultIndex),
                    fe = parseInt(G.delayTime),
                    de = parseInt(G.interTime);
                if (parseInt(G.triggerTime), n = parseInt(G.scroll), i = "false" != G.autoPlay && 0 != G.autoPlay, a = "false" != G.opp && 0 != G.opp, o = "false" != G.autoPage && 0 != G.autoPage, r = "false" != G.pnLoop && 0 != G.pnLoop, s = "false" != G.mouseOverStop && 0 != G.mouseOverStop, l = "false" != G.defaultPlay && 0 != G.defaultPlay, c = "false" != G.returnDefault && 0 != G.returnDefault, u = isNaN(G.vis) ? 1 : parseInt(G.vis), f = !-[1] && !window.XMLHttpRequest, m = p = h = d = 0, g = G.easing, w = b = v = null, y = G.titOnClassName, C = ae.index(K.find("." + y)), k = ue = -1 == C ? ue : C, A = x = ue, I = u <= se ? 0 != se % n ? se % n : n : 0, O = "leftMarquee" == $ || "topMarquee" == $, q = function () {
                        t.isFunction(G.startFun) && G.startFun(ue, oe, K, t(G.titCell, K), re, ce, ee, te)
                    }, P = function () {
                        t.isFunction(G.endFun) && G.endFun(ue, oe, K, t(G.titCell, K), re, ce, ee, te)
                    }, S = function () {
                        ae.removeClass(y), l && ae.eq(x).addClass(y)
                    }, "menu" == G.type) return l && ae.removeClass(y).eq(ue).addClass(y), ae.hover(function () {
                    M = t(this).find(G.targetCell);
                    var e = ae.index(t(this));
                    b = setTimeout(function () {
                        switch (ue = e, ae.removeClass(y).eq(ue).addClass(y), q(), $) {
                        case "fade":
                            M.stop(!0, !0).animate({
                                opacity: "show"
                            }, fe, g, P);
                            break;
                        case "slideDown":
                            M.stop(!0, !0).animate({
                                height: "show"
                            }, fe, g, P)
                        }
                    }, G.triggerTime)
                }, function () {
                    switch (clearTimeout(b), $) {
                    case "fade":
                        M.animate({
                            opacity: "hide"
                        }, fe, g);
                        break;
                    case "slideDown":
                        M.animate({
                            height: "hide"
                        }, fe, g)
                    }
                }), void(c && K.hover(function () {
                    clearTimeout(w)
                }, function () {
                    w = setTimeout(S, fe)
                }));
                if (0 == oe && (oe = se), O && (oe = 2), o) {
                    if (u <= se ? "leftLoop" == $ || "topLoop" == $ ? oe = 0 != se % n ? 1 + (0 ^ se / n) : se / n : (_ = se - u, (oe = 1 + parseInt(0 != _ % n ? _ / n + 1 : _ / n)) <= 0 && (oe = 1)) : oe = 1, ae.html(""), T = "", 1 == G.autoPage || "true" == G.autoPage)
                        for (L = 0; L < oe; L++) T += "<li>" + (L + 1) + "</li>";
                    else
                        for (L = 0; L < oe; L++) T += G.autoPage.replace("$", L + 1);
                    ae.html(T), ae = ae.children()
                }
                if (u <= se) switch (re.children().each(function () {
                    t(this).width() > p && (p = t(this).width(), h = t(this).outerWidth(!0)), t(this).height() > m && (m = t(this).height(), d = t(this).outerHeight(!0))
                }), B = re.children(), j = function () {
                    var e;
                    for (e = 0; e < u; e++) B.eq(e).clone().addClass("clone").appendTo(re);
                    for (e = 0; e < I; e++) B.eq(se - e - 1).clone().addClass("clone").prependTo(re)
                }, $) {
                case "fold":
                    re.css({
                        position: "relative",
                        width: h,
                        height: d
                    }).children().css({
                        position: "absolute",
                        width: p,
                        left: 0,
                        top: 0,
                        display: "none"
                    });
                    break;
                case "top":
                    re.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + u * d + 'px"></div>').css({
                        top: -ue * n * d,
                        position: "relative",
                        padding: "0",
                        margin: "0"
                    }).children().css({
                        height: m
                    });
                    break;
                case "left":
                    re.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + u * h + 'px"></div>').css({
                        width: se * h,
                        left: -ue * n * h,
                        position: "relative",
                        overflow: "hidden",
                        padding: "0",
                        margin: "0"
                    }).children().css({
                        float: "left",
                        width: p
                    });
                    break;
                case "leftLoop":
                case "leftMarquee":
                    j(), re.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + u * h + 'px"></div>').css({
                        width: (se + u + I) * h,
                        position: "relative",
                        overflow: "hidden",
                        padding: "0",
                        margin: "0",
                        left: -(I + ue * n) * h
                    }).children().css({
                        float: "left",
                        width: p
                    });
                    break;
                case "topLoop":
                case "topMarquee":
                    j(), re.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + u * d + 'px"></div>').css({
                        height: (se + u + I) * d,
                        position: "relative",
                        padding: "0",
                        margin: "0",
                        top: -(I + ue * n) * d
                    }).children().css({
                        height: m
                    })
                }
                z = function (e) {
                    var t = e * n;
                    return e == oe ? t = se : -1 == e && 0 != se % n && (t = -se % n), t
                }, Q = function (e) {
                    function i(n) {
                        for (var i = n; i < u + n; i++) e.eq(i).find("img[" + le + "]").each(function () {
                            var e, n, i = t(this);
                            if (i.attr("src", i.attr(le)).removeAttr(le), re.find(".clone")[0])
                                for (e = re.children(), n = 0; n < e.length; n++) e.eq(n).find("img[" + le + "]").each(function () {
                                    t(this).attr(le) == i.attr("src") && t(this).attr("src", t(this).attr(le)).removeAttr(le)
                                })
                        })
                    }
                    var a, o, r, s;
                    switch ($) {
                    case "fade":
                    case "fold":
                    case "top":
                    case "left":
                    case "slideDown":
                        i(ue * n);
                        break;
                    case "leftLoop":
                    case "topLoop":
                        i(I + z(A));
                        break;
                    case "leftMarquee":
                    case "topMarquee":
                        a = "leftMarquee" == $ ? re.css("left").replace("px", "") : re.css("top").replace("px", ""), r = I, 0 != a % (o = "leftMarquee" == $ ? h : d) && (s = Math.abs(0 ^ a / o), r = 1 == ue ? I + s : I + s - 1), i(r)
                    }
                }, D = function (e) {
                    var t, i, a;
                    if (!l || k != ue || e || O) {
                        if (O ? 1 <= ue ? ue = 1 : ue <= 0 && (ue = 0) : oe <= (A = ue) ? ue = 0 : ue < 0 && (ue = oe - 1), q(), null != le && Q(re.children()), ce[0] && (M = ce.eq(ue), null != le && Q(ce), "slideDown" == $ ? (ce.not(M).stop(!0, !0).slideUp(fe), M.slideDown(fe, g, function () {
                                re[0] || P()
                            })) : (ce.not(M).stop(!0, !0).hide(), M.animate({
                                opacity: "show"
                            }, fe, function () {
                                re[0] || P()
                            }))), u <= se) switch ($) {
                        case "fade":
                            re.children().stop(!0, !0).eq(ue).animate({
                                opacity: "show"
                            }, fe, g, function () {
                                P()
                            }).siblings().hide();
                            break;
                        case "fold":
                            re.children().stop(!0, !0).eq(ue).animate({
                                opacity: "show"
                            }, fe, g, function () {
                                P()
                            }).siblings().animate({
                                opacity: "hide"
                            }, fe, g);
                            break;
                        case "top":
                            re.stop(!0, !1).animate({
                                top: -ue * n * d
                            }, fe, g, function () {
                                P()
                            });
                            break;
                        case "left":
                            re.stop(!0, !1).animate({
                                left: -ue * n * h
                            }, fe, g, function () {
                                P()
                            });
                            break;
                        case "leftLoop":
                            t = A, re.stop(!0, !0).animate({
                                left: -(z(A) + I) * h
                            }, fe, g, function () {
                                t <= -1 ? re.css("left", -(I + (oe - 1) * n) * h) : oe <= t && re.css("left", -I * h), P()
                            });
                            break;
                        case "topLoop":
                            t = A, re.stop(!0, !0).animate({
                                top: -(z(A) + I) * d
                            }, fe, g, function () {
                                t <= -1 ? re.css("top", -(I + (oe - 1) * n) * d) : oe <= t && re.css("top", -I * d), P()
                            });
                            break;
                        case "leftMarquee":
                            i = re.css("left").replace("px", ""), 0 == ue ? re.animate({
                                left: ++i
                            }, 0, function () {
                                0 <= re.css("left").replace("px", "") && re.css("left", -se * h)
                            }) : re.animate({
                                left: --i
                            }, 0, function () {
                                re.css("left").replace("px", "") <= -(se + I) * h && re.css("left", -I * h)
                            });
                            break;
                        case "topMarquee":
                            a = re.css("top").replace("px", ""), 0 == ue ? re.animate({
                                top: ++a
                            }, 0, function () {
                                0 <= re.css("top").replace("px", "") && re.css("top", -se * d)
                            }) : re.animate({
                                top: --a
                            }, 0, function () {
                                re.css("top").replace("px", "") <= -(se + I) * d && re.css("top", -I * d)
                            })
                        }
                        ae.removeClass(y).eq(ue).addClass(y), k = ue, r || (te.removeClass("nextStop"), ee.removeClass("prevStop"), 0 == ue && ee.addClass("prevStop"), ue == oe - 1 && te.addClass("nextStop")), ne.html("<span>" + (ue + 1) + "</span>/" + oe)
                    }
                }, l && D(!0), c && K.hover(function () {
                    clearTimeout(w)
                }, function () {
                    w = setTimeout(function () {
                        ue = x, l ? D() : "slideDown" == $ ? M.slideUp(fe, S) : M.animate({
                            opacity: "hide"
                        }, fe, S), k = ue
                    }, 300)
                }), E = function (e) {
                    v = setInterval(function () {
                        a ? ue-- : ue++, D()
                    }, e || de)
                }, F = function (e) {
                    v = setInterval(D, e || de)
                }, N = function () {
                    s || !i || ie.hasClass("pauseState") || (clearInterval(v), E())
                }, U = function () {
                    !r && ue == oe - 1 || (ue++, D(), O || N())
                }, R = function () {
                    !r && 0 == ue || (ue--, D(), O || N())
                }, W = function () {
                    clearInterval(v), O ? F() : E(), ie.removeClass("pauseState")
                }, H = function () {
                    clearInterval(v), ie.addClass("pauseState")
                }, i ? O ? (a ? ue-- : ue++, F(), s && re.hover(H, W)) : (E(), s && K.hover(H, W)) : (O && (a ? ue-- : ue++), ie.addClass("pauseState")), ie.click(function () {
                    ie.hasClass("pauseState") ? W() : H()
                }), "mouseover" == G.trigger ? ae.hover(function () {
                    var e = ae.index(this);
                    b = setTimeout(function () {
                        ue = e, D(), N()
                    }, G.triggerTime)
                }, function () {
                    clearTimeout(b)
                }) : ae.click(function () {
                    ue = ae.index(this), D(), N()
                }), O ? (te.mousedown(U), ee.mousedown(R), r && (V = function () {
                    J = setTimeout(function () {
                        clearInterval(v), F(0 ^ de / 10)
                    }, 150)
                }, X = function () {
                    clearTimeout(J), clearInterval(v), F()
                }, te.mousedown(V), te.mouseup(X), ee.mousedown(V), ee.mouseup(X)), "mouseover" == G.trigger && (te.hover(U, function () {}), ee.hover(R, function () {}))) : (te.click(U), ee.click(R)), "auto" != G.vis || 1 != n || "left" != $ && "leftLoop" != $ || (Z = function () {
                    f && (re.width("auto"), re.children().width("auto")), re.parent().width("auto"), h = re.parent().width(), f && re.parent().width(h), re.children().width(h), "left" == $ ? (re.width(h * se), re.stop(!0, !1).animate({
                        left: -ue * h
                    }, 0)) : (re.width(h * (se + 2)), re.stop(!0, !1).animate({
                        left: -(ue + 1) * h
                    }, 0)), f || h == re.parent().width() || Z()
                }, t(window).resize(function () {
                    clearTimeout(Y), Y = setTimeout(Z, 100)
                }), Z())
            })
        }, e.easing.jswing = e.easing.swing, e.extend(e.easing, {
            def: "easeOutQuad",
            swing: function (t, n, i, a, o) {
                return e.easing[e.easing.def](t, n, i, a, o)
            },
            easeInQuad: function (e, t, n, i, a) {
                return i * (t /= a) * t + n
            },
            easeOutQuad: function (e, t, n, i, a) {
                return -i * (t /= a) * (t - 2) + n
            },
            easeInOutQuad: function (e, t, n, i, a) {
                return (t /= a / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
            },
            easeInCubic: function (e, t, n, i, a) {
                return i * (t /= a) * t * t + n
            },
            easeOutCubic: function (e, t, n, i, a) {
                return i * ((t = t / a - 1) * t * t + 1) + n
            },
            easeInOutCubic: function (e, t, n, i, a) {
                return (t /= a / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
            },
            easeInQuart: function (e, t, n, i, a) {
                return i * (t /= a) * t * t * t + n
            },
            easeOutQuart: function (e, t, n, i, a) {
                return -i * ((t = t / a - 1) * t * t * t - 1) + n
            },
            easeInOutQuart: function (e, t, n, i, a) {
                return (t /= a / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
            },
            easeInQuint: function (e, t, n, i, a) {
                return i * (t /= a) * t * t * t * t + n
            },
            easeOutQuint: function (e, t, n, i, a) {
                return i * ((t = t / a - 1) * t * t * t * t + 1) + n
            },
            easeInOutQuint: function (e, t, n, i, a) {
                return (t /= a / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
            },
            easeInSine: function (e, t, n, i, a) {
                return -i * Math.cos(t / a * (Math.PI / 2)) + i + n
            },
            easeOutSine: function (e, t, n, i, a) {
                return i * Math.sin(t / a * (Math.PI / 2)) + n
            },
            easeInOutSine: function (e, t, n, i, a) {
                return -i / 2 * (Math.cos(Math.PI * t / a) - 1) + n
            },
            easeInExpo: function (e, t, n, i, a) {
                return 0 == t ? n : i * Math.pow(2, 10 * (t / a - 1)) + n
            },
            easeOutExpo: function (e, t, n, i, a) {
                return t == a ? n + i : i * (1 - Math.pow(2, -10 * t / a)) + n
            },
            easeInOutExpo: function (e, t, n, i, a) {
                return 0 == t ? n : t == a ? n + i : (t /= a / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
            },
            easeInCirc: function (e, t, n, i, a) {
                return -i * (Math.sqrt(1 - (t /= a) * t) - 1) + n
            },
            easeOutCirc: function (e, t, n, i, a) {
                return i * Math.sqrt(1 - (t = t / a - 1) * t) + n
            },
            easeInOutCirc: function (e, t, n, i, a) {
                return (t /= a / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
            },
            easeInElastic: function (e, t, n, i, a) {
                var o = 1.70158,
                    r = 0,
                    s = i;
                return 0 == t ? n : 1 == (t /= a) ? n + i : (r || (r = .3 * a), o = s < Math.abs(i) ? (s = i, r / 4) : r / (2 * Math.PI) * Math.asin(i / s), -s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * a - o) * Math.PI / r) + n)
            },
            easeOutElastic: function (e, t, n, i, a) {
                var o = 1.70158,
                    r = 0,
                    s = i;
                return 0 == t ? n : 1 == (t /= a) ? n + i : (r || (r = .3 * a), o = s < Math.abs(i) ? (s = i, r / 4) : r / (2 * Math.PI) * Math.asin(i / s), s * Math.pow(2, -10 * t) * Math.sin(2 * (t * a - o) * Math.PI / r) + i + n)
            },
            easeInOutElastic: function (e, t, n, i, a) {
                var o = 1.70158,
                    r = 0,
                    s = i;
                return 0 == t ? n : 2 == (t /= a / 2) ? n + i : (r || (r = .3 * a * 1.5), o = s < Math.abs(i) ? (s = i, r / 4) : r / (2 * Math.PI) * Math.asin(i / s), t < 1 ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * a - o) * Math.PI / r) + n : .5 * s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * a - o) * Math.PI / r) + i + n)
            },
            easeInBack: function (e, t, n, i, a, o) {
                return null == o && (o = 1.70158), i * (t /= a) * t * ((o + 1) * t - o) + n
            },
            easeOutBack: function (e, t, n, i, a, o) {
                return null == o && (o = 1.70158), i * ((t = t / a - 1) * t * ((o + 1) * t + o) + 1) + n
            },
            easeInOutBack: function (e, t, n, i, a, o) {
                return null == o && (o = 1.70158), (t /= a / 2) < 1 ? i / 2 * t * t * ((1 + (o *= 1.525)) * t - o) + n : i / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + n
            },
            easeInBounce: function (t, n, i, a, o) {
                return a - e.easing.easeOutBounce(t, o - n, 0, a, o) + i
            },
            easeOutBounce: function (e, t, n, i, a) {
                return (t /= a) < 1 / 2.75 ? 7.5625 * i * t * t + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
            },
            easeInOutBounce: function (t, n, i, a, o) {
                return n < o / 2 ? .5 * e.easing.easeInBounce(t, 2 * n, 0, a, o) + i : .5 * e.easing.easeOutBounce(t, 2 * n - o, 0, a, o) + .5 * a + i
            }
        })
    }).call(this, n(0))
}, function (e, t, n) {}, function (e, t, n) {
    "use strict";
    (function (e, t) {
        var n = !0;
        e("#btn-control").on("click", function () {
            n ? (e(this).addClass("rigtht"), e(this).html("展开"), e(".fixed-left").animate({
                left: -220
            })) : (e(this).removeClass("rigtht"), e(this).html("收起"), e(".fixed-left").animate({
                left: 40
            })), n = !n
        }), e("#player").on("click", function () {
            a("dia")
        }), e(".dia-close").on("click", function () {
            showDialog.hide(), e("#video-con").html("")
        });
        var i = e("#video-con").attr("data-video");

        function a(t) {
            showDialog.show({
                id: t,
                bgcolor: "#000",
                opacity: 50
            }), e("#video-con").html(i)
        }
        var o = e(".slideBox .bd ul").children().not(".clone").length,
            r = "";
        console.log(o);
        for (var s = 0; s < o; s++) r += "<li></li>";

        function l(t) {
            var n = e(t).attr("data-id");
            e(t).addClass("on").siblings().removeClass("on"), e.ajax({
                type: "get",
                url: "/html/wiki/list",
                data: {
                    wiki_id: n
                },
                success: function (t) {
                    var n = t.data;
                    e("#handbooktab_sub").html(""), e("#handbooktab_sub").hide();
                    for (var i = 0; i < n.length; i++) e("#handbooktab_sub").append("<li data-id=" + n[i].wiki_id + " data-i=" + i + "><a  href='javascript:;'>" + n[i].name + "</a></li>");

                    function o(t) {
                        e(t).addClass("on").siblings().removeClass("on");
                        var i = e(t).attr("data-i");
                        e("#iteminfowrap").html(""), e("#iteminfowrap").hide();
                        var o = n[i].sub;
                        for (i = 0; i < o.length; i++) e("#iteminfowrap").append("<li data-id=" + o[i].wiki_id + ">                  <a href='javascript:;'>                    <img class='lazy2' data-original=" + o[i].image_url + ">                  </a>                </li>");
                        e("img.lazy2").lazyload(), e("#iteminfowrap").fadeIn(), e("#iteminfowrap li").on("click", function () {
                            var t = e(this).attr("data-id");
                            e.ajax({
                                type: "get",
                                url: "/html/wiki/info",
                                data: {
                                    wiki_id: t
                                },
                                success: function (t) {
                                    var n = t.data.name,
                                        i = t.data.image_url;
                                    e(".itemimg").attr("src", i);
                                    var o = t.data.content;
                                    if (e("#dia2 .info-top .name").html("<span>名称：</span>              <span>" + n + "</span>"), 0 < o.length) {
                                        for (var r = "", s = 0; s < o.length; s++) r += "<p><span>" + o[s].title + ":</span> <span>" + o[s].content + "</span></p>";
                                        e("#dia2 .contents").html(r)
                                    }
                                    a("dia2")
                                }
                            })
                        })
                    }
                    e("#handbooktab_sub").fadeIn(), e("#handbooktab_sub").children("li").eq(0).addClass("on"), o(e("#handbooktab_sub").children("li").eq(0)[0]), e("#handbooktab_sub li").on("click", function () {
                        o(this)
                    })
                }
            })
        }
        e(".slideBox .hd ul").html(r), t(".slideBox").slide({
            mainCell: ".bd ul",
            effect: "leftLoop",
            autoPlay: !0,
            delayTime: 1e3,
            startFun: function () {
                e("img.lazy").lazyload()
            }
        }), t(".slideTxtBox").slide({
            effect: "leftLoop"
        }), e("#small-v").children().eq(0).show(), e(".tab-video li").on("mouseenter", function () {
            var t = e(this).index();
            e(this).addClass("on").siblings().removeClass("on"), e("#small-v").children().eq(t).stop().fadeIn().siblings().hide(), e("img.lazy").lazyload()
        }), e(".wmm-body").children(".item").eq(0).show(), e(".tab-wmm li").on("mouseenter", function () {
            var t = e(this).index();
            e(this).addClass("on").siblings().removeClass("on"), e(".wmm-body").children(".item").eq(t).stop().fadeIn().siblings().hide(), e("img.lazy").lazyload()
        }), e.ajax({
            type: "get",
            url: "/html/wiki/list",
            success: function (t) {
                if ("0000" == t.code) {
                    for (var n = t.data, i = 0; i < n.length; i++) e(".game-handbook .handbook-tab").append("<li data-id=" + n[i].wiki_id + ">" + n[i].name + "</li>");
                    e(".handbook-tab").children().eq(0).addClass("on"), l(e(".handbook-tab").children().eq(0)), e(".handbook-tab li").on("click", function (e) {
                        l(this)
                    })
                }
            }
        }), e("img.lazy").lazyload({
            effect: "fadeIn"
        })
    }).call(this, n(0), n(0))
}]);
（window.webpackJsonp = window.webpackJsonp || []）。push（[[0]，[function（e，t，n）{var r;
/ *！
 * jQuery JavaScript库v3.4.1
 * https://jquery.com/
 *
 *包括Sizzle.js
 * https://sizzlejs.com/
 *
 * JS基金会和其他贡献者的版权
 *根据MIT许可发布
 * https://jquery.org/license
 *
 *日期：2019-05-01T21：04Z
 * /
/ *！
 * jQuery JavaScript库v3.4.1
 * https://jquery.com/
 *
 *包括Sizzle.js
 * https://sizzlejs.com/
 *
 * JS基金会和其他贡献者的版权
 *根据MIT许可发布
 * https://jquery.org/license
 *
 *日期：2019-05-01T21：04Z
 * /！function（t，n）{“使用严格”；“对象” == e.exports的类型？e.exports = t.document？n（t，！0）：function（e）{if（！e .document）抛出新错误（“ jQuery需要带有文档的窗口”）；返回n（e）}：n（t）}（“未定义”！=窗口类型？窗口：this，function（n，i）{ “使用严格”；函数o（e）{返回空值！= e && e === e.window} var a = []，s = n.document，u = Object.getPrototypeOf，l = a.slice，c = a .concat，f = a.push，p = a.indexOf，d = {}，h = d.toString，g = d.hasOwnProperty，v = g.toString，y = v.call（Object），m = { }，x = function（e）{返回“ function” == e的类型&&“ number”！= e.nodeType的类型}，b = {type：！0，src：！0，nonce：！0，noModule：！0 };函数w（e，t，n）{var r，i，o =（n = n || s）.createElement（“ script”）; if（o.text = e，t）for（b中的r ）（i = t [r] || t.getAttribute && t.getAttribute（r））&& o.setAttribute（r，i）; n.head.appendChild（o）。parentNode.removeChild（o）}函数T（e）{返回null == e？e +“”：“对象” == e的类型||“ function” == e的类型d [h.call（e）] | |“ object”：typeof e} var C =“ 3.4.1”，E = function（e，t）{返回新的E.fn.init（e，t）}，k = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;函数S（e）{var t = !! e &&“ length” in e && e.length，n = T（e）; return！x（e） &&！o（e）&&（“ array” === n || 0 === t ||“ number” == e中t && 0 <t && t-1的类型）} E.fn = E.prototype = {jquery： C，构造函数：E，长度：0，toArray：函数（）{返回l.call（this）}，得到：函数（e）{返回null == e？l.call（this）：e <0？this [e + this.length]：this [e]}，pushStack：function（e）{var t = E.merge（this.constructor（），e）;返回t.prevObject = this，t}，每个：function （e）{返回E.each（this，e）}，map：function（e）{返回this.pushStack（E.map（this，function（t，n）{return e。call（t，n，t）}））}，切片：function（）{返回this.pushStack（l.apply（this，arguments））}，first：function（）{返回this.eq（0）}， last：function（）{返回this.eq（-1）}，eq：function（e）{var t = this.length，n = + e +（e <0？t：0）;返回this.pushStack（0 <= n && n <t？[this [n]]：[]）}，end：function（）{返回this.prevObject || this.constructor（）}，push：f，sort：a.sort，splice：a .splice}，E.extend = E.fn.extend = function（）{var e，t，n，r，i，o，a = arguments [0] || {}，s = 1，u = arguments。 length，l =！1; for（“ boolean” == a &&（l = a，a = arguments [s] ||| {}，s ++）的类型，“ object” == a || x（a）||的类型（a = {}），s === u &&（a = this，s-）; s <u; s ++）if（null！=（e = arguments [s]））for（t in e）r = e [t]，“ __ proto __”！== t && a！== r &&（l && r &&（E.isPlainObject（r）||（i = Array.isArray（r）））？（n = a [t]，o = i && ！Array.isArray（n）？[]：i || E.isPlainObject（n）？n：{}，i =！1，a [t] = E.extend（l，o，r））：void 0！== r &&（a [t] = r））;返回a}，E.extend（{expando：“ jQuery” +（C + Math.random（））。replace（/ \ D / g，“”“），isReady：!! 0，错误：function（e）{抛出新的错误（e）}，noop：function（）{}，isPlainObject：function（e）{var t，n; return ！（！e ||“对象对象”！== h.call（e）||（t = u（e））&&（“ function”！= typeof（n = g.call（t，“ constructor “）&& t.constructor）|| v.call（n）！== y））}，isEmptyObject：function（e）{var t; for（t ine）return！1; return！0}，globalEval：function （e，t）{w（e，{nonce：t && t.nonce}）}}，每个：function（e，t）{var n，r = 0; if（S（e））for（n = e.length ; r <n &&！1！== t.call（e [r]，r，e [r]）; r ++）;否则for（r in e）if（！1 === t.call（e [r ]，r，e [r]））break;返回e}，trim：function（e）{return null == e？“” :( e +“”）。replace（k，“”）}}，makeArray：function （e，t）{var n = t || [];返回null！= e &&（S（Object（e））？E.merge（n，“字符串” ==类型为e？[e]：e）：f.call（n，e）），n}，inArray：function（e，t，n）{返回null == t？-1：p。 call（t，e，n）}，合并：function（e，t）{for（var n = + t.length，r = 0，i = e.length; r <n; r ++）e [i ++] = t [r]; return e.length = i，e}，grep：function（e，t，n）{for（var r = []，i = 0，o = e.length，a =！n; i <o; i ++）！t（e [i]，i）！= a && r.push（e [i]）;返回r}，map：function（e，t，n）{var r，i，o = 0 ，a = []; if（S（e））for（r = e.length; o <r; o ++）null！=（i = t（e [o]，o，n））&& a.push（i ）;否则for（o in e）null！=（i = t（e [o]，o，n））&& a.push（i）;返回c.apply（[]，a）}，guid：1， support：m}），“ function” == Symbol &&（E.fn [Symbol.iterator] = a [Symbol.iterator]）的类型，E.each（“布尔数字符串功能数组日期RegExp对象错误符号” .split（ “”），function（e，t）{d [“ [object” + t +“]”] = t.toLowerCase（）}）; var N =inArray：function（e，t，n）{返回null == t？-1：p.call（t，e，n）}，merge：function（e，t）{for（var n = + t.length ，r = 0，i = e.length; r <n; r ++）e [i ++] = t [r];返回e.length = i，e}，grep：function（e，t，n）{for（ var r = []，i = 0，o = e.length，a =！n; i <o; i ++）！t（e [i]，i）！= a && r.push（e [i]）;返回r}，map：function（e，t，n）{var r，i，o = 0，a = []; if（S（e））for（r = e.length; o <r; o ++）null ！=（i = t（e [o]，o，n））&& a.push（i）;否则for（o in e）为null！=（i = t（e [o]，o，n））&& a .push（i）;返回c.apply（[]，a）}，guid：1，support：m}），“ function” == Symbol &&（E.fn [Symbol.iterator] = a [Symbol.iterator） ]），E.each（“ Boolean Number String Function Array Date RegExp Object Error Symbol” .split（“”），function（e，t）{d [“ [object” + t +“]”] = t.toLowerCase（ ）}）; var N =inArray：function（e，t，n）{返回null == t？-1：p.call（t，e，n）}，merge：function（e，t）{for（var n = + t.length ，r = 0，i = e.length; r <n; r ++）e [i ++] = t [r];返回e.length = i，e}，grep：function（e，t，n）{for（ var r = []，i = 0，o = e.length，a =！n; i <o; i ++）！t（e [i]，i）！= a && r.push（e [i]）;返回r}，map：function（e，t，n）{var r，i，o = 0，a = []; if（S（e））for（r = e.length; o <r; o ++）null ！=（i = t（e [o]，o，n））&& a.push（i）;否则for（o in e）为null！=（i = t（e [o]，o，n））&& a .push（i）;返回c.apply（[]，a）}，guid：1，support：m}），“ function” == Symbol &&（E.fn [Symbol.iterator] = a [Symbol.iterator] ]），E.each（“ Boolean Number String Function Array Date RegExp Object Error Symbol” .split（“”），function（e，t）{d [“ [object” + t +“]”] = t.toLowerCase（ ）}）; var N =r <n; r ++）e [i ++] = t [r];返回e.length = i，e}，grep：function（e，t，n）{for（var r = []，i = 0，o = e.length，a =！n; i <o; i ++）！t（e [i]，i）！= a && r.push（e [i]）;返回r}，map：function（e，t， n）{var r，i，o = 0，a = []; if（S（e））for（r = e.length; o <r; o ++）null！=（i = t（e [o] ，o，n））&& a.push（i）;否则for（o in e）null！=（i = t（e [o]，o，n））&& a.push（i）;返回c.apply（ []，a）}，guid：1，support：m}），“ function” == Symbol &&（E.fn [Symbol.iterator] = a [Symbol.iterator]）的类型，E.each（“布尔数字符串函数数组日期RegExp对象错误符号“ .split（”“），function（e，t）{d [” [object“ + t +”]“] = t.toLowerCase（）}）; var N =r <n; r ++）e [i ++] = t [r];返回e.length = i，e}，grep：function（e，t，n）{for（var r = []，i = 0，o = e.length，a =！n; i <o; i ++）！t（e [i]，i）！= a && r.push（e [i]）;返回r}，map：function（e，t， n）{var r，i，o = 0，a = []; if（S（e））for（r = e.length; o <r; o ++）null！=（i = t（e [o] ，o，n））&& a.push（i）;否则for（o in e）null！=（i = t（e [o]，o，n））&& a.push（i）;返回c.apply（ []，a）}，guid：1，support：m}），“ function” == Symbol &&（E.fn [Symbol.iterator] = a [Symbol.iterator]）的类型，E.each（“布尔数字符串函数数组日期RegExp对象错误符号“ .split（”“），function（e，t）{d [” [object“ + t +”]“] = t.toLowerCase（）}）; var N =o ++）null！=（i = t（e [o]，o，n））&& a.push（i）;否则for（o in e）null！=（i = t（e [o]，o，n ））&& a.push（i）;返回c.apply（[]，a）}，guid：1，support：m}），“ function” == Symbol &&（E.fn [Symbol.iterator] = a [ Symbol.iterator]），E.each（“布尔型数字字符串函数数组日期RegExp对象错误Symbol” .split（“”），function（e，t）{d [“ [object” + t +“]”] = t .toLowerCase（）}）; var N =o ++）null！=（i = t（e [o]，o，n））&& a.push（i）;否则for（o in e）null！=（i = t（e [o]，o，n ））&& a.push（i）;返回c.apply（[]，a）}，guid：1，support：m}），“ function” == Symbol &&（E.fn [Symbol.iterator] = a [ Symbol.iterator]），E.each（“布尔数字符串功能数组日期RegExp对象错误符号” .split（“”），function（e，t）{d [“ [object” + t +“]”] = t .toLowerCase（）}）; var N =
/ *！
 * Sizzle CSS选择器引擎v2.3.4
 * https://sizzlejs.com/
 *
 * JS基金会和其他贡献者的版权
 *根据MIT许可发布
 * https://js.foundation/
 *
 *日期：2019-04-08
 * /
function（e）{function t（e，t，n）{var r =“ 0x” + t-65536; return r！= r || n？t：r <0？String.fromCharCode（65536 + r）： String.fromCharCode（r >> 10 | 55296,1023＆r | 56320）}函数n（）{h（）} var r，i，o，a，s，u，l，c，f，p，d，h， g，v，y，m，x，b，w，T =“ sizzle” + 1 * new Date，C = e.document，E = 0，k = 0，S = ue（），N = ue（） ，A = ue（），D = ue（），j = function（e，t）{return e === t &&（d =！0），0}，L = {}。hasOwnProperty，q = []， H = q.pop，O = q.push，P = q.push，R = q.slice，M = function（e，t）{for（var n = 0，r = e.length; n <r; n ++）if（e [n] === t）return n; return-1}，I =“ checked | selected | async | autofocus | autoplay | control | defer | disabled | hidden | ismap | loop | multiple | open | readonly | required | scoped“，W =” [\\ x20 \\ t \\ r \\ n \\ f]“，$ =”（？：\\\\。| [\\ w-] | [^ \ 0-\\ xa0]）+“，F =” \\ [“ + W +” *（“ + $ +”）（?:“ + W +” *（[* ^ $ |！〜]？=）“ + W +“ *（？：'（（？：\\\\。| [^ \\\\']）*）'| \”（（？| [^ \\\\\\“]）*）\” |（“ + $ +”））|）“ + W +” * \\]“，B =” :(“ + $ +”）（?: \\（（（（（（？：\\\\。| [^ \\\\']）*）'| \“（（？ ）*）\“）|（（?? \\\\。| [^ \\\\（）[\\]] |” + F +“）*）|。*）\\）|）”，_ = new RegExp（W +“ +”，“ g”），z = new RegExp（“ ^” + W +“ + |（（？：^ | [^ \\\\]）（？：\\\\。） *）“ + W +” + $“，” g“），U =新RegExp（” ^“ +​​ W +” *，“ + W +” *“），X =新RegExp（” ^“ +​​ W +” *（[ > +〜] |“” + W +“）” + W +“ *”），V =新RegExp（W +“ |>”），G =新RegExp（B），Y =新RegExp（“ ^” + $ +“ $“），J = {ID：new RegExp（” ^＃（“ + $ +”）“），CLASS：new RegExp（” ^ \\。（“ + $ +”）“），TAG：new RegExp（ “ ^（” + $ +“ | [*]）”），ATTR：new RegExp（“ ^” + F），PSEUDO：new RegExp（“ ^” + B），孩子：新的RegExp（“ ^ :( only | first | last | nth | nth-last）-（child | of-type）（？：\\（” + W +“ *（even | odd |（（[+-] | ）（\\ d *）n |）“ + W +” *（？：（[+-] |）“ + W +” *（\\ d +）|））“ + W +” * \\）|）“， “ i”），bool：new RegExp（“ ^（?:” + I +“）$”，“ i”），needsContext：new RegExp（“ ^” + W +“ * [> +〜] |：（（even |奇数| eq | gt | lt | nth | first | last）（？：\\（“ + W +” *（（？：-\\ d）？\\ d *）“ + W +” * \\）|） （？= [^-] | $）“，” i“）}，Q = / HTML $ / i，K = / ^（?: input | select | textarea | button）$ / i，Z = / ^ h \ d $ / i，ee = / ^ [^ {] + \ {\ s * \ [native \ w /，te = / ^（？：＃（[\ w-] +）|（\ w +）| \ 。（[[\ w-] +））$ /，ne = / [+〜] /，re = new RegExp（“ \\\\（[\\ da-f] {1,6}” + W +“？ |（“ + W +”）|。）“，” ig“），ie = /（[[0- \ x1f \ x7f] | ^-？\ d）| ^-$ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w-] / g，oe = function（e，t）{return t？“ \ 0” === e？“。”：e.slice（0，-1）+“ \\” + e.charCodeAt（e。length-1）.toString（16）+“”：“ \\” + e}，ae = be（function（e）{return！0 === e.disabled &&“ fieldset” === e.nodeName.toLowerCase （）}，{dir：“ parentNode”，next：“ legend”}））;尝试{P.apply（q = R.call（C.childNodes），C.childNodes），q [C.childNodes.length]。 nodeType} catch（r）{P = {apply：q.length？function（e，t）{O.apply（e，R.call（t））}：function（e，t）{for（var n = e.length，r = 0; e [n ++] = t [r ++];）; e.length = n-1}}}}函数se（e，t，n，r）{var o，a，s，l ，f，p，d，v = t && t.ownerDocument，x = t？t.nodeType：9; if（n = n || []，“ string”！= e || !! e || 1！==的类型x && 9！== x && 11！== x）返回n; if（！r &&（（（t？t.ownerDocument || t：C）！== g && h（t），t = t || g，y））{if （11！== x &&（f = te.exec（e）））if（o = f [1]）{if（9 === x）{if（！（s = t.getElementById（o））））返回n; if（s.id === o）返回n.push（s），n}否则if（v &&（s = v.getElementById（o））&& w（t，s）&& s。id === o）返回n.push（s），n} else {if（f [2]）返回P.apply（n，t.getElementsByTagName（e）），n; if（（o = f [3 ]）&& i.getElementsByClassName && t.getElementsByClassName）返回P.apply（n，t.getElementsByClassName（o）），n} if（i.qsa &&！D [e +“”] &&（！m ||！m.test（e） ）&&（1！== x ||“ object”！== t.nodeName.toLowerCase（）））{if（d = e，v = t，1 === x && V.test（e））{for（ （l = t.getAttribute（“ id”））？l = l.replace（ie，oe）：t.setAttribute（“ id”，l = T），a =（p = u（e））。length; a-;）p [a] =“＃” + l +“” + xe（p [a]）; d = p.join（“，”），v = ne.test（e）&& ye（t.parentNode ）|| t}尝试{返回P.apply（n，v.querySelectorAll（d）），n}捕获（t）{D（e，！0）}最后{l === T && t.removeAttribute（“ id” }}}}返回c（e.replace（z，“ $ 1”），t，n，r）}函数ue（）{var e = [];返回函数t（n，r）{返回e.push（ n +“”）> o。cacheLength && delete t [e.shift（）]，t [n +“”] = r}}函数le（e）{返回e [T] =！0，e}函数ce（e）{var t = g.createElement（ “ fieldset”）;尝试{return !! e（t）}捕获（e）{return！1}最后{t.parentNode && t.parentNode.removeChild（t），t = null}}函数fe（e，t）{ for（var n = e.split（“ |”），r = n.length; r-;）o.attrHandle [n [r]] = t}函数pe（e，t）{var n = t && e， r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex-t.sourceIndex; if（r）返回r; if（n）for（; n = n.nextSibling;）if（n === t ）return-1; return e？1：-1}函数de（e）{return function（t）{return“ input” === t.nodeName.toLowerCase（）&& t.type === e}}函数他（e）{return function（t）{var n = t.nodeName.toLowerCase（）; return（“ input” === n ||“ button” === n）&& t.type === e}}函数ge（e）{返回函数（t）{返回t中的“形式”？t。parentNode &&！1 === t.disabled？t.parentNode？t.parentNode.disabled == e：t.disabled === e：t.isDisabled === e | | t.isDisabled！==！e && ae（t）=== e：t.disabled === e：t && t.disabled === e}}中的“ label”函数ve（e）{返回le（function（t ）{返回t = + t，le（function（n，r）{for（var i，o = e（[]，n.length，t），a = o.length; a-;）n [i = o [a]] &&（n [i] =！（r [i] = n [i]）}}}}}}}}}函数ye（e）{返回e && void 0！== e.getElementsByTagName && e} for（r在i = se.support = {}中，s = se.isXML = function（e）{var t = e.namespaceURI，n =（e.ownerDocument || e）.documentElement; return！Q.test（t || n && n.nodeName ||“ HTML”）}，h = se.setDocument = function（e）{var r，a，u = e？e.ownerDocument || e：C;返回u！== g && 9 === u .nodeType && u.documentElement &&（v =（g = u）.documentElement，y =！s（g），C！== g &&（a = g.defaultView）&& a。top！== a &&（a.addEventListener？a.addEventListener（“ unload”，n，！1）：a.attachEvent && a.attachEvent（“ onunload”，n）），i.attributes = ce（function（e）{return e.className =“ i”，！e.getAttribute（“ className”）}），i.getElementsByTagName = ce（function（e）{return e.appendChild（g.createComment（“”））,! e.getElementsByTagName（ “ *”）。length}），i.getElementsByClassName = ee.test（g.getElementsByClassName），i.getById = ce（function（e）{return v.appendChild（e）.id = T，！g.getElementsByName | |！g.getElementsByName（T）.length}），i.getById？（o.filter.ID = function（e）{var n = e.replace（re，t）; return function（e）{return e。 getAttribute（“ id”）=== n}}，o.find.ID = function（e，t）{if（void 0！== t.getElementById && y）{var n = t.getElementById（e）; return n ？[n]：[]}}）:( o.filter.ID = function（e）{var n = e.replace（re，t）;返回函数（e）{var t = void 0！== e.getAttributeNode && e.getAttributeNode（“ id”）;返回t && t.value === n}}，o.find.ID = function（e，t）{if（void 0！== t.getElementById && y）{var n，r，i，o = t.getElementById（e）; if（o）{if（（n = o.getAttributeNode（“ id”））&& n.value === e）return [o]; for（i = t.getElementsByName（e），r = 0; o = i [r ++];）if（（n = o.getAttributeNode（“ id”））&& n.value === e）return [o]} return [] }}），o.find.TAG = i.getElementsByTagName？function（e，t）{返回void 0！== t.getElementsByTagName？t.getElementsByTagName（e）：i.qsa？t.querySelectorAll（e）：void 0}：function（e，t）{var n，r = []，i = 0，o = t.getElementsByTagName（e）; if（“ *”！== e）返回o; for（; n = o [i ++];）1 === n.nodeType && r.push（n）;返回r}，o.find.CLASS = i.getElementsByClassName && function（e，t）{if（void 0！== t.getElementsByClassName && y）返回t .getElementsByClassName（e）}，x = []，m = []，（i。qsa = ee.test（g.querySelectorAll））&&（ce（function（e）{v.appendChild（e）.innerHTML =“ <a id='"+T+"'> </a> <select id =' “ + T +”-\ r \\'msallowcapture =''> <选择的选项=''> </ option> </ select>“，e.querySelectorAll（” [msallowcapture ^ ='']“）。length && m.push （“ [* ^ $] =” + W +“ *（?:''| \” \“）”），e.querySelectorAll（“ [selected]”）。length || m.push（“ \\ [” + W +“ *（?: value |” + I +“）”），e.querySelectorAll（“ [id〜=” + T +“-]”）。length || m.push（“〜=”），e。 querySelectorAll（“：checked”）。length || m.push（“：checked”），e.querySelectorAll（“ a＃” + T +“ + *”）。length || m.push（“。＃。+ [+ 〜]“）}），ce（function（e）{e.innerHTML =” <a href =''disable ='disabled'> </a> <select disabled ='disabled'> <option /> </ select>“; var t = g.createElement（” input“）; t.setAttribute（” type“，” hidden “），e.appendChild（t）.setAttribute（” name“，” D“），e.querySelectorAll（” [name = d]“）。length && m.push（” name“ + W +” * [* ^ $ | ！〜]？=“），2！== e.querySelectorAll（”：enabled“）。length && m.push（”：enabled“，”：disabled“），v.appendChild（e）.disabled =！0,2 ！== e.querySelectorAll（“：disabled”）。length && m.push（“：enabled”，“：disabled”），e.querySelectorAll（“ * ,: x”），m.push（“，。*：” ）}）））（（i.matchesSelector = ee.test（b = v.matches || v.webkitMatchesSelector || v.mozMatchesSelector || v.oMatchesSelector || v.msMatchesSelector））&& ce（function（e）{i。offlineedMatch = b.call（e，“ *”），b.call（e，“ [s！='']：x”），x.push（“！=”，B）}），m = m。 length && new RegExp（m.join（“ |”）），x = x.length && new RegExp（x.join（“ |”）），r = ee.test（v.compareDocumentPosition），w = r || ee.test（ v.contains）？function（e，t）{var n = 9 === e.nodeType？e.documentElement：e，r = t && t.parentNode; return e === r ||！（！r || 1 ！== r.nodeType ||！（n.contains？n.contains（r）：e.compareDocumentPosition && 16＆e.compareDocumentPosition（r）））}：function（e，t）{if（t）for（; t = t .parentNode;）if（t === e）return！0; return！1}，j = r？function（e，t）{if（e === t）return d =！0,0; ​​var n =！e.compareDocumentPosition-！t.compareDocumentPosition;返回n ||（1＆（n =（e.ownerDocument || e）===（t.ownerDocument || t）？e.compareDocumentPosition（t）：1）| |！i.sortDetached && t.compareDocumentPosition（e）=== n？e === g || e.ownerDocument === C &&w（C，e）？-1：t === g || t.ownerDocument === C && w（C，t）？1：p？M（p，e）-M（p，t）：0： 4＆n？-1：1）}：function（e，t）{if（e === t）return d =！0,0; ​​var n，r = 0，i = e.parentNode，o = t.parentNode ，a = [e]，s = [t]; if（！i ||！o）返回e === g？-1：t === g？1：i？-1：o？1：p M（p，e）-M（p，t）：0; if（i === o）返回pe（e，t）; for（n = e; n = n.parentNode;）a.unshift（ n）; for（n = t; n = n.parentNode;）s.unshift（n）; for（; a [r] === s [r];）r ++;返回r？pe（a [r] ，s [r]）：a [r] === C？-1：s [r] === C？1：0}），g}，se.matches = function（e，t）{return se （e，null，null，t）}，se.matchesSelector = function（e，t）{if（（e.ownerDocument || e）！== g && h（e），i.matchesSelector && y &&！D [t +“”] &&（！x ||！x.test（t））&&（！m ||！m.test（t）））try {var n = b.call（e，t）; if（n || i。 offlineedMatch || e.document && 11！== e.document.nodeType）返回n} catch（e）{D（t，！0）}返回0 <se（t，g，null，[e]）。length}， se.contains = function（e，t）{return（e.ownerDocument || e）！== g && h（e），w（e，t）}，se.attr = function（e，t）{（e.ownerDocument || e）！== g && h（e）; var n = o.attrHandle [t .toLowerCase（）]，r = n && L.call（o.attrHandle，t.toLowerCase（））？n（e，t，！y）：void 0;返回void 0！== r？r：i.attributes | |！y？e.getAttribute（t）:( r = e.getAttributeNode（t））&& r.specified？r.value：null}，se.escape = function（e）{return（e +“”）。replace（即，oe）}，se.error = function（e）{抛出新的错误（“语法错误，无法识别的表达式：“ + e）}，se.uniqueSort = function（e）{var t，n = []，r = 0，o = 0; if（d =！i.detectDuplicates，p =！i.sortStable && e.slice（0），e.sort（j），d）{for（; t = e [o ++];）t === e [o] &&（r = n.push（o））; for（; r-;）e.splice（n [r]，1）}返回p = null，e}，a = se .getText = function（e）{var t，n =“”，r = 0，i = e.nodeType; if（i）{if（1 === i || 9 === i || 11 == = i）{if（“ string” == e.textContent的类型）返回e.textContent; for（e = e.firstChild; e; e = e。nextSibling）n + = a（e）}否则if（3 === i || 4 === i）返回e.nodeValue} else for（; t = e [r ++];）n + = a（t）; return n}，（o = se.selectors = {cacheLength：50，createPseudo：le，match：J，attrHandle：{}，find：{}，relative：{“>”：{dir：“ parentNode”，first :!） 0}，“”“：{dir：” parentNode“}，” +“：{dir：” previousSibling“，first：！0}，”〜“：{dir：” previousSibling“}}}，preFilter：{ATTR：function （e）{返回e [1] = e [1] .replace（re，t），e [3] =（e [3] || e [4] || e [5] ||“”）。 replace（re，t），“〜=” === e [2] &&（e [3] =“” + e [3] +“”），e.slice（0,4）}，CHILD：function （e）{返回e [1] = e [1..toLowerCase（），“ nth” === e [1] .slice（0,3）？（e [3] || se.error（e [ 0]），e [4] = +（e [4]？e [5] +（e [6] || 1）：2 *（“ even” === e [3] ||“ odd” = == e [3]）），e [5] = +（e [7] + e [8] ||“奇数” === e [3]））：e [3] && se.error（e [ 0]），e}，PSEUDO：function（e）{var t，n =！e [6] && e [2];返回J.CHILD.test（e [0]）？null：（e [3]？e [2] = e [4] || e [5] ||“”：n && G.test（n）&&（t = u（n，！0））&&（t = n.indexOf（“）”，n.length-t）-n。长度）&&（e [0] = e [0] .slice（0，t），e [2] = n.slice（0，t）），e.slice（0,3））}}，过滤器： {TAG：函数（e）{var n = e.replace（re，t）.toLowerCase（）; return“ *” === e？function（）{return！0}：function（e）{return e。 nodeName && e.nodeName.toLowerCase（）=== n}}，CLASS：function（e）{var t = S [e +“”];返回t ||（t = new RegExp（“（^ |” + W +“） “ + e +”（“ + W +” | $）“）））&& S（e，function（e）{返回t.test（” string“ == type。e.className && e.className || void 0！== e.getAttribute && e .getAttribute（“ class”）||“”）}）}}，ATTR：function（e，t，n）{返回function（r）{var i = se.attr（r，e）; return null == i ？“！=”=== t：！t ||（i + =“”，“ =” === t？i === n：“！=” === t？i！== n：“ ^ =” == = t？n && 0 === i.indexOf（n）：“ * =” === t？n &&-1 <i.indexOf（n）：“ $ =” === t？n && i.slice（-n。长度）=== n：“〜=” === t？-1 <（“” + i.replace（_，“”）+“”）.indexOf（n）：“ | =” === t && （i === n || i.slice（0，n.length + 1）=== n +“-”））}}，CHILD：function（e，t，n，r，i）{var o = “ nth”！== e.slice（0,3），a =“ last”！== e.slice（-4），s =“ of-type” === t;返回1 === r && 0 = == i？function（e）{return !! e.parentNode}：function（t，n，u）{var l，c，f，p，d，h，g = o！= a？“ nextSibling”： “ previousSibling”，v = t.parentNode，y = s && t.nodeName.toLowerCase（），m =！u &&！s，x =！1; if（v）{if（o）{for（; g;）{for （p = t; p = p [g];）if（s？p.nodeName.toLowerCase（）=== y：1 === p.nodeType）return！1; h = g =“仅“ === e &&！h &&” nextSibling“}返回！0} if（h = [a？v.firstChild：v.lastChild]，a && m）{for（x =（d =（l =（c =（f =（p = v）[T] ||（p [T] = {}））[p.uniqueID] ||（f [p.uniqueID] = {}））[e] || []）[0 ] === E && l [1]）&& l [2]，p = d && v.childNodes [d]; p = ++ d && p && p [g] ||（x = d = 0）|| h.pop（）;）如果（1 === p.nodeType && ++ x && p === t）{c [e] = [E，d，x]; break}}否则if（m &&（x = d =（l =（c =（f =（p = t）[T] ||（p [T] = {}））[p.uniqueID] ||（f [p.uniqueID] = {}））[e] || []）[0 ] === E && l [1]）,! 1 === x）for（;（p = ++ d && p && p [g] ||（x = d = 0）|| h.pop（））&&（（s ？p.nodeName.toLowerCase（）！== y：1！== p.nodeType）||！++ x ||（m &&（（c =（f = p [T] ||（p [T] = {}））[p.uniqueID] ||（f [p.uniqueID] = {}））[e] = [E，x]），p！== t））;）;返回（x- = i ）=== r || x％r == 0 && 0 <= x / r}}}，PSEUDO：function（e，t）{var n，r = o.pseudos [e] || o.setFilters [e。 toLowerCase（）] || se.error（“不支持的伪：“ + e）;返回r [T]？r（t）：1 <r.length？（n = [e，e，”“，t]，o.setFilters.hasOwnProperty（e.toLowerCase（） ）？le（function（e，n）{for（var i，o = r（e，t），a = o.length; a-;）e [i = M（e，o [a]）]] =！（n [i] = o [a]）}）：function（e）{return r（e，0，n）}）：r}}，pseudos：​​{not：le（function（e）{var t = []，n = []，r = l（e.replace（z，“ $ 1”））;返回r [T]？le（function（e，t，n，i）{for（var o， a = r（e，null，i，[]），s = e.length; s-;）（o = a [s]）&&（e [s] =！（t [s] = o））） }）：function（e，i，o）{返回t [0] = e，r（t，null，o，n），t [0] = null，！n.pop（）}}），具有： le（function（e）{return function（t）{return 0 <se（e，t）.length}}），包含：le（function（e）{return e = e.replace（re，t），function （t）{return-1 <（t.textContent || a（t））。indexOf（e）}}）），lang：le（function（e）{return Y.test（e ||“”））|| se.error（“不支持的lang：” + e），e = e.replace（re，t）.toLowerCase（），function（t）{var n; do {if（n = y？t.lang：t。 getAttribute（“xml：lang“）|| t.getAttribute（” lang“））返回（n = n.toLowerCase（））=== e || 0 === n.indexOf（e +”-“）}} while（（t = t.parentNode）&& 1 === t.nodeType）; return！1}}），目标：函数（t）{var n = e.location && e.location.hash; return n && n.slice（1）=== t .id}，root：function（e）{返回e === v}，focus：function（e）{返回e === g.activeElement &&（！g.hasFocus || g.hasFocus（））&& !! （e.type || e.href || ~~ e.tabIndex）}，已启用：ge（！1），已禁用：ge（！0），已选中：function（e）{var t = e.nodeName.toLowerCase（ ）;返回“输入” === t && !! e.checked ||“选项” === t && !! e.selected}，selected：function（e）{返回e.parentNode && e.parentNode.selectedIndex，！0 = == e.selected}，空：function（e）{for（e = e.firstChild; e; e = e.nextSibling）if（e.nodeType <6）return！1; return！0}，parent：function （e）{return！o.pseudos.empty（e）}，标题：函数（e）{返回Z.test（e.nodeName）}，输入：函数（e）{返回K.test（e.nodeName）}，按钮：函数（e）{var t = e.nodeName.toLowerCase（ ）;返回“输入” === t &&“按钮” === e.type ||“按钮” === t}，text：function（e）{var t;返回“输入” === e.nodeName .toLowerCase（）&&“ text” === e.type &&（null ==（t = e.getAttribute（“ type”））||“ text” === t.toLowerCase（））}，first：ve（ function（）{return [0]}），last：ve（function（e，t）{return [t-1]}），eq：ve（function（e，t，n）{return [n <0？ n + t：n]}），even：ve（function（e，t）{for（var n = 0; n <t; n + = 2）e.push（n）; return e}），odd：ve （function（e，t）{for（var n = 1; n <t; n + = 2）e.push（n）; return e}），lt：ve（function（e，t，n）{for（ var r = n <0？n + t：t <n？t：n; 0 <=-r;）e.push（r）; return e}），gt：ve（function（e，t，n ）{for（var r = n <0？n + t：n; ++ r <t;）e.push（r）; return e}）}}））。pseudos.nth = o.pseudos.eq，{radio：！0，checkbox：！0，file：！0，password：！0，image：！0}）o.pseudos [r] = de（r）; for（r in {submit：！0，reset ：！0}）o.pseudos [r] = he（r）;函数me（）{}函数xe（e）{for（var t = 0，n = e.length，r =“”; t <n ; t ++）r + = e [t] .value; return r}函数be（e，t，n）{var r = t.dir，i = t.next，o = i || r，a = n &&“ parentNode “ === o，s = k ++;返回t.first？function（t，n，i）{for（; t = t [r];）if（1 === t.nodeType || a）返回e （t，n，i）; return！1}：function（t，n，u）{var l，c，f，p = [E，s]; if（u）{for（; t = t [r ];）if（（1 === t.nodeType || a）&& e（t，n，u））返回！0}否则for（; t = t [r];）if（1 === t。 nodeType || a）if（c =（f = t [T] |||（t [T] = {}））[t.uniqueID] |||（f [t.uniqueID] = {}），i && i == = t.nodeName.toLowerCase（））t = t [r] || t; else {if（（l = c [o]）&& l [0] === E && l [1] === s）返回p [ 2] = l [2]; if（（c [o] = p）[2] = e（t，n，u））return！0} return！1}}函数we（e）{return 1 <e .length？function（t，n，r）{for（var i = e.length; i-;）if（！e [i]（t，n，r））return！1; return！0}：e [0]}函数Te（e，t，n，r，i）{for（var o，a = []，s = 0，u = e.length ，l = null！= t; s <u; s ++）（o = e [s]）&&（n &&！n（o，r，i）||（a.push（o），l && t.push（s） ））;返回} Ce（e，t，n，r，i，o）{返回r &&！r [T] &&（r = Ce（r）），i &&！i [T] &&（i = Ce （i，o）），le（function（o，a，s，u）{var l，c，f，p = []，d = []，h = a.length，g = o || function（ e，t，n）{for（var r = 0，i = t.length; r <i; r ++）se（e，t [r]，n）; return n}（t ||“ *”，s .nodeType？[s]：s，[]），v =！e ||！o && t？g：Te（g，p，e，s，u），y = n？i ||（o？e：h || r）？[]：a：v; if（n && n（v，y，s，u），r）for（l = Te（y，d），r（l，[]，s，u）， c = l.length; c-;）（f = l [c]）&&（y [d [c]] =！（v [d [c]] = f））; if（o）{if（ i || e）{if（i）{for（l = []，c = y.length; c-;）（f = y [c]）&& l.push（v [c] = f）; i （null，y = []，l，u）} for（c = y.length; c-;）（f = y [c]）&&-1 <（l = i？M（o，f）： p [c]）&&（o [l] =！（a [l] = f））}}其他y = Te（y === a？y.splice（h，y.length）：y），i？i（null，a，y，u）：P.apply（a，y）}）}函数Ee（e）{for（var t，n，r，i = e.length，a = o.relative [e [0] .type]，s = a || o.relative [“”]，u = a？1：0，l = be（function（e）{return e === t}，s ,! 0），c = be（function（e）{return-1 <M（t，e）}，s，！0），p = [function（e，n，r）{var i =！a &&（r | | n！== f）||（（t = n）.nodeType？l（e，n，r）：c（e，n，r））;返回t = null，i}]; u <i; u ++）if（n = o.relative [e [u] .type]）p = [be（we（p），n）]; else {if（（n = o.filter [e [u] .type] .apply（null，e [u] .matches））[T]）{for（r = ++ u; r <i &&！o.relative [e [r] .type]; r ++）;返回Ce（1 < u && we（p），1 <u && xe（e.slice（0，u-1）.concat（{value：“” === e [u-2] .type？“ *”：“”}））。replace （z，“ $ 1”），n，u <r && Ee（e.slice（u，r）），r <i && Ee（e = e.slice（r）），r <i && xe（e））} p.push（ n）}返回we（p）}返回me.prototype = o.filters = o.pseudos，o.setFilters = new me，u = se.tokenize = function（e，t）{var n，r，i，a，s，u，l，c = N [e +“”]; if（c）返回t？0：c.slice（0）; for（s = e，u = []，l = o。 preFilter; s;）{for（n &&！（r = U.exec（s））中的a ||（r &&（s = s.slice（r [0] .length）|| s），u.push（i = []）），n =！1，（r = X.exec（s））&&（n = r.shift（），i.push（{value：n，type：r [0] .replace（z ，“”）}），s = s.slice（n.length）），o.filter）！（r = J [a] .exec（s））|| l [a] &&！（r = l [ a]（r））|||（n = r.shift（），i.push（{value：n，type：a，matches：r}），s = s.slice（n.length））; if（ ！n）break}返回t？s.length：s？se.error（e）：N（e，u）.slice（0）}，l = se.compile = function（e，t）{var n， r = []，i = []，a = A [e +“”]; if（！a）{for（t ||（t = u（e）），n = t.length; n--;） （a = Ee（t [n]））[T]？r.push（a）：i.push（a）;（a = A（e，function（e，t）{function n（n，a， s，u，l）{var c，p，d，v = 0，m =“ 0”，x = n && []，b = []，w = f，T = n || i && o.find.TAG（ “ *”，l），C = E + = null == w？1：Math.random（）|| .1，k = T.length; for（l &&（f = a === g || a || l）; m！== k && null！=（c = T [m]）; m ++）{if（i && c）{for（p = 0，a || c.ownerDocument === g ||（h（c），s =！y）; d = e [p ++];）if（d（c，a || g，s））{u.push（c）; break} l &&（E = C）} r &&（（c =！d && c）&& v-，n && x .push（c））} if（v + = m，r && m！== v）{for（p = 0; d = t [p ++];）d（x，b，a，s）; if（n）{ if（0 <v）for（; m-;）x [m] || b [m] ||（b [m] = H.call（u））; b = Te（b）} P.apply （u，b），l &&！n && 0 <b.length && 1 <v + t.length && se.uniqueSort（u）}返回l &&（E = C，f = w），x} var r = 0 <t.length，i = 0 <e.length;返回r？le（n）：n}（i，r）））。selector = e}返回a}，c = se.select = function（e，n，r，i）{var a，s，c，f，p，d =“ function” == e && e，h =！i && u（e = d.selector || e）; if（r = r || []，1 === h .length）{if（2 <（s = h [0] = h [0] .slice（0））。length &&“ ID” ===（c = s [0]）。type && 9 === n.nodeType && y && o .relative [s [1] .type]）{if（！（n =（o.find.ID（c.matches [0]。replace（re，t），n）|| [[]）[0]））返回r; d &&（n = n.parentNode），e = e.slice（s.shift（）。value.length）} for（ a = J.needsContext.test（e）？0：s.length; a-&&（c = s [a] ,! o.relative [f = c.type]）;）if（（p = o。 find [f]）&&（i = p（c.matches [0] .replace（re，t），ne.test（s [0] .type）&& ye（n.parentNode）|| n）））{if （s.splice（a，1），！（e = i.length && xe（s）））return P.apply（r，i），r; break}} return（d || l（e，h））（ i，n，！y，r，！n || ne.test（e）&& ye（n.parentNode）|| n），r}，i.sortStable = T.split（“”）。sort（j）。 join（“”）=== T，i.detectDuplicates = !! d，h（），i.sortDetached = ce（function（e）{return 1＆e.compareDocumentPosition（g.createElement（“ fieldset”））}））， ce（function（e）{返回e.innerHTML =“ <a href='#'> </a>”，“＃” === e.firstChild.getAttribute（“ href”）}）|| fe（“ type | href | height | width“，function（e，t，n）{if（！n）返回e。getAttribute（t，“ type” === t.toLowerCase（）？1：2）}），i.attributes && ce（function（e）{return e.innerHTML =“ <input />”，e.firstChild.setAttribute（ “ value”，“”），“” === e.firstChild.getAttribute（“ value”）}）|| fe（“ value”，function（e，t，n）{if（！n &&“ input” = == e.nodeName.toLowerCase（））返回e.defaultValue}），ce（function（e）{return null == e.getAttribute（“ disabled”）}）|| fe（I，function（e，t， n）{var r; if（！n）return！0 === e [t]？t.toLowerCase（）:( r = e.getAttributeNode（t））&& r.specified？r.value：null}）， se}（n）;函数A（e，t，n）{for（var r = []，i = void 0！== n;（e = e [t]）&& 9！== e.nodeType;） if（1 === e.nodeType）{if（i && E（e）.is（n））break; r.push（e）}返回r}函数D（e，t）{for（var n = [] ; e; e = e.nextSibling）1 === e.nodeType && e！== t && n.push（e）;返回n} E.find = N，E.expr = N。选择器，E.expr [“：”] = E.expr.pseudos，E.uniqueSort = E.unique = N.uniqueSort，E.text = N.getText，E.isXMLDoc = N.isXML，E.contains = N .contains，E.escapeSelector = N.escape; var j = E.expr.match.needsContext; function L（e，t）{return e.nodeName && e.nodeName.toLowerCase（）=== t.toLowerCase（）} var q = / ^ <（[[az] [^ \ / \ 0>：\ x20 \ t \ r \ n \ f] *）[\ x20 \ t \ r \ n \ f] * \ /？>（？ <\ / \ 1> |）$ / i;函数H（e，t，n）{返回x（t）？E.grep（e，function（e，r）{return !! t.call（e， r，e）！== n}）：t.nodeType？E.grep（e，function（e）{return e === t！== n}）：“ string”！= t？E.grep的类型（e，function（e）{return-1 <p.call（t，e）！== n}）：E.filter（t，e，n）} E.filter = function（e，t，n） {var r = t [0];返回n &&（e =“：not（” + e +“）”），1 === t.length && 1 === r.nodeType？E.find.matchesSelector（r，e） ？[r]：[]：E.find.matches（e，E.grep（t，function（e）{return 1 === e.nodeType}））}，E.fn.extend（{find：function（e）{var t，n，r = this.length，i = this; if（“ string”！= etype）返回this.pushStack（E（e）.filter（function（）{for（t = 0; t <r; t ++）if（E.contains（i [t]，this））return！0}）））; for（n = this.pushStack（[]），t = 0; t <r; t ++ ）E.find（e，i [t]，n）;返回1 <r？E.uniqueSort（n）：n}，filter：function（e）{返回this.pushStack（H（this，e || [ ] ,! 1））}，不是：function（e）{返回this.pushStack（H（this，e || [[！，！0））}}，is：function（e）{return !! H（this， “ string” == e && j.test（e）？E（e）：e || [[！，！1）.length}}）的类型； var O，P = / ^（？：\ s *（<[\ w \ W] +>）[^>] * |＃（[\ w-] +））$ /;（E.fn.init = function（e，t，n）{var r，i; if（！ e）返回此值；如果（n = n || O，“字符串”！= e的类型）返回e.nodeType？（this [0] = e，this.length = 1，this）：x（e）？void 0！== n.ready？n.ready（e）：e（E）：E.makeArray（e，this）; if（！（r =“ <” === e [0] &&“>” = == e [e.length-1] && 3 <= e.length？[null，e，null]：P。exec（e））||！r [1] && t）返回！t || t.jquery？（t || n）.find（e）：this.constructor（t）.find（e）; if（r [1]）{if（t = t E？t [0]的实例：t，E.merge（this，E.parseHTML（r [1]，t && t.nodeType？t.ownerDocument || t：s，！0 ）），q.test（r [1]）&& E.isPlainObject（t））for（r in t）x（this [r]）？this [r]（t [r]）：this.attr（r， t [r]）;返回此}返回（i = s.getElementById（r [2]））&&（this [0] = i，this.length = 1），this}）。prototype = E.fn，O = E（s）; var R = / ^（?: parents | prev（？：Until | All））/，M = {孩子：！0，内容：！0，下一个：！0，上一个：！0} ; function I（e，t）{for（;（e = e [t]）&& 1！== e.nodeType;）;返回e} E.fn.extend（{has：function（e）{var t = E（e，this），n = t.length;返回this.filter（function（）{for（var e = 0; e <n; e ++）if（E.contains（this，t [e]））return ！0}）}，最接近：function（e，t）{var n，r = 0，i = this.length，o = []，a =“ string”！= e && E（e）; if（！j .test（e））for（; r <i; r ++）for（n = this [r]; n && n！== t;n = n.parentNode）if（n.nodeType <11 &&（a？-1 <a.index（n）：1 === n.nodeType && E.find.matchesSelector（n，e）））{o.push（n ）; break}返回this.pushStack（1 <o.length？E.uniqueSort（o）：o）}，index：function（e）{return e？“ string” == e？p.call（E（ e），this [0]）：p.call（this，e.jquery？e [0]：e）：this [0] && this [0] .parentNode？this.first（）。prevAll（）。length： -1}，add：function（e，t）{返回this.pushStack（E.uniqueSort（E.merge（this.get（），E（e，t）））））}，addBack：function（e）{返回this.add（null == e？this.prevObject：this.prevObject.filter（e））}）），E.each（{parent：function（e）{var t = e.parentNode; return t && 11！= = t.nodeType？t：null}，父级：function（e）{返回A（e，“ parentNode”）}}，父级直到：function（e，t，n）{返回A（e，“ parentNode”，n） }，next：function（e）{返回I（e，“ nextSibling”）}}，prev：function（e）{返回I（e，“ previousSibling”）}，nextAll：function（e）{返回A（e，“ nextSibling”）}}，prevAll：function（e）{返回A（e，“ previousSibling”）}}，nextUntil：function（e，t，n）{返回A（e，“ nextSibling”，n）}，prevUntil：function（e，t，n）{返回A（e，“ previousSibling”，n）}，兄弟姐妹：function（e）{返回D（（e。 parentNode || {}）。firstChild，e）}，children：函数（e）{返回D（e.firstChild）}，contents：函数（e）{返回void 0！== e.contentDocument？e.contentDocument： （L（e，“ template”）&&（e = e.content || e），E.merge（[]，e.childNodes））}}，function（e，t）{E.fn [e] = function（n，r）{var i = E.map（this，t，n）;返回“直到”！== e.slice（-5）&&（r = n），r &&“ string” == r &&的类型（i = E.filter（r，i）），1 <this.length &&（M [e] || E.uniqueSort（i），R.test（e）&& i.reverse（）），this.pushStack（i ）}}）; var W = / [^ \ x20 \ t \ r \ n \ f] + / g;函数$（e）{返回e}函数F（e）{抛出e}函数B（e，t，n，r）{var i; try {e && x（i = e.promise）？i.call（e） .done（t）.fail（n）：e && x（i = e.then）？i.call（e，t，n）：t.apply（void 0，[e] .slice（r））} catch（ e）{n.apply（void 0，[e]）}} E.Callbacks = function（e）{function t（）{for（o = o || e.on，i = n =！0; s.s。 length; u = -1）for（r = s.shift（）; ++ u <a.length;）！1 === a [u] .apply（r [0]，r [1]）&& e。 stopOnFalse &&（u = a.length，r =！1）; e.memory ||（r =！1），n =！1，o &&（a = r？[]：“”）} e =“ string” = = typeof e？function（e）{var t = {};返回E.each（e.match（W）|| []，function（e，n）{t [n] =！0}），t} （e）：E.extend（{}，e）; var n，r，i，o，a = []，s = []，u = -1，l = {add：function（）{返回a &&（ r &&！n &&（u = a.length-1，s.push（r）），函数t（n）{E.each（n，function（n，r）{x（r）？e.unique && l.has（ r）|| a.push（r）：r && r.length &&“ string”！== T（r）&&t（r）}）}（参数），r &&！n && t（）），此}，删除：function（）{返回E.each（arguments，function（e，t）{for（var n; -1 <（ n = E.inArray（t，a，n））;）a.splice（n，1），n <= u && u--}），此}，具有：function（e）{return e？-1 <E .inArray（e，a）：0 <a.length}，空：function（）{返回a &&（a = []），此}，disable：function（）{返回o = s = []，a = r =“”，this}，disabled：function（）{return！a}，lock：function（）{return o = s = []，r || n ||（a = r =“”），this}， lock：function（）{return !! o}，fireWith：function（e，r）{return o ||（r = [e，（r = r || []）。slice？r.slice（）：r ]，s.push（r），n || t（）），this}，fire：function（）{return l.fireWith（this，arguments），this}，fired：function（）{return !! i} }; return l}，E.extend（{Deferred：function（e）{var t = [[“ notify”，“ progress”，E.Callbacks（“ memory”），E.Callbacks（“ memory”），2 ]，[“解决”，“完成”，E。Callbacks（“ once memory”），E.Callbacks（“ once memory”），0，“ resolved”]，[“ reject”，“ fail”，E.Callbacks（“ once memory”），E.Callbacks（“ once memory“），1，” rejected“]]]，r =” pending“，i = {state：function（）{return r}，always：function（）{return o.done（arguments）.fail（arguments）， this}，catch：function（e）{返回i.then（null，e）}，pipe：function（）{var e = arguments;返回E.Deferred（function（n）{E.each（t，function（ t，r）{var i = x（e [r [4]]）&& e [r [4]]; o [r [1]]（function（）{var e = i && i.apply（this，arguments）; e && x（e.promise）？e.promise（）。progress（n.notify）.done（n.resolve）.fail（n.reject）：n [r [0] +“ With”]（this，i？ [e]：arguments）}）}），e = null}）。promise（）}，然后：function（e，r，i）{var o = 0; function a（e，t，r，i）{ return function（）{function s（）{var n，s; if（！（e <o））{if（（n = r.apply（u，l））=== t。promise（））抛出新的TypeError（“ Thenable self-resolution”）; s = n &&（“ object” == typeof n ||“ function” == typeof n）&& n.n，x（s）？i？s。 call（n，a（o，t，$，i），a（o，t，F，i））:( o ++，s.call（n，a（o，t，$，i），a（o ，t，F，i），a（o，t，$，t.notifyWith））））:( r！== $ &&（u = void 0，l = [n]），（i || t.resolveWith ）（u，l））}} var u = this，l = arguments，c = i？s：function（）{try {s（）} catch（n）{E.Deferred.exceptionHook && E.Deferred.exceptionHook（n ，c.stackTrace），o <= e + 1 &&（r！== F &&（u = void 0，l = [n]），t.rejectWith（u，l））}} ;; e？c（）:( E.Deferred.getStackHook &&（c.stackTrace = E.Deferred.getStackHook（）），n.setTimeout（c））}}返回E.Deferred（function（n）{t [0] [3] .add（a（ 0，n，x（i）？i：$，n.notifyWith）），t [1] [3] .add（a（0，n，x（e）？e：$）），t [2] [3] .add（a（0，n，x（r）？r：F））}）。promise（）}，promise：function（e）{返回null！= e？E.extend（e，i ）：i}}，o = {};返回E.each（t，function（e，n）{var a = n [2]，s = n [5]; i [n [1]] = a.add，s && a.add（function（）{r = s}，t [3-e] [ 2] .disable，t [3-e] [3] .disable，t [0] [2] .lock，t [0] [3] .lock），a.add（n [3] .fire）， o [n [0]] = function（）{返回o [n [0] +“使用”]（this === o？void 0：this，arguments），this}，o [n [0] +“ With“] = a.fireWith}），i.promise（o），e && e.call（o，o），o}，当：function（e）{function t（e）{return function（t）{i [ e] = this，o [e] = 1 <arguments.length？l.call（arguments）：t，-n || a.resolveWith（i，o）}} var n = arguments.length，r = n ，i = Array（r），o = l.call（arguments），a = E.Deferred（）; if（n <= 1 &&（B（e，a.done（t（r））。resolve，a。拒绝，！n），“待处理” === a.state（）|| x（o [r] && o [r] .then）））返回a.then（）; for（; r-;）B （o [r]，t（r），a.reject）;返回a.promise（）}}）; var _ = / ^（Eval | Internal | Range | Reference | Syntax | Type | URI）Error $ /; E.Deferred.exceptionHook = function（e，t）{n.console && n.console.warn && e＆＆_。test（e.name）&& n.console.warn（“ jQuery.Deferred exception：” + e.message，e.stack，t）}，E.readyException = function（e）{n.setTimeout（function（） {throw e}）}; var z = E.Deferred（）; function U（）{s.removeEventListener（“ DOMContentLoaded”，U），n.removeEventListener（“ load”，U），E.ready（）} E .fn.ready = function（e）{返回z.then（e）.catch（function（e）{E.readyException（e）}），this}，E.extend（{isReady：！1，readyWait：1 ，ready：function（e）{（！0 === e？-E.readyWait：E.isReady）||（E.isReady =！0）！== e && 0 <-E.readyWait || z。 resolveWith（s，[E]）}}），E.ready.then = z.then，“ complete” === s.readyState ||“正在加载”！== s.readyState &&！s.documentElement.doScroll？n .setTimeout（E.ready）:( s.addEventListener（“ DOMContentLoaded”，U），n.addEventListener（“ load”，U））; var X = function（e，t，n，r，i，o，a ）{var s = 0，u = e.length，l = null == n;if（“ object” === T（n））for（s in i =！0，n）X（e，t，s，n [s] ,! 0，o，a）;否则if（void 0 ！== r &&（i =！0，x（r）||（a =！0），l &&（t = a？（t.call（e，r），null）:( l = t，function（e ，t，n）{返回l.call（E（e），n）}）），t））for（; s <u; s ++）t（e [s]，n，a？r：r.call （e [s]，s，t（e [s]，n）））;返回i？e：l？t.call（e）：u？t（e [0]，n）：o}，V = / ^-ms-/，G = /-（[[az]）/ g;函数Y（e，t）{返回t.toUpperCase（）}函数J（e）{返回e.replace（V，“ ms -“）。replace（G，Y）}函数Q（e）{返回1 === e.nodeType || 9 === e.nodeType ||！+ e.nodeType}函数K（）{this.expando = E.expando + K.uid ++} K.uid = 1，K.prototype = {cache：function（e）{var t = e [this.expando];返回t ||（t = {}，Q（e ）&&（e.nodeType？e [this.expando] = t：Object.defineProperty（e，this.expando，{value：t，configurable：！0}））），t}，set：function（e，t ，n）{var r，i = this.cache（e）; if（“ string” == t的类型）i [J（t）] = n;否则for（r in t）i [J（r）] = t [r]; return i}，get：function（e，t）{return void 0 === t？this.cache（e）：e [this.expando] && e [this.expando] [J（t）]}，access：function（e，t，n）{return void 0 === t || t &&“ string” == t && void的类型0 === n？this.get（e，t）:( this.set（e，t，n），void 0！== n？ n：t）}，删除：function（e，t）{var n，r = e [this.expando]; if（void 0！== r）{if（void 0！== t）{n =（ t = Array.isArray（t）？t.map（J）:( t = J（t））in r？[t]：t.match（W）|| []）。length; for（; n- -;）删除r [t [n]]}无效0！== t &&！E.isEmptyObject（r）||（e.nodeType？e [this.expando] = void 0：删除e [this.expando]） }}，hasData：function（e）{var t = e [this.expando];返回空0！== t &&！E.isEmptyObject（t）}}; var Z = new K，ee = new K，te = / ^（？：\ {[\ w \ W] * \} | \ [[\ w \ W] * \]）$ /，ne = / [AZ] / g;函数re（e，t，n） {var r; if（void 0 === n && 1 === e.nodeType）if（r =“ data-” + t.replace（ne，“-$＆”）。toLowerCase（），“ string” == typeof（n = e。getAttribute（r）））{try {n = function（e）{返回“ true” === e ||“ false”！== e &&（“ null” === e？null：e === + e + “”？+ e：te.test（e）？JSON.parse（e）：e）}（n）} catch（e）{} ee.set（e，t，n）} else n = void 0;返回n} E.extend（{hasData：function（e）{返回ee.hasData（e）|| Z.hasData（e）}，data：function（e，t，n）{返回ee.access（e， t，n）}，removeData：function（e，t）{ee.remove（e，t）}，_ data：function（e，t，n）{return Z.access（e，t，n）}，_ removeData ：function（e，t）{Z.remove（e，t）}}），E.fn.extend（{data：function（e，t）{var n，r，i，o = this [0]， a = o && o.attributes; if（void 0！== e）返回“对象” == e的类型？this.each（function（）{ee.set（this，e）}）：X（this，function（t ）{var n; if（o && void 0 === t）返回void 0！==（n = ee.get（o，e））？n：void 0！==（n = re（o，e）） ？n：void 0; this.each（function（）{ee.set（this，e，t）}）}，null，t，1 <arguments.length，null，！0）; if（this.length &&（我= ee。get（o），1 === o.nodeType &&！Z.get（o，“ hasDataAttrs”））））{for（n = a.length; n-;）a [n] && 0 ===（r = a [n] .name）.indexOf（“ data-”）&&（r = J（r.slice（5）），re（o，r，i [r]））; Z.set（o，“ hasDataAttrs “，！0）}返回i}，removeData：function（e）{返回this.each（function（）{ee.remove（this，e）}）}}），E.extend（{queue：function（e ，t，n）{var r; if（e）return t =（t ||“ fx”）+“ queue”，r = Z.get（e，t），n &&（！r || Array.isArray（ n）？r = Z.access（e，t，E.makeArray（n））：r.push（n）），r || []}，出队：function（e，t）{t = t || “ fx”; var n = E.queue（e，t），r = n.length，i = n.shift（），o = E._queueHooks（e，t）;“ inprogress” === i &&（i = n.shift（），r-），i &&（“ fx” === t && n.unshift（“ inprogress”），删除o.stop，i.call（e，function（）{E.dequeue（e， t）}，o））,! r && o && o.empty.fire（）}，_ queueHooks：function（e，t）{var n = t +“queueHooks”；返回Z.get（e，n）|| Z.access（e，n，{empty：E.Callbacks（“ once memory”）。add（function（）{Z.remove（e，[t +“ E.fn.extend（{queue：function（e，t）{var n = 2; return“ string”！= typeof e &&（t = e，e = “ fx”，n-），arguments.length <n？E.queue（this [0]，e）：void 0 === t？this：this.each（function（）{var n = E.queue （this，e，t）; E._queueHooks（this，e），“ fx” ==== e &&“ inprogress”！== n [0] && E.dequeue（this，e）}）}，dequeue：function（ e）{返回this.each（function（）{E.dequeue（this，e）}）}，clearQueue：function（e）{return this.queue（e ||“ fx”，[]）}，承诺： function（e，t）{function n（）{-i || o.resolveWith（a，[a]）} var r，i = 1，o = E.Deferred（），a = this，s = this .length; for（“ string”！= e &&（t = e，e = void 0），e = e ||“ fx”; s-;）（r = Z.get（a [s]，e + “ queueHooks”））&& r.empty＆＆（i ++，r.empty.add（n））;返回n（），o.promise（t）}}）; var ie = / [+-]？（？：\ d * \。|）\ d + （？：[eE] [+-]？\ d + |）/。source，oe = new RegExp（“ ^（？：（[+-]）= |）（” + ie +“）（[az％] * ）$“，” i“），ae = [” Top“，” Right“，” Bottom“，” Left“]，se = s.documentElement，ue = function（e）{返回E.contains（e.ownerDocument ，e）}，le = {composed：！0};函数ce（e，t，n，r）{var i，o，a = {}; for（o in t）a [o] = e.style [o]，e.style [o] = t [o]; for（o in i = n.apply（e，r || []），t）e.style [o] = a [o]; return i} se.getRootNode &&（ue = function（e）{返回E.contains（e.ownerDocument，e）|| e.getRootNode（le）=== e.ownerDocument}）; var fe = function（e，t） {返回“ none” ===（e = t || e）.style.display ||“” === e.style.display && ue（e）&&“ none” === E.css（e，“ display “）};函数pe（e，t，n，r）{var i，o，a = 20，s = r？function（）{返回r.cur（）}：function（）{返回E.css（e，t，“”）}，u = s（），l = n && n [3] ||（（E.cssNumber [t]？“”：“ px”），c = e.nodeType &&（（E.cssNumber [t] ||“ px”！== l && + u）&& oe.exec（E.css（e，t））; if（c && c [3]！== l）{for（ u / = 2，l = l || c [3]，c = + u || 1; a-;）E.style（e，t，c + 1），（1-o）*（1- （o = s（）/ u || .5））<= 0 &&（a = 0），c / = o; c * = 2，E.style（e，t，c + 1），n = n | | []}返回n &&（c = + c || + u || 0，i = n [1]？c +（n [1] +1）* n [2]：+ n [2]，r &&（r .unit = l，r.start = c，r.end = i）），i} var de = {};函数he（e，t）{for（var n，r，i，o，a，s， u，l = []，c = 0，f = e.length; c <f; c ++）（r = e [c]）。style &&（n = r.style.display，t？（“ none” == = n &&（l [c] = Z.get（r，“ display”）|| null，l [c] ||（r.style.display =“”）））“”“ === r.style.display && fe （r）&&（l [c] =（u = a = o = void 0，a =（i = r）.ownerDocument，s = i.nodeName，（u = de [s]）||（o = a .body.appendChild（a。createElement（s）），u = E.css（o，“ display”），o.parentNode.removeChild（o），“ none” === u &&（u =“ block”），de [s] = u） ）））：“ none”！== n &&（l [c] =“ none”，Z.set（r，“ display”，n））））; for（c = 0; c <f; c ++）null！ = l [c] &&（e [c] .style.display = l [c]）;返回e} E.fn.extend（{show：function（）{return he（this，！0）}}，隐藏： function（）{return he（this）}，toggle：function（e）{return“ boolean” == e类型？this.show（）：this.hide（）：this.each（function（）{fe （this）？E（this）.show（）：E（this）.hide（）}）}））; var ge = / ^（?: checkbox | radio）$ / i，ve = / <（[az ] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *）/ i，ye = / ^ $ | ^ module $ | \ /（?: java | ecma）script / i，me = {选项：[1，“ <select multiple ='multiple'>”，“ </ select>”]，thead：[1，“ <table>”，“ </ table>”]，col：[2，“ < table> <colgroup>“，”</ colgroup> </ table>“]，tr：[2，” <table> <tbody>“，” </ tbody> </ table>“]，td：[3，” <table> <tbody> < tr>“，” </ tr> </ tbody> </ table>“]，_ default：[0，”“，”“]};函数xe（e，t）{var n; return n = void 0！ == e.getElementsByTagName？e.getElementsByTagName（t ||“ *”）：无效0！== e.querySelectorAll？e.querySelectorAll（t ||“ *”）：[]，无效0 === t || t && L（e，t）？E.merge（[e]，n）：n}函数be（e，t）{for（var n = 0，r = e.length; n <r; n ++）Z.set （e [n]，“ globalEval”，！t || Z.get（t [n]，“ globalEval”））} me.optgroup = me.option，me.tbody = me.tfoot = me.colgroup = me .caption = me.thead，me.th = me.td; var we，Te，Ce = / <|＆＃？\ w +; /;函数Ee（e，t，n，r，i）{for（var o，a，s，u，l，c，f = t.createDocumentFragment（），p = []，d = 0，h = e.length; d <h;d ++）if（（o = e [d]）|| 0 === o）if（“ object” === T（o））E.merge（p，o.nodeType？[o]：o）;否则if（Ce.test（o））{for（a = a || f.appendChild（t.createElement（“ div”）），s =（ve.exec（o）|| [“”，“”] ）[1] .toLowerCase（），u = me [s] || me.default，a.innerHTML = u [1] + E.htmlPrefilter（o）+ u [2]，c = u [0]; c -;）a = a.lastChild; E.merge（p，a.childNodes），（a = f.firstChild）.textContent =“”} else p.push（t.createTextNode（o））; for（f .textContent =“”，d = 0; o = p [d ++];）if（r &&-1 <E.inArray（o，r））i && i.push（o）;否则if（l = ue（o）， a = xe（f.appendChild（o），“ script”），l && be（a），n）for（c = 0; o = a [c ++];）ye.test（o.type ||“”）&& n .push（o）;返回f}我们= s.createDocumentFragment（）。appendChild（s.createElement（“ div”）），（Te = s.createElement（“ input”））。setAttribute（“ type”，“ radio “），Te.setAttribute（” checked“，“ checked”），Te.setAttribute（“ name”，“ t”），we.appendChild（Te），m.checkClone = we.cloneNode（！0）.cloneNode（！0）.lastChild.checked，we.innerHTML =“ <textarea> x </ textarea>”，m.noCloneChecked = !! we.cloneNode（！0）.lastChild.defaultValue; var ke = / ^ key /，Se = / ^（?: mouse | pointer | contextmenu | drag | drop）| click /，Ne = / ^（[^。] *）（？：\。（。+）|）/;函数Ae（）{return！0}函数De（）{return！1 }函数je（e，t）{返回e ==== function（）{尝试{返回s.activeElement}捕获（e）{}}（）==（“” focus“ === t）}函数Le（e ，t，n，r，i，o）{var a，s; if（“ object” == typeof t）{for（s in“ string”！= typeof n &&（r = r || n，n = void 0），t）Le（e，s，n，r，t [s]，o）；返回e} if（null == r && null == i？（i = n，r = n = void 0）：null == i &&（“ string” == typeof n？（i = r，r = void 0）:( i = r，r = n，n = void 0））,! 1 === i）i = De;否则if（！i）返回e;返回1 === o &&（a = i，（i = function（e）{返回E（）。off（e），a.apply（this，arguments）}）。guid = a.guid ||（a.guid = E.guid ++）），e.each （function（）{E.event.add（this，t，i，r，n）}）}函数qe（e，t，n）{n？（Z.set（e，t，！1），E .event.add（e，t，{namespace：！1，handler：function（e）{var r，i，o = Z.get（this，t）; if（1＆e.isTrigger && this [t]）{if（ o.length）（E.event.special [t] || {}）。delegateType && e.stopPropagation（）;否则if（o = l.call（arguments），Z.set（this，t，o），r = n（this，t），this [t]（），o！==（i = Z.get（this，t））|| r？Z.set（this，t，！1）：i = {} ，o！== i）返回e.stopImmediatePropagation（），e.​​preventDefault（），i.value}否则o.length &&（Z.set（this，t，{value：E.event.trigger（E.extend（ o [0]，E.Event.prototype），o.slice（1），this）}），e.stopImmediatePropagation（）}}））））：无效0 === Z.get（e，t）&& E。 event.add（e，t，Ae）} E.event = {global：{}，add：function（e，t，n，r，i）{var o，a，s，u，l，c，f ，p，d，h，g，v = Z.get（e）; if（v）for（n.handler &&（n =（o = n）。handler，i = o.selector），i && E.find.matchesSelector（se，i），n.guid ||（n.guid = E.guid ++），（u = v.events）||（u = v.events = {}），（a = v.handle）||（a = v.handle = function（t）{返回void 0！== E && E.event.triggered！== t.type？E.event.dispatch。 apply（e，arguments）：void 0}），l =（t =（t ||“”）。match（W）||| [“”]）。length; l-;）d = g =（s = Ne.exec（t [l]）|| []）[1]，h =（s [2] ||“”）。split（“。”）。sort（），d &&（f = E.event .special [d] || {}，d =（i？f.delegateType：f.bindType）|| d，f = E.event.special [d] || {}，c = E.extend（{type ：d，origType：g，data：r，handler：n，guid：n.guid，selector：i，needsContext：i && E.expr.match.needsContext.test（i），命名空间：h.join（“。”） }，o），（p = u [d]）||（（p = u [d] = []）。delegateCount = 0，f.setup &&！1！== f.setup.call（e，r， h，a）|| e.addEventListener && e.addEventListener（d，a）），f.add &&（f.add.call（e，c），c.handler.guid ||（c.handler.guid = n。guid）），i？p.splice（p.delegateCount ++，0，c）：p.push（c），E.event.global [d] =！0）}，remove：function（e，t，n， r，i）{var o，a，s，u，l，c，f，p，d，h，g，v = Z.hasData（e）&& Z.get（e）; if（v &&（u = v .events））{for（l =（t =（t ||“”）。match（W）|| [[“]]）。length; l-;）if（d = g =（s = Ne。 exec（t [l]）||| []）[1]，h =（s [2] ||“”）。split（“。”）。sort（），d）{for（f = E.event .special [d] || {}，p = u [d =（r？f.delegateType：f.bindType）|| d] ||| []，s = s [2] && new RegExp（（（^ | \ \。）“ + h.join（” \\。（？：。* \\。|）“）+”（\\。| $）“），a = o = p.length; o--;） c = p [o] ,! i && g！== c.origType || n && n.guid！== c.guid || s &&！s.test（c.namespace）|| r && r！== c.selector &&（“ * *“！== r ||！c.selector）||（p.splice（o，1），c.selector && p.delegateCount-，f.remove && f.remove.call（e，c））; a &&！p .length &&（f.teardown &&！1！== f.teardown。call（e，h，v.handle）|| E.removeEvent（e，d，v.handle），删除u [d]）}否则（u中的d）E.event.remove（e，d + t [l]，n，r，！0）; E.isEmptyObject（u）&& Z.remove（e，“ handle events”）}}，dispatch：function（e）{var t，n，r，i，o， a，s = E.event.fix（e），u = new Array（arguments.length），l =（Z.get（this，“ events”）|| {}）[s.type] || [] ，c = E.event.special [s.type] || {}; for（u [0] = s，t = 1; t <arguments.length; t ++）u [t] = arguments [t]; if （s.delegateTarget = this，！c.preDispatch ||！1！== c.preDispatch.call（this，s））{for（a = E.event.handlers.call（this，s，l），t = 0;（i = a [t ++]）&&！s.isPropagationStopped（）;）对于（s.currentTarget = i.elem，n = 0;（o = i.handlers [n ++]）&&！s.isImmediatePropagationStopped（）;） ）;）s.rnamespace &&！1！== o.namespace &&！s.rnamespace.test（o.namespace）||（s.handleObj = o，s.data = o.data，void 0！==（r = （（（E.event.special [o.origType] ||| {}）。handle || o.handler）.apply（i.elem，u））＆＆！1 ===（s.result = r）&&（s.preventDefault（），s.stopPropagation（））））；返回c.postDispatch && c.postDispatch.call（this，s），s.result}}，处理程序：function（e，t）{var n，r，i，o，a，s = []，u = t.delegateCount，l = e.target; if（u && l.nodeType &&！（“ click” === e .type && 1 <= e.button））for（; l！== this; l = l.parentNode || this）if（1 === l.nodeType &&（“ click”！== e.type ||！0 ！== l.disabled））{for（o = []，a = {}，n = 0; n <u; n ++）void 0 === a [i =（r = t [n]）。selector + “”] &&（a [i] = r.needsContext？-1 <E（i，this）.index（l）：E.find（i，this，null，[l]）。length），a [i ] && o.push（r）; o.length && s.push（{elem：l，handlers：o}）}返回l = this，u <t.length && s.push（{elem：l，handlers：t.slice（u ）}），s}，addProp：function（e，t）{Object.defineProperty（E.Event.prototype，e，{enumerable：！0，configurable：！0，get：x（t）？function（）{如果这。originalEvent）返回t（this.originalEvent）}：function（）{if（this.originalEvent）返回this.originalEvent [e]}，set：function（t）{Object.defineProperty（this，e，{enumerable：！0 ，可配置：！0，可写：！0，值：t}）}}）}}，修订：函数（e）{返回e [E.expando]？e：新E.Event（e）}，特殊：{加载：{noBubble：！0}，点击：{setup：function（e）{var t = this || e; return ge.test（t.type）&& t.click && L（t，“ input”）&& qe（t， “ click”，Ae）,! 1}，trigger：function（e）{var t = this || e; return ge.test（t.type）&& t.click && L（t，“ input”）&& qe（t，“ click“）,! 0}，_ default：function（e）{var t = e.target; return ge.test（t.type）&& t.click && L（t，” input“）&& Z.get（t，” click“ ）|| L（t，“ a”）}}，在卸载之前：{postDispatch：function（e）{无效0！== e.result && e.originalEvent &&（e.originalEvent。returnValue = e.result）}}}}，E.removeEvent = function（e，t，n）{e.removeEventListener && e.removeEventListener（t，n）}，E.Event = function（e，t）{if（！ （此E.Event实例））返回新的E.Event（e，t）; e && e.type？（this.originalEvent = e，this.type = e.type，this.isDefaultPrevented = e.defaultPrevented || void 0 = == e.defaultPrevented &&！1 === e.returnValue？Ae：De，this.target = e.target && 3 === e.target.nodeType？e.target.parentNode：e.target，this.currentTarget = e。 currentTarget，this.relatedTarget = e.relatedTarget）：this.type = e，t && E.extend（this，t），this.timeStamp = e && e.timeStamp || Date.now（），this [E.expando] =！0 }，E.Event.prototype = {constructor：E.Event，isDefaultPrevented：De，isPropagationStopped：De，isImmediatePropagationStopped：De，isSimulated：!! 1，preventDefault：function（）{var e = this.originalEvent; this.isDefaultPrevented = Ae ，e &&！this.isSimulated＆＆e.preventDefault（）}，stopPropagation：function（）{var e = this.originalEvent; this.isPropagationStopped = Ae，e &&！this.isSimulated && e.stopPropagation（）}，stopImmediatePropagation：function（）{var e = this.originalEvent; this.isImmediatePropagationStopped = Ae，e &&！this.isSimulated && e.stopImmediatePropagation（），this.stopPropagation（）}}，E.each（{altKey：！0，bubbles：！0，cancelable：！0，changedTouches：！0，ctrlKey ：！0，详细信息：！0，eventPhase：！0，metaKey：！0，pageX：！0，pageY：！0，shiftKey：！0，view：！0，char：！0，code：！0，charCode ：！0，key：！0，keyCode：！0，button：！0，buttons：！0，clientX：！0，clientY：！0，offsetX：！0，offsetY：！0，pointerId：！0，pointerType ：！0，screenX：！0，screenY：！0，targetTouches：！0，toElement：！0，touches：！0，which：function（e）{var t = e.button; return null == e.which && ke .test（e.type）？null！= e.charCode？e.charCode：e.keyCode：！e.which && void 0！== t &&Se.test（e.type）？1＆t？1：2＆t？3：4＆t？2：0：e.which}}，E.event.addProp），E.each（{focus：“ focusin”，blur：“ focusout“}，function（e，t）{E.event.special [e] = {setup：function（）{return qe（this，e，je）,! 1}，trigger：function（）{return qe（ this，e）!! 0}，delegateType：t}}）），E.each（{mouseenter：“ mouseover”，mouseleave：“ mouseout”，pointerenter：“ pointerover”，pointerleave：“ pointerout”}，function（e， t）{E.event.special [e] = {delegateType：t，bindType：t，handle：function（e）{var n，r = e.relatedTarget，i = e.handleObj; return r &&（r === this || E.contains（this，r））||（e.type = i.origType，n = i.handler.apply（this，arguments），e.type = t），n}}}）），E .fn.extend（{on：function（e，t，n，r）{return Le（this，e，t，n，r）}}，one：function（e，t，n，r）{return Le（ this，e，t，n，r，1）}，off：function（e，t，n）{var r，i; if（e && e.preventDefault && e.handleObj）返回r = e。handleObj，E（e.delegateTarget）.off（r.namespace？r.origType +“。” + r.namespace：r.origType，r.selector，r.handler），this; if（“ object”！= e的类型）返回！1！== t &&“ function”！=类型t ||（n = t，t = void 0）,! 1 === n &&（n = De），this.each（function（）{E。 event.remove（this，e，n，t）}）; for（i in e）this.off（i，t，e [i]）; return this}}）; var He = / <（?! area | br | col | embed | hr | img | input | link | meta | param）（（[[az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *）[^>] *） \ /> / gi，Oe = / <脚本| <样式| <link / i，Pe = / checked \ s *（？：[^ =] | = \ s * .checked。）/ i，Re = / ^ \ s * <！（？：\ [CDATA \ [|-）|（？：\] \] | ----）> \ s * $ / g;函数Me（e，t）{返回L（e， “ table”）&& L（11！== t.nodeType？t：t.firstChild，“ tr”）&& E（e）.children（“ tbody”）[0] || e}函数Ie（e）{返回e .type =（null！== e.getAttribute（“ type”））+“ /” + e.type，e} function We（e）{return“true /“ ===（e.type ||”“）。slice（0,5）？e.type = e.type.slice（5）：e.removeAttribute（” type“），e} function $ e （e，t）{var n，r，i，o，a，s，u，l; if（1 === t.nodeType）{if（Z.hasData（e）&&（o = Z.access（ e），a = Z.set（t，o），l = o.events））for（i in delete a.handle，a.events = {}，l）for（n = 0，r = l [i ] .length; n <r; n ++）E.event.add（t，i，l [i] [n]）; ee.hasData（e）&&（s = ee.access（e），u = E。扩展（{}，s），ee.set（t，u））}}函数Fe（e，t，n，r）{t = c.apply（[]，t）; var i，o，a， s，u，l，f = 0，p = e.length，d = p-1，h = t [0]，g = x（h）; if（g || 1 <p &&“ string” == typeof h &&！m.checkClone && Pe.test（h））返回e.each（function（i）{var o = e.eq（i）; g &&（t [0] = h.call（this，i，o.html（ ））），Fe（o，t，n，r）}））; if（p &&（o =（i = Ee（t，e [0] .ownerDocument，！1，e，r））。firstChild，1 = == i.childNodes.length &&（i = o），o || r））{for（s =（a = E.map（xe（i，“ script”），Ie））。length; f <p; f ++）u = i，f！== d &&（u = E.clone（u，！0，！0），s && E.merge（a，xe（u，“ script”））），n.call（e [f]，u，f）; if（s）for（l = a [a.length-1] .ownerDocument，E.map（a，We），f = 0; f <s; f ++）u = a [f]，ye.test（u .type ||“”）&&！Z.access（u，“ globalEval”）&& E.contains（l，u）&&（u.src &&“ module”！==（u.type ||“”）。toLowerCase（ ）？E._evalUrl &&！u.noModule && E._evalUrl（u.src，{nonce：u.nonce || u.getAttribute（“ nonce”）}}）：w（u.textContent.replace（Re，“”），u ，l））}返回e}函数Be（e，t，n）{for（var r，i = t？E.filter（t，e）：e，o = 0; null！=（r = i [ o]）; o ++）n || 1！== r.nodeType || E.cleanData（xe（r）），r.parentNode &&（（&& ue（r）&& be（xe（r，“ script”））），r。 parentNode.removeChild（r））;返回e} E.extend（{htmlPrefilter：function（e）{return e.replace（He，“ <$ 1> </ $ 2>”）}}，clone：function（e，t，n）{var r，i，o，a，s，u，l，c = e.cloneNode（！0），f = ue（e）; if（！（m.noCloneChecked || 1！== e。 nodeType && 11！== e.nodeType || E.isXMLDoc（e）））for（a = xe（c），r = 0，i =（o = xe（e））。length; r <i; r ++）s = o [r]，“输入” ===（l =（u = a [r]）。nodeName.toLowerCase（））&& ge.test（s.type）？u.checked = s.checked：“输入” ！== l &&“ textarea”！== l ||（u.defaultValue = s.defaultValue）; if（t）if（n）for（o = o || xe（e），a = a || xe（ c），r = 0，i = o.length; r <i; r ++）$ e（o [r]，a [r]）;否则$ e（e，c）;返回0 <（a = xe（ c，“ script”））。length && be（a，！f && xe（e，“ script”）），c}，cleanData：function（e）{for（var t，n，r，i = E.event.special， o = 0;无效0！==（n = e [o]）; o ++）if（Q（n））{if（t = n [Z.expando]）{if（t.events）for（r in t.events）i [r]？E.event.remove（n，r）：E.removeEvent（n，r，t.handle）; n [Z.expando] = void 0} n [ee.expando] && （n [ee.expando] = void 0）}}}），E.fn.extend（{detach：function（e）{返回Be（this，e，！0）}，删除：function（e）{return Be（this，e）}，text：function（e）{return X（this，function（e）{返回void 0 === e？E.text（this）：this.empty（）。each（function（）{1！== this.nodeType && 11！== this.nodeType && 9！== this.nodeType ||（this .textContent = e）}）}，null，e，arguments.length）}，追加：function（）{返回Fe（this，arguments，function（e）{1！== this.nodeType && 11！== this.nodeType && 9 ！== this.nodeType || Me（this，e）.appendChild（e）}）}，前置：function（）{返回Fe（this，arguments，function（e）{if（1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType）{var t = Me（this，e）; t.insertBefore（e，t.firstChild）}}）}，before：function（） {返回Fe（this，arguments，function（e）{this.parentNode && this.parentNode.insertBefore（e，this）}）}，之后：function（）{返回Fe（this，arguments，function（e）{this.parentNode && this .parentNode.insertBefore（e，this.nextSibling）}）}，空：function（）{for（var e，t = 0; null！=（e = this [t]）; t ++）1 === e.nodeType &&（E.cleanData（xe （e，！1）），e.textContent =“”）;返回此}，clone：function（e，t）{返回e = null！= e && e，t = null == t？e：t，this。 map（function（）{return E.clone（this，e，t）}）}，html：function（e）{return X（this，function（e）{var t = this [0] || {}， n = 0，r = this.length; if（void 0 ==== e && 1 === t.nodeType）返回t.innerHTML; if（“ string” == e &&！Oe.test（e）&&！me [ （ve.exec（e）|| [“”，“”]）[1] .toLowerCase（）]）{e = E.htmlPrefilter（e）; try {for（; n <r; n ++）1 == =（t = this [n] || {}）。nodeType &&（E.cleanData（xe（t，！1）），t.innerHTML = e）; t = 0} catch（e）{}} t && this.empty （）.append（e）}，null，e，arguments.length）}，replaceWith：function（）{var e = []; return Fe（this，arguments，function（t）{var n = this.parentNode; E.inArray（this，e）<0 &&（E。cleanData（xe（this）），n && n.replaceChild（t，this））}，e）}}）），E.each（{appendTo：“ append”，prependTo：“ prepend”，insertBefore：“ before”，insertAfter： “ after”，replaceAll：“ replaceWith”}}，function（e，t）{E.fn [e] = function（e）{for（var n，r = []，i = E（e），o = i .length-1，a = 0; a <= o; a ++）n = a === o？this：this.lone（！0），E（i [a]）[t]（n），f。 apply（r，n.get（））;返回this.pushStack（r）}}）; var _e，ze，Ue，Xe，Ve，Ge，Ye，Je = new RegExp（“ ^（” + ie +“） （？！px）[az％] + $“，” i“），Qe = function（e）{var t = e.ownerDocument.defaultView; return t && t.opener ||（t = n），t.getComputedStyle（ e）}，Ke = new RegExp（ae.join（“ |”），“ i”）;函数Ze（）{if（Ye）{Ge.style.cssText =“ position：absolute; left：-11111px; width ：60px; margin-top：1px; padding：0; border：0“，Ye.style.cssText =” position：relative; display：block; box-size：border-box; overflow：scroll; margin：auto; border：1px; padding：1px; width：60％; top：1％“，se.appendChild（Ge）.appendChild（Ye）; var e = n.getComputedStyle（是）; _ e =“ 1％”！== e.top，Ve = 12 === et（e.marginLeft），Ye.style.right =“ 60％”，Xe = 36 === et（e。 right），ze = 36 === et（e.width），Ye.style.position =“ absolute”，Ue = 12 === et（Ye.offsetWidth / 3），se.removeChild（Ge），Ye = null}}函数et（e）{返回Math.round（parseFloat（e））}函数tt（e，t，n）{var r，i，o，a，s = e.style; return（n = n || Qe（e））&&（“”！==（a = n.getPropertyValue（t）|| n [t]）|| ue（e）||（a = E.style（e，t）） ，！m.pixelBoxStyles（）&& Je.test（a）&& Ke.test（t）&&（r = s.width，i = s.minWidth，o = s.maxWidth，s.minWidth = s.maxWidth = s.width = a，a = n.width，s.width = r，s.minWidth = i，s.maxWidth = o）），无效0！== a？a +“”：a}函数nt（e，t）{ return {get：function（）{if（！e（））return（this.get = t）.apply（this，arguments）;删除this.get}}} Ge = s.createElement（“ div”），（Ye = s.createElement（“ div”））。style &&（Ye.style.backgroundClip =“ content-box”，Ye.cloneNode（！ 0）.style.backgroundClip =“”，m.clearCloneStyle =“ content-box” === Ye.style.backgroundClip，E.extend（m，{boxSizingReliable：function（）{return Ze（），ze}，pixelBoxStyles ：function（）{return Ze（），Xe}，pixelPosition：function（）{return Ze（），_ e}，reliableMarginLeft：function（）{return Ze（），Ve}，scrollboxSize：function（）{return Ze（ ），Ue}}）））; var rt = [“ Webkit”，“ Moz”，“ ms”]，it = s.createElement（“ div”）。style，ot = {};函数at（e）{return E.cssProps [e] || ot [e] ||（e？e：ot [e] = function（e）{for（var t = e [0] .toUpperCase（）+ e.slice（1 ），n = rt.length; n-;）if（（e = rt [n] + t）it）返回e}（e）|| e）} var st = / ^（none | table（？ ！-c [ea]）。+）/，ut = / ^-/，lt = {位置：“绝对”，可见性：“隐藏”，显示：“块”}，ct = {letterSpacing：“ 0”，fontWeight：“ 400”};函数ft（e，t，n）{var r = oe.exec（t）; return r？Math.max（0，r [2]-（n || 0））+（r [3] ||“ px”）：t}函数pt（e，t，n，r，i，o） {var a =“ width” === t？1：0，s = 0，u = 0; if（n ===（r？“ border”：“ content”））返回0; for（; a < 4; a + = 2）“ margin” === n &&（u + = E.css（e，n + ae [a] ,! 0，i）），r？（“ content” === n &&（u- = E.css（e，“ padding” + ae [a] ,! 0，i）），“ margin”！== n &&（u- = E.css（e，“ border” + ae [a] +“ Width “，！0，i））））:( u + = E.css（e，” padding“ + ae [a] ,! 0，i），” padding“！== n？u + = E.css（e， “ border” + ae [a] +“ Width”，！0，i）：s + = E.css（e，“ border” + ae [a] +“ Width”，！0，i））; return！r && 0 <= o &&（u + = Math.max（0，Math.ceil（e [“ offset”+ t [0] .toUpperCase（）+ t.slice（1）-ous-.5））|| 0），u}函数dt（e，t，n）{var r = Qe（e），i =（！m.boxSizingReliable（）|| n）&&“边框” === E.css（e，“ boxSizing”，！1，r），o = i，a = tt（e，t，r ），s =“ offset” + t [0] .toUpperCase（）+ t.slice（1）; if（Je.test（a））{if（！n）return a; a =“ auto”} return（ ！m.boxSizingReliable（）&& i ||“自动” === a || !! parseFloat（a）&&“内联” === E.css（e，“ display”，！1，r））&& e.getClientRects（ ）.length &&（i =“ border-box” === E.css（e，“ boxSizing”，！1，r），（e中的o = s）&&（a = e [s]）），（a = parseFloat（a）|| 0）+ pt（e，t，n ||（i？“ border”：“ content”），o，r，a）+“ px”}函数ht（e，t，n ，r，i）{返回新的ht.prototype.init（e，t，n，r，i）} E.extend（{cssHooks：{opacity：{get：function（e，t）{if（t）{ var n = tt（e，“ opacity”）;返回“” === n？“ 1”：n}}}}，cssNumber：{animationIterationCount：！0，columnCount：！0，fillOpacity：！0，flexGrow：！0，flexShrink：！0，fontWeight：！0，gridArea：！0，gridColumn：！0，gridColumnEnd ：！0，gridColumnStart：！0，gridRow：！0，gridRowEnd：！0，gridRowStart：！0，lineHeight：！0，opacity：！0，order：！0，orphans：！0，widows：！0，zIndex ：！0，zoom：！0}，cssProps：{}，style：function（e，t，n，r）{if（e && 3！== e.nodeType && 8！== e.nodeType && e.style）{var i， o，a，s = J（t），u = ut.test（t），l = e.style; if（u ||（t = at（s）），a = E.cssHooks [t] || E.cssHooks [s]，void 0 === n）在a && void 0中返回a &&“ get”！==（i = a.get（e，！1，r））？i：l [t];“ string “ ==（o = typeof n）&&（i = oe.exec（n））&& i [1] &&（n = pe（e，t，i），o =” number“），null！= n && n == n &&（“ number”！== o || u ||（n + = i && i [3] ||（E.cssNumber [s]？“”：“ px”）），m.clearCloneStyle ||“”！== n || 0！== t.indexOf（“ background”）||（l [t] =“ inherit”），a &&“ set” in a && void 0 ===（n = a.set（e，n，r））||（ u？l.setProperty（t，n）：l [t] = n））}}，css：function（e，t，n，r）{var i，o，a，s = J（t）; return ut.test（t）|||（t = at（s）），（a = E.cssHooks [t] || E.cssHooks [s]）&&“ get” in a &&（i = a.get（e， ！0，n）），无效0 === i &&（i = tt（e，t，r）），“正常” === i && t（以ct &&（i = ct [t]），“” === n || n？（o = parseFloat（i）,! 0 === n || isFinite（o）？o || 0：i）：i}}）），E.each（[“ height”，“ width” ]，function（e，t）{E.cssHooks [t] = {get：function（e，n，r）{if（n）return！st.test（E.css（e，“ display”））| | e.getClientRects（）。length && e.getBoundingClientRect（）。width？dt（e，t，r）：ce（e，lt，function（）{return dt（e，t，r）}）}}，set：function （e，n，r）{var i，o = Qe（e），a =！m.scrollboxSize（）&&“ absolute” === o.position，s =（a || r）＆＆“ border-box” === E.css（e，“ boxSizing”，！1，o），u = r？pt（e，t，r，s，o）：0;返回s && a &&（u- = Math.ceil（e [“ offset” + t [0] .toUpperCase（）+ t.slice（1）]-parseFloat（o [t]）-pt（e，t，“ border”，！1，o） -.5）），u &&（i = oe.exec（n））&&“ px”！==（i [3] ||“ px”）&&（e.style [t] = n，n = E。 css（e，t）），ft（0，n，u）}}}）），E.cssHooks.marginLeft = nt（m.reliableMarginLeft，function（e，t）{if（t）return（parseFloat（tt（ e，“ marginLeft”））|| e.getBoundingClientRect（）。left-ce（e，{marginLeft：0}，function（）{return e.getBoundingClientRect（）。left}））+“ px”}），E .each（{margin：“”，padding：“”，border：“ Width”}，function（e，t）{E.cssHooks [e + t] = {expand：function（n）{for（var r = 0，i = {}，o =“ string” == typeof n？n.split（“”）：[n]; r <4; r ++）i [e + ae [r] + t] = o [r ] || o [r-2] || o [0]；返回i}}，”margin“！== e &&（（E.cssHooks [e + t] .set = ft）}），E.fn.extend（{css：function（e，t）{return X（this，function（e，t， n）{var r，i，o = {}，a = 0; if（Array.isArray（t））{for（r = Qe（e），i = t.length; a <i; a ++）o [ t [a]] = E.css（e，t [a] ,! 1，r）; return o} return void 0！== n？E.style（e，t，n）：E.css（e ，t）}，e，t，1 <arguments.length）}}），（（（E.Tween = ht）.prototype = {constructor：ht，init：function（e，t，n，r，i，o ）{this.elem = e，this.prop = n，this.easing = i || E.easing._default，this.options = t，this.start = this.now = this.cur（），this.end = r，this.unit = o ||（E.cssNumber [n]？“”：“ px”）}，cur：function（）{var e = ht.propHooks [this.prop];返回e && e.get？ e.get（this）：ht.propHooks._default.get（this）}，运行：function（e）{var t，n = ht.propHooks [this.prop];返回this.options.duration？this.pos = t = E.easing [this.easing]（e，this.options.duration * e，0,1，this.options.duration）：this.pos = t = e，this.now =（this.end-这。开始）* t + this.start，this.options.step && this.options.step.call（this.elem，this.now，this），n && n.set？n.set（this）：ht.propHooks._default.set （this），this}}）。init.prototype = ht.prototype，（ht.propHooks = {_ default：{get：function（e）{var t; return 1！== e.elem.nodeType || null！ = e.elem [e.prop] && null == e.elem.style [e.prop]？e.elem [e.prop] :( t = E.css（e.elem，e.prop，“”） ）&&“ auto”！== t？t：0}，set：function（e）{E.fx.step [e.prop]？E.fx.step [e.prop]（e）：1！= = e.elem.nodeType ||！E.cssHooks [e.prop] && null == e.elem.style [at（e.prop）]？e.elem [e.prop] = e.now：E.style （e.elem，e.prop，e.now + e.unit）}}}）。scrollTop = ht.propHooks.scrollLeft = {set：function（e）{e.elem.nodeType && e.elem.parentNode &&（e。 elem [e.prop] = e.now）}}，E.easing = {linear：function（e）{return e}，swing：function（e）{return.5-Math.cos（e * Math.PI） ）/ 2}，_ default：“ swing”}，E。fx = ht.prototype.init，E.fx.step = {}; var gt，vt，yt，mt，xt = / ^（?: toggle | show | hide）$ /，bt = / queueHooks $ /;函数wt（）{vt &&（！1 === s.hidden && n.requestAnimationFrame？n.requestAnimationFrame（wt）：n.setTimeout（wt，E.fx.interval），E.fx.tick（））}函数Tt（） {返回n.setTimeout（function（）{gt = void 0}），gt = Date.now（）}函数Ct（e，t）{var n，r = 0，i = {height：e}; for（ t = t？1：0; r <4; r + = 2-t）i [“ margin” +（n = ae [r]）] = i [“ padding” + n] = e;返回t &&（i。 opacity = i.width = e），i}函数Et（e，t，n）{for（var r，i =（kt.tweeners [t] || []）。concat（kt.tweeners [“ *” ]），o = 0，a = i.length; o <a; o ++）if（r = i [o] .call（n，t，e））返回r}函数kt（e，t，n）{ var r，i，o = 0，a = kt.prefilters.length，s = E.Deferred（）。always（function（）{delete u.elem}），u = function（）{if（i）return！ 1;对于（var t = gt || Tt（），n = Math.max（0，l.startTime + l.duration-t），r = 1-（n / l.duration || 0），o = 0，a = l.tweens.length; o <a; o ++）l.tweens [o] .run（r）;返回s.notifyWith（e，[l，r，n]），r <1 && a？n：（a || s.notifyWith（e，[l ，1,0]），s.resolveWith（e，[l]）,! 1）}，l = s.promise（{elem：e，props：E.extend（{}，t），opts：E。扩展（！0，{specialEasing：{}，easing：E.easing._default}，n），originalProperties：t，originalOptions：n，startTime：gt || Tt（），duration：n.duration，tweens：[] ，createTween：function（t，n）{var r = E.Tween（e，l.opts，t，n，l.opts.specialEasing [t] || l.opts.easing）;返回l.tweens.push （r），r}，stop：function（t）{var n = 0，r = t？l.tweens.length：0; if（i）返回; for（i =！0; n <r; n ++ ）l.tweens [n] .run（1）;返回t？（s.notifyWith（e，[l，1,0]），s.resolveWith（e，[l，t]））：s.rejectWith（ e，[l，t]），this}}），c = l.props; for（function（e，t）{var n，r，i，o，a; for（e in n）if（i = t [r = J（n）]，o = e [n]，Array.isArray（o）&&（i = o [1]，o = e [n] = o [0]），n！== r && （e [r] = o，删除e [n]），（a = E.cssHooks [r]）&&“在a中的展开”，用于（o = a中的n。expand（o），删除e ||（e [n] = o [n]，t [n] = i）中的e [r]，o）n；否则t [r] = i}（c，l。 opts.specialEasing）; o <a; o ++）if（r = kt.prefilters [o] .call（l，e，c，l.opts））return x（r.stop）&&（E._queueHooks（l。 elem，l.opts.queue）.stop = r.stop.bind（r）），r;返回E.map（c，Et，l），x（l.opts.start）&& l.opts.start.call （e，l），l.progress（l.opts.progress）.done（l.opts.done，l.opts.complete）.fail（l.opts.fail）.always（l.opts.always）， E.fx.timer（E.extend（u，{elem：e，anim：l，queue：l.opts.queue}）），l} E.Animation = E.extend（kt，{tweeners：{“ * “：[[function（e，t）{var n = this.createTween（e，t）; return pe（n.elem，e，oe.exec（t），n），n}]}，tweener：function（ e，t）{for（var n，r = 0，i =（e = x（e）？（t = e，[“ *”]）：e.match（W））。length; r <i; r ++）n = e [r]，kt.tweeners [n] = kt.tweeners [n] || []，kt.tweeners [n] .unshift（t）}，预过滤器：[function（e，t，n ）{var r，i，o，a，s，u，l，c，f =“ t”中的width ||| t，p = this中的“ height”，d = {}，h = e.style，g = e.nodeType && fe（e），v = Z.get（e，“ fxshow”）; for（r in n.queue ||（null ==（a = E ._queueHooks（e，“ fx”））。unqueued &&（a.unqueued = 0，s = a.empty.fire，a.empty.fire = function（）{a.unqueued || s（）}），a。取消排队++，p.always（function（）{p.always（function（）{a.unqueued-，E.queue（e，“ fx”）。length || a.empty.fire（）}）}））） ，t）if（i = t [r]，xt.test（i））{if（删除t [r]，o = o ||“切换” === i，i ===（g？“隐藏“：” show“））{if（” show“！== i || !! v || void 0 === v [r]）continue; g =！0} d [r] = v && v [r] | | E.style（e，r）} if（（u =！E.isEmptyObject（t））||！E.isEmptyObject（d））for（f && 1 === e.nodeType &&（（n.overflow = [ h.overflow，h.overflowX，h.overflowY]，null ==（l = v && v.display）&&（l = Z.get（e，“ display”））），“ none” ===（c = E。 css（e，“ display”））&&（l？c = l：（he（[e] ,! 0），l = e.style.display || l，c = E.css（e，“ display”），he（[e]））），（“ inline” === c ||“ inline-block” === c && null！= l）&&“ none” = == E.css（e，“ float”）&&（u ||（p.done（function（）{h.display = l}）），null == l &&（c = h.display，l =“ none” === c？“”：c）），h.display =“ inline-block”）），n.overflow &&（h.overflow =“ hidden”，p.always（function（）{h.overflow = n。 overflow [0]，h.overflowX = n.overflow [1]，h.overflowY = n.overflow [2]}）），u =！1，d）u ||（v？&&（g中的“隐藏”？ = v.hidden）：v = Z.access（e，“ fxshow”，{display：l}），o &&（v.hidden =！g），g && he（[e] ,! 0），p.done（function （）{for（g || he（[e]）中的r，Z.remove（e，“ fxshow”），d）E.style（e，r，d [r]）}）），u = Et （v ||（v [r] = u.start，g &&（u.end = u.start，u.start = 0））}中的（g？v [r]：0，r，p），r prefilter：function（e，t）{t？kt.prefilters.unshift（e）：kt.prefilters。push（e）}}），E.speed = function（e，t，n）{var r = e &&“ object” == etype of e？E.extend（{}，e）：{complete：n ||！ n && t || x（e）&& e，持续时间：e，缓和：n && t || t &&！x（t）&& t};返回E.fx.off?r.duration=0："number“！= r.duration &&（ E.fx.speeds中的r.duration？r.duration = E.fx.speeds [r.duration]：r.duration = E.fx.speeds._default），null！= r.queue &&！0！== r .queue ||（r.queue =“ fx”），r.old = r.complete，r.complete = function（）{x（r.old）&& r.old.call（this），r.queue && E.dequeue （this，r.queue）}，r}，E.fn.extend（{fadeTo：function（e，t，n，r）{返回this.filter（fe）.css（“ opacity”，0）.show （）.end（）。animate（{opacity：t}，e，n，r）}，animate：function（e，t，n，r）{function i（）{var t = kt（this，E。 extend（{}，e），a）;（o || Z.get（this，“ finish”））&& t.stop（！0）} var o = E.isEmptyObject（e），a = E.speed（ t，n，r）;返回i。finish = i，o ||！1 === a.queue？this.each（i）：this.queue（a.queue，i）}，stop：function（e，t，n）{function r（e ）{var t = e.stop;删除e.stop，t（n）}返回“字符串”！= e &&（n = t，t = e，e = void 0），t &&！1！== e && this的类型。 queue（e ||“ fx”，[]），this.each（function（）{var t =！0，i = null！= e && e +“ queueHooks”，o = E.timers，a = Z.get（this ）; if（i）a [i] && a [i] .stop && r（a [i]）;否则（a）中的[i] a [i] && a [i] .stop && bt.test（i）&& r（a [i] ]）; for（i = o.length; i-;）o [i] .elem！== this || null！= e && o [i] .queue！== e ||（o [i] .anim .stop（n），t =！1，o.splice（i，1））;! t && n || E.dequeue（this，e）}）}，finish：function（e）{return！1！== e &&（e = e ||“ fx”），this.each（function（）{var t，n = Z.get（this），r = n [e +“ queue”]，i = n [e +“ queueHooks” ]，o = E.timers，a = r？r.length：0; for（n.finish =！0，E.queue（this，e，[]），i && i。stop && i.stop.call（this，！0），t = o.length; t-;）o [t] .elem === this && o [t] .queue === e &&（o [t] .anim。 stop（！0），o.splice（t，1））; for（t = 0; t <a; t ++）r [t] && r [t] .finish && r [t] .finish.call（this）;删除n.finish}）}}）），E.each（[[“ toggle”，“ show”，“ hide”]，function（e，t）{var n = E.fn [t]; E.fn [t] = function（e，r，i）{返回null == e ||“ boolean” ==类型为e？n.apply（this，arguments）：this.animate（Ct（t，！0），e，r， i）}}），E.each（{slideDown：Ct（“ show”），slideUp：Ct（“ hide”），slideToggle：Ct（“ toggle”），fadeIn：{opacity：“ show”}，fadeOut： {opacity：“ hide”}，fadeToggle：{opacity：“ toggle”}}，function（e，t）{E.fn [e] = function（e，n，r）{返回this.animate（t，e ，n，r）}}），E.timers = []，E.fx.tick = function（）{var e，t = 0，n = E.timers; for（gt = Date.now（）; t <n.length; t ++）（e = n [t]）（）|| n [t]！== e || n.splice（t--，1）; n.length || E.fx.stop（），gt = void 0}，E.fx.timer = function（e）{E.timers.push（e），E.fx.start（）} ，E.fx.interval = 13，E.fx.start = function（）{vt ||（vt =！0，wt（））}，E.fx.stop = function（）{vt = null}，E .fx.speeds = {slow：600，fast：200，_default：400}，E.fn.delay = function（e，t）{return e = E.fx && E.fx.speeds [e] || e，t = t ||“ fx”，this.queue（t，function（t，r）{var i = n.setTimeout（t，e）; r.stop = function（）{n.clearTimeout（i）}}） }，yt = s.createElement（“ input”），mt = s.createElement（“ select”）。appendChild（s.createElement（“ option”）），yt.type =“ checkbox”，m.checkOn =“” ！== yt.value，m.optSelected = mt.selected，（yt = s.createElement（“ input”））。value =“ t”，yt.type =“ radio”，m.radioValue =“ t” = == yt.value; var St，Nt = E.expr.attrHandle; E.fn.extend（{attr：function（e，t）{return X（this，E.attr，e，t，1 <arguments。长度）}，removeAttr：function（e）{返回this.each（function（）{E.removeAttr（this，e）}）}}），E.extend（{attr：function（e，t，n）{var r，i，o = e.nodeType; if（3！== onull！==（r = i.get（e，t））？r：null ==（（r = E.find.attr（e，t））？void 0：r）}，attrHooks：{type：{ set：function（e，t）{if（！m.radioValue &&“ radio” === t && L（e，“ input”））{var n = e.value;返回e.setAttribute（“ type”，t）， n &&（e.value = n），t}}}}，removeAttr：function（e，t）{var n，r = 0，i = t && t.match（W）; if（i && 1 === e.nodeType） for（; n = i [r ++];）e.removeAttribute（n）}}），St = {set：function（e，t，n）{return！1 === t？E.removeAttr（e，n ）：e.setAttribute（n，n），n}}，E.each（E.expr.match.bool.source.match（/ \ w + / g），function（e，t）{var n = Nt [ t] || E.find.attr; Nt [t] = function（e，t，r）{var i，o，a = t.toLowerCase（）; return r ||（o = Nt [a]，Nt [a] = i，i = null！= n（e，t，r）？a：null，Nt [a] = o），i}}））; var At = / ^（?: input | select | textarea | button）$ / i，Dt = / ^（?: a | area）$ / i; function jt（e）{return（e.match（W）|| [[]）。join（“”）} function Lt （e）{返回e.getAttribute && e.getAttribute（“class“）||”“} function qt（e）{返回Array.isArray（e）？e：” string“ == e && e.match（W）的类型|| []} E.fn.extend（{prop： function（e，t）{返回X（this，E.prop，e，t，1，<arguments.length）}，removeProp：function（e）{return this.each（function（）{delete this [E.propFix [e] ||| e]}）}}）），E.extend（{prop：function（e，t，n）{var r，i，o = e.nodeType; if（3！== o && 8！== o && 2！== o）返回1 === o && E.isXMLDoc（e）||（t = E.propFix [t] || t，i = E.propHooks [t]），避免0！== n？i && i && void中的“ set” 0！==（r = i.set（e，n，t））？r：e [t] = n：i &&“ get” in i && null！==（r = i.get（e ，t））？r：e [t]}，propHooks：{tabIndex：{get：function（e）{var t = E.find.attr（e，“ tabindex”）;返回t？parseInt（t，10 ）：At.test（e.nodeName）|| Dt.test（e.nodeName）&& e.href？0：-1}}}，propFix：{for：“ htmlFor”，class：“ className”}}））， m.optSelected ||（E。propHooks.selected = {get：function（e）{var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex，null}，set：function（e）{var t = e.parentNode; t &&（t.selectedIndex ，t.parentNode && t.parentNode.selectedIndex）}}）），E.each（[“ tabIndex”，“ readOnly”，“ maxLength”，“ cellSpacing”，“ cellPadding”，“ rowSpan”，“ colSpan”，“ useMap”， “ frameBorder”，“ contentEditable”]，function（）{E.propFix [this.toLowerCase（）] = this}），E.fn.extend（{addClass：function（e）{var t，n，r，i ，o，a，s，u = 0; if（x（e））返回this.each（function（t）{E（this）.addClass（e.call（this，t，Lt（this）））}} ）; if（（t = qt（e））。length）for（; n = this [u ++];）if（i = Lt（n），r = 1 === n.nodeType &&“” + jt（i ）+“”）{for（a = 0; o = t [a ++];）r.indexOf（“” + o +“”）<0 &&（r + = o +““）; i！==（s = jt（r））&& n.setAttribute（” class“，s）}返回此}，removeClass：function（e）{var t，n，r，i，o，a， s，u = 0; if（x（e））返回this.each（function（t）{E（this）.removeClass（e.call（this，t，Lt（this）））}））; if（！ arguments.length）返回this.attr（“ class”，“”）; if（（t = qt（e））。length）for（; n = this [u ++];）if（i = Lt（n）， r = 1 === n.nodeType &&“” + jt（i）+“”）{for（a = 0; o = t [a ++];）for（;-1 <r.indexOf（“” + o +“ “）;）r = r.replace（”“ + o +”“，”“）; i！==（s = jt（r））&& n.setAttribute（” class“，s）}返回此}，toggleClass： function（e，t）{var n = typeof e，r =“ string” == n || Array.isArray（e）;返回“ boolean” == typeof t && r？t？this.addClass（e）：this。 removeClass（e）：x（e）？this.each（function（n）{E（this）.toggleClass（e.call（this，n，Lt（this），t），t）}）：this。each（function（）{var t，i，o，a; if（r）for（i = 0，o = E（this），a = qt（e）; t = a [i ++];）o.hasClass （t）？o.removeClass（t）：o.addClass（t）;否则无效0！== e &&“ boolean”！= n ||（（t = Lt（this））&& Z.set（this，“ __ className__ “，t），this.setAttribute && this.setAttribute（” class“，t ||！1 === e？”“ :: Z.get（this，” __ className __“）||”“））}}}}，hasClass： function（e）{var t，n，r = 0; for（t =“” + e +“”; n = this [r ++];）if（1 === n.nodeType &&-1 <（“” + jt （Lt（n））+“”）.indexOf（t））return！0; return！1}}）; var Ht = / \ r / g;函数Ot（e）{e.stopPropagation（）} E。 fn.extend（{val：function（e）{var t，n，r，i = this [0];返回参数.length？（r = x（e），this.each（function（n）{var i ; 1 === this.nodeType &&（null ==（i = r？e.call（this，n，E（this）.val（））：e）？i =“”：“ number” == i的类型？i + =“”：数组。isArray（i）&&（i = E.map（i，function（e）{return null == e？“”：e +“”}））），（t = E.valHooks [this.type] || E。 valHooks [this.nodeName.toLowerCase（）]）&&“ set” in t && void 0！== t.set（this，i，“ value”）||（this.value = i））}）））：i？（ t = E.valHooks [i.type] || E.valHooks [i.nodeName.toLowerCase（）]）&&“ get” in t && void 0！==（n = t.get（i，“ value”）））？ n：“ string” == typeof（n = i.value）？n.replace（Ht，“”）：null == n？“”：n：void 0}}），E.extend（{valHooks：{选项：{get：function（e）{var t = E.find.attr（e，“ value”）;返回null！= t？t：jt（E.text（e））}}，选择：{get ：function（e）{var t，n，r，i = e.options，o = e.selectedIndex，a =“ select-one” === e.type，s = a？null：[]，u = a？o + 1：i.length; for（r = o <0？u：a？o：0; r <u; r ++）if（（（（n = i [r]）。selected || r == = o）&& !! n.disabled &&（！n.parentNode.disabled ||！L（n.parentNode，“ optgroup”）））{if（t = E（n）.val（），a）return t; s.push（t）} return s}，set：function（e，t） {for（var n，r，i = e.options，o = E.makeArray（t），a = i.length; a-;）（（r = i [a]）。selected = -1 <E .inArray（E.valHooks.option.get（r），o））&&（n =！0）;返回n ||（e.selectedIndex = -1），o}}}}）），E.each（[ “ radio”，“ checkbox”]，function（）{E.valHooks [this] = {set：function（e，t）{if（Array.isArray（t））return e.checked = -1 <E.inArray （E（e）.val（），t）}}，m.checkOn ||（E.valHooks [this] .get = function（e）{return null === e.getAttribute（“ value”）？“ on“：e.value}）}），m.focusin =” onfocusin“ in n; var Pt = / ^（?: focusinfocus | focusoutblur）$ /; E.extend（E.event，{trigger：function（e ，t，r，i）{var a，u，l，c，f，p，d，h，v = [r || s]，y = g.call（e，“ type”）？e.type ：e，m = g.call（e，“ namespace”）？e.namespace.split（“。”）：[]; if（u = h = l = r = r || s，3！== r .nodeType＆＆8！== r.nodeType &&！Pt.test（y + E.event.triggered）&&（-1 <y.indexOf（“。”）&&（y =（m = y.split（“。”）））。 shift（），m.sort（）），f = y.indexOf（“：”）<0 &&“ on” + y，（e = e [E.expando]？e：new E.Event（y，“ object “ == typeof e && e））。isTrigger = i？2：3，e.namespace = m.join（”。“），e.rnamespace = e.namespace？new RegExp（”（^ | \\。）“ + m.join（“ \\。（？：。* \\。|）”）+“（\\。| $）”）：null，e.result = void 0，e.target ||（e.target = r），t = null == t？[e]：E.makeArray（t，[e]），d = E.event.special [y] || {}，i ||！d.trigger || ！1！== d.trigger.apply（r，t）））{if（！i &&！d.noBubble &&！o（r））{for（c = d.delegateType || y，Pt.test（c + y）|||（u = u.parentNode）; u; u = u.parentNode）v.push（u），l = u; l ===（r.ownerDocument || s）&& v.push（l.defaultView || l.parentWindow || n）}用于（a = 0;（u = v [a ++]）&&！e.isPropagationStopped（）;）h = u，e。type = 1 <a？c：d.bindType || y，（p =（Z.get（u，“ events”）|| {}）[e.type] && Z.get（u，“ handle”）） && p.apply（u，t），（p = f && u [f]）&& p.apply && Q（u）&&（e.result = p.apply（u，t）,! 1 === e.result && e.preventDefault（） ）;返回e.type = y，i || e.isDefaultPrevented（）|| d._default &&！1！== d._default.apply（v.pop（），t）||！Q（r）|| f && x（r [y]）&&！o（r）&&（（l = r [f]）&&（r [f] = null），E.event.triggered = y，e.isPropagationStopped（）&& h.addEventListener（ y，Ot），r [y]（），e.​​isPropagationStopped（）&& h.removeEventListener（y，Ot），E.event.triggered = void 0，l &&（r [f] = l）），e.result} }，simulate：function（e，t，n）{var r = E.extend（new E.Event，n，{type：e，isSimulated：！0}）; E.event.trigger（r，null，t ）}}），E.fn.extend（{trigger：function（e，t）{返回this.each（function（）{E.event.trigger（e，t，this）}）}}，triggerHandler：function（e，t）{var n = this [0]; if（n）返回E.event.trigger（e，t，n，！0）}}），m.focusin || E.each（{focus ：“ focusin”，模糊：“ focusout”}，函数（e，t）{函数n（e）{E.event.simulate（t，e.target，E.event.fix（e））} E.event .special [t] = {setup：function（）{var r = this.ownerDocument || this，i = Z.access（r，t）; i || r.addEventListener（e，n，！0），Z .access（r，t，（i || 0）+1）}，teardown：function（）{var r = this.ownerDocument || this，i = Z.access（r，t）-1; i？Z .access（r，t，i）:( r.removeEventListener（e，n，！0），Z.remove（r，t））}}}））; var Rt = n.location，Mt = Date.now（ ），It = / \？/; E.parseXML = function（e）{var t; if（！e ||“ string”！= typeof e）返回null; try {t =（new n.DOMParser）.parseFromString （e，“ text / xml”）} catch（e）{t = void 0}返回t &&！t.getElementsByTagName（“ parsererror”）。length || E.error（“无效的XML：” + e），t} ; var Wt = / \ [\] $ /，$ t = / \ r？\ n / g，Ft = / ^（?:提交|按钮|图像|重置|文件）$ / i，Bt = / ^（?: input | select | textarea | keygen）/ i;函数_t（e，t，n，r）{var i; if（Array .isArray（t））E.each（t，function（t，i）{n || Wt.test（e）？r（e，i）：_ t（e +“ [” +（“ object” == typeof i && null！= i？t：“”）+“]”，i，n，r）}））;否则if（n ||“ object”！== T（t））r（e，t）; else for （i in t）_t（e +“ [” + i +“]”，t [i]，n，r）} E.param = function（e，t）{function n（e，t）{var n = x （t）？t（）：t; i [i.length] = encodeURIComponent（e）+“ =” + encodeURIComponent（null == n？“”：n）} var r，i = []; if（null == e）返回“”; if（Array.isArray（e）|| e.jquery &&！E.isPlainObject（e））E.each（e，function（）{n（this.name，this.value）} ）;否则for（r in e）_t（r，e [r]，t，n）;返回i.join（“＆”）}，E.fn.extend（{serialize：function（）{return E. param（this.serializeArray（））}，serializeArray：function（）{返回此值。map（function（）{var e = E.prop（this，“ elements”）;返回e？E.makeArray（e）：this}）。filter（function（）{var e = this.type;返回this。 name &&！E（this）.is（“：disabled”）&& Bt.test（this.nodeName）&&！Ft.test（e）&&（this.checked ||！ge.test（e））}）。map（ function（e，t）{var n = E（this）.val（）; return null == n？null：Array.isArray（n）？E.map（n，function（e）{return {name：t .name，value：e.replace（$ t，“ \ r \ n”）}}）：{name：t.name，value：n.replace（$ t，“ \ r \ n”）}}）。 get（）}}）; var zt = /％20 / g，Ut = /＃。* $ /，Xt = /（[？＆]）_ = [^＆] * /，Vt = / ^（。* ？）：[\ t] *（[^ \ r \ n] *）$ / gm，Gt = / ^（?: GET | HEAD）$ /，Yt = / ^ \ / \ //，Jt = {} ，Qt = {}，Kt =“ * /”。concat（“ *”），Zt = s.createElement（“ a”）; function en（e）{返回function（t，n）{“ string”！= typeof t &&（n = t，t =“ *”）; var r，i = 0，o = t.toLowerCase（）。match（W）|| []; if（x（n））for（; r = o [i ++];）“+“ === r [0]？（r = r.slice（1）||” *“，（e [r] = e [r] || []）。unshift（n））:( e [ r] = e [r] ||| []）。push（n）}}函数tn（e，t，n，r）{var i = {}，o = e === Qt;函数a（s） {var u; return i [s] =！0，E.each（e [s] ||| []，function（e，s）{var l = s（t，n，r）;返回“字符串”！ = typeof l || o || i [l]？o？！（u = l）：void 0：（t.dataTypes.unshift（l），a（l）,! 1）}），u}返回a （t.dataTypes [0]）||！i [“ *”] && a（“ *”）}函数nn（e，t）{var n，r，i = E.ajaxSettings.flatOptions || {};用于（t中的n）无效0！== t [n] &&（（i [n]？e：r ||（r = {}））[n] = t [n]）;返回r && E.extend（！ 0，e，r），e} Zt.href = Rt.href，E.extend（{active：0，lastModified：{}，etag：{}，ajaxSettings：{url：Rt.href，type：“ GET” ，isLocal：/ ^（?: about | app | app-storage |。+-extension | file | res | widget）：$ /。test（Rt.protocol），global：！0，processData：！0，async： ！0，contentType：“应用程序/ x-www-form-urlencoded; charset = UTF-8”，接受：{“*“：Kt，text：” text / plain“，html：” text / html“，xml：” application / xml，text / xml“，json：” application / json，text / javascript“}，内容：{xml ：/ \ bxml \ b /，html：/ \ bhtml /，json：/ \ bjson \ b /}，responseFields：{xml：“ responseXML”，text：“ responseText”，json：“ responseJSON”}，转换器：{ “ * text”：String，“ text html”：！0，“ text json”：JSON.parse，“ text xml”：E.parseXML}，flatOptions：{url：！0，context：！0}}，ajaxSetup ：function（e，t）{返回t？nn（nn（nn（e，E.ajaxSettings），t）：nn（E.ajaxSettings，e）}}，ajaxPrefilter：en（Jt），ajaxTransport：en（Qt），ajax ：function（e，t）{“ object” == e &&（t = e，e = void 0），t = t || {}的类型； var r，i，o，a，u，l，c，f ，p，d，h = E.ajaxSetup（{}，t），g = h.context || h，v = h.context &&（g.nodeType || g.jquery）？E（g）：E.event ，y = E.Deferred（），m = E.Callbacks（“一次存储”），x = h。statusCode || {}，b = {}，w = {}，T =“ canceled”，C = {readyState：0，getResponseHeader：function（e）{var t; if（c）{if（！a）for （a = {}; t = Vt.exec（o）;）a [t [1] .toLowerCase（）+“”] =（a [t [1] .toLowerCase（）+“”] || [] ）.concat（t [2]）; t = a [e.toLowerCase（）+“”]}返回null == t？null：t.join（“，”）}，getAllResponseHeaders：function（）{返回c ？o：null}，setRequestHeader：function（e，t）{返回null == c &&（e = w [e.toLowerCase（）] = w [e.toLowerCase（）] || e，b [e] = t ），this}，重写MimeType：function（e）{返回null == c &&（h.mimeType = e），this}，statusCode：function（e）{var t; if（e）if（c）C.always（ e [C.status]）;否则（e中的t）x [t] = [x [t]，e [t]];返回此}，abort：function（e）{var t = e || T ; return r && r.abort（t），k（0，t），this}}; if（y.promise（C），h.url =（（（e || h.url || Rt.href）+“” ）.replace（Yt，Rt.protocol +“ //”），h.type = t.method || t.type || h.method || h.type，h.dataTypes =（h.dataType ||“ *”）。toLowerCase（）。match（W）|| [[“]，null == h.crossDomain）{l = s.createElement（” a“）; try {l.href = h.url，l.href = l.href，h.crossDomain = Zt.protocol +“ //” + Zt.host！= l.protocol +“ //” + l.host} catch（e） {h.crossDomain =！0}} if（h.data && h.processData &&“ string”！= h.data &&（h.data = E.param（h.data，h.traditional））的类型，tn（Jt，h， t，C），c）返回C; for（p in（f = E.event && h.global）&& 0 == E.active ++ && E.event.trigger（“ ajaxStart”），h.type = h.type。 toUpperCase（），h.hasContent =！Gt.test（h.type），i = h.url.replace（Ut，“”），h.hasContent？h.data && h.processData && 0 ===（h.contentType || “”）.indexOf（“ application / x-www-form-urlencoded”）&&（h.data = h.data.replace（zt，“ +”））:( d = h.url.slice（i.length ），h.data &&（h。processData ||“字符串” == h.data的类型）&&（i + =（It.test（i）？“＆”：“？”）+ h.data，删除h.data）,! 1 === h .cache &&（i = i.replace（Xt，“ $ 1”），d =（It.test（i）？“＆”：“？”）+“ _ =” + Mt +++ d），h.url = i + d），h.ifModified &&（E.lastModified [i] && C.setRequestHeader（“ If-Modified-Since”，E.lastModified [i]），E.etag [i] && C.setRequestHeader（“ If-None -Match“，E.etag [i]）），（h.data && h.hasContent &&！1！== h.contentType || t.contentType）&& C.setRequestHeader（” Content-Type“，h.contentType），C。 setRequestHeader（“ Accept”，h.dataTypes [0] && h.accepts [h.dataTypes [0]]？h.accepts [h.dataTypes [0]] +（“ *”！== h.dataTypes [0]？ “，” + Kt +“; q = 0.01”：“”）：h.accepts [“ *”]），h.headers）C.setRequestHeader（p，h。headers [p]）; if（h.beforeSend &&（！1 === h.beforeSend.call（g，C，h）|| c））返回C.abort（）; if（T =“ abort”，m .add（h.complete），C.done（h.success），C.fail（h.error），r = tn（Qt，h，t，C））{if（C.readyState = 1，f && v。 trigger（“ ajaxSend”，[C，h]），c）返回C; h.async && 0 <h.timeout &&（u = n.setTimeout（function（）{C.abort（“ timeout”）}}，h.timeout） ）; try {c =！1，r.send（b，k）} catch（e）{if（c）throw e; k（-1，e）}} else k（-1，“ No Transport”） ;函数k（e，t，a，s）{var l，p，d，b，w，T = t; c ||（c =！0，u && n.clearTimeout（u），r = void 0，o = s ||“”，C.readyState = 0 <e？4：0，l = 200 <= e && e <300 || 304 === e，a &&（b = function（e，t，n）{for（ var r，i，o，a，s = e.contents，u = e.dataTypes;“ *” === u [0];）u.shift（），void 0 === r &&（r = e。 mimeType || t.getResponseHeader（“ Content-Type”））; if（r）for（i in s）if（s [i] && s [i] .test（r））{u。unshift（i）; break} if（n中的u [0]）o = u [0]; else {for（i in n）{if（！u [0] || e.converters [i +“” + u [0]]）{o = i; break} a ||（（a = i）} o = o || a}如果（o）返回o！== u [0] && u.unshift（o），n [ o]}（h，C，a）），b = function（e，t，n，r）{var i，o，a，s，u，l = {}，c = e.dataTypes.slice（） ; if（c [1]）for（e.converters中的）l [a.toLowerCase（）] = e.converters [a]; for（o = c.shift（）; o;）if（e.responseFields [o] &&（n [e.responseFields [o]] = t）,! u && r && e.dataFilter &&（（t = e.dataFilter（t，e.dataType）），u = o，o = c.shift（））如果（“ *” === o）o = u;否则if（“ *”！== u && u！== o）{if（！（a = l [u +“” + o] || l [“ *” + o]））for（i in l）if（（s = i.split（“”））[1] ==== o &&（a = l [u +“” + s [0]] || l [“ *“ + s [0]]））{！0 === a？a = l [i] :! 0！== l [i] &&（o = s [0]，c.unshift（s [1 ]））; break} if（！0！== a）if（a && e.throws）t = a（t）;否则尝试{t = a（t）}抓住（e）{返回{状态：“parsererror”，错误：a？e：“没有从“ + u +”到“ + o}}}的返回{状态：“成功”，数据：t}}（h，b，C，l），l？（ h.ifModified &&（（w = C.getResponseHeader（“ Last-Modified”））&&（E.lastModified [i] = w），（w = C.getResponseHeader（“ etag”））&&（E.etag [i] = w）），204 === e ||“ HEAD” === h.type？T =“ nocontent”：304 === e？T =“未修改”：（T = b.state，p = b .data，l =！（d = b.error））））:( d = T，！e && T ||（T =“ error”，e <0 &&（e = 0））），C.status = e，C .statusText =（t || T）+“”，l？y.resolveWith（g，[p，T，C]）：y.rejectWith（g，[C，T，d]），C.statusCode（x ），x = void 0，f && v.trigger（l？“ ajaxSuccess”：“ ajaxError”，[C，h，l？p：d]），m.fireWith（g，[C，T]），f &&（v .trigger（“ ajaxComplete”，[C，h]），-E.active || E.event.trigger（“ ajaxStop”）））}返回C}，getJSON：function（e，t，n）{返回E.get（e，t，n，“ json”）}，getScript：function（e，t）{返回E.get（e，void 0，t，“ script”）}}） ，E.each（[“ get”，“ post”]，function（e，t）{E [t] = function（e，n，r，i）{返回x（n）&&（i = i || r，r = n，n = void 0），E.ajax（E.extend（{url：e，type：t，dataType：i，data：n，success：r}，E.isPlainObject（e）&& e） ）}}），E._evalUrl = function（e，t）{返回E.ajax（{url：e，type：“ GET”，dataType：“ script”，cache：！0，async：！1，global： ！1，转换器：{“文本脚本”：function（）{}}，dataFilter：function（e）{E.globalEval（e，t）}}）}，E.fn.extend（{wrapAll：function（e ）{var t;返回this [0] &&（x（e）&&（e = e.call（this [0]）），t = E（e，this [0] .ownerDocument）.eq（0）。 clone（！0），this [0] .parentNode && t.insertBefore（this [0]），t.map（function（）{for（var e = this; e.firstElementChild;）e = e.firstElementChild; return e} ）.append（this）），this}，wrapInner：function（e）{返回x（e）？this.each（function（t）{E（this）.wrapInner（e.call（this，t））}））：this.each（function（）{var t = E（this），n = t.contents（）; n.length？n.wrapAll（e）：t.append（e）}）}，wrap：function（e）{var t = x（e）; return this.each（function（n）{E（this）.wrapAll（t？e.call（this，n）：e）}）}}，unwrap：function（e）{返回this.parent（e）.not（ “ body”）。each（function（）{E（this）.replaceWith（this.childNodes）}），this}}），E.expr.pseudos.hidden = function（e）{return！E.expr.pseudos .visible（e）}，E.expr.pseudos.visible = function（e）{return !!（e.offsetWidth || e.offsetHeight || e.getClientRects（）。length）}，E.ajaxSettings.xhr = function（）{try {return new n.XMLHttpRequest} catch（e）{}}; var rn = {0：200,1223：204}，on = E.ajaxSettings.xhr（）; m.cors = !! on &&在on.E.ajaxTransport（function（e）{var t，r; if（m.cors || on &&！e.crossDomain）return {send：function（i ，o）{var a，s = e.xhr（）; if（s.open（e.type，e.url，e.async，e.username，e.password），e.xhrFields）for（e.xhrFields中的a）s [a ] = e.xhrFields [a]; for（e.mimeType && s.overrideMimeType && s.overrideMimeType（e.mimeType）中的a，e.crossDomain || i [“ X-Requested-With”] ||（i [“ X-Requested -With“] =” XMLHttpRequest“），i）s.setRequestHeader（a，i [a]）; t = function（e）{return function（）{t &&（t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null，“ abort” === e？s.abort（）：“ error” === e？“ number”！= s.status？o（0， “错误”）：o（s.status，s.statusText）：o（rn [s.status] || s.status，s.statusText，“ text”！==（s.responseType ||“ text”） ||“ string”！= s.responseText的类型？{binary：s.response}：{text：s.responseText}，s.getAllResponseHeaders（））}}，s.onload = t（），r = s。 onerror = s.ontimeout = t（“错误”），避免0！== s.onabort？s.onabort = r：s.onreadystatechange = function（）{4 === s.readyState && n.setTimeout（function（）{t && r（）}）}，t = t（ “ abort”）; try {s.send（e.hasContent && e.data || null）} catch（i）{if（t）throw i}}，abort：function（）{t && t（）}}}），E .ajaxPrefilter（function（e）{e.crossDomain &&（e.contents.script =！1）}），E.ajaxSetup（{accepts：{script：“ text / javascript，application / javascript，application / ecmascript，application / x -ecmascript“}，内容：{script：/ \ b（？：java | ecma）script \ b /}，转换器：{” text script“：function（e）{return E.globalEval（e），e}} }），E.ajaxPrefilter（“ script”，function（e）{void 0 === e.cache &&（e.cache =！1），e.crossDomain &&（e.type =“ GET”）}），E。 ajaxTransport（“ script”，function（e）{var t，n; if（e.crossDomain || e.scriptAttrs）return {send：function（r，i）{t = E（“ <脚本>“）。attr（e.scriptAttrs || {}）。prop（{charset：e.scriptCharset，src：e.url}）。on（”加载错误“，n = function（e）{t.remove （），n = null，e && i（“ error” === e.type？404：200，e.type）}），s.head.appendChild（t [0]）}，abort：function（）{n && n （）}}}）; var an，sn = []，un = /（== \\（？=＆| $）| \？\？/; E.ajaxSetup（{jsonp：“ callback”，jsonpCallback： function（）{var e = sn.pop（）|| E.expando +“ _” + Mt ++;返回this [e] =！0，e}}）），E.ajaxPrefilter（“ json jsonp”，function（e， t，r）{var i，o，a，s =！1！== e.jsonp &&（un.test（e.url）？“ url”：“ string” ==电子数据类型&& 0 ===（（e .contentType ||“”）。indexOf（“ application / x-www-form-urlencoded”）&& un.test（e.data）&&“ data”）; if（s ||“ jsonp” === e.dataTypes [0]）返回i = e.jsonpCallback = x（e.jsonpCallback）？e.jsonpCallback（）：e.jsonpCallback，s？e [s] = e [s] .replace（un，“ $ 1” + i）:! 1！== e.jsonp &&（e.url + =（It.test（e.url）？“＆”： “？”）+ e.jsonp +“ =” + i），e.converters [“ script json”] = function（）{返回a || E.error（i +“未调用”），a [0]} ，e.dataTypes [0] =“ json”，o = n [i]，n [i] = function（）{a = arguments}，r.always（function（）{void 0 === o？E（ n）.removeProp（i）：n [i] = o，e [i] &&（e.jsonpCallback = t.jsonpCallback，sn.push（i）），a && x（o）&& o（a [0]），a = o = void 0}），“ script”}），m.createHTMLDocument =（（an = s.implementation.createHTMLDocument（“”）。body）.innerHTML =“ <form> </ form> <form> </形式>“，2 === an.childNodes.length），E.parseHTML = function（e，t，n）{返回”字符串“！= typeof e？[] :(” boolean“ == typeof t &&（n = t，t =！1），t ||（m.createHTMLDocument？（（r =（t = s.implementation。createHTMLDocument（“”））。createElement（“ base”））。href = s.location.href，t.head.appendChild（r））：t = s），o =！n && []，（i = q。 exec（e））？[t.createElement（i [1]）] :( i = Ee（[e]，t，o），o && o.length && E（o）.remove（），E.merge（[]， i.childNodes））））; var r，i，o}，E.fn.load = function（e，t，n）{var r，i，o，a = this，s = e.indexOf（“”） ; return-1 <s &&（r = jt（e.slice（s）），e = e.slice（0，s）），x（t）？（n = t，t = void 0）：t &&“对象“ == typeof t &&（i =” POST“），0 <a.length && E.ajax（{url：e，type：i ||” GET“，dataType：” html“，data：t}）。done（function （e）{o = arguments，a.html（r？E（“ <div>”）。append（E.parseHTML（e））。find（r）：e）}）。always（n && function（e，t ）{a.each（function（）{n.apply（this，o || [e.responseText，t，e]）}）}），this}，E.each（[“ ajaxStart”，“ ajaxStop”， “ ajaxComplete”，“ ajaxError”，“ ajaxSuccess”，“ ajaxSend”]，function（e，t）{E.fn [t] = function（e）{return this.on（t，e）}}），E.expr.pseudos .animated = function（e）{返回E.grep（E.timers，function（t）{return e === t.elem}）。length}，E.offset = {setOffset：function（e，t，n ）{var r，i，o，a，s，u，l = E.css（e，“ position”），c = E（e），f = {};“ static” === l &&（e。 style.position =“ relative”），s = c.offset（），o = E.css（e，“ top”），u = E.css（e，“ left”），i =（“ absolute” = == l ||“固定” === l）&&-1 <（o + u）.indexOf（“ auto”）？（a =（r = c.position（））。top，r.left）： （a = parseFloat（o）|| 0，parseFloat（u）|| 0），x（t）&&（t = t.call（e，n，E.extend（{}，s）））），null！ = t.top &&（f.top = t.top-s.top + a），null！= t.left &&（f.left = t.left-s.left + i），在t？t中“使用”。 using.call（e，f）：c.css（f）}}，E.fn.extend（{offset：function（e）{if（arguments。length）return void 0 === e？this：this.each（function（t）{E.offset.setOffset（this，e，t）}）; var t，n，r = this [0]; return r r.getClientRects（）。length？（t = r.getBoundingClientRect（），n = r.ownerDocument.defaultView，{top：t.top + n.pageYOffset，left：t.left + n.pageXOffset}）：{ top：0，left：0}：void 0}，position：function（）{if（this [0]）{var e，t，n，r = this [0]，i = {top：0，left： 0}; if（“ fixed” === E.css（r，“ position”））t = r.getBoundingClientRect（）; else {for（t = this.offset（），n = r.ownerDocument，e = r.offsetParent || n.documentElement; e &&（e === n.body || e === n.documentElement）&&“ static” === E.css（e，“ position”）;）e = e .parentNode; e && e！== r && 1 === e.nodeType &&（（i = E（e）.offset（））。top + = E.css（e，“ borderTopWidth”，！0），i.left + = E。 css（e，“ borderLeftWidth”，！0））}返回{top：t.top-i.top-E.css（r，“ marginTop”，！0），left：t.left-i。left-E.css（r，“ marginLeft”，！0）}}}，offsetParent：function（）{返回this.map（function（）{for（var e = this.offsetParent; e &&“ static” === E.css（e，“ position”）;）e = e.offsetParent;返回e || se}）}}）），E.each（{scrollLeft：“ pageXOffset”，scrollTop：“ pageYOffset”}，function（e ，t）{var n =“ pageYOffset” === t; E.fn [e] = function（r）{返回X（this，function（e，r，i）{var a; if（o（e） ？a = e：9 === e.nodeType &&（a = e.defaultView），void 0 === i）返回a？a [t]：e [r]; a？a.scrollTo（n？a。 pageXOffset：i，n？i：a.pageYOffset）：e [r] = i}，e，r，arguments.length）}}），E.each（[[“ top”，“ left”]，function（e ，t）{E.cssHooks [t] = nt（m.pixelPosition，function（e，n）{if（n）return n = tt（e，t），Je.test（n）？E（e）。 position（）[t] +“ px”：n}）}），E.each（{Height：“ height”，Width：“ width”}，function（e，t）{E.each（{padding：“内部” + e，内容：t，“”：“外部” + e}，function（n，r）{E.fn [r] = function（i，a）{var s = arguments.length &&（n ||“ boolean”！= typeof i），u = n ||（！0 === i ||！0 === a？“ margin”：“ border”）;返回X（this，function（t，n，i）{var a ; return o（t）？0 === r.indexOf（“ outer”）？t [“ inner” + e]：t.document.documentElement [“ client” + e]：9 === t.nodeType？ （a = t.documentElement，Math.max（t.body [“ scroll” + e]，a [“ scroll” + e]，t.body [“ offset” + e]，a [“ offset” + e] ，a [“ client” + e]））：void 0 === i？E.css（t，n，u）：E.style（t，n，i，u）}，t，s？i： void 0，s）}}}}）），E.each（“模糊焦点focusin焦点调整大小滚动单击dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseent更改选择提交keydown keypress keyup contextmenu”。split（“”），函数（e， t）{E.fn [t] = function（e，n）{return 0 <arguments.length？this.on（t，null，e，n）：this.trigger（t）}}），E.fn.extend（{hover：function（e，t）{return this.mouseenter（e）.mouseleave（t || e）}}），E.fn.extend（{bind：function（e，t，n）{return this.on（e，null，t，n）} ，unbind：function（e，t）{返回this.off（e，null，t）}，delegate：function（e，t，n，r）{return this.on（t，e，n，r）} ，undelegate：function（e，t，n）{返回1 === arguments.length？this.off（e，“ **”）：this.off（t，e ||“ **”，n）} }），E.proxy = function（e，t）{var n，r，i; if（“ string” == t &&（n = e [t]，t = e，e = n），x（e ））return r = l.call（arguments，2），（i = function（）{return e.apply（t || this，r.concat（l.call（arguments）））}）。guid = e。 guid = e.guid || E.guid ++，i}，E.holdReady = function（e）{e？E.readyWait ++：E.ready（！0）}，E.isArray = Array.isArray，E.parseJSON = JSON.parse，E.nodeName = L，E.isFunction = x，E.isWindow = o，E.camelCase = J，E.type = T，E.now = Date.now，E。isNumeric = function（e）{var t = E.type（e）; return（“ number” === t ||“ string” === t）&&！isNaN（e-parseFloat（e））}，void 0 ===（r = function（）{return E} .apply（t，[]））||（e.exports = r）; var ln = n.jQuery，cn = n。$; return E.noConflict = function（e）{返回n。$ === E &&（n。$ = cn），e && n.jQuery === E &&（n.jQuery = ln），E}，i ||（n.jQuery = n。 $ = E），E}）}}，function（e，t，n）{}，function（e，t，n）{“ use strict”;（function（e）{e（“＃navWrap”）。hover （function（）{e（“＃main-nav”）。css（{height：e（“＃navWrap”）。height（）}）}，function（）{e（“＃main-nav”）。css （{height：85}）}}）。call（this，n（0））}]]））;$ = cn），e && n.jQuery === E &&（n.jQuery = ln），E}，i ||（n.jQuery = n。$ = E），E}）}}，function（e，t，n } {}，function（e，t，n）{“ use strict”;（function（e）{e（“＃navWrap”）。hover（function（）{e（“＃main-nav”）。css（ {height：e（“＃navWrap”）。height（）}）}，function（）{e（“＃main-nav”）。css（{height：85}）}）}）。call（this，n （0））}]]））；$ = cn），e && n.jQuery === E &&（n.jQuery = ln），E}，i ||（n.jQuery = n。$ = E），E}）}}，function（e，t，n } {}，function（e，t，n）{“ use strict”;（function（e）{e（“＃navWrap”）。hover（function（）{e（“＃main-nav”）。css（ {height：e（“＃navWrap”）。height（）}）}，function（）{e（“＃main-nav”）。css（{height：85}）}）}）。call（this，n （0））}]]））；