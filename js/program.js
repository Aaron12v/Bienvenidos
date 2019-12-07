this.logueado = false;

$("#entrar").click(function() {
	if ($("#usuario").val() == "Aaron" && $("#Contraseña").val() == "123") {
		logueado = true;
		if (logueado == true) {
			    window.location = "./pages/Hola.html"              
		}
	}else{
		Swal.fire('Error');
	}
});

window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});