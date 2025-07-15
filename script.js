const cursos = {
  // CICLO 1
  "c1_0": { nombre: "Atención Integral", ciclo: 1 },
  "c1_1": { nombre: "Desarrollo Humano", ciclo: 1 },
  "c1_2": { nombre: "Inglés I", ciclo: 1 },
  "c1_3": { nombre: "Fundamentos de la Promoción de Salud", ciclo: 1 },
  "c1_4": { nombre: "Integración de Estructura y Función del Organismo Humano", ciclo: 1 },
  "c1_5": { nombre: "Lenguaje I", ciclo: 1 },

  // CICLO 2
  "c2_0": { nombre: "Inglés II", ciclo: 2 },
  "c2_1": { nombre: "Sistema Nervioso", ciclo: 2, prereq: ["c1_4"] },
  "c2_2": { nombre: "Lenguaje II", ciclo: 2 },
  "c2_3": { nombre: "Pensamiento Matemático", ciclo: 2 },
  "c2_4": { nombre: "Química y Nutrición", ciclo: 2, prereq: ["c1_0"] },
  "c2_5": { nombre: "Profesionalismo Médico I", ciclo: 2 },

  // CICLO 3
  "c3_0": { nombre: "Bioestadística", ciclo: 3 },
  "c3_1": { nombre: "Bioquímica", ciclo: 3, prereq: ["c2_4"] },
  "c3_3": { nombre: "Cardio", ciclo: 3, prereq: ["c2_1"] },
  "c3_4": { nombre: "Respiratorio", ciclo: 3, prereq: ["c2_1"] },

  // CICLO 4
  "c4_2": { nombre: "Digestivo", ciclo: 4, prereq: ["c1_4"] },
  "c4_3": { nombre: "Excretor", ciclo: 4, prereq: ["c1_4"] },

  // CICLO 5
  "c5_1": { nombre: "Endocrino y Reproductor", ciclo: 5, prereq: ["c1_4"] },
  "c5_2": { nombre: "Hematopoyético", ciclo: 5, prereq: ["c1_4"] },
  "c5_3": { nombre: "Microbiología", ciclo: 5, prereq: ["c4_2"] },

  // CICLO 6
  "c6_1": {
    nombre: "Farmacología",
    ciclo: 6,
    prereq: ["c3_4", "c4_2", "c4_3", "c5_1", "c5_2", "c5_3"]
  },
  "c6_2": {
    nombre: "Fisiopatología",
    ciclo: 6,
    prereq: ["c6_1"]
  },
  "c6_3": {
    nombre: "Clínica y Exámenes",
    ciclo: 6,
    prereq: ["c6_1"]
  },

  // CICLO 7
  "c7_1": {
    nombre: "Especialidades I",
    ciclo: 7,
    prereq: ["c6_2", "c6_3"]
  },

  // CICLO 9
  "c9_0": {
    nombre: "Aplicación Clínica P4",
    ciclo: 9,
    prereq: ["c6_2", "c6_3"]
  },

  // CICLO 10
  "c10_2": {
    nombre: "Ginecología y Obstetricia",
    ciclo: 10,
    prereq: ["c7_1"]
  },
  "c10_5": {
    nombre: "Pediatría",
    ciclo: 10,
    prereq: ["c7_1"]
  },

  // CICLO 13
  "c13_0": {
    nombre: "Internado en Medicina",
    ciclo: 13,
    prereq: ["c9_0"]
  },
  "c13_1": {
    nombre: "Internado en Pediatría",
    ciclo: 13,
    prereq: ["c10_5"]
  },

  // CICLO 14
  "c14_0": {
    nombre: "Internado en Cirugía",
    ciclo: 14,
    prereq: ["c9_0"]
  },
  "c14_1": {
    nombre: "Internado en Ginecología y Obstetricia",
    ciclo: 14,
    prereq: ["c10_2"]
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
