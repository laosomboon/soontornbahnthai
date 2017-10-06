webpackJsonpac__name_([1],{

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(117);



var MenuComponent = (function () {
    function MenuComponent(route) {
        this.route = route;
        this.route.params.subscribe(function (params) {
            console.log(params);
            if (params['id']) {
                console.log(params['id'] + '>>>>>>');
            }
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
        console.log('hello `Menu` component');
    };
    return MenuComponent;
}());
MenuComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'menu',
        template: "\n    <div id=\"Container\">\n      <div class=\"mix category-1 menu-restaurant\" data-myorder=\"2\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">Food Item Name</a>\n                        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">$20.99</span>\n                      </span>\n        <span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n      </div>\n      <div class=\"mix category-1 menu-restaurant\" data-myorder=\"2\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">Food Item Name</a>\n                        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">$20.99</span>\n                      </span>\n        <span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n      </div>\n      <div class=\"mix category-1 menu-restaurant\" data-myorder=\"2\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">Food Item Name</a>\n                        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">$20.99</span>\n                      </span>\n        <span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n      </div>\n      <div class=\"mix category-1 menu-restaurant\" data-myorder=\"2\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">Food Item Name</a>\n                        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">$20.99</span>\n                      </span>\n        <span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n      </div>\n      <div class=\"mix category-2 menu-restaurant\" data-myorder=\"2\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">Food Item Name</a>\n                        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">$20.99</span>\n                      </span>\n        <span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n      </div>\n      <div class=\"mix category-2 menu-restaurant\" data-myorder=\"2\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">Food Item Name</a>\n                        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">$20.99</span>\n                      </span>\n        <span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n      </div>\n      <div class=\"mix category-2 menu-restaurant\" data-myorder=\"2\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">Food Item Name</a>\n                        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">$20.99</span>\n                      </span>\n        <span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n      </div>\n      <div class=\"mix category-2 menu-restaurant\" data-myorder=\"2\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">Food Item Name</a>\n                        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">$20.99</span>\n                      </span>\n        <span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n      </div>\n      <div class=\"mix category-3 menu-restaurant\" data-myorder=\"2\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">Food Item Name</a>\n                        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">$20.99</span>\n                      </span>\n        <span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n      </div>\n      <div class=\"mix category-3 menu-restaurant\" data-myorder=\"2\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">Food Item Name</a>\n                        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">$20.99</span>\n                      </span>\n        <span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n      </div>\n      <div class=\"mix category-3 menu-restaurant\" data-myorder=\"2\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">Food Item Name</a>\n                        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">$20.99</span>\n                      </span>\n        <span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n      </div>\n      <div class=\"mix category-3 menu-restaurant\" data-myorder=\"2\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title\" href=\"#\" data-meal-img=\"assets/img/restaurant/rib.jpg\">Food Item Name</a>\n                        <span style=\"left: 166px; right: 44px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">$20.99</span>\n                      </span>\n        <span class=\"menu-subtitle\">Neque porro quisquam est qui dolorem</span>\n      </div>\n    </div>\n    <!--/ menu -->\n  <router-outlet></router-outlet>\n",
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
], MenuComponent);



/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_module__ = __webpack_require__(393);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return __WEBPACK_IMPORTED_MODULE_0__menu_module__["a"]; });



/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_routes__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_component__ = __webpack_require__(389);







var MenuModule = (function () {
    function MenuModule() {
    }
    return MenuModule;
}());
MenuModule.routes = __WEBPACK_IMPORTED_MODULE_5__menu_routes__["a" /* routes */];
MenuModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__menu_component__["a" /* MenuComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__menu_routes__["a" /* routes */]),
        ],
    })
], MenuModule);



/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_component__ = __webpack_require__(389);

var routes = [
    { path: '', redirectTo: 'menu' },
    { path: 'menu/:id', component: __WEBPACK_IMPORTED_MODULE_0__menu_component__["a" /* MenuComponent */] },
];


/***/ })

});
//# sourceMappingURL=1.chunk.js.map