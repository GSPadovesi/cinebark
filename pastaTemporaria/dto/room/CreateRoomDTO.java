package com.cinaberk_api.pastaTemporaria.dto.room;

import com.cinaberk_api.domain.enums.ResourceType;
import com.cinaberk_api.domain.enums.RoomType;
import jakarta.validation.constraints.*;

import java.util.Set;

public record CreateRoomDTO(
        @NotBlank(message = "O numero é obrigatorio")
        Integer number,

        @NotBlank(message = "A capacidade da sala é obrigatoria")
        Integer capacity,

        @NotBlank(message = "O tipo da sala é obrigatorio")
        RoomType roomType,

        @NotBlank(message = "A descrição é obrigatoria")
        String description,

        @NotBlank(message = "Informe pelo menos um recurso")
        Set<@NotNull(message = "Recurso invalido") ResourceType> resources,

        @NotBlank(message = "O link da imagem e obrigatorio")
        String posterURL
) {
}
