"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/appointments/route";
exports.ids = ["app/api/appointments/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fappointments%2Froute&page=%2Fapi%2Fappointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fappointments%2Froute.ts&appDir=%2FUsers%2FUser%2FDesktop%2FBestTime%2Fellinclick%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2FUser%2FDesktop%2FBestTime%2Fellinclick&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fappointments%2Froute&page=%2Fapi%2Fappointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fappointments%2Froute.ts&appDir=%2FUsers%2FUser%2FDesktop%2FBestTime%2Fellinclick%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2FUser%2FDesktop%2FBestTime%2Fellinclick&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_User_Desktop_BestTime_ellinclick_app_api_appointments_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/appointments/route.ts */ \"(rsc)/./app/api/appointments/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/appointments/route\",\n        pathname: \"/api/appointments\",\n        filename: \"route\",\n        bundlePath: \"app/api/appointments/route\"\n    },\n    resolvedPagePath: \"/Users/User/Desktop/BestTime/ellinclick/app/api/appointments/route.ts\",\n    nextConfigOutput,\n    userland: _Users_User_Desktop_BestTime_ellinclick_app_api_appointments_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/appointments/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhcHBvaW50bWVudHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFwcG9pbnRtZW50cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFwcG9pbnRtZW50cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRlVzZXIlMkZEZXNrdG9wJTJGQmVzdFRpbWUlMkZlbGxpbmNsaWNrJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRlVzZXIlMkZEZXNrdG9wJTJGQmVzdFRpbWUlMkZlbGxpbmNsaWNrJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNxQjtBQUNsRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2VsbGluY2xpY2svPzg0ODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL1VzZXIvRGVza3RvcC9CZXN0VGltZS9lbGxpbmNsaWNrL2FwcC9hcGkvYXBwb2ludG1lbnRzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hcHBvaW50bWVudHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hcHBvaW50bWVudHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FwcG9pbnRtZW50cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9Vc2VyL0Rlc2t0b3AvQmVzdFRpbWUvZWxsaW5jbGljay9hcHAvYXBpL2FwcG9pbnRtZW50cy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXBwb2ludG1lbnRzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fappointments%2Froute&page=%2Fapi%2Fappointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fappointments%2Froute.ts&appDir=%2FUsers%2FUser%2FDesktop%2FBestTime%2Fellinclick%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2FUser%2FDesktop%2FBestTime%2Fellinclick&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/appointments/route.ts":
/*!***************************************!*\
  !*** ./app/api/appointments/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _models_appointments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/appointments */ \"(rsc)/./models/appointments.ts\");\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/database */ \"(rsc)/./utils/database.ts\");\n\n\nconst GET = async (request)=>{\n    await (0,_utils_database__WEBPACK_IMPORTED_MODULE_1__.connectToDB)();\n    try {\n        await (0,_utils_database__WEBPACK_IMPORTED_MODULE_1__.connectToDB)();\n        const users = await _models_appointments__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\n        return new Response(JSON.stringify(users), {\n            status: 200\n        });\n    } catch (error) {\n        return new Response(\"Failed to fetch all users\", {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FwcG9pbnRtZW50cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFDRDtBQUV4QyxNQUFNRSxNQUFNLE9BQU9DO0lBQ3hCLE1BQU1GLDREQUFXQTtJQUVqQixJQUFJO1FBQ0EsTUFBTUEsNERBQVdBO1FBRWpCLE1BQU1HLFFBQVEsTUFBTUosNERBQVdBLENBQUNLLElBQUksQ0FBQyxDQUFDO1FBRXRDLE9BQU8sSUFBSUMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDSixRQUFRO1lBQUVLLFFBQVE7UUFBSTtJQUM3RCxFQUFFLE9BQU9DLE9BQU87UUFDWixPQUFPLElBQUlKLFNBQVMsNkJBQTZCO1lBQUVHLFFBQVE7UUFBSTtJQUNuRTtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGxpbmNsaWNrLy4vYXBwL2FwaS9hcHBvaW50bWVudHMvcm91dGUudHM/NjkyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwb2ludG1lbnQgZnJvbSAnQC9tb2RlbHMvYXBwb2ludG1lbnRzJztcbmltcG9ydCB7IGNvbm5lY3RUb0RCIH0gZnJvbSAnQC91dGlscy9kYXRhYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBHRVQgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCk6IFByb21pc2U8UmVzcG9uc2U+ID0+IHtcbiAgYXdhaXQgY29ubmVjdFRvREIoKTtcblxuICB0cnkge1xuICAgICAgYXdhaXQgY29ubmVjdFRvREIoKTtcblxuICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBBcHBvaW50bWVudC5maW5kKHt9KTtcblxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh1c2VycyksIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiRmFpbGVkIHRvIGZldGNoIGFsbCB1c2Vyc1wiLCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbIkFwcG9pbnRtZW50IiwiY29ubmVjdFRvREIiLCJHRVQiLCJyZXF1ZXN0IiwidXNlcnMiLCJmaW5kIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/appointments/route.ts\n");

/***/ }),

/***/ "(rsc)/./models/appointments.ts":
/*!********************************!*\
  !*** ./models/appointments.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/types */ \"(rsc)/./types/index.ts\");\n\nconst { Schema, models, model } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst AppointmentSchema = new Schema({\n    first_name: {\n        type: String,\n        required: true\n    },\n    last_name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: false\n    },\n    phone_number: {\n        type: String,\n        required: true\n    },\n    service_id: {\n        type: String,\n        enum: _types__WEBPACK_IMPORTED_MODULE_0__.ServiceType,\n        required: true\n    },\n    appointment_date: {\n        type: String,\n        required: true\n    },\n    appointment_time: {\n        type: String,\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            \"scheduled\",\n            \"completed\",\n            \"canceled\"\n        ],\n        required: true\n    },\n    notes: {\n        type: String\n    }\n});\nconst Appointment = models.Appointment || model(\"Appointment\", AppointmentSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Appointment);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvYXBwb2ludG1lbnRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNDO0FBRXRDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUVwRCxNQUFNQyxvQkFBb0IsSUFBSUosT0FBTztJQUNqQ0ssWUFBWTtRQUNSQyxNQUFNQztRQUNOQyxVQUFVO0lBQ2Q7SUFDQUMsV0FBVztRQUNQSCxNQUFNQztRQUNOQyxVQUFVO0lBQ2Q7SUFDQUUsT0FBTztRQUNISixNQUFNQztRQUNOQyxVQUFVO1FBQ1ZHLFFBQVE7SUFDWjtJQUNBQyxjQUFjO1FBQ1ZOLE1BQU1DO1FBQ05DLFVBQVU7SUFDZDtJQUNBSyxZQUFZO1FBQ1JQLE1BQU1DO1FBQ05PLE1BQU1mLCtDQUFXQTtRQUNqQlMsVUFBVTtJQUNkO0lBQ0FPLGtCQUFrQjtRQUNkVCxNQUFNQztRQUNOQyxVQUFVO0lBQ2Q7SUFDQVEsa0JBQWtCO1FBQ2RWLE1BQU1DO1FBQ05DLFVBQVU7SUFDZDtJQUNBUyxRQUFRO1FBQ0pYLE1BQU1DO1FBQ05PLE1BQU07WUFBQztZQUFhO1lBQWE7U0FBVztRQUM1Q04sVUFBVTtJQUNkO0lBQ0FVLE9BQU87UUFDSFosTUFBTUM7SUFDVjtBQUNKO0FBRUEsTUFBTVksY0FBY2xCLE9BQU9rQixXQUFXLElBQUlqQixNQUFNLGVBQWVFO0FBRS9ELGlFQUFlZSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxsaW5jbGljay8uL21vZGVscy9hcHBvaW50bWVudHMudHM/MGFjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2aWNlVHlwZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5cbmNvbnN0IHsgU2NoZW1hLCBtb2RlbHMsIG1vZGVsIH0gPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cbmNvbnN0IEFwcG9pbnRtZW50U2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgZmlyc3RfbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgbGFzdF9uYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IGZhbHNlLFxuICAgIH0sXG4gICAgcGhvbmVfbnVtYmVyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBzZXJ2aWNlX2lkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZW51bTogU2VydmljZVR5cGUsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBhcHBvaW50bWVudF9kYXRlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBhcHBvaW50bWVudF90aW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBzdGF0dXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBlbnVtOiBbJ3NjaGVkdWxlZCcsICdjb21wbGV0ZWQnLCAnY2FuY2VsZWQnXSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBub3Rlczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfVxufSk7XG5cbmNvbnN0IEFwcG9pbnRtZW50ID0gbW9kZWxzLkFwcG9pbnRtZW50IHx8IG1vZGVsKCdBcHBvaW50bWVudCcsIEFwcG9pbnRtZW50U2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwb2ludG1lbnQ7Il0sIm5hbWVzIjpbIlNlcnZpY2VUeXBlIiwiU2NoZW1hIiwibW9kZWxzIiwibW9kZWwiLCJyZXF1aXJlIiwiQXBwb2ludG1lbnRTY2hlbWEiLCJmaXJzdF9uYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibGFzdF9uYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJwaG9uZV9udW1iZXIiLCJzZXJ2aWNlX2lkIiwiZW51bSIsImFwcG9pbnRtZW50X2RhdGUiLCJhcHBvaW50bWVudF90aW1lIiwic3RhdHVzIiwibm90ZXMiLCJBcHBvaW50bWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/appointments.ts\n");

/***/ }),

/***/ "(rsc)/./types/index.ts":
/*!************************!*\
  !*** ./types/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ServiceType: () => (/* binding */ ServiceType)\n/* harmony export */ });\nvar ServiceType;\n(function(ServiceType) {\n    ServiceType[\"CLASSIC\"] = \"classic\";\n    ServiceType[\"TWO_D\"] = \"2D\";\n    ServiceType[\"THREE_D\"] = \"3D\";\n    ServiceType[\"FOUR_D\"] = \"4D\";\n    ServiceType[\"CORRECTION\"] = \"correction\";\n    ServiceType[\"HYBRID\"] = \"hybrid\";\n    ServiceType[\"NATURAL\"] = \"natural\";\n    ServiceType[\"LIGHT_VOLUME\"] = \"light_volume\";\n    ServiceType[\"VOLUME\"] = \"volume\";\n    ServiceType[\"MEGA_VOLUME\"] = \"mega_volume\";\n    ServiceType[\"LASHES_REMOVAL\"] = \"lashes_removal\";\n    ServiceType[\"EXPRESS_LASHES\"] = \"express_lashes\";\n    ServiceType[\"BOTTOM_LASHES\"] = \"bottom_lashes\";\n    // Brow services\n    ServiceType[\"BROW_SHAPING\"] = \"brow_shaping\";\n    ServiceType[\"BROW_TINTING\"] = \"brow_tinting\";\n    ServiceType[\"BROW_LAMINATION\"] = \"brow_lamination\";\n})(ServiceType || (ServiceType = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi90eXBlcy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7OztVQXdDWUE7Ozs7Ozs7Ozs7Ozs7O0lBZVQsZ0JBQWdCOzs7O0dBZlBBLGdCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsbGluY2xpY2svLi90eXBlcy9pbmRleC50cz9kZjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50LCBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5cbi8vIFVzZXIgaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIGV4dGVuZHMgRG9jdW1lbnQge1xuICBmaXJzdF9uYW1lOiBzdHJpbmc7XG4gIGxhc3RfbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwaG9uZV9udW1iZXI6IHN0cmluZztcbiAgcm9sZTogJ2NsaWVudCcgfCAnYWRtaW4nO1xufVxuXG4vLyBTZXJ2aWNlIGludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZSBleHRlbmRzIERvY3VtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkdXJhdGlvbl9taW51dGVzOiBudW1iZXI7XG4gIHByaWNlOiBudW1iZXI7XG59XG5cbi8vIEFwcG9pbnRtZW50IGludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBJQXBwb2ludG1lbnQge1xuICBmaXJzdF9uYW1lOiBzdHJpbmc7XG4gIGxhc3RfbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwaG9uZV9udW1iZXI6IHN0cmluZztcbiAgc2VydmljZV9pZDogU2VydmljZVR5cGU7XG4gIGFwcG9pbnRtZW50X2RhdGU6IHN0cmluZztcbiAgYXBwb2ludG1lbnRfdGltZTogc3RyaW5nO1xuICBzdGF0dXM6ICdzY2hlZHVsZWQnIHwgJ2NvbXBsZXRlZCcgfCAnY2FuY2VsZWQnO1xuICBfaWQ6IHN0cmluZztcbiAgbm90ZXM/OiBzdHJpbmc7XG59XG5cbi8vIEF2YWlsYWJpbGl0eSBpbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgSUF2YWlsYWJpbGl0eSB7XG4gIF9pZDogc3RyaW5nXG4gIGJsb2NrZWRfdGltZTogc3RyaW5nIFtdO1xuICBkYXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFNlcnZpY2VUeXBlIHtcbiAgQ0xBU1NJQyA9ICdjbGFzc2ljJyxcbiAgVFdPX0QgPSAnMkQnLFxuICBUSFJFRV9EID0gJzNEJyxcbiAgRk9VUl9EID0gJzREJyxcbiAgQ09SUkVDVElPTiA9ICdjb3JyZWN0aW9uJyxcbiAgSFlCUklEID0gJ2h5YnJpZCcsXG4gIE5BVFVSQUwgPSAnbmF0dXJhbCcsXG4gIExJR0hUX1ZPTFVNRSA9ICdsaWdodF92b2x1bWUnLFxuICBWT0xVTUUgPSAndm9sdW1lJyxcbiAgTUVHQV9WT0xVTUUgPSAnbWVnYV92b2x1bWUnLFxuICBMQVNIRVNfUkVNT1ZBTCA9ICdsYXNoZXNfcmVtb3ZhbCcsXG4gIEVYUFJFU1NfTEFTSEVTID0gJ2V4cHJlc3NfbGFzaGVzJyxcbiAgQk9UVE9NX0xBU0hFUyA9ICdib3R0b21fbGFzaGVzJyxcblxuICAgLy8gQnJvdyBzZXJ2aWNlc1xuICBCUk9XX1NIQVBJTkcgPSAnYnJvd19zaGFwaW5nJyxcbiAgQlJPV19USU5USU5HID0gJ2Jyb3dfdGludGluZycsXG4gIEJST1dfTEFNSU5BVElPTiA9ICdicm93X2xhbWluYXRpb24nXG59Il0sIm5hbWVzIjpbIlNlcnZpY2VUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./types/index.ts\n");

/***/ }),

/***/ "(rsc)/./utils/database.ts":
/*!***************************!*\
  !*** ./utils/database.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false; // track the connection\nconst MONGODB_URL = process.env.MONGODB_URL ?? \"\";\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"MongoDB is already connected\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URL, {\n            dbName: \"ellin\"\n        });\n        isConnected = true;\n        console.log(\"MongoDB is connected\");\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB:\", error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYXRhYmFzZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsSUFBSUMsY0FBdUIsT0FBTyx1QkFBdUI7QUFDekQsTUFBTUMsY0FBc0JDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVyxJQUFJO0FBRWhELE1BQU1HLGNBQWM7SUFDekJMLG1EQUFZLENBQUMsZUFBZTtJQUU1QixJQUFJQyxhQUFhO1FBQ2ZNLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0Y7SUFFQSxJQUFJO1FBQ0YsTUFBTVIsdURBQWdCLENBQUNFLGFBQWE7WUFDbENRLFFBQVE7UUFHVjtRQUVBVCxjQUFjO1FBQ2RNLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0csT0FBTztRQUNkSixRQUFRSSxLQUFLLENBQUMsZ0NBQWdDQTtJQUNoRDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGxpbmNsaWNrLy4vdXRpbHMvZGF0YWJhc2UudHM/NmFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5sZXQgaXNDb25uZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTsgLy8gdHJhY2sgdGhlIGNvbm5lY3Rpb25cbmNvbnN0IE1PTkdPREJfVVJMOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSTCA/PyAnJztcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RCID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBtb25nb29zZS5zZXQoJ3N0cmljdFF1ZXJ5JywgdHJ1ZSk7XG5cbiAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgY29uc29sZS5sb2coJ01vbmdvREIgaXMgYWxyZWFkeSBjb25uZWN0ZWQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkwsIHtcbiAgICAgIGRiTmFtZTogJ2VsbGluJyxcbiAgICAvLyAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAvLyAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBpcyBjb25uZWN0ZWQnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6JywgZXJyb3IpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiaXNDb25uZWN0ZWQiLCJNT05HT0RCX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJjb25uZWN0VG9EQiIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwiZGJOYW1lIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/database.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fappointments%2Froute&page=%2Fapi%2Fappointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fappointments%2Froute.ts&appDir=%2FUsers%2FUser%2FDesktop%2FBestTime%2Fellinclick%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2FUser%2FDesktop%2FBestTime%2Fellinclick&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();