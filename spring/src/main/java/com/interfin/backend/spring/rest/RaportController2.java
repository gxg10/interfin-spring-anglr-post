package com.interfin.backend.spring.rest;


import com.interfin.backend.spring.entity.RaportPiataNew;
import com.interfin.backend.spring.repository.RaportRepository2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/rapoartenew")
@CrossOrigin(origins = "*")
public class RaportController2 {

    @Autowired
    RaportRepository2 raportRepository2;

    @RequestMapping(path = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<RaportPiataNew> getAllRapoarte() {
        Iterable<RaportPiataNew> itr = raportRepository2.findAll();
        List<RaportPiataNew> list = new ArrayList<>();
        itr.forEach(list::add);

        return list;
    }
}
