// Generated by CoffeeScript 1.8.0
(function() {
  var isArrayIndex, isClient, isServer, serverExtend, serverRequire;

  isServer = process.title !== 'browser';

  isClient = !isServer;

  serverRequire = function(module, id) {
    if (isServer) {
      return module.require(id);
    }
  };

  serverExtend = function(module, id, Cls) {
    var _base;
    return (typeof (_base = serverRequire(module, id)) === "function" ? _base(Cls) : void 0) || Cls;
  };

  isArrayIndex = function(segment) {
    return /^[0-9]+$/.test(segment);
  };

  module.exports = {
    isServer: isServer,
    isClient: isClient,
    serverRequire: serverRequire,
    serverExtend: serverExtend,
    isArrayIndex: isArrayIndex
  };

}).call(this);
