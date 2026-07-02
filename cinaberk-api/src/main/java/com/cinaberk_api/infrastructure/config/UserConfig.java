package com.cinaberk_api.infrastructure.config;

import com.cinaberk_api.application.gateways.UserGateway;
import com.cinaberk_api.infrastructure.gateways.UserRepositoryGateway;
import com.cinaberk_api.infrastructure.persistence.user.UserEntityMapper;
import com.cinaberk_api.infrastructure.persistence.user.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {
    @Bean
    public UserGateway userGateway(
            UserRepository userRepository,
            UserEntityMapper userEntityMapper
    ) {
        return new UserRepositoryGateway(userRepository, userEntityMapper);
    }

    @Bean
    public UserEntityMapper userEntityMapper() {
        return new UserEntityMapper();
    }
}
