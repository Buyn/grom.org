goog.provide('ueava.router');
if((typeof ueava !== 'undefined') && (typeof ueava.router !== 'undefined') && (typeof ueava.router.route !== 'undefined')){
} else {
ueava.router.route = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home","home",-74557309));
}
ueava.router.routes = new cljs.core.PersistentArrayMap(null, 8, ["",new cljs.core.Keyword(null,"home","home",-74557309),"#",new cljs.core.Keyword(null,"home","home",-74557309),"#/",new cljs.core.Keyword(null,"home","home",-74557309),"#/home",new cljs.core.Keyword(null,"home","home",-74557309),"#/about",new cljs.core.Keyword(null,"about","about",1423892543),"#/conferences",new cljs.core.Keyword(null,"conferences","conferences",252474672),"#/resources",new cljs.core.Keyword(null,"resources","resources",1632806811),"#/membership",new cljs.core.Keyword(null,"membership","membership",254556333)], null);
ueava.router.current_route = (function ueava$router$current_route(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(ueava.router.routes,location.hash,new cljs.core.Keyword(null,"home","home",-74557309));
});
ueava.router.sync_route_BANG_ = (function ueava$router$sync_route_BANG_(){
return cljs.core.reset_BANG_(ueava.router.route,ueava.router.current_route());
});
ueava.router.init_router_BANG_ = (function ueava$router$init_router_BANG_(){
ueava.router.sync_route_BANG_();

return window.addEventListener("hashchange",ueava.router.sync_route_BANG_);
});
ueava.router.navigate_BANG_ = (function ueava$router$navigate_BANG_(url){
return (location.hash = url);
});

//# sourceMappingURL=ueava.router.js.map
