import React, { CSSProperties, HTMLAttributes } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import { Container } from './styles';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  modalOn: boolean;
}

const Modal: React.FC<ModalProps> = ({ modalOn, children }) => {
  const modal = {
    display: modalOn ? 'flex' : 'none',
  } as CSSProperties;

  return (
    <Container style={modal}>
      <div>
        <FiCheckCircle color="#ffffff" size={40} />
        {children}
      </div>
    </Container>
  );
};

export default Modal;
