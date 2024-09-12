/*

*/
(window.webpackJsonp = window.webpackJsonp || []).push([
    [3],
    {
        118: function () {},
        164: function (t, e, n) {
            "use strict";
            n.r(e);
            var r = n(6),
                o = n(11),
                i = n.n(o),
                c = n(1),
                a = n(37),
                s = n(2),
                u = n(0),
                l = n(40);
            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function p(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function h(t, e, n) {
                return (h =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = b(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function d(t, e) {
                return (d =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function y(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = b(t);
                    if (e) {
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return v(this, n);
                };
            }
            function v(t, e) {
                return !e || ("object" !== g(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function b(t) {
                return (b = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function g(t) {
                return (g =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            var _ = function (t, e, n, r) {
                    var o,
                        i = arguments.length,
                        c = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : g(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, r);
                    else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, n, c) : o(e, n)) || c);
                    return i > 3 && c && Object.defineProperty(e, n, c), c;
                },
                m = "intro-section",
                O = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && d(t, e);
                    })(v, t);
                    var e,
                        n,
                        r,
                        o = y(v);
                    function v() {
                        return f(this, v), o.apply(this, arguments);
                    }
                    return (
                        (e = v),
                        (n = [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    return this;
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    h(b(v.prototype), "connectedCallback", this).call(this), this.classList.add(m);
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    h(b(v.prototype), "disconnectedCallback", this).call(this);
                                },
                            },
                            {
                                key: "firstUpdated",
                                value: function () {
                                    var t = this;
                                    (this._header = Object(c.d)(".".concat(m, "__header"))),
                                        this._header &&
                                            (s.i ||
                                                Object(l.a)(function (e) {
                                                    var n = 2 * u.a.viewport.size[1],
                                                        r = (n / 1.5) * Object(a.a)(i()(e, [0, n]));
                                                    t._header.style.transform = "translateY(".concat(r, "px)");
                                                }));
                                },
                            },
                        ]) && p(e.prototype, n),
                        r && p(e, r),
                        v
                    );
                })(r.a);
            function w(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function j(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function R(t, e, n) {
                return (R =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = k(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function S(t, e) {
                return (S =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function x(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = k(t);
                    if (e) {
                        var o = k(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return P(this, n);
                };
            }
            function P(t, e) {
                return !e || ("object" !== C(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function k(t) {
                return (k = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function C(t) {
                return (C =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            O = _([Object(r.b)(m)], O);
            var T = function (t, e, n, r) {
                    var o,
                        i = arguments.length,
                        c = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : C(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, r);
                    else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, n, c) : o(e, n)) || c);
                    return i > 3 && c && Object.defineProperty(e, n, c), c;
                },
                E = "marquee-title",
                L = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && S(t, e);
                    })(s, t);
                    var e,
                        n,
                        r,
                        o = x(s);
                    function s() {
                        var t;
                        return w(this, s), ((t = o.apply(this, arguments))._prevScrollTop = 0), t;
                    }
                    return (
                        (e = s),
                        (n = [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    return this;
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    R(k(s.prototype), "connectedCallback", this).call(this),
                                        this.classList.add(E),
                                        (this._html = this.innerHTML),
                                        (this.innerHTML = ""),
                                        (this._wrapper = Object(c.a)("span", { parent: this })),
                                        this._setWrapperContent();
                                },
                            },
                            {
                                key: "_setWrapperContent",
                                value: function () {
                                    (this._wrapper.innerHTML += this._html), this._wrapper.clientWidth < 1.25 * u.a.viewport.size[0] && this._setWrapperContent();
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    R(k(s.prototype), "disconnectedCallback", this).call(this), (this._wrapper = void 0), (this.innerHTML = this._html);
                                },
                            },
                            {
                                key: "firstUpdated",
                                value: function () {
                                    Object(l.a)(this._onScroll.bind(this));
                                },
                            },
                            {
                                key: "_onScroll",
                                value: function () {
                                    if (this._wrapper) {
                                        var t = this.getBoundingClientRect(),
                                            e = this._wrapper.clientWidth,
                                            n = t.width - e;
                                        u.a.viewport.mobile && (n /= 2);
                                        var r = 1 - Object(a.a)(i()(t.top, [-t.height, u.a.viewport.size[1]]));
                                        this._wrapper.style.transform = "translateX(".concat(n * r, "px)");
                                    }
                                },
                            },
                        ]) && j(e.prototype, n),
                        r && j(e, r),
                        s
                    );
                })(r.a);
            L = T([Object(r.b)(E)], L);
            var z = n(86),
                D = n(7),
                A = n(3),
                I = n(39),
                W = n.n(I),
                q = n(87);
            function H(t) {
                return (H =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function M(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function B(t, e, n) {
                return (B =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = F(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function N(t, e) {
                return (N =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function U(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = F(t);
                    if (e) {
                        var o = F(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Y(this, n);
                };
            }
            function Y(t, e) {
                return !e || ("object" !== H(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function F(t) {
                return (F = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            var J = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && N(t, e);
                    })(i, t);
                    var e,
                        n,
                        r,
                        o = U(i);
                    function i(t, e) {
                        var n;
                        return (
                            (function (t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            })(this, i),
                            ((n = o.call(this, e)).source = t),
                            n.updateSize(),
                            n
                        );
                    }
                    return (
                        (e = i),
                        (n = [
                            {
                                key: "updateSize",
                                value: function (t, e) {
                                    B(F(i.prototype), "updateSize", this).call(this, t, e);
                                    var n = Object(z.b)({ source: this.source, rule: "cover", scale: 1, width: this.width, height: this.height });
                                    this._ctx.clearRect(0, 0, this.width, this.height), this._ctx.drawImage(this.source, 0, 0, n.sourceWidth, n.sourceHeight, n.x, n.y, n.width, n.height);
                                },
                            },
                        ]) && M(e.prototype, n),
                        r && M(e, r),
                        i
                    );
                })(q.a),
                V = n(44),
                X = n(24);
            function $(t, e, n) {
                var r = 0;
                r = e ? Math.min(n.length, e.length) : n.length;
                var o = !1,
                    i = new Array(r),
                    c = new Array(r),
                    a = 0,
                    s = document.createElement("div");
                s.classList.add("image-sequence-images"), t.appendChild(s), X.a();
                var u = X.b(),
                    l = [];
                n.forEach(function (t) {
                    u.resourcesAddTotal(1),
                        Object(V.a)(t, function () {
                            u.resourcesAddLoaded(1);
                        });
                }),
                    u.on("hide", function () {
                        n.forEach(function (t, e) {
                            var n = p(t, s);
                            (c[e] = n), l.push(n);
                        }),
                            h(0);
                    });
                var f = W()(r, 0);
                function p(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image-sequence-images__bg",
                        r = document.createElement("div");
                    return r.classList.add(n), (r.style.backgroundImage = "url('".concat(t, "')")), e.appendChild(r), r;
                }
                function h(t) {
                    if (!(l.length <= a)) {
                        for (var n = 0, s = 0; s < r; s++) {
                            var u = f[s];
                            t > u[0] && t <= u[1] && (n = s);
                        }
                        (a === n && 0 !== a) ||
                            ((l[a].style.opacity = "0"),
                            (l[n].style.opacity = "1"),
                            (a = n),
                            o && (clearTimeout(o), (o = !1)),
                            (o = setTimeout(function () {
                                !(function () {
                                    if (e) {
                                        var t = a;
                                        if (void 0 === i[t]) {
                                            var n = e[t];
                                            (i[t] = !0),
                                                Object(V.a)(n, function (e) {
                                                    (i[t] = e), p(n, c[t], "bg");
                                                });
                                        }
                                    }
                                })();
                            }, 350)));
                    }
                }
                return (
                    r > 0 && (f[r - 1][1] = 1),
                    {
                        destroy: function () {
                            s.remove();
                        }.bind(this),
                        setProgress: h.bind(this),
                        getActiveIndex: function () {
                            return a;
                        }.bind(this),
                        outer: s,
                    }
                );
            }
            var Q = "image-sequence",
                G = !(u.a.viewport.mobiledevice && "macos" === u.a.os);
            function K(t, e, n, r, o) {
                var s = this,
                    f = !1,
                    p = 0,
                    h = 0,
                    d = 0,
                    y = { top: 0, bottom: 0 },
                    v = Object(c.a)("div", { class: "".concat(Q, "__outer"), parent: t }),
                    b = Object(c.a)("div", { class: "".concat(Q, "__container"), parent: v }),
                    g = Object(c.a)("div", { class: "image-sequence-final bg cover", parent: b });
                g.style.backgroundImage = "url('".concat(r, "')");
                var _ = Object(c.a)("video", {
                    attr: [
                        ["src", o],
                        ["playsinline", "playsinline"],
                        ["crossorigin", "anonymous"],
                    ],
                });
                (_.preload = "auto"),
                    (_.muted = !0),
                    (_.loop = !0),
                    (_.autoplay = !0),
                    (_.onloadedmetadata = function () {
                        try {
                            _.play();
                            var t = u.a.vevetPage;
                            t &&
                                t.onPageShown(function () {
                                    T(), C();
                                });
                        } catch (t) {}
                    });
                var m,
                    O,
                    w,
                    j,
                    R,
                    S = Object(c.a)("div", { class: "image-sequence-video", children: [Object(c.a)("div", { class: "image-sequence-video__outer", children: [_] })], parent: b });
                (j = "".concat(Q, "-progress")),
                    (m = Object(c.a)("div", { class: j })),
                    (w = Object(c.a)("span", { html: "01" })),
                    Object(c.a)("div", { class: "".concat(j, "__data"), children: [Object(c.a)("span", { html: "Progress" }), Object(c.a)("span", { children: [Object(c.a)("span", { html: "Day&nbsp;" }), w] })], parent: m }),
                    (O = Object(c.a)("span")),
                    Object(c.a)("div", { class: "".concat(j, "__line"), children: [O], parent: m }),
                    (R = G
                        ? (function (t, e) {
                              var n = 0,
                                  r = 0,
                                  o = document.createElement("div");
                              o.classList.add("image-sequence-images"), t.appendChild(o), X.a();
                              var i = X.b(),
                                  c = new q.a(o);
                              o.appendChild(c.canvas);
                              var a = e.length,
                                  s = 0,
                                  u = new Array(e.length);
                              e.forEach(function (t, e) {
                                  i.resourcesAddTotal(1),
                                      Object(V.a)(t, function (t) {
                                          i.resourcesAddLoaded(1);
                                          var o = new J(t, !1);
                                          o.updateSize(1 * t.width, 1 * t.height), (u[e] = o), (n = o.width), (r = o.height), p(s);
                                      });
                              });
                              var l = W()(a, 0);
                              function f() {
                                  var t = u[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s];
                                  if (t) {
                                      var e = c.ctx,
                                          n = c.width,
                                          r = c.height;
                                      e.clearRect(0, 0, n, r), t.width > 0 && t.height > 0 && e.drawImage(t.canvas, 0, 0);
                                  }
                              }
                              function p(t) {
                                  for (var e = 0, n = 0; n < a; n++) {
                                      var r = l[n];
                                      t > r[0] && t <= r[1] && (e = n);
                                  }
                                  f(e), (s = e);
                              }
                              return (
                                  a > 0 && (l[a - 1][1] = 1),
                                  {
                                      outer: o,
                                      resize: function () {
                                          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                              e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                          t || (t = o.clientWidth), e || (e = o.clientHeight), c.updateSize(n, r);
                                          var i = c.canvas,
                                              a = Object(z.b)({ source: i, rule: "cover", width: 1 * t, height: 1 * e });
                                          (i.style.width = "".concat(a.width / 1, "px")), (i.style.height = "".concat(a.height / 1, "px")), (i.style.left = "".concat(a.x / 1, "px")), (i.style.top = "".concat(a.y / 1, "px")), f();
                                      }.bind(this),
                                      destroy: function () {
                                          o.remove();
                                      }.bind(this),
                                      setProgress: p.bind(this),
                                  }
                              );
                          })(b, n)
                        : $(b, e, n));
                var x = [];
                x.push(
                    u.a.viewport.on(
                        "w_",
                        function () {
                            T();
                        },
                        { timeout: 250 }
                    )
                ),
                    x.push(
                        u.a.viewport.on(
                            "",
                            function () {
                                u.a.viewport.mobiledevice || T();
                            },
                            { timeout: 250 }
                        )
                    );
                var P = u.a.vevetPage;
                function k(t) {
                    (p = t), C();
                }
                function C() {
                    var t = u.a.viewport.size[1],
                        e = (function () {
                            var t = u.a.viewport.size[1],
                                e = y.top - t,
                                n = y.top,
                                r = Object(a.a)(i()(p, [e, n])),
                                o = y.bottom - t,
                                c = y.bottom,
                                s = Object(a.a)(i()(p, [o, c])),
                                l = 0,
                                f = y.bottom - t,
                                h = Object(a.a)(i()(p, [l, f])),
                                d = Object(a.a)(i()(h, [0, 0.6])),
                                v = Object(a.a)(i()(h, [0.6, 0.7])),
                                b = Object(a.a)(i()(h, [0.7, 0.85]));
                            return { appear: r, disappear: s, animation: h, sequence: d, finalImage: v, video: b };
                        })();
                    R.setProgress(e.sequence);
                    var n = Math.floor(48 * e.sequence);
                    (w.innerHTML = n < 0 ? "0".concat(n) : n.toString()),
                        (O.style.transform = "scale(".concat(e.sequence, ", 1)")),
                        1 === e.sequence ? m.classList.add("hide") : m.classList.remove("hide"),
                        (g.style.opacity = e.finalImage.toString());
                    var r = { x1: 0, y1: (1 - e.video) * d, x2: h, y2: d };
                    if (
                        ((S.style.clipPath = "none"),
                        (S.style.clipPath = "\n            polygon(\n                "
                            .concat(r.x1, "px ")
                            .concat(r.y1, "px, \n                ")
                            .concat(r.x2, "px ")
                            .concat(r.y1, "px, \n                ")
                            .concat(r.x2, "px ")
                            .concat(r.y2, "px, \n                ")
                            .concat(r.x1, "px ")
                            .concat(r.y2, "px\n            )\n        ")),
                        (S.style.webkitClipPath = "none"),
                        (S.style.webkitClipPath = "\n            polygon(\n                "
                            .concat(r.x1, "px ")
                            .concat(r.y1, "px, \n                ")
                            .concat(r.x2, "px ")
                            .concat(r.y1, "px, \n                ")
                            .concat(r.x2, "px ")
                            .concat(r.y2, "px, \n                ")
                            .concat(r.x1, "px ")
                            .concat(r.y2, "px\n            )\n        ")),
                        f)
                    ) {
                        var o = 0;
                        (o = e.disappear <= 0 ? (1 - e.appear) * t : e.disappear * t * -1), (v.style.transform = "translateY(".concat(o, "px)"));
                    } else v.style.transform = "";
                }
                function T() {
                    (h = v.clientWidth), (d = v.clientHeight);

                        if (window.screen.width < 767) {
                            var e = u.a.viewport.size[1],
                                n = u.a.viewport.mobile ? 2.75 : 0.50,
                                r = h * n;
                            } else {
                                var e = u.a.viewport.size[1],
                                n = u.a.viewport.mobile ? 16:9,
                                r = h * n;
                            }

                    r > e && (r = e), (b.style.height = "".concat(r, "px")), R.resize && R.resize(h, r), 4 === _.readyState ? Object(z.a)({ source: _, rule: "cover", width: h, height: r }) : (_.onloadedmetadata = T.bind(this));
                    var o,
                        i,
                        c = ((d - r) / 2) * -1;
                    (c -=
                        ((o = (function (t, e) {
                            var n = u.a.viewport.mobile ? 850 : 1439,
                                r = u.a.viewport.mobile ? 1400 : 1060,
                                o = t,
                                i = (r * o) / n;
                            return i < e && (o = (n * (i = e)) / r), { x: (t - o) / 2, y: (e - i) / 2, width: o, height: i };
                        })(h, r)),
                        (i = 0.24),
                        o.height * i + o.y)),
                        (t.style.marginTop = "".concat(c, "px")),
                        Object(A.a)() ? ((f = !0), D.a.page.appendChild(v), v.classList.add("behind-scroll")) : ((f = !1), t.appendChild(v), v.classList.remove("behind-scroll"));
                    var a = Object(A.d)().scrollTop,
                        s = t.getBoundingClientRect();
                    (y.top = s.top + a), (y.bottom = s.bottom + a), k(a);
                }
                return (
                    P &&
                        P.onPageShown(function () {
                            T(), C(), Object(l.a)(k.bind(s));
                        }),
                    {
                        destroy: function () {
                            x.forEach(function (t) {
                                u.a.viewport.remove(t);
                            }),
                                R.destroy(),
                                S.remove(),
                                v.remove();
                        }.bind(this),
                    }
                );
            }
            function Z(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function tt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function et(t, e, n) {
                return (et =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = it(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function nt(t, e) {
                return (nt =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function rt(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = it(t);
                    if (e) {
                        var o = it(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return ot(this, n);
                };
            }
            function ot(t, e) {
                return !e || ("object" !== ct(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function it(t) {
                return (it = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function ct(t) {
                return (ct =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            var at = function (t, e, n, r) {
                    var o,
                        i = arguments.length,
                        c = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : ct(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, r);
                    else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, n, c) : o(e, n)) || c);
                    return i > 3 && c && Object.defineProperty(e, n, c), c;
                },
                st = "image-sequence",
                ut = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && nt(t, e);
                    })(i, t);
                    var e,
                        n,
                        r,
                        o = rt(i);
                    function i() {
                        return Z(this, i), o.apply(this, arguments);
                    }
                    return (
                        (e = i),
                        (n = [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    return this;
                                },
                            },
                            {
                                key: "firstUpdated",
                                value: function () {
                                    this.classList.add(st);
                                    var t = (function (t) {
                                        var e = u.a.viewport.mobile,
                                            n = t.getAttribute("original-sequence"),
                                            r = t.getAttribute("original-path"),
                                            o = e ? t.getAttribute("mobile-sequence") : t.getAttribute("desktop-sequence"),
                                            i = e ? t.getAttribute("mobile-path") : t.getAttribute("desktop-path"),
                                            c = !1;
                                        if (n && r) {
                                            c = [];
                                            for (var a = JSON.parse(n), s = 0, l = a.length; s < l; s++) c.push(r + a[s]);
                                        }
                                        for (var f = [], p = JSON.parse(o), h = 0, d = p.length; h < d; h++) f.push(i + p[h]);
                                        return { original: c, sequence: f };
                                    })(this);
                                    K(this, t.original, t.sequence, u.a.viewport.mobile ? this.mobileFullImage : this.desktopFullImage, u.a.viewport.mobile ? this.mobileVideo : this.desktopVideo);
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    et(it(i.prototype), "connectedCallback", this).call(this);
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    et(it(i.prototype), "disconnectedCallback", this).call(this);
                                },
                            },
                        ]) && tt(e.prototype, n),
                        r && tt(e, r),
                        i
                    );
                })(r.a);
            at([Object(r.c)({ attribute: "original-sequence", type: String })], ut.prototype, "originalSequence", void 0),
                at([Object(r.c)({ attribute: "original-path", type: String })], ut.prototype, "originalPath", void 0),
                at([Object(r.c)({ attribute: "desktop-sequence", type: String })], ut.prototype, "desktopSequence", void 0),
                at([Object(r.c)({ attribute: "desktop-path", type: String })], ut.prototype, "desktopPath", void 0),
                at([Object(r.c)({ attribute: "mobile-sequence", type: String })], ut.prototype, "mobileSequence", void 0),
                at([Object(r.c)({ attribute: "mobile-path", type: String })], ut.prototype, "mobilePath", void 0),
                at([Object(r.c)({ attribute: "desktop-video", type: String })], ut.prototype, "desktopVideo", void 0),
                at([Object(r.c)({ attribute: "mobile-video", type: String })], ut.prototype, "mobileVideo", void 0),
                at([Object(r.c)({ attribute: "desktop-full-image", type: String })], ut.prototype, "desktopFullImage", void 0),
                at([Object(r.c)({ attribute: "mobile-full-image", type: String })], ut.prototype, "mobileFullImage", void 0),
                (ut = at([Object(r.b)(st)], ut));

                // COMMENT CODE START

            var lt = n(9),
                ft = [0.28, 0.39, 0.28, 0.23, 0.48, 0.23],
                pt = ft.length,
                ht = 0.25,
                dt = [0, 1],
                yt = [0.5, 1];
            function vt(t) {
                var e = Object(c.d)(".scroll-photos__items", t),
                    n = !1,
                    r = Object(c.c)(".scroll-photos__item", t),
                    o = Object(c.c)(".scroll-photos__photo", t);
                if (r.length !== pt) throw new Error("Check items quantity!");
                var s = { top: 0, bottom: 0 },
                    l = 0,
                    f = 0,
                    p = u.a.viewport.on(
                        "",
                        function () {
                            y();
                        },
                        { timeout: 50 }
                    ),
                    h = u.a.vevetPage;
                function d(t) {
                    var c = u.a.viewport.size[1],
                        l = (function (t) {
                            var e = u.a.viewport.size[1],
                                n = s.top,
                                r = s.bottom - e,
                                o = i()(t, [n, r]),
                                c = Object(a.a)(o),
                                l = (e - v()) / 2,
                                f = s.top - e,
                                p = s.top + l,
                                h = i()(t, [f, p]),
                                d = Object(a.a)(h),
                                y = s.bottom - e,
                                b = s.bottom,
                                g = i()(t, [y, b]),
                                _ = Object(a.a)(g),
                                m = i()(t, [f, f + e / 2]),
                                O = Object(a.a)(m),
                                w = l / 2 / (r - n),
                                j = i()(c, [w, 1]),
                                R = Object(a.a)(j),
                                S = Object(a.a)(i()(R, dt)),
                                x = Object(a.a)(i()(R, yt));
                            return { appear: d, disappear: _, parallax: O, transform: R, scale: S, expand: x, distance: l };
                        })(t);
                    if (n) {
                        var p = 0;
                        (p = l.disappear <= 0 ? (1 - l.appear) * f - l.appear * l.distance : l.disappear * c * -1 - l.distance), (e.style.transform = "translateY(".concat(p, "px)"));
                    } else e.style.transform = "";
                    !(function (t, e, n, c) {
                        for (
                            var s = u.a.viewport.size[0],
                                l = u.a.viewport.size[1],
                                f = (0.75 * l) / v(),
                                p = 1 + (f - 1) * n,
                                h = (b(4) * (1 - f)) / 2,
                                d = (v() * (1 - f)) / 2,
                                y = (l - v() * f) / 2,
                                g = (s - b(4) * f) / 2,
                                _ = W()(pt, 0.9),
                                m = 0;
                            m < pt;
                            m++
                        ) {
                            var O = r[m],
                                w = 100 * (1 - Object(a.a)(i()(e, _[m])));
                            if (4 === m) {
                                var j = 1 + (1.6 - 1) * t;
                                (O.style.transform = "translateY(".concat(w, "px) scale(").concat(p, ")")), (o[m].style.transform = "translateY(".concat(((j - 1) / 2) * 100, "%) scale(").concat(j, ")"));
                            } else if ([0, 1, 2].includes(m)) {
                                var R = w + n * d - y * c,
                                    S = 0;
                                0 === m ? ((S = b(m) * ht * n * -1), (S += b(m) * ht * c * -1)) : 2 === m && ((S = b(m) * ht * n), (S += b(m) * ht * c)), (O.style.transform = "translate(".concat(S, "px, ").concat(R, "px)"));
                            } else if ([3, 5].includes(m)) {
                                var x = 0;
                                3 === m ? (x = h * n - g * c) : 5 === m && (x = h * -n + g * c), (O.style.transform = "translate(".concat(x, "px, ").concat(w, "px)"));
                            }
                        }
                    })(l.disappear, l.parallax, l.scale, l.expand);
                }
                function y() {
                    (l = e.clientWidth), (f = e.clientHeight), Object(A.a)() ? ((n = !0), D.a.page.appendChild(e), e.classList.add("behind-scroll")) : ((n = !1), t.appendChild(e), e.classList.remove("behind-scroll"));
                    var r = Object(A.d)().scrollTop,
                        o = t.getBoundingClientRect();
                    (s.top = o.top + r), (s.bottom = o.bottom + r), d(r);
                }
                function v() {
                    return u.a.viewport.desktop ? 0.256 * u.a.viewport.size[0] : 0.28 * u.a.viewport.size[0];
                }
                function b(t) {
                    return ft[t] * l;
                }
                return (
                    h &&
                        h.onPageShown(function () {
                            setTimeout(function () {
                                y();
                            }, 250);
                            var t = lt.a.get();
                            t &&
                                t.on("update", function (t) {
                                    d(t.top);
                                });
                        }),
                    {
                        destroy: function () {
                            p && u.a.viewport.remove(p);
                        }.bind(this),
                    }
                );
            }
            function bt(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function gt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function _t(t, e, n) {
                return (_t =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = jt(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function mt(t, e) {
                return (mt =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function Ot(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = jt(t);
                    if (e) {
                        var o = jt(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return wt(this, n);
                };
            }
            function wt(t, e) {
                return !e || ("object" !== Rt(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function jt(t) {
                return (jt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function Rt(t) {
                return (Rt =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            var St = function (t, e, n, r) {
                    var o,
                        i = arguments.length,
                        c = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Rt(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, r);
                    else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, n, c) : o(e, n)) || c);
                    return i > 3 && c && Object.defineProperty(e, n, c), c;
                },
                xt = "scroll-photos",
                Pt = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && mt(t, e);
                    })(i, t);
                    var e,
                        n,
                        r,
                        o = Ot(i);
                    function i() {
                        return bt(this, i), o.apply(this, arguments);
                    }
                    return (
                        (e = i),
                        (n = [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    return this;
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    _t(jt(i.prototype), "connectedCallback", this).call(this), this.classList.add(xt);
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    _t(jt(i.prototype), "disconnectedCallback", this).call(this);
                                },
                            },
                            {
                                key: "firstUpdated",
                                value: function () {
                                    var t = this;
                                    this._photos = vt(this);
                                    var e = u.a.vevetPage;
                                    e &&
                                        e.on("destroy", function () {
                                            t._photos.destroy();
                                        });
                                },
                            },
                        ]) && gt(e.prototype, n),
                        r && gt(e, r),
                        i
                    );
                })(r.a);
            Pt = St([Object(r.b)(xt)], Pt);
            var kt = n(38),
                Ct = n(92),
                Tt = n.n(Ct),
                Et = n(13),
                Lt = n.n(Et),
                zt = "slide-title";
            function Dt(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function At(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function It(t, e, n) {
                return (It =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Mt(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function Wt(t, e) {
                return (Wt =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function qt(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Mt(t);
                    if (e) {
                        var o = Mt(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Ht(this, n);
                };
            }
            function Ht(t, e) {
                return !e || ("object" !== Bt(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function Mt(t) {
                return (Mt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function Bt(t) {
                return (Bt =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            var Nt = function (t, e, n, r) {
                    var o,
                        i = arguments.length,
                        c = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Bt(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, r);
                    else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, n, c) : o(e, n)) || c);
                    return i > 3 && c && Object.defineProperty(e, n, c), c;
                },
                Ut = "slide-title",
                Yt = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Wt(t, e);
                    })(i, t);
                    var e,
                        n,
                        r,
                        o = qt(i);
                    function i() {
                        return Dt(this, i), o.apply(this, arguments);
                    }
                    return (
                        (e = i),
                        (n = [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    return this;
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    It(Mt(i.prototype), "connectedCallback", this).call(this),
                                        this.classList.add(Ut),
                                        (this._text = this.innerHTML),
                                        (this.innerHTML = ""),
                                        (this._slides = (function (t, e) {
                                            var n,
                                                r = [],
                                                o = !1,
                                                i = 0,
                                                a = 0;
                                            !(function () {
                                                var o = e.split("/");
                                                if (o.length > 1) {
                                                    Object(c.a)("span", { parent: t, children: [Object(c.a)("span", { html: "".concat(o[0].replace(/ \s*$/, "&nbsp;")), parent: t })] });
                                                    var a = Object(c.a)("div", { class: "".concat(zt, "__texts"), parent: t }),
                                                        s = Object(c.a)("div", { class: "".concat(zt, "__slider"), parent: a });
                                                    n = Object(c.a)("div", { class: "".concat(zt, "__slides"), parent: s });
                                                    for (var u = 1; u < o.length; u++) {
                                                        var l = Object(c.a)("span", { class: "".concat(zt, "__slide"), html: o[u], parent: n });
                                                        r.push(l);
                                                    }
                                                    i = r.length;
                                                }
                                            })(),
                                                p(),
                                                u.a.load.loaded ||
                                                    u.a.load.on("", function () {
                                                        p();
                                                    });
                                            var s = u.a.viewport.on("", function () {
                                                    p();
                                                }),
                                                l = new Tt.a(),
                                                f = l.add(
                                                    {
                                                        do: function () {
                                                            d();
                                                        },
                                                        interval: 3e3,
                                                    },
                                                    !1
                                                );
                                            function p() {
                                                h(a - 1, a, "next", 1);
                                            }
                                            function h(t, e, o, c) {
                                                var a = !1;
                                                if (t >= 0 && t < i) {
                                                    var s = r[t];
                                                    a = s;
                                                    var u = 0;
                                                    (u = "next" === o ? -1 * c : c), (s.style.transform = "translate(0, ".concat(100 * u, "%)"));
                                                }
                                                if (e >= 0 && e < i) {
                                                    var l = r[e],
                                                        f = 0;
                                                    if (((f = "next" === o ? 1 - c : -1 * (1 - c)), (l.style.transform = "translate(0, ".concat(100 * f, "%)")), a)) {
                                                        var p = a.clientWidth,
                                                            h = p + (l.clientWidth - p) * c;
                                                        n.style.width = "".concat(h, "px");
                                                    }
                                                }
                                            }
                                            function d() {
                                                if (!o) {
                                                    var t = a + 1;
                                                    t >= i && (t = 0);
                                                    var e = new Lt.a();
                                                    e.on("progress", function (e) {
                                                        h(a, t, "next", e.se);
                                                    }),
                                                        (o = !0),
                                                        e.on("end", function () {
                                                            (o = !1), (a = t);
                                                        }),
                                                        e.play({ duration: 750 });
                                                }
                                            }
                                            return {
                                                goToPrev: function () {
                                                    if (!o) {
                                                        var t = a - 1;
                                                        t < 0 && (t = i - 1);
                                                        var e = new Lt.a();
                                                        e.on("progress", function (e) {
                                                            h(a, t, "prev", e.se);
                                                        }),
                                                            (o = !0),
                                                            e.on("end", function () {
                                                                (o = !1), (a = t);
                                                            }),
                                                            e.play({ duration: 750 });
                                                    }
                                                }.bind(this),
                                                goToNext: d.bind(this),
                                                play: function () {
                                                    f && l.turn(f, !0);
                                                }.bind(this),
                                                pause: function () {
                                                    f && l.turn(f, !1);
                                                }.bind(this),
                                                destroy: function () {
                                                    s && u.a.viewport.remove(s);
                                                }.bind(this),
                                            };
                                        })(this, this._text));
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    It(Mt(i.prototype), "disconnectedCallback", this).call(this), this._slides && this._slides.destroy(), (this.innerHTML = this._text);
                                },
                            },
                            {
                                key: "firstUpdated",
                                value: function () {
                                    var t = this;
                                    Object(kt.a)(
                                        this,
                                        function () {
                                            t._slides && t._slides.play();
                                        },
                                        function () {
                                            t._slides && t._slides.pause();
                                        }
                                    );
                                },
                            },
                        ]) && At(e.prototype, n),
                        r && At(e, r),
                        i
                    );
                })(r.a);
            function Ft(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function Jt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function Vt(t, e, n) {
                return (Vt =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Gt(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function Xt(t, e) {
                return (Xt =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function $t(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Gt(t);
                    if (e) {
                        var o = Gt(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Qt(this, n);
                };
            }
            function Qt(t, e) {
                return !e || ("object" !== Kt(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function Gt(t) {
                return (Gt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function Kt(t) {
                return (Kt =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            Yt = Nt([Object(r.b)(Ut)], Yt);
            var Zt = function (t, e, n, r) {
                    var o,
                        i = arguments.length,
                        c = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Kt(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, r);
                    else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, n, c) : o(e, n)) || c);
                    return i > 3 && c && Object.defineProperty(e, n, c), c;
                },
                te = n(30);
            (window.$ = window.jQuery = te), n(112);
            var ee = "logos-list",
                ne = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Xt(t, e);
                    })(i, t);
                    var e,
                        n,
                        r,
                        o = $t(i);
                    function i() {
                        var t;
                        return Ft(this, i), ((t = o.apply(this, arguments))._slickCreated = !1), t;
                    }
                    return (
                        (e = i),
                        (n = [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    return this;
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    var t = this;
                                    Vt(Gt(i.prototype), "connectedCallback", this).call(this),
                                        this.classList.add(ee),
                                        this._create(),
                                        (this._viewportEvent = u.a.viewport.on("", function () {
                                            t._create();
                                        }));
                                },
                            },
                            {
                                key: "_create",
                                value: function () {
                                    u.a.viewport.mobile ? this._slickCreated || (te(this).slick({ dots: !1, infinite: !0, speed: 300, variableWidth: !0, slidesToScroll: 1, swipeToSlide: !0 }), (this._slickCreated = !0)) : this._destroy();
                                },
                            },
                            {
                                key: "_destroy",
                                value: function () {
                                    this._slickCreated && (te(this).slick("unslick"), (this._slickCreated = !1));
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    Vt(Gt(i.prototype), "disconnectedCallback", this).call(this), this._destroy(), this._viewportEvent && u.a.viewport.remove(this._viewportEvent);
                                },
                            },
                        ]) && Jt(e.prototype, n),
                        r && Jt(e, r),
                        i
                    );
                })(r.a);
            ne = Zt([Object(r.b)(ee)], ne);
            var re = n(5),
                oe = n.n(re),
                ie = n(113),
                ce = n.n(ie),
                ae = n(114),
                se = n.n(ae),
                ue = n(94),
                le = n.n(ue);
            var fe = n(115),
                pe = n.n(fe),
                he = n(33);
            function de(t) {
                return (de =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function ye(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function ve(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function be(t, e, n) {
                return (be =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Oe(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function ge(t, e) {
                return (ge =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function _e(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Oe(t);
                    if (e) {
                        var o = Oe(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return me(this, n);
                };
            }
            function me(t, e) {
                return !e || ("object" !== de(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function Oe(t) {
                return (Oe = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            var we = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && ge(t, e);
                })(i, t);
                var e,
                    n,
                    r,
                    o = _e(i);
                function i() {
                    var t;
                    return ye(this, i), ((t = o.apply(this, arguments))._canStart = !1), t;
                }
                return (
                    (e = i),
                    (n = [
                        {
                            key: "start",
                            value: function () {
                                this._canStart || ((this._canStart = !0), this.renderStat());
                            },
                        },
                        {
                            key: "_load",
                            value: function () {
                                for (var t = this, e = 0; e < this._res.length; e++)
                                    setTimeout(function () {
                                        t._loadRes();
                                    }, 150);
                            },
                        },
                        {
                            key: "_createElements",
                            value: function () {
                                be(Oe(i.prototype), "_createElements", this).call(this), this._outer.classList.add("canvas-image-lazy-slider");
                            },
                        },
                        {
                            key: "renderStat",
                            value: function () {
                                var t = this;
                                return new Promise(function (e) {
                                    t._canStart &&
                                        t
                                            ._lazyLoadImage(t._active)
                                            .then(function () {
                                                be(Oe(i.prototype), "renderStat", t).call(t), e(), t.outer.classList.add("loaded");
                                            })
                                            .catch(function () {});
                                });
                            },
                        },
                        {
                            key: "set",
                            value: function () {
                                var t = this,
                                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
                                return (
                                    !!this._canStart &&
                                    (this._lazyLoadImage(e)
                                        .then(function () {
                                            t._setResSize(), be(Oe(i.prototype), "set", t).call(t, e, n);
                                        })
                                        .catch(function () {}),
                                    !0)
                                );
                            },
                        },
                        {
                            key: "_lazyLoadImage",
                            value: function (t) {
                                var e = this;
                                return new Promise(function (n, r) {
                                    var o = e._res[t];
                                    if (o) {
                                        if (!e._loadedAll || e._playing) return void r();
                                        if (o instanceof HTMLImageElement) return void n();
                                        Object(he.a)(!0);
                                        var i = new Image();
                                        (e._res[t] = i),
                                            i.addEventListener("load", function () {
                                                Object(he.a)(!1), n();
                                            }),
                                            (i.crossOrigin = "anonymous"),
                                            (i.src = o.getAttribute(e._prop.src));
                                    }
                                });
                            },
                        },
                        {
                            key: "canStart",
                            get: function () {
                                return this._canStart;
                            },
                        },
                    ]) && ve(e.prototype, n),
                    r && ve(e, r),
                    i
                );
            })(pe.a);
            function je(t) {
                return (je =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function Re(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function Se(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function xe(t, e) {
                return (xe =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function Pe(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Ce(t);
                    if (e) {
                        var o = Ce(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return ke(this, n);
                };
            }
            function ke(t, e) {
                return !e || ("object" !== je(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function Ce(t) {
                return (Ce = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            var Te = 0.15,
                Ee = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && xe(t, e);
                    })(i, t);
                    var e,
                        n,
                        r,
                        o = Pe(i);
                    function i() {
                        var t;
                        return Re(this, i), ((t = o.apply(this, arguments))._sourceSizes = []), t;
                    }
                    return (
                        (e = i),
                        (n = [
                            {
                                key: "_setResSize",
                                value: function () {
                                    var t = this;
                                    this._sourceSizes = [];
                                    var e = this._size,
                                        n = e[0],
                                        r = e[1];
                                    this._res.forEach(function (e) {
                                        var o = Object(z.b)({ source: e, width: n, height: r, scale: 1, rule: "cover" });
                                        t._sourceSizes.push(o);
                                    });
                                },
                            },
                            {
                                key: "_draw",
                                value: function (t) {
                                    var e,
                                        n,
                                        r = t.num,
                                        o = t.p,
                                        i = t.direction,
                                        c = t.type,
                                        a = this._res[r],
                                        s = this._sourceSizes[r],
                                        u = this._size,
                                        l = u[0],
                                        f = 0,
                                        p = u[1];
                                    ["next", "show"].includes(i)
                                        ? "next" === c || "show" === c
                                            ? ((n = l - (e = (1 - o) * l)), (f = l * Te * (1 - o)))
                                            : ((e = 0), (n = (1 - o) * l), (f = l * Te * -o))
                                        : ["prev"].includes(i)
                                        ? "next" === c
                                            ? ((e = 0), (n = o * l), (f = l * Te * -(1 - o)))
                                            : ((n = l - (e = l * o)), (f = l * Te * o))
                                        : ((e = 0), (n = (1 - o) * l));
                                    var h = this._ctx;
                                    h.save(), h.beginPath(), h.rect(e, 0, n, p), h.closePath(), h.clip(), h.drawImage(a, 0, 0, s.sourceWidth, s.sourceHeight, s.x + f, s.y, s.width, s.height), h.restore();
                                },
                            },
                        ]) && Se(e.prototype, n),
                        r && Se(e, r),
                        i
                    );
                })(we),
                Le = "reviews-slider";
            function ze(t) {
                var e,
                    n,
                    r,
                    o = !1,
                    s = !1,
                    l = !1,
                    f = !1;
                function p(t) {
                    if (s) {
                        var e = u.a.viewport.mobile,
                            n = s.slides[t.num],
                            r = t.direction,
                            o = t.type,
                            i = t.p,
                            c = 0,
                            a = 0;
                        (a = "next" === o || "show" === o ? i : 1 - i),
                            (c = ["next", "show"].includes(r) ? ("next" === o || "show" === o ? 1 - i : -1 * i) : ["prev"].includes(r) ? ("next" === o ? -1 * (1 - i) : i) : -1 * i),
                            (n.style.opacity = a.toString()),
                            (n.style.transform = e ? "" : "translate(0, ".concat(30 * c, "px)"));
                    }
                }
                function h(t) {
                    for (var n = 0; n < e.buttons.length; n++) n === t ? ((e.buttonsProgress[n].style.transform = ""), e.buttons[n].classList.add("active")) : e.buttons[n].classList.remove("active");
                }
                function d(t) {
                    f && (f.stop(), (f = !1));
                    var n = new Lt.a();
                    n.on("progress", function (n) {
                        for (var r = Object(a.a)(i()(n.p, [0, 1])), o = 0; o < e.buttons.length; o++) {
                            var c = e.buttonsProgress[o];
                            o === t && (c.style.transform = "scale(".concat(r, ", 1)"));
                        }
                    }),
                        n.play({ duration: 5850, easing: "linear" }),
                        (f = n);
                }
                return (
                    (n = Object(c.d)(".".concat(Le, "-images"), t)),
                    (r = Object(c.d)(".".concat(Le, "-content"), t)),
                    n &&
                        r &&
                        ((o = new Ee({ selectors: { outer: n }, animation: { duration: 750, prev: [0, 1], next: [0, 1] }, img: "div", src: "data-src" })),
                        (s = new le.a({ selectors: { outer: r }, animation: { duration: 750, prev: [0, 0.75], next: [0.25, 1] }, dependents: [o] })),
                        (l = new se.a({ time: 6e3, on: !1 })),
                        s.addPlugin(l),
                        s &&
                            (e = (function (t, e, n) {
                                for (
                                    var r = "nav-list",
                                        o = [],
                                        i = [],
                                        a = Object(c.a)("div", { class: "".concat(r), parent: t }),
                                        s = function (t) {
                                            var e = Object(c.a)("button", { class: "".concat(r, "__button"), parent: a });
                                            o.push(e),
                                                (e.onclick = function () {
                                                    n(t);
                                                });
                                            var s = Object(c.a)("span", { parent: e }),
                                                u = Object(c.a)("span", { parent: s });
                                            i.push(u), Object(c.a)("i", { html: "#".concat(t), parent: e });
                                        },
                                        u = 0;
                                    u < e;
                                    u++
                                )
                                    s(u);
                                return { outer: a, buttons: o, buttonsProgress: i };
                            })(t, s.total, function (t) {
                                s && s.set(t);
                            }))),
                    (function () {
                        if (!s) return;
                        s.on("render", p.bind(this)),
                            p({ direction: "show", type: "show", prev: 0, next: 0, num: 0, p: 1 }),
                            s.on("start", function (t) {
                                h(t.next);
                            }),
                            h(0),
                            s.on("end", function (t) {
                                d(t.next);
                            }),
                            u.a.viewport.mobiledevice && s.addPlugin(new ce.a({ direction: "h", outer: s.outer.parentElement }));
                    })(),
                    {
                        destroy: function () {
                            o && (o.destroy(), (o = !1)), s && (s.destroy(), (s = !1)), l && (l = !1), e && e.outer.remove();
                        }.bind(this),
                        startAutoPlay: function () {
                            u.a.viewport.mobile || (l && (l.changeProp({ on: !0 }), s && d(s.active)));
                        }.bind(this),
                        stopAutoPlay: function () {
                            l && l.changeProp({ on: !1 });
                        }.bind(this),
                        imageSlider: o,
                    }
                );
            }
            function De(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function Ae(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function Ie(t, e, n) {
                return (Ie =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Me(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function We(t, e) {
                return (We =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function qe(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Me(t);
                    if (e) {
                        var o = Me(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return He(this, n);
                };
            }
            function He(t, e) {
                return !e || ("object" !== Be(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function Me(t) {
                return (Me = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function Be(t) {
                return (Be =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            var Ne = function (t, e, n, r) {
                    var o,
                        i = arguments.length,
                        c = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Be(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, r);
                    else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, n, c) : o(e, n)) || c);
                    return i > 3 && c && Object.defineProperty(e, n, c), c;
                },
                Ue = "reviews-slider",
                Ye = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && We(t, e);
                    })(i, t);
                    var e,
                        n,
                        r,
                        o = qe(i);
                    function i() {
                        return De(this, i), o.apply(this, arguments);
                    }
                    return (
                        (e = i),
                        (n = [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    return this;
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    Ie(Me(i.prototype), "connectedCallback", this).call(this), this.classList.add(Ue), (this._slider = ze(this));
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    Ie(Me(i.prototype), "disconnectedCallback", this).call(this), this._slider && this._slider.destroy();
                                },
                            },
                            {
                                key: "firstUpdated",
                                value: function () {
                                    var t = this;
                                    Object(kt.a)(
                                        this,
                                        function () {
                                            if (t._slider) {
                                                var e = t._slider.imageSlider;
                                                e &&
                                                    (e.canStart
                                                        ? t._slider.startAutoPlay()
                                                        : (e.start(),
                                                          oe()(function () {
                                                              t._slider.startAutoPlay();
                                                          }, 1e3)));
                                            }
                                        },
                                        function () {
                                            t._slider && t._slider.stopAutoPlay();
                                        }
                                    );
                                },
                            },
                        ]) && Ae(e.prototype, n),
                        r && Ae(e, r),
                        i
                    );
                })(r.a);
            Ne([Object(r.c)({ attribute: "slides" })], Ye.prototype, "slidesStr", void 0), (Ye = Ne([Object(r.b)(Ue)], Ye));
            var Fe = n(93),
                Je = n.n(Fe),
                Ve = n(42),
                Xe = n.n(Ve),
                $e = n(95),
                Qe = n.n($e);
            function Ge(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 9,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                return !(r >= n) && (r++, t.parentElement instanceof HTMLElement && (t.parentElement.tagName.toLowerCase() === e.toLowerCase() ? t.parentElement : Ge(t.parentElement, e, n, r)));
            }
            function Ke(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function Ze(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function tn(t, e, n) {
                return (tn =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = on(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function en(t, e) {
                return (en =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function nn(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = on(t);
                    if (e) {
                        var o = on(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return rn(this, n);
                };
            }
            function rn(t, e) {
                return !e || ("object" !== cn(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function on(t) {
                return (on = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function cn(t) {
                return (cn =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            var an = function (t, e, n, r) {
                    var o,
                        i = arguments.length,
                        c = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : cn(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, r);
                    else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, n, c) : o(e, n)) || c);
                    return i > 3 && c && Object.defineProperty(e, n, c), c;
                },
                sn = "video-slider-tip",
                un = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && en(t, e);
                    })(s, t);
                    var e,
                        n,
                        r,
                        o = nn(s);
                    function s() {
                        var t;
                        return Ke(this, s), ((t = o.apply(this, arguments))._viewportCallbacks = []), (t.x = 0.5), (t.y = 0.5), (t.posDir = "rtl"), (t.posShift = 1), t;
                    }
                    return (
                        (e = s),
                        (n = [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    return this;
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    tn(on(s.prototype), "connectedCallback", this).call(this), this.classList.add(sn), this._viewportCallbacks.push(u.a.viewport.on("", this.resize.bind(this), { timeout: 50 })), this.resize();
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    tn(on(s.prototype), "disconnectedCallback", this).call(this),
                                        this._viewportCallbacks.forEach(function (t) {
                                            u.a.viewport.remove(t);
                                        }),
                                        (this._viewportCallbacks = []);
                                },
                            },
                            {
                                key: "firstUpdated",
                                value: function () {
                                    this._createElements();
                                },
                            },
                            {
                                key: "_createElements",
                                value: function () {
                                    (this._title = Object(c.d)(".".concat(sn, "__title"), this)),
                                        (this._desc = Object(c.d)(".".concat(sn, "__desc"), this)),
                                        (this._content = Object(c.a)("div", { class: "".concat(sn, "__content"), parent: this, children: [this._title, this._desc] })),
                                        (this._lineOuter = Object(c.a)("div", { class: "".concat(sn, "__line"), parent: this })),
                                        (this._lineProgress = Object(c.a)("div", { class: "".concat(sn, "__line-progress"), parent: this._lineOuter }));
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    if (u.a.viewport.mobile) this._resetStyles();
                                    else {
                                        // var t = Ge(this, "video-slider");
                                        // if (t && ((this._video = Object(c.d)("video", t)), this._video instanceof HTMLVideoElement)) {
                                        //     var e = t.getBoundingClientRect(),
                                        //         n = this._video.getBoundingClientRect(),
                                        //         r = n.top - e.top,
                                        //         o = n.left - e.left,
                                        //         i = e.right - n.right,
                                        //         a = e.bottom - n.bottom,
                                        //         s = !1,
                                        //         l = !1,
                                        //         f = !1,
                                        //         p = !1,
                                        //         h = !1,
                                        //         d = !1,
                                        //         y = !1,
                                        //         v = !1,
                                        //         b = !1;
                                        //     "rtl" === this.posDir
                                        //         ? ((f = o + (1 - this.x) * n.width), (l = r + this.y * n.height), (d = this.x * n.width * this.posShift), (b = o + n.width * this.x))
                                        //         : "ltr" === this.posDir
                                        //         ? ((s = o + this.x * n.width), (l = r + this.y * n.height), (b = (h = (n.width - this.x * n.width) * this.posShift) + i))
                                        //         : "ttb" === this.posDir
                                        //         ? ((s = o + this.x * n.width), (l = r + this.y * n.height), (y = (n.height - this.y * n.height) * this.posShift))
                                        //         : "btt" === this.posDir && ((s = o + this.x * n.width), (p = a + (1 - this.y) * n.height), (v = n.height * this.y * this.posShift));
                                        //     var g = { left: s, top: l, right: f, bottom: p, paddingLeft: h, paddingRight: d, paddingTop: y, paddingBottom: v, maxWidth: b };
                                        //     this._applyStyles(g), this._applyLineStyles(g);
                                        // }
                                    }
                                },
                            },
                            {
                                key: "_resetStyles",
                                value: function () {
                                    this._applyStyles({ left: !1, top: !1, right: !1, bottom: !1, paddingLeft: !1, paddingRight: !1, paddingTop: !1, paddingBottom: !1, maxWidth: !1 }),
                                        (this.style.marginTop = ""),
                                        this._content && (this._content.style.marginLeft = "");
                                },
                            },
                            {
                                key: "_applyStyles",
                                value: function (t) {
                                    t.left ? (this.style.left = "".concat(t.left, "px")) : (this.style.left = ""),
                                        t.right ? (this.style.right = "".concat(t.right, "px")) : (this.style.right = ""),
                                        t.top ? (this.style.top = "".concat(t.top, "px")) : (this.style.top = ""),
                                        t.bottom ? (this.style.bottom = "".concat(t.bottom, "px")) : (this.style.bottom = ""),
                                        t.paddingLeft ? (this.style.paddingLeft = "".concat(t.paddingLeft, "px")) : (this.style.paddingLeft = ""),
                                        t.paddingRight ? (this.style.paddingRight = "".concat(t.paddingRight, "px")) : (this.style.paddingRight = ""),
                                        t.paddingTop ? (this.style.paddingTop = "".concat(t.paddingTop, "px")) : (this.style.paddingTop = ""),
                                        t.paddingBottom ? (this.style.paddingBottom = "".concat(t.paddingBottom, "px")) : (this.style.paddingBottom = ""),
                                        t.maxWidth ? (this.style.maxWidth = "".concat(t.maxWidth, "px")) : (this.style.maxWidth = "");
                                },
                            },
                            {
                                key: "_applyLineStyles",
                                value: function (t) {
                                    if ("rtl" === this.posDir || "ltr" === this.posDir) {
                                        var e = this.clientWidth,
                                            n = this._title.clientWidth,
                                            r = 0,
                                            o = this._title.clientHeight / 2 - this._lineOuter.clientHeight / 2;
                                        (r = "rtl" === this.posDir ? e - n : t.paddingLeft),
                                            (this._lineOuter.style.width = "".concat(r - 20, "px")),
                                            (this._lineOuter.style.top = "".concat(o, "px")),
                                            (this.style.marginTop = "".concat(-(o + this._lineOuter.clientHeight / 2), "px"));
                                    } else if ("ttb" === this.posDir || "btt" === this.posDir) {
                                        var i = 0,
                                            c = this._lineOuter.clientWidth / 2;
                                        (i = "ttb" === this.posDir ? t.paddingTop : t.paddingBottom),
                                            (this._lineOuter.style.height = "".concat(i - 20, "px")),
                                            (this._lineOuter.style.left = "".concat(-c, "px")),
                                            (this._content.style.marginLeft = "".concat(-this._content.clientWidth / 2, "px"));
                                    }
                                },
                            },
                            {
                                key: "renderAnimation",
                                value: function (t, e) {
                                    var n = "prev" === e ? 1 - t : t;
                                    this.style.opacity = "".concat(n);
                                    for (var r = this._content.children, o = W()(r.length, 0.8), c = 0; c < r.length; c++) {
                                        var s = r[c];
                                        if (s instanceof HTMLElement) {
                                            var u = o[c],
                                                l = Object(a.a)(i()(t, u)),
                                                f = 0,
                                                p = 0;
                                            "prev" === e ? ((f = 1 - l), (p = -1 * l)) : ((f = l), (p = 1 - l)), (s.style.transform = "translateY(".concat(50 * p, "px)")), (s.style.opacity = f.toString());
                                        }
                                    }
                                    var h = 1,
                                        d = 1;
                                    "rtl" === this.posDir || "ltr" === this.posDir ? (h = "next" === e ? t : 1 - t) : (d = "next" === e ? t : 1 - t), (this._lineProgress.style.transform = "scale(".concat(h, ", ").concat(d, ")"));
                                },
                            },
                        ]) && Ze(e.prototype, n),
                        r && Ze(e, r),
                        s
                    );
                })(r.a);
            an([Object(r.c)({ attribute: "x" })], un.prototype, "x", void 0),
                an([Object(r.c)({ attribute: "y" })], un.prototype, "y", void 0),
                an([Object(r.c)({ attribute: "pos-dir" })], un.prototype, "posDir", void 0),
                an([Object(r.c)({ attribute: "pos-shift" })], un.prototype, "posShift", void 0),
                (un = an([Object(r.b)(sn)], un));
            var ln = "video-slider",
                fn = 0,
                pn = 1e3;
            function hn(t) {
                var e = Object(c.a)("div", { class: "".concat(ln, "__video") }),
                    n = Object(c.a)("video", {
                        attr: [
                            ["src", t.videoSrc],
                            ["preload", "auto"],
                            ["playsinline", "playsinline"],
                            ["muted", "muted"],
                            ["crossorigin", "anonymous"],
                        ],
                        parent: e,
                    });
                (n.muted = !0),
                    t.prepend(e),
                    s.d &&
                        (function (t) {
                            t.addEventListener("click", function (e) {
                                var n = t.getBoundingClientRect(),
                                    r = (e.pageX - n.left) / n.width,
                                    o = (e.pageY - n.top) / n.height;
                                console.warn({ x: r, y: o });
                            });
                        })(n);
                var r,
                    o = Object(c.c)(".".concat(ln, "__slide"), t),
                    l = [],
                    f = [],
                    p = !1,
                    h = o.length,
                    d = [],
                    y = !1,
                    v = !1,
                    b = -1,
                    g = -1,
                    _ = -1,
                    m = !1,
                    O = !1;
                !(function () {
                    t.classList.remove("auto-change");
                    for (var e = 0; e < h; e++) {
                        var r = o[e].getAttribute("data-time");
                        if (r) {
                            var i = parseFloat(r);
                            d.push(i);
                        }
                    }
                    if (
                        ((function () {
                            for (
                                var e = Object(c.a)("div", { class: "".concat(ln, "__nav"), parent: t }),
                                    n = function (t) {
                                        var n = Object(c.a)("button", { class: "".concat(ln, "__nav-button"), parent: e });
                                        l.push(n),
                                            (n.onclick = function () {
                                                y && S(t);
                                            });
                                        var r = Object(c.a)("span", { parent: n }),
                                            o = Object(c.a)("span", { parent: r });
                                        f.push(o), Object(c.a)("i", { html: "#".concat(t), parent: n });
                                    },
                                    r = 0;
                                r < h;
                                r++
                            )
                                n(r);
                        })(),
                        (n.style.transition = "opacity ".concat(350, "ms")),
                        (n.ontimeupdate = j.bind(this)),
                        u.a.viewport.mobiledevice)
                    ) {
                        var a = new Je.a({ outer: t, on: !1 });
                        a.on("left", function () {
                            S(k());
                        }),
                            a.on("right", function () {
                                S(
                                    (function () {
                                        var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g) - 1;
                                        if (t < 0) return h - 1;
                                        return t;
                                    })()
                                );
                            });
                    }
                    n.addEventListener("click", function () {
                        u.a.viewport.mobiledevice && S(k());
                    });
                })();
                var w = new Qe.a();
                function j() {
                    _ >= 0 && n.currentTime >= _ && (n.pause(), w.pause());
                }
                w.on("", function () {
                    j();
                });
                var R = function () {
                    (v = !1), m && T();
                };
                function S(t) {
                    if (t !== g) {
                        (v = !0), E(), (b = g), (g = t);
                        var e = 0;
                        if (t > b && 1 === Math.abs(t - b)) {
                            n.pause();
                            var r = Math.abs(t - b);
                            P(t, r), (e = 1e3 * (d[t] - d[b]));
                        } else
                            (n.style.opacity = "0"),
                                oe()(function () {
                                    n.pause(),
                                        (n.currentTime = 0 === t ? d[0] / 2 : d[t - 1] + (d[t] - d[t - 1]) / 2),
                                        oe()(function () {
                                            n.addEventListener(
                                                "playing",
                                                function () {
                                                    oe()(function () {
                                                        n.style.opacity = "1";
                                                    }, 100);
                                                },
                                                { once: !0 }
                                            ),
                                                P(t);
                                        }, 100);
                                }, 350);
                        for (var s = 0; s < h; s++) s === g ? ((f[s].style.transform = ""), l[s].classList.add("active")) : l[s].classList.remove("active");
                        !(function (t, e, n) {
                            for (var r = 0; r < h; r++) {
                                var s = o[r];
                                r === e ? s.classList.add("active") : s.classList.remove("active");
                            }
                            for (var l = 0; l < h; l++) {
                                var f = o[l];
                                if (l === e || l === t)
                                    Object(c.c)(sn, f).forEach(function (t) {
                                        t.resize();
                                    });
                            }
                            var p = u.a.viewport.mobile,
                                d = new Lt.a();
                            if (
                                (d.on("progress", function (n) {
                                    C(t, Object(a.a)(i()(n.p, [0, 0.75])), "prev"), p && C(e, Object(a.a)(i()(n.p, [0.25, 1])), "next");
                                }),
                                d.play({ duration: pn, easing: "linear" }),
                                !p)
                            ) {
                                var y = 250;
                                Number.isNaN(n) || (y = 0 === n ? y : n - 2e3),
                                    setTimeout(function () {
                                        var t = new Lt.a();
                                        t.on("progress", function (t) {
                                            C(e, t.p, "next");
                                        }),
                                            t.play({ duration: pn, easing: "linear" });
                                    }, y);
                            }
                        })(b, g, e);
                    }
                }
                function x() {
                    y || ((y = !0), n.classList.add("show"), S(0));
                }
                function P(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    r && n.removeEventListener("pause", R), (_ = d[t]), w.play(), (n.playbackRate = e), n.play(), (r = n.addEventListener("pause", R, { once: !0 }));
                }
                function k() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                        e = t + 1;
                    return e >= h ? 0 : e;
                }
                function C(t, e, n) {
                    if (!(t < 0 || t >= h))
                        for (var r = o[t], s = Object(c.c)(sn, r), l = u.a.viewport.mobile ? 1 : 0.8, f = W()(s.length, l), p = 0; p < f.length; p++) {
                            var d = s[p],
                                y = Xe()(Object(a.a)(i()(e, f[p])), u.a.easing);
                            d.renderAnimation(y, n);
                        }
                }
                function T() {
                    if (!(fn > 0))
                        if ((fn++, (m = !0), clearTimeout(), y)) {
                            if (!v) {
                                var t = k();
                                !(function (t, e) {
                                    p && (p.stop(), (p = !1));
                                    var n = new Lt.a();
                                    n.on("progress", function (t) {
                                        for (var n = Object(a.a)(i()(t.p, [0, 1])), r = 0; r < h; r++) {
                                            var o = f[r];
                                            r === e && (o.style.transform = "scale(".concat(n, ", 1)"));
                                        }
                                    }),
                                        n.play({ duration: 5850, easing: "linear" }),
                                        (p = n);
                                })(0, g),
                                    (O = setTimeout(function () {
                                        S(t);
                                    }, 6e3));
                            }
                        } else x();
                }
                function E() {
                    O && (clearTimeout(O), (O = !1));
                }
                return {
                    startInterval: T.bind(this),
                    stopInterval: function () {
                        (m = !1), E();
                    }.bind(this),
                    show: x.bind(this),
                };
            }
            function dn(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function yn(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function vn(t, e, n) {
                return (vn =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = mn(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function bn(t, e) {
                return (bn =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function gn(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = mn(t);
                    if (e) {
                        var o = mn(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return _n(this, n);
                };
            }
            function _n(t, e) {
                return !e || ("object" !== On(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function mn(t) {
                return (mn = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function On(t) {
                return (On =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            var wn = function (t, e, n, r) {
                    var o,
                        i = arguments.length,
                        c = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : On(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, r);
                    else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, n, c) : o(e, n)) || c);
                    return i > 3 && c && Object.defineProperty(e, n, c), c;
                },
                jn = "video-slider",
                Rn = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && bn(t, e);
                    })(i, t);
                    var e,
                        n,
                        r,
                        o = gn(i);
                    function i() {
                        return dn(this, i), o.apply(this, arguments);
                    }
                    return (
                        (e = i),
                        (n = [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    return this;
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    vn(mn(i.prototype), "connectedCallback", this).call(this), this.classList.add(jn);
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    vn(mn(i.prototype), "disconnectedCallback", this).call(this), this._slider && this._slider.stopInterval();
                                },
                            },
                            {
                                key: "firstUpdated",
                                value: function () {
                                    var t = this,
                                        e = u.a.vevetPage;
                                    e &&
                                        e.onPageShown(function () {
                                            setTimeout(function () {
                                                t._slider = hn(t);
                                            }, 1e3);
                                        }),
                                        Object(kt.a)(
                                            this,
                                            function () {
                                                t._slider && t._slider.startInterval();
                                            },
                                            function () {
                                                t._slider && t._slider.stopInterval();
                                            },
                                            0.5
                                        );
                                },
                            },
                        ]) && yn(e.prototype, n),
                        r && yn(e, r),
                        i
                    );
                })(r.a);
            wn([Object(r.c)({ attribute: "video-src" })], Rn.prototype, "videoSrc", void 0), (Rn = wn([Object(r.b)(jn)], Rn));
            var Sn = n(161),
                xn = n(45),
                Pn = n(41),
                kn = n.n(Pn);
            function Cn(t) {
                var e,
                    r,
                    o = t.getAttribute("data-type");
                if (
                    ("yt" === o
                        ? (e = (function (t) {
                              var e = t.getAttribute("data-id"),
                                  n = document.createElement("iframe");
                              return (
                                  n.setAttribute("src", "https://www.youtube.com/embed/".concat(e)),
                                  n.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),
                                  n.setAttribute("allowfullscreen", "true"),
                                  n
                              );
                          })(t))
                        : "vm" === o
                        ? (e = (function (t) {
                              var e = t.getAttribute("data-id"),
                                  n = document.createElement("iframe");
                              return n.setAttribute("src", "https://player.vimeo.com/video/".concat(e)), n.setAttribute("allow", "autoplay; fullscreen"), n.setAttribute("allowfullscreen", "true"), n;
                          })(t))
                        : "srv" === o &&
                          (e = (function (t) {
                              var e = t.getAttribute("data-src"),
                                  n = document.createElement("video");
                              n.setAttribute("preload", "auto"), (n.crossOrigin = "anonymous"), (n.autoplay = !1), (n.controls = !0), (n.playsinline = !0);
                              var r = document.createElement("source");
                              return r.setAttribute("src", e), n.appendChild(r), n;
                          })(t)),
                    e)
                ) {
                    var i = (function () {
                        var t = document.createElement("div");
                        return (t.style.display = "none"), t.setAttribute("id", kn()("video-popup-source")), document.body.appendChild(t), t;
                    })();
                    i.appendChild(e),
                        Object(he.a)(!0),
                        e instanceof HTMLVideoElement
                            ? ((r = e),
                              new Promise(function (t, e) {
                                  Promise.resolve()
                                      .then(n.bind(null, 161))
                                      .then(
                                          function (e) {
                                              r.classList.add("video-js"), r.classList.add("vjs-adcd-theme"), e.default(r, {}), t();
                                          },
                                          function () {
                                              e(), alert("Error While Loading Video.JS");
                                          }
                                      );
                              })).then(function () {
                                  Tn(i, function () {
                                      Object(he.a)(!1);
                                  });
                              })
                            : Tn(i, function () {
                                  Object(he.a)(!1);
                              });
                }
            }
            function Tn(t, e) {
                n.e(7)
                    .then(n.bind(null, 169))
                    .then(function (n) {
                        n.default.show({ selector: "#".concat(t.id), append: !0, types: ["media"] }),
                            n.default.on(
                                "hidden",
                                function () {
                                    t.remove();
                                },
                                { timeout: 50 }
                            ),
                            e();
                    });
            }
            function En(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function Ln(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function zn(t, e) {
                return (zn =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function Dn(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = In(t);
                    if (e) {
                        var o = In(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return An(this, n);
                };
            }
            function An(t, e) {
                return !e || ("object" !== Wn(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function In(t) {
                return (In = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function Wn(t) {
                return (Wn =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            var qn = function (t, e, n, r) {
                    var o,
                        i = arguments.length,
                        c = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Wn(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, r);
                    else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, n, c) : o(e, n)) || c);
                    return i > 3 && c && Object.defineProperty(e, n, c), c;
                },
                Hn = "play-video",
                Mn = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && zn(t, e);
                    })(i, t);
                    var e,
                        n,
                        r,
                        o = Dn(i);
                    function i() {
                        return En(this, i), o.apply(this, arguments);
                    }
                    return (
                        (e = i),
                        (n = [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    return this;
                                },
                            },
                            {
                                key: "firstUpdated",
                                value: function () {
                                    var t = this;
                                    this.classList.add(Hn),
                                        (this.onclick = function () {
                                            t.click();
                                        }),
                                        Object(xn.b)(this);
                                },
                            },
                            {
                                key: "click",
                                value: function () {
                                    Cn(this);
                                },
                            },
                        ]) && Ln(e.prototype, n),
                        r && Ln(e, r),
                        i
                    );
                })(r.a);
            Mn = qn([Object(r.b)(Hn)], Mn);
            var Bn = "videos-slider";
            function Nn(t, e) {
                var n,
                    r,
                    o,
                    i = !1,
                    a = 0,
                    s = !1;
                Object(l.a)(function (t) {
                    u.a.viewport.mobiledevice || (!i && s && Math.abs(t - a) > g / 2 && (m(), (s = !1)));
                });
                var f,
                    p,
                    h,
                    d,
                    y = new Array(e.length),
                    v = [];
                !(function () {
                    (n = Object(c.a)("div", { class: "v-slider", parent: t })), (r = Object(c.a)("div", { class: "v-slider__slides", parent: n }));
                    for (var i = 0; i < e.length; i++) Object(c.a)("div", { class: "v-slider__slide", parent: r, children: [Object(c.a)("div", { attr: [["data-src", e[i].preview]] })] });
                    o = Object(c.a)("div", { class: "".concat(Bn, "-frames"), parent: t });
                })();
                var b = new Ee({ selectors: { outer: n }, animation: { duration: 1250, prev: [0, 1], next: [0, 1] }, img: "div", src: "data-src" });
                !(function () {
                    f = Object(c.a)("div", { class: "".concat(Bn, "-nav"), parent: t });
                    for (
                        var n = function (t) {
                                var n = e[t],
                                    r = Object(c.a)("button", { class: "".concat(Bn, "-nav__el"), parent: f, html: "".concat(n.num, ": <span>").concat(n.title, "</span>") });
                                v.push(r),
                                    (r.onclick = function () {
                                        b.set(t), t !== b.active && m();
                                    });
                            },
                            r = 0;
                        r < e.length;
                        r++
                    )
                        n(r);
                    function o(t) {
                        v.forEach(function (e, n) {
                            n === t ? e.classList.add("active") : e.classList.remove("active");
                        });
                    }
                    b.on("start", function (t) {
                        o(t.next);
                    }),
                        o(b.active);
                })(),
                    (function () {
                        p = Object(c.a)("div", { class: "".concat(Bn, "-tips"), parent: t });
                        var n = Object(c.a)("div", { class: "".concat(Bn, "-tips__left"), parent: p });
                        Object(c.a)("div", { class: "".concat(Bn, "-tips__dash"), parent: p });
                        for (var r = Object(c.a)("div", { class: "".concat(Bn, "-tips__right"), parent: p }), o = [], i = [], a = 0; a < e.length; a++) {
                            var s = e[a],
                                u = Object(c.a)("span", { parent: n, html: "".concat(s.num) });
                            o.push(u);
                            var l = Object(c.a)("span", { parent: r, html: "".concat(s.title) });
                            i.push(l);
                        }
                        function f(t, e, n, r) {
                            (n < 0 && n >= b.slides.length) ||
                                ("next" === t
                                    ? "prev" === e
                                        ? (h(o[n], -r), h(i[n], -r))
                                        : "next" === e && (h(o[n], 1 - r), h(i[n], 1 - r))
                                    : "prev" === e
                                    ? (h(o[n], r), h(i[n], r))
                                    : "next" === e && (h(o[n], -1 * (1 - r)), h(i[n], -1 * (1 - r))));
                        }
                        function h(t, e) {
                            t.style.transform = "translate(0, ".concat(100 * e, "%)");
                        }
                        b.on("render", function (t) {
                            f(t.direction, t.type, t.num, t.p);
                        }),
                            f("next", "prev", 0, 1),
                            f("next", "next", 0, 1);
                    })(),
                    (h = Object(c.a)("button", { class: "play-video" })),
                    n.appendChild(h),
                    (d = new Mn()),
                    _(b.active),
                    b.on("start", function (t) {
                        _(t.next);
                    }),
                    h.addEventListener("click", function () {
                        var n;
                        "srv" === e[b.active].videoType
                            ? ((n = b.active),
                              t.classList.add("disable-slider"),
                              void 0 === y[n] &&
                                  (function (t) {
                                      var n = e[t],
                                          r = Object(c.a)("div", { class: "".concat(Bn, "-frames__item"), parent: o }),
                                          i = Object(c.a)("video", { attr: [["preload", "none"]], parent: r });
                                      (i.crossOrigin = "anonymous"), (i.autoplay = !1), (i.controls = !0), (i.playsinline = !0), i.load(), i.classList.add("video-js"), i.classList.add("vjs-adcd-theme");
                                      var a = Object(Sn.default)(i, {});
                                      a.src(n.video),
                                          a.on("fullscreenchange", function () {
                                              a.isFullscreen() ? u.a.html.classList.add("use-full-size-video") : u.a.html.classList.remove("use-full-size-video");
                                          }),
                                          (y[t] = { outer: r, video: i, player: a }),
                                          i.addEventListener("pause", function () {
                                              i.seeking || u.a.viewport.mobiledevice || (a.exitFullscreen(), O(), w());
                                          }),
                                          i.addEventListener("end", function () {
                                              O(), w();
                                          });
                                  })(n),
                              (function (t) {
                                  for (var e = 0; e < y.length; e++) {
                                      var n = y[e];
                                      void 0 !== n && (e === t ? (n.outer.classList.add("show"), n.player.load(), n.player.play()) : n.outer.classList.remove("show"));
                                  }
                                  var r = Object(A.d)();
                                  r && ((a = r.scrollTop), (s = !0));
                              })(n),
                              t.classList.add("show-video"))
                            : d.click();
                    }),
                    Object(kt.a)(
                        b.outer,
                        function () {
                            b.start();
                        },
                        function () {}
                    );
                var g = 0;
                function _(t) {
                    var n = e[t],
                        r = n.videoType;
                    h.setAttribute("data-type", r),
                        d.setAttribute("data-type", r),
                        "srv" === r
                            ? (h.removeAttribute("data-id"), d.removeAttribute("data-id"), h.setAttribute("data-src", n.video), d.setAttribute("data-src", n.video))
                            : (h.removeAttribute("data-src"), d.removeAttribute("data-src"), h.setAttribute("data-id", n.video), d.setAttribute("data-id", n.video));
                }
                function m() {
                    O(), w();
                    var t = b.active;
                    if (void 0 !== y[t]) {
                        var e = y[t];
                        e.video && e.video.pause();
                    }
                }
                function O() {
                    t.classList.remove("show-video");
                }
                function w() {
                    t.classList.remove("disable-slider");
                }
                function j() {
                    g = n.clientHeight;
                }
                return (
                    j(),
                    u.a.viewport.on("", function () {
                        j();
                    }),
                    {
                        destroy: function () {
                            (i = !0), b.destroy(), n.remove(), f.remove(), o.remove(), p.remove();
                        }.bind(this),
                    }
                );
            }
            function Un(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function Yn(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function Fn(t, e, n) {
                return (Fn =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = $n(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function Jn(t, e) {
                return (Jn =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function Vn(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = $n(t);
                    if (e) {
                        var o = $n(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Xn(this, n);
                };
            }
            function Xn(t, e) {
                return !e || ("object" !== Qn(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function $n(t) {
                return ($n = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function Qn(t) {
                return (Qn =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            var Gn = function (t, e, n, r) {
                    var o,
                        i = arguments.length,
                        c = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Qn(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, r);
                    else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, n, c) : o(e, n)) || c);
                    return i > 3 && c && Object.defineProperty(e, n, c), c;
                },
                Kn = "videos-slider",
                Zn = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && Jn(t, e);
                    })(i, t);
                    var e,
                        n,
                        r,
                        o = Vn(i);
                    function i() {
                        return Un(this, i), o.apply(this, arguments);
                    }
                    return (
                        (e = i),
                        (n = [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    return this;
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    Fn($n(i.prototype), "connectedCallback", this).call(this), this.classList.add(Kn);
                                    var t = JSON.parse(this.slidesStr);
                                    this._slider = Nn(this, t);
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    Fn($n(i.prototype), "disconnectedCallback", this).call(this), this._slider && this._slider.destroy();
                                },
                            },
                        ]) && Yn(e.prototype, n),
                        r && Yn(e, r),
                        i
                    );
                })(r.a);
            function tr(t) {
                return (tr =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function er(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function nr(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function rr(t, e, n) {
                return (rr =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = ar(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function or(t, e) {
                return (or =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function ir(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = ar(t);
                    if (e) {
                        var o = ar(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return cr(this, n);
                };
            }
            function cr(t, e) {
                return !e || ("object" !== tr(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function ar(t) {
                return (ar = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            Gn([Object(r.c)({ attribute: "slides" })], Zn.prototype, "slidesStr", void 0), (Zn = Gn([Object(r.b)(Kn)], Zn));
            var sr = u.a.viewport,
                ur = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && or(t, e);
                    })(i, t);
                    var e,
                        n,
                        r,
                        o = ir(i);
                    function i() {
                        var t;
                        return er(this, i), ((t = o.apply(this, arguments))._sourceSizes = []), t;
                    }
                    return (
                        (e = i),
                        (n = [
                            {
                                key: "_onloaded",
                                value: function () {
                                    this._createPlanes(), rr(ar(i.prototype), "_onloaded", this).call(this);
                                },
                            },
                            {
                                key: "_createPlanes",
                                value: function () {
                                    var t = this,
                                        e = "v-slider";
                                    this._planesOuter = Object(c.a)("div", { class: "".concat(e, "-planes"), parent: this._outer });
                                    for (var n = 0; n < this._total; n++) Object(c.a)("div", { class: "".concat(e, "-planes__el"), parent: this._planesOuter });
                                    this.on("renderStat", function () {
                                        t._renderPlanes(0, t._active, 1);
                                    }),
                                        this.on("render", function (e) {
                                            "next" === e.type && t._renderPlanes(e.prev, e.next, e.p);
                                        });
                                },
                            },
                            {
                                key: "_renderPlanes",
                                value: function (t, e, n) {
                                    var r = 0,
                                        o = 0,
                                        i = this.getTabSize();
                                    sr.mobile ? (o = -this._total * i.h + t * i.h + (e - t) * i.h * n) : (r = -this._total * i.w + t * i.w + (e - t) * i.w * n),
                                        (this._planesOuter.style.transform = "\n            translate(".concat(r, "px, ").concat(o, "px)\n        "));
                                },
                            },
                            // {
                            //     key: "_setResSize",
                            //     value: function () {
                            //         var t = this;
                            //         (this._sourceSizes = []),
                            //             this._res.forEach(function (e, n) {
                            //                 t._sourceSizes.push(t._getResSize(n));
                            //             });
                            //     },
                            // },
                            // {
                            //     key: "_getResSize",
                            //     value: function (t) {
                            //         var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            //             n = this.getImageAreaSize(),
                            //             r = this._res[t];
                            //         return Object(z.b)({ source: r, width: n.w, height: n.h, scale: e + 0, rule: "cover" });
                            //     },
                            // },
                            // {
                            //     key: "getImageAreaSize",
                            //     value: function () {
                            //         var t = this._size;
                            //         return sr.mobile ? { w: t[0], h: t[1] - this.getTabSize(!0).h * (this._total - 1) } : { w: t[0] - this.getTabSize(!0).w * (this._total - 1), h: t[1] };
                            //     },
                            // },
                            {
                                key: "getTabSize",
                                value: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        e = t ? this._dpr : 1;
                                    return sr.desktop || sr.tablet ? { w: 100 * e, h: this._size[1] } : { w: this._size[0], h: 60 * e };
                                },
                            },
                            {
                                key: "_draw",
                                value: function (t) {
                                    var e = t.direction,
                                        n = t.type;
                                    ["next", "show"].includes(e)
                                        ? "next" === n || "show" === n
                                            ? this._renderNextSlide(t)
                                            : this._renderPrevSlide(t)
                                        : ["prev"].includes(e) && ("next" === n ? this._renderPrevSlide(t) : this._renderNextSlide(t));
                                },
                            },
                            // {
                            //     key: "_renderPrevSlide",
                            //     value: function (t) {
                            //         var e = t.num,
                            //             n = t.next,
                            //             r = t.direction,
                            //             o = t.p,
                            //             i = t.p;
                            //         "prev" === r && (o = 0);
                            //         var c = 1;
                            //         "prev" === r && (c = i);
                            //         var a = this._size,
                            //             s = a[0],
                            //             u = a[1],
                            //             l = this.getTabSize(!0).w,
                            //             f = this.getTabSize(!0).h,
                            //             p = 0,
                            //             h = s,
                            //             d = 0,
                            //             y = u;
                            //         if (sr.mobile) {
                            //             d = e * f;
                            //             var v = n * f;
                            //             y = v + (u - (this._total - 1) * f + e * f - v) * (1 - o);
                            //         } else {
                            //             p = e * l;
                            //             var b = n * l;
                            //             h = b + (s - (this._total - 1) * l + e * l - b) * (1 - o);
                            //         }
                            //         var g = this._res[e],
                            //             _ = this._sourceSizes[e],
                            //             m = this._ctx;
                            //         m.save(),
                            //             m.beginPath(),
                            //             m.moveTo(p, d),
                            //             m.lineTo(h, d),
                            //             m.lineTo(h, y),
                            //             m.lineTo(p, y),
                            //             m.lineTo(p, d),
                            //             m.closePath(),
                            //             m.clip(),
                            //             (m.globalAlpha = c),
                            //             m.drawImage(g, 0, 0, _.sourceWidth, _.sourceHeight, p + _.x, d + _.y, _.width, _.height),
                            //             m.restore();
                            //     },
                            // },
                            // {
                            //     key: "_renderNextSlide",
                            //     value: function (t) {
                            //         var e = t.num,
                            //             n = t.direction,
                            //             r = t.p;
                            //         "prev" === n && (r = 1 - r);
                            //         var o = this._size,
                            //             i = o[0],
                            //             c = o[1],
                            //             a = this.getTabSize(!0).w,
                            //             s = this.getTabSize(!0).h,
                            //             u = 0,
                            //             l = i,
                            //             f = 0,
                            //             p = c;
                            //         sr.mobile ? ((f = e * s * r), (p = c - (this._total - 1) * s + e * s)) : ((u = e * a * r), (l = i - (this._total - 1) * a + e * a));
                            //         var h = 1 + (1 - r) * ((sr.mobile ? (p - f + s * (this._total - 1) * 2) / this.getImageAreaSize().h : (l - u + a * (this._total - 1) * 2) / this.getImageAreaSize().w) - 1),
                            //             d = this._res[e],
                            //             y = this._getResSize(e, h),
                            //             v = r,
                            //             b = this._ctx;
                            //         b.save(),
                            //             b.beginPath(),
                            //             b.moveTo(u, f),
                            //             b.lineTo(l, f),
                            //             b.lineTo(l, p),
                            //             b.lineTo(u, p),
                            //             b.lineTo(u, f),
                            //             b.closePath(),
                            //             b.clip(),
                            //             (b.globalAlpha = v),
                            //             b.drawImage(d, 0, 0, y.sourceWidth, y.sourceHeight, u + y.x, f + y.y, y.width, y.height),
                            //             b.restore();
                            //     },
                            // },
                            // {
                            //     key: "dpr",
                            //     get: function () {
                            //         return this._dpr;
                            //     },
                            // },
                        ]) && nr(e.prototype, n),
                        r && nr(e, r),
                        i
                    );
                })(we),
                lr = n(158),
                fr = n.n(lr);
            function pr(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            var hr = "tab-slider-tab",
                dr = (function () {
                    function t(e, n, r, o) {
                        !(function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                            (this._parent = e),
                            (this._index = n),
                            (this._title = r),
                            (this._slider = o),
                            (this._titleRotation = !1),
                            (this._width = 0),
                            (this._height = 0),
                            (this._isActive = !1),
                            (this._isCurrent = !1),
                            (this._titleShown = !1),
                            this._create(),
                            this._setEvents();
                    }
                    var e, n, r;
                    return (
                        (e = t),
                        (n = [
                            {
                                key: "_create",
                                value: function () {
                                    var t = this._index + 1,
                                        e = t < 10 ? "0".concat(t) : "".concat(t);
                                    (this._outer = Object(c.a)("div", { class: "".concat(hr), parent: this._parent })),
                                        (this._bg = Object(c.a)("div", { class: "".concat(hr, "__bg"), parent: this._outer })),
                                        (this._button = Object(c.a)("div", { class: "".concat(hr, "__button"), parent: this._outer })),
                                        (this._titleOuter = Object(c.a)("div", { class: "".concat(hr, "__title"), parent: this._button })),
                                        (this._titleEl = Object(c.a)("div", { html: this._title, parent: this._titleOuter }));
                                    var n = Object(c.a)("div", { class: "".concat(hr, "__info"), parent: this._button });
                                    Object(c.a)("div", { class: "".concat(hr, "__num"), parent: n, html: "<span>".concat(e, "</span>") }),
                                        Object(c.a)("div", {
                                            class: "".concat(hr, "__text-outer"),
                                            parent: n,
                                            children: [Object(c.a)("div", { class: "".concat(hr, "__line"), parent: n }), Object(c.a)("div", { class: "".concat(hr, "__text"), parent: n, html: "<span>".concat(this._title, "</span>") })],
                                        });
                                },
                            },
                            {
                                key: "_createRotationTitle",
                                value: function () {
                                    u.a.viewport.mobile ? this._titleRotation && (this._titleRotation.destroy(), (this._titleRotation = !1)) : this._titleRotation || (this._titleRotation = fr()({ selector: this._titleEl }));
                                },
                            },
                            {
                                key: "_setEvents",
                                value: function () {
                                    var t = this;
                                    this._button.addEventListener("click", function () {
                                        t._slider.set(t._index);
                                    }),
                                        this._resize(),
                                        this._slider.on("renderStat", this._resize.bind(this)),
                                        this._slider.on("loaded", this._resize.bind(this));
                                    var e = u.a.vevetPage;
                                    e &&
                                        e.onPageShown(function () {
                                            t._resize();
                                        }),
                                        this._slider.on("render", this._onRender.bind(this)),
                                        this._slider.active === this._index && (this.isCurrent = !0),
                                        this._slider.on("start", function (e) {
                                            e.next === t._index ? (t.isCurrent = !0) : (t.isCurrent = !1);
                                        }),
                                        this._slider.active === this._index && this._outer.classList.add("show"),
                                        this._slider.on("start", function (e) {
                                            e.next !== t._index && t._outer.classList.remove("show");
                                        }),
                                        this._slider.on("end", function (e) {
                                            e.next === t._index ? t._outer.classList.add("show") : t._outer.classList.remove("show");
                                        });
                                },
                            },
                            {
                                key: "_resize",
                                value: function () {
                                    var t = this._slider,
                                        e = this._outer,
                                        n = t.getImageAreaSize(),
                                        r = n.w / t.dpr,
                                        o = n.h / t.dpr;
                                    (this._width = r),
                                        (this._height = o),
                                        (e.style.width = "".concat(r + 1, "px")),
                                        (e.style.height = "".concat(o + 2, "px")),
                                        this._renderTab(),
                                        this._createRotationTitle(),
                                        this._titleRotation && this._titleRotation.update();
                                },
                            },
                            {
                                key: "_onRender",
                                value: function (t) {
                                    "next" === t.type && ("next" === t.direction ? this._renderTab(t.num, t.p, "next") : this._renderTab(t.num, t.p, "prev"));
                                },
                            },
                            {
                                key: "_renderTab",
                                value: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._slider.active,
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "next",
                                        r = this._slider,
                                        o = r.getTabSize(),
                                        i = 0;
                                    "next" === n ? (this._index === t ? (i = e) : this._index < t && (i = this.isActive ? 1 : e)) : "prev" === n && (this._index === t ? (i = 1) : this._index > t && (i = this.isActive ? 1 - e : 0)),
                                        0 === this._index && (i = 1),
                                        1 === i ? (this.isActive = !0) : 0 === i && (this.isActive = !1);
                                    var c = 0,
                                        a = 0;
                                    u.a.viewport.mobile ? (a = (1 - i) * (this._height - o.h) + o.h * this._index) : (c = (1 - i) * (this._width - o.w) + o.w * this._index),
                                        (this._outer.style.transform = "translate(".concat(c - 1, "px, ").concat(a - 1, "px)"));
                                    var s = 1 - i;
                                    this._bg.style.opacity = "".concat(s);
                                    var l = 0;
                                    t > this._index || t < this._index ? (this._titleShown ? (l = 1) : 1 === (l = e) && (this._titleShown = !0)) : t === this._index && this._titleShown && 0 == (l = 1 - e) && (this._titleShown = !1),
                                        (l = 1 - l),
                                        u.a.viewport.mobile ? (this._titleEl.style.transform = "translateX(".concat(110 * l, "%)")) : (this._titleEl.style.transform = "translateY(".concat(-110 * l, "%)"));
                                },
                            },
                            {
                                key: "isActive",
                                get: function () {
                                    return this._isActive;
                                },
                                set: function (t) {
                                    this._isActive = t;
                                },
                            },
                            {
                                key: "isCurrent",
                                get: function () {
                                    return this._isCurrent;
                                },
                                set: function (t) {
                                    this.isCurrent !== t && (t ? this._outer.classList.add("current") : this._outer.classList.remove("current")), (this._isCurrent = t);
                                },
                            },
                        ]) && pr(e.prototype, n),
                        r && pr(e, r),
                        t
                    );
                })();
            function yr(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function vr(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function br(t, e, n) {
                return (br =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get
                        : function (t, e, n) {
                              var r = (function (t, e) {
                                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Or(t)); );
                                  return t;
                              })(t, e);
                              if (r) {
                                  var o = Object.getOwnPropertyDescriptor(r, e);
                                  return o.get ? o.get.call(n) : o.value;
                              }
                          })(t, e, n || t);
            }
            function gr(t, e) {
                return (gr =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function _r(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Or(t);
                    if (e) {
                        var o = Or(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return mr(this, n);
                };
            }
            function mr(t, e) {
                return !e || ("object" !== wr(e) && "function" != typeof e)
                    ? (function (t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function Or(t) {
                return (Or = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function wr(t) {
                return (wr =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            var jr = function (t, e, n, r) {
                    var o,
                        i = arguments.length,
                        c = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : wr(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, r);
                    else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, n, c) : o(e, n)) || c);
                    return i > 3 && c && Object.defineProperty(e, n, c), c;
                },
                Rr = "tab-slider",
                Sr = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && gr(t, e);
                    })(i, t);
                    var e,
                        n,
                        r,
                        o = _r(i);
                    function i() {
                        return yr(this, i), o.apply(this, arguments);
                    }
                    return (
                        (e = i),
                        (n = [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    return this;
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    br(Or(i.prototype), "connectedCallback", this).call(this), this.classList.add(Rr);
                                    var t = JSON.parse(this.slidesStr);
                                    this._slider = (function (t, e) {
                                        var n,
                                            r,
                                            o = [];
                                        !(function () {
                                            (n = Object(c.a)("div", { class: "v-slider", parent: t })), (r = Object(c.a)("div", { class: "v-slider__slides", parent: n }));
                                            for (var o = 0; o < e.length; o++) Object(c.a)("div", { class: "v-slider__slide", parent: r, children: [Object(c.a)("div", { attr: [["data-src", e[o].img]] })] });
                                        })();
                                        var i = new ur({ selectors: { outer: n }, animation: { duration: 1e3, prev: [0, 1], next: [0, 1] }, img: "div", src: "data-src", active: 0 });
                                        return (
                                            (function () {
                                                for (var n = Object(c.a)("div", { class: "".concat("tab-slider", "-tabs"), parent: t }), r = 0; r < i.total; r++) o.push(new dr(n, r, e[r].title, i));
                                            })(),
                                            Object(kt.a)(
                                                i.outer,
                                                function () {
                                                    i.start();
                                                },
                                                function () {}
                                            ),
                                            {
                                                destroy: function () {
                                                    i.destroy(), n.remove();
                                                }.bind(this),
                                                slider: i,
                                            }
                                        );
                                    })(this, t);
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    br(Or(i.prototype), "disconnectedCallback", this).call(this), this._slider && this._slider.destroy();
                                },
                            },
                        ]) && vr(e.prototype, n),
                        r && vr(e, r),
                        i
                    );
                })(r.a);
            jr([Object(r.c)({ attribute: "slides" })], Sr.prototype, "slidesStr", void 0), (Sr = jr([Object(r.b)(Rr)], Sr));
            var xr = n(52);
            Object(xr.a)();
            // COMMENT CODE END
        },
        87: function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return c;
            });
            var r = n(1);
            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            var i = n(0).a.viewport,
                c = (function () {
                    function t(e) {
                        !(function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                            (this._width = 0),
                            (this._height = 0),
                            (this._dpr = 1),
                            (this._parent = e),
                            this._create();
                    }
                    var e, n, c;
                    return (
                        (e = t),
                        (n = [
                            {
                                key: "_create",
                                value: function () {
                                    (this._canvas = Object(r.a)("canvas")), (this._ctx = this._canvas.getContext("2d"));
                                },
                            },
                            {
                                key: "updateSize",
                                value: function (t, e) {
                                    this._dpr = i.dprMobile;
                                    var n = this._dpr,
                                        r = 0,
                                        o = 0;
                                    t && e ? ((r = t), (o = e)) : this._parent ? ((r = this._parent.clientWidth * n), (o = this._parent.clientHeight * n)) : ((r = i.size[0] * n), (o = i.size[1] * n)),
                                        (this._width = r),
                                        (this._height = o),
                                        (this._canvas.width = r),
                                        (this._canvas.height = o);
                                },
                            },
                            {
                                key: "canvas",
                                get: function () {
                                    return this._canvas;
                                },
                            },
                            {
                                key: "ctx",
                                get: function () {
                                    return this._ctx;
                                },
                            },
                            {
                                key: "width",
                                get: function () {
                                    return this._width;
                                },
                            },
                            {
                                key: "height",
                                get: function () {
                                    return this._height;
                                },
                            },
                            {
                                key: "dpr",
                                get: function () {
                                    return this._dpr;
                                },
                            },
                        ]) && o(e.prototype, n),
                        c && o(e, c),
                        t
                    );
                })();
        },
    },
]);