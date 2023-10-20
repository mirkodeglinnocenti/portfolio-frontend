import { useState, useEffect } from "react";

export default function ColorButton() {
  const color = ["blue", "orange", "red", "green"];
  const sessionColor = localStorage.getItem("color");
  const initialColorIndex = sessionColor ? parseInt(sessionColor) : 0;
  const [currentColorIndex, setCurrentColorIndex] = useState(initialColorIndex);

  useEffect(() => {
    // Rimuovi la classe precedente
    if (currentColorIndex === 0) {
      document.body.classList.remove(color[color.length - 1]);
    } else {
      document.body.classList.remove(color[currentColorIndex - 1]);
    }

    // Aggiungi la nuova classe
    const currentColorClass = color[currentColorIndex];
    if (currentColorClass) {
      document.body.classList.add(currentColorClass);
      // salvo nello storage la preferenza
      console.log("ciao")
      localStorage.setItem("color", `${currentColorIndex}`);
    }
  }, [currentColorIndex]);

  const toggleColor = () => {
    setCurrentColorIndex((prevIndex) =>
      prevIndex === color.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <button
      className="hidden md:block fixed top-[15%] right-[5%] text-white border-2 border-primary-color px-2 leading-[70px] rounded-[50%] "
      onClick={toggleColor}
    >
      Cliccami
    </button>
  );
}
