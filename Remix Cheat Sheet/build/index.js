var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/components/TopNav.tsx
import { Avatar, Box, Button } from "@mui/material";
import {
  AccountCircle as LoginIcon,
  Add
} from "@mui/icons-material";
import { useSubmit } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function TopNav(data) {
  let submit = useSubmit(), cookieData = data.cookieData, logout = () => {
    submit({}, { method: "post" });
  }, loginButton, dashboardButton;
  return cookieData.username ? (loginButton = /* @__PURE__ */ jsxDEV2(Button, { className: "icon-button", onClick: logout, children: [
    /* @__PURE__ */ jsxDEV2(Avatar, { src: cookieData.image }, void 0, !1, {
      fileName: "app/components/TopNav.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("p", { children: cookieData.username }, void 0, !1, {
      fileName: "app/components/TopNav.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/TopNav.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this), dashboardButton = /* @__PURE__ */ jsxDEV2("a", { href: "/dashboard/settings", children: /* @__PURE__ */ jsxDEV2(Button, { variant: "contained", color: "primary", className: "icon-button", children: "Dashboard" }, void 0, !1, {
    fileName: "app/components/TopNav.tsx",
    lineNumber: 39,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/TopNav.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this)) : loginButton = /* @__PURE__ */ jsxDEV2("a", { href: "/login", children: /* @__PURE__ */ jsxDEV2(Button, { className: "icon-button", children: [
    /* @__PURE__ */ jsxDEV2(LoginIcon, {}, void 0, !1, {
      fileName: "app/components/TopNav.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV2("p", { children: "Login" }, void 0, !1, {
      fileName: "app/components/TopNav.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/TopNav.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/TopNav.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this), /* @__PURE__ */ jsxDEV2("div", { children: /* @__PURE__ */ jsxDEV2("div", { id: "topNav", children: [
    /* @__PURE__ */ jsxDEV2(Box, { children: [
      /* @__PURE__ */ jsxDEV2("a", { href: "/", children: /* @__PURE__ */ jsxDEV2(Button, { className: "icon-button", children: [
        /* @__PURE__ */ jsxDEV2(Add, {}, void 0, !1, {
          fileName: "app/components/TopNav.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV2("p", { children: "App Name" }, void 0, !1, {
          fileName: "app/components/TopNav.tsx",
          lineNumber: 62,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/TopNav.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/TopNav.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2("a", { href: "/public", children: /* @__PURE__ */ jsxDEV2(Button, { className: "icon-button", children: /* @__PURE__ */ jsxDEV2("p", { children: "Button1" }, void 0, !1, {
        fileName: "app/components/TopNav.tsx",
        lineNumber: 67,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/TopNav.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/TopNav.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV2("a", { href: "/releasenotes", children: /* @__PURE__ */ jsxDEV2(Button, { className: "icon-button", children: /* @__PURE__ */ jsxDEV2("p", { children: "Button 2" }, void 0, !1, {
        fileName: "app/components/TopNav.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/TopNav.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/TopNav.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/TopNav.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2(Box, { children: [
      dashboardButton,
      loginButton
    ] }, void 0, !0, {
      fileName: "app/components/TopNav.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/TopNav.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/TopNav.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
var TopNav_default = TopNav;

// JS/cookies.server.ts
import { createCookie, isCookie } from "@remix-run/node";
import config from "config";
var userInfo = createCookie("userInfo", { maxAge: 2e6, secrets: [config.get("auth.secret")] });

// app/root.tsx
import { createTheme, ThemeProvider } from "@mui/material";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#E66A00"
    },
    secondary: {
      main: "#b5b5b5"
    },
    text: {
      secondary: "#ffab40",
      primary: "#b5b5b5"
    },
    background: {
      default: "#353535",
      paper: "#181818"
    },
    divider: "#ff6d00"
  }
}), links = () => [...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []];
async function loader({ request }) {
  let cookieHeader = request.headers.get("Cookie");
  return await userInfo.parse(cookieHeader) || {};
}
function App() {
  let cookieData = useLoaderData2();
  return /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: /* @__PURE__ */ jsxDEV3(ThemeProvider, { theme, children: [
      /* @__PURE__ */ jsxDEV3(TopNav_default, { cookieData }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links2,
  loader: () => loader2,
  meta: () => meta
});

// app/styles/App.css
var App_default = "/build/_assets/App-4AFLT7WR.css";

// app/styles/home.css
var home_default = "/build/_assets/home-HKUBKBNJ.css";

// app/routes/_index.tsx
import "@mui/icons-material";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var meta = () => [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }], links2 = () => [
  { rel: "stylesheet", href: App_default },
  { rel: "stylesheet", href: home_default }
];
async function loader2({ request }) {
  return {} || null;
}
function Index() {
  return /* @__PURE__ */ jsxDEV4("main", {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-TSRWAISX.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-BCBZJ7I5.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-SV4OVLOK.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CZK4MERT.js", imports: ["/build/_shared/chunk-YXHUEQK3.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-3GRX45ZD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "ba07cf1b", hmr: { runtime: "/build/_shared/chunk-SV4OVLOK.js", timestamp: 1708545205391 }, url: "/build/manifest-BA07CF1B.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
