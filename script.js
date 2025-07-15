const cursos = {
  // CICLO 1
  "c1_0": { nombre: "Atención Integral", ciclo: 1, creditos: 3 },
  "c1_1": { nombre: "Desarrollo Humano", ciclo: 1, creditos: 3 },
  "c1_2": { nombre: "Inglés I", ciclo: 1, creditos: 0 },
  "c1_3": { nombre: "Fundamentos de la Promoción de Salud", ciclo: 1, creditos: 3 },
  "c1_4": { nombre: "Integración de Estructura y Función del Organismo Humano", ciclo: 1, creditos: 4 },
  "c1_5": { nombre: "Lenguaje I", ciclo: 1, creditos: 3 },

  // CICLO 2
  "c2_0": { nombre: "Inglés II", ciclo: 2, creditos: 0, prereq: ["c1_2"] },
  "c2_1": { nombre: "Sistema Nervioso", ciclo: 2, creditos: 4, prereq: ["c1_4"] },
  "c2_2": { nombre: "Lenguaje II", ciclo: 2, creditos: 4, prereq: ["c1_5"] },
  "c2_3": { nombre: "Pensamiento Matemático", ciclo: 2, creditos: 4 },
  "c2_4": { nombre: "Procesos Químico-Biológicos y Nutrición", ciclo: 2, creditos: 4, prereq: ["c1_0"] },
  "c2_5": { nombre: "Práctica y Profesionalismo Médico I", ciclo: 2, creditos: 2 },

  // CICLO 3
  "c3_0": { nombre: "Bioestadística", ciclo: 3, creditos: 4, prereq: ["c2_3"] },
  "c3_1": { nombre: "Bioquímica y Biología Molecular", ciclo: 3, creditos: 3, prereq: ["c2_4"] },
  "c3_2": { nombre: "Inglés III", ciclo: 3, creditos: 0, prereq: ["c2_0"] },
  "c3_3": { nombre: "Sistema Cardiocirculatorio", ciclo: 3, creditos: 4, prereq: ["c2_1"] },
  "c3_4": { nombre: "Sistema Respiratorio", ciclo: 3, creditos: 4, prereq: ["c2_1"] },
  "c3_5": { nombre: "Nutrición y Estilos de Vida Saludable", ciclo: 3, creditos: 2, prereq: ["c2_4"] },
  "c3_6": { nombre: "Práctica y Profesionalismo Médico II", ciclo: 3, creditos: 2, prereq: ["c2_5"] },

  // CICLO 4
  "c4_0": { nombre: "Inglés IV", ciclo: 4, creditos: 0, prereq: ["c3_2"] },
  "c4_1": { nombre: "Genética y Enfermedad", ciclo: 4, creditos: 3, prereq: ["c1_4"] },
  "c4_2": { nombre: "Sistema Digestivo", ciclo: 4, creditos: 4, prereq: ["c1_4"] },
  "c4_3": { nombre: "Sistema Excretor", ciclo: 4, creditos: 3, prereq: ["c1_4"] },
  "c4_4": { nombre: "Mecanismos de Infección y Defensa", ciclo: 4, creditos: 3, prereq: ["c1_4"] },
  "c4_5": { nombre: "Metodología de la Investigación", ciclo: 4, creditos: 4, prereq: ["c3_0"] },
  "c4_6": { nombre: "Práctica y Profesionalismo Médico III", ciclo: 4, creditos: 2, prereq: ["c3_6"] },

  // CICLO 5
  "c5_0": { nombre: "Inglés V", ciclo: 5, creditos: 0, prereq: ["c4_0"] },
  "c5_1": { nombre: "Sistema Endocrino y Reproductor", ciclo: 5, creditos: 4, prereq: ["c1_4"] },
  "c5_2": { nombre: "Sistema Hematopoyético", ciclo: 5, creditos: 3, prereq: ["c1_4"] },
  "c5_3": { nombre: "Microbiología y Parasitología", ciclo: 5, creditos: 4, prereq: ["c4_2"] },
  "c5_4": { nombre: "Métodos Estadísticos en Biociencias", ciclo: 5, creditos: 4, prereq: ["c4_5"] },
  "c5_5": { nombre: "Práctica y Profesionalismo Médico IV", ciclo: 5, creditos: 2, prereq: ["c4_6"] },

    // CICLO 6
  "c6_0": {
    nombre: "Inglés VI: RREL",
    ciclo: 6,
    creditos: 0,
    prereq: ["c5_0"]
  },
  "c6_1": {
    nombre: "Farmacología",
    ciclo: 6,
    creditos: 4,
    prereq: ["c3_4", "c4_2", "c4_3", "c5_1", "c5_2", "c5_3"]
  },
  "c6_2": {
    nombre: "Integración Fisiopatológica",
    ciclo: 6,
    creditos: 4,
    prereq: ["c5_1", "c5_2", "c5_3"]
  },
  "c6_3": {
    nombre: "Introducción a la Clínica e Interpretación de Exámenes Auxiliares",
    ciclo: 6,
    creditos: 6
  },
  "c6_4": {
    nombre: "Salud Pública",
    ciclo: 6,
    creditos: 2
  },
  "c6_5": {
    nombre: "Ética y Ciudadanía",
    ciclo: 6,
    creditos: 3
  },

  // CICLO 7
  "c7_0": {
    nombre: "Diagnóstico Comunitario",
    ciclo: 7,
    creditos: 4,
    prereq: ["c6_3", "c6_4"]
  },
  "c7_1": {
    nombre: "Especialidades I",
    ciclo: 7,
    creditos: 6,
    prereq: ["c6_0", "c6_1", "c6_2", "c6_3"]
  },
  "c7_2": {
    nombre: "Fundamentos de Educación en Salud",
    ciclo: 7,
    creditos: 3
  },
  "c7_3": {
    nombre: "Principios de Nutrición Clínica y Funcional",
    ciclo: 7,
    creditos: 2,
    prereq: ["c3_5"]
  },
  "c7_4": {
    nombre: "Principios e Introducción a la Medicina P4",
    ciclo: 7,
    creditos: 2,
    prereq: ["c6_3", "c3_5"]
  },
  "c7_5": {
    nombre: "Realidad Nacional y Globalización",
    ciclo: 7,
    creditos: 4
  },
  "c7_6": {
    nombre: "Terapéutica Integrada",
    ciclo: 7,
    creditos: 5,
    prereq: ["c6_0", "c6_1", "c6_2", "c6_3"]
  },

  // CICLO 8
  "c8_0": {
    nombre: "Especialidades II",
    ciclo: 8,
    creditos: 6,
    prereq: ["c7_1", "c7_6", "c6_0"]
  },
  "c8_1": {
    nombre: "Geriatría",
    ciclo: 8,
    creditos: 4,
    prereq: ["c7_1", "c7_6", "c6_0"]
  },
  "c8_2": {
    nombre: "Inglés Médico",
    ciclo: 8,
    creditos: 0,
    prereq: ["c6_0"]
  },
  "c8_3": {
    nombre: "Liderazgo Gerencial y Valores",
    ciclo: 8,
    creditos: 2
  },
  "c8_4": {
    nombre: "Medicina Física y del Deporte",
    ciclo: 8,
    creditos: 4,
    prereq: ["c7_1", "c7_6", "c6_0"]
  },
  "c8_5": {
    nombre: "Nutrición Funcional Aplicada en Especialidades Clínicas y Sistemas",
    ciclo: 8,
    creditos: 3,
    prereq: ["c7_3", "c7_4"]
  },
  "c8_6": {
    nombre: "Salud Mental y Psiquiatría",
    ciclo: 8,
    creditos: 4,
    prereq: ["c6_0", "c6_1", "c6_2", "c6_3"]
  },

  // CICLO 9
  "c9_0": {
    nombre: "Aplicación Clínica de la Medicina P4",
    ciclo: 9,
    creditos: 4,
    prereq: ["c6_2", "c6_3"]
  },
  "c9_1": {
    nombre: "Cirugía y Traumatología",
    ciclo: 9,
    creditos: 6
  },
  "c9_2": {
    nombre: "Gestión en Salud",
    ciclo: 9,
    creditos: 4,
    prereq: ["c6_4", "c8_0"]
  },
  "c9_3": {
    nombre: "Oncología Médica",
    ciclo: 9,
    creditos: 4,
    prereq: ["c8_1", "c8_4", "c8_6"]
  },
  "c9_4": {
    nombre: "Salud Global y Sistemas de Salud",
    ciclo: 9,
    creditos: 3,
    prereq: ["c6_4"]
  },
  "c9_5": {
    nombre: "Tesis I",
    ciclo: 9,
    creditos: 4
  },

  // CICLO 10
  "c10_0": {
    nombre: "Aspectos Legales y Patología Forense",
    ciclo: 10,
    creditos: 3,
    prereq: ["c9_1", "c9_3"]
  },
  "c10_1": {
    nombre: "Emergencias y Desastres",
    ciclo: 10,
    creditos: 3,
    prereq: ["c9_1", "c9_3"]
  },
  "c10_2": {
    nombre: "Ginecología y Obstetricia",
    ciclo: 10,
    creditos: 4,
    prereq: ["c9_1", "c9_3"]
  },
  "c10_3": {
    nombre: "Salud y Actividad Física",
    ciclo: 10,
    creditos: 2
  },
  "c10_4": {
    nombre: "Liderazgo, Innovación y Emprendimiento",
    ciclo: 10,
    creditos: 3,
    prereq: ["c9_2", "c9_4"]
  },
  "c10_5": {
    nombre: "Pediatría",
    ciclo: 10,
    creditos: 4,
    prereq: ["c9_1", "c9_3"]
  },
  "c10_6": {
    nombre: "Ultrasonido Point of Care",
    ciclo: 10,
    creditos: 2
  },

  // CICLO 11
  "c11_1": {
    nombre: "Externado en Cirugía",
    ciclo: 11,
    creditos: 6
  },
  "c11_2": {
    nombre: "Externado en Medicina",
    ciclo: 11,
    creditos: 6
  },
  "c11_3": {
    nombre: "Externado Rotatorio 1",
    ciclo: 11,
    creditos: 4
  },
  "c11_4": {
    nombre: "Externado Rotatorio 2",
    ciclo: 11,
    creditos: 4
  },
  "c11_5": {
    nombre: "Tesis II",
    ciclo: 11,
    creditos: 4,
    prereq: ["c9_5"]
  },

  // CICLO 12
  "c12_0": {
    nombre: "Bioética",
    ciclo: 12,
    creditos: 2,
    prereq: ["c9_5"]
  },
  "c12_1": {
    nombre: "Externado en Gineco-Obstetricia",
    ciclo: 12,
    creditos: 6
  },
  "c12_2": {
    nombre: "Externado en Pediatría",
    ciclo: 12,
    creditos: 6
  },

  // CICLO 13
  "c13_0": {
    nombre: "Internado en Medicina",
    ciclo: 13,
    creditos: 10,
    prereq: ["c9_0"]
  },
  "c13_1": {
    nombre: "Internado en Pediatría",
    ciclo: 13,
    creditos: 10,
    prereq: ["c10_5"]
  },

  // CICLO 14
  "c14_0": {
    nombre: "Internado en Cirugía",
    ciclo: 14,
    creditos: 10,
    prereq: ["c9_0"]
  },
  "c14_1": {
    nombre: "Internado en Ginecología y Obstetricia",
    ciclo: 14,
    creditos: 10,
    prereq: ["c10_2"]
  }
};

  }
};
function crearMalla() {
  const contenedor = document.getElementById("malla");
  const ciclos = {};
  for (const [id, curso] of Object.entries(cursos)) {
    if (!ciclos[curso.ciclo]) {
      const div = document.getElementById("ciclo" + curso.ciclo);
      ciclos[curso.ciclo] = div;
    }
    const boton = document.createElement("div");
    boton.className = "curso";
    boton.id = id;
    boton.textContent = curso.nombre;
    boton.onclick = () => toggleCurso(id);
    ciclos[curso.ciclo].appendChild(boton);
  }
  cargarProgreso();
  actualizarEstado();
}

function toggleCurso(id) {
  const el = document.getElementById(id);
  if (el.classList.contains("bloqueado")) return;
  el.classList.toggle("tachado");
  guardarProgreso();
  actualizarEstado();
}

function actualizarEstado() {
  for (const [id, curso] of Object.entries(cursos)) {
    const el = document.getElementById(id);
    const prereq = curso.prereq || [];
    const cumplidos = prereq.every(pid =>
      document.getElementById(pid)?.classList.contains("tachado")
    );
    if (prereq.length > 0 && !cumplidos) {
      el.classList.add("bloqueado");
    } else {
      el.classList.remove("bloqueado");
    }
  }
}
function guardarProgreso() {
  const completados = [];
  document.querySelectorAll(".curso.tachado").forEach(el => completados.push(el.id));
  localStorage.setItem("progresoMalla", JSON.stringify(completados));
}

function cargarProgreso() {
  const data = JSON.parse(localStorage.getItem("progresoMalla") || "[]");
  data.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("tachado");
  });
}

function resetProgress() {
  localStorage.removeItem("progresoMalla");
  document.querySelectorAll(".curso").forEach(el => el.classList.remove("tachado"));
  actualizarEstado();
}

window.onload = crearMalla;
