(this.webpackJsonpnweb=this.webpackJsonpnweb||[]).push([[0],{25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(18),c=t.n(l),o=(t(24),t(25),t(26),t(27),["btn--primary","btn--outline"]),m=["btn--medium","btn--large","btn--mobile","btn--wide"],i=["primary","blue","red","green"],s=function(e){var a=e.children,t=e.type,n=e.onClick,l=e.buttonStyle,c=e.buttonSize,s=e.buttonColor,u=o.includes(l)?l:o[0],h=m.includes(c)?c:m[0],d=i.includes(s)?s:null;return r.a.createElement("button",{className:"btn ".concat(u," ").concat(h," ").concat(d),onClick:n,type:t},a)},u=t(6);var h=function(e){var a=e.lightBg,t=e.topLine,n=e.lightText,l=e.lightTextDesc,c=e.headline,o=e.description,m=e.buttonLabel,i=e.img,h=e.alt,d=e.imgStart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a?"home__hero-section":"home__hero-section darkBg"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===d?"row-reverse":"row"}},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"home__hero-text-wrapper"},r.a.createElement("div",{className:"top-line"},t),r.a.createElement("h1",{className:n?"heading":"heading dark"},c),r.a.createElement("p",{className:l?"home__hero-subtitle":"home__hero-subtitle dark"},o),r.a.createElement("div",{className:"buttonwrapper"},r.a.createElement(u.b,{to:"/contact"},r.a.createElement(s,{buttonSize:"btn--wide",buttonColor:"blue"},m))))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"home__hero-img-wrapper"},r.a.createElement("img",{src:i,alt:h,className:"home__hero-img"})))))))},d={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"",headline:"Welcome",description:"Hey! \ud83d\udc4b I'm Nick, a software developer who builds cool apps using React, Python, and containers. Currently, I'm working on a social platform for students.",buttonLabel:"Contact Me",imgStart:"",img:t.p+"static/media/inspiration.a5f0485a.png",alt:"Inspiration"};var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,d))};t(33);var b=function(e){var a=e.lightBg,t=e.topLine,n=e.lightText,l=e.lightTextDesc,c=e.headline,o=e.description1,m=e.description2,i=(e.buttonLabel,e.img),s=e.alt,u=e.imgStart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a?"home__hero-section":"home__hero-section darkBg"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===u?"row-reverse":"row"}},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"home__hero-text-wrapper"},r.a.createElement("div",{className:"top-line"},t),r.a.createElement("h1",{className:n?"heading":"heading dark"},c),r.a.createElement("p",{className:l?"home__hero-subtitle":"home__hero-subtitle dark"},o),r.a.createElement("p",{className:l?"home__hero-subtitle":"home__hero-subtitle dark"},m))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"home__hero-img-wrapper"},r.a.createElement("img",{src:i,alt:s,className:"home__hero-img"})))))))},E={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"",headline:"About The Author",description1:"I'm a fullstack developer living in Lowell, Massachusetts. I work with a stack of Python, React, and container technologies.",description2:"I'm passionate about automation, learning new technologies, and increasing my productivity. \n In my spare time I enjoy learning     music production, hiking, gaming, and staying fit.",buttonLabel:"",imgStart:"start",img:t.p+"static/media/nn-headshot.d73643b0.jpeg",alt:""};var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,E))};t(34);var g=function(e){var a=e.lightBg,t=e.topLine,n=e.lightText,l=e.lightTextDesc,c=e.headline,o=e.description,m=(e.buttonLabel,e.img),i=e.alt,s=e.imgStart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a?"home__hero-section":"home__hero-section darkBg"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===s?"row-reverse":"row"}},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"home__hero-text-wrapper"},r.a.createElement("div",{className:"top-line"},t),r.a.createElement("h1",{className:n?"heading":"heading dark"},c),r.a.createElement("p",{className:l?"home__hero-subtitle":"home__hero-subtitle dark"},o))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"home__hero-img-wrapper"},r.a.createElement("img",{src:m,alt:i,className:"home__hero-img"})))))))},v={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"",headline:"Contact Me",description:"Contact me via email at nicholas.norcross@gmail.com, or use the form below! I will get back to you as fast as I can.",buttonLabel:"Get Started",imgStart:"start",img:t.p+"static/media/contact.e55ae0ae.png",alt:"Contact"},f=t(11),w=t.n(f);function A(e){e.preventDefault(),w.a.sendForm("service_bumfgd7","template_3puf2mi",e.target,"user_7A6hmVeSfbIyigLZxEszs").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)})),e.target.reset()}Object(f.init)("user_7A6hmVeSfbIyigLZxEszs");var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,v),r.a.createElement("div",{className:"box"},r.a.createElement("form",{onSubmit:A},r.a.createElement("div",{className:"innerbox"},r.a.createElement("div",{className:"col-8 form-group mx-auto"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",name:"name"})),r.a.createElement("div",{className:"col-8 form-group pt-2 mx-auto"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email Address",name:"email"})),r.a.createElement("div",{className:"col-8 form-group pt-2 mx-auto"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Subject",name:"subject"})),r.a.createElement("div",{className:"col-8 form-group pt-2 mx-auto"},r.a.createElement("textarea",{className:"form-control",id:"",cols:"30",rows:"8",placeholder:"Your message",name:"message"})),r.a.createElement("div",{className:"col-6 pt-1 mx-auto"},r.a.createElement("input",{type:"submit",className:"btn btn-info",value:"Send Message"}))))))},y=t(2),L=t(15),j=(t(37),t(9)),x=t(0);var R=function(){var e=Object(n.useState)(!1),a=Object(L.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!0),o=Object(L.a)(c,2),m=(o[0],o[1]),i=function(){return l(!1)},s=function(){window.innerWidth<=960?m(!1):m(!0)};return Object(n.useEffect)((function(){s()}),[]),window.addEventListener("resize",s),r.a.createElement(r.a.Fragment,null,r.a.createElement(x.b.Provider,{value:{color:"#fff"}},r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container container"},r.a.createElement(u.b,{to:"/",className:"navbar-logo",onClick:i},r.a.createElement("img",{className:"logo",src:"data:image/png;base64,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",alt:""}),"nick.norcross()"),r.a.createElement("div",{className:"menu-icon",onClick:function(){return l(!t)}},t?r.a.createElement(j.d,null):r.a.createElement(j.a,null)),r.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/",className:"nav-links",onClick:i},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/about",className:"nav-links",onClick:i},"About Me")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/contact",className:"nav-links",onClick:i},"Contact")))))))};t(38);var S=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("section",{className:"social-media"},r.a.createElement("div",{className:"social-media-wrap"},r.a.createElement("small",{className:"website-rights"},"Nick Norcross \xa9 2021"),r.a.createElement("div",{className:"social-icons"},r.a.createElement(u.b,{className:"social-icon-link",to:"//www.linkedin.com/in/nicholas-norcross/",target:"_blank","aria-label":"LinkedIn"},r.a.createElement(j.c,null)),r.a.createElement(u.b,{className:"social-icon-link",to:"//www.github.com/nnorx",target:"_blank","aria-label":"Github"},r.a.createElement(j.b,null))))))};var F=function(){return r.a.createElement(u.a,null,r.a.createElement(R,null),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/",exact:!0,component:p}),r.a.createElement(y.a,{path:"/about",component:N}),r.a.createElement(y.a,{path:"/contact",component:k})),r.a.createElement(S,null))};c.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.bec718b7.chunk.js.map