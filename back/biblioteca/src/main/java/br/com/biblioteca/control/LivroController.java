package br.com.biblioteca.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.biblioteca.model.LivroModel;
import br.com.biblioteca.repository.LivroRepositorio;

@RestController
@CrossOrigin("*")
public class LivroController {

    @Autowired
    LivroRepositorio livroRepositorio;

    @GetMapping
    public Iterable<LivroModel> listar(){
        return livroRepositorio.findAll();
    }

    @PostMapping
    public ResponseEntity<LivroModel> cadastrar(@RequestParam("author") String author,
            @RequestParam("title") String title, @RequestParam("isbn") String isbn, @RequestParam("preco") Double preco,
            @RequestParam("img") MultipartFile img) {
        try {
            LivroModel livroModel = new LivroModel();
            livroModel.setAutor(author);
            livroModel.setTitulo(title);
            livroModel.setIsbn(isbn);
            livroModel.setPreco(preco);
            byte[] imgLivro = img.getBytes();
            livroModel.setImg(imgLivro);

            return new ResponseEntity<LivroModel>(livroRepositorio.save(livroModel), HttpStatus.CREATED);

        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Integer id){
        livroRepositorio.deleteById(id);
    } 
}



