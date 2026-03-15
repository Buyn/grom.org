goog.provide('ueava.components.navigation_menu');
ueava.components.navigation_menu.navigation_menu = (function ueava$components$navigation_menu$navigation_menu(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hidden md:flex space-x-8 font-medium"], null)], null),(function (){var iter__5480__auto__ = (function ueava$components$navigation_menu$navigation_menu_$_iter__14166(s__14167){
return (new cljs.core.LazySeq(null,(function (){
var s__14167__$1 = s__14167;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14167__$1);
if(temp__5804__auto__){
var s__14167__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14167__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14167__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14169 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14168 = (0);
while(true){
if((i__14168 < size__5479__auto__)){
var map__14170 = cljs.core._nth(c__5478__auto__,i__14168);
var map__14170__$1 = cljs.core.__destructure_map(map__14170);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14170__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14170__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append(b__14169,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"class","class",-2030961996),"hover:text-ueava-sand"], null),title], null));

var G__14172 = (i__14168 + (1));
i__14168 = G__14172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14169),ueava$components$navigation_menu$navigation_menu_$_iter__14166(cljs.core.chunk_rest(s__14167__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14169),null);
}
} else {
var map__14171 = cljs.core.first(s__14167__$2);
var map__14171__$1 = cljs.core.__destructure_map(map__14171);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14171__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14171__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"class","class",-2030961996),"hover:text-ueava-sand"], null),title], null),ueava$components$navigation_menu$navigation_menu_$_iter__14166(cljs.core.rest(s__14167__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(ueava.components.navigation_menu_list.navigation_items);
})());
});

//# sourceMappingURL=ueava.components.navigation_menu.js.map
