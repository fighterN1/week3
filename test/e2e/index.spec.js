module.exports = {
  'topics e2e tests' : function (browser) {
    const devServer ='https://www.baidu.com';
    browser
      .url(devServer)
      // .waitForElementVisible('#app', 1000)
      // .pause(1000);
      // .assert.elementPresent('.view')
      // .assert.containsText('h1', 'Welcome to Your Vue.js App')
      // .assert.elementCount('div', 10)
      // .end()
      browser.elements('css selector','#lg',function (res) {
            console.log("结果",res);
      	browser.verify.equal(res.value.length,1);
      }).end();
  }
};
