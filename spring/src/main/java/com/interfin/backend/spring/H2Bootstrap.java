package com.interfin.backend.spring;

import com.interfin.backend.spring.entity.RaportPiata;
import com.interfin.backend.spring.entity.StiriEntity;
import com.interfin.backend.spring.repository.RaportRepository;
import com.interfin.backend.spring.repository.StiriRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

//@Component
public class H2Bootstrap implements CommandLineRunner {

    @Autowired
    StiriRepository stiriRepository;

    @Autowired
    RaportRepository raportRepository;

    @Override
    public void run(String... args) throws Exception {

//        stiriRepository.save(new StiriEntity(LocalDate.of(2018, 8, 22),
//                "Romgaz cea mai buna", "este ca mia profitabila societate din " +
//                "industrie"));
//        stiriRepository.save(new StiriEntity(LocalDate.of(2017, 11, 22),
//                "Hidroelectrica scandalul baietilor destepti din energie",
//                "cea mai corupta companie. Exista multiple exemple de coruptie in cadrul companiei"));
//        stiriRepository.save(new StiriEntity(LocalDate.of(2015, 2, 15),
//                "Fondul Proprietatea vinde tot si pleaca", "ceea ce toti analistii" +
//                "asteptau s-a intamplat. FP vinde si se delitesteaza"));
//
//        Iterable<StiriEntity> itr = stiriRepository.findAll();
//        for(StiriEntity s: itr) {
//            System.out.println(s.getTitlu());
//        }
        raportRepository.save(new RaportPiata("Raport zilnic 23 Noiembrie 2018",
                LocalDate.of(2018, 11, 23), "zilnic",
                "Raport zilnic: valoare tranzactii, evolutia indicilor bursieri, evolutia cursului valutar, Top 10 BVB si Top 10 BER variatie procentuala.",
                "http://localhost:8080/download/RAPORT%20PIATA%20ZILNIC%2023.11.2018.pdf"));
        raportRepository.save(new RaportPiata("Raport zilnic 22 Noiembrie 2018",
                LocalDate.of(2018, 11, 22), "zilnic",
                "Raport zilnic: valoare tranzactii, evolutia indicilor bursieri, evolutia cursului valutar, Top 10 BVB si Top 10 BER variatie procentuala.",
                "http://localhost:8080/download/RAPORT%20PIATA%20ZILNIC%2022.11.2018.pdf"));
        raportRepository.save(new RaportPiata("Raport zilnic 21 Noiembrie 2018",
                LocalDate.of(2018, 11, 23), "zilnic",
                "Raport zilnic: valoare tranzactii, evolutia indicilor bursieri, evolutia cursului valutar, Top 10 BVB si Top 10 BER variatie procentuala.",
                "http://localhost:8080/download/RAPORT%20PIATA%20ZILNIC%2021.11.2018.pdf"));
        raportRepository.save(new RaportPiata("Raport saptamanl 22.10.2018-26.10.2018",
                LocalDate.of(2018, 10, 26), "saptamanal",
                "Raport zilnic: valoare tranzactii, evolutia indicilor bursieri, evolutia cursului valutar, Top 10 BVB si Top 10 BER variatie procentuala.",
                "http://localhost:8080/download/RAPORT SAPTAMANAL 22.10.2018-26.10.2018.pdf"));
        raportRepository.save(new RaportPiata("Raport lunar Septembrie 2018",
                LocalDate.of(2018, 10, 15), "lunar",
                "Raport zilnic: valoare tranzactii, evolutia indicilor bursieri, evolutia cursului valutar, Top 10 BVB si Top 10 BER variatie procentuala.",
                "http://localhost:8080/download/MarketReportSeptembrie2018.pdf"));


        Iterable<RaportPiata> itr2 = raportRepository.findAll();
        for (RaportPiata r: itr2) {
            System.out.println(r.getTitlu());
        }

    }
}