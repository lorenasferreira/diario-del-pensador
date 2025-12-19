import { useParams, useNavigate } from "react-router-dom";
import NewQuote from "./NewQuote";

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
    } else {
      setPhrases([...phrases, { id: Date.now(), ...data }]);
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
