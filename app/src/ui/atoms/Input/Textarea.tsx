import styles from './Input.module.css';
import { TextareaProps } from './Textarea.types';

const Textarea = ({ placeholder, value, onChange }: TextareaProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = e;
    onChange(target.value);
  };

  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Textarea;
