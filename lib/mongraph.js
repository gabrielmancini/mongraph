// Generated by CoffeeScript 1.6.2
var alreadyInitialized, config, init, mongraphMongoosePlugin, processtools, _;

processtools = require('./processtools');

mongraphMongoosePlugin = require('./mongraphMongoosePlugin');

_ = require('underscore');

config = {
  options: {}
};

alreadyInitialized = false;

init = function(options) {
  var _base, _base1, _base2, _base3, _base4, _base5, _base6, _base7, _base8, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;

  if (typeof options !== 'object') {
    options = {};
  }
  _.extend(config.options, options);
  config.mongoose = options.mongoose;
  config.graphdb = options.neo4j;
  if ((_ref = (_base = config.options).overrideProtypeFunctions) == null) {
    _base.overrideProtypeFunctions = false;
  }
  config.options.storeDocumentInGraphDatabase = false;
  if ((_ref1 = (_base1 = config.options).cacheNodes) == null) {
    _base1.cacheNodes = true;
  }
  if ((_ref2 = (_base2 = config.options).loadMongoDBRecords) == null) {
    _base2.loadMongoDBRecords = true;
  }
  if ((_ref3 = (_base3 = config.options).extendSchemaWithMongoosePlugin) == null) {
    _base3.extendSchemaWithMongoosePlugin = true;
  }
  if ((_ref4 = (_base4 = config.options).relationships) == null) {
    _base4.relationships = {};
  }
  if ((_ref5 = (_base5 = config.options.relationships).storeTimestamp) == null) {
    _base5.storeTimestamp = true;
  }
  config.options.relationships.storeIDsInRelationship = true;
  if ((_ref6 = (_base6 = config.options.relationships).bidirectional) == null) {
    _base6.bidirectional = false;
  }
  if ((_ref7 = (_base7 = config.options.relationships).storeInDocument) == null) {
    _base7.storeInDocument = false;
  }
  if ((_ref8 = (_base8 = config.options).cacheAttachedNodes) == null) {
    _base8.cacheAttachedNodes = true;
  }
  if (alreadyInitialized) {
    config.options.overrideProtypeFunctions = true;
  }
  config.options.mongoose = options.mongoose;
  config.options.graphdb = options.neo4j;
  if (processtools.constructorNameOf(config.mongoose) !== 'Mongoose') {
    throw new Error("mongraph needs a mongoose reference as parameter");
  }
  if (processtools.constructorNameOf(config.graphdb) !== 'GraphDatabase') {
    throw new Error("mongraph needs a neo4j graphdatabase reference as paramater");
  }
  require('./extendDocument')(config.options);
  require('./extendNode')(config.options);
  if (config.options.extendSchemaWithMongoosePlugin) {
    config.mongoose.plugin(mongraphMongoosePlugin, config.options);
  }
  return alreadyInitialized = true;
};

module.exports = {
  init: init,
  config: config,
  processtools: processtools
};
