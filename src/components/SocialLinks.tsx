import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <section className="mt-5">
      <h3 className="text-2xl font-extrabold">Mes réseaux sociaux</h3>
      <ul className="mt-5">
        <li className="flex items-center">
          <FaYoutube className="mr-3" />
          <a
            className="hover:text-[orange]"
            href="https://www.youtube.com/@Gravenilvectuto"
          >
            Youtube
          </a>
        </li>
        <li className="flex items-center">
          <FaTwitter className="mr-3" />
          <a
            className="hover:text-[orange]"
            href="https://twitter.com/?lang=fr"
          >
            Twitter
          </a>
        </li>

        <li className="flex items-center">
          <FaInstagram className="mr-3" />
          <a className="hover:text-[orange]" href="https://www.instagram.com/">
            Instagram
          </a>
        </li>
      </ul>
    </section>
  );
};
