// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('garden.compression');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Return a function which when given a string will return a map
 *   containing the chunk of text matched by re, it's size, and tag.
 */
garden.compression.token_fn = (function garden$compression$token_fn(p__38452){
var vec__38453 = p__38452;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38453,(0),null);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38453,(1),null);
return ((function (vec__38453,tag,re){
return (function (s){
var temp__5457__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__5457__auto__)){
var chunk = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$chunk,chunk,cljs.core.cst$kw$size,cljs.core.count(chunk)], null);
} else {
return null;
}
});
;})(vec__38453,tag,re))
});
/**
 * Given an arbitrary number of [tag regex] pairs, return a function
 *   which when given a string s will return the first matching token of s.
 *   Token precedence is determined by the order of the pairs. The first
 *   and last pairs have the highest and lowest precedence respectively.
 */
garden.compression.tokenizer = (function garden$compression$tokenizer(var_args){
var args__12091__auto__ = [];
var len__12084__auto___38458 = arguments.length;
var i__12085__auto___38459 = (0);
while(true){
if((i__12085__auto___38459 < len__12084__auto___38458)){
args__12091__auto__.push((arguments[i__12085__auto___38459]));

var G__38460 = (i__12085__auto___38459 + (1));
i__12085__auto___38459 = G__38460;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic = (function (tags_PLUS_regexes){
var fs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compression.token_fn,tags_PLUS_regexes);
return ((function (fs){
return (function (s){
return cljs.core.some(((function (fs){
return (function (p1__38456_SHARP_){
return (p1__38456_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38456_SHARP_.cljs$core$IFn$_invoke$arity$1(s) : p1__38456_SHARP_.call(null,s));
});})(fs))
,fs);
});
;})(fs))
});

garden.compression.tokenizer.cljs$lang$maxFixedArity = (0);

garden.compression.tokenizer.cljs$lang$applyTo = (function (seq38457){
return garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38457));
});

/**
 * Tokenizer used during stylesheet compression.
 */
garden.compression.stylesheet_tokenizer = garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,/^\"(?:\\.|[^\"])*\"/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r_DASH_brace,/^\s*\{\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$l_DASH_brace,/^;?\s*}/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r_DASH_paren,/^\s*\(\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$l_DASH_paren,/^\s*\)/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comma,/^,\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colon,/^:\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$semicolon,/^;/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$space_PLUS_,/^ +/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$white_DASH_space_PLUS_,/^\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$any,/^./], null)], 0));
/**
 * Compress a string of CSS using a basic compressor.
 */
garden.compression.compress_stylesheet = (function garden$compression$compress_stylesheet(stylesheet){
var s1 = stylesheet;
var s2 = "";
while(true){
var temp__5455__auto__ = (garden.compression.stylesheet_tokenizer.cljs$core$IFn$_invoke$arity$1 ? garden.compression.stylesheet_tokenizer.cljs$core$IFn$_invoke$arity$1(s1) : garden.compression.stylesheet_tokenizer.call(null,s1));
if(cljs.core.truth_(temp__5455__auto__)){
var map__38461 = temp__5455__auto__;
var map__38461__$1 = ((((!((map__38461 == null)))?((((map__38461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38461):map__38461);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38461__$1,cljs.core.cst$kw$tag);
var chunk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38461__$1,cljs.core.cst$kw$chunk);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38461__$1,cljs.core.cst$kw$size);
var G__38464 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s1,size);
var G__38465 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__38463 = tag;
var G__38463__$1 = (((G__38463 instanceof cljs.core.Keyword))?G__38463.fqn:null);
switch (G__38463__$1) {
case "string":
return chunk;

break;
case "r-brace":
return "{";

break;
case "l-brace":
return "}";

break;
case "r-paren":
return "(";

break;
case "l-paren":
return ")";

break;
case "comma":
return ",";

break;
case "semi-comma":
return ";";

break;
case "colon":
return ":";

break;
case "space+":
return " ";

break;
case "white-space+":
return "";

break;
default:
return chunk;

}
})())].join('');
s1 = G__38464;
s2 = G__38465;
continue;
} else {
return s2;
}
break;
}
});
