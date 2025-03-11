
import React from 'react';
import { BotaoCustomizado } from './styles';

const Botao = ({ text, $disabled, ...props }) => (
  <BotaoCustomizado $disabled={!!$disabled} {...props}>
    {text}  {/* Aqui você usa a prop text para o conteúdo do botão */}
  </BotaoCustomizado>
);

export default Botao;
