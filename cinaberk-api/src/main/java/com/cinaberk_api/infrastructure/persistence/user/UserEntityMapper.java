package com.cinaberk_api.infrastructure.persistence.user;

import com.cinaberk_api.domain.entities.User;

public class UserEntityMapper {
    public UserEntity fromDomain(User user) {
        return new UserEntity(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getPasswordHash(),
                user.getRole(),
                user.isActive()
        );
    }

    public User toDomain(UserEntity entity) {
        return User.restore(
                entity.getId(),
                entity.getName(),
                entity.getEmail(),
                entity.getPasswordHash(),
                entity.getRole(),
                entity.isActive()
        );
    }
}
