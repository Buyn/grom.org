goog.provide('ueava.components.navigation_menu_list');
ueava.components.navigation_menu_list.navigation_items = (function ueava$components$navigation_menu_list$navigation_items(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hlist","Home","hlist/Home",1418463638)),new cljs.core.Keyword(null,"href","href",-793805698),"#/home"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hlist","About","hlist/About",-747283011)),new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hlist","Resources","hlist/Resources",801113612)),new cljs.core.Keyword(null,"href","href",-793805698),"#/Resources"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hlist","Membership","hlist/Membership",1344271721)),new cljs.core.Keyword(null,"href","href",-793805698),"#/membership"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hlist","Conferences","hlist/Conferences",558170438)),new cljs.core.Keyword(null,"href","href",-793805698),"#/Conferences"], null)], null);
});
ueava.components.navigation_menu_list.navigation_menu_list = (function ueava$components$navigation_menu_list$navigation_menu_list(){
var iter__5480__auto__ = (function ueava$components$navigation_menu_list$navigation_menu_list_$_iter__13065(s__13066){
return (new cljs.core.LazySeq(null,(function (){
var s__13066__$1 = s__13066;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13066__$1);
if(temp__5804__auto__){
var s__13066__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13066__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13066__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13068 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13067 = (0);
while(true){
if((i__13067 < size__5479__auto__)){
var map__13069 = cljs.core._nth(c__5478__auto__,i__13067);
var map__13069__$1 = cljs.core.__destructure_map(map__13069);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13069__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13069__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append(b__13068,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13067,map__13069,map__13069__$1,title,href,c__5478__auto__,size__5479__auto__,b__13068,s__13066__$2,temp__5804__auto__){
return (function (e){
e.preventDefault();

return ueava.router.navigate_BANG_(href);
});})(i__13067,map__13069,map__13069__$1,title,href,c__5478__auto__,size__5479__auto__,b__13068,s__13066__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"hover:text-ueava-sand"], null),title], null));

var G__13071 = (i__13067 + (1));
i__13067 = G__13071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13068),ueava$components$navigation_menu_list$navigation_menu_list_$_iter__13065(cljs.core.chunk_rest(s__13066__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13068),null);
}
} else {
var map__13070 = cljs.core.first(s__13066__$2);
var map__13070__$1 = cljs.core.__destructure_map(map__13070);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13070__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13070__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__13070,map__13070__$1,title,href,s__13066__$2,temp__5804__auto__){
return (function (e){
e.preventDefault();

return ueava.router.navigate_BANG_(href);
});})(map__13070,map__13070__$1,title,href,s__13066__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"class","class",-2030961996),"hover:text-ueava-sand"], null),title], null),ueava$components$navigation_menu_list$navigation_menu_list_$_iter__13065(cljs.core.rest(s__13066__$2)));
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
