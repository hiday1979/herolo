(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Book.ts":
/*!*************************!*\
  !*** ./src/app/Book.ts ***!
  \*************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(id, title, authors, publishedDate) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.publishedDate = publishedDate;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n<app-books-list></app-books-list>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'herolo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _books_list_books_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books-list/books-list.component */ "./src/app/books-list/books-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _books_list_books_list_component__WEBPACK_IMPORTED_MODULE_5__["BooksListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books-list/books-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/books-list/books-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-type5{\n  width:75%;\n  margin:0 auto;\n  }\n  .list-type5 ol {\n  list-style-type: none;\n  margin: 0;\n  margin-left: 1em;\n  padding: 0;\n  counter-reset: li-counter;\n  }\n  .list-type5 ol li{\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  position: relative;\n  margin-bottom: 1.5em;\n  padding: 0.5em;\n  background-color: #F0D756;\n  padding-left: 58px;\n  }\n  .btnDiv{\n    display: inline;\n    flex-basis:  10%;\n  }\n  .btnDiv button{\n    margin: 5px;\n  }\n  .list-type5 ol li .item{\n    flex-basis:  30%;\n    /* margin-right: 10%; */\n  }\n  .list-type5 a{\n  text-decoration:none;\n  color:black;\n  font-size:15px;\n  font-family: 'Raleway', sans-serif;\n  }\n  .list-type5 li:hover{\n  box-shadow:inset -12em 0 #6CD6CC; /* For Safari 3.1 to 6.0 */\n  transition: box-shadow 0.5s;\n  }\n  .list-type5 ol li:before {\n  position: absolute;\n  top: -0.3em;\n  left: -0.5em;\n  width: 1.8em;\n  height: 1.2em;\n  font-size: 2em;\n  line-height: 1.2;\n  font-weight: bold;\n  text-align: center;\n  color: white;\n  background-color: #6CD6CC;\n  transform: rotate(-20deg);\n  -ms-transform: rotate(-20deg);\n  -webkit-transform: rotate(-20deg);\n  z-index: 99;\n  overflow: hidden;\n  content: counter(li-counter);\n  counter-increment: li-counter;\n  }\n  H6{\n    color: red;\n    font-size: 2em;\n  }\n"

/***/ }),

/***/ "./src/app/books-list/books-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/books-list/books-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"list-type5\">\n  <ol>\n  <li *ngFor=\"let book of bookList\"><a href=\"#\"></a>\n    <div class=\"item\" >{{book.title | titlecase}}</div>\n    <div class=\"item\"> <span *ngFor=\"let name of book.authors\">{{name}}</span></div>\n    <div class=\"item\">{{book.publishedDate}}</div>\n\n    <div class=\"btnDiv\">\n      <button type=\"button\" class=\"btn btn-default btn-sm\" data-toggle=\"modal\" data-target=\"#squarespaceModal\" (click)=\"putDetailsInModel(book.id)\">\n        <span class=\"glyphicon glyphicon-pencil\"></span> Edit\n      </button>\n      <button type=\"button\" class=\"btn btn-default btn-sm\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"putBookName(book.title, book.id)\">\n        <span class=\"glyphicon glyphicon-remove\"></span> Remove\n      </button>\n    </div>\n  </li>\n  </ol>\n  </div>\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"squarespaceModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n          <h3 class=\"modal-title\" id=\"lineModalLabel\">Edit book details</h3>\n          <h6 id=\"alertMassege\" class= \"alert\"></h6>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n                  <div class=\"form-group\">\n                      <div class=\"btn-group btn-delete hidden\" role=\"group\" id=\"BookID\">\n\n                      </div>\n                    <label for=\"modelTitle\">Title</label>\n                    <input type=\"text\" class=\"form-control\" id=\"modelTitle\" placeholder=\"\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"modelAuthor\">Author</label>\n                    <input type=\"text\" class=\"form-control\" id=\"modelAuthor\" placeholder=\"\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"modelPublishedDate\">Published date</label>\n                    <input type=\"date\" class=\"form-control\" id=\"modelPublishedDate\" placeholder=\"\">\n                  </div>\n                </form>\n\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"group button\">\n            <div class=\"btn-group\" role=\"group\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"  role=\"button\">Close</button>\n            </div>\n\n            <div class=\"btn-group\" role=\"group\">\n              <button type=\"button\" id=\"saveBook\" class=\"btn btn-default btn-hover-green\"  data-action=\"save\" role=\"button\" (click)=\"saveBook()\" >Save</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n\n\n    <!--  -->\n\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete this book</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              Are you sure you want to delete {{bookName}}\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"deleteBook()\">Delete</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n"

/***/ }),

/***/ "./src/app/books-list/books-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/books-list/books-list.component.ts ***!
  \****************************************************/
/*! exports provided: BooksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksListComponent", function() { return BooksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_books_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-books-list.service */ "./src/app/get-books-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var BooksListComponent = /** @class */ (function () {
    function BooksListComponent(data) {
        this.data = data;
        this.bookList = Array();
    }
    BooksListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.data.getList()];
                    case 1:
                        _a.bookList = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BooksListComponent.prototype.ngAfterViewChecked = function () {
    };
    BooksListComponent.prototype.putDetailsInModel = function (id) {
        this.id = id;
        var title = document.getElementById('modelTitle');
        var author = document.getElementById('modelAuthor');
        var date = document.getElementById('modelPublishedDate');
        title.placeholder = this.bookList[id].title;
        author.placeholder = this.bookList[id].authors[0];
        date.placeholder = this.bookList[id].publishedDate;
    };
    BooksListComponent.prototype.saveBook = function () {
        var title = document.getElementById('modelTitle');
        var author = document.getElementById('modelAuthor');
        var date = document.getElementById('modelPublishedDate');
        var bookTitle = title.value;
        var bookAuthor = author.value;
        var bookDate = date.value;
        if (this.checkForBookTitle(bookTitle)) {
            document.getElementById('alertMassege').innerHTML = 'There can be only one....';
        }
        else if (bookTitle !== '' && bookAuthor !== '' && bookDate !== '') {
            this.bookList[this.id].title = title.value;
            this.bookList[this.id].authors.length = 0;
            this.bookList[this.id].authors.push(author.value);
            this.bookList[this.id].publishedDate = date.value;
            title.value = '';
            author.value = '';
            date.value = '';
            $('#squarespaceModal').modal('hide');
        }
        else {
            document.getElementById('alertMassege').innerHTML = 'One or more of the filds are empty';
        }
    };
    BooksListComponent.prototype.deleteBook = function () {
        for (var i = 0; i < this.bookList.length; i++) {
            if (this.bookList[i].title === this.bookName) {
                this.bookList.splice(i, 1);
            }
        }
    };
    BooksListComponent.prototype.putBookName = function (title, id) {
        this.bookName = title;
        this.id = id;
    };
    BooksListComponent.prototype.checkForBookTitle = function (title) {
        var match = false;
        for (var i = 0; i < this.bookList.length; i++) {
            if (this.bookList[i].title.toLowerCase() === title.toLowerCase()) {
                match = true;
            }
        }
        return match;
    };
    BooksListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books-list',
            template: __webpack_require__(/*! ./books-list.component.html */ "./src/app/books-list/books-list.component.html"),
            styles: [__webpack_require__(/*! ./books-list.component.css */ "./src/app/books-list/books-list.component.css")]
        }),
        __metadata("design:paramtypes", [_get_books_list_service__WEBPACK_IMPORTED_MODULE_1__["GetBooksListService"]])
    ], BooksListComponent);
    return BooksListComponent;
}());



/***/ }),

/***/ "./src/app/get-books-list.service.ts":
/*!*******************************************!*\
  !*** ./src/app/get-books-list.service.ts ***!
  \*******************************************/
/*! exports provided: GetBooksListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBooksListService", function() { return GetBooksListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Book */ "./src/app/Book.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var GetBooksListService = /** @class */ (function () {
    function GetBooksListService(http) {
        this.http = http;
        this.bookList = Array();
        this.url = 'https://www.googleapis.com/books/v1/volumes?q=a';
    }
    GetBooksListService.prototype.getList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        return [4 /*yield*/, this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); })).subscribe(function (res) {
                                res.items.forEach(function (element) {
                                    var title = element.volumeInfo.title.replace(/[^a-zA-Z0-9 ]/g, '');
                                    _this.bookList.push(new _Book__WEBPACK_IMPORTED_MODULE_1__["Book"](i, title, element.volumeInfo.authors, element.volumeInfo.publishedDate));
                                    i++;
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.bookList];
                }
            });
        });
    };
    GetBooksListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], GetBooksListService);
    return GetBooksListService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hiday1979gamil.com/Downloads/myProjects/herolo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map