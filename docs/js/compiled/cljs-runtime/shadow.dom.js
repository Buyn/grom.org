goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16022 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16022(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16029 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16029(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14413 = coll;
var G__14414 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14413,G__14414) : shadow.dom.lazy_native_coll_seq.call(null,G__14413,G__14414));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__14492 = arguments.length;
switch (G__14492) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__14510 = arguments.length;
switch (G__14510) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__14558 = arguments.length;
switch (G__14558) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__14577 = arguments.length;
switch (G__14577) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14609 = arguments.length;
switch (G__14609) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14651 = arguments.length;
switch (G__14651) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e14671){if((e14671 instanceof Object)){
var e = e14671;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14671;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__14694 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14695 = null;
var count__14696 = (0);
var i__14697 = (0);
while(true){
if((i__14697 < count__14696)){
var el = chunk__14695.cljs$core$IIndexed$_nth$arity$2(null,i__14697);
var handler_16127__$1 = ((function (seq__14694,chunk__14695,count__14696,i__14697,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14694,chunk__14695,count__14696,i__14697,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16127__$1);


var G__16131 = seq__14694;
var G__16132 = chunk__14695;
var G__16133 = count__14696;
var G__16134 = (i__14697 + (1));
seq__14694 = G__16131;
chunk__14695 = G__16132;
count__14696 = G__16133;
i__14697 = G__16134;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14694);
if(temp__5804__auto__){
var seq__14694__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14694__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14694__$1);
var G__16135 = cljs.core.chunk_rest(seq__14694__$1);
var G__16136 = c__5525__auto__;
var G__16137 = cljs.core.count(c__5525__auto__);
var G__16138 = (0);
seq__14694 = G__16135;
chunk__14695 = G__16136;
count__14696 = G__16137;
i__14697 = G__16138;
continue;
} else {
var el = cljs.core.first(seq__14694__$1);
var handler_16140__$1 = ((function (seq__14694,chunk__14695,count__14696,i__14697,el,seq__14694__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14694,chunk__14695,count__14696,i__14697,el,seq__14694__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16140__$1);


var G__16141 = cljs.core.next(seq__14694__$1);
var G__16142 = null;
var G__16143 = (0);
var G__16144 = (0);
seq__14694 = G__16141;
chunk__14695 = G__16142;
count__14696 = G__16143;
i__14697 = G__16144;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__14760 = arguments.length;
switch (G__14760) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14790 = cljs.core.seq(events);
var chunk__14791 = null;
var count__14792 = (0);
var i__14793 = (0);
while(true){
if((i__14793 < count__14792)){
var vec__14812 = chunk__14791.cljs$core$IIndexed$_nth$arity$2(null,i__14793);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14812,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14812,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16161 = seq__14790;
var G__16162 = chunk__14791;
var G__16163 = count__14792;
var G__16164 = (i__14793 + (1));
seq__14790 = G__16161;
chunk__14791 = G__16162;
count__14792 = G__16163;
i__14793 = G__16164;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14790);
if(temp__5804__auto__){
var seq__14790__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14790__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14790__$1);
var G__16169 = cljs.core.chunk_rest(seq__14790__$1);
var G__16170 = c__5525__auto__;
var G__16171 = cljs.core.count(c__5525__auto__);
var G__16172 = (0);
seq__14790 = G__16169;
chunk__14791 = G__16170;
count__14792 = G__16171;
i__14793 = G__16172;
continue;
} else {
var vec__14822 = cljs.core.first(seq__14790__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14822,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16176 = cljs.core.next(seq__14790__$1);
var G__16177 = null;
var G__16178 = (0);
var G__16179 = (0);
seq__14790 = G__16176;
chunk__14791 = G__16177;
count__14792 = G__16178;
i__14793 = G__16179;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__14834 = cljs.core.seq(styles);
var chunk__14835 = null;
var count__14836 = (0);
var i__14837 = (0);
while(true){
if((i__14837 < count__14836)){
var vec__14860 = chunk__14835.cljs$core$IIndexed$_nth$arity$2(null,i__14837);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14860,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16187 = seq__14834;
var G__16188 = chunk__14835;
var G__16189 = count__14836;
var G__16190 = (i__14837 + (1));
seq__14834 = G__16187;
chunk__14835 = G__16188;
count__14836 = G__16189;
i__14837 = G__16190;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14834);
if(temp__5804__auto__){
var seq__14834__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14834__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14834__$1);
var G__16194 = cljs.core.chunk_rest(seq__14834__$1);
var G__16195 = c__5525__auto__;
var G__16196 = cljs.core.count(c__5525__auto__);
var G__16197 = (0);
seq__14834 = G__16194;
chunk__14835 = G__16195;
count__14836 = G__16196;
i__14837 = G__16197;
continue;
} else {
var vec__14880 = cljs.core.first(seq__14834__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14880,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16198 = cljs.core.next(seq__14834__$1);
var G__16199 = null;
var G__16200 = (0);
var G__16201 = (0);
seq__14834 = G__16198;
chunk__14835 = G__16199;
count__14836 = G__16200;
i__14837 = G__16201;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14894_16203 = key;
var G__14894_16204__$1 = (((G__14894_16203 instanceof cljs.core.Keyword))?G__14894_16203.fqn:null);
switch (G__14894_16204__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16217 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_16217,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_16217,"aria-");
}
})())){
el.setAttribute(ks_16217,value);
} else {
(el[ks_16217] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14959){
var map__14960 = p__14959;
var map__14960__$1 = cljs.core.__destructure_map(map__14960);
var props = map__14960__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14960__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14968 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14968,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14968,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14968,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14974 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14974,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14974;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14984 = arguments.length;
switch (G__14984) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14998){
var vec__15001 = p__14998;
var seq__15002 = cljs.core.seq(vec__15001);
var first__15003 = cljs.core.first(seq__15002);
var seq__15002__$1 = cljs.core.next(seq__15002);
var nn = first__15003;
var first__15003__$1 = cljs.core.first(seq__15002__$1);
var seq__15002__$2 = cljs.core.next(seq__15002__$1);
var np = first__15003__$1;
var nc = seq__15002__$2;
var node = vec__15001;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15013 = nn;
var G__15014 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15013,G__15014) : create_fn.call(null,G__15013,G__15014));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15015 = nn;
var G__15016 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15015,G__15016) : create_fn.call(null,G__15015,G__15016));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__15019 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15019,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15019,(1),null);
var seq__15023_16274 = cljs.core.seq(node_children);
var chunk__15024_16275 = null;
var count__15025_16276 = (0);
var i__15026_16277 = (0);
while(true){
if((i__15026_16277 < count__15025_16276)){
var child_struct_16278 = chunk__15024_16275.cljs$core$IIndexed$_nth$arity$2(null,i__15026_16277);
var children_16279 = shadow.dom.dom_node(child_struct_16278);
if(cljs.core.seq_QMARK_(children_16279)){
var seq__15063_16280 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16279));
var chunk__15065_16281 = null;
var count__15066_16282 = (0);
var i__15067_16283 = (0);
while(true){
if((i__15067_16283 < count__15066_16282)){
var child_16285 = chunk__15065_16281.cljs$core$IIndexed$_nth$arity$2(null,i__15067_16283);
if(cljs.core.truth_(child_16285)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16285);


var G__16291 = seq__15063_16280;
var G__16292 = chunk__15065_16281;
var G__16293 = count__15066_16282;
var G__16294 = (i__15067_16283 + (1));
seq__15063_16280 = G__16291;
chunk__15065_16281 = G__16292;
count__15066_16282 = G__16293;
i__15067_16283 = G__16294;
continue;
} else {
var G__16295 = seq__15063_16280;
var G__16296 = chunk__15065_16281;
var G__16297 = count__15066_16282;
var G__16298 = (i__15067_16283 + (1));
seq__15063_16280 = G__16295;
chunk__15065_16281 = G__16296;
count__15066_16282 = G__16297;
i__15067_16283 = G__16298;
continue;
}
} else {
var temp__5804__auto___16300 = cljs.core.seq(seq__15063_16280);
if(temp__5804__auto___16300){
var seq__15063_16302__$1 = temp__5804__auto___16300;
if(cljs.core.chunked_seq_QMARK_(seq__15063_16302__$1)){
var c__5525__auto___16303 = cljs.core.chunk_first(seq__15063_16302__$1);
var G__16305 = cljs.core.chunk_rest(seq__15063_16302__$1);
var G__16306 = c__5525__auto___16303;
var G__16307 = cljs.core.count(c__5525__auto___16303);
var G__16308 = (0);
seq__15063_16280 = G__16305;
chunk__15065_16281 = G__16306;
count__15066_16282 = G__16307;
i__15067_16283 = G__16308;
continue;
} else {
var child_16310 = cljs.core.first(seq__15063_16302__$1);
if(cljs.core.truth_(child_16310)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16310);


var G__16316 = cljs.core.next(seq__15063_16302__$1);
var G__16317 = null;
var G__16318 = (0);
var G__16319 = (0);
seq__15063_16280 = G__16316;
chunk__15065_16281 = G__16317;
count__15066_16282 = G__16318;
i__15067_16283 = G__16319;
continue;
} else {
var G__16325 = cljs.core.next(seq__15063_16302__$1);
var G__16326 = null;
var G__16327 = (0);
var G__16328 = (0);
seq__15063_16280 = G__16325;
chunk__15065_16281 = G__16326;
count__15066_16282 = G__16327;
i__15067_16283 = G__16328;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16279);
}


var G__16329 = seq__15023_16274;
var G__16330 = chunk__15024_16275;
var G__16331 = count__15025_16276;
var G__16332 = (i__15026_16277 + (1));
seq__15023_16274 = G__16329;
chunk__15024_16275 = G__16330;
count__15025_16276 = G__16331;
i__15026_16277 = G__16332;
continue;
} else {
var temp__5804__auto___16335 = cljs.core.seq(seq__15023_16274);
if(temp__5804__auto___16335){
var seq__15023_16336__$1 = temp__5804__auto___16335;
if(cljs.core.chunked_seq_QMARK_(seq__15023_16336__$1)){
var c__5525__auto___16338 = cljs.core.chunk_first(seq__15023_16336__$1);
var G__16339 = cljs.core.chunk_rest(seq__15023_16336__$1);
var G__16340 = c__5525__auto___16338;
var G__16341 = cljs.core.count(c__5525__auto___16338);
var G__16342 = (0);
seq__15023_16274 = G__16339;
chunk__15024_16275 = G__16340;
count__15025_16276 = G__16341;
i__15026_16277 = G__16342;
continue;
} else {
var child_struct_16344 = cljs.core.first(seq__15023_16336__$1);
var children_16345 = shadow.dom.dom_node(child_struct_16344);
if(cljs.core.seq_QMARK_(children_16345)){
var seq__15083_16346 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16345));
var chunk__15085_16347 = null;
var count__15086_16348 = (0);
var i__15087_16349 = (0);
while(true){
if((i__15087_16349 < count__15086_16348)){
var child_16350 = chunk__15085_16347.cljs$core$IIndexed$_nth$arity$2(null,i__15087_16349);
if(cljs.core.truth_(child_16350)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16350);


var G__16351 = seq__15083_16346;
var G__16352 = chunk__15085_16347;
var G__16353 = count__15086_16348;
var G__16354 = (i__15087_16349 + (1));
seq__15083_16346 = G__16351;
chunk__15085_16347 = G__16352;
count__15086_16348 = G__16353;
i__15087_16349 = G__16354;
continue;
} else {
var G__16355 = seq__15083_16346;
var G__16356 = chunk__15085_16347;
var G__16357 = count__15086_16348;
var G__16358 = (i__15087_16349 + (1));
seq__15083_16346 = G__16355;
chunk__15085_16347 = G__16356;
count__15086_16348 = G__16357;
i__15087_16349 = G__16358;
continue;
}
} else {
var temp__5804__auto___16359__$1 = cljs.core.seq(seq__15083_16346);
if(temp__5804__auto___16359__$1){
var seq__15083_16360__$1 = temp__5804__auto___16359__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15083_16360__$1)){
var c__5525__auto___16361 = cljs.core.chunk_first(seq__15083_16360__$1);
var G__16363 = cljs.core.chunk_rest(seq__15083_16360__$1);
var G__16364 = c__5525__auto___16361;
var G__16365 = cljs.core.count(c__5525__auto___16361);
var G__16366 = (0);
seq__15083_16346 = G__16363;
chunk__15085_16347 = G__16364;
count__15086_16348 = G__16365;
i__15087_16349 = G__16366;
continue;
} else {
var child_16367 = cljs.core.first(seq__15083_16360__$1);
if(cljs.core.truth_(child_16367)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16367);


var G__16368 = cljs.core.next(seq__15083_16360__$1);
var G__16369 = null;
var G__16370 = (0);
var G__16371 = (0);
seq__15083_16346 = G__16368;
chunk__15085_16347 = G__16369;
count__15086_16348 = G__16370;
i__15087_16349 = G__16371;
continue;
} else {
var G__16372 = cljs.core.next(seq__15083_16360__$1);
var G__16373 = null;
var G__16374 = (0);
var G__16375 = (0);
seq__15083_16346 = G__16372;
chunk__15085_16347 = G__16373;
count__15086_16348 = G__16374;
i__15087_16349 = G__16375;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16345);
}


var G__16377 = cljs.core.next(seq__15023_16336__$1);
var G__16378 = null;
var G__16379 = (0);
var G__16380 = (0);
seq__15023_16274 = G__16377;
chunk__15024_16275 = G__16378;
count__15025_16276 = G__16379;
i__15026_16277 = G__16380;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__15104 = cljs.core.seq(node);
var chunk__15105 = null;
var count__15106 = (0);
var i__15107 = (0);
while(true){
if((i__15107 < count__15106)){
var n = chunk__15105.cljs$core$IIndexed$_nth$arity$2(null,i__15107);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16390 = seq__15104;
var G__16391 = chunk__15105;
var G__16392 = count__15106;
var G__16393 = (i__15107 + (1));
seq__15104 = G__16390;
chunk__15105 = G__16391;
count__15106 = G__16392;
i__15107 = G__16393;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15104);
if(temp__5804__auto__){
var seq__15104__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15104__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15104__$1);
var G__16398 = cljs.core.chunk_rest(seq__15104__$1);
var G__16399 = c__5525__auto__;
var G__16400 = cljs.core.count(c__5525__auto__);
var G__16401 = (0);
seq__15104 = G__16398;
chunk__15105 = G__16399;
count__15106 = G__16400;
i__15107 = G__16401;
continue;
} else {
var n = cljs.core.first(seq__15104__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16402 = cljs.core.next(seq__15104__$1);
var G__16403 = null;
var G__16404 = (0);
var G__16405 = (0);
seq__15104 = G__16402;
chunk__15105 = G__16403;
count__15106 = G__16404;
i__15107 = G__16405;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__15125 = arguments.length;
switch (G__15125) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__15132 = arguments.length;
switch (G__15132) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__15149 = arguments.length;
switch (G__15149) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16445 = arguments.length;
var i__5727__auto___16446 = (0);
while(true){
if((i__5727__auto___16446 < len__5726__auto___16445)){
args__5732__auto__.push((arguments[i__5727__auto___16446]));

var G__16447 = (i__5727__auto___16446 + (1));
i__5727__auto___16446 = G__16447;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__15180_16451 = cljs.core.seq(nodes);
var chunk__15181_16452 = null;
var count__15182_16453 = (0);
var i__15183_16454 = (0);
while(true){
if((i__15183_16454 < count__15182_16453)){
var node_16458 = chunk__15181_16452.cljs$core$IIndexed$_nth$arity$2(null,i__15183_16454);
fragment.appendChild(shadow.dom._to_dom(node_16458));


var G__16459 = seq__15180_16451;
var G__16460 = chunk__15181_16452;
var G__16461 = count__15182_16453;
var G__16462 = (i__15183_16454 + (1));
seq__15180_16451 = G__16459;
chunk__15181_16452 = G__16460;
count__15182_16453 = G__16461;
i__15183_16454 = G__16462;
continue;
} else {
var temp__5804__auto___16464 = cljs.core.seq(seq__15180_16451);
if(temp__5804__auto___16464){
var seq__15180_16466__$1 = temp__5804__auto___16464;
if(cljs.core.chunked_seq_QMARK_(seq__15180_16466__$1)){
var c__5525__auto___16467 = cljs.core.chunk_first(seq__15180_16466__$1);
var G__16468 = cljs.core.chunk_rest(seq__15180_16466__$1);
var G__16469 = c__5525__auto___16467;
var G__16470 = cljs.core.count(c__5525__auto___16467);
var G__16471 = (0);
seq__15180_16451 = G__16468;
chunk__15181_16452 = G__16469;
count__15182_16453 = G__16470;
i__15183_16454 = G__16471;
continue;
} else {
var node_16472 = cljs.core.first(seq__15180_16466__$1);
fragment.appendChild(shadow.dom._to_dom(node_16472));


var G__16474 = cljs.core.next(seq__15180_16466__$1);
var G__16475 = null;
var G__16476 = (0);
var G__16477 = (0);
seq__15180_16451 = G__16474;
chunk__15181_16452 = G__16475;
count__15182_16453 = G__16476;
i__15183_16454 = G__16477;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq15176){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15176));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__15205_16484 = cljs.core.seq(scripts);
var chunk__15206_16485 = null;
var count__15207_16486 = (0);
var i__15208_16487 = (0);
while(true){
if((i__15208_16487 < count__15207_16486)){
var vec__15225_16493 = chunk__15206_16485.cljs$core$IIndexed$_nth$arity$2(null,i__15208_16487);
var script_tag_16494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15225_16493,(0),null);
var script_body_16495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15225_16493,(1),null);
eval(script_body_16495);


var G__16503 = seq__15205_16484;
var G__16504 = chunk__15206_16485;
var G__16505 = count__15207_16486;
var G__16506 = (i__15208_16487 + (1));
seq__15205_16484 = G__16503;
chunk__15206_16485 = G__16504;
count__15207_16486 = G__16505;
i__15208_16487 = G__16506;
continue;
} else {
var temp__5804__auto___16511 = cljs.core.seq(seq__15205_16484);
if(temp__5804__auto___16511){
var seq__15205_16516__$1 = temp__5804__auto___16511;
if(cljs.core.chunked_seq_QMARK_(seq__15205_16516__$1)){
var c__5525__auto___16517 = cljs.core.chunk_first(seq__15205_16516__$1);
var G__16518 = cljs.core.chunk_rest(seq__15205_16516__$1);
var G__16519 = c__5525__auto___16517;
var G__16520 = cljs.core.count(c__5525__auto___16517);
var G__16521 = (0);
seq__15205_16484 = G__16518;
chunk__15206_16485 = G__16519;
count__15207_16486 = G__16520;
i__15208_16487 = G__16521;
continue;
} else {
var vec__15231_16529 = cljs.core.first(seq__15205_16516__$1);
var script_tag_16530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15231_16529,(0),null);
var script_body_16531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15231_16529,(1),null);
eval(script_body_16531);


var G__16532 = cljs.core.next(seq__15205_16516__$1);
var G__16533 = null;
var G__16534 = (0);
var G__16535 = (0);
seq__15205_16484 = G__16532;
chunk__15206_16485 = G__16533;
count__15207_16486 = G__16534;
i__15208_16487 = G__16535;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15235){
var vec__15236 = p__15235;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__15255 = arguments.length;
switch (G__15255) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__15305 = cljs.core.seq(style_keys);
var chunk__15306 = null;
var count__15307 = (0);
var i__15308 = (0);
while(true){
if((i__15308 < count__15307)){
var it = chunk__15306.cljs$core$IIndexed$_nth$arity$2(null,i__15308);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16591 = seq__15305;
var G__16592 = chunk__15306;
var G__16593 = count__15307;
var G__16594 = (i__15308 + (1));
seq__15305 = G__16591;
chunk__15306 = G__16592;
count__15307 = G__16593;
i__15308 = G__16594;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15305);
if(temp__5804__auto__){
var seq__15305__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15305__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15305__$1);
var G__16596 = cljs.core.chunk_rest(seq__15305__$1);
var G__16597 = c__5525__auto__;
var G__16598 = cljs.core.count(c__5525__auto__);
var G__16599 = (0);
seq__15305 = G__16596;
chunk__15306 = G__16597;
count__15307 = G__16598;
i__15308 = G__16599;
continue;
} else {
var it = cljs.core.first(seq__15305__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16600 = cljs.core.next(seq__15305__$1);
var G__16601 = null;
var G__16602 = (0);
var G__16603 = (0);
seq__15305 = G__16600;
chunk__15306 = G__16601;
count__15307 = G__16602;
i__15308 = G__16603;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15327,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15339 = k15327;
var G__15339__$1 = (((G__15339 instanceof cljs.core.Keyword))?G__15339.fqn:null);
switch (G__15339__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15327,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15344){
var vec__15347 = p__15344;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15347,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15347,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15326){
var self__ = this;
var G__15326__$1 = this;
return (new cljs.core.RecordIter((0),G__15326__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15328,other15329){
var self__ = this;
var this15328__$1 = this;
return (((!((other15329 == null)))) && ((((this15328__$1.constructor === other15329.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15328__$1.x,other15329.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15328__$1.y,other15329.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15328__$1.__extmap,other15329.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15327){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15374 = k15327;
var G__15374__$1 = (((G__15374 instanceof cljs.core.Keyword))?G__15374.fqn:null);
switch (G__15374__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15327);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15326){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15375 = cljs.core.keyword_identical_QMARK_;
var expr__15376 = k__5309__auto__;
if(cljs.core.truth_((pred__15375.cljs$core$IFn$_invoke$arity$2 ? pred__15375.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15376) : pred__15375.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15376)))){
return (new shadow.dom.Coordinate(G__15326,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15375.cljs$core$IFn$_invoke$arity$2 ? pred__15375.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15376) : pred__15375.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15376)))){
return (new shadow.dom.Coordinate(self__.x,G__15326,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15326),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15326){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__15326,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15330){
var extmap__5342__auto__ = (function (){var G__15385 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15330,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15330)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15385);
} else {
return G__15385;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15330),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15330),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15396,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15410 = k15396;
var G__15410__$1 = (((G__15410 instanceof cljs.core.Keyword))?G__15410.fqn:null);
switch (G__15410__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15396,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15418){
var vec__15419 = p__15418;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15419,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15419,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15395){
var self__ = this;
var G__15395__$1 = this;
return (new cljs.core.RecordIter((0),G__15395__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15397,other15398){
var self__ = this;
var this15397__$1 = this;
return (((!((other15398 == null)))) && ((((this15397__$1.constructor === other15398.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15397__$1.w,other15398.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15397__$1.h,other15398.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15397__$1.__extmap,other15398.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15396){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15442 = k15396;
var G__15442__$1 = (((G__15442 instanceof cljs.core.Keyword))?G__15442.fqn:null);
switch (G__15442__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15396);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15395){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15444 = cljs.core.keyword_identical_QMARK_;
var expr__15445 = k__5309__auto__;
if(cljs.core.truth_((pred__15444.cljs$core$IFn$_invoke$arity$2 ? pred__15444.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15445) : pred__15444.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15445)))){
return (new shadow.dom.Size(G__15395,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15444.cljs$core$IFn$_invoke$arity$2 ? pred__15444.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15445) : pred__15444.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15445)))){
return (new shadow.dom.Size(self__.w,G__15395,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15395),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15395){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15395,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15402){
var extmap__5342__auto__ = (function (){var G__15473 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15402,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15402)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15473);
} else {
return G__15473;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15402),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15402),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__16678 = (i + (1));
var G__16679 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16678;
ret = G__16679;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15529){
var vec__15531 = p__15529;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15531,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15531,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15538 = arguments.length;
switch (G__15538) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16690 = ps;
var G__16691 = (i + (1));
el__$1 = G__16690;
i = G__16691;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15636 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15636,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15636,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15636,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15648_16693 = cljs.core.seq(props);
var chunk__15649_16694 = null;
var count__15650_16695 = (0);
var i__15651_16696 = (0);
while(true){
if((i__15651_16696 < count__15650_16695)){
var vec__15684_16697 = chunk__15649_16694.cljs$core$IIndexed$_nth$arity$2(null,i__15651_16696);
var k_16698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15684_16697,(0),null);
var v_16699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15684_16697,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16698);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16698),v_16699);


var G__16701 = seq__15648_16693;
var G__16702 = chunk__15649_16694;
var G__16703 = count__15650_16695;
var G__16704 = (i__15651_16696 + (1));
seq__15648_16693 = G__16701;
chunk__15649_16694 = G__16702;
count__15650_16695 = G__16703;
i__15651_16696 = G__16704;
continue;
} else {
var temp__5804__auto___16705 = cljs.core.seq(seq__15648_16693);
if(temp__5804__auto___16705){
var seq__15648_16707__$1 = temp__5804__auto___16705;
if(cljs.core.chunked_seq_QMARK_(seq__15648_16707__$1)){
var c__5525__auto___16708 = cljs.core.chunk_first(seq__15648_16707__$1);
var G__16709 = cljs.core.chunk_rest(seq__15648_16707__$1);
var G__16710 = c__5525__auto___16708;
var G__16711 = cljs.core.count(c__5525__auto___16708);
var G__16712 = (0);
seq__15648_16693 = G__16709;
chunk__15649_16694 = G__16710;
count__15650_16695 = G__16711;
i__15651_16696 = G__16712;
continue;
} else {
var vec__15707_16713 = cljs.core.first(seq__15648_16707__$1);
var k_16714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15707_16713,(0),null);
var v_16715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15707_16713,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16714);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16714),v_16715);


var G__16716 = cljs.core.next(seq__15648_16707__$1);
var G__16717 = null;
var G__16718 = (0);
var G__16719 = (0);
seq__15648_16693 = G__16716;
chunk__15649_16694 = G__16717;
count__15650_16695 = G__16718;
i__15651_16696 = G__16719;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15739 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15739,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15739,(1),null);
var seq__15745_16723 = cljs.core.seq(node_children);
var chunk__15747_16724 = null;
var count__15748_16725 = (0);
var i__15749_16726 = (0);
while(true){
if((i__15749_16726 < count__15748_16725)){
var child_struct_16727 = chunk__15747_16724.cljs$core$IIndexed$_nth$arity$2(null,i__15749_16726);
if((!((child_struct_16727 == null)))){
if(typeof child_struct_16727 === 'string'){
var text_16728 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16728),child_struct_16727].join(''));
} else {
var children_16730 = shadow.dom.svg_node(child_struct_16727);
if(cljs.core.seq_QMARK_(children_16730)){
var seq__15813_16731 = cljs.core.seq(children_16730);
var chunk__15815_16732 = null;
var count__15816_16733 = (0);
var i__15817_16734 = (0);
while(true){
if((i__15817_16734 < count__15816_16733)){
var child_16735 = chunk__15815_16732.cljs$core$IIndexed$_nth$arity$2(null,i__15817_16734);
if(cljs.core.truth_(child_16735)){
node.appendChild(child_16735);


var G__16736 = seq__15813_16731;
var G__16737 = chunk__15815_16732;
var G__16738 = count__15816_16733;
var G__16739 = (i__15817_16734 + (1));
seq__15813_16731 = G__16736;
chunk__15815_16732 = G__16737;
count__15816_16733 = G__16738;
i__15817_16734 = G__16739;
continue;
} else {
var G__16740 = seq__15813_16731;
var G__16741 = chunk__15815_16732;
var G__16742 = count__15816_16733;
var G__16743 = (i__15817_16734 + (1));
seq__15813_16731 = G__16740;
chunk__15815_16732 = G__16741;
count__15816_16733 = G__16742;
i__15817_16734 = G__16743;
continue;
}
} else {
var temp__5804__auto___16744 = cljs.core.seq(seq__15813_16731);
if(temp__5804__auto___16744){
var seq__15813_16746__$1 = temp__5804__auto___16744;
if(cljs.core.chunked_seq_QMARK_(seq__15813_16746__$1)){
var c__5525__auto___16747 = cljs.core.chunk_first(seq__15813_16746__$1);
var G__16748 = cljs.core.chunk_rest(seq__15813_16746__$1);
var G__16749 = c__5525__auto___16747;
var G__16750 = cljs.core.count(c__5525__auto___16747);
var G__16751 = (0);
seq__15813_16731 = G__16748;
chunk__15815_16732 = G__16749;
count__15816_16733 = G__16750;
i__15817_16734 = G__16751;
continue;
} else {
var child_16752 = cljs.core.first(seq__15813_16746__$1);
if(cljs.core.truth_(child_16752)){
node.appendChild(child_16752);


var G__16753 = cljs.core.next(seq__15813_16746__$1);
var G__16754 = null;
var G__16755 = (0);
var G__16756 = (0);
seq__15813_16731 = G__16753;
chunk__15815_16732 = G__16754;
count__15816_16733 = G__16755;
i__15817_16734 = G__16756;
continue;
} else {
var G__16757 = cljs.core.next(seq__15813_16746__$1);
var G__16758 = null;
var G__16759 = (0);
var G__16760 = (0);
seq__15813_16731 = G__16757;
chunk__15815_16732 = G__16758;
count__15816_16733 = G__16759;
i__15817_16734 = G__16760;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16730);
}
}


var G__16761 = seq__15745_16723;
var G__16762 = chunk__15747_16724;
var G__16763 = count__15748_16725;
var G__16764 = (i__15749_16726 + (1));
seq__15745_16723 = G__16761;
chunk__15747_16724 = G__16762;
count__15748_16725 = G__16763;
i__15749_16726 = G__16764;
continue;
} else {
var G__16765 = seq__15745_16723;
var G__16766 = chunk__15747_16724;
var G__16767 = count__15748_16725;
var G__16768 = (i__15749_16726 + (1));
seq__15745_16723 = G__16765;
chunk__15747_16724 = G__16766;
count__15748_16725 = G__16767;
i__15749_16726 = G__16768;
continue;
}
} else {
var temp__5804__auto___16769 = cljs.core.seq(seq__15745_16723);
if(temp__5804__auto___16769){
var seq__15745_16771__$1 = temp__5804__auto___16769;
if(cljs.core.chunked_seq_QMARK_(seq__15745_16771__$1)){
var c__5525__auto___16773 = cljs.core.chunk_first(seq__15745_16771__$1);
var G__16774 = cljs.core.chunk_rest(seq__15745_16771__$1);
var G__16775 = c__5525__auto___16773;
var G__16776 = cljs.core.count(c__5525__auto___16773);
var G__16777 = (0);
seq__15745_16723 = G__16774;
chunk__15747_16724 = G__16775;
count__15748_16725 = G__16776;
i__15749_16726 = G__16777;
continue;
} else {
var child_struct_16779 = cljs.core.first(seq__15745_16771__$1);
if((!((child_struct_16779 == null)))){
if(typeof child_struct_16779 === 'string'){
var text_16782 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16782),child_struct_16779].join(''));
} else {
var children_16783 = shadow.dom.svg_node(child_struct_16779);
if(cljs.core.seq_QMARK_(children_16783)){
var seq__15889_16784 = cljs.core.seq(children_16783);
var chunk__15891_16785 = null;
var count__15892_16786 = (0);
var i__15893_16787 = (0);
while(true){
if((i__15893_16787 < count__15892_16786)){
var child_16788 = chunk__15891_16785.cljs$core$IIndexed$_nth$arity$2(null,i__15893_16787);
if(cljs.core.truth_(child_16788)){
node.appendChild(child_16788);


var G__16790 = seq__15889_16784;
var G__16791 = chunk__15891_16785;
var G__16792 = count__15892_16786;
var G__16793 = (i__15893_16787 + (1));
seq__15889_16784 = G__16790;
chunk__15891_16785 = G__16791;
count__15892_16786 = G__16792;
i__15893_16787 = G__16793;
continue;
} else {
var G__16794 = seq__15889_16784;
var G__16795 = chunk__15891_16785;
var G__16796 = count__15892_16786;
var G__16797 = (i__15893_16787 + (1));
seq__15889_16784 = G__16794;
chunk__15891_16785 = G__16795;
count__15892_16786 = G__16796;
i__15893_16787 = G__16797;
continue;
}
} else {
var temp__5804__auto___16798__$1 = cljs.core.seq(seq__15889_16784);
if(temp__5804__auto___16798__$1){
var seq__15889_16800__$1 = temp__5804__auto___16798__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15889_16800__$1)){
var c__5525__auto___16801 = cljs.core.chunk_first(seq__15889_16800__$1);
var G__16802 = cljs.core.chunk_rest(seq__15889_16800__$1);
var G__16803 = c__5525__auto___16801;
var G__16804 = cljs.core.count(c__5525__auto___16801);
var G__16805 = (0);
seq__15889_16784 = G__16802;
chunk__15891_16785 = G__16803;
count__15892_16786 = G__16804;
i__15893_16787 = G__16805;
continue;
} else {
var child_16806 = cljs.core.first(seq__15889_16800__$1);
if(cljs.core.truth_(child_16806)){
node.appendChild(child_16806);


var G__16809 = cljs.core.next(seq__15889_16800__$1);
var G__16810 = null;
var G__16811 = (0);
var G__16812 = (0);
seq__15889_16784 = G__16809;
chunk__15891_16785 = G__16810;
count__15892_16786 = G__16811;
i__15893_16787 = G__16812;
continue;
} else {
var G__16815 = cljs.core.next(seq__15889_16800__$1);
var G__16816 = null;
var G__16817 = (0);
var G__16818 = (0);
seq__15889_16784 = G__16815;
chunk__15891_16785 = G__16816;
count__15892_16786 = G__16817;
i__15893_16787 = G__16818;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16783);
}
}


var G__16819 = cljs.core.next(seq__15745_16771__$1);
var G__16820 = null;
var G__16821 = (0);
var G__16822 = (0);
seq__15745_16723 = G__16819;
chunk__15747_16724 = G__16820;
count__15748_16725 = G__16821;
i__15749_16726 = G__16822;
continue;
} else {
var G__16823 = cljs.core.next(seq__15745_16771__$1);
var G__16824 = null;
var G__16825 = (0);
var G__16826 = (0);
seq__15745_16723 = G__16823;
chunk__15747_16724 = G__16824;
count__15748_16725 = G__16825;
i__15749_16726 = G__16826;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16831 = arguments.length;
var i__5727__auto___16835 = (0);
while(true){
if((i__5727__auto___16835 < len__5726__auto___16831)){
args__5732__auto__.push((arguments[i__5727__auto___16835]));

var G__16836 = (i__5727__auto___16835 + (1));
i__5727__auto___16835 = G__16836;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15973){
var G__15974 = cljs.core.first(seq15973);
var seq15973__$1 = cljs.core.next(seq15973);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15974,seq15973__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
