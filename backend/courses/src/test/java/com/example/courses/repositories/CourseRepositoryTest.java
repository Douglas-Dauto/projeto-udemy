package com.example.courses.repositories;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.example.courses.entities.Course;

@DataJpaTest
class CourseRepositoryTest {
	@Autowired
	private CourseRepository courseRepository;
	
	@Test
	public void shouldReturnASavedCourse() {
		Course course = new Course(null, "src/assets/img/courses/GO-COMPLETO-Programação-Orientada-a-Objetos-Projetos.jpg", "GO COMPLETO Programação Orientada a Objetos + Projetos", "Nelio Alves", "4,8", "25.932", "189,90", "Classificação mais alta");
		
		Course savedCourse = courseRepository.save(course);
		
		assertNotNull(savedCourse);
		assertEquals("src/assets/img/courses/GO-COMPLETO-Programação-Orientada-a-Objetos-Projetos.jpg", savedCourse.getImage());
		assertEquals("GO COMPLETO Programação Orientada a Objetos + Projetos", savedCourse.getTitle());
		assertEquals("Nelio Alves", savedCourse.getCreatedBy());
		assertEquals("4,8", savedCourse.getStarNote());
		assertEquals("25.932", savedCourse.getPopularity());
		assertEquals("189,90", savedCourse.getValueMoney());
		assertEquals("Classificação mais alta", savedCourse.getClassification());
	}
	
	@Test
	public void shouldReturnASavedCourseClassificationNull() {
		Course courseClassificationNull = new Course(null, "src/assets/img/courses/GO-COMPLETO-Programação-Orientada-a-Objetos-Projetos.jpg", "GO COMPLETO Programação Orientada a Objetos + Projetos", "Nelio Alves", "4,8", "25.932", "189,90", null);
	
		Course savedCourse = courseRepository.save(courseClassificationNull);
		
		assertNotNull(savedCourse);
		assertNull(savedCourse.getClassification());
	}
	
	@Test
	public void shouldReturnAListCourse() {
		Course course = new Course(null, "src/assets/img/courses/GO-COMPLETO-Programação-Orientada-a-Objetos-Projetos.jpg", "GO COMPLETO Programação Orientada a Objetos + Projetos", "Nelio Alves", "4,8", "25.932", "189,90", "Classificação mais alta");
		Course course2 = new Course(null, "src/assets/img/courses/O-curso-completo-de-Banco-de-Dados-e-SQL-sem mistérios.jpg", "O curso completo de Banco de Dados e SQL, sem mistérios!", "Felipe Mafra", "4,7", "37.665", "179,90", "Mais vendidos");
		
		courseRepository.save(course);
		courseRepository.save(course2);
		List<Course> courses = courseRepository.findAll();
		
		assertNotNull(courses);
		assertEquals(2, courses.size());
	}
}
