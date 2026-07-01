package com.cinaberk_api.infrastructure.config;

import com.cinaberk_api.application.gateways.ImageStorageGateway;
import com.cinaberk_api.application.gateways.MovieGateway;
import com.cinaberk_api.application.usecases.movie.*;
import com.cinaberk_api.infrastructure.gateways.MovieRepositoryGateway;
import com.cinaberk_api.infrastructure.persistence.movie.MovieEntityMapper;
import com.cinaberk_api.infrastructure.persistence.movie.MovieRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MovieConfig {
    @Bean
    public FindMovieByIdUseCase findMovieByIdUseCase(MovieGateway movieGateway){
        return new FindMovieByIdUseCase(movieGateway);
    }

    @Bean
    public FindAllMovieUseCase findAllMovieUseCase(MovieGateway movieGateway){
        return new FindAllMovieUseCase(movieGateway);
    }

    @Bean
    public FindHomeMoviesUseCase findHomeMoviesUseCase(MovieGateway movieGateway){
        return new FindHomeMoviesUseCase(movieGateway);
    }

    @Bean
    public CreateMovieUseCase createMovieUseCase(
            MovieGateway movieGateway,
            ImageStorageGateway imageStorageGateway
    ) {
        return new CreateMovieUseCase(movieGateway, imageStorageGateway);
    }

    @Bean
    public EditMovieUseCase editMovieUseCase(
            MovieGateway movieGateway,
            ImageStorageGateway imageStorageGateway

    ) {
        return new EditMovieUseCase(movieGateway, imageStorageGateway);
    }

    @Bean
    public DeactivateMovieUseCase deactivateMovieUseCase(MovieGateway movieGateway){
        return new DeactivateMovieUseCase(movieGateway);
    }

    @Bean
    public  ActivateMovieUseCase activateMovieUseCase(MovieGateway movieGateway){
        return new ActivateMovieUseCase(movieGateway);
    }

    @Bean
    public MovieGateway movieGateway(
            MovieRepository movieRepository,
            MovieEntityMapper movieEntityMapper
    ) {
        return new MovieRepositoryGateway(movieRepository, movieEntityMapper);
    }

    @Bean
    public MovieEntityMapper movieEntityMapper() {
        return new MovieEntityMapper();
    }
}
