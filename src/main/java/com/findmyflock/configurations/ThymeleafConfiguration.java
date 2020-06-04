package com.findmyflock.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import nz.net.ultraq.thymeleaf.LayoutDialect;



/**
 * @author alexminichino
 * ThymeleafConfiguration
 */
@Configuration
public class ThymeleafConfiguration {
    
    @Bean
    public LayoutDialect layoutDialect() {
        return new LayoutDialect();
    }    
}