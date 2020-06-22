package com.findmyflock.controller;

import com.findmyflock.model.Animal;
import com.findmyflock.model.MockDB;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class RestAPI {

    private MockDB mock = new MockDB();

    @GetMapping(value="/getAnimal", consumes = MediaType.ALL_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody Animal getAnimal(@RequestParam("id") String gps){
        return mock.getAnimal(gps);
    }

    @GetMapping(value="/getRegister", consumes = MediaType.ALL_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody java.util.List<Animal> getRegister(){
        return mock.getList();
    }
    @PostMapping(value="/deleteAnimal")
    public void deleteAnimal(@RequestParam("id") String gps) {
        mock.remove(gps);
    }
    @PostMapping(value = "/updateAnimal")
    public void updateAnimal(@RequestParam("id")String gps, @RequestParam("ml")int lm, @RequestParam("children") int children) {
        Animal an = mock.getAnimal(gps);
        an.setChildren(children);
        an.setLmilk(lm);
    }

    @PostMapping(value = "/addAnimal", consumes = MediaType.ALL_VALUE)
    public void addAnimal(@RequestBody Animal an) {
        mock.addAnimal(an);
    }
}