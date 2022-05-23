export type InputProps = {
  value: string;
  placehorder: string;
  type: 'text' | 'number' | 'textarea' | 'password';
  disabled?: boolean;
  onChange: (value: string) => void;
};
