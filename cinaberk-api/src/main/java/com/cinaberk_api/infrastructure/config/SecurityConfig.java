package com.cinaberk_api.infrastructure.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        return http.csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth ->
                                auth.requestMatchers("/auth/**").permitAll()
                                        .requestMatchers(HttpMethod.GET, "/cinebark-api/movies/**").permitAll()
                                        .requestMatchers(HttpMethod.GET, "/cinebark-api/rooms/**").permitAll()
                                        .requestMatchers("/cinebark-api/movies/**").hasRole("ADMIN")
                                        .requestMatchers("/cinebark-api/rooms/**").hasRole("ADMIN")
                                        .anyRequest().authenticated()
                        )
                .formLogin(form -> form.disable())
                .build();
    }
}
