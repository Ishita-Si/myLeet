(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eI4Qk":[function(require,module,exports) {
var d = globalThis.process?.argv || [];
var y = ()=>globalThis.process?.env || {};
var H = new Set(d), _ = (e)=>H.has(e), G = d.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var Z = _("--dry-run"), p = ()=>_("--verbose") || y().VERBOSE === "true", q = p();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var x = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), S = 0, c = (...e)=>p() && u(`\u{1F7E1} ${S++}`, ...e);
var n = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "D:\\myLeet\\src\\contents\\leetcode.ts",
    "bundleId": "a957576c19abb439",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function I(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function C() {
    return n.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function O(e = C()) {
    let t = b();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function B(e) {
    typeof e.message == "string" && x("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(O());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let a of r.diagnostics.ansi){
            let w = a.codeframe || a.stack;
            m("[plasmo/parcel-runtime]: " + a.message + `
` + w + `

` + a.hints.join(`
`));
        }
    }), t.addEventListener("error", B), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var s = "__plasmo-loading__";
function $() {
    let e = globalThis.window?.trustedTypes;
    if (typeof e > "u") return;
    let t = document.querySelector('meta[name="trusted-types"]')?.content?.split(" "), o = t ? t[t?.length - 1].replace(/;/g, "") : void 0;
    return typeof e < "u" ? e.createPolicy(o || `trusted-html-${s}`, {
        createHTML: (a)=>a
    }) : void 0;
}
var T = $();
function g() {
    return document.getElementById(s);
}
function f() {
    return !g();
}
function F() {
    let e = document.createElement("div");
    e.id = s;
    let t = `
  <style>
    #${s} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${s}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${s} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${s} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${s} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${s} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `;
    return e.innerHTML = T ? T.createHTML(t) : t, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function N(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = F();
        e = N(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var W = `${E}${module.id}__`, i, A = !1, M = k();
async function h() {
    c("Script Runtime - reloading"), A ? globalThis.location?.reload?.() : M.show({
        reloadButton: !0
    });
}
function R() {
    i?.disconnect(), i = l?.runtime.connect({
        name: W
    }), i.onDisconnect.addListener(()=>{
        h();
    }), i.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (A = !0);
    });
}
function j() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
j();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === n.envHash).some((o)=>L(module.bundle, o.id)) && (M.show(), l?.runtime ? i.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"c8UfV":[function(require,module,exports) {
var _constants = require("~constants");
var _extractor = require("~services/leetcode/extractor");
var _storage = require("~utils/storage");
var _validation = require("~utils/validation");
const BUTTON_ID = "leetcode-github-organizer-upload-btn";
let currentPending = null;
const getSubmissionIdFromLocation = ()=>{
    const ids = [];
    // 1. From URL pathname
    const direct = window.location.pathname.match(/submissions\/(?:detail\/)?(\d+)/);
    if (direct?.[1]) ids.push(Number(direct[1]));
    // 2. From query string
    const fromQuery = new URLSearchParams(window.location.search).get("submissionId");
    if (fromQuery) ids.push(Number(fromQuery));
    // 3. From all links
    const links = document.querySelectorAll('a[href*="/submissions/"]');
    links.forEach((link)=>{
        const match = link.href.match(/submissions\/(?:detail\/)?(\d+)/);
        if (match?.[1]) ids.push(Number(match[1]));
    });
    // 4. From page text
    const textMatches = document.body.innerHTML.matchAll(/submission[^0-9]{0,20}(\d{6,})/gi);
    for (const match of textMatches)if (match[1]) ids.push(Number(match[1]));
    if (ids.length === 0) return null;
    // Return the maximum ID (most recent)
    const maxId = Math.max(...ids.filter((id)=>!Number.isNaN(id)));
    return maxId > 0 ? maxId.toString() : null;
};
const isAcceptedVisible = ()=>{
    const text = document.body.innerText;
    return /Accepted|Success|Runtime|Memory/i.test(text);
};
const removeButton = ()=>{
    document.getElementById(BUTTON_ID)?.remove();
};
const createUploadButton = ()=>{
    if (!currentPending || document.getElementById(BUTTON_ID)) return;
    const button = document.createElement("button");
    button.id = BUTTON_ID;
    button.textContent = "Push to GitHub";
    button.style.position = "fixed";
    button.style.right = "20px";
    button.style.bottom = "20px";
    button.style.zIndex = "99999";
    button.style.padding = "10px 14px";
    button.style.borderRadius = "8px";
    button.style.border = "1px solid #1d4ed8";
    button.style.background = "#2563eb";
    button.style.color = "white";
    button.style.fontWeight = "600";
    button.style.cursor = "pointer";
    button.onclick = async ()=>{
        const settings = await (0, _storage.getSettings)();
        if (!settings.github.token || !settings.github.owner || !settings.github.repo) {
            window.alert("Please configure GitHub settings in extension popup first.");
            return;
        }
        const timeComplexity = window.prompt("Enter Time Complexity", "O(n)") ?? "";
        const spaceComplexity = window.prompt("Enter Space Complexity", "O(1)") ?? "";
        const parsed = (0, _validation.complexitySchema).safeParse({
            timeComplexity,
            spaceComplexity
        });
        if (!parsed.success) {
            window.alert("Invalid TC/SC input. Example: O(n), O(1)");
            return;
        }
        button.textContent = "Uploading...";
        button.setAttribute("disabled", "true");
        const response = await chrome.runtime.sendMessage({
            type: (0, _constants.MESSAGE_TYPES).REQUEST_UPLOAD,
            payload: {
                metadata: currentPending?.metadata,
                complexity: parsed.data
            }
        });
        if (response?.ok) {
            window.alert(`Uploaded to GitHub: ${response.filePath}`);
            currentPending = null;
            removeButton();
        } else {
            window.alert(response?.error ?? "Upload failed");
            button.textContent = "Push to GitHub";
            button.removeAttribute("disabled");
        }
    };
    document.body.appendChild(button);
};
const detectAndEmit = async ()=>{
    const submissionId = getSubmissionIdFromLocation();
    if (!isAcceptedVisible()) return;
    if (!submissionId) return;
    try {
        const lastId = await (0, _storage.getLastSubmissionId)();
        if (lastId === submissionId) return;
        const metadata = await (0, _extractor.fetchSubmissionMetadata)(submissionId);
        await (0, _storage.markLastSubmissionId)(submissionId);
        currentPending = {
            metadata,
            detectedAtIso: new Date().toISOString()
        };
        await (0, _storage.setPendingSubmission)(currentPending);
        await chrome.runtime.sendMessage({
            type: (0, _constants.MESSAGE_TYPES).PENDING_SUBMISSION,
            payload: currentPending
        });
        createUploadButton();
    } catch (error) {
        currentPending = null;
        removeButton();
        if (error instanceof Error && error.message.includes("Extension context invalidated")) {
            console.warn("Extension was updated. Please refresh the page to continue using the extension.");
            return;
        }
        console.error(`Failed to detect and emit LeetCode submission ${submissionId}.`, error);
    }
};
const patchHistoryEvents = ()=>{
    const rawPush = history.pushState;
    const rawReplace = history.replaceState;
    history.pushState = function(...args) {
        rawPush.apply(this, args);
        scheduleDetection();
    };
    history.replaceState = function(...args) {
        rawReplace.apply(this, args);
        scheduleDetection();
    };
};
let timer = null;
const scheduleDetection = ()=>{
    if (timer) window.clearTimeout(timer);
    timer = window.setTimeout(()=>void detectAndEmit(), 600);
};
const observer = new MutationObserver(scheduleDetection);
observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    characterData: true
});
window.addEventListener("popstate", ()=>{
    currentPending = null;
    removeButton();
    scheduleDetection();
});
window.addEventListener("load", scheduleDetection);
patchHistoryEvents();
scheduleDetection();

},{"~constants":"c9nup","~services/leetcode/extractor":"kfuYY","~utils/storage":"2r4h0","~utils/validation":"kjd1q"}],"c9nup":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MESSAGE_TYPES", ()=>MESSAGE_TYPES);
parcelHelpers.export(exports, "STORAGE_KEYS", ()=>STORAGE_KEYS);
parcelHelpers.export(exports, "API_ENDPOINTS", ()=>API_ENDPOINTS);
const MESSAGE_TYPES = {
    PENDING_SUBMISSION: "PENDING_SUBMISSION",
    REQUEST_UPLOAD: "REQUEST_UPLOAD",
    UPLOAD_STATUS: "UPLOAD_STATUS",
    VALIDATE_GITHUB: "VALIDATE_GITHUB",
    GET_PENDING_SUBMISSION: "GET_PENDING_SUBMISSION"
};
const STORAGE_KEYS = {
    SETTINGS: "settings",
    RECENT_UPLOADS: "recentUploads",
    LAST_PROCESSED_SUBMISSION_ID: "lastProcessedSubmissionId",
    PENDING_SUBMISSION: "pendingSubmission"
};
const API_ENDPOINTS = {
    LEETCODE_GRAPHQL: undefined ?? "https://leetcode.com/graphql",
    GITHUB_API: undefined ?? "https://api.github.com"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"boKlo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kfuYY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchSubmissionMetadata", ()=>fetchSubmissionMetadata);
var _client = require("./client");
var _errors = require("~utils/errors");
const query = `
query submissionDetails($submissionId: Int!) {
  submissionDetails(submissionId: $submissionId) {
    id
    lang { name verboseName }
    runtime
    memory
    code
    timestamp
    question {
      title
      titleSlug
      difficulty
      topicTags { name }
    }
  }
}`;
const fetchSubmissionMetadata = async (submissionId)=>{
    const numericId = Number(submissionId);
    if (Number.isNaN(numericId)) throw new (0, _errors.AppError)("Invalid submission id", "VALIDATION");
    const data = await (0, _client.leetcodeGraphql)({
        query,
        variables: {
            submissionId: numericId
        },
        operationName: "submissionDetails"
    });
    const details = data.submissionDetails;
    if (!details?.question?.titleSlug) throw new (0, _errors.AppError)("Submission metadata unavailable", "VALIDATION");
    return {
        title: details.question.title,
        slug: details.question.titleSlug,
        difficulty: details.question.difficulty,
        topicTags: details.question.topicTags.map((tag)=>tag.name),
        language: details.lang.name,
        code: details.code,
        runtime: details.runtime,
        memory: details.memory,
        submissionId: details.id,
        submittedAtIso: new Date(Number(details.timestamp) * 1000).toISOString(),
        url: `https://leetcode.com/problems/${details.question.titleSlug}/`
    };
};

},{"./client":"9EGDG","~utils/errors":"drbLA","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"9EGDG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "leetcodeGraphql", ()=>leetcodeGraphql);
var _constants = require("~constants");
const getCsrfToken = ()=>{
    const match = document.cookie.match(/(?:^|;) *csrftoken=([^;]*)/);
    return match ? match[1] : "";
};
const leetcodeGraphql = async (payload)=>{
    const headers = {
        "content-type": "application/json"
    };
    const csrf = getCsrfToken();
    if (csrf) headers["x-csrftoken"] = csrf;
    const response = await fetch((0, _constants.API_ENDPOINTS).LEETCODE_GRAPHQL, {
        method: "POST",
        headers,
        credentials: "include",
        body: JSON.stringify(payload)
    });
    if (!response.ok) {
        const text = await response.text().catch(()=>"");
        throw new Error(`LeetCode API error: ${response.status} - ${text}`);
    }
    const data = await response.json();
    if (data.errors?.length) throw new Error(data.errors[0].message);
    return data.data;
};

},{"~constants":"c9nup","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"drbLA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AppError", ()=>AppError);
parcelHelpers.export(exports, "toAppError", ()=>toAppError);
class AppError extends Error {
    code;
    retryable;
    constructor(message, code, retryable = false){
        super(message);
        this.code = code;
        this.retryable = retryable;
    }
}
const toAppError = (error)=>{
    if (error instanceof AppError) return error;
    if (error instanceof Error) return new AppError(error.message, "UNKNOWN", false);
    return new AppError("Unexpected error", "UNKNOWN", false);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"2r4h0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultSettings", ()=>defaultSettings);
parcelHelpers.export(exports, "getSettings", ()=>getSettings);
parcelHelpers.export(exports, "setSettings", ()=>setSettings);
parcelHelpers.export(exports, "getPendingSubmission", ()=>getPendingSubmission);
parcelHelpers.export(exports, "setPendingSubmission", ()=>setPendingSubmission);
parcelHelpers.export(exports, "markLastSubmissionId", ()=>markLastSubmissionId);
parcelHelpers.export(exports, "getLastSubmissionId", ()=>getLastSubmissionId);
parcelHelpers.export(exports, "addUploadRecord", ()=>addUploadRecord);
var _constants = require("~constants");
const defaultSettings = {
    autoUploadEnabled: true,
    askComplexityOnAccepted: true,
    maxUploadRetries: 2,
    github: {
        token: "",
        owner: "",
        repo: "",
        branch: "main",
        basePath: "leetcode-solutions"
    }
};
const getSettings = async ()=>{
    const result = await chrome.storage.local.get((0, _constants.STORAGE_KEYS).SETTINGS);
    return result[(0, _constants.STORAGE_KEYS).SETTINGS] ?? defaultSettings;
};
const setSettings = async (settings)=>{
    await chrome.storage.local.set({
        [(0, _constants.STORAGE_KEYS).SETTINGS]: settings
    });
};
const getPendingSubmission = async ()=>{
    const result = await chrome.storage.local.get((0, _constants.STORAGE_KEYS).PENDING_SUBMISSION);
    return result[(0, _constants.STORAGE_KEYS).PENDING_SUBMISSION] ?? null;
};
const setPendingSubmission = async (pending)=>{
    await chrome.storage.local.set({
        [(0, _constants.STORAGE_KEYS).PENDING_SUBMISSION]: pending
    });
};
const markLastSubmissionId = async (submissionId)=>{
    await chrome.storage.local.set({
        [(0, _constants.STORAGE_KEYS).LAST_PROCESSED_SUBMISSION_ID]: submissionId
    });
};
const getLastSubmissionId = async ()=>{
    const result = await chrome.storage.local.get((0, _constants.STORAGE_KEYS).LAST_PROCESSED_SUBMISSION_ID);
    return result[(0, _constants.STORAGE_KEYS).LAST_PROCESSED_SUBMISSION_ID] ?? null;
};
const addUploadRecord = async (record)=>{
    const result = await chrome.storage.local.get((0, _constants.STORAGE_KEYS).RECENT_UPLOADS);
    const previous = result[(0, _constants.STORAGE_KEYS).RECENT_UPLOADS] ?? [];
    await chrome.storage.local.set({
        [(0, _constants.STORAGE_KEYS).RECENT_UPLOADS]: [
            record,
            ...previous
        ].slice(0, 20)
    });
};

},{"~constants":"c9nup","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"kjd1q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "complexitySchema", ()=>complexitySchema);
parcelHelpers.export(exports, "githubSettingsSchema", ()=>githubSettingsSchema);
var _zod = require("zod");
const complexitySchema = _zod.object({
    timeComplexity: _zod.string().min(2).max(40),
    spaceComplexity: _zod.string().min(2).max(40)
});
const githubSettingsSchema = _zod.object({
    token: _zod.string().min(10),
    owner: _zod.string().min(1),
    repo: _zod.string().min(1),
    branch: _zod.string().min(1),
    basePath: _zod.string().min(1)
});

},{"zod":"ikTuD","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"ikTuD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "z", ()=>_externalJs);
var _externalJs = require("./v3/external.js");
parcelHelpers.exportAll(_externalJs, exports);
exports.default = _externalJs;

},{"./v3/external.js":"dmfgv","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"dmfgv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _errorsJs = require("./errors.js");
parcelHelpers.exportAll(_errorsJs, exports);
var _parseUtilJs = require("./helpers/parseUtil.js");
parcelHelpers.exportAll(_parseUtilJs, exports);
var _typeAliasesJs = require("./helpers/typeAliases.js");
parcelHelpers.exportAll(_typeAliasesJs, exports);
var _utilJs = require("./helpers/util.js");
parcelHelpers.exportAll(_utilJs, exports);
var _typesJs = require("./types.js");
parcelHelpers.exportAll(_typesJs, exports);
var _zodErrorJs = require("./ZodError.js");
parcelHelpers.exportAll(_zodErrorJs, exports);

},{"./errors.js":"dS8a9","./helpers/parseUtil.js":"h18ab","./helpers/typeAliases.js":"ebsq2","./helpers/util.js":"bwPlh","./types.js":"12RWk","./ZodError.js":"2dlVV","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"dS8a9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultErrorMap", ()=>(0, _enJsDefault.default));
parcelHelpers.export(exports, "setErrorMap", ()=>setErrorMap);
parcelHelpers.export(exports, "getErrorMap", ()=>getErrorMap);
var _enJs = require("./locales/en.js");
var _enJsDefault = parcelHelpers.interopDefault(_enJs);
let overrideErrorMap = (0, _enJsDefault.default);
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}

},{"./locales/en.js":"7rnrG","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7rnrG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _zodErrorJs = require("../ZodError.js");
var _utilJs = require("../helpers/util.js");
const errorMap = (issue, _ctx)=>{
    let message;
    switch(issue.code){
        case (0, _zodErrorJs.ZodIssueCode).invalid_type:
            if (issue.received === (0, _utilJs.ZodParsedType).undefined) message = "Required";
            else message = `Expected ${issue.expected}, received ${issue.received}`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, (0, _utilJs.util).jsonStringifyReplacer)}`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).unrecognized_keys:
            message = `Unrecognized key(s) in object: ${(0, _utilJs.util).joinValues(issue.keys, ", ")}`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_union:
            message = `Invalid input`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${(0, _utilJs.util).joinValues(issue.options)}`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_enum_value:
            message = `Invalid enum value. Expected ${(0, _utilJs.util).joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_return_type:
            message = `Invalid function return type`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_date:
            message = `Invalid date`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                } else if ("startsWith" in issue.validation) message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                else if ("endsWith" in issue.validation) message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                else (0, _utilJs.util).assertNever(issue.validation);
            } else if (issue.validation !== "regex") message = `Invalid ${issue.validation}`;
            else message = "Invalid";
            break;
        case (0, _zodErrorJs.ZodIssueCode).too_small:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "bigint") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
            else message = "Invalid input";
            break;
        case (0, _zodErrorJs.ZodIssueCode).too_big:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else message = "Invalid input";
            break;
        case (0, _zodErrorJs.ZodIssueCode).custom:
            message = `Invalid input`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case (0, _zodErrorJs.ZodIssueCode).not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            (0, _utilJs.util).assertNever(issue);
    }
    return {
        message
    };
};
exports.default = errorMap;

},{"../ZodError.js":"2dlVV","../helpers/util.js":"bwPlh","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"2dlVV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZodIssueCode", ()=>ZodIssueCode);
parcelHelpers.export(exports, "quotelessJson", ()=>quotelessJson);
parcelHelpers.export(exports, "ZodError", ()=>ZodError);
var _utilJs = require("./helpers/util.js");
const ZodIssueCode = (0, _utilJs.util).arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
]);
const quotelessJson = (obj)=>{
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    get errors() {
        return this.issues;
    }
    constructor(issues){
        super();
        this.issues = [];
        this.addIssue = (sub)=>{
            this.issues = [
                ...this.issues,
                sub
            ];
        };
        this.addIssues = (subs = [])=>{
            this.issues = [
                ...this.issues,
                ...subs
            ];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) // eslint-disable-next-line ban/ban
        Object.setPrototypeOf(this, actualProto);
        else this.__proto__ = actualProto;
        this.name = "ZodError";
        this.issues = issues;
    }
    format(_mapper) {
        const mapper = _mapper || function(issue) {
            return issue.message;
        };
        const fieldErrors = {
            _errors: []
        };
        const processError = (error)=>{
            for (const issue of error.issues){
                if (issue.code === "invalid_union") issue.unionErrors.map(processError);
                else if (issue.code === "invalid_return_type") processError(issue.returnTypeError);
                else if (issue.code === "invalid_arguments") processError(issue.argumentsError);
                else if (issue.path.length === 0) fieldErrors._errors.push(mapper(issue));
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while(i < issue.path.length){
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) curr[el] = curr[el] || {
                            _errors: []
                        };
                        else {
                            curr[el] = curr[el] || {
                                _errors: []
                            };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof ZodError)) throw new Error(`Not a ZodError: ${value}`);
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, (0, _utilJs.util).jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue)=>issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues)if (sub.path.length > 0) {
            const firstEl = sub.path[0];
            fieldErrors[firstEl] = fieldErrors[firstEl] || [];
            fieldErrors[firstEl].push(mapper(sub));
        } else formErrors.push(mapper(sub));
        return {
            formErrors,
            fieldErrors
        };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues)=>{
    const error = new ZodError(issues);
    return error;
};

},{"./helpers/util.js":"bwPlh","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"bwPlh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "util", ()=>util);
parcelHelpers.export(exports, "objectUtil", ()=>objectUtil);
parcelHelpers.export(exports, "ZodParsedType", ()=>ZodParsedType);
parcelHelpers.export(exports, "getParsedType", ()=>getParsedType);
var util;
(function(util) {
    util.assertEqual = (_)=>{};
    function assertIs(_arg) {}
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items)=>{
        const obj = {};
        for (const item of items)obj[item] = item;
        return obj;
    };
    util.getValidEnumValues = (obj)=>{
        const validKeys = util.objectKeys(obj).filter((k)=>typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys)filtered[k] = obj[k];
        return util.objectValues(filtered);
    };
    util.objectValues = (obj)=>{
        return util.objectKeys(obj).map(function(e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
     ? (obj)=>Object.keys(obj) // eslint-disable-line ban/ban
     : (object)=>{
        const keys = [];
        for(const key in object)if (Object.prototype.hasOwnProperty.call(object, key)) keys.push(key);
        return keys;
    };
    util.find = (arr, checker)=>{
        for (const item of arr){
            if (checker(item)) return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function" ? (val)=>Number.isInteger(val) // eslint-disable-line ban/ban
     : (val)=>typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array.map((val)=>typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value)=>{
        if (typeof value === "bigint") return value.toString();
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function(objectUtil) {
    objectUtil.mergeShapes = (first, second)=>{
        return {
            ...first,
            ...second
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]);
const getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) return ZodParsedType.array;
            if (data === null) return ZodParsedType.null;
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") return ZodParsedType.promise;
            if (typeof Map !== "undefined" && data instanceof Map) return ZodParsedType.map;
            if (typeof Set !== "undefined" && data instanceof Set) return ZodParsedType.set;
            if (typeof Date !== "undefined" && data instanceof Date) return ZodParsedType.date;
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"h18ab":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeIssue", ()=>makeIssue);
parcelHelpers.export(exports, "EMPTY_PATH", ()=>EMPTY_PATH);
parcelHelpers.export(exports, "addIssueToContext", ()=>addIssueToContext);
parcelHelpers.export(exports, "ParseStatus", ()=>ParseStatus);
parcelHelpers.export(exports, "INVALID", ()=>INVALID);
parcelHelpers.export(exports, "DIRTY", ()=>DIRTY);
parcelHelpers.export(exports, "OK", ()=>OK);
parcelHelpers.export(exports, "isAborted", ()=>isAborted);
parcelHelpers.export(exports, "isDirty", ()=>isDirty);
parcelHelpers.export(exports, "isValid", ()=>isValid);
parcelHelpers.export(exports, "isAsync", ()=>isAsync);
var _errorsJs = require("../errors.js");
var _enJs = require("../locales/en.js");
var _enJsDefault = parcelHelpers.interopDefault(_enJs);
const makeIssue = (params)=>{
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [
        ...path,
        ...issueData.path || []
    ];
    const fullIssue = {
        ...issueData,
        path: fullPath
    };
    if (issueData.message !== undefined) return {
        ...issueData,
        path: fullPath,
        message: issueData.message
    };
    let errorMessage = "";
    const maps = errorMaps.filter((m)=>!!m).slice().reverse();
    for (const map of maps)errorMessage = map(fullIssue, {
        data,
        defaultError: errorMessage
    }).message;
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const overrideMap = (0, _errorsJs.getErrorMap)();
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            overrideMap,
            overrideMap === (0, _enJsDefault.default) ? undefined : (0, _enJsDefault.default)
        ].filter((x)=>!!x)
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor(){
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid") this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted") this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results){
            if (s.status === "aborted") return INVALID;
            if (s.status === "dirty") status.dirty();
            arrayValue.push(s.value);
        }
        return {
            status: status.value,
            value: arrayValue
        };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs){
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key,
                value
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs){
            const { key, value } = pair;
            if (key.status === "aborted") return INVALID;
            if (value.status === "aborted") return INVALID;
            if (key.status === "dirty") status.dirty();
            if (value.status === "dirty") status.dirty();
            if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) finalObject[key.value] = value.value;
        }
        return {
            status: status.value,
            value: finalObject
        };
    }
}
const INVALID = Object.freeze({
    status: "aborted"
});
const DIRTY = (value)=>({
        status: "dirty",
        value
    });
const OK = (value)=>({
        status: "valid",
        value
    });
const isAborted = (x)=>x.status === "aborted";
const isDirty = (x)=>x.status === "dirty";
const isValid = (x)=>x.status === "valid";
const isAsync = (x)=>typeof Promise !== "undefined" && x instanceof Promise;

},{"../errors.js":"dS8a9","../locales/en.js":"7rnrG","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"ebsq2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"12RWk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZodType", ()=>ZodType);
// Adapted from https://stackoverflow.com/a/3143231
parcelHelpers.export(exports, "datetimeRegex", ()=>datetimeRegex);
parcelHelpers.export(exports, "ZodString", ()=>ZodString);
parcelHelpers.export(exports, "ZodNumber", ()=>ZodNumber);
parcelHelpers.export(exports, "ZodBigInt", ()=>ZodBigInt);
parcelHelpers.export(exports, "ZodBoolean", ()=>ZodBoolean);
parcelHelpers.export(exports, "ZodDate", ()=>ZodDate);
parcelHelpers.export(exports, "ZodSymbol", ()=>ZodSymbol);
parcelHelpers.export(exports, "ZodUndefined", ()=>ZodUndefined);
parcelHelpers.export(exports, "ZodNull", ()=>ZodNull);
parcelHelpers.export(exports, "ZodAny", ()=>ZodAny);
parcelHelpers.export(exports, "ZodUnknown", ()=>ZodUnknown);
parcelHelpers.export(exports, "ZodNever", ()=>ZodNever);
parcelHelpers.export(exports, "ZodVoid", ()=>ZodVoid);
parcelHelpers.export(exports, "ZodArray", ()=>ZodArray);
parcelHelpers.export(exports, "ZodObject", ()=>ZodObject);
parcelHelpers.export(exports, "ZodUnion", ()=>ZodUnion);
parcelHelpers.export(exports, "ZodDiscriminatedUnion", ()=>ZodDiscriminatedUnion);
parcelHelpers.export(exports, "ZodIntersection", ()=>ZodIntersection);
// type ZodTupleItems = [ZodTypeAny, ...ZodTypeAny[]];
parcelHelpers.export(exports, "ZodTuple", ()=>ZodTuple);
parcelHelpers.export(exports, "ZodRecord", ()=>ZodRecord);
parcelHelpers.export(exports, "ZodMap", ()=>ZodMap);
parcelHelpers.export(exports, "ZodSet", ()=>ZodSet);
parcelHelpers.export(exports, "ZodFunction", ()=>ZodFunction);
parcelHelpers.export(exports, "ZodLazy", ()=>ZodLazy);
parcelHelpers.export(exports, "ZodLiteral", ()=>ZodLiteral);
parcelHelpers.export(exports, "ZodEnum", ()=>ZodEnum);
parcelHelpers.export(exports, "ZodNativeEnum", ()=>ZodNativeEnum);
parcelHelpers.export(exports, "ZodPromise", ()=>ZodPromise);
parcelHelpers.export(exports, "ZodEffects", ()=>ZodEffects);
parcelHelpers.export(exports, "ZodTransformer", ()=>ZodEffects);
parcelHelpers.export(exports, "ZodOptional", ()=>ZodOptional);
parcelHelpers.export(exports, "ZodNullable", ()=>ZodNullable);
parcelHelpers.export(exports, "ZodDefault", ()=>ZodDefault);
parcelHelpers.export(exports, "ZodCatch", ()=>ZodCatch);
parcelHelpers.export(exports, "ZodNaN", ()=>ZodNaN);
parcelHelpers.export(exports, "BRAND", ()=>BRAND);
parcelHelpers.export(exports, "ZodBranded", ()=>ZodBranded);
parcelHelpers.export(exports, "ZodPipeline", ()=>ZodPipeline);
parcelHelpers.export(exports, "ZodReadonly", ()=>ZodReadonly);
parcelHelpers.export(exports, "custom", ()=>custom);
parcelHelpers.export(exports, "Schema", ()=>ZodType);
parcelHelpers.export(exports, "ZodSchema", ()=>ZodType);
parcelHelpers.export(exports, "late", ()=>late);
parcelHelpers.export(exports, "ZodFirstPartyTypeKind", ()=>ZodFirstPartyTypeKind);
parcelHelpers.export(exports, "coerce", ()=>coerce);
parcelHelpers.export(exports, "any", ()=>anyType);
parcelHelpers.export(exports, "array", ()=>arrayType);
parcelHelpers.export(exports, "bigint", ()=>bigIntType);
parcelHelpers.export(exports, "boolean", ()=>booleanType);
parcelHelpers.export(exports, "date", ()=>dateType);
parcelHelpers.export(exports, "discriminatedUnion", ()=>discriminatedUnionType);
parcelHelpers.export(exports, "effect", ()=>effectsType);
parcelHelpers.export(exports, "enum", ()=>enumType);
parcelHelpers.export(exports, "function", ()=>functionType);
parcelHelpers.export(exports, "instanceof", ()=>instanceOfType);
parcelHelpers.export(exports, "intersection", ()=>intersectionType);
parcelHelpers.export(exports, "lazy", ()=>lazyType);
parcelHelpers.export(exports, "literal", ()=>literalType);
parcelHelpers.export(exports, "map", ()=>mapType);
parcelHelpers.export(exports, "nan", ()=>nanType);
parcelHelpers.export(exports, "nativeEnum", ()=>nativeEnumType);
parcelHelpers.export(exports, "never", ()=>neverType);
parcelHelpers.export(exports, "null", ()=>nullType);
parcelHelpers.export(exports, "nullable", ()=>nullableType);
parcelHelpers.export(exports, "number", ()=>numberType);
parcelHelpers.export(exports, "object", ()=>objectType);
parcelHelpers.export(exports, "oboolean", ()=>oboolean);
parcelHelpers.export(exports, "onumber", ()=>onumber);
parcelHelpers.export(exports, "optional", ()=>optionalType);
parcelHelpers.export(exports, "ostring", ()=>ostring);
parcelHelpers.export(exports, "pipeline", ()=>pipelineType);
parcelHelpers.export(exports, "preprocess", ()=>preprocessType);
parcelHelpers.export(exports, "promise", ()=>promiseType);
parcelHelpers.export(exports, "record", ()=>recordType);
parcelHelpers.export(exports, "set", ()=>setType);
parcelHelpers.export(exports, "strictObject", ()=>strictObjectType);
parcelHelpers.export(exports, "string", ()=>stringType);
parcelHelpers.export(exports, "symbol", ()=>symbolType);
parcelHelpers.export(exports, "transformer", ()=>effectsType);
parcelHelpers.export(exports, "tuple", ()=>tupleType);
parcelHelpers.export(exports, "undefined", ()=>undefinedType);
parcelHelpers.export(exports, "union", ()=>unionType);
parcelHelpers.export(exports, "unknown", ()=>unknownType);
parcelHelpers.export(exports, "void", ()=>voidType);
parcelHelpers.export(exports, "NEVER", ()=>NEVER);
var _zodErrorJs = require("./ZodError.js");
var _errorsJs = require("./errors.js");
var _errorUtilJs = require("./helpers/errorUtil.js");
var _parseUtilJs = require("./helpers/parseUtil.js");
var _utilJs = require("./helpers/util.js");
class ParseInputLazyPath {
    constructor(parent, value, path, key){
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);
            else this._cachedPath.push(...this._path, this._key);
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result)=>{
    if ((0, _parseUtilJs.isValid)(result)) return {
        success: true,
        data: result.value
    };
    else {
        if (!ctx.common.issues.length) throw new Error("Validation failed but no issues detected.");
        return {
            success: false,
            get error () {
                if (this._error) return this._error;
                const error = new (0, _zodErrorJs.ZodError)(ctx.common.issues);
                this._error = error;
                return this._error;
            }
        };
    }
};
function processCreateParams(params) {
    if (!params) return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    if (errorMap) return {
        errorMap: errorMap,
        description
    };
    const customMap = (iss, ctx)=>{
        const { message } = params;
        if (iss.code === "invalid_enum_value") return {
            message: message ?? ctx.defaultError
        };
        if (typeof ctx.data === "undefined") return {
            message: message ?? required_error ?? ctx.defaultError
        };
        if (iss.code !== "invalid_type") return {
            message: ctx.defaultError
        };
        return {
            message: message ?? invalid_type_error ?? ctx.defaultError
        };
    };
    return {
        errorMap: customMap,
        description
    };
}
class ZodType {
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return (0, _utilJs.getParsedType)(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: (0, _utilJs.getParsedType)(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
        };
    }
    _processInputParams(input) {
        return {
            status: new (0, _parseUtilJs.ParseStatus)(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: (0, _utilJs.getParsedType)(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent
            }
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if ((0, _parseUtilJs.isAsync)(result)) throw new Error("Synchronous parse encountered promise.");
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        const ctx = {
            common: {
                issues: [],
                async: params?.async ?? false,
                contextualErrorMap: params?.errorMap
            },
            path: params?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, _utilJs.getParsedType)(data)
        };
        const result = this._parseSync({
            data,
            path: ctx.path,
            parent: ctx
        });
        return handleResult(ctx, result);
    }
    "~validate"(data) {
        const ctx = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, _utilJs.getParsedType)(data)
        };
        if (!this["~standard"].async) try {
            const result = this._parseSync({
                data,
                path: [],
                parent: ctx
            });
            return (0, _parseUtilJs.isValid)(result) ? {
                value: result.value
            } : {
                issues: ctx.common.issues
            };
        } catch (err) {
            if (err?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = true;
            ctx.common = {
                issues: [],
                async: true
            };
        }
        return this._parseAsync({
            data,
            path: [],
            parent: ctx
        }).then((result)=>(0, _parseUtilJs.isValid)(result) ? {
                value: result.value
            } : {
                issues: ctx.common.issues
            });
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params?.errorMap,
                async: true
            },
            path: params?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, _utilJs.getParsedType)(data)
        };
        const maybeAsyncResult = this._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
        const result = await ((0, _parseUtilJs.isAsync)(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val)=>{
            if (typeof message === "string" || typeof message === "undefined") return {
                message
            };
            else if (typeof message === "function") return message(val);
            else return message;
        };
        return this._refinement((val, ctx)=>{
            const result = check(val);
            const setError = ()=>ctx.addIssue({
                    code: (0, _zodErrorJs.ZodIssueCode).custom,
                    ...getIssueProperties(val)
                });
            if (typeof Promise !== "undefined" && result instanceof Promise) return result.then((data)=>{
                if (!data) {
                    setError();
                    return false;
                } else return true;
            });
            if (!result) {
                setError();
                return false;
            } else return true;
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx)=>{
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
                return false;
            } else return true;
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "refinement",
                refinement
            }
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    constructor(def){
        /** Alias of safeParseAsync */ this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (data)=>this["~validate"](data)
        };
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([
            this,
            option
        ], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "transform",
                transform
            }
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def)
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
// faster, simpler, safer
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
// const ipv6Regex =
// /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// https://base64.guru/standards/base64url
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
    let secondsRegexSource = `[0-5]\\d`;
    if (args.precision) secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
    else if (args.precision == null) secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
    const secondsQuantifier = args.precision ? "+" : "?"; // require seconds if precision is nonzero
    return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) return true;
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) return true;
    return false;
}
function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt)) return false;
    try {
        const [header] = jwt.split(".");
        if (!header) return false;
        // Convert base64url to base64
        const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null) return false;
        if ("typ" in decoded && decoded?.typ !== "JWT") return false;
        if (!decoded.alg) return false;
        if (alg && decoded.alg !== alg) return false;
        return true;
    } catch  {
        return false;
    }
}
function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) return true;
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) return true;
    return false;
}
class ZodString extends ZodType {
    _parse(input) {
        if (this._def.coerce) input.data = String(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).string) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).string,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const status = new (0, _parseUtilJs.ParseStatus)();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: true,
                        message: check.message
                    });
                    else if (tooSmall) (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: true,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "email",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "emoji") {
                if (!emojiRegex) emojiRegex = new RegExp(_emojiRegex, "u");
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "emoji",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "uuid",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "nanoid") {
                if (!nanoidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "nanoid",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "cuid",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "cuid2",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "ulid",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "url") try {
                new URL(input.data);
            } catch  {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    validation: "url",
                    code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                    message: check.message
                });
                status.dirty();
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "regex",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "trim") input.data = input.data.trim();
            else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        validation: {
                            includes: check.value,
                            position: check.position
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "toLowerCase") input.data = input.data.toLowerCase();
            else if (check.kind === "toUpperCase") input.data = input.data.toUpperCase();
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        validation: {
                            startsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        validation: {
                            endsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        validation: "datetime",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "date") {
                const regex = dateRegex;
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        validation: "date",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "time") {
                const regex = timeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        validation: "time",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "duration") {
                if (!durationRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "duration",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "ip",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "jwt") {
                if (!isValidJWT(input.data, check.alg)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "jwt",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cidr") {
                if (!isValidCidr(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "cidr",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "base64") {
                if (!base64Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "base64",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "base64url") {
                if (!base64urlRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        validation: "base64url",
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else (0, _utilJs.util).assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _regex(regex, validation, message) {
        return this.refinement((data)=>regex.test(data), {
            validation,
            code: (0, _zodErrorJs.ZodIssueCode).invalid_string,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    email(message) {
        return this._addCheck({
            kind: "email",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    url(message) {
        return this._addCheck({
            kind: "url",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    emoji(message) {
        return this._addCheck({
            kind: "emoji",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    uuid(message) {
        return this._addCheck({
            kind: "uuid",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    nanoid(message) {
        return this._addCheck({
            kind: "nanoid",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    cuid(message) {
        return this._addCheck({
            kind: "cuid",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    cuid2(message) {
        return this._addCheck({
            kind: "cuid2",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    ulid(message) {
        return this._addCheck({
            kind: "ulid",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    base64(message) {
        return this._addCheck({
            kind: "base64",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    base64url(message) {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return this._addCheck({
            kind: "base64url",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    jwt(options) {
        return this._addCheck({
            kind: "jwt",
            ...(0, _errorUtilJs.errorUtil).errToObj(options)
        });
    }
    ip(options) {
        return this._addCheck({
            kind: "ip",
            ...(0, _errorUtilJs.errorUtil).errToObj(options)
        });
    }
    cidr(options) {
        return this._addCheck({
            kind: "cidr",
            ...(0, _errorUtilJs.errorUtil).errToObj(options)
        });
    }
    datetime(options) {
        if (typeof options === "string") return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
        });
        return this._addCheck({
            kind: "datetime",
            precision: typeof options?.precision === "undefined" ? null : options?.precision,
            offset: options?.offset ?? false,
            local: options?.local ?? false,
            ...(0, _errorUtilJs.errorUtil).errToObj(options?.message)
        });
    }
    date(message) {
        return this._addCheck({
            kind: "date",
            message
        });
    }
    time(options) {
        if (typeof options === "string") return this._addCheck({
            kind: "time",
            precision: null,
            message: options
        });
        return this._addCheck({
            kind: "time",
            precision: typeof options?.precision === "undefined" ? null : options?.precision,
            ...(0, _errorUtilJs.errorUtil).errToObj(options?.message)
        });
    }
    duration(message) {
        return this._addCheck({
            kind: "duration",
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options?.position,
            ...(0, _errorUtilJs.errorUtil).errToObj(options?.message)
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...(0, _errorUtilJs.errorUtil).errToObj(message)
        });
    }
    /**
     * Equivalent to `.min(1)`
     */ nonempty(message) {
        return this.min(1, (0, _errorUtilJs.errorUtil).errToObj(message));
    }
    trim() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "trim"
                }
            ]
        });
    }
    toLowerCase() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toLowerCase"
                }
            ]
        });
    }
    toUpperCase() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toUpperCase"
                }
            ]
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch)=>ch.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((ch)=>ch.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((ch)=>ch.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((ch)=>ch.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((ch)=>ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch)=>ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch)=>ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((ch)=>ch.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch)=>ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch)=>ch.kind === "ip");
    }
    get isCIDR() {
        return !!this._def.checks.find((ch)=>ch.kind === "cidr");
    }
    get isBase64() {
        return !!this._def.checks.find((ch)=>ch.kind === "base64");
    }
    get isBase64url() {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return !!this._def.checks.find((ch)=>ch.kind === "base64url");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params)=>{
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
}
class ZodNumber extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) input.data = Number(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).number) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).number,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        let ctx = undefined;
        const status = new (0, _parseUtilJs.ParseStatus)();
        for (const check of this._def.checks){
            if (check.kind === "int") {
                if (!(0, _utilJs.util).isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).not_finite,
                        message: check.message
                    });
                    status.dirty();
                }
            } else (0, _utilJs.util).assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, (0, _errorUtilJs.errorUtil).toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, (0, _errorUtilJs.errorUtil).toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, (0, _errorUtilJs.errorUtil).toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, (0, _errorUtilJs.errorUtil).toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: (0, _errorUtilJs.errorUtil).toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch)=>ch.kind === "int" || ch.kind === "multipleOf" && (0, _utilJs.util).isInteger(ch.value));
    }
    get isFinite() {
        let max = null;
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") return true;
            else if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            } else if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params)=>{
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
    });
};
class ZodBigInt extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) try {
            input.data = BigInt(input.data);
        } catch  {
            return this._getInvalidInput(input);
        }
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).bigint) return this._getInvalidInput(input);
        let ctx = undefined;
        const status = new (0, _parseUtilJs.ParseStatus)();
        for (const check of this._def.checks){
            if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else (0, _utilJs.util).assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, _parseUtilJs.addIssueToContext)(ctx, {
            code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
            expected: (0, _utilJs.ZodParsedType).bigint,
            received: ctx.parsedType
        });
        return 0, _parseUtilJs.INVALID;
    }
    gte(value, message) {
        return this.setLimit("min", value, true, (0, _errorUtilJs.errorUtil).toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, (0, _errorUtilJs.errorUtil).toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, (0, _errorUtilJs.errorUtil).toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, (0, _errorUtilJs.errorUtil).toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: (0, _errorUtilJs.errorUtil).toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params)=>{
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) input.data = Boolean(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).boolean) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).boolean,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodBoolean.create = (params)=>{
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) input.data = new Date(input.data);
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).date) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).date,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (Number.isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_date
            });
            return 0, _parseUtilJs.INVALID;
        }
        const status = new (0, _parseUtilJs.ParseStatus)();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else (0, _utilJs.util).assertNever(check);
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime())
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: (0, _errorUtilJs.errorUtil).toString(message)
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params)=>{
    return new ZodDate({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).symbol) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).symbol,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodSymbol.create = (params)=>{
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).undefined,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodUndefined.create = (params)=>{
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).null) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).null,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodNull.create = (params)=>{
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
    });
};
class ZodAny extends ZodType {
    constructor(){
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodAny.create = (params)=>{
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
    });
};
class ZodUnknown extends ZodType {
    constructor(){
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodUnknown.create = (params)=>{
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, _parseUtilJs.addIssueToContext)(ctx, {
            code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
            expected: (0, _utilJs.ZodParsedType).never,
            received: ctx.parsedType
        });
        return 0, _parseUtilJs.INVALID;
    }
}
ZodNever.create = (params)=>{
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).void,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
}
ZodVoid.create = (params)=>{
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).array) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).array,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    code: tooBig ? (0, _zodErrorJs.ZodIssueCode).too_big : (0, _zodErrorJs.ZodIssueCode).too_small,
                    minimum: tooSmall ? def.exactLength.value : undefined,
                    maximum: tooBig ? def.exactLength.value : undefined,
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    code: (0, _zodErrorJs.ZodIssueCode).too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    code: (0, _zodErrorJs.ZodIssueCode).too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message
                });
                status.dirty();
            }
        }
        if (ctx.common.async) return Promise.all([
            ...ctx.data
        ].map((item, i)=>{
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        })).then((result)=>{
            return (0, _parseUtilJs.ParseStatus).mergeArray(status, result);
        });
        const result = [
            ...ctx.data
        ].map((item, i)=>{
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return (0, _parseUtilJs.ParseStatus).mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: {
                value: minLength,
                message: (0, _errorUtilJs.errorUtil).toString(message)
            }
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: {
                value: maxLength,
                message: (0, _errorUtilJs.errorUtil).toString(message)
            }
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: {
                value: len,
                message: (0, _errorUtilJs.errorUtil).toString(message)
            }
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params)=>{
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for(const key in schema.shape){
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: ()=>newShape
        });
    } else if (schema instanceof ZodArray) return new ZodArray({
        ...schema._def,
        type: deepPartialify(schema.element)
    });
    else if (schema instanceof ZodOptional) return ZodOptional.create(deepPartialify(schema.unwrap()));
    else if (schema instanceof ZodNullable) return ZodNullable.create(deepPartialify(schema.unwrap()));
    else if (schema instanceof ZodTuple) return ZodTuple.create(schema.items.map((item)=>deepPartialify(item)));
    else return schema;
}
class ZodObject extends ZodType {
    constructor(){
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */ this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */ this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const shape = this._def.shape();
        const keys = (0, _utilJs.util).objectKeys(shape);
        this._cached = {
            shape,
            keys
        };
        return this._cached;
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).object) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).object,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
            for(const key in ctx.data)if (!shapeKeys.includes(key)) extraKeys.push(key);
        }
        const pairs = [];
        for (const key of shapeKeys){
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") for (const key of extraKeys)pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: {
                    status: "valid",
                    value: ctx.data[key]
                }
            });
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    (0, _parseUtilJs.addIssueToContext)(ctx, {
                        code: (0, _zodErrorJs.ZodIssueCode).unrecognized_keys,
                        keys: extraKeys
                    });
                    status.dirty();
                }
            } else if (unknownKeys === "strip") ;
            else throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        } else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys){
                const value = ctx.data[key];
                pairs.push({
                    key: {
                        status: "valid",
                        value: key
                    },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data
                });
            }
        }
        if (ctx.common.async) return Promise.resolve().then(async ()=>{
            const syncPairs = [];
            for (const pair of pairs){
                const key = await pair.key;
                const value = await pair.value;
                syncPairs.push({
                    key,
                    value,
                    alwaysSet: pair.alwaysSet
                });
            }
            return syncPairs;
        }).then((syncPairs)=>{
            return (0, _parseUtilJs.ParseStatus).mergeObjectSync(status, syncPairs);
        });
        else return (0, _parseUtilJs.ParseStatus).mergeObjectSync(status, pairs);
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        (0, _errorUtilJs.errorUtil).errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...message !== undefined ? {
                errorMap: (issue, ctx)=>{
                    const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
                    if (issue.code === "unrecognized_keys") return {
                        message: (0, _errorUtilJs.errorUtil).errToObj(message).message ?? defaultError
                    };
                    return {
                        message: defaultError
                    };
                }
            } : {}
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip"
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough"
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: ()=>({
                    ...this._def.shape(),
                    ...augmentation
                })
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */ merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: ()=>({
                    ...this._def.shape(),
                    ...merging._def.shape()
                }),
            typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({
            [key]: schema
        });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index
        });
    }
    pick(mask) {
        const shape = {};
        for (const key of (0, _utilJs.util).objectKeys(mask))if (mask[key] && this.shape[key]) shape[key] = this.shape[key];
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    omit(mask) {
        const shape = {};
        for (const key of (0, _utilJs.util).objectKeys(this.shape))if (!mask[key]) shape[key] = this.shape[key];
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    /**
     * @deprecated
     */ deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        for (const key of (0, _utilJs.util).objectKeys(this.shape)){
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) newShape[key] = fieldSchema;
            else newShape[key] = fieldSchema.optional();
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    required(mask) {
        const newShape = {};
        for (const key of (0, _utilJs.util).objectKeys(this.shape))if (mask && !mask[key]) newShape[key] = this.shape[key];
        else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while(newField instanceof ZodOptional)newField = newField._def.innerType;
            newShape[key] = newField;
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    keyof() {
        return createZodEnum((0, _utilJs.util).objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.strictCreate = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.lazycreate = (shape, params)=>{
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results){
                if (result.result.status === "valid") return result.result;
            }
            for (const result of results)if (result.result.status === "dirty") {
                // add issues from dirty option
                ctx.common.issues.push(...result.ctx.common.issues);
                return result.result;
            }
            // return invalid
            const unionErrors = results.map((result)=>new (0, _zodErrorJs.ZodError)(result.ctx.common.issues));
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_union,
                unionErrors
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (ctx.common.async) return Promise.all(options.map(async (option)=>{
            const childCtx = {
                ...ctx,
                common: {
                    ...ctx.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await option._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                }),
                ctx: childCtx
            };
        })).then(handleResults);
        else {
            let dirty = undefined;
            const issues = [];
            for (const option of options){
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: []
                    },
                    parent: null
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                });
                if (result.status === "valid") return result;
                else if (result.status === "dirty" && !dirty) dirty = {
                    result,
                    ctx: childCtx
                };
                if (childCtx.common.issues.length) issues.push(childCtx.common.issues);
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues)=>new (0, _zodErrorJs.ZodError)(issues));
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_union,
                unionErrors
            });
            return 0, _parseUtilJs.INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params)=>{
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type)=>{
    if (type instanceof ZodLazy) return getDiscriminator(type.schema);
    else if (type instanceof ZodEffects) return getDiscriminator(type.innerType());
    else if (type instanceof ZodLiteral) return [
        type.value
    ];
    else if (type instanceof ZodEnum) return type.options;
    else if (type instanceof ZodNativeEnum) // eslint-disable-next-line ban/ban
    return (0, _utilJs.util).objectValues(type.enum);
    else if (type instanceof ZodDefault) return getDiscriminator(type._def.innerType);
    else if (type instanceof ZodUndefined) return [
        undefined
    ];
    else if (type instanceof ZodNull) return [
        null
    ];
    else if (type instanceof ZodOptional) return [
        undefined,
        ...getDiscriminator(type.unwrap())
    ];
    else if (type instanceof ZodNullable) return [
        null,
        ...getDiscriminator(type.unwrap())
    ];
    else if (type instanceof ZodBranded) return getDiscriminator(type.unwrap());
    else if (type instanceof ZodReadonly) return getDiscriminator(type.unwrap());
    else if (type instanceof ZodCatch) return getDiscriminator(type._def.innerType);
    else return [];
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).object) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).object,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [
                    discriminator
                ]
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (ctx.common.async) return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
        else return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */ static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options){
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            for (const value of discriminatorValues){
                if (optionsMap.has(value)) throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params)
        });
    }
}
function mergeValues(a, b) {
    const aType = (0, _utilJs.getParsedType)(a);
    const bType = (0, _utilJs.getParsedType)(b);
    if (a === b) return {
        valid: true,
        data: a
    };
    else if (aType === (0, _utilJs.ZodParsedType).object && bType === (0, _utilJs.ZodParsedType).object) {
        const bKeys = (0, _utilJs.util).objectKeys(b);
        const sharedKeys = (0, _utilJs.util).objectKeys(a).filter((key)=>bKeys.indexOf(key) !== -1);
        const newObj = {
            ...a,
            ...b
        };
        for (const key of sharedKeys){
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) return {
                valid: false
            };
            newObj[key] = sharedValue.data;
        }
        return {
            valid: true,
            data: newObj
        };
    } else if (aType === (0, _utilJs.ZodParsedType).array && bType === (0, _utilJs.ZodParsedType).array) {
        if (a.length !== b.length) return {
            valid: false
        };
        const newArray = [];
        for(let index = 0; index < a.length; index++){
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) return {
                valid: false
            };
            newArray.push(sharedValue.data);
        }
        return {
            valid: true,
            data: newArray
        };
    } else if (aType === (0, _utilJs.ZodParsedType).date && bType === (0, _utilJs.ZodParsedType).date && +a === +b) return {
        valid: true,
        data: a
    };
    else return {
        valid: false
    };
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight)=>{
            if ((0, _parseUtilJs.isAborted)(parsedLeft) || (0, _parseUtilJs.isAborted)(parsedRight)) return 0, _parseUtilJs.INVALID;
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    code: (0, _zodErrorJs.ZodIssueCode).invalid_intersection_types
                });
                return 0, _parseUtilJs.INVALID;
            }
            if ((0, _parseUtilJs.isDirty)(parsedLeft) || (0, _parseUtilJs.isDirty)(parsedRight)) status.dirty();
            return {
                status: status.value,
                value: merged.data
            };
        };
        if (ctx.common.async) return Promise.all([
            this._def.left._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }),
            this._def.right._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            })
        ]).then(([left, right])=>handleParsed(left, right));
        else return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        }));
    }
}
ZodIntersection.create = (left, right, params)=>{
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).array) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).array,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            return 0, _parseUtilJs.INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            status.dirty();
        }
        const items = [
            ...ctx.data
        ].map((item, itemIndex)=>{
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema) return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x)=>!!x); // filter nulls
        if (ctx.common.async) return Promise.all(items).then((results)=>{
            return (0, _parseUtilJs.ParseStatus).mergeArray(status, results);
        });
        else return (0, _parseUtilJs.ParseStatus).mergeArray(status, items);
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest
        });
    }
}
ZodTuple.create = (schemas, params)=>{
    if (!Array.isArray(schemas)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).object) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).object,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for(const key in ctx.data)pairs.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
        });
        if (ctx.common.async) return (0, _parseUtilJs.ParseStatus).mergeObjectAsync(status, pairs);
        else return (0, _parseUtilJs.ParseStatus).mergeObjectSync(status, pairs);
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) return new ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(third)
        });
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second)
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).map) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).map,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [
            ...ctx.data.entries()
        ].map(([key, value], index)=>{
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [
                    index,
                    "key"
                ])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [
                    index,
                    "value"
                ]))
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async ()=>{
                for (const pair of pairs){
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") return 0, _parseUtilJs.INVALID;
                    if (key.status === "dirty" || value.status === "dirty") status.dirty();
                    finalMap.set(key.value, value.value);
                }
                return {
                    status: status.value,
                    value: finalMap
                };
            });
        } else {
            const finalMap = new Map();
            for (const pair of pairs){
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (key.status === "dirty" || value.status === "dirty") status.dirty();
                finalMap.set(key.value, value.value);
            }
            return {
                status: status.value,
                value: finalMap
            };
        }
    }
}
ZodMap.create = (keyType, valueType, params)=>{
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).set) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).set,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    code: (0, _zodErrorJs.ZodIssueCode).too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                (0, _parseUtilJs.addIssueToContext)(ctx, {
                    code: (0, _zodErrorJs.ZodIssueCode).too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements){
                if (element.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (element.status === "dirty") status.dirty();
                parsedSet.add(element.value);
            }
            return {
                status: status.value,
                value: parsedSet
            };
        }
        const elements = [
            ...ctx.data.values()
        ].map((item, i)=>valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) return Promise.all(elements).then((elements)=>finalizeSet(elements));
        else return finalizeSet(elements);
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: {
                value: minSize,
                message: (0, _errorUtilJs.errorUtil).toString(message)
            }
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: {
                value: maxSize,
                message: (0, _errorUtilJs.errorUtil).toString(message)
            }
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params)=>{
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
    });
};
class ZodFunction extends ZodType {
    constructor(){
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).function) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).function,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        function makeArgsIssue(args, error) {
            return (0, _parseUtilJs.makeIssue)({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    (0, _errorsJs.getErrorMap)(),
                    (0, _errorsJs.defaultErrorMap)
                ].filter((x)=>!!x),
                issueData: {
                    code: (0, _zodErrorJs.ZodIssueCode).invalid_arguments,
                    argumentsError: error
                }
            });
        }
        function makeReturnsIssue(returns, error) {
            return (0, _parseUtilJs.makeIssue)({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    (0, _errorsJs.getErrorMap)(),
                    (0, _errorsJs.defaultErrorMap)
                ].filter((x)=>!!x),
                issueData: {
                    code: (0, _zodErrorJs.ZodIssueCode).invalid_return_type,
                    returnTypeError: error
                }
            });
        }
        const params = {
            errorMap: ctx.common.contextualErrorMap
        };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return (0, _parseUtilJs.OK)(async function(...args) {
                const error = new (0, _zodErrorJs.ZodError)([]);
                const parsedArgs = await me._def.args.parseAsync(args, params).catch((e)=>{
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e)=>{
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        } else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return (0, _parseUtilJs.OK)(function(...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) throw new (0, _zodErrorJs.ZodError)([
                    makeArgsIssue(args, parsedArgs.error)
                ]);
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) throw new (0, _zodErrorJs.ZodError)([
                    makeReturnsIssue(result, parsedReturns.error)
                ]);
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params)
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
}
ZodLazy.create = (getter, params)=>{
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                received: ctx.data,
                code: (0, _zodErrorJs.ZodIssueCode).invalid_literal,
                expected: this._def.value
            });
            return 0, _parseUtilJs.INVALID;
        }
        return {
            status: "valid",
            value: input.data
        };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params)=>{
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params)
    });
}
class ZodEnum extends ZodType {
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                expected: (0, _utilJs.util).joinValues(expectedValues),
                received: ctx.parsedType,
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (!this._cache) this._cache = new Set(this._def.values);
        if (!this._cache.has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                received: ctx.data,
                code: (0, _zodErrorJs.ZodIssueCode).invalid_enum_value,
                options: expectedValues
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    extract(values, newDef = this._def) {
        return ZodEnum.create(values, {
            ...this._def,
            ...newDef
        });
    }
    exclude(values, newDef = this._def) {
        return ZodEnum.create(this.options.filter((opt)=>!values.includes(opt)), {
            ...this._def,
            ...newDef
        });
    }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    _parse(input) {
        const nativeEnumValues = (0, _utilJs.util).getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).string && ctx.parsedType !== (0, _utilJs.ZodParsedType).number) {
            const expectedValues = (0, _utilJs.util).objectValues(nativeEnumValues);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                expected: (0, _utilJs.util).joinValues(expectedValues),
                received: ctx.parsedType,
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type
            });
            return 0, _parseUtilJs.INVALID;
        }
        if (!this._cache) this._cache = new Set((0, _utilJs.util).getValidEnumValues(this._def.values));
        if (!this._cache.has(input.data)) {
            const expectedValues = (0, _utilJs.util).objectValues(nativeEnumValues);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                received: ctx.data,
                code: (0, _zodErrorJs.ZodIssueCode).invalid_enum_value,
                options: expectedValues
            });
            return 0, _parseUtilJs.INVALID;
        }
        return (0, _parseUtilJs.OK)(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
ZodNativeEnum.create = (values, params)=>{
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== (0, _utilJs.ZodParsedType).promise && ctx.common.async === false) {
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).promise,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        const promisified = ctx.parsedType === (0, _utilJs.ZodParsedType).promise ? ctx.data : Promise.resolve(ctx.data);
        return (0, _parseUtilJs.OK)(promisified.then((data)=>{
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap
            });
        }));
    }
}
ZodPromise.create = (schema, params)=>{
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg)=>{
                (0, _parseUtilJs.addIssueToContext)(ctx, arg);
                if (arg.fatal) status.abort();
                else status.dirty();
            },
            get path () {
                return ctx.path;
            }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) return Promise.resolve(processed).then(async (processed)=>{
                if (status.value === "aborted") return 0, _parseUtilJs.INVALID;
                const result = await this._def.schema._parseAsync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx
                });
                if (result.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (result.status === "dirty") return (0, _parseUtilJs.DIRTY)(result.value);
                if (status.value === "dirty") return (0, _parseUtilJs.DIRTY)(result.value);
                return result;
            });
            else {
                if (status.value === "aborted") return 0, _parseUtilJs.INVALID;
                const result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx
                });
                if (result.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (result.status === "dirty") return (0, _parseUtilJs.DIRTY)(result.value);
                if (status.value === "dirty") return (0, _parseUtilJs.DIRTY)(result.value);
                return result;
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc)=>{
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) return Promise.resolve(result);
                if (result instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inner.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (inner.status === "dirty") status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return {
                    status: status.value,
                    value: inner.value
                };
            } else return this._def.schema._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }).then((inner)=>{
                if (inner.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (inner.status === "dirty") status.dirty();
                return executeRefinement(inner.value).then(()=>{
                    return {
                        status: status.value,
                        value: inner.value
                    };
                });
            });
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (!(0, _parseUtilJs.isValid)(base)) return 0, _parseUtilJs.INVALID;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                return {
                    status: status.value,
                    value: result
                };
            } else return this._def.schema._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }).then((base)=>{
                if (!(0, _parseUtilJs.isValid)(base)) return 0, _parseUtilJs.INVALID;
                return Promise.resolve(effect.transform(base.value, checkCtx)).then((result)=>({
                        status: status.value,
                        value: result
                    }));
            });
        }
        (0, _utilJs.util).assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params)=>{
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params)=>{
    return new ZodEffects({
        schema,
        effect: {
            type: "preprocess",
            transform: preprocess
        },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
    });
};
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === (0, _utilJs.ZodParsedType).undefined) return (0, _parseUtilJs.OK)(undefined);
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params)=>{
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === (0, _utilJs.ZodParsedType).null) return (0, _parseUtilJs.OK)(null);
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params)=>{
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === (0, _utilJs.ZodParsedType).undefined) data = this._def.defaultValue();
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params)=>{
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : ()=>params.default,
        ...processCreateParams(params)
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: []
            }
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx
            }
        });
        if ((0, _parseUtilJs.isAsync)(result)) return result.then((result)=>{
            return {
                status: "valid",
                value: result.status === "valid" ? result.value : this._def.catchValue({
                    get error () {
                        return new (0, _zodErrorJs.ZodError)(newCtx.common.issues);
                    },
                    input: newCtx.data
                })
            };
        });
        else return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
                get error () {
                    return new (0, _zodErrorJs.ZodError)(newCtx.common.issues);
                },
                input: newCtx.data
            })
        };
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params)=>{
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : ()=>params.catch,
        ...processCreateParams(params)
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== (0, _utilJs.ZodParsedType).nan) {
            const ctx = this._getOrReturnCtx(input);
            (0, _parseUtilJs.addIssueToContext)(ctx, {
                code: (0, _zodErrorJs.ZodIssueCode).invalid_type,
                expected: (0, _utilJs.ZodParsedType).nan,
                received: ctx.parsedType
            });
            return 0, _parseUtilJs.INVALID;
        }
        return {
            status: "valid",
            value: input.data
        };
    }
}
ZodNaN.create = (params)=>{
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async ()=>{
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inResult.status === "aborted") return 0, _parseUtilJs.INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return (0, _parseUtilJs.DIRTY)(inResult.value);
                } else return this._def.out._parseAsync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx
                });
            };
            return handleAsync();
        } else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
            if (inResult.status === "aborted") return 0, _parseUtilJs.INVALID;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value
                };
            } else return this._def.out._parseSync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
            });
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data)=>{
            if ((0, _parseUtilJs.isValid)(data)) data.value = Object.freeze(data.value);
            return data;
        };
        return (0, _parseUtilJs.isAsync)(result) ? result.then((data)=>freeze(data)) : freeze(result);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodReadonly.create = (type, params)=>{
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
    });
};
////////////////////////////////////////
////////////////////////////////////////
//////////                    //////////
//////////      z.custom      //////////
//////////                    //////////
////////////////////////////////////////
////////////////////////////////////////
function cleanParams(params, data) {
    const p = typeof params === "function" ? params(data) : typeof params === "string" ? {
        message: params
    } : params;
    const p2 = typeof p === "string" ? {
        message: p
    } : p;
    return p2;
}
function custom(check, _params = {}, /**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */ fatal) {
    if (check) return ZodAny.create().superRefine((data, ctx)=>{
        const r = check(data);
        if (r instanceof Promise) return r.then((r)=>{
            if (!r) {
                const params = cleanParams(_params, data);
                const _fatal = params.fatal ?? fatal ?? true;
                ctx.addIssue({
                    code: "custom",
                    ...params,
                    fatal: _fatal
                });
            }
        });
        if (!r) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({
                code: "custom",
                ...params,
                fatal: _fatal
            });
        }
        return;
    });
    return ZodAny.create();
}
const late = {
    object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
// requires TS 4.4+
class Class {
    constructor(..._){}
}
const instanceOfType = (// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`
})=>custom((data)=>data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = ()=>stringType().optional();
const onumber = ()=>numberType().optional();
const oboolean = ()=>booleanType().optional();
const coerce = {
    string: (arg)=>ZodString.create({
            ...arg,
            coerce: true
        }),
    number: (arg)=>ZodNumber.create({
            ...arg,
            coerce: true
        }),
    boolean: (arg)=>ZodBoolean.create({
            ...arg,
            coerce: true
        }),
    bigint: (arg)=>ZodBigInt.create({
            ...arg,
            coerce: true
        }),
    date: (arg)=>ZodDate.create({
            ...arg,
            coerce: true
        })
};
const NEVER = (0, _parseUtilJs.INVALID);

},{"./ZodError.js":"2dlVV","./errors.js":"dS8a9","./helpers/errorUtil.js":"5hmRS","./helpers/parseUtil.js":"h18ab","./helpers/util.js":"bwPlh","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"5hmRS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "errorUtil", ()=>errorUtil);
var errorUtil;
(function(errorUtil) {
    errorUtil.errToObj = (message)=>typeof message === "string" ? {
            message
        } : message || {};
    // biome-ignore lint:
    errorUtil.toString = (message)=>typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}]},["eI4Qk","c8UfV"], "c8UfV", "parcelRequireb89c")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksSUFBRSxXQUFXLFNBQVMsUUFBTSxFQUFFO0FBQUMsSUFBSSxJQUFFLElBQUksV0FBVyxTQUFTLE9BQUssQ0FBQztBQUFFLElBQUksSUFBRSxJQUFJLElBQUksSUFBRyxJQUFFLENBQUEsSUFBRyxFQUFFLElBQUksSUFBRyxJQUFFLEVBQUUsT0FBTyxDQUFBLElBQUcsRUFBRSxXQUFXLFNBQU8sRUFBRSxTQUFTLE1BQU0sSUFBSSxDQUFBLElBQUcsRUFBRSxNQUFNLE1BQU0sT0FBTyxDQUFDLEdBQUUsQ0FBQyxHQUFFLEVBQUUsR0FBSSxDQUFBLENBQUMsQ0FBQyxFQUFFLEdBQUMsR0FBRSxDQUFBLEdBQUcsQ0FBQztBQUFHLElBQUksSUFBRSxFQUFFLGNBQWEsSUFBRSxJQUFJLEVBQUUsZ0JBQWMsSUFBSSxZQUFVLFFBQU8sSUFBRTtBQUFJLElBQUksSUFBRSxDQUFDLElBQUUsRUFBRSxFQUFDLEdBQUcsSUFBSSxRQUFRLElBQUksRUFBRSxPQUFPLElBQUcsUUFBTztBQUFHLElBQUksSUFBRSxDQUFDLEdBQUcsSUFBSSxRQUFRLE1BQU0scUJBQWtCLE9BQU8sSUFBRyxRQUFPLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSx3QkFBb0IsSUFBRyxJQUFFLEdBQUUsSUFBRSxDQUFDLEdBQUcsSUFBSSxPQUFLLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUk7QUFBRyxJQUFJLElBQUU7SUFBQyxtQkFBa0I7SUFBSyxnQkFBZTtJQUFNLFdBQVU7SUFBTSxZQUFXO1FBQUM7S0FBaUI7SUFBQyxRQUFPO0lBQVksUUFBTztJQUFLLGlCQUFnQjtJQUF5QyxZQUFXO0lBQW1CLFdBQVU7SUFBbUIsV0FBVTtJQUFRLFVBQVM7SUFBTSxjQUFhO0FBQUk7QUFBRSxPQUFPLE9BQU8sZ0JBQWMsRUFBRTtBQUFTLFdBQVcsVUFBUTtJQUFDLE1BQUssRUFBRTtJQUFDLEtBQUk7UUFBQyxTQUFRLEVBQUU7SUFBTztBQUFDO0FBQUUsSUFBSSxJQUFFLE9BQU8sT0FBTztBQUFPLFNBQVMsRUFBRSxDQUFDO0lBQUUsRUFBRSxLQUFLLElBQUksRUFBQyxJQUFHLElBQUksQ0FBQyxNQUFJO1FBQUMsTUFBSyxPQUFPLE9BQU8sT0FBTyxDQUFDLEVBQUU7UUFBQyxrQkFBaUIsRUFBRTtRQUFDLG1CQUFrQixFQUFFO1FBQUMsUUFBTyxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsaUJBQWlCLEtBQUssS0FBRyxZQUFXO1FBQUU7UUFBRSxTQUFRLFNBQVMsQ0FBQztZQUFFLElBQUksQ0FBQyxrQkFBa0IsS0FBSztRQUFFO0lBQUMsR0FBRSxPQUFPLE9BQU8sT0FBTyxDQUFDLEVBQUUsR0FBQyxLQUFLO0FBQUM7QUFBQyxPQUFPLE9BQU8sU0FBTztBQUFFLE9BQU8sT0FBTyxVQUFRLENBQUM7QUFBRSxJQUFJLElBQUUsV0FBVyxXQUFTLFdBQVcsVUFBUTtBQUFLLFNBQVM7SUFBSSxPQUFNLENBQUMsRUFBRSxRQUFNLEVBQUUsU0FBTyxZQUFVLGNBQVksRUFBRTtBQUFJO0FBQUMsU0FBUztJQUFJLE9BQU8sRUFBRSxRQUFNLFNBQVM7QUFBSTtBQUFDLElBQUksSUFBRTtBQUEyQixTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFBRSxJQUFHLEVBQUMsU0FBUSxDQUFDLEVBQUMsR0FBQztJQUFFLE9BQU8sSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUUsSUFBRSxHQUFHO0lBQUUsSUFBSSxJQUFFO0lBQUksT0FBTSxDQUFDLEVBQUUsRUFBRSxVQUFRLFNBQVMsYUFBVyxZQUFVLENBQUMsOEJBQThCLEtBQUssS0FBRyxRQUFNLEtBQUssR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUE7QUFBQyxTQUFTLEVBQUUsQ0FBQztJQUFFLE9BQU8sRUFBRSxXQUFTLFlBQVUsRUFBRSw4QkFBNEIsRUFBRTtBQUFRO0FBQUMsU0FBUyxFQUFFLENBQUM7SUFBRSxJQUFHLE9BQU8sV0FBVyxZQUFVLEtBQUk7SUFBTyxJQUFJLElBQUUsSUFBSSxVQUFVO0lBQUssT0FBTyxFQUFFLGlCQUFpQixXQUFVLGVBQWUsQ0FBQztRQUFFLElBQUksSUFBRSxLQUFLLE1BQU0sRUFBRTtRQUFNLElBQUcsRUFBRSxTQUFPLFlBQVUsTUFBTSxFQUFFLEVBQUUsU0FBUSxFQUFFLFNBQU8sU0FBUSxLQUFJLElBQUksS0FBSyxFQUFFLFlBQVksS0FBSztZQUFDLElBQUksSUFBRSxFQUFFLGFBQVcsRUFBRTtZQUFNLEVBQUUsOEJBQTRCLEVBQUUsVUFBUSxDQUFDO0FBQ3QrRCxDQUFDLEdBQUMsSUFBRSxDQUFDOztBQUVMLENBQUMsR0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ2hCLENBQUM7UUFBRTtJQUFDLElBQUcsRUFBRSxpQkFBaUIsU0FBUSxJQUFHLEVBQUUsaUJBQWlCLFFBQU87UUFBSyxFQUFFLENBQUMscURBQXFELEVBQUUsRUFBRSxjQUFjLENBQUM7SUFBQyxJQUFHLEVBQUUsaUJBQWlCLFNBQVE7UUFBSyxFQUFFLENBQUMsb0VBQW9FLEVBQUUsRUFBRSxjQUFjLENBQUM7SUFBQyxJQUFHO0FBQUM7QUFBQyxJQUFJLElBQUU7QUFBcUIsU0FBUztJQUFJLElBQUksSUFBRSxXQUFXLFFBQVE7SUFBYSxJQUFHLE9BQU8sSUFBRSxLQUFJO0lBQU8sSUFBSSxJQUFFLFNBQVMsY0FBYywrQkFBK0IsU0FBUyxNQUFNLE1BQUssSUFBRSxJQUFFLENBQUMsQ0FBQyxHQUFHLFNBQU8sRUFBRSxDQUFDLFFBQVEsTUFBSyxNQUFJLEtBQUs7SUFBRSxPQUFPLE9BQU8sSUFBRSxNQUFJLEVBQUUsYUFBYSxLQUFHLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxFQUFDO1FBQUMsWUFBVyxDQUFBLElBQUc7SUFBQyxLQUFHLEtBQUs7QUFBQztBQUFDLElBQUksSUFBRTtBQUFJLFNBQVM7SUFBSSxPQUFPLFNBQVMsZUFBZTtBQUFFO0FBQUMsU0FBUztJQUFJLE9BQU0sQ0FBQztBQUFHO0FBQUMsU0FBUztJQUFJLElBQUksSUFBRSxTQUFTLGNBQWM7SUFBTyxFQUFFLEtBQUc7SUFBRSxJQUFJLElBQUUsQ0FBQzs7S0FFbHRCLEVBQUUsRUFBRTs7Ozs7OztLQU9KLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0tBZUosRUFBRSxFQUFFOzs7O0tBSUosRUFBRSxFQUFFOzs7O0tBSUosRUFBRSxFQUFFOzs7O0tBSUosRUFBRSxFQUFFOzs7Ozs7Ozs7Ozs7RUFZUCxDQUFDO0lBQUMsT0FBTyxFQUFFLFlBQVUsSUFBRSxFQUFFLFdBQVcsS0FBRyxHQUFFLEVBQUUsTUFBTSxnQkFBYyxRQUFPLEVBQUUsTUFBTSxXQUFTLFNBQVEsRUFBRSxNQUFNLFNBQU8sVUFBUyxFQUFFLE1BQU0sUUFBTSxVQUFTLEVBQUUsTUFBTSxhQUFXLGNBQWEsRUFBRSxNQUFNLFVBQVEsUUFBTyxFQUFFLE1BQU0saUJBQWUsVUFBUyxFQUFFLE1BQU0sYUFBVyxVQUFTLEVBQUUsTUFBTSxVQUFRLFVBQVMsRUFBRSxNQUFNLE1BQUksVUFBUyxFQUFFLE1BQU0sZUFBYSxTQUFRLEVBQUUsTUFBTSxTQUFPLGNBQWEsRUFBRSxNQUFNLFVBQVEsS0FBSSxFQUFFLE1BQU0sYUFBVyx5QkFBd0I7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDO0lBQUUsT0FBTyxJQUFJLFFBQVEsQ0FBQTtRQUFJLFNBQVMsa0JBQWlCLENBQUEsT0FBTSxDQUFBLFNBQVMsZ0JBQWdCLFlBQVksSUFBRyxHQUFFLEdBQUcsR0FBRSxJQUFHLFdBQVcsaUJBQWlCLG9CQUFtQjtZQUFLLE9BQUssU0FBUyxnQkFBZ0IsWUFBWSxJQUFHO1FBQUc7SUFBRTtBQUFFO0FBQUMsSUFBSSxJQUFFO0lBQUssSUFBSTtJQUFFLElBQUcsS0FBSTtRQUFDLElBQUksSUFBRTtRQUFJLElBQUUsRUFBRTtJQUFFO0lBQUMsT0FBTTtRQUFDLE1BQUssT0FBTSxFQUFDLGNBQWEsSUFBRSxDQUFDLENBQUMsRUFBQyxHQUFDLENBQUMsQ0FBQztZQUFJLE1BQU07WUFBRSxJQUFJLElBQUU7WUFBSSxFQUFFLE1BQU0sVUFBUSxLQUFJLEtBQUksQ0FBQSxFQUFFLFVBQVEsQ0FBQTtnQkFBSSxFQUFFLG1CQUFrQixXQUFXLFNBQVM7WUFBUSxHQUFFLEVBQUUsY0FBYyxRQUFRLFVBQVUsT0FBTyxXQUFVLEVBQUUsTUFBTSxTQUFPLFdBQVUsRUFBRSxNQUFNLGdCQUFjLEtBQUk7UUFBRTtRQUFFLE1BQUs7WUFBVSxNQUFNO1lBQUUsSUFBSSxJQUFFO1lBQUksRUFBRSxNQUFNLFVBQVE7UUFBRztJQUFDO0FBQUM7QUFBRSxJQUFJLElBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUMsR0FBRSxJQUFFLENBQUMsR0FBRSxJQUFFO0FBQUksZUFBZTtJQUFJLEVBQUUsK0JBQThCLElBQUUsV0FBVyxVQUFVLGFBQVcsRUFBRSxLQUFLO1FBQUMsY0FBYSxDQUFDO0lBQUM7QUFBRTtBQUFDLFNBQVM7SUFBSSxHQUFHLGNBQWEsSUFBRSxHQUFHLFFBQVEsUUFBUTtRQUFDLE1BQUs7SUFBQyxJQUFHLEVBQUUsYUFBYSxZQUFZO1FBQUs7SUFBRyxJQUFHLEVBQUUsVUFBVSxZQUFZLENBQUE7UUFBSSxFQUFFLHdCQUFzQixLQUFJLEVBQUUsNEJBQTJCLENBQUEsSUFBRSxDQUFDLENBQUE7SUFBRTtBQUFFO0FBQUMsU0FBUztJQUFJLElBQUcsR0FBRyxTQUFRLElBQUc7UUFBQyxLQUFJLFlBQVksR0FBRTtJQUFLLEVBQUMsT0FBSztRQUFDO0lBQU07QUFBQztBQUFDO0FBQUksRUFBRSxPQUFNO0lBQUksRUFBRSx1Q0FBc0MsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFlBQVUsRUFBRSxTQUFTLEtBQUssQ0FBQSxJQUFHLEVBQUUsT0FBTyxRQUFPLEVBQUUsUUFBTyxDQUFBLEVBQUUsUUFBTyxHQUFHLFVBQVEsRUFBRSxZQUFZO1FBQUMsdUJBQXNCLENBQUM7SUFBQyxLQUFHLFdBQVc7UUFBSztJQUFHLEdBQUUsS0FBSTtBQUFFOzs7QUNwRDdsRDtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU0sWUFBWTtBQUNsQixJQUFJLGlCQUEyQztBQUUvQyxNQUFNLDhCQUE4QjtJQUNsQyxNQUFNLE1BQWdCLEVBQUU7SUFFeEIsdUJBQXVCO0lBQ3ZCLE1BQU0sU0FBUyxPQUFPLFNBQVMsU0FBUyxNQUFNO0lBQzlDLElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLEtBQUssT0FBTyxNQUFNLENBQUMsRUFBRTtJQUUxQyx1QkFBdUI7SUFDdkIsTUFBTSxZQUFZLElBQUksZ0JBQWdCLE9BQU8sU0FBUyxRQUFRLElBQUk7SUFDbEUsSUFBSSxXQUFXLElBQUksS0FBSyxPQUFPO0lBRS9CLG9CQUFvQjtJQUNwQixNQUFNLFFBQVEsU0FBUyxpQkFBb0M7SUFDM0QsTUFBTSxRQUFRLENBQUE7UUFDWixNQUFNLFFBQVEsS0FBSyxLQUFLLE1BQU07UUFDOUIsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksS0FBSyxPQUFPLEtBQUssQ0FBQyxFQUFFO0lBQzFDO0lBRUEsb0JBQW9CO0lBQ3BCLE1BQU0sY0FBYyxTQUFTLEtBQUssVUFBVSxTQUFTO0lBQ3JELEtBQUssTUFBTSxTQUFTLFlBQ2xCLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEtBQUssT0FBTyxLQUFLLENBQUMsRUFBRTtJQUd4QyxJQUFJLElBQUksV0FBVyxHQUFHLE9BQU87SUFFN0Isc0NBQXNDO0lBQ3RDLE1BQU0sUUFBUSxLQUFLLE9BQU8sSUFBSSxPQUFPLENBQUEsS0FBTSxDQUFDLE9BQU8sTUFBTTtJQUN6RCxPQUFPLFFBQVEsSUFBSSxNQUFNLGFBQWE7QUFDeEM7QUFFQSxNQUFNLG9CQUFvQjtJQUN4QixNQUFNLE9BQU8sU0FBUyxLQUFLO0lBQzNCLE9BQU8sbUNBQW1DLEtBQUs7QUFDakQ7QUFFQSxNQUFNLGVBQWU7SUFDbkIsU0FBUyxlQUFlLFlBQVk7QUFDdEM7QUFFQSxNQUFNLHFCQUFxQjtJQUN6QixJQUFJLENBQUMsa0JBQWtCLFNBQVMsZUFBZSxZQUFZO0lBRTNELE1BQU0sU0FBUyxTQUFTLGNBQWM7SUFDdEMsT0FBTyxLQUFLO0lBQ1osT0FBTyxjQUFjO0lBQ3JCLE9BQU8sTUFBTSxXQUFXO0lBQ3hCLE9BQU8sTUFBTSxRQUFRO0lBQ3JCLE9BQU8sTUFBTSxTQUFTO0lBQ3RCLE9BQU8sTUFBTSxTQUFTO0lBQ3RCLE9BQU8sTUFBTSxVQUFVO0lBQ3ZCLE9BQU8sTUFBTSxlQUFlO0lBQzVCLE9BQU8sTUFBTSxTQUFTO0lBQ3RCLE9BQU8sTUFBTSxhQUFhO0lBQzFCLE9BQU8sTUFBTSxRQUFRO0lBQ3JCLE9BQU8sTUFBTSxhQUFhO0lBQzFCLE9BQU8sTUFBTSxTQUFTO0lBRXRCLE9BQU8sVUFBVTtRQUNmLE1BQU0sV0FBVyxNQUFNLENBQUEsR0FBQSxvQkFBVTtRQUNqQyxJQUFJLENBQUMsU0FBUyxPQUFPLFNBQVMsQ0FBQyxTQUFTLE9BQU8sU0FBUyxDQUFDLFNBQVMsT0FBTyxNQUFNO1lBQzdFLE9BQU8sTUFBTTtZQUNiO1FBQ0Y7UUFFQSxNQUFNLGlCQUFpQixPQUFPLE9BQU8seUJBQXlCLFdBQVc7UUFDekUsTUFBTSxrQkFBa0IsT0FBTyxPQUFPLDBCQUEwQixXQUFXO1FBQzNFLE1BQU0sU0FBUyxDQUFBLEdBQUEsNEJBQWUsRUFBRSxVQUFVO1lBQUU7WUFBZ0I7UUFBZ0I7UUFDNUUsSUFBSSxDQUFDLE9BQU8sU0FBUztZQUNuQixPQUFPLE1BQU07WUFDYjtRQUNGO1FBRUEsT0FBTyxjQUFjO1FBQ3JCLE9BQU8sYUFBYSxZQUFZO1FBRWhDLE1BQU0sV0FBVyxNQUFNLE9BQU8sUUFBUSxZQUFZO1lBQ2hELE1BQU0sQ0FBQSxHQUFBLHdCQUFZLEVBQUU7WUFDcEIsU0FBUztnQkFBRSxVQUFVLGdCQUFnQjtnQkFBVSxZQUFZLE9BQU87WUFBSztRQUN6RTtRQUVBLElBQUksVUFBVSxJQUFJO1lBQ2hCLE9BQU8sTUFBTSxDQUFDLG9CQUFvQixFQUFFLFNBQVMsU0FBUyxDQUFDO1lBQ3ZELGlCQUFpQjtZQUNqQjtRQUNGLE9BQU87WUFDTCxPQUFPLE1BQU0sVUFBVSxTQUFTO1lBQ2hDLE9BQU8sY0FBYztZQUNyQixPQUFPLGdCQUFnQjtRQUN6QjtJQUNGO0lBRUEsU0FBUyxLQUFLLFlBQVk7QUFDNUI7QUFFQSxNQUFNLGdCQUFnQjtJQUNwQixNQUFNLGVBQWU7SUFDckIsSUFBSSxDQUFDLHFCQUFxQjtJQUMxQixJQUFJLENBQUMsY0FBYztJQUVuQixJQUFJO1FBQ0YsTUFBTSxTQUFTLE1BQU0sQ0FBQSxHQUFBLDRCQUFrQjtRQUN2QyxJQUFJLFdBQVcsY0FBYztRQUU3QixNQUFNLFdBQVcsTUFBTSxDQUFBLEdBQUEsa0NBQXNCLEVBQUU7UUFDL0MsTUFBTSxDQUFBLEdBQUEsNkJBQW1CLEVBQUU7UUFFM0IsaUJBQWlCO1lBQUU7WUFBVSxlQUFlLElBQUksT0FBTztRQUFjO1FBQ3JFLE1BQU0sQ0FBQSxHQUFBLDZCQUFtQixFQUFFO1FBQzNCLE1BQU0sT0FBTyxRQUFRLFlBQVk7WUFBRSxNQUFNLENBQUEsR0FBQSx3QkFBWSxFQUFFO1lBQW9CLFNBQVM7UUFBZTtRQUVuRztJQUNGLEVBQUUsT0FBTyxPQUFPO1FBQ2QsaUJBQWlCO1FBQ2pCO1FBRUEsSUFBSSxpQkFBaUIsU0FBUyxNQUFNLFFBQVEsU0FBUyxrQ0FBa0M7WUFDckYsUUFBUSxLQUFLO1lBQ2I7UUFDRjtRQUVBLFFBQVEsTUFBTSxDQUFDLDhDQUE4QyxFQUFFLGFBQWEsQ0FBQyxDQUFDLEVBQUU7SUFDbEY7QUFDRjtBQUNBLE1BQU0scUJBQXFCO0lBQ3pCLE1BQU0sVUFBVSxRQUFRO0lBQ3hCLE1BQU0sYUFBYSxRQUFRO0lBRTNCLFFBQVEsWUFBWSxTQUFVLEdBQUcsSUFBSTtRQUNuQyxRQUFRLE1BQU0sSUFBSSxFQUFFO1FBQ3BCO0lBQ0Y7SUFFQSxRQUFRLGVBQWUsU0FBVSxHQUFHLElBQUk7UUFDdEMsV0FBVyxNQUFNLElBQUksRUFBRTtRQUN2QjtJQUNGO0FBQ0Y7QUFFQSxJQUFJLFFBQXVCO0FBQzNCLE1BQU0sb0JBQW9CO0lBQ3hCLElBQUksT0FBTyxPQUFPLGFBQWE7SUFDL0IsUUFBUSxPQUFPLFdBQVcsSUFBTSxLQUFLLGlCQUFpQjtBQUN4RDtBQUVBLE1BQU0sV0FBVyxJQUFJLGlCQUFpQjtBQUN0QyxTQUFTLFFBQVEsU0FBUyxpQkFBaUI7SUFBRSxTQUFTO0lBQU0sV0FBVztJQUFNLGVBQWU7QUFBSztBQUNqRyxPQUFPLGlCQUFpQixZQUFZO0lBQ2xDLGlCQUFpQjtJQUNqQjtJQUNBO0FBQ0Y7QUFDQSxPQUFPLGlCQUFpQixRQUFRO0FBQ2hDO0FBQ0E7Ozs7O21EQ25LYTtrREFRQTttREFPQTtBQWZOLE1BQU0sZ0JBQWdCO0lBQzNCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDMUI7QUFFTyxNQUFNLGVBQWU7SUFDMUIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsb0JBQW9CO0FBQ3RCO0FBRU8sTUFBTSxnQkFBZ0I7SUFDM0Isa0JBQWtCLGFBQThDO0lBQ2hFLFlBQVksYUFBd0M7QUFDdEQ7OztBQ2xCQSxRQUFRLGlCQUFpQixTQUFVLENBQUM7SUFDbEMsT0FBTyxLQUFLLEVBQUUsYUFBYSxJQUFJO1FBQUMsU0FBUztJQUFDO0FBQzVDO0FBRUEsUUFBUSxvQkFBb0IsU0FBVSxDQUFDO0lBQ3JDLE9BQU8sZUFBZSxHQUFHLGNBQWM7UUFBQyxPQUFPO0lBQUk7QUFDckQ7QUFFQSxRQUFRLFlBQVksU0FBVSxNQUFNLEVBQUUsSUFBSTtJQUN4QyxPQUFPLEtBQUssUUFBUSxRQUFRLFNBQVUsR0FBRztRQUN2QyxJQUFJLFFBQVEsYUFBYSxRQUFRLGdCQUFnQixLQUFLLGVBQWUsTUFDbkU7UUFHRixPQUFPLGVBQWUsTUFBTSxLQUFLO1lBQy9CLFlBQVk7WUFDWixLQUFLO2dCQUNILE9BQU8sTUFBTSxDQUFDLElBQUk7WUFDcEI7UUFDRjtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRUEsUUFBUSxTQUFTLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHO0lBQzVDLE9BQU8sZUFBZSxNQUFNLFVBQVU7UUFDcEMsWUFBWTtRQUNaLEtBQUs7SUFDUDtBQUNGOzs7Ozs2RENTYTtBQXZDYjtBQUNBO0FBb0JBLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JkLENBQUM7QUFFSyxNQUFNLDBCQUEwQixPQUFPO0lBQzVDLE1BQU0sWUFBWSxPQUFPO0lBQ3pCLElBQUksT0FBTyxNQUFNLFlBQVksTUFBTSxJQUFJLENBQUEsR0FBQSxnQkFBTyxFQUFFLHlCQUF5QjtJQUV6RSxNQUFNLE9BQU8sTUFBTSxDQUFBLEdBQUEsdUJBQWMsRUFBd0I7UUFDdkQ7UUFDQSxXQUFXO1lBQUUsY0FBYztRQUFVO1FBQ3JDLGVBQWU7SUFDakI7SUFFQSxNQUFNLFVBQVUsS0FBSztJQUNyQixJQUFJLENBQUMsU0FBUyxVQUFVLFdBQVcsTUFBTSxJQUFJLENBQUEsR0FBQSxnQkFBTyxFQUFFLG1DQUFtQztJQUV6RixPQUFPO1FBQ0wsT0FBTyxRQUFRLFNBQVM7UUFDeEIsTUFBTSxRQUFRLFNBQVM7UUFDdkIsWUFBWSxRQUFRLFNBQVM7UUFDN0IsV0FBVyxRQUFRLFNBQVMsVUFBVSxJQUFJLENBQUMsTUFBUSxJQUFJO1FBQ3ZELFVBQVUsUUFBUSxLQUFLO1FBQ3ZCLE1BQU0sUUFBUTtRQUNkLFNBQVMsUUFBUTtRQUNqQixRQUFRLFFBQVE7UUFDaEIsY0FBYyxRQUFRO1FBQ3RCLGdCQUFnQixJQUFJLEtBQUssT0FBTyxRQUFRLGFBQWEsTUFBTTtRQUMzRCxLQUFLLENBQUMsOEJBQThCLEVBQUUsUUFBUSxTQUFTLFVBQVUsQ0FBQyxDQUFDO0lBQ3JFO0FBQ0Y7Ozs7O3FEQ3BEYTtBQWJiO0FBUUEsTUFBTSxlQUFlO0lBQ25CLE1BQU0sUUFBUSxTQUFTLE9BQU8sTUFBTTtJQUNwQyxPQUFPLFFBQVEsS0FBSyxDQUFDLEVBQUUsR0FBRztBQUM1QjtBQUVPLE1BQU0sa0JBQWtCLE9BQVU7SUFDdkMsTUFBTSxVQUFrQztRQUFFLGdCQUFnQjtJQUFtQjtJQUM3RSxNQUFNLE9BQU87SUFDYixJQUFJLE1BQU0sT0FBTyxDQUFDLGNBQWMsR0FBRztJQUVuQyxNQUFNLFdBQVcsTUFBTSxNQUFNLENBQUEsR0FBQSx3QkFBWSxFQUFFLGtCQUFrQjtRQUMzRCxRQUFRO1FBQ1I7UUFDQSxhQUFhO1FBQ2IsTUFBTSxLQUFLLFVBQVU7SUFDdkI7SUFFQSxJQUFJLENBQUMsU0FBUyxJQUFJO1FBQ2hCLE1BQU0sT0FBTyxNQUFNLFNBQVMsT0FBTyxNQUFNLElBQU07UUFDL0MsTUFBTSxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLE9BQU8sR0FBRyxFQUFFLEtBQUssQ0FBQztJQUNwRTtJQUNBLE1BQU0sT0FBTyxNQUFNLFNBQVM7SUFDNUIsSUFBSSxLQUFLLFFBQVEsUUFBUSxNQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDeEQsT0FBTyxLQUFLO0FBQ2Q7Ozs7O0FDaENBLDhDQUFhO2dEQWlCQTtBQWpCTixNQUFNLGlCQUFpQjtJQUdWO0lBUUE7SUFWbEIsWUFDRSxPQUFlLEVBQ0MsTUFRQSxZQUFZLEtBQUssQ0FDakM7UUFDQSxLQUFLLENBQUM7b0JBVlU7eUJBUUE7SUFHbEI7QUFDRjtBQUVPLE1BQU0sYUFBYSxDQUFDO0lBQ3pCLElBQUksaUJBQWlCLFVBQVUsT0FBTztJQUN0QyxJQUFJLGlCQUFpQixPQUFPLE9BQU8sSUFBSSxTQUFTLE1BQU0sU0FBUyxXQUFXO0lBQzFFLE9BQU8sSUFBSSxTQUFTLG9CQUFvQixXQUFXO0FBQ3JEOzs7OztxRENsQmE7aURBT0E7aURBS0E7MERBSUE7MERBS0E7MERBSUE7eURBSUE7cURBS0E7QUFyQ2I7QUFHTyxNQUFNLGtCQUFxQztJQUNoRCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixRQUFRO1FBQUUsT0FBTztRQUFJLE9BQU87UUFBSSxNQUFNO1FBQUksUUFBUTtRQUFRLFVBQVU7SUFBcUI7QUFDM0Y7QUFFTyxNQUFNLGNBQWM7SUFDekIsTUFBTSxTQUFTLE1BQU0sT0FBTyxRQUFRLE1BQU0sSUFBSSxDQUFBLEdBQUEsdUJBQVcsRUFBRTtJQUMzRCxPQUFPLE1BQU0sQ0FBQyxDQUFBLEdBQUEsdUJBQVcsRUFBRSxTQUFTLElBQUk7QUFDMUM7QUFFTyxNQUFNLGNBQWMsT0FBTztJQUNoQyxNQUFNLE9BQU8sUUFBUSxNQUFNLElBQUk7UUFBRSxDQUFDLENBQUEsR0FBQSx1QkFBVyxFQUFFLFNBQVMsRUFBRTtJQUFTO0FBQ3JFO0FBRU8sTUFBTSx1QkFBdUI7SUFDbEMsTUFBTSxTQUFTLE1BQU0sT0FBTyxRQUFRLE1BQU0sSUFBSSxDQUFBLEdBQUEsdUJBQVcsRUFBRTtJQUMzRCxPQUFPLE1BQU0sQ0FBQyxDQUFBLEdBQUEsdUJBQVcsRUFBRSxtQkFBbUIsSUFBSTtBQUNwRDtBQUVPLE1BQU0sdUJBQXVCLE9BQU87SUFDekMsTUFBTSxPQUFPLFFBQVEsTUFBTSxJQUFJO1FBQUUsQ0FBQyxDQUFBLEdBQUEsdUJBQVcsRUFBRSxtQkFBbUIsRUFBRTtJQUFRO0FBQzlFO0FBRU8sTUFBTSx1QkFBdUIsT0FBTztJQUN6QyxNQUFNLE9BQU8sUUFBUSxNQUFNLElBQUk7UUFBRSxDQUFDLENBQUEsR0FBQSx1QkFBVyxFQUFFLDZCQUE2QixFQUFFO0lBQWE7QUFDN0Y7QUFFTyxNQUFNLHNCQUFzQjtJQUNqQyxNQUFNLFNBQVMsTUFBTSxPQUFPLFFBQVEsTUFBTSxJQUFJLENBQUEsR0FBQSx1QkFBVyxFQUFFO0lBQzNELE9BQU8sTUFBTSxDQUFDLENBQUEsR0FBQSx1QkFBVyxFQUFFLDZCQUE2QixJQUFJO0FBQzlEO0FBRU8sTUFBTSxrQkFBa0IsT0FBTztJQUNwQyxNQUFNLFNBQVMsTUFBTSxPQUFPLFFBQVEsTUFBTSxJQUFJLENBQUEsR0FBQSx1QkFBVyxFQUFFO0lBQzNELE1BQU0sV0FBMkIsTUFBTSxDQUFDLENBQUEsR0FBQSx1QkFBVyxFQUFFLGVBQWUsSUFBSSxFQUFFO0lBQzFFLE1BQU0sT0FBTyxRQUFRLE1BQU0sSUFBSTtRQUFFLENBQUMsQ0FBQSxHQUFBLHVCQUFXLEVBQUUsZUFBZSxFQUFFO1lBQUM7ZUFBVztTQUFTLENBQUMsTUFBTSxHQUFHO0lBQUk7QUFDckc7Ozs7O3NEQ3ZDYTswREFLQTtBQVBiO0FBRU8sTUFBTSxtQkFBbUIsS0FBRSxPQUFPO0lBQ3ZDLGdCQUFnQixLQUFFLFNBQVMsSUFBSSxHQUFHLElBQUk7SUFDdEMsaUJBQWlCLEtBQUUsU0FBUyxJQUFJLEdBQUcsSUFBSTtBQUN6QztBQUVPLE1BQU0sdUJBQXVCLEtBQUUsT0FBTztJQUMzQyxPQUFPLEtBQUUsU0FBUyxJQUFJO0lBQ3RCLE9BQU8sS0FBRSxTQUFTLElBQUk7SUFDdEIsTUFBTSxLQUFFLFNBQVMsSUFBSTtJQUNyQixRQUFRLEtBQUUsU0FBUyxJQUFJO0lBQ3ZCLFVBQVUsS0FBRSxTQUFTLElBQUk7QUFDM0I7Ozs7O0FDWEEsdUNBQVM7QUFGVDtBQUNBLHdCQUFBO2tCQUVlOzs7OztBQ0hmO0FBQUEsd0JBQUE7QUFDQTtBQUFBLHdCQUFBO0FBQ0E7QUFBQSx3QkFBQTtBQUNBO0FBQUEsd0JBQUE7QUFDQTtBQUFBLHdCQUFBO0FBQ0E7QUFBQSx3QkFBQTs7Ozs7QUNIQSxxREFBUyxDQUFBLEdBQUEsb0JBQWM7QUFDdkIsaURBQWdCO0FBR2hCLGlEQUFnQjtBQU5oQjs7QUFDQSxJQUFJLG1CQUFtQixDQUFBLEdBQUEsb0JBQWM7QUFFOUIsU0FBUyxZQUFZLEdBQUc7SUFDM0IsbUJBQW1CO0FBQ3ZCO0FBQ08sU0FBUztJQUNaLE9BQU87QUFDWDs7Ozs7QUNSQTtBQUNBO0FBQ0EsTUFBTSxXQUFXLENBQUMsT0FBTztJQUNyQixJQUFJO0lBQ0osT0FBUSxNQUFNO1FBQ1YsS0FBSyxDQUFBLEdBQUEsd0JBQVcsRUFBRTtZQUNkLElBQUksTUFBTSxhQUFhLENBQUEsR0FBQSxxQkFBWSxFQUFFLFdBQ2pDLFVBQVU7aUJBR1YsVUFBVSxDQUFDLFNBQVMsRUFBRSxNQUFNLFNBQVMsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO1lBRXRFO1FBQ0osS0FBSyxDQUFBLEdBQUEsd0JBQVcsRUFBRTtZQUNkLFVBQVUsQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLFVBQVUsTUFBTSxVQUFVLENBQUEsR0FBQSxZQUFHLEVBQUUsdUJBQXVCLENBQUM7WUFDekc7UUFDSixLQUFLLENBQUEsR0FBQSx3QkFBVyxFQUFFO1lBQ2QsVUFBVSxDQUFDLCtCQUErQixFQUFFLENBQUEsR0FBQSxZQUFHLEVBQUUsV0FBVyxNQUFNLE1BQU0sTUFBTSxDQUFDO1lBQy9FO1FBQ0osS0FBSyxDQUFBLEdBQUEsd0JBQVcsRUFBRTtZQUNkLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDekI7UUFDSixLQUFLLENBQUEsR0FBQSx3QkFBVyxFQUFFO1lBQ2QsVUFBVSxDQUFDLHNDQUFzQyxFQUFFLENBQUEsR0FBQSxZQUFHLEVBQUUsV0FBVyxNQUFNLFNBQVMsQ0FBQztZQUNuRjtRQUNKLEtBQUssQ0FBQSxHQUFBLHdCQUFXLEVBQUU7WUFDZCxVQUFVLENBQUMsNkJBQTZCLEVBQUUsQ0FBQSxHQUFBLFlBQUcsRUFBRSxXQUFXLE1BQU0sU0FBUyxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUMsQ0FBQztZQUN4RztRQUNKLEtBQUssQ0FBQSxHQUFBLHdCQUFXLEVBQUU7WUFDZCxVQUFVLENBQUMsMEJBQTBCLENBQUM7WUFDdEM7UUFDSixLQUFLLENBQUEsR0FBQSx3QkFBVyxFQUFFO1lBQ2QsVUFBVSxDQUFDLDRCQUE0QixDQUFDO1lBQ3hDO1FBQ0osS0FBSyxDQUFBLEdBQUEsd0JBQVcsRUFBRTtZQUNkLFVBQVUsQ0FBQyxZQUFZLENBQUM7WUFDeEI7UUFDSixLQUFLLENBQUEsR0FBQSx3QkFBVyxFQUFFO1lBQ2QsSUFBSSxPQUFPLE1BQU0sZUFBZSxVQUFVO2dCQUN0QyxJQUFJLGNBQWMsTUFBTSxZQUFZO29CQUNoQyxVQUFVLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxXQUFXLFNBQVMsQ0FBQyxDQUFDO29CQUN0RSxJQUFJLE9BQU8sTUFBTSxXQUFXLGFBQWEsVUFDckMsVUFBVSxDQUFDLEVBQUUsUUFBUSxtREFBbUQsRUFBRSxNQUFNLFdBQVcsU0FBUyxDQUFDO2dCQUU3RyxPQUNLLElBQUksZ0JBQWdCLE1BQU0sWUFDM0IsVUFBVSxDQUFDLGdDQUFnQyxFQUFFLE1BQU0sV0FBVyxXQUFXLENBQUMsQ0FBQztxQkFFMUUsSUFBSSxjQUFjLE1BQU0sWUFDekIsVUFBVSxDQUFDLDhCQUE4QixFQUFFLE1BQU0sV0FBVyxTQUFTLENBQUMsQ0FBQztxQkFHdkUsQ0FBQSxHQUFBLFlBQUcsRUFBRSxZQUFZLE1BQU07WUFFL0IsT0FDSyxJQUFJLE1BQU0sZUFBZSxTQUMxQixVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO2lCQUd2QyxVQUFVO1lBRWQ7UUFDSixLQUFLLENBQUEsR0FBQSx3QkFBVyxFQUFFO1lBQ2QsSUFBSSxNQUFNLFNBQVMsU0FDZixVQUFVLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxRQUFRLFlBQVksTUFBTSxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxRQUFRLFdBQVcsQ0FBQztpQkFDakksSUFBSSxNQUFNLFNBQVMsVUFDcEIsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sUUFBUSxhQUFhLENBQUM7aUJBQy9ILElBQUksTUFBTSxTQUFTLFVBQ3BCLFVBQVUsQ0FBQyxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUMsaUJBQWlCLENBQUMsR0FBRyxNQUFNLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxNQUFNLFFBQVEsQ0FBQztpQkFDaEosSUFBSSxNQUFNLFNBQVMsVUFDcEIsVUFBVSxDQUFDLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLE1BQU0sWUFBWSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLE1BQU0sUUFBUSxDQUFDO2lCQUNoSixJQUFJLE1BQU0sU0FBUyxRQUNwQixVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sUUFBUSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsTUFBTSxZQUFZLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7aUJBRWpLLFVBQVU7WUFDZDtRQUNKLEtBQUssQ0FBQSxHQUFBLHdCQUFXLEVBQUU7WUFDZCxJQUFJLE1BQU0sU0FBUyxTQUNmLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLFFBQVEsV0FBVyxDQUFDO2lCQUNoSSxJQUFJLE1BQU0sU0FBUyxVQUNwQixVQUFVLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxRQUFRLGFBQWEsQ0FBQztpQkFDL0gsSUFBSSxNQUFNLFNBQVMsVUFDcEIsVUFBVSxDQUFDLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sUUFBUSxDQUFDO2lCQUMvSCxJQUFJLE1BQU0sU0FBUyxVQUNwQixVQUFVLENBQUMsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sWUFBWSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxRQUFRLENBQUM7aUJBQy9ILElBQUksTUFBTSxTQUFTLFFBQ3BCLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxZQUFZLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztpQkFFdEosVUFBVTtZQUNkO1FBQ0osS0FBSyxDQUFBLEdBQUEsd0JBQVcsRUFBRTtZQUNkLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDekI7UUFDSixLQUFLLENBQUEsR0FBQSx3QkFBVyxFQUFFO1lBQ2QsVUFBVSxDQUFDLHdDQUF3QyxDQUFDO1lBQ3BEO1FBQ0osS0FBSyxDQUFBLEdBQUEsd0JBQVcsRUFBRTtZQUNkLFVBQVUsQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLFdBQVcsQ0FBQztZQUM1RDtRQUNKLEtBQUssQ0FBQSxHQUFBLHdCQUFXLEVBQUU7WUFDZCxVQUFVO1lBQ1Y7UUFDSjtZQUNJLFVBQVUsS0FBSztZQUNmLENBQUEsR0FBQSxZQUFHLEVBQUUsWUFBWTtJQUN6QjtJQUNBLE9BQU87UUFBRTtJQUFRO0FBQ3JCO2tCQUNlOzs7OztrREMzR0Y7bURBa0JBO0FBSWIsOENBQWE7QUF2QmI7QUFDTyxNQUFNLGVBQWUsQ0FBQSxHQUFBLFlBQUcsRUFBRSxZQUFZO0lBQ3pDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0g7QUFDTSxNQUFNLGdCQUFnQixDQUFDO0lBQzFCLE1BQU0sT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNO0lBQ3ZDLE9BQU8sS0FBSyxRQUFRLGVBQWU7QUFDdkM7QUFDTyxNQUFNLGlCQUFpQjtJQUMxQixJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQztJQUNoQjtJQUNBLFlBQVksTUFBTSxDQUFFO1FBQ2hCLEtBQUs7UUFDTCxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDYixJQUFJLENBQUMsU0FBUzttQkFBSSxJQUFJLENBQUM7Z0JBQVE7YUFBSTtRQUN2QztRQUNBLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTO21CQUFJLElBQUksQ0FBQzttQkFBVzthQUFLO1FBQzNDO1FBQ0EsTUFBTSxjQUFjLFdBQVc7UUFDL0IsSUFBSSxPQUFPLGdCQUNQLG1DQUFtQztRQUNuQyxPQUFPLGVBQWUsSUFBSSxFQUFFO2FBRzVCLElBQUksQ0FBQyxZQUFZO1FBRXJCLElBQUksQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLFNBQVM7SUFDbEI7SUFDQSxPQUFPLE9BQU8sRUFBRTtRQUNaLE1BQU0sU0FBUyxXQUNYLFNBQVUsS0FBSztZQUNYLE9BQU8sTUFBTTtRQUNqQjtRQUNKLE1BQU0sY0FBYztZQUFFLFNBQVMsRUFBRTtRQUFDO1FBQ2xDLE1BQU0sZUFBZSxDQUFDO1lBQ2xCLEtBQUssTUFBTSxTQUFTLE1BQU0sT0FBUTtnQkFDOUIsSUFBSSxNQUFNLFNBQVMsaUJBQ2YsTUFBTSxZQUFZLElBQUk7cUJBRXJCLElBQUksTUFBTSxTQUFTLHVCQUNwQixhQUFhLE1BQU07cUJBRWxCLElBQUksTUFBTSxTQUFTLHFCQUNwQixhQUFhLE1BQU07cUJBRWxCLElBQUksTUFBTSxLQUFLLFdBQVcsR0FDM0IsWUFBWSxRQUFRLEtBQUssT0FBTztxQkFFL0I7b0JBQ0QsSUFBSSxPQUFPO29CQUNYLElBQUksSUFBSTtvQkFDUixNQUFPLElBQUksTUFBTSxLQUFLLE9BQVE7d0JBQzFCLE1BQU0sS0FBSyxNQUFNLElBQUksQ0FBQyxFQUFFO3dCQUN4QixNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssU0FBUzt3QkFDM0MsSUFBSSxDQUFDLFVBQ0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJOzRCQUFFLFNBQVMsRUFBRTt3QkFBQzs2QkFTcEM7NEJBQ0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJO2dDQUFFLFNBQVMsRUFBRTs0QkFBQzs0QkFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssT0FBTzt3QkFDakM7d0JBQ0EsT0FBTyxJQUFJLENBQUMsR0FBRzt3QkFDZjtvQkFDSjtnQkFDSjtZQUNKO1FBQ0o7UUFDQSxhQUFhLElBQUk7UUFDakIsT0FBTztJQUNYO0lBQ0EsT0FBTyxPQUFPLEtBQUssRUFBRTtRQUNqQixJQUFJLENBQUUsQ0FBQSxpQkFBaUIsUUFBTyxHQUMxQixNQUFNLElBQUksTUFBTSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQztJQUVsRDtJQUNBLFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQztJQUNoQjtJQUNBLElBQUksVUFBVTtRQUNWLE9BQU8sS0FBSyxVQUFVLElBQUksQ0FBQyxRQUFRLENBQUEsR0FBQSxZQUFHLEVBQUUsdUJBQXVCO0lBQ25FO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxXQUFXO0lBQ2xDO0lBQ0EsUUFBUSxTQUFTLENBQUMsUUFBVSxNQUFNLE9BQU8sRUFBRTtRQUN2QyxNQUFNLGNBQWMsQ0FBQztRQUNyQixNQUFNLGFBQWEsRUFBRTtRQUNyQixLQUFLLE1BQU0sT0FBTyxJQUFJLENBQUMsT0FDbkIsSUFBSSxJQUFJLEtBQUssU0FBUyxHQUFHO1lBQ3JCLE1BQU0sVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQzNCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ2pELFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxPQUFPO1FBQ3JDLE9BRUksV0FBVyxLQUFLLE9BQU87UUFHL0IsT0FBTztZQUFFO1lBQVk7UUFBWTtJQUNyQztJQUNBLElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDO0lBQ2hCO0FBQ0o7QUFDQSxTQUFTLFNBQVMsQ0FBQztJQUNmLE1BQU0sUUFBUSxJQUFJLFNBQVM7SUFDM0IsT0FBTztBQUNYOzs7OzswQ0NwSVc7Z0RBNkRBO21EQVNFO21EQXNCQTtBQTVGTixJQUFJO0FBQ1YsQ0FBQSxTQUFVLElBQUk7SUFDWCxLQUFLLGNBQWMsQ0FBQyxLQUFRO0lBQzVCLFNBQVMsU0FBUyxJQUFJLEdBQUk7SUFDMUIsS0FBSyxXQUFXO0lBQ2hCLFNBQVMsWUFBWSxFQUFFO1FBQ25CLE1BQU0sSUFBSTtJQUNkO0lBQ0EsS0FBSyxjQUFjO0lBQ25CLEtBQUssY0FBYyxDQUFDO1FBQ2hCLE1BQU0sTUFBTSxDQUFDO1FBQ2IsS0FBSyxNQUFNLFFBQVEsTUFDZixHQUFHLENBQUMsS0FBSyxHQUFHO1FBRWhCLE9BQU87SUFDWDtJQUNBLEtBQUsscUJBQXFCLENBQUM7UUFDdkIsTUFBTSxZQUFZLEtBQUssV0FBVyxLQUFLLE9BQU8sQ0FBQyxJQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSztRQUM1RSxNQUFNLFdBQVcsQ0FBQztRQUNsQixLQUFLLE1BQU0sS0FBSyxVQUNaLFFBQVEsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUU7UUFFeEIsT0FBTyxLQUFLLGFBQWE7SUFDN0I7SUFDQSxLQUFLLGVBQWUsQ0FBQztRQUNqQixPQUFPLEtBQUssV0FBVyxLQUFLLElBQUksU0FBVSxDQUFDO1lBQ3ZDLE9BQU8sR0FBRyxDQUFDLEVBQUU7UUFDakI7SUFDSjtJQUNBLEtBQUssYUFBYSxPQUFPLE9BQU8sU0FBUyxXQUFXLDhCQUE4QjtPQUM1RSxDQUFDLE1BQVEsT0FBTyxLQUFLLEtBQUssOEJBQThCO09BQ3hELENBQUM7UUFDQyxNQUFNLE9BQU8sRUFBRTtRQUNmLElBQUssTUFBTSxPQUFPLE9BQ2QsSUFBSSxPQUFPLFVBQVUsZUFBZSxLQUFLLFFBQVEsTUFDN0MsS0FBSyxLQUFLO1FBR2xCLE9BQU87SUFDWDtJQUNKLEtBQUssT0FBTyxDQUFDLEtBQUs7UUFDZCxLQUFLLE1BQU0sUUFBUSxJQUFLO1lBQ3BCLElBQUksUUFBUSxPQUNSLE9BQU87UUFDZjtRQUNBLE9BQU87SUFDWDtJQUNBLEtBQUssWUFBWSxPQUFPLE9BQU8sY0FBYyxhQUN2QyxDQUFDLE1BQVEsT0FBTyxVQUFVLEtBQUssOEJBQThCO09BQzdELENBQUMsTUFBUSxPQUFPLFFBQVEsWUFBWSxPQUFPLFNBQVMsUUFBUSxLQUFLLE1BQU0sU0FBUztJQUN0RixTQUFTLFdBQVcsS0FBSyxFQUFFLFlBQVksS0FBSztRQUN4QyxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQVMsT0FBTyxRQUFRLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFNLEtBQUs7SUFDakY7SUFDQSxLQUFLLGFBQWE7SUFDbEIsS0FBSyx3QkFBd0IsQ0FBQyxHQUFHO1FBQzdCLElBQUksT0FBTyxVQUFVLFVBQ2pCLE9BQU8sTUFBTTtRQUVqQixPQUFPO0lBQ1g7QUFDSixDQUFBLEVBQUcsUUFBUyxDQUFBLE9BQU8sQ0FBQyxDQUFBO0FBQ2IsSUFBSTtBQUNWLENBQUEsU0FBVSxVQUFVO0lBQ2pCLFdBQVcsY0FBYyxDQUFDLE9BQU87UUFDN0IsT0FBTztZQUNILEdBQUcsS0FBSztZQUNSLEdBQUcsTUFBTTtRQUNiO0lBQ0o7QUFDSixDQUFBLEVBQUcsY0FBZSxDQUFBLGFBQWEsQ0FBQyxDQUFBO0FBQ3pCLE1BQU0sZ0JBQWdCLEtBQUssWUFBWTtJQUMxQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0g7QUFDTSxNQUFNLGdCQUFnQixDQUFDO0lBQzFCLE1BQU0sSUFBSSxPQUFPO0lBQ2pCLE9BQVE7UUFDSixLQUFLO1lBQ0QsT0FBTyxjQUFjO1FBQ3pCLEtBQUs7WUFDRCxPQUFPLGNBQWM7UUFDekIsS0FBSztZQUNELE9BQU8sT0FBTyxNQUFNLFFBQVEsY0FBYyxNQUFNLGNBQWM7UUFDbEUsS0FBSztZQUNELE9BQU8sY0FBYztRQUN6QixLQUFLO1lBQ0QsT0FBTyxjQUFjO1FBQ3pCLEtBQUs7WUFDRCxPQUFPLGNBQWM7UUFDekIsS0FBSztZQUNELE9BQU8sY0FBYztRQUN6QixLQUFLO1lBQ0QsSUFBSSxNQUFNLFFBQVEsT0FDZCxPQUFPLGNBQWM7WUFFekIsSUFBSSxTQUFTLE1BQ1QsT0FBTyxjQUFjO1lBRXpCLElBQUksS0FBSyxRQUFRLE9BQU8sS0FBSyxTQUFTLGNBQWMsS0FBSyxTQUFTLE9BQU8sS0FBSyxVQUFVLFlBQ3BGLE9BQU8sY0FBYztZQUV6QixJQUFJLE9BQU8sUUFBUSxlQUFlLGdCQUFnQixLQUM5QyxPQUFPLGNBQWM7WUFFekIsSUFBSSxPQUFPLFFBQVEsZUFBZSxnQkFBZ0IsS0FDOUMsT0FBTyxjQUFjO1lBRXpCLElBQUksT0FBTyxTQUFTLGVBQWUsZ0JBQWdCLE1BQy9DLE9BQU8sY0FBYztZQUV6QixPQUFPLGNBQWM7UUFDekI7WUFDSSxPQUFPLGNBQWM7SUFDN0I7QUFDSjs7Ozs7K0NDbElhO2dEQTRCQTtBQUNiLHVEQUFnQjtBQWVoQixpREFBYTs2Q0FzREE7MkNBR0E7d0NBQ0E7K0NBQ0E7NkNBQ0E7NkNBQ0E7NkNBQ0E7QUE1R2I7QUFDQTs7QUFDTyxNQUFNLFlBQVksQ0FBQztJQUN0QixNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUc7SUFDN0MsTUFBTSxXQUFXO1dBQUk7V0FBVSxVQUFVLFFBQVEsRUFBRTtLQUFFO0lBQ3JELE1BQU0sWUFBWTtRQUNkLEdBQUcsU0FBUztRQUNaLE1BQU07SUFDVjtJQUNBLElBQUksVUFBVSxZQUFZLFdBQ3RCLE9BQU87UUFDSCxHQUFHLFNBQVM7UUFDWixNQUFNO1FBQ04sU0FBUyxVQUFVO0lBQ3ZCO0lBRUosSUFBSSxlQUFlO0lBQ25CLE1BQU0sT0FBTyxVQUNSLE9BQU8sQ0FBQyxJQUFNLENBQUMsQ0FBQyxHQUNoQixRQUNBO0lBQ0wsS0FBSyxNQUFNLE9BQU8sS0FDZCxlQUFlLElBQUksV0FBVztRQUFFO1FBQU0sY0FBYztJQUFhLEdBQUc7SUFFeEUsT0FBTztRQUNILEdBQUcsU0FBUztRQUNaLE1BQU07UUFDTixTQUFTO0lBQ2I7QUFDSjtBQUNPLE1BQU0sYUFBYSxFQUFFO0FBQ3JCLFNBQVMsa0JBQWtCLEdBQUcsRUFBRSxTQUFTO0lBQzVDLE1BQU0sY0FBYyxDQUFBLEdBQUEscUJBQVU7SUFDOUIsTUFBTSxRQUFRLFVBQVU7UUFDcEIsV0FBVztRQUNYLE1BQU0sSUFBSTtRQUNWLE1BQU0sSUFBSTtRQUNWLFdBQVc7WUFDUCxJQUFJLE9BQU87WUFDWCxJQUFJO1lBQ0o7WUFDQSxnQkFBZ0IsQ0FBQSxHQUFBLG9CQUFjLElBQUksWUFBWSxDQUFBLEdBQUEsb0JBQWM7U0FDL0QsQ0FBQyxPQUFPLENBQUMsSUFBTSxDQUFDLENBQUM7SUFDdEI7SUFDQSxJQUFJLE9BQU8sT0FBTyxLQUFLO0FBQzNCO0FBQ08sTUFBTTtJQUNULGFBQWM7UUFDVixJQUFJLENBQUMsUUFBUTtJQUNqQjtJQUNBLFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxVQUFVLFNBQ2YsSUFBSSxDQUFDLFFBQVE7SUFDckI7SUFDQSxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsVUFBVSxXQUNmLElBQUksQ0FBQyxRQUFRO0lBQ3JCO0lBQ0EsT0FBTyxXQUFXLE1BQU0sRUFBRSxPQUFPLEVBQUU7UUFDL0IsTUFBTSxhQUFhLEVBQUU7UUFDckIsS0FBSyxNQUFNLEtBQUssUUFBUztZQUNyQixJQUFJLEVBQUUsV0FBVyxXQUNiLE9BQU87WUFDWCxJQUFJLEVBQUUsV0FBVyxTQUNiLE9BQU87WUFDWCxXQUFXLEtBQUssRUFBRTtRQUN0QjtRQUNBLE9BQU87WUFBRSxRQUFRLE9BQU87WUFBTyxPQUFPO1FBQVc7SUFDckQ7SUFDQSxhQUFhLGlCQUFpQixNQUFNLEVBQUUsS0FBSyxFQUFFO1FBQ3pDLE1BQU0sWUFBWSxFQUFFO1FBQ3BCLEtBQUssTUFBTSxRQUFRLE1BQU87WUFDdEIsTUFBTSxNQUFNLE1BQU0sS0FBSztZQUN2QixNQUFNLFFBQVEsTUFBTSxLQUFLO1lBQ3pCLFVBQVUsS0FBSztnQkFDWDtnQkFDQTtZQUNKO1FBQ0o7UUFDQSxPQUFPLFlBQVksZ0JBQWdCLFFBQVE7SUFDL0M7SUFDQSxPQUFPLGdCQUFnQixNQUFNLEVBQUUsS0FBSyxFQUFFO1FBQ2xDLE1BQU0sY0FBYyxDQUFDO1FBQ3JCLEtBQUssTUFBTSxRQUFRLE1BQU87WUFDdEIsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztZQUN2QixJQUFJLElBQUksV0FBVyxXQUNmLE9BQU87WUFDWCxJQUFJLE1BQU0sV0FBVyxXQUNqQixPQUFPO1lBQ1gsSUFBSSxJQUFJLFdBQVcsU0FDZixPQUFPO1lBQ1gsSUFBSSxNQUFNLFdBQVcsU0FDakIsT0FBTztZQUNYLElBQUksSUFBSSxVQUFVLGVBQWdCLENBQUEsT0FBTyxNQUFNLFVBQVUsZUFBZSxLQUFLLFNBQVEsR0FDakYsV0FBVyxDQUFDLElBQUksTUFBTSxHQUFHLE1BQU07UUFFdkM7UUFDQSxPQUFPO1lBQUUsUUFBUSxPQUFPO1lBQU8sT0FBTztRQUFZO0lBQ3REO0FBQ0o7QUFDTyxNQUFNLFVBQVUsT0FBTyxPQUFPO0lBQ2pDLFFBQVE7QUFDWjtBQUNPLE1BQU0sUUFBUSxDQUFDLFFBQVcsQ0FBQTtRQUFFLFFBQVE7UUFBUztJQUFNLENBQUE7QUFDbkQsTUFBTSxLQUFLLENBQUMsUUFBVyxDQUFBO1FBQUUsUUFBUTtRQUFTO0lBQU0sQ0FBQTtBQUNoRCxNQUFNLFlBQVksQ0FBQyxJQUFNLEVBQUUsV0FBVztBQUN0QyxNQUFNLFVBQVUsQ0FBQyxJQUFNLEVBQUUsV0FBVztBQUNwQyxNQUFNLFVBQVUsQ0FBQyxJQUFNLEVBQUUsV0FBVztBQUNwQyxNQUFNLFVBQVUsQ0FBQyxJQUFNLE9BQU8sWUFBWSxlQUFlLGFBQWE7Ozs7Ozs7OztBRXhDN0UsNkNBQWE7QUFpV2IsbURBQW1EO0FBQ25ELG1EQUFnQjtBQXNEaEIsK0NBQWE7QUEwa0JiLCtDQUFhO0FBK09iLCtDQUFhO0FBZ0xiLGdEQUFhO0FBeUJiLDZDQUFhO0FBK0diLCtDQUFhO0FBcUJiLGtEQUFhO0FBcUJiLDZDQUFhO0FBcUJiLDRDQUFhO0FBZ0JiLGdEQUFhO0FBZ0JiLDhDQUFhO0FBaUJiLDZDQUFhO0FBcUJiLDhDQUFhO0FBb0liLCtDQUFhO0FBb1liLDhDQUFhO0FBb0piLDJEQUFhO0FBeUhiLHFEQUFhO0FBc0RiLHNEQUFzRDtBQUN0RCw4Q0FBYTtBQXNFYiwrQ0FBYTtBQXNEYiw0Q0FBYTtBQW1FYiw0Q0FBYTtBQXNGYixpREFBYTtBQWtIYiw2Q0FBYTtBQWlCYixnREFBYTtBQStCYiw2Q0FBYTtBQWlFYixtREFBYTtBQXNDYixnREFBYTtBQThCYixnREFBYTtBQWtKYixvREFBUztBQUNULGlEQUFhO0FBbUJiLGlEQUFhO0FBbUJiLGdEQUFhO0FBeUJiLDhDQUFhO0FBMkRiLDRDQUFhOzJDQXFCQTtBQUNiLGdEQUFhO0FBY2IsaURBQWE7QUEwRGIsaURBQWE7QUFrQ2IsNENBQWdCO0FBaUNoQiw0Q0FBUztBQUFULCtDQUE0QjswQ0FDZjsyREFHRjs0Q0FxRkU7QUFVYix5Q0FBUztBQUFULDJDQUF5QjtBQUF6Qiw0Q0FBNkM7QUFBN0MsNkNBQW1FO0FBQW5FLDBDQUEyRjtBQUEzRix3REFBNkc7QUFBN0csNENBQTJKO0FBQTNKLDBDQUFrTDtBQUFsTCw4Q0FBb007QUFBcE0sZ0RBQThOO0FBQTlOLGtEQUE0UDtBQUE1UCwwQ0FBOFI7QUFBOVIsNkNBQWdUO0FBQWhULHlDQUF3VTtBQUF4VSx5Q0FBd1Y7QUFBeFYsZ0RBQXdXO0FBQXhXLDJDQUFzWTtBQUF0WSwwQ0FBMFo7QUFBMVosOENBQTRhO0FBQTVhLDRDQUFzYztBQUF0Yyw0Q0FBNGQ7QUFBNWQsOENBQWtmO0FBQWxmLDZDQUE0ZjtBQUE1Ziw4Q0FBcWdCO0FBQXJnQiw2Q0FBK2hCO0FBQS9oQiw4Q0FBd2lCO0FBQXhpQixnREFBa2tCO0FBQWxrQiw2Q0FBZ21CO0FBQWhtQiw0Q0FBd25CO0FBQXhuQix5Q0FBOG9CO0FBQTlvQixrREFBOHBCO0FBQTlwQiw0Q0FBZ3NCO0FBQWhzQiw0Q0FBc3RCO0FBQXR0QixpREFBNHVCO0FBQTV1QiwyQ0FBd3dCO0FBQXh3QiwrQ0FBNHhCO0FBQTV4QiwyQ0FBd3pCO0FBQXh6Qiw2Q0FBNDBCO0FBQTUwQiwwQ0FBbzJCOzJDQUN2MUI7QUE1bUhiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0lBQ0YsWUFBWSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUU7UUFDbEMsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUNyQixJQUFJLENBQUMsU0FBUztRQUNkLElBQUksQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLFFBQVE7UUFDYixJQUFJLENBQUMsT0FBTztJQUNoQjtJQUNBLElBQUksT0FBTztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNsQixJQUFJLE1BQU0sUUFBUSxJQUFJLENBQUMsT0FDbkIsSUFBSSxDQUFDLFlBQVksUUFBUSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUM7aUJBRzdDLElBQUksQ0FBQyxZQUFZLFFBQVEsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDOztRQUdsRCxPQUFPLElBQUksQ0FBQztJQUNoQjtBQUNKO0FBQ0EsTUFBTSxlQUFlLENBQUMsS0FBSztJQUN2QixJQUFJLENBQUEsR0FBQSxvQkFBTSxFQUFFLFNBQ1IsT0FBTztRQUFFLFNBQVM7UUFBTSxNQUFNLE9BQU87SUFBTTtTQUUxQztRQUNELElBQUksQ0FBQyxJQUFJLE9BQU8sT0FBTyxRQUNuQixNQUFNLElBQUksTUFBTTtRQUVwQixPQUFPO1lBQ0gsU0FBUztZQUNULElBQUksU0FBUTtnQkFDUixJQUFJLElBQUksQ0FBQyxRQUNMLE9BQU8sSUFBSSxDQUFDO2dCQUNoQixNQUFNLFFBQVEsSUFBSSxDQUFBLEdBQUEsb0JBQU8sRUFBRSxJQUFJLE9BQU87Z0JBQ3RDLElBQUksQ0FBQyxTQUFTO2dCQUNkLE9BQU8sSUFBSSxDQUFDO1lBQ2hCO1FBQ0o7SUFDSjtBQUNKO0FBQ0EsU0FBUyxvQkFBb0IsTUFBTTtJQUMvQixJQUFJLENBQUMsUUFDRCxPQUFPLENBQUM7SUFDWixNQUFNLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsR0FBRztJQUN0RSxJQUFJLFlBQWEsQ0FBQSxzQkFBc0IsY0FBYSxHQUNoRCxNQUFNLElBQUksTUFBTSxDQUFDLHdGQUF3RixDQUFDO0lBRTlHLElBQUksVUFDQSxPQUFPO1FBQUUsVUFBVTtRQUFVO0lBQVk7SUFDN0MsTUFBTSxZQUFZLENBQUMsS0FBSztRQUNwQixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUc7UUFDcEIsSUFBSSxJQUFJLFNBQVMsc0JBQ2IsT0FBTztZQUFFLFNBQVMsV0FBVyxJQUFJO1FBQWE7UUFFbEQsSUFBSSxPQUFPLElBQUksU0FBUyxhQUNwQixPQUFPO1lBQUUsU0FBUyxXQUFXLGtCQUFrQixJQUFJO1FBQWE7UUFFcEUsSUFBSSxJQUFJLFNBQVMsZ0JBQ2IsT0FBTztZQUFFLFNBQVMsSUFBSTtRQUFhO1FBQ3ZDLE9BQU87WUFBRSxTQUFTLFdBQVcsc0JBQXNCLElBQUk7UUFBYTtJQUN4RTtJQUNBLE9BQU87UUFBRSxVQUFVO1FBQVc7SUFBWTtBQUM5QztBQUNPLE1BQU07SUFDVCxJQUFJLGNBQWM7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0lBQ0EsU0FBUyxLQUFLLEVBQUU7UUFDWixPQUFPLENBQUEsR0FBQSxxQkFBWSxFQUFFLE1BQU07SUFDL0I7SUFDQSxnQkFBZ0IsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUN4QixPQUFRLE9BQU87WUFDWCxRQUFRLE1BQU0sT0FBTztZQUNyQixNQUFNLE1BQU07WUFDWixZQUFZLENBQUEsR0FBQSxxQkFBWSxFQUFFLE1BQU07WUFDaEMsZ0JBQWdCLElBQUksQ0FBQyxLQUFLO1lBQzFCLE1BQU0sTUFBTTtZQUNaLFFBQVEsTUFBTTtRQUNsQjtJQUNKO0lBQ0Esb0JBQW9CLEtBQUssRUFBRTtRQUN2QixPQUFPO1lBQ0gsUUFBUSxJQUFJLENBQUEsR0FBQSx3QkFBVTtZQUN0QixLQUFLO2dCQUNELFFBQVEsTUFBTSxPQUFPO2dCQUNyQixNQUFNLE1BQU07Z0JBQ1osWUFBWSxDQUFBLEdBQUEscUJBQVksRUFBRSxNQUFNO2dCQUNoQyxnQkFBZ0IsSUFBSSxDQUFDLEtBQUs7Z0JBQzFCLE1BQU0sTUFBTTtnQkFDWixRQUFRLE1BQU07WUFDbEI7UUFDSjtJQUNKO0lBQ0EsV0FBVyxLQUFLLEVBQUU7UUFDZCxNQUFNLFNBQVMsSUFBSSxDQUFDLE9BQU87UUFDM0IsSUFBSSxDQUFBLEdBQUEsb0JBQU0sRUFBRSxTQUNSLE1BQU0sSUFBSSxNQUFNO1FBRXBCLE9BQU87SUFDWDtJQUNBLFlBQVksS0FBSyxFQUFFO1FBQ2YsTUFBTSxTQUFTLElBQUksQ0FBQyxPQUFPO1FBQzNCLE9BQU8sUUFBUSxRQUFRO0lBQzNCO0lBQ0EsTUFBTSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQ2hCLE1BQU0sU0FBUyxJQUFJLENBQUMsVUFBVSxNQUFNO1FBQ3BDLElBQUksT0FBTyxTQUNQLE9BQU8sT0FBTztRQUNsQixNQUFNLE9BQU87SUFDakI7SUFDQSxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDcEIsTUFBTSxNQUFNO1lBQ1IsUUFBUTtnQkFDSixRQUFRLEVBQUU7Z0JBQ1YsT0FBTyxRQUFRLFNBQVM7Z0JBQ3hCLG9CQUFvQixRQUFRO1lBQ2hDO1lBQ0EsTUFBTSxRQUFRLFFBQVEsRUFBRTtZQUN4QixnQkFBZ0IsSUFBSSxDQUFDLEtBQUs7WUFDMUIsUUFBUTtZQUNSO1lBQ0EsWUFBWSxDQUFBLEdBQUEscUJBQVksRUFBRTtRQUM5QjtRQUNBLE1BQU0sU0FBUyxJQUFJLENBQUMsV0FBVztZQUFFO1lBQU0sTUFBTSxJQUFJO1lBQU0sUUFBUTtRQUFJO1FBQ25FLE9BQU8sYUFBYSxLQUFLO0lBQzdCO0lBQ0EsWUFBWSxJQUFJLEVBQUU7UUFDZCxNQUFNLE1BQU07WUFDUixRQUFRO2dCQUNKLFFBQVEsRUFBRTtnQkFDVixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQy9CO1lBQ0EsTUFBTSxFQUFFO1lBQ1IsZ0JBQWdCLElBQUksQ0FBQyxLQUFLO1lBQzFCLFFBQVE7WUFDUjtZQUNBLFlBQVksQ0FBQSxHQUFBLHFCQUFZLEVBQUU7UUFDOUI7UUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUNuQixJQUFJO1lBQ0EsTUFBTSxTQUFTLElBQUksQ0FBQyxXQUFXO2dCQUFFO2dCQUFNLE1BQU0sRUFBRTtnQkFBRSxRQUFRO1lBQUk7WUFDN0QsT0FBTyxDQUFBLEdBQUEsb0JBQU0sRUFBRSxVQUNUO2dCQUNFLE9BQU8sT0FBTztZQUNsQixJQUNFO2dCQUNFLFFBQVEsSUFBSSxPQUFPO1lBQ3ZCO1FBQ1IsRUFDQSxPQUFPLEtBQUs7WUFDUixJQUFJLEtBQUssU0FBUyxlQUFlLFNBQVMsZ0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUTtZQUU5QixJQUFJLFNBQVM7Z0JBQ1QsUUFBUSxFQUFFO2dCQUNWLE9BQU87WUFDWDtRQUNKO1FBRUosT0FBTyxJQUFJLENBQUMsWUFBWTtZQUFFO1lBQU0sTUFBTSxFQUFFO1lBQUUsUUFBUTtRQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVcsQ0FBQSxHQUFBLG9CQUFNLEVBQUUsVUFDNUU7Z0JBQ0UsT0FBTyxPQUFPO1lBQ2xCLElBQ0U7Z0JBQ0UsUUFBUSxJQUFJLE9BQU87WUFDdkI7SUFDUjtJQUNBLE1BQU0sV0FBVyxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQzNCLE1BQU0sU0FBUyxNQUFNLElBQUksQ0FBQyxlQUFlLE1BQU07UUFDL0MsSUFBSSxPQUFPLFNBQ1AsT0FBTyxPQUFPO1FBQ2xCLE1BQU0sT0FBTztJQUNqQjtJQUNBLE1BQU0sZUFBZSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQy9CLE1BQU0sTUFBTTtZQUNSLFFBQVE7Z0JBQ0osUUFBUSxFQUFFO2dCQUNWLG9CQUFvQixRQUFRO2dCQUM1QixPQUFPO1lBQ1g7WUFDQSxNQUFNLFFBQVEsUUFBUSxFQUFFO1lBQ3hCLGdCQUFnQixJQUFJLENBQUMsS0FBSztZQUMxQixRQUFRO1lBQ1I7WUFDQSxZQUFZLENBQUEsR0FBQSxxQkFBWSxFQUFFO1FBQzlCO1FBQ0EsTUFBTSxtQkFBbUIsSUFBSSxDQUFDLE9BQU87WUFBRTtZQUFNLE1BQU0sSUFBSTtZQUFNLFFBQVE7UUFBSTtRQUN6RSxNQUFNLFNBQVMsTUFBTyxDQUFBLENBQUEsR0FBQSxvQkFBTSxFQUFFLG9CQUFvQixtQkFBbUIsUUFBUSxRQUFRLGlCQUFnQjtRQUNyRyxPQUFPLGFBQWEsS0FBSztJQUM3QjtJQUNBLE9BQU8sS0FBSyxFQUFFLE9BQU8sRUFBRTtRQUNuQixNQUFNLHFCQUFxQixDQUFDO1lBQ3hCLElBQUksT0FBTyxZQUFZLFlBQVksT0FBTyxZQUFZLGFBQ2xELE9BQU87Z0JBQUU7WUFBUTtpQkFFaEIsSUFBSSxPQUFPLFlBQVksWUFDeEIsT0FBTyxRQUFRO2lCQUdmLE9BQU87UUFFZjtRQUNBLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLO1lBQzFCLE1BQU0sU0FBUyxNQUFNO1lBQ3JCLE1BQU0sV0FBVyxJQUFNLElBQUksU0FBUztvQkFDaEMsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtvQkFDbkIsR0FBRyxtQkFBbUIsSUFBSTtnQkFDOUI7WUFDQSxJQUFJLE9BQU8sWUFBWSxlQUFlLGtCQUFrQixTQUNwRCxPQUFPLE9BQU8sS0FBSyxDQUFDO2dCQUNoQixJQUFJLENBQUMsTUFBTTtvQkFDUDtvQkFDQSxPQUFPO2dCQUNYLE9BRUksT0FBTztZQUVmO1lBRUosSUFBSSxDQUFDLFFBQVE7Z0JBQ1Q7Z0JBQ0EsT0FBTztZQUNYLE9BRUksT0FBTztRQUVmO0lBQ0o7SUFDQSxXQUFXLEtBQUssRUFBRSxjQUFjLEVBQUU7UUFDOUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7WUFDMUIsSUFBSSxDQUFDLE1BQU0sTUFBTTtnQkFDYixJQUFJLFNBQVMsT0FBTyxtQkFBbUIsYUFBYSxlQUFlLEtBQUssT0FBTztnQkFDL0UsT0FBTztZQUNYLE9BRUksT0FBTztRQUVmO0lBQ0o7SUFDQSxZQUFZLFVBQVUsRUFBRTtRQUNwQixPQUFPLElBQUksV0FBVztZQUNsQixRQUFRLElBQUk7WUFDWixVQUFVLHNCQUFzQjtZQUNoQyxRQUFRO2dCQUFFLE1BQU07Z0JBQWM7WUFBVztRQUM3QztJQUNKO0lBQ0EsWUFBWSxVQUFVLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWTtJQUM1QjtJQUNBLFlBQVksR0FBRyxDQUFFO1FBQ2IsNEJBQTRCLEdBQzVCLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTztRQUNaLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSTtRQUNqQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUk7UUFDekMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJO1FBQzNDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJO1FBQ25ELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSTtRQUM3QixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUk7UUFDbkMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJO1FBQzNDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSTtRQUM3QyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUk7UUFDdkMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSTtRQUNyQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUk7UUFDakMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJO1FBQ3JDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSTtRQUMzQixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUk7UUFDN0IsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJO1FBQ3pDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSTtRQUNqQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUk7UUFDckMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJO1FBQ2pDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSTtRQUN2QyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUk7UUFDL0IsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSTtRQUMzQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUk7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNoQixTQUFTO1lBQ1QsUUFBUTtZQUNSLFVBQVUsQ0FBQyxPQUFTLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUM7SUFDSjtJQUNBLFdBQVc7UUFDUCxPQUFPLFlBQVksT0FBTyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3pDO0lBQ0EsV0FBVztRQUNQLE9BQU8sWUFBWSxPQUFPLElBQUksRUFBRSxJQUFJLENBQUM7SUFDekM7SUFDQSxVQUFVO1FBQ04sT0FBTyxJQUFJLENBQUMsV0FBVztJQUMzQjtJQUNBLFFBQVE7UUFDSixPQUFPLFNBQVMsT0FBTyxJQUFJO0lBQy9CO0lBQ0EsVUFBVTtRQUNOLE9BQU8sV0FBVyxPQUFPLElBQUksRUFBRSxJQUFJLENBQUM7SUFDeEM7SUFDQSxHQUFHLE1BQU0sRUFBRTtRQUNQLE9BQU8sU0FBUyxPQUFPO1lBQUMsSUFBSTtZQUFFO1NBQU8sRUFBRSxJQUFJLENBQUM7SUFDaEQ7SUFDQSxJQUFJLFFBQVEsRUFBRTtRQUNWLE9BQU8sZ0JBQWdCLE9BQU8sSUFBSSxFQUFFLFVBQVUsSUFBSSxDQUFDO0lBQ3ZEO0lBQ0EsVUFBVSxTQUFTLEVBQUU7UUFDakIsT0FBTyxJQUFJLFdBQVc7WUFDbEIsR0FBRyxvQkFBb0IsSUFBSSxDQUFDLEtBQUs7WUFDakMsUUFBUSxJQUFJO1lBQ1osVUFBVSxzQkFBc0I7WUFDaEMsUUFBUTtnQkFBRSxNQUFNO2dCQUFhO1lBQVU7UUFDM0M7SUFDSjtJQUNBLFFBQVEsR0FBRyxFQUFFO1FBQ1QsTUFBTSxtQkFBbUIsT0FBTyxRQUFRLGFBQWEsTUFBTSxJQUFNO1FBQ2pFLE9BQU8sSUFBSSxXQUFXO1lBQ2xCLEdBQUcsb0JBQW9CLElBQUksQ0FBQyxLQUFLO1lBQ2pDLFdBQVcsSUFBSTtZQUNmLGNBQWM7WUFDZCxVQUFVLHNCQUFzQjtRQUNwQztJQUNKO0lBQ0EsUUFBUTtRQUNKLE9BQU8sSUFBSSxXQUFXO1lBQ2xCLFVBQVUsc0JBQXNCO1lBQ2hDLE1BQU0sSUFBSTtZQUNWLEdBQUcsb0JBQW9CLElBQUksQ0FBQyxLQUFLO1FBQ3JDO0lBQ0o7SUFDQSxNQUFNLEdBQUcsRUFBRTtRQUNQLE1BQU0saUJBQWlCLE9BQU8sUUFBUSxhQUFhLE1BQU0sSUFBTTtRQUMvRCxPQUFPLElBQUksU0FBUztZQUNoQixHQUFHLG9CQUFvQixJQUFJLENBQUMsS0FBSztZQUNqQyxXQUFXLElBQUk7WUFDZixZQUFZO1lBQ1osVUFBVSxzQkFBc0I7UUFDcEM7SUFDSjtJQUNBLFNBQVMsV0FBVyxFQUFFO1FBQ2xCLE1BQU0sT0FBTyxJQUFJLENBQUM7UUFDbEIsT0FBTyxJQUFJLEtBQUs7WUFDWixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1o7UUFDSjtJQUNKO0lBQ0EsS0FBSyxNQUFNLEVBQUU7UUFDVCxPQUFPLFlBQVksT0FBTyxJQUFJLEVBQUU7SUFDcEM7SUFDQSxXQUFXO1FBQ1AsT0FBTyxZQUFZLE9BQU8sSUFBSTtJQUNsQztJQUNBLGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLFdBQVc7SUFDckM7SUFDQSxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxNQUFNO0lBQ2hDO0FBQ0o7QUFDQSxNQUFNLFlBQVk7QUFDbEIsTUFBTSxhQUFhO0FBQ25CLE1BQU0sWUFBWTtBQUNsQixvQkFBb0I7QUFDcEIsbUhBQW1IO0FBQ25ILE1BQU0sWUFBWTtBQUNsQixNQUFNLGNBQWM7QUFDcEIsTUFBTSxXQUFXO0FBQ2pCLE1BQU0sZ0JBQWdCO0FBQ3RCLGlEQUFpRDtBQUNqRCxnREFBZ0Q7QUFDaEQsZzZCQUFnNkI7QUFDaDZCLGlCQUFpQjtBQUNqQiwySkFBMko7QUFDM0osMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQiw0bkJBQTRuQjtBQUM1bkIscUJBQXFCO0FBQ3JCLGdLQUFnSztBQUNoSyxxQkFBcUI7QUFDckIscWJBQXFiO0FBQ3JiLE1BQU0sYUFBYTtBQUNuQixxQkFBcUI7QUFDckIscUVBQXFFO0FBQ3JFLG9GQUFvRjtBQUNwRixNQUFNLGNBQWMsQ0FBQyxvREFBb0QsQ0FBQztBQUMxRSxJQUFJO0FBQ0oseUJBQXlCO0FBQ3pCLE1BQU0sWUFBWTtBQUNsQixNQUFNLGdCQUFnQjtBQUN0QixvQkFBb0I7QUFDcEIsa1lBQWtZO0FBQ2xZLE1BQU0sWUFBWTtBQUNsQixNQUFNLGdCQUFnQjtBQUN0QixnR0FBZ0c7QUFDaEcsTUFBTSxjQUFjO0FBQ3BCLDBDQUEwQztBQUMxQyxNQUFNLGlCQUFpQjtBQUN2QixTQUFTO0FBQ1Qsa0RBQWtEO0FBQ2xELDBCQUEwQjtBQUMxQixpSEFBaUg7QUFDakgsNEJBQTRCO0FBQzVCLE1BQU0sa0JBQWtCLENBQUMsaU1BQWlNLENBQUM7QUFDM04sTUFBTSxZQUFZLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ25ELFNBQVMsZ0JBQWdCLElBQUk7SUFDekIsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7SUFDbkMsSUFBSSxLQUFLLFdBQ0wscUJBQXFCLENBQUMsRUFBRSxtQkFBbUIsT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUM7U0FFcEUsSUFBSSxLQUFLLGFBQWEsTUFDdkIscUJBQXFCLENBQUMsRUFBRSxtQkFBbUIsVUFBVSxDQUFDO0lBRTFELE1BQU0sb0JBQW9CLEtBQUssWUFBWSxNQUFNLEtBQUssMENBQTBDO0lBQ2hHLE9BQU8sQ0FBQywyQkFBMkIsRUFBRSxtQkFBbUIsQ0FBQyxFQUFFLGtCQUFrQixDQUFDO0FBQ2xGO0FBQ0EsU0FBUyxVQUFVLElBQUk7SUFDbkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLE1BQU0sQ0FBQyxDQUFDO0FBQ2xEO0FBRU8sU0FBUyxjQUFjLElBQUk7SUFDOUIsSUFBSSxRQUFRLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLGdCQUFnQixNQUFNLENBQUM7SUFDekQsTUFBTSxPQUFPLEVBQUU7SUFDZixLQUFLLEtBQUssS0FBSyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakMsSUFBSSxLQUFLLFFBQ0wsS0FBSyxLQUFLLENBQUMsb0JBQW9CLENBQUM7SUFDcEMsUUFBUSxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDO0FBQ0EsU0FBUyxVQUFVLEVBQUUsRUFBRSxPQUFPO0lBQzFCLElBQUksQUFBQyxDQUFBLFlBQVksUUFBUSxDQUFDLE9BQU0sS0FBTSxVQUFVLEtBQUssS0FDakQsT0FBTztJQUVYLElBQUksQUFBQyxDQUFBLFlBQVksUUFBUSxDQUFDLE9BQU0sS0FBTSxVQUFVLEtBQUssS0FDakQsT0FBTztJQUVYLE9BQU87QUFDWDtBQUNBLFNBQVMsV0FBVyxHQUFHLEVBQUUsR0FBRztJQUN4QixJQUFJLENBQUMsU0FBUyxLQUFLLE1BQ2YsT0FBTztJQUNYLElBQUk7UUFDQSxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTTtRQUMzQixJQUFJLENBQUMsUUFDRCxPQUFPO1FBQ1gsOEJBQThCO1FBQzlCLE1BQU0sU0FBUyxPQUNWLFFBQVEsTUFBTSxLQUNkLFFBQVEsTUFBTSxLQUNkLE9BQU8sT0FBTyxTQUFVLEFBQUMsQ0FBQSxJQUFLLE9BQU8sU0FBUyxDQUFDLElBQUssR0FBSTtRQUM3RCxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUs7UUFDaEMsSUFBSSxPQUFPLFlBQVksWUFBWSxZQUFZLE1BQzNDLE9BQU87UUFDWCxJQUFJLFNBQVMsV0FBVyxTQUFTLFFBQVEsT0FDckMsT0FBTztRQUNYLElBQUksQ0FBQyxRQUFRLEtBQ1QsT0FBTztRQUNYLElBQUksT0FBTyxRQUFRLFFBQVEsS0FDdkIsT0FBTztRQUNYLE9BQU87SUFDWCxFQUNBLE9BQU07UUFDRixPQUFPO0lBQ1g7QUFDSjtBQUNBLFNBQVMsWUFBWSxFQUFFLEVBQUUsT0FBTztJQUM1QixJQUFJLEFBQUMsQ0FBQSxZQUFZLFFBQVEsQ0FBQyxPQUFNLEtBQU0sY0FBYyxLQUFLLEtBQ3JELE9BQU87SUFFWCxJQUFJLEFBQUMsQ0FBQSxZQUFZLFFBQVEsQ0FBQyxPQUFNLEtBQU0sY0FBYyxLQUFLLEtBQ3JELE9BQU87SUFFWCxPQUFPO0FBQ1g7QUFDTyxNQUFNLGtCQUFrQjtJQUMzQixPQUFPLEtBQUssRUFBRTtRQUNWLElBQUksSUFBSSxDQUFDLEtBQUssUUFDVixNQUFNLE9BQU8sT0FBTyxNQUFNO1FBRTlCLE1BQU0sYUFBYSxJQUFJLENBQUMsU0FBUztRQUNqQyxJQUFJLGVBQWUsQ0FBQSxHQUFBLHFCQUFZLEVBQUUsUUFBUTtZQUNyQyxNQUFNLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjtZQUNqQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztnQkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtnQkFDbkIsVUFBVSxDQUFBLEdBQUEscUJBQVksRUFBRTtnQkFDeEIsVUFBVSxJQUFJO1lBQ2xCO1lBQ0EsT0FBTyxHQUFBO1FBQ1g7UUFDQSxNQUFNLFNBQVMsSUFBSSxDQUFBLEdBQUEsd0JBQVU7UUFDN0IsSUFBSSxNQUFNO1FBQ1YsS0FBSyxNQUFNLFNBQVMsSUFBSSxDQUFDLEtBQUssT0FBUTtZQUNsQyxJQUFJLE1BQU0sU0FBUyxPQUNmO2dCQUFBLElBQUksTUFBTSxLQUFLLFNBQVMsTUFBTSxPQUFPO29CQUNqQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLFNBQVMsTUFBTTt3QkFDZixNQUFNO3dCQUNOLFdBQVc7d0JBQ1gsT0FBTzt3QkFDUCxTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUVDLElBQUksTUFBTSxTQUFTLE9BQ3BCO2dCQUFBLElBQUksTUFBTSxLQUFLLFNBQVMsTUFBTSxPQUFPO29CQUNqQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLFNBQVMsTUFBTTt3QkFDZixNQUFNO3dCQUNOLFdBQVc7d0JBQ1gsT0FBTzt3QkFDUCxTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUVDLElBQUksTUFBTSxTQUFTLFVBQVU7Z0JBQzlCLE1BQU0sU0FBUyxNQUFNLEtBQUssU0FBUyxNQUFNO2dCQUN6QyxNQUFNLFdBQVcsTUFBTSxLQUFLLFNBQVMsTUFBTTtnQkFDM0MsSUFBSSxVQUFVLFVBQVU7b0JBQ3BCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxJQUFJLFFBQ0EsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLFNBQVMsTUFBTTt3QkFDZixNQUFNO3dCQUNOLFdBQVc7d0JBQ1gsT0FBTzt3QkFDUCxTQUFTLE1BQU07b0JBQ25CO3lCQUVDLElBQUksVUFDTCxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSzt3QkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTt3QkFDbkIsU0FBUyxNQUFNO3dCQUNmLE1BQU07d0JBQ04sV0FBVzt3QkFDWCxPQUFPO3dCQUNQLFNBQVMsTUFBTTtvQkFDbkI7b0JBRUosT0FBTztnQkFDWDtZQUNKLE9BQ0ssSUFBSSxNQUFNLFNBQVMsU0FDcEI7Z0JBQUEsSUFBSSxDQUFDLFdBQVcsS0FBSyxNQUFNLE9BQU87b0JBQzlCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSzt3QkFDbkIsWUFBWTt3QkFDWixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO3dCQUNuQixTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUVDLElBQUksTUFBTSxTQUFTLFNBQVM7Z0JBQzdCLElBQUksQ0FBQyxZQUNELGFBQWEsSUFBSSxPQUFPLGFBQWE7Z0JBRXpDLElBQUksQ0FBQyxXQUFXLEtBQUssTUFBTSxPQUFPO29CQUM5QixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLFlBQVk7d0JBQ1osTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTt3QkFDbkIsU0FBUyxNQUFNO29CQUNuQjtvQkFDQSxPQUFPO2dCQUNYO1lBQ0osT0FDSyxJQUFJLE1BQU0sU0FBUyxRQUNwQjtnQkFBQSxJQUFJLENBQUMsVUFBVSxLQUFLLE1BQU0sT0FBTztvQkFDN0IsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLE9BQU87b0JBQ2xDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO3dCQUNuQixZQUFZO3dCQUNaLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLFNBQVMsTUFBTTtvQkFDbkI7b0JBQ0EsT0FBTztnQkFDWDtZQUFBLE9BRUMsSUFBSSxNQUFNLFNBQVMsVUFDcEI7Z0JBQUEsSUFBSSxDQUFDLFlBQVksS0FBSyxNQUFNLE9BQU87b0JBQy9CLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSzt3QkFDbkIsWUFBWTt3QkFDWixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO3dCQUNuQixTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUVDLElBQUksTUFBTSxTQUFTLFFBQ3BCO2dCQUFBLElBQUksQ0FBQyxVQUFVLEtBQUssTUFBTSxPQUFPO29CQUM3QixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLFlBQVk7d0JBQ1osTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTt3QkFDbkIsU0FBUyxNQUFNO29CQUNuQjtvQkFDQSxPQUFPO2dCQUNYO1lBQUEsT0FFQyxJQUFJLE1BQU0sU0FBUyxTQUNwQjtnQkFBQSxJQUFJLENBQUMsV0FBVyxLQUFLLE1BQU0sT0FBTztvQkFDOUIsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLE9BQU87b0JBQ2xDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO3dCQUNuQixZQUFZO3dCQUNaLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLFNBQVMsTUFBTTtvQkFDbkI7b0JBQ0EsT0FBTztnQkFDWDtZQUFBLE9BRUMsSUFBSSxNQUFNLFNBQVMsUUFDcEI7Z0JBQUEsSUFBSSxDQUFDLFVBQVUsS0FBSyxNQUFNLE9BQU87b0JBQzdCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSzt3QkFDbkIsWUFBWTt3QkFDWixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO3dCQUNuQixTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUVDLElBQUksTUFBTSxTQUFTLE9BQ3BCLElBQUk7Z0JBQ0EsSUFBSSxJQUFJLE1BQU07WUFDbEIsRUFDQSxPQUFNO2dCQUNGLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO2dCQUNsQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztvQkFDbkIsWUFBWTtvQkFDWixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO29CQUNuQixTQUFTLE1BQU07Z0JBQ25CO2dCQUNBLE9BQU87WUFDWDtpQkFFQyxJQUFJLE1BQU0sU0FBUyxTQUFTO2dCQUM3QixNQUFNLE1BQU0sWUFBWTtnQkFDeEIsTUFBTSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU07Z0JBQzFDLElBQUksQ0FBQyxZQUFZO29CQUNiLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSzt3QkFDbkIsWUFBWTt3QkFDWixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO3dCQUNuQixTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFDSixPQUNLLElBQUksTUFBTSxTQUFTLFFBQ3BCLE1BQU0sT0FBTyxNQUFNLEtBQUs7aUJBRXZCLElBQUksTUFBTSxTQUFTLFlBQ3BCO2dCQUFBLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxNQUFNLE9BQU8sTUFBTSxXQUFXO29CQUNuRCxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLFlBQVk7NEJBQUUsVUFBVSxNQUFNOzRCQUFPLFVBQVUsTUFBTTt3QkFBUzt3QkFDOUQsU0FBUyxNQUFNO29CQUNuQjtvQkFDQSxPQUFPO2dCQUNYO1lBQUEsT0FFQyxJQUFJLE1BQU0sU0FBUyxlQUNwQixNQUFNLE9BQU8sTUFBTSxLQUFLO2lCQUV2QixJQUFJLE1BQU0sU0FBUyxlQUNwQixNQUFNLE9BQU8sTUFBTSxLQUFLO2lCQUV2QixJQUFJLE1BQU0sU0FBUyxjQUNwQjtnQkFBQSxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsTUFBTSxRQUFRO29CQUNyQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLFlBQVk7NEJBQUUsWUFBWSxNQUFNO3dCQUFNO3dCQUN0QyxTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUVDLElBQUksTUFBTSxTQUFTLFlBQ3BCO2dCQUFBLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxNQUFNLFFBQVE7b0JBQ25DLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSzt3QkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTt3QkFDbkIsWUFBWTs0QkFBRSxVQUFVLE1BQU07d0JBQU07d0JBQ3BDLFNBQVMsTUFBTTtvQkFDbkI7b0JBQ0EsT0FBTztnQkFDWDtZQUFBLE9BRUMsSUFBSSxNQUFNLFNBQVMsWUFBWTtnQkFDaEMsTUFBTSxRQUFRLGNBQWM7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxPQUFPO29CQUN6QixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLFlBQVk7d0JBQ1osU0FBUyxNQUFNO29CQUNuQjtvQkFDQSxPQUFPO2dCQUNYO1lBQ0osT0FDSyxJQUFJLE1BQU0sU0FBUyxRQUFRO2dCQUM1QixNQUFNLFFBQVE7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLE9BQU87b0JBQ3pCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSzt3QkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTt3QkFDbkIsWUFBWTt3QkFDWixTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFDSixPQUNLLElBQUksTUFBTSxTQUFTLFFBQVE7Z0JBQzVCLE1BQU0sUUFBUSxVQUFVO2dCQUN4QixJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sT0FBTztvQkFDekIsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLE9BQU87b0JBQ2xDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO3dCQUNuQixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO3dCQUNuQixZQUFZO3dCQUNaLFNBQVMsTUFBTTtvQkFDbkI7b0JBQ0EsT0FBTztnQkFDWDtZQUNKLE9BQ0ssSUFBSSxNQUFNLFNBQVMsWUFDcEI7Z0JBQUEsSUFBSSxDQUFDLGNBQWMsS0FBSyxNQUFNLE9BQU87b0JBQ2pDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSzt3QkFDbkIsWUFBWTt3QkFDWixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO3dCQUNuQixTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUVDLElBQUksTUFBTSxTQUFTLE1BQ3BCO2dCQUFBLElBQUksQ0FBQyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVU7b0JBQ3ZDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSzt3QkFDbkIsWUFBWTt3QkFDWixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO3dCQUNuQixTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUVDLElBQUksTUFBTSxTQUFTLE9BQ3BCO2dCQUFBLElBQUksQ0FBQyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU07b0JBQ3BDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSzt3QkFDbkIsWUFBWTt3QkFDWixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO3dCQUNuQixTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUVDLElBQUksTUFBTSxTQUFTLFFBQ3BCO2dCQUFBLElBQUksQ0FBQyxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVU7b0JBQ3pDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSzt3QkFDbkIsWUFBWTt3QkFDWixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO3dCQUNuQixTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUVDLElBQUksTUFBTSxTQUFTLFVBQ3BCO2dCQUFBLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxPQUFPO29CQUMvQixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLFlBQVk7d0JBQ1osTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTt3QkFDbkIsU0FBUyxNQUFNO29CQUNuQjtvQkFDQSxPQUFPO2dCQUNYO1lBQUEsT0FFQyxJQUFJLE1BQU0sU0FBUyxhQUNwQjtnQkFBQSxJQUFJLENBQUMsZUFBZSxLQUFLLE1BQU0sT0FBTztvQkFDbEMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLE9BQU87b0JBQ2xDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO3dCQUNuQixZQUFZO3dCQUNaLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLFNBQVMsTUFBTTtvQkFDbkI7b0JBQ0EsT0FBTztnQkFDWDtZQUFBLE9BR0EsQ0FBQSxHQUFBLFlBQUcsRUFBRSxZQUFZO1FBRXpCO1FBQ0EsT0FBTztZQUFFLFFBQVEsT0FBTztZQUFPLE9BQU8sTUFBTTtRQUFLO0lBQ3JEO0lBQ0EsT0FBTyxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRTtRQUMvQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBUyxNQUFNLEtBQUssT0FBTztZQUMvQztZQUNBLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7WUFDbkIsR0FBRyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTLFFBQVE7UUFDbEM7SUFDSjtJQUNBLFVBQVUsS0FBSyxFQUFFO1FBQ2IsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLFFBQVE7bUJBQUksSUFBSSxDQUFDLEtBQUs7Z0JBQVE7YUFBTTtRQUN4QztJQUNKO0lBQ0EsTUFBTSxPQUFPLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVO1lBQUUsTUFBTTtZQUFTLEdBQUcsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUyxRQUFRO1FBQUM7SUFDMUU7SUFDQSxJQUFJLE9BQU8sRUFBRTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFBRSxNQUFNO1lBQU8sR0FBRyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTLFFBQVE7UUFBQztJQUN4RTtJQUNBLE1BQU0sT0FBTyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUFFLE1BQU07WUFBUyxHQUFHLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVMsUUFBUTtRQUFDO0lBQzFFO0lBQ0EsS0FBSyxPQUFPLEVBQUU7UUFDVixPQUFPLElBQUksQ0FBQyxVQUFVO1lBQUUsTUFBTTtZQUFRLEdBQUcsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUyxRQUFRO1FBQUM7SUFDekU7SUFDQSxPQUFPLE9BQU8sRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFBRSxNQUFNO1lBQVUsR0FBRyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTLFFBQVE7UUFBQztJQUMzRTtJQUNBLEtBQUssT0FBTyxFQUFFO1FBQ1YsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUFFLE1BQU07WUFBUSxHQUFHLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVMsUUFBUTtRQUFDO0lBQ3pFO0lBQ0EsTUFBTSxPQUFPLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVO1lBQUUsTUFBTTtZQUFTLEdBQUcsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUyxRQUFRO1FBQUM7SUFDMUU7SUFDQSxLQUFLLE9BQU8sRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFBRSxNQUFNO1lBQVEsR0FBRyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTLFFBQVE7UUFBQztJQUN6RTtJQUNBLE9BQU8sT0FBTyxFQUFFO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVTtZQUFFLE1BQU07WUFBVSxHQUFHLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVMsUUFBUTtRQUFDO0lBQzNFO0lBQ0EsVUFBVSxPQUFPLEVBQUU7UUFDZiwrRkFBK0Y7UUFDL0YsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sR0FBRyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTLFFBQVE7UUFDbEM7SUFDSjtJQUNBLElBQUksT0FBTyxFQUFFO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUFFLE1BQU07WUFBTyxHQUFHLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVMsUUFBUTtRQUFDO0lBQ3hFO0lBQ0EsR0FBRyxPQUFPLEVBQUU7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVO1lBQUUsTUFBTTtZQUFNLEdBQUcsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUyxRQUFRO1FBQUM7SUFDdkU7SUFDQSxLQUFLLE9BQU8sRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFBRSxNQUFNO1lBQVEsR0FBRyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTLFFBQVE7UUFBQztJQUN6RTtJQUNBLFNBQVMsT0FBTyxFQUFFO1FBQ2QsSUFBSSxPQUFPLFlBQVksVUFDbkIsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sV0FBVztZQUNYLFFBQVE7WUFDUixPQUFPO1lBQ1AsU0FBUztRQUNiO1FBRUosT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sV0FBVyxPQUFPLFNBQVMsY0FBYyxjQUFjLE9BQU8sU0FBUztZQUN2RSxRQUFRLFNBQVMsVUFBVTtZQUMzQixPQUFPLFNBQVMsU0FBUztZQUN6QixHQUFHLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVMsU0FBUyxRQUFRO1FBQzNDO0lBQ0o7SUFDQSxLQUFLLE9BQU8sRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFBRSxNQUFNO1lBQVE7UUFBUTtJQUNsRDtJQUNBLEtBQUssT0FBTyxFQUFFO1FBQ1YsSUFBSSxPQUFPLFlBQVksVUFDbkIsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sV0FBVztZQUNYLFNBQVM7UUFDYjtRQUVKLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDbEIsTUFBTTtZQUNOLFdBQVcsT0FBTyxTQUFTLGNBQWMsY0FBYyxPQUFPLFNBQVM7WUFDdkUsR0FBRyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTLFNBQVMsUUFBUTtRQUMzQztJQUNKO0lBQ0EsU0FBUyxPQUFPLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVO1lBQUUsTUFBTTtZQUFZLEdBQUcsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUyxRQUFRO1FBQUM7SUFDN0U7SUFDQSxNQUFNLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sT0FBTztZQUNQLEdBQUcsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUyxRQUFRO1FBQ2xDO0lBQ0o7SUFDQSxTQUFTLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sT0FBTztZQUNQLFVBQVUsU0FBUztZQUNuQixHQUFHLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVMsU0FBUyxRQUFRO1FBQzNDO0lBQ0o7SUFDQSxXQUFXLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sT0FBTztZQUNQLEdBQUcsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUyxRQUFRO1FBQ2xDO0lBQ0o7SUFDQSxTQUFTLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sT0FBTztZQUNQLEdBQUcsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUyxRQUFRO1FBQ2xDO0lBQ0o7SUFDQSxJQUFJLFNBQVMsRUFBRSxPQUFPLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sT0FBTztZQUNQLEdBQUcsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUyxRQUFRO1FBQ2xDO0lBQ0o7SUFDQSxJQUFJLFNBQVMsRUFBRSxPQUFPLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sT0FBTztZQUNQLEdBQUcsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUyxRQUFRO1FBQ2xDO0lBQ0o7SUFDQSxPQUFPLEdBQUcsRUFBRSxPQUFPLEVBQUU7UUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sT0FBTztZQUNQLEdBQUcsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUyxRQUFRO1FBQ2xDO0lBQ0o7SUFDQTs7S0FFQyxHQUNELFNBQVMsT0FBTyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7SUFDMUM7SUFDQSxPQUFPO1FBQ0gsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLFFBQVE7bUJBQUksSUFBSSxDQUFDLEtBQUs7Z0JBQVE7b0JBQUUsTUFBTTtnQkFBTzthQUFFO1FBQ25EO0lBQ0o7SUFDQSxjQUFjO1FBQ1YsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLFFBQVE7bUJBQUksSUFBSSxDQUFDLEtBQUs7Z0JBQVE7b0JBQUUsTUFBTTtnQkFBYzthQUFFO1FBQzFEO0lBQ0o7SUFDQSxjQUFjO1FBQ1YsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLFFBQVE7bUJBQUksSUFBSSxDQUFDLEtBQUs7Z0JBQVE7b0JBQUUsTUFBTTtnQkFBYzthQUFFO1FBQzFEO0lBQ0o7SUFDQSxJQUFJLGFBQWE7UUFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFPLEdBQUcsU0FBUztJQUN2RDtJQUNBLElBQUksU0FBUztRQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQU8sR0FBRyxTQUFTO0lBQ3ZEO0lBQ0EsSUFBSSxTQUFTO1FBQ1QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLGFBQWE7UUFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFPLEdBQUcsU0FBUztJQUN2RDtJQUNBLElBQUksVUFBVTtRQUNWLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQU8sR0FBRyxTQUFTO0lBQ3ZEO0lBQ0EsSUFBSSxRQUFRO1FBQ1IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLFVBQVU7UUFDVixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFPLEdBQUcsU0FBUztJQUN2RDtJQUNBLElBQUksU0FBUztRQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQU8sR0FBRyxTQUFTO0lBQ3ZEO0lBQ0EsSUFBSSxXQUFXO1FBQ1gsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLFNBQVM7UUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFPLEdBQUcsU0FBUztJQUN2RDtJQUNBLElBQUksVUFBVTtRQUNWLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQU8sR0FBRyxTQUFTO0lBQ3ZEO0lBQ0EsSUFBSSxTQUFTO1FBQ1QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLE9BQU87UUFDUCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLEtBQUssQ0FBQyxLQUFPLEdBQUcsU0FBUztJQUN2RDtJQUNBLElBQUksU0FBUztRQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFDLEtBQU8sR0FBRyxTQUFTO0lBQ3ZEO0lBQ0EsSUFBSSxXQUFXO1FBQ1gsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLGNBQWM7UUFDZCwrRkFBK0Y7UUFDL0YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVM7SUFDdkQ7SUFDQSxJQUFJLFlBQVk7UUFDWixJQUFJLE1BQU07UUFDVixLQUFLLE1BQU0sTUFBTSxJQUFJLENBQUMsS0FBSyxPQUFRO1lBQy9CLElBQUksR0FBRyxTQUFTLE9BQ1o7Z0JBQUEsSUFBSSxRQUFRLFFBQVEsR0FBRyxRQUFRLEtBQzNCLE1BQU0sR0FBRztZQUFLO1FBRTFCO1FBQ0EsT0FBTztJQUNYO0lBQ0EsSUFBSSxZQUFZO1FBQ1osSUFBSSxNQUFNO1FBQ1YsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLEtBQUssT0FBUTtZQUMvQixJQUFJLEdBQUcsU0FBUyxPQUNaO2dCQUFBLElBQUksUUFBUSxRQUFRLEdBQUcsUUFBUSxLQUMzQixNQUFNLEdBQUc7WUFBSztRQUUxQjtRQUNBLE9BQU87SUFDWDtBQUNKO0FBQ0EsVUFBVSxTQUFTLENBQUM7SUFDaEIsT0FBTyxJQUFJLFVBQVU7UUFDakIsUUFBUSxFQUFFO1FBQ1YsVUFBVSxzQkFBc0I7UUFDaEMsUUFBUSxRQUFRLFVBQVU7UUFDMUIsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ0EsaUlBQWlJO0FBQ2pJLFNBQVMsbUJBQW1CLEdBQUcsRUFBRSxJQUFJO0lBQ2pDLE1BQU0sY0FBYyxBQUFDLENBQUEsSUFBSSxXQUFXLE1BQU0sSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFDLEVBQUc7SUFDekQsTUFBTSxlQUFlLEFBQUMsQ0FBQSxLQUFLLFdBQVcsTUFBTSxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUMsRUFBRztJQUMzRCxNQUFNLFdBQVcsY0FBYyxlQUFlLGNBQWM7SUFDNUQsTUFBTSxTQUFTLE9BQU8sU0FBUyxJQUFJLFFBQVEsVUFBVSxRQUFRLEtBQUs7SUFDbEUsTUFBTSxVQUFVLE9BQU8sU0FBUyxLQUFLLFFBQVEsVUFBVSxRQUFRLEtBQUs7SUFDcEUsT0FBTyxBQUFDLFNBQVMsVUFBVyxNQUFNO0FBQ3RDO0FBQ08sTUFBTSxrQkFBa0I7SUFDM0IsYUFBYztRQUNWLEtBQUssSUFBSTtRQUNULElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDO0lBQ3JCO0lBQ0EsT0FBTyxLQUFLLEVBQUU7UUFDVixJQUFJLElBQUksQ0FBQyxLQUFLLFFBQ1YsTUFBTSxPQUFPLE9BQU8sTUFBTTtRQUU5QixNQUFNLGFBQWEsSUFBSSxDQUFDLFNBQVM7UUFDakMsSUFBSSxlQUFlLENBQUEsR0FBQSxxQkFBWSxFQUFFLFFBQVE7WUFDckMsTUFBTSxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7WUFDakMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7Z0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7Z0JBQ25CLFVBQVUsQ0FBQSxHQUFBLHFCQUFZLEVBQUU7Z0JBQ3hCLFVBQVUsSUFBSTtZQUNsQjtZQUNBLE9BQU8sR0FBQTtRQUNYO1FBQ0EsSUFBSSxNQUFNO1FBQ1YsTUFBTSxTQUFTLElBQUksQ0FBQSxHQUFBLHdCQUFVO1FBQzdCLEtBQUssTUFBTSxTQUFTLElBQUksQ0FBQyxLQUFLLE9BQVE7WUFDbEMsSUFBSSxNQUFNLFNBQVMsT0FDZjtnQkFBQSxJQUFJLENBQUMsQ0FBQSxHQUFBLFlBQUcsRUFBRSxVQUFVLE1BQU0sT0FBTztvQkFDN0IsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLE9BQU87b0JBQ2xDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO3dCQUNuQixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO3dCQUNuQixVQUFVO3dCQUNWLFVBQVU7d0JBQ1YsU0FBUyxNQUFNO29CQUNuQjtvQkFDQSxPQUFPO2dCQUNYO1lBQUEsT0FFQyxJQUFJLE1BQU0sU0FBUyxPQUFPO2dCQUMzQixNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFFBQVEsTUFBTSxRQUFRLE1BQU07Z0JBQ2xGLElBQUksVUFBVTtvQkFDVixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLFNBQVMsTUFBTTt3QkFDZixNQUFNO3dCQUNOLFdBQVcsTUFBTTt3QkFDakIsT0FBTzt3QkFDUCxTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFDSixPQUNLLElBQUksTUFBTSxTQUFTLE9BQU87Z0JBQzNCLE1BQU0sU0FBUyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sUUFBUSxNQUFNLFFBQVEsTUFBTTtnQkFDaEYsSUFBSSxRQUFRO29CQUNSLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSzt3QkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTt3QkFDbkIsU0FBUyxNQUFNO3dCQUNmLE1BQU07d0JBQ04sV0FBVyxNQUFNO3dCQUNqQixPQUFPO3dCQUNQLFNBQVMsTUFBTTtvQkFDbkI7b0JBQ0EsT0FBTztnQkFDWDtZQUNKLE9BQ0ssSUFBSSxNQUFNLFNBQVMsY0FDcEI7Z0JBQUEsSUFBSSxtQkFBbUIsTUFBTSxNQUFNLE1BQU0sV0FBVyxHQUFHO29CQUNuRCxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLFlBQVksTUFBTTt3QkFDbEIsU0FBUyxNQUFNO29CQUNuQjtvQkFDQSxPQUFPO2dCQUNYO1lBQUEsT0FFQyxJQUFJLE1BQU0sU0FBUyxVQUNwQjtnQkFBQSxJQUFJLENBQUMsT0FBTyxTQUFTLE1BQU0sT0FBTztvQkFDOUIsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLE9BQU87b0JBQ2xDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO3dCQUNuQixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO3dCQUNuQixTQUFTLE1BQU07b0JBQ25CO29CQUNBLE9BQU87Z0JBQ1g7WUFBQSxPQUdBLENBQUEsR0FBQSxZQUFHLEVBQUUsWUFBWTtRQUV6QjtRQUNBLE9BQU87WUFBRSxRQUFRLE9BQU87WUFBTyxPQUFPLE1BQU07UUFBSztJQUNyRDtJQUNBLElBQUksS0FBSyxFQUFFLE9BQU8sRUFBRTtRQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLE9BQU8sT0FBTyxNQUFNLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7SUFDaEU7SUFDQSxHQUFHLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLE9BQU8sT0FBTyxPQUFPLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7SUFDakU7SUFDQSxJQUFJLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxPQUFPLE9BQU8sTUFBTSxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTO0lBQ2hFO0lBQ0EsR0FBRyxLQUFLLEVBQUUsT0FBTyxFQUFFO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxPQUFPLE9BQU8sT0FBTyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTO0lBQ2pFO0lBQ0EsU0FBUyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUU7UUFDdEMsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLFFBQVE7bUJBQ0QsSUFBSSxDQUFDLEtBQUs7Z0JBQ2I7b0JBQ0k7b0JBQ0E7b0JBQ0E7b0JBQ0EsU0FBUyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTO2dCQUNoQzthQUNIO1FBQ0w7SUFDSjtJQUNBLFVBQVUsS0FBSyxFQUFFO1FBQ2IsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLFFBQVE7bUJBQUksSUFBSSxDQUFDLEtBQUs7Z0JBQVE7YUFBTTtRQUN4QztJQUNKO0lBQ0EsSUFBSSxPQUFPLEVBQUU7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVO1lBQ2xCLE1BQU07WUFDTixTQUFTLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7UUFDaEM7SUFDSjtJQUNBLFNBQVMsT0FBTyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sT0FBTztZQUNQLFdBQVc7WUFDWCxTQUFTLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7UUFDaEM7SUFDSjtJQUNBLFNBQVMsT0FBTyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sT0FBTztZQUNQLFdBQVc7WUFDWCxTQUFTLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7UUFDaEM7SUFDSjtJQUNBLFlBQVksT0FBTyxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDbEIsTUFBTTtZQUNOLE9BQU87WUFDUCxXQUFXO1lBQ1gsU0FBUyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTO1FBQ2hDO0lBQ0o7SUFDQSxZQUFZLE9BQU8sRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQyxVQUFVO1lBQ2xCLE1BQU07WUFDTixPQUFPO1lBQ1AsV0FBVztZQUNYLFNBQVMsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUztRQUNoQztJQUNKO0lBQ0EsV0FBVyxLQUFLLEVBQUUsT0FBTyxFQUFFO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDbEIsTUFBTTtZQUNOLE9BQU87WUFDUCxTQUFTLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7UUFDaEM7SUFDSjtJQUNBLE9BQU8sT0FBTyxFQUFFO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVTtZQUNsQixNQUFNO1lBQ04sU0FBUyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTO1FBQ2hDO0lBQ0o7SUFDQSxLQUFLLE9BQU8sRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDbEIsTUFBTTtZQUNOLFdBQVc7WUFDWCxPQUFPLE9BQU87WUFDZCxTQUFTLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7UUFDaEMsR0FBRyxVQUFVO1lBQ1QsTUFBTTtZQUNOLFdBQVc7WUFDWCxPQUFPLE9BQU87WUFDZCxTQUFTLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7UUFDaEM7SUFDSjtJQUNBLElBQUksV0FBVztRQUNYLElBQUksTUFBTTtRQUNWLEtBQUssTUFBTSxNQUFNLElBQUksQ0FBQyxLQUFLLE9BQVE7WUFDL0IsSUFBSSxHQUFHLFNBQVMsT0FDWjtnQkFBQSxJQUFJLFFBQVEsUUFBUSxHQUFHLFFBQVEsS0FDM0IsTUFBTSxHQUFHO1lBQUs7UUFFMUI7UUFDQSxPQUFPO0lBQ1g7SUFDQSxJQUFJLFdBQVc7UUFDWCxJQUFJLE1BQU07UUFDVixLQUFLLE1BQU0sTUFBTSxJQUFJLENBQUMsS0FBSyxPQUFRO1lBQy9CLElBQUksR0FBRyxTQUFTLE9BQ1o7Z0JBQUEsSUFBSSxRQUFRLFFBQVEsR0FBRyxRQUFRLEtBQzNCLE1BQU0sR0FBRztZQUFLO1FBRTFCO1FBQ0EsT0FBTztJQUNYO0lBQ0EsSUFBSSxRQUFRO1FBQ1IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsS0FBTyxHQUFHLFNBQVMsU0FBVSxHQUFHLFNBQVMsZ0JBQWdCLENBQUEsR0FBQSxZQUFHLEVBQUUsVUFBVSxHQUFHO0lBQy9HO0lBQ0EsSUFBSSxXQUFXO1FBQ1gsSUFBSSxNQUFNO1FBQ1YsSUFBSSxNQUFNO1FBQ1YsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLEtBQUssT0FBUTtZQUMvQixJQUFJLEdBQUcsU0FBUyxZQUFZLEdBQUcsU0FBUyxTQUFTLEdBQUcsU0FBUyxjQUN6RCxPQUFPO2lCQUVOLElBQUksR0FBRyxTQUFTLE9BQ2pCO2dCQUFBLElBQUksUUFBUSxRQUFRLEdBQUcsUUFBUSxLQUMzQixNQUFNLEdBQUc7WUFBSyxPQUVqQixJQUFJLEdBQUcsU0FBUyxPQUNqQjtnQkFBQSxJQUFJLFFBQVEsUUFBUSxHQUFHLFFBQVEsS0FDM0IsTUFBTSxHQUFHO1lBQUs7UUFFMUI7UUFDQSxPQUFPLE9BQU8sU0FBUyxRQUFRLE9BQU8sU0FBUztJQUNuRDtBQUNKO0FBQ0EsVUFBVSxTQUFTLENBQUM7SUFDaEIsT0FBTyxJQUFJLFVBQVU7UUFDakIsUUFBUSxFQUFFO1FBQ1YsVUFBVSxzQkFBc0I7UUFDaEMsUUFBUSxRQUFRLFVBQVU7UUFDMUIsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ08sTUFBTSxrQkFBa0I7SUFDM0IsYUFBYztRQUNWLEtBQUssSUFBSTtRQUNULElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7SUFDcEI7SUFDQSxPQUFPLEtBQUssRUFBRTtRQUNWLElBQUksSUFBSSxDQUFDLEtBQUssUUFDVixJQUFJO1lBQ0EsTUFBTSxPQUFPLE9BQU8sTUFBTTtRQUM5QixFQUNBLE9BQU07WUFDRixPQUFPLElBQUksQ0FBQyxpQkFBaUI7UUFDakM7UUFFSixNQUFNLGFBQWEsSUFBSSxDQUFDLFNBQVM7UUFDakMsSUFBSSxlQUFlLENBQUEsR0FBQSxxQkFBWSxFQUFFLFFBQzdCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQjtRQUVqQyxJQUFJLE1BQU07UUFDVixNQUFNLFNBQVMsSUFBSSxDQUFBLEdBQUEsd0JBQVU7UUFDN0IsS0FBSyxNQUFNLFNBQVMsSUFBSSxDQUFDLEtBQUssT0FBUTtZQUNsQyxJQUFJLE1BQU0sU0FBUyxPQUFPO2dCQUN0QixNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFFBQVEsTUFBTSxRQUFRLE1BQU07Z0JBQ2xGLElBQUksVUFBVTtvQkFDVixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLE1BQU07d0JBQ04sU0FBUyxNQUFNO3dCQUNmLFdBQVcsTUFBTTt3QkFDakIsU0FBUyxNQUFNO29CQUNuQjtvQkFDQSxPQUFPO2dCQUNYO1lBQ0osT0FDSyxJQUFJLE1BQU0sU0FBUyxPQUFPO2dCQUMzQixNQUFNLFNBQVMsTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFFBQVEsTUFBTSxRQUFRLE1BQU07Z0JBQ2hGLElBQUksUUFBUTtvQkFDUixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLE1BQU07d0JBQ04sU0FBUyxNQUFNO3dCQUNmLFdBQVcsTUFBTTt3QkFDakIsU0FBUyxNQUFNO29CQUNuQjtvQkFDQSxPQUFPO2dCQUNYO1lBQ0osT0FDSyxJQUFJLE1BQU0sU0FBUyxjQUNwQjtnQkFBQSxJQUFJLE1BQU0sT0FBTyxNQUFNLFVBQVUsT0FBTyxJQUFJO29CQUN4QyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLFlBQVksTUFBTTt3QkFDbEIsU0FBUyxNQUFNO29CQUNuQjtvQkFDQSxPQUFPO2dCQUNYO1lBQUEsT0FHQSxDQUFBLEdBQUEsWUFBRyxFQUFFLFlBQVk7UUFFekI7UUFDQSxPQUFPO1lBQUUsUUFBUSxPQUFPO1lBQU8sT0FBTyxNQUFNO1FBQUs7SUFDckQ7SUFDQSxpQkFBaUIsS0FBSyxFQUFFO1FBQ3BCLE1BQU0sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO1FBQ2pDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO1lBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7WUFDbkIsVUFBVSxDQUFBLEdBQUEscUJBQVksRUFBRTtZQUN4QixVQUFVLElBQUk7UUFDbEI7UUFDQSxPQUFPLEdBQUE7SUFDWDtJQUNBLElBQUksS0FBSyxFQUFFLE9BQU8sRUFBRTtRQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLE9BQU8sT0FBTyxNQUFNLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7SUFDaEU7SUFDQSxHQUFHLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLE9BQU8sT0FBTyxPQUFPLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7SUFDakU7SUFDQSxJQUFJLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxPQUFPLE9BQU8sTUFBTSxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTO0lBQ2hFO0lBQ0EsR0FBRyxLQUFLLEVBQUUsT0FBTyxFQUFFO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxPQUFPLE9BQU8sT0FBTyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTO0lBQ2pFO0lBQ0EsU0FBUyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUU7UUFDdEMsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLFFBQVE7bUJBQ0QsSUFBSSxDQUFDLEtBQUs7Z0JBQ2I7b0JBQ0k7b0JBQ0E7b0JBQ0E7b0JBQ0EsU0FBUyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTO2dCQUNoQzthQUNIO1FBQ0w7SUFDSjtJQUNBLFVBQVUsS0FBSyxFQUFFO1FBQ2IsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLFFBQVE7bUJBQUksSUFBSSxDQUFDLEtBQUs7Z0JBQVE7YUFBTTtRQUN4QztJQUNKO0lBQ0EsU0FBUyxPQUFPLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVO1lBQ2xCLE1BQU07WUFDTixPQUFPLE9BQU87WUFDZCxXQUFXO1lBQ1gsU0FBUyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTO1FBQ2hDO0lBQ0o7SUFDQSxTQUFTLE9BQU8sRUFBRTtRQUNkLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDbEIsTUFBTTtZQUNOLE9BQU8sT0FBTztZQUNkLFdBQVc7WUFDWCxTQUFTLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7UUFDaEM7SUFDSjtJQUNBLFlBQVksT0FBTyxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDbEIsTUFBTTtZQUNOLE9BQU8sT0FBTztZQUNkLFdBQVc7WUFDWCxTQUFTLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7UUFDaEM7SUFDSjtJQUNBLFlBQVksT0FBTyxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDbEIsTUFBTTtZQUNOLE9BQU8sT0FBTztZQUNkLFdBQVc7WUFDWCxTQUFTLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7UUFDaEM7SUFDSjtJQUNBLFdBQVcsS0FBSyxFQUFFLE9BQU8sRUFBRTtRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVO1lBQ2xCLE1BQU07WUFDTjtZQUNBLFNBQVMsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUztRQUNoQztJQUNKO0lBQ0EsSUFBSSxXQUFXO1FBQ1gsSUFBSSxNQUFNO1FBQ1YsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLEtBQUssT0FBUTtZQUMvQixJQUFJLEdBQUcsU0FBUyxPQUNaO2dCQUFBLElBQUksUUFBUSxRQUFRLEdBQUcsUUFBUSxLQUMzQixNQUFNLEdBQUc7WUFBSztRQUUxQjtRQUNBLE9BQU87SUFDWDtJQUNBLElBQUksV0FBVztRQUNYLElBQUksTUFBTTtRQUNWLEtBQUssTUFBTSxNQUFNLElBQUksQ0FBQyxLQUFLLE9BQVE7WUFDL0IsSUFBSSxHQUFHLFNBQVMsT0FDWjtnQkFBQSxJQUFJLFFBQVEsUUFBUSxHQUFHLFFBQVEsS0FDM0IsTUFBTSxHQUFHO1lBQUs7UUFFMUI7UUFDQSxPQUFPO0lBQ1g7QUFDSjtBQUNBLFVBQVUsU0FBUyxDQUFDO0lBQ2hCLE9BQU8sSUFBSSxVQUFVO1FBQ2pCLFFBQVEsRUFBRTtRQUNWLFVBQVUsc0JBQXNCO1FBQ2hDLFFBQVEsUUFBUSxVQUFVO1FBQzFCLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNPLE1BQU0sbUJBQW1CO0lBQzVCLE9BQU8sS0FBSyxFQUFFO1FBQ1YsSUFBSSxJQUFJLENBQUMsS0FBSyxRQUNWLE1BQU0sT0FBTyxRQUFRLE1BQU07UUFFL0IsTUFBTSxhQUFhLElBQUksQ0FBQyxTQUFTO1FBQ2pDLElBQUksZUFBZSxDQUFBLEdBQUEscUJBQVksRUFBRSxTQUFTO1lBQ3RDLE1BQU0sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO1lBQ2pDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO2dCQUNuQixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO2dCQUNuQixVQUFVLENBQUEsR0FBQSxxQkFBWSxFQUFFO2dCQUN4QixVQUFVLElBQUk7WUFDbEI7WUFDQSxPQUFPLEdBQUE7UUFDWDtRQUNBLE9BQU8sQ0FBQSxHQUFBLGVBQUMsRUFBRSxNQUFNO0lBQ3BCO0FBQ0o7QUFDQSxXQUFXLFNBQVMsQ0FBQztJQUNqQixPQUFPLElBQUksV0FBVztRQUNsQixVQUFVLHNCQUFzQjtRQUNoQyxRQUFRLFFBQVEsVUFBVTtRQUMxQixHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDTyxNQUFNLGdCQUFnQjtJQUN6QixPQUFPLEtBQUssRUFBRTtRQUNWLElBQUksSUFBSSxDQUFDLEtBQUssUUFDVixNQUFNLE9BQU8sSUFBSSxLQUFLLE1BQU07UUFFaEMsTUFBTSxhQUFhLElBQUksQ0FBQyxTQUFTO1FBQ2pDLElBQUksZUFBZSxDQUFBLEdBQUEscUJBQVksRUFBRSxNQUFNO1lBQ25DLE1BQU0sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO1lBQ2pDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO2dCQUNuQixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO2dCQUNuQixVQUFVLENBQUEsR0FBQSxxQkFBWSxFQUFFO2dCQUN4QixVQUFVLElBQUk7WUFDbEI7WUFDQSxPQUFPLEdBQUE7UUFDWDtRQUNBLElBQUksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZO1lBQ3BDLE1BQU0sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO1lBQ2pDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO2dCQUNuQixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO1lBQ3ZCO1lBQ0EsT0FBTyxHQUFBO1FBQ1g7UUFDQSxNQUFNLFNBQVMsSUFBSSxDQUFBLEdBQUEsd0JBQVU7UUFDN0IsSUFBSSxNQUFNO1FBQ1YsS0FBSyxNQUFNLFNBQVMsSUFBSSxDQUFDLEtBQUssT0FBUTtZQUNsQyxJQUFJLE1BQU0sU0FBUyxPQUNmO2dCQUFBLElBQUksTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPO29CQUNwQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsT0FBTztvQkFDbEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLFNBQVMsTUFBTTt3QkFDZixXQUFXO3dCQUNYLE9BQU87d0JBQ1AsU0FBUyxNQUFNO3dCQUNmLE1BQU07b0JBQ1Y7b0JBQ0EsT0FBTztnQkFDWDtZQUFBLE9BRUMsSUFBSSxNQUFNLFNBQVMsT0FDcEI7Z0JBQUEsSUFBSSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU87b0JBQ3BDLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixPQUFPO29CQUNsQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSzt3QkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTt3QkFDbkIsU0FBUyxNQUFNO3dCQUNmLFdBQVc7d0JBQ1gsT0FBTzt3QkFDUCxTQUFTLE1BQU07d0JBQ2YsTUFBTTtvQkFDVjtvQkFDQSxPQUFPO2dCQUNYO1lBQUEsT0FHQSxDQUFBLEdBQUEsWUFBRyxFQUFFLFlBQVk7UUFFekI7UUFDQSxPQUFPO1lBQ0gsUUFBUSxPQUFPO1lBQ2YsT0FBTyxJQUFJLEtBQUssTUFBTSxLQUFLO1FBQy9CO0lBQ0o7SUFDQSxVQUFVLEtBQUssRUFBRTtRQUNiLE9BQU8sSUFBSSxRQUFRO1lBQ2YsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLFFBQVE7bUJBQUksSUFBSSxDQUFDLEtBQUs7Z0JBQVE7YUFBTTtRQUN4QztJQUNKO0lBQ0EsSUFBSSxPQUFPLEVBQUUsT0FBTyxFQUFFO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDbEIsTUFBTTtZQUNOLE9BQU8sUUFBUTtZQUNmLFNBQVMsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUztRQUNoQztJQUNKO0lBQ0EsSUFBSSxPQUFPLEVBQUUsT0FBTyxFQUFFO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFDbEIsTUFBTTtZQUNOLE9BQU8sUUFBUTtZQUNmLFNBQVMsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUztRQUNoQztJQUNKO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsSUFBSSxNQUFNO1FBQ1YsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLEtBQUssT0FBUTtZQUMvQixJQUFJLEdBQUcsU0FBUyxPQUNaO2dCQUFBLElBQUksUUFBUSxRQUFRLEdBQUcsUUFBUSxLQUMzQixNQUFNLEdBQUc7WUFBSztRQUUxQjtRQUNBLE9BQU8sT0FBTyxPQUFPLElBQUksS0FBSyxPQUFPO0lBQ3pDO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsSUFBSSxNQUFNO1FBQ1YsS0FBSyxNQUFNLE1BQU0sSUFBSSxDQUFDLEtBQUssT0FBUTtZQUMvQixJQUFJLEdBQUcsU0FBUyxPQUNaO2dCQUFBLElBQUksUUFBUSxRQUFRLEdBQUcsUUFBUSxLQUMzQixNQUFNLEdBQUc7WUFBSztRQUUxQjtRQUNBLE9BQU8sT0FBTyxPQUFPLElBQUksS0FBSyxPQUFPO0lBQ3pDO0FBQ0o7QUFDQSxRQUFRLFNBQVMsQ0FBQztJQUNkLE9BQU8sSUFBSSxRQUFRO1FBQ2YsUUFBUSxFQUFFO1FBQ1YsUUFBUSxRQUFRLFVBQVU7UUFDMUIsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ08sTUFBTSxrQkFBa0I7SUFDM0IsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLGFBQWEsSUFBSSxDQUFDLFNBQVM7UUFDakMsSUFBSSxlQUFlLENBQUEsR0FBQSxxQkFBWSxFQUFFLFFBQVE7WUFDckMsTUFBTSxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7WUFDakMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7Z0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7Z0JBQ25CLFVBQVUsQ0FBQSxHQUFBLHFCQUFZLEVBQUU7Z0JBQ3hCLFVBQVUsSUFBSTtZQUNsQjtZQUNBLE9BQU8sR0FBQTtRQUNYO1FBQ0EsT0FBTyxDQUFBLEdBQUEsZUFBQyxFQUFFLE1BQU07SUFDcEI7QUFDSjtBQUNBLFVBQVUsU0FBUyxDQUFDO0lBQ2hCLE9BQU8sSUFBSSxVQUFVO1FBQ2pCLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNPLE1BQU0scUJBQXFCO0lBQzlCLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxhQUFhLElBQUksQ0FBQyxTQUFTO1FBQ2pDLElBQUksZUFBZSxDQUFBLEdBQUEscUJBQVksRUFBRSxXQUFXO1lBQ3hDLE1BQU0sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO1lBQ2pDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO2dCQUNuQixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO2dCQUNuQixVQUFVLENBQUEsR0FBQSxxQkFBWSxFQUFFO2dCQUN4QixVQUFVLElBQUk7WUFDbEI7WUFDQSxPQUFPLEdBQUE7UUFDWDtRQUNBLE9BQU8sQ0FBQSxHQUFBLGVBQUMsRUFBRSxNQUFNO0lBQ3BCO0FBQ0o7QUFDQSxhQUFhLFNBQVMsQ0FBQztJQUNuQixPQUFPLElBQUksYUFBYTtRQUNwQixVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDTyxNQUFNLGdCQUFnQjtJQUN6QixPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sYUFBYSxJQUFJLENBQUMsU0FBUztRQUNqQyxJQUFJLGVBQWUsQ0FBQSxHQUFBLHFCQUFZLEVBQUUsTUFBTTtZQUNuQyxNQUFNLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjtZQUNqQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztnQkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtnQkFDbkIsVUFBVSxDQUFBLEdBQUEscUJBQVksRUFBRTtnQkFDeEIsVUFBVSxJQUFJO1lBQ2xCO1lBQ0EsT0FBTyxHQUFBO1FBQ1g7UUFDQSxPQUFPLENBQUEsR0FBQSxlQUFDLEVBQUUsTUFBTTtJQUNwQjtBQUNKO0FBQ0EsUUFBUSxTQUFTLENBQUM7SUFDZCxPQUFPLElBQUksUUFBUTtRQUNmLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNPLE1BQU0sZUFBZTtJQUN4QixhQUFjO1FBQ1YsS0FBSyxJQUFJO1FBQ1QsOEdBQThHO1FBQzlHLElBQUksQ0FBQyxPQUFPO0lBQ2hCO0lBQ0EsT0FBTyxLQUFLLEVBQUU7UUFDVixPQUFPLENBQUEsR0FBQSxlQUFDLEVBQUUsTUFBTTtJQUNwQjtBQUNKO0FBQ0EsT0FBTyxTQUFTLENBQUM7SUFDYixPQUFPLElBQUksT0FBTztRQUNkLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNPLE1BQU0sbUJBQW1CO0lBQzVCLGFBQWM7UUFDVixLQUFLLElBQUk7UUFDVCxXQUFXO1FBQ1gsSUFBSSxDQUFDLFdBQVc7SUFDcEI7SUFDQSxPQUFPLEtBQUssRUFBRTtRQUNWLE9BQU8sQ0FBQSxHQUFBLGVBQUMsRUFBRSxNQUFNO0lBQ3BCO0FBQ0o7QUFDQSxXQUFXLFNBQVMsQ0FBQztJQUNqQixPQUFPLElBQUksV0FBVztRQUNsQixVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDTyxNQUFNLGlCQUFpQjtJQUMxQixPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sTUFBTSxJQUFJLENBQUMsZ0JBQWdCO1FBQ2pDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO1lBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7WUFDbkIsVUFBVSxDQUFBLEdBQUEscUJBQVksRUFBRTtZQUN4QixVQUFVLElBQUk7UUFDbEI7UUFDQSxPQUFPLEdBQUE7SUFDWDtBQUNKO0FBQ0EsU0FBUyxTQUFTLENBQUM7SUFDZixPQUFPLElBQUksU0FBUztRQUNoQixVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDTyxNQUFNLGdCQUFnQjtJQUN6QixPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sYUFBYSxJQUFJLENBQUMsU0FBUztRQUNqQyxJQUFJLGVBQWUsQ0FBQSxHQUFBLHFCQUFZLEVBQUUsV0FBVztZQUN4QyxNQUFNLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjtZQUNqQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztnQkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtnQkFDbkIsVUFBVSxDQUFBLEdBQUEscUJBQVksRUFBRTtnQkFDeEIsVUFBVSxJQUFJO1lBQ2xCO1lBQ0EsT0FBTyxHQUFBO1FBQ1g7UUFDQSxPQUFPLENBQUEsR0FBQSxlQUFDLEVBQUUsTUFBTTtJQUNwQjtBQUNKO0FBQ0EsUUFBUSxTQUFTLENBQUM7SUFDZCxPQUFPLElBQUksUUFBUTtRQUNmLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNPLE1BQU0saUJBQWlCO0lBQzFCLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ2pELE1BQU0sTUFBTSxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLGVBQWUsQ0FBQSxHQUFBLHFCQUFZLEVBQUUsT0FBTztZQUN4QyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztnQkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtnQkFDbkIsVUFBVSxDQUFBLEdBQUEscUJBQVksRUFBRTtnQkFDeEIsVUFBVSxJQUFJO1lBQ2xCO1lBQ0EsT0FBTyxHQUFBO1FBQ1g7UUFDQSxJQUFJLElBQUksZ0JBQWdCLE1BQU07WUFDMUIsTUFBTSxTQUFTLElBQUksS0FBSyxTQUFTLElBQUksWUFBWTtZQUNqRCxNQUFNLFdBQVcsSUFBSSxLQUFLLFNBQVMsSUFBSSxZQUFZO1lBQ25ELElBQUksVUFBVSxVQUFVO2dCQUNwQixDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztvQkFDbkIsTUFBTSxTQUFTLENBQUEsR0FBQSx3QkFBVyxFQUFFLFVBQVUsQ0FBQSxHQUFBLHdCQUFXLEVBQUU7b0JBQ25ELFNBQVUsV0FBVyxJQUFJLFlBQVksUUFBUTtvQkFDN0MsU0FBVSxTQUFTLElBQUksWUFBWSxRQUFRO29CQUMzQyxNQUFNO29CQUNOLFdBQVc7b0JBQ1gsT0FBTztvQkFDUCxTQUFTLElBQUksWUFBWTtnQkFDN0I7Z0JBQ0EsT0FBTztZQUNYO1FBQ0o7UUFDQSxJQUFJLElBQUksY0FBYyxNQUNsQjtZQUFBLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxVQUFVLE9BQU87Z0JBQ3ZDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO29CQUNuQixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO29CQUNuQixTQUFTLElBQUksVUFBVTtvQkFDdkIsTUFBTTtvQkFDTixXQUFXO29CQUNYLE9BQU87b0JBQ1AsU0FBUyxJQUFJLFVBQVU7Z0JBQzNCO2dCQUNBLE9BQU87WUFDWDtRQUFBO1FBRUosSUFBSSxJQUFJLGNBQWMsTUFDbEI7WUFBQSxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksVUFBVSxPQUFPO2dCQUN2QyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztvQkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtvQkFDbkIsU0FBUyxJQUFJLFVBQVU7b0JBQ3ZCLE1BQU07b0JBQ04sV0FBVztvQkFDWCxPQUFPO29CQUNQLFNBQVMsSUFBSSxVQUFVO2dCQUMzQjtnQkFDQSxPQUFPO1lBQ1g7UUFBQTtRQUVKLElBQUksSUFBSSxPQUFPLE9BQ1gsT0FBTyxRQUFRLElBQUk7ZUFBSSxJQUFJO1NBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUN4QyxPQUFPLElBQUksS0FBSyxZQUFZLElBQUksbUJBQW1CLEtBQUssTUFBTSxJQUFJLE1BQU07UUFDNUUsSUFBSSxLQUFLLENBQUM7WUFDTixPQUFPLENBQUEsR0FBQSx3QkFBVSxFQUFFLFdBQVcsUUFBUTtRQUMxQztRQUVKLE1BQU0sU0FBUztlQUFJLElBQUk7U0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3BDLE9BQU8sSUFBSSxLQUFLLFdBQVcsSUFBSSxtQkFBbUIsS0FBSyxNQUFNLElBQUksTUFBTTtRQUMzRTtRQUNBLE9BQU8sQ0FBQSxHQUFBLHdCQUFVLEVBQUUsV0FBVyxRQUFRO0lBQzFDO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBLElBQUksU0FBUyxFQUFFLE9BQU8sRUFBRTtRQUNwQixPQUFPLElBQUksU0FBUztZQUNoQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osV0FBVztnQkFBRSxPQUFPO2dCQUFXLFNBQVMsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUztZQUFTO1FBQ3hFO0lBQ0o7SUFDQSxJQUFJLFNBQVMsRUFBRSxPQUFPLEVBQUU7UUFDcEIsT0FBTyxJQUFJLFNBQVM7WUFDaEIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLFdBQVc7Z0JBQUUsT0FBTztnQkFBVyxTQUFTLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVM7WUFBUztRQUN4RTtJQUNKO0lBQ0EsT0FBTyxHQUFHLEVBQUUsT0FBTyxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxTQUFTO1lBQ2hCLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFDWixhQUFhO2dCQUFFLE9BQU87Z0JBQUssU0FBUyxDQUFBLEdBQUEsc0JBQVEsRUFBRSxTQUFTO1lBQVM7UUFDcEU7SUFDSjtJQUNBLFNBQVMsT0FBTyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHO0lBQ3ZCO0FBQ0o7QUFDQSxTQUFTLFNBQVMsQ0FBQyxRQUFRO0lBQ3ZCLE9BQU8sSUFBSSxTQUFTO1FBQ2hCLE1BQU07UUFDTixXQUFXO1FBQ1gsV0FBVztRQUNYLGFBQWE7UUFDYixVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxTQUFTLGVBQWUsTUFBTTtJQUMxQixJQUFJLGtCQUFrQixXQUFXO1FBQzdCLE1BQU0sV0FBVyxDQUFDO1FBQ2xCLElBQUssTUFBTSxPQUFPLE9BQU8sTUFBTztZQUM1QixNQUFNLGNBQWMsT0FBTyxLQUFLLENBQUMsSUFBSTtZQUNyQyxRQUFRLENBQUMsSUFBSSxHQUFHLFlBQVksT0FBTyxlQUFlO1FBQ3REO1FBQ0EsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxPQUFPLElBQUk7WUFDZCxPQUFPLElBQU07UUFDakI7SUFDSixPQUNLLElBQUksa0JBQWtCLFVBQ3ZCLE9BQU8sSUFBSSxTQUFTO1FBQ2hCLEdBQUcsT0FBTyxJQUFJO1FBQ2QsTUFBTSxlQUFlLE9BQU87SUFDaEM7U0FFQyxJQUFJLGtCQUFrQixhQUN2QixPQUFPLFlBQVksT0FBTyxlQUFlLE9BQU87U0FFL0MsSUFBSSxrQkFBa0IsYUFDdkIsT0FBTyxZQUFZLE9BQU8sZUFBZSxPQUFPO1NBRS9DLElBQUksa0JBQWtCLFVBQ3ZCLE9BQU8sU0FBUyxPQUFPLE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBUyxlQUFlO1NBR2pFLE9BQU87QUFFZjtBQUNPLE1BQU0sa0JBQWtCO0lBQzNCLGFBQWM7UUFDVixLQUFLLElBQUk7UUFDVCxJQUFJLENBQUMsVUFBVTtRQUNmOzs7U0FHQyxHQUNELElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQztRQUN0QixVQUFVO1FBQ1Ysc0NBQXNDO1FBQ3RDLHFDQUFxQztRQUNyQyw2RUFBNkU7UUFDN0UscUNBQXFDO1FBQ3JDLGlDQUFpQztRQUNqQyxvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixvQ0FBb0M7UUFDcEMsNEVBQTRFO1FBQzVFLG9DQUFvQztRQUNwQyxnQ0FBZ0M7UUFDaEMsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixPQUFPO1FBQ1AsS0FBSztRQUNMLCtCQUErQjtRQUMvQixnQkFBZ0I7UUFDaEIsa0NBQWtDO1FBQ2xDLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGFBQWE7UUFDYixNQUFNO1FBQ04sMkJBQTJCO1FBQzNCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIsOEJBQThCO1FBQzlCLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsZUFBZTtRQUNmLElBQUk7UUFDSjs7WUFFSSxHQUNKLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQztJQUN4QjtJQUNBLGFBQWE7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLE1BQ2pCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLE1BQU0sUUFBUSxJQUFJLENBQUMsS0FBSztRQUN4QixNQUFNLE9BQU8sQ0FBQSxHQUFBLFlBQUcsRUFBRSxXQUFXO1FBQzdCLElBQUksQ0FBQyxVQUFVO1lBQUU7WUFBTztRQUFLO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCO0lBQ0EsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLGFBQWEsSUFBSSxDQUFDLFNBQVM7UUFDakMsSUFBSSxlQUFlLENBQUEsR0FBQSxxQkFBWSxFQUFFLFFBQVE7WUFDckMsTUFBTSxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7WUFDakMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7Z0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7Z0JBQ25CLFVBQVUsQ0FBQSxHQUFBLHFCQUFZLEVBQUU7Z0JBQ3hCLFVBQVUsSUFBSTtZQUNsQjtZQUNBLE9BQU8sR0FBQTtRQUNYO1FBQ0EsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ2pELE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDeEMsTUFBTSxZQUFZLEVBQUU7UUFDcEIsSUFBSSxDQUFFLENBQUEsSUFBSSxDQUFDLEtBQUssb0JBQW9CLFlBQVksSUFBSSxDQUFDLEtBQUssZ0JBQWdCLE9BQU0sR0FBSTtZQUNoRixJQUFLLE1BQU0sT0FBTyxJQUFJLEtBQ2xCLElBQUksQ0FBQyxVQUFVLFNBQVMsTUFDcEIsVUFBVSxLQUFLO1FBRzNCO1FBQ0EsTUFBTSxRQUFRLEVBQUU7UUFDaEIsS0FBSyxNQUFNLE9BQU8sVUFBVztZQUN6QixNQUFNLGVBQWUsS0FBSyxDQUFDLElBQUk7WUFDL0IsTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLElBQUk7WUFDM0IsTUFBTSxLQUFLO2dCQUNQLEtBQUs7b0JBQUUsUUFBUTtvQkFBUyxPQUFPO2dCQUFJO2dCQUNuQyxPQUFPLGFBQWEsT0FBTyxJQUFJLG1CQUFtQixLQUFLLE9BQU8sSUFBSSxNQUFNO2dCQUN4RSxXQUFXLE9BQU8sSUFBSTtZQUMxQjtRQUNKO1FBQ0EsSUFBSSxJQUFJLENBQUMsS0FBSyxvQkFBb0IsVUFBVTtZQUN4QyxNQUFNLGNBQWMsSUFBSSxDQUFDLEtBQUs7WUFDOUIsSUFBSSxnQkFBZ0IsZUFDaEIsS0FBSyxNQUFNLE9BQU8sVUFDZCxNQUFNLEtBQUs7Z0JBQ1AsS0FBSztvQkFBRSxRQUFRO29CQUFTLE9BQU87Z0JBQUk7Z0JBQ25DLE9BQU87b0JBQUUsUUFBUTtvQkFBUyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUk7Z0JBQUM7WUFDbkQ7aUJBR0gsSUFBSSxnQkFBZ0IsVUFDckI7Z0JBQUEsSUFBSSxVQUFVLFNBQVMsR0FBRztvQkFDdEIsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7d0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7d0JBQ25CLE1BQU07b0JBQ1Y7b0JBQ0EsT0FBTztnQkFDWDtZQUFBLE9BRUMsSUFBSSxnQkFBZ0I7aUJBR3JCLE1BQU0sSUFBSSxNQUFNLENBQUMsb0RBQW9ELENBQUM7UUFFOUUsT0FDSztZQUNELDBCQUEwQjtZQUMxQixNQUFNLFdBQVcsSUFBSSxDQUFDLEtBQUs7WUFDM0IsS0FBSyxNQUFNLE9BQU8sVUFBVztnQkFDekIsTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLElBQUk7Z0JBQzNCLE1BQU0sS0FBSztvQkFDUCxLQUFLO3dCQUFFLFFBQVE7d0JBQVMsT0FBTztvQkFBSTtvQkFDbkMsT0FBTyxTQUFTLE9BQU8sSUFBSSxtQkFBbUIsS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLLCtDQUErQzs7b0JBRXhILFdBQVcsT0FBTyxJQUFJO2dCQUMxQjtZQUNKO1FBQ0o7UUFDQSxJQUFJLElBQUksT0FBTyxPQUNYLE9BQU8sUUFBUSxVQUNWLEtBQUs7WUFDTixNQUFNLFlBQVksRUFBRTtZQUNwQixLQUFLLE1BQU0sUUFBUSxNQUFPO2dCQUN0QixNQUFNLE1BQU0sTUFBTSxLQUFLO2dCQUN2QixNQUFNLFFBQVEsTUFBTSxLQUFLO2dCQUN6QixVQUFVLEtBQUs7b0JBQ1g7b0JBQ0E7b0JBQ0EsV0FBVyxLQUFLO2dCQUNwQjtZQUNKO1lBQ0EsT0FBTztRQUNYLEdBQ0ssS0FBSyxDQUFDO1lBQ1AsT0FBTyxDQUFBLEdBQUEsd0JBQVUsRUFBRSxnQkFBZ0IsUUFBUTtRQUMvQzthQUdBLE9BQU8sQ0FBQSxHQUFBLHdCQUFVLEVBQUUsZ0JBQWdCLFFBQVE7SUFFbkQ7SUFDQSxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0lBQ0EsT0FBTyxPQUFPLEVBQUU7UUFDWixDQUFBLEdBQUEsc0JBQVEsRUFBRTtRQUNWLE9BQU8sSUFBSSxVQUFVO1lBQ2pCLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFDWixhQUFhO1lBQ2IsR0FBSSxZQUFZLFlBQ1Y7Z0JBQ0UsVUFBVSxDQUFDLE9BQU87b0JBQ2QsTUFBTSxlQUFlLElBQUksQ0FBQyxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsSUFBSTtvQkFDckUsSUFBSSxNQUFNLFNBQVMscUJBQ2YsT0FBTzt3QkFDSCxTQUFTLENBQUEsR0FBQSxzQkFBUSxFQUFFLFNBQVMsU0FBUyxXQUFXO29CQUNwRDtvQkFDSixPQUFPO3dCQUNILFNBQVM7b0JBQ2I7Z0JBQ0o7WUFDSixJQUNFLENBQUMsQ0FBQztRQUNaO0lBQ0o7SUFDQSxRQUFRO1FBQ0osT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLGFBQWE7UUFDakI7SUFDSjtJQUNBLGNBQWM7UUFDVixPQUFPLElBQUksVUFBVTtZQUNqQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osYUFBYTtRQUNqQjtJQUNKO0lBQ0EseUJBQXlCO0lBQ3pCLDRDQUE0QztJQUM1Qyx3Q0FBd0M7SUFDeEMsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQiwyREFBMkQ7SUFDM0QsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxPQUFPLFlBQVksRUFBRTtRQUNqQixPQUFPLElBQUksVUFBVTtZQUNqQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osT0FBTyxJQUFPLENBQUE7b0JBQ1YsR0FBRyxJQUFJLENBQUMsS0FBSyxPQUFPO29CQUNwQixHQUFHLFlBQVk7Z0JBQ25CLENBQUE7UUFDSjtJQUNKO0lBQ0E7Ozs7S0FJQyxHQUNELE1BQU0sT0FBTyxFQUFFO1FBQ1gsTUFBTSxTQUFTLElBQUksVUFBVTtZQUN6QixhQUFhLFFBQVEsS0FBSztZQUMxQixVQUFVLFFBQVEsS0FBSztZQUN2QixPQUFPLElBQU8sQ0FBQTtvQkFDVixHQUFHLElBQUksQ0FBQyxLQUFLLE9BQU87b0JBQ3BCLEdBQUcsUUFBUSxLQUFLLE9BQU87Z0JBQzNCLENBQUE7WUFDQSxVQUFVLHNCQUFzQjtRQUNwQztRQUNBLE9BQU87SUFDWDtJQUNBLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsNENBQTRDO0lBQzVDLHdCQUF3QjtJQUN4Qiw2RUFBNkU7SUFDN0UscUNBQXFDO0lBQ3JDLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsNEVBQTRFO0lBQzVFLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sS0FBSztJQUNMLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsMkRBQTJEO0lBQzNELHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGFBQWE7SUFDYixNQUFNO0lBQ04sd0NBQXdDO0lBQ3hDLDZDQUE2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLHlFQUF5RTtJQUN6RSxpREFBaUQ7SUFDakQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixJQUFJO0lBQ0osT0FBTyxHQUFHLEVBQUUsTUFBTSxFQUFFO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVE7WUFBRSxDQUFDLElBQUksRUFBRTtRQUFPO0lBQ3hDO0lBQ0Esd0NBQXdDO0lBQ3hDLHNCQUFzQjtJQUN0QixpRkFBaUY7SUFDakYsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxxQ0FBcUM7SUFDckMsaUNBQWlDO0lBQ2pDLE1BQU07SUFDTixtREFBbUQ7SUFDbkQsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLDZDQUE2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLHlFQUF5RTtJQUN6RSxpREFBaUQ7SUFDakQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixJQUFJO0lBQ0osU0FBUyxLQUFLLEVBQUU7UUFDWixPQUFPLElBQUksVUFBVTtZQUNqQixHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osVUFBVTtRQUNkO0lBQ0o7SUFDQSxLQUFLLElBQUksRUFBRTtRQUNQLE1BQU0sUUFBUSxDQUFDO1FBQ2YsS0FBSyxNQUFNLE9BQU8sQ0FBQSxHQUFBLFlBQUcsRUFBRSxXQUFXLE1BQzlCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDNUIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7UUFHcEMsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLE9BQU8sSUFBTTtRQUNqQjtJQUNKO0lBQ0EsS0FBSyxJQUFJLEVBQUU7UUFDUCxNQUFNLFFBQVEsQ0FBQztRQUNmLEtBQUssTUFBTSxPQUFPLENBQUEsR0FBQSxZQUFHLEVBQUUsV0FBVyxJQUFJLENBQUMsT0FDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ1YsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7UUFHcEMsT0FBTyxJQUFJLFVBQVU7WUFDakIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLE9BQU8sSUFBTTtRQUNqQjtJQUNKO0lBQ0E7O0tBRUMsR0FDRCxjQUFjO1FBQ1YsT0FBTyxlQUFlLElBQUk7SUFDOUI7SUFDQSxRQUFRLElBQUksRUFBRTtRQUNWLE1BQU0sV0FBVyxDQUFDO1FBQ2xCLEtBQUssTUFBTSxPQUFPLENBQUEsR0FBQSxZQUFHLEVBQUUsV0FBVyxJQUFJLENBQUMsT0FBUTtZQUMzQyxNQUFNLGNBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ25DLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ2xCLFFBQVEsQ0FBQyxJQUFJLEdBQUc7aUJBR2hCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsWUFBWTtRQUVwQztRQUNBLE9BQU8sSUFBSSxVQUFVO1lBQ2pCLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFDWixPQUFPLElBQU07UUFDakI7SUFDSjtJQUNBLFNBQVMsSUFBSSxFQUFFO1FBQ1gsTUFBTSxXQUFXLENBQUM7UUFDbEIsS0FBSyxNQUFNLE9BQU8sQ0FBQSxHQUFBLFlBQUcsRUFBRSxXQUFXLElBQUksQ0FBQyxPQUNuQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUNsQixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTthQUU5QjtZQUNELE1BQU0sY0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDbkMsSUFBSSxXQUFXO1lBQ2YsTUFBTyxvQkFBb0IsWUFDdkIsV0FBVyxTQUFTLEtBQUs7WUFFN0IsUUFBUSxDQUFDLElBQUksR0FBRztRQUNwQjtRQUVKLE9BQU8sSUFBSSxVQUFVO1lBQ2pCLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFDWixPQUFPLElBQU07UUFDakI7SUFDSjtJQUNBLFFBQVE7UUFDSixPQUFPLGNBQWMsQ0FBQSxHQUFBLFlBQUcsRUFBRSxXQUFXLElBQUksQ0FBQztJQUM5QztBQUNKO0FBQ0EsVUFBVSxTQUFTLENBQUMsT0FBTztJQUN2QixPQUFPLElBQUksVUFBVTtRQUNqQixPQUFPLElBQU07UUFDYixhQUFhO1FBQ2IsVUFBVSxTQUFTO1FBQ25CLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNBLFVBQVUsZUFBZSxDQUFDLE9BQU87SUFDN0IsT0FBTyxJQUFJLFVBQVU7UUFDakIsT0FBTyxJQUFNO1FBQ2IsYUFBYTtRQUNiLFVBQVUsU0FBUztRQUNuQixVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxVQUFVLGFBQWEsQ0FBQyxPQUFPO0lBQzNCLE9BQU8sSUFBSSxVQUFVO1FBQ2pCO1FBQ0EsYUFBYTtRQUNiLFVBQVUsU0FBUztRQUNuQixVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDTyxNQUFNLGlCQUFpQjtJQUMxQixPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ3pDLE1BQU0sVUFBVSxJQUFJLENBQUMsS0FBSztRQUMxQixTQUFTLGNBQWMsT0FBTztZQUMxQixrREFBa0Q7WUFDbEQsS0FBSyxNQUFNLFVBQVUsUUFBUztnQkFDMUIsSUFBSSxPQUFPLE9BQU8sV0FBVyxTQUN6QixPQUFPLE9BQU87WUFFdEI7WUFDQSxLQUFLLE1BQU0sVUFBVSxRQUNqQixJQUFJLE9BQU8sT0FBTyxXQUFXLFNBQVM7Z0JBQ2xDLCtCQUErQjtnQkFDL0IsSUFBSSxPQUFPLE9BQU8sUUFBUSxPQUFPLElBQUksT0FBTztnQkFDNUMsT0FBTyxPQUFPO1lBQ2xCO1lBRUosaUJBQWlCO1lBQ2pCLE1BQU0sY0FBYyxRQUFRLElBQUksQ0FBQyxTQUFXLElBQUksQ0FBQSxHQUFBLG9CQUFPLEVBQUUsT0FBTyxJQUFJLE9BQU87WUFDM0UsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7Z0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7Z0JBQ25CO1lBQ0o7WUFDQSxPQUFPLEdBQUE7UUFDWDtRQUNBLElBQUksSUFBSSxPQUFPLE9BQ1gsT0FBTyxRQUFRLElBQUksUUFBUSxJQUFJLE9BQU87WUFDbEMsTUFBTSxXQUFXO2dCQUNiLEdBQUcsR0FBRztnQkFDTixRQUFRO29CQUNKLEdBQUcsSUFBSSxNQUFNO29CQUNiLFFBQVEsRUFBRTtnQkFDZDtnQkFDQSxRQUFRO1lBQ1o7WUFDQSxPQUFPO2dCQUNILFFBQVEsTUFBTSxPQUFPLFlBQVk7b0JBQzdCLE1BQU0sSUFBSTtvQkFDVixNQUFNLElBQUk7b0JBQ1YsUUFBUTtnQkFDWjtnQkFDQSxLQUFLO1lBQ1Q7UUFDSixJQUFJLEtBQUs7YUFFUjtZQUNELElBQUksUUFBUTtZQUNaLE1BQU0sU0FBUyxFQUFFO1lBQ2pCLEtBQUssTUFBTSxVQUFVLFFBQVM7Z0JBQzFCLE1BQU0sV0FBVztvQkFDYixHQUFHLEdBQUc7b0JBQ04sUUFBUTt3QkFDSixHQUFHLElBQUksTUFBTTt3QkFDYixRQUFRLEVBQUU7b0JBQ2Q7b0JBQ0EsUUFBUTtnQkFDWjtnQkFDQSxNQUFNLFNBQVMsT0FBTyxXQUFXO29CQUM3QixNQUFNLElBQUk7b0JBQ1YsTUFBTSxJQUFJO29CQUNWLFFBQVE7Z0JBQ1o7Z0JBQ0EsSUFBSSxPQUFPLFdBQVcsU0FDbEIsT0FBTztxQkFFTixJQUFJLE9BQU8sV0FBVyxXQUFXLENBQUMsT0FDbkMsUUFBUTtvQkFBRTtvQkFBUSxLQUFLO2dCQUFTO2dCQUVwQyxJQUFJLFNBQVMsT0FBTyxPQUFPLFFBQ3ZCLE9BQU8sS0FBSyxTQUFTLE9BQU87WUFFcEM7WUFDQSxJQUFJLE9BQU87Z0JBQ1AsSUFBSSxPQUFPLE9BQU8sUUFBUSxNQUFNLElBQUksT0FBTztnQkFDM0MsT0FBTyxNQUFNO1lBQ2pCO1lBQ0EsTUFBTSxjQUFjLE9BQU8sSUFBSSxDQUFDLFNBQVcsSUFBSSxDQUFBLEdBQUEsb0JBQU8sRUFBRTtZQUN4RCxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztnQkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtnQkFDbkI7WUFDSjtZQUNBLE9BQU8sR0FBQTtRQUNYO0lBQ0o7SUFDQSxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0FBQ0o7QUFDQSxTQUFTLFNBQVMsQ0FBQyxPQUFPO0lBQ3RCLE9BQU8sSUFBSSxTQUFTO1FBQ2hCLFNBQVM7UUFDVCxVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQsTUFBTSxtQkFBbUIsQ0FBQztJQUN0QixJQUFJLGdCQUFnQixTQUNoQixPQUFPLGlCQUFpQixLQUFLO1NBRTVCLElBQUksZ0JBQWdCLFlBQ3JCLE9BQU8saUJBQWlCLEtBQUs7U0FFNUIsSUFBSSxnQkFBZ0IsWUFDckIsT0FBTztRQUFDLEtBQUs7S0FBTTtTQUVsQixJQUFJLGdCQUFnQixTQUNyQixPQUFPLEtBQUs7U0FFWCxJQUFJLGdCQUFnQixlQUNyQixtQ0FBbUM7SUFDbkMsT0FBTyxDQUFBLEdBQUEsWUFBRyxFQUFFLGFBQWEsS0FBSztTQUU3QixJQUFJLGdCQUFnQixZQUNyQixPQUFPLGlCQUFpQixLQUFLLEtBQUs7U0FFakMsSUFBSSxnQkFBZ0IsY0FDckIsT0FBTztRQUFDO0tBQVU7U0FFakIsSUFBSSxnQkFBZ0IsU0FDckIsT0FBTztRQUFDO0tBQUs7U0FFWixJQUFJLGdCQUFnQixhQUNyQixPQUFPO1FBQUM7V0FBYyxpQkFBaUIsS0FBSztLQUFVO1NBRXJELElBQUksZ0JBQWdCLGFBQ3JCLE9BQU87UUFBQztXQUFTLGlCQUFpQixLQUFLO0tBQVU7U0FFaEQsSUFBSSxnQkFBZ0IsWUFDckIsT0FBTyxpQkFBaUIsS0FBSztTQUU1QixJQUFJLGdCQUFnQixhQUNyQixPQUFPLGlCQUFpQixLQUFLO1NBRTVCLElBQUksZ0JBQWdCLFVBQ3JCLE9BQU8saUJBQWlCLEtBQUssS0FBSztTQUdsQyxPQUFPLEVBQUU7QUFFakI7QUFDTyxNQUFNLDhCQUE4QjtJQUN2QyxPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ3pDLElBQUksSUFBSSxlQUFlLENBQUEsR0FBQSxxQkFBWSxFQUFFLFFBQVE7WUFDekMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7Z0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7Z0JBQ25CLFVBQVUsQ0FBQSxHQUFBLHFCQUFZLEVBQUU7Z0JBQ3hCLFVBQVUsSUFBSTtZQUNsQjtZQUNBLE9BQU8sR0FBQTtRQUNYO1FBQ0EsTUFBTSxnQkFBZ0IsSUFBSSxDQUFDO1FBQzNCLE1BQU0scUJBQXFCLElBQUksSUFBSSxDQUFDLGNBQWM7UUFDbEQsTUFBTSxTQUFTLElBQUksQ0FBQyxXQUFXLElBQUk7UUFDbkMsSUFBSSxDQUFDLFFBQVE7WUFDVCxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztnQkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtnQkFDbkIsU0FBUyxNQUFNLEtBQUssSUFBSSxDQUFDLFdBQVc7Z0JBQ3BDLE1BQU07b0JBQUM7aUJBQWM7WUFDekI7WUFDQSxPQUFPLEdBQUE7UUFDWDtRQUNBLElBQUksSUFBSSxPQUFPLE9BQ1gsT0FBTyxPQUFPLFlBQVk7WUFDdEIsTUFBTSxJQUFJO1lBQ1YsTUFBTSxJQUFJO1lBQ1YsUUFBUTtRQUNaO2FBR0EsT0FBTyxPQUFPLFdBQVc7WUFDckIsTUFBTSxJQUFJO1lBQ1YsTUFBTSxJQUFJO1lBQ1YsUUFBUTtRQUNaO0lBRVI7SUFDQSxJQUFJLGdCQUFnQjtRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBLElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckI7SUFDQTs7Ozs7OztLQU9DLEdBQ0QsT0FBTyxPQUFPLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO1FBQzFDLHlDQUF5QztRQUN6QyxNQUFNLGFBQWEsSUFBSTtRQUN2QixRQUFRO1FBQ1IsS0FBSyxNQUFNLFFBQVEsUUFBUztZQUN4QixNQUFNLHNCQUFzQixpQkFBaUIsS0FBSyxLQUFLLENBQUMsY0FBYztZQUN0RSxJQUFJLENBQUMsb0JBQW9CLFFBQ3JCLE1BQU0sSUFBSSxNQUFNLENBQUMsZ0NBQWdDLEVBQUUsY0FBYyxpREFBaUQsQ0FBQztZQUV2SCxLQUFLLE1BQU0sU0FBUyxvQkFBcUI7Z0JBQ3JDLElBQUksV0FBVyxJQUFJLFFBQ2YsTUFBTSxJQUFJLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLGVBQWUscUJBQXFCLEVBQUUsT0FBTyxPQUFPLENBQUM7Z0JBRTFHLFdBQVcsSUFBSSxPQUFPO1lBQzFCO1FBQ0o7UUFDQSxPQUFPLElBQUksc0JBQXNCO1lBQzdCLFVBQVUsc0JBQXNCO1lBQ2hDO1lBQ0E7WUFDQTtZQUNBLEdBQUcsb0JBQW9CLE9BQU87UUFDbEM7SUFDSjtBQUNKO0FBQ0EsU0FBUyxZQUFZLENBQUMsRUFBRSxDQUFDO0lBQ3JCLE1BQU0sUUFBUSxDQUFBLEdBQUEscUJBQVksRUFBRTtJQUM1QixNQUFNLFFBQVEsQ0FBQSxHQUFBLHFCQUFZLEVBQUU7SUFDNUIsSUFBSSxNQUFNLEdBQ04sT0FBTztRQUFFLE9BQU87UUFBTSxNQUFNO0lBQUU7U0FFN0IsSUFBSSxVQUFVLENBQUEsR0FBQSxxQkFBWSxFQUFFLFVBQVUsVUFBVSxDQUFBLEdBQUEscUJBQVksRUFBRSxRQUFRO1FBQ3ZFLE1BQU0sUUFBUSxDQUFBLEdBQUEsWUFBRyxFQUFFLFdBQVc7UUFDOUIsTUFBTSxhQUFhLENBQUEsR0FBQSxZQUFHLEVBQUUsV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFRLE1BQU0sUUFBUSxTQUFTO1FBQzdFLE1BQU0sU0FBUztZQUFFLEdBQUcsQ0FBQztZQUFFLEdBQUcsQ0FBQztRQUFDO1FBQzVCLEtBQUssTUFBTSxPQUFPLFdBQVk7WUFDMUIsTUFBTSxjQUFjLFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtZQUM5QyxJQUFJLENBQUMsWUFBWSxPQUNiLE9BQU87Z0JBQUUsT0FBTztZQUFNO1lBRTFCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsWUFBWTtRQUM5QjtRQUNBLE9BQU87WUFBRSxPQUFPO1lBQU0sTUFBTTtRQUFPO0lBQ3ZDLE9BQ0ssSUFBSSxVQUFVLENBQUEsR0FBQSxxQkFBWSxFQUFFLFNBQVMsVUFBVSxDQUFBLEdBQUEscUJBQVksRUFBRSxPQUFPO1FBQ3JFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFDZixPQUFPO1lBQUUsT0FBTztRQUFNO1FBRTFCLE1BQU0sV0FBVyxFQUFFO1FBQ25CLElBQUssSUFBSSxRQUFRLEdBQUcsUUFBUSxFQUFFLFFBQVEsUUFBUztZQUMzQyxNQUFNLFFBQVEsQ0FBQyxDQUFDLE1BQU07WUFDdEIsTUFBTSxRQUFRLENBQUMsQ0FBQyxNQUFNO1lBQ3RCLE1BQU0sY0FBYyxZQUFZLE9BQU87WUFDdkMsSUFBSSxDQUFDLFlBQVksT0FDYixPQUFPO2dCQUFFLE9BQU87WUFBTTtZQUUxQixTQUFTLEtBQUssWUFBWTtRQUM5QjtRQUNBLE9BQU87WUFBRSxPQUFPO1lBQU0sTUFBTTtRQUFTO0lBQ3pDLE9BQ0ssSUFBSSxVQUFVLENBQUEsR0FBQSxxQkFBWSxFQUFFLFFBQVEsVUFBVSxDQUFBLEdBQUEscUJBQVksRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQzdFLE9BQU87UUFBRSxPQUFPO1FBQU0sTUFBTTtJQUFFO1NBRzlCLE9BQU87UUFBRSxPQUFPO0lBQU07QUFFOUI7QUFDTyxNQUFNLHdCQUF3QjtJQUNqQyxPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjtRQUNqRCxNQUFNLGVBQWUsQ0FBQyxZQUFZO1lBQzlCLElBQUksQ0FBQSxHQUFBLHNCQUFRLEVBQUUsZUFBZSxDQUFBLEdBQUEsc0JBQVEsRUFBRSxjQUNuQyxPQUFPLEdBQUE7WUFFWCxNQUFNLFNBQVMsWUFBWSxXQUFXLE9BQU8sWUFBWTtZQUN6RCxJQUFJLENBQUMsT0FBTyxPQUFPO2dCQUNmLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO29CQUNuQixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO2dCQUN2QjtnQkFDQSxPQUFPLEdBQUE7WUFDWDtZQUNBLElBQUksQ0FBQSxHQUFBLG9CQUFNLEVBQUUsZUFBZSxDQUFBLEdBQUEsb0JBQU0sRUFBRSxjQUMvQixPQUFPO1lBRVgsT0FBTztnQkFBRSxRQUFRLE9BQU87Z0JBQU8sT0FBTyxPQUFPO1lBQUs7UUFDdEQ7UUFDQSxJQUFJLElBQUksT0FBTyxPQUNYLE9BQU8sUUFBUSxJQUFJO1lBQ2YsSUFBSSxDQUFDLEtBQUssS0FBSyxZQUFZO2dCQUN2QixNQUFNLElBQUk7Z0JBQ1YsTUFBTSxJQUFJO2dCQUNWLFFBQVE7WUFDWjtZQUNBLElBQUksQ0FBQyxLQUFLLE1BQU0sWUFBWTtnQkFDeEIsTUFBTSxJQUFJO2dCQUNWLE1BQU0sSUFBSTtnQkFDVixRQUFRO1lBQ1o7U0FDSCxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sTUFBTSxHQUFLLGFBQWEsTUFBTTthQUc5QyxPQUFPLGFBQWEsSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXO1lBQzFDLE1BQU0sSUFBSTtZQUNWLE1BQU0sSUFBSTtZQUNWLFFBQVE7UUFDWixJQUFJLElBQUksQ0FBQyxLQUFLLE1BQU0sV0FBVztZQUMzQixNQUFNLElBQUk7WUFDVixNQUFNLElBQUk7WUFDVixRQUFRO1FBQ1o7SUFFUjtBQUNKO0FBQ0EsZ0JBQWdCLFNBQVMsQ0FBQyxNQUFNLE9BQU87SUFDbkMsT0FBTyxJQUFJLGdCQUFnQjtRQUN2QixNQUFNO1FBQ04sT0FBTztRQUNQLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUVPLE1BQU0saUJBQWlCO0lBQzFCLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ2pELElBQUksSUFBSSxlQUFlLENBQUEsR0FBQSxxQkFBWSxFQUFFLE9BQU87WUFDeEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7Z0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7Z0JBQ25CLFVBQVUsQ0FBQSxHQUFBLHFCQUFZLEVBQUU7Z0JBQ3hCLFVBQVUsSUFBSTtZQUNsQjtZQUNBLE9BQU8sR0FBQTtRQUNYO1FBQ0EsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLENBQUMsS0FBSyxNQUFNLFFBQVE7WUFDMUMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7Z0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7Z0JBQ25CLFNBQVMsSUFBSSxDQUFDLEtBQUssTUFBTTtnQkFDekIsV0FBVztnQkFDWCxPQUFPO2dCQUNQLE1BQU07WUFDVjtZQUNBLE9BQU8sR0FBQTtRQUNYO1FBQ0EsTUFBTSxPQUFPLElBQUksQ0FBQyxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxTQUFTLElBQUksQ0FBQyxLQUFLLE1BQU0sUUFBUTtZQUNuRCxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztnQkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtnQkFDbkIsU0FBUyxJQUFJLENBQUMsS0FBSyxNQUFNO2dCQUN6QixXQUFXO2dCQUNYLE9BQU87Z0JBQ1AsTUFBTTtZQUNWO1lBQ0EsT0FBTztRQUNYO1FBQ0EsTUFBTSxRQUFRO2VBQUksSUFBSTtTQUFLLENBQ3RCLElBQUksQ0FBQyxNQUFNO1lBQ1osTUFBTSxTQUFTLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUs7WUFDdkQsSUFBSSxDQUFDLFFBQ0QsT0FBTztZQUNYLE9BQU8sT0FBTyxPQUFPLElBQUksbUJBQW1CLEtBQUssTUFBTSxJQUFJLE1BQU07UUFDckUsR0FDSyxPQUFPLENBQUMsSUFBTSxDQUFDLENBQUMsSUFBSSxlQUFlO1FBQ3hDLElBQUksSUFBSSxPQUFPLE9BQ1gsT0FBTyxRQUFRLElBQUksT0FBTyxLQUFLLENBQUM7WUFDNUIsT0FBTyxDQUFBLEdBQUEsd0JBQVUsRUFBRSxXQUFXLFFBQVE7UUFDMUM7YUFHQSxPQUFPLENBQUEsR0FBQSx3QkFBVSxFQUFFLFdBQVcsUUFBUTtJQUU5QztJQUNBLElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckI7SUFDQSxLQUFLLElBQUksRUFBRTtRQUNQLE9BQU8sSUFBSSxTQUFTO1lBQ2hCLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFDWjtRQUNKO0lBQ0o7QUFDSjtBQUNBLFNBQVMsU0FBUyxDQUFDLFNBQVM7SUFDeEIsSUFBSSxDQUFDLE1BQU0sUUFBUSxVQUNmLE1BQU0sSUFBSSxNQUFNO0lBRXBCLE9BQU8sSUFBSSxTQUFTO1FBQ2hCLE9BQU87UUFDUCxVQUFVLHNCQUFzQjtRQUNoQyxNQUFNO1FBQ04sR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ08sTUFBTSxrQkFBa0I7SUFDM0IsSUFBSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBLElBQUksY0FBYztRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckI7SUFDQSxPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjtRQUNqRCxJQUFJLElBQUksZUFBZSxDQUFBLEdBQUEscUJBQVksRUFBRSxRQUFRO1lBQ3pDLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO2dCQUNuQixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO2dCQUNuQixVQUFVLENBQUEsR0FBQSxxQkFBWSxFQUFFO2dCQUN4QixVQUFVLElBQUk7WUFDbEI7WUFDQSxPQUFPLEdBQUE7UUFDWDtRQUNBLE1BQU0sUUFBUSxFQUFFO1FBQ2hCLE1BQU0sVUFBVSxJQUFJLENBQUMsS0FBSztRQUMxQixNQUFNLFlBQVksSUFBSSxDQUFDLEtBQUs7UUFDNUIsSUFBSyxNQUFNLE9BQU8sSUFBSSxLQUNsQixNQUFNLEtBQUs7WUFDUCxLQUFLLFFBQVEsT0FBTyxJQUFJLG1CQUFtQixLQUFLLEtBQUssSUFBSSxNQUFNO1lBQy9ELE9BQU8sVUFBVSxPQUFPLElBQUksbUJBQW1CLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksTUFBTTtZQUM3RSxXQUFXLE9BQU8sSUFBSTtRQUMxQjtRQUVKLElBQUksSUFBSSxPQUFPLE9BQ1gsT0FBTyxDQUFBLEdBQUEsd0JBQVUsRUFBRSxpQkFBaUIsUUFBUTthQUc1QyxPQUFPLENBQUEsR0FBQSx3QkFBVSxFQUFFLGdCQUFnQixRQUFRO0lBRW5EO0lBQ0EsSUFBSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBLE9BQU8sT0FBTyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUNoQyxJQUFJLGtCQUFrQixTQUNsQixPQUFPLElBQUksVUFBVTtZQUNqQixTQUFTO1lBQ1QsV0FBVztZQUNYLFVBQVUsc0JBQXNCO1lBQ2hDLEdBQUcsb0JBQW9CLE1BQU07UUFDakM7UUFFSixPQUFPLElBQUksVUFBVTtZQUNqQixTQUFTLFVBQVU7WUFDbkIsV0FBVztZQUNYLFVBQVUsc0JBQXNCO1lBQ2hDLEdBQUcsb0JBQW9CLE9BQU87UUFDbEM7SUFDSjtBQUNKO0FBQ08sTUFBTSxlQUFlO0lBQ3hCLElBQUksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckI7SUFDQSxJQUFJLGNBQWM7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0lBQ0EsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0I7UUFDakQsSUFBSSxJQUFJLGVBQWUsQ0FBQSxHQUFBLHFCQUFZLEVBQUUsS0FBSztZQUN0QyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztnQkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtnQkFDbkIsVUFBVSxDQUFBLEdBQUEscUJBQVksRUFBRTtnQkFDeEIsVUFBVSxJQUFJO1lBQ2xCO1lBQ0EsT0FBTyxHQUFBO1FBQ1g7UUFDQSxNQUFNLFVBQVUsSUFBSSxDQUFDLEtBQUs7UUFDMUIsTUFBTSxZQUFZLElBQUksQ0FBQyxLQUFLO1FBQzVCLE1BQU0sUUFBUTtlQUFJLElBQUksS0FBSztTQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDckQsT0FBTztnQkFDSCxLQUFLLFFBQVEsT0FBTyxJQUFJLG1CQUFtQixLQUFLLEtBQUssSUFBSSxNQUFNO29CQUFDO29CQUFPO2lCQUFNO2dCQUM3RSxPQUFPLFVBQVUsT0FBTyxJQUFJLG1CQUFtQixLQUFLLE9BQU8sSUFBSSxNQUFNO29CQUFDO29CQUFPO2lCQUFRO1lBQ3pGO1FBQ0o7UUFDQSxJQUFJLElBQUksT0FBTyxPQUFPO1lBQ2xCLE1BQU0sV0FBVyxJQUFJO1lBQ3JCLE9BQU8sUUFBUSxVQUFVLEtBQUs7Z0JBQzFCLEtBQUssTUFBTSxRQUFRLE1BQU87b0JBQ3RCLE1BQU0sTUFBTSxNQUFNLEtBQUs7b0JBQ3ZCLE1BQU0sUUFBUSxNQUFNLEtBQUs7b0JBQ3pCLElBQUksSUFBSSxXQUFXLGFBQWEsTUFBTSxXQUFXLFdBQzdDLE9BQU8sR0FBQTtvQkFFWCxJQUFJLElBQUksV0FBVyxXQUFXLE1BQU0sV0FBVyxTQUMzQyxPQUFPO29CQUVYLFNBQVMsSUFBSSxJQUFJLE9BQU8sTUFBTTtnQkFDbEM7Z0JBQ0EsT0FBTztvQkFBRSxRQUFRLE9BQU87b0JBQU8sT0FBTztnQkFBUztZQUNuRDtRQUNKLE9BQ0s7WUFDRCxNQUFNLFdBQVcsSUFBSTtZQUNyQixLQUFLLE1BQU0sUUFBUSxNQUFPO2dCQUN0QixNQUFNLE1BQU0sS0FBSztnQkFDakIsTUFBTSxRQUFRLEtBQUs7Z0JBQ25CLElBQUksSUFBSSxXQUFXLGFBQWEsTUFBTSxXQUFXLFdBQzdDLE9BQU8sR0FBQTtnQkFFWCxJQUFJLElBQUksV0FBVyxXQUFXLE1BQU0sV0FBVyxTQUMzQyxPQUFPO2dCQUVYLFNBQVMsSUFBSSxJQUFJLE9BQU8sTUFBTTtZQUNsQztZQUNBLE9BQU87Z0JBQUUsUUFBUSxPQUFPO2dCQUFPLE9BQU87WUFBUztRQUNuRDtJQUNKO0FBQ0o7QUFDQSxPQUFPLFNBQVMsQ0FBQyxTQUFTLFdBQVc7SUFDakMsT0FBTyxJQUFJLE9BQU87UUFDZDtRQUNBO1FBQ0EsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ08sTUFBTSxlQUFlO0lBQ3hCLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ2pELElBQUksSUFBSSxlQUFlLENBQUEsR0FBQSxxQkFBWSxFQUFFLEtBQUs7WUFDdEMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7Z0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7Z0JBQ25CLFVBQVUsQ0FBQSxHQUFBLHFCQUFZLEVBQUU7Z0JBQ3hCLFVBQVUsSUFBSTtZQUNsQjtZQUNBLE9BQU8sR0FBQTtRQUNYO1FBQ0EsTUFBTSxNQUFNLElBQUksQ0FBQztRQUNqQixJQUFJLElBQUksWUFBWSxNQUNoQjtZQUFBLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxRQUFRLE9BQU87Z0JBQ25DLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO29CQUNuQixNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO29CQUNuQixTQUFTLElBQUksUUFBUTtvQkFDckIsTUFBTTtvQkFDTixXQUFXO29CQUNYLE9BQU87b0JBQ1AsU0FBUyxJQUFJLFFBQVE7Z0JBQ3pCO2dCQUNBLE9BQU87WUFDWDtRQUFBO1FBRUosSUFBSSxJQUFJLFlBQVksTUFDaEI7WUFBQSxJQUFJLElBQUksS0FBSyxPQUFPLElBQUksUUFBUSxPQUFPO2dCQUNuQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztvQkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtvQkFDbkIsU0FBUyxJQUFJLFFBQVE7b0JBQ3JCLE1BQU07b0JBQ04sV0FBVztvQkFDWCxPQUFPO29CQUNQLFNBQVMsSUFBSSxRQUFRO2dCQUN6QjtnQkFDQSxPQUFPO1lBQ1g7UUFBQTtRQUVKLE1BQU0sWUFBWSxJQUFJLENBQUMsS0FBSztRQUM1QixTQUFTLFlBQVksUUFBUTtZQUN6QixNQUFNLFlBQVksSUFBSTtZQUN0QixLQUFLLE1BQU0sV0FBVyxTQUFVO2dCQUM1QixJQUFJLFFBQVEsV0FBVyxXQUNuQixPQUFPLEdBQUE7Z0JBQ1gsSUFBSSxRQUFRLFdBQVcsU0FDbkIsT0FBTztnQkFDWCxVQUFVLElBQUksUUFBUTtZQUMxQjtZQUNBLE9BQU87Z0JBQUUsUUFBUSxPQUFPO2dCQUFPLE9BQU87WUFBVTtRQUNwRDtRQUNBLE1BQU0sV0FBVztlQUFJLElBQUksS0FBSztTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBTSxVQUFVLE9BQU8sSUFBSSxtQkFBbUIsS0FBSyxNQUFNLElBQUksTUFBTTtRQUN0SCxJQUFJLElBQUksT0FBTyxPQUNYLE9BQU8sUUFBUSxJQUFJLFVBQVUsS0FBSyxDQUFDLFdBQWEsWUFBWTthQUc1RCxPQUFPLFlBQVk7SUFFM0I7SUFDQSxJQUFJLE9BQU8sRUFBRSxPQUFPLEVBQUU7UUFDbEIsT0FBTyxJQUFJLE9BQU87WUFDZCxHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osU0FBUztnQkFBRSxPQUFPO2dCQUFTLFNBQVMsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUztZQUFTO1FBQ3BFO0lBQ0o7SUFDQSxJQUFJLE9BQU8sRUFBRSxPQUFPLEVBQUU7UUFDbEIsT0FBTyxJQUFJLE9BQU87WUFDZCxHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osU0FBUztnQkFBRSxPQUFPO2dCQUFTLFNBQVMsQ0FBQSxHQUFBLHNCQUFRLEVBQUUsU0FBUztZQUFTO1FBQ3BFO0lBQ0o7SUFDQSxLQUFLLElBQUksRUFBRSxPQUFPLEVBQUU7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxNQUFNLFNBQVMsSUFBSSxNQUFNO0lBQzdDO0lBQ0EsU0FBUyxPQUFPLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUc7SUFDdkI7QUFDSjtBQUNBLE9BQU8sU0FBUyxDQUFDLFdBQVc7SUFDeEIsT0FBTyxJQUFJLE9BQU87UUFDZDtRQUNBLFNBQVM7UUFDVCxTQUFTO1FBQ1QsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ08sTUFBTSxvQkFBb0I7SUFDN0IsYUFBYztRQUNWLEtBQUssSUFBSTtRQUNULElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQztJQUN6QjtJQUNBLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0I7UUFDekMsSUFBSSxJQUFJLGVBQWUsQ0FBQSxHQUFBLHFCQUFZLEVBQUUsVUFBVTtZQUMzQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztnQkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtnQkFDbkIsVUFBVSxDQUFBLEdBQUEscUJBQVksRUFBRTtnQkFDeEIsVUFBVSxJQUFJO1lBQ2xCO1lBQ0EsT0FBTyxHQUFBO1FBQ1g7UUFDQSxTQUFTLGNBQWMsSUFBSSxFQUFFLEtBQUs7WUFDOUIsT0FBTyxDQUFBLEdBQUEsc0JBQVEsRUFBRTtnQkFDYixNQUFNO2dCQUNOLE1BQU0sSUFBSTtnQkFDVixXQUFXO29CQUFDLElBQUksT0FBTztvQkFBb0IsSUFBSTtvQkFBZ0IsQ0FBQSxHQUFBLHFCQUFVO29CQUFLLENBQUEsR0FBQSx5QkFBYztpQkFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFNLENBQUMsQ0FBQztnQkFDL0csV0FBVztvQkFDUCxNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO29CQUNuQixnQkFBZ0I7Z0JBQ3BCO1lBQ0o7UUFDSjtRQUNBLFNBQVMsaUJBQWlCLE9BQU8sRUFBRSxLQUFLO1lBQ3BDLE9BQU8sQ0FBQSxHQUFBLHNCQUFRLEVBQUU7Z0JBQ2IsTUFBTTtnQkFDTixNQUFNLElBQUk7Z0JBQ1YsV0FBVztvQkFBQyxJQUFJLE9BQU87b0JBQW9CLElBQUk7b0JBQWdCLENBQUEsR0FBQSxxQkFBVTtvQkFBSyxDQUFBLEdBQUEseUJBQWM7aUJBQUUsQ0FBQyxPQUFPLENBQUMsSUFBTSxDQUFDLENBQUM7Z0JBQy9HLFdBQVc7b0JBQ1AsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtvQkFDbkIsaUJBQWlCO2dCQUNyQjtZQUNKO1FBQ0o7UUFDQSxNQUFNLFNBQVM7WUFBRSxVQUFVLElBQUksT0FBTztRQUFtQjtRQUN6RCxNQUFNLEtBQUssSUFBSTtRQUNmLElBQUksSUFBSSxDQUFDLEtBQUssbUJBQW1CLFlBQVk7WUFDekMsNkRBQTZEO1lBQzdELDJEQUEyRDtZQUMzRCw0REFBNEQ7WUFDNUQsTUFBTSxLQUFLLElBQUk7WUFDZixPQUFPLENBQUEsR0FBQSxlQUFDLEVBQUUsZUFBZ0IsR0FBRyxJQUFJO2dCQUM3QixNQUFNLFFBQVEsSUFBSSxDQUFBLEdBQUEsb0JBQU8sRUFBRSxFQUFFO2dCQUM3QixNQUFNLGFBQWEsTUFBTSxHQUFHLEtBQUssS0FBSyxXQUFXLE1BQU0sUUFBUSxNQUFNLENBQUM7b0JBQ2xFLE1BQU0sU0FBUyxjQUFjLE1BQU07b0JBQ25DLE1BQU07Z0JBQ1Y7Z0JBQ0EsTUFBTSxTQUFTLE1BQU0sUUFBUSxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUM3QyxNQUFNLGdCQUFnQixNQUFNLEdBQUcsS0FBSyxRQUFRLEtBQUssS0FDNUMsV0FBVyxRQUFRLFFBQ25CLE1BQU0sQ0FBQztvQkFDUixNQUFNLFNBQVMsaUJBQWlCLFFBQVE7b0JBQ3hDLE1BQU07Z0JBQ1Y7Z0JBQ0EsT0FBTztZQUNYO1FBQ0osT0FDSztZQUNELDZEQUE2RDtZQUM3RCwyREFBMkQ7WUFDM0QsNERBQTREO1lBQzVELE1BQU0sS0FBSyxJQUFJO1lBQ2YsT0FBTyxDQUFBLEdBQUEsZUFBQyxFQUFFLFNBQVUsR0FBRyxJQUFJO2dCQUN2QixNQUFNLGFBQWEsR0FBRyxLQUFLLEtBQUssVUFBVSxNQUFNO2dCQUNoRCxJQUFJLENBQUMsV0FBVyxTQUNaLE1BQU0sSUFBSSxDQUFBLEdBQUEsb0JBQU8sRUFBRTtvQkFBQyxjQUFjLE1BQU0sV0FBVztpQkFBTztnQkFFOUQsTUFBTSxTQUFTLFFBQVEsTUFBTSxJQUFJLElBQUksRUFBRSxXQUFXO2dCQUNsRCxNQUFNLGdCQUFnQixHQUFHLEtBQUssUUFBUSxVQUFVLFFBQVE7Z0JBQ3hELElBQUksQ0FBQyxjQUFjLFNBQ2YsTUFBTSxJQUFJLENBQUEsR0FBQSxvQkFBTyxFQUFFO29CQUFDLGlCQUFpQixRQUFRLGNBQWM7aUJBQU87Z0JBRXRFLE9BQU8sY0FBYztZQUN6QjtRQUNKO0lBQ0o7SUFDQSxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBLGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0lBQ0EsS0FBSyxHQUFHLEtBQUssRUFBRTtRQUNYLE9BQU8sSUFBSSxZQUFZO1lBQ25CLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFDWixNQUFNLFNBQVMsT0FBTyxPQUFPLEtBQUssV0FBVztRQUNqRDtJQUNKO0lBQ0EsUUFBUSxVQUFVLEVBQUU7UUFDaEIsT0FBTyxJQUFJLFlBQVk7WUFDbkIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLFNBQVM7UUFDYjtJQUNKO0lBQ0EsVUFBVSxJQUFJLEVBQUU7UUFDWixNQUFNLGdCQUFnQixJQUFJLENBQUMsTUFBTTtRQUNqQyxPQUFPO0lBQ1g7SUFDQSxnQkFBZ0IsSUFBSSxFQUFFO1FBQ2xCLE1BQU0sZ0JBQWdCLElBQUksQ0FBQyxNQUFNO1FBQ2pDLE9BQU87SUFDWDtJQUNBLE9BQU8sT0FBTyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTtRQUNqQyxPQUFPLElBQUksWUFBWTtZQUNuQixNQUFPLE9BQU8sT0FBTyxTQUFTLE9BQU8sRUFBRSxFQUFFLEtBQUssV0FBVztZQUN6RCxTQUFTLFdBQVcsV0FBVztZQUMvQixVQUFVLHNCQUFzQjtZQUNoQyxHQUFHLG9CQUFvQixPQUFPO1FBQ2xDO0lBQ0o7QUFDSjtBQUNPLE1BQU0sZ0JBQWdCO0lBQ3pCLElBQUksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckI7SUFDQSxPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ3pDLE1BQU0sYUFBYSxJQUFJLENBQUMsS0FBSztRQUM3QixPQUFPLFdBQVcsT0FBTztZQUFFLE1BQU0sSUFBSTtZQUFNLE1BQU0sSUFBSTtZQUFNLFFBQVE7UUFBSTtJQUMzRTtBQUNKO0FBQ0EsUUFBUSxTQUFTLENBQUMsUUFBUTtJQUN0QixPQUFPLElBQUksUUFBUTtRQUNmLFFBQVE7UUFDUixVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDTyxNQUFNLG1CQUFtQjtJQUM1QixPQUFPLEtBQUssRUFBRTtRQUNWLElBQUksTUFBTSxTQUFTLElBQUksQ0FBQyxLQUFLLE9BQU87WUFDaEMsTUFBTSxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7WUFDakMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7Z0JBQ25CLFVBQVUsSUFBSTtnQkFDZCxNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO2dCQUNuQixVQUFVLElBQUksQ0FBQyxLQUFLO1lBQ3hCO1lBQ0EsT0FBTyxHQUFBO1FBQ1g7UUFDQSxPQUFPO1lBQUUsUUFBUTtZQUFTLE9BQU8sTUFBTTtRQUFLO0lBQ2hEO0lBQ0EsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtBQUNKO0FBQ0EsV0FBVyxTQUFTLENBQUMsT0FBTztJQUN4QixPQUFPLElBQUksV0FBVztRQUNsQixPQUFPO1FBQ1AsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ0EsU0FBUyxjQUFjLE1BQU0sRUFBRSxNQUFNO0lBQ2pDLE9BQU8sSUFBSSxRQUFRO1FBQ2Y7UUFDQSxVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDTyxNQUFNLGdCQUFnQjtJQUN6QixPQUFPLEtBQUssRUFBRTtRQUNWLElBQUksT0FBTyxNQUFNLFNBQVMsVUFBVTtZQUNoQyxNQUFNLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjtZQUNqQyxNQUFNLGlCQUFpQixJQUFJLENBQUMsS0FBSztZQUNqQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztnQkFDbkIsVUFBVSxDQUFBLEdBQUEsWUFBRyxFQUFFLFdBQVc7Z0JBQzFCLFVBQVUsSUFBSTtnQkFDZCxNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO1lBQ3ZCO1lBQ0EsT0FBTyxHQUFBO1FBQ1g7UUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQ04sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLO1FBRXBDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sT0FBTztZQUM5QixNQUFNLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjtZQUNqQyxNQUFNLGlCQUFpQixJQUFJLENBQUMsS0FBSztZQUNqQyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztnQkFDbkIsVUFBVSxJQUFJO2dCQUNkLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7Z0JBQ25CLFNBQVM7WUFDYjtZQUNBLE9BQU8sR0FBQTtRQUNYO1FBQ0EsT0FBTyxDQUFBLEdBQUEsZUFBQyxFQUFFLE1BQU07SUFDcEI7SUFDQSxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0lBQ0EsSUFBSSxPQUFPO1FBQ1AsTUFBTSxhQUFhLENBQUM7UUFDcEIsS0FBSyxNQUFNLE9BQU8sSUFBSSxDQUFDLEtBQUssT0FDeEIsVUFBVSxDQUFDLElBQUksR0FBRztRQUV0QixPQUFPO0lBQ1g7SUFDQSxJQUFJLFNBQVM7UUFDVCxNQUFNLGFBQWEsQ0FBQztRQUNwQixLQUFLLE1BQU0sT0FBTyxJQUFJLENBQUMsS0FBSyxPQUN4QixVQUFVLENBQUMsSUFBSSxHQUFHO1FBRXRCLE9BQU87SUFDWDtJQUNBLElBQUksT0FBTztRQUNQLE1BQU0sYUFBYSxDQUFDO1FBQ3BCLEtBQUssTUFBTSxPQUFPLElBQUksQ0FBQyxLQUFLLE9BQ3hCLFVBQVUsQ0FBQyxJQUFJLEdBQUc7UUFFdEIsT0FBTztJQUNYO0lBQ0EsUUFBUSxNQUFNLEVBQUUsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ2hDLE9BQU8sUUFBUSxPQUFPLFFBQVE7WUFDMUIsR0FBRyxJQUFJLENBQUMsSUFBSTtZQUNaLEdBQUcsTUFBTTtRQUNiO0lBQ0o7SUFDQSxRQUFRLE1BQU0sRUFBRSxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDaEMsT0FBTyxRQUFRLE9BQU8sSUFBSSxDQUFDLFFBQVEsT0FBTyxDQUFDLE1BQVEsQ0FBQyxPQUFPLFNBQVMsT0FBTztZQUN2RSxHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ1osR0FBRyxNQUFNO1FBQ2I7SUFDSjtBQUNKO0FBQ0EsUUFBUSxTQUFTO0FBQ1YsTUFBTSxzQkFBc0I7SUFDL0IsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLG1CQUFtQixDQUFBLEdBQUEsWUFBRyxFQUFFLG1CQUFtQixJQUFJLENBQUMsS0FBSztRQUMzRCxNQUFNLE1BQU0sSUFBSSxDQUFDLGdCQUFnQjtRQUNqQyxJQUFJLElBQUksZUFBZSxDQUFBLEdBQUEscUJBQVksRUFBRSxVQUFVLElBQUksZUFBZSxDQUFBLEdBQUEscUJBQVksRUFBRSxRQUFRO1lBQ3BGLE1BQU0saUJBQWlCLENBQUEsR0FBQSxZQUFHLEVBQUUsYUFBYTtZQUN6QyxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztnQkFDbkIsVUFBVSxDQUFBLEdBQUEsWUFBRyxFQUFFLFdBQVc7Z0JBQzFCLFVBQVUsSUFBSTtnQkFDZCxNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO1lBQ3ZCO1lBQ0EsT0FBTyxHQUFBO1FBQ1g7UUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQ04sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUEsR0FBQSxZQUFHLEVBQUUsbUJBQW1CLElBQUksQ0FBQyxLQUFLO1FBRTVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sT0FBTztZQUM5QixNQUFNLGlCQUFpQixDQUFBLEdBQUEsWUFBRyxFQUFFLGFBQWE7WUFDekMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7Z0JBQ25CLFVBQVUsSUFBSTtnQkFDZCxNQUFNLENBQUEsR0FBQSx3QkFBVyxFQUFFO2dCQUNuQixTQUFTO1lBQ2I7WUFDQSxPQUFPLEdBQUE7UUFDWDtRQUNBLE9BQU8sQ0FBQSxHQUFBLGVBQUMsRUFBRSxNQUFNO0lBQ3BCO0lBQ0EsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtBQUNKO0FBQ0EsY0FBYyxTQUFTLENBQUMsUUFBUTtJQUM1QixPQUFPLElBQUksY0FBYztRQUNyQixRQUFRO1FBQ1IsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ08sTUFBTSxtQkFBbUI7SUFDNUIsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckI7SUFDQSxPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ3pDLElBQUksSUFBSSxlQUFlLENBQUEsR0FBQSxxQkFBWSxFQUFFLFdBQVcsSUFBSSxPQUFPLFVBQVUsT0FBTztZQUN4RSxDQUFBLEdBQUEsOEJBQWdCLEVBQUUsS0FBSztnQkFDbkIsTUFBTSxDQUFBLEdBQUEsd0JBQVcsRUFBRTtnQkFDbkIsVUFBVSxDQUFBLEdBQUEscUJBQVksRUFBRTtnQkFDeEIsVUFBVSxJQUFJO1lBQ2xCO1lBQ0EsT0FBTyxHQUFBO1FBQ1g7UUFDQSxNQUFNLGNBQWMsSUFBSSxlQUFlLENBQUEsR0FBQSxxQkFBWSxFQUFFLFVBQVUsSUFBSSxPQUFPLFFBQVEsUUFBUSxJQUFJO1FBQzlGLE9BQU8sQ0FBQSxHQUFBLGVBQUMsRUFBRSxZQUFZLEtBQUssQ0FBQztZQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxNQUFNO2dCQUNuQyxNQUFNLElBQUk7Z0JBQ1YsVUFBVSxJQUFJLE9BQU87WUFDekI7UUFDSjtJQUNKO0FBQ0o7QUFDQSxXQUFXLFNBQVMsQ0FBQyxRQUFRO0lBQ3pCLE9BQU8sSUFBSSxXQUFXO1FBQ2xCLE1BQU07UUFDTixVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDTyxNQUFNLG1CQUFtQjtJQUM1QixZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtJQUNBLGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLE9BQU8sS0FBSyxhQUFhLHNCQUFzQixhQUMxRCxJQUFJLENBQUMsS0FBSyxPQUFPLGVBQ2pCLElBQUksQ0FBQyxLQUFLO0lBQ3BCO0lBQ0EsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0I7UUFDakQsTUFBTSxTQUFTLElBQUksQ0FBQyxLQUFLLFVBQVU7UUFDbkMsTUFBTSxXQUFXO1lBQ2IsVUFBVSxDQUFDO2dCQUNQLENBQUEsR0FBQSw4QkFBZ0IsRUFBRSxLQUFLO2dCQUN2QixJQUFJLElBQUksT0FDSixPQUFPO3FCQUdQLE9BQU87WUFFZjtZQUNBLElBQUksUUFBTztnQkFDUCxPQUFPLElBQUk7WUFDZjtRQUNKO1FBQ0EsU0FBUyxXQUFXLFNBQVMsU0FBUyxLQUFLO1FBQzNDLElBQUksT0FBTyxTQUFTLGNBQWM7WUFDOUIsTUFBTSxZQUFZLE9BQU8sVUFBVSxJQUFJLE1BQU07WUFDN0MsSUFBSSxJQUFJLE9BQU8sT0FDWCxPQUFPLFFBQVEsUUFBUSxXQUFXLEtBQUssT0FBTztnQkFDMUMsSUFBSSxPQUFPLFVBQVUsV0FDakIsT0FBTyxHQUFBO2dCQUNYLE1BQU0sU0FBUyxNQUFNLElBQUksQ0FBQyxLQUFLLE9BQU8sWUFBWTtvQkFDOUMsTUFBTTtvQkFDTixNQUFNLElBQUk7b0JBQ1YsUUFBUTtnQkFDWjtnQkFDQSxJQUFJLE9BQU8sV0FBVyxXQUNsQixPQUFPLEdBQUE7Z0JBQ1gsSUFBSSxPQUFPLFdBQVcsU0FDbEIsT0FBTyxDQUFBLEdBQUEsa0JBQUksRUFBRSxPQUFPO2dCQUN4QixJQUFJLE9BQU8sVUFBVSxTQUNqQixPQUFPLENBQUEsR0FBQSxrQkFBSSxFQUFFLE9BQU87Z0JBQ3hCLE9BQU87WUFDWDtpQkFFQztnQkFDRCxJQUFJLE9BQU8sVUFBVSxXQUNqQixPQUFPLEdBQUE7Z0JBQ1gsTUFBTSxTQUFTLElBQUksQ0FBQyxLQUFLLE9BQU8sV0FBVztvQkFDdkMsTUFBTTtvQkFDTixNQUFNLElBQUk7b0JBQ1YsUUFBUTtnQkFDWjtnQkFDQSxJQUFJLE9BQU8sV0FBVyxXQUNsQixPQUFPLEdBQUE7Z0JBQ1gsSUFBSSxPQUFPLFdBQVcsU0FDbEIsT0FBTyxDQUFBLEdBQUEsa0JBQUksRUFBRSxPQUFPO2dCQUN4QixJQUFJLE9BQU8sVUFBVSxTQUNqQixPQUFPLENBQUEsR0FBQSxrQkFBSSxFQUFFLE9BQU87Z0JBQ3hCLE9BQU87WUFDWDtRQUNKO1FBQ0EsSUFBSSxPQUFPLFNBQVMsY0FBYztZQUM5QixNQUFNLG9CQUFvQixDQUFDO2dCQUN2QixNQUFNLFNBQVMsT0FBTyxXQUFXLEtBQUs7Z0JBQ3RDLElBQUksSUFBSSxPQUFPLE9BQ1gsT0FBTyxRQUFRLFFBQVE7Z0JBRTNCLElBQUksa0JBQWtCLFNBQ2xCLE1BQU0sSUFBSSxNQUFNO2dCQUVwQixPQUFPO1lBQ1g7WUFDQSxJQUFJLElBQUksT0FBTyxVQUFVLE9BQU87Z0JBQzVCLE1BQU0sUUFBUSxJQUFJLENBQUMsS0FBSyxPQUFPLFdBQVc7b0JBQ3RDLE1BQU0sSUFBSTtvQkFDVixNQUFNLElBQUk7b0JBQ1YsUUFBUTtnQkFDWjtnQkFDQSxJQUFJLE1BQU0sV0FBVyxXQUNqQixPQUFPLEdBQUE7Z0JBQ1gsSUFBSSxNQUFNLFdBQVcsU0FDakIsT0FBTztnQkFDWCwwQkFBMEI7Z0JBQzFCLGtCQUFrQixNQUFNO2dCQUN4QixPQUFPO29CQUFFLFFBQVEsT0FBTztvQkFBTyxPQUFPLE1BQU07Z0JBQU07WUFDdEQsT0FFSSxPQUFPLElBQUksQ0FBQyxLQUFLLE9BQU8sWUFBWTtnQkFBRSxNQUFNLElBQUk7Z0JBQU0sTUFBTSxJQUFJO2dCQUFNLFFBQVE7WUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDdkYsSUFBSSxNQUFNLFdBQVcsV0FDakIsT0FBTyxHQUFBO2dCQUNYLElBQUksTUFBTSxXQUFXLFNBQ2pCLE9BQU87Z0JBQ1gsT0FBTyxrQkFBa0IsTUFBTSxPQUFPLEtBQUs7b0JBQ3ZDLE9BQU87d0JBQUUsUUFBUSxPQUFPO3dCQUFPLE9BQU8sTUFBTTtvQkFBTTtnQkFDdEQ7WUFDSjtRQUVSO1FBQ0EsSUFBSSxPQUFPLFNBQVMsYUFBYTtZQUM3QixJQUFJLElBQUksT0FBTyxVQUFVLE9BQU87Z0JBQzVCLE1BQU0sT0FBTyxJQUFJLENBQUMsS0FBSyxPQUFPLFdBQVc7b0JBQ3JDLE1BQU0sSUFBSTtvQkFDVixNQUFNLElBQUk7b0JBQ1YsUUFBUTtnQkFDWjtnQkFDQSxJQUFJLENBQUMsQ0FBQSxHQUFBLG9CQUFNLEVBQUUsT0FDVCxPQUFPLEdBQUE7Z0JBQ1gsTUFBTSxTQUFTLE9BQU8sVUFBVSxLQUFLLE9BQU87Z0JBQzVDLElBQUksa0JBQWtCLFNBQ2xCLE1BQU0sSUFBSSxNQUFNLENBQUMsK0ZBQStGLENBQUM7Z0JBRXJILE9BQU87b0JBQUUsUUFBUSxPQUFPO29CQUFPLE9BQU87Z0JBQU87WUFDakQsT0FFSSxPQUFPLElBQUksQ0FBQyxLQUFLLE9BQU8sWUFBWTtnQkFBRSxNQUFNLElBQUk7Z0JBQU0sTUFBTSxJQUFJO2dCQUFNLFFBQVE7WUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDdkYsSUFBSSxDQUFDLENBQUEsR0FBQSxvQkFBTSxFQUFFLE9BQ1QsT0FBTyxHQUFBO2dCQUNYLE9BQU8sUUFBUSxRQUFRLE9BQU8sVUFBVSxLQUFLLE9BQU8sV0FBVyxLQUFLLENBQUMsU0FBWSxDQUFBO3dCQUM3RSxRQUFRLE9BQU87d0JBQ2YsT0FBTztvQkFDWCxDQUFBO1lBQ0o7UUFFUjtRQUNBLENBQUEsR0FBQSxZQUFHLEVBQUUsWUFBWTtJQUNyQjtBQUNKO0FBQ0EsV0FBVyxTQUFTLENBQUMsUUFBUSxRQUFRO0lBQ2pDLE9BQU8sSUFBSSxXQUFXO1FBQ2xCO1FBQ0EsVUFBVSxzQkFBc0I7UUFDaEM7UUFDQSxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDQSxXQUFXLHVCQUF1QixDQUFDLFlBQVksUUFBUTtJQUNuRCxPQUFPLElBQUksV0FBVztRQUNsQjtRQUNBLFFBQVE7WUFBRSxNQUFNO1lBQWMsV0FBVztRQUFXO1FBQ3BELFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUVPLE1BQU0sb0JBQW9CO0lBQzdCLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxhQUFhLElBQUksQ0FBQyxTQUFTO1FBQ2pDLElBQUksZUFBZSxDQUFBLEdBQUEscUJBQVksRUFBRSxXQUM3QixPQUFPLENBQUEsR0FBQSxlQUFDLEVBQUU7UUFFZCxPQUFPLElBQUksQ0FBQyxLQUFLLFVBQVUsT0FBTztJQUN0QztJQUNBLFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0FBQ0o7QUFDQSxZQUFZLFNBQVMsQ0FBQyxNQUFNO0lBQ3hCLE9BQU8sSUFBSSxZQUFZO1FBQ25CLFdBQVc7UUFDWCxVQUFVLHNCQUFzQjtRQUNoQyxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDTyxNQUFNLG9CQUFvQjtJQUM3QixPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sYUFBYSxJQUFJLENBQUMsU0FBUztRQUNqQyxJQUFJLGVBQWUsQ0FBQSxHQUFBLHFCQUFZLEVBQUUsTUFDN0IsT0FBTyxDQUFBLEdBQUEsZUFBQyxFQUFFO1FBRWQsT0FBTyxJQUFJLENBQUMsS0FBSyxVQUFVLE9BQU87SUFDdEM7SUFDQSxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQjtBQUNKO0FBQ0EsWUFBWSxTQUFTLENBQUMsTUFBTTtJQUN4QixPQUFPLElBQUksWUFBWTtRQUNuQixXQUFXO1FBQ1gsVUFBVSxzQkFBc0I7UUFDaEMsR0FBRyxvQkFBb0IsT0FBTztJQUNsQztBQUNKO0FBQ08sTUFBTSxtQkFBbUI7SUFDNUIsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjtRQUN6QyxJQUFJLE9BQU8sSUFBSTtRQUNmLElBQUksSUFBSSxlQUFlLENBQUEsR0FBQSxxQkFBWSxFQUFFLFdBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUs7UUFFckIsT0FBTyxJQUFJLENBQUMsS0FBSyxVQUFVLE9BQU87WUFDOUI7WUFDQSxNQUFNLElBQUk7WUFDVixRQUFRO1FBQ1o7SUFDSjtJQUNBLGdCQUFnQjtRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckI7QUFDSjtBQUNBLFdBQVcsU0FBUyxDQUFDLE1BQU07SUFDdkIsT0FBTyxJQUFJLFdBQVc7UUFDbEIsV0FBVztRQUNYLFVBQVUsc0JBQXNCO1FBQ2hDLGNBQWMsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLFVBQVUsSUFBTSxPQUFPO1FBQ25GLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNPLE1BQU0saUJBQWlCO0lBQzFCLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0I7UUFDekMsK0RBQStEO1FBQy9ELE1BQU0sU0FBUztZQUNYLEdBQUcsR0FBRztZQUNOLFFBQVE7Z0JBQ0osR0FBRyxJQUFJLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO1lBQ2Q7UUFDSjtRQUNBLE1BQU0sU0FBUyxJQUFJLENBQUMsS0FBSyxVQUFVLE9BQU87WUFDdEMsTUFBTSxPQUFPO1lBQ2IsTUFBTSxPQUFPO1lBQ2IsUUFBUTtnQkFDSixHQUFHLE1BQU07WUFDYjtRQUNKO1FBQ0EsSUFBSSxDQUFBLEdBQUEsb0JBQU0sRUFBRSxTQUNSLE9BQU8sT0FBTyxLQUFLLENBQUM7WUFDaEIsT0FBTztnQkFDSCxRQUFRO2dCQUNSLE9BQU8sT0FBTyxXQUFXLFVBQ25CLE9BQU8sUUFDUCxJQUFJLENBQUMsS0FBSyxXQUFXO29CQUNuQixJQUFJLFNBQVE7d0JBQ1IsT0FBTyxJQUFJLENBQUEsR0FBQSxvQkFBTyxFQUFFLE9BQU8sT0FBTztvQkFDdEM7b0JBQ0EsT0FBTyxPQUFPO2dCQUNsQjtZQUNSO1FBQ0o7YUFHQSxPQUFPO1lBQ0gsUUFBUTtZQUNSLE9BQU8sT0FBTyxXQUFXLFVBQ25CLE9BQU8sUUFDUCxJQUFJLENBQUMsS0FBSyxXQUFXO2dCQUNuQixJQUFJLFNBQVE7b0JBQ1IsT0FBTyxJQUFJLENBQUEsR0FBQSxvQkFBTyxFQUFFLE9BQU8sT0FBTztnQkFDdEM7Z0JBQ0EsT0FBTyxPQUFPO1lBQ2xCO1FBQ1I7SUFFUjtJQUNBLGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0FBQ0o7QUFDQSxTQUFTLFNBQVMsQ0FBQyxNQUFNO0lBQ3JCLE9BQU8sSUFBSSxTQUFTO1FBQ2hCLFdBQVc7UUFDWCxVQUFVLHNCQUFzQjtRQUNoQyxZQUFZLE9BQU8sT0FBTyxVQUFVLGFBQWEsT0FBTyxRQUFRLElBQU0sT0FBTztRQUM3RSxHQUFHLG9CQUFvQixPQUFPO0lBQ2xDO0FBQ0o7QUFDTyxNQUFNLGVBQWU7SUFDeEIsT0FBTyxLQUFLLEVBQUU7UUFDVixNQUFNLGFBQWEsSUFBSSxDQUFDLFNBQVM7UUFDakMsSUFBSSxlQUFlLENBQUEsR0FBQSxxQkFBWSxFQUFFLEtBQUs7WUFDbEMsTUFBTSxNQUFNLElBQUksQ0FBQyxnQkFBZ0I7WUFDakMsQ0FBQSxHQUFBLDhCQUFnQixFQUFFLEtBQUs7Z0JBQ25CLE1BQU0sQ0FBQSxHQUFBLHdCQUFXLEVBQUU7Z0JBQ25CLFVBQVUsQ0FBQSxHQUFBLHFCQUFZLEVBQUU7Z0JBQ3hCLFVBQVUsSUFBSTtZQUNsQjtZQUNBLE9BQU8sR0FBQTtRQUNYO1FBQ0EsT0FBTztZQUFFLFFBQVE7WUFBUyxPQUFPLE1BQU07UUFBSztJQUNoRDtBQUNKO0FBQ0EsT0FBTyxTQUFTLENBQUM7SUFDYixPQUFPLElBQUksT0FBTztRQUNkLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNPLE1BQU0sUUFBUSxPQUFPO0FBQ3JCLE1BQU0sbUJBQW1CO0lBQzVCLE9BQU8sS0FBSyxFQUFFO1FBQ1YsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0I7UUFDekMsTUFBTSxPQUFPLElBQUk7UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLE9BQU87WUFDekI7WUFDQSxNQUFNLElBQUk7WUFDVixRQUFRO1FBQ1o7SUFDSjtJQUNBLFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCO0FBQ0o7QUFDTyxNQUFNLG9CQUFvQjtJQUM3QixPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjtRQUNqRCxJQUFJLElBQUksT0FBTyxPQUFPO1lBQ2xCLE1BQU0sY0FBYztnQkFDaEIsTUFBTSxXQUFXLE1BQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZO29CQUM1QyxNQUFNLElBQUk7b0JBQ1YsTUFBTSxJQUFJO29CQUNWLFFBQVE7Z0JBQ1o7Z0JBQ0EsSUFBSSxTQUFTLFdBQVcsV0FDcEIsT0FBTyxHQUFBO2dCQUNYLElBQUksU0FBUyxXQUFXLFNBQVM7b0JBQzdCLE9BQU87b0JBQ1AsT0FBTyxDQUFBLEdBQUEsa0JBQUksRUFBRSxTQUFTO2dCQUMxQixPQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxZQUFZO29CQUM3QixNQUFNLFNBQVM7b0JBQ2YsTUFBTSxJQUFJO29CQUNWLFFBQVE7Z0JBQ1o7WUFFUjtZQUNBLE9BQU87UUFDWCxPQUNLO1lBQ0QsTUFBTSxXQUFXLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVztnQkFDckMsTUFBTSxJQUFJO2dCQUNWLE1BQU0sSUFBSTtnQkFDVixRQUFRO1lBQ1o7WUFDQSxJQUFJLFNBQVMsV0FBVyxXQUNwQixPQUFPLEdBQUE7WUFDWCxJQUFJLFNBQVMsV0FBVyxTQUFTO2dCQUM3QixPQUFPO2dCQUNQLE9BQU87b0JBQ0gsUUFBUTtvQkFDUixPQUFPLFNBQVM7Z0JBQ3BCO1lBQ0osT0FFSSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksV0FBVztnQkFDNUIsTUFBTSxTQUFTO2dCQUNmLE1BQU0sSUFBSTtnQkFDVixRQUFRO1lBQ1o7UUFFUjtJQUNKO0lBQ0EsT0FBTyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDaEIsT0FBTyxJQUFJLFlBQVk7WUFDbkIsSUFBSTtZQUNKLEtBQUs7WUFDTCxVQUFVLHNCQUFzQjtRQUNwQztJQUNKO0FBQ0o7QUFDTyxNQUFNLG9CQUFvQjtJQUM3QixPQUFPLEtBQUssRUFBRTtRQUNWLE1BQU0sU0FBUyxJQUFJLENBQUMsS0FBSyxVQUFVLE9BQU87UUFDMUMsTUFBTSxTQUFTLENBQUM7WUFDWixJQUFJLENBQUEsR0FBQSxvQkFBTSxFQUFFLE9BQ1IsS0FBSyxRQUFRLE9BQU8sT0FBTyxLQUFLO1lBRXBDLE9BQU87UUFDWDtRQUNBLE9BQU8sQ0FBQSxHQUFBLG9CQUFNLEVBQUUsVUFBVSxPQUFPLEtBQUssQ0FBQyxPQUFTLE9BQU8sU0FBUyxPQUFPO0lBQzFFO0lBQ0EsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckI7QUFDSjtBQUNBLFlBQVksU0FBUyxDQUFDLE1BQU07SUFDeEIsT0FBTyxJQUFJLFlBQVk7UUFDbkIsV0FBVztRQUNYLFVBQVUsc0JBQXNCO1FBQ2hDLEdBQUcsb0JBQW9CLE9BQU87SUFDbEM7QUFDSjtBQUNBLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QyxTQUFTLFlBQVksTUFBTSxFQUFFLElBQUk7SUFDN0IsTUFBTSxJQUFJLE9BQU8sV0FBVyxhQUFhLE9BQU8sUUFBUSxPQUFPLFdBQVcsV0FBVztRQUFFLFNBQVM7SUFBTyxJQUFJO0lBQzNHLE1BQU0sS0FBSyxPQUFPLE1BQU0sV0FBVztRQUFFLFNBQVM7SUFBRSxJQUFJO0lBQ3BELE9BQU87QUFDWDtBQUNPLFNBQVMsT0FBTyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFDMUM7Ozs7Ozs7OztDQVNDLEdBQ0QsS0FBSztJQUNELElBQUksT0FDQSxPQUFPLE9BQU8sU0FBUyxZQUFZLENBQUMsTUFBTTtRQUN0QyxNQUFNLElBQUksTUFBTTtRQUNoQixJQUFJLGFBQWEsU0FDYixPQUFPLEVBQUUsS0FBSyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEdBQUc7Z0JBQ0osTUFBTSxTQUFTLFlBQVksU0FBUztnQkFDcEMsTUFBTSxTQUFTLE9BQU8sU0FBUyxTQUFTO2dCQUN4QyxJQUFJLFNBQVM7b0JBQUUsTUFBTTtvQkFBVSxHQUFHLE1BQU07b0JBQUUsT0FBTztnQkFBTztZQUM1RDtRQUNKO1FBRUosSUFBSSxDQUFDLEdBQUc7WUFDSixNQUFNLFNBQVMsWUFBWSxTQUFTO1lBQ3BDLE1BQU0sU0FBUyxPQUFPLFNBQVMsU0FBUztZQUN4QyxJQUFJLFNBQVM7Z0JBQUUsTUFBTTtnQkFBVSxHQUFHLE1BQU07Z0JBQUUsT0FBTztZQUFPO1FBQzVEO1FBQ0E7SUFDSjtJQUNKLE9BQU8sT0FBTztBQUNsQjtBQUVPLE1BQU0sT0FBTztJQUNoQixRQUFRLFVBQVU7QUFDdEI7QUFDTyxJQUFJO0FBQ1YsQ0FBQSxTQUFVLHFCQUFxQjtJQUM1QixxQkFBcUIsQ0FBQyxZQUFZLEdBQUc7SUFDckMscUJBQXFCLENBQUMsWUFBWSxHQUFHO0lBQ3JDLHFCQUFxQixDQUFDLFNBQVMsR0FBRztJQUNsQyxxQkFBcUIsQ0FBQyxZQUFZLEdBQUc7SUFDckMscUJBQXFCLENBQUMsYUFBYSxHQUFHO0lBQ3RDLHFCQUFxQixDQUFDLFVBQVUsR0FBRztJQUNuQyxxQkFBcUIsQ0FBQyxZQUFZLEdBQUc7SUFDckMscUJBQXFCLENBQUMsZUFBZSxHQUFHO0lBQ3hDLHFCQUFxQixDQUFDLFVBQVUsR0FBRztJQUNuQyxxQkFBcUIsQ0FBQyxTQUFTLEdBQUc7SUFDbEMscUJBQXFCLENBQUMsYUFBYSxHQUFHO0lBQ3RDLHFCQUFxQixDQUFDLFdBQVcsR0FBRztJQUNwQyxxQkFBcUIsQ0FBQyxVQUFVLEdBQUc7SUFDbkMscUJBQXFCLENBQUMsV0FBVyxHQUFHO0lBQ3BDLHFCQUFxQixDQUFDLFlBQVksR0FBRztJQUNyQyxxQkFBcUIsQ0FBQyxXQUFXLEdBQUc7SUFDcEMscUJBQXFCLENBQUMsd0JBQXdCLEdBQUc7SUFDakQscUJBQXFCLENBQUMsa0JBQWtCLEdBQUc7SUFDM0MscUJBQXFCLENBQUMsV0FBVyxHQUFHO0lBQ3BDLHFCQUFxQixDQUFDLFlBQVksR0FBRztJQUNyQyxxQkFBcUIsQ0FBQyxTQUFTLEdBQUc7SUFDbEMscUJBQXFCLENBQUMsU0FBUyxHQUFHO0lBQ2xDLHFCQUFxQixDQUFDLGNBQWMsR0FBRztJQUN2QyxxQkFBcUIsQ0FBQyxVQUFVLEdBQUc7SUFDbkMscUJBQXFCLENBQUMsYUFBYSxHQUFHO0lBQ3RDLHFCQUFxQixDQUFDLFVBQVUsR0FBRztJQUNuQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUc7SUFDdEMscUJBQXFCLENBQUMsZ0JBQWdCLEdBQUc7SUFDekMscUJBQXFCLENBQUMsY0FBYyxHQUFHO0lBQ3ZDLHFCQUFxQixDQUFDLGNBQWMsR0FBRztJQUN2QyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUc7SUFDdEMscUJBQXFCLENBQUMsV0FBVyxHQUFHO0lBQ3BDLHFCQUFxQixDQUFDLGFBQWEsR0FBRztJQUN0QyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUc7SUFDdEMscUJBQXFCLENBQUMsY0FBYyxHQUFHO0lBQ3ZDLHFCQUFxQixDQUFDLGNBQWMsR0FBRztBQUMzQyxDQUFBLEVBQUcseUJBQTBCLENBQUEsd0JBQXdCLENBQUMsQ0FBQTtBQUN0RCxtQkFBbUI7QUFDbkIsTUFBTTtJQUNGLFlBQVksR0FBRyxDQUFDLENBQUUsQ0FBRTtBQUN4QjtBQUNBLE1BQU0saUJBQWlCLENBQ3ZCLGtFQUFrRTtBQUNsRSxLQUFLLFNBQVM7SUFDVixTQUFTLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxLQUFLLENBQUM7QUFDaEQsQ0FBQyxHQUFLLE9BQU8sQ0FBQyxPQUFTLGdCQUFnQixLQUFLO0FBQzVDLE1BQU0sYUFBYSxVQUFVO0FBQzdCLE1BQU0sYUFBYSxVQUFVO0FBQzdCLE1BQU0sVUFBVSxPQUFPO0FBQ3ZCLE1BQU0sYUFBYSxVQUFVO0FBQzdCLE1BQU0sY0FBYyxXQUFXO0FBQy9CLE1BQU0sV0FBVyxRQUFRO0FBQ3pCLE1BQU0sYUFBYSxVQUFVO0FBQzdCLE1BQU0sZ0JBQWdCLGFBQWE7QUFDbkMsTUFBTSxXQUFXLFFBQVE7QUFDekIsTUFBTSxVQUFVLE9BQU87QUFDdkIsTUFBTSxjQUFjLFdBQVc7QUFDL0IsTUFBTSxZQUFZLFNBQVM7QUFDM0IsTUFBTSxXQUFXLFFBQVE7QUFDekIsTUFBTSxZQUFZLFNBQVM7QUFDM0IsTUFBTSxhQUFhLFVBQVU7QUFDN0IsTUFBTSxtQkFBbUIsVUFBVTtBQUNuQyxNQUFNLFlBQVksU0FBUztBQUMzQixNQUFNLHlCQUF5QixzQkFBc0I7QUFDckQsTUFBTSxtQkFBbUIsZ0JBQWdCO0FBQ3pDLE1BQU0sWUFBWSxTQUFTO0FBQzNCLE1BQU0sYUFBYSxVQUFVO0FBQzdCLE1BQU0sVUFBVSxPQUFPO0FBQ3ZCLE1BQU0sVUFBVSxPQUFPO0FBQ3ZCLE1BQU0sZUFBZSxZQUFZO0FBQ2pDLE1BQU0sV0FBVyxRQUFRO0FBQ3pCLE1BQU0sY0FBYyxXQUFXO0FBQy9CLE1BQU0sV0FBVyxRQUFRO0FBQ3pCLE1BQU0saUJBQWlCLGNBQWM7QUFDckMsTUFBTSxjQUFjLFdBQVc7QUFDL0IsTUFBTSxjQUFjLFdBQVc7QUFDL0IsTUFBTSxlQUFlLFlBQVk7QUFDakMsTUFBTSxlQUFlLFlBQVk7QUFDakMsTUFBTSxpQkFBaUIsV0FBVztBQUNsQyxNQUFNLGVBQWUsWUFBWTtBQUNqQyxNQUFNLFVBQVUsSUFBTSxhQUFhO0FBQ25DLE1BQU0sVUFBVSxJQUFNLGFBQWE7QUFDbkMsTUFBTSxXQUFXLElBQU0sY0FBYztBQUM5QixNQUFNLFNBQVM7SUFDbEIsUUFBUyxDQUFDLE1BQVEsVUFBVSxPQUFPO1lBQUUsR0FBRyxHQUFHO1lBQUUsUUFBUTtRQUFLO0lBQzFELFFBQVMsQ0FBQyxNQUFRLFVBQVUsT0FBTztZQUFFLEdBQUcsR0FBRztZQUFFLFFBQVE7UUFBSztJQUMxRCxTQUFVLENBQUMsTUFBUSxXQUFXLE9BQU87WUFDakMsR0FBRyxHQUFHO1lBQ04sUUFBUTtRQUNaO0lBQ0EsUUFBUyxDQUFDLE1BQVEsVUFBVSxPQUFPO1lBQUUsR0FBRyxHQUFHO1lBQUUsUUFBUTtRQUFLO0lBQzFELE1BQU8sQ0FBQyxNQUFRLFFBQVEsT0FBTztZQUFFLEdBQUcsR0FBRztZQUFFLFFBQVE7UUFBSztBQUMxRDtBQUVPLE1BQU0sUUFBUSxDQUFBLEdBQUEsb0JBQU07Ozs7OytDQzVtSGhCO0FBQUosSUFBSTtBQUNWLENBQUEsU0FBVSxTQUFTO0lBQ2hCLFVBQVUsV0FBVyxDQUFDLFVBQVksT0FBTyxZQUFZLFdBQVc7WUFBRTtRQUFRLElBQUksV0FBVyxDQUFDO0lBQzFGLHFCQUFxQjtJQUNyQixVQUFVLFdBQVcsQ0FBQyxVQUFZLE9BQU8sWUFBWSxXQUFXLFVBQVUsU0FBUztBQUN2RixDQUFBLEVBQUcsYUFBYyxDQUFBLFlBQVksQ0FBQyxDQUFBIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS05MjM4ODlmNzgwNWVhNjg2LmpzIiwic3JjL2NvbnRlbnRzL2xlZXRjb2RlLnRzIiwic3JjL2NvbnN0YW50cy9pbmRleC50cyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwic3JjL3NlcnZpY2VzL2xlZXRjb2RlL2V4dHJhY3Rvci50cyIsInNyYy9zZXJ2aWNlcy9sZWV0Y29kZS9jbGllbnQudHMiLCJzcmMvdXRpbHMvZXJyb3JzLnRzIiwic3JjL3V0aWxzL3N0b3JhZ2UudHMiLCJzcmMvdXRpbHMvdmFsaWRhdGlvbi50cyIsIm5vZGVfbW9kdWxlcy96b2QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvem9kL3YzL2V4dGVybmFsLmpzIiwibm9kZV9tb2R1bGVzL3pvZC92My9lcnJvcnMuanMiLCJub2RlX21vZHVsZXMvem9kL3YzL2xvY2FsZXMvZW4uanMiLCJub2RlX21vZHVsZXMvem9kL3YzL1pvZEVycm9yLmpzIiwibm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL3V0aWwuanMiLCJub2RlX21vZHVsZXMvem9kL3YzL2hlbHBlcnMvcGFyc2VVdGlsLmpzIiwibm9kZV9tb2R1bGVzL3pvZC92My9oZWxwZXJzL3R5cGVBbGlhc2VzLmpzIiwibm9kZV9tb2R1bGVzL3pvZC92My90eXBlcy5qcyIsIm5vZGVfbW9kdWxlcy96b2QvdjMvaGVscGVycy9lcnJvclV0aWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGQ9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgeT0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBIPW5ldyBTZXQoZCksXz1lPT5ILmhhcyhlKSxHPWQuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgWj1fKFwiLS1kcnktcnVuXCIpLHA9KCk9Pl8oXCItLXZlcmJvc2VcIil8fHkoKS5WRVJCT1NFPT09XCJ0cnVlXCIscT1wKCk7dmFyIHU9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHg9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+dShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLG09KC4uLmUpPT51KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUz0wLGM9KC4uLmUpPT5wKCkmJnUoYFxcdXsxRjdFMX0gJHtTKyt9YCwuLi5lKTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjp0cnVlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInNjcmlwdC1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkQ6XFxcXG15TGVldFxcXFxzcmNcXFxcY29udGVudHNcXFxcbGVldGNvZGUudHNcIixcImJ1bmRsZUlkXCI6XCJhOTU3NTc2YzE5YWJiNDM5XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBJKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9STttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBiKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gQygpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIEU9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjtmdW5jdGlvbiBMKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gTyhlPUMoKSl7bGV0IHQ9YigpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEIoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFAoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KE8oKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgYSBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCB3PWEuY29kZWZyYW1lfHxhLnN0YWNrO20oXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrYS5tZXNzYWdlK2BcbmArdytgXG5cbmArYS5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57bShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHM9XCJfX3BsYXNtby1sb2FkaW5nX19cIjtmdW5jdGlvbiAkKCl7bGV0IGU9Z2xvYmFsVGhpcy53aW5kb3c/LnRydXN0ZWRUeXBlcztpZih0eXBlb2YgZT5cInVcIilyZXR1cm47bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHJ1c3RlZC10eXBlc1wiXScpPy5jb250ZW50Py5zcGxpdChcIiBcIiksbz10P3RbdD8ubGVuZ3RoLTFdLnJlcGxhY2UoLzsvZyxcIlwiKTp2b2lkIDA7cmV0dXJuIHR5cGVvZiBlPFwidVwiP2UuY3JlYXRlUG9saWN5KG98fGB0cnVzdGVkLWh0bWwtJHtzfWAse2NyZWF0ZUhUTUw6YT0+YX0pOnZvaWQgMH12YXIgVD0kKCk7ZnVuY3Rpb24gZygpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKX1mdW5jdGlvbiBmKCl7cmV0dXJuIWcoKX1mdW5jdGlvbiBGKCl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPXM7bGV0IHQ9YFxuICA8c3R5bGU+XG4gICAgIyR7c30ge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICAgIGJveC1zaGFkb3c6ICMzMzMgNC43cHggNC43cHg7XG4gICAgfVxuXG4gICAgIyR7c306aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCB7XG4gICAgICAwJSB7XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIGZpbGw6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTEge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOHMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuc3ZnLWVsZW0tMiB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC45cyBib3RoIGluZmluaXRlO1xuICAgIH1cbiAgICBcbiAgICAjJHtzfSAuc3ZnLWVsZW0tMyB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIDwvc3R5bGU+XG4gIFxuICA8c3ZnIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjY0IDM1NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTM5LjIyMSAyODIuMjQzQzE1NC4yNTIgMjgyLjI0MyAxNjYuOTAzIDI5NC44NDkgMTYxLjMzOCAzMDguODEyQzE1OS40ODkgMzEzLjQ1NCAxNTcuMTUgMzE3LjkxMyAxNTQuMzQ3IDMyMi4xMDlDMTQ2LjQ2NCAzMzMuOTA5IDEzNS4yNiAzNDMuMTA3IDEyMi4xNTEgMzQ4LjUzOEMxMDkuMDQzIDM1My45NjkgOTQuNjE4MiAzNTUuMzkgODAuNzAyMiAzNTIuNjIxQzY2Ljc4NjEgMzQ5Ljg1MiA1NC4wMDM0IDM0My4wMTggNDMuOTcwNSAzMzIuOTgzQzMzLjkzNzUgMzIyLjk0NyAyNy4xMDUgMzEwLjE2MiAyNC4zMzY5IDI5Ni4yNDJDMjEuNTY4OSAyODIuMzIzIDIyLjk4OTUgMjY3Ljg5NSAyOC40MTkzIDI1NC43ODNDMzMuODQ5MSAyNDEuNjcxIDQzLjA0NDEgMjMwLjQ2NCA1NC44NDE2IDIyMi41NzlDNTkuMDM1MyAyMTkuNzc3IDYzLjQ5MDggMjE3LjQzOCA2OC4xMjk1IDIxNS41ODhDODIuMDkxNSAyMTAuMDIxIDk0LjY5NzggMjIyLjY3MSA5NC42OTc4IDIzNy43MDNMOTQuNjk3OCAyNTUuMDI3Qzk0LjY5NzggMjcwLjA1OCAxMDYuODgzIDI4Mi4yNDMgMTIxLjkxNCAyODIuMjQzSDEzOS4yMjFaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTFcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNMTkyLjI2MSAxNDIuMDI4QzE5Mi4yNjEgMTI2Ljk5NiAyMDQuODY3IDExNC4zNDYgMjE4LjgyOSAxMTkuOTEzQzIyMy40NjggMTIxLjc2MyAyMjcuOTIzIDEyNC4xMDIgMjMyLjExNyAxMjYuOTA0QzI0My45MTUgMTM0Ljc4OSAyNTMuMTEgMTQ1Ljk5NiAyNTguNTM5IDE1OS4xMDhDMjYzLjk2OSAxNzIuMjIgMjY1LjM5IDE4Ni42NDggMjYyLjYyMiAyMDAuNTY3QzI1OS44NTQgMjE0LjQ4NyAyNTMuMDIxIDIyNy4yNzIgMjQyLjk4OCAyMzcuMzA4QzIzMi45NTUgMjQ3LjM0MyAyMjAuMTczIDI1NC4xNzcgMjA2LjI1NiAyNTYuOTQ2QzE5Mi4zNCAyNTkuNzE1IDE3Ny45MTYgMjU4LjI5NCAxNjQuODA3IDI1Mi44NjNDMTUxLjY5OSAyNDcuNDMyIDE0MC40OTUgMjM4LjIzNCAxMzIuNjEyIDIyNi40MzRDMTI5LjgwOCAyMjIuMjM4IDEyNy40NyAyMTcuNzc5IDEyNS42MiAyMTMuMTM3QzEyMC4wNTYgMTk5LjE3NCAxMzIuNzA3IDE4Ni41NjggMTQ3LjczOCAxODYuNTY4TDE2NS4wNDQgMTg2LjU2OEMxODAuMDc2IDE4Ni41NjggMTkyLjI2MSAxNzQuMzgzIDE5Mi4yNjEgMTU5LjM1MkwxOTIuMjYxIDE0Mi4wMjhaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTJcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNOTUuNjUyMiAxNjQuMTM1Qzk1LjY1MjIgMTc5LjE2NyA4My4yMjc5IDE5MS43MjUgNjguODAxMyAxODcuNTA1QzU5LjUxNDUgMTg0Ljc4OCA1MC42NDMyIDE4MC42NjMgNDIuNTEwNiAxNzUuMjI3QzI2Ljc4MDYgMTY0LjcxNCAxNC41MjA2IDE0OS43NzIgNy4yODA4OSAxMzIuMjg5QzAuMDQxMTgzIDExNC44MDcgLTEuODUzMDUgOTUuNTY5NyAxLjgzNzcyIDc3LjAxMDRDNS41Mjg0OSA1OC40NTExIDE0LjYzODUgNDEuNDAzMyAyOC4wMTU3IDI4LjAyMjhDNDEuMzkzIDE0LjY0MjMgNTguNDM2NiA1LjUzMDA2IDc2Ljk5MTQgMS44MzgzOUM5NS41NDYxIC0xLjg1MzI5IDExNC43NzkgMC4wNDE0MTYyIDEzMi4yNTcgNy4yODI5QzE0OS43MzUgMTQuNTI0NCAxNjQuNjc0IDI2Ljc4NzQgMTc1LjE4NCA0Mi41MjEyQzE4MC42MiA1MC42NTc2IDE4NC43NDQgNTkuNTMzMiAxODcuNDYgNjguODI0NUMxOTEuNjc4IDgzLjI1MTkgMTc5LjExOSA5NS42NzU5IDE2NC4wODggOTUuNjc1OUwxMjIuODY5IDk1LjY3NTlDMTA3LjgzNyA5NS42NzU5IDk1LjY1MjIgMTA3Ljg2MSA5NS42NTIyIDEyMi44OTJMOTUuNjUyMiAxNjQuMTM1WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0zXCI+PC9wYXRoPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj5Db250ZXh0IEludmFsaWRhdGVkLCBQcmVzcyB0byBSZWxvYWQ8L3NwYW4+XG4gIGA7cmV0dXJuIGUuaW5uZXJIVE1MPVQ/VC5jcmVhdGVIVE1MKHQpOnQsZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiLGUuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGUuc3R5bGUuYm90dG9tPVwiMTQuN3B4XCIsZS5zdHlsZS5yaWdodD1cIjE0LjdweFwiLGUuc3R5bGUuZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIixlLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZS5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLGUuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGUuc3R5bGUucGFkZGluZz1cIjE0LjdweFwiLGUuc3R5bGUuZ2FwPVwiMTQuN3B4XCIsZS5zdHlsZS5ib3JkZXJSYWRpdXM9XCI0LjdweFwiLGUuc3R5bGUuekluZGV4PVwiMjE0NzQ4MzY0N1wiLGUuc3R5bGUub3BhY2l0eT1cIjBcIixlLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMC40N3MgZWFzZS1pbi1vdXRcIixlfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9Pntkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/KGYoKSYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCkpLHQoKSk6Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57ZigpJiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpfSl9KX12YXIgaz0oKT0+e2xldCBlO2lmKGYoKSl7bGV0IHQ9RigpO2U9Tih0KX1yZXR1cm57c2hvdzphc3luYyh7cmVsb2FkQnV0dG9uOnQ9ITF9PXt9KT0+e2F3YWl0IGU7bGV0IG89ZygpO28uc3R5bGUub3BhY2l0eT1cIjFcIix0JiYoby5vbmNsaWNrPXI9PntyLnN0b3BQcm9wYWdhdGlvbigpLGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCl9LG8ucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKSxvLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIixvLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIil9LGhpZGU6YXN5bmMoKT0+e2F3YWl0IGU7bGV0IHQ9ZygpO3Quc3R5bGUub3BhY2l0eT1cIjBcIn19fTt2YXIgVz1gJHtFfSR7bW9kdWxlLmlkfV9fYCxpLEE9ITEsTT1rKCk7YXN5bmMgZnVuY3Rpb24gaCgpe2MoXCJTY3JpcHQgUnVudGltZSAtIHJlbG9hZGluZ1wiKSxBP2dsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCk6TS5zaG93KHtyZWxvYWRCdXR0b246ITB9KX1mdW5jdGlvbiBSKCl7aT8uZGlzY29ubmVjdCgpLGk9bD8ucnVudGltZS5jb25uZWN0KHtuYW1lOld9KSxpLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e2goKX0pLGkub25NZXNzYWdlLmFkZExpc3RlbmVyKGU9PntlLl9fcGxhc21vX2NzX3JlbG9hZF9fJiZoKCksZS5fX3BsYXNtb19jc19hY3RpdmVfdGFiX18mJihBPSEwKX0pfWZ1bmN0aW9uIGooKXtpZihsPy5ydW50aW1lKXRyeXtSKCksc2V0SW50ZXJ2YWwoUiwyNGUzKX1jYXRjaHtyZXR1cm59fWooKTtQKGFzeW5jIGU9PntjKFwiU2NyaXB0IHJ1bnRpbWUgLSBvbiB1cGRhdGVkIGFzc2V0c1wiKSxlLmZpbHRlcihvPT5vLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUobz0+TChtb2R1bGUuYnVuZGxlLG8uaWQpKSYmKE0uc2hvdygpLGw/LnJ1bnRpbWU/aS5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfY2hhbmdlZF9fOiEwfSk6c2V0VGltZW91dCgoKT0+e2goKX0sNDcwMCkpfSk7XG4iLCJpbXBvcnQgeyBNRVNTQUdFX1RZUEVTIH0gZnJvbSBcIn5jb25zdGFudHNcIlxuaW1wb3J0IHsgZmV0Y2hTdWJtaXNzaW9uTWV0YWRhdGEgfSBmcm9tIFwifnNlcnZpY2VzL2xlZXRjb2RlL2V4dHJhY3RvclwiXG5pbXBvcnQgeyBnZXRMYXN0U3VibWlzc2lvbklkLCBnZXRTZXR0aW5ncywgbWFya0xhc3RTdWJtaXNzaW9uSWQsIHNldFBlbmRpbmdTdWJtaXNzaW9uIH0gZnJvbSBcIn51dGlscy9zdG9yYWdlXCJcbmltcG9ydCB7IGNvbXBsZXhpdHlTY2hlbWEgfSBmcm9tIFwifnV0aWxzL3ZhbGlkYXRpb25cIlxuaW1wb3J0IHR5cGUgeyBQZW5kaW5nU3VibWlzc2lvbiB9IGZyb20gXCJ+dHlwZXNcIlxuXG5jb25zdCBCVVRUT05fSUQgPSBcImxlZXRjb2RlLWdpdGh1Yi1vcmdhbml6ZXItdXBsb2FkLWJ0blwiXG5sZXQgY3VycmVudFBlbmRpbmc6IFBlbmRpbmdTdWJtaXNzaW9uIHwgbnVsbCA9IG51bGxcblxuY29uc3QgZ2V0U3VibWlzc2lvbklkRnJvbUxvY2F0aW9uID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xuICBjb25zdCBpZHM6IG51bWJlcltdID0gW11cblxuICAvLyAxLiBGcm9tIFVSTCBwYXRobmFtZVxuICBjb25zdCBkaXJlY3QgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL3N1Ym1pc3Npb25zXFwvKD86ZGV0YWlsXFwvKT8oXFxkKykvKVxuICBpZiAoZGlyZWN0Py5bMV0pIGlkcy5wdXNoKE51bWJlcihkaXJlY3RbMV0pKVxuXG4gIC8vIDIuIEZyb20gcXVlcnkgc3RyaW5nXG4gIGNvbnN0IGZyb21RdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KFwic3VibWlzc2lvbklkXCIpXG4gIGlmIChmcm9tUXVlcnkpIGlkcy5wdXNoKE51bWJlcihmcm9tUXVlcnkpKVxuXG4gIC8vIDMuIEZyb20gYWxsIGxpbmtzXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oJ2FbaHJlZio9XCIvc3VibWlzc2lvbnMvXCJdJylcbiAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBjb25zdCBtYXRjaCA9IGxpbmsuaHJlZi5tYXRjaCgvc3VibWlzc2lvbnNcXC8oPzpkZXRhaWxcXC8pPyhcXGQrKS8pXG4gICAgaWYgKG1hdGNoPy5bMV0pIGlkcy5wdXNoKE51bWJlcihtYXRjaFsxXSkpXG4gIH0pXG5cbiAgLy8gNC4gRnJvbSBwYWdlIHRleHRcbiAgY29uc3QgdGV4dE1hdGNoZXMgPSBkb2N1bWVudC5ib2R5LmlubmVySFRNTC5tYXRjaEFsbCgvc3VibWlzc2lvblteMC05XXswLDIwfShcXGR7Nix9KS9naSlcbiAgZm9yIChjb25zdCBtYXRjaCBvZiB0ZXh0TWF0Y2hlcykge1xuICAgIGlmIChtYXRjaFsxXSkgaWRzLnB1c2goTnVtYmVyKG1hdGNoWzFdKSlcbiAgfVxuXG4gIGlmIChpZHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gIC8vIFJldHVybiB0aGUgbWF4aW11bSBJRCAobW9zdCByZWNlbnQpXG4gIGNvbnN0IG1heElkID0gTWF0aC5tYXgoLi4uaWRzLmZpbHRlcihpZCA9PiAhTnVtYmVyLmlzTmFOKGlkKSkpXG4gIHJldHVybiBtYXhJZCA+IDAgPyBtYXhJZC50b1N0cmluZygpIDogbnVsbFxufVxuXG5jb25zdCBpc0FjY2VwdGVkVmlzaWJsZSA9ICgpOiBib29sZWFuID0+IHtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmJvZHkuaW5uZXJUZXh0XG4gIHJldHVybiAvQWNjZXB0ZWR8U3VjY2Vzc3xSdW50aW1lfE1lbW9yeS9pLnRlc3QodGV4dClcbn1cblxuY29uc3QgcmVtb3ZlQnV0dG9uID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChCVVRUT05fSUQpPy5yZW1vdmUoKVxufVxuXG5jb25zdCBjcmVhdGVVcGxvYWRCdXR0b24gPSAoKSA9PiB7XG4gIGlmICghY3VycmVudFBlbmRpbmcgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQlVUVE9OX0lEKSkgcmV0dXJuXG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICBidXR0b24uaWQgPSBCVVRUT05fSURcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJQdXNoIHRvIEdpdEh1YlwiXG4gIGJ1dHRvbi5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIlxuICBidXR0b24uc3R5bGUucmlnaHQgPSBcIjIwcHhcIlxuICBidXR0b24uc3R5bGUuYm90dG9tID0gXCIyMHB4XCJcbiAgYnV0dG9uLnN0eWxlLnpJbmRleCA9IFwiOTk5OTlcIlxuICBidXR0b24uc3R5bGUucGFkZGluZyA9IFwiMTBweCAxNHB4XCJcbiAgYnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiOHB4XCJcbiAgYnV0dG9uLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMxZDRlZDhcIlxuICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9IFwiIzI1NjNlYlwiXG4gIGJ1dHRvbi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIlxuICBidXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwiNjAwXCJcbiAgYnV0dG9uLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiXG5cbiAgYnV0dG9uLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBnZXRTZXR0aW5ncygpXG4gICAgaWYgKCFzZXR0aW5ncy5naXRodWIudG9rZW4gfHwgIXNldHRpbmdzLmdpdGh1Yi5vd25lciB8fCAhc2V0dGluZ3MuZ2l0aHViLnJlcG8pIHtcbiAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBjb25maWd1cmUgR2l0SHViIHNldHRpbmdzIGluIGV4dGVuc2lvbiBwb3B1cCBmaXJzdC5cIilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRpbWVDb21wbGV4aXR5ID0gd2luZG93LnByb21wdChcIkVudGVyIFRpbWUgQ29tcGxleGl0eVwiLCBcIk8obilcIikgPz8gXCJcIlxuICAgIGNvbnN0IHNwYWNlQ29tcGxleGl0eSA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciBTcGFjZSBDb21wbGV4aXR5XCIsIFwiTygxKVwiKSA/PyBcIlwiXG4gICAgY29uc3QgcGFyc2VkID0gY29tcGxleGl0eVNjaGVtYS5zYWZlUGFyc2UoeyB0aW1lQ29tcGxleGl0eSwgc3BhY2VDb21wbGV4aXR5IH0pXG4gICAgaWYgKCFwYXJzZWQuc3VjY2Vzcykge1xuICAgICAgd2luZG93LmFsZXJ0KFwiSW52YWxpZCBUQy9TQyBpbnB1dC4gRXhhbXBsZTogTyhuKSwgTygxKVwiKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJVcGxvYWRpbmcuLi5cIlxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIilcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogTUVTU0FHRV9UWVBFUy5SRVFVRVNUX1VQTE9BRCxcbiAgICAgIHBheWxvYWQ6IHsgbWV0YWRhdGE6IGN1cnJlbnRQZW5kaW5nPy5tZXRhZGF0YSwgY29tcGxleGl0eTogcGFyc2VkLmRhdGEgfVxuICAgIH0pXG5cbiAgICBpZiAocmVzcG9uc2U/Lm9rKSB7XG4gICAgICB3aW5kb3cuYWxlcnQoYFVwbG9hZGVkIHRvIEdpdEh1YjogJHtyZXNwb25zZS5maWxlUGF0aH1gKVxuICAgICAgY3VycmVudFBlbmRpbmcgPSBudWxsXG4gICAgICByZW1vdmVCdXR0b24oKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuYWxlcnQocmVzcG9uc2U/LmVycm9yID8/IFwiVXBsb2FkIGZhaWxlZFwiKVxuICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJQdXNoIHRvIEdpdEh1YlwiXG4gICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIilcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ1dHRvbilcbn1cblxuY29uc3QgZGV0ZWN0QW5kRW1pdCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3Qgc3VibWlzc2lvbklkID0gZ2V0U3VibWlzc2lvbklkRnJvbUxvY2F0aW9uKClcbiAgaWYgKCFpc0FjY2VwdGVkVmlzaWJsZSgpKSByZXR1cm5cbiAgaWYgKCFzdWJtaXNzaW9uSWQpIHJldHVyblxuXG4gIHRyeSB7XG4gICAgY29uc3QgbGFzdElkID0gYXdhaXQgZ2V0TGFzdFN1Ym1pc3Npb25JZCgpXG4gICAgaWYgKGxhc3RJZCA9PT0gc3VibWlzc2lvbklkKSByZXR1cm5cblxuICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgZmV0Y2hTdWJtaXNzaW9uTWV0YWRhdGEoc3VibWlzc2lvbklkKVxuICAgIGF3YWl0IG1hcmtMYXN0U3VibWlzc2lvbklkKHN1Ym1pc3Npb25JZClcblxuICAgIGN1cnJlbnRQZW5kaW5nID0geyBtZXRhZGF0YSwgZGV0ZWN0ZWRBdElzbzogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH1cbiAgICBhd2FpdCBzZXRQZW5kaW5nU3VibWlzc2lvbihjdXJyZW50UGVuZGluZylcbiAgICBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6IE1FU1NBR0VfVFlQRVMuUEVORElOR19TVUJNSVNTSU9OLCBwYXlsb2FkOiBjdXJyZW50UGVuZGluZyB9KVxuXG4gICAgY3JlYXRlVXBsb2FkQnV0dG9uKClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjdXJyZW50UGVuZGluZyA9IG51bGxcbiAgICByZW1vdmVCdXR0b24oKVxuICAgIFxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJFeHRlbnNpb24gY29udGV4dCBpbnZhbGlkYXRlZFwiKSkge1xuICAgICAgY29uc29sZS53YXJuKFwiRXh0ZW5zaW9uIHdhcyB1cGRhdGVkLiBQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZSB0byBjb250aW51ZSB1c2luZyB0aGUgZXh0ZW5zaW9uLlwiKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGRldGVjdCBhbmQgZW1pdCBMZWV0Q29kZSBzdWJtaXNzaW9uICR7c3VibWlzc2lvbklkfS5gLCBlcnJvcilcbiAgfVxufVxuY29uc3QgcGF0Y2hIaXN0b3J5RXZlbnRzID0gKCkgPT4ge1xuICBjb25zdCByYXdQdXNoID0gaGlzdG9yeS5wdXNoU3RhdGVcbiAgY29uc3QgcmF3UmVwbGFjZSA9IGhpc3RvcnkucmVwbGFjZVN0YXRlXG5cbiAgaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIHJhd1B1c2guYXBwbHkodGhpcywgYXJncyBhcyBhbnkpXG4gICAgc2NoZWR1bGVEZXRlY3Rpb24oKVxuICB9XG5cbiAgaGlzdG9yeS5yZXBsYWNlU3RhdGUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIHJhd1JlcGxhY2UuYXBwbHkodGhpcywgYXJncyBhcyBhbnkpXG4gICAgc2NoZWR1bGVEZXRlY3Rpb24oKVxuICB9XG59XG5cbmxldCB0aW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGxcbmNvbnN0IHNjaGVkdWxlRGV0ZWN0aW9uID0gKCkgPT4ge1xuICBpZiAodGltZXIpIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpXG4gIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdm9pZCBkZXRlY3RBbmRFbWl0KCksIDYwMClcbn1cblxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihzY2hlZHVsZURldGVjdGlvbilcbm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCAoKSA9PiB7XG4gIGN1cnJlbnRQZW5kaW5nID0gbnVsbFxuICByZW1vdmVCdXR0b24oKVxuICBzY2hlZHVsZURldGVjdGlvbigpXG59KVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHNjaGVkdWxlRGV0ZWN0aW9uKVxucGF0Y2hIaXN0b3J5RXZlbnRzKClcbnNjaGVkdWxlRGV0ZWN0aW9uKCkiLCJleHBvcnQgY29uc3QgTUVTU0FHRV9UWVBFUyA9IHtcbiAgUEVORElOR19TVUJNSVNTSU9OOiBcIlBFTkRJTkdfU1VCTUlTU0lPTlwiLFxuICBSRVFVRVNUX1VQTE9BRDogXCJSRVFVRVNUX1VQTE9BRFwiLFxuICBVUExPQURfU1RBVFVTOiBcIlVQTE9BRF9TVEFUVVNcIixcbiAgVkFMSURBVEVfR0lUSFVCOiBcIlZBTElEQVRFX0dJVEhVQlwiLFxuICBHRVRfUEVORElOR19TVUJNSVNTSU9OOiBcIkdFVF9QRU5ESU5HX1NVQk1JU1NJT05cIlxufSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgU1RPUkFHRV9LRVlTID0ge1xuICBTRVRUSU5HUzogXCJzZXR0aW5nc1wiLFxuICBSRUNFTlRfVVBMT0FEUzogXCJyZWNlbnRVcGxvYWRzXCIsXG4gIExBU1RfUFJPQ0VTU0VEX1NVQk1JU1NJT05fSUQ6IFwibGFzdFByb2Nlc3NlZFN1Ym1pc3Npb25JZFwiLFxuICBQRU5ESU5HX1NVQk1JU1NJT046IFwicGVuZGluZ1N1Ym1pc3Npb25cIlxufSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgQVBJX0VORFBPSU5UUyA9IHtcbiAgTEVFVENPREVfR1JBUEhRTDogcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19MRUVUQ09ERV9HUkFQSFFMID8/IFwiaHR0cHM6Ly9sZWV0Y29kZS5jb20vZ3JhcGhxbFwiLFxuICBHSVRIVUJfQVBJOiBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX0dJVEhVQl9BUEkgPz8gXCJodHRwczovL2FwaS5naXRodWIuY29tXCJcbn0gYXMgY29uc3RcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGxlZXRjb2RlR3JhcGhxbCB9IGZyb20gXCIuL2NsaWVudFwiXG5pbXBvcnQgeyBBcHBFcnJvciB9IGZyb20gXCJ+dXRpbHMvZXJyb3JzXCJcbmltcG9ydCB0eXBlIHsgTGVldENvZGVQcm9ibGVtTWV0YWRhdGEgfSBmcm9tIFwifnR5cGVzXCJcblxuaW50ZXJmYWNlIFN1Ym1pc3Npb25EZXRhaWxEYXRhIHtcbiAgc3VibWlzc2lvbkRldGFpbHM6IHtcbiAgICBpZDogc3RyaW5nXG4gICAgbGFuZzogeyBuYW1lOiBzdHJpbmc7IHZlcmJvc2VOYW1lOiBzdHJpbmcgfVxuICAgIHJ1bnRpbWU6IHN0cmluZ1xuICAgIG1lbW9yeTogc3RyaW5nXG4gICAgY29kZTogc3RyaW5nXG4gICAgdGltZXN0YW1wOiBzdHJpbmdcbiAgICBxdWVzdGlvbjoge1xuICAgICAgdGl0bGU6IHN0cmluZ1xuICAgICAgdGl0bGVTbHVnOiBzdHJpbmdcbiAgICAgIGRpZmZpY3VsdHk6IFwiRWFzeVwiIHwgXCJNZWRpdW1cIiB8IFwiSGFyZFwiXG4gICAgICB0b3BpY1RhZ3M6IEFycmF5PHsgbmFtZTogc3RyaW5nIH0+XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHF1ZXJ5ID0gYFxucXVlcnkgc3VibWlzc2lvbkRldGFpbHMoJHN1Ym1pc3Npb25JZDogSW50ISkge1xuICBzdWJtaXNzaW9uRGV0YWlscyhzdWJtaXNzaW9uSWQ6ICRzdWJtaXNzaW9uSWQpIHtcbiAgICBpZFxuICAgIGxhbmcgeyBuYW1lIHZlcmJvc2VOYW1lIH1cbiAgICBydW50aW1lXG4gICAgbWVtb3J5XG4gICAgY29kZVxuICAgIHRpbWVzdGFtcFxuICAgIHF1ZXN0aW9uIHtcbiAgICAgIHRpdGxlXG4gICAgICB0aXRsZVNsdWdcbiAgICAgIGRpZmZpY3VsdHlcbiAgICAgIHRvcGljVGFncyB7IG5hbWUgfVxuICAgIH1cbiAgfVxufWBcblxuZXhwb3J0IGNvbnN0IGZldGNoU3VibWlzc2lvbk1ldGFkYXRhID0gYXN5bmMgKHN1Ym1pc3Npb25JZDogc3RyaW5nKTogUHJvbWlzZTxMZWV0Q29kZVByb2JsZW1NZXRhZGF0YT4gPT4ge1xuICBjb25zdCBudW1lcmljSWQgPSBOdW1iZXIoc3VibWlzc2lvbklkKVxuICBpZiAoTnVtYmVyLmlzTmFOKG51bWVyaWNJZCkpIHRocm93IG5ldyBBcHBFcnJvcihcIkludmFsaWQgc3VibWlzc2lvbiBpZFwiLCBcIlZBTElEQVRJT05cIilcblxuICBjb25zdCBkYXRhID0gYXdhaXQgbGVldGNvZGVHcmFwaHFsPFN1Ym1pc3Npb25EZXRhaWxEYXRhPih7XG4gICAgcXVlcnksXG4gICAgdmFyaWFibGVzOiB7IHN1Ym1pc3Npb25JZDogbnVtZXJpY0lkIH0sXG4gICAgb3BlcmF0aW9uTmFtZTogXCJzdWJtaXNzaW9uRGV0YWlsc1wiXG4gIH0pXG5cbiAgY29uc3QgZGV0YWlscyA9IGRhdGEuc3VibWlzc2lvbkRldGFpbHNcbiAgaWYgKCFkZXRhaWxzPy5xdWVzdGlvbj8udGl0bGVTbHVnKSB0aHJvdyBuZXcgQXBwRXJyb3IoXCJTdWJtaXNzaW9uIG1ldGFkYXRhIHVuYXZhaWxhYmxlXCIsIFwiVkFMSURBVElPTlwiKVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGRldGFpbHMucXVlc3Rpb24udGl0bGUsXG4gICAgc2x1ZzogZGV0YWlscy5xdWVzdGlvbi50aXRsZVNsdWcsXG4gICAgZGlmZmljdWx0eTogZGV0YWlscy5xdWVzdGlvbi5kaWZmaWN1bHR5LFxuICAgIHRvcGljVGFnczogZGV0YWlscy5xdWVzdGlvbi50b3BpY1RhZ3MubWFwKCh0YWcpID0+IHRhZy5uYW1lKSxcbiAgICBsYW5ndWFnZTogZGV0YWlscy5sYW5nLm5hbWUsXG4gICAgY29kZTogZGV0YWlscy5jb2RlLFxuICAgIHJ1bnRpbWU6IGRldGFpbHMucnVudGltZSxcbiAgICBtZW1vcnk6IGRldGFpbHMubWVtb3J5LFxuICAgIHN1Ym1pc3Npb25JZDogZGV0YWlscy5pZCxcbiAgICBzdWJtaXR0ZWRBdElzbzogbmV3IERhdGUoTnVtYmVyKGRldGFpbHMudGltZXN0YW1wKSAqIDEwMDApLnRvSVNPU3RyaW5nKCksXG4gICAgdXJsOiBgaHR0cHM6Ly9sZWV0Y29kZS5jb20vcHJvYmxlbXMvJHtkZXRhaWxzLnF1ZXN0aW9uLnRpdGxlU2x1Z30vYFxuICB9XG59XG4iLCJpbXBvcnQgeyBBUElfRU5EUE9JTlRTIH0gZnJvbSBcIn5jb25zdGFudHNcIlxuXG5pbnRlcmZhY2UgR3JhcGhxbFJlcXVlc3Q8VD4ge1xuICBxdWVyeTogc3RyaW5nXG4gIHZhcmlhYmxlczogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgb3BlcmF0aW9uTmFtZTogc3RyaW5nXG59XG5cbmNvbnN0IGdldENzcmZUb2tlbiA9ICgpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaCgvKD86Xnw7KSAqY3NyZnRva2VuPShbXjtdKikvKVxuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6IFwiXCJcbn1cblxuZXhwb3J0IGNvbnN0IGxlZXRjb2RlR3JhcGhxbCA9IGFzeW5jIDxUPihwYXlsb2FkOiBHcmFwaHFsUmVxdWVzdDxUPik6IFByb21pc2U8VD4gPT4ge1xuICBjb25zdCBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0geyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XG4gIGNvbnN0IGNzcmYgPSBnZXRDc3JmVG9rZW4oKVxuICBpZiAoY3NyZikgaGVhZGVyc1tcIngtY3NyZnRva2VuXCJdID0gY3NyZlxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX0VORFBPSU5UUy5MRUVUQ09ERV9HUkFQSFFMLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzLFxuICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxuICB9KVxuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpLmNhdGNoKCgpID0+IFwiXCIpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBMZWV0Q29kZSBBUEkgZXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfSAtICR7dGV4dH1gKVxuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgaWYgKGRhdGEuZXJyb3JzPy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yc1swXS5tZXNzYWdlKVxuICByZXR1cm4gZGF0YS5kYXRhIGFzIFRcbn1cbiIsImV4cG9ydCBjbGFzcyBBcHBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBjb2RlOlxuICAgICAgfCBcIklOVkFMSURfVE9LRU5cIlxuICAgICAgfCBcIlJFUE9fTk9UX0ZPVU5EXCJcbiAgICAgIHwgXCJSQVRFX0xJTUlUXCJcbiAgICAgIHwgXCJORVRXT1JLXCJcbiAgICAgIHwgXCJWQUxJREFUSU9OXCJcbiAgICAgIHwgXCJEVVBMSUNBVEVcIlxuICAgICAgfCBcIlVOS05PV05cIixcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmV0cnlhYmxlID0gZmFsc2VcbiAgKSB7XG4gICAgc3VwZXIobWVzc2FnZSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9BcHBFcnJvciA9IChlcnJvcjogdW5rbm93bik6IEFwcEVycm9yID0+IHtcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgQXBwRXJyb3IpIHJldHVybiBlcnJvclxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIG5ldyBBcHBFcnJvcihlcnJvci5tZXNzYWdlLCBcIlVOS05PV05cIiwgZmFsc2UpXG4gIHJldHVybiBuZXcgQXBwRXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yXCIsIFwiVU5LTk9XTlwiLCBmYWxzZSlcbn1cbiIsImltcG9ydCB7IFNUT1JBR0VfS0VZUyB9IGZyb20gXCJ+Y29uc3RhbnRzXCJcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uU2V0dGluZ3MsIFBlbmRpbmdTdWJtaXNzaW9uLCBVcGxvYWRSZWNvcmQgfSBmcm9tIFwifnR5cGVzXCJcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTZXR0aW5nczogRXh0ZW5zaW9uU2V0dGluZ3MgPSB7XG4gIGF1dG9VcGxvYWRFbmFibGVkOiB0cnVlLFxuICBhc2tDb21wbGV4aXR5T25BY2NlcHRlZDogdHJ1ZSxcbiAgbWF4VXBsb2FkUmV0cmllczogMixcbiAgZ2l0aHViOiB7IHRva2VuOiBcIlwiLCBvd25lcjogXCJcIiwgcmVwbzogXCJcIiwgYnJhbmNoOiBcIm1haW5cIiwgYmFzZVBhdGg6IFwibGVldGNvZGUtc29sdXRpb25zXCIgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2V0dGluZ3MgPSBhc3luYyAoKTogUHJvbWlzZTxFeHRlbnNpb25TZXR0aW5ncz4gPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoU1RPUkFHRV9LRVlTLlNFVFRJTkdTKVxuICByZXR1cm4gcmVzdWx0W1NUT1JBR0VfS0VZUy5TRVRUSU5HU10gPz8gZGVmYXVsdFNldHRpbmdzXG59XG5cbmV4cG9ydCBjb25zdCBzZXRTZXR0aW5ncyA9IGFzeW5jIChzZXR0aW5nczogRXh0ZW5zaW9uU2V0dGluZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW1NUT1JBR0VfS0VZUy5TRVRUSU5HU106IHNldHRpbmdzIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQZW5kaW5nU3VibWlzc2lvbiA9IGFzeW5jICgpOiBQcm9taXNlPFBlbmRpbmdTdWJtaXNzaW9uIHwgbnVsbD4gPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoU1RPUkFHRV9LRVlTLlBFTkRJTkdfU1VCTUlTU0lPTilcbiAgcmV0dXJuIHJlc3VsdFtTVE9SQUdFX0tFWVMuUEVORElOR19TVUJNSVNTSU9OXSA/PyBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBzZXRQZW5kaW5nU3VibWlzc2lvbiA9IGFzeW5jIChwZW5kaW5nOiBQZW5kaW5nU3VibWlzc2lvbiB8IG51bGwpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW1NUT1JBR0VfS0VZUy5QRU5ESU5HX1NVQk1JU1NJT05dOiBwZW5kaW5nIH0pXG59XG5cbmV4cG9ydCBjb25zdCBtYXJrTGFzdFN1Ym1pc3Npb25JZCA9IGFzeW5jIChzdWJtaXNzaW9uSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbU1RPUkFHRV9LRVlTLkxBU1RfUFJPQ0VTU0VEX1NVQk1JU1NJT05fSURdOiBzdWJtaXNzaW9uSWQgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldExhc3RTdWJtaXNzaW9uSWQgPSBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChTVE9SQUdFX0tFWVMuTEFTVF9QUk9DRVNTRURfU1VCTUlTU0lPTl9JRClcbiAgcmV0dXJuIHJlc3VsdFtTVE9SQUdFX0tFWVMuTEFTVF9QUk9DRVNTRURfU1VCTUlTU0lPTl9JRF0gPz8gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgYWRkVXBsb2FkUmVjb3JkID0gYXN5bmMgKHJlY29yZDogVXBsb2FkUmVjb3JkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChTVE9SQUdFX0tFWVMuUkVDRU5UX1VQTE9BRFMpXG4gIGNvbnN0IHByZXZpb3VzOiBVcGxvYWRSZWNvcmRbXSA9IHJlc3VsdFtTVE9SQUdFX0tFWVMuUkVDRU5UX1VQTE9BRFNdID8/IFtdXG4gIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFtTVE9SQUdFX0tFWVMuUkVDRU5UX1VQTE9BRFNdOiBbcmVjb3JkLCAuLi5wcmV2aW91c10uc2xpY2UoMCwgMjApIH0pXG59XG4iLCJpbXBvcnQgKiBhcyB6IGZyb20gXCJ6b2RcIlxuXG5leHBvcnQgY29uc3QgY29tcGxleGl0eVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdGltZUNvbXBsZXhpdHk6IHouc3RyaW5nKCkubWluKDIpLm1heCg0MCksXG4gIHNwYWNlQ29tcGxleGl0eTogei5zdHJpbmcoKS5taW4oMikubWF4KDQwKVxufSlcblxuZXhwb3J0IGNvbnN0IGdpdGh1YlNldHRpbmdzU2NoZW1hID0gei5vYmplY3Qoe1xuICB0b2tlbjogei5zdHJpbmcoKS5taW4oMTApLFxuICBvd25lcjogei5zdHJpbmcoKS5taW4oMSksXG4gIHJlcG86IHouc3RyaW5nKCkubWluKDEpLFxuICBicmFuY2g6IHouc3RyaW5nKCkubWluKDEpLFxuICBiYXNlUGF0aDogei5zdHJpbmcoKS5taW4oMSlcbn0pXG4iLCJpbXBvcnQgKiBhcyB6IGZyb20gXCIuL3YzL2V4dGVybmFsLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi92My9leHRlcm5hbC5qc1wiO1xuZXhwb3J0IHsgeiB9O1xuZXhwb3J0IGRlZmF1bHQgejtcbiIsImV4cG9ydCAqIGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vaGVscGVycy9wYXJzZVV0aWwuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2hlbHBlcnMvdHlwZUFsaWFzZXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2hlbHBlcnMvdXRpbC5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdHlwZXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1pvZEVycm9yLmpzXCI7XG4iLCJpbXBvcnQgZGVmYXVsdEVycm9yTWFwIGZyb20gXCIuL2xvY2FsZXMvZW4uanNcIjtcbmxldCBvdmVycmlkZUVycm9yTWFwID0gZGVmYXVsdEVycm9yTWFwO1xuZXhwb3J0IHsgZGVmYXVsdEVycm9yTWFwIH07XG5leHBvcnQgZnVuY3Rpb24gc2V0RXJyb3JNYXAobWFwKSB7XG4gICAgb3ZlcnJpZGVFcnJvck1hcCA9IG1hcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvck1hcCgpIHtcbiAgICByZXR1cm4gb3ZlcnJpZGVFcnJvck1hcDtcbn1cbiIsImltcG9ydCB7IFpvZElzc3VlQ29kZSB9IGZyb20gXCIuLi9ab2RFcnJvci5qc1wiO1xuaW1wb3J0IHsgdXRpbCwgWm9kUGFyc2VkVHlwZSB9IGZyb20gXCIuLi9oZWxwZXJzL3V0aWwuanNcIjtcbmNvbnN0IGVycm9yTWFwID0gKGlzc3VlLCBfY3R4KSA9PiB7XG4gICAgbGV0IG1lc3NhZ2U7XG4gICAgc3dpdGNoIChpc3N1ZS5jb2RlKSB7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZTpcbiAgICAgICAgICAgIGlmIChpc3N1ZS5yZWNlaXZlZCA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJSZXF1aXJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBFeHBlY3RlZCAke2lzc3VlLmV4cGVjdGVkfSwgcmVjZWl2ZWQgJHtpc3N1ZS5yZWNlaXZlZH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfbGl0ZXJhbDpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBsaXRlcmFsIHZhbHVlLCBleHBlY3RlZCAke0pTT04uc3RyaW5naWZ5KGlzc3VlLmV4cGVjdGVkLCB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlcil9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS51bnJlY29nbml6ZWRfa2V5czpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVW5yZWNvZ25pemVkIGtleShzKSBpbiBvYmplY3Q6ICR7dXRpbC5qb2luVmFsdWVzKGlzc3VlLmtleXMsIFwiLCBcIil9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3I6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZGlzY3JpbWluYXRvciB2YWx1ZS4gRXhwZWN0ZWQgJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUub3B0aW9ucyl9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWU6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZW51bSB2YWx1ZS4gRXhwZWN0ZWQgJHt1dGlsLmpvaW5WYWx1ZXMoaXNzdWUub3B0aW9ucyl9LCByZWNlaXZlZCAnJHtpc3N1ZS5yZWNlaXZlZH0nYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2FyZ3VtZW50czpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBmdW5jdGlvbiBhcmd1bWVudHNgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfcmV0dXJuX3R5cGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgZnVuY3Rpb24gcmV0dXJuIHR5cGVgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLmludmFsaWRfZGF0ZTpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW52YWxpZCBkYXRlYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZzpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXNzdWUudmFsaWRhdGlvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGlmIChcImluY2x1ZGVzXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3QgaW5jbHVkZSBcIiR7aXNzdWUudmFsaWRhdGlvbi5pbmNsdWRlc31cImA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXNzdWUudmFsaWRhdGlvbi5wb3NpdGlvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGAke21lc3NhZ2V9IGF0IG9uZSBvciBtb3JlIHBvc2l0aW9ucyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHtpc3N1ZS52YWxpZGF0aW9uLnBvc2l0aW9ufWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXCJzdGFydHNXaXRoXCIgaW4gaXNzdWUudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEludmFsaWQgaW5wdXQ6IG11c3Qgc3RhcnQgd2l0aCBcIiR7aXNzdWUudmFsaWRhdGlvbi5zdGFydHNXaXRofVwiYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXCJlbmRzV2l0aFwiIGluIGlzc3VlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0OiBtdXN0IGVuZCB3aXRoIFwiJHtpc3N1ZS52YWxpZGF0aW9uLmVuZHNXaXRofVwiYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoaXNzdWUudmFsaWRhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudmFsaWRhdGlvbiAhPT0gXCJyZWdleFwiKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkICR7aXNzdWUudmFsaWRhdGlvbn1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19zbWFsbDpcbiAgICAgICAgICAgIGlmIChpc3N1ZS50eXBlID09PSBcImFycmF5XCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBBcnJheSBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IFwiZXhhY3RseVwiIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IGxlYXN0YCA6IGBtb3JlIHRoYW5gfSAke2lzc3VlLm1pbmltdW19IGVsZW1lbnQocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFN0cmluZyBtdXN0IGNvbnRhaW4gJHtpc3N1ZS5leGFjdCA/IFwiZXhhY3RseVwiIDogaXNzdWUuaW5jbHVzaXZlID8gYGF0IGxlYXN0YCA6IGBvdmVyYH0gJHtpc3N1ZS5taW5pbXVtfSBjaGFyYWN0ZXIocylgO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseSBlcXVhbCB0byBgIDogaXNzdWUuaW5jbHVzaXZlID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgIDogYGdyZWF0ZXIgdGhhbiBgfSR7aXNzdWUubWluaW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJiaWdpbnRcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYE51bWJlciBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseSBlcXVhbCB0byBgIDogaXNzdWUuaW5jbHVzaXZlID8gYGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBgIDogYGdyZWF0ZXIgdGhhbiBgfSR7aXNzdWUubWluaW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJkYXRlXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBEYXRlIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5IGVxdWFsIHRvIGAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGAgOiBgZ3JlYXRlciB0aGFuIGB9JHtuZXcgRGF0ZShOdW1iZXIoaXNzdWUubWluaW11bSkpfWA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLnRvb19iaWc6XG4gICAgICAgICAgICBpZiAoaXNzdWUudHlwZSA9PT0gXCJhcnJheVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQXJyYXkgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgbGVzcyB0aGFuYH0gJHtpc3N1ZS5tYXhpbXVtfSBlbGVtZW50KHMpYDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBTdHJpbmcgbXVzdCBjb250YWluICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgYXQgbW9zdGAgOiBgdW5kZXJgfSAke2lzc3VlLm1heGltdW19IGNoYXJhY3RlcihzKWA7XG4gICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS50eXBlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTnVtYmVyIG11c3QgYmUgJHtpc3N1ZS5leGFjdCA/IGBleGFjdGx5YCA6IGlzc3VlLmluY2x1c2l2ZSA/IGBsZXNzIHRoYW4gb3IgZXF1YWwgdG9gIDogYGxlc3MgdGhhbmB9ICR7aXNzdWUubWF4aW11bX1gO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUudHlwZSA9PT0gXCJiaWdpbnRcIilcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEJpZ0ludCBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgbGVzcyB0aGFuIG9yIGVxdWFsIHRvYCA6IGBsZXNzIHRoYW5gfSAke2lzc3VlLm1heGltdW19YDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLnR5cGUgPT09IFwiZGF0ZVwiKVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRGF0ZSBtdXN0IGJlICR7aXNzdWUuZXhhY3QgPyBgZXhhY3RseWAgOiBpc3N1ZS5pbmNsdXNpdmUgPyBgc21hbGxlciB0aGFuIG9yIGVxdWFsIHRvYCA6IGBzbWFsbGVyIHRoYW5gfSAke25ldyBEYXRlKE51bWJlcihpc3N1ZS5tYXhpbXVtKSl9YDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUuY3VzdG9tOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBJbnZhbGlkIGlucHV0YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFpvZElzc3VlQ29kZS5pbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlczpcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgSW50ZXJzZWN0aW9uIHJlc3VsdHMgY291bGQgbm90IGJlIG1lcmdlZGA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBab2RJc3N1ZUNvZGUubm90X211bHRpcGxlX29mOlxuICAgICAgICAgICAgbWVzc2FnZSA9IGBOdW1iZXIgbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7aXNzdWUubXVsdGlwbGVPZn1gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgWm9kSXNzdWVDb2RlLm5vdF9maW5pdGU6XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJOdW1iZXIgbXVzdCBiZSBmaW5pdGVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbWVzc2FnZSA9IF9jdHguZGVmYXVsdEVycm9yO1xuICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihpc3N1ZSk7XG4gICAgfVxuICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBlcnJvck1hcDtcbiIsImltcG9ydCB7IHV0aWwgfSBmcm9tIFwiLi9oZWxwZXJzL3V0aWwuanNcIjtcbmV4cG9ydCBjb25zdCBab2RJc3N1ZUNvZGUgPSB1dGlsLmFycmF5VG9FbnVtKFtcbiAgICBcImludmFsaWRfdHlwZVwiLFxuICAgIFwiaW52YWxpZF9saXRlcmFsXCIsXG4gICAgXCJjdXN0b21cIixcbiAgICBcImludmFsaWRfdW5pb25cIixcbiAgICBcImludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvclwiLFxuICAgIFwiaW52YWxpZF9lbnVtX3ZhbHVlXCIsXG4gICAgXCJ1bnJlY29nbml6ZWRfa2V5c1wiLFxuICAgIFwiaW52YWxpZF9hcmd1bWVudHNcIixcbiAgICBcImludmFsaWRfcmV0dXJuX3R5cGVcIixcbiAgICBcImludmFsaWRfZGF0ZVwiLFxuICAgIFwiaW52YWxpZF9zdHJpbmdcIixcbiAgICBcInRvb19zbWFsbFwiLFxuICAgIFwidG9vX2JpZ1wiLFxuICAgIFwiaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXNcIixcbiAgICBcIm5vdF9tdWx0aXBsZV9vZlwiLFxuICAgIFwibm90X2Zpbml0ZVwiLFxuXSk7XG5leHBvcnQgY29uc3QgcXVvdGVsZXNzSnNvbiA9IChvYmopID0+IHtcbiAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCAyKTtcbiAgICByZXR1cm4ganNvbi5yZXBsYWNlKC9cIihbXlwiXSspXCI6L2csIFwiJDE6XCIpO1xufTtcbmV4cG9ydCBjbGFzcyBab2RFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBnZXQgZXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc3N1ZXM7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGlzc3Vlcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzc3VlcyA9IFtdO1xuICAgICAgICB0aGlzLmFkZElzc3VlID0gKHN1YikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc3N1ZXMgPSBbLi4udGhpcy5pc3N1ZXMsIHN1Yl07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWRkSXNzdWVzID0gKHN1YnMgPSBbXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc3N1ZXMgPSBbLi4udGhpcy5pc3N1ZXMsIC4uLnN1YnNdO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhY3R1YWxQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFuL2JhblxuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIGFjdHVhbFByb3RvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX19wcm90b19fID0gYWN0dWFsUHJvdG87XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYW1lID0gXCJab2RFcnJvclwiO1xuICAgICAgICB0aGlzLmlzc3VlcyA9IGlzc3VlcztcbiAgICB9XG4gICAgZm9ybWF0KF9tYXBwZXIpIHtcbiAgICAgICAgY29uc3QgbWFwcGVyID0gX21hcHBlciB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGlzc3VlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzc3VlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IHsgX2Vycm9yczogW10gfTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0Vycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlzc3VlIG9mIGVycm9yLmlzc3Vlcykge1xuICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb2RlID09PSBcImludmFsaWRfdW5pb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZS51bmlvbkVycm9ycy5tYXAocHJvY2Vzc0Vycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNzdWUuY29kZSA9PT0gXCJpbnZhbGlkX3JldHVybl90eXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGlzc3VlLnJldHVyblR5cGVFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzc3VlLmNvZGUgPT09IFwiaW52YWxpZF9hcmd1bWVudHNcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRXJyb3IoaXNzdWUuYXJndW1lbnRzRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc3N1ZS5wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZEVycm9ycy5fZXJyb3JzLnB1c2gobWFwcGVyKGlzc3VlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyciA9IGZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgaXNzdWUucGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gaXNzdWUucGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlcm1pbmFsID0gaSA9PT0gaXNzdWUucGF0aC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZXJtaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAodHlwZW9mIGVsID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBlcnJvckFycmF5OiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGVycm9yQXJyYXkuX2Vycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY3VycltlbF0gPSBjdXJyW2VsXSB8fCBlcnJvckFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdID0gY3VycltlbF0gfHwgeyBfZXJyb3JzOiBbXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJbZWxdLl9lcnJvcnMucHVzaChtYXBwZXIoaXNzdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIgPSBjdXJyW2VsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJvY2Vzc0Vycm9yKHRoaXMpO1xuICAgICAgICByZXR1cm4gZmllbGRFcnJvcnM7XG4gICAgfVxuICAgIHN0YXRpYyBhc3NlcnQodmFsdWUpIHtcbiAgICAgICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBab2RFcnJvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGEgWm9kRXJyb3I6ICR7dmFsdWV9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gICAgfVxuICAgIGdldCBtZXNzYWdlKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5pc3N1ZXMsIHV0aWwuanNvblN0cmluZ2lmeVJlcGxhY2VyLCAyKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzc3Vlcy5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIGZsYXR0ZW4obWFwcGVyID0gKGlzc3VlKSA9PiBpc3N1ZS5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0ge307XG4gICAgICAgIGNvbnN0IGZvcm1FcnJvcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5pc3N1ZXMpIHtcbiAgICAgICAgICAgIGlmIChzdWIucGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RFbCA9IHN1Yi5wYXRoWzBdO1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzW2ZpcnN0RWxdID0gZmllbGRFcnJvcnNbZmlyc3RFbF0gfHwgW107XG4gICAgICAgICAgICAgICAgZmllbGRFcnJvcnNbZmlyc3RFbF0ucHVzaChtYXBwZXIoc3ViKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3JzLnB1c2gobWFwcGVyKHN1YikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGZvcm1FcnJvcnMsIGZpZWxkRXJyb3JzIH07XG4gICAgfVxuICAgIGdldCBmb3JtRXJyb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuKCk7XG4gICAgfVxufVxuWm9kRXJyb3IuY3JlYXRlID0gKGlzc3VlcykgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IFpvZEVycm9yKGlzc3Vlcyk7XG4gICAgcmV0dXJuIGVycm9yO1xufTtcbiIsImV4cG9ydCB2YXIgdXRpbDtcbihmdW5jdGlvbiAodXRpbCkge1xuICAgIHV0aWwuYXNzZXJ0RXF1YWwgPSAoXykgPT4geyB9O1xuICAgIGZ1bmN0aW9uIGFzc2VydElzKF9hcmcpIHsgfVxuICAgIHV0aWwuYXNzZXJ0SXMgPSBhc3NlcnRJcztcbiAgICBmdW5jdGlvbiBhc3NlcnROZXZlcihfeCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgdXRpbC5hc3NlcnROZXZlciA9IGFzc2VydE5ldmVyO1xuICAgIHV0aWwuYXJyYXlUb0VudW0gPSAoaXRlbXMpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgb2JqW2l0ZW1dID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG4gICAgdXRpbC5nZXRWYWxpZEVudW1WYWx1ZXMgPSAob2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkS2V5cyA9IHV0aWwub2JqZWN0S2V5cyhvYmopLmZpbHRlcigoaykgPT4gdHlwZW9mIG9ialtvYmpba11dICE9PSBcIm51bWJlclwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrIG9mIHZhbGlkS2V5cykge1xuICAgICAgICAgICAgZmlsdGVyZWRba10gPSBvYmpba107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHV0aWwub2JqZWN0VmFsdWVzKGZpbHRlcmVkKTtcbiAgICB9O1xuICAgIHV0aWwub2JqZWN0VmFsdWVzID0gKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gdXRpbC5vYmplY3RLZXlzKG9iaikubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqW2VdO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHV0aWwub2JqZWN0S2V5cyA9IHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gXCJmdW5jdGlvblwiIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA/IChvYmopID0+IE9iamVjdC5rZXlzKG9iaikgLy8gZXNsaW50LWRpc2FibGUtbGluZSBiYW4vYmFuXG4gICAgICAgIDogKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgIH07XG4gICAgdXRpbC5maW5kID0gKGFyciwgY2hlY2tlcikgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tlcihpdGVtKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgdXRpbC5pc0ludGVnZXIgPSB0eXBlb2YgTnVtYmVyLmlzSW50ZWdlciA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gKHZhbCkgPT4gTnVtYmVyLmlzSW50ZWdlcih2YWwpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYmFuL2JhblxuICAgICAgICA6ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHZhbCkgJiYgTWF0aC5mbG9vcih2YWwpID09PSB2YWw7XG4gICAgZnVuY3Rpb24gam9pblZhbHVlcyhhcnJheSwgc2VwYXJhdG9yID0gXCIgfCBcIikge1xuICAgICAgICByZXR1cm4gYXJyYXkubWFwKCh2YWwpID0+ICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gYCcke3ZhbH0nYCA6IHZhbCkpLmpvaW4oc2VwYXJhdG9yKTtcbiAgICB9XG4gICAgdXRpbC5qb2luVmFsdWVzID0gam9pblZhbHVlcztcbiAgICB1dGlsLmpzb25TdHJpbmdpZnlSZXBsYWNlciA9IChfLCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJpZ2ludFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbn0pKHV0aWwgfHwgKHV0aWwgPSB7fSkpO1xuZXhwb3J0IHZhciBvYmplY3RVdGlsO1xuKGZ1bmN0aW9uIChvYmplY3RVdGlsKSB7XG4gICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyA9IChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5maXJzdCxcbiAgICAgICAgICAgIC4uLnNlY29uZCwgLy8gc2Vjb25kIG92ZXJ3cml0ZXMgZmlyc3RcbiAgICAgICAgfTtcbiAgICB9O1xufSkob2JqZWN0VXRpbCB8fCAob2JqZWN0VXRpbCA9IHt9KSk7XG5leHBvcnQgY29uc3QgWm9kUGFyc2VkVHlwZSA9IHV0aWwuYXJyYXlUb0VudW0oW1xuICAgIFwic3RyaW5nXCIsXG4gICAgXCJuYW5cIixcbiAgICBcIm51bWJlclwiLFxuICAgIFwiaW50ZWdlclwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICBcImRhdGVcIixcbiAgICBcImJpZ2ludFwiLFxuICAgIFwic3ltYm9sXCIsXG4gICAgXCJmdW5jdGlvblwiLFxuICAgIFwidW5kZWZpbmVkXCIsXG4gICAgXCJudWxsXCIsXG4gICAgXCJhcnJheVwiLFxuICAgIFwib2JqZWN0XCIsXG4gICAgXCJ1bmtub3duXCIsXG4gICAgXCJwcm9taXNlXCIsXG4gICAgXCJ2b2lkXCIsXG4gICAgXCJuZXZlclwiLFxuICAgIFwibWFwXCIsXG4gICAgXCJzZXRcIixcbl0pO1xuZXhwb3J0IGNvbnN0IGdldFBhcnNlZFR5cGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHQgPSB0eXBlb2YgZGF0YTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zdHJpbmc7XG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuaXNOYU4oZGF0YSkgPyBab2RQYXJzZWRUeXBlLm5hbiA6IFpvZFBhcnNlZFR5cGUubnVtYmVyO1xuICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYm9vbGVhbjtcbiAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5mdW5jdGlvbjtcbiAgICAgICAgY2FzZSBcImJpZ2ludFwiOlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYmlnaW50O1xuICAgICAgICBjYXNlIFwic3ltYm9sXCI6XG4gICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zeW1ib2w7XG4gICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUuYXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS50aGVuICYmIHR5cGVvZiBkYXRhLnRoZW4gPT09IFwiZnVuY3Rpb25cIiAmJiBkYXRhLmNhdGNoICYmIHR5cGVvZiBkYXRhLmNhdGNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5wcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBNYXAgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBab2RQYXJzZWRUeXBlLm1hcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgU2V0ICE9PSBcInVuZGVmaW5lZFwiICYmIGRhdGEgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIERhdGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGF0YSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9kUGFyc2VkVHlwZS5kYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUub2JqZWN0O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFpvZFBhcnNlZFR5cGUudW5rbm93bjtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgZ2V0RXJyb3JNYXAgfSBmcm9tIFwiLi4vZXJyb3JzLmpzXCI7XG5pbXBvcnQgZGVmYXVsdEVycm9yTWFwIGZyb20gXCIuLi9sb2NhbGVzL2VuLmpzXCI7XG5leHBvcnQgY29uc3QgbWFrZUlzc3VlID0gKHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgcGF0aCwgZXJyb3JNYXBzLCBpc3N1ZURhdGEgfSA9IHBhcmFtcztcbiAgICBjb25zdCBmdWxsUGF0aCA9IFsuLi5wYXRoLCAuLi4oaXNzdWVEYXRhLnBhdGggfHwgW10pXTtcbiAgICBjb25zdCBmdWxsSXNzdWUgPSB7XG4gICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgfTtcbiAgICBpZiAoaXNzdWVEYXRhLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uaXNzdWVEYXRhLFxuICAgICAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgICAgICAgICBtZXNzYWdlOiBpc3N1ZURhdGEubWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCI7XG4gICAgY29uc3QgbWFwcyA9IGVycm9yTWFwc1xuICAgICAgICAuZmlsdGVyKChtKSA9PiAhIW0pXG4gICAgICAgIC5zbGljZSgpXG4gICAgICAgIC5yZXZlcnNlKCk7XG4gICAgZm9yIChjb25zdCBtYXAgb2YgbWFwcykge1xuICAgICAgICBlcnJvck1lc3NhZ2UgPSBtYXAoZnVsbElzc3VlLCB7IGRhdGEsIGRlZmF1bHRFcnJvcjogZXJyb3JNZXNzYWdlIH0pLm1lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlzc3VlRGF0YSxcbiAgICAgICAgcGF0aDogZnVsbFBhdGgsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBFTVBUWV9QQVRIID0gW107XG5leHBvcnQgZnVuY3Rpb24gYWRkSXNzdWVUb0NvbnRleHQoY3R4LCBpc3N1ZURhdGEpIHtcbiAgICBjb25zdCBvdmVycmlkZU1hcCA9IGdldEVycm9yTWFwKCk7XG4gICAgY29uc3QgaXNzdWUgPSBtYWtlSXNzdWUoe1xuICAgICAgICBpc3N1ZURhdGE6IGlzc3VlRGF0YSxcbiAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICBlcnJvck1hcHM6IFtcbiAgICAgICAgICAgIGN0eC5jb21tb24uY29udGV4dHVhbEVycm9yTWFwLCAvLyBjb250ZXh0dWFsIGVycm9yIG1hcCBpcyBmaXJzdCBwcmlvcml0eVxuICAgICAgICAgICAgY3R4LnNjaGVtYUVycm9yTWFwLCAvLyB0aGVuIHNjaGVtYS1ib3VuZCBtYXAgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBvdmVycmlkZU1hcCwgLy8gdGhlbiBnbG9iYWwgb3ZlcnJpZGUgbWFwXG4gICAgICAgICAgICBvdmVycmlkZU1hcCA9PT0gZGVmYXVsdEVycm9yTWFwID8gdW5kZWZpbmVkIDogZGVmYXVsdEVycm9yTWFwLCAvLyB0aGVuIGdsb2JhbCBkZWZhdWx0IG1hcFxuICAgICAgICBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICB9KTtcbiAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKGlzc3VlKTtcbn1cbmV4cG9ydCBjbGFzcyBQYXJzZVN0YXR1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcInZhbGlkXCI7XG4gICAgfVxuICAgIGRpcnR5KCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCJ2YWxpZFwiKVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiZGlydHlcIjtcbiAgICB9XG4gICAgYWJvcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcImFib3J0ZWRcIjtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlQXJyYXkoc3RhdHVzLCByZXN1bHRzKSB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChzLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAocy5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIGFycmF5VmFsdWUucHVzaChzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGFycmF5VmFsdWUgfTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIG1lcmdlT2JqZWN0QXN5bmMoc3RhdHVzLCBwYWlycykge1xuICAgICAgICBjb25zdCBzeW5jUGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCBwYWlyLmtleTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgIHN5bmNQYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RTeW5jKHN0YXR1cywgc3luY1BhaXJzKTtcbiAgICB9XG4gICAgc3RhdGljIG1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHBhaXJzKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsT2JqZWN0ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgY29uc3QgeyBrZXksIHZhbHVlIH0gPSBwYWlyO1xuICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgaWYgKGtleS52YWx1ZSAhPT0gXCJfX3Byb3RvX19cIiAmJiAodHlwZW9mIHZhbHVlLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8IHBhaXIuYWx3YXlzU2V0KSkge1xuICAgICAgICAgICAgICAgIGZpbmFsT2JqZWN0W2tleS52YWx1ZV0gPSB2YWx1ZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGZpbmFsT2JqZWN0IH07XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IElOVkFMSUQgPSBPYmplY3QuZnJlZXplKHtcbiAgICBzdGF0dXM6IFwiYWJvcnRlZFwiLFxufSk7XG5leHBvcnQgY29uc3QgRElSVFkgPSAodmFsdWUpID0+ICh7IHN0YXR1czogXCJkaXJ0eVwiLCB2YWx1ZSB9KTtcbmV4cG9ydCBjb25zdCBPSyA9ICh2YWx1ZSkgPT4gKHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlIH0pO1xuZXhwb3J0IGNvbnN0IGlzQWJvcnRlZCA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCI7XG5leHBvcnQgY29uc3QgaXNEaXJ0eSA9ICh4KSA9PiB4LnN0YXR1cyA9PT0gXCJkaXJ0eVwiO1xuZXhwb3J0IGNvbnN0IGlzVmFsaWQgPSAoeCkgPT4geC5zdGF0dXMgPT09IFwidmFsaWRcIjtcbmV4cG9ydCBjb25zdCBpc0FzeW5jID0gKHgpID0+IHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHggaW5zdGFuY2VvZiBQcm9taXNlO1xuIiwiZXhwb3J0IHt9O1xuIiwiaW1wb3J0IHsgWm9kRXJyb3IsIFpvZElzc3VlQ29kZSwgfSBmcm9tIFwiLi9ab2RFcnJvci5qc1wiO1xuaW1wb3J0IHsgZGVmYXVsdEVycm9yTWFwLCBnZXRFcnJvck1hcCB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuaW1wb3J0IHsgZXJyb3JVdGlsIH0gZnJvbSBcIi4vaGVscGVycy9lcnJvclV0aWwuanNcIjtcbmltcG9ydCB7IERJUlRZLCBJTlZBTElELCBPSywgUGFyc2VTdGF0dXMsIGFkZElzc3VlVG9Db250ZXh0LCBpc0Fib3J0ZWQsIGlzQXN5bmMsIGlzRGlydHksIGlzVmFsaWQsIG1ha2VJc3N1ZSwgfSBmcm9tIFwiLi9oZWxwZXJzL3BhcnNlVXRpbC5qc1wiO1xuaW1wb3J0IHsgdXRpbCwgWm9kUGFyc2VkVHlwZSwgZ2V0UGFyc2VkVHlwZSB9IGZyb20gXCIuL2hlbHBlcnMvdXRpbC5qc1wiO1xuY2xhc3MgUGFyc2VJbnB1dExhenlQYXRoIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHZhbHVlLCBwYXRoLCBrZXkpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVkUGF0aCA9IFtdO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5kYXRhID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLl9rZXkgPSBrZXk7XG4gICAgfVxuICAgIGdldCBwYXRoKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlZFBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkUGF0aC5wdXNoKC4uLnRoaXMuX3BhdGgsIC4uLnRoaXMuX2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWRQYXRoLnB1c2goLi4udGhpcy5fcGF0aCwgdGhpcy5fa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGF0aDtcbiAgICB9XG59XG5jb25zdCBoYW5kbGVSZXN1bHQgPSAoY3R4LCByZXN1bHQpID0+IHtcbiAgICBpZiAoaXNWYWxpZChyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdC52YWx1ZSB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFjdHguY29tbW9uLmlzc3Vlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhbGlkYXRpb24gZmFpbGVkIGJ1dCBubyBpc3N1ZXMgZGV0ZWN0ZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihjdHguY29tbW9uLmlzc3Vlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbn07XG5mdW5jdGlvbiBwcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zKVxuICAgICAgICByZXR1cm4ge307XG4gICAgY29uc3QgeyBlcnJvck1hcCwgaW52YWxpZF90eXBlX2Vycm9yLCByZXF1aXJlZF9lcnJvciwgZGVzY3JpcHRpb24gfSA9IHBhcmFtcztcbiAgICBpZiAoZXJyb3JNYXAgJiYgKGludmFsaWRfdHlwZV9lcnJvciB8fCByZXF1aXJlZF9lcnJvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCB1c2UgXCJpbnZhbGlkX3R5cGVfZXJyb3JcIiBvciBcInJlcXVpcmVkX2Vycm9yXCIgaW4gY29uanVuY3Rpb24gd2l0aCBjdXN0b20gZXJyb3IgbWFwLmApO1xuICAgIH1cbiAgICBpZiAoZXJyb3JNYXApXG4gICAgICAgIHJldHVybiB7IGVycm9yTWFwOiBlcnJvck1hcCwgZGVzY3JpcHRpb24gfTtcbiAgICBjb25zdCBjdXN0b21NYXAgPSAoaXNzLCBjdHgpID0+IHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBwYXJhbXM7XG4gICAgICAgIGlmIChpc3MuY29kZSA9PT0gXCJpbnZhbGlkX2VudW1fdmFsdWVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogbWVzc2FnZSA/PyBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjdHguZGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogbWVzc2FnZSA/PyByZXF1aXJlZF9lcnJvciA/PyBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzcy5jb2RlICE9PSBcImludmFsaWRfdHlwZVwiKVxuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogY3R4LmRlZmF1bHRFcnJvciB9O1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBtZXNzYWdlID8/IGludmFsaWRfdHlwZV9lcnJvciA/PyBjdHguZGVmYXVsdEVycm9yIH07XG4gICAgfTtcbiAgICByZXR1cm4geyBlcnJvck1hcDogY3VzdG9tTWFwLCBkZXNjcmlwdGlvbiB9O1xufVxuZXhwb3J0IGNsYXNzIFpvZFR5cGUge1xuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgX2dldFR5cGUoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcnNlZFR5cGUoaW5wdXQuZGF0YSk7XG4gICAgfVxuICAgIF9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KSB7XG4gICAgICAgIHJldHVybiAoY3R4IHx8IHtcbiAgICAgICAgICAgIGNvbW1vbjogaW5wdXQucGFyZW50LmNvbW1vbixcbiAgICAgICAgICAgIGRhdGE6IGlucHV0LmRhdGEsXG4gICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpLFxuICAgICAgICAgICAgc2NoZW1hRXJyb3JNYXA6IHRoaXMuX2RlZi5lcnJvck1hcCxcbiAgICAgICAgICAgIHBhdGg6IGlucHV0LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGlucHV0LnBhcmVudCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogbmV3IFBhcnNlU3RhdHVzKCksXG4gICAgICAgICAgICBjdHg6IHtcbiAgICAgICAgICAgICAgICBjb21tb246IGlucHV0LnBhcmVudC5jb21tb24sXG4gICAgICAgICAgICAgICAgZGF0YTogaW5wdXQuZGF0YSxcbiAgICAgICAgICAgICAgICBwYXJzZWRUeXBlOiBnZXRQYXJzZWRUeXBlKGlucHV0LmRhdGEpLFxuICAgICAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICAgICAgcGF0aDogaW5wdXQucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGlucHV0LnBhcmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9wYXJzZVN5bmMoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2UoaW5wdXQpO1xuICAgICAgICBpZiAoaXNBc3luYyhyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW5jaHJvbm91cyBwYXJzZSBlbmNvdW50ZXJlZCBwcm9taXNlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBfcGFyc2VBc3luYyhpbnB1dCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICB9XG4gICAgcGFyc2UoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2FmZVBhcnNlKGRhdGEsIHBhcmFtcyk7XG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2VzcylcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgICAgICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICAgIH1cbiAgICBzYWZlUGFyc2UoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgYXN5bmM6IHBhcmFtcz8uYXN5bmMgPz8gZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udGV4dHVhbEVycm9yTWFwOiBwYXJhbXM/LmVycm9yTWFwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IHBhcmFtcz8ucGF0aCB8fCBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcGFyc2VTeW5jKHsgZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzdWx0KGN0eCwgcmVzdWx0KTtcbiAgICB9XG4gICAgXCJ+dmFsaWRhdGVcIihkYXRhKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgYXN5bmM6ICEhdGhpc1tcIn5zdGFuZGFyZFwiXS5hc3luYyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRoOiBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzW1wifnN0YW5kYXJkXCJdLmFzeW5jKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3BhcnNlU3luYyh7IGRhdGEsIHBhdGg6IFtdLCBwYXJlbnQ6IGN0eCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogY3R4LmNvbW1vbi5pc3N1ZXMsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycj8ubWVzc2FnZT8udG9Mb3dlckNhc2UoKT8uaW5jbHVkZXMoXCJlbmNvdW50ZXJlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW1wifnN0YW5kYXJkXCJdLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LmNvbW1vbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2VBc3luYyh7IGRhdGEsIHBhdGg6IFtdLCBwYXJlbnQ6IGN0eCB9KS50aGVuKChyZXN1bHQpID0+IGlzVmFsaWQocmVzdWx0KVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogY3R4LmNvbW1vbi5pc3N1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgcGFyc2VBc3luYyhkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zYWZlUGFyc2VBc3luYyhkYXRhLCBwYXJhbXMpO1xuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgICB9XG4gICAgYXN5bmMgc2FmZVBhcnNlQXN5bmMoZGF0YSwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgY29udGV4dHVhbEVycm9yTWFwOiBwYXJhbXM/LmVycm9yTWFwLFxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IHBhcmFtcz8ucGF0aCB8fCBbXSxcbiAgICAgICAgICAgIHNjaGVtYUVycm9yTWFwOiB0aGlzLl9kZWYuZXJyb3JNYXAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGFyc2VkVHlwZTogZ2V0UGFyc2VkVHlwZShkYXRhKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWF5YmVBc3luY1Jlc3VsdCA9IHRoaXMuX3BhcnNlKHsgZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAoaXNBc3luYyhtYXliZUFzeW5jUmVzdWx0KSA/IG1heWJlQXN5bmNSZXN1bHQgOiBQcm9taXNlLnJlc29sdmUobWF5YmVBc3luY1Jlc3VsdCkpO1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzdWx0KGN0eCwgcmVzdWx0KTtcbiAgICB9XG4gICAgcmVmaW5lKGNoZWNrLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGdldElzc3VlUHJvcGVydGllcyA9ICh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgbWVzc2FnZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZSh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWZpbmVtZW50KCh2YWwsIGN0eCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2sodmFsKTtcbiAgICAgICAgICAgIGNvbnN0IHNldEVycm9yID0gKCkgPT4gY3R4LmFkZElzc3VlKHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuY3VzdG9tLFxuICAgICAgICAgICAgICAgIC4uLmdldElzc3VlUHJvcGVydGllcyh2YWwpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVmaW5lbWVudChjaGVjaywgcmVmaW5lbWVudERhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQoKHZhbCwgY3R4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoZWNrKHZhbCkpIHtcbiAgICAgICAgICAgICAgICBjdHguYWRkSXNzdWUodHlwZW9mIHJlZmluZW1lbnREYXRhID09PSBcImZ1bmN0aW9uXCIgPyByZWZpbmVtZW50RGF0YSh2YWwsIGN0eCkgOiByZWZpbmVtZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVmaW5lbWVudChyZWZpbmVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRWZmZWN0cyh7XG4gICAgICAgICAgICBzY2hlbWE6IHRoaXMsXG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgICAgICBlZmZlY3Q6IHsgdHlwZTogXCJyZWZpbmVtZW50XCIsIHJlZmluZW1lbnQgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN1cGVyUmVmaW5lKHJlZmluZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZmluZW1lbnQocmVmaW5lbWVudCk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGRlZikge1xuICAgICAgICAvKiogQWxpYXMgb2Ygc2FmZVBhcnNlQXN5bmMgKi9cbiAgICAgICAgdGhpcy5zcGEgPSB0aGlzLnNhZmVQYXJzZUFzeW5jO1xuICAgICAgICB0aGlzLl9kZWYgPSBkZWY7XG4gICAgICAgIHRoaXMucGFyc2UgPSB0aGlzLnBhcnNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2FmZVBhcnNlID0gdGhpcy5zYWZlUGFyc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYXJzZUFzeW5jID0gdGhpcy5wYXJzZUFzeW5jLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2FmZVBhcnNlQXN5bmMgPSB0aGlzLnNhZmVQYXJzZUFzeW5jLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3BhID0gdGhpcy5zcGEuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZWZpbmUgPSB0aGlzLnJlZmluZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZmluZW1lbnQgPSB0aGlzLnJlZmluZW1lbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdXBlclJlZmluZSA9IHRoaXMuc3VwZXJSZWZpbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcHRpb25hbCA9IHRoaXMub3B0aW9uYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5udWxsYWJsZSA9IHRoaXMubnVsbGFibGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5udWxsaXNoID0gdGhpcy5udWxsaXNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXJyYXkgPSB0aGlzLmFycmF5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucHJvbWlzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9yID0gdGhpcy5vci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFuZCA9IHRoaXMuYW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5icmFuZCA9IHRoaXMuYnJhbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0ID0gdGhpcy5kZWZhdWx0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2F0Y2ggPSB0aGlzLmNhdGNoLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUgPSB0aGlzLmRlc2NyaWJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGlwZSA9IHRoaXMucGlwZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gdGhpcy5yZWFkb25seS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzTnVsbGFibGUgPSB0aGlzLmlzTnVsbGFibGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc09wdGlvbmFsID0gdGhpcy5pc09wdGlvbmFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXNbXCJ+c3RhbmRhcmRcIl0gPSB7XG4gICAgICAgICAgICB2ZXJzaW9uOiAxLFxuICAgICAgICAgICAgdmVuZG9yOiBcInpvZFwiLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChkYXRhKSA9PiB0aGlzW1wifnZhbGlkYXRlXCJdKGRhdGEpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBvcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE9wdGlvbmFsLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBudWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZE51bGxhYmxlLmNyZWF0ZSh0aGlzLCB0aGlzLl9kZWYpO1xuICAgIH1cbiAgICBudWxsaXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5udWxsYWJsZSgpLm9wdGlvbmFsKCk7XG4gICAgfVxuICAgIGFycmF5KCkge1xuICAgICAgICByZXR1cm4gWm9kQXJyYXkuY3JlYXRlKHRoaXMpO1xuICAgIH1cbiAgICBwcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gWm9kUHJvbWlzZS5jcmVhdGUodGhpcywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgb3Iob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBab2RVbmlvbi5jcmVhdGUoW3RoaXMsIG9wdGlvbl0sIHRoaXMuX2RlZik7XG4gICAgfVxuICAgIGFuZChpbmNvbWluZykge1xuICAgICAgICByZXR1cm4gWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZSh0aGlzLCBpbmNvbWluZywgdGhpcy5fZGVmKTtcbiAgICB9XG4gICAgdHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlzLl9kZWYpLFxuICAgICAgICAgICAgc2NoZW1hOiB0aGlzLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzLFxuICAgICAgICAgICAgZWZmZWN0OiB7IHR5cGU6IFwidHJhbnNmb3JtXCIsIHRyYW5zZm9ybSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVmYXVsdChkZWYpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlRnVuYyA9IHR5cGVvZiBkZWYgPT09IFwiZnVuY3Rpb25cIiA/IGRlZiA6ICgpID0+IGRlZjtcbiAgICAgICAgcmV0dXJuIG5ldyBab2REZWZhdWx0KHtcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgICAgIGlubmVyVHlwZTogdGhpcyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlRnVuYyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGVmYXVsdCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGJyYW5kKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEJyYW5kZWQoe1xuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCcmFuZGVkLFxuICAgICAgICAgICAgdHlwZTogdGhpcyxcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXModGhpcy5fZGVmKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoKGRlZikge1xuICAgICAgICBjb25zdCBjYXRjaFZhbHVlRnVuYyA9IHR5cGVvZiBkZWYgPT09IFwiZnVuY3Rpb25cIiA/IGRlZiA6ICgpID0+IGRlZjtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RDYXRjaCh7XG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHRoaXMuX2RlZiksXG4gICAgICAgICAgICBpbm5lclR5cGU6IHRoaXMsXG4gICAgICAgICAgICBjYXRjaFZhbHVlOiBjYXRjaFZhbHVlRnVuYyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQ2F0Y2gsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZXNjcmliZShkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCBUaGlzID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIG5ldyBUaGlzKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGlwZSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIFpvZFBpcGVsaW5lLmNyZWF0ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH1cbiAgICByZWFkb25seSgpIHtcbiAgICAgICAgcmV0dXJuIFpvZFJlYWRvbmx5LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG4gICAgaXNPcHRpb25hbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKHVuZGVmaW5lZCkuc3VjY2VzcztcbiAgICB9XG4gICAgaXNOdWxsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FmZVBhcnNlKG51bGwpLnN1Y2Nlc3M7XG4gICAgfVxufVxuY29uc3QgY3VpZFJlZ2V4ID0gL15jW15cXHMtXXs4LH0kL2k7XG5jb25zdCBjdWlkMlJlZ2V4ID0gL15bMC05YS16XSskLztcbmNvbnN0IHVsaWRSZWdleCA9IC9eWzAtOUEtSEpLTU5QLVRWLVpdezI2fSQvaTtcbi8vIGNvbnN0IHV1aWRSZWdleCA9XG4vLyAgIC9eKFthLWYwLTldezh9LVthLWYwLTldezR9LVsxLTVdW2EtZjAtOV17M30tW2EtZjAtOV17NH0tW2EtZjAtOV17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG5jb25zdCB1dWlkUmVnZXggPSAvXlswLTlhLWZBLUZdezh9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezR9XFxiLVswLTlhLWZBLUZdezEyfSQvaTtcbmNvbnN0IG5hbm9pZFJlZ2V4ID0gL15bYS16MC05Xy1dezIxfSQvaTtcbmNvbnN0IGp3dFJlZ2V4ID0gL15bQS1aYS16MC05LV9dK1xcLltBLVphLXowLTktX10rXFwuW0EtWmEtejAtOS1fXSokLztcbmNvbnN0IGR1cmF0aW9uUmVnZXggPSAvXlstK10/UCg/ISQpKD86KD86Wy0rXT9cXGQrWSl8KD86Wy0rXT9cXGQrWy4sXVxcZCtZJCkpPyg/Oig/OlstK10/XFxkK00pfCg/OlstK10/XFxkK1suLF1cXGQrTSQpKT8oPzooPzpbLStdP1xcZCtXKXwoPzpbLStdP1xcZCtbLixdXFxkK1ckKSk/KD86KD86Wy0rXT9cXGQrRCl8KD86Wy0rXT9cXGQrWy4sXVxcZCtEJCkpPyg/OlQoPz1bXFxkKy1dKSg/Oig/OlstK10/XFxkK0gpfCg/OlstK10/XFxkK1suLF1cXGQrSCQpKT8oPzooPzpbLStdP1xcZCtNKXwoPzpbLStdP1xcZCtbLixdXFxkK00kKSk/KD86Wy0rXT9cXGQrKD86Wy4sXVxcZCspP1MpPyk/PyQvO1xuLy8gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYxODEvMTU1MDE1NVxuLy8gb2xkIHZlcnNpb246IHRvbyBzbG93LCBkaWRuJ3Qgc3VwcG9ydCB1bmljb2RlXG4vLyBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKChbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLikrKChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJC9pO1xuLy9vbGQgZW1haWwgcmVnZXhcbi8vIGNvbnN0IGVtYWlsUmVnZXggPSAvXigoW148PigpW1xcXS4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKD8hLSkoW148PigpW1xcXS4sOzpcXHNAXCJdK1xcLikrW148PigpW1xcXS4sOzpcXHNAXCJdezEsfSlbXi08PigpW1xcXS4sOzpcXHNAXCJdJC9pO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbKCgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFwuKXszfSgoMjVbMC01XSl8KDJbMC00XVswLTldKXwoMVswLTldezJ9KXwoWzAtOV17MSwyfSkpXFxdKXwoXFxbSVB2NjooKFthLWYwLTldezEsNH06KXs3fXw6OihbYS1mMC05XXsxLDR9Oil7MCw2fXwoW2EtZjAtOV17MSw0fTopezF9OihbYS1mMC05XXsxLDR9Oil7MCw1fXwoW2EtZjAtOV17MSw0fTopezJ9OihbYS1mMC05XXsxLDR9Oil7MCw0fXwoW2EtZjAtOV17MSw0fTopezN9OihbYS1mMC05XXsxLDR9Oil7MCwzfXwoW2EtZjAtOV17MSw0fTopezR9OihbYS1mMC05XXsxLDR9Oil7MCwyfXwoW2EtZjAtOV17MSw0fTopezV9OihbYS1mMC05XXsxLDR9Oil7MCwxfSkoW2EtZjAtOV17MSw0fXwoKCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSlcXC4pezN9KCgyNVswLTVdKXwoMlswLTRdWzAtOV0pfCgxWzAtOV17Mn0pfChbMC05XXsxLDJ9KSkpXFxdKXwoW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dKltBLVphLXowLTldKSooXFwuW0EtWmEtel17Mix9KSspKSQvO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eW2EtekEtWjAtOVxcLlxcIVxcI1xcJFxcJVxcJlxcJ1xcKlxcK1xcL1xcPVxcP1xcXlxcX1xcYFxce1xcfFxcfVxcflxcLV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC87XG4vLyBjb25zdCBlbWFpbFJlZ2V4ID1cbi8vICAgL14oPzpbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT98W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKSQvaTtcbmNvbnN0IGVtYWlsUmVnZXggPSAvXig/IVxcLikoPyEuKlxcLlxcLikoW0EtWjAtOV8nK1xcLVxcLl0qKVtBLVowLTlfKy1dQChbQS1aMC05XVtBLVowLTlcXC1dKlxcLikrW0EtWl17Mix9JC9pO1xuLy8gY29uc3QgZW1haWxSZWdleCA9XG4vLyAgIC9eW2EtejAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16MC05LV0rKD86XFwuW2EtejAtOVxcLV0rKSokL2k7XG4vLyBmcm9tIGh0dHBzOi8vdGhla2V2aW5zY290dC5jb20vZW1vamlzLWluLWphdmFzY3JpcHQvI3dyaXRpbmctYS1yZWd1bGFyLWV4cHJlc3Npb25cbmNvbnN0IF9lbW9qaVJlZ2V4ID0gYF4oXFxcXHB7RXh0ZW5kZWRfUGljdG9ncmFwaGljfXxcXFxccHtFbW9qaV9Db21wb25lbnR9KSskYDtcbmxldCBlbW9qaVJlZ2V4O1xuLy8gZmFzdGVyLCBzaW1wbGVyLCBzYWZlclxuY29uc3QgaXB2NFJlZ2V4ID0gL14oPzooPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSkkLztcbmNvbnN0IGlwdjRDaWRyUmVnZXggPSAvXig/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSlcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXwxWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKVxcLygzWzAtMl18WzEyXT9bMC05XSkkLztcbi8vIGNvbnN0IGlwdjZSZWdleCA9XG4vLyAvXigoW2EtZjAtOV17MSw0fTopezd9fDo6KFthLWYwLTldezEsNH06KXswLDZ9fChbYS1mMC05XXsxLDR9Oil7MX06KFthLWYwLTldezEsNH06KXswLDV9fChbYS1mMC05XXsxLDR9Oil7Mn06KFthLWYwLTldezEsNH06KXswLDR9fChbYS1mMC05XXsxLDR9Oil7M306KFthLWYwLTldezEsNH06KXswLDN9fChbYS1mMC05XXsxLDR9Oil7NH06KFthLWYwLTldezEsNH06KXswLDJ9fChbYS1mMC05XXsxLDR9Oil7NX06KFthLWYwLTldezEsNH06KXswLDF9KShbYS1mMC05XXsxLDR9fCgoKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKVxcLil7M30oKDI1WzAtNV0pfCgyWzAtNF1bMC05XSl8KDFbMC05XXsyfSl8KFswLTldezEsMn0pKSkkLztcbmNvbnN0IGlwdjZSZWdleCA9IC9eKChbMC05YS1mQS1GXXsxLDR9Oil7Nyw3fVswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDd9OnwoWzAtOWEtZkEtRl17MSw0fTopezEsNn06WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsNX0oOlswLTlhLWZBLUZdezEsNH0pezEsMn18KFswLTlhLWZBLUZdezEsNH06KXsxLDR9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDN9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwzfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsMn0oOlswLTlhLWZBLUZdezEsNH0pezEsNX18WzAtOWEtZkEtRl17MSw0fTooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDZ9KXw6KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw3fXw6KXxmZTgwOig6WzAtOWEtZkEtRl17MCw0fSl7MCw0fSVbMC05YS16QS1aXXsxLH18OjooZmZmZig6MHsxLDR9KXswLDF9Oil7MCwxfSgoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH06KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pKSQvO1xuY29uc3QgaXB2NkNpZHJSZWdleCA9IC9eKChbMC05YS1mQS1GXXsxLDR9Oil7Nyw3fVswLTlhLWZBLUZdezEsNH18KFswLTlhLWZBLUZdezEsNH06KXsxLDd9OnwoWzAtOWEtZkEtRl17MSw0fTopezEsNn06WzAtOWEtZkEtRl17MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsNX0oOlswLTlhLWZBLUZdezEsNH0pezEsMn18KFswLTlhLWZBLUZdezEsNH06KXsxLDR9KDpbMC05YS1mQS1GXXsxLDR9KXsxLDN9fChbMC05YS1mQS1GXXsxLDR9Oil7MSwzfSg6WzAtOWEtZkEtRl17MSw0fSl7MSw0fXwoWzAtOWEtZkEtRl17MSw0fTopezEsMn0oOlswLTlhLWZBLUZdezEsNH0pezEsNX18WzAtOWEtZkEtRl17MSw0fTooKDpbMC05YS1mQS1GXXsxLDR9KXsxLDZ9KXw6KCg6WzAtOWEtZkEtRl17MSw0fSl7MSw3fXw6KXxmZTgwOig6WzAtOWEtZkEtRl17MCw0fSl7MCw0fSVbMC05YS16QS1aXXsxLH18OjooZmZmZig6MHsxLDR9KXswLDF9Oil7MCwxfSgoMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFwuKXszLDN9KDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKXwoWzAtOWEtZkEtRl17MSw0fTopezEsNH06KCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pKVxcLygxMlswLThdfDFbMDFdWzAtOV18WzEtOV0/WzAtOV0pJC87XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83ODYwMzkyL2RldGVybWluZS1pZi1zdHJpbmctaXMtaW4tYmFzZTY0LXVzaW5nLWphdmFzY3JpcHRcbmNvbnN0IGJhc2U2NFJlZ2V4ID0gL14oWzAtOWEtekEtWisvXXs0fSkqKChbMC05YS16QS1aKy9dezJ9PT0pfChbMC05YS16QS1aKy9dezN9PSkpPyQvO1xuLy8gaHR0cHM6Ly9iYXNlNjQuZ3VydS9zdGFuZGFyZHMvYmFzZTY0dXJsXG5jb25zdCBiYXNlNjR1cmxSZWdleCA9IC9eKFswLTlhLXpBLVotX117NH0pKigoWzAtOWEtekEtWi1fXXsyfSg9PSk/KXwoWzAtOWEtekEtWi1fXXszfSg9KT8pKT8kLztcbi8vIHNpbXBsZVxuLy8gY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYFxcXFxkezR9LVxcXFxkezJ9LVxcXFxkezJ9YDtcbi8vIG5vIGxlYXAgeWVhciB2YWxpZGF0aW9uXG4vLyBjb25zdCBkYXRlUmVnZXhTb3VyY2UgPSBgXFxcXGR7NH0tKCgwWzEzNTc4XXwxMHwxMiktMzF8KDBbMTMtOV18MVswLTJdKS0zMHwoMFsxLTldfDFbMC0yXSktKDBbMS05XXwxXFxcXGR8MlxcXFxkKSlgO1xuLy8gd2l0aCBsZWFwIHllYXIgdmFsaWRhdGlvblxuY29uc3QgZGF0ZVJlZ2V4U291cmNlID0gYCgoXFxcXGRcXFxcZFsyNDY4XVswNDhdfFxcXFxkXFxcXGRbMTM1NzldWzI2XXxcXFxcZFxcXFxkMFs0OF18WzAyNDY4XVswNDhdMDB8WzEzNTc5XVsyNl0wMCktMDItMjl8XFxcXGR7NH0tKCgwWzEzNTc4XXwxWzAyXSktKDBbMS05XXxbMTJdXFxcXGR8M1swMV0pfCgwWzQ2OV18MTEpLSgwWzEtOV18WzEyXVxcXFxkfDMwKXwoMDIpLSgwWzEtOV18MVxcXFxkfDJbMC04XSkpKWA7XG5jb25zdCBkYXRlUmVnZXggPSBuZXcgUmVnRXhwKGBeJHtkYXRlUmVnZXhTb3VyY2V9JGApO1xuZnVuY3Rpb24gdGltZVJlZ2V4U291cmNlKGFyZ3MpIHtcbiAgICBsZXQgc2Vjb25kc1JlZ2V4U291cmNlID0gYFswLTVdXFxcXGRgO1xuICAgIGlmIChhcmdzLnByZWNpc2lvbikge1xuICAgICAgICBzZWNvbmRzUmVnZXhTb3VyY2UgPSBgJHtzZWNvbmRzUmVnZXhTb3VyY2V9XFxcXC5cXFxcZHske2FyZ3MucHJlY2lzaW9ufX1gO1xuICAgIH1cbiAgICBlbHNlIGlmIChhcmdzLnByZWNpc2lvbiA9PSBudWxsKSB7XG4gICAgICAgIHNlY29uZHNSZWdleFNvdXJjZSA9IGAke3NlY29uZHNSZWdleFNvdXJjZX0oXFxcXC5cXFxcZCspP2A7XG4gICAgfVxuICAgIGNvbnN0IHNlY29uZHNRdWFudGlmaWVyID0gYXJncy5wcmVjaXNpb24gPyBcIitcIiA6IFwiP1wiOyAvLyByZXF1aXJlIHNlY29uZHMgaWYgcHJlY2lzaW9uIGlzIG5vbnplcm9cbiAgICByZXR1cm4gYChbMDFdXFxcXGR8MlswLTNdKTpbMC01XVxcXFxkKDoke3NlY29uZHNSZWdleFNvdXJjZX0pJHtzZWNvbmRzUXVhbnRpZmllcn1gO1xufVxuZnVuY3Rpb24gdGltZVJlZ2V4KGFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7dGltZVJlZ2V4U291cmNlKGFyZ3MpfSRgKTtcbn1cbi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzE0MzIzMVxuZXhwb3J0IGZ1bmN0aW9uIGRhdGV0aW1lUmVnZXgoYXJncykge1xuICAgIGxldCByZWdleCA9IGAke2RhdGVSZWdleFNvdXJjZX1UJHt0aW1lUmVnZXhTb3VyY2UoYXJncyl9YDtcbiAgICBjb25zdCBvcHRzID0gW107XG4gICAgb3B0cy5wdXNoKGFyZ3MubG9jYWwgPyBgWj9gIDogYFpgKTtcbiAgICBpZiAoYXJncy5vZmZzZXQpXG4gICAgICAgIG9wdHMucHVzaChgKFsrLV1cXFxcZHsyfTo/XFxcXGR7Mn0pYCk7XG4gICAgcmVnZXggPSBgJHtyZWdleH0oJHtvcHRzLmpvaW4oXCJ8XCIpfSlgO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGBeJHtyZWdleH0kYCk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkSVAoaXAsIHZlcnNpb24pIHtcbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjRcIiB8fCAhdmVyc2lvbikgJiYgaXB2NFJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoKHZlcnNpb24gPT09IFwidjZcIiB8fCAhdmVyc2lvbikgJiYgaXB2NlJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc1ZhbGlkSldUKGp3dCwgYWxnKSB7XG4gICAgaWYgKCFqd3RSZWdleC50ZXN0KGp3dCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBbaGVhZGVyXSA9IGp3dC5zcGxpdChcIi5cIik7XG4gICAgICAgIGlmICghaGVhZGVyKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NHVybCB0byBiYXNlNjRcbiAgICAgICAgY29uc3QgYmFzZTY0ID0gaGVhZGVyXG4gICAgICAgICAgICAucmVwbGFjZSgvLS9nLCBcIitcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csIFwiL1wiKVxuICAgICAgICAgICAgLnBhZEVuZChoZWFkZXIubGVuZ3RoICsgKCg0IC0gKGhlYWRlci5sZW5ndGggJSA0KSkgJSA0KSwgXCI9XCIpO1xuICAgICAgICBjb25zdCBkZWNvZGVkID0gSlNPTi5wYXJzZShhdG9iKGJhc2U2NCkpO1xuICAgICAgICBpZiAodHlwZW9mIGRlY29kZWQgIT09IFwib2JqZWN0XCIgfHwgZGVjb2RlZCA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKFwidHlwXCIgaW4gZGVjb2RlZCAmJiBkZWNvZGVkPy50eXAgIT09IFwiSldUXCIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghZGVjb2RlZC5hbGcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChhbGcgJiYgZGVjb2RlZC5hbGcgIT09IGFsZylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzVmFsaWRDaWRyKGlwLCB2ZXJzaW9uKSB7XG4gICAgaWYgKCh2ZXJzaW9uID09PSBcInY0XCIgfHwgIXZlcnNpb24pICYmIGlwdjRDaWRyUmVnZXgudGVzdChpcCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICgodmVyc2lvbiA9PT0gXCJ2NlwiIHx8ICF2ZXJzaW9uKSAmJiBpcHY2Q2lkclJlZ2V4LnRlc3QoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgY2xhc3MgWm9kU3RyaW5nIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gU3RyaW5nKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnN0cmluZyxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBsZXQgY3R4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoIDwgY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGlucHV0LmRhdGEubGVuZ3RoID4gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBpbnB1dC5kYXRhLmxlbmd0aCA8IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29CaWcgfHwgdG9vU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29CaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZW1vamlcIikge1xuICAgICAgICAgICAgICAgIGlmICghZW1vamlSZWdleCkge1xuICAgICAgICAgICAgICAgICAgICBlbW9qaVJlZ2V4ID0gbmV3IFJlZ0V4cChfZW1vamlSZWdleCwgXCJ1XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVtb2ppUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ1dWlkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXV1aWRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwidXVpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibmFub2lkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5hbm9pZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJuYW5vaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImN1aWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghY3VpZFJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJjdWlkMlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdWlkMlJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJjdWlkMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidWxpZFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1bGlkUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInVsaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInVybFwiKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVSTChpbnB1dC5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwicmVnZXhcIikge1xuICAgICAgICAgICAgICAgIGNoZWNrLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVzdFJlc3VsdCA9IGNoZWNrLnJlZ2V4LnRlc3QoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0ZXN0UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwicmVnZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRyaW1cIikge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBpbnB1dC5kYXRhLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiaW5jbHVkZXNcIikge1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuZGF0YS5pbmNsdWRlcyhjaGVjay52YWx1ZSwgY2hlY2sucG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgaW5jbHVkZXM6IGNoZWNrLnZhbHVlLCBwb3NpdGlvbjogY2hlY2sucG9zaXRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcInRvTG93ZXJDYXNlXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5kYXRhID0gaW5wdXQuZGF0YS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJ0b1VwcGVyQ2FzZVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuZGF0YSA9IGlucHV0LmRhdGEudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwic3RhcnRzV2l0aFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5kYXRhLnN0YXJ0c1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgc3RhcnRzV2l0aDogY2hlY2sudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImVuZHNXaXRoXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LmRhdGEuZW5kc1dpdGgoY2hlY2sudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHsgZW5kc1dpdGg6IGNoZWNrLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJkYXRldGltZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBkYXRldGltZVJlZ2V4KGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBkYXRlUmVnZXg7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwidGltZVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSB0aW1lUmVnZXgoY2hlY2spO1xuICAgICAgICAgICAgICAgIGlmICghcmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcInRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImR1cmF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWR1cmF0aW9uUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImR1cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJpcFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkSVAoaW5wdXQuZGF0YSwgY2hlY2sudmVyc2lvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogXCJpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiand0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRKV1QoaW5wdXQuZGF0YSwgY2hlY2suYWxnKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImp3dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiY2lkclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkQ2lkcihpbnB1dC5kYXRhLCBjaGVjay52ZXJzaW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImNpZHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcImJhc2U2NFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFiYXNlNjRSZWdleC50ZXN0KGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IFwiYmFzZTY0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9zdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJiYXNlNjR1cmxcIikge1xuICAgICAgICAgICAgICAgIGlmICghYmFzZTY0dXJsUmVnZXgudGVzdChpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBcImJhc2U2NHVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoY2hlY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogc3RhdHVzLnZhbHVlLCB2YWx1ZTogaW5wdXQuZGF0YSB9O1xuICAgIH1cbiAgICBfcmVnZXgocmVnZXgsIHZhbGlkYXRpb24sIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmaW5lbWVudCgoZGF0YSkgPT4gcmVnZXgudGVzdChkYXRhKSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbixcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3N0cmluZyxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFN0cmluZyh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbWFpbChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiZW1haWxcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1cmwobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcInVybFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGVtb2ppKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJlbW9qaVwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIHV1aWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcInV1aWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBuYW5vaWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcIm5hbm9pZFwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkgfSk7XG4gICAgfVxuICAgIGN1aWQobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImN1aWRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBjdWlkMihtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY3VpZDJcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICB1bGlkKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJ1bGlkXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgYmFzZTY0KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJiYXNlNjRcIiwgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpIH0pO1xuICAgIH1cbiAgICBiYXNlNjR1cmwobWVzc2FnZSkge1xuICAgICAgICAvLyBiYXNlNjR1cmwgZW5jb2RpbmcgaXMgYSBtb2RpZmljYXRpb24gb2YgYmFzZTY0IHRoYXQgY2FuIHNhZmVseSBiZSB1c2VkIGluIFVSTHMgYW5kIGZpbGVuYW1lc1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJiYXNlNjR1cmxcIixcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGp3dChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiand0XCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zKSB9KTtcbiAgICB9XG4gICAgaXAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImlwXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihvcHRpb25zKSB9KTtcbiAgICB9XG4gICAgY2lkcihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7IGtpbmQ6IFwiY2lkclwiLCAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucykgfSk7XG4gICAgfVxuICAgIGRhdGV0aW1lKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAgICAgIGtpbmQ6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IG51bGwsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2NhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogb3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBwcmVjaXNpb246IHR5cGVvZiBvcHRpb25zPy5wcmVjaXNpb24gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogb3B0aW9ucz8ucHJlY2lzaW9uLFxuICAgICAgICAgICAgb2Zmc2V0OiBvcHRpb25zPy5vZmZzZXQgPz8gZmFsc2UsXG4gICAgICAgICAgICBsb2NhbDogb3B0aW9ucz8ubG9jYWwgPz8gZmFsc2UsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucz8ubWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkYXRlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHsga2luZDogXCJkYXRlXCIsIG1lc3NhZ2UgfSk7XG4gICAgfVxuICAgIHRpbWUob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICAgICAga2luZDogXCJ0aW1lXCIsXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBudWxsLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJ0aW1lXCIsXG4gICAgICAgICAgICBwcmVjaXNpb246IHR5cGVvZiBvcHRpb25zPy5wcmVjaXNpb24gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogb3B0aW9ucz8ucHJlY2lzaW9uLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG9wdGlvbnM/Lm1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZHVyYXRpb24obWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soeyBraW5kOiBcImR1cmF0aW9uXCIsIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSB9KTtcbiAgICB9XG4gICAgcmVnZXgocmVnZXgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwicmVnZXhcIixcbiAgICAgICAgICAgIHJlZ2V4OiByZWdleCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluY2x1ZGVzKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImluY2x1ZGVzXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBwb3NpdGlvbjogb3B0aW9ucz8ucG9zaXRpb24sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoob3B0aW9ucz8ubWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcInN0YXJ0c1dpdGhcIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVuZHNXaXRoKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcImVuZHNXaXRoXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluTGVuZ3RoLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IG1pbkxlbmd0aCxcbiAgICAgICAgICAgIC4uLmVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhMZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogbWF4TGVuZ3RoLFxuICAgICAgICAgICAgLi4uZXJyb3JVdGlsLmVyclRvT2JqKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGVuZ3RoKGxlbiwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJsZW5ndGhcIixcbiAgICAgICAgICAgIHZhbHVlOiBsZW4sXG4gICAgICAgICAgICAuLi5lcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFcXVpdmFsZW50IHRvIGAubWluKDEpYFxuICAgICAqL1xuICAgIG5vbmVtcHR5KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKDEsIGVycm9yVXRpbC5lcnJUb09iaihtZXNzYWdlKSk7XG4gICAgfVxuICAgIHRyaW0oKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogWy4uLnRoaXMuX2RlZi5jaGVja3MsIHsga2luZDogXCJ0cmltXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0b0xvd2VyQ2FzZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgeyBraW5kOiBcInRvTG93ZXJDYXNlXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0b1VwcGVyQ2FzZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTdHJpbmcoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgeyBraW5kOiBcInRvVXBwZXJDYXNlXCIgfV0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgaXNEYXRldGltZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkYXRldGltZVwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJkYXRlXCIpO1xuICAgIH1cbiAgICBnZXQgaXNUaW1lKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInRpbWVcIik7XG4gICAgfVxuICAgIGdldCBpc0R1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcImR1cmF0aW9uXCIpO1xuICAgIH1cbiAgICBnZXQgaXNFbWFpbCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJlbWFpbFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVVJMKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcInVybFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzRW1vamkoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiZW1vamlcIik7XG4gICAgfVxuICAgIGdldCBpc1VVSUQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwidXVpZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzTkFOT0lEKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWYuY2hlY2tzLmZpbmQoKGNoKSA9PiBjaC5raW5kID09PSBcIm5hbm9pZFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ1VJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjdWlkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNDVUlEMigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjdWlkMlwiKTtcbiAgICB9XG4gICAgZ2V0IGlzVUxJRCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJ1bGlkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNJUCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJpcFwiKTtcbiAgICB9XG4gICAgZ2V0IGlzQ0lEUigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmLmNoZWNrcy5maW5kKChjaCkgPT4gY2gua2luZCA9PT0gXCJjaWRyXCIpO1xuICAgIH1cbiAgICBnZXQgaXNCYXNlNjQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiYmFzZTY0XCIpO1xuICAgIH1cbiAgICBnZXQgaXNCYXNlNjR1cmwoKSB7XG4gICAgICAgIC8vIGJhc2U2NHVybCBlbmNvZGluZyBpcyBhIG1vZGlmaWNhdGlvbiBvZiBiYXNlNjQgdGhhdCBjYW4gc2FmZWx5IGJlIHVzZWQgaW4gVVJMcyBhbmQgZmlsZW5hbWVzXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiYmFzZTY0dXJsXCIpO1xuICAgIH1cbiAgICBnZXQgbWluTGVuZ3RoKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhMZW5ndGgoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG59XG5ab2RTdHJpbmcuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU3RyaW5nKHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RTdHJpbmcsXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgPz8gZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zOTY2NDg0L3doeS1kb2VzLW1vZHVsdXMtb3BlcmF0b3ItcmV0dXJuLWZyYWN0aW9uYWwtbnVtYmVyLWluLWphdmFzY3JpcHQvMzE3MTEwMzQjMzE3MTEwMzRcbmZ1bmN0aW9uIGZsb2F0U2FmZVJlbWFpbmRlcih2YWwsIHN0ZXApIHtcbiAgICBjb25zdCB2YWxEZWNDb3VudCA9ICh2YWwudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0gfHwgXCJcIikubGVuZ3RoO1xuICAgIGNvbnN0IHN0ZXBEZWNDb3VudCA9IChzdGVwLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbiAgICBjb25zdCBkZWNDb3VudCA9IHZhbERlY0NvdW50ID4gc3RlcERlY0NvdW50ID8gdmFsRGVjQ291bnQgOiBzdGVwRGVjQ291bnQ7XG4gICAgY29uc3QgdmFsSW50ID0gTnVtYmVyLnBhcnNlSW50KHZhbC50b0ZpeGVkKGRlY0NvdW50KS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XG4gICAgY29uc3Qgc3RlcEludCA9IE51bWJlci5wYXJzZUludChzdGVwLnRvRml4ZWQoZGVjQ291bnQpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcbiAgICByZXR1cm4gKHZhbEludCAlIHN0ZXBJbnQpIC8gMTAgKiogZGVjQ291bnQ7XG59XG5leHBvcnQgY2xhc3MgWm9kTnVtYmVyIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubWluID0gdGhpcy5ndGU7XG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5sdGU7XG4gICAgICAgIHRoaXMuc3RlcCA9IHRoaXMubXVsdGlwbGVPZjtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICBpbnB1dC5kYXRhID0gTnVtYmVyKGlucHV0LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm51bWJlcixcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcImludFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsLmlzSW50ZWdlcihpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjaGVjay5pbmNsdXNpdmUgPyBpbnB1dC5kYXRhIDwgY2hlY2sudmFsdWUgOiBpbnB1dC5kYXRhIDw9IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGNoZWNrLmluY2x1c2l2ZSA/IGlucHV0LmRhdGEgPiBjaGVjay52YWx1ZSA6IGlucHV0LmRhdGEgPj0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZsb2F0U2FmZVJlbWFpbmRlcihpbnB1dC5kYXRhLCBjaGVjay52YWx1ZSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQsIGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLm5vdF9tdWx0aXBsZV9vZixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlT2Y6IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwiZmluaXRlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUubm90X2Zpbml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgZ3RlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBndCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1pblwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGx0ZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgdHJ1ZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtYXhcIiwgdmFsdWUsIGZhbHNlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBzZXRMaW1pdChraW5kLCB2YWx1ZSwgaW5jbHVzaXZlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kTnVtYmVyKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNoZWNrczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuX2RlZi5jaGVja3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfYWRkQ2hlY2soY2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbLi4udGhpcy5fZGVmLmNoZWNrcywgY2hlY2tdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW50KG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiaW50XCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmVnYXRpdmUobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtYXhcIixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbnBvc2l0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWF4XCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbm5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG11bHRpcGxlT2YodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibXVsdGlwbGVPZlwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluaXRlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwiZmluaXRlXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzYWZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pblZhbHVlKCkge1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChtaW4gPT09IG51bGwgfHwgY2gudmFsdWUgPiBtaW4pXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGdldCBtYXhWYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09PSBudWxsIHx8IGNoLnZhbHVlIDwgbWF4KVxuICAgICAgICAgICAgICAgICAgICBtYXggPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbiAgICBnZXQgaXNJbnQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZi5jaGVja3MuZmluZCgoY2gpID0+IGNoLmtpbmQgPT09IFwiaW50XCIgfHwgKGNoLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiICYmIHV0aWwuaXNJbnRlZ2VyKGNoLnZhbHVlKSkpO1xuICAgIH1cbiAgICBnZXQgaXNGaW5pdGUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJmaW5pdGVcIiB8fCBjaC5raW5kID09PSBcImludFwiIHx8IGNoLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShtaW4pICYmIE51bWJlci5pc0Zpbml0ZShtYXgpO1xuICAgIH1cbn1cblpvZE51bWJlci5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROdW1iZXIoe1xuICAgICAgICBjaGVja3M6IFtdLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bWJlcixcbiAgICAgICAgY29lcmNlOiBwYXJhbXM/LmNvZXJjZSB8fCBmYWxzZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RCaWdJbnQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5taW4gPSB0aGlzLmd0ZTtcbiAgICAgICAgdGhpcy5tYXggPSB0aGlzLmx0ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLl9kZWYuY29lcmNlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEgPSBCaWdJbnQoaW5wdXQuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEludmFsaWRJbnB1dChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5iaWdpbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJbnZhbGlkSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdHggPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBQYXJzZVN0YXR1cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNoZWNrIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaGVjay5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjaGVjay5pbmNsdXNpdmUgPyBpbnB1dC5kYXRhIDwgY2hlY2sudmFsdWUgOiBpbnB1dC5kYXRhIDw9IGNoZWNrLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0b29TbWFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJiaWdpbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGNoZWNrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiBjaGVjay5pbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2sua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb0JpZyA9IGNoZWNrLmluY2x1c2l2ZSA/IGlucHV0LmRhdGEgPiBjaGVjay52YWx1ZSA6IGlucHV0LmRhdGEgPj0gY2hlY2sudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRvb0JpZykge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYmlnaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogY2hlY2suaW5jbHVzaXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY2hlY2subWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibXVsdGlwbGVPZlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmRhdGEgJSBjaGVjay52YWx1ZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5ub3RfbXVsdGlwbGVfb2YsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZU9mOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1dGlsLmFzc2VydE5ldmVyKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IGlucHV0LmRhdGEgfTtcbiAgICB9XG4gICAgX2dldEludmFsaWRJbnB1dChpbnB1dCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmJpZ2ludCxcbiAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgIH1cbiAgICBndGUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TGltaXQoXCJtaW5cIiwgdmFsdWUsIHRydWUsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIGd0KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWluXCIsIHZhbHVlLCBmYWxzZSwgZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgbHRlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldExpbWl0KFwibWF4XCIsIHZhbHVlLCB0cnVlLCBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkpO1xuICAgIH1cbiAgICBsdCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRMaW1pdChcIm1heFwiLCB2YWx1ZSwgZmFsc2UsIGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSk7XG4gICAgfVxuICAgIHNldExpbWl0KGtpbmQsIHZhbHVlLCBpbmNsdXNpdmUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RCaWdJbnQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgY2hlY2tzOiBbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLmNoZWNrcyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9hZGRDaGVjayhjaGVjaykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEJpZ0ludCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1pblwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZWdhdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25wb3NpdGl2ZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IEJpZ0ludCgwKSxcbiAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vbm5lZ2F0aXZlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENoZWNrKHtcbiAgICAgICAgICAgIGtpbmQ6IFwibWluXCIsXG4gICAgICAgICAgICB2YWx1ZTogQmlnSW50KDApLFxuICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbXVsdGlwbGVPZih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtdWx0aXBsZU9mXCIsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBtaW5WYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5fZGVmLmNoZWNrcykge1xuICAgICAgICAgICAgaWYgKGNoLmtpbmQgPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluID09PSBudWxsIHx8IGNoLnZhbHVlID4gbWluKVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjaC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBnZXQgbWF4VmFsdWUoKSB7XG4gICAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCA9PT0gbnVsbCB8fCBjaC52YWx1ZSA8IG1heClcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG59XG5ab2RCaWdJbnQuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQmlnSW50KHtcbiAgICAgICAgY2hlY2tzOiBbXSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCaWdJbnQsXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgPz8gZmFsc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kQm9vbGVhbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBpZiAodGhpcy5fZGVmLmNvZXJjZSkge1xuICAgICAgICAgICAgaW5wdXQuZGF0YSA9IEJvb2xlYW4oaW5wdXQuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5ib29sZWFuKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmJvb2xlYW4sXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kQm9vbGVhbi5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RCb29sZWFuKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RCb29sZWFuLFxuICAgICAgICBjb2VyY2U6IHBhcmFtcz8uY29lcmNlIHx8IGZhbHNlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZERhdGUgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jb2VyY2UpIHtcbiAgICAgICAgICAgIGlucHV0LmRhdGEgPSBuZXcgRGF0ZShpbnB1dC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmRhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuZGF0ZSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oaW5wdXQuZGF0YS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9kYXRlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSBuZXcgUGFyc2VTdGF0dXMoKTtcbiAgICAgICAgbGV0IGN0eCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yIChjb25zdCBjaGVjayBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2sua2luZCA9PT0gXCJtaW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5kYXRhLmdldFRpbWUoKSA8IGNoZWNrLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjaGVjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogY2hlY2sudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrLmtpbmQgPT09IFwibWF4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZGF0YS5nZXRUaW1lKCkgPiBjaGVjay52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNoZWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBjaGVjay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRpbC5hc3NlcnROZXZlcihjaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGlucHV0LmRhdGEuZ2V0VGltZSgpKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2FkZENoZWNrKGNoZWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBjaGVja3M6IFsuLi50aGlzLl9kZWYuY2hlY2tzLCBjaGVja10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtaW4obWluRGF0ZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQ2hlY2soe1xuICAgICAgICAgICAga2luZDogXCJtaW5cIixcbiAgICAgICAgICAgIHZhbHVlOiBtaW5EYXRlLmdldFRpbWUoKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhEYXRlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRDaGVjayh7XG4gICAgICAgICAgICBraW5kOiBcIm1heFwiLFxuICAgICAgICAgICAgdmFsdWU6IG1heERhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG1pbkRhdGUoKSB7XG4gICAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuX2RlZi5jaGVja3MpIHtcbiAgICAgICAgICAgIGlmIChjaC5raW5kID09PSBcIm1pblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbiA9PT0gbnVsbCB8fCBjaC52YWx1ZSA+IG1pbilcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2gudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbiAhPSBudWxsID8gbmV3IERhdGUobWluKSA6IG51bGw7XG4gICAgfVxuICAgIGdldCBtYXhEYXRlKCkge1xuICAgICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLl9kZWYuY2hlY2tzKSB7XG4gICAgICAgICAgICBpZiAoY2gua2luZCA9PT0gXCJtYXhcIikge1xuICAgICAgICAgICAgICAgIGlmIChtYXggPT09IG51bGwgfHwgY2gudmFsdWUgPCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG1heCA9IGNoLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXggIT0gbnVsbCA/IG5ldyBEYXRlKG1heCkgOiBudWxsO1xuICAgIH1cbn1cblpvZERhdGUuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kRGF0ZSh7XG4gICAgICAgIGNoZWNrczogW10sXG4gICAgICAgIGNvZXJjZTogcGFyYW1zPy5jb2VyY2UgfHwgZmFsc2UsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRGF0ZSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RTeW1ib2wgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5zeW1ib2wpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFN5bWJvbC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RTeW1ib2woe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFN5bWJvbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RVbmRlZmluZWQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZFVuZGVmaW5lZC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmRlZmluZWQoe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVuZGVmaW5lZCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2ROdWxsIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubnVsbCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5udWxsLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9LKGlucHV0LmRhdGEpO1xuICAgIH1cbn1cblpvZE51bGwuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTnVsbCh7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTnVsbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RBbnkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gdG8gcHJldmVudCBpbnN0YW5jZXMgb2Ygb3RoZXIgY2xhc3NlcyBmcm9tIGV4dGVuZGluZyBab2RBbnkuIHRoaXMgY2F1c2VzIGlzc3VlcyB3aXRoIGNhdGNoYWxsIGluIFpvZE9iamVjdC5cbiAgICAgICAgdGhpcy5fYW55ID0gdHJ1ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RBbnkuY3JlYXRlID0gKHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQW55KHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RBbnksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kVW5rbm93biBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvLyByZXF1aXJlZFxuICAgICAgICB0aGlzLl91bmtub3duID0gdHJ1ZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG59XG5ab2RVbmtub3duLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZFVua25vd24oe1xuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVua25vd24sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kTmV2ZXIgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5uZXZlcixcbiAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgIH1cbn1cblpvZE5ldmVyLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5ldmVyKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2ROZXZlcixcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RWb2lkIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFR5cGUgPSB0aGlzLl9nZXRUeXBlKGlucHV0KTtcbiAgICAgICAgaWYgKHBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUudW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRPclJldHVybkN0eChpbnB1dCk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLnZvaWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT0soaW5wdXQuZGF0YSk7XG4gICAgfVxufVxuWm9kVm9pZC5jcmVhdGUgPSAocGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RWb2lkKHtcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RWb2lkLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZEFycmF5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4LCBzdGF0dXMgfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGRlZiA9IHRoaXMuX2RlZjtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmFycmF5LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5leGFjdExlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdG9vQmlnID0gY3R4LmRhdGEubGVuZ3RoID4gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdG9vU21hbGwgPSBjdHguZGF0YS5sZW5ndGggPCBkZWYuZXhhY3RMZW5ndGgudmFsdWU7XG4gICAgICAgICAgICBpZiAodG9vQmlnIHx8IHRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IHRvb0JpZyA/IFpvZElzc3VlQ29kZS50b29fYmlnIDogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bTogKHRvb1NtYWxsID8gZGVmLmV4YWN0TGVuZ3RoLnZhbHVlIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogKHRvb0JpZyA/IGRlZi5leGFjdExlbmd0aC52YWx1ZSA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmLmV4YWN0TGVuZ3RoLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5taW5MZW5ndGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdHguZGF0YS5sZW5ndGggPCBkZWYubWluTGVuZ3RoLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fc21hbGwsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW06IGRlZi5taW5MZW5ndGgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5taW5MZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmLm1heExlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLmxlbmd0aCA+IGRlZi5tYXhMZW5ndGgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19iaWcsXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW06IGRlZi5tYXhMZW5ndGgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5tYXhMZW5ndGgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFsuLi5jdHguZGF0YV0ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZi50eXBlLl9wYXJzZUFzeW5jKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpO1xuICAgICAgICAgICAgfSkpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFsuLi5jdHguZGF0YV0ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGVmLnR5cGUuX3BhcnNlU3luYyhuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwgaXRlbSwgY3R4LnBhdGgsIGkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0KTtcbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZTtcbiAgICB9XG4gICAgbWluKG1pbkxlbmd0aCwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogeyB2YWx1ZTogbWluTGVuZ3RoLCBtZXNzYWdlOiBlcnJvclV0aWwudG9TdHJpbmcobWVzc2FnZSkgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1heChtYXhMZW5ndGgsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RBcnJheSh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IHsgdmFsdWU6IG1heExlbmd0aCwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZW5ndGgobGVuLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgZXhhY3RMZW5ndGg6IHsgdmFsdWU6IGxlbiwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBub25lbXB0eShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbigxLCBtZXNzYWdlKTtcbiAgICB9XG59XG5ab2RBcnJheS5jcmVhdGUgPSAoc2NoZW1hLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEFycmF5KHtcbiAgICAgICAgdHlwZTogc2NoZW1hLFxuICAgICAgICBtaW5MZW5ndGg6IG51bGwsXG4gICAgICAgIG1heExlbmd0aDogbnVsbCxcbiAgICAgICAgZXhhY3RMZW5ndGg6IG51bGwsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQXJyYXksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBkZWVwUGFydGlhbGlmeShzY2hlbWEpIHtcbiAgICBpZiAoc2NoZW1hIGluc3RhbmNlb2YgWm9kT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNjaGVtYS5zaGFwZSkge1xuICAgICAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSBzY2hlbWEuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSBab2RPcHRpb25hbC5jcmVhdGUoZGVlcFBhcnRpYWxpZnkoZmllbGRTY2hlbWEpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi5zY2hlbWEuX2RlZixcbiAgICAgICAgICAgIHNoYXBlOiAoKSA9PiBuZXdTaGFwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNjaGVtYSBpbnN0YW5jZW9mIFpvZEFycmF5KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kQXJyYXkoe1xuICAgICAgICAgICAgLi4uc2NoZW1hLl9kZWYsXG4gICAgICAgICAgICB0eXBlOiBkZWVwUGFydGlhbGlmeShzY2hlbWEuZWxlbWVudCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RPcHRpb25hbCkge1xuICAgICAgICByZXR1cm4gWm9kT3B0aW9uYWwuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS51bndyYXAoKSkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2ROdWxsYWJsZSkge1xuICAgICAgICByZXR1cm4gWm9kTnVsbGFibGUuY3JlYXRlKGRlZXBQYXJ0aWFsaWZ5KHNjaGVtYS51bndyYXAoKSkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzY2hlbWEgaW5zdGFuY2VvZiBab2RUdXBsZSkge1xuICAgICAgICByZXR1cm4gWm9kVHVwbGUuY3JlYXRlKHNjaGVtYS5pdGVtcy5tYXAoKGl0ZW0pID0+IGRlZXBQYXJ0aWFsaWZ5KGl0ZW0pKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RPYmplY3QgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fY2FjaGVkID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIEluIG1vc3QgY2FzZXMsIHRoaXMgaXMgbm8gbG9uZ2VyIG5lZWRlZCAtIHVua25vd24gcHJvcGVydGllcyBhcmUgbm93IHNpbGVudGx5IHN0cmlwcGVkLlxuICAgICAgICAgKiBJZiB5b3Ugd2FudCB0byBwYXNzIHRocm91Z2ggdW5rbm93biBwcm9wZXJ0aWVzLCB1c2UgYC5wYXNzdGhyb3VnaCgpYCBpbnN0ZWFkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ub25zdHJpY3QgPSB0aGlzLnBhc3N0aHJvdWdoO1xuICAgICAgICAvLyBleHRlbmQ8XG4gICAgICAgIC8vICAgQXVnbWVudGF0aW9uIGV4dGVuZHMgWm9kUmF3U2hhcGUsXG4gICAgICAgIC8vICAgTmV3T3V0cHV0IGV4dGVuZHMgdXRpbC5mbGF0dGVuPHtcbiAgICAgICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIE91dHB1dF06IGsgZXh0ZW5kcyBrZXlvZiBBdWdtZW50YXRpb25cbiAgICAgICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfb3V0cHV0XCJdXG4gICAgICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIE91dHB1dFxuICAgICAgICAvLyAgICAgICA/IE91dHB1dFtrXVxuICAgICAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgICAgICAvLyAgIH0+LFxuICAgICAgICAvLyAgIE5ld0lucHV0IGV4dGVuZHMgdXRpbC5mbGF0dGVuPHtcbiAgICAgICAgLy8gICAgIFtrIGluIGtleW9mIEF1Z21lbnRhdGlvbiB8IGtleW9mIElucHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgICAgICAvLyAgICAgICA/IEF1Z21lbnRhdGlvbltrXVtcIl9pbnB1dFwiXVxuICAgICAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBJbnB1dFxuICAgICAgICAvLyAgICAgICA/IElucHV0W2tdXG4gICAgICAgIC8vICAgICAgIDogbmV2ZXI7XG4gICAgICAgIC8vICAgfT5cbiAgICAgICAgLy8gPihcbiAgICAgICAgLy8gICBhdWdtZW50YXRpb246IEF1Z21lbnRhdGlvblxuICAgICAgICAvLyApOiBab2RPYmplY3Q8XG4gICAgICAgIC8vICAgZXh0ZW5kU2hhcGU8VCwgQXVnbWVudGF0aW9uPixcbiAgICAgICAgLy8gICBVbmtub3duS2V5cyxcbiAgICAgICAgLy8gICBDYXRjaGFsbCxcbiAgICAgICAgLy8gICBOZXdPdXRwdXQsXG4gICAgICAgIC8vICAgTmV3SW5wdXRcbiAgICAgICAgLy8gPiB7XG4gICAgICAgIC8vICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAvLyAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAvLyAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgIC8vICAgICAgIC4uLnRoaXMuX2RlZi5zaGFwZSgpLFxuICAgICAgICAvLyAgICAgICAuLi5hdWdtZW50YXRpb24sXG4gICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgLy8gICB9KSBhcyBhbnk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIFVzZSBgLmV4dGVuZGAgaW5zdGVhZFxuICAgICAgICAgKiAgKi9cbiAgICAgICAgdGhpcy5hdWdtZW50ID0gdGhpcy5leHRlbmQ7XG4gICAgfVxuICAgIF9nZXRDYWNoZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYWNoZWQgIT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICAgICAgICBjb25zdCBzaGFwZSA9IHRoaXMuX2RlZi5zaGFwZSgpO1xuICAgICAgICBjb25zdCBrZXlzID0gdXRpbC5vYmplY3RLZXlzKHNoYXBlKTtcbiAgICAgICAgdGhpcy5fY2FjaGVkID0geyBzaGFwZSwga2V5cyB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVkO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3QgeyBzaGFwZSwga2V5czogc2hhcGVLZXlzIH0gPSB0aGlzLl9nZXRDYWNoZWQoKTtcbiAgICAgICAgY29uc3QgZXh0cmFLZXlzID0gW107XG4gICAgICAgIGlmICghKHRoaXMuX2RlZi5jYXRjaGFsbCBpbnN0YW5jZW9mIFpvZE5ldmVyICYmIHRoaXMuX2RlZi51bmtub3duS2V5cyA9PT0gXCJzdHJpcFwiKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3R4LmRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNoYXBlS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhaXJzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHNoYXBlS2V5cykge1xuICAgICAgICAgICAgY29uc3Qga2V5VmFsaWRhdG9yID0gc2hhcGVba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3R4LmRhdGFba2V5XTtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGtleSB9LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBrZXlWYWxpZGF0b3IuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIGtleSkpLFxuICAgICAgICAgICAgICAgIGFsd2F5c1NldDoga2V5IGluIGN0eC5kYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2RlZi5jYXRjaGFsbCBpbnN0YW5jZW9mIFpvZE5ldmVyKSB7XG4gICAgICAgICAgICBjb25zdCB1bmtub3duS2V5cyA9IHRoaXMuX2RlZi51bmtub3duS2V5cztcbiAgICAgICAgICAgIGlmICh1bmtub3duS2V5cyA9PT0gXCJwYXNzdGhyb3VnaFwiKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZXh0cmFLZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhaXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeyBzdGF0dXM6IFwidmFsaWRcIiwgdmFsdWU6IGN0eC5kYXRhW2tleV0gfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodW5rbm93bktleXMgPT09IFwic3RyaWN0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXh0cmFLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudW5yZWNvZ25pemVkX2tleXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiBleHRyYUtleXMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1bmtub3duS2V5cyA9PT0gXCJzdHJpcFwiKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludGVybmFsIFpvZE9iamVjdCBlcnJvcjogaW52YWxpZCB1bmtub3duS2V5cyB2YWx1ZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJ1biBjYXRjaGFsbCB2YWxpZGF0aW9uXG4gICAgICAgICAgICBjb25zdCBjYXRjaGFsbCA9IHRoaXMuX2RlZi5jYXRjaGFsbDtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGV4dHJhS2V5cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3R4LmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBwYWlycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiB7IHN0YXR1czogXCJ2YWxpZFwiLCB2YWx1ZToga2V5IH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRjaGFsbC5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIHZhbHVlLCBjdHgucGF0aCwga2V5KSAvLywgY3R4LmNoaWxkKGtleSksIHZhbHVlLCBnZXRQYXJzZWRUeXBlKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bmNQYWlycyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBhd2FpdCBwYWlyLmtleTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBwYWlyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBzeW5jUGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsd2F5c1NldDogcGFpci5hbHdheXNTZXQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3luY1BhaXJzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoc3luY1BhaXJzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhcnNlU3RhdHVzLm1lcmdlT2JqZWN0U3luYyhzdGF0dXMsIHN5bmNQYWlycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHNoYXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnNoYXBlKCk7XG4gICAgfVxuICAgIHN0cmljdChtZXNzYWdlKSB7XG4gICAgICAgIGVycm9yVXRpbC5lcnJUb09iajtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaWN0XCIsXG4gICAgICAgICAgICAuLi4obWVzc2FnZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWFwOiAoaXNzdWUsIGN0eCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEVycm9yID0gdGhpcy5fZGVmLmVycm9yTWFwPy4oaXNzdWUsIGN0eCkubWVzc2FnZSA/PyBjdHguZGVmYXVsdEVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlLmNvZGUgPT09IFwidW5yZWNvZ25pemVkX2tleXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclV0aWwuZXJyVG9PYmoobWVzc2FnZSkubWVzc2FnZSA/PyBkZWZhdWx0RXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGVmYXVsdEVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7fSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdHJpcCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBhc3N0aHJvdWdoKCkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICB1bmtub3duS2V5czogXCJwYXNzdGhyb3VnaFwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gY29uc3QgQXVnbWVudEZhY3RvcnkgPVxuICAgIC8vICAgPERlZiBleHRlbmRzIFpvZE9iamVjdERlZj4oZGVmOiBEZWYpID0+XG4gICAgLy8gICA8QXVnbWVudGF0aW9uIGV4dGVuZHMgWm9kUmF3U2hhcGU+KFxuICAgIC8vICAgICBhdWdtZW50YXRpb246IEF1Z21lbnRhdGlvblxuICAgIC8vICAgKTogWm9kT2JqZWN0PFxuICAgIC8vICAgICBleHRlbmRTaGFwZTxSZXR1cm5UeXBlPERlZltcInNoYXBlXCJdPiwgQXVnbWVudGF0aW9uPixcbiAgICAvLyAgICAgRGVmW1widW5rbm93bktleXNcIl0sXG4gICAgLy8gICAgIERlZltcImNhdGNoYWxsXCJdXG4gICAgLy8gICA+ID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgIC8vICAgICAgIC4uLmRlZixcbiAgICAvLyAgICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAvLyAgICAgICAgIC4uLmRlZi5zaGFwZSgpLFxuICAgIC8vICAgICAgICAgLi4uYXVnbWVudGF0aW9uLFxuICAgIC8vICAgICAgIH0pLFxuICAgIC8vICAgICB9KSBhcyBhbnk7XG4gICAgLy8gICB9O1xuICAgIGV4dGVuZChhdWdtZW50YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5fZGVmLnNoYXBlKCksXG4gICAgICAgICAgICAgICAgLi4uYXVnbWVudGF0aW9uLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmlvciB0byB6b2RAMS4wLjEyIHRoZXJlIHdhcyBhIGJ1ZyBpbiB0aGVcbiAgICAgKiBpbmZlcnJlZCB0eXBlIG9mIG1lcmdlZCBvYmplY3RzLiBQbGVhc2VcbiAgICAgKiB1cGdyYWRlIGlmIHlvdSBhcmUgZXhwZXJpZW5jaW5nIGlzc3Vlcy5cbiAgICAgKi9cbiAgICBtZXJnZShtZXJnaW5nKSB7XG4gICAgICAgIGNvbnN0IG1lcmdlZCA9IG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgdW5rbm93bktleXM6IG1lcmdpbmcuX2RlZi51bmtub3duS2V5cyxcbiAgICAgICAgICAgIGNhdGNoYWxsOiBtZXJnaW5nLl9kZWYuY2F0Y2hhbGwsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgICAgICAuLi5tZXJnaW5nLl9kZWYuc2hhcGUoKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH1cbiAgICAvLyBtZXJnZTxcbiAgICAvLyAgIEluY29taW5nIGV4dGVuZHMgQW55Wm9kT2JqZWN0LFxuICAgIC8vICAgQXVnbWVudGF0aW9uIGV4dGVuZHMgSW5jb21pbmdbXCJzaGFwZVwiXSxcbiAgICAvLyAgIE5ld091dHB1dCBleHRlbmRzIHtcbiAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgT3V0cHV0XTogayBleHRlbmRzIGtleW9mIEF1Z21lbnRhdGlvblxuICAgIC8vICAgICAgID8gQXVnbWVudGF0aW9uW2tdW1wiX291dHB1dFwiXVxuICAgIC8vICAgICAgIDogayBleHRlbmRzIGtleW9mIE91dHB1dFxuICAgIC8vICAgICAgID8gT3V0cHV0W2tdXG4gICAgLy8gICAgICAgOiBuZXZlcjtcbiAgICAvLyAgIH0sXG4gICAgLy8gICBOZXdJbnB1dCBleHRlbmRzIHtcbiAgICAvLyAgICAgW2sgaW4ga2V5b2YgQXVnbWVudGF0aW9uIHwga2V5b2YgSW5wdXRdOiBrIGV4dGVuZHMga2V5b2YgQXVnbWVudGF0aW9uXG4gICAgLy8gICAgICAgPyBBdWdtZW50YXRpb25ba11bXCJfaW5wdXRcIl1cbiAgICAvLyAgICAgICA6IGsgZXh0ZW5kcyBrZXlvZiBJbnB1dFxuICAgIC8vICAgICAgID8gSW5wdXRba11cbiAgICAvLyAgICAgICA6IG5ldmVyO1xuICAgIC8vICAgfVxuICAgIC8vID4oXG4gICAgLy8gICBtZXJnaW5nOiBJbmNvbWluZ1xuICAgIC8vICk6IFpvZE9iamVjdDxcbiAgICAvLyAgIGV4dGVuZFNoYXBlPFQsIFJldHVyblR5cGU8SW5jb21pbmdbXCJfZGVmXCJdW1wic2hhcGVcIl0+PixcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcInVua25vd25LZXlzXCJdLFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1wiY2F0Y2hhbGxcIl0sXG4gICAgLy8gICBOZXdPdXRwdXQsXG4gICAgLy8gICBOZXdJbnB1dFxuICAgIC8vID4ge1xuICAgIC8vICAgY29uc3QgbWVyZ2VkOiBhbnkgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAvLyAgICAgdW5rbm93bktleXM6IG1lcmdpbmcuX2RlZi51bmtub3duS2V5cyxcbiAgICAvLyAgICAgY2F0Y2hhbGw6IG1lcmdpbmcuX2RlZi5jYXRjaGFsbCxcbiAgICAvLyAgICAgc2hhcGU6ICgpID0+XG4gICAgLy8gICAgICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyh0aGlzLl9kZWYuc2hhcGUoKSwgbWVyZ2luZy5fZGVmLnNoYXBlKCkpLFxuICAgIC8vICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAvLyAgIH0pIGFzIGFueTtcbiAgICAvLyAgIHJldHVybiBtZXJnZWQ7XG4gICAgLy8gfVxuICAgIHNldEtleShrZXksIHNjaGVtYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdWdtZW50KHsgW2tleV06IHNjaGVtYSB9KTtcbiAgICB9XG4gICAgLy8gbWVyZ2U8SW5jb21pbmcgZXh0ZW5kcyBBbnlab2RPYmplY3Q+KFxuICAgIC8vICAgbWVyZ2luZzogSW5jb21pbmdcbiAgICAvLyApOiAvL1pvZE9iamVjdDxUICYgSW5jb21pbmdbXCJfc2hhcGVcIl0sIFVua25vd25LZXlzLCBDYXRjaGFsbD4gPSAobWVyZ2luZykgPT4ge1xuICAgIC8vIFpvZE9iamVjdDxcbiAgICAvLyAgIGV4dGVuZFNoYXBlPFQsIFJldHVyblR5cGU8SW5jb21pbmdbXCJfZGVmXCJdW1wic2hhcGVcIl0+PixcbiAgICAvLyAgIEluY29taW5nW1wiX2RlZlwiXVtcInVua25vd25LZXlzXCJdLFxuICAgIC8vICAgSW5jb21pbmdbXCJfZGVmXCJdW1wiY2F0Y2hhbGxcIl1cbiAgICAvLyA+IHtcbiAgICAvLyAgIC8vIGNvbnN0IG1lcmdlZFNoYXBlID0gb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyhcbiAgICAvLyAgIC8vICAgdGhpcy5fZGVmLnNoYXBlKCksXG4gICAgLy8gICAvLyAgIG1lcmdpbmcuX2RlZi5zaGFwZSgpXG4gICAgLy8gICAvLyApO1xuICAgIC8vICAgY29uc3QgbWVyZ2VkOiBhbnkgPSBuZXcgWm9kT2JqZWN0KHtcbiAgICAvLyAgICAgdW5rbm93bktleXM6IG1lcmdpbmcuX2RlZi51bmtub3duS2V5cyxcbiAgICAvLyAgICAgY2F0Y2hhbGw6IG1lcmdpbmcuX2RlZi5jYXRjaGFsbCxcbiAgICAvLyAgICAgc2hhcGU6ICgpID0+XG4gICAgLy8gICAgICAgb2JqZWN0VXRpbC5tZXJnZVNoYXBlcyh0aGlzLl9kZWYuc2hhcGUoKSwgbWVyZ2luZy5fZGVmLnNoYXBlKCkpLFxuICAgIC8vICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAvLyAgIH0pIGFzIGFueTtcbiAgICAvLyAgIHJldHVybiBtZXJnZWQ7XG4gICAgLy8gfVxuICAgIGNhdGNoYWxsKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGNhdGNoYWxsOiBpbmRleCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBpY2sobWFzaykge1xuICAgICAgICBjb25zdCBzaGFwZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB1dGlsLm9iamVjdEtleXMobWFzaykpIHtcbiAgICAgICAgICAgIGlmIChtYXNrW2tleV0gJiYgdGhpcy5zaGFwZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgc2hhcGVba2V5XSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbWl0KG1hc2spIHtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKSB7XG4gICAgICAgICAgICBpZiAoIW1hc2tba2V5XSkge1xuICAgICAgICAgICAgICAgIHNoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IHNoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBkZWVwUGFydGlhbCgpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBQYXJ0aWFsaWZ5KHRoaXMpO1xuICAgIH1cbiAgICBwYXJ0aWFsKG1hc2spIHtcbiAgICAgICAgY29uc3QgbmV3U2hhcGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdXRpbC5vYmplY3RLZXlzKHRoaXMuc2hhcGUpKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgIGlmIChtYXNrICYmICFtYXNrW2tleV0pIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gZmllbGRTY2hlbWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gZmllbGRTY2hlbWEub3B0aW9uYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICBzaGFwZTogKCkgPT4gbmV3U2hhcGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXF1aXJlZChtYXNrKSB7XG4gICAgICAgIGNvbnN0IG5ld1NoYXBlID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKSkge1xuICAgICAgICAgICAgaWYgKG1hc2sgJiYgIW1hc2tba2V5XSkge1xuICAgICAgICAgICAgICAgIG5ld1NoYXBlW2tleV0gPSB0aGlzLnNoYXBlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHRoaXMuc2hhcGVba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RmllbGQgPSBmaWVsZFNjaGVtYTtcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3RmllbGQgaW5zdGFuY2VvZiBab2RPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdGaWVsZCA9IG5ld0ZpZWxkLl9kZWYuaW5uZXJUeXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTaGFwZVtrZXldID0gbmV3RmllbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgc2hhcGU6ICgpID0+IG5ld1NoYXBlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAga2V5b2YoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVab2RFbnVtKHV0aWwub2JqZWN0S2V5cyh0aGlzLnNoYXBlKSk7XG4gICAgfVxufVxuWm9kT2JqZWN0LmNyZWF0ZSA9IChzaGFwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICBzaGFwZTogKCkgPT4gc2hhcGUsXG4gICAgICAgIHVua25vd25LZXlzOiBcInN0cmlwXCIsXG4gICAgICAgIGNhdGNoYWxsOiBab2ROZXZlci5jcmVhdGUoKSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5ab2RPYmplY3Quc3RyaWN0Q3JlYXRlID0gKHNoYXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE9iamVjdCh7XG4gICAgICAgIHNoYXBlOiAoKSA9PiBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaWN0XCIsXG4gICAgICAgIGNhdGNoYWxsOiBab2ROZXZlci5jcmVhdGUoKSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPYmplY3QsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5ab2RPYmplY3QubGF6eWNyZWF0ZSA9IChzaGFwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPYmplY3Qoe1xuICAgICAgICBzaGFwZSxcbiAgICAgICAgdW5rbm93bktleXM6IFwic3RyaXBcIixcbiAgICAgICAgY2F0Y2hhbGw6IFpvZE5ldmVyLmNyZWF0ZSgpLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE9iamVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RVbmlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX2RlZi5vcHRpb25zO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXN1bHRzKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBmaXJzdCBpc3N1ZS1mcmVlIHZhbGlkYXRpb24gaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBpc3N1ZXMgZnJvbSBkaXJ0eSBvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgY3R4LmNvbW1vbi5pc3N1ZXMucHVzaCguLi5yZXN1bHQuY3R4LmNvbW1vbi5pc3N1ZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXR1cm4gaW52YWxpZFxuICAgICAgICAgICAgY29uc3QgdW5pb25FcnJvcnMgPSByZXN1bHRzLm1hcCgocmVzdWx0KSA9PiBuZXcgWm9kRXJyb3IocmVzdWx0LmN0eC5jb21tb24uaXNzdWVzKSk7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbixcbiAgICAgICAgICAgICAgICB1bmlvbkVycm9ycyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChvcHRpb25zLm1hcChhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRDdHggPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdHguY29tbW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBhd2FpdCBvcHRpb24uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY2hpbGRDdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjdHg6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSkudGhlbihoYW5kbGVSZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXJ0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnN0IGlzc3VlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ3R4ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG9wdGlvbi5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoaWxkQ3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcInZhbGlkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiICYmICFkaXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBkaXJ0eSA9IHsgcmVzdWx0LCBjdHg6IGNoaWxkQ3R4IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZEN0eC5jb21tb24uaXNzdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZXMucHVzaChjaGlsZEN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlydHkpIHtcbiAgICAgICAgICAgICAgICBjdHguY29tbW9uLmlzc3Vlcy5wdXNoKC4uLmRpcnR5LmN0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlydHkucmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdW5pb25FcnJvcnMgPSBpc3N1ZXMubWFwKChpc3N1ZXMpID0+IG5ldyBab2RFcnJvcihpc3N1ZXMpKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3VuaW9uLFxuICAgICAgICAgICAgICAgIHVuaW9uRXJyb3JzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vcHRpb25zO1xuICAgIH1cbn1cblpvZFVuaW9uLmNyZWF0ZSA9ICh0eXBlcywgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RVbmlvbih7XG4gICAgICAgIG9wdGlvbnM6IHR5cGVzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFVuaW9uLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vL1xuLy8vLy8vLy8vLyAgICAgIFpvZERpc2NyaW1pbmF0ZWRVbmlvbiAgICAgIC8vLy8vLy8vLy9cbi8vLy8vLy8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IGdldERpc2NyaW1pbmF0b3IgPSAodHlwZSkgPT4ge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTGF6eSkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnNjaGVtYSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RFZmZlY3RzKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuaW5uZXJUeXBlKCkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTGl0ZXJhbCkge1xuICAgICAgICByZXR1cm4gW3R5cGUudmFsdWVdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kRW51bSkge1xuICAgICAgICByZXR1cm4gdHlwZS5vcHRpb25zO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTmF0aXZlRW51bSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFuL2JhblxuICAgICAgICByZXR1cm4gdXRpbC5vYmplY3RWYWx1ZXModHlwZS5lbnVtKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZERlZmF1bHQpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS5fZGVmLmlubmVyVHlwZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RVbmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWRdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTnVsbCkge1xuICAgICAgICByZXR1cm4gW251bGxdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kT3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIC4uLmdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSldO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgWm9kTnVsbGFibGUpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsLCAuLi5nZXREaXNjcmltaW5hdG9yKHR5cGUudW53cmFwKCkpXTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZEJyYW5kZWQpIHtcbiAgICAgICAgcmV0dXJuIGdldERpc2NyaW1pbmF0b3IodHlwZS51bndyYXAoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBab2RSZWFkb25seSkge1xuICAgICAgICByZXR1cm4gZ2V0RGlzY3JpbWluYXRvcih0eXBlLnVud3JhcCgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSBpbnN0YW5jZW9mIFpvZENhdGNoKSB7XG4gICAgICAgIHJldHVybiBnZXREaXNjcmltaW5hdG9yKHR5cGUuX2RlZi5pbm5lclR5cGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn07XG5leHBvcnQgY2xhc3MgWm9kRGlzY3JpbWluYXRlZFVuaW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUub2JqZWN0KSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm9iamVjdCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpc2NyaW1pbmF0b3IgPSB0aGlzLmRpc2NyaW1pbmF0b3I7XG4gICAgICAgIGNvbnN0IGRpc2NyaW1pbmF0b3JWYWx1ZSA9IGN0eC5kYXRhW2Rpc2NyaW1pbmF0b3JdO1xuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLm9wdGlvbnNNYXAuZ2V0KGRpc2NyaW1pbmF0b3JWYWx1ZSk7XG4gICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IEFycmF5LmZyb20odGhpcy5vcHRpb25zTWFwLmtleXMoKSksXG4gICAgICAgICAgICAgICAgcGF0aDogW2Rpc2NyaW1pbmF0b3JdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24uX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgZGlzY3JpbWluYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5kaXNjcmltaW5hdG9yO1xuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vcHRpb25zO1xuICAgIH1cbiAgICBnZXQgb3B0aW9uc01hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5vcHRpb25zTWFwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgY29uc3RydWN0b3Igb2YgdGhlIGRpc2NyaW1pbmF0ZWQgdW5pb24gc2NoZW1hLiBJdHMgYmVoYXZpb3VyIGlzIHZlcnkgc2ltaWxhciB0byB0aGF0IG9mIHRoZSBub3JtYWwgei51bmlvbigpIGNvbnN0cnVjdG9yLlxuICAgICAqIEhvd2V2ZXIsIGl0IG9ubHkgYWxsb3dzIGEgdW5pb24gb2Ygb2JqZWN0cywgYWxsIG9mIHdoaWNoIG5lZWQgdG8gc2hhcmUgYSBkaXNjcmltaW5hdG9yIHByb3BlcnR5LiBUaGlzIHByb3BlcnR5IG11c3RcbiAgICAgKiBoYXZlIGEgZGlmZmVyZW50IHZhbHVlIGZvciBlYWNoIG9iamVjdCBpbiB0aGUgdW5pb24uXG4gICAgICogQHBhcmFtIGRpc2NyaW1pbmF0b3IgdGhlIG5hbWUgb2YgdGhlIGRpc2NyaW1pbmF0b3IgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gdHlwZXMgYW4gYXJyYXkgb2Ygb2JqZWN0IHNjaGVtYXNcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZShkaXNjcmltaW5hdG9yLCBvcHRpb25zLCBwYXJhbXMpIHtcbiAgICAgICAgLy8gR2V0IGFsbCB0aGUgdmFsaWQgZGlzY3JpbWluYXRvciB2YWx1ZXNcbiAgICAgICAgY29uc3Qgb3B0aW9uc01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpc2NyaW1pbmF0b3JWYWx1ZXMgPSBnZXREaXNjcmltaW5hdG9yKHR5cGUuc2hhcGVbZGlzY3JpbWluYXRvcl0pO1xuICAgICAgICAgICAgaWYgKCFkaXNjcmltaW5hdG9yVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQSBkaXNjcmltaW5hdG9yIHZhbHVlIGZvciBrZXkgXFxgJHtkaXNjcmltaW5hdG9yfVxcYCBjb3VsZCBub3QgYmUgZXh0cmFjdGVkIGZyb20gYWxsIHNjaGVtYSBvcHRpb25zYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGRpc2NyaW1pbmF0b3JWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc01hcC5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGlzY3JpbWluYXRvciBwcm9wZXJ0eSAke1N0cmluZyhkaXNjcmltaW5hdG9yKX0gaGFzIGR1cGxpY2F0ZSB2YWx1ZSAke1N0cmluZyh2YWx1ZSl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnNNYXAuc2V0KHZhbHVlLCB0eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZERpc2NyaW1pbmF0ZWRVbmlvbih7XG4gICAgICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERpc2NyaW1pbmF0ZWRVbmlvbixcbiAgICAgICAgICAgIGRpc2NyaW1pbmF0b3IsXG4gICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9uc01hcCxcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWVyZ2VWYWx1ZXMoYSwgYikge1xuICAgIGNvbnN0IGFUeXBlID0gZ2V0UGFyc2VkVHlwZShhKTtcbiAgICBjb25zdCBiVHlwZSA9IGdldFBhcnNlZFR5cGUoYik7XG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIGRhdGE6IGEgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYVR5cGUgPT09IFpvZFBhcnNlZFR5cGUub2JqZWN0ICYmIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLm9iamVjdCkge1xuICAgICAgICBjb25zdCBiS2V5cyA9IHV0aWwub2JqZWN0S2V5cyhiKTtcbiAgICAgICAgY29uc3Qgc2hhcmVkS2V5cyA9IHV0aWwub2JqZWN0S2V5cyhhKS5maWx0ZXIoKGtleSkgPT4gYktleXMuaW5kZXhPZihrZXkpICE9PSAtMSk7XG4gICAgICAgIGNvbnN0IG5ld09iaiA9IHsgLi4uYSwgLi4uYiB9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBzaGFyZWRLZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBzaGFyZWRWYWx1ZSA9IG1lcmdlVmFsdWVzKGFba2V5XSwgYltrZXldKTtcbiAgICAgICAgICAgIGlmICghc2hhcmVkVmFsdWUudmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld09ialtrZXldID0gc2hhcmVkVmFsdWUuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSwgZGF0YTogbmV3T2JqIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFUeXBlID09PSBab2RQYXJzZWRUeXBlLmFycmF5ICYmIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLmFycmF5KSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbUEgPSBhW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1CID0gYltpbmRleF07XG4gICAgICAgICAgICBjb25zdCBzaGFyZWRWYWx1ZSA9IG1lcmdlVmFsdWVzKGl0ZW1BLCBpdGVtQik7XG4gICAgICAgICAgICBpZiAoIXNoYXJlZFZhbHVlLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKHNoYXJlZFZhbHVlLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBuZXdBcnJheSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChhVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS5kYXRlICYmIGJUeXBlID09PSBab2RQYXJzZWRUeXBlLmRhdGUgJiYgK2EgPT09ICtiKSB7XG4gICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlLCBkYXRhOiBhIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UgfTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgWm9kSW50ZXJzZWN0aW9uIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGhhbmRsZVBhcnNlZCA9IChwYXJzZWRMZWZ0LCBwYXJzZWRSaWdodCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQWJvcnRlZChwYXJzZWRMZWZ0KSB8fCBpc0Fib3J0ZWQocGFyc2VkUmlnaHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZVZhbHVlcyhwYXJzZWRMZWZ0LnZhbHVlLCBwYXJzZWRSaWdodC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIW1lcmdlZC52YWxpZCkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNEaXJ0eShwYXJzZWRMZWZ0KSB8fCBpc0RpcnR5KHBhcnNlZFJpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBtZXJnZWQuZGF0YSB9O1xuICAgICAgICB9O1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWYubGVmdC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmLnJpZ2h0Ll9wYXJzZUFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLnRoZW4oKFtsZWZ0LCByaWdodF0pID0+IGhhbmRsZVBhcnNlZChsZWZ0LCByaWdodCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVBhcnNlZCh0aGlzLl9kZWYubGVmdC5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgICAgIH0pLCB0aGlzLl9kZWYucmlnaHQuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgZGF0YTogY3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5ab2RJbnRlcnNlY3Rpb24uY3JlYXRlID0gKGxlZnQsIHJpZ2h0LCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEludGVyc2VjdGlvbih7XG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHJpZ2h0OiByaWdodCxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RJbnRlcnNlY3Rpb24sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLyB0eXBlIFpvZFR1cGxlSXRlbXMgPSBbWm9kVHlwZUFueSwgLi4uWm9kVHlwZUFueVtdXTtcbmV4cG9ydCBjbGFzcyBab2RUdXBsZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuYXJyYXkpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUuYXJyYXksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3R4LmRhdGEubGVuZ3RoIDwgdGhpcy5fZGVmLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLnRvb19zbWFsbCxcbiAgICAgICAgICAgICAgICBtaW5pbXVtOiB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN0ID0gdGhpcy5fZGVmLnJlc3Q7XG4gICAgICAgIGlmICghcmVzdCAmJiBjdHguZGF0YS5sZW5ndGggPiB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX2JpZyxcbiAgICAgICAgICAgICAgICBtYXhpbXVtOiB0aGlzLl9kZWYuaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGluY2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcnJheVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtcyA9IFsuLi5jdHguZGF0YV1cbiAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5fZGVmLml0ZW1zW2l0ZW1JbmRleF0gfHwgdGhpcy5fZGVmLnJlc3Q7XG4gICAgICAgICAgICBpZiAoIXNjaGVtYSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBzY2hlbWEuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaXRlbUluZGV4KSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKCh4KSA9PiAhIXgpOyAvLyBmaWx0ZXIgbnVsbHNcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChpdGVtcykudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgcmVzdWx0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZUFycmF5KHN0YXR1cywgaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pdGVtcztcbiAgICB9XG4gICAgcmVzdChyZXN0KSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kVHVwbGUoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgcmVzdCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuWm9kVHVwbGUuY3JlYXRlID0gKHNjaGVtYXMsIHBhcmFtcykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzY2hlbWFzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGFycmF5IG9mIHNjaGVtYXMgdG8gei50dXBsZShbIC4uLiBdKVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBab2RUdXBsZSh7XG4gICAgICAgIGl0ZW1zOiBzY2hlbWFzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFR1cGxlLFxuICAgICAgICByZXN0OiBudWxsLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZFJlY29yZCBleHRlbmRzIFpvZFR5cGUge1xuICAgIGdldCBrZXlTY2hlbWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICB9XG4gICAgZ2V0IHZhbHVlU2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICB9XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5vYmplY3QpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUub2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFpcnMgPSBbXTtcbiAgICAgICAgY29uc3Qga2V5VHlwZSA9IHRoaXMuX2RlZi5rZXlUeXBlO1xuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdHguZGF0YSkge1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiBrZXlUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwga2V5LCBjdHgucGF0aCwga2V5KSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlVHlwZS5fcGFyc2UobmV3IFBhcnNlSW5wdXRMYXp5UGF0aChjdHgsIGN0eC5kYXRhW2tleV0sIGN0eC5wYXRoLCBrZXkpKSxcbiAgICAgICAgICAgICAgICBhbHdheXNTZXQ6IGtleSBpbiBjdHguZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2VTdGF0dXMubWVyZ2VPYmplY3RBc3luYyhzdGF0dXMsIHBhaXJzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQYXJzZVN0YXR1cy5tZXJnZU9iamVjdFN5bmMoc3RhdHVzLCBwYWlycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVUeXBlO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlKGZpcnN0LCBzZWNvbmQsIHRoaXJkKSB7XG4gICAgICAgIGlmIChzZWNvbmQgaW5zdGFuY2VvZiBab2RUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFpvZFJlY29yZCh7XG4gICAgICAgICAgICAgICAga2V5VHlwZTogZmlyc3QsXG4gICAgICAgICAgICAgICAgdmFsdWVUeXBlOiBzZWNvbmQsXG4gICAgICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWNvcmQsXG4gICAgICAgICAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyh0aGlyZCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFpvZFJlY29yZCh7XG4gICAgICAgICAgICBrZXlUeXBlOiBab2RTdHJpbmcuY3JlYXRlKCksXG4gICAgICAgICAgICB2YWx1ZVR5cGU6IGZpcnN0LFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RSZWNvcmQsXG4gICAgICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHNlY29uZCksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RNYXAgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQga2V5U2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmtleVR5cGU7XG4gICAgfVxuICAgIGdldCB2YWx1ZVNjaGVtYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZVR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUubWFwKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLm1hcCxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleVR5cGUgPSB0aGlzLl9kZWYua2V5VHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgY29uc3QgcGFpcnMgPSBbLi4uY3R4LmRhdGEuZW50cmllcygpXS5tYXAoKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXlUeXBlLl9wYXJzZShuZXcgUGFyc2VJbnB1dExhenlQYXRoKGN0eCwga2V5LCBjdHgucGF0aCwgW2luZGV4LCBcImtleVwiXSkpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCB2YWx1ZSwgY3R4LnBhdGgsIFtpbmRleCwgXCJ2YWx1ZVwiXSkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXdhaXQgcGFpci5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiYWJvcnRlZFwiIHx8IHZhbHVlLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhdHVzID09PSBcImRpcnR5XCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsTWFwLnNldChrZXkudmFsdWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE1hcCB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbE1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBwYWlycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhaXIua2V5O1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFpci52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIgfHwgdmFsdWUuc3RhdHVzID09PSBcImFib3J0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGF0dXMgPT09IFwiZGlydHlcIiB8fCB2YWx1ZS5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxNYXAuc2V0KGtleS52YWx1ZSwgdmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBmaW5hbE1hcCB9O1xuICAgICAgICB9XG4gICAgfVxufVxuWm9kTWFwLmNyZWF0ZSA9IChrZXlUeXBlLCB2YWx1ZVR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kTWFwKHtcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBrZXlUeXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE1hcCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RTZXQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnNldCkge1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfdHlwZSxcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogWm9kUGFyc2VkVHlwZS5zZXQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWYgPSB0aGlzLl9kZWY7XG4gICAgICAgIGlmIChkZWYubWluU2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN0eC5kYXRhLnNpemUgPCBkZWYubWluU2l6ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUudG9vX3NtYWxsLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBkZWYubWluU2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5taW5TaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlZi5tYXhTaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3R4LmRhdGEuc2l6ZSA+IGRlZi5tYXhTaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS50b29fYmlnLFxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBkZWYubWF4U2l6ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleGFjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRlZi5tYXhTaXplLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gdGhpcy5fZGVmLnZhbHVlVHlwZTtcbiAgICAgICAgZnVuY3Rpb24gZmluYWxpemVTZXQoZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuZGlydHkoKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRTZXQuYWRkKGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBwYXJzZWRTZXQgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFsuLi5jdHguZGF0YS52YWx1ZXMoKV0ubWFwKChpdGVtLCBpKSA9PiB2YWx1ZVR5cGUuX3BhcnNlKG5ldyBQYXJzZUlucHV0TGF6eVBhdGgoY3R4LCBpdGVtLCBjdHgucGF0aCwgaSkpKTtcbiAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChlbGVtZW50cykudGhlbigoZWxlbWVudHMpID0+IGZpbmFsaXplU2V0KGVsZW1lbnRzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxpemVTZXQoZWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1pbihtaW5TaXplLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIG1pblNpemU6IHsgdmFsdWU6IG1pblNpemUsIG1lc3NhZ2U6IGVycm9yVXRpbC50b1N0cmluZyhtZXNzYWdlKSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWF4KG1heFNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RTZXQoe1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgbWF4U2l6ZTogeyB2YWx1ZTogbWF4U2l6ZSwgbWVzc2FnZTogZXJyb3JVdGlsLnRvU3RyaW5nKG1lc3NhZ2UpIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaXplKHNpemUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluKHNpemUsIG1lc3NhZ2UpLm1heChzaXplLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgbm9uZW1wdHkobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4oMSwgbWVzc2FnZSk7XG4gICAgfVxufVxuWm9kU2V0LmNyZWF0ZSA9ICh2YWx1ZVR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kU2V0KHtcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBtaW5TaXplOiBudWxsLFxuICAgICAgICBtYXhTaXplOiBudWxsLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFNldCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RGdW5jdGlvbiBleHRlbmRzIFpvZFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZhbGlkYXRlID0gdGhpcy5pbXBsZW1lbnQ7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBab2RQYXJzZWRUeXBlLmZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWFrZUFyZ3NJc3N1ZShhcmdzLCBlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VJc3N1ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBlcnJvck1hcHM6IFtjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCwgY3R4LnNjaGVtYUVycm9yTWFwLCBnZXRFcnJvck1hcCgpLCBkZWZhdWx0RXJyb3JNYXBdLmZpbHRlcigoeCkgPT4gISF4KSxcbiAgICAgICAgICAgICAgICBpc3N1ZURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogWm9kSXNzdWVDb2RlLmludmFsaWRfYXJndW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNFcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VSZXR1cm5zSXNzdWUocmV0dXJucywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXNzdWUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHJldHVybnMsXG4gICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgZXJyb3JNYXBzOiBbY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsIGN0eC5zY2hlbWFFcnJvck1hcCwgZ2V0RXJyb3JNYXAoKSwgZGVmYXVsdEVycm9yTWFwXS5maWx0ZXIoKHgpID0+ICEheCksXG4gICAgICAgICAgICAgICAgaXNzdWVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3JldHVybl90eXBlLFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5UeXBlRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGVycm9yTWFwOiBjdHguY29tbW9uLmNvbnRleHR1YWxFcnJvck1hcCB9O1xuICAgICAgICBjb25zdCBmbiA9IGN0eC5kYXRhO1xuICAgICAgICBpZiAodGhpcy5fZGVmLnJldHVybnMgaW5zdGFuY2VvZiBab2RQcm9taXNlKSB7XG4gICAgICAgICAgICAvLyBXb3VsZCBsb3ZlIGEgd2F5IHRvIGF2b2lkIGRpc2FibGluZyB0aGlzIHJ1bGUsIGJ1dCB3ZSBuZWVkXG4gICAgICAgICAgICAvLyBhbiBhbGlhcyAodXNpbmcgYW4gYXJyb3cgZnVuY3Rpb24gd2FzIHdoYXQgY2F1c2VkIDI2NTEpLlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gT0soYXN5bmMgZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBab2RFcnJvcihbXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkQXJncyA9IGF3YWl0IG1lLl9kZWYuYXJncy5wYXJzZUFzeW5jKGFyZ3MsIHBhcmFtcykuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuYWRkSXNzdWUobWFrZUFyZ3NJc3N1ZShhcmdzLCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFJlZmxlY3QuYXBwbHkoZm4sIHRoaXMsIHBhcnNlZEFyZ3MpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJldHVybnMgPSBhd2FpdCBtZS5fZGVmLnJldHVybnMuX2RlZi50eXBlXG4gICAgICAgICAgICAgICAgICAgIC5wYXJzZUFzeW5jKHJlc3VsdCwgcGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuYWRkSXNzdWUobWFrZVJldHVybnNJc3N1ZShyZXN1bHQsIGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJldHVybnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdvdWxkIGxvdmUgYSB3YXkgdG8gYXZvaWQgZGlzYWJsaW5nIHRoaXMgcnVsZSwgYnV0IHdlIG5lZWRcbiAgICAgICAgICAgIC8vIGFuIGFsaWFzICh1c2luZyBhbiBhcnJvdyBmdW5jdGlvbiB3YXMgd2hhdCBjYXVzZWQgMjY1MSkuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICAgICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBPSyhmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFyZ3MgPSBtZS5fZGVmLmFyZ3Muc2FmZVBhcnNlKGFyZ3MsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRBcmdzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFpvZEVycm9yKFttYWtlQXJnc0lzc3VlKGFyZ3MsIHBhcnNlZEFyZ3MuZXJyb3IpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuYXBwbHkoZm4sIHRoaXMsIHBhcnNlZEFyZ3MuZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUmV0dXJucyA9IG1lLl9kZWYucmV0dXJucy5zYWZlUGFyc2UocmVzdWx0LCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkUmV0dXJucy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBab2RFcnJvcihbbWFrZVJldHVybnNJc3N1ZShyZXN1bHQsIHBhcnNlZFJldHVybnMuZXJyb3IpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRSZXR1cm5zLmRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXJhbWV0ZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmFyZ3M7XG4gICAgfVxuICAgIHJldHVyblR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYucmV0dXJucztcbiAgICB9XG4gICAgYXJncyguLi5pdGVtcykge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIGFyZ3M6IFpvZFR1cGxlLmNyZWF0ZShpdGVtcykucmVzdChab2RVbmtub3duLmNyZWF0ZSgpKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybnMocmV0dXJuVHlwZSkge1xuICAgICAgICByZXR1cm4gbmV3IFpvZEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIC4uLnRoaXMuX2RlZixcbiAgICAgICAgICAgIHJldHVybnM6IHJldHVyblR5cGUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbXBsZW1lbnQoZnVuYykge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZWRGdW5jID0gdGhpcy5wYXJzZShmdW5jKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZEZ1bmM7XG4gICAgfVxuICAgIHN0cmljdEltcGxlbWVudChmdW5jKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlZEZ1bmMgPSB0aGlzLnBhcnNlKGZ1bmMpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdGVkRnVuYztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShhcmdzLCByZXR1cm5zLCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBab2RGdW5jdGlvbih7XG4gICAgICAgICAgICBhcmdzOiAoYXJncyA/IGFyZ3MgOiBab2RUdXBsZS5jcmVhdGUoW10pLnJlc3QoWm9kVW5rbm93bi5jcmVhdGUoKSkpLFxuICAgICAgICAgICAgcmV0dXJuczogcmV0dXJucyB8fCBab2RVbmtub3duLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RGdW5jdGlvbixcbiAgICAgICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZExhenkgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBnZXQgc2NoZW1hKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmdldHRlcigpO1xuICAgIH1cbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGxhenlTY2hlbWEgPSB0aGlzLl9kZWYuZ2V0dGVyKCk7XG4gICAgICAgIHJldHVybiBsYXp5U2NoZW1hLl9wYXJzZSh7IGRhdGE6IGN0eC5kYXRhLCBwYXRoOiBjdHgucGF0aCwgcGFyZW50OiBjdHggfSk7XG4gICAgfVxufVxuWm9kTGF6eS5jcmVhdGUgPSAoZ2V0dGVyLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZExhenkoe1xuICAgICAgICBnZXR0ZXI6IGdldHRlcixcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RMYXp5LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZExpdGVyYWwgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LmRhdGEgIT09IHRoaXMuX2RlZi52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2xpdGVyYWwsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHRoaXMuX2RlZi52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi52YWx1ZTtcbiAgICB9XG59XG5ab2RMaXRlcmFsLmNyZWF0ZSA9ICh2YWx1ZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RMaXRlcmFsKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZExpdGVyYWwsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBjcmVhdGVab2RFbnVtKHZhbHVlcywgcGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBab2RFbnVtKHtcbiAgICAgICAgdmFsdWVzLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVudW0sXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn1cbmV4cG9ydCBjbGFzcyBab2RFbnVtIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQuZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLl9kZWYudmFsdWVzO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHV0aWwuam9pblZhbHVlcyhleHBlY3RlZFZhbHVlcyksXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5wYXJzZWRUeXBlLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fY2FjaGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlID0gbmV3IFNldCh0aGlzLl9kZWYudmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlLmhhcyhpbnB1dC5kYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLl9kZWYudmFsdWVzO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbiAgICBnZXQgZW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGdldCBWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IGVudW1WYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5fZGVmLnZhbHVlcykge1xuICAgICAgICAgICAgZW51bVZhbHVlc1t2YWxdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnVtVmFsdWVzO1xuICAgIH1cbiAgICBnZXQgRW51bSgpIHtcbiAgICAgICAgY29uc3QgZW51bVZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLl9kZWYudmFsdWVzKSB7XG4gICAgICAgICAgICBlbnVtVmFsdWVzW3ZhbF0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudW1WYWx1ZXM7XG4gICAgfVxuICAgIGV4dHJhY3QodmFsdWVzLCBuZXdEZWYgPSB0aGlzLl9kZWYpIHtcbiAgICAgICAgcmV0dXJuIFpvZEVudW0uY3JlYXRlKHZhbHVlcywge1xuICAgICAgICAgICAgLi4udGhpcy5fZGVmLFxuICAgICAgICAgICAgLi4ubmV3RGVmLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZXhjbHVkZSh2YWx1ZXMsIG5ld0RlZiA9IHRoaXMuX2RlZikge1xuICAgICAgICByZXR1cm4gWm9kRW51bS5jcmVhdGUodGhpcy5vcHRpb25zLmZpbHRlcigob3B0KSA9PiAhdmFsdWVzLmluY2x1ZGVzKG9wdCkpLCB7XG4gICAgICAgICAgICAuLi50aGlzLl9kZWYsXG4gICAgICAgICAgICAuLi5uZXdEZWYsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblpvZEVudW0uY3JlYXRlID0gY3JlYXRlWm9kRW51bTtcbmV4cG9ydCBjbGFzcyBab2ROYXRpdmVFbnVtIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVudW1WYWx1ZXMgPSB1dGlsLmdldFZhbGlkRW51bVZhbHVlcyh0aGlzLl9kZWYudmFsdWVzKTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0T3JSZXR1cm5DdHgoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LnBhcnNlZFR5cGUgIT09IFpvZFBhcnNlZFR5cGUuc3RyaW5nICYmIGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLm51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRWYWx1ZXMgPSB1dGlsLm9iamVjdFZhbHVlcyhuYXRpdmVFbnVtVmFsdWVzKTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkOiB1dGlsLmpvaW5WYWx1ZXMoZXhwZWN0ZWRWYWx1ZXMpLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgICAgICBjb2RlOiBab2RJc3N1ZUNvZGUuaW52YWxpZF90eXBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZSA9IG5ldyBTZXQodXRpbC5nZXRWYWxpZEVudW1WYWx1ZXModGhpcy5fZGVmLnZhbHVlcykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fY2FjaGUuaGFzKGlucHV0LmRhdGEpKSB7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZFZhbHVlcyA9IHV0aWwub2JqZWN0VmFsdWVzKG5hdGl2ZUVudW1WYWx1ZXMpO1xuICAgICAgICAgICAgYWRkSXNzdWVUb0NvbnRleHQoY3R4LCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX2VudW1fdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogZXhwZWN0ZWRWYWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPSyhpbnB1dC5kYXRhKTtcbiAgICB9XG4gICAgZ2V0IGVudW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYudmFsdWVzO1xuICAgIH1cbn1cblpvZE5hdGl2ZUVudW0uY3JlYXRlID0gKHZhbHVlcywgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2ROYXRpdmVFbnVtKHtcbiAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmF0aXZlRW51bSxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2RQcm9taXNlIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLnR5cGU7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IGN0eCB9ID0gdGhpcy5fcHJvY2Vzc0lucHV0UGFyYW1zKGlucHV0KTtcbiAgICAgICAgaWYgKGN0eC5wYXJzZWRUeXBlICE9PSBab2RQYXJzZWRUeXBlLnByb21pc2UgJiYgY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUucHJvbWlzZSxcbiAgICAgICAgICAgICAgICByZWNlaXZlZDogY3R4LnBhcnNlZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2lmaWVkID0gY3R4LnBhcnNlZFR5cGUgPT09IFpvZFBhcnNlZFR5cGUucHJvbWlzZSA/IGN0eC5kYXRhIDogUHJvbWlzZS5yZXNvbHZlKGN0eC5kYXRhKTtcbiAgICAgICAgcmV0dXJuIE9LKHByb21pc2lmaWVkLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYudHlwZS5wYXJzZUFzeW5jKGRhdGEsIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICBlcnJvck1hcDogY3R4LmNvbW1vbi5jb250ZXh0dWFsRXJyb3JNYXAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cblpvZFByb21pc2UuY3JlYXRlID0gKHNjaGVtYSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RQcm9taXNlKHtcbiAgICAgICAgdHlwZTogc2NoZW1hLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZFByb21pc2UsXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG5leHBvcnQgY2xhc3MgWm9kRWZmZWN0cyBleHRlbmRzIFpvZFR5cGUge1xuICAgIGlubmVyVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIHNvdXJjZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuc2NoZW1hLl9kZWYudHlwZU5hbWUgPT09IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RFZmZlY3RzXG4gICAgICAgICAgICA/IHRoaXMuX2RlZi5zY2hlbWEuc291cmNlVHlwZSgpXG4gICAgICAgICAgICA6IHRoaXMuX2RlZi5zY2hlbWE7XG4gICAgfVxuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBjb25zdCBlZmZlY3QgPSB0aGlzLl9kZWYuZWZmZWN0IHx8IG51bGw7XG4gICAgICAgIGNvbnN0IGNoZWNrQ3R4ID0ge1xuICAgICAgICAgICAgYWRkSXNzdWU6IChhcmcpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRJc3N1ZVRvQ29udGV4dChjdHgsIGFyZyk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZy5mYXRhbCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgcGF0aCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4LnBhdGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjaGVja0N0eC5hZGRJc3N1ZSA9IGNoZWNrQ3R4LmFkZElzc3VlLmJpbmQoY2hlY2tDdHgpO1xuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwicHJlcHJvY2Vzc1wiKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWQgPSBlZmZlY3QudHJhbnNmb3JtKGN0eC5kYXRhLCBjaGVja0N0eCk7XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocHJvY2Vzc2VkKS50aGVuKGFzeW5jIChwcm9jZXNzZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwcm9jZXNzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy52YWx1ZSA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJUlRZKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVmLnNjaGVtYS5fcGFyc2VTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvY2Vzc2VkLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJkaXJ0eVwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRElSVFkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLnZhbHVlID09PSBcImRpcnR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSBcInJlZmluZW1lbnRcIikge1xuICAgICAgICAgICAgY29uc3QgZXhlY3V0ZVJlZmluZW1lbnQgPSAoYWNjKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWZmZWN0LnJlZmluZW1lbnQoYWNjLCBjaGVja0N0eCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jb21tb24uYXN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBc3luYyByZWZpbmVtZW50IGVuY291bnRlcmVkIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZSBvcGVyYXRpb24uIFVzZSAucGFyc2VBc3luYyBpbnN0ZWFkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyLnN0YXR1cyA9PT0gXCJhYm9ydGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHZhbHVlIGlzIGlnbm9yZWRcbiAgICAgICAgICAgICAgICBleGVjdXRlUmVmaW5lbWVudChpbm5lci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbm5lci52YWx1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlQXN5bmMoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pLnRoZW4oKGlubmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbm5lci5zdGF0dXMgPT09IFwiZGlydHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhlY3V0ZVJlZmluZW1lbnQoaW5uZXIudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBzdGF0dXMudmFsdWUsIHZhbHVlOiBpbm5lci52YWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgIGlmIChjdHguY29tbW9uLmFzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLl9kZWYuc2NoZW1hLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZChiYXNlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZWZmZWN0LnRyYW5zZm9ybShiYXNlLnZhbHVlLCBjaGVja0N0eCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3luY2hyb25vdXMgdHJhbnNmb3JtIGVuY291bnRlcmVkIGR1cmluZyBzeW5jaHJvbm91cyBwYXJzZSBvcGVyYXRpb24uIFVzZSAucGFyc2VBc3luYyBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IHN0YXR1cy52YWx1ZSwgdmFsdWU6IHJlc3VsdCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5zY2hlbWEuX3BhcnNlQXN5bmMoeyBkYXRhOiBjdHguZGF0YSwgcGF0aDogY3R4LnBhdGgsIHBhcmVudDogY3R4IH0pLnRoZW4oKGJhc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKGJhc2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWZmZWN0LnRyYW5zZm9ybShiYXNlLnZhbHVlLCBjaGVja0N0eCkpLnRoZW4oKHJlc3VsdCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHV0aWwuYXNzZXJ0TmV2ZXIoZWZmZWN0KTtcbiAgICB9XG59XG5ab2RFZmZlY3RzLmNyZWF0ZSA9IChzY2hlbWEsIGVmZmVjdCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RFZmZlY3RzKHtcbiAgICAgICAgc2NoZW1hLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZEVmZmVjdHMsXG4gICAgICAgIGVmZmVjdCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcblpvZEVmZmVjdHMuY3JlYXRlV2l0aFByZXByb2Nlc3MgPSAocHJlcHJvY2Vzcywgc2NoZW1hLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZEVmZmVjdHMoe1xuICAgICAgICBzY2hlbWEsXG4gICAgICAgIGVmZmVjdDogeyB0eXBlOiBcInByZXByb2Nlc3NcIiwgdHJhbnNmb3JtOiBwcmVwcm9jZXNzIH0sXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kRWZmZWN0cyxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCB7IFpvZEVmZmVjdHMgYXMgWm9kVHJhbnNmb3JtZXIgfTtcbmV4cG9ydCBjbGFzcyBab2RPcHRpb25hbCBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLnVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIE9LKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICB9XG4gICAgdW53cmFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZTtcbiAgICB9XG59XG5ab2RPcHRpb25hbC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2RPcHRpb25hbCh7XG4gICAgICAgIGlubmVyVHlwZTogdHlwZSxcbiAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RPcHRpb25hbCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2ROdWxsYWJsZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCBwYXJzZWRUeXBlID0gdGhpcy5fZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgIGlmIChwYXJzZWRUeXBlID09PSBab2RQYXJzZWRUeXBlLm51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBPSyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2UoaW5wdXQpO1xuICAgIH1cbiAgICB1bndyYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWYuaW5uZXJUeXBlO1xuICAgIH1cbn1cblpvZE51bGxhYmxlLmNyZWF0ZSA9ICh0eXBlLCBwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE51bGxhYmxlKHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZE51bGxhYmxlLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZERlZmF1bHQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGxldCBkYXRhID0gY3R4LmRhdGE7XG4gICAgICAgIGlmIChjdHgucGFyc2VkVHlwZSA9PT0gWm9kUGFyc2VkVHlwZS51bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLl9kZWYuZGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBwYXRoOiBjdHgucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kRGVmYXVsdC5jcmVhdGUgPSAodHlwZSwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBab2REZWZhdWx0KHtcbiAgICAgICAgaW5uZXJUeXBlOiB0eXBlLFxuICAgICAgICB0eXBlTmFtZTogWm9kRmlyc3RQYXJ0eVR5cGVLaW5kLlpvZERlZmF1bHQsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdHlwZW9mIHBhcmFtcy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgPyBwYXJhbXMuZGVmYXVsdCA6ICgpID0+IHBhcmFtcy5kZWZhdWx0LFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNsYXNzIFpvZENhdGNoIGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICAvLyBuZXdDdHggaXMgdXNlZCB0byBub3QgY29sbGVjdCBpc3N1ZXMgZnJvbSBpbm5lciB0eXBlcyBpbiBjdHhcbiAgICAgICAgY29uc3QgbmV3Q3R4ID0ge1xuICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgY29tbW9uOiB7XG4gICAgICAgICAgICAgICAgLi4uY3R4LmNvbW1vbixcbiAgICAgICAgICAgICAgICBpc3N1ZXM6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZGVmLmlubmVyVHlwZS5fcGFyc2Uoe1xuICAgICAgICAgICAgZGF0YTogbmV3Q3R4LmRhdGEsXG4gICAgICAgICAgICBwYXRoOiBuZXdDdHgucGF0aCxcbiAgICAgICAgICAgIHBhcmVudDoge1xuICAgICAgICAgICAgICAgIC4uLm5ld0N0eCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNBc3luYyhyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJ2YWxpZFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0LnN0YXR1cyA9PT0gXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9kZWYuY2F0Y2hWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IGVycm9yKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvZEVycm9yKG5ld0N0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBuZXdDdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInZhbGlkXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC5zdGF0dXMgPT09IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX2RlZi5jYXRjaFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpvZEVycm9yKG5ld0N0eC5jb21tb24uaXNzdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogbmV3Q3R4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVDYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kQ2F0Y2guY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kQ2F0Y2goe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kQ2F0Y2gsXG4gICAgICAgIGNhdGNoVmFsdWU6IHR5cGVvZiBwYXJhbXMuY2F0Y2ggPT09IFwiZnVuY3Rpb25cIiA/IHBhcmFtcy5jYXRjaCA6ICgpID0+IHBhcmFtcy5jYXRjaCxcbiAgICAgICAgLi4ucHJvY2Vzc0NyZWF0ZVBhcmFtcyhwYXJhbXMpLFxuICAgIH0pO1xufTtcbmV4cG9ydCBjbGFzcyBab2ROYU4gZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVHlwZSA9IHRoaXMuX2dldFR5cGUoaW5wdXQpO1xuICAgICAgICBpZiAocGFyc2VkVHlwZSAhPT0gWm9kUGFyc2VkVHlwZS5uYW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldE9yUmV0dXJuQ3R4KGlucHV0KTtcbiAgICAgICAgICAgIGFkZElzc3VlVG9Db250ZXh0KGN0eCwge1xuICAgICAgICAgICAgICAgIGNvZGU6IFpvZElzc3VlQ29kZS5pbnZhbGlkX3R5cGUsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IFpvZFBhcnNlZFR5cGUubmFuLFxuICAgICAgICAgICAgICAgIHJlY2VpdmVkOiBjdHgucGFyc2VkVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiBcInZhbGlkXCIsIHZhbHVlOiBpbnB1dC5kYXRhIH07XG4gICAgfVxufVxuWm9kTmFOLmNyZWF0ZSA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gbmV3IFpvZE5hTih7XG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kTmFOLFxuICAgICAgICAuLi5wcm9jZXNzQ3JlYXRlUGFyYW1zKHBhcmFtcyksXG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IEJSQU5EID0gU3ltYm9sKFwiem9kX2JyYW5kXCIpO1xuZXhwb3J0IGNsYXNzIFpvZEJyYW5kZWQgZXh0ZW5kcyBab2RUeXBlIHtcbiAgICBfcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgeyBjdHggfSA9IHRoaXMuX3Byb2Nlc3NJbnB1dFBhcmFtcyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjdHguZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlLl9wYXJzZSh7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICBwYXJlbnQ6IGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi50eXBlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBab2RQaXBlbGluZSBleHRlbmRzIFpvZFR5cGUge1xuICAgIF9wYXJzZShpbnB1dCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgY3R4IH0gPSB0aGlzLl9wcm9jZXNzSW5wdXRQYXJhbXMoaW5wdXQpO1xuICAgICAgICBpZiAoY3R4LmNvbW1vbi5hc3luYykge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlQXN5bmMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5SZXN1bHQgPSBhd2FpdCB0aGlzLl9kZWYuaW4uX3BhcnNlQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjdHguZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiYWJvcnRlZFwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImRpcnR5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmRpcnR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBESVJUWShpblJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmLm91dC5fcGFyc2VBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlQXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGluUmVzdWx0ID0gdGhpcy5fZGVmLmluLl9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGN0eC5kYXRhLFxuICAgICAgICAgICAgICAgIHBhdGg6IGN0eC5wYXRoLFxuICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5SZXN1bHQuc3RhdHVzID09PSBcImFib3J0ZWRcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gSU5WQUxJRDtcbiAgICAgICAgICAgIGlmIChpblJlc3VsdC5zdGF0dXMgPT09IFwiZGlydHlcIikge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5kaXJ0eSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJkaXJ0eVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW5SZXN1bHQudmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWYub3V0Ll9wYXJzZVN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBpblJlc3VsdC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY3R4LnBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogY3R4LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IFpvZFBpcGVsaW5lKHtcbiAgICAgICAgICAgIGluOiBhLFxuICAgICAgICAgICAgb3V0OiBiLFxuICAgICAgICAgICAgdHlwZU5hbWU6IFpvZEZpcnN0UGFydHlUeXBlS2luZC5ab2RQaXBlbGluZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFpvZFJlYWRvbmx5IGV4dGVuZHMgWm9kVHlwZSB7XG4gICAgX3BhcnNlKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlZi5pbm5lclR5cGUuX3BhcnNlKGlucHV0KTtcbiAgICAgICAgY29uc3QgZnJlZXplID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgZGF0YS52YWx1ZSA9IE9iamVjdC5mcmVlemUoZGF0YS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGlzQXN5bmMocmVzdWx0KSA/IHJlc3VsdC50aGVuKChkYXRhKSA9PiBmcmVlemUoZGF0YSkpIDogZnJlZXplKHJlc3VsdCk7XG4gICAgfVxuICAgIHVud3JhcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZi5pbm5lclR5cGU7XG4gICAgfVxufVxuWm9kUmVhZG9ubHkuY3JlYXRlID0gKHR5cGUsIHBhcmFtcykgPT4ge1xuICAgIHJldHVybiBuZXcgWm9kUmVhZG9ubHkoe1xuICAgICAgICBpbm5lclR5cGU6IHR5cGUsXG4gICAgICAgIHR5cGVOYW1lOiBab2RGaXJzdFBhcnR5VHlwZUtpbmQuWm9kUmVhZG9ubHksXG4gICAgICAgIC4uLnByb2Nlc3NDcmVhdGVQYXJhbXMocGFyYW1zKSxcbiAgICB9KTtcbn07XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgei5jdXN0b20gICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5mdW5jdGlvbiBjbGVhblBhcmFtcyhwYXJhbXMsIGRhdGEpIHtcbiAgICBjb25zdCBwID0gdHlwZW9mIHBhcmFtcyA9PT0gXCJmdW5jdGlvblwiID8gcGFyYW1zKGRhdGEpIDogdHlwZW9mIHBhcmFtcyA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZTogcGFyYW1zIH0gOiBwYXJhbXM7XG4gICAgY29uc3QgcDIgPSB0eXBlb2YgcCA9PT0gXCJzdHJpbmdcIiA/IHsgbWVzc2FnZTogcCB9IDogcDtcbiAgICByZXR1cm4gcDI7XG59XG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tKGNoZWNrLCBfcGFyYW1zID0ge30sIFxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICpcbiAqIFBhc3MgYGZhdGFsYCBpbnRvIHRoZSBwYXJhbXMgb2JqZWN0IGluc3RlYWQ6XG4gKlxuICogYGBgdHNcbiAqIHouc3RyaW5nKCkuY3VzdG9tKCh2YWwpID0+IHZhbC5sZW5ndGggPiA1LCB7IGZhdGFsOiBmYWxzZSB9KVxuICogYGBgXG4gKlxuICovXG5mYXRhbCkge1xuICAgIGlmIChjaGVjaylcbiAgICAgICAgcmV0dXJuIFpvZEFueS5jcmVhdGUoKS5zdXBlclJlZmluZSgoZGF0YSwgY3R4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByID0gY2hlY2soZGF0YSk7XG4gICAgICAgICAgICBpZiAociBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gci50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gY2xlYW5QYXJhbXMoX3BhcmFtcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfZmF0YWwgPSBwYXJhbXMuZmF0YWwgPz8gZmF0YWwgPz8gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5hZGRJc3N1ZSh7IGNvZGU6IFwiY3VzdG9tXCIsIC4uLnBhcmFtcywgZmF0YWw6IF9mYXRhbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gY2xlYW5QYXJhbXMoX3BhcmFtcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgX2ZhdGFsID0gcGFyYW1zLmZhdGFsID8/IGZhdGFsID8/IHRydWU7XG4gICAgICAgICAgICAgICAgY3R4LmFkZElzc3VlKHsgY29kZTogXCJjdXN0b21cIiwgLi4ucGFyYW1zLCBmYXRhbDogX2ZhdGFsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gWm9kQW55LmNyZWF0ZSgpO1xufVxuZXhwb3J0IHsgWm9kVHlwZSBhcyBTY2hlbWEsIFpvZFR5cGUgYXMgWm9kU2NoZW1hIH07XG5leHBvcnQgY29uc3QgbGF0ZSA9IHtcbiAgICBvYmplY3Q6IFpvZE9iamVjdC5sYXp5Y3JlYXRlLFxufTtcbmV4cG9ydCB2YXIgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kO1xuKGZ1bmN0aW9uIChab2RGaXJzdFBhcnR5VHlwZUtpbmQpIHtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RTdHJpbmdcIl0gPSBcIlpvZFN0cmluZ1wiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bWJlclwiXSA9IFwiWm9kTnVtYmVyXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTmFOXCJdID0gXCJab2ROYU5cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RCaWdJbnRcIl0gPSBcIlpvZEJpZ0ludFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJvb2xlYW5cIl0gPSBcIlpvZEJvb2xlYW5cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REYXRlXCJdID0gXCJab2REYXRlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kU3ltYm9sXCJdID0gXCJab2RTeW1ib2xcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmRlZmluZWRcIl0gPSBcIlpvZFVuZGVmaW5lZFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE51bGxcIl0gPSBcIlpvZE51bGxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RBbnlcIl0gPSBcIlpvZEFueVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFVua25vd25cIl0gPSBcIlpvZFVua25vd25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROZXZlclwiXSA9IFwiWm9kTmV2ZXJcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RWb2lkXCJdID0gXCJab2RWb2lkXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQXJyYXlcIl0gPSBcIlpvZEFycmF5XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kT2JqZWN0XCJdID0gXCJab2RPYmplY3RcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RVbmlvblwiXSA9IFwiWm9kVW5pb25cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REaXNjcmltaW5hdGVkVW5pb25cIl0gPSBcIlpvZERpc2NyaW1pbmF0ZWRVbmlvblwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEludGVyc2VjdGlvblwiXSA9IFwiWm9kSW50ZXJzZWN0aW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kVHVwbGVcIl0gPSBcIlpvZFR1cGxlXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUmVjb3JkXCJdID0gXCJab2RSZWNvcmRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RNYXBcIl0gPSBcIlpvZE1hcFwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZFNldFwiXSA9IFwiWm9kU2V0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRnVuY3Rpb25cIl0gPSBcIlpvZEZ1bmN0aW9uXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kTGF6eVwiXSA9IFwiWm9kTGF6eVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZExpdGVyYWxcIl0gPSBcIlpvZExpdGVyYWxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RFbnVtXCJdID0gXCJab2RFbnVtXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kRWZmZWN0c1wiXSA9IFwiWm9kRWZmZWN0c1wiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZE5hdGl2ZUVudW1cIl0gPSBcIlpvZE5hdGl2ZUVudW1cIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RPcHRpb25hbFwiXSA9IFwiWm9kT3B0aW9uYWxcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2ROdWxsYWJsZVwiXSA9IFwiWm9kTnVsbGFibGVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2REZWZhdWx0XCJdID0gXCJab2REZWZhdWx0XCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kQ2F0Y2hcIl0gPSBcIlpvZENhdGNoXCI7XG4gICAgWm9kRmlyc3RQYXJ0eVR5cGVLaW5kW1wiWm9kUHJvbWlzZVwiXSA9IFwiWm9kUHJvbWlzZVwiO1xuICAgIFpvZEZpcnN0UGFydHlUeXBlS2luZFtcIlpvZEJyYW5kZWRcIl0gPSBcIlpvZEJyYW5kZWRcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RQaXBlbGluZVwiXSA9IFwiWm9kUGlwZWxpbmVcIjtcbiAgICBab2RGaXJzdFBhcnR5VHlwZUtpbmRbXCJab2RSZWFkb25seVwiXSA9IFwiWm9kUmVhZG9ubHlcIjtcbn0pKFpvZEZpcnN0UGFydHlUeXBlS2luZCB8fCAoWm9kRmlyc3RQYXJ0eVR5cGVLaW5kID0ge30pKTtcbi8vIHJlcXVpcmVzIFRTIDQuNCtcbmNsYXNzIENsYXNzIHtcbiAgICBjb25zdHJ1Y3RvciguLi5fKSB7IH1cbn1cbmNvbnN0IGluc3RhbmNlT2ZUeXBlID0gKFxuLy8gY29uc3QgaW5zdGFuY2VPZlR5cGUgPSA8VCBleHRlbmRzIG5ldyAoLi4uYXJnczogYW55W10pID0+IGFueT4oXG5jbHMsIHBhcmFtcyA9IHtcbiAgICBtZXNzYWdlOiBgSW5wdXQgbm90IGluc3RhbmNlIG9mICR7Y2xzLm5hbWV9YCxcbn0pID0+IGN1c3RvbSgoZGF0YSkgPT4gZGF0YSBpbnN0YW5jZW9mIGNscywgcGFyYW1zKTtcbmNvbnN0IHN0cmluZ1R5cGUgPSBab2RTdHJpbmcuY3JlYXRlO1xuY29uc3QgbnVtYmVyVHlwZSA9IFpvZE51bWJlci5jcmVhdGU7XG5jb25zdCBuYW5UeXBlID0gWm9kTmFOLmNyZWF0ZTtcbmNvbnN0IGJpZ0ludFR5cGUgPSBab2RCaWdJbnQuY3JlYXRlO1xuY29uc3QgYm9vbGVhblR5cGUgPSBab2RCb29sZWFuLmNyZWF0ZTtcbmNvbnN0IGRhdGVUeXBlID0gWm9kRGF0ZS5jcmVhdGU7XG5jb25zdCBzeW1ib2xUeXBlID0gWm9kU3ltYm9sLmNyZWF0ZTtcbmNvbnN0IHVuZGVmaW5lZFR5cGUgPSBab2RVbmRlZmluZWQuY3JlYXRlO1xuY29uc3QgbnVsbFR5cGUgPSBab2ROdWxsLmNyZWF0ZTtcbmNvbnN0IGFueVR5cGUgPSBab2RBbnkuY3JlYXRlO1xuY29uc3QgdW5rbm93blR5cGUgPSBab2RVbmtub3duLmNyZWF0ZTtcbmNvbnN0IG5ldmVyVHlwZSA9IFpvZE5ldmVyLmNyZWF0ZTtcbmNvbnN0IHZvaWRUeXBlID0gWm9kVm9pZC5jcmVhdGU7XG5jb25zdCBhcnJheVR5cGUgPSBab2RBcnJheS5jcmVhdGU7XG5jb25zdCBvYmplY3RUeXBlID0gWm9kT2JqZWN0LmNyZWF0ZTtcbmNvbnN0IHN0cmljdE9iamVjdFR5cGUgPSBab2RPYmplY3Quc3RyaWN0Q3JlYXRlO1xuY29uc3QgdW5pb25UeXBlID0gWm9kVW5pb24uY3JlYXRlO1xuY29uc3QgZGlzY3JpbWluYXRlZFVuaW9uVHlwZSA9IFpvZERpc2NyaW1pbmF0ZWRVbmlvbi5jcmVhdGU7XG5jb25zdCBpbnRlcnNlY3Rpb25UeXBlID0gWm9kSW50ZXJzZWN0aW9uLmNyZWF0ZTtcbmNvbnN0IHR1cGxlVHlwZSA9IFpvZFR1cGxlLmNyZWF0ZTtcbmNvbnN0IHJlY29yZFR5cGUgPSBab2RSZWNvcmQuY3JlYXRlO1xuY29uc3QgbWFwVHlwZSA9IFpvZE1hcC5jcmVhdGU7XG5jb25zdCBzZXRUeXBlID0gWm9kU2V0LmNyZWF0ZTtcbmNvbnN0IGZ1bmN0aW9uVHlwZSA9IFpvZEZ1bmN0aW9uLmNyZWF0ZTtcbmNvbnN0IGxhenlUeXBlID0gWm9kTGF6eS5jcmVhdGU7XG5jb25zdCBsaXRlcmFsVHlwZSA9IFpvZExpdGVyYWwuY3JlYXRlO1xuY29uc3QgZW51bVR5cGUgPSBab2RFbnVtLmNyZWF0ZTtcbmNvbnN0IG5hdGl2ZUVudW1UeXBlID0gWm9kTmF0aXZlRW51bS5jcmVhdGU7XG5jb25zdCBwcm9taXNlVHlwZSA9IFpvZFByb21pc2UuY3JlYXRlO1xuY29uc3QgZWZmZWN0c1R5cGUgPSBab2RFZmZlY3RzLmNyZWF0ZTtcbmNvbnN0IG9wdGlvbmFsVHlwZSA9IFpvZE9wdGlvbmFsLmNyZWF0ZTtcbmNvbnN0IG51bGxhYmxlVHlwZSA9IFpvZE51bGxhYmxlLmNyZWF0ZTtcbmNvbnN0IHByZXByb2Nlc3NUeXBlID0gWm9kRWZmZWN0cy5jcmVhdGVXaXRoUHJlcHJvY2VzcztcbmNvbnN0IHBpcGVsaW5lVHlwZSA9IFpvZFBpcGVsaW5lLmNyZWF0ZTtcbmNvbnN0IG9zdHJpbmcgPSAoKSA9PiBzdHJpbmdUeXBlKCkub3B0aW9uYWwoKTtcbmNvbnN0IG9udW1iZXIgPSAoKSA9PiBudW1iZXJUeXBlKCkub3B0aW9uYWwoKTtcbmNvbnN0IG9ib29sZWFuID0gKCkgPT4gYm9vbGVhblR5cGUoKS5vcHRpb25hbCgpO1xuZXhwb3J0IGNvbnN0IGNvZXJjZSA9IHtcbiAgICBzdHJpbmc6ICgoYXJnKSA9PiBab2RTdHJpbmcuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxuICAgIG51bWJlcjogKChhcmcpID0+IFpvZE51bWJlci5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgYm9vbGVhbjogKChhcmcpID0+IFpvZEJvb2xlYW4uY3JlYXRlKHtcbiAgICAgICAgLi4uYXJnLFxuICAgICAgICBjb2VyY2U6IHRydWUsXG4gICAgfSkpLFxuICAgIGJpZ2ludDogKChhcmcpID0+IFpvZEJpZ0ludC5jcmVhdGUoeyAuLi5hcmcsIGNvZXJjZTogdHJ1ZSB9KSksXG4gICAgZGF0ZTogKChhcmcpID0+IFpvZERhdGUuY3JlYXRlKHsgLi4uYXJnLCBjb2VyY2U6IHRydWUgfSkpLFxufTtcbmV4cG9ydCB7IGFueVR5cGUgYXMgYW55LCBhcnJheVR5cGUgYXMgYXJyYXksIGJpZ0ludFR5cGUgYXMgYmlnaW50LCBib29sZWFuVHlwZSBhcyBib29sZWFuLCBkYXRlVHlwZSBhcyBkYXRlLCBkaXNjcmltaW5hdGVkVW5pb25UeXBlIGFzIGRpc2NyaW1pbmF0ZWRVbmlvbiwgZWZmZWN0c1R5cGUgYXMgZWZmZWN0LCBlbnVtVHlwZSBhcyBlbnVtLCBmdW5jdGlvblR5cGUgYXMgZnVuY3Rpb24sIGluc3RhbmNlT2ZUeXBlIGFzIGluc3RhbmNlb2YsIGludGVyc2VjdGlvblR5cGUgYXMgaW50ZXJzZWN0aW9uLCBsYXp5VHlwZSBhcyBsYXp5LCBsaXRlcmFsVHlwZSBhcyBsaXRlcmFsLCBtYXBUeXBlIGFzIG1hcCwgbmFuVHlwZSBhcyBuYW4sIG5hdGl2ZUVudW1UeXBlIGFzIG5hdGl2ZUVudW0sIG5ldmVyVHlwZSBhcyBuZXZlciwgbnVsbFR5cGUgYXMgbnVsbCwgbnVsbGFibGVUeXBlIGFzIG51bGxhYmxlLCBudW1iZXJUeXBlIGFzIG51bWJlciwgb2JqZWN0VHlwZSBhcyBvYmplY3QsIG9ib29sZWFuLCBvbnVtYmVyLCBvcHRpb25hbFR5cGUgYXMgb3B0aW9uYWwsIG9zdHJpbmcsIHBpcGVsaW5lVHlwZSBhcyBwaXBlbGluZSwgcHJlcHJvY2Vzc1R5cGUgYXMgcHJlcHJvY2VzcywgcHJvbWlzZVR5cGUgYXMgcHJvbWlzZSwgcmVjb3JkVHlwZSBhcyByZWNvcmQsIHNldFR5cGUgYXMgc2V0LCBzdHJpY3RPYmplY3RUeXBlIGFzIHN0cmljdE9iamVjdCwgc3RyaW5nVHlwZSBhcyBzdHJpbmcsIHN5bWJvbFR5cGUgYXMgc3ltYm9sLCBlZmZlY3RzVHlwZSBhcyB0cmFuc2Zvcm1lciwgdHVwbGVUeXBlIGFzIHR1cGxlLCB1bmRlZmluZWRUeXBlIGFzIHVuZGVmaW5lZCwgdW5pb25UeXBlIGFzIHVuaW9uLCB1bmtub3duVHlwZSBhcyB1bmtub3duLCB2b2lkVHlwZSBhcyB2b2lkLCB9O1xuZXhwb3J0IGNvbnN0IE5FVkVSID0gSU5WQUxJRDtcbiIsImV4cG9ydCB2YXIgZXJyb3JVdGlsO1xuKGZ1bmN0aW9uIChlcnJvclV0aWwpIHtcbiAgICBlcnJvclV0aWwuZXJyVG9PYmogPSAobWVzc2FnZSkgPT4gdHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgPyB7IG1lc3NhZ2UgfSA6IG1lc3NhZ2UgfHwge307XG4gICAgLy8gYmlvbWUtaWdub3JlIGxpbnQ6XG4gICAgZXJyb3JVdGlsLnRvU3RyaW5nID0gKG1lc3NhZ2UpID0+IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8gbWVzc2FnZSA6IG1lc3NhZ2U/Lm1lc3NhZ2U7XG59KShlcnJvclV0aWwgfHwgKGVycm9yVXRpbCA9IHt9KSk7XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoibGVldGNvZGUuMTlhYmI0MzkuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);