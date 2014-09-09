describe('angularjs homepage', function() {
  it('should have a title', function() {
    browser.get('/');

    expect(browser.getTitle()).toEqual('Transform Admins');
  });
});
