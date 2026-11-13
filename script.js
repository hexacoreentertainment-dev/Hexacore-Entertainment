document.addEventListener("DOMContentLoaded", function () {
    const elementos =
        document.querySelectorAll(".fade-element");
    const observer = new IntersectionObserver(
        function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.15
        }
    );
    elementos.forEach(function (elemento) {
        observer.observe(elemento);
    });
});