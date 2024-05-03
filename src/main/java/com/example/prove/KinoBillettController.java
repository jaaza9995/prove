package com.example.prove;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KinoBillettController {

    @Autowired
    KinoBillettRepository rep;

    @PostMapping("/lagre")
    public void lagreBillett(Billett billett){
        rep.lagreBillett(billett);
    }

    @PostMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return rep.hentAlle();
    }

    @GetMapping("/slettAlle")
    public void slettAlleBilletter(){
        rep.slettAlleBilletter();
    }

    @GetMapping("/henteEnBillett")
    public Billett henteEnBillett(int id){return rep.henteEnBillett(id);}

    @PostMapping("/endre")
    public void endre(Billett billett){rep.endreBillett(billett);}



}

