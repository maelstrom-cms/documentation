(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{216:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"columns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#columns","aria-hidden":"true"}},[t._v("#")]),t._v(" Columns")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#text"}},[t._v("Text")])]),e("li",[e("a",{attrs:{href:"#text-link"}},[t._v("Text Link")])]),e("li",[e("a",{attrs:{href:"#edit-link"}},[t._v("Edit Link")])]),e("li",[e("a",{attrs:{href:"#video"}},[t._v("Video")])]),e("li",[e("a",{attrs:{href:"#image"}},[t._v("Image")])]),e("li",[e("a",{attrs:{href:"#icon"}},[t._v("Icon")])]),e("li",[e("a",{attrs:{href:"#boolean"}},[t._v("Boolean")])]),e("li",[e("a",{attrs:{href:"#media-manager"}},[t._v("Media Manager")])])])]),e("p"),t._v(" "),e("h3",{attrs:{id:"required-props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#required-props","aria-hidden":"true"}},[t._v("#")]),t._v(" Required props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The text that displays on the heading")])]),t._v(" "),e("tr",[e("td",[t._v("dataIndex")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The property that stores the data to pass to the row, this can use dot notation for nested properties e.g. "),e("code",[t._v("category.name")])])])])]),t._v(" "),e("h3",{attrs:{id:"optional-props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optional-props","aria-hidden":"true"}},[t._v("#")]),t._v(" Optional props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Pass in the name of a column type e.g. "),e("code",[t._v("BooleanColumn")]),t._v(" or even a custom column.")])]),t._v(" "),e("tr",[e("td",[t._v("sorter")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Enables the sorting button on the heading e.g. "),e("code",[t._v("'sorter' => true")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[t._v("filters")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("An array of "),e("code",[t._v("text")]),t._v(" / "),e("code",[t._v("value")]),t._v(" to make the heading filterable - find out more in the "),e("router-link",{attrs:{to:"/advance/filtering.html"}},[t._v("filtering docs.")])],1)]),t._v(" "),e("tr",[e("td",[t._v("filterMultiple")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("If the filter has multiple options.")])]),t._v(" "),e("tr",[e("td",[t._v("align")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Text alignment of the content.")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Take a guess.")])]),t._v(" "),e("tr",[e("td",[t._v("className")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("A custom classname for the column.")])]),t._v(" "),e("tr",[e("td",[t._v("fixed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("If the column should be fixed position e.g. "),e("code",[t._v("left")]),t._v(" or "),e("code",[t._v("right")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[t._v("searchable")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("If the column should show in the search dropdown.")])]),t._v(" "),e("tr",[e("td",[t._v("searchColumn")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("What db column to search when selected.")])])])]),t._v(" "),e("h2",{attrs:{id:"text"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#text","aria-hidden":"true"}},[t._v("#")]),t._v(" Text")]),t._v(" "),e("p",[t._v("By default all column types act as "),e("code",[t._v("text")]),t._v(" unless a "),e("code",[t._v("type")]),t._v(" is specified.")]),t._v(" "),e("img",{staticClass:"m-w-full h-auto shadow",staticStyle:{width:"200px"},attrs:{src:"/text-column-preview.jpg"}}),t._v(" "),e("h2",{attrs:{id:"text-link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#text-link","aria-hidden":"true"}},[t._v("#")]),t._v(" Text Link")]),t._v(" "),e("p",[t._v("You can turn columns into links, which can be useful for linking to related models etc.")]),t._v(" "),e("img",{staticClass:"m-w-full h-auto shadow",staticStyle:{width:"200px"},attrs:{src:"/text-link-preview.jpg"}}),t._v(" "),e("h4",{attrs:{id:"type-linkcolumn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-linkcolumn","aria-hidden":"true"}},[t._v("#")]),t._v(" Type: "),e("code",[t._v("LinkColumn")])]),t._v(" "),e("h4",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[t._v("#")]),t._v(" Props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("label")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("A static text label for the link")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Edit Page")])]),t._v(" "),e("tr",[e("td",[t._v("labelIndex")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The property which holds the text value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("category.name")])])]),t._v(" "),e("tr",[e("td",[t._v("dataIndex")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Where the link should go")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("category.url")])])]),t._v(" "),e("tr",[e("td",[t._v("icon")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("If an Icon should display before the text")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("home")])])]),t._v(" "),e("tr",[e("td",[t._v("newTab")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("If should open in a new tab (defaults to "),e("code",[t._v("true")]),t._v(")")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("false")])])])])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Category'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'LinkColumn'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'dataIndex'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'category.url'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'labelIndex'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'category.name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'icon'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'groups'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'newTab'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h2",{attrs:{id:"edit-link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#edit-link","aria-hidden":"true"}},[t._v("#")]),t._v(" Edit Link")]),t._v(" "),e("p",[t._v("For usability we like to make the entry name a clickable link to take you to the edit page, so we recommend using this as your first column type for the entry name field. e.g.")]),t._v(" "),e("img",{staticClass:"m-w-full h-auto shadow",staticStyle:{width:"200px"},attrs:{src:"/edit-link-preview.jpg"}}),t._v(" "),e("h4",{attrs:{id:"type-editlinkcolumn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-editlinkcolumn","aria-hidden":"true"}},[t._v("#")]),t._v(" Type: "),e("code",[t._v("EditLinkColumn")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'EditLinkColumn'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'dataIndex'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'post_name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h2",{attrs:{id:"video"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#video","aria-hidden":"true"}},[t._v("#")]),t._v(" Video")]),t._v(" "),e("p",[t._v("When using the video input you can display a small thumbnail and link to it in the listings.")]),t._v(" "),e("img",{staticClass:"m-w-full h-auto shadow",staticStyle:{width:"200px"},attrs:{src:"/video-column-preview.jpg"}}),t._v(" "),e("h4",{attrs:{id:"type-videocolumn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-videocolumn","aria-hidden":"true"}},[t._v("#")]),t._v(" Type: "),e("code",[t._v("VideoColumn")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Instructional Video'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'VideoColumn'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'dataIndex'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'video'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h2",{attrs:{id:"image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image","aria-hidden":"true"}},[t._v("#")]),t._v(" Image")]),t._v(" "),e("p",[t._v("When using the image input you can display a small thumbnail and link to it to the full size.")]),t._v(" "),e("img",{staticClass:"m-w-full h-auto shadow",staticStyle:{width:"200px"},attrs:{src:"/image-column-preview.jpg"}}),t._v(" "),e("h4",{attrs:{id:"type-imagecolumn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-imagecolumn","aria-hidden":"true"}},[t._v("#")]),t._v(" Type: "),e("code",[t._v("ImageColumn")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Featured Image'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'ImageColumn'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'dataIndex'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'image'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h2",{attrs:{id:"icon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#icon","aria-hidden":"true"}},[t._v("#")]),t._v(" Icon")]),t._v(" "),e("p",[t._v("Often you might want to display an icon to represent something, you can use the "),e("router-link",{attrs:{to:"/advance/entry-transformer.html"}},[t._v("entry transformer")]),t._v(" to provide the name of the icon to display.")],1),t._v(" "),e("img",{staticClass:"m-w-full h-auto shadow",staticStyle:{width:"200px"},attrs:{src:"/icon-preview.jpg"}}),t._v(" "),e("h4",{attrs:{id:"type-iconcolumn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-iconcolumn","aria-hidden":"true"}},[t._v("#")]),t._v(" Type: "),e("code",[t._v("IconColumn")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'IconColumn'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'dataIndex'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type_icon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h2",{attrs:{id:"boolean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#boolean","aria-hidden":"true"}},[t._v("#")]),t._v(" Boolean")]),t._v(" "),e("p",[t._v("To display either a tick or a cross based of a boolean you can use the boolean column.")]),t._v(" "),e("img",{staticClass:"m-w-full h-auto shadow",staticStyle:{width:"200px"},attrs:{src:"/boolean-preview.jpg"}}),t._v(" "),e("h4",{attrs:{id:"type-booleancolumn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-booleancolumn","aria-hidden":"true"}},[t._v("#")]),t._v(" Type: "),e("code",[t._v("BooleanColumn")])]),t._v(" "),e("h2",{attrs:{id:"media-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#media-manager","aria-hidden":"true"}},[t._v("#")]),t._v(" Media Manager")]),t._v(" "),e("p",[t._v("The media manager column allows you to display 1 or more thumbnails for some uploaded media, just provide the IDs of the attached media.")]),t._v(" "),e("img",{staticClass:"m-w-full h-auto shadow",staticStyle:{width:"200px"},attrs:{src:"/image-column-preview.jpg"}}),t._v(" "),e("h4",{attrs:{id:"type-mediamanagercolumn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-mediamanagercolumn","aria-hidden":"true"}},[t._v("#")]),t._v(" Type: "),e("code",[t._v("MediaManagerColumn")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("max_items")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum assets to show")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2")])])])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Photos'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'MediaManagerColumn'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'dataIndex'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'photo_urls'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'max_items'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);