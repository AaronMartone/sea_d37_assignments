/*
    Go through a wizard to create your package.json file via:
    $ npm init

    This indicates that you want to install the mocha and chai librabries but to install them as development 
    dependencies. Depending on the node environment, either the production dependencies or the development will be
    installed when running: npm install. When installing these libraries, the versions downloaded will be used in the
    package.json file automatically.
    $ npm install --save-dev mocha chai
    $ npm install --save mocha chai (this installs and saves to production dependencies)

    This command only installs production dependencies.
    $ npm install --production
*/