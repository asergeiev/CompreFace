"use strict";(self.webpackChunkcompreface=self.webpackChunkcompreface||[]).push([[359],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5605:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},c="Configuration",s={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"In the release",source:"@site/docs/Configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/CompreFace/docs/configuration",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration",sidebar_label:"Configuration"},sidebar:"someSidebar",previous:{title:"Face Recognition Similarity Threshold",permalink:"/CompreFace/docs/face-recognition-similarity-threshold"},next:{title:"Architecture and Scalability",permalink:"/CompreFace/docs/architecture-and-scalability"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/exadel-inc/CompreFace/releases"},"release"),"\narchive and all custom builds, there is a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file with configuration\noptions for CompreFace. For production systems, we recommend looking\nthrough them and set up CompreFace accordingly"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"registry")," - this is the docker hub registry. For release and\npre-build images, it should be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"exadel/")," value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgres_password")," - password for Postgres database. It should be\nchanged for production systems from the default value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgres_domain")," - the domain where Postgres database is run"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgres_port")," - Postgres database port"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enable_email_server")," - if true, it enables email verification for\nusers. You should set email_host, email_username, and email_password\nvariables for the correct work."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"email_host")," - a host of the email provider. It should be set if the\n",(0,i.kt)("inlineCode",{parentName:"li"},"enable_email_server")," variable is true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"email_username")," - a username of email provider for authentication.\nIt should be set if the ",(0,i.kt)("inlineCode",{parentName:"li"},"enable_email_server")," variable is true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"email_password")," - a password of the email provider for\nauthentication. It should be set if the ",(0,i.kt)("inlineCode",{parentName:"li"},"enable_email_server"),"\nvariable is true"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"email_from")," - this value reads users in the ",(0,i.kt)("inlineCode",{parentName:"li"},"from")," fields when\nthey receive emails from CompreFace. Corresponds to ",(0,i.kt)("inlineCode",{parentName:"li"},"From")," field in\nrfc2822. Optional, if not set, then ",(0,i.kt)("inlineCode",{parentName:"li"},"email_username")," is used instead"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"save_images_to_db")," - should the CompreFace save photos to the\ndatabase. Be careful, ",(0,i.kt)("a",{parentName:"li",href:"/CompreFace/docs/face-data-migration"},"migrations")," could be\nrun only if this value is ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compreface_api_java_options")," - java options of compreface-API\ncontainer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"compreface_admin_java_options")," - java options of compreface-admin\ncontainer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ADMIN_VERSION")," - docker image tag of the compreface-admin container"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"API_VERSION")," - docker image tag of the compreface-API container"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FE_VERSION")," - docker image tag of the compreface-fe container"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CORE_VERSION")," - docker image tag of the compreface-core container")))}m.isMDXComponent=!0}}]);