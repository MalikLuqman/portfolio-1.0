import { contactLinks } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="flex flex-col items-center justify-center py-10 space-y-5 text-white">
        <div className="flex space-x-5">
          {contactLinks.map((contact, index) => {
            const { name, icon, url } = contact;
            return (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <img src={icon} alt={name} className="w-9 h-9" />
              </motion.a>
            );
          })}
        </div>
        <p className="text-xs">© 2023 Malik Luqman</p>
      </div>
    </div>
  );
};

export default Footer;
