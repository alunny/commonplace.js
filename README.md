Commonplace.js
==============

This is a commonplace book for JavaScript snippets that I'd like to keep around, along with a lightweight test framework, a simple require syntax, and some build and generate tools.

@author Andrew Lunny andrew.lunny@nitobi.com

### Usage
1. Create a new scrap:

		~$ cd commonplace
		~commonplace$ python script/generate.py scrap NewScrap
		
2. Go write some JavaScript:

		~commonplace$ mate scraps/NewScrap.js
		
3. Go write some tests:

		~commonplace$ mate test/NewScrap.js
		
4. Test it on an HTML page:

		~commonplace$ python script/generate.py testcase NewScrap
		~commonplace$ mate testcases/NewScrap.html
		
5. Build your minified, namespaced Javascript:

		~commonplace$ python script/build.py scrap NewScrap
		
### Directory structure
* _bin_ - output of build commands
* _helpers_ - js files that assist scraps
* _scraps_ - small pieces of JavaScript
* _script_ - scripts to manipulate scraps and the like (currently in Python, soon in CommonJS)
* _templates_ - JavaScript and HTML templates for generators
* _test_ - js files that test scraps
* _testcases_ - html files that run tests
* _tmp_ - things you don't want to check in

### Miscellaneous notes
* The require syntax is written for convenience for browser deployment - it's not CommonJS compliant, which is annoying, but it's good enough for this project. Requirements are listed as one line comments of the form:

		// require: helpers/Json.js
		
* Scraps and helpers are written in the global namespace, and on build everything is put into a single global object (named commonplace by default, but can be chosen when you call build.py). Having everything in the global namespace while writing makes the code a lot more concise, but to package it up correctly requires defining everything to export twice, like so:

		this.<%= scrap_name %> = function <%= scrap_name %>() {
		};
		var <%= scrap_name %> = this.<%= scrap_name %>;
		
* The primary purpose of this project is to sharpen my JavaScript skills, and make it as simple as possible to try new things. Thus, all of the above is provisional and subject to change without notice at any time.

### License

___Copyright (c) 2009 Andrew Lunny___

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

___NB: this license was copy/pasted from XUI___