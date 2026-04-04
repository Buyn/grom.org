goog.provide('ueava.core');
ueava.core.page = (function ueava$core$page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.main.main], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.footer.footer], null)], null);
});
if((typeof ueava !== 'undefined') && (typeof ueava.core !== 'undefined') && (typeof ueava.core.app_state !== 'undefined')){
} else {
ueava.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
ueava.core.hello_world = (function ueava$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ueava.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this and watch it change!"], null)], null);
});
ueava.core.start = (function ueava$core$start(){
var G__14512 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.core.page], null);
var G__14513 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__14512,G__14513) : reagent.core.render_component.call(null,G__14512,G__14513));
});
ueava.core.init = (function ueava$core$init(){
return ueava.core.start();
});
goog.exportSymbol('ueava.core.init', ueava.core.init);
ueava.core.stop = (function ueava$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=ueava.core.js.map
