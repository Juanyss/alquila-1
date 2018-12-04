package com.powersys.alquila.repositories;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.powersys.alquila.domain.Property;
import com.powersys.alquila.domain.PropertyDetail;

@Repository
public interface PlacesRepository extends CrudRepository<Property, Long> {
	Property findById(Long id);
	
	
	List<Property> findAll(Sort sortByIdDesc);

	List<Property> findByType(String type);
	
	List<Property> findByRoom(String room);
	
	
}




