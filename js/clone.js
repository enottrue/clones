var request = require("request"),
  cheerio = require("cheerio"),
  totalResults = 0, totalResultsAnswers=0, arr = [],

  url = "https://stackoverflow.com/questions/6/";

request(url, function(error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
    h1 = $("h1").text();
    questionNumber = $(".question .vote-count-post").text();
    questionText = $(".question .post-text").html();
    answersHeader = $('#answers-header h2 span').text() // общее количество ответов

    tags = $(".post-taglist .d-block a");
    tags.each(function(i, tag) {
    //  console.log(tag);
    //  console.log($(tag).text());
      arr[i]	= $(tag).text();
      totalResults++;
    });
    // console.log(arr); // массив тегов.

    answers = $("#answers .answer");
    answers.each(function(i, answer) {

        console.log ($(answer).find('.vote-count-post').text());// количество голосов за ответ
        console.log ($(answer).find('.post-text ').html());// количество голосов за ответ

        totalResultsAnswers++;
    });

    //vote-count-post
    console.log("h1 -  " + h1 + questionNumber + questionText + totalResults+ " - " + answersHeader + " - totalResultsAnswers - " + totalResultsAnswers);
  } else {
    console.log("Произошла ошибка: " + error);
  }
});
