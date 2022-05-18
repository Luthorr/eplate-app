export type InputProps = {
  value: string;
  placehorder: string;
  type: 'text' | 'number' | 'textarea' | 'password';
  onChange: (value: string) => void;
};
