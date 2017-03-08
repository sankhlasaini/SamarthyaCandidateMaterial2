webpackJsonp([1,4],{

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(818),
            styles: [__webpack_require__(802)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/app.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Service for Authentication
// having two methods login and logout
// If login then set the user in the localstorage.
// if logout remove the user from localstorage.
var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.login = function (email, password) {
        return this.http.post('http://localhost:3000/api/authenticate', { email: email, password: password })
            .map(function (response) {
            var user = response.json();
            if (user === 'userError') {
                console.log('id wrong');
            }
            else if (user === 'passwordError') {
                console.log('password wrong');
            }
            // console.log(user);
            // data from response store in variable
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/authentication.service.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JsonDataService = (function () {
    function JsonDataService(http, snackBar, router) {
        this.http = http;
        this.snackBar = snackBar;
        this.router = router;
        // url to store data from json file for Registration details
        this.urlRegister = 'http://localhost:3001/candidates';
        // url to get pincode info
        this.urlPincode = 'http://localhost:3002/pincodeDetails';
        // url to retrive data from json file for candidate navLinks
        this.urlNavlinks = 'http://localhost:3003/navList';
        // url to get langauges
        this.urlLanguages = 'http://localhost:3003/languages';
        // url to get profession
        this.urlProfession = 'http://localhost:3003/profession';
        // url to get locations
        this.urlLocations = 'http://localhost:3003/locations';
        // url to get placementCenter
        this.urlPlacementCenter = 'http://localhost:3003/placementCenter';
    }
    // snackbar notifications
    JsonDataService.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    // Store Registration details in databse
    JsonDataService.prototype.create = function (formData) {
        var _this = this;
        // console.log('service called');
        // console.log("josn data service : "+formData['fname']);
        this.http.post('http://localhost:3000/adduser', formData).subscribe(function (data) {
            _this.openSnackBar(formData.email, 'Register Successfully');
            _this.router.navigate(['/']);
        }, function (error) {
            console.log(error.json());
        });
    };
    // get data for by verify email in database
    JsonDataService.prototype.getEmail = function (email) {
        return this.http.get('http://localhost:3000/api/checkEmail?email=' + email).map(function (response) { return [
            response['_body'], console.log(response['_body'])]; });
    };
    ;
    // get json data for langauges and dropdown
    JsonDataService.prototype.getNavLinks = function () {
        return this.http.get(this.urlNavlinks).map(function (response) { return response.json(); });
    };
    ;
    // get json data for langauges and dropdown
    JsonDataService.prototype.getLanguages = function () {
        return this.http.get(this.urlLanguages).map(function (response) { return response.json(); });
    };
    ;
    JsonDataService.prototype.getLocations = function () {
        return this.http.get(this.urlLocations).map(function (response) { return response.json(); });
    };
    ;
    JsonDataService.prototype.getProfession = function () {
        return this.http.get(this.urlProfession).map(function (response) { return response.json(); });
    };
    ;
    JsonDataService.prototype.getPlacementCenter = function () {
        return this.http.get(this.urlPlacementCenter).map(function (response) { return response.json(); });
    };
    ;
    JsonDataService.prototype.getPincode = function (pincode) {
        return this.http.get(this.urlPincode + '?pincode=' + pincode)
            .map(function (response) { return response.json(); });
    };
    ;
    JsonDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], JsonDataService);
    return JsonDataService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/json-data.service.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// auth gaurd is used to guard the routes.
// here we implement CanActivate for Authguard class so that we can check for the route is activated or not
var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // optional parameters
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/auth.guard.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_about_us_about_us_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_components_dashboard_dashboard_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_components_candidate_search_candidate_search_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_components_loginComponent_candidate_register_candidate_register_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_components_event_post_event_post_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_components_job_post_job_post_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_components_logout_logout_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_components_loginComponent_login_login_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_components_loginComponent_password_reset_password_reset_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_components_loginComponent_forgot_password_forgot_password_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_components_loginComponent_verify_email_verify_email_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Guard_auth_guard__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_components_layout_layout_component__ = __webpack_require__(459);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















// import { LoginGuard } from './Guard/login.guard';
// routes
var routes = [
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_14_app_components_layout_layout_component__["a" /* LayoutComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3_app_components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__Guard_auth_guard__["a" /* AuthGuard */]] },
            { path: 'aboutUs', component: __WEBPACK_IMPORTED_MODULE_2_app_components_about_us_about_us_component__["a" /* AboutUsComponent */] },
            { path: 'candidateSearch', component: __WEBPACK_IMPORTED_MODULE_4_app_components_candidate_search_candidate_search_component__["a" /* CandidateSearchComponent */] },
            { path: 'eventPost', component: __WEBPACK_IMPORTED_MODULE_6_app_components_event_post_event_post_component__["a" /* EventPostComponent */] },
            { path: 'jobPost', component: __WEBPACK_IMPORTED_MODULE_7_app_components_job_post_job_post_component__["a" /* JobPostComponent */] },
        ]
    },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3_app_components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__Guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_8_app_components_logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9_app_components_loginComponent_login_login_component__["a" /* LoginComponent */] },
    { path: 'forgotPassword', component: __WEBPACK_IMPORTED_MODULE_11_app_components_loginComponent_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
    { path: 'candidateRegister', component: __WEBPACK_IMPORTED_MODULE_5_app_components_loginComponent_candidate_register_candidate_register_component__["a" /* CandidateRegisterComponent */] },
    { path: 'verifyEmail', component: __WEBPACK_IMPORTED_MODULE_12_app_components_loginComponent_verify_email_verify_email_component__["a" /* VerifyEmailComponent */] },
    { path: 'passwordReset', component: __WEBPACK_IMPORTED_MODULE_10_app_components_loginComponent_password_reset_password_reset_component__["a" /* PasswordResetComponent */] },
    { path: '**', redirectTo: '/home' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
;
var routingComponents = [
    __WEBPACK_IMPORTED_MODULE_2_app_components_about_us_about_us_component__["a" /* AboutUsComponent */],
    __WEBPACK_IMPORTED_MODULE_3_app_components_dashboard_dashboard_component__["a" /* DashboardComponent */],
    __WEBPACK_IMPORTED_MODULE_5_app_components_loginComponent_candidate_register_candidate_register_component__["a" /* CandidateRegisterComponent */],
    __WEBPACK_IMPORTED_MODULE_4_app_components_candidate_search_candidate_search_component__["a" /* CandidateSearchComponent */],
    __WEBPACK_IMPORTED_MODULE_6_app_components_event_post_event_post_component__["a" /* EventPostComponent */],
    __WEBPACK_IMPORTED_MODULE_7_app_components_job_post_job_post_component__["a" /* JobPostComponent */],
    __WEBPACK_IMPORTED_MODULE_8_app_components_logout_logout_component__["a" /* LogoutComponent */],
    __WEBPACK_IMPORTED_MODULE_10_app_components_loginComponent_password_reset_password_reset_component__["a" /* PasswordResetComponent */],
    __WEBPACK_IMPORTED_MODULE_11_app_components_loginComponent_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_12_app_components_loginComponent_verify_email_verify_email_component__["a" /* VerifyEmailComponent */]
];
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/app-routing.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_authentication_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_json_data_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LayoutComponent = (function () {
    function LayoutComponent(authenticationService, appComponent, snackBar, viewContainerRef, JsonDataService) {
        this.authenticationService = authenticationService;
        this.appComponent = appComponent;
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.JsonDataService = JsonDataService;
        this.isDarkTheme = false;
        this.navList = [];
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.JsonDataService.getNavLinks().subscribe(function (resJsonData) { return _this.getdata(resJsonData); });
    };
    // getdata for navigations
    LayoutComponent.prototype.getdata = function (jsonData) {
        this.navList = jsonData;
    };
    LayoutComponent.prototype.toggleTheme = function () {
        if (this.isDarkTheme === true) {
            this.isDarkTheme = false;
        }
        else {
            this.isDarkTheme = true;
        }
    };
    // snackBar for notification
    LayoutComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    // on logout click
    LayoutComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.openSnackBar('Successfully', 'Logged Out');
    };
    LayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__(825),
            styles: [__webpack_require__(809)],
            providers: [__WEBPACK_IMPORTED_MODULE_4_app_services_json_data_service__["a" /* JsonDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_app_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_app_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_app_component__["a" /* AppComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_app_component__["a" /* AppComponent */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* ViewContainerRef */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _e) || Object])
    ], LayoutComponent);
    return LayoutComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/layout.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(fb, emailservice, JsonDataService, snackBar, viewContainerRef, router, emailService) {
        this.emailservice = emailservice;
        this.JsonDataService = JsonDataService;
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        this.emailService = emailService;
        this.emailId = '';
        // getting login form data
        this.userForm = fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
        });
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emailService.getRegister()
            .subscribe(function (resEmployeeData) {
            _this.emailId = resEmployeeData.usermail2;
            console.log(_this.emailId);
        });
    };
    // snackBar for notification
    ForgotPasswordComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    // verify user if already exist or not for password Reset
    ForgotPasswordComponent.prototype.verifyUserReset = function () {
        var _this = this;
        if (this.candidates == 'found,') {
            this.infoobj = {
                'to': this.userForm.value.email,
                'subject': 'Password Reset',
                'redirect': 'http://localhost:4200/passwordReset',
                'mailBody': 'Please Click on this link to Reset Account Password'
            };
            this.emailservice.postdata(this.infoobj).subscribe(function (data) { return _this.postobject = data; }, function (error) { return [_this.openSnackBar('PASSWORD RESET LINK SENT', 'Please Check your mail'),
                _this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 500)
            ]; }, function () { return console.log('finished'); });
        }
        else {
            this.openSnackBar('User not Registered', 'Please Register');
        }
    };
    // on password reset submit
    ForgotPasswordComponent.prototype.onResetLink = function () {
        var _this = this;
        // console.log(this.userForm.value.email);
        this.JsonDataService.getEmail(this.userForm.value.email).subscribe(function (resEmailData) { return [
            _this.candidates = resEmailData, _this.verifyUserReset()]; }, function (error) {
            _this.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
        });
    };
    ForgotPasswordComponent.prototype.onBack = function () {
        this.router.navigate(['/login']);
    };
    ForgotPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__(827),
            styles: [__webpack_require__(811)],
            providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__["a" /* JsonDataService */]]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewContainerRef */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */]) === 'function' && _g) || Object])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/forgot-password.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_authentication_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_email_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_json_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_app_component__ = __webpack_require__(172);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var LoginComponent = (function () {
    function LoginComponent(fb, emailservice, JsonDataService, snackBar, viewContainerRef, router, route, authenticationService, appComponent) {
        this.emailservice = emailservice;
        this.JsonDataService = JsonDataService;
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.appComponent = appComponent;
        this.candidates = [];
        this.showProgress = false;
        this.user = {};
        // getting login form data
        this.userForm = fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],
        });
    }
    // on login submit
    LoginComponent.prototype.onSubmit = function () {
        console.log(this.userForm.value);
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser')) {
            this.redirect();
        }
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    };
    // snackBar for notification
    LoginComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.router.navigate(['/forgotPassword']);
    };
    LoginComponent.prototype.verifyEmail = function () {
        this.router.navigate(['/verifyEmail']);
    };
    // on login click
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.showProgress = true;
        this.authenticationService.login(this.userForm.value.email, this.userForm.value.password)
            .subscribe(function (data) {
            [
                _this.router.navigate([_this.returnUrl]),
                _this.openSnackBar('WELCOME : ', _this.userForm.value.email),
            ];
        }, function (error) {
            _this.openSnackBar('Username OR Password Wrong', 'Try Again');
            // this.showProgress = false
        });
    };
    LoginComponent.prototype.redirect = function () {
        console.log('redirect');
        this.router.navigate(['/dashboard']);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(830),
            styles: [__webpack_require__(814)],
            providers: [__WEBPACK_IMPORTED_MODULE_4_app_services_json_data_service__["a" /* JsonDataService */]]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_email_service__["a" /* EmailService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdSnackBar */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* ViewContainerRef */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* ActivatedRoute */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0_app_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_app_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7_app_app_component__["a" /* AppComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_app_app_component__["a" /* AppComponent */]) === 'function' && _j) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/login.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_json_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_email_service__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





// declare var $: any;
var PasswordResetComponent = (function () {
    function PasswordResetComponent(fb, JsonDataService, route, router, emailService) {
        this.JsonDataService = JsonDataService;
        this.route = route;
        this.router = router;
        this.emailService = emailService;
        this.jsonObj = {};
        this.languages = [];
        this.emailId = '';
        this.password = '';
        this.passwordMatchWarning = '';
        // register candidate form
        this.userForm = fb.group({
            email: [{ value: '', disabled: true }],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],
            conPassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],
        });
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emailService.getRegister()
            .subscribe(function (resEmployeeData) {
            _this.emailId = resEmployeeData.usermail2;
            console.log(_this.emailId);
        });
    };
    PasswordResetComponent.prototype.getdata = function (jsonData) {
        this.jsonObj = jsonData;
        this.languages = this.jsonObj['languages'];
    };
    // password confirm Validators
    PasswordResetComponent.prototype.passwordValue = function (pass) {
        this.password = pass;
    };
    PasswordResetComponent.prototype.conPasswordValue = function (conPass, pass) {
        if (pass !== conPass) {
            this.passwordMatchWarning = 'Password Not Match';
            document.getElementById('resetBtn').disabled = true;
        }
        else {
            this.passwordMatchWarning = '';
        }
    };
    // on form submit
    PasswordResetComponent.prototype.onSubmit = function () {
        this.userForm.value.email = this.emailId;
        // console.log(this.userForm.value);
    };
    // on back button
    PasswordResetComponent.prototype.onBack = function () {
        this.router.navigate(['/login']);
    };
    PasswordResetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-password-reset',
            template: __webpack_require__(831),
            styles: [__webpack_require__(815)]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_email_service__["a" /* EmailService */]) === 'function' && _e) || Object])
    ], PasswordResetComponent);
    return PasswordResetComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/password-reset.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var VerifyEmailComponent = (function () {
    function VerifyEmailComponent(fb, emailservice, JsonDataService, snackBar, viewContainerRef, router) {
        this.emailservice = emailservice;
        this.JsonDataService = JsonDataService;
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        // getting login form data
        this.userForm = fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
        });
    }
    VerifyEmailComponent.prototype.ngOnInit = function () { };
    // snackBar for notification
    VerifyEmailComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    // verify user if already exist or not for registration
    VerifyEmailComponent.prototype.verifyUserRegistration = function () {
        var _this = this;
        if (this.candidates == 'nouser,') {
            this.infoobj = {
                'to': this.userForm.value.email,
                'subject': 'Email verification',
                'redirect': 'http://localhost:3000/candidateRegister',
                'mailBody': 'Please Click on this link to verify your Email'
            };
            this.emailservice.postdata(this.infoobj).subscribe(function (data) { return _this.postobject = data; }, function (error) { return [_this.openSnackBar('VERIFICATION MAIL SENT', 'Please Check your MAIL'),
                _this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 500)]; }, function () { return console.log('finished'); });
        }
        else {
            this.openSnackBar('User already Exist', 'Please Login');
            this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 500);
        }
    };
    // on create account submit
    VerifyEmailComponent.prototype.onVerifyLink = function () {
        var _this = this;
        // console.log(this.userForm.value.email);
        this.JsonDataService.getEmail(this.userForm.value.email).subscribe(function (resJsonData) { return [
            _this.candidates = resJsonData, _this.verifyUserRegistration()]; }, function (error) {
            _this.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
        });
    };
    // go back to login
    VerifyEmailComponent.prototype.onBack = function () {
        this.router.navigate(['/login']);
    };
    VerifyEmailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-verify-email',
            template: __webpack_require__(832),
            styles: [__webpack_require__(816)],
            providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__["a" /* JsonDataService */]]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewContainerRef */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _f) || Object])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/verify-email.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__(833),
            styles: [__webpack_require__(817)]
        }), 
        __metadata('design:paramtypes', [])
    ], LogoutComponent);
    return LogoutComponent;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/logout.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 525;


/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(698);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/main.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Guard_auth_guard__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_app_routing_module__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_components_logout_logout_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_components_appbar_appbar_component__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_components_loginComponent_login_login_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_components_layout_layout_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_services_json_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_services_email_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_components_loginComponent_password_reset_password_reset_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_flex_layout__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_components_loginComponent_forgot_password_forgot_password_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_components_loginComponent_verify_email_verify_email_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_components_loginComponent_login_header_login_header_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_components_loginComponent_login_footer_login_footer_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_md2__ = __webpack_require__(793);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23_md2__["a" /* Md2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_app_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_flex_layout__["FlexLayoutModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16_app_services_email_service__["a" /* EmailService */],
                __WEBPACK_IMPORTED_MODULE_15_app_services_json_data_service__["a" /* JsonDataService */],
                __WEBPACK_IMPORTED_MODULE_2__Guard_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9_app_app_routing_module__["b" /* routingComponents */],
                __WEBPACK_IMPORTED_MODULE_10_app_components_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_11_app_components_appbar_appbar_component__["a" /* AppbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12_app_components_loginComponent_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13_app_components_layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_17_app_components_loginComponent_password_reset_password_reset_component__["a" /* PasswordResetComponent */],
                __WEBPACK_IMPORTED_MODULE_19_app_components_loginComponent_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_20_app_components_loginComponent_verify_email_verify_email_component__["a" /* VerifyEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_21_app_components_loginComponent_login_header_login_header_component__["a" /* LoginHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_22_app_components_loginComponent_login_footer_login_footer_component__["a" /* LoginFooterComponent */],
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/app.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__(819),
            styles: [__webpack_require__(803)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/about-us.component.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppbarComponent = (function () {
    function AppbarComponent() {
    }
    AppbarComponent.prototype.ngOnInit = function () {
    };
    AppbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-appbar',
            template: __webpack_require__(820),
            styles: [__webpack_require__(804)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppbarComponent);
    return AppbarComponent;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/appbar.component.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CandidateSearchComponent = (function () {
    function CandidateSearchComponent() {
    }
    CandidateSearchComponent.prototype.ngOnInit = function () {
    };
    CandidateSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-candidate-search',
            template: __webpack_require__(821),
            styles: [__webpack_require__(805)]
        }), 
        __metadata('design:paramtypes', [])
    ], CandidateSearchComponent);
    return CandidateSearchComponent;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/candidate-search.component.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_authentication_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_component__ = __webpack_require__(172);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authenticationService, appComponent) {
        this.authenticationService = authenticationService;
        this.appComponent = appComponent;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(822),
            styles: [__webpack_require__(806)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_app_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_app_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_app_component__["a" /* AppComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_app_component__["a" /* AppComponent */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/dashboard.component.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventPostComponent = (function () {
    function EventPostComponent() {
    }
    EventPostComponent.prototype.ngOnInit = function () {
    };
    EventPostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-event-post',
            template: __webpack_require__(823),
            styles: [__webpack_require__(807)]
        }), 
        __metadata('design:paramtypes', [])
    ], EventPostComponent);
    return EventPostComponent;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/event-post.component.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobPostComponent = (function () {
    function JobPostComponent() {
    }
    JobPostComponent.prototype.ngOnInit = function () {
    };
    JobPostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-job-post',
            template: __webpack_require__(824),
            styles: [__webpack_require__(808)]
        }), 
        __metadata('design:paramtypes', [])
    ], JobPostComponent);
    return JobPostComponent;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/job-post.component.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_json_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_email_service__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var CandidateRegisterComponent = (function () {
    function CandidateRegisterComponent(fb, JsonDataService, route, router, http, emailService, snackBar, viewContainerRef) {
        this.JsonDataService = JsonDataService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.emailService = emailService;
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.jsonObj = {};
        this.languages = [];
        this.profession = [];
        this.locations = [];
        this.placementCenter = [];
        this.emailId = '';
        this.formData = {};
        this.areaList = [];
        this.password = '';
        this.passwordMatchWarning = '';
        // register candidate form
        this.userForm = fb.group({
            fname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[A-Za-z]{2,}')]],
            lname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[A-Za-z]{2,}')]],
            gender: ['male', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            email: [{ value: '', disabled: true }],
            regId: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            // dob:'',
            aadhar: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^\d{12}$/)]],
            mob: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, , __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[0-9]{10}')]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],
            conPassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],
            profession: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            pincode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[0-9]{6}')]],
            location: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            placementCenter: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]]
        });
    }
    CandidateRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getting languages and form data from json file
        this.JsonDataService.getPlacementCenter().subscribe(function (resJsonData) { return _this.getPlacementCenter(resJsonData); });
        this.JsonDataService.getLocations().subscribe(function (resJsonData) { return _this.getLocations(resJsonData); });
        this.JsonDataService.getProfession().subscribe(function (resJsonData) { return _this.getProfession(resJsonData); });
        this.emailService.getRegister()
            .subscribe(function (resEmployeeData) {
            [_this.emailId = resEmployeeData.usermail2, _this.checkEmail(_this.emailId)];
            // console.log(this.emailId)
        });
    };
    // check if email is undefined
    CandidateRegisterComponent.prototype.checkEmail = function (email) {
        if (email === undefined) {
            // console.log('null');
            this.router.navigate(['/login']);
        }
        else {
        }
    };
    // Getting placement Centers
    CandidateRegisterComponent.prototype.getPlacementCenter = function (jsonData) {
        this.placementCenter = jsonData;
    };
    // Getting data locations
    CandidateRegisterComponent.prototype.getLocations = function (jsonData) {
        this.locations = jsonData;
    };
    // Getting Professions
    CandidateRegisterComponent.prototype.getProfession = function (jsonData) {
        this.profession = jsonData;
    };
    // snackBar for notification
    CandidateRegisterComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    // password confirm Validators
    CandidateRegisterComponent.prototype.passwordValue = function (pass) {
        this.password = pass;
    };
    CandidateRegisterComponent.prototype.conPasswordValue = function (conPass) {
        if (this.password !== conPass) {
            this.passwordMatchWarning = 'Password Not Match';
            document.getElementById('resetBtn').disabled = true;
        }
        else {
            this.passwordMatchWarning = '';
        }
    };
    // check Pincode
    CandidateRegisterComponent.prototype.getPincode = function () {
        var _this = this;
        this.JsonDataService.getPincode(this.pincode).subscribe(function (resPincodeData) { return [_this.pincodeLocation = resPincodeData, _this.getPincodeLocation()]; });
    };
    // get pincode locations after checking pincode
    CandidateRegisterComponent.prototype.getPincodeLocation = function () {
        var _this = this;
        this.userForm.value.location = '';
        this.areaList = [];
        this.pincodeLocation.forEach(function (element) {
            _this.areaList.push(element['officename'] + ', ' + element['Districtname'] + ', ' + element['statename']);
        });
        if (this.areaList.length === 0) {
            this.openSnackBar('No Location Found', 'Please Try again');
        }
        else {
            this.openSnackBar(this.areaList.length + ' Locations Found', 'Please Select');
        }
    };
    // on userverify button
    CandidateRegisterComponent.prototype.verifyUserRegistration = function () {
        var _this = this;
        if (this.candidates === 'nouser,') {
            this.userForm.value.email = this.emailId;
            this.formData = this.userForm.value;
            // console.log(this.formData);
            this.JsonDataService.create(this.formData);
            this.openSnackBar('Successfully Register', 'Please Login');
            this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 500);
        }
        else {
            this.openSnackBar('User already Exist', 'Please Login');
            this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 500);
        }
    };
    // on form submit
    CandidateRegisterComponent.prototype.onRegister = function () {
        var _this = this;
        // console.log(this.userForm.value);
        // console.log(this.emailId);
        if (this.emailId === '') {
            this.openSnackBar('No Email Id Present', 'Please Verify Email');
        }
        else {
            this.JsonDataService.getEmail(this.emailId).subscribe(function (resJsonData) { return [
                _this.candidates = resJsonData, _this.verifyUserRegistration()]; }, function (error) {
                _this.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
            });
        }
    };
    CandidateRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-candidate-register',
            template: __webpack_require__(826),
            styles: [__webpack_require__(810)],
            providers: [__WEBPACK_IMPORTED_MODULE_2_app_services_json_data_service__["a" /* JsonDataService */]]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_app_services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_app_services_email_service__["a" /* EmailService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdSnackBar */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewContainerRef */]) === 'function' && _h) || Object])
    ], CandidateRegisterComponent);
    return CandidateRegisterComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/candidate-register.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFooterComponent = (function () {
    function LoginFooterComponent(JsonDataService) {
        this.JsonDataService = JsonDataService;
        this.languages = [];
    }
    LoginFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getting languages form json file
        this.JsonDataService.getLanguages().subscribe(function (resJsonData) { return _this.getdata(resJsonData); });
    };
    LoginFooterComponent.prototype.getdata = function (jsonData) {
        this.languages = jsonData;
    };
    LoginFooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-login-footer',
            template: __webpack_require__(828),
            styles: [__webpack_require__(812)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _a) || Object])
    ], LoginFooterComponent);
    return LoginFooterComponent;
    var _a;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/login-footer.component.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginHeaderComponent = (function () {
    function LoginHeaderComponent(JsonDataService) {
        this.JsonDataService = JsonDataService;
        this.languages = [];
    }
    LoginHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getting languages form json file
        this.JsonDataService.getLanguages().subscribe(function (resJsonData) { return _this.getLanguages(resJsonData); });
    };
    LoginHeaderComponent.prototype.getLanguages = function (jsonData) {
        this.languages = jsonData;
    };
    LoginHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-login-header',
            template: __webpack_require__(829),
            styles: [__webpack_require__(813)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _a) || Object])
    ], LoginHeaderComponent);
    return LoginHeaderComponent;
    var _a;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/login-header.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': 'Bearer' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    UserService.prototype.getAll = function () {
        return this.http.get('http://localhost:3000/api/showuser', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/user.service.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/environment.js.map

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\n.navIcon {\n    padding-right: 10px;\n}\n\nmd-toolbar {\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    md-sidenav {\n        width: 180px;\n    }\n    .headerLarge {\n        display: none;\n    }\n    .headerSmall {\n        display: inline;\n    }\n}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    md-sidenav {\n        width: 200px;\n    }\n    .headerSmall {\n        display: none;\n    }\n    .headerLarge {\n        display: inline;\n    }\n}\n\n\n/*\nfor large screens*/\n\n@media (min-width: 768px) {\n    md-sidenav {\n        width: 250px;\n    }\n    .headerSmall {\n        display: none;\n    }\n    .headerLarge {\n        display: inline;\n    }\n}"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 600px;\n}\n\n.formIcons {\n    padding-bottom: 25px;\n    color: gray;\n}\n\n.gender {\n    height: 70px;\n    padding-bottom: 15px;\n}\n\n.dropdown {\n    height: 70px;\n    padding-bottom: 15px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.findAreaBtn {\n    padding: 10px;\n    height: 70px;\n    line-height: unset;\n}\n\n.location {\n    margin-top: 10px;\n}\n\n.areaDropdown {\n    /*width: 10px;*/\n}\n\n.levelIcon {\n    padding-top: 0px;\n    padding-bottom: 12px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.registerBtn {\n    margin-top: 50px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n}"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 500px;\n}\n\n.formIcons {\n    padding-bottom: 30px;\n    color: gray;\n}\n\nform {\n    font-size: 17px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    md-card {\n        top: 56px;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    md-card {\n        top: 0px;\n    }\n}\n\n\n/*for large screens*/\n\n@media (min-width: 768px) {\n    md-card {\n        top: 0px;\n    }\n}"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = ".formIcons {\n    line-height: unset;\n}\n\n.fill-remaining-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\n.mainHeader {\n    top: 0px;\n    position: fixed;\n    z-index: 1000;\n}\n\n.langBar {\n    margin-top: 64px;\n    background-color: #EEEEEE;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center;\n    overflow: scroll;\n    height: 90px;\n}\n\n.langBtn {\n    color: white;\n    color: #616161;\n    margin: 5px;\n}\n\n.logo {\n    text-align: center;\n    margin: auto;\n    font-size: 30px;\n    font-weight: bold;\n    color: whitesmoke;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none\n}\n\n.center {\n    margin: auto;\n    text-align: center;\n}\n\nmd-select {\n    color: red;\n}\n\n.logo:hover {\n    color: white;\n}\n\n.footer {\n    opacity: .9;\n    display: block;\n    max-height: unset;\n    height: 150px;\n    width: 100%;\n    margin-top: 80px;\n    /*display: block;*/\n    /*position: relative;*/\n}\n\n.footerHead {\n    /*margin: auto;*/\n    font-size: 20px;\n    text-align: center;\n    color: white;\n    /*margin: auto;*/\n    margin-top: 80px;\n    margin-left: 10%;\n}\n\n.footerLinks {\n    margin-top: 80px;\n    color: white;\n    margin-right: 10%;\n}\n\n.footerLinks ul li a {\n    color: white;\n    font-size: 15px;\n    text-decoration: unset;\n}\n\n.footerLinks ul li {\n    list-style: none;\n}\n\n.copyright {\n    display: block;\n}\n\n.copyright p {\n    font-size: 15px;\n    padding: 0px;\n    margin: auto;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    .footer {\n        margin-top: 0;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    .footer {\n        margin-top: 0;\n    }\n}\n\n\n/*\nfor large screens*/\n\n@media (min-width: 768px) {\n    .footer {\n        margin-top: 100px;\n    }\n}\n\n\n/*\n@media (min-height: 10px) {\n.page-footer {\nmargin: 0px;\ntext-align: center;\n}\n}\n\n@media (min-height: 1000px) {\n.page-footer {\nmargin: 0px;\nposition: absolute;\nbottom: 0px;\ntext-align: center;\nwidth: 100%;\n}\n}*/"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = ".formIcons {\n    line-height: unset;\n}\n\n* {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mainHeader {\n    top: 0px;\n    position: fixed;\n    z-index: 1000;\n}\n\n.langBar {\n    margin-top: 64px;\n    background-color: #EEEEEE;\n    padding-left: 50px;\n    padding-right: 50px;\n    text-align: center;\n}\n\n.langBtn {\n    color: white;\n    color: #616161;\n    margin: 1px;\n}\n\n.logo {\n    text-align: center;\n    margin: auto;\n    font-size: 30px;\n    font-weight: bold;\n    color: whitesmoke;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none\n}\n\n.center {\n    margin: auto;\n    text-align: center;\n}\n\nmd-select {\n    color: red;\n}\n\n.logo:hover {\n    color: white;\n}\n\n.footer {\n    opacity: .9;\n    display: block;\n    max-height: unset;\n    height: 150px;\n    /*display: block;*/\n    /*position: relative;*/\n}\n\n.footerHead {\n    margin: auto;\n    font-size: 20px;\n    text-align: center;\n    color: white;\n}\n\n.footerLinks {\n    /*padding-left: 30%;*/\n    color: white;\n}\n\n.footerLinks ul li a {\n    color: white;\n    font-size: 15px;\n    text-decoration: unset;\n}\n\n.footerLinks ul li {\n    list-style: none;\n}\n\n.copyright {\n    display: block;\n}\n\n.copyright p {\n    font-size: 15px;\n    padding: 0px;\n    margin: auto;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {}\n\n\n/*\nfor large screens*/\n\n@media (min-width: 768px) {}\n\n\n/*\n@media (min-height: 10px) {\n.page-footer {\nmargin: 0px;\ntext-align: center;\n}\n}\n\n@media (min-height: 1000px) {\n.page-footer {\nmargin: 0px;\nposition: absolute;\nbottom: 0px;\ntext-align: center;\nwidth: 100%;\n}\n}*/"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 500px;\n}\n\n.formIcons {\n    padding-bottom: 30px;\n    color: gray;\n}\n\nform {\n    font-size: 17px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    md-card {\n        top: 56px;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    md-card {\n        top: 0px;\n    }\n}\n\n\n/*for large screens*/\n\n@media (min-width: 768px) {\n    md-card {\n        top: 0px;\n    }\n}"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 500px;\n}\n\n.formIcons {\n    padding-bottom: 30px;\n    color: gray;\n}\n\nform {\n    font-size: 17px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n}"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 500px;\n}\n\n.formIcons {\n    padding-bottom: 30px;\n    color: gray;\n}\n\nform {\n    font-size: 17px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    md-card {\n        top: 56px;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    md-card {\n        top: 0px;\n    }\n}\n\n\n/*for large screens*/\n\n@media (min-width: 768px) {\n    md-card {\n        top: 0px;\n    }\n}"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"loginStatus==true\">\n    <app-layout></app-layout>\n</div>\n<div *ngIf=\"loginStatus==false\">\n    <app-login-layout></app-login-layout>\n</div>-->\n\n<router-outlet></router-outlet>\n\n<!--<app-candidate-register></app-candidate-register>-->"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<!--main content goes here-->\n<md-grid-list cols=\"1\" rowHeight=\"200px\">\n    <md-grid-tile>\n        <md-card>\n            <p>\n                About us\n            </p>\n            <p>\n                Coming soon..\n            </p>\n\n        </md-card>\n    </md-grid-tile>\n</md-grid-list>"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<!--main content goes here-->\n<md-grid-list cols=\"1\" rowHeight=\"200px\">\n    <md-grid-tile>\n        <md-card>\n            <p>\n                Candidate Search page\n            </p>\n            <p>\n                Coming soon...\n            </p>\n\n        </md-card>\n    </md-grid-tile>\n</md-grid-list>"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "<md-grid-list cols=\"1\" rowHeight=\"200px\">\n    <md-grid-tile>\n        <md-card>\n            <p>\n                Dashboard\n            </p>\n            <p>\n                Coming soon..\n            </p>\n\n        </md-card>\n    </md-grid-tile>\n</md-grid-list>"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<!--main content goes here-->\n<md-grid-list cols=\"1\" rowHeight=\"200px\">\n    <md-grid-tile>\n        <md-card>\n            <p>\n                event-post works!\n            </p>\n            <p>\n                Coming soon..\n            </p>\n\n        </md-card>\n    </md-grid-tile>\n</md-grid-list>"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<md-grid-list cols=\"1\" rowHeight=\"200px\">\n    <md-grid-tile>\n        <md-card>\n            <p>\n                job-post works!\n            </p>\n            <p>\n                Coming soon..\n            </p>\n\n        </md-card>\n    </md-grid-tile>\n</md-grid-list>"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "<!--sidenav and toolbar with content-->\n<md-sidenav-container fullscreen [class.m2app-dark]=\"isDarkTheme\">\n\n    <!--sidenav starts here..-->\n    <md-sidenav #sidenav mode=\"over\" opened=\"false\">\n\n        <!--sidenav toobar-->\n        <md-toolbar color=\"primary\" class=\"toolbar\">\n            <b>Samarthya</b>\n        </md-toolbar>\n\n        <!--sidenav ites list-->\n        <md-nav-list>\n            <md-list-item *ngFor=\"let navItem of navList\" routerLink={{navItem.path}} routerLinkActive=\"active\" (click)=\"sidenav.toggle()\">\n                <i class=\"material-icons navIcon\">{{navItem.icon}}</i>\n                <p class=\"navItem\"> {{navItem.name}}</p>\n            </md-list-item>\n        </md-nav-list>\n    </md-sidenav>\n    <!--sidenav ends-->\n\n    <!--main appbar starts-->\n    <md-toolbar color=\"primary\" class=\"toolbar\">\n        <!--sidebar toggle button-->\n        <a md-icon-button (click)=\"sidenav.toggle()\" #myButton id=\"sidebarButton\">\n            <i class=\"material-icons\">menu</i>\n        </a>\n        <span><b class=\"headerLarge\">Samarthya Candidate</b></span>\n        <span><b class=\"headerSmall\">Samarthya</b></span>\n\n        <span class=\"fill-remaining-space\"></span>\n        <button md-button (click)=\"toggleTheme()\">TOGGLE DARK THEME</button>\n        <!--appbar buttons-->\n        <!--notification button-->\n        <a md-icon-button [mdMenuTriggerFor]=\"menuNotification\">\n            <i class=\"material-icons\">notifications_active</i>\n        </a>\n        <md-menu #menuNotification x-position=\"before\">\n            <md-list>\n                <md-list-item>\n                    <p md-line>No new Notification</p>\n                </md-list-item>\n            </md-list>\n        </md-menu>\n        <!--user account button-->\n        <a md-icon-button [mdMenuTriggerFor]=\"menuAccount\">\n            <i class=\"material-icons\">account_circle</i>\n        </a>\n        <md-menu #menuAccount x-position=\"before\">\n            <md-nav-list>\n                <md-list-item>\n                    <p md-line><b>User</b></p>\n                </md-list-item>\n                <md-list-item>\n                    <p md-line>Profile</p>\n                </md-list-item>\n                <md-list-item>\n                    <p md-line>Change Password</p>\n                </md-list-item>\n                <md-list-item>\n                    <p md-line (click)=\"logout()\">\n                        Log Out\n                    </p>\n                </md-list-item>\n            </md-nav-list>\n        </md-menu>\n    </md-toolbar>\n    <!--main appbar starts-->\n    <!--add the components tags here....-->\n    <!--main content ends here-->\n\n\n    <router-outlet></router-outlet>\n\n</md-sidenav-container>\n<!--sidenav and toolbar with content ends-->"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "<!--login Header-->\n<app-login-header></app-login-header>\n\n<!--Register card-->\n<md-grid-list cols=\"1\" rowHeight=\"1200\">\n    <md-grid-tile>\n        <!--card Start-->\n        <md-card class=\"loginCard\">\n            <md-card-title>Register</md-card-title>\n            <md-card-content>\n                <form [formGroup]=\"userForm\">\n\n                    <!--First Name-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                            <i class=\"material-icons formIcons\">perm_identity</i>\n                        </div>\n                        <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"fname\" id=\"fname\" required type=\"text\" class=\"validate\" placeholder=\"First Name\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('fname').hasError('required') && userForm.get('fname').touched\" class=\"errorStyle\">\n                                        First Name is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('fname').hasError('pattern')\" class=\"errorStyle\">\n                                        First Name is too small\n                                    </div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.fname\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Last Name-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                            <i class=\"material-icons formIcons\">perm_identity</i>\n                        </div>\n                        <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"lname\" required id=\"lname\" type=\"text\" class=\"validate\" placeholder=\"Last Name\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('lname').hasError('required') && userForm.get('lname').touched\" class=\"errorStyle\">\n                                        Last Name is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('lname').hasError('pattern')\" class=\"errorStyle\">\n                                        Last Name is too small\n                                    </div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.lname\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Gender-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"gender\">\n                        <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                            <i class=\"material-icons formIcons levelIcon\">wc</i>\n                        </div>\n                        <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\" class=\"full-width\">\n                            <md-radio-group formControlName=\"gender\">\n                                <md-radio-button value=\"male\">Male</md-radio-button>\n                                <md-radio-button value=\"female\">Female</md-radio-button>\n                            </md-radio-group>\n                        </div>\n                    </div>\n\n                    <!--Registration ID-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                            <i class=\"material-icons formIcons\">assignment_ind</i>\n                        </div>\n                        <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"regId\" id=\"regId\" required type=\"text\" class=\"validate\" placeholder=\"Registration Id\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('regId').hasError('required') && userForm.get('regId').touched\" class=\"errorStyle\">\n                                        Registration ID is required\n                                    </div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.regId\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Date of Birth-->\n                    <!--<div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <label for=\"\">asdasd</label>\n                            <md2-datepicker formControlName=\"dob\" [(ngModel)]=\"date\" class=\"full-width\">date</md2-datepicker>\n                        </div>\n                    </div>-->\n\n\n                    <!--Email-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                            <i class=\"material-icons formIcons\">mail</i>\n                        </div>\n                        <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"email\" id=\"email\" type=\"text\" class=\"validate\" value={{emailId}} placeholder=\"Email\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <!--<div *ngIf=\"userForm.get('aadhar').hasError('pattern')\" class=\"errorStyle\">Invaild Email</div>-->\n                                    <!--<app-control-messages [control]=\"userForm.controls.email\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Adhar-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                            <i class=\"material-icons formIcons\">chrome_reader_mode</i>\n                        </div>\n                        <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"aadhar\" id=\"aadhar\" type=\"text\" class=\"validate\" placeholder=\"Aadhar No.\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('aadhar').hasError('pattern')\" class=\"errorStyle\">Invaild Aadhar</div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.aadhar\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Mobile No-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                            <i class=\"material-icons formIcons\">call</i>\n                        </div>\n                        <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"mob\" id=\"mob\" type=\"text\" required class=\"validate\" placeholder=\"Mobile No.\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('mob').hasError('pattern')\" class=\"errorStyle\">Invaild Mobile</div>\n                                    <div *ngIf=\"userForm.get('mob').hasError('required') && userForm.get('mob').touched\" class=\"errorStyle\">\n                                        Mobile No. is required\n                                    </div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.mob\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--passowrd-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                            <i class=\"material-icons formIcons\">lock</i>\n                        </div>\n                        <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"password\" id=\"password\" type=\"password\" required class=\"validate\" #password (blur)=\"passwordValue(password.value)\" placeholder=\"Password\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('password').hasError('required') && userForm.get('password').touched\" class=\"errorStyle\">\n                                        Password is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('password').hasError('pattern')\" class=\"errorStyle\">\n                                        Invalid password. Password must be at least 6 characters long, and contain a number\n                                    </div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.password\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--confirm password-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                            <i class=\"material-icons formIcons\">lock</i>\n                        </div>\n                        <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"conPassword\" required id=\"conPassword\" type=\"password\" class=\"validate\" #conPassword (keyup)=\"conPasswordValue(conPassword.value)\" placeholder=\"Confirm Password\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('conPassword').hasError('required') && userForm.get('conPassword').touched\" class=\"errorStyle\">\n                                        Confirm Password is required\n                                    </div>\n                                    <div *ngIf=\"passwordMatchWarning\" class=\"errorStyle\">{{passwordMatchWarning}}</div>\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Profession-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n                        <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                            <i class=\"material-icons formIcons levelIcon\">layers</i>\n                        </div>\n                        <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                            <md-select placeholder=\"Profession\" aria-required=\"\" formControlName=\"profession\" class=\"full-width\">\n                                <md-option *ngFor=\"let pro of profession\" color=\"accent\" [value]=\"pro.value\">\n                                    {{ pro.name }}\n                                </md-option>\n                            </md-select>\n                        </div>\n                    </div>\n\n                    <!--location Pincode-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                            <i class=\"material-icons formIcons\">dialpad</i>\n                        </div>\n                        <div fxFlex>\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"pincode\" required id=\"pincode\" type=\"text\" class=\"validate\" placeholder=\"Pincode\" [(ngModel)]=\"pincode\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('pincode').hasError('pattern')\" class=\"errorStyle\">Invaild Pincode</div>\n                                    <div *ngIf=\"userForm.get('pincode').hasError('required') && userForm.get('pincode').touched\" class=\"errorStyle\">\n                                        Pincode is required\n                                    </div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.pincode\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                        <div fxFlex.gt-xs=\"25\" fxFlex.xs class=\"findAreaBtn\">\n                            <button md-raised-button color=\"primary\" (click)=\"getPincode()\">Search Location</button>\n                        </div>\n                    </div>\n\n                    <!--location area-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n                        <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                            <i class=\"material-icons formIcons levelIcon\">my_location</i>\n                        </div>\n                        <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                            <md-select formControlName=\"location\" placeholder=\"Select Area\" class=\"full-width\">\n                                <md-option *ngFor=\"let area of areaList\" [value]=\"area\">\n                                    {{ area }}\n                                </md-option>\n                            </md-select>\n                        </div>\n                    </div>\n                    <!--placementCenter-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n                        <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                            <i class=\"material-icons formIcons levelIcon\">person_pin_circle</i>\n                        </div>\n                        <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                            <md-select placeholder=\"Placement Center\" formControlName=\"placementCenter\" class=\"full-width\">\n                                <md-option *ngFor=\"let center of placementCenter\" [value]=\"center.value\">\n                                    {{ center.name }}\n                                </md-option>\n                            </md-select>\n                        </div>\n                    </div>\n\n                    <!--Register Button-->\n                    <div fxLayout=\"row\">\n                        <button md-raised-button color=\"accent\" class=\"full-width registerBtn\" type=\"submit\" (click)=\"onRegister()\" id=\"resetBtn\" [disabled]=\"!userForm.valid\">Register</button>\n                    </div>\n\n                </form>\n            </md-card-content>\n        </md-card>\n    </md-grid-tile>\n</md-grid-list>\n\n<!--footer-->\n<app-login-footer></app-login-footer>"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "<!--login Header-->\n<app-login-header></app-login-header>\n\n<!--login card-->\n<md-grid-list cols=\"1\" rowHeight=\"350px\">\n    <md-grid-tile>\n        <md-card class=\"loginCard\">\n            <md-card-title>Password Reset</md-card-title>\n            <md-card-content>\n                <form [formGroup]=\"userForm\" (ngSubmit)=\"onResetLink()\">\n\n                    <!--Email input-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">email</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"email\" id=\"email\" type=\"text\" class=\"validate\" placeholder=\"Email\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('email').hasError('required') && userForm.get('email').touched\" class=\"errorStyle\">\n                                        Email is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('email').hasError('pattern') && userForm.get('email')\" class=\"errorStyle\">\n                                        Invalid email\n                                    </div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.email\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Reset Password button-->\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"accent\" class=\"full-width\" [disabled]=\"!userForm.valid\">Send Reset Link</button>\n                        </div>\n                        <div fxFlex></div>\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"warn\" (click)=onBack() class=\"full-width\">Back</button>\n                        </div>\n                    </div>\n\n                </form>\n            </md-card-content>\n        </md-card>\n        <!--card-ends-->\n    </md-grid-tile>\n</md-grid-list>\n\n<!--footer-->\n<app-login-footer></app-login-footer>"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<!--footer starts-->\n<div class=\"langBar\" fxFlex fxHide.gt-xs>\n    <button *ngFor=\"let lang of languages\" title={{lang.name}} class=\"langBtn\" md-button>\n   <div> {{lang.nativeName}}</div>\n    </button>\n</div>\n<md-toolbar color=\"primary\" class=\"footer\">\n    <div class=\"footerHead\">\n        <h5>Samarthya</h5>\n    </div>\n    <span class=\"fill-remaining-space\"></span>\n    <div class=\"footerLinks\">\n        <ul>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">Samarthya Candidate</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">Samarthya Placement</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">FAQ</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">About Us</a></li>\n        </ul>\n    </div>\n\n</md-toolbar>\n<md-toolbar color=\"primary\" class=\"copyright\">\n    <p> © Copyright Samarthya 2017</p>\n</md-toolbar>"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "<!--Header start-->\n<md-toolbar color=\"primary\" class=\"mainHeader\">\n    <!--<a href=\"/\">-->\n    <p class=\"logo\">Samarthya</p>\n    <!--</a>-->\n</md-toolbar>\n<div class=\"langBar\" fxFlex fxHide.xs>\n    <button *ngFor=\"let lang of languages\" title={{lang.name}} class=\"langBtn\" md-button>\n   <div> {{lang.nativeName}}</div>\n    </button>\n</div>"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<!--login Header-->\n<app-login-header></app-login-header>\n\n<!--login card-->\n<div *ngIf=\"showProgress\" class=\"progressBar\">\n    <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n</div>\n<md-grid-list cols=\"1\" rowHeight=\"600px\">\n    <md-grid-tile>\n        <md-card class=\"loginCard\">\n            <md-card-title>LOGIN</md-card-title>\n            <md-card-content>\n\n                <form [formGroup]=\"userForm\" (ngSubmit)=\"login()\">\n                    <!--Email input-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">mail</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"email\" type=\"text\" class=\"validate\" placeholder=\"Email\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('email').hasError('required') && userForm.get('email').touched\" class=\"errorStyle\">\n                                        Email is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('email').hasError('pattern') && userForm.get('email')\" class=\"errorStyle\">\n                                        Invalid email\n                                    </div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.email\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--passowrd input-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">lock</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput id=\"password\" type=\"password\" class=\"validate\" formControlName=\"password\" placeholder=\"Password\">\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('password').hasError('required') && userForm.get('password').touched\" class=\"errorStyle\">\n                                        Password is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('password').hasError('pattern')\" class=\"errorStyle\">\n                                        Invalid password. Password must be at least 6 characters long, and contain a number\n                                    </div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.password\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--sign in button-->\n                    <div fxLayout=\"row\">\n                        <div fxFlex=\"100\">\n                            <button md-raised-button color=\"accent\" type=\"submit\" class=\"full-width largeBtn\" [disabled]=\"!userForm.valid\">Sign in</button>\n                        </div>\n                    </div>\n                </form>\n\n                <!--forgot Password button-->\n                <div fxLayout=\"row\">\n                    <div fxFlex=\"100\" fxLayoutAlign=\"center center\">\n                        <button md-button color=\"primary\" (click)=\"forgotPassword()\" class=\"\">Forgot Password ?</button>\n                    </div>\n                </div>\n\n                <!--create account button-->\n                <div fxLayout=\"row\">\n                    <div fxFlex=\"100\">\n                        <button md-raised-button color=\"primary\" (click)=\"verifyEmail()\" class=\"full-width largeBtn\">Create Account</button>\n                    </div>\n                </div>\n\n                <!--social media button-->\n                <!--<div fxLayout.gt-sm=\"row\" fxLayout.sm=\"column\" fxHide.sm>-->\n                <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                    <div fxFlex=\"48\">\n                        <a href=\"http://localhost:8080/auth/google/\" md-raised-button class=\"full-width largeBtn googleBtn\">\n                            <i class=\"zmdi zmdi-google zmdi-hc-lg\"></i> Login with Google\n                        </a>\n                    </div>\n                    <div fxFlex></div>\n                    <div fxFlex=\"48\">\n                        <a href=\"http://localhost:8080/auth/facebook\" md-raised-button class=\"full-width largeBtn fbBtn\">\n                            <i class=\"zmdi zmdi-facebook-box zmdi-hc-lg\"></i> Login with Facebook\n                        </a>\n                    </div>\n                </div>\n            </md-card-content>\n        </md-card>\n        <!--card-ends-->\n    </md-grid-tile>\n</md-grid-list>\n\n<!--footer-->\n<app-login-footer></app-login-footer>"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<!--login Header-->\n<app-login-header></app-login-header>\n\n<!--Reset Password card-->\n<md-grid-list cols=\"1\" rowHeight=\"600\">\n    <md-grid-tile>\n        <!--card Start-->\n        <md-card class=\"loginCard blue-grey-text\">\n            <md-card-title>Password Reset</md-card-title>\n            <md-card-content>\n                <form class=\"col s12\" [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n\n                    <!--Email-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">email</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"email\" id=\"email\" type=\"text\" class=\"validate\" value={{emailId}} placeholder=\"Email\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <!--<app-control-messages [control]=\"userForm.controls.email\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--passowrd-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">lock</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"password\" id=\"password\" type=\"password\" class=\"validate\" #password (blur)=\"passwordValue(password.value)\" placeholder=\"Password\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('password').hasError('required') && userForm.get('password').touched\" class=\"errorStyle\">\n                                        Password is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('password').hasError('pattern')\" class=\"errorStyle\">\n                                        Invalid password. Password must be at least 6 characters long, and contain a number\n                                    </div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.password\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--confirm password-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">lock</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"conPassword\" id=\"conPassword\" type=\"password\" class=\"validate\" #conPassword (keyup)=\"conPasswordValue(conPassword.value,password.value)\" placeholder=\"Confirm Password\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('conPassword').hasError('required') && userForm.get('conPassword').touched\" class=\"errorStyle\">\n                                        Confirm Password is required\n                                    </div>\n                                    <div *ngIf=\"passwordMatchWarning\" class=\"errorStyle\">{{passwordMatchWarning}}</div>\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Reset Button-->\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"accent\" class=\"full-width\" type=\"submit\" id=\"resetBtn\" [disabled]=\"!userForm.valid\">Reset</button>\n                        </div>\n                        <div fxFlex></div>\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"warn\" (click)=onBack() class=\"full-width\">Back</button>\n                        </div>\n                    </div>\n                </form>\n            </md-card-content>\n        </md-card>\n    </md-grid-tile>\n</md-grid-list>\n\n<!--footer-->\n<app-login-footer></app-login-footer>"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<!--login Header-->\n<app-login-header></app-login-header>\n\n<!--login card-->\n<md-grid-list cols=\"1\" rowHeight=\"350px\">\n    <md-grid-tile>\n        <md-card class=\"loginCard\">\n            <md-card-title>Verify Email</md-card-title>\n            <md-card-content>\n                <form class=\"col s12\" [formGroup]=\"userForm\" (ngSubmit)=\"onVerifyLink()\">\n\n                    <!--Email input-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">email</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"email\" id=\"email\" type=\"text\" class=\"validate\" placeholder=\"Email\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('email').hasError('required') && userForm.get('email').touched\" class=\"errorStyle\">\n                                        Email is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('email').hasError('pattern') && userForm.get('email')\" class=\"errorStyle\">\n                                        Invalid email\n                                    </div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.email\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Reset in button-->\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"accent\" class=\"full-width\" type=\"submit\" [disabled]=\"!userForm.valid\">Verify</button>\n                        </div>\n                        <div fxFlex></div>\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"warn\" class=\"full-width\" (click)=onBack()>Back</button>\n                        </div>\n                    </div>\n                </form>\n            </md-card-content>\n        </md-card>\n        <!--card-ends-->\n    </md-grid-tile>\n</md-grid-list>\n\n<!--footer-->\n<app-login-footer></app-login-footer>"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<!--sidenav and toolbar with content-->\n<md-sidenav-container fullscreen>\n    <app-layout></app-layout>\n\n    <!--main content goes here-->\n    <md-grid-list cols=\"1\" rowHeight=\"200px\">\n        <md-grid-tile>\n            <md-card>\n                <p>\n                    Successfully logged out\n                </p>\n                <p>\n                    Coming soon..\n                </p>\n\n            </md-card>\n        </md-grid-tile>\n    </md-grid-list>\n\n</md-sidenav-container>\n<!--sidenav and toolbar with content ends-->"

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = (function () {
    // public linksend: any = {};
    // public data2 :LoginComponent  ;
    function EmailService(_http) {
        this._http = _http;
        this._url = 'http://localhost:3000/email';
    }
    EmailService.prototype.postdata = function (mailObj) {
        // var data1=JSON.stringify({to :"sheenamnarula1993@yahoo.com", subject:"abc", text:"hello" });
        var mailObjString = JSON.stringify(mailObj);
        var params = 'json=' + mailObjString;
        // const res = '';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._http.post(this._url, params, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    EmailService.prototype.getRegister = function () {
        // console.log(this.linksend.link+"link aa gya");
        return this._http.get('http://localhost:3000/email/verifiedmail')
            .map(function (response) {
            return response.json();
        });
    };
    EmailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], EmailService);
    return EmailService;
    var _a;
}());
//# sourceMappingURL=/home/divesh/workspace/Angular.io/Samarthya/nodeTesting/src/email.service.js.map

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(526);


/***/ })

},[875]);
//# sourceMappingURL=main.bundle.map