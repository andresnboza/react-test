import React, { useState } from "react";
import "../../index.css";
import { IProduct } from "../../interfaces/product.interface";
import TextInput from "../Inputs/TextInput";
import Button from "../Inputs/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { updateProduct } from "../../redux/product/product.actions";
import { useTheme } from "../../contexts/ThemeContext";
import "../../App.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  const dispatch = useDispatch<AppDispatch>();
  // Using selectors to get all the products

  if (!isOpen) return null;

  const [name, setName] = useState(product?.name);
  const [sku, setSKU] = useState(product?.sku);
  const [ean, setEAN] = useState(product?.ean);
  const [id, _] = useState(product?.id);

  const { theme } = useTheme();

  const handleClick = () => {
    const updatedProduct = {
      id: product?.id,
      name: name,
      sku: sku,
      ean: ean,
    } as IProduct;

    dispatch(updateProduct(updatedProduct));
    onClose();
  };

  return (
    <div className={`modal-overlay ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className={`modal-content ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <button className={`modal-close ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} onClick={onClose}>
          ×
        </button>
        {product && (
          <div>
            <h2>Update Product</h2>
            <TextInput
              onChange={() => {}}
              placeholder={""}
              label={"Id"}
              value={id}
              loadingState={true}
              theme={theme}
            />
            <TextInput
              onChange={(value) => setName(value)}
              placeholder={""}
              label={"Name"}
              value={name}
              loadingState={false}
              theme={theme}
            />
            <TextInput
              onChange={(value) => setSKU(value)}
              placeholder={""}
              label={"SKU"}
              value={sku}
              loadingState={false}
              theme={theme}
            />
            <TextInput
              onChange={(value) => setEAN(value)}
              placeholder={""}
              label={"EAN"}
              value={ean}
              loadingState={false}
              theme={theme}
            />
            <Button label={"Update"} type={""} loadingState={false} onClick={handleClick}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
