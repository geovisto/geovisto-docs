"use strict";
(self["webpackChunkgeovisto_docu"] = self["webpackChunkgeovisto_docu"] || []).push([[37643],{

/***/ 4533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogLayout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js + 34 modules
var Layout = __webpack_require__(91986);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(75489);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogSidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"sidebar":"sidebar_a9qW","sidebarItemTitle":"sidebarItemTitle_uKok","sidebarItemList":"sidebarItemList_Kvuv","sidebarItem":"sidebarItem_CF0Q","sidebarItemLink":"sidebarItemLink_miNk","sidebarItemLinkActive":"sidebarItemLinkActive_RRTD"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebar(_ref){let{sidebar}=_ref;if(sidebar.items.length===0){return null;}return/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.A)(styles_module.sidebar,'thin-scrollbar'),"aria-label":(0,Translate/* translate */.T)({id:'theme.blog.sidebar.navAriaLabel',message:'Blog recent posts navigation',description:'The ARIA label for recent posts in the blog sidebar'})},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(styles_module.sidebarItemTitle,'margin-bottom--md')},sidebar.title),/*#__PURE__*/react.createElement("ul",{className:styles_module.sidebarItemList},sidebar.items.map(item=>/*#__PURE__*/react.createElement("li",{key:item.permalink,className:styles_module.sidebarItem},/*#__PURE__*/react.createElement(Link/* default */.A,{isNavLink:true,to:item.permalink,className:styles_module.sidebarItemLink,activeClassName:styles_module.sidebarItemLinkActive},item.title)))));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44586);
;// CONCATENATED MODULE: ./src/theme/BlogLayout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Custom blog by Swizzle
 *
 * @author Iva Utikalova
 */function BlogLayout(props){const{sidebar,toc,children,...layoutProps}=props;const hasSidebar=sidebar&&sidebar.items.length>0;const{siteConfig}=(0,useDocusaurusContext/* default */.A)();const{blogTitle,tagline}=siteConfig;return/*#__PURE__*/react.createElement(Layout/* default */.A,layoutProps,/*#__PURE__*/react.createElement("div",{className:"blog container margin-vert--lg"},/*#__PURE__*/react.createElement("div",null,blogTitle),/*#__PURE__*/react.createElement("div",{className:"row"},hasSidebar&&/*#__PURE__*/react.createElement("aside",{className:"col col--3"},/*#__PURE__*/react.createElement(BlogSidebar,{sidebar:sidebar})),/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.A)('col',{'col--7':hasSidebar,'col--9':!hasSidebar}),itemScope:true,itemType:"http://schema.org/Blog"},children),toc&&/*#__PURE__*/react.createElement("div",{className:"col col--2"},toc))));}

/***/ }),

/***/ 91932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44586);
// EXTERNAL MODULE: ./src/theme/BlogLayout/index.js + 2 modules
var BlogLayout = __webpack_require__(4533);
// EXTERNAL MODULE: ./src/theme/BlogPostItem/index.js + 5 modules
var BlogPostItem = __webpack_require__(47411);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/PaginatorNavLink/index.js
var PaginatorNavLink = __webpack_require__(15058);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogListPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPaginator(props){const{metadata}=props;const{previousPage,nextPage}=metadata;return/*#__PURE__*/react.createElement("nav",{className:"pagination-nav","aria-label":(0,Translate/* translate */.T)({id:'theme.blog.paginator.navAriaLabel',message:'Blog list page navigation',description:'The ARIA label for the blog pagination'})},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item"},previousPage&&/*#__PURE__*/react.createElement(PaginatorNavLink/* default */.A,{permalink:previousPage,title:/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},nextPage&&/*#__PURE__*/react.createElement(PaginatorNavLink/* default */.A,{permalink:nextPage,title:/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 43 modules
var lib = __webpack_require__(67749);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(41707);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
;// CONCATENATED MODULE: ./src/theme/BlogListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Custom blog by Swizzle
 *
 * @author Iva Utikalova
 */function BlogListPageMetadata(props){const{metadata}=props;const{siteConfig:{title:siteTitle}}=(0,useDocusaurusContext/* default */.A)();const{blogDescription,blogTitle,permalink}=metadata;const isBlogOnlyMode=permalink==='/';//const blogTitle = "hahahahah";
const title=isBlogOnlyMode?siteTitle:blogTitle;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(lib/* PageMetadata */.be,{title:title,description:blogDescription}),/*#__PURE__*/react.createElement(SearchMetadata/* default */.A,{tag:"blog_posts_list"}));}function BlogListPageContent(props){const{metadata,items,sidebar}=props;return/*#__PURE__*/react.createElement(BlogLayout/* default */.A,{sidebar:sidebar},items.map(_ref=>{let{content:BlogPostContent}=_ref;return/*#__PURE__*/react.createElement(BlogPostItem/* default */.A,{key:BlogPostContent.metadata.permalink,frontMatter:BlogPostContent.frontMatter,assets:BlogPostContent.assets,metadata:BlogPostContent.metadata,truncated:BlogPostContent.metadata.truncated},/*#__PURE__*/react.createElement(BlogPostContent,null));}),/*#__PURE__*/react.createElement(BlogListPaginator,{metadata:metadata}));}function BlogListPage(props){return/*#__PURE__*/react.createElement(lib/* HtmlClassNameProvider */.e3,{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.wrapper.blogPages,lib/* ThemeClassNames */.GN.page.blogListPage)},/*#__PURE__*/react.createElement(BlogListPageMetadata,props),/*#__PURE__*/react.createElement(BlogListPageContent,props));}

/***/ }),

/***/ 47411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogPostItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(75489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(86025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 43 modules
var lib = __webpack_require__(67749);
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var utils_common_lib = __webpack_require__(70440);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXContent/index.js + 20 modules
var MDXContent = __webpack_require__(82026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js + 2 modules
var EditThisPage = __webpack_require__(1335);
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"blogPostTitle":"blogPostTitle_uMeh","blogPostData":"blogPostData_Vfxe","blogPostDetailsFull":"blogPostDetailsFull_enUA"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js + 3 modules
var TagsListInline = __webpack_require__(62610);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthor/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const BlogPostAuthor_styles_module = ({"image":"image_o0gy"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthor/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MaybeLink(props){if(props.href){return/*#__PURE__*/react.createElement(Link/* default */.A,props);}return/*#__PURE__*/react.createElement(react.Fragment,null,props.children);}function BlogPostAuthor(_ref){let{author}=_ref;const{name,title,url,imageURL,email}=author;const link=url||email&&`mailto:${email}`||undefined;return/*#__PURE__*/react.createElement("div",{className:"avatar margin-bottom--sm"},imageURL&&/*#__PURE__*/react.createElement("span",{className:"avatar__photo-link avatar__photo"},/*#__PURE__*/react.createElement(MaybeLink,{href:link},/*#__PURE__*/react.createElement("img",{className:BlogPostAuthor_styles_module.image,src:imageURL,alt:name}))),name&&/*#__PURE__*/react.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:true,itemType:"https://schema.org/Person"},/*#__PURE__*/react.createElement("div",{className:"avatar__name"},/*#__PURE__*/react.createElement(MaybeLink,{href:link,itemProp:"url"},/*#__PURE__*/react.createElement("span",{itemProp:"name"},name))),title&&/*#__PURE__*/react.createElement("small",{className:"avatar__subtitle",itemProp:"description"},title)));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthors/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const BlogPostAuthors_styles_module = ({"authorCol":"authorCol_FlmR","imageOnlyAuthorRow":"imageOnlyAuthorRow_trpF","imageOnlyAuthorCol":"imageOnlyAuthorCol_S2np"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthors/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Component responsible for the authors layout
function BlogPostAuthors(_ref){let{authors,assets}=_ref;const authorsCount=authors.length;if(authorsCount===0){return null;}const imageOnly=authors.every(_ref2=>{let{name}=_ref2;return!name;});return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)('margin-top--md margin-bottom--sm',imageOnly?BlogPostAuthors_styles_module.imageOnlyAuthorRow:'row')},authors.map((author,idx)=>/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(!imageOnly&&'col col--6',imageOnly?BlogPostAuthors_styles_module.imageOnlyAuthorCol:BlogPostAuthors_styles_module.authorCol),key:idx},/*#__PURE__*/react.createElement(BlogPostAuthor,{author:{...author,// Handle author images using relative paths
imageURL:assets.authorsImageUrls[idx]??author.imageURL}}))));}
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useReadingTimePlural(){const{selectMessage}=(0,lib/* usePluralForm */.Ww)();return readingTimeFloat=>{const readingTime=Math.ceil(readingTimeFloat);return selectMessage(readingTime,(0,Translate/* translate */.T)({id:'theme.blog.post.readingTime.plurals',description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One min read|{readingTime} min read'},{readingTime}));};}function BlogPostItem(props){const readingTimePlural=useReadingTimePlural();const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.h)();const{children,frontMatter,assets,metadata,truncated,isBlogPostPage=false}=props;const{date,formattedDate,permalink,tags,readingTime,title,editUrl,authors}=metadata;const image=assets.image??frontMatter.image;const truncatedPost=!isBlogPostPage&&truncated;const tagsExists=tags.length>0;const TitleHeading=isBlogPostPage?'h1':'h2';return/*#__PURE__*/react.createElement("article",{className:'BlogItem '+(!isBlogPostPage?'margin-bottom--xl':undefined),itemProp:"blogPost",itemScope:true,itemType:"http://schema.org/BlogPosting"},/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement(TitleHeading,{className:styles_module.blogPostTitle,itemProp:"headline"},isBlogPostPage?title:/*#__PURE__*/react.createElement(Link/* default */.A,{itemProp:"url",to:permalink},title)),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(styles_module.blogPostData,'margin-vert--md')},/*#__PURE__*/react.createElement("time",{dateTime:date,itemProp:"datePublished"},formattedDate),typeof readingTime!=='undefined'&&/*#__PURE__*/react.createElement(react.Fragment,null,' · ',readingTimePlural(readingTime))),/*#__PURE__*/react.createElement(BlogPostAuthors,{authors:authors,assets:assets})),image&&/*#__PURE__*/react.createElement("meta",{itemProp:"image",content:withBaseUrl(image,{absolute:true})}),/*#__PURE__*/react.createElement("div",{// This ID is used for the feed generation to locate the main content
id:isBlogPostPage?utils_common_lib.blogPostContainerID:undefined,className:"markdown",itemProp:"articleBody"},/*#__PURE__*/react.createElement(MDXContent/* default */.A,null,children)),(tagsExists||truncated)&&/*#__PURE__*/react.createElement("footer",{className:"blog-footer "+(0,clsx_m/* default */.A)('row docusaurus-mt-lg',isBlogPostPage&&styles_module.blogPostDetailsFull)},tagsExists&&/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)('col',{'col--9':truncatedPost})},/*#__PURE__*/react.createElement(TagsListInline/* default */.A,{tags:tags})),isBlogPostPage&&editUrl&&/*#__PURE__*/react.createElement("div",{className:"col margin-top--sm"},/*#__PURE__*/react.createElement(EditThisPage/* default */.A,{editUrl:editUrl})),truncatedPost&&/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)('col text--right',{'col--3':tagsExists})},/*#__PURE__*/react.createElement(Link/* default */.A,{to:metadata.permalink,"aria-label":(0,Translate/* translate */.T)({message:'Read more about {title}',id:'theme.blog.post.readMoreLabel',description:'The ARIA label for the link to full blog posts from excerpts'},{title})},/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))));}

/***/ })

}]);