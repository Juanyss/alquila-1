package com.powersys.alquila.webControllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.powersys.alquila.dtos.PropertyDTO;
import com.powersys.alquila.services.implementations.InmuebleService;
import com.powersys.alquila.services.implementations.StorageServise;

@Controller
public class InmuebleWebVC {

	private InmuebleService inmuebleService;	
	
	private StorageServise image;
	
	

	public InmuebleWebVC(InmuebleService service, StorageServise image) {
		this.inmuebleService = service;
		this.image = image;
	}

	@RequestMapping(value = "/cargarInmueble", method = RequestMethod.GET)
	public String cargarInmuebleForm(Model model) {
		model.addAttribute("inmueble", new PropertyDTO());
		return "form3";
	}
	
	@PostMapping("/cargarInmueble")
	public String altaInmueble(@ModelAttribute PropertyDTO inmuebleDTO, Model model) {
		inmuebleDTO.setPath(this.image.store(inmuebleDTO.getImage()));
		inmuebleDTO.setPath2(this.image.store(inmuebleDTO.getImage2()));
		inmuebleDTO.setPath3(this.image.store(inmuebleDTO.getImage3()));
		inmuebleDTO.setPath4(this.image.store(inmuebleDTO.getImage4()));
		inmuebleDTO.setPath5(this.image.store(inmuebleDTO.getImage5()));
		this.inmuebleService.insertInmueble(inmuebleDTO);
		return "redirect:/";
	}	

	@GetMapping(value = "/")
	public String home(Model model) {
		model.addAttribute("inmueble", this.inmuebleService.findAll());
		return "home1";
	}
	
	@RequestMapping (value= "/index", method = RequestMethod.GET)	
	public String resultadoAll (Model model) {		
		model.addAttribute("inmueble", this.inmuebleService.findAll());
		return "index";
	}
	
	@RequestMapping (value= "/index100", method = RequestMethod.GET)	
	public String resultadoTipo1 (Model model) {		
		model.addAttribute("inmueble", this.inmuebleService.findByType("CASA"));
		return "index";
	}
	
	@RequestMapping (value= "/index200", method = RequestMethod.GET)	
	public String resultadoTipo2 (Model model) {
		model.addAttribute("inmueble", this.inmuebleService.findByType("DEPARTAMENTO"));
		return "index";
	}
	
	
	
	@RequestMapping (value= "/index00M", method = RequestMethod.GET)	
	public String resultadoRoomM (Model model) {
		model.addAttribute("inmueble", this.inmuebleService.findByRoom("MONOAMBIENTE"));
		return "index";
	}
	
	@RequestMapping (value= "/index001", method = RequestMethod.GET)	
	public String resultadoRoom1 (Model model) {
		model.addAttribute("inmueble", this.inmuebleService.findByRoom("1"));
		return "index";
	}
	
	@RequestMapping (value= "/index002", method = RequestMethod.GET)	
	public String resultadoRoom2 (Model model) {
		model.addAttribute("inmueble", this.inmuebleService.findByRoom("2"));
		return "index";
	}
	@RequestMapping (value= "/index003", method = RequestMethod.GET)	
	public String resultadoRoom3 (Model model) {
		model.addAttribute("inmueble", this.inmuebleService.findByRoom("3"));
		return "index";
	}
	@RequestMapping (value= "/index004", method = RequestMethod.GET)	
	public String resultadoRoom4 (Model model) {
		model.addAttribute("inmueble", this.inmuebleService.findByRoom("4 O MAS"));
		return "index";
	}
	
	
	
	
	
	
	@RequestMapping (value= "/terminosYcondic", method = RequestMethod.GET)	
	public String terminos (Model model) {
		return "terminosYcondic";
	}
	
	
	
}
