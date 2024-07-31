import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ data, onDelete }) => {
  return (
    <div className={css.contact}>
      <p className={css.contactName}>
        <FaUser />
        {data.name}
      </p>
      <p className={css.contactNumber}>
        <FaPhoneAlt />
        {data.number}
      </p>
      <button
        type="button"
        className={css.deleteButton}
        onClick={() => onDelete(data.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
