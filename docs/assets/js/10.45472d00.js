(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{193:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"extending-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extending-components","aria-hidden":"true"}},[t._v("#")]),t._v(" Extending Components")]),t._v(" "),s("p",[t._v("If you want to make your own component which is based off a Maelstrom component you can easily do so, we use Reacts Class API which means you can easily extend it, make your changes and register that instead!")]),t._v(" "),s("p",[t._v("There's 3 steps you'll need to take")]),t._v(" "),s("ul",[s("li",[t._v("Create your component")]),t._v(" "),s("li",[t._v("Register it")]),t._v(" "),s("li",[t._v("Create a blade include")])]),t._v(" "),s("h3",{attrs:{id:"creating-your-extended-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-extended-component","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating your extended component")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TextInput "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@maelstrom-cms/js/fields/TextInput'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CurrencyInput")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextInput")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("renderPrefix")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'£'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"registering-your-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registering-your-component","aria-hidden":"true"}},[t._v("#")]),t._v(" Registering your component")]),t._v(" "),s("p",[t._v("Before any custom components become available you'll need to add them to the registry by importing it, then using the "),s("code",[t._v("register")]),t._v(" method.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" CurrencyInput "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-components/CurrentyInput'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Registry "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@maelstrom-cms/js/support/Registry'")]),t._v("\n\nRegistry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    CurrencyInput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("Make sure you've added your custom javascript path to "),s("code",[t._v("config/maelstrom.php")])])]),t._v(" "),s("h3",{attrs:{id:"creating-a-blade-include"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-blade-include","aria-hidden":"true"}},[t._v("#")]),t._v(" Creating a blade include")]),t._v(" "),s("p",[t._v("You'll want to be able to include your component within your blade templates, so we'll create an include which you can reference e.g.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("@"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'my-components.currency'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Then you'll need your file itself e.g. "),s("code",[t._v("resources/views/my-components/currency.blade.php")])]),t._v(" "),s("p",[t._v("The anatomy is fairly straight forward, you provide a "),s("code",[t._v("div")]),t._v(" that has several properties attached, below is a list of recommended props and how to get them, however you can do this however you see fit.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("@php "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$entry")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$entry")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maelstrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" @endphp\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div\n    id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"{{ '),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")])]),t._v(' }}_field"')]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"CurrencyInput"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The name of your custom input")]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"{{ old('),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")])]),t._v(", data_get("),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$entry")])]),t._v(", "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")])]),t._v(", ("),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$default")])]),t._v(' ?? null))) }}"')]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"{{ '),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$label")])]),t._v(" ?? "),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")])]),t._v(' }}"')]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"{{ '),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")])]),t._v(' }}"')]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("help"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"{{ '),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$help")])]),t._v(' ?? null }}"')]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"{{ '),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$errors")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("first")])]),t._v("("),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")])]),t._v(') }}"')]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("required"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"{{ bool_to_string('),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$required")])]),t._v(' ?? false) }}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("Your component should now display where ever you "),s("code",[t._v("@include")]),t._v(" it!")]),t._v(" "),s("p",[t._v("If you get confused by anything, simply look at any of our existing blade includes or components.")])])},[],!1,null,null,null);a.default=n.exports}}]);