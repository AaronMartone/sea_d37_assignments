/*
    NAME: he name of the package. Use a URL and Filesystem-safe value. Keep it short and make sure it's not in use in 
    the NPM registry. Without this property, the package will not install.

    VERSION: The version of the package. The 'name' and 'version' together form an identifier that is assumed to always 
    be unique.

    DESCRIPTION: A description of the package. This value is displayed in the NPM registry/site.

    KEYWORDS: An array of strings to describe the package.

    HOMEPAGE: The URL to the project homepage.

    BUGS: When a property/value, provides the URL to your project's bug tracker. When multiple properties are being
    provided, it's set to an object which contains said bug tracker in the "URL" key and an email address to report
    bugs to in the "EMAIL" key.

    MAIN: The entry point of the module. By default if nothing is specified, it will look for 'app'

    BIN: If your package needs to install a binary file into the PATH, it can be specified here.

    REPOSITORY: Provides the source repository type and URL.
*/

{
    "name": "am-test",
    "version": "0.1.0",
    "description": "A description of the package.",
    "keywords": [
        "apples", "oranges", "bananas", "grapes"
    ],
    "homepage": "https://aaronmartone.com/project/my-project",
    "bugs": {
        "url": "https://aaronmartone.com/project/my-project/bugs",
        "email": "bugs@aaronmartone.com"
    },
    "license": "MIT",
    "author": "Aaron R. Martone",
    "contributors": [
        "John Smith <josmith@example.com> (https://example.com/johnsmith)",
        "Jane Smith <jasmith@example.com> (https://example.com/janesmith)"
    ],
    "main": "starter",
    "bin": {
        "bin1": "./lib/my-binary1.js",
        "bin2": "./lib/my-binary2.js"
    },
    "repository": { 
        "type": "git",
        "url" : "https://github.com/AaronMartone/am-test.git"
    },
    "dependencies": {
        "module1": "1.0.0",
        "module2": "1.0.0",
        "module3": "1.0.0"
    },
    "devDependencies": {
        "bower": "0.4.12",
        "applesauce": "latest"
    },
    "engines": {
        "node": "0.12.2"
    },
    "os": [
        "darwin"
    ],
    "preferGlobal": false
}