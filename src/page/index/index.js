/*
* @Author: Jason
* @Date:   2017-06-28 14:18:03
* @Last Modified by:   Jason
* @Last Modified time: 2017-06-29 21:40:25
*/

'use strict';

require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');

navSide.init({
	name: 'user-pass-update'
});
//http://happymmall.com/product/list.do?keyword=1
// _mm.request({
// 	url: '/product/list.do?keyword=1',
// 	success: function(res) {
// 		console.log(res);
// 	},
// 	error: function(errMsg) {
// 		console.log(errMsg);
// 	}
// });
// console.log(_mm.getUrlParam('test'));
// var html = '<div>{{data}}</div>';
// var data = {
// 	data: 'test'
// };
// console.log(_mm.renderHtml(html, data));