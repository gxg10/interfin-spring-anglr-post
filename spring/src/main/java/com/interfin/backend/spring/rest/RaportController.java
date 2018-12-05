package com.interfin.backend.spring.rest;

import com.interfin.backend.spring.entity.RaportPiata;
import com.interfin.backend.spring.repository.PageableRaportRepository;
import com.interfin.backend.spring.repository.RaportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/rapoarte")
@CrossOrigin(origins = "*")
public class RaportController {

    @Autowired
    RaportRepository raportRepository;

    @Autowired
    PageableRaportRepository pageableRaportRepository;


    @RequestMapping(path = "", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<RaportPiata> getAllRapoarte(Pageable pageable) {

        Page<RaportPiata> list = pageableRaportRepository.findAll(pageable);

//        Iterable<RaportPiata> itr = raportRepository.findAll();
//        List<RaportPiata> list = new ArrayList<>();
//        itr.forEach(list::add);

        return list;
    }

    @RequestMapping(path = "/zilnic", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<RaportPiata>  getRaportZilnic(Pageable pageable) {
        Page<RaportPiata> rapoarteList = pageableRaportRepository.findBytipRaport("zilnic", pageable);

        return rapoarteList;
    }

    @RequestMapping(path = "/saptamanal", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<RaportPiata> getRaportSaptamanal(Pageable pageable) {
        Page<RaportPiata> rapoarteList = pageableRaportRepository.findBytipRaport("saptamanal", pageable);

        return rapoarteList;
    }

    @RequestMapping(path = "/lunar", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<RaportPiata> getRaportLunar(Pageable pageable) {

//        Page<RaportPiata> rapoarteList = pageableRaportRepository.findAll(pageable);
        Page<RaportPiata> rapoarteList = pageableRaportRepository.findBytipRaport("lunar", pageable);

        return rapoarteList;
    }

}
