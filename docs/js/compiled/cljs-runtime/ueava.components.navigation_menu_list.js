goog.provide('ueava.components.navigation_menu_list');
ueava.components.navigation_menu_list.navigation_items = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Home",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"About",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Resources",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Membership",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conferences",new cljs.core.Keyword(null,"href","href",-793805698),"#"], null)], null);
ueava.components.navigation_menu_list.navigation_menu_list = (function ueava$components$navigation_menu_list$navigation_menu_list(){
var iter__5480__auto__ = (function ueava$components$navigation_menu_list$navigation_menu_list_$_iter__12995(s__12996){
return (new cljs.core.LazySeq(null,(function (){
var s__12996__$1 = s__12996;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12996__$1);
if(temp__5804__auto__){
var s__12996__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12996__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12996__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12998 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12997 = (0);
while(true){
if((i__12997 < size__5479__auto__)){
var map__12999 = cljs.core._nth(c__5478__auto__,i__12997);
var map__12999__$1 = cljs.core.__destructure_map(map__12999);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12999__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12999__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append(b__12998,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"class","class",-2030961996),"hover:text-ueava-sand"], null),title], null));

var G__13001 = (i__12997 + (1));
i__12997 = G__13001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12998),ueava$components$navigation_menu_list$navigation_menu_list_$_iter__12995(cljs.core.chunk_rest(s__12996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12998),null);
}
} else {
var map__13000 = cljs.core.first(s__12996__$2);
var map__13000__$1 = cljs.core.__destructure_map(map__13000);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13000__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13000__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"class","class",-2030961996),"hover:text-ueava-sand"], null),title], null),ueava$components$navigation_menu_list$navigation_menu_list_$_iter__12995(cljs.core.rest(s__12996__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(ueava.components.navigation_menu_list.navigation_items);
});

//# sourceMappingURL=ueava.components.navigation_menu_list.js.map
