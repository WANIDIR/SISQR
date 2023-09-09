// mostrar contraseña 
function MostrarContrasena(){
      var tipo = document.getElementById("pwd");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
  }