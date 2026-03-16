goog.provide('ueava.components.hero');
ueava.components.hero.current_slide = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
ueava.components.hero.timer_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
ueava.components.hero.slides = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"chameleon","chameleon",-2096197987),new cljs.core.Keyword(null,"img","img",1442687358),"img/Hero_Slide_1_chameleon.jpg",new cljs.core.Keyword(null,"title","title",636505583),"Why Do You Need A Reptile Vet?",new cljs.core.Keyword(null,"text","text",-1790561697),"Specialized care for exotic animals.",new cljs.core.Keyword(null,"btn","btn",1978294651),"Become Member"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"owl","owl",-23233972),new cljs.core.Keyword(null,"img","img",1442687358),"img/Hero_Slide_2_owl.jpg",new cljs.core.Keyword(null,"title","title",636505583),"Avian Veterinary Excellence",new cljs.core.Keyword(null,"text","text",-1790561697),"Support for bird specialists worldwide.",new cljs.core.Keyword(null,"btn","btn",1978294651),"Learn More"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rabbit","rabbit",-447894503),new cljs.core.Keyword(null,"img","img",1442687358),"img/Hero_Slide_3_rabbit.jpg",new cljs.core.Keyword(null,"title","title",636505583),"Small Mammal Medicine",new cljs.core.Keyword(null,"text","text",-1790561697),"Advanced treatment for rabbits and rodents.",new cljs.core.Keyword(null,"btn","btn",1978294651),"Join UEAVA"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"bear","bear",-413943675),new cljs.core.Keyword(null,"img","img",1442687358),"img/Hero_Slide_4_bear.jpg",new cljs.core.Keyword(null,"title","title",636505583),"Wildlife Veterinary Science",new cljs.core.Keyword(null,"text","text",-1790561697),"Supporting vets working with wildlife.",new cljs.core.Keyword(null,"btn","btn",1978294651),"Discover"], null)], null);
ueava.components.hero.random_slide = (function ueava$components$hero$random_slide(){
return cljs.core.rand_int(cljs.core.count(ueava.components.hero.slides));
});
ueava.components.hero.random_delay = (function ueava$components$hero$random_delay(){
return ((5000) + cljs.core.rand_int((5000)));
});
ueava.components.hero.schedule_next_BANG_ = (function ueava$components$hero$schedule_next_BANG_(){
if(cljs.core.truth_(cljs.core.deref(ueava.components.hero.timer_id))){
clearTimeout(cljs.core.deref(ueava.components.hero.timer_id));
} else {
}

return cljs.core.reset_BANG_(ueava.components.hero.timer_id,setTimeout((function (){
cljs.core.reset_BANG_(ueava.components.hero.current_slide,ueava.components.hero.random_slide());

return (ueava.components.hero.schedule_next_BANG_.cljs$core$IFn$_invoke$arity$0 ? ueava.components.hero.schedule_next_BANG_.cljs$core$IFn$_invoke$arity$0() : ueava.components.hero.schedule_next_BANG_.call(null));
}),ueava.components.hero.random_delay()));
});
ueava.components.hero.background_slider = (function ueava$components$hero$background_slider(){
var map__14453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ueava.components.hero.slides,cljs.core.deref(ueava.components.hero.current_slide));
var map__14453__$1 = cljs.core.__destructure_map(map__14453);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14453__$1,new cljs.core.Keyword(null,"img","img",1442687358));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute inset-0 bg-cover bg-center transition-all duration-1700",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img),"')"].join('')], null)], null)], null);
});
ueava.components.hero.hero_content = (function ueava$components$hero$hero_content(){
var map__14454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ueava.components.hero.slides,cljs.core.deref(ueava.components.hero.current_slide));
var map__14454__$1 = cljs.core.__destructure_map(map__14454);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14454__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14454__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var btn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14454__$1,new cljs.core.Keyword(null,"btn","btn",1978294651));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative z-10 text-white text-center max-w-2xl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-5xl font-bold mb-4"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl mb-6"], null),text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white text-black px-6 py-3 rounded-lg"], null),btn], null)], null);
});
ueava.components.hero.nav_item = (function ueava$components$hero$nav_item(idx,p__14455){
var map__14456 = p__14455;
var map__14456__$1 = cljs.core.__destructure_map(map__14456);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14456__$1,new cljs.core.Keyword(null,"img","img",1442687358));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-16 h-16 bg-cover bg-center cursor-pointer border ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.deref(ueava.components.hero.current_slide)))?"border-white":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(img),"')"].join('')], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
cljs.core.reset_BANG_(ueava.components.hero.current_slide,idx);

return ueava.components.hero.schedule_next_BANG_();
})], null)], null);
});
ueava.components.hero.mini_logo_navigation = (function ueava$components$hero$mini_logo_navigation(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute bottom-6 right-6 grid grid-cols-2 gap-2"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ueava.components.hero.nav_item,ueava.components.hero.slides))], null);
});
ueava.components.hero.hero = (function ueava$components$hero$hero(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return ueava.components.hero.schedule_next_BANG_();
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
if(cljs.core.truth_(cljs.core.deref(ueava.components.hero.timer_id))){
return clearTimeout(cljs.core.deref(ueava.components.hero.timer_id));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative h-screen flex items-center justify-center overflow-hidden"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.components.hero.background_slider], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute inset-0 bg-black/40"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.components.hero.hero_content], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-white text-2xl"], null),"\u2193"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ueava.components.hero.mini_logo_navigation], null)], null);
})], null));
});

//# sourceMappingURL=ueava.components.hero.js.map
