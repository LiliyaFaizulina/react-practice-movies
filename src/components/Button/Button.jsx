import { Btn } from './Button.styled';
export const Button = ({ text, handlerClick }) => {
  return (
    <Btn type="button" onClick={handlerClick}>
      {text}
    </Btn>
  );
};
