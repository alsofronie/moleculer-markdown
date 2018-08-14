![Moleculer logo](http://moleculer.services/images/banner.png)

# moleculer-markdown

Service mixin to transform markdown to html,

Uses [Showdown](https://github.com/showdownjs/showdown) as markdown processor.

# Usage

```js
'use strict';

let { ServiceBroker } = require('moleculer');
let MarkdownService = require('./../src/index');

// Create broker
let broker = new ServiceBroker({
  logger: console,
  logLevel: 'debug'
});

// Load markdown Service
broker.createService({
  name: 'markdown',
  mixins: [MarkdownService],
  settings: {}
});

// Start server
broker.start().then(() => {
  // Call action
  broker
    .call('markdown.transform', { md: '# Hello, Markdown' })
    .then(html => console.log('HTML is ', html));
});
```

# Settings

<!-- AUTO-CONTENT-START:SETTINGS -->

| Property                               | Type      | Default      | Description                                                                                                                                                 |
| -------------------------------------- | --------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `omitExtraWLInCodeBlocks`              | `Boolean` | **required** | Omit the trailing newline in a code block.                                                                                                                  |
| `noHeaderId`                           | `Boolean` | **required** | Disable the automatic generation of header ids                                                                                                              |
| `customizedHeaderId`                   | `Boolean` | **required** | Use text in curly braces as header id                                                                                                                       |
| `ghCompatibleHeaderId`                 | `Boolean` | **required** | Generate header ids compatible with github style                                                                                                            |
| `prefixHeaderId`                       | `Boolean` | **required** | Add a prefix to the generated header ids                                                                                                                    |
| `rawPrefixHeaderId`                    | `Boolean` | **required** | Setting this option to true will prevent showdown from modifying the prefix                                                                                 |
| `rawHeaderId`                          | `Boolean` | **required** | Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-)                                                  |
| `parseImgDimensions`                   | `Boolean` | **required** | Enable support for setting image dimensions from within markdown syntax                                                                                     |
| `headerLevelStart`                     | `Integer` | **required** | Set the header starting level                                                                                                                               |
| `simplifiedAutoLink`                   | `Boolean` | **required** | Turning this option on will enable automatic linking to urls                                                                                                |
| `excludeTrailingPunctuationFromURLs`   | `Boolean` | **required** | This option excludes trailing punctuation from autolinking urls                                                                                             |
| `literalMidWordUnderscores`            | `Boolean` | **required** | Turning this on will stop showdown from interpreting underscores in the middle of words                                                                     |
| `strikethrough`                        | `Boolean` | **required** | Enable support for strikethrough syntax                                                                                                                     |
| `tables`                               | `Boolean` | **required** | Enable support for tables syntax                                                                                                                            |
| `tablesHeaderId`                       | `Boolean` | **required** | If enabled adds an id property to table headers tags                                                                                                        |
| `ghCodeBlocks`                         | `Boolean` | **required** | Enable support for GFM code block style                                                                                                                     |
| `tasklists`                            | `Boolean` | **required** | Enable support for GFM tasklists                                                                                                                            |
| `smartIndentationFix`                  | `Boolean` | **required** | Tries to smartly fix indentation problems related to es6 template strings in the midst of indented code                                                     |
| `disableForced4SpacesIndentedSublists` | `Boolean` | **required** | Disables the requirement of indenting sublists by 4 spaces for them to be nested, effectively reverting to the old behavior where 2 or 3 spaces were enough |
| `simpleLineBreaks`                     | `Boolean` | **required** | Parses line breaks as like GitHub does, without needing 2 spaces at the end of the line                                                                     |
| `requireSpaceBeforeHeadingText`        | `Boolean` | **required** | Makes adding a space between # and the header text mandatory                                                                                                |
| `ghMentions`                           | `Boolean` | **required** | Enables github @mentions, which link to the username mentioned                                                                                              |
| `ghMentionsLink`                       | `String`  | **required** | Changes the link generated by @mentions. Showdown will replace {u} with the username                                                                        |
| `encodeEmails`                         | `Boolean` | **required** | Enable e-mail addresses encoding through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities            |
| `openLinksInNewWindow`                 | `Boolean` | **required** | Open all links in new windows                                                                                                                               |
| `backslashEscapesHTMLTags`             | `Boolean` | **required** | Support for HTML Tag escaping                                                                                                                               |
| `emoji`                                | `Boolean` | **required** | Enable emoji support                                                                                                                                        |
| `underline`                            | `Boolean` | **required** | EXPERIMENTAL: Enable support for underline, no longer rendered to <em> and <strong>                                                                         |
| `completeHTMLDocument`                 | `Boolean` | **required** | Outputs a complete html document, including <html>, <head> and <body> tags' instead of an HTML fragment                                                     |
| `metadata`                             | `Boolean` | **required** | Enable support for document metadata                                                                                                                        |
| `splitAdjacentBlockquotes`             | `Boolean` | **required** | Split adjacent blockquote blocks                                                                                                                            |
| `flavor`                               | `String`  | **required** | Set the flavor for markdown. Options are: original, github, vanilla                                                                                         |

<!-- AUTO-CONTENT-END:SETTINGS -->

<!-- AUTO-CONTENT-TEMPLATE:SETTINGS
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
{{#each this}}
| `{{name}}` | {{type}} | {{defaultValue}} | {{description}} |
{{/each}}
{{^this}}
*No settings.*
{{/this}}

-->

# Actions

<!-- AUTO-CONTENT-START:ACTIONS -->
## `transform` 

Transforms Markdown into HTML

### Parameters
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `md` | `String` | **required** | The markdown content |

### Results
**Type:** `String`

- Generated HTML content


<!-- AUTO-CONTENT-END:ACTIONS -->

<!-- AUTO-CONTENT-TEMPLATE:ACTIONS
{{#each this}}
## `{{name}}` {{#each badges}}{{this}} {{/each}}
{{#since}}
_<sup>Since: {{this}}</sup>_
{{/since}}

{{description}}

### Parameters
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
{{#each params}}
| `{{name}}` | {{type}} | {{defaultValue}} | {{description}} |
{{/each}}
{{^params}}
*No input parameters.*
{{/params}}

{{#returns}}
### Results
**Type:** {{type}}

{{description}}
{{/returns}}

{{#hasExamples}}
### Examples
{{#each examples}}
{{this}}
{{/each}}
{{/hasExamples}}

{{/each}}
-->

# Methods

<!-- AUTO-CONTENT-START:METHODS -->

## `transform`

Transforms markdown into html

### Parameters

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `md` | `String` | - | The markdown content |

### Results
**Type:** `String`
- Generated HTML content
**Type:** `String`

<!-- AUTO-CONTENT-END:METHODS -->

<!-- AUTO-CONTENT-TEMPLATE:METHODS
{{#each this}}
## `{{name}}` {{#each badges}}{{this}} {{/each}}
{{#since}}
_<sup>Since: {{this}}</sup>_
{{/since}}

{{description}}

### Parameters
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
{{#each params}}
| `{{name}}` | {{type}} | {{defaultValue}} | {{description}} |
{{/each}}
{{^params}}
*No input parameters.*
{{/params}}

{{#returns}}
### Results
**Type:** {{type}}

{{description}}
{{/returns}}

{{#hasExamples}}
### Examples
{{#each examples}}
{{this}}
{{/each}}
{{/hasExamples}}

{{/each}}
-->
