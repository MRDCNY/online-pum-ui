/* 20140213 1939 */
/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

(function () {
    eval("var djConfig = {locale:\"en-us\",ibmForceConfig:\"\",isDebug:false,parseOnLoad:false,baseUrl:\"./\",modulePaths:{\"ibmweb\":\"//1.www.s81c.com/common/js/dojo/1.6/ibmweb\",\"ext\":\"//1.www.s81c.com/common/js/dojo/1.6/ext\"},useXDomain:true,xdWaitSeconds:15,xdDojoPath:\"//1.www.s81c.com/common/js/dojo/1.6\"};");
    var _1 = null;
    if ((_1 || (typeof djConfig != "undefined" && djConfig.scopeMap)) && (typeof window != "undefined")) {
        var _2 = "",
            _3 = "",
            _4 = "",
            _5 = {}, _6 = {};
        _1 = _1 || djConfig.scopeMap;
        for (var i = 0; i < _1.length; i++) {
            var _7 = _1[i];
            _2 += "var " + _7[0] + " = {}; " + _7[1] + " = " + _7[0] + ";" + _7[1] + "._scopeName = '" + _7[1] + "';";
            _3 += (i == 0 ? "" : ",") + _7[0];
            _4 += (i == 0 ? "" : ",") + _7[1];
            _5[_7[0]] = _7[1];
            _6[_7[1]] = _7[0];
        }
        eval(_2 + "dojo._scopeArgs = [" + _4 + "];");
        dojo._scopePrefixArgs = _3;
        dojo._scopePrefix = "(function(" + _3 + "){";
        dojo._scopeSuffix = "})(" + _4 + ")";
        dojo._scopeMap = _5;
        dojo._scopeMapRev = _6;
    }(function () {
        if (typeof this["loadFirebugConsole"] == "function") {
            this["loadFirebugConsole"]();
        } else {
            this.console = this.console || {};
            var cn = ["assert", "count", "debug", "dir", "dirxml", "error", "group", "groupEnd", "info", "profile", "profileEnd", "time", "timeEnd", "trace", "warn", "log"];
            var i = 0,
                tn;
            while ((tn = cn[i++])) {
                if (!console[tn]) {
                    (function () {
                        var _8 = tn + "";
                        console[_8] = ("log" in console) ? function () {
                            var a = Array.apply({}, arguments);
                            a.unshift(_8 + ":");
                            console["log"](a.join(" "));
                        } : function () {};
                        console[_8]._fake = true;
                    })();
                }
            }
        }
        if (typeof dojo == "undefined") {
            dojo = {
                _scopeName: "dojo",
                _scopePrefix: "",
                _scopePrefixArgs: "",
                _scopeSuffix: "",
                _scopeMap: {},
                _scopeMapRev: {}
            };
        }
        var d = dojo;
        if (typeof dijit == "undefined") {
            dijit = {
                _scopeName: "dijit"
            };
        }
        if (typeof dojox == "undefined") {
            dojox = {
                _scopeName: "dojox"
            };
        }
        if (!d._scopeArgs) {
            d._scopeArgs = [dojo, dijit, dojox];
        }
        d.global = this;
        d.config = {
            isDebug: false,
            debugAtAllCosts: false
        };
        var _9 = typeof djConfig != "undefined" ? djConfig : typeof dojoConfig != "undefined" ? dojoConfig : null;
        if (_9) {
            for (var c in _9) {
                d.config[c] = _9[c];
            }
        }
        dojo.locale = d.config.locale;
        var _a = "$Rev: 23843 $".match(/\d+/);
        dojo.version = {
            major: 1,
            minor: 6,
            patch: 0,
            flag: "-ibm",
            revision: _a ? +_a[0] : NaN,
            toString: function () {
                with(d.version) {
                    return major + "." + minor + "." + patch + flag + " (" + revision + ")";
                }
            }
        };
        if (typeof OpenAjax != "undefined") {
            OpenAjax.hub.registerLibrary(dojo._scopeName, "http://dojotoolkit.org", d.version.toString());
        }
        var _b, _c, _d = {};
        for (var i in {
            toString: 1
        }) {
            _b = [];
            break;
        }
        dojo._extraNames = _b = _b || ["hasOwnProperty", "valueOf", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "constructor"];
        _c = _b.length;
        dojo._mixin = function (_e, _f) {
            var _10, s, i;
            for (_10 in _f) {
                s = _f[_10];
                if (!(_10 in _e) || (_e[_10] !== s && (!(_10 in _d) || _d[_10] !== s))) {
                    _e[_10] = s;
                }
            }
            if (_c && _f) {
                for (i = 0; i < _c; ++i) {
                    _10 = _b[i];
                    s = _f[_10];
                    if (!(_10 in _e) || (_e[_10] !== s && (!(_10 in _d) || _d[_10] !== s))) {
                        _e[_10] = s;
                    }
                }
            }
            return _e;
        };
        dojo.mixin = function (obj, _11) {
            if (!obj) {
                obj = {};
            }
            for (var i = 1, l = arguments.length; i < l; i++) {
                d._mixin(obj, arguments[i]);
            }
            return obj;
        };
        dojo._getProp = function (_12, _13, _14) {
            var obj = _14 || d.global;
            for (var i = 0, p; obj && (p = _12[i]); i++) {
                if (i == 0 && d._scopeMap[p]) {
                    p = d._scopeMap[p];
                }
                obj = (p in obj ? obj[p] : (_13 ? obj[p] = {} : undefined));
            }
            return obj;
        };
        dojo.setObject = function (_15, _16, _17) {
            var _18 = _15.split("."),
                p = _18.pop(),
                obj = d._getProp(_18, true, _17);
            return obj && p ? (obj[p] = _16) : undefined;
        };
        dojo.getObject = function (_19, _1a, _1b) {
            return d._getProp(_19.split("."), _1a, _1b);
        };
        dojo.exists = function (_1c, obj) {
            return d.getObject(_1c, false, obj) !== undefined;
        };
        dojo["eval"] = function (_1d) {
            return d.global.eval ? d.global.eval(_1d) : eval(_1d);
        };
        d.deprecated = d.experimental = function () {};
    })();
    (function () {
        var d = dojo,
            _1e;
        d.mixin(d, {
            _loadedModules: {},
            _inFlightCount: 0,
            _hasResource: {},
            _modulePrefixes: {
                dojo: {
                    name: "dojo",
                    value: "."
                },
                doh: {
                    name: "doh",
                    value: "../util/doh"
                },
                tests: {
                    name: "tests",
                    value: "tests"
                }
            },
            _moduleHasPrefix: function (_1f) {
                var mp = d._modulePrefixes;
                return !!(mp[_1f] && mp[_1f].value);
            },
            _getModulePrefix: function (_20) {
                var mp = d._modulePrefixes;
                if (d._moduleHasPrefix(_20)) {
                    return mp[_20].value;
                }
                return _20;
            },
            _loadedUrls: [],
            _postLoad: false,
            _loaders: [],
            _unloaders: [],
            _loadNotifying: false
        });
        dojo._loadUriAndCheck = function (uri, _21, cb) {
            var ok = false;
            try {
                ok = d._loadUri(uri, cb);
            } catch (e) {}
            return !!(ok && d._loadedModules[_21]);
        };
        dojo.loaded = function () {
            d._loadNotifying = true;
            d._postLoad = true;
            var mll = d._loaders;
            d._loaders = [];
            for (var x = 0; x < mll.length; x++) {
                mll[x]();
            }
            d._loadNotifying = false;
            if (d._postLoad && d._inFlightCount == 0 && mll.length) {
                d._callLoaded();
            }
        };
        dojo.unloaded = function () {
            var mll = d._unloaders;
            while (mll.length) {
                (mll.pop())();
            }
        };
        d._onto = function (arr, obj, fn) {
            if (!fn) {
                arr.push(obj);
            } else {
                if (fn) {
                    var _22 = (typeof fn == "string") ? obj[fn] : fn;
                    arr.push(function () {
                        _22.call(obj);
                    });
                }
            }
        };
        dojo.ready = dojo.addOnLoad = function (obj, _23) {
            d._onto(d._loaders, obj, _23);
            if (d._postLoad && d._inFlightCount == 0 && !d._loadNotifying) {
                d._callLoaded();
            }
        };
        var dca = d.config.addOnLoad;
        if (dca) {
            d.addOnLoad[(dca instanceof Array ? "apply" : "call")](d, dca);
        }
        dojo._modulesLoaded = function () {
            if (d._postLoad) {
                return;
            }
            if (d._inFlightCount > 0) {
                return;
            }
            d._callLoaded();
        };
        dojo._callLoaded = function () {
            if (typeof setTimeout == "object" || (d.config.useXDomain && d.isOpera)) {
                setTimeout(d.isAIR ? function () {
                    d.loaded();
                } : d._scopeName + ".loaded();", 0);
            } else {
                d.loaded();
            }
        };
        dojo._getModuleSymbols = function (_24) {
            var _25 = _24.split(".");
            for (var i = _25.length; i > 0; i--) {
                var _26 = _25.slice(0, i).join(".");
                if (i == 1 && !d._moduleHasPrefix(_26)) {
                    _25[0] = "../" + _25[0];
                } else {
                    var _27 = d._getModulePrefix(_26);
                    if (_27 != _26) {
                        _25.splice(0, i, _27);
                        break;
                    }
                }
            }
            return _25;
        };
        dojo._global_omit_module_check = false;
        dojo.loadInit = function (_28) {
            _28();
        };
        dojo._loadModule = dojo.require = function (_29, _2a) {
            _2a = d._global_omit_module_check || _2a;
            var _2b = d._loadedModules[_29];
            if (_2b) {
                return _2b;
            }
            var _2c = d._getModuleSymbols(_29).join("/") + ".js";
            var _2d = !_2a ? _29 : null;
            var ok = d._loadPath(_2c, _2d);
            if (!ok && !_2a) {
                throw new Error("Could not load '" + _29 + "'; last tried '" + _2c + "'");
            }
            if (!_2a && !d._isXDomain) {
                _2b = d._loadedModules[_29];
                if (!_2b) {
                    throw new Error("symbol '" + _29 + "' is not defined after loading '" + _2c + "'");
                }
            }
            return _2b;
        };
        dojo.provide = function (_2e) {
            _2e = _2e + "";
            return (d._loadedModules[_2e] = d.getObject(_2e, true));
        };
        dojo.platformRequire = function (_2f) {
            var _30 = _2f.common || [];
            var _31 = _30.concat(_2f[d._name] || _2f["default"] || []);
            for (var x = 0; x < _31.length; x++) {
                var _32 = _31[x];
                if (_32.constructor == Array) {
                    d._loadModule.apply(d, _32);
                } else {
                    d._loadModule(_32);
                }
            }
        };
        dojo.requireIf = function (_33, _34) {
            if (_33 === true) {
                var _35 = [];
                for (var i = 1; i < arguments.length; i++) {
                    _35.push(arguments[i]);
                }
                d.require.apply(d, _35);
            }
        };
        dojo.requireAfterIf = d.requireIf;
        dojo.registerModulePath = function (_36, _37) {
            d._modulePrefixes[_36] = {
                name: _36,
                value: _37
            };
        };
        if (typeof dojo.config["useXDomain"] == "undefined") {
            dojo.config.useXDomain = true;
        }
        dojo.registerModulePath("dojo", "//1.www.s81c.com/common/js/dojo/1.6/dojo");
        dojo.registerModulePath("dijit", "//1.www.s81c.com/common/js/dojo/1.6/dijit");
        dojo.registerModulePath("dojox", "//1.www.s81c.com/common/js/dojo/1.6/dojox");
        dojo.requireLocalization = function (_38, _39, _3a, _3b) {
            d.require("dojo.i18n");
            d.i18n._requireLocalization.apply(d.hostenv, arguments);
        };
        var ore = new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),
            ire = new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");
        dojo._Url = function () {
            var n = null,
                _3c = arguments,
                uri = [_3c[0]];
            for (var i = 1; i < _3c.length; i++) {
                if (!_3c[i]) {
                    continue;
                }
                var _3d = new d._Url(_3c[i] + ""),
                    _3e = new d._Url(uri[0] + "");
                if (_3d.path == "" && !_3d.scheme && !_3d.authority && !_3d.query) {
                    if (_3d.fragment != n) {
                        _3e.fragment = _3d.fragment;
                    }
                    _3d = _3e;
                } else {
                    if (!_3d.scheme) {
                        _3d.scheme = _3e.scheme;
                        if (!_3d.authority) {
                            _3d.authority = _3e.authority;
                            if (_3d.path.charAt(0) != "/") {
                                var _3f = _3e.path.substring(0, _3e.path.lastIndexOf("/") + 1) + _3d.path;
                                var _40 = _3f.split("/");
                                for (var j = 0; j < _40.length; j++) {
                                    if (_40[j] == ".") {
                                        if (j == _40.length - 1) {
                                            _40[j] = "";
                                        } else {
                                            _40.splice(j, 1);
                                            j--;
                                        }
                                    } else {
                                        if (j > 0 && !(j == 1 && _40[0] == "") && _40[j] == ".." && _40[j - 1] != "..") {
                                            if (j == (_40.length - 1)) {
                                                _40.splice(j, 1);
                                                _40[j - 1] = "";
                                            } else {
                                                _40.splice(j - 1, 2);
                                                j -= 2;
                                            }
                                        }
                                    }
                                }
                                _3d.path = _40.join("/");
                            }
                        }
                    }
                }
                uri = [];
                if (_3d.scheme) {
                    uri.push(_3d.scheme, ":");
                }
                if (_3d.authority) {
                    uri.push("//", _3d.authority);
                }
                uri.push(_3d.path);
                if (_3d.query) {
                    uri.push("?", _3d.query);
                }
                if (_3d.fragment) {
                    uri.push("#", _3d.fragment);
                }
            }
            this.uri = uri.join("");
            var r = this.uri.match(ore);
            this.scheme = r[2] || (r[1] ? "" : n);
            this.authority = r[4] || (r[3] ? "" : n);
            this.path = r[5];
            this.query = r[7] || (r[6] ? "" : n);
            this.fragment = r[9] || (r[8] ? "" : n);
            if (this.authority != n) {
                r = this.authority.match(ire);
                this.user = r[3] || n;
                this.password = r[4] || n;
                this.host = r[6] || r[7];
                this.port = r[9] || n;
            }
        };
        dojo._Url.prototype.toString = function () {
            return this.uri;
        };
        dojo.moduleUrl = function (_41, url) {
            var loc = d._getModuleSymbols(_41).join("/");
            if (!loc) {
                return null;
            }
            if (loc.lastIndexOf("/") != loc.length - 1) {
                loc += "/";
            }
            var _42 = loc.indexOf(":");
            if (loc.charAt(0) != "/" && (_42 == -1 || _42 > loc.indexOf("/"))) {
                loc = d.baseUrl + loc;
            }
            return new d._Url(loc, url);
        };
    })();
    dojo.provide("dojo._base._loader.loader_xd");
    dojo._xdReset = function () {
        dojo._isXDomain = dojo.config.useXDomain || false;
        dojo._xdClearInterval();
        dojo._xdInFlight = {};
        dojo._xdOrderedReqs = [];
        dojo._xdDepMap = {};
        dojo._xdContents = [];
        dojo._xdDefList = [];
    };
    dojo._xdClearInterval = function () {
        if (dojo._xdTimer) {
            clearInterval(dojo._xdTimer);
            dojo._xdTimer = 0;
        }
    };
    dojo._xdReset();
    dojo._xdCreateResource = function (_43, _44, _45) {
        var _46 = _43.replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg, "");
        var _47 = [];
        var _48 = /dojo.(require|requireIf|provide|requireAfterIf|platformRequire|requireLocalization)\s*\(([\w\W]*?)\)/mg;
        var _49;
        while ((_49 = _48.exec(_46)) != null) {
            if (_49[1] == "requireLocalization") {
                eval(_49[0]);
            } else {
                _47.push("\"" + _49[1] + "\", " + _49[2]);
            }
        }
        var _4a = [];
        _4a.push(dojo._scopeName + "._xdResourceLoaded(function(" + dojo._scopePrefixArgs + "){\n");
        var _4b = dojo._xdExtractLoadInits(_43);
        if (_4b) {
            _43 = _4b[0];
            for (var i = 1; i < _4b.length; i++) {
                _4a.push(_4b[i] + ";\n");
            }
        }
        _4a.push("return {");
        if (_47.length > 0) {
            _4a.push("depends: [");
            for (i = 0; i < _47.length; i++) {
                if (i > 0) {
                    _4a.push(",\n");
                }
                _4a.push("[" + _47[i] + "]");
            }
            _4a.push("],");
        }
        _4a.push("\ndefineResource: function(" + dojo._scopePrefixArgs + "){");
        if (!dojo.config["debugAtAllCosts"] || _44 == "dojo._base._loader.loader_debug") {
            _4a.push(_43);
        }
        _4a.push("\n}, resourceName: '" + _44 + "', resourcePath: '" + _45 + "'};});");
        return _4a.join("");
    };
    dojo._xdExtractLoadInits = function (_4c) {
        var _4d = /dojo.loadInit\s*\(/g;
        _4d.lastIndex = 0;
        var _4e = /[\(\)]/g;
        _4e.lastIndex = 0;
        var _4f = [];
        var _50;
        while ((_50 = _4d.exec(_4c))) {
            _4e.lastIndex = _4d.lastIndex;
            var _51 = 1;
            var _52;
            while ((_52 = _4e.exec(_4c))) {
                if (_52[0] == ")") {
                    _51 -= 1;
                } else {
                    _51 += 1;
                }
                if (_51 == 0) {
                    break;
                }
            }
            if (_51 != 0) {
                throw "unmatched paren around character " + _4e.lastIndex + " in: " + _4c;
            }
            var _53 = _4d.lastIndex - _50[0].length;
            _4f.push(_4c.substring(_53, _4e.lastIndex));
            var _54 = _4e.lastIndex - _53;
            _4c = _4c.substring(0, _53) + _4c.substring(_4e.lastIndex, _4c.length);
            _4d.lastIndex = _4e.lastIndex - _54;
            _4d.lastIndex = _4e.lastIndex;
        }
        if (_4f.length > 0) {
            _4f.unshift(_4c);
        }
        return (_4f.length ? _4f : null);
    };
    dojo._xdIsXDomainPath = function (_55) {
        var _56 = _55.indexOf(":");
        var _57 = _55.indexOf("/");
        if (_56 > 0 && _56 < _57 || _55.indexOf("//") === 0) {
            return true;
        } else {
            var url = dojo.baseUrl;
            _56 = url.indexOf(":");
            _57 = url.indexOf("/");
            if (url.indexOf("//") === 0 || (_56 > 0 && _56 < _57 && (!location.host || url.indexOf("http://" + location.host) != 0))) {
                return true;
            }
        }
        return false;
    };
    dojo._loadPath = function (_58, _59, cb) {
        var _5a = dojo._xdIsXDomainPath(_58);
        dojo._isXDomain |= _5a;
        var uri = ((_58.charAt(0) == "/" || _58.match(/^\w+:/)) ? "" : dojo.baseUrl) + _58;
        try {
            return ((!_59 || dojo._isXDomain) ? dojo._loadUri(uri, cb, _5a, _59) : dojo._loadUriAndCheck(uri, _59, cb));
        } catch (e) {
            return false;
        }
    };
    dojo._xdCharSet = "utf-8";
    dojo._loadUri = function (uri, cb, _5b, _5c) {
        if (dojo._loadedUrls[uri]) {
            return 1;
        }
        if (dojo._isXDomain && _5c && _5c != "dojo.i18n") {
            dojo._xdOrderedReqs.push(_5c);
            if (_5b || uri.indexOf("/nls/") == -1) {
                dojo._xdInFlight[_5c] = true;
                dojo._inFlightCount++;
            }
            if (!dojo._xdTimer) {
                if (dojo.isAIR) {
                    dojo._xdTimer = setInterval(function () {
                        dojo._xdWatchInFlight();
                    }, 100);
                } else {
                    dojo._xdTimer = setInterval(dojo._scopeName + "._xdWatchInFlight();", 100);
                }
            }
            dojo._xdStartTime = (new Date()).getTime();
        }
        if (_5b) {
            var _5d = uri.lastIndexOf(".");
            if (_5d <= 0) {
                _5d = uri.length - 1;
            }
            var _5e = uri.substring(0, _5d) + ".xd";
            if (_5d != uri.length - 1) {
                _5e += uri.substring(_5d, uri.length);
            }
            if (dojo.isAIR) {
                _5e = _5e.replace("app:/", "/");
            }
            var _5f = document.createElement("script");
            _5f.type = "text/javascript";
            if (dojo._xdCharSet) {
                _5f.charset = dojo._xdCharSet;
            }
            _5f.src = _5e;
            if (!dojo.headElement) {
                dojo._headElement = document.getElementsByTagName("head")[0];
                if (!dojo._headElement) {
                    dojo._headElement = document.getElementsByTagName("html")[0];
                }
            }
            dojo._headElement.appendChild(_5f);
        } else {
            var _60 = dojo._getText(uri, null, true);
            if (_60 == null) {
                return 0;
            }
            if (dojo._isXDomain && uri.indexOf("/nls/") == -1 && _5c != "dojo.i18n") {
                var res = dojo._xdCreateResource(_60, _5c, uri);
                dojo.eval(res);
            } else {
                if (cb) {
                    _60 = "(" + _60 + ")";
                } else {
                    _60 = dojo._scopePrefix + _60 + dojo._scopeSuffix;
                }
                var _61 = dojo["eval"](_60 + "\r\n//@ sourceURL=" + uri);
                if (cb) {
                    cb(_61);
                }
            }
        }
        dojo._loadedUrls[uri] = true;
        dojo._loadedUrls.push(uri);
        return true;
    };
    dojo._xdResourceLoaded = function (res) {
        res = res.apply(dojo.global, dojo._scopeArgs);
        var _62 = res.depends;
        var _63 = null;
        var _64 = null;
        var _65 = [];
        if (_62 && _62.length > 0) {
            var dep = null;
            var _66 = 0;
            var _67 = false;
            for (var i = 0; i < _62.length; i++) {
                dep = _62[i];
                if (dep[0] == "provide") {
                    _65.push(dep[1]);
                } else {
                    if (!_63) {
                        _63 = [];
                    }
                    if (!_64) {
                        _64 = [];
                    }
                    var _68 = dojo._xdUnpackDependency(dep);
                    if (_68.requires) {
                        _63 = _63.concat(_68.requires);
                    }
                    if (_68.requiresAfter) {
                        _64 = _64.concat(_68.requiresAfter);
                    }
                }
                var _69 = dep[0];
                var _6a = _69.split(".");
                if (_6a.length == 2) {
                    dojo[_6a[0]][_6a[1]].apply(dojo[_6a[0]], dep.slice(1));
                } else {
                    dojo[_69].apply(dojo, dep.slice(1));
                }
            }
            if (_65.length == 1 && _65[0] == "dojo._base._loader.loader_debug") {
                res.defineResource(dojo);
            } else {
                var _6b = dojo._xdContents.push({
                    content: res.defineResource,
                    resourceName: res["resourceName"],
                    resourcePath: res["resourcePath"],
                    isDefined: false
                }) - 1;
                for (i = 0; i < _65.length; i++) {
                    dojo._xdDepMap[_65[i]] = {
                        requires: _63,
                        requiresAfter: _64,
                        contentIndex: _6b
                    };
                }
            }
            for (i = 0; i < _65.length; i++) {
                dojo._xdInFlight[_65[i]] = false;
            }
        }
    };
    dojo._xdLoadFlattenedBundle = function (_6c, _6d, _6e, _6f) {
        _6e = _6e || "root";
        var _70 = dojo.i18n.normalizeLocale(_6e).replace("-", "_");
        var _71 = [_6c, "nls", _6d].join(".");
        var _72 = dojo["provide"](_71);
        _72[_70] = _6f;
        var _73 = [_6c, _70, _6d].join(".");
        var _74 = dojo._xdBundleMap[_73];
        if (_74) {
            for (var _75 in _74) {
                _72[_75] = _6f;
            }
        }
    };
    dojo._xdInitExtraLocales = function () {
        var _76 = dojo.config.extraLocale;
        if (_76) {
            if (!_76 instanceof Array) {
                _76 = [_76];
            }
            dojo._xdReqLoc = dojo.xdRequireLocalization;
            dojo.xdRequireLocalization = function (m, b, _77, _78) {
                dojo._xdReqLoc(m, b, _77, _78);
                if (_77) {
                    return;
                }
                for (var i = 0; i < _76.length; i++) {
                    dojo._xdReqLoc(m, b, _76[i], _78);
                }
            };
        }
    };
    dojo._xdBundleMap = {};
    dojo.xdRequireLocalization = function (_79, _7a, _7b, _7c) {
        if (dojo._xdInitExtraLocales) {
            dojo._xdInitExtraLocales();
            dojo._xdInitExtraLocales = null;
            dojo.xdRequireLocalization.apply(dojo, arguments);
            return;
        }
        var _7d = _7c.split(",");
        var _7e = dojo.i18n.normalizeLocale(_7b);
        var _7f = "";
        for (var i = 0; i < _7d.length; i++) {
            if (_7e.indexOf(_7d[i]) == 0) {
                if (_7d[i].length > _7f.length) {
                    _7f = _7d[i];
                }
            }
        }
        var _80 = _7f.replace("-", "_");
        var _81 = dojo.getObject([_79, "nls", _7a].join("."));
        if (!_81 || !_81[_80]) {
            var _82 = [_79, (_80 || "root"), _7a].join(".");
            var _83 = dojo._xdBundleMap[_82];
            if (!_83) {
                _83 = dojo._xdBundleMap[_82] = {};
            }
            _83[_7e.replace("-", "_")] = true;
            dojo.require(_79 + ".nls" + (_7f ? "." + _7f : "") + "." + _7a);
        }
    };
    dojo._xdRealRequireLocalization = dojo.requireLocalization;
    dojo.requireLocalization = function (_84, _85, _86, _87) {
        var _88 = dojo.moduleUrl(_84).toString();
        if (dojo._xdIsXDomainPath(_88)) {
            return dojo.xdRequireLocalization.apply(dojo, arguments);
        } else {
            return dojo._xdRealRequireLocalization.apply(dojo, arguments);
        }
    };
    dojo._xdUnpackDependency = function (dep) {
        var _89 = null;
        var _8a = null;
        switch (dep[0]) {
            case "requireIf":
            case "requireAfterIf":
                if (dep[1] === true) {
                    _89 = [{
                        name: dep[2],
                        content: null
                    }];
                }
                break;
            case "platformRequire":
                var _8b = dep[1];
                var _8c = _8b["common"] || [];
                _89 = (_8b[dojo.hostenv.name_]) ? _8c.concat(_8b[dojo.hostenv.name_] || []) : _8c.concat(_8b["default"] || []);
                if (_89) {
                    for (var i = 0; i < _89.length; i++) {
                        if (_89[i] instanceof Array) {
                            _89[i] = {
                                name: _89[i][0],
                                content: null
                            };
                        } else {
                            _89[i] = {
                                name: _89[i],
                                content: null
                            };
                        }
                    }
                }
                break;
            case "require":
                _89 = [{
                    name: dep[1],
                    content: null
                }];
                break;
            case "i18n._preloadLocalizations":
                dojo.i18n._preloadLocalizations.apply(dojo.i18n._preloadLocalizations, dep.slice(1));
                break;
        }
        if (dep[0] == "requireAfterIf" || dep[0] == "requireIf") {
            _8a = _89;
            _89 = null;
        }
        return {
            requires: _89,
            requiresAfter: _8a
        };
    };
    dojo._xdWalkReqs = function () {
        var _8d = null;
        var req;
        for (var i = 0; i < dojo._xdOrderedReqs.length; i++) {
            req = dojo._xdOrderedReqs[i];
            if (dojo._xdDepMap[req]) {
                _8d = [req];
                _8d[req] = true;
                dojo._xdEvalReqs(_8d);
            }
        }
    };
    dojo._xdEvalReqs = function (_8e) {
        while (_8e.length > 0) {
            var req = _8e[_8e.length - 1];
            var res = dojo._xdDepMap[req];
            var i, _8f, _90;
            if (res) {
                _8f = res.requires;
                if (_8f && _8f.length > 0) {
                    for (i = 0; i < _8f.length; i++) {
                        _90 = _8f[i].name;
                        if (_90 && !_8e[_90]) {
                            _8e.push(_90);
                            _8e[_90] = true;
                            dojo._xdEvalReqs(_8e);
                        }
                    }
                }
                var _91 = dojo._xdContents[res.contentIndex];
                if (!_91.isDefined) {
                    var _92 = _91.content;
                    _92["resourceName"] = _91["resourceName"];
                    _92["resourcePath"] = _91["resourcePath"];
                    dojo._xdDefList.push(_92);
                    _91.isDefined = true;
                }
                dojo._xdDepMap[req] = null;
                _8f = res.requiresAfter;
                if (_8f && _8f.length > 0) {
                    for (i = 0; i < _8f.length; i++) {
                        _90 = _8f[i].name;
                        if (_90 && !_8e[_90]) {
                            _8e.push(_90);
                            _8e[_90] = true;
                            dojo._xdEvalReqs(_8e);
                        }
                    }
                }
            }
            _8e.pop();
        }
    };
    dojo._xdWatchInFlight = function () {
        var _93 = "";
        var _94 = (dojo.config.xdWaitSeconds || 15) * 1000;
        var _95 = (dojo._xdStartTime + _94) < (new Date()).getTime();
        for (var _96 in dojo._xdInFlight) {
            if (dojo._xdInFlight[_96] === true) {
                if (_95) {
                    _93 += _96 + " ";
                } else {
                    return;
                }
            }
        }
        dojo._xdClearInterval();
        if (_95) {
            throw "Could not load cross-domain resources: " + _93;
        }
        dojo._xdWalkReqs();
        var _97 = dojo._xdDefList.length;
        for (var i = 0; i < _97; i++) {
            var _98 = dojo._xdDefList[i];
            if (dojo.config["debugAtAllCosts"] && _98["resourceName"]) {
                if (!dojo["_xdDebugQueue"]) {
                    dojo._xdDebugQueue = [];
                }
                dojo._xdDebugQueue.push({
                    resourceName: _98.resourceName,
                    resourcePath: _98.resourcePath
                });
            } else {
                _98.apply(dojo.global, dojo._scopeArgs);
            }
        }
        for (i = 0; i < dojo._xdContents.length; i++) {
            var _99 = dojo._xdContents[i];
            if (_99.content && !_99.isDefined) {
                _99.content.apply(dojo.global, dojo._scopeArgs);
            }
        }
        dojo._xdReset();
        if (dojo["_xdDebugQueue"] && dojo._xdDebugQueue.length > 0) {
            dojo._xdDebugFileLoaded();
        } else {
            dojo._xdNotifyLoaded();
        }
    };
    dojo._xdNotifyLoaded = function () {
        for (var _9a in dojo._xdInFlight) {
            if (typeof dojo._xdInFlight[_9a] == "boolean") {
                return;
            }
        }
        dojo._inFlightCount = 0;
        if (dojo._initFired && !dojo._loadNotifying) {
            dojo._callLoaded();
        }
    };
    if (typeof window != "undefined") {
        dojo.isBrowser = true;
        dojo._name = "browser";
        (function () {
            var d = dojo;
            if (document && document.getElementsByTagName) {
                var _9b = document.getElementsByTagName("script");
                var _9c = /dojo(\.xd)?\.js(\W|$)/i;
                for (var i = 0; i < _9b.length; i++) {
                    var src = _9b[i].getAttribute("src");
                    if (!src) {
                        continue;
                    }
                    var m = src.match(_9c);
                    if (m) {
                        if (!d.config.baseUrl) {
                            d.config.baseUrl = src.substring(0, m.index);
                        }
                        var cfg = (_9b[i].getAttribute("djConfig") || _9b[i].getAttribute("data-dojo-config"));
                        if (cfg) {
                            var _9d = eval("({ " + cfg + " })");
                            for (var x in _9d) {
                                dojo.config[x] = _9d[x];
                            }
                        }
                        break;
                    }
                }
            }
            d.baseUrl = d.config.baseUrl;
            var n = navigator;
            var dua = n.userAgent,
                dav = n.appVersion,
                tv = parseFloat(dav);
            if (dua.indexOf("Opera") >= 0) {
                d.isOpera = tv;
            }
            if (dua.indexOf("AdobeAIR") >= 0) {
                d.isAIR = 1;
            }
            d.isKhtml = (dav.indexOf("Konqueror") >= 0) ? tv : 0;
            d.isWebKit = parseFloat(dua.split("WebKit/")[1]) || undefined;
            d.isChrome = parseFloat(dua.split("Chrome/")[1]) || undefined;
            d.isMac = dav.indexOf("Macintosh") >= 0;
            var _9e = Math.max(dav.indexOf("WebKit"), dav.indexOf("Safari"), 0);
            if (_9e && !dojo.isChrome) {
                d.isSafari = parseFloat(dav.split("Version/")[1]);
                if (!d.isSafari || parseFloat(dav.substr(_9e + 7)) <= 419.3) {
                    d.isSafari = 2;
                }
            }
            if (dua.indexOf("Gecko") >= 0 && !d.isKhtml && !d.isWebKit) {
                d.isMozilla = d.isMoz = tv;
            }
            if (d.isMoz) {
                d.isFF = parseFloat(dua.split("Firefox/")[1] || dua.split("Minefield/")[1]) || undefined;
            }
            if (document.all && !d.isOpera) {
                d.isIE = parseFloat(dav.split("MSIE ")[1]) || undefined;
                var _9f = document.documentMode;
                if (_9f && _9f != 5 && Math.floor(d.isIE) != _9f) {
                    d.isIE = _9f;
                }
            }
            if (dojo.isIE && window.location.protocol === "file:") {
                dojo.config.ieForceActiveXXhr = true;
            }
            d.isQuirks = document.compatMode == "BackCompat";
            d.locale = dojo.config.locale || (d.isIE ? n.userLanguage : n.language).toLowerCase();
            d._XMLHTTP_PROGIDS = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"];
            d._xhrObj = function () {
                var _a0, _a1;
                if (!dojo.isIE || !dojo.config.ieForceActiveXXhr) {
                    try {
                        _a0 = new XMLHttpRequest();
                    } catch (e) {}
                }
                if (!_a0) {
                    for (var i = 0; i < 3; ++i) {
                        var _a2 = d._XMLHTTP_PROGIDS[i];
                        try {
                            _a0 = new ActiveXObject(_a2);
                        } catch (e) {
                            _a1 = e;
                        }
                        if (_a0) {
                            d._XMLHTTP_PROGIDS = [_a2];
                            break;
                        }
                    }
                }
                if (!_a0) {
                    throw new Error("XMLHTTP not available: " + _a1);
                }
                return _a0;
            };
            d._isDocumentOk = function (_a3) {
                var _a4 = _a3.status || 0;
                return (_a4 >= 200 && _a4 < 300) || _a4 == 304 || _a4 == 1223 || !_a4;
            };
            var _a5 = window.location + "";
            var _a6 = document.getElementsByTagName("base");
            var _a7 = (_a6 && _a6.length > 0);
            d._getText = function (uri, _a8) {
                var _a9 = d._xhrObj();
                if (!_a7 && dojo._Url) {
                    uri = (new dojo._Url(_a5, uri)).toString();
                }
                if (d.config.cacheBust) {
                    uri += "";
                    uri += (uri.indexOf("?") == -1 ? "?" : "&") + String(d.config.cacheBust).replace(/\W+/g, "");
                }
                _a9.open("GET", uri, false);
                try {
                    _a9.send(null);
                    if (!d._isDocumentOk(_a9)) {
                        var err = Error("Unable to load " + uri + " status:" + _a9.status);
                        err.status = _a9.status;
                        err.responseText = _a9.responseText;
                        throw err;
                    }
                } catch (e) {
                    if (_a8) {
                        return null;
                    }
                    throw e;
                }
                return _a9.responseText;
            };
            var _aa = window;
            var _ab = function (_ac, fp) {
                var _ad = _aa.attachEvent || _aa.addEventListener;
                _ac = _aa.attachEvent ? _ac : _ac.substring(2);
                _ad(_ac, function () {
                    fp.apply(_aa, arguments);
                }, false);
            };
            d._windowUnloaders = [];
            d.windowUnloaded = function () {
                var mll = d._windowUnloaders;
                while (mll.length) {
                    (mll.pop())();
                }
                d = null;
            };
            var _ae = 0;
            d.addOnWindowUnload = function (obj, _af) {
                d._onto(d._windowUnloaders, obj, _af);
                if (!_ae) {
                    _ae = 1;
                    _ab("onunload", d.windowUnloaded);
                }
            };
            var _b0 = 0;
            d.addOnUnload = function (obj, _b1) {
                d._onto(d._unloaders, obj, _b1);
                if (!_b0) {
                    _b0 = 1;
                    _ab("onbeforeunload", dojo.unloaded);
                }
            };
        })();
        dojo._initFired = false;
        dojo._loadInit = function (e) {
            if (dojo._scrollIntervalId) {
                clearInterval(dojo._scrollIntervalId);
                dojo._scrollIntervalId = 0;
            }
            if (!dojo._initFired) {
                dojo._initFired = true;
                if (!dojo.config.afterOnLoad && window.detachEvent) {
                    window.detachEvent("onload", dojo._loadInit);
                }
                if (dojo._inFlightCount == 0) {
                    dojo._modulesLoaded();
                }
            }
        };
        if (!dojo.config.afterOnLoad) {
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", dojo._loadInit, false);
                window.addEventListener("load", dojo._loadInit, false);
            } else {
                if (window.attachEvent) {
                    window.attachEvent("onload", dojo._loadInit);
                    if (!dojo.config.skipIeDomLoaded && self === self.top) {
                        dojo._scrollIntervalId = setInterval(function () {
                            try {
                                if (document.body) {
                                    document.documentElement.doScroll("left");
                                    dojo._loadInit();
                                }
                            } catch (e) {}
                        }, 30);
                    }
                }
            }
        }
        if (dojo.isIE) {
            try {
                (function () {
                    document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
                    var _b2 = ["*", "group", "roundrect", "oval", "shape", "rect", "imagedata", "path", "textpath", "text"],
                        i = 0,
                        l = 1,
                        s = document.createStyleSheet();
                    if (dojo.isIE >= 8) {
                        i = 1;
                        l = _b2.length;
                    }
                    for (; i < l; ++i) {
                        s.addRule("v\\:" + _b2[i], "behavior:url(#default#VML); display:inline-block");
                    }
                })();
            } catch (e) {}
        }
    }(function () {
        var mp = dojo.config["modulePaths"];
        if (mp) {
            for (var _b3 in mp) {
                dojo.registerModulePath(_b3, mp[_b3]);
            }
        }
    })();
    if (dojo.config.isDebug) {
        dojo.require("dojo._firebug.firebug");
    }
    if (dojo.config.debugAtAllCosts) {
        dojo.require("dojo._base._loader.loader_debug");
    }
    if (!dojo._hasResource["dojo._base.lang"]) {
        dojo._hasResource["dojo._base.lang"] = true;
        dojo.provide("dojo._base.lang");
        (function () {
            var d = dojo,
                _b4 = Object.prototype.toString;
            dojo.isString = function (it) {
                return (typeof it == "string" || it instanceof String);
            };
            dojo.isArray = function (it) {
                return it && (it instanceof Array || typeof it == "array");
            };
            dojo.isFunction = function (it) {
                return _b4.call(it) === "[object Function]";
            };
            dojo.isObject = function (it) {
                return it !== undefined && (it === null || typeof it == "object" || d.isArray(it) || d.isFunction(it));
            };
            dojo.isArrayLike = function (it) {
                return it && it !== undefined && !d.isString(it) && !d.isFunction(it) && !(it.tagName && it.tagName.toLowerCase() == "form") && (d.isArray(it) || isFinite(it.length));
            };
            dojo.isAlien = function (it) {
                return it && !d.isFunction(it) && /\{\s*\[native code\]\s*\}/.test(String(it));
            };
            dojo.extend = function (_b5, _b6) {
                for (var i = 1, l = arguments.length; i < l; i++) {
                    d._mixin(_b5.prototype, arguments[i]);
                }
                return _b5;
            };
            dojo._hitchArgs = function (_b7, _b8) {
                var pre = d._toArray(arguments, 2);
                var _b9 = d.isString(_b8);
                return function () {
                    var _ba = d._toArray(arguments);
                    var f = _b9 ? (_b7 || d.global)[_b8] : _b8;
                    return f && f.apply(_b7 || this, pre.concat(_ba));
                };
            };
            dojo.hitch = function (_bb, _bc) {
                if (arguments.length > 2) {
                    return d._hitchArgs.apply(d, arguments);
                }
                if (!_bc) {
                    _bc = _bb;
                    _bb = null;
                }
                if (d.isString(_bc)) {
                    _bb = _bb || d.global;
                    if (!_bb[_bc]) {
                        throw (["dojo.hitch: scope[\"", _bc, "\"] is null (scope=\"", _bb, "\")"].join(""));
                    }
                    return function () {
                        return _bb[_bc].apply(_bb, arguments || []);
                    };
                }
                return !_bb ? _bc : function () {
                    return _bc.apply(_bb, arguments || []);
                };
            };
            dojo.delegate = dojo._delegate = (function () {
                function TMP() {};
                return function (obj, _bd) {
                    TMP.prototype = obj;
                    var tmp = new TMP();
                    TMP.prototype = null;
                    if (_bd) {
                        d._mixin(tmp, _bd);
                    }
                    return tmp;
                };
            })();
            var _be = function (obj, _bf, _c0) {
                return (_c0 || []).concat(Array.prototype.slice.call(obj, _bf || 0));
            };
            var _c1 = function (obj, _c2, _c3) {
                var arr = _c3 || [];
                for (var x = _c2 || 0; x < obj.length; x++) {
                    arr.push(obj[x]);
                }
                return arr;
            };
            dojo._toArray = d.isIE ? function (obj) {
                return ((obj.item) ? _c1 : _be).apply(this, arguments);
            } : _be;
            dojo.partial = function (_c4) {
                var arr = [null];
                return d.hitch.apply(d, arr.concat(d._toArray(arguments)));
            };
            var _c5 = d._extraNames,
                _c6 = _c5.length,
                _c7 = {};
            dojo.clone = function (o) {
                if (!o || typeof o != "object" || d.isFunction(o)) {
                    return o;
                }
                if (o.nodeType && "cloneNode" in o) {
                    return o.cloneNode(true);
                }
                if (o instanceof Date) {
                    return new Date(o.getTime());
                }
                if (o instanceof RegExp) {
                    return new RegExp(o);
                }
                var r, i, l, s, _c8;
                if (d.isArray(o)) {
                    r = [];
                    for (i = 0, l = o.length; i < l; ++i) {
                        if (i in o) {
                            r.push(d.clone(o[i]));
                        }
                    }
                } else {
                    r = o.constructor ? new o.constructor() : {};
                }
                for (_c8 in o) {
                    s = o[_c8];
                    if (!(_c8 in r) || (r[_c8] !== s && (!(_c8 in _c7) || _c7[_c8] !== s))) {
                        r[_c8] = d.clone(s);
                    }
                }
                if (_c6) {
                    for (i = 0; i < _c6; ++i) {
                        _c8 = _c5[i];
                        s = o[_c8];
                        if (!(_c8 in r) || (r[_c8] !== s && (!(_c8 in _c7) || _c7[_c8] !== s))) {
                            r[_c8] = s;
                        }
                    }
                }
                return r;
            };
            dojo.trim = String.prototype.trim ? function (str) {
                return str.trim();
            } : function (str) {
                return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
            };
            var _c9 = /\{([^\}]+)\}/g;
            dojo.replace = function (_ca, map, _cb) {
                return _ca.replace(_cb || _c9, d.isFunction(map) ? map : function (_cc, k) {
                    return d.getObject(k, false, map);
                });
            };
        })();
    }
    if (!dojo._hasResource["dojo._base.array"]) {
        dojo._hasResource["dojo._base.array"] = true;
        dojo.provide("dojo._base.array");
        (function () {
            var _cd = function (arr, obj, cb) {
                return [(typeof arr == "string") ? arr.split("") : arr, obj || dojo.global, (typeof cb == "string") ? new Function("item", "index", "array", cb) : cb];
            };
            var _ce = function (_cf, arr, _d0, _d1) {
                var _d2 = _cd(arr, _d1, _d0);
                arr = _d2[0];
                for (var i = 0, l = arr.length; i < l; ++i) {
                    var _d3 = !! _d2[2].call(_d2[1], arr[i], i, arr);
                    if (_cf ^ _d3) {
                        return _d3;
                    }
                }
                return _cf;
            };
            dojo.mixin(dojo, {
                indexOf: function (_d4, _d5, _d6, _d7) {
                    var _d8 = 1,
                        end = _d4.length || 0,
                        i = 0;
                    if (_d7) {
                        i = end - 1;
                        _d8 = end = -1;
                    }
                    if (_d6 != undefined) {
                        i = _d6;
                    }
                    if ((_d7 && i > end) || i < end) {
                        for (; i != end; i += _d8) {
                            if (_d4[i] == _d5) {
                                return i;
                            }
                        }
                    }
                    return -1;
                },
                lastIndexOf: function (_d9, _da, _db) {
                    return dojo.indexOf(_d9, _da, _db, true);
                },
                forEach: function (arr, _dc, _dd) {
                    if (!arr || !arr.length) {
                        return;
                    }
                    var _de = _cd(arr, _dd, _dc);
                    arr = _de[0];
                    for (var i = 0, l = arr.length; i < l; ++i) {
                        _de[2].call(_de[1], arr[i], i, arr);
                    }
                },
                every: function (arr, _df, _e0) {
                    return _ce(true, arr, _df, _e0);
                },
                some: function (arr, _e1, _e2) {
                    return _ce(false, arr, _e1, _e2);
                },
                map: function (arr, _e3, _e4) {
                    var _e5 = _cd(arr, _e4, _e3);
                    arr = _e5[0];
                    var _e6 = (arguments[3] ? (new arguments[3]()) : []);
                    for (var i = 0, l = arr.length; i < l; ++i) {
                        _e6.push(_e5[2].call(_e5[1], arr[i], i, arr));
                    }
                    return _e6;
                },
                filter: function (arr, _e7, _e8) {
                    var _e9 = _cd(arr, _e8, _e7);
                    arr = _e9[0];
                    var _ea = [];
                    for (var i = 0, l = arr.length; i < l; ++i) {
                        if (_e9[2].call(_e9[1], arr[i], i, arr)) {
                            _ea.push(arr[i]);
                        }
                    }
                    return _ea;
                }
            });
        })();
    }
    if (!dojo._hasResource["dojo._base.declare"]) {
        dojo._hasResource["dojo._base.declare"] = true;
        dojo.provide("dojo._base.declare");
        (function () {
            var d = dojo,
                mix = d._mixin,
                op = Object.prototype,
                _eb = op.toString,
                _ec = new Function,
                _ed = 0,
                _ee = "constructor";

            function err(msg, cls) {
                throw new Error("declare" + (cls ? " " + cls : "") + ": " + msg);
            };

            function _ef(_f0, _f1) {
                var _f2 = [],
                    _f3 = [{
                        cls: 0,
                        refs: []
                    }],
                    _f4 = {}, _f5 = 1,
                    l = _f0.length,
                    i = 0,
                    j, lin, _f6, top, _f7, rec, _f8, _f9;
                for (; i < l; ++i) {
                    _f6 = _f0[i];
                    if (!_f6) {
                        err("mixin #" + i + " is unknown. Did you use dojo.require to pull it in?", _f1);
                    } else {
                        if (_eb.call(_f6) != "[object Function]") {
                            err("mixin #" + i + " is not a callable constructor.", _f1);
                        }
                    }
                    lin = _f6._meta ? _f6._meta.bases : [_f6];
                    top = 0;
                    for (j = lin.length - 1; j >= 0; --j) {
                        _f7 = lin[j].prototype;
                        if (!_f7.hasOwnProperty("declaredClass")) {
                            _f7.declaredClass = "uniqName_" + (_ed++);
                        }
                        _f8 = _f7.declaredClass;
                        if (!_f4.hasOwnProperty(_f8)) {
                            _f4[_f8] = {
                                count: 0,
                                refs: [],
                                cls: lin[j]
                            };
                            ++_f5;
                        }
                        rec = _f4[_f8];
                        if (top && top !== rec) {
                            rec.refs.push(top);
                            ++top.count;
                        }
                        top = rec;
                    }++top.count;
                    _f3[0].refs.push(top);
                }
                while (_f3.length) {
                    top = _f3.pop();
                    _f2.push(top.cls);
                    --_f5;
                    while (_f9 = top.refs, _f9.length == 1) {
                        top = _f9[0];
                        if (!top || --top.count) {
                            top = 0;
                            break;
                        }
                        _f2.push(top.cls);
                        --_f5;
                    }
                    if (top) {
                        for (i = 0, l = _f9.length; i < l; ++i) {
                            top = _f9[i];
                            if (!--top.count) {
                                _f3.push(top);
                            }
                        }
                    }
                }
                if (_f5) {
                    err("can't build consistent linearization", _f1);
                }
                _f6 = _f0[0];
                _f2[0] = _f6 ? _f6._meta && _f6 === _f2[_f2.length - _f6._meta.bases.length] ? _f6._meta.bases.length : 1 : 0;
                return _f2;
            };

            function _fa(_fb, a, f) {
                var _fc, _fd, _fe, _ff, meta, base, _100, opf, pos, _101 = this._inherited = this._inherited || {};
                if (typeof _fb == "string") {
                    _fc = _fb;
                    _fb = a;
                    a = f;
                }
                f = 0;
                _ff = _fb.callee;
                _fc = _fc || _ff.nom;
                if (!_fc) {
                    err("can't deduce a name to call inherited()", this.declaredClass);
                }
                meta = this.constructor._meta;
                _fe = meta.bases;
                pos = _101.p;
                if (_fc != _ee) {
                    if (_101.c !== _ff) {
                        pos = 0;
                        base = _fe[0];
                        meta = base._meta;
                        if (meta.hidden[_fc] !== _ff) {
                            _fd = meta.chains;
                            if (_fd && typeof _fd[_fc] == "string") {
                                err("calling chained method with inherited: " + _fc, this.declaredClass);
                            }
                            do {
                                meta = base._meta;
                                _100 = base.prototype;
                                if (meta && (_100[_fc] === _ff && _100.hasOwnProperty(_fc) || meta.hidden[_fc] === _ff)) {
                                    break;
                                }
                            } while (base = _fe[++pos]);
                            pos = base ? pos : -1;
                        }
                    }
                    base = _fe[++pos];
                    if (base) {
                        _100 = base.prototype;
                        if (base._meta && _100.hasOwnProperty(_fc)) {
                            f = _100[_fc];
                        } else {
                            opf = op[_fc];
                            do {
                                _100 = base.prototype;
                                f = _100[_fc];
                                if (f && (base._meta ? _100.hasOwnProperty(_fc) : f !== opf)) {
                                    break;
                                }
                            } while (base = _fe[++pos]);
                        }
                    }
                    f = base && f || op[_fc];
                } else {
                    if (_101.c !== _ff) {
                        pos = 0;
                        meta = _fe[0]._meta;
                        if (meta && meta.ctor !== _ff) {
                            _fd = meta.chains;
                            if (!_fd || _fd.constructor !== "manual") {
                                err("calling chained constructor with inherited", this.declaredClass);
                            }
                            while (base = _fe[++pos]) {
                                meta = base._meta;
                                if (meta && meta.ctor === _ff) {
                                    break;
                                }
                            }
                            pos = base ? pos : -1;
                        }
                    }
                    while (base = _fe[++pos]) {
                        meta = base._meta;
                        f = meta ? meta.ctor : base;
                        if (f) {
                            break;
                        }
                    }
                    f = base && f;
                }
                _101.c = f;
                _101.p = pos;
                if (f) {
                    return a === true ? f : f.apply(this, a || _fb);
                }
            };

            function _102(name, args) {
                if (typeof name == "string") {
                    return this.inherited(name, args, true);
                }
                return this.inherited(name, true);
            };

            function _103(cls) {
                var _104 = this.constructor._meta.bases;
                for (var i = 0, l = _104.length; i < l; ++i) {
                    if (_104[i] === cls) {
                        return true;
                    }
                }
                return this instanceof cls;
            };

            function _105(_106, _107) {
                var name, i = 0,
                    l = d._extraNames.length;
                for (name in _107) {
                    if (name != _ee && _107.hasOwnProperty(name)) {
                        _106[name] = _107[name];
                    }
                }
                for (; i < l; ++i) {
                    name = d._extraNames[i];
                    if (name != _ee && _107.hasOwnProperty(name)) {
                        _106[name] = _107[name];
                    }
                }
            };

            function _108(_109, _10a) {
                var name, t, i = 0,
                    l = d._extraNames.length;
                for (name in _10a) {
                    t = _10a[name];
                    if ((t !== op[name] || !(name in op)) && name != _ee) {
                        if (_eb.call(t) == "[object Function]") {
                            t.nom = name;
                        }
                        _109[name] = t;
                    }
                }
                for (; i < l; ++i) {
                    name = d._extraNames[i];
                    t = _10a[name];
                    if ((t !== op[name] || !(name in op)) && name != _ee) {
                        if (_eb.call(t) == "[object Function]") {
                            t.nom = name;
                        }
                        _109[name] = t;
                    }
                }
                return _109;
            };

            function _10b(_10c) {
                _108(this.prototype, _10c);
                return this;
            };

            function _10d(_10e, _10f) {
                return function () {
                    var a = arguments,
                        args = a,
                        a0 = a[0],
                        f, i, m, l = _10e.length,
                        _110;
                    if (!(this instanceof a.callee)) {
                        return _111(a);
                    }
                    if (_10f && (a0 && a0.preamble || this.preamble)) {
                        _110 = new Array(_10e.length);
                        _110[0] = a;
                        for (i = 0;;) {
                            a0 = a[0];
                            if (a0) {
                                f = a0.preamble;
                                if (f) {
                                    a = f.apply(this, a) || a;
                                }
                            }
                            f = _10e[i].prototype;
                            f = f.hasOwnProperty("preamble") && f.preamble;
                            if (f) {
                                a = f.apply(this, a) || a;
                            }
                            if (++i == l) {
                                break;
                            }
                            _110[i] = a;
                        }
                    }
                    for (i = l - 1; i >= 0; --i) {
                        f = _10e[i];
                        m = f._meta;
                        f = m ? m.ctor : f;
                        if (f) {
                            f.apply(this, _110 ? _110[i] : a);
                        }
                    }
                    f = this.postscript;
                    if (f) {
                        f.apply(this, args);
                    }
                };
            };

            function _112(ctor, _113) {
                return function () {
                    var a = arguments,
                        t = a,
                        a0 = a[0],
                        f;
                    if (!(this instanceof a.callee)) {
                        return _111(a);
                    }
                    if (_113) {
                        if (a0) {
                            f = a0.preamble;
                            if (f) {
                                t = f.apply(this, t) || t;
                            }
                        }
                        f = this.preamble;
                        if (f) {
                            f.apply(this, t);
                        }
                    }
                    if (ctor) {
                        ctor.apply(this, a);
                    }
                    f = this.postscript;
                    if (f) {
                        f.apply(this, a);
                    }
                };
            };

            function _114(_115) {
                return function () {
                    var a = arguments,
                        i = 0,
                        f, m;
                    if (!(this instanceof a.callee)) {
                        return _111(a);
                    }
                    for (; f = _115[i]; ++i) {
                        m = f._meta;
                        f = m ? m.ctor : f;
                        if (f) {
                            f.apply(this, a);
                            break;
                        }
                    }
                    f = this.postscript;
                    if (f) {
                        f.apply(this, a);
                    }
                };
            };

            function _116(name, _117, _118) {
                return function () {
                    var b, m, f, i = 0,
                        step = 1;
                    if (_118) {
                        i = _117.length - 1;
                        step = -1;
                    }
                    for (; b = _117[i]; i += step) {
                        m = b._meta;
                        f = (m ? m.hidden : b.prototype)[name];
                        if (f) {
                            f.apply(this, arguments);
                        }
                    }
                };
            };

            function _119(ctor) {
                _ec.prototype = ctor.prototype;
                var t = new _ec;
                _ec.prototype = null;
                return t;
            };

            function _111(args) {
                var ctor = args.callee,
                    t = _119(ctor);
                ctor.apply(t, args);
                return t;
            };
            d.declare = function (_11a, _11b, _11c) {
                if (typeof _11a != "string") {
                    _11c = _11b;
                    _11b = _11a;
                    _11a = "";
                }
                _11c = _11c || {};
                var _11d, i, t, ctor, name, _11e, _11f, _120 = 1,
                    _121 = _11b;
                if (_eb.call(_11b) == "[object Array]") {
                    _11e = _ef(_11b, _11a);
                    t = _11e[0];
                    _120 = _11e.length - t;
                    _11b = _11e[_120];
                } else {
                    _11e = [0];
                    if (_11b) {
                        if (_eb.call(_11b) == "[object Function]") {
                            t = _11b._meta;
                            _11e = _11e.concat(t ? t.bases : _11b);
                        } else {
                            err("base class is not a callable constructor.", _11a);
                        }
                    } else {
                        if (_11b !== null) {
                            err("unknown base class. Did you use dojo.require to pull it in?", _11a);
                        }
                    }
                }
                if (_11b) {
                    for (i = _120 - 1;; --i) {
                        _11d = _119(_11b);
                        if (!i) {
                            break;
                        }
                        t = _11e[i];
                        (t._meta ? _105 : mix)(_11d, t.prototype);
                        ctor = new Function;
                        ctor.superclass = _11b;
                        ctor.prototype = _11d;
                        _11b = _11d.constructor = ctor;
                    }
                } else {
                    _11d = {};
                }
                _108(_11d, _11c);
                t = _11c.constructor;
                if (t !== op.constructor) {
                    t.nom = _ee;
                    _11d.constructor = t;
                }
                for (i = _120 - 1; i; --i) {
                    t = _11e[i]._meta;
                    if (t && t.chains) {
                        _11f = mix(_11f || {}, t.chains);
                    }
                }
                if (_11d["-chains-"]) {
                    _11f = mix(_11f || {}, _11d["-chains-"]);
                }
                t = !_11f || !_11f.hasOwnProperty(_ee);
                _11e[0] = ctor = (_11f && _11f.constructor === "manual") ? _114(_11e) : (_11e.length == 1 ? _112(_11c.constructor, t) : _10d(_11e, t));
                ctor._meta = {
                    bases: _11e,
                    hidden: _11c,
                    chains: _11f,
                    parents: _121,
                    ctor: _11c.constructor
                };
                ctor.superclass = _11b && _11b.prototype;
                ctor.extend = _10b;
                ctor.prototype = _11d;
                _11d.constructor = ctor;
                _11d.getInherited = _102;
                _11d.inherited = _fa;
                _11d.isInstanceOf = _103;
                if (_11a) {
                    _11d.declaredClass = _11a;
                    d.setObject(_11a, ctor);
                }
                if (_11f) {
                    for (name in _11f) {
                        if (_11d[name] && typeof _11f[name] == "string" && name != _ee) {
                            t = _11d[name] = _116(name, _11e, _11f[name] === "after");
                            t.nom = name;
                        }
                    }
                }
                return ctor;
            };
            d.safeMixin = _108;
        })();
    }
    if (!dojo._hasResource["dojo._base.connect"]) {
        dojo._hasResource["dojo._base.connect"] = true;
        dojo.provide("dojo._base.connect");
        dojo._listener = {
            getDispatcher: function () {
                return function () {
                    var ap = Array.prototype,
                        c = arguments.callee,
                        ls = c._listeners,
                        t = c.target,
                        r = t && t.apply(this, arguments),
                        i, lls = [].concat(ls);
                    for (i in lls) {
                        if (!(i in ap)) {
                            lls[i].apply(this, arguments);
                        }
                    }
                    return r;
                };
            },
            add: function (_122, _123, _124) {
                _122 = _122 || dojo.global;
                var f = _122[_123];
                if (!f || !f._listeners) {
                    var d = dojo._listener.getDispatcher();
                    d.target = f;
                    d._listeners = [];
                    f = _122[_123] = d;
                }
                return f._listeners.push(_124);
            },
            remove: function (_125, _126, _127) {
                var f = (_125 || dojo.global)[_126];
                if (f && f._listeners && _127--) {
                    delete f._listeners[_127];
                }
            }
        };
        dojo.connect = function (obj, _128, _129, _12a, _12b) {
            var a = arguments,
                args = [],
                i = 0;
            args.push(dojo.isString(a[0]) ? null : a[i++], a[i++]);
            var a1 = a[i + 1];
            args.push(dojo.isString(a1) || dojo.isFunction(a1) ? a[i++] : null, a[i++]);
            for (var l = a.length; i < l; i++) {
                args.push(a[i]);
            }
            return dojo._connect.apply(this, args);
        };
        dojo._connect = function (obj, _12c, _12d, _12e) {
            var l = dojo._listener,
                h = l.add(obj, _12c, dojo.hitch(_12d, _12e));
            return [obj, _12c, h, l];
        };
        dojo.disconnect = function (_12f) {
            if (_12f && _12f[0] !== undefined) {
                dojo._disconnect.apply(this, _12f);
                delete _12f[0];
            }
        };
        dojo._disconnect = function (obj, _130, _131, _132) {
            _132.remove(obj, _130, _131);
        };
        dojo._topics = {};
        dojo.subscribe = function (_133, _134, _135) {
            return [_133, dojo._listener.add(dojo._topics, _133, dojo.hitch(_134, _135))];
        };
        dojo.unsubscribe = function (_136) {
            if (_136) {
                dojo._listener.remove(dojo._topics, _136[0], _136[1]);
            }
        };
        dojo.publish = function (_137, args) {
            var f = dojo._topics[_137];
            if (f) {
                f.apply(this, args || []);
            }
        };
        dojo.connectPublisher = function (_138, obj, _139) {
            var pf = function () {
                dojo.publish(_138, arguments);
            };
            return _139 ? dojo.connect(obj, _139, pf) : dojo.connect(obj, pf);
        };
    }
    if (!dojo._hasResource["dojo._base.Deferred"]) {
        dojo._hasResource["dojo._base.Deferred"] = true;
        dojo.provide("dojo._base.Deferred");
        (function () {
            var _13a = function () {};
            var _13b = Object.freeze || function () {};
            dojo.Deferred = function (_13c) {
                var _13d, _13e, _13f, head, _140;
                var _141 = (this.promise = {});

                function _142(_143) {
                    if (_13e) {
                        throw new Error("This deferred has already been resolved");
                    }
                    _13d = _143;
                    _13e = true;
                    _144();
                };

                function _144() {
                    var _145;
                    while (!_145 && _140) {
                        var _146 = _140;
                        _140 = _140.next;
                        if ((_145 = (_146.progress == _13a))) {
                            _13e = false;
                        }
                        var func = (_13f ? _146.error : _146.resolved);
                        if (func) {
                            try {
                                var _147 = func(_13d);
                                if (_147 && typeof _147.then === "function") {
                                    _147.then(dojo.hitch(_146.deferred, "resolve"), dojo.hitch(_146.deferred, "reject"));
                                    continue;
                                }
                                var _148 = _145 && _147 === undefined;
                                if (_145 && !_148) {
                                    _13f = _147 instanceof Error;
                                }
                                _146.deferred[_148 && _13f ? "reject" : "resolve"](_148 ? _13d : _147);
                            } catch (e) {
                                _146.deferred.reject(e);
                            }
                        } else {
                            if (_13f) {
                                _146.deferred.reject(_13d);
                            } else {
                                _146.deferred.resolve(_13d);
                            }
                        }
                    }
                };
                this.resolve = this.callback = function (_149) {
                    this.fired = 0;
                    this.results = [_149, null];
                    _142(_149);
                };
                this.reject = this.errback = function (_14a) {
                    _13f = true;
                    this.fired = 1;
                    _142(_14a);
                    this.results = [null, _14a];
                    if (!_14a || _14a.log !== false) {
                        (dojo.config.deferredOnError || function (x) {})(_14a);
                    }
                };
                this.progress = function (_14b) {
                    var _14c = _140;
                    while (_14c) {
                        var _14d = _14c.progress;
                        _14d && _14d(_14b);
                        _14c = _14c.next;
                    }
                };
                this.addCallbacks = function (_14e, _14f) {
                    this.then(_14e, _14f, _13a);
                    return this;
                };
                this.then = _141.then = function (_150, _151, _152) {
                    var _153 = _152 == _13a ? this : new dojo.Deferred(_141.cancel);
                    var _154 = {
                        resolved: _150,
                        error: _151,
                        progress: _152,
                        deferred: _153
                    };
                    if (_140) {
                        head = head.next = _154;
                    } else {
                        _140 = head = _154;
                    }
                    if (_13e) {
                        _144();
                    }
                    return _153.promise;
                };
                var _155 = this;
                this.cancel = _141.cancel = function () {
                    if (!_13e) {
                        var _156 = _13c && _13c(_155);
                        if (!_13e) {
                            if (!(_156 instanceof Error)) {
                                _156 = new Error(_156);
                            }
                            _156.log = false;
                            _155.reject(_156);
                        }
                    }
                };
                _13b(_141);
            };
            dojo.extend(dojo.Deferred, {
                addCallback: function (_157) {
                    return this.addCallbacks(dojo.hitch.apply(dojo, arguments));
                },
                addErrback: function (_158) {
                    return this.addCallbacks(null, dojo.hitch.apply(dojo, arguments));
                },
                addBoth: function (_159) {
                    var _15a = dojo.hitch.apply(dojo, arguments);
                    return this.addCallbacks(_15a, _15a);
                },
                fired: -1
            });
        })();
        dojo.when = function (_15b, _15c, _15d, _15e) {
            if (_15b && typeof _15b.then === "function") {
                return _15b.then(_15c, _15d, _15e);
            }
            return _15c(_15b);
        };
    }
    if (!dojo._hasResource["dojo._base.json"]) {
        dojo._hasResource["dojo._base.json"] = true;
        dojo.provide("dojo._base.json");
        dojo.fromJson = function (json) {
            return eval("(" + json + ")");
        };
        dojo._escapeString = function (str) {
            return ("\"" + str.replace(/(["\\])/g, "\\$1") + "\"").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r");
        };
        dojo.toJsonIndentStr = "\t";
        dojo.toJson = function (it, _15f, _160) {
            if (it === undefined) {
                return "undefined";
            }
            var _161 = typeof it;
            if (_161 == "number" || _161 == "boolean") {
                return it + "";
            }
            if (it === null) {
                return "null";
            }
            if (dojo.isString(it)) {
                return dojo._escapeString(it);
            }
            var _162 = arguments.callee;
            var _163;
            _160 = _160 || "";
            var _164 = _15f ? _160 + dojo.toJsonIndentStr : "";
            var tf = it.__json__ || it.json;
            if (dojo.isFunction(tf)) {
                _163 = tf.call(it);
                if (it !== _163) {
                    return _162(_163, _15f, _164);
                }
            }
            if (it.nodeType && it.cloneNode) {
                throw new Error("Can't serialize DOM nodes");
            }
            var sep = _15f ? " " : "";
            var _165 = _15f ? "\n" : "";
            if (dojo.isArray(it)) {
                var res = dojo.map(it, function (obj) {
                    var val = _162(obj, _15f, _164);
                    if (typeof val != "string") {
                        val = "undefined";
                    }
                    return _165 + _164 + val;
                });
                return "[" + res.join("," + sep) + _165 + _160 + "]";
            }
            if (_161 == "function") {
                return null;
            }
            var _166 = [],
                key;
            for (key in it) {
                var _167, val;
                if (typeof key == "number") {
                    _167 = "\"" + key + "\"";
                } else {
                    if (typeof key == "string") {
                        _167 = dojo._escapeString(key);
                    } else {
                        continue;
                    }
                }
                val = _162(it[key], _15f, _164);
                if (typeof val != "string") {
                    continue;
                }
                _166.push(_165 + _164 + _167 + ":" + sep + val);
            }
            return "{" + _166.join("," + sep) + _165 + _160 + "}";
        };
    }
    if (!dojo._hasResource["dojo._base.Color"]) {
        dojo._hasResource["dojo._base.Color"] = true;
        dojo.provide("dojo._base.Color");
        (function () {
            var d = dojo;
            dojo.Color = function (_168) {
                if (_168) {
                    this.setColor(_168);
                }
            };
            dojo.Color.named = {
                black: [0, 0, 0],
                silver: [192, 192, 192],
                gray: [128, 128, 128],
                white: [255, 255, 255],
                maroon: [128, 0, 0],
                red: [255, 0, 0],
                purple: [128, 0, 128],
                fuchsia: [255, 0, 255],
                green: [0, 128, 0],
                lime: [0, 255, 0],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                navy: [0, 0, 128],
                blue: [0, 0, 255],
                teal: [0, 128, 128],
                aqua: [0, 255, 255],
                transparent: d.config.transparentColor || [255, 255, 255]
            };
            dojo.extend(dojo.Color, {
                r: 255,
                g: 255,
                b: 255,
                a: 1,
                _set: function (r, g, b, a) {
                    var t = this;
                    t.r = r;
                    t.g = g;
                    t.b = b;
                    t.a = a;
                },
                setColor: function (_169) {
                    if (d.isString(_169)) {
                        d.colorFromString(_169, this);
                    } else {
                        if (d.isArray(_169)) {
                            d.colorFromArray(_169, this);
                        } else {
                            this._set(_169.r, _169.g, _169.b, _169.a);
                            if (!(_169 instanceof d.Color)) {
                                this.sanitize();
                            }
                        }
                    }
                    return this;
                },
                sanitize: function () {
                    return this;
                },
                toRgb: function () {
                    var t = this;
                    return [t.r, t.g, t.b];
                },
                toRgba: function () {
                    var t = this;
                    return [t.r, t.g, t.b, t.a];
                },
                toHex: function () {
                    var arr = d.map(["r", "g", "b"], function (x) {
                        var s = this[x].toString(16);
                        return s.length < 2 ? "0" + s : s;
                    }, this);
                    return "#" + arr.join("");
                },
                toCss: function (_16a) {
                    var t = this,
                        rgb = t.r + ", " + t.g + ", " + t.b;
                    return (_16a ? "rgba(" + rgb + ", " + t.a : "rgb(" + rgb) + ")";
                },
                toString: function () {
                    return this.toCss(true);
                }
            });
            dojo.blendColors = function (_16b, end, _16c, obj) {
                var t = obj || new d.Color();
                d.forEach(["r", "g", "b", "a"], function (x) {
                    t[x] = _16b[x] + (end[x] - _16b[x]) * _16c;
                    if (x != "a") {
                        t[x] = Math.round(t[x]);
                    }
                });
                return t.sanitize();
            };
            dojo.colorFromRgb = function (_16d, obj) {
                var m = _16d.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
                return m && dojo.colorFromArray(m[1].split(/\s*,\s*/), obj);
            };
            dojo.colorFromHex = function (_16e, obj) {
                var t = obj || new d.Color(),
                    bits = (_16e.length == 4) ? 4 : 8,
                    mask = (1 << bits) - 1;
                _16e = Number("0x" + _16e.substr(1));
                if (isNaN(_16e)) {
                    return null;
                }
                d.forEach(["b", "g", "r"], function (x) {
                    var c = _16e & mask;
                    _16e >>= bits;
                    t[x] = bits == 4 ? 17 * c : c;
                });
                t.a = 1;
                return t;
            };
            dojo.colorFromArray = function (a, obj) {
                var t = obj || new d.Color();
                t._set(Number(a[0]), Number(a[1]), Number(a[2]), Number(a[3]));
                if (isNaN(t.a)) {
                    t.a = 1;
                }
                return t.sanitize();
            };
            dojo.colorFromString = function (str, obj) {
                var a = d.Color.named[str];
                return a && d.colorFromArray(a, obj) || d.colorFromRgb(str, obj) || d.colorFromHex(str, obj);
            };
        })();
    }
    if (!dojo._hasResource["dojo._base.window"]) {
        dojo._hasResource["dojo._base.window"] = true;
        dojo.provide("dojo._base.window");
        dojo.doc = window["document"] || null;
        dojo.body = function () {
            return dojo.doc.body || dojo.doc.getElementsByTagName("body")[0];
        };
        dojo.setContext = function (_16f, _170) {
            dojo.global = _16f;
            dojo.doc = _170;
        };
        dojo.withGlobal = function (_171, _172, _173, _174) {
            var _175 = dojo.global;
            try {
                dojo.global = _171;
                return dojo.withDoc.call(null, _171.document, _172, _173, _174);
            } finally {
                dojo.global = _175;
            }
        };
        dojo.withDoc = function (_176, _177, _178, _179) {
            var _17a = dojo.doc,
                _17b = dojo._bodyLtr,
                oldQ = dojo.isQuirks;
            try {
                dojo.doc = _176;
                delete dojo._bodyLtr;
                dojo.isQuirks = dojo.doc.compatMode == "BackCompat";
                if (_178 && typeof _177 == "string") {
                    _177 = _178[_177];
                }
                return _177.apply(_178, _179 || []);
            } finally {
                dojo.doc = _17a;
                delete dojo._bodyLtr;
                if (_17b !== undefined) {
                    dojo._bodyLtr = _17b;
                }
                dojo.isQuirks = oldQ;
            }
        };
    }
    if (!dojo._hasResource["dojo._base.event"]) {
        dojo._hasResource["dojo._base.event"] = true;
        dojo.provide("dojo._base.event");
        (function () {
            var del = (dojo._event_listener = {
                add: function (node, name, fp) {
                    if (!node) {
                        return;
                    }
                    name = del._normalizeEventName(name);
                    fp = del._fixCallback(name, fp);
                    if (!dojo.isIE && (name == "mouseenter" || name == "mouseleave")) {
                        var ofp = fp;
                        name = (name == "mouseenter") ? "mouseover" : "mouseout";
                        fp = function (e) {
                            if (!dojo.isDescendant(e.relatedTarget, node)) {
                                return ofp.call(this, e);
                            }
                        };
                    }
                    node.addEventListener(name, fp, false);
                    return fp;
                },
                remove: function (node, _17c, _17d) {
                    if (node) {
                        _17c = del._normalizeEventName(_17c);
                        if (!dojo.isIE && (_17c == "mouseenter" || _17c == "mouseleave")) {
                            _17c = (_17c == "mouseenter") ? "mouseover" : "mouseout";
                        }
                        node.removeEventListener(_17c, _17d, false);
                    }
                },
                _normalizeEventName: function (name) {
                    return name.slice(0, 2) == "on" ? name.slice(2) : name;
                },
                _fixCallback: function (name, fp) {
                    return name != "keypress" ? fp : function (e) {
                        return fp.call(this, del._fixEvent(e, this));
                    };
                },
                _fixEvent: function (evt, _17e) {
                    switch (evt.type) {
                        case "keypress":
                            del._setKeyChar(evt);
                            break;
                    }
                    return evt;
                },
                _setKeyChar: function (evt) {
                    evt.keyChar = evt.charCode >= 32 ? String.fromCharCode(evt.charCode) : "";
                    evt.charOrCode = evt.keyChar || evt.keyCode;
                },
                _punctMap: {
                    106: 42,
                    111: 47,
                    186: 59,
                    187: 43,
                    188: 44,
                    189: 45,
                    190: 46,
                    191: 47,
                    192: 96,
                    219: 91,
                    220: 92,
                    221: 93,
                    222: 39
                }
            });
            dojo.fixEvent = function (evt, _17f) {
                return del._fixEvent(evt, _17f);
            };
            dojo.stopEvent = function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
            };
            var _180 = dojo._listener;
            dojo._connect = function (obj, _181, _182, _183, _184) {
                var _185 = obj && (obj.nodeType || obj.attachEvent || obj.addEventListener);
                var lid = _185 ? (_184 ? 2 : 1) : 0,
                    l = [dojo._listener, del, _180][lid];
                var h = l.add(obj, _181, dojo.hitch(_182, _183));
                return [obj, _181, h, lid];
            };
            dojo._disconnect = function (obj, _186, _187, _188) {
                ([dojo._listener, del, _180][_188]).remove(obj, _186, _187);
            };
            dojo.keys = {
                BACKSPACE: 8,
                TAB: 9,
                CLEAR: 12,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                META: dojo.isSafari ? 91 : 224,
                PAUSE: 19,
                CAPS_LOCK: 20,
                ESCAPE: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT_ARROW: 37,
                UP_ARROW: 38,
                RIGHT_ARROW: 39,
                DOWN_ARROW: 40,
                INSERT: 45,
                DELETE: 46,
                HELP: 47,
                LEFT_WINDOW: 91,
                RIGHT_WINDOW: 92,
                SELECT: 93,
                NUMPAD_0: 96,
                NUMPAD_1: 97,
                NUMPAD_2: 98,
                NUMPAD_3: 99,
                NUMPAD_4: 100,
                NUMPAD_5: 101,
                NUMPAD_6: 102,
                NUMPAD_7: 103,
                NUMPAD_8: 104,
                NUMPAD_9: 105,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_PLUS: 107,
                NUMPAD_ENTER: 108,
                NUMPAD_MINUS: 109,
                NUMPAD_PERIOD: 110,
                NUMPAD_DIVIDE: 111,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                F13: 124,
                F14: 125,
                F15: 126,
                NUM_LOCK: 144,
                SCROLL_LOCK: 145,
                copyKey: dojo.isMac && !dojo.isAIR ? (dojo.isSafari ? 91 : 224) : 17
            };
            var _189 = dojo.isMac ? "metaKey" : "ctrlKey";
            dojo.isCopyKey = function (e) {
                return e[_189];
            };
            if (dojo.isIE < 9 || (dojo.isIE && dojo.isQuirks)) {
                dojo.mouseButtons = {
                    LEFT: 1,
                    MIDDLE: 4,
                    RIGHT: 2,
                    isButton: function (e, _18a) {
                        return e.button & _18a;
                    },
                    isLeft: function (e) {
                        return e.button & 1;
                    },
                    isMiddle: function (e) {
                        return e.button & 4;
                    },
                    isRight: function (e) {
                        return e.button & 2;
                    }
                };
            } else {
                dojo.mouseButtons = {
                    LEFT: 0,
                    MIDDLE: 1,
                    RIGHT: 2,
                    isButton: function (e, _18b) {
                        return e.button == _18b;
                    },
                    isLeft: function (e) {
                        return e.button == 0;
                    },
                    isMiddle: function (e) {
                        return e.button == 1;
                    },
                    isRight: function (e) {
                        return e.button == 2;
                    }
                };
            }
            if (dojo.isIE) {
                var _18c = function (e, code) {
                    try {
                        return (e.keyCode = code);
                    } catch (e) {
                        return 0;
                    }
                };
                var iel = dojo._listener;
                var _18d = (dojo._ieListenersName = "_" + dojo._scopeName + "_listeners");
                if (!dojo.config._allow_leaks) {
                    _180 = iel = dojo._ie_listener = {
                        handlers: [],
                        add: function (_18e, _18f, _190) {
                            _18e = _18e || dojo.global;
                            var f = _18e[_18f];
                            if (!f || !f[_18d]) {
                                var d = dojo._getIeDispatcher();
                                d.target = f && (ieh.push(f) - 1);
                                d[_18d] = [];
                                f = _18e[_18f] = d;
                            }
                            return f[_18d].push(ieh.push(_190) - 1);
                        },
                        remove: function (_191, _192, _193) {
                            var f = (_191 || dojo.global)[_192],
                                l = f && f[_18d];
                            if (f && l && _193--) {
                                delete ieh[l[_193]];
                                delete l[_193];
                            }
                        }
                    };
                    var ieh = iel.handlers;
                }
                dojo.mixin(del, {
                    add: function (node, _194, fp) {
                        if (!node) {
                            return;
                        }
                        _194 = del._normalizeEventName(_194);
                        if (_194 == "onkeypress") {
                            var kd = node.onkeydown;
                            if (!kd || !kd[_18d] || !kd._stealthKeydownHandle) {
                                var h = del.add(node, "onkeydown", del._stealthKeyDown);
                                kd = node.onkeydown;
                                kd._stealthKeydownHandle = h;
                                kd._stealthKeydownRefs = 1;
                            } else {
                                kd._stealthKeydownRefs++;
                            }
                        }
                        return iel.add(node, _194, del._fixCallback(fp));
                    },
                    remove: function (node, _195, _196) {
                        _195 = del._normalizeEventName(_195);
                        iel.remove(node, _195, _196);
                        if (_195 == "onkeypress") {
                            var kd = node.onkeydown;
                            if (--kd._stealthKeydownRefs <= 0) {
                                iel.remove(node, "onkeydown", kd._stealthKeydownHandle);
                                delete kd._stealthKeydownHandle;
                            }
                        }
                    },
                    _normalizeEventName: function (_197) {
                        return _197.slice(0, 2) != "on" ? "on" + _197 : _197;
                    },
                    _nop: function () {},
                    _fixEvent: function (evt, _198) {
                        if (!evt) {
                            var w = _198 && (_198.ownerDocument || _198.document || _198).parentWindow || window;
                            evt = w.event;
                        }
                        if (!evt) {
                            return (evt);
                        }
                        evt.target = evt.srcElement;
                        evt.currentTarget = (_198 || evt.srcElement);
                        evt.layerX = evt.offsetX;
                        evt.layerY = evt.offsetY;
                        var se = evt.srcElement,
                            doc = (se && se.ownerDocument) || document;
                        var _199 = ((dojo.isIE < 6) || (doc["compatMode"] == "BackCompat")) ? doc.body : doc.documentElement;
                        var _19a = dojo._getIeDocumentElementOffset();
                        evt.pageX = evt.clientX + dojo._fixIeBiDiScrollLeft(_199.scrollLeft || 0) - _19a.x;
                        evt.pageY = evt.clientY + (_199.scrollTop || 0) - _19a.y;
                        if (evt.type == "mouseover") {
                            evt.relatedTarget = evt.fromElement;
                        }
                        if (evt.type == "mouseout") {
                            evt.relatedTarget = evt.toElement;
                        }
                        if (dojo.isIE < 9 || dojo.isQuirks) {
                            evt.stopPropagation = del._stopPropagation;
                            evt.preventDefault = del._preventDefault;
                        }
                        return del._fixKeys(evt);
                    },
                    _fixKeys: function (evt) {
                        switch (evt.type) {
                            case "keypress":
                                var c = ("charCode" in evt ? evt.charCode : evt.keyCode);
                                if (c == 10) {
                                    c = 0;
                                    evt.keyCode = 13;
                                } else {
                                    if (c == 13 || c == 27) {
                                        c = 0;
                                    } else {
                                        if (c == 3) {
                                            c = 99;
                                        }
                                    }
                                }
                                evt.charCode = c;
                                del._setKeyChar(evt);
                                break;
                        }
                        return evt;
                    },
                    _stealthKeyDown: function (evt) {
                        var kp = evt.currentTarget.onkeypress;
                        if (!kp || !kp[_18d]) {
                            return;
                        }
                        var k = evt.keyCode;
                        var _19b = (k != 13 || (dojo.isIE >= 9 && !dojo.isQuirks)) && k != 32 && k != 27 && (k < 48 || k > 90) && (k < 96 || k > 111) && (k < 186 || k > 192) && (k < 219 || k > 222);
                        if (_19b || evt.ctrlKey) {
                            var c = _19b ? 0 : k;
                            if (evt.ctrlKey) {
                                if (k == 3 || k == 13) {
                                    return;
                                } else {
                                    if (c > 95 && c < 106) {
                                        c -= 48;
                                    } else {
                                        if ((!evt.shiftKey) && (c >= 65 && c <= 90)) {
                                            c += 32;
                                        } else {
                                            c = del._punctMap[c] || c;
                                        }
                                    }
                                }
                            }
                            var faux = del._synthesizeEvent(evt, {
                                type: "keypress",
                                faux: true,
                                charCode: c
                            });
                            kp.call(evt.currentTarget, faux);
                            if (dojo.isIE < 9 || (dojo.isIE && dojo.isQuirks)) {
                                evt.cancelBubble = faux.cancelBubble;
                            }
                            evt.returnValue = faux.returnValue;
                            _18c(evt, faux.keyCode);
                        }
                    },
                    _stopPropagation: function () {
                        this.cancelBubble = true;
                    },
                    _preventDefault: function () {
                        this.bubbledKeyCode = this.keyCode;
                        if (this.ctrlKey) {
                            _18c(this, 0);
                        }
                        this.returnValue = false;
                    }
                });
                dojo.stopEvent = (dojo.isIE < 9 || dojo.isQuirks) ? function (evt) {
                    evt = evt || window.event;
                    del._stopPropagation.call(evt);
                    del._preventDefault.call(evt);
                } : dojo.stopEvent;
            }
            del._synthesizeEvent = function (evt, _19c) {
                var faux = dojo.mixin({}, evt, _19c);
                del._setKeyChar(faux);
                faux.preventDefault = function () {
                    evt.preventDefault();
                };
                faux.stopPropagation = function () {
                    evt.stopPropagation();
                };
                return faux;
            };
            if (dojo.isOpera) {
                dojo.mixin(del, {
                    _fixEvent: function (evt, _19d) {
                        switch (evt.type) {
                            case "keypress":
                                var c = evt.which;
                                if (c == 3) {
                                    c = 99;
                                }
                                c = c < 41 && !evt.shiftKey ? 0 : c;
                                if (evt.ctrlKey && !evt.shiftKey && c >= 65 && c <= 90) {
                                    c += 32;
                                }
                                return del._synthesizeEvent(evt, {
                                    charCode: c
                                });
                        }
                        return evt;
                    }
                });
            }
            if (dojo.isWebKit) {
                del._add = del.add;
                del._remove = del.remove;
                dojo.mixin(del, {
                    add: function (node, _19e, fp) {
                        if (!node) {
                            return;
                        }
                        var _19f = del._add(node, _19e, fp);
                        if (del._normalizeEventName(_19e) == "keypress") {
                            _19f._stealthKeyDownHandle = del._add(node, "keydown", function (evt) {
                                var k = evt.keyCode;
                                var _1a0 = k != 13 && k != 32 && (k < 48 || k > 90) && (k < 96 || k > 111) && (k < 186 || k > 192) && (k < 219 || k > 222);
                                if (_1a0 || evt.ctrlKey) {
                                    var c = _1a0 ? 0 : k;
                                    if (evt.ctrlKey) {
                                        if (k == 3 || k == 13) {
                                            return;
                                        } else {
                                            if (c > 95 && c < 106) {
                                                c -= 48;
                                            } else {
                                                if (!evt.shiftKey && c >= 65 && c <= 90) {
                                                    c += 32;
                                                } else {
                                                    c = del._punctMap[c] || c;
                                                }
                                            }
                                        }
                                    }
                                    var faux = del._synthesizeEvent(evt, {
                                        type: "keypress",
                                        faux: true,
                                        charCode: c
                                    });
                                    fp.call(evt.currentTarget, faux);
                                }
                            });
                        }
                        return _19f;
                    },
                    remove: function (node, _1a1, _1a2) {
                        if (node) {
                            if (_1a2._stealthKeyDownHandle) {
                                del._remove(node, "keydown", _1a2._stealthKeyDownHandle);
                            }
                            del._remove(node, _1a1, _1a2);
                        }
                    },
                    _fixEvent: function (evt, _1a3) {
                        switch (evt.type) {
                            case "keypress":
                                if (evt.faux) {
                                    return evt;
                                }
                                var c = evt.charCode;
                                c = c >= 32 ? c : 0;
                                return del._synthesizeEvent(evt, {
                                    charCode: c,
                                    faux: true
                                });
                        }
                        return evt;
                    }
                });
            }
        })();
        if (dojo.isIE) {
            dojo._ieDispatcher = function (args, _1a4) {
                var ap = Array.prototype,
                    h = dojo._ie_listener.handlers,
                    c = args.callee,
                    ls = c[dojo._ieListenersName],
                    t = h[c.target];
                var r = t && t.apply(_1a4, args);
                var lls = [].concat(ls);
                for (var i in lls) {
                    var f = h[lls[i]];
                    if (!(i in ap) && f) {
                        f.apply(_1a4, args);
                    }
                }
                return r;
            };
            dojo._getIeDispatcher = function () {
                return new Function(dojo._scopeName + "._ieDispatcher(arguments, this)");
            };
            dojo._event_listener._fixCallback = function (fp) {
                var f = dojo._event_listener._fixEvent;
                return function (e) {
                    return fp.call(this, f(e, this));
                };
            };
        }
    }
    if (!dojo._hasResource["dojo._base.html"]) {
        dojo._hasResource["dojo._base.html"] = true;
        dojo.provide("dojo._base.html");
        try {
            document.execCommand("BackgroundImageCache", false, true);
        } catch (e) {}
        if (dojo.isIE) {
            dojo.byId = function (id, doc) {
                if (typeof id != "string") {
                    return id;
                }
                var _1a5 = doc || dojo.doc,
                    te = _1a5.getElementById(id);
                if (te && (te.attributes.id.value == id || te.id == id)) {
                    return te;
                } else {
                    var eles = _1a5.all[id];
                    if (!eles || eles.nodeName) {
                        eles = [eles];
                    }
                    var i = 0;
                    while ((te = eles[i++])) {
                        if ((te.attributes && te.attributes.id && te.attributes.id.value == id) || te.id == id) {
                            return te;
                        }
                    }
                }
            };
        } else {
            dojo.byId = function (id, doc) {
                return ((typeof id == "string") ? (doc || dojo.doc).getElementById(id) : id) || null;
            };
        }(function () {
            var d = dojo;
            var byId = d.byId;
            var _1a6 = null,
                _1a7;
            d.addOnWindowUnload(function () {
                _1a6 = null;
            });
            dojo._destroyElement = dojo.destroy = function (node) {
                node = byId(node);
                try {
                    var doc = node.ownerDocument;
                    if (!_1a6 || _1a7 != doc) {
                        _1a6 = doc.createElement("div");
                        _1a7 = doc;
                    }
                    _1a6.appendChild(node.parentNode ? node.parentNode.removeChild(node) : node);
                    _1a6.innerHTML = "";
                } catch (e) {}
            };
            dojo.isDescendant = function (node, _1a8) {
                try {
                    node = byId(node);
                    _1a8 = byId(_1a8);
                    while (node) {
                        if (node == _1a8) {
                            return true;
                        }
                        node = node.parentNode;
                    }
                } catch (e) {}
                return false;
            };
            dojo.setSelectable = function (node, _1a9) {
                node = byId(node);
                if (d.isMozilla) {
                    node.style.MozUserSelect = _1a9 ? "" : "none";
                } else {
                    if (d.isKhtml || d.isWebKit) {
                        node.style.KhtmlUserSelect = _1a9 ? "auto" : "none";
                    } else {
                        if (d.isIE) {
                            var v = (node.unselectable = _1a9 ? "" : "on");
                            d.query("*", node).forEach("item.unselectable = '" + v + "'");
                        }
                    }
                }
            };
            var _1aa = function (node, ref) {
                var _1ab = ref.parentNode;
                if (_1ab) {
                    _1ab.insertBefore(node, ref);
                }
            };
            var _1ac = function (node, ref) {
                var _1ad = ref.parentNode;
                if (_1ad) {
                    if (_1ad.lastChild == ref) {
                        _1ad.appendChild(node);
                    } else {
                        _1ad.insertBefore(node, ref.nextSibling);
                    }
                }
            };
            dojo.place = function (node, _1ae, _1af) {
                _1ae = byId(_1ae);
                if (typeof node == "string") {
                    node = /^\s*</.test(node) ? d._toDom(node, _1ae.ownerDocument) : byId(node);
                }
                if (typeof _1af == "number") {
                    var cn = _1ae.childNodes;
                    if (!cn.length || cn.length <= _1af) {
                        _1ae.appendChild(node);
                    } else {
                        _1aa(node, cn[_1af < 0 ? 0 : _1af]);
                    }
                } else {
                    switch (_1af) {
                        case "before":
                            _1aa(node, _1ae);
                            break;
                        case "after":
                            _1ac(node, _1ae);
                            break;
                        case "replace":
                            _1ae.parentNode.replaceChild(node, _1ae);
                            break;
                        case "only":
                            d.empty(_1ae);
                            _1ae.appendChild(node);
                            break;
                        case "first":
                            if (_1ae.firstChild) {
                                _1aa(node, _1ae.firstChild);
                                break;
                            }
                        default:
                            _1ae.appendChild(node);
                    }
                }
                return node;
            };
            dojo.boxModel = "content-box";
            if (d.isIE) {
                d.boxModel = document.compatMode == "BackCompat" ? "border-box" : "content-box";
            }
            var gcs;
            if (d.isWebKit) {
                gcs = function (node) {
                    var s;
                    if (node.nodeType == 1) {
                        var dv = node.ownerDocument.defaultView;
                        s = dv.getComputedStyle(node, null);
                        if (!s && node.style) {
                            node.style.display = "";
                            s = dv.getComputedStyle(node, null);
                        }
                    }
                    return s || {};
                };
            } else {
                if (d.isIE) {
                    gcs = function (node) {
                        return node.nodeType == 1 ? node.currentStyle : {};
                    };
                } else {
                    gcs = function (node) {
                        return node.nodeType == 1 ? node.ownerDocument.defaultView.getComputedStyle(node, null) : {};
                    };
                }
            }
            dojo.getComputedStyle = gcs;
            if (!d.isIE) {
                d._toPixelValue = function (_1b0, _1b1) {
                    return parseFloat(_1b1) || 0;
                };
            } else {
                d._toPixelValue = function (_1b2, _1b3) {
                    if (!_1b3) {
                        return 0;
                    }
                    if (_1b3 == "medium") {
                        return 4;
                    }
                    if (_1b3.slice && _1b3.slice(-2) == "px") {
                        return parseFloat(_1b3);
                    }
                    with(_1b2) {
                        var _1b4 = style.left;
                        var _1b5 = runtimeStyle.left;
                        runtimeStyle.left = currentStyle.left;
                        try {
                            style.left = _1b3;
                            _1b3 = style.pixelLeft;
                        } catch (e) {
                            _1b3 = 0;
                        }
                        style.left = _1b4;
                        runtimeStyle.left = _1b5;
                    }
                    return _1b3;
                };
            }
            var px = d._toPixelValue;
            var astr = "DXImageTransform.Microsoft.Alpha";
            var af = function (n, f) {
                try {
                    return n.filters.item(astr);
                } catch (e) {
                    return f ? {} : null;
                }
            };
            dojo._getOpacity = d.isIE < 9 ? function (node) {
                try {
                    return af(node).Opacity / 100;
                } catch (e) {
                    return 1;
                }
            } : function (node) {
                return gcs(node).opacity;
            };
            dojo._setOpacity = d.isIE < 9 ? function (node, _1b6) {
                var ov = _1b6 * 100,
                    _1b7 = _1b6 == 1;
                node.style.zoom = _1b7 ? "" : 1;
                if (!af(node)) {
                    if (_1b7) {
                        return _1b6;
                    }
                    node.style.filter += " progid:" + astr + "(Opacity=" + ov + ")";
                } else {
                    af(node, 1).Opacity = ov;
                }
                af(node, 1).Enabled = !_1b7;
                if (node.nodeName.toLowerCase() == "tr") {
                    d.query("> td", node).forEach(function (i) {
                        d._setOpacity(i, _1b6);
                    });
                }
                return _1b6;
            } : function (node, _1b8) {
                return node.style.opacity = _1b8;
            };
            var _1b9 = {
                left: true,
                top: true
            };
            var _1ba = /margin|padding|width|height|max|min|offset/;
            var _1bb = function (node, type, _1bc) {
                type = type.toLowerCase();
                if (d.isIE) {
                    if (_1bc == "auto") {
                        if (type == "height") {
                            return node.offsetHeight;
                        }
                        if (type == "width") {
                            return node.offsetWidth;
                        }
                    }
                    if (type == "fontweight") {
                        switch (_1bc) {
                            case 700:
                                return "bold";
                            case 400:
                            default:
                                return "normal";
                        }
                    }
                }
                if (!(type in _1b9)) {
                    _1b9[type] = _1ba.test(type);
                }
                return _1b9[type] ? px(node, _1bc) : _1bc;
            };
            var _1bd = d.isIE ? "styleFloat" : "cssFloat",
                _1be = {
                    "cssFloat": _1bd,
                    "styleFloat": _1bd,
                    "float": _1bd
                };
            dojo.style = function (node, _1bf, _1c0) {
                var n = byId(node),
                    args = arguments.length,
                    op = (_1bf == "opacity");
                _1bf = _1be[_1bf] || _1bf;
                if (args == 3) {
                    return op ? d._setOpacity(n, _1c0) : n.style[_1bf] = _1c0;
                }
                if (args == 2 && op) {
                    return d._getOpacity(n);
                }
                var s = gcs(n);
                if (args == 2 && typeof _1bf != "string") {
                    for (var x in _1bf) {
                        d.style(node, x, _1bf[x]);
                    }
                    return s;
                }
                return (args == 1) ? s : _1bb(n, _1bf, s[_1bf] || n.style[_1bf]);
            };
            dojo._getPadExtents = function (n, _1c1) {
                var s = _1c1 || gcs(n),
                    l = px(n, s.paddingLeft),
                    t = px(n, s.paddingTop);
                return {
                    l: l,
                    t: t,
                    w: l + px(n, s.paddingRight),
                    h: t + px(n, s.paddingBottom)
                };
            };
            dojo._getBorderExtents = function (n, _1c2) {
                var ne = "none",
                    s = _1c2 || gcs(n),
                    bl = (s.borderLeftStyle != ne ? px(n, s.borderLeftWidth) : 0),
                    bt = (s.borderTopStyle != ne ? px(n, s.borderTopWidth) : 0);
                return {
                    l: bl,
                    t: bt,
                    w: bl + (s.borderRightStyle != ne ? px(n, s.borderRightWidth) : 0),
                    h: bt + (s.borderBottomStyle != ne ? px(n, s.borderBottomWidth) : 0)
                };
            };
            dojo._getPadBorderExtents = function (n, _1c3) {
                var s = _1c3 || gcs(n),
                    p = d._getPadExtents(n, s),
                    b = d._getBorderExtents(n, s);
                return {
                    l: p.l + b.l,
                    t: p.t + b.t,
                    w: p.w + b.w,
                    h: p.h + b.h
                };
            };
            dojo._getMarginExtents = function (n, _1c4) {
                var s = _1c4 || gcs(n),
                    l = px(n, s.marginLeft),
                    t = px(n, s.marginTop),
                    r = px(n, s.marginRight),
                    b = px(n, s.marginBottom);
                if (d.isWebKit && (s.position != "absolute")) {
                    r = l;
                }
                return {
                    l: l,
                    t: t,
                    w: l + r,
                    h: t + b
                };
            };
            dojo._getMarginBox = function (node, _1c5) {
                var s = _1c5 || gcs(node),
                    me = d._getMarginExtents(node, s);
                var l = node.offsetLeft - me.l,
                    t = node.offsetTop - me.t,
                    p = node.parentNode;
                if (d.isMoz) {
                    var sl = parseFloat(s.left),
                        st = parseFloat(s.top);
                    if (!isNaN(sl) && !isNaN(st)) {
                        l = sl, t = st;
                    } else {
                        if (p && p.style) {
                            var pcs = gcs(p);
                            if (pcs.overflow != "visible") {
                                var be = d._getBorderExtents(p, pcs);
                                l += be.l, t += be.t;
                            }
                        }
                    }
                } else {
                    if (d.isOpera || (d.isIE > 7 && !d.isQuirks)) {
                        if (p) {
                            be = d._getBorderExtents(p);
                            l -= be.l;
                            t -= be.t;
                        }
                    }
                }
                return {
                    l: l,
                    t: t,
                    w: node.offsetWidth + me.w,
                    h: node.offsetHeight + me.h
                };
            };
            dojo._getMarginSize = function (node, _1c6) {
                node = byId(node);
                var me = d._getMarginExtents(node, _1c6 || gcs(node));
                var size = node.getBoundingClientRect();
                return {
                    w: (size.right - size.left) + me.w,
                    h: (size.bottom - size.top) + me.h
                };
            };
            dojo._getContentBox = function (node, _1c7) {
                var s = _1c7 || gcs(node),
                    pe = d._getPadExtents(node, s),
                    be = d._getBorderExtents(node, s),
                    w = node.clientWidth,
                    h;
                if (!w) {
                    w = node.offsetWidth, h = node.offsetHeight;
                } else {
                    h = node.clientHeight, be.w = be.h = 0;
                }
                if (d.isOpera) {
                    pe.l += be.l;
                    pe.t += be.t;
                }
                return {
                    l: pe.l,
                    t: pe.t,
                    w: w - pe.w - be.w,
                    h: h - pe.h - be.h
                };
            };
            dojo._getBorderBox = function (node, _1c8) {
                var s = _1c8 || gcs(node),
                    pe = d._getPadExtents(node, s),
                    cb = d._getContentBox(node, s);
                return {
                    l: cb.l - pe.l,
                    t: cb.t - pe.t,
                    w: cb.w + pe.w,
                    h: cb.h + pe.h
                };
            };
            dojo._setBox = function (node, l, t, w, h, u) {
                u = u || "px";
                var s = node.style;
                if (!isNaN(l)) {
                    s.left = l + u;
                }
                if (!isNaN(t)) {
                    s.top = t + u;
                }
                if (w >= 0) {
                    s.width = w + u;
                }
                if (h >= 0) {
                    s.height = h + u;
                }
            };
            dojo._isButtonTag = function (node) {
                return node.tagName == "BUTTON" || node.tagName == "INPUT" && (node.getAttribute("type") || "").toUpperCase() == "BUTTON";
            };
            dojo._usesBorderBox = function (node) {
                var n = node.tagName;
                return d.boxModel == "border-box" || n == "TABLE" || d._isButtonTag(node);
            };
            dojo._setContentSize = function (node, _1c9, _1ca, _1cb) {
                if (d._usesBorderBox(node)) {
                    var pb = d._getPadBorderExtents(node, _1cb);
                    if (_1c9 >= 0) {
                        _1c9 += pb.w;
                    }
                    if (_1ca >= 0) {
                        _1ca += pb.h;
                    }
                }
                d._setBox(node, NaN, NaN, _1c9, _1ca);
            };
            dojo._setMarginBox = function (node, _1cc, _1cd, _1ce, _1cf, _1d0) {
                var s = _1d0 || gcs(node),
                    bb = d._usesBorderBox(node),
                    pb = bb ? _1d1 : d._getPadBorderExtents(node, s);
                if (d.isWebKit) {
                    if (d._isButtonTag(node)) {
                        var ns = node.style;
                        if (_1ce >= 0 && !ns.width) {
                            ns.width = "4px";
                        }
                        if (_1cf >= 0 && !ns.height) {
                            ns.height = "4px";
                        }
                    }
                }
                var mb = d._getMarginExtents(node, s);
                if (_1ce >= 0) {
                    _1ce = Math.max(_1ce - pb.w - mb.w, 0);
                }
                if (_1cf >= 0) {
                    _1cf = Math.max(_1cf - pb.h - mb.h, 0);
                }
                d._setBox(node, _1cc, _1cd, _1ce, _1cf);
            };
            var _1d1 = {
                l: 0,
                t: 0,
                w: 0,
                h: 0
            };
            dojo.marginBox = function (node, box) {
                var n = byId(node),
                    s = gcs(n),
                    b = box;
                return !b ? d._getMarginBox(n, s) : d._setMarginBox(n, b.l, b.t, b.w, b.h, s);
            };
            dojo.contentBox = function (node, box) {
                var n = byId(node),
                    s = gcs(n),
                    b = box;
                return !b ? d._getContentBox(n, s) : d._setContentSize(n, b.w, b.h, s);
            };
            var _1d2 = function (node, prop) {
                if (!(node = (node || 0).parentNode)) {
                    return 0;
                }
                var val, _1d3 = 0,
                    _1d4 = d.body();
                while (node && node.style) {
                    if (gcs(node).position == "fixed") {
                        return 0;
                    }
                    val = node[prop];
                    if (val) {
                        _1d3 += val - 0;
                        if (node == _1d4) {
                            break;
                        }
                    }
                    node = node.parentNode;
                }
                return _1d3;
            };
            dojo._docScroll = function () {
                var n = d.global;
                return "pageXOffset" in n ? {
                    x: n.pageXOffset,
                    y: n.pageYOffset
                } : (n = d.isQuirks ? d.doc.body : d.doc.documentElement, {
                    x: d._fixIeBiDiScrollLeft(n.scrollLeft || 0),
                    y: n.scrollTop || 0
                });
            };
            dojo._isBodyLtr = function () {
                return "_bodyLtr" in d ? d._bodyLtr : d._bodyLtr = (d.body().dir || d.doc.documentElement.dir || "ltr").toLowerCase() == "ltr";
            };
            dojo._getIeDocumentElementOffset = function () {
                var de = d.doc.documentElement;
                if (d.isIE < 8) {
                    var r = de.getBoundingClientRect();
                    var l = r.left,
                        t = r.top;
                    if (d.isIE < 7) {
                        l += de.clientLeft;
                        t += de.clientTop;
                    }
                    return {
                        x: l < 0 ? 0 : l,
                        y: t < 0 ? 0 : t
                    };
                } else {
                    return {
                        x: 0,
                        y: 0
                    };
                }
            };
            dojo._fixIeBiDiScrollLeft = function (_1d5) {
                var ie = d.isIE;
                if (ie && !d._isBodyLtr()) {
                    var qk = d.isQuirks,
                        de = qk ? d.doc.body : d.doc.documentElement;
                    if (ie == 6 && !qk && d.global.frameElement && de.scrollHeight > de.clientHeight) {
                        _1d5 += de.clientLeft;
                    }
                    return (ie < 8 || qk) ? (_1d5 + de.clientWidth - de.scrollWidth) : -_1d5;
                }
                return _1d5;
            };
            dojo._abs = dojo.position = function (node, _1d6) {
                node = byId(node);
                var db = d.body(),
                    dh = db.parentNode,
                    ret = node.getBoundingClientRect();
                ret = {
                    x: ret.left,
                    y: ret.top,
                    w: ret.right - ret.left,
                    h: ret.bottom - ret.top
                };
                if (d.isIE) {
                    var _1d7 = d._getIeDocumentElementOffset();
                    ret.x -= _1d7.x + (d.isQuirks ? db.clientLeft + db.offsetLeft : 0);
                    ret.y -= _1d7.y + (d.isQuirks ? db.clientTop + db.offsetTop : 0);
                } else {
                    if (d.isFF == 3) {
                        var cs = gcs(dh);
                        ret.x -= px(dh, cs.marginLeft) + px(dh, cs.borderLeftWidth);
                        ret.y -= px(dh, cs.marginTop) + px(dh, cs.borderTopWidth);
                    }
                }
                if (_1d6) {
                    var _1d8 = d._docScroll();
                    ret.x += _1d8.x;
                    ret.y += _1d8.y;
                }
                return ret;
            };
            dojo.coords = function (node, _1d9) {
                var n = byId(node),
                    s = gcs(n),
                    mb = d._getMarginBox(n, s);
                var abs = d.position(n, _1d9);
                mb.x = abs.x;
                mb.y = abs.y;
                return mb;
            };
            var _1da = {
                "class": "className",
                "for": "htmlFor",
                tabindex: "tabIndex",
                readonly: "readOnly",
                colspan: "colSpan",
                frameborder: "frameBorder",
                rowspan: "rowSpan",
                valuetype: "valueType"
            }, _1db = {
                classname: "class",
                htmlfor: "for",
                tabindex: "tabIndex",
                readonly: "readOnly"
            }, _1dc = {
                innerHTML: 1,
                className: 1,
                htmlFor: d.isIE,
                value: 1
            };
            var _1dd = function (name) {
                return _1db[name.toLowerCase()] || name;
            };
            var _1de = function (node, name) {
                var attr = node.getAttributeNode && node.getAttributeNode(name);
                return attr && attr.specified;
            };
            dojo.hasAttr = function (node, name) {
                var lc = name.toLowerCase();
                return _1dc[_1da[lc] || name] || _1de(byId(node), _1db[lc] || name);
            };
            var _1df = {}, _1e0 = 0,
                _1e1 = dojo._scopeName + "attrid",
                _1e2 = {
                    col: 1,
                    colgroup: 1,
                    table: 1,
                    tbody: 1,
                    tfoot: 1,
                    thead: 1,
                    tr: 1,
                    title: 1
                };
            dojo.attr = function (node, name, _1e3) {
                node = byId(node);
                var args = arguments.length,
                    prop;
                if (args == 2 && typeof name != "string") {
                    for (var x in name) {
                        d.attr(node, x, name[x]);
                    }
                    return node;
                }
                var lc = name.toLowerCase(),
                    _1e4 = _1da[lc] || name,
                    _1e5 = _1dc[_1e4],
                    _1e6 = _1db[lc] || name;
                if (args == 3) {
                    do {
                        if (_1e4 == "style" && typeof _1e3 != "string") {
                            d.style(node, _1e3);
                            break;
                        }
                        if (_1e4 == "innerHTML") {
                            if (d.isIE && node.tagName.toLowerCase() in _1e2) {
                                d.empty(node);
                                node.appendChild(d._toDom(_1e3, node.ownerDocument));
                            } else {
                                node[_1e4] = _1e3;
                            }
                            break;
                        }
                        if (d.isFunction(_1e3)) {
                            var _1e7 = d.attr(node, _1e1);
                            if (!_1e7) {
                                _1e7 = _1e0++;
                                d.attr(node, _1e1, _1e7);
                            }
                            if (!_1df[_1e7]) {
                                _1df[_1e7] = {};
                            }
                            var h = _1df[_1e7][_1e4];
                            if (h) {
                                d.disconnect(h);
                            } else {
                                try {
                                    delete node[_1e4];
                                } catch (e) {}
                            }
                            _1df[_1e7][_1e4] = d.connect(node, _1e4, _1e3);
                            break;
                        }
                        if (_1e5 || typeof _1e3 == "boolean") {
                            node[_1e4] = _1e3;
                            break;
                        }
                        node.setAttribute(_1e6, _1e3);
                    } while (false);
                    return node;
                }
                _1e3 = node[_1e4];
                if (_1e5 && typeof _1e3 != "undefined") {
                    return _1e3;
                }
                if (_1e4 != "href" && (typeof _1e3 == "boolean" || d.isFunction(_1e3))) {
                    return _1e3;
                }
                return _1de(node, _1e6) ? node.getAttribute(_1e6) : null;
            };
            dojo.removeAttr = function (node, name) {
                byId(node).removeAttribute(_1dd(name));
            };
            dojo.getNodeProp = function (node, name) {
                node = byId(node);
                var lc = name.toLowerCase(),
                    _1e8 = _1da[lc] || name;
                if ((_1e8 in node) && _1e8 != "href") {
                    return node[_1e8];
                }
                var _1e9 = _1db[lc] || name;
                return _1de(node, _1e9) ? node.getAttribute(_1e9) : null;
            };
            dojo.create = function (tag, _1ea, _1eb, pos) {
                var doc = d.doc;
                if (_1eb) {
                    _1eb = byId(_1eb);
                    doc = _1eb.ownerDocument;
                }
                if (typeof tag == "string") {
                    tag = doc.createElement(tag);
                }
                if (_1ea) {
                    d.attr(tag, _1ea);
                }
                if (_1eb) {
                    d.place(tag, _1eb, pos);
                }
                return tag;
            };
            d.empty = d.isIE ? function (node) {
                node = byId(node);
                for (var c; c = node.lastChild;) {
                    d.destroy(c);
                }
            } : function (node) {
                byId(node).innerHTML = "";
            };
            var _1ec = {
                option: ["select"],
                tbody: ["table"],
                thead: ["table"],
                tfoot: ["table"],
                tr: ["table", "tbody"],
                td: ["table", "tbody", "tr"],
                th: ["table", "thead", "tr"],
                legend: ["fieldset"],
                caption: ["table"],
                colgroup: ["table"],
                col: ["table", "colgroup"],
                li: ["ul"]
            }, _1ed = /<\s*([\w\:]+)/,
                _1ee = {}, _1ef = 0,
                _1f0 = "__" + d._scopeName + "ToDomId";
            for (var _1f1 in _1ec) {
                if (_1ec.hasOwnProperty(_1f1)) {
                    var tw = _1ec[_1f1];
                    tw.pre = _1f1 == "option" ? "<select multiple=\"multiple\">" : "<" + tw.join("><") + ">";
                    tw.post = "</" + tw.reverse().join("></") + ">";
                }
            }
            d._toDom = function (frag, doc) {
                doc = doc || d.doc;
                var _1f2 = doc[_1f0];
                if (!_1f2) {
                    doc[_1f0] = _1f2 = ++_1ef + "";
                    _1ee[_1f2] = doc.createElement("div");
                }
                frag += "";
                var _1f3 = frag.match(_1ed),
                    tag = _1f3 ? _1f3[1].toLowerCase() : "",
                    _1f4 = _1ee[_1f2],
                    wrap, i, fc, df;
                if (_1f3 && _1ec[tag]) {
                    wrap = _1ec[tag];
                    _1f4.innerHTML = wrap.pre + frag + wrap.post;
                    for (i = wrap.length; i; --i) {
                        _1f4 = _1f4.firstChild;
                    }
                } else {
                    _1f4.innerHTML = frag;
                }
                if (_1f4.childNodes.length == 1) {
                    return _1f4.removeChild(_1f4.firstChild);
                }
                df = doc.createDocumentFragment();
                while (fc = _1f4.firstChild) {
                    df.appendChild(fc);
                }
                return df;
            };
            var _1f5 = "className";
            dojo.hasClass = function (node, _1f6) {
                return ((" " + byId(node)[_1f5] + " ").indexOf(" " + _1f6 + " ") >= 0);
            };
            var _1f7 = /\s+/,
                a1 = [""],
                _1f8 = {}, _1f9 = function (s) {
                    if (typeof s == "string" || s instanceof String) {
                        if (s.indexOf(" ") < 0) {
                            a1[0] = s;
                            return a1;
                        } else {
                            return s.split(_1f7);
                        }
                    }
                    return s || "";
                };
            dojo.addClass = function (node, _1fa) {
                node = byId(node);
                _1fa = _1f9(_1fa);
                var cls = node[_1f5],
                    _1fb;
                cls = cls ? " " + cls + " " : " ";
                _1fb = cls.length;
                for (var i = 0, len = _1fa.length, c; i < len; ++i) {
                    c = _1fa[i];
                    if (c && cls.indexOf(" " + c + " ") < 0) {
                        cls += c + " ";
                    }
                }
                if (_1fb < cls.length) {
                    node[_1f5] = cls.substr(1, cls.length - 2);
                }
            };
            dojo.removeClass = function (node, _1fc) {
                node = byId(node);
                var cls;
                if (_1fc !== undefined) {
                    _1fc = _1f9(_1fc);
                    cls = " " + node[_1f5] + " ";
                    for (var i = 0, len = _1fc.length; i < len; ++i) {
                        cls = cls.replace(" " + _1fc[i] + " ", " ");
                    }
                    cls = d.trim(cls);
                } else {
                    cls = "";
                }
                if (node[_1f5] != cls) {
                    node[_1f5] = cls;
                }
            };
            dojo.replaceClass = function (node, _1fd, _1fe) {
                node = byId(node);
                _1f8.className = node.className;
                dojo.removeClass(_1f8, _1fe);
                dojo.addClass(_1f8, _1fd);
                if (node.className !== _1f8.className) {
                    node.className = _1f8.className;
                }
            };
            dojo.toggleClass = function (node, _1ff, _200) {
                if (_200 === undefined) {
                    _200 = !d.hasClass(node, _1ff);
                }
                d[_200 ? "addClass" : "removeClass"](node, _1ff);
            };
        })();
    }
    if (!dojo._hasResource["dojo._base.NodeList"]) {
        dojo._hasResource["dojo._base.NodeList"] = true;
        dojo.provide("dojo._base.NodeList");
        (function () {
            var d = dojo;
            var ap = Array.prototype,
                aps = ap.slice,
                apc = ap.concat;
            var tnl = function (a, _201, _202) {
                if (!a.sort) {
                    a = aps.call(a, 0);
                }
                var ctor = _202 || this._NodeListCtor || d._NodeListCtor;
                a.constructor = ctor;
                dojo._mixin(a, ctor.prototype);
                a._NodeListCtor = ctor;
                return _201 ? a._stash(_201) : a;
            };
            var _203 = function (f, a, o) {
                a = [0].concat(aps.call(a, 0));
                o = o || d.global;
                return function (node) {
                    a[0] = node;
                    return f.apply(o, a);
                };
            };
            var _204 = function (f, o) {
                return function () {
                    this.forEach(_203(f, arguments, o));
                    return this;
                };
            };
            var _205 = function (f, o) {
                return function () {
                    return this.map(_203(f, arguments, o));
                };
            };
            var _206 = function (f, o) {
                return function () {
                    return this.filter(_203(f, arguments, o));
                };
            };
            var _207 = function (f, g, o) {
                return function () {
                    var a = arguments,
                        body = _203(f, a, o);
                    if (g.call(o || d.global, a)) {
                        return this.map(body);
                    }
                    this.forEach(body);
                    return this;
                };
            };
            var _208 = function (a) {
                return a.length == 1 && (typeof a[0] == "string");
            };
            var _209 = function (node) {
                var p = node.parentNode;
                if (p) {
                    p.removeChild(node);
                }
            };
            dojo.NodeList = function () {
                return tnl(Array.apply(null, arguments));
            };
            d._NodeListCtor = d.NodeList;
            var nl = d.NodeList,
                nlp = nl.prototype;
            nl._wrap = nlp._wrap = tnl;
            nl._adaptAsMap = _205;
            nl._adaptAsForEach = _204;
            nl._adaptAsFilter = _206;
            nl._adaptWithCondition = _207;
            d.forEach(["slice", "splice"], function (name) {
                var f = ap[name];
                nlp[name] = function () {
                    return this._wrap(f.apply(this, arguments), name == "slice" ? this : null);
                };
            });
            d.forEach(["indexOf", "lastIndexOf", "every", "some"], function (name) {
                var f = d[name];
                nlp[name] = function () {
                    return f.apply(d, [this].concat(aps.call(arguments, 0)));
                };
            });
            d.forEach(["attr", "style"], function (name) {
                nlp[name] = _207(d[name], _208);
            });
            d.forEach(["connect", "addClass", "removeClass", "replaceClass", "toggleClass", "empty", "removeAttr"], function (name) {
                nlp[name] = _204(d[name]);
            });
            dojo.extend(dojo.NodeList, {
                _normalize: function (_20a, _20b) {
                    var _20c = _20a.parse === true ? true : false;
                    if (typeof _20a.template == "string") {
                        var _20d = _20a.templateFunc || (dojo.string && dojo.string.substitute);
                        _20a = _20d ? _20d(_20a.template, _20a) : _20a;
                    }
                    var type = (typeof _20a);
                    if (type == "string" || type == "number") {
                        _20a = dojo._toDom(_20a, (_20b && _20b.ownerDocument));
                        if (_20a.nodeType == 11) {
                            _20a = dojo._toArray(_20a.childNodes);
                        } else {
                            _20a = [_20a];
                        }
                    } else {
                        if (!dojo.isArrayLike(_20a)) {
                            _20a = [_20a];
                        } else {
                            if (!dojo.isArray(_20a)) {
                                _20a = dojo._toArray(_20a);
                            }
                        }
                    }
                    if (_20c) {
                        _20a._runParse = true;
                    }
                    return _20a;
                },
                _cloneNode: function (node) {
                    return node.cloneNode(true);
                },
                _place: function (ary, _20e, _20f, _210) {
                    if (_20e.nodeType != 1 && _20f == "only") {
                        return;
                    }
                    var _211 = _20e,
                        _212;
                    var _213 = ary.length;
                    for (var i = _213 - 1; i >= 0; i--) {
                        var node = (_210 ? this._cloneNode(ary[i]) : ary[i]);
                        if (ary._runParse && dojo.parser && dojo.parser.parse) {
                            if (!_212) {
                                _212 = _211.ownerDocument.createElement("div");
                            }
                            _212.appendChild(node);
                            dojo.parser.parse(_212);
                            node = _212.firstChild;
                            while (_212.firstChild) {
                                _212.removeChild(_212.firstChild);
                            }
                        }
                        if (i == _213 - 1) {
                            dojo.place(node, _211, _20f);
                        } else {
                            _211.parentNode.insertBefore(node, _211);
                        }
                        _211 = node;
                    }
                },
                _stash: function (_214) {
                    this._parent = _214;
                    return this;
                },
                end: function () {
                    if (this._parent) {
                        return this._parent;
                    } else {
                        return new this._NodeListCtor();
                    }
                },
                concat: function (item) {
                    var t = d.isArray(this) ? this : aps.call(this, 0),
                        m = d.map(arguments, function (a) {
                            return a && !d.isArray(a) && (typeof NodeList != "undefined" && a.constructor === NodeList || a.constructor === this._NodeListCtor) ? aps.call(a, 0) : a;
                        });
                    return this._wrap(apc.apply(t, m), this);
                },
                map: function (func, obj) {
                    return this._wrap(d.map(this, func, obj), this);
                },
                forEach: function (_215, _216) {
                    d.forEach(this, _215, _216);
                    return this;
                },
                coords: _205(d.coords),
                position: _205(d.position),
                place: function (_217, _218) {
                    var item = d.query(_217)[0];
                    return this.forEach(function (node) {
                        d.place(node, item, _218);
                    });
                },
                orphan: function (_219) {
                    return (_219 ? d._filterQueryResult(this, _219) : this).forEach(_209);
                },
                adopt: function (_21a, _21b) {
                    return d.query(_21a).place(this[0], _21b)._stash(this);
                },
                query: function (_21c) {
                    if (!_21c) {
                        return this;
                    }
                    var ret = this.map(function (node) {
                        return d.query(_21c, node).filter(function (_21d) {
                            return _21d !== undefined;
                        });
                    });
                    return this._wrap(apc.apply([], ret), this);
                },
                filter: function (_21e) {
                    var a = arguments,
                        _21f = this,
                        _220 = 0;
                    if (typeof _21e == "string") {
                        _21f = d._filterQueryResult(this, a[0]);
                        if (a.length == 1) {
                            return _21f._stash(this);
                        }
                        _220 = 1;
                    }
                    return this._wrap(d.filter(_21f, a[_220], a[_220 + 1]), this);
                },
                addContent: function (_221, _222) {
                    _221 = this._normalize(_221, this[0]);
                    for (var i = 0, node;
                    (node = this[i]); i++) {
                        this._place(_221, node, _222, i > 0);
                    }
                    return this;
                },
                instantiate: function (_223, _224) {
                    var c = d.isFunction(_223) ? _223 : d.getObject(_223);
                    _224 = _224 || {};
                    return this.forEach(function (node) {
                        new c(_224, node);
                    });
                },
                at: function () {
                    var t = new this._NodeListCtor();
                    d.forEach(arguments, function (i) {
                        if (i < 0) {
                            i = this.length + i;
                        }
                        if (this[i]) {
                            t.push(this[i]);
                        }
                    }, this);
                    return t._stash(this);
                }
            });
            nl.events = ["blur", "focus", "change", "click", "error", "keydown", "keypress", "keyup", "load", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "submit"];
            d.forEach(nl.events, function (evt) {
                var _225 = "on" + evt;
                nlp[_225] = function (a, b) {
                    return this.connect(_225, a, b);
                };
            });
        })();
    }
    if (!dojo._hasResource["dojo._base.query"]) {
        dojo._hasResource["dojo._base.query"] = true;
        (function () {
            var _226 = function (d) {
                var trim = d.trim;
                var each = d.forEach;
                var qlc = (d._NodeListCtor = d.NodeList);
                var _227 = function () {
                    return d.doc;
                };
                var _228 = ((d.isWebKit || d.isMozilla) && ((_227().compatMode) == "BackCompat"));
                var _229 = ">~+";
                var _22a = false;
                var _22b = function () {
                    return true;
                };
                var _22c = function (_22d) {
                    if (_229.indexOf(_22d.slice(-1)) >= 0) {
                        _22d += " * ";
                    } else {
                        _22d += " ";
                    }
                    var ts = function (s, e) {
                        return trim(_22d.slice(s, e));
                    };
                    var _22e = [];
                    var _22f = -1,
                        _230 = -1,
                        _231 = -1,
                        _232 = -1,
                        _233 = -1,
                        inId = -1,
                        _234 = -1,
                        lc = "",
                        cc = "",
                        _235;
                    var x = 0,
                        ql = _22d.length,
                        _236 = null,
                        _237 = null;
                    var _238 = function () {
                        if (_234 >= 0) {
                            var tv = (_234 == x) ? null : ts(_234, x);
                            _236[(_229.indexOf(tv) < 0) ? "tag" : "oper"] = tv;
                            _234 = -1;
                        }
                    };
                    var _239 = function () {
                        if (inId >= 0) {
                            _236.id = ts(inId, x).replace(/\\/g, "");
                            inId = -1;
                        }
                    };
                    var _23a = function () {
                        if (_233 >= 0) {
                            _236.classes.push(ts(_233 + 1, x).replace(/\\/g, ""));
                            _233 = -1;
                        }
                    };
                    var _23b = function () {
                        _239();
                        _238();
                        _23a();
                    };
                    var _23c = function () {
                        _23b();
                        if (_232 >= 0) {
                            _236.pseudos.push({
                                name: ts(_232 + 1, x)
                            });
                        }
                        _236.loops = (_236.pseudos.length || _236.attrs.length || _236.classes.length);
                        _236.oquery = _236.query = ts(_235, x);
                        _236.otag = _236.tag = (_236["oper"]) ? null : (_236.tag || "*");
                        if (_236.tag) {
                            _236.tag = _236.tag.toUpperCase();
                        }
                        if (_22e.length && (_22e[_22e.length - 1].oper)) {
                            _236.infixOper = _22e.pop();
                            _236.query = _236.infixOper.query + " " + _236.query;
                        }
                        _22e.push(_236);
                        _236 = null;
                    };
                    for (; lc = cc, cc = _22d.charAt(x), x < ql; x++) {
                        if (lc == "\\") {
                            continue;
                        }
                        if (!_236) {
                            _235 = x;
                            _236 = {
                                query: null,
                                pseudos: [],
                                attrs: [],
                                classes: [],
                                tag: null,
                                oper: null,
                                id: null,
                                getTag: function () {
                                    return (_22a) ? this.otag : this.tag;
                                }
                            };
                            _234 = x;
                        }
                        if (_22f >= 0) {
                            if (cc == "]") {
                                if (!_237.attr) {
                                    _237.attr = ts(_22f + 1, x);
                                } else {
                                    _237.matchFor = ts((_231 || _22f + 1), x);
                                }
                                var cmf = _237.matchFor;
                                if (cmf) {
                                    if ((cmf.charAt(0) == "\"") || (cmf.charAt(0) == "'")) {
                                        _237.matchFor = cmf.slice(1, -1);
                                    }
                                }
                                _236.attrs.push(_237);
                                _237 = null;
                                _22f = _231 = -1;
                            } else {
                                if (cc == "=") {
                                    var _23d = ("|~^$*".indexOf(lc) >= 0) ? lc : "";
                                    _237.type = _23d + cc;
                                    _237.attr = ts(_22f + 1, x - _23d.length);
                                    _231 = x + 1;
                                }
                            }
                        } else {
                            if (_230 >= 0) {
                                if (cc == ")") {
                                    if (_232 >= 0) {
                                        _237.value = ts(_230 + 1, x);
                                    }
                                    _232 = _230 = -1;
                                }
                            } else {
                                if (cc == "#") {
                                    _23b();
                                    inId = x + 1;
                                } else {
                                    if (cc == ".") {
                                        _23b();
                                        _233 = x;
                                    } else {
                                        if (cc == ":") {
                                            _23b();
                                            _232 = x;
                                        } else {
                                            if (cc == "[") {
                                                _23b();
                                                _22f = x;
                                                _237 = {};
                                            } else {
                                                if (cc == "(") {
                                                    if (_232 >= 0) {
                                                        _237 = {
                                                            name: ts(_232 + 1, x),
                                                            value: null
                                                        };
                                                        _236.pseudos.push(_237);
                                                    }
                                                    _230 = x;
                                                } else {
                                                    if ((cc == " ") && (lc != cc)) {
                                                        _23c();
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return _22e;
                };
                var _23e = function (_23f, _240) {
                    if (!_23f) {
                        return _240;
                    }
                    if (!_240) {
                        return _23f;
                    }
                    return function () {
                        return _23f.apply(window, arguments) && _240.apply(window, arguments);
                    };
                };
                var _241 = function (i, arr) {
                    var r = arr || [];
                    if (i) {
                        r.push(i);
                    }
                    return r;
                };
                var _242 = function (n) {
                    return (1 == n.nodeType);
                };
                var _243 = "";
                var _244 = function (elem, attr) {
                    if (!elem) {
                        return _243;
                    }
                    if (attr == "class") {
                        return elem.className || _243;
                    }
                    if (attr == "for") {
                        return elem.htmlFor || _243;
                    }
                    if (attr == "style") {
                        return elem.style.cssText || _243;
                    }
                    return (_22a ? elem.getAttribute(attr) : elem.getAttribute(attr, 2)) || _243;
                };
                var _245 = {
                    "*=": function (attr, _246) {
                        return function (elem) {
                            return (_244(elem, attr).indexOf(_246) >= 0);
                        };
                    },
                    "^=": function (attr, _247) {
                        return function (elem) {
                            return (_244(elem, attr).indexOf(_247) == 0);
                        };
                    },
                    "$=": function (attr, _248) {
                        var tval = " " + _248;
                        return function (elem) {
                            var ea = " " + _244(elem, attr);
                            return (ea.lastIndexOf(_248) == (ea.length - _248.length));
                        };
                    },
                    "~=": function (attr, _249) {
                        var tval = " " + _249 + " ";
                        return function (elem) {
                            var ea = " " + _244(elem, attr) + " ";
                            return (ea.indexOf(tval) >= 0);
                        };
                    },
                    "|=": function (attr, _24a) {
                        var _24b = " " + _24a + "-";
                        return function (elem) {
                            var ea = " " + _244(elem, attr);
                            return ((ea == _24a) || (ea.indexOf(_24b) == 0));
                        };
                    },
                    "=": function (attr, _24c) {
                        return function (elem) {
                            return (_244(elem, attr) == _24c);
                        };
                    }
                };
                var _24d = (typeof _227().firstChild.nextElementSibling == "undefined");
                var _24e = !_24d ? "nextElementSibling" : "nextSibling";
                var _24f = !_24d ? "previousElementSibling" : "previousSibling";
                var _250 = (_24d ? _242 : _22b);
                var _251 = function (node) {
                    while (node = node[_24f]) {
                        if (_250(node)) {
                            return false;
                        }
                    }
                    return true;
                };
                var _252 = function (node) {
                    while (node = node[_24e]) {
                        if (_250(node)) {
                            return false;
                        }
                    }
                    return true;
                };
                var _253 = function (node) {
                    var root = node.parentNode;
                    var i = 0,
                        tret = root.children || root.childNodes,
                        ci = (node["_i"] || -1),
                        cl = (root["_l"] || -1);
                    if (!tret) {
                        return -1;
                    }
                    var l = tret.length;
                    if (cl == l && ci >= 0 && cl >= 0) {
                        return ci;
                    }
                    root["_l"] = l;
                    ci = -1;
                    for (var te = root["firstElementChild"] || root["firstChild"]; te; te = te[_24e]) {
                        if (_250(te)) {
                            te["_i"] = ++i;
                            if (node === te) {
                                ci = i;
                            }
                        }
                    }
                    return ci;
                };
                var _254 = function (elem) {
                    return !((_253(elem)) % 2);
                };
                var _255 = function (elem) {
                    return ((_253(elem)) % 2);
                };
                var _256 = {
                    "checked": function (name, _257) {
                        return function (elem) {
                            return !!("checked" in elem ? elem.checked : elem.selected);
                        };
                    },
                    "first-child": function () {
                        return _251;
                    },
                    "last-child": function () {
                        return _252;
                    },
                    "only-child": function (name, _258) {
                        return function (node) {
                            if (!_251(node)) {
                                return false;
                            }
                            if (!_252(node)) {
                                return false;
                            }
                            return true;
                        };
                    },
                    "empty": function (name, _259) {
                        return function (elem) {
                            var cn = elem.childNodes;
                            var cnl = elem.childNodes.length;
                            for (var x = cnl - 1; x >= 0; x--) {
                                var nt = cn[x].nodeType;
                                if ((nt === 1) || (nt == 3)) {
                                    return false;
                                }
                            }
                            return true;
                        };
                    },
                    "contains": function (name, _25a) {
                        var cz = _25a.charAt(0);
                        if (cz == "\"" || cz == "'") {
                            _25a = _25a.slice(1, -1);
                        }
                        return function (elem) {
                            return (elem.innerHTML.indexOf(_25a) >= 0);
                        };
                    },
                    "not": function (name, _25b) {
                        var p = _22c(_25b)[0];
                        var _25c = {
                            el: 1
                        };
                        if (p.tag != "*") {
                            _25c.tag = 1;
                        }
                        if (!p.classes.length) {
                            _25c.classes = 1;
                        }
                        var ntf = _25d(p, _25c);
                        return function (elem) {
                            return (!ntf(elem));
                        };
                    },
                    "nth-child": function (name, _25e) {
                        var pi = parseInt;
                        if (_25e == "odd") {
                            return _255;
                        } else {
                            if (_25e == "even") {
                                return _254;
                            }
                        }
                        if (_25e.indexOf("n") != -1) {
                            var _25f = _25e.split("n", 2);
                            var pred = _25f[0] ? ((_25f[0] == "-") ? -1 : pi(_25f[0])) : 1;
                            var idx = _25f[1] ? pi(_25f[1]) : 0;
                            var lb = 0,
                                ub = -1;
                            if (pred > 0) {
                                if (idx < 0) {
                                    idx = (idx % pred) && (pred + (idx % pred));
                                } else {
                                    if (idx > 0) {
                                        if (idx >= pred) {
                                            lb = idx - idx % pred;
                                        }
                                        idx = idx % pred;
                                    }
                                }
                            } else {
                                if (pred < 0) {
                                    pred *= -1;
                                    if (idx > 0) {
                                        ub = idx;
                                        idx = idx % pred;
                                    }
                                }
                            }
                            if (pred > 0) {
                                return function (elem) {
                                    var i = _253(elem);
                                    return (i >= lb) && (ub < 0 || i <= ub) && ((i % pred) == idx);
                                };
                            } else {
                                _25e = idx;
                            }
                        }
                        var _260 = pi(_25e);
                        return function (elem) {
                            return (_253(elem) == _260);
                        };
                    }
                };
                var _261 = (d.isIE < 9 || (dojo.isIE && dojo.isQuirks)) ? function (cond) {
                        var clc = cond.toLowerCase();
                        if (clc == "class") {
                            cond = "className";
                        }
                        return function (elem) {
                            return (_22a ? elem.getAttribute(cond) : elem[cond] || elem[clc]);
                        };
                    } : function (cond) {
                        return function (elem) {
                            return (elem && elem.getAttribute && elem.hasAttribute(cond));
                        };
                    };
                var _25d = function (_262, _263) {
                    if (!_262) {
                        return _22b;
                    }
                    _263 = _263 || {};
                    var ff = null;
                    if (!("el" in _263)) {
                        ff = _23e(ff, _242);
                    }
                    if (!("tag" in _263)) {
                        if (_262.tag != "*") {
                            ff = _23e(ff, function (elem) {
                                return (elem && (elem.tagName == _262.getTag()));
                            });
                        }
                    }
                    if (!("classes" in _263)) {
                        each(_262.classes, function (_264, idx, arr) {
                            var re = new RegExp("(?:^|\\s)" + _264 + "(?:\\s|$)");
                            ff = _23e(ff, function (elem) {
                                return re.test(elem.className);
                            });
                            ff.count = idx;
                        });
                    }
                    if (!("pseudos" in _263)) {
                        each(_262.pseudos, function (_265) {
                            var pn = _265.name;
                            if (_256[pn]) {
                                ff = _23e(ff, _256[pn](pn, _265.value));
                            }
                        });
                    }
                    if (!("attrs" in _263)) {
                        each(_262.attrs, function (attr) {
                            var _266;
                            var a = attr.attr;
                            if (attr.type && _245[attr.type]) {
                                _266 = _245[attr.type](a, attr.matchFor);
                            } else {
                                if (a.length) {
                                    _266 = _261(a);
                                }
                            }
                            if (_266) {
                                ff = _23e(ff, _266);
                            }
                        });
                    }
                    if (!("id" in _263)) {
                        if (_262.id) {
                            ff = _23e(ff, function (elem) {
                                return ( !! elem && (elem.id == _262.id));
                            });
                        }
                    }
                    if (!ff) {
                        if (!("default" in _263)) {
                            ff = _22b;
                        }
                    }
                    return ff;
                };
                var _267 = function (_268) {
                    return function (node, ret, bag) {
                        while (node = node[_24e]) {
                            if (_24d && (!_242(node))) {
                                continue;
                            }
                            if ((!bag || _269(node, bag)) && _268(node)) {
                                ret.push(node);
                            }
                            break;
                        }
                        return ret;
                    };
                };
                var _26a = function (_26b) {
                    return function (root, ret, bag) {
                        var te = root[_24e];
                        while (te) {
                            if (_250(te)) {
                                if (bag && !_269(te, bag)) {
                                    break;
                                }
                                if (_26b(te)) {
                                    ret.push(te);
                                }
                            }
                            te = te[_24e];
                        }
                        return ret;
                    };
                };
                var _26c = function (_26d) {
                    _26d = _26d || _22b;
                    return function (root, ret, bag) {
                        var te, x = 0,
                            tret = root.children || root.childNodes;
                        while (te = tret[x++]) {
                            if (_250(te) && (!bag || _269(te, bag)) && (_26d(te, x))) {
                                ret.push(te);
                            }
                        }
                        return ret;
                    };
                };
                var _26e = function (node, root) {
                    var pn = node.parentNode;
                    while (pn) {
                        if (pn == root) {
                            break;
                        }
                        pn = pn.parentNode;
                    }
                    return !!pn;
                };
                var _26f = {};
                var _270 = function (_271) {
                    var _272 = _26f[_271.query];
                    if (_272) {
                        return _272;
                    }
                    var io = _271.infixOper;
                    var oper = (io ? io.oper : "");
                    var _273 = _25d(_271, {
                        el: 1
                    });
                    var qt = _271.tag;
                    var _274 = ("*" == qt);
                    var ecs = _227()["getElementsByClassName"];
                    if (!oper) {
                        if (_271.id) {
                            _273 = (!_271.loops && _274) ? _22b : _25d(_271, {
                                el: 1,
                                id: 1
                            });
                            _272 = function (root, arr) {
                                var te = d.byId(_271.id, (root.ownerDocument || root));
                                if (!te || !_273(te)) {
                                    return;
                                }
                                if (9 == root.nodeType) {
                                    return _241(te, arr);
                                } else {
                                    if (_26e(te, root)) {
                                        return _241(te, arr);
                                    }
                                }
                            };
                        } else {
                            if (ecs && /\{\s*\[native code\]\s*\}/.test(String(ecs)) && _271.classes.length && !_228) {
                                _273 = _25d(_271, {
                                    el: 1,
                                    classes: 1,
                                    id: 1
                                });
                                var _275 = _271.classes.join(" ");
                                _272 = function (root, arr, bag) {
                                    var ret = _241(0, arr),
                                        te, x = 0;
                                    var tret = root.getElementsByClassName(_275);
                                    while ((te = tret[x++])) {
                                        if (_273(te, root) && _269(te, bag)) {
                                            ret.push(te);
                                        }
                                    }
                                    return ret;
                                };
                            } else {
                                if (!_274 && !_271.loops) {
                                    _272 = function (root, arr, bag) {
                                        var ret = _241(0, arr),
                                            te, x = 0;
                                        var tret = root.getElementsByTagName(_271.getTag());
                                        while ((te = tret[x++])) {
                                            if (_269(te, bag)) {
                                                ret.push(te);
                                            }
                                        }
                                        return ret;
                                    };
                                } else {
                                    _273 = _25d(_271, {
                                        el: 1,
                                        tag: 1,
                                        id: 1
                                    });
                                    _272 = function (root, arr, bag) {
                                        var ret = _241(0, arr),
                                            te, x = 0;
                                        var tret = root.getElementsByTagName(_271.getTag());
                                        while ((te = tret[x++])) {
                                            if (_273(te, root) && _269(te, bag)) {
                                                ret.push(te);
                                            }
                                        }
                                        return ret;
                                    };
                                }
                            }
                        }
                    } else {
                        var _276 = {
                            el: 1
                        };
                        if (_274) {
                            _276.tag = 1;
                        }
                        _273 = _25d(_271, _276);
                        if ("+" == oper) {
                            _272 = _267(_273);
                        } else {
                            if ("~" == oper) {
                                _272 = _26a(_273);
                            } else {
                                if (">" == oper) {
                                    _272 = _26c(_273);
                                }
                            }
                        }
                    }
                    return _26f[_271.query] = _272;
                };
                var _277 = function (root, _278) {
                    var _279 = _241(root),
                        qp, x, te, qpl = _278.length,
                        bag, ret;
                    for (var i = 0; i < qpl; i++) {
                        ret = [];
                        qp = _278[i];
                        x = _279.length - 1;
                        if (x > 0) {
                            bag = {};
                            ret.nozip = true;
                        }
                        var gef = _270(qp);
                        for (var j = 0;
                        (te = _279[j]); j++) {
                            gef(te, ret, bag);
                        }
                        if (!ret.length) {
                            break;
                        }
                        _279 = ret;
                    }
                    return ret;
                };
                var _27a = {}, _27b = {};
                var _27c = function (_27d) {
                    var _27e = _22c(trim(_27d));
                    if (_27e.length == 1) {
                        var tef = _270(_27e[0]);
                        return function (root) {
                            var r = tef(root, new qlc());
                            if (r) {
                                r.nozip = true;
                            }
                            return r;
                        };
                    }
                    return function (root) {
                        return _277(root, _27e);
                    };
                };
                var nua = navigator.userAgent;
                var wk = "WebKit/";
                var _27f = (d.isWebKit && (nua.indexOf(wk) > 0) && (parseFloat(nua.split(wk)[1]) > 528));
                var _280 = d.isIE ? "commentStrip" : "nozip";
                var qsa = "querySelectorAll";
                var _281 = ( !! _227()[qsa] && (!d.isSafari || (d.isSafari > 3.1) || _27f));
                var _282 = /n\+\d|([^ ])?([>~+])([^ =])?/g;
                var _283 = function (_284, pre, ch, post) {
                    return ch ? (pre ? pre + " " : "") + ch + (post ? " " + post : "") : _284;
                };
                var _285 = function (_286, _287) {
                    _286 = _286.replace(_282, _283);
                    if (_281) {
                        var _288 = _27b[_286];
                        if (_288 && !_287) {
                            return _288;
                        }
                    }
                    var _289 = _27a[_286];
                    if (_289) {
                        return _289;
                    }
                    var qcz = _286.charAt(0);
                    var _28a = (-1 == _286.indexOf(" "));
                    if ((_286.indexOf("#") >= 0) && (_28a)) {
                        _287 = true;
                    }
                    var _28b = (_281 && (!_287) && (_229.indexOf(qcz) == -1) && (!d.isIE || (_286.indexOf(":") == -1)) && (!(_228 && (_286.indexOf(".") >= 0))) && (_286.indexOf(":contains") == -1) && (_286.indexOf(":checked") == -1) && (_286.indexOf("|=") == -1));
                    if (_28b) {
                        var tq = (_229.indexOf(_286.charAt(_286.length - 1)) >= 0) ? (_286 + " *") : _286;
                        return _27b[_286] = function (root) {
                            try {
                                if (!((9 == root.nodeType) || _28a)) {
                                    throw "";
                                }
                                var r = root[qsa](tq);
                                r[_280] = true;
                                return r;
                            } catch (e) {
                                return _285(_286, true)(root);
                            }
                        };
                    } else {
                        var _28c = _286.split(/\s*,\s*/);
                        return _27a[_286] = ((_28c.length < 2) ? _27c(_286) : function (root) {
                            var _28d = 0,
                                ret = [],
                                tp;
                            while ((tp = _28c[_28d++])) {
                                ret = ret.concat(_27c(tp)(root));
                            }
                            return ret;
                        });
                    }
                };
                var _28e = 0;
                var _28f = d.isIE ? function (node) {
                        if (_22a) {
                            return (node.getAttribute("_uid") || node.setAttribute("_uid", ++_28e) || _28e);
                        } else {
                            return node.uniqueID;
                        }
                    } : function (node) {
                        return (node._uid || (node._uid = ++_28e));
                    };
                var _269 = function (node, bag) {
                    if (!bag) {
                        return 1;
                    }
                    var id = _28f(node);
                    if (!bag[id]) {
                        return bag[id] = 1;
                    }
                    return 0;
                };
                var _290 = "_zipIdx";
                var _291 = function (arr) {
                    if (arr && arr.nozip) {
                        return (qlc._wrap) ? qlc._wrap(arr) : arr;
                    }
                    var ret = new qlc();
                    if (!arr || !arr.length) {
                        return ret;
                    }
                    if (arr[0]) {
                        ret.push(arr[0]);
                    }
                    if (arr.length < 2) {
                        return ret;
                    }
                    _28e++;
                    if (d.isIE && _22a) {
                        var _292 = _28e + "";
                        arr[0].setAttribute(_290, _292);
                        for (var x = 1, te; te = arr[x]; x++) {
                            if (arr[x].getAttribute(_290) != _292) {
                                ret.push(te);
                            }
                            te.setAttribute(_290, _292);
                        }
                    } else {
                        if (d.isIE && arr.commentStrip) {
                            try {
                                for (var x = 1, te; te = arr[x]; x++) {
                                    if (_242(te)) {
                                        ret.push(te);
                                    }
                                }
                            } catch (e) {}
                        } else {
                            if (arr[0]) {
                                arr[0][_290] = _28e;
                            }
                            for (var x = 1, te; te = arr[x]; x++) {
                                if (arr[x][_290] != _28e) {
                                    ret.push(te);
                                }
                                te[_290] = _28e;
                            }
                        }
                    }
                    return ret;
                };
                d.query = function (_293, root) {
                    qlc = d._NodeListCtor;
                    if (!_293) {
                        return new qlc();
                    }
                    if (_293.constructor == qlc) {
                        return _293;
                    }
                    if (typeof _293 != "string") {
                        return new qlc(_293);
                    }
                    if (typeof root == "string") {
                        root = d.byId(root);
                        if (!root) {
                            return new qlc();
                        }
                    }
                    root = root || _227();
                    var od = root.ownerDocument || root.documentElement;
                    _22a = (root.contentType && root.contentType == "application/xml") || (d.isOpera && (root.doctype || od.toString() == "[object XMLDocument]")) || ( !! od) && (d.isIE ? od.xml : (root.xmlVersion || od.xmlVersion));
                    var r = _285(_293)(root);
                    if (r && r.nozip && !qlc._wrap) {
                        return r;
                    }
                    return _291(r);
                };
                d.query.pseudos = _256;
                d._filterQueryResult = function (_294, _295, root) {
                    var _296 = new d._NodeListCtor(),
                        _297 = _22c(_295),
                        _298 = (_297.length == 1 && !/[^\w#\.]/.test(_295)) ? _25d(_297[0]) : function (node) {
                            return dojo.query(_295, root).indexOf(node) != -1;
                        };
                    for (var x = 0, te; te = _294[x]; x++) {
                        if (_298(te)) {
                            _296.push(te);
                        }
                    }
                    return _296;
                };
            };
            var _299 = function () {
                acme = {
                    trim: function (str) {
                        str = str.replace(/^\s+/, "");
                        for (var i = str.length - 1; i >= 0; i--) {
                            if (/\S/.test(str.charAt(i))) {
                                str = str.substring(0, i + 1);
                                break;
                            }
                        }
                        return str;
                    },
                    forEach: function (arr, _29a, _29b) {
                        if (!arr || !arr.length) {
                            return;
                        }
                        for (var i = 0, l = arr.length; i < l; ++i) {
                            _29a.call(_29b || window, arr[i], i, arr);
                        }
                    },
                    byId: function (id, doc) {
                        if (typeof id == "string") {
                            return (doc || document).getElementById(id);
                        } else {
                            return id;
                        }
                    },
                    doc: document,
                    NodeList: Array
                };
                var n = navigator;
                var dua = n.userAgent;
                var dav = n.appVersion;
                var tv = parseFloat(dav);
                acme.isOpera = (dua.indexOf("Opera") >= 0) ? tv : undefined;
                acme.isKhtml = (dav.indexOf("Konqueror") >= 0) ? tv : undefined;
                acme.isWebKit = parseFloat(dua.split("WebKit/")[1]) || undefined;
                acme.isChrome = parseFloat(dua.split("Chrome/")[1]) || undefined;
                var _29c = Math.max(dav.indexOf("WebKit"), dav.indexOf("Safari"), 0);
                if (_29c && !acme.isChrome) {
                    acme.isSafari = parseFloat(dav.split("Version/")[1]);
                    if (!acme.isSafari || parseFloat(dav.substr(_29c + 7)) <= 419.3) {
                        acme.isSafari = 2;
                    }
                }
                if (document.all && !acme.isOpera) {
                    acme.isIE = parseFloat(dav.split("MSIE ")[1]) || undefined;
                }
                Array._wrap = function (arr) {
                    return arr;
                };
                return acme;
            };
            if (this["dojo"]) {
                dojo.provide("dojo._base.query");
                _226(this["queryPortability"] || this["acme"] || dojo);
            } else {
                _226(this["queryPortability"] || this["acme"] || _299());
            }
        })();
    }
    if (!dojo._hasResource["dojo._base.xhr"]) {
        dojo._hasResource["dojo._base.xhr"] = true;
        dojo.provide("dojo._base.xhr");
        (function () {
            var _29d = dojo,
                cfg = _29d.config;

            function _29e(obj, name, _29f) {
                if (_29f === null) {
                    return;
                }
                var val = obj[name];
                if (typeof val == "string") {
                    obj[name] = [val, _29f];
                } else {
                    if (_29d.isArray(val)) {
                        val.push(_29f);
                    } else {
                        obj[name] = _29f;
                    }
                }
            };
            dojo.fieldToObject = function (_2a0) {
                var ret = null;
                var item = _29d.byId(_2a0);
                if (item) {
                    var _2a1 = item.name;
                    var type = (item.type || "").toLowerCase();
                    if (_2a1 && type && !item.disabled) {
                        if (type == "radio" || type == "checkbox") {
                            if (item.checked) {
                                ret = item.value;
                            }
                        } else {
                            if (item.multiple) {
                                ret = [];
                                _29d.query("option", item).forEach(function (opt) {
                                    if (opt.selected) {
                                        ret.push(opt.value);
                                    }
                                });
                            } else {
                                ret = item.value;
                            }
                        }
                    }
                }
                return ret;
            };
            dojo.formToObject = function (_2a2) {
                var ret = {};
                var _2a3 = "file|submit|image|reset|button|";
                _29d.forEach(dojo.byId(_2a2).elements, function (item) {
                    var _2a4 = item.name;
                    var type = (item.type || "").toLowerCase();
                    if (_2a4 && type && _2a3.indexOf(type) == -1 && !item.disabled) {
                        _29e(ret, _2a4, _29d.fieldToObject(item));
                        if (type == "image") {
                            ret[_2a4 + ".x"] = ret[_2a4 + ".y"] = ret[_2a4].x = ret[_2a4].y = 0;
                        }
                    }
                });
                return ret;
            };
            dojo.objectToQuery = function (map) {
                var enc = encodeURIComponent;
                var _2a5 = [];
                var _2a6 = {};
                for (var name in map) {
                    var _2a7 = map[name];
                    if (_2a7 != _2a6[name]) {
                        var _2a8 = enc(name) + "=";
                        if (_29d.isArray(_2a7)) {
                            for (var i = 0; i < _2a7.length; i++) {
                                _2a5.push(_2a8 + enc(_2a7[i]));
                            }
                        } else {
                            _2a5.push(_2a8 + enc(_2a7));
                        }
                    }
                }
                return _2a5.join("&");
            };
            dojo.formToQuery = function (_2a9) {
                return _29d.objectToQuery(_29d.formToObject(_2a9));
            };
            dojo.formToJson = function (_2aa, _2ab) {
                return _29d.toJson(_29d.formToObject(_2aa), _2ab);
            };
            dojo.queryToObject = function (str) {
                var ret = {};
                var qp = str.split("&");
                var dec = decodeURIComponent;
                _29d.forEach(qp, function (item) {
                    if (item.length) {
                        var _2ac = item.split("=");
                        var name = dec(_2ac.shift());
                        var val = dec(_2ac.join("="));
                        if (typeof ret[name] == "string") {
                            ret[name] = [ret[name]];
                        }
                        if (_29d.isArray(ret[name])) {
                            ret[name].push(val);
                        } else {
                            ret[name] = val;
                        }
                    }
                });
                return ret;
            };
            dojo._blockAsync = false;
            var _2ad = _29d._contentHandlers = dojo.contentHandlers = {
                text: function (xhr) {
                    return xhr.responseText;
                },
                json: function (xhr) {
                    return _29d.fromJson(xhr.responseText || null);
                },
                "json-comment-filtered": function (xhr) {
                    if (!dojo.config.useCommentedJson) {}
                    var _2ae = xhr.responseText;
                    var _2af = _2ae.indexOf("/*");
                    var _2b0 = _2ae.lastIndexOf("*/");
                    if (_2af == -1 || _2b0 == -1) {
                        throw new Error("JSON was not comment filtered");
                    }
                    return _29d.fromJson(_2ae.substring(_2af + 2, _2b0));
                },
                javascript: function (xhr) {
                    return _29d.eval(xhr.responseText);
                },
                xml: function (xhr) {
                    var _2b1 = xhr.responseXML;
                    if (_29d.isIE && (!_2b1 || !_2b1.documentElement)) {
                        var ms = function (n) {
                            return "MSXML" + n + ".DOMDocument";
                        };
                        var dp = ["Microsoft.XMLDOM", ms(6), ms(4), ms(3), ms(2)];
                        _29d.some(dp, function (p) {
                            try {
                                var dom = new ActiveXObject(p);
                                dom.async = false;
                                dom.loadXML(xhr.responseText);
                                _2b1 = dom;
                            } catch (e) {
                                return false;
                            }
                            return true;
                        });
                    }
                    return _2b1;
                },
                "json-comment-optional": function (xhr) {
                    if (xhr.responseText && /^[^{\[]*\/\*/.test(xhr.responseText)) {
                        return _2ad["json-comment-filtered"](xhr);
                    } else {
                        return _2ad["json"](xhr);
                    }
                }
            };
            dojo._ioSetArgs = function (args, _2b2, _2b3, _2b4) {
                var _2b5 = {
                    args: args,
                    url: args.url
                };
                var _2b6 = null;
                if (args.form) {
                    var form = _29d.byId(args.form);
                    var _2b7 = form.getAttributeNode("action");
                    _2b5.url = _2b5.url || (_2b7 ? _2b7.value : null);
                    _2b6 = _29d.formToObject(form);
                }
                var _2b8 = [{}];
                if (_2b6) {
                    _2b8.push(_2b6);
                }
                if (args.content) {
                    _2b8.push(args.content);
                }
                if (args.preventCache) {
                    _2b8.push({
                        "dojo.preventCache": new Date().valueOf()
                    });
                }
                _2b5.query = _29d.objectToQuery(_29d.mixin.apply(null, _2b8));
                _2b5.handleAs = args.handleAs || "text";
                var d = new _29d.Deferred(_2b2);
                d.addCallbacks(_2b3, function (_2b9) {
                    return _2b4(_2b9, d);
                });
                var ld = args.load;
                if (ld && _29d.isFunction(ld)) {
                    d.addCallback(function (_2ba) {
                        return ld.call(args, _2ba, _2b5);
                    });
                }
                var err = args.error;
                if (err && _29d.isFunction(err)) {
                    d.addErrback(function (_2bb) {
                        return err.call(args, _2bb, _2b5);
                    });
                }
                var _2bc = args.handle;
                if (_2bc && _29d.isFunction(_2bc)) {
                    d.addBoth(function (_2bd) {
                        return _2bc.call(args, _2bd, _2b5);
                    });
                }
                if (cfg.ioPublish && _29d.publish && _2b5.args.ioPublish !== false) {
                    d.addCallbacks(function (res) {
                        _29d.publish("/dojo/io/load", [d, res]);
                        return res;
                    }, function (res) {
                        _29d.publish("/dojo/io/error", [d, res]);
                        return res;
                    });
                    d.addBoth(function (res) {
                        _29d.publish("/dojo/io/done", [d, res]);
                        return res;
                    });
                }
                d.ioArgs = _2b5;
                return d;
            };
            var _2be = function (dfd) {
                dfd.canceled = true;
                var xhr = dfd.ioArgs.xhr;
                var _2bf = typeof xhr.abort;
                if (_2bf == "function" || _2bf == "object" || _2bf == "unknown") {
                    xhr.abort();
                }
                var err = dfd.ioArgs.error;
                if (!err) {
                    err = new Error("xhr cancelled");
                    err.dojoType = "cancel";
                }
                return err;
            };
            var _2c0 = function (dfd) {
                var ret = _2ad[dfd.ioArgs.handleAs](dfd.ioArgs.xhr);
                return ret === undefined ? null : ret;
            };
            var _2c1 = function (_2c2, dfd) {
                if (!dfd.ioArgs.args.failOk) {}
                return _2c2;
            };
            var _2c3 = null;
            var _2c4 = [];
            var _2c5 = 0;
            var _2c6 = function (dfd) {
                if (_2c5 <= 0) {
                    _2c5 = 0;
                    if (cfg.ioPublish && _29d.publish && (!dfd || dfd && dfd.ioArgs.args.ioPublish !== false)) {
                        _29d.publish("/dojo/io/stop");
                    }
                }
            };
            var _2c7 = function () {
                var now = (new Date()).getTime();
                if (!_29d._blockAsync) {
                    for (var i = 0, tif; i < _2c4.length && (tif = _2c4[i]); i++) {
                        var dfd = tif.dfd;
                        var func = function () {
                            if (!dfd || dfd.canceled || !tif.validCheck(dfd)) {
                                _2c4.splice(i--, 1);
                                _2c5 -= 1;
                            } else {
                                if (tif.ioCheck(dfd)) {
                                    _2c4.splice(i--, 1);
                                    tif.resHandle(dfd);
                                    _2c5 -= 1;
                                } else {
                                    if (dfd.startTime) {
                                        if (dfd.startTime + (dfd.ioArgs.args.timeout || 0) < now) {
                                            _2c4.splice(i--, 1);
                                            var err = new Error("timeout exceeded");
                                            err.dojoType = "timeout";
                                            dfd.errback(err);
                                            dfd.cancel();
                                            _2c5 -= 1;
                                        }
                                    }
                                }
                            }
                        };
                        if (dojo.config.debugAtAllCosts) {
                            func.call(this);
                        } else {
                            try {
                                func.call(this);
                            } catch (e) {
                                dfd.errback(e);
                            }
                        }
                    }
                }
                _2c6(dfd);
                if (!_2c4.length) {
                    clearInterval(_2c3);
                    _2c3 = null;
                    return;
                }
            };
            dojo._ioCancelAll = function () {
                try {
                    _29d.forEach(_2c4, function (i) {
                        try {
                            i.dfd.cancel();
                        } catch (e) {}
                    });
                } catch (e) {}
            };
            if (_29d.isIE) {
                _29d.addOnWindowUnload(_29d._ioCancelAll);
            }
            _29d._ioNotifyStart = function (dfd) {
                if (cfg.ioPublish && _29d.publish && dfd.ioArgs.args.ioPublish !== false) {
                    if (!_2c5) {
                        _29d.publish("/dojo/io/start");
                    }
                    _2c5 += 1;
                    _29d.publish("/dojo/io/send", [dfd]);
                }
            };
            _29d._ioWatch = function (dfd, _2c8, _2c9, _2ca) {
                var args = dfd.ioArgs.args;
                if (args.timeout) {
                    dfd.startTime = (new Date()).getTime();
                }
                _2c4.push({
                    dfd: dfd,
                    validCheck: _2c8,
                    ioCheck: _2c9,
                    resHandle: _2ca
                });
                if (!_2c3) {
                    _2c3 = setInterval(_2c7, 50);
                }
                if (args.sync) {
                    _2c7();
                }
            };
            var _2cb = "application/x-www-form-urlencoded";
            var _2cc = function (dfd) {
                return dfd.ioArgs.xhr.readyState;
            };
            var _2cd = function (dfd) {
                return 4 == dfd.ioArgs.xhr.readyState;
            };
            var _2ce = function (dfd) {
                var xhr = dfd.ioArgs.xhr;
                if (_29d._isDocumentOk(xhr)) {
                    dfd.callback(dfd);
                } else {
                    var err = new Error("Unable to load " + dfd.ioArgs.url + " status:" + xhr.status);
                    err.status = xhr.status;
                    err.responseText = xhr.responseText;
                    dfd.errback(err);
                }
            };
            dojo._ioAddQueryToUrl = function (_2cf) {
                if (_2cf.query.length) {
                    _2cf.url += (_2cf.url.indexOf("?") == -1 ? "?" : "&") + _2cf.query;
                    _2cf.query = null;
                }
            };
            dojo.xhr = function (_2d0, args, _2d1) {
                var dfd = _29d._ioSetArgs(args, _2be, _2c0, _2c1);
                var _2d2 = dfd.ioArgs;
                var xhr = _2d2.xhr = _29d._xhrObj(_2d2.args);
                if (!xhr) {
                    dfd.cancel();
                    return dfd;
                }
                if ("postData" in args) {
                    _2d2.query = args.postData;
                } else {
                    if ("putData" in args) {
                        _2d2.query = args.putData;
                    } else {
                        if ("rawBody" in args) {
                            _2d2.query = args.rawBody;
                        } else {
                            if ((arguments.length > 2 && !_2d1) || "POST|PUT".indexOf(_2d0.toUpperCase()) == -1) {
                                _29d._ioAddQueryToUrl(_2d2);
                            }
                        }
                    }
                }
                xhr.open(_2d0, _2d2.url, args.sync !== true, args.user || undefined, args.password || undefined);
                if (args.headers) {
                    for (var hdr in args.headers) {
                        if (hdr.toLowerCase() === "content-type" && !args.contentType) {
                            args.contentType = args.headers[hdr];
                        } else {
                            if (args.headers[hdr]) {
                                xhr.setRequestHeader(hdr, args.headers[hdr]);
                            }
                        }
                    }
                }
                xhr.setRequestHeader("Content-Type", args.contentType || _2cb);
                if (!args.headers || !("X-Requested-With" in args.headers)) {
                    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                }
                _29d._ioNotifyStart(dfd);
                if (dojo.config.debugAtAllCosts) {
                    xhr.send(_2d2.query);
                } else {
                    try {
                        xhr.send(_2d2.query);
                    } catch (e) {
                        _2d2.error = e;
                        dfd.cancel();
                    }
                }
                _29d._ioWatch(dfd, _2cc, _2cd, _2ce);
                xhr = null;
                return dfd;
            };
            dojo.xhrGet = function (args) {
                return _29d.xhr("GET", args);
            };
            dojo.rawXhrPost = dojo.xhrPost = function (args) {
                return _29d.xhr("POST", args, true);
            };
            dojo.rawXhrPut = dojo.xhrPut = function (args) {
                return _29d.xhr("PUT", args, true);
            };
            dojo.xhrDelete = function (args) {
                return _29d.xhr("DELETE", args);
            };
        })();
    }
    if (!dojo._hasResource["dojo._base.fx"]) {
        dojo._hasResource["dojo._base.fx"] = true;
        dojo.provide("dojo._base.fx");
        (function () {
            var d = dojo;
            var _2d3 = d._mixin;
            dojo._Line = function (_2d4, end) {
                this.start = _2d4;
                this.end = end;
            };
            dojo._Line.prototype.getValue = function (n) {
                return ((this.end - this.start) * n) + this.start;
            };
            dojo.Animation = function (args) {
                _2d3(this, args);
                if (d.isArray(this.curve)) {
                    this.curve = new d._Line(this.curve[0], this.curve[1]);
                }
            };
            d._Animation = d.Animation;
            d.extend(dojo.Animation, {
                duration: 350,
                repeat: 0,
                rate: 20,
                _percent: 0,
                _startRepeatCount: 0,
                _getStep: function () {
                    var _2d5 = this._percent,
                        _2d6 = this.easing;
                    return _2d6 ? _2d6(_2d5) : _2d5;
                },
                _fire: function (evt, args) {
                    var a = args || [];
                    if (this[evt]) {
                        if (d.config.debugAtAllCosts) {
                            this[evt].apply(this, a);
                        } else {
                            try {
                                this[evt].apply(this, a);
                            } catch (e) {}
                        }
                    }
                    return this;
                },
                play: function (_2d7, _2d8) {
                    var _2d9 = this;
                    if (_2d9._delayTimer) {
                        _2d9._clearTimer();
                    }
                    if (_2d8) {
                        _2d9._stopTimer();
                        _2d9._active = _2d9._paused = false;
                        _2d9._percent = 0;
                    } else {
                        if (_2d9._active && !_2d9._paused) {
                            return _2d9;
                        }
                    }
                    _2d9._fire("beforeBegin", [_2d9.node]);
                    var de = _2d7 || _2d9.delay,
                        _2da = dojo.hitch(_2d9, "_play", _2d8);
                    if (de > 0) {
                        _2d9._delayTimer = setTimeout(_2da, de);
                        return _2d9;
                    }
                    _2da();
                    return _2d9;
                },
                _play: function (_2db) {
                    var _2dc = this;
                    if (_2dc._delayTimer) {
                        _2dc._clearTimer();
                    }
                    _2dc._startTime = new Date().valueOf();
                    if (_2dc._paused) {
                        _2dc._startTime -= _2dc.duration * _2dc._percent;
                    }
                    _2dc._active = true;
                    _2dc._paused = false;
                    var _2dd = _2dc.curve.getValue(_2dc._getStep());
                    if (!_2dc._percent) {
                        if (!_2dc._startRepeatCount) {
                            _2dc._startRepeatCount = _2dc.repeat;
                        }
                        _2dc._fire("onBegin", [_2dd]);
                    }
                    _2dc._fire("onPlay", [_2dd]);
                    _2dc._cycle();
                    return _2dc;
                },
                pause: function () {
                    var _2de = this;
                    if (_2de._delayTimer) {
                        _2de._clearTimer();
                    }
                    _2de._stopTimer();
                    if (!_2de._active) {
                        return _2de;
                    }
                    _2de._paused = true;
                    _2de._fire("onPause", [_2de.curve.getValue(_2de._getStep())]);
                    return _2de;
                },
                gotoPercent: function (_2df, _2e0) {
                    var _2e1 = this;
                    _2e1._stopTimer();
                    _2e1._active = _2e1._paused = true;
                    _2e1._percent = _2df;
                    if (_2e0) {
                        _2e1.play();
                    }
                    return _2e1;
                },
                stop: function (_2e2) {
                    var _2e3 = this;
                    if (_2e3._delayTimer) {
                        _2e3._clearTimer();
                    }
                    if (!_2e3._timer) {
                        return _2e3;
                    }
                    _2e3._stopTimer();
                    if (_2e2) {
                        _2e3._percent = 1;
                    }
                    _2e3._fire("onStop", [_2e3.curve.getValue(_2e3._getStep())]);
                    _2e3._active = _2e3._paused = false;
                    return _2e3;
                },
                status: function () {
                    if (this._active) {
                        return this._paused ? "paused" : "playing";
                    }
                    return "stopped";
                },
                _cycle: function () {
                    var _2e4 = this;
                    if (_2e4._active) {
                        var curr = new Date().valueOf();
                        var step = (curr - _2e4._startTime) / (_2e4.duration);
                        if (step >= 1) {
                            step = 1;
                        }
                        _2e4._percent = step;
                        if (_2e4.easing) {
                            step = _2e4.easing(step);
                        }
                        _2e4._fire("onAnimate", [_2e4.curve.getValue(step)]);
                        if (_2e4._percent < 1) {
                            _2e4._startTimer();
                        } else {
                            _2e4._active = false;
                            if (_2e4.repeat > 0) {
                                _2e4.repeat--;
                                _2e4.play(null, true);
                            } else {
                                if (_2e4.repeat == -1) {
                                    _2e4.play(null, true);
                                } else {
                                    if (_2e4._startRepeatCount) {
                                        _2e4.repeat = _2e4._startRepeatCount;
                                        _2e4._startRepeatCount = 0;
                                    }
                                }
                            }
                            _2e4._percent = 0;
                            _2e4._fire("onEnd", [_2e4.node]);
                            !_2e4.repeat && _2e4._stopTimer();
                        }
                    }
                    return _2e4;
                },
                _clearTimer: function () {
                    clearTimeout(this._delayTimer);
                    delete this._delayTimer;
                }
            });
            var ctr = 0,
                _2e5 = null,
                _2e6 = {
                    run: function () {}
                };
            d.extend(d.Animation, {
                _startTimer: function () {
                    if (!this._timer) {
                        this._timer = d.connect(_2e6, "run", this, "_cycle");
                        ctr++;
                    }
                    if (!_2e5) {
                        _2e5 = setInterval(d.hitch(_2e6, "run"), this.rate);
                    }
                },
                _stopTimer: function () {
                    if (this._timer) {
                        d.disconnect(this._timer);
                        this._timer = null;
                        ctr--;
                    }
                    if (ctr <= 0) {
                        clearInterval(_2e5);
                        _2e5 = null;
                        ctr = 0;
                    }
                }
            });
            var _2e7 = d.isIE ? function (node) {
                    var ns = node.style;
                    if (!ns.width.length && d.style(node, "width") == "auto") {
                        ns.width = "auto";
                    }
                } : function () {};
            dojo._fade = function (args) {
                args.node = d.byId(args.node);
                var _2e8 = _2d3({
                    properties: {}
                }, args),
                    _2e9 = (_2e8.properties.opacity = {});
                _2e9.start = !("start" in _2e8) ? function () {
                    return +d.style(_2e8.node, "opacity") || 0;
                } : _2e8.start;
                _2e9.end = _2e8.end;
                var anim = d.animateProperty(_2e8);
                d.connect(anim, "beforeBegin", d.partial(_2e7, _2e8.node));
                return anim;
            };
            dojo.fadeIn = function (args) {
                return d._fade(_2d3({
                    end: 1
                }, args));
            };
            dojo.fadeOut = function (args) {
                return d._fade(_2d3({
                    end: 0
                }, args));
            };
            dojo._defaultEasing = function (n) {
                return 0.5 + ((Math.sin((n + 1.5) * Math.PI)) / 2);
            };
            var _2ea = function (_2eb) {
                this._properties = _2eb;
                for (var p in _2eb) {
                    var prop = _2eb[p];
                    if (prop.start instanceof d.Color) {
                        prop.tempColor = new d.Color();
                    }
                }
            };
            _2ea.prototype.getValue = function (r) {
                var ret = {};
                for (var p in this._properties) {
                    var prop = this._properties[p],
                        _2ec = prop.start;
                    if (_2ec instanceof d.Color) {
                        ret[p] = d.blendColors(_2ec, prop.end, r, prop.tempColor).toCss();
                    } else {
                        if (!d.isArray(_2ec)) {
                            ret[p] = ((prop.end - _2ec) * r) + _2ec + (p != "opacity" ? prop.units || "px" : 0);
                        }
                    }
                }
                return ret;
            };
            dojo.animateProperty = function (args) {
                var n = args.node = d.byId(args.node);
                if (!args.easing) {
                    args.easing = d._defaultEasing;
                }
                var anim = new d.Animation(args);
                d.connect(anim, "beforeBegin", anim, function () {
                    var pm = {};
                    for (var p in this.properties) {
                        if (p == "width" || p == "height") {
                            this.node.display = "block";
                        }
                        var prop = this.properties[p];
                        if (d.isFunction(prop)) {
                            prop = prop(n);
                        }
                        prop = pm[p] = _2d3({}, (d.isObject(prop) ? prop : {
                            end: prop
                        }));
                        if (d.isFunction(prop.start)) {
                            prop.start = prop.start(n);
                        }
                        if (d.isFunction(prop.end)) {
                            prop.end = prop.end(n);
                        }
                        var _2ed = (p.toLowerCase().indexOf("color") >= 0);

                        function _2ee(node, p) {
                            var v = {
                                height: node.offsetHeight,
                                width: node.offsetWidth
                            }[p];
                            if (v !== undefined) {
                                return v;
                            }
                            v = d.style(node, p);
                            return (p == "opacity") ? +v : (_2ed ? v : parseFloat(v));
                        };
                        if (!("end" in prop)) {
                            prop.end = _2ee(n, p);
                        } else {
                            if (!("start" in prop)) {
                                prop.start = _2ee(n, p);
                            }
                        }
                        if (_2ed) {
                            prop.start = new d.Color(prop.start);
                            prop.end = new d.Color(prop.end);
                        } else {
                            prop.start = (p == "opacity") ? +prop.start : parseFloat(prop.start);
                        }
                    }
                    this.curve = new _2ea(pm);
                });
                d.connect(anim, "onAnimate", d.hitch(d, "style", anim.node));
                return anim;
            };
            dojo.anim = function (node, _2ef, _2f0, _2f1, _2f2, _2f3) {
                return d.animateProperty({
                    node: node,
                    duration: _2f0 || d.Animation.prototype.duration,
                    properties: _2ef,
                    easing: _2f1,
                    onEnd: _2f2
                }).play(_2f3 || 0);
            };
        })();
    }
    if (!dojo._hasResource["dojo.i18n"]) {
        dojo._hasResource["dojo.i18n"] = true;
        dojo.provide("dojo.i18n");
        dojo.getObject("i18n", true, dojo);
        dojo.i18n.getLocalization = dojo.i18n.getLocalization || function (_2f4, _2f5, _2f6) {
            _2f6 = dojo.i18n.normalizeLocale(_2f6);
            var _2f7 = _2f6.split("-");
            var _2f8 = [_2f4, "nls", _2f5].join(".");
            var _2f9 = dojo._loadedModules[_2f8];
            if (_2f9) {
                var _2fa;
                for (var i = _2f7.length; i > 0; i--) {
                    var loc = _2f7.slice(0, i).join("_");
                    if (_2f9[loc]) {
                        _2fa = _2f9[loc];
                        break;
                    }
                }
                if (!_2fa) {
                    _2fa = _2f9.ROOT;
                }
                if (_2fa) {
                    var _2fb = function () {};
                    _2fb.prototype = _2fa;
                    return new _2fb();
                }
            }
            throw new Error("Bundle not found: " + _2f5 + " in " + _2f4 + " , locale=" + _2f6);
        };
        dojo.i18n.normalizeLocale = function (_2fc) {
            var _2fd = _2fc ? _2fc.toLowerCase() : dojo.locale;
            if (_2fd == "root") {
                _2fd = "ROOT";
            }
            return _2fd;
        };
        dojo.i18n._requireLocalization = function (_2fe, _2ff, _300, _301) {
            var _302 = dojo.i18n.normalizeLocale(_300);
            var _303 = [_2fe, "nls", _2ff].join(".");
            var _304 = "";
            if (_301) {
                var _305 = _301.split(",");
                for (var i = 0; i < _305.length; i++) {
                    if (_302["indexOf"](_305[i]) == 0) {
                        if (_305[i].length > _304.length) {
                            _304 = _305[i];
                        }
                    }
                }
                if (!_304) {
                    _304 = "ROOT";
                }
            }
            var _306 = _301 ? _304 : _302;
            var _307 = dojo._loadedModules[_303];
            var _308 = null;
            if (_307) {
                if (dojo.config.localizationComplete && _307._built) {
                    return;
                }
                var _309 = _306.replace(/-/g, "_");
                var _30a = _303 + "." + _309;
                _308 = dojo._loadedModules[_30a];
            }
            if (!_308) {
                _307 = dojo["provide"](_303);
                var syms = dojo._getModuleSymbols(_2fe);
                var _30b = syms.concat("nls").join("/");
                var _30c;
                dojo.i18n._searchLocalePath(_306, _301, function (loc) {
                    var _30d = loc.replace(/-/g, "_");
                    var _30e = _303 + "." + _30d;
                    var _30f = false;
                    if (!dojo._loadedModules[_30e]) {
                        dojo["provide"](_30e);
                        var _310 = [_30b];
                        if (loc != "ROOT") {
                            _310.push(loc);
                        }
                        _310.push(_2ff);
                        var _311 = _310.join("/") + ".js";
                        _30f = dojo._loadPath(_311, null, function (hash) {
                            hash = hash.root || hash;
                            var _312 = function () {};
                            _312.prototype = _30c;
                            _307[_30d] = new _312();
                            for (var j in hash) {
                                _307[_30d][j] = hash[j];
                            }
                        });
                    } else {
                        _30f = true;
                    }
                    if (_30f && _307[_30d]) {
                        _30c = _307[_30d];
                    } else {
                        _307[_30d] = _30c;
                    }
                    if (_301) {
                        return true;
                    }
                });
            }
            if (_301 && _302 != _304) {
                _307[_302.replace(/-/g, "_")] = _307[_304.replace(/-/g, "_")];
            }
        };
        (function () {
            var _313 = dojo.config.extraLocale;
            if (_313) {
                if (!_313 instanceof Array) {
                    _313 = [_313];
                }
                var req = dojo.i18n._requireLocalization;
                dojo.i18n._requireLocalization = function (m, b, _314, _315) {
                    req(m, b, _314, _315);
                    if (_314) {
                        return;
                    }
                    for (var i = 0; i < _313.length; i++) {
                        req(m, b, _313[i], _315);
                    }
                };
            }
        })();
        dojo.i18n._searchLocalePath = function (_316, down, _317) {
            _316 = dojo.i18n.normalizeLocale(_316);
            var _318 = _316.split("-");
            var _319 = [];
            for (var i = _318.length; i > 0; i--) {
                _319.push(_318.slice(0, i).join("-"));
            }
            _319.push(false);
            if (down) {
                _319.reverse();
            }
            for (var j = _319.length - 1; j >= 0; j--) {
                var loc = _319[j] || "ROOT";
                var stop = _317(loc);
                if (stop) {
                    break;
                }
            }
        };
        dojo.i18n._preloadLocalizations = function (_31a, _31b) {
            function _31c(_31d) {
                _31d = dojo.i18n.normalizeLocale(_31d);
                dojo.i18n._searchLocalePath(_31d, true, function (loc) {
                    for (var i = 0; i < _31b.length; i++) {
                        if (_31b[i] == loc) {
                            dojo["require"](_31a + "_" + loc);
                            return true;
                        }
                    }
                    return false;
                });
            };
            _31c();
            var _31e = dojo.config.extraLocale || [];
            for (var i = 0; i < _31e.length; i++) {
                _31c(_31e[i]);
            }
        };
    }
    if (!dojo._hasResource["dojo._base.browser"]) {
        dojo._hasResource["dojo._base.browser"] = true;
        dojo.provide("dojo._base.browser");
        dojo.forEach(dojo.config.require, function (i) {
            dojo["require"](i);
        });
    }
    if (!dojo._hasResource["dojo._base"]) {
        dojo._hasResource["dojo._base"] = true;
        dojo.provide("dojo._base");
    }
    if (dojo.isBrowser && (document.readyState === "complete" || dojo.config.afterOnLoad)) {
        window.setTimeout(dojo._loadInit, 100);
    }
})();
/* $Id$ 
 * Copyright (c) 2011 IBM Corporation
 * Owner: Corporate Webmaster (NUS_N_NIWWW)
 */
if (!dojo._hasResource["ibmweb.config"]) {
    dojo._hasResource["ibmweb.config"] = true;
    dojo.provide("ibmweb.config");
    ibmweb.config.set = function (_1, _2) {
        if (dojo.isString(_1)) {
            dojo.setObject(_1, _2, ibmweb.config);
        } else {
            if (dojo.isArray(_1)) {
                dojo.setObject(_1.join("."), _2, ibmweb.config);
            } else {
                if (dojo.isObject(_1)) {
                    for (var _3 in _1) {
                        if (dojo.isObject(_1[_3]) && !dojo.isArray(_1[_3])) {
                            ibmweb.config[_3] = dojo.mixin(ibmweb.config[_3], _1[_3]);
                        } else {
                            ibmweb.config.set([_3], _1[_3]);
                        }
                    }
                }
            }
        }
    };
    ibmweb.config.get = function (_4) {
        if (dojo.isArray(_4)) {
            _4 = _4.join(".");
        }
        return dojo.getObject(_4, false, ibmweb.config);
    };
    ibmweb.config.parseMetaTags = function () {
        if ( !! window.ibmwebConfig && dojo.isObject(window.ibmwebConfig)) {
            ibmweb.config.set(window.ibmwebConfig);
        }
        if (dojo.byId("ibm-top") && dojo.hasClass("ibm-top", "ibm-popup")) {
            ibmweb.config.dynnav.enabled = false;
            if ( !! ibmweb.config.pagetitle) {
                if (!dojo.byId("ibm-title")) {
                    dojo.create("li", {
                        id: "ibm-title"
                    }, "ibm-unav-links");
                }
                dojo.byId("ibm-title").innerHTML = ibmweb.config.pagetitle.htmlspecialchars();
            }
        }
        var _5 = function (_6) {
            if (_6 == "true") {
                return true;
            }
            if (_6 == "false") {
                return false;
            }
            if (parseFloat(_6) == _6) {
                return parseFloat(_6);
            }
            return _6;
        };
        for (var _7 in ibmweb.meta) {
            if (_7.indexOf("ibmweb_config_") === 0) {
                var _8 = _7.substring(11).replace("_", ".");
                var _9 = ibmweb.meta[_7];
                var _a = _9.split("||");
                for (var i = 0, j = _a.length; i < j; i++) {
                    var _b = _a[i].split(":");
                    if (_b.length == 1) {
                        ibmweb.config.set(_8, _5(_b[0]));
                    } else {
                        var _c = _b.shift();
                        if (_b.length == 1) {
                            ibmweb.config.set([_8, _c], _5(_b[0]));
                        } else {
                            ibmweb.config.set([_8, _c], _b);
                        }
                    }
                }
            }
        }
    };
}
if (!dojo._hasResource["ibmweb.www.config"]) {
    dojo._hasResource["ibmweb.www.config"] = true;
    dojo.provide("ibmweb.www.config");
    dojo.mixin(ibmweb.config, {
        config: "www",
        usedSettings: "production",
        forced: false,
        dataUrl: "//1.www.s81c.com/common/js/dynamicnav/www/",
        dynNavBaseUrl: "https://www.ibm.com/gateway/secstate/?",
        annotatorServUrl: "http://connect.ibm.com/transform/public/service/common_profile/profile/shared/",
        imageUrl: "//1.www.s81c.com/i/v17/",
        timeout: 10000,
        eluminate: {
            enabled: false,
            CID: "50200000",
            cmSetClientID: {
                id: null,
                managedFirstParty: true,
                dataCollectionDomain: "data.coremetrics.com",
                cookieDomain: "ibm.com"
            }
        },
        dynnav: {
            enabled: true
        },
        lazyload: {},
        signin: {
            enabled: true,
            overlay: true,
            formAction: "https://www-304.ibm.com/pkmslogin.form",
            signoutUrl: "https://www-304.ibm.com/pkmslogout?page=http://www.ibm.com/account/${cc}/${lc}/signout.html",
            signinUrl: "https://www.ibm.com/gss/instantprofile/InstantSignin?",
            registerUrl: "https://www.ibm.com/gss/instantprofile/InstantRegisterServlet?requestType=registerPart1&",
            codeRepository: "//1.www.s81c.com/common/v17/register/${NAME}.js"
        },
        register: {},
        footer: {
            enabled: true,
            feedbackLink: ""
        },
        footermenu: {
            enabled: true
        },
        megamenu: {
            enabled: true,
            linksonly: false,
            disabledLocales: ["ilhe"],
            maxColumns: 6,
            maxRows: 8,
            noScroll: false,
            minimizeByDefault: false,
            icons: "none",
            disableUniversalNav: false
        },
        easyaccess: {
            enabled: false,
            lifetime: 43200
        },
        merchandising: {
            enabled: true
        },
        greeting: {
            enabled: true,
            signinWidget: "ibmweb.dynnav.signinWidget"
        },
        localeselector: {
            enabled: false,
            maxitems: 12
        },
        video: {
            enabled: true
        },
        myinterests: {
            enabled: false
        },
        intercountry: {
            enabled: true
        },
        sbs: {
            enabled: true,
            email: true,
            print: true
        },
        bitly: {
            login: "ibmdigital",
            key: "R_1ed9169df98d3b072731d88ec80d18a7",
            timeout: 3000
        },
        noticechoice: {
            jsonUrl: "//1.www.s81c.com/common/translations"
        },
        opinionlab: {
            footer: {
                enabled: false
            },
            floating: {
                enabled: false,
                type: "popup"
            }
        },
        backtocountry: {
            enabled: false,
            id: "ibm-backtocountry",
            keepfilename: true
        },
        appmast: {
            enabled: false
        },
        idm: {
            profiling: {
                expliciturl: "https://www.ibm.com/gateway/profile_id/{INPUT_profile_id}/",
                anonymousurl: "https://www.ibm.com/instantprofile/iwmoverlay/service/anouser",
                filter: "//www.ibm.com/common/v17/instantprofile/blackwhite_lists.json",
                profilingjs: "//www.ibm.com/common/v17/instantprofile/profiling.js"
            }
        }
    });
    dojo.config.blankGif = "//1.www.s81c.com/i/c.gif";
    dojo.config.dojoBlankHtmlUrl = "//www.ibm.com/common/js/dojo/1.6/dojo/resources/blank.html";
    (function (_d) {
        _d = _d || "";
        if (_d) {
            ibmweb.config.forced = true;
        }
        var _e = document.cookie.match(/__DOJO=(\w*)/);
        if (_e) {
            _d = _e[1];
        }
        _d = _d || "production";
        ibmweb.config.usedSettings = _d;
        if (_d == "staging") {
            ibmweb.config.set({
                dataUrl: "//1.wwwstage.s81c.com/common/js/dynamicnav/www/",
                dynNavBaseUrl: "https://www-sso.toronto.ca.ibm.com/gateway/?",
                imageUrl: "//1.wwwstage.s81c.com/i/v17/",
                noticechoice: {
                    jsonUrl: "//1.wwwstage.s81c.com/common/translations"
                },
                signin: {
                    formAction: "https://www-wi-sso3.toronto.ca.ibm.com:445/usrsrvc/account/userservices/ait/jsp/login.jsp?persistPage=true&PD-REFERER=none&error=&page=${page}",
                    signoutUrl: "https://www-sso.toronto.ca.ibm.com/pkmslogout?page=http://wwwstage.ibm.com/account/${cc}/${lc}/signout.html",
                    signinUrl: "https://wwwstage.ibm.com/gss/instantprofile/InstantSignin?",
                    registerUrl: "https://wwwstage.ibm.com/gss/instantprofile/InstantRegisterServlet?requestType=registerPart1&",
                    codeRepository: "//1.wwwstage.s81c.com/common/v17/register/${NAME}.js"
                },
                idm: {
                    profiling: {
                        expliciturl: "https://wwwstage.ibm.com/gateway/profile_id/{INPUT_profile_id}/",
                        anonymousurl: "https://wwwstage.ibm.com/instantprofile/iwmoverlay/service/anouser",
                        filter: "//wwwstage.ibm.com/common/v17/instantprofile/blackwhite_lists.json",
                        profilingjs: "//wwwstage.ibm.com/common/v17/instantprofile/profiling.js"
                    }
                }
            });
            if ( !! dojo.config.modulePaths) {
                var d = "//1.wwwstage.s81c.com";
                dojo.baseUrl = dojo.config.baseUrl = d + "/common/js/dojo/dojo/";
                dojo.config.modulePaths.ibm = d + "/common/js/dojo/ibm";
                for (var _f in dojo._modulePrefixes) {
                    dojo._modulePrefixes[_f].value = dojo._modulePrefixes[_f].value.replace(/\/\/[\w\:\.]+\//, d + "/");
                }
            }
        }
        if (_d == "wwwpreview") {
            ibmweb.config.set({
                dataUrl: "//1.wwwpreview.s81c.com/common/js/dynamicnav/www/",
                dynNavBaseUrl: "https://www-sso.toronto.ca.ibm.com/gateway/?",
                imageUrl: "//1.wwwpreview.s81c.com/i/v17/",
                noticechoice: {
                    jsonUrl: "//1.wwwpreview.s81c.com/common/translations"
                },
                signin: {
                    formAction: "https://www-wi-sso3.toronto.ca.ibm.com:445/usrsrvc/account/userservices/ait/jsp/login.jsp?persistPage=true&PD-REFERER=none&error=&page=${page}",
                    signoutUrl: "https://www-sso.toronto.ca.ibm.com/pkmslogout?page=http://wwwstage.ibm.com/account/${cc}/${lc}/signout.html",
                    signinUrl: "https://wwwstage.ibm.com/gss/instantprofile/InstantSignin?",
                    registerUrl: "https://wwwstage.ibm.com/gss/instantprofile/InstantRegisterServlet?requestType=registerPart1&",
                    codeRepository: "//wwwstage.ibm.com/common/v17/register/${NAME}.source.js"
                },
                idm: {
                    profiling: {
                        expliciturl: "https://wwwstage.ibm.com/gateway/profile_id/{INPUT_profile_id}/",
                        anonymousurl: "https://wwwstage.ibm.com/instantprofile/iwmoverlay/service/anouser",
                        filter: "//wwwstage.ibm.com/common/v17/instantprofile/blackwhite_lists.json",
                        profilingjs: "//wwwstage.ibm.com/common/v17/instantprofile/profiling.js"
                    }
                }
            });
            if ( !! dojo.config.modulePaths) {
                var d = "//wwwpreview.ibm.com";
                dojo.baseUrl = dojo.config.baseUrl = d + "/common/js/dojo/dojo/";
                dojo.config.modulePaths.ibm = d + "/common/js/dojo/ibm";
                for (var _f in dojo._modulePrefixes) {
                    dojo._modulePrefixes[_f].value = dojo._modulePrefixes[_f].value.replace(/\/\/[\w\:\.]+\//, d + "/");
                }
            }
        }
        if (_d == "development") {
            ibmweb.config.set({
                dataUrl: "//1.wwwpreview.s81c.com/common/js/dynamicnav/www/",
                dynNavBaseUrl: "https://www.ibm.com/gateway/secstate/?",
                imageUrl: "/i/v17/",
                annotatorServUrl: "https://iebalpha.cdtdp.toronto.ca.ibm.com:3443/transform/public/service/common_profile_test/profile/shared/",
                noticechoice: {
                    jsonUrl: "//1.www.s81c.com/common/translations"
                },
                signin: {
                    formAction: "https://www-sso.toronto.ca.ibm.com/usrsrvc/account/userservices/ait/jsp/login.jsp?persistPage=true&PD-REFERER=none&error=&page=${page}",
                    signoutUrl: "https://wwwbeta-sso.toronto.ca.ibm.com:444/pkmslogout?page=http://v17ecmpreview.webmaster.ibm.com/accoun/${cc}/${lc}/signout.html",
                    signinUrl: "https://wwwtest.ibm.com/gss/instantprofile/InstantSignin?",
                    registerUrl: "https://wwwtest.ibm.com/gss/instantprofile/InstantRegisterServlet?requestType=registerPart1&",
                    codeRepository: "//wwwtest.ibm.com/common/v17/register/${NAME}.source.js"
                },
                idm: {
                    profiling: {
                        expliciturl: "https://wwwtest.ibm.com/gateway/profile_id/{INPUT_profile_id}/",
                        anonymousurl: "https://wwwtest.ibm.com/instantprofile/iwmoverlay/service/anouser",
                        filter: "//wwwtest.ibm.com/common/v17/instantprofile/blackwhite_lists.json",
                        profilingjs: "//wwwtest.ibm.com/common/v17/instantprofile/profiling.js"
                    }
                }
            });
        }
    })(dojo.config.ibmForceConfig);
}
if (!dojo._hasResource["ibmweb.dojoReadyForLegacyDojo"]) {
    dojo._hasResource["ibmweb.dojoReadyForLegacyDojo"] = true;
    dojo.provide("ibmweb.dojoReadyForLegacyDojo");
    (function () {
        dojo.ready = dojo.ready || dojo.addOnLoad;
    })();
}
if (!dojo._hasResource["ibmweb.coremetrics.eluminate"]) {
    dojo._hasResource["ibmweb.coremetrics.eluminate"] = true;
    dojo.provide("ibmweb.coremetrics.eluminate");
    ibmweb.eluminate = {
        downloadTypes: ["bqy", "doc", "dot", "exe", "flv", "jpg", "mov", "mp3", "pdf", "pps", "ppt", "rss", "sh", "swf", "tar", "txt", "wmv", "xls", "xml", "zip", "avi", "eps", "gif", "lwp", "mas", "mp4", "pot", "prz", "rtf", "wav", "wma", "123", "odt", "ott", "sxw", "stw", "docx", "odp", "otp", "sxi", "sti", "pptx", "ods", "ots", "sxc", "stc", "xlsx"],
        domainList: [".ibm.com", ".lotus.com", ".lotuslive.com", ".cognos.com", ".webdialogs.com", ".jazz.net", ".servicemanagementcenter.com"],
        create_QueryString: function () {
            var _10 = window.location.search.substring(1);
            window.QueryString = dojo.queryToObject(_10);
        },
        domainTest: function (_11) {
            if (_11.length > 0) {
                _11 = _11.toLowerCase();
                if (_11 == window.location.hostname.toLowerCase() || dojo.indexOf(this.domainList, _11) !== -1) {
                    return true;
                }
                for (var i = 0; i < this.domainList.length; i++) {
                    if (_11.search(this.domainList[i]) != -1) {
                        return true;
                    }
                }
            }
            return false;
        },
        match: function (pth) {
            var _12 = false,
                _13 = pth.substring(pth.lastIndexOf(".") + 1, pth.length);
            if (dojo.indexOf(this.downloadTypes, _13) !== -1) {
                _12 = true;
            }
            return _12;
        },
        pause: function (ms) {
            var _14 = new Date(),
                _15 = null;
            do {
                _15 = new Date();
            } while (_15 - _14 < ms);
        },
        findElm: function (e, tag) {
            var elm = dojo.query(e.target || e.srcElement);
            while (elm[0].tagName.toLowerCase() !== tag) {
                if (elm.parent(tag).length == 1) {
                    elm = elm.parent(tag);
                } else {
                    return elm;
                }
            }
            return elm[0];
        },
        download_and_offset_tracking: function (e) {
            var elm = this.findElm(e, "a");
            if ((typeof elm.tagName !== "undefined" && elm.tagName.toLowerCase() == "a") && !! elm.href) {
                var _16 = elm.hostname ? (elm.hostname.split(":")[0]) : "",
                    _17 = escape(elm.href),
                    qry = elm.search ? elm.search.substring(elm.search.indexOf("?") + 1, elm.search.length) : "",
                    p = dojo.queryToObject(qry),
                    _18 = "none",
                    _19 = elm.protocol || "",
                    _1a = (elm.protocol == "ftp:") ? _17.substr(8) : _17.substr(9);
                if (typeof p.attachment !== "undefined") {
                    _18 = p.attachment;
                }
                if (typeof p.FILE !== "undefined") {
                    _18 = p.FILE;
                }
                if (typeof p.attachmentName !== "undefined") {
                    _18 = p.attachmentName;
                }
                var _1b = _18.toLowerCase(),
                    _1c = elm.pathname.toLowerCase();
                if (this.domainTest(_16)) {
                    if (this.match(_1c) || this.match(_1b)) {
                        var ttl = "",
                            _1d = document.all ? elm.innerText : elm.text,
                            img = this.findElm(e, "img"),
                            _1e = "";
                        if (img.alt) {
                            ttl = img.alt;
                        } else {
                            if (_1d) {
                                ttl = _1d;
                            } else {
                                if (elm.innerHTML) {
                                    ttl = elm.innerHTML;
                                }
                            }
                        }
                        if (_18 == "none") {
                            _1e = "download" + "-_-" + _1a.toLowerCase() + "-_--_--_--_--_--_--_-";
                            cmCreateElementTag(_1a.toLowerCase(), "download", _1e);
                            this.pause(500);
                        } else {
                            _1e = "download" + "-_-" + _1b + "-_--_--_--_--_--_--_-";
                            cmCreateElementTag(_1b, "download", _1b);
                            this.pause(500);
                        }
                    } else {
                        var _1f = "page click" + "-_-" + _1a + "-_--_--_--_--_--_--_--_-";
                        _1f += (typeof p.lnk !== "undefined") ? p.lnk + "-_-" : "-_-";
                        _1f += (typeof p.lm !== "undefined") ? p.lm + "-_-" : "-_-";
                        _1f += (typeof p.lot !== "undefined") ? p.lot + "-_-" : "-_-";
                        _1f += (typeof p.lsot !== "undefined") ? p.lsot + "-_-" : "-_-";
                        if (typeof p.lpg !== "undefined") {
                            _1f += p.lpg;
                        }
                        cmCreateElementTag(_1a, "page click", _1f);
                        this.pause(500);
                    }
                }
                if ((_16.length > 0) && (_19.indexOf("http") == 0 || _19.indexOf("mailto") == 0) && (!this.domainTest(_16))) {
                    cmCreateElementTag(_1a, "external link", "external link" + "-_-" + _1a + "-_--_--_--_--_--_--_-");
                    this.pause(500);
                }
            }
        },
        init: function () {
            if (window.location.href.indexOf(".ibm.com/support/servicerequest") >= 0) {
                return;
            }
            var _20 = this,
                _21 = ibmweb.config.eluminate;
            _21.enabled = true;
            this.create_QueryString();
            if (typeof (window.WebAnalytics) == "undefined") {
                window.WebAnalytics = {
                    Page: {
                        PageIdentifier: window.location.href
                    }
                };
            }
            if (typeof (window.digitalData) == "undefined") {
                window.digitalData = {};
            }
            if (typeof _21.siteID === "undefined") {
                _21.siteID = String(dojo.query("meta[name='IBM.WTMSite']").attr("content"));
            }
            if (_21.siteID.length == 0) {
                _21.siteID = String(dojo.query("meta[name='WTMSite']").attr("content"));
            }
            if (_21.siteID.length == 0 && typeof digitalData.page !== "undefined") {
                if (typeof digitalData.page.site !== "undefined" && typeof digitalData.page.site.siteID !== "undefined") {
                    _21.siteID = digitalData.page.site.siteID;
                }
                if (typeof digitalData.page.category !== "undefined" && typeof digitalData.page.category.categoryID !== "undefined") {
                    _21.siteID = digitalData.page.category.categoryID;
                }
            }
            if (_21.siteID.length == 0) {
                _21.siteID = "IBMTEST";
            }
            _21.cmSetClientID.id = _21.CID + "|" + _21.siteID;
            if (typeof (window.cmTagQueue) == "undefined") {
                window.cmTagQueue = [];
            }
            window.cmTagQueue.push(["cmSetClientID", _21.cmSetClientID.id, _21.cmSetClientID.managedFirstParty, _21.cmSetClientID.dataCollectionDomain, _21.cmSetClientID.cookieDomain]);
            (function () {
                var _22 = new Date().getTime();
                eval("document.write(\"<script type=text/javascript src=//libs.coremetrics.com/eluminate.js?__t=" + _22 + "></script>\");");
            })();
            dojo.addOnLoad(function () {
                dojo.connect(dojo.body(), "onclick", ibmweb.eluminate, ibmweb.eluminate.download_and_offset_tracking);
            });
        }
    };
    if (ibmweb.config.config == "www") {
        cmSetClientID = function () {};
        if (typeof (window.eluminate_enabled) !== "undefined") {
            if (!window.eluminate_enabled) {} else {
                ibmweb.eluminate.init();
            }
        } else {
            ibmweb.eluminate.init();
        }
    }
}
if (!dojo._hasResource["dijit._base.manager"]) {
    dojo._hasResource["dijit._base.manager"] = true;
    dojo.provide("dijit._base.manager");
    dojo.declare("dijit.WidgetSet", null, {
        constructor: function () {
            this._hash = {};
            this.length = 0;
        },
        add: function (_23) {
            if (this._hash[_23.id]) {
                throw new Error("Tried to register widget with id==" + _23.id + " but that id is already registered");
            }
            this._hash[_23.id] = _23;
            this.length++;
        },
        remove: function (id) {
            if (this._hash[id]) {
                delete this._hash[id];
                this.length--;
            }
        },
        forEach: function (_24, _25) {
            _25 = _25 || dojo.global;
            var i = 0,
                id;
            for (id in this._hash) {
                _24.call(_25, this._hash[id], i++, this._hash);
            }
            return this;
        },
        filter: function (_26, _27) {
            _27 = _27 || dojo.global;
            var res = new dijit.WidgetSet(),
                i = 0,
                id;
            for (id in this._hash) {
                var w = this._hash[id];
                if (_26.call(_27, w, i++, this._hash)) {
                    res.add(w);
                }
            }
            return res;
        },
        byId: function (id) {
            return this._hash[id];
        },
        byClass: function (cls) {
            var res = new dijit.WidgetSet(),
                id, _28;
            for (id in this._hash) {
                _28 = this._hash[id];
                if (_28.declaredClass == cls) {
                    res.add(_28);
                }
            }
            return res;
        },
        toArray: function () {
            var ar = [];
            for (var id in this._hash) {
                ar.push(this._hash[id]);
            }
            return ar;
        },
        map: function (_29, _2a) {
            return dojo.map(this.toArray(), _29, _2a);
        },
        every: function (_2b, _2c) {
            _2c = _2c || dojo.global;
            var x = 0,
                i;
            for (i in this._hash) {
                if (!_2b.call(_2c, this._hash[i], x++, this._hash)) {
                    return false;
                }
            }
            return true;
        },
        some: function (_2d, _2e) {
            _2e = _2e || dojo.global;
            var x = 0,
                i;
            for (i in this._hash) {
                if (_2d.call(_2e, this._hash[i], x++, this._hash)) {
                    return true;
                }
            }
            return false;
        }
    });
    (function () {
        dijit.registry = new dijit.WidgetSet();
        var _2f = dijit.registry._hash,
            _30 = dojo.attr,
            _31 = dojo.hasAttr,
            _32 = dojo.style;
        dijit.byId = function (id) {
            return typeof id == "string" ? _2f[id] : id;
        };
        var _33 = {};
        dijit.getUniqueId = function (_34) {
            var id;
            do {
                id = _34 + "_" + (_34 in _33 ? ++_33[_34] : _33[_34] = 0);
            } while (_2f[id]);
            return dijit._scopeName == "dijit" ? id : dijit._scopeName + "_" + id;
        };
        dijit.findWidgets = function (_35) {
            var _36 = [];

            function _37(_38) {
                for (var _39 = _38.firstChild; _39; _39 = _39.nextSibling) {
                    if (_39.nodeType == 1) {
                        var _3a = _39.getAttribute("widgetId");
                        if (_3a) {
                            var _3b = _2f[_3a];
                            if (_3b) {
                                _36.push(_3b);
                            }
                        } else {
                            _37(_39);
                        }
                    }
                }
            };
            _37(_35);
            return _36;
        };
        dijit._destroyAll = function () {
            dijit._curFocus = null;
            dijit._prevFocus = null;
            dijit._activeStack = [];
            dojo.forEach(dijit.findWidgets(dojo.body()), function (_3c) {
                if (!_3c._destroyed) {
                    if (_3c.destroyRecursive) {
                        _3c.destroyRecursive();
                    } else {
                        if (_3c.destroy) {
                            _3c.destroy();
                        }
                    }
                }
            });
        };
        if (dojo.isIE) {
            dojo.addOnWindowUnload(function () {
                dijit._destroyAll();
            });
        }
        dijit.byNode = function (_3d) {
            return _2f[_3d.getAttribute("widgetId")];
        };
        dijit.getEnclosingWidget = function (_3e) {
            while (_3e) {
                var id = _3e.getAttribute && _3e.getAttribute("widgetId");
                if (id) {
                    return _2f[id];
                }
                _3e = _3e.parentNode;
            }
            return null;
        };
        var _3f = (dijit._isElementShown = function (_40) {
            var s = _32(_40);
            return (s.visibility != "hidden") && (s.visibility != "collapsed") && (s.display != "none") && (_30(_40, "type") != "hidden");
        });
        dijit.hasDefaultTabStop = function (_41) {
            switch (_41.nodeName.toLowerCase()) {
                case "a":
                    return _31(_41, "href");
                case "area":
                case "button":
                case "input":
                case "object":
                case "select":
                case "textarea":
                    return true;
                case "iframe":
                    var _42;
                    try {
                        var _43 = _41.contentDocument;
                        if ("designMode" in _43 && _43.designMode == "on") {
                            return true;
                        }
                        _42 = _43.body;
                    } catch (e1) {
                        try {
                            _42 = _41.contentWindow.document.body;
                        } catch (e2) {
                            return false;
                        }
                    }
                    return _42.contentEditable == "true" || (_42.firstChild && _42.firstChild.contentEditable == "true");
                default:
                    return _41.contentEditable == "true";
            }
        };
        var _44 = (dijit.isTabNavigable = function (_45) {
            if (_30(_45, "disabled")) {
                return false;
            } else {
                if (_31(_45, "tabIndex")) {
                    return _30(_45, "tabIndex") >= 0;
                } else {
                    return dijit.hasDefaultTabStop(_45);
                }
            }
        });
        dijit._getTabNavigable = function (_46) {
            var _47, _48, _49, _4a, _4b, _4c, _4d = {};

            function _4e(_4f) {
                return _4f && _4f.tagName.toLowerCase() == "input" && _4f.type && _4f.type.toLowerCase() == "radio" && _4f.name && _4f.name.toLowerCase();
            };
            var _50 = function (_51) {
                dojo.query("> *", _51).forEach(function (_52) {
                    if ((dojo.isIE && _52.scopeName !== "HTML") || !_3f(_52)) {
                        return;
                    }
                    if (_44(_52)) {
                        var _53 = _30(_52, "tabIndex");
                        if (!_31(_52, "tabIndex") || _53 == 0) {
                            if (!_47) {
                                _47 = _52;
                            }
                            _48 = _52;
                        } else {
                            if (_53 > 0) {
                                if (!_49 || _53 < _4a) {
                                    _4a = _53;
                                    _49 = _52;
                                }
                                if (!_4b || _53 >= _4c) {
                                    _4c = _53;
                                    _4b = _52;
                                }
                            }
                        }
                        var rn = _4e(_52);
                        if (dojo.attr(_52, "checked") && rn) {
                            _4d[rn] = _52;
                        }
                    }
                    if (_52.nodeName.toUpperCase() != "SELECT") {
                        _50(_52);
                    }
                });
            };
            if (_3f(_46)) {
                _50(_46);
            }
            function rs(_54) {
                return _4d[_4e(_54)] || _54;
            };
            return {
                first: rs(_47),
                last: rs(_48),
                lowest: rs(_49),
                highest: rs(_4b)
            };
        };
        dijit.getFirstInTabbingOrder = function (_55) {
            var _56 = dijit._getTabNavigable(dojo.byId(_55));
            return _56.lowest ? _56.lowest : _56.first;
        };
        dijit.getLastInTabbingOrder = function (_57) {
            var _58 = dijit._getTabNavigable(dojo.byId(_57));
            return _58.last ? _58.last : _58.highest;
        };
        dijit.defaultDuration = dojo.config["defaultDuration"] || 200;
    })();
}
if (!dojo._hasResource["dojo.Stateful"]) {
    dojo._hasResource["dojo.Stateful"] = true;
    dojo.provide("dojo.Stateful");
    dojo.declare("dojo.Stateful", null, {
        postscript: function (_59) {
            if (_59) {
                dojo.mixin(this, _59);
            }
        },
        get: function (_5a) {
            return this[_5a];
        },
        set: function (_5b, _5c) {
            if (typeof _5b === "object") {
                for (var x in _5b) {
                    this.set(x, _5b[x]);
                }
                return this;
            }
            var _5d = this[_5b];
            this[_5b] = _5c;
            if (this._watchCallbacks) {
                this._watchCallbacks(_5b, _5d, _5c);
            }
            return this;
        },
        watch: function (_5e, _5f) {
            var _60 = this._watchCallbacks;
            if (!_60) {
                var _61 = this;
                _60 = this._watchCallbacks = function (_62, _63, _64, _65) {
                    var _66 = function (_67) {
                        if (_67) {
                            _67 = _67.slice();
                            for (var i = 0, l = _67.length; i < l; i++) {
                                try {
                                    _67[i].call(_61, _62, _63, _64);
                                } catch (e) {}
                            }
                        }
                    };
                    _66(_60["_" + _62]);
                    if (!_65) {
                        _66(_60["*"]);
                    }
                };
            }
            if (!_5f && typeof _5e === "function") {
                _5f = _5e;
                _5e = "*";
            } else {
                _5e = "_" + _5e;
            }
            var _68 = _60[_5e];
            if (typeof _68 !== "object") {
                _68 = _60[_5e] = [];
            }
            _68.push(_5f);
            return {
                unwatch: function () {
                    _68.splice(dojo.indexOf(_68, _5f), 1);
                }
            };
        }
    });
}
if (!dojo._hasResource["dijit._WidgetBase"]) {
    dojo._hasResource["dijit._WidgetBase"] = true;
    dojo.provide("dijit._WidgetBase");
    (function () {
        dojo.declare("dijit._WidgetBase", dojo.Stateful, {
            id: "",
            lang: "",
            dir: "",
            "class": "",
            style: "",
            title: "",
            tooltip: "",
            baseClass: "",
            srcNodeRef: null,
            domNode: null,
            containerNode: null,
            attributeMap: {
                id: "",
                dir: "",
                lang: "",
                "class": "",
                style: "",
                title: ""
            },
            _blankGif: (dojo.config.blankGif || dojo.moduleUrl("dojo", "resources/blank.gif")).toString(),
            postscript: function (_69, _6a) {
                this.create(_69, _6a);
            },
            create: function (_6b, _6c) {
                this.srcNodeRef = dojo.byId(_6c);
                this._connects = [];
                this._subscribes = [];
                if (this.srcNodeRef && (typeof this.srcNodeRef.id == "string")) {
                    this.id = this.srcNodeRef.id;
                }
                if (_6b) {
                    this.params = _6b;
                    dojo._mixin(this, _6b);
                }
                this.postMixInProperties();
                if (!this.id) {
                    this.id = dijit.getUniqueId(this.declaredClass.replace(/\./g, "_"));
                }
                dijit.registry.add(this);
                this.buildRendering();
                if (this.domNode) {
                    this._applyAttributes();
                    var _6d = this.srcNodeRef;
                    if (_6d && _6d.parentNode && this.domNode !== _6d) {
                        _6d.parentNode.replaceChild(this.domNode, _6d);
                    }
                }
                if (this.domNode) {
                    this.domNode.setAttribute("widgetId", this.id);
                }
                this.postCreate();
                if (this.srcNodeRef && !this.srcNodeRef.parentNode) {
                    delete this.srcNodeRef;
                }
                this._created = true;
            },
            _applyAttributes: function () {
                var _6e = function (_6f, _70) {
                    if ((_70.params && _6f in _70.params) || _70[_6f]) {
                        _70.set(_6f, _70[_6f]);
                    }
                };
                for (var _71 in this.attributeMap) {
                    _6e(_71, this);
                }
                dojo.forEach(this._getSetterAttributes(), function (a) {
                    if (!(a in this.attributeMap)) {
                        _6e(a, this);
                    }
                }, this);
            },
            _getSetterAttributes: function () {
                var _72 = this.constructor;
                if (!_72._setterAttrs) {
                    var r = (_72._setterAttrs = []),
                        _73, _74 = _72.prototype;
                    for (var _75 in _74) {
                        if (dojo.isFunction(_74[_75]) && (_73 = _75.match(/^_set([a-zA-Z]*)Attr$/)) && _73[1]) {
                            r.push(_73[1].charAt(0).toLowerCase() + _73[1].substr(1));
                        }
                    }
                }
                return _72._setterAttrs;
            },
            postMixInProperties: function () {},
            buildRendering: function () {
                if (!this.domNode) {
                    this.domNode = this.srcNodeRef || dojo.create("div");
                }
                if (this.baseClass) {
                    var _76 = this.baseClass.split(" ");
                    if (!this.isLeftToRight()) {
                        _76 = _76.concat(dojo.map(_76, function (_77) {
                            return _77 + "Rtl";
                        }));
                    }
                    dojo.addClass(this.domNode, _76);
                }
            },
            postCreate: function () {},
            startup: function () {
                this._started = true;
            },
            destroyRecursive: function (_78) {
                this._beingDestroyed = true;
                this.destroyDescendants(_78);
                this.destroy(_78);
            },
            destroy: function (_79) {
                this._beingDestroyed = true;
                this.uninitialize();
                var d = dojo,
                    dfe = d.forEach,
                    dun = d.unsubscribe;
                dfe(this._connects, function (_7a) {
                    dfe(_7a, d.disconnect);
                });
                dfe(this._subscribes, function (_7b) {
                    dun(_7b);
                });
                dfe(this._supportingWidgets || [], function (w) {
                    if (w.destroyRecursive) {
                        w.destroyRecursive();
                    } else {
                        if (w.destroy) {
                            w.destroy();
                        }
                    }
                });
                this.destroyRendering(_79);
                dijit.registry.remove(this.id);
                this._destroyed = true;
            },
            destroyRendering: function (_7c) {
                if (this.bgIframe) {
                    this.bgIframe.destroy(_7c);
                    delete this.bgIframe;
                }
                if (this.domNode) {
                    if (_7c) {
                        dojo.removeAttr(this.domNode, "widgetId");
                    } else {
                        dojo.destroy(this.domNode);
                    }
                    delete this.domNode;
                }
                if (this.srcNodeRef) {
                    if (!_7c) {
                        dojo.destroy(this.srcNodeRef);
                    }
                    delete this.srcNodeRef;
                }
            },
            destroyDescendants: function (_7d) {
                dojo.forEach(this.getChildren(), function (_7e) {
                    if (_7e.destroyRecursive) {
                        _7e.destroyRecursive(_7d);
                    }
                });
            },
            uninitialize: function () {
                return false;
            },
            _setClassAttr: function (_7f) {
                var _80 = this[this.attributeMap["class"] || "domNode"];
                dojo.replaceClass(_80, _7f, this["class"]);
                this._set("class", _7f);
            },
            _setStyleAttr: function (_81) {
                var _82 = this[this.attributeMap.style || "domNode"];
                if (dojo.isObject(_81)) {
                    dojo.style(_82, _81);
                } else {
                    if (_82.style.cssText) {
                        _82.style.cssText += "; " + _81;
                    } else {
                        _82.style.cssText = _81;
                    }
                }
                this._set("style", _81);
            },
            _attrToDom: function (_83, _84) {
                var _85 = this.attributeMap[_83];
                dojo.forEach(dojo.isArray(_85) ? _85 : [_85], function (_86) {
                    var _87 = this[_86.node || _86 || "domNode"];
                    var _88 = _86.type || "attribute";
                    switch (_88) {
                        case "attribute":
                            if (dojo.isFunction(_84)) {
                                _84 = dojo.hitch(this, _84);
                            }
                            var _89 = _86.attribute ? _86.attribute : (/^on[A-Z][a-zA-Z]*$/.test(_83) ? _83.toLowerCase() : _83);
                            dojo.attr(_87, _89, _84);
                            break;
                        case "innerText":
                            _87.innerHTML = "";
                            _87.appendChild(dojo.doc.createTextNode(_84));
                            break;
                        case "innerHTML":
                            _87.innerHTML = _84;
                            break;
                        case "class":
                            dojo.replaceClass(_87, _84, this[_83]);
                            break;
                    }
                }, this);
            },
            get: function (_8a) {
                var _8b = this._getAttrNames(_8a);
                return this[_8b.g] ? this[_8b.g]() : this[_8a];
            },
            set: function (_8c, _8d) {
                if (typeof _8c === "object") {
                    for (var x in _8c) {
                        this.set(x, _8c[x]);
                    }
                    return this;
                }
                var _8e = this._getAttrNames(_8c);
                if (this[_8e.s]) {
                    var _8f = this[_8e.s].apply(this, Array.prototype.slice.call(arguments, 1));
                } else {
                    if (_8c in this.attributeMap) {
                        this._attrToDom(_8c, _8d);
                    }
                    this._set(_8c, _8d);
                }
                return _8f || this;
            },
            _attrPairNames: {},
            _getAttrNames: function (_90) {
                var apn = this._attrPairNames;
                if (apn[_90]) {
                    return apn[_90];
                }
                var uc = _90.charAt(0).toUpperCase() + _90.substr(1);
                return (apn[_90] = {
                    n: _90 + "Node",
                    s: "_set" + uc + "Attr",
                    g: "_get" + uc + "Attr"
                });
            },
            _set: function (_91, _92) {
                var _93 = this[_91];
                this[_91] = _92;
                if (this._watchCallbacks && this._created && _92 !== _93) {
                    this._watchCallbacks(_91, _93, _92);
                }
            },
            toString: function () {
                return "[Widget " + this.declaredClass + ", " + (this.id || "NO ID") + "]";
            },
            getDescendants: function () {
                return this.containerNode ? dojo.query("[widgetId]", this.containerNode).map(dijit.byNode) : [];
            },
            getChildren: function () {
                return this.containerNode ? dijit.findWidgets(this.containerNode) : [];
            },
            connect: function (obj, _94, _95) {
                var _96 = [dojo._connect(obj, _94, this, _95)];
                this._connects.push(_96);
                return _96;
            },
            disconnect: function (_97) {
                for (var i = 0; i < this._connects.length; i++) {
                    if (this._connects[i] == _97) {
                        dojo.forEach(_97, dojo.disconnect);
                        this._connects.splice(i, 1);
                        return;
                    }
                }
            },
            subscribe: function (_98, _99) {
                var _9a = dojo.subscribe(_98, this, _99);
                this._subscribes.push(_9a);
                return _9a;
            },
            unsubscribe: function (_9b) {
                for (var i = 0; i < this._subscribes.length; i++) {
                    if (this._subscribes[i] == _9b) {
                        dojo.unsubscribe(_9b);
                        this._subscribes.splice(i, 1);
                        return;
                    }
                }
            },
            isLeftToRight: function () {
                return this.dir ? (this.dir == "ltr") : dojo._isBodyLtr();
            },
            placeAt: function (_9c, _9d) {
                if (_9c.declaredClass && _9c.addChild) {
                    _9c.addChild(this, _9d);
                } else {
                    dojo.place(this.domNode, _9c, _9d);
                }
                return this;
            }
        });
    })();
}
if (!dojo._hasResource["dojo.window"]) {
    dojo._hasResource["dojo.window"] = true;
    dojo.provide("dojo.window");
    dojo.getObject("window", true, dojo);
    dojo.window.getBox = function () {
        var _9e = (dojo.doc.compatMode == "BackCompat") ? dojo.body() : dojo.doc.documentElement;
        var _9f = dojo._docScroll();
        return {
            w: _9e.clientWidth,
            h: _9e.clientHeight,
            l: _9f.x,
            t: _9f.y
        };
    };
    dojo.window.get = function (doc) {
        if (dojo.isIE && window !== document.parentWindow) {
            doc.parentWindow.execScript("document._parentWindow = window;", "Javascript");
            var win = doc._parentWindow;
            doc._parentWindow = null;
            return win;
        }
        return doc.parentWindow || doc.defaultView;
    };
    dojo.window.scrollIntoView = function (_a0, pos) {
        try {
            _a0 = dojo.byId(_a0);
            var doc = _a0.ownerDocument || dojo.doc,
                _a1 = doc.body || dojo.body(),
                _a2 = doc.documentElement || _a1.parentNode,
                _a3 = dojo.isIE,
                _a4 = dojo.isWebKit;
            if ((!(dojo.isMoz || _a3 || _a4 || dojo.isOpera) || _a0 == _a1 || _a0 == _a2) && (typeof _a0.scrollIntoView != "undefined")) {
                _a0.scrollIntoView(false);
                return;
            }
            var _a5 = doc.compatMode == "BackCompat",
                _a6 = (_a3 >= 9 && _a0.ownerDocument.parentWindow.frameElement) ? ((_a2.clientHeight > 0 && _a2.clientWidth > 0 && (_a1.clientHeight == 0 || _a1.clientWidth == 0 || _a1.clientHeight > _a2.clientHeight || _a1.clientWidth > _a2.clientWidth)) ? _a2 : _a1) : (_a5 ? _a1 : _a2),
                _a7 = _a4 ? _a1 : _a6,
                _a8 = _a6.clientWidth,
                _a9 = _a6.clientHeight,
                rtl = !dojo._isBodyLtr(),
                _aa = pos || dojo.position(_a0),
                el = _a0.parentNode,
                _ab = function (el) {
                    return ((_a3 <= 6 || (_a3 && _a5)) ? false : (dojo.style(el, "position").toLowerCase() == "fixed"));
                };
            if (_ab(_a0)) {
                return;
            }
            while (el) {
                if (el == _a1) {
                    el = _a7;
                }
                var _ac = dojo.position(el),
                    _ad = _ab(el);
                if (el == _a7) {
                    _ac.w = _a8;
                    _ac.h = _a9;
                    if (_a7 == _a2 && _a3 && rtl) {
                        _ac.x += _a7.offsetWidth - _ac.w;
                    }
                    if (_ac.x < 0 || !_a3) {
                        _ac.x = 0;
                    }
                    if (_ac.y < 0 || !_a3) {
                        _ac.y = 0;
                    }
                } else {
                    var pb = dojo._getPadBorderExtents(el);
                    _ac.w -= pb.w;
                    _ac.h -= pb.h;
                    _ac.x += pb.l;
                    _ac.y += pb.t;
                    var _ae = el.clientWidth,
                        _af = _ac.w - _ae;
                    if (_ae > 0 && _af > 0) {
                        _ac.w = _ae;
                        _ac.x += (rtl && (_a3 || el.clientLeft > pb.l)) ? _af : 0;
                    }
                    _ae = el.clientHeight;
                    _af = _ac.h - _ae;
                    if (_ae > 0 && _af > 0) {
                        _ac.h = _ae;
                    }
                }
                if (_ad) {
                    if (_ac.y < 0) {
                        _ac.h += _ac.y;
                        _ac.y = 0;
                    }
                    if (_ac.x < 0) {
                        _ac.w += _ac.x;
                        _ac.x = 0;
                    }
                    if (_ac.y + _ac.h > _a9) {
                        _ac.h = _a9 - _ac.y;
                    }
                    if (_ac.x + _ac.w > _a8) {
                        _ac.w = _a8 - _ac.x;
                    }
                }
                var l = _aa.x - _ac.x,
                    t = _aa.y - Math.max(_ac.y, 0),
                    r = l + _aa.w - _ac.w,
                    bot = t + _aa.h - _ac.h;
                if (r * l > 0) {
                    var s = Math[l < 0 ? "max" : "min"](l, r);
                    if (rtl && ((_a3 == 8 && !_a5) || _a3 >= 9)) {
                        s = -s;
                    }
                    _aa.x += el.scrollLeft;
                    el.scrollLeft += s;
                    _aa.x -= el.scrollLeft;
                }
                if (bot * t > 0) {
                    _aa.y += el.scrollTop;
                    el.scrollTop += Math[t < 0 ? "max" : "min"](t, bot);
                    _aa.y -= el.scrollTop;
                }
                el = (el != _a7) && !_ad && el.parentNode;
            }
        } catch (error) {
            _a0.scrollIntoView(false);
        }
    };
}
if (!dojo._hasResource["dijit._base.focus"]) {
    dojo._hasResource["dijit._base.focus"] = true;
    dojo.provide("dijit._base.focus");
    dojo.mixin(dijit, {
        _curFocus: null,
        _prevFocus: null,
        isCollapsed: function () {
            return dijit.getBookmark().isCollapsed;
        },
        getBookmark: function () {
            var bm, rg, tg, sel = dojo.doc.selection,
                cf = dijit._curFocus;
            if (dojo.global.getSelection) {
                sel = dojo.global.getSelection();
                if (sel) {
                    if (sel.isCollapsed) {
                        tg = cf ? cf.tagName : "";
                        if (tg) {
                            tg = tg.toLowerCase();
                            if (tg == "textarea" || (tg == "input" && (!cf.type || cf.type.toLowerCase() == "text"))) {
                                sel = {
                                    start: cf.selectionStart,
                                    end: cf.selectionEnd,
                                    node: cf,
                                    pRange: true
                                };
                                return {
                                    isCollapsed: (sel.end <= sel.start),
                                    mark: sel
                                };
                            }
                        }
                        bm = {
                            isCollapsed: true
                        };
                        if (sel.rangeCount) {
                            bm.mark = sel.getRangeAt(0).cloneRange();
                        }
                    } else {
                        rg = sel.getRangeAt(0);
                        bm = {
                            isCollapsed: false,
                            mark: rg.cloneRange()
                        };
                    }
                }
            } else {
                if (sel) {
                    tg = cf ? cf.tagName : "";
                    tg = tg.toLowerCase();
                    if (cf && tg && (tg == "button" || tg == "textarea" || tg == "input")) {
                        if (sel.type && sel.type.toLowerCase() == "none") {
                            return {
                                isCollapsed: true,
                                mark: null
                            };
                        } else {
                            rg = sel.createRange();
                            return {
                                isCollapsed: rg.text && rg.text.length ? false : true,
                                mark: {
                                    range: rg,
                                    pRange: true
                                }
                            };
                        }
                    }
                    bm = {};
                    try {
                        rg = sel.createRange();
                        bm.isCollapsed = !(sel.type == "Text" ? rg.htmlText.length : rg.length);
                    } catch (e) {
                        bm.isCollapsed = true;
                        return bm;
                    }
                    if (sel.type.toUpperCase() == "CONTROL") {
                        if (rg.length) {
                            bm.mark = [];
                            var i = 0,
                                len = rg.length;
                            while (i < len) {
                                bm.mark.push(rg.item(i++));
                            }
                        } else {
                            bm.isCollapsed = true;
                            bm.mark = null;
                        }
                    } else {
                        bm.mark = rg.getBookmark();
                    }
                } else {}
            }
            return bm;
        },
        moveToBookmark: function (_b0) {
            var _b1 = dojo.doc,
                _b2 = _b0.mark;
            if (_b2) {
                if (dojo.global.getSelection) {
                    var sel = dojo.global.getSelection();
                    if (sel && sel.removeAllRanges) {
                        if (_b2.pRange) {
                            var r = _b2;
                            var n = r.node;
                            n.selectionStart = r.start;
                            n.selectionEnd = r.end;
                        } else {
                            sel.removeAllRanges();
                            sel.addRange(_b2);
                        }
                    } else {}
                } else {
                    if (_b1.selection && _b2) {
                        var rg;
                        if (_b2.pRange) {
                            rg = _b2.range;
                        } else {
                            if (dojo.isArray(_b2)) {
                                rg = _b1.body.createControlRange();
                                dojo.forEach(_b2, function (n) {
                                    rg.addElement(n);
                                });
                            } else {
                                rg = _b1.body.createTextRange();
                                rg.moveToBookmark(_b2);
                            }
                        }
                        rg.select();
                    }
                }
            }
        },
        getFocus: function (_b3, _b4) {
            var _b5 = !dijit._curFocus || (_b3 && dojo.isDescendant(dijit._curFocus, _b3.domNode)) ? dijit._prevFocus : dijit._curFocus;
            return {
                node: _b5,
                bookmark: (_b5 == dijit._curFocus) && dojo.withGlobal(_b4 || dojo.global, dijit.getBookmark),
                openedForWindow: _b4
            };
        },
        focus: function (_b6) {
            if (!_b6) {
                return;
            }
            var _b7 = "node" in _b6 ? _b6.node : _b6,
                _b8 = _b6.bookmark,
                _b9 = _b6.openedForWindow,
                _ba = _b8 ? _b8.isCollapsed : false;
            if (_b7) {
                var _bb = (_b7.tagName.toLowerCase() == "iframe") ? _b7.contentWindow : _b7;
                if (_bb && _bb.focus) {
                    try {
                        _bb.focus();
                    } catch (e) {}
                }
                dijit._onFocusNode(_b7);
            }
            if (_b8 && dojo.withGlobal(_b9 || dojo.global, dijit.isCollapsed) && !_ba) {
                if (_b9) {
                    _b9.focus();
                }
                try {
                    dojo.withGlobal(_b9 || dojo.global, dijit.moveToBookmark, null, [_b8]);
                } catch (e2) {}
            }
        },
        _activeStack: [],
        registerIframe: function (_bc) {
            return dijit.registerWin(_bc.contentWindow, _bc);
        },
        unregisterIframe: function (_bd) {
            dijit.unregisterWin(_bd);
        },
        registerWin: function (_be, _bf) {
            var _c0 = function (evt) {
                dijit._justMouseDowned = true;
                setTimeout(function () {
                    dijit._justMouseDowned = false;
                }, 0);
                if (dojo.isIE && evt && evt.srcElement && evt.srcElement.parentNode == null) {
                    return;
                }
                dijit._onTouchNode(_bf || evt.target || evt.srcElement, "mouse");
            };
            var doc = dojo.isIE ? _be.document.documentElement : _be.document;
            if (doc) {
                if (dojo.isIE) {
                    _be.document.body.attachEvent("onmousedown", _c0);
                    var _c1 = function (evt) {
                        if (evt.srcElement.tagName.toLowerCase() != "#document" && dijit.isTabNavigable(evt.srcElement)) {
                            dijit._onFocusNode(_bf || evt.srcElement);
                        } else {
                            dijit._onTouchNode(_bf || evt.srcElement);
                        }
                    };
                    doc.attachEvent("onactivate", _c1);
                    var _c2 = function (evt) {
                        dijit._onBlurNode(_bf || evt.srcElement);
                    };
                    doc.attachEvent("ondeactivate", _c2);
                    return function () {
                        _be.document.detachEvent("onmousedown", _c0);
                        doc.detachEvent("onactivate", _c1);
                        doc.detachEvent("ondeactivate", _c2);
                        doc = null;
                    };
                } else {
                    doc.body.addEventListener("mousedown", _c0, true);
                    var _c3 = function (evt) {
                        dijit._onFocusNode(_bf || evt.target);
                    };
                    doc.addEventListener("focus", _c3, true);
                    var _c4 = function (evt) {
                        dijit._onBlurNode(_bf || evt.target);
                    };
                    doc.addEventListener("blur", _c4, true);
                    return function () {
                        doc.body.removeEventListener("mousedown", _c0, true);
                        doc.removeEventListener("focus", _c3, true);
                        doc.removeEventListener("blur", _c4, true);
                        doc = null;
                    };
                }
            }
        },
        unregisterWin: function (_c5) {
            _c5 && _c5();
        },
        _onBlurNode: function (_c6) {
            dijit._prevFocus = dijit._curFocus;
            dijit._curFocus = null;
            if (dijit._justMouseDowned) {
                return;
            }
            if (dijit._clearActiveWidgetsTimer) {
                clearTimeout(dijit._clearActiveWidgetsTimer);
            }
            dijit._clearActiveWidgetsTimer = setTimeout(function () {
                delete dijit._clearActiveWidgetsTimer;
                dijit._setStack([]);
                dijit._prevFocus = null;
            }, 100);
        },
        _onTouchNode: function (_c7, by) {
            if (dijit._clearActiveWidgetsTimer) {
                clearTimeout(dijit._clearActiveWidgetsTimer);
                delete dijit._clearActiveWidgetsTimer;
            }
            var _c8 = [];
            try {
                while (_c7) {
                    var _c9 = dojo.attr(_c7, "dijitPopupParent");
                    if (_c9) {
                        _c7 = dijit.byId(_c9).domNode;
                    } else {
                        if (_c7.tagName && _c7.tagName.toLowerCase() == "body") {
                            if (_c7 === dojo.body()) {
                                break;
                            }
                            _c7 = dojo.window.get(_c7.ownerDocument).frameElement;
                        } else {
                            var id = _c7.getAttribute && _c7.getAttribute("widgetId"),
                                _ca = id && dijit.byId(id);
                            if (_ca && !(by == "mouse" && _ca.get("disabled"))) {
                                _c8.unshift(id);
                            }
                            _c7 = _c7.parentNode;
                        }
                    }
                }
            } catch (e) {}
            dijit._setStack(_c8, by);
        },
        _onFocusNode: function (_cb) {
            if (!_cb) {
                return;
            }
            if (_cb.nodeType == 9) {
                return;
            }
            dijit._onTouchNode(_cb);
            if (_cb == dijit._curFocus) {
                return;
            }
            if (dijit._curFocus) {
                dijit._prevFocus = dijit._curFocus;
            }
            dijit._curFocus = _cb;
            dojo.publish("focusNode", [_cb]);
        },
        _setStack: function (_cc, by) {
            var _cd = dijit._activeStack;
            dijit._activeStack = _cc;
            for (var _ce = 0; _ce < Math.min(_cd.length, _cc.length); _ce++) {
                if (_cd[_ce] != _cc[_ce]) {
                    break;
                }
            }
            var _cf;
            for (var i = _cd.length - 1; i >= _ce; i--) {
                _cf = dijit.byId(_cd[i]);
                if (_cf) {
                    _cf._focused = false;
                    _cf.set("focused", false);
                    _cf._hasBeenBlurred = true;
                    if (_cf._onBlur) {
                        _cf._onBlur(by);
                    }
                    dojo.publish("widgetBlur", [_cf, by]);
                }
            }
            for (i = _ce; i < _cc.length; i++) {
                _cf = dijit.byId(_cc[i]);
                if (_cf) {
                    _cf._focused = true;
                    _cf.set("focused", true);
                    if (_cf._onFocus) {
                        _cf._onFocus(by);
                    }
                    dojo.publish("widgetFocus", [_cf, by]);
                }
            }
        }
    });
    dojo.addOnLoad(function () {
        var _d0 = dijit.registerWin(window);
        if (dojo.isIE) {
            dojo.addOnWindowUnload(function () {
                dijit.unregisterWin(_d0);
                _d0 = null;
            });
        }
    });
}
if (!dojo._hasResource["dojo.AdapterRegistry"]) {
    dojo._hasResource["dojo.AdapterRegistry"] = true;
    dojo.provide("dojo.AdapterRegistry");
    dojo.AdapterRegistry = function (_d1) {
        this.pairs = [];
        this.returnWrappers = _d1 || false;
    };
    dojo.extend(dojo.AdapterRegistry, {
        register: function (_d2, _d3, _d4, _d5, _d6) {
            this.pairs[((_d6) ? "unshift" : "push")]([_d2, _d3, _d4, _d5]);
        },
        match: function () {
            for (var i = 0; i < this.pairs.length; i++) {
                var _d7 = this.pairs[i];
                if (_d7[1].apply(this, arguments)) {
                    if ((_d7[3]) || (this.returnWrappers)) {
                        return _d7[2];
                    } else {
                        return _d7[2].apply(this, arguments);
                    }
                }
            }
            throw new Error("No match found");
        },
        unregister: function (_d8) {
            for (var i = 0; i < this.pairs.length; i++) {
                var _d9 = this.pairs[i];
                if (_d9[0] == _d8) {
                    this.pairs.splice(i, 1);
                    return true;
                }
            }
            return false;
        }
    });
}
if (!dojo._hasResource["dijit._base.place"]) {
    dojo._hasResource["dijit._base.place"] = true;
    dojo.provide("dijit._base.place");
    dijit.getViewport = function () {
        return dojo.window.getBox();
    };
    dijit.placeOnScreen = function (_da, pos, _db, _dc) {
        var _dd = dojo.map(_db, function (_de) {
            var c = {
                corner: _de,
                pos: {
                    x: pos.x,
                    y: pos.y
                }
            };
            if (_dc) {
                c.pos.x += _de.charAt(1) == "L" ? _dc.x : -_dc.x;
                c.pos.y += _de.charAt(0) == "T" ? _dc.y : -_dc.y;
            }
            return c;
        });
        return dijit._place(_da, _dd);
    };
    dijit._place = function (_df, _e0, _e1, _e2) {
        var _e3 = dojo.window.getBox();
        if (!_df.parentNode || String(_df.parentNode.tagName).toLowerCase() != "body") {
            dojo.body().appendChild(_df);
        }
        var _e4 = null;
        dojo.some(_e0, function (_e5) {
            var _e6 = _e5.corner;
            var pos = _e5.pos;
            var _e7 = 0;
            var _e8 = {
                w: _e6.charAt(1) == "L" ? (_e3.l + _e3.w) - pos.x : pos.x - _e3.l,
                h: _e6.charAt(1) == "T" ? (_e3.t + _e3.h) - pos.y : pos.y - _e3.t
            };
            if (_e1) {
                var res = _e1(_df, _e5.aroundCorner, _e6, _e8, _e2);
                _e7 = typeof res == "undefined" ? 0 : res;
            }
            var _e9 = _df.style;
            var _ea = _e9.display;
            var _eb = _e9.visibility;
            _e9.visibility = "hidden";
            _e9.display = "";
            var mb = dojo.marginBox(_df);
            _e9.display = _ea;
            _e9.visibility = _eb;
            var _ec = Math.max(_e3.l, _e6.charAt(1) == "L" ? pos.x : (pos.x - mb.w)),
                _ed = Math.max(_e3.t, _e6.charAt(0) == "T" ? pos.y : (pos.y - mb.h)),
                _ee = Math.min(_e3.l + _e3.w, _e6.charAt(1) == "L" ? (_ec + mb.w) : pos.x),
                _ef = Math.min(_e3.t + _e3.h, _e6.charAt(0) == "T" ? (_ed + mb.h) : pos.y),
                _f0 = _ee - _ec,
                _f1 = _ef - _ed;
            _e7 += (mb.w - _f0) + (mb.h - _f1);
            if (_e4 == null || _e7 < _e4.overflow) {
                _e4 = {
                    corner: _e6,
                    aroundCorner: _e5.aroundCorner,
                    x: _ec,
                    y: _ed,
                    w: _f0,
                    h: _f1,
                    overflow: _e7,
                    spaceAvailable: _e8
                };
            }
            return !_e7;
        });
        if (_e4.overflow && _e1) {
            _e1(_df, _e4.aroundCorner, _e4.corner, _e4.spaceAvailable, _e2);
        }
        var l = dojo._isBodyLtr(),
            s = _df.style;
        s.top = _e4.y + "px";
        s[l ? "left" : "right"] = (l ? _e4.x : _e3.w - _e4.x - _e4.w) + "px";
        return _e4;
    };
    dijit.placeOnScreenAroundNode = function (_f2, _f3, _f4, _f5) {
        _f3 = dojo.byId(_f3);
        var _f6 = dojo.position(_f3, true);
        return dijit._placeOnScreenAroundRect(_f2, _f6.x, _f6.y, _f6.w, _f6.h, _f4, _f5);
    };
    dijit.placeOnScreenAroundRectangle = function (_f7, _f8, _f9, _fa) {
        return dijit._placeOnScreenAroundRect(_f7, _f8.x, _f8.y, _f8.width, _f8.height, _f9, _fa);
    };
    dijit._placeOnScreenAroundRect = function (_fb, x, y, _fc, _fd, _fe, _ff) {
        var _100 = [];
        for (var _101 in _fe) {
            _100.push({
                aroundCorner: _101,
                corner: _fe[_101],
                pos: {
                    x: x + (_101.charAt(1) == "L" ? 0 : _fc),
                    y: y + (_101.charAt(0) == "T" ? 0 : _fd)
                }
            });
        }
        return dijit._place(_fb, _100, _ff, {
            w: _fc,
            h: _fd
        });
    };
    dijit.placementRegistry = new dojo.AdapterRegistry();
    dijit.placementRegistry.register("node", function (n, x) {
        return typeof x == "object" && typeof x.offsetWidth != "undefined" && typeof x.offsetHeight != "undefined";
    }, dijit.placeOnScreenAroundNode);
    dijit.placementRegistry.register("rect", function (n, x) {
        return typeof x == "object" && "x" in x && "y" in x && "width" in x && "height" in x;
    }, dijit.placeOnScreenAroundRectangle);
    dijit.placeOnScreenAroundElement = function (node, _102, _103, _104) {
        return dijit.placementRegistry.match.apply(dijit.placementRegistry, arguments);
    };
    dijit.getPopupAroundAlignment = function (_105, _106) {
        var _107 = {};
        dojo.forEach(_105, function (pos) {
            switch (pos) {
                case "after":
                    _107[_106 ? "BR" : "BL"] = _106 ? "BL" : "BR";
                    break;
                case "before":
                    _107[_106 ? "BL" : "BR"] = _106 ? "BR" : "BL";
                    break;
                case "below-alt":
                    _106 = !_106;
                case "below":
                    _107[_106 ? "BL" : "BR"] = _106 ? "TL" : "TR";
                    _107[_106 ? "BR" : "BL"] = _106 ? "TR" : "TL";
                    break;
                case "above-alt":
                    _106 = !_106;
                case "above":
                default:
                    _107[_106 ? "TL" : "TR"] = _106 ? "BL" : "BR";
                    _107[_106 ? "TR" : "TL"] = _106 ? "BR" : "BL";
                    break;
            }
        });
        return _107;
    };
}
if (!dojo._hasResource["dijit._base.window"]) {
    dojo._hasResource["dijit._base.window"] = true;
    dojo.provide("dijit._base.window");
    dijit.getDocumentWindow = function (doc) {
        return dojo.window.get(doc);
    };
}
if (!dojo._hasResource["dijit._base.popup"]) {
    dojo._hasResource["dijit._base.popup"] = true;
    dojo.provide("dijit._base.popup");
    dijit.popup = {
        _stack: [],
        _beginZIndex: 2000,
        _idGen: 1,
        _createWrapper: function (_108) {
            var _109 = _108.declaredClass ? _108._popupWrapper : (_108.parentNode && dojo.hasClass(_108.parentNode, "dijitPopup")),
                node = _108.domNode || _108;
            if (!_109) {
                _109 = dojo.create("div", {
                    "class": "dijitPopup",
                    style: {
                        display: "none"
                    },
                    role: "presentation"
                }, dojo.body());
                _109.appendChild(node);
                var s = node.style;
                s.display = "";
                s.visibility = "";
                s.position = "";
                s.top = "0px";
                if (_108.declaredClass) {
                    _108._popupWrapper = _109;
                    dojo.connect(_108, "destroy", function () {
                        dojo.destroy(_109);
                        delete _108._popupWrapper;
                    });
                }
            }
            return _109;
        },
        moveOffScreen: function (_10a) {
            var _10b = this._createWrapper(_10a);
            dojo.style(_10b, {
                visibility: "hidden",
                top: "-9999px",
                display: ""
            });
        },
        hide: function (_10c) {
            var _10d = this._createWrapper(_10c);
            dojo.style(_10d, "display", "none");
        },
        getTopPopup: function () {
            var _10e = this._stack;
            for (var pi = _10e.length - 1; pi > 0 && _10e[pi].parent === _10e[pi - 1].widget; pi--) {}
            return _10e[pi];
        },
        open: function (args) {
            var _10f = this._stack,
                _110 = args.popup,
                _111 = args.orient || ((args.parent ? args.parent.isLeftToRight() : dojo._isBodyLtr()) ? {
                    "BL": "TL",
                    "BR": "TR",
                    "TL": "BL",
                    "TR": "BR"
                } : {
                    "BR": "TR",
                    "BL": "TL",
                    "TR": "BR",
                    "TL": "BL"
                }),
                _112 = args.around,
                id = (args.around && args.around.id) ? (args.around.id + "_dropdown") : ("popup_" + this._idGen++);
            while (_10f.length && (!args.parent || !dojo.isDescendant(args.parent.domNode, _10f[_10f.length - 1].widget.domNode))) {
                dijit.popup.close(_10f[_10f.length - 1].widget);
            }
            var _113 = this._createWrapper(_110);
            dojo.attr(_113, {
                id: id,
                style: {
                    zIndex: this._beginZIndex + _10f.length
                },
                "class": "dijitPopup " + (_110.baseClass || _110["class"] || "").split(" ")[0] + "Popup",
                dijitPopupParent: args.parent ? args.parent.id : ""
            });
            if (dojo.isIE || dojo.isMoz) {
                if (!_110.bgIframe) {
                    _110.bgIframe = new dijit.BackgroundIframe(_113);
                }
            }
            var best = _112 ? dijit.placeOnScreenAroundElement(_113, _112, _111, _110.orient ? dojo.hitch(_110, "orient") : null) : dijit.placeOnScreen(_113, args, _111 == "R" ? ["TR", "BR", "TL", "BL"] : ["TL", "BL", "TR", "BR"], args.padding);
            _113.style.display = "";
            _113.style.visibility = "visible";
            _110.domNode.style.visibility = "visible";
            var _114 = [];
            _114.push(dojo.connect(_113, "onkeypress", this, function (evt) {
                if (evt.charOrCode == dojo.keys.ESCAPE && args.onCancel) {
                    dojo.stopEvent(evt);
                    args.onCancel();
                } else {
                    if (evt.charOrCode === dojo.keys.TAB) {
                        dojo.stopEvent(evt);
                        var _115 = this.getTopPopup();
                        if (_115 && _115.onCancel) {
                            _115.onCancel();
                        }
                    }
                }
            }));
            if (_110.onCancel) {
                _114.push(dojo.connect(_110, "onCancel", args.onCancel));
            }
            _114.push(dojo.connect(_110, _110.onExecute ? "onExecute" : "onChange", this, function () {
                var _116 = this.getTopPopup();
                if (_116 && _116.onExecute) {
                    _116.onExecute();
                }
            }));
            _10f.push({
                widget: _110,
                parent: args.parent,
                onExecute: args.onExecute,
                onCancel: args.onCancel,
                onClose: args.onClose,
                handlers: _114
            });
            if (_110.onOpen) {
                _110.onOpen(best);
            }
            return best;
        },
        close: function (_117) {
            var _118 = this._stack;
            while ((_117 && dojo.some(_118, function (elem) {
                return elem.widget == _117;
            })) || (!_117 && _118.length)) {
                var top = _118.pop(),
                    _119 = top.widget,
                    _11a = top.onClose;
                if (_119.onClose) {
                    _119.onClose();
                }
                dojo.forEach(top.handlers, dojo.disconnect);
                if (_119 && _119.domNode) {
                    this.hide(_119);
                }
                if (_11a) {
                    _11a();
                }
            }
        }
    };
    dijit._frames = new function () {
        var _11b = [];
        this.pop = function () {
            var _11c;
            if (_11b.length) {
                _11c = _11b.pop();
                _11c.style.display = "";
            } else {
                if (dojo.isIE < 9) {
                    var burl = dojo.config["dojoBlankHtmlUrl"] || (dojo.moduleUrl("dojo", "resources/blank.html") + "") || "javascript:\"\"";
                    var html = "<iframe src='" + burl + "'" + " style='position: absolute; left: 0px; top: 0px;" + "z-index: -1; filter:Alpha(Opacity=\"0\");'>";
                    _11c = dojo.doc.createElement(html);
                } else {
                    _11c = dojo.create("iframe");
                    _11c.src = "javascript:\"\"";
                    _11c.className = "dijitBackgroundIframe";
                    dojo.style(_11c, "opacity", 0.1);
                }
                _11c.tabIndex = -1;
                dijit.setWaiRole(_11c, "presentation");
            }
            return _11c;
        };
        this.push = function (_11d) {
            _11d.style.display = "none";
            _11b.push(_11d);
        };
    }();
    dijit.BackgroundIframe = function (node) {
        if (!node.id) {
            throw new Error("no id");
        }
        if (dojo.isIE || dojo.isMoz) {
            var _11e = (this.iframe = dijit._frames.pop());
            node.appendChild(_11e);
            if (dojo.isIE < 7 || dojo.isQuirks) {
                this.resize(node);
                this._conn = dojo.connect(node, "onresize", this, function () {
                    this.resize(node);
                });
            } else {
                dojo.style(_11e, {
                    width: "100%",
                    height: "100%"
                });
            }
        }
    };
    dojo.extend(dijit.BackgroundIframe, {
        resize: function (node) {
            if (this.iframe) {
                dojo.style(this.iframe, {
                    width: node.offsetWidth + "px",
                    height: node.offsetHeight + "px"
                });
            }
        },
        destroy: function () {
            if (this._conn) {
                dojo.disconnect(this._conn);
                this._conn = null;
            }
            if (this.iframe) {
                dijit._frames.push(this.iframe);
                delete this.iframe;
            }
        }
    });
}
if (!dojo._hasResource["dijit._base.scroll"]) {
    dojo._hasResource["dijit._base.scroll"] = true;
    dojo.provide("dijit._base.scroll");
    dijit.scrollIntoView = function (node, pos) {
        dojo.window.scrollIntoView(node, pos);
    };
}
if (!dojo._hasResource["dojo.uacss"]) {
    dojo._hasResource["dojo.uacss"] = true;
    dojo.provide("dojo.uacss");
    (function () {
        var d = dojo,
            html = d.doc.documentElement,
            ie = d.isIE,
            _11f = d.isOpera,
            maj = Math.floor,
            ff = d.isFF,
            _120 = d.boxModel.replace(/-/, ""),
            _121 = {
                dj_ie: ie,
                dj_ie6: maj(ie) == 6,
                dj_ie7: maj(ie) == 7,
                dj_ie8: maj(ie) == 8,
                dj_ie9: maj(ie) == 9,
                dj_quirks: d.isQuirks,
                dj_iequirks: ie && d.isQuirks,
                dj_opera: _11f,
                dj_khtml: d.isKhtml,
                dj_webkit: d.isWebKit,
                dj_safari: d.isSafari,
                dj_chrome: d.isChrome,
                dj_gecko: d.isMozilla,
                dj_ff3: maj(ff) == 3
            };
        _121["dj_" + _120] = true;
        var _122 = "";
        for (var clz in _121) {
            if (_121[clz]) {
                _122 += clz + " ";
            }
        }
        html.className = d.trim(html.className + " " + _122);
        dojo._loaders.unshift(function () {
            if (!dojo._isBodyLtr()) {
                var _123 = "dj_rtl dijitRtl " + _122.replace(/ /g, "-rtl ");
                html.className = d.trim(html.className + " " + _123);
            }
        });
    })();
}
if (!dojo._hasResource["dijit._base.sniff"]) {
    dojo._hasResource["dijit._base.sniff"] = true;
    dojo.provide("dijit._base.sniff");
}
if (!dojo._hasResource["dijit._base.typematic"]) {
    dojo._hasResource["dijit._base.typematic"] = true;
    dojo.provide("dijit._base.typematic");
    dijit.typematic = {
        _fireEventAndReload: function () {
            this._timer = null;
            this._callback(++this._count, this._node, this._evt);
            this._currentTimeout = Math.max(this._currentTimeout < 0 ? this._initialDelay : (this._subsequentDelay > 1 ? this._subsequentDelay : Math.round(this._currentTimeout * this._subsequentDelay)), this._minDelay);
            this._timer = setTimeout(dojo.hitch(this, "_fireEventAndReload"), this._currentTimeout);
        },
        trigger: function (evt, _124, node, _125, obj, _126, _127, _128) {
            if (obj != this._obj) {
                this.stop();
                this._initialDelay = _127 || 500;
                this._subsequentDelay = _126 || 0.9;
                this._minDelay = _128 || 10;
                this._obj = obj;
                this._evt = evt;
                this._node = node;
                this._currentTimeout = -1;
                this._count = -1;
                this._callback = dojo.hitch(_124, _125);
                this._fireEventAndReload();
                this._evt = dojo.mixin({
                    faux: true
                }, evt);
            }
        },
        stop: function () {
            if (this._timer) {
                clearTimeout(this._timer);
                this._timer = null;
            }
            if (this._obj) {
                this._callback(-1, this._node, this._evt);
                this._obj = null;
            }
        },
        addKeyListener: function (node, _129, _12a, _12b, _12c, _12d, _12e) {
            if (_129.keyCode) {
                _129.charOrCode = _129.keyCode;
                dojo.deprecated("keyCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0");
            } else {
                if (_129.charCode) {
                    _129.charOrCode = String.fromCharCode(_129.charCode);
                    dojo.deprecated("charCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0");
                }
            }
            return [dojo.connect(node, "onkeypress", this, function (evt) {
                if (evt.charOrCode == _129.charOrCode && (_129.ctrlKey === undefined || _129.ctrlKey == evt.ctrlKey) && (_129.altKey === undefined || _129.altKey == evt.altKey) && (_129.metaKey === undefined || _129.metaKey == (evt.metaKey || false)) && (_129.shiftKey === undefined || _129.shiftKey == evt.shiftKey)) {
                    dojo.stopEvent(evt);
                    dijit.typematic.trigger(evt, _12a, node, _12b, _129, _12c, _12d, _12e);
                } else {
                    if (dijit.typematic._obj == _129) {
                        dijit.typematic.stop();
                    }
                }
            }), dojo.connect(node, "onkeyup", this, function (evt) {
                if (dijit.typematic._obj == _129) {
                    dijit.typematic.stop();
                }
            })];
        },
        addMouseListener: function (node, _12f, _130, _131, _132, _133) {
            var dc = dojo.connect;
            return [dc(node, "mousedown", this, function (evt) {
                dojo.stopEvent(evt);
                dijit.typematic.trigger(evt, _12f, node, _130, node, _131, _132, _133);
            }), dc(node, "mouseup", this, function (evt) {
                dojo.stopEvent(evt);
                dijit.typematic.stop();
            }), dc(node, "mouseout", this, function (evt) {
                dojo.stopEvent(evt);
                dijit.typematic.stop();
            }), dc(node, "mousemove", this, function (evt) {
                evt.preventDefault();
            }), dc(node, "dblclick", this, function (evt) {
                dojo.stopEvent(evt);
                if (dojo.isIE) {
                    dijit.typematic.trigger(evt, _12f, node, _130, node, _131, _132, _133);
                    setTimeout(dojo.hitch(this, dijit.typematic.stop), 50);
                }
            })];
        },
        addListener: function (_134, _135, _136, _137, _138, _139, _13a, _13b) {
            return this.addKeyListener(_135, _136, _137, _138, _139, _13a, _13b).concat(this.addMouseListener(_134, _137, _138, _139, _13a, _13b));
        }
    };
}
if (!dojo._hasResource["dijit._base.wai"]) {
    dojo._hasResource["dijit._base.wai"] = true;
    dojo.provide("dijit._base.wai");
    dijit.wai = {
        onload: function () {
            var div = dojo.create("div", {
                id: "a11yTestNode",
                style: {
                    cssText: "border: 1px solid;" + "border-color:red green;" + "position: absolute;" + "height: 5px;" + "top: -999px;" + "background-image: url(\"" + (dojo.config.blankGif || dojo.moduleUrl("dojo", "resources/blank.gif")) + "\");"
                }
            }, dojo.body());
            var cs = dojo.getComputedStyle(div);
            if (cs) {
                var _13c = cs.backgroundImage;
                var _13d = (cs.borderTopColor == cs.borderRightColor) || (_13c != null && (_13c == "none" || _13c == "url(invalid-url:)"));
                dojo[_13d ? "addClass" : "removeClass"](dojo.body(), "dijit_a11y");
                if (dojo.isIE) {
                    div.outerHTML = "";
                } else {
                    dojo.body().removeChild(div);
                }
            }
        }
    };
    if (dojo.isIE || dojo.isMoz) {
        dojo._loaders.unshift(dijit.wai.onload);
    }
    dojo.mixin(dijit, {
        hasWaiRole: function (elem, role) {
            var _13e = this.getWaiRole(elem);
            return role ? (_13e.indexOf(role) > -1) : (_13e.length > 0);
        },
        getWaiRole: function (elem) {
            return dojo.trim((dojo.attr(elem, "role") || "").replace("wairole:", ""));
        },
        setWaiRole: function (elem, role) {
            dojo.attr(elem, "role", role);
        },
        removeWaiRole: function (elem, role) {
            var _13f = dojo.attr(elem, "role");
            if (!_13f) {
                return;
            }
            if (role) {
                var t = dojo.trim((" " + _13f + " ").replace(" " + role + " ", " "));
                dojo.attr(elem, "role", t);
            } else {
                elem.removeAttribute("role");
            }
        },
        hasWaiState: function (elem, _140) {
            return elem.hasAttribute ? elem.hasAttribute("aria-" + _140) : !! elem.getAttribute("aria-" + _140);
        },
        getWaiState: function (elem, _141) {
            return elem.getAttribute("aria-" + _141) || "";
        },
        setWaiState: function (elem, _142, _143) {
            elem.setAttribute("aria-" + _142, _143);
        },
        removeWaiState: function (elem, _144) {
            elem.removeAttribute("aria-" + _144);
        }
    });
}
if (!dojo._hasResource["dijit._base"]) {
    dojo._hasResource["dijit._base"] = true;
    dojo.provide("dijit._base");
}
if (!dojo._hasResource["dijit._Widget"]) {
    dojo._hasResource["dijit._Widget"] = true;
    dojo.provide("dijit._Widget");
    dojo.connect(dojo, "_connect", function (_145, _146) {
        if (_145 && dojo.isFunction(_145._onConnect)) {
            _145._onConnect(_146);
        }
    });
    dijit._connectOnUseEventHandler = function (_147) {};
    dijit._lastKeyDownNode = null;
    if (dojo.isIE) {
        (function () {
            var _148 = function (evt) {
                dijit._lastKeyDownNode = evt.srcElement;
            };
            dojo.doc.attachEvent("onkeydown", _148);
            dojo.addOnWindowUnload(function () {
                dojo.doc.detachEvent("onkeydown", _148);
            });
        })();
    } else {
        dojo.doc.addEventListener("keydown", function (evt) {
            dijit._lastKeyDownNode = evt.target;
        }, true);
    }(function () {
        dojo.declare("dijit._Widget", dijit._WidgetBase, {
            _deferredConnects: {
                onClick: "",
                onDblClick: "",
                onKeyDown: "",
                onKeyPress: "",
                onKeyUp: "",
                onMouseMove: "",
                onMouseDown: "",
                onMouseOut: "",
                onMouseOver: "",
                onMouseLeave: "",
                onMouseEnter: "",
                onMouseUp: ""
            },
            onClick: dijit._connectOnUseEventHandler,
            onDblClick: dijit._connectOnUseEventHandler,
            onKeyDown: dijit._connectOnUseEventHandler,
            onKeyPress: dijit._connectOnUseEventHandler,
            onKeyUp: dijit._connectOnUseEventHandler,
            onMouseDown: dijit._connectOnUseEventHandler,
            onMouseMove: dijit._connectOnUseEventHandler,
            onMouseOut: dijit._connectOnUseEventHandler,
            onMouseOver: dijit._connectOnUseEventHandler,
            onMouseLeave: dijit._connectOnUseEventHandler,
            onMouseEnter: dijit._connectOnUseEventHandler,
            onMouseUp: dijit._connectOnUseEventHandler,
            create: function (_149, _14a) {
                this._deferredConnects = dojo.clone(this._deferredConnects);
                for (var attr in this.attributeMap) {
                    delete this._deferredConnects[attr];
                }
                for (attr in this._deferredConnects) {
                    if (this[attr] !== dijit._connectOnUseEventHandler) {
                        delete this._deferredConnects[attr];
                    }
                }
                this.inherited(arguments);
                if (this.domNode) {
                    for (attr in this.params) {
                        this._onConnect(attr);
                    }
                }
            },
            _onConnect: function (_14b) {
                if (_14b in this._deferredConnects) {
                    var _14c = this[this._deferredConnects[_14b] || "domNode"];
                    this.connect(_14c, _14b.toLowerCase(), _14b);
                    delete this._deferredConnects[_14b];
                }
            },
            focused: false,
            isFocusable: function () {
                return this.focus && (dojo.style(this.domNode, "display") != "none");
            },
            onFocus: function () {},
            onBlur: function () {},
            _onFocus: function (e) {
                this.onFocus();
            },
            _onBlur: function () {
                this.onBlur();
            },
            setAttribute: function (attr, _14d) {
                dojo.deprecated(this.declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
                this.set(attr, _14d);
            },
            attr: function (name, _14e) {
                if (dojo.config.isDebug) {
                    var _14f = arguments.callee._ach || (arguments.callee._ach = {}),
                        _150 = (arguments.callee.caller || "unknown caller").toString();
                    if (!_14f[_150]) {
                        dojo.deprecated(this.declaredClass + "::attr() is deprecated. Use get() or set() instead, called from " + _150, "", "2.0");
                        _14f[_150] = true;
                    }
                }
                var args = arguments.length;
                if (args >= 2 || typeof name === "object") {
                    return this.set.apply(this, arguments);
                } else {
                    return this.get(name);
                }
            },
            nodesWithKeyClick: ["input", "button"],
            connect: function (obj, _151, _152) {
                var d = dojo,
                    dc = d._connect,
                    _153 = this.inherited(arguments, [obj, _151 == "ondijitclick" ? "onclick" : _151, _152]);
                if (_151 == "ondijitclick") {
                    if (d.indexOf(this.nodesWithKeyClick, obj.nodeName.toLowerCase()) == -1) {
                        var m = d.hitch(this, _152);
                        _153.push(dc(obj, "onkeydown", this, function (e) {
                            if ((e.keyCode == d.keys.ENTER || e.keyCode == d.keys.SPACE) && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
                                dijit._lastKeyDownNode = e.target;
                                if (!("openDropDown" in this && obj == this._buttonNode)) {
                                    e.preventDefault();
                                }
                            }
                        }), dc(obj, "onkeyup", this, function (e) {
                            if ((e.keyCode == d.keys.ENTER || e.keyCode == d.keys.SPACE) && e.target == dijit._lastKeyDownNode && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
                                dijit._lastKeyDownNode = null;
                                return m(e);
                            }
                        }));
                    }
                }
                return _153;
            },
            _onShow: function () {
                this.onShow();
            },
            onShow: function () {},
            onHide: function () {},
            onClose: function () {
                return true;
            }
        });
    })();
}
if (!dojo._hasResource["dojo.string"]) {
    dojo._hasResource["dojo.string"] = true;
    dojo.provide("dojo.string");
    dojo.getObject("string", true, dojo);
    dojo.string.rep = function (str, num) {
        if (num <= 0 || !str) {
            return "";
        }
        var buf = [];
        for (;;) {
            if (num & 1) {
                buf.push(str);
            }
            if (!(num >>= 1)) {
                break;
            }
            str += str;
        }
        return buf.join("");
    };
    dojo.string.pad = function (text, size, ch, end) {
        if (!ch) {
            ch = "0";
        }
        var out = String(text),
            pad = dojo.string.rep(ch, Math.ceil((size - out.length) / ch.length));
        return end ? out + pad : pad + out;
    };
    dojo.string.substitute = function (_154, map, _155, _156) {
        _156 = _156 || dojo.global;
        _155 = _155 ? dojo.hitch(_156, _155) : function (v) {
            return v;
        };
        return _154.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function (_157, key, _158) {
            var _159 = dojo.getObject(key, false, map);
            if (_158) {
                _159 = dojo.getObject(_158, false, _156).call(_156, _159, key);
            }
            return _155(_159, key).toString();
        });
    };
    dojo.string.trim = String.prototype.trim ? dojo.trim : function (str) {
        str = str.replace(/^\s+/, "");
        for (var i = str.length - 1; i >= 0; i--) {
            if (/\S/.test(str.charAt(i))) {
                str = str.substring(0, i + 1);
                break;
            }
        }
        return str;
    };
}
if (!dojo._hasResource["dojo.date.stamp"]) {
    dojo._hasResource["dojo.date.stamp"] = true;
    dojo.provide("dojo.date.stamp");
    dojo.getObject("date.stamp", true, dojo);
    dojo.date.stamp.fromISOString = function (_15a, _15b) {
        if (!dojo.date.stamp._isoRegExp) {
            dojo.date.stamp._isoRegExp = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
        }
        var _15c = dojo.date.stamp._isoRegExp.exec(_15a),
            _15d = null;
        if (_15c) {
            _15c.shift();
            if (_15c[1]) {
                _15c[1]--;
            }
            if (_15c[6]) {
                _15c[6] *= 1000;
            }
            if (_15b) {
                _15b = new Date(_15b);
                dojo.forEach(dojo.map(["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds"], function (prop) {
                    return _15b["get" + prop]();
                }), function (_15e, _15f) {
                    _15c[_15f] = _15c[_15f] || _15e;
                });
            }
            _15d = new Date(_15c[0] || 1970, _15c[1] || 0, _15c[2] || 1, _15c[3] || 0, _15c[4] || 0, _15c[5] || 0, _15c[6] || 0);
            if (_15c[0] < 100) {
                _15d.setFullYear(_15c[0] || 1970);
            }
            var _160 = 0,
                _161 = _15c[7] && _15c[7].charAt(0);
            if (_161 != "Z") {
                _160 = ((_15c[8] || 0) * 60) + (Number(_15c[9]) || 0);
                if (_161 != "-") {
                    _160 *= -1;
                }
            }
            if (_161) {
                _160 -= _15d.getTimezoneOffset();
            }
            if (_160) {
                _15d.setTime(_15d.getTime() + _160 * 60000);
            }
        }
        return _15d;
    };
    dojo.date.stamp.toISOString = function (_162, _163) {
        var _164 = function (n) {
            return (n < 10) ? "0" + n : n;
        };
        _163 = _163 || {};
        var _165 = [],
            _166 = _163.zulu ? "getUTC" : "get",
            date = "";
        if (_163.selector != "time") {
            var year = _162[_166 + "FullYear"]();
            date = ["0000".substr((year + "").length) + year, _164(_162[_166 + "Month"]() + 1), _164(_162[_166 + "Date"]())].join("-");
        }
        _165.push(date);
        if (_163.selector != "date") {
            var time = [_164(_162[_166 + "Hours"]()), _164(_162[_166 + "Minutes"]()), _164(_162[_166 + "Seconds"]())].join(":");
            var _167 = _162[_166 + "Milliseconds"]();
            if (_163.milliseconds) {
                time += "." + (_167 < 100 ? "0" : "") + _164(_167);
            }
            if (_163.zulu) {
                time += "Z";
            } else {
                if (_163.selector != "time") {
                    var _168 = _162.getTimezoneOffset();
                    var _169 = Math.abs(_168);
                    time += (_168 > 0 ? "-" : "+") + _164(Math.floor(_169 / 60)) + ":" + _164(_169 % 60);
                }
            }
            _165.push(time);
        }
        return _165.join("T");
    };
}
if (!dojo._hasResource["dojo.parser"]) {
    dojo._hasResource["dojo.parser"] = true;
    dojo.provide("dojo.parser");
    new Date("X");
    dojo.parser = new function () {
        var d = dojo;

        function _16a(_16b) {
            if (d.isString(_16b)) {
                return "string";
            }
            if (typeof _16b == "number") {
                return "number";
            }
            if (typeof _16b == "boolean") {
                return "boolean";
            }
            if (d.isFunction(_16b)) {
                return "function";
            }
            if (d.isArray(_16b)) {
                return "array";
            }
            if (_16b instanceof Date) {
                return "date";
            }
            if (_16b instanceof d._Url) {
                return "url";
            }
            return "object";
        };

        function _16c(_16d, type) {
            switch (type) {
                case "string":
                    return _16d;
                case "number":
                    return _16d.length ? Number(_16d) : NaN;
                case "boolean":
                    return typeof _16d == "boolean" ? _16d : !(_16d.toLowerCase() == "false");
                case "function":
                    if (d.isFunction(_16d)) {
                        _16d = _16d.toString();
                        _16d = d.trim(_16d.substring(_16d.indexOf("{") + 1, _16d.length - 1));
                    }
                    try {
                        if (_16d === "" || _16d.search(/[^\w\.]+/i) != -1) {
                            return new Function(_16d);
                        } else {
                            return d.getObject(_16d, false) || new Function(_16d);
                        }
                    } catch (e) {
                        return new Function();
                    }
                case "array":
                    return _16d ? _16d.split(/\s*,\s*/) : [];
                case "date":
                    switch (_16d) {
                        case "":
                            return new Date("");
                        case "now":
                            return new Date();
                        default:
                            return d.date.stamp.fromISOString(_16d);
                    }
                case "url":
                    return d.baseUrl + _16d;
                default:
                    return d.fromJson(_16d);
            }
        };
        var _16e = {}, _16f = {};
        d.connect(d, "extend", function () {
            _16f = {};
        });

        function _170(cls, _171) {
            for (var name in cls) {
                if (name.charAt(0) == "_") {
                    continue;
                }
                if (name in _16e) {
                    continue;
                }
                _171[name] = _16a(cls[name]);
            }
            return _171;
        };

        function _172(_173, _174) {
            var c = _16f[_173];
            if (!c) {
                var cls = d.getObject(_173),
                    _175 = null;
                if (!cls) {
                    return null;
                }
                if (!_174) {
                    _175 = _170(cls.prototype, {});
                }
                c = {
                    cls: cls,
                    params: _175
                };
            } else {
                if (!_174 && !c.params) {
                    c.params = _170(c.cls.prototype, {});
                }
            }
            return c;
        };
        this._functionFromScript = function (_176, _177) {
            var _178 = "";
            var _179 = "";
            var _17a = (_176.getAttribute(_177 + "args") || _176.getAttribute("args"));
            if (_17a) {
                d.forEach(_17a.split(/\s*,\s*/), function (part, idx) {
                    _178 += "var " + part + " = arguments[" + idx + "]; ";
                });
            }
            var _17b = _176.getAttribute("with");
            if (_17b && _17b.length) {
                d.forEach(_17b.split(/\s*,\s*/), function (part) {
                    _178 += "with(" + part + "){";
                    _179 += "}";
                });
            }
            return new Function(_178 + _176.innerHTML + _179);
        };
        this.instantiate = function (_17c, _17d, args) {
            var _17e = [],
                _17d = _17d || {};
            args = args || {};
            var _17f = (args.scope || d._scopeName) + "Type",
                _180 = "data-" + (args.scope || d._scopeName) + "-";
            d.forEach(_17c, function (obj) {
                if (!obj) {
                    return;
                }
                var node, type, _181, _182, _183, _184;
                if (obj.node) {
                    node = obj.node;
                    type = obj.type;
                    _184 = obj.fastpath;
                    _181 = obj.clsInfo || (type && _172(type, _184));
                    _182 = _181 && _181.cls;
                    _183 = obj.scripts;
                } else {
                    node = obj;
                    type = _17f in _17d ? _17d[_17f] : node.getAttribute(_17f);
                    _181 = type && _172(type);
                    _182 = _181 && _181.cls;
                    _183 = (_182 && (_182._noScript || _182.prototype._noScript) ? [] : d.query("> script[type^='dojo/']", node));
                }
                if (!_181) {
                    throw new Error("Could not load class '" + type);
                }
                var _185 = {};
                if (args.defaults) {
                    d._mixin(_185, args.defaults);
                }
                if (obj.inherited) {
                    d._mixin(_185, obj.inherited);
                }
                if (_184) {
                    var _186 = node.getAttribute(_180 + "props");
                    if (_186 && _186.length) {
                        try {
                            _186 = d.fromJson.call(args.propsThis, "{" + _186 + "}");
                            d._mixin(_185, _186);
                        } catch (e) {
                            throw new Error(e.toString() + " in data-dojo-props='" + _186 + "'");
                        }
                    }
                    var _187 = node.getAttribute(_180 + "attach-point");
                    if (_187) {
                        _185.dojoAttachPoint = _187;
                    }
                    var _188 = node.getAttribute(_180 + "attach-event");
                    if (_188) {
                        _185.dojoAttachEvent = _188;
                    }
                    dojo.mixin(_185, _17d);
                } else {
                    var _189 = node.attributes;
                    for (var name in _181.params) {
                        var item = name in _17d ? {
                            value: _17d[name],
                            specified: true
                        } : _189.getNamedItem(name);
                        if (!item || (!item.specified && (!dojo.isIE || name.toLowerCase() != "value"))) {
                            continue;
                        }
                        var _18a = item.value;
                        switch (name) {
                            case "class":
                                _18a = "className" in _17d ? _17d.className : node.className;
                                break;
                            case "style":
                                _18a = "style" in _17d ? _17d.style : (node.style && node.style.cssText);
                        }
                        var _18b = _181.params[name];
                        if (typeof _18a == "string") {
                            _185[name] = _16c(_18a, _18b);
                        } else {
                            _185[name] = _18a;
                        }
                    }
                }
                var _18c = [],
                    _18d = [];
                d.forEach(_183, function (_18e) {
                    node.removeChild(_18e);
                    var _18f = (_18e.getAttribute(_180 + "event") || _18e.getAttribute("event")),
                        type = _18e.getAttribute("type"),
                        nf = d.parser._functionFromScript(_18e, _180);
                    if (_18f) {
                        if (type == "dojo/connect") {
                            _18c.push({
                                event: _18f,
                                func: nf
                            });
                        } else {
                            _185[_18f] = nf;
                        }
                    } else {
                        _18d.push(nf);
                    }
                });
                var _190 = _182.markupFactory || _182.prototype && _182.prototype.markupFactory;
                var _191 = _190 ? _190(_185, node, _182) : new _182(_185, node);
                _17e.push(_191);
                var _192 = (node.getAttribute(_180 + "id") || node.getAttribute("jsId"));
                if (_192) {
                    d.setObject(_192, _191);
                }
                d.forEach(_18c, function (_193) {
                    d.connect(_191, _193.event, null, _193.func);
                });
                d.forEach(_18d, function (func) {
                    func.call(_191);
                });
            });
            if (!_17d._started) {
                d.forEach(_17e, function (_194) {
                    if (!args.noStart && _194 && dojo.isFunction(_194.startup) && !_194._started && (!_194.getParent || !_194.getParent())) {
                        _194.startup();
                    }
                });
            }
            return _17e;
        };
        this.parse = function (_195, args) {
            var root;
            if (!args && _195 && _195.rootNode) {
                args = _195;
                root = args.rootNode;
            } else {
                root = _195;
            }
            root = root ? dojo.byId(root) : dojo.body();
            args = args || {};
            var _196 = (args.scope || d._scopeName) + "Type",
                _197 = "data-" + (args.scope || d._scopeName) + "-";

            function scan(_198, list) {
                var _199 = dojo.clone(_198.inherited);
                dojo.forEach(["dir", "lang"], function (name) {
                    var val = _198.node.getAttribute(name);
                    if (val) {
                        _199[name] = val;
                    }
                });
                var _19a = _198.clsInfo && !_198.clsInfo.cls.prototype._noScript ? _198.scripts : null;
                var _19b = (!_198.clsInfo || !_198.clsInfo.cls.prototype.stopParser) || (args && args.template);
                for (var _19c = _198.node.firstChild; _19c; _19c = _19c.nextSibling) {
                    if (_19c.nodeType == 1) {
                        var type, _19d = _19b && _19c.getAttribute(_197 + "type");
                        if (_19d) {
                            type = _19d;
                        } else {
                            type = _19b && _19c.getAttribute(_196);
                        }
                        var _19e = _19d == type;
                        if (type) {
                            var _19f = {
                                "type": type,
                                fastpath: _19e,
                                clsInfo: _172(type, _19e),
                                node: _19c,
                                scripts: [],
                                inherited: _199
                            };
                            list.push(_19f);
                            scan(_19f, list);
                        } else {
                            if (_19a && _19c.nodeName.toLowerCase() == "script") {
                                type = _19c.getAttribute("type");
                                if (type && /^dojo\/\w/i.test(type)) {
                                    _19a.push(_19c);
                                }
                            } else {
                                if (_19b) {
                                    scan({
                                        node: _19c,
                                        inherited: _199
                                    }, list);
                                }
                            }
                        }
                    }
                }
            };
            var _1a0 = {};
            if (args && args.inherited) {
                for (var key in args.inherited) {
                    if (args.inherited[key]) {
                        _1a0[key] = args.inherited[key];
                    }
                }
            }
            var list = [];
            scan({
                node: root,
                inherited: _1a0
            }, list);
            var _1a1 = args && args.template ? {
                template: true
            } : null;
            return this.instantiate(list, _1a1, args);
        };
    }();
    (function () {
        var _1a2 = function () {
            if (dojo.config.parseOnLoad) {
                dojo.parser.parse();
            }
        };
        if (dojo.getObject("dijit.wai.onload") === dojo._loaders[0]) {
            dojo._loaders.splice(1, 0, _1a2);
        } else {
            dojo._loaders.unshift(_1a2);
        }
    })();
}
if (!dojo._hasResource["dojo.cache"]) {
    dojo._hasResource["dojo.cache"] = true;
    dojo.provide("dojo.cache");
    var cache = {};
    dojo.cache = function (_1a3, url, _1a4) {
        if (typeof _1a3 == "string") {
            var _1a5 = dojo.moduleUrl(_1a3, url);
        } else {
            _1a5 = _1a3;
            _1a4 = url;
        }
        var key = _1a5.toString();
        var val = _1a4;
        if (_1a4 != undefined && !dojo.isString(_1a4)) {
            val = ("value" in _1a4 ? _1a4.value : undefined);
        }
        var _1a6 = _1a4 && _1a4.sanitize ? true : false;
        if (typeof val == "string") {
            val = cache[key] = _1a6 ? dojo.cache._sanitize(val) : val;
        } else {
            if (val === null) {
                delete cache[key];
            } else {
                if (!(key in cache)) {
                    val = dojo._getText(key);
                    cache[key] = _1a6 ? dojo.cache._sanitize(val) : val;
                }
                val = cache[key];
            }
        }
        return val;
    };
    dojo.cache._sanitize = function (val) {
        if (val) {
            val = val.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, "");
            var _1a7 = val.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
            if (_1a7) {
                val = _1a7[1];
            }
        } else {
            val = "";
        }
        return val;
    };
}
if (!dojo._hasResource["dijit._Templated"]) {
    dojo._hasResource["dijit._Templated"] = true;
    dojo.provide("dijit._Templated");
    dojo.declare("dijit._Templated", null, {
        templateString: null,
        templatePath: null,
        widgetsInTemplate: false,
        _skipNodeCache: false,
        _earlyTemplatedStartup: false,
        constructor: function () {
            this._attachPoints = [];
            this._attachEvents = [];
        },
        _stringRepl: function (tmpl) {
            var _1a8 = this.declaredClass,
                _1a9 = this;
            return dojo.string.substitute(tmpl, this, function (_1aa, key) {
                if (key.charAt(0) == "!") {
                    _1aa = dojo.getObject(key.substr(1), false, _1a9);
                }
                if (typeof _1aa == "undefined") {
                    throw new Error(_1a8 + " template:" + key);
                }
                if (_1aa == null) {
                    return "";
                }
                return key.charAt(0) == "!" ? _1aa : _1aa.toString().replace(/"/g, "&quot;");
            }, this);
        },
        buildRendering: function () {
            var _1ab = dijit._Templated.getCachedTemplate(this.templatePath, this.templateString, this._skipNodeCache);
            var node;
            if (dojo.isString(_1ab)) {
                node = dojo._toDom(this._stringRepl(_1ab));
                if (node.nodeType != 1) {
                    throw new Error("Invalid template: " + _1ab);
                }
            } else {
                node = _1ab.cloneNode(true);
            }
            this.domNode = node;
            this.inherited(arguments);
            this._attachTemplateNodes(node);
            if (this.widgetsInTemplate) {
                var cw = (this._startupWidgets = dojo.parser.parse(node, {
                    noStart: !this._earlyTemplatedStartup,
                    template: true,
                    inherited: {
                        dir: this.dir,
                        lang: this.lang
                    },
                    propsThis: this,
                    scope: "dojo"
                }));
                this._supportingWidgets = dijit.findWidgets(node);
                this._attachTemplateNodes(cw, function (n, p) {
                    return n[p];
                });
            }
            this._fillContent(this.srcNodeRef);
        },
        _fillContent: function (_1ac) {
            var dest = this.containerNode;
            if (_1ac && dest) {
                while (_1ac.hasChildNodes()) {
                    dest.appendChild(_1ac.firstChild);
                }
            }
        },
        _attachTemplateNodes: function (_1ad, _1ae) {
            _1ae = _1ae || function (n, p) {
                return n.getAttribute(p);
            };
            var _1af = dojo.isArray(_1ad) ? _1ad : (_1ad.all || _1ad.getElementsByTagName("*"));
            var x = dojo.isArray(_1ad) ? 0 : -1;
            for (; x < _1af.length; x++) {
                var _1b0 = (x == -1) ? _1ad : _1af[x];
                if (this.widgetsInTemplate && (_1ae(_1b0, "dojoType") || _1ae(_1b0, "data-dojo-type"))) {
                    continue;
                }
                var _1b1 = _1ae(_1b0, "dojoAttachPoint") || _1ae(_1b0, "data-dojo-attach-point");
                if (_1b1) {
                    var _1b2, _1b3 = _1b1.split(/\s*,\s*/);
                    while ((_1b2 = _1b3.shift())) {
                        if (dojo.isArray(this[_1b2])) {
                            this[_1b2].push(_1b0);
                        } else {
                            this[_1b2] = _1b0;
                        }
                        this._attachPoints.push(_1b2);
                    }
                }
                var _1b4 = _1ae(_1b0, "dojoAttachEvent") || _1ae(_1b0, "data-dojo-attach-event");
                if (_1b4) {
                    var _1b5, _1b6 = _1b4.split(/\s*,\s*/);
                    var trim = dojo.trim;
                    while ((_1b5 = _1b6.shift())) {
                        if (_1b5) {
                            var _1b7 = null;
                            if (_1b5.indexOf(":") != -1) {
                                var _1b8 = _1b5.split(":");
                                _1b5 = trim(_1b8[0]);
                                _1b7 = trim(_1b8[1]);
                            } else {
                                _1b5 = trim(_1b5);
                            }
                            if (!_1b7) {
                                _1b7 = _1b5;
                            }
                            this._attachEvents.push(this.connect(_1b0, _1b5, _1b7));
                        }
                    }
                }
                var role = _1ae(_1b0, "waiRole");
                if (role) {
                    dijit.setWaiRole(_1b0, role);
                }
                var _1b9 = _1ae(_1b0, "waiState");
                if (_1b9) {
                    dojo.forEach(_1b9.split(/\s*,\s*/), function (_1ba) {
                        if (_1ba.indexOf("-") != -1) {
                            var pair = _1ba.split("-");
                            dijit.setWaiState(_1b0, pair[0], pair[1]);
                        }
                    });
                }
            }
        },
        startup: function () {
            dojo.forEach(this._startupWidgets, function (w) {
                if (w && !w._started && w.startup) {
                    w.startup();
                }
            });
            this.inherited(arguments);
        },
        destroyRendering: function () {
            dojo.forEach(this._attachPoints, function (_1bb) {
                delete this[_1bb];
            }, this);
            this._attachPoints = [];
            dojo.forEach(this._attachEvents, this.disconnect, this);
            this._attachEvents = [];
            this.inherited(arguments);
        }
    });
    dijit._Templated._templateCache = {};
    dijit._Templated.getCachedTemplate = function (_1bc, _1bd, _1be) {
        var _1bf = dijit._Templated._templateCache;
        var key = _1bd || _1bc;
        var _1c0 = _1bf[key];
        if (_1c0) {
            try {
                if (!_1c0.ownerDocument || _1c0.ownerDocument == dojo.doc) {
                    return _1c0;
                }
            } catch (e) {}
            dojo.destroy(_1c0);
        }
        if (!_1bd) {
            _1bd = dojo.cache(_1bc, {
                sanitize: true
            });
        }
        _1bd = dojo.string.trim(_1bd);
        if (_1be || _1bd.match(/\$\{([^\}]+)\}/g)) {
            return (_1bf[key] = _1bd);
        } else {
            var node = dojo._toDom(_1bd);
            if (node.nodeType != 1) {
                throw new Error("Invalid template: " + _1bd);
            }
            return (_1bf[key] = node);
        }
    };
    if (dojo.isIE) {
        dojo.addOnWindowUnload(function () {
            var _1c1 = dijit._Templated._templateCache;
            for (var key in _1c1) {
                var _1c2 = _1c1[key];
                if (typeof _1c2 == "object") {
                    dojo.destroy(_1c2);
                }
                delete _1c1[key];
            }
        });
    }
    dojo.extend(dijit._Widget, {
        dojoAttachEvent: "",
        dojoAttachPoint: "",
        waiRole: "",
        waiState: ""
    });
}
if (!dojo._hasResource["dijit._Container"]) {
    dojo._hasResource["dijit._Container"] = true;
    dojo.provide("dijit._Container");
    dojo.declare("dijit._Container", null, {
        isContainer: true,
        buildRendering: function () {
            this.inherited(arguments);
            if (!this.containerNode) {
                this.containerNode = this.domNode;
            }
        },
        addChild: function (_1c3, _1c4) {
            var _1c5 = this.containerNode;
            if (_1c4 && typeof _1c4 == "number") {
                var _1c6 = this.getChildren();
                if (_1c6 && _1c6.length >= _1c4) {
                    _1c5 = _1c6[_1c4 - 1].domNode;
                    _1c4 = "after";
                }
            }
            dojo.place(_1c3.domNode, _1c5, _1c4);
            if (this._started && !_1c3._started) {
                _1c3.startup();
            }
        },
        removeChild: function (_1c7) {
            if (typeof _1c7 == "number") {
                _1c7 = this.getChildren()[_1c7];
            }
            if (_1c7) {
                var node = _1c7.domNode;
                if (node && node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            }
        },
        hasChildren: function () {
            return this.getChildren().length > 0;
        },
        destroyDescendants: function (_1c8) {
            dojo.forEach(this.getChildren(), function (_1c9) {
                _1c9.destroyRecursive(_1c8);
            });
        },
        _getSiblingOfChild: function (_1ca, dir) {
            var node = _1ca.domNode,
                _1cb = (dir > 0 ? "nextSibling" : "previousSibling");
            do {
                node = node[_1cb];
            } while (node && (node.nodeType != 1 || !dijit.byNode(node)));
            return node && dijit.byNode(node);
        },
        getIndexOfChild: function (_1cc) {
            return dojo.indexOf(this.getChildren(), _1cc);
        },
        startup: function () {
            if (this._started) {
                return;
            }
            dojo.forEach(this.getChildren(), function (_1cd) {
                _1cd.startup();
            });
            this.inherited(arguments);
        }
    });
}
if (!dojo._hasResource["dijit._Contained"]) {
    dojo._hasResource["dijit._Contained"] = true;
    dojo.provide("dijit._Contained");
    dojo.declare("dijit._Contained", null, {
        getParent: function () {
            var _1ce = dijit.getEnclosingWidget(this.domNode.parentNode);
            return _1ce && _1ce.isContainer ? _1ce : null;
        },
        _getSibling: function (_1cf) {
            var node = this.domNode;
            do {
                node = node[_1cf + "Sibling"];
            } while (node && node.nodeType != 1);
            return node && dijit.byNode(node);
        },
        getPreviousSibling: function () {
            return this._getSibling("previous");
        },
        getNextSibling: function () {
            return this._getSibling("next");
        },
        getIndexInParent: function () {
            var p = this.getParent();
            if (!p || !p.getIndexOfChild) {
                return -1;
            }
            return p.getIndexOfChild(this);
        }
    });
}
if (!dojo._hasResource["dojo.NodeList-traverse"]) {
    dojo._hasResource["dojo.NodeList-traverse"] = true;
    dojo.provide("dojo.NodeList-traverse");
    dojo.extend(dojo.NodeList, {
        _buildArrayFromCallback: function (_1d0) {
            var ary = [];
            for (var i = 0; i < this.length; i++) {
                var _1d1 = _1d0.call(this[i], this[i], ary);
                if (_1d1) {
                    ary = ary.concat(_1d1);
                }
            }
            return ary;
        },
        _getUniqueAsNodeList: function (_1d2) {
            var ary = [];
            for (var i = 0, node; node = _1d2[i]; i++) {
                if (node.nodeType == 1 && dojo.indexOf(ary, node) == -1) {
                    ary.push(node);
                }
            }
            return this._wrap(ary, null, this._NodeListCtor);
        },
        _getUniqueNodeListWithParent: function (_1d3, _1d4) {
            var ary = this._getUniqueAsNodeList(_1d3);
            ary = (_1d4 ? dojo._filterQueryResult(ary, _1d4) : ary);
            return ary._stash(this);
        },
        _getRelatedUniqueNodes: function (_1d5, _1d6) {
            return this._getUniqueNodeListWithParent(this._buildArrayFromCallback(_1d6), _1d5);
        },
        children: function (_1d7) {
            return this._getRelatedUniqueNodes(_1d7, function (node, ary) {
                return dojo._toArray(node.childNodes);
            });
        },
        closest: function (_1d8, root) {
            return this._getRelatedUniqueNodes(null, function (node, ary) {
                do {
                    if (dojo._filterQueryResult([node], _1d8, root).length) {
                        return node;
                    }
                } while (node != root && (node = node.parentNode) && node.nodeType == 1);
                return null;
            });
        },
        parent: function (_1d9) {
            return this._getRelatedUniqueNodes(_1d9, function (node, ary) {
                return node.parentNode;
            });
        },
        parents: function (_1da) {
            return this._getRelatedUniqueNodes(_1da, function (node, ary) {
                var pary = [];
                while (node.parentNode) {
                    node = node.parentNode;
                    pary.push(node);
                }
                return pary;
            });
        },
        siblings: function (_1db) {
            return this._getRelatedUniqueNodes(_1db, function (node, ary) {
                var pary = [];
                var _1dc = (node.parentNode && node.parentNode.childNodes);
                for (var i = 0; i < _1dc.length; i++) {
                    if (_1dc[i] != node) {
                        pary.push(_1dc[i]);
                    }
                }
                return pary;
            });
        },
        next: function (_1dd) {
            return this._getRelatedUniqueNodes(_1dd, function (node, ary) {
                var next = node.nextSibling;
                while (next && next.nodeType != 1) {
                    next = next.nextSibling;
                }
                return next;
            });
        },
        nextAll: function (_1de) {
            return this._getRelatedUniqueNodes(_1de, function (node, ary) {
                var pary = [];
                var next = node;
                while ((next = next.nextSibling)) {
                    if (next.nodeType == 1) {
                        pary.push(next);
                    }
                }
                return pary;
            });
        },
        prev: function (_1df) {
            return this._getRelatedUniqueNodes(_1df, function (node, ary) {
                var prev = node.previousSibling;
                while (prev && prev.nodeType != 1) {
                    prev = prev.previousSibling;
                }
                return prev;
            });
        },
        prevAll: function (_1e0) {
            return this._getRelatedUniqueNodes(_1e0, function (node, ary) {
                var pary = [];
                var prev = node;
                while ((prev = prev.previousSibling)) {
                    if (prev.nodeType == 1) {
                        pary.push(prev);
                    }
                }
                return pary;
            });
        },
        andSelf: function () {
            return this.concat(this._parent);
        },
        first: function () {
            return this._wrap(((this[0] && [this[0]]) || []), this);
        },
        last: function () {
            return this._wrap((this.length ? [this[this.length - 1]] : []), this);
        },
        even: function () {
            return this.filter(function (item, i) {
                return i % 2 != 0;
            });
        },
        odd: function () {
            return this.filter(function (item, i) {
                return i % 2 == 0;
            });
        }
    });
}
if (!dojo._hasResource["dojo.NodeList-manipulate"]) {
    dojo._hasResource["dojo.NodeList-manipulate"] = true;
    dojo.provide("dojo.NodeList-manipulate");
    (function () {
        function _1e1(node) {
            var text = "",
                ch = node.childNodes;
            for (var i = 0, n; n = ch[i]; i++) {
                if (n.nodeType != 8) {
                    if (n.nodeType == 1) {
                        text += _1e1(n);
                    } else {
                        text += n.nodeValue;
                    }
                }
            }
            return text;
        };

        function _1e2(node) {
            while (node.childNodes[0] && node.childNodes[0].nodeType == 1) {
                node = node.childNodes[0];
            }
            return node;
        };

        function _1e3(html, _1e4) {
            if (typeof html == "string") {
                html = dojo._toDom(html, (_1e4 && _1e4.ownerDocument));
                if (html.nodeType == 11) {
                    html = html.childNodes[0];
                }
            } else {
                if (html.nodeType == 1 && html.parentNode) {
                    html = html.cloneNode(false);
                }
            }
            return html;
        };
        dojo.extend(dojo.NodeList, {
            _placeMultiple: function (_1e5, _1e6) {
                var nl2 = typeof _1e5 == "string" || _1e5.nodeType ? dojo.query(_1e5) : _1e5;
                var _1e7 = [];
                for (var i = 0; i < nl2.length; i++) {
                    var _1e8 = nl2[i];
                    var _1e9 = this.length;
                    for (var j = _1e9 - 1, item; item = this[j]; j--) {
                        if (i > 0) {
                            item = this._cloneNode(item);
                            _1e7.unshift(item);
                        }
                        if (j == _1e9 - 1) {
                            dojo.place(item, _1e8, _1e6);
                        } else {
                            _1e8.parentNode.insertBefore(item, _1e8);
                        }
                        _1e8 = item;
                    }
                }
                if (_1e7.length) {
                    _1e7.unshift(0);
                    _1e7.unshift(this.length - 1);
                    Array.prototype.splice.apply(this, _1e7);
                }
                return this;
            },
            innerHTML: function (_1ea) {
                if (arguments.length) {
                    return this.addContent(_1ea, "only");
                } else {
                    return this[0].innerHTML;
                }
            },
            text: function (_1eb) {
                if (arguments.length) {
                    for (var i = 0, node; node = this[i]; i++) {
                        if (node.nodeType == 1) {
                            dojo.empty(node);
                            node.appendChild(node.ownerDocument.createTextNode(_1eb));
                        }
                    }
                    return this;
                } else {
                    var _1ec = "";
                    for (i = 0; node = this[i]; i++) {
                        _1ec += _1e1(node);
                    }
                    return _1ec;
                }
            },
            val: function (_1ed) {
                if (arguments.length) {
                    var _1ee = dojo.isArray(_1ed);
                    for (var _1ef = 0, node; node = this[_1ef]; _1ef++) {
                        var name = node.nodeName.toUpperCase();
                        var type = node.type;
                        var _1f0 = _1ee ? _1ed[_1ef] : _1ed;
                        if (name == "SELECT") {
                            var opts = node.options;
                            for (var i = 0; i < opts.length; i++) {
                                var opt = opts[i];
                                if (node.multiple) {
                                    opt.selected = (dojo.indexOf(_1ed, opt.value) != -1);
                                } else {
                                    opt.selected = (opt.value == _1f0);
                                }
                            }
                        } else {
                            if (type == "checkbox" || type == "radio") {
                                node.checked = (node.value == _1f0);
                            } else {
                                node.value = _1f0;
                            }
                        }
                    }
                    return this;
                } else {
                    node = this[0];
                    if (!node || node.nodeType != 1) {
                        return undefined;
                    }
                    _1ed = node.value || "";
                    if (node.nodeName.toUpperCase() == "SELECT" && node.multiple) {
                        _1ed = [];
                        opts = node.options;
                        for (i = 0; i < opts.length; i++) {
                            opt = opts[i];
                            if (opt.selected) {
                                _1ed.push(opt.value);
                            }
                        }
                        if (!_1ed.length) {
                            _1ed = null;
                        }
                    }
                    return _1ed;
                }
            },
            append: function (_1f1) {
                return this.addContent(_1f1, "last");
            },
            appendTo: function (_1f2) {
                return this._placeMultiple(_1f2, "last");
            },
            prepend: function (_1f3) {
                return this.addContent(_1f3, "first");
            },
            prependTo: function (_1f4) {
                return this._placeMultiple(_1f4, "first");
            },
            after: function (_1f5) {
                return this.addContent(_1f5, "after");
            },
            insertAfter: function (_1f6) {
                return this._placeMultiple(_1f6, "after");
            },
            before: function (_1f7) {
                return this.addContent(_1f7, "before");
            },
            insertBefore: function (_1f8) {
                return this._placeMultiple(_1f8, "before");
            },
            remove: dojo.NodeList.prototype.orphan,
            wrap: function (html) {
                if (this[0]) {
                    html = _1e3(html, this[0]);
                    for (var i = 0, node; node = this[i]; i++) {
                        var _1f9 = this._cloneNode(html);
                        if (node.parentNode) {
                            node.parentNode.replaceChild(_1f9, node);
                        }
                        var _1fa = _1e2(_1f9);
                        _1fa.appendChild(node);
                    }
                }
                return this;
            },
            wrapAll: function (html) {
                if (this[0]) {
                    html = _1e3(html, this[0]);
                    this[0].parentNode.replaceChild(html, this[0]);
                    var _1fb = _1e2(html);
                    for (var i = 0, node; node = this[i]; i++) {
                        _1fb.appendChild(node);
                    }
                }
                return this;
            },
            wrapInner: function (html) {
                if (this[0]) {
                    html = _1e3(html, this[0]);
                    for (var i = 0; i < this.length; i++) {
                        var _1fc = this._cloneNode(html);
                        this._wrap(dojo._toArray(this[i].childNodes), null, this._NodeListCtor).wrapAll(_1fc);
                    }
                }
                return this;
            },
            replaceWith: function (_1fd) {
                _1fd = this._normalize(_1fd, this[0]);
                for (var i = 0, node; node = this[i]; i++) {
                    this._place(_1fd, node, "before", i > 0);
                    node.parentNode.removeChild(node);
                }
                return this;
            },
            replaceAll: function (_1fe) {
                var nl = dojo.query(_1fe);
                var _1ff = this._normalize(this, this[0]);
                for (var i = 0, node; node = nl[i]; i++) {
                    this._place(_1ff, node, "before", i > 0);
                    node.parentNode.removeChild(node);
                }
                return this;
            },
            clone: function () {
                var ary = [];
                for (var i = 0; i < this.length; i++) {
                    ary.push(this._cloneNode(this[i]));
                }
                return this._wrap(ary, this, this._NodeListCtor);
            }
        });
        if (!dojo.NodeList.prototype.html) {
            dojo.NodeList.prototype.html = dojo.NodeList.prototype.innerHTML;
        }
    })();
}
if (!dojo._hasResource["ibmweb.string"]) {
    dojo._hasResource["ibmweb.string"] = true;
    dojo.provide("ibmweb.string");
    ibmweb.string.normalizeSpace = function (str) {
        return str.replace(/\s+/g, " ");
    };
    String.prototype.normalizeSpace = function () {
        return ibmweb.string.normalizeSpace(this);
    };
    ibmweb.string.trim = function (str) {
        return str.replace(/^\s+/, "").replace(/\s+$/, "");
    };
    String.prototype.trim = function () {
        return ibmweb.string.trim(this);
    };
    ibmweb.string.htmlspecialchars = function (str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;");
    };
    String.prototype.htmlspecialchars = function () {
        return ibmweb.string.htmlspecialchars(this);
    };
    ibmweb.string.StringBuffer = function () {
        this.buffer = [];
    };
    ibmweb.string.StringBuffer.prototype.append = function append(_200) {
        this.buffer.push(_200);
        return this;
    };
    ibmweb.string.StringBuffer.prototype.toString = function toString(_201) {
        if (!this.buffer) {
            return "";
        }
        _201 = _201 || "";
        return this.buffer.join(_201);
    };
}
if (!dojo._hasResource["ibmweb.util"]) {
    dojo._hasResource["ibmweb.util"] = true;
    dojo.provide("ibmweb.util");
    ibmweb.util.__idcount = 0;
    ibmweb.util.generateId = function () {
        var nid;
        do {
            ibmweb.util.__idcount++;
            nid = "gi-" + ibmweb.util.__idcount;
        } while (document.getElementById(nid) != null);
        return nid;
    };
    ibmweb.util.getUrl = function () {
        var url = dojo.query("link[rel=canonical]").attr("href");
        if (url.length != 0) {
            return url[0];
        }
        url = location.href;
        if (url.indexOf("?") != -1) {
            var _202 = url.substr(0, url.indexOf("?"));
            var _203 = url.substr(url.indexOf("?") + 1).split("&");
            var _204 = /^(cm_re|ca|me|met|re|lnk)=/;
            var _205 = [];
            for (var i = 0, j = _203.length; i < j; i++) {
                if (!_204.test(_203[i])) {
                    _205.push(_203[i]);
                }
            }
            if (_205.length > 0) {
                url = _202 + "?" + _205.join("&");
            } else {
                url = _202;
            }
        }
        return url;
    };
    ibmweb.util.statsHelper = function (e) {
        if (ibmweb.config.eluminate.enabled) {
            if (!e.ibmEvLinkTitle && !e.ibmEvLinktitle) {
                var _206 = dojo.query("h1:first");
                if (_206.length > 0 && _206[0].innerHTML) {
                    dojo.mixin(e, {
                        "ibmEvLinkTitle": _206[0].innerHTML
                    });
                }
            }
            var _207 = e.ibmEV + "-_-" + e.ibmEvAction;
            _207 += "-_-";
            if (e.ibmEvName) {
                _207 += e.ibmEvName;
            }
            _207 += "-_-";
            if (e.ibmEvGroup) {
                _207 += e.ibmEvGroup;
            }
            _207 += "-_-";
            if (e.ibmEvModule) {
                _207 += e.ibmEvModule;
            }
            _207 += "-_-";
            if (e.ibmEvSection) {
                _207 += e.ibmEvSection;
            }
            _207 += "-_-";
            if (e.ibmEvTarget) {
                _207 += e.ibmEvTarget;
            }
            _207 += "-_-";
            if (e.ibmEvLinkTitle || e.ibmEvLinktitle) {
                _207 += (e.ibmEvLinkTitle) ? e.ibmEvLinkTitle : e.ibmEvLinktitle;
            }
            _207 += "-_-";
            if (e.ibmEvFileSize) {
                _207 += e.ibmEvFileSize;
            }
            cmCreateElementTag(e.ibmEvAction, e.ibmEV, _207);
            ibmweb.eluminate.pause(500);
        }
        if (typeof (ibmStats) != "undefined" && typeof (ibmStats.event) != "undefined") {
            if (!e.ibmEvLinkTitle && !e.ibmEvLinktitle) {
                var _206 = dojo.query("h1:first");
                if (_206.length > 0 && _206[0].innerHTML) {
                    dojo.mixin(e, {
                        "ibmEvLinkTitle": _206[0].innerHTML
                    });
                }
            }
            ibmStats.event(e);
        }
    };
    ibmweb.util.preloadImages = function (_208, _209) {
        var _20a = dojo.create("div", {
            style: {
                position: "absolute",
                top: "-9999px",
                height: "1px",
                overflow: "hidden"
            }
        }, dojo.body());
        var _20b = 0;
        dojo.forEach(_208, function (url) {
            var img = dojo.create("img", {
                src: url
            }, _20a);
            dojo.connect(img, "onload", function () {
                _20b += 1;
                if (_20b == _208.length) {
                    if (typeof (_209) == "string") {
                        dojo.publish(_209);
                    } else {
                        _209();
                    }
                }
            });
        });
    };
    ibmweb.util.xhrGetHtml = function (_20c) {
        if (_20c.handleAs != "html") {
            return dojo.xhrGet(_20c);
        }
        _20c.handleAs = "text";
        var _20d = _20c.load;
        _20c.load = function (_20e) {
            _20e = _20e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
            var html = dojo.create("div", {
                innerHTML: _20e
            }, null);
            _20d(html);
        };
        return dojo.xhrGet(_20c);
    };
}
if (!dojo._hasResource["ibmweb.queue"]) {
    dojo._hasResource["ibmweb.queue"] = true;
    dojo.provide("ibmweb.queue");
    ibmweb.queue._queue = [];
    ibmweb.queue._timer = null;
    ibmweb.queue._count = 0;
    ibmweb.queue._lock = false;
    ibmweb.queue.push = function (_20f, _210) {
        ibmweb.queue._count++;
        ibmweb.queue._queue.push([ibmweb.queue._count, _20f, _210]);
        ibmweb.queue._work();
        return ibmweb.queue._count;
    };
    ibmweb.queue.unshift = function (_211, _212) {
        ibmweb.queue._count++;
        ibmweb.queue._queue.unshift([ibmweb.queue._count, _211, _212]);
        ibmweb.queue._work();
        return ibmweb.queue._count;
    };
    ibmweb.queue.remove = function (_213) {
        for (var i = 0, j = ibmweb.queue._queue.length; i < j; i++) {
            if (ibmweb.queue._queue[i][0] == _213) {
                ibmweb.queue._queue.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    ibmweb.queue._work = function () {
        if (ibmweb.queue._lock) {
            return;
        }
        if (ibmweb.queue._queue.length == 0) {
            return;
        }
        ibmweb.queue._lock = true;
        for (var i = 0, j = ibmweb.queue._queue.length; i < j; i++) {
            if (ibmweb.queue._queue[i][1]()) {
                ibmweb.queue._queue[i][2]();
                ibmweb.queue._queue.splice(i, 1);
                i--;
                j = ibmweb.queue._queue.length;
            }
        }
        ibmweb.queue._lock = false;
        ibmweb.queue._timer = setTimeout(ibmweb.queue._work, 50);
    };
    ibmweb.queue.waitForElement = function (_214, _215, _216) {
        if (dojo._postLoad && typeof (_216) != "undefined" && _216 == true) {
            _215();
            return;
        }
        var done = false;
        var eid = ibmweb.queue.push(function () {
            return document.getElementById(_214) != null;
        }, function () {
            if (done) {
                return;
            }
            done = true;
            _215();
        });
        if (typeof (_216) != "undefined" && _216 == true) {
            dojo.addOnLoad(function () {
                if (done) {
                    return;
                }
                done = true;
                ibmweb.queue.remove(eid);
                _215();
            });
        }
    };
}
if (!dojo._hasResource["ibmweb.meta"]) {
    dojo._hasResource["ibmweb.meta"] = true;
    dojo.provide("ibmweb.meta");
    ibmweb.meta.isLoaded = false;
    ibmweb.meta._init = function () {
        var tags = dojo.query("head meta").forEach(function (tag, _217, _218) {
            var name = tag.httpEquiv || tag.name;
            name = name.toLowerCase().replace(/[^\w]/g, "_");
            ibmweb.meta[name] = dojo.attr(tag, "content");
        });
        this.wwCase = "";
        this.cc = "";
        this.lc = "";
        if ( !! this.ibm_country) {
            this.cc = this.ibm_country.toLowerCase().trim();
            if (this.cc.indexOf(",") > -1) {
                this.cc = this.cc.substring(0, this.cc.indexOf(",")).trim();
            }
            if (this.cc == "gb") {
                this.cc = "uk";
            }
            if (this.cc == "zz") {
                this.cc = "us";
                this.wwCase = "Y";
            }
        }
        if ( !! this.dc_language) {
            this.lc = this.dc_language.substring(0, 2).toLowerCase();
        }
        var _219 = document.getElementsByTagName("html")[0].lang;
        if ( !! _219) {
            this.lc = this.lc || _219.substring(0, 2).toLowerCase();
            this.cc = this.cc || _219.substring(3, 5).toLowerCase();
        }
        this.lc = this.lc || "en";
        this.cc = this.cc || "us";
        this.cc = dojo.getObject("ibmweb.config.meta.cc") || this.cc;
        this.lc = dojo.getObject("ibmweb.config.meta.lc") || this.lc;
        this.cpi = this.cc + this.lc;
        if (this.cc === "us" && this.lc !== "en") {
            var _21a = {
                pt: "br",
                zh: "cn",
                de: "de",
                es: "es",
                fr: "fr",
                it: "it",
                ja: "jp",
                ko: "kr"
            };
            if (_21a[this.lc]) {
                this.cpi = _21a[this.lc] + this.lc;
            }
        }
        if (!this.dc_subject) {
            this.dc_subject = "ZZ999";
        }
        if (this.ibm_pageattributes == null) {
            this.ibm_pageattributes = "";
        }
        this.encoding = "utf8";
        this.encodingRaw = "UTF-8";
        if (this.content_type != null) {
            this.encodingRaw = this.content_type.substring(this.content_type.indexOf("=") + 1);
            this.encoding = this.encodingRaw.replace("-", "").replace("_", "").toLowerCase();
        }
        this.title = "";
        var tmp = dojo.query("title");
        if (tmp.length > 0) {
            this.title = tmp[0].innerHTML;
        }
        if (typeof (ibmwebConfigPortalFix) == "undefined") {
            if ( !! window.ibmwebConfig && !! window.ibmwebConfig.noDojoLocaleOverride) {
                ibmweb.config.noDojoLocaleOverride = window.ibmwebConfig.noDojoLocaleOverride;
            }
            if (!ibmweb.config.noDojoLocaleOverride) {
                var cc = (this.cc == "uk") ? "gb" : this.cc;
                dojo.locale = dojo.config.locale = this.lc + "-" + cc;
            }
            if (ibmweb.meta._preloads.length > 0 && dojo.locale != "en-us") {
                for (var i = 0, j = ibmweb.meta._preloads.length; i < j; i++) {
                    ibmweb.meta._preloadHack(ibmweb.meta._preloads[i], ibmweb.meta._preloadLocales);
                }
            }
        }
        ibmweb.meta.isLoaded = true;
    };
    if (typeof (ibmwebConfigPortalFix) == "undefined") {
        ibmweb.meta._preloads = [];
        if (dojo._hasResource["dojo.i18n"]) {
            ibmweb.meta._preloadHack = dojo.i18n._preloadLocalizations;
            dojo.i18n._preloadLocalizations = function (_21b, _21c) {
                ibmweb.meta._preloads.push(_21b);
                ibmweb.meta._preloadLocales = _21c;
                ibmweb.meta._preloadHack.apply(dojo.i18n, arguments);
            };
        }
    }
    ibmweb.queue.waitForElement("ibm-top", function () {
        ibmweb.meta._init();
    }, true);
}
if (!dojo._hasResource["ibmweb.info"]) {
    dojo._hasResource["ibmweb.info"] = true;
    dojo.provide("ibmweb.info");
    ibmweb.info.isLoaded = false;
    ibmweb.info._init = function () {
        this.v11 = this.v14 = this.v15 = this.v16 = this.v17 = this.www = this.w3 = false;
        dojo.query("link[rel^=\"style\"]").forEach(function (node) {
            if (node.href.indexOf("/common/v17/") != -1 || node.href.indexOf("/common/v17e/") != -1) {
                ibmweb.info.v17 = true;
            } else {
                if (node.href.indexOf("/common/v16/css/screen") != -1) {
                    ibmweb.info.v16 = true;
                } else {
                    if (node.href.indexOf("/common/v15/") != -1) {
                        ibmweb.info.v15 = true;
                    } else {
                        if (node.href.indexOf("/common/v14/") != -1) {
                            ibmweb.info.v14 = true;
                        } else {
                            if (node.href.indexOf("/data/css/v11/") != -1) {
                                ibmweb.info.v11 = true;
                            }
                        }
                    }
                }
            }
        });
        if (ibmweb.info.v16 && ibmweb.info.v17) {
            ibmweb.info.v17 = false;
        }
        if (ibmweb.config.config == "www") {
            this.www = true;
        }
        if (ibmweb.config.config == "w3") {
            this.w3 = true;
        }
        var m = "msie",
            ua = navigator.userAgent.toLowerCase(),
            v = 0;
        var mi = ua.indexOf(m);
        if (ua.indexOf("opera") == -1 && mi != -1) {
            this.isIE = true;
            v = parseFloat(ua.substring(mi + m.length).replace(/^[^0-9]+/, ""));
        } else {
            this.isIE = false;
        }
        this.ieVersion = isNaN(v) ? 0 : v;
        var ts = [];
        this.isGecko = ua.indexOf("gecko") != -1 && ua.indexOf("khtml") == -1;
        this.geckoVersion = 0;
        if (this.isGecko) {
            ts = ua.split("rv:");
            if (ts.length > 1) {
                v = parseFloat(ts[1]);
            }
            this.geckoVersion = isNaN(v) ? 0 : v;
        }
        var str = "opera";
        var si = ua.indexOf(str);
        if (si == -1) {
            this.isOldOpera = false;
        } else {
            var ver = parseFloat(ua.substring(si + str.length));
            if (ver < 9) {
                this.isOldOpera = true;
            } else {
                this.isOldOpera = false;
            }
            this.OperaVersion = parseFloat(ua.substring(ua.indexOf("version") + 8));
        }
        this.isLinux = (navigator.userAgent.indexOf("Linux") > -1);
        this.isDOM = ( !! document.createElement && !! document.createTextNode && !! document.getElementById && !! document.getElementsByTagName);
        this.iDevice = /iPad|iPhone|iPod/i.test(navigator.userAgent);
        ibmweb.info.isLoaded = true;
    };
    ibmweb.queue.waitForElement("ibm-top", function () {
        ibmweb.info._init();
    }, true);
}
if (!dojo._hasResource["ibmweb.ibmcodesample"]) {
    dojo._hasResource["ibmweb.ibmcodesample"] = true;
    dojo.provide("ibmweb.ibmcodesample");
    ibmweb.ibmcodesample._init = function () {
        var _21d = [
            [/<br[\s|\W]*\/?>/gi, "<br />"],
            [/<(?!br \/)/gi, "&lt;"],
            [/&lt;(\/?)(\w*)/gi, function () {
                var _21e = (arguments[1] == "") ? "" : "/",
                    _21f = arguments[2].toLowerCase(),
                    _220 = (_21f == "hr") ? "/" : "";
                return "&lt;" + _21e + _21f + _220;
            }],
            [/&(?!amp;|nbsp;|lt;|gt;)/gi, "&amp;"],
            [/(&lt;select[^&>]*(&gt;|>)|&lt;\/option[^&>]*(&gt;|>))/gi, function () {
                if (!dojo.isIE) {
                    return arguments[0];
                }
                return arguments[0] + "<br />";
            }],
            [/\n\s*|\r\s*/gi, "<br />"],
            [/<br \/><br \/>/gi, "<br />"]
        ];
        dojo.query(".ibm-alternate-code-sample pre, .ibm-alternate-code-sample code, .ibm-code-sample pre, .ibm-code-sample code").forEach(function (_221) {
            var _222 = _221.innerHTML;
            dojo.forEach(_21d, function (_223) {
                _222 = _222.replace(_223[0], _223[1]);
            });
            _221.innerHTML = _222;
        });
    };
    ibmweb.queue.waitForElement("ibm-top", function () {
        ibmweb.ibmcodesample._init();
    }, true);
}
if (!dojo._hasResource["ibmweb.callback"]) {
    dojo._hasResource["ibmweb.callback"] = true;
    dojo.provide("ibmweb.callback");
    ibmweb.callback.__callbacks = {};
    ibmweb.callback.register = function (_224, _225) {
        dojo.subscribe("/ibmweb/callback/" + _224, _225);
    };
    ibmweb.callback.call = function (_226, data) {
        dojo.publish("/ibmweb/callback/" + _226, data);
    };
    ibmweb.callback.createJSONPWrapper = function () {
        var _227 = null;
        if (typeof (arguments[0]) == "function") {
            _227 = dojo.partial.apply(dojo.partial, arguments);
        } else {
            _227 = dojo.hitch.apply(dojo.hitch, arguments);
        }
        var _228 = "__tcb" + Math.round(Math.random() * 100000);
        window[_228] = _227;
        dojo.connect(null, _228, function () {
            window[_228] = null;
        });
        return _228;
    };
}
if (!dojo._hasResource["dojo.io.script"]) {
    dojo._hasResource["dojo.io.script"] = true;
    dojo.provide("dojo.io.script");
    dojo.getObject("io", true, dojo);
    (function () {
        var _229 = dojo.isIE ? "onreadystatechange" : "load",
            _22a = /complete|loaded/;
        dojo.io.script = {
            get: function (args) {
                var dfd = this._makeScriptDeferred(args);
                var _22b = dfd.ioArgs;
                dojo._ioAddQueryToUrl(_22b);
                dojo._ioNotifyStart(dfd);
                if (this._canAttach(_22b)) {
                    var node = this.attach(_22b.id, _22b.url, args.frameDoc);
                    if (!_22b.jsonp && !_22b.args.checkString) {
                        var _22c = dojo.connect(node, _229, function (evt) {
                            if (evt.type == "load" || _22a.test(node.readyState)) {
                                dojo.disconnect(_22c);
                                _22b.scriptLoaded = evt;
                            }
                        });
                    }
                }
                dojo._ioWatch(dfd, this._validCheck, this._ioCheck, this._resHandle);
                return dfd;
            },
            attach: function (id, url, _22d) {
                var doc = (_22d || dojo.doc);
                var _22e = doc.createElement("script");
                _22e.type = "text/javascript";
                _22e.src = url;
                _22e.id = id;
                _22e.charset = "utf-8";
                return doc.getElementsByTagName("head")[0].appendChild(_22e);
            },
            remove: function (id, _22f) {
                dojo.destroy(dojo.byId(id, _22f));
                if (this["jsonp_" + id]) {
                    delete this["jsonp_" + id];
                }
            },
            _makeScriptDeferred: function (args) {
                var dfd = dojo._ioSetArgs(args, this._deferredCancel, this._deferredOk, this._deferredError);
                var _230 = dfd.ioArgs;
                _230.id = dojo._scopeName + "IoScript" + (this._counter++);
                _230.canDelete = false;
                _230.jsonp = args.callbackParamName || args.jsonp;
                if (_230.jsonp) {
                    _230.query = _230.query || "";
                    if (_230.query.length > 0) {
                        _230.query += "&";
                    }
                    _230.query += _230.jsonp + "=" + (args.frameDoc ? "parent." : "") + dojo._scopeName + ".io.script.jsonp_" + _230.id + "._jsonpCallback";
                    _230.frameDoc = args.frameDoc;
                    _230.canDelete = true;
                    dfd._jsonpCallback = this._jsonpCallback;
                    this["jsonp_" + _230.id] = dfd;
                }
                return dfd;
            },
            _deferredCancel: function (dfd) {
                dfd.canceled = true;
                if (dfd.ioArgs.canDelete) {
                    dojo.io.script._addDeadScript(dfd.ioArgs);
                }
            },
            _deferredOk: function (dfd) {
                var _231 = dfd.ioArgs;
                if (_231.canDelete) {
                    dojo.io.script._addDeadScript(_231);
                }
                return _231.json || _231.scriptLoaded || _231;
            },
            _deferredError: function (_232, dfd) {
                if (dfd.ioArgs.canDelete) {
                    if (_232.dojoType == "timeout") {
                        dojo.io.script.remove(dfd.ioArgs.id, dfd.ioArgs.frameDoc);
                    } else {
                        dojo.io.script._addDeadScript(dfd.ioArgs);
                    }
                }
                return _232;
            },
            _deadScripts: [],
            _counter: 1,
            _addDeadScript: function (_233) {
                dojo.io.script._deadScripts.push({
                    id: _233.id,
                    frameDoc: _233.frameDoc
                });
                _233.frameDoc = null;
            },
            _validCheck: function (dfd) {
                var _234 = dojo.io.script;
                var _235 = _234._deadScripts;
                if (_235 && _235.length > 0) {
                    for (var i = 0; i < _235.length; i++) {
                        _234.remove(_235[i].id, _235[i].frameDoc);
                        _235[i].frameDoc = null;
                    }
                    dojo.io.script._deadScripts = [];
                }
                return true;
            },
            _ioCheck: function (dfd) {
                var _236 = dfd.ioArgs;
                if (_236.json || (_236.scriptLoaded && !_236.args.checkString)) {
                    return true;
                }
                var _237 = _236.args.checkString;
                if (_237 && eval("typeof(" + _237 + ") != 'undefined'")) {
                    return true;
                }
                return false;
            },
            _resHandle: function (dfd) {
                if (dojo.io.script._ioCheck(dfd)) {
                    dfd.callback(dfd);
                } else {
                    dfd.errback(new Error("inconceivable dojo.io.script._resHandle error"));
                }
            },
            _canAttach: function (_238) {
                return true;
            },
            _jsonpCallback: function (json) {
                this.ioArgs.json = json;
            }
        };
    })();
}
if (!dojo._hasResource["ibmweb.data"]) {
    dojo._hasResource["ibmweb.data"] = true;
    dojo.provide("ibmweb.data");
    ibmweb.data.settings = {
        "url": "//www.ibm.com/common/translations/{TOKEN}/{CC}/{LC}/{ENC}.js",
        "cc": null,
        "lc": null,
        "enc": null
    };
    ibmweb.data.require = function (_239, _23a, _23b) {
        if (!_239) {
            return;
        }
        if (!dojo.isArray(_239)) {
            _239 = [_239];
        }
        var _23c = true;
        for (var i = 0, j = _239.length; i < j; i++) {
            _23c = _23c && ibmweb.data.exists(_239[i]);
        }
        if (!_23c) {
            var _23d = dojo.mixin(_23d, ibmweb.data.settings, _23b);
            ibmweb.queue.push(function () {
                return ibmweb.meta.isLoaded;
            }, function () {
                var _23e = function (_23f) {
                    var url = _23d.url.replace("{CC}", _23d.cc ? _23d.cc : ibmweb.meta.cc).replace("{LC}", _23d.lc ? _23d.lc : ibmweb.meta.lc).replace("{TOKEN}", _23f).replace("{ENC}", _23d.enc ? _23d.enc : ibmweb.meta.encoding);
                    dojo.io.script.attach(null, url, null);
                };
                for (var i = 0, j = _239.length; i < j; i++) {
                    if (!ibmweb.data.exists(_239[i])) {
                        _23e(_239[i]);
                    }
                }
                ibmweb.queue.push(function () {
                    var _240 = true;
                    for (var i = 0, j = _239.length; i < j; i++) {
                        _240 = _240 && ibmweb.data.exists(_239[i]);
                    }
                    return _240;
                }, function () {
                    if (typeof (_23a) == "function") {
                        _23a(ibmweb.data);
                    }
                });
            });
        } else {
            if (typeof (_23a) == "function") {
                _23a(ibmweb.data);
            }
        }
    };
    ibmweb.data.provide = function (_241, _242) {
        ibmweb.data[_241] = _242;
    };
    ibmweb.data.exists = function (_243) {
        return !!ibmweb.data[_243];
    };
}
if (!dojo._hasResource["dojo.fx.Toggler"]) {
    dojo._hasResource["dojo.fx.Toggler"] = true;
    dojo.provide("dojo.fx.Toggler");
    dojo.declare("dojo.fx.Toggler", null, {
        node: null,
        showFunc: dojo.fadeIn,
        hideFunc: dojo.fadeOut,
        showDuration: 200,
        hideDuration: 200,
        constructor: function (args) {
            var _244 = this;
            dojo.mixin(_244, args);
            _244.node = args.node;
            _244._showArgs = dojo.mixin({}, args);
            _244._showArgs.node = _244.node;
            _244._showArgs.duration = _244.showDuration;
            _244.showAnim = _244.showFunc(_244._showArgs);
            _244._hideArgs = dojo.mixin({}, args);
            _244._hideArgs.node = _244.node;
            _244._hideArgs.duration = _244.hideDuration;
            _244.hideAnim = _244.hideFunc(_244._hideArgs);
            dojo.connect(_244.showAnim, "beforeBegin", dojo.hitch(_244.hideAnim, "stop", true));
            dojo.connect(_244.hideAnim, "beforeBegin", dojo.hitch(_244.showAnim, "stop", true));
        },
        show: function (_245) {
            return this.showAnim.play(_245 || 0);
        },
        hide: function (_246) {
            return this.hideAnim.play(_246 || 0);
        }
    });
}
if (!dojo._hasResource["dojo.fx"]) {
    dojo._hasResource["dojo.fx"] = true;
    dojo.provide("dojo.fx");
    (function () {
        var d = dojo,
            _247 = {
                _fire: function (evt, args) {
                    if (this[evt]) {
                        this[evt].apply(this, args || []);
                    }
                    return this;
                }
            };
        var _248 = function (_249) {
            this._index = -1;
            this._animations = _249 || [];
            this._current = this._onAnimateCtx = this._onEndCtx = null;
            this.duration = 0;
            d.forEach(this._animations, function (a) {
                this.duration += a.duration;
                if (a.delay) {
                    this.duration += a.delay;
                }
            }, this);
        };
        d.extend(_248, {
            _onAnimate: function () {
                this._fire("onAnimate", arguments);
            },
            _onEnd: function () {
                d.disconnect(this._onAnimateCtx);
                d.disconnect(this._onEndCtx);
                this._onAnimateCtx = this._onEndCtx = null;
                if (this._index + 1 == this._animations.length) {
                    this._fire("onEnd");
                } else {
                    this._current = this._animations[++this._index];
                    this._onAnimateCtx = d.connect(this._current, "onAnimate", this, "_onAnimate");
                    this._onEndCtx = d.connect(this._current, "onEnd", this, "_onEnd");
                    this._current.play(0, true);
                }
            },
            play: function (_24a, _24b) {
                if (!this._current) {
                    this._current = this._animations[this._index = 0];
                }
                if (!_24b && this._current.status() == "playing") {
                    return this;
                }
                var _24c = d.connect(this._current, "beforeBegin", this, function () {
                    this._fire("beforeBegin");
                }),
                    _24d = d.connect(this._current, "onBegin", this, function (arg) {
                        this._fire("onBegin", arguments);
                    }),
                    _24e = d.connect(this._current, "onPlay", this, function (arg) {
                        this._fire("onPlay", arguments);
                        d.disconnect(_24c);
                        d.disconnect(_24d);
                        d.disconnect(_24e);
                    });
                if (this._onAnimateCtx) {
                    d.disconnect(this._onAnimateCtx);
                }
                this._onAnimateCtx = d.connect(this._current, "onAnimate", this, "_onAnimate");
                if (this._onEndCtx) {
                    d.disconnect(this._onEndCtx);
                }
                this._onEndCtx = d.connect(this._current, "onEnd", this, "_onEnd");
                this._current.play.apply(this._current, arguments);
                return this;
            },
            pause: function () {
                if (this._current) {
                    var e = d.connect(this._current, "onPause", this, function (arg) {
                        this._fire("onPause", arguments);
                        d.disconnect(e);
                    });
                    this._current.pause();
                }
                return this;
            },
            gotoPercent: function (_24f, _250) {
                this.pause();
                var _251 = this.duration * _24f;
                this._current = null;
                d.some(this._animations, function (a) {
                    if (a.duration <= _251) {
                        this._current = a;
                        return true;
                    }
                    _251 -= a.duration;
                    return false;
                });
                if (this._current) {
                    this._current.gotoPercent(_251 / this._current.duration, _250);
                }
                return this;
            },
            stop: function (_252) {
                if (this._current) {
                    if (_252) {
                        for (; this._index + 1 < this._animations.length; ++this._index) {
                            this._animations[this._index].stop(true);
                        }
                        this._current = this._animations[this._index];
                    }
                    var e = d.connect(this._current, "onStop", this, function (arg) {
                        this._fire("onStop", arguments);
                        d.disconnect(e);
                    });
                    this._current.stop();
                }
                return this;
            },
            status: function () {
                return this._current ? this._current.status() : "stopped";
            },
            destroy: function () {
                if (this._onAnimateCtx) {
                    d.disconnect(this._onAnimateCtx);
                }
                if (this._onEndCtx) {
                    d.disconnect(this._onEndCtx);
                }
            }
        });
        d.extend(_248, _247);
        dojo.fx.chain = function (_253) {
            return new _248(_253);
        };
        var _254 = function (_255) {
            this._animations = _255 || [];
            this._connects = [];
            this._finished = 0;
            this.duration = 0;
            d.forEach(_255, function (a) {
                var _256 = a.duration;
                if (a.delay) {
                    _256 += a.delay;
                }
                if (this.duration < _256) {
                    this.duration = _256;
                }
                this._connects.push(d.connect(a, "onEnd", this, "_onEnd"));
            }, this);
            this._pseudoAnimation = new d.Animation({
                curve: [0, 1],
                duration: this.duration
            });
            var self = this;
            d.forEach(["beforeBegin", "onBegin", "onPlay", "onAnimate", "onPause", "onStop", "onEnd"], function (evt) {
                self._connects.push(d.connect(self._pseudoAnimation, evt, function () {
                    self._fire(evt, arguments);
                }));
            });
        };
        d.extend(_254, {
            _doAction: function (_257, args) {
                d.forEach(this._animations, function (a) {
                    a[_257].apply(a, args);
                });
                return this;
            },
            _onEnd: function () {
                if (++this._finished > this._animations.length) {
                    this._fire("onEnd");
                }
            },
            _call: function (_258, args) {
                var t = this._pseudoAnimation;
                t[_258].apply(t, args);
            },
            play: function (_259, _25a) {
                this._finished = 0;
                this._doAction("play", arguments);
                this._call("play", arguments);
                return this;
            },
            pause: function () {
                this._doAction("pause", arguments);
                this._call("pause", arguments);
                return this;
            },
            gotoPercent: function (_25b, _25c) {
                var ms = this.duration * _25b;
                d.forEach(this._animations, function (a) {
                    a.gotoPercent(a.duration < ms ? 1 : (ms / a.duration), _25c);
                });
                this._call("gotoPercent", arguments);
                return this;
            },
            stop: function (_25d) {
                this._doAction("stop", arguments);
                this._call("stop", arguments);
                return this;
            },
            status: function () {
                return this._pseudoAnimation.status();
            },
            destroy: function () {
                d.forEach(this._connects, dojo.disconnect);
            }
        });
        d.extend(_254, _247);
        dojo.fx.combine = function (_25e) {
            return new _254(_25e);
        };
        dojo.fx.wipeIn = function (args) {
            var node = args.node = d.byId(args.node),
                s = node.style,
                o;
            var anim = d.animateProperty(d.mixin({
                properties: {
                    height: {
                        start: function () {
                            o = s.overflow;
                            s.overflow = "hidden";
                            if (s.visibility == "hidden" || s.display == "none") {
                                s.height = "1px";
                                s.display = "";
                                s.visibility = "";
                                return 1;
                            } else {
                                var _25f = d.style(node, "height");
                                return Math.max(_25f, 1);
                            }
                        },
                        end: function () {
                            return node.scrollHeight;
                        }
                    }
                }
            }, args));
            d.connect(anim, "onEnd", function () {
                s.height = "auto";
                s.overflow = o;
            });
            return anim;
        };
        dojo.fx.wipeOut = function (args) {
            var node = args.node = d.byId(args.node),
                s = node.style,
                o;
            var anim = d.animateProperty(d.mixin({
                properties: {
                    height: {
                        end: 1
                    }
                }
            }, args));
            d.connect(anim, "beforeBegin", function () {
                o = s.overflow;
                s.overflow = "hidden";
                s.display = "";
            });
            d.connect(anim, "onEnd", function () {
                s.overflow = o;
                s.height = "auto";
                s.display = "none";
            });
            return anim;
        };
        dojo.fx.slideTo = function (args) {
            var node = args.node = d.byId(args.node),
                top = null,
                left = null;
            var init = (function (n) {
                return function () {
                    var cs = d.getComputedStyle(n);
                    var pos = cs.position;
                    top = (pos == "absolute" ? n.offsetTop : parseInt(cs.top) || 0);
                    left = (pos == "absolute" ? n.offsetLeft : parseInt(cs.left) || 0);
                    if (pos != "absolute" && pos != "relative") {
                        var ret = d.position(n, true);
                        top = ret.y;
                        left = ret.x;
                        n.style.position = "absolute";
                        n.style.top = top + "px";
                        n.style.left = left + "px";
                    }
                };
            })(node);
            init();
            var anim = d.animateProperty(d.mixin({
                properties: {
                    top: args.top || 0,
                    left: args.left || 0
                }
            }, args));
            d.connect(anim, "beforeBegin", anim, init);
            return anim;
        };
    })();
}
if (!dojo._hasResource["dojo.NodeList-fx"]) {
    dojo._hasResource["dojo.NodeList-fx"] = true;
    dojo.provide("dojo.NodeList-fx");
    dojo.extend(dojo.NodeList, {
        _anim: function (obj, _260, args) {
            args = args || {};
            var a = dojo.fx.combine(this.map(function (item) {
                var _261 = {
                    node: item
                };
                dojo.mixin(_261, args);
                return obj[_260](_261);
            }));
            return args.auto ? a.play() && this : a;
        },
        wipeIn: function (args) {
            return this._anim(dojo.fx, "wipeIn", args);
        },
        wipeOut: function (args) {
            return this._anim(dojo.fx, "wipeOut", args);
        },
        slideTo: function (args) {
            return this._anim(dojo.fx, "slideTo", args);
        },
        fadeIn: function (args) {
            return this._anim(dojo, "fadeIn", args);
        },
        fadeOut: function (args) {
            return this._anim(dojo, "fadeOut", args);
        },
        animateProperty: function (args) {
            return this._anim(dojo, "animateProperty", args);
        },
        anim: function (_262, _263, _264, _265, _266) {
            var _267 = dojo.fx.combine(this.map(function (item) {
                return dojo.animateProperty({
                    node: item,
                    properties: _262,
                    duration: _263 || 350,
                    easing: _264
                });
            }));
            if (_265) {
                dojo.connect(_267, "onEnd", _265);
            }
            return _267.play(_266 || 0);
        }
    });
}
if (!dojo._hasResource["ibmweb.twisty"]) {
    dojo._hasResource["ibmweb.twisty"] = true;
    dojo.provide("ibmweb.twisty");
    ibmweb.twisty._duration = 200;
    ibmweb.twisty.cachetimeout = 3600 * 12 * 7;
    ibmweb.twisty.initTwisty = function (ul) {
        var li = dojo.query("> li", ul);
        if (!dojo.hasClass(ul, "ibm-twisty")) {
            return;
        }
        li.forEach(function (node) {
            if (!dojo.hasClass(node, "ibm-active")) {
                ibmweb.twisty.collapseTwisty(node);
            }
            var _268 = dojo.query("> a.ibm-twisty-trigger", node).onclick(ibmweb.twisty.toggleTwisty);
            var _269 = dojo.query("> span.ibm-twisty-head", node).onclick(ibmweb.twisty.toggleTwisty);
        });
    };
    ibmweb.twisty.expandTwisty = function (li) {
        dojo.addClass(li, "ibm-active");
        dojo.query("> a.ibm-twisty-trigger", li).removeClass("ibm-twisty-trigger-closed").query("img").attr("alt", "-");
        dojo.query("> div.ibm-twisty-body", li).style("display", "block");
    };
    ibmweb.twisty.collapseTwisty = function (li) {
        dojo.removeClass(li, "ibm-active");
        dojo.query("> a.ibm-twisty-trigger", li).addClass("ibm-twisty-trigger-closed").query("img").attr("alt", "+");
        dojo.query("> div.ibm-twisty-body", li).style("display", "none");
    };
    ibmweb.twisty.toggleTwisty = function (_26a) {
        var li = this.parentNode;
        if (dojo.hasClass(li, "ibm-active")) {
            ibmweb.twisty.collapseTwisty(li);
        } else {
            ibmweb.twisty.expandTwisty(li);
        }
        dojo.stopEvent(_26a);
        return false;
    };
    ibmweb.twisty.initSimpleShowHide = function (el) {
        if (!dojo.hasClass(el, "ibm-simple-show-hide")) {
            return;
        }
        var _26b = dojo.query("div.ibm-hideable", el);
        _26b.wipeOut({
            duration: 1
        }).play();
        var _26c = true;
        var _26d = 0;
        var _26e = dojo.query("p.ibm-show-hide-controls", el).style("display", "block");
        if (_26e.length) {
            dojo.place("<div class=\"ibm-rule\"><hr /></div>", _26e[0], "last");
        }
        _26e.query("a").onclick(function (_26f) {
            dojo.query("a", this.parentNode).removeClass("ibm-active");
            dojo.addClass(_26f.target, "ibm-active");
            var href = _26f.target.href;
            if (href.indexOf("#show-hide") != -1) {
                if (_26c) {
                    _26b.wipeIn().play();
                    _26c = false;
                } else {
                    _26b.wipeOut().play();
                    _26c = true;
                    dojo.removeClass(_26f.target, "ibm-active");
                }
            } else {
                if (href.indexOf("#show") != -1) {
                    if (_26d != 1) {
                        _26b.wipeIn().play();
                        _26d = 1;
                    }
                } else {
                    if (href.indexOf("#hide") != -1) {
                        if (_26d != 2) {
                            _26b.wipeOut().play();
                            _26d = 2;
                        }
                    }
                }
            }
            dojo.stopEvent(_26f);
            return false;
        });
        return false;
    };
    ibmweb.twisty.initShowHide = function (el, _270) {
        if (!dojo.hasClass(el, "ibm-show-hide")) {
            return;
        }
        if (!_270) {
            _270 = "h2";
        }
        var _271 = dojo.query("> div.ibm-container-body, > div.ibm-columns", el);
        var _272 = dojo.query("> " + _270, el);
        _272.forEach(function (_273, i) {
            var body = _271[i];
            var a = dojo.query("a", _273);
            a.attr("href", "#show-hide");
            dojo.style(body, "overflow", "hidden");
            var r = 0;
            if (el.id) {
                r = ibmweb.storage.getItem("ibmweb.twisty." + ibmweb.util.getUrl() + "." + el.id);
                if (r !== "h") {
                    r = isNaN(Number(r)) ? 0 : Number(r);
                }
            }
            if (i === r) {
                a.addClass("ibm-show-active");
                if (dojo.hasClass(el, "ibm-alternate")) {
                    a.removeClass("ibm-show-active");
                    dojo.style(body, {
                        "display": "none",
                        "height": "1px"
                    });
                }
            } else {
                a.removeClass("ibm-show-active");
                dojo.style(_273, "border-top", "none");
                dojo.style(body, {
                    "display": "none",
                    "height": "1px"
                });
            }
            a.onclick(function (_274) {
                dojo.stopEvent(_274);
                if (dojo.hasClass(this, "ibm-show-active")) {
                    if (_271.length == 1 || dojo.hasClass(el, "ibm-alternate")) {
                        dojo.removeClass(this, "ibm-show-active");
                        if (dojo.hasClass(el, "ibm-alternate")) {
                            var _275 = dojo.query(this).parent().next();
                            _275.style("overflow", "hidden");
                            _275.anim({
                                height: 1
                            }, ibmweb.twisty._duration, null, function () {
                                _275.style("display", "none");
                                if (el.id) {
                                    ibmweb.storage.setItem("ibmweb.twisty." + ibmweb.util.getUrl() + "." + el.id, "h", ibmweb.twisty.cachetimeout);
                                }
                            });
                        }
                        var _276 = _271[0];
                        _276.style.overflow = "hidden";
                        dojo.anim(_276, {
                            height: 1
                        }, ibmweb.twisty._duration, null, function () {
                            _276.style.display = "none";
                            if (el.id) {
                                ibmweb.storage.setItem("ibmweb.twisty." + ibmweb.util.getUrl() + "." + el.id, "h", ibmweb.twisty.cachetimeout);
                            }
                        });
                    }
                    return false;
                }
                var _277 = this;
                _272.forEach(function (_278, i) {
                    var body = dojo.query(_271[i])[0];
                    var a = dojo.query("a", _278);
                    if (a[0] === _277) {
                        a.addClass("ibm-show-active");
                        dojo.style(body, {
                            "display": "block",
                            "overflow": "visible",
                            "height": "auto"
                        });
                        var _279 = body.clientHeight || body.scrollHeight;
                        dojo.style(body, {
                            "overflow": "hidden",
                            "height": "1px"
                        });
                        dojo.anim(body, {
                            height: _279
                        }, ibmweb.twisty._duration, null, function () {
                            body.style.height = "auto";
                            var _27a = window.document.documentElement.scrollTop || window.document.body.scrollTop;
                            var top = dojo.marginBox(_278).t;
                            var mhh = dojo.position(dojo.byId("ibm-masthead")).h;
                            if (top - mhh < _27a) {
                                window.scrollTo(0, dojo.marginBox(_278).t - dojo.position(dojo.byId("ibm-masthead")).h);
                            }
                            if (el.id) {
                                ibmweb.storage.setItem("ibmweb.twisty." + ibmweb.util.getUrl() + "." + el.id, i, ibmweb.twisty.cachetimeout);
                            }
                        });
                    } else {
                        a.removeClass("ibm-show-active");
                        dojo.anim(body, {
                            height: 1
                        }, ibmweb.twisty._duration, null, function () {
                            body.style.display = "none";
                        });
                    }
                });
                return false;
            });
        });
    };
    dojo.addOnLoad(function () {
        if (!ibmweb.info.v17) {
            return;
        }
        dojo.query("div.ibm-simple-show-hide").forEach(function (node) {
            ibmweb.twisty.initSimpleShowHide(node);
        });
        dojo.query("div.ibm-container.ibm-show-hide").forEach(function (node) {
            ibmweb.twisty.initShowHide(node);
        });
        var _27b = false;
        dojo.query("ul.ibm-twisty").forEach(function (node) {
            if (!_27b) {
                (new Image()).src = "//www.ibm.com/i/v16/icons/tw_closed.gif";
                _27b = true;
            }
            ibmweb.twisty.initTwisty(node);
        });
    });
}
if (!dojo._hasResource["ibmweb.search"]) {
    dojo._hasResource["ibmweb.search"] = true;
    dojo.provide("ibmweb.search");
    if (typeof (window.external) == "object" && window.external && typeof (window.external.AddSearchProvider) != "undefined" && String(window.location.hostname).indexOf(".ibm.com") != -1) {
        var link = document.createElement("link");
        dojo.attr(link, {
            rel: "search",
            type: "application/opensearchdescription+xml",
            href: "//www.ibm.com/search/opensearch/description.xml",
            title: "IBM Search"
        });
        dojo.place(link, dojo.query("head")[0], "last");
    }
}
if (!dojo._hasResource["ibmweb.overlay"]) {
    dojo._hasResource["ibmweb.overlay"] = true;
    dojo.provide("ibmweb.overlay");
    ibmweb.overlay.show = function (_27c, _27d, _27e) {
        dojo["require"]("dijit.Dialog");
        dojo.addOnLoad(function () {
            var _27f = dijit.byId("dialog_" + _27c);
            if (!_27f) {
                dojo.byId(_27c).style.display = "block";
                _27f = new dijit.Dialog(dojo.mixin({
                    "content": dojo.byId(_27c),
                    "id": "dialog_" + _27c
                }, _27e));
                dojo.connect(dijit.byId("dialog_" + _27c), "onHide", function () {
                    ibmweb.overlay.hide(_27c);
                });
            }
            _27f.show();
            ibmweb.util.statsHelper({
                "ibmEV": "overlay",
                "ibmEvAction": "show",
                "ibmEvGroup": "Opening overlay",
                "ibmEvModule": _27c
            });
        });
    };
    ibmweb.overlay.hide = function (_280) {
        var _281 = dijit.byId("dialog_" + _280);
        ibmweb.util.statsHelper({
            "ibmEV": "overlay",
            "ibmEvAction": "close",
            "ibmEvGroup": "Closing overlay",
            "ibmEvModule": _280
        });
        if (_281.open === true) {
            _281.hide();
        }
        if (dojo.hasClass(dojo.byId(_280), "ibm-rebuild-after-close")) {
            var _282 = dojo.query(".ibm-body", dojo.byId(_280))[0],
                _283 = _282.innerHTML;
            _282.innerHTML = "";
            setTimeout(function () {
                _282.innerHTML = _283;
            }, 0);
        }
    };
    ibmweb.overlay.init = function () {};
}
if (!dojo._hasResource["ibmweb.storage"]) {
    dojo._hasResource["ibmweb.storage"] = true;
    dojo.provide("ibmweb.storage");
    ibmweb.storage = {
        getItem: function (key, _284) {
            if (!_284) {
                var _284 = null;
            }
            if (!this.isSupported()) {
                return null;
            }
            if (localStorage.getItem(key + "_expire") !== null) {
                var _285 = localStorage.getItem(key + "_expire");
                var _286 = new Date();
                var _286 = _286.getTime();
                if (_285 < _286) {
                    this.removeItem(key);
                    return _284;
                }
            }
            return localStorage.getItem(key);
        },
        setItem: function (key, _287, _288) {
            if (!this.isSupported()) {
                return false;
            }
            this.removeItem(key);
            if (_288) {
                var time = new Date();
                var _289 = _288 * 1000;
                _289 += time.getTime();
                localStorage.setItem(key + "_expire", _289);
            }
            localStorage.setItem(key, _287);
            return localStorage[key];
        },
        removeItem: function (key) {
            if (!this.isSupported()) {
                return false;
            }
            localStorage.removeItem(key);
            localStorage.removeItem(key + "_expire");
        },
        clear: function () {
            if (!this.isSupported()) {
                return false;
            }
            localStorage.clear();
        },
        isSupported: function () {
            try {
                return window.localStorage && typeof (window.localStorage) == "object";
            } catch (e) {
                return false;
            }
        }
    };
}
if (!dojo._hasResource["ibmweb.form"]) {
    dojo._hasResource["ibmweb.form"] = true;
    dojo.provide("ibmweb.form");
    ibmweb.form = {
        _loaded: false,
        _init: function () {
            if (ibmweb.form._loaded) {
                return;
            }
            ibmweb.form._loaded = true;
            dojo["require"]("ibmweb.ibm-form");
        },
        initElement: function (elem) {
            if (elem.nodeName == "SELECT") {
                this.initSelect(elem);
            } else {
                if (elem.nodeName == "INPUT") {
                    if (elem.type.toLowerCase() == "checkbox") {
                        this.initCheckbox(elem);
                    } else {
                        if (elem.type.toLowerCase() == "radio") {
                            this.initRadio(elem);
                        }
                    }
                }
            }
        },
        initRadio: function (elem) {
            var p = {
                srcNodeRef: elem,
                checked: elem.checked,
                disabled: elem.disabled,
                name: elem.name,
                value: elem.value
            };
            if (elem.id) {
                p.id = elem.id;
            }
            if (elem.title) {
                p.title = elem.title;
            }
            new dijit.form.RadioButton(p);
        },
        initSelect: function (elem) {
            var p = {
                srcNodeRef: elem,
                disabled: elem.disabled,
                name: elem.name,
                maxHeight: 200
            };
            if (elem.id) {
                p.id = elem.id;
            }
            if (elem.title) {
                p.title = elem.title;
            }
            if (elem.multiple) {
                p.size = elem.size;
                new dijit.form.MultiSelect(p);
            } else {
                new dijit.form.Select(p);
            }
        },
        initCheckbox: function (elem) {
            var p = {
                srcNodeRef: elem,
                checked: elem.checked,
                disabled: elem.disabled,
                name: elem.name,
                value: elem.value
            };
            if (elem.id) {
                p.id = elem.id;
            }
            if (elem.title) {
                p.title = elem.title;
            }
            new dijit.form.CheckBox(p);
        }
    };
    dojo.addOnLoad(function () {
        if (dojo.version.major <= 1 && dojo.version.minor <= 3) {
            return;
        }
        dojo.query("input[disabled], select[disabled], textarea[disabled]").forEach(function (i) {
            if (i.id) {
                var _28a = dojo.query("label[for=\"" + i.id + "\"]");
                if (_28a.length == 1) {
                    dojo.addClass(_28a[0], "ibm-label-disabled");
                }
            }
        });
        var _28b = dojo.query("select.ibm-styled,select.ibm-styled-select, input[type=checkbox].ibm-styled, input[type=radio].ibm-styled, form.ibm-styled-form input[type=radio], form.ibm-styled-form input[type=checkbox], form.ibm-styled-form select");
        if (_28b.length > 0) {
            ibmweb.form._init();
            dojo.addOnLoad(function () {
                for (var i = 0, j = _28b.length; i < j; i++) {
                    ibmweb.form.initElement(_28b[i]);
                }
                dojo.publish("/ibmweb/form/initialized");
            });
        }
        dojo.addOnLoad(function () {
            dojo.query("form.ibm-jump-form").forEach(function (item) {
                dojo.query("input.ibm-btn-go", item).remove();
                var _28c = dojo.query(".dijitSelect", item);
                if (!_28c || _28c.length != 1) {
                    return;
                }
                var id = _28c[0].id;
                _28c = dijit.byId(id);
                _28c.onChange = function (_28d) {
                    if (_28d) {
                        location.href = _28d;
                    }
                };
                dojo.style(id, "width", "100%");
            });
        });
        var tmp = dojo.query(".ibm-date-picker");
        if (tmp.length > 0) {
            dojo["require"]("dijit.form.DateTextBox");
            dojo.addOnLoad(function () {
                tmp.forEach(function (elem) {
                    var _28e = {
                        srcNodeRef: elem,
                        disabled: elem.disabled,
                        name: elem.name,
                        id: elem.id,
                        style: "width: 196px"
                    }, lbl;
                    if (elem.name) {
                        lbl = dojo.query("label[for=\"" + elem.name + "\"] span.ibm-date-format");
                        if (lbl.length != 0) {
                            _28e.constraints = {
                                datePattern: lbl[0].innerHTML
                            };
                            _28e.serialize = function (_28f) {
                                return dojo.date.locale.format(_28f, {
                                    datePattern: "yyyy-MM-dd",
                                    selector: "date"
                                });
                            };
                        }
                    }
                    if (elem.value) {
                        try {
                            var val = elem.value,
                                _290 = Date.parseString(val);
                            if (lbl.length != 0 && !isNaN(_290) && _290 instanceof Date) {
                                val = dojo.date.locale.format(_290, {
                                    datePattern: lbl[0].innerHTML,
                                    selector: "date"
                                });
                            }
                            _28e.value = dojo.date.locale.parse(val, {
                                datePattern: (lbl.length != 0) ? lbl[0].innerHTML : "y-M-d",
                                selector: "date"
                            });
                        } catch (e) {}
                    }
                    var dtb = new dijit.form.DateTextBox(_28e);
                });
            });
        }
    });
    Date.LZ = function (x) {
        return (x < 0 || x > 9 ? "" : "0") + x;
    };
    Date.monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    Date.monthAbbreviations = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    Date.dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    Date.dayAbbreviations = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    Date.preferAmericanFormat = true;
    if (!Date.prototype.getFullYear) {
        Date.prototype.getFullYear = function () {
            var yy = this.getYear();
            return (yy < 1900 ? yy + 1900 : yy);
        };
    }
    Date.parseString = function (val, _291) {
        if (typeof (_291) == "undefined" || _291 == null || _291 == "") {
            var _292 = new Array("y-M-d", "MMM d, y", "MMM d,y", "y-MMM-d", "d-MMM-y", "MMM d", "MMM-d", "d-MMM"),
                _293 = new Array("M/d/y", "M-d-y", "M.d.y", "M/d", "M-d"),
                _294 = new Array("d/M/y", "d-M-y", "d.M.y", "d/M", "d-M"),
                _295 = new Array(_292, Date.preferAmericanFormat ? _293 : _294, Date.preferAmericanFormat ? _294 : _293);
            for (var i = 0; i < _295.length; i++) {
                var l = _295[i];
                for (var j = 0; j < l.length; j++) {
                    var d = Date.parseString(val, l[j]);
                    if (d != null) {
                        return d;
                    }
                }
            }
            return null;
        }
        this.isInteger = function (val) {
            for (var i = 0; i < val.length; i++) {
                if ("1234567890".indexOf(val.charAt(i)) == -1) {
                    return false;
                }
            }
            return true;
        };
        this.getInt = function (str, i, _296, _297) {
            for (var x = _297; x >= _296; x--) {
                var _298 = str.substring(i, i + x);
                if (_298.length < _296) {
                    return null;
                }
                if (this.isInteger(_298)) {
                    return _298;
                }
            }
            return null;
        };
        val = val + "";
        _291 = _291 + "";
        var _299 = 0,
            _29a = 0,
            c = "",
            _29b = "",
            _29c = "",
            x, y, year = new Date().getFullYear(),
            _29d = 1,
            date = 1,
            hh = 0,
            mm = 0,
            ss = 0,
            ampm = "";
        while (_29a < _291.length) {
            c = _291.charAt(_29a);
            _29b = "";
            while ((_291.charAt(_29a) == c) && (_29a < _291.length)) {
                _29b += _291.charAt(_29a++);
            }
            switch (_29b) {
                case "yyyy":
                case "yy":
                case "y":
                    if (_29b == "yyyy") {
                        x = 4;
                        y = 4;
                    }
                    if (_29b == "yy") {
                        x = 2;
                        y = 2;
                    }
                    if (_29b == "y") {
                        x = 2;
                        y = 4;
                    }
                    year = this.getInt(val, _299, x, y);
                    if (year == null) {
                        return null;
                    }
                    _299 += year.length;
                    if (year.length == 2) {
                        if (year > 70) {
                            year = 1900 + (year - 0);
                        } else {
                            year = 2000 + (year - 0);
                        }
                    }
                    break;
                case "MMM":
                case "NNN":
                    _29d = 0;
                    var _29e = (_29b == "MMM" ? (Date.monthNames.concat(Date.monthAbbreviations)) : Date.monthAbbreviations);
                    for (var i = 0; i < _29e.length; i++) {
                        var _29f = _29e[i];
                        if (val.substring(_299, _299 + _29f.length).toLowerCase() == _29f.toLowerCase()) {
                            _29d = (i % 12) + 1;
                            _299 += _29f.length;
                            break;
                        }
                    }
                    if ((_29d < 1) || (_29d > 12)) {
                        return null;
                    }
                    break;
                case "EE":
                case "E":
                    var _29e = (_29b == "EE" ? Date.dayNames : Date.dayAbbreviations);
                    for (var i = 0; i < _29e.length; i++) {
                        var _2a0 = _29e[i];
                        if (val.substring(_299, _299 + _2a0.length).toLowerCase() == _2a0.toLowerCase()) {
                            _299 += _2a0.length;
                            break;
                        }
                    }
                    break;
                case "MM":
                case "M":
                    _29d = this.getInt(val, _299, _29b.length, 2);
                    if (_29d == null || (_29d < 1) || (_29d > 12)) {
                        return null;
                    }
                    _299 += _29d.length;
                    break;
                case "dd":
                case "d":
                    date = this.getInt(val, _299, _29b.length, 2);
                    if (date == null || (date < 1) || (date > 31)) {
                        return null;
                    }
                    _299 += date.length;
                    break;
                case "hh":
                case "h":
                    hh = this.getInt(val, _299, _29b.length, 2);
                    if (hh == null || (hh < 1) || (hh > 12)) {
                        return null;
                    }
                    _299 += hh.length;
                    break;
                case "HH":
                case "H":
                    hh = this.getInt(val, _299, _29b.length, 2);
                    if (hh == null || (hh < 0) || (hh > 23)) {
                        return null;
                    }
                    _299 += hh.length;
                    break;
                case "KK":
                case "K":
                    hh = this.getInt(val, _299, _29b.length, 2);
                    if (hh == null || (hh < 0) || (hh > 11)) {
                        return null;
                    }
                    _299 += hh.length;
                    hh++;
                    break;
                case "kk":
                case "k":
                    hh = this.getInt(val, _299, _29b.length, 2);
                    if (hh == null || (hh < 1) || (hh > 24)) {
                        return null;
                    }
                    _299 += hh.length;
                    hh--;
                    break;
                case "mm":
                case "m":
                    mm = this.getInt(val, _299, _29b.length, 2);
                    if (mm == null || (mm < 0) || (mm > 59)) {
                        return null;
                    }
                    _299 += mm.length;
                    break;
                case "ss":
                case "s":
                    ss = this.getInt(val, _299, _29b.length, 2);
                    if (ss == null || (ss < 0) || (ss > 59)) {
                        return null;
                    }
                    _299 += ss.length;
                    break;
                case "a":
                    if (val.substring(_299, _299 + 2).toLowerCase() == "am") {
                        ampm = "AM";
                    } else {
                        if (val.substring(_299, _299 + 2).toLowerCase() == "pm") {
                            ampm = "PM";
                        } else {
                            return null;
                        }
                    }
                    _299 += 2;
                    break;
                default:
                    if (val.substring(_299, _299 + _29b.length) != _29b) {
                        return null;
                    } else {
                        _299 += _29b.length;
                    }
            }
        }
        if (_299 != val.length) {
            return null;
        }
        if (_29d == 2) {
            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
                if (date > 29) {
                    return null;
                }
            } else {
                if (date > 28) {
                    return null;
                }
            }
        }
        if ((_29d == 4) || (_29d == 6) || (_29d == 9) || (_29d == 11)) {
            if (date > 30) {
                return null;
            }
        }
        if (hh < 12 && ampm == "PM") {
            hh = hh - 0 + 12;
        } else {
            if (hh > 11 && ampm == "AM") {
                hh -= 12;
            }
        }
        return new Date(year, _29d - 1, date, hh, mm, ss);
    };
    Date.isValid = function (val, _2a1) {
        return (Date.parseString(val, _2a1) != null);
    };
    Date.prototype.isBefore = function (_2a2) {
        if (_2a2 == null) {
            return false;
        }
        return (this.getTime() < _2a2.getTime());
    };
    Date.prototype.isAfter = function (_2a3) {
        if (_2a3 == null) {
            return false;
        }
        return (this.getTime() > _2a3.getTime());
    };
    Date.prototype.equals = function (_2a4) {
        if (_2a4 == null) {
            return false;
        }
        return (this.getTime() == _2a4.getTime());
    };
    Date.prototype.equalsIgnoreTime = function (_2a5) {
        if (_2a5 == null) {
            return false;
        }
        var d1 = new Date(this.getTime()).clearTime(),
            d2 = new Date(_2a5.getTime()).clearTime();
        return (d1.getTime() == d2.getTime());
    };
    Date.prototype.format = function (_2a6) {
        _2a6 = _2a6 + "";
        var _2a7 = "",
            _2a8 = 0,
            c = "",
            _2a9 = "",
            y = this.getYear() + "",
            M = this.getMonth() + 1,
            d = this.getDate(),
            E = this.getDay(),
            H = this.getHours(),
            m = this.getMinutes(),
            s = this.getSeconds(),
            yyyy, yy, MMM, MM, dd, hh, h, mm, ss, ampm, HH, H, KK, K, kk, k, _2aa = new Object();
        if (y.length < 4) {
            y = "" + (+y + 1900);
        }
        _2aa["y"] = "" + y;
        _2aa["yyyy"] = y;
        _2aa["yy"] = y.substring(2, 4);
        _2aa["M"] = M;
        _2aa["MM"] = Date.LZ(M);
        _2aa["MMM"] = Date.monthNames[M - 1];
        _2aa["NNN"] = Date.monthAbbreviations[M - 1];
        _2aa["d"] = d;
        _2aa["dd"] = Date.LZ(d);
        _2aa["E"] = Date.dayAbbreviations[E];
        _2aa["EE"] = Date.dayNames[E];
        _2aa["H"] = H;
        _2aa["HH"] = Date.LZ(H);
        if (H == 0) {
            _2aa["h"] = 12;
        } else {
            if (H > 12) {
                _2aa["h"] = H - 12;
            } else {
                _2aa["h"] = H;
            }
        }
        _2aa["hh"] = Date.LZ(_2aa["h"]);
        _2aa["K"] = _2aa["h"] - 1;
        _2aa["k"] = _2aa["H"] + 1;
        _2aa["KK"] = Date.LZ(_2aa["K"]);
        _2aa["kk"] = Date.LZ(_2aa["k"]);
        if (H > 11) {
            _2aa["a"] = "PM";
        } else {
            _2aa["a"] = "AM";
        }
        _2aa["m"] = m;
        _2aa["mm"] = Date.LZ(m);
        _2aa["s"] = s;
        _2aa["ss"] = Date.LZ(s);
        while (_2a8 < _2a6.length) {
            c = _2a6.charAt(_2a8);
            _2a9 = "";
            while ((_2a6.charAt(_2a8) == c) && (_2a8 < _2a6.length)) {
                _2a9 += _2a6.charAt(_2a8++);
            }
            if (typeof (_2aa[_2a9]) != "undefined") {
                _2a7 = _2a7 + _2aa[_2a9];
            } else {
                _2a7 = _2a7 + _2a9;
            }
        }
        return _2a7;
    };
    Date.prototype.getDayName = function () {
        return Date.dayNames[this.getDay()];
    };
    Date.prototype.getDayAbbreviation = function () {
        return Date.dayAbbreviations[this.getDay()];
    };
    Date.prototype.getMonthName = function () {
        return Date.monthNames[this.getMonth()];
    };
    Date.prototype.getMonthAbbreviation = function () {
        return Date.monthAbbreviations[this.getMonth()];
    };
    Date.prototype.clearTime = function () {
        this.setHours(0);
        this.setMinutes(0);
        this.setSeconds(0);
        this.setMilliseconds(0);
        return this;
    };
    Date.prototype.add = function (_2ab, _2ac) {
        if (typeof (_2ab) == "undefined" || _2ab == null || typeof (_2ac) == "undefined" || _2ac == null) {
            return this;
        }
        _2ac = +_2ac;
        switch (_2ab) {
            case "y":
                this.setFullYear(this.getFullYear() + _2ac);
                break;
            case "M":
                this.setMonth(this.getMonth() + _2ac);
                break;
            case "d":
                this.setDate(this.getDate() + _2ac);
                break;
            case "w":
                var step = (_2ac > 0) ? 1 : -1;
                while (_2ac != 0) {
                    this.add("d", step);
                    while (this.getDay() == 0 || this.getDay() == 6) {
                        this.add("d", step);
                    }
                    _2ac -= step;
                }
                break;
            case "h":
                this.setHours(this.getHours() + _2ac);
                break;
            case "m":
                this.setMinutes(this.getMinutes() + _2ac);
                break;
            case "s":
                this.setSeconds(this.getSeconds() + _2ac);
                break;
        }
        return this;
    };
}
if (!dojo._hasResource["ibmweb.stepindicator"]) {
    dojo._hasResource["ibmweb.stepindicator"] = true;
    dojo.provide("ibmweb.stepindicator");
    ibmweb.stepindicator = {
        indicators: {},
        id_inc: 0,
        classnames: {
            indicator: "ibm-step-indicator",
            container: "ibm-step-container",
            past_step: "ibm-active-completed",
            present_step: "ibm-active-current",
            future_step: "ibm-disabled",
            inactive_content: "ibm-hidden-content"
        },
        init: function (_2ad, _2ae) {
            _2ad = _2ad || dojo.query("body")[0];
            dojo.query("div." + this.classnames.indicator, _2ad).forEach(function (node, i) {
                if (!new ibmweb.stepindicator.StepIndicator(node, _2ae)) {}
            });
        },
        StepIndicator: function (node, _2af) {
            var that = this;
            if (typeof (node) == "string") {
                node = dojo.byId(node);
            }
            if (!node) {
                throw "Cannot build StepIndicator, node does not exist";
            }
            if (dojo.attr(node, "data-step-indicator-init")) {
                return false;
            }
            dojo.attr(node, "data-step-indicator-init", true);
            var me = this,
                id = dojo.attr(node, "id"),
                _2b0 = {
                    future_clickable: false,
                    content: dojo.NodeList(node).next()[0]
                };
            if (id) {
                indicators[id] = me;
            }
            dojo.query(".ibm-hide-if-no-js", _2b0.content).forEach(function (_2b1) {
                dojo.removeClass(_2b1, "ibm-hide-if-no-js");
            });
            _2af = _2af || {};
            for (var key in _2af) {
                _2b0[key] = _2af[key];
            }
            var _2b2 = function () {
                return dojo.query("li", node);
            };
            var _2b3 = function () {
                return dojo.query("." + ibmweb.stepindicator.classnames.container, _2b0.content);
            };
            this.currentStep = function () {
                var cs = -1;
                _2b2().forEach(function (node, i) {
                    if (dojo.query("." + ibmweb.stepindicator.classnames.present_step, node).length > 0) {
                        cs = i;
                    }
                });
                return cs;
            };
            this.totalSteps = function () {
                return _2b2().length;
            };
            this.isOnFirst = function () {
                return me.currentStep() === 0;
            };
            this.isOnLast = function () {
                return me.currentStep() === me.totalSteps() - 1;
            };
            this.goToStep = function (_2b4) {
                var $a;
                _2b2().forEach(function (_2b5, i) {
                    $a = dojo.query("a", _2b5)[0];
                    dojo[(i < _2b4) ? "addClass" : "removeClass"]($a, ibmweb.stepindicator.classnames.past_step);
                    dojo[(i === _2b4) ? "addClass" : "removeClass"]($a, ibmweb.stepindicator.classnames.present_step);
                    dojo[(i > _2b4) ? "addClass" : "removeClass"]($a, ibmweb.stepindicator.classnames.future_step);
                });
                _2b3().forEach(function (_2b6, i) {
                    dojo.style(_2b6, "display", (i === _2b4) ? "block" : "none");
                });
            };
            _2b2().forEach(function (_2b7, i) {
                $a = dojo.query("a", _2b7)[0];
                dojo.connect($a, "onclick", function (e) {
                    var _2b8 = me.currentStep() < i;
                    if (!_2b8 || (_2b8 && _2b0.future_clickable)) {
                        me.goToStep(i);
                    }
                    e.preventDefault();
                });
            });
            this.next = function () {
                if (!me.isOnLast()) {
                    me.goToStep(me.currentStep() + 1);
                }
            };
            this.prev = function () {
                if (!me.isOnFirst()) {
                    me.goToStep(me.currentStep() - 1);
                }
            };
            _2b3().forEach(function (_2b9, i) {
                var _2ba = dojo.query("[data-step=next]", _2b9);
                _2ba.forEach(function (_2bb) {
                    dojo.connect(_2bb, "onclick", function () {
                        me.next();
                    });
                });
                var _2bc = dojo.query("[data-step=prev]", _2b9);
                _2bc.forEach(function (_2bd) {
                    dojo.connect(_2bd, "onclick", function () {
                        me.prev();
                    });
                });
            });
            var cs = me.currentStep();
            if (cs == -1) {
                cs = 0;
            }
            me.goToStep(cs);
        },
        byId: function (id) {
            return this.indicators[id] || null;
        }
    };
}
if (!dojo._hasResource["ibmweb.dynnav._module"]) {
    dojo._hasResource["ibmweb.dynnav._module"] = true;
    dojo.provide("ibmweb.dynnav._module");
    dojo.declare("ibmweb.dynnav._module", null, {
        isA_Module: true,
        init: function () {
            return false;
        },
        onLoad: function () {},
        onData: function (data) {},
        onError: function () {}
    });
}
if (!dojo._hasResource["ibmweb.dynnav.mediacontroller"]) {
    dojo._hasResource["ibmweb.dynnav.mediacontroller"] = true;
    dojo.provide("ibmweb.dynnav.mediacontroller");
    dojo.declare("ibmweb.dynnav.mediacontroller", [ibmweb.dynnav._module], {
        _widgets: [],
        init: function () {
            return ibmweb.dynnav.isServiceEnabled("video");
        },
        onData: function () {
            var _2be = dojo.query(".ibm-media");
            var self = this;
            if (_2be.length > 0) {
                dojo["require"]("ext.media._base");
                dojo.addOnLoad(function () {
                    dojo.addOnLoad(function () {
                        _2be.forEach(function (item) {
                            if (item.tagName == "A" || item.tagName == "AREA") {
                                dojo.connect(item, "onclick", function (_2bf) {
                                    self._onLinkClick(_2bf, this);
                                });
                                return;
                            }
                            var link = dojo.query(".ibm-rss-link", item);
                            if (link.length == 0) {
                                return;
                            }
                            link = link[0];
                            var _2c0 = dojo.queryToObject(link.rel);
                            var _2c1, data = null;
                            var _2c2 = dojo.query("img", link);
                            if (_2c2.length != 0) {
                                if (_2c0.format == "ribbon") {
                                    htmlBackground_arr = [];
                                    _2c2.forEach(function (i) {
                                        var src = dojo.attr(i, "src");
                                        htmlBackground_arr.push(src);
                                        dojo.destroy(i);
                                    });
                                    _2c2 = htmlBackground_arr;
                                } else {
                                    var src = dojo.attr(_2c2[0], "src");
                                    _2c2.forEach(dojo.destroy);
                                    _2c2 = src;
                                }
                            } else {
                                _2c2 = null;
                            }
                            var _2c3 = {
                                container: item,
                                url: link.href,
                                options: dojo.queryToObject(link.rel),
                                title: link.innerHTML,
                                htmlBackground: _2c2
                            };
                            if (_2c0.loadVideoUrl) {
                                data = [{
                                    isVideo: true,
                                    url: {
                                        mp4: link.href
                                    }
                                }];
                                if (_2c0.height) {
                                    data[0].height = _2c0.height;
                                }
                                if (_2c0.width) {
                                    data[0].width = _2c0.width;
                                }
                            }
                            switch (_2c0.format) {
                                case "video_small":
                                    dojo.mixin(_2c3, {
                                        maxWidth: 300
                                    });
                                    _2c1 = "videowidget";
                                    data = [{
                                        height: "225",
                                        width: "300",
                                        isVideo: true,
                                        thumbnails: {},
                                        url: {
                                            mp4: link.href
                                        }
                                    }];
                                    break;
                                case "inline_small":
                                    var _2c4 = 300;
                                    try {
                                        if (link.parentNode) {
                                            var _2c5 = link.parentNode;
                                            _2c4 = dojo.coords(_2c5).w;
                                        }
                                    } catch (e) {}
                                    dojo.mixin(_2c3, {
                                        maxWidth: _2c4,
                                        format: "inline_small"
                                    });
                                    _2c3.options.no_hide = true;
                                    _2c1 = "videowidget";
                                    break;
                                case "inline_large":
                                    dojo.mixin(_2c3, {
                                        maxWidth: 940,
                                        maxHeight: 332,
                                        format: "inline_large"
                                    });
                                    _2c1 = "largewidget";
                                    break;
                                case "inline_medium":
                                    dojo.mixin(_2c3, {
                                        maxWidth: 620,
                                        maxHeight: 332,
                                        format: "inline_medium"
                                    });
                                    _2c1 = "mediumwidget";
                                    break;
                                case "playlist":
                                    dojo.mixin(_2c3, {
                                        maxWidth: 940,
                                        maxHeight: 332,
                                        format: "playlist"
                                    });
                                    _2c1 = "playlistwidget";
                                    break;
                                case "inline_thumbnail":
                                    dojo.mixin(_2c3, {
                                        maxWidth: 940,
                                        maxHeight: 332,
                                        format: "inline_thumbnail"
                                    });
                                    _2c1 = "thumbnailwidget";
                                    break;
                                case "ribbon":
                                default:
                                    dojo.mixin(_2c3, {
                                        maxWidth: 940,
                                        maxHeight: 332,
                                        format: "ribbon"
                                    });
                                    _2c1 = "ribbonwidget";
                                    break;
                            }
                            _2c1 = new ext.media[_2c1](_2c3);
                            dojo.empty(item);
                            _2c1.placeAt(item);
                            _2c1.startup(data);
                            self._widgets.push(_2c1);
                            dojo.publish("/ibmweb/dynnav/mediacontroller/created", _2c1);
                        });
                    });
                });
            }
        },
        onError: function () {
            for (var i = 0, j = this._widgets.length; i < j; i++) {
                this._widgets[i].removeWaitingImage();
            }
        },
        useNewYTPlayer: function () {
            var _2c6 = dojo.query("meta[name=__RMSBETA]");
            var _2c7 = false;
            if (_2c6 && _2c6.length > 0 && dojo.attr(_2c6[0], "value") == "newYT") {
                _2c7 = true;
            }
            var _2c8 = /[&?]rmsbeta=newyt/.test(document.location.search);
            if (dojo.cookie("__RMSBETA") == "newYT" || _2c7 || _2c8) {
                if (dojo.isIE) {
                    return dojo.isIE > 8;
                }
                return true;
            }
            return false;
        },
        _onLinkClick: function (_2c9, link) {
            var _2ca = {};
            var _2cb = link.href && link.href.indexOf("youtube.com") > -1;
            if (link.rel) {
                _2ca = dojo.queryToObject(link.rel);
            }
            if (ibmweb.info.iDevice && _2cb && !this.useNewYTPlayer()) {
                return;
            }
            if ( !! _2ca.format && _2ca.format == "overlay") {
                dojo.stopEvent(_2c9);
                var _2cc = {
                    url: link.href,
                    options: _2ca
                };
                var _2cd = new ext.media.overlaywidget(_2cc);
                _2cd.startup();
                return;
            }
            if (!_2cb && (!_2ca.height || !_2ca.width)) {
                return;
            }
            dojo.stopEvent(_2c9);
            var _2cd = new ext.media.overlaywidget();
            _2cd.url = link.href;
            _2cd.options = _2ca;
            var obj = {
                isVideo: true,
                url: {
                    mp4: link.href
                }
            };
            if (_2cb) {
                obj.type = "youtube";
                obj.url = {
                    youtube: link.href
                };
                if (!_2ca.height) {
                    obj.height = 360;
                }
                if (!_2ca.width) {
                    obj.width = 640;
                }
            }
            _2cd.startup([dojo.mixin({}, _2ca, obj)], true);
        }
    });
}
if (!dojo._hasResource["ibmweb.external.expertise"]) {
    dojo._hasResource["ibmweb.external.expertise"] = true;
    dojo.provide("ibmweb.external.expertise");
    dojo.declare("ibmweb.external.expertise", ibmweb.dynnav._module, {
        init: function () {
            return ibmweb.dynnav.isServiceEnabled("expertise");
        },
        onData: function (data) {
            if (ibmweb.config.config == "www") {
                ibmweb.config.set({
                    expv17css: "//1.www.s81c.com/common/v17/css/external/expertise.css"
                });
            } else {
                ibmweb.config.set({
                    expv17css: "//1.w3.s81c.com/common/v17/css/external/expertise.css"
                });
            }
            var RE = /\,{1,}/g;
            if (ibmweb.config.siteid == "www" || ibmweb.config.siteid == "w3") {
                if (ibmweb.config.expertise.template == "col-5-1") {
                    dojo["require"]("ext.expertise.AbstractExpertiseV17Widget");
                    dojo["require"]("ext.expertise.Five1V17Widget");
                    ibmweb.queue.push(function () {
                        return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.Five1V17Widget) == "function";
                    }, function () {
                        if (!ibmweb.config.expertise.debug) {
                            dojo.doc.getElementsByTagName("head")[0].appendChild(dojo.create("link", {
                                type: "text/css",
                                rel: "stylesheet",
                                href: ibmweb.config.expv17css
                            }));
                        }
                        ibmweb.data.require("expertlocator", function (_2ce) {
                            if (RE.test(ibmweb.config.expertise.placeat)) {
                                if (ibmweb.config.expertise.expertid && ibmweb.config.expertise.displaytype == "one") {
                                    for (var i = 0; i < ibmweb.config.expertise.placeat.length; i++) {
                                        var _2cf = new ext.expertise.Five1V17Widget();
                                        _2cf.startup(i);
                                    }
                                } else {
                                    return;
                                }
                            } else {
                                var _2cf = new ext.expertise.Five1V17Widget();
                                _2cf.startup();
                            }
                        });
                    });
                } else {
                    if (ibmweb.config.expertise.template == "col-6-1") {
                        dojo["require"]("ext.expertise.AbstractExpertiseV17Widget");
                        dojo["require"]("ext.expertise.Six1V17Widget");
                        ibmweb.queue.push(function () {
                            return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.Six1V17Widget) == "function";
                        }, function () {
                            if (!ibmweb.config.expertise.debug) {
                                dojo.doc.getElementsByTagName("head")[0].appendChild(dojo.create("link", {
                                    type: "text/css",
                                    rel: "stylesheet",
                                    href: ibmweb.config.expv17css
                                }));
                            }
                            ibmweb.data.require("expertlocator", function (_2d0) {
                                if (RE.test(ibmweb.config.expertise.placeat)) {
                                    if (ibmweb.config.expertise.expertid && ibmweb.config.expertise.displaytype == "one") {
                                        for (var i = 0; i < ibmweb.config.expertise.placeat.length; i++) {
                                            var _2d1 = new ext.expertise.Six1V17Widget();
                                            _2d1.startup(i);
                                        }
                                    } else {
                                        return;
                                    }
                                } else {
                                    var _2d1 = new ext.expertise.Six1V17Widget();
                                    _2d1.startup();
                                }
                            });
                        });
                    } else {
                        if (ibmweb.config.expertise.template == "col-6-2") {
                            dojo["require"]("ext.expertise.AbstractExpertiseV17Widget");
                            dojo["require"]("ext.expertise.Six2V17Widget");
                            ibmweb.queue.push(function () {
                                return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.Six2V17Widget) == "function";
                            }, function () {
                                if (!ibmweb.config.expertise.debug) {
                                    dojo.doc.getElementsByTagName("head")[0].appendChild(dojo.create("link", {
                                        type: "text/css",
                                        rel: "stylesheet",
                                        href: ibmweb.config.expv17css
                                    }));
                                }
                                ibmweb.data.require("expertlocator", function (_2d2) {
                                    if (RE.test(ibmweb.config.expertise.placeat)) {
                                        if (ibmweb.config.expertise.expertid && ibmweb.config.expertise.displaytype == "one") {
                                            for (var i = 0; i < ibmweb.config.expertise.placeat.length; i++) {
                                                var _2d3 = new ext.expertise.Six2V17Widget();
                                                _2d3.startup(i);
                                            }
                                        } else {
                                            return;
                                        }
                                    } else {
                                        var _2d3 = new ext.expertise.Six2V17Widget();
                                        _2d3.startup();
                                    }
                                });
                            });
                        } else {
                            if (ibmweb.config.config == "www") {
                                dojo["require"]("ext.expertise.AbstractExpertiseWidget");
                                dojo["require"]("ext.expertise.WWWExpertiseWidget");
                                ibmweb.queue.push(function () {
                                    return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.WWWExpertiseWidget) == "function";
                                }, function () {
                                    var _2d4 = new ext.expertise.WWWExpertiseWidget();
                                    _2d4.startup();
                                });
                            } else {
                                if (ibmweb.config.config == "w3") {
                                    dojo["require"]("ext.expertise.AbstractExpertiseWidget");
                                    dojo["require"]("ext.expertise.W3ExpertiseWidget");
                                    ibmweb.queue.push(function () {
                                        return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.W3ExpertiseWidget) == "function";
                                    }, function () {
                                        var _2d5 = new ext.expertise.W3ExpertiseWidget();
                                        _2d5.startup();
                                    });
                                }
                            }
                        }
                    }
                }
            } else {
                if (ibmweb.config.siteid == "smarterplanet") {
                    dojo["require"]("ext.expertise.AbstractExpertiseWidget");
                    dojo["require"]("ext.expertise.ExternalExpertiseWidget");
                    ibmweb.queue.push(function () {
                        return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.ExternalExpertiseWidget) == "function";
                    }, function () {
                        var _2d6 = new ext.expertise.ExternalExpertiseWidget();
                        _2d6.startup();
                    });
                } else {
                    if (ibmweb.config.siteid == "ibm100") {
                        dojo["require"]("ext.expertise.AbstractExpertiseWidget");
                        dojo["require"]("ext.expertise.IBM100ExpertiseWidget");
                        ibmweb.queue.push(function () {
                            return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.IBM100ExpertiseWidget) == "function";
                        }, function () {
                            var _2d7 = new ext.expertise.IBM100ExpertiseWidget();
                            _2d7.startup();
                        });
                    } else {
                        if (ibmweb.config.config == "www") {
                            dojo["require"]("ext.expertise.AbstractExpertiseWidget");
                            dojo["require"]("ext.expertise.WWWExpertiseWidget");
                            ibmweb.queue.push(function () {
                                return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.WWWExpertiseWidget) == "function";
                            }, function () {
                                var _2d8 = new ext.expertise.WWWExpertiseWidget();
                                _2d8.startup();
                            });
                        } else {
                            if (ibmweb.config.config == "w3") {
                                dojo["require"]("ext.expertise.AbstractExpertiseWidget");
                                dojo["require"]("ext.expertise.W3ExpertiseWidget");
                                ibmweb.queue.push(function () {
                                    return typeof (ext) == "object" && typeof (ext.expertise) == "object" && typeof (ext.expertise.W3ExpertiseWidget) == "function";
                                }, function () {
                                    var _2d9 = new ext.expertise.W3ExpertiseWidget();
                                    _2d9.startup();
                                });
                            }
                        }
                    }
                }
            }
        }
    });
}
if (!dojo._hasResource["ibmweb.external.noticechoice"]) {
    dojo._hasResource["ibmweb.external.noticechoice"] = true;
    dojo.provide("ibmweb.external.noticechoice");
    dojo.declare("ibmweb.external.noticechoice", [ibmweb.dynnav._module], {
        init: function () {
            if ( !! ibmweb.meta.nc_pagedesc) {
                dojo["require"]("ext.noticechoice.nc");
                ibmweb.queue.push(function () {
                    return typeof (ext) == "object" && typeof (ext.noticechoice) == "object" && typeof (ext.noticechoice.nc.init) == "function";
                }, function () {
                    ibmweb.queue.waitForElement("ibm-top", function () {
                        ext.noticechoice.nc.init();
                    }, true);
                });
            }
            return !!ibmweb.meta.nc_questiontype && !! ibmweb.meta.nc_pagedesc;
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav._base-all"]) {
    dojo._hasResource["ibmweb.dynnav._base-all"] = true;
    dojo.provide("ibmweb.dynnav._base-all");
}
if (!dojo._hasResource["ibmweb.dynnav"]) {
    dojo._hasResource["ibmweb.dynnav"] = true;
    dojo.provide("ibmweb.dynnav");
    if (typeof (window.PMM) == "undefined" || window.PMM == null) {
        window.PMM = {
            isLoaded: false
        };
    }
    dojo.mixin(ibmweb.dynnav, {
        disabledCountries: ["xxilhe"],
        _modules: {},
        isDOMLoaded: false,
        PMM: {},
        isDataLoaded: false,
        isValid: true,
        _bundleCallbacks: [],
        _bundleParams: {},
        _bundleBlock: [],
        init: function () {
            if (!ibmweb.meta.lc || !ibmweb.meta.cc) {
                return;
            }
            if (dojo.indexOf(this.disabledCountries, ibmweb.meta.cpi) != -1) {
                return;
            }
            dojo.io.script.get({
                url: ibmweb.config.dataUrl + ibmweb.meta.cpi + "-" + ibmweb.meta.encoding + ".js",
                checkString: "ibmweb.dynnav.__checkString",
                timeout: ibmweb.config.timeout,
                error: function (_2da, _2db) {
                    ibmweb.dynnav.dataCallback = function () {};
                    ibmweb.dynnav._onError();
                    ibmweb.dynnav.isDataLoaded = true;
                }
            });
            if (ibmweb.meta.cc == "us") {
                if (ibmweb.meta.ibm_pageattributes.indexOf("flashlead") > -1) {
                    dojo.query("#ibm-esite-link").style("display", "none");
                }
            }
            ibmweb.config.parseMetaTags();
            var _2dc = false;
            for (var key in ibmweb.config.lazyload) {
                if (ibmweb.config.get([key, "enabled"])) {
                    dojo["require"](ibmweb.config.lazyload[key]);
                    _2dc = true;
                }
            }
            var _2dd = function () {
                var tmp = dojo.mixin({}, ibmweb.external, ibmweb.dynnav);
                for (var key in tmp) {
                    if (key.substring(0, 1) != "_" && typeof (tmp[key].prototype) != "undefined" && !! tmp[key].prototype.isA_Module) {
                        var _2de = new tmp[key]();
                        if (_2de.init()) {
                            this._modules[key] = _2de;
                        }
                    }
                }
                this.executeBundleCall();
                dojo.addOnLoad(function () {
                    ibmweb.dynnav._initWithDOM();
                });
            };
            if (_2dc) {
                dojo.addOnLoad(dojo.hitch(this, _2dd));
            } else {
                _2dd.call(this);
            }
        },
        registerModule: function (_2df) {
            if (_2df.init()) {
                this._modules[_2df.declaredClass] = _2df;
            }
        },
        isServiceEnabled: function (_2e0) {
            return ibmweb.config.dynnav.enabled && !! ibmweb.config.get([_2e0, "enabled"]);
        },
        getCallback: function (_2e1, _2e2) {
            return ibmweb.callback.createJSONPWrapper(null, function () {
                var args = arguments;
                ibmweb.queue.push(function () {
                    return ibmweb.dynnav.isDataLoaded && ibmweb.dynnav.isDOMLoaded;
                }, function () {
                    try {
                        _2e1[_2e2].apply(_2e1, args);
                    } catch (e) {}
                });
            });
        },
        fetchData: function (id, _2e3, _2e4, _2e5) {
            ibmweb.queue.push(function () {
                return ibmweb.dynnav._bundleCallbacks.length == 0;
            }, function () {
                ibmweb.dynnav.addBundleCallback(id, _2e3, _2e4, _2e5);
                ibmweb.dynnav.executeBundleCall();
            });
        },
        addBundleCallback: function (id, _2e6, _2e7, _2e8) {
            var func = this.getCallback(_2e6, _2e7);
            this._bundleCallbacks.push(id + ":" + func);
            dojo.mixin(this._bundleParams, _2e8);
            return func;
        },
        blockBundle: function (sid) {
            this._bundleBlock[sid] = 1;
        },
        releaseBundle: function (sid) {
            var i = dojo.indexOf(this._bundleBlock, sid);
            if (i != -1) {
                this._bundleBlock.splice(i, 1);
            }
        },
        isBundleBlocked: function () {
            return this._bundleBlock.length != 0;
        },
        executeBundleCall: function () {
            ibmweb.queue.push(function () {
                return !ibmweb.dynnav.isBundleBlocked();
            }, function () {
                var _2e9 = ibmweb.dynnav._bundleCallbacks.join("@");
                if (!_2e9) {
                    return;
                }
                var _2ea = dojo.mixin({
                    cc: ibmweb.meta.cc,
                    lc: ibmweb.meta.lc,
                    format: "json",
                    ts: ((new Date).getTime())
                }, ibmweb.dynnav._bundleParams, {
                    cb: _2e9
                });
                var ip = /ip=([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/.exec(document.location.search);
                var _2eb = /domain=([a-zA-Z\.\-0-9]+)/.exec(document.location.search);
                if (ip && _2eb) {
                    _2ea.ip = ip[1];
                    _2ea.domain = _2eb[1];
                }
                dojo.io.script.get({
                    url: ibmweb.config.dynNavBaseUrl,
                    content: _2ea,
                    timeout: ibmweb.config.timeout,
                    error: function (_2ec, _2ed) {
                        var cb = dojo.getObject("args.content.cb", false, _2ed);
                        if (cb) {
                            var cbs = cb.split("@");
                            for (var i = 0, j = cbs.length; i < j; i++) {
                                var _2ee = cbs[i].split(":");
                                if (_2ee.length == 2 && typeof (window[_2ee[1]]) == "function") {
                                    window[_2ee[1]].call(window);
                                    window[_2ee[1]] = function () {};
                                }
                            }
                        }
                    }
                });
                ibmweb.dynnav._bundleParams = {};
                ibmweb.dynnav._bundleCallbacks = [];
            });
        },
        _initWithDOM: function () {
            this.isDOMLoaded = true;
            this.isValid = dojo.byId("ibm-top") && dojo.byId("ibm-masthead") && dojo.byId("ibm-footer") && (dojo.byId("ibm-content") || dojo.query("div.lotusFrame")[0]);
            if (!this.isValid && ibmweb.w3) {
                this.isValid = true;
            }
            if (!this.isValid) {
                return;
            }
            for (var _2ef in this._modules) {
                if (typeof (this._modules[_2ef]) == "object") {
                    try {
                        this._modules[_2ef].onLoad();
                    } catch (e) {}
                }
            }
        },
        _initWithData: function (data) {
            if (!this.isDOMLoaded) {
                dojo.addOnLoad(function () {
                    ibmweb.dynnav._initWithData(data);
                });
                return;
            }
            if (!this.isValid) {
                return;
            }
            for (var _2f0 in this._modules) {
                if (typeof (this._modules[_2f0]) == "object") {
                    try {
                        this._modules[_2f0].onData(data);
                    } catch (e) {}
                }
            }
        },
        _onError: function () {
            for (var _2f1 in this._modules) {
                if (typeof (this._modules[_2f1]) == "object") {
                    try {
                        this._modules[_2f1].onError();
                    } catch (e) {}
                }
            }
        },
        dataCallback: function (data) {
            data.isLoaded = true;
            ibmweb.dynnav.__checkString = true;
            ibmweb.dynnav.PMM = data;
            if (!window.PMM.isLoaded && !ibmweb.info.v16) {
                window.PMM = data;
            }
            ibmweb.dynnav.isDataLoaded = true;
            dojo.addOnLoad(function () {
                ibmweb.dynnav._initWithData(data);
            });
        },
        isModuleLoaded: function (_2f2) {
            return !!ibmweb.dynnav._modules[_2f2];
        },
        getLoadedModule: function (_2f3) {
            return ibmweb.dynnav._modules[_2f3];
        },
        executeOnModule: function (_2f4, _2f5, _2f6) {
            if ( !! ibmweb.dynnav._modules[_2f4] && typeof (ibmweb.dynnav._modules[_2f4][_2f5]) == "function") {
                if ( !! _2f6) {
                    ibmweb.dynnav._modules[_2f4][_2f5].apply(ibmweb.dynnav._modules[_2f4], _2f6);
                } else {
                    ibmweb.dynnav._modules[_2f4][_2f5].apply(ibmweb.dynnav._modules[_2f4]);
                }
            }
        }
    });
    ibmCommonDynamicNavShowResults = function () {};
}
if (!dojo._hasResource["dojo.regexp"]) {
    dojo._hasResource["dojo.regexp"] = true;
    dojo.provide("dojo.regexp");
    dojo.getObject("regexp", true, dojo);
    dojo.regexp.escapeString = function (str, _2f7) {
        return str.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function (ch) {
            if (_2f7 && _2f7.indexOf(ch) != -1) {
                return ch;
            }
            return "\\" + ch;
        });
    };
    dojo.regexp.buildGroupRE = function (arr, re, _2f8) {
        if (!(arr instanceof Array)) {
            return re(arr);
        }
        var b = [];
        for (var i = 0; i < arr.length; i++) {
            b.push(re(arr[i]));
        }
        return dojo.regexp.group(b.join("|"), _2f8);
    };
    dojo.regexp.group = function (_2f9, _2fa) {
        return "(" + (_2fa ? "?:" : "") + _2f9 + ")";
    };
}
if (!dojo._hasResource["dojo.cookie"]) {
    dojo._hasResource["dojo.cookie"] = true;
    dojo.provide("dojo.cookie");
    dojo.cookie = function (name, _2fb, _2fc) {
        var c = document.cookie;
        if (arguments.length == 1) {
            var _2fd = c.match(new RegExp("(?:^|; )" + dojo.regexp.escapeString(name) + "=([^;]*)"));
            return _2fd ? decodeURIComponent(_2fd[1]) : undefined;
        } else {
            _2fc = _2fc || {};
            var exp = _2fc.expires;
            if (typeof exp == "number") {
                var d = new Date();
                d.setTime(d.getTime() + exp * 24 * 60 * 60 * 1000);
                exp = _2fc.expires = d;
            }
            if (exp && exp.toUTCString) {
                _2fc.expires = exp.toUTCString();
            }
            _2fb = encodeURIComponent(_2fb);
            var _2fe = name + "=" + _2fb,
                _2ff;
            for (_2ff in _2fc) {
                _2fe += "; " + _2ff;
                var _300 = _2fc[_2ff];
                if (_300 !== true) {
                    _2fe += "=" + _300;
                }
            }
            document.cookie = _2fe;
        }
    };
    dojo.cookie.isSupported = function () {
        if (!("cookieEnabled" in navigator)) {
            this("__djCookieTest__", "CookiesAllowed");
            navigator.cookieEnabled = this("__djCookieTest__") == "CookiesAllowed";
            if (navigator.cookieEnabled) {
                this("__djCookieTest__", "", {
                    expires: -1
                });
            }
        }
        return navigator.cookieEnabled;
    };
}
if (!dojo._hasResource["ibmweb.legacy"]) {
    dojo._hasResource["ibmweb.legacy"] = true;
    dojo.provide("ibmweb.legacy");
    if (typeof (ibmCommon) != "object") {
        ibmCommon = {};
    }
    if (typeof (ibmCommon.data) != "object") {
        ibmCommon.data = {};
    }
    ibmCommon.data.provide = ibmweb.data.provide;
    dojo.addOnLoad(function () {
        if (ibmweb.info.v17 && !document.getElementById("ibm-print-masthead") && !! dojo.byId("ibm-masthead")) {
            dojo.place("<img src=\"" + ibmweb.config.imageUrl + "t/ibm_logo_print.png\" width=\"43\" height=\"15\" id=\"ibm-print-masthead\" alt=\"IBM Print\" />", "ibm-top", "first");
        }
    });
    (function () {
        var dc = document.cookie;
        var _301 = "ibmSurvey=";
        var _302 = dc.indexOf(_301);
        var now = new Date();
        if (_302 == -1 || (_302 > 0 && dc.indexOf("; " + _301) == -1)) {
            if (window.location.href.indexOf(".ibm.com") > 0) {
                document.cookie = _301 + now.getTime().toString() + "; path=/; domain=.ibm.com";
            }
        }
    })();
    if (typeof (encodeURIComponent) != "function") {
        encodeURIComponent = escape;
    }
    if (typeof (decodeURIComponent) != "function") {
        decodeURIComponent = unescape;
    }
    dojo.addOnLoad(function () {
        if (ibmweb.meta.encoding != "utf8") {
            dojo.query("#ibm-search-form input[name=\"en\"][value=\"utf\"]").orphan();
        }
    });
    var ibmStats = ibmStats || {};
    if ( !! ibmStats.event) {
        ibmStats.event = function (_303) {
            ibmweb.queue.push(function () {
                return typeof (ibmStats.loaded) != "undefined";
            }, function () {
                ibmStats.event(_303);
            });
        };
    }
    if (document.cookie.indexOf("ipcInfo=") == -1 && document.cookie.indexOf("lenovoPrefs=") != -1 && !! window && !! window.location && String(window.location.hostname).toLowerCase().indexOf("ibm.com") != -1) {
        document.cookie = "ipcInfo=" + escape("cc=;lc=") + "; path=/; domain=.ibm.com";
        if (document.cookie.indexOf("ipcInfo=") != -1) {
            if (typeof ibmCommonCookie == "undefined") {
                document.write("<scr", "ipt type=\"text/javascript\" src=\"//www.ibm.com/common/cookie/cookie.js\"></scr", "ipt>");
            }
            document.write("<scr", "ipt type=\"text/javascript\" src=\"//www.ibm.com/common/ocaiset.js\"></scr", "ipt>");
        }
    }
    dojo.addOnLoad(function () {
        dojo.cookie("cmTPSet", null, {
            expires: -1,
            domain: ".ibm.com",
            path: "/"
        });
        dojo.cookie("sauidp", null, {
            expires: -1,
            domain: ".ibm.com",
            path: "/"
        });
    });
    if (dojo.isOpera) {
        dojo.addOnLoad(function () {
            if (dojo.byId("ibm-leadspace-head")) {
                dojo.byId("ibm-leadspace-head").style.marginTop = "0px !important";
            }
        });
    }
    dojo.addOnLoad(function () {
        if (ibmweb.meta.cpi == "roro" || ibmweb.meta.cpi == "plpl" || ibmweb.meta.cpi == "rssr" || ibmweb.meta.cpi == "ilhe") {
            var url = dojo.config.modulePaths ? dojo.config.modulePaths.ibmweb.substr(0, dojo.config.modulePaths.ibmweb.indexOf("js/dojo/")) + "v17/css/" : "/common/v17/css/";
            dojo.create("link", {
                type: "text/css",
                title: "www",
                rel: "stylesheet",
                href: url + "font-replacement.css"
            }, dojo.query("head")[0]);
        }
    });
    if (dojo.isIE < 7) {
        dojo.addOnLoad(function () {
            var node = dojo.byId("ibm-leadspace-body");
            if (node) {
                var _304 = dojo.style(node, "backgroundImage");
                if (_304.indexOf(".png") > -1) {
                    var _304 = _304.substr(4);
                    _304 = _304.substr(0, _304.length - 1);
                    node.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + _304 + ", sizingMethod=crop);";
                    dojo.style(node, "backgroundImage", "none");
                }
            }
        });
    }
    if (dojo.version.major <= 1 && dojo.version.minor < 4 && dojo.isIE) {
        var origAddOnLoad = dojo.addOnLoad;
        dojo.addOnLoad = function () {
            var args = arguments;
            if (document.readyState == "complete") {
                dojo.addOnLoad = origAddOnLoad;
                dojo.addOnLoad.apply(dojo, args);
            } else {
                setTimeout(function () {
                    dojo.addOnLoad.apply(dojo, args);
                }, 10);
            }
        };
    }
}
if (!dojo._hasResource["ibmweb.truste"]) {
    dojo._hasResource["ibmweb.truste"] = true;
    dojo.provide("ibmweb.truste");
    if (ibmweb.config.config === "www") {
        ibmweb.truste.enabled = function () {};
        ibmweb.truste.decision = function () {};
        var id = ibmweb.queue.push(function () {
            return typeof (truste) != "undefined";
        }, function () {
            ibmweb.truste.enabled = function () {
                return true;
            };
            ibmweb.truste.decision = function (_305, dump) {
                if (!_305) {
                    _305 = "ibm.com";
                }
                var json = truste.cma.callApi("getConsentDecision", _305);
                return dump ? json : json.consentDecision;
            };
            var json = "{\"PrivacyManagerAPI\":{\"action\":\"getConsent\",\"timestamp\":" + new Date().getTime() + "}}";
            window.top.postMessage(json, "*");
            var _306 = function () {
                dojo.publish("/ibm/truste-api/update");
            };
            if (window.addEventListener) {
                window.addEventListener("message", _306, false);
            } else {
                if (window.attachEvent) {
                    window.attachEvent("onmessage", _306);
                }
            }
        });
        dojo.addOnLoad(function () {
            var _307 = ["gb", "fr", "de", "uk", "es", "nl", "gr", "at", "hu", "lv", "lt", "pl", "se", "bg", "dk", "fi", "cz", "ee", "pt", "be", "cy", "no", "sk", "ie", "it", "ro", "si", "ch"];
            if (dojo.indexOf(_307, ibmweb.meta.cc) == -1 || typeof (ibmStats) == "undefined") {
                ibmweb.queue.remove(id);
                ibmweb.truste.enabled = function () {
                    return false;
                };
                dojo.publish("/ibm/truste-api/disabling");
            }
        });
    }
}
if (!dojo._hasResource["ibmweb._base"]) {
    dojo._hasResource["ibmweb._base"] = true;
    dojo.provide("ibmweb._base");
}
if (!dojo._hasResource["ibmweb.bitly"]) {
    dojo._hasResource["ibmweb.bitly"] = true;
    dojo.provide("ibmweb.bitly");
    dojo.declare("ibmweb.bitly", [], {
        url: null,
        onSuccess: null,
        onError: null,
        shorturl: null,
        rawData: null,
        constructor: function (_308) {
            dojo.mixin(this, _308);
        },
        shorten: function () {
            if (!this.url) {
                this.url = location.href;
            }
            dojo.io.script.get({
                url: "http://api.bit.ly/v3/shorten?login=" + ibmweb.config.bitly.login + "&apiKey=" + ibmweb.config.bitly.key + "&longUrl=" + escape(this.url) + "&format=json&callback=" + ibmweb.callback.createJSONPWrapper(this, "_callback"),
                timeout: ibmweb.config.bitly.timeout,
                error: dojo.hitch(this, function (_309, _30a) {
                    this._error();
                })
            });
        },
        _callback: function (data) {
            if (!data || !data.status_code || !data.status_code == 200) {
                this._error();
            }
            this.shorturl = data.data.url;
            this.rawData = data;
            if (this.onSuccess) {
                this.onSuccess(data.data.url);
            }
        },
        _error: function () {
            this.shorturl = this.url;
            if (this.onError) {
                this.onError(this.url);
            } else {
                if (this.onSuccess) {
                    this.onSuccess(this.url);
                }
            }
        }
    });
}
if (!dojo._hasResource["ibmweb.sbs"]) {
    dojo._hasResource["ibmweb.sbs"] = true;
    dojo.provide("ibmweb.sbs");
    (function () {
        var _30b = {
            "cc": "us",
            "lc": "en",
            "encoding": "utf8",
            "element": "ibm-sbs-icons",
            "loadManually": false,
            init: function (_30c) {
                if (document.getElementsByTagName("head").length != 1) {
                    return;
                }
                if ( !! _30c) {
                    if ( !! _30c.cc) {
                        this.cc = _30c.cc;
                    }
                    if ( !! _30c.lc) {
                        this.lc = _30c.lc;
                    }
                    if ( !! _30c.encoding) {
                        this.encoding = _30c.encoding;
                    }
                    if ( !! _30c.element) {
                        this.element = _30c.element;
                    }
                    if ( !! _30c.loadManually) {
                        this.loadManually = _30c.loadManually;
                    }
                }
                if (!this.loadManually) {
                    var _30d = document.createElement("link");
                    _30d.href = "//www.ibm.com/common/v16/css/sbs.css";
                    _30d.rel = "stylesheet";
                    _30d.type = "text/css";
                    document.getElementsByTagName("head")[0].appendChild(_30d);
                    var _30e = document.createElement("script");
                    _30e.src = "//www.ibm.com/common/js/sbs/" + this.cc + "/" + this.lc + "/" + this.cc + this.lc + "-" + this.encoding + ".js";
                    _30e.type = "text/javascript";
                    document.getElementsByTagName("head")[0].appendChild(_30e);
                }
            },
            getUrl: function () {
                return location.href;
            },
            render: function (data, _30f) {
                if (!_30f) {
                    _30f = this.element;
                }
                if (typeof (_30f) == "string") {
                    _30f = document.getElementById(_30f);
                }
                if (_30f == null) {
                    return;
                }
                if (_30f.childNodes.length != 0) {
                    return;
                }
                var _310 = this.getUrl();
                if (document.getElementsByTagName("title").length == 0) {
                    return;
                }
                var _311 = document.getElementsByTagName("title")[0].innerHTML;
                var ul = document.createElement("ul");
                for (var i = 0, j = data.length; i < j; i++) {
                    var $i = data[i];
                    if ($i.id == "print" || $i.id == "w3-print") {
                        var li = this.getPTPLink($i);
                        if (li) {
                            ul.appendChild(li);
                        }
                        continue;
                    }
                    if ($i.id == "email" || $i.id == "w3-email") {
                        var li = this.getETPLink($i);
                        if (li) {
                            ul.appendChild(li);
                        }
                        continue;
                    }
                    if (!$i.url) {
                        continue;
                    }
                    $i.targeturl = $i.url.replace(/%\{URL\}/g, encodeURIComponent(_310)).replace(/%\{TITLE\}/g, encodeURIComponent(_311));
                    var a = this.createLink($i);
                    var li = document.createElement("li");
                    li.appendChild(a);
                    ul.appendChild(li);
                }
                _30f.appendChild(ul);
                _30f.onmouseover = function () {
                    _30f.className += " ibm-active";
                };
                _30f.onmouseout = function () {
                    _30f.className = _30f.className.replace(/\s+ibm-active/, "");
                };
                _30f.style.display = "block";
            },
            createLink: function ($i) {
                var a = dojo.create("a", {
                    className: "ibm-share-" + $i.id,
                    title: $i.title,
                    innerHTML: $i.title,
                    href: ( !! $i.targeturl) ? $i.targeturl : "#",
                    rel: $i.id,
                    onmousedown: function () {
                        this.className += " ibm-share-active-" + this.rel;
                    },
                    onmouseout: function () {
                        this.className = this.className.replace(/\s+ibm-share-active-.*/, "");
                    },
                    onclick: function (e) {
                        ibmweb.sbs.clickHandler(e, $i);
                    }
                });
                if (document.getElementById("ibm-com").className.indexOf("dijit_a11y") != -1) {
                    a.innerHTML = "";
                    var img = document.createElement("img");
                    img.className = "ibm-access";
                    img.src = ibmweb.config.imageUrl + "icons/sprites-pt-all.png";
                    img.alt = $i.title;
                    a.appendChild(img);
                }
                return a;
            },
            clickHandler: function () {
                return true;
            },
            getPTPLink: function () {
                return null;
            },
            getETPLink: function () {
                return null;
            }
        };
        ibmweb.sbs = _30b;
    })();
    ibmweb.sbs.getUrl = ibmweb.util.getUrl;
    ibmweb.sbs.clickHandler = function (_312, data) {
        if (data.id == "ibm-dogear") {
            _312.preventDefault();
            window.open(data.targeturl, data.title, "width=600,height=550");
            return false;
        }
        if (!data.url) {
            return;
        }
        _312.preventDefault();
        var a = _312.target;
        ibmweb.util.statsHelper({
            "ibmEV": "external link",
            "ibmEvAction": a.href,
            "ibmEvGroup": "SBS icons",
            "ibmEvName": "sbs-" + a.rel
        });
        dojo.style(a, "cursor", "wait");
        if (dojo.hasClass(a, "clicked")) {
            return;
        }
        dojo.addClass(a, "clicked");
        if (data && data.id == "stumble") {
            var url = data.url.replace(/%\{URL\}/g, encodeURIComponent(document.location.href)).replace(/%\{TITLE\}/g, encodeURIComponent(ibmweb.meta.title));
            window.location = url;
            return true;
        }
        var b = new ibmweb.bitly({
            url: ibmweb.util.getUrl(),
            onSuccess: function (_313) {
                dojo.style(a, "cursor", "auto");
                dojo.removeClass(a, "clicked");
                var url = data.url.replace(/%\{URL\}/g, encodeURIComponent(_313)).replace(/%\{TITLE\}/g, encodeURIComponent(ibmweb.meta.title));
                setTimeout(function () {
                    window.location = url;
                }, 0);
            }
        });
        b.shorten();
        return true;
    };
    ibmweb.sbs.getETPLink = function (data) {
        if (ibmweb.config.sbs.email != true) {
            return null;
        }
        var a = this.createLink(data);
        dojo.connect(a, "onclick", null, function (_314) {
            dojo.stopEvent(_314);
            var link = _314.target;
            ibmweb.util.statsHelper({
                "ibmEV": "external link",
                "ibmEvAction": link.href,
                "ibmEvGroup": "SBS icons",
                "ibmEvName": "sbs-email"
            });
            ibmweb.dynnav.executeOnModule("emailthispage", "showForm", []);
            return false;
        });
        var li = document.createElement("li");
        li.appendChild(a);
        return li;
    };
    ibmweb.sbs.getPTPLink = function (data) {
        if (ibmweb.config.sbs.print != true) {
            return null;
        }
        var a = this.createLink(data);
        dojo.connect(a, "onclick", null, function (_315) {
            dojo.stopEvent(_315);
            var link = _315.target;
            ibmweb.util.statsHelper({
                "ibmEV": "external link",
                "ibmEvAction": link.href,
                "ibmEvGroup": "SBS icons",
                "ibmEvName": "sbs-print"
            });
            javascript: print();
            return false;
        });
        var li = document.createElement("li");
        li.appendChild(a);
        return li;
    };
    ibmweb.sbs.register = function (elem, all) {
        if (!(typeof (ibmweb.dynnav.PMM) == "object" && !! ibmweb.dynnav.PMM.footerToolData)) {
            window.setTimeout(function () {
                ibmweb.sbs.register(elem, all);
            }, 50);
            return;
        }
        if (ibmweb.dynnav.PMM.footerToolData.length == 0) {
            return false;
        }
        ibmweb.sbs.init({
            "cc": ibmweb.meta.cc,
            "lc": ibmweb.meta.lc,
            "encoding": ibmweb.meta.encoding,
            "loadManually": true,
            "element": null
        });
        if (!elem) {
            elem = ".ibm-share-this";
        }
        elem = dojo.query(elem);
        elem.forEach(function (node) {
            ibmweb.sbs.render(ibmweb.dynnav.PMM.footerToolData, node, all);
        });
    };
    dojo.addOnLoad(ibmweb.sbs.register);
}
if (!dojo._hasResource["ibmweb.ribbon"]) {
    dojo._hasResource["ibmweb.ribbon"] = true;
    dojo.provide("ibmweb.ribbon");
    dojo.provide("ibmweb.ribbonSlide");
    dojo.provide("ibmweb.ribbonItem");
    dojo.provide("ibmweb.ribbonItemAbstract");
    dojo.provide("ibmweb.ribbonLeadspace");
    dojo.declare("ibmweb.ribbon", [dijit._Widget, dijit._Templated], {
        columns: 3,
        autoscroll: false,
        freeScroll: false,
        interval: 5000,
        leadNoHomeInterval: 15000,
        _interval: null,
        _intervalHandlers: {
            resize: null,
            onmouseleave: null,
            onmouseenter: null
        },
        rotationCount: 0,
        _rotationCount: 0,
        defaultDuration: 500,
        _isBeingAnimated: false,
        _isBegingAutoscroll: false,
        _isLeadSpace: false,
        _isLeadNoHome: false,
        _scrollableNodeAnimObj: null,
        templateString: "<div class='ibm-container-body' dojoAttachPoint='ribbonContainer'>" + "<a class='ibm-ribbon-prev' dojoAttachPoint='scrollLeftButton' role='button' href='#'></a>" + "<div class='ibm-ribbon-pane' dojoAttachPoint='scrollContainer'>" + "<div class='ibm-ribbon-section' dojoAttachPoint='scrollableNode' role='listbox'></div>" + "</div>" + "<a class='ibm-ribbon-next' dojoAttachPoint='scrollRightButton' role='button' href='#'></a>" + "<div class='ibm-ribbon-nav' dojoAttachPoint='navNode' role='toolbar'></div>" + "</div>",
        constructor: function (_316) {
            this.slides = [];
            this.currentSlideIndex = 0;
            this.originalNode = null;
            this.duration = this.defaultDuration;
            this._durationCopy = this.duration; !! _316 && _316.srcNodeRef && (this.originalNode = _316.srcNodeRef);
        },
        postCreate: function () {
            var self = this;
            if (self.originalNode) {
                dojo.query(".ibm-columns", this.originalNode).forEach(function (_317, _318) {
                    var _319 = null;
                    if (_317.id) {
                        _319 = _317.id;
                    }
                    dojo.query("> *", _317).forEach(function (item, j) {
                        self.addItem(new ibmweb.ribbonItemAbstract({
                            srcNodeRef: item
                        }), _318, _319);
                    });
                });
                if (self.originalNode.id) {
                    self.domNode.id = self.originalNode.id;
                }
            }
            var _31a = this.domNode.parentNode ? dojo.hasClass(this.domNode.parentNode, "ibm-no-rotate") : true;
            if (this._isLeadSpace && !this.checkHome() && !_31a) {
                this._isLeadNoHome = true;
                this.autoscroll = true;
                this.interval = this.leadNoHomeInterval;
            }
        },
        startup: function () {
            if (!dojo.hasClass(this.ribbonContainer.parentNode, "ibm-ribbon-fixed")) {
                var temp = dojo.coords(this.scrollableNode).h;
                var ob = dojo.query("object", this.id);
                if (ob.length > 0) {
                    var max = 0;
                    ob.forEach(function (i) {
                        if (i.height) {
                            if (i.height > max) {
                                max = i.height;
                            }
                        }
                    });
                    if (max > temp) {
                        temp = max;
                    }
                }
                dojo.style(this.scrollContainer, "height", temp + "px");
            }
            dojo.style(this.scrollLeftButton, {
                marginTop: (dojo.coords(this.scrollContainer).h / 2) - 12 + "px"
            });
            dojo.style(this.scrollRightButton, {
                marginTop: "-" + ((dojo.coords(this.scrollContainer).h) / 2 + 12) + "px"
            });
            if (ibmweb.meta.cpi == "ilhe" && this._isLeadSpace && this._isLeadNoHome) {
                var pos = (dojo.window.getBox().w - 1050) / 2;
                dojo.style(this.scrollLeftButton, {
                    left: "auto",
                    right: (pos < 1 ? 1 : pos) + "px"
                });
                dojo.style(this.scrollRightButton, {
                    right: "auto",
                    left: (pos < 1 ? 1 : pos) + "px"
                });
            }
            dojo.addClass(this.scrollLeftButton, "ibm-disabled");
            if (this.slideCount() <= 1) {
                dojo.addClass(this.scrollRightButton, "ibm-disabled");
                dojo.query(this.navNode).orphan();
            } else {
                dojo.query(":first-child", this.navNode).addClass("ibm-active");
                dojo.query(":first-child", this.navNode)[0].tabIndex = 0;
                dojo.connect(this.scrollLeftButton, "onclick", dojo.hitch(this, this.slideLeft));
                dojo.connect(this.scrollRightButton, "onclick", dojo.hitch(this, this.slideRight));
            }
            if (this.ribbonContainer.parentNode.id != "ibm-promotion-module") {
                dojo.query("div[role=\"document\"] a, div[role=\"document\"] input, div[role=\"document\"]", this.scrollableNode).forEach(function (n) {
                    n.tabIndex = -1;
                });
                var _31b = dojo.query("div[role=\"option\"]", this.scrollableNode);
                if (_31b.length > 0) {
                    dojo.query("div[role=\"document\"] a, div[role=\"document\"] input, div[role=\"document\"]", _31b[0]).forEach(function (n) {
                        n.tabIndex = 0;
                    });
                }
            }
            ibmweb.queue.push(function () {
                return ibmweb.dynnav.isDataLoaded;
            }, dojo.hitch(this, function () {
                dojo.attr(this.scrollLeftButton, "title", ibmweb.dynnav.PMM.buttonData.prev);
                this.scrollLeftButton.innerHTML = ibmweb.dynnav.PMM.buttonData.prev;
                dojo.attr(this.scrollRightButton, "title", ibmweb.dynnav.PMM.buttonData.next);
                this.scrollRightButton.innerHTML = ibmweb.dynnav.PMM.buttonData.next;
            }));
            if (this.autoscroll) {
                if (!this._isLeadNoHome) {
                    var _31c = this.slides[0].domNode,
                        _31d = dojo.clone(_31c);
                    dojo.addClass(_31d, "ibm-cloned");
                    dojo.removeAttr(_31d, "id");
                    dojo.query("div", _31d).removeAttr("id");
                    dojo.place(_31d, this.scrollableNode);
                }
                var self = this;
                this._interval = setInterval(function () {
                    self.next();
                }, this.interval);
                if (!this.freeScroll) {
                    this._intervalHandlers.onmouseenter = dojo.connect(this.domNode, "onmouseenter", dojo.hitch(this, function () {
                        clearInterval(this._interval);
                    }));
                    this._intervalHandlers.onmouseleave = dojo.connect(this.domNode, "onmouseleave", dojo.hitch(this, function () {
                        clearInterval(this._interval);
                        this._interval = setInterval(function () {
                            self.next();
                        }, this.interval);
                    }));
                    this._intervalHandlers.resize = dojo.connect(window, "resize", dojo.hitch(this, function () {
                        clearInterval(this._interval);
                    }));
                }
            }
            if (ibmweb.info.iDevice) {
                var _31e = 0;
                this.domNode.ontouchstart = function (e) {
                    _31e = e.touches[0].clientX;
                };
                this.domNode.ontouchmove = function (e) {
                    e.preventDefault();
                };
                this.domNode.ontouchend = dojo.hitch(this, function (e) {
                    swipeEnd = e.changedTouches[0].clientX;
                    var diff = swipeEnd - _31e;
                    if (diff < 0) {
                        this.slideRight();
                    } else {
                        if (diff > 0) {
                            this.slideLeft();
                        }
                    }
                });
            }
            dojo.forEach(this.slides, function (w) {
                if (w && !w._started && w.startup) {
                    w.startup();
                }
            });
            this.inherited(arguments);
        },
        addSlide: function (_31f) {
            this.slides.push(_31f);
            dojo.place(_31f.domNode, this.scrollableNode);
            if (!this.scrollableNode.id) {
                this.scrollableNode.id = this.ribbonContainer.id + "_scrollable";
            }
            var _320 = dojo.create("a", {
                href: "#",
                innerHTML: "Show carousel " + this.slides.length,
                "role": "button",
                "aria-controls": this.scrollableNode.id,
                "IbmCarouselIndex": this.slides.length - 1
            }, this.navNode);
            _320.tabIndex = -1;
            dojo.connect(_320, "onclick", dojo.hitch(this, function (_321) {
                if (dojo.hasClass(_321.target, "ibm-ribbon-view")) {
                    slideToIdx = dojo.attr(_321.target.parentNode, "IbmCarouselIndex") * 1;
                } else {
                    slideToIdx = dojo.attr(_321.target, "IbmCarouselIndex") * 1;
                }
                this.slideTo(slideToIdx, _321);
            }));
            dojo.connect(_320, "keypress", dojo.hitch(this, function (_322) {
                if (_322.keyCode == dojo.keys.TAB && !_322.shiftKey) {
                    _322.target.parentNode.lastChild.focus();
                }
                if (_322.keyCode == dojo.keys.TAB && _322.shiftKey) {
                    _322.target.parentNode.firstChild.focus();
                }
                if (_322.keyCode == dojo.keys.DOWN_ARROW || _322.keyCode == dojo.keys.RIGHT_ARROW) {
                    if ( !! _322.target.nextSibling) {
                        dojo.stopEvent(_322);
                        _322.target.nextSibling.focus();
                    } else {
                        dojo.stopEvent(_322);
                        _322.target.parentNode.firstChild.focus();
                    }
                }
                if (_322.keyCode == dojo.keys.UP_ARROW || _322.keyCode == dojo.keys.LEFT_ARROW) {
                    if ( !! _322.target.previousSibling) {
                        dojo.stopEvent(_322);
                        _322.target.previousSibling.focus();
                    } else {
                        dojo.stopEvent(_322);
                        _322.target.parentNode.lastChild.focus();
                    }
                }
                if (_322.keyCode == dojo.keys.ENTER || _322.keyCode == dojo.keys.SPACE || _322.keyCode == 0) {
                    slideToIdx = dojo.attr(_322.target, "IbmCarouselIndex") * 1;
                    this.slideTo(slideToIdx, _322);
                }
            }));
            return _31f;
        },
        _focusSlideContent: function (_323) {
            var _324 = dojo.query("div[role=\"document\"]", this.scrollableNode.childNodes[_323]);
            if (_324[0]) {
                _324[0].focus();
            }
        },
        addItem: function (item, _325, _326) {
            if (_325 == undefined || _325 < 0 || _325 >= this.slides.length) {
                if (_325 && _325 >= this.slides.length) {
                    this.addSlide(new ibmweb.ribbonSlide({
                        pid: _326
                    }));
                }
                if (!_325 && (this.slides.length == 0 || this.slides[this.slides.length - 1].getChildren().length == this.columns)) {
                    this.addSlide(new ibmweb.ribbonSlide({
                        pid: _326
                    }));
                }
                _325 = this.slides.length - 1;
            }
            this.slides[_325].addChild(item);
            return item;
        },
        checkHome: function () {
            if (dojo.attr(this.ribbonContainer.parentNode, "id") == "ibm-leadspace-head" && dojo.query(".ibm-home-page").length > 0) {
                return 1;
            }
            return 0;
        },
        slideTo: function (_327, _328, _329) {
            var that = this;
            _328 && dojo.stopEvent(_328);
            _327 = parseInt(_327, 10);
            if (_327 < 0 || _327 >= this.slides.length || _327 == this.currentSlideIndex) {
                if (_328 && !this.autoscroll) {
                    this._focusSlideContent(this.currentSlideIndex);
                }
                return;
            }
            var _32a = dojo.coords(dojo.query("> *", this.scrollableNode)[0]).w;
            if (_329 && !this.checkHome() && !this._isLeadNoHome) {
                _327 = 0;
                dojo.animateProperty({
                    node: this.scrollableNode,
                    duration: this._durationCopy,
                    properties: {
                        left: _32a * (this.slideCount() - 1) * -1
                    },
                    onEnd: function () {
                        if (_328 && !this.autoscroll) {
                            that._focusSlideContent(_327);
                        }
                    }
                }).play();
            }
            if (this.customSeekAnimation) {
                if (this._isBeingAnimated) {
                    return;
                }
                this._isBeingAnimated = true;
                this.customSeekAnimation(_32a, _327, _329);
                if (_329) {
                    _327 = 0;
                }
            } else {
                if (!dojo._isBodyLtr()) {
                    dojo.style(this.scrollableNode, {
                        right: (_32a * _327 * -1) + "px"
                    });
                } else {
                    if (this._scrollableNodeAnimObj) {
                        this._scrollableNodeAnimObj.stop();
                    }
                    this._scrollableNodeAnimObj = dojo.animateProperty({
                        node: this.scrollableNode,
                        duration: this.duration,
                        properties: {
                            left: _32a * _327 * -1
                        },
                        onEnd: function () {
                            if (_328 && !this.autoscroll) {
                                that._focusSlideContent(_327);
                            }
                        }
                    }).play();
                }
            }
            if (_327 == 0) {
                dojo.addClass(this.scrollLeftButton, "ibm-disabled");
            } else {
                dojo.removeClass(this.scrollLeftButton, "ibm-disabled");
            }
            if (_327 == this.slides.length - 1) {
                dojo.addClass(this.scrollRightButton, "ibm-disabled");
            } else {
                dojo.removeClass(this.scrollRightButton, "ibm-disabled");
            }
            if (this._isBegingAutoscroll && this._isLeadNoHome) {
                var _32b = ibmweb.ribbonLeadspace._widget.scrollLeftButton,
                    _32c = ibmweb.ribbonLeadspace._widget.scrollRightButton;
                if (dojo.isIE < 7) {
                    _32b.style.display = "none";
                    _32c.style.display = "none";
                } else {
                    dojo.forEach([_32b, _32c], function (item) {
                        dojo.anim(item, {
                            opacity: 0
                        }, 250, null, function () {
                            item.style.display = "none";
                        });
                    });
                }
            }
            var _32d = "div[role=\"document\"] a, div[role=\"document\"] input, div[role=\"document\"]";
            if (this.ribbonContainer.parentNode.id != "ibm-promotion-module") {
                dojo.query(_32d, this.scrollableNode).forEach(function (n) {
                    n.tabIndex = -1;
                });
            }
            this.currentSlideIndex = _327;
            if (this.ribbonContainer.parentNode.id != "ibm-promotion-module") {
                dojo.query(_32d, dojo.query("div[role=\"option\"]", this.scrollableNode)[_327]).forEach(function (n) {
                    n.tabIndex = 0;
                });
            }
            var _32e = dojo.query("a.ibm-active", this.navNode);
            if (_32e.length > 0) {
                _32e.removeClass("ibm-active");
                _32e[0].tabIndex = -1;
            }
            dojo.query("a:nth-child(" + (_327 + 1) + ")", this.navNode).addClass("ibm-active");
            dojo.query("a:nth-child(" + (_327 + 1) + ")", this.navNode)[0].tabIndex = 0;
        },
        slideLeft: function (_32f) {
            this.slideTo(this.currentSlideIndex - 1, _32f);
        },
        slideRight: function (_330) {
            this.slideTo(this.currentSlideIndex + 1, _330);
        },
        slideFirst: function () {
            this.slideTo(0);
        },
        slideLast: function () {
            this.slideTo(this.slides.length - 1);
        },
        next: function () {
            if (this.checkHome()) {
                dojo.query(".ibm-cloned").attr("id", "ibm-lead-1");
                var _331 = dojo.query(".ibm-cloned div").attr("widgetId");
                dojo.query(".ibm-cloned div").attr("id", _331);
            }
            if (this.rotationCount > 0 && this.rotationCount == this._rotationCount) {
                this.autoscroll = false;
                this._isBegingAutoscroll = false;
                return false;
            }
            this._isBegingAutoscroll = true;
            if ((this.currentSlideIndex + 1) == this.slideCount()) {
                if (!this.checkHome()) {
                    this.duration = 1;
                }
                this._rotationCount += 1;
                this.slides.length += 1;
                this.slideTo(this.slides.length - 1, null, true);
                this.slides.length -= 1;
                if (!this.checkHome()) {
                    this.currentSlideIndex = -1;
                }
            } else {
                this.slideRight();
                if (!this.checkHome()) {
                    this.duration = this._durationCopy;
                }
            }
        },
        placeAt: function (_332) {
            dojo.place(this.domNode, _332);
        },
        slideCount: function () {
            return this.slides.length;
        },
        setDuration: function (_333) {
            this.duration = _333;
            this._durationCopy = _333;
        },
        hideNavigationDots: function () {
            dojo.query(this.navNode).style("display", "none");
            dojo.query(this.navNode).orphan();
        },
        addRibbonCloseBtn: function () {
            var _334 = "Close";
            if (ibmweb.dynnav.isDataLoaded && ibmweb.config.config == "www") {
                _334 = PMM.buttonData.close;
            }
            if (dojo.byId("ibm-com").className.indexOf("dijit_a11y") != -1) {
                dojo.create("div", {
                    className: "ibm-mm-close",
                    innerHTML: "<span tabindex='0' aria-label='" + _334 + "' role='button' title='" + _334 + "'>&#9650;</span>"
                }, this.ribbonContainer, "last");
            } else {
                dojo.create("div", {
                    className: "ibm-mm-close",
                    innerHTML: "<span tabindex='0' aria-label='" + _334 + "' role='button' title='" + _334 + "'></span>"
                }, this.ribbonContainer, "last");
            }
        }
    });
    dojo.declare("ibmweb.ribbonSlide", [dijit._Widget, dijit._Templated, dijit._Container], {
        pid: null,
        templateString: "<div class='ibm-columns' dojoAttachPoint='containerNode' role='option'></div>",
        postCreate: function () {
            if (this.pid && this.pid !== "") {
                this.containerNode.id = this.pid;
            }
        }
    });
    dojo.declare("ibmweb.ribbonItemAbstract", [dijit._Widget], {
        constructor: function (_335) {
            if (!_335.srcNodeRef) {
                return;
            }
            if (!dojo.attr(_335.srcNodeRef, "role")) {
                dojo.attr(_335.srcNodeRef, "role", "document");
            }
            _335.srcNodeRef.tabIndex = 0;
            if (!_335.enableKeypress || _335.enableKeypress == false) {
                dojo.connect(_335.srcNodeRef, "keypress", this, function (e) {
                    if (e.keyCode == dojo.keys.UP_ARROW || e.keyCode == dojo.keys.LEFT_ARROW || e.keyCode == dojo.keys.DOWN_ARROW || e.keyCode == dojo.keys.RIGHT_ARROW) {
                        e && dojo.stopEvent(e);
                    }
                });
            }
            this.srcNodeRef = dojo.clone(_335.srcNodeRef);
        }
    });
    dojo.declare("ibmweb.ribbonItem", [dijit._Widget, dijit._Templated, dijit._Container], {
        columns: 3,
        templateString: "<div dojoAttachPoint='containerNode' role='option'></div>",
        attributeMap: {
            type: {
                node: "containerNode",
                type: "class"
            },
            content: {
                node: "containerNode",
                type: "innerHTML"
            }
        },
        postCreate: function () {
            switch (parseInt(this.columns)) {
                case 1:
                    this.attr("class", "ibm-col-1-1");
                    break;
                case 3:
                    this.attr("class", "ibm-col-6-2");
                    break;
                case 5:
                    this.attr("class", "ibm-col-5-1");
                    break;
                case 6:
                    this.attr("class", "ibm-col-6-1");
                    break;
                default:
                    this.attr("class", "ibm-col-6-2");
                    break;
            }
        }
    });
    ibmweb.ribbonLeadspace = {
        onWindowResize: function () {
            var temp = dojo.byId("ibm-leadspace-body");
            var _336 = null;
            if (temp) {
                var id = dojo.hasAttr(temp, "widgetid") ? dojo.attr(temp, "widgetid") : null;
                if (id) {
                    _336 = dijit.byId(id);
                } else {
                    return false;
                }
            }
            var _337 = dojo.window.getBox();
            dojo.query("#ibm-leadspace-head > div.ibm-container-body > div.ibm-ribbon-pane")[0].style.width = (_337.w > 1030 ? _337.w : 1030) + "px";
            dojo.query("#ibm-leadspace-head > div.ibm-container-body > div.ibm-ribbon-pane > div.ibm-ribbon-section > div").forEach(function (i) {
                var _338 = _337.w + 30;
                if (_338 < 1030) {
                    _338 = 1030;
                }
                i.style.width = _338 + "px";
            });
            dojo.query("#ibm-leadspace-head > div.ibm-container-body > div.ibm-ribbon-pane > div.ibm-ribbon-section > div > div").forEach(function (i) {
                var _339 = (_337.w + 30 - dojo.coords(i).w) / 2;
                if ((_337.w + 30) < 1030) {
                    _339 = (1030 - dojo.coords(i).w) / 2;
                }
                dojo.style(i, "padding", "0 " + _339 + "px");
                i.style.height = "100%";
            });
            var _33a = dojo.query("#ibm-leadspace-head > div.ibm-container-body > div.ibm-ribbon-pane > div.ibm-ribbon-section")[0];
            if (!_33a.style.left || _33a.style.left == "0px") {} else {
                var dim = _337.w;
                if (dim < 1000) {
                    dim = 1000;
                }
                _33a.style.left = "-" + ((_336.currentSlideIndex * dim) + (_336.currentSlideIndex * 30)) + "px";
            }
            if (ibmweb.ribbonLeadspace._widget) {
                var pos = (_337.w - 1050) / 2;
                if (ibmweb.meta.cpi == "ilhe") {
                    ibmweb.ribbonLeadspace._widget.scrollLeftButton.style.right = (pos < 1 ? 1 : pos) + "px";
                } else {
                    ibmweb.ribbonLeadspace._widget.scrollLeftButton.style.left = (pos < 1 ? 1 : pos) + "px";
                }
                if (dojo.isIE < 8) {
                    if (ibmweb.meta.cpi == "ilhe") {
                        ibmweb.ribbonLeadspace._widget.scrollRightButton.style.left = (pos < 1 ? 5 : pos) + "px";
                    } else {
                        ibmweb.ribbonLeadspace._widget.scrollRightButton.style.right = (pos < 1 ? 5 : pos) + "px";
                    }
                } else {
                    if (ibmweb.meta.cpi == "ilhe") {
                        ibmweb.ribbonLeadspace._widget.scrollRightButton.style.left = (pos < 1 ? (-1) * (_337.w - 988) : pos) + "px";
                    } else {
                        ibmweb.ribbonLeadspace._widget.scrollRightButton.style.right = (pos < 1 ? (-1) * (_337.w - 988) : pos) + "px";
                    }
                }
            }
        },
        arrowsToggle: {
            generic: function (x) {
                var _33b = ibmweb.ribbonLeadspace._widget.scrollLeftButton;
                var _33c = ibmweb.ribbonLeadspace._widget.scrollRightButton;
                switch (x) {
                    case "show":
                        if (dojo.isIE < 7) {
                            _33b.style.display = "block";
                            _33c.style.display = "block";
                        } else {
                            dojo.forEach([_33b, _33c], function (item) {
                                dojo.style(item, {
                                    opacity: "0",
                                    display: "block"
                                });
                                dojo.anim(item, {
                                    opacity: 1
                                }, 300, null, function () {
                                    if (ibmweb.ribbonLeadspace.arrowsToggle._stat != "show") {
                                        ibmweb.ribbonLeadspace.arrowsToggle.generic("hide");
                                    }
                                });
                            });
                        }
                        break;
                    case "hide":
                        if (dojo.isIE < 7) {
                            _33b.style.display = "none";
                            _33c.style.display = "none";
                        } else {
                            dojo.forEach([_33b, _33c], function (item) {
                                dojo.anim(item, {
                                    opacity: 0
                                }, 250, null, function () {
                                    item.style.display = "none";
                                    if (ibmweb.ribbonLeadspace.arrowsToggle._stat != "hide") {
                                        ibmweb.ribbonLeadspace.arrowsToggle.generic("show");
                                    }
                                });
                            });
                        }
                        break;
                }
            },
            show: function () {
                this.ribbonLeadspace.arrowsToggle._stat = "show";
                this.ribbonLeadspace.arrowsToggle.generic("show");
            },
            hide: function () {
                this.ribbonLeadspace.arrowsToggle._stat = "hide";
                this.ribbonLeadspace.arrowsToggle.generic("hide");
            }
        },
        init: function () {
            var _33d = new ibmweb.ribbon({
                srcNodeRef: dojo.query("#ibm-leadspace-head.ibm-ribbon > div#ibm-leadspace-body.ibm-container-body")[0],
                _isLeadSpace: true,
                customSeekAnimation: function (_33e, _33f, _340) {
                    if (_340 && this._isLeadNoHome) {
                        _33f = 0;
                        this.currentSlideIndex = -1;
                    }
                    switch (this.currentSlideIndex) {
                        case 1:
                            var _341 = dojo.query("#ibm-lead-2 div.ibm-col-1-1")[0];
                            break;
                        case 2:
                            var _341 = dojo.query("#ibm-lead-3 div.ibm-col-1-1")[0];
                            break;
                        default:
                            var _341 = dojo.query("#ibm-lead-1 div.ibm-col-1-1")[0];
                    }
                    var _342 = {
                        left: {
                            start: 0,
                            end: -2000,
                            unit: "px"
                        }
                    }, _343 = {
                        left: {
                            start: -1000,
                            end: 0,
                            unit: "px"
                        }
                    };
                    if (ibmweb.meta.cpi == "ilhe") {
                        _342.right = _342.left;
                        _342.left = undefined;
                        _343.right = _343.left;
                        _343.left = undefined;
                    }
                    var _344 = dojo.fx.chain([dojo.animateProperty({
                        node: _341,
                        properties: _342,
                        duration: 950,
                        easing: function (n) {
                            return -1 * (Math.sqrt(1 - Math.pow(n, 2)) - 1);
                        }
                    }), dojo.animateProperty({
                        node: _341,
                        properties: _343,
                        duration: 200
                    })]),
                        _345 = {
                            left: {
                                start: (ibmweb.meta.cpi == "ilhe" ? (this.scrollableNode.style.right || 0) : (this.scrollableNode.style.left || 0)),
                                end: _33e * _33f * -1,
                                nit: "px"
                            }
                        };
                    if (ibmweb.meta.cpi == "ilhe") {
                        _345.right = _345.left;
                        _345.left = undefined;
                    }
                    var _346 = dojo.animateProperty({
                        node: this.scrollableNode,
                        properties: _345,
                        duration: 2100,
                        easing: function (n) {
                            if (n == 0) {
                                return 0;
                            }
                            if (n == 1) {
                                return 1;
                            }
                            n = n * 2;
                            if (n < 1) {
                                return Math.pow(2, 10 * (n - 1)) / 2;
                            }--n;
                            return (-1 * Math.pow(2, -10 * n) + 2) / 2;
                        }
                    }),
                        _347 = dojo.fx.combine([_344, _346]);
                    if (ibmweb.meta.cpi == "ilhe" && dojo.isIE < 9) {
                        dojo.style(this.scrollableNode, {
                            right: _33e * _33f * -1
                        });
                        this._isBeingAnimated = false;
                    } else {
                        _347.play();
                    }
                    dojo.connect(_347, "onEnd", dojo.hitch(this, function () {
                        this._isBeingAnimated = false;
                        this._isBegingAutoscroll = false;
                        if (_340 && this._isLeadNoHome) {
                            this.currentSlideIndex = 0;
                        }
                    }));
                }
            });
            this._widget = _33d;
            if (dojo.isIE < 8) {
                dojo.place(ibmweb.ribbonLeadspace._widget.scrollRightButton, ibmweb.ribbonLeadspace._widget.scrollLeftButton, "after");
                dojo.style(ibmweb.ribbonLeadspace._widget.scrollRightButton, {
                    marginTop: "140px",
                    zIndex: "1"
                });
            }
            dojo.connect(_33d, "onMouseEnter", ibmweb, ibmweb.ribbonLeadspace.arrowsToggle.show);
            dojo.connect(_33d, "onMouseLeave", ibmweb, ibmweb.ribbonLeadspace.arrowsToggle.hide);
            if (_33d.slides.length > 1) {
                _33d.startup();
                dojo.query("#ibm-leadspace-body div.ibm-ribbon-nav a").forEach(function (i, e) {
                    var pos = e + 1;
                    dojo.connect(i, "onclick", function () {
                        ibmweb.util.statsHelper({
                            "ibmEV": "track",
                            "ibmEvAction": "ibmlink",
                            "ibmEvLinktitle": "ls" + pos,
                            "ibmEvSection": "ls" + pos
                        });
                        return true;
                    });
                    dojo.connect(i, "onmouseenter", function (e) {
                        e.stopPropagation();
                        ibmweb.util.statsHelper({
                            "ibmEV": "track",
                            "ibmEvAction": "ibmhover",
                            "ibmEvLinktitle": "ls" + pos,
                            "ibmEvSection": "ls" + pos
                        });
                        return false;
                    });
                });
            }
            dojo.query("#ibm-lead-2, #ibm-lead-3").forEach(function (item) {
                item.style.display = "block";
            });
            if (_33d.slides.length > 1) {
                dojo.query("#ibm-leadspace-head .ibm-ribbon-nav a").forEach(function (item, i) {
                    var j = i + 1;
                    var temp = dojo.query("#ibm-lead-" + j + " div.ibm-ribbon-view");
                    if (temp.length == 1) {
                        dojo.place(temp[0], item);
                        var _348 = dojo.query("div.ibm-pagination-overlay", item)[0];
                        dojo.connect(_348, "onclick", function (e) {
                            _33d.slideTo(i, e);
                        });
                        dojo.connect(item, "onmouseenter", function (e) {
                            if (_348.style.display == "block") {
                                return false;
                            }
                            if (dojo.isIE < 7) {
                                dojo.style(_348, {
                                    display: "block"
                                });
                            } else {
                                dojo.style(_348, {
                                    opacity: "0",
                                    display: "block"
                                });
                                dojo.anim(_348, {
                                    opacity: 1
                                }, 300);
                            }
                            var _349 = dojo.connect(item, "onmouseleave", function () {
                                if (dojo.isIE < 7) {
                                    _348.style.display = "none";
                                } else {
                                    dojo.anim(_348, {
                                        opacity: 0
                                    }, 200, null, function () {
                                        _348.style.display = "none";
                                    });
                                }
                                dojo.disconnect(_349);
                            });
                        });
                    }
                });
            } else {
                dojo.query(_33d.navNode).orphan();
            }
            if (dojo.isIE < 8) {
                dojo.byId("ibm-leadspace-body").style.position = "static";
            }
            dojo.connect(window, "resize", ibmweb.ribbonLeadspace.onWindowResize);
            ibmweb.ribbonLeadspace.onWindowResize();
            var _34a = dojo.query("#ibm-leadspace-head div.ibm-ribbon-nav a");
            dojo.connect(dojo.query("#ibm-leadspace-head div.ibm-ribbon-pane")[0], "onkeypress", dojo.hitch(this, function (evt) {
                if (evt.keyCode == dojo.keys.TAB && !evt.shiftKey) {
                    if (_34a.length > 0) {
                        dojo.query("#ibm-leadspace-head div.ibm-ribbon-nav a:first-child")[0].focus();
                    } else {
                        dojo.byId("ibm-promotion-module").focus();
                    }
                    dojo.stopEvent(evt);
                }
            }));
            if (dojo.isIE < 7) {
                dojo.query("#ibm-leadspace-body div.ibm-columns img:first-child").forEach(function (item) {
                    var _34b = item.width;
                    var _34c = item.height;
                    var src = item.src;
                    dojo.query(item).wrap("<span style=\"width:" + _34b + "px;height:" + _34c + "px;display:inline-block; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "');\"></span>");
                    item.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=0)";
                });
            }
        }
    };
}
if (!dojo._hasResource["ibmweb.dynnav.megamenu"]) {
    dojo._hasResource["ibmweb.dynnav.megamenu"] = true;
    dojo.provide("ibmweb.dynnav.megamenu");
    dojo.declare("ibmweb.dynnav.megamenu", ibmweb.dynnav._module, {
        _currentMenu: null,
        _mouseover: false,
        _slideUpTimer: null,
        _slideUpDuration: 600,
        _keepexpanded: false,
        _mouseleaveHandlerEnabled: true,
        _expandTimer: null,
        _slideToTimer: null,
        _delayedExpandTimer: null,
        _isExpanded: true,
        _itemtitle: null,
        _lock: false,
        _beingAnimated: false,
        _doubleClickLock: null,
        _waitBeforeAssignPage: null,
        _unicaTagsW3MenuNames: [],
        _unicaTagsWWWMenuNames: [],
        _hasFocus: [],
        _newDataSource: {
            use: true,
            hidden: true,
            isBeingAnimated: false,
            isSubBeingAnimated: false,
            hasDynTitle: false,
            subTabs: [],
            subTabsContent: [],
            subTabsActItem: [],
            subTabsActItem_idx: [],
            subTabsHover: [],
            subTabMenu: null,
            curSubMenu: null
        },
        _w3SwapDesign: {
            secondSwitchEnabled: false,
            waitOnExist: null,
            waitOnMouseOver: null,
            stopClickForMoment: null,
            leavingItem: null,
            mouseOverOpenMethod: false,
            mouseOnMenuButton: false,
            currentLink: -1,
            profileLinks: null,
            newSso: null,
            portalLogOutLink: null,
            profileCustomLinks: null
        },
        _dimensions: {
            basicUniversalHeight: 50,
            basicMarginTop: 74
        },
        init: function () {
            if (dojo.isIE) {
                dojo.query(".lotusui30 .lotusBanner").style({
                    position: "static"
                });
            }
            if (ibmweb.config.config == "w3") {
                this._dimensions.basicMarginTop = 90;
                this._w3SwapDesign.secondSwitchEnabled = !dojo.hasClass(dojo.query("#ibm-masthead")[0], "ibm-w3-masthead");
            }
            if (dojo.indexOf(ibmweb.config.megamenu.disabledLocales, ibmweb.meta.cpi) != -1) {
                ibmweb.config.megamenu.linksonly = true;
            }
            if (ibmweb.config.config == "w3") {
                if (this._w3SwapDesign.secondSwitchEnabled) {
                    dojo.query("#ibm-masthead").addClass("ibm-w3-masthead");
                } else {
                    if (!dojo.byId("ibm-profile-links")) {
                        this._w3SwapDesign.profileLinks = dojo.create("div", {
                            id: "ibm-profile-links"
                        }, "ibm-universal-nav", "last");
                    } else {
                        this._w3SwapDesign.profileLinks = dojo.query("[id=\"ibm-profile-links\"]")[0];
                    }
                    if (!dojo.byId("ibm-sso")) {
                        this._w3SwapDesign.newSso = dojo.create("div", {
                            id: "ibm-sso",
                            role: ""
                        }, this._w3SwapDesign.profileLinks, "last");
                        dijit.setWaiRole(this._w3SwapDesign.newSso, "presentation");
                        if (dojo.query("#ibm-portal-logout-link").length == 1 || dojo.query("#ibm-profile-custom-links").length == 1) {
                            dojo.addClass(this._w3SwapDesign.newSso, "ibm-profile-links-divider");
                        }
                    } else {
                        this._w3SwapDesign.newSso = dojo.query("#ibm-sso")[0];
                    }
                }
            }
            if (ibmweb.config.megamenu.disableUniversalNav) {
                this._dimensions.basicMarginTop = 42;
                this._dimensions.basicUniversalHeight = 0;
                dojo.query("#ibm-site-title").style("display", "none");
                dojo.query("#ibm-universal-nav").style("height", "0px");
                dojo.query("#ibm-top").style("marginTop", "42px");
            }
            return ibmweb.dynnav.isServiceEnabled("megamenu") && !ibmweb.config.appmast.enabled;
        },
        onLoad: function () {
            if (!dojo.byId("ibm-common-menu")) {
                var _34d = ibmweb.config.config == "www" ? "ibm-universal-nav" : "ibm-mast-options";
                dojo.create("div", {
                    id: "ibm-common-menu"
                }, dojo.byId(_34d), "after");
            }
            dojo.style("ibm-common-menu", "display", "none");
            if (ibmweb.config.config == "www") {
                var _34e = dojo.query("#ibm-unav-links");
            }
            if (ibmweb.config.config == "www" && ibmweb.config.megamenu.icons != "none") {
                if (ibmweb.config.megamenu.icons == "arrow") {
                    if (!dojo.byId("ibm-arrow-logo")) {
                        var _34f = dojo.create("span", {
                            id: "ibm-arrow-logo",
                            className: "ibm-masthead-indicator"
                        });
                        dojo.create("img", {
                            src: ibmweb.config.imageUrl + "t/v17_min_mast_anim_que.gif"
                        }, _34f);
                        dojo.place(_34f, dojo.query("#ibm-universal-nav")[0], "first");
                    }
                } else {
                    if (!dojo.byId("ibm-search-logo")) {
                        var _350 = dojo.create("li", {
                            id: "ibm-search-logo",
                            className: "ibm-masthead-indicator"
                        });
                        if (ibmweb.config.megamenu.icons == "text") {
                            _350.innerHTML = "Search";
                            dojo.addClass(_350, "ibm-text");
                        }
                        dojo.place(_350, _34e[0], "last");
                    }
                    if (!dojo.byId("ibm-links-logo")) {
                        var _351 = dojo.create("li", {
                            id: "ibm-links-logo",
                            className: "ibm-masthead-indicator"
                        });
                        if (ibmweb.config.megamenu.icons == "text") {
                            _351.innerHTML = "Links";
                            dojo.addClass(_351, "ibm-text");
                        }
                        dojo.place(_351, _34e[0], "last");
                    }
                }
                dojo.query(".ibm-masthead-indicator").addClass("ibm-access");
            }
            if (ibmweb.config.config == "www" && dojo.query("li", _34e[0]).length == 1) {
                if (!dojo.hasAttr(_34e, "role")) {
                    dojo.attr(_34e[0], "role", "");
                    dijit.setWaiRole(_34e[0], "presentation");
                }
            }
            if (ibmweb.config.config == "w3" && ibmweb.config.megamenu.icons != "none") {
                if (ibmweb.config.megamenu.icons == "arrow") {
                    if (!dojo.byId("ibm-arrow-logo")) {
                        var _34f = dojo.create("span", {
                            id: "ibm-arrow-logo",
                            className: "ibm-masthead-indicator"
                        });
                        dojo.create("img", {
                            src: ibmweb.config.imageUrl + "t/w3_min_menu_open_icon.png"
                        }, _34f);
                        dojo.place(_34f, dojo.query("#ibm-universal-nav")[0], "first");
                    }
                }
            }
            if (!ibmweb.config.megamenu.noScroll) {
                dojo.connect(window, "onscroll", this, "onVScrollCallback");
                dojo.connect(window, "onresize", this, "onVScrollCallback");
            } else {
                dojo.addClass("ibm-top", "ibm-no-scroll");
            }
            dojo.connect(window, "onscroll", this, "onHScrollCallback");
            dojo.connect(window, "onresize", this, function (_352) {
                dojo.stopEvent(_352);
                if (!window.pageXOffset && window.pageXOffset != 0) {
                    dojo.style(dojo.byId("ibm-masthead"), "left", "-" + document.documentElement.scrollLeft + "px");
                } else {
                    dojo.style(dojo.byId("ibm-masthead"), "left", "-" + window.pageXOffset + "px");
                }
            });
            dojo.connect(window, "blur", this, function (_353) {
                this.meta = this.shift = this.ctrl = this.cmmd = this.alt = false;
                dojo.publish("/ibm/dynnav/slideUp");
            });
            if (ibmweb.config.config == "w3" && ibmweb.config.megamenu.expandOnClick) {
                dojo.connect(dojo.byId("ibm-masthead"), "onclick", this, "onMouseEnter");
            } else {
                if (ibmweb.config.config == "w3" && ibmweb.config.megamenu.delay > 0) {
                    dojo.connect(dojo.byId("ibm-masthead"), "onmouseenter", this, function (_354) {
                        this._delayedExpandTimer = setTimeout(dojo.hitch(this, function () {
                            this.onMouseEnter(_354);
                        }), ibmweb.config.megamenu.delay);
                    });
                } else {
                    dojo.connect(dojo.byId("ibm-masthead"), "onmouseenter", this, "onMouseEnter");
                }
            }
            dojo.connect(dojo.byId("ibm-masthead"), "onmouseleave", this, "onMouseLeave");
            dojo.subscribe("/ibm/dynnav/slideUp", this, "_slideUp");
            dojo.subscribe("/ibm/dynnav/megamenu/slideUp", this, "_slideUp");
            dojo.subscribe("/ibm/dynnav/megamenu/slideDown", this, "_slideDown");
            dojo.subscribe("/ibm/dynnav/megamenu/expandMenu", this, "_expandMenu");
            if (ibmweb.config.megamenu.minimizeByDefault) {
                this._minimizeMenu(1);
            }
            dojo.publish("/ibmweb/dynnav/megamenu/finished");
        },
        onData: function (data) {
            var ul = dojo.byId("ibm-menu-links");
            dojo.empty(ul);
            dijit.setWaiRole("ibm-menu-links", "toolbar");
            var _355 = new ibmweb.ribbon();
            dijit.setWaiRole(_355.scrollableNode, "region");
            dijit.setWaiState(_355.scrollableNode, "label", data.accessibilityData.sitemap || "Site map");
            dojo.forEach(data.menuData, dojo.hitch(this, function (item, i) {
                var li = dojo.create("li", {}, ul);
                dijit.setWaiRole(li, "presentation");
                if (ibmweb.config.megamenu.minimizeByDefault) {
                    dojo.addClass(li, "ibm-access");
                }
                var a = dojo.create("a", {
                    href: item.url || "#",
                    role: "",
                    tabIndex: (ibmweb.info.OperaVersion != 11.11) ? "-1" : "0",
                    innerHTML: item.title.htmlspecialchars()
                }, li);
                dijit.setWaiRole(a, "button");
                if (ibmweb.config.megamenu.linksonly) {
                    return;
                }
                this._itemtitle = item.title.htmlspecialchars();
                if (ibmweb.config.config == "www") {
                    this._unicaTagsWWWMenuNames.push(item.title.htmlspecialchars());
                }
                if (ibmweb.config.config == "w3") {
                    this._unicaTagsW3MenuNames.push(item.title.htmlspecialchars());
                }
                if (item.child) {
                    var div = this._buildMegaMenu(item.child, i);
                    _355.addItem(new ibmweb.ribbonItemAbstract({
                        srcNodeRef: div,
                        enableKeypress: true
                    }), i);
                    dijit.setWaiRole(div.parentNode, "dialog");
                    dijit.setWaiState(div.parentNode, "labelledby", "ibm-rib-head-" + i);
                    dojo.create("h2", {
                        className: "ibm-access",
                        id: "ibm-rib-head-" + i,
                        innerHTML: item.title.htmlspecialchars()
                    }, div.parentNode, "first");
                    childAnk = dojo.query("a", _355.navNode);
                    if (childAnk.length > 0 && i < childAnk.length) {
                        dojo.attr(childAnk[i], "title", item.title.htmlspecialchars());
                        childAnk[i].innerHTML = item.title.htmlspecialchars();
                    }
                    dojo.connect(a, "onblur", this, function (_356) {
                        dojo.stopEvent(_356);
                        dojo.query("#ibm-menu-links li.ibm-inactive").removeClass("ibm-inactive");
                        return false;
                    });
                    dojo.connect(a, "onfocus", this, function (_357) {
                        dojo.stopEvent(_357);
                        if (ibmweb.config.config === "www" && this._currentMenu != null) {
                            dojo.removeClass(dojo.query("#ibm-menu-links a")[this._currentMenu], "ibm-active");
                        }
                        if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                            dojo.publish("/ibm/dynnav/megamenu/expandMenu");
                        }
                        var _358 = (ibmweb.config.config == "w3") ? dojo.query("#ibm-menu-links a[tabindex $='2']") : dojo.query("#ibm-menu-links a[tabindex $='0']");
                        _358.forEach(function (i) {
                            i.tabIndex = "-1";
                        });
                        if (this._currentMenu != null) {
                            _355.setDuration(_355.defaultDuration);
                            this._currentMenu = i;
                            dojo.query("a", _355.scrollableNode).attr("tabIndex", "-1");
                            _355.slideTo(i);
                            _357.target.parentNode.className = "ibm-active";
                            dojo.addClass(_357.target, "ibm-active");
                            var _359 = dojo.query("> div", _355.scrollableNode),
                                temp = dojo.query("a", _359[i]);
                            if (temp.length > 0) {
                                temp.attr("tabIndex", (ibmweb.config.config == "w3") ? "2" : "0");
                            }
                        } else {
                            dojo.query("#ibm-menu-links li.ibm-inactive").removeClass("ibm-inactive");
                            _357.target.parentNode.className = "ibm-inactive";
                        }
                        a.tabIndex = (ibmweb.config.config == "w3") ? 2 : 0;
                        return false;
                    });
                    dojo.connect(a, "onkeypress", this, function (_35a) {
                        if (_35a.shiftKey && _35a.charOrCode == dojo.keys.TAB) {
                            this._slideUp();
                        } else {
                            if (_35a.keyCode == dojo.keys.TAB) {
                                if (this._currentMenu != null) {
                                    dojo.stopEvent(_35a);
                                    var _35b = dojo.query("> div", _355.scrollableNode),
                                        temp = dojo.query("a", _35b[i]);
                                    if (temp.length > 0) {
                                        temp[0].focus();
                                    }
                                    _35a.target.className = "ibm-active";
                                } else {
                                    this._slideUp();
                                }
                            }
                        }
                        if (_35a.keyCode == dojo.keys.LEFT_ARROW || _35a.keyCode == dojo.keys.UP_ARROW) {
                            a.tabIndex = -1;
                            var prev = _35a.target.parentNode.previousSibling;
                            if (prev) {
                                dojo.stopEvent(_35a);
                                prev.firstChild.focus();
                            } else {
                                prev = _35a.target.parentNode.parentNode.lastChild;
                                if (prev) {
                                    dojo.stopEvent(_35a);
                                    prev.firstChild.focus();
                                }
                            }
                        }
                        if (_35a.keyCode == dojo.keys.RIGHT_ARROW || (_35a.keyCode == dojo.keys.DOWN_ARROW && this._currentMenu == null)) {
                            a.tabIndex = -1;
                            var next = _35a.target.parentNode.nextSibling;
                            if (next) {
                                dojo.stopEvent(_35a);
                                next.firstChild.focus();
                            } else {
                                next = _35a.target.parentNode.parentNode.firstChild;
                                if (next) {
                                    dojo.stopEvent(_35a);
                                    next.firstChild.focus();
                                }
                            }
                        }
                        if (this._isExpanded && (_35a.keyCode == dojo.keys.ENTER || (_35a.keyCode == dojo.keys.SPACE || _35a.charOrCode == " "))) {
                            dojo.stopEvent(_35a);
                            if (this._currentMenu == null) {
                                ibmweb.util.statsHelper({
                                    "ibmEV": ibmweb.config.config + " Megamenu",
                                    "ibmEvAction": "Expand menu",
                                    "ibmEvName": ((ibmweb.config.config === "w3") ? this._unicaTagsW3MenuNames[i] : this._unicaTagsWWWMenuNames[i]),
                                    "ibmEvSection": "Initial"
                                });
                                _355.setDuration(1);
                                dojo.publish("/ibm/dynnav/slideUp");
                                dojo.publish("/ibm/dynnav/signin/slideUp", [_35a]);
                                dojo.publish("/ibm/dynnav/megamenu/slideDown", [i]);
                                _355.slideTo(i);
                                if (typeof this._newDataSource.subTabs[i] !== "undefined") {
                                    dojo.query(this._newDataSource.subTabs[i][this._newDataSource.subTabsActItem_idx[i]]).children("a")[0].focus();
                                } else {
                                    var _35b = dojo.query("> div", _355.scrollableNode),
                                        temp = dojo.query("a", _35b[i]);
                                    if (temp.length > 0) {
                                        temp.attr("tabIndex", "0");
                                        this._slideToTimer = setTimeout(dojo.hitch(this, function () {
                                            temp[0].focus();
                                        }), _355.defaultDuration + 60);
                                    }
                                }
                            } else {
                                ibmweb.util.statsHelper({
                                    "ibmEV": ibmweb.config.config + " Megamenu",
                                    "ibmEvAction": "Expand menu",
                                    "ibmEvName": ((ibmweb.config.config === "w3") ? this._unicaTagsW3MenuNames[i] : this._unicaTagsWWWMenuNames[i]),
                                    "ibmEvSection": "Secondary"
                                });
                                _355.setDuration(_355.defaultDuration);
                                this._slideUp();
                            }
                        }
                        if (_35a.keyCode == dojo.keys.DOWN_ARROW && this._currentMenu != null) {
                            dojo.stopEvent(_35a);
                            var _35b = dojo.query("> div", _355.scrollableNode),
                                temp = dojo.query("a", _35b[i]);
                            if (temp.length > 0) {
                                temp[0].focus();
                            }
                            _35a.target.className = "ibm-active";
                        }
                        if (_35a.keyCode == dojo.keys.ESCAPE) {
                            if (this._currentMenu != null) {
                                dojo.stopEvent(_35a);
                                this._slideUp();
                            } else {
                                var _35c = dojo.query("#q");
                                if (_35c.length > 0) {
                                    _35c[0].focus();
                                }
                            }
                        }
                        return false;
                    });
                    dojo.connect(a, "ondblclick", this, function (_35d) {
                        dojo.stopEvent(_35d);
                        if ( !! this._doubleClickLock) {
                            clearTimeout(this._doubleClickLock);
                            this._doubleClickLock = null;
                        }
                        location.href = _35d.target.href;
                    });
                    dojo.connect(a, "onclick", this, function (_35e) {
                        dojo.stopEvent(_35e);
                        if ( !! this._doubleClickLock) {
                            return;
                        }
                        this._doubleClickLock = setTimeout(dojo.hitch(this, function () {
                            this._doubleClickLock = null;
                            if (ibmweb.config.config === "w3" && this._w3SwapDesign.mouseOverOpenMethod == true) {
                                return false;
                            }
                            _35e.target.focus();
                            if (this._currentMenu == null) {
                                ibmweb.util.statsHelper({
                                    "ibmEV": ((ibmweb.config.config === "www") ? "www" : "w3") + " Megamenu",
                                    "ibmEvAction": "Expand menu",
                                    "ibmEvName": (ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[i] : this._unicaTagsW3MenuNames[i],
                                    "ibmEvSection": "Initial"
                                });
                                dojo.addClass(_35e.target.parentNode, "ibm-active");
                                dojo.addClass(_35e.target, "ibm-active");
                                _355.setDuration(1);
                                dojo.publish("/ibm/dynnav/slideUp");
                                dojo.publish("/ibm/dynnav/signin/slideUp", [_35e]);
                                dojo.publish("/ibm/dynnav/megamenu/slideDown", [i]);
                                _355.slideTo(i);
                                this._hasFocus[i] == false;
                                if (typeof this._newDataSource.subTabs[i] !== "undefined") {
                                    dojo.query(this._newDataSource.subTabs[i][this._newDataSource.subTabsActItem_idx[i]]).children("a")[0].focus();
                                } else {
                                    var _35f = dojo.query("> div", _355.scrollableNode),
                                        temp = dojo.query("a", _35f[i]);
                                    if (temp.length > 0) {
                                        temp.attr("tabIndex", "0");
                                        if (ibmweb.config.config === "www") {
                                            this._slideToTimer = setTimeout(dojo.hitch(this, function () {
                                                temp[0].focus();
                                            }), _355.defaultDuration + 60);
                                        }
                                    }
                                }
                            } else {
                                ibmweb.util.statsHelper({
                                    "ibmEV": ((ibmweb.config.config === "www") ? "www" : "w3") + " Megamenu",
                                    "ibmEvAction": "Expand menu",
                                    "ibmEvName": (ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[i] : this._unicaTagsW3MenuNames[i],
                                    "ibmEvSection": "Secondary"
                                });
                                dojo.query("#ibm-menu-links a.ibm-active").removeClass("ibm-active");
                                dojo.query("#ibm-menu-links li.ibm-active").removeClass("ibm-active");
                                dojo.addClass(_35e.target.parentNode, "ibm-active");
                                dojo.addClass(_35e.target, "ibm-active");
                                if (this._currentMenu == i && this._hasFocus[i] == true) {
                                    this._slideUp();
                                } else {
                                    if (this._newDataSource.use) {
                                        var id = this._newDataSource.curSubMenu;
                                        if (typeof this._newDataSource.subTabs[id] !== "undefined") {
                                            dojo.forEach(this._newDataSource.subTabs[id], dojo.hitch(this, function (_360, _361) {
                                                if (_361 === this._newDataSource.subTabsActItem_idx[id]) {
                                                    dojo.removeClass(_360, "ibm-active");
                                                }
                                                dojo.style(_360, "display", "none");
                                            }));
                                        }
                                        id = i;
                                        this._newDataSource.curSubMenu = i;
                                        if (typeof this._newDataSource.subTabs[id] !== "undefined") {
                                            dojo.forEach(this._newDataSource.subTabs[id], dojo.hitch(this, function (_362, _363) {
                                                dojo.style(_362, "display", "block");
                                                if (_363 === this._newDataSource.subTabsActItem_idx[id]) {
                                                    dojo.addClass(_362, "ibm-active");
                                                }
                                            }));
                                        }
                                    }
                                    _355.slideTo(i);
                                }
                            }
                            for (var j = 0; j < this._hasFocus.length; j++) {
                                this._hasFocus[j] = false;
                            }
                            this._hasFocus[i] = true;
                            return false;
                        }), 250);
                    });
                }
            }));
            _355.placeAt("ibm-common-menu");
            this._createSubTabs();
            _355.hideNavigationDots();
            _355.addRibbonCloseBtn();
            _355.startup();
            dojo.connect(_355.scrollableNode, "onkeypress", this, function (_364) {
                if (_364.keyCode == dojo.keys.ESCAPE) {
                    dojo.stopEvent(_364);
                    var k = this._newDataSource.curSubMenu;
                    if (k !== null) {
                        var l = this._newDataSource.subTabsActItem_idx[k];
                        dojo.query("a", this._newDataSource.subTabs[k][l])[0].focus();
                    } else {
                        dojo.publish("/ibm/dynnav/megamenu/slideUp");
                    }
                }
                if ((!_364.shiftKey && _364.keyCode == dojo.keys.TAB) || (_364.shiftKey && _364.keyCode == dojo.keys.TAB)) {
                    dojo.stopEvent(_364);
                    var _365, _366 = false,
                        _367 = false;
                    (_364.target.parentNode.nodeName == "H3") ? _365 = _364.target.parentNode.parentNode : _365 = _364.target.parentNode.parentNode.parentNode;
                    if (dojo.hasClass(_365, "ibm-col-last")) {
                        _366 = true;
                    }
                    if (dojo.hasClass(_365, "ibm-menu-static")) {
                        _367 = true;
                    }
                    if (!_364.shiftKey && _364.keyCode == dojo.keys.TAB) {
                        if (_366) {
                            dojo.query("a", dojo.query(_365.parentNode).siblings(".ibm-menu-static")[0])[0].focus();
                        } else {
                            (_365.nextSibling && dojo.query("a", _365.nextSibling)[0]) ? dojo.query("a", _365.nextSibling)[0].focus() : dojo.query("div#ibm-common-menu span")[0].focus();
                        }
                    }
                    if (_364.shiftKey && _364.keyCode == dojo.keys.TAB) {
                        if (_367) {
                            var k = this._newDataSource.curSubMenu,
                                l = this._newDataSource.subTabsActItem_idx[k];
                            dojo.query(".ibm-col-last a", this._newDataSource.subTabsContent[k][l])[0].focus();
                        } else {
                            (_365.previousSibling && dojo.query("a", _365.previousSibling)[0]) ? dojo.query("a", _365.previousSibling)[0].focus() : dojo.query("div#ibm-common-menu span")[0].focus();
                        }
                    }
                }
                if (_364.keyCode == dojo.keys.UP_ARROW || _364.keyCode == dojo.keys.LEFT_ARROW) {
                    var _368 = dojo.query("> div", _355.scrollableNode),
                        _369 = dojo.query("a", _368[this._currentMenu])[0],
                        curr = dojo.query("a.ibm-active", _368[this._currentMenu])[0];
                    if ( !! curr) {
                        dojo.stopEvent(_364);
                        var prev = curr.parentNode.previousSibling;
                        if (prev == null) {
                            if (curr.parentNode.parentNode.nodeName == "UL") {
                                prev = curr.parentNode.parentNode.previousSibling;
                            }
                        }
                        if (prev != null && prev.firstChild != null && prev.firstChild.nodeName == "A") {
                            prev.firstChild.focus();
                        }
                    }
                }
                if (_364.keyCode == dojo.keys.DOWN_ARROW || _364.keyCode == dojo.keys.RIGHT_ARROW) {
                    var _368 = dojo.query("> div", _355.scrollableNode),
                        curr = dojo.query("a.ibm-active", _368[this._currentMenu])[0];
                    if ( !! curr) {
                        dojo.stopEvent(_364);
                        var next = curr.parentNode.nextSibling;
                        if (next) {
                            if (next.nodeName == "UL") {
                                next = next.firstChild;
                            }
                            if (next && next.firstChild && next.firstChild.nodeName == "A") {
                                next.firstChild.focus();
                            }
                        }
                    }
                }
            });
            var span = dojo.query("div#ibm-common-menu div.ibm-mm-close span")[0];
            if (span) {
                dojo.connect(span, "onclick", this, function (_36a) {
                    ibmweb.util.statsHelper({
                        "ibmEV": ibmweb.config.config + " Megamenu",
                        "ibmEvAction": "Arrow",
                        "ibmEvName": "Close"
                    });
                    dojo.publish("/ibm/dynnav/megamenu/slideUp");
                });
                dojo.connect(span, "onkeypress", this, function (_36b) {
                    if (_36b.keyCode == dojo.keys.ESCAPE || _36b.keyCode == dojo.keys.ENTER || _36b.keyCode == dojo.keys.SPACE || _36b.charOrCode == " ") {
                        dojo.stopEvent(_36b);
                        ibmweb.util.statsHelper({
                            "ibmEV": ibmweb.config.config + " Megamenu",
                            "ibmEvAction": "Arrow",
                            "ibmEvName": "Close"
                        });
                        dojo.publish("/ibm/dynnav/megamenu/slideUp");
                    }
                    if (_36b.keyCode == dojo.keys.TAB) {
                        var _36c = dojo.query("> div", _355.scrollableNode),
                            _36d = dojo.query("a", _36c[this._currentMenu]);
                        if (!_36b.shiftKey) {
                            dojo.stopEvent(_36b);
                            _36d[0].focus();
                        }
                        if (_36b.shiftKey) {
                            dojo.stopEvent(_36b);
                            var _36e;
                            if (_36d[_36d.length - 1].parentNode.nodeName == "H3") {
                                _36e = _36d[_36d.length - 1].parentNode.parentNode;
                            } else {
                                _36e = _36d[_36d.length - 1].parentNode.parentNode.parentNode;
                            }
                            dojo.query("a", _36e)[0].focus();
                        }
                    }
                    if (_36b.keyCode == dojo.keys.UP_ARROW || _36b.keyCode == dojo.keys.RIGHT_ARROW || _36b.keyCode == dojo.keys.DOWN_ARROW || _36b.keyCode == dojo.keys.LEFT_ARROW) {
                        dojo.stopEvent(_36b);
                    }
                });
            }
            var a = dojo.query("#ibm-menu-links a");
            if (a.length > 0) {
                dojo.attr(a[0], "tabindex", (ibmweb.config.config == "w3") ? "2" : "0");
            }
            if (ibmweb.config.config == "w3") {
                dojo.attr(dojo.query("#ibm-home a")[0], "tabindex", "1");
                var _36f = dojo.query("#ibm-sso"),
                    _370 = _36f.next("li[role=presentation]");
                dojo.forEach(_36f.children("a"), function (_371) {
                    dojo.attr(_371, "tabindex", "3");
                });
                dojo.forEach(_370.children("a"), function (_372) {
                    dojo.attr(_372, "tabindex", "3");
                });
                if (this._w3SwapDesign.secondSwitchEnabled) {
                    if (!ibmweb.config.megamenu.disableUniversalNav) {
                        this._w3SwapDesign.profileLinks = dojo.create("div", {
                            id: "ibm-profile-links"
                        }, "ibm-universal-nav", "last");
                        if (_36f.length > 0) {
                            this._w3SwapDesign.newSso = dojo.create("div", {
                                id: "ibm-sso",
                                className: "ibm-profile-links-divider",
                                role: "",
                                innerHTML: _36f[0].innerHTML
                            }, this._w3SwapDesign.profileLinks, "last");
                            dijit.setWaiRole(this._w3SwapDesign.newSso, "presentation");
                        }
                        if (_370.length > 0) {
                            this._w3SwapDesign.portalLogOutLink = dojo.create("div", {
                                id: "ibm-portal-logout-link",
                                className: "ibm-profile-links-divider ibm-profile-links-divider--transparent",
                                role: "",
                                innerHTML: _370[0].innerHTML
                            }, this._w3SwapDesign.profileLinks, "last");
                            dijit.setWaiRole(this._w3SwapDesign.portalLogOutLink, "presentation");
                        }
                        this._w3SwapDesign.profileCustomLinks = dojo.create("div", {
                            className: "ibm-profile-custom-links"
                        }, this._w3SwapDesign.profileLinks, "last");
                    }
                    if (_36f.length > 0) {
                        dojo.destroy(_36f[0]);
                    }
                    if (_370.length > 0) {
                        dojo.destroy(_370[0]);
                    }
                    var _373 = dojo.query("#ibm-mast-options ul");
                    dojo.forEach(_373, dojo.hitch(this, function (_374) {
                        if (dojo.query(_374).children().length == 0) {
                            dojo.destroy(_374);
                            return;
                        }
                        dojo.forEach(dojo.query("li:not([id=ibm-home])", _374), dojo.hitch(this, function (_375) {
                            if (!ibmweb.config.megamenu.disableUniversalNav) {
                                dojo.place(dojo.query("a", _375)[0], this._w3SwapDesign.profileCustomLinks, "last");
                            }
                            dojo.destroy(_375);
                        }));
                    }));
                } else {
                    this._w3SwapDesign.profileLinks = dojo.query("#ibm-profile-links");
                    this._w3SwapDesign.profileCustomLinks = dojo.query("#ibm-profile-links .ibm-profile-custom-links");
                }
            }
        },
        _subTabs: {
            _title: [],
            _div: [],
            _id: []
        },
        _createSubTabs: function () {
            var con, _376, _377, _378;
            if (this._subTabs._title.length == 0) {
                return;
            }
            var _379 = dojo.query("#ibm-common-menu > div"),
                _37a = null,
                jump = dojo.hitch(this, function (e, _37b) {
                    var li = _37b.parentNode,
                        _37c = parseInt(/(?:subTab\-\d+\-)(\d+)/g.exec(dojo.attr(li, "className"))[1]),
                        _37d = null,
                        _37e = null;
                    this._newDataSource.subTabsHover[this._newDataSource.curSubMenu][_37c] = true;
                    setTimeout(dojo.hitch(this, function () {
                        if ((!this._newDataSource.subTabsHover[this._newDataSource.curSubMenu][_37c]) || (dojo.hasClass(li, "ibm-active") || this._newDataSource.isSubBeingAnimated)) {
                            return false;
                        }
                        this._newDataSource.isSubBeingAnimated = true;
                        this._newDataSource.subTabsActItem[this._newDataSource.curSubMenu] = e.target.textContent;
                        this._newDataSource.subTabsActItem_idx[this._newDataSource.curSubMenu] = _37c;
                        ibmweb.util.statsHelper({
                            "ibmEV": ibmweb.config.config + " Megamenu",
                            "ibmEvAction": "Mouse over",
                            "ibmEvName": ((ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[this._currentMenu] : this._unicaTagsW3MenuNames[this._currentMenu]) + " - " + this._newDataSource.subTabsActItem[this._newDataSource.curSubMenu],
                            "ibmEvSection": "Subcategory Change"
                        });
                        dojo.query("li.ibm-active", _376).removeClass("ibm-active");
                        dojo.addClass(li, "ibm-active");
                        dojo.forEach(this._newDataSource.subTabs[this._newDataSource.curSubMenu], dojo.hitch(this, function (_37f, i) {
                            var _380 = dojo.query("a", _37f)[0],
                                _381 = this._newDataSource.subTabsContent[this._newDataSource.curSubMenu][i],
                                disp = dojo.style(_381, "display");
                            if (disp == "none" && i == _37c) {
                                _37e = _381;
                            }
                            if (disp == "block" && i != _37c) {
                                _37d = _381;
                            }
                        }));
                        dojo.animateProperty({
                            node: _37d,
                            properties: {
                                opacity: {
                                    start: 1,
                                    end: 0
                                }
                            },
                            duration: 180,
                            onEnd: dojo.hitch(this, function () {
                                dojo.style(_37d, "display", "none");
                                dojo.style(_37e, {
                                    opacity: 1,
                                    display: "block"
                                });
                                this._newDataSource.isSubBeingAnimated = false;
                            })
                        }).play();
                    }), 200);
                });
            if (_379.length == 1 && _379[0].id) {
                _37a = _379[0].id;
            } else {
                return false;
            }
            con = dojo.query(this._subTabs._div[0]).closest(".ibm-container-body");
            if (dojo.query(".ibm-menu-subtabs", con[0]).length == 0) {
                _376 = dojo.create("div", {
                    className: "ibm-menu-subtabs ibm-is-hidden"
                }, con[0], "first");
                _377 = dojo.create("ul", {
                    role: ""
                }, _376);
                dijit.setWaiRole(_377, "toolbar");
                dojo.attr(_377, "aria-label", "subtab menu list");
            }
            this._newDataSource.subTabMenu = _376;
            dojo.forEach(this._subTabs._title, dojo.hitch(this, function (_382, t) {
                if (typeof _382 === "undefined") {
                    return;
                }
                var _383 = dojo.query("#ibmweb_ribbonSlide_" + t);
                if (typeof this._newDataSource.subTabs[t] === "undefined") {
                    this._newDataSource.subTabs[t] = new Array();
                    this._newDataSource.subTabsContent[t] = new Array();
                    this._newDataSource.subTabsHover[t] = new Array();
                    dojo.forEach(_382, dojo.hitch(this, function (_384, x) {
                        var _385 = dojo.create("li", {
                            className: "subTab-" + t + "-" + x,
                            role: ""
                        }, _377);
                        dijit.setWaiRole(_385, "presentation");
                        if (x == 0) {
                            if (t == 0) {
                                dojo.addClass(_385, "ibm-active");
                            }
                            this._newDataSource.subTabsActItem[t] = _384;
                            this._newDataSource.subTabsActItem_idx[t] = 0;
                        }
                        var link = dojo.create("a", {
                            href: "#",
                            innerHTML: _384,
                            role: ""
                        }, _385);
                        dijit.setWaiRole(link, "button");
                        dojo.style(_385, "display", "none");
                        this._newDataSource.subTabs[t][x] = _385;
                        this._newDataSource.subTabsContent[t][x] = dojo.query(".ibm-menu-dynamic", _383[0])[x];
                        this._newDataSource.subTabsHover[t][x] = false;
                        dojo.connect(link, "onfocus", this, function (_386) {
                            dojo.stopEvent(_386);
                            jump(_386, link);
                        });
                        dojo.connect(link, "onclick", function (_387) {
                            dojo.stopEvent(_387);
                        });
                        dojo.connect(link, "onmouseover", function (_388) {
                            dojo.stopEvent(_388);
                            link.focus();
                        });
                        dojo.connect(link, "onmouseout", this, function (_389) {
                            dojo.stopEvent(_389);
                            this._newDataSource.subTabsHover[t][x] = false;
                        });
                        dojo.connect(link, "onkeypress", this, function (_38a) {
                            if (_38a.keyCode == dojo.keys.ESCAPE) {
                                dojo.stopEvent(_38a);
                                dojo.publish("/ibm/dynnav/megamenu/slideUp");
                            }
                            if (_38a.keyCode == dojo.keys.LEFT_ARROW || _38a.keyCode == dojo.keys.UP_ARROW) {
                                var prev = _38a.target.parentNode.previousSibling;
                                if (dojo.indexOf(this._newDataSource.subTabs[t], prev) >= 0) {
                                    dojo.stopEvent(_38a);
                                    prev.firstChild.focus();
                                } else {
                                    dojo.stopEvent(_38a);
                                    var last = this._newDataSource.subTabs[t].length - 1;
                                    dojo.query(this._newDataSource.subTabs[t][last]).children("a")[0].focus();
                                }
                            }
                            if (_38a.keyCode == dojo.keys.RIGHT_ARROW || _38a.keyCode == dojo.keys.DOWN_ARROW) {
                                var next = _38a.target.parentNode.nextSibling;
                                if (dojo.indexOf(this._newDataSource.subTabs[t], next) >= 0) {
                                    dojo.stopEvent(_38a);
                                    next.firstChild.focus();
                                } else {
                                    dojo.stopEvent(_38a);
                                    dojo.query(this._newDataSource.subTabs[t][0]).children("a")[0].focus();
                                }
                            }
                            if (_38a.keyCode == dojo.keys.ENTER || (_38a.keyCode == dojo.keys.SPACE || _38a.charOrCode == " ")) {
                                dojo.stopEvent(_38a);
                                var _38b = dojo.query(this._newDataSource.subTabsContent[t][x]).children()[0],
                                    ul = dojo.query(_38b).children()[1],
                                    li = dojo.query(ul).children()[0],
                                    a = dojo.query(li).children()[0];
                                a.focus();
                            }
                        });
                    }));
                }
            }));
            dojo.forEach(dojo.query(".ibm-menu-dynamic a", con[0]), dojo.hitch(this, function (link) {
                dojo.connect(link, "onclick", dojo.hitch(this, function (_38c) {
                    dojo.stopEvent(_38c);
                    ibmweb.util.statsHelper({
                        "ibmEV": ibmweb.config.config + " Megamenu",
                        "ibmEvAction": _38c.target.href,
                        "ibmEvName": ((ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[this._currentMenu] : this._unicaTagsW3MenuNames[this._currentMenu]) + " - " + this._newDataSource.subTabsActItem[this._newDataSource.curSubMenu],
                        "ibmEvSection": "Link Clicks"
                    });
                    this._waitBeforeAssignPage = setTimeout(dojo.hitch(this, function () {
                        clearTimeout(this._waitBeforeAssignPage);
                        location.assign(_38c.target.href);
                    }), 800);
                }));
                dojo.connect(link, "onfocus", function (_38d) {
                    _38d.target.className = "ibm-active";
                });
                dojo.connect(link, "onblur", function (_38e) {
                    _38e.target.className = "";
                });
                dojo.connect(link, "onkeypress", dojo.hitch(this, function (_38f) {
                    if (_38f.keyCode == dojo.keys.ENTER) {
                        dojo.stopEvent(_38f);
                        ibmweb.util.statsHelper({
                            "ibmEV": ibmweb.config.config + " Megamenu",
                            "ibmEvAction": _38f.target.href,
                            "ibmEvName": ((ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[this._currentMenu] : this._unicaTagsW3MenuNames[this._currentMenu]) + " - " + this._newDataSource.subTabsActItem[this._newDataSource.curSubMenu],
                            "ibmEvSection": "Link Clicks"
                        });
                        this._waitBeforeAssignPage = setTimeout(dojo.hitch(this, function () {
                            clearTimeout(this._waitBeforeAssignPage);
                            location.assign(_38f.target.href);
                        }), 800);
                    }
                }));
            }));
            dojo.forEach(dojo.query(".ibm-menu-static a", con[0]), dojo.hitch(this, function (link) {
                dojo.connect(link, "onfocus", function (_390) {
                    _390.target.className = "ibm-active";
                });
                dojo.connect(link, "onblur", function (_391) {
                    _391.target.className = "";
                });
                dojo.connect(link, "onclick", dojo.hitch(this, function (_392) {
                    dojo.stopEvent(_392);
                    ibmweb.util.statsHelper({
                        "ibmEV": ibmweb.config.config + " Megamenu",
                        "ibmEvAction": _392.target.href,
                        "ibmEvName": ((ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[this._currentMenu] : this._unicaTagsW3MenuNames[this._currentMenu]) + " - persistentColumn",
                        "ibmEvSection": "Link Clicks"
                    });
                    this._waitBeforeAssignPage = setTimeout(dojo.hitch(this, function () {
                        clearTimeout(this._waitBeforeAssignPage);
                        location.assign(_392.target.href);
                    }), 800);
                }));
                dojo.connect(link, "onkeypress", dojo.hitch(this, function (_393) {
                    if (_393.keyCode == dojo.keys.ENTER) {
                        dojo.stopEvent(_393);
                        ibmweb.util.statsHelper({
                            "ibmEV": ibmweb.config.config + " Megamenu",
                            "ibmEvAction": _393.target.href,
                            "ibmEvName": ((ibmweb.config.config === "www") ? this._unicaTagsWWWMenuNames[this._currentMenu] : this._unicaTagsW3MenuNames[this._currentMenu]) + " - persistentColumn",
                            "ibmEvSection": "Link Clicks"
                        });
                        this._waitBeforeAssignPage = setTimeout(dojo.hitch(this, function () {
                            clearTimeout(this._waitBeforeAssignPage);
                            location.assign(_393.target.href);
                        }), 800);
                    }
                    if (!_393.shiftKey && _393.keyCode == dojo.keys.TAB) {
                        dojo.stopEvent(_393);
                    }
                }));
            }));
            dojo.connect(dijit.byId(_37a), "slideTo", dojo.hitch(this, function (i) {
                if (typeof this._newDataSource.subTabs[i] !== "undefined") {
                    if (this._newDataSource.hidden) {
                        if (this._newDataSource.isBeingAnimated) {
                            return false;
                        }
                        this._newDataSource.isBeingAnimated = true;
                        dojo.animateProperty({
                            node: _376,
                            properties: {
                                opacity: {
                                    start: 0,
                                    end: 1
                                },
                                marginTop: {
                                    start: -39,
                                    end: 0
                                },
                                marginBottom: {
                                    start: 20,
                                    end: 0
                                }
                            },
                            duration: 600,
                            onBegin: function () {
                                dojo.query("#ibm-masthead .ibm-mm-close")[0].style.marginTop = "0px";
                            },
                            onEnd: dojo.hitch(this, function () {
                                this._newDataSource.hidden = false;
                                this._newDataSource.isBeingAnimated = false;
                                dojo.query("#ibm-masthead .ibm-mm-close")[0].style.marginTop = "-65px";
                            })
                        }).play();
                    }
                } else {
                    if (!this._newDataSource.hidden) {
                        if (this._newDataSource.isBeingAnimated) {
                            return false;
                        }
                        this._newDataSource.isBeingAnimated = true;
                        dojo.animateProperty({
                            node: _376,
                            properties: {
                                opacity: {
                                    start: 1,
                                    end: 0
                                },
                                marginTop: {
                                    start: 0,
                                    end: -39
                                },
                                marginBottom: {
                                    start: 0,
                                    end: 20
                                }
                            },
                            duration: 600,
                            onBegin: function () {
                                dojo.query("#ibm-masthead .ibm-mm-close")[0].style.marginTop = "0px";
                            },
                            onEnd: dojo.hitch(this, function () {
                                this._newDataSource.hidden = true;
                                this._newDataSource.isBeingAnimated = false;
                                dojo.query("#ibm-masthead .ibm-mm-close")[0].style.marginTop = "-45px";
                            })
                        }).play();
                    }
                }
            }));
        },
        _buildMegaMenu: function (data, _394) {
            var id = ibmweb.util.generateId(),
                div = dojo.create("div", {
                    className: "ibm-columns",
                    id: id
                });
            this._subTabs._div[_394] = div;
            this._subTabs._id[_394] = id;
            if (this._newDataSource.use && data.length > 1) {
                dijit.setWaiRole(div, "group");
                dojo.attr(div, "aria-label", "Group list");
                var _395 = [],
                    _396 = 4,
                    con, _397, _398, _399 = dojo.create("div"),
                    _39a;
                dojo.forEach(data, dojo.hitch(this, function (_39b, dIdx) {
                    this._newDataSource.hasDynTitle = false;
                    var dif = 1;
                    if (dojo.filter(_39b.child, function (item) {
                        return item.persistentColumn;
                    }).length == 1) {
                        if (dIdx > 6) {
                            return;
                        }
                        dif = 2;
                    } else {
                        if (dIdx > 5) {
                            return;
                        }
                    }
                    if (typeof this._subTabs._title[_394] == "undefined") {
                        this._subTabs._title[_394] = new Array();
                    }
                    this._subTabs._title[_394][dIdx] = _39b.title.htmlspecialchars();
                    var _39c = -1,
                        _39d = dojo.create("div", {
                            className: "ibm-col-5-4 ibm-menu-dynamic"
                        }, _399);
                    if (dIdx > 0) {
                        dojo.style(_39d, "display", "none");
                    }
                    dojo.forEach(_39b.child, dojo.hitch(this, function (_39e, x) {
                        if (_39e.persistentColumn && _39e.persistentColumn == "yes") {
                            _39a = dojo.create("div", {
                                className: "ibm-col-5-1 ibm-menu-static"
                            });
                            var _39f = dojo.create("h3", {
                                innerHTML: _39e.title.htmlspecialchars()
                            }, _39a),
                                _3a0 = dojo.create("ul", {
                                    role: ""
                                }, _39a);
                            dijit.setWaiRole(_3a0, "menu");
                            dojo.forEach(_39e.child, function (_3a1) {
                                var tLi = dojo.create("li", {
                                    role: ""
                                }, _3a0),
                                    tA = dojo.create("a", {
                                        href: _3a1.url,
                                        tabindex: -1,
                                        role: "",
                                        innerHTML: _3a1.title.htmlspecialchars()
                                    }, tLi);
                                dijit.setWaiRole(tLi, "presentation");
                                dijit.setWaiRole(tA, "menuitem");
                            });
                        } else {
                            _39c++;
                            if (_39c >= _396) {
                                dojo.addClass(dojo.query(".ibm-col-4-1:last-child", _39d)[0], "ibm-col-last");
                                return;
                            }
                            var _3a2 = (x + dif == _39b.child.length) ? " ibm-col-last" : "",
                                _3a3 = dojo.create("div", {
                                    className: "ibm-col-4-1" + _3a2,
                                    role: ""
                                }, _39d),
                                h3 = dojo.create("h3", null, _3a3),
                                _3a4 = dojo.create("ul", {
                                    role: "menu"
                                }, _3a3);
                            dijit.setWaiRole(_3a3, "menu");
                            dojo.attr(_3a3, "aria-label", "menu list");
                            dojo.attr(_3a4, "aria-label", "menu list");
                            if (_39e.title == "" || _39e.title == " " || _39e.title.length == 0) {
                                dojo.destroy(h3);
                                dojo.style(_3a4, "marginTop", "26px");
                            } else {
                                if (!this._newDataSource.hasDynTitle) {
                                    this._newDataSource.hasDynTitle = true;
                                }
                                if (_39e.url && _39e.url.length > 0 && _39e.url != " ") {
                                    dojo.create("a", {
                                        tabIndex: "-1",
                                        href: _39e.url,
                                        innerHTML: _39e.title.htmlspecialchars()
                                    }, h3);
                                    dojo.attr(h3, "role", "");
                                    dijit.setWaiRole(h3, "menuitem");
                                } else {
                                    dojo.attr(h3, "innerHTML", _39e.title.htmlspecialchars());
                                }
                            }
                            dojo.forEach(_39e.child, function (_3a5, cIdx) {
                                var _3a6 = dojo.create("li", {
                                    role: ""
                                }, _3a4),
                                    _3a7 = dojo.create("a", {
                                        href: _3a5.url,
                                        tabIndex: "-1",
                                        role: "",
                                        innerHTML: _3a5.title.htmlspecialchars()
                                    }, _3a6);
                                dijit.setWaiRole(_3a6, "presentation");
                                dijit.setWaiRole(_3a7, "menuitem");
                            });
                        }
                    }));
                    if (!this._newDataSource.hasDynTitle) {
                        dojo.style(_39d, "paddingTop", "0px");
                    }
                }));
                if (typeof _39a !== "undefined") {
                    dojo.place(_39a, _399);
                }
                div.innerHTML = _399.innerHTML;
            }
            if (!this._newDataSource.use || (this._newDataSource.use && data.length == 1)) {
                dijit.setWaiRole(div, "group");
                dojo.attr(div, "aria-label", "Group List");
                var _3a8 = null,
                    _3a9 = dojo.hitch(this, function (_3aa) {
                        var col = dojo.create("div", {
                            className: "ibm-col-6-1"
                        }, div);
                        dijit.setWaiRole(col, "menu");
                        dojo.attr(col, "aria-label", "menu list");
                        if (_3aa.title && _3aa.title.length > 0 && _3aa.title != " ") {
                            _3a8 = _3aa.title.htmlspecialchars();
                            co = 1;
                        }
                        if (_3a8 == null) {
                            _3a8 = this._itemtitle;
                        }
                        if (_3aa.url) {
                            var h3 = dojo.create("h3", {}, col),
                                a = dojo.create("a", {
                                    innerHTML: _3aa.title.htmlspecialchars(),
                                    href: _3aa.url,
                                    tabIndex: "-1"
                                }, h3);
                            dijit.setWaiRole(h3, "menuitem");
                            dojo.connect(a, "onfocus", this, function (_3ab) {
                                _3ab.target.className = "ibm-active";
                            });
                            dojo.connect(a, "onblur", this, function (_3ac) {
                                _3ac.target.className = "";
                            });
                            dijit.setWaiState(col, "label", _3aa.title.htmlspecialchars() + " menu");
                        } else {
                            if (_3aa.title == " ") {
                                co++;
                                dojo.create("h3", {
                                    innerHTML: _3a8 + " menu list " + co,
                                    className: "ibm-access"
                                }, col);
                                dijit.setWaiState(col, "label", _3a8 + " menu list " + co);
                            } else {
                                dojo.create("h3", {
                                    innerHTML: _3aa.title.htmlspecialchars()
                                }, col);
                                dijit.setWaiState(col, "label", _3a8 + " menu");
                            }
                        }
                        var ul;
                        if (_3aa.title == " ") {
                            ul = dojo.create("ul", _3aa.extraClass ? {
                                "className": "ibm-" + _3aa.extraClass,
                                style: {
                                    marginTop: ((ibmweb.config.config == "www") ? 26 : 19) + "px"
                                }
                            } : {
                                style: {
                                    marginTop: ((ibmweb.config.config == "www") ? 26 : 19) + "px"
                                }
                            }, col);
                        } else {
                            ul = dojo.create("ul", _3aa.extraClass ? {
                                "className": "ibm-" + _3aa.extraClass
                            } : null, col);
                        }
                        dijit.setWaiRole(ul, "menu");
                        dojo.attr(ul, "aria-label", _3a8 + " menu list");
                        var _3ad = (_3aa.child.length > ibmweb.config.megamenu.maxRows) ? ibmweb.config.megamenu.maxRows : _3aa.child.length;
                        for (var k = 0; k < _3ad; k++) {
                            var _3ae = _3aa.child[k];
                            if (_3ae.url != null && _3ae.url != "" && _3ae.title.htmlspecialchars().replace(/^\s+|\s+$/g, "") != "") {
                                var li = dojo.create("li", {}, ul);
                                dijit.setWaiRole(li, "presentation");
                                var a = dojo.create("a", {
                                    innerHTML: _3ae.title.htmlspecialchars(),
                                    href: _3ae.url,
                                    tabIndex: "-1"
                                }, li);
                                dijit.setWaiRole(a, "menuitem");
                                dojo.connect(a, "onclick", dojo.hitch(this, function (_3af) {
                                    dojo.stopEvent(_3af);
                                    ibmweb.util.statsHelper({
                                        "ibmEV": ibmweb.config.config + " Megamenu",
                                        "ibmEvAction": _3af.target.href,
                                        "ibmEvName": ((ibmweb.config.config === "w3") ? this._unicaTagsW3MenuNames[this._currentMenu] : this._unicaTagsWWWMenuNames[this._currentMenu]),
                                        "ibmEvSection": "Link Clicks"
                                    });
                                    this._waitBeforeAssignPage = setTimeout(dojo.hitch(this, function () {
                                        clearTimeout(this._waitBeforeAssignPage);
                                        location.assign(_3af.target.href);
                                    }), 800);
                                }));
                                dojo.connect(a, "onkeypress", dojo.hitch(this, function (_3b0) {
                                    if (_3b0.keyCode == dojo.keys.ENTER) {
                                        dojo.stopEvent(_3b0);
                                        ibmweb.util.statsHelper({
                                            "ibmEV": ibmweb.config.config + " Megamenu",
                                            "ibmEvAction": _3b0.target.href,
                                            "ibmEvName": ((ibmweb.config.config === "w3") ? this._unicaTagsW3MenuNames[this._currentMenu] : this._unicaTagsWWWMenuNames[this._currentMenu]),
                                            "ibmEvSection": "Link Clicks"
                                        });
                                        this._waitBeforeAssignPage = setTimeout(dojo.hitch(this, function () {
                                            clearTimeout(this._waitBeforeAssignPage);
                                            location.assign(_3b0.target.href);
                                        }), 800);
                                    }
                                }));
                                dojo.connect(a, "onfocus", this, function (_3b1) {
                                    _3b1.target.className = "ibm-active";
                                });
                                dojo.connect(a, "onblur", this, function (_3b2) {
                                    _3b2.target.className = "";
                                });
                            }
                        }
                    }),
                    max = (data.length > ibmweb.config.megamenu.maxColumns) ? ibmweb.config.megamenu.maxColumns : data.length;
                for (var co, i = 0; i < max; i++) {
                    if (this._newDataSource.use) {
                        var _3b3 = data[i].child;
                        dojo.style(div, "paddingTop", "10px");
                        dojo.forEach(_3b3, dojo.hitch(this, function (cd) {
                            _3a9(cd);
                        }));
                    } else {
                        _3a9(data[i]);
                    }
                }
            }
            return div;
        },
        _slideDown: function (id) {
            if (!id && arguments[0]) {
                id = arguments[0];
            }
            if (this._animationInProgress) {
                return false;
            }
            this._animationInProgress = true;
            if (this._newDataSource.use && this._newDataSource.subTabMenu !== null) {
                if (typeof this._newDataSource.subTabs[id] === "undefined") {
                    dojo.style(this._newDataSource.subTabMenu, {
                        marginBottom: "20px",
                        marginTop: "-39px",
                        opacity: 0
                    });
                    this._newDataSource.hidden = true;
                } else {
                    dojo.addClass(this._newDataSource.subTabs[id][this._newDataSource.subTabsActItem_idx[id]], "ibm-active");
                }
            }
            dojo.query("#ibm-common-menu").style({
                display: "block",
                height: "1px",
                overflow: "hidden"
            });
            dojo.anim("ibm-common-menu", {
                height: 292
            }, 200);
            if (!ibmweb.config.megamenu.noScroll) {
                if (true) {
                    if ((ibmweb.info.isIE && ibmweb.info.ieVersion <= 6) || ibmweb.info.iDevice) {} else {
                        dojo.anim("ibm-top", {
                            marginTop: 292 + this._dimensions.basicMarginTop
                        }, 200);
                    }
                }
            }
            dojo.animateProperty({
                node: dojo.query("#ibm-common-menu .ibm-ribbon-pane")[0],
                duration: 200,
                properties: {
                    height: {
                        start: "1",
                        end: "292"
                    }
                },
                onBefore: function () {
                    if (this._newDataSource.use) {
                        dojo.query("#ibm-masthead .ibm-mm-close")[0].style.marginTop = "0px";
                    }
                },
                onEnd: dojo.hitch(this, function () {
                    this._animationInProgress = false;
                    dojo.query("div#ibm-common-menu .ibm-ribbon-section a").attr("tabIndex", "-1");
                    var temp = dojo.query("div#ibm-common-menu .ibm-ribbon-section > div");
                    if (temp.length > 0) {
                        temp = dojo.query("a", temp[id]);
                    }
                    if (temp.length != 0) {
                        temp.attr("tabIndex", "0");
                    }
                    if (this._newDataSource.use) {
                        dojo.query("#ibm-masthead .ibm-mm-close")[0].style.marginTop = (typeof this._newDataSource.subTabs[id] === "undefined") ? "-45px" : "-65px";
                    }
                })
            }).play();
            dojo.query("#ibm-menu-links a")[id].className = "ibm-active";
            dojo.query("#ibm-menu-links li")[id].className = "ibm-active";
            dojo.query("#ibm-menu-links li.ibm-inactive").removeClass("ibm-inactive");
            this._currentMenu = id;
            if (this._newDataSource.use) {
                if (typeof this._newDataSource.subTabs[id] !== "undefined") {
                    this._newDataSource.curSubMenu = id;
                    dojo.forEach(this._newDataSource.subTabs[id], dojo.hitch(this, function (_3b4) {
                        dojo.style(_3b4, "display", "block");
                    }));
                }
            }
            if (!this._lock) {
                this._lock = true;
                dojo.query("#ibm-common-menu .ibm-col-6-1 ul").forEach(function (item) {
                    var h = dojo.coords(item, true).h;
                    if (item.parentNode.firstChild.className == "ibm-access") {
                        for (; h > 272; h = dojo.coords(item, true).h) {
                            dojo.destroy(item.lastChild);
                        }
                    } else {
                        for (; h > 242; h = dojo.coords(item, true).h) {
                            dojo.destroy(item.lastChild);
                        }
                    }
                });
            }
        },
        _slideUp: function (evt, _3b5) {
            if (this._currentMenu == null || this._animationInProgress) {
                return;
            }
            if (this._slideToTimer) {
                clearTimeout(this._slideToTimer);
                this._slideToTimer = null;
            }
            this._animationInProgress = true;
            var id = this._currentMenu;
            dojo.animateProperty({
                node: "ibm-common-menu",
                duration: 400,
                properties: {
                    height: {
                        start: "292",
                        end: "1"
                    }
                },
                onEnd: dojo.hitch(this, function () {
                    dojo.query("#ibm-common-menu").style("display", "none");
                    if (this._newDataSource.use && this._newDataSource.subTabMenu !== null) {
                        dojo.style(this._newDataSource.subTabMenu, {
                            marginBottom: "20px",
                            marginTop: "-39px",
                            opacity: 0
                        });
                        this._newDataSource.hidden = true;
                    }
                    if (ibmweb.config.config === "w3") {
                        this._w3SwapDesign.currentLink = -1;
                    }
                    if (_3b5) {
                        setTimeout(_3b5, 1);
                    }
                })
            }).play();
            dojo.animateProperty({
                node: dojo.query("#ibm-common-menu .ibm-ribbon-pane")[0],
                duration: 400,
                properties: {
                    height: {
                        start: "292",
                        end: "1"
                    }
                },
                onEnd: dojo.hitch(this, function () {
                    if (this._newDataSource.use) {
                        if (typeof this._newDataSource.subTabs[id] !== "undefined") {
                            dojo.forEach(this._newDataSource.subTabs[id], dojo.hitch(this, function (_3b6) {
                                dojo.style(_3b6, "display", "none");
                            }));
                        }
                        this._newDataSource.curSubMenu = null;
                    }
                    this._animationInProgress = false;
                    if (ibmweb.config.megamenu.minimizeByDefault) {
                        (evt && evt.target && evt.target.id === "ibm-masthead") ? this._minimizeMenu() : null;
                    }
                })
            }).play();
            dojo.query("#ibm-common-menu a").attr("tabIndex", "-1");
            this._currentMenu = null;
            var _3b7 = dojo.query("#ibm-menu-links a.ibm-active")[0];
            if (typeof _3b7 !== "undefined") {
                _3b7.focus();
                _3b7.parentNode.className = "ibm-inactive";
                dojo.removeClass(_3b7, "ibm-active");
            }
            if (!((ibmweb.info.isIE && ibmweb.info.ieVersion <= 6) || ibmweb.info.iDevice)) {
                dojo.anim("ibm-top", {
                    marginTop: (!ibmweb.config.megamenu.noScroll) ? (ibmweb.config.megamenu.minimizeByDefault) ? 33 : this._dimensions.basicMarginTop : 0
                }, 370);
            }
        },
        onVScrollCallback: function (_3b8) {
            if (this._mouseover || this._keepexpanded || this._beingAnimated) {
                return;
            }
            var _3b9 = true,
                _3ba = (this._isExpanded) ? this._dimensions.basicMarginTop : 36,
                _3bb = (self.pageYOffset) ? self.pageYOffset : (document.documentElement && document.documentElement.scrollTop) ? document.documentElement.scrollTop : (document.body) ? document.body.scrollTop : 0;
            if ((this._isExpanded == false && _3bb < _3ba) || (this._isExpanded == true && _3bb <= _3ba && _3bb >= 0)) {
                _3b9 = false;
            }
            if (!ibmweb.config.megamenu.minimizeByDefault) {
                if (!window.pageYOffset && document.documentElement.scrollTop == 0 || (window.pageYOffset && window.pageYOffset == 0)) {
                    if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                        this._expandMenu();
                    }
                } else {
                    if (dojo.byId("ibm-menu-links").className != "ibm-access" && _3b9) {
                        this._minimizeMenu();
                    }
                }
            } else {
                this._minimizeMenu();
            }
        },
        onHScrollCallback: function (_3bc) {
            dojo.stopEvent(_3bc);
            if (!window.pageXOffset && window.pageXOffset != 0) {
                dojo.style(dojo.byId("ibm-masthead"), "left", "-" + document.documentElement.scrollLeft + "px");
            } else {
                dojo.style(dojo.byId("ibm-masthead"), "left", "-" + window.pageXOffset + "px");
            }
        },
        isTypeAheadResultDisplay: function () {
            var _3bd = false;
            if (dojo.query(".typeahead-results").some(function (node) {
                return node.style.display != "none";
            })) {
                _3bd = true;
            }
            return _3bd;
        },
        isScopePopupDisplay: function () {
            var _3be = dojo.query("#ibm-scope-button_dropdown.dijitPopup");
            if (_3be && _3be.length > 0 && _3be[0].style.display != "none" && _3be[0].style.visibility != "hidden") {
                return true;
            }
            return false;
        },
        _minimizeMenu: function (_3bf) {
            if (this.isTypeAheadResultDisplay() || this.isScopePopupDisplay()) {
                return;
            }
            _3bf = _3bf || 150;
            this._slideUp();
            if ((ibmweb.info.isIE && ibmweb.info.ieVersion <= 6) || ibmweb.info.iDevice) {
                return false;
            }
            var _3c0 = (ibmweb.config.config == "www" ? 30 : 0),
                _3c1 = (ibmweb.config.config == "www" ? 4 : 31);
            if (dojo.byId("ibm-universal-nav").style.height != (_3c0 + "px")) {
                dojo.animateProperty({
                    node: "ibm-universal-nav",
                    properties: {
                        height: _3c0
                    },
                    beforeBegin: dojo.hitch(this, function () {
                        this._beingAnimated = true;
                    }),
                    duration: _3bf
                }).play();
            }
            if (dojo.byId("ibm-mast-options").style.height != (_3c1 + "px")) {
                dojo.animateProperty({
                    node: "ibm-mast-options",
                    properties: {
                        height: _3c1
                    },
                    beforeBegin: dojo.hitch(this, function () {
                        if (ibmweb.config.config == "w3" && this._w3SwapDesign.profileLinks !== null) {
                            dojo.style(this._w3SwapDesign.profileLinks, "display", "none");
                        }
                    }),
                    duration: _3bf
                }).play();
            }
            dojo.animateProperty({
                node: "ibm-top",
                properties: {
                    marginTop: (!ibmweb.config.megamenu.noScroll) ? 33 : 0
                },
                duration: _3bf,
                onEnd: dojo.hitch(this, function () {
                    if (ibmweb.config.megamenu.icons != "none") {
                        dojo.query(".ibm-masthead-indicator").style("display", "block").removeClass("ibm-access");
                    }
                    dojo.publish("/ibm/dynnav/megamenu/minimized");
                    this._beingAnimated = false;
                    this._isExpanded = false;
                })
            }).play();
            if (ibmweb.config.config == "www") {
                dojo.query("#ibm-mast-options li, #ibm-mast-options ul").addClass("ibm-access");
            }
            if (ibmweb.config.config == "w3") {
                dojo.query("#ibm-mast-options li").addClass("ibm-access");
                dojo.query("#ibm-menu-links li").addClass("ibm-access");
            }
            if (ibmweb.config.config == "www") {
                dojo.query("#ibm-menu-links, #ibm-search-module,#ibm-arrow-logo").addClass("ibm-access");
            }
            if (ibmweb.config.config == "w3") {
                if (this._w3SwapDesign.secondSwitchEnabled) {
                    dojo.query("#ibm-menu-links, #ibm-search-module,#ibm-arrow-logo").addClass("ibm-access");
                } else {
                    dojo.query("#ibm-menu-links,#ibm-arrow-logo").addClass("ibm-access");
                    dojo.style(dojo.byId("ibm-search-module"), "display", "none");
                }
            }
            dojo.style("ibm-home", "display", "block");
            if (ibmweb.config.config == "w3") {
                dojo.query("#ibm-home").removeClass("ibm-access");
            }
            dojo.addClass("ibm-home", "ibm-sm-logo");
        },
        _expandMenu: function () {
            if ((ibmweb.info.isIE && ibmweb.info.ieVersion <= 6) || ibmweb.info.iDevice) {
                return false;
            }
            var _3c2 = (ibmweb.config.config == "www" ? 21 : 38);
            if (ibmweb.config.megamenu.icons != "none") {
                dojo.query(".ibm-masthead-indicator").style("display", "none").addClass("ibm-access");
            }
            dojo.animateProperty({
                node: "ibm-universal-nav",
                properties: {
                    height: this._dimensions.basicUniversalHeight
                },
                beforeBegin: dojo.hitch(this, function () {
                    this._beingAnimated = true;
                }),
                duration: 150
            }).play();
            dojo.animateProperty({
                node: "ibm-mast-options",
                properties: {
                    height: _3c2
                },
                duration: 150,
                onEnd: dojo.hitch(this, function () {
                    dojo.query("#ibm-mast-options li, #ibm-mast-options ul").removeClass("ibm-access");
                    dojo.query("#ibm-menu-links li").removeClass("ibm-access");
                    if (ibmweb.config.config == "www") {
                        dojo.query("#ibm-menu-links, #ibm-search-module").removeClass("ibm-access");
                    }
                    if (ibmweb.config.config == "w3") {
                        if (this._w3SwapDesign.secondSwitchEnabled) {
                            dojo.query("#ibm-menu-links,#ibm-search-module").removeClass("ibm-access");
                        } else {
                            dojo.query("#ibm-menu-links").removeClass("ibm-access");
                            dojo.style(dojo.byId("ibm-search-module"), "display", "block");
                        }
                        dojo.query("#ibm-menu-links li").removeClass("ibm-access");
                        if (this._w3SwapDesign.profileLinks !== null) {
                            dojo.style(this._w3SwapDesign.profileLinks, "display", "block");
                        }
                    }
                    dojo.removeClass("ibm-home", "ibm-sm-logo");
                    dojo.publish("/ibm/dynnav/megamenu/expanded");
                })
            }).play();
            dojo.animateProperty({
                node: "ibm-top",
                properties: {
                    marginTop: (!ibmweb.config.megamenu.noScroll) ? this._dimensions.basicMarginTop : 0
                },
                duration: 150,
                onEnd: dojo.hitch(this, function () {
                    this._beingAnimated = false;
                    this._isExpanded = true;
                })
            }).play();
        },
        onMouseEnter: function (_3c3) {
            clearTimeout(this._slideUpTimer);
            this._expandTimer = setTimeout(dojo.hitch(this, function () {
                this._mouseleaveHandlerEnabled = true;
                this._mouseover = true;
                if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                    this._expandMenu();
                }
            }), 350);
        },
        onMouseLeave: function (_3c4) {
            if (this._delayedExpandTimer) {
                clearTimeout(this._delayedExpandTimer);
            }
            if (this._expandTimer) {
                clearTimeout(this._expandTimer);
                this._expandTimer = null;
            }
            if (!this._mouseleaveHandlerEnabled) {
                return;
            }
            this._slideUpTimer = setTimeout(dojo.hitch(this, function () {
                if (this._currentMenu !== null) {
                    ibmweb.util.statsHelper({
                        "ibmEV": ibmweb.config.config + " Megamenu",
                        "ibmEvAction": "Mouse away",
                        "ibmEvName": "Close"
                    });
                }
                this._mouseover = false;
                this._slideUp(_3c4);
                (!ibmweb.config.megamenu.noScroll) ? this.onVScrollCallback(_3c4) : null;
            }), this._slideUpDuration);
        },
        setKeepExpanded: function (_3c5) {
            this._keepexpanded = !! _3c5;
        },
        onError: function () {}
    });
}
if (!dojo._hasResource["ibmweb.dynnav.app-megamenu"]) {
    dojo._hasResource["ibmweb.dynnav.app-megamenu"] = true;
    dojo.provide("ibmweb.dynnav.app-megamenu");
    dojo.declare("ibmweb.dynnav.app-megamenu", ibmweb.dynnav._module, {
        internal: {
            _status: false,
            _isAnimated: false,
            _i: 0,
            _leaveInterval: null,
            _firstClick: true,
            _actionInterval: null,
            _actionBuffer: null,
            _isMoving: false,
            _isMovingInterval: null
        },
        init: function () {
            return ibmweb.config.appmast.enabled;
        },
        onLoad: function () {
            var _3c6 = this;
            var _3c7 = dojo.query("div.ibm-menu-subtabs");
            var _3c8 = dojo.query("div.ibm-menu-subtabs a");
            var menu = dojo.byId("ibm-common-menu");
            var _3c9 = dojo.query("#ibm-common-menu div.ibm-mm-close span");
            var _3ca = dojo.byId("ibm-masthead");
            var _3cb = dojo.query("#ibm-common-menu div.ibm-container-body > div.ibm-columns");
            if (_3c7.length == 1 && _3cb.length == _3c8.length && menu && _3c9.length == 1) {
                dojo.query("li:first-child", _3c7[0]).addClass("ibm-active");
                var _3cc = function (node, i, _3cd) {
                    if (_3c6.internal._isAnimated) {
                        return false;
                    }
                    if (!_3c6.internal._status) {
                        _3c6.internal._status = true;
                        _3c6.internal._isAnimated = true;
                        _3c6.internal._i = i;
                        dojo.addClass(node.parentNode, "ibm-active");
                        dojo.addClass(_3c7[0], "ibm-active");
                        dojo.style(menu, {
                            display: "block"
                        });
                        _3cb.forEach(function (_3ce, _3cf) {
                            dojo.style(_3ce, "display", _3cf == i ? "block" : "none");
                        });
                        _3d0 = dojo.animateProperty({
                            node: menu,
                            duration: 600,
                            properties: {
                                height: {
                                    start: 1,
                                    end: 292
                                }
                            },
                            onEnd: function () {
                                _3c6.internal._isAnimated = false;
                            }
                        }).play();
                    } else {
                        if (dojo.hasClass(node.parentNode, "ibm-active")) {
                            if (!_3cd) {
                                dojo.publish("/ibm/app-megamenu/slideUp");
                            }
                            return false;
                        }
                        _3c6.internal._isAnimated = true;
                        dojo.query("#ibm-masthead div.ibm-menu-subtabs li.ibm-active").removeClass("ibm-active");
                        dojo.addClass(node.parentNode, "ibm-active");
                        var _3d0 = dojo.animateProperty({
                            node: _3cb[_3c6.internal._i],
                            duration: 400,
                            properties: {
                                opacity: {
                                    start: 1,
                                    end: 0
                                }
                            },
                            onEnd: function () {
                                dojo.style(_3cb[_3c6.internal._i], {
                                    opacity: "1",
                                    display: "none"
                                });
                                dojo.style(_3cb[i], {
                                    display: "block",
                                    opacity: "0"
                                });
                                _3d0 = dojo.animateProperty({
                                    node: _3cb[i],
                                    duration: 300,
                                    properties: {
                                        opacity: {
                                            start: 0,
                                            end: 1
                                        }
                                    },
                                    onEnd: function () {
                                        _3c6.internal._i = i;
                                        _3c6.internal._isAnimated = false;
                                        if (_3c6.internal._actionBuffer instanceof Array && _3c6.internal._actionBuffer[0] !== node) {
                                            _3cc(_3c6.internal._actionBuffer[0], _3c6.internal._actionBuffer[1], true);
                                            _3c6.internal._actionBuffer = null;
                                        }
                                    }
                                }).play();
                            }
                        });
                        _3d0.play();
                    }
                };
                _3c8.forEach(function (node, i) {
                    node.onclick = dojo.hitch(this, function (e) {
                        dojo.stopEvent(e);
                        _3cc(node, i, false);
                    });
                    node.onmouseenter = dojo.hitch(this, function (e) {
                        dojo.stopEvent(e);
                        if (_3c6.internal._status) {
                            _3c6.internal._actionBuffer = [node, i];
                            window.clearInterval(_3c6.internal._actionInterval);
                            _3c6.internal._actionInterval = setTimeout(function () {
                                if (!_3c6.internal._isMoving && !_3c6.internal._isAnimated) {
                                    _3cc(_3c6.internal._actionBuffer[0], _3c6.internal._actionBuffer[1], true);
                                    _3c6.internal._actionBuffer = null;
                                }
                            }, 250);
                        } else {
                            if (_3c6.internal._firstClick) {
                                if (i > 0) {
                                    dojo.query("li:first-child", _3c7[0]).removeClass("ibm-active");
                                }
                                _3c6.internal._firstClick = false;
                            }
                            dojo.addClass(node.parentNode, "ibm-active");
                        }
                    });
                    node.onmouseleave = dojo.hitch(this, function (e) {
                        dojo.stopEvent(e);
                        if (!_3c6.internal._status) {
                            dojo.removeClass(node.parentNode, "ibm-active");
                        }
                    });
                });
                dojo.connect(dojo.doc.documentElement, "onmousemove", function (e) {
                    window.clearInterval(_3c6.internal._isMovingInterval);
                    _3c6.internal._isMoving = true;
                    _3c6.internal._isMovingInterval = setTimeout(function () {
                        window.clearInterval(_3c6.internal._isMovingInterval);
                        _3c6.internal._isMoving = false;
                    }, 50);
                });
                dojo.connect(_3c9[0], "onclick", function (e) {
                    dojo.stopEvent(e);
                    dojo.publish("/ibm/app-megamenu/slideUp");
                });
                dojo.subscribe("/ibm/app-megamenu/slideUp", function () {
                    _3c6.internal._isAnimated = true;
                    animation = dojo.animateProperty({
                        node: menu,
                        duration: 600,
                        properties: {
                            height: {
                                start: 292,
                                end: 1
                            }
                        },
                        onEnd: function () {
                            _3c6.internal._isAnimated = false;
                            dojo.query("#ibm-masthead div.ibm-menu-subtabs li.ibm-active").removeClass("ibm-active");
                            dojo.removeClass(_3c7[0], "ibm-active");
                            _3cb.forEach(function (_3d1, _3d2) {
                                dojo.style(_3d1, "display", "none");
                            });
                            dojo.style(menu, "display", "none");
                            _3c6.internal._status = false;
                        }
                    }).play();
                });
                dojo.connect(_3ca, "onmouseleave", function (e) {
                    if (_3c6.internal._status) {
                        _3c6.internal._leaveInterval = setTimeout(function () {
                            dojo.publish("/ibm/app-megamenu/slideUp");
                        }, 800);
                    }
                });
                dojo.connect(_3ca, "onmouseenter", function (e) {
                    window.clearInterval(_3c6.internal._leaveInterval);
                });
                this.applyAria();
            }
        },
        onClick: function (e) {},
        onData: function (data) {
            var temp = dojo.byId("ibm-home");
            if (temp) {
                var ul = dojo.create("ul", {
                    className: "ibm-logo-subnav"
                }, temp);
                for (var i = 0, j = data.menuData.length; i < j; i += 1) {
                    dojo.create("li", {
                        innerHTML: "<a href=\"" + data.menuData[i].url + "\">" + data.menuData[i].title + "</a>",
                        className: i == 0 ? "ibm-first" : (i + 1 == j ? "ibm-last" : "")
                    }, ul);
                }
                dojo.connect(ul, "onmouseenter", function (e) {
                    dojo.addClass(temp, "ibm-active");
                });
                dojo.connect(ul, "onmouseleave", function (e) {
                    dojo.removeClass(temp, "ibm-active");
                });
                dojo.connect(temp, "onmouseenter", function (e) {
                    dojo.addClass(temp, "ibm-active");
                });
                dojo.connect(temp, "onmouseleave", function (e) {
                    dojo.removeClass(temp, "ibm-active");
                });
            }
        },
        applyAria: function () {
            var _3d3 = dojo.query("#ibm-common-menu div.ibm-mm-close span");
            dojo.attr(_3d3[0], {
                "tabindex": "0",
                "aria-label": "Close",
                "role": "button"
            });
        },
        onError: function () {}
    });
}
if (!dojo._hasResource["ibmweb.dynnav.greeting"]) {
    dojo._hasResource["ibmweb.dynnav.greeting"] = true;
    dojo.provide("ibmweb.dynnav.greeting");
    dojo.declare("ibmweb.dynnav.greeting", [dijit._Widget, dijit._Templated, ibmweb.dynnav._module], {
        welcomeMessage: "",
        _signinWidget: null,
        _registerWidget: null,
        templateString: dojo.cache("ibmweb.dynnav", "templates/Greeting.html", "<span dojoAttachPoint=\"containerNode\">\n\t<p dojoAttachPoint=\"welcomeMessageNode\"></p>\n\t<span dojoAttachPoint=\"bNode\" style=\"display: none\"> <span class=\"ibm-greeting-hasp\">[</span> <span dojoAttachPoint=\"linksNode\"></span> <span class=\"ibm-greeting-hasp\">]</span> </span>\n</span>\n"),
        attributeMap: {
            welcomeMessage: {
                node: "welcomeMessageNode",
                type: "innerHTML"
            },
            welcomeMessageId: {
                node: "welcomeMessageNode",
                type: "attribute",
                attribute: "id"
            }
        },
        disabledCountries: [],
        registerLink: "#",
        userstate: 0,
        init: function () {
            if (ibmweb.meta.source != null) {
                if (ibmweb.dynnav.isServiceEnabled("greeting")) {
                    this._loadGreeting();
                }
                if (ibmweb.dynnav.isServiceEnabled("signin")) {
                    this._loadSSO();
                }
                return true;
            }
            return false;
        },
        onLoad: function () {
            if (!dojo.byId("ibm-sso")) {
                dojo.create("li", {
                    id: "ibm-sso"
                }, dojo.query("#ibm-mast-options ul li#ibm-geo")[0], "after");
            }
            this.placeAt("ibm-sso");
            this.startup();
        },
        _loadGreeting: function () {
            ibmweb.dynnav.addBundleCallback(100, this, "showGreetingCallback");
        },
        _loadSSO: function () {
            ibmweb.dynnav.addBundleCallback(109, this, "showSSOCallback");
        },
        clear: function () {
            this._tempCount = null;
            dojo.style(this.bNode, "display", "none");
            dojo.empty(this.linksNode);
            dojo.empty(this.welcomeMessageNode);
        },
        showGreetingCallback: function (_3d4) {
            if (!_3d4 || _3d4.results.result == "novalue") {
                return;
            }
            var _3d5 = _3d4.results.message1;
            this.attr("welcomeMessage", _3d5 + " ");
            this.attr("welcomeMessageId", "ibm-welcome-msg");
            dojo.publish("/ibmweb/dynnav/greeting/welcome/finished", [_3d5]);
        },
        showSSOCallback: function (data) {
            if (!data) {
                return;
            }
            var _3d6 = data.results[0].fPathName;
            var _3d7 = data.results[0].regLinkName;
            var _3d8 = data.results[0].regLinkVal;
            _3d8 = _3d8.replace(/\/profile\/&/, "/profile/" + ibmweb.meta.cc + "/&");
            ibmweb.dynnav.greeting.userstate = data.results[0].userstate;
            var _3d9 = ibmweb.dynnav.greeting.userstate;
            if (_3d9 != 4 && _3d6) {
                var link = this.addLink({
                    innerHTML: _3d6,
                    href: "#",
                    tabIndex: -1,
                    onclick: dojo.hitch(this, this._signinClicked),
                    className: "ibm-sso-signin"
                });
                dijit.setWaiRole(link, "button");
                dijit.setWaiState(link, "label", _3d6);
                dijit.setWaiState(link, "describedby", "ibm-welcome-msg");
                dojo.connect(link, "onkeypress", dojo.hitch(this, function (_3da) {
                    if (_3da.keyCode == dojo.keys.ENTER || _3da.keyCode == 0 || _3da.charOrCode == " ") {
                        this._signinClicked(_3da);
                    }
                }));
            }
            if (_3d9 == 1 || _3d9 == 2 || _3d9 == 4) {
                var link = this.addLink({
                    innerHTML: _3d7,
                    href: "#",
                    tabIndex: -1,
                    className: "ibm-sso-register"
                });
                dijit.setWaiRole(link, "button");
                dijit.setWaiState(link, "label", _3d7);
                dijit.setWaiState(link, "describedby", "ibm-welcome-msg");
                if (_3d9 == 4) {
                    dojo.attr(link, "href", ibmweb.config.dynNavBaseUrl + _3d8);
                    dojo.connect(link, "onclick", dojo.hitch(this, this._signoutClicked));
                    dojo.connect(link, "onkeypress", dojo.hitch(this, function (_3db) {
                        if (_3db.keyCode == dojo.keys.ENTER || _3db.keyCode == 0 || _3db.charOrCode == " ") {
                            this._signoutClicked(_3db);
                        }
                    }));
                    dijit.setWaiState(link, "describedby", "ibm-welcome-msg");
                }
                if (_3d9 == 1 || _3d9 == 2) {
                    dojo.attr(link, "href", "#");
                    dojo.connect(link, "onclick", dojo.hitch(this, this._registerClicked));
                    dojo.connect(link, "onkeypress", dojo.hitch(this, function (_3dc) {
                        if (_3dc.keyCode == dojo.keys.ENTER || _3dc.keyCode == 0 || _3dc.charOrCode == " ") {
                            this._registerClicked(_3dc);
                        }
                    }));
                    this.registerLink = _3d8;
                }
            }
            dojo.publish("/ibmweb/dynnav/greeting/sso/finished");
        },
        _notyouClicked: function (_3dd) {
            dojo.stopEvent(_3dd);
            dojo.cookie("IBMISP", null, {
                expires: -1,
                domain: ".ibm.com",
                path: "/"
            });
            this.clear();
            this.init();
            ibmweb.dynnav.executeBundleCall();
        },
        _signoutClicked: function (_3de) {
            dojo.stopEvent(_3de);
            window.location.href = dojo.string.substitute(ibmweb.config.signin.signoutUrl, ibmweb.meta);
            return false;
        },
        _signinClicked: function (_3df) {
            if ( !! _3df) {
                dojo.stopEvent(_3df);
            }
            if (!ibmweb.config.signin.overlay) {
                location.href = ibmweb.config.signin.formAction.replace("${page}", ibmweb.util.getUrl());
                return;
            }
            if (dojo.indexOf(this.disabledCountries, ibmweb.meta.cpi) != -1 || !ibmweb.config.signin.overlay) {
                location.href = ibmweb.config.signin.formAction;
                return;
            }
            var _3e0 = this;
            var _3e1 = function () {
                ibmweb.external.signinInit({
                    register: dojo.hitch(this, function () {
                        _3e0._registerClicked();
                    }),
                    reload: dojo.hitch(this, function () {
                        _3e0.clear();
                        _3e0.init();
                        ibmweb.dynnav.executeBundleCall();
                    })
                });
            };
            if (!ibmweb.external.signinInit) {
                var _3e2 = dojo.io.script.get({
                    url: dojo.string.substitute(ibmweb.config.signin.codeRepository, {
                        "NAME": "signin_full"
                    })
                });
                _3e2.then(function () {
                    _3e1();
                });
                return;
            }
            _3e1();
        },
        _registerClicked: function (_3e3) {
            if ( !! _3e3) {
                dojo.stopEvent(_3e3);
            }
            if (dojo.indexOf(this.disabledCountries, ibmweb.meta.cpi) != -1 || !ibmweb.config.signin.overlay) {
                location.href = this.registerLink;
                return;
            }
            var _3e4 = this;
            var _3e5 = function () {
                ibmweb.external.registerInit({
                    reload: dojo.hitch(this, function () {
                        _3e4.clear();
                        _3e4.init();
                        ibmweb.dynnav.executeBundleCall();
                    })
                });
            };
            if (!ibmweb.external.registerInit) {
                var _3e6 = dojo.io.script.get({
                    url: dojo.string.substitute(ibmweb.config.signin.codeRepository, {
                        "NAME": "register_full"
                    })
                });
                _3e6.then(function () {
                    _3e5();
                });
                return;
            }
            _3e5();
            return false;
        },
        _tempCount: 0,
        addLink: function (data, _3e7) {
            if (!this._tempCount) {
                dojo.style(this.bNode, "display", "inline");
            }
            var span = dojo.create("span", {
                className: "ibm-sso-link"
            });
            if (this._tempCount) {
                dojo.query(span).addContent(" / ");
            }
            var link = dojo.create("a", data, span);
            dojo.connect(link, "onfocus", this, function (e) {
                e.target.tabIndex = 0;
                if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                    dojo.publish("/ibm/dynnav/megamenu/expandMenu");
                }
            });
            dojo.place(span, this.linksNode);
            this._tempCount++;
            if (ibmweb.config.appmast.enabled) {
                dojo.addOnLoad(function () {
                    dojo.forEach(dojo.query(".ibm-greeting-hasp"), function (item, idx) {
                        item.innerHTML = (idx == 0) ? "&nbsp;|&nbsp;" : "";
                    });
                });
            }
            return link;
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav.myinterests"]) {
    dojo._hasResource["ibmweb.dynnav.myinterests"] = true;
    dojo.provide("ibmweb.dynnav.myinterests");
    dojo.declare("ibmweb.dynnav.myinterests", [dijit._Widget, ibmweb.dynnav._module], {
        init: function () {
            return ibmweb.dynnav.isServiceEnabled("myinterests");
        },
        onData: function () {
            ibmweb.dynnav.addBundleCallback(104, this, "callback");
        },
        callback: function (_3e8) {
            if (_3e8.results && _3e8.results.length > 0) {
                var _3e9 = dojo.query("#ibm-common-menu ul.ibm-myinterest");
                if (_3e9) {
                    for (var i = 0; i < _3e8.results.length; i += 1) {
                        if (i > ibmweb.config.megamenu.maxRows - 1) {
                            break;
                        }
                        var li = dojo.create("li", {
                            "role": "presentation"
                        }, _3e9[0], "last");
                        var lnk = dojo.create("a", {
                            "href": _3e8.results[i].href,
                            innerHTML: _3e8.results[i].sname.htmlspecialchars()
                        }, li);
                    }
                }
            }
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav.easyaccess"]) {
    dojo._hasResource["ibmweb.dynnav.easyaccess"] = true;
    dojo.provide("ibmweb.dynnav.easyaccess");
    dojo.declare("ibmweb.dynnav.easyaccess", [ibmweb.dynnav._module], {
        _debugging: false,
        init: function () {
            if (ibmweb.dynnav.isServiceEnabled("easyaccess")) {
                if (!ibmweb.config.easyaccess.companyName) {
                    this._setPublicUrl();
                    if (ibmweb.storage.getItem("eaCompanyName") == null || ibmweb.storage.getItem("eaCompanyName") == "" || ibmweb.storage.getItem("eaCompanyName") == "--noCompany--") {
                        this._getAccountData();
                    } else {
                        dojo.addOnLoad(dojo.hitch(this, function () {
                            this.createEAConatiner();
                            this._showEasyAccessUrl();
                        }));
                    }
                }
                return true;
            }
            return false;
        },
        onLoad: function () {},
        onData: function () {
            if (ibmweb.config.easyaccess.companyName) {
                this.createEAConatiner();
                this._showPublicUrl();
            }
        },
        _getAccountData: function () {
            var data = {
                sid: 103
            };
            if (location.search) {
                var _3ea = dojo.queryToObject(location.search.indexOf("?") == 0 ? location.search.substr(1) : location.search);
                if (_3ea["remote_domain"]) {
                    _3ea["debugQstrIpcInfoCookie"] = _3ea["remote_domain"];
                }
                if (_3ea["debugQstrIpcInfoCookie"] || _3ea["debugQStrIpreqheader"]) {
                    data = dojo.mixin({
                        debugQStrIpreqheader: _3ea["debugQStrIpreqheader"],
                        debugQstrIpcInfoCookie: _3ea["debugQstrIpcInfoCookie"]
                    }, data);
                    this._debugging = true;
                }
            }
            ibmweb.dynnav.addBundleCallback(103, this, "showAccountCallback", data);
        },
        showAccountCallback: function (_3eb) {
            var _3ec = this._debugging ? 10 : ibmweb.config.easyaccess.lifetime;
            if (!_3eb.results.companyName) {
                ibmweb.storage.setItem("eaCompanyName", "--noCompany--", _3ec);
                return;
            }
            ibmweb.storage.setItem("eaCompanyName", _3eb.results.companyName.htmlspecialchars(), _3ec);
            ibmweb.storage.setItem("eaSiteUrl", _3eb.results.siteURL, _3ec);
            this.createEAConatiner();
            this._showEasyAccessUrl();
        },
        _showEasyAccessUrl: function () {
            var _3ed = ibmweb.storage.getItem("eaCompanyName");
            var url = ibmweb.storage.getItem("eaSiteUrl");
            if (_3ed == "--noCompany--") {
                return;
            }
            if (_3ed.indexOf("amp;") > -1) {
                _3ed = _3ed.replace(/amp;/ig, "");
            }
            if (_3ed.indexOf("IBM") == -1) {
                var div = dojo.create("div", {
                    id: "ibm-site-name"
                });
                var p = dojo.create("p", {}, div);
                var span = dojo.create("span", {
                    id: "ibm-site-name-back-link"
                }, p);
                dojo.query(span).addContent(" [ ");
                var a = dojo.create("a", {
                    href: url + "?cm_sp=" + ibmweb.meta.dc_type + "-_-" + ibmweb.meta.dc_subject + "-_-EAMH",
                    innerHTML: _3ed,
                    tabIndex: -1,
                    onfocus: dojo.hitch(this, function (_3ee) {
                        _3ee.target.tabIndex = 0;
                        if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                            dojo.publish("/ibm/dynnav/megamenu/expandMenu");
                        }
                    })
                }, span);
                dojo.query(span).addContent(" ] ");
                dojo.place(div, this._ezaccessNode, "last");
            }
            if (ibmweb.meta.ibm_pageattributes.indexOf("flashlead") != -1) {
                var el = dojo.byId("ibm-esite-link");
                if (el) {
                    var link = dojo.create("a", {
                        title: _3ed,
                        href: url,
                        onfocus: "return false;",
                        innerHTML: _3ed
                    }, el);
                }
            }
            var el = dojo.byId("ibm-related-links");
            if ( !! el) {
                var li = dojo.create("li", {}, el);
                var link = dojo.create("a", {
                    href: url,
                    innerHTML: _3ed
                }, li);
            }
        },
        _showPublicUrl: function () {
            var div = dojo.create("div", {
                id: "ibm-site-name"
            });
            var p = dojo.create("p", {
                id: "ibm-site-nm-id"
            }, div, "first");
            p.appendChild(document.createTextNode("Easy Access: "));
            p.appendChild(document.createTextNode(ibmweb.config.easyaccess.companyName));
            var _3ef = dojo.cookie("pSite");
            if (_3ef) {
                var span = dojo.create("span", {
                    id: "ibm-site-name-back-link"
                }, div, "last");
                var a = dojo.create("a", {
                    href: _3ef,
                    innerHTML: PMM.publicLinkNameData,
                    tabIndex: -1,
                    onfocus: dojo.hitch(this, function (_3f0) {
                        _3f0.target.tabIndex = 0;
                        if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                            dojo.publish("/ibm/dynnav/megamenu/expandMenu");
                        }
                    }),
                    "aria-describedby": "ibm-site-nm-id"
                }, span);
                span.appendChild(document.createTextNode(" [ "));
                span.appendChild(a);
                span.appendChild(document.createTextNode(" ] "));
                dojo.place(div, this._ezaccessNode, "last");
            }
            dojo.place(div, this._ezaccessNode, "last");
        },
        _setPublicUrl: function () {
            dojo.cookie("pSite", ibmweb.util.getUrl(), {
                domain: ".ibm.com",
                path: "/"
            });
        },
        createEAConatiner: function () {
            if (!dojo.byId("ibm-alert")) {
                dojo.create("li", {
                    id: "ibm-alert"
                }, dojo.query("#ibm-mast-options ul")[0]);
            }
            this.placeAt("ibm-alert");
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav.emailthispage"]) {
    dojo._hasResource["ibmweb.dynnav.emailthispage"] = true;
    dojo.provide("ibmweb.dynnav.emailthispage");
    dojo.declare("ibmweb.dynnav.emailthispage", [ibmweb.dynnav._module], {
        init: function () {
            return true;
        },
        onData: function (data) {
            var _3f1 = dojo.cookie("etpConf");
            if (!_3f1) {
                return false;
            }
            dojo["require"]("dijit.Dialog");
            dojo["require"]("ibmweb.dynnav.emailthispagewidget");
            dojo.addOnLoad(function () {
                var _3f2 = new dijit.Dialog();
                var etp = new ibmweb.dynnav.emailthispagewidget({
                    confirmation: true,
                    dialog_id: _3f2.id,
                    etpConf: dojo.cookie("etpConf")
                });
                _3f2.attr("content", etp.domNode);
                _3f2.show();
            });
        },
        showForm: function () {
            if (dojo.exists("ibmweb.dynnav.emailthispagewidget") && dijit.byId("emailthispagew")) {
                var _3f3 = dijit.byId("emailthispagew");
                _3f3.destroy();
            }
            dojo["require"]("dijit.Dialog");
            dojo["require"]("ibmweb.dynnav.emailthispagewidget");
            dojo.addOnLoad(function () {
                var _3f4 = new dijit.Dialog();
                var etp = new ibmweb.dynnav.emailthispagewidget({
                    dialog_id: _3f4.id
                });
                _3f4.attr("content", etp.domNode);
                etp.startup();
                _3f4.show();
            });
            return false;
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav.footer"]) {
    dojo._hasResource["ibmweb.dynnav.footer"] = true;
    dojo.provide("ibmweb.dynnav.footer");
    dojo.declare("ibmweb.dynnav.footer", ibmweb.dynnav._module, {
        init: function () {
            return ibmweb.dynnav.isServiceEnabled("footer");
        },
        onData: function (data) {
            var ul = dojo.query("#ibm-footer ul");
            if (ul.length == 0) {
                return;
            }
            ul = ul[0];
            dojo.empty(ul);
            dojo.forEach(data.footerLinkData, function (item) {
                if (ibmweb.config.config == "w3" && item.link == "http://w3.ibm.com/feedback/" && ibmweb.config.footer.feedbackLink != "") {
                    item.link = ibmweb.config.footer.feedbackLink;
                }
                dojo.place("<li><a href=\"" + item.link + "\">" + item.name + "</li>", ul);
            });
            dojo.publish("/ibmweb/dynnav/footer/finished");
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav.footermenu"]) {
    dojo._hasResource["ibmweb.dynnav.footermenu"] = true;
    dojo.provide("ibmweb.dynnav.footermenu");
    dojo.declare("ibmweb.dynnav.footermenu", ibmweb.dynnav._module, {
        init: function () {
            return ibmweb.dynnav.isServiceEnabled("footermenu") && !ibmweb.config.appmast.enabled;
        },
        onLoad: function () {
            dojo.empty("ibm-footer-module");
            var div = dojo.create("div", {}, "ibm-footer-module");
            dojo.style(div, {
                textAlign: "center"
            });
            dojo.create("img", {
                src: ibmweb.config.imageUrl + "t/loadingAnimation.gif"
            }, div);
            dojo.style("ibm-footer-module", "minHeight", "0px");
        },
        onData: function (_3f5) {
            var data = _3f5.footerMenuData;
            if (!data || data.length == 0 || data[0].title == null) {
                this.onError();
                return;
            }
            if ( !! ibmweb.dynnav.PMM.accessibilityData) {
                var h2 = dojo.create("h2", {
                    id: "ibm-footer-res",
                    className: "ibm-access",
                    innerHTML: _3f5.accessibilityData.resources
                });
            }
            var div = dojo.create("div", {
                className: "ibm-columns"
            });
            var _3f6 = ibmweb.dynnav.PMM.accessibilityData.resources;
            for (var i = 0, j = data.length; i < j; i++) {
                var col = dojo.create("div", {
                    className: "ibm-col-6-1"
                }, div);
                var ul, h3;
                if (data[i].title.htmlspecialchars().trim() == "") {
                    _3f6 = _3f6;
                    h3 = dojo.create("h3", {
                        className: "ibm-access",
                        innerHTML: _3f6,
                        style: {
                            display: "none"
                        }
                    }, col);
                    ul = dojo.create("ul", {
                        style: {
                            marginTop: (ibmweb.config.config == "www") ? "39px" : "41px"
                        }
                    }, col);
                } else {
                    _3f6 = data[i].title.htmlspecialchars();
                    h3 = dojo.create("h3", {
                        innerHTML: _3f6
                    }, col);
                    ul = dojo.create("ul", {}, col);
                }
                dijit.setWaiState(col, "label", h3.innerHTML);
                for (var k = 0, l = data[i].child.length; k < l; k++) {
                    var _3f7 = data[i].child[k];
                    var li = dojo.create("li", {}, ul);
                    var a = dojo.create("a", {
                        innerHTML: _3f7.title.htmlspecialchars(),
                        href: _3f7.url,
                        tabIndex: "0"
                    }, li);
                    dojo.connect(a, "onfocus", this, function (_3f8) {
                        dojo.addClass(_3f8.target, "ibm-active");
                        dojo.addClass(_3f8.target.parentNode, "ibm-active");
                    });
                    dojo.connect(a, "onblur", this, function (_3f9) {
                        dojo.removeClass(_3f9.target, "ibm-active");
                        dojo.removeClass(_3f9.target.parentNode, "ibm-active");
                    });
                }
                ul.firstChild.firstChild.tabIndex = 0;
            }
            dojo.empty("ibm-footer-module");
            dojo.style("ibm-footer-module", "minHeight", "150px");
            dojo.addClass("ibm-footer-module", "ibm-active");
            if (h2) {
                dojo.place(h2, "ibm-footer-module", "first");
                dijit.setWaiState(dojo.byId("ibm-footer-module"), "labelledby", h2.id);
            }
            dojo.place(div, "ibm-footer-module", "last");
            dojo.publish("/ibmweb/dynnav/footermenu/finished");
        },
        onError: function () {
            dojo.empty("ibm-footer-module");
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav.sbs"]) {
    dojo._hasResource["ibmweb.dynnav.sbs"] = true;
    dojo.provide("ibmweb.dynnav.sbs");
    dojo.declare("ibmweb.dynnav.sbs", ibmweb.dynnav._module, {
        init: function () {
            return ibmweb.dynnav.isServiceEnabled("sbs");
        },
        onData: function (_3fa) {
            if (ibmweb.dynnav.PMM.footerToolData.length == 0) {
                return false;
            }
            dojo.create("div", {
                id: "ibm-social-tools"
            }, "ibm-masthead", "last");
            ibmweb.sbs.register(dojo.byId("ibm-social-tools"));
            var ul = dojo.query("#ibm-social-tools ul");
            if (ul.length > 0) {
                ul = dojo.query("#ibm-social-tools ul")[0];
            }
            dojo.connect(ul.firstChild.firstChild, "onfocus", this, function (_3fb) {
                ul.className = "ibm-active";
            });
            dojo.query("#ibm-social-tools a").forEach(function (item) {
                dijit.setWaiRole(item, "button");
                item.tabIndex = -1;
                dojo.connect(item, "onfocus", this, function (_3fc) {
                    item.tabIndex = 0;
                });
            });
            ul.firstChild.firstChild.tabIndex = 0;
            dojo.connect(dojo.byId("ibm-social-tools"), "onkeypress", this, function (_3fd) {
                if (_3fd.shiftKey && _3fd.charOrCode == dojo.keys.TAB) {
                    ul.className = "";
                    if (_3fd.target != ul.firstChild.firstChild) {
                        ul.firstChild.firstChild.focus();
                        ul.firstChild.firstChild.tabIndex = -1;
                    }
                }
                if (!_3fd.shiftKey && _3fd.charOrCode == dojo.keys.TAB) {
                    ul.className = "";
                }
                if (_3fd.keyCode == dojo.keys.DOWN_ARROW || _3fd.keyCode == dojo.keys.RIGHT_ARROW) {
                    dojo.stopEvent(_3fd);
                    var next = _3fd.target.parentNode.nextSibling;
                    if (next && next.firstChild && next.firstChild.nodeName == "A") {
                        next.firstChild.focus();
                        _3fd.target.tabIndex = -1;
                    } else {
                        next = _3fd.target.parentNode.parentNode.firstChild;
                        if (next && next.firstChild && next.firstChild.nodeName == "A") {
                            next.firstChild.focus();
                            _3fd.target.tabIndex = -1;
                        }
                    }
                }
                if (_3fd.keyCode == dojo.keys.UP_ARROW || _3fd.keyCode == dojo.keys.LEFT_ARROW) {
                    dojo.stopEvent(_3fd);
                    var prev = _3fd.target.parentNode.previousSibling;
                    if (prev && prev.firstChild && prev.firstChild.nodeName == "A") {
                        prev.firstChild.focus();
                        _3fd.target.tabIndex = -1;
                    } else {
                        prev = _3fd.target.parentNode.parentNode.lastChild;
                        if (prev && prev.firstChild && prev.firstChild.nodeName == "A") {
                            prev.firstChild.focus();
                            _3fd.target.tabIndex = -1;
                        }
                    }
                }
                return false;
            });
            dojo.query("#ibm-social-tools").onmouseover(function (e) {
                dojo.stopEvent(e);
            });
            dojo.publish("/ibmweb/dynnav/sbs/finished");
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav.language"]) {
    dojo._hasResource["ibmweb.dynnav.language"] = true;
    dojo.provide("ibmweb.dynnav.language");
    dojo.addOnLoad(function () {
        if (!dojo.byId("ibm-language")) {
            return;
        }
        if (!ibmweb.config.language) {
            return;
        }
        dojo.query("#ibm-language a").forEach(function (link) {
            var val = link.lang || link.rel;
            if (!val) {
                return;
            }
            link.href = ibmweb.config.language[val] ? ibmweb.config.language[val] : link.href;
        });
    });
}
if (!dojo._hasResource["ibmweb.dynnav.search"]) {
    dojo._hasResource["ibmweb.dynnav.search"] = true;
    dojo.provide("ibmweb.dynnav.search");
    dojo.declare("ibmweb.dynnav.search", [ibmweb.dynnav._module], {
        _original_search_text: "",
        q: null,
        hasFocus: false,
        valueBackup: "",
        hoverTrick: false,
        init: function () {
            if (dojo.byId("ibm-search-module")) {
                return true;
            }
            return false;
        },
        onLoad: function () {
            this.q = dojo.byId("q");
            if (this.q && ibmweb.config.config == "www") {
                this.q.value = dojo.query("label[for=q] span")[0].innerHTML;
                this._original_search_text = this.q.value;
                dojo.connect(this.q, "onfocus", dojo.hitch(this, function () {
                    this.hasFocus = true;
                    if (this.q.value == this._original_search_text) {
                        this.q.value = "";
                    }
                    dojo.removeAttr(this.q, "title");
                    dojo.style(this.q, "fontStyle", "normal");
                }));
                dojo.connect(this.q, "onblur", dojo.hitch(this, function () {
                    this.hasFocus = false;
                    this.q.value = this.q.value.trim() || this.valueBackup;
                    dojo.style(this.q, "fontStyle", (this.q.value == this._original_search_text) ? "italic" : "normal");
                }));
                dojo.connect(this.q, "onmouseover", dojo.hitch(this, function () {
                    if (this.hasFocus) {
                        return;
                    }
                    if (this.q.value !== this._original_search_text) {
                        return;
                    }
                    this.hoverTrick = true;
                    this.valueBackup = this.q.value;
                    dojo.attr(this.q, "title", this.valueBackup);
                    this.q.value = "";
                }));
                dojo.connect(this.q, "onmouseout", dojo.hitch(this, function () {
                    if (this.hasFocus || !this.hoverTrick) {
                        return;
                    }
                    this.hoverTrick = false;
                    dojo.removeAttr(this.q, "title");
                    if (this.q.value == "") {
                        this.q.value = this.valueBackup;
                    }
                }));
            }
            if (ibmweb.config.config == "www") {
                this._initScopedSearch();
            }
        },
        onData: function (data) {
            if (ibmweb.config.config == "w3" && ibmweb.dynnav.isServiceEnabled("facestypeahead")) {
                dojo.attr(this.q, "autocomplete", "off");
                ibmweb.queue.push(function () {
                    return !!window.ibmweb.w3.SearchBar;
                }, function () {
                    new window.ibmweb.w3.SearchBar({
                        form: "ibm-search-form"
                    }, "q");
                });
            }
        },
        _initScopedSearch: function () {
            var sn = dojo.byId("sn");
            if (!sn) {
                return;
            }
            var _3fe = null;
            var key = null;
            var _3ff = dojo.byId("ibm-search");
            dojo.addClass("ibm-search", "ibm-with-scoped-search");
            dojo.addClass(sn, "ibm-access");
            dojo.attr(sn, "tabIndex", "-1");
            var ul = dojo.create("ul", {
                id: "ibm-scoped-search",
                onmouseover: function () {
                    if (_3fe) {
                        clearTimeout(_3fe);
                    }
                },
                onmouseout: function () {
                    clearTimeout(_3fe);
                    _3fe = setTimeout(function () {
                        dojo.style(ul, "display", "none");
                    }, 500);
                }
            }, sn.parentNode);
            dojo.style(ul, "display", "none");
            dijit.setWaiRole(ul, "menu");
            var _400 = dojo.query("#sn > option");
            for (var i = 0, j = _400.length; i < j; i++) {
                var li = dojo.create("li", {}, ul);
                var a = dojo.create("a", {
                    className: _400[i].selected ? "ibm-selected" : "",
                    rel: _400[i].value,
                    innerHTML: _400[i].innerHTML,
                    href: "#"
                }, li);
                dijit.setWaiRole(a, "menuitem");
                _400[i].selected ? dijit.setWaiState(a, "checked", "true") : dijit.setWaiState(a, "checked", "false");
                dojo.connect(a, "onclick", dojo.hitch(this, function (_401) {
                    dojo.stopEvent(_401);
                    var link = _401.target;
                    sn.value = link.rel;
                    dojo.query(".ibm-selected", ul).forEach(function (item) {
                        dijit.setWaiState(item, "checked", "false");
                    });
                    dojo.query(".ibm-selected", ul).removeClass("ibm-selected");
                    dojo.query(".ibm-active", ul).removeClass("ibm-active");
                    dojo.addClass(link, "ibm-selected");
                    dijit.setWaiState(link, "checked", "true");
                    if (this.q.value == this._original_search_text) {
                        this.q.value = link.innerHTML;
                    }
                    this._original_search_text = link.innerHTML;
                    dojo.style(ul, "display", "none");
                    _3ff.focus();
                }));
                dojo.connect(a, "onblur", dojo.hitch(this, function (_402) {
                    _3fe = setTimeout(function () {
                        dojo.removeClass(_402.target, "ibm-active");
                        dojo.style(ul, "display", "none");
                    }, 500);
                }));
                dojo.connect(a, "onfocus", dojo.hitch(this, function (_403) {
                    clearTimeout(_3fe);
                    dojo.addClass(_403.target, "ibm-active");
                    dojo.style(ul, "display", "block");
                }));
                dojo.connect(a, "onmouseover", dojo.hitch(this, function (_404) {
                    dojo.query("a.ibm-active", ul).removeClass("ibm-active");
                    dojo.addClass(_404.target, "ibm-active");
                }));
                dojo.connect(a, "onmouseout", dojo.hitch(this, function (_405) {
                    dojo.removeClass(_405.target, "ibm-active");
                    _3fe = setTimeout(function () {}, 100);
                }));
                if (_400[i].selected) {
                    this.q.value = this._original_search_text = _400[i].innerHTML;
                }
            }
            dojo.connect(_3ff, "onmouseover", dojo.hitch(this, function () {
                dojo.style(ul, "display", "block");
                if (_3fe) {
                    clearTimeout(_3fe);
                }
            }));
            dojo.connect(_3ff, "onmouseout", dojo.hitch(this, function () {
                _3fe = setTimeout(function () {
                    dojo.style(ul, "display", "none");
                }, 500);
            }));
            dojo.connect(_3ff, "onfocus", dojo.hitch(this, function (_406) {
                if (key != "EE") {
                    if (_3fe) {
                        clearTimeout(_3fe);
                    }
                    dojo.style(ul, "display", "block");
                    if (dojo.query(".ibm-selected", ul)[0]) {
                        dojo.query(".ibm-selected", ul)[0].focus();
                    }
                }
                key = null;
            }));
            dojo.connect(_3ff, "onblur", dojo.hitch(this, function (_407) {
                _3fe = setTimeout(function () {
                    dojo.style(ul, "display", "none");
                }, 500);
            }));
            var _400 = dojo.query("a", ul);
            dojo.connect(ul, "onkeypress", dojo.hitch(this, function (_408) {
                if ((_408.keyCode == 0 || _408.charOrCode == " ") && _408.target.nodeName == "A") {
                    dojo.stopEvent(_408);
                    var link = _408.target;
                    sn.value = link.rel;
                    dojo.query(".ibm-selected", ul).forEach(function (item) {
                        dijit.setWaiState(item, "checked", "false");
                    });
                    dojo.query(".ibm-selected", ul).removeClass("ibm-selected");
                    dojo.query(".ibm-active", ul).removeClass("ibm-active");
                    dojo.addClass(link, "ibm-selected");
                    dijit.setWaiState(link, "checked", "true");
                    if (this.q.value == this._original_search_text) {
                        this.q.value = link.innerHTML;
                    }
                    this._original_search_text = link.innerHTML;
                    dojo.style(ul, "display", "none");
                    _3ff.focus();
                }
                if (_408.keyCode == dojo.keys.ENTER || _408.keyCode == dojo.keys.ESCAPE || _408.keyCode == dojo.keys.TAB) {
                    dojo.stopEvent(_408);
                    key = "EE";
                    _3ff.focus();
                    dojo.style(ul, "display", "none");
                    if (_408.keyCode == dojo.keys.ENTER) {
                        this.q.value = _408.target.innerHTML;
                        dojo.query(".ibm-selected", ul).forEach(function (item) {
                            dijit.setWaiState(item, "checked", "false");
                        });
                        dojo.query(".ibm-selected", ul).removeClass("ibm-selected");
                        _408.target.className = "ibm-selected";
                        dijit.setWaiState(_408.target, "checked", "true");
                    }
                }
                if (_408.keyCode == dojo.keys.DOWN_ARROW) {
                    dojo.stopEvent(_408);
                    var curr = _408.target;
                    for (i = 0; i < _400.length; i++) {
                        if (curr == _400[i] && i < (_400.length - 1)) {
                            dojo.removeClass(curr, "ibm-active");
                            dojo.addClass(_400[i + 1], "ibm-active");
                            sn.value = _400[i + 1].rel;
                            _400[i + 1].focus();
                        }
                    }
                }
                if (_408.keyCode == dojo.keys.UP_ARROW) {
                    dojo.stopEvent(_408);
                    var curr = _408.target;
                    for (i = 0; i < _400.length; i++) {
                        if (curr == _400[i] && i > 0) {
                            dojo.removeClass(curr, "ibm-active");
                            dojo.addClass(_400[i - 1], "ibm-active");
                            sn.value = _400[i - 1].rel;
                            _400[i - 1].focus();
                        }
                    }
                }
            }));
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav.contactmodule"]) {
    dojo._hasResource["ibmweb.dynnav.contactmodule"] = true;
    dojo.provide("ibmweb.dynnav.contactmodule");
    dojo.declare("ibmweb.dynnav.contactmodule", [ibmweb.dynnav._module], {
        init: function () {
            if (ibmweb.meta.ibm_dynamiccm == "Y") {
                ibmweb.dynnav.addBundleCallback("206", this, "__contactboxcallback", {
                    v: 17,
                    wtmcategory: ibmweb.meta.ibm_wtmcategory
                });
                return true;
            }
            return false;
        },
        __contactboxcallback: function (data) {
            if (data.results["templateString"].length != 0) {
                var temp = dojo.byId("ibm-contact-module");
                if (temp) {
                    temp.innerHTML = data.results.templateString;
                    (function () {
                        var _409 = dojo.query("#ibm-contact-module").parents("#ibm-content-sidebar");
                        if (_409[0] && _409.style("display") != "none") {
                            dijit.setWaiRole(_409[0], "complementary");
                        }
                    })();
                }
            }
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav.merchandising"]) {
    dojo._hasResource["ibmweb.dynnav.merchandising"] = true;
    dojo.provide("ibmweb.dynnav.merchandising");
    dojo.declare("ibmweb.dynnav.merchandising", [ibmweb.dynnav._module], {
        init: function () {
            if (ibmweb.dynnav.isServiceEnabled("merchandising")) {
                ibmweb.dynnav.addBundleCallback("102", this, "_renderData", {
                    industry: ibmweb.meta.ibm_industry,
                    customersize: ibmweb.meta.ibm_customersize,
                    specialpurpose: ibmweb.meta.ibm_specialpurpose,
                    dc_subject: ibmweb.meta.dc_subject,
                    currenturl: ibmweb.util.getUrl().replace(/^https?:/, ""),
                    ctype: ibmweb.meta.dc_type,
                    ww: ibmweb.meta.wwCase
                });
                return true;
            } else {
                this.createRibbonFromRelativeContentColumns();
            }
            return false;
        },
        _renderData: function (_40a) {
            if (!dojo.byId("ibm-merchandising-module")) {
                return;
            }
            if (_40a.results.length == 0 || (_40a.results.length != 0 && _40a.results[0].result == "novalue")) {
                this.createRibbonFromRelativeContentColumns();
                return;
            }
            var _40b = "";
            var _40c = 3;
            if (dojo.query("#ibm-merchandising-module").parents("#ibm-related-content").length == 1) {
                _40c = 6;
            }
            var _40d = 1;
            if (dojo.query("#ibm-content-body #ibm-content-sidebar > #ibm-merchandising-module, #ibm-content-body div.ibm-columns div.ibm-col-5-1 #ibm-merchandising-module").length == 1) {
                _40d = 1;
            } else {
                if (dojo.query("#ibm-content-body div.ibm-columns div.ibm-col-6-1 #ibm-merchandising-module").length == 1) {
                    _40d = 2;
                } else {
                    if (dojo.query("#ibm-content-body div.ibm-columns div.ibm-col-6-2 #ibm-merchandising-module").length == 1) {
                        _40d = 3;
                    } else {
                        if (dojo.query("#ibm-merchandising-module").parents("#ibm-related-content").length == 1) {
                            _40d = 4;
                        } else {}
                    }
                }
            }
            dojo.forEach(_40a.results, function (item, i) {
                var crop = "";
                if (item.imgw == "168") {
                    crop = " ibm-mte-crop";
                }
                if (i >= _40c) {
                    return;
                }
                var _40e = "ibm-forward-link";
                if (item.externalUrl == 1 || item.externalUrl == 2) {
                    _40e = "ibm-external-link";
                }
                var _40f = "";
                var _410 = "";
                if ( !! item.fileExtension) {
                    switch (item.fileExtension) {
                        case "PDF":
                            _40e = "ibm-pdf-link";
                            break;
                        case "RAM":
                        case "MOV":
                        case "WMV":
                        case "SWF":
                            _40e = "ibm-video-link";
                            break;
                        case "DOC":
                        case "ODF":
                            _40e = "ibm-document-link";
                            break;
                        case "PPT":
                            _40e = "ibm-symp-presentation";
                            break;
                        case "XLS":
                            _40e = "ibm-symp-spreadsheet";
                            break;
                        default:
                            _40e = "ibm-forward-em-link";
                            break;
                    }
                    if ( !! item.popUpDownloadLink && !! item.popUpDownloadText && ibmweb.meta.encoding == "utf8") {
                        var icon = item.fileExtension == "ODF" ? "ibm-forward-em-link" : "ibm-external-link";
                        _40f = "<p class=\"ibm-ind-link\"><a class=\"" + icon + "\"  href=\"" + item.popUpDownloadLink + "\">" + item.popUpDownloadText + "</a></p>";
                    }
                    if ( !! item.fileSize) {
                        _410 = "<span class=\"ibm-item-note\">&nbsp(" + (item.fileExtension == "" ? "" : item.fileExtension + ", ") + item.fileSize + ")</span>";
                    }
                }
                var _411 = "";
                if (item.externalUrl == 2) {
                    _40e += " ibm-merchandising-module-leaving-ibm";
                    _411 = "http://www.ibm.com/links/?prompt=1&cc=" + ibmweb.meta.cc + "&lc=" + ibmweb.meta.lc + "&url=";
                }
                var _412 = "<input type=\"hidden\" id=\"ibm-mm-spot-id\" value=\"" + item.spotid + "\" />" + "<input type=\"hidden\" id=\"ibm-mm-weight\" value=\"" + item.weight + "\" />";
                if (_40d == 1) {
                    if (item.tid == 1) {
                        _40b += "<div class=\"ibm-container\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _411 + item.linkurl + "\">" + item.description + "</a></p></div>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _40e + "\" href=\"" + _411 + item.linkurl + "\">" + item.linktext + _410 + "</a></li>" + (_40f == "" ? "" : "<li>" + _40f + "</li>") + "</ul></div>" + _412 + "</div>";
                    } else {
                        if (item.tid == 3) {
                            _40b += "<div class=\"ibm-container\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _411 + item.linkurl + "\">" + item.description + _410 + "</a></p></div>" + "</div>" + _412 + "</div>";
                        } else {
                            if (item.tid == 2) {
                                _40b += "<div class=\"ibm-container alternate\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _411 + item.linkurl + "\">" + item.description + "</a></p></div>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _40e + "\" href=\"" + _411 + item.linkurl + "\">" + item.linktext + _410 + "</a></li>" + (_40f == "" ? "" : "<li>" + _40f + "</li>") + "</ul></div>" + _412 + "</div>";
                            } else {
                                if (item.tid == 4) {
                                    _40b += "<div class=\"ibm-container alternate\">" + "<div class=\"ibm-container-body\">" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _411 + item.linkurl + "\">" + item.description + "</a></p></div>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _40e + "\" href=\"" + _411 + item.linkurl + "\">" + item.linktext + _410 + "</a></li>" + (_40f == "" ? "" : "<li>" + _40f + "</li>") + "</ul></div>" + _412 + "</div>";
                                }
                            }
                        }
                    }
                } else {
                    if (_40d == 2) {
                        if (item.tid == 1) {
                            _40b += "<div class=\"ibm-container\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image" + crop + "\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _411 + item.linkurl + "\">" + item.description + "</a></p></div>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _40e + "\" href=\"" + _411 + item.linkurl + "\">" + item.linktext + _410 + "</a></li>" + (_40f == "" ? "" : "<li>" + _40f + "</li>") + "</ul></div>" + _412 + "</div>";
                        } else {
                            if (item.tid == 3) {
                                _40b += "<div class=\"ibm-container\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image" + crop + "\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _411 + item.linkurl + "\">" + item.description + _410 + "</a></p></div>" + "</div>" + _412 + "</div>";
                            } else {
                                if (item.tid == 2 || item.tid == 4) {
                                    _40b += "<div class=\"ibm-container alternate\">" + "<div class=\"ibm-container-body\">" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _411 + item.linkurl + "\">" + item.description + "</a></p></div>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _40e + "\" href=\"" + _411 + item.linkurl + "\">" + item.linktext + _410 + "</a></li>" + (_40f == "" ? "" : "<li>" + _40f + "</li>") + "</ul></div>" + _412 + "</div>";
                                }
                            }
                        }
                    } else {
                        if (_40d == 3) {
                            if (item.tid == 2) {
                                _40b += "<div class=\"ibm-container alternate ibm-portrait-module\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<div class=\"ibm-module-text\"><h2>" + item.title + "</h2>" + "<p><a href=\"" + _411 + item.linkurl + "\">" + item.description + "</a></p>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _40e + "\" href=\"" + _411 + item.linkurl + "\">" + item.linktext + _410 + "</a></li>" + (_40f == "" ? "" : "<li>" + _40f + "</li>") + "</ul></div></div></div>" + _412 + "</div>";
                            } else {
                                if (item.tid == 3) {
                                    _40b += "<div class=\"ibm-container alternate\">" + "<div class=\"ibm-container-body\">" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _411 + item.linkurl + "\">" + item.description + _410 + "</a></p>" + "</div></div>" + _412 + "</div>";
                                } else {
                                    _40b += "<div class=\"ibm-container alternate\">" + "<div class=\"ibm-container-body\">" + "<h2>" + item.title + "</h2>" + "<p><a href=\"" + _411 + item.linkurl + "\">" + item.description + "</a></p></div>" + "<ul class=\"ibm-link-list\">" + "<li><a class=\"" + _40e + "\" href=\"" + _411 + item.linkurl + "\">" + item.linktext + _410 + "</a></li>" + (_40f == "" ? "" : "<li>" + _40f + "</li>") + "</ul></div>" + _412 + "</div>";
                                }
                            }
                        } else {
                            if (_40d == 4) {
                                if (item.tid == 1) {
                                    _40b += "<div class=\"ibm-container\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image" + crop + "\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2 class=\"ibm-third\">" + item.title + "</h2>" + "<p><a href=\"" + _411 + item.linkurl + "\">" + item.description + "</a></p>" + "<p class=\"ibm-ind-link\">" + "<a class=\"" + _40e + "\" href=\"" + _411 + item.linkurl + "\" >" + item.linktext + _410 + "</a></p>" + _40f + "</div>" + _412 + "</div>";
                                } else {
                                    if (item.tid == 3) {
                                        _40b += "<div class=\"ibm-container\">" + "<div class=\"ibm-container-body\">" + "<div class=\"ibm-module-image" + crop + "\"><img border=\"0\" src=\"" + item.imgsrc + "\" alt=\"" + item.imgalt + "\" /></div>" + "<h2 class=\"ibm-third\">" + item.title + "</h2>" + "<p><a href=\"" + _411 + item.linkurl + "\">" + item.description + _410 + "</a></p>" + "</div>" + _412 + "</div>";
                                    } else {}
                                }
                            } else {}
                        }
                    }
                }
            });
            dojo.byId("ibm-merchandising-module").innerHTML = _40b;
            (function () {
                var $mm = dojo.query("#ibm-merchandising-module"),
                    _413 = null;
                if ($mm.parents("#ibm-content-sidebar")[0]) {
                    _413 = $mm.parents("#ibm-content-sidebar");
                } else {
                    if ($mm.parents("#ibm-related-content")[0]) {
                        _413 = $mm.parents("#ibm-related-content");
                    }
                }
                if (_413[0] && _413.style("display") != "none") {
                    dijit.setWaiRole(_413[0], "complementary");
                }
            })();
            if (dojo.query("#ibm-related-content div#ibm-merchandising-module").length == 1) {
                var _414 = "ibm-col-6-1";
                var _415 = 140;
                var _416 = 64;
                var temp = dojo.query("#ibm-related-content div.ibm-columns > div[class^=\"ibm-col-\"]");
                if (temp.length > 0) {
                    if (dojo.hasClass(temp[0], "ibm-col-5-1")) {
                        _414 = "ibm-col-5-1";
                        var _415 = 168;
                    } else {
                        if (dojo.hasClass(temp[0], "ibm-col-6-2")) {
                            _414 = "ibm-col-6-2";
                            var _415 = 300;
                            var _416 = null;
                        }
                    }
                }
                var re = /ibm-col-(\d*)-(\d*)/.exec(_414);
                var _417 = re[1] / re[2];
                var _418 = dojo.byId("ibm-merchandising-module");
                dojo.query("div.ibm-container", _418).forEach(function (i) {
                    dojo.addClass(i, _414);
                    dojo.removeClass(i, "ibm-container");
                });
                var div = dojo.create("div", {
                    className: "ibm-container",
                    id: "ibm-former-merchandising"
                }, "ibm-related-content");
                var body = dojo.create("div", {
                    className: "ibm-container-body"
                }, div);
                var _419 = dojo.create("div", {
                    className: "ibm-columns"
                }, body);
                dojo.query("#ibm-related-content div[class^=\"ibm-col-\"]").forEach(function (i) {
                    dojo.place(i, _419);
                });
                dojo.query("#ibm-related-content div.ibm-columns").forEach(function (i) {
                    var _41a = dojo.query("> *", i).length;
                    if (_41a == 0) {
                        dojo.query(i).orphan();
                    }
                });
                dojo.query(_418).orphan();
                var _41b = dojo.query("#ibm-related-content div.ibm-columns > div");
                if (_41b.length > _417) {
                    var _41c = Math.ceil(_41b.length / _417);
                    for (var i = 1; i < _41c; i += 1) {
                        var _419 = dojo.create("div", {
                            className: "ibm-columns"
                        }, body);
                        var len = _417;
                        if (i + 1 == _41c) {
                            len = _41b.length - _417;
                        }
                        for (var j = 0; j < len; j += 1) {
                            if (_41b[j + _417 * i]) {
                                dojo.place(_41b[j + _417 * i], _419);
                            }
                        }
                    }
                    var _41d = new ibmweb.ribbon({
                        srcNodeRef: div
                    });
                    _41d.startup();
                    dojo.style(_41d.ribbonContainer, {
                        width: "980px",
                        margin: "0 auto",
                        position: "relative"
                    });
                }
            }
            var temp = dojo.query("a.ibm-merchandising-module-leaving-ibm");
            if (temp.length > 0) {
                dojo["require"]("ibmweb.leaving");
                dojo.addOnLoad(function () {
                    dojo.query("a.ibm-merchandising-module-leaving-ibm").onclick(ibmweb.leaving.clickHandler);
                });
            }
        },
        createRibbonFromRelativeContentColumns: function () {
            if (dojo.query("#ibm-related-content #ibm-merchandising-module").length == 0) {
                return;
            }
            dojo.query("#ibm-related-content #ibm-merchandising-module").orphan();
            var _41e = "ibm-col-6-1",
                temp = dojo.query("#ibm-related-content div.ibm-columns > div[class^=\"ibm-col-\"]"),
                _41f = temp.closest(".ibm-columns");
            if (temp.length == 0) {
                return;
            }
            if (dojo.hasClass(temp[0], "ibm-col-5-1")) {
                _41e = "ibm-col-5-1";
            } else {
                if (dojo.hasClass(temp[0], "ibm-col-6-2")) {
                    _41e = "ibm-col-6-2";
                }
            }
            var re = /ibm-col-(\d*)-(\d*)/.exec(_41e),
                _420 = re[1] / re[2],
                i = 0;
            if (temp.length <= _420) {
                return;
            }
            var _421 = dojo.create("div", {
                className: "ibm-container-body",
                id: "ibm-former-merchandising"
            }, "ibm-related-content"),
                _422;
            dojo.forEach(temp, function (item) {
                if (i == 0) {
                    _422 = dojo.create("div", {
                        className: "ibm-columns"
                    }, _421, "last");
                }
                dojo.place(item, _422);
                i++;
                if (i == _420) {
                    i = 0;
                }
            });
            _41f.orphan();
            dojo["require"]("ibmweb.ribbon");
            var s = new ibmweb.ribbon({
                srcNodeRef: _421,
                style: {
                    width: "980px",
                    margin: "0pt auto",
                    position: "relative"
                }
            });
            s.startup();
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav.intercountry"]) {
    dojo._hasResource["ibmweb.dynnav.intercountry"] = true;
    dojo.provide("ibmweb.dynnav.intercountry");
    dojo.declare("ibmweb.dynnav.intercountry", ibmweb.dynnav._module, {
        init: function () {
            if (ibmweb.dynnav.isServiceEnabled("intercountry")) {
                ibmweb.dynnav.addBundleCallback("106", this, "_compareCcLc", {});
            }
        },
        _compareCcLc: function (data) {
            if (!data || !data.results) {
                return;
            }
            if (data.results.cc != ibmweb.meta.cc || data.results.lc != ibmweb.meta.lc) {
                try {
                    var _423 = ibmweb.dynnav.PMM.countryData[data.results.cc + data.results.lc].name;
                    dojo.create("a", {
                        href: "http://www.ibm.com/" + data.results.cc + "/" + data.results.lc + "/?cm_re=masthead-_-backcountry-_-top_level",
                        innerHTML: _423,
                        className: "ibm-back-country"
                    }, dojo.byId("ibm-geo"));
                } catch (e) {}
            }
        }
    });
}
if (!dojo._hasResource["dojo.io.iframe"]) {
    dojo._hasResource["dojo.io.iframe"] = true;
    dojo.provide("dojo.io.iframe");
    dojo.getObject("io", true, dojo);
    dojo.io.iframe = {
        create: function (_424, _425, uri) {
            if (window[_424]) {
                return window[_424];
            }
            if (window.frames[_424]) {
                return window.frames[_424];
            }
            var _426 = null;
            var turi = uri;
            if (!turi) {
                if (dojo.config["useXDomain"] && !dojo.config["dojoBlankHtmlUrl"]) {}
                turi = (dojo.config["dojoBlankHtmlUrl"] || dojo.moduleUrl("dojo", "resources/blank.html"));
            }
            var _426 = dojo.place("<iframe id=\"" + _424 + "\" name=\"" + _424 + "\" src=\"" + turi + "\" onload=\"" + _425 + "\" style=\"position: absolute; left: 1px; top: 1px; height: 1px; width: 1px; visibility: hidden\">", dojo.body());
            window[_424] = _426;
            return _426;
        },
        setSrc: function (_427, src, _428) {
            try {
                if (!_428) {
                    if (dojo.isWebKit) {
                        _427.location = src;
                    } else {
                        frames[_427.name].location = src;
                    }
                } else {
                    var idoc;
                    if (dojo.isIE || dojo.isWebKit) {
                        idoc = _427.contentWindow.document;
                    } else {
                        idoc = _427.contentWindow;
                    }
                    if (!idoc) {
                        _427.location = src;
                        return;
                    } else {
                        idoc.location.replace(src);
                    }
                }
            } catch (e) {}
        },
        doc: function (_429) {
            var doc = _429.contentDocument || (((_429.name) && (_429.document) && (dojo.doc.getElementsByTagName("iframe")[_429.name].contentWindow) && (dojo.doc.getElementsByTagName("iframe")[_429.name].contentWindow.document))) || ((_429.name) && (dojo.doc.frames[_429.name]) && (dojo.doc.frames[_429.name].document)) || null;
            return doc;
        },
        send: function (args) {
            if (!this["_frame"]) {
                this._frame = this.create(this._iframeName, dojo._scopeName + ".io.iframe._iframeOnload();");
            }
            var dfd = dojo._ioSetArgs(args, function (dfd) {
                dfd.canceled = true;
                dfd.ioArgs._callNext();
            }, function (dfd) {
                var _42a = null;
                try {
                    var _42b = dfd.ioArgs;
                    var dii = dojo.io.iframe;
                    var ifd = dii.doc(dii._frame);
                    var _42c = _42b.handleAs;
                    _42a = ifd;
                    if (_42c != "html") {
                        if (_42c == "xml") {
                            if (dojo.isIE < 9 || (dojo.isIE && dojo.isQuirks)) {
                                dojo.query("a", dii._frame.contentWindow.document.documentElement).orphan();
                                var _42d = (dii._frame.contentWindow.document).documentElement.innerText;
                                _42d = _42d.replace(/>\s+</g, "><");
                                _42d = dojo.trim(_42d);
                                var _42e = {
                                    responseText: _42d
                                };
                                _42a = dojo._contentHandlers["xml"](_42e);
                            }
                        } else {
                            _42a = ifd.getElementsByTagName("textarea")[0].value;
                            if (_42c == "json") {
                                _42a = dojo.fromJson(_42a);
                            } else {
                                if (_42c == "javascript") {
                                    _42a = dojo.eval(_42a);
                                }
                            }
                        }
                    }
                } catch (e) {
                    _42a = e;
                } finally {
                    _42b._callNext();
                }
                return _42a;
            }, function (_42f, dfd) {
                dfd.ioArgs._hasError = true;
                dfd.ioArgs._callNext();
                return _42f;
            });
            dfd.ioArgs._callNext = function () {
                if (!this["_calledNext"]) {
                    this._calledNext = true;
                    dojo.io.iframe._currentDfd = null;
                    dojo.io.iframe._fireNextRequest();
                }
            };
            this._dfdQueue.push(dfd);
            this._fireNextRequest();
            dojo._ioWatch(dfd, function (dfd) {
                return !dfd.ioArgs["_hasError"];
            }, function (dfd) {
                return ( !! dfd.ioArgs["_finished"]);
            }, function (dfd) {
                if (dfd.ioArgs._finished) {
                    dfd.callback(dfd);
                } else {
                    dfd.errback(new Error("Invalid dojo.io.iframe request state"));
                }
            });
            return dfd;
        },
        _currentDfd: null,
        _dfdQueue: [],
        _iframeName: dojo._scopeName + "IoIframe",
        _fireNextRequest: function () {
            try {
                if ((this._currentDfd) || (this._dfdQueue.length == 0)) {
                    return;
                }
                do {
                    var dfd = this._currentDfd = this._dfdQueue.shift();
                } while (dfd && dfd.canceled && this._dfdQueue.length);
                if (!dfd || dfd.canceled) {
                    this._currentDfd = null;
                    return;
                }
                var _430 = dfd.ioArgs;
                var args = _430.args;
                _430._contentToClean = [];
                var fn = dojo.byId(args["form"]);
                var _431 = args["content"] || {};
                if (fn) {
                    if (_431) {
                        var _432 = function (name, _433) {
                            dojo.create("input", {
                                type: "hidden",
                                name: name,
                                value: _433
                            }, fn);
                            _430._contentToClean.push(name);
                        };
                        for (var x in _431) {
                            var val = _431[x];
                            if (dojo.isArray(val) && val.length > 1) {
                                var i;
                                for (i = 0; i < val.length; i++) {
                                    _432(x, val[i]);
                                }
                            } else {
                                if (!fn[x]) {
                                    _432(x, val);
                                } else {
                                    fn[x].value = val;
                                }
                            }
                        }
                    }
                    var _434 = fn.getAttributeNode("action");
                    var _435 = fn.getAttributeNode("method");
                    var _436 = fn.getAttributeNode("target");
                    if (args["url"]) {
                        _430._originalAction = _434 ? _434.value : null;
                        if (_434) {
                            _434.value = args.url;
                        } else {
                            fn.setAttribute("action", args.url);
                        }
                    }
                    if (!_435 || !_435.value) {
                        if (_435) {
                            _435.value = (args["method"]) ? args["method"] : "post";
                        } else {
                            fn.setAttribute("method", (args["method"]) ? args["method"] : "post");
                        }
                    }
                    _430._originalTarget = _436 ? _436.value : null;
                    if (_436) {
                        _436.value = this._iframeName;
                    } else {
                        fn.setAttribute("target", this._iframeName);
                    }
                    fn.target = this._iframeName;
                    dojo._ioNotifyStart(dfd);
                    fn.submit();
                } else {
                    var _437 = args.url + (args.url.indexOf("?") > -1 ? "&" : "?") + _430.query;
                    dojo._ioNotifyStart(dfd);
                    this.setSrc(this._frame, _437, true);
                }
            } catch (e) {
                dfd.errback(e);
            }
        },
        _iframeOnload: function () {
            var dfd = this._currentDfd;
            if (!dfd) {
                this._fireNextRequest();
                return;
            }
            var _438 = dfd.ioArgs;
            var args = _438.args;
            var _439 = dojo.byId(args.form);
            if (_439) {
                var _43a = _438._contentToClean;
                for (var i = 0; i < _43a.length; i++) {
                    var key = _43a[i];
                    for (var j = 0; j < _439.childNodes.length; j++) {
                        var _43b = _439.childNodes[j];
                        if (_43b.name == key) {
                            dojo.destroy(_43b);
                            break;
                        }
                    }
                }
                if (_438["_originalAction"]) {
                    _439.setAttribute("action", _438._originalAction);
                }
                if (_438["_originalTarget"]) {
                    _439.setAttribute("target", _438._originalTarget);
                    _439.target = _438._originalTarget;
                }
            }
            _438._finished = true;
        }
    };
}
if (!dojo._hasResource["ibmweb.dynnav.ccfintercept"]) {
    dojo._hasResource["ibmweb.dynnav.ccfintercept"] = true;
    dojo.provide("ibmweb.dynnav.ccfintercept");
    if (document.location.href.search(/\.ibm\.com\/us\/en\/([\?#].*)?$/) !== -1 || document.location.href.search(/#intercept-on-hp-test-lalasalt$/) !== -1) {
        ibmweb.config.set({
            opinionlab: {
                intercept: {
                    percent: 20,
                    start: "Feb 10 2014",
                    stop: "Mar 10 2014",
                    invitation: {
                        title: "Tell IBM what you think",
                        content: "We want to learn more about how you want to use the IBM website. Would you be willing to answer a few brief questions?",
                        yes_label: "Yes, I would",
                        no_label: "No Thanks"
                    },
                    survey: {
                        type: "asm",
                        id: "11639",
                        width: 535,
                        height: 550
                    }
                }
            }
        });
    }
    ibmweb.dynnav.ccfintercept = {
        url_whitelist_flag: false,
        callback_whitelist: function (urls) {
            var _43c = false,
                len = urls.length,
                i = -1,
                href = window.location.href;
            while (++i < len && !_43c) {
                var _43d = RegExp("^" + urls[i] + "$", "i"),
                    _43e = href.match(_43d);
                if (_43e && _43e.index === 0) {
                    _43c = true;
                }
            }
            if (_43c) {
                ibmweb.dynnav.ccfintercept.url_whitelist_flag = true;
            } else {
                ibmweb.dynnav.ccfintercept.url_whitelist_flag = false;
            }
        }
    };
    dojo.addOnLoad(function () {
        (function () {
            var ol = ibmweb.config.get("opinionlab");
            if (!ol) {
                return false;
            }
            if (!ol.intercept) {
                return false;
            }
            var _43f = 30,
                now = new Date(),
                _440 = 400;
            var _441 = _442("ccf-global-intercept");
            if (_441 !== null) {
                _441 = JSON.parse(_441);
                var _443 = new Date(_441.date),
                    _444 = new Date(_443.getTime() + (_43f * 24 * 60 * 60 * 1000));
                return false;
            }
            var _446 = ol.intercept,
                _447 = _446.survey;
            if (!_447) {
                return false;
            }
            if (!_447.type) {
                return false;
            }
            if (!_447.id) {
                return false;
            }
            var _448 = "ccf-" + _447.type + ":" + _447.id;
            var _449 = _442(_448) !== null;
            var _44a = new Date(_446.start);
            if (isNaN(_44a.getTime())) {
                return false;
            }
            if (now < _44a) {
                return false;
            }
            var end = new Date(_446.stop);
            if (isNaN(end.getTime())) {
                return false;
            }
            if (now > end) {
                return false;
            }
            var _44b = (end - _44a) / (1000 * 60 * 60 * 24),
                _44c = 7,
                _44d = 90;
            if (_44b < _44c) {
                end = new Date(_44a.getTime() + (_44c * 24 * 60 * 60 * 1000));
            }
            if (_44b > _44d) {
                end = new Date(_44a.getTime() + (_44d * 24 * 60 * 60 * 1000));
            }
            var _44e = _446.percent,
                _44f = _446.invitation,
                _450 = (typeof _446.presentDelay == "undefined") ? 3000 : (_446.presentDelay * 1000),
                _451 = (typeof _446.launchOn == "undefined") ? "entry" : _446.launchOn,
                _452 = null,
                _453 = "",
                _454 = false;
            if (!_44e) {
                return false;
            }
            if (_44e > 25) {
                dojo.io.script.get({
                    url: "//w3.ibm.com/w3/js/ccf/ccf-intercept-whitelist.js"
                }).then(function () {
                    if (!ibmweb.dynnav.ccfintercept.url_whitelist_flag) {
                        _453 = "<div style=\"background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAYAAAAYJBvJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAALB1JREFUeNrsfQdcU+f6/wFCJoEACXvJEBAVFHChIlqtAmJV8NYusXW23uttq/56q7VaO7S3w3pbR3Fr1ap1VUVRQBGRDYqAAmGGEbIHYZP/+4Sk/5QCQQwV9Lyfz5EkJx4O5/2+z/N95muQiWH7MHy8qEOJjnZ0KNDBRUcZOtjoqEGHBB0t/kqlkoA/Jxwg6OChoxwdJeioRocMHa0AEPgiDhIcIBoJUqqWIDKNBNF8GQfJiwuQRrUEKetJguAgwSUIT5cE0QzDofwXE3x86G0YZqDEJ78/AAGCWowODjqkPQFkSIOE8v77XpaxsYsVa9b4VmIYtbWffwshOJhpeuHCbD6LZYqWEkE5gPfb4uPDQDNkpBw8EqRaDZDWngAyZEFiYG1NNAoOHgavPTZsGNe4YsXY8n4ChfHDD7MoY8c62f/2W1ghk2mF7D5jfU8iaenSYabvvz/VaP36CYUYZirXUvN/gzTsSlLZWhxEI0E6ervAkAMJdcuW0VYZGdEkLy9bCZfbAp8Fb9o0onXFCr/+AKV4zZrbrQpFG8PFhT7+zJnpjwYAKPL0dBH8tJs+3anM3d25FsPISj1KwycgqRozl6P2g/QqQYYsSCjz5o2CnxsnTcrb+vLLjzKuXlVNQEg/gdKenMyLi46+19zQ0G7l5kadeOZMiDZQYCLNU1KiqlkshrSf6qg1P19Wk5BQBa/dFy92Rvdo0gDSxNOTqTrv6+uSi2EWEv0aEtoSpB77s6OsTxJkSIIE1AzB0pKmmlwGg2YjFPKKN25M15zvD1Act2zxmrlnjz+JRjOC99pAabCyopmsWjWR6OBgrvznPwNBVaAladTTvZkhbiOfPNlOjABGROCyrqxcYXzs2EyxtzeTvX17nkrqvfYas87S0pKPYcTSVasyU778Mi9m+fKyJgQQPUqSrhIE+EeRFkntkwTRDKMVGDZ3yNBztNoVfn5M2rBhjJFTptAEKSl1fs7OLVaRkR41bHYT3cKCYOvvbxF36pTQrLFRQcewNgMdoGN8993LLS0typ2vv15SzeG0u44eTWXY2BAtXnrJIfP0aa4kOZkjMDAgHfroI64ZhjXbowdPxrC/rEDTmJiplPHjXelz5rjmZGXJXZYtG0FksWgUFxdz2zff9FLa2VEbFYoOcwcHqsLIiFiblFRvh64lycwUMTCsCREsmQ36adw5wfomqewuHOSJfofBYI/dmHz7bQBp+nRPxBtaizdsSBUJBMrguLg5fxLniFMs8/Iq/DIhYbi9uzvpp+joIoeEhDx/DBMZdzOhmkFGq90MEcrHd++Kv168uNwFw8SBy5bZzt682RPO17PZitjIyJRmgaAFXcTADT1kdEJG6uaaYisrE5uzZ+eaIW4Dquv0kiXZzUqlke877wwLDA011/6usK6udfe4cXfRH1FljYDXjCQIXLO3e+0nSdW2YiT9AcigVzdgntKiosaCiqE4OjI89++fKTAzMzs+Y8ad8txcOXznQVKS7MRXX3FH+/sbsezsjJrQBBXk5LShJWOMxHdvggSTxMXVwU/PoCBG0IIFph5orikXL+bDZ41yeUdRYWF7sUBAdsCwhiCEGXfEQUk9TCShvr4pecGCWwAsUF1RR46M7VAqDeJXrcr5JiQkK+nUKT5cE75rYWNj7IEsHiT7qaqFgCSengHSb5I6pNQNmI3GkZHeaJUR9v/735V2I0eawMN1DQuze3TtWn3mN9+UnPv++/rqiorWNz/7zCHknXdsjIyNDU9s21ZblZoq9kELFk1uo1E34hvIqEIma5Pl5ysUrq6mDC8v8zGzZ5tjzs40nw8+8CaamZF/XreOc+7bb3nOCDje6ECqoYnYiyqASaYpFM25V67wQFWZWVuTRoaHW9VnZvIYeXnV3Bs3ahNOnRKQnZxM7Dw8KCQGg5h26hSoHAWtc3IHmqT2W40ZDhaJoe3QAoAwtm6dSZ861e1+fLz0UUKC+EhUVA6XzW6EVbrwyBF/+/Hj6eMwrG7NDz/Yogkh1qFzXy9ZUp585Eg9mlQBAoiC0GV1gvlsmZPzOvgsHGNjF9H+97+pBT/+yC64fh0eLDZywQJHmpOTWWFysiTzwgXRaHT9QLQqrZBKMNABaPObNyOsjx8PZhgYNCdERt7RSJR5hw8HEsePt0JSShokEJS3JiWVaP4fMoVpYhW+9EpSy7Q8qU8lQQaVJLG4ePEVoqsrS+7mZpF/8WK9iYmJgVlo6DBDY2MjKw8Pk4rUVJEjm11Vdfkyhzlzpj2sUvTXE/lxcTUNBw8WJF++LP7lu+9EjeXlMmQf88YikMDK15YiQFIt9uwJl9XXN6f99hvf1tOTxhw1ylJOpVLi1qx5mHrpklDa2mq078MPa+L37+chIimaiPT6cKRiyL2oAgC4xa5d4UglmpCdnc1NZ81yLP3110r26dNV1jNnAoBJw8LC7LNu3BA6GhoqRu/dO9mISiXeOH5cVJOeLkLgkSA7uGWwkNRBBxKVt9HAwJCTlsZT2NmZ52dltQTt2DHq/u7dZWVJSTzH0FAHsomJke/cucyyzEwxs7iYW3TlSl2lQkH89bPPuBZo9TgivkARChsQKOSgYkYi1eA4dSrd+saNKCGa3Pr0dAlMMm39+hGkMWMcLn//fa1QLDYY+/LLjPtJSXIjGo1o5+tLlZ87VypJSqqlikRSBAzRGAQ0pGoUugBivHixV4e5uUnc3r11jqNG0U0RKKxmzrQrPX26Eg4ASkFmZtPNo0dFLIVCRjA2bnlUVNRxfscOLiLCIi80mWCF6UHFlKo5SE1/zNxBad3AAzaPiQlv4vEU8fPmJQuVSvLiu3enEalUAr+0tOHSwoWpJu7uNBDXILbBYohbuvSeaWpqFRLRRDgAIMMAJOhhoadlAJID1AJt374gkzlzfOD33Pnii4cG+/Y9cFu71tn2ww+DxFxuCwNJldzYWEH8r79KPzx8eNiDa9f4SStWZCJrSGCKHq4KVDrMZ+A1oLbgdfLBg1W/bNlSP9zfn7T6+HFvMrpfUDc3IyOT4XyhQEAB83kCmky41zwMM29CCxRZShIgw8QnJ63dSRCNitGE+zv0NVfPjJO0KpWGCOgGVGS1TDh7NgTdiDIhOjoFwMB0daWFnz07UVZS0nAxOjoDPgOgWEZGDq9CGHBFD3YSejhIVMuRedAOk0lQAwRGxcqVGeXx8SBysSkbN44EB1vWDz/UKvj8RgAIWBkp1641hC9frjJNH967pxAhixjuAUS/iQ6AwJBlZQnbGhtb4fWwqVOtrC0sOlhZWaXXoqPTNN5b+zVrfDoEgiaEpJopiN+AjwVMXsRz+Og9SJKnBYh2LEY73N+hz7l6ZuqmsaKiqSA7W2I9Z44ziGhbJJZz9+4tZycl8d3DwlS63GHmTJu8vXtLQfWIlUrSwfXra1jo4bigh4tmt9WoF2uj7O5dIX3mTCequTkRTSKrSi43KD1/vspp+nQbUGGBc+aYMZ2cyEBSf/nkk1p0TQla2VJqHy0NRUVFc15WlswuNNTJHFldXjNnWgBnYhUX1xVkZUkFSDL+snFjLQJFwwh0bVu1dQT3DL8DDsKTO856SxjSq4oZFOoGIp9IkZI4Eya4zjp0aCJJLaJ/j4y8R9dSM5rPWtUOLSSepUiCyHqbTG1VAFKDYmKikpixn31W9PD8eZ7fu++6NXd0GN05eVIoQaoNrXApUgVcZBXJevNXAIeibNwYYOTiwhTeuVNd8N//lkjc3KzCDh8er7nXu1FRtyz4fAlIPDmyXHpzwOlBxZRgfcgHGbIg6StQsm/dkl9ZvToPqZdaxEEUoAp0rXYwc8EBt97PL7dRqTRe8b//OY1GZBbOXdm6tbjowIHyZiRFQb2gla5A6ksGPpW+Ak/b03shIuJOO4NBnX/kSADc/+0DB6qFW7emIa4kB8BppIYezVwNSS3uQlI7BmqenglIwF8B0VyYyPrExIq8r74qFJqZmUUcPjxOGyjGFhakvOJiIxDZoNPB2tDFFWC1Q/gdeMHGsDA2s7SUY29p2b4oOXm6Joh3dtmyHGJcHBs4AgM9YFofYjzMpKTXDSkU40P//ncpWEeLP/nE1s7NjXwfkd47iPRajx9vZh8V5XZ03TrOODR5QWi1w7X1GKzrKkGqBoKkDgriCo4n+ttvT9BEc61CQpxnxMXNbhYK235bsiRLQ/oc3nrLvaO4WIyWbvVEtHp0ObQ0oyk/Xy7IyKgFQKzeudPe1tKyY7hAwO1obGyBIGDS77/Lb8XFtaMnb4D4TXNfSCph0iQWAASceXHnzjWJExI4sStWZMG54ZMnW9RimAkxLa2mdN26VD+kthzVFpeeAdI1YWhASOozBwmIbMry5QEgpjdNm1bwQXBwMUwcnPNZt24EPz1dfCk6Oj3l9On6899/L4DPwQJwU1sxvUkP6jffBJL27p0iYLFMH23cmK36v35+tFeTk0PGV1a+QWEyKWkXLghj3nuv3AZdD63yFqM+EsdmgUAlEazd3CiB06eTPcGPIhZXw9/RJJe3C9GfBqplvNpq6S3Go4dYTJW+PKmDTt2AX8Ty2LEF8Bp8Ff8ODHzkhR6qo4cH4fX4eJWu/zYkJMuJza4EH0IDIn3D0cPw0GEmduUKMHEFhw4VleXmNvq+957nMD8/Ewj6Pbh9W7Zn1apKNMF8NJn1yJpp6LMlg+6HERv7irmPjyW8L75xo9be05NKdXIyO7Z5Myfz8OGacKQGRndOHqZnCaIdixlwkvpMJUnj7dtC4B/wGnwV7+3d6+hiadnqXlxcCRMLVkgBm60ik/4YJoQVCY4yXX4E6ltv+YP/Y+/SpY9Lc3MbjKlUQoerq7VEKFT+GhGRvmv+/Lx1kyY9+nnVqnIkkYTo2jx3HZKp64B7KHjrrducBw9ggjAPZK4DQBAQ5WkXL0qQepEykcDRM0C6i8VI/04J8scC/ztUTIe9vWlzXp44bcmSDPf9+8nes2ZZQ46FZ0DANKqJiREBTezdU6cEILJBTFuglWLQR+kE3EaIiC7FwcHEFamXtKtXxRa2tpTpn346PDY8PNkyK6sYEV9DmGikZhptOv0VvUqmFqXSULBzZzFEZ+GewJ9hzeOJ08LDb8a/9JKnoKODIheL2yuysyEcIBuB1I9l/+MvfYnF1DwLCfK3qBtIGIJ8EM37x+fPV9xcu7Yw+Oef/UfOns1SEU2kCq7s2VN/edcuHqiCEPRAXDofkm6vLZp8Vk7OayRLS1VeRk5srGDPypWVP1dWjgGVtjMwMBVdrxqZuA1qr2yHQR8sI3id8dVX95v37MmHewGgwMxAljuaNRqaMSqY0OiXtiELSaExzQ30B5Aei7efhatiQD2u9B07QqT19c2lDx82sZycyExvb4bJiBGmcStW3Kd7e5taubvTCESioVAoxKquXKkGh5Z6UpS9maOU9et92v38LIWpqWIxgWDAmjzZTuVlffy4LWzVKkuGjQ0p8cQJQUFSkgwSiWzVEeHeJpE4f74dceVKX0NEfA2NjQ3tp0yxYTc0GMmysiCe0wb/H6QcSAxIOwSvL/AasLooOsD3FGZu9bNSMQMOEpAg5PXrA0mOjuZntmypOvH557xGsbh5ZEgIg4WAAQC5joBi6u1NB6A4DR9OYjg4GEvj4lTpfD2BBPwrkJNKHjfOmTZxohNp/ny3ksuXa+t5vA77MWMYjug6ZDqdkHr+vABc7cM6E4YkpjqirCBBLI4fX9hOo1GSDh6sVZLJRKSyjMGd3xUohmqOok43VBrqV8Vw1Y6y0i5m7jMtUtQ7SIAnmG3aNN2YyTSB9ywPD2rZ77/XUO7dKxMic9E1OJgFwBBKpR05n31WAJKFbmNDObJ1K7e9tlYO4rsnUsnYty8Uqae2Ux9/XGHt4UGBQKCUQKBk7tlTkXT4MLesrKzth2XLqopu3BC6dYb7+U6dyUe9PmTSe+95QRrB3ZMn689s384vPHWqymP6dHOQSN0BRY+P65nEYp4pSLRTDuMOHuR5TpxoChnsEPyquXy5yig5mcNpaDDgy+WE09u21SGuIJH9/nvZnevXZfz8fDla+VLQ7935GIBQkqdMcc26fFkolEgMgxYutIT8VqWxsbHL+PF0zpEjbGVuLnhlpYhICkchkKBrNVL64K8A1QWSyczOjnI3JqYGmch1DGdnI1ZgoBWcB6BkFxS0tLPZEsj9MNQvQAY0YWhQEVdNyiG8vnPwIOfEli3crvkVSZGRt6kCgbwc0RUk/w1HoskE1zgf/XfwRYAHFI7uVj7U0ULKIRBduB7kgxz66KOaH+7fH1Vx/77s17lz08H/oSl50JVYDBIPc3U1lV25Uieur+8Ynp0dRWUyKUB46+Liyh2Dg63rOJx2rlBImBQebgrm9c2IiNuQEM18ekumu+JtkCC1Wo6yDmyQDL35SaToYTdUVqqcSQGLFtl5+/sTzbOyyq9q5VfQ33prBDjK0GTypqLVCn4QiG+ARxWtfimYp9oAATIJua+GX389QcJg0CsTEjhkdfyFLxIZvrt7tyO8zr55UyZGQAMfC70Pmeeq8spjxxZYbt36kkNS0quSSZMc0jdtyoH7BB+O15tvDodc10wk4a59+22lStoolQZoqZuJVJRE7xJEu+xhUAFEL5IEJtIwKMih+uDBMnZ9vTHU0wIgYMUDQGhpaZym8ePtWVFRHhD8mogeBiQM6SKTQFIhxqPxop6cOzeVIBQ2BB89OsF+1Cgzzfeyrl4V7l61qhJJJR4yd2vBktF1z1C2aWBhQYeSB03W2/klSzL5bHaT93vvDReIxQbleXlNYyZPJo+ZMYMO3Gf32rWVlefPc8IwrHy4yhrWm5n7p7qYAPSdQaJl9AMSk337gmjqNEGYSKiprS8ubgk7e3YiAAUe/rXo6FRyWlp1PYaR++pqhwHhfnBqnfr881qxWIwJExJqQkNDMQMGg5TP5ZoYOziYpl+6JOkQiSDPVRqI1IAXsga0rwvmMuSgtCMVokr2AV4TFTUKyja/CgnJ5QiFxI3nzrlCNBfu9eySJVmy9HSB6bhxlnN37/alW1mR4DpxMTF1Z7dtq/VFEzsNScB+qpuuEuQv4f4A9b0PNpD0W90ABwGACMvK5LVoBYI7/KVDhybRkOUCYX5NSQFIEAAIZGf11dUO6gA8qSWZmQ13zp2TyxISqsJfe404ae/eyQ6zZtmK4+OrRUeO5I8SiSrQpFWBA65rrigAxPzChQjGuXPzylksSygAN1m9egIARKU+zMxoDiJR3fXIyLuae408csSf7uFBc5RK+ZVnzxazU1KEH02b9ggAgq4vHI0Os6dPWu7Wkxrw9AHBwQcSk7VrJ8LPra+8UqbBvabOxG3hQtuLkZGptw4cqAYVAxIEkcl2WIG6EnsarayovLg4VR3M6NmzmSP8/Y3BWjHLzeWovsRkmsL1kPgSIXDUoZvgD+smWGfo6WlmiFSKoq2NIJ83z4fDZJrnLF2a2IIkHpz/8PhxNzNLS0N3gYCbEhWVCECBBKfc4mJj2aNHDfXbtz+MffXVdNPS0lqkHqs1+SzG/c9JbdQiqX8q3g7Qr1n9bExgcI4R333XV0IkGkmQJQFOJOMFC1wlUinW2NSkBHP0+ObNVfbe3jQweV2QySjk8ZoLvvuuGKkCGWR+9eYk0wAEormPsrMl3JQUKcnX18x02DCzoFdfZRk6O9Ps33jDjcRi0S799BOvNjdXFS+xVxNdg268svKCAkXezZu8UpGIOOfTT4ebz5rlkPXTTxWPk5KE7mFhdpDn6jhzpnXB5ctcB4FAWIiId9KZM2JLNJlwv+qk5UZEqsFrq7r/p8hJ7dHM7Q4gW7ZsGTqSBEgpMzf3NYi/0MaOdbT7+OOg8gkT3BDjIhWuXZu6f9q0tIg1a6xUuZ2HD9fLudxGyA+5fuKE5EJMDORsNEOZgqeOnFTVjQQEqFzrDV5eDpAfWrZ9e15NXp7KWvJesMDJ1NubBUnLiYcPC5AV1GDWQ9aXqlQDqRnIKwFJQS4oUOV9mA8bZhJ89mywtKREocnAt3Fzo8BntUjK2PL5ollIdYHEgFRGsJKgwAtem/YvLtNdwlCxNkCsKyuHRLs3Qm8xErMdO2YZkslEqEuBlL2K/PwmDhLHs8PCnIzS07kB8AARuUMHtjkx0ccWEcBTn35aEXfokBjKGqHUUi1BOnrjNhCoa5BIOsBFS7CxofORYPF49Ih7LywsvsLNzWnEa685xv/yi0RcWqoAVztIEfMeQGI0bZq9sb29hfe1a3NpLBa59MKFst/eeisLclCBTM9FpBo4EwAFVCP70aPWLD7fFAFEAoFAXTGefkqQCqxLG8yhApBerRvI9KIvWjQGnFb/XbmyzsvNrX3BRx/Z+Lz8ssoL2cjnNz785JMMs6Ag6+FvvKFq1XDr1CnBqQ0bKhBAhAhAPKdeXOzaKkb7M8gr4Tx4IDEsK+O2FRTwORkZcjSRHdDkBQqcdCUtN02ZYmMXExMKRBre/xQdXSxFxNd53DgTqCF+2hzaJwRIfZdYjKSrBHF0cvrrBYaKCWz83/+Ot/jHP3xLcnIU0traprGhoRZdvwM9y3YHBibT3NzoPKWSyi0tbYEaWqhU81Bni/cqxjZv9pOyWEwjFxcWy82Npil90B5QZIUIZxpU3wPx1ZW03Ozjw3CKjV2kec8pKWn+NSoqw1MgqFNOmGCjycqHrHb21q056JpNmsju35HVjgDyp2cypEGiiIhwGfbjj7O0PxPV1bX+tGEDl1tR0fK/27dd4bP/8/PL8RYKq2lq8Q8qBjynuh44cIeq27flhRhmhuSwGVIx1B2Fhf7gUT24fbvIa+RIoxa5vPW3DRtK/dADR8Dj9cU/gb5gKHj99ZElRKJN2Pr1TgA8SGC+Exl5awJ6n5WY2GQxY4bz8Q0bKsdhWC1c17KPSU79IKl/qovpTsUMBZD0yElaLl2qvs7j3TZduNAbo9FIiadPSx4mJsrRA22Y/vLLf/QNqxMKCehhtwQiFWOI6U7soWg5tGgCgUK+cWMO/erVWvBxyMvL3ck+PhYcZJlk7d5dC22inDvJo858VOA2YJYbUCikaiQhqg8dKvrl4UPhm0eP+kICc2ROjqo7UpVAUBS3YUM+MqGb0fTI6U+fLNSTimF3kSBDtidxj9YNZFox792rLFm3LjV+9eqcMW5uTR/v3Elfsno1MXT7di/4zu/79vFJ6HtQPkBUB9V0ZX4BB2knk8l5167xyJaW1Ml79wYxV60ajiarta20VJUh7z16tBECh2Qa0uPT0YMe3oeKPQguKtF1BTU1rTeuXcNGz5lDt8vIYF9Rx440que3AwcakURqDFTnuuo5qx0AUq5l5kq6UzFDbRB6OaEEtQFV9hMjIijumzcP10hI+KcAmaOnvviCi1akmNnHmhjSv/41Gn4eWb++0sTRkTpq9mwM2j+0u7nZKubMaRTk50vFJBI3Ydeu6jGdK12hq8AJrDBIhpaUl8v2vf8+Z9ry5baf5OaOg3Oyigrp5SlTEo9Onny7zc/PPiU+vtUeSSWQIH1RiU8Ri6kZamZuv0CiAQr4CJovXarIMzVNoYaHeyna2oyvHjggLExMhLYJYsg+t+lDUA1GB41Ghp+z1q51gKRlsJw4aJWFr1zJSqitleUcOcJW7N4NwDMc1gffitoDSwYXvkF7e/OG8+e9/7BykPSgOzubSgMCnCwyM8uJ8fGiUPQnAVF10U/xVE+NdIekmfvUbnnwHSiOHy+Nf/XV1FNvvHFfnphYiQhf9TS1KuiryOZ8+eUD+AkAgQ6Ev+7YwfMYOVLVDqowN7edJxBgUBA+Sd3Eri9tGVry8+USZCqbqoNxRdnZjf+ZN68859YtVaS2XCikQO4KAp4E3TMfUhJM9Zu03LVHmUwtQTqw52T0OQoMDi/oWCxV9/gCjyccT+Kqhn5ohrt2hbi+8sow7c+hfuXziIgSiJFMRg8drquL24DqQqrGtPrAgceFv/8u4QcGDpPQ6YygRYssgDz7I5M94+pV8YFVq0oRr6mEGA9RP0G0JzZzextD2gQeiKHsXHK06lmzRngtWeImk0qVKWfOCB8nJIih/cMUZJKCC7834GlnwP0hoVJTeYmrV+eOQ7zJc/58Z/gs++pV4dH//KfaUiQSgMQDv83fYOY+MUl9YUECZJL02muukA8i1CpywjqfrhF6opRCDGNUYRgdsslsEUeAPBNndf1Kb9eGTDXYVWJbSMiD4JUr7aa++ioT+svXJSRUtyckVBADAlic1lbT7Ph4BbqubCyaTFAxJv0L8feFpHbrScVB0suAjDLa4sX+UIWv8soiq6N0x44s4pUr5Qy1eoK+JJDfAQeABD6HSewqQbqrpoN+7WDSXtqzhxe1bp1NJgIItNaaGBZmtsvJKQ76jTSpe4+AY8+ps09q2wDUxRT1V8UMNZDovRYYAAJlD8fff78YeqtCG23CvHk+ZZ6eDmL1zg8ABvByQkDNRW3mdqdiCMHBw5gffDCZevjwTNvHj5dwg4KcahMSKlUdlxFAQKUA53D18lIBUmhhYY6sljboDYL4DR9ItYn+Saqmy2Gtlpn73JBUvYME8kzkVlY0zW5QsPJBgjxISJAq6XQKhOKh7KGDSqW4rls3Gj1ZuvwJ6o8b6+oaVKtt+nSHto4Ow4yWFqvEL78s05x3HjvWdMOlS57Wbm5UyHXlClVOX5UjsDvJpAcz9y+NdJ8XM3fAQEIJDx9lfe5ceOt//hPY9q9/jaq4fl0In/uFhTGhlTf4QQ7885/lvlOnmtBsbCiPEQ8RPEG2uSwlhfsHYUXSgzBihDW/qKj5xsqVaSClLG1sCGY2NqTrMTFcIKlQvK2nwm1dZu4LIUH65EzDdJihIDVMnJzMhq9ePRoSexJ/+SWRdvNmjetLL6kSiLore2h5AmA2X7tWzV+8WFgrEBiPmjqVvmTbNvtrxsbyxgsXShJWrkyXOTpap8XHQ7eiZsQ/ZFDHA469vyEW0/IiSJCnJq5APglHjsyyDglRmZwQF9kbGZnnYWAgnnn0aKDdU5Y9qBxlCFAFyKDJwDCrsH37Ro2ZM0fVRAaSr02trckn5s5NVRQXyxAioYNiI7SsoKj7uuqZpGpnlOk1FvNcWzfwZ8DecfbvvRegaVgHqYuxkZF3iQJBQ8dLL7kZOjiYpV68KO2t7KE7Pwg47sSHDlVAiSZCkyEPOjQiw8knJiZohDrpCRxwByIicqEk0xfDxCT9Osr0aua+kCCBiTTw8WHV3b8vT7x6tZUREeH66tatKomiKk8wMmoXsdnSk0uXPgZrw7bTFG3QFVTTtMxq4vMbL44dex3KMKzUHYSAHMP2ZgbLlvk2UKn0G8eOSWxEovrpaALBAadHFdPVk6odi9E7BxnS+SS9WTSaxjRmixZhhtOm1V18552HsUZGzXM2bx4OeaRwjltTo6rAh1oVTRxGV56JcWioKg0y4dgxHlIzFtBhQAMSAJc3kkZl+/dnV6BfPQoBXJPVPkCe1K6xmBd2j+onAglkzwNARIgTlBYWtkB8xGPmTJvQmBjDpOXLs449eCAJ2rRpRC2H03F448Z6NIkG4MjSpQrAQwsbImoccPdu3VL9n66RWgDKcHWYX6l+T9FvuF+7ePu5SBj6201gYmSkKtno+NattSQ6naDZLgx4wpSYGH8jNlt0NSLiTuy77953FolqYWuRvpikHVxuy8O3347XFE6t/PZbe4alpYEBSN4u3zVWdxvSFHoNAEnV3nn7hTFznxok4GonffPNOGFVVTPUwtAYDKORU6aY3vz555qbJ06o9uWFLHqvjRtHoglsRjyBMxMdPn2ImagccEuXusnu3hXGLlmiyiJzcHcnRZ09G1jBZDIHYsfvHkjqXxrpvugSpM8gATIJ1f2MRYv8bp07p4gJC8sNWbRIZd7ePnpUwLKwaIeeHr98/TVvzwcf1EPcxKYzsafXZnPaW51Zbd06Y2x29nyWqytJ0xUavKhBZ85MezQwW8Pr3HkbB0gfQaLaXfvnn1VloFB0lZGerkQmjMycwVA9wG9yc319Z89mFt6+LUr48UfocihE5+VdeYIqKowsIrBQwLzVAE9JoZBST5/mAsigY7P/5s1jKtLT5WfVQIHCqUw+3xQ2KRggCaLtSX1hYjF6BQlktWvIpNLERLX7E2zNUbVtWwbsZacimVeuSE588QUUbYs19TbaZi4Agnnnzmv0jz6aloNh5rCztvHcuaqko3M7dlTvWbeufnNgYC74PcDf4rZ0qWtTejrv/Lx5yedWry6A30nUX8W9tgThY3/eeRuXIP0BycN5826AdxNeL16/3sopIEDVLM/w7l3uxYCA65/4+WUeWr26FBJ7IG/DpZu2EtT33w+AUtGUkye5WFSUl4jJpMNeM3DO1N6eYodANw1NkjA2VrXLpcv48Qy0nInWRUW1szozyvq8+UA/JUgNLkGewgSm83jyOwsX3p545kwI+D/ePHZsdGx0dCM1LY3ti2Eia6GwETgIuMOBh3RnjrYpO7tY+oSGWlu8/bYDJzWVVZWYyIFOv3NWrLCiEwjNxnFxCs9XXrGH7539+ut6dD0jyNK36UP/1X4CpLQbKwaXIP3xuCo7ZbAxkEcNUFQJP/PmJXkUFVVBEzxNy8qeJrJ+xAgrz3Pnwonq2tzvo6NL5QkJlcuuXvWzHTmSof3d8v+f68qZiv4r/emzyXoycwcsFvM8elx7VTcw8ZCU7MXn19/TavSSXlRE5qnJpAHW+17v5kymgQYgMKI2bbInWloSr4eGJt89eLAKao2L0XFl3z7epxERZZDr6qZOFhoAM7e0G0cZrmKeRpJ0J1HA2gAyCVzBrQ/Jxc0AxB9/DLmXlUWIWL/eUVObGx8ZecdIIFBUIK2G5H/nBkmI00C431M/IOkai2EPRoA8VwE+DVDAHAVyCmSyL8VTkFIAGfIPMMzCOCDA+i3EazTtH25HRt5mCgQStUiD9pqt4En9OzY1HCwc5LnKcdWoHjBxnXX0HenCjJUQhIOmel6ZmYXQjVHT19VqzZrRUMcDVpFXZ7CuaQBqc9ndcBCcpA4ESLT5h84964KDme1WVmRwnGkCcVadDWganJBlBDuFwxZqJ7du5QqeMFvtCSVIOdalkS7OQQZQ3fRlaNo/ECwsTNobG1uLdu26r/jpp0LtlliabV7zMYwxgPvm/i0JQ7i6eVK0WVsTobKutaPDKOPMmTrIbvf+v/8LIGzbFoTkPa1Z/btA/YBUGeBNDbW3RcU9qYMFJOTVq1VpBL998QXncV5eK5BTcNnLyGQ6YeXKUWg5U1q1gAJF27r6uvaTg2i3f3juireHNEiaxGKVyRr+0UfOb3z2mSNsdVaUmiqf/I9/sDBbW2h5RZfof8+/rtFc7VgMTlIHA0hAxRjPn28P0V3uzp1s2FUTdnmAZKRL+/aJ/IKCVA43TkVFB7dz3zrDAQBIVwmCJwwNFuKqXfNbeekSu2TNmgyz11938f/qqwna34Miqo9DQorGYlhtSP+b9/eFpP5pU8OhIkGey0RoGJDrCvkgDTxeU/GtW9KkQ4cUMz7/PKAhJaX20IwZd0d9+OEIKOK+ERPD42RnQ99VaL0tNRuYWEw59px2GBoykkS9e6Zvzbp1uRDlVe3be+9eZBuJRDn5+ee1wdHR1rDdu+b7pyIj02rT06VSdTkntJWA7kVQ3U/Xb/sH7XB/9VCTIM+VJLG4cCGCYG9vQWUyWYXR0SnQjN+CTCZRLC0pb+/cqerlCv3JOEVFze5jxlBZs2c7SdPTc/wwTAD75vbUVkJPJBXPah8MxLXu5MnHKsRPn+7guH9/MBRIPf722/tSdWba3cuXZetDQysep6erOgBk3bnTDFuNQEdGl17aSujRzMVJ6rNWN7Ww49XKlWODNm4cCe8Lrl+vz16+PFWM1EkxEjRrL13yodLphtBmAlIQv4iIKBmPJm8qIpS62mv2EyClQ5WkDlV1Y9gdBzE9cSJEbGVlAr1EoMZFuW/fg8TPPy+A81BjMyYmZgICQMuKd981gk6KABBo/7BzyRJVPojLwOSDaEgqG8NzUp+tJLFEpBQ4CLSxSl6w4JY7n88Hr2gFsnpbV6zwC9m0aQR8796hQ5X1n36agWaPUGJhYVsnFBoigMhGIS4C5Zj0QdqjDJckepAkGg4CbawCz5yZAYlG4CxTbS3288+5D8+dg3gI5jlnjm0+UjdmsMmxUFgxG63yGWgCkU6S6DlhCI/FDDaQ8HftKr77xRcP4TXkfEBuqzZQjLKyKtSzaID4iglEd8dimCiws+ZGoefSSzwWMxhBwuzCQTRAKfX0tIddvl1Xr1Zt8ZqTkCBTqlNL+ppn0g8O8pdNDXEJMkisG4jWIoZI5b/8sufsnTv9NLt6awbkqG5asKDSSSSC2hiOS+ek6hsg2irmua3NHbL5JKBCYOKtr19/BLuEQxmm5lzqlSsSBJAqM5FIBEnLmv4heiapePH2UPGTQBZZHYaRcxFBlfn7O2dlZYGvvQ3MXD9EX6Cpv64+8P2UIHpppItLkr/JmQZAgSa90LMMHGjkznzVJpAgA9RpuUTbzB3sGysPxBhysRtwqQOZBe8pEFVoLEPQz8R1F4v5024PLyJABuMgPMEXlZj+Jq2nrPY/YjE4QIYgSPQpTTEdxdv+ysEmcHGQPCuAaMdi/iic8sfx8UKDROemhjhAXmyQ9NSjrAaXIDhIejJz2bgEwUHSE0DYXQCCS5AXHCS6GukCQPBo7gsMkt4ShnAVg4NE987bOEBebJDo3O0BB8iLDRKdsRgcIC82SHAzFwfJE5NUHCA4SHqUIBU4ScVB0hNA6nGSioNEF0ktw0kqDhKcpOIg6beK6brzNi5BXnCQ9CVhCI/FvMAgwROGcJA8EUktx81cHCR9Jam4mYuDBI/F4KN3kPRGUmU4ScVB0lvCEK5icJD0GIvBVQwOkr8ApF7LiqnFzVwcJN2RVDwWg48/gaQnkoo7yvDxB0h6i8XgAMGHCiR48TY+dIIEj8XgQydIynEzFx+6QKLtScUlCD7+MqCxnhWmbsWNu9rx0RNISLgEwYcukBjgAMFHryDB8YEPXeP/CTAAf3oHi2QB+X0AAAAASUVORK5CYII=) no-repeat scroll 0px 0px transparent; height: 136px; width: 135px; z-index: 9999; position: absolute;\">&nbsp;</div>";
                    } else {
                        _453 = "";
                    }
                    _454 = true;
                });
            } else {
                _454 = true;
                _453 = "";
            }
            if (!_44f) {
                return false;
            }
            var _455, _456;
            var _457 = ((Math.random() * 100) < _44e);
            ibmweb.config.get("opinionlab").intercept.clear = function () {
                _442(_448, null);
                return true;
            };
            if (_457) {} else {
                var _458 = "1";
                try {
                    var _459 = {
                        date: new Date().getTime(),
                        type: _447.type,
                        id: _447.id
                    };
                    _458 = JSON.stringify(_459);
                } catch (er) {}
                _442("ccf-global-intercept", _458, new Date((new Date()).getTime() + (_43f * 24 * 60 * 60 * 1000)));
                _442(_448, _458, end);
                _447.url = null;
                switch (_447.type.toLowerCase()) {
                    case "asm":
                        _447.url = "https://survey.opinionlab.com/survey/s?s=" + _447.id;
                        break;
                }
                if (_447.url === null) {
                    return false;
                }
                ibmweb.queue.push(function () {
                    if (_454) {
                        return true;
                    } else {
                        return false;
                    }
                }, function () {
                    var _45a = "<div class=\"ibm-common-overlay\" id=\"sp-intercept-overlay-invitation\">\n\t<div class=\"ibm-head\">\n\t\t<p><a class=\"ibm-common-overlay-close\" href=\"#close\">Close [x]</a></p>\n\t</div>\n\t<div class=\"ibm-body\">\n\t\t\n\t\t{{watermark}}\n\t\t<div class=\"ibm-main\">\n\t\t\t<a class=\"ibm-access\"><!-- Accessibility anchor --></a>\n\t\t\t\n\t\t\t<div class=\"overlay-content-slide active\" data-slide=\"main\">\n\t\t\t\t<div class=\"ibm-title\">\n\t\t\t\t\t<h2>{{title}}</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-container ibm-alternate\" style=\"\">\n\t\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\t<p>{{content}}</p>\n\t\t\t\t\t\n\t\t\t\t\t\t<p style=\"padding-bottom: 3px;padding-top: 8px;\">{{anonymity}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-buttons-row\" style=\"text-align: right;\">\n\t\t\t\t\t<div class=\"ibm-rule\"><hr /></div>\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-pri\" data-action=\"opt-in\">{{yes_label}}</a>\n\t\t\t\t\t&nbsp;&nbsp;\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-sec\" data-action=\"opt-out\">{{no_label}}</a>\n\t\t\t\t\t&nbsp;&nbsp;\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<a href=\"javascript:;\" data-action=\"change-slide\" data-slide-target=\"about\">About feedback at IBM</a>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t\t<div class=\"overlay-content-slide\" style=\"display: none;\" data-slide=\"about\">\n\t\t\t\t<div class=\"ibm-title\">\n\t\t\t\t\t<h2>Ongoing Web Feedback at IBM</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-container ibm-alternate\" style=\"\">\n\t\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIBM collects opt-in feedback from IBM web users on a broad and continual basis throughout it's web sites.\n\t\t\t\t\t\t\tAll feedback submitted are reviewed only by IBM employees or IBM affiliates and no feedback is shared outside\n\t\t\t\t\t\t\tof IBM for any reason. See IBM's <a href=\"http://www.ibm.com/privacy/us/en/?lnk=flg-priv-usen\" target=\"_ibm_privacy_policy\" data-action=\"close-overlay\">privacy policy</a> and <a href=\"http://www.ibm.com/legal/us/en/?lnk=flg-tous-usen\" data-action=\"close-overlay\" target=\"_ibm_tou\">terms of use</a> for further detail.\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIBM may use a third party to collect or process feedback. Any such party is also bound by the IBM policy.\n\t\t\t\t\t\t\tCurrently we use opinionlab for feedback processing.\n\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-external-link\" data-action=\"change-slide\" data-slide-target=\"leaving\">opinionlab</a>\n\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYour input is very valuable to us and although we read every comment that is sent to IBM in an effort to continuously\n\t\t\t\t\t\t\timprove our web sites for you, we generally do not reply to comments from this system unless otherwise stated.\n\t\t\t\t\t\t\tThank you for participating in the IBM web feedback program.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-buttons-row\">\n\t\t\t\t\t<div class=\"ibm-rule\"><hr /></div>\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-sec\" data-action=\"change-slide\" data-slide-target=\"main\">Back to Feedback</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"overlay-content-slide\" style=\"display: none;\" data-slide=\"leaving\">\n\t\t\t\t<div class=\"ibm-title\">\n\t\t\t\t\t<h2>Leaving the IBM Web Site</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-container ibm-alternate ibm-buttons-last\" style=\"\">\n\t\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYou are now leaving the IBM Web site. IBM makes no representations or warranties about any other Web site which\n\t\t\t\t\t\t\tyou may access through this one. When you access non-IBM Web sites, even though they might contain the IBM logo\n\t\t\t\t\t\t\tand content regarding IBM's products and services, such Web sites are independent of IBM and IBM has no control\n\t\t\t\t\t\t\tover the operation of non-IBM Web sites. In addition, a link to a non-IBM Web site does not mean that IBM endorses\n\t\t\t\t\t\t\tthat Web site or has any responsibility for the use of such Web site.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibm-buttons-row\">\n\t\t\t\t\t<div class=\"ibm-rule\"><hr /></div>\n\t\t\t\t\t<a href=\"https://secure.opinionlab.com/about_this_system.html\" target=\"_about_opinion_lab\" class=\"ibm-btn-pri\" data-action=\"change-slide\" data-slide-target=\"main\" style=\"float: right; display: inline;\">Continue</a>\n\t\t\t\t\t<a href=\"javascript:;\" class=\"ibm-btn-sec\" data-action=\"change-slide\" data-slide-target=\"main\">Cancel</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"ibm-footer\"></div>\n</div>\n\n\n<div class=\"ibm-common-overlay\" id=\"sp-intercept-overlay-survey\" style=\"width: {{survey_width}}px;\">\n\t<div class=\"ibm-head\">\n\t\t<p><a class=\"ibm-common-overlay-close\" href=\"#close\">Close [x]</a></p>\n\t</div>\n\t<div class=\"ibm-body\">\n\t\t<div class=\"ibm-main\" style=\"padding: 0;\">\n\t\t\t<a class=\"ibm-access\"><!-- Accessibility anchor --></a>\n\t\t\t<div class=\"ibm-title\" style=\"display: none;\">\n\t\t\t\t<h2>Survey!!!</h2>\n\t\t\t</div>\n\t\t\t<div class=\"ibm-container ibm-alternate\" style=\"padding: 0;\">\n\t\t\t\t<div class=\"ibm-container-body\">\n\t\t\t\t\t<iframe src=\"{{survey_url}}\" width=\"{{survey_width}}\" height=\"{{survey_height}}\" frameborder=\"0\"></iframe>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"ibm-footer\"></div>\n</div>",
                        html = _45a.split("{{title}}").join(_44f.title).split("{{content}}").join(_45b(_44f.content, _440)).split("{{yes_label}}").join(_44f.yes_label).split("{{no_label}}").join(_44f.no_label).split("{{survey_url}}").join(_447.url).split("{{survey_width}}").join(_447.width).split("{{survey_height}}").join(_447.height).split("{{anonymity}}").join("Your feedback is anonymous").split("{{watermark}}").join(_453);
                    try {
                        var _45c = html.match(/class="ibm-common-overlay" id="[^"]*"/g);
                        _456 = _45c[0].substring(31, _45c[0].length - 1);
                        _455 = _45c[1].substring(31, _45c[1].length - 1);
                        var css = document.createElement("style");
                        css.type = "text/css";
                        css.innerHTML = "div.ibm-common-overlay div.overlay-content-slide { display: none; } div.ibm-common-overlay div.overlay-content-slide.active { display: block; }";
                        document.body.appendChild(css);
                        dojo.place(html, dojo.query("body")[0], "last");
                        dojo.query("[data-action]", dojo.byId(_456)).connect("click", function () {
                            actions = dojo.attr(this, "data-action").split(/,[\s]*/g);
                            var _45d = dojo.attr(this, "data-slide-target");
                            dojo.forEach(actions, function (_45e) {
                                switch (_45e) {
                                    case "change-slide":
                                        dojo.query("div.overlay-content-slide", dojo.byId(_456)).style("display", "none");
                                        dojo.query("div.overlay-content-slide[data-slide='" + _45d + "']", dojo.byId(_456)).style("display", "block");
                                        var top = Math.max(0, Math.floor((dojo.window.getBox().h - dojo.marginBox(dojo.byId("dialog_" + _456)).h) / 2));
                                        dojo.query("#dialog_" + _456).style("top", top + "px");
                                        break;
                                    case "opt-in":
                                        ibmweb.overlay.hide(_456);
                                        ibmweb.overlay.show(_455);
                                        break;
                                    case "opt-out":
                                        ibmweb.overlay.hide(_456);
                                        break;
                                }
                            });
                        });
                        if (_451 == "entry") {
                            setTimeout(function () {
                                ibmweb.overlay.show(_456);
                            }, _450);
                        } else {
                            if (_451 == "exit") {
                                dojo.query("a").forEach(function (node, _45f) {
                                    if (node.innerHTML != _44f.yes_label && node.innerHTML != _44f.no_label) {
                                        dojo.connect(node, "onclick", function (e) {
                                            e.preventDefault();
                                            ibmweb.overlay.show(_456);
                                            _452 = e;
                                        });
                                    }
                                });
                                window.onbeforeunload = function () {
                                    if (confirm(_44f.title)) {
                                        ibmweb.overlay.show(_456);
                                        return false;
                                    } else {
                                        return true;
                                    }
                                };
                            }
                        }
                    } catch (er) {}
                });
            }
            function _442(name, val, _460) {
                var _461 = 0,
                    _462 = null;
                if (typeof (_460) != "undefined") {
                    var now = new Date();
                    switch (typeof (_460)) {
                        case "string":
                            _462 = new Date(_460);
                            _461 = Math.floor((_462 - now) / 60000);
                            break;
                        case "number":
                            _462 = new Date(new Date().getTime() + (_460 * 60000));
                            _461 = _460 * 60;
                            break;
                        case "object":
                            _462 = _460;
                            _461 = Math.floor((_462 - now) / 60000);
                            break;
                    }
                }
                if (ibmweb.storage.isSupported()) {
                    if (typeof (val) == "undefined") {
                        return sessionStorage.getItem(name) || ibmweb.storage.getItem(name);
                    } else {
                        if (_461 !== 0) {
                            sessionStorage.removeItem(name);
                            if (val === null) {
                                return localStorage.removeItem(name);
                            } else {
                                localStorage.setItem(name + "_expire", _462.getTime());
                                return localStorage.setItem(name, val);
                            }
                        } else {
                            localStorage.removeItem(name);
                            localStorage.removeItem(name + "_expire");
                            if (val === null) {
                                return sessionStorage.removeItem(name);
                            } else {
                                return sessionStorage.setItem(name, val);
                            }
                        }
                    }
                } else {
                    if (typeof (val) == "undefined") {
                        return dojo.cookie(name) || null;
                    } else {
                        if (_460) {
                            return dojo.cookie(name, val, {
                                expires: _462,
                                path: "/"
                            });
                        } else {
                            return dojo.cookie(name, val, {
                                path: "/"
                            });
                        }
                    }
                }
            };

            function _445(_463) {
                if (_463 === null) {
                    return null;
                }
                var ret = "",
                    then = new Date(_463),
                    now = new Date();
                if (!(now.getFullYear() == then.getFullYear() && now.getMonth() == then.getMonth() && now.getDate() == then.getDate())) {
                    var y = then.getFullYear();
                    var m = then.getMonth() + 1;
                    var mm = (m < 10 ? "0" : "") + m;
                    var d = then.getDate();
                    var dd = (d < 10 ? "0" : "") + d;
                    ret += mm + "/" + dd + "/" + y;
                    ret += " ";
                }
                var h = then.getHours();
                var m = then.getMinutes();
                var mm = (m < 10 ? "0" : "") + m;
                var a = (h > 12) ? "pm" : "am";
                h = ((h + 11) % 12) + 1;
                ret += h + ":" + mm + a;
                return ret;
            };

            function _45b(s, n) {
                var m, r = /<([^>\s]*)[^>]*>/g,
                    _464 = [],
                    _465 = 0,
                    _466 = "";
                while ((m = r.exec(s)) && n) {
                    var temp = s.substring(_465, m.index).substr(0, n);
                    _466 += temp;
                    n -= temp.length;
                    _465 = r.lastIndex;
                    if (n) {
                        _466 += m[0];
                        if (m[1].indexOf("/") === 0) {
                            _464.pop();
                        } else {
                            if (m[1].lastIndexOf("/") !== m[1].length - 1) {
                                _464.push(m[1]);
                            }
                        }
                    }
                }
                _466 += s.substr(_465, n);
                while (_464.length) {
                    _466 += "</" + _464.pop() + ">";
                }
                if (_466.length > 400) {
                    _466 = _466.substring(0, _466.lastIndexOf(" ")) + "...";
                }
                return _466;
            };
        })();
    });
}
if (!dojo._hasResource["ibmweb.dynnav.opinionlab"]) {
    dojo._hasResource["ibmweb.dynnav.opinionlab"] = true;
    dojo.provide("ibmweb.dynnav.opinionlab");
    dojo.declare("ibmweb.dynnav.opinionlab", [ibmweb.dynnav._module], {
        init: function () {
            return ibmweb.config.opinionlab.footer.enabled || ibmweb.config.opinionlab.floating.enabled;
        },
        onLoad: function () {
            var url = dojo.config.modulePaths ? dojo.config.modulePaths.ibmweb.substr(0, dojo.config.modulePaths.ibmweb.indexOf("js/dojo")) : "/common/";
            if (dojo.query("link[href$=\"/common/v17/css/external/opinionlab.css\"]").length === 0) {
                dojo.create("link", {
                    type: "text/css",
                    rel: "stylesheet",
                    title: ibmweb.info.w3 ? "w3" : "www",
                    href: url + "v17/css/external/opinionlab.css"
                }, dojo.query("head")[0]);
            }
            if (typeof (OOo) != "object" || OOo === null) {
                dojo.create("script", {
                    src: url + "/js/dojo/1.6/ibmweb/external/opinionlab.js",
                    type: "text/javascript"
                }, dojo.query("head")[0]);
            }
            var _467 = this;
            ibmweb.opinionlab = ibmweb.opinionlab || {};
            ibmweb.opinionlab.defaults = {
                customVariables: {},
                emailInfoLoaded: false
            };
            ibmweb.opinionlab.setUserData = function (data) {
                var name = (data.User.NickName.length === 0) ? data.User.CommonName : data.User.NickName;
                ibmweb.opinionlab.defaults.customVariables.userName = name;
                var _468 = data.User.Email;
                ibmweb.opinionlab.defaults.customVariables.userEmail = _468;
                var _469 = dojo.cookie("w3ibmProfile"),
                    hkey = _469.split("|")[0];
                ibmweb.storage.setItem("w3UserName_" + hkey, name);
                ibmweb.storage.setItem("w3UserEmail_" + hkey, _468);
                ibmweb.opinionlab.defaults.emailInfoLoaded = true;
            };
            var _46a = dojo.cookie("w3ibmProfile");
            if (_46a && ibmweb.config.get("opinionlab").getUserInfo === true) {
                var hkey = _46a.split("|")[0],
                    name = ibmweb.storage.getItem("w3UserName_" + hkey),
                    _46b = ibmweb.storage.getItem("w3UserEmail_" + hkey);
                if (name && _46b) {
                    ibmweb.opinionlab.defaults.customVariables.userName = name;
                    ibmweb.opinionlab.defaults.customVariables.userEmail = _46b;
                    ibmweb.opinionlab.defaults.emailInfoLoaded = true;
                } else {
                    var _46c = "//w3.ibm.com/w3restsvc/user/1.0.0/$appid/json/hkey/$hkey/callback/$callback",
                        _46d = "6127839ee7627460c4189e36fc6b1b01",
                        _46e = _46c.replace("$appid", _46d).replace("$hkey", hkey).replace("$callback", "ibmweb.opinionlab.setUserData");
                    dojo.io.script.get({
                        url: _46e
                    });
                }
                setTimeout(function () {
                    ibmweb.opinionlab.defaults.emailInfoLoaded = true;
                }, 4000);
            } else {
                ibmweb.opinionlab.defaults.emailInfoLoaded = true;
            }
            var _46f = this.getLanguage();
            ibmweb.queue.push(function () {
                return typeof (OOo) == "object" && OOo !== null;
            }, function () {
                if (_46f == "") {
                    replaceURLPattern = window.location.href;
                } else {
                    replaceURLPattern = window.location.href + "?lang=" + _46f;
                }
                if (ibmweb.config.opinionlab.footer.enabled) {
                    var _470 = dojo.query("#ibm-footer ul");
                    if (_470.length == 1) {
                        dojo.subscribe("/ibmweb/dynnav/footer/finished", function () {
                            _467.createFooterLink();
                        });
                        _467.createFooterLink();
                        _467.oo_feedback = new OOo.Ocode({
                            onPageCard: {
                                closeWithOverlay: {}
                            },
                            referrerRewrite: {
                                replacePattern: replaceURLPattern
                            }
                        });
                    }
                }
                if (ibmweb.config.opinionlab.floating.enabled) {
                    var obj = {
                        floating: {},
                        referrerRewrite: {
                            replacePattern: replaceURLPattern
                        }
                    };
                    if (ibmweb.config.opinionlab.floating.type == "overlay") {
                        obj.onPageCard = {
                            closeWithOverlay: {}
                        };
                    }
                    if (ibmweb.config.opinionlab.floating.hide) {
                        obj.disappearOnClick = true;
                        obj.cookie = {
                            name: "oo_float",
                            type: "page",
                            expiration: ibmweb.config.opinionlab.floating.hide
                        };
                    }
                    ibmweb.queue.push(function () {
                        return ibmweb.opinionlab.defaults.emailInfoLoaded && ibmweb.config.get("opinionlab").customVariablesLoaded !== false;
                    }, function () {
                        obj.customVariables = dojo.mixin({}, ibmweb.opinionlab.defaults.customVariables, ibmweb.config.get("opinionlab").customVariables);
                        _467.oo_floating = new OOo.Ocode(obj);
                    });
                    setTimeout(function () {
                        ibmweb.config.get("opinionlab").customVariablesLoaded = true;
                    }, 4000);
                    dojo.query("body").connect("onclick", function (e) {
                        if (dojo.hasClass(e.target, "oo_feedback_float")) {
                            _467.disableGrayAreaAction();
                        }
                    });
                    var olUp = dojo.query("div.olUp");
                    var _471 = dojo.query("div.oo_feedback_float");
                    if (olUp.length == 1 && _471.length == 1) {
                        var _472 = null;
                        var _473 = null;
                        var _474 = function (_475) {
                            if (_472) {
                                _472.stop();
                            }
                            dojo.style(olUp[0], {
                                display: "block",
                                opacity: 1
                            });
                            _472 = dojo.animateProperty({
                                node: olUp[0],
                                duration: _475 ? _475 : 3000,
                                properties: {
                                    opacity: {
                                        start: 1,
                                        end: 0
                                    }
                                },
                                onEnd: function () {
                                    olUp[0].style.display = "none";
                                }
                            }).play();
                        };
                        var _476 = function (_477) {
                            if (_472) {
                                _472.stop();
                            }
                            dojo.style(olUp[0], {
                                display: "block",
                                opacity: 0
                            });
                            _472 = dojo.animateProperty({
                                node: olUp[0],
                                duration: _477 ? _477 : 3000,
                                properties: {
                                    opacity: {
                                        start: 0,
                                        end: 1
                                    }
                                }
                            }).play();
                        };
                        dojo.connect(_471[0], "onmouseover", function (e) {
                            if ((e.target && dojo.hasClass(e.target, "olUp")) || (e.originalTarget && dojo.hasClass(e.originalTarget, "olUp"))) {
                                return false;
                            }
                            window.clearTimeout(_473);
                            _476(600);
                        });
                        dojo.connect(_471[0], "onmouseout", function (e) {
                            if ((e.target && dojo.hasClass(e.target, "olUp")) || (e.originalTarget && dojo.hasClass(e.originalTarget, "olUp"))) {
                                return false;
                            }
                            _474(600);
                        });
                        dojo.style(olUp[0], {
                            display: "block"
                        });
                        _473 = window.setTimeout(function () {
                            _474();
                        }, 3000);
                    }
                }
            });
        },
        createFooterLink: function () {
            var url = dojo.config.modulePaths ? dojo.config.modulePaths.ibmweb.substr(0, dojo.config.modulePaths.ibmweb.indexOf("js/dojo")) : "/common/";
            var _478 = dojo.query("#ibm-footer ul");
            var li = dojo.create("li", {}, _478[0]);
            var _479 = dojo.create("img", {
                title: "Feedback",
                src: ibmweb.config.imageUrl + "opinionlab/oo_icon.gif"
            }, li);
            var _47a = dojo.create("a", {
                innerHTML: "&nbsp;Feedback",
                href: "#"
            }, li);
            dojo.connect(_47a, "onclick", dojo.hitch(this, function (e) {
                dojo.stopEvent(e);
                this.oo_feedback.show();
                this.disableGrayAreaAction();
            }));
        },
        disableGrayAreaAction: function () {
            dojo.query(".oo_cc_wrapper > span").forEach(function (item) {
                if (item.innerHTML === "") {
                    dojo.query(item).replaceWith("<span></span>");
                }
            });
            dojo.query(".oo_cc_wrapper").style({
                top: 0,
                paddingTop: "25px",
                height: "100%"
            });
        },
        getBrowserLanguage: function () {
            var _47b;
            var _47c = window.navigator.userLanguage || window.navigator.language;
            var _47d = _47c.split("-");
            if (typeof _47d[1] !== "undefined") {
                _47b = _47d[1].toLowerCase() + "/";
            }
            _47b += _47d[0].toLowerCase();
            return _47b;
        },
        getLanguage: function () {
            var page = "";
            var _47e = "";
            dojo.query("link").forEach(function (node, _47f) {
                if (node.href.indexOf("w3.css") > 0) {
                    page = "w3";
                } else {
                    if (node.href.indexOf("www.css") > 0) {
                        page = "www";
                    }
                }
            });
            if (page == "w3") {
                _47e = this.getBrowserLanguage();
            } else {
                var _480 = ["bg/bg", "cn/zh", "tw/zh", "hr/hr", "cz/cs", "dk/da", "be/nl", "nl/nl", "eg/en", "zw/en", "af/en", "ai/en", "ag/en", "aw/en", "au/en", "bs/en", "bh/en", "bd/en", "bb/en", "be/en", "bm/en", "bw/en", "vg/en", "bn/en", "cm/en", "ca/en", "ky/en", "cw/en", "cy/en", "dm/en", "et/en", "gh/en", "gd/en", "gy/en", "hk/en", "in/en", "id/en", "iq/en", "ie/en", "jm/en", "jo/en", "ke/en", "kw/en", "lb/en", "ly/en", "mw/en", "my/en", "mu/en", "ms/en", "na/en", "np/en", "nz/en", "ng/en", "om/en", "pk/en", "ph/en", "qa/en", "kn/en", "lc/en", "vc/en", "sa/en", "sc/en", "sl/en", "sg/en", "za/en", "lk/en", "sr/en", "tz/en", "th/en", "tt/en", "tc/en", "ug/en", "ae/en", "uk/en", "us/en", "vn/en", "ye/en", "zm/en", "ee/et", "fi/fi", "be/fr", "bf/fr", "cm/fr", "ca/fr", "td/fr", "cg/fr", "cd/fr", "fr/fr", "ga/fr", "ci/fr", "mg/fr", "mu/fr", "ma/fr", "ne/fr", "sn/fr", "sc/fr", "ch/fr", "tn/fr", "at/de", "de/de", "ch/de", "gr/el", "il/he", "hu/hu", "it/it", "jp/ja", "kz/kk", "kr/ko", "lv/lv", "lt/lt", "no/no", "pl/pl", "dz/fr", "br/pt", "mz/pt", "pt/pt", "ro/ro", "ru/ru", "rs/sr", "sk/sk", "si/sl", "ec/es", "ar/es", "bo/es", "cl/es", "co/es", "cr/es", "mx/es", "py/es", "pe/es", "es/es", "uy/es", "ve/es", "se/sv", "tr/tr", "ua/uk", "uz/uz", "vn/vi"];
                var _481 = false,
                    _47e = "";
                for (var i = 0; i < _480.length; i++) {
                    if (window.location.href.indexOf(_480[i]) > 0) {
                        _481 = true;
                        break;
                    }
                }
                if (!_481) {
                    var _482;
                    if (typeof dojo.query("meta[name='DC.Language']")[0] !== "undefined") {
                        _482 = dojo.query("meta[name='DC.Language']")[0];
                        var _483 = dojo.attr(_482, "content").split("-");
                        var _484 = false;
                        if (_483.length < 2) {
                            if (typeof dojo.query("meta[name='IBM.Country']")[0] !== "undefined") {
                                _482 = dojo.query("meta[name='IBM.Country']")[0];
                                var _485 = dojo.attr(_482, "content").split(",");
                                if (_485.length > 0) {
                                    for (var u = 0; u < _485.length; u++) {
                                        _47e = _485[u].toLowerCase().trim() + "/" + _483[0].toLowerCase();
                                        for (var h = 0; h < _480.length; h++) {
                                            if (_480[h] == _47e) {
                                                _484 = true;
                                                break;
                                            }
                                        }
                                    }
                                } else {
                                    _47e = _485[0].toLowerCase() + "/" + _483[0].toLowerCase();
                                    if (_480.indexOf(_47e) >= 0) {
                                        _484 = true;
                                    }
                                }
                            }
                        } else {
                            _47e = _483[1].toLowerCase() + "/" + _483[0].toLowerCase();
                            if (_480.indexOf(_47e) >= 0) {
                                _484 = true;
                            }
                        }
                        if (!_484) {
                            _47e = "us/en";
                        }
                    } else {
                        if (dojo.attr(dojo.query("html")[0], "lang") !== null) {
                            var _483 = dojo.attr(dojo.query("html")[0], "lang").split("-");
                            _47e = _483[1].toLowerCase() + "/" + _483[0].toLowerCase();
                        } else {
                            if (window.navigator.language || window.navigator.userLanguage) {
                                _47e = this.getBrowserLanguage();
                            } else {
                                _47e = "us/en";
                            }
                        }
                    }
                }
            }
            return _47e;
        }
    });
    ibmweb.opinionlab = ibmweb.opinionlab || {};
    (function () {
        ibmweb.opinionlab.CommentCard = _486;

        function _486(_487) {
            _487 = _487 || {};
            var _488 = true;
            var me = this,
                _489 = {}, _48a = {}, _48b = {};
            this.init = init;

            function init(_48c) {
                _489 = {
                    "ccid": "",
                    "time1": new Date().getTime(),
                    "time2": "",
                    "prev": "",
                    "referer": window.location.href,
                    "url": window.location.href,
                    "width": screen.width,
                    "height": screen.height,
                    "comment_card": "1",
                    "thank_you": "1",
                    "ip_address_optout": "",
                    "custom_var": "null|undefined/undefined/undefined|iframe ",
                    "preview_id": "",
                    "currentURL": window.location.href,
                    "ocodeVersion": "5.6.5",
                    "ocodePatch": "",
                    "customVars": _48d(_48b)
                };
                data(_48c);
            };
            this.data = data;

            function data(_48e) {
                if (typeof (_48e) != "undefined") {
                    dojo.mixin(_489, _48e);
                    return me;
                } else {
                    return _489;
                }
            };
            this.prepQuestion = _48f;

            function _48f(_490, id) {
                _490 = parseInt(_490, 10);
                _48a[id] = _490;
                var _491 = {};
                _491["question" + _490] = id;
                data(_491);
            };
            this.prepQuestions = _492;

            function _492(ids) {
                var _493 = null;
                dojo.forEach(ids, function (id) {
                    _493 = Object.keys(_48a).length + 1;
                    _48f(_493, id);
                });
            };
            this.setAnswer = _494;

            function _494(id, _495) {
                var _496 = {};
                _496["answer_" + id] = _495;
                data(_496);
            };
            this.setOverallRating = _497;

            function _497(val) {
                data({
                    "overall": val
                });
            };
            this.setComment = _498;

            function _498(val) {
                data({
                    "comments": val
                });
            };
            this.setCustomVars = _499;

            function _499(_49a) {
                dojo.mixin(_48b, _49a);
                var cvs = _48d(_48b);
                data({
                    customVars: cvs
                });
                return me;
            };
            this.ol_stringify = _48d;

            function _48d(obj) {
                var cvs = "";
                cvs += "";
                dojo.forEach(Object.keys(obj), function (key) {
                    cvs += ",";
                    cvs += key;
                    cvs += ":";
                    switch (typeof (obj[key])) {
                        case "string":
                            cvs += "'" + obj[key] + "'";
                            break;
                        case "number":
                            cvs += obj[key];
                            break;
                        case "function":
                            cvs += "'function'";
                            break;
                        case "object":
                            if (obj[key] === null) {
                                cvs += "null";
                            } else {
                                if (dojo.isArray(obj[key])) {
                                    cvs += "'[Array of " + obj[key].length + " items]'";
                                } else {
                                    if (typeof (obj[key].toString) != "undefined") {
                                        cvs += "'" + obj[key].toString() + "'";
                                    } else {
                                        cvs += "'Unknown Object'";
                                    }
                                }
                            }
                            break;
                    }
                });
                cvs = "{" + cvs.substring(1);
                cvs += "}";
                return cvs;
            };
            this.getCustomVars = _49b;

            function _49b() {
                return _48b;
            };
            this.setCustomVar = _49c;

            function _49c(key, val) {
                var obj = {};
                obj[key] = val;
                return _499(obj);
            };
            this.clearCustomVars = _49d;

            function _49d() {
                _48b = {};
                data({
                    customVars: _48d(_48b)
                });
                return me;
            };
            this.deleteCustomVar = _49e;

            function _49e(key) {
                var val = _48b[key];
                delete _48b[key];
                data({
                    customVars: _48d(_48b)
                });
                return val;
            };
            this.send = send;

            function send() {
                data({
                    time2: new Date().getTime()
                });
                var url = "https://secure.opinionlab.com/rate40.asp";
                dojo.io.iframe.send({
                    url: url,
                    method: "POST",
                    content: _489
                });
                return me;
            };
            if (_488) {
                init(_487);
            }
        };
    })();
    ibmweb.opinionlab = ibmweb.opinionlab || {};
    ibmweb.opinionlab.customSurvey = function (_49f) {
        var _4a0 = {
            config: dojo.mixin({}, {
                aboutFeedbackText: "About feedback at IBM",
                aboutFeedbackOverlayId: "oplabsurvey-about-feedback-overlay",
                aboutFeedbackOverlayTitle: "Ongoing Web Feedback at IBM",
                aboutFeedbackOverlayContent: "<p>IBM collects opt-in feedback from IBM web users on a broad and continual basis throughout it's web sites. All feedback submitted are reviewed only by IBM employees or IBM affiliates and no feedback is shared outside of IBM for any reason. See IBM's <a target=\"_blank\" href=\"http://www.ibm.com/privacy/us/en/\">privacy policy</a> and <a target=\"_blank\" href=\"http://www.ibm.com/legal/us/en/\">terms of use</a> for further detail.</p><p> IBM may use a third party to collect or process feedback. Any such party is also bound by the IBM policy. Currently we use opinionlab for feedback processing.</p><p class=\"ibm-ind-link\"><a class=\"ibm-external-link\" href=\"http://www.opinionlab.com\" target=\"_blank\">OpinionLab</a></p><p>Your input is very valuable to us and although we read every comment that is sent to IBM in an effort to continuouslyimprove our web sites for you, we generally do not reply to comments from this system unless otherwise stated. Thank you for participating in the IBM web feedback program. </p>",
                ccid: 0,
                comments: {
                    enabled: true,
                    placeholder: "Help us improve your IBM online experience by providing your comments here."
                },
                container: false,
                customQuestions: [],
                customQuestionsIds: [],
                customVariables: {},
                description: "",
                feedbackText: "Feedback",
                feedbackAnonymousText: "Your feedback is anonymous.",
                heading: "Rate this page",
                rating: {
                    enabled: true,
                    type: "stars"
                },
                ratingLabels: {
                    label5: "Yes",
                    label1: "No"
                },
                submitInterval: 120,
                submitText: "Submit",
                thankyouMsg: "Thank you for your feedback",
                trayDisplayTime: 3,
                type: {
                    display: "inline",
                    form: "inline"
                }
            }, _49f),
            elements: {},
            $form: {}
        }, _4a1 = {
            "ccid": _4a0.config.ccid,
            "comment_card": "1t",
            "currentURL": window.location.href,
            "customVariables": {},
            "custom_var": "null|undefined/undefined/undefined|iframe ",
            "height": screen.height,
            "ip_address_optout": "",
            "ocodePatch": "",
            "ocodeVersion": "5.6.5",
            "prev": document.referrer,
            "preview_id": "",
            "referer": window.location.href,
            "thank_you": "1",
            "time1": new Date().getTime(),
            "time2": "",
            "url": "",
            "width": screen.width
        }, _4a2 = {
            surveyKey: "s-" + _4a0.config.ccid + window.location.href,
            setFlag: function () {
                ibmweb.storage.setItem(_4a2.surveyKey, new Date().getTime());
            }
        }, _4a3, _4a4 = parseInt(ibmweb.storage.getItem("opltrn")) > 0 ? parseInt(ibmweb.storage.getItem("opltrn")) : 0;
        _4a0.config.formId = "oplabsurvey-" + _4a0.config.ccid + "-form";
        _4a0.config.overlayLinkTrigger = "<div class=\"oplabsurvey-overlay-trigger\"><span class=\"ibm-access\">Screen reader users: Please switch to forms mode for this link.</span><a class=\"oplabsurvey-tray-tab\" href=\"#\">" + _4a0.config.feedbackText + "</a></div>";
        _4a0.config.submitIntervalMs = _4a0.config.submitInterval * 60 * 1000;
        _4a0.config.surveyOverlayId = "oplabsurvey-" + _4a0.config.ccid + "-overlay";
        _4a0.config.trayDisplayTimeMs = _4a0.config.trayDisplayTime * 1000;
        var url = dojo.config.modulePaths ? dojo.config.modulePaths.ibmweb.substr(0, dojo.config.modulePaths.ibmweb.indexOf("js/dojo")) : "/common/";
        if (dojo.query("link[href$=\"/common/v17/css/external/oplabcustomsurvey.css\"]").length === 0) {
            dojo.create("link", {
                type: "text/css",
                rel: "stylesheet",
                href: url + "v17/css/external/oplabcustomsurvey.css"
            }, dojo.query("head")[0]);
        }
        var _4a5 = new ibmweb.opinionlab.CommentCard({
            ccid: _4a1.ccid
        });

        function _4a6() {
            var tray = dojo.byId("oplabsurvey-tray"),
                tmp = dojo.style(tray, "minHeight", "auto"),
                _4a7 = Math.floor(dojo.position(tray).h),
                _4a8 = dojo.query(".oplabsurvey-tray-tab", tray)[0],
                _4a9 = ibmweb.info.isIE == false ? document.documentElement.clientHeight / 2 : 100,
                _4aa = 25,
                sbs = dojo.query("#ibm-social-tools").length == 1 ? dojo.query("#ibm-social-tools")[0] : null;
            if (_4a7 < 106) {
                _4a7 = 106;
            }
            dojo.style(tray, "minHeight", _4a7 + "px");
            if (sbs !== null) {
                _4a9 = ibmweb.info.isIE == false ? dojo.position(sbs).y + dojo.position(sbs).h + _4aa : dojo.position(sbs).y - _4aa - 30;
            }
            _4a9 = Math.floor(_4a9 - (dojo.position(_4a8).y - dojo.position(tray).y));
            if (_4a9 < 10) {
                _4a9 = 10;
            }
            dojo.style(tray, "top", _4a9 + "px");
        };

        function _4ab() {
            dojo.query(".oplabsurvey-charcount").forEach(function (_4ac) {
                var _4ad = dojo.query("#" + dojo.query(_4ac).attr("data-field")[0]),
                    _4ae = 0,
                    _4af = dojo.query("span", _4ac);
                if (_4ad.attr("data-maxlength")[0] == null || _4ad.attr("data-maxlength")[0] == 0) {
                    return;
                }
                _4ae = _4ad.attr("data-maxlength")[0];
                _4ad.onkeyup(function () {
                    _4af.html(_4ae - this.value.length);
                    if (_4ae - this.value.length < 1) {
                        _4af.addClass("ibm-error");
                    } else {
                        _4af.removeClass("ibm-error");
                    }
                }).onkeypress(function () {
                    _4af.html(_4ae - this.value.length);
                    if (_4ae - this.value.length < 1) {
                        _4af.addClass("ibm-error");
                    } else {
                        _4af.removeClass("ibm-error");
                    }
                });
            });
        };

        function _4b0() {
            dojo.query(_4a0.$form).onsubmit(function (evt) {
                var _4b1 = dojo.query("input[name='keepanony']:checked", _4a0.$form[0]).length == 1;
                if (dojo.query("input[name='overall']:checked", _4a0.$form[0]).length == 0) {
                    dojo.stopEvent(evt);
                    alert("Please select a rating.");
                    return;
                }
                dojo.stopEvent(evt);
                _4a5.setOverallRating(dojo.query("input[name='overall']:checked", _4a0.$form[0]).val());
                _4a5.setComment(dojo.query("textarea[name='comments']", _4a0.$form[0]).val());
                _4d9();
                if (ibmweb.opinionlab.defaults && ibmweb.opinionlab.defaults.customVariables) {
                    dojo.mixin(_4a1.customVariables, ibmweb.opinionlab.defaults.customVariables);
                }
                if (ibmweb.opinionlab.customVariables) {
                    dojo.mixin(_4a1.customVariables, ibmweb.opinionlab.customVariables);
                }
                dojo.mixin(_4a1.customVariables, _4a0.config.customVariables);
                if (_4b1) {
                    delete _4a1.customVariables.userName;
                    delete _4a1.customVariables.userEmail;
                }
                _4a5.clearCustomVars().setCustomVars(_4a1.customVariables).send();
                dojo.query(_4a0.$form).addClass("submitted");
                _4b2(true);
                _4b3(true);
                _4b4(true);
                if (dojo.query("#" + _4a0.config.surveyOverlayId).length == 1) {
                    ibmweb.overlay.hide(_4a0.config.surveyOverlayId, this);
                }
                if (dojo.query("#oplabsurvey-tray").length == 1 && !dojo.hasClass("oplabsurvey-tray", "minimized")) {
                    setTimeout(_4e3, 2000);
                }
                setTimeout(function () {
                    _4b2(false);
                    _4b3(false);
                    _4b4(false);
                    dojo.query(_4a0.$form).removeClass("submitted");
                }, _4a0.config.submitIntervalMs);
            });
        };

        function _4b5(_4b6, _4b7) {
            if (_4a0.config.rating.enabled !== true) {
                return;
            }
            if (_4a0.config.rating.type == "stars") {
                dojo.query("ul li", _4b6).onmouseover(function () {
                    dojo.query(this).addClass("highlighted").prevAll().addClass("highlighted");
                    dojo.query(this).nextAll().removeClass("highlighted");
                }).onclick(function (evt) {
                    dojo.stopEvent(evt);
                    dojo.query(this).siblings().children("input").removeAttr("checked");
                    dojo.query("input", this).attr("checked", "checked");
                    if (_4b7 == true) {
                        _4b8(dojo.query("input", this).val());
                    }
                });
                dojo.query("ul", _4b6).onmouseout(function () {
                    _4b9(dojo.query("ul", _4b6)[0]);
                });
            } else {
                if (_4a0.config.rating.type == "yes-no") {
                    dojo.query("input", _4b6).onclick(function (evt) {
                        if (_4b7 == true) {
                            _4b8(dojo.query(this).val());
                        }
                    });
                }
            }
        };

        function _4b9(_4ba) {
            if (dojo.query("input:checked", _4ba).length == 0) {
                dojo.query("li", _4ba).removeClass("highlighted");
            } else {
                dojo.query("input:checked", _4ba).parent().addClass("highlighted").prevAll().addClass("highlighted");
                dojo.query("input:checked", _4ba).parent().nextAll().removeClass("highlighted");
            }
        };

        function _4bb() {
            var _4bc = "<p>" + _4a0.config.feedbackAnonymousText + "</p>";
            if (ibmweb.opinionlab.defaults && ibmweb.opinionlab.defaults.customVariables && ibmweb.opinionlab.defaults.customVariables.userEmail != "") {
                _4bc = _4bd({
                    omitParWrapper: false,
                    type: "checkbox",
                    name: "keepanony",
                    value: [{
                        label: "Yes, keep my feedback anonymous.",
                        value: 1,
                        checked: true
                    }]
                });
            }
            return _4bc;
        };

        function _4be() {
            var html = "";
            if (_4a0.config.customQuestions) {
                dojo.forEach(_4a0.config.customQuestions, function (_4bf) {
                    html += _4bd(_4bf);
                    _4a0.config.customQuestionsIds.push(_4bf.name);
                });
                _4a5.prepQuestions(_4a0.config.customQuestionsIds);
            }
            return html;
        };

        function _4bd(_4c0) {
            var _4c1 = {
                hideLabel: false,
                label: "",
                maxlength: 0,
                name: "",
                placeholder: "",
                showCharCounter: false,
                type: "",
                value: ""
            }, html = "",
                _4c2 = "",
                _4c3 = _4c0.type == "textarea" && _4c0.name == "comments" ? "<div class=\"oplabsurvey-anonytext\">" + _4bb() + "</div>" : "",
                _4c4 = "",
                _4c5 = "<p><label for=\"$id\">$label</label><input id=\"$id\" name=\"$name\" type=\"text\" placeholder=\"$placeholder\" value=\"$value\" maxlength=\"$maxlength\" data-maxlength=\"$maxlength\" /></p>",
                _4c6 = "<p><label for=\"$id\"$hideLabel>$label</label><textarea id=\"$id\" name=\"$name\" placeholder=\"$placeholder\" maxlength=\"$maxlength\" data-maxlength=\"$maxlength\">$value</textarea></p>",
                _4c7 = "<input id=\"$id\" name=\"$name\" value=\"$value\" type=\"radio\"><label for=\"$id\">$label</label>",
                _4c8 = "<input name=\"$name\" id=\"$id\" value=\"$value\" type=\"checkbox\" $checked/> <label for=\"$id\">$label</label>",
                _4c9 = "<option value=\"$value\">$label</option>";
            dojo.mixin(_4c1, _4c0);
            switch (_4c1.type) {
                case "text":
                    html = _4c5.replace(/\$id/g, _4c1.name + _4a0.config.ccid).replace(/\$name/, _4c1.name).replace(/\$value/, _4c1.value).replace(/\$label/, _4c1.label).replace(/\$placeholder/, _4c1.placeholder);
                    if (_4c1.maxlength > 0) {
                        html = html.replace(/\$maxlength/g, _4c1.maxlength);
                    }
                    break;
                case "textarea":
                    html = _4c6.replace(/\$id/g, _4c1.name + _4a0.config.ccid).replace(/\$name/, _4c1.name).replace(/\$value/, _4c1.value).replace(/\$label/, _4c1.label).replace(/\$placeholder/, _4c1.placeholder);
                    if (_4c1.hideLabel === true) {
                        html = html.replace(/\$hideLabel/, " class=\"ibm-access\"");
                    }
                    if (_4c1.showCharCounter === true) {
                        _4c2 = "<div class=\"oplabsurvey-charcount oplabsurvey-align-right\" data-field=\"" + _4c1.name + _4a0.config.ccid + "\"><p>Chars left: <span>" + _4c1.maxlength + "</span></p></div>";
                    }
                    if (_4c3 != "" || _4c2 != "") {
                        html += "<div class=\"oplabsurvey-comment-ta-notes\">" + _4c3 + _4c2 + "</div><br />";
                    }
                    if (_4c1.maxlength > 0) {
                        html = html.replace(/\$maxlength/g, _4c1.maxlength);
                    }
                    break;
                case "radio":
                    dojo.forEach(_4c1.value, function (item, i) {
                        _4c4 += _4c7.replace(/\$id/g, _4c1.name + _4a0.config.ccid + i).replace(/\$name/, _4c1.name).replace(/\$value/, item.value).replace(/\$label/, item.label);
                    });
                    html = "<label id=\"" + _4c1.name + _4a0.config.ccid + "-group\">" + _4c1.label + "</label><span class=\"ibm-input-group ibm-radio-group\">" + _4c4 + "</span>";
                    if (_4c1.omitParWrapper == true) {
                        return html;
                    } else {
                        return "<p class=\"ibm-form-elem-grp\">" + html + "</p>";
                    }
                    break;
                case "checkbox":
                    dojo.forEach(_4c1.value, function (item, i) {
                        var _4ca = item.checked ? " checked=\"checked\"" : "";
                        _4c4 += _4c8.replace(/\$id/g, _4c1.name + _4a0.config.ccid + i).replace(/\$name/, _4c1.name).replace(/\$value/, item.value).replace(/\$label/, item.label).replace(/\$checked/, _4ca);
                    });
                    html = "<label id=\"" + _4c1.name + _4a0.config.ccid + "-group\">" + _4c1.label + "</label><span class=\"ibm-input-group\">" + _4c4 + "</span>";
                    if (_4c1.omitParWrapper == true) {
                        return html;
                    } else {
                        return "<p class=\"ibm-form-elem-grp\">" + html + "</p>";
                    }
                    break;
                case "selectlist":
                    dojo.forEach(_4c1.value, function (item) {
                        _4c4 += _4c9.replace(/\$value/, item.value).replace(/\$label/, item.label);
                    });
                    html = "<p><label for=\"" + _4c1.name + "\">" + _4c1.label + "</label><select id=\"" + _4c1.name + _4a0.config.ccid + "\" name=\"" + _4c1.name + "\"><option value=\"\">Select one</option>" + _4c4 + "</select></p>";
                    break;
                default:
            }
            return html;
        };

        function _4cb() {
            if (_4a0.config.comments.enabled === false && _4a0.config.customQuestions.length == 0) {
                _4a0.elements.submitButton = "";
            }
            var html = "<form class=\"oplabsurvey-form\" id=\"oplabsurvey-" + _4a0.config.ccid + "-form\" action=\"https://secure.opinionlab.com/rate40.asp\" method=\"post\">" + _4a0.elements.surveyHeading + _4a0.elements.surveySubhead + _4a0.elements.ratingField + _4a0.elements.commentField + _4a0.elements.customFields + _4a0.elements.aboutFeedbackLink + _4a0.elements.submitButton + "</form>";
            return "<div class=\"oplabsurvey-maincontent\">" + html + "</div>";
        };

        function _4cc(v, _4cd) {
            return _4cd ? "<h2 class=\"ibm-rule\">" + v + "</h2>" : "<h2>" + v + "</h2>";
        };

        function _4ce(o) {
            var html = "<div class=\"ibm-common-overlay\" id=\"" + o.id + "\"><div class=\"ibm-head\"><p><a class=\"ibm-common-overlay-close\" href=\"#close\">Close [x]</a></p></div><div class=\"ibm-body\"><div class=\"ibm-main\"><a class=\"ibm-access\"><!-- Accessibility anchor --></a><div class=\"ibm-title\"><h2>" + o.heading + "</h2></div><div class=\"ibm-container ibm-alternate\"><div class=\"ibm-container-body\">" + o.content + "</div></div></div></div></div>";
            return html;
        };

        function _4cf() {
            var _4d0 = "",
                i = 0;
            if (_4a0.config.rating.type == "stars") {
                for (i = 1; i < 6; i++) {
                    _4d0 += "<li><input type=\"radio\" class=\"ibm-access\" value=\"" + i + "\" name=\"overall\" id=\"rating-" + _4a0.config.ccid + "-stars-" + i + "\"><label title=\"Rate this " + i + " stars\" for=\"rating-" + _4a0.config.ccid + "-stars-" + i + "\"></label></li>";
                }
                return "<div class=\"oplabsurvey-rating-field\" data-type=\"stars\"><ul class=\"oplabsurvey-rating-stars\">" + _4d0 + "</ul></div>";
            } else {
                if (_4a0.config.rating.type == "yes-no") {
                    _4d0 = "<input type=\"radio\" value=\"5\" name=\"overall\" id=\"rating-" + _4a0.config.ccid + "-yesno-5\"><label title=\"Rate this yes\" for=\"rating-" + _4a0.config.ccid + "-yesno-5\">" + _4a0.config.ratingLabels.label5 + "</label> <input type=\"radio\" value=\"1\" name=\"overall\" id=\"rating-" + _4a0.config.ccid + "-yesno-1\"><label title=\"Rate this no\" for=\"rating-" + _4a0.config.ccid + "-yesno-1\">" + _4a0.config.ratingLabels.label1 + "</label>";
                    return "<div class=\"oplabsurvey-rating-field\"><p>" + _4d0 + "</p></div>";
                }
            }
            return "";
        };

        function _4d1() {
            var html = _4a0.elements.surveyHeading + _4a0.elements.ratingField + _4a0.elements.aboutFeedbackLink;
            return "<div class=\"oplabsurvey-maincontent\">" + html + "</div>";
        };

        function _4d2(v) {
            return "<div class=\"oplabsurvey-thankyoucontent\">" + v + "</div>";
        };

        function _4d3(_4d4) {
            var html = "<div id=\"oplabsurvey-tray\" class=\"minimized\"><span class=\"ibm-access\">Screen reader users: Please switch to forms mode for this link.</span><a class=\"oplabsurvey-tray-tab\" href=\"#\">" + _4a0.config.feedbackText + "</a><div class=\"ibm-columns\"><div class=\"ibm-col-4-1\">" + _4d4 + "</div></div></div>";
            return html;
        };

        function _4d5() {
            var _4d6 = document.getElementById(_4a0.config.formId);
            _4d6.reset();
            _4d7(dojo.query(".oplabsurvey-rating-field", _4d6)[0]);
        };

        function _4d7(_4d8) {
            dojo.query("input", _4d8).attr("checked", false).removeAttr("checked");
            if (_4a0.config.rating.type == "stars") {
                _4b9(dojo.query("ul", _4d8)[0]);
            }
        };

        function _4d9() {
            dojo.forEach(_4a0.config.customQuestionsIds, function (id) {
                var _4da = dojo.query("[name='" + id + "']", _4a0.$form[0]).attr("type")[0],
                    _4db = "";
                switch (_4da) {
                    case "radio":
                        _4db = dojo.query("[name='" + id + "']:checked", _4a0.$form[0]).val();
                        break;
                    case "checkbox":
                        dojo.query("[name='" + id + "']:checked", _4a0.$form[0]).forEach(function (item) {
                            _4db += ", " + dojo.query(item).val();
                        });
                        _4db = _4db.substr(2);
                        break;
                    default:
                        _4db = dojo.query("[name='" + id + "']", _4a0.$form[0]).val();
                        break;
                }
                _4a5.setAnswer(id, _4db);
            });
        };

        function _4b8(_4dc) {
            if (_4dc) {
                if (_4a0.config.rating.type == "stars") {
                    dojo.query(".oplabsurvey-rating-stars li input[value='" + _4dc + "']", _4a0.$form[0]).attr("checked", "checked");
                    _4b9(dojo.query(".oplabsurvey-rating-stars", _4a0.$form[0])[0]);
                } else {
                    if (_4a0.config.rating.type == "yes-no") {
                        dojo.query(".oplabsurvey-rating-field input[value='" + _4dc + "']", _4a0.$form[0]).attr("checked", "checked");
                    }
                }
            }
            ibmweb.overlay.show(_4a0.config.surveyOverlayId, this);
            _4b3(true);
            _4b4(true);
            setTimeout(function () {
                dojo.query("#dialog_" + _4a0.config.surveyOverlayId + " .dijitDialogCloseIcon").onclick(function () {
                    if (!dojo.hasClass(dojo.query(_4a0.$form)[0], "submitted")) {
                        dojo.query("#dialog_" + _4a0.config.surveyOverlayId + " form input[type='submit']")[0].click();
                    }
                });
            }, 1500);
        };

        function _4b3(show) {
            if (_4a0.config.container.length == 0 || dojo.query(".oplabsurvey-maincontent", _4a0.config.container[0]).length == 0) {
                return;
            }
            if (show) {
                _4a0.config.container.addClass("oplabsurvey-thankyou");
                if (_4a0.config.type.form == "inline") {
                    _4d5();
                } else {
                    _4d7(dojo.query(".oplabsurvey-rating-field", _4a0.config.container[0])[0]);
                }
            } else {
                _4a0.config.container.removeClass("oplabsurvey-thankyou");
            }
        };

        function _4b2(show) {
            if (dojo.query("#" + _4a0.config.surveyOverlayId).length == 0) {
                return;
            }
            if (show) {
                dojo.query("#" + _4a0.config.surveyOverlayId + " .ibm-container-body").addClass("oplabsurvey-thankyou");
                _4d5();
            } else {
                dojo.query("#" + _4a0.config.surveyOverlayId + " .ibm-container-body").removeClass("oplabsurvey-thankyou");
            }
        };

        function _4b4(show) {
            if (dojo.query("#oplabsurvey-tray").length == 0) {
                return;
            }
            if (show) {
                dojo.query("#oplabsurvey-tray").addClass("oplabsurvey-thankyou");
                if (_4a0.config.type.form == "inline") {
                    _4d5();
                } else {
                    _4d7(dojo.query(".oplabsurvey-rating-field", document.getElementById("oplabsurvey-tray"))[0]);
                }
            } else {
                dojo.query("#oplabsurvey-tray").removeClass("oplabsurvey-thankyou");
            }
            _4a6();
        };

        function _4dd() {
            dojo.ready(function () {
                if (!dojo.byId(_4a0.config.aboutFeedbackOverlayId)) {
                    _4a0.elements.surveyAboutFeedbackOverlay = _4ce({
                        id: _4a0.config.aboutFeedbackOverlayId,
                        heading: _4a0.config.aboutFeedbackOverlayTitle,
                        content: _4a0.config.aboutFeedbackOverlayContent
                    });
                    dojo.place(_4a0.elements.surveyAboutFeedbackOverlay, "ibm-content-main", "last");
                }
            });
        };

        function _4de() {
            if (_4a0.config.container.length == 1) {
                _4a0.$form = dojo.query("form", _4a0.config.container.html(_4a0.elements.surveyFormHtml + _4d2(_4cc(_4a0.config.thankyouMsg, true)))[0]);
                _4b5(dojo.query(".oplabsurvey-rating-field", _4a0.$form[0])[0]);
                _4ab();
                _4b0();
            }
        };

        function _4df() {
            _4e0();
            _4a0.config.container.html(_4d1() + _4d2(_4cc(_4a0.config.thankyouMsg, true)));
            _4b5(dojo.query(".oplabsurvey-rating-field", _4a0.config.container[0])[0], true);
            _4b5(dojo.query(".oplabsurvey-rating-field", _4a0.$form[0])[0], false);
        };

        function _4e0() {
            var _4e1 = _4ce({
                id: _4a0.config.surveyOverlayId,
                heading: _4a0.config.thankyouMsg,
                content: _4a0.elements.surveyFormHtml + _4d2("<p>" + _4a0.config.thankyouMsg + "</p>")
            });
            _4a0.$form = dojo.query("form", dojo.place(_4e1, "ibm-content-main", "last"));
            _4ab();
            _4b0();
        };

        function _4e2() {
            var tray = dojo.place(_4d3(_4a0.elements.surveyFormHtml + _4d2(_4cc(_4a0.config.thankyouMsg))), "ibm-content-main", "last"),
                _4a3;
            _4a0.$form = dojo.query("form", tray);
            dojo.query(tray).addClass("inline");
            _4b5(dojo.query(".oplabsurvey-rating-field", _4a0.$form[0])[0]);
            _4ab();
            _4b0();
            if (_4a4 < 3) {
                _4e3();
                _4a3 = setTimeout(function () {
                    _4e3();
                }, _4a0.config.trayDisplayTimeMs);
                dojo.query(tray).onmouseover(function () {
                    clearTimeout(_4a3);
                });
            }
            dojo.query("a.oplabsurvey-tray-tab", tray).onclick(function (evt) {
                dojo.stopEvent(evt);
                if (!dojo.hasClass(_4a0.$form[0], "submitted") && dojo.query("input[name='overall']:checked", _4a0.$form[0]).length == 1) {
                    dojo.query("input[type='submit']", _4a0.$form[0])[0].click();
                } else {
                    _4e3();
                }
            });
            _4a6();
        };

        function _4e4() {
            _4e0();
            var tray = dojo.place(_4d3(_4d1() + _4d2(_4cc(_4a0.config.thankyouMsg))), "ibm-content-main", "last"),
                _4a3;
            _4b5(dojo.query(".oplabsurvey-rating-field", tray)[0], true);
            _4b5(dojo.query(".oplabsurvey-rating-field", _4a0.$form[0])[0], false);
            if (_4a4 < 3) {
                _4e3();
                _4a3 = setTimeout(function () {
                    _4e3();
                }, _4a0.config.trayDisplayTimeMs);
                dojo.query(tray).onmouseover(function () {
                    clearTimeout(_4a3);
                });
            }
            dojo.query("a.oplabsurvey-tray-tab", tray).onclick(function (evt) {
                dojo.stopEvent(evt);
                _4e3();
            });
            _4a6();
        };

        function _4e5() {
            _4e0();
            var trig = dojo.place(_4a0.config.overlayLinkTrigger, "ibm-content-main", "last"),
                _4e6 = dojo.query("a.oplabsurvey-tray-tab", trig);
            _4e6.onclick(function (evt) {
                dojo.stopEvent(evt);
                _4b8();
            });
        };

        function _4e3() {
            if (dojo.query("#oplabsurvey-tray").length == 0) {
                return;
            }
            clearTimeout(_4a3);
            dojo.toggleClass("oplabsurvey-tray", "minimized");
        };

        function _4e7() {
            var _4e8 = ibmweb.storage.getItem(_4a2.surveyKey),
                _4e9 = false;
            if (_4e8 !== null) {
                if ((parseInt(_4e8) + parseInt(_4a0.config.submitIntervalMs)) > new Date().getTime()) {
                    _4e9 = true;
                } else {
                    ibmweb.storage.removeItem(_4a2.surveyKey);
                }
            }
            return _4e9;
        };

        function _4ea() {
            ibmweb.queue.push(function () {
                return ibmweb.opinionlab.defaults && ibmweb.opinionlab.defaults.emailInfoLoaded == true;
            }, function () {
                var _4eb = _4bb();
                dojo.query(".oplabsurvey-anonytext").html(_4eb);
            });
        };

        function _4ec() {
            if (_4e7() == true) {
                dojo.query(_4a0.$form).addClass("submitted");
                _4b2(true);
                _4b3(true);
                _4b4(true);
            } else {
                _4b2(false);
                _4b3(false);
                _4b4(false);
            }
        };

        function _4ed() {
            var _4ee = _4bb(),
                _4ef = ibmweb.opinionlab.defaults ? ibmweb.opinionlab.defaults.emailInfoLoaded : false;
            if (typeof _4a0.config.container == "string") {
                _4a0.config.container = dojo.query("#" + _4a0.config.container);
            }
            _4a0.elements = {
                surveyHeading: _4a0.config.type.display == "tray" ? "<h2>" + _4a0.config.heading + "</h2>" : "<h2 class=\"ibm-rule\">" + _4a0.config.heading + "</h2>",
                surveySubhead: _4a0.config.description != "" ? "<p>" + _4a0.config.description + "</p>" : "",
                ratingField: _4a0.config.rating.enabled === true ? _4cf() : "",
                commentField: _4a0.config.comments.enabled === true ? _4bd({
                    type: "textarea",
                    name: "comments",
                    label: "Comments",
                    hideLabel: true,
                    placeholder: _4a0.config.comments.placeholder,
                    showCharCounter: true,
                    maxlength: 1000
                }) : "",
                customFields: _4be(),
                feedbackAnonyItem: "<span class=\"oplabsurvey-anonytext\">" + _4ee + "</span>",
                aboutFeedbackLink: "<ul class=\"ibm-link-list oplabsurvey-about-feedback-link\"><li><a onclick=\"ibmweb.overlay.show('" + _4a0.config.aboutFeedbackOverlayId + "',this);return false;\" class=\"ibm-popup-link\" href=\"#\">" + _4a0.config.aboutFeedbackText + "</a></li></ul>",
                submitButton: "<p class=\"oplabsurvey-align-right\"><input type=\"submit\" value=\"" + _4a0.config.submitText + "\" name=\"Submit\" class=\"ibm-btn-arrow-pri\"></p>"
            };
            _4a0.elements.surveyFormHtml = _4cb();
            _4dd();
            dojo.ready(function () {
                switch (_4a0.config.type.display) {
                    case "inline":
                        if (_4a0.config.type.form == "inline") {
                            _4de();
                        } else {
                            if (_4a0.config.type.form == "overlay") {
                                _4df();
                            }
                        }
                        break;
                    case "tray":
                        if (_4a0.config.type.form == "overlay") {
                            _4e4();
                        } else {
                            if (_4a0.config.type.form == "inline") {
                                _4e2();
                            }
                        }
                        ibmweb.storage.setItem("opltrn", (_4a4 + 1));
                        break;
                    case "link":
                        _4e5();
                        break;
                    default:
                        break;
                }
                _4ec();
                if (!_4ef) {
                    _4ea();
                }
            });
        };
        return {
            initSurvey: _4ed
        };
    };
    if (ibmweb.config.opinionlab.customSurvey && ibmweb.config.opinionlab.customSurvey.enabled === true && ibmweb.config.opinionlab.customSurvey.surveys && ibmweb.config.opinionlab.customSurvey.surveys.length > 0) {
        dojo.forEach(ibmweb.config.opinionlab.customSurvey.surveys, function (_4f0) {
            var _4f1 = new ibmweb.opinionlab.customSurvey(_4f0);
            _4f1.initSurvey();
        });
    }
}
if (!dojo._hasResource["ibmweb.dynnav.aria"]) {
    dojo._hasResource["ibmweb.dynnav.aria"] = true;
    dojo.provide("ibmweb.dynnav.aria");
    dojo.declare("ibmweb.dynnav.aria", [ibmweb.dynnav._module], {
        enabled: true,
        _lock: false,
        init: function () {
            return true;
        },
        onLoad: function () {
            dojo.attr(dojo.body(), "aria-busy", "true");
            if (!dojo.byId("ibm-com")) {
                dojo.body().id = "ibm-com";
            }!(dojo.query("*[role=\"main\"]").length > 0) ? dojo.query("#ibm-top > #ibm-leadspace-head, #ibm-top > #ibm-content-nav, #ibm-top > #ibm-pcon").wrapAll("<div id=\"ibm-access-cntr\"></div>") : null;
            if (dojo.byId("ibm-com").className.indexOf("dijit_a11y") != -1) {
                if (ibmweb.config.config == "www" && ibmweb.info.v17 && !document.getElementById("ibm-hcontrast-head") && !! dojo.byId("ibm-masthead")) {
                    dojo.place("<img src=\"//www.ibm.com/i/v17/_hcontrast_head.png\" width=\"100%\" height=\"100%\" id=\"ibm-hcontrast-head\">", dojo.byId("ibm-masthead"), "first");
                }
                if (ibmweb.info.v17 && !document.getElementById("ibm-hcontrast-home") && !! dojo.byId("ibm-home")) {
                    if (ibmweb.config.config == "www") {
                        dojo.place("<img src=\"//www.ibm.com/i/v17/t/ibm-logo.png\" id=\"ibm-hcontrast-home\">", dojo.query("#ibm-home a")[0], "first");
                    } else {
                        dojo.place("<img src=\"//www.ibm.com/i/v17/w3/w3_logos_sprite.png\" id=\"ibm-hcontrast-home\">", dojo.query("#ibm-home a")[0], "first");
                    }
                }
            }
            return true;
        },
        onData: function (_4f2) {
            if (!_4f2) {
                return;
            }
            var _4f3 = _4f2.accessibilityData;
            if (dojo.byId("ibm-masthead")) {
                !(dojo.query("*[role=\"banner\"]").length > 0) ? dijit.setWaiRole("ibm-masthead", "banner") : null;
            }
            var _4f4 = dojo.query("#ibm-geo a");
            _4f4 = _4f4.length > 0 ? dojo.query("#ibm-geo a")[0] : null;
            if ( !! _4f4) {
                dojo.query("#ibm-geo span.ibm-access").forEach(dojo.destroy);
                dijit.setWaiRole(_4f4, "button");
                dijit.setWaiState(_4f4, "label", ibmweb.dynnav.PMM.accessibilityData.locselector + " " + _4f4.innerHTML + " " + ibmweb.dynnav.PMM.accessibilityData.linkseld);
            }
            if (!ibmweb.config.appmast.enabled) {
                var _4f5 = dojo.query("#ibm-masthead #ibm-geo a, #ibm-masthead #ibm-home a, #ibm-masthead #ibm-search-module a, #ibm-masthead #ibm-search-module input");
                _4f5.forEach(function (item) {
                    dojo.connect(item, "onfocus", this, function (_4f6) {
                        if (dojo.byId("ibm-menu-links").className == "ibm-access") {
                            dojo.publish("/ibm/dynnav/megamenu/expandMenu");
                        }
                    });
                });
            }
            var home = dojo.query("#ibm-home a");
            if (home.length > 0) {
                var _4f7 = home.innerHTML.toString();
                _4f7 = _4f7.replace(/^\s+|\s+$/g, "");
                if (_4f7 == "" && _4f7.length == 0) {
                    home.innerHTML = "IBM&reg;";
                }
                home[0].tabIndex = 0;
            }
            if (dojo.byId("ibm-mast-options")) {
                if (ibmweb.config.config == "w3") {
                    var _4f8 = dojo.byId("ibm-mast-options");
                    dijit.setWaiRole(_4f8, "toolbar");
                    dojo.attr("ibm-mast-options", "aria-label", "Masthead Navigation");
                    var _4f9 = dojo.query("#ibm-mast-options ul");
                    _4f9.forEach(function (item) {
                        dijit.setWaiRole(item, "presentation");
                    });
                } else {
                    var _4f9 = dojo.query("#ibm-mast-options ul");
                    if (_4f9.length > 0) {
                        _4f9 = _4f9[0];
                        dijit.setWaiRole(_4f9, "toolbar");
                        dojo.attr(_4f9, "aria-label", "Masthead Navigation");
                    }
                }
                var _4fa = dojo.query("#ibm-mast-options ul li");
                _4fa.forEach(function (item) {
                    dijit.setWaiRole(item, "presentation");
                });
                var optA = dojo.query("#ibm-mast-options a");
                var home = dojo.query("#ibm-home a");
                optA.forEach(function (item) {
                    dijit.setWaiRole(item, "button");
                    item.tabIndex = -1;
                    if (ibmweb.config.config == "w3") {
                        if (home.length > 0 && item != home[0]) {
                            dojo.attr(item, "aria-label", item.innerHTML);
                            (item.className != "ibm-sso-signin") ? dojo.attr(item, "aria-describedby", "ibm-user-name") : null;
                        }
                    }
                });
                if (optA.length > 0) {
                    optA[0].tabIndex = 0;
                }
                dojo.connect(dojo.byId("ibm-mast-options"), "onkeypress", this, function (_4fb) {
                    var _4fc = dojo.query("#ibm-mast-options a");
                    if (!this._lock && (_4fb.keyCode == dojo.keys.RIGHT_ARROW || _4fb.keyCode == dojo.keys.DOWN_ARROW || _4fb.keyCode == dojo.keys.LEFT_ARROW || _4fb.keyCode == dojo.keys.UP_ARROW)) {
                        if (_4fc.length > 0) {
                            _4fc.forEach(function (item) {
                                item.tabIndex = -1;
                                dojo.connect(item, "onfocus", this, function (_4fd) {
                                    _4fc.forEach(function (i) {
                                        i.tabIndex = -1;
                                    });
                                    item.tabIndex = 0;
                                });
                            });
                        }
                        this._lock = true;
                    }
                    if (_4fb.keyCode == dojo.keys.RIGHT_ARROW || _4fb.keyCode == dojo.keys.DOWN_ARROW) {
                        dojo.stopEvent(_4fb);
                        var curr = _4fb.target;
                        if (_4fc.length > 0) {
                            for (var i = 0; i < _4fc.length; i++) {
                                if ((curr == _4fc[i]) && (i < (_4fc.length - 1))) {
                                    _4fc[i + 1].focus();
                                    _4fb.target.tabIndex = -1;
                                    break;
                                } else {
                                    if ((curr == _4fc[i]) && (i == (_4fc.length - 1))) {
                                        _4fc[0].focus();
                                        _4fb.target.tabIndex = -1;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (_4fb.keyCode == dojo.keys.LEFT_ARROW || _4fb.keyCode == dojo.keys.UP_ARROW) {
                        dojo.stopEvent(_4fb);
                        var curr = _4fb.target;
                        if (_4fc.length > 0) {
                            for (var i = 0; i < _4fc.length; i++) {
                                if ((curr == _4fc[i]) && (i > 0)) {
                                    _4fc[i - 1].focus();
                                    _4fb.target.tabIndex = -1;
                                    break;
                                } else {
                                    if ((curr == _4fc[i]) && (i == 0)) {
                                        _4fc[_4fc.length - 1].focus();
                                        _4fb.target.tabIndex = -1;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    return false;
                });
            }
            if (dojo.byId("ibm-universal-nav")) {
                dijit.setWaiRole("ibm-universal-nav", "navigation");
                dojo.attr("ibm-universal-nav", "aria-label", _4f3.sitemap || "Site map");
            }
            if (dojo.byId("ibm-menu-links")) {
                dojo.attr("ibm-menu-links", "aria-label", _4f3.sitemap || "Site map");
            }
            if (dojo.byId("ibm-search-module")) {
                dijit.setWaiRole("ibm-search-module", "search");
                dojo.attr("ibm-search-module", "aria-label", _4f3.ibm_search || "IBM Search");
                var _4fe = dojo.query("#ibm-search-module a, #ibm-search-module input");
                _4fe.forEach(function (item) {
                    dojo.connect(item, "onfocus", this, function (_4ff) {
                        dojo.addClass(dojo.query("#ibm-search-module input#q")[0], "ibm-active");
                    });
                    dojo.connect(item, "onblur", this, function (_500) {
                        dojo.removeClass(dojo.query("#ibm-search-module input#q")[0], "ibm-active");
                    });
                });
                if (ibmweb.config.config == "w3") {
                    var _501 = dojo.query("#ibm-search-module .scopeButton");
                    if (_501.length > 0) {
                        dojo.connect(_501[0], "onkeypress", this, function (_502) {
                            if (_502.shiftKey && _502.charOrCode == dojo.keys.TAB) {
                                dojo.stopEvent(_502);
                                var _503 = dojo.query("#ibm-menu-links a");
                                if (_503.length > 0) {
                                    _503.forEach(function (item) {
                                        if (item.tabIndex == 0) {
                                            item.focus();
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            }
            if (dojo.byId("ibm-social-tools") && dojo.style(dojo.byId("ibm-social-tools"), "display") != "none") {
                dijit.setWaiRole(dojo.byId("ibm-social-tools"), "navigation");
                dojo.attr(dojo.byId("ibm-social-tools"), "aria-label", _4f3.tools || "Social tools");
                var _504 = dojo.query("#ibm-social-tools ul");
                if (_504.length > 0) {
                    dijit.setWaiRole(_504[0], "toolbar");
                }
                dojo.attr(_504[0], "aria-label", "Social tool list");
            }
            if (dojo.byId("ibm-navigation-trail") && dojo.style(dojo.byId("ibm-navigation-trail"), "display") != "none") {
                dijit.setWaiRole(dojo.byId("ibm-navigation-trail"), "navigation");
                dojo.attr(dojo.byId("ibm-navigation-trail"), "aria-label", _4f3.bcrumb || "Bread Crumbs");
            }
            if (dojo.byId("ibm-content-nav") && dojo.style(dojo.byId("ibm-content-nav"), "display") != "none") {
                (dojo.query("divibm-content-nav #ibm-primary-tabs.ibm-dyntabs").length > 0) ? dijit.setWaiRole(dojo.byId("ibm-content-nav"), "navigation") : null;
                var _505 = dojo.query("div#ibm-content-nav #ibm-primary-tabs");
                if (_505.length > 0) {
                    if (dojo.style(_505[0], "display") != "none" && !(dojo.query("div#ibm-content-nav #ibm-primary-tabs.ibm-dyntabs").length > 0)) {
                        dijit.setWaiRole(dojo.byId("ibm-primary-tabs"), "navigation");
                    }
                    var _506 = dojo.query("div#ibm-content-nav #ibm-secondary-tabs");
                    if (_506.length > 0) {
                        if (dojo.style(_506[0], "display") != "none") {
                            if (dojo.query("div#ibm-content-nav #ibm-secondary-tabs.ibm-dyntabs").length > 0) {
                                var _507 = dojo.query("div#ibm-content-nav #ibm-primary-tabs.ibm-dyntabs .ibm-tabs li.ibm-active a");
                                if (_507.length > 0) {
                                    dojo.attr(_506[0], "aria-label", _507[0].innerHTML);
                                }
                            } else {
                                dijit.setWaiRole(_506[0], "navigation");
                                var _507 = dojo.query("div#ibm-content-nav #ibm-primary-tabs .ibm-tabs li.ibm-active a");
                                if (_507.length > 0) {
                                    dojo.attr(_506[0], "aria-label", _507[0].innerHTML);
                                    if (dojo.query("ul.ibm-tabs", _506[0])[0] && _507.length > 0) {
                                        dojo.attr(dojo.query("ul.ibm-tabs", _506[0])[0], "aria-label", _507[0].innerHTML);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            var _508 = [];
            var dtl = dojo.query(".ibm-dyntabs .ibm-tabs");
            var tl = dojo.query(".ibm-tabs");
            if (dtl.length > 0) {
                tl.forEach(function (tle) {
                    var flag = false;
                    for (var i = 0; i < dtl.length; i++) {
                        if (dtl[i] == tle) {
                            flag = true;
                            break;
                        }
                    }
                    if (!flag) {
                        _508.push(tle);
                    }
                });
            } else {
                _508 = tl;
            }
            if (_508.length > 0) {
                for (var i = 0; i < _508.length; i++) {
                    dijit.setWaiRole(_508[i], "tablist");
                    if (ibmweb.config.config != "w3") {
                        dojo.attr(_508[i].parentNode, "aria-label", dojo.attr(_508[i].parentNode, "aria-label") || "Tab Navigation");
                        dijit.setWaiRole(_508[i].parentNode, dijit.getWaiRole(_508[i].parentNode) || "navigation");
                    }
                    dojo.query("li", _508[i]).forEach(function (item) {
                        dijit.setWaiRole(item, "presentation");
                    });
                    var _509 = dojo.query("a", _508[i]);
                    _509.forEach(function (item) {
                        dijit.setWaiRole(item, "tab");
                        dojo.attr(item, "aria-selected", "false");
                        dojo.attr(item, "aria-label", item.innerHTML);
                    });
                    dojo.query(".ibm-tabs li.ibm-active a, .ibm-tabs li.ibm-highlight-tab a ").forEach(function (item) {
                        dojo.attr(item, "aria-selected", "true");
                    });
                }
            }
            if (dojo.byId("ibm-navigation") && dojo.style(dojo.byId("ibm-navigation"), "display") != "none") {
                dijit.setWaiRole("ibm-navigation", "navigation");
                dojo.attr("ibm-navigation", "aria-label", "Primary");
                dojo.query("#ibm-navigation h2.ibm-access").style("display", "none");
            }
            if (dojo.byId("ibm-secondary-navigation") && dojo.style(dojo.byId("ibm-secondary-navigation"), "display") != "none") {
                dijit.setWaiRole("ibm-secondary-navigation", "navigation");
                dojo.attr("ibm-secondary-navigation", "aria-label", "Secondary");
            }(function () {
                if (dojo.byId("ibm-content-sidebar") && dojo.style(dojo.byId("ibm-content-sidebar"), "display") != "none") {
                    var n = 0;
                    (dojo.query("#ibm-content-sidebar #ibm-contact-module")[0]) ? n++ : null;
                    (dojo.query("#ibm-content-sidebar #ibm-merchandising-module")[0]) ? n++ : null;
                    if (dojo.query("#ibm-content-sidebar *").length > n) {
                        dijit.setWaiRole("ibm-content-sidebar", "complementary");
                    }
                    dojo.attr("ibm-content-sidebar", "aria-label", _4f3.sbmain || "Content sidebar");
                }
            })();
            (function () {
                if (dojo.byId("ibm-related-content") && dojo.style(dojo.byId("ibm-related-content"), "display") != "none") {
                    var n = 0;
                    (dojo.query("#ibm-related-content #ibm-merchandising-module")[0]) ? n++ : null;
                    if (dojo.query("#ibm-related-content *").length > n) {
                        dijit.setWaiRole("ibm-related-content", "complementary");
                    }
                    dojo.attr("ibm-related-content", "aria-label", _4f3.relcnt || "Related Content");
                }
            })();
            if (dojo.isOpera) {
                dojo.query("#ibm-top a").forEach(function (i) {
                    if (dojo.attr(i, "tabindex") == null) {
                        i.tabIndex = 0;
                    }
                });
            }
            if (dojo.byId("ibm-footer-module")) {
                dijit.setWaiRole("ibm-footer-module", "complementary");
            }
            if (dojo.byId("ibm-footer")) {
                !(dojo.query("*[role=\"contentinfo\"]").length > 0) ? dijit.setWaiRole("ibm-footer", "contentinfo") : null;
                dojo.attr("ibm-footer", "aria-label", _4f3.footer || "Footer");
            }
            if (!(dojo.query("*[role=\"main\"]").length > 0)) {
                (dojo.query("#ibm-access-cntr").length > 0) ? dijit.setWaiRole("ibm-access-cntr", "main") : null;
            }
            var _50a = dojo.query(".ibm-form-elem-grp");
            var _50b = 0;
            if (_50a.length > 0) {
                _50a.forEach(function (_50c) {
                    var lbl = dojo.query(".ibm-form-grp-lbl", _50c);
                    dojo.query(".ibm-input-group", _50c).forEach(function (_50d, i) {
                        if (dojo.hasClass(_50d, "ibm-radio-group")) {
                            dijit.setWaiRole(_50d, "radiogroup");
                        } else {
                            dijit.setWaiRole(_50d, "group");
                        }
                        if (lbl.length > i) {
                            if ( !! lbl[i].id || lbl[i].id != "") {
                                dojo.attr(_50d, "aria-labelledby", lbl[i].id);
                            } else {
                                lbl[i].id = "ibm-grp-lbl_" + (_50b++);
                                dojo.attr(_50d, "aria-labelledby", lbl[i].id);
                            }
                        }
                    });
                });
            }
            dojo.query(".ibm-required").forEach(function (i) {
                dojo.create("span", {
                    className: "ibm-access",
                    innerHTML: "required"
                }, i, "last");
            });
            dojo.attr(dojo.byId("ibm-com"), "aria-busy", "false");
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav.maxymiser"]) {
    dojo._hasResource["ibmweb.dynnav.maxymiser"] = true;
    dojo.provide("ibmweb.dynnav.maxymiser");
    dojo.declare("ibmweb.dynnav.maxymiser", [ibmweb.dynnav._module], {
        init: function () {
            var _50e = document.location.href.indexOf(".ibm.com/support/") == -1;
            return ibmweb.meta.cc == "us" && ibmweb.meta.lc == "en" && _50e;
        },
        onLoad: function () {
            dojo.create("script", {
                type: "text/javascript",
                src: "//service.maxymiser.net/cdn/ibm/js/mmcore.js"
            }, dojo.query("head")[0]);
        }
    });
}
if (!dojo._hasResource["ibmweb.dynnav._base-v17"]) {
    dojo._hasResource["ibmweb.dynnav._base-v17"] = true;
    dojo.provide("ibmweb.dynnav._base-v17");
}
if (!dojo._hasResource["ibmweb.controller"]) {
    dojo._hasResource["ibmweb.controller"] = true;
    dojo.provide("ibmweb.controller");
    (function () {
        var _50f = (function () {
            var self = "ibm_user_info";
            var data = null,
                _510 = false,
                _511 = [],
                _512 = typeof (ibmweb) !== "undefined" && typeof (ibmweb.config) !== "undefined" && typeof (ibmweb.config.w3UserServiceUrl) !== "undefined";

            function _513(_514, _515) {
                _511.push({
                    success: _514,
                    fail: _515
                });
                if (!_510) {
                    _510 = true;
                    var _516 = dojo.cookie("w3ibmProfile");
                    if (_516) {
                        var hkey = _516.split("|")[0];
                        dojo.io.script.get({
                            url: ibmweb.config.w3UserServiceUrl + hkey + "/callback/" + self + ".setData",
                            timeout: ibmweb.config.w3UserServiceTimeout,
                            error: function (er1, er2) {
                                _512 = false;
                                if (console && console.warn) {}
                                dojo.forEach(_511, function (q) {
                                    q.fail();
                                });
                            }
                        });
                    } else {
                        _512 = false;
                        dojo.forEach(_511, function (q) {
                            q.fail();
                        });
                    }
                }
            };
            var ret = function (_517, _518) {
                if (_512 && _517) {
                    if (data === null) {
                        _513(_517, _518);
                    } else {
                        _517(data);
                    }
                } else {
                    _518();
                }
                return _512;
            };
            ret.setData = function (_519) {
                data = _519;
                dojo.forEach(_511, function (q) {
                    q.success(data);
                });
            };
            return ret;
        })();
        if (ibmweb.meta.isLoaded) {
            ibmweb.dynnav.init();
        } else {
            dojo.connect(ibmweb.meta, "_init", function () {
                ibmweb.dynnav.init();
            });
        }
    })();
    dojo.addOnLoad(function () {
        var _51a = dojo.query(".v17, .nihilo, .soria, .tundra, .claro, .oneui, .lotusui, .ram"),
            node = dojo.body();
        if (!dojo.hasClass(node, "ibm-custom-theme")) {
            if (node.id && node.id == "ibm-com") {
                if (_51a.length > 0) {
                    var _51b = node.className.toString().match(/v17|nihilo|soria|tundra|claro|oneui|lotusui|ram/g),
                        _51c = _51a[0].className.toString().match(/v17|nihilo|soria|tundra|claro|oneui|lotusui|ram/g)[0];
                    if (_51b == null) {
                        dojo.addClass(node, _51c);
                    }
                    if (_51c == "nihilo" || _51c == "soria" || _51c == "tundra" || _51c == "claro" || _51c == "oneui") {
                        dojo.create("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "//1.www.s81c.com/common/js/dojo/themes/" + _51c + ".css"
                        }, dojo.query("head")[0], "last");
                    }
                } else {
                    dojo.addClass(node, "v17");
                }
            } else {
                if (node.id && node.id == "w3-ibm-com") {
                    if (_51a.length > 0) {
                        var _51b = node.className.toString().match(/v17|nihilo|soria|tundra|claro|oneui|lotusui|ram/g),
                            _51c = _51a[0].className.toString().match(/v17|nihilo|soria|tundra|claro|oneui|lotusui|ram/g)[0];
                        if (_51b) {
                            dojo.addClass(node, _51c);
                        }
                        if (_51c == "nihilo" || _51c == "soria" || _51c == "tundra" || _51c == "claro" || _51c == "oneui") {
                            dojo.query("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"//1.www.s81c.com/common/js/dojo/themes/" + _51c + ".css\">");
                        }
                    } else {
                        dojo.addClass(node, "v8");
                    }
                }
            }
        }
    });
    dojo.addOnLoad(function () {
        if (!ibmweb.info.v17) {
            return;
        }
        if (dojo.query("table.ibm-alternating").length != 0 || dojo.query("table.ibm-alternating-col").length != 0 || dojo.query("table.ibm-sortable-table").length != 0) {
            dojo["require"]("ibmweb.table");
        }
        if (dojo.query("table.ibm-table-scroll")[0]) {
            dojo["require"]("ibmweb.table-scroll");
        }
    });
    dojo.addOnLoad(function () {
        if (!ibmweb.info.v17) {
            return;
        }
        if (dojo.query("div.ibm-common-overlay").length > 0) {
            dojo["require"]("ibmweb.overlay");
            dojo.addOnLoad(function () {
                ibmweb.overlay.init();
            });
        }
    });
    dojo.addOnLoad(function () {
        if (!ibmweb.info.v17) {
            return;
        }
        if (dojo.query(".ibm-leaving-prompt").length > 0) {
            dojo["require"]("ibmweb.leaving");
            dojo.addOnLoad(function () {
                ibmweb.leaving.init();
            });
        }
    });
    dojo.addOnLoad(function () {
        if (!ibmweb.info.v17) {
            return;
        }
        if (dojo.query(".ibm-tooltip, .ibm-tooltip-html").length > 0) {
            dojo["require"]("ibmweb.tooltip");
            dojo.addOnLoad(function () {
                ibmweb.tooltip.init();
            });
        }
    });
    dojo.addOnLoad(function () {
        var _51d = dojo.query(".ibm-ribbon .ibm-container-body");
        if (_51d.length > 0) {
            dojo["require"]("ibmweb.ribbon");
            dojo.addOnLoad(function () {
                dojo.forEach(_51d, function (item) {
                    if (dojo.hasAttr(item, "id") && item.id == "ibm-leadspace-body") {
                        ibmweb.ribbonLeadspace.init();
                    } else {
                        var s = new ibmweb.ribbon({
                            id: dojo.hasAttr(item, "id") ? item.id : null,
                            autoscroll: dojo.hasClass(item, "ibm-autoscroll") ? true : false,
                            srcNodeRef: item
                        });
                        s.startup();
                    }
                });
            });
        }
    });
    dojo.addOnLoad(function () {
        var _51e = dojo.query(".ibm-scroll");
        if (_51e.length > 0) {
            dojo["require"]("ibmweb.scroll");
            dojo.addOnLoad(function () {
                dojo.forEach(_51e, function (item) {
                    new ibmweb.scroll({
                        element: item
                    });
                });
            });
        }
    });
    dojo.addOnLoad(function () {
        var _51f = dojo.query("#ibm-primary-tabs"),
            _520 = dojo.query("#ibm-secondary-tabs");
        if (_51f.length == 1 && _520.length == 1) {
            dojo["require"]("ibmweb.subtabs");
            dojo.addOnLoad(function () {
                ibmweb.subtabs.init();
            });
        }
    });
    dojo.addOnLoad(function () {
        var tabs = dojo.query("div.ibm-dyntabs");
        if (tabs.length > 0) {
            dojo["require"]("ibmweb.dyntabs");
            dojo.addOnLoad(function () {
                ibmweb.dyntabs.init();
            });
        }
    });
    dojo.addOnLoad(function () {});
    dojo.addOnLoad(function () {
        dojo.query("p.ibm-back-to-top a").onclick(function (e) {
            if (dojo.attr(this, "href") != "#ibm-content") {
                return true;
            }
            dojo.stopEvent(e);
            window.scrollTo(0, 1);
        });
        dojo.query(".ibm-tab-section.ibm-text a.ibm-anchor-down-em-link").onclick(function (e) {
            var hash = e.target.href.split("#");
            if (hash.length != 2) {
                return;
            }
            hash = hash[1];
            var elem = dojo.byId(hash);
            if (!elem) {
                return;
            }
            window.scrollTo(0, dojo.marginBox(elem).t - dojo.position(dojo.byId("ibm-masthead")).h);
            dojo.stopEvent(e);
        });
        if (dojo.version.major <= 1 && dojo.version.minor > 3) {
            var _521 = dojo.query("a[name]");
            _521.forEach(function (a) {
                if (a.className === "" && a.href === "") {
                    var ap = dojo.create("div", {
                        className: "ibm-anchor-pointer"
                    }, a, "before");
                    if (dojo.isIE < 8) {
                        dojo.create("a", {
                            id: a.name
                        }, ap);
                    } else {
                        dojo.create("a", {
                            name: a.name
                        }, ap);
                    }
                    dojo.query(a).orphan();
                }
            });
            if (window.location.hash !== "") {
                window.location.hash += "";
            }
        }
    });
    dojo.addOnLoad(function () {
        dojo.query("ul.ibm-portrait-module-list li h3 a, ul.ibm-portrait-module-list li h2 a").forEach(function (item) {
            var _522 = dojo.query(dojo.query(item).parents(".ibm-portrait-module-list")).at(0);
            if (!dojo.hasClass(_522[0], "ibm-no-link")) {
                var _523 = dojo.query(item).parents("li").at(0).children("img").at(0);
                if (dojo.hasClass(_522[0], "ibm-new-window")) {
                    _523.onclick(function (e) {
                        dojo.stopEvent(e);
                        window.open(item.href);
                    });
                    _523.style("cursor", "pointer");
                } else {
                    if (_523.parent("a")[0]) {
                        return;
                    }
                    var _524 = dojo.query(dojo.clone(item)).attr({
                        tabindex: "-1",
                        role: "presentation"
                    }),
                        _525 = dojo.hasClass(_524[0], "ibm-media"),
                        _526 = dojo.hasClass(_524[0], "ibm-leaving-prompt");
                    _524[0].innerHTML = "";
                    _524[0].className = "";
                    if (_525) {
                        _524.addClass("ibm-media");
                    }
                    if (_526) {
                        _524.addClass("ibm-leaving-prompt");
                    }
                    _523.wrap(_524[0]);
                }
            }
        });
    });
    dojo.addOnLoad(function () {
        var tmp = dojo.query(".ibm-twitter-module");
        if (tmp.length > 0) {
            dojo["require"]("ibmweb.twitter");
            dojo.addOnLoad(function () {
                dojo.forEach(tmp, function (item) {
                    var w = new ibmweb.twitter.Widget({
                        targetNode: item
                    });
                    w.placeAt(item);
                    w.startup();
                });
            });
        }
    });
    dojo.addOnLoad(function () {
        var tmp = dojo.query(".ibm-rss-module");
        if (tmp.length > 0) {
            dojo["require"]("ibmweb.rssmodule");
            dojo.addOnLoad(function () {
                dojo.forEach(tmp, function (item) {
                    var w = new ibmweb.rssmodule.Widget({
                        targetNode: item
                    });
                    w.placeAt(item);
                    w.startup();
                });
            });
        }
    });
    dojo.addOnLoad(function () {
        var _527 = dojo.query(".ibm-img-contactbox");
        if (_527.length > 0) {
            dojo["require"]("ibmweb.www.contactmodule");
            dojo.addOnLoad(function () {
                _527.forEach(function (box) {
                    ibmweb.www.contactmodule.init(box);
                });
            });
        }
    });
    dojo.addOnLoad(function () {
        if (dojo.query("#ibm-top").attr("class") == "ibm-popup") {
            dojo.query("html,body").style("background", "none");
        }
    });
    dojo.addOnLoad(function () {
        if (ibmweb.config.backtocountry.enabled) {
            dojo["require"]("ibmweb.backtocountry");
            dojo.addOnLoad(function () {
                ibmweb.backtocountry.init();
            });
        }
    });
    dojo.addOnLoad(function () {
        ibmweb.stepindicator.init();
    });
    dojo.addOnLoad(function () {
        var _528 = dojo.query("[class*='ibm-play-button-']");
        if (_528.length > 0) {
            dojo.forEach(_528, function (item) {
                var elm = dojo.query(item),
                    con = elm.closest(".ibm-video-container"),
                    col = elm.closest("[class*='ibm-col-']"),
                    _529 = elm.closest(".ibm-ribbon"),
                    rQ = dojo.query(_529),
                    _52a = (_529.length == 1),
                    _52b = elm.closest(".ibm-video"),
                    fB = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"/i/v17/video-play-button-medium.png\",sizingMethod=\"crop\")",
                    fBh = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"/i/v17/video-play-button-medium-hover.png\",sizingMethod=\"crop\")",
                    fBd = 90,
                    _52c = true;
                if (col.length == 0) {
                    return false;
                }
                if (dojo.hasClass(col[0], "ibm-col-6-1") || dojo.hasClass(col[0], "ibm-col-5-1")) {
                    fB = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"/i/v17/video-play-button-small.png\",sizingMethod=\"crop\")";
                    fBh = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"/i/v17/video-play-button-small-hover.png\",sizingMethod=\"crop\")";
                    fBd = 50;
                }
                if (_52a) {
                    dojo.style(con[0], {
                        marginTop: "0px"
                    });
                    dojo.style(col[0], {
                        overflow: "hidden"
                    });
                    if (!dojo.hasClass(rQ[0], "ibm-alternate")) {
                        dojo.addOnLoad(function () {
                            var cols = dojo.query(".ibm-columns", rQ[0]);
                            cols.forEach(function (c) {
                                dojo.style(c, "margin", "0px");
                            });
                        });
                    }
                }
                var i, i_n = elm.next("img"),
                    i_p = elm.prev("img");
                if (i_n.length == 1) {
                    i = i_n;
                } else {
                    if (i_p.length == 1) {
                        i = i_p;
                    } else {
                        _52c = false;
                    }
                }
                if (dojo.isIE == 6) {
                    if (_52c) {
                        dojo.removeAttr(i[0], "alt");
                        dojo.style(item, {
                            height: i[0].height + "px",
                            top: (i[0].height - fBd) / 2 + "px",
                            left: (i[0].width - fBd) / 2 + "px",
                            backgroundImage: "none",
                            cursor: "pointer",
                            filter: fB
                        });
                    } else {
                        if (con.length == 1) {
                            dojo.style(item, {
                                height: con[0].height + "px",
                                top: (con[0].height - fBd) / 2 + "px",
                                left: (con[0].width - fBd) / 2 + "px",
                                backgroundImage: "none",
                                cursor: "pointer"
                            });
                        }
                    }
                    if (_52b.length == 1) {
                        dojo.connect(_52b[0], "onmouseover", function () {
                            dojo.style(item, {
                                filter: fBh
                            });
                        });
                        dojo.connect(_52b[0], "onmouseout", function () {
                            dojo.style(item, {
                                filter: fB
                            });
                        });
                    }
                } else {
                    dojo.addOnLoad(function () {
                        var h = (_52c) ? i[0].height : 0;
                        if (h > 0) {
                            con.style("height", h + "px");
                        }
                    });
                }
            });
        }
    });
}
if (!dojo._hasResource["ibmweb.www.controller"]) {
    dojo._hasResource["ibmweb.www.controller"] = true;
    dojo.provide("ibmweb.www.controller");
}