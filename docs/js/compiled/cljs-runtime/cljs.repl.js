goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20064){
var map__20065 = p__20064;
var map__20065__$1 = cljs.core.__destructure_map(map__20065);
var m = map__20065__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20065__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20065__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20089_20562 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20090_20563 = null;
var count__20091_20564 = (0);
var i__20092_20565 = (0);
while(true){
if((i__20092_20565 < count__20091_20564)){
var f_20566 = chunk__20090_20563.cljs$core$IIndexed$_nth$arity$2(null,i__20092_20565);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20566], 0));


var G__20567 = seq__20089_20562;
var G__20568 = chunk__20090_20563;
var G__20569 = count__20091_20564;
var G__20570 = (i__20092_20565 + (1));
seq__20089_20562 = G__20567;
chunk__20090_20563 = G__20568;
count__20091_20564 = G__20569;
i__20092_20565 = G__20570;
continue;
} else {
var temp__5804__auto___20571 = cljs.core.seq(seq__20089_20562);
if(temp__5804__auto___20571){
var seq__20089_20572__$1 = temp__5804__auto___20571;
if(cljs.core.chunked_seq_QMARK_(seq__20089_20572__$1)){
var c__5525__auto___20573 = cljs.core.chunk_first(seq__20089_20572__$1);
var G__20575 = cljs.core.chunk_rest(seq__20089_20572__$1);
var G__20576 = c__5525__auto___20573;
var G__20577 = cljs.core.count(c__5525__auto___20573);
var G__20578 = (0);
seq__20089_20562 = G__20575;
chunk__20090_20563 = G__20576;
count__20091_20564 = G__20577;
i__20092_20565 = G__20578;
continue;
} else {
var f_20579 = cljs.core.first(seq__20089_20572__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20579], 0));


var G__20580 = cljs.core.next(seq__20089_20572__$1);
var G__20581 = null;
var G__20582 = (0);
var G__20583 = (0);
seq__20089_20562 = G__20580;
chunk__20090_20563 = G__20581;
count__20091_20564 = G__20582;
i__20092_20565 = G__20583;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20587 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20587], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20587)))?cljs.core.second(arglists_20587):arglists_20587)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20150_20593 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20151_20594 = null;
var count__20152_20595 = (0);
var i__20153_20596 = (0);
while(true){
if((i__20153_20596 < count__20152_20595)){
var vec__20179_20597 = chunk__20151_20594.cljs$core$IIndexed$_nth$arity$2(null,i__20153_20596);
var name_20598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20179_20597,(0),null);
var map__20182_20599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20179_20597,(1),null);
var map__20182_20601__$1 = cljs.core.__destructure_map(map__20182_20599);
var doc_20602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20182_20601__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20182_20601__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20598], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20603], 0));

if(cljs.core.truth_(doc_20602)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20602], 0));
} else {
}


var G__20606 = seq__20150_20593;
var G__20607 = chunk__20151_20594;
var G__20608 = count__20152_20595;
var G__20609 = (i__20153_20596 + (1));
seq__20150_20593 = G__20606;
chunk__20151_20594 = G__20607;
count__20152_20595 = G__20608;
i__20153_20596 = G__20609;
continue;
} else {
var temp__5804__auto___20611 = cljs.core.seq(seq__20150_20593);
if(temp__5804__auto___20611){
var seq__20150_20616__$1 = temp__5804__auto___20611;
if(cljs.core.chunked_seq_QMARK_(seq__20150_20616__$1)){
var c__5525__auto___20617 = cljs.core.chunk_first(seq__20150_20616__$1);
var G__20618 = cljs.core.chunk_rest(seq__20150_20616__$1);
var G__20619 = c__5525__auto___20617;
var G__20620 = cljs.core.count(c__5525__auto___20617);
var G__20621 = (0);
seq__20150_20593 = G__20618;
chunk__20151_20594 = G__20619;
count__20152_20595 = G__20620;
i__20153_20596 = G__20621;
continue;
} else {
var vec__20201_20622 = cljs.core.first(seq__20150_20616__$1);
var name_20623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20201_20622,(0),null);
var map__20204_20624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20201_20622,(1),null);
var map__20204_20625__$1 = cljs.core.__destructure_map(map__20204_20624);
var doc_20626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20204_20625__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20204_20625__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20623], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20627], 0));

if(cljs.core.truth_(doc_20626)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20626], 0));
} else {
}


var G__20629 = cljs.core.next(seq__20150_20616__$1);
var G__20630 = null;
var G__20631 = (0);
var G__20632 = (0);
seq__20150_20593 = G__20629;
chunk__20151_20594 = G__20630;
count__20152_20595 = G__20631;
i__20153_20596 = G__20632;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20249 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20250 = null;
var count__20251 = (0);
var i__20252 = (0);
while(true){
if((i__20252 < count__20251)){
var role = chunk__20250.cljs$core$IIndexed$_nth$arity$2(null,i__20252);
var temp__5804__auto___20634__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20634__$1)){
var spec_20635 = temp__5804__auto___20634__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20635)], 0));
} else {
}


var G__20636 = seq__20249;
var G__20637 = chunk__20250;
var G__20638 = count__20251;
var G__20639 = (i__20252 + (1));
seq__20249 = G__20636;
chunk__20250 = G__20637;
count__20251 = G__20638;
i__20252 = G__20639;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20249);
if(temp__5804__auto____$1){
var seq__20249__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20249__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20249__$1);
var G__20640 = cljs.core.chunk_rest(seq__20249__$1);
var G__20641 = c__5525__auto__;
var G__20642 = cljs.core.count(c__5525__auto__);
var G__20643 = (0);
seq__20249 = G__20640;
chunk__20250 = G__20641;
count__20251 = G__20642;
i__20252 = G__20643;
continue;
} else {
var role = cljs.core.first(seq__20249__$1);
var temp__5804__auto___20644__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20644__$2)){
var spec_20645 = temp__5804__auto___20644__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20645)], 0));
} else {
}


var G__20647 = cljs.core.next(seq__20249__$1);
var G__20648 = null;
var G__20649 = (0);
var G__20650 = (0);
seq__20249 = G__20647;
chunk__20250 = G__20648;
count__20251 = G__20649;
i__20252 = G__20650;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20382 = datafied_throwable;
var map__20382__$1 = cljs.core.__destructure_map(map__20382);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20382__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20382__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20382__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20383 = cljs.core.last(via);
var map__20383__$1 = cljs.core.__destructure_map(map__20383);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20383__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20383__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20383__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20384 = data;
var map__20384__$1 = cljs.core.__destructure_map(map__20384);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20384__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20384__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20384__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20385 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20385__$1 = cljs.core.__destructure_map(map__20385);
var top_data = map__20385__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20385__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20396 = phase;
var G__20396__$1 = (((G__20396 instanceof cljs.core.Keyword))?G__20396.fqn:null);
switch (G__20396__$1) {
case "read-source":
var map__20397 = data;
var map__20397__$1 = cljs.core.__destructure_map(map__20397);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20397__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20397__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20398 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20398__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20398,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20398);
var G__20398__$2 = (cljs.core.truth_((function (){var fexpr__20400 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20400.cljs$core$IFn$_invoke$arity$1 ? fexpr__20400.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20400.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20398__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20398__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20398__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20398__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20404 = top_data;
var G__20404__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20404,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20404);
var G__20404__$2 = (cljs.core.truth_((function (){var fexpr__20410 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20410.cljs$core$IFn$_invoke$arity$1 ? fexpr__20410.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20410.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20404__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20404__$1);
var G__20404__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20404__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20404__$2);
var G__20404__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20404__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20404__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20404__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20404__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20415 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20415,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20415,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20415,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20415,(3),null);
var G__20427 = top_data;
var G__20427__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20427,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20427);
var G__20427__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20427__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20427__$1);
var G__20427__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20427__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20427__$2);
var G__20427__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20427__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20427__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20427__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20427__$4;
}

break;
case "execution":
var vec__20433 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20364_SHARP_){
var or__5002__auto__ = (p1__20364_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__20438 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20438.cljs$core$IFn$_invoke$arity$1 ? fexpr__20438.cljs$core$IFn$_invoke$arity$1(p1__20364_SHARP_) : fexpr__20438.call(null,p1__20364_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__20439 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20439__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20439,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20439);
var G__20439__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20439__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20439__$1);
var G__20439__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20439__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20439__$2);
var G__20439__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20439__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20439__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20439__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20439__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20396__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20449){
var map__20450 = p__20449;
var map__20450__$1 = cljs.core.__destructure_map(map__20450);
var triage_data = map__20450__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20461 = phase;
var G__20461__$1 = (((G__20461 instanceof cljs.core.Keyword))?G__20461.fqn:null);
switch (G__20461__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20465 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20466 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20467 = loc;
var G__20468 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20469_20688 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20470_20689 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20471_20690 = true;
var _STAR_print_fn_STAR__temp_val__20472_20691 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20471_20690);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20472_20691);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20445_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20445_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20470_20689);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20469_20688);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20465,G__20466,G__20467,G__20468) : format.call(null,G__20465,G__20466,G__20467,G__20468));

break;
case "macroexpansion":
var G__20482 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20483 = cause_type;
var G__20484 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20485 = loc;
var G__20486 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20482,G__20483,G__20484,G__20485,G__20486) : format.call(null,G__20482,G__20483,G__20484,G__20485,G__20486));

break;
case "compile-syntax-check":
var G__20491 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20492 = cause_type;
var G__20493 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20494 = loc;
var G__20495 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20491,G__20492,G__20493,G__20494,G__20495) : format.call(null,G__20491,G__20492,G__20493,G__20494,G__20495));

break;
case "compilation":
var G__20496 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20497 = cause_type;
var G__20498 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20499 = loc;
var G__20500 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20496,G__20497,G__20498,G__20499,G__20500) : format.call(null,G__20496,G__20497,G__20498,G__20499,G__20500));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20501 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20502 = symbol;
var G__20503 = loc;
var G__20504 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20505_20713 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20506_20714 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20507_20715 = true;
var _STAR_print_fn_STAR__temp_val__20508_20716 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20507_20715);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20508_20716);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20447_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20447_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20506_20714);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20505_20713);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20501,G__20502,G__20503,G__20504) : format.call(null,G__20501,G__20502,G__20503,G__20504));
} else {
var G__20517 = "Execution error%s at %s(%s).\n%s\n";
var G__20518 = cause_type;
var G__20519 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20520 = loc;
var G__20521 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20517,G__20518,G__20519,G__20520,G__20521) : format.call(null,G__20517,G__20518,G__20519,G__20520,G__20521));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20461__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
