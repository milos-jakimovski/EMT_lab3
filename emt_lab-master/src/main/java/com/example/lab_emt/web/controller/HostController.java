package com.example.lab_emt.web.controller;

import com.example.lab_emt.model.domain.Host;
import com.example.lab_emt.model.dto.ResponseHostDto; // Import your DTO
import com.example.lab_emt.service.domain.HostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/hosts")
@CrossOrigin(origins = "http://localhost:3000")
public class HostController {

    private final HostService hostService;

    public HostController(HostService hostService) {
        this.hostService = hostService;
    }

    @GetMapping
    public List<ResponseHostDto> findAll() {
        // Fetch raw hosts from database
        List<Host> hosts = hostService.findAll();
        // Map them to clean DTOs so Jackson doesn't trip over Hibernate proxies
        return hosts.stream()
                .map(host -> new ResponseHostDto(
                        host.getId(),
                        host.getName(),
                        host.getSurname(),
                        // CHANGED THIS LINE: Pass the country NAME (String) instead of ID (Long)
                        host.getCountry() != null ? host.getCountry().getName() : "Unknown"
                ))
                .collect(Collectors.toList());
    }
    // GET /api/hosts/{id}
    @GetMapping("/{id}")
    public ResponseEntity<ResponseHostDto> findById(@PathVariable Long id) {
        return hostService.findById(id)
                // Map the raw Host entity to your clean DTO just like before
                .map(host -> new ResponseHostDto(
                        host.getId(),
                        host.getName(),
                        host.getSurname(),
                        host.getCountry() != null ? host.getCountry().getName() : "Unknown"
                ))
                // If the host is found, return 200 OK with the DTO
                .map(dto -> ResponseEntity.ok().body(dto))
                // If the host is not found, return a 404 Not Found error
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}