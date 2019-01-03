package com.mvp.restservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableZuulProxy
@EnableEurekaClient
@RestController
public class DockerApplication {

	@RequestMapping("/")
	public String home() {

		System.out.println("Hey I am Docker !!!!");
		return "Hello Docker World";
	}

    @GetMapping("/test")
    public String getTest() {
        return "From GET Method";
    }



    public static void main(String[] args) {
		SpringApplication.run(DockerApplication.class, args);
	}
}
