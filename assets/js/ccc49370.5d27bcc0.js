"use strict";
(self["webpackChunkgeovisto_docu"] = self["webpackChunkgeovisto_docu"] || []).push([[83249],{

/***/ 32359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogPostPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./src/theme/BlogLayout/index.js + 2 modules
var BlogLayout = __webpack_require__(4533);
// EXTERNAL MODULE: ./src/theme/BlogPostItem/index.js + 5 modules
var BlogPostItem = __webpack_require__(47411);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/PaginatorNavLink/index.js
var PaginatorNavLink = __webpack_require__(15058);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostPaginator(props){const{nextItem,prevItem}=props;return/*#__PURE__*/react.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,Translate/* translate */.T)({id:'theme.blog.post.paginator.navAriaLabel',message:'Blog post page navigation',description:'The ARIA label for the blog posts pagination'})},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item"},prevItem&&/*#__PURE__*/react.createElement(PaginatorNavLink/* default */.A,(0,esm_extends/* default */.A)({},prevItem,{subLabel:/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},nextItem&&/*#__PURE__*/react.createElement(PaginatorNavLink/* default */.A,(0,esm_extends/* default */.A)({},nextItem,{subLabel:/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 43 modules
var lib = __webpack_require__(67749);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(15751);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostPageMetadata(props){const{content:BlogPostContents}=props;const{assets,metadata}=BlogPostContents;const{title,description,date,tags,authors,frontMatter}=metadata;const{keywords}=frontMatter;const image=assets.image??frontMatter.image;return/*#__PURE__*/react.createElement(lib/* PageMetadata */.be,{title:title,description:description,keywords:keywords,image:image},/*#__PURE__*/react.createElement("meta",{property:"og:type",content:"article"}),/*#__PURE__*/react.createElement("meta",{property:"article:published_time",content:date}),authors.some(author=>author.url)&&/*#__PURE__*/react.createElement("meta",{property:"article:author",content:authors.map(author=>author.url).filter(Boolean).join(',')}),tags.length>0&&/*#__PURE__*/react.createElement("meta",{property:"article:tag",content:tags.map(tag=>tag.label).join(',')}));}function BlogPostPageContent(props){const{content:BlogPostContents,sidebar}=props;const{assets,metadata}=BlogPostContents;const{nextItem,prevItem,frontMatter}=metadata;const{hide_table_of_contents:hideTableOfContents,toc_min_heading_level:tocMinHeadingLevel,toc_max_heading_level:tocMaxHeadingLevel}=frontMatter;return/*#__PURE__*/react.createElement(BlogLayout/* default */.A,{sidebar:sidebar,toc:!hideTableOfContents&&BlogPostContents.toc&&BlogPostContents.toc.length>0?/*#__PURE__*/react.createElement(TOC/* default */.A,{toc:BlogPostContents.toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel}):undefined},/*#__PURE__*/react.createElement(BlogPostItem/* default */.A,{frontMatter:frontMatter,assets:assets,metadata:metadata,isBlogPostPage:true},/*#__PURE__*/react.createElement(BlogPostContents,null)),(nextItem||prevItem)&&/*#__PURE__*/react.createElement(BlogPostPaginator,{nextItem:nextItem,prevItem:prevItem}));}function BlogPostPage(props){return/*#__PURE__*/react.createElement(lib/* HtmlClassNameProvider */.e3,{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.wrapper.blogPages,lib/* ThemeClassNames */.GN.page.blogPostPage)},/*#__PURE__*/react.createElement(BlogPostPageMetadata,props),/*#__PURE__*/react.createElement(BlogPostPageContent,props));}

/***/ }),

/***/ 15751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TOC)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCItems/index.js
var TOCItems = __webpack_require__(55496);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tableOfContents":"tableOfContents_cNA8","docItemContainer":"docItemContainer_WX_Y"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME='table-of-contents__link toc-highlight';const LINK_ACTIVE_CLASS_NAME='table-of-contents__link--active';function TOC(_ref){let{className,...props}=_ref;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(styles_module.tableOfContents,'thin-scrollbar',className)},/*#__PURE__*/react.createElement(TOCItems/* default */.A,(0,esm_extends/* default */.A)({},props,{linkClassName:LINK_CLASS_NAME,linkActiveClassName:LINK_ACTIVE_CLASS_NAME})));}

/***/ }),

/***/ 55496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TOCItems)
/* harmony export */ });
/* harmony import */ var _home_runner_work_geovisto_github_io_geovisto_github_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67749);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Recursive component rendering the toc tree
/* eslint-disable jsx-a11y/control-has-associated-label */function TOCItemList(_ref){let{toc,className,linkClassName,isChild}=_ref;if(!toc.length){return null;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:isChild?undefined:className},toc.map(heading=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:heading.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:`#${heading.id}`,className:linkClassName??undefined// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TOCItemList,{isChild:true,toc:heading.children,className:className,linkClassName:linkClassName}))));}function TOCItems(_ref2){let{toc,className='table-of-contents table-of-contents__left-border',linkClassName='table-of-contents__link',linkActiveClassName=undefined,minHeadingLevel:minHeadingLevelOption,maxHeadingLevel:maxHeadingLevelOption,...props}=_ref2;const themeConfig=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useThemeConfig */ .pN)();const minHeadingLevel=minHeadingLevelOption??themeConfig.tableOfContents.minHeadingLevel;const maxHeadingLevel=maxHeadingLevelOption??themeConfig.tableOfContents.maxHeadingLevel;const tocTree=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useFilteredAndTreeifiedTOC */ .h9)({toc,minHeadingLevel,maxHeadingLevel});const tocHighlightConfig=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{if(linkClassName&&linkActiveClassName){return{linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel};}return undefined;},[linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel]);(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useTOCHighlight */ .i3)(tocHighlightConfig);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TOCItemList,(0,_home_runner_work_geovisto_github_io_geovisto_github_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({toc:tocTree,className:className,linkClassName:linkClassName},props));}

/***/ }),

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
var Layout = __webpack_require__(68064);
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