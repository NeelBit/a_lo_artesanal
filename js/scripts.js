(function() {
    'use strict';

    // esperar que todo el codigo html primero termine de cargarse
    document.addEventListener('DOMContentLoaded', function() {

        // que las imagenes carguen juntas al cargar todas
        window.addEventListener("load", () => {

            /* que al hacer click en algun item del menu desaparesca check */
            const items_menu = document.querySelectorAll(".nav__enlace");
            const nav__input_check = document.querySelector(".nav__input");

            items_menu.forEach(e => {
                e.addEventListener("click", (enlace) => {
                    nav__input_check.click();
                })
            });

            // añadir clase imagenes-cargadas para darle opacidad a las imagenes
            document.querySelector(".galeria__contenido").classList.add("imagenes-cargadas");

            /* activo */
            const enlacesCategorias = document.querySelectorAll(".nav a");

            enlacesCategorias.forEach((a) => {
                a.addEventListener("click", (e) => {
                    // quita por ejemplo el # , el comportamiento por defecto
                    //e.preventDefault();

                    // quitar activo:
                    const enlaceActivo = document.querySelector(".activo");

                    if (enlaceActivo != null) {
                        enlaceActivo.classList.remove("activo");
                    }

                    // colocar activo al clickeado
                    e.target.classList.add("activo");
                })
            });

        })

        /* agrandar imagen al hacer doble click */
        const imagenes = document.querySelectorAll(".item-content img");
        const overlay = document.querySelector("#overlay");

        imagenes.forEach((img) => {
            img.addEventListener("click", (e) => {
                const contenedorImg = document.querySelector(".contenedor-img picture img");
                const figCaptionImg = document.querySelector(".contenedor-img figcaption");

                overlay.classList.add("overlay-activo");
                contenedorImg.setAttribute("src", `${img.getAttribute("src")}`);
                contenedorImg.setAttribute("alt", `${img.getAttribute("alt")}`);

                figCaptionImg.innerHTML = `<p>${img.getAttribute("alt")}</p>`;

                const figCaptionImgPP = document.querySelector(".contenedor-img figcaption p");
                figCaptionImgPP.classList.add("subtitulo");

                /* añadir detalles al figcaption */
                const card_detalles_parr1 = document.querySelector("#detail1");
                const card_detalles_parr2 = document.querySelector("#detail2");
                figCaptionImg.innerHTML = `${figCaptionImg.innerHTML}<p>${card_detalles_parr1.innerHTML}</p><p>${card_detalles_parr2.innerHTML}</p>`;
            })
        });

        /* btn de cerrar */
        document.querySelector(".btn-cerrar").addEventListener("click", () => {
            overlay.classList.remove("overlay-activo");
        })

        /* cerrar al hacer doble click en el overlay */
        overlay.addEventListener("dblclick", () => {
            overlay.classList.remove("overlay-activo");
        })

        /* cerrar al hacer click en la parte oscura */
        overlay.addEventListener("click", (e) => {
            if (e.target.id === "overlay") {
                overlay.classList.remove("overlay-activo");
            }
        })

    });

})();