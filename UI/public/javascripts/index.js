var crypto = require('crypto'),
    algorithm = 'aes-256-ctr';


function encrypt(text,password){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}


function decrypt(text,password){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}



$("#btn").click(function(event) {
    console.log("[SEND TO BACKEND] FirstRequest");
    var data = {
        name: $("#name").val(),
        ip: $("#ip").val(),
        timeStamp: $("#timestamp").val(),
        lifeTime: $("#lifetime").val()
    }

    event.preventDefault();
    $.ajax({
        type: "post",
        url: "FirstRequest",
        datatype: "JSON",
        data: data,
        success: function(res) {
            console.log("[RECEIVE FROM BACKEND] FirstResponse");
            console.log(decrypt(res.TGTResponse,"ClientKey"));
        }
    })
});
