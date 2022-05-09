"use strict";(self.webpackChunkgeovisto_docu=self.webpackChunkgeovisto_docu||[]).push([[367],{2908:function(e,o,t){t.d(o,{Z:function(){return r}});var a=t(4578),n=t(7294),i=t(711),l=t(3094),r=function(e){function o(o){var a;(a=e.call(this,o)||this).polygons=t(9663),a.centroids=t(8294),a.state={data:t(6403),config:t(6860)};var i={default:void 0};return i.default="## Trade in services\n\n\n\nThis dataset is displaying OECD countries and the aim is to collect and disseminate\nbalance of payments data on international trade in services between UK, USA, Canada and\nAustralie with rest of OECD countries. To the extent that countries report them, data are also broken\ndown by type of service according to the EBOPS 2010 classification.\n\n\n\n---\nUseful links:\n[UN Stats: Extended Balance of Payments Services Classification 2010](https://unstats.un.org/unsd/classifications/Family/Detail/101)",a.infodata=i,a.map=n.createRef(),a}return(0,a.Z)(o,e),o.prototype.render=function(){return console.log("rendering..."),n.createElement("div",{className:"connection-container general-container"},n.createElement("div",{className:"docs-showcase-map"},n.createElement(i.Z,{ref:this.map,id:"connection",data:l.Ww.getMapDataManagerFactory().json(this.state.data),geoData:l.Ww.getGeoDataManager([l.Ww.getGeoDataFactory().geojson("world polygons",this.polygons),l.Ww.getGeoDataFactory().geojson("world centroids",this.centroids)]),config:l.Ww.getMapConfigManagerFactory().default(this.state.config),globals:void 0,templates:void 0,tools:l.Ww.createMapToolsManager([l.a4.createTool({id:"geovisto-tool-sidebar"}),l.Ni.createTool({id:"geovisto-tool-themes",manager:l.Ni.createThemesManager([l.Ni.createThemeLight1(),l.Ni.createThemeLight2(),l.Ni.createThemeLight3(),l.Ni.createThemeDark1(),l.Ni.createThemeDark2(),l.Ni.createThemeDark3(),l.Ni.createThemeBasic()])}),l.Y2.createTool({id:"geovisto-tool-selection"}),l.y9.createTool({id:"geovisto-tool-info",manager:l.y9.createInfoManager([l.y9.getInfoDataFactory().markdown("General",this.infodata)])}),l.PT.createTool({id:"geovisto-tool-layer-map"}),l.L1.createTool({id:"geovisto-tool-layer-choropleth"}),l.iP.createTool({id:"geovisto-tool-layer-connection"}),l.j0.createTool({id:"geovisto-tool-legend"})])})))},o}(n.Component)},230:function(e,o,t){t.d(o,{Kk:function(){return l},QT:function(){return r},z1:function(){return i}});var a=t(1262),n=t(7294);function i(){return n.createElement(a.Z,{fallback:n.createElement("div",null,"Loading...")},(function(){var e=t(5550).Z;return n.createElement(e,null)}))}function l(){return n.createElement(a.Z,{fallback:n.createElement("div",null,"Loading...")},(function(){var e=t(1327).Z;return n.createElement(e,null)}))}function r(){return n.createElement(a.Z,{fallback:n.createElement("div",null,"Loading...")},(function(){var e=t(2908).Z;return n.createElement(e,null)}))}},1327:function(e,o,t){t.d(o,{Z:function(){return r}});var a=t(4578),n=t(7294),i=t(711),l=t(3094),r=function(e){function o(o){var a;(a=e.call(this,o)||this).polygons=t(9663),a.centroids=t(8294),a.state={data:t(8740),config:t(3603)};var i={default:void 0};return i.default="## Energy mix\n---\nThis dataset contains usage of three fuel types for all countries throughout the world:\n* Coal\n* Natural Gas\n* Biofuel and waste\n\nValues are displayed in Terajoules.",a.infodata=i,a.map=n.createRef(),a}return(0,a.Z)(o,e),o.prototype.render=function(){return console.log("rendering..."),n.createElement("div",{className:"connection-container general-container"},n.createElement("div",{className:"docs-showcase-map"},n.createElement(i.Z,{ref:this.map,id:"marker",data:l.Ww.getMapDataManagerFactory().json(this.state.data),geoData:l.Ww.getGeoDataManager([l.Ww.getGeoDataFactory().geojson("world centroids",this.centroids)]),config:l.Ww.getMapConfigManagerFactory().default(this.state.config),globals:void 0,templates:void 0,tools:l.Ww.createMapToolsManager([l.a4.createTool({id:"geovisto-tool-sidebar"}),l.IM.createTool({id:"geovisto-tool-layer-marker"}),l.Ni.createTool({id:"geovisto-tool-themes",manager:l.Ni.createThemesManager([l.Ni.createThemeLight1(),l.Ni.createThemeLight2(),l.Ni.createThemeLight3(),l.Ni.createThemeDark1(),l.Ni.createThemeDark2(),l.Ni.createThemeDark3(),l.Ni.createThemeBasic()])}),l.Y2.createTool({id:"geovisto-tool-selection"}),l.y9.createTool({id:"geovisto-tool-info",manager:l.y9.createInfoManager([l.y9.getInfoDataFactory().markdown("General",this.infodata)])}),l.j0.createTool({id:"geovisto-tool-legend"}),l.PT.createTool({id:"geovisto-tool-layer-map"})])})))},o}(n.Component)},6163:function(e,o,t){t.r(o),t.d(o,{Connection:function(){return m},assets:function(){return g},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=t(7462),n=t(3366),i=(t(7294),t(3905)),l=t(230),r=["components"],s={sidebar_position:4},c="Connection",d={unversionedId:"tools/connection",id:"tools/connection",title:"Connection",description:"Connection layer provides connections between nodes (e.g. relations between countries).",source:"@site/docs/tools/connection.mdx",sourceDirName:"tools",slug:"/tools/connection",permalink:"/geovisto-docs/docs/tools/connection",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools/connection.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Marker",permalink:"/geovisto-docs/docs/tools/marker"}},g={},u=[{value:"Example",id:"example",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Dimensions",id:"dimensions",level:2}],m=function(){return(0,i.kt)(l.QT,{mdxType:"Render_Connection"})},f={toc:u,Connection:m};function p(e){var o=e.components,t=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},f,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connection"},"Connection"),(0,i.kt)("p",null,"Connection layer provides connections between nodes (e.g. relations between countries).\nIt serves as an additional function to other layers, especially to choropleth layer.\nIf you click on polygon in choropleth map, while using connection layer, all of the connections and connected countries\nwill be highlighted.\nExample below contains data about ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Trade in services"))," for countries that are members of OECD",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(m,{mdxType:"Connection"}),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Configuration used in example above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n      "type": "geovisto-tool-layer-connection",\n      "id": "geovisto-tool-layer-connection",\n      "enabled": true,\n      "layerName": "Connection layer",\n      "data": {\n        "geoData": "world centroids",\n        "from": "Country",\n        "to": "Partner",\n        "animateDirection": true\n      }\n}\n')),(0,i.kt)("h2",{id:"dimensions"},"Dimensions"),(0,i.kt)("p",null,"Dimensions used in Connection Layer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"geoData")," - polygons/centroids"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from")," - source country"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to")," - destination country"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"animateDirection")," - animate connections")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,i.kt)("a",{parentName:"p",href:"https://www.oecd.org/"},"OECD")))}p.isMDXComponent=!0},3603:function(e){e.exports=JSON.parse('{"zoom":2,"center":{"lat":50.064191736659104,"lng":0},"tools":[{"type":"geovisto-tool-sidebar","id":"geovisto-tool-sidebar","enabled":true,"tabs":[{"enabled":false,"name":"General settings","icon":"<i class=\\"fa fa-gear\\"></i>","checkButton":false,"fragments":[{"tool":"geovisto-tool-themes","enabled":true},{"tool":"geovisto-tool-selection","enabled":true}]},{"tool":"geovisto-tool-filters","enabled":false,"name":"Filters","icon":"<i class=\\"fa fa-filter\\"></i>","checkButton":true},{"tool":"geovisto-tool-layer-map","enabled":false,"name":"Map layer settings","icon":"<i class=\\"fa fa-globe\\"></i>","checkButton":true},{"tool":"geovisto-tool-layer-choropleth","enabled":false,"name":"Choropleth layer settings","icon":"<i class=\\"fa fa-th-large\\"></i>","checkButton":true},{"tool":"geovisto-tool-info","enabled":true,"name":"Info","icon":"<i class=\\"fa fa-info\\"></i>","checkButton":false},{"tool":"geovisto-tool-layer-marker","enabled":true,"name":"Marker layer settings","icon":"<i class=\\"fa fa-map-marker\\"></i>","checkButton":true},{"tool":"geovisto-tool-layer-connection","enabled":false,"name":"Connection layer settings","icon":"<i class=\\"fa fa-road\\"></i>","checkButton":true},{"tool":"geovisto-tool-timeline","enabled":false,"name":"Timeline","icon":"<i class=\\"fa fa-clock-o\\" />","checkButton":true},{"tool":"geovisto-tool-layer-drawing","enabled":false,"name":"GeoJSON creator","icon":"<i class=\\"fa fa-pencil\\"></i>","checkButton":true}]},{"type":"geovisto-tool-settings","id":"geovisto-tool-settings","enabled":true},{"type":"geovisto-tool-filters","id":"geovisto-tool-filters","enabled":true,"filterRules":[]},{"type":"geovisto-tool-themes","id":"geovisto-tool-themes","enabled":true,"theme":"light1"},{"type":"geovisto-tool-selection","id":"geovisto-tool-selection","enabled":true},{"type":"geovisto-tool-layer-map","id":"geovisto-tool-layer-map","enabled":true,"layerName":"Map layer"},{"type":"geovisto-tool-legend","id":"geovisto-tool-legend","enabled":true},{"type":"geovisto-tool-layer-choropleth","id":"geovisto-tool-layer-choropleth","enabled":false,"layerName":"Choropleth layer","data":{"country":"","value":"","aggregation":"","scaling":"median","range":7,"customColor":true,"color":"#e32400"}},{"type":"geovisto-tool-layer-marker","id":"geovisto-tool-layer-marker","enabled":true,"layerName":"Marker layer","data":{"geoData":"world centroids","geoId":"Country","value":"Value","aggregation":"sum","category":"Resource","unitsEnabled":true,"units":"TJ","unitsDesc":"Terajoules"}},{"type":"geovisto-tool-layer-connection","id":"geovisto-tool-layer-connection","enabled":true,"layerName":"Connection layer","data":{"from":"","to":"","animateDirection":false}},{"type":"geovisto-tool-legend","id":"geovisto-tool-legend","enabled":true,"tools":["geovisto-tool-layer-marker"]},{"type":"geovisto-tool-timeline","id":"geovisto-tool-timeline","enabled":false,"layerName":"Timeline","data":{"timePath":"","stepTimeLength":3000,"transitionDuration":2500,"storyEnabled":false,"story":"","realTimeEnabled":false,"granularity":"","chartEnabled":false,"chartValuePath":"","chartAggregationFn":""},"stories":[]},{"type":"geovisto-tool-layer-drawing","id":"geovisto-tool-layer-drawing","enabled":false,"layerName":"GeoJSON creator"}]}')},6860:function(e){e.exports=JSON.parse('{"zoom":2,"center":{"lat":50.064191736659104,"lng":0},"tools":[{"type":"geovisto-tool-sidebar","id":"geovisto-tool-sidebar","enabled":true,"tabs":[{"enabled":false,"name":"General settings","icon":"<i class=\\"fa fa-gear\\"></i>","checkButton":false,"fragments":[{"tool":"geovisto-tool-themes","enabled":true},{"tool":"geovisto-tool-selection","enabled":true}]},{"tool":"geovisto-tool-filters","enabled":false,"name":"Filters","icon":"<i class=\\"fa fa-filter\\"></i>","checkButton":true},{"tool":"geovisto-tool-layer-map","enabled":false,"name":"Map layer settings","icon":"<i class=\\"fa fa-globe\\"></i>","checkButton":true},{"tool":"geovisto-tool-info","enabled":true,"name":"Info","icon":"<i class=\\"fa fa-info\\"></i>","checkButton":false},{"tool":"geovisto-tool-layer-choropleth","enabled":true,"name":"Choropleth layer settings","icon":"<i class=\\"fa fa-th-large\\"></i>","checkButton":true},{"tool":"geovisto-tool-layer-marker","enabled":false,"name":"Marker layer settings","icon":"<i class=\\"fa fa-map-marker\\"></i>","checkButton":true},{"tool":"geovisto-tool-layer-connection","enabled":true,"name":"Connection layer settings","icon":"<i class=\\"fa fa-road\\"></i>","checkButton":true},{"tool":"geovisto-tool-timeline","enabled":false,"name":"Timeline","icon":"<i class=\\"fa fa-clock-o\\" />","checkButton":true},{"tool":"geovisto-tool-layer-drawing","enabled":false,"name":"GeoJSON creator","icon":"<i class=\\"fa fa-pencil\\"></i>","checkButton":true}]},{"type":"geovisto-tool-settings","id":"geovisto-tool-settings","enabled":true},{"type":"geovisto-tool-filters","id":"geovisto-tool-filters","enabled":true,"filterRules":[]},{"type":"geovisto-tool-themes","id":"geovisto-tool-themes","enabled":true,"theme":"light1"},{"type":"geovisto-tool-selection","id":"geovisto-tool-selection","enabled":true},{"type":"geovisto-tool-layer-map","id":"geovisto-tool-layer-map","enabled":true,"layerName":"Map layer"},{"type":"geovisto-tool-layer-choropleth","id":"geovisto-tool-layer-choropleth","enabled":true,"layerName":"Choropleth layer","data":{"geoData":"world polygons","geoId":"Country","value":"Value","aggregation":"sum","scaling":"median","range":7,"customColor":true,"color":"#041FEC","unitsEnabled":true,"units":"$","unitsDesc":"US Dollars (Millions)","round":1}},{"type":"geovisto-tool-layer-marker","id":"geovisto-tool-layer-marker","enabled":true,"layerName":"Marker layer","data":{"country":"Country","value":"Value","aggregation":"sum","category":"Resource"}},{"type":"geovisto-tool-layer-connection","id":"geovisto-tool-layer-connection","enabled":true,"layerName":"Connection layer","data":{"geoData":"world centroids","from":"Country","to":"Partner","animateDirection":true}},{"type":"geovisto-tool-legend","id":"geovisto-tool-legend","enabled":true,"tools":["geovisto-tool-layer-choropleth"]},{"type":"geovisto-tool-timeline","id":"geovisto-tool-timeline","enabled":false,"layerName":"Timeline","data":{"timePath":"","stepTimeLength":3000,"transitionDuration":2500,"storyEnabled":false,"story":"","realTimeEnabled":false,"granularity":"","chartEnabled":false,"chartValuePath":"","chartAggregationFn":""},"stories":[]},{"type":"geovisto-tool-layer-drawing","id":"geovisto-tool-layer-drawing","enabled":false,"layerName":"GeoJSON creator"}]}')}}]);