package com.example.courses.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.example.courses.entities.Course;
import com.example.courses.repositories.CourseRepository;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {
	@Autowired
	CourseRepository courseRepository;
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Course course0 = new Course(null, "src/assets/img/courses/C-Sharp-COMPLETO-Programação-Orientada-a-Objetos-Projetos.jpg", "C# COMPLETO Programação Orientada a Objetos + Projetos", "Nelio Alves", "4,8", "25.932", "189,90", "Classificação mais alta");
		Course course1 = new Course(null, "src/assets/img/courses/Java-COMPLETO-2023-Programação-Orientada-a-Objetos-Projetos.jpg", "Java COMPLETO 2023 Programação Orientada a Objetos +Projetos", "Nelio Alves", "4,8", "44.719", "169,90", "Mais vendidos");
		Course course2 = new Course(null, "src/assets/img/courses/O-curso-completo-de-Banco-de-Dados-e-SQL-sem mistérios.jpg", "O curso completo de Banco de Dados e SQL, sem mistérios!", "Felipe Mafra", "4,7", "37.665", "179,90", "Mais vendidos");
		Course course3 = new Course(null, "src/assets/img/courses/Curso-Design-Gráfico-COMPLETO-10-Cursos-do-Zero-ao-Avançado.jpg", "Curso Design Gráfico COMPLETO 10 Cursos do Zero ao Avançado", "André Fontenelle", "3,6", "39.154", "169,90", "Mais vendidos");
		Course course4 = new Course(null, "src/assets/img/courses/Pixel-Art-do-zero-ao-avançado.jpg", "Pixel Art do zero ao avançado", "Jeferson Dias", "4,6", "589", "169,90", "Mais vendidos");
		Course course5 = new Course(null, "src/assets/img/courses/Modelagem-de-Dados-UML-(Análise&Projeto Orientado a Objetos).jpg", "Modelagem de Dados UML (Análise&Projeto Orientado a Objetos)", "Nelio Alves", "2,8", "2.845", "169,90", "Classificação mais alta");
		Course course6 = new Course(null, "src/assets/img/courses/Criação-de-Apps-Android-iOS-Web-com-Flutter.jpg", "Criação de Apps Android/iOS/Web com Flutter", "Daniel Ciolfi", "Ewerton Dutra", "3,6", "15.808", "189,90");
		Course course7 = new Course(null, "src/assets/img/courses/Power-BI-Completo-Do-Básico-ao-Avançado.jpg", "Power BI Completo - Do Básico ao Avançado", "João Paulo de Lira", "3,7", "64.650", "199,90", "Mais vendidos");
		Course course8 = new Course(null, "src/assets/img/courses/Curso-de-React.Js-e-Next.Js-Intermediário e Avançado.jpg", "Curso de React.Js e Next.Js (Intermediário e Avançado)", "Luiz Otávio Miranda", "4,7", "3.627", "169,90", null);
		Course course9 = new Course(null, "src/assets/img/courses/Angular-The-Complete-Guide-2023 Edition.jpg", "Angular - The Complete Guide (2023 Edition)", "Maximilian Schwarzmuller", "4,6", "188.665", "169,90", "Mais vendidos");
		Course course10 = new Course(null, "src/assets/img/courses/Bootstrap-5-Curso-Completo-e-Direto-ao-Ponto.jpg", "Bootstrap 5: Curso Completo e Direto ao Ponto", "Diego Mariano", "2,0", "1.179", "179,90", null);
		Course course11 = new Course(null, "src/assets/img/courses/Understanding-TypeScript.jpg", "Understanding TypeScript", "Maximilian Schwarzmuller", "4,6", "44.269", "199,90", "Mais vendidos");
		Course course12 = new Course(null, "src/assets/img/courses/Learn-to-Code-with-Ruby.jpg", "Learn to Code with Ruby", "Boris Paskhaver", "4,7", "5.568", "179,90", "Mais vendidos");
		Course course13 = new Course(null, "src/assets/img/courses/Git-Completo-Do-Básico-ao-Avançado.jpg", "Git Completo: Do Básico ao Avançado", "Gabriel Ferrari", "4,8", "4.173", "199,90", "Classificação mais alta");
		Course course14 = new Course(null, "src/assets/img/courses/Java-2022-COMPLETO-Do-Zero-ao-Profissional+Projetos.jpg", "Java 2022 COMPLETO: Do Zero ao Profissional + Projetos!", "Leonardo Moura", "4,7", "20.107", "209,90", null);
		Course course15 = new Course(null, "src/assets/img/courses/Aprenda-JAVA-em-7-dias+Projetos-Reais-2023.jpg", "Aprenda JAVA em 7 dias + Projetos Reais (2023)", "Andre Lacono", "4,8", "338", "124,90", null);
		Course course16 = new Course(null, "src/assets/img/courses/Programação-em-Java-do- básico-ao-avançado.jpg", "Programação em Java do básico ao avançado", "Geek University", "4,5", "2.700", "179,90", null);
		Course course17 = new Course(null, "src/assets/img/courses/Git-e-Github-Essencial-para-o-Desenvolvedor.jpg", "Git e Github Essencial para o Desenvolvedor", "Geek University", "4,8", "1.985", "179,90", null);
		Course course18 = new Course(null, "src/assets/img/courses/Dominando-Git-e-GitHub-Do-iniciante-ao-expert.jpg", "Dominando Git e GitHub - Do iniciante ao expert", "João Rubens Marchete Filho", "4,6", "1.523", "134,90", null);
		Course course19 = new Course(null, "src/assets/img/courses/Curso-React+Redux-Fundamentos-e-2-Apps-do-Absoluto-ZERO.jpg", "Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!", "Leonardo Moura", "3,8", "11.786", "179,90", "Classificação mais alta");
		Course course20 = new Course(null, "src/assets/img/courses/Next.js-e-React-Curso-Completo-Aprenda-com-Projetos.jpg", "Next.js e React - Curso Completo - Aprenda com Projetos", "Leonardo Moura", "2,7", "1.885", "179,90", null);
		Course course21 = new Course(null, "src/assets/img/courses/Bancos-de-Dados-SQL-e-NoSQL-do-básico-ao-avançado.jpg", "Bancos de Dados SQL e NoSQL do básico ao avançado", "Geek University", "2,7", "2.811", "179,90", "Classificação mais alta");
		Course course22 = new Course(null, "src/assets/img/courses/Bancos-de-dados-relacionais-SQL-do zero ao avançado.jpg", "Bancos de dados relacionais - SQL (do zero ao avançado)", "Cezar Augusto Crummenauer", "3,8", "52", "159,90", null);
		Course course23 = new Course(null, "src/assets/img/courses/Banco-de-Dados-Da-modelagem-à-SQL-com-PostgreSQL.jpg", "Banco de Dados: Da modelagem à SQL com PostgreSQL", "Tadeu Pereira", "2,9", "118", "94,90", "Classificação mais alta");
		Course course24 = new Course(null, "src/assets/img/courses/curso-de-JavaScript-e-TypeScript-do-básico-ao-avançado.jpg", "Curso de JavaScript e TypeScript do básico ao avançado", "Luiz Otávio Miranda, Tales Calogi Malaquias", "4,8", "19.175", "199,90", "Mais vendidos");
		Course course25 = new Course(null, "src/assets/img/courses/JavaScript-do-básico-ao-avançado-c-Node.js e projetos.jpg", "JavaScript do básico ao avançado (c/ Node.js e projetos)", "Matheus Battisti", "3,7", "3.639", "189,90", "Classificação mais alta");
		Course course26 = new Course(null, "src/assets/img/courses/Aprenda-JAVASCRIPT-em-7-dias+Projetos-Reais-2023.jpg", "Aprenda JAVASCRIPT em 7 dias + Projetos Reais (2023)", "Andre Lacono", "4,8", "1.308", "179,90", null);
		Course course27 = new Course(null, "src/assets/img/courses/JavaScript-Curso-COMPLETO-com-6-Projetos-REAIS.jpg", "JavaScript - Curso COMPLETO com 6 Projetos REAIS", "Hcode Treinamentos", "4,6", "10.289", "179,90", null);
		Course course28 = new Course(null, "src/assets/img/courses/Curso-de-Javascript+Typescript+NodeJs-Programador-JS.jpg", "Curso de Javascript + Typescript + NodeJs - Programador JS", "Dener Troquatte", "2,9", "88", "79,90", "Classificação mais alta");
		Course course29 = new Course(null, "src/assets/img/courses/Curso-Web-Moderno-Completo-com-JavaScript-2022+Projetos.jpg", "Curso Web Moderno Completo com JavaScript 2022 + Projetos", "Leonardo Moura", "2,7", "49.385", "239,90", null);
	
		courseRepository.saveAll(Arrays.asList(
				course0, course1, course2,
				course3, course4, course5,
				course6, course7, course8,
				course9, course10, course11,
				course12, course13, course14,
				course15, course16, course17,
				course18, course19, course20,
				course21, course22, course23,
				course24, course25, course26,
				course27, course28, course29
		));
	}
}
