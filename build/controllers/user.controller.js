"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var User = require("../models/user.model");
var Company = require("../models/company.model");
var _require = require('@faker-js/faker'),
  faker = _require.faker;

//-------------------------Admin-------------------------------

exports.getAdminUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          User.find().populate("company").populate({
            path: 'freelance',
            populate: {
              path: 'skills'
            }
          }).populate({
            path: 'freelance',
            populate: {
              path: 'jobs'
            }
          }).then(function (users) {
            res.send(users);
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.getAdminUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          User.findById(req.params.id).populate("company").populate({
            path: 'freelance',
            populate: {
              path: 'skills'
            }
          }).populate({
            path: 'freelance',
            populate: {
              path: 'jobs'
            }
          }).then(function (user) {
            res.send(user);
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.updateAdminUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          User.findByIdAndUpdate(req.params.id, req.body).then(function (user) {
            if (!user) {
              return res.status(404).send({
                message: 'user not found'
              });
            }
            User.findById(user._id).then(function (userupdated) {
              res.send({
                user: userupdated,
                message: 'updated'
              });
            })["catch"](function (error) {
              next(error);
            });
          })["catch"](function (err) {
            return next(err);
          });
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
exports.deleteAdminUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          User.findByIdAndDelete(req.params.id).then(function (user) {
            res.send({
              user: user,
              message: 'deleted'
            });
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

//company

exports.getAdminCompanies = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          Company.find().then(function (companies) {
            res.send(companies);
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getAdminCompany = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          Company.findById(req.params.id).then(function (company) {
            res.send(company);
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateAdminCompany = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          Company.findByIdAndUpdate(req.params.id, req.body).then(function (company) {
            if (!company) {
              return res.status(404).send({
                message: 'company not found'
              });
            }
            Company.findById(company._id).then(function (companyupdated) {
              res.send({
                company: companyupdated,
                message: 'updated'
              });
            })["catch"](function (error) {
              next(error);
            });
          })["catch"](function (err) {
            return next(err);
          });
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();
exports.deleteAdminCompany = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          Company.findByIdAndDelete(req.params.id).then(function (company) {
            res.send({
              company: company,
              message: 'company deleted'
            });
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

//-------------------------User-------------------------------

exports.getUser = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          User.findById(req.userToken.id).populate("company").populate({
            path: 'freelance',
            populate: {
              path: 'skills'
            }
          }).populate({
            path: 'freelance',
            populate: {
              path: 'jobs'
            }
          }).then(function (user) {
            res.send(addThumnail(user));
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();
exports.updateUser = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          User.findByIdAndUpdate(req.userToken.id, req.body).then(function () {
            User.findById(req.userToken.id).populate("company").populate({
              path: 'freelance',
              populate: {
                path: 'skills'
              }
            }).populate({
              path: 'freelance',
              populate: {
                path: 'jobs'
              }
            }).then(function (user) {
              res.send({
                user: addThumnail(user),
                message: 'updated'
              });
            })["catch"](function (error) {
              next(error);
            });
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();
exports.deleteUser = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          User.findByIdAndDelete(req.userToken.id).then(function (user) {
            res.send({
              user: addThumnail(user),
              message: 'deleted'
            });
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function (_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();

//-------------------------Company-------------------------------

exports.getCompanyUsers = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          User.findById(req.userToken.id).then(function (user) {
            var company_id = user.company;
            User.find().then(function (users) {
              users = users.filter(function (user) {
                return user.company != null;
              });
              users = users.filter(function (new_user) {
                return new_user.company.toString() == company_id.toString();
              });
              res.send(users);
            })["catch"](function (error) {
              next(error);
            });
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function (_x34, _x35, _x36) {
    return _ref12.apply(this, arguments);
  };
}();
exports.getCompany = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          User.findById(req.userToken.id).populate("company").then(function (user) {
            if (user.company == null) {
              res.status(404).send("User is not a company");
            } else {
              res.send(user.company);
            }
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function (_x37, _x38, _x39) {
    return _ref13.apply(this, arguments);
  };
}();
exports.updateCompany = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          User.findById(req.userToken.id).populate("company").then(function (user) {
            if (user.company == null) {
              res.status(404).send("User is not a company");
            } else {
              Company.findByIdAndUpdate(user.company._id, req.body).then(function (newCompany) {
                newCompany.save().then(function () {
                  Company.findById(user.company._id).then(function (company) {
                    res.send({
                      company: company,
                      message: 'updated',
                      success: true
                    });
                  })["catch"](function (error) {
                    next(error);
                  });
                })["catch"](function (error) {
                  next(error);
                });
              })["catch"](function (error) {
                next(error);
              });
            }
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function (_x40, _x41, _x42) {
    return _ref14.apply(this, arguments);
  };
}();
exports.deleteCompany = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          User.findById(req.userToken.id).populate("company").then(function (user) {
            if (user.company == null) {
              res.status(404).send("User is not a company");
            } else {
              Company.findByIdAndDelete(user.company._id).then(function (company) {
                res.send({
                  company: company,
                  message: 'deleted'
                });
              })["catch"](function (error) {
                next(error);
              });
            }
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function (_x43, _x44, _x45) {
    return _ref15.apply(this, arguments);
  };
}();

//-------------------------Search-------------------------------

exports.searchUsers = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res, next) {
    var _req$params, _req$params2, _req$params3, _req$params3$search;
    var searchString, SearchTab;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          if (!(req.params.search == null || ((_req$params = req.params) === null || _req$params === void 0 ? void 0 : _req$params.search) == "" || ((_req$params2 = req.params) === null || _req$params2 === void 0 ? void 0 : _req$params2.search) == undefined)) {
            _context16.next = 2;
            break;
          }
          return _context16.abrupt("return", res.status(400).send("searchString is required"));
        case 2:
          searchString = (_req$params3 = req.params) === null || _req$params3 === void 0 ? void 0 : (_req$params3$search = _req$params3.search) === null || _req$params3$search === void 0 ? void 0 : _req$params3$search.toLowerCase();
          SearchTab = searchString.split(" ");
          User.find({
            freelance: {
              $ne: null
            }
          }).populate({
            path: 'freelance',
            populate: {
              path: 'skills'
            }
          }).populate({
            path: 'freelance',
            populate: {
              path: 'jobs'
            }
          }).then(function (users) {
            users = users.filter(function (user) {
              var userString = user.firstName + " " + user.lastName + " " + user.city;
              if (user.freelance.skills !== null && user.freelance.skills !== undefined && user.freelance.skills.length > 0) {
                var _user$freelance;
                var _iterator = _createForOfIteratorHelper(user === null || user === void 0 ? void 0 : (_user$freelance = user.freelance) === null || _user$freelance === void 0 ? void 0 : _user$freelance.skills),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var skill = _step.value;
                    userString += " " + skill.name;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
              if (user.freelance.jobs !== null && user.freelance.jobs !== undefined && user.freelance.jobs.length > 0) {
                var _user$freelance2;
                var _iterator2 = _createForOfIteratorHelper(user === null || user === void 0 ? void 0 : (_user$freelance2 = user.freelance) === null || _user$freelance2 === void 0 ? void 0 : _user$freelance2.jobs),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var job = _step2.value;
                    userString += " " + job.name;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
              userString = userString.toLowerCase();
              var _iterator3 = _createForOfIteratorHelper(SearchTab),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var key = _step3.value;
                  if (userString.includes(key)) {
                    return true;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              return false;
            });
            var newUsers = addThumbnailTab(users);
            res.send(newUsers);
          })["catch"](function (error) {
            next(error);
          });
        case 5:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function (_x46, _x47, _x48) {
    return _ref16.apply(this, arguments);
  };
}();
exports.filterUsers = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          User.find({
            freelance: {
              $ne: null
            }
          }).populate({
            path: 'freelance',
            populate: {
              path: 'skills'
            }
          }).populate({
            path: 'freelance',
            populate: {
              path: 'jobs'
            }
          }).then(function (users) {
            users = users.filter(function (user) {
              var _req$body, _req$body2, _req$body3, _req$body5, _req$body6, _req$body7, _req$body9, _req$body10, _req$body11, _req$body13, _req$body14, _req$body15, _req$body17, _req$body18, _req$body19, _req$body21, _req$body22, _req$body23, _req$body25, _req$body26, _req$body27;
              if (((_req$body = req.body) === null || _req$body === void 0 ? void 0 : _req$body.skills) !== null && ((_req$body2 = req.body) === null || _req$body2 === void 0 ? void 0 : _req$body2.skills) !== undefined && ((_req$body3 = req.body) === null || _req$body3 === void 0 ? void 0 : _req$body3.skills.length) > 0) {
                var _user$freelance3, _req$body4;
                var skills = user === null || user === void 0 ? void 0 : (_user$freelance3 = user.freelance) === null || _user$freelance3 === void 0 ? void 0 : _user$freelance3.skills;
                if (skills === null || skills === undefined || skills.length === 0) {
                  return false;
                }
                var skillsTab = (_req$body4 = req.body) === null || _req$body4 === void 0 ? void 0 : _req$body4.skills;
                var found = false;
                var _iterator4 = _createForOfIteratorHelper(skillsTab),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var skillTab = _step4.value;
                    var _iterator5 = _createForOfIteratorHelper(skills),
                      _step5;
                    try {
                      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                        var skill = _step5.value;
                        if (skill._id === skillTab._id) {
                          found = true;
                          break;
                        }
                      }
                    } catch (err) {
                      _iterator5.e(err);
                    } finally {
                      _iterator5.f();
                    }
                    if (found) {
                      break;
                    } else {
                      return false;
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
              // jobs
              if (((_req$body5 = req.body) === null || _req$body5 === void 0 ? void 0 : _req$body5.jobs) !== null && ((_req$body6 = req.body) === null || _req$body6 === void 0 ? void 0 : _req$body6.jobs) !== undefined && ((_req$body7 = req.body) === null || _req$body7 === void 0 ? void 0 : _req$body7.jobs.length) > 0) {
                var _user$freelance4, _req$body8;
                var jobs = user === null || user === void 0 ? void 0 : (_user$freelance4 = user.freelance) === null || _user$freelance4 === void 0 ? void 0 : _user$freelance4.jobs;
                if (jobs === null || jobs === undefined || jobs.length === 0) {
                  return false;
                }
                var jobsTab = (_req$body8 = req.body) === null || _req$body8 === void 0 ? void 0 : _req$body8.jobs;
                var _iterator6 = _createForOfIteratorHelper(jobsTab),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var jobTab = _step6.value;
                    var _found = false;
                    var _iterator7 = _createForOfIteratorHelper(jobs),
                      _step7;
                    try {
                      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                        var job = _step7.value;
                        if (job._id.toString() === jobTab._id) {
                          _found = true;
                          break;
                        }
                      }
                    } catch (err) {
                      _iterator7.e(err);
                    } finally {
                      _iterator7.f();
                    }
                    if (_found) {
                      break;
                    } else {
                      return false;
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }
              // min and max price
              if (((_req$body9 = req.body) === null || _req$body9 === void 0 ? void 0 : _req$body9.price_min) !== null && ((_req$body10 = req.body) === null || _req$body10 === void 0 ? void 0 : _req$body10.price_min) !== undefined && ((_req$body11 = req.body) === null || _req$body11 === void 0 ? void 0 : _req$body11.price_min) !== "") {
                var _user$freelance5, _user$freelance6, _user$freelance7, _req$body12;
                if ((user === null || user === void 0 ? void 0 : (_user$freelance5 = user.freelance) === null || _user$freelance5 === void 0 ? void 0 : _user$freelance5.price) === null && ((_user$freelance6 = user.freelance) === null || _user$freelance6 === void 0 ? void 0 : _user$freelance6.price) === undefined) {
                  return false;
                }
                if ((user === null || user === void 0 ? void 0 : (_user$freelance7 = user.freelance) === null || _user$freelance7 === void 0 ? void 0 : _user$freelance7.price) < ((_req$body12 = req.body) === null || _req$body12 === void 0 ? void 0 : _req$body12.price_min)) {
                  return false;
                }
              }
              if (((_req$body13 = req.body) === null || _req$body13 === void 0 ? void 0 : _req$body13.price_max) !== null && ((_req$body14 = req.body) === null || _req$body14 === void 0 ? void 0 : _req$body14.price_max) !== undefined && ((_req$body15 = req.body) === null || _req$body15 === void 0 ? void 0 : _req$body15.price_max) !== "") {
                var _user$freelance8, _user$freelance9, _user$freelance10, _req$body16;
                if ((user === null || user === void 0 ? void 0 : (_user$freelance8 = user.freelance) === null || _user$freelance8 === void 0 ? void 0 : _user$freelance8.price) === null && ((_user$freelance9 = user.freelance) === null || _user$freelance9 === void 0 ? void 0 : _user$freelance9.price) === undefined) {
                  return false;
                }
                if ((user === null || user === void 0 ? void 0 : (_user$freelance10 = user.freelance) === null || _user$freelance10 === void 0 ? void 0 : _user$freelance10.price) > ((_req$body16 = req.body) === null || _req$body16 === void 0 ? void 0 : _req$body16.price_max)) {
                  return false;
                }
              }

              // min and max experience
              if (((_req$body17 = req.body) === null || _req$body17 === void 0 ? void 0 : _req$body17.experience_min) !== null && ((_req$body18 = req.body) === null || _req$body18 === void 0 ? void 0 : _req$body18.experience_min) !== undefined && ((_req$body19 = req.body) === null || _req$body19 === void 0 ? void 0 : _req$body19.experience_min) !== "") {
                var _user$freelance11, _user$freelance12, _user$freelance13, _req$body20;
                if ((user === null || user === void 0 ? void 0 : (_user$freelance11 = user.freelance) === null || _user$freelance11 === void 0 ? void 0 : _user$freelance11.experience_years) === null && (user === null || user === void 0 ? void 0 : (_user$freelance12 = user.freelance) === null || _user$freelance12 === void 0 ? void 0 : _user$freelance12.experience_years) === undefined) {
                  return false;
                }
                if ((user === null || user === void 0 ? void 0 : (_user$freelance13 = user.freelance) === null || _user$freelance13 === void 0 ? void 0 : _user$freelance13.experience_years) < ((_req$body20 = req.body) === null || _req$body20 === void 0 ? void 0 : _req$body20.experience_min)) {
                  return false;
                }
              }
              if (((_req$body21 = req.body) === null || _req$body21 === void 0 ? void 0 : _req$body21.experience_max) !== null && ((_req$body22 = req.body) === null || _req$body22 === void 0 ? void 0 : _req$body22.experience_max) !== undefined && ((_req$body23 = req.body) === null || _req$body23 === void 0 ? void 0 : _req$body23.experience_max) !== "") {
                var _user$freelance14, _user$freelance15, _user$freelance16, _req$body24;
                if ((user === null || user === void 0 ? void 0 : (_user$freelance14 = user.freelance) === null || _user$freelance14 === void 0 ? void 0 : _user$freelance14.experience_years) === null && (user === null || user === void 0 ? void 0 : (_user$freelance15 = user.freelance) === null || _user$freelance15 === void 0 ? void 0 : _user$freelance15.experience_years) === undefined) {
                  return false;
                }
                if ((user === null || user === void 0 ? void 0 : (_user$freelance16 = user.freelance) === null || _user$freelance16 === void 0 ? void 0 : _user$freelance16.experience_years) > ((_req$body24 = req.body) === null || _req$body24 === void 0 ? void 0 : _req$body24.experience_max)) {
                  return false;
                }
              }

              // location
              if (((_req$body25 = req.body) === null || _req$body25 === void 0 ? void 0 : _req$body25.location) !== null && ((_req$body26 = req.body) === null || _req$body26 === void 0 ? void 0 : _req$body26.location) !== undefined && ((_req$body27 = req.body) === null || _req$body27 === void 0 ? void 0 : _req$body27.location) !== "") {
                var _req$body28;
                if ((user === null || user === void 0 ? void 0 : user.city) === null && (user === null || user === void 0 ? void 0 : user.city) === undefined) {
                  return false;
                }
                if ((user === null || user === void 0 ? void 0 : user.city) !== ((_req$body28 = req.body) === null || _req$body28 === void 0 ? void 0 : _req$body28.location)) {
                  return false;
                }
              }
              return true;
            });
            var newUsers = addThumbnailTab(users);
            res.send(newUsers);
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function (_x49, _x50, _x51) {
    return _ref17.apply(this, arguments);
  };
}();
exports.getFreelanceUsers = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          User.find({
            freelance: {
              $ne: null
            }
          }).populate({
            path: 'freelance',
            populate: {
              path: 'skills'
            }
          }).populate({
            path: 'freelance',
            populate: {
              path: 'jobs'
            }
          }).then(function (users) {
            var newUsers = addThumbnailTab(users);
            res.send(newUsers);
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function (_x52, _x53, _x54) {
    return _ref18.apply(this, arguments);
  };
}();
exports.getFreelanceUser = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          User.findById(req.params.id).populate({
            path: 'freelance',
            populate: {
              path: 'skills'
            }
          }).populate({
            path: 'freelance',
            populate: {
              path: 'jobs'
            }
          }).then(function (user) {
            if (user.freelance == null) {
              res.status(404).send("User is not a freelance");
            } else {
              var newUser = addThumbnailTab([user])[0];
              res.send(newUser);
            }
          })["catch"](function (error) {
            next(error);
          });
        case 1:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function (_x55, _x56, _x57) {
    return _ref19.apply(this, arguments);
  };
}();
var addThumbnailTab = function addThumbnailTab(users) {
  var newUsers = [];
  users.forEach(function (user) {
    newUsers.push(addThumnail(user));
  });
  return newUsers;
};
var addThumnail = function addThumnail(user) {
  var newUser = {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    address: user.address,
    city: user.city,
    postcode: user.postcode,
    phone: user.phone,
    email: user.email,
    thumbnail: faker.image.avatar(),
    isAdmin: user.isAdmin,
    freelance: user.freelance,
    company: user.company
  };
  return newUser;
};