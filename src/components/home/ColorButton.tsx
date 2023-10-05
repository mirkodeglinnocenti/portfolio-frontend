import { useState, useEffect } from "react";

export default function ColorButton() {
  const color = ["mi", "orange", "red", "green"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

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
