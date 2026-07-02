package com.cinaberk_api.infrastructure.gateways;

import com.cinaberk_api.application.gateways.UserGateway;
import com.cinaberk_api.domain.entities.User;
import com.cinaberk_api.infrastructure.persistence.user.UserEntity;
import com.cinaberk_api.infrastructure.persistence.user.UserEntityMapper;
import com.cinaberk_api.infrastructure.persistence.user.UserRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

public class UserRepositoryGateway implements UserGateway {
    private final UserRepository userRepository;
    private final UserEntityMapper userEntityMapper;

    public UserRepositoryGateway(UserRepository userRepository, UserEntityMapper userEntityMapper) {
        this.userRepository = userRepository;
        this.userEntityMapper = userEntityMapper;
    }

    @Transactional
    @Override
    public User save(User user) {
        UserEntity savedUser = userRepository.save(userEntityMapper.fromDomain(user));
        return userEntityMapper.toDomain(savedUser);
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email.trim().toLowerCase())
                .map(userEntityMapper::toDomain);
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findById(UUID id) {
        return userRepository.findById(id)
                .map(userEntityMapper::toDomain);
    }

    @Transactional(readOnly = true)
    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email.trim().toLowerCase());
    }
}
