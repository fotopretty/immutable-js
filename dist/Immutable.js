/**
 *  Copyright (c) 2014, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */
function t(){function t(t,e,n,r){var i;if(r){var u=r.prototype;i=ie.create(u)}else i=t.prototype;return ie.keys(e).forEach(function(t){i[t]=e[t]}),ie.keys(n).forEach(function(e){t[e]=n[e]}),i.constructor=t,t.prototype=i,t}function e(t,e,n,r){return ie.getPrototypeOf(e)[n].apply(t,r)}function n(t,n,r){e(t,n,"constructor",r)}function r(){return Object.create(oe)}function i(t){var e=Object.create(fe);return e.__reversedIndices=t?t.__reversedIndices:!1,e}function u(t,e,n,r){var i=t.get?t.get(e[r],ye):ye;return i===ye?n:++r===e.length?i:u(i,e,n,r)}function s(t,e,n){return(0===t||null!=n&&-n>=t)&&(null==e||null!=n&&e>=n)}function a(t,e){return 0>t?Math.max(0,e+t):e?Math.min(e,t):t}function o(t,e){return null==t?e:0>t?Math.max(0,e+t):e?Math.min(e,t):t}function h(t){return t}function c(t,e){return[e,t]}function f(){return!0}function l(){return this}function _(t){return(t||0)+1}function v(t,e,n,r,i){var u=t.__makeSequence();return u.__iterateUncached=function(u,s,a){var o=0,h=t.__iterate(function(t,i,s){if(e.call(n,t,i,s)){if(u(t,r?i:o,s)===!1)return!1;o++}},s,a);return i?h:o},u}function g(t){return function(){return!t.apply(this,arguments)}}function p(t){return"string"==typeof t?JSON.stringify(t):t}function m(t,e){for(var n="";e;)1&e&&(n+=t),(e>>=1)&&(t+=t);return n}function d(t,e){return t>e?1:e>t?-1:0}function y(t){I(1/0!==t,"Cannot perform this action with an infinite sequence.")}function w(t,e){return t===e?0!==t||0!==e||1/t===1/e:t!==t?e!==e:t instanceof se?t.equals(e):!1}function I(t,e){if(!t)throw Error(e)}function D(t,e,n){var r=t._rootData.updateIn(t._keyPath,e),i=t._keyPath||[];return t._onChange&&t._onChange.call(void 0,r,t._rootData,n?i.concat(n):i),new ve(r,t._keyPath,t._onChange)}function O(){}function b(t){for(var e=t.length,n=Array(e),r=0;e>r;r++)n[r]=t[r];return n}function M(t){return qe.value=t,qe}function k(t,e,n){var r=Object.create(De);return r.length=t,r._root=e,r.__ownerID=n,r}function S(t,e,n){var r=M(),i=x(t._root,t.__ownerID,0,L(e),e,n,r),u=t.length+(r.value?n===ye?-1:1:0);return t.__ownerID?(t.length=u,t._root=i,t):i?i===t._root?t:k(u,i):we.empty()
}function x(t,e,n,r,i,u,s){return t?t.update(e,n,r,i,u,s):u===ye?t:(s&&(s.value=!0),new Ee(e,r,[i,u]))}function E(t){return t.constructor===Ee||t.constructor===Se}function C(t,e,n,r,i){if(t.hash===r)return new Se(e,r,[t.entry,i]);var u,s=t.hash>>>n&de,a=r>>>n&de,o=s===a?[C(t,e,n+pe,r,i)]:(u=new Ee(e,r,i),a>s?[t,u]:[u,t]);return new Oe(e,1<<s|1<<a,o)}function A(t,e,n,r){for(var i=0,u=0,s=Array(n),a=0,o=1,h=e.length;h>a;a++,o<<=1){var c=e[a];null!=c&&a!==r&&(i|=o,s[u++]=c)}return new Oe(t,i,s)}function q(t,e,n,r,i){for(var u=0,s=Array(me),a=0;0!==n;a++,n>>>=1)s[a]=1&n?e[u++]:null;return s[r]=i,new Me(t,u+1,s)}function j(t,e,n){for(var r=[],i=0;n.length>i;i++){var u=n[i];u&&r.push(Array.isArray(u)?se(u).fromEntries():se(u))}return R(t,e,r)}function U(t){return function(e,n){return e&&e.mergeDeepWith?e.mergeDeepWith(t,n):t?t(e,n):n}}function R(t,e,n){return 0===n.length?t:t.withMutations(function(t){for(var r=e?function(n,r){var i=t.get(r,ye);t.set(r,i===ye?n:e(i,n))}:function(e,n){t.set(n,e)},i=0;n.length>i;i++)n[i].forEach(r)})}function P(t,e,n,r){var i=e[r],u=t.get?t.get(i,ye):ye;return u===ye&&(u=we.empty()),I(t.set,"updateIn with invalid keyPath"),t.set(i,++r===e.length?n(u):P(u,e,n,r))}function W(t){return t-=t>>1&1431655765,t=(858993459&t)+(t>>2&858993459),t=t+(t>>4)&252645135,t+=t>>8,t+=t>>16,127&t}function z(t,e,n,r){var i=r?t:b(t);return i[e]=n,i}function J(t,e,n,r){var i=t.length+1;if(r&&e+1===i)return t[e]=n,t;for(var u=Array(i),s=0,a=0;i>a;a++)a===e?(u[a]=n,s=-1):u[a]=t[a+s];return u}function B(t,e,n){var r=t.length-1;if(n&&e===r)return t.pop(),t;for(var i=Array(r),u=0,s=0;r>s;s++)s===e&&(u=1),i[s]=t[s+u];return i}function L(t){if(!t)return 0;if(t===!0)return 1;var e=typeof t;if("number"===e){if((0|t)===t)return t&je;t=""+t,e="string"}if("string"===e)return t.length>Ue?V(t):K(t);if(t.hashCode&&"function"==typeof t.hashCode)return t.hashCode();throw Error("Unable to hash: "+t)}function V(t){var e=We[t];return null==e&&(e=K(t),Pe===Re&&(Pe=0,We={}),Pe++,We[t]=e),e}function K(t){for(var e=0,n=0;t.length>n;n++)e=31*e+t.charCodeAt(n)&je;
return e}function N(t,e,n,r,i){return{array:t,level:e,offset:n,max:r,__prev:i}}function F(t,e,n,r,i,u){var s=Object.create(Ve);return s.length=e-t,s._origin=t,s._size=e,s._level=n,s._root=r,s._tail=i,s.__ownerID=u,s}function G(t,e,n){var r=n===ye;if(!r&&e>=t.length)return t.withMutations(function(t){return Q(t,0,e+1).set(e,n)});if(t.get(e,ye)===n)return t;var i=Y(t._size);if(e=X(e,t._origin),e>=i){var u=t._tail.ensureOwner(t.__ownerID);return r?delete u.array[e&de]:u.array[e&de]=n,t.__ownerID?(t._tail=u,t):F(t._origin,t._size,t._level,t._root,u)}for(var s=t._root.ensureOwner(t.__ownerID),a=s,o=t._level;o>0;o-=pe){var h=e>>>o&de;a=a.array[h]=a.array[h]?a.array[h].ensureOwner(t.__ownerID):new Ke([],t.__ownerID)}return r?delete a.array[e&de]:a.array[e&de]=n,t.__ownerID?(t._root=s,t):F(t._origin,t._size,t._level,s,t._tail)}function H(t,e){if(e>=Y(t._size))return t._tail;if(1<<t._level+pe>e){for(var n=t._root,r=t._level;n&&r>0;)n=n.array[e>>>r&de],r-=pe;return n}}function Q(t,e,n){var r=t.__ownerID||new O,i=t._origin,u=t._size,s=i+e,a=null==n?u:0>n?u+n:i+n;if(s===i&&a===u)return t;if(s>=a)return t.clear();for(var o=t._level,h=t._root,c=0;0>s+c;)h=new Ke(h.array.length?[null,h]:[],r),o+=pe,c+=1<<o;c&&(s+=c,i+=c,a+=c,u+=c);for(var f=Y(u),l=Y(a);l>=1<<o+pe;)h=new Ke(h.array.length?[h]:[],r),o+=pe;var _=t._tail,v=f>l?H(t,a-1):l>f?new Ke([],r):_;if(l>f&&u>s&&_.array.length){h=h.ensureOwner(r);for(var g=h,p=o;p>pe;p-=pe){var m=f>>>p&de;g=g.array[m]=g.array[m]?g.array[m].ensureOwner(r):new Ke([],r)}g.array[f>>>pe&de]=_}if(u>a&&(v=v.removeAfter(r,0,a)),s>=l)s-=l,a-=l,o=pe,h=He,v=v.removeBefore(r,0,s);else if(s>i||f>l){var d,y;c=0;do d=s>>>o&de,y=l-1>>>o&de,d===y&&(d&&(c+=(1<<o)*d),o-=pe,h=h&&h.array[d]);while(h&&d===y);h&&s>i&&(h=h.removeBefore(r,o,s-c)),h&&f>l&&(h=h.removeAfter(r,o,l-c)),c&&(s-=c,a-=c),h=h||He}return t.__ownerID?(t.length=a-s,t._origin=s,t._size=a,t._level=o,t._root=h,t._tail=v,t):F(s,a,o,h,v)}function T(t,e,n){for(var r=[],i=0;n.length>i;i++){var u=n[i];u&&r.push(u.forEach?u:se(u))}var s=Math.max.apply(null,r.map(function(t){return t.length||0
}));return s>t.length&&(t=t.setLength(s)),R(t,e,r)}function X(t,e){return I(t>=0,"Index out of bounds"),t+e}function Y(t){return me>t?0:t-1>>>pe<<pe}function Z(t,e){var n=Object.create(Xe);return n.length=t?t.length:0,n._map=t,n.__ownerID=e,n}function $(t,e,n){var r=Object.create(Ze.prototype);return r.length=t?t.length:0,r._map=t,r._vector=e,r.__ownerID=n,r}function te(t,e,n){var r=Object.create(Object.getPrototypeOf(t));return r._map=e,r.__ownerID=n,r}function ee(t,e){return e?ne(e,t,"",{"":t}):re(t)}function ne(t,e,n,r){return e&&(Array.isArray(e)||e.constructor===Object)?t.call(r,n,se(e).map(function(n,r){return ne(t,n,r,e)})):e}function re(t){if(t){if(Array.isArray(t))return se(t).map(re).toVector();if(t.constructor===Object)return se(t).map(re).toMap()}return t}var ie=Object,ue={};ue.createClass=t,ue.superCall=e,ue.defaultSuperCall=n;var se=function(t){return ae.from(1===arguments.length?t:Array.prototype.slice.call(arguments))},ae=se;ue.createClass(se,{toString:function(){return this.__toString("Seq {","}")},__toString:function(t,e){return 0===this.length?t+e:t+" "+this.map(this.__toStringMapper).join(", ")+" "+e},__toStringMapper:function(t,e){return e+": "+p(t)},toJS:function(){return this.map(function(t){return t instanceof ae?t.toJS():t}).__toJS()},toArray:function(){y(this.length);var t=Array(this.length||0);return this.values().forEach(function(e,n){t[n]=e}),t},toObject:function(){y(this.length);var t={};return this.forEach(function(e,n){t[n]=e}),t},toVector:function(){return y(this.length),Be.from(this)},toMap:function(){return y(this.length),we.from(this)},toOrderedMap:function(){return y(this.length),Ze.from(this)},toSet:function(){return y(this.length),Qe.from(this)},equals:function(t){if(this===t)return!0;if(!(t instanceof ae))return!1;if(null!=this.length&&null!=t.length){if(this.length!==t.length)return!1;if(0===this.length&&0===t.length)return!0}return this.__deepEquals(t)},__deepEquals:function(t){var e=this.cacheResult().entries().toArray(),n=0;return t.every(function(t,r){var i=e[n++];return w(r,i[0])&&w(t,i[1])
})},join:function(t){t=t||",";var e="",n=!0;return this.forEach(function(r){n?(n=!1,e+=r):e+=t+r}),e},count:function(t,e){return t?this.filter(t,e).count():(null==this.length&&(this.length=this.forEach(f)),this.length)},countBy:function(t){var e=this;return Ze.empty().withMutations(function(n){e.forEach(function(e,r,i){n.update(t(e,r,i),_)})})},concat:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];var n=[this].concat(t.map(function(t){return ae(t)})),r=this.__makeSequence();return r.length=n.reduce(function(t,e){return null!=t&&null!=e.length?t+e.length:void 0},0),r.__iterateUncached=function(t,e){for(var r,i=0,u=n.length-1,s=0;u>=s&&!r;s++){var a=n[e?u-s:s];i+=a.__iterate(function(e,n,i){return t(e,n,i)===!1?(r=!0,!1):void 0},e)}return i},r},reverse:function(){var t=this,e=t.__makeSequence();return e.length=t.length,e.__iterateUncached=function(e,n){return t.__iterate(e,!n)},e.reverse=function(){return t},e},keys:function(){return this.flip().values()},values:function(){var t=this,e=i(t);return e.length=t.length,e.values=l,e.__iterateUncached=function(e,n,r){if(r&&null==this.length)return this.cacheResult().__iterate(e,n,r);var i,u=0;return r?(u=this.length-1,i=function(t,n,r){return e(t,u--,r)!==!1}):i=function(t,n,r){return e(t,u++,r)!==!1},t.__iterate(i,n),r?this.length:u},e},entries:function(){var t=this;if(t._cache)return ae(t._cache);var e=t.map(c).values();return e.fromEntries=function(){return t},e},forEach:function(t,e){return this.__iterate(e?t.bind(e):t)},reduce:function(t,e,n){var r=e;return this.forEach(function(e,i,u){r=t.call(n,r,e,i,u)}),r},reduceRight:function(t,e,n){return this.reverse(!0).reduce(t,e,n)},every:function(t,e){var n=!0;return this.forEach(function(r,i,u){return t.call(e,r,i,u)?void 0:(n=!1,!1)}),n},some:function(t,e){return!this.every(g(t),e)},first:function(){return this.find(f)},last:function(){return this.findLast(f)},rest:function(){return this.slice(1)},butLast:function(){return this.slice(0,-1)},has:function(t){return this.get(t,ye)!==ye},get:function(t,e){return this.find(function(e,n){return w(n,t)
},null,e)},getIn:function(t,e){return t&&0!==t.length?u(this,t,e,0):this},contains:function(t){return this.find(function(e){return w(e,t)},null,ye)!==ye},find:function(t,e,n){var r=n;return this.forEach(function(n,i,u){return t.call(e,n,i,u)?(r=n,!1):void 0}),r},findKey:function(t,e){var n;return this.forEach(function(r,i,u){return t.call(e,r,i,u)?(n=i,!1):void 0}),n},findLast:function(t,e,n){return this.reverse(!0).find(t,e,n)},findLastKey:function(t,e){return this.reverse(!0).findKey(t,e)},flip:function(){var t=this,e=r();return e.length=t.length,e.flip=function(){return t},e.__iterateUncached=function(e,n){return t.__iterate(function(t,n,r){return e(n,t,r)!==!1},n)},e},map:function(t,e){var n=this,r=n.__makeSequence();return r.length=n.length,r.__iterateUncached=function(r,i){return n.__iterate(function(n,i,u){return r(t.call(e,n,i,u),i,u)!==!1},i)},r},mapKeys:function(t,e){var n=this,r=n.__makeSequence();return r.length=n.length,r.__iterateUncached=function(r,i){return n.__iterate(function(n,i,u){return r(n,t.call(e,i,n,u),u)!==!1},i)},r},filter:function(t,e){return v(this,t,e,!0,!1)},slice:function(t,e){if(s(t,e,this.length))return this;var n=a(t,this.length),r=o(e,this.length);if(n!==n||r!==r)return this.entries().slice(t,e).fromEntries();var i=0===n?this:this.skip(n);return null==r||r===this.length?i:i.take(r-n)},take:function(t){var e=0,n=this.takeWhile(function(){return e++<t});return n.length=this.length&&Math.min(this.length,t),n},takeLast:function(t,e){return this.reverse(e).take(t).reverse(e)},takeWhile:function(t,e){var n=this,r=n.__makeSequence();return r.__iterateUncached=function(r,i,u){if(i)return this.cacheResult().__iterate(r,i,u);var s=0;return n.__iterate(function(n,i,u){return t.call(e,n,i,u)&&r(n,i,u)!==!1?void s++:!1},i,u),s},r},takeUntil:function(t,e,n){return this.takeWhile(g(t),e,n)},skip:function(t,e){if(0===t)return this;var n=0,r=this.skipWhile(function(){return n++<t},null,e);return r.length=this.length&&Math.max(0,this.length-t),r},skipLast:function(t,e){return this.reverse(e).skip(t).reverse(e)
},skipWhile:function(t,e){var n=this,r=n.__makeSequence();return r.__iterateUncached=function(r,i,u){if(i)return this.cacheResult().__iterate(r,i,u);var s=!0,a=0;return n.__iterate(function(n,i,u){if(!s||!(s=t.call(e,n,i,u))){if(r(n,i,u)===!1)return!1;a++}},i,u),a},r},skipUntil:function(t,e,n){return this.skipWhile(g(t),e,n)},groupBy:function(t){var e=this,n=Ze.empty().withMutations(function(n){e.forEach(function(e,r,i){var u=t(e,r,i),s=n.get(u,ye);s===ye&&(s=[],n.set(u,s)),s.push([r,e])})});return n.map(function(t){return ae(t).fromEntries()})},sort:function(t,e){return this.sortBy(h,t,e)},sortBy:function(t,e){e=e||d;var n=this;return ae(this.entries().entries().toArray().sort(function(r,i){return e(t(r[1][1],r[1][0],n),t(i[1][1],i[1][0],n))||r[0]-i[0]})).fromEntries().values().fromEntries()},cacheResult:function(){return!this._cache&&this.__iterateUncached&&(y(this.length),this._cache=this.entries().toArray(),null==this.length&&(this.length=this._cache.length)),this},__iterate:function(t,e,n){if(!this._cache)return this.__iterateUncached(t,e,n);var r=this.length-1,i=this._cache,u=this;if(e)for(var s=i.length-1;s>=0;s--){var a=i[s];if(t(a[1],n?a[0]:r-a[0],u)===!1)break}else i.every(n?function(e){return t(e[1],r-e[0],u)!==!1}:function(e){return t(e[1],e[0],u)!==!1});return this.length},__makeSequence:function(){return r()}},{from:function(t){if(t instanceof ae)return t;if(!Array.isArray(t)){if(t&&t.constructor===Object)return new le(t);t=[t]}return new _e(t)}});var oe=se.prototype;oe.toJSON=oe.toJS,oe.__toJS=oe.toObject,oe.inspect=oe.toSource=function(){return""+this};var he=function(){ue.defaultSuperCall(this,ce.prototype,arguments)},ce=he;ue.createClass(he,{toString:function(){return this.__toString("Seq [","]")},toArray:function(){y(this.length);var t=Array(this.length||0);return t.length=this.forEach(function(e,n){t[n]=e}),t},fromEntries:function(){var t=this,e=r();return e.length=t.length,e.entries=function(){return t},e.__iterateUncached=function(e,n,r){return t.__iterate(function(t,n,r){return e(t[1],t[0],r)
},n,r)},e},join:function(t){t=t||",";var e="",n=0;return this.forEach(function(r,i){var u=i-n;n=i,e+=(1===u?t:m(t,u))+r}),this.length&&this.length-1>n&&(e+=m(t,this.length-1-n)),e},concat:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];var n=[this].concat(t).map(function(t){return se(t)}),r=this.__makeSequence();return r.length=n.reduce(function(t,e){return null!=t&&null!=e.length?t+e.length:void 0},0),r.__iterateUncached=function(t,e,r){if(r&&!this.length)return this.cacheResult().__iterate(t,e,r);for(var i,u=0,s=r&&this.length-1,a=n.length-1,o=0;a>=o&&!i;o++){var h=n[e?a-o:o];h instanceof ce||(h=h.values()),u+=h.__iterate(function(e,n,a){return n+=u,t(e,r?s-n:n,a)===!1?(i=!0,!1):void 0},e)}return u},r},reverse:function(t){var e=this,n=e.__makeSequence();return n.length=e.length,n.__reversedIndices=!!(t^e.__reversedIndices),n.__iterateUncached=function(n,r,i){return e.__iterate(n,!r,i^t)},n.reverse=function(n){return t===n?e:fe.reverse.call(this,n)},n},values:function(){var t=ue.superCall(this,ce.prototype,"values",[]);return t.length=void 0,t},filter:function(t,e,n){var r=v(this,t,e,n,n);return n&&(r.length=this.length),r},indexOf:function(t){return this.findIndex(function(e){return w(e,t)})},lastIndexOf:function(t){return this.reverse(!0).indexOf(t)},findIndex:function(t,e){var n=this.findKey(t,e);return null==n?-1:n},findLastIndex:function(t,e){return this.reverse(!0).findIndex(t,e)},slice:function(t,e,n){var r=this;if(s(t,e,r.length))return r;var i=r.__makeSequence(),u=a(t,r.length),h=o(e,r.length);return i.length=r.length&&(n?r.length:h-u),i.__reversedIndices=r.__reversedIndices,i.__iterateUncached=function(i,s,c){if(s)return this.cacheResult().__iterate(i,s,c);var f=this.__reversedIndices^c;if(u!==u||h!==h||f&&null==r.length){var l=r.count();u=a(t,l),h=o(e,l)}var _=f?r.length-h:u,v=f?r.length-u:h,g=r.__iterate(function(t,e,r){return f?null!=v&&e>=v||e>=_&&i(t,n?e:e-_,r)!==!1:_>e||(null==v||v>e)&&i(t,n?e:e-_,r)!==!1},s,c);return null!=this.length?this.length:n?g:Math.max(0,g-_)},i},splice:function(t,e){for(var n=[],r=2;arguments.length>r;r++)n[r-2]=arguments[r];
return 0===e&&0===n.length?this:this.slice(0,t).concat(n,this.slice(t+e))},takeWhile:function(t,e,n){var r=this,i=r.__makeSequence();return i.__iterateUncached=function(u,s,a){if(s)return this.cacheResult().__iterate(u,s,a);var o=0,h=!0,c=r.__iterate(function(n,r,i){return t.call(e,n,r,i)&&u(n,r,i)!==!1?void(o=r):(h=!1,!1)},s,a);return n?i.length:h?c:o+1},n&&(i.length=this.length),i},skipWhile:function(t,e,n){var r=this,i=r.__makeSequence();return n&&(i.length=this.length),i.__iterateUncached=function(i,u,s){if(u)return this.cacheResult().__iterate(i,u,s);var a=r.__reversedIndices^s,o=!0,h=0,c=r.__iterate(function(r,u,a){return o&&(o=t.call(e,r,u,a),o||(h=u)),o||i(r,s||n?u:u-h,a)!==!1},u,s);return n?c:a?h+1:c-h},i},groupBy:function(t,e,n){var r=this,i=Ze.empty().withMutations(function(e){r.forEach(function(i,u,s){var a=t(i,u,s),o=e.get(a,ye);o===ye&&(o=Array(n?r.length:0),e.set(a,o)),n?o[u]=i:o.push(i)})});return i.map(function(t){return se(t)})},sortBy:function(t,e,n){var r=ue.superCall(this,ce.prototype,"sortBy",[t,e]);return n||(r=r.values()),r.length=this.length,r},__makeSequence:function(){return i(this)}},{},se);var fe=he.prototype;fe.__toJS=fe.toArray,fe.__toStringMapper=p;var le=function(t){var e=Object.keys(t);this._object=t,this._keys=e,this.length=e.length};ue.createClass(le,{toObject:function(){return this._object},get:function(t,e){return void 0===e||this.has(t)?this._object[t]:e},has:function(t){return this._object.hasOwnProperty(t)},__iterate:function(t,e){for(var n=this._object,r=this._keys,i=r.length-1,u=0;i>=u;u++){var s=e?i-u:u;if(t(n[r[s]],r[s],n)===!1)break}return u}},{},se);var _e=function(t){this._array=t,this.length=t.length};ue.createClass(_e,{toArray:function(){return this._array},__iterate:function(t,e,n){var r=this._array,i=r.length-1,u=-1;if(e){for(var s=i;s>=0;s--){if(r.hasOwnProperty(s)&&t(r[s],n?s:i-s,r)===!1)return u+1;u=s}return r.length}var a=r.every(function(e,s){return t(e,n?i-s:s,r)===!1?!1:(u=s,!0)});return a?r.length:u+1}},{},he),_e.prototype.get=le.prototype.get,_e.prototype.has=le.prototype.has;
var ve=function(t,e,n){this._rootData=t,this._keyPath=e,this._onChange=n},ge=ve;ue.createClass(ve,{get:function(t,e){var n=this._rootData.getIn(this._keyPath,we.empty());return t?n.get(t,e):n},set:function(t,e){return D(this,function(n){return n.set(t,e)},t)},"delete":function(t){return D(this,function(e){return e.delete(t)},t)},update:function(t,e){var n;return"function"==typeof t?(n=t,t=void 0):n=function(n){return n.update(t,e)},D(this,n,t)},cursor:function(t){return t&&!Array.isArray(t)&&(t=[t]),t&&0!==t.length?new ge(this._rootData,this._keyPath?this._keyPath.concat(t):t,this._onChange):this}},{});var pe=5,me=1<<pe,de=me-1,ye={},we=function(t){var e=Ie.empty();return t?t.constructor===Ie?t:e.merge(t):e},Ie=we;ue.createClass(we,{toString:function(){return this.__toString("Map {","}")},get:function(t,e){return this._root?this._root.get(0,L(t),t,e):e},set:function(t,e){return S(this,t,e)},"delete":function(t){return S(this,t,ye)},update:function(t,e){return this.set(t,e(this.get(t)))},clear:function(){return this.__ownerID?(this.length=0,this._root=null,this):Ie.empty()},merge:function(){return j(this,null,arguments)},mergeWith:function(t){for(var e=[],n=1;arguments.length>n;n++)e[n-1]=arguments[n];return j(this,t,e)},mergeDeep:function(){return j(this,U(null),arguments)},mergeDeepWith:function(t){for(var e=[],n=1;arguments.length>n;n++)e[n-1]=arguments[n];return j(this,U(t),e)},updateIn:function(t,e){return t&&0!==t.length?P(this,t,e,0):e(this)},cursor:function(t,e){return e||"function"!=typeof t||(e=t,t=null),t&&!Array.isArray(t)&&(t=[t]),new ve(this,t,e)},withMutations:function(t){var e=this.asMutable();return t(e),e.__ensureOwner(this.__ownerID)},asMutable:function(){return this.__ownerID?this:this.__ensureOwner(new O)},asImmutable:function(){return this.__ensureOwner()},__iterate:function(t,e){var n=this;if(!n._root)return 0;var r=0;return this._root.iterate(function(e){return t(e[1],e[0],n)===!1?!1:void r++},e),r},__deepEqual:function(t){var e=this;return t.every(function(t,n){return w(e.get(n,ye),t)})},__ensureOwner:function(t){return t===this.__ownerID?this:t?k(this.length,this._root,t):(this.__ownerID=t,this)
}},{empty:function(){return Ae||(Ae=k(0))}},se);var De=we.prototype;we.from=we;var Oe=function(t,e,n){this.ownerID=t,this.bitmap=e,this.nodes=n},be=Oe;ue.createClass(Oe,{get:function(t,e,n,r){var i=1<<(e>>>t&de),u=this.bitmap;return 0===(u&i)?r:this.nodes[W(u&i-1)].get(t+pe,e,n,r)},update:function(t,e,n,r,i,u){var s=n>>>e&de,a=1<<s,o=this.bitmap,h=0!==(o&a);if(!h&&i===ye)return this;var c=W(o&a-1),f=this.nodes,l=h?f[c]:null,_=x(l,t,e+pe,n,r,i,u);if(_===l)return this;if(!h&&_&&f.length>=ze)return q(t,f,o,c,_);if(h&&!_&&2===f.length&&E(f[1^c]))return f[1^c];if(h&&_&&1===f.length&&E(_))return _;var v=t&&t===this.ownerID,g=h?_?o:o^a:o|a,p=h?_?z(f,c,_,v):B(f,c,v):J(f,c,_,v);return v?(this.bitmap=g,this.nodes=p,this):new be(t,g,p)},iterate:function(t,e){for(var n=this.nodes,r=0,i=n.length-1;i>=r;r++)if(n[e?i-r:r].iterate(t,e)===!1)return!1}},{});var Me=function(t,e,n){this.ownerID=t,this.count=e,this.nodes=n},ke=Me;ue.createClass(Me,{get:function(t,e,n,r){var i=e>>>t&de,u=this.nodes[i];return u?u.get(t+pe,e,n,r):r},update:function(t,e,n,r,i,u){var s=n>>>e&de,a=i===ye,o=this.nodes,h=o[s];if(a&&!h)return this;var c=x(h,t,e+pe,n,r,i,u);if(c===h)return this;var f=this.count;if(h){if(!c&&(f--,Je>f))return A(t,o,f,s)}else f++;var l=t&&t===this.ownerID,_=z(o,s,c,l);return l?(this.count=f,this.nodes=_,this):new ke(t,f,_)},iterate:function(t,e){for(var n=this.nodes,r=0,i=n.length-1;i>=r;r++){var u=n[e?i-r:r];if(u&&u.iterate(t,e)===!1)return!1}}},{});var Se=function(t,e,n){this.ownerID=t,this.hash=e,this.entries=n},xe=Se;ue.createClass(Se,{get:function(t,e,n,r){for(var i=this.entries,u=0,s=i.length;s>u;u++)if(w(n,i[u][0]))return i[u][1];return r},update:function(t,e,n,r,i,u){var s=i===ye;if(n!==this.hash)return s?this:(u&&(u.value=!0),C(this,t,e,n,[r,i]));for(var a=this.entries,o=0,h=a.length;h>o&&!w(r,a[o][0]);o++);var c=h>o;if(s&&!c)return this;if((s||!c)&&u&&(u.value=!0),s&&2===h)return new Ee(t,this.hash,a[1^o]);var f=t&&t===this.ownerID,l=f?a:b(a);return c?s?o===h-1?l.pop():l[o]=l.pop():l[o]=[r,i]:l.push([r,i]),f?(this.entries=l,this):new xe(t,this.hash,l)
},iterate:function(t,e){for(var n=this.entries,r=0,i=n.length-1;i>=r;r++)if(t(n[e?i-r:r])===!1)return!1}},{});var Ee=function(t,e,n){this.ownerID=t,this.hash=e,this.entry=n},Ce=Ee;ue.createClass(Ee,{get:function(t,e,n,r){return w(n,this.entry[0])?this.entry[1]:r},update:function(t,e,n,r,i,u){var s=w(r,this.entry[0]);return i===ye?(s&&u&&(u.value=!0),s?null:this):s?i===this.entry[1]?this:t&&t===this.ownerID?(this.entry[1]=i,this):new Ce(t,n,[r,i]):(u&&(u.value=!0),C(this,t,e,n,[r,i]))},iterate:function(t){return t(this.entry)}},{});var Ae,qe={value:!1},je=2147483647,Ue=16,Re=255,Pe=0,We={},ze=me/2,Je=me/4,Be=function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];return Le.from(t)},Le=Be;ue.createClass(Be,{toString:function(){return this.__toString("Vector [","]")},get:function(t,e){if(t=X(t,this._origin),t>=this._size)return e;var n=H(this,t),r=t&de;return n&&(void 0===e||n.array.hasOwnProperty(r))?n.array[r]:e},first:function(){return this.get(0)},last:function(){return this.get(this.length?this.length-1:0)},set:function(t,e){return G(this,t,e)},"delete":function(t){return G(this,t,ye)},clear:function(){return this.__ownerID?(this.length=this._origin=this._size=0,this._level=pe,this._root=this._tail=He,this):Le.empty()},push:function(){var t=arguments,e=this.length;return this.withMutations(function(n){Q(n,0,e+t.length);for(var r=0;t.length>r;r++)n.set(e+r,t[r])})},pop:function(){return Q(this,0,-1)},unshift:function(){var t=arguments;return this.withMutations(function(e){Q(e,-t.length);for(var n=0;t.length>n;n++)e.set(n,t[n])})},shift:function(){return Q(this,1)},merge:function(){return T(this,null,arguments)},mergeWith:function(t){for(var e=[],n=1;arguments.length>n;n++)e[n-1]=arguments[n];return T(this,t,e)},mergeDeep:function(){return T(this,U(null),arguments)},mergeDeepWith:function(t){for(var e=[],n=1;arguments.length>n;n++)e[n-1]=arguments[n];return T(this,U(t),e)},setLength:function(t){return Q(this,0,t)},slice:function(t,e,n){var r=ue.superCall(this,Le.prototype,"slice",[t,e,n]);if(!n&&r!==this){var i=this,u=i.length;
r.toVector=function(){return Q(i,0>t?Math.max(0,u+t):u?Math.min(u,t):t,null==e?u:0>e?Math.max(0,u+e):u?Math.min(u,e):e)}}return r},iterator:function(){return new Fe(this,this._origin,this._size,this._level,this._root,this._tail)},__iterate:function(t,e,n){var r=this,i=0,u=r.length-1;n^=e;var s,a=function(e,s){return t(e,n?u-s:s,r)===!1?!1:(i=s,!0)},o=Y(this._size);return s=e?this._tail.iterate(0,o-this._origin,this._size-this._origin,a,e)&&this._root.iterate(this._level,-this._origin,o-this._origin,a,e):this._root.iterate(this._level,-this._origin,o-this._origin,a,e)&&this._tail.iterate(0,o-this._origin,this._size-this._origin,a,e),(s?u:e?u-i:i)+1},__deepEquals:function(t){var e=this.iterator();return t.every(function(t,n){var r=e.next().value;return r&&n===r[0]&&w(t,r[1])})},__ensureOwner:function(t){return t===this.__ownerID?this:t?F(this._origin,this._size,this._level,this._root,this._tail,t):(this.__ownerID=t,this)}},{empty:function(){return Ge||(Ge=F(0,0,pe,He,He))},from:function(t){if(!t||0===t.length)return Le.empty();if(t.constructor===Le)return t;var e=Array.isArray(t);return t.length>0&&me>t.length?F(0,t.length,pe,He,new Ke(e?b(t):se(t).toArray())):(e||(t=se(t),t instanceof he||(t=t.values())),Le.empty().merge(t))}},he);var Ve=Be.prototype;Ve["@@iterator"]=Ve.iterator,Ve.update=De.update,Ve.updateIn=De.updateIn,Ve.cursor=De.cursor,Ve.withMutations=De.withMutations,Ve.asMutable=De.asMutable,Ve.asImmutable=De.asImmutable;var Ke=function(t,e){this.array=t,this.ownerID=e},Ne=Ke;ue.createClass(Ke,{ensureOwner:function(t){return t&&t===this.ownerID?this:new Ne(this.array.slice(),t)},removeBefore:function(t,e,n){if(n===e?1<<e:0||0===this.array.length)return this;var r=n>>>e&de;if(r>=this.array.length)return new Ne([],t);var i,u=0===r;if(e>0){var s=this.array[r];if(i=s&&s.removeBefore(t,e-pe,n),i===s&&u)return this}if(u&&!i)return this;var a=this.ensureOwner();if(!u)for(var o=0;r>o;o++)delete a.array[o];return i&&(a.array[r]=i),a},removeAfter:function(t,e,n){if(n===e?1<<e:0||0===this.array.length)return this;var r=n-1>>>e&de;
if(r>=this.array.length)return this;var i,u=r===this.array.length-1;if(e>0){var s=this.array[r];if(i=s&&s.removeAfter(t,e-pe,n),i===s&&u)return this}if(u&&!i)return this;var a=this.ensureOwner();return u||(a.array.length=r+1),i&&(a.array[r]=i),a},iterate:function(t,e,n,r,i){var u,s=this.array,a=s.length-1;if(0===t)for(u=0;a>=u;u++){var o=i?a-u:u;if(s.hasOwnProperty(o)){var h=o+e;if(h>=0&&n>h&&r(s[o],h)===!1)return!1}}else{var c=1<<t,f=t-pe;for(u=0;a>=u;u++){var l=i?a-u:u,_=e+l*c;if(n>_&&_+c>0){var v=s[l];if(v&&!v.iterate(f,_,n,r,i))return!1}}}return!0}},{});var Fe=function(t,e,n,r,i,u){var s=Y(n);this._stack=N(i.array,r,-e,s-e,N(u.array,0,s-e,n-e))};ue.createClass(Fe,{next:function(){var t=this._stack;t:for(;t;){if(0===t.level)for(t.rawIndex||(t.rawIndex=0);t.array.length>t.rawIndex;){var e=t.rawIndex+t.offset;if(e>=0&&t.max>e&&t.array.hasOwnProperty(t.rawIndex)){var n=t.array[t.rawIndex];return t.rawIndex++,{value:[e,n],done:!1}}t.rawIndex++}else{var r=1<<t.level;for(t.levelIndex||(t.levelIndex=0);t.array.length>t.levelIndex;){var i=t.offset+t.levelIndex*r;if(i+r>0&&t.max>i){var u=t.array[t.levelIndex];if(u){t.levelIndex++,t=this._stack=N(u.array,t.level-pe,i,t.max,t);continue t}}t.levelIndex++}}t=this._stack=this._stack.__prev}return{value:void 0,done:!0}}},{});var Ge,He=new Ke([]),Qe=function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];return Te.from(t)},Te=Qe;ue.createClass(Qe,{toString:function(){return this.__toString("Set {","}")},has:function(t){return this._map?this._map.has(t):!1},get:function(t,e){return this.has(t)?t:e},add:function(t){var e=this._map;return e||(e=we.empty().__ensureOwner(this.__ownerID)),e=e.set(t,null),this.__ownerID?(this.length=e.length,this._map=e,this):e===this._map?this:Z(e)},"delete":function(t){if(null==this._map)return this;var e=this._map.delete(t);return 0===e.length?this.clear():this.__ownerID?(this.length=e.length,this._map=e,this):e===this._map?this:Z(e)},clear:function(){return this.__ownerID?(this.length=0,this._map=null,this):Te.empty()},union:function(){var t=arguments;
return 0===t.length?this:this.withMutations(function(e){for(var n=0;t.length>n;n++){var r=t[n];r=r.forEach?r:se(r),r.forEach(function(t){return e.add(t)})}})},intersect:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];if(0===t.length)return this;t=t.map(function(t){return se(t)});var n=this;return this.withMutations(function(e){n.forEach(function(n){t.every(function(t){return t.contains(n)})||e.delete(n)})})},subtract:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];if(0===t.length)return this;t=t.map(function(t){return se(t)});var n=this;return this.withMutations(function(e){n.forEach(function(n){t.some(function(t){return t.contains(n)})&&e.delete(n)})})},isSubset:function(t){return t=se(t),this.every(function(e){return t.contains(e)})},isSuperset:function(t){var e=this;return t=se(t),t.every(function(t){return e.contains(t)})},__iterate:function(t,e){var n=this;return this._map?this._map.__iterate(function(e,r){return t(r,r,n)},e):0},__deepEquals:function(t){return!(this._map||t._map)||this._map.equals(t._map)},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t);return t?Z(e,t):(this.__ownerID=t,this._map=e,this)}},{empty:function(){return Ye||(Ye=Z())},from:function(t){var e=Te.empty();return t?t.constructor===Te?t:e.union(t):e},fromKeys:function(t){return Te.from(se(t).flip())}},se);var Xe=Qe.prototype;Xe.contains=Xe.has,Xe.withMutations=we.prototype.withMutations,Xe.asMutable=we.prototype.asMutable,Xe.asImmutable=we.prototype.asImmutable,Xe.__toJS=he.prototype.__toJS,Xe.__toStringMapper=he.prototype.__toStringMapper;var Ye,Ze=function(t){var e=$e.empty();return t?t.constructor===$e?t:e.merge(t):e},$e=Ze;ue.createClass(Ze,{toString:function(){return this.__toString("OrderedMap {","}")},get:function(t,e){if(null!=t&&this._map){var n=this._map.get(t);if(null!=n)return this._vector.get(n)[1]}return e},clear:function(){return this.__ownerID?(this.length=0,this._map=this._vector=null,this):$e.empty()},set:function(t,e){if(null==t)return this;
var n=this._map,r=this._vector;if(n){var i=n.get(t);null==i?(n=n.set(t,r.length),r=r.push([t,e])):r.get(i)[1]!==e&&(r=r.set(i,[t,e]))}else r=Be.empty().__ensureOwner(this.__ownerID).set(0,[t,e]),n=we.empty().__ensureOwner(this.__ownerID).set(t,0);return this.__ownerID?(this.length=n.length,this._map=n,this._vector=r,this):r===this._vector?this:$(n,r)},"delete":function(t){if(null==t||null==this._map)return this;var e=this._map.get(t);if(null==e)return this;var n=this._map.delete(t),r=this._vector.delete(e);return 0===n.length?this.clear():this.__ownerID?(this.length=n.length,this._map=n,this._vector=r,this):n===this._map?this:$(n,r)},__iterate:function(t,e){return this._vector?this._vector.fromEntries().__iterate(t,e):0},__deepEqual:function(t){var e=this._vector.iterator();return t.every(function(t,n){var r=e.next().value;return r&&(r=r[1]),r&&w(n,r[0])&&w(t,r[1])})},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t),n=this._vector&&this._vector.__ensureOwner(t);return t?$(e,n,t):(this.__ownerID=t,this._map=e,this._vector=n,this)}},{empty:function(){return tn||(tn=$())}},we),Ze.from=Ze;var tn,en=function(t,e){var n=function(t){this._map=we(t)};t=se(t);var r=n.prototype=Object.create(rn);r.constructor=n,r._name=e,r._defaultValues=t;var i=Object.keys(t);return n.prototype.length=i.length,Object.defineProperty&&t.forEach(function(t,e){Object.defineProperty(n.prototype,e,{get:function(){return this.get(e)},set:function(t){I(this.__ownerID,"Cannot set on an immutable record."),this.set(e,t)}})}),n},nn=en;ue.createClass(en,{toString:function(){return this.__toString((this._name||"Record")+" {","}")},has:function(t){return this._defaultValues.has(t)},get:function(t,e){return void 0===e||this.has(t)?this._map.get(t,this._defaultValues.get(t)):e},clear:function(){if(this.__ownerID)return this._map.clear(),this;Object.getPrototypeOf(this).constructor;return nn._empty||(nn._empty=te(this,we.empty()))},set:function(t,e){if(null==t||!this.has(t))return this;var n=this._map.set(t,e);
return this.__ownerID||n===this._map?this:te(this,n)},"delete":function(t){if(null==t||!this.has(t))return this;var e=this._map.delete(t);return this.__ownerID||e===this._map?this:te(this,e)},__iterate:function(t,e){var n=this;return this._defaultValues.map(function(t,e){return n.get(e)}).__iterate(t,e)},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t);return t?te(this,e,t):(this.__ownerID=t,this._map=e,this)}},{},se);var rn=en.prototype;rn.__deepEqual=De.__deepEqual,rn.merge=De.merge,rn.mergeWith=De.mergeWith,rn.mergeDeep=De.mergeDeep,rn.mergeDeepWith=De.mergeDeepWith,rn.update=De.update,rn.updateIn=De.updateIn,rn.cursor=De.cursor,rn.withMutations=De.withMutations,rn.asMutable=De.asMutable,rn.asImmutable=De.asImmutable;var un=function(t,e,n){return this instanceof sn?(I(0!==n,"Cannot step a Range by 0"),t=t||0,null==e&&(e=1/0),t===e&&on?on:(n=null==n?1:Math.abs(n),t>e&&(n=-n),this._start=t,this._end=e,this._step=n,void(this.length=Math.max(0,Math.ceil((e-t)/n-1)+1)))):new sn(t,e,n)},sn=un;ue.createClass(un,{toString:function(){return 0===this.length?"Range []":"Range [ "+this._start+"..."+this._end+(this._step>1?" by "+this._step:"")+" ]"},has:function(t){return I(t>=0,"Index out of bounds"),this.length>t},get:function(t,e){return I(t>=0,"Index out of bounds"),1/0===this.length||this.length>t?this._start+t*this._step:e},contains:function(t){var e=(t-this._start)/this._step;return e>=0&&this.length>e&&e===Math.floor(e)},slice:function(t,e,n){return s(t,e,this.length)?this:n?ue.superCall(this,sn.prototype,"slice",[t,e,n]):(t=a(t,this.length),e=o(e,this.length),t>=e?on:new sn(this.get(t,this._end),this.get(e,this._end),this._step))},indexOf:function(t){var e=t-this._start;if(e%this._step===0){var n=e/this._step;if(n>=0&&this.length>n)return n}return-1},lastIndexOf:function(t){return this.indexOf(t)},take:function(t){return this.slice(0,t)},skip:function(t,e){return e?ue.superCall(this,sn.prototype,"skip",[t]):this.slice(t)},__iterate:function(t,e,n){for(var r=e^n,i=this.length-1,u=this._step,s=e?this._start+i*u:this._start,a=0;i>=a&&t(s,r?i-a:a,this)!==!1;a++)s+=e?-u:u;
return r?this.length:a},__deepEquals:function(t){return this._start===t._start&&this._end===t._end&&this._step===t._step}},{},he);var an=un.prototype;an.__toJS=an.toArray,an.first=Ve.first,an.last=Ve.last;var on=un(0,0),hn=function(t,e){return 0===e&&ln?ln:this instanceof cn?(this._value=t,void(this.length=null==e?1/0:Math.max(0,e))):new cn(t,e)},cn=hn;ue.createClass(hn,{toString:function(){return 0===this.length?"Repeat []":"Repeat [ "+this._value+" "+this.length+" times ]"},get:function(t,e){return I(t>=0,"Index out of bounds"),1/0===this.length||this.length>t?this._value:e},first:function(){return this._value},contains:function(t){return w(this._value,t)},slice:function(t,e,n){if(n)return ue.superCall(this,cn.prototype,"slice",[t,e,n]);var r=this.length;return t=0>t?Math.max(0,r+t):Math.min(r,t),e=null==e?r:e>0?Math.min(r,e):Math.max(0,r+e),e>t?new cn(this._value,e-t):ln},reverse:function(t){return t?ue.superCall(this,cn.prototype,"reverse",[t]):this},indexOf:function(t){return w(this._value,t)?0:-1},lastIndexOf:function(t){return w(this._value,t)?this.length:-1},__iterate:function(t,e,n){var r=e^n;I(!r||1/0>this.length,"Cannot access end of infinite range.");for(var i=this.length-1,u=0;i>=u&&t(this._value,r?i-u:u,this)!==!1;u++);return r?this.length:u},__deepEquals:function(t){return w(this._value,t._value)}},{},he);var fn=hn.prototype;fn.last=fn.first,fn.has=an.has,fn.take=an.take,fn.skip=an.skip,fn.__toJS=an.__toJS;var ln=new hn(void 0,0),_n={Sequence:se,Map:we,Vector:Be,Set:Qe,OrderedMap:Ze,Record:en,Range:un,Repeat:hn,is:w,fromJS:ee};return _n}"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):Immutable=t();