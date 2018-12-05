package com.interfin.backend.spring;

import com.interfin.backend.spring.storage.StorageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.annotation.Resource;

@SpringBootApplication
@EnableAutoConfiguration
@EnableTransactionManagement
@ComponentScan
public class Application implements CommandLineRunner {

    @Resource
    StorageService storageService;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
//        storageService.deleteAll();
//        storageService.init();
    }
}
