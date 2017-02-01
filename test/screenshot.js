describe('my screenshot', function () {
  it('should capture the page', function () {
    browser.url('/broke.html');

    browser.saveElementScreenshot('shots/header.png', '.header-title');
    browser.saveElementScreenshot('shots/signup.png', '#mc_embed_signup_scroll');

    browser.setValue('input[name="EMAIL"]', 'test@example.com');
    browser.saveElementScreenshot('shots/signup-filled.png', '#mc_embed_signup_scroll');
  })
})