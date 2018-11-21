package com.interfin.backend.spring.rest;

import com.interfin.backend.spring.entity.StiriEntity;
import com.interfin.backend.spring.model.response.StiriResponse;
import com.interfin.backend.spring.repository.PageableStiriRepository;
import com.interfin.backend.spring.repository.StiriRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/stiri")
@CrossOrigin(origins = "*")
public class StiriController {

    @Autowired
    StiriRepository stiriRepository;

    @Autowired
    PageableStiriRepository pageableStiriRepository;

    @RequestMapping(path = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Page<StiriEntity> getStiri(Pageable pageable) {

        Page<StiriEntity> stiriList = pageableStiriRepository.findAll(pageable);

        return stiriList;
    }


    @RequestMapping(path="{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public StiriEntity getStireById(@PathVariable("id") Long id) {
        StiriEntity stire = stiriRepository.findById(id).orElseThrow(IllegalArgumentException::new);

        return stire;
    }

    @RequestMapping(path = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
    consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<StiriResponse> createStire(@RequestBody StiriEntity stiriEntity) {

        stiriRepository.save(stiriEntity);

        return new ResponseEntity<>(new StiriResponse(), HttpStatus.CREATED);
    }
}
