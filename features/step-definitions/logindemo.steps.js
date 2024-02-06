const{Given,Then}=require('cucumber');
const assert=require('assert');
const { BROWSER_ENVIRONMENTS } = require('@wdio/cli/build/constants');
Given(/^open the T3 Framework website$/, () => {
    BROWSER_ENVIRONMENTS.url('http://demo.t3-framework.org/joomla30/index.php/en/joomla-pages/sample-page-2/login-page');

});

Then(/^Then the title should be "([^"]*)"$/, (expectedTitle) => {
	const actualtitile=BROWSER_ENVIRONMENTS.getTitle();
    assert.strictEqual(actualtitile.expectedTitle);
});
