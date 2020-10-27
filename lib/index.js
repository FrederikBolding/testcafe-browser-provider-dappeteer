'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fs = require('fs');

var _puppeteer = require('puppeteer');

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _dappeteer = require('dappeteer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    // Multiple browsers support
    isMultiBrowser: false,
    browser: null,
    openedPages: {},
    metamask: null,

    /**
     * Open the browser with the given parameters
     * @param {number} id id of the opened browser
     * @param {string} pageUrl url to navigate to after creating browser
     */
    openBrowser: function openBrowser(id, pageUrl) {
        var _this = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var page;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _dappeteer.launch)(_puppeteer2.default, {
                                timeout: 10000,
                                headless: false,
                                defaultViewport: null
                            });

                        case 2:
                            _this.browser = _context.sent;
                            _context.next = 5;
                            return (0, _dappeteer.getMetamask)(_this.browser);

                        case 5:
                            _this.metamask = _context.sent;
                            _context.next = 8;
                            return _this.browser.newPage();

                        case 8:
                            page = _context.sent;
                            _context.next = 11;
                            return page.goto(pageUrl);

                        case 11:
                            _this.openedPages[id] = page;

                        case 12:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    },
    closeBrowser: function closeBrowser(id) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            delete _this2.openedPages[id];
                            _context2.next = 3;
                            return _this2.browser.close();

                        case 3:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }))();
    },


    // Initialization
    init: function init() {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            return _context3.abrupt('return');

                        case 1:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this3);
        }))();
    },


    // Testcafe method to get Dappeter Metamask instance
    getMetamask: function getMetamask(t /* testcafe instance */) {
        var _this4 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            return _context4.abrupt('return', t.testRun.browserManipulationQueue.browserProvider.plugin.metamask);

                        case 1:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this4);
        }))();
    },
    dispose: function dispose() {
        var _this5 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            return _context5.abrupt('return');

                        case 1:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this5);
        }))();
    },


    // Optional methods for multi-browser support
    getBrowserList: function getBrowserList() {
        var _this6 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            throw new Error('Not implemented!');

                        case 1:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, _this6);
        }))();
    },
    isValidBrowserName: function isValidBrowserName() /* browserName */{
        var _this7 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            return _context7.abrupt('return', true);

                        case 1:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, _this7);
        }))();
    },


    // Extra methods
    canResizeWindowToDimensions: function canResizeWindowToDimensions() /* browserId, width, height */{
        var _this8 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            return _context8.abrupt('return', true);

                        case 1:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, _this8);
        }))();
    },
    resizeWindow: function resizeWindow(width, height /*, currentWidth, currentHeight*/) {
        var _this9 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            _context9.next = 2;
                            return _this9.browser.manage().window().setRect({ width: width, height: height });

                        case 2:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, _this9);
        }))();
    },
    maximizeWindow: function maximizeWindow() {
        var _this10 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            _context10.next = 2;
                            return _this10.browser.manage().window().maximize();

                        case 2:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, _this10);
        }))();
    },
    takeScreenshot: function takeScreenshot(screenshotPath /*, pageWidth, pageHeight*/) {
        var _this11 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11() {
            var screenshot;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            _context11.next = 2;
                            return _this11.browser.takeScreenshot(screenshotPath);

                        case 2:
                            screenshot = _context11.sent;
                            _context11.next = 5;
                            return (0, _fs.writeFileSync)(screenshotPath, screenshot, 'base64');

                        case 5:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, _this11);
        }))();
    }
};
module.exports = exports['default'];