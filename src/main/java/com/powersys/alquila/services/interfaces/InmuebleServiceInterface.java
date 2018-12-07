/**
 * 
 */
package com.powersys.alquila.services.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.powersys.alquila.dtos.InmuebleDTO;
import com.powersys.alquila.dtos.PropertyDTO;
import com.powersys.alquila.domain.Property;

/**
 * @author Amadeo F. Garcia
 * userGit{AmadeoO}
 * emailGit{amadeo.fgarcia@gmail.com}
 */
public interface InmuebleServiceInterface {
	
	public boolean insertInmueble(InmuebleDTO inmueble);
	public List<Property> findAll();
	public boolean insertInmueble(PropertyDTO inmueble);
	
	
	public List<Property> findByType(String type);
	public List<Property> findByRoom(String room);
	
	
	
	
	List<Property> findByPrice10000(Integer price);
	List<Property> findByPrice15000(Integer price);
	List<Property> findByPrice5000(Integer price);
	
	
	
	
}
