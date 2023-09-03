let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  let phone = document.querySelector('#phoneValue').value;
  $.ajax({
    type: "get",
    url: "剛剛取得的 API，請直接貼上",
    data: {
      "name": name, /* 屬性名稱需與 Google Sheet 相同 */
      "phone": phone, /* 屬性名稱需與 Google Sheet 相同 */
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
