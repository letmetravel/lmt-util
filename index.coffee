isServer = process.title isnt 'browser'

isClient = not isServer

serverRequire = (module, id)->
  module.require(id) if isServer

serverExtend = (module, id, Cls)->
  serverRequire(module, id)?(Cls) or Cls

isArrayIndex = (segment)->
  (/^[0-9]+$/).test(segment)


module.exports = {isServer, isClient, serverRequire, serverExtend, isArrayIndex}