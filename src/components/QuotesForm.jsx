import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateNewPhrase({ phrases, setPhrases }) {
  const navigate = useNavigate();

  const { id } = useParams();
  const isEditing = Boolean(id);

  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    if (isEditing) {
      const phraseToEdit = phrases.find(
        (p) => p.id === Number(id)
      );

      if (phraseToEdit) {
        setPhrase(phraseToEdit.text);
      }
    }
  }, [id, isEditing, phrases]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedPhrases = phrases.map((p) =>
        p.id === Number(id)
          ? { ...p, text: phrase }
          : p
      );

      setPhrases(updatedPhrases);
    } else {
      const newPhrase = {
        id: Date.now(),
        text: phrase,
        author: "",
        etiq: "",
      };

      setPhrases([...phrases, newPhrase]);
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEditing ? "Editar frase" : "Añadir nueva frase"}</h2>

      <p>Escribe la frase que quieras guardar para tu yo del futuro</p>

      <input
        type="text"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder="Escribe tu frase"
        required
      />

      <button type="submit">
        {isEditing ? "Guardar cambios" : "Guardar frase"}
      </button>
    </form>
  );
}

export default CreateNewPhrase;
