(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{192:function(t,e,s){t.exports=s.p+"assets/img/rest-api-components.4b31db8f.svg"},193:function(t,e,s){t.exports=s.p+"assets/img/rest-api-components-sample.26442f16.svg"},272:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"onboarding-overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onboarding-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Onboarding Overview")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"overview-of-apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview of APIs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(192),alt:"REST API Components"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"sample-rest-api-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sample-rest-api-service","aria-hidden":"true"}},[this._v("#")]),this._v(" Sample REST API Service")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To demonstrate the concepts that apply to REST API services, we use the following example of a Spring Boot REST API service: https://github.com/swagger-api/swagger-samples/tree/master/java/java-spring-boot. This example is used in the REST API onboarding guide: "),e("strong",[this._v("REST API without code changes required")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The Sample REST API Service has a base URL. When you start this service on your computer, the "),e("em",[this._v("service base URL")]),this._v(" is: "),e("code",[this._v("http://localhost:8080")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")]),this._v(" If a service is deployed to a web application server, the base URL of the service (application) has the following format: "),e("code",[this._v("https://application-server-hostname:port/application-name")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This sample service provides one API that has the base path "),e("code",[this._v("/v2")]),this._v(", which is represented in the base URL of the API as "),e("code",[this._v("http://localhost:8080/v2")]),this._v(". In this base URL, "),e("code",[this._v("/v2")]),this._v(" is a qualifier of the base path that was chosen by the developer of this API. Each API has a base path depending on the particular implementation of the service.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("/pets/{id}")]),this._v(" - "),e("em",[this._v("Find pet by ID")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This endpoint in the sample service returns information about a pet when the "),e("code",[this._v("{id}")]),this._v(" is between 0 and 10. If "),e("code",[this._v("{id}")]),this._v(" is greater than 0 or a non-integer then it returns an error. These are conditions set in the sample service.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Tip:")]),this._v(" Access http://localhost:8080/v2/pets/1 to see what this REST API endpoint does. You should get the following response:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"category"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Cats"')]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Cat 1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"photoUrls"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v('"url1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v('"url2"')]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"status"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"available"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"tags"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"tag1"')]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"tag2"')]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")]),this._v(" The onboarding guides demonstrate how to add the Sample REST API Service to the API Mediation Layer to make the service available through the "),e("code",[this._v("petstore")]),this._v(" service ID.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(193),alt:"Sample REST API Components"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("http://localhost:8080/v2/swagger.json\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api-service-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-service-types","aria-hidden":"true"}},[this._v("#")]),this._v(" API Service Types")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Tip:")]),this._v(" When developing a new service, we recommend that you update the code to support the API Mediation Layer natively. Use the previously listed onboarding guides for services that can be updated to support the API Mediation Layer natively. The benefit of supporting the API Mediation Layer natively is that it requires less configuration for the system administrator. Such service can be moved to different systems, can be listened to on a different port, or additional instances can be started without the need to change  configuration of the API Mediation Layer.")])}],n=s(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Before identifying the API you want to expose in the API Mediation Layer, it is useful to consider the structure of APIs. An application programming interface (API) is a set of rules that allow programs to talk to each other. A developer creates an API on a server and allows a client to talk to the API. Representational State Transfer (REST) determines the look of an API and is a set of rules that developers follow when creating an API. One of these rules states that a user should be able to get a piece of data (resource) through URL endpoints using HTTP. These resources are usually represented in the form of JSON or XML documents. The preferred documentation type in Zowe is in the JSON format.")]),t._v(" "),s("p",[t._v("A REST API service can provide one or more REST APIs and usually provides the latest version of each API. A REST service is hosted on a web server which can host one or more services, often referred to as "),s("em",[t._v("applications")]),t._v(". A web server that hosts multiple services  or applications is referred to as a "),s("em",[t._v("web application server")]),t._v(". Examples of "),s("em",[t._v("web application servers")]),t._v(" are "),s("a",{attrs:{href:"http://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Tomcat"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://developer.ibm.com/wasdev/websphere-liberty/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebSphere Liberty"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" Definitions used in this procedure follow the "),s("a",{attrs:{href:"https://swagger.io/specification/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenAPI specification"),s("OutboundLink")],1),t._v(".\nEach API has its own title, description, and version (versioned using "),s("a",{attrs:{href:"https://semver.org/spec/v2.0.0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Semantic Versioning 2.0.0"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("p",[t._v("The following diagram shows the relations between various types of services, their APIs, REST API endpoints, and the API gateway:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("In microservice architecture, a web server usually provides a single service. A typical example of a single service implementation is a Spring Boot web application.")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("You can build this service using instructions in the source code of the Spring Boot REST API service example (https://github.com/swagger-api/swagger-samples/blob/master/java/java-spring-boot/README.md).")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("This sample API has only one single endpoint:")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),s("p",[t._v("The following diagram shows the relations between the Sample REST API Service and its corresponding API, REST API endpoint, and API gateway:")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("This sample service provides a Swagger document in JSON format at the following URL:")]),t._v(" "),t._m(14),s("p",[t._v("The Swagger document is used by the API Catalog to display the API documentation.")]),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("The process of onboarding depends on the method that is used to develop the API service.")]),t._v(" "),s("p",[t._v("While any REST API service can be added to the API Mediation Layer, this documentation focuses on following types of REST APIs:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Services that can be updated to support the API Mediation Layer natively by updating the service code:")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./api-mediation-onboard-a-spring-boot-rest-api-service.html"}},[t._v("Java REST APIs with Spring Boot")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./api-mediation-onboard-an-existing-java-jersey-rest-api-service.html"}},[t._v("Java Jersey REST APIs")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./api-mediation-onboard-an-existing-java-rest-api-service-without-spring-boot-with-zowe-api-mediation-layer.html"}},[t._v("Java REST APIs without Spring Boot")])],1)])]),t._v(" "),s("li",[s("p",[s("router-link",{attrs:{to:"./api-mediation-onboard-an-existing-rest-api-service-without-code-changes.html"}},[t._v("REST APIs without code changes required")])],1)])]),t._v(" "),t._m(16)])},a,!1,null,null,null);r.options.__file="api-mediation-onboard-overview.md";e.default=r.exports}}]);