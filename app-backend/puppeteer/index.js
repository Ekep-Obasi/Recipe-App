const puppeteer = require("puppeteer");

async function start() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.jamieoliver.com/recipes/category/special-diets/vegan/"
  );
  const element = await page.$$(".recipe-image");

  const result = await element.map(async (t) => {
    return await t.$("img");
  });

  console.log(JSON.stringify(result[0]));

  await browser.close();
}

start();
