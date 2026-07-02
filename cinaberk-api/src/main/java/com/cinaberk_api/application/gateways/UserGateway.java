package com.cinaberk_api.application.gateways;

import com.cinaberk_api.domain.entities.User;

import java.util.Optional;
import java.util.UUID;

public interface UserGateway {
    User save(User user);
    Optional<User> findByEmail(String email);
    Optional<User> findById(UUID id);
    boolean existsByEmail(String email);
}
