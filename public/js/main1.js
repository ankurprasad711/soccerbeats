$('#s').click(function(){
auth={
  user: $('#username').val(),
  pass: $.('#password').val()

};
  $.post('/login', auth,
         function (data, status){

         }
         )
});
