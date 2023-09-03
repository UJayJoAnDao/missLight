let optionsBtn = $('button');
let optionButton = $("#options");
let circleButton = $("#myButton");
optionButton.css("display","none");

function send() {
  alert("已按下");
  let ID = this.id;
  let DATE = new Date();
  let sender = $("#sender").val();
  alert(ID,sender);
  $.ajax({
    type: "get",
    url: "https://script.google.com/macros/s/AKfycbyIOG5SsKFwUvupQJuL3h6EtQHzIJW0tMLsrPA5P-EGd4s7ddxMFPI1_kUp0XW6C-YG/exec",
    data: {
      "light": ID, /* 屬性名稱需與 Google Sheet 相同 */
      "sender": sender,
      "time": DATE.toString(), /* 屬性名稱需與 Google Sheet 相同 */
      "special": 0
    },
    dataType: "JSON",
    success: function(response) {
      console.log(response);
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

optionsBtn.click(send);
circleButton.click(function(){
  if(optionButton.css("display")=="none"){
    optionButton.css("display","flex");
  }else{
    optionButton.css("display","none");
  }
});
