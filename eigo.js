// 1年
quizDatabase["1year"] = quizDatabase["1year"] || {};

quizDatabase["1year"].eigo = {
  name:"英語",
  class:"eigo",

  list:[
    "英語1 be動詞",
    "英語2 一般動詞"
  ],

  quizzes:{
    "0":[
      {
        type:"input",
        q:"I am a student. の am は何という種類の動詞ですか。",
        a:"be動詞"
      }
    ], //"0"のくくり

    "1":[
      {
        type:"input",
        q:"I play soccer. の play は何という種類の動詞ですか。",
        a:"一般動詞"
      }
    ] //"1"のくくり
  } //問題のくくり
}; //学年のくくり


// 2年
quizDatabase["2year"] = quizDatabase["2year"] || {};
quizDatabase["2year"].eigo = {
  name:"英語",
  class:"eigo",
  list:["英語1 過去形","英語2 助動詞"],
  quizzes:{
    "0": makeEnglishQuestions([
      ["be動詞 am の過去形を答えなさい。","was"],
      ["be動詞 is の過去形を答えなさい。","was"],
      ["be動詞 are の過去形を答えなさい。","were"],
      ["go の過去形を答えなさい。","went"],
      ["come の過去形を答えなさい。","came"],
      ["see の過去形を答えなさい。","saw"],
      ["eat の過去形を答えなさい。","ate"],
      ["have の過去形を答えなさい。","had"],
      ["make の過去形を答えなさい。","made"],
      ["play の過去形を答えなさい。","played"],
      ["study の過去形を答えなさい。","studied"],
      ["live の過去形を答えなさい。","lived"],
      ["yesterday は日本語で何ですか。","昨日"],
      ["last week は日本語で何ですか。","先週"],
      ["Did を使う疑問文への短い肯定の答えは何で始めますか。","Yes"]
    ]),
    "1": makeEnglishQuestions([
      ["can が表す意味を答えなさい。","能力"],
      ["must が表す意味を答えなさい。","義務"],
      ["should が表す意味を答えなさい。","助言"],
      ["will が表す意味を答えなさい。","未来"],
      ["may が表す意味を答えなさい。","許可"],
      ["can の後に置く動詞の形を答えなさい。","原形"],
      ["must の後に置く動詞の形を答えなさい。","原形"],
      ["You must study. を日本語にしなさい。","あなたは勉強しなければならない"],
      ["You should sleep. を日本語にしなさい。","あなたは寝るべきだ"],
      ["I can swim. を日本語にしなさい。","私は泳げる"],
      ["Will you come? はどの時制をたずねる文ですか。","未来"],
      ["Can I use this pen? は何を求める文ですか。","許可"],
      ["must not の意味を答えなさい。","してはいけない"],
      ["will not の短縮形を答えなさい。","won't"],
      ["can not の短縮形を答えなさい。","can't"]
    ])
  }
};

// 3年
quizDatabase["3year"] = quizDatabase["3year"] || {};
quizDatabase["3year"].eigo = {
  name:"英語",
  class:"eigo",
  list:["英語1 現在完了","英語2 受動態"],
  quizzes:{
    "0": makeEnglishQuestions([
      ["現在完了の基本形を答えなさい。","have＋過去分詞"],
      ["I have lived here for three years. の時制を答えなさい。","現在完了"],
      ["現在完了の経験を表す語を1つ答えなさい。",["ever","never","before"]],
      ["現在完了の継続で使う期間を表す語を1つ答えなさい。",["for","since"]],
      ["for three years の for は何を表しますか。","期間"],
      ["since 2020 の since は何を表しますか。","起点"],
      ["have の過去分詞を答えなさい。","had"],
      ["go の過去分詞を答えなさい。","gone"],
      ["see の過去分詞を答えなさい。","seen"],
      ["write の過去分詞を答えなさい。","written"],
      ["I have just finished. の just の意味を答えなさい。","ちょうど"],
      ["I have already eaten. の already の意味を答えなさい。","すでに"],
      ["Have you finished? は何をたずねる文ですか。","現在完了"],
      ["現在完了の否定文で have の後に置く語を答えなさい。","not"],
      ["I have never been to Kyoto. の意味を答えなさい。","私は京都に一度も行ったことがない"]
    ]),
    "1": makeEnglishQuestions([
      ["受動態の基本形を答えなさい。","be動詞＋過去分詞"],
      ["This book was written by him. の時制・形を答えなさい。","受動態"],
      ["受動態で動作をする人を表す前置詞を答えなさい。","by"],
      ["write の過去分詞を答えなさい。","written"],
      ["make の過去分詞を答えなさい。","made"],
      ["speak の過去分詞を答えなさい。","spoken"],
      ["use の過去分詞を答えなさい。","used"],
      ["This song is loved by many people. を日本語にしなさい。","この歌は多くの人に愛されている"],
      ["English is spoken in many countries. を日本語にしなさい。","英語は多くの国で話されている"],
      ["The window was broken. を日本語にしなさい。","その窓は壊された"],
      ["受動態の現在形で使う be動詞を1つ答えなさい。",["am","is","are"]],
      ["受動態の過去形で使う be動詞を1つ答えなさい。",["was","were"]],
      ["能動態の目的語は受動態では何になりますか。","主語"],
      ["People speak English. を受動態にした文の主語を答えなさい。","English"],
      ["by を省略できるのは、動作をする人が明らかな場合ですか。","はい"]
    ])
  }
};

function makeEnglishQuestions(items) {
  return items.flatMap(([q, a]) => [
    { type:"input", q:q, a:a },
    { type:"input", q:"確認：" + q, a:a }
  ]);
}
