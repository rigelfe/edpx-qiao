/**
 * @file main command
 * @author okyping(okyping@163.com)
 */

/**
 * 命令行配置相
 *
 * @inner
 * @type {Object}
 */
var cli = {};

/**
 * 命令描述信息
 *
 * @type {string}
 */
cli.description = '商桥业务端';

/**
 * 命令入口
 *
 * @public
 */
cli.main = function () {
    var metadata = require('../lib/metadata');
    var core = require('edp-core');
    var log = core.log;
    var util = core.util;

    log.info('edp qiao success');
};

// 导出命令
exports.cli = cli;
