function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./home/home.module": "./src/app/home/home.module.ts",
      "./student/student.module": "./src/app/student/student.module.ts"
    };

    function webpackAsyncContext(req) {
      return Promise.resolve().then(function () {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        var id = map[req];
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: './home/home.module#HomeModule'
    }, {
      path: 'students',
      loadChildren: './student/student.module#StudentModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'school-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 12,
      vars: 0,
      consts: [["color", "primary"], ["mat-button", "", "routerLink", "/"], ["mat-button", "", "routerLink", "/students/student-list"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ACVM, Paithan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Students");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Teachers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _student_student_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./student/student.module */
    "./src/app/student/student.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _student_student_module__WEBPACK_IMPORTED_MODULE_4__["StudentModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _student_student_module__WEBPACK_IMPORTED_MODULE_4__["StudentModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _student_student_module__WEBPACK_IMPORTED_MODULE_4__["StudentModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home/home.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home/home.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home/home.component.ts ***!
    \*********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function HomeComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title Goes Here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title Goes Here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Consectetur tortor volutpat pretium.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["src", "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80", "alt", "Angular Carousel 1"], [1, "carousel-caption"], ["src", "https://images.unsplash.com/photo-1459909633680-206dc5c67abb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80", "alt", "Angular Carousel 2"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_template_2_Template, 7, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ng_template_3_Template, 7, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]],
      styles: ["ngb-carousel[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 50px auto;\n}\n\nngb-carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  display: flex !important;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  z-index: -1;\n}\n\n.carousel-item.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  z-index: 10;\n}\n\n.carousel-control-prev[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n\n.carousel-control-next[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n\n.carousel-indicators[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tyYXdsZXIvRG9jdW1lbnRzL3dvcmtzcGFjZS1zcHJpbmctdG9vbC1zdWl0ZS00LTQuNy4wLlJFTEVBU0UvVUkvc2Nob29sLW1hbmFnZW1lbnQtdWkvc3JjL2FwcC9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0csV0FBQTtBQ0NIOztBREdBO0VBQ0csV0FBQTtBQ0FIOztBREdBO0VBQ0UsV0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ2ItY2Fyb3VzZWwge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxubmdiLWNhcm91c2VsIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uY2Fyb3VzZWwtaW5uZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjJzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IDEuMnM7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uY2Fyb3VzZWwtaXRlbS5hY3RpdmV7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgIHotaW5kZXg6IDIwO1xufVxuXG5cbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgei1pbmRleDogMjA7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3Jze1xuICB6LWluZGV4OiAyMDtcbn1cbiIsIm5nYi1jYXJvdXNlbCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG5uZ2ItY2Fyb3VzZWwgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uY2Fyb3VzZWwtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuMnMgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgMS4ycztcbiAgei1pbmRleDogLTE7XG59XG5cbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgei1pbmRleDogMjA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMge1xuICB6LWluZGV4OiAyMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/add-student-dialog/add-student-dialog.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/student/add-student-dialog/add-student-dialog.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AddStudentDialogComponent */

  /***/
  function srcAppStudentAddStudentDialogAddStudentDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddStudentDialogComponent", function () {
      return AddStudentDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _service_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/student.service */
    "./src/app/student/service/student.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var AddStudentDialogComponent = /*#__PURE__*/function () {
      function AddStudentDialogComponent(formBuilder, studentService, dialogRef) {
        _classCallCheck(this, AddStudentDialogComponent);

        this.formBuilder = formBuilder;
        this.studentService = studentService;
        this.dialogRef = dialogRef;
        this.isEdit = false;
        this.configData = this.dialogRef._containerInstance._config.data ? this.dialogRef._containerInstance._config.data : null;
        this.isEdit = this.configData ? true : false;
        this.maxDate = new Date();
      }

      _createClass(AddStudentDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addStudentForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            rollNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            standard: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            address: [''],
            dateOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });

          if (this.configData) {
            if (this.configData.name) {
              this.addStudentForm.controls['name'].setValue(this.configData.name);
              this.addStudentForm.controls['rollNo'].setValue(this.configData.rollNo);
              this.addStudentForm.controls['standard'].setValue(this.configData.standard);
              this.addStudentForm.controls['address'].setValue(this.configData.address);
              this.addStudentForm.controls['dateOfBirth'].setValue(this.configData.dateOfBirth);
              this.addStudentForm.controls['phone'].setValue(this.configData.phone);
            }
          }
        }
      }, {
        key: "saveStudent",
        value: function saveStudent() {
          var _this = this;

          if (!this.addStudentForm.valid) {
            return;
          } // this.isFormSubmit = true;


          var studentDataObj = this.addStudentForm.getRawValue();

          if (this.isEdit) {
            studentDataObj.id = this.configData.id;
            this.studentService.updateStudent(studentDataObj).subscribe(function (response) {
              if (response['id']) {
                // this.toastr.success('Component updated successfully.', 'Success');
                _this.dialogRef.close({
                  isRefreshList: true
                });
              } // this.isFormSubmit = false;

            }, function (error) {// this.isFormSubmit = false;
              // this.toastr.error('Internal server error.', 'Error');
            });
          } else {
            this.studentService.addStudent(studentDataObj).subscribe(function (response) {
              if (response['id']) {
                // this.toastr.success('Component added successfully.', 'Success');
                _this.dialogRef.close({
                  isRefreshList: true
                });
              } // this.isFormSubmit = false;

            }, function (error) {// this.toastr.error('Internal server error.', 'Error');
              // this.isFormSubmit = false;
            });
          }
        }
      }]);

      return AddStudentDialogComponent;
    }();

    AddStudentDialogComponent.ɵfac = function AddStudentDialogComponent_Factory(t) {
      return new (t || AddStudentDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]));
    };

    AddStudentDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddStudentDialogComponent,
      selectors: [["app-add-student-dialog"]],
      decls: 45,
      vars: 4,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["cdkScrollable", "", 1, "autocomplete-scroll", 3, "formGroup", "ngSubmit"], [1, "row", "margin"], [1, "col-sm-12", "mt-2"], ["matInput", "", "formControlName", "name", "required", ""], ["matInput", "", "formControlName", "dateOfBirth", "required", "", 3, "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "type", "number", "formControlName", "rollNo", "required", ""], ["matInput", "", "type", "number", "formControlName", "standard", "required", ""], ["matInput", "", "formControlName", "phone", "required", ""], ["matInput", "", "formControlName", "address"], [1, "row", "mx-0", "py-4"], [1, "btn-wrap", "d-flex", "align-items-center"], ["type", "submit", "mat-flat-button", "", "color", "primary", "mat-button", "", 1, "mr-3"], [1, "px-5", "contact-bottom-button"], ["mat-stroked-button", "", "mat-dialog-close", "", "color", "warn", 1, "ml-4"]],
      template: function AddStudentDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddStudentDialogComponent_Template_form_ngSubmit_3_listener() {
            return ctx.saveStudent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Student Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date Of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-datepicker-toggle", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-datepicker", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Roll Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Standard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "SAVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "CANCEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addStudentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx.maxDate)("matDatepicker", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerInput"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerToggle"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]],
      styles: ["input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tyYXdsZXIvRG9jdW1lbnRzL3dvcmtzcGFjZS1zcHJpbmctdG9vbC1zdWl0ZS00LTQuNy4wLlJFTEVBU0UvVUkvc2Nob29sLW1hbmFnZW1lbnQtdWkvc3JjL2FwcC9zdHVkZW50L2FkZC1zdHVkZW50LWRpYWxvZy9hZGQtc3R1ZGVudC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0dWRlbnQvYWRkLXN0dWRlbnQtZGlhbG9nL2FkZC1zdHVkZW50LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvYWRkLXN0dWRlbnQtZGlhbG9nL2FkZC1zdHVkZW50LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCJpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddStudentDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-student-dialog',
          templateUrl: './add-student-dialog.component.html',
          styleUrls: ['./add-student-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _service_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/service/student.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/student/service/student.service.ts ***!
    \****************************************************/

  /*! exports provided: StudentService */

  /***/
  function srcAppStudentServiceStudentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentService", function () {
      return StudentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var StudentAPIEndPoint = {
      add: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api + '/students',
      update: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api + '/students',
      getAll: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api + '/students',
      "delete": src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api + '/students/'
    };

    var StudentService = /*#__PURE__*/function () {
      function StudentService(http) {
        _classCallCheck(this, StudentService);

        this.http = http;
      }

      _createClass(StudentService, [{
        key: "addStudent",
        value: function addStudent(studentData) {
          return this.http.post(StudentAPIEndPoint.add, studentData);
        }
      }, {
        key: "updateStudent",
        value: function updateStudent(studentData) {
          return this.http.put(StudentAPIEndPoint.update, studentData);
        }
      }, {
        key: "getAllStudents",
        value: function getAllStudents() {
          return this.http.get(StudentAPIEndPoint.getAll);
        }
      }, {
        key: "deleteStudent",
        value: function deleteStudent(studentId) {
          return this.http["delete"](StudentAPIEndPoint["delete"] + studentId);
        }
      }]);

      return StudentService;
    }();

    StudentService.ɵfac = function StudentService_Factory(t) {
      return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StudentService,
      factory: StudentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/student-list/student-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/student/student-list/student-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: StudentListComponent */

  /***/
  function srcAppStudentStudentListStudentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentListComponent", function () {
      return StudentListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/collections.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _add_student_dialog_add_student_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../add-student-dialog/add-student-dialog.component */
    "./src/app/student/add-student-dialog/add-student-dialog.component.ts");
    /* harmony import */


    var _service_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/student.service */
    "./src/app/student/service/student.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StudentListComponent_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.editStudent();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentListComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_button_14_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.deleteStudent();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentListComponent_th_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StudentListComponent_th_18_Template_mat_checkbox_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return $event ? ctx_r23.masterToggle() : null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r3.selection.hasValue() && ctx_r3.isAllSelected())("indeterminate", ctx_r3.selection.hasValue() && !ctx_r3.isAllSelected())("aria-label", ctx_r3.checkboxLabel());
      }
    }

    function StudentListComponent_td_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_td_19_Template_mat_checkbox_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          return $event.stopPropagation();
        })("change", function StudentListComponent_td_19_Template_mat_checkbox_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var row_r25 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return $event ? ctx_r28.selection.toggle(row_r25) : null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r25 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4.selection.isSelected(row_r25))("aria-label", ctx_r4.checkboxLabel(row_r25));
      }
    }

    function StudentListComponent_th_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Roll No. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentListComponent_td_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.rollNo, " ");
      }
    }

    function StudentListComponent_th_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentListComponent_td_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r30.name, " ");
      }
    }

    function StudentListComponent_th_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Standard ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentListComponent_td_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31.standard, " ");
      }
    }

    function StudentListComponent_th_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentListComponent_td_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r32.address, " ");
      }
    }

    function StudentListComponent_th_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date Of Birth ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentListComponent_td_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r33.dateOfBirth, " ");
      }
    }

    function StudentListComponent_th_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StudentListComponent_td_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r34.phone, " ");
      }
    }

    function StudentListComponent_tr_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
      }
    }

    function StudentListComponent_tr_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_tr_39_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var row_r35 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.selection.toggle(row_r35);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var StudentListComponent = /*#__PURE__*/function () {
      function StudentListComponent(studentService, dialog) {
        _classCallCheck(this, StudentListComponent);

        this.studentService = studentService;
        this.dialog = dialog;
        this.displayedColumns = ['select', 'rollNo', 'name', 'standard', 'address', 'dateOfBirth', 'phone'];
        this.dataSource = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        this.requestHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json'
        });
        this.getAllStudents();
      }

      _createClass(StudentListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.getAllStudents();
        }
        /** Whether the number of selected elements matches the total number of rows. */

      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.length;
          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this2 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.forEach(function (row) {
            return _this2.selection.select(row);
          });
        }
        /** The label for the checkbox on the passed row */

      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select', " row ").concat(row.position + 1);
        }
      }, {
        key: "getAllStudents",
        value: function getAllStudents() {
          var _this3 = this;

          this.selection.clear();
          this.studentService.getAllStudents().subscribe(function (response) {
            if (response) {
              _this3.dataSource = response;
            } else {
              _this3.dataSource = [];
            }
          }, function (error) {
            _this3.dataSource = [];
            console.log(error);
          });
        }
      }, {
        key: "deleteStudent",
        value: function deleteStudent(student) {
          var _this4 = this;

          var studentIdArr = [];
          var id = '';

          if (!student) {
            this.selection.selected.forEach(function (row) {
              studentIdArr.push({
                id: row['id']
              });
              id = row['id'];
            });
          } else {
            studentIdArr.push({
              componentId: student['id']
            });
          } // const options = {
          //     headers: this.requestHeader,
          //     body: studentIdArr,
          // };


          this.studentService.deleteStudent(id).subscribe(function (response) {
            // this.toastr.success('Component deleted successfully.', 'Success');
            _this4.getAllStudents();
          }, function (error) {
            console.log(error); // this.toastr.error('Internal server error.', 'Error');
          });
        }
      }, {
        key: "addStudent",
        value: function addStudent(student) {
          var _this5 = this;

          var dialogRef = this.dialog.open(_add_student_dialog_add_student_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddStudentDialogComponent"], {
            height: '100vh',
            width: '25%',
            position: {
              top: '0',
              right: '0'
            },
            data: student
          });
          dialogRef.beforeClosed().subscribe(function (data) {
            if (data && data.isRefreshList) {
              _this5.getAllStudents();
            }
          });
        }
      }, {
        key: "editStudent",
        value: function editStudent(student) {
          if (!student) {
            student = this.selection.selected[0];
          }

          this.addStudent(student);
        }
      }]);

      return StudentListComponent;
    }();

    StudentListComponent.ɵfac = function StudentListComponent_Factory(t) {
      return new (t || StudentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    StudentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentListComponent,
      selectors: [["app-student-list"]],
      decls: 40,
      vars: 5,
      consts: [[1, "table-content"], [1, "toolbar-wrap"], [1, "breadcrump-name-wrap"], [1, "d-flex"], [2, "padding-top", "15px"], [1, "btn-wrap"], ["mat-button", "", 1, "pull-right", "mat-flat-button", "text-uppercase", "mat-primary", 2, "margin-top", "15px", 3, "click"], ["color", "white"], [1, "d-flex", "mb-2"], ["mat-button", "", "class", "pr-2 pl-2 menu-btn", 3, "click", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "rollNo"], ["matColumnDef", "name"], ["matColumnDef", "standard"], ["matColumnDef", "address"], ["matColumnDef", "dateOfBirth"], ["matColumnDef", "phone"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-button", "", 1, "pr-2", "pl-2", "menu-btn", 3, "click"], [1, "mr-1", "size-action-icon"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]],
      template: function StudentListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Students List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentListComponent_Template_button_click_7_listener() {
            return ctx.addStudent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StudentListComponent_button_13_Template, 4, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StudentListComponent_button_14_Template, 4, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, StudentListComponent_th_18_Template, 2, 3, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, StudentListComponent_td_19_Template, 2, 2, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, StudentListComponent_th_21_Template, 2, 0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, StudentListComponent_td_22_Template, 2, 1, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, StudentListComponent_th_24_Template, 2, 0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, StudentListComponent_td_25_Template, 2, 1, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, StudentListComponent_th_27_Template, 2, 0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, StudentListComponent_td_28_Template, 2, 1, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, StudentListComponent_th_30_Template, 2, 0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, StudentListComponent_td_31_Template, 2, 1, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, StudentListComponent_th_33_Template, 2, 0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, StudentListComponent_td_34_Template, 2, 1, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, StudentListComponent_th_36_Template, 2, 0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, StudentListComponent_td_37_Template, 2, 1, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, StudentListComponent_tr_38_Template, 1, 0, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, StudentListComponent_tr_39_Template, 1, 0, "tr", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selection.selected.length == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selection.selected.length == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRow"]],
      styles: [".table-content[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  margin-right: 50px;\n}\n\n.toolbar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\ntable[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:first-of-type {\n  padding-right: 15px;\n  padding-left: 12px;\n  max-width: 45px;\n}\n\ntable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\ntable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]:first-of-type {\n  padding-right: 15px;\n  padding-left: 12px;\n  max-width: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tyYXdsZXIvRG9jdW1lbnRzL3dvcmtzcGFjZS1zcHJpbmctdG9vbC1zdWl0ZS00LTQuNy4wLlJFTEVBU0UvVUkvc2Nob29sLW1hbmFnZW1lbnQtdWkvc3JjL2FwcC9zdHVkZW50L3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDRSw4QkFBQTtBQ0NKOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRERJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHTjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURLSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi50b29sYmFyLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgLm1hdC1jZWxsIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgICBtYXgtd2lkdGg6IDQ1cHg7XG4gICAgfVxuXG4gICAgLy8gJjpsYXN0LW9mLXR5cGUge1xuICAgIC8vICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICAvLyAgIG1heC13aWR0aDogNTBweDtcbiAgICAvLyB9XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgICBtYXgtd2lkdGg6IDQ1cHg7XG4gICAgfVxuXG4gICAgLy8gJjpsYXN0LW9mLXR5cGUge1xuICAgIC8vICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICAvLyAgIG1heC13aWR0aDogNTBweDtcbiAgICAvLyB9XG4gIH1cbn1cbiIsIi50YWJsZS1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLnRvb2xiYXItd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlIC5tYXQtY2VsbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG50YWJsZSAubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgbWF4LXdpZHRoOiA0NXB4O1xufVxudGFibGUgLm1hdC1oZWFkZXItY2VsbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG50YWJsZSAubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIG1heC13aWR0aDogNDVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-list',
          templateUrl: './student-list.component.html',
          styleUrls: ['./student-list.component.scss']
        }]
      }], function () {
        return [{
          type: _service_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]
        }, {
          type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/student/student.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/student/student.module.ts ***!
    \*******************************************/

  /*! exports provided: StudentModule */

  /***/
  function srcAppStudentStudentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentModule", function () {
      return StudentModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-list/student-list.component */
    "./src/app/student/student-list/student-list.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _add_student_dialog_add_student_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-student-dialog/add-student-dialog.component */
    "./src/app/student/add-student-dialog/add-student-dialog.component.ts");

    var routes = [{
      path: 'student-list',
      component: _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_3__["StudentListComponent"]
    }];

    var StudentModule = function StudentModule() {
      _classCallCheck(this, StudentModule);
    };

    StudentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StudentModule
    });
    StudentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StudentModule_Factory(t) {
        return new (t || StudentModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentModule, {
        declarations: [_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_3__["StudentListComponent"], _add_student_dialog_add_student_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddStudentDialogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_3__["StudentListComponent"], _add_student_dialog_add_student_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddStudentDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: true,
      api: 'https://school-management-01.herokuapp.com/school/'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/krawler/Documents/workspace-spring-tool-suite-4-4.7.0.RELEASE/UI/school-management-ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map