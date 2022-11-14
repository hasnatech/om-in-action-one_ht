(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/JRT":
/*!**********************************************!*\
  !*** ./src/app/pages/game/game.component.ts ***!
  \**********************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "RHZy");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "FFaf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function GameComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 32);
} }
function GameComponent_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 32);
} }
function GameComponent_div_39_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Customer Service Representative");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GameComponent_div_39_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Welcome!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Welcome to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Order Management in Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " game. In this game, go through the Order Management process as a Customer Service Representative.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "You will be given several scenarios that correspond to the eight core process groups of Order Management. In each, choose the ideal way to serve customers while achieving mutually winning outcomes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Remember to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Think Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, ", considering how Customer Service will evolve to keep up with our customer\u2019s expectations. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " to learn more about the game.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_div_39_div_4_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r11.showQuizScreen = "rule"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GameComponent_div_39_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "About the Game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Each question is worth 100 points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "You can attempt each question only once.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "You need to score at least 800 points to win.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Look out!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " There are some bonus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Proactive Behavior");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " questions. Answer these correctly and earn bonus badges.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Select Start to begin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_div_39_div_5_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r13.action(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GameComponent_div_39_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "10 Miles to Go ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Good job! You have successfully achieved all the milestones in Order Management. However, we are not quite there yet. There are 10 miles to go for the delivery to reach the customer.\u00A0 Answer the next two questions and win the opportunity to earn 200 extra points and win the game.\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_div_39_div_6_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r15.getQuiz(11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function GameComponent_div_39_div_7_div_1_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_div_39_div_7_div_1_div_9_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const i_r25 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); ctx_r26.selectedQuiz.selected = i_r25; return ctx_r26.selectedQuiz.choosen = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r23.selectedQuiz.selected == i_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r24.text, " ");
} }
function GameComponent_div_39_div_7_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GameComponent_div_39_div_7_div_1_div_9_div_1_Template, 6, 4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r19.selectedQuiz.choices);
} }
function GameComponent_div_39_div_7_div_1_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r34, " ");
} }
function GameComponent_div_39_div_7_div_1_div_10_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r36, " ");
} }
function GameComponent_div_39_div_7_div_1_div_10_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r38, " ");
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
function GameComponent_div_39_div_7_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function GameComponent_div_39_div_7_div_1_div_10_Template_div_cdkDropListDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r40.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Drag Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function GameComponent_div_39_div_7_div_1_div_10_Template_div_cdkDropListDropped_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r42.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, GameComponent_div_39_div_7_div_1_div_10_div_7_Template, 2, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 72, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function GameComponent_div_39_div_7_div_1_div_10_Template_div_cdkDropListDropped_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r43.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, GameComponent_div_39_div_7_div_1_div_10_div_13_Template, 2, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 72, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function GameComponent_div_39_div_7_div_1_div_10_Template_div_cdkDropListDropped_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r44.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, GameComponent_div_39_div_7_div_1_div_10_div_19_Template, 2, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkDropListData", ctx_r20.drag)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](11, _c1, _r30, _r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r20.drag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r20.selectedQuiz.sorting1_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkDropListData", ctx_r20.todo)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](14, _c1, _r28, _r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r20.todo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r20.selectedQuiz.sorting2_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkDropListData", ctx_r20.done)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](17, _c1, _r28, _r30));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r20.done);
} }
function GameComponent_div_39_div_7_div_1_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_div_39_div_7_div_1_div_11_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49); const item_r46 = ctx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); item_r46.selected = !item_r46.selected; return ctx_r48.selectedQuiz.choosen = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, item_r46.selected == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r46.text, " ");
} }
function GameComponent_div_39_div_7_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GameComponent_div_39_div_7_div_1_div_11_div_1_Template, 6, 4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r21.selectedQuiz.choices);
} }
function GameComponent_div_39_div_7_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r22.selectedQuiz.image_text);
} }
const _c2 = function (a0) { return { "disabled": a0 }; };
function GameComponent_div_39_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, GameComponent_div_39_div_7_div_1_div_9_Template, 2, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, GameComponent_div_39_div_7_div_1_div_10_Template, 20, 20, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, GameComponent_div_39_div_7_div_1_div_11_Template, 2, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_div_39_div_7_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r50.quizSubmit(ctx_r50.selectedQuiz); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, GameComponent_div_39_div_7_div_1_div_17_Template, 2, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.selectedQuiz.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r17.selectedQuiz.question, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r17.selectedQuiz.instr, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.selectedQuiz.type == "single_choice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.selectedQuiz.type == "sort_order");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.selectedQuiz.type == "multiple_choice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c2, !ctx_r17.selectedQuiz.choosen));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/", ctx_r17.selectedQuiz.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.selectedQuiz.batch != true);
} }
function GameComponent_div_39_div_7_div_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r54.selectedQuiz.image_text);
} }
function GameComponent_div_39_div_7_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_div_39_div_7_div_2_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r55.action(ctx_r55.step + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, GameComponent_div_39_div_7_div_2_div_1_div_9_Template, 2, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r52.selectedQuiz.feedback.correct, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/", ctx_r52.selectedQuiz.correctImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r52.selectedQuiz.batch != true && ctx_r52.selectedQuiz.correctImage);
} }
function GameComponent_div_39_div_7_div_2_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r57.selectedQuiz.image_text);
} }
function GameComponent_div_39_div_7_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_div_39_div_7_div_2_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r58.action(ctx_r58.step + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, GameComponent_div_39_div_7_div_2_div_2_div_9_Template, 2, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r53.selectedQuiz.feedback.incorrect, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/", ctx_r53.selectedQuiz.incorrectImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r53.selectedQuiz.batch != true && ctx_r53.selectedQuiz.incorrectImage);
} }
function GameComponent_div_39_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GameComponent_div_39_div_7_div_2_div_1_Template, 10, 3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GameComponent_div_39_div_7_div_2_div_2_Template, 10, 3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.selectedQuiz.correct == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.selectedQuiz.correct == false);
} }
function GameComponent_div_39_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GameComponent_div_39_div_7_div_1_Template, 18, 11, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, GameComponent_div_39_div_7_div_2_Template, 3, 2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.selectedQuiz.submitted != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.selectedQuiz.submitted == true);
} }
function GameComponent_div_39_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GameComponent_div_39_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_div_39_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r61.reload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GameComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, GameComponent_div_39_div_3_Template, 5, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, GameComponent_div_39_div_4_Template, 23, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, GameComponent_div_39_div_5_Template, 22, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, GameComponent_div_39_div_6_Template, 8, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, GameComponent_div_39_div_7_Template, 3, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Order Management In Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Your Score = ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "You earned badges = ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, GameComponent_div_39_div_27_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, GameComponent_div_39_button_30_Template, 2, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_div_39_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r63.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Exit Window");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("panel ", ctx_r3.selectedQuiz.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.showQuizScreen == "intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.showQuizScreen == "intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.showQuizScreen == "rule");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.showQuizScreen == "miles");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.showQuizScreen == "quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r3.showQuizScreen != "result");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.result.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.result.bubble);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r3.score, " / 1200 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r3.batches, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.counter(ctx_r3.batches));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.score < 800);
} }
//import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
class GameComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.showPanel = true;
        // showPanel = false;
        this.showQuizScreen = 'intro';
        // showQuizScreen = '';
        this.score = 0;
        this.speed = 5;
        this.speed_1 = 10;
        //speed = 1;
        this.step = 1;
        this.totalQuestion = 8;
        this.questions = _data__WEBPACK_IMPORTED_MODULE_2__["data"];
        this.quizNo = 0;
        this.selectedQuiz = this.questions[this.quizNo];
        this.batchesArr = [];
        this.batches = 0;
        this.result = {
            title: '',
            bubble: ''
        };
        this.alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
        this.drag = [];
        this.todo = [];
        this.done = [];
        //gsap.registerPlugin(MotionPathPlugin);
    }
    ngAfterViewInit() {
        this.tl = new gsap_all__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]();
        this.onResize(null);
        //this.getQuiz(this.quizNo + 1);
        //this.animateBatch();
        //this.animateAddQuestion();
    }
    onResize(event) {
        const game = document.getElementById('game');
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        let scaleW = 1;
        let scaleH = 1;
        if (width < 1920) {
            scaleW = width / 1920;
        }
        if (height < 937) {
            scaleH = height / 937;
        }
        //console.log(scaleW, scaleH); 
        const scale = Math.min(scaleW, scaleH);
        game.style.transform = 'scale(' + scale + ')';
    }
    action(step) {
        console.log('action ' + step);
        this.step = step;
        this.showPanel = false;
        if (this.tl) {
            this.tl.clear();
        }
        this.tl = new gsap_all__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]();
        switch (step) {
            case 1:
                this.showPanel = false;
                this.tl.fromTo('#truck1', { x: -161, y: 100 }, {
                    x: 139, y: -84, duration: this.speed, onComplete: () => {
                        this.getQuiz(1);
                    }
                });
                break;
            case 2:
                this.showPanel = false;
                // this.tl.set('#truck1', { opacity: 0 });
                this.tl.to('#truck1', {
                    x: 239, y: -145, duration: this.speed / 3, onComplete: () => {
                        this.tl.set('#truck2', { opacity: 1 });
                        this.tl.set('#truck1', { opacity: 0 });
                        this.tl.fromTo('#truck2', { x: 0, y: 0 }, {
                            x: 20, y: 10, duration: this.speed / 3, onComplete: () => {
                                this.getQuiz(2);
                                //this.action(5);
                            }
                        });
                    }
                });
                break;
            case 3:
                this.tl.to('#truck2', {
                    x: 170, y: 100, duration: this.speed / 2, ease: gsap_all__WEBPACK_IMPORTED_MODULE_1__["Linear"], onComplete: () => {
                        this.getQuiz(3);
                        // this.tl.set('#truck2', { opacity: 0 });
                        // this.tl.set('#truck1', { opacity: 1 });
                        // this.tl.fromTo('#truck1', { x: 550, y: -15 }, {
                        //   x: 723, y: -111, duration: this.speed / 2, onComplete: () => {
                        //     this.animateAddQuestion();
                        //     this.tl.to('#earn_batch1', {
                        //       opacity: 1, duration: 0.5, onComplete: () => {
                        //         setTimeout(() => {
                        //           this.getQuiz(3);
                        //         }, 1000);
                        //       }
                        //     });
                        //     // this.action(4);
                        //   }
                        // });
                    }
                });
                break;
            //batch
            case 4:
                this.tl.to('#truck2', {
                    x: 240, y: 140, duration: this.speed / 2, ease: gsap_all__WEBPACK_IMPORTED_MODULE_1__["Linear"], onComplete: () => {
                        // this.getQuiz(2);
                        this.tl.set('#truck2', { opacity: 0 });
                        this.tl.set('#truck1', { opacity: 1 });
                        this.tl.fromTo('#truck1', { x: 550, y: -15 }, {
                            x: 723, y: -111, duration: this.speed / 2, onComplete: () => {
                                this.animateAddQuestion();
                                this.tl.to('#earn_batch1', {
                                    opacity: 1, duration: 0.5, onComplete: () => {
                                        setTimeout(() => {
                                            this.getQuiz(4);
                                        }, 1000);
                                    }
                                });
                                // this.action(4);
                            }
                        });
                    }
                });
                break;
            case 5:
                this.tl.set('#truck2', { opacity: 1 });
                this.tl.set('#truck1', { opacity: 0 });
                this.tl.fromTo('#truck2', { x: 500, y: 40 }, {
                    x: 700, y: 165, duration: this.speed / 2, ease: gsap_all__WEBPACK_IMPORTED_MODULE_1__["Linear"], onComplete: () => {
                        this.tl.set('#truck2', { opacity: 0 });
                        this.tl.set('#truck1', { opacity: 1 });
                        this.tl.fromTo('#truck1', { x: 1025, y: 20 }, {
                            x: 1150, y: -40, duration: this.speed / 2, onComplete: () => {
                                this.getQuiz(5);
                                //this.action(5);
                            }
                        });
                    }
                });
                break;
            case 6:
                this.tl.fromTo('#truck1', { x: 1150, y: -40 }, {
                    x: 1260, y: -110, duration: this.speed / 2, ease: gsap_all__WEBPACK_IMPORTED_MODULE_1__["Linear"], onComplete: () => {
                        this.tl.set('#truck1', { opacity: 0 });
                        this.tl.set('#truck3', { opacity: 1 });
                        this.tl.fromTo('#truck3', { x: 1394, y: 640 }, {
                            x: 1283, y: 571, duration: this.speed / 2, onComplete: () => {
                                //this.action(6);
                                this.getQuiz(6);
                            }
                        });
                    }
                });
                break;
            case 7:
                this.tl.fromTo('#truck3', { x: 1283, y: 571 }, {
                    x: 1125, y: 471, duration: this.speed / 2, onComplete: () => {
                        //this.getQuiz(1);
                        //console.log('came here');
                        this.tl.set('#truck1', { opacity: 1 });
                        this.tl.set('#truck3', { opacity: 0 });
                        this.tl.fromTo('#truck1', { x: 1013, y: -365 }, {
                            x: 1043, y: -380, duration: this.speed / 2, onComplete: () => {
                                this.getQuiz(7);
                                //this.action(6);
                            }
                        });
                    }
                });
                break;
            case 8:
                this.tl.to('#truck1', { x: 1209, y: -475,
                    duration: this.speed / 2, onComplete: () => {
                        this.getQuiz(8);
                        //console.log('came here');
                        //this.action(6);
                    }
                });
                break;
            case 9:
                this.tl.set('#truck1', { opacity: 0 });
                this.tl.set('#truck2', { opacity: 1 });
                this.tl.fromTo('#truck2', { x: 1000, y: -300 }, {
                    x: 1090, y: -253, duration: this.speed / 2, ease: gsap_all__WEBPACK_IMPORTED_MODULE_1__["Linear"], onComplete: () => {
                        this.getQuiz(9);
                        //this.action(7);
                    }
                });
                break;
            //batch
            case 10:
                this.tl.set('#truck2', { opacity: 1 });
                this.tl.to('#truck2', {
                    x: 1228, y: -180, duration: this.speed / 2, ease: gsap_all__WEBPACK_IMPORTED_MODULE_1__["Linear"], onComplete: () => {
                        this.animateAddQuestion2();
                        this.tl.to('#earn_batch2', {
                            opacity: 1, duration: 0.5, onComplete: () => {
                                setTimeout(() => {
                                    this.getQuiz(10);
                                }, 1000);
                            }
                        });
                        // this.getQuiz(9)
                        // this.action(10);
                    }
                });
                break;
            case 11:
                this.tl.set('#truck1', { opacity: 0 });
                this.tl.set('#truck2', { opacity: 1 });
                this.tl.to('#truck2', {
                    x: 1484, y: -38, duration: this.speed, onComplete: () => {
                        // this.getQuiz(8);
                        //this.action(8);
                        this.tl.set('#truck2', { opacity: 0 });
                        this.tl.set('#earn_batch1', { opacity: 0 });
                        this.tl.set('#earn_batch2', { opacity: 0 });
                        this.tl.set('#truck2', { opacity: 0 });
                        this.tl.to('.game_layout', { opacity: 0 });
                        this.tl.to('.screen_10', {
                            opacity: 1, onComplete: () => {
                                setTimeout(() => {
                                    this.showPanel = true;
                                    this.showQuizScreen = 'miles';
                                    this.totalQuestion = 12;
                                    this.tl.to('#miles', { opacity: 1, duration: 1 });
                                }, 1000);
                            }
                        });
                    }
                });
                break;
            case 12:
                this.tl.to('.screen_10_1', {
                    opacity: 1, onComplete: () => {
                        setTimeout(() => {
                            this.showPanel = true;
                            this.getQuiz(12);
                        }, 1000);
                    }
                });
                break;
            case 13:
                this.showPanel = true;
                this.showQuizScreen = 'result';
                // this.score = 800;
                /*if (this.score >= 800) {
                  this.result.title = 'Congratulations! The product has been successfully delivered.';
                  this.result.bubble = 'Cargill came through for me on this order. These are the results that show me you can deliver on your promises and build my confidence that I will get excellent service from Cargill. Thank you!';
                } else if (this.score >= 400) {
                  this.result.title = 'Well done!';
                  this.result.bubble = 'Recommend to replay the game. ';
                } else {
                  this.result.title = 'Good try, but you missed it!';
                  this.result.bubble = `You can try the game again or revisit the learning in the ‘Order Management Process Overview’ pathway.`;
                }*/
                if (this.score < 600) {
                    this.result.title = 'Whoops!';
                    this.result.bubble = 'We recommend you select Replay and try the game again.';
                }
                else {
                    this.result.title = 'Well done!';
                    this.result.bubble = `You have a great understanding of Order Management Process.`;
                }
                break;
            default:
                break;
        }
    }
    getQuiz(step) {
        console.log('getQuiz = ' + step);
        this.showPanel = true;
        this.showQuizScreen = 'quiz';
        this.selectedQuiz = this.questions[step - 1];
        this.selectedQuiz.choosen = false;
        this.selectedQuiz.submitted = false;
        this.quizNo = step;
        if (this.selectedQuiz.type == 'multiple_choice') {
            this.selectedQuiz.choices.map(s => {
                s.selected = false;
            });
        }
        else if (this.selectedQuiz.type == 'sort_order') {
            this.drag = [...this.selectedQuiz.sorting1];
            //this.drag.push(this.selectedQuiz.sorting2);
            this.selectedQuiz.sorting2.forEach(element => {
                this.drag.push(element);
            });
            this.shuffle(this.drag);
            console.log(this.drag);
            this.todo = [];
            this.done = [];
        }
    }
    quizSubmit(quiz) {
        if (quiz.type == 'single_choice') {
            if (quiz.choices[quiz.selected].correct == true) {
                this.setScore(quiz.score);
                quiz.correct = true;
                if (quiz.batch) {
                    this.animateBatch(1750, 300);
                }
                //quiz.feedbackText = quiz.feedback.correct;
                console.log(this.score);
            }
            else {
                //this.score = 0;
                if (quiz.feedback.choice_feedback) {
                    quiz.feedback.incorrect = quiz.feedback.choice_text[quiz.selected];
                }
                else {
                    //quiz.feedbackText = quiz.feedback.incorrect;
                }
                quiz.correct = false;
            }
            //console.log(quiz);
        }
        else if (quiz.type == 'sort_order') {
            let wrong = false;
            console.log(this.todo);
            console.log(this.done);
            //console.log(this.selectedQuiz.sorting1)
            let sorting1_result = [];
            for (let i = 0; i < this.todo.length; i++) {
                const choice = this.todo[i];
                sorting1_result[i] = false;
                for (let j = 0; j < this.selectedQuiz.sorting1.length; j++) {
                    //console.log(choice+ " == " + this.selectedQuiz.sorting1[j]);
                    if (choice == this.selectedQuiz.sorting1[j]) {
                        console.log(choice + " == " + this.selectedQuiz.sorting1[j]);
                        sorting1_result[i] = true;
                        console.log(sorting1_result);
                    }
                }
            }
            let sorting2_result = [];
            for (let i = 0; i < this.done.length; i++) {
                const choice = this.done[i];
                sorting2_result[i] = false;
                for (let j = 0; j < this.selectedQuiz.sorting2.length; j++) {
                    //console.log(choice+ " == " + this.selectedQuiz.sorting1[j]);
                    if (choice == this.selectedQuiz.sorting2[j]) {
                        sorting2_result[i] = true;
                    }
                }
            }
            console.log(sorting1_result);
            console.log(sorting1_result.filter(f => f == true).length + " == " + this.selectedQuiz.sorting1.length);
            console.log(sorting2_result);
            console.log(sorting2_result.filter(f => f == true).length + " == " + this.selectedQuiz.sorting2.length);
            wrong = !(sorting1_result.filter(f => f == true).length == this.selectedQuiz.sorting1.length
                && sorting2_result.filter(f => f == true).length == this.selectedQuiz.sorting2.length);
            if (wrong == false) {
                this.setScore(quiz.score);
                quiz.correct = true;
                quiz.feedbackText = quiz.feedback.correct;
            }
            else {
                quiz.correct = false;
                quiz.feedbackText = quiz.feedback.incorrect;
            }
        }
        else if (quiz.type == 'multiple_choice') {
            let wrong = false;
            for (let i = 0; i < quiz.choices.length; i++) {
                const choice = quiz.choices[i];
                if (choice.correct != choice.selected && choice.selected != undefined) {
                    console.log('multiple-choice ', i, choice.correct, choice.selected);
                    wrong = true;
                }
            }
            if (wrong == false) {
                this.setScore(quiz.score);
                quiz.correct = true;
                quiz.feedbackText = quiz.feedback.correct;
                console.log('batch' + quiz.batch);
                if (quiz.batch) {
                    this.animateBatch(900, 500);
                }
            }
            else {
                quiz.correct = false;
                quiz.feedbackText = quiz.feedback.incorrect;
            }
        }
        quiz.submitted = true;
    }
    animateBatch(xpos, ypos) {
        const tl1 = new gsap_all__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]();
        this.showPanel = false;
        tl1.set('#batch', { x: xpos, y: ypos });
        tl1.fromTo('#batch', { opacity: 0 }, { opacity: 1, duration: 0.5 });
        tl1.to('#batch', { x: 1780, y: 200, delay: 0.5, duration: 0.5 });
        tl1.to('#batch', {
            opacity: 0, duration: 0.5, onComplete: () => {
                this.batches += 1;
                this.showPanel = true;
                this.cdRef.detectChanges();
            }
        });
    }
    animateAddQuestion() {
        const tl2 = new gsap_all__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]();
        tl2.set('#questNoAdd', { x: 930, y: 550 });
        tl2.fromTo('#questNoAdd', { opacity: 0 }, { opacity: 1, duration: 0.5 });
        tl2.to('#questNoAdd', {
            x: 970, y: 90, delay: 0.5, duration: 0.5, onComplete: () => {
                this.totalQuestion += 1;
                this.cdRef.detectChanges();
            }
        });
        tl2.to('#questNoAdd', {
            opacity: 0, duration: 0.5
        });
    }
    animateAddQuestion2() {
        const tl2 = new gsap_all__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]();
        tl2.set('#questNoAdd', { x: 1730, y: 320 });
        tl2.fromTo('#questNoAdd', { opacity: 0 }, { opacity: 1, duration: 0.5 });
        tl2.to('#questNoAdd', {
            x: 970, y: 90, delay: 0.5, duration: 0.5, onComplete: () => {
                this.totalQuestion += 1;
                this.cdRef.detectChanges();
            }
        });
        tl2.to('#questNoAdd', {
            opacity: 0, duration: 0.5
        });
    }
    setScore(s) {
        this.score += s;
        /*gsap('#score_anim', {
          onComplete: () => {
            this.score += s;
          }
        });*/
    }
    drop(event) {
        console.log(event.previousIndex, event.currentIndex);
        this.selectedQuiz.choosen = true;
        //moveItemInArray(this.selectedQuiz.choices, event.previousIndex, event.currentIndex);
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    counter(i) {
        return new Array(i);
    }
    reload() {
        window.location.reload();
    }
    close() {
        window.close();
    }
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], hostBindings: function GameComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function GameComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 40, vars: 8, consts: [[1, "flex", "top-panel"], [1, "flex-1"], [1, "title"], [1, "progress"], [1, "thumb"], [1, "text-center"], [1, "score-panel"], [1, "score"], [1, "flex", "fcenter"], [1, "batch"], ["src", "assets/batches.png", "alt", "Batches", 4, "ngIf"], ["id", "game", 1, "game"], ["game", ""], [1, "game_layout", "abs"], ["src", "assets/game.png", "alt", "game"], [1, "screen_10", "abs"], ["src", "assets/10_screen.png", "alt", "game"], [1, "screen_10_1", "abs"], ["src", "assets/10_screen_1.png", "alt", "game"], ["id", "batch", 1, "abs"], ["src", "assets/batches.png", "alt", "batch"], ["id", "questNoAdd", 1, "abs"], ["id", "earn_batch1", 1, "abs"], ["src", "assets/earn_batch.png", "alt", "Earn a Batch"], ["id", "earn_batch2", 1, "abs"], ["id", "truck1", 1, "Truck1", "abs"], ["src", "assets/Truck1.png", "alt", "Truck1"], ["id", "truck2", 1, "Truck2", "abs"], ["src", "assets/Truck2.png", "alt", "Truck2"], ["id", "truck3", 1, "Truck3", "abs"], ["src", "assets/Truck3.png", "alt", "Truck2"], ["id", "quiz", "class", "quiz flex fcenter", 4, "ngIf"], ["src", "assets/batches.png", "alt", "Batches"], ["id", "quiz", 1, "quiz", "flex", "fcenter"], ["class", "instructor", 4, "ngIf"], ["class", "intro", 4, "ngIf"], ["class", "rule", 4, "ngIf"], ["id", "miles", 4, "ngIf"], ["class", "quiz-panel", 4, "ngIf"], ["id", "result", 3, "hidden"], [1, "result_title"], [1, "primary-color"], ["class", "batch", 4, "ngFor", "ngForOf"], ["class", "primary-btn mr-5", 3, "click", 4, "ngIf"], [1, "primary-btn", 3, "click"], [1, "instructor"], ["src", "assets/customer_service.png", "alt", "Man"], [1, "intro"], [1, ""], [1, "rule"], ["id", "miles"], [1, "quiz-panel"], ["class", "question", 4, "ngIf"], ["class", "feedback", 4, "ngIf"], [1, "question"], [1, "flex"], [1, "text", 3, "innerHTML"], [1, "instr"], ["class", "choices", 4, "ngIf"], ["class", "sorting", "cdkDropList", "", 3, "cdkDropListDropped", 4, "ngIf"], [1, "submit"], [1, "primary-btn", 3, "ngClass", "click"], ["alt", "", 3, "src"], ["class", "customer", 4, "ngIf"], [1, "choices"], [4, "ngFor", "ngForOf"], [1, "flex", "choice", 3, "click"], [1, "single-choice"], [1, "dot", 3, "ngClass"], [1, "text"], ["cdkDropList", "", 1, "sorting", 3, "cdkDropListDropped"], [1, "mr-20"], ["cdkDropList", "", 1, "dd_choice", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["dragList", "cdkDropList"], ["class", "choice", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["todoList", "cdkDropList"], ["doneList", "cdkDropList"], ["class", " choice", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "choice"], [1, "multi-choice"], [1, "customer"], [1, "feedback"], [4, "ngIf"], [3, "innerHTML"], [1, "primary-btn", "mr-5", 3, "click"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Order Management In Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Your Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, GameComponent_img_15_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, GameComponent_img_16_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "+1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, GameComponent_div_39_Template, 33, 15, "div", 31);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx.quizNo / ctx.totalQuestion * 100 + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Question ", ctx.quizNo, " / ", ctx.totalQuestion, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.score);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.batches > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.batches > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showPanel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"]], styles: [".top-panel {\n  color: #FFF;\n  padding: 30px;\n  position: relative;\n  z-index: 2;\n}\n.top-panel .title {\n  text-align: center;\n  font-size: 22px;\n}\n.top-panel .score {\n  text-align: center;\n  font-size: 34px;\n  margin: 5px;\n}\n.top-panel .progress {\n  max-width: 500px;\n  background-color: #FFF;\n  border-radius: 5px;\n  padding: 2px;\n  margin: 5px auto;\n}\n.top-panel .progress .thumb {\n  width: 50%;\n  height: 3px;\n  background-color: #279989;\n  border-radius: 5px;\n  transition: width 0.5s ease;\n}\n.game_layout,\n.screen_10,\n.screen_10_1 {\n  left: 0;\n  top: 0;\n  z-index: -1;\n}\n.screen_10,\n.screen_10_1 {\n  opacity: 0;\n}\n.game {\n  transform-origin: top left;\n  width: 1920px;\n  height: 1080px;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  touch-action: auto;\n}\n.game .abs {\n  position: absolute;\n}\n.game .road_path {\n  left: -76px;\n  top: 673px;\n}\n.game .road {\n  left: -76px;\n  top: 323px;\n}\n.game .building1 {\n  left: 284px;\n  top: 549px;\n}\n.game .tree1 {\n  left: 397px;\n  top: 551px;\n}\n.game .selection1 {\n  left: 111px;\n  top: 425px;\n}\n.game .Truck1 {\n  left: 128px;\n  top: 792px;\n}\n.game .Truck2 {\n  left: 409px;\n  top: 630px;\n  opacity: 0;\n}\n.game .Truck3 {\n  left: 0px;\n  top: 0px;\n  opacity: 0;\n}\ndrag-scroll {\n  touch-action: pan-x pan-y;\n}\ndrag-scroll .drag-scroll-content {\n  overflow: hidden !important;\n}\n.quiz {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0px;\n  left: 0;\n  z-index: 3;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  animation: zoomIn 0.5s ease;\n}\n.quiz .panel {\n  margin: 20px;\n  padding: 30px;\n  width: 1240px;\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 0 0 5px #33333347;\n}\n.quiz .instructor {\n  margin-right: 20px;\n}\n.quiz .intro h2,\n.quiz .rule h2 {\n  margin-top: 0;\n}\n.quiz .rule ul > li {\n  margin-bottom: 10px;\n}\n.text-center {\n  text-align: center;\n}\n.primary-text {\n  color: #279989;\n  font-weight: bold;\n}\n.primary-btn {\n  background-color: #005F86;\n  color: #fff;\n  padding: 10px;\n  min-width: 200px;\n  text-align: center;\n  border: 0;\n  border-radius: 30px;\n  font-size: 18px;\n  cursor: pointer;\n}\n.primary-btn.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.question {\n  font-size: 22px;\n  line-height: 32px;\n}\n.question .submit {\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n.question .instr {\n  font-style: italic;\n  color: #005F86;\n  margin: 20px 0;\n}\n.question .choice {\n  align-items: flex-start;\n  cursor: pointer;\n}\n.question .single-choice,\n.question .multi-choice {\n  background-color: #FFF;\n  border-radius: 50%;\n  margin: 7px 20px;\n  border: 1px solid #333;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.question .single-choice .dot,\n.question .multi-choice .dot {\n  width: 7px;\n  height: 7px;\n  background-color: #fff;\n  border-radius: 50%;\n  margin: 5px;\n}\n.question .single-choice .dot.active,\n.question .multi-choice .dot.active {\n  background-color: #005F86;\n}\n.question .multi-choice {\n  border-radius: 0;\n}\n.question .multi-choice .dot {\n  border-radius: 0;\n}\n.sorting {\n  min-height: 300px;\n}\n.sorting .label {\n  background-color: #005F86;\n  color: #fff;\n  border-radius: 50%;\n  padding: 5px 15px;\n  margin: 10px;\n  margin-top: 0px;\n  height: 30px;\n  font-size: 16px;\n}\n.sorting .dd_choice {\n  width: 370px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.sorting .choice {\n  padding: 5px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  line-height: 32px;\n}\n.sorting h3 {\n  font-weight: bold;\n  margin: 0;\n  margin-bottom: 10px;\n}\n.sorting .cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.sorting .cdk-drag-placeholder {\n  opacity: 0;\n}\n.sorting .cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.sorting .choice:last-child {\n  border: none;\n}\n.sorting .choice.cdk-drop-list-dragging .dd_choice:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n#earn_batch1 {\n  left: 845px;\n  top: 538px;\n  opacity: 0;\n}\n#earn_batch2 {\n  left: 1685px;\n  top: 340px;\n  opacity: 0;\n}\n.result_title {\n  background-color: #005F86;\n  margin: -30px -30px 0 -30px;\n  padding: 10px;\n  text-align: center;\n  color: #fff;\n  border-radius: 10px 10px 0 0;\n  box-shadow: 0px 0px 24px #0000003D;\n}\n.bubble {\n  background-image: url('bubble.png');\n  background-repeat: no-repeat;\n  position: relative;\n}\n.bubble .text {\n  position: absolute;\n  left: 136px;\n  top: 13px;\n  margin: 10px;\n}\n.opacity0 {\n  opacity: 0;\n}\n.batch {\n  margin: 10px;\n}\n#batch {\n  opacity: 0;\n}\n#questNoAdd {\n  color: #fff;\n  font-size: 18px;\n  opacity: 0;\n}\n@keyframes zoomIn {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.mr-5 {\n  margin-right: 10px;\n}\n.mr-20 {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBRk47QUFPQTs7O0VBR0UsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBSkY7QUFRQTs7RUFFRSxVQUFBO0FBTEY7QUFRQTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUFQRjtBQVNFO0VBQ0Usa0JBQUE7QUFQSjtBQVdFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUFUSjtBQVlFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUFWSjtBQWFFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUFYSjtBQWVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUFiSjtBQWlCRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBZko7QUFtQkU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQWpCSjtBQW9CRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQWxCSjtBQXFCRTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQW5CSjtBQXVCQTtFQUNFLHlCQUFBO0FBcEJGO0FBc0JFO0VBQ0UsMkJBQUE7QUFwQko7QUF3QkE7RUFDRSxXQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLDJCQUFBO0FBdEJGO0FBd0JFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBR0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBeEJKO0FBMkJFO0VBQ0Usa0JBQUE7QUF6Qko7QUE4Qkk7O0VBQ0UsYUFBQTtBQTNCTjtBQWdDSTtFQUNFLG1CQUFBO0FBOUJOO0FBbUNBO0VBQ0Usa0JBQUE7QUFoQ0Y7QUFtQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFoQ0Y7QUFtQ0E7RUFPRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBdENGO0FBeUJFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBdkJKO0FBc0NBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBbkNGO0FBcUNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQW5DSjtBQXNDRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFwQ0o7QUF1Q0U7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFyQ0o7QUEwQ0U7O0VBSUUsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQTFDSjtBQTRDSTs7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQU1BLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBOUNOO0FBd0NNOztFQUNFLHlCQUFBO0FBckNSO0FBOENFO0VBQ0UsZ0JBQUE7QUE1Q0o7QUE4Q0k7RUFDRSxnQkFBQTtBQTVDTjtBQWlEQTtFQUNFLGlCQUFBO0FBOUNGO0FBK0NFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUE3Q0o7QUFnREU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBOUNKO0FBaURFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBL0NKO0FBa0RFO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFoREo7QUFtREU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFqREo7QUFzREU7RUFDRSxVQUFBO0FBcERKO0FBdURFO0VBQ0Usc0RBQUE7QUFyREo7QUF3REU7RUFDRSxZQUFBO0FBdERKO0FBeURFO0VBQ0Usc0RBQUE7QUF2REo7QUEyREE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUF4REY7QUE0REE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUF6REY7QUE0REE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUF6REY7QUE0REE7RUFDRSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUF6REY7QUEyREU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQXpESjtBQTZEQTtFQUNFLFVBQUE7QUExREY7QUE2REE7RUFDRSxZQUFBO0FBMURGO0FBOERBO0VBQ0UsVUFBQTtBQTNERjtBQThEQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBRUEsVUFBQTtBQTVERjtBQWlFQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBOURGO0VBaUVBO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBL0RGO0FBQ0Y7QUFrRUE7RUFDRSxrQkFBQTtBQWhFRjtBQXFFQTtFQUNFLGtCQUFBO0FBbEVGIiwiZmlsZSI6ImdhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXBhbmVsIHtcbiAgY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcblxuICAudGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuc2NvcmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuICAucHJvZ3Jlc3Mge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcblxuICAgIC50aHVtYiB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5OTg5O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlO1xuICAgIH1cbiAgfVxufVxuXG4uZ2FtZV9sYXlvdXQsXG4uc2NyZWVuXzEwLFxuLnNjcmVlbl8xMF8xIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAtMTtcblxufVxuXG4uc2NyZWVuXzEwLFxuLnNjcmVlbl8xMF8xIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmdhbWUge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgd2lkdGg6IDE5MjBweDtcbiAgaGVpZ2h0OiAxMDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmcucG5nJyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcblxuICB0b3VjaC1hY3Rpb246IGF1dG87XG5cbiAgLmFicyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vei1pbmRleDogMTtcbiAgfVxuXG4gIC5yb2FkX3BhdGgge1xuICAgIGxlZnQ6IC03NnB4O1xuICAgIHRvcDogNjczcHg7XG4gIH1cblxuICAucm9hZCB7XG4gICAgbGVmdDogLTc2cHg7XG4gICAgdG9wOiAzMjNweDtcbiAgfVxuXG4gIC5idWlsZGluZzEge1xuICAgIGxlZnQ6IDI4NHB4O1xuICAgIHRvcDogNTQ5cHg7XG4gICAgLy90cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG5cbiAgLnRyZWUxIHtcbiAgICBsZWZ0OiAzOTdweDtcbiAgICB0b3A6IDU1MXB4O1xuICAgIC8vdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuXG4gIC5zZWxlY3Rpb24xIHtcbiAgICBsZWZ0OiAxMTFweDtcbiAgICB0b3A6IDQyNXB4O1xuICAgIC8vdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuXG4gIC5UcnVjazEge1xuICAgIGxlZnQ6IDEyOHB4O1xuICAgIHRvcDogNzkycHg7XG4gIH1cblxuICAuVHJ1Y2syIHtcbiAgICBsZWZ0OiA0MDlweDtcbiAgICB0b3A6IDYzMHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAuVHJ1Y2szIHtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5kcmFnLXNjcm9sbCB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXggcGFuLXk7XG5cbiAgLmRyYWctc2Nyb2xsLWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxufVxuXG4ucXVpeiB7XG4gIHdpZHRoOiAxMDAlO1xuICAvL2hlaWdodDogY2FsYygxMDB2aCAtIDkwcHgpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYW5pbWF0aW9uOiB6b29tSW4gMC41cyBlYXNlO1xuXG4gIC5wYW5lbCB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgd2lkdGg6IDEyNDBweDtcbiAgICAvL21pbi13aWR0aDogODAwcHg7XG4gICAgLy9taW4taGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjMzMzMzMzNDc7XG4gIH1cblxuICAuaW5zdHJ1Y3RvciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLmludHJvLFxuICAucnVsZSB7XG4gICAgaDIge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIH1cblxuICAucnVsZSB7XG4gICAgdWw+bGkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJpbWFyeS10ZXh0IHtcbiAgY29sb3I6ICMyNzk5ODk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJpbWFyeS1idG4ge1xuXG4gICYuZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUY4NjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4ucXVlc3Rpb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuXG4gIC5zdWJtaXQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIC5pbnN0ciB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjMDA1Rjg2O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG5cbiAgLmNob2ljZSB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cblxuXG4gIC5zaW5nbGUtY2hvaWNlLFxuICAubXVsdGktY2hvaWNlIHtcbiAgICAvL3dpZHRoOiAxNXB4O1xuICAgIC8vaGVpZ2h0OiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogN3B4IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmRvdCB7XG4gICAgICB3aWR0aDogN3B4O1xuICAgICAgaGVpZ2h0OiA3cHg7XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUY4NjtcbiAgICAgIH1cblxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5tdWx0aS1jaG9pY2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAuZG90IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG59XG5cbi5zb3J0aW5nIHtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIC5sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUY4NjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmRkX2Nob2ljZSB7XG4gICAgd2lkdGg6IDM3MHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuY2hvaWNlIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmNkay1kcmFnLXByZXZpZXcge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIH1cbiAgXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG4gIFxuICAuY2hvaWNlOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgLmNob2ljZS5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5kZF9jaG9pY2U6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxufVxuXG4jZWFybl9iYXRjaDEge1xuICBsZWZ0OiA4NDVweDtcbiAgdG9wOiA1MzhweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuXG4jZWFybl9iYXRjaDIge1xuICBsZWZ0OiAxNjg1cHg7XG4gIHRvcDogMzQwcHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5yZXN1bHRfdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1Rjg2O1xuICBtYXJnaW46IC0zMHB4IC0zMHB4IDAgLTMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjRweCAjMDAwMDAwM0Q7XG59XG5cbi5idWJibGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9idWJibGUucG5nJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAudGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEzNnB4O1xuICAgIHRvcDogMTNweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cblxuLm9wYWNpdHkwIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmJhdGNoIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5cbiNiYXRjaCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNxdWVzdE5vQWRkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgLy9mb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMDtcbn1cblxuXG5cbkBrZXlmcmFtZXMgem9vbUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4ubXItNSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuXG5cbi5tci0yMCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Hasna Technology\Samples\om-in-action-one_ht\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "FFaf":
/*!************************************!*\
  !*** ./src/app/pages/game/data.js ***!
  \************************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
// export let data = [
//   //1
//   {
//     type: 'single_choice',
//     title: 'Stop 1: Customer Care Management',
//     question: 'What should we do to make sure we’re ready to receive orders from our customers? ',
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 100,
//     image_text: "Customer",
//     image: "Quest1_Normal.png",
//     correctImage: "Quest1_Right answer.png",
//     incorrectImage: "Quest1_Wrong answer.png",
//     choices: [{
//         text: 'Ensure the system data is complete and correct.',
//         correct: true,

//       },
//       {
//         text: 'Do nothing until you receive an order from the customer. ',
//         correct: false,
//       },
//       {
//         text: 'Document notes about your customer in a notebook or post-it notes.',
//         correct: false,
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>You’re off to a great start! This is correct.</h2>
//         <p>Our first step is to ensure everything is entered correctly into our system. When we make this our first step, we enable our customers to consistently experience a seamless Order Management process.</p>
//         <p>If this is a new customer, collaborate with the Commercial team and ensure Service Level Agreements are embedded in all systems in alignment with customer segmentation.</p>
//         `,
//       incorrect: `<h2 class='correct'>Uh oh! This isn’t correct.</h2>
//         <p>Your first step should have been to ensure everything is entered correctly into our system. When we make this our first step, we enable our customers to consistently experience a seamless Order Management process.</p>
//         <p>If this is a new customer, collaborate with the Commercial team and ensure Service Level Agreements are embedded in all systems in alignment with customer segmentation.</p>
//         `
//     }
//   },

//   //2
//   {
//     type: 'single_choice',
//     title: 'Stop 2: Order Intake',
//     question: `A one-off request has been received and requires a manual intervention on your part. A customer has a Special Delivery request. The customer wants the product loaded to a specific type of truck. Besides making sure the order is completed, what other action should you take?`,
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 100,
//     image_text: "Customer",
//     image: "Quest2_Normal.png",
//     correctImage: "Quest2_Right answer.png",
//     incorrectImage: "Quest2_Wrong answer.png",
//     choices: [{
//         text: 'There is nothing else to do.',
//         correct: false,

//       },
//       {
//         text: 'Assume this is the transportation mode they want to receive going forward and update the system.',
//         correct: false,
//       },
//       {
//         text: 'Reach out to the customer to understand the need for the Special Delivery.',
//         correct: true,
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>Great thinking! This is correct.</h2>
//         <p>After you process the request and the automated response is sent to the customer, you should reach out to the customer to understand the need for the Special Delivery. Determining the reason behind a special request helps us understand potential issues or better longer-term solutions.</p>
//         `,
//       incorrect: `<h2 class='correct'>Uh oh! This isn’t correct.</h2>
//         <p>After you process the request and the automated response is sent to the customer, you should reach out to the customer to understand the need for the Special Delivery. Determining the reason behind a special request helps us understand potential issues or better longer-term solutions.</p>
        
//         `
//     }
//   },

//   //2 batch
//   {
//     type: 'multiple_choice',
//     title: 'Bonus Question – Earn a Badge!',
//     question: 'In the Order Intake process, how can you be more proactive?',
//     instr: 'Select all that apply.',
//     selected: -1,
//     submitted: false,
//     score: 0,
//     batch: true,
//     image: "proactive.png",
//     correctImage: "batch_01.png",
//     incorrectImage: "batch_01_grey.png",
//     choices: [{
//         text: 'Make sure our systems and master data are updated with the correct customer details.',
//         correct: true,
//         selected: false
//       },
//       {
//         text: `Use advanced analytics and partner with the Sales team to identify meaningful cross/up sell opportunities.`,
//         correct: true,
//         selected: false
//       },
//       {
//         text: 'Inform other Customer Service team members by email that you’ve entered and confirmed the customer’s request.',
//         correct: false,
//         selected: false
//       },
//       {
//         text: 'After sending an automated order acknowledgement to the customer, call them to make sure they received the order confirmation.',
//         correct: false,
//         selected: false
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>Good job! This is correct.</h2>
//         <p>In a proactive environment, we strive to really understand our customers and their operations. Doing this allows us to help identify possible winning solutions for both the customer and Cargill.</p>
//         <p>There are many ways to be proactive. Think outside the box and be sure to engage cross-functional partners. </p>
//         `,
//       incorrect: `<h2 class='correct'>Sorry. This isn’t correct.</h2>
//        <p>The correct answers are: </p>
//        <ul>
//        <li>Make sure our systems and master data are updated with the correct customer details.</li>
//        <li>Use advanced analytics and partner with the Sales team to identify meaningful cross/up sell opportunities.</li>
//         </ul>
//         <p>In a proactive environment, we strive to really understand our customers and their operations. Doing this allows us to help identify possible winning solutions for both the customer and Cargill.</p>
//         <p>There are many ways to be proactive. Think outside the box and be sure to engage cross-functional partners.</p>

//         `
//     }
//   },

//   //3
//   {
//     type: 'multiple_choice',
//     title: 'Stop 3: Order Confirmation',
//     question: 'Which of the following are order confirmation steps that contribute to a seamless experience for our customers?',
//     instr: 'Select all that apply.',
//     selected: -1,
//     submitted: false,
//     score: 100,
//     image_text: "Customer",
//     image: "Quest3_Normal.png",
//     correctImage: "Quest3_Right answer.png",
//     incorrectImage: "Quest3_Wrong answer.png",
//     choices: [{
//         text: 'Confirm with CTL to ensure there were no issues with the order request.',
//         correct: true,

//       },
//       {
//         text: 'Actively monitor orders on credit hold.',
//         correct: true,
//       },
//       {
//         text: 'Explain to the customer why the order is priced the way it is.',
//         correct: false,
//       },
//       {
//         text: 'Ensure material availability is aligned to the shipment schedule.',
//         correct: true,
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>That was a tricky one, but you got it right! </h2>
//         <p>We all have examples of unplanned interruptions to our delivery plans after we confirmed an order. But, at the time we confirm the order to the customer, we should have validated items like credit and contract availability, pricing matches what the customer is expecting, quality timelines can be met, product is available at the sourcing location and transportation can be procured for the delivery.  This could be a system enabled validation or a manual check. And if there are any issues, we should be engaging the appropriate cross-functional partner quickly to keep the order moving through the confirmation process.  </p>
//         `,
//       incorrect: `<h2 class='correct'>This was tricky, but sorry, that isn’t correct.</h2>
//       <p>The correct answers are:</p>
//       <ul>
//       <li>We confirm with CTL to ensure there were no issues with the order request.</li>
//       <li>We actively monitor orders on credit hold.</li>
//       <li>We ensure material availability is aligned to the shipment schedule.</li>
//       </ul>
//       <p>We all have examples of unplanned interruptions to our delivery plans after we confirmed an order. But, at the time we confirm the order to the customer, we should have validated items like credit and contract availability, pricing matches what the customer is expecting, quality timelines can be met, product is available at the sourcing location and transportation can be procured for the delivery.  This could be a system enabled validation or a manual check. And if there are any issues, we should be engaging the appropriate cross-functional partner quickly to keep the order moving through the confirmation process.  </p>`
//     }
//   },

//   //4
//   {
//     type: 'single_choice',
//     title: 'Stop 4: Order Processing',
//     question: 'You’ve just been notified that a plant has experienced unplanned down time. You check with your customer and they desperately need the product before the original sourcing plant can provide it. What is your best course of action now?',
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 100,
//     image_text: "Customer",
//     image: "Quest4_Normal.png",
//     correctImage: "Quest4_Right answer.png",
//     incorrectImage: "Quest4_Wrong answer.png",
//     choices: [{
//         text: 'Inform the customer we will not be able to deliver their order and are cancelling it.',
//         correct: false,
//       },
//       {
//         text: 'Pick a similar product and deliver that one to the customer.',
//         correct: false,
//       },
//       {
//         text: 'Change the source to a new location and let the customer know the issue has been resolved.',
//         correct: false,
//       },
//       {
//         text: `Work with internal cross-functional teams to identify a solution that best meets the customer’s requirements and then confirm next steps with the customer.`,
//         correct: true,
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>Great job! That is correct.</h2>
//         <p>When obstacles like this one occur, it’s vital to engage the appropriate cross-functional partners to arrive at a complete solution. Hopefully, your business already has a well outlined process which includes decision rights to solve situations like this. If not, be sure to consider the multiple aspects of the solution which could involve collaboration with: Supply Chain Planning, Operations, Commercial, Transportation and Quality.</p>
//         `,
//       incorrect: `<h2 class='correct'>Oops. That isn’t correct.</h2>
//         <p>When obstacles like this one occur, it’s vital to engage the appropriate cross-functional partners to arrive at a complete solution. Hopefully, your business already has a well outlined process which includes decision rights to solve situations like this. If not, be sure to consider the multiple aspects of the solution which could involve collaboration with: Supply Chain Planning, Operations, Commercial, Transportation and Quality.</p>`,
//     }
//   },

//   //5
//   {
//     type: 'single_choice',
//     title: 'Stop 5: Order Fulfillment',
//     question: 'One of our trucks was en-route to a customer delivery when it got a flat tire. The truck carrier contacted CTL to notify them. Since this incident will result in a 2-hour delay before our customer will receive their order, CTL has notified us. What should you do next?',
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 100,
//     image_text: "Customer",
//     image: "Quest5_Normal.png",
//     correctImage: "Quest5_Right answer.png",
//     incorrectImage: "Quest5_Wrong answer.png",
//     choices: [{
//         text: 'Have CTL update the customer once they know when the product will be delivered.',
//         correct: false,
//       },
//       {
//         text: `Do nothing unless the customer reaches out to you.`,
//         correct: false,
//       },
//       {
//         text: 'Proactively inform the customer of the delay and when the new delivery time is expected to be.',
//         correct: true,
//       },
//       {
//         text: `Call the customer and assure them you are sending another truck to meet the original timeline.`,
//         correct: false,
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>Perfect! That is correct.</h2>
//         <p>It’s important to have proactive communication with our customers. In this case, we definitely want to advise them of the delay as well as inform them as accurately as possible what the new delivery time is expected to be. This is achieved by strong internal collaboration while providing one point of contact for the customer.</p>
//         `,
//       incorrect: `<h2 class='correct'>Sorry, but that isn’t correct.</h2>
//         <p>It’s important to have proactive communication with our customers. In this case, we definitely want to advise them of the delay as well as inform them as accurately as possible what the new delivery time is expected to be. This is achieved by strong internal collaboration while providing one point of contact for the customer.</p>
        
// `
//     }
//   },

//   //6
//   /*
//   {
//     type: 'sort_order',
//     title: 'Stop 6: Order Support',
//     question: 'A large portion of our work in Customer Service comes from Order Support. Sort the items below into requests that fall under Customer Service Expertise, or ones that fall under Other Functional Expertise.',
//     instr: 'Select each item and drop them into the respective categories.',
//     selected: -1,
//     submitted: false,
//     score: 100,
//     sorting1_title: "Customer Service Expertise",
//     sorting2_title: "Other Functional Expertise",
//     sorting1: [
//       "General inquiries about our products",
//       "Rejected or returned orders",
//       "Order exceptions or escalations",
//       "Invoice disputes",
//       "Customer complaints",
//       "New customers"
//     ],
//     sorting2: [
//       "Customer segmentation rules",
//       "Entering customer orders",
//       "Logistics planning with CTL",
//       "Release of customer orders with overdue invoices"
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>You’ve got it! That is correct.</h2>
//       <div class="flex sorting">
//         <div class="mr-20">
//           <div><b>Our Expertise</b></div>
//           <div class='dd_choice'>
//             <div class='choice'>General inquiries about our products</div>
//             <div class='choice'>Rejected or returned orders</div>
//             <div class='choice'>Order exceptions or escalations</div>
//             <div class='choice'>Invoice disputes</div>
//             <div class='choice'>Customer complaints</div>
//             <div class='choice'>New customers</div>
//           </div>
//         </div>
//         <div>
//           <div><b>Not Our Expertise</b></div> 
//           <div class='dd_choice'>
//             <div class='choice'>Customer segmentation rules</div>
//             <div class='choice'>Entering customer orders</div>
//             <div class='choice'>Logistics planning with CTL</div>
//             <div class='choice'>Release of customer orders with overdue invoices</div>
//           </div>
//         </div>
//       </div>
//       <br><br>
//         `,
//       incorrect: `<h2 class='correct'>Good try, but that isn’t correct.</h2>
//         <p>Here is the correct answer.</p>
//         <div class="flex">
//           <div class="mr-20">
//             <p><b>Our Expertise</b></p>
//             <p>General inquiries about our products</p>
//             <p>Rejected or returned orders</p>
//             <p>Order exceptions or escalations</p>
//             <p>Invoice disputes</p>
//             <p>Customer complaints</p>
//             <p>New customers</p>
//           </div>
//           <div>
//             <p><b>Not Our Expertise</b></p>
//             <p>Customer segmentation rules</p>
//             <p>Entering customer orders</p>
//             <p>Logistics planning with CTL</p>
//             <p>Release of customer orders with overdue invoices</p>
//           </div>
//         </div>
//         `
//     }
//   },
// */
// //6
// {
//   type: 'multiple_choice',
//   title: 'Stop 6: Order Support',
//   question: 'A large portion of our time in customer service is spent on Order Support activities. Which of the following would be examples of Order Support?',
//   instr: 'Select all that apply.',
//   selected: -1,
//   submitted: false,
//   score: 100,
//   image_text: "Customer",
//   image: "Quest7_Normal.png",
//   correctImage: "Quest7_Right answer.png",
//   incorrectImage: "Quest7_Wrong answer.png",
//   choices: [{
//       text: 'Manage order processing exceptions',
//       correct: true,

//     },
//     {
//       text: 'New customer set-up',
//       correct: false,
//     },
//     {
//       text: 'Support customer disputes',
//       correct: true,
//     },
//     {
//       text: 'Manage customer complaints and inquiries ',
//       correct: true,
//     },
//     {
//       text: 'Quote a price for the customer ',
//       correct: false,
//     }
//   ],
//   feedback: {
//     correct: `<h2 class='correct'>You’ve got it! That is correct.</h2>
//       <p>Customer Support is a broad group of activities but here are a few key things to remember that can apply in all situations:</p>
//       <ul>
//       <li>Look for what’s really driving the request or challenge – what is the root of the issue – and strive for long term solutions</li>
//       <li>Work with cross-functional partners to get to a complete solution for the customer</li>
//       <li>Time spent in this area can make all other customer interactions go more smoothly</li>
//       </ul>
//       `,
//     incorrect: `<h2 class='correct'>Good try, but that isn’t correct.</h2>
//     <p>The correct answer is:</p>
//     <ul>
//     <li>Manage order processing exceptions</li>
//     <li>Support customer disputes</li>
//     <li>Manage customer complaints and inquiries</li>
//     </ul>
//     <p>Customer Support is a broad group of activities but here are a few key things to remember that can apply in all situations:</p>
//     <ul>
//     <li>Look for what’s really driving the request or challenge – what is the root of the issue – and strive for long term solutions</li>
//     <li>Work with cross-functional partners to get to a complete solution for the customer</li>
//     <li>Time spent in this area can make all other customer interactions go more smoothly</li>
//     </ul>`
//   }
// },
//   //6 batch
//   {
//     type: 'single_choice',
//     title: 'Bonus Question – Earn a Badge!',
//     question: 'In the Order Support process, how can you be more proactive?',
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 0,
//     batch: true,
//     image: "proactive.png",
//     correctImage: "batch_01.png",
//     incorrectImage: "batch_01_grey.png",
//     choices: [{
//         text: `Customer Complaint: If the complaint is about quality, route the case to the Quality Team. Continue to follow up until the complaint is resolved and communicated to the customer.`,
//         correct: true,
//       },
//       {
//         text: `Financial Dispute: Forward the dispute notification from the customer to the CTC team and do nothing more.`,
//         correct: false,
//       },
//       {
//         text: 'Technical Issues: Multiple customers reach out saying they cannot download the documents from the customer portal. You manually send the documents to the customers and consider the case closed.',
//         correct: false,
//       }
//     ],
//     feedback: {
//       //choice_feedback: false,
//       correct: `<h2 class='correct'>You got it right!</h2>
//       <p>In this case, the proactive response would be to ask questions to better understand the reason for a change order. In the other situations, you are making a reactive decision, instead of a proactive one.</p>
//       <p>Order Support involves many things. The important thing to remember is, we are not just trying to resolve a single incident or instance and move on, but rather get to the root cause and a valid solution.</p>
//         `,
//         incorrect: [`<h2 class='correct'>That isn’t quite right.</h2>
//         <p>In this case, the proactive response would be to ask questions to better understand the reason for a change order. In the other situations, you are making a reactive decision, instead of a proactive one.</p>
//         <p>Order Support involves many things. The important thing to remember is, we are not just trying to resolve a single incident or instance and move on, but rather get to the root cause and a valid solution.</p>
//         `]
//     }
//   },

//   // 10 miles 
//   {
//     type: 'single_choice',
//     title: 'Voice of Customer',
//     question: 'Your team received initial results from the latest Voice of the customer (VoC) survey from the VoC COE Team. What should you do next?',
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 200,
//     image_text: "Voice of Customer",
//     image: "customer.png",
//     correctImage: "",
//     incorrectImage: "",
//     choices: [{
//         text: 'Archive the results for yourself.',
//         correct: false,
//       },
//       {
//         text: `Forward the results to customers.`,
//         correct: false,
//       },
//       {
//         text: 'Work to understand the data behind it and to determine improvement actions.',
//         correct: true,
//       },
//       {
//         text: `Ask VoC COE to resolve the customer issues.`,
//         correct: false,
//       }
//     ],
//     feedback: {
//       choice_feedback: false,
//       correct: `<h2 class='correct'>Exactly. You are correct.</h2>
//         <p>Once you get this report, take time to understand the data behind it. Work with the VoC COE team to further your understanding. Compare results to targets and look at the root cause analysis in the case of underperformance.</p>
//         <p>Once you understand any low points, define the problems and collaborate with other teammates to identify potential improvements.</p>
//         <p>If appropriate, inform selected key customers about improvement results and actions based on their feedback.</p>
//         `,
//       incorrect: `<h2 class='correct'>No. That is incorrect.</h2>
//       <p>Once you get this report, take time to understand the data behind it. Work with the VoC COE team to further your understanding. Compare results to targets and look at the root cause analysis in the case of underperformance.</p>
//       <p>Once you understand any low points, define the problems and collaborate with other teammates to identify potential improvements.</p>
//       <p>If appropriate, inform selected key customers about improvement results and actions based on their feedback.</p>
//       `
//     }
//   },

//   {
//     type: 'single_choice',
//     title: 'Customer Focus',
//     question: `
//     <p>Every touchpoint with a customer is an opportunity to learn and better equip the business with information by:</p>
//     <ul><li>Asking meaningful questions</li>
//     <li>Validating key customer details, and</li>
//     <li>Documenting notes in Salesforce to share the information with others across Cargill</li>
//     </ul>
//     <p>Is this statement entirely true or entirely false?</p>
//     `,
//     instr: 'Select the correct option.',
//     selected: -1,
//     submitted: false,
//     score: 200,
//     image_text: "Voice of Customer",
//     image: "customer.png",
//     correctImage: "",
//     incorrectImage: "",
//     choices: [{
//         text: 'True',
//         correct: true,

//       },
//       {
//         text: `False`,
//         correct: false,
//       }
//     ],
//     feedback: {
//       correct: `<h2 class='correct'>Very good. That is correct!</h2>
//         <p>Every opportunity taken to learn more about the customers’ needs allows us to better serve them in the agreed upon manner and can provide potential opportunities for Cargill to fill more of their business needs as well.</p>
//         <p>Getting to know our customers’ needs will better empower us to be more effective, efficient, and agile, and will allow us to provide value for both Cargill and our customers.</p>
//         `,
//       incorrect: `<h2 class='correct'>Sorry. That’s incorrect.</h2>
//         <p>Every opportunity taken to learn more about the customers’ needs allows us to better serve them in the agreed upon manner and can provide potential opportunities for Cargill to fill more of their business needs as well.</p>
//         <p>Getting to know our customers’ needs will better empower us to be more effective, efficient, and agile, and will allow us to provide value for both Cargill and our customers.</p>
//         `
//     }
//   },
// ];



let data = [
  //1
  {
    type: 'single_choice',
    title: 'Stop 1: Customer Account Management',
    question: 'What should we do to make sure we’re ready to receive orders from our customers? ',
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest1_Normal.png",
    correctImage: "Quest1_Right answer.png",
    incorrectImage: "Quest1_Wrong answer.png",
    choices: [{
        text: 'Ensure the system data is complete and correct.',
        correct: true,

      },
      {
        text: 'Do nothing until you receive an order from the customer. ',
        correct: false,
      },
      {
        text: 'Document notes about your customer in a notebook or post-it notes.',
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>You’re off to a great start! This is correct.</h2>
        <p>Our first step is to ensure everything is entered correctly into our system. When we make this our first step, we enable our customers to consistently experience a seamless Order Management process.</p>
        <p>If this is a new customer, collaborate with the Commercial team and ensure Service Level Agreements are embedded in all systems in alignment with customer segmentation.</p>
        `,
      incorrect: `<h2 class='correct'>Uh oh! This isn’t correct.</h2>
        <p>Your first step should have been to ensure everything is entered correctly into our system. When we make this our first step, we enable our customers to consistently experience a seamless Order Management process.</p>
        <p>If this is a new customer, collaborate with the Commercial team and ensure Service Level Agreements are embedded in all systems in alignment with customer segmentation.</p>
        `
    }
  },
//2
  {
    type: 'single_choice',
    title: 'Stop 2: Contract Management',
    question: 'You receive a call from one of our farmer clients asking to modify one of the conditions of his last contract. First you validate the request with the commercial representative and then you issue the corresponding amendment for the new condition in the system. You know that the amendment requires the client’s signature, what steps should you follow?',
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest1_Normal.png",
    correctImage: "Quest1_Right answer.png",
    incorrectImage: "Quest1_Wrong answer.png",
    choices: [{
        text: 'You don’t need to do anything else.',
        correct: false,

      },
      {
        text: 'Print a copy and save it in the drawer for when the client visits the office he can sign it manually',
        correct: false,
      },
      {
        text: 'Call the client proactively and let him know that he has the new document available in a platform to be digitally signed',
        correct: true,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great thinking! This is correct.</h2>
        <p>For any change in the existing contract and for issuing corresponding amendments, call the farmer clients proactively and inform them that the new document is available in the platform, which they needs to sign digitally.</p>`,
      incorrect: `<h2 class='correct'>Uh oh! This isn’t correct.</h2>
        <p>For any change in the existing contract and for issuing corresponding amendments, call the farmer clients proactively and inform them that the new document is available in the platform, which they needs to sign digitally.</p>
        `
    }
  },
  //3
  {
    type: 'single_choice',
    title: 'Stop 3: Order Intake',
    question: `A one-off request has been received and requires a manual intervention on your part. A customer has a Special Delivery request. The customer wants the product loaded to a specific type of truck. Besides making sure the order is completed, what other action should you take?`,
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest2_Normal.png",
    correctImage: "Quest2_Right answer.png",
    incorrectImage: "Quest2_Wrong answer.png",
    choices: [{
        text: 'There is nothing else to do.',
        correct: false,

      },
      {
        text: 'Assume this is the transportation mode they want to receive going forward and update the system.',
        correct: false,
      },
      {
        text: 'Reach out to the customer to understand the need for the Special Delivery.',
        correct: true,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great thinking! This is correct.</h2>
        <p>After you process the request and the automated response is sent to the customer, you should reach out to the customer to understand the need for the Special Delivery. Determining the reason behind a special request helps us understand potential issues or better longer-term solutions.</p>
        `,
      incorrect: `<h2 class='correct'>Uh oh! This isn’t correct.</h2>
        <p>After you process the request and the automated response is sent to the customer, you should reach out to the customer to understand the need for the Special Delivery. Determining the reason behind a special request helps us understand potential issues or better longer-term solutions.</p>
        
        `
    }
  },

  //3 batch
  {
    type: 'multiple_choice',
    title: 'Bonus Question – Earn a Badge!',
    question: 'In the Order Intake process, how can you be more proactive?',
    instr: 'Select all that apply.',
    selected: -1,
    submitted: false,
    score: 0,
    batch: true,
    image: "proactive.png",
    correctImage: "batch_01.png",
    incorrectImage: "batch_01_grey.png",
    choices: [{
        text: 'Make sure our systems and master data are updated with the correct customer details.',
        correct: true,
        selected: false
      },
      {
        text: `Use advanced analytics and partner with the Sales team to identify meaningful cross/up sell opportunities.`,
        correct: true,
        selected: false
      },
      {
        text: 'Inform other Customer Service team members by email that you’ve entered and confirmed the customer’s request.',
        correct: false,
        selected: false
      },
      {
        text: 'After sending an automated order acknowledgement to the customer, call them to make sure they received the order confirmation.',
        correct: false,
        selected: false
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Good job! This is correct.</h2>
        <p>In a proactive environment, we strive to really understand our customers and their operations. Doing this allows us to help identify possible winning solutions for both the customer and Organization.</p>
        <p>There are many ways to be proactive. Think outside the box and be sure to engage cross-functional partners. </p>
        `,
      incorrect: `<h2 class='correct'>Sorry. This isn’t correct.</h2>
       <p>The correct answers are: </p>
       <ul>
       <li>Make sure our systems and master data are updated with the correct customer details.</li>
       <li>Use advanced analytics and partner with the Sales team to identify meaningful cross/up sell opportunities.</li>
        </ul>
        <p>In a proactive environment, we strive to really understand our customers and their operations. Doing this allows us to help identify possible winning solutions for both the customer and Organization.</p>
        <p>There are many ways to be proactive. Think outside the box and be sure to engage cross-functional partners.</p>

        `
    }
  },

  //4
  {
    type: 'multiple_choice',
    title: 'Stop 4: Order Confirmation',
    question: 'Which of the following are order confirmation steps that contribute to a seamless experience for our customers?',
    instr: 'Select all that apply.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest3_Normal.png",
    correctImage: "Quest3_Right answer.png",
    incorrectImage: "Quest3_Wrong answer.png",
    choices: [{
        text: 'Confirm with CTL to ensure there were no issues with the order request.',
        correct: true,

      },
      {
        text: 'Actively monitor orders on credit hold.',
        correct: true,
      },
      {
        text: 'Explain to the customer why the order is priced the way it is.',
        correct: false,
      },
      {
        text: 'Ensure material availability is aligned to the shipment schedule.',
        correct: true,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>That was a tricky one, but you got it right! </h2>
        <p>We all have examples of unplanned interruptions to our delivery plans after we confirmed an order. But, at the time we confirm the order to the customer, we should have validated items like credit and contract availability, pricing matches what the customer is expecting, quality timelines can be met, product is available at the sourcing location and transportation can be procured for the delivery.  This could be a system enabled validation or a manual check. And if there are any issues, we should be engaging the appropriate cross-functional partner quickly to keep the order moving through the confirmation process.  </p>
        `,
      incorrect: `<h2 class='correct'>This was tricky, but sorry, that isn’t correct.</h2>
      <p>The correct answers are:</p>
      <ul>
      <li>We confirm with CTL to ensure there were no issues with the order request.</li>
      <li>We actively monitor orders on credit hold.</li>
      <li>We ensure material availability is aligned to the shipment schedule.</li>
      </ul>
      <p>We all have examples of unplanned interruptions to our delivery plans after we confirmed an order. But, at the time we confirm the order to the customer, we should have validated items like credit and contract availability, pricing matches what the customer is expecting, quality timelines can be met, product is available at the sourcing location and transportation can be procured for the delivery.  This could be a system enabled validation or a manual check. And if there are any issues, we should be engaging the appropriate cross-functional partner quickly to keep the order moving through the confirmation process.  </p>`
    }
  },

  //5
  {
    type: 'single_choice',
    title: 'Stop 5: Contract / Order Processing',
    question: 'You’ve just been notified that a plant has experienced unplanned down time. You check with your customer and they desperately need the product before the original sourcing plant can provide it. What is your best course of action now?',
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest4_Normal.png",
    correctImage: "Quest4_Right answer.png",
    incorrectImage: "Quest4_Wrong answer.png",
    choices: [{
        text: 'Inform the customer we will not be able to deliver their order and are cancelling it.',
        correct: false,
      },
      {
        text: 'Pick a similar product and deliver that one to the customer.',
        correct: false,
      },
      {
        text: 'Change the source to a new location and let the customer know the issue has been resolved.',
        correct: false,
      },
      {
        text: `Work with internal cross-functional teams to identify a solution that best meets the customer’s requirements and then confirm next steps with the customer.`,
        correct: true,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! That is correct.</h2>
        <p>When obstacles like this one occur, it’s vital to engage the appropriate cross-functional partners to arrive at a complete solution. Hopefully, your business already has a well outlined process which includes decision rights to solve situations like this. If not, be sure to consider the multiple aspects of the solution which could involve collaboration with: Supply Chain Planning, Operations, Commercial, Transportation and Quality.</p>
        `,
      incorrect: `<h2 class='correct'>Oops. That isn’t correct.</h2>
        <p>When obstacles like this one occur, it’s vital to engage the appropriate cross-functional partners to arrive at a complete solution. Hopefully, your business already has a well outlined process which includes decision rights to solve situations like this. If not, be sure to consider the multiple aspects of the solution which could involve collaboration with: Supply Chain Planning, Operations, Commercial, Transportation and Quality.</p>`,
    }
  },

  //6
  {
    type: 'single_choice',
    title: 'Stop 6: Contract / Order Fulfillment',
    question: 'One of our trucks was en-route to a customer delivery when it got a flat tire. The truck carrier contacted CTL to notify them. Since this incident will result in a 2-hour delay before our customer will receive their order, CTL has notified us. What should you do next?',
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest5_Normal.png",
    correctImage: "Quest5_Right answer.png",
    incorrectImage: "Quest5_Wrong answer.png",
    choices: [{
        text: 'Have CTL update the customer once they know when the product will be delivered.',
        correct: false,
      },
      {
        text: `Do nothing unless the customer reaches out to you.`,
        correct: false,
      },
      {
        text: 'Proactively inform the customer of the delay and when the new delivery time is expected to be.',
        correct: true,
      },
      {
        text: `Call the customer and assure them you are sending another truck to meet the original timeline.`,
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Perfect! That is correct.</h2>
        <p>It’s important to have proactive communication with our customers. In this case, we definitely want to advise them of the delay as well as inform them as accurately as possible what the new delivery time is expected to be. This is achieved by strong internal collaboration while providing one point of contact for the customer.</p>
        `,
      incorrect: `<h2 class='correct'>Sorry, but that isn’t correct.</h2>
        <p>It’s important to have proactive communication with our customers. In this case, we definitely want to advise them of the delay as well as inform them as accurately as possible what the new delivery time is expected to be. This is achieved by strong internal collaboration while providing one point of contact for the customer.</p>
        
`
    }
  },

  //7
  {
    type: 'multiple_choice',
    title: 'Stop 7: Contract Application, Settlement and Invoice',
    question: 'In a seamless application and settlement process, how can you be more proactive to keep all the contracts prepared for settlement when fulfilled?',
    instr: 'Select all that apply.',
    selected: -1,
    submitted: false,
    score: 100,
    image_text: "Customer",
    image: "Quest3_Normal.png",
    correctImage: "Quest3_Right answer.png",
    incorrectImage: "Quest3_Wrong answer.png",
    choices: [{
        text: 'Collecting the contract details and raising inquiries to stakeholders in advance.',
        correct: true,

      },
      {
        text: 'Receiving quality claims and work with other areas to develop resolution plans with agility.',
        correct: true,
      },
      {
        text: 'Monitoring and validating corresponding third-party charges.',
        correct: true,
      },
      {
        text: 'Verifying payment terms.',
        correct: true,
      },
      {
        text: 'Asking the customer if he thinks there is something missing to fulfill his contract.',
        correct: false,
      },
      {
        text: 'Starting to review the contract when the client calls to ask for status.',
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Good thinking. That is correct!</h2>
        <p>For a seamless contract application and settlement process, ensure you collect contract details, raise inquiries to stakeholders, receive  quality claims, work with other areas to resolve contract issues with agility, monitor and validate corresponding third-party charges and verify payment terms.</p>
        `,
      incorrect: `<h2 class='correct'>Uh oh! That isn’t correct!</h2>
      <p>For a seamless contract application and settlement process, it’s important to be proactive in identifying issues. Ensure you collect contract details, raise inquiries to stakeholders, receive quality claims, work with other areas to resolve contract issues with agility, monitor and validate corresponding third-party charges and verify payment terms.</p>`
    }
  },

  //6
  /*
  {
    type: 'sort_order',
    title: 'Stop 6: Order Support',
    question: 'A large portion of our work in Customer Service comes from Order Support. Sort the items below into requests that fall under Customer Service Expertise, or ones that fall under Other Functional Expertise.',
    instr: 'Select each item and drop them into the respective categories.',
    selected: -1,
    submitted: false,
    score: 100,
    sorting1_title: "Customer Service Expertise",
    sorting2_title: "Other Functional Expertise",
    sorting1: [
      "General inquiries about our products",
      "Rejected or returned orders",
      "Order exceptions or escalations",
      "Invoice disputes",
      "Customer complaints",
      "New customers"
    ],
    sorting2: [
      "Customer segmentation rules",
      "Entering customer orders",
      "Logistics planning with CTL",
      "Release of customer orders with overdue invoices"
    ],
    feedback: {
      correct: `<h2 class='correct'>You’ve got it! That is correct.</h2>
      <div class="flex sorting">
        <div class="mr-20">
          <div><b>Our Expertise</b></div>
          <div class='dd_choice'>
            <div class='choice'>General inquiries about our products</div>
            <div class='choice'>Rejected or returned orders</div>
            <div class='choice'>Order exceptions or escalations</div>
            <div class='choice'>Invoice disputes</div>
            <div class='choice'>Customer complaints</div>
            <div class='choice'>New customers</div>
          </div>
        </div>
        <div>
          <div><b>Not Our Expertise</b></div> 
          <div class='dd_choice'>
            <div class='choice'>Customer segmentation rules</div>
            <div class='choice'>Entering customer orders</div>
            <div class='choice'>Logistics planning with CTL</div>
            <div class='choice'>Release of customer orders with overdue invoices</div>
          </div>
        </div>
      </div>
      <br><br>
        `,
      incorrect: `<h2 class='correct'>Good try, but that isn’t correct.</h2>
        <p>Here is the correct answer.</p>
        <div class="flex">
          <div class="mr-20">
            <p><b>Our Expertise</b></p>
            <p>General inquiries about our products</p>
            <p>Rejected or returned orders</p>
            <p>Order exceptions or escalations</p>
            <p>Invoice disputes</p>
            <p>Customer complaints</p>
            <p>New customers</p>
          </div>
          <div>
            <p><b>Not Our Expertise</b></p>
            <p>Customer segmentation rules</p>
            <p>Entering customer orders</p>
            <p>Logistics planning with CTL</p>
            <p>Release of customer orders with overdue invoices</p>
          </div>
        </div>
        `
    }
  },
*/
//8
{
  type: 'multiple_choice',
  title: 'Stop 8: Contract / Order Support',
  question: 'A large portion of our time in customer service is spent on Contract / Order Support activities. Which of the following would be examples of Contract / Order Support?',
  instr: 'Select all that apply.',
  selected: -1,
  submitted: false,
  score: 100,
  image_text: "Customer",
  image: "Quest7_Normal.png",
  correctImage: "Quest7_Right answer.png",
  incorrectImage: "Quest7_Wrong answer.png",
  choices: [{
      text: 'Manage contract / order processing exceptions',
      correct: true,

    },
    {
      text: 'New customer set-up',
      correct: false,
    },
    {
      text: 'Support customer disputes',
      correct: true,
    },
    {
      text: 'Manage customer complaints and inquiries ',
      correct: true,
    },
    {
      text: 'Quote a price for the customer ',
      correct: false,
    }
  ],
  feedback: {
    correct: `<h2 class='correct'>You’ve got it! That is correct.</h2>
      <p>Customer Support is a broad group of activities but here are a few key things to remember that can apply in all situations:</p>
      <ul>
      <li>Look for what’s really driving the request or challenge – what is the root of the issue – and strive for long term solutions</li>
      <li>Work with cross-functional partners to get to a complete solution for the customer</li>
      <li>Time spent in this area can make all other customer interactions go more smoothly</li>
      </ul>
      `,
    incorrect: `<h2 class='correct'>Good try, but that isn’t correct.</h2>
    <p>The correct answer is:</p>
    <ul>
    <li>Manage contract / order processing exceptions</li>
    <li>Support customer disputes</li>
    <li>Manage customer complaints and inquiries</li>
    </ul>
    <p>Customer Support is a broad group of activities but here are a few key things to remember that can apply in all situations:</p>
    <ul>
    <li>Look for what’s really driving the request or challenge – what is the root of the issue – and strive for long term solutions</li>
    <li>Work with cross-functional partners to get to a complete solution for the customer</li>
    <li>Time spent in this area can make all other customer interactions go more smoothly</li>
    </ul>`
  }
},
  //8 batch
  {
    type: 'single_choice',
    title: 'Bonus Question – Earn a Badge!',
    question: 'In the Contract / Order Support process, how can you be more proactive?',
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 0,
    batch: true,
    image: "proactive.png",
    correctImage: "batch_01.png",
    incorrectImage: "batch_01_grey.png",
    choices: [{
        text: `Customer Complaint: If the complaint is about quality, route the case to the Quality Team. Continue to follow up until the complaint is resolved and communicated to the customer.`,
        correct: true,
      },
      {
        text: `Financial Dispute: Forward the dispute notification from the customer to the CTC team and do nothing more.`,
        correct: false,
      },
      {
        text: 'Technical Issues: Multiple customers reach out saying they cannot download the documents from the customer portal. You manually send the documents to the customers and consider the case closed.',
        correct: false,
      }
    ],
    feedback: {
      //choice_feedback: false,
      correct: `<h2 class='correct'>You got it right!</h2>
      <p>In this case, the proactive response would be to ask questions to better understand the reason for a change order. In the other situations, you are making a reactive decision, instead of a proactive one.</p>
      <p>Contract / Order Support involves many things. The important thing to remember is, we are not just trying to resolve a single incident or instance and move on, but rather get to the root cause and a valid solution.</p>
        `,
        incorrect: [`<h2 class='correct'>That isn’t quite right.</h2>
        <p>In this case, the proactive response would be to ask questions to better understand the reason for a change order. In the other situations, you are making a reactive decision, instead of a proactive one.</p>
        <p>Contract / Order Support involves many things. The important thing to remember is, we are not just trying to resolve a single incident or instance and move on, but rather get to the root cause and a valid solution.</p>
        `]
    }
  },

  // 10 miles 
  {
    type: 'single_choice',
    title: 'Voice of Customer',
    question: 'Your team received initial results from the latest Voice of the customer (VoC) survey from the VoC COE Team. What should you do next?',
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 200,
    image_text: "Voice of Customer",
    image: "customer.png",
    correctImage: "",
    incorrectImage: "",
    choices: [{
        text: 'Archive the results for yourself.',
        correct: false,
      },
      {
        text: `Forward the results to customers.`,
        correct: false,
      },
      {
        text: 'Work to understand the data behind it and to determine improvement actions.',
        correct: true,
      },
      {
        text: `Ask VoC COE to resolve the customer issues.`,
        correct: false,
      }
    ],
    feedback: {
      choice_feedback: false,
      correct: `<h2 class='correct'>Exactly. You are correct.</h2>
        <p>Once you get this report, take time to understand the data behind it. Work with the VoC COE team to further your understanding. Compare results to targets and look at the root cause analysis in the case of underperformance.</p>
        <p>Once you understand any low points, define the problems and collaborate with other teammates to identify potential improvements.</p>
        <p>If appropriate, inform selected key customers about improvement results and actions based on their feedback.</p>
        `,
      incorrect: `<h2 class='correct'>No. That is incorrect.</h2>
      <p>Once you get this report, take time to understand the data behind it. Work with the VoC COE team to further your understanding. Compare results to targets and look at the root cause analysis in the case of underperformance.</p>
      <p>Once you understand any low points, define the problems and collaborate with other teammates to identify potential improvements.</p>
      <p>If appropriate, inform selected key customers about improvement results and actions based on their feedback.</p>
      `
    }
  },

  {
    type: 'single_choice',
    title: 'Customer Focus',
    question: `
    <p>Every touchpoint with a customer is an opportunity to learn and better equip the business with information by:</p>
    <ul><li>Asking meaningful questions</li>
    <li>Validating key customer details, and</li>
    <li>Documenting notes in Salesforce to share the information with others across Organization</li>
    </ul>
    <p>Is this statement entirely true or entirely false?</p>
    `,
    instr: 'Select the correct option.',
    selected: -1,
    submitted: false,
    score: 200,
    image_text: "Voice of Customer",
    image: "customer.png",
    correctImage: "",
    incorrectImage: "",
    choices: [{
        text: 'True',
        correct: true,

      },
      {
        text: `False`,
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Very good. That is correct!</h2>
        <p>Every opportunity taken to learn more about the customers’ needs allows us to better serve them in the agreed upon manner and can provide potential opportunities for Organization to fill more of their business needs as well.</p>
        <p>Getting to know our customers’ needs will better empower us to be more effective, efficient, and agile, and will allow us to provide value for both Organization and our customers.</p>
        `,
      incorrect: `<h2 class='correct'>Sorry. That’s incorrect.</h2>
        <p>Every opportunity taken to learn more about the customers’ needs allows us to better serve them in the agreed upon manner and can provide potential opportunities for Organization to fill more of their business needs as well.</p>
        <p>Getting to know our customers’ needs will better empower us to be more effective, efficient, and agile, and will allow us to provide value for both Organization and our customers.</p>
        `
    }
  },
];

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'om-in-action-one';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/game/game.component */ "/JRT");
/* harmony import */ var _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/quiz/quiz.component */ "yuWe");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"]
            //DragScrollModule, 
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"],
        _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"]
        //DragScrollModule, 
    ] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/game/game.component */ "/JRT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _pages_game_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yuWe":
/*!**********************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.ts ***!
  \**********************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function QuizComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuizComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to the Order Management in Action game. In this game, go through the Order Management process as a Customer Service Representative.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You will be given several scenarios. In each, choose the ideal way to serve customers while achieving mutually winning outcomes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Remember to Think Forward, applying what you\u2019ve learned so far. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Select Next to learn more about the game.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_0_div_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.showQuizScreen = "rule"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuizComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About the Game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your journey begins with an order request scenario and runs through the end-to-end process\u00A0 with the customer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Each question is worth 100 points, and you can attempt each question only once.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "There are a couple hidden \u201CProactive Behavior\u201D questions. These are focused on positive behaviors that drive exceptional performance and ones we want to see more of in action. For correct answers here, you will earn bonus badges!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "You need to score at least\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "600 points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " to win.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Are you ready to get into the Game? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Click Start and let\u2019s begin!\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_0_div_4_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.action(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function QuizComponent_div_0_div_5_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_0_div_5_div_1_div_11_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r13 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r14.selectedQuiz.selected = i_r13; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r11.selectedQuiz.selected == i_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.text, " ");
} }
function QuizComponent_div_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuizComponent_div_0_div_5_div_1_div_11_Template, 6, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizComponent_div_0_div_5_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.quizSubmit(ctx_r16.selectedQuiz); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.selectedQuiz.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.selectedQuiz.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.selectedQuiz.instr, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.selectedQuiz.choices);
} }
function QuizComponent_div_0_div_5_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 30);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r18.selectedQuiz.feedback.correct, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function QuizComponent_div_0_div_5_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 30);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r19.selectedQuiz.feedback.incorrect, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function QuizComponent_div_0_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuizComponent_div_0_div_5_div_2_div_1_Template, 1, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuizComponent_div_0_div_5_div_2_div_2_Template, 1, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.selectedQuiz.correct == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.selectedQuiz.correct == false);
} }
function QuizComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuizComponent_div_0_div_5_div_1_Template, 15, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuizComponent_div_0_div_5_div_2_Template, 6, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.selectedQuiz.submitted != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.selectedQuiz.submitted == true);
} }
function QuizComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuizComponent_div_0_div_1_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuizComponent_div_0_div_3_Template, 14, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuizComponent_div_0_div_4_Template, 22, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuizComponent_div_0_div_5_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showQuizScreen != "quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showQuizScreen == "intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showQuizScreen == "rule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showQuizScreen == "quiz");
} }
class QuizComponent {
    constructor() { }
    ngOnInit() {
    }
    action(a) {
    }
    quizSubmit(a) {
    }
}
QuizComponent.ɵfac = function QuizComponent_Factory(t) { return new (t || QuizComponent)(); };
QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizComponent, selectors: [["app-quiz"]], decls: 1, vars: 1, consts: [["id", "quiz", "class", "quiz flex fcenter", 4, "ngIf"], ["id", "quiz", 1, "quiz", "flex", "fcenter"], ["class", "instructor", 4, "ngIf"], [1, "panel"], ["class", "intro", 4, "ngIf"], ["class", "rule", 4, "ngIf"], [4, "ngIf"], [1, "instructor"], ["src", "assets/man.png", "alt", "Man"], [1, "intro"], [1, "text-center"], [1, "primary-btn", 3, "click"], [1, "rule"], ["class", "question", 4, "ngIf"], ["class", "feedback", 4, "ngIf"], [1, "question"], [1, "flex"], [1, "icon"], [1, "title"], [1, "text"], [1, "text-center", "instr"], [1, "choices"], [4, "ngFor", "ngForOf"], [1, "text-center", "submit"], [1, "flex", "choice", 3, "click"], [1, "single-choice"], [1, "dot", 3, "ngClass"], [1, "feedback"], [3, "innerHTML", 4, "ngIf"], [1, "primary-btn"], [3, "innerHTML"]], template: function QuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuizComponent_div_0_Template, 6, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPanel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWl6LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map