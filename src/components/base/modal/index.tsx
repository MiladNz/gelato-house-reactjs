import type React from "react";
import type { JSX, PropsWithChildren } from "react";

type ModalProps = {
  title: string;
  onClose: () => void;
} & PropsWithChildren;

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  onClose = () => {},
}): JSX.Element | null => {
  if (!children) return <></>;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2xl max-w-full z-100 flex flex-col">
        {/* Header */}
        <div className="flex justify-center items-center relative">
          <h2 className="text-xl font-bold text-center">{title}</h2>
          <i
            className="absolute -top-2 left-0 text-3xl cursor-pointer"
            onClick={onClose}>
            &times;
          </i>
          {/* 16.30 */}
        </div>
        {/* Body */}
        <div className="flex">{children}</div>
      </div>
      <div className="bg-black opacity-50 inset-0 fixed" onClick={onClose} />
    </div>
  );
};

export default Modal;
