import { useState } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";

export const useGenerateCertificados = () => {


    const generatePDF = async (userData) => {
        // Cargar la plantilla PDF existente
        const existingPdfBytes = await fetch("/pdf/template_certificado_jornadas_2024.pdf").then((res) => res.arrayBuffer());

        // Crear un nuevo documento a partir de la plantilla
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // Obtener la primera página del PDF
        const page = pdfDoc.getPages()[0];

        // Insertar texto personalizado
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        const textSize = 14;
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

    /*
    RECEPTOR/SELECTOR DE GENERACION DE CERTIFICADOS
    */

    const generateCertificado = (certificado) => {
        switch (certificado.tipo) {
            case "presidente_temas_libres":
                generateCertificadoPresidenteTemasLibres(certificado);
                break;
            case "secretario_temas_libres":
                generateCertificadoSecretarioTemasLibres(certificado);
                break;
            case "autores_temas_libres":
                generateCertificadoAutoresTemasLibres(certificado);
                break;
        }
    }

    /*
    CERTIFICADO PRESIDENTE TEMAS LIBRES
    */
    const generateCertificadoPresidenteTemasLibres = async (certificado) => {
        // Cargar la plantilla PDF existente
        const existingPdfBytes = await fetch("/pdf/template_certificado_jornadas_2024.pdf").then((res) => res.arrayBuffer());

        // Crear un nuevo documento a partir de la plantilla
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // Obtener la primera página del PDF
        const page = pdfDoc.getPages()[0];

        // Insertar texto personalizado
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        const textSize = 14;
        const color = rgb(0, 0, 0);
        const maxWidth = 800;

        //Format autores y títulos de trabajos
        const autoridadLines = splitTextIntoLines(certificado.autoridad, maxWidth, timesRomanFont, textSize);
        const tituloLines = splitTextIntoLines(certificado.titulo, maxWidth, timesRomanFont, textSize);

        //Completa con nombre y apellido de la autoridad
        let currentY = 310;
        autoridadLines.forEach((line) => {
            page.drawText(line, {
                x: 200, // Ajusta las coordenadas x
                y: currentY, // Ajusta la posición vertical para cada línea
                size: textSize,
                font: timesRomanFont,
                color: color,
            });
            currentY -= textSize + 4; // Espaciado entre líneas
        });

        //Completa con el cargo que ocupó
        currentY -= 15; // Añade un espacio extra entre fullName y título
        tituloLines.forEach((line) => {
            page.drawText(line, {
                x: 250, // Ajusta las coordenadas x
                y: currentY,
                size: 14,
                font: timesRomanFont,
                color: color,
            });
            currentY -= 20 + 4; // Espaciado entre líneas del título
        });

        // Guardar el documento PDF modificado
        const pdfBytes = await pdfDoc.save();

        // Descargar el archivo PDF
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        saveAs(blob, "diploma.pdf");
    };


    /*
   CERTIFICADO SECRETARIO TEMAS LIBRES
   */
    const generateCertificadoSecretarioTemasLibres = async (certificado) => {
        // Cargar la plantilla PDF existente
        const existingPdfBytes = await fetch("/pdf/template_certificado_jornadas_2024.pdf").then((res) => res.arrayBuffer());

        // Crear un nuevo documento a partir de la plantilla
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // Obtener la primera página del PDF
        const page = pdfDoc.getPages()[0];

        // Insertar texto personalizado
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        const textSize = 14;
        const color = rgb(0, 0, 0);
        const maxWidth = 800;

        //Format autores y títulos de trabajos
        const autoridadLines = splitTextIntoLines(certificado.autoridad, maxWidth, timesRomanFont, textSize);
        const tituloLines = splitTextIntoLines(certificado.titulo, maxWidth, timesRomanFont, textSize);

        //Completa con nombre y apellido de la autoridad
        let currentY = 310;
        autoridadLines.forEach((line) => {
            page.drawText(line, {
                x: 200, // Ajusta las coordenadas x
                y: currentY, // Ajusta la posición vertical para cada línea
                size: textSize,
                font: timesRomanFont,
                color: color,
            });
            currentY -= textSize + 4; // Espaciado entre líneas
        });

        //Completa con el cargo que ocupó
        currentY -= 15; // Añade un espacio extra entre fullName y título
        tituloLines.forEach((line) => {
            page.drawText(line, {
                x: 250, // Ajusta las coordenadas x
                y: currentY,
                size: 14,
                font: timesRomanFont,
                color: color,
            });
            currentY -= 20 + 4; // Espaciado entre líneas del título
        });

        // Guardar el documento PDF modificado
        const pdfBytes = await pdfDoc.save();

        // Descargar el archivo PDF
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        saveAs(blob, "diploma.pdf");
    };

    /*
    CERTIFICADO AUTORES TEMAS LIBRES
    */
    const generateCertificadoAutoresTemasLibres = async (certificado) => {
        // Cargar la plantilla PDF existente
        const existingPdfBytes = await fetch("/pdf/template_certificado_jornadas_2024.pdf").then((res) => res.arrayBuffer());

        // Crear un nuevo documento a partir de la plantilla
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // Obtener la primera página del PDF
        const page = pdfDoc.getPages()[0];

        // Insertar texto personalizado
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
        const textSize = 14;
        const color = rgb(0, 0, 0);
        const maxWidth = 500;

        //Format autores y títulos de trabajos
        const autoresLines = splitTextIntoLines(certificado.autores, maxWidth, timesRomanFont, textSize);
        const tituloLines = splitTextIntoLines(certificado.titulo, maxWidth, timesRomanFont, textSize);

        //Completa con los autores
        let currentY = 310;
        autoresLines.forEach((line) => {
            page.drawText(line, {
                x: 200, // Ajusta las coordenadas x
                y: currentY, // Ajusta la posición vertical para cada línea
                size: textSize,
                font: timesRomanFont,
                color: color,
            });
            currentY -= textSize + 1; // Espaciado entre líneas
        });

        //Completa con literal "Autores"
        currentY -= 15; // Añade un espacio extra entre fullName y título
        page.drawText("Autores", {
            x: 250, // Ajusta las coordenadas x
            y: currentY,
            size: 14,
            font: timesRomanFont,
            color: color,
        });

        //Completa con el título del trabajo
        currentY -= 35; // Añade un espacio extra entre fullName y título
        tituloLines.forEach((line) => {
            console.log(line)
            page.drawText(line, {
                x: 250, // Ajusta las coordenadas x
                y: currentY,
                size: 14,
                font: timesRomanFont,
                color: color,
            });
            currentY -= 15 + 4; // Espaciado entre líneas del título
        });

        // Guardar el documento PDF modificado
        const pdfBytes = await pdfDoc.save();

        // Descargar el archivo PDF
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        saveAs(blob, "diploma.pdf");
    };






    // Función para dividir texto en varias líneas
    const splitTextIntoLines = (text, maxWidth, font, size) => {
        const words = text.split(" ");
        let lines = [];
        let currentLine = "";

        words.forEach((word) => {
            const testLine = currentLine ? `${currentLine} ${word}` : word;
            const testLineWidth = font.widthOfTextAtSize(testLine, size);

            if (testLineWidth <= maxWidth) {
                currentLine = testLine;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        });

        if (currentLine) lines.push(currentLine);
        return lines;
    };


    // Retutning functions and states
    return { generatePDF, generateCertificado }
}