webpackJsonp([1,4],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Created by Vladimir Budilov
 */
var AuthService = (function () {
    function AuthService() {
        this.authUrl = "http://localhost:4200/home/login";
    }
    AuthService.prototype.isLogged = function () {
        var token = JSON.parse(localStorage.getItem('auth'));
        if (token['id'] == null || token['id'] == "undefined") {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.getAuthServerUrl = function () {
        return this.authUrl;
    };
    AuthService.prototype.setAuth = function (id, access) {
        localStorage.setItem('auth', JSON.stringify({ id: id, access: access }));
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 464;


/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(601);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(auth, activatedRoute) {
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(682),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_modal__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_date_time_picker__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_archwizard_dist__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_after_login_after_login_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_before_login_before_login_component__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_service_top_menu_service_top_menu_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_service_side_menu_service_side_menu_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_service_manager_dashboard_cardwall_service_manager_dashboard_cardwall_component__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_service_manager_dashboard_router_service_manager_dashboard_router_component__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_service_manager_dashboard_service_manager_dashboard_component__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_auth_service__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_service_top_menu_service_top_menu_component__["a" /* ServiceTopMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_service_side_menu_service_side_menu_component__["a" /* ServiceSideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_service_manager_dashboard_cardwall_service_manager_dashboard_cardwall_component__["a" /* ServiceManagerDashboardCardwallComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_service_manager_dashboard_router_service_manager_dashboard_router_component__["a" /* ServiceManagerDashboardRouterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_service_manager_dashboard_service_manager_dashboard_component__["a" /* ServiceManagerDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_after_login_after_login_component__["a" /* AfterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_before_login_before_login_component__["a" /* BeforeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot([
                    {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'app/:id/:access',
                        component: __WEBPACK_IMPORTED_MODULE_12__components_before_login_before_login_component__["a" /* BeforeComponent */]
                    },
                    {
                        path: 'dashboard',
                        component: __WEBPACK_IMPORTED_MODULE_11__components_after_login_after_login_component__["a" /* AfterComponent */]
                    }
                ]),
                __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_date_time_picker__["a" /* DateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_archwizard_dist__["a" /* WizardModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__["DragulaModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__service_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AfterComponent = (function () {
    function AfterComponent(auth, activatedRoute, router) {
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.title = 'app works!';
    }
    AfterComponent.prototype.ngOnInit = function () {
        if (this.auth.isLogged() == false) {
            window.location.href = this.auth.getAuthServerUrl();
        }
    };
    AfterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-after-login',
            template: __webpack_require__(683),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _c) || Object])
    ], AfterComponent);
    return AfterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=after-login.component.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeforeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeforeComponent = (function () {
    function BeforeComponent(auth, activatedRoute, router) {
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.title = 'app works!';
    }
    BeforeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.activatedRoute.url['_value'].length == 1)
            return;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            console.log("params: ", params['id'] == null || params['id'] == undefined);
            if (params['id'] == null || params['access'] == undefined || params['id'] == "undefined" || params['access'] == "undefined") {
                if (_this.auth.isLogged() == false) {
                }
            }
            else {
                _this.auth.setAuth(params['id'], params['access']);
                _this.router.navigate(['dashboard']);
            }
        });
    };
    BeforeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-before-login',
            template: '<div></div>',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _c) || Object])
    ], BeforeComponent);
    return BeforeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=before-login.component.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceManagerDashboardCardwallComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceManagerDashboardCardwallComponent = (function () {
    function ServiceManagerDashboardCardwallComponent() {
    }
    ServiceManagerDashboardCardwallComponent.prototype.ngOnInit = function () {
    };
    ServiceManagerDashboardCardwallComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-manager-dashboard-cardwall',
            template: __webpack_require__(684),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceManagerDashboardCardwallComponent);
    return ServiceManagerDashboardCardwallComponent;
}());
//# sourceMappingURL=service-manager-dashboard-cardwall.component.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_part__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__ = __webpack_require__(600);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceManagerDashboardRouterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceManagerDashboardRouterComponent = (function () {
    function ServiceManagerDashboardRouterComponent() {
        this.containers = [];
        this.containers = [
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('appointments', 'Preprints', [
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](12, "Michael Westen", "2017 Honda Odyssey EX-L", "5FNRL5H6XHB006972", "3:00 p.m.", "0 minutes", "Marcus Aman", null, null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](13, "Sam Axe", "2017 Honda Accord SL", "5FNRL5H6XHB006972", "4:17p.m.", "90 minutes", "Archie Rival", null, [new __WEBPACK_IMPORTED_MODULE_1__models_part__["a" /* Part */](100, 'brakes pads'), new __WEBPACK_IMPORTED_MODULE_1__models_part__["a" /* Part */](101, 'oil'), new __WEBPACK_IMPORTED_MODULE_1__models_part__["a" /* Part */](102, 'oil filter')]),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](14, "Fiona Glennanne", "2017 Honda Civic EX-L", "5FNRL5H6XHB006972", "4:30 p.m.", null, "Marcus Aman", null, null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](15, "Nate Westen", "2008 Honda Acura", "vin", "4:30p.m.", null, "James Retiring", null, null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](16, "Pete Seymour", "2015 GMC Yukon Denali XL", "vin", "2:00 p.m.", "10 minutes", "Simon Aspirer", "Larry Shapiro", null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](17, "Matthew Blackmon", "1993 Ford Probe GT", "vin", "2:30 p.m.", "55 minutes", "Joe Newbie", null, null)
            ], ['appointments', 'serviceEstimate']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('serviceEstimate', 'Advisor', [], ['serviceEstimate', 'parts', 'multipoint', 'serviceFloor', 'invoice']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('parts', 'Parts', [], ['parts']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('multipoint', 'Multipoint', [], ['multipoint']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('servicefloor', 'Servicing', [], ['serviceFloor', 'invoice']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('invoice', 'Invoice', [], ['invoice'])
        ];
    }
    ServiceManagerDashboardRouterComponent.prototype.ngOnInit = function () {
    };
    ServiceManagerDashboardRouterComponent.prototype.allowDropFunction = function (zone) {
        return function (dragData) { return dragData.nextZones.contains(zone); };
    };
    ServiceManagerDashboardRouterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-manager-dashboard-router',
            template: __webpack_require__(685),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceManagerDashboardRouterComponent);
    return ServiceManagerDashboardRouterComponent;
}());
//# sourceMappingURL=service-manager-dashboard-router.component.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceManagerDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceManagerDashboardComponent = (function () {
    function ServiceManagerDashboardComponent() {
    }
    ServiceManagerDashboardComponent.prototype.ngOnInit = function () {
        console.log("cookie: ", localStorage.getItem('token'));
    };
    ServiceManagerDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-manager-dashboard',
            template: __webpack_require__(686),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceManagerDashboardComponent);
    return ServiceManagerDashboardComponent;
}());
//# sourceMappingURL=service-manager-dashboard.component.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSideMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceSideMenuComponent = (function () {
    function ServiceSideMenuComponent() {
    }
    ServiceSideMenuComponent.prototype.ngOnInit = function () {
    };
    ServiceSideMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-side-menu',
            template: __webpack_require__(687),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceSideMenuComponent);
    return ServiceSideMenuComponent;
}());
//# sourceMappingURL=service-side-menu.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceTopMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceTopMenuComponent = (function () {
    function ServiceTopMenuComponent() {
        this.options = [
            { value: 'name', display: 'Name' },
            { value: 'email', display: 'Email Address' },
            { value: 'vin', display: 'Vehicle vin Number' }
        ];
        this._form = {
            step1: {},
            step2: {},
            step3: {},
            step4: {}
        };
        this.cardData = [
            { label: "First Card", content: "This is first Card" },
            { label: "Second Card", content: "This is second Card" },
            { label: "Third Card", content: "This is third Card" },
            { label: "Fourth Card", content: "This is fourth Card" },
        ];
    }
    ServiceTopMenuComponent.prototype.ngOnInit = function () {
        $(".button-collapse").sideNav();
    };
    ServiceTopMenuComponent.prototype.getPlaceHolderString = function (option) {
        var placeholder = '';
        switch (option) {
            case "undefined":
                placeholder = "";
                break;
            case "name":
                placeholder = "Please provide your name";
                break;
            case "email":
                placeholder = "Please provide your email";
                break;
            case "vin":
                placeholder = "Please provide a vehicle vin Number";
                break;
            default:
                placeholder = "";
                break;
        }
        ;
        return placeholder;
    };
    ServiceTopMenuComponent.prototype.getDisplayString = function (option) {
        this.options.forEach(function (opt) {
            if (opt.value == option)
                return opt.display;
        });
    };
    ServiceTopMenuComponent.prototype.toggleDatePicker = function (status) {
        this.showDatePicker = status;
    };
    ServiceTopMenuComponent.prototype.setDate = function (date) {
        this._form.step4.date = date;
    };
    ServiceTopMenuComponent.prototype.onComplete = function (e) {
        this.myModal.close();
    };
    ServiceTopMenuComponent.prototype.stepChanged = function (e) {
        console.log(e);
        e.showPrev = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModal'), 
        __metadata('design:type', Object)
    ], ServiceTopMenuComponent.prototype, "myModal", void 0);
    ServiceTopMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-top-menu',
            template: __webpack_require__(688),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceTopMenuComponent);
    return ServiceTopMenuComponent;
}());
//# sourceMappingURL=service-top-menu.component.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part; });
var Part = (function () {
    function Part(id, name) {
        this.id = id;
        this.name = name;
    }
    return Part;
}());
//# sourceMappingURL=part.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceTicket; });
var ServiceTicket = (function () {
    function ServiceTicket(id, customerName, vehicle, vin, time, timeRemaining, advisor, technician, parts) {
        this.id = id;
        this.customerName = customerName;
        this.vehicle = vehicle;
        this.vin = vin;
        this.time = time;
        this.timeRemaining = timeRemaining;
        this.advisor = advisor;
        this.technician = technician;
        this.parts = parts;
    }
    return ServiceTicket;
}());
//# sourceMappingURL=service-ticket.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketContainer; });
var TicketContainer = (function () {
    function TicketContainer(id, name, tickets, nextZones) {
        this.id = id;
        this.name = name;
        this.tickets = tickets;
        this.nextZones = nextZones;
    }
    return TicketContainer;
}());
//# sourceMappingURL=ticket-container.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, ".panel {\n    margin-bottom: 21px;\n    background-color: #ffffff;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.panel-heading h4 {\n\tfont-size: 1.7rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "picker-modal > section {\n\tposition: initial !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 325,
	"./af.js": 325,
	"./ar": 331,
	"./ar-dz": 326,
	"./ar-dz.js": 326,
	"./ar-ly": 327,
	"./ar-ly.js": 327,
	"./ar-ma": 328,
	"./ar-ma.js": 328,
	"./ar-sa": 329,
	"./ar-sa.js": 329,
	"./ar-tn": 330,
	"./ar-tn.js": 330,
	"./ar.js": 331,
	"./az": 332,
	"./az.js": 332,
	"./be": 333,
	"./be.js": 333,
	"./bg": 334,
	"./bg.js": 334,
	"./bn": 335,
	"./bn.js": 335,
	"./bo": 336,
	"./bo.js": 336,
	"./br": 337,
	"./br.js": 337,
	"./bs": 338,
	"./bs.js": 338,
	"./ca": 339,
	"./ca.js": 339,
	"./cs": 340,
	"./cs.js": 340,
	"./cv": 341,
	"./cv.js": 341,
	"./cy": 342,
	"./cy.js": 342,
	"./da": 343,
	"./da.js": 343,
	"./de": 345,
	"./de-at": 344,
	"./de-at.js": 344,
	"./de.js": 345,
	"./dv": 346,
	"./dv.js": 346,
	"./el": 347,
	"./el.js": 347,
	"./en-au": 348,
	"./en-au.js": 348,
	"./en-ca": 349,
	"./en-ca.js": 349,
	"./en-gb": 350,
	"./en-gb.js": 350,
	"./en-ie": 351,
	"./en-ie.js": 351,
	"./en-nz": 352,
	"./en-nz.js": 352,
	"./eo": 353,
	"./eo.js": 353,
	"./es": 355,
	"./es-do": 354,
	"./es-do.js": 354,
	"./es.js": 355,
	"./et": 356,
	"./et.js": 356,
	"./eu": 357,
	"./eu.js": 357,
	"./fa": 358,
	"./fa.js": 358,
	"./fi": 359,
	"./fi.js": 359,
	"./fo": 360,
	"./fo.js": 360,
	"./fr": 363,
	"./fr-ca": 361,
	"./fr-ca.js": 361,
	"./fr-ch": 362,
	"./fr-ch.js": 362,
	"./fr.js": 363,
	"./fy": 364,
	"./fy.js": 364,
	"./gd": 365,
	"./gd.js": 365,
	"./gl": 366,
	"./gl.js": 366,
	"./he": 367,
	"./he.js": 367,
	"./hi": 368,
	"./hi.js": 368,
	"./hr": 369,
	"./hr.js": 369,
	"./hu": 370,
	"./hu.js": 370,
	"./hy-am": 371,
	"./hy-am.js": 371,
	"./id": 372,
	"./id.js": 372,
	"./is": 373,
	"./is.js": 373,
	"./it": 374,
	"./it.js": 374,
	"./ja": 375,
	"./ja.js": 375,
	"./jv": 376,
	"./jv.js": 376,
	"./ka": 377,
	"./ka.js": 377,
	"./kk": 378,
	"./kk.js": 378,
	"./km": 379,
	"./km.js": 379,
	"./ko": 380,
	"./ko.js": 380,
	"./ky": 381,
	"./ky.js": 381,
	"./lb": 382,
	"./lb.js": 382,
	"./lo": 383,
	"./lo.js": 383,
	"./lt": 384,
	"./lt.js": 384,
	"./lv": 385,
	"./lv.js": 385,
	"./me": 386,
	"./me.js": 386,
	"./mi": 387,
	"./mi.js": 387,
	"./mk": 388,
	"./mk.js": 388,
	"./ml": 389,
	"./ml.js": 389,
	"./mr": 390,
	"./mr.js": 390,
	"./ms": 392,
	"./ms-my": 391,
	"./ms-my.js": 391,
	"./ms.js": 392,
	"./my": 393,
	"./my.js": 393,
	"./nb": 394,
	"./nb.js": 394,
	"./ne": 395,
	"./ne.js": 395,
	"./nl": 397,
	"./nl-be": 396,
	"./nl-be.js": 396,
	"./nl.js": 397,
	"./nn": 398,
	"./nn.js": 398,
	"./pa-in": 399,
	"./pa-in.js": 399,
	"./pl": 400,
	"./pl.js": 400,
	"./pt": 402,
	"./pt-br": 401,
	"./pt-br.js": 401,
	"./pt.js": 402,
	"./ro": 403,
	"./ro.js": 403,
	"./ru": 404,
	"./ru.js": 404,
	"./se": 405,
	"./se.js": 405,
	"./si": 406,
	"./si.js": 406,
	"./sk": 407,
	"./sk.js": 407,
	"./sl": 408,
	"./sl.js": 408,
	"./sq": 409,
	"./sq.js": 409,
	"./sr": 411,
	"./sr-cyrl": 410,
	"./sr-cyrl.js": 410,
	"./sr.js": 411,
	"./ss": 412,
	"./ss.js": 412,
	"./sv": 413,
	"./sv.js": 413,
	"./sw": 414,
	"./sw.js": 414,
	"./ta": 415,
	"./ta.js": 415,
	"./te": 416,
	"./te.js": 416,
	"./tet": 417,
	"./tet.js": 417,
	"./th": 418,
	"./th.js": 418,
	"./tl-ph": 419,
	"./tl-ph.js": 419,
	"./tlh": 420,
	"./tlh.js": 420,
	"./tr": 421,
	"./tr.js": 421,
	"./tzl": 422,
	"./tzl.js": 422,
	"./tzm": 424,
	"./tzm-latn": 423,
	"./tzm-latn.js": 423,
	"./tzm.js": 424,
	"./uk": 425,
	"./uk.js": 425,
	"./uz": 426,
	"./uz.js": 426,
	"./vi": 427,
	"./vi.js": 427,
	"./x-pseudo": 428,
	"./x-pseudo.js": 428,
	"./yo": 429,
	"./yo.js": 429,
	"./zh-cn": 430,
	"./zh-cn.js": 430,
	"./zh-hk": 431,
	"./zh-hk.js": 431,
	"./zh-tw": 432,
	"./zh-tw.js": 432
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 671;


/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<app-service-top-menu></app-service-top-menu>\n<div class=\"row m-t-body\">\n\t<div class=\"col s2\">\n\t\t<app-service-side-menu></app-service-side-menu>\n\t</div>\n\t<div class=\"col s10 m-l-minus-7p\" >\n\t\t<app-service-manager-dashboard></app-service-manager-dashboard>\n\t</div>\n</div>"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<div class=\"row cardwall\">\n\t<div class=\"\">\n\t\t<div>\n\t\t\t<div class=\"\">\n\t\t\t\t<h5 style=\"text-align:center; color:white;\">Key Performance Indicators</h5>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col s12 first\">\n\t\t\t<div class=\"col s3\" >\n\t\t\t\t<div class=\"front card white-text\" id=\"tile1\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"material-icons\">today</i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"kpi\">13</div>\n\t\t\t\t\t<div>Appointments Today</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear card white-text\">.  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile3\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"material-icons\">person</i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"kpi\">1 out of 7</div>\n\t\t\t\t\t<div>Rank</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear  card white-text\">\n\t\t\t\t\t<h3>Leaderboard</h3>\n\t\t\t\t\t<ol class=\"col s12\" style=\"column-count: 2; column-gap:40px;\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>Marcus Aman</span> - <span>$750</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>Archie Rival</span> - <span>$630</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>James Retiring</span> - <span>$550</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>Simon Aspirer</span> - <span>$480</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>Larry Transfer</span> - <span>$394</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>Jane Novice</span> - <span>$250</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>Joe Newbie</span> - <span>$150</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile2\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"material-icons\">attach_money</i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"kpi\">$3,204.00</div>\n\t\t\t\t\t<div>Today's Total Revenue </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear  card white-text\">\n\t\t\t\t\t<h3>Cash Flow</h3>\n\t\t\t\t\t<p>$1,500.00</p>\n\t\t\t\t\t<p>Net</p>\n\t\t\t\t\t<p>-$1,704.00</p>\n\t\t\t\t\t<p>Billed to Parts</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile4\">\n\t\t\t\t\t<i class=\"material-icons\">trending_up</i>\n\t\t\t\t\t<div class=\"kpi\">$264,990.00</div>\n\t\t\t\t\t<div>Trend/Month</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear card white-text\">\n\t\t\t\t\t<h3>Daily Average</h3>\n\t\t\t\t\t<p>+$8,833/day</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t\t<div class=\"col s12 last\">\t\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile5\">\n\t\t\t\t<i class=\"material-icons\">supervisor_account</i>\n\t\t\t\t\t<div class=\"kpi\">$110.38</div>\n\t\t\t\t\t<div>Average Revenue / Repair</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear card white-text\">\n\t\t\t\t\t<h3>Stats</h3>\n\t\t\t\t\t<p style=\"text-decoration:underline\">$8,833.00 Trend Revenue / day</p>\n\n\t\t\t\t\t<p>80 Trend Customers / day</p>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile6\">\n\t\t\t\t\t<i class=\"material-icons\">work</i>\n\t\t\t\t\t<div class=\"kpi\">8</div>\n\t\t\t\t\t<div>Appointments Tomorrow</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear\">Order</div>\n\t\t\t</div>\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile7\">\n\t\t\t\t\t<i class=\"material-icons\">library_books</i>\n\t\t\t\t\t<div class=\"kpi\">93.4</div>\n\t\t\t\t\t<div>MTD CSE</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear card white-text\">Blog</div>\n\t\t\t</div>\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile8\">\n\t\t\t\t\t<i class=\"material-icons\">insert_drive_file</i>\n\t\t\t\t\t<div class=\"kpi\">6</div>\n\t\t\t\t\t<div>Active Tickets</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear card white-text\">Contact</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\t<div class=\"routerwall row\" style=\"\">\n\t\t<div class=\"\">\n\t\t\t<div class=\"\">\n\t\t\t<h5 style=\"text-align:center; color:white; padding-top: .8em;\">Service Router</h5>\n\t\t\t</div>\n\t\t\t<div class=\"\" >\n\t\t\t\t<div class=\"containerWall col s2 center-align\"    *ngFor=\"let container of containers; let i = index; \">\n\t\t\t\t\t<div class=\"panel panel-router \">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h4>{{container.name}}</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t<ul class=\"list-group\" [dragula]='\"first-bag\"'>\n\t\t\t\t\t\t\t\t<li *ngFor=\"let ticket of container.tickets; let x = index\" class=\"list-group-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"routercard\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"top-card\" style=\"background-color:royalblue;\">{{ticket.advisor}} <a style=\"text-decoration:underline; color:white;\"><span class=\"pull-right\">#{{ticket.id}}</span></a></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"top-card\" *ngIf=\"['serviceFloor', 'multipoint'].indexOf(container.nextZones[0]) > -1\">Tech:  {{ticket.technician}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"customer-name\">{{ticket.customerName}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"customer-vehicle\">{{ticket.vehicle}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"customer-vehicle\" *ngIf=\"['parts'].indexOf(container.nextZones[0]) > -1\">\n\n\t\t\t\t\t\t\t\t\t\t\t<ol><li *ngFor=\"let part of ticket.parts;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{part.name}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"time clearfix\"><span class=\"pull-left\">{{ticket.time}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">{{ticket.timeRemaining}}</span></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"m-t-2p\">\n\t<app-service-manager-dashboard-cardwall></app-service-manager-dashboard-cardwall>\n\t<app-service-manager-dashboard-router></app-service-manager-dashboard-router>\n</div>\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<div class=\"side-menu z-depth-1\">\n\t<div class=\"collection\">\n\t\t<a class=\"collection-item\">Dashboard</a>\n\t\t<a class=\"collection-item active\">Service</a>\n\t\t<a class=\"collection-item\">Inbox</a>\n\t\t<a class=\"collection-item\">Chat</a>\n\t\t<a class=\"collection-item\">Reports</a>\n\t</div>\n</div>\t"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<header>\n\t<nav class=\"white z-depth-1\">\n\t    <div class=\"row nav-wrapper\">\n\t      \t<div class=\"navbar-brand col s2 hide-on-med-and-down\"><span class=\"sr-only\">Kloud DMS</span></div>\n\t      \t<a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse black-text\"><i class=\"material-icons\">menu</i></a>\n\t      \t<div class=\"col s10 blue-grey darken-3 hide-on-med-and-down\">\n\t      \t\t<div class=\"col s12\">\n\t      \t\t\t<div class=\"col s1 blue-grey-text text-darken-2\">.</div>\n\t      \t\t\t<div class=\"black col s11 ul-bar\">\n\t\t\t      \t\t<ul class=\"right\">\n\t\t\t\t        \t<li><a><i class=\"material-icons\">person</i></a></li>\n\t\t\t\t\t        <li><a><i class=\"material-icons\">chat_bubble</i></a></li>\n\t\t\t\t\t        <li><a><i class=\"material-icons\">public</i></a></li>\n\t\t\t\t\t        <li><a><i class=\"material-icons\">build</i></a></li>\n\t\t\t\t      \t</ul>\n\t\t\t\t      \t<span class=\"left\"><a>Weather</a></span>\n\t\t\t      \t</div>\n\t      \t\t</div>\n\t      \t\t\n\t      \t\t<div class=\"col s12\">\n\t      \t\t\t<div class=\"col s1 blue-grey-text text-darken-2\">.</div>\n\t\t\t      \t<div class=\"black col s11 ul-bar\">\n\t\t\t\t      \t<ul class=\"right\">\n\t\t\t\t        \t<li><a>Schedule Appointment </a></li>\n\t\t\t\t\t        <li><a>Write Ticket</a></li>\n\t\t\t\t\t        <li><a>Vehicle Information</a></li>\n\t\t\t\t\t        <li><a>Customer Information</a></li>\n\t\t\t\t      \t</ul>\n\t\t\t\t      \t<span class=\"left\"><a>Today's Date</a></span>\n\t\t\t\t    </div>\n\t\t\t    </div>\t\t      \n\t      \t</div>\n      \t\t<ul class=\"side-nav\" id=\"mobile-demo\">\n\t\t        <li><a href=\"sass.html\">Sass</a></li>\n\t\t        <li><a href=\"badges.html\">Components</a></li>\n\t\t        <li><a href=\"collapsible.html\">Javascript</a></li>\n\t\t        <li><a href=\"mobile.html\">Mobile</a></li>\n\t      \t</ul>\n\t    </div>\n\t</nav>\n\t          \n</header>\n\n<!-- <header class=\"top-menu\">\n\t<div class=\"navbar navbar-default\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" >\n\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t</button>\n\t\t\t\t<a class=\"navbar-brand\"><span class=\"sr-only\">Kloud DMS</span></a>\n\t\t\t</div>\n\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\" style=\"padding-left:0; padding-right:0;\">\n\t\t\t\t<ul class=\"nav navbar-nav navigation\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a class=\"icon ion-wrench\">\n\t\t\t\t\t\t\t<span class=\"sr-only\">Settings</span>\n\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a class=\"icon ion-earth\"><span class=\"sr-only\">Notifications</span>\n\t\t\t\t\t\t\t<span class=\"ruby\">\n\t\t\t\t\t\t\t\t<span class=\"badge\">10</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a class=\"icon ion-chatbox\"> <span class=\"sr-only\">chat</span>\n\t\t\t\t\t\t\t<span class=\"ruby\">\n\t\t\t\t\t\t\t\t<span class=\"badge\">3</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a class=\"icon ion-android-person\">\n\t\t\t\t\t\t\t<span class=\"sr-only\">Profile</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"left-attachment\">\n\t\t\t\t\t\t<a>Weather</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\n\t\t\t\t<ul class=\"nav navbar-nav navigation\">\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a>Customer Information</a>\n\t\t\t\t\t</li>\t\t\t\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a>Vehicle Information</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a>Write Ticket</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a (click)=\"myModal.open()\">Schedule Appointment</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class=\"left-attachment\">\n\t\t\t\t\t\t<a>Today's Date</a>\n\t\t\t\t\t</li>\n\n\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</header> -->\n<!--\n<header  class=\"top-menu\">\n\n\n\n\n\t<nav class=\"top-menu-nav\">\n\t\t<ul class=\"navigation\">\n\t\t\t<li class=\"left-attachment\">\n\t\t\t\t<a>Logo</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"icon ion-wrench\">\n\t\t\t\t\t<span class=\"accessibility-text\" style=\"display:none;\">Settings</span>\n\t\t\t\t\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"icon ion-earth\"><span class=\"accessibility-text\" style=\"display:none;\">Notifications</span>\n\t\t\t\t\t<span class=\"ruby\">\n\t\t\t\t\t\t<span class=\"badge\">10</span>\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"icon ion-chatbox\"> <span class=\"accessibility-text\" style=\"display:none\">chat</span>\n\t\t\t\t\t<span class=\"ruby\">\n\t\t\t\t\t<span class=\"badge\">3</span>\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a class=\"icon ion-android-person\">\n\t\t\t\t\t<span class=\"accessibility-text\" style=\"display:none\">Profile</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"center\">\n\t\t\t\t<a>Weather</a>\n\t\t\t</li>\n\t\t</ul>\n\t\t\n\t</nav>\n</header>-->\n\n <modal #myModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n    <modal-content>\n\t    <wizard>\n\t\t\t<wizard-step title=\"Step 1\">\n\t\t\t\t<form #emailForm=\"ngForm\">\n\t\t\t      <div class=\"form-group\">\n\t\t\t        <label>Choose a option</label>\n\t\t\t\t    <div *ngFor=\"let option of options\">\n\t\t\t\t        <label>\n\t\t\t\t\t        <input class=\"\" type=\"radio\" name=\"option\" [(ngModel)]=\"_form.step1.option\" \n\t\t\t\t\t        [value]=\"option.value\">\n\t\t\t\t\t        {{option.display}}\n\t\t\t\t        </label>\n\t\t\t\t    </div>\n\t\t\t        <input type=\"text\" class=\"form-control\" name=\"value\" aria-describedby=\"emailHelp\" [(ngModel)]=\"_form.step1.value\" [placeholder]=\"getPlaceHolderString(_form.step1.option)\" required>\n\t\t\t        <small *ngIf=\"_form.step1.option == 'email'\" id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t\t\t      </div>\n\t\t\t    </form>\n\t\t\t    <div class=\"row text-right\">\t\t\t\t\n\t\t\t    \t<div class=\"col-xs-12\">\n\t\t\t\t\t<button class=\" btn btn-sm btn-primary text-right\" type=\"button\" nextStep [disabled]=\"!emailForm.form.valid\" >Next</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</wizard-step>\n\n\t\t\t<wizard-step title=\"Step 2\">\t\t\t\n\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t<div class=\"col-sm-12 form-group\">\n\t\t\t\t\t\t<div class=\"vehicle-card\" *ngFor=\"let card of cardData\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"fb\" [value]=\"card.label\" />\n\t\t\t\t\t\t\t<div class=\"widget-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"widget item-widget\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"image\">\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"absolute-center site-speed-lazy-image img-lazy-load\" src=\"http://i.ebayimg.com/images/g/VbsAAOSwfVpYpfJ9/s-l225.jpg\" alt=\"2004 Ford F-150 FX4\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"item-details\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">2004 Ford F-150 FX4</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"price-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"discounted-price\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"price\">USD 10245.01</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"text-center\"><label>{{card.label}}</label></div>\n\t\t\t\t\t\t\t<div class=\"text-center\"><small>{{card.content}}</small></div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row text-right\">\t\t\t\t\n\t\t\t    \t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" previousStep>Previous</button>\n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" nextStep>Next</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</wizard-step>\n\t\t\t<wizard-step title=\"Step 3\">\n\t\t\t\t<form #complainForm=\"ngForm\">\n\t\t\t    \t<div class=\"form-group\">\n\t\t\t\t    \t<label>Complaints</label>\n\t\t\t\t    \t<textarea class=\"form-control\" name=\"complain\" [(ngModel)]=\"_form.step3.value\" required></textarea>\n\t\t\t    \t</div>\n\t\t\t    </form>\t\t\t\t\n\t\t\t    <div class=\"row text-right\">\t\t\t\t\n\t\t\t    \t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" previousStep>Previous</button>\n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" [disabled]=\"!complainForm.form.valid\" nextStep >Next</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</wizard-step>\n\t\t\t<wizard-step title=\"Step 4\">\t\t\t\n\t\t\t\t<form #dateForm=\"ngForm\">\n\t\t\t    \t<div class=\"form-group\">\n\t\t\t\t    \t<label>Select a date</label>\n\t\t\t\t    \t<input class=\"form-control\" name=\"date\" [ngModel]=\"_form.step4.date\" (focus)=\"toggleDatePicker(true)\" readonly />\n\t\t\t\t\t\t<date-picker name=\"picker\" *ngIf=\"showDatePicker\" [initDate]=\"_form.step4.date\"\n\t\t\t\t\t\t           (onDatePickerCancel)=\"toggleDatePicker($event)\"\n\t\t\t\t\t\t           (onSelectDate)=\"setDate($event)\"></date-picker>\n\t\t\t    \t</div>\n\t\t\t    </form>\t\t\n\t\t\t    <div class=\"row text-right\">\t\t\t\t\n\t\t\t    \t<div class=\"col-xs-12\">    \n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" previousStep>Previous</button>\n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" nextStep [disabled]=\"!dateForm.form.valid\">Next</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</wizard-step>\n\t\t\t <wizard-step title=\"Step 5\">\n\t\t\t  \t<div class=\"form-group\">\n\t\t\t  \t\t<label>Select {{getDisplayString(_form.step1.option)}} </label> : <label> {{_form.step1.value }}</label>\n\t\t\t  \t</div>\n\t\t\t  \t<div class=\"form-group\">\n\t\t\t  \t\t<label>Selected a card </label> : <label> {{_form.step2.value }}</label>\n\t\t\t  \t</div>\n\t\t\t  \t<div class=\"form-group\">\n\t\t\t  \t\t<label>Complaints </label> : <label> {{_form.step3.value }}</label>\n\t\t\t  \t</div>\n\t\t\t  \t<div class=\"form-group\">\n\t\t\t  \t\t<label>Available Date </label> : <label> {{_form.step4.date }}</label>\n\t\t\t  \t</div>\n\t\t\t  \t<div class=\"row text-right\">\t\t\t\t\n\t\t\t    \t<div class=\"col-xs-12\">\n\t\t\t\t\t  \t<button class=\" btn btn-sm btn-primary\" type=\"button\" previousStep >Previous</button>\n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" (click)=\"onComplete()\" >Done</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</wizard-step>\n\t\t</wizard>\n    </modal-content>\n</modal>"

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(465);


/***/ })

},[708]);
//# sourceMappingURL=main.bundle.js.map