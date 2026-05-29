package com.cinaberk_api.service;

import com.cinaberk_api.dto.movie.CreateMovieDTO;
import com.cinaberk_api.entity.Movie;
import com.cinaberk_api.repository.MovieRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class MovieService {
    private final MovieRepository movieRepository;
    private final CloudinaryService cloudinaryService;

    public MovieService(MovieRepository movieRepository, CloudinaryService cloudinaryService){
        this.movieRepository = movieRepository;
        this.cloudinaryService = cloudinaryService;
    }

    public List<Movie> findTenRandomAvailableMovies(){
        return movieRepository.findTenRandomAvailableMovies();
    }

    public Movie createMovie(CreateMovieDTO movieDTO, MultipartFile file){
        String posterURL = cloudinaryService.upload(file);
        Movie movie = new Movie(
                movieDTO.title(),
                movieDTO.description(),
                movieDTO.synopsis(),
                movieDTO.genres(),
                movieDTO.durationInMinutos(),
                movieDTO.minimumAge(),
                posterURL,
                movieDTO.availableAt()
        );

        return movieRepository.save(movie);
    }
}
