package br.com.biblioteca.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.biblioteca.model.LivroModel;

public interface LivroRepositorio extends CrudRepository<LivroModel, Integer> {
    
}
