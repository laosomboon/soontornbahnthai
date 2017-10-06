webpackJsonpac__name_([0],{

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_module__ = __webpack_require__(390);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return __WEBPACK_IMPORTED_MODULE_0__home_module__["a"]; });



/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_menu_model__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(205);




// for database

var HomeComponent = (function () {
    function HomeComponent(route, router, db) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.db = db;
        // public cate: AngularFireList<any>;
        this.catename = "";
        this.menulist = new Array();
        var subscriber = this.route.params
            .subscribe(function (params) {
            if (params['id']) {
                _this.db.list('/allmenus', function (ref) { return ref.orderByChild('category').equalTo(params['id']); })
                    .valueChanges()
                    .subscribe(function (data) {
                    _this.menulist = _this.buildMenu(data[0]['menus']);
                });
            }
        });
        // setTimeout(function () {
        //   subscriber.unsubscribe();
        //   console.log("unscription done!!");
        // },5000);
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.addItem = function (newName) {
        this.itemsRef.push({ text: newName });
    };
    HomeComponent.prototype.updateItem = function (key, newText) {
        this.itemsRef.update(key, { text: newText });
    };
    HomeComponent.prototype.deleteItem = function (key) {
        this.itemsRef.remove(key);
    };
    HomeComponent.prototype.deleteEverything = function () {
        this.itemsRef.remove();
    };
    HomeComponent.prototype.buildMenu = function (menus) {
        var menuArr = new Array();
        menus.forEach(function (o) {
            var menu = new __WEBPACK_IMPORTED_MODULE_3__models_menu_model__["a" /* Menu */](o['burlington'], o['oakville'], o['thaismile'], o['description'], o['image'], o['name'], o['thainame'], o['spice_level']);
            menuArr.push(menu);
        });
        return menuArr;
    };
    return HomeComponent;
}());
HomeComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'home',
        template: "    \n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center marb-35\">\n            <h1 class=\"header-h\">Menu List</h1>\n            <!--<p class=\"header-p\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy-->\n              <!--<br>nibh euismod tincidunt ut laoreet dolore magna aliquam. </p>-->\n          </div>\n          <div class=\"col-md-12  text-center gallery-trigger\">\n            <ul>\n              <li><a class=\"filter\" [routerLink]=\" ['/home', 'Lunch Special'] \">Launch Specials</a></li>\n              <li><a class=\"filter\" [routerLink]=\" ['/home', 'Appetizer'] \">Appetizers</a></li>\n              <li><a class=\"filter\" [routerLink]=\" ['/home', 'Soup'] \">Soups</a></li>\n              <li><a class=\"filter\" [routerLink]=\" ['/home', 'Thai Salad'] \">Thai Salad</a></li>\n              <li><a class=\"filter\" [routerLink]=\" ['/home', 'Thai curries'] \">Thai curries</a></li>\n              <li><a class=\"filter\" [routerLink]=\" ['/home', 'Stir-fried Dish'] \">Stir-fired Dishes</a></li>\n              <li><a class=\"filter\" [routerLink]=\" ['/home', 'Fish & Seafood'] \">Seafood</a></li>\n              <li><a class=\"filter\" [routerLink]=\" ['/home', 'Barbecue'] \">Barbecue</a></li>\n              <li><a class=\"filter\" [routerLink]=\" ['/home', 'Vegetable'] \">Vegetable</a></li>\n              <li><a class=\"filter\" [routerLink]=\" ['/home', 'Noodle Dish'] \">Noodle Dishes</a></li>\n              <li><a class=\"filter\" [routerLink]=\" ['/home', 'Rice Dish'] \">Rice Dishes</a></li>\n              <li><a class=\"filter\" [routerLink]=\" ['/home', 'Thai Dessert'] \">Thai Desserts</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div id=\"Container\" *ngFor=\"let menu of menulist\">\n        <div class=\"menu-restaurant col-xs-12 col-sm-6\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title col-xs-11\">{{menu.name}}</a>\n                        <span style=\"left: 175px; right: 40px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">{{menu.oakville}}</span>\n                      </span>\n          <span class=\"menu-subtitle\">{{menu.description}}</span>\n        </div>\n      </div>\n  ",
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
], HomeComponent);



/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
var Menu = (function () {
    function Menu(burlington, oakville, thaismile, description, image, name, thainame, spice) {
        this.burlington = burlington;
        this.oakville = oakville;
        this.thaismile = thaismile;
        this.description = description;
        this.image = image;
        this.name = name;
        this.thainame = thainame;
        this.spice = spice;
    }
    return Menu;
}());



/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_routes__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menulist_component__ = __webpack_require__(395);








var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule.routes = __WEBPACK_IMPORTED_MODULE_5__home_routes__["a" /* routes */];
HomeModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__menulist_component__["a" /* MenulistComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__home_routes__["a" /* routes */]),
        ],
    })
], HomeModule);



/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(387);

var routes = [
    { path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */] },
            { path: 'menu', loadChildren: function() { return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 392))  .then( function(module) { return module['MenuModule']; } ); } }
        ] },
];


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenulistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_menu_model__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(205);




// for database

var MenulistComponent = (function () {
    function MenulistComponent(route, router, db) {
        this.route = route;
        this.router = router;
        this.db = db;
        // public cate: AngularFireList<any>;
        this.catename = "";
        this.menulist = new Array();
    }
    MenulistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var subscriber = this.route.params
            .subscribe(function (params) {
            if (params['id']) {
                _this.db.list('/allmenus', function (ref) { return ref.orderByChild('category').equalTo(params['id']); })
                    .valueChanges()
                    .subscribe(function (data) {
                    _this.menulist = _this.buildMenu(data[0]['menus']);
                });
            }
        });
    };
    MenulistComponent.prototype.buildMenu = function (menus) {
        var menuArr = new Array();
        menus.forEach(function (o) {
            var menu = new __WEBPACK_IMPORTED_MODULE_3__models_menu_model__["a" /* Menu */](o['burlington'], o['oakville'], o['thaismile'], o['description'], o['image'], o['name'], o['thainame'], o['spice_level']);
            menuArr.push(menu);
        });
        return menuArr;
    };
    return MenulistComponent;
}());
MenulistComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'menulist',
        template: "    \n      <div id=\"Container\" *ngFor=\"let menu of menulist\">\n        <div class=\"menu-restaurant col-xs-12 col-sm-6\">\n                        <span class=\"clearfix\">\n                        <a class=\"menu-title\" href=\"#\">{{menu.name}}</a>\n                        <span style=\"left: 175px; right: 40px;\" class=\"menu-line\"></span>\n                        <span class=\"menu-price\">{{menu.oakville}}</span>\n                      </span>\n          <span class=\"menu-subtitle\">{{menu.description}}</span>\n        </div>\n      </div>\n  ",
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
], MenulistComponent);



/***/ })

});
//# sourceMappingURL=0.chunk.js.map