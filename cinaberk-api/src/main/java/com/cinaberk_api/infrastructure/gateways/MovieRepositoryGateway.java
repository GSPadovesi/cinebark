package com.cinaberk_api.infrastructure.gateways;

import com.cinaberk_api.application.commands.movie.SearchMoviesCommand;
import com.cinaberk_api.application.exceptions.MovieNotFoundException;
import com.cinaberk_api.application.gateways.MovieGateway;
import com.cinaberk_api.domain.entities.Movie;
import com.cinaberk_api.infrastructure.persistence.movie.MovieEntity;
import com.cinaberk_api.infrastructure.persistence.movie.MovieEntityMapper;
import com.cinaberk_api.infrastructure.persistence.movie.MovieRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public class MovieRepositoryGateway implements MovieGateway {
    private final MovieRepository movieRepository;
    private final MovieEntityMapper movieEntityMapper;

    public MovieRepositoryGateway(MovieRepository movieRepository, MovieEntityMapper movieEntityMapper){
        this.movieRepository = movieRepository;
        this.movieEntityMapper = movieEntityMapper;
    }

    @Transactional(readOnly = true)
    @Override
    public List<Movie> findAll(SearchMoviesCommand query){
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime preSaleLimit = now.plusMonths(2);
        Pageable pageable = PageRequest.of(query.page(), query.size());


        Specification<MovieEntity> spec = ((root, cq, cb) -> cb.isTrue(root.get("active")));

        if(query.search() != null && !query.search().isBlank()) {
            String term = "%" + query.search().trim().toLowerCase() + "%";
            spec = spec.and((movie, cq, criteriaBuilder) -> criteriaBuilder.like(criteriaBuilder.lower(movie.get("title")), term));
        }
        if(query.genre() != null) spec = spec.and((movie, cq, criteriaBuilder) -> criteriaBuilder.isMember(query.genre(), movie.get("genres")));
        if(query.minimunAge() != null) spec = spec.and((movie, cq, criteriaBuilder) -> criteriaBuilder.equal(movie.get("minimumAge"), query.minimunAge()));
        if(query.availability() != null) spec = switch (query.availability().toUpperCase()){
            case "AVAILABLE" -> spec.and((movie, cq, criteriaBuilder) -> criteriaBuilder.lessThanOrEqualTo(movie.get("availableAt"), now));
            case "PRE_SALE" -> spec.and((movie, cq, criteriaBuilder) -> criteriaBuilder.between(movie.get("availableAt"), now, preSaleLimit));
            case "SOON" -> spec.and((movie, cq, criteriaBuilder) -> criteriaBuilder.greaterThan(movie.get("availableAt"), preSaleLimit));
            default -> throw new IllegalArgumentException("Disponibilidade invalida" + query.availability());
        };


        return movieRepository.findAll(spec, pageable)
                .stream()
                .map(movieEntityMapper::toDomain)
                .toList();
    }

    @Transactional(readOnly = true)
    @Override
    public Movie findById(UUID id){
        MovieEntity movie = movieRepository.findById(id)
                .orElseThrow(() -> new MovieNotFoundException(id));

        return movieEntityMapper.toDomain(movie);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Movie> findHomeAll(){
        return movieRepository.findTenRandomAvailableMovies()
                .stream()
                .map(movieEntityMapper::toDomain)
                .toList();
    }

    @Transactional
    @Override
    public Movie save(Movie movie) {
        MovieEntity savedMovie = movieRepository.save(movieEntityMapper.fromDomain(movie));
        return movieEntityMapper.toDomain(savedMovie);
    }
}
