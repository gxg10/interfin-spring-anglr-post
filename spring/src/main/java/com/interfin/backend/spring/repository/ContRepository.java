package com.interfin.backend.spring.repository;


import com.interfin.backend.spring.entity.Cont;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContRepository extends JpaRepository<Cont, Long> {
}
