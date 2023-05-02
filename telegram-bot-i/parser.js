const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const url = require('url');

//  Категории
const categories = [];

request('https://www.kufar.by/', async function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const $ = cheerio.load(body);

    $('.styles_link__wrapper__u0vXY').each(function () {
      const link = $(this).find('a').attr('href');
      const name = $(this).find('.styles_link__text__T9HDC').text();
      console.log(name + ': ' + link);

      categories.push({ name, link });
    });

    // Получаем список подкатегорий для каждой категории
    for (const category of categories) {
      const subcategories = await getSubcategories(category);
      category.subcategories = subcategories;

      // Записываем данные в файл categories.json
      fs.writeFile('categories.json', JSON.stringify(categories), (err) => {
        if (err) throw err;
        console.log(`Подкатегории для категории ${category.name} сохранены в файл categories.json`);
      });
    }

    // Записываем данные в файл categories.json
    fs.writeFile('categories.json', JSON.stringify(categories), (err) => {
      if (err) throw err;
      console.log('Категории сохранены в файл categories.json');
    });
  }
});

// Функция для получения списка подкатегорий для категории
function getSubcategories(category) {
  return new Promise((resolve, reject) => {
    const subcategories = [];
    const fullLink = url.resolve('https://www.kufar.by', category.link);
    request(fullLink, function (error, response, body) {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        const $ = cheerio.load(body);
        $('.styles_wrapper__FPkvn a').each(function () {
          const link = $(this).attr('href');
          const name = $(this).find('.styles_link__text__T9HDC').text();
          subcategories.push({ name, link });
        });
        resolve(subcategories);
      }
    });
  });
}
