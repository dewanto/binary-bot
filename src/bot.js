Bot = {};
var translator = require('./translator'); // must be on top
var i18n = require('i18n');
var $ = require('jquery');
$.ajaxSetup({
	cache: false
});
window.$ = window.jQuery = $;
window.Backbone = require('backbone');
window._ = require('underscore');
require('notifyjs-browser');
require('tourist');

translator.addBlocklyTranslation();
translator.Translator(function () {
	Bot.config = require('./globals/config');
	Bot.globals = require('./globals/globals');
	Bot.utils = require('./utils/utils');
	Bot.version = require('./globals/version');
	Bot.conditions = require('./utils/conditions');
	Bot.markets = require('./utils/markets');
	Bot.trade = require('./utils/trade');
	Bot.toggleDebug = require('./globals/globals')
		.toggleDebug;
	require('./ui');
	$('[data-i18n-text]')
		.each(function () {
			$(this)
				.text(i18n._($(this)
					.attr('data-i18n-text')));
		});
});
