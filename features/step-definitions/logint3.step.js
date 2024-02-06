const{Given,When,Then}=require('@cucumber/cucumber');
const {expect}=require('chai');
const{loginPage}=require('../page-objects/loginpage');

Given(/^i am on the login page$/, () => {
	loginPage.open();
});

When(/^i enter valid username and password$/, () => {
	//return true;
    loginPage.enterCredentials('santana','chunu@1234')
});

When(/^i click the login button$/, () => {
	//return true;
    loginPage.clickLoginButton();
});


