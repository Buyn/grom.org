goog.provide('ueava.components.hero');
if((typeof ueava !== 'undefined') && (typeof ueava.components !== 'undefined') && (typeof ueava.components.hero !== 'undefined') && (typeof ueava.components.hero.state !== 'undefined')){
} else {
ueava.components.hero.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current","current",-1088038603),(0),new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"anim","anim",-1276068045),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"duration","duration",1444101068),(700),new cljs.core.Keyword(null,"last-ts","last-ts",-1610675580),(0)], null));
}
if((typeof ueava !== 'undefined') && (typeof ueava.components !== 'undefined') && (typeof ueava.components.hero !== 'undefined') && (typeof ueava.components.hero.timer_id !== 'undefined')){
} else {
ueava.components.hero.timer_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
ueava.components.hero.slides = (function ueava$components$hero$slides(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"chameleon","chameleon",-2096197987),new cljs.core.Keyword(null,"img","img",1442687358),"img/Hero_Slide_1_chameleon.jpg",new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hero","chameleon","hero/chameleon",-2059551065)),new cljs.core.Keyword(null,"text","text",-1790561697),ueava.components.lang.t(new cljs.core.Keyword("hero","chameleon-text","hero/chameleon-text",1994261082)),new cljs.core.Keyword(null,"btn","btn",1978294651),ueava.components.lang.t(new cljs.core.Keyword("hero","chameleon-btn","hero/chameleon-btn",656398307))], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"owl","owl",-23233972),new cljs.core.Keyword(null,"img","img",1442687358),"img/Hero_Slide_2_owl.jpg",new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hero","owl","hero/owl",-26326442)),new cljs.core.Keyword(null,"text","text",-1790561697),ueava.components.lang.t(new cljs.core.Keyword("hero","owl-text","hero/owl-text",1803321523)),new cljs.core.Keyword(null,"btn","btn",1978294651),ueava.components.lang.t(new cljs.core.Keyword("hero","owl-btn","hero/owl-btn",-361048894))], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rabbit","rabbit",-447894503),new cljs.core.Keyword(null,"img","img",1442687358),"img/Hero_Slide_3_rabbit.jpg",new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hero","rabbit","hero/rabbit",-446768089)),new cljs.core.Keyword(null,"text","text",-1790561697),ueava.components.lang.t(new cljs.core.Keyword("hero","rabbit-text","hero/rabbit-text",-1846083939)),new cljs.core.Keyword(null,"btn","btn",1978294651),ueava.components.lang.t(new cljs.core.Keyword("hero","rabbit-btn","hero/rabbit-btn",1512635851))], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"bear","bear",-413943675),new cljs.core.Keyword(null,"img","img",1442687358),"img/Hero_Slide_4_bear.jpg",new cljs.core.Keyword(null,"title","title",636505583),ueava.components.lang.t(new cljs.core.Keyword("hero","bear","hero/bear",-412915589)),new cljs.core.Keyword(null,"text","text",-1790561697),ueava.components.lang.t(new cljs.core.Keyword("hero","bear-text","hero/bear-text",-1642715807)),new cljs.core.Keyword(null,"btn","btn",1978294651),ueava.components.lang.t(new cljs.core.Keyword("hero","bear-btn","hero/bear-btn",2031751551))], null)], null);
});
ueava.components.hero.slide_count = cljs.core.count(ueava.components.hero.slides());
ueava.components.hero.now = (function ueava$components$hero$now(){
return Date.now();
});
ueava.components.hero.next_random = (function ueava$components$hero$next_random(current){
var idx = cljs.core.rand_int(ueava.components.hero.slide_count);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,current)){
return cljs.core.mod((idx + (1)),ueava.components.hero.slide_count);
} else {
return idx;
}
});
ueava.components.hero.random_delay = (function ueava$components$hero$random_delay(){
return ((7000) + cljs.core.rand_int((13000)));
});
ueava.components.hero.compute_duration = (function ueava$components$hero$compute_duration(last_ts){
var dt = (ueava.components.hero.now() - last_ts);
if((dt < (1000))){
return (100);
} else {
if((dt < (2000))){
return (400);
} else {
return (700);

}
}
});
ueava.components.hero.go_BANG_ = (function ueava$components$hero$go_BANG_(idx,dir){
var map__12980 = cljs.core.deref(ueava.components.hero.state);
var map__12980__$1 = cljs.core.__destructure_map(map__12980);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12980__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var anim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12980__$1,new cljs.core.Keyword(null,"anim","anim",-1276068045));
var last_ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12980__$1,new cljs.core.Keyword(null,"last-ts","last-ts",-1610675580));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(idx,current)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anim,new cljs.core.Keyword(null,"idle","idle",-2007156861))))){
var duration = ueava.components.hero.compute_duration(last_ts);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(ueava.components.hero.state,cljs.core.assoc,new cljs.core.Keyword(null,"prev","prev",-1597069226),current,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current","current",-1088038603),idx,new cljs.core.Keyword(null,"dir","dir",1734754661),dir,new cljs.core.Keyword(null,"anim","anim",-1276068045),new cljs.core.Keyword(null,"prepare","prepare",-1449654665),new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"last-ts","last-ts",-1610675580),ueava.components.hero.now()], 0));

requestAnimationFrame((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ueava.components.hero.state,cljs.core.assoc,new cljs.core.Keyword(null,"anim","anim",-1276068045),new cljs.core.Keyword(null,"run","run",-1821166653));
}));

return setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(ueava.components.hero.state,cljs.core.assoc,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"anim","anim",-1276068045),new cljs.core.Keyword(null,"idle","idle",-2007156861)], 0));
}),duration);
} else {
return null;
}
});
ueava.components.hero.schedule_BANG_ = (function ueava$components$hero$schedule_BANG_(){
if(cljs.core.truth_(cljs.core.deref(ueava.components.hero.timer_id))){
clearTimeout(cljs.core.deref(ueava.components.hero.timer_id));
} else {
}

return cljs.core.reset_BANG_(ueava.components.hero.timer_id,setTimeout((function (){
var map__12981_12996 = cljs.core.deref(ueava.components.hero.state);
var map__12981_12997__$1 = cljs.core.__destructure_map(map__12981_12996);
var current_12998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12981_12997__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var anim_12999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12981_12997__$1,new cljs.core.Keyword(null,"anim","anim",-1276068045));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anim_12999,new cljs.core.Keyword(null,"idle","idle",-2007156861))){
ueava.components.hero.go_BANG_(ueava.components.hero.next_random(current_12998),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
}

return (ueava.components.hero.schedule_BANG_.cljs$core$IFn$_invoke$arity$0 ? ueava.components.hero.schedule_BANG_.cljs$core$IFn$_invoke$arity$0() : ueava.components.hero.schedule_BANG_.call(null));
}),ueava.components.hero.random_delay()));
});
ueava.components.hero.bg_style = (function ueava$components$hero$bg_style(img,transform,duration){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img),"')"].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),transform,new cljs.core.Keyword(null,"transition","transition",765692007),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms cubic-bezier(0.22, 1, 0.36, 1)"].join('')], null);
});
ueava.components.hero.enter_transform = (function ueava$components$hero$enter_transform(dir){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,new cljs.core.Keyword(null,"right","right",-452581833))){
return "translateX(100%)";
} else {
return "translateX(-100%)";
}
});
ueava.components.hero.leave_transform = (function ueava$components$hero$leave_transform(dir){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,new cljs.core.Keyword(null,"right","right",-452581833))){
return "translateX(-100%)";
} else {
return "translateX(100%)";
}
});
ueava.components.hero.background = (function ueava$components$hero$background(){
var map__12983 = cljs.core.deref(ueava.components.hero.state);
var map__12983__$1 = cljs.core.__destructure_map(map__12983);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12983__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12983__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12983__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var anim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12983__$1,new cljs.core.Keyword(null,"anim","anim",-1276068045));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12983__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var curr = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ueava.components.hero.slides(),current);
var prev_slide = (cljs.core.truth_(prev)?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ueava.components.hero.slides(),prev):null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute inset-0 overflow-hidden"], null),(cljs.core.truth_(prev_slide)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["prev-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prev)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"absolute inset-0 bg-cover bg-center z-10",new cljs.core.Keyword(null,"style","style",-496642736),ueava.components.hero.bg_style(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(prev_slide),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anim,new cljs.core.Keyword(null,"run","run",-1821166653)))?ueava.components.hero.leave_transform(dir):"translateX(0%)"),duration)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["curr-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"absolute inset-0 bg-cover bg-center z-20",new cljs.core.Keyword(null,"style","style",-496642736),ueava.components.hero.bg_style(new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(curr),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anim,new cljs.core.Keyword(null,"prepare","prepare",-1449654665)))?ueava.components.hero.enter_transform(dir):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anim,new cljs.core.Keyword(null,"run","run",-1821166653)))?"translateX(0%)":"translateX(0%)"
)),duration)], null)], null)], null);
});
ueava.components.hero.content = (function ueava$components$hero$content(){
var map__12990 = cljs.core.deref(ueava.components.hero.state);
var map__12990__$1 = cljs.core.__destructure_map(map__12990);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12990__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var map__12991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ueava.components.hero.slides(),current);
var map__12991__$1 = cljs.core.__destructure_map(map__12991);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12991__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12991__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var btn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12991__$1,new cljs.core.Keyword(null,"btn","btn",1978294651));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative z-40 text-white text-center max-w-2xl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-5xl font-bold mb-4"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl mb-6"], null),text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white text-ueava-brown px-6 py-3 rounded-lg hover:bg-ueava-brown-100"], null),btn], null)], null);
});
ueava.components.hero.nav_item = (function ueava$components$hero$nav_item(idx,p__12992){
var map__12993 = p__12992;
var map__12993__$1 = cljs.core.__destructure_map(map__12993);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12993__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var map__12994 = cljs.core.deref(ueava.components.hero.state);
var map__12994__$1 = cljs.core.__destructure_map(map__12994);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12994__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var trigger_BANG_ = (function (){
ueava.components.hero.go_BANG_(idx,new cljs.core.Keyword(null,"right","right",-452581833));

return ueava.components.hero.schedule_BANG_();
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"class","class",-2030961996),["w-16 h-16 bg-cover bg-center cursor-pointer border transition ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,current))?"border-white scale-110":"border-transparent opacity-70")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img),"')"].join('')], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),trigger_BANG_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),trigger_BANG_], null)], null);
});
ueava.components.hero.navigation = (function ueava$components$hero$navigation(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute bottom-6 right-6 grid grid-cols-2 gap-2 z-50"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ueava.components.hero.nav_item,ueava.components.hero.slides()))], null);
});
ueava.components.hero.hero = (function ueava$components$hero$hero(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return ueava.components.hero.schedule_BANG_();
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
if(cljs.core.truth_(cljs.core.deref(ueava.components.hero.timer_id))){
return clearTimeout(cljs.core.deref(ueava.components.hero.timer_id));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative h-screen flex items-center justify-center overflow-hidden"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.components.hero.background], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute inset-0 bg-black/40 z-30"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.components.hero.content], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-40"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-white text-2xl"], null),"\u2193"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.components.hero.navigation], null)], null);
})], null));
});

//# sourceMappingURL=ueava.components.hero.js.map
