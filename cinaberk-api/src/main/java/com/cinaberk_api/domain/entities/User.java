package com.cinaberk_api.domain.entities;

import com.cinaberk_api.domain.enums.UserRole;

import java.util.UUID;

public class User {
    private final UUID id;
    private String name;
    private String email;
    private String password;
    private UserRole role;
    private boolean active;

    private User(
            UUID id,
            String name,
            String email,
            String password,
            UserRole role,
            boolean active
    ) {
        this.id = id;
        setName(name);
        setEmail(email);
        setPassword(password);
        setRole(role);
        this.active = active;
    }

    public static User create(String name, String email, String password) {
        return new User(null, name, email, password, UserRole.CUSTOMER, true);
    }

    public static User restore(
            UUID id,
            String name,
            String email,
            String password,
            UserRole role,
            boolean active
    ) {
        return new User(id, name, email, password, role, active);
    }

    public void changeName(String name) {
        setName(name);
    }

    public void changePassword(String password) {
        setPassword(password);
    }

    public void changeRole(UserRole role) {
        setRole(role);
    }

    public void deactivate() {
        this.active = false;
    }

    public void activate() {
        this.active = true;
    }

    private void setName(String name) {
        requireText(name, "Nome invalido");
        this.name = name;
    }

    private void setEmail(String email) {
        requireText(email, "Email invalido");

        if (!email.contains("@")) {
            throw new IllegalArgumentException("Email invalido");
        }

        this.email = email.trim().toLowerCase();
    }

    private void setPassword(String password) {
        requireText(password, "Senha invalida");
        this.password = password;
    }

    private void setRole(UserRole role) {
        if (role == null) {
            throw new IllegalArgumentException("Perfil invalido");
        }

        this.role = role;
    }

    private static void requireText(String value, String message) {
        if (value == null || value.isBlank()) {
            throw new IllegalArgumentException(message);
        }
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPasswordHash() {
        return password;
    }

    public UserRole getRole() {
        return role;
    }

    public boolean isActive() {
        return active;
    }
}
