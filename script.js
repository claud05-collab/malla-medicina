
const cursos = {
  "atencion_integral": { nombre: "Atención Integral", ciclo: 1 },
  "integ_org_humano": { nombre: "Integración Org. Humano", ciclo: 1 },
  "sist_nervioso": { nombre: "Sistema Nervioso", ciclo: 2, prereq: ["integ_org_humano"] },
  "quimica_bio": { nombre: "Química Biológica", ciclo: 2, prereq: ["atencion_integral"] },
  "cardio": { nombre: "Cardio", ciclo: 3, prereq: ["sist_nervioso"] },
  "respiratorio": { nombre: "Respiratorio", ciclo: 3, prereq: ["sist_nervioso"] },
  "digestivo": { nombre: "Digestivo", ciclo: 4, prereq: ["integ_org_humano"] },
  "farmacologia": { nombre: "Farmacología", ciclo: 6, prereq: ["respiratorio", "digestivo"] }
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
            document.getElementById(pid).classList.contains("tachado")
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
