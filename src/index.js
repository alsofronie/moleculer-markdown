/*
 * moleculer-markdown
 * MIT Licensed
 */

'use strict';

const { MoleculerError } = require('moleculer').Errors;
const Showdown = require('showdown');

/**
 * Transforms a markdown text into html
 *
 * @module Service
 */
module.exports = {
  name: 'markdown',

  /**
   * Settings
   * @see https://github.com/showdownjs/showdown#valid-options
   */
  settings: {
    /**
     * Omit the trailing newline in a code block.
     *
     * @type {Boolean}
     * @default false
     */
    omitExtraWLInCodeBlocks: false,

    /**
     * Disable the automatic generation of header ids
     * @type {Boolean}
     * @default false
     */
    noHeaderId: false,

    /**
     * Use text in curly braces as header id
     * @type {Boolean}
     * @default false
     */
    customizedHeaderId: false,

    /**
     * Generate header ids compatible with github style
     * @type {Boolean}
     * @default false
     */
    ghCompatibleHeaderId: false,

    /**
     * Add a prefix to the generated header ids
     * @type {Boolean}
     * @default false
     */
    prefixHeaderId: false,

    /**
     * Setting this option to true will prevent showdown from modifying the prefix
     * @type {Boolean}
     * @default false
     */
    rawPrefixHeaderId: false,

    /**
     * Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-)
     * @type {Boolean}
     * @default false
     */
    rawHeaderId: false,

    /**
     * Enable support for setting image dimensions from within markdown syntax
     * @type {Boolean}
     * @default false
     */
    parseImgDimensions: false,

    /**
     * Set the header starting level
     * @type {Integer}
     * @default false
     */
    headerLevelStart: 1,

    /**
     * Turning this option on will enable automatic linking to urls
     * @type {Boolean}
     * @default false
     */
    simplifiedAutoLink: false,

    /**
     * This option excludes trailing punctuation from autolinking urls
     * @type {Boolean}
     * @default false
     */
    excludeTrailingPunctuationFromURLs: false,

    /**
     * Turning this on will stop showdown from interpreting underscores in the middle of words
     * @type {Boolean}
     * @default false
     */
    literalMidWordUnderscores: false,

    /**
     * Enable support for strikethrough syntax
     * @type {Boolean}
     * @default false
     */
    strikethrough: false,

    /**
     * Enable support for tables syntax
     * @type {Boolean}
     * @default false
     */
    tables: false,

    /**
     * If enabled adds an id property to table headers tags
     * @type {Boolean}
     * @default false
     */
    tablesHeaderId: false,

    /**
     * Enable support for GFM code block style
     * @type {Boolean}
     * @default true
     */
    ghCodeBlocks: true,

    /**
     * Enable support for GFM tasklists
     * @type {Boolean},
     * @default false
     */
    tasklists: false,

    /**
     * Tries to smartly fix indentation problems related to es6 template strings in the midst of indented code
     * @type {Boolean}
     * @default false
     */
    smartIndentationFix: false,

    /**
     * Disables the requirement of indenting sublists by 4 spaces for them to be nested, effectively reverting to the old behavior where 2 or 3 spaces were enough
     * @type {Boolean}
     * @default false
     */
    disableForced4SpacesIndentedSublists: false,

    /**
     *  Parses line breaks as like GitHub does, without needing 2 spaces at the end of the line
     * @type {Boolean}
     * @default false
     */
    simpleLineBreaks: false,

    /**
     * Makes adding a space between # and the header text mandatory
     * @type {Boolean}
     * @default false
     */
    requireSpaceBeforeHeadingText: false,

    /**
     * Enables github @mentions, which link to the username mentioned
     * @type {Boolean}
     * @default false
     */
    ghMentions: false,

    /**
     * Changes the link generated by @mentions. Showdown will replace {u} with the username
     * @type {String}
     * @default https://github.com/{u}
     */
    ghMentionsLink: 'https://github.com/{u}',

    /**
     * Enable e-mail addresses encoding through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities
     * @type {Boolean}
     * @default false
     */
    encodeEmails: true,

    /**
     * Open all links in new windows
     * @type {Boolean}
     * @default false
     */
    openLinksInNewWindow: false,

    /**
     * Support for HTML Tag escaping
     * @type {Boolean}
     * @default false
     */
    backslashEscapesHTMLTags: false,

    /**
     * Enable emoji support
     * @type {Boolean}
     * @default false
     */
    emoji: false,

    /**
     * EXPERIMENTAL: Enable support for underline, no longer rendered to <em> and <strong>
     * @type {Boolean}
     * @default false
     */
    underline: false,

    /**
     * Outputs a complete html document, including <html>, <head> and <body> tags' instead of an HTML fragment
     * @type {Boolean}
     * @default false
     */
    completeHTMLDocument: false,

    /**
     * Enable support for document metadata
     * @type {Boolean}
     * @default false
     */
    metadata: false,

    /**
     * Split adjacent blockquote blocks
     * @type {Boolean}
     * @default false
     */
    splitAdjacentBlockquotes: false,

    /**
     * Set the flavor for markdown. Options are: original, github, vanilla
     * @type {String}
     * @default false
     */
    flavor: 'original'
  },

  /**
   * Actions
   */
  actions: {
    /**
     * Transforms Markdown into HTML
     */
    transform: {
      params: {
        md: { type: 'string' }
      },
      handler(ctx) {
        return this.transform(ctx.params.md);
      }
    }
  },

  /**
   * Methods
   */
  methods: {
    /**
     * Transforms markdown into html
     *
     * @methods
     * @param {String} [md] - The markdown
     * @returns {String}
     */
    transform(md) {
      let settings = Object.assign({}, this.settings);
      const flavor = settings.flavor || 'original';
      delete settings.flavor;
      const converter = new Showdown.Converter(settings);
      converter.setFlavor(flavor);
      return converter.makeHtml(md);
    }
  },

  /**
   * Service created lifecycle event handler
   */
  created() {},

  /**
   * Service started lifecycle event handler
   */
  started() {},

  /**
   * Service stopped lifecycle event handler
   */
  stopped() {}
};
