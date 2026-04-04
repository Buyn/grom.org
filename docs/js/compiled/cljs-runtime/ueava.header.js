goog.provide('ueava.header');
if((typeof ueava !== 'undefined') && (typeof ueava.header !== 'undefined') && (typeof ueava.header.scrolled_QMARK_ !== 'undefined')){
} else {
ueava.header.scrolled_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof ueava !== 'undefined') && (typeof ueava.header !== 'undefined') && (typeof ueava.header.menu_open_QMARK_ !== 'undefined')){
} else {
ueava.header.menu_open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
ueava.header.icon_menu = (function ueava$header$icon_menu(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"class","class",-2030961996),"w-8 h-8",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"d","d",1972142424),"M4 6h16M4 12h16M4 18h16"], null)], null)], null);
});
ueava.header.icon_close = (function ueava$header$icon_close(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"class","class",-2030961996),"w-8 h-8",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"d","d",1972142424),"M6 18L18 6M6 6l12 12"], null)], null)], null);
});
ueava.header.on_scroll = (function ueava$header$on_scroll(){
cljs.core.reset_BANG_(ueava.header.scrolled_QMARK_,(window.scrollY > (50)));

return cljs.core.reset_BANG_(ueava.components.topbar.top_visible_QMARK_,(window.scrollY < (10)));
});
ueava.header.header = (function ueava$header$header(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return window.addEventListener("scroll",ueava.header.on_scroll);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return window.removeEventListener("scroll",ueava.header.on_scroll);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["fixed top-0 left-0 w-full z-[100] transition-all duration-300 ",(cljs.core.truth_(cljs.core.deref(ueava.header.scrolled_QMARK_))?"bg-ueava-cream shadow text-gray-900":"bg-transparent text-white")].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.components.topbar.topbar], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between px-8 py-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/",new cljs.core.Keyword(null,"class","class",-2030961996),"shrink-0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/ueava-logo.svg",new cljs.core.Keyword(null,"class","class",-2030961996),"h-12"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.components.navigation_menu.navigation_menu], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.components.navigation_cta.navigation_cta,"md:flex"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"md:hidden text-3xl text-ueava-sand",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ueava.header.menu_open_QMARK_,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(ueava.header.menu_open_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.header.icon_close], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.header.icon_menu], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute top-full left-0 w-full bg-ueava-cream shadow-md md:hidden\n                   text-ueava-brown\n                   transform transition-all duration-500 ease-out ",(cljs.core.truth_(cljs.core.deref(ueava.header.menu_open_QMARK_))?"opacity-100 translate-y-0":"opacity-0 -translate-y-4 pointer-events-none")].join('')], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center text-center p-6 space-y-4"], null)], null),(function (){var iter__5480__auto__ = (function ueava$header$header_$_iter__13613(s__13614){
return (new cljs.core.LazySeq(null,(function (){
var s__13614__$1 = s__13614;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13614__$1);
if(temp__5804__auto__){
var s__13614__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13614__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13614__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13616 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13615 = (0);
while(true){
if((i__13615 < size__5479__auto__)){
var map__13617 = cljs.core._nth(c__5478__auto__,i__13615);
var map__13617__$1 = cljs.core.__destructure_map(map__13617);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13617__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13617__$1,new cljs.core.Keyword(null,"href","href",-793805698));
cljs.core.chunk_append(b__13616,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-medium hover:text-ueava-sand transition"], null),title], null));

var G__13620 = (i__13615 + (1));
i__13615 = G__13620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13616),ueava$header$header_$_iter__13613(cljs.core.chunk_rest(s__13614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13616),null);
}
} else {
var map__13618 = cljs.core.first(s__13614__$2);
var map__13618__$1 = cljs.core.__destructure_map(map__13618);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13618__$1,new cljs.core.Keyword(null,"title","title",636505583));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13618__$1,new cljs.core.Keyword(null,"href","href",-793805698));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"key","key",-1516042587),title,new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-medium hover:text-ueava-sand transition"], null),title], null),ueava$header$header_$_iter__13613(cljs.core.rest(s__13614__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(ueava.components.navigation_menu_list.navigation_items());
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-orange-500 text-white px-4 py-2 rounded\n                          hover:bg-orange-600 \n                          space-x-8 font-medium"], null),ueava.components.lang.t(new cljs.core.Keyword("header","cta","header/cta",779562971))], null)], null)], null)], null);
})], null));
});

//# sourceMappingURL=ueava.header.js.map
