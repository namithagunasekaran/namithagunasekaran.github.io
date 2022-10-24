"use strict";
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 2553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ slideRight),
/* harmony export */   "j": () => (/* binding */ fadein)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const fadein = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;
const slideRight = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
    from{
      opacity : 0;
      transform : translate3d(-20rem,0,0);
    }
    to{
      opacity: 1;
      transform : translate3d(0,0,-10rem);
    }
   `;


/***/ }),

/***/ 6300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




const ModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-7a842e0b-0"
})`
    position: fixed;
    height: 100%;
    width: 100%;
    inset: 0;
    display: flex;
    margin: 0 auto;
    background: white;
    justify-content: center;
    align-items: center;
`;
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-7a842e0b-1"
})``;
const Modal = ({ children , open ,  })=>{
    // const handleLeft = () => {
    //     prev();
    // };
    // const handleRight = () => {
    //     next();
    // };
    // useEffect(() => {
    //     setImage(imgsrc);
    // }, [image, imgsrc]);
    return open ? /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalWrapper, {
        children: children
    }), document.querySelector("#portal")) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ 4276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _animation_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2553);
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(488);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6300);









const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default().header.withConfig({
    componentId: "sc-3f076d58-0"
})`
    height: 100%;
    border-bottom: 6px solid rgb(242, 242, 242);
    display: flex;
    align-items: center;
`;
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_4___default().nav.withConfig({
    componentId: "sc-3f076d58-1"
})`
    max-width: 100%;
    margin: 0px auto;
`;
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_4___default().a.withConfig({
    componentId: "sc-3f076d58-2"
})`
    padding: 10px 30px 10px 0px;
    color: ${(props)=>props.href === props.pathname ? "black" : "rgb(153, 153, 153)"};
    font-size: 17px;
    font-style: normal;
    font-weight: ${(props)=>props.href === props.pathname ? "500" : "300"};
    line-height: 30px;
    text-decoration: none;
`;
const Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-3f076d58-3"
})`
    width: 30px;
    font-size: 30px;
    margin-left: auto;
    // border: 1px solid black;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-3f076d58-4"
})`
    display: flex;
    animation: ${_animation_animation__WEBPACK_IMPORTED_MODULE_5__/* .fadein */ .j} 0.5s ease;
`;
const NavList = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-3f076d58-5"
})`
    display: flex;
    flex-direction: column;
`;
const NavListItem = styled_components__WEBPACK_IMPORTED_MODULE_4___default().a.withConfig({
    componentId: "sc-3f076d58-6"
})`
    margin: 20px 0px;
    text-align: center;
    padding: 10px 30px 10px 0px;
    color: ${(props)=>props.href === props.pathname ? "black" : "rgb(153, 153, 153)"};
    font-size: 17px;
    font-style: normal;
    font-weight: ${(props)=>props.href === props.pathname ? "500" : "300"};
    line-height: 30px;
    text-decoration: none;
`;
const Navbar = ({})=>{
    const { 0: isMobile , 1: setIsMobile  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: openModal , 1: setOpenModal  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const updateMedia = ()=>{
        if (false) {} else {
            return;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        updateMedia();
        window.addEventListener("resize", updateMedia);
        return ()=>window.removeEventListener("resize", updateMedia);
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            isMobile === false ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Nav, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                            pathname: router.pathname,
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/profile",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                            pathname: router.pathname,
                            children: "Profile"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/work",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                            pathname: router.pathname,
                            children: "Work"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/contact",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                            pathname: router.pathname,
                            children: "Contact"
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Hamburger, {
                        onClick: ()=>setOpenModal(true),
                        children: "☰"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        open: openModal,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalContainer, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NavList, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavListItem, {
                                            pathname: router.pathname,
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/profile",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavListItem, {
                                            pathname: router.pathname,
                                            children: "Profile"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/work",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavListItem, {
                                            pathname: router.pathname,
                                            children: "Work"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/contact",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavListItem, {
                                            pathname: router.pathname,
                                            children: "Contact"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    // font-family: Sans-Serif;
    color: rgb(0,0,0, 0.6)
  }
* {
    box-sizing: border-box;
}
html {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    scroll-behavior: smooth;s
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);


/***/ })

};
;