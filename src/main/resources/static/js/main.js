//----------------------------------------Previsualizar imagenes--------------------------------------------
function readURL1(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		var div_id = $(input).attr('set-to');
		reader.onload = function(e) {
			$('#' + div_id).attr('src', e.target.result);
			$('label[for="imageUploadpreview1"]').css('background-image',
					'url(' + e.target.result + ')');
			$('#thumb1').hide();
		}

		reader.readAsDataURL(input.files[0]);
	}
}

$('label[for="imageUpload1"]').change(function() {
	readURL(this);

});

function readURL2(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		var div_id = $(input).attr('set-to');
		reader.onload = function(e) {
			$('#' + div_id).attr('src', e.target.result);
			$('label[for="imageUploadpreview2"]').css('background-image',
					'url(' + e.target.result + ')');
			$('#thumb2').hide();
		}

		reader.readAsDataURL(input.files[0]);
	}
}

$('label[for="imageUpload2"]').change(function() {
	readURL(this);

});

function readURL3(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		var div_id = $(input).attr('set-to');
		reader.onload = function(e) {
			$('#' + div_id).attr('src', e.target.result);
			$('label[for="imageUploadpreview3"]').css('background-image',
					'url(' + e.target.result + ')');
			$('#thumb3').hide();
		}

		reader.readAsDataURL(input.files[0]);
	}
}

$('label[for="imageUpload3"]').change(function() {
	readURL(this);

});

function readURL4(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		var div_id = $(input).attr('set-to');
		reader.onload = function(e) {
			$('#' + div_id).attr('src', e.target.result);
			$('label[for="imageUploadpreview4"]').css('background-image',
					'url(' + e.target.result + ')');
			$('#thumb4').hide();
		}

		reader.readAsDataURL(input.files[0]);
	}
}

$('label[for="imageUpload4"]').change(function() {
	readURL(this);

});

function readURL5(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		var div_id = $(input).attr('set-to');
		reader.onload = function(e) {
			$('#' + div_id).attr('src', e.target.result);
			$('label[for="imageUploadpreview5"]').css('background-image',
					'url(' + e.target.result + ')');
			$('#thumb5').hide();
		}

		reader.readAsDataURL(input.files[0]);
	}
}

$('label[for="imageUpload5"]').change(function() {
	readURL(this);

});
// ----------------------------------------Validacion de campos
// obligatorios--------------------------------------------

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
	// This function will display the specified tab of the form ...
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	// ... and fix the Previous/Next buttons:
	if (n == 0) {
		document.getElementById("prevBtn").style.display = "none";
	} else {
		document.getElementById("prevBtn").style.display = "inline";
	}
	if (n == (x.length - 1)) {
		document.getElementById("nextBtn").innerHTML = "ANUNCIAR";
		
		// document.getElementById("nextBtn").removeAttribute("onClick");
		// document.getElementById("nextBtn").type = "submit"
	} else {
		document.getElementById("nextBtn").innerHTML = "SIGUIENTE";
		
	}
	// ... and run a function that displays the correct step indicator:
	fixStepIndicator(n)
	
}


function nextPrev(n) {
	// This function will figure out which tab to display
	var x = document.getElementsByClassName("tab");
	// Exit the function if any field in the current tab is invalid:
	
	
	if (n == 1 && ($("#monto").val() == "") || ($("#inp1").val() == "")
			|| ($("#inp2").val() == "")
			|| ($("#expensas").attr('required') == "required") || 
			($("#gastosc").attr('required') == "required") || ($("#deposito").attr('required') == "required") 
			|| ($("#imageUpload1").attr('required') == "required") || ($("#imageUpload2").attr('required') == "required")
			|| ($("#imageUpload3").attr('required') == "required") || ($("#imageUpload4").attr('required') == "required")
			|| ($("#imageUpload5").attr('required') == "required"))
		if ($("#monto").val() == "") {
			window.alert("Falta ingresar un monto");
			return false;
		} else if ($("#inp1").val() == "") {
			window.alert("Falta ingresar la calle");
			return false;
		} else if ($("#inp2").val() == "") {
			window.alert("Falta ingresar la altura");
			return false;
		} else if (($("#expensas").val() == "")
				&& ($("#expensas").attr('required') == "required")) {
			window.alert("Falta ingresar las expensas");
			return false;
		} else if (($("#gastosc").val() == "")
				&& ($("#gastosc").attr('required') == "required")) {
			window.alert("Falta ingresar los gastos de contrato");
			return false;
		} else if (($("#deposito").val() == "")
				&& ($("#deposito").attr('required') == "required")) {
			window.alert("Falta ingresar los gastos de deposito");			
			return false;
		} else if(($("#imageUpload1").attr('required') == "required") || ($("#imageUpload2").attr('required') == "required")
				|| ($("#imageUpload3").attr('required') == "required") || ($("#imageUpload4").attr('required') == "required")
				|| ($("#imageUpload5").attr('required') == "required")){
			window.alert("Falta ingresar las cinco fotos");			
			return false;
		}
	
	// Hide the current tab:
	x[currentTab].style.display = "none";
	// Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
	if(currentTab == 2){
		$("#imageUpload1").attr("required", true)
		$("#imageUpload2").attr("required", true)
		$("#imageUpload3").attr("required", true)
		$("#imageUpload4").attr("required", true)
		$("#imageUpload5").attr("required", true)
	}
	if(currentTab == 3){
		window.alert("Registro creado con exito");
	}
	
	
	if($("#expensas").val() == ""){
		$("#inputExpensas").val("0");
	}else{
		$("#inputExpensas").val($("#expensas").val());
	}
	if($("#departamento").val() == ""){
		$("#departamento").val("-");
		$("#piso").val("-");
	}
	if($("#diretext").val() == ""){
		$("#diretext").val("Sin información adicional");
	}
	if($("#descripcion").val() == ""){
		$("#descripcion").val("Sin información adicional");
	}
	armarFecha();
	
	if (currentTab >= x.length) {
		// ...the form gets submitted:
		
		document.getElementById("form").submit();
		return false;
	}
	// Otherwise, display the correct tab:
	showTab(currentTab);
	
}

//---------------------------Make images property not required
document.getElementById('img1btn').onclick = function() {
	$("#imageUpload1").attr("required", false)
};
document.getElementById('img2btn').onclick = function() {
	$("#imageUpload2").attr("required", false)
};
document.getElementById('img3btn').onclick = function() {
	$("#imageUpload3").attr("required", false)
};
document.getElementById('img4btn').onclick = function() {
	$("#imageUpload4").attr("required", false)
};
document.getElementById('img5btn').onclick = function() {
	$("#imageUpload5").attr("required", false)
};

function fixStepIndicator(n) {
	// This function removes the "active" class of all steps...
	var i, x = document.getElementsByClassName("step");
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" active", "");
	}
	// ... and adds the "active" class to the current step:
	x[n].className += " active";
}

// ----------------------------- PAG1 Alta
// ------------------------------------------------------------------------
// ------------------------------Button Focus (Departamento & Casa)+ functions
// asociated ---------------------------------------------

// --------------------------
$('#inputExpensas').val("SIN EXPENSAS");
$("#expensas").prop('disabled', true);
$("#expensas").attr("required", false);
document.getElementById('sinexp').onclick = function() {
	$("#expensas").val('');
	$("#inputExpensas").val('SIN EXPENSAS');
	$("#expensas").prop('disabled', true);
	$("#expensas").attr("required", false)
};
document.getElementById('conexp').onclick = function() {
	$("#expensas").removeAttr('disabled');	
	$("#expensas").focus();
	$("#expensas").attr("required", true)
};







// ----------------------------------------------- PAG 2 Alta
// ---------------------------------------------------



document.getElementById('dno').onclick = function() {
	$("#deposito").val('');
	$("#deposito").prop('disabled', true);
};
document.getElementById('dsi').onclick = function() {
	$("#deposito").removeAttr('disabled');
	$("#deposito").focus();
};

// ------------------------------- Carga de info a los campos para el
// post----------------------
// ------------------------------- Tipo inmueble -------------------

$('#inputTipo').val('DEPARTAMENTO');
document.getElementById('casa').onclick = function() {
	$("#inputTipo").val('CASA');	
	$("#departamento").prop("disabled", true);
	$("#piso").prop("disabled", true);
};
document.getElementById('dpto').onclick = function() {
	$("#departamento").val('');
	$("#piso").val('');
	$('#inputTipo').val('DEPARTAMENTO');
	$("#departamento").removeAttr('disabled');
	$("#piso").removeAttr('disabled');
};

// ----------------------------------Cantidad ambientes
// ---------------------------------
$("#inputCantHamb").val('1');
document.getElementById('monoambiente').onclick = function() {
	$("#inputCantHamb").val('MONOAMBIENTE');
};
document.getElementById('1amb').onclick = function() {
	$("#inputCantHamb").val('1');
};
document.getElementById('2amb').onclick = function() {
	$("#inputCantHamb").val('2');
};
document.getElementById('3amb').onclick = function() {
	$("#inputCantHamb").val('3');
};
document.getElementById('4amb').onclick = function() {
	$("#inputCantHamb").val('4 O MAS');
};

// ------------------------------- Informacion Legal
// --------------------------------------
$("#inputGarante").val('NO');
document.getElementById('gsi').onclick = function() {
	$("#inputGarante").val('SI');
};
document.getElementById('gno').onclick = function() {
	$("#inputGarante").val('NO');
};

$("#inputEscribania").val('NO');
document.getElementById('esi').onclick = function() {
	$("#inputEscribania").val('SI');
};
document.getElementById('eno').onclick = function() {
	$("#inputEscribania").val('NO');
};

$("#inputContrato").val('NO');
document.getElementById('csi').onclick = function() {
	$("#inputContrato").val('SI');
};
document.getElementById('cno').onclick = function() {
	$("#inputContrato").val('NO');
};

$("#inputGastosContrato").val('NO');
$("#gastosc").prop('disabled', "true");
document.getElementById('gcsi').onclick = function() {
	$("#inputGastosContrato").val('SI');
	$("#gastosc").removeAttr('disabled');	
	$("#gastosc").focus();
	$("#gastosc").attr("required", true)
};
document.getElementById('gcno').onclick = function() {
	$("#inputGastosContrato").val('NO');	
	$("#gastosc").val('');	
	$("#gastosc").prop('disabled', true);
	$("#gastosc").attr("required", false)
};

$("#inputDepositoInicial").val('NO');
$("#deposito").prop('disabled', "true");
document.getElementById('dsi').onclick = function() {
	$("#inputDepositoInicial").val('SI');
	$("#deposito").removeAttr('disabled');	
	$("#deposito").focus();
	$("#deposito").attr("required", true)
};
document.getElementById('dno').onclick = function() {
	$("#inputDepositoInicial").val('NO');
	$("#deposito").val('');	
	$("#deposito").prop('disabled', true);
	$("#deposito").attr("required", false)
};

$("#inputBañoAdicional").val('NO');
document.getElementById('bsi').onclick = function() {
	$("#inputBañoAdicional").val('SI');
};

document.getElementById('bno').onclick = function() {
	$("#inputBañoAdicional").val('NO');
};

$("#inputGarage").val('NO');
document.getElementById('grsi').onclick = function() {
	$("#inputGarage").val('SI');
};
document.getElementById('grno').onclick = function() {
	$("#inputGarage").val('NO');
};

$("#inputBalcon").val('NO');
document.getElementById('lsi').onclick = function() {
	$("#inputBalcon").val('SI');
};
document.getElementById('lno').onclick = function() {
	$("#inputBalcon").val('NO');
};

$("#inputPatio").val('NO');
document.getElementById('psi').onclick = function() {
	$("#inputPatio").val('SI');
};
document.getElementById('pno').onclick = function() {
	$("#inputPatio").val('NO');
};
$("#descripcion").val("");

//------------------------------------Armar fecha---------------------------------------------

function armarFecha(){
	diaActual = new Date();

	var day = diaActual.getDate();
	var month = diaActual.getMonth()+1;
	var year = diaActual.getFullYear();

	fecha  = day + '/' + month + '/' + year;
	$("#inputFecha").val(fecha);
}