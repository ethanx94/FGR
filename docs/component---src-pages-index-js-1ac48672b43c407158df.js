(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);a(73),a(54),a(161);var n=a(0),r=a.n(n),l=function(e){var t=e.data,a=t.givenName,n=t.lastName,l=t.born,c=t.died,s=t.buried,i=t.married,o=t.sex,m=(t.notes,e.type);return r.a.createElement(r.a.Fragment,null,r.a.createElement("thead",null,r.a.createElement("tr",{className:"header"},r.a.createElement("td",{colSpan:"2"},r.a.createElement("strong",null,""+(m[0].toUpperCase()+m.slice(1))),r.a.createElement("br",null),"Given name(s)"),r.a.createElement("td",{className:"no-left"},a),r.a.createElement("td",null,"Last",r.a.createElement("br",null),"Name"),r.a.createElement("td",{className:"no-left"},n))),r.a.createElement("tbody",null,r.a.createElement("tr",null,"children"===m?r.a.createElement("td",{className:"center label"},"Sex"):r.a.createElement("td",{className:"center label no-bottom"}),r.a.createElement("td",{className:"label"},"Born"),r.a.createElement("td",{className:"no-left"},l.date),r.a.createElement("td",{className:"label"},"Place"),r.a.createElement("td",{className:"no-left"},l.place)),r.a.createElement("tr",null,r.a.createElement("td",{className:"center",rowSpan:"5"},o),r.a.createElement("td",{className:"label"},"Died"),r.a.createElement("td",{className:"no-left"},c.date),r.a.createElement("td",{className:"label"},"Place"),r.a.createElement("td",{className:"no-left"},c.date)),r.a.createElement("tr",null,r.a.createElement("td",{className:"label"},"Buried"),r.a.createElement("td",{className:"no-left"},s.date),r.a.createElement("td",{className:"label"},"Place"),r.a.createElement("td",{className:"no-left"},s.date)),r.a.createElement("tr",null,r.a.createElement("td",{className:"label"},"Married"),r.a.createElement("td",{className:"no-left"},i.date),r.a.createElement("td",{className:"label"},"Place"),r.a.createElement("td",{className:"no-left"},i.date)),r.a.createElement("tr",null,r.a.createElement("td",null,"Notes"),r.a.createElement("td",{className:"no-left",colSpan:"3"})),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"4"}," "))))},c=a(149),s=a(147);a.d(t,"query",function(){return i});var i="2915740100";t.default=function(e){var t=e.data.github.viewer.gist.files,a=JSON.parse(t[0].text);return r.a.createElement(c.a,null,r.a.createElement(s.a,{title:"Family Group Record"}),r.a.createElement("table",{className:"table"},Object.keys(a).map(function(e,t){return Array.isArray(a[e])?a[e].map(function(e,t){return r.a.createElement(l,{key:t,data:e,type:"children"})}):r.a.createElement(l,{data:a[e],type:e,key:t})})))}},144:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Family Group Record"}}}}},146:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),s=a(56),i=a(2),o=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},147:function(e,t,a){"use strict";var n=a(148),r=a(0),l=a.n(r),c=a(4),s=a.n(c),i=a(152),o=a.n(i);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,s=e.title,i=n.data.site,m=t||i.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Family Group Record",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},149:function(e,t,a){"use strict";var n=a(145),r=a(0),l=a.n(r),c=a(4),s=a.n(c),i=a(32),o=a.n(i),m=(a(144),l.a.createContext({})),d=function(e){return l.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};a(150);var u=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var p=u,E=(a(151),function(e){var t=e.children;return l.a.createElement(d,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});E.propTypes={children:s.a.node.isRequired};t.a=E},161:function(e,t,a){var n=a(25),r=a(34);a(162)("keys",function(){return function(e){return r(n(e))}})},162:function(e,t,a){var n=a(11),r=a(17),l=a(18);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],c={};c[e]=t(a),n(n.S+n.F*l(function(){a(1)}),"Object",c)}}}]);
//# sourceMappingURL=component---src-pages-index-js-1ac48672b43c407158df.js.map