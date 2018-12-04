package com.interfin.backend.spring.rest;

import com.interfin.backend.spring.config.MailSender;
import com.interfin.backend.spring.entity.Cont;
import com.interfin.backend.spring.model.response.ContResponse;
import com.interfin.backend.spring.repository.ContRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/cont")
@CrossOrigin(origins = "*")
public class ContController {

    @Autowired
    ContRepository contRepository;

    @Autowired
    @Qualifier("javamail")
    MailSender mailSender;

    @RequestMapping(path = "", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<Cont> getAllCont() {
        List<Cont> list = contRepository.findAll();

        return list;
    }

    @RequestMapping(path = "", method = RequestMethod.POST,
    produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
    consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<ContResponse> createCont(@RequestBody @Valid Cont cont) {
        contRepository.save(cont);

        String from = "george.brande@gmail.com";
        String to = "george.brande@gmail.com";
        String subject = "Cont nou creat";
        String body = "Un nou cont a fost creat";

        mailSender.sendMail(from, to, subject, body);

        return new ResponseEntity<>(new ContResponse(), HttpStatus.CREATED);
    }


}
