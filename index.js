let optionsBtn = $('button');
let optionButton = $("#options");
let circleButton = $("#myButton");
optionButton.css("display","none");

function send() {
  alert("已按下");
  let ID = this.id;
  let DATE = new Date();
  alert(ID);
  $.ajax({
    type: "get",
    url: "https://script.google.com/macros/s/AKfycbyIOG5SsKFwUvupQJuL3h6EtQHzIJW0tMLsrPA5P-EGd4s7ddxMFPI1_kUp0XW6C-YG/exec",
    data: {
      "name": ID, /* 屬性名稱需與 Google Sheet 相同 */
      "phone": "123", /* 屬性名稱需與 Google Sheet 相同 */
      "time": DATE.toString()
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
