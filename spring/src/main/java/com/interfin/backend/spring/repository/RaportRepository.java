package com.interfin.backend.spring.repository;

import com.interfin.backend.spring.entity.RaportPiata;
import org.apache.tomcat.jni.Local;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface RaportRepository extends CrudRepository<RaportPiata, Long> {

    List<RaportPiata> findByData(LocalDate date);

    @Query("select r from RaportPiata r where r.data >= :start and r.data <= :end")
    List<RaportPiata> findCustom(
            @Param("start") LocalDate start,
            @Param("end") LocalDate end);
}
