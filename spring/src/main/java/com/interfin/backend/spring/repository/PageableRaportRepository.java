package com.interfin.backend.spring.repository;

import com.interfin.backend.spring.entity.RaportPiata;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PageableRaportRepository extends PagingAndSortingRepository<RaportPiata, Long> {
    Page<RaportPiata> findBytipRaport(String tipRaport, Pageable pageable);
}
