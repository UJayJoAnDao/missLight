let Btn1 = $('#btn1');
let Btn2 = $('#btn2');
let Btn3 = $('#btn3');
let Btn4 = $('#btn4');
let Btn5 = $('#btn5');
let optionButton = $("#options");
let circleButton = $("#myButton");

function send(data) {
  alert("已按下");
  $.ajax({
    type: "get",
    url: "https://script.google.com/macros/s/AKfycbyIOG5SsKFwUvupQJuL3h6EtQHzIJW0tMLsrPA5P-EGd4s7ddxMFPI1_kUp0XW6C-YG/exec",
    data: {
      "name": data, /* 屬性名稱需與 Google Sheet 相同 */
      "phone": "123", /* 屬性名稱需與 Google Sheet 相同 */
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

sendButton.click(send,"1");
