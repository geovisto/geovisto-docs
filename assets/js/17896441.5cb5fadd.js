"use strict";
(self["webpackChunkgeovisto_docu"] = self["webpackChunkgeovisto_docu"] || []).push([[18401],{

/***/ 55021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/PaginatorNavLink/index.js
var PaginatorNavLink = __webpack_require__(15058);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){const{previous,next}=props;return/*#__PURE__*/react.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,Translate/* translate */.T)({id:'theme.docs.paginator.navAriaLabel',message:'Docs pages navigation',description:'The ARIA label for the docs pagination'})},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item"},previous&&/*#__PURE__*/react.createElement(PaginatorNavLink/* default */.A,(0,esm_extends/* default */.A)({},previous,{subLabel:/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},next&&/*#__PURE__*/react.createElement(PaginatorNavLink/* default */.A,(0,esm_extends/* default */.A)({},next,{subLabel:/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(75489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js
var client = __webpack_require__(37712);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 43 modules
var lib = __webpack_require__(67749);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionBanner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnreleasedVersionLabel(_ref){let{siteTitle,versionMetadata}=_ref;return/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle,versionLabel:/*#__PURE__*/react.createElement("b",null,versionMetadata.label)}},'This is unreleased documentation for {siteTitle} {versionLabel} version.');}function UnmaintainedVersionLabel(_ref2){let{siteTitle,versionMetadata}=_ref2;return/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle,versionLabel:/*#__PURE__*/react.createElement("b",null,versionMetadata.label)}},'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.');}const BannerLabelComponents={unreleased:UnreleasedVersionLabel,unmaintained:UnmaintainedVersionLabel};function BannerLabel(props){const BannerLabelComponent=BannerLabelComponents[props.versionMetadata.banner];return/*#__PURE__*/react.createElement(BannerLabelComponent,props);}function LatestVersionSuggestionLabel(_ref3){let{versionLabel,to,onClick}=_ref3;return/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel,latestVersionLink:/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Link/* default */.A,{to:to,onClick:onClick},/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).');}function DocVersionBannerEnabled(_ref4){let{className,versionMetadata}=_ref4;const{siteConfig:{title:siteTitle}}=(0,useDocusaurusContext/* default */.A)();const{pluginId}=(0,client/* useActivePlugin */.vT)({failfast:true});const getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);const{savePreferredVersionName}=(0,lib/* useDocsPreferredVersion */.g1)(pluginId);const{latestDocSuggestion,latestVersionSuggestion}=(0,client/* useDocVersionSuggestions */.HW)(pluginId);// try to link to same doc in latest version (not always possible)
// fallback to main doc of latest version
const latestVersionSuggestedDoc=latestDocSuggestion??getVersionMainDoc(latestVersionSuggestion);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(className,lib/* ThemeClassNames */.GN.docs.docVersionBanner,'alert alert--warning margin-bottom--md'),role:"alert"},/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement(BannerLabel,{siteTitle:siteTitle,versionMetadata:versionMetadata})),/*#__PURE__*/react.createElement("div",{className:"margin-top--md"},/*#__PURE__*/react.createElement(LatestVersionSuggestionLabel,{versionLabel:latestVersionSuggestion.label,to:latestVersionSuggestedDoc.path,onClick:()=>savePreferredVersionName(latestVersionSuggestion.name)})));}function DocVersionBanner(_ref5){let{className}=_ref5;const versionMetadata=(0,lib/* useDocsVersion */.rv)();if(versionMetadata.banner){return/*#__PURE__*/react.createElement(DocVersionBannerEnabled,{className:className,versionMetadata:versionMetadata});}return null;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionBadge/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocVersionBadge(_ref){let{className}=_ref;const versionMetadata=(0,lib/* useDocsVersion */.rv)();if(versionMetadata.badge){return/*#__PURE__*/react.createElement("span",{className:(0,clsx_m/* default */.A)(className,lib/* ThemeClassNames */.GN.docs.docVersionBadge,'badge badge--secondary')},/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:versionMetadata.label}},'Version: {versionLabel}'));}return null;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LastUpdatedAtDate(_ref){let{lastUpdatedAt,formattedLastUpdatedAt}=_ref;return/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement("time",{dateTime:new Date(lastUpdatedAt*1000).toISOString()},formattedLastUpdatedAt))}},' on {date}');}function LastUpdatedByUser(_ref2){let{lastUpdatedBy}=_ref2;return/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:/*#__PURE__*/react.createElement("b",null,lastUpdatedBy)}},' by {user}');}function LastUpdated(_ref3){let{lastUpdatedAt,formattedLastUpdatedAt,lastUpdatedBy}=_ref3;return/*#__PURE__*/react.createElement("span",{className:lib/* ThemeClassNames */.GN.common.lastUpdated},/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:lastUpdatedAt&&formattedLastUpdatedAt?/*#__PURE__*/react.createElement(LastUpdatedAtDate,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt}):'',byUser:lastUpdatedBy?/*#__PURE__*/react.createElement(LastUpdatedByUser,{lastUpdatedBy:lastUpdatedBy}):''}},'Last updated{atDate}{byUser}'), false&&/*#__PURE__*/0);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js + 2 modules
var EditThisPage = __webpack_require__(1335);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js + 3 modules
var TagsListInline = __webpack_require__(62610);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItemFooter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"lastUpdated":"lastUpdated_foO9"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItemFooter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsRow(props){return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.docs.docFooterTagsRow,'row margin-bottom--sm')},/*#__PURE__*/react.createElement("div",{className:"col"},/*#__PURE__*/react.createElement(TagsListInline/* default */.A,props)));}function EditMetaRow(_ref){let{editUrl,lastUpdatedAt,lastUpdatedBy,formattedLastUpdatedAt}=_ref;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.docs.docFooterEditMetaRow,'row')},/*#__PURE__*/react.createElement("div",{className:"col"},editUrl&&/*#__PURE__*/react.createElement(EditThisPage/* default */.A,{editUrl:editUrl})),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)('col',styles_module.lastUpdated)},(lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/react.createElement(LastUpdated,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt,lastUpdatedBy:lastUpdatedBy})));}function DocItemFooter(props){const{content:DocContent}=props;const{metadata}=DocContent;const{editUrl,lastUpdatedAt,formattedLastUpdatedAt,lastUpdatedBy,tags}=metadata;const canDisplayTagsRow=tags.length>0;const canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);const canDisplayFooter=canDisplayTagsRow||canDisplayEditMetaRow;if(!canDisplayFooter){return null;}return/*#__PURE__*/react.createElement("footer",{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.docs.docFooter,'docusaurus-mt-lg')},canDisplayTagsRow&&/*#__PURE__*/react.createElement(TagsRow,{tags:tags}),canDisplayEditMetaRow&&/*#__PURE__*/react.createElement(EditMetaRow,{editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy,formattedLastUpdatedAt:formattedLastUpdatedAt}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(15751);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TOCCollapsible_styles_module = ({"tocCollapsible":"tocCollapsible_jdIR","tocCollapsibleButton":"tocCollapsibleButton_Fzxq","tocCollapsibleContent":"tocCollapsibleContent_MpvI","tocCollapsibleExpanded":"tocCollapsibleExpanded_laf4"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCItems/index.js
var TOCItems = __webpack_require__(55496);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCCollapsible(_ref){let{toc,className,minHeadingLevel,maxHeadingLevel}=_ref;const{collapsed,toggleCollapsed}=(0,lib/* useCollapsible */.uW)({initialState:true});return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(TOCCollapsible_styles_module.tocCollapsible,!collapsed&&TOCCollapsible_styles_module.tocCollapsibleExpanded,className)},/*#__PURE__*/react.createElement("button",{type:"button",className:(0,clsx_m/* default */.A)('clean-btn',TOCCollapsible_styles_module.tocCollapsibleButton),onClick:toggleCollapsed},/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),/*#__PURE__*/react.createElement(lib/* Collapsible */.Nt,{lazy:true,className:TOCCollapsible_styles_module.tocCollapsibleContent,collapsed:collapsed},/*#__PURE__*/react.createElement(TOCItems/* default */.A,{toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(50039);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocItem_styles_module = ({"docItemContainer":"docItemContainer_vinB","docItemCol":"docItemCol_DM6M","tocMobile":"tocMobile_TmEX"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocBreadcrumbs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocBreadcrumbs_styles_module = ({"breadcrumbsContainer":"breadcrumbsContainer_Xlws"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(86025);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocBreadcrumbs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO move to design system folder
function BreadcrumbsItemLink(_ref){let{children,href}=_ref;const className='breadcrumbs__link';return href?/*#__PURE__*/react.createElement(Link/* default */.A,{className:className,href:href,itemProp:"item"},/*#__PURE__*/react.createElement("span",{itemProp:"name"},children)):/*#__PURE__*/react.createElement("span",{className:className,itemProp:"item name"},children);}// TODO move to design system folder
function BreadcrumbsItem(_ref2){let{children,active,index}=_ref2;return/*#__PURE__*/react.createElement("li",{itemScope:true,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,clsx_m/* default */.A)('breadcrumbs__item',{'breadcrumbs__item--active':active})},children,/*#__PURE__*/react.createElement("meta",{itemProp:"position",content:String(index+1)}));}function HomeBreadcrumbItem(){const homeHref=(0,useBaseUrl/* default */.A)('/');return/*#__PURE__*/react.createElement("li",{className:"breadcrumbs__item"},/*#__PURE__*/react.createElement(Link/* default */.A,{className:(0,clsx_m/* default */.A)('breadcrumbs__link',DocBreadcrumbs_styles_module.breadcrumbsItemLink),href:homeHref},"\uD83C\uDFE0"));}function DocBreadcrumbs(){const breadcrumbs=(0,lib/* useSidebarBreadcrumbs */.OF)();const homePageRoute=(0,lib/* useHomePageRoute */.Dt)();if(!breadcrumbs){return null;}return/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.docs.docBreadcrumbs,DocBreadcrumbs_styles_module.breadcrumbsContainer),"aria-label":"breadcrumbs"},/*#__PURE__*/react.createElement("ul",{className:"breadcrumbs",itemScope:true,itemType:"https://schema.org/BreadcrumbList"},homePageRoute&&/*#__PURE__*/react.createElement(HomeBreadcrumbItem,null),breadcrumbs.map((item,idx)=>/*#__PURE__*/react.createElement(BreadcrumbsItem,{key:idx,active:idx===breadcrumbs.length-1,index:idx},/*#__PURE__*/react.createElement(BreadcrumbsItemLink,{href:idx<breadcrumbs.length-1?item.href:undefined},item.label)))));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXContent/index.js + 20 modules
var MDXContent = __webpack_require__(82026);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItemMetadata(props){const{content:DocContent}=props;const{metadata,frontMatter,assets}=DocContent;const{keywords}=frontMatter;const{description,title}=metadata;const image=assets.image??frontMatter.image;return/*#__PURE__*/react.createElement(lib/* PageMetadata */.be,{title,description,keywords,image});}function DocItemContent(props){const{content:DocContent}=props;const{metadata,frontMatter}=DocContent;const{hide_title:hideTitle,hide_table_of_contents:hideTableOfContents,toc_min_heading_level:tocMinHeadingLevel,toc_max_heading_level:tocMaxHeadingLevel}=frontMatter;const{title}=metadata;// We only add a title if:
// - user asks to hide it with front matter
// - the markdown content does not already contain a top-level h1 heading
const shouldAddTitle=!hideTitle&&typeof DocContent.contentTitle==='undefined';const windowSize=(0,lib/* useWindowSize */.lW)();const canRenderTOC=!hideTableOfContents&&DocContent.toc&&DocContent.toc.length>0;const renderTocDesktop=canRenderTOC&&(windowSize==='desktop'||windowSize==='ssr');return/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)('col',!hideTableOfContents&&DocItem_styles_module.docItemCol)},/*#__PURE__*/react.createElement(DocVersionBanner,null),/*#__PURE__*/react.createElement("div",{className:DocItem_styles_module.docItemContainer},/*#__PURE__*/react.createElement("article",null,/*#__PURE__*/react.createElement(DocBreadcrumbs,null),/*#__PURE__*/react.createElement(DocVersionBadge,null),canRenderTOC&&/*#__PURE__*/react.createElement(TOCCollapsible,{toc:DocContent.toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel,className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.docs.docTocMobile,DocItem_styles_module.tocMobile)}),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.docs.docMarkdown,'markdown')},shouldAddTitle&&/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement(Heading/* default */.A,{as:"h1"},title)),/*#__PURE__*/react.createElement(MDXContent/* default */.A,null,/*#__PURE__*/react.createElement(DocContent,null))),/*#__PURE__*/react.createElement(DocItemFooter,props)),/*#__PURE__*/react.createElement(DocPaginator,{previous:metadata.previous,next:metadata.next}))),renderTocDesktop&&/*#__PURE__*/react.createElement("div",{className:"col col--3"},/*#__PURE__*/react.createElement(TOC/* default */.A,{toc:DocContent.toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel,className:lib/* ThemeClassNames */.GN.docs.docTocDesktop})));}function DocItem(props){const docHtmlClassName=`docs-doc-id-${props.content.metadata.unversionedId}`;return/*#__PURE__*/react.createElement(lib/* HtmlClassNameProvider */.e3,{className:docHtmlClassName},/*#__PURE__*/react.createElement(DocItemMetadata,props),/*#__PURE__*/react.createElement(DocItemContent,props));}

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

/***/ })

}]);