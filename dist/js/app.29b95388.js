(function(e){function t(t){for(var o,s,r=t[0],l=t[1],d=t[2],u=0,c=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&c.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);h&&h(t);while(c.length)c.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},n={app:0},i=[];function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var h=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("2b0e"),n=a("7496"),i=a("f6c4"),s=function(){var e=this,t=e._self._c;return t(n["a"],[t("Menu"),t(i["a"],[t("Footer")],1)],1)},r=[],l=a("40dc"),d=a("5bc1"),h=a("bb78"),u=a("b0af"),c=a("a523"),m=a("ce7e"),g=a("adda"),p=a("8860"),f=a("da13"),w=a("8270"),v=a("5d23"),b=a("f774"),y=a("8dd9"),k=a("2fa4"),_=a("71a3"),j=a("fe57"),x=function(){var e=this,t=e._self._c;return t(u["a"],{staticClass:"overflow-hidden"},[t(l["a"],{attrs:{absolute:"",color:"#ff6600",dark:"","shrink-on-scroll":"",prominent:"",src:"http://cms.navigatetheplanet.co.uk/wp-content/uploads/2022/08/IMG_4080.jpg","fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-3","scroll-threshold":"500"},scopedSlots:e._u([{key:"img",fn:function({props:a}){return[t(g["a"],e._b({attrs:{gradient:"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},"v-img",a,!1))]}},{key:"extension",fn:function(){return e._l(e.childCats,(function(a){return t(j["a"],{key:a.id,attrs:{"align-with-title":""}},[t(_["a"],{on:{click:function(t){return e.getPosts(a.id)}}},[e._v(e._s(a.name))])],1)}))},proxy:!0}])},[t(d["a"],{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),t(h["a"],{staticStyle:{width:"400px"}},[e._v("Navigate The Planet")]),t(k["a"])],1),t(y["a"],{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-3","max-height":"900"}},[t(c["a"],{staticStyle:{height:"900px"}},[e.postsShowing?t("div",[t("Posts",{attrs:{posts:e.posts}})],1):t("div",[t("Home")],1)])],1),t(b["a"],{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(f["a"],[t(w["a"]),t(v["a"],[t(v["b"],[e._v("Our Places")])],1)],1),t(m["a"]),t(p["a"],{attrs:{dense:""}},[t(f["a"],[t(v["a"],[t(v["b"],{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.getLatestPosts()}}},[e._v("Latest Posts")])],1)],1),e._l(e.parentCats,(function(a){return t(f["a"],{key:a.id,attrs:{link:""}},[t(v["a"],[t(v["b"],{on:{click:function(t){return e.getChildCats(a.id)}}},[e._v(e._s(a.name))])],1)],1)}))],2)],1)],1)},C=[],T=a("bc3a"),O=a.n(T),P=a("5e66"),S=a("3e35"),L=a("169a"),I=a("b687"),W=function(){var e=this,t=e._self._c;return t(c["a"],{staticStyle:{"margin-top":"240px"},attrs:{fluid:"",width:"100%"}},[e._l(e.posts,(function(a){return t("div",{key:a.id},[t(I["a"],{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"},model:{value:e.isActive,callback:function(t){e.isActive=t},expression:"isActive"}},[t("div",{staticStyle:{border:"1px solid black","margin-bottom":"30px","margin-top":"30px",padding:"20px"}},[a.imageone?t(P["a"],{attrs:{id:"ntpcarousel","show-arrows":!1}},[a.imageone?t(S["a"],{key:a.id,attrs:{src:a.imageone,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(t){return e.fullscreen(a.id)}}}):e._e(),a.imagetwo?t(S["a"],{key:a.id,attrs:{src:a.imagetwo,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(t){return e.fullscreen(a.id)}}}):e._e(),a.imagethree?t(S["a"],{key:a.id,attrs:{src:a.imagethree,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(t){return e.fullscreen(a.id)}}}):e._e(),a.imagefour?t(S["a"],{key:a.id,attrs:{src:a.imagefour,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(t){return e.fullscreen(a.id)}}}):e._e(),a.imagefive?t(S["a"],{key:a.id,attrs:{src:a.imagefive,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(t){return e.fullscreen(a.id)}}}):e._e(),a.imagesix?t(S["a"],{key:a.id,attrs:{src:a.imagesix,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(t){return e.fullscreen(a.id)}}}):e._e(),a.imageseven?t(S["a"],{key:a.id,attrs:{src:a.imageseven,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(t){return e.fullscreen(a.id)}}}):e._e(),a.imageeight?t(S["a"],{key:a.id,attrs:{src:a.imageeight,"reverse-transition":"fade-transition",transition:"fade-transition"},on:{click:function(t){return e.fullscreen(a.id)}}}):e._e()],1):e._e(),t("h1",{domProps:{innerHTML:e._s(a.title)}}),t("p",[e._v(e._s(a.postdate))]),t("p",[e._v(e._s(a.author))]),t("p",{staticStyle:{"white-space":"pre-wrap"},domProps:{innerHTML:e._s(a.content)}})],1)])],1)})),t(L["a"],{staticStyle:{"z-index":"10"},attrs:{overlay:"",transition:"dialog-bottom-transition",width:"100%"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(u["a"],[e.modalimages.imageone?t(P["a"],{attrs:{id:"ntpcarousel","show-arrows":!1,height:"auto",width:"600px"}},[e.modalimages.imageone?t(S["a"],{key:e.modalimages.id+"mod",attrs:{src:e.modalimages.imageone,"reverse-transition":"fade-transition",transition:"fade-transition"}}):e._e(),e.modalimages.imagetwo?t(S["a"],{key:e.modalimages.id+"mod",attrs:{src:e.modalimages.imagetwo,"reverse-transition":"fade-transition",transition:"fade-transition"}}):e._e(),e.modalimages.imagethree?t(S["a"],{key:e.modalimages.id+"mod",attrs:{src:e.modalimages.imagethree,"reverse-transition":"fade-transition",transition:"fade-transition"}}):e._e(),e.modalimages.imagefour?t(S["a"],{key:e.modalimages.id+"mod",attrs:{src:e.modalimages.imagefour,"reverse-transition":"fade-transition",transition:"fade-transition"}}):e._e(),e.modalimages.imagefive?t(S["a"],{key:e.modalimages.id+"mod",attrs:{src:e.modalimages.imagefive,"reverse-transition":"fade-transition",transition:"fade-transition"}}):e._e(),e.modalimages.imagesix?t(S["a"],{key:e.modalimages.id+"mod",attrs:{src:e.modalimages.imagesix,"reverse-transition":"fade-transition",transition:"fade-transition"}}):e._e(),e.modalimages.imageseven?t(S["a"],{key:e.modalimages.id+"mod",attrs:{src:e.modalimages.imageseven,"reverse-transition":"fade-transition",transition:"fade-transition"}}):e._e(),e.modalimages.imageeight?t(S["a"],{key:e.modalimages.id+"mod",attrs:{src:e.modalimages.imageeight,"reverse-transition":"fade-transition",transition:"fade-transition"}}):e._e()],1):e._e()],1)],1)],2)},H=[],A={data:()=>({parentCats:[],childCats:[],drawer:!1,selectedImage:null,isActive:!1,dialog:!1,modalimages:{}}),props:["posts"],mounted(){},methods:{fullscreen(e){O.a.get("https://cms.navigatetheplanet.co.uk/wp-json/getposts/v1/post?id="+e,{headers:{"Content-Type":"application/json"}}).then(e=>{this.modalimages=e.data[0],console.log(this.modalimages)}).catch((function(e){console.log(e)})),this.dialog=!0}}},M=A,D=a("2877"),N=Object(D["a"])(M,W,H,!1,null,null,null),q=N.exports,z=function(){var e=this;e._self._c;return e._m(0)},F=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"margin-top":"240px"}},[t("p",[e._v("Hi there! We are Cat & Leon, originating from the UK .")]),t("p",[e._v("This is our personal, ‘warts and all’ travel blog, with a little foodie blogging too, just because we love food & drink!! I am hoping to organise all our past photos and memories into here eventually, but one step at a time eh.")]),t("p",[e._v("This is a site primarily for us to document our travels/ food/ life experience, so we can look back on the memories, and all the little things that might have been forgotten otherwise. It is a continual work in progress, and will no doubt evolve as we do.")]),t("p",[e._v("Whether you enjoy reading along with us, or if you are looking for ideas, or if you just like looking at the photos, a warm welcome.")]),t("p",[t("b",[e._v("How it started:")]),e._v(" Leon very hastily first created the ‘Cat & Leon’s World Tour’ blog to document our trip around the world during a 2 month break from work in November 2017. The original purpose was to capture our journey of selling up the house, leaving the jobs, and going on a journey around the World for a couple of months, while also allowing friends and family to keep track of us, and join in with our adventure. We have enjoyed reading back our blogs so much, that we decided we needed a site that we could encompass all our travels and holidays, so we have plenty of memories to reminisce over in our years to come. Leon has also come a long way with his web development skills, and wanted to re-design and lay out the website to work more efficiently with the latest languages and frameworks he has been teaching himself with Udemy, and also learning with more recent employment opportunities.")]),t("p",[e._v("The original blog archives were in PHP with no framework, & more rudimentary, which are in the process of being fully added (I’m up to Hawaii!).")]),t("p",[t("b",[e._v("So… about us!")]),e._v(" The first thing most people would associate with us is music! It has always been entwined within our relationship and probably always will. We met at a music school, we have always enjoyed live music festivals / gigs together and have played in several local bands.")]),t("p",[e._v("Our story leading up to the ‘World Tour’: There were several catalysts for taking the plunge and selling 90% of our belongings. The first was a chat with Leon’s parents over dinner, where they told us about their travels around Europe (before Leon and his sister, were born). We were in awe and just a teensy bit jealous, and realised we wanted to be able to experience these rich and lasting moments that can shape and define your very being. The additional points that pushed us towards making this move were, that we had sold our house and ready to move into a house in the countryside, but started having doubts about being even more financially burdened. An experience over owning stuff has always been a strong belief for both of us. Also, there were some unfortunate and sad circumstances with friends and ex-colleagues leading to a sudden realisation that nothing should be taken for granted. That ideal retirement is not guaranteed! We had good advice and guidance from deep conversations with a ‘wise old goat’. He told us to ‘LIVE!’. What are we waiting for? Cat felt it was a now of never moment, being mortgage free, and no dependents or animals at that time.")]),t("p",[e._v("After some reassurance, Leon came round to the idea and became more amenable to the adventure, with a compromise of two months, and see how we go from there. We decided this would be a good way to test our spirits and open ourselves to opportunity. Leon had to give up his job (but would later be told the department was all made redundant, so dodged a bit of a bullet!), and Cat’s workplace kept the post open for 2 months, as Christmas time is quiet in Opticians, and they had some reliable self-employed/ part time staff who were willing to take on some extra hours. We were very thankful of being able to go, and still have at least 1 job to come back to. Although nothing could have prepared Cat for the changes that would take place while away, and ended up parting ways with that company in May 2018 anyhow! But all for a reason.")]),t("p",[e._v("Cat’s parents kindly took us into their home. That, we are super grateful for. To be able to take a leap into the unknown, but also having a safety net of a roof over our heads, and a place to stash a few choice possessions was a very fortunate situation. We also joined a website called ‘trusted house sitters’. This was to get an insight into other people’s way of living, know what it is like to live in different areas, and to educate us better in our future decisions when choosing a place to call home.")]),t("p",[e._v("We wrote our little individual blurbs about each other back in Nov 2017 for the original website, which I thought would be nice to keep:")]),t("p",[e._v("‘This is an introduction to my lovely husband Leon; he is a very kind and humble soul and true gentleman (a credit to his wonderful & supportive parents, Jackie & Andy, and his beloved Grandparents, who I know will be just as proud of him). He is truly the most talented musician I have had the pleasure to listen to & play with and also can be as stubborn as a mule! Yes, I am talking about your use of indicator ‘logic’ on roundabouts! I am so very proud that he has taken the leap to become a Web Developer and pushed himself further than he probably thought he was ever capable of. I have really seen him blossom since learning to drive (better late than never eh! Pot-kettle hehe). May we continue to share wonderful memories and moments together for the rest of our lives. THANK YOU for agreeing to come on the journey of my dreams. ‘")]),t("p",[e._v("‘Ok, so I’m not as articulate as my beautiful wife, but here we go. Cat is caring, selfless, tenacious, intelligent and crazy good fun to be around. She inspires me, pushes me and keeps me on my toes on a daily basis. Without Cat, I would not have got into Web Development and certainly would not have learnt to drive this year. Cat is super driven to do whatever she wants. She achieved incredible results in her Dispensing Optician qualification (oh yeah, can we mention Cat’s letters FBDO QTLS) and is incredible at her job. That’s another thing, and I need to get a hang of this. If Cat has an idea, (teaching Optics in London, teaching maths in the devil’s bumhole that is Milton Keynes, or nursery nursing) she will just do it, nothing gets in her way and she is awesome! During our most recent holiday (at time of writing, Tenerife), we had issues with the accommodation being 10 miles from the location given, we rolled with the punches and got stuff sorted in searing heat – with little sweat – I know this journey will have its craziness, but I know we’ll smash it together! … Onwards and upwards here’s to the experiences to come up! One last thing we would both like to say is thank-you to our amazing friends and family who have been so encouraging & supportive.")]),t("p",[e._v("What a journey it has been since! Phew! And here is to making many more memories (and blogging them!)… I wonder what will happen next?")])])}],B={data:()=>({parentCats:[],childCats:[],drawer:!1,posts:[]}),mounted(){},methods:{}},J=B,K=Object(D["a"])(J,z,F,!1,null,null,null),U=K.exports,Y={components:{Posts:q,Home:U},data:()=>({parentCats:[],childCats:[],drawer:!1,posts:{},postsShowing:!1,isHome:!0}),mounted(){this.getCats(),this.getLatestPosts()},methods:{getCats(){O.a.get("https://cms.navigatetheplanet.co.uk/wp-json/wp/v2/categories?parent=0&per_page=100",{headers:{"Content-Type":"application/json"}}).then(e=>{this.parentCats=e.data,console.log(this.parentCats)}).catch((function(e){console.log(e)}))},getChildCats(e){this.isHome=!1,this.getPosts(e),this.drawer=!1,O.a.get("https://cms.navigatetheplanet.co.uk/wp-json/wp/v2/categories?parent="+e+"&per_page=100",{headers:{"Content-Type":"application/json"}}).then(e=>{this.childCats=e.data}).catch((function(e){console.log(e)}))},getLatestPosts(){this.isHome=!0,this.postsShowing=!0,O.a.get("https://cms.navigatetheplanet.co.uk/wp-json/getrecentposts/v1/getrecentposts",{headers:{"Content-Type":"application/json"}}).then(e=>{this.posts=e.data}).catch((function(e){console.log(e)}))},getPosts(e){this.isHome=!1,this.postsShowing=!0,O.a.get("https://cms.navigatetheplanet.co.uk/wp-json/getposts/v1/posts?id="+e,{headers:{"Content-Type":"application/json"}}).then(e=>{this.posts=e.data}).catch((function(e){console.log(e)}))}}},E=Y,G=Object(D["a"])(E,x,C,!1,null,null,null),Q=G.exports,V=a("62ad"),$=a("553a"),R=a("0fd9"),X=function(){var e=this,t=e._self._c;return t($["a"],{attrs:{color:"primary lighten-1",padless:""}},[t(R["a"],{attrs:{justify:"center","no-gutters":""}},[t(V["a"],{staticClass:"primary lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t("strong",[e._v("Navigate The Planet ©"+e._s((new Date).getFullYear())+" ")])])],1)],1)},Z=[],ee={data:()=>({links:["Home","Blogs","About","Link","Link","Link"]})},te=ee,ae=Object(D["a"])(te,X,Z,!1,null,null,null),oe=ae.exports,ne={name:"App",components:{Menu:Q,Footer:oe},data:()=>({})},ie=ne,se=Object(D["a"])(ie,s,r,!1,null,null,null),re=se.exports,le=a("f309");o["a"].use(le["a"]);var de=new le["a"]({}),he=a("130e");o["a"].config.productionTip=!1,o["a"].use(he["a"],O.a),new o["a"]({vuetify:de,render:e=>e(re)}).$mount("#app")}});
//# sourceMappingURL=app.29b95388.js.map