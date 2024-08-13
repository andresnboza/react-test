import React from "react";
import "../../index.css";
import { IProduct } from "../../interfaces/product.interface";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {product && (
          <div>
            <h2>Update Product</h2>
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>SKU: {product.sku}</p>
            <p>EAN: {product.ean}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
