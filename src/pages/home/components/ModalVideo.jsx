import React, { useState } from "react";
import "./modalVideo.css";

const ModalVideo = ({ show, onClose }) => {
    if (!show) return null;
  
    return (
      <div className="fixed inset-0 bg-Black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-White rounded-lg overflow-hidden shadow-lg max-w-screen-lg w-full h-auto relative">
          <button
            className="absolute top-0 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold z-50"
            onClick={onClose}
          >
            &times;
          </button>
          <div className="relative w-full h-0 pb-[56.25%]"> {/* This maintains 16:9 aspect ratio */}
            <iframe
              className="absolute top-10 left-0 w-full h-full z-10"
              src="https://www.youtube.com/embed/sqkDnY4ygKs"
              title="XXXIX Jornadas Científicas Hospital Santojanni | Palabras de bienvenida - 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalVideo;
  