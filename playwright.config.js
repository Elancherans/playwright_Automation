// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  //Overriding the default time is not madatory 
  timeout: 40000, //Overriden the default playwright timeout, this is fror overall timeout 
  expect: {
  timeout: 50000, // This timeout specific to assersion validation
  },
  reporter: 'html',

  use: {
    browserName : 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure',

    

  }

});
       
