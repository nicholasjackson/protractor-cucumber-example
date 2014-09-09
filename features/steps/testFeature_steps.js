//http://chaijs.com/
var chai = require('chai');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {

  //var ptor = protractor.getInstance();

  this.Given(/^I go on "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    browser.get('http://localhost:9001');
    callback()
  });

  this.Then(/^the title should equal "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    expect(browser.getTitle()).to.eventually.equal(arg1).and.notify(callback);
  });
}
