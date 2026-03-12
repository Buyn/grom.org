goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__16482__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16492__i = 0, G__16492__a = new Array(arguments.length -  0);
while (G__16492__i < G__16492__a.length) {G__16492__a[G__16492__i] = arguments[G__16492__i + 0]; ++G__16492__i;}
  args = new cljs.core.IndexedSeq(G__16492__a,0,null);
} 
return G__16482__delegate.call(this,args);};
G__16482.cljs$lang$maxFixedArity = 0;
G__16482.cljs$lang$applyTo = (function (arglist__16497){
var args = cljs.core.seq(arglist__16497);
return G__16482__delegate(args);
});
G__16482.cljs$core$IFn$_invoke$arity$variadic = G__16482__delegate;
return G__16482;
})()
);

(o.error = (function() { 
var G__16509__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16523__i = 0, G__16523__a = new Array(arguments.length -  0);
while (G__16523__i < G__16523__a.length) {G__16523__a[G__16523__i] = arguments[G__16523__i + 0]; ++G__16523__i;}
  args = new cljs.core.IndexedSeq(G__16523__a,0,null);
} 
return G__16509__delegate.call(this,args);};
G__16509.cljs$lang$maxFixedArity = 0;
G__16509.cljs$lang$applyTo = (function (arglist__16524){
var args = cljs.core.seq(arglist__16524);
return G__16509__delegate(args);
});
G__16509.cljs$core$IFn$_invoke$arity$variadic = G__16509__delegate;
return G__16509;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
