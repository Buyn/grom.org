goog.provide('ueava.components.navigation_menu_list');
ueava.components.navigation_menu_list.navigation_items = (function ueava$components$navigation_menu_list$navigation_items(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hlist","Home","hlist/Home",1418463638)),new cljs.core.Keyword(null,"href","href",-793805698),"#/home"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hlist","About","hlist/About",-747283011)),new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hlist","Resources","hlist/Resources",801113612)),new cljs.core.Keyword(null,"href","href",-793805698),"#/resources"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hlist","Membership","hlist/Membership",1344271721)),new cljs.core.Keyword(null,"href","href",-793805698),"#/membership"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hlist","Conferences","hlist/Conferences",558170438)),new cljs.core.Keyword(null,"href","href",-793805698),"#/conferences"], null)], null);
});
ueava.components.navigation_menu_list.navigation_menu_list = (function ueava$components$navigation_menu_list$navigation_menu_list(){
var iter__5480__auto__ = (function ueava$components$navigation_menu_list$navigation_menu_list_$_iter__14446(s__14447){
return (new cljs.core.LazySeq(null,(function (){
var s__14447__$1 = s__14447;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14447__$1);
if(temp__5804__auto__){
var s__14447__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14447__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14447__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14449 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14448 = (0);
while(true){
if((i__14448 < size__5479__auto__)){
var map__14450 = cljs.core._nth(c__5478__auto__,i__14448);
var map__14450__$1 = cljs.core.__destructure_map(map__14450);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14450__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14450__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append(b__14449,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__14448,map__14450,map__14450__$1,title,href,c__5478__auto__,size__5479__auto__,b__14449,s__14447__$2,temp__5804__auto__){
return (function (e){
e.preventDefault();

return ueava.router.navigate_BANG_(href);
});})(i__14448,map__14450,map__14450__$1,title,href,c__5478__auto__,size__5479__auto__,b__14449,s__14447__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"hover:text-ueava-sand"], null),title], null));

var G__14452 = (i__14448 + (1));
i__14448 = G__14452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14449),ueava$components$navigation_menu_list$navigation_menu_list_$_iter__14446(cljs.core.chunk_rest(s__14447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14449),null);
}
} else {
var map__14451 = cljs.core.first(s__14447__$2);
var map__14451__$1 = cljs.core.__destructure_map(map__14451);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14451__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14451__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__14451,map__14451__$1,title,href,s__14447__$2,temp__5804__auto__){
return (function (e){
e.preventDefault();

return ueava.router.navigate_BANG_(href);
});})(map__14451,map__14451__$1,title,href,s__14447__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"hover:text-ueava-sand"], null),title], null),ueava$components$navigation_menu_list$navigation_menu_list_$_iter__14446(cljs.core.rest(s__14447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(ueava.components.navigation_menu_list.navigation_items());
});

//# sourceMappingURL=ueava.components.navigation_menu_list.js.map
