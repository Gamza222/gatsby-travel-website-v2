"use strict";(self.webpackChunkgatsby_travel_website_v2=self.webpackChunkgatsby_travel_website_v2||[]).push([[501],{1046:function(e,t,n){n.d(t,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return r.createElement(m,o({attr:o({},e.attr)},t),c(e.child))}}function m(e){var t=function(t){var n,a=e.attr,l=e.size,c=e.title,s=i(e,["attr","size","title"]),m=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}},6434:function(e,t,n){n.d(t,{z:function(){return l}});var r=n(9),a=n(1597),l=(0,r.default)(a.Link).withConfig({displayName:"Button",componentId:"sc-7uietv-0"})(["background:",";white-space:nowrap;padding:",";color:#fff;font-size:",";border-radius:",";outline:none;border:none;min-width:100px;cursor:pointer;text-decoration:none;transition:.3s !important;&:hover{background:",";transform:translateY(2px);}"],(function(e){return"true"===e.primary?"#F26A2E":"#077BF1"}),(function(e){return"true"===e.big?"16px 40px":"14px 32px"}),(function(e){return"true"===e.big?"20px":"16px"}),(function(e){return"true"===e.round?"50px":"0"}),(function(e){return"true"===e.primary?"#077BF1":"#F26A2E"}))},4573:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(){return r.createElement("div",{className:"email-container",id:"#Contact"},r.createElement("div",{className:"email-content"},r.createElement("h2",null,"Get Access to Exlusive Offers"),r.createElement("p",null,"Sign up for your newsletter below to get $100 off your first trip!"),r.createElement("form",{action:"",className:"email-form",id:"email-form"},r.createElement("div",{className:"form-wrap"},r.createElement("label",{htmlFor:"email"},r.createElement("input",{type:"email",id:"email",placeholder:"Enter your email"})),r.createElement("button",{for:"email-form",type:"submit"},"Submit")))))}},2353:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(7294),a=n(9),l=n(1597),o=n(3201),i=[{title:"Home",link:"/"},{title:"Trips",link:"/trips"},{title:"Testimonials",link:"/testimonials"},{title:"Contact",link:"/contact"}],c=n(6434);function s(e){var t=(0,r.useState)(!1),n=t[0],a=t[1];return r.createElement(m,{id:"Header",$_css:e.color},r.createElement("div",{className:"navbar "+(n?"active":"")},r.createElement(l.Link,{to:"/"},"EXPLORIX"),r.createElement(o.Fm7,{className:"bars",onClick:function(){a(!n)}}),r.createElement("div",{className:"navMenu"},i.map((function(e,t){return r.createElement(l.Link,{to:e.link,key:t,className:"nav-link"},e.title)}))),r.createElement(u,{primary:"true",round:"true",to:"/trips",big:"false",className:"header-btn"},"Book a Flight"),r.createElement("div",{className:"allnav-menu"},r.createElement("div",{className:"small-nav-menu"},i.map((function(e,t){return r.createElement(l.Link,{to:e.link,key:t,className:"nav-link"},e.title)}))),r.createElement(f,{primary:"true",round:"true",to:"/trips",big:"false"},"Book a Flight"))))}var m=(0,a.default)("header").withConfig({displayName:"Header___StyledHeader",componentId:"sc-1bz081x-0"})(["background-color:",";"],(function(e){return e.$_css})),u=(0,a.default)(c.z).withConfig({displayName:"Header___StyledButton",componentId:"sc-1bz081x-1"})(["height:48px;"]),f=(0,a.default)(c.z).withConfig({displayName:"Header___StyledButton2",componentId:"sc-1bz081x-2"})(["height:48px;width:175px;text-align:center;"]),d=(0,a.createGlobalStyle)(["*{font-family:'Roboto',sans-serif;margin:0;padding:0;box-sizing:border-box;}"]);function p(){return r.createElement("div",{className:"footer-container"},r.createElement("div",{className:"footer-wrapper"},r.createElement("div",{className:"footer-description"},r.createElement("h2",null,"Explorix"),r.createElement("p",null," We strive to create the best experience for our customers")),r.createElement("div",{className:"footer-links"},r.createElement("h3",null,"Information"),r.createElement(l.Link,{to:"#Contact"},"Trips"),r.createElement(l.Link,{to:"#Header"},"About"),r.createElement(l.Link,{to:"#Trips"},"Contact"))),r.createElement("div",{className:"footer-wrapper"},r.createElement("div",{className:"footer-links"},r.createElement("h3",null,"Videos"),r.createElement(l.Link,{to:"/"},"Agency"),r.createElement(l.Link,{to:"/"},"Influencer"),r.createElement(l.Link,{to:"/"},"Ambasadors"),r.createElement(l.Link,{to:"/"},"Submut Video")),r.createElement("div",{className:"footer-links"},r.createElement("h3",null,"Social Media"),r.createElement(l.Link,{to:"#"},"Twitter"),r.createElement(l.Link,{to:"https://www.linkedin.com/in/gamza-ramazanov-790b7b231/"},"LinkedIn"),r.createElement(l.Link,{to:"https://www.instagram.com/fckm.fff/"},"Instagram"))))}function E(e){return console.log(e.color),r.createElement(r.Fragment,null,r.createElement(d,null),r.createElement(s,{color:e.color}),r.createElement("main",null,e.children),r.createElement(p,null))}},5791:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(7294),a=n(4573),l=n(2353);function o(){return r.createElement(l.Z,{color:"black"},r.createElement(a.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-f5295807177571cf287c.js.map