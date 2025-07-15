const cursos = {
  "c1_0": { nombre: "Atención Integral", ciclo: 1 },
  "c1_4": { nombre: "Integración de Estructura y Función del Organismo Humano", ciclo: 1 },

  "c2_1": { nombre: "Sistema Nervioso", ciclo: 2, prereq: ["c1_4"] },
  "c2_4": { nombre: "Química y Nutrición", ciclo: 2, prereq: ["c1_0"] },

  "c3_1": { nombre: "Bioquímica y Biología Molecular", ciclo: 3, prereq: ["c2_4"] },
  "c3_3": { nombre: "Cardio-Circulatorio", ciclo: 3, prereq: ["c2_1"] },
  "c3_4": { nombre: "Respiratorio", ciclo: 3, prereq: ["c2_1"] },

  "c4_2": { nombre: "Sistema Digestivo", ciclo: 4, prereq: ["c1_4"] },
  "c4_3": { nombre: "Sistema Excretor", ciclo: 4, prereq: ["c1_4"] },

  "c5_1": { nombre: "Sistema Endocrino y Reproductor", ciclo: 5, prereq: ["c1_4"] },
  "c5_2": { nombre: "Sistema Hematopoyético", ciclo: 5, prereq: ["c1_4"] },
  "c5_3": { nombre: "Microbiología", ciclo: 5, prereq: ["c4_2"] },

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
    nombre: "Introducción a la Clínica",
    ciclo: 6,
    prereq: ["c6_1"]
  },

  "c9_0": {
    nombre: "Aplicación Clínica de la Medicina P4",
    ciclo: 9,
    prereq: ["c6_2", "c6_3"]
  },
  "c13_0": {
    nombre: "Internado en Medicina",
    ciclo: 13,
    prereq: ["c9_0"]
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
