"use strict";(self.webpackChunkcompreface=self.webpackChunkcompreface||[]).push([[779],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1992:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"face-services-and-plugins",title:"Face Services and Plugins",sidebar_label:"Face Services and Plugins"},l="Face Services and Plugins",c={unversionedId:"face-services-and-plugins",id:"face-services-and-plugins",isDocsHomePage:!1,title:"Face Services and Plugins",description:"CompreFace supports these face services and plugins:",source:"@site/docs/Face-services-and-plugins.md",sourceDirName:".",slug:"/face-services-and-plugins",permalink:"/CompreFace/docs/face-services-and-plugins",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Face-services-and-plugins.md",tags:[],version:"current",frontMatter:{id:"face-services-and-plugins",title:"Face Services and Plugins",sidebar_label:"Face Services and Plugins"},sidebar:"someSidebar",previous:{title:"How to use CompreFace",permalink:"/CompreFace/docs/how-to-use"},next:{title:"Rest API Description",permalink:"/CompreFace/docs/rest-api-description"}},p=[{value:"Face detection",id:"face-detection",children:[],level:2},{value:"Face recognition",id:"face-recognition",children:[],level:2},{value:"Face verification",id:"face-verification",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"face-services-and-plugins"},"Face Services and Plugins"),(0,i.kt)("p",null,"CompreFace supports these face services and plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Face recognition service (Face identification)"),(0,i.kt)("li",{parentName:"ul"},"Face detection service"),(0,i.kt)("li",{parentName:"ul"},"Face verification service"),(0,i.kt)("li",{parentName:"ul"},"Age detection plugin"),(0,i.kt)("li",{parentName:"ul"},"Gender detection plugin"),(0,i.kt)("li",{parentName:"ul"},"Landmarks detection plugin"),(0,i.kt)("li",{parentName:"ul"},"Calculator plugin")),(0,i.kt)("h1",{id:"services"},"Services"),(0,i.kt)("p",null,"To use face service you need to create it in an application on UI. The type of service depends on your application needs. Each service has its own REST API context and there is no possibility to change the service type after creation. Here is a short description of each of them:"),(0,i.kt)("h2",{id:"face-detection"},"Face detection"),(0,i.kt)("p",null,"Face detection service is used to detect all faces in the image. It doesn\u2019t recognize faces, just finds them on the image."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cases of use")),(0,i.kt)("p",null,"The most useful cases include face plugins for face analysis:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"gather statistics on how your store popular among different genders"),(0,i.kt)("li",{parentName:"ul"},"gather statistics on among what ages your event is popular"),(0,i.kt)("li",{parentName:"ul"},"get landmark information to know where customers look at"),(0,i.kt)("li",{parentName:"ul"},"gather statistics on how many customers in the store")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to test")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the ComperFace application page, at the bottom of the frame, click Create button."),(0,i.kt)("li",{parentName:"ol"},"In the Create Service dialog, from the Type drop-down menu, select DETECTION."),(0,i.kt)("li",{parentName:"ol"},"Enter the name of the service you are going to create."),(0,i.kt)("li",{parentName:"ol"},"From the list of the services in the Services frame, select the service you created; you can use search field to filter the services."),(0,i.kt)("li",{parentName:"ol"},"Click Test button near in the row of the service you want to launch."),(0,i.kt)("li",{parentName:"ol"},"On the service page, open or drag-and-drop the picture to analyze."),(0,i.kt)("li",{parentName:"ol"},"The service will display the original picture with marks near every face.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output")),(0,i.kt)("p",null,"Below the picture, you can see the Request processed, and the Response to the request.\nThe Response is the output which ComperFace provides via ",(0,i.kt)("a",{parentName:"p",href:"/CompreFace/docs/rest-api-description"},"API"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("h2",{id:"face-recognition"},"Face recognition"),(0,i.kt)("p",null,"Face recognition service is used for face identification. This means that you first need to upload known faces to faces collection and then recognize unknown faces among them. When you upload an unknown face, the service returns the most similar faces to it. Also, face recognition service supports verify endpoint to check if this person from face collection is the correct one. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cases of use")),(0,i.kt)("p",null,"The possible cases include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"when you have photos of employees and want to recognize strangers in the office"),(0,i.kt)("li",{parentName:"ul"},"when you have photos of conference attendees and want to track who was interested in which topics."),(0,i.kt)("li",{parentName:"ul"},"when you have photos of VIP guests and you want to find them among the crowd very quickly.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to test")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the ComperFace application page, at the bottom of the frame, click Create button."),(0,i.kt)("li",{parentName:"ol"},"In the Create Service dialog, from the Type drop-down menu, select RECOGNITION."),(0,i.kt)("li",{parentName:"ol"},"Enter the name of the service you are going to create."),(0,i.kt)("li",{parentName:"ol"},"From the list of the services in the Services frame, select the service you created; you can use search field to filter the services."),(0,i.kt)("li",{parentName:"ol"},"Click Test button near in the row of the service you want to launch."),(0,i.kt)("li",{parentName:"ol"},"On the service page, open or drag-and-drop the picture to analyze."),(0,i.kt)("li",{parentName:"ol"},"The service will display the original picture with marks near every face.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output")),(0,i.kt)("p",null,"Below the picture, you can see the Request processed, and the Response to the request.\nThe Response is the output which ComperFace provides via ",(0,i.kt)("a",{parentName:"p",href:"/CompreFace/docs/rest-api-description"},"API"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("h2",{id:"face-verification"},"Face verification"),(0,i.kt)("p",null,"Face verification service is used to check if this person is the correct one. The service compares two faces you send to the rest endpoint and returns their similarity. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cases of use")),(0,i.kt)("p",null,"The possible cases include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"when a customer provides you an ID or driving license and you need to verify if this is him"),(0,i.kt)("li",{parentName:"ul"},"when a user connects his social network account to your application and you want to verify if this is him")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to test")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the ComperFace application page, at the bottom of the frame, click Create button."),(0,i.kt)("li",{parentName:"ol"},"In the Create Service dialog, from the Type drop-down menu, select VERIFICATION."),(0,i.kt)("li",{parentName:"ol"},"Enter the name of the service you are going to create."),(0,i.kt)("li",{parentName:"ol"},"From the list of the services in the Services frame, select the service you created; you can use search field to filter the services."),(0,i.kt)("li",{parentName:"ol"},"Click Test button near in the row of the service you want to launch."),(0,i.kt)("li",{parentName:"ol"},"On the service page, open or drag-and-drop two pictures to compare their content."),(0,i.kt)("li",{parentName:"ol"},"The service will display the original picture with marks near every face.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output")),(0,i.kt)("p",null,"Below the picture, you can see the Request processed, and the Response to the request.\nThe Response is the output which ComperFace provides via ",(0,i.kt)("a",{parentName:"p",href:"/CompreFace/docs/rest-api-description"},"API"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("h1",{id:"face-plugins"},"Face plugins"),(0,i.kt)("p",null,"Face plugins could be used with any of the face services. By default, face services return only bounding boxes and similarity if\napplicable. To add more information in response you can add face plugins in your request. To add a plugin you need to list\ncomma-separated needed plugins in the query ",(0,i.kt)("inlineCode",{parentName:"p"},"face_plugins")," parameter. This parameter is supported by all face recognition services.\nExample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl  -X POST "http://localhost:8000/api/v1/recognition/recognize?face_plugins=age,gender,landmarks,mask" \\\n-H "Content-Type: multipart/form-data" \\\n-H "x-api-key: <faces_recognition_api_key>" \\\n-F file=<local_file>\n')),(0,i.kt)("p",null,"This request will recognize faces on the image and return additional information about age, gender, and landmarks."),(0,i.kt)("p",null,"The list of possible plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"age - returns the supposed range of a person\u2019s age in format ","[min, max]"),(0,i.kt)("li",{parentName:"ul"},"gender - returns the supposed person\u2019s gender"),(0,i.kt)("li",{parentName:"ul"},"landmarks - returns face landmarks. This plugin is supported by all configurations and returns 5 points of eyes, nose, and mouth"),(0,i.kt)("li",{parentName:"ul"},"calculator - returns face embeddings.  "),(0,i.kt)("li",{parentName:"ul"},"mask - returns if the person wears a mask. Possible results: ",(0,i.kt)("inlineCode",{parentName:"li"},"without_mask"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mask_worn_incorrectly"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mask_worn_correctly"),". Learn more about ",(0,i.kt)("a",{parentName:"li",href:"/CompreFace/docs/mask-detection-plugin"},"mask plugin")),(0,i.kt)("li",{parentName:"ul"},"landmarks2d106 - returns face landmarks. This plugin is supported only by the configuration that uses insightface library. It\u2019s not\navailable by default. More information about landmarks ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/deepinsight/insightface/tree/master/alignment/coordinateReg#visualization"},"here"),".")))}d.isMDXComponent=!0}}]);