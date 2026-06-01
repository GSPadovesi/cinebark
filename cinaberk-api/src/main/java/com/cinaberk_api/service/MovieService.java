package com.cinaberk_api.service;

import com.cinaberk_api.dto.movie.CreateMovieDTO;
import com.cinaberk_api.dto.movie.ListMovieDTO;
import com.cinaberk_api.dto.movie.ResponseMovieDTO;
import com.cinaberk_api.entity.Movie;
import com.cinaberk_api.enums.GenreType;
import com.cinaberk_api.repository.MovieRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MovieService {
    private final MovieRepository movieRepository;
    private final CloudinaryService cloudinaryService;

    public MovieService(MovieRepository movieRepository, CloudinaryService cloudinaryService){
        this.movieRepository = movieRepository;
        this.cloudinaryService = cloudinaryService;
    }


//    versão antiga
//    public ListMovieDTO getAllMovies(){
//        List<ResponseMovieDTO> movies = movieRepository.findAll().stream().map(ResponseMovieDTO::new).toList();
//
//        LocalDateTime now = LocalDateTime.now();
//        LocalDateTime twoMonths = now.plusMonths(2);
//
//        ListMovieDTO listMovies = movies.stream().collect(
//                ListMovieDTO::new,
//                (dto, movie) -> {
//                    if(!movie.availableAt().isAfter(now)){
//                        dto.addAvailable(movie);
//                    } else if(!movie.availableAt().isAfter(twoMonths)){
//                        dto.addPreSale(movie);
//                    } else {
//                        dto.addSoon(movie);
//                    }
//                },
//                ListMovieDTO::merge
//        );
//        return listMovies;
//    }

    public Page<ResponseMovieDTO> getAllMovies(
            GenreType genre,
            Integer minimumAge,
            String availability,
            Pageable pageable
    ){
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime preSaleLimit = now.plusMonths(2);

        Specification<Movie> spec = ((root, query, criteriaBuilder) -> criteriaBuilder.isTrue(root.get("active")));

        if(genre != null) spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.isMember(genre, root.get("genres"))));
        if(minimumAge != null) spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.isMember(minimumAge, root.get("minimumAge"))));
        if(availability != null) spec = switch (availability.toUpperCase()){
            case "AVAILABLE" -> spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.lessThanOrEqualTo(root.get("availableAt"), now)));
            case "PRE_SALE" -> spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.between(root.get("availableAt"), now, preSaleLimit)));
            case "SOON" -> spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.greaterThan(root.get("availableAt"), preSaleLimit)));
            default -> throw new IllegalArgumentException("Disponibilidade invalida" + availability);
        };

        return movieRepository.findAll(spec, pageable).map(ResponseMovieDTO::new);
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



