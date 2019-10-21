(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{219:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"form-options-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#form-options-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Form Options API")]),t._v(" "),e("p",[t._v("The Form Options API provides a simple single point of entry that allows you to return AJAX values for components such as Select Menus.")]),t._v(" "),e("p",[t._v("It also enables the ability to create nested resources as once the entry has been created it can refresh the form options to populate your newly created item.")]),t._v(" "),e("p",[t._v("You can configure which entities are exposed via the "),e("code",[t._v("config/maelstrom.php")]),t._v(" within the "),e("code",[t._v("form_options")]),t._v(" section.")]),t._v(" "),e("p",[t._v("You can also apply custom guards, or disable it completely if you like.")]),t._v(" "),e("p",[t._v("The most important section of the config is the "),e("code",[t._v("models")]),t._v(" property, this is where you provide a list of models which can be returned from the API.")]),t._v(" "),e("p",[t._v("For example, the configuration could look like")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'models'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'categories'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'model'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" App\\"),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Category")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'scopes'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'customScope'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'label'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'tags'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'model'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" App\\"),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Tag")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'scopes'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'label'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'pages'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'model'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" App\\"),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Page")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'scopes'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'label'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'allow_none'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'none_label'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'None'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'none_value'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h3",{attrs:{id:"the-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-url","aria-hidden":"true"}},[t._v("#")]),t._v(" The URL")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("key")]),t._v(" of a specific model acts as the URL param which will be used later. e.g. if you have")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'lemonade_recipes'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("The URL to access a list of these would be")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("maelstrom"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("api"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lemonade_recipes\n")])])]),e("h3",{attrs:{id:"the-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" The Configuration")]),t._v(" "),e("p",[t._v("Each entry takes 4 options for basic customisation")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("model")]),t._v(" - This is a FQN of an eloquent model e.g. "),e("code",[t._v("App\\Page::class")])]),t._v(" "),e("li",[e("code",[t._v("scopes")]),t._v(" - If you need to limit which models return, you can apply a scope to it - this must always be an array otherwise it will get ignored.")]),t._v(" "),e("li",[e("code",[t._v("value")]),t._v(" - This is the name of the attribute which holds the value you want to save in the database, often it's the primary key or "),e("code",[t._v("id")]),t._v(" field.")]),t._v(" "),e("li",[e("code",[t._v("label")]),t._v(" - This is the name of the attribute which holds the display text, can be an accessor etc.")])]),t._v(" "),e("p",[t._v('There are 3 additional options which can be used to control "none" options - So if your select menu should have an option that represents "none of the below".')]),t._v(" "),e("ul",[e("li",[e("code",[t._v("allow_none")]),t._v(' - Will prepend a "None" value to the top of the select menu.')]),t._v(" "),e("li",[e("code",[t._v("none_value")]),t._v(" - What will be submitted from the HTML form - You should not use "),e("code",[t._v("null")]),t._v(" as forms do not support this, instead use an empty string ``.")]),t._v(" "),e("li",[e("code",[t._v("none_label")]),t._v(" - What to display to the user e.g. "),e("code",[t._v("None")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"making-the-inputs-use-the-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#making-the-inputs-use-the-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Making the inputs use the API")]),t._v(" "),e("p",[t._v("By default all form inputs which support remote data will use the original "),e("code",[t._v("options")]),t._v(" prop that have been passed in, then when a refresh is requested they will look for the "),e("code",[t._v("remote_uri")]),t._v(" prop to take the updated data from.")]),t._v(" "),e("p",[t._v("This means your select menu might look something like this.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("@include"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'maelstrom::inputs.select'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lemonade_recipes'")]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'label'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Lemonade Recipes'")]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'options'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" RecipeService::formOptions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remote_uri'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" route"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'maelstrom.form-options'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lemonade_recipes'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("This will then set up everything you need for AJAX inputs.")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("Using the "),e("code",[t._v("route()")]),t._v(" helper along with the name "),e("code",[t._v("maelstrom.form-options")]),t._v(" and passing in the "),e("code",[t._v("key")]),t._v(" of what you want is the easiest way to get the URL for the API.")])]),t._v(" "),e("h3",{attrs:{id:"supported-inputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-inputs","aria-hidden":"true"}},[t._v("#")]),t._v(" Supported Inputs")]),t._v(" "),e("p",[t._v("Currently the base field types which support remote options are")]),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/components/fields.html#transfer--relationship"}},[t._v("Transfer / Relationship Input")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/components/fields.html#select-menu"}},[t._v("Select / Select Multiple Input")])],1)])])},[],!1,null,null,null);s.default=n.exports}}]);