package com.cinaberk_api.infrastructure.persistence.movie;

import com.cinaberk_api.domain.enums.GenreType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "movies")
public class MovieEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(nullable = false, updatable = false)
    private UUID id;

    @Column(nullable = false, unique = true, length = 150)
    private String title;

    @Column(length = 500)
    private String description;

    @Column(columnDefinition = "TEXT")
    private String synopsis;

    @ElementCollection
    @Enumerated(EnumType.STRING)
    @CollectionTable(name = "movie_genres", joinColumns = @JoinColumn(name = "movie_id"))
    @Column(name = "genre", nullable = false)
    private List<GenreType> genres;

    @Column(name = "duration_in_minutes", nullable = false)
    private int durationInMinutos;

    @Column(name = "minimum_age", nullable = false)
    private int minimumAge;

    @Column(name = "poster_url", length = 1000)
    private String posterURL;

    @Column(name = "available_at")
    private LocalDateTime availableAt;

    @Column(nullable = false)
    private boolean active;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updateAt;

    public MovieEntity() {
    }

    public MovieEntity(
            UUID id,
            String title,
            String description,
            String synopsis,
            List<GenreType> genres,
            int durationInMinutos,
            int minimumAge,
            String posterURL,
            LocalDateTime availableAt,
            boolean active
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.synopsis = synopsis;
        this.genres = genres;
        this.durationInMinutos = durationInMinutos;
        this.minimumAge = minimumAge;
        this.posterURL = posterURL;
        this.availableAt = availableAt;
        this.active = active;
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
        return genres;
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

    public LocalDateTime getAvailableAt() {
        return availableAt;
    }

    public boolean isActive() {
        return active;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdateAt() {
        return updateAt;
    }
}
