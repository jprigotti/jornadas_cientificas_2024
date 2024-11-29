import { useState } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";

export const useGenerateDiploma = () => {


    const generatePDF = async (userData) => {
        // Cargar la plantilla PDF existente
        const existingPdfBytes = await fetch("/pdf/template_certificado_jornadas_2024.pdf").then((res) => res.arrayBuffer());

        // Crear un nuevo documento a partir de la plantilla
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // Obtener la primera página del PDF
        const page = pdfDoc.getPages()[0];

        // Insertar texto personalizado
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        const textSize = 25;
        const color = rgb(0, 0, 0);
        const fullName = userData.name + " " + userData.lastName

        page.drawText(fullName, {
            x: 200, // Ajusta las coordenadas x e y
            y: 310,
            size: textSize,
            font: timesRomanFont,
            color: color,
        });

        page.drawText("Asistente", {
            x: 250,
            y: 280,
            size: 20,
            font: timesRomanFont,
            color: color,
        });

        // Guardar el documento PDF modificado
        const pdfBytes = await pdfDoc.save();

        // Descargar el archivo PDF
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        saveAs(blob, "diploma.pdf");
    };


    // Retutning functions and states
    return { generatePDF }
}