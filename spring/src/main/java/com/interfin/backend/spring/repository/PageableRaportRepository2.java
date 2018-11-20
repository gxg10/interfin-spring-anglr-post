package com.interfin.backend.spring.repository;

import com.interfin.backend.spring.entity.RaportPiataNew;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PageableRaportRepository2 extends PagingAndSortingRepository<RaportPiataNew, Long> {
    Page<RaportPiataNew> findByTip(String tip, Pageable pageable);
}
