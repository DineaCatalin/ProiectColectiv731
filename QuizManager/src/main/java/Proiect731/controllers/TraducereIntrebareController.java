package Proiect731.controllers;

import Proiect731.entity.TraducereIntrebare;
import Proiect731.service.IntrebareService;
import Proiect731.service.TraducereIntrebareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class TraducereIntrebareController {
    @Autowired
    private TraducereIntrebareService service;

    @Autowired
    private IntrebareService intService;

    @GetMapping(path = "/getIntrebariTraduse")
    public @ResponseBody
    Iterable<TraducereIntrebare> getAllIntrebariTraduse() {
        return service.getAllTraducereIntrebari();
    }

    @GetMapping("/getIntrebariTraduse/{id}")
    public TraducereIntrebare getById(@PathVariable("id") int id) {
        return service.getTraducereIntrebare(id);
    }

    @GetMapping("/getIntrebariTraduseByIntrebare/{id}/{lang}")
    public List<TraducereIntrebare> getByIntrebare(@PathVariable("id") int id, @PathVariable("lang") String lang) {
        lang = lang.equals("en") ? "English" : "German";
        List<TraducereIntrebare> traduceri = service.getTraducereIntrebareByIntrebare(intService.getIntrebare(id));
        String finalLang = lang;
        return traduceri.stream().filter(traducere -> traducere.getLimba().equals(finalLang)).collect(Collectors.toList());

    }

    @RequestMapping(value = "/createIntrebariTraduse", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public TraducereIntrebare create(@RequestBody TraducereIntrebare obj) {
        System.out.println(obj);
        return service.saveOrUpdateTraducereIntrebare(obj);
    }

    @GetMapping("/deleteIntrebariTraduse/{id}")
    public String delete(@PathVariable("id") int id) {
        try {
            service.deleteTraducereIntrebare(id);
        } catch (Exception ex) {
            return "Error deleting TraducereIntrebare : " + ex.toString();
        }
        return "TraducereIntrebare succesfully deleted!";
    }

    @RequestMapping("/updateIntrebariTraduse")
    @ResponseBody
    public TraducereIntrebare Update(@RequestBody TraducereIntrebare object) {
        return service.saveOrUpdateTraducereIntrebare(object);
    }

}
