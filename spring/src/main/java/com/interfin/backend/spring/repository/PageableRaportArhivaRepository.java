package com.interfin.backend.spring.repository;

import com.interfin.backend.spring.entity.RaportPiataArhiva;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PageableRaportArhivaRepository extends PagingAndSortingRepository<RaportPiataArhiva, Long> {
    Page<RaportPiataArhiva> findByTip(String tip, Pageable pageable);
}
