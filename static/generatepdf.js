document.addEventListener("DOMContentLoaded", () => {
    // Escuchamos el click del botón
    const $boton = document.querySelector("#downloadPDF");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = htmlbody; // <-- Aquí puedes elegir cualquier elemento del DOM
        html2pdf()
            .set({
                margin: 0,
                filename: 'FrancoBizzottoCV.pdf',
                pagebreak: {
                    mode: 'css'
                },
                image: {
                    type: 'jpeg',
                    quality: 1
                },
                html2canvas: {
                    scale: 2, // A mayor escala, mejores gráficos, pero más peso
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "cm",
                    format: "a2",
                    orientation: 'p', // landscape o portrait
                    compress: true
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
    });
});