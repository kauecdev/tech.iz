import React, { CSSProperties, HTMLAttributes } from 'react';
import { FiCheckCircle, FiX } from 'react-icons/fi';

import { Container } from './styles';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  modalOn: boolean;
  type: string;
}

const Modal: React.FC<ModalProps> = ({ modalOn, type, children }) => {
  const modal = {
    display: modalOn ? 'flex' : 'none',
  } as CSSProperties;

  return (
    <Container type={type} style={modal}>
      <div>
        {type === 'success' ? (
          <FiCheckCircle color="#ffffff" size={40} />
        ) : (
          <FiX color="#ffffff" size={40} />
        )}

        {children}
      </div>
    </Container>
  );
};

export default Modal;
