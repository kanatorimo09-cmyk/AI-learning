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

  list:[
    "英語1 過去形",
    "英語2 助動詞"
  ],

  quizzes:{
    "0":[
      {
        type:"input",
        q:"I played soccer yesterday. の played は何形ですか。",
        a:"過去形"
      }
    ], //"0"のくくり

    "1":[
      {
        type:"input",
        q:"can は何を表す助動詞ですか。",
        a:"能力"
      }
    ] //"1"のくくり
  } //問題のくくり
}; //学年のくくり


// 3年
quizDatabase["3year"] = quizDatabase["3year"] || {};

quizDatabase["3year"].eigo = {
  name:"英語",
  class:"eigo",

  list:[
    "英語1 現在完了",
    "英語2 受動態"
  ],

  quizzes:{
    "0":[
      {
        type:"input",
        q:"I have lived in Japan for three years. の have lived は何という形ですか。",
        a:"現在完了"
      }
    ], //"0"のくくり

    "1":[
      {
        type:"input",
        q:"This book was written by him. の was written は何という形ですか。",
        a:"受動態"
      }
    ] //"1"のくくり
  } //問題のくくり
}; //学年のくくり