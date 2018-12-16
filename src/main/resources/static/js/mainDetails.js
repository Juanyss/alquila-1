var wrap = $("#wrap");
var back = $("#back");
wrap.on("scroll", function(e) {

  if (this.scrollTop >147) {
    wrap.addClass("fix-search");
    back.addClass("topfix");
  } else {
    wrap.removeClass("fix-search");
    back.removeClass("topfix");
  }

});


//-------------------------------------------Informacion Legal-----------------------------------------------
if($("#gr").attr("value") == "SI"){
	$("#grsi2").css("display", "none")
}else{
	$("#grsi1").css("display", "none")
}

if($("#esi").attr("value") == "SI"){
	$("#esi2").css("display", "none")
}else{
	$("#esi1").css("display", "none")
}

if($("#csi").attr("value") == "SI"){
	$("#csi2").css("display", "none")
}else{
	$("#csi1").css("display", "none")
}

if($("#gcsi").attr("value") == "SI"){
	$("#gcsi2").css("display", "none")
}else{
	$("#gcsi1").css("display", "none")
	$("#spanGC").css("display", "none")
	
}

if($("#dsi").attr("value") == "SI"){
	$("#dsi2").css("display", "none")
}else{
	$("#dsi1").css("display", "none")
	$("#spanD").css("display", "none")
}

//-------------------------------------------Detalles de propiedad-------------------------------------------
if($("#banoad").attr("value") == "NO"){
	$("#spanBanoad").attr("class", "iconx")
}
if($("#garage").attr("value") == "NO"){
	$("#spanGarage").attr("class", "iconx")
}
if($("#balcon").attr("value") == "NO"){
	$("#spanBalcon").attr("class", "iconx")
}
if($("#patio").attr("value") == "NO"){
	$("#spanPatio").attr("class", "iconx")
}


if($("#AdInf").attr("value") != "Sin información adicional"){
	$("#infoLegal").css("display", "none");
	$("#divDesc1").css("color","black");
	$("#divDesc1").css("font-size","0.8rem");
	$("#divDesc1").css("line-height","1.6");
	$("#divDesc1").css("margin-left","90px");
}

if(($("#spanDpto2").attr("value") == "") || ($("#spanDpto2").attr("value") == "-") && ($("#spanPiso2").attr("value") == "") || ($("#spanPiso2").attr("value") == "-")){
	$("#spanDpto1").css("display", "none");
	$("#spanDpto2").css("display", "none");
	$("#spanPiso1").css("display", "none");
	$("#spanPiso2").css("display", "none");
	
}

if(($("#infoDescrip").attr("value") != "Sin información adicional")){
	$("#infoDescr").css("display", "none");
	$("#divDesc").css("color","black");
	$("#divDesc").css("font-size","0.8rem");
	$("#divDesc").css("line-height","1.6");
	$("#divDesc").css("margin-left","90px");
}