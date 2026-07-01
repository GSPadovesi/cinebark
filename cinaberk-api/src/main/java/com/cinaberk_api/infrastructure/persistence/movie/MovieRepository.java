package com.cinaberk_api.infrastructure.persistence.movie;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface MovieRepository extends JpaRepository<MovieEntity, UUID>, JpaSpecificationExecutor<MovieEntity> {
    @Query(value = "SELECT * FROM movies WHERE active = true AND available_at <= CURRENT_TIMESTAMP ORDER BY RANDOM() LIMIT 10", nativeQuery = true)
    public List<MovieEntity> findTenRandomAvailableMovies();
}
