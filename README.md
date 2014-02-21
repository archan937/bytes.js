# B(ytes.js)

A lightweight Javascript library for DOM traversing and event binding written in a fair amount of bytes.

#### Why write Bytes.js?

This is probably one of the first questions which pops up. To put it in one sentence:

"I wanted a lean, mean, non-bloated, cross-browser compatible JS library useful for
dealing with some of the most common tasks done when writing Javascript".

First of all, I'm a big fan of lightweight utility tools that do not have any dependencies.
That is why I often check out [vX.js](https://code.google.com/p/vxjs) when searching for a useful Javascript snippet.
I don't want to use jQuery without thinking about it being too much for the job.

So with vX.js as starting point, I have written Bytes.js. A lightweight JS library written in a fair amount of bytes.
It is *2501* bytes when uncompressed, *1643* bytes when [minified](http://yui.github.io/yuicompressor) and *856* bytes when minified and [gzipped](http://www.gnu.org/software/gzip).

#### Tested with QUnit

Bytes.js is tested with [QUnit](http://qunitjs.com) and is currently compatible with the following browsers:

* Internet Explorer 6+
* Firefox 3+
* Opera 10.6+
* Google Chrome 14+
* Safari 4+

Please note that complex CSS selectors are only supported in browsers with [querySelectorAll](http://caniuse.com/queryselector)().
You can run the tests yourself by clicking right [here](http://archan937.github.io/bytes.js/test/index.html).

### Installation

Setting up Bytes.js is only a matter of adding a simple script include tag:

    <script src="http://archan937.github.io/bytes.js/bytes.js"></script>

### Contact me

For support, remarks and requests, please mail me at [pm_engel@icloud.com](mailto:pm_engel@icloud.com).

### License

Copyright (c) 2014 Paul Engel, released under the MIT license

[http://gettopup.com](http://gettopup.com) - [http://github.com/archan937](http://github.com/archan937) - [http://twitter.com/archan937](http://twitter.com/archan937) - [pm_engel@icloud.com](mailto:pm_engel@icloud.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.