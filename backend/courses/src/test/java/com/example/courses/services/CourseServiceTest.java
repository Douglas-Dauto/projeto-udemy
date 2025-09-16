package com.example.courses.services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.courses.entities.Course;
import com.example.courses.repositories.CourseRepository;

@ExtendWith(MockitoExtension.class)
public class CourseServiceTest {
	@Mock
	private CourseRepository courseRepository;
	
	@InjectMocks
	private CourseService courseService;
	
	@Test
	public void shouldReturnCourses() {
		Course course = new Course(null, "src/assets/img/courses/GO-COMPLETO-Programação-Orientada-a-Objetos-Projetos.jpg", "GO COMPLETO Programação Orientada a Objetos + Projetos", "Nelio Alves", "4,8", "25.932", "189,90", "Classificação mais alta");
		Course course2 = new Course(null, "src/assets/img/courses/O-curso-completo-de-Banco-de-Dados-e-SQL-sem mistérios.jpg", "O curso completo de Banco de Dados e SQL, sem mistérios!", "Felipe Mafra", "4,7", "37.665", "179,90", "Mais vendidos");
		
		when(courseRepository.findAll()).thenReturn(List.of(course, course2));
		
		List<Course> courses = courseService.findAll();
		
		assertNotNull(courses);
		assertEquals(2, courses.size());
		assertEquals(course.getImage(), courses.get(0).getImage());
		assertEquals(course2.getImage(), courses.get(1).getImage());
		assertEquals(course.getTitle(), courses.get(0).getTitle());
		assertEquals(course2.getTitle(), courses.get(1).getTitle());
		assertEquals(course.getCreatedBy(), courses.get(0).getCreatedBy());
		assertEquals(course2.getCreatedBy(), courses.get(1).getCreatedBy());
		assertEquals(course.getClassification(), courses.get(0).getClassification());
		assertEquals(course2.getClassification(), courses.get(1).getClassification());
		assertEquals(course.getPopularity(), courses.get(0).getPopularity());
		assertEquals(course2.getPopularity(), courses.get(1).getPopularity());
		assertEquals(course.getValueMoney(), courses.get(0).getValueMoney());
		assertEquals(course2.getValueMoney(), courses.get(1).getValueMoney());
	}
}
