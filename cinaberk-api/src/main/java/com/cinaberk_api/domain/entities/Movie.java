package com.cinaberk_api.domain.entities;

import com.cinaberk_api.domain.enums.GenreType;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Movie {
    private final UUID id;
    private String title;
    private String description;
    private String synopsis;
    private List<GenreType> genres;
    private int durationInMinutos;
    private int minimumAge;
    private String posterURL;
    private boolean active;
    private LocalDateTime availableAt;

    private Movie(
            UUID id,
            String title,
            String description,
            String synopsis,
            List<GenreType> genres,
            Integer durationInMinutos,
            Integer minimumAge,
            String posterURL,
            boolean active,
            LocalDateTime availableAt
    ) {
        this.id = id;
        setTitle(title);
        setDescription(description);
        setSynopsis(synopsis);
        setGenres(genres);
        setDurationInMinutos(durationInMinutos);
        setMinimumAge(minimumAge);
        setPosterURL(posterURL);
        setAvailableAt(availableAt);
        this.active = active;
    }

    public static Movie create(
            String title,
            String description,
            String synopsis,
            List<GenreType> genres,
            Integer durationInMinutos,
            Integer minimumAge,
            String posterURL,
            LocalDateTime availableAt
    ) {
        return new Movie(null, title, description, synopsis, genres, durationInMinutos, minimumAge, posterURL, true, availableAt);
    }

    public static Movie restore(
            UUID id,
            String title,
            String description,
            String synopsis,
            List<GenreType> genres,
            Integer durationInMinutos,
            Integer minimumAge,
            String posterURL,
            boolean active,
            LocalDateTime availableAt
    ) {
        return new Movie(id, title, description, synopsis, genres, durationInMinutos, minimumAge, posterURL, active, availableAt);
    }

    public void update(
            String title,
            String description,
            String synopsis,
            List<GenreType> genres,
            Integer durationInMinutos,
            Integer minimumAge,
            String posterURL,
            LocalDateTime availableAt
    ) {
        if (title != null) {
            setTitle(title);
        }

        if (description != null) {
            setDescription(description);
        }

        if (synopsis != null) {
            setSynopsis(synopsis);
        }

        if (genres != null) {
            setGenres(genres);
        }

        if (durationInMinutos != null) {
            setDurationInMinutos(durationInMinutos);
        }

        if (minimumAge != null) {
            setMinimumAge(minimumAge);
        }

        if (availableAt != null) {
            setAvailableAt(availableAt);
        }
    }

    public void deactivate() {
        this.active = false;
    }

    public void activate() {
        this.active = true;
    }

    private void setTitle(String title) {
        requireText(title, "Titulo invalido");
        this.title = title;
    }

    private void setDescription(String description) {
        requireText(description, "Descricao invalida");
        this.description = description;
    }

    private void setSynopsis(String synopsis) {
        requireText(synopsis, "Sinopse invalida");
        this.synopsis = synopsis;
    }

    private void setGenres(List<GenreType> genres) {
        if (genres == null || genres.isEmpty() ||  genres.stream().anyMatch(genre -> genre == null)) {
            throw new IllegalArgumentException("Generos invalidos");
        }

        this.genres = new ArrayList<>(genres);
    }

    private void setDurationInMinutos(Integer durationInMinutos) {
        if (durationInMinutos == null || durationInMinutos <= 0) {
            throw new IllegalArgumentException("Duracao invalida");
        }

        this.durationInMinutos = durationInMinutos;
    }

    private void setMinimumAge(Integer minimumAge) {
        if (minimumAge == null || minimumAge < 0) {
            throw new IllegalArgumentException("Idade minima invalida");
        }

        this.minimumAge = minimumAge;
    }

    private void setPosterURL(String posterURL) {
        requireText(posterURL, "Link da imagem invalida");
        this.posterURL = posterURL;
    }

    private void setAvailableAt(LocalDateTime availableAt) {
        if (availableAt == null) {
            throw new IllegalArgumentException("Data de disponibilidade invalida");
        }

        this.availableAt = availableAt;
    }

    private static void requireText(String value, String message) {
        if (value == null || value.isBlank()) {
            throw new IllegalArgumentException(message);
        }
    }

    public UUID getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public List<GenreType> getGenres() {
        return List.copyOf(genres);
    }

    public int getDurationInMinutos() {
        return durationInMinutos;
    }

    public int getMinimumAge() {
        return minimumAge;
    }

    public String getPosterURL() {
        return posterURL;
    }

    public boolean isActive() {
        return active;
    }

    public LocalDateTime getAvailableAt() {
        return availableAt;
    }
}
