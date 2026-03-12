goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16675 = (function (f,blockable,meta16676){
this.f = f;
this.blockable = blockable;
this.meta16676 = meta16676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16677,meta16676__$1){
var self__ = this;
var _16677__$1 = this;
return (new cljs.core.async.t_cljs$core$async16675(self__.f,self__.blockable,meta16676__$1));
}));

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16677){
var self__ = this;
var _16677__$1 = this;
return self__.meta16676;
}));

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async16675.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async16675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16676","meta16676",1487022687,null)], null);
}));

(cljs.core.async.t_cljs$core$async16675.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16675");

(cljs.core.async.t_cljs$core$async16675.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16675");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16675.
 */
cljs.core.async.__GT_t_cljs$core$async16675 = (function cljs$core$async$__GT_t_cljs$core$async16675(f,blockable,meta16676){
return (new cljs.core.async.t_cljs$core$async16675(f,blockable,meta16676));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16666 = arguments.length;
switch (G__16666) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async16675(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__16848 = arguments.length;
switch (G__16848) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16870 = arguments.length;
switch (G__16870) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__16886 = arguments.length;
switch (G__16886) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20972 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20972) : fn1.call(null,val_20972));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20972) : fn1.call(null,val_20972));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16913 = arguments.length;
switch (G__16913) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___20975 = n;
var x_20977 = (0);
while(true){
if((x_20977 < n__5593__auto___20975)){
(a[x_20977] = x_20977);

var G__20980 = (x_20977 + (1));
x_20977 = G__20980;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16953 = (function (flag,meta16954){
this.flag = flag;
this.meta16954 = meta16954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16955,meta16954__$1){
var self__ = this;
var _16955__$1 = this;
return (new cljs.core.async.t_cljs$core$async16953(self__.flag,meta16954__$1));
}));

(cljs.core.async.t_cljs$core$async16953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16955){
var self__ = this;
var _16955__$1 = this;
return self__.meta16954;
}));

(cljs.core.async.t_cljs$core$async16953.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16953.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async16953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16954","meta16954",32166585,null)], null);
}));

(cljs.core.async.t_cljs$core$async16953.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16953");

(cljs.core.async.t_cljs$core$async16953.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16953");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16953.
 */
cljs.core.async.__GT_t_cljs$core$async16953 = (function cljs$core$async$__GT_t_cljs$core$async16953(flag,meta16954){
return (new cljs.core.async.t_cljs$core$async16953(flag,meta16954));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async16953(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16981 = (function (flag,cb,meta16982){
this.flag = flag;
this.cb = cb;
this.meta16982 = meta16982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16983,meta16982__$1){
var self__ = this;
var _16983__$1 = this;
return (new cljs.core.async.t_cljs$core$async16981(self__.flag,self__.cb,meta16982__$1));
}));

(cljs.core.async.t_cljs$core$async16981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16983){
var self__ = this;
var _16983__$1 = this;
return self__.meta16982;
}));

(cljs.core.async.t_cljs$core$async16981.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16981.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async16981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16982","meta16982",-720608050,null)], null);
}));

(cljs.core.async.t_cljs$core$async16981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16981");

(cljs.core.async.t_cljs$core$async16981.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16981.
 */
cljs.core.async.__GT_t_cljs$core$async16981 = (function cljs$core$async$__GT_t_cljs$core$async16981(flag,cb,meta16982){
return (new cljs.core.async.t_cljs$core$async16981(flag,cb,meta16982));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async16981(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17003_SHARP_){
var G__17023 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17003_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17023) : fret.call(null,G__17023));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17004_SHARP_){
var G__17024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17004_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17024) : fret.call(null,G__17024));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20994 = (i + (1));
i = G__20994;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20995 = arguments.length;
var i__5727__auto___20996 = (0);
while(true){
if((i__5727__auto___20996 < len__5726__auto___20995)){
args__5732__auto__.push((arguments[i__5727__auto___20996]));

var G__20999 = (i__5727__auto___20996 + (1));
i__5727__auto___20996 = G__20999;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17068){
var map__17069 = p__17068;
var map__17069__$1 = cljs.core.__destructure_map(map__17069);
var opts = map__17069__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17059){
var G__17060 = cljs.core.first(seq17059);
var seq17059__$1 = cljs.core.next(seq17059);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17060,seq17059__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17091 = arguments.length;
switch (G__17091) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16428__auto___21010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_17161){
var state_val_17165 = (state_17161[(1)]);
if((state_val_17165 === (7))){
var inst_17149 = (state_17161[(2)]);
var state_17161__$1 = state_17161;
var statearr_17169_21012 = state_17161__$1;
(statearr_17169_21012[(2)] = inst_17149);

(statearr_17169_21012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (1))){
var state_17161__$1 = state_17161;
var statearr_17170_21013 = state_17161__$1;
(statearr_17170_21013[(2)] = null);

(statearr_17170_21013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (4))){
var inst_17123 = (state_17161[(7)]);
var inst_17123__$1 = (state_17161[(2)]);
var inst_17128 = (inst_17123__$1 == null);
var state_17161__$1 = (function (){var statearr_17173 = state_17161;
(statearr_17173[(7)] = inst_17123__$1);

return statearr_17173;
})();
if(cljs.core.truth_(inst_17128)){
var statearr_17174_21016 = state_17161__$1;
(statearr_17174_21016[(1)] = (5));

} else {
var statearr_17176_21017 = state_17161__$1;
(statearr_17176_21017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (13))){
var state_17161__$1 = state_17161;
var statearr_17178_21018 = state_17161__$1;
(statearr_17178_21018[(2)] = null);

(statearr_17178_21018[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (6))){
var inst_17123 = (state_17161[(7)]);
var state_17161__$1 = state_17161;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17161__$1,(11),to,inst_17123);
} else {
if((state_val_17165 === (3))){
var inst_17154 = (state_17161[(2)]);
var state_17161__$1 = state_17161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17161__$1,inst_17154);
} else {
if((state_val_17165 === (12))){
var state_17161__$1 = state_17161;
var statearr_17182_21021 = state_17161__$1;
(statearr_17182_21021[(2)] = null);

(statearr_17182_21021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (2))){
var state_17161__$1 = state_17161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17161__$1,(4),from);
} else {
if((state_val_17165 === (11))){
var inst_17141 = (state_17161[(2)]);
var state_17161__$1 = state_17161;
if(cljs.core.truth_(inst_17141)){
var statearr_17183_21023 = state_17161__$1;
(statearr_17183_21023[(1)] = (12));

} else {
var statearr_17184_21024 = state_17161__$1;
(statearr_17184_21024[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (9))){
var state_17161__$1 = state_17161;
var statearr_17185_21025 = state_17161__$1;
(statearr_17185_21025[(2)] = null);

(statearr_17185_21025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (5))){
var state_17161__$1 = state_17161;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17186_21028 = state_17161__$1;
(statearr_17186_21028[(1)] = (8));

} else {
var statearr_17187_21030 = state_17161__$1;
(statearr_17187_21030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (14))){
var inst_17147 = (state_17161[(2)]);
var state_17161__$1 = state_17161;
var statearr_17188_21038 = state_17161__$1;
(statearr_17188_21038[(2)] = inst_17147);

(statearr_17188_21038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (10))){
var inst_17138 = (state_17161[(2)]);
var state_17161__$1 = state_17161;
var statearr_17189_21042 = state_17161__$1;
(statearr_17189_21042[(2)] = inst_17138);

(statearr_17189_21042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (8))){
var inst_17133 = cljs.core.async.close_BANG_(to);
var state_17161__$1 = state_17161;
var statearr_17190_21043 = state_17161__$1;
(statearr_17190_21043[(2)] = inst_17133);

(statearr_17190_21043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13962__auto__ = null;
var cljs$core$async$state_machine__13962__auto____0 = (function (){
var statearr_17191 = [null,null,null,null,null,null,null,null];
(statearr_17191[(0)] = cljs$core$async$state_machine__13962__auto__);

(statearr_17191[(1)] = (1));

return statearr_17191;
});
var cljs$core$async$state_machine__13962__auto____1 = (function (state_17161){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_17161);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e17193){var ex__13965__auto__ = e17193;
var statearr_17194_21050 = state_17161;
(statearr_17194_21050[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_17161[(4)]))){
var statearr_17199_21052 = state_17161;
(statearr_17199_21052[(1)] = cljs.core.first((state_17161[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21055 = state_17161;
state_17161 = G__21055;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$state_machine__13962__auto__ = function(state_17161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13962__auto____1.call(this,state_17161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13962__auto____0;
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13962__auto____1;
return cljs$core$async$state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_17202 = f__16429__auto__();
(statearr_17202[(6)] = c__16428__auto___21010);

return statearr_17202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17206){
var vec__17207 = p__17206;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17207,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17207,(1),null);
var job = vec__17207;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16428__auto___21065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_17218){
var state_val_17219 = (state_17218[(1)]);
if((state_val_17219 === (1))){
var state_17218__$1 = state_17218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17218__$1,(2),res,v);
} else {
if((state_val_17219 === (2))){
var inst_17215 = (state_17218[(2)]);
var inst_17216 = cljs.core.async.close_BANG_(res);
var state_17218__$1 = (function (){var statearr_17222 = state_17218;
(statearr_17222[(7)] = inst_17215);

return statearr_17222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17218__$1,inst_17216);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0 = (function (){
var statearr_17223 = [null,null,null,null,null,null,null,null];
(statearr_17223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__);

(statearr_17223[(1)] = (1));

return statearr_17223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1 = (function (state_17218){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_17218);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e17224){var ex__13965__auto__ = e17224;
var statearr_17225_21083 = state_17218;
(statearr_17225_21083[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_17218[(4)]))){
var statearr_17226_21084 = state_17218;
(statearr_17226_21084[(1)] = cljs.core.first((state_17218[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21089 = state_17218;
state_17218 = G__21089;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__ = function(state_17218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1.call(this,state_17218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_17227 = f__16429__auto__();
(statearr_17227[(6)] = c__16428__auto___21065);

return statearr_17227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17228){
var vec__17229 = p__17228;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17229,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17229,(1),null);
var job = vec__17229;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___21094 = n;
var __21096 = (0);
while(true){
if((__21096 < n__5593__auto___21094)){
var G__17232_21098 = type;
var G__17232_21099__$1 = (((G__17232_21098 instanceof cljs.core.Keyword))?G__17232_21098.fqn:null);
switch (G__17232_21099__$1) {
case "compute":
var c__16428__auto___21106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21096,c__16428__auto___21106,G__17232_21098,G__17232_21099__$1,n__5593__auto___21094,jobs,results,process__$1,async){
return (function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = ((function (__21096,c__16428__auto___21106,G__17232_21098,G__17232_21099__$1,n__5593__auto___21094,jobs,results,process__$1,async){
return (function (state_17247){
var state_val_17248 = (state_17247[(1)]);
if((state_val_17248 === (1))){
var state_17247__$1 = state_17247;
var statearr_17251_21114 = state_17247__$1;
(statearr_17251_21114[(2)] = null);

(statearr_17251_21114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (2))){
var state_17247__$1 = state_17247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17247__$1,(4),jobs);
} else {
if((state_val_17248 === (3))){
var inst_17245 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17247__$1,inst_17245);
} else {
if((state_val_17248 === (4))){
var inst_17237 = (state_17247[(2)]);
var inst_17238 = process__$1(inst_17237);
var state_17247__$1 = state_17247;
if(cljs.core.truth_(inst_17238)){
var statearr_17255_21117 = state_17247__$1;
(statearr_17255_21117[(1)] = (5));

} else {
var statearr_17256_21118 = state_17247__$1;
(statearr_17256_21118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (5))){
var state_17247__$1 = state_17247;
var statearr_17257_21131 = state_17247__$1;
(statearr_17257_21131[(2)] = null);

(statearr_17257_21131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (6))){
var state_17247__$1 = state_17247;
var statearr_17258_21136 = state_17247__$1;
(statearr_17258_21136[(2)] = null);

(statearr_17258_21136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (7))){
var inst_17243 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17259_21141 = state_17247__$1;
(statearr_17259_21141[(2)] = inst_17243);

(statearr_17259_21141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21096,c__16428__auto___21106,G__17232_21098,G__17232_21099__$1,n__5593__auto___21094,jobs,results,process__$1,async))
;
return ((function (__21096,switch__13961__auto__,c__16428__auto___21106,G__17232_21098,G__17232_21099__$1,n__5593__auto___21094,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0 = (function (){
var statearr_17261 = [null,null,null,null,null,null,null];
(statearr_17261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__);

(statearr_17261[(1)] = (1));

return statearr_17261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1 = (function (state_17247){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_17247);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e17262){var ex__13965__auto__ = e17262;
var statearr_17263_21152 = state_17247;
(statearr_17263_21152[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_17247[(4)]))){
var statearr_17264_21155 = state_17247;
(statearr_17264_21155[(1)] = cljs.core.first((state_17247[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21157 = state_17247;
state_17247 = G__21157;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__ = function(state_17247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1.call(this,state_17247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__;
})()
;})(__21096,switch__13961__auto__,c__16428__auto___21106,G__17232_21098,G__17232_21099__$1,n__5593__auto___21094,jobs,results,process__$1,async))
})();
var state__16430__auto__ = (function (){var statearr_17270 = f__16429__auto__();
(statearr_17270[(6)] = c__16428__auto___21106);

return statearr_17270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
});})(__21096,c__16428__auto___21106,G__17232_21098,G__17232_21099__$1,n__5593__auto___21094,jobs,results,process__$1,async))
);


break;
case "async":
var c__16428__auto___21158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21096,c__16428__auto___21158,G__17232_21098,G__17232_21099__$1,n__5593__auto___21094,jobs,results,process__$1,async){
return (function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = ((function (__21096,c__16428__auto___21158,G__17232_21098,G__17232_21099__$1,n__5593__auto___21094,jobs,results,process__$1,async){
return (function (state_17284){
var state_val_17285 = (state_17284[(1)]);
if((state_val_17285 === (1))){
var state_17284__$1 = state_17284;
var statearr_17287_21161 = state_17284__$1;
(statearr_17287_21161[(2)] = null);

(statearr_17287_21161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17285 === (2))){
var state_17284__$1 = state_17284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17284__$1,(4),jobs);
} else {
if((state_val_17285 === (3))){
var inst_17282 = (state_17284[(2)]);
var state_17284__$1 = state_17284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17284__$1,inst_17282);
} else {
if((state_val_17285 === (4))){
var inst_17274 = (state_17284[(2)]);
var inst_17275 = async(inst_17274);
var state_17284__$1 = state_17284;
if(cljs.core.truth_(inst_17275)){
var statearr_17288_21167 = state_17284__$1;
(statearr_17288_21167[(1)] = (5));

} else {
var statearr_17289_21168 = state_17284__$1;
(statearr_17289_21168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17285 === (5))){
var state_17284__$1 = state_17284;
var statearr_17290_21169 = state_17284__$1;
(statearr_17290_21169[(2)] = null);

(statearr_17290_21169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17285 === (6))){
var state_17284__$1 = state_17284;
var statearr_17292_21175 = state_17284__$1;
(statearr_17292_21175[(2)] = null);

(statearr_17292_21175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17285 === (7))){
var inst_17280 = (state_17284[(2)]);
var state_17284__$1 = state_17284;
var statearr_17294_21177 = state_17284__$1;
(statearr_17294_21177[(2)] = inst_17280);

(statearr_17294_21177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21096,c__16428__auto___21158,G__17232_21098,G__17232_21099__$1,n__5593__auto___21094,jobs,results,process__$1,async))
;
return ((function (__21096,switch__13961__auto__,c__16428__auto___21158,G__17232_21098,G__17232_21099__$1,n__5593__auto___21094,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0 = (function (){
var statearr_17296 = [null,null,null,null,null,null,null];
(statearr_17296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__);

(statearr_17296[(1)] = (1));

return statearr_17296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1 = (function (state_17284){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_17284);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e17298){var ex__13965__auto__ = e17298;
var statearr_17299_21180 = state_17284;
(statearr_17299_21180[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_17284[(4)]))){
var statearr_17300_21183 = state_17284;
(statearr_17300_21183[(1)] = cljs.core.first((state_17284[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21184 = state_17284;
state_17284 = G__21184;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__ = function(state_17284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1.call(this,state_17284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__;
})()
;})(__21096,switch__13961__auto__,c__16428__auto___21158,G__17232_21098,G__17232_21099__$1,n__5593__auto___21094,jobs,results,process__$1,async))
})();
var state__16430__auto__ = (function (){var statearr_17305 = f__16429__auto__();
(statearr_17305[(6)] = c__16428__auto___21158);

return statearr_17305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
});})(__21096,c__16428__auto___21158,G__17232_21098,G__17232_21099__$1,n__5593__auto___21094,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17232_21099__$1)].join('')));

}

var G__21187 = (__21096 + (1));
__21096 = G__21187;
continue;
} else {
}
break;
}

var c__16428__auto___21188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_17332){
var state_val_17333 = (state_17332[(1)]);
if((state_val_17333 === (7))){
var inst_17328 = (state_17332[(2)]);
var state_17332__$1 = state_17332;
var statearr_17334_21190 = state_17332__$1;
(statearr_17334_21190[(2)] = inst_17328);

(statearr_17334_21190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17333 === (1))){
var state_17332__$1 = state_17332;
var statearr_17342_21193 = state_17332__$1;
(statearr_17342_21193[(2)] = null);

(statearr_17342_21193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17333 === (4))){
var inst_17312 = (state_17332[(7)]);
var inst_17312__$1 = (state_17332[(2)]);
var inst_17313 = (inst_17312__$1 == null);
var state_17332__$1 = (function (){var statearr_17346 = state_17332;
(statearr_17346[(7)] = inst_17312__$1);

return statearr_17346;
})();
if(cljs.core.truth_(inst_17313)){
var statearr_17347_21195 = state_17332__$1;
(statearr_17347_21195[(1)] = (5));

} else {
var statearr_17349_21196 = state_17332__$1;
(statearr_17349_21196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17333 === (6))){
var inst_17312 = (state_17332[(7)]);
var inst_17317 = (state_17332[(8)]);
var inst_17317__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17319 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17320 = [inst_17312,inst_17317__$1];
var inst_17321 = (new cljs.core.PersistentVector(null,2,(5),inst_17319,inst_17320,null));
var state_17332__$1 = (function (){var statearr_17350 = state_17332;
(statearr_17350[(8)] = inst_17317__$1);

return statearr_17350;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17332__$1,(8),jobs,inst_17321);
} else {
if((state_val_17333 === (3))){
var inst_17330 = (state_17332[(2)]);
var state_17332__$1 = state_17332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17332__$1,inst_17330);
} else {
if((state_val_17333 === (2))){
var state_17332__$1 = state_17332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17332__$1,(4),from);
} else {
if((state_val_17333 === (9))){
var inst_17325 = (state_17332[(2)]);
var state_17332__$1 = (function (){var statearr_17353 = state_17332;
(statearr_17353[(9)] = inst_17325);

return statearr_17353;
})();
var statearr_17357_21200 = state_17332__$1;
(statearr_17357_21200[(2)] = null);

(statearr_17357_21200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17333 === (5))){
var inst_17315 = cljs.core.async.close_BANG_(jobs);
var state_17332__$1 = state_17332;
var statearr_17361_21201 = state_17332__$1;
(statearr_17361_21201[(2)] = inst_17315);

(statearr_17361_21201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17333 === (8))){
var inst_17317 = (state_17332[(8)]);
var inst_17323 = (state_17332[(2)]);
var state_17332__$1 = (function (){var statearr_17363 = state_17332;
(statearr_17363[(10)] = inst_17323);

return statearr_17363;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17332__$1,(9),results,inst_17317);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0 = (function (){
var statearr_17370 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__);

(statearr_17370[(1)] = (1));

return statearr_17370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1 = (function (state_17332){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_17332);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e17379){var ex__13965__auto__ = e17379;
var statearr_17380_21205 = state_17332;
(statearr_17380_21205[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_17332[(4)]))){
var statearr_17382_21206 = state_17332;
(statearr_17382_21206[(1)] = cljs.core.first((state_17332[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21207 = state_17332;
state_17332 = G__21207;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__ = function(state_17332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1.call(this,state_17332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_17385 = f__16429__auto__();
(statearr_17385[(6)] = c__16428__auto___21188);

return statearr_17385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));


var c__16428__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_17435){
var state_val_17436 = (state_17435[(1)]);
if((state_val_17436 === (7))){
var inst_17428 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17445_21215 = state_17435__$1;
(statearr_17445_21215[(2)] = inst_17428);

(statearr_17445_21215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (20))){
var state_17435__$1 = state_17435;
var statearr_17447_21221 = state_17435__$1;
(statearr_17447_21221[(2)] = null);

(statearr_17447_21221[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (1))){
var state_17435__$1 = state_17435;
var statearr_17448_21222 = state_17435__$1;
(statearr_17448_21222[(2)] = null);

(statearr_17448_21222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (4))){
var inst_17392 = (state_17435[(7)]);
var inst_17392__$1 = (state_17435[(2)]);
var inst_17394 = (inst_17392__$1 == null);
var state_17435__$1 = (function (){var statearr_17449 = state_17435;
(statearr_17449[(7)] = inst_17392__$1);

return statearr_17449;
})();
if(cljs.core.truth_(inst_17394)){
var statearr_17454_21232 = state_17435__$1;
(statearr_17454_21232[(1)] = (5));

} else {
var statearr_17455_21237 = state_17435__$1;
(statearr_17455_21237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (15))){
var inst_17407 = (state_17435[(8)]);
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17435__$1,(18),to,inst_17407);
} else {
if((state_val_17436 === (21))){
var inst_17422 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17463_21239 = state_17435__$1;
(statearr_17463_21239[(2)] = inst_17422);

(statearr_17463_21239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (13))){
var inst_17424 = (state_17435[(2)]);
var state_17435__$1 = (function (){var statearr_17465 = state_17435;
(statearr_17465[(9)] = inst_17424);

return statearr_17465;
})();
var statearr_17466_21244 = state_17435__$1;
(statearr_17466_21244[(2)] = null);

(statearr_17466_21244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (6))){
var inst_17392 = (state_17435[(7)]);
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17435__$1,(11),inst_17392);
} else {
if((state_val_17436 === (17))){
var inst_17417 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
if(cljs.core.truth_(inst_17417)){
var statearr_17470_21245 = state_17435__$1;
(statearr_17470_21245[(1)] = (19));

} else {
var statearr_17473_21248 = state_17435__$1;
(statearr_17473_21248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (3))){
var inst_17430 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17435__$1,inst_17430);
} else {
if((state_val_17436 === (12))){
var inst_17404 = (state_17435[(10)]);
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17435__$1,(14),inst_17404);
} else {
if((state_val_17436 === (2))){
var state_17435__$1 = state_17435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17435__$1,(4),results);
} else {
if((state_val_17436 === (19))){
var state_17435__$1 = state_17435;
var statearr_17483_21250 = state_17435__$1;
(statearr_17483_21250[(2)] = null);

(statearr_17483_21250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (11))){
var inst_17404 = (state_17435[(2)]);
var state_17435__$1 = (function (){var statearr_17485 = state_17435;
(statearr_17485[(10)] = inst_17404);

return statearr_17485;
})();
var statearr_17486_21251 = state_17435__$1;
(statearr_17486_21251[(2)] = null);

(statearr_17486_21251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (9))){
var state_17435__$1 = state_17435;
var statearr_17489_21253 = state_17435__$1;
(statearr_17489_21253[(2)] = null);

(statearr_17489_21253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (5))){
var state_17435__$1 = state_17435;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17493_21255 = state_17435__$1;
(statearr_17493_21255[(1)] = (8));

} else {
var statearr_17494_21256 = state_17435__$1;
(statearr_17494_21256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (14))){
var inst_17407 = (state_17435[(8)]);
var inst_17410 = (state_17435[(11)]);
var inst_17407__$1 = (state_17435[(2)]);
var inst_17409 = (inst_17407__$1 == null);
var inst_17410__$1 = cljs.core.not(inst_17409);
var state_17435__$1 = (function (){var statearr_17504 = state_17435;
(statearr_17504[(8)] = inst_17407__$1);

(statearr_17504[(11)] = inst_17410__$1);

return statearr_17504;
})();
if(inst_17410__$1){
var statearr_17505_21257 = state_17435__$1;
(statearr_17505_21257[(1)] = (15));

} else {
var statearr_17508_21258 = state_17435__$1;
(statearr_17508_21258[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (16))){
var inst_17410 = (state_17435[(11)]);
var state_17435__$1 = state_17435;
var statearr_17512_21263 = state_17435__$1;
(statearr_17512_21263[(2)] = inst_17410);

(statearr_17512_21263[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (10))){
var inst_17401 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17513_21264 = state_17435__$1;
(statearr_17513_21264[(2)] = inst_17401);

(statearr_17513_21264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (18))){
var inst_17413 = (state_17435[(2)]);
var state_17435__$1 = state_17435;
var statearr_17518_21265 = state_17435__$1;
(statearr_17518_21265[(2)] = inst_17413);

(statearr_17518_21265[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17436 === (8))){
var inst_17398 = cljs.core.async.close_BANG_(to);
var state_17435__$1 = state_17435;
var statearr_17520_21266 = state_17435__$1;
(statearr_17520_21266[(2)] = inst_17398);

(statearr_17520_21266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0 = (function (){
var statearr_17526 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__);

(statearr_17526[(1)] = (1));

return statearr_17526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1 = (function (state_17435){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_17435);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e17532){var ex__13965__auto__ = e17532;
var statearr_17533_21267 = state_17435;
(statearr_17533_21267[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_17435[(4)]))){
var statearr_17535_21268 = state_17435;
(statearr_17535_21268[(1)] = cljs.core.first((state_17435[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21270 = state_17435;
state_17435 = G__21270;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__ = function(state_17435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1.call(this,state_17435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13962__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_17549 = f__16429__auto__();
(statearr_17549[(6)] = c__16428__auto__);

return statearr_17549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));

return c__16428__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17562 = arguments.length;
switch (G__17562) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17584 = arguments.length;
switch (G__17584) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17602 = arguments.length;
switch (G__17602) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16428__auto___21289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_17651){
var state_val_17652 = (state_17651[(1)]);
if((state_val_17652 === (7))){
var inst_17647 = (state_17651[(2)]);
var state_17651__$1 = state_17651;
var statearr_17664_21292 = state_17651__$1;
(statearr_17664_21292[(2)] = inst_17647);

(statearr_17664_21292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (1))){
var state_17651__$1 = state_17651;
var statearr_17665_21293 = state_17651__$1;
(statearr_17665_21293[(2)] = null);

(statearr_17665_21293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (4))){
var inst_17621 = (state_17651[(7)]);
var inst_17621__$1 = (state_17651[(2)]);
var inst_17625 = (inst_17621__$1 == null);
var state_17651__$1 = (function (){var statearr_17673 = state_17651;
(statearr_17673[(7)] = inst_17621__$1);

return statearr_17673;
})();
if(cljs.core.truth_(inst_17625)){
var statearr_17676_21294 = state_17651__$1;
(statearr_17676_21294[(1)] = (5));

} else {
var statearr_17677_21295 = state_17651__$1;
(statearr_17677_21295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (13))){
var state_17651__$1 = state_17651;
var statearr_17681_21296 = state_17651__$1;
(statearr_17681_21296[(2)] = null);

(statearr_17681_21296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (6))){
var inst_17621 = (state_17651[(7)]);
var inst_17631 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17621) : p.call(null,inst_17621));
var state_17651__$1 = state_17651;
if(cljs.core.truth_(inst_17631)){
var statearr_17687_21297 = state_17651__$1;
(statearr_17687_21297[(1)] = (9));

} else {
var statearr_17691_21298 = state_17651__$1;
(statearr_17691_21298[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (3))){
var inst_17649 = (state_17651[(2)]);
var state_17651__$1 = state_17651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17651__$1,inst_17649);
} else {
if((state_val_17652 === (12))){
var state_17651__$1 = state_17651;
var statearr_17697_21299 = state_17651__$1;
(statearr_17697_21299[(2)] = null);

(statearr_17697_21299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (2))){
var state_17651__$1 = state_17651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17651__$1,(4),ch);
} else {
if((state_val_17652 === (11))){
var inst_17621 = (state_17651[(7)]);
var inst_17635 = (state_17651[(2)]);
var state_17651__$1 = state_17651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17651__$1,(8),inst_17635,inst_17621);
} else {
if((state_val_17652 === (9))){
var state_17651__$1 = state_17651;
var statearr_17703_21301 = state_17651__$1;
(statearr_17703_21301[(2)] = tc);

(statearr_17703_21301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (5))){
var inst_17627 = cljs.core.async.close_BANG_(tc);
var inst_17628 = cljs.core.async.close_BANG_(fc);
var state_17651__$1 = (function (){var statearr_17704 = state_17651;
(statearr_17704[(8)] = inst_17627);

return statearr_17704;
})();
var statearr_17705_21302 = state_17651__$1;
(statearr_17705_21302[(2)] = inst_17628);

(statearr_17705_21302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (14))){
var inst_17645 = (state_17651[(2)]);
var state_17651__$1 = state_17651;
var statearr_17707_21303 = state_17651__$1;
(statearr_17707_21303[(2)] = inst_17645);

(statearr_17707_21303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (10))){
var state_17651__$1 = state_17651;
var statearr_17711_21310 = state_17651__$1;
(statearr_17711_21310[(2)] = fc);

(statearr_17711_21310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (8))){
var inst_17637 = (state_17651[(2)]);
var state_17651__$1 = state_17651;
if(cljs.core.truth_(inst_17637)){
var statearr_17712_21314 = state_17651__$1;
(statearr_17712_21314[(1)] = (12));

} else {
var statearr_17713_21315 = state_17651__$1;
(statearr_17713_21315[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13962__auto__ = null;
var cljs$core$async$state_machine__13962__auto____0 = (function (){
var statearr_17716 = [null,null,null,null,null,null,null,null,null];
(statearr_17716[(0)] = cljs$core$async$state_machine__13962__auto__);

(statearr_17716[(1)] = (1));

return statearr_17716;
});
var cljs$core$async$state_machine__13962__auto____1 = (function (state_17651){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_17651);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e17718){var ex__13965__auto__ = e17718;
var statearr_17719_21323 = state_17651;
(statearr_17719_21323[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_17651[(4)]))){
var statearr_17720_21324 = state_17651;
(statearr_17720_21324[(1)] = cljs.core.first((state_17651[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21325 = state_17651;
state_17651 = G__21325;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$state_machine__13962__auto__ = function(state_17651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13962__auto____1.call(this,state_17651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13962__auto____0;
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13962__auto____1;
return cljs$core$async$state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_17722 = f__16429__auto__();
(statearr_17722[(6)] = c__16428__auto___21289);

return statearr_17722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16428__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_17746){
var state_val_17747 = (state_17746[(1)]);
if((state_val_17747 === (7))){
var inst_17742 = (state_17746[(2)]);
var state_17746__$1 = state_17746;
var statearr_17749_21330 = state_17746__$1;
(statearr_17749_21330[(2)] = inst_17742);

(statearr_17749_21330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (1))){
var inst_17725 = init;
var inst_17726 = inst_17725;
var state_17746__$1 = (function (){var statearr_17751 = state_17746;
(statearr_17751[(7)] = inst_17726);

return statearr_17751;
})();
var statearr_17752_21333 = state_17746__$1;
(statearr_17752_21333[(2)] = null);

(statearr_17752_21333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (4))){
var inst_17729 = (state_17746[(8)]);
var inst_17729__$1 = (state_17746[(2)]);
var inst_17730 = (inst_17729__$1 == null);
var state_17746__$1 = (function (){var statearr_17753 = state_17746;
(statearr_17753[(8)] = inst_17729__$1);

return statearr_17753;
})();
if(cljs.core.truth_(inst_17730)){
var statearr_17754_21343 = state_17746__$1;
(statearr_17754_21343[(1)] = (5));

} else {
var statearr_17755_21344 = state_17746__$1;
(statearr_17755_21344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (6))){
var inst_17726 = (state_17746[(7)]);
var inst_17729 = (state_17746[(8)]);
var inst_17733 = (state_17746[(9)]);
var inst_17733__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17726,inst_17729) : f.call(null,inst_17726,inst_17729));
var inst_17734 = cljs.core.reduced_QMARK_(inst_17733__$1);
var state_17746__$1 = (function (){var statearr_17756 = state_17746;
(statearr_17756[(9)] = inst_17733__$1);

return statearr_17756;
})();
if(inst_17734){
var statearr_17757_21352 = state_17746__$1;
(statearr_17757_21352[(1)] = (8));

} else {
var statearr_17758_21354 = state_17746__$1;
(statearr_17758_21354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (3))){
var inst_17744 = (state_17746[(2)]);
var state_17746__$1 = state_17746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17746__$1,inst_17744);
} else {
if((state_val_17747 === (2))){
var state_17746__$1 = state_17746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17746__$1,(4),ch);
} else {
if((state_val_17747 === (9))){
var inst_17733 = (state_17746[(9)]);
var inst_17726 = inst_17733;
var state_17746__$1 = (function (){var statearr_17767 = state_17746;
(statearr_17767[(7)] = inst_17726);

return statearr_17767;
})();
var statearr_17768_21358 = state_17746__$1;
(statearr_17768_21358[(2)] = null);

(statearr_17768_21358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (5))){
var inst_17726 = (state_17746[(7)]);
var state_17746__$1 = state_17746;
var statearr_17769_21361 = state_17746__$1;
(statearr_17769_21361[(2)] = inst_17726);

(statearr_17769_21361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (10))){
var inst_17740 = (state_17746[(2)]);
var state_17746__$1 = state_17746;
var statearr_17770_21362 = state_17746__$1;
(statearr_17770_21362[(2)] = inst_17740);

(statearr_17770_21362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17747 === (8))){
var inst_17733 = (state_17746[(9)]);
var inst_17736 = cljs.core.deref(inst_17733);
var state_17746__$1 = state_17746;
var statearr_17771_21363 = state_17746__$1;
(statearr_17771_21363[(2)] = inst_17736);

(statearr_17771_21363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13962__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13962__auto____0 = (function (){
var statearr_17777 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17777[(0)] = cljs$core$async$reduce_$_state_machine__13962__auto__);

(statearr_17777[(1)] = (1));

return statearr_17777;
});
var cljs$core$async$reduce_$_state_machine__13962__auto____1 = (function (state_17746){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_17746);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e17781){var ex__13965__auto__ = e17781;
var statearr_17782_21369 = state_17746;
(statearr_17782_21369[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_17746[(4)]))){
var statearr_17783_21373 = state_17746;
(statearr_17783_21373[(1)] = cljs.core.first((state_17746[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21374 = state_17746;
state_17746 = G__21374;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13962__auto__ = function(state_17746){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13962__auto____1.call(this,state_17746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13962__auto____0;
cljs$core$async$reduce_$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13962__auto____1;
return cljs$core$async$reduce_$_state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_17784 = f__16429__auto__();
(statearr_17784[(6)] = c__16428__auto__);

return statearr_17784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));

return c__16428__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16428__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_17793){
var state_val_17794 = (state_17793[(1)]);
if((state_val_17794 === (1))){
var inst_17788 = cljs.core.async.reduce(f__$1,init,ch);
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17793__$1,(2),inst_17788);
} else {
if((state_val_17794 === (2))){
var inst_17790 = (state_17793[(2)]);
var inst_17791 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17790) : f__$1.call(null,inst_17790));
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17793__$1,inst_17791);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13962__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13962__auto____0 = (function (){
var statearr_17801 = [null,null,null,null,null,null,null];
(statearr_17801[(0)] = cljs$core$async$transduce_$_state_machine__13962__auto__);

(statearr_17801[(1)] = (1));

return statearr_17801;
});
var cljs$core$async$transduce_$_state_machine__13962__auto____1 = (function (state_17793){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_17793);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e17806){var ex__13965__auto__ = e17806;
var statearr_17807_21394 = state_17793;
(statearr_17807_21394[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_17793[(4)]))){
var statearr_17810_21395 = state_17793;
(statearr_17810_21395[(1)] = cljs.core.first((state_17793[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21399 = state_17793;
state_17793 = G__21399;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13962__auto__ = function(state_17793){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13962__auto____1.call(this,state_17793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13962__auto____0;
cljs$core$async$transduce_$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13962__auto____1;
return cljs$core$async$transduce_$_state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_17811 = f__16429__auto__();
(statearr_17811[(6)] = c__16428__auto__);

return statearr_17811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));

return c__16428__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17821 = arguments.length;
switch (G__17821) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16428__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_17853){
var state_val_17854 = (state_17853[(1)]);
if((state_val_17854 === (7))){
var inst_17833 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
var statearr_17856_21411 = state_17853__$1;
(statearr_17856_21411[(2)] = inst_17833);

(statearr_17856_21411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (1))){
var inst_17826 = cljs.core.seq(coll);
var inst_17827 = inst_17826;
var state_17853__$1 = (function (){var statearr_17857 = state_17853;
(statearr_17857[(7)] = inst_17827);

return statearr_17857;
})();
var statearr_17861_21413 = state_17853__$1;
(statearr_17861_21413[(2)] = null);

(statearr_17861_21413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (4))){
var inst_17827 = (state_17853[(7)]);
var inst_17831 = cljs.core.first(inst_17827);
var state_17853__$1 = state_17853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17853__$1,(7),ch,inst_17831);
} else {
if((state_val_17854 === (13))){
var inst_17846 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
var statearr_17865_21414 = state_17853__$1;
(statearr_17865_21414[(2)] = inst_17846);

(statearr_17865_21414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (6))){
var inst_17836 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
if(cljs.core.truth_(inst_17836)){
var statearr_17866_21415 = state_17853__$1;
(statearr_17866_21415[(1)] = (8));

} else {
var statearr_17867_21419 = state_17853__$1;
(statearr_17867_21419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (3))){
var inst_17850 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17853__$1,inst_17850);
} else {
if((state_val_17854 === (12))){
var state_17853__$1 = state_17853;
var statearr_17868_21420 = state_17853__$1;
(statearr_17868_21420[(2)] = null);

(statearr_17868_21420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (2))){
var inst_17827 = (state_17853[(7)]);
var state_17853__$1 = state_17853;
if(cljs.core.truth_(inst_17827)){
var statearr_17869_21421 = state_17853__$1;
(statearr_17869_21421[(1)] = (4));

} else {
var statearr_17870_21423 = state_17853__$1;
(statearr_17870_21423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (11))){
var inst_17842 = cljs.core.async.close_BANG_(ch);
var state_17853__$1 = state_17853;
var statearr_17871_21424 = state_17853__$1;
(statearr_17871_21424[(2)] = inst_17842);

(statearr_17871_21424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (9))){
var state_17853__$1 = state_17853;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17888_21425 = state_17853__$1;
(statearr_17888_21425[(1)] = (11));

} else {
var statearr_17889_21426 = state_17853__$1;
(statearr_17889_21426[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (5))){
var inst_17827 = (state_17853[(7)]);
var state_17853__$1 = state_17853;
var statearr_17896_21430 = state_17853__$1;
(statearr_17896_21430[(2)] = inst_17827);

(statearr_17896_21430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (10))){
var inst_17848 = (state_17853[(2)]);
var state_17853__$1 = state_17853;
var statearr_17897_21433 = state_17853__$1;
(statearr_17897_21433[(2)] = inst_17848);

(statearr_17897_21433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17854 === (8))){
var inst_17827 = (state_17853[(7)]);
var inst_17838 = cljs.core.next(inst_17827);
var inst_17827__$1 = inst_17838;
var state_17853__$1 = (function (){var statearr_17898 = state_17853;
(statearr_17898[(7)] = inst_17827__$1);

return statearr_17898;
})();
var statearr_17900_21434 = state_17853__$1;
(statearr_17900_21434[(2)] = null);

(statearr_17900_21434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13962__auto__ = null;
var cljs$core$async$state_machine__13962__auto____0 = (function (){
var statearr_17901 = [null,null,null,null,null,null,null,null];
(statearr_17901[(0)] = cljs$core$async$state_machine__13962__auto__);

(statearr_17901[(1)] = (1));

return statearr_17901;
});
var cljs$core$async$state_machine__13962__auto____1 = (function (state_17853){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_17853);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e17909){var ex__13965__auto__ = e17909;
var statearr_17910_21435 = state_17853;
(statearr_17910_21435[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_17853[(4)]))){
var statearr_17911_21436 = state_17853;
(statearr_17911_21436[(1)] = cljs.core.first((state_17853[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21437 = state_17853;
state_17853 = G__21437;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$state_machine__13962__auto__ = function(state_17853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13962__auto____1.call(this,state_17853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13962__auto____0;
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13962__auto____1;
return cljs$core$async$state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_17917 = f__16429__auto__();
(statearr_17917[(6)] = c__16428__auto__);

return statearr_17917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));

return c__16428__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17922 = arguments.length;
switch (G__17922) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_21445 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_21445(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_21447 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_21447(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_21448 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_21448(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_21449 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_21449(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17980 = (function (ch,cs,meta17981){
this.ch = ch;
this.cs = cs;
this.meta17981 = meta17981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17982,meta17981__$1){
var self__ = this;
var _17982__$1 = this;
return (new cljs.core.async.t_cljs$core$async17980(self__.ch,self__.cs,meta17981__$1));
}));

(cljs.core.async.t_cljs$core$async17980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17982){
var self__ = this;
var _17982__$1 = this;
return self__.meta17981;
}));

(cljs.core.async.t_cljs$core$async17980.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17980.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17980.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17980.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17980.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17981","meta17981",1838073343,null)], null);
}));

(cljs.core.async.t_cljs$core$async17980.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17980");

(cljs.core.async.t_cljs$core$async17980.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17980");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17980.
 */
cljs.core.async.__GT_t_cljs$core$async17980 = (function cljs$core$async$__GT_t_cljs$core$async17980(ch,cs,meta17981){
return (new cljs.core.async.t_cljs$core$async17980(ch,cs,meta17981));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async17980(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__16428__auto___21471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_18169){
var state_val_18171 = (state_18169[(1)]);
if((state_val_18171 === (7))){
var inst_18160 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18176_21472 = state_18169__$1;
(statearr_18176_21472[(2)] = inst_18160);

(statearr_18176_21472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (20))){
var inst_18053 = (state_18169[(7)]);
var inst_18065 = cljs.core.first(inst_18053);
var inst_18066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18065,(0),null);
var inst_18067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18065,(1),null);
var state_18169__$1 = (function (){var statearr_18180 = state_18169;
(statearr_18180[(8)] = inst_18066);

return statearr_18180;
})();
if(cljs.core.truth_(inst_18067)){
var statearr_18181_21473 = state_18169__$1;
(statearr_18181_21473[(1)] = (22));

} else {
var statearr_18182_21474 = state_18169__$1;
(statearr_18182_21474[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (27))){
var inst_18008 = (state_18169[(9)]);
var inst_18099 = (state_18169[(10)]);
var inst_18101 = (state_18169[(11)]);
var inst_18107 = (state_18169[(12)]);
var inst_18107__$1 = cljs.core._nth(inst_18099,inst_18101);
var inst_18109 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18107__$1,inst_18008,done);
var state_18169__$1 = (function (){var statearr_18183 = state_18169;
(statearr_18183[(12)] = inst_18107__$1);

return statearr_18183;
})();
if(cljs.core.truth_(inst_18109)){
var statearr_18184_21481 = state_18169__$1;
(statearr_18184_21481[(1)] = (30));

} else {
var statearr_18185_21482 = state_18169__$1;
(statearr_18185_21482[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (1))){
var state_18169__$1 = state_18169;
var statearr_18186_21483 = state_18169__$1;
(statearr_18186_21483[(2)] = null);

(statearr_18186_21483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (24))){
var inst_18053 = (state_18169[(7)]);
var inst_18072 = (state_18169[(2)]);
var inst_18073 = cljs.core.next(inst_18053);
var inst_18020 = inst_18073;
var inst_18021 = null;
var inst_18022 = (0);
var inst_18023 = (0);
var state_18169__$1 = (function (){var statearr_18187 = state_18169;
(statearr_18187[(13)] = inst_18072);

(statearr_18187[(14)] = inst_18022);

(statearr_18187[(15)] = inst_18023);

(statearr_18187[(16)] = inst_18020);

(statearr_18187[(17)] = inst_18021);

return statearr_18187;
})();
var statearr_18188_21484 = state_18169__$1;
(statearr_18188_21484[(2)] = null);

(statearr_18188_21484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (39))){
var state_18169__$1 = state_18169;
var statearr_18193_21487 = state_18169__$1;
(statearr_18193_21487[(2)] = null);

(statearr_18193_21487[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (4))){
var inst_18008 = (state_18169[(9)]);
var inst_18008__$1 = (state_18169[(2)]);
var inst_18011 = (inst_18008__$1 == null);
var state_18169__$1 = (function (){var statearr_18197 = state_18169;
(statearr_18197[(9)] = inst_18008__$1);

return statearr_18197;
})();
if(cljs.core.truth_(inst_18011)){
var statearr_18198_21489 = state_18169__$1;
(statearr_18198_21489[(1)] = (5));

} else {
var statearr_18199_21490 = state_18169__$1;
(statearr_18199_21490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (15))){
var inst_18022 = (state_18169[(14)]);
var inst_18023 = (state_18169[(15)]);
var inst_18020 = (state_18169[(16)]);
var inst_18021 = (state_18169[(17)]);
var inst_18044 = (state_18169[(2)]);
var inst_18048 = (inst_18023 + (1));
var tmp18189 = inst_18022;
var tmp18190 = inst_18020;
var tmp18191 = inst_18021;
var inst_18020__$1 = tmp18190;
var inst_18021__$1 = tmp18191;
var inst_18022__$1 = tmp18189;
var inst_18023__$1 = inst_18048;
var state_18169__$1 = (function (){var statearr_18200 = state_18169;
(statearr_18200[(14)] = inst_18022__$1);

(statearr_18200[(18)] = inst_18044);

(statearr_18200[(15)] = inst_18023__$1);

(statearr_18200[(16)] = inst_18020__$1);

(statearr_18200[(17)] = inst_18021__$1);

return statearr_18200;
})();
var statearr_18202_21494 = state_18169__$1;
(statearr_18202_21494[(2)] = null);

(statearr_18202_21494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (21))){
var inst_18076 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18224_21495 = state_18169__$1;
(statearr_18224_21495[(2)] = inst_18076);

(statearr_18224_21495[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (31))){
var inst_18107 = (state_18169[(12)]);
var inst_18112 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18107);
var state_18169__$1 = state_18169;
var statearr_18225_21496 = state_18169__$1;
(statearr_18225_21496[(2)] = inst_18112);

(statearr_18225_21496[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (32))){
var inst_18099 = (state_18169[(10)]);
var inst_18101 = (state_18169[(11)]);
var inst_18098 = (state_18169[(19)]);
var inst_18100 = (state_18169[(20)]);
var inst_18114 = (state_18169[(2)]);
var inst_18116 = (inst_18101 + (1));
var tmp18208 = inst_18099;
var tmp18209 = inst_18098;
var tmp18210 = inst_18100;
var inst_18098__$1 = tmp18209;
var inst_18099__$1 = tmp18208;
var inst_18100__$1 = tmp18210;
var inst_18101__$1 = inst_18116;
var state_18169__$1 = (function (){var statearr_18226 = state_18169;
(statearr_18226[(21)] = inst_18114);

(statearr_18226[(10)] = inst_18099__$1);

(statearr_18226[(11)] = inst_18101__$1);

(statearr_18226[(19)] = inst_18098__$1);

(statearr_18226[(20)] = inst_18100__$1);

return statearr_18226;
})();
var statearr_18227_21501 = state_18169__$1;
(statearr_18227_21501[(2)] = null);

(statearr_18227_21501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (40))){
var inst_18133 = (state_18169[(22)]);
var inst_18137 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18133);
var state_18169__$1 = state_18169;
var statearr_18228_21502 = state_18169__$1;
(statearr_18228_21502[(2)] = inst_18137);

(statearr_18228_21502[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (33))){
var inst_18119 = (state_18169[(23)]);
var inst_18123 = cljs.core.chunked_seq_QMARK_(inst_18119);
var state_18169__$1 = state_18169;
if(inst_18123){
var statearr_18229_21503 = state_18169__$1;
(statearr_18229_21503[(1)] = (36));

} else {
var statearr_18230_21504 = state_18169__$1;
(statearr_18230_21504[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (13))){
var inst_18038 = (state_18169[(24)]);
var inst_18041 = cljs.core.async.close_BANG_(inst_18038);
var state_18169__$1 = state_18169;
var statearr_18231_21505 = state_18169__$1;
(statearr_18231_21505[(2)] = inst_18041);

(statearr_18231_21505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (22))){
var inst_18066 = (state_18169[(8)]);
var inst_18069 = cljs.core.async.close_BANG_(inst_18066);
var state_18169__$1 = state_18169;
var statearr_18232_21506 = state_18169__$1;
(statearr_18232_21506[(2)] = inst_18069);

(statearr_18232_21506[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (36))){
var inst_18119 = (state_18169[(23)]);
var inst_18125 = cljs.core.chunk_first(inst_18119);
var inst_18126 = cljs.core.chunk_rest(inst_18119);
var inst_18127 = cljs.core.count(inst_18125);
var inst_18098 = inst_18126;
var inst_18099 = inst_18125;
var inst_18100 = inst_18127;
var inst_18101 = (0);
var state_18169__$1 = (function (){var statearr_18234 = state_18169;
(statearr_18234[(10)] = inst_18099);

(statearr_18234[(11)] = inst_18101);

(statearr_18234[(19)] = inst_18098);

(statearr_18234[(20)] = inst_18100);

return statearr_18234;
})();
var statearr_18237_21507 = state_18169__$1;
(statearr_18237_21507[(2)] = null);

(statearr_18237_21507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (41))){
var inst_18119 = (state_18169[(23)]);
var inst_18139 = (state_18169[(2)]);
var inst_18140 = cljs.core.next(inst_18119);
var inst_18098 = inst_18140;
var inst_18099 = null;
var inst_18100 = (0);
var inst_18101 = (0);
var state_18169__$1 = (function (){var statearr_18238 = state_18169;
(statearr_18238[(25)] = inst_18139);

(statearr_18238[(10)] = inst_18099);

(statearr_18238[(11)] = inst_18101);

(statearr_18238[(19)] = inst_18098);

(statearr_18238[(20)] = inst_18100);

return statearr_18238;
})();
var statearr_18239_21508 = state_18169__$1;
(statearr_18239_21508[(2)] = null);

(statearr_18239_21508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (43))){
var state_18169__$1 = state_18169;
var statearr_18240_21512 = state_18169__$1;
(statearr_18240_21512[(2)] = null);

(statearr_18240_21512[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (29))){
var inst_18148 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18245_21513 = state_18169__$1;
(statearr_18245_21513[(2)] = inst_18148);

(statearr_18245_21513[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (44))){
var inst_18157 = (state_18169[(2)]);
var state_18169__$1 = (function (){var statearr_18247 = state_18169;
(statearr_18247[(26)] = inst_18157);

return statearr_18247;
})();
var statearr_18249_21514 = state_18169__$1;
(statearr_18249_21514[(2)] = null);

(statearr_18249_21514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (6))){
var inst_18086 = (state_18169[(27)]);
var inst_18085 = cljs.core.deref(cs);
var inst_18086__$1 = cljs.core.keys(inst_18085);
var inst_18089 = cljs.core.count(inst_18086__$1);
var inst_18090 = cljs.core.reset_BANG_(dctr,inst_18089);
var inst_18097 = cljs.core.seq(inst_18086__$1);
var inst_18098 = inst_18097;
var inst_18099 = null;
var inst_18100 = (0);
var inst_18101 = (0);
var state_18169__$1 = (function (){var statearr_18259 = state_18169;
(statearr_18259[(10)] = inst_18099);

(statearr_18259[(28)] = inst_18090);

(statearr_18259[(11)] = inst_18101);

(statearr_18259[(19)] = inst_18098);

(statearr_18259[(27)] = inst_18086__$1);

(statearr_18259[(20)] = inst_18100);

return statearr_18259;
})();
var statearr_18263_21516 = state_18169__$1;
(statearr_18263_21516[(2)] = null);

(statearr_18263_21516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (28))){
var inst_18119 = (state_18169[(23)]);
var inst_18098 = (state_18169[(19)]);
var inst_18119__$1 = cljs.core.seq(inst_18098);
var state_18169__$1 = (function (){var statearr_18267 = state_18169;
(statearr_18267[(23)] = inst_18119__$1);

return statearr_18267;
})();
if(inst_18119__$1){
var statearr_18271_21517 = state_18169__$1;
(statearr_18271_21517[(1)] = (33));

} else {
var statearr_18272_21518 = state_18169__$1;
(statearr_18272_21518[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (25))){
var inst_18101 = (state_18169[(11)]);
var inst_18100 = (state_18169[(20)]);
var inst_18104 = (inst_18101 < inst_18100);
var inst_18105 = inst_18104;
var state_18169__$1 = state_18169;
if(cljs.core.truth_(inst_18105)){
var statearr_18277_21519 = state_18169__$1;
(statearr_18277_21519[(1)] = (27));

} else {
var statearr_18278_21520 = state_18169__$1;
(statearr_18278_21520[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (34))){
var state_18169__$1 = state_18169;
var statearr_18279_21521 = state_18169__$1;
(statearr_18279_21521[(2)] = null);

(statearr_18279_21521[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (17))){
var state_18169__$1 = state_18169;
var statearr_18280_21522 = state_18169__$1;
(statearr_18280_21522[(2)] = null);

(statearr_18280_21522[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (3))){
var inst_18162 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18169__$1,inst_18162);
} else {
if((state_val_18171 === (12))){
var inst_18081 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18281_21523 = state_18169__$1;
(statearr_18281_21523[(2)] = inst_18081);

(statearr_18281_21523[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (2))){
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18169__$1,(4),ch);
} else {
if((state_val_18171 === (23))){
var state_18169__$1 = state_18169;
var statearr_18282_21524 = state_18169__$1;
(statearr_18282_21524[(2)] = null);

(statearr_18282_21524[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (35))){
var inst_18146 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18287_21525 = state_18169__$1;
(statearr_18287_21525[(2)] = inst_18146);

(statearr_18287_21525[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (19))){
var inst_18053 = (state_18169[(7)]);
var inst_18057 = cljs.core.chunk_first(inst_18053);
var inst_18058 = cljs.core.chunk_rest(inst_18053);
var inst_18059 = cljs.core.count(inst_18057);
var inst_18020 = inst_18058;
var inst_18021 = inst_18057;
var inst_18022 = inst_18059;
var inst_18023 = (0);
var state_18169__$1 = (function (){var statearr_18289 = state_18169;
(statearr_18289[(14)] = inst_18022);

(statearr_18289[(15)] = inst_18023);

(statearr_18289[(16)] = inst_18020);

(statearr_18289[(17)] = inst_18021);

return statearr_18289;
})();
var statearr_18290_21533 = state_18169__$1;
(statearr_18290_21533[(2)] = null);

(statearr_18290_21533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (11))){
var inst_18053 = (state_18169[(7)]);
var inst_18020 = (state_18169[(16)]);
var inst_18053__$1 = cljs.core.seq(inst_18020);
var state_18169__$1 = (function (){var statearr_18291 = state_18169;
(statearr_18291[(7)] = inst_18053__$1);

return statearr_18291;
})();
if(inst_18053__$1){
var statearr_18292_21538 = state_18169__$1;
(statearr_18292_21538[(1)] = (16));

} else {
var statearr_18293_21539 = state_18169__$1;
(statearr_18293_21539[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (9))){
var inst_18083 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18294_21540 = state_18169__$1;
(statearr_18294_21540[(2)] = inst_18083);

(statearr_18294_21540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (5))){
var inst_18017 = cljs.core.deref(cs);
var inst_18018 = cljs.core.seq(inst_18017);
var inst_18020 = inst_18018;
var inst_18021 = null;
var inst_18022 = (0);
var inst_18023 = (0);
var state_18169__$1 = (function (){var statearr_18295 = state_18169;
(statearr_18295[(14)] = inst_18022);

(statearr_18295[(15)] = inst_18023);

(statearr_18295[(16)] = inst_18020);

(statearr_18295[(17)] = inst_18021);

return statearr_18295;
})();
var statearr_18296_21543 = state_18169__$1;
(statearr_18296_21543[(2)] = null);

(statearr_18296_21543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (14))){
var state_18169__$1 = state_18169;
var statearr_18297_21544 = state_18169__$1;
(statearr_18297_21544[(2)] = null);

(statearr_18297_21544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (45))){
var inst_18154 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18298_21546 = state_18169__$1;
(statearr_18298_21546[(2)] = inst_18154);

(statearr_18298_21546[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (26))){
var inst_18086 = (state_18169[(27)]);
var inst_18150 = (state_18169[(2)]);
var inst_18151 = cljs.core.seq(inst_18086);
var state_18169__$1 = (function (){var statearr_18306 = state_18169;
(statearr_18306[(29)] = inst_18150);

return statearr_18306;
})();
if(inst_18151){
var statearr_18307_21557 = state_18169__$1;
(statearr_18307_21557[(1)] = (42));

} else {
var statearr_18308_21558 = state_18169__$1;
(statearr_18308_21558[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (16))){
var inst_18053 = (state_18169[(7)]);
var inst_18055 = cljs.core.chunked_seq_QMARK_(inst_18053);
var state_18169__$1 = state_18169;
if(inst_18055){
var statearr_18309_21562 = state_18169__$1;
(statearr_18309_21562[(1)] = (19));

} else {
var statearr_18310_21570 = state_18169__$1;
(statearr_18310_21570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (38))){
var inst_18143 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18311_21577 = state_18169__$1;
(statearr_18311_21577[(2)] = inst_18143);

(statearr_18311_21577[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (30))){
var state_18169__$1 = state_18169;
var statearr_18314_21579 = state_18169__$1;
(statearr_18314_21579[(2)] = null);

(statearr_18314_21579[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (10))){
var inst_18023 = (state_18169[(15)]);
var inst_18021 = (state_18169[(17)]);
var inst_18037 = cljs.core._nth(inst_18021,inst_18023);
var inst_18038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18037,(0),null);
var inst_18039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18037,(1),null);
var state_18169__$1 = (function (){var statearr_18323 = state_18169;
(statearr_18323[(24)] = inst_18038);

return statearr_18323;
})();
if(cljs.core.truth_(inst_18039)){
var statearr_18329_21589 = state_18169__$1;
(statearr_18329_21589[(1)] = (13));

} else {
var statearr_18330_21590 = state_18169__$1;
(statearr_18330_21590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (18))){
var inst_18079 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18331_21596 = state_18169__$1;
(statearr_18331_21596[(2)] = inst_18079);

(statearr_18331_21596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (42))){
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18169__$1,(45),dchan);
} else {
if((state_val_18171 === (37))){
var inst_18008 = (state_18169[(9)]);
var inst_18119 = (state_18169[(23)]);
var inst_18133 = (state_18169[(22)]);
var inst_18133__$1 = cljs.core.first(inst_18119);
var inst_18134 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18133__$1,inst_18008,done);
var state_18169__$1 = (function (){var statearr_18343 = state_18169;
(statearr_18343[(22)] = inst_18133__$1);

return statearr_18343;
})();
if(cljs.core.truth_(inst_18134)){
var statearr_18344_21610 = state_18169__$1;
(statearr_18344_21610[(1)] = (39));

} else {
var statearr_18345_21616 = state_18169__$1;
(statearr_18345_21616[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18171 === (8))){
var inst_18022 = (state_18169[(14)]);
var inst_18023 = (state_18169[(15)]);
var inst_18027 = (inst_18023 < inst_18022);
var inst_18028 = inst_18027;
var state_18169__$1 = state_18169;
if(cljs.core.truth_(inst_18028)){
var statearr_18346_21626 = state_18169__$1;
(statearr_18346_21626[(1)] = (10));

} else {
var statearr_18347_21627 = state_18169__$1;
(statearr_18347_21627[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13962__auto__ = null;
var cljs$core$async$mult_$_state_machine__13962__auto____0 = (function (){
var statearr_18355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18355[(0)] = cljs$core$async$mult_$_state_machine__13962__auto__);

(statearr_18355[(1)] = (1));

return statearr_18355;
});
var cljs$core$async$mult_$_state_machine__13962__auto____1 = (function (state_18169){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_18169);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e18356){var ex__13965__auto__ = e18356;
var statearr_18357_21647 = state_18169;
(statearr_18357_21647[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_18169[(4)]))){
var statearr_18358_21648 = state_18169;
(statearr_18358_21648[(1)] = cljs.core.first((state_18169[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21649 = state_18169;
state_18169 = G__21649;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13962__auto__ = function(state_18169){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13962__auto____1.call(this,state_18169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13962__auto____0;
cljs$core$async$mult_$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13962__auto____1;
return cljs$core$async$mult_$_state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_18366 = f__16429__auto__();
(statearr_18366[(6)] = c__16428__auto___21471);

return statearr_18366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18380 = arguments.length;
switch (G__18380) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_21662 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_21662(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_21663 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_21663(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_21665 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_21665(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_21667 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_21667(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_21671 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_21671(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21676 = arguments.length;
var i__5727__auto___21677 = (0);
while(true){
if((i__5727__auto___21677 < len__5726__auto___21676)){
args__5732__auto__.push((arguments[i__5727__auto___21677]));

var G__21678 = (i__5727__auto___21677 + (1));
i__5727__auto___21677 = G__21678;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18491){
var map__18492 = p__18491;
var map__18492__$1 = cljs.core.__destructure_map(map__18492);
var opts = map__18492__$1;
var statearr_18494_21682 = state;
(statearr_18494_21682[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18497_21686 = state;
(statearr_18497_21686[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18498_21687 = state;
(statearr_18498_21687[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18484){
var G__18485 = cljs.core.first(seq18484);
var seq18484__$1 = cljs.core.next(seq18484);
var G__18486 = cljs.core.first(seq18484__$1);
var seq18484__$2 = cljs.core.next(seq18484__$1);
var G__18487 = cljs.core.first(seq18484__$2);
var seq18484__$3 = cljs.core.next(seq18484__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18485,G__18486,G__18487,seq18484__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18524 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18525){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18525 = meta18525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18526,meta18525__$1){
var self__ = this;
var _18526__$1 = this;
return (new cljs.core.async.t_cljs$core$async18524(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18525__$1));
}));

(cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18526){
var self__ = this;
var _18526__$1 = this;
return self__.meta18525;
}));

(cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18524.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18525","meta18525",-977280574,null)], null);
}));

(cljs.core.async.t_cljs$core$async18524.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18524");

(cljs.core.async.t_cljs$core$async18524.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18524");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18524.
 */
cljs.core.async.__GT_t_cljs$core$async18524 = (function cljs$core$async$__GT_t_cljs$core$async18524(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18525){
return (new cljs.core.async.t_cljs$core$async18524(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18525));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async18524(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__16428__auto___21714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_18652){
var state_val_18653 = (state_18652[(1)]);
if((state_val_18653 === (7))){
var inst_18607 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
if(cljs.core.truth_(inst_18607)){
var statearr_18655_21719 = state_18652__$1;
(statearr_18655_21719[(1)] = (8));

} else {
var statearr_18656_21720 = state_18652__$1;
(statearr_18656_21720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (20))){
var inst_18596 = (state_18652[(7)]);
var state_18652__$1 = state_18652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18652__$1,(23),out,inst_18596);
} else {
if((state_val_18653 === (1))){
var inst_18575 = calc_state();
var inst_18576 = cljs.core.__destructure_map(inst_18575);
var inst_18577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18576,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18576,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18576,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18580 = inst_18575;
var state_18652__$1 = (function (){var statearr_18662 = state_18652;
(statearr_18662[(8)] = inst_18580);

(statearr_18662[(9)] = inst_18577);

(statearr_18662[(10)] = inst_18579);

(statearr_18662[(11)] = inst_18578);

return statearr_18662;
})();
var statearr_18664_21731 = state_18652__$1;
(statearr_18664_21731[(2)] = null);

(statearr_18664_21731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (24))){
var inst_18583 = (state_18652[(12)]);
var inst_18580 = inst_18583;
var state_18652__$1 = (function (){var statearr_18666 = state_18652;
(statearr_18666[(8)] = inst_18580);

return statearr_18666;
})();
var statearr_18671_21752 = state_18652__$1;
(statearr_18671_21752[(2)] = null);

(statearr_18671_21752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (4))){
var inst_18602 = (state_18652[(13)]);
var inst_18596 = (state_18652[(7)]);
var inst_18595 = (state_18652[(2)]);
var inst_18596__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18595,(0),null);
var inst_18597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18595,(1),null);
var inst_18602__$1 = (inst_18596__$1 == null);
var state_18652__$1 = (function (){var statearr_18677 = state_18652;
(statearr_18677[(13)] = inst_18602__$1);

(statearr_18677[(7)] = inst_18596__$1);

(statearr_18677[(14)] = inst_18597);

return statearr_18677;
})();
if(cljs.core.truth_(inst_18602__$1)){
var statearr_18684_21753 = state_18652__$1;
(statearr_18684_21753[(1)] = (5));

} else {
var statearr_18686_21754 = state_18652__$1;
(statearr_18686_21754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (15))){
var inst_18584 = (state_18652[(15)]);
var inst_18625 = (state_18652[(16)]);
var inst_18625__$1 = cljs.core.empty_QMARK_(inst_18584);
var state_18652__$1 = (function (){var statearr_18687 = state_18652;
(statearr_18687[(16)] = inst_18625__$1);

return statearr_18687;
})();
if(inst_18625__$1){
var statearr_18693_21755 = state_18652__$1;
(statearr_18693_21755[(1)] = (17));

} else {
var statearr_18694_21756 = state_18652__$1;
(statearr_18694_21756[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (21))){
var inst_18583 = (state_18652[(12)]);
var inst_18580 = inst_18583;
var state_18652__$1 = (function (){var statearr_18695 = state_18652;
(statearr_18695[(8)] = inst_18580);

return statearr_18695;
})();
var statearr_18698_21760 = state_18652__$1;
(statearr_18698_21760[(2)] = null);

(statearr_18698_21760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (13))){
var inst_18618 = (state_18652[(2)]);
var inst_18619 = calc_state();
var inst_18580 = inst_18619;
var state_18652__$1 = (function (){var statearr_18703 = state_18652;
(statearr_18703[(8)] = inst_18580);

(statearr_18703[(17)] = inst_18618);

return statearr_18703;
})();
var statearr_18704_21765 = state_18652__$1;
(statearr_18704_21765[(2)] = null);

(statearr_18704_21765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (22))){
var inst_18645 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
var statearr_18706_21766 = state_18652__$1;
(statearr_18706_21766[(2)] = inst_18645);

(statearr_18706_21766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (6))){
var inst_18597 = (state_18652[(14)]);
var inst_18605 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18597,change);
var state_18652__$1 = state_18652;
var statearr_18710_21768 = state_18652__$1;
(statearr_18710_21768[(2)] = inst_18605);

(statearr_18710_21768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (25))){
var state_18652__$1 = state_18652;
var statearr_18712_21769 = state_18652__$1;
(statearr_18712_21769[(2)] = null);

(statearr_18712_21769[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (17))){
var inst_18597 = (state_18652[(14)]);
var inst_18585 = (state_18652[(18)]);
var inst_18627 = (inst_18585.cljs$core$IFn$_invoke$arity$1 ? inst_18585.cljs$core$IFn$_invoke$arity$1(inst_18597) : inst_18585.call(null,inst_18597));
var inst_18628 = cljs.core.not(inst_18627);
var state_18652__$1 = state_18652;
var statearr_18715_21775 = state_18652__$1;
(statearr_18715_21775[(2)] = inst_18628);

(statearr_18715_21775[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (3))){
var inst_18649 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18652__$1,inst_18649);
} else {
if((state_val_18653 === (12))){
var state_18652__$1 = state_18652;
var statearr_18719_21777 = state_18652__$1;
(statearr_18719_21777[(2)] = null);

(statearr_18719_21777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (2))){
var inst_18580 = (state_18652[(8)]);
var inst_18583 = (state_18652[(12)]);
var inst_18583__$1 = cljs.core.__destructure_map(inst_18580);
var inst_18584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18583__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18583__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18583__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18652__$1 = (function (){var statearr_18727 = state_18652;
(statearr_18727[(15)] = inst_18584);

(statearr_18727[(12)] = inst_18583__$1);

(statearr_18727[(18)] = inst_18585);

return statearr_18727;
})();
return cljs.core.async.ioc_alts_BANG_(state_18652__$1,(4),inst_18586);
} else {
if((state_val_18653 === (23))){
var inst_18636 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
if(cljs.core.truth_(inst_18636)){
var statearr_18731_21781 = state_18652__$1;
(statearr_18731_21781[(1)] = (24));

} else {
var statearr_18736_21782 = state_18652__$1;
(statearr_18736_21782[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (19))){
var inst_18631 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
var statearr_18744_21787 = state_18652__$1;
(statearr_18744_21787[(2)] = inst_18631);

(statearr_18744_21787[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (11))){
var inst_18597 = (state_18652[(14)]);
var inst_18615 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18597);
var state_18652__$1 = state_18652;
var statearr_18745_21789 = state_18652__$1;
(statearr_18745_21789[(2)] = inst_18615);

(statearr_18745_21789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (9))){
var inst_18584 = (state_18652[(15)]);
var inst_18622 = (state_18652[(19)]);
var inst_18597 = (state_18652[(14)]);
var inst_18622__$1 = (inst_18584.cljs$core$IFn$_invoke$arity$1 ? inst_18584.cljs$core$IFn$_invoke$arity$1(inst_18597) : inst_18584.call(null,inst_18597));
var state_18652__$1 = (function (){var statearr_18747 = state_18652;
(statearr_18747[(19)] = inst_18622__$1);

return statearr_18747;
})();
if(cljs.core.truth_(inst_18622__$1)){
var statearr_18749_21791 = state_18652__$1;
(statearr_18749_21791[(1)] = (14));

} else {
var statearr_18751_21792 = state_18652__$1;
(statearr_18751_21792[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (5))){
var inst_18602 = (state_18652[(13)]);
var state_18652__$1 = state_18652;
var statearr_18753_21793 = state_18652__$1;
(statearr_18753_21793[(2)] = inst_18602);

(statearr_18753_21793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (14))){
var inst_18622 = (state_18652[(19)]);
var state_18652__$1 = state_18652;
var statearr_18754_21794 = state_18652__$1;
(statearr_18754_21794[(2)] = inst_18622);

(statearr_18754_21794[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (26))){
var inst_18641 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
var statearr_18758_21795 = state_18652__$1;
(statearr_18758_21795[(2)] = inst_18641);

(statearr_18758_21795[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (16))){
var inst_18633 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
if(cljs.core.truth_(inst_18633)){
var statearr_18768_21796 = state_18652__$1;
(statearr_18768_21796[(1)] = (20));

} else {
var statearr_18770_21797 = state_18652__$1;
(statearr_18770_21797[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (10))){
var inst_18647 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
var statearr_18775_21798 = state_18652__$1;
(statearr_18775_21798[(2)] = inst_18647);

(statearr_18775_21798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (18))){
var inst_18625 = (state_18652[(16)]);
var state_18652__$1 = state_18652;
var statearr_18777_21807 = state_18652__$1;
(statearr_18777_21807[(2)] = inst_18625);

(statearr_18777_21807[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (8))){
var inst_18596 = (state_18652[(7)]);
var inst_18613 = (inst_18596 == null);
var state_18652__$1 = state_18652;
if(cljs.core.truth_(inst_18613)){
var statearr_18778_21809 = state_18652__$1;
(statearr_18778_21809[(1)] = (11));

} else {
var statearr_18780_21810 = state_18652__$1;
(statearr_18780_21810[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13962__auto__ = null;
var cljs$core$async$mix_$_state_machine__13962__auto____0 = (function (){
var statearr_18797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18797[(0)] = cljs$core$async$mix_$_state_machine__13962__auto__);

(statearr_18797[(1)] = (1));

return statearr_18797;
});
var cljs$core$async$mix_$_state_machine__13962__auto____1 = (function (state_18652){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_18652);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e18798){var ex__13965__auto__ = e18798;
var statearr_18799_21814 = state_18652;
(statearr_18799_21814[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_18652[(4)]))){
var statearr_18806_21815 = state_18652;
(statearr_18806_21815[(1)] = cljs.core.first((state_18652[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21818 = state_18652;
state_18652 = G__21818;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13962__auto__ = function(state_18652){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13962__auto____1.call(this,state_18652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13962__auto____0;
cljs$core$async$mix_$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13962__auto____1;
return cljs$core$async$mix_$_state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_18818 = f__16429__auto__();
(statearr_18818[(6)] = c__16428__auto___21714);

return statearr_18818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_21822 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_21822(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_21824 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_21824(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_21828 = (function() {
var G__21829 = null;
var G__21829__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__21829__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__21829 = function(p,v){
switch(arguments.length){
case 1:
return G__21829__1.call(this,p);
case 2:
return G__21829__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21829.cljs$core$IFn$_invoke$arity$1 = G__21829__1;
G__21829.cljs$core$IFn$_invoke$arity$2 = G__21829__2;
return G__21829;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18847 = arguments.length;
switch (G__18847) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21828(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21828(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18902 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18903){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18903 = meta18903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18904,meta18903__$1){
var self__ = this;
var _18904__$1 = this;
return (new cljs.core.async.t_cljs$core$async18902(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18903__$1));
}));

(cljs.core.async.t_cljs$core$async18902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18904){
var self__ = this;
var _18904__$1 = this;
return self__.meta18903;
}));

(cljs.core.async.t_cljs$core$async18902.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18902.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18902.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18902.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18902.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18902.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18902.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18903","meta18903",1083989143,null)], null);
}));

(cljs.core.async.t_cljs$core$async18902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18902");

(cljs.core.async.t_cljs$core$async18902.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18902.
 */
cljs.core.async.__GT_t_cljs$core$async18902 = (function cljs$core$async$__GT_t_cljs$core$async18902(ch,topic_fn,buf_fn,mults,ensure_mult,meta18903){
return (new cljs.core.async.t_cljs$core$async18902(ch,topic_fn,buf_fn,mults,ensure_mult,meta18903));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18868 = arguments.length;
switch (G__18868) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18866_SHARP_){
if(cljs.core.truth_((p1__18866_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18866_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18866_SHARP_.call(null,topic)))){
return p1__18866_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18866_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18902(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__16428__auto___21857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_19086){
var state_val_19087 = (state_19086[(1)]);
if((state_val_19087 === (7))){
var inst_19081 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
var statearr_19089_21858 = state_19086__$1;
(statearr_19089_21858[(2)] = inst_19081);

(statearr_19089_21858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (20))){
var state_19086__$1 = state_19086;
var statearr_19091_21859 = state_19086__$1;
(statearr_19091_21859[(2)] = null);

(statearr_19091_21859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (1))){
var state_19086__$1 = state_19086;
var statearr_19097_21860 = state_19086__$1;
(statearr_19097_21860[(2)] = null);

(statearr_19097_21860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (24))){
var inst_19062 = (state_19086[(7)]);
var inst_19072 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19062);
var state_19086__$1 = state_19086;
var statearr_19101_21863 = state_19086__$1;
(statearr_19101_21863[(2)] = inst_19072);

(statearr_19101_21863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (4))){
var inst_18989 = (state_19086[(8)]);
var inst_18989__$1 = (state_19086[(2)]);
var inst_18990 = (inst_18989__$1 == null);
var state_19086__$1 = (function (){var statearr_19104 = state_19086;
(statearr_19104[(8)] = inst_18989__$1);

return statearr_19104;
})();
if(cljs.core.truth_(inst_18990)){
var statearr_19107_21868 = state_19086__$1;
(statearr_19107_21868[(1)] = (5));

} else {
var statearr_19111_21869 = state_19086__$1;
(statearr_19111_21869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (15))){
var inst_19053 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
var statearr_19115_21873 = state_19086__$1;
(statearr_19115_21873[(2)] = inst_19053);

(statearr_19115_21873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (21))){
var inst_19077 = (state_19086[(2)]);
var state_19086__$1 = (function (){var statearr_19116 = state_19086;
(statearr_19116[(9)] = inst_19077);

return statearr_19116;
})();
var statearr_19117_21874 = state_19086__$1;
(statearr_19117_21874[(2)] = null);

(statearr_19117_21874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (13))){
var inst_19022 = (state_19086[(10)]);
var inst_19025 = cljs.core.chunked_seq_QMARK_(inst_19022);
var state_19086__$1 = state_19086;
if(inst_19025){
var statearr_19124_21875 = state_19086__$1;
(statearr_19124_21875[(1)] = (16));

} else {
var statearr_19127_21876 = state_19086__$1;
(statearr_19127_21876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (22))){
var inst_19069 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
if(cljs.core.truth_(inst_19069)){
var statearr_19129_21877 = state_19086__$1;
(statearr_19129_21877[(1)] = (23));

} else {
var statearr_19130_21880 = state_19086__$1;
(statearr_19130_21880[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (6))){
var inst_18989 = (state_19086[(8)]);
var inst_19062 = (state_19086[(7)]);
var inst_19064 = (state_19086[(11)]);
var inst_19062__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18989) : topic_fn.call(null,inst_18989));
var inst_19063 = cljs.core.deref(mults);
var inst_19064__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19063,inst_19062__$1);
var state_19086__$1 = (function (){var statearr_19132 = state_19086;
(statearr_19132[(7)] = inst_19062__$1);

(statearr_19132[(11)] = inst_19064__$1);

return statearr_19132;
})();
if(cljs.core.truth_(inst_19064__$1)){
var statearr_19135_21885 = state_19086__$1;
(statearr_19135_21885[(1)] = (19));

} else {
var statearr_19137_21886 = state_19086__$1;
(statearr_19137_21886[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (25))){
var inst_19074 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
var statearr_19142_21887 = state_19086__$1;
(statearr_19142_21887[(2)] = inst_19074);

(statearr_19142_21887[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (17))){
var inst_19022 = (state_19086[(10)]);
var inst_19034 = cljs.core.first(inst_19022);
var inst_19044 = cljs.core.async.muxch_STAR_(inst_19034);
var inst_19045 = cljs.core.async.close_BANG_(inst_19044);
var inst_19046 = cljs.core.next(inst_19022);
var inst_19004 = inst_19046;
var inst_19005 = null;
var inst_19006 = (0);
var inst_19007 = (0);
var state_19086__$1 = (function (){var statearr_19144 = state_19086;
(statearr_19144[(12)] = inst_19005);

(statearr_19144[(13)] = inst_19045);

(statearr_19144[(14)] = inst_19004);

(statearr_19144[(15)] = inst_19007);

(statearr_19144[(16)] = inst_19006);

return statearr_19144;
})();
var statearr_19147_21889 = state_19086__$1;
(statearr_19147_21889[(2)] = null);

(statearr_19147_21889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (3))){
var inst_19083 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19086__$1,inst_19083);
} else {
if((state_val_19087 === (12))){
var inst_19055 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
var statearr_19150_21894 = state_19086__$1;
(statearr_19150_21894[(2)] = inst_19055);

(statearr_19150_21894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (2))){
var state_19086__$1 = state_19086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19086__$1,(4),ch);
} else {
if((state_val_19087 === (23))){
var state_19086__$1 = state_19086;
var statearr_19155_21895 = state_19086__$1;
(statearr_19155_21895[(2)] = null);

(statearr_19155_21895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (19))){
var inst_18989 = (state_19086[(8)]);
var inst_19064 = (state_19086[(11)]);
var inst_19067 = cljs.core.async.muxch_STAR_(inst_19064);
var state_19086__$1 = state_19086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19086__$1,(22),inst_19067,inst_18989);
} else {
if((state_val_19087 === (11))){
var inst_19004 = (state_19086[(14)]);
var inst_19022 = (state_19086[(10)]);
var inst_19022__$1 = cljs.core.seq(inst_19004);
var state_19086__$1 = (function (){var statearr_19164 = state_19086;
(statearr_19164[(10)] = inst_19022__$1);

return statearr_19164;
})();
if(inst_19022__$1){
var statearr_19165_21897 = state_19086__$1;
(statearr_19165_21897[(1)] = (13));

} else {
var statearr_19166_21898 = state_19086__$1;
(statearr_19166_21898[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (9))){
var inst_19057 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
var statearr_19168_21899 = state_19086__$1;
(statearr_19168_21899[(2)] = inst_19057);

(statearr_19168_21899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (5))){
var inst_19001 = cljs.core.deref(mults);
var inst_19002 = cljs.core.vals(inst_19001);
var inst_19003 = cljs.core.seq(inst_19002);
var inst_19004 = inst_19003;
var inst_19005 = null;
var inst_19006 = (0);
var inst_19007 = (0);
var state_19086__$1 = (function (){var statearr_19169 = state_19086;
(statearr_19169[(12)] = inst_19005);

(statearr_19169[(14)] = inst_19004);

(statearr_19169[(15)] = inst_19007);

(statearr_19169[(16)] = inst_19006);

return statearr_19169;
})();
var statearr_19179_21900 = state_19086__$1;
(statearr_19179_21900[(2)] = null);

(statearr_19179_21900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (14))){
var state_19086__$1 = state_19086;
var statearr_19185_21901 = state_19086__$1;
(statearr_19185_21901[(2)] = null);

(statearr_19185_21901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (16))){
var inst_19022 = (state_19086[(10)]);
var inst_19027 = cljs.core.chunk_first(inst_19022);
var inst_19029 = cljs.core.chunk_rest(inst_19022);
var inst_19030 = cljs.core.count(inst_19027);
var inst_19004 = inst_19029;
var inst_19005 = inst_19027;
var inst_19006 = inst_19030;
var inst_19007 = (0);
var state_19086__$1 = (function (){var statearr_19195 = state_19086;
(statearr_19195[(12)] = inst_19005);

(statearr_19195[(14)] = inst_19004);

(statearr_19195[(15)] = inst_19007);

(statearr_19195[(16)] = inst_19006);

return statearr_19195;
})();
var statearr_19199_21903 = state_19086__$1;
(statearr_19199_21903[(2)] = null);

(statearr_19199_21903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (10))){
var inst_19005 = (state_19086[(12)]);
var inst_19004 = (state_19086[(14)]);
var inst_19007 = (state_19086[(15)]);
var inst_19006 = (state_19086[(16)]);
var inst_19013 = cljs.core._nth(inst_19005,inst_19007);
var inst_19014 = cljs.core.async.muxch_STAR_(inst_19013);
var inst_19015 = cljs.core.async.close_BANG_(inst_19014);
var inst_19016 = (inst_19007 + (1));
var tmp19182 = inst_19005;
var tmp19183 = inst_19004;
var tmp19184 = inst_19006;
var inst_19004__$1 = tmp19183;
var inst_19005__$1 = tmp19182;
var inst_19006__$1 = tmp19184;
var inst_19007__$1 = inst_19016;
var state_19086__$1 = (function (){var statearr_19220 = state_19086;
(statearr_19220[(12)] = inst_19005__$1);

(statearr_19220[(17)] = inst_19015);

(statearr_19220[(14)] = inst_19004__$1);

(statearr_19220[(15)] = inst_19007__$1);

(statearr_19220[(16)] = inst_19006__$1);

return statearr_19220;
})();
var statearr_19222_21906 = state_19086__$1;
(statearr_19222_21906[(2)] = null);

(statearr_19222_21906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (18))){
var inst_19050 = (state_19086[(2)]);
var state_19086__$1 = state_19086;
var statearr_19228_21907 = state_19086__$1;
(statearr_19228_21907[(2)] = inst_19050);

(statearr_19228_21907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19087 === (8))){
var inst_19007 = (state_19086[(15)]);
var inst_19006 = (state_19086[(16)]);
var inst_19009 = (inst_19007 < inst_19006);
var inst_19010 = inst_19009;
var state_19086__$1 = state_19086;
if(cljs.core.truth_(inst_19010)){
var statearr_19237_21912 = state_19086__$1;
(statearr_19237_21912[(1)] = (10));

} else {
var statearr_19238_21913 = state_19086__$1;
(statearr_19238_21913[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13962__auto__ = null;
var cljs$core$async$state_machine__13962__auto____0 = (function (){
var statearr_19242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19242[(0)] = cljs$core$async$state_machine__13962__auto__);

(statearr_19242[(1)] = (1));

return statearr_19242;
});
var cljs$core$async$state_machine__13962__auto____1 = (function (state_19086){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_19086);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e19246){var ex__13965__auto__ = e19246;
var statearr_19247_21914 = state_19086;
(statearr_19247_21914[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_19086[(4)]))){
var statearr_19252_21919 = state_19086;
(statearr_19252_21919[(1)] = cljs.core.first((state_19086[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21921 = state_19086;
state_19086 = G__21921;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$state_machine__13962__auto__ = function(state_19086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13962__auto____1.call(this,state_19086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13962__auto____0;
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13962__auto____1;
return cljs$core$async$state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_19258 = f__16429__auto__();
(statearr_19258[(6)] = c__16428__auto___21857);

return statearr_19258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19266 = arguments.length;
switch (G__19266) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19286 = arguments.length;
switch (G__19286) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19308 = arguments.length;
switch (G__19308) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__16428__auto___21927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_19400){
var state_val_19401 = (state_19400[(1)]);
if((state_val_19401 === (7))){
var state_19400__$1 = state_19400;
var statearr_19406_21928 = state_19400__$1;
(statearr_19406_21928[(2)] = null);

(statearr_19406_21928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (1))){
var state_19400__$1 = state_19400;
var statearr_19410_21929 = state_19400__$1;
(statearr_19410_21929[(2)] = null);

(statearr_19410_21929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (4))){
var inst_19338 = (state_19400[(7)]);
var inst_19339 = (state_19400[(8)]);
var inst_19341 = (inst_19339 < inst_19338);
var state_19400__$1 = state_19400;
if(cljs.core.truth_(inst_19341)){
var statearr_19417_21934 = state_19400__$1;
(statearr_19417_21934[(1)] = (6));

} else {
var statearr_19418_21935 = state_19400__$1;
(statearr_19418_21935[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (15))){
var inst_19376 = (state_19400[(9)]);
var inst_19384 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19376);
var state_19400__$1 = state_19400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19400__$1,(17),out,inst_19384);
} else {
if((state_val_19401 === (13))){
var inst_19376 = (state_19400[(9)]);
var inst_19376__$1 = (state_19400[(2)]);
var inst_19377 = cljs.core.some(cljs.core.nil_QMARK_,inst_19376__$1);
var state_19400__$1 = (function (){var statearr_19422 = state_19400;
(statearr_19422[(9)] = inst_19376__$1);

return statearr_19422;
})();
if(cljs.core.truth_(inst_19377)){
var statearr_19427_21940 = state_19400__$1;
(statearr_19427_21940[(1)] = (14));

} else {
var statearr_19428_21941 = state_19400__$1;
(statearr_19428_21941[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (6))){
var state_19400__$1 = state_19400;
var statearr_19429_21942 = state_19400__$1;
(statearr_19429_21942[(2)] = null);

(statearr_19429_21942[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (17))){
var inst_19386 = (state_19400[(2)]);
var state_19400__$1 = (function (){var statearr_19438 = state_19400;
(statearr_19438[(10)] = inst_19386);

return statearr_19438;
})();
var statearr_19448_21943 = state_19400__$1;
(statearr_19448_21943[(2)] = null);

(statearr_19448_21943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (3))){
var inst_19391 = (state_19400[(2)]);
var state_19400__$1 = state_19400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19400__$1,inst_19391);
} else {
if((state_val_19401 === (12))){
var _ = (function (){var statearr_19453 = state_19400;
(statearr_19453[(4)] = cljs.core.rest((state_19400[(4)])));

return statearr_19453;
})();
var state_19400__$1 = state_19400;
var ex19436 = (state_19400__$1[(2)]);
var statearr_19457_21944 = state_19400__$1;
(statearr_19457_21944[(5)] = ex19436);


if((ex19436 instanceof Object)){
var statearr_19458_21945 = state_19400__$1;
(statearr_19458_21945[(1)] = (11));

(statearr_19458_21945[(5)] = null);

} else {
throw ex19436;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (2))){
var inst_19337 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19338 = cnt;
var inst_19339 = (0);
var state_19400__$1 = (function (){var statearr_19465 = state_19400;
(statearr_19465[(7)] = inst_19338);

(statearr_19465[(11)] = inst_19337);

(statearr_19465[(8)] = inst_19339);

return statearr_19465;
})();
var statearr_19466_21946 = state_19400__$1;
(statearr_19466_21946[(2)] = null);

(statearr_19466_21946[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (11))){
var inst_19352 = (state_19400[(2)]);
var inst_19353 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19400__$1 = (function (){var statearr_19478 = state_19400;
(statearr_19478[(12)] = inst_19352);

return statearr_19478;
})();
var statearr_19479_21947 = state_19400__$1;
(statearr_19479_21947[(2)] = inst_19353);

(statearr_19479_21947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (9))){
var inst_19339 = (state_19400[(8)]);
var _ = (function (){var statearr_19486 = state_19400;
(statearr_19486[(4)] = cljs.core.cons((12),(state_19400[(4)])));

return statearr_19486;
})();
var inst_19359 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19339) : chs__$1.call(null,inst_19339));
var inst_19360 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19339) : done.call(null,inst_19339));
var inst_19361 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19359,inst_19360);
var ___$1 = (function (){var statearr_19493 = state_19400;
(statearr_19493[(4)] = cljs.core.rest((state_19400[(4)])));

return statearr_19493;
})();
var state_19400__$1 = state_19400;
var statearr_19494_21949 = state_19400__$1;
(statearr_19494_21949[(2)] = inst_19361);

(statearr_19494_21949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (5))){
var inst_19371 = (state_19400[(2)]);
var state_19400__$1 = (function (){var statearr_19495 = state_19400;
(statearr_19495[(13)] = inst_19371);

return statearr_19495;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19400__$1,(13),dchan);
} else {
if((state_val_19401 === (14))){
var inst_19382 = cljs.core.async.close_BANG_(out);
var state_19400__$1 = state_19400;
var statearr_19496_21950 = state_19400__$1;
(statearr_19496_21950[(2)] = inst_19382);

(statearr_19496_21950[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (16))){
var inst_19389 = (state_19400[(2)]);
var state_19400__$1 = state_19400;
var statearr_19498_21951 = state_19400__$1;
(statearr_19498_21951[(2)] = inst_19389);

(statearr_19498_21951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (10))){
var inst_19339 = (state_19400[(8)]);
var inst_19364 = (state_19400[(2)]);
var inst_19365 = (inst_19339 + (1));
var inst_19339__$1 = inst_19365;
var state_19400__$1 = (function (){var statearr_19512 = state_19400;
(statearr_19512[(14)] = inst_19364);

(statearr_19512[(8)] = inst_19339__$1);

return statearr_19512;
})();
var statearr_19513_21956 = state_19400__$1;
(statearr_19513_21956[(2)] = null);

(statearr_19513_21956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19401 === (8))){
var inst_19369 = (state_19400[(2)]);
var state_19400__$1 = state_19400;
var statearr_19514_21958 = state_19400__$1;
(statearr_19514_21958[(2)] = inst_19369);

(statearr_19514_21958[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13962__auto__ = null;
var cljs$core$async$state_machine__13962__auto____0 = (function (){
var statearr_19524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19524[(0)] = cljs$core$async$state_machine__13962__auto__);

(statearr_19524[(1)] = (1));

return statearr_19524;
});
var cljs$core$async$state_machine__13962__auto____1 = (function (state_19400){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_19400);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e19525){var ex__13965__auto__ = e19525;
var statearr_19526_21959 = state_19400;
(statearr_19526_21959[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_19400[(4)]))){
var statearr_19528_21960 = state_19400;
(statearr_19528_21960[(1)] = cljs.core.first((state_19400[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21963 = state_19400;
state_19400 = G__21963;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$state_machine__13962__auto__ = function(state_19400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13962__auto____1.call(this,state_19400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13962__auto____0;
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13962__auto____1;
return cljs$core$async$state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_19529 = f__16429__auto__();
(statearr_19529[(6)] = c__16428__auto___21927);

return statearr_19529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19539 = arguments.length;
switch (G__19539) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16428__auto___21969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_19597){
var state_val_19598 = (state_19597[(1)]);
if((state_val_19598 === (7))){
var inst_19570 = (state_19597[(7)]);
var inst_19569 = (state_19597[(8)]);
var inst_19569__$1 = (state_19597[(2)]);
var inst_19570__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19569__$1,(0),null);
var inst_19572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19569__$1,(1),null);
var inst_19573 = (inst_19570__$1 == null);
var state_19597__$1 = (function (){var statearr_19612 = state_19597;
(statearr_19612[(7)] = inst_19570__$1);

(statearr_19612[(9)] = inst_19572);

(statearr_19612[(8)] = inst_19569__$1);

return statearr_19612;
})();
if(cljs.core.truth_(inst_19573)){
var statearr_19615_21971 = state_19597__$1;
(statearr_19615_21971[(1)] = (8));

} else {
var statearr_19616_21972 = state_19597__$1;
(statearr_19616_21972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19598 === (1))){
var inst_19557 = cljs.core.vec(chs);
var inst_19559 = inst_19557;
var state_19597__$1 = (function (){var statearr_19618 = state_19597;
(statearr_19618[(10)] = inst_19559);

return statearr_19618;
})();
var statearr_19619_21973 = state_19597__$1;
(statearr_19619_21973[(2)] = null);

(statearr_19619_21973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19598 === (4))){
var inst_19559 = (state_19597[(10)]);
var state_19597__$1 = state_19597;
return cljs.core.async.ioc_alts_BANG_(state_19597__$1,(7),inst_19559);
} else {
if((state_val_19598 === (6))){
var inst_19592 = (state_19597[(2)]);
var state_19597__$1 = state_19597;
var statearr_19622_21975 = state_19597__$1;
(statearr_19622_21975[(2)] = inst_19592);

(statearr_19622_21975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19598 === (3))){
var inst_19595 = (state_19597[(2)]);
var state_19597__$1 = state_19597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19597__$1,inst_19595);
} else {
if((state_val_19598 === (2))){
var inst_19559 = (state_19597[(10)]);
var inst_19561 = cljs.core.count(inst_19559);
var inst_19562 = (inst_19561 > (0));
var state_19597__$1 = state_19597;
if(cljs.core.truth_(inst_19562)){
var statearr_19626_21980 = state_19597__$1;
(statearr_19626_21980[(1)] = (4));

} else {
var statearr_19627_21981 = state_19597__$1;
(statearr_19627_21981[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19598 === (11))){
var inst_19559 = (state_19597[(10)]);
var inst_19582 = (state_19597[(2)]);
var tmp19624 = inst_19559;
var inst_19559__$1 = tmp19624;
var state_19597__$1 = (function (){var statearr_19632 = state_19597;
(statearr_19632[(10)] = inst_19559__$1);

(statearr_19632[(11)] = inst_19582);

return statearr_19632;
})();
var statearr_19633_21982 = state_19597__$1;
(statearr_19633_21982[(2)] = null);

(statearr_19633_21982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19598 === (9))){
var inst_19570 = (state_19597[(7)]);
var state_19597__$1 = state_19597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19597__$1,(11),out,inst_19570);
} else {
if((state_val_19598 === (5))){
var inst_19590 = cljs.core.async.close_BANG_(out);
var state_19597__$1 = state_19597;
var statearr_19641_21989 = state_19597__$1;
(statearr_19641_21989[(2)] = inst_19590);

(statearr_19641_21989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19598 === (10))){
var inst_19585 = (state_19597[(2)]);
var state_19597__$1 = state_19597;
var statearr_19642_21994 = state_19597__$1;
(statearr_19642_21994[(2)] = inst_19585);

(statearr_19642_21994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19598 === (8))){
var inst_19559 = (state_19597[(10)]);
var inst_19570 = (state_19597[(7)]);
var inst_19572 = (state_19597[(9)]);
var inst_19569 = (state_19597[(8)]);
var inst_19577 = (function (){var cs = inst_19559;
var vec__19565 = inst_19569;
var v = inst_19570;
var c = inst_19572;
return (function (p1__19534_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19534_SHARP_);
});
})();
var inst_19578 = cljs.core.filterv(inst_19577,inst_19559);
var inst_19559__$1 = inst_19578;
var state_19597__$1 = (function (){var statearr_19643 = state_19597;
(statearr_19643[(10)] = inst_19559__$1);

return statearr_19643;
})();
var statearr_19646_21996 = state_19597__$1;
(statearr_19646_21996[(2)] = null);

(statearr_19646_21996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13962__auto__ = null;
var cljs$core$async$state_machine__13962__auto____0 = (function (){
var statearr_19648 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19648[(0)] = cljs$core$async$state_machine__13962__auto__);

(statearr_19648[(1)] = (1));

return statearr_19648;
});
var cljs$core$async$state_machine__13962__auto____1 = (function (state_19597){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_19597);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e19653){var ex__13965__auto__ = e19653;
var statearr_19655_21997 = state_19597;
(statearr_19655_21997[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_19597[(4)]))){
var statearr_19657_22002 = state_19597;
(statearr_19657_22002[(1)] = cljs.core.first((state_19597[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22004 = state_19597;
state_19597 = G__22004;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$state_machine__13962__auto__ = function(state_19597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13962__auto____1.call(this,state_19597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13962__auto____0;
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13962__auto____1;
return cljs$core$async$state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_19661 = f__16429__auto__();
(statearr_19661[(6)] = c__16428__auto___21969);

return statearr_19661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19671 = arguments.length;
switch (G__19671) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16428__auto___22007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_19705){
var state_val_19710 = (state_19705[(1)]);
if((state_val_19710 === (7))){
var inst_19687 = (state_19705[(7)]);
var inst_19687__$1 = (state_19705[(2)]);
var inst_19688 = (inst_19687__$1 == null);
var inst_19689 = cljs.core.not(inst_19688);
var state_19705__$1 = (function (){var statearr_19741 = state_19705;
(statearr_19741[(7)] = inst_19687__$1);

return statearr_19741;
})();
if(inst_19689){
var statearr_19743_22011 = state_19705__$1;
(statearr_19743_22011[(1)] = (8));

} else {
var statearr_19753_22012 = state_19705__$1;
(statearr_19753_22012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19710 === (1))){
var inst_19682 = (0);
var state_19705__$1 = (function (){var statearr_19761 = state_19705;
(statearr_19761[(8)] = inst_19682);

return statearr_19761;
})();
var statearr_19766_22013 = state_19705__$1;
(statearr_19766_22013[(2)] = null);

(statearr_19766_22013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19710 === (4))){
var state_19705__$1 = state_19705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19705__$1,(7),ch);
} else {
if((state_val_19710 === (6))){
var inst_19700 = (state_19705[(2)]);
var state_19705__$1 = state_19705;
var statearr_19770_22014 = state_19705__$1;
(statearr_19770_22014[(2)] = inst_19700);

(statearr_19770_22014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19710 === (3))){
var inst_19702 = (state_19705[(2)]);
var inst_19703 = cljs.core.async.close_BANG_(out);
var state_19705__$1 = (function (){var statearr_19772 = state_19705;
(statearr_19772[(9)] = inst_19702);

return statearr_19772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19705__$1,inst_19703);
} else {
if((state_val_19710 === (2))){
var inst_19682 = (state_19705[(8)]);
var inst_19684 = (inst_19682 < n);
var state_19705__$1 = state_19705;
if(cljs.core.truth_(inst_19684)){
var statearr_19776_22016 = state_19705__$1;
(statearr_19776_22016[(1)] = (4));

} else {
var statearr_19777_22017 = state_19705__$1;
(statearr_19777_22017[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19710 === (11))){
var inst_19682 = (state_19705[(8)]);
var inst_19692 = (state_19705[(2)]);
var inst_19693 = (inst_19682 + (1));
var inst_19682__$1 = inst_19693;
var state_19705__$1 = (function (){var statearr_19782 = state_19705;
(statearr_19782[(8)] = inst_19682__$1);

(statearr_19782[(10)] = inst_19692);

return statearr_19782;
})();
var statearr_19783_22018 = state_19705__$1;
(statearr_19783_22018[(2)] = null);

(statearr_19783_22018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19710 === (9))){
var state_19705__$1 = state_19705;
var statearr_19792_22019 = state_19705__$1;
(statearr_19792_22019[(2)] = null);

(statearr_19792_22019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19710 === (5))){
var state_19705__$1 = state_19705;
var statearr_19794_22020 = state_19705__$1;
(statearr_19794_22020[(2)] = null);

(statearr_19794_22020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19710 === (10))){
var inst_19697 = (state_19705[(2)]);
var state_19705__$1 = state_19705;
var statearr_19796_22021 = state_19705__$1;
(statearr_19796_22021[(2)] = inst_19697);

(statearr_19796_22021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19710 === (8))){
var inst_19687 = (state_19705[(7)]);
var state_19705__$1 = state_19705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19705__$1,(11),out,inst_19687);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13962__auto__ = null;
var cljs$core$async$state_machine__13962__auto____0 = (function (){
var statearr_19804 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19804[(0)] = cljs$core$async$state_machine__13962__auto__);

(statearr_19804[(1)] = (1));

return statearr_19804;
});
var cljs$core$async$state_machine__13962__auto____1 = (function (state_19705){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_19705);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e19808){var ex__13965__auto__ = e19808;
var statearr_19809_22024 = state_19705;
(statearr_19809_22024[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_19705[(4)]))){
var statearr_19811_22025 = state_19705;
(statearr_19811_22025[(1)] = cljs.core.first((state_19705[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22027 = state_19705;
state_19705 = G__22027;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$state_machine__13962__auto__ = function(state_19705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13962__auto____1.call(this,state_19705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13962__auto____0;
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13962__auto____1;
return cljs$core$async$state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_19815 = f__16429__auto__();
(statearr_19815[(6)] = c__16428__auto___22007);

return statearr_19815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19847 = (function (f,ch,meta19820,_,fn1,meta19848){
this.f = f;
this.ch = ch;
this.meta19820 = meta19820;
this._ = _;
this.fn1 = fn1;
this.meta19848 = meta19848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19849,meta19848__$1){
var self__ = this;
var _19849__$1 = this;
return (new cljs.core.async.t_cljs$core$async19847(self__.f,self__.ch,self__.meta19820,self__._,self__.fn1,meta19848__$1));
}));

(cljs.core.async.t_cljs$core$async19847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19849){
var self__ = this;
var _19849__$1 = this;
return self__.meta19848;
}));

(cljs.core.async.t_cljs$core$async19847.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19847.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19816_SHARP_){
var G__19856 = (((p1__19816_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19816_SHARP_) : self__.f.call(null,p1__19816_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19856) : f1.call(null,G__19856));
});
}));

(cljs.core.async.t_cljs$core$async19847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19820","meta19820",-2094748910,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19819","cljs.core.async/t_cljs$core$async19819",1864464902,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19848","meta19848",1513363508,null)], null);
}));

(cljs.core.async.t_cljs$core$async19847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19847");

(cljs.core.async.t_cljs$core$async19847.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19847.
 */
cljs.core.async.__GT_t_cljs$core$async19847 = (function cljs$core$async$__GT_t_cljs$core$async19847(f,ch,meta19820,_,fn1,meta19848){
return (new cljs.core.async.t_cljs$core$async19847(f,ch,meta19820,_,fn1,meta19848));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19819 = (function (f,ch,meta19820){
this.f = f;
this.ch = ch;
this.meta19820 = meta19820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19821,meta19820__$1){
var self__ = this;
var _19821__$1 = this;
return (new cljs.core.async.t_cljs$core$async19819(self__.f,self__.ch,meta19820__$1));
}));

(cljs.core.async.t_cljs$core$async19819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19821){
var self__ = this;
var _19821__$1 = this;
return self__.meta19820;
}));

(cljs.core.async.t_cljs$core$async19819.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19819.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19819.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19819.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19819.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19847(self__.f,self__.ch,self__.meta19820,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19869 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19869) : self__.f.call(null,G__19869));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19819.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19819.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19820","meta19820",-2094748910,null)], null);
}));

(cljs.core.async.t_cljs$core$async19819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19819");

(cljs.core.async.t_cljs$core$async19819.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19819.
 */
cljs.core.async.__GT_t_cljs$core$async19819 = (function cljs$core$async$__GT_t_cljs$core$async19819(f,ch,meta19820){
return (new cljs.core.async.t_cljs$core$async19819(f,ch,meta19820));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19819(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19885 = (function (f,ch,meta19886){
this.f = f;
this.ch = ch;
this.meta19886 = meta19886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19887,meta19886__$1){
var self__ = this;
var _19887__$1 = this;
return (new cljs.core.async.t_cljs$core$async19885(self__.f,self__.ch,meta19886__$1));
}));

(cljs.core.async.t_cljs$core$async19885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19887){
var self__ = this;
var _19887__$1 = this;
return self__.meta19886;
}));

(cljs.core.async.t_cljs$core$async19885.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19885.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19885.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19885.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19885.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19885.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19886","meta19886",-2007586726,null)], null);
}));

(cljs.core.async.t_cljs$core$async19885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19885");

(cljs.core.async.t_cljs$core$async19885.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19885.
 */
cljs.core.async.__GT_t_cljs$core$async19885 = (function cljs$core$async$__GT_t_cljs$core$async19885(f,ch,meta19886){
return (new cljs.core.async.t_cljs$core$async19885(f,ch,meta19886));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19885(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19930 = (function (p,ch,meta19931){
this.p = p;
this.ch = ch;
this.meta19931 = meta19931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19932,meta19931__$1){
var self__ = this;
var _19932__$1 = this;
return (new cljs.core.async.t_cljs$core$async19930(self__.p,self__.ch,meta19931__$1));
}));

(cljs.core.async.t_cljs$core$async19930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19932){
var self__ = this;
var _19932__$1 = this;
return self__.meta19931;
}));

(cljs.core.async.t_cljs$core$async19930.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19930.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19930.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19930.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19930.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19930.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19930.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19931","meta19931",-583747610,null)], null);
}));

(cljs.core.async.t_cljs$core$async19930.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19930");

(cljs.core.async.t_cljs$core$async19930.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19930");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19930.
 */
cljs.core.async.__GT_t_cljs$core$async19930 = (function cljs$core$async$__GT_t_cljs$core$async19930(p,ch,meta19931){
return (new cljs.core.async.t_cljs$core$async19930(p,ch,meta19931));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19930(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19980 = arguments.length;
switch (G__19980) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16428__auto___22053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_20001){
var state_val_20002 = (state_20001[(1)]);
if((state_val_20002 === (7))){
var inst_19997 = (state_20001[(2)]);
var state_20001__$1 = state_20001;
var statearr_20012_22058 = state_20001__$1;
(statearr_20012_22058[(2)] = inst_19997);

(statearr_20012_22058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (1))){
var state_20001__$1 = state_20001;
var statearr_20015_22059 = state_20001__$1;
(statearr_20015_22059[(2)] = null);

(statearr_20015_22059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (4))){
var inst_19983 = (state_20001[(7)]);
var inst_19983__$1 = (state_20001[(2)]);
var inst_19984 = (inst_19983__$1 == null);
var state_20001__$1 = (function (){var statearr_20020 = state_20001;
(statearr_20020[(7)] = inst_19983__$1);

return statearr_20020;
})();
if(cljs.core.truth_(inst_19984)){
var statearr_20021_22060 = state_20001__$1;
(statearr_20021_22060[(1)] = (5));

} else {
var statearr_20022_22061 = state_20001__$1;
(statearr_20022_22061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (6))){
var inst_19983 = (state_20001[(7)]);
var inst_19988 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19983) : p.call(null,inst_19983));
var state_20001__$1 = state_20001;
if(cljs.core.truth_(inst_19988)){
var statearr_20023_22062 = state_20001__$1;
(statearr_20023_22062[(1)] = (8));

} else {
var statearr_20024_22063 = state_20001__$1;
(statearr_20024_22063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (3))){
var inst_19999 = (state_20001[(2)]);
var state_20001__$1 = state_20001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20001__$1,inst_19999);
} else {
if((state_val_20002 === (2))){
var state_20001__$1 = state_20001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20001__$1,(4),ch);
} else {
if((state_val_20002 === (11))){
var inst_19991 = (state_20001[(2)]);
var state_20001__$1 = state_20001;
var statearr_20026_22064 = state_20001__$1;
(statearr_20026_22064[(2)] = inst_19991);

(statearr_20026_22064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (9))){
var state_20001__$1 = state_20001;
var statearr_20032_22065 = state_20001__$1;
(statearr_20032_22065[(2)] = null);

(statearr_20032_22065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (5))){
var inst_19986 = cljs.core.async.close_BANG_(out);
var state_20001__$1 = state_20001;
var statearr_20037_22066 = state_20001__$1;
(statearr_20037_22066[(2)] = inst_19986);

(statearr_20037_22066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (10))){
var inst_19994 = (state_20001[(2)]);
var state_20001__$1 = (function (){var statearr_20038 = state_20001;
(statearr_20038[(8)] = inst_19994);

return statearr_20038;
})();
var statearr_20039_22067 = state_20001__$1;
(statearr_20039_22067[(2)] = null);

(statearr_20039_22067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (8))){
var inst_19983 = (state_20001[(7)]);
var state_20001__$1 = state_20001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20001__$1,(11),out,inst_19983);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13962__auto__ = null;
var cljs$core$async$state_machine__13962__auto____0 = (function (){
var statearr_20040 = [null,null,null,null,null,null,null,null,null];
(statearr_20040[(0)] = cljs$core$async$state_machine__13962__auto__);

(statearr_20040[(1)] = (1));

return statearr_20040;
});
var cljs$core$async$state_machine__13962__auto____1 = (function (state_20001){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_20001);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e20041){var ex__13965__auto__ = e20041;
var statearr_20042_22068 = state_20001;
(statearr_20042_22068[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_20001[(4)]))){
var statearr_20043_22070 = state_20001;
(statearr_20043_22070[(1)] = cljs.core.first((state_20001[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22072 = state_20001;
state_20001 = G__22072;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$state_machine__13962__auto__ = function(state_20001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13962__auto____1.call(this,state_20001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13962__auto____0;
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13962__auto____1;
return cljs$core$async$state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_20044 = f__16429__auto__();
(statearr_20044[(6)] = c__16428__auto___22053);

return statearr_20044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20056 = arguments.length;
switch (G__20056) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16428__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_20147){
var state_val_20148 = (state_20147[(1)]);
if((state_val_20148 === (7))){
var inst_20143 = (state_20147[(2)]);
var state_20147__$1 = state_20147;
var statearr_20163_22082 = state_20147__$1;
(statearr_20163_22082[(2)] = inst_20143);

(statearr_20163_22082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (20))){
var inst_20106 = (state_20147[(7)]);
var inst_20122 = (state_20147[(2)]);
var inst_20123 = cljs.core.next(inst_20106);
var inst_20083 = inst_20123;
var inst_20084 = null;
var inst_20085 = (0);
var inst_20086 = (0);
var state_20147__$1 = (function (){var statearr_20169 = state_20147;
(statearr_20169[(8)] = inst_20083);

(statearr_20169[(9)] = inst_20122);

(statearr_20169[(10)] = inst_20086);

(statearr_20169[(11)] = inst_20085);

(statearr_20169[(12)] = inst_20084);

return statearr_20169;
})();
var statearr_20171_22088 = state_20147__$1;
(statearr_20171_22088[(2)] = null);

(statearr_20171_22088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (1))){
var state_20147__$1 = state_20147;
var statearr_20177_22089 = state_20147__$1;
(statearr_20177_22089[(2)] = null);

(statearr_20177_22089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (4))){
var inst_20072 = (state_20147[(13)]);
var inst_20072__$1 = (state_20147[(2)]);
var inst_20073 = (inst_20072__$1 == null);
var state_20147__$1 = (function (){var statearr_20178 = state_20147;
(statearr_20178[(13)] = inst_20072__$1);

return statearr_20178;
})();
if(cljs.core.truth_(inst_20073)){
var statearr_20185_22091 = state_20147__$1;
(statearr_20185_22091[(1)] = (5));

} else {
var statearr_20186_22093 = state_20147__$1;
(statearr_20186_22093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (15))){
var state_20147__$1 = state_20147;
var statearr_20194_22094 = state_20147__$1;
(statearr_20194_22094[(2)] = null);

(statearr_20194_22094[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (21))){
var state_20147__$1 = state_20147;
var statearr_20214_22095 = state_20147__$1;
(statearr_20214_22095[(2)] = null);

(statearr_20214_22095[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (13))){
var inst_20083 = (state_20147[(8)]);
var inst_20086 = (state_20147[(10)]);
var inst_20085 = (state_20147[(11)]);
var inst_20084 = (state_20147[(12)]);
var inst_20098 = (state_20147[(2)]);
var inst_20099 = (inst_20086 + (1));
var tmp20187 = inst_20083;
var tmp20188 = inst_20085;
var tmp20189 = inst_20084;
var inst_20083__$1 = tmp20187;
var inst_20084__$1 = tmp20189;
var inst_20085__$1 = tmp20188;
var inst_20086__$1 = inst_20099;
var state_20147__$1 = (function (){var statearr_20233 = state_20147;
(statearr_20233[(8)] = inst_20083__$1);

(statearr_20233[(10)] = inst_20086__$1);

(statearr_20233[(14)] = inst_20098);

(statearr_20233[(11)] = inst_20085__$1);

(statearr_20233[(12)] = inst_20084__$1);

return statearr_20233;
})();
var statearr_20234_22101 = state_20147__$1;
(statearr_20234_22101[(2)] = null);

(statearr_20234_22101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (22))){
var state_20147__$1 = state_20147;
var statearr_20253_22102 = state_20147__$1;
(statearr_20253_22102[(2)] = null);

(statearr_20253_22102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (6))){
var inst_20072 = (state_20147[(13)]);
var inst_20081 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20072) : f.call(null,inst_20072));
var inst_20082 = cljs.core.seq(inst_20081);
var inst_20083 = inst_20082;
var inst_20084 = null;
var inst_20085 = (0);
var inst_20086 = (0);
var state_20147__$1 = (function (){var statearr_20278 = state_20147;
(statearr_20278[(8)] = inst_20083);

(statearr_20278[(10)] = inst_20086);

(statearr_20278[(11)] = inst_20085);

(statearr_20278[(12)] = inst_20084);

return statearr_20278;
})();
var statearr_20287_22106 = state_20147__$1;
(statearr_20287_22106[(2)] = null);

(statearr_20287_22106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (17))){
var inst_20106 = (state_20147[(7)]);
var inst_20111 = cljs.core.chunk_first(inst_20106);
var inst_20112 = cljs.core.chunk_rest(inst_20106);
var inst_20113 = cljs.core.count(inst_20111);
var inst_20083 = inst_20112;
var inst_20084 = inst_20111;
var inst_20085 = inst_20113;
var inst_20086 = (0);
var state_20147__$1 = (function (){var statearr_20303 = state_20147;
(statearr_20303[(8)] = inst_20083);

(statearr_20303[(10)] = inst_20086);

(statearr_20303[(11)] = inst_20085);

(statearr_20303[(12)] = inst_20084);

return statearr_20303;
})();
var statearr_20315_22108 = state_20147__$1;
(statearr_20315_22108[(2)] = null);

(statearr_20315_22108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (3))){
var inst_20145 = (state_20147[(2)]);
var state_20147__$1 = state_20147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20147__$1,inst_20145);
} else {
if((state_val_20148 === (12))){
var inst_20131 = (state_20147[(2)]);
var state_20147__$1 = state_20147;
var statearr_20332_22109 = state_20147__$1;
(statearr_20332_22109[(2)] = inst_20131);

(statearr_20332_22109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (2))){
var state_20147__$1 = state_20147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20147__$1,(4),in$);
} else {
if((state_val_20148 === (23))){
var inst_20141 = (state_20147[(2)]);
var state_20147__$1 = state_20147;
var statearr_20342_22111 = state_20147__$1;
(statearr_20342_22111[(2)] = inst_20141);

(statearr_20342_22111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (19))){
var inst_20126 = (state_20147[(2)]);
var state_20147__$1 = state_20147;
var statearr_20347_22112 = state_20147__$1;
(statearr_20347_22112[(2)] = inst_20126);

(statearr_20347_22112[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (11))){
var inst_20083 = (state_20147[(8)]);
var inst_20106 = (state_20147[(7)]);
var inst_20106__$1 = cljs.core.seq(inst_20083);
var state_20147__$1 = (function (){var statearr_20348 = state_20147;
(statearr_20348[(7)] = inst_20106__$1);

return statearr_20348;
})();
if(inst_20106__$1){
var statearr_20351_22114 = state_20147__$1;
(statearr_20351_22114[(1)] = (14));

} else {
var statearr_20352_22115 = state_20147__$1;
(statearr_20352_22115[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (9))){
var inst_20133 = (state_20147[(2)]);
var inst_20136 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20147__$1 = (function (){var statearr_20355 = state_20147;
(statearr_20355[(15)] = inst_20133);

return statearr_20355;
})();
if(cljs.core.truth_(inst_20136)){
var statearr_20356_22116 = state_20147__$1;
(statearr_20356_22116[(1)] = (21));

} else {
var statearr_20358_22117 = state_20147__$1;
(statearr_20358_22117[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (5))){
var inst_20075 = cljs.core.async.close_BANG_(out);
var state_20147__$1 = state_20147;
var statearr_20372_22121 = state_20147__$1;
(statearr_20372_22121[(2)] = inst_20075);

(statearr_20372_22121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (14))){
var inst_20106 = (state_20147[(7)]);
var inst_20108 = cljs.core.chunked_seq_QMARK_(inst_20106);
var state_20147__$1 = state_20147;
if(inst_20108){
var statearr_20386_22122 = state_20147__$1;
(statearr_20386_22122[(1)] = (17));

} else {
var statearr_20387_22123 = state_20147__$1;
(statearr_20387_22123[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (16))){
var inst_20129 = (state_20147[(2)]);
var state_20147__$1 = state_20147;
var statearr_20390_22124 = state_20147__$1;
(statearr_20390_22124[(2)] = inst_20129);

(statearr_20390_22124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20148 === (10))){
var inst_20086 = (state_20147[(10)]);
var inst_20084 = (state_20147[(12)]);
var inst_20096 = cljs.core._nth(inst_20084,inst_20086);
var state_20147__$1 = state_20147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20147__$1,(13),out,inst_20096);
} else {
if((state_val_20148 === (18))){
var inst_20106 = (state_20147[(7)]);
var inst_20120 = cljs.core.first(inst_20106);
var state_20147__$1 = state_20147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20147__$1,(20),out,inst_20120);
} else {
if((state_val_20148 === (8))){
var inst_20086 = (state_20147[(10)]);
var inst_20085 = (state_20147[(11)]);
var inst_20093 = (inst_20086 < inst_20085);
var inst_20094 = inst_20093;
var state_20147__$1 = state_20147;
if(cljs.core.truth_(inst_20094)){
var statearr_20399_22125 = state_20147__$1;
(statearr_20399_22125[(1)] = (10));

} else {
var statearr_20401_22126 = state_20147__$1;
(statearr_20401_22126[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13962__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13962__auto____0 = (function (){
var statearr_20422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20422[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13962__auto__);

(statearr_20422[(1)] = (1));

return statearr_20422;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13962__auto____1 = (function (state_20147){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_20147);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e20428){var ex__13965__auto__ = e20428;
var statearr_20430_22131 = state_20147;
(statearr_20430_22131[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_20147[(4)]))){
var statearr_20431_22133 = state_20147;
(statearr_20431_22133[(1)] = cljs.core.first((state_20147[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22135 = state_20147;
state_20147 = G__22135;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13962__auto__ = function(state_20147){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13962__auto____1.call(this,state_20147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13962__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13962__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_20436 = f__16429__auto__();
(statearr_20436[(6)] = c__16428__auto__);

return statearr_20436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));

return c__16428__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20441 = arguments.length;
switch (G__20441) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20456 = arguments.length;
switch (G__20456) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20487 = arguments.length;
switch (G__20487) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16428__auto___22146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_20554){
var state_val_20555 = (state_20554[(1)]);
if((state_val_20555 === (7))){
var inst_20544 = (state_20554[(2)]);
var state_20554__$1 = state_20554;
var statearr_20574_22150 = state_20554__$1;
(statearr_20574_22150[(2)] = inst_20544);

(statearr_20574_22150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (1))){
var inst_20523 = null;
var state_20554__$1 = (function (){var statearr_20588 = state_20554;
(statearr_20588[(7)] = inst_20523);

return statearr_20588;
})();
var statearr_20589_22151 = state_20554__$1;
(statearr_20589_22151[(2)] = null);

(statearr_20589_22151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (4))){
var inst_20526 = (state_20554[(8)]);
var inst_20526__$1 = (state_20554[(2)]);
var inst_20530 = (inst_20526__$1 == null);
var inst_20531 = cljs.core.not(inst_20530);
var state_20554__$1 = (function (){var statearr_20600 = state_20554;
(statearr_20600[(8)] = inst_20526__$1);

return statearr_20600;
})();
if(inst_20531){
var statearr_20605_22153 = state_20554__$1;
(statearr_20605_22153[(1)] = (5));

} else {
var statearr_20610_22154 = state_20554__$1;
(statearr_20610_22154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (6))){
var state_20554__$1 = state_20554;
var statearr_20628_22155 = state_20554__$1;
(statearr_20628_22155[(2)] = null);

(statearr_20628_22155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (3))){
var inst_20546 = (state_20554[(2)]);
var inst_20547 = cljs.core.async.close_BANG_(out);
var state_20554__$1 = (function (){var statearr_20633 = state_20554;
(statearr_20633[(9)] = inst_20546);

return statearr_20633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20554__$1,inst_20547);
} else {
if((state_val_20555 === (2))){
var state_20554__$1 = state_20554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20554__$1,(4),ch);
} else {
if((state_val_20555 === (11))){
var inst_20526 = (state_20554[(8)]);
var inst_20538 = (state_20554[(2)]);
var inst_20523 = inst_20526;
var state_20554__$1 = (function (){var statearr_20646 = state_20554;
(statearr_20646[(7)] = inst_20523);

(statearr_20646[(10)] = inst_20538);

return statearr_20646;
})();
var statearr_20651_22157 = state_20554__$1;
(statearr_20651_22157[(2)] = null);

(statearr_20651_22157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (9))){
var inst_20526 = (state_20554[(8)]);
var state_20554__$1 = state_20554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20554__$1,(11),out,inst_20526);
} else {
if((state_val_20555 === (5))){
var inst_20523 = (state_20554[(7)]);
var inst_20526 = (state_20554[(8)]);
var inst_20533 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20526,inst_20523);
var state_20554__$1 = state_20554;
if(inst_20533){
var statearr_20655_22158 = state_20554__$1;
(statearr_20655_22158[(1)] = (8));

} else {
var statearr_20656_22159 = state_20554__$1;
(statearr_20656_22159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (10))){
var inst_20541 = (state_20554[(2)]);
var state_20554__$1 = state_20554;
var statearr_20657_22161 = state_20554__$1;
(statearr_20657_22161[(2)] = inst_20541);

(statearr_20657_22161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (8))){
var inst_20523 = (state_20554[(7)]);
var tmp20652 = inst_20523;
var inst_20523__$1 = tmp20652;
var state_20554__$1 = (function (){var statearr_20658 = state_20554;
(statearr_20658[(7)] = inst_20523__$1);

return statearr_20658;
})();
var statearr_20660_22167 = state_20554__$1;
(statearr_20660_22167[(2)] = null);

(statearr_20660_22167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13962__auto__ = null;
var cljs$core$async$state_machine__13962__auto____0 = (function (){
var statearr_20661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20661[(0)] = cljs$core$async$state_machine__13962__auto__);

(statearr_20661[(1)] = (1));

return statearr_20661;
});
var cljs$core$async$state_machine__13962__auto____1 = (function (state_20554){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_20554);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e20665){var ex__13965__auto__ = e20665;
var statearr_20666_22168 = state_20554;
(statearr_20666_22168[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_20554[(4)]))){
var statearr_20667_22169 = state_20554;
(statearr_20667_22169[(1)] = cljs.core.first((state_20554[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22170 = state_20554;
state_20554 = G__22170;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$state_machine__13962__auto__ = function(state_20554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13962__auto____1.call(this,state_20554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13962__auto____0;
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13962__auto____1;
return cljs$core$async$state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_20671 = f__16429__auto__();
(statearr_20671[(6)] = c__16428__auto___22146);

return statearr_20671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20680 = arguments.length;
switch (G__20680) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16428__auto___22173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_20752){
var state_val_20753 = (state_20752[(1)]);
if((state_val_20753 === (7))){
var inst_20748 = (state_20752[(2)]);
var state_20752__$1 = state_20752;
var statearr_20762_22175 = state_20752__$1;
(statearr_20762_22175[(2)] = inst_20748);

(statearr_20762_22175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (1))){
var inst_20705 = (new Array(n));
var inst_20706 = inst_20705;
var inst_20707 = (0);
var state_20752__$1 = (function (){var statearr_20764 = state_20752;
(statearr_20764[(7)] = inst_20707);

(statearr_20764[(8)] = inst_20706);

return statearr_20764;
})();
var statearr_20765_22176 = state_20752__$1;
(statearr_20765_22176[(2)] = null);

(statearr_20765_22176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (4))){
var inst_20711 = (state_20752[(9)]);
var inst_20711__$1 = (state_20752[(2)]);
var inst_20718 = (inst_20711__$1 == null);
var inst_20719 = cljs.core.not(inst_20718);
var state_20752__$1 = (function (){var statearr_20766 = state_20752;
(statearr_20766[(9)] = inst_20711__$1);

return statearr_20766;
})();
if(inst_20719){
var statearr_20767_22177 = state_20752__$1;
(statearr_20767_22177[(1)] = (5));

} else {
var statearr_20769_22178 = state_20752__$1;
(statearr_20769_22178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (15))){
var inst_20742 = (state_20752[(2)]);
var state_20752__$1 = state_20752;
var statearr_20774_22179 = state_20752__$1;
(statearr_20774_22179[(2)] = inst_20742);

(statearr_20774_22179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (13))){
var state_20752__$1 = state_20752;
var statearr_20778_22181 = state_20752__$1;
(statearr_20778_22181[(2)] = null);

(statearr_20778_22181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (6))){
var inst_20707 = (state_20752[(7)]);
var inst_20738 = (inst_20707 > (0));
var state_20752__$1 = state_20752;
if(cljs.core.truth_(inst_20738)){
var statearr_20780_22182 = state_20752__$1;
(statearr_20780_22182[(1)] = (12));

} else {
var statearr_20781_22183 = state_20752__$1;
(statearr_20781_22183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (3))){
var inst_20750 = (state_20752[(2)]);
var state_20752__$1 = state_20752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20752__$1,inst_20750);
} else {
if((state_val_20753 === (12))){
var inst_20706 = (state_20752[(8)]);
var inst_20740 = cljs.core.vec(inst_20706);
var state_20752__$1 = state_20752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20752__$1,(15),out,inst_20740);
} else {
if((state_val_20753 === (2))){
var state_20752__$1 = state_20752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20752__$1,(4),ch);
} else {
if((state_val_20753 === (11))){
var inst_20729 = (state_20752[(2)]);
var inst_20732 = (new Array(n));
var inst_20706 = inst_20732;
var inst_20707 = (0);
var state_20752__$1 = (function (){var statearr_20790 = state_20752;
(statearr_20790[(7)] = inst_20707);

(statearr_20790[(10)] = inst_20729);

(statearr_20790[(8)] = inst_20706);

return statearr_20790;
})();
var statearr_20791_22192 = state_20752__$1;
(statearr_20791_22192[(2)] = null);

(statearr_20791_22192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (9))){
var inst_20706 = (state_20752[(8)]);
var inst_20727 = cljs.core.vec(inst_20706);
var state_20752__$1 = state_20752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20752__$1,(11),out,inst_20727);
} else {
if((state_val_20753 === (5))){
var inst_20711 = (state_20752[(9)]);
var inst_20707 = (state_20752[(7)]);
var inst_20722 = (state_20752[(11)]);
var inst_20706 = (state_20752[(8)]);
var inst_20721 = (inst_20706[inst_20707] = inst_20711);
var inst_20722__$1 = (inst_20707 + (1));
var inst_20723 = (inst_20722__$1 < n);
var state_20752__$1 = (function (){var statearr_20794 = state_20752;
(statearr_20794[(12)] = inst_20721);

(statearr_20794[(11)] = inst_20722__$1);

return statearr_20794;
})();
if(cljs.core.truth_(inst_20723)){
var statearr_20795_22195 = state_20752__$1;
(statearr_20795_22195[(1)] = (8));

} else {
var statearr_20796_22196 = state_20752__$1;
(statearr_20796_22196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (14))){
var inst_20745 = (state_20752[(2)]);
var inst_20746 = cljs.core.async.close_BANG_(out);
var state_20752__$1 = (function (){var statearr_20799 = state_20752;
(statearr_20799[(13)] = inst_20745);

return statearr_20799;
})();
var statearr_20800_22197 = state_20752__$1;
(statearr_20800_22197[(2)] = inst_20746);

(statearr_20800_22197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (10))){
var inst_20736 = (state_20752[(2)]);
var state_20752__$1 = state_20752;
var statearr_20801_22198 = state_20752__$1;
(statearr_20801_22198[(2)] = inst_20736);

(statearr_20801_22198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (8))){
var inst_20722 = (state_20752[(11)]);
var inst_20706 = (state_20752[(8)]);
var tmp20798 = inst_20706;
var inst_20706__$1 = tmp20798;
var inst_20707 = inst_20722;
var state_20752__$1 = (function (){var statearr_20804 = state_20752;
(statearr_20804[(7)] = inst_20707);

(statearr_20804[(8)] = inst_20706__$1);

return statearr_20804;
})();
var statearr_20805_22199 = state_20752__$1;
(statearr_20805_22199[(2)] = null);

(statearr_20805_22199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13962__auto__ = null;
var cljs$core$async$state_machine__13962__auto____0 = (function (){
var statearr_20806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20806[(0)] = cljs$core$async$state_machine__13962__auto__);

(statearr_20806[(1)] = (1));

return statearr_20806;
});
var cljs$core$async$state_machine__13962__auto____1 = (function (state_20752){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_20752);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e20809){var ex__13965__auto__ = e20809;
var statearr_20810_22200 = state_20752;
(statearr_20810_22200[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_20752[(4)]))){
var statearr_20811_22201 = state_20752;
(statearr_20811_22201[(1)] = cljs.core.first((state_20752[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22203 = state_20752;
state_20752 = G__22203;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$state_machine__13962__auto__ = function(state_20752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13962__auto____1.call(this,state_20752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13962__auto____0;
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13962__auto____1;
return cljs$core$async$state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_20813 = f__16429__auto__();
(statearr_20813[(6)] = c__16428__auto___22173);

return statearr_20813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20815 = arguments.length;
switch (G__20815) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16428__auto___22208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16429__auto__ = (function (){var switch__13961__auto__ = (function (state_20867){
var state_val_20868 = (state_20867[(1)]);
if((state_val_20868 === (7))){
var inst_20862 = (state_20867[(2)]);
var state_20867__$1 = state_20867;
var statearr_20870_22214 = state_20867__$1;
(statearr_20870_22214[(2)] = inst_20862);

(statearr_20870_22214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (1))){
var inst_20816 = [];
var inst_20817 = inst_20816;
var inst_20818 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20867__$1 = (function (){var statearr_20871 = state_20867;
(statearr_20871[(7)] = inst_20818);

(statearr_20871[(8)] = inst_20817);

return statearr_20871;
})();
var statearr_20872_22216 = state_20867__$1;
(statearr_20872_22216[(2)] = null);

(statearr_20872_22216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (4))){
var inst_20822 = (state_20867[(9)]);
var inst_20822__$1 = (state_20867[(2)]);
var inst_20823 = (inst_20822__$1 == null);
var inst_20824 = cljs.core.not(inst_20823);
var state_20867__$1 = (function (){var statearr_20873 = state_20867;
(statearr_20873[(9)] = inst_20822__$1);

return statearr_20873;
})();
if(inst_20824){
var statearr_20874_22217 = state_20867__$1;
(statearr_20874_22217[(1)] = (5));

} else {
var statearr_20875_22218 = state_20867__$1;
(statearr_20875_22218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (15))){
var inst_20817 = (state_20867[(8)]);
var inst_20853 = cljs.core.vec(inst_20817);
var state_20867__$1 = state_20867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20867__$1,(18),out,inst_20853);
} else {
if((state_val_20868 === (13))){
var inst_20848 = (state_20867[(2)]);
var state_20867__$1 = state_20867;
var statearr_20882_22219 = state_20867__$1;
(statearr_20882_22219[(2)] = inst_20848);

(statearr_20882_22219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (6))){
var inst_20817 = (state_20867[(8)]);
var inst_20850 = inst_20817.length;
var inst_20851 = (inst_20850 > (0));
var state_20867__$1 = state_20867;
if(cljs.core.truth_(inst_20851)){
var statearr_20888_22227 = state_20867__$1;
(statearr_20888_22227[(1)] = (15));

} else {
var statearr_20889_22229 = state_20867__$1;
(statearr_20889_22229[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (17))){
var inst_20858 = (state_20867[(2)]);
var inst_20860 = cljs.core.async.close_BANG_(out);
var state_20867__$1 = (function (){var statearr_20891 = state_20867;
(statearr_20891[(10)] = inst_20858);

return statearr_20891;
})();
var statearr_20895_22230 = state_20867__$1;
(statearr_20895_22230[(2)] = inst_20860);

(statearr_20895_22230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (3))){
var inst_20864 = (state_20867[(2)]);
var state_20867__$1 = state_20867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20867__$1,inst_20864);
} else {
if((state_val_20868 === (12))){
var inst_20817 = (state_20867[(8)]);
var inst_20840 = cljs.core.vec(inst_20817);
var state_20867__$1 = state_20867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20867__$1,(14),out,inst_20840);
} else {
if((state_val_20868 === (2))){
var state_20867__$1 = state_20867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20867__$1,(4),ch);
} else {
if((state_val_20868 === (11))){
var inst_20822 = (state_20867[(9)]);
var inst_20817 = (state_20867[(8)]);
var inst_20826 = (state_20867[(11)]);
var inst_20837 = inst_20817.push(inst_20822);
var tmp20896 = inst_20817;
var inst_20817__$1 = tmp20896;
var inst_20818 = inst_20826;
var state_20867__$1 = (function (){var statearr_20899 = state_20867;
(statearr_20899[(7)] = inst_20818);

(statearr_20899[(8)] = inst_20817__$1);

(statearr_20899[(12)] = inst_20837);

return statearr_20899;
})();
var statearr_20900_22231 = state_20867__$1;
(statearr_20900_22231[(2)] = null);

(statearr_20900_22231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (9))){
var inst_20818 = (state_20867[(7)]);
var inst_20833 = cljs.core.keyword_identical_QMARK_(inst_20818,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20867__$1 = state_20867;
var statearr_20901_22234 = state_20867__$1;
(statearr_20901_22234[(2)] = inst_20833);

(statearr_20901_22234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (5))){
var inst_20822 = (state_20867[(9)]);
var inst_20818 = (state_20867[(7)]);
var inst_20829 = (state_20867[(13)]);
var inst_20826 = (state_20867[(11)]);
var inst_20826__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20822) : f.call(null,inst_20822));
var inst_20829__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20826__$1,inst_20818);
var state_20867__$1 = (function (){var statearr_20907 = state_20867;
(statearr_20907[(13)] = inst_20829__$1);

(statearr_20907[(11)] = inst_20826__$1);

return statearr_20907;
})();
if(inst_20829__$1){
var statearr_20908_22235 = state_20867__$1;
(statearr_20908_22235[(1)] = (8));

} else {
var statearr_20909_22236 = state_20867__$1;
(statearr_20909_22236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (14))){
var inst_20822 = (state_20867[(9)]);
var inst_20826 = (state_20867[(11)]);
var inst_20842 = (state_20867[(2)]);
var inst_20843 = [];
var inst_20844 = inst_20843.push(inst_20822);
var inst_20817 = inst_20843;
var inst_20818 = inst_20826;
var state_20867__$1 = (function (){var statearr_20914 = state_20867;
(statearr_20914[(7)] = inst_20818);

(statearr_20914[(14)] = inst_20844);

(statearr_20914[(8)] = inst_20817);

(statearr_20914[(15)] = inst_20842);

return statearr_20914;
})();
var statearr_20915_22237 = state_20867__$1;
(statearr_20915_22237[(2)] = null);

(statearr_20915_22237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (16))){
var state_20867__$1 = state_20867;
var statearr_20919_22241 = state_20867__$1;
(statearr_20919_22241[(2)] = null);

(statearr_20919_22241[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (10))){
var inst_20835 = (state_20867[(2)]);
var state_20867__$1 = state_20867;
if(cljs.core.truth_(inst_20835)){
var statearr_20921_22242 = state_20867__$1;
(statearr_20921_22242[(1)] = (11));

} else {
var statearr_20926_22243 = state_20867__$1;
(statearr_20926_22243[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (18))){
var inst_20855 = (state_20867[(2)]);
var state_20867__$1 = state_20867;
var statearr_20927_22244 = state_20867__$1;
(statearr_20927_22244[(2)] = inst_20855);

(statearr_20927_22244[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20868 === (8))){
var inst_20829 = (state_20867[(13)]);
var state_20867__$1 = state_20867;
var statearr_20930_22245 = state_20867__$1;
(statearr_20930_22245[(2)] = inst_20829);

(statearr_20930_22245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13962__auto__ = null;
var cljs$core$async$state_machine__13962__auto____0 = (function (){
var statearr_20931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20931[(0)] = cljs$core$async$state_machine__13962__auto__);

(statearr_20931[(1)] = (1));

return statearr_20931;
});
var cljs$core$async$state_machine__13962__auto____1 = (function (state_20867){
while(true){
var ret_value__13963__auto__ = (function (){try{while(true){
var result__13964__auto__ = switch__13961__auto__(state_20867);
if(cljs.core.keyword_identical_QMARK_(result__13964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13964__auto__;
}
break;
}
}catch (e20932){var ex__13965__auto__ = e20932;
var statearr_20934_22246 = state_20867;
(statearr_20934_22246[(2)] = ex__13965__auto__);


if(cljs.core.seq((state_20867[(4)]))){
var statearr_20935_22247 = state_20867;
(statearr_20935_22247[(1)] = cljs.core.first((state_20867[(4)])));

} else {
throw ex__13965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22252 = state_20867;
state_20867 = G__22252;
continue;
} else {
return ret_value__13963__auto__;
}
break;
}
});
cljs$core$async$state_machine__13962__auto__ = function(state_20867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13962__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13962__auto____1.call(this,state_20867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13962__auto____0;
cljs$core$async$state_machine__13962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13962__auto____1;
return cljs$core$async$state_machine__13962__auto__;
})()
})();
var state__16430__auto__ = (function (){var statearr_20941 = f__16429__auto__();
(statearr_20941[(6)] = c__16428__auto___22208);

return statearr_20941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16430__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
