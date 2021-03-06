import {respond} from "@sveltejs/kit/ssr";
import {create_ssr_component, validate_component, missing_component, escape, add_attribute, subscribe, each} from "svelte/internal";
import {setContext, afterUpdate, onMount} from "svelte";
import "svelte/transition";
import {writable} from "svelte/store";
var root_svelte_svelte_type_style_lang = "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}";
const css$1 = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {stores} = $$props;
  let {page} = $$props;
  let {components} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  let {props_2 = null} = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$1);
  {
    stores.page.set(page);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1j55zn5"}">${navigated ? `${escape(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
const template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.ico" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
let options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-b50b22d2.js",
      css: ["/./_app/assets/start-8077b9bf.css"],
      js: ["/./_app/start-b50b22d2.js", "/./_app/chunks/vendor-f784ef24.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error2) => String(error2),
    handle_error: (error2) => {
      console.error(error2.stack);
      error2.stack = options.get_stack(error2);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template
  };
}
const d = decodeURIComponent;
const empty = () => ({});
const manifest = {
  assets: [],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/pokemon\/([^/]+?)\/?$/,
      params: (m) => ({id: d(m[1])}),
      a: ["src/routes/__layout.svelte", "src/routes/pokemon/[id].svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
const get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({request, render: render2}) => render2(request))
});
const module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/pokemon/[id].svelte": () => Promise.resolve().then(function() {
    return _id_;
  }),
  "src/routes/about.svelte": () => Promise.resolve().then(function() {
    return about;
  })
};
const metadata_lookup = {"src/routes/__layout.svelte": {entry: "/./_app/pages/__layout.svelte-47caacb6.js", css: ["/./_app/assets/pages/__layout.svelte-dd12eab1.css"], js: ["/./_app/pages/__layout.svelte-47caacb6.js", "/./_app/chunks/vendor-f784ef24.js"], styles: null}, ".svelte-kit/build/components/error.svelte": {entry: "/./_app/error.svelte-921dc929.js", css: [], js: ["/./_app/error.svelte-921dc929.js", "/./_app/chunks/vendor-f784ef24.js"], styles: null}, "src/routes/index.svelte": {entry: "/./_app/pages/index.svelte-05b3a926.js", css: [], js: ["/./_app/pages/index.svelte-05b3a926.js", "/./_app/chunks/vendor-f784ef24.js", "/./_app/chunks/pokestore-4ef6be91.js"], styles: null}, "src/routes/pokemon/[id].svelte": {entry: "/./_app/pages/pokemon/[id].svelte-52373ab6.js", css: [], js: ["/./_app/pages/pokemon/[id].svelte-52373ab6.js", "/./_app/chunks/vendor-f784ef24.js", "/./_app/chunks/pokestore-4ef6be91.js"], styles: null}, "src/routes/about.svelte": {entry: "/./_app/pages/about.svelte-61218b38.js", css: [], js: ["/./_app/pages/about.svelte-61218b38.js", "/./_app/chunks/vendor-f784ef24.js"], styles: null}};
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({paths: {base: "", assets: "/."}});
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({...request, host}, options, {prerender});
}
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"flex justify-center w-full"}"><a class="${"mx-4 text-lg"}" href="${"/"}">Home</a>
    <a class="${"mx-4 text-lg"}" href="${"/about"}">About</a></nav>`;
});
var __layout_svelte_svelte_type_style_lang = "/*! tailwindcss v2.1.2 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n	box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n	-moz-tab-size: 4;\n	-o-tab-size: 4;\n	   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n	line-height: 1.15; /* 1 */\n	-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n	margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n	font-family:\n		system-ui,\n		-apple-system, /* Firefox supports this but not yet `system-ui` */\n		'Segoe UI',\n		Roboto,\n		Helvetica,\n		Arial,\n		sans-serif,\n		'Apple Color Emoji',\n		'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n	height: 0; /* 1 */\n	color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n	-webkit-text-decoration: underline dotted;\n	        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n	font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n	font-family:\n		ui-monospace,\n		SFMono-Regular,\n		Consolas,\n		'Liberation Mono',\n		Menlo,\n		monospace; /* 1 */\n	font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n	font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n	font-size: 75%;\n	line-height: 0;\n	position: relative;\n	vertical-align: baseline;\n}\n\nsub {\n	bottom: -0.25em;\n}\n\nsup {\n	top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n	text-indent: 0; /* 1 */\n	border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n	font-family: inherit; /* 1 */\n	font-size: 100%; /* 1 */\n	line-height: 1.15; /* 1 */\n	margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n	text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n	-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n	border-style: none;\n	padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n	outline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n	box-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n	padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n	vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n	height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n	-webkit-appearance: textfield; /* 1 */\n	outline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n	-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n	-webkit-appearance: button; /* 1 */\n	font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n	display: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n* {\n	--tw-shadow: 0 0 #0000;\n	--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n	--tw-ring-offset-width: 0px;\n	--tw-ring-offset-color: #fff;\n	--tw-ring-color: rgba(59, 130, 246, 0.5);\n	--tw-ring-offset-shadow: 0 0 #0000;\n	--tw-ring-shadow: 0 0 #0000;\n}.mx-4 {\n	margin-left: 1rem;\n	margin-right: 1rem;\n}.my-8 {\n	margin-top: 2rem;\n	margin-bottom: 2rem;\n}.mx-auto {\n	margin-left: auto;\n	margin-right: auto;\n}.flex {\n	display: flex;\n}.grid {\n	display: grid;\n}.h-40 {\n	height: 10rem;\n}.w-full {\n	width: 100%;\n}.w-40 {\n	width: 10rem;\n}.max-w-6xl {\n	max-width: 72rem;\n}.list-none {\n	list-style-type: none;\n}.grid-cols-1 {\n	grid-template-columns: repeat(1, minmax(0, 1fr));\n}.flex-col {\n	flex-direction: column;\n}.items-center {\n	align-items: center;\n}.justify-center {\n	justify-content: center;\n}.gap-4 {\n	gap: 1rem;\n}.rounded-md {\n	border-radius: 0.375rem;\n}.border-2 {\n	border-width: 2px;\n}.border-gray-200 {\n	--tw-border-opacity: 1;\n	border-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}.bg-gray-100 {\n	--tw-bg-opacity: 1;\n	background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}.p-6 {\n	padding: 1.5rem;\n}.p-4 {\n	padding: 1rem;\n}.p-8 {\n	padding: 2rem;\n}.py-4 {\n	padding-top: 1rem;\n	padding-bottom: 1rem;\n}.text-center {\n	text-align: center;\n}.text-lg {\n	font-size: 1.125rem;\n	line-height: 1.75rem;\n}.text-2xl {\n	font-size: 1.5rem;\n	line-height: 2rem;\n}.text-4xl {\n	font-size: 2.25rem;\n	line-height: 2.5rem;\n}.uppercase {\n	text-transform: uppercase;\n}.text-gray-800 {\n	--tw-text-opacity: 1;\n	color: rgba(31, 41, 55, var(--tw-text-opacity));\n}.shadow-sm {\n	--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.filter {\n	--tw-blur: var(--tw-empty,/*!*/ /*!*/);\n	--tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n	--tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n	--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n	--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n	--tw-invert: var(--tw-empty,/*!*/ /*!*/);\n	--tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n	--tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n	--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n	filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}.hover\\:shadow-md:hover {\n	--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}@media (min-width: 768px) {\n\n	.md\\:grid-cols-2 {\n		grid-template-columns: repeat(2, minmax(0, 1fr));\n	}\n}";
const css = {
  code: "@tailwind base;@tailwind components;@tailwind utilities;",
  map: '{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script>\\nimport Nav from \\"../components/nav.svelte\\";\\n</script>\\n<div class=\\"p-8 max-w-6xl mx-auto\\">\\n    <Nav/>\\n    <slot>\\n    </slot>\\n</div>\\n<style>\\n@tailwind base;\\n@tailwind components;\\n@tailwind utilities;\\n</style>"],"names":[],"mappings":"AASA,UAAU,IAAI,CAAC,AACf,UAAU,UAAU,CAAC,AACrB,UAAU,SAAS,CAAC"}'
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"p-8 max-w-6xl mx-auto"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
    ${slots.default ? slots.default({}) : `
    `}
</div>`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: _layout
});
function load$1({error: error2, status}) {
  return {props: {error: error2, status}};
}
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status} = $$props;
  let {error: error2} = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  return `<h1>${escape(status)}</h1>

<p>${escape(error2.message)}</p>


${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
});
var error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Error,
  load: load$1
});
const PokemanCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {pokeman} = $$props;
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  return `<a class="${"list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"}"${add_attribute("href", `/pokemon/${pokeman.id}`, 0)}><img class="${"h-40 w-40 "}"${add_attribute("src", pokeman.image, 0)}${add_attribute("alt", pokeman.name, 0)}>
    <h2 class="${"uppercase text-2xl"}">${escape(pokeman.id)}. ${escape(pokeman.name)}</h2></a>`;
});
const pokemon = writable([]);
const pokemonDetails = {};
let loaded = false;
const fetchPokemon = async () => {
  if (loaded)
    return;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  const res = await fetch(url);
  const data = await res.json();
  const loadedPokemon = data.results.map((data2, index2) => ({
    name: data2.name,
    id: index2 + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index2 + 1}.png`
  }));
  pokemon.set(loadedPokemon);
  loaded = true;
};
const getPokemonById = async (id) => {
  if (pokemonDetails[id])
    return pokemonDetails[id];
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    pokemonDetails[id] = data;
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pokemon, $$unsubscribe_pokemon;
  $$unsubscribe_pokemon = subscribe(pokemon, (value) => $pokemon = value);
  let searchTerm = "";
  let filteredPokemon = [];
  fetchPokemon();
  {
    {
      {
        filteredPokemon = [...$pokemon];
      }
    }
  }
  $$unsubscribe_pokemon();
  return `${$$result.head += `${$$result.title = `<title>Pokedex</title>`, ""}`, ""}

<h1 class="${"text-4xl text-center my-8 uppercase"}">SvelteKit Pokedex</h1>
<input class="${"w-full rounded-md text-lg p-4 border-2 border-gray-200"}" placeholder="${"Search Pokemon"}"${add_attribute("value", searchTerm, 1)}>
<div class="${"py-4 grid gap-4 md:grid-cols-2 grid-cols-1"}">${each(filteredPokemon, (pokeman) => `${validate_component(PokemanCard, "PokemanCard").$$render($$result, {pokeman}, {}, {})}`)}</div>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Routes
});
async function load(ctx) {
  let id = ctx.page.params.id;
  const pokeman = await getPokemonById(id);
  return {props: {pokeman}};
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {pokeman} = $$props;
  const type = pokeman.types[0].type.name;
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  return `${$$result.head += `${$$result.title = `<title>Pokedex - ${escape(pokeman.name)}</title>`, ""}`, ""}

<div class="${"flex flex-col items-center"}"><h1 class="${"text-4xl text-center my-8 uppercase"}">${escape(pokeman.name)}</h1>
    <p>Type: <strong>${escape(type)}</strong> | Height: <strong>${escape(pokeman.height)}</strong>
        | Weight: <strong>${escape(pokeman.weight)}</strong></p>
    <img class="${"card-image"}"${add_attribute("src", pokeman.sprites["front_default"], 0)}${add_attribute("alt", pokeman.name, 0)}></div>`;
});
var _id_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: U5Bidu5D,
  load
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"text-4xl text-center my-8 uppercase"}">About</h1>
<p>This is a cool demo app that uses Svelte Kit to build a Pokedex web application.</p>`;
});
var about = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: About
});
export {init, render};
