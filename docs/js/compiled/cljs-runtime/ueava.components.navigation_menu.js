goog.provide('ueava.components.navigation_menu');
ueava.components.navigation_menu.navigation_menu = (function ueava$components$navigation_menu$navigation_menu(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hidden md:flex space-x-8 font-medium"], null)], null),(function (){var iter__5480__auto__ = (function ueava$components$navigation_menu$navigation_menu_$_iter__12598(s__12599){
return (new cljs.core.LazySeq(null,(function (){
var s__12599__$1 = s__12599;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12599__$1);
if(temp__5804__auto__){
var s__12599__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12599__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12599__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12601 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12600 = (0);
while(true){
if((i__12600 < size__5479__auto__)){
var map__12602 = cljs.core._nth(c__5478__auto__,i__12600);
var map__12602__$1 = cljs.core.__destructure_map(map__12602);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12602__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12602__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append(b__12601,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"class","class",-2030961996),"hover:text-ueava-sand"], null),title], null));

var G__12604 = (i__12600 + (1));
i__12600 = G__12604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12601),ueava$components$navigation_menu$navigation_menu_$_iter__12598(cljs.core.chunk_rest(s__12599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12601),null);
}
} else {
var map__12603 = cljs.core.first(s__12599__$2);
var map__12603__$1 = cljs.core.__destructure_map(map__12603);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12603__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12603__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"class","class",-2030961996),"hover:text-ueava-sand"], null),title], null),ueava$components$navigation_menu$navigation_menu_$_iter__12598(cljs.core.rest(s__12599__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(ueava.components.navigation_menu_list.navigation_items());
})());
});

//# sourceMappingURL=ueava.components.navigation_menu.js.map
