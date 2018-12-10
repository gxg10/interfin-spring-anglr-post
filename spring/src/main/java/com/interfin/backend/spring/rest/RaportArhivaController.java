package com.interfin.backend.spring.rest;


import com.interfin.backend.spring.entity.RaportPiataArhiva;
import com.interfin.backend.spring.repository.PageableRaportArhivaRepository;
import com.interfin.backend.spring.repository.RaportArhivaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/rapoarte/arhiva")
@CrossOrigin(origins = "*")
public class RaportArhivaController {

    @Autowired
    RaportArhivaRepository raportArhivaRepository;

    @Autowired
    PageableRaportArhivaRepository pageableRaportRepository2;

    @RequestMapping(path = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<RaportPiataArhiva> getAllrapoarte(Pageable pageable) {
        Page<RaportPiataArhiva> list = pageableRaportRepository2.findAll(pageable);

        return list;
    }

    @RequestMapping(value = "data", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
    params = "data")
    public List<RaportPiataArhiva> getRaportByDate(
            @RequestParam(value = "data", required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            String date) {
        List<RaportPiataArhiva> list = raportArhivaRepository.findByData(date);

        return list;
    }

    @RequestMapping(value = "data", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<RaportPiataArhiva> getRaportByInterval(
            @RequestParam(value = "start", required = false)
            String start,
            @RequestParam(value = "end", required = false)
            String end) {
        List<RaportPiataArhiva> list = raportArhivaRepository.findByDateInterval(start, end);

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
