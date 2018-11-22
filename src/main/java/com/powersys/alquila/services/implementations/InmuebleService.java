package com.powersys.alquila.services.implementations;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.powersys.alquila.domain.Address;
import com.powersys.alquila.domain.Detail;
import com.powersys.alquila.domain.LegalDetail;
import com.powersys.alquila.domain.PlaceType;
import com.powersys.alquila.domain.Property;
import com.powersys.alquila.domain.PropertyDetail;
import com.powersys.alquila.dtos.InmuebleDTO;
import com.powersys.alquila.dtos.PropertyDTO;
import com.powersys.alquila.repositories.PlacesRepository;
import com.powersys.alquila.services.interfaces.InmuebleServiceInterface;

/**
 *
 * @author Amadeo F. Garcia
 * userGit{AmadeoO}
 * emailGit{amadeo.fgarcia@gmail.com}
 */

@Service
public class InmuebleService implements InmuebleServiceInterface{

	@Autowired
	private PlacesRepository propertyRepository;

	@Override
	public boolean insertInmueble(PropertyDTO inmueble) {
		Property p = new Property();
		
		//List<Detail> details = new ArrayList<>();
		//List<Detail> legals = new ArrayList<Detail>();
		//p.setDetails(details);
		//p.setLegals(legals);
		Address a = new Address();
		PropertyDetail pd = new PropertyDetail();
		LegalDetail pl = new LegalDetail();
		
		a.setStreet(inmueble.getaStreet());
		a.setNumber(inmueble.getaNumber());
		a.setFloor(inmueble.getaFloor());
		a.setApartment(inmueble.getaApartment());
		a.setAditionalInfo(inmueble.getAditionalBathroom());
		p.setExpenses(inmueble.getExpenses());
		p.setExpensesValue(inmueble.getContractExpensesValue());
		p.setPrice(inmueble.getPrice());
		p.setImage(inmueble.getPath());
		pd.setAditionalBathroom(inmueble.getAditionalBathroom());
		pd.setGarage(inmueble.getGarage());
		pd.setYard(inmueble.getYard());
		pd.setBalcony(inmueble.getBalcony());
		pd.setAditionalInfo(inmueble.getAditionalProInfo());
		pl.setGuarantor(inmueble.getGuarantor());
		pl.setContract(inmueble.getContract());
		pl.setNotary(inmueble.getNotary());
		pl.setContractExpenses(inmueble.getContractExpenses());
		pl.setContractExpensesValue(inmueble.getContractExpensesValue());
		pl.setInitialDeposit(inmueble.getInitialDeposit());
		pl.setInitialDepositValue(inmueble.getInitialDepositValue());
		pl.setAditionalInfo(inmueble.getAditionalLegInfo());
		//Detail d = new Detail();
		//p.getDetails().add(d);
		//Detail d2 = new Detail();
		//p.getDetails().add(d2);
		p.setAdress(a);
		p.setPropertyDetail(pd);
		p.setLegalDetail(pl);
		p.setType(inmueble.getPlaceType());
		this.propertyRepository.save(p);
		return true;
	}

	@Override
	public List<Property> findAll() {
		return (List<Property>) this.propertyRepository.findAll();
	}

	@Override
	public boolean insertInmueble(InmuebleDTO inmueble) {
		// TODO Auto-generated method stub
		return false;
	}

	public Property find(String id) {
		return this.propertyRepository.findById(Long.parseLong(id));
	}

	

	
}
