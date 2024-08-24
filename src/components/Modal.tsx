import React from "react";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: any;
  onClose: any;
  children: any;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-black text-white rounded-lg overflow-hidden shadow-xl 
        transform transition-all max-w-lg w-full">
        <div className="p-4">{children}</div>
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
