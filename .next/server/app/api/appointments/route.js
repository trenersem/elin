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

/***/ "(rsc)/./app/api/appointments/route.ts":
/*!***************************************!*\
  !*** ./app/api/appointments/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _models_appointments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/appointments */ \"(rsc)/./models/appointments.ts\");\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/database */ \"(rsc)/./utils/database.ts\");\n\n\nconst GET = async (request)=>{\n    await (0,_utils_database__WEBPACK_IMPORTED_MODULE_1__.connectToDB)();\n    try {\n        await (0,_utils_database__WEBPACK_IMPORTED_MODULE_1__.connectToDB)();\n        const users = await _models_appointments__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\n        return new Response(JSON.stringify(users), {\n            status: 200\n        });\n    } catch (error) {\n        return new Response(\"Failed to fetch all users\", {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FwcG9pbnRtZW50cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFDRDtBQUV4QyxNQUFNRSxNQUFNLE9BQU9DO0lBQ3hCLE1BQU1GLDREQUFXQTtJQUVqQixJQUFJO1FBQ0EsTUFBTUEsNERBQVdBO1FBRWpCLE1BQU1HLFFBQVEsTUFBTUosNERBQVdBLENBQUNLLElBQUksQ0FBQyxDQUFDO1FBRXRDLE9BQU8sSUFBSUMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDSixRQUFRO1lBQUVLLFFBQVE7UUFBSTtJQUM3RCxFQUFFLE9BQU9DLE9BQU87UUFDWixPQUFPLElBQUlKLFNBQVMsNkJBQTZCO1lBQUVHLFFBQVE7UUFBSTtJQUNuRTtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy90cmVuZXJzZW0vRGVza3RvcC9lbGluL2FwcC9hcGkvYXBwb2ludG1lbnRzL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBvaW50bWVudCBmcm9tICdAL21vZGVscy9hcHBvaW50bWVudHMnO1xuaW1wb3J0IHsgY29ubmVjdFRvREIgfSBmcm9tICdAL3V0aWxzL2RhdGFiYXNlJztcblxuZXhwb3J0IGNvbnN0IEdFVCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxSZXNwb25zZT4gPT4ge1xuICBhd2FpdCBjb25uZWN0VG9EQigpO1xuXG4gIHRyeSB7XG4gICAgICBhd2FpdCBjb25uZWN0VG9EQigpO1xuXG4gICAgICBjb25zdCB1c2VycyA9IGF3YWl0IEFwcG9pbnRtZW50LmZpbmQoe30pO1xuXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHVzZXJzKSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJGYWlsZWQgdG8gZmV0Y2ggYWxsIHVzZXJzXCIsIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiQXBwb2ludG1lbnQiLCJjb25uZWN0VG9EQiIsIkdFVCIsInJlcXVlc3QiLCJ1c2VycyIsImZpbmQiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/appointments/route.ts\n");

/***/ }),

/***/ "(rsc)/./models/appointments.ts":
/*!********************************!*\
  !*** ./models/appointments.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/types */ \"(rsc)/./types/index.ts\");\n\nconst { Schema, models, model } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst AppointmentSchema = new Schema({\n    first_name: {\n        type: String,\n        required: true\n    },\n    last_name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: false\n    },\n    phone_number: {\n        type: String,\n        required: true\n    },\n    service_id: {\n        type: String,\n        enum: _types__WEBPACK_IMPORTED_MODULE_0__.ServiceType,\n        required: true\n    },\n    appointment_date: {\n        type: String,\n        required: true\n    },\n    appointment_time: {\n        type: String,\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            'scheduled',\n            'completed',\n            'canceled'\n        ],\n        required: true\n    },\n    notes: {\n        type: String\n    }\n});\nconst Appointment = models.Appointment || model('Appointment', AppointmentSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Appointment);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvYXBwb2ludG1lbnRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNDO0FBRXRDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUVwRCxNQUFNQyxvQkFBb0IsSUFBSUosT0FBTztJQUNqQ0ssWUFBWTtRQUNSQyxNQUFNQztRQUNOQyxVQUFVO0lBQ2Q7SUFDQUMsV0FBVztRQUNQSCxNQUFNQztRQUNOQyxVQUFVO0lBQ2Q7SUFDQUUsT0FBTztRQUNISixNQUFNQztRQUNOQyxVQUFVO1FBQ1ZHLFFBQVE7SUFDWjtJQUNBQyxjQUFjO1FBQ1ZOLE1BQU1DO1FBQ05DLFVBQVU7SUFDZDtJQUNBSyxZQUFZO1FBQ1JQLE1BQU1DO1FBQ05PLE1BQU1mLCtDQUFXQTtRQUNqQlMsVUFBVTtJQUNkO0lBQ0FPLGtCQUFrQjtRQUNkVCxNQUFNQztRQUNOQyxVQUFVO0lBQ2Q7SUFDQVEsa0JBQWtCO1FBQ2RWLE1BQU1DO1FBQ05DLFVBQVU7SUFDZDtJQUNBUyxRQUFRO1FBQ0pYLE1BQU1DO1FBQ05PLE1BQU07WUFBQztZQUFhO1lBQWE7U0FBVztRQUM1Q04sVUFBVTtJQUNkO0lBQ0FVLE9BQU87UUFDSFosTUFBTUM7SUFDVjtBQUNKO0FBRUEsTUFBTVksY0FBY2xCLE9BQU9rQixXQUFXLElBQUlqQixNQUFNLGVBQWVFO0FBRS9ELGlFQUFlZSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvdHJlbmVyc2VtL0Rlc2t0b3AvZWxpbi9tb2RlbHMvYXBwb2ludG1lbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZpY2VUeXBlIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuY29uc3QgeyBTY2hlbWEsIG1vZGVscywgbW9kZWwgfSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuY29uc3QgQXBwb2ludG1lbnRTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBmaXJzdF9uYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBsYXN0X25hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHVuaXF1ZTogZmFsc2UsXG4gICAgfSxcbiAgICBwaG9uZV9udW1iZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHNlcnZpY2VfaWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBlbnVtOiBTZXJ2aWNlVHlwZSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGFwcG9pbnRtZW50X2RhdGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGFwcG9pbnRtZW50X3RpbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHN0YXR1czoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGVudW06IFsnc2NoZWR1bGVkJywgJ2NvbXBsZXRlZCcsICdjYW5jZWxlZCddLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIG5vdGVzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9XG59KTtcblxuY29uc3QgQXBwb2ludG1lbnQgPSBtb2RlbHMuQXBwb2ludG1lbnQgfHwgbW9kZWwoJ0FwcG9pbnRtZW50JywgQXBwb2ludG1lbnRTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBvaW50bWVudDsiXSwibmFtZXMiOlsiU2VydmljZVR5cGUiLCJTY2hlbWEiLCJtb2RlbHMiLCJtb2RlbCIsInJlcXVpcmUiLCJBcHBvaW50bWVudFNjaGVtYSIsImZpcnN0X25hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0X25hbWUiLCJlbWFpbCIsInVuaXF1ZSIsInBob25lX251bWJlciIsInNlcnZpY2VfaWQiLCJlbnVtIiwiYXBwb2ludG1lbnRfZGF0ZSIsImFwcG9pbnRtZW50X3RpbWUiLCJzdGF0dXMiLCJub3RlcyIsIkFwcG9pbnRtZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/appointments.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fappointments%2Froute&page=%2Fapi%2Fappointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fappointments%2Froute.ts&appDir=%2FUsers%2Ftrenersem%2FDesktop%2Felin%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftrenersem%2FDesktop%2Felin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fappointments%2Froute&page=%2Fapi%2Fappointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fappointments%2Froute.ts&appDir=%2FUsers%2Ftrenersem%2FDesktop%2Felin%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftrenersem%2FDesktop%2Felin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_trenersem_Desktop_elin_app_api_appointments_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/appointments/route.ts */ \"(rsc)/./app/api/appointments/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/appointments/route\",\n        pathname: \"/api/appointments\",\n        filename: \"route\",\n        bundlePath: \"app/api/appointments/route\"\n    },\n    resolvedPagePath: \"/Users/trenersem/Desktop/elin/app/api/appointments/route.ts\",\n    nextConfigOutput,\n    userland: _Users_trenersem_Desktop_elin_app_api_appointments_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhcHBvaW50bWVudHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFwcG9pbnRtZW50cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFwcG9pbnRtZW50cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnRyZW5lcnNlbSUyRkRlc2t0b3AlMkZlbGluJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnRyZW5lcnNlbSUyRkRlc2t0b3AlMkZlbGluJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNXO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvdHJlbmVyc2VtL0Rlc2t0b3AvZWxpbi9hcHAvYXBpL2FwcG9pbnRtZW50cy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXBwb2ludG1lbnRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXBwb2ludG1lbnRzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hcHBvaW50bWVudHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvdHJlbmVyc2VtL0Rlc2t0b3AvZWxpbi9hcHAvYXBpL2FwcG9pbnRtZW50cy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fappointments%2Froute&page=%2Fapi%2Fappointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fappointments%2Froute.ts&appDir=%2FUsers%2Ftrenersem%2FDesktop%2Felin%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftrenersem%2FDesktop%2Felin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./types/index.ts":
/*!************************!*\
  !*** ./types/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ServiceType: () => (/* binding */ ServiceType)\n/* harmony export */ });\nvar ServiceType = /*#__PURE__*/ function(ServiceType) {\n    ServiceType[\"CLASSIC\"] = \"classic\";\n    ServiceType[\"TWO_D\"] = \"2D\";\n    ServiceType[\"THREE_D\"] = \"3D\";\n    ServiceType[\"FOUR_D\"] = \"4D\";\n    ServiceType[\"CORRECTION\"] = \"correction\";\n    ServiceType[\"HYBRID\"] = \"hybrid\";\n    ServiceType[\"NATURAL\"] = \"natural\";\n    ServiceType[\"LIGHT_VOLUME\"] = \"light_volume\";\n    ServiceType[\"VOLUME\"] = \"volume\";\n    ServiceType[\"MEGA_VOLUME\"] = \"mega_volume\";\n    ServiceType[\"LASHES_REMOVAL\"] = \"lashes_removal\";\n    ServiceType[\"EXPRESS_LASHES\"] = \"express_lashes\";\n    ServiceType[\"BOTTOM_LASHES\"] = \"bottom_lashes\";\n    // Brow services\n    ServiceType[\"BROW_SHAPING\"] = \"brow_shaping\";\n    ServiceType[\"BROW_TINTING\"] = \"brow_tinting\";\n    ServiceType[\"BROW_LAMINATION\"] = \"brow_lamination\";\n    return ServiceType;\n}({});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi90eXBlcy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7O0FBd0NPLHlDQUFLQTs7Ozs7Ozs7Ozs7Ozs7SUFlVCxnQkFBZ0I7Ozs7V0FmUEE7TUFtQlgiLCJzb3VyY2VzIjpbIi9Vc2Vycy90cmVuZXJzZW0vRGVza3RvcC9lbGluL3R5cGVzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50LCBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5cbi8vIFVzZXIgaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIGV4dGVuZHMgRG9jdW1lbnQge1xuICBmaXJzdF9uYW1lOiBzdHJpbmc7XG4gIGxhc3RfbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwaG9uZV9udW1iZXI6IHN0cmluZztcbiAgcm9sZTogJ2NsaWVudCcgfCAnYWRtaW4nO1xufVxuXG4vLyBTZXJ2aWNlIGludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZSBleHRlbmRzIERvY3VtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkdXJhdGlvbl9taW51dGVzOiBudW1iZXI7XG4gIHByaWNlOiBudW1iZXI7XG59XG5cbi8vIEFwcG9pbnRtZW50IGludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBJQXBwb2ludG1lbnQge1xuICBmaXJzdF9uYW1lOiBzdHJpbmc7XG4gIGxhc3RfbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwaG9uZV9udW1iZXI6IHN0cmluZztcbiAgc2VydmljZV9pZDogU2VydmljZVR5cGU7XG4gIGFwcG9pbnRtZW50X2RhdGU6IHN0cmluZztcbiAgYXBwb2ludG1lbnRfdGltZTogc3RyaW5nO1xuICBzdGF0dXM6ICdzY2hlZHVsZWQnIHwgJ2NvbXBsZXRlZCcgfCAnY2FuY2VsZWQnO1xuICBfaWQ6IHN0cmluZztcbiAgbm90ZXM/OiBzdHJpbmc7XG59XG5cbi8vIEF2YWlsYWJpbGl0eSBpbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgSUF2YWlsYWJpbGl0eSB7XG4gIF9pZDogc3RyaW5nXG4gIGJsb2NrZWRfdGltZTogc3RyaW5nIFtdO1xuICBkYXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFNlcnZpY2VUeXBlIHtcbiAgQ0xBU1NJQyA9ICdjbGFzc2ljJyxcbiAgVFdPX0QgPSAnMkQnLFxuICBUSFJFRV9EID0gJzNEJyxcbiAgRk9VUl9EID0gJzREJyxcbiAgQ09SUkVDVElPTiA9ICdjb3JyZWN0aW9uJyxcbiAgSFlCUklEID0gJ2h5YnJpZCcsXG4gIE5BVFVSQUwgPSAnbmF0dXJhbCcsXG4gIExJR0hUX1ZPTFVNRSA9ICdsaWdodF92b2x1bWUnLFxuICBWT0xVTUUgPSAndm9sdW1lJyxcbiAgTUVHQV9WT0xVTUUgPSAnbWVnYV92b2x1bWUnLFxuICBMQVNIRVNfUkVNT1ZBTCA9ICdsYXNoZXNfcmVtb3ZhbCcsXG4gIEVYUFJFU1NfTEFTSEVTID0gJ2V4cHJlc3NfbGFzaGVzJyxcbiAgQk9UVE9NX0xBU0hFUyA9ICdib3R0b21fbGFzaGVzJyxcblxuICAgLy8gQnJvdyBzZXJ2aWNlc1xuICBCUk9XX1NIQVBJTkcgPSAnYnJvd19zaGFwaW5nJyxcbiAgQlJPV19USU5USU5HID0gJ2Jyb3dfdGludGluZycsXG4gIEJST1dfTEFNSU5BVElPTiA9ICdicm93X2xhbWluYXRpb24nXG59Il0sIm5hbWVzIjpbIlNlcnZpY2VUeXBlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./types/index.ts\n");

/***/ }),

/***/ "(rsc)/./utils/database.ts":
/*!***************************!*\
  !*** ./utils/database.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false; // track the connection\nconst MONGODB_URL = process.env.MONGODB_URL ?? '';\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set('strictQuery', true);\n    if (isConnected) {\n        console.log('MongoDB is already connected');\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URL, {\n            dbName: 'ellin'\n        });\n        isConnected = true;\n        console.log('MongoDB is connected');\n    } catch (error) {\n        console.error('Error connecting to MongoDB:', error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYXRhYmFzZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsSUFBSUMsY0FBdUIsT0FBTyx1QkFBdUI7QUFDekQsTUFBTUMsY0FBc0JDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVyxJQUFJO0FBRWhELE1BQU1HLGNBQWM7SUFDekJMLG1EQUFZLENBQUMsZUFBZTtJQUU1QixJQUFJQyxhQUFhO1FBQ2ZNLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0Y7SUFFQSxJQUFJO1FBQ0YsTUFBTVIsdURBQWdCLENBQUNFLGFBQWE7WUFDbENRLFFBQVE7UUFHVjtRQUVBVCxjQUFjO1FBQ2RNLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0csT0FBTztRQUNkSixRQUFRSSxLQUFLLENBQUMsZ0NBQWdDQTtJQUNoRDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy90cmVuZXJzZW0vRGVza3RvcC9lbGluL3V0aWxzL2RhdGFiYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmxldCBpc0Nvbm5lY3RlZDogYm9vbGVhbiA9IGZhbHNlOyAvLyB0cmFjayB0aGUgY29ubmVjdGlvblxuY29uc3QgTU9OR09EQl9VUkw6IHN0cmluZyA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMID8/ICcnO1xuXG5leHBvcnQgY29uc3QgY29ubmVjdFRvREIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIG1vbmdvb3NlLnNldCgnc3RyaWN0UXVlcnknLCB0cnVlKTtcblxuICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBpcyBhbHJlYWR5IGNvbm5lY3RlZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSTCwge1xuICAgICAgZGJOYW1lOiAnZWxsaW4nLFxuICAgIC8vICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIC8vICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pO1xuXG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGlzIGNvbm5lY3RlZCcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjonLCBlcnJvcik7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJpc0Nvbm5lY3RlZCIsIk1PTkdPREJfVVJMIiwicHJvY2VzcyIsImVudiIsImNvbm5lY3RUb0RCIiwic2V0IiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJkYk5hbWUiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/database.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fappointments%2Froute&page=%2Fapi%2Fappointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fappointments%2Froute.ts&appDir=%2FUsers%2Ftrenersem%2FDesktop%2Felin%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftrenersem%2FDesktop%2Felin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();