const cursos = {
  "c1_0": { nombre: "Atención Integral", ciclo: 1 },
  "c1_1": { nombre: "Desarrollo Humano", ciclo: 1 },
  "c1_2": { nombre: "Inglés I", ciclo: 1 },
  "c1_3": { nombre: "Fundamentos de la Promoción de Salud", ciclo: 1 },
  "c1_4": { nombre: "Integración de Estructura y Función del Organismo Humano", ciclo: 1 },
  "c1_5": { nombre: "Lenguaje I", ciclo: 1 },
  "c2_0": { nombre: "Inglés II", ciclo: 2 },
  "c2_1": { nombre: "Integración Morfofuncional del Sistema Nervioso", ciclo: 2 },
  "c2_2": { nombre: "Lenguaje II", ciclo: 2 },
  "c2_3": { nombre: "Pensamiento Matemático", ciclo: 2 },
  "c2_4": { nombre: "Procesos Químico-Biológicos y Nutrición", ciclo: 2 },
  "c2_5": { nombre: "Práctica y Profesionalismo Médico I", ciclo: 2 },
  "c3_0": { nombre: "Bioestadística", ciclo: 3 },
  "c3_1": { nombre: "Bioquímica y Biología Molecular", ciclo: 3 },
  "c3_2": { nombre: "Inglés III", ciclo: 3 },
  "c3_3": { nombre: "Integración Morfofuncional del Sistema Cardio-Circulatorio", ciclo: 3 },
  "c3_4": { nombre: "Integración Morfofuncional del Sistema Respiratorio", ciclo: 3 },
  "c3_5": { nombre: "Nutrición y Estilos de Vida Saludable", ciclo: 3 },
  "c3_6": { nombre: "Práctica y Profesionalismo Médico II", ciclo: 3 },
  "c4_0": { nombre: "Inglés IV", ciclo: 4 },
  "c4_1": { nombre: "Genética y Enfermedad", ciclo: 4 },
  "c4_2": { nombre: "Integración Morfofuncional del Sistema Digestivo", ciclo: 4 },
  "c4_3": { nombre: "Integración Morfofuncional del Sistema Excretor", ciclo: 4 },
  "c4_4": { nombre: "Mecanismos de Infección y Defensa", ciclo: 4 },
  "c4_5": { nombre: "Metodología de la Investigación", ciclo: 4 },
  "c4_6": { nombre: "Práctica y Profesionalismo Médico III", ciclo: 4 },
  "c5_0": { nombre: "Inglés V", ciclo: 5 },
  "c5_1": { nombre: "Integración Morfofuncional del Sistema Endocrino y Reproductor", ciclo: 5 },
  "c5_2": { nombre: "Integración Morfofuncional del Sistema Hematopoyético", ciclo: 5 },
  "c5_3": { nombre: "Microbiología y Parasitología", ciclo: 5 },
  "c5_4": { nombre: "Métodos Estadísticos en Biociencias", ciclo: 5 },
  "c5_5": { nombre: "Práctica y Profesionalismo Médico IV", ciclo: 5 },
  "c6_0": { nombre: "Inglés VI: RREL", ciclo: 6 },
  "c6_1": { nombre: "Farmacología", ciclo: 6 },
  "c6_2": { nombre: "Integración Fisiopatológica", ciclo: 6 },
  "c6_3": { nombre: "Introducción a la Clínica e Interpretación de Exámenes Auxiliares", ciclo: 6 },
  "c6_4": { nombre: "Salud Pública", ciclo: 6 },
  "c6_5": { nombre: "Ética y Ciudadanía", ciclo: 6 },
  "c7_0": { nombre: "Diagnóstico Comunitario", ciclo: 7 },
  "c7_1": { nombre: "Especialidades I", ciclo: 7 },
  "c7_2": { nombre: "Fundamentos de Educación en Salud", ciclo: 7 },
  "c7_3": { nombre: "Principios de Nutrición Clínica y Funcional", ciclo: 7 },
  "c7_4": { nombre: "Principios e Introducción a la Medicina P4", ciclo: 7 },
  "c7_5": { nombre: "Realidad Nacional y Globalización", ciclo: 7 },
  "c7_6": { nombre: "Terapéutica Integrada", ciclo: 7 },
  "c8_0": { nombre: "Especialidades II", ciclo: 8 },
  "c8_1": { nombre: "Geriatría", ciclo: 8 },
  "c8_2": { nombre: "Inglés Médico", ciclo: 8 },
  "c8_3": { nombre: "Liderazgo Gerencial y Valores", ciclo: 8 },
  "c8_4": { nombre: "Medicina Física y del Deporte", ciclo: 8 },
  "c8_5": { nombre: "Nutrición Funcional Aplicada en Especialidades Clínicas y Sistemas", ciclo: 8 },
  "c8_6": { nombre: "Salud Mental y Psiquiatría", ciclo: 8 },
  "c9_0": { nombre: "Aplicación Clínica de la Medicina P4", ciclo: 9 },
  "c9_1": { nombre: "Cirugía y Traumatología", ciclo: 9 },
  "c9_2": { nombre: "Gestión en Salud", ciclo: 9 },
  "c9_3": { nombre: "Oncología Médica", ciclo: 9 },
  "c9_4": { nombre: "Salud Global y Sistemas de Salud", ciclo: 9 },
  "c9_5": { nombre: "Tesis I", ciclo: 9 },
  "c10_0": { nombre: "Aspectos Legales de la Práctica Médica y Patología Forense", ciclo: 10 },
  "c10_1": { nombre: "Emergencias y Desastres", ciclo: 10 },
  "c10_2": { nombre: "Ginecología y Obstetricia", ciclo: 10 },
  "c10_3": { nombre: "Introducción a la Salud y Actividad Física", ciclo: 10 },
  "c10_4": { nombre: "Liderazgo, Innovación y Emprendimiento en Salud", ciclo: 10 },
  "c10_5": { nombre: "Pediatría", ciclo: 10 },
  "c10_6": { nombre: "Punto de Atención Ultrasonido", ciclo: 10 },
  "c11_0": { nombre: "Alemán I", ciclo: 11 },
  "c11_1": { nombre: "Externado en Cirugía y Traumatología", ciclo: 11 },
  "c11_2": { nombre: "Externado en Medicina", ciclo: 11 },
  "c11_3": { nombre: "Externado Rotatorio 1", ciclo: 11 },
  "c11_4": { nombre: "Externado Rotatorio 2", ciclo: 11 },
  "c11_5": { nombre: "Francés I", ciclo: 11 },
  "c11_6": { nombre: "Italiano I", ciclo: 11 },
  "c11_7": { nombre: "Portugués I", ciclo: 11 },
  "c11_8": { nombre: "Tesis II", ciclo: 11 },
  "c12_0": { nombre: "Bioética", ciclo: 12 },
  "c12_1": { nombre: "Externado en Gineco-Obstetricia", ciclo: 12 },
  "c12_2": { nombre: "Externado en Pediatría", ciclo: 12 },
  "c13_0": { nombre: "Internado en Medicina", ciclo: 13 },
  "c13_1": { nombre: "Internado en Pediatría", ciclo: 13 },
  "c14_0": { nombre: "Internado en Cirugía", ciclo: 14 },
  "c14_1": { nombre: "Internado en Ginecología y Obstetricia", ciclo: 14 },
};


función crearMalla() {
    const contenedor = document.getElementById("malla");
    const ciclos = {};
    for (const [id, curso] of Object.entries(cursos)) {
        si (!ciclos[curso.ciclo]) {
            const div = document.getElementById("ciclo" + curso.ciclo);
            ciclos[curso.ciclo] = div;
        }
        botón const = document.createElement("div");
        boton.className = "curso";
        botón.id = id;
        boton.textContent = curso.nombre;
        boton.onclick = () => toggleCurso(id);
        ciclos[curso.ciclo].appendChild(boton);
    }
    cargarProgreso();
}

función alternarCurso(id) {
    const el = document.getElementById(id);
    el.classList.toggle("tachado");
    guardarProgreso();
}

función guardarProgreso() {
    constantes completadas = [];
    document.querySelectorAll(".curso.tachado").forEach(el => completados.push(el.id));
    localStorage.setItem("progresoMalla", JSON.stringify(completados));
}

función cargarProgreso() {
    const datos = JSON.parse(localStorage.getItem("progresoMalla") || "[]");
    datos.paraCada(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add("tachado");
    });
}

función resetProgress() {
    localStorage.removeItem("progresoMalla");
    document.querySelectorAll(".curso").forEach(el => el.classList.remove("tachado"));
}

ventana.onload = crearMalla;
