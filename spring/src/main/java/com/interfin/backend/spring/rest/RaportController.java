package com.interfin.backend.spring.rest;

import com.interfin.backend.spring.entity.RaportPiata;
import com.interfin.backend.spring.repository.PageableRaportRepository;
import com.interfin.backend.spring.repository.RaportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
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
    public Page<RaportPiata> getAllRapoartePage(Pageable pageable) {

        Page<RaportPiata> list = pageableRaportRepository.findAll(pageable);

        return list;
    }

    @RequestMapping(path = "data", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE, params = "data")
    public List<RaportPiata> getRaportByDate(
            @RequestParam(value = "data", required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
                    LocalDate date) {
        List<RaportPiata> list = raportRepository.findByData(date);

        return list;
    }

    @RequestMapping(path = "data", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<RaportPiata> getRaportByDateInterval(
            @RequestParam(value = "start", required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start,
            @RequestParam(value = "end", required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate end) {
        List<RaportPiata> list = raportRepository.findByDateInterval(start, end);

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

        Page<RaportPiata> rapoarteList = pageableRaportRepository.findBytipRaport("lunar", pageable);

        return rapoarteList;
    }

}
