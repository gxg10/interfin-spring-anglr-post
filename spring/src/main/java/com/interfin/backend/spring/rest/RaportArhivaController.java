package com.interfin.backend.spring.rest;


import com.interfin.backend.spring.entity.RaportPiataArhiva;
import com.interfin.backend.spring.repository.PageableRaportArhivaRepository;
import com.interfin.backend.spring.repository.RaportArhivaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rapoartenew")
@CrossOrigin(origins = "*")
public class RaportArhivaController {

    @Autowired
    RaportArhivaRepository raportRepository2;

    @Autowired
    PageableRaportArhivaRepository pageableRaportRepository2;

//    @RequestMapping(path = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    public List<RaportPiataArhiva> getAllRapoarte() {
//        Iterable<RaportPiataArhiva> itr = raportRepository2.findAll();
//        List<RaportPiataArhiva> list = new ArrayList<>();
//        itr.forEach(list::add);
//
//        return list;
//    }

    @RequestMapping(path = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<RaportPiataArhiva> getAllrapoarte(Pageable pageable) {
        Page<RaportPiataArhiva> list = pageableRaportRepository2.findAll(pageable);

        return list;
    }

    @RequestMapping(path = "/zilnic", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<RaportPiataArhiva> getRaportZilnic(Pageable pageable) {
        Page<RaportPiataArhiva> rapoarteList = pageableRaportRepository2.findByTip("zilnic",pageable);

        return rapoarteList;
    }

    @RequestMapping(path = "/saptamanal", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<RaportPiataArhiva> getRaportSaptamanal(Pageable pageable) {
        Page<RaportPiataArhiva> rapoarteList = pageableRaportRepository2.findByTip("saptamanal", pageable);

        return rapoarteList;
    }

    @RequestMapping(path = "/lunar", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<RaportPiataArhiva> getRaporLunar(Pageable pageable) {
        Page<RaportPiataArhiva> rapoarteList = pageableRaportRepository2.findByTip("lunar", pageable);

        return rapoarteList;
    }
}
