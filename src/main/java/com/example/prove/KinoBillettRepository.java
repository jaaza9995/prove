package com.example.prove;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KinoBillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Billett billett){
        String sql = "INSERT INTO Billett(film, antall, fornavn, etternavn, epost, telefonnr) " +
                "VALUES (?, ?, ?, ?, ?, ?);";
        db.update(sql, billett.getFilm(), billett.getAntall(), billett.getFornavn(),
                billett.getEtternavn(), billett.getEpost(), billett.getTelefonnr());
    }

    public List<Billett> hentAlle(){
        String sql = "SELECT * FROM Billett;";
        return db.query(sql,new BeanPropertyRowMapper(Billett.class));
    }

    public Billett henteEnBillett(int id){
        String sql = "SELECT * FROM Billett WHERE id=?";
        List<Billett> enBillett = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return enBillett.get(0);
    }

    public void endreBillett(Billett billett){
        String sql = "UPDATE Billett SET film=?, antall=?, fornavn=?, etternavn=?, telefonnr=?, epost=? WHERE id=?";
        db.update(sql, billett.getFilm(), billett.getAntall(), billett.getFornavn(),
                billett.getEtternavn(), billett.getEpost(), billett.getTelefonnr(), billett.getId());
    }


    public void slettAlleBilletter(){
        String sql = "DELETE FROM Billett;";
        db.update(sql);
    }


}



