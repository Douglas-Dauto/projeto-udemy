package com.example.courses.resources;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import com.example.courses.entities.Course;
import com.example.courses.services.CourseService;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest
public class CourseResourceTest {
	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private CourseService courseService;
	
	@Autowired
	private ObjectMapper objectMapper;
	
	@Test
	public void shouldReturnAllCourses() throws Exception {
		List<Course> courses = new ArrayList<>();
		
		Course course = new Course(null, "src/assets/img/courses/GO-COMPLETO-Programação-Orientada-a-Objetos-Projetos.jpg", "GO COMPLETO Programação Orientada a Objetos + Projetos", "Nelio Alves", "4,8", "25.932", "189,90", "Classificação mais alta");
		Course course2 = new Course(null, "src/assets/img/courses/O-curso-completo-de-Banco-de-Dados-e-SQL-sem mistérios.jpg", "O curso completo de Banco de Dados e SQL, sem mistérios!", "Felipe Mafra", "4,7", "37.665", "179,90", "Mais vendidos");
		
		courses.add(course);
		courses.add(course2);
		
		when(courseService.findAll()).thenReturn(courses);
		
		ResultActions response = mockMvc.perform(get("/courses"));
		
		response.andExpect(status().isOk())
		.andDo(print())
		.andExpect(jsonPath("$.size()", is(courses.size())));
	}
}
