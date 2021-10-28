const seccionPrincipal = document.getElementById("seccion-principal")
const seccionCategorias = document.getElementById("seccion-categorias")
const seccionReportes = document.getElementById("seccion-reportes-vacio")
const linkSeccionPrincipalBalance = document.getElementById('link-balance')
const linkCategorias = document.getElementById('link-categorias')
const linkReportes = document.getElementById("link-reportes")

linkCategorias.onclick = () => {
    seccionCategorias.classList.remove('is-hidden');
    seccionPrincipal.classList.add("is-hidden")
    seccionReportes.classList.add("is-hidden")
}

linkSeccionPrincipalBalance.onclick = () => {
    seccionPrincipal.classList.remove("is-hidden")
    seccionReportes.classList.add("is-hidden")
    seccionCategorias.classList.add("is-hidden")
}

linkReportes.onclick = () => {
    seccionReportes.classList.remove("is-hidden")
    seccionPrincipal.classList.add("is-hidden")
    seccionCategorias.classList.add("is-hidden")
}
