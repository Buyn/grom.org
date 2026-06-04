goog.provide('ueava.core');
ueava.core.current_page = (function ueava$core$current_page(){
var G__12524 = cljs.core.deref(ueava.router.route);
var G__12524__$1 = (((G__12524 instanceof cljs.core.Keyword))?G__12524.fqn:null);
switch (G__12524__$1) {
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.pages.home.home_page], null);

break;
case "about":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.pages.about.about_page], null);

break;
case "membership":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.pages.membership.membership_page], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.pages.home.home_page], null);

}
});
ueava.core.page = (function ueava$core$page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.core.current_page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.footer.footer], null)], null);
});
ueava.core.start = (function ueava$core$start(){
var G__12525 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.core.page], null);
var G__12526 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__12525,G__12526) : reagent.core.render_component.call(null,G__12525,G__12526));
});
ueava.core.init = (function ueava$core$init(){
ueava.router.init_router_BANG_();

return ueava.core.start();
});
goog.exportSymbol('ueava.core.init', ueava.core.init);
ueava.core.stop = (function ueava$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=ueava.core.js.map
