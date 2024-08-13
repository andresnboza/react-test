import React, { useState } from "react";
import "../../index.css";
import { IProduct } from "../../interfaces/product.interface";
import TextInput from "../Inputs/TextInput";
import Button from "../Inputs/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../redux/store";
import { fetchProductsSuccess, updateProduct } from "../../redux/product/product.actions";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  const dispatch = useDispatch<AppDispatch>();
  // Using selectors to get all the products
  const products = useSelector((state: AppState) => state.products.products);

  if (!isOpen) return null;

  const [name, setName] = useState(product?.name);
  const [sku, setSKU] = useState(product?.sku);
  const [ean, setEAN] = useState(product?.ean);
  const [id, setId] = useState(product?.id);

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
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {product && (
          <div>
            <h2>Update Product</h2>
            <TextInput
              onChange={(value) => {}}
              placeholder={""}
              label={"Id"}
              value={id}
              loadingState={true}
            />
            <TextInput
              onChange={(value) => setName(value)}
              placeholder={""}
              label={"Name"}
              value={name}
              loadingState={false}
            />
            <TextInput
              onChange={(value) => setSKU(value)}
              placeholder={""}
              label={"SKU"}
              value={sku}
              loadingState={false}
            />
            <TextInput
              onChange={(value) => setEAN(value)}
              placeholder={""}
              label={"EAN"}
              value={ean}
              loadingState={false}
            />
            <Button label={"Update"} type={""} loadingState={false} onClick={handleClick}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
