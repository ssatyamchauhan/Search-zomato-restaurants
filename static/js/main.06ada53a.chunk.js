(this["webpackJsonpzomato-restaurants"]=this["webpackJsonpzomato-restaurants"]||[]).push([[0],{28:function(e,t,a){e.exports=a(60)},33:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),s=a.n(o),c=(a(33),a(10)),l=a.n(c),i=a(9),u=a(27),d=a(11),m=a.n(d);a(53);function v(){var e=r.a.useState({data:[],responseStatus:""}),t=Object(u.a)(e,2),a=t[0],n=t[1];r.a.useEffect((function(){m()({method:"GET",url:"https://developers.zomato.com/api/v2.1/geocode?lat=28.57005&lon=77.32317",headers:{"user-key":"ff4f897b8bc0d97ccd3ed25a6b951fd3","content-type":"application/json"}}).then((function(e){var t=[],r={},o=e.data.nearby_restaurants,s=!0,c=!1,l=void 0;try{for(var u,d=o[Symbol.iterator]();!(s=(u=d.next()).done);s=!0){var m=u.value;r.name=m.restaurant.name,r.average_cost_for_two=m.restaurant.average_cost_for_two,r.has_online_delivery=m.restaurant.has_online_delivery?"Available":"Not Available",r.rating=m.restaurant.user_rating.aggregate_rating,r.cuisines=m.restaurant.cuisines.split(","),r.rating_text=m.restaurant.user_rating.rating_text,r.featured_image=m.restaurant.featured_image,r.location=m.restaurant.location.locality,t.push(r),r={}}}catch(v){c=!0,l=v}finally{try{s||null==d.return||d.return()}finally{if(c)throw l}}n(Object(i.a)({},a,{data:t,responseStatus:"Here is the list of Zomato-Restaurants based on your location"}))})).catch((function(e){n(Object(i.a)({},a,{responseStatus:"You have not enetered the correct location, please Enter the correct location"}))}))}),[]);var o=function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",m()({method:"GET",url:"https://developers.zomato.com/api/v2.1/locations?query=".concat(e),headers:{"user-key":"ff4f897b8bc0d97ccd3ed25a6b951fd3","content-type":"application/json"}}).then((function(e){return{long:e.data.location_suggestions[0].longitude,lati:e.data.location_suggestions[0].latitude}})).catch((function(e){console.log(e)})));case 1:case"end":return t.stop()}}))},s=a.data.map((function(e,t){return r.a.createElement("div",{className:"Card",key:t},r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement("article",null,r.a.createElement("div",{className:"first-div"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:e.featured_image,alt:"Low Internet Connectivity"})),r.a.createElement("div",{className:"img-details"},r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"restaurant-name"},r.a.createElement("h3",null,e.name)),r.a.createElement("div",{className:"restaurnat-place"},e.location)),r.a.createElement("div",{className:"ratings"},r.a.createElement("span",null,"Ratings"),r.a.createElement("div",{className:"ratings"},e.rating)))),r.a.createElement("div",{className:"divider div-transparent"}),r.a.createElement("div",{className:"text"},r.a.createElement("div",{className:"Row"},r.a.createElement("span",null,"CUISINES:"),r.a.createElement("span",null,e.cuisines.slice(0,4))),r.a.createElement("div",{className:"Row"},r.a.createElement("span",null,"COST FOR TWO:"),r.a.createElement("span",null,e.average_cost_for_two)),r.a.createElement("div",{className:"Row"},r.a.createElement("span",null,"ONLINE_DELIVERY:"),r.a.createElement("span",null,e.has_online_delivery)),r.a.createElement("div",{className:"Row"},r.a.createElement("span",null,"Rating Text:"),r.a.createElement("span",null,e.rating_text)))))))}));return r.a.createElement("div",null,r.a.createElement("input",{className:"inputCard",type:"text",placeholder:"Noida",onKeyPress:function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if("Enter"!==e.key){t.next=3;break}return t.next=3,l.a.awrap(o(e.target.value).then((function(e){m()({method:"GET",url:"https://developers.zomato.com/api/v2.1/geocode?lat=".concat(e.lati,"&lon=").concat(e.long),headers:{"user-key":"ff4f897b8bc0d97ccd3ed25a6b951fd3","content-type":"application/json"}}).then((function(e){var t=[],r={},o=e.data.nearby_restaurants,s=!0,c=!1,l=void 0;try{for(var u,d=o[Symbol.iterator]();!(s=(u=d.next()).done);s=!0){var m=u.value;r.name=m.restaurant.name,r.average_cost_for_two=m.restaurant.average_cost_for_two,r.has_online_delivery=m.restaurant.has_online_delivery?"Available":"Not Available",r.rating=m.restaurant.user_rating.aggregate_rating,r.cuisines=m.restaurant.cuisines.split(","),r.rating_text=m.restaurant.user_rating.rating_text,r.featured_image=m.restaurant.featured_image,r.location=m.restaurant.location.locality,t.push(r),r={}}}catch(v){c=!0,l=v}finally{try{s||null==d.return||d.return()}finally{if(c)throw l}}n(Object(i.a)({},a,{data:t,responseStatus:"Here is the list of Zomato-Restaurants based on your location"}))})).catch((function(e){console.log(e)}))})).catch((function(e){return n(Object(i.a)({},a,{responseStatus:"You have not enetered the correct location, please Enter the correct location"}))})));case 3:case"end":return t.stop()}}))}}),r.a.createElement("div",{className:"inputCards"},a.responseStatus," "),s)}var p=a(24),f=a(6);a(54);var g=function(){return r.a.createElement(p.a,null,r.a.createElement(f.a,{path:"/",component:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.06ada53a.chunk.js.map