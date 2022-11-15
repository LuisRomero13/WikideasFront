import React, { useRef } from "react";
import "./styles/NewTheme.css";
import { Editor } from "@tinymce/tinymce-react";
export interface NewThemeInterface {}

const NewTheme: React.FC<NewThemeInterface> = () => {
  const submitHandler = (e) => {};
  const editorRef = useRef(null);
  return (
    <div className="newtheme">
      <h1 className="newtheme__title">Creación del tema</h1>
      <form className="form__container" onSubmit={submitHandler}>
        <div style={{display: 'flex', width: '100%', alignItems: 'center', marginTop: '2em'}}>
          <div className="form__content" >
            <div className="form__row">
              <div className="form__group">
                <input type="text" name="titulo" className="form__input" />
                <label className="form__label">Titulo</label>
              </div>
              <div className="form__group">
                <select name="category" id="category" className="form__select">
                  <option value="tecnologia">Tecnologia</option>
                  <option value="politica">Politica</option>
                  <option value="ciencia">Ciencia</option>
                  <option value="cineArte">Cine y arte</option>
                  <option value="curiosidades">Curiosidades</option>
                </select>
                <label className="form__label">Categoria</label>
              </div>
            </div>
            <Editor
              apiKey="bwpwtl3ji8ktvhywiu3rafc8sk7exeaj6axiww1b0fvyjlim"
              onInit={(evt, editor) => (editorRef.current = editor as any)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>
          <div className="form__upload" style={{display: 'grid', placeItems: 'center', width: '50%'}}>
            <label htmlFor="file">Sube una imagen</label>
            <input
              type="file"
              className="newtheme__upload-input"
              accept="image/*"
              id="file"
              style={{ display: "none" }}
            />
          </div>
        </div>
        <button className="form__submit" type="submit">crear tema</button>
      </form>
      {/* <div className="newtheme__texts">
        <input type="text" className="newtheme__input" />
      </div>
      <div className="newtheme__upload">
        <h1 className="newtheme__upload-title">Sube una imagen</h1>
        <input
          type="file"
          className="newtheme__upload-input"
          accept="image/*"
        />
      </div> */}
    </div>
  );
};

export default NewTheme;
