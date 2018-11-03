package com.interfin.backend.spring.repository;

import com.interfin.backend.spring.entity.StiriEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PageableStiriRepository extends PagingAndSortingRepository<StiriEntity, Long> {

    Page<StiriEntity> findById(Long id, Pageable pageable);
}
