package com.interfin.backend.spring.rest;

import com.interfin.backend.spring.entity.StiriEntity;
import com.interfin.backend.spring.model.response.StiriResponse;
import com.interfin.backend.spring.repository.StiriRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    @RequestMapping(path = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<StiriEntity> getStiri() {

        Iterable<StiriEntity> itr = stiriRepository.findAll();
        List<StiriEntity> list = new ArrayList<>();
        itr.forEach(list::add);

        return list;
    }

    @RequestMapping(path = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
    consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<StiriResponse> createStire(@RequestBody StiriEntity stiriEntity) {

        stiriRepository.save(stiriEntity);

        return new ResponseEntity<>(new StiriResponse(), HttpStatus.CREATED);
    }
}
