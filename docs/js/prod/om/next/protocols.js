// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('om.next.protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
om.next.protocols.IIndexer = function(){};

om.next.protocols.indexes = (function om$next$protocols$indexes(this$){
if((!((this$ == null))) && (!((this$.om$next$protocols$IIndexer$indexes$arity$1 == null)))){
return this$.om$next$protocols$IIndexer$indexes$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next.protocols.indexes[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (om.next.protocols.indexes["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IIndexer.indexes",this$);
}
}
}
});

om.next.protocols.index_root = (function om$next$protocols$index_root(this$,x){
if((!((this$ == null))) && (!((this$.om$next$protocols$IIndexer$index_root$arity$2 == null)))){
return this$.om$next$protocols$IIndexer$index_root$arity$2(this$,x);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next.protocols.index_root[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__11146__auto__.call(null,this$,x));
} else {
var m__11146__auto____$1 = (om.next.protocols.index_root["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,x) : m__11146__auto____$1.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("IIndexer.index-root",this$);
}
}
}
});

om.next.protocols.index_component_BANG_ = (function om$next$protocols$index_component_BANG_(this$,component){
if((!((this$ == null))) && (!((this$.om$next$protocols$IIndexer$index_component_BANG_$arity$2 == null)))){
return this$.om$next$protocols$IIndexer$index_component_BANG_$arity$2(this$,component);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next.protocols.index_component_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(this$,component) : m__11146__auto__.call(null,this$,component));
} else {
var m__11146__auto____$1 = (om.next.protocols.index_component_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,component) : m__11146__auto____$1.call(null,this$,component));
} else {
throw cljs.core.missing_protocol("IIndexer.index-component!",this$);
}
}
}
});

om.next.protocols.drop_component_BANG_ = (function om$next$protocols$drop_component_BANG_(this$,component){
if((!((this$ == null))) && (!((this$.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 == null)))){
return this$.om$next$protocols$IIndexer$drop_component_BANG_$arity$2(this$,component);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next.protocols.drop_component_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(this$,component) : m__11146__auto__.call(null,this$,component));
} else {
var m__11146__auto____$1 = (om.next.protocols.drop_component_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,component) : m__11146__auto____$1.call(null,this$,component));
} else {
throw cljs.core.missing_protocol("IIndexer.drop-component!",this$);
}
}
}
});

om.next.protocols.ref_for = (function om$next$protocols$ref_for(this$,component){
if((!((this$ == null))) && (!((this$.om$next$protocols$IIndexer$ref_for$arity$2 == null)))){
return this$.om$next$protocols$IIndexer$ref_for$arity$2(this$,component);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next.protocols.ref_for[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(this$,component) : m__11146__auto__.call(null,this$,component));
} else {
var m__11146__auto____$1 = (om.next.protocols.ref_for["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,component) : m__11146__auto____$1.call(null,this$,component));
} else {
throw cljs.core.missing_protocol("IIndexer.ref-for",this$);
}
}
}
});

om.next.protocols.key__GT_components = (function om$next$protocols$key__GT_components(this$,k){
if((!((this$ == null))) && (!((this$.om$next$protocols$IIndexer$key__GT_components$arity$2 == null)))){
return this$.om$next$protocols$IIndexer$key__GT_components$arity$2(this$,k);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next.protocols.key__GT_components[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(this$,k) : m__11146__auto__.call(null,this$,k));
} else {
var m__11146__auto____$1 = (om.next.protocols.key__GT_components["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,k) : m__11146__auto____$1.call(null,this$,k));
} else {
throw cljs.core.missing_protocol("IIndexer.key->components",this$);
}
}
}
});


/**
 * @interface
 */
om.next.protocols.IReconciler = function(){};

om.next.protocols.basis_t = (function om$next$protocols$basis_t(this$){
if((!((this$ == null))) && (!((this$.om$next$protocols$IReconciler$basis_t$arity$1 == null)))){
return this$.om$next$protocols$IReconciler$basis_t$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next.protocols.basis_t[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (om.next.protocols.basis_t["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReconciler.basis-t",this$);
}
}
}
});

om.next.protocols.add_root_BANG_ = (function om$next$protocols$add_root_BANG_(reconciler,root_class,target,options){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$add_root_BANG_$arity$4 == null)))){
return reconciler.om$next$protocols$IReconciler$add_root_BANG_$arity$4(reconciler,root_class,target,options);
} else {
var x__11145__auto__ = (((reconciler == null))?null:reconciler);
var m__11146__auto__ = (om.next.protocols.add_root_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$4 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,options) : m__11146__auto__.call(null,reconciler,root_class,target,options));
} else {
var m__11146__auto____$1 = (om.next.protocols.add_root_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,options) : m__11146__auto____$1.call(null,reconciler,root_class,target,options));
} else {
throw cljs.core.missing_protocol("IReconciler.add-root!",reconciler);
}
}
}
});

om.next.protocols.remove_root_BANG_ = (function om$next$protocols$remove_root_BANG_(reconciler,target){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 == null)))){
return reconciler.om$next$protocols$IReconciler$remove_root_BANG_$arity$2(reconciler,target);
} else {
var x__11145__auto__ = (((reconciler == null))?null:reconciler);
var m__11146__auto__ = (om.next.protocols.remove_root_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(reconciler,target) : m__11146__auto__.call(null,reconciler,target));
} else {
var m__11146__auto____$1 = (om.next.protocols.remove_root_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(reconciler,target) : m__11146__auto____$1.call(null,reconciler,target));
} else {
throw cljs.core.missing_protocol("IReconciler.remove-root!",reconciler);
}
}
}
});

om.next.protocols.schedule_render_BANG_ = (function om$next$protocols$schedule_render_BANG_(reconciler){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 == null)))){
return reconciler.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1(reconciler);
} else {
var x__11145__auto__ = (((reconciler == null))?null:reconciler);
var m__11146__auto__ = (om.next.protocols.schedule_render_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__11146__auto__.call(null,reconciler));
} else {
var m__11146__auto____$1 = (om.next.protocols.schedule_render_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(reconciler) : m__11146__auto____$1.call(null,reconciler));
} else {
throw cljs.core.missing_protocol("IReconciler.schedule-render!",reconciler);
}
}
}
});

om.next.protocols.schedule_sends_BANG_ = (function om$next$protocols$schedule_sends_BANG_(reconciler){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 == null)))){
return reconciler.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1(reconciler);
} else {
var x__11145__auto__ = (((reconciler == null))?null:reconciler);
var m__11146__auto__ = (om.next.protocols.schedule_sends_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__11146__auto__.call(null,reconciler));
} else {
var m__11146__auto____$1 = (om.next.protocols.schedule_sends_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(reconciler) : m__11146__auto____$1.call(null,reconciler));
} else {
throw cljs.core.missing_protocol("IReconciler.schedule-sends!",reconciler);
}
}
}
});

om.next.protocols.queue_BANG_ = (function om$next$protocols$queue_BANG_(var_args){
var G__17278 = arguments.length;
switch (G__17278) {
case 2:
return om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,ks){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$queue_BANG_$arity$2 == null)))){
return reconciler.om$next$protocols$IReconciler$queue_BANG_$arity$2(reconciler,ks);
} else {
var x__11145__auto__ = (((reconciler == null))?null:reconciler);
var m__11146__auto__ = (om.next.protocols.queue_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(reconciler,ks) : m__11146__auto__.call(null,reconciler,ks));
} else {
var m__11146__auto____$1 = (om.next.protocols.queue_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(reconciler,ks) : m__11146__auto____$1.call(null,reconciler,ks));
} else {
throw cljs.core.missing_protocol("IReconciler.queue!",reconciler);
}
}
}
});

om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,ks,remote){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$queue_BANG_$arity$3 == null)))){
return reconciler.om$next$protocols$IReconciler$queue_BANG_$arity$3(reconciler,ks,remote);
} else {
var x__11145__auto__ = (((reconciler == null))?null:reconciler);
var m__11146__auto__ = (om.next.protocols.queue_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$3(reconciler,ks,remote) : m__11146__auto__.call(null,reconciler,ks,remote));
} else {
var m__11146__auto____$1 = (om.next.protocols.queue_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3(reconciler,ks,remote) : m__11146__auto____$1.call(null,reconciler,ks,remote));
} else {
throw cljs.core.missing_protocol("IReconciler.queue!",reconciler);
}
}
}
});

om.next.protocols.queue_BANG_.cljs$lang$maxFixedArity = 3;


om.next.protocols.queue_sends_BANG_ = (function om$next$protocols$queue_sends_BANG_(reconciler,sends){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 == null)))){
return reconciler.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2(reconciler,sends);
} else {
var x__11145__auto__ = (((reconciler == null))?null:reconciler);
var m__11146__auto__ = (om.next.protocols.queue_sends_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(reconciler,sends) : m__11146__auto__.call(null,reconciler,sends));
} else {
var m__11146__auto____$1 = (om.next.protocols.queue_sends_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(reconciler,sends) : m__11146__auto____$1.call(null,reconciler,sends));
} else {
throw cljs.core.missing_protocol("IReconciler.queue-sends!",reconciler);
}
}
}
});

om.next.protocols.reindex_BANG_ = (function om$next$protocols$reindex_BANG_(reconciler){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$reindex_BANG_$arity$1 == null)))){
return reconciler.om$next$protocols$IReconciler$reindex_BANG_$arity$1(reconciler);
} else {
var x__11145__auto__ = (((reconciler == null))?null:reconciler);
var m__11146__auto__ = (om.next.protocols.reindex_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__11146__auto__.call(null,reconciler));
} else {
var m__11146__auto____$1 = (om.next.protocols.reindex_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(reconciler) : m__11146__auto____$1.call(null,reconciler));
} else {
throw cljs.core.missing_protocol("IReconciler.reindex!",reconciler);
}
}
}
});

om.next.protocols.reconcile_BANG_ = (function om$next$protocols$reconcile_BANG_(var_args){
var G__17285 = arguments.length;
switch (G__17285) {
case 1:
return om.next.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reconciler){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 == null)))){
return reconciler.om$next$protocols$IReconciler$reconcile_BANG_$arity$1(reconciler);
} else {
var x__11145__auto__ = (((reconciler == null))?null:reconciler);
var m__11146__auto__ = (om.next.protocols.reconcile_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__11146__auto__.call(null,reconciler));
} else {
var m__11146__auto____$1 = (om.next.protocols.reconcile_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(reconciler) : m__11146__auto____$1.call(null,reconciler));
} else {
throw cljs.core.missing_protocol("IReconciler.reconcile!",reconciler);
}
}
}
});

om.next.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,remote){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$reconcile_BANG_$arity$2 == null)))){
return reconciler.om$next$protocols$IReconciler$reconcile_BANG_$arity$2(reconciler,remote);
} else {
var x__11145__auto__ = (((reconciler == null))?null:reconciler);
var m__11146__auto__ = (om.next.protocols.reconcile_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(reconciler,remote) : m__11146__auto__.call(null,reconciler,remote));
} else {
var m__11146__auto____$1 = (om.next.protocols.reconcile_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(reconciler,remote) : m__11146__auto____$1.call(null,reconciler,remote));
} else {
throw cljs.core.missing_protocol("IReconciler.reconcile!",reconciler);
}
}
}
});

om.next.protocols.reconcile_BANG_.cljs$lang$maxFixedArity = 2;


om.next.protocols.send_BANG_ = (function om$next$protocols$send_BANG_(reconciler){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$send_BANG_$arity$1 == null)))){
return reconciler.om$next$protocols$IReconciler$send_BANG_$arity$1(reconciler);
} else {
var x__11145__auto__ = (((reconciler == null))?null:reconciler);
var m__11146__auto__ = (om.next.protocols.send_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(reconciler) : m__11146__auto__.call(null,reconciler));
} else {
var m__11146__auto____$1 = (om.next.protocols.send_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(reconciler) : m__11146__auto____$1.call(null,reconciler));
} else {
throw cljs.core.missing_protocol("IReconciler.send!",reconciler);
}
}
}
});
