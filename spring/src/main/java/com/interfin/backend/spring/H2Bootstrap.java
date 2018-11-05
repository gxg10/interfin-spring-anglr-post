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

        stiriRepository.save(new StiriEntity(LocalDate.of(2018, 8, 22),
                "Romgaz cea mai buna", "este ca mia profitabila societate din " +
                "industrie"));
        stiriRepository.save(new StiriEntity(LocalDate.of(2017, 11, 22),
                "Hidroelectrica scandalul baietilor destepti din energie",
                "cea mai corupta companie. Exista multiple exemple de coruptie in cadrul companiei"));
        stiriRepository.save(new StiriEntity(LocalDate.of(2015, 2, 15),
                "Fondul Proprietatea vinde tot si pleaca", "ceea ce toti analistii" +
                "asteptau s-a intamplat. FP vinde si se delitesteaza"));

        Iterable<StiriEntity> itr = stiriRepository.findAll();
        for(StiriEntity s: itr) {
            System.out.println(s.getTitlu());
        }
        raportRepository.save(new RaportPiata("Raport zilnic 15",
                LocalDate.of(2017, 10, 2), "zilnic",
                "astazi au fost tranzactii multe"));
        raportRepository.save(new RaportPiata("Raport zilnic 1", LocalDate.now(), "zilnic",
                "astazi au fost tranzactii multe"));
        raportRepository.save(new RaportPiata("Raport Saptamanal 1", LocalDate.of(2015, 2, 22), "saptamanal",
                "in aceasta saptamana lichidiatea este redusa"));
        raportRepository.save(new RaportPiata("Raport Lunar1",  LocalDate.of(2016, 12, 22), "lunar",
                "luna aceasta avem o crestere sustinuta a indicilor"));
        raportRepository.save(new RaportPiata("Raport zilnic 2",  LocalDate.of(2015, 8, 15), "zilnic",
                "astazi au fost tranzactii multe"));
        raportRepository.save(new RaportPiata("Raport Saptamanal 2",  LocalDate.of(2014, 2, 12), "saptamanal",
                "in aceasta saptamana lichidiatea este redusa"));
        raportRepository.save(new RaportPiata("Raport Lunar 2",  LocalDate.of(2017, 11, 2), "lunar",
                "luna aceasta avem o crestere sustinuta a indicilor"));
        raportRepository.save(new RaportPiata("Raport zilnic3 ",  LocalDate.of(2018, 5, 12), "zilnic",
                "astazi au fost tranzactii multe"));
        raportRepository.save(new RaportPiata("Raport Saptamanal 3",  LocalDate.of(2017, 2, 7), "saptamanal",
                "in aceasta saptamana lichidiatea este redusa"));
        raportRepository.save(new RaportPiata("Raport Lunar 3 ",  LocalDate.of(2018, 1, 17), "lunar",
                "luna aceasta avem o crestere sustinuta a indicilor"));
        raportRepository.save(new RaportPiata("Raport zilnic 4",  LocalDate.of(2007, 1, 15), "zilnic",
                "astazi au fost tranzactii multe"));
        raportRepository.save(new RaportPiata("Raport Saptamanal 4",  LocalDate.of(2010, 2, 22), "saptamanal",
                "in aceasta saptamana lichidiatea este redusa"));
        raportRepository.save(new RaportPiata("Raport Lunar 4",  LocalDate.of(2019, 2, 22), "lunar",
                "luna aceasta avem o crestere sustinuta a indicilor"));
        raportRepository.save(new RaportPiata("Raport zilnic 5 ",  LocalDate.of(2011, 7, 30), "zilnic",
                "astazi au fost tranzactii multe"));
        raportRepository.save(new RaportPiata("Raport Saptamanal 5 ",  LocalDate.of(2012, 8, 22), "saptamanal",
                "in aceasta saptamana lichidiatea este redusa"));
        raportRepository.save(new RaportPiata("Raport Lunar 5", LocalDate.of(2018, 3, 12), "lunar",
                "luna aceasta avem o crestere sustinuta a indicilor"));
        Iterable<RaportPiata> itr2 = raportRepository.findAll();
        for (RaportPiata r: itr2) {
            System.out.println(r.getTitlu());
        }

    }
}
