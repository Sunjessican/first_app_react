import { FaExternalLinkAlt } from "react-icons/fa";

export const Ressources = () => {
  return (
    <main>
      <h3 className="text-3xl font-extrabold mb-4">Ressources de la chaine</h3>
      <ul>
        <li className="flex items-center">
          <FaExternalLinkAlt className="mr-2" />
          <a className="hover:underline" href="https://www.python.org/">
            Télécharger Pyton
          </a>
        </li>
        <li className="flex items-center">
          <FaExternalLinkAlt className="mr-2" />
          <a className="hover:underline" href="https://nodejs.org/fr/">
            Télécharger nodejs
          </a>
        </li>
        <li className="flex items-center">
          <FaExternalLinkAlt className="mr-2" />
          <a
            className="hover:underline"
            href="https://fr.reactjs.org/docs/create-a-new-react-app.html"
          >
            Voir la documentation pour créer une appli React
          </a>
        </li>
      </ul>
    </main>
  );
};
