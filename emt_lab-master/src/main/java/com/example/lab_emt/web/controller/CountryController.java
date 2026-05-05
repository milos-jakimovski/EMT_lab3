package com.example.lab_emt.web.controller;

import com.example.lab_emt.model.domain.Country;
import com.example.lab_emt.repository.CountryRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/countries")
@CrossOrigin(origins = "http://localhost:3000") // Connects to your React app
public class CountryController {

    private final CountryRepository countryRepository;

    public CountryController(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    // GET /api/countries
    @GetMapping
    public List<Country> findAll() {
        return countryRepository.findAll();
    }

    // GET /api/countries/{id}
//    @GetMapping("/{id}")
//    public ResponseEntity<Country> findById(@PathVariable Long id) {
//        return countryRepository.findById(id)
//                .map(country -> ResponseEntity.ok().body(country))
//                .orElseGet(() -> ResponseEntity.notFound().build());
//    }
}