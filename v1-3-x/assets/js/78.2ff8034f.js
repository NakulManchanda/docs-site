(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{225:function(e,t,s){"use strict";s.r(t);var i=s(0),n=Object(i.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("The Visual Studio Code (VSCode) Extension for Zowe lets you interact with data sets that are stored on IBM z/OS mainframe. Install the extension directly to "),s("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode"),s("OutboundLink")],1),e._v(" to enable the extension within the GUI. You can explore data sets, view their contents, make changes, and upload the changes to the mainframe. For some users, it can be more convenient to interact with data sets through a GUI rather than using command-line interfaces or 3270 emulators. The extension is powered by Zowe CLI.")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" The primary documentation, for this plug-in is available on the "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code Marketplace"),s("OutboundLink")],1),e._v(". This topic is intended to be an overview of the extension.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("Before you use the VSCode extension, meet the following software requirements on your computer:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Install "),s("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("li",[s("p",[s("router-link",{attrs:{to:"./cli-installcli.html"}},[e._v("Install Zowe CLI")]),e._v(".")],1)]),e._v(" "),s("li",[s("p",[e._v("Create at least one Zowe CLI 'zosmf' profile so that the extension can communicate with the mainframe. See "),s("router-link",{attrs:{to:"./cli-configuringcli.html#creating-zowe-cli-profiles"}},[e._v("Creating Zowe CLI Profiles")]),e._v(".")],1)])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("You can also watch the following video to learn how to install and use the Zowe VSCode Extension. If you read this doc in PDF format, you can click "),s("a",{attrs:{href:"https://youtu.be/la1_Ss27fn8",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" to watch the video.")]),e._v(" "),s("iframe",{staticClass:"embed-responsive-item",attrs:{id:"youtubeplayer",title:"Zowe VSCode Extension",type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/la1_Ss27fn8",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}}),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("As an developer, you can use VSCode Extension for Zowe to perform the following tasks.")]),e._v(" "),e._m(7),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" For detailed step-by-step instructions for using the plug-in and more information about each feature, see "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe on the Visual Studio Code Marketplace"),s("OutboundLink")],1),e._v(".")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"vscode-extension-for-zowe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscode-extension-for-zowe","aria-hidden":"true"}},[this._v("#")]),this._v(" VSCode Extension for Zowe")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"#software-requirements"}},[this._v("Software requirements")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#installing"}},[this._v("Installing")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#use-cases"}},[this._v("Use Cases")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"software-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#software-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Software requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("Address "),s("a",{attrs:{href:"#software-requirements"}},[e._v("the software requirements")]),e._v(".")]),e._v(" "),s("li",[e._v("Open VSCode. Navigate to the "),s("strong",[e._v("Extensions")]),e._v(" tab on the left side of the UI.")]),e._v(" "),s("li",[e._v("Click the green "),s("strong",[e._v("Install")]),e._v(" button to install the plug-in.")]),e._v(" "),s("li",[e._v("Restart VSCode. The plug-in is now installed and available for use.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Tip:")]),this._v(" For information about how to install the extension from a VSIX file and run system tests on the extension, see the Developer README file in the Zowe VSCode extension GitHub repository.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"use-cases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-cases","aria-hidden":"true"}},[this._v("#")]),this._v(" Use-Cases")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("View and filter mainframe data sets.")]),this._v(" "),t("li",[this._v("Create download, edit, upload, and delete PDS and PDS members.")]),this._v(" "),t("li",[this._v('Use "safe save" to safely resolve conflicts when a data set is changed during local editing.')]),this._v(" "),t("li",[this._v("Switch between Zowe CLI profiles to quickly target different mainframe systems.")])])}],!1,null,null,null);n.options.__file="cli-vscodeplugin.md";t.default=n.exports}}]);