package com.interfin.backend.spring.repository;

import com.interfin.backend.spring.entity.RaportPiataArhiva;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface RaportArhivaRepository extends CrudRepository<RaportPiataArhiva, Long> {

    List<RaportPiataArhiva> findByData(String data);

    @Query("select r from RaportPiataArhiva r where r.data >= :start and r.data <= :end")
    List<RaportPiataArhiva> findByDateInterval(
            @Param("start") String start,
            @Param("end") String end);
}