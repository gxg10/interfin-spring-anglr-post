package com.interfin.backend.spring.rest;


import com.interfin.backend.spring.entity.RaportPiataNew;
import com.interfin.backend.spring.repository.PageableRaportRepository2;
import com.interfin.backend.spring.repository.RaportRepository2;
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
@RequestMapping("/rapoartenew")
@CrossOrigin(origins = "*")
public class RaportController2 {

    @Autowired
    RaportRepository2 raportRepository2;

    @Autowired
    PageableRaportRepository2 pageableRaportRepository2;

//    @RequestMapping(path = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    public List<RaportPiataNew> getAllRapoarte() {
//        Iterable<RaportPiataNew> itr = raportRepository2.findAll();
//        List<RaportPiataNew> list = new ArrayList<>();
//        itr.forEach(list::add);
//
//        return list;
//    }

    @RequestMapping(path = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<RaportPiataNew> getAllrapoarte(Pageable pageable) {
        Page<RaportPiataNew> list = pageableRaportRepository2.findAll(pageable);

        return list;
    }

    @RequestMapping(path = "/zilnic", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<RaportPiataNew> getRaportZilnic(Pageable pageable) {
        Page<RaportPiataNew> rapoarteList = pageableRaportRepository2.findByTip("zilnic",pageable);

        return rapoarteList;
    }

    @RequestMapping(path = "/saptamanal", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<RaportPiataNew> getRaportSaptamanal(Pageable pageable) {
        Page<RaportPiataNew> rapoarteList = pageableRaportRepository2.findByTip("saptamanal", pageable);

        return rapoarteList;
    }

    @RequestMapping(path = "/lunar", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<RaportPiataNew> getRaporLunar(Pageable pageable) {
        Page<RaportPiataNew> rapoarteList = pageableRaportRepository2.findByTip("lunar", pageable);

        return rapoarteList;
    }
}
