"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{650:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var o=n(7294),r=n(917),i=n(9),a=n(5444),l=function(){return(0,a.useStaticQuery)("904150326").allMdx.nodes},c=i.default.div.withConfig({displayName:"EmptyPost__Container",componentId:"sc-1bkf1su-0"})(["margin-top:40px;"]),s=i.default.h1.withConfig({displayName:"EmptyPost__Title",componentId:"sc-1bkf1su-1"})(["font-size:",";text-align:center;color:",";"],(function(e){return e.theme.sizes.medium}),(function(e){return e.theme.colors.gray3})),m=function(e){var t=e.searchKeyword;return o.createElement(c,null,o.createElement(s,null,""!==t?"'"+t+"'에 대한 검색 결과가 없습니다":"글이 작성되지 않았습니다"))},u=n(1496),p=n(7591),d=n(6852),f=i.default.article.withConfig({displayName:"PostItem__Container",componentId:"sc-1977zie-0"})(["position:relative;width:360px;height:400px;display:flex;flex-direction:column;@media ","{width:100%;height:auto;}&:hover .post-item-copy-button{display:inherit;@media ","{display:none;}}&:hover .post-item-thumbnail{transform:scale(1.1);@media ","{transform:none;}}"],(function(e){return e.theme.device.mobile}),(function(e){return e.theme.device.mobile}),(function(e){return e.theme.device.mobile})),h=i.default.button.attrs({className:"post-item-copy-button"}).withConfig({displayName:"PostItem__CopyButton",componentId:"sc-1977zie-1"})(["display:none;position:absolute;z-index:2;top:12px;right:12px;padding:4px 8px;border:none;background-color:","cc;color:",";font-size:",";border-radius:4px;cursor:pointer;&:hover{background-color:","cc;}"],(function(e){return e.theme.colors.gray7}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.sizes.small}),(function(e){return e.theme.colors.gray6})),g=i.default.div.withConfig({displayName:"PostItem__ThumbnailWrapper",componentId:"sc-1977zie-2"})(["width:100%;height:200px;overflow:hidden;border-radius:4px;"]),x=(0,i.default)(u.Z).attrs({className:"post-item-thumbnail"}).withConfig({displayName:"PostItem__Thumbnail",componentId:"sc-1977zie-3"})(["width:100%;height:100%;object-fit:cover;transition:all 0.25s;"]),y=i.default.div.withConfig({displayName:"PostItem__PostInfoWrapper",componentId:"sc-1977zie-4"})(["flex:1;display:flex;flex-direction:column;padding:16px 0px;box-sizing:border-box;height:fit-content;"]),b=i.default.div.withConfig({displayName:"PostItem__PostContentWrapper",componentId:"sc-1977zie-5"})(["flex:1;"]),w=i.default.div.withConfig({displayName:"PostItem__Tags",componentId:"sc-1977zie-6"})(["width:100%;& > * + *{margin-left:8px;}"]),v=i.default.h2.withConfig({displayName:"PostItem__Title",componentId:"sc-1977zie-7"})(["display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;font-size:",";font-weight:bold;margin:",";"],(function(e){return e.theme.sizes.medium}),(function(e){var t;return null!==(t=e.margin)&&void 0!==t?t:"0"})),_=i.default.p.withConfig({displayName:"PostItem__Description",componentId:"sc-1977zie-8"})(["display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;color:",";text-overflow:ellipsis;margin:",";font-size:",";"],(function(e){return e.theme.colors.gray3}),(function(e){var t;return null!==(t=e.margin)&&void 0!==t?t:"0"}),(function(e){return e.theme.sizes.small})),C=i.default.span.withConfig({displayName:"PostItem__Date",componentId:"sc-1977zie-9"})(["font-size:",";color:",";"],(function(e){return e.theme.sizes.small}),(function(e){return e.theme.colors.gray4})),E=function(e){var t=e.post,n=(0,o.useState)(!1),r=n[0],i=n[1],l=(0,d.Z)().siteUrl,c=t.frontmatter.tags.map((function(e,t){return o.createElement(p.Z,{key:t,tag:e})}));return o.createElement(a.Link,{to:"/post/"+t.slug},o.createElement(f,null,o.createElement(h,{onClick:function(e){e.preventDefault(),navigator.clipboard.writeText(l+"/post/"+t.slug),i(!0),setTimeout((function(){i(!1)}),3e3)}},r?"Copied":"Copy URL"),t.frontmatter.thumbnail?o.createElement(o.Fragment,null,o.createElement(g,null,o.createElement(x,{fluid:t.frontmatter.thumbnail.childImageSharp.fluid})),o.createElement(y,null,o.createElement(b,null,o.createElement(w,null,c),o.createElement(v,{margin:"16px 0px 8px 0px"},t.frontmatter.title),o.createElement(_,{margin:"0px 0px 8px 0px"},t.frontmatter.description)),o.createElement(C,null,t.frontmatter.date))):o.createElement(y,null,o.createElement(b,null,o.createElement(v,{margin:"0px 0px 8px 0px"},t.frontmatter.title),o.createElement(_,{margin:"8px 0px 16px 0px"},t.frontmatter.description),o.createElement(w,null,c)),o.createElement(C,null,t.frontmatter.date))))},I=(0,i.keyframes)(["from{opacity:0;transform:translateY(80px);}to{opacity:1;transform:translateY(0px);}"]),z=i.default.section.withConfig({displayName:"PostList__Container",componentId:"sc-1um6wl5-0"})(["margin-bottom:80px"]),k=i.default.section.withConfig({displayName:"PostList__SearchContainer",componentId:"sc-1um6wl5-1"})(["display:flex;align-items:center;justify-content:flex-end;margin-bottom:40px;"]),P=i.default.input.withConfig({displayName:"PostList__SearchInput",componentId:"sc-1um6wl5-2"})(["border:1px solid ",";background-color:",";border-radius:8px;height:32px;padding:4px 8px;box-sizing:border-box;width:200px;outline:none;color:",";&:focus{border-color:",";}"],(function(e){return e.theme.colors.gray2}),(function(e){return e.theme.colors.gray0}),(function(e){return e.theme.colors.gray6}),(function(e){return e.theme.colors.gray3})),N=i.default.section.withConfig({displayName:"PostList__PostContainer",componentId:"sc-1um6wl5-3"})(["display:grid;row-gap:48px;animation:"," 1s;grid-template-columns:repeat(3,1fr);column-gap:calc(("," - 360px * 3) / 2);@media ","{column-gap:calc("," - 360px * 2);grid-template-columns:repeat(2,1fr);}@media ","{justify-items:center;grid-template-columns:repeat(1,1fr);}"],I,(function(e){return e.theme.inner.desktop}),(function(e){return e.theme.device.tablet}),(function(e){return e.theme.inner.tablet}),(function(e){return e.theme.device.mobile})),L=function(){var e=(0,o.useState)(""),t=e[0],n=e[1],r=l();(0,o.useEffect)((function(){var e,t,o=(e=location.search,t="q",new URLSearchParams(e).get(t));null!==o&&n(o)}),[]),(0,o.useEffect)((function(){history.pushState({},null,"?q="+t)}),[t]);var i=(""!==t?r.filter((function(e){return function(e,t){var n=e.frontmatter,o=n.title,r=n.tags;return!!o.toLowerCase().includes(t.toLowerCase())||r.some((function(e){return e.toLowerCase().includes(t.toLowerCase())}))}(e,t)})):r).map((function(e){return o.createElement(E,{key:e.id,post:e})}));return o.createElement(z,null,o.createElement(k,null,o.createElement(P,{placeholder:"검색어를 입력하세요.",value:t,onChange:function(e){var t=e.target;return n(t.value)}})),i.length>0?o.createElement(N,null,i):o.createElement(m,{searchKeyword:t}))},S=function(){var e=(0,d.Z)().description;return o.createElement(r.Z,{path:"/",title:"홈",description:e},o.createElement(L,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7ee55e26c4e25baf8cca.js.map