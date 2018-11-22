/**
 * 
 */
package com.powersys.alquila.restControllers;

import java.io.IOException;
import java.util.List;

import org.springframework.core.io.FileSystemResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.powersys.alquila.domain.Property;
import com.powersys.alquila.dtos.InmuebleDTO;
import com.powersys.alquila.services.implementations.InmuebleService;


/**
 * @author Amadeo F. Garcia
 * userGit{AmadeoO}
 * email{amadeo.fgarcia@gmail.com}
 */

@RestController
public class InmuebleRestController {
	
	private InmuebleService inmuebleService;
	
	public InmuebleRestController(InmuebleService service) {
		this.inmuebleService = service;
	}
		
	
	
	@GetMapping("/api/mostrarInmuebles")
	public List<InmuebleDTO> getInmuebles(){
		return null;
	}
	
	@GetMapping("/image/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable("id") String id) throws IOException {
    	Property p = this.inmuebleService.find(id);
        String imagePath = p.getImage();
        FileSystemResource fileSystemResources = new FileSystemResource("C:/Users/Public/Documents/" + imagePath);
        byte[] bytes = StreamUtils.copyToByteArray(fileSystemResources.getInputStream());
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(bytes);
}

}
