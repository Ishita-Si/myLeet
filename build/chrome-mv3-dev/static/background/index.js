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
})({"7bPqr":[function(require,module,exports) {
var u = globalThis.process?.argv || [];
var h = ()=>globalThis.process?.env || {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var b = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "D:\\myLeet\\.plasmo\\static\\background\\index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
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
function H(e) {
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
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function L(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function T(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", L), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", L), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    b();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
T(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _index = require("../../../src/background/index");

},{"../../../src/background/index":"kB65o"}],"kB65o":[function(require,module,exports) {
var _constants = require("~constants");
var _client = require("~services/github/client");
var _uploader = require("~services/github/uploader");
var _errors = require("~utils/errors");
var _retry = require("~utils/retry");
var _storage = require("~utils/storage");
const inflight = new Set();
const uploadNow = async (payload)=>{
    const dedupeKey = `${payload.metadata.submissionId}:${payload.metadata.language}`;
    if (inflight.has(dedupeKey)) throw new Error("Upload already in progress");
    inflight.add(dedupeKey);
    try {
        const settings = await (0, _storage.getSettings)();
        const filePath = await (0, _retry.withRetry)(()=>(0, _uploader.uploadSubmission)(settings.github, payload.metadata, payload.complexity), settings.maxUploadRetries);
        await (0, _storage.addUploadRecord)({
            id: crypto.randomUUID(),
            title: payload.metadata.title,
            filePath,
            uploadedAtIso: new Date().toISOString(),
            success: true,
            message: "Uploaded successfully"
        });
        await (0, _storage.setPendingSubmission)(null);
        return {
            ok: true,
            filePath
        };
    } catch (error) {
        const appError = (0, _errors.toAppError)(error);
        await (0, _storage.addUploadRecord)({
            id: crypto.randomUUID(),
            title: payload.metadata.title,
            filePath: "",
            uploadedAtIso: new Date().toISOString(),
            success: false,
            message: appError.message
        });
        return {
            ok: false,
            error: appError.message,
            code: appError.code
        };
    } finally{
        inflight.delete(dedupeKey);
    }
};
const validateGithub = async ()=>{
    try {
        const settings = await (0, _storage.getSettings)();
        const client = new (0, _client.GithubClient)(settings.github);
        await client.validateTokenAndRepo();
        return {
            ok: true
        };
    } catch (error) {
        const appError = (0, _errors.toAppError)(error);
        return {
            ok: false,
            error: appError.message,
            code: appError.code
        };
    }
};
chrome.runtime.onMessage.addListener((message, _sender, sendResponse)=>{
    (async ()=>{
        if (message.type === (0, _constants.MESSAGE_TYPES).PENDING_SUBMISSION) {
            sendResponse({
                ok: true
            });
            return;
        }
        if (message.type === (0, _constants.MESSAGE_TYPES).REQUEST_UPLOAD) {
            sendResponse(await uploadNow(message.payload));
            return;
        }
        if (message.type === (0, _constants.MESSAGE_TYPES).VALIDATE_GITHUB) {
            sendResponse(await validateGithub());
            return;
        }
        if (message.type === (0, _constants.MESSAGE_TYPES).GET_PENDING_SUBMISSION) sendResponse({
            ok: true,
            pending: await (0, _storage.getPendingSubmission)()
        });
    })();
    return true;
});

},{"~constants":"8TxHD","~services/github/client":"d6qdR","~services/github/uploader":"12YVG","~utils/errors":"125K8","~utils/retry":"3SZle","~utils/storage":"c45lC"}],"8TxHD":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iIXqM":[function(require,module,exports) {
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

},{}],"d6qdR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GithubClient", ()=>GithubClient);
var _constants = require("~constants");
var _errors = require("~utils/errors");
class GithubClient {
    config;
    constructor(config){
        this.config = config;
    }
    get headers() {
        return {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${this.config.token}`,
            "X-GitHub-Api-Version": "2022-11-28",
            "Content-Type": "application/json"
        };
    }
    async request(path, init) {
        const response = await fetch(`${(0, _constants.API_ENDPOINTS).GITHUB_API}${path}`, {
            ...init,
            headers: this.headers
        });
        if (response.status === 401) throw new (0, _errors.AppError)("Invalid GitHub token", "INVALID_TOKEN");
        if (response.status === 404) throw new (0, _errors.AppError)("Repository or path not found", "REPO_NOT_FOUND");
        if (response.status === 403) throw new (0, _errors.AppError)("GitHub API rate limited", "RATE_LIMIT", true);
        if (response.status === 422) throw new (0, _errors.AppError)("GitHub request validation failed", "VALIDATION");
        if (!response.ok) throw new (0, _errors.AppError)(`GitHub request failed (${response.status})`, "NETWORK", true);
        return response;
    }
    async validateTokenAndRepo() {
        await this.request("/user");
        await this.request(`/repos/${this.config.owner}/${this.config.repo}`);
    }
    async getDirectory(path) {
        try {
            const res = await this.request(`/repos/${this.config.owner}/${this.config.repo}/contents/${path}?ref=${this.config.branch}`);
            const data = await res.json();
            return Array.isArray(data) ? data : [];
        } catch  {
            return [];
        }
    }
    async putFile(path, content, message) {
        const body = JSON.stringify({
            message,
            content: btoa(unescape(encodeURIComponent(content))),
            branch: this.config.branch
        });
        await this.request(`/repos/${this.config.owner}/${this.config.repo}/contents/${path}`, {
            method: "PUT",
            body
        });
    }
}

},{"~constants":"8TxHD","~utils/errors":"125K8","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"125K8":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"12YVG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildCommitMessage", ()=>buildCommitMessage);
parcelHelpers.export(exports, "buildFileBody", ()=>buildFileBody);
parcelHelpers.export(exports, "uploadSubmission", ()=>uploadSubmission);
var _sanitize = require("~utils/sanitize");
var _client = require("./client");
const extensionFromLanguage = (language)=>{
    const map = {
        "C++": "cpp",
        Python3: "py",
        Java: "java",
        JavaScript: "js",
        TypeScript: "ts"
    };
    return map[language] ?? "txt";
};
const buildHeaderLines = (metadata, complexity)=>[
        `Question: ${metadata.title}`,
        `Difficulty: ${metadata.difficulty}`,
        "",
        "Topics:",
        ...metadata.topicTags.map((tag)=>`- ${tag}`),
        "",
        `Language: ${metadata.language}`,
        "",
        `Time Complexity: ${complexity.timeComplexity}`,
        `Space Complexity: ${complexity.spaceComplexity}`,
        "",
        `Runtime: ${metadata.runtime}`,
        `Memory: ${metadata.memory}`,
        "",
        "Link:",
        metadata.url
    ];
const buildCommentHeader = (ext, lines)=>{
    if (ext === "py" || ext === "rb") return lines.map((line)=>line ? `# ${line}` : "#").join("\n");
    return `/*\n${lines.join("\n")}\n*/`;
};
const buildCommitMessage = (metadata, complexity)=>`Solved: ${metadata.title}\n\nLanguage: ${metadata.language}\nRuntime: ${metadata.runtime}\nMemory: ${metadata.memory}\nTC: ${complexity.timeComplexity}\nSC: ${complexity.spaceComplexity}`;
const buildFileBody = (metadata, complexity)=>{
    const ext = extensionFromLanguage(metadata.language);
    const header = buildCommentHeader(ext, buildHeaderLines(metadata, complexity));
    return `${header}\n\n${metadata.code}\n`;
};
const nextFileName = (existingNames, baseName, ext)=>{
    let suffix = 1;
    let candidate = `${baseName}.${ext}`;
    while(existingNames.includes(candidate)){
        suffix += 1;
        candidate = `${baseName}${suffix}.${ext}`;
    }
    return candidate;
};
const uploadSubmission = async (config, metadata, complexity)=>{
    const client = new (0, _client.GithubClient)(config);
    await client.validateTokenAndRepo();
    const folder = (0, _sanitize.toTitleCase)(metadata.topicTags[0] ?? "Uncategorized");
    const directory = `${config.basePath}/${(0, _sanitize.sanitizeFilename)(folder)}`;
    const ext = extensionFromLanguage(metadata.language);
    const baseName = (0, _sanitize.sanitizeFilename)(metadata.title);
    const existing = await client.getDirectory(directory);
    const fileName = nextFileName(existing.filter((item)=>item.type === "file").map((item)=>item.name), baseName, ext);
    const filePath = `${directory}/${fileName}`;
    await client.putFile(filePath, buildFileBody(metadata, complexity), buildCommitMessage(metadata, complexity));
    return filePath;
};

},{"~utils/sanitize":"gOX6j","./client":"d6qdR","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"gOX6j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sanitizeFilename", ()=>sanitizeFilename);
parcelHelpers.export(exports, "toTitleCase", ()=>toTitleCase);
const sanitizeFilename = (value)=>value.replace(/[<>:"/\\|?*\x00-\x1F]/g, "").replace(/\s+/g, " ").trim();
const toTitleCase = (value)=>value.split(/[-_\s]+/).map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"3SZle":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withRetry", ()=>withRetry);
const withRetry = async (fn, retries)=>{
    let attempt = 0;
    let lastError;
    while(attempt <= retries)try {
        return await fn();
    } catch (error) {
        lastError = error;
        attempt += 1;
        if (attempt <= retries) await new Promise((resolve)=>setTimeout(resolve, 500 * attempt));
    }
    throw lastError;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"c45lC":[function(require,module,exports) {
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

},{"~constants":"8TxHD","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}]},["7bPqr","8oeFb"], "8oeFb", "parcelRequireb89c")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxlQUFlLEVBQUU7WUFBQztlQUFXO1NBQVMsQ0FBQyxNQUFNLEdBQUc7SUFBSTtBQUNyRyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtY2E0OGEzNGQ4YzBiYTBkZi5qcyIsIi5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHMiLCJzcmMvYmFja2dyb3VuZC9pbmRleC50cyIsInNyYy9jb25zdGFudHMvaW5kZXgudHMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy9zZXJ2aWNlcy9naXRodWIvY2xpZW50LnRzIiwic3JjL3V0aWxzL2Vycm9ycy50cyIsInNyYy9zZXJ2aWNlcy9naXRodWIvdXBsb2FkZXIudHMiLCJzcmMvdXRpbHMvc2FuaXRpemUudHMiLCJzcmMvdXRpbHMvcmV0cnkudHMiLCJzcmMvdXRpbHMvc3RvcmFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBoPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEI9bmV3IFNldCh1KSxfPWU9PkIuaGFzKGUpLEc9dS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBVPV8oXCItLWRyeS1ydW5cIiksZz0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8aCgpLlZFUkJPU0U9PT1cInRydWVcIixOPWcoKTt2YXIgbT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeT0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT5tKFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksZj0oLi4uZSk9Pm0oXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxNPTAsaT0oLi4uZSk9PmcoKSYmbShgXFx1ezFGN0UxfSAke00rK31gLC4uLmUpO3ZhciBiPSgpPT57bGV0IGU9Z2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lfHxnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZSx0PSgpPT5zZXRJbnRlcnZhbChlLmdldFBsYXRmb3JtSW5mbywyNGUzKTtlLm9uU3RhcnR1cC5hZGRMaXN0ZW5lcih0KSx0KCl9O3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6dHJ1ZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wiYmFja2dyb3VuZC1zZXJ2aWNlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiRDpcXFxcbXlMZWV0XFxcXC5wbGFzbW9cXFxcc3RhdGljXFxcXGJhY2tncm91bmRcXFxcaW5kZXgudHNcIixcImJ1bmRsZUlkXCI6XCJjMzM4OTA4ZTcwNGM5MWYxXCIsXCJlbnZIYXNoXCI6XCJkOTlhNWZmYTU3YWNkNjM4XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBIKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9SDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGM9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBSKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIHgoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBkKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUD1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIixTPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7dmFyIE89YCR7bi5zZWN1cmU/XCJodHRwc1wiOlwiaHR0cFwifTovLyR7UigpfToke2QoKX0vYDthc3luYyBmdW5jdGlvbiBrKGU9MTQ3MCl7Zm9yKDs7KXRyeXthd2FpdCBmZXRjaChPKTticmVha31jYXRjaHthd2FpdCBuZXcgUHJvbWlzZShvPT5zZXRUaW1lb3V0KG8sZSkpfX1pZihjLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uPT09Myl7bGV0IGU9Yy5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIpO2dsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsZnVuY3Rpb24odCl7bGV0IG89dC5yZXF1ZXN0LnVybDtpZihvLnN0YXJ0c1dpdGgoZSkpe2xldCBzPW5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KG8uc2xpY2UoZS5sZW5ndGgpKSk7cy5ob3N0bmFtZT09PW4uaG9zdCYmcy5wb3J0PT09YCR7bi5wb3J0fWA/KHMuc2VhcmNoUGFyYW1zLnNldChcInRcIixEYXRlLm5vdygpLnRvU3RyaW5nKCkpLHQucmVzcG9uZFdpdGgoZmV0Y2gocykudGhlbihyPT5uZXcgUmVzcG9uc2Uoci5ib2R5LHtoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOnIuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/P1widGV4dC9qYXZhc2NyaXB0XCJ9fSkpKSk6dC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJQbGFzbW8gSE1SXCIse3N0YXR1czoyMDAsc3RhdHVzVGV4dDpcIlRlc3RpbmdcIn0pKX19KX1mdW5jdGlvbiBFKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gQyhlPWQoKSl7bGV0IHQ9eCgpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEwoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFQoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoTnVtYmVyKGQoKSkrMSkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2F3YWl0IGUocyl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEwpLHR9ZnVuY3Rpb24gQShlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGw9ci5jb2RlZnJhbWV8fHIuc3RhY2s7ZihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtsK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTCksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntmKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgdz1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gcChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGM/LnRhYnMucXVlcnkoe2FjdGl2ZTohMH0pO2ZvcihsZXQgbyBvZiBhLnNjcmlwdFBvcnRzKXtsZXQgcz10LnNvbWUocj0+ci5pZD09PW8uc2VuZGVyLnRhYj8uaWQpO28ucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2FjdGl2ZV90YWJfXzpzfSl9Yy5ydW50aW1lLnJlbG9hZCgpfX1pZighd3x8IXcuaXNQYXJjZWxSZXF1aXJlKXtiKCk7bGV0IGU9QShhc3luYyB0PT57aShcIkJHU1cgUnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYS5iZ0NoYW5nZWR8fD10LmZpbHRlcihzPT5zLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUocz0+RShtb2R1bGUuYnVuZGxlLHMuaWQpKTtsZXQgbz10LmZpbmQocz0+cy50eXBlPT09XCJqc29uXCIpO2lmKG8pe2xldCBzPW5ldyBTZXQodC5tYXAobD0+bC5pZCkpLHI9T2JqZWN0LnZhbHVlcyhvLmRlcHNCeUJ1bmRsZSkubWFwKGw9Pk9iamVjdC52YWx1ZXMobCkpLmZsYXQoKTthLmJnQ2hhbmdlZHx8PXIuZXZlcnkobD0+cy5oYXMobCkpfXAoKX0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2xldCB0PXNldEludGVydmFsKCgpPT5lLnNlbmQoXCJwaW5nXCIpLDI0ZTMpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PmNsZWFySW50ZXJ2YWwodCkpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixhc3luYygpPT57YXdhaXQgaygpLHAoITApfSl9VChhc3luYyBlPT57c3dpdGNoKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGUudHlwZSl7Y2FzZVwiYnVpbGRfcmVhZHlcIjp7YS5idWlsZFJlYWR5fHw9ITAscCgpO2JyZWFrfWNhc2VcImNzX2NoYW5nZWRcIjp7YS5jc0NoYW5nZWR8fD0hMCxwKCk7YnJlYWt9fX0pO2MucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoUCksbz1lLm5hbWUuc3RhcnRzV2l0aChTKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCkscCgpfSl9fSk7Yy5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIikscCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vc3JjL2JhY2tncm91bmQvaW5kZXhcIiIsImltcG9ydCB7IE1FU1NBR0VfVFlQRVMgfSBmcm9tIFwifmNvbnN0YW50c1wiXG5pbXBvcnQgeyBHaXRodWJDbGllbnQgfSBmcm9tIFwifnNlcnZpY2VzL2dpdGh1Yi9jbGllbnRcIlxuaW1wb3J0IHsgdXBsb2FkU3VibWlzc2lvbiB9IGZyb20gXCJ+c2VydmljZXMvZ2l0aHViL3VwbG9hZGVyXCJcbmltcG9ydCB7IHRvQXBwRXJyb3IgfSBmcm9tIFwifnV0aWxzL2Vycm9yc1wiXG5pbXBvcnQgeyB3aXRoUmV0cnkgfSBmcm9tIFwifnV0aWxzL3JldHJ5XCJcbmltcG9ydCB7IGFkZFVwbG9hZFJlY29yZCwgZ2V0UGVuZGluZ1N1Ym1pc3Npb24sIGdldFNldHRpbmdzLCBzZXRQZW5kaW5nU3VibWlzc2lvbiB9IGZyb20gXCJ+dXRpbHMvc3RvcmFnZVwiXG5pbXBvcnQgdHlwZSB7IENvbXBsZXhpdHlJbnB1dCwgVXBsb2FkUmVxdWVzdCB9IGZyb20gXCJ+dHlwZXNcIlxuXG5jb25zdCBpbmZsaWdodCA9IG5ldyBTZXQ8c3RyaW5nPigpXG5cbmNvbnN0IHVwbG9hZE5vdyA9IGFzeW5jIChwYXlsb2FkOiBVcGxvYWRSZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IGRlZHVwZUtleSA9IGAke3BheWxvYWQubWV0YWRhdGEuc3VibWlzc2lvbklkfToke3BheWxvYWQubWV0YWRhdGEubGFuZ3VhZ2V9YFxuICBpZiAoaW5mbGlnaHQuaGFzKGRlZHVwZUtleSkpIHRocm93IG5ldyBFcnJvcihcIlVwbG9hZCBhbHJlYWR5IGluIHByb2dyZXNzXCIpXG4gIGluZmxpZ2h0LmFkZChkZWR1cGVLZXkpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldFNldHRpbmdzKClcbiAgICBjb25zdCBmaWxlUGF0aCA9IGF3YWl0IHdpdGhSZXRyeShcbiAgICAgICgpID0+IHVwbG9hZFN1Ym1pc3Npb24oc2V0dGluZ3MuZ2l0aHViLCBwYXlsb2FkLm1ldGFkYXRhLCBwYXlsb2FkLmNvbXBsZXhpdHkpLFxuICAgICAgc2V0dGluZ3MubWF4VXBsb2FkUmV0cmllc1xuICAgIClcblxuICAgIGF3YWl0IGFkZFVwbG9hZFJlY29yZCh7XG4gICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcbiAgICAgIHRpdGxlOiBwYXlsb2FkLm1ldGFkYXRhLnRpdGxlLFxuICAgICAgZmlsZVBhdGgsXG4gICAgICB1cGxvYWRlZEF0SXNvOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJVcGxvYWRlZCBzdWNjZXNzZnVsbHlcIlxuICAgIH0pXG4gICAgYXdhaXQgc2V0UGVuZGluZ1N1Ym1pc3Npb24obnVsbClcbiAgICByZXR1cm4geyBvazogdHJ1ZSwgZmlsZVBhdGggfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGFwcEVycm9yID0gdG9BcHBFcnJvcihlcnJvcilcbiAgICBhd2FpdCBhZGRVcGxvYWRSZWNvcmQoe1xuICAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXG4gICAgICB0aXRsZTogcGF5bG9hZC5tZXRhZGF0YS50aXRsZSxcbiAgICAgIGZpbGVQYXRoOiBcIlwiLFxuICAgICAgdXBsb2FkZWRBdElzbzogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBhcHBFcnJvci5tZXNzYWdlXG4gICAgfSlcbiAgICByZXR1cm4geyBvazogZmFsc2UsIGVycm9yOiBhcHBFcnJvci5tZXNzYWdlLCBjb2RlOiBhcHBFcnJvci5jb2RlIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpbmZsaWdodC5kZWxldGUoZGVkdXBlS2V5KVxuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlR2l0aHViID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0U2V0dGluZ3MoKVxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBHaXRodWJDbGllbnQoc2V0dGluZ3MuZ2l0aHViKVxuICAgIGF3YWl0IGNsaWVudC52YWxpZGF0ZVRva2VuQW5kUmVwbygpXG4gICAgcmV0dXJuIHsgb2s6IHRydWUgYXMgY29uc3QgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGFwcEVycm9yID0gdG9BcHBFcnJvcihlcnJvcilcbiAgICByZXR1cm4geyBvazogZmFsc2UgYXMgY29uc3QsIGVycm9yOiBhcHBFcnJvci5tZXNzYWdlLCBjb2RlOiBhcHBFcnJvci5jb2RlIH1cbiAgfVxufVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIF9zZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICA7KGFzeW5jICgpID0+IHtcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSBNRVNTQUdFX1RZUEVTLlBFTkRJTkdfU1VCTUlTU0lPTikge1xuICAgICAgc2VuZFJlc3BvbnNlKHsgb2s6IHRydWUgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IE1FU1NBR0VfVFlQRVMuUkVRVUVTVF9VUExPQUQpIHtcbiAgICAgIHNlbmRSZXNwb25zZShhd2FpdCB1cGxvYWROb3cobWVzc2FnZS5wYXlsb2FkKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IE1FU1NBR0VfVFlQRVMuVkFMSURBVEVfR0lUSFVCKSB7XG4gICAgICBzZW5kUmVzcG9uc2UoYXdhaXQgdmFsaWRhdGVHaXRodWIoKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IE1FU1NBR0VfVFlQRVMuR0VUX1BFTkRJTkdfU1VCTUlTU0lPTikge1xuICAgICAgc2VuZFJlc3BvbnNlKHsgb2s6IHRydWUsIHBlbmRpbmc6IGF3YWl0IGdldFBlbmRpbmdTdWJtaXNzaW9uKCkgfSlcbiAgICB9XG4gIH0pKClcbiAgcmV0dXJuIHRydWVcbn0pXG4iLCJleHBvcnQgY29uc3QgTUVTU0FHRV9UWVBFUyA9IHtcbiAgUEVORElOR19TVUJNSVNTSU9OOiBcIlBFTkRJTkdfU1VCTUlTU0lPTlwiLFxuICBSRVFVRVNUX1VQTE9BRDogXCJSRVFVRVNUX1VQTE9BRFwiLFxuICBVUExPQURfU1RBVFVTOiBcIlVQTE9BRF9TVEFUVVNcIixcbiAgVkFMSURBVEVfR0lUSFVCOiBcIlZBTElEQVRFX0dJVEhVQlwiLFxuICBHRVRfUEVORElOR19TVUJNSVNTSU9OOiBcIkdFVF9QRU5ESU5HX1NVQk1JU1NJT05cIlxufSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgU1RPUkFHRV9LRVlTID0ge1xuICBTRVRUSU5HUzogXCJzZXR0aW5nc1wiLFxuICBSRUNFTlRfVVBMT0FEUzogXCJyZWNlbnRVcGxvYWRzXCIsXG4gIExBU1RfUFJPQ0VTU0VEX1NVQk1JU1NJT05fSUQ6IFwibGFzdFByb2Nlc3NlZFN1Ym1pc3Npb25JZFwiLFxuICBQRU5ESU5HX1NVQk1JU1NJT046IFwicGVuZGluZ1N1Ym1pc3Npb25cIlxufSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgQVBJX0VORFBPSU5UUyA9IHtcbiAgTEVFVENPREVfR1JBUEhRTDogcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19MRUVUQ09ERV9HUkFQSFFMID8/IFwiaHR0cHM6Ly9sZWV0Y29kZS5jb20vZ3JhcGhxbFwiLFxuICBHSVRIVUJfQVBJOiBwcm9jZXNzLmVudi5QTEFTTU9fUFVCTElDX0dJVEhVQl9BUEkgPz8gXCJodHRwczovL2FwaS5naXRodWIuY29tXCJcbn0gYXMgY29uc3RcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IEFQSV9FTkRQT0lOVFMgfSBmcm9tIFwifmNvbnN0YW50c1wiXG5pbXBvcnQgdHlwZSB7IEdpdGh1YkNvbmZpZyB9IGZyb20gXCJ+dHlwZXNcIlxuaW1wb3J0IHsgQXBwRXJyb3IgfSBmcm9tIFwifnV0aWxzL2Vycm9yc1wiXG5cbmludGVyZmFjZSBDb250ZW50SXRlbSB7IG5hbWU6IHN0cmluZzsgcGF0aDogc3RyaW5nOyBzaGE6IHN0cmluZzsgdHlwZTogXCJmaWxlXCIgfCBcImRpclwiIH1cblxuZXhwb3J0IGNsYXNzIEdpdGh1YkNsaWVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBHaXRodWJDb25maWcpIHt9XG5cbiAgcHJpdmF0ZSBnZXQgaGVhZGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuY29uZmlnLnRva2VufWAsXG4gICAgICBcIlgtR2l0SHViLUFwaS1WZXJzaW9uXCI6IFwiMjAyMi0xMS0yOFwiLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlcXVlc3QocGF0aDogc3RyaW5nLCBpbml0PzogUmVxdWVzdEluaXQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9FTkRQT0lOVFMuR0lUSFVCX0FQSX0ke3BhdGh9YCwgeyAuLi5pbml0LCBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfSlcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHRocm93IG5ldyBBcHBFcnJvcihcIkludmFsaWQgR2l0SHViIHRva2VuXCIsIFwiSU5WQUxJRF9UT0tFTlwiKVxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgdGhyb3cgbmV3IEFwcEVycm9yKFwiUmVwb3NpdG9yeSBvciBwYXRoIG5vdCBmb3VuZFwiLCBcIlJFUE9fTk9UX0ZPVU5EXCIpXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB0aHJvdyBuZXcgQXBwRXJyb3IoXCJHaXRIdWIgQVBJIHJhdGUgbGltaXRlZFwiLCBcIlJBVEVfTElNSVRcIiwgdHJ1ZSlcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHRocm93IG5ldyBBcHBFcnJvcihcIkdpdEh1YiByZXF1ZXN0IHZhbGlkYXRpb24gZmFpbGVkXCIsIFwiVkFMSURBVElPTlwiKVxuICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBBcHBFcnJvcihgR2l0SHViIHJlcXVlc3QgZmFpbGVkICgke3Jlc3BvbnNlLnN0YXR1c30pYCwgXCJORVRXT1JLXCIsIHRydWUpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICBhc3luYyB2YWxpZGF0ZVRva2VuQW5kUmVwbygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLnJlcXVlc3QoXCIvdXNlclwiKVxuICAgIGF3YWl0IHRoaXMucmVxdWVzdChgL3JlcG9zLyR7dGhpcy5jb25maWcub3duZXJ9LyR7dGhpcy5jb25maWcucmVwb31gKVxuICB9XG5cbiAgYXN5bmMgZ2V0RGlyZWN0b3J5KHBhdGg6IHN0cmluZyk6IFByb21pc2U8Q29udGVudEl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnJlcXVlc3QoYC9yZXBvcy8ke3RoaXMuY29uZmlnLm93bmVyfS8ke3RoaXMuY29uZmlnLnJlcG99L2NvbnRlbnRzLyR7cGF0aH0/cmVmPSR7dGhpcy5jb25maWcuYnJhbmNofWApXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW11cbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHB1dEZpbGUocGF0aDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBtZXNzYWdlLFxuICAgICAgY29udGVudDogYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29udGVudCkpKSxcbiAgICAgIGJyYW5jaDogdGhpcy5jb25maWcuYnJhbmNoXG4gICAgfSlcbiAgICBhd2FpdCB0aGlzLnJlcXVlc3QoYC9yZXBvcy8ke3RoaXMuY29uZmlnLm93bmVyfS8ke3RoaXMuY29uZmlnLnJlcG99L2NvbnRlbnRzLyR7cGF0aH1gLCB7IG1ldGhvZDogXCJQVVRcIiwgYm9keSB9KVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQXBwRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29kZTpcbiAgICAgIHwgXCJJTlZBTElEX1RPS0VOXCJcbiAgICAgIHwgXCJSRVBPX05PVF9GT1VORFwiXG4gICAgICB8IFwiUkFURV9MSU1JVFwiXG4gICAgICB8IFwiTkVUV09SS1wiXG4gICAgICB8IFwiVkFMSURBVElPTlwiXG4gICAgICB8IFwiRFVQTElDQVRFXCJcbiAgICAgIHwgXCJVTktOT1dOXCIsXG4gICAgcHVibGljIHJlYWRvbmx5IHJldHJ5YWJsZSA9IGZhbHNlXG4gICkge1xuICAgIHN1cGVyKG1lc3NhZ2UpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvQXBwRXJyb3IgPSAoZXJyb3I6IHVua25vd24pOiBBcHBFcnJvciA9PiB7XG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEFwcEVycm9yKSByZXR1cm4gZXJyb3JcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiBuZXcgQXBwRXJyb3IoZXJyb3IubWVzc2FnZSwgXCJVTktOT1dOXCIsIGZhbHNlKVxuICByZXR1cm4gbmV3IEFwcEVycm9yKFwiVW5leHBlY3RlZCBlcnJvclwiLCBcIlVOS05PV05cIiwgZmFsc2UpXG59XG4iLCJpbXBvcnQgdHlwZSB7IENvbXBsZXhpdHlJbnB1dCwgR2l0aHViQ29uZmlnLCBMZWV0Q29kZVByb2JsZW1NZXRhZGF0YSB9IGZyb20gXCJ+dHlwZXNcIlxuaW1wb3J0IHsgc2FuaXRpemVGaWxlbmFtZSwgdG9UaXRsZUNhc2UgfSBmcm9tIFwifnV0aWxzL3Nhbml0aXplXCJcbmltcG9ydCB7IEdpdGh1YkNsaWVudCB9IGZyb20gXCIuL2NsaWVudFwiXG5cbmNvbnN0IGV4dGVuc2lvbkZyb21MYW5ndWFnZSA9IChsYW5ndWFnZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0geyBcIkMrK1wiOiBcImNwcFwiLCBQeXRob24zOiBcInB5XCIsIEphdmE6IFwiamF2YVwiLCBKYXZhU2NyaXB0OiBcImpzXCIsIFR5cGVTY3JpcHQ6IFwidHNcIiB9XG4gIHJldHVybiBtYXBbbGFuZ3VhZ2VdID8/IFwidHh0XCJcbn1cblxuY29uc3QgYnVpbGRIZWFkZXJMaW5lcyA9IChtZXRhZGF0YTogTGVldENvZGVQcm9ibGVtTWV0YWRhdGEsIGNvbXBsZXhpdHk6IENvbXBsZXhpdHlJbnB1dCk6IHN0cmluZ1tdID0+IFtcbiAgYFF1ZXN0aW9uOiAke21ldGFkYXRhLnRpdGxlfWAsXG4gIGBEaWZmaWN1bHR5OiAke21ldGFkYXRhLmRpZmZpY3VsdHl9YCxcbiAgXCJcIixcbiAgXCJUb3BpY3M6XCIsXG4gIC4uLm1ldGFkYXRhLnRvcGljVGFncy5tYXAoKHRhZykgPT4gYC0gJHt0YWd9YCksXG4gIFwiXCIsXG4gIGBMYW5ndWFnZTogJHttZXRhZGF0YS5sYW5ndWFnZX1gLFxuICBcIlwiLFxuICBgVGltZSBDb21wbGV4aXR5OiAke2NvbXBsZXhpdHkudGltZUNvbXBsZXhpdHl9YCxcbiAgYFNwYWNlIENvbXBsZXhpdHk6ICR7Y29tcGxleGl0eS5zcGFjZUNvbXBsZXhpdHl9YCxcbiAgXCJcIixcbiAgYFJ1bnRpbWU6ICR7bWV0YWRhdGEucnVudGltZX1gLFxuICBgTWVtb3J5OiAke21ldGFkYXRhLm1lbW9yeX1gLFxuICBcIlwiLFxuICBcIkxpbms6XCIsXG4gIG1ldGFkYXRhLnVybCxcbl1cblxuY29uc3QgYnVpbGRDb21tZW50SGVhZGVyID0gKGV4dDogc3RyaW5nLCBsaW5lczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuICBpZiAoZXh0ID09PSBcInB5XCIgfHwgZXh0ID09PSBcInJiXCIpIHtcbiAgICByZXR1cm4gbGluZXMubWFwKChsaW5lKSA9PiAobGluZSA/IGAjICR7bGluZX1gIDogXCIjXCIpKS5qb2luKFwiXFxuXCIpXG4gIH1cblxuICByZXR1cm4gYC8qXFxuJHtsaW5lcy5qb2luKFwiXFxuXCIpfVxcbiovYFxufVxuXG5leHBvcnQgY29uc3QgYnVpbGRDb21taXRNZXNzYWdlID0gKG1ldGFkYXRhOiBMZWV0Q29kZVByb2JsZW1NZXRhZGF0YSwgY29tcGxleGl0eTogQ29tcGxleGl0eUlucHV0KTogc3RyaW5nID0+XG4gIGBTb2x2ZWQ6ICR7bWV0YWRhdGEudGl0bGV9XFxuXFxuTGFuZ3VhZ2U6ICR7bWV0YWRhdGEubGFuZ3VhZ2V9XFxuUnVudGltZTogJHttZXRhZGF0YS5ydW50aW1lfVxcbk1lbW9yeTogJHttZXRhZGF0YS5tZW1vcnl9XFxuVEM6ICR7Y29tcGxleGl0eS50aW1lQ29tcGxleGl0eX1cXG5TQzogJHtjb21wbGV4aXR5LnNwYWNlQ29tcGxleGl0eX1gXG5cbmV4cG9ydCBjb25zdCBidWlsZEZpbGVCb2R5ID0gKG1ldGFkYXRhOiBMZWV0Q29kZVByb2JsZW1NZXRhZGF0YSwgY29tcGxleGl0eTogQ29tcGxleGl0eUlucHV0KTogc3RyaW5nID0+IHtcbiAgY29uc3QgZXh0ID0gZXh0ZW5zaW9uRnJvbUxhbmd1YWdlKG1ldGFkYXRhLmxhbmd1YWdlKVxuICBjb25zdCBoZWFkZXIgPSBidWlsZENvbW1lbnRIZWFkZXIoZXh0LCBidWlsZEhlYWRlckxpbmVzKG1ldGFkYXRhLCBjb21wbGV4aXR5KSlcblxuICByZXR1cm4gYCR7aGVhZGVyfVxcblxcbiR7bWV0YWRhdGEuY29kZX1cXG5gXG59XG5cbmNvbnN0IG5leHRGaWxlTmFtZSA9IChleGlzdGluZ05hbWVzOiBzdHJpbmdbXSwgYmFzZU5hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBsZXQgc3VmZml4ID0gMVxuICBsZXQgY2FuZGlkYXRlID0gYCR7YmFzZU5hbWV9LiR7ZXh0fWBcbiAgd2hpbGUgKGV4aXN0aW5nTmFtZXMuaW5jbHVkZXMoY2FuZGlkYXRlKSkge1xuICAgIHN1ZmZpeCArPSAxXG4gICAgY2FuZGlkYXRlID0gYCR7YmFzZU5hbWV9JHtzdWZmaXh9LiR7ZXh0fWBcbiAgfVxuICByZXR1cm4gY2FuZGlkYXRlXG59XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRTdWJtaXNzaW9uID0gYXN5bmMgKGNvbmZpZzogR2l0aHViQ29uZmlnLCBtZXRhZGF0YTogTGVldENvZGVQcm9ibGVtTWV0YWRhdGEsIGNvbXBsZXhpdHk6IENvbXBsZXhpdHlJbnB1dCk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBHaXRodWJDbGllbnQoY29uZmlnKVxuICBhd2FpdCBjbGllbnQudmFsaWRhdGVUb2tlbkFuZFJlcG8oKVxuXG4gIGNvbnN0IGZvbGRlciA9IHRvVGl0bGVDYXNlKG1ldGFkYXRhLnRvcGljVGFnc1swXSA/PyBcIlVuY2F0ZWdvcml6ZWRcIilcbiAgY29uc3QgZGlyZWN0b3J5ID0gYCR7Y29uZmlnLmJhc2VQYXRofS8ke3Nhbml0aXplRmlsZW5hbWUoZm9sZGVyKX1gXG4gIGNvbnN0IGV4dCA9IGV4dGVuc2lvbkZyb21MYW5ndWFnZShtZXRhZGF0YS5sYW5ndWFnZSlcbiAgY29uc3QgYmFzZU5hbWUgPSBzYW5pdGl6ZUZpbGVuYW1lKG1ldGFkYXRhLnRpdGxlKVxuXG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgY2xpZW50LmdldERpcmVjdG9yeShkaXJlY3RvcnkpXG4gIGNvbnN0IGZpbGVOYW1lID0gbmV4dEZpbGVOYW1lKGV4aXN0aW5nLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50eXBlID09PSBcImZpbGVcIikubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpLCBiYXNlTmFtZSwgZXh0KVxuICBjb25zdCBmaWxlUGF0aCA9IGAke2RpcmVjdG9yeX0vJHtmaWxlTmFtZX1gXG5cbiAgYXdhaXQgY2xpZW50LnB1dEZpbGUoZmlsZVBhdGgsIGJ1aWxkRmlsZUJvZHkobWV0YWRhdGEsIGNvbXBsZXhpdHkpLCBidWlsZENvbW1pdE1lc3NhZ2UobWV0YWRhdGEsIGNvbXBsZXhpdHkpKVxuICByZXR1cm4gZmlsZVBhdGhcbn1cbiIsImV4cG9ydCBjb25zdCBzYW5pdGl6ZUZpbGVuYW1lID0gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgdmFsdWUucmVwbGFjZSgvWzw+OlwiL1xcXFx8PypcXHgwMC1cXHgxRl0vZywgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpXG5cbmV4cG9ydCBjb25zdCB0b1RpdGxlQ2FzZSA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+XG4gIHZhbHVlXG4gICAgLnNwbGl0KC9bLV9cXHNdKy8pXG4gICAgLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSlcbiAgICAuam9pbihcIiBcIilcbiIsImV4cG9ydCBjb25zdCB3aXRoUmV0cnkgPSBhc3luYyA8VD4oZm46ICgpID0+IFByb21pc2U8VD4sIHJldHJpZXM6IG51bWJlcik6IFByb21pc2U8VD4gPT4ge1xuICBsZXQgYXR0ZW1wdCA9IDBcbiAgbGV0IGxhc3RFcnJvcjogdW5rbm93blxuICB3aGlsZSAoYXR0ZW1wdCA8PSByZXRyaWVzKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBmbigpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxhc3RFcnJvciA9IGVycm9yXG4gICAgICBhdHRlbXB0ICs9IDFcbiAgICAgIGlmIChhdHRlbXB0IDw9IHJldHJpZXMpIHtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwICogYXR0ZW1wdCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRocm93IGxhc3RFcnJvclxufVxuIiwiaW1wb3J0IHsgU1RPUkFHRV9LRVlTIH0gZnJvbSBcIn5jb25zdGFudHNcIlxuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25TZXR0aW5ncywgUGVuZGluZ1N1Ym1pc3Npb24sIFVwbG9hZFJlY29yZCB9IGZyb20gXCJ+dHlwZXNcIlxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFNldHRpbmdzOiBFeHRlbnNpb25TZXR0aW5ncyA9IHtcbiAgYXV0b1VwbG9hZEVuYWJsZWQ6IHRydWUsXG4gIGFza0NvbXBsZXhpdHlPbkFjY2VwdGVkOiB0cnVlLFxuICBtYXhVcGxvYWRSZXRyaWVzOiAyLFxuICBnaXRodWI6IHsgdG9rZW46IFwiXCIsIG93bmVyOiBcIlwiLCByZXBvOiBcIlwiLCBicmFuY2g6IFwibWFpblwiLCBiYXNlUGF0aDogXCJsZWV0Y29kZS1zb2x1dGlvbnNcIiB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXR0aW5ncyA9IGFzeW5jICgpOiBQcm9taXNlPEV4dGVuc2lvblNldHRpbmdzPiA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChTVE9SQUdFX0tFWVMuU0VUVElOR1MpXG4gIHJldHVybiByZXN1bHRbU1RPUkFHRV9LRVlTLlNFVFRJTkdTXSA/PyBkZWZhdWx0U2V0dGluZ3Ncbn1cblxuZXhwb3J0IGNvbnN0IHNldFNldHRpbmdzID0gYXN5bmMgKHNldHRpbmdzOiBFeHRlbnNpb25TZXR0aW5ncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbU1RPUkFHRV9LRVlTLlNFVFRJTkdTXTogc2V0dGluZ3MgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBlbmRpbmdTdWJtaXNzaW9uID0gYXN5bmMgKCk6IFByb21pc2U8UGVuZGluZ1N1Ym1pc3Npb24gfCBudWxsPiA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChTVE9SQUdFX0tFWVMuUEVORElOR19TVUJNSVNTSU9OKVxuICByZXR1cm4gcmVzdWx0W1NUT1JBR0VfS0VZUy5QRU5ESU5HX1NVQk1JU1NJT05dID8/IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IHNldFBlbmRpbmdTdWJtaXNzaW9uID0gYXN5bmMgKHBlbmRpbmc6IFBlbmRpbmdTdWJtaXNzaW9uIHwgbnVsbCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbU1RPUkFHRV9LRVlTLlBFTkRJTkdfU1VCTUlTU0lPTl06IHBlbmRpbmcgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG1hcmtMYXN0U3VibWlzc2lvbklkID0gYXN5bmMgKHN1Ym1pc3Npb25JZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFtTVE9SQUdFX0tFWVMuTEFTVF9QUk9DRVNTRURfU1VCTUlTU0lPTl9JRF06IHN1Ym1pc3Npb25JZCB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TGFzdFN1Ym1pc3Npb25JZCA9IGFzeW5jICgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFNUT1JBR0VfS0VZUy5MQVNUX1BST0NFU1NFRF9TVUJNSVNTSU9OX0lEKVxuICByZXR1cm4gcmVzdWx0W1NUT1JBR0VfS0VZUy5MQVNUX1BST0NFU1NFRF9TVUJNSVNTSU9OX0lEXSA/PyBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBhZGRVcGxvYWRSZWNvcmQgPSBhc3luYyAocmVjb3JkOiBVcGxvYWRSZWNvcmQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFNUT1JBR0VfS0VZUy5SRUNFTlRfVVBMT0FEUylcbiAgY29uc3QgcHJldmlvdXM6IFVwbG9hZFJlY29yZFtdID0gcmVzdWx0W1NUT1JBR0VfS0VZUy5SRUNFTlRfVVBMT0FEU10gPz8gW11cbiAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW1NUT1JBR0VfS0VZUy5SRUNFTlRfVVBMT0FEU106IFtyZWNvcmQsIC4uLnByZXZpb3VzXS5zbGljZSgwLCAyMCkgfSlcbn1cbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);