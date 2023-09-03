let sendButton = $('#myButton');

function send() {
  $.ajax({
    type: "get",
    url: "https://script.google.com/macros/s/AKfycbyIOG5SsKFwUvupQJuL3h6EtQHzIJW0tMLsrPA5P-EGd4s7ddxMFPI1_kUp0XW6C-YG/exec",
    data: {
      "name": 123, /* 屬性名稱需與 Google Sheet 相同 */
      "phone": 456, /* 屬性名稱需與 Google Sheet 相同 */
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

sendButton.addEventListener('click', send);
