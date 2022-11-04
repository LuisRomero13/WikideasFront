import React from "react";
import "./styles/NewTheme.css";
export interface NewThemeInterface {}

const NewTheme: React.FC<NewThemeInterface> = () => {
  return (
    <div className="newtheme">
      <div className="newtheme__texts">
        <h1 className="newtheme__title">Coloca el título del tema</h1>
        <input type="text" className="newtheme__input" />
      </div>
      <div className="newtheme__upload">
        <h1 className="newtheme__upload-title">Sube una imagen</h1>
        <input
          type="file"
          className="newtheme__upload-input"
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default NewTheme;
