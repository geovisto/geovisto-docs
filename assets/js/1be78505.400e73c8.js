"use strict";
(self["webpackChunkgeovisto_docu"] = self["webpackChunkgeovisto_docu"] || []).push([[88714,79090],{

/***/ 90892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-router-config/esm/react-router-config.js
var react_router_config = __webpack_require__(22831);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js + 34 modules
var Layout = __webpack_require__(91986);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 43 modules
var lib = __webpack_require__(67749);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Logo/index.js
var Logo = __webpack_require__(51773);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconArrow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconArrow(props){return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.A)({width:"20",height:"20","aria-hidden":"true"},props),/*#__PURE__*/react.createElement("g",{fill:"#7a7a7a"},/*#__PURE__*/react.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),/*#__PURE__*/react.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/Desktop/CollapseButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"collapseSidebarButton":"collapseSidebarButton_FykI","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_DTRl"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/Desktop/CollapseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CollapseButton(_ref){let{onClick}=_ref;return/*#__PURE__*/react.createElement("button",{type:"button",title:(0,Translate/* translate */.T)({id:'theme.docs.sidebar.collapseButtonTitle',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.sidebar.collapseButtonAriaLabel',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),className:(0,clsx_m/* default */.A)('button button--secondary button--outline',styles_module.collapseSidebarButton),onClick:onClick},/*#__PURE__*/react.createElement(IconArrow,{className:styles_module.collapseSidebarButtonIcon}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(75489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(16654);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/index.js + 1 modules
var IconExternalLink = __webpack_require__(53679);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebarItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocSidebarItem_styles_module = ({"menuHtmlItem":"menuHtmlItem_fVIQ","menuExternalLink":"menuExternalLink_tcZa"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(92303);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebarItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItem(_ref){let{item,...props}=_ref;switch(item.type){case'category':return/*#__PURE__*/react.createElement(DocSidebarItemCategory,(0,esm_extends/* default */.A)({item:item},props));case'html':return/*#__PURE__*/react.createElement(DocSidebarItemHtml,(0,esm_extends/* default */.A)({item:item},props));case'link':default:return/*#__PURE__*/react.createElement(DocSidebarItemLink,(0,esm_extends/* default */.A)({item:item},props));}}// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory(_ref2){let{isActive,collapsed,setCollapsed}=_ref2;const wasActive=(0,lib/* usePrevious */.ZC)(isActive);(0,react.useEffect)(()=>{const justBecameActive=isActive&&!wasActive;if(justBecameActive&&collapsed){setCollapsed(false);}},[isActive,wasActive,collapsed,setCollapsed]);}/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */function useCategoryHrefWithSSRFallback(item){const isBrowser=(0,useIsBrowser/* default */.A)();return (0,react.useMemo)(()=>{if(item.href){return item.href;}// In these cases, it's not necessary to render a fallback
// We skip the "findFirstCategoryLink" computation
if(isBrowser||!item.collapsible){return undefined;}return (0,lib/* findFirstCategoryLink */._o)(item);},[item,isBrowser]);}function DocSidebarItemCategory(_ref3){let{item,onItemClick,activePath,level,index,...props}=_ref3;const{items,label,collapsible,className,href}=item;const hrefWithSSRFallback=useCategoryHrefWithSSRFallback(item);const isActive=(0,lib/* isActiveSidebarItem */.w8)(item,activePath);const isCurrentPage=(0,lib/* isSamePath */.ys)(href,activePath);const{collapsed,setCollapsed}=(0,lib/* useCollapsible */.uW)({// active categories are always initialized as expanded
// the default (item.collapsed) is only used for non-active categories
initialState:()=>{if(!collapsible){return false;}return isActive?false:item.collapsed;}});useAutoExpandActiveCategory({isActive,collapsed,setCollapsed});const{expandedItem,setExpandedItem}=(0,lib/* useDocSidebarItemsExpandedState */.Ge)();function updateCollapsed(toCollapsed){if(toCollapsed===void 0){toCollapsed=!collapsed;}setExpandedItem(toCollapsed?null:index);setCollapsed(toCollapsed);}const{autoCollapseSidebarCategories}=(0,lib/* useThemeConfig */.pN)();(0,react.useEffect)(()=>{if(collapsible&&expandedItem&&expandedItem!==index&&autoCollapseSidebarCategories){setCollapsed(true);}},[collapsible,expandedItem,index,setCollapsed,autoCollapseSidebarCategories]);return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.docs.docSidebarItemCategory,lib/* ThemeClassNames */.GN.docs.docSidebarItemCategoryLevel(level),'menu__list-item',{'menu__list-item--collapsed':collapsed},className)},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)('menu__list-item-collapsible',{'menu__list-item-collapsible--active':isCurrentPage})},/*#__PURE__*/react.createElement(Link/* default */.A,(0,esm_extends/* default */.A)({className:(0,clsx_m/* default */.A)('menu__link',{'menu__link--sublist':collapsible,'menu__link--sublist-caret':!href,'menu__link--active':isActive}),onClick:collapsible?e=>{onItemClick?.(item);if(href){updateCollapsed(false);}else{e.preventDefault();updateCollapsed();}}:()=>{onItemClick?.(item);},"aria-current":isCurrentPage?'page':undefined,"aria-expanded":collapsible?!collapsed:undefined,href:collapsible?hrefWithSSRFallback??'#':hrefWithSSRFallback},props),label),href&&collapsible&&/*#__PURE__*/react.createElement("button",{"aria-label":(0,Translate/* translate */.T)({id:'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel',message:"Toggle the collapsible sidebar category '{label}'",description:'The ARIA label to toggle the collapsible sidebar category'},{label}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault();updateCollapsed();}})),/*#__PURE__*/react.createElement(lib/* Collapsible */.Nt,{lazy:true,as:"ul",className:"menu__list",collapsed:collapsed},/*#__PURE__*/react.createElement(theme_DocSidebarItems,{items:items,tabIndex:collapsed?-1:0,onItemClick:onItemClick,activePath:activePath,level:level+1})));}function DocSidebarItemHtml(_ref4){let{item,level,index}=_ref4;const{value,defaultStyle,className}=item;return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.docs.docSidebarItemLink,lib/* ThemeClassNames */.GN.docs.docSidebarItemLinkLevel(level),defaultStyle&&`${DocSidebarItem_styles_module.menuHtmlItem} menu__list-item`,className),key:index// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:value}});}function DocSidebarItemLink(_ref5){let{item,onItemClick,activePath,level,index,...props}=_ref5;const{href,label,className}=item;const isActive=(0,lib/* isActiveSidebarItem */.w8)(item,activePath);const isInternalLink=(0,isInternalUrl/* default */.A)(href);return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.docs.docSidebarItemLink,lib/* ThemeClassNames */.GN.docs.docSidebarItemLinkLevel(level),'menu__list-item',className),key:label},/*#__PURE__*/react.createElement(Link/* default */.A,(0,esm_extends/* default */.A)({className:(0,clsx_m/* default */.A)('menu__link',!isInternalLink&&DocSidebarItem_styles_module.menuExternalLink,{'menu__link--active':isActive}),"aria-current":isActive?'page':undefined,to:href},isInternalLink&&{onClick:onItemClick?()=>onItemClick(item):undefined},props),label,!isInternalLink&&/*#__PURE__*/react.createElement(IconExternalLink/* default */.A,null)));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebarItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems(_ref){let{items,...props}=_ref;return/*#__PURE__*/react.createElement(lib/* DocSidebarItemsExpandedStateProvider */.Ar,null,items.map((item,index)=>/*#__PURE__*/react.createElement(DocSidebarItem,(0,esm_extends/* default */.A)({key:index// sidebar is static, the index does not change
,item:item,index:index},props))));}// Optimize sidebar at each "level"
/* harmony default export */ const theme_DocSidebarItems = (/*#__PURE__*/(0,react.memo)(DocSidebarItems));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/Desktop/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Content_styles_module = ({"menu":"menu_izAj","menuWithAnnouncementBar":"menuWithAnnouncementBar_l2a_"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/Desktop/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useShowAnnouncementBar(){const{isActive}=(0,lib/* useAnnouncementBar */.Mj)();const[showAnnouncementBar,setShowAnnouncementBar]=(0,react.useState)(isActive);(0,lib/* useScrollPosition */.Mq)(_ref=>{let{scrollY}=_ref;if(isActive){setShowAnnouncementBar(scrollY===0);}},[isActive]);return isActive&&showAnnouncementBar;}function DocSidebarDesktopContent(_ref2){let{path,sidebar,className}=_ref2;const showAnnouncementBar=useShowAnnouncementBar();return/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.A)('menu thin-scrollbar',Content_styles_module.menu,showAnnouncementBar&&Content_styles_module.menuWithAnnouncementBar,className)},/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.docs.docSidebarMenu,'menu__list')},/*#__PURE__*/react.createElement(theme_DocSidebarItems,{items:sidebar,activePath:path,level:1})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Desktop_styles_module = ({"sidebar":"sidebar_RiAD","sidebarWithHideableNavbar":"sidebarWithHideableNavbar_d0QC","sidebarHidden":"sidebarHidden_Lg_2","sidebarLogo":"sidebarLogo_YUvz"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarDesktop(_ref){let{path,sidebar,onCollapse,isHidden}=_ref;const{navbar:{hideOnScroll},hideableSidebar}=(0,lib/* useThemeConfig */.pN)();return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(Desktop_styles_module.sidebar,hideOnScroll&&Desktop_styles_module.sidebarWithHideableNavbar,isHidden&&Desktop_styles_module.sidebarHidden)},hideOnScroll&&/*#__PURE__*/react.createElement(Logo/* default */.A,{tabIndex:-1,className:Desktop_styles_module.sidebarLogo}),/*#__PURE__*/react.createElement(DocSidebarDesktopContent,{path:path,sidebar:sidebar}),hideableSidebar&&/*#__PURE__*/react.createElement(CollapseButton,{onClick:onCollapse}));}/* harmony default export */ const Desktop = (/*#__PURE__*/react.memo(DocSidebarDesktop));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu=_ref=>{let{sidebar,path}=_ref;const mobileSidebar=(0,lib/* useNavbarMobileSidebar */.tY)();return/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.docs.docSidebarMenu,'menu__list')},/*#__PURE__*/react.createElement(theme_DocSidebarItems,{items:sidebar,activePath:path,onItemClick:item=>{// Mobile sidebar should only be closed if the category has a link
if(item.type==='category'&&item.href){mobileSidebar.toggle();}if(item.type==='link'){mobileSidebar.toggle();}},level:1}));};function DocSidebarMobile(props){return/*#__PURE__*/react.createElement(lib/* NavbarSecondaryMenuFiller */.GX,{component:DocSidebarMobileSecondaryMenu,props:props});}/* harmony default export */ const Mobile = (/*#__PURE__*/react.memo(DocSidebarMobile));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebar(props){const windowSize=(0,lib/* useWindowSize */.lW)();// Desktop sidebar visible on hydration: need SSR rendering
const shouldRenderSidebarDesktop=windowSize==='desktop'||windowSize==='ssr';// Mobile sidebar not visible on hydration: can avoid SSR rendering
const shouldRenderSidebarMobile=windowSize==='mobile';return/*#__PURE__*/react.createElement(react.Fragment,null,shouldRenderSidebarDesktop&&/*#__PURE__*/react.createElement(Desktop,props),shouldRenderSidebarMobile&&/*#__PURE__*/react.createElement(Mobile,props));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/NotFound.js
var NotFound = __webpack_require__(79090);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BackToTopButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const BackToTopButton_styles_module = ({"backToTopButton":"backToTopButton_RiI4","backToTopButtonShow":"backToTopButtonShow_ssHd"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BackToTopButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const threshold=300;// Not all have support for smooth scrolling (particularly Safari mobile iOS)
// TODO proper detection is currently unreliable!
// see https://github.com/wessberg/scroll-behavior-polyfill/issues/16
const SupportsNativeSmoothScrolling=false;// const SupportsNativeSmoothScrolling =
//   ExecutionEnvironment.canUseDOM &&
//   'scrollBehavior' in document.documentElement.style;
function smoothScrollTopNative(){window.scrollTo({top:0,behavior:'smooth'});return()=>{// Nothing to cancel, it's natively cancelled if user tries to scroll down
};}function smoothScrollTopPolyfill(){let raf=null;function rafRecursion(){const currentScroll=document.documentElement.scrollTop;if(currentScroll>0){raf=requestAnimationFrame(rafRecursion);window.scrollTo(0,Math.floor(currentScroll*0.85));}}rafRecursion();// Break the recursion. Prevents the user from "fighting" against that
// recursion producing a weird UX
return()=>raf&&cancelAnimationFrame(raf);}function useSmoothScrollToTop(){const lastCancelRef=(0,react.useRef)(null);function smoothScrollTop(){lastCancelRef.current=SupportsNativeSmoothScrolling?smoothScrollTopNative():smoothScrollTopPolyfill();}return{smoothScrollTop,cancelScrollToTop:()=>lastCancelRef.current?.()};}function BackToTopButton(){const[show,setShow]=(0,react.useState)(false);const isFocusedAnchor=(0,react.useRef)(false);const{smoothScrollTop,cancelScrollToTop}=useSmoothScrollToTop();(0,lib/* useScrollPosition */.Mq)((_ref,lastPosition)=>{let{scrollY:scrollTop}=_ref;const lastScrollTop=lastPosition?.scrollY;// No lastScrollTop means component is just being mounted.
// Not really a scroll event from the user, so we ignore it
if(!lastScrollTop){return;}if(isFocusedAnchor.current){isFocusedAnchor.current=false;return;}const isScrollingUp=scrollTop<lastScrollTop;if(!isScrollingUp){cancelScrollToTop();}if(scrollTop<threshold){setShow(false);return;}if(isScrollingUp){const documentHeight=document.documentElement.scrollHeight;const windowHeight=window.innerHeight;if(scrollTop+windowHeight<documentHeight){setShow(true);}}else{setShow(false);}});(0,lib/* useLocationChange */.$G)(locationChangeEvent=>{if(locationChangeEvent.location.hash){isFocusedAnchor.current=true;setShow(false);}});return/*#__PURE__*/react.createElement("button",{"aria-label":(0,Translate/* translate */.T)({id:'theme.BackToTopButton.buttonAriaLabel',message:'Scroll back to top',description:'The ARIA label for the back to top button'}),className:(0,clsx_m/* default */.A)('clean-btn',lib/* ThemeClassNames */.GN.common.backToTopButton,BackToTopButton_styles_module.backToTopButton,show&&BackToTopButton_styles_module.backToTopButtonShow),type:"button",onClick:()=>smoothScrollTop()});}
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocPage_styles_module = ({"docPage":"docPage_P2Lg","docMainContainer":"docMainContainer_TCnq","docSidebarContainer":"docSidebarContainer_rKC_","docMainContainerEnhanced":"docMainContainerEnhanced_WDCb","docSidebarContainerHidden":"docSidebarContainerHidden_nvlY","collapsedDocSidebar":"collapsedDocSidebar_Xgr6","expandSidebarButtonIcon":"expandSidebarButtonIcon_AV8S","docItemWrapperEnhanced":"docItemWrapperEnhanced_r_WG"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(41707);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageContent(_ref){let{currentDocRoute,versionMetadata,children,sidebarName}=_ref;const sidebar=(0,lib/* useDocsSidebar */.ts)();const{pluginId,version}=versionMetadata;const[hiddenSidebarContainer,setHiddenSidebarContainer]=(0,react.useState)(false);const[hiddenSidebar,setHiddenSidebar]=(0,react.useState)(false);const toggleSidebar=(0,react.useCallback)(()=>{if(hiddenSidebar){setHiddenSidebar(false);}setHiddenSidebarContainer(value=>!value);},[hiddenSidebar]);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(SearchMetadata/* default */.A,{version:version,tag:(0,lib/* docVersionSearchTag */.tU)(pluginId,version)}),/*#__PURE__*/react.createElement(Layout/* default */.A,null,/*#__PURE__*/react.createElement("div",{className:DocPage_styles_module.docPage},/*#__PURE__*/react.createElement(BackToTopButton,null),sidebar&&/*#__PURE__*/react.createElement("aside",{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.docs.docSidebarContainer,DocPage_styles_module.docSidebarContainer,hiddenSidebarContainer&&DocPage_styles_module.docSidebarContainerHidden),onTransitionEnd:e=>{if(!e.currentTarget.classList.contains(DocPage_styles_module.docSidebarContainer)){return;}if(hiddenSidebarContainer){setHiddenSidebar(true);}}},/*#__PURE__*/react.createElement(DocSidebar,{key:// Reset sidebar state on sidebar changes
// See https://github.com/facebook/docusaurus/issues/3414
sidebarName,sidebar:sidebar,path:currentDocRoute.path,onCollapse:toggleSidebar,isHidden:hiddenSidebar}),hiddenSidebar&&/*#__PURE__*/react.createElement("div",{className:DocPage_styles_module.collapsedDocSidebar,title:(0,Translate/* translate */.T)({id:'theme.docs.sidebar.expandButtonTitle',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.sidebar.expandButtonAriaLabel',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),tabIndex:0,role:"button",onKeyDown:toggleSidebar,onClick:toggleSidebar},/*#__PURE__*/react.createElement(IconArrow,{className:DocPage_styles_module.expandSidebarButtonIcon}))),/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.A)(DocPage_styles_module.docMainContainer,(hiddenSidebarContainer||!sidebar)&&DocPage_styles_module.docMainContainerEnhanced)},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)('container padding-top--md padding-bottom--lg',DocPage_styles_module.docItemWrapper,hiddenSidebarContainer&&DocPage_styles_module.docItemWrapperEnhanced)},children)))));}function DocPage(props){const{route:{routes:docRoutes},versionMetadata,location}=props;const currentDocRoute=docRoutes.find(docRoute=>(0,react_router/* matchPath */.B6)(location.pathname,docRoute));if(!currentDocRoute){return/*#__PURE__*/react.createElement(NotFound["default"],null);}// For now, the sidebarName is added as route config: not ideal!
const sidebarName=currentDocRoute.sidebar;const sidebar=sidebarName?versionMetadata.docsSidebars[sidebarName]:null;return/*#__PURE__*/react.createElement(lib/* HtmlClassNameProvider */.e3,{className:(0,clsx_m/* default */.A)(lib/* ThemeClassNames */.GN.wrapper.docsPages,lib/* ThemeClassNames */.GN.page.docsDocPage,versionMetadata.className)},/*#__PURE__*/react.createElement(lib/* DocsVersionProvider */.nM,{version:versionMetadata},/*#__PURE__*/react.createElement(lib/* DocsSidebarProvider */.VB,{sidebar:sidebar??null},/*#__PURE__*/react.createElement(DocPageContent,{currentDocRoute:currentDocRoute,versionMetadata:versionMetadata,sidebarName:sidebarName},(0,react_router_config/* renderRoutes */.v)(docRoutes,{versionMetadata})))));}

/***/ }),

/***/ 79090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91986);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21312);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67749);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NotFound(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .PageMetadata */ .be,{title:(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({id:'theme.NotFound.title',message:'Page Not Found'})}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{className:"container margin-vert--xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col col--6 col--offset-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"hero__title"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))));}

/***/ })

}]);