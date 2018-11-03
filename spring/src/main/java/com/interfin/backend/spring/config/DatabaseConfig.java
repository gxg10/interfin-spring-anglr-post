package com.interfin.backend.spring.config;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableJpaRepositories("com.interfin.backend.spring.repository")
@EnableTransactionManagement
public class DatabaseConfig {
}
