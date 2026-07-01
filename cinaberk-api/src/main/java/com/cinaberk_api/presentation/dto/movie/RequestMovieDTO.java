package com.cinaberk_api.presentation.dto.movie;

import com.cinaberk_api.domain.enums.GenreType;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;

import java.time.LocalDateTime;
import java.util.List;

public record RequestMovieDTO(
//        @NotBlank(message = "O titulo e obrigatorio")
        String title,

//        @NotBlank(message = "A descricao e obrigatoria")
        String description,

//        @NotBlank(message = "A sinopse e obrigatoria")
        String synopsis,

//        @NotEmpty(message = "Informe pelo menos um genero")
        List<@NotNull(message = "Genero invalido") GenreType> genres,

//        @NotNull(message = "A duracao e obrigatoria")
        @Positive(message = "A duracao deve ser maior que zero")
        Integer durationInMinutos,

        @NotNull(message = "A idade minima e obrigatoria")
        @PositiveOrZero(message = "A idade minima nao pode ser negativa")
        Integer minimumAge,

//        @NotNull(message = "A data de disponibilidade e obrigatoria")
//        @FutureOrPresent(message = "A data de disponibilidade nao pode estar no passado")
        LocalDateTime availableAt
) {
}
