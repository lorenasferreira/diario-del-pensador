import { useParams, useNavigate } from "react-router-dom";
import NewQuote from "./NewQuote/NewQuote";

const CreateNewPhrase = ({ phrases, setPhrases }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const phraseToEdit = isEditing
    ? phrases.find((p) => p.id === Number(id))
    : null;

  const handleSubmit = (data) => {
    if (isEditing) {
      const updatedPhrases = phrases.map((p) =>
        p.id === Number(id) ? { ...p, ...data } : p
      );
      setPhrases(updatedPhrases);

      alert("¡Frase editada con éxito!");
    } else {
      setPhrases([...phrases, { id: Date.now(), ...data }]);

      alert("¡Frase añadida a la lista!");
    }

    navigate("/");
  };

  return (
    <NewQuote
      initialData={phraseToEdit}
      onSubmit={handleSubmit}
      isEditing={isEditing}
    />
  );
};

export default CreateNewPhrase;