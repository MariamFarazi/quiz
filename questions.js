const allQuestions = {

    html: [
        { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<lb>", "<br>", "<newline>"], answer: 2 },
        { question: "Which HTML element is used to display preformatted text?", options: ["<pre>", "<code>", "<format>", "<text>"], answer: 0 },
        { question: "What is the correct HTML element for defining emphasized text?", options: ["<em>", "<i>", "<strong>", "<highlight>"], answer: 0 },
        { question: "Which tag defines the largest heading in HTML?", options: ["<head>", "<h1>", "<header>", "<heading>"], answer: 1 },
        { question: "What is the correct HTML element for inserting an image?", options: ["<img>", "<image>", "<picture>", "<src>"], answer: 0 },
        { question: "Which attribute specifies the URL of an external style sheet?", options: ["src", "link", "style", "href"], answer: 3 },
        { question: "Which HTML element is used to define a paragraph?", options: ["<par>", "<p>", "<para>", "<pg>"], answer: 1 },
        { question: "What is the correct HTML element for creating a numbered list?", options: ["<ul>", "<li>", "<ol>", "<dl>"], answer: 2 },
        { question: "Which attribute is used to provide alternative text for an image?", options: ["title", "desc", "alt", "text"], answer: 2 },
        { question: "What is the correct HTML element for playing video content?", options: ["<video>", "<media>", "<movie>", "<clip>"], answer: 0 },
        { question: "Which HTML tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], answer: 0 },
        { question: "What does the `<title>` element define?", options: ["Section heading", "Document title", "Footer text", "Metadata"], answer: 1 },
        { question: "Which HTML element is used to define navigation links?", options: ["<navigation>", "<menu>", "<nav>", "<links>"], answer: 2 },
        { question: "What is the correct way to include JavaScript in HTML?", options: ["<js src='app.js'/>", "<javascript src='app.js'></javascript>", "<code src='app.js'></code>", "<script src='app.js'></script>",], answer: 3 },
        { question: "Which HTML element is used for page footer?", options: ["<bottom>", "<section>", "<footer>", "<aside>"], answer: 2 },
        { question: "What attribute is used to specify inline styles?", options: ["style", "class", "id", "css"], answer: 0 },
        { question: "What is the correct HTML element for inserting a horizontal rule?", options: ["<rule>", "<hr>", "<breakline>", "<line>"], answer: 1 },
        { question: "Which HTML element is used to define a table row?", options: ["<td>", "<table>", "<th>", "<tr>"], answer: 3 },
        { question: "Which tag defines a table header cell?", options: ["<td>", "<tr>", "<th>", "<thead>"], answer: 2 },
        { question: "Which element represents a caption for a `<figure>` element?", options: ["<caption>", "<figcaption>", "<label>", "<legend>"], answer: 1 },
        { question: "Which tag is used to create a checkbox in a form?", options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<box>"], answer: 0 },
        { question: "What does the <head> element contain?", options: ["Visible page content", "Metadata about the document", "Navigation bar", "Page footer"], answer: 1 },
        { question: "Which HTML attribute specifies an inline JavaScript event?", options: ["onhover", "action", "onclick", "event"], answer: 2 },
        { question: "Which tag is used to group HTML form elements?", options: ["<group>", "<formgroup>", "<section>", "<fieldset>"], answer: 3 },
        { question: "Which element defines a dropdown list?", options: ["<select>", "<dropdown>", "<optionlist>", "<input type='dropdown'>"], answer: 0 },
        { question: "Which tag is used to define an unordered list?", options: ["<ol>", "<li>", "<list>", "<ul>"], answer: 3 },
        { question: "What does the <meta> tag define?", options: ["Document's footer", "Main content", "Metadata/information about the HTML document", "Page heading"], answer: 2 },
        { question: "Which tag is used to create a text input field in a form?", options: ["<textbox>", "<input type='text'>", "<field>", "<inputtext>"], answer: 1 },
        { question: "Which attribute is used to uniquely identify an HTML element?", options: ["id", "class", "name", "key"], answer: 0 },
        { question: "Which tag defines a block of code in HTML?", options: ["<script>", "<code>", "<pre>", "<kbd>"], answer: 1 },
        { question: "Which element represents the main content of a document?", options: ["<body>", "<content>", "<main>", "<section>"], answer: 2 },
        { question: "Which tag is used to embed another HTML page within a page?", options: ["<frame>", "<embed>", "<object>", "<iframe>"], answer: 3 },
        { question: "Which tag is used to define a label for an input element?", options: ["<label>", "<text>", "<span>", "<id>"], answer: 0 },
        { question: "Which tag is used to define a list item?", options: ["<ul>", "<ol>", "<item>", "<li>"], answer: 3 },
        { question: "Which HTML attribute is used to define the path of an image?", options: ["href", "link", "src", "path"], answer: 2 },
        { question: "Which tag defines a container for navigation links?", options: ["<menu>", "<nav>", "<ul>", "<links>"], answer: 1 },
        { question: "What does the <strong> tag do?", options: ["Defines important text", "Makes text italic", "Creates a heading", "Defines a link"], answer: 0 },
        { question: "Which tag is used to add a comment in HTML?", options: ["<!-- comment -->", "// comment", "<comment>", "# comment"], answer: 0 },
        { question: "Which HTML tag defines a table?", options: ["<td>", "<table>", "<tr>", "<formtable>"], answer: 1 },
        { question: "What is the correct way to define a radio button in HTML?", options: ["<input type='radio'>", "<radio>", "<input radio>", "<input type='radiobox'>"], answer: 0 },
        { question: "Which HTML tag is used to define bold text?", options: ["<bold>", "<b>", "<strong>", "<text-bold>"], answer: 1 },
        { question: "What does the <a> tag do in HTML?", options: ["Defines a list", "Adds an image", "Creates a hyperlink", "Creates a table"], answer: 2 },
        { question: "Which tag is used for inserting a background image?", options: ["<img background>", "<bg>", "<body background='...'>", "<background>"], answer: 2 },
        { question: "Which input type allows users to select a file?", options: ["upload", "select", "chooser", "file"], answer: 3 },
        { question: "Which tag defines italic text in HTML?", options: ["<em>", "<italic>", "<slant>", "<i>"], answer: 3 },
        { question: "Which HTML5 element is used to group related content?", options: ["<section>", "<div>", "<span>", "<group>"], answer: 0 },
        { question: "Which tag is used to define a line through the middle of text?", options: ["<s>", "<strike>", "<del>", "<cut>"], answer: 0 },
        { question: "Which tag defines a short quotation?", options: ["<quote>", "<blockquote>", "<q>", "<short>"], answer: 2 },
        { question: "Which tag defines an input field for a password?", options: ["<input type='secret'>", "<password>", "<input type='password'>", "<pwd>"], answer: 2 },
        { question: "Which tag is used to define a definition list?", options: ["<dd>", "<dl>", "<dt>", "<listdef>"], answer: 1 },
        { question: "Which tag is used to define a cell in a table?", options: ["<tr>", "<td>", "<th>", "<cell>"], answer: 1 },
        { question: "Which tag is used to define the head section of the HTML document?", options: ["<title>", "<meta>", "<htmlhead>", "<head>"], answer: 3 },
        { question: "Which HTML tag is used to create a line separator?", options: ["<line>", "<separator>", "<br>", "<hr>"], answer: 3 },
        { question: "Which tag is used to define a caption for a table?", options: ["<caption>", "<title>", "<heading>", "<cap>"], answer: 0 },
        { question: "Which tag defines emphasized text in HTML?", options: ["<i>", "<em>", "<strong>", "<italic>"], answer: 1 },
        { question: "Which input type defines a slider control?", options: ["slider", "scroll", "range", "input-range"], answer: 2 },
        { question: "Which tag defines the document's body?", options: ["<main>", "<content>", "<html>", "<body>"], answer: 3 },
        { question: "Which HTML attribute is used to set the tooltip text?", options: ["title", "tooltip", "alt", "info"], answer: 0 },
        { question: "Which tag is used to define a footer for a document or section?", options: ["<bottom>", "<footer>", "<end>", "<section-footer>"], answer: 1 },
        { question: "What does the <base> tag do in HTML?", options: ["Defines a base font", "Sets a base URL for all relative links", "Starts the HTML document", "Links a stylesheet"], answer: 1 },
        { question: "Which HTML tag is used to play audio files?", options: ["<sound>", "<music>", "<audio>", "<play>"], answer: 2 },
        { question: "What is the correct tag to embed a YouTube video?", options: ["<video>", "<embed>", "<iframe>", "<media>"], answer: 2 },
        { question: "Which tag is used to create a drop-down list option?", options: ["<select>", "<dropdown>", "<item>", "<option>"], answer: 3 },
        { question: "Which HTML attribute is used to disable an input field?", options: ["readonly", "noedit", "inactive", "disabled"], answer: 3 },
        { question: "What is the purpose of the <legend> tag?", options: ["Caption for a <fieldset>", "Title of a section", "Tooltip for text", "Label for input"], answer: 0 },
        { question: "Which tag is used to define superscript text?", options: ["<sup>", "<sub>", "<up>", "<super>"], answer: 0 },
        { question: "Which tag is used to define subscript text?", options: ["<sup>", "<down>", "<sub>", "<mini>"], answer: 2 },
        { question: "Which tag defines a clickable button?", options: ["<input type='button'>", "<button>", "<submit>", "<click>"], answer: 2 },
        { question: "What is the purpose of the <noscript> tag?", options: ["Comments JavaScript code", "Provides fallback content when JavaScript is disabled", "Runs if script is present", "Disables script"], answer: 1 },
        { question: "Which tag is used to display contact information?", options: ["<contact>", "<address>", "<info>", "<footer>"], answer: 1 },
        { question: "What does the <mark> tag do?", options: ["Bold text", "Underline text", "Marks for deletion", "Highlights text"], answer: 3 },
        { question: "Which tag is used to define a progress bar?", options: ["<bar>", "<status>", "<meter>", "<progress>"], answer: 3 },
        { question: "What does the <abbr> tag represent?", options: ["Abbreviation", "Anchor", "Abstract", "About"], answer: 0 },
        { question: "Which tag is used to define metadata?", options: ["<meta>", "<info>", "<head>", "<data>"], answer: 0 },
        { question: "Which HTML attribute defines inline CSS styles?", options: ["css", "style", "class", "id"], answer: 1 },
        { question: "What is the use of the <time> tag?", options: ["Represents a specific time/date", "Shows system time", "Adds timestamp", "Inserts clock"], answer: 0 },
        { question: "Which tag defines a scalar measurement within a known range?", options: ["<meter>", "<range>", "<scale>", "<value>"], answer: 0 },
        { question: "Which tag is used to define an image map?", options: ["<imagemap>", "<area>", "<map>", "<imgmap>"], answer: 2 },
        { question: "Which tag is used to define a container for external application?", options: ["<embed>", "<iframe>", "<external>", "<object>"], answer: 3 },
        { question: "Which tag is used to specify multiple options for an input?", options: ["<datalist>", "<select>", "<list>", "<options>"], answer: 0 },
        { question: "What does the <canvas> element do?", options: ["Draw graphics via JavaScript", "Display images", "Add background color", "Load animations"], answer: 0 },
        { question: "Which tag is used to insert scripts in HTML?", options: ["<javascript>", "<js>", "<script>", "<code>"], answer: 2 },
        { question: "Which tag is used to define document navigation?", options: ["<menu>", "<ul>", "<nav>", "<links>"], answer: 2 },
        { question: "Which tag defines a header for a document or section?", options: ["<header>", "<head>", "<top>", "<section-head>"], answer: 0 },
        { question: "What is the use of <template> tag?", options: ["Holds client-side content that is not rendered immediately", "Defines layout", "Styles HTML", "Creates forms"], answer: 0 },
        { question: "Which tag is used to group inline-elements together?", options: ["<div>", "<span>", "<group>", "<inline>"], answer: 1 },
        { question: "What is the purpose of the <details> tag?", options: ["Creates a collapsible content area", "Adds description", "Creates a form section", "Marks detail text"], answer: 0 },
        { question: "Which tag is used to define a summary for <details>?", options: ["<title>", "<caption>", "<summary>", "<label>"], answer: 2 },
        { question: "Which tag is used to define a keyboard input?", options: ["<kbd>", "<key>", "<code>", "<input>"], answer: 0 },
        { question: "What does the <bdo> tag do?", options: ["Bold output", "Break data", "Defines object", "Overrides text direction"], answer: 3 }
    ],

    css: [
        { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: 1 },
        { question: "Which property is used to change the background color?", options: ["background-color", "color", "bgcolor", "background"], answer: 0 },
        { question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: 2 },
        { question: "How do you make each word in a text start with a capital letter?", options: ["text-transform:capitalize", "text-style:capitalize", "transform:capitalize", "You can't do that with CSS"], answer: 0 },
        { question: "Which property is used to change the font of an element?", options: ["font-family", "font-style", "font-weight", "font-size"], answer: 0 },
        { question: "How do you select an element with id 'demo'?", options: ["#demo", ".demo", "*demo", "demo"], answer: 0 },
        { question: "How do you select elements with class name 'test'?", options: [".test", "#test", "*test", "test"], answer: 0 },
        { question: "Which property is used to change the text color?", options: ["color", "text-color", "font-color", "fgcolor"], answer: 0 },
        { question: "How do you add a comment in CSS?", options: ["/* Comment */", "// Comment", "' Comment", "<!-- Comment -->"], answer: 0 },
        { question: "Which property is used to change the spacing between letters?", options: ["letter-spacing", "word-spacing", "text-spacing", "spacing"], answer: 0 },
        { question: "How do you make a list not display bullets?", options: ["list-style-type:none", "list-type:none", "bullet:none", "list:none"], answer: 0 },
        { question: "How do you make a text bold?", options: ["font-weight:bold", "text-weight:bold", "font:bold", "text:bold"], answer: 0 },
        { question: "Which property is used to change the spacing between words?", options: ["word-spacing", "letter-spacing", "text-spacing", "spacing"], answer: 0 },
        { question: "Which CSS property controls the layout of elements?", options: ["display", "position", "float", "all of the above"], answer: 3 },
        { question: "What is the default value of the position property?", options: ["static", "relative", "absolute", "fixed"], answer: 0 },//
        { question: "Which CSS property makes the text italic?", options: ["font-style", "font-weight", "text-align", "font-variant"], answer: 0 },
        { question: "What value of 'position' makes an element stay fixed on screen during scroll?", options: ["absolute", "relative", "fixed", "sticky"], answer: 2 },
        { question: "Which property controls the transparency of an element?", options: ["visibility", "opacity", "z-index", "display"], answer: 1 },
        { question: "Which CSS unit is relative to the font-size of the element?", options: ["vh", "em", "px", "%"], answer: 1 },
        { question: "What does the z-index property control?", options: ["Text size", "Zoom level", "Layer order", "Box size"], answer: 2 },
        { question: "Which property is used to control line spacing?", options: ["text-spacing", "line-spacing", "line-height", "height"], answer: 2 },
        { question: "What is the use of the 'display: none' property?", options: ["Move it off screen", "Hide the element completely", "Fade the element", "Disable interaction"], answer: 1 },
        { question: "Which keyword is used to inherit a property value from its parent?", options: ["default", "inherit", "copy", "parent"], answer: 1 },
        { question: "Which value of 'overflow' adds scrollbars if needed?", options: ["scroll", "hidden", "auto", "visible"], answer: 2 },
        { question: "How can you apply styles to all <p> elements inside a <div>?", options: ["div+p", "p div", "div.p", "div p"], answer: 3 },
        { question: "What does the 'calc()' function do in CSS?", options: ["Adds padding", "Calculates length values", "Creates animations", "Generates gradients"], answer: 1 },
        { question: "Which property is used to round the corners of a box?", options: ["box-radius", "border-radius", "round", "corner"], answer: 1 },
        { question: "Which CSS selector selects every element?", options: ["#", "*", "global", "all"], answer: 1 },
        { question: "Which value of 'position' allows an element to scroll with the page until a point?", options: ["float", "absolute", "sticky", "fixed"], answer: 2 },
        { question: "Which property is used to animate CSS properties?", options: ["animation", "transform", "transition", "effect"], answer: 2 },
        { question: "Which property is used to add shadow to text?", options: ["text-decoration", "text-shadow", "font-shadow", "shadow-text"], answer: 1 },
        { question: "Which CSS pseudo-class selects the first child of an element?", options: [":first", ":first-child", ":child-first", ":firstElement"], answer: 1 },
        { question: "What does the 'visibility' property do when set to 'hidden'?", options: ["Removes the element", "Hides it but keeps space", "Disables it", "Adds transparency"], answer: 1 },
        { question: "Which property specifies the stack order of elements?", options: ["order", "layer", "z-index", "position-order"], answer: 2 },
        { question: "Which property is used to make a flexible layout?", options: ["flex", "float", "display: flex", "inline-flex"], answer: 2 },
        { question: "Which value of 'display' creates a block-level flex container?", options: ["block", "flex", "inline", "inline-block"], answer: 1 },
        { question: "What does 'min-width' specify?", options: ["Maximum width", "Minimum width", "Exact width", "Fixed width"], answer: 1 },
        { question: "What does the 'box-sizing' property control?", options: ["Box shape", "Content alignment", "How total width is calculated", "Shadow behavior"], answer: 2 },
        { question: "Which shorthand property sets margin for all sides?", options: ["spacing", "margin-all", "margin", "set-margin"], answer: 2 },
        { question: "What unit is used for viewport height?", options: ["vh", "vw", "vp", "vm"], answer: 0 },
        { question: "Which CSS property is used to change the cursor style?", options: ["cursor", "pointer", "hover", "mouse-style"], answer: 0 },
        { question: "Which property sets how an element is floated?", options: ["align", "float", "display", "position"], answer: 1 },
        { question: "Which property allows elements to wrap inside a flex container?", options: ["flex-wrap", "wrap", "flex-flow", "wrap-items"], answer: 0 },
        { question: "How do you apply a gradient background in CSS?", options: ["background: gradient(...)", "background: linear-gradient(...)", "background: smooth(...)", "gradient: background(...)"], answer: 1 },
        { question: "Which selector selects all <a> elements with 'target=_blank'?", options: ["a[target]", "a[target=_blank]", "a:blank", "a::target"], answer: 1 },
        { question: "Which CSS function is used to rotate an element?", options: ["rotate()", "transform: rotate()", "animation-rotate()", "rotate-transform()"], answer: 1 },
        { question: "Which property aligns text horizontally?", options: ["text-align", "align", "horizontal-align", "justify"], answer: 0 },
        { question: "How do you make an element responsive to different screen sizes?", options: ["Use pixels", "Use media queries", "Use tables", "Set overflow:auto"], answer: 1 },
        { question: "What does 'rem' stand for in CSS units?", options: ["Relative to element", "Root em", "Responsive em", "Right em"], answer: 1 },
        { question: "Which property adds space between content and border?", options: ["margin", "padding", "spacing", "border-gap"], answer: 1 },
        { question: "Which CSS property is used to control the horizontal alignment of block elements?", options: ["text-align", "align-items", "justify-content", "margin-auto"], answer: 0 },
        { question: "Which property can be used to make a background image cover the entire element?", options: ["background-cover", "background-repeat", "background-size: cover", "object-fit"], answer: 2 },
        { question: "What does the 'clear' property do in CSS?", options: ["Removes float", "Clears margin", "Clears content", "Clears background"], answer: 0 },
        { question: "Which pseudo-class selects elements when hovered by the mouse?", options: [":hover", ":active", ":focus", ":visited"], answer: 0 },
        { question: "Which CSS property creates space outside the border?", options: ["padding", "border-spacing", "margin", "outline"], answer: 2 },
        { question: "Which media feature targets screen width in a media query?", options: ["device-width", "screen-size", "width", "min-width"], answer: 3 },
        { question: "Which CSS property sets the style of the list marker?", options: ["list-style-type", "bullet-style", "marker", "list-symbol"], answer: 0 },
        { question: "Which CSS property is used to make rounded buttons?", options: ["button-radius", "corner-radius", "border-radius", "round-button"], answer: 2 },
        { question: "What does the 'transition' property do in CSS?", options: ["Changes background", "Animates property change", "Creates delay", "Moves elements"], answer: 1 },
        { question: "How do you apply styles only when a user prints the page?", options: ["@print", "@media print", "@screen print", "@display print"], answer: 1 },
        { question: "Which keyword prevents a flex item from shrinking?", options: ["flex-wrap", "no-shrink", "flex-shrink: 0", "flex: none"], answer: 2 },
        { question: "Which CSS value allows elements to stack on top of each other?", options: ["float", "stack", "z-index", "layer"], answer: 2 },
        { question: "Which property defines the maximum width of an element?", options: ["max-width", "width-limit", "maximum", "max-size"], answer: 0 },
        { question: "Which property changes the style of the cursor?", options: ["cursor", "pointer", "hover-style", "mouse"], answer: 0 },
        { question: "Which CSS property transforms text to uppercase?", options: ["text-transform", "text-case", "font-style", "text-style"], answer: 0 },
        { question: "Which CSS keyword allows an animation to loop forever?", options: ["infinite", "loop", "forever", "repeat"], answer: 0 },
        { question: "What is the default position value of most elements in CSS?", options: ["relative", "absolute", "static", "inherit"], answer: 2 },
        { question: "Which CSS property allows for rotating, scaling, and moving elements?", options: ["transition", "animation", "transform", "translate"], answer: 2 },
        { question: "How do you apply a Google Font in CSS?", options: ["font-style", "font-url", "@import URL", "font-family"], answer: 3 },
        { question: "Which CSS property changes the space between lines of text?", options: ["line-spacing", "line-height", "text-height", "spacing"], answer: 1 },
        { question: "Which property is used to control how an element is positioned in a flex container?", options: ["align-items", "flex-direction", "justify-content", "align-self"], answer: 3 },
        { question: "Which CSS property is used to hide overflowed content?", options: ["hidden-content", "clip", "overflow", "content-hide"], answer: 2 },
        { question: "Which shorthand CSS property sets margin on all four sides?", options: ["margin-all", "padding", "margin", "space"], answer: 2 },
        { question: "Which value of 'display' makes an element disappear from layout flow?", options: ["hidden", "none", "invisible", "remove"], answer: 1 },
        { question: "Which property is used to add shadow to text?", options: ["text-shadow", "font-shadow", "shadow-text", "text-outline"], answer: 0 },
        { question: "Which CSS value is used to make text underlined?", options: ["font-decoration", "text-style", "text-decoration: underline", "underline"], answer: 2 },
        { question: "Which unit is relative to the viewport height?", options: ["vh", "vw", "em", "%"], answer: 0 },
        { question: "What does 'box-sizing: border-box' do?", options: ["Ignores padding and border", "Includes padding and border in total width/height", "Adds extra margin", "Keeps box fixed"], answer: 1 },
        { question: "Which CSS function allows you to apply multiple styles conditionally?", options: ["if()", "calc()", "var()", "clamp()"], answer: 3 },
        { question: "Which CSS property controls how a background image is repeated?", options: ["background-repeat", "background-style", "repeat-image", "image-repeat"], answer: 0 },
        { question: "Which selector targets a direct child only?", options: ["div > p", "div + p", "div p", "#div p"], answer: 0 },
        { question: "What does '!important' do in CSS?", options: ["Makes rule faster", "Overrides all other rules", "Stops rendering", "Makes rule global"], answer: 1 },
        { question: "What is the default display value of a <span>?", options: ["block", "inline", "inline-block", "none"], answer: 1 },
        { question: "Which property is used to create a grid layout?", options: ["grid-layout", "display: grid", "layout: grid", "grid-template"], answer: 1 },
        { question: "Which property aligns flex items vertically in a container?", options: ["align-content", "justify-content", "align-items", "position"], answer: 2 },
        { question: "What is the purpose of the 'visibility' property?", options: ["Shows or hides element (but keeps space)", "Deletes element", "Changes z-index", "Adds transition"], answer: 0 },
        { question: "Which property specifies how an element is floated?", options: ["clear", "float", "align", "position"], answer: 1 },
        { question: "How do you make a div center horizontally using margin?", options: ["margin: auto;", "margin: 0;", "margin: center;", "margin: left-right;"], answer: 0 },
        { question: "Which property sets the thickness of a border?", options: ["border-thickness", "border-size", "border-width", "border-line"], answer: 2 },
        { question: "Which keyword is used for reusable design blocks in CSS?", options: ["class", "id", "selector", "component"], answer: 0 },
        { question: "How can you apply multiple background images in CSS?", options: ["Separate with commas", "Use multiple url()", "Use layers", "It's not possible"], answer: 0 },
        { question: "Which property defines how the background image is positioned?", options: ["background-position", "position-image", "image-align", "background-align"], answer: 0 },
        { question: "What value of 'overflow' hides content without scroll?", options: ["hidden", "none", "clip", "scroll"], answer: 0 },
        { question: "Which pseudo-element is used to style the first line of a paragraph?", options: [":first-line", ":start", "::begin", ":intro"], answer: 0 },
        { question: "What unit is relative to the width of the viewport?", options: ["vw", "vh", "%", "em"], answer: 0 },
        { question: "Which property controls how content fits in a grid cell?", options: ["justify-items", "align-content", "fit-content", "place-items"], answer: 0 },
        { question: "How do you apply a linear gradient in CSS?", options: ["gradient(linear)", "background: linear-gradient()", "fill: gradient()", "color-gradient"], answer: 1 },
        { question: "Which value of 'position' uses the nearest positioned ancestor?", options: ["absolute", "relative", "fixed", "static"], answer: 0 },
        { question: "What CSS property is used to scale elements?", options: ["transform: scale()", "resize", "zoom", "enlarge"], answer: 0 },
        { question: "Which property adds space between the content and border?", options: ["padding", "margin", "border-width", "outline"], answer: 0 }
    ],

    sass: [
        {
            question: "What symbol is used for variables in SASS?",
            options: ["@", "#", "$", "&"],
            answer: 2
        },
        {
            question: "Which extension is used in SASS?",
            options: [".scss", ".css", ".style", ".sass"],
            answer: 3
        },
        {
            question: "Which directive is used to import other SASS files?",
            options: ["@include", "@mixin", "@import", "@extend"],
            answer: 2
        },
        {
            question: "What is a mixin in SASS?",
            options: ["Functions", "Loops", "Reusable blocks of code", "Variables"],
            answer: 2
        },
        {
            question: "How do you declare a variable in SASS?",
            options: ["$variable: value;", "@variable: value;", "var variable = value;", "#variable: value;"],
            answer: 0
        },
        {
            question: "Which of the following is NOT a feature of SASS?",
            options: ["Nesting", "JavaScript integration", "Loops", "Variables"],
            answer: 1
        },
        {
            question: "How do you include a mixin?",
            options: ["@extend mixin-name;", "@mixin mixin-name;", "@include mixin-name;", "@import mixin-name;"],
            answer: 2
        },
        {
            question: "Which operator is used for arithmetic operations in SASS?",
            options: ["/", "*", "+", "-"],
            answer: 2
        },
        {
            question: "How do you nest selectors in SASS?",
            options: ["Using parentheses", "Using indentation", "You can't nest selectors", "Using curly braces"],
            answer: 1
        },
        {
            question: "Which function is used to lighten colors in SASS?",
            options: ["adjust()", "lighten()", "darken()", "mix()"],
            answer: 1
        },
        {
            question: "How do you comment in SASS?",
            options: ["/* This is a comment */", "// This is a comment", "<!-- This is a comment -->", "# This is a comment"],
            answer: 1
        },
        {
            question: "What does '@extend' do in SASS?",
            options: ["Imports files", "Inherits styles from another selector", "Includes mixins", "Defines variables"],
            answer: 1
        },
        {
            question: "Which of the following is NOT a data type in SASS?",
            options: ["String", "Boolean", "Array", "Number"],
            answer: 2
        },
        {
            question: "How do you write a loop in SASS?",
            options: ["@for", "@while", "@each", "All of the above"],
            answer: 3
        },
        {
            question: "Which symbol is used to access parent selector in nesting?",
            options: ["$", "&", "#", "@"],
            answer: 1
        },
        {
            question: "Which SASS feature allows one selector to inherit the styles of another?",
            options: ["@extend", "@mixin", "@include", "@use"],
            answer: 0
        },
        {
            question: "Which SASS function returns the number of items in a list?",
            options: ["length()", "count()", "size()", "items()"],
            answer: 0
        },
        {
            question: "What is the default file extension for SCSS syntax?",
            options: [".sass", ".css", ".style", ".scss"],
            answer: 3
        },
        {
            question: "What is the main advantage of using mixins in SASS?",
            options: ["Reusability", "Animation", "Debugging", "Importing files"],
            answer: 0
        },
        {
            question: "How can you define a default value for a SASS variable?",
            options: ["$color = blue;", "$color: blue;", "$color: blue !default;", "default $color: blue;"],
            answer: 2
        },
        {
            question: "Which directive in SASS is used to share variables, mixins, or functions across files?",
            options: ["@use", "@include", "@share", "@extend"],
            answer: 0
        },
        {
            question: "What does the `&` symbol refer to in SASS nesting?",
            options: ["Child element", "Parent selector", "Global scope", "Variable"],
            answer: 1
        },
        {
            question: "Which directive is used to create reusable functions in SASS?",
            options: ["@function", "@mixin", "@use", "@include"],
            answer: 0
        },
        {
            question: "How do you call a function in SASS?",
            options: ["call myFunction()", "use myFunction()", "myFunction()", "@myFunction()"],
            answer: 2
        },
        {
            question: "Which SASS data type can hold a collection of values?",
            options: ["List", "Boolean", "String", "Number"],
            answer: 0
        },
        {
            question: "Which loop runs through each item in a list in SASS?",
            options: ["@for", "@each", "@while", "@loop"],
            answer: 1
        },
        {
            question: "How can you check if a variable exists in SASS?",
            options: ["check()", "exists()", "variable-exists()", "has-variable()"],
            answer: 2
        },
        {
            question: "Which of the following is a color manipulation function in SASS?",
            options: ["fade()", "blur()", "scale()", "darken()"],
            answer: 3
        },
        {
            question: "How do you import multiple SASS files at once?",
            options: ["@use 'file1', 'file2';", "@include multiple();", "@import 'file1', 'file2';", "@extend 'file1', 'file2';"],
            answer: 2
        },
        {
            question: "What keyword is used inside a mixin to accept arguments?",
            options: ["()", "$args", "$", "parameters"],
            answer: 1
        },
        {
            question: "Which SASS loop runs while a condition is true?",
            options: ["@for", "@while", "@each", "@loop"],
            answer: 1
        },
        {
            question: "Which function gets a value from a map in SASS?",
            options: ["get-map()", "get()", "map-get()", "map-value()"],
            answer: 2
        },
        {
            question: "Which directive defines a function in SASS?",
            options: ["@def", "@return", "@function", "@define"],
            answer: 2
        },
        {
            question: "What is the output of `#{}` in SASS?",
            options: ["Variable", "Loop", "Function call", "String interpolation"],
            answer: 3
        },
        {
            question: "What does `@debug` do in SASS?",
            options: ["Adds a breakpoint", "Logs to console", "Stops compilation", "Prints a value during compilation"],
            answer: 3
        },
        {
            question: "Which SASS function returns the first value of a list?",
            options: ["nth($list, 1)", "first($list)", "get($list, 0)", "start($list)"],
            answer: 0
        },
        {
            question: "Which directive allows you to share styles between selectors in SASS?",
            options: ["@extend", "@mixin", "@share", "@inherit"],
            answer: 0
        },
        {
            question: "What symbol is used to interpolate variables into strings in SASS?",
            options: ["{{}}", "#{}", "{}", "$()"],
            answer: 1
        },
        {
            question: "How can you create a SASS map?",
            options: ["(key: value, key2: value2)", "[key: value]", "{key=value}", "<key, value>"],
            answer: 0
        },
        {
            question: "What does the `@return` keyword do in a SASS function?",
            options: ["Exits a mixin", "Returns a value", "Calls another function", "Imports code"],
            answer: 1
        },
        {
            question: "Which built-in function checks if a value is a number?",
            options: ["type-of()", "is-number()", "unit()", "number-check()"],
            answer: 1
        },
        {
            question: "What does `map-keys()` return in SASS?",
            options: ["A list of all keys in a map", "A single key", "All values", "Boolean value"],
            answer: 0
        },
        {
            question: "How do you remove styles from a selector using SASS?",
            options: ["You cannot", "@remove", "@reset", "@extend %null"],
            answer: 3
        },
        {
            question: "Which directive loads a SASS file only once?",
            options: ["@use", "@import", "@once", "@load"],
            answer: 0
        },
        {
            question: "Which built-in function returns the data type of a SASS value?",
            options: ["typeof()", "get-type()", "data-type()", "type-of()"],
            answer: 3
        },
        {
            question: "What is `%placeholder` in SASS used for?",
            options: ["To store reusable styles", "To create animations", "To define mixins", "To declare variables"],
            answer: 0
        },
        {
            question: "What does the `@each` directive do in SASS?",
            options: ["Extends styles", "Creates mixins", "Loops over a list or map", "Comments code"],
            answer: 2
        },
        {
            question: "Which of the following is a valid mixin call?",
            options: ["@mixin box();", "@include box();", "@extend box();", "@use box();"],
            answer: 1
        },
        {
            question: "How do you access a value from a SASS map?",
            options: ["map-get($map, key)", "get-map($map, key)", "$map[key]", "access($map.key)"],
            answer: 0
        },
        {
            question: "Which of these is NOT a loop in SASS?",
            options: ["@each", "@for", "@repeat", "@while"],
            answer: 2
        },
        {
            question: "How do you write a multi-line comment in SASS?",
            options: ["/* comment */", "// comment", "<!-- comment -->", "# comment"],
            answer: 0
        },
        {
            question: "Which operator is used for string concatenation in SASS?",
            options: ["+", "#{...}", "&", "&&"],
            answer: 1
        },
        {
            question: "What is the purpose of `@mixin` in SASS?",
            options: ["Define reusable code blocks", "Import other files", "Create variables", "Loop through values"],
            answer: 0
        },
        {
            question: "How do you assign a default value to a variable only if it's undefined?",
            options: ["!optional", "@default", "!default", "?default"],
            answer: 2
        },
        {
            question: "Which SASS syntax uses indentation and no curly braces?",
            options: [".scss", ".css", ".sass", ".sassx"],
            answer: 2
        },
        {
            question: "What happens if you use `@use` more than once for the same file?",
            options: ["It is only loaded once", "It throws an error", "It duplicates styles", "It overwrites all variables"],
            answer: 0
        },
        {
            question: "What will `unit(20px)` return?",
            options: ["20", "px", "px20", "unitless"],
            answer: 1
        },
        {
            question: "How do you define a function in SASS that returns a color?",
            options: ["@function getColor() {}", "@function getColor { }", "@define getColor()", "@return-color"],
            answer: 0
        },
        {
            question: "What does `@error` do in SASS?",
            options: ["Logs to console", "Throws a compilation error", "Stops animation", "Returns null"],
            answer: 1
        },
        {
            question: "Which keyword loads all members of a namespace directly?",
            options: ["@forward *", "@use *", "@include all", "@import all"],
            answer: 0
        },
        {
            question: "What is the result of `length((10px, 20px, 30px))` in SASS?",
            options: ["2", "3", "1", "0"],
            answer: 1
        },
        {
            question: "Which built-in SASS function merges two maps?",
            options: ["merge-map()", "map-merge()", "map-union()", "combine()"],
            answer: 1
        },
        {
            question: "How do you access the last item in a SASS list?",
            options: ["nth($list, -1)", "last($list)", "get($list, end)", "last-index($list)"],
            answer: 0
        },
        {
            question: "Which symbol is used to define a placeholder selector?",
            options: ["%", "$", "#", "&"],
            answer: 0
        },
        {
            question: "What does the `@debug` directive do?",
            options: ["Stops the compiler", "Logs into browser", "Prints values during compilation", "Pauses execution"],
            answer: 2
        },
        {
            question: "What happens if you divide two numbers with units in SASS?",
            options: ["Result keeps unit", "Result loses unit", "Error", "Always returns px"],
            answer: 0
        },
        {
            question: "Which function returns the value of a specific index in a list?",
            options: ["get()", "value()", "nth()", "list-index()"],
            answer: 2
        },
        {
            question: "What does the `@at-root` directive do?",
            options: ["Removes nesting", "Goes to top of the tree", "Creates root selector", "None of the above"],
            answer: 0
        },
        {
            question: "Which function returns true if a map has a specific key?",
            options: ["has-key()", "map-contains()", "key-exists()", "map-has-key()"],
            answer: 3
        },
        {
            question: "Which is the correct syntax for declaring a SASS function?",
            options: ["function name {}", "def name() {}", "@define name()", "@function name() {}"],
            answer: 3
        },
        {
            question: "What’s the output of `unitless(5em)`?",
            options: ["false", "true", "null", "5"],
            answer: 0
        },
        {
            question: "How do you get the number of keys in a map?",
            options: ["length(map-keys($map))", "count($map)", "map-length()", "size($map)"],
            answer: 0
        },
        {
            question: "Which loop lets you iterate over list values directly?",
            options: ["@for", "@each", "@loop", "@while"],
            answer: 1
        },
        {
            question: "What does `index($list, $value)` return?",
            options: ["The key name", "The index of value in list", "The value's type", "The value’s unit"],
            answer: 1
        },
        {
            question: "What is the purpose of `@use` in SASS?",
            options: ["To load and namespace modules", "To define mixins", "To extend selectors", "To create loops"],
            answer: 0
        },
        {
            question: "What is `meta.load-css()` used for?",
            options: ["To load JSON", "To load HTML", "To load CSS files dynamically", "To lazy load JS"],
            answer: 2
        },
        {
            question: "What’s the output of `is-unitless(5)`?",
            options: ["false", "5", "true", "unit"],
            answer: 2
        },
        {
            question: "How do you prevent a style from being output?",
            options: ["Use `@silent`", "Use `@private`", "Use `%placeholder`", "Use `@hide`"],
            answer: 2
        },
        {
            question: "What is the syntax to include all styles from a placeholder?",
            options: ["@extend %name", "@include %name", "@use %name", "@load %name"],
            answer: 0
        },
        {
            question: "Which function returns the smallest value in a list?",
            options: ["smallest()", "min-value()", "least()", "min()"],
            answer: 3
        },
        {
            question: "Which directive makes styles global?",
            options: ["@at-root", "@global", "@scope global", "@export"],
            answer: 0
        },
        {
            question: "Which function combines two lists?",
            options: ["merge()", "join()", "concat()", "combine()"],
            answer: 1
        },
        {
            question: "How do you escape special characters in SASS strings?",
            options: ["Using \\ ", "Using %", "Using &", "Using $"],
            answer: 0
        },
        {
            question: "How do you define a Boolean in SASS?",
            options: ["true/false", "yes/no", "1/0", "'true'/'false'"],
            answer: 0
        },
        {
            question: "What does `inspect($value)` return?",
            options: ["Length", "Type", "Value unit", "A string representation"],
            answer: 3
        },
        {
            question: "What is the purpose of `map-remove()`?",
            options: ["Removes a key-value from map", "Deletes entire map", "Clears list", "Removes list index"],
            answer: 0
        },
        {
            question: "Which function checks if two values are equal in SASS?",
            options: ["equals()", "==", "eq()", "is-equal()"],
            answer: 1
        },
        {
            question: "What does `mixin` mean in SASS?",
            options: ["Reusable group of styles", "Color function", "Import statement", "Loop block"],
            answer: 0
        },
        {
            question: "Which SASS feature lets you pass arguments to mixins?",
            options: ["Mixin props", "Function args", "Map values", "Mixin parameters"],
            answer: 3
        },
        {
            question: "What will `type-of(20px)` return?",
            options: ["number", "px", "unit", "length"],
            answer: 0
        },
        {
            question: "Which function darkens a color in SASS?",
            options: ["shade()", "fade()", "darken()", "opacity()"],
            answer: 2
        },
        {
            question: "How do you apply a condition in a mixin?",
            options: ["@check", "@if", "@when", "@case"],
            answer: 1
        },
        {
            question: "Which function returns the keys of a map?",
            options: ["map-keys()", "map-get-keys()", "get-keys()", "map-index()"],
            answer: 0
        },
        {
            question: "Which keyword is used to stop a loop early in SASS?",
            options: ["@continue", "@exit", "@break", "@stop"],
            answer: 2
        },
        {
            question: "How to write a SASS loop from 1 to 5?",
            options: ["@for $i from 1 through 5", "@loop 1 to 5", "@each 1-5", "@repeat(5)"],
            answer: 0
        },
        {
            question: "How do you define a fallback value in a function?",
            options: ["Using `:default`", "Using `=value`", "Using `!default`", "Using `or`"],
            answer: 2
        },
        {
            question: "How do you create a null value in SASS?",
            options: ["null", "none", "empty", "void"],
            answer: 0
        },
        {
            question: "What is `content` used for in mixins?",
            options: ["To insert nested content", "To set content property", "To call parent", "To comment code"],
            answer: 0
        },
        {
            question: "How do you make a value optional in SASS mixin?",
            options: ["Give it a default value", "Use !optional", "Declare it last", "Use ?variable"],
            answer: 0
        },
        {
            question: "Which function rounds a number upward in SASS?",
            options: ["ceil()", "round()", "floor()", "up()"],
            answer: 0
        }
    ],

    js: [
        { question: "Which company developed JavaScript?", options: ["Mozilla", "Netscape", "Google", "Microsoft"], answer: 1 },
        { question: "Which keyword is used to declare a variable?", options: ["var", "let", "const", "All of the above"], answer: 3 },
        { question: "Which method is used to add an element at the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: 0 },
        { question: "Which method is used to convert JSON to a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], answer: 0 },
        { question: "How do you create a function in JavaScript?", options: ["function myFunction()", "create myFunction()", "function:myFunction()", "def myFunction()"], answer: 0 },
        { question: "Which event occurs when the user clicks on an HTML element?", options: ["onmouseover", "onchange", "onclick", "onmouseclick"], answer: 2 },
        { question: "What is the correct syntax for an if statement in JavaScript?", options: ["if(condition) {}", "if condition {}", "if:condition {}", "if-then condition {}"], answer: 0 },
        { question: "How do you write a comment in JavaScript?", options: ["// Comment", "/* Comment */", "<!-- Comment -->", "# Comment"], answer: 0 },
        { question: "Which symbol is used for strict equality comparison?", options: ["===", "==", "=", "!=="], answer: 0 },
        { question: "Which method can be used to find the length of a string?", options: ["length()", "len()", "size()", "length"], answer: 3 },
        { question: "What will this code output? `console.log(typeof NaN);`", options: ["number", "NaN", "undefined", "object"], answer: 0 },
        { question: "How do you declare an array in JavaScript?", options: ["var arr = [];", "var arr = ();", "var arr = {};", "var arr = <>;"], answer: 0 },
        { question: "Which built-in method calls a function for each element in an array?", options: ["forEach()", "map()", "filter()", "reduce()"], answer: 0 },
        { question: "What is NaN in JavaScript?", options: ["Not a Number", "Null", "Undefined", "NaN is a function"], answer: 0 },
        { question: "Which symbol is used for single-line comments?", options: ["//", "/*", "<!--", "#"], answer: 0 },
        { question: "Which company developed JavaScript?", options: ["Mozilla", "Netscape", "Google", "Microsoft"], answer: 1 },
        { question: "Which keyword is used to declare a variable?", options: ["var", "let", "const", "All of the above"], answer: 3 },
        { question: "Which method is used to add an element at the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: 0 },
        { question: "Which method is used to convert JSON to a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], answer: 0 },
        { question: "How do you create a function in JavaScript?", options: ["function myFunction()", "create myFunction()", "function:myFunction()", "def myFunction()"], answer: 0 },
        { question: "Which event occurs when the user clicks on an HTML element?", options: ["onmouseover", "onchange", "onclick", "onmouseclick"], answer: 2 },
        { question: "How do you write a comment in JavaScript?", options: ["/* Comment */", "<!-- Comment -->", "# Comment", "// Comment"], answer: 3 },
        { question: "Which symbol is used for strict equality comparison?", options: ["==", "=", "!==", "==="], answer: 3 },
        { question: "Which method can be used to find the length of a string?", options: ["length()", "len()", "size()", "length"], answer: 3 },
        { question: "What will this code output? `console.log(typeof NaN);`", options: ["NaN", "undefined", "object", "number"], answer: 3 },
        { question: "How do you declare an array in JavaScript?", options: ["var arr = ();", "var arr = {};", "var arr = <>", "var arr = [];"], answer: 3 },
        { question: "Which built-in method calls a function for each element in an array?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: 3 },
        { question: "What is NaN in JavaScript?", options: ["Null", "Undefined", "NaN is a function", "Not a Number"], answer: 3 },
        { question: "Which symbol is used for single-line comments?", options: ["/*", "<!--", "#", "//"], answer: 3 },
        { question: "Which company developed JavaScript?", options: ["Mozilla", "Google", "Microsoft", "Netscape"], answer: 3 },
        { question: "Which keyword is used to declare a variable?", options: ["var", "let", "const", "All of the above"], answer: 3 },
        { question: "Which method is used to add an element at the end of an array?", options: ["pop()", "shift()", "unshift()", "push()"], answer: 3 },
        { question: "Which method is used to convert JSON to a JavaScript object?", options: ["JSON.stringify()", "JSON.convert()", "JSON.toObject()", "JSON.parse()"], answer: 3 },
        { question: "How do you create a function in JavaScript?", options: ["create myFunction()", "function:myFunction()", "def myFunction()", "function myFunction()"], answer: 3 },
        { question: "Which event occurs when the user clicks on an HTML element?", options: ["onmouseover", "onchange", "onmouseclick", "onclick"], answer: 3 },
        { question: "What is the correct syntax for an if statement in JavaScript?", options: ["if condition {}", "if:condition {}", "if-then condition {}", "if(condition) {}"], answer: 3 },
        { question: "Which keyword prevents a variable from being reassigned?", options: ["var", "let", "static", "const"], answer: 3 },
        { question: "Which operator is used to assign a value?", options: ["==", "===", "::", "="], answer: 3 },
        { question: "What does `typeof null` return?", options: ["null", "undefined", "boolean", "object"], answer: 3 },
        { question: "Which method removes the last element of an array?", options: ["push()", "shift()", "splice()", "pop()"], answer: 3 },
        { question: "How do you round a number to the nearest integer?", options: ["Math.floor()", "Math.ceil()", "Math.fix()", "Math.round()"], answer: 3 },
        { question: "How do you generate a random number between 0 and 1?", options: ["Math.rand()", "random()", "Number.random()", "Math.random()"], answer: 3 },
        { question: "What will `Boolean(0)` return?", options: ["true", "undefined", "null", "false"], answer: 3 },
        { question: "Which keyword is used for asynchronous functions?", options: ["await", "defer", "setTimeout", "async"], answer: 3 },
        { question: "Which method converts an object into a JSON string?", options: ["JSON.parse()", "JSON.convert()", "Object.toString()", "JSON.stringify()"], answer: 3 },
        { question: "Which operator is used for logical AND?", options: ["||", "&", "and", "&&"], answer: 3 },
        { question: "How do you create a new object in JavaScript?", options: ["let obj = [];", "let obj = ();", "let obj = <>;", "let obj = {};"], answer: 3 },
        { question: "What is the output of `typeof undefined`?", options: ["null", "object", "NaN", "undefined"], answer: 3 },
        { question: "Which method joins array elements into a string?", options: ["concat()", "toString()", "combine()", "join()"], answer: 3 },
        { question: "Which keyword is used to handle errors?", options: ["try", "catch", "throw", "All of the above"], answer: 3 },
        { question: "Which built-in object represents dates and times?", options: ["Time", "Clock", "Moment", "Date"], answer: 3 },
        { question: "Which operator is used for exponentiation?", options: ["^", "pow", "exp", "**"], answer: 3 },
        { question: "How do you write a ternary expression?", options: ["if (condition) true else false", "condition then true else false", "condition > true : false", "condition ? true : false"], answer: 3 },
        { question: "Which function delays code execution?", options: ["delay()", "wait()", "pause()", "setTimeout()"], answer: 3 },
        { question: "How do you convert a string to an integer?", options: ["Number()", "parseFloat()", "String()", "parseInt()"], answer: 3 },
        { question: "What does `isNaN()` check?", options: ["If value is null", "If value is false", "If value is undefined", "If value is NaN"], answer: 3 },
        { question: "What is a closure in JavaScript?", options: ["A block", "A class", "A library", "A function with preserved outer scope"], answer: 3 },
        { question: "How do you check if two values are not equal?", options: ["!=", "notEqual()", "!===", "!=="], answer: 3 },
        { question: "Which scope does `let` use?", options: ["Function scope", "Global scope", "Module scope", "Block scope"], answer: 3 },
        { question: "Which method removes the first element of an array?", options: ["pop()", "slice()", "unshift()", "shift()"], answer: 3 },
        { question: "Which object is used to store key-value pairs?", options: ["Array", "Set", "Map", "Object"], answer: 3 },
        { question: "What is the result of `typeof []`?", options: ["array", "list", "undefined", "object"], answer: 3 },
        { question: "What is the result of `typeof function() {}`?", options: ["object", "undefined", "string", "function"], answer: 3 },
        { question: "Which loop is guaranteed to run at least once?", options: ["while", "for", "forEach", "do...while"], answer: 3 },
        { question: "What is the default value of uninitialized variables?", options: ["null", "false", "0", "undefined"], answer: 3 },
        { question: "What is a promise in JavaScript?", options: ["A condition", "A callback", "A function", "An object for async operation"], answer: 3 },
        { question: "Which method can be used to filter array elements?", options: ["map()", "forEach()", "reduce()", "filter()"], answer: 3 },
        { question: "Which method converts a number to a string?", options: ["stringify()", "parseInt()", "String()", "toString()"], answer: 3 },
        { question: "What is the purpose of `await` keyword?", options: ["Call an async function", "Run in background", "Wait for setTimeout", "Pause execution until promise resolves"], answer: 3 },
        { question: "What is the output of `typeof null`?", options: ["null", "undefined", "boolean", "object"], answer: 3 },
        { question: "What will `[] == false` return?", options: ["false", "error", "undefined", "true"], answer: 3 },
        { question: "Which method creates a shallow copy of part of an array?", options: ["splice()", "split()", "copy()", "slice()"], answer: 3 },
        { question: "What is the use of `this` keyword?", options: ["Refers to parent", "Refers to global", "Refers to variable", "Refers to current object"], answer: 3 },
        { question: "Which object represents the browser window?", options: ["document", "navigator", "screen", "window"], answer: 3 },
        { question: "Which function runs repeatedly at fixed time intervals?", options: ["setTimeout()", "loop()", "runEvery()", "setInterval()"], answer: 3 },
        { question: "What is event bubbling?", options: ["From parent to child", "Stops at target", "None", "Events propagate from child to parent"], answer: 3 },
        { question: "How do you stop event propagation?", options: ["event.preventDefault()", "return false", "stop()", "event.stopPropagation()"], answer: 3 },
        { question: "Which symbol is used to define template literals?", options: ["'", "\"", "~", "`"], answer: 3 },
        { question: "How do you access object properties dynamically?", options: ["obj.key", "obj->key", "obj(key)", "obj[key]"], answer: 3 },
        { question: "Which type is JavaScript?", options: ["Statically typed", "Compiled", "Strongly typed", "Dynamically typed"], answer: 3 },
        { question: "What is the use of `break` in loops?", options: ["Skip iteration", "Restart loop", "Pause loop", "Exit loop"], answer: 3 },
        { question: "What does DOM stand for?", options: ["Data Object Model", "Document Option Model", "Data Option Model", "Document Object Model"], answer: 3 },
        { question: "Which method removes whitespace from both ends of a string?", options: ["slice()", "substr()", "split()", "trim()"], answer: 3 },
        { question: "What is the output of `!!true`?", options: ["false", "undefined", "error", "true"], answer: 3 },
        { question: "Which operator is used to concatenate strings?", options: ["*", "$", ".", "+"], answer: 3 },
        { question: "Which method converts a string to uppercase?", options: ["toUpper()", "uppercase()", "upperCase()", "toUpperCase()"], answer: 3 },
        { question: "How do you parse a string into a float number?", options: ["parseInt()", "Number()", "float()", "parseFloat()"], answer: 3 },
        { question: "What does `Array.isArray()` check?", options: ["If object is null", "If object is array", "If array is empty", "If object is string"], answer: 3 },
        { question: "Which method returns the index of an element in an array?", options: ["findIndex()", "search()", "index()", "indexOf()"], answer: 3 },
        { question: "What does the `new` keyword do?", options: ["Creates a new function", "Deletes an object", "Copies an object", "Creates a new instance of an object"], answer: 3 },
        { question: "Which method removes elements from an array?", options: ["delete()", "remove()", "slice()", "splice()"], answer: 3 },
        { question: "How do you check if a property exists in an object?", options: ["hasKey()", "property()", "hasOwnProperty()", "exists()"], answer: 3 },
        { question: "Which keyword is used to import modules?", options: ["require", "import", "include", "module"], answer: 3 },
        { question: "What is hoisting in JavaScript?", options: ["Moving code", "Moving variables and function declarations to the top", "Memory allocation", "Compilation"], answer: 3 },
        { question: "Which method serializes an object to a query string?", options: ["JSON.stringify()", "URL.stringify()", "queryString()", "encodeURIComponent()"], answer: 3 },
        { question: "What is the result of `0 === false`?", options: ["true", "false", "undefined", "error"], answer: 3 },
        { question: "Which function parses a URL query string?", options: ["parseQuery()", "URL.parse()", "queryParser()", "URLSearchParams"], answer: 3 },
        { question: "What does `Array.prototype.reduce()` do?", options: ["Filters array", "Maps array", "Reduces array to a single value", "Sorts array"], answer: 3 },
        { question: "Which method returns the last element of an array?", options: ["last()", "peek()", "end()", "slice(-1)"], answer: 3 },
        { question: "What is the output of `typeof NaN`?", options: ["number", "NaN", "undefined", "object"], answer: 3 },
        { question: "Which function converts a string to lowercase?", options: ["toLower()", "lowercase()", "toLowerCase()", "lowerCase()"], answer: 3 },
        { question: "How do you declare a constant in JavaScript?", options: ["var", "let", "constant", "const"], answer: 3 },
        { question: "Which method checks if an array includes a certain element?", options: ["contains()", "has()", "includes()", "exists()"], answer: 3 },
        { question: "How do you create an immediately invoked function expression (IIFE)?", options: ["function(){}()", "function(){};", "(function(){})()", "(function(){})"], answer: 3 },
        { question: "Which statement is used to exit a loop?", options: ["exit", "break", "stop", "return"], answer: 3 },
        { question: "How do you create a comment block?", options: ["// Comment", "/* Comment */", "<!-- Comment -->", "# Comment"], answer: 3 },
        { question: "Which method suspends execution for JS Promises?", options: ["await", "async", "sleep", "delay"], answer: 0 },
        { question: "Which method does deep cloning of objects?", options: ["structuredClone()", "Object.assign()", "JSON.parse(JSON.stringify())", "clone()"], answer: 0 },
        { question: "Which method returns iterator of object keys?", options: ["Object.getKeys()", "Object.keys()", "Object.keySet()", "for keys"], answer: 1 },
        { question: "Which symbol is used for rest parameters?", options: ["...", "??", "::", "**"], answer: 0 },
        { question: "Which object stores local data within browser session?", options: ["sessionStorage", "localStorage", "cookies", "indexedDB"], answer: 0 },
        { question: "Which method runs on each promise return?", options: ["then()", "catch()", "finally()", "all()"], answer: 2 },
        { question: "Which is not a primitive data type?", options: ["Function", "Number", "String", "Boolean"], answer: 0 },
    ],

};