(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{111:function(e,t,c){},112:function(e,t,c){},115:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(3),s=c.n(a),i=c(53),r=c.n(i),o=(c(67),c(54)),l=c(9),j=(c(68),c(69),c(55)),d=c.n(j),u=c(56),b=c.n(u),h=c(16),m=Object(a.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(n.jsx)(m.Provider,{value:Object(a.useReducer)(t,c),children:s})},p=function(){return Object(a.useContext)(m)},x=c(60).a.initializeApp({apiKey:"AIzaSyCPSAUQTu2RvZxo9WndAOOOd2xiuAtGXxQ",authDomain:"clone-79039.firebaseapp.com",projectId:"clone-79039",storageBucket:"clone-79039.appspot.com",messagingSenderId:"396243300816",appId:"1:396243300816:web:3873e48cf2e799fa0b89d5",measurementId:"G-MM0JSR4YZR"}),_=x.firestore(),g=x.auth();var v=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(h.b,{to:"/",children:Object(n.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(n.jsxs)("div",{className:"header__search",children:[Object(n.jsx)("input",{className:"header__searchInput",type:"text"}),Object(n.jsx)(d.a,{className:"header__searchIcon"})]}),Object(n.jsxs)("div",{className:"header__nav",children:[Object(n.jsx)(h.b,{to:!s&&"/login",children:Object(n.jsxs)("div",{onClick:function(){s&&g.signOut()},className:"header__option",children:[Object(n.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",s?s.email:"Guest"]}),Object(n.jsx)("span",{className:"header__optionLineTwo",children:s?"Sign Out":"Sign In"})]})}),Object(n.jsx)(h.b,{to:"/orders",children:Object(n.jsxs)("div",{className:"header__option",children:[Object(n.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(n.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(n.jsxs)("div",{className:"header__option",children:[Object(n.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(n.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(n.jsx)(h.b,{to:"/checkout",children:Object(n.jsxs)("div",{className:"header__optionBasket",children:[Object(n.jsx)(b.a,{}),Object(n.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===a||void 0===a?void 0:a.length})]})})]})]})};c(80),c(81);var f=function(e){var t=e.id,c=e.title,a=e.image,s=e.price,i=e.rating,r=p(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(n.jsxs)("div",{className:"product",children:[Object(n.jsxs)("div",{className:"product__info",children:[Object(n.jsx)("p",{children:c}),Object(n.jsxs)("p",{className:"product__price",children:[Object(n.jsx)("small",{children:"$"}),Object(n.jsx)("strong",{children:s})]}),Object(n.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e,t){return Object(n.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(n.jsx)("img",{src:a,alt:""}),Object(n.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:s,rating:i}})},children:"Add to Basket"})]})};var N=function(){return Object(n.jsx)("div",{className:"home",children:Object(n.jsxs)("div",{className:"home__container",children:[Object(n.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(n.jsxs)("div",{className:"home__row",children:[Object(n.jsx)(f,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(n.jsx)(f,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(n.jsxs)("div",{className:"home__row",children:[Object(n.jsx)(f,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(n.jsx)(f,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(n.jsx)(f,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(n.jsx)("div",{className:"home__row",children:Object(n.jsx)(f,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},S=c(11),k=(c(82),c(83),c(26)),y=c.n(k),C=c(41),A=c(22),E=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},T=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(C.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(A.a)(Object(A.a)({},e),{},{basket:n});case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:t.user});default:return e}};var B=function(){var e=Object(S.f)(),t=p(),c=Object(l.a)(t,2),a=c[0].basket;return c[1],Object(n.jsxs)("div",{className:"subtotal",children:[Object(n.jsx)(y.a,{renderText:function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["Subtotal (",a.length," items): ",Object(n.jsx)("strong",{children:e})]}),Object(n.jsxs)("small",{className:"subtotal__gift",children:[Object(n.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:E(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(n.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})};c(85);var w=function(e){var t=e.id,c=e.image,a=e.title,s=e.price,i=e.rating,r=e.hideButton,o=p(),j=Object(l.a)(o,2),d=(j[0].basket,j[1]);return Object(n.jsxs)("div",{className:"checkoutProduct",children:[Object(n.jsx)("img",{className:"checkoutProduct__image",src:c,alt:""}),Object(n.jsxs)("div",{className:"checkoutProduct__info",children:[Object(n.jsx)("p",{className:"checkoutProduct__title",children:a}),Object(n.jsxs)("p",{className:"checkoutProduct__price",children:[Object(n.jsx)("small",{children:"$"}),Object(n.jsx)("strong",{children:s})]}),Object(n.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e,t){return Object(n.jsx)("p",{children:"\ud83c\udf1f"})}))}),!r&&Object(n.jsx)("button",{onClick:function(){d({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var P=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(n.jsxs)("div",{className:"checkout",children:[Object(n.jsxs)("div",{className:"checkout__left",children:[Object(n.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{children:["Hello, ",null===s||void 0===s?void 0:s.email]}),Object(n.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),a.map((function(e){return Object(n.jsx)(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(n.jsx)("div",{className:"checkout__right",children:Object(n.jsx)(B,{})})]})};c(86);var L=function(){var e=Object(S.f)(),t=Object(a.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1];return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(h.b,{to:"/",children:Object(n.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(n.jsxs)("div",{className:"login__container",children:[Object(n.jsx)("h1",{children:"Sign-in"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("h5",{children:"E-mail"}),Object(n.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(n.jsx)("h5",{children:"Password"}),Object(n.jsx)("input",{type:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(n.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(s,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(n.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(s,j).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})},I=c(29),R=c.n(I),M=c(40),z=(c(88),c(24)),G=c(57),D=c.n(G).a.create({baseURL:"http://localhost:5001/clone-79039/us-central1/api"});var U=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],s=c.basket,i=c.user,r=t[1],o=Object(S.f)(),j=Object(z.useStripe)(),d=Object(z.useElements)(),u=Object(a.useState)(!1),b=Object(l.a)(u,2),m=b[0],O=b[1],x=Object(a.useState)(""),g=Object(l.a)(x,2),v=g[0],f=g[1],N=Object(a.useState)(null),k=Object(l.a)(N,2),C=k[0],A=k[1],T=Object(a.useState)(!0),B=Object(l.a)(T,2),P=B[0],L=B[1],I=Object(a.useState)(!0),G=Object(l.a)(I,2),U=G[0],K=G[1];Object(a.useEffect)((function(){(function(){var e=Object(M.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D({method:"post",url:"/payments/create?total=".concat(100*E(s))});case 2:t=e.sent,K(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log("THE SECRET IS >>>",U),console.log("\ud83d\udc71",i);var H=function(){var e=Object(M.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),e.next=4,j.confirmCardPayment(U,{payment_method:{card:d.getElement(z.CardElement)}}).then((function(e){var t=e.paymentIntent;_.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").doc(t.id).set({basket:s,amount:t.amount,created:t.created}),O(!0),A(null),f(!1),r({type:"EMPTY_BASKET"}),o.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"payment",children:Object(n.jsxs)("div",{className:"payment__container",children:[Object(n.jsxs)("h1",{children:["Checkout (",Object(n.jsxs)(h.b,{to:"/checkout",children:[null===s||void 0===s?void 0:s.length," items"]}),")"]}),Object(n.jsxs)("div",{className:"payment__section",children:[Object(n.jsx)("div",{className:"payment__title",children:Object(n.jsx)("h3",{children:"Delivery Address"})}),Object(n.jsxs)("div",{className:"payment__address",children:[Object(n.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(n.jsx)("p",{children:"123 React Lane"}),Object(n.jsx)("p",{children:"Los Angeles, CA"})]})]}),Object(n.jsxs)("div",{className:"payment__section",children:[Object(n.jsx)("div",{className:"payment__title",children:Object(n.jsx)("h3",{children:"Review items and delivery"})}),Object(n.jsx)("div",{className:"payment__items",children:s.map((function(e){return Object(n.jsx)(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(n.jsxs)("div",{className:"payment__section",children:[Object(n.jsx)("div",{className:"payment__title",children:Object(n.jsx)("h3",{children:"Payment Method"})}),Object(n.jsx)("div",{className:"payment__details",children:Object(n.jsxs)("form",{onSubmit:H,children:[Object(n.jsx)(z.CardElement,{onChange:function(e){L(e.empty),A(e.error?e.error.message:"")}}),Object(n.jsxs)("div",{className:"payment__priceContainer",children:[Object(n.jsx)(y.a,{renderText:function(e){return Object(n.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:E(s),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(n.jsx)("button",{disabled:v||P||m,children:Object(n.jsx)("span",{children:v?Object(n.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),C&&Object(n.jsx)("div",{children:C})]})})]})]})})},K=(c(111),c(112),c(58)),H=c.n(K);var X=function(e){var t,c=e.order;return Object(n.jsxs)("div",{className:"order",children:[Object(n.jsx)("h2",{children:"Order"}),Object(n.jsx)("p",{children:H.a.unix(c.data.created).format("MMMM Do YYYY, h:mma")}),Object(n.jsx)("p",{className:"order__id",children:Object(n.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(n.jsx)(w,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(n.jsx)(y.a,{renderText:function(e){return Object(n.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};var W=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],s=(c.basket,c.user),i=(t[1],Object(a.useState)([])),r=Object(l.a)(i,2),o=r[0],j=r[1];return Object(a.useEffect)((function(){s?_.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return j(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):j([])}),[s]),Object(n.jsxs)("div",{className:"orders",children:[Object(n.jsx)("h1",{children:"Your Orders"}),Object(n.jsx)("div",{className:"orders__order",children:null===o||void 0===o?void 0:o.map((function(e){return Object(n.jsx)(X,{order:e})}))})]})},Y=c(59),F=Object(Y.a)("pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL");var Q=function(){var e=p(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){g.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(n.jsx)(h.a,{children:Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(S.c,{children:[Object(n.jsxs)(S.a,{path:"/orders",children:[Object(n.jsx)(v,{}),Object(n.jsx)(W,{})]}),Object(n.jsx)(S.a,{path:"/login",children:Object(n.jsx)(L,{})}),Object(n.jsxs)(S.a,{path:"/checkout",children:[Object(n.jsx)(v,{}),Object(n.jsx)(P,{})]}),Object(n.jsxs)(S.a,{path:"/payment",children:[Object(n.jsx)(v,{}),Object(n.jsx)(z.Elements,{stripe:F,children:Object(n.jsx)(U,{})})]}),Object(n.jsxs)(S.a,{path:"/",children:[Object(n.jsx)(v,{}),Object(n.jsx)(N,{})]})]})})})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(O,{initialState:{basket:[],user:null},reducer:T,children:Object(n.jsx)(Q,{})})}),document.getElementById("root"))},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){}},[[115,1,2]]]);
//# sourceMappingURL=main.624a2073.chunk.js.map