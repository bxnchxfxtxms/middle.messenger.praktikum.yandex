var $ltMAx$handlebars = require("handlebars");
var $ltMAx$handlebarsdisthandlebarsruntime = require("handlebars/dist/handlebars.runtime");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

const $7987a6614302c5bb$var$templateFunction = (0, ($parcel$interopDefault($ltMAx$handlebarsdisthandlebarsruntime))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<h1 class="error-page__status-code">' + alias4((helper = (helper = lookupProperty(helpers, "errorStatusCode") || (depth0 != null ? lookupProperty(depth0, "errorStatusCode") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "errorStatusCode",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 36
                },
                "end": {
                    "line": 1,
                    "column": 55
                }
            }
        }) : helper)) + '</h1>\n<p class="text__medium">' + alias4((helper = (helper = lookupProperty(helpers, "errorDescription") || (depth0 != null ? lookupProperty(depth0, "errorDescription") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "errorDescription",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 24
                },
                "end": {
                    "line": 2,
                    "column": 44
                }
            }
        }) : helper)) + '</p>\n<a class="redirect-link opacity-animation" href="#">' + alias4((helper = (helper = lookupProperty(helpers, "redirectLinkText") || (depth0 != null ? lookupProperty(depth0, "redirectLinkText") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "redirectLinkText",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 52
                },
                "end": {
                    "line": 3,
                    "column": 72
                }
            }
        }) : helper)) + "</a>\n";
    },
    "useData": true
});
var $7987a6614302c5bb$export$2e2bcd8739ae039 = $7987a6614302c5bb$var$templateFunction;



(0, ($parcel$interopDefault($ltMAx$handlebars))).registerPartial("errorPage", (0, $7987a6614302c5bb$export$2e2bcd8739ae039));



const $95e20403f3026e21$var$templateFunction = (0, ($parcel$interopDefault($ltMAx$handlebarsdisthandlebarsruntime))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<section class='section'>\n" + ((stack1 = container.invokePartial(lookupProperty(partials, "errorPage"), depth0, {
            "name": "errorPage",
            "hash": {
                "redirectLinkText": "Назад к чатам",
                "errorDescription": "Не туда попали",
                "errorStatusCode": "404"
            },
            "data": data,
            "indent": "  ",
            "helpers": helpers,
            "partials": partials,
            "decorators": container.decorators
        })) != null ? stack1 : "") + "</section>";
    },
    "usePartial": true,
    "useData": true
});
var $95e20403f3026e21$export$2e2bcd8739ae039 = $95e20403f3026e21$var$templateFunction;


// import template from './index.hbs'
// import notFoundErrorPage from './pages/notFoundErrorPage/notFoundErrorPage.hbs'
// import './modules/error/error'
// import './pages/notFoundErrorPage/notFoundErrorPage'
// import { notFoundErrorPage } from './pages/notFoundErrorPage/notFoundErrorPage'
const $4fa36e821943b400$var$root = document.querySelector("#root");
$4fa36e821943b400$var$root.innerHTML = (0, $95e20403f3026e21$export$2e2bcd8739ae039)({});


//# sourceMappingURL=index.js.map
