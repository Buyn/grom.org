goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23472 = arguments.length;
var i__5727__auto___23473 = (0);
while(true){
if((i__5727__auto___23473 < len__5726__auto___23472)){
args__5732__auto__.push((arguments[i__5727__auto___23473]));

var G__23474 = (i__5727__auto___23473 + (1));
i__5727__auto___23473 = G__23474;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq23181){
var G__23182 = cljs.core.first(seq23181);
var seq23181__$1 = cljs.core.next(seq23181);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23182,seq23181__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__23183 = cljs.core.seq(sources);
var chunk__23184 = null;
var count__23185 = (0);
var i__23186 = (0);
while(true){
if((i__23186 < count__23185)){
var map__23194 = chunk__23184.cljs$core$IIndexed$_nth$arity$2(null,i__23186);
var map__23194__$1 = cljs.core.__destructure_map(map__23194);
var src = map__23194__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23194__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23194__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23194__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23194__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23196){var e_23475 = e23196;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23475);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23475.message)].join('')));
}

var G__23476 = seq__23183;
var G__23477 = chunk__23184;
var G__23478 = count__23185;
var G__23479 = (i__23186 + (1));
seq__23183 = G__23476;
chunk__23184 = G__23477;
count__23185 = G__23478;
i__23186 = G__23479;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23183);
if(temp__5804__auto__){
var seq__23183__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23183__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23183__$1);
var G__23480 = cljs.core.chunk_rest(seq__23183__$1);
var G__23481 = c__5525__auto__;
var G__23482 = cljs.core.count(c__5525__auto__);
var G__23483 = (0);
seq__23183 = G__23480;
chunk__23184 = G__23481;
count__23185 = G__23482;
i__23186 = G__23483;
continue;
} else {
var map__23198 = cljs.core.first(seq__23183__$1);
var map__23198__$1 = cljs.core.__destructure_map(map__23198);
var src = map__23198__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23199){var e_23484 = e23199;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23484);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23484.message)].join('')));
}

var G__23485 = cljs.core.next(seq__23183__$1);
var G__23486 = null;
var G__23487 = (0);
var G__23488 = (0);
seq__23183 = G__23485;
chunk__23184 = G__23486;
count__23185 = G__23487;
i__23186 = G__23488;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__23200 = cljs.core.seq(js_requires);
var chunk__23201 = null;
var count__23202 = (0);
var i__23203 = (0);
while(true){
if((i__23203 < count__23202)){
var js_ns = chunk__23201.cljs$core$IIndexed$_nth$arity$2(null,i__23203);
var require_str_23489 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23489);


var G__23490 = seq__23200;
var G__23491 = chunk__23201;
var G__23492 = count__23202;
var G__23493 = (i__23203 + (1));
seq__23200 = G__23490;
chunk__23201 = G__23491;
count__23202 = G__23492;
i__23203 = G__23493;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23200);
if(temp__5804__auto__){
var seq__23200__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23200__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23200__$1);
var G__23494 = cljs.core.chunk_rest(seq__23200__$1);
var G__23495 = c__5525__auto__;
var G__23496 = cljs.core.count(c__5525__auto__);
var G__23497 = (0);
seq__23200 = G__23494;
chunk__23201 = G__23495;
count__23202 = G__23496;
i__23203 = G__23497;
continue;
} else {
var js_ns = cljs.core.first(seq__23200__$1);
var require_str_23498 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23498);


var G__23499 = cljs.core.next(seq__23200__$1);
var G__23500 = null;
var G__23501 = (0);
var G__23502 = (0);
seq__23200 = G__23499;
chunk__23201 = G__23500;
count__23202 = G__23501;
i__23203 = G__23502;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__23205){
var map__23206 = p__23205;
var map__23206__$1 = cljs.core.__destructure_map(map__23206);
var msg = map__23206__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23206__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23206__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23207(s__23208){
return (new cljs.core.LazySeq(null,(function (){
var s__23208__$1 = s__23208;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23208__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__23213 = cljs.core.first(xs__6360__auto__);
var map__23213__$1 = cljs.core.__destructure_map(map__23213);
var src = map__23213__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23213__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23213__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__23208__$1,map__23213,map__23213__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23206,map__23206__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23207_$_iter__23209(s__23210){
return (new cljs.core.LazySeq(null,((function (s__23208__$1,map__23213,map__23213__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23206,map__23206__$1,msg,info,reload_info){
return (function (){
var s__23210__$1 = s__23210;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__23210__$1);
if(temp__5804__auto____$1){
var s__23210__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23210__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23210__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23212 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23211 = (0);
while(true){
if((i__23211 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__23211);
cljs.core.chunk_append(b__23212,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23503 = (i__23211 + (1));
i__23211 = G__23503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23212),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23207_$_iter__23209(cljs.core.chunk_rest(s__23210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23212),null);
}
} else {
var warning = cljs.core.first(s__23210__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23207_$_iter__23209(cljs.core.rest(s__23210__$2)));
}
} else {
return null;
}
break;
}
});})(s__23208__$1,map__23213,map__23213__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23206,map__23206__$1,msg,info,reload_info))
,null,null));
});})(s__23208__$1,map__23213,map__23213__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23206,map__23206__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23207(cljs.core.rest(s__23208__$1)));
} else {
var G__23504 = cljs.core.rest(s__23208__$1);
s__23208__$1 = G__23504;
continue;
}
} else {
var G__23505 = cljs.core.rest(s__23208__$1);
s__23208__$1 = G__23505;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__23216_23506 = cljs.core.seq(warnings);
var chunk__23217_23507 = null;
var count__23218_23508 = (0);
var i__23219_23509 = (0);
while(true){
if((i__23219_23509 < count__23218_23508)){
var map__23222_23510 = chunk__23217_23507.cljs$core$IIndexed$_nth$arity$2(null,i__23219_23509);
var map__23222_23511__$1 = cljs.core.__destructure_map(map__23222_23510);
var w_23512 = map__23222_23511__$1;
var msg_23513__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23222_23511__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23222_23511__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23222_23511__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23222_23511__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23516)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23514),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23515),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23513__$1)].join(''));


var G__23517 = seq__23216_23506;
var G__23518 = chunk__23217_23507;
var G__23519 = count__23218_23508;
var G__23520 = (i__23219_23509 + (1));
seq__23216_23506 = G__23517;
chunk__23217_23507 = G__23518;
count__23218_23508 = G__23519;
i__23219_23509 = G__23520;
continue;
} else {
var temp__5804__auto___23521 = cljs.core.seq(seq__23216_23506);
if(temp__5804__auto___23521){
var seq__23216_23522__$1 = temp__5804__auto___23521;
if(cljs.core.chunked_seq_QMARK_(seq__23216_23522__$1)){
var c__5525__auto___23523 = cljs.core.chunk_first(seq__23216_23522__$1);
var G__23524 = cljs.core.chunk_rest(seq__23216_23522__$1);
var G__23525 = c__5525__auto___23523;
var G__23526 = cljs.core.count(c__5525__auto___23523);
var G__23527 = (0);
seq__23216_23506 = G__23524;
chunk__23217_23507 = G__23525;
count__23218_23508 = G__23526;
i__23219_23509 = G__23527;
continue;
} else {
var map__23223_23528 = cljs.core.first(seq__23216_23522__$1);
var map__23223_23529__$1 = cljs.core.__destructure_map(map__23223_23528);
var w_23530 = map__23223_23529__$1;
var msg_23531__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23223_23529__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23223_23529__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23223_23529__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23223_23529__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23534)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23532),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23533),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23531__$1)].join(''));


var G__23535 = cljs.core.next(seq__23216_23522__$1);
var G__23536 = null;
var G__23537 = (0);
var G__23538 = (0);
seq__23216_23506 = G__23535;
chunk__23217_23507 = G__23536;
count__23218_23508 = G__23537;
i__23219_23509 = G__23538;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__23204_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__23204_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__23225 = node_uri;
G__23225.setQuery(null);

G__23225.setPath(new$);

return G__23225;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__23226){
var map__23227 = p__23226;
var map__23227__$1 = cljs.core.__destructure_map(map__23227);
var msg = map__23227__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23227__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23227__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__23228 = cljs.core.seq(updates);
var chunk__23230 = null;
var count__23231 = (0);
var i__23232 = (0);
while(true){
if((i__23232 < count__23231)){
var path = chunk__23230.cljs$core$IIndexed$_nth$arity$2(null,i__23232);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23342_23539 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23346_23540 = null;
var count__23347_23541 = (0);
var i__23348_23542 = (0);
while(true){
if((i__23348_23542 < count__23347_23541)){
var node_23543 = chunk__23346_23540.cljs$core$IIndexed$_nth$arity$2(null,i__23348_23542);
if(cljs.core.not(node_23543.shadow$old)){
var path_match_23544 = shadow.cljs.devtools.client.browser.match_paths(node_23543.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23544)){
var new_link_23545 = (function (){var G__23374 = node_23543.cloneNode(true);
G__23374.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23544),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23374;
})();
(node_23543.shadow$old = true);

(new_link_23545.onload = ((function (seq__23342_23539,chunk__23346_23540,count__23347_23541,i__23348_23542,seq__23228,chunk__23230,count__23231,i__23232,new_link_23545,path_match_23544,node_23543,path,map__23227,map__23227__$1,msg,updates,reload_info){
return (function (e){
var seq__23375_23546 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23377_23547 = null;
var count__23378_23548 = (0);
var i__23379_23549 = (0);
while(true){
if((i__23379_23549 < count__23378_23548)){
var map__23383_23550 = chunk__23377_23547.cljs$core$IIndexed$_nth$arity$2(null,i__23379_23549);
var map__23383_23551__$1 = cljs.core.__destructure_map(map__23383_23550);
var task_23552 = map__23383_23551__$1;
var fn_str_23553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23383_23551__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23383_23551__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23555 = goog.getObjectByName(fn_str_23553,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23554)].join(''));

(fn_obj_23555.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23555.cljs$core$IFn$_invoke$arity$2(path,new_link_23545) : fn_obj_23555.call(null,path,new_link_23545));


var G__23556 = seq__23375_23546;
var G__23557 = chunk__23377_23547;
var G__23558 = count__23378_23548;
var G__23559 = (i__23379_23549 + (1));
seq__23375_23546 = G__23556;
chunk__23377_23547 = G__23557;
count__23378_23548 = G__23558;
i__23379_23549 = G__23559;
continue;
} else {
var temp__5804__auto___23560 = cljs.core.seq(seq__23375_23546);
if(temp__5804__auto___23560){
var seq__23375_23561__$1 = temp__5804__auto___23560;
if(cljs.core.chunked_seq_QMARK_(seq__23375_23561__$1)){
var c__5525__auto___23562 = cljs.core.chunk_first(seq__23375_23561__$1);
var G__23563 = cljs.core.chunk_rest(seq__23375_23561__$1);
var G__23564 = c__5525__auto___23562;
var G__23565 = cljs.core.count(c__5525__auto___23562);
var G__23566 = (0);
seq__23375_23546 = G__23563;
chunk__23377_23547 = G__23564;
count__23378_23548 = G__23565;
i__23379_23549 = G__23566;
continue;
} else {
var map__23384_23567 = cljs.core.first(seq__23375_23561__$1);
var map__23384_23568__$1 = cljs.core.__destructure_map(map__23384_23567);
var task_23569 = map__23384_23568__$1;
var fn_str_23570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23384_23568__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23384_23568__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23572 = goog.getObjectByName(fn_str_23570,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23571)].join(''));

(fn_obj_23572.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23572.cljs$core$IFn$_invoke$arity$2(path,new_link_23545) : fn_obj_23572.call(null,path,new_link_23545));


var G__23573 = cljs.core.next(seq__23375_23561__$1);
var G__23574 = null;
var G__23575 = (0);
var G__23576 = (0);
seq__23375_23546 = G__23573;
chunk__23377_23547 = G__23574;
count__23378_23548 = G__23575;
i__23379_23549 = G__23576;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23543);
});})(seq__23342_23539,chunk__23346_23540,count__23347_23541,i__23348_23542,seq__23228,chunk__23230,count__23231,i__23232,new_link_23545,path_match_23544,node_23543,path,map__23227,map__23227__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23544], 0));

goog.dom.insertSiblingAfter(new_link_23545,node_23543);


var G__23577 = seq__23342_23539;
var G__23578 = chunk__23346_23540;
var G__23579 = count__23347_23541;
var G__23580 = (i__23348_23542 + (1));
seq__23342_23539 = G__23577;
chunk__23346_23540 = G__23578;
count__23347_23541 = G__23579;
i__23348_23542 = G__23580;
continue;
} else {
var G__23581 = seq__23342_23539;
var G__23582 = chunk__23346_23540;
var G__23583 = count__23347_23541;
var G__23584 = (i__23348_23542 + (1));
seq__23342_23539 = G__23581;
chunk__23346_23540 = G__23582;
count__23347_23541 = G__23583;
i__23348_23542 = G__23584;
continue;
}
} else {
var G__23585 = seq__23342_23539;
var G__23586 = chunk__23346_23540;
var G__23587 = count__23347_23541;
var G__23588 = (i__23348_23542 + (1));
seq__23342_23539 = G__23585;
chunk__23346_23540 = G__23586;
count__23347_23541 = G__23587;
i__23348_23542 = G__23588;
continue;
}
} else {
var temp__5804__auto___23589 = cljs.core.seq(seq__23342_23539);
if(temp__5804__auto___23589){
var seq__23342_23590__$1 = temp__5804__auto___23589;
if(cljs.core.chunked_seq_QMARK_(seq__23342_23590__$1)){
var c__5525__auto___23591 = cljs.core.chunk_first(seq__23342_23590__$1);
var G__23592 = cljs.core.chunk_rest(seq__23342_23590__$1);
var G__23593 = c__5525__auto___23591;
var G__23594 = cljs.core.count(c__5525__auto___23591);
var G__23595 = (0);
seq__23342_23539 = G__23592;
chunk__23346_23540 = G__23593;
count__23347_23541 = G__23594;
i__23348_23542 = G__23595;
continue;
} else {
var node_23596 = cljs.core.first(seq__23342_23590__$1);
if(cljs.core.not(node_23596.shadow$old)){
var path_match_23597 = shadow.cljs.devtools.client.browser.match_paths(node_23596.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23597)){
var new_link_23598 = (function (){var G__23385 = node_23596.cloneNode(true);
G__23385.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23597),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23385;
})();
(node_23596.shadow$old = true);

(new_link_23598.onload = ((function (seq__23342_23539,chunk__23346_23540,count__23347_23541,i__23348_23542,seq__23228,chunk__23230,count__23231,i__23232,new_link_23598,path_match_23597,node_23596,seq__23342_23590__$1,temp__5804__auto___23589,path,map__23227,map__23227__$1,msg,updates,reload_info){
return (function (e){
var seq__23386_23599 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23388_23600 = null;
var count__23389_23601 = (0);
var i__23390_23602 = (0);
while(true){
if((i__23390_23602 < count__23389_23601)){
var map__23394_23603 = chunk__23388_23600.cljs$core$IIndexed$_nth$arity$2(null,i__23390_23602);
var map__23394_23604__$1 = cljs.core.__destructure_map(map__23394_23603);
var task_23605 = map__23394_23604__$1;
var fn_str_23606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23394_23604__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23394_23604__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23608 = goog.getObjectByName(fn_str_23606,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23607)].join(''));

(fn_obj_23608.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23608.cljs$core$IFn$_invoke$arity$2(path,new_link_23598) : fn_obj_23608.call(null,path,new_link_23598));


var G__23609 = seq__23386_23599;
var G__23610 = chunk__23388_23600;
var G__23611 = count__23389_23601;
var G__23612 = (i__23390_23602 + (1));
seq__23386_23599 = G__23609;
chunk__23388_23600 = G__23610;
count__23389_23601 = G__23611;
i__23390_23602 = G__23612;
continue;
} else {
var temp__5804__auto___23613__$1 = cljs.core.seq(seq__23386_23599);
if(temp__5804__auto___23613__$1){
var seq__23386_23614__$1 = temp__5804__auto___23613__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23386_23614__$1)){
var c__5525__auto___23615 = cljs.core.chunk_first(seq__23386_23614__$1);
var G__23616 = cljs.core.chunk_rest(seq__23386_23614__$1);
var G__23617 = c__5525__auto___23615;
var G__23618 = cljs.core.count(c__5525__auto___23615);
var G__23619 = (0);
seq__23386_23599 = G__23616;
chunk__23388_23600 = G__23617;
count__23389_23601 = G__23618;
i__23390_23602 = G__23619;
continue;
} else {
var map__23395_23620 = cljs.core.first(seq__23386_23614__$1);
var map__23395_23621__$1 = cljs.core.__destructure_map(map__23395_23620);
var task_23622 = map__23395_23621__$1;
var fn_str_23623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23395_23621__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23395_23621__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23625 = goog.getObjectByName(fn_str_23623,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23624)].join(''));

(fn_obj_23625.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23625.cljs$core$IFn$_invoke$arity$2(path,new_link_23598) : fn_obj_23625.call(null,path,new_link_23598));


var G__23626 = cljs.core.next(seq__23386_23614__$1);
var G__23627 = null;
var G__23628 = (0);
var G__23629 = (0);
seq__23386_23599 = G__23626;
chunk__23388_23600 = G__23627;
count__23389_23601 = G__23628;
i__23390_23602 = G__23629;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23596);
});})(seq__23342_23539,chunk__23346_23540,count__23347_23541,i__23348_23542,seq__23228,chunk__23230,count__23231,i__23232,new_link_23598,path_match_23597,node_23596,seq__23342_23590__$1,temp__5804__auto___23589,path,map__23227,map__23227__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23597], 0));

goog.dom.insertSiblingAfter(new_link_23598,node_23596);


var G__23630 = cljs.core.next(seq__23342_23590__$1);
var G__23631 = null;
var G__23632 = (0);
var G__23633 = (0);
seq__23342_23539 = G__23630;
chunk__23346_23540 = G__23631;
count__23347_23541 = G__23632;
i__23348_23542 = G__23633;
continue;
} else {
var G__23634 = cljs.core.next(seq__23342_23590__$1);
var G__23635 = null;
var G__23636 = (0);
var G__23637 = (0);
seq__23342_23539 = G__23634;
chunk__23346_23540 = G__23635;
count__23347_23541 = G__23636;
i__23348_23542 = G__23637;
continue;
}
} else {
var G__23638 = cljs.core.next(seq__23342_23590__$1);
var G__23639 = null;
var G__23640 = (0);
var G__23641 = (0);
seq__23342_23539 = G__23638;
chunk__23346_23540 = G__23639;
count__23347_23541 = G__23640;
i__23348_23542 = G__23641;
continue;
}
}
} else {
}
}
break;
}


var G__23642 = seq__23228;
var G__23643 = chunk__23230;
var G__23644 = count__23231;
var G__23645 = (i__23232 + (1));
seq__23228 = G__23642;
chunk__23230 = G__23643;
count__23231 = G__23644;
i__23232 = G__23645;
continue;
} else {
var G__23646 = seq__23228;
var G__23647 = chunk__23230;
var G__23648 = count__23231;
var G__23649 = (i__23232 + (1));
seq__23228 = G__23646;
chunk__23230 = G__23647;
count__23231 = G__23648;
i__23232 = G__23649;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23228);
if(temp__5804__auto__){
var seq__23228__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23228__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23228__$1);
var G__23650 = cljs.core.chunk_rest(seq__23228__$1);
var G__23651 = c__5525__auto__;
var G__23652 = cljs.core.count(c__5525__auto__);
var G__23653 = (0);
seq__23228 = G__23650;
chunk__23230 = G__23651;
count__23231 = G__23652;
i__23232 = G__23653;
continue;
} else {
var path = cljs.core.first(seq__23228__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23396_23654 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23400_23655 = null;
var count__23401_23656 = (0);
var i__23402_23657 = (0);
while(true){
if((i__23402_23657 < count__23401_23656)){
var node_23658 = chunk__23400_23655.cljs$core$IIndexed$_nth$arity$2(null,i__23402_23657);
if(cljs.core.not(node_23658.shadow$old)){
var path_match_23659 = shadow.cljs.devtools.client.browser.match_paths(node_23658.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23659)){
var new_link_23660 = (function (){var G__23428 = node_23658.cloneNode(true);
G__23428.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23659),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23428;
})();
(node_23658.shadow$old = true);

(new_link_23660.onload = ((function (seq__23396_23654,chunk__23400_23655,count__23401_23656,i__23402_23657,seq__23228,chunk__23230,count__23231,i__23232,new_link_23660,path_match_23659,node_23658,path,seq__23228__$1,temp__5804__auto__,map__23227,map__23227__$1,msg,updates,reload_info){
return (function (e){
var seq__23429_23661 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23431_23662 = null;
var count__23432_23663 = (0);
var i__23433_23664 = (0);
while(true){
if((i__23433_23664 < count__23432_23663)){
var map__23437_23665 = chunk__23431_23662.cljs$core$IIndexed$_nth$arity$2(null,i__23433_23664);
var map__23437_23666__$1 = cljs.core.__destructure_map(map__23437_23665);
var task_23667 = map__23437_23666__$1;
var fn_str_23668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23437_23666__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23437_23666__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23670 = goog.getObjectByName(fn_str_23668,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23669)].join(''));

(fn_obj_23670.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23670.cljs$core$IFn$_invoke$arity$2(path,new_link_23660) : fn_obj_23670.call(null,path,new_link_23660));


var G__23671 = seq__23429_23661;
var G__23672 = chunk__23431_23662;
var G__23673 = count__23432_23663;
var G__23674 = (i__23433_23664 + (1));
seq__23429_23661 = G__23671;
chunk__23431_23662 = G__23672;
count__23432_23663 = G__23673;
i__23433_23664 = G__23674;
continue;
} else {
var temp__5804__auto___23675__$1 = cljs.core.seq(seq__23429_23661);
if(temp__5804__auto___23675__$1){
var seq__23429_23676__$1 = temp__5804__auto___23675__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23429_23676__$1)){
var c__5525__auto___23677 = cljs.core.chunk_first(seq__23429_23676__$1);
var G__23678 = cljs.core.chunk_rest(seq__23429_23676__$1);
var G__23679 = c__5525__auto___23677;
var G__23680 = cljs.core.count(c__5525__auto___23677);
var G__23681 = (0);
seq__23429_23661 = G__23678;
chunk__23431_23662 = G__23679;
count__23432_23663 = G__23680;
i__23433_23664 = G__23681;
continue;
} else {
var map__23438_23682 = cljs.core.first(seq__23429_23676__$1);
var map__23438_23683__$1 = cljs.core.__destructure_map(map__23438_23682);
var task_23684 = map__23438_23683__$1;
var fn_str_23685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23438_23683__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23438_23683__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23687 = goog.getObjectByName(fn_str_23685,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23686)].join(''));

(fn_obj_23687.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23687.cljs$core$IFn$_invoke$arity$2(path,new_link_23660) : fn_obj_23687.call(null,path,new_link_23660));


var G__23688 = cljs.core.next(seq__23429_23676__$1);
var G__23689 = null;
var G__23690 = (0);
var G__23691 = (0);
seq__23429_23661 = G__23688;
chunk__23431_23662 = G__23689;
count__23432_23663 = G__23690;
i__23433_23664 = G__23691;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23658);
});})(seq__23396_23654,chunk__23400_23655,count__23401_23656,i__23402_23657,seq__23228,chunk__23230,count__23231,i__23232,new_link_23660,path_match_23659,node_23658,path,seq__23228__$1,temp__5804__auto__,map__23227,map__23227__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23659], 0));

goog.dom.insertSiblingAfter(new_link_23660,node_23658);


var G__23692 = seq__23396_23654;
var G__23693 = chunk__23400_23655;
var G__23694 = count__23401_23656;
var G__23695 = (i__23402_23657 + (1));
seq__23396_23654 = G__23692;
chunk__23400_23655 = G__23693;
count__23401_23656 = G__23694;
i__23402_23657 = G__23695;
continue;
} else {
var G__23696 = seq__23396_23654;
var G__23697 = chunk__23400_23655;
var G__23698 = count__23401_23656;
var G__23699 = (i__23402_23657 + (1));
seq__23396_23654 = G__23696;
chunk__23400_23655 = G__23697;
count__23401_23656 = G__23698;
i__23402_23657 = G__23699;
continue;
}
} else {
var G__23700 = seq__23396_23654;
var G__23701 = chunk__23400_23655;
var G__23702 = count__23401_23656;
var G__23703 = (i__23402_23657 + (1));
seq__23396_23654 = G__23700;
chunk__23400_23655 = G__23701;
count__23401_23656 = G__23702;
i__23402_23657 = G__23703;
continue;
}
} else {
var temp__5804__auto___23704__$1 = cljs.core.seq(seq__23396_23654);
if(temp__5804__auto___23704__$1){
var seq__23396_23705__$1 = temp__5804__auto___23704__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23396_23705__$1)){
var c__5525__auto___23706 = cljs.core.chunk_first(seq__23396_23705__$1);
var G__23707 = cljs.core.chunk_rest(seq__23396_23705__$1);
var G__23708 = c__5525__auto___23706;
var G__23709 = cljs.core.count(c__5525__auto___23706);
var G__23710 = (0);
seq__23396_23654 = G__23707;
chunk__23400_23655 = G__23708;
count__23401_23656 = G__23709;
i__23402_23657 = G__23710;
continue;
} else {
var node_23711 = cljs.core.first(seq__23396_23705__$1);
if(cljs.core.not(node_23711.shadow$old)){
var path_match_23712 = shadow.cljs.devtools.client.browser.match_paths(node_23711.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23712)){
var new_link_23713 = (function (){var G__23439 = node_23711.cloneNode(true);
G__23439.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23712),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23439;
})();
(node_23711.shadow$old = true);

(new_link_23713.onload = ((function (seq__23396_23654,chunk__23400_23655,count__23401_23656,i__23402_23657,seq__23228,chunk__23230,count__23231,i__23232,new_link_23713,path_match_23712,node_23711,seq__23396_23705__$1,temp__5804__auto___23704__$1,path,seq__23228__$1,temp__5804__auto__,map__23227,map__23227__$1,msg,updates,reload_info){
return (function (e){
var seq__23440_23714 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23442_23715 = null;
var count__23443_23716 = (0);
var i__23444_23717 = (0);
while(true){
if((i__23444_23717 < count__23443_23716)){
var map__23448_23718 = chunk__23442_23715.cljs$core$IIndexed$_nth$arity$2(null,i__23444_23717);
var map__23448_23719__$1 = cljs.core.__destructure_map(map__23448_23718);
var task_23720 = map__23448_23719__$1;
var fn_str_23721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23448_23719__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23448_23719__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23723 = goog.getObjectByName(fn_str_23721,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23722)].join(''));

(fn_obj_23723.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23723.cljs$core$IFn$_invoke$arity$2(path,new_link_23713) : fn_obj_23723.call(null,path,new_link_23713));


var G__23724 = seq__23440_23714;
var G__23725 = chunk__23442_23715;
var G__23726 = count__23443_23716;
var G__23727 = (i__23444_23717 + (1));
seq__23440_23714 = G__23724;
chunk__23442_23715 = G__23725;
count__23443_23716 = G__23726;
i__23444_23717 = G__23727;
continue;
} else {
var temp__5804__auto___23728__$2 = cljs.core.seq(seq__23440_23714);
if(temp__5804__auto___23728__$2){
var seq__23440_23729__$1 = temp__5804__auto___23728__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23440_23729__$1)){
var c__5525__auto___23730 = cljs.core.chunk_first(seq__23440_23729__$1);
var G__23731 = cljs.core.chunk_rest(seq__23440_23729__$1);
var G__23732 = c__5525__auto___23730;
var G__23733 = cljs.core.count(c__5525__auto___23730);
var G__23734 = (0);
seq__23440_23714 = G__23731;
chunk__23442_23715 = G__23732;
count__23443_23716 = G__23733;
i__23444_23717 = G__23734;
continue;
} else {
var map__23449_23735 = cljs.core.first(seq__23440_23729__$1);
var map__23449_23736__$1 = cljs.core.__destructure_map(map__23449_23735);
var task_23737 = map__23449_23736__$1;
var fn_str_23738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23449_23736__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23449_23736__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23740 = goog.getObjectByName(fn_str_23738,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23739)].join(''));

(fn_obj_23740.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23740.cljs$core$IFn$_invoke$arity$2(path,new_link_23713) : fn_obj_23740.call(null,path,new_link_23713));


var G__23741 = cljs.core.next(seq__23440_23729__$1);
var G__23742 = null;
var G__23743 = (0);
var G__23744 = (0);
seq__23440_23714 = G__23741;
chunk__23442_23715 = G__23742;
count__23443_23716 = G__23743;
i__23444_23717 = G__23744;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23711);
});})(seq__23396_23654,chunk__23400_23655,count__23401_23656,i__23402_23657,seq__23228,chunk__23230,count__23231,i__23232,new_link_23713,path_match_23712,node_23711,seq__23396_23705__$1,temp__5804__auto___23704__$1,path,seq__23228__$1,temp__5804__auto__,map__23227,map__23227__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23712], 0));

goog.dom.insertSiblingAfter(new_link_23713,node_23711);


var G__23745 = cljs.core.next(seq__23396_23705__$1);
var G__23746 = null;
var G__23747 = (0);
var G__23748 = (0);
seq__23396_23654 = G__23745;
chunk__23400_23655 = G__23746;
count__23401_23656 = G__23747;
i__23402_23657 = G__23748;
continue;
} else {
var G__23749 = cljs.core.next(seq__23396_23705__$1);
var G__23750 = null;
var G__23751 = (0);
var G__23752 = (0);
seq__23396_23654 = G__23749;
chunk__23400_23655 = G__23750;
count__23401_23656 = G__23751;
i__23402_23657 = G__23752;
continue;
}
} else {
var G__23753 = cljs.core.next(seq__23396_23705__$1);
var G__23754 = null;
var G__23755 = (0);
var G__23756 = (0);
seq__23396_23654 = G__23753;
chunk__23400_23655 = G__23754;
count__23401_23656 = G__23755;
i__23402_23657 = G__23756;
continue;
}
}
} else {
}
}
break;
}


var G__23757 = cljs.core.next(seq__23228__$1);
var G__23758 = null;
var G__23759 = (0);
var G__23760 = (0);
seq__23228 = G__23757;
chunk__23230 = G__23758;
count__23231 = G__23759;
i__23232 = G__23760;
continue;
} else {
var G__23761 = cljs.core.next(seq__23228__$1);
var G__23762 = null;
var G__23763 = (0);
var G__23764 = (0);
seq__23228 = G__23761;
chunk__23230 = G__23762;
count__23231 = G__23763;
i__23232 = G__23764;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__23451 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23451) : success.call(null,G__23451));
}catch (e23450){var e = e23450;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__23452,success,fail){
var map__23453 = p__23452;
var map__23453__$1 = cljs.core.__destructure_map(map__23453);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23453__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__23455 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23455) : success.call(null,G__23455));
}catch (e23454){var e = e23454;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23456,done,error){
var map__23457 = p__23456;
var map__23457__$1 = cljs.core.__destructure_map(map__23457);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23457__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23458,done,error){
var map__23459 = p__23458;
var map__23459__$1 = cljs.core.__destructure_map(map__23459);
var msg = map__23459__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23459__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23459__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23459__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23460){
var map__23461 = p__23460;
var map__23461__$1 = cljs.core.__destructure_map(map__23461);
var src = map__23461__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23461__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23462 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23462) : done.call(null,G__23462));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23463){
var map__23464 = p__23463;
var map__23464__$1 = cljs.core.__destructure_map(map__23464);
var msg__$1 = map__23464__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23464__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23465){var ex = e23465;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23466){
var map__23467 = p__23466;
var map__23467__$1 = cljs.core.__destructure_map(map__23467);
var env = map__23467__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23467__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23468){
var map__23469 = p__23468;
var map__23469__$1 = cljs.core.__destructure_map(map__23469);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23469__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23469__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23470){
var map__23471 = p__23470;
var map__23471__$1 = cljs.core.__destructure_map(map__23471);
var svc = map__23471__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23471__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
