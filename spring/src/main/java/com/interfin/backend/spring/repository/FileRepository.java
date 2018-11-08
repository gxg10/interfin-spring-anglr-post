package com.interfin.backend.spring.repository;

import com.interfin.backend.spring.model.file.FileModel;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface FileRepository extends JpaRepository<FileModel, Long> {
    public FileModel findByName(String name);
}
