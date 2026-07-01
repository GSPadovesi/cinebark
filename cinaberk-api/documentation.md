# Clean Architecture - Guia do Projeto

Este projeto esta sendo migrado para uma arquitetura limpa de forma gradual.

A ideia principal e simples:

```text
presentation -> application -> domain
infrastructure -> application/domain
```

As camadas internas nao devem depender das camadas externas.

## Camadas

### domain

Contem as regras principais do sistema.

Exemplos:

```text
domain/entities/Movie.java
domain/entities/Room.java
domain/enums/GenreType.java
```

Aqui nao deve ter Spring, JPA, HTTP, Cloudinary ou banco de dados.

Use esta camada para:

- entidades do negocio;
- validacoes essenciais;
- metodos de comportamento, como `activate`, `deactivate`, `update`;
- enums do dominio.

### application

Contem os casos de uso da aplicacao.

Exemplos:

```text
application/usecases/movie/CreateMovieUseCase.java
application/commands/movie/CreateMovieCommand.java
application/gateways/MovieGateway.java
application/gateways/ImageStorageGateway.java
```

Use esta camada para:

- orquestrar uma operacao do sistema;
- chamar gateways;
- criar entidades de dominio;
- coordenar fluxos como upload + salvar no banco.

Evite colocar aqui:

- `MultipartFile`;
- `ResponseEntity`;
- DTOs da camada `presentation`;
- repositories do Spring;
- Cloudinary diretamente.

### presentation

Contem a entrada HTTP da aplicacao.

Exemplos:

```text
presentation/controllers/MovieController.java
presentation/dto/movie/CreateMovieDTO.java
presentation/dto/movie/ResponseMovieDTO.java
presentation/exceptions/GlobalExceptionHandler.java
```

Use esta camada para:

- receber requests;
- ler DTOs;
- converter dados externos para commands;
- chamar use cases;
- converter retorno do dominio para DTO de resposta.

### infrastructure

Contem detalhes tecnicos.

Exemplos:

```text
infrastructure/persistence/movie/MovieEntity.java
infrastructure/persistence/movie/MovieRepository.java
infrastructure/persistence/movie/MovieEntityMapper.java
infrastructure/gateways/MovieRepositoryGateway.java
infrastructure/gateways/CloudinaryImageStorageGateway.java
infrastructure/config/MovieConfig.java
infrastructure/config/CloudinaryConfig.java
```

Use esta camada para:

- JPA;
- banco de dados;
- Cloudinary;
- configuracoes Spring;
- adapters que implementam gateways da application.

## Fluxo de Criacao de Movie

Request HTTP:

```text
POST /cinebark-api/movies
```

O controller recebe:

```text
movie = JSON
file = imagem
```

Fluxo:

```text
MovieController
  -> converte JSON para CreateMovieDTO
  -> converte MultipartFile para FileUpload
  -> converte CreateMovieDTO para CreateMovieCommand
  -> chama CreateMovieUseCase

CreateMovieUseCase
  -> chama ImageStorageGateway para subir imagem
  -> recebe posterURL
  -> cria Movie de dominio
  -> chama MovieGateway para salvar

CloudinaryImageStorageGateway
  -> usa Cloudinary
  -> retorna secure_url

MovieRepositoryGateway
  -> converte Movie para MovieEntity
  -> salva usando MovieRepository
  -> converte MovieEntity para Movie

MovieController
  -> converte Movie para ResponseMovieDTO
  -> retorna HTTP 201
```

## Como Criar Uma Nova Entidade

Use `Movie` como referencia.

### 1. Criar entidade de dominio

Exemplo:

```text
domain/entities/Room.java
```

Ela deve representar o negocio, nao o banco.

Evite:

```java
@Entity
@Table
@Column
```

### 2. Criar command do caso de uso

Exemplo:

```text
application/commands/room/CreateRoomCommand.java
```

O command carrega os dados que o use case precisa.

### 3. Criar gateway

Exemplo:

```text
application/gateways/RoomGateway.java
```

Exemplo:

```java
public interface RoomGateway {
    Room save(Room room);
}
```

### 4. Criar use case

Exemplo:

```text
application/usecases/room/CreateRoomUseCase.java
```

O use case deve coordenar a operacao:

```text
receber command
criar entidade de dominio
salvar via gateway
retornar dominio
```

### 5. Criar entidade JPA

Exemplo:

```text
infrastructure/persistence/room/RoomEntity.java
```

Aqui entram as anotacoes JPA:

```java
@Entity
@Table
@Column
```

### 6. Criar repository JPA

Exemplo:

```text
infrastructure/persistence/room/RoomRepository.java
```

Exemplo:

```java
public interface RoomRepository extends JpaRepository<RoomEntity, UUID> {
}
```

### 7. Criar mapper

Exemplo:

```text
infrastructure/persistence/room/RoomEntityMapper.java
```

Ele converte:

```text
Room -> RoomEntity
RoomEntity -> Room
```

### 8. Criar gateway de infraestrutura

Exemplo:

```text
infrastructure/gateways/RoomRepositoryGateway.java
```

Ele implementa o gateway da application:

```java
public class RoomRepositoryGateway implements RoomGateway {
}
```

### 9. Criar config

Exemplo:

```text
infrastructure/config/RoomConfig.java
```

Use para registrar os beans:

```java
@Bean
public CreateRoomUseCase createRoomUseCase(RoomGateway roomGateway) {
    return new CreateRoomUseCase(roomGateway);
}
```

### 10. Criar controller e DTOs

Exemplo:

```text
presentation/controllers/RoomController.java
presentation/dto/room/CreateRoomDTO.java
presentation/dto/room/ResponseRoomDTO.java
```

O controller deve:

```text
receber DTO
criar command
chamar use case
retornar response DTO
```

## Regras Praticas

- Controller nao chama repository.
- Controller nao chama Cloudinary diretamente.
- Use case nao conhece DTO de request.
- Use case nao conhece JPA.
- Use case depende de interfaces, como `MovieGateway`.
- Infrastructure implementa as interfaces da application.
- Domain nao importa Spring.
- Entity JPA nao deve ser a entidade de dominio.
- Mapper fica na infrastructure.
- Config monta os beans que nao usam anotacoes Spring.

## Quando Criar Um Use Case

Crie um use case para cada operacao real do sistema.

Exemplos:

```text
CreateMovieUseCase
ListMoviesUseCase
UpdateMovieUseCase
DeactivateMovieUseCase
CreateRoomUseCase
ListRoomsUseCase
```

Evite criar use case para detalhes pequenos:

```text
ValidateTitleUseCase
SetPosterUrlUseCase
GenerateIdUseCase
```

Esses detalhes pertencem ao dominio ou ao proprio use case.

## Resumo

Pense assim:

```text
presentation pergunta
application coordena
domain decide regras
infrastructure executa detalhes tecnicos
```

Se uma classe interna comecar a importar Spring, JPA, Cloudinary ou DTO de request, provavelmente a dependencia esta indo na direcao errada.
