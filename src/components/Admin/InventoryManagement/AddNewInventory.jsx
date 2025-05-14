import React, { useState, useEffect } from 'react';

const AddNewInventory = ({ onSubmit, onCancel, itemData, isEditing = false }) => {
  const [formData, setFormData] = useState({
    itemName: '',
    sku: '',
    category: 'Medical Supplies',
    initialStock: '',
    unitPrice: '',
    manufacturer: '',
    expiryDate: '',
    description: '',
    storageLocation: ''
  });

  // Initialize form data if editing an existing item
  useEffect(() => {
    if (itemData && isEditing) {
      setFormData({
        itemName: itemData.itemName || '',
        sku: itemData.sku || '',
        category: itemData.category || 'Medical Supplies',
        initialStock: itemData.initialStock || '',
        unitPrice: itemData.unitPrice || '',
        manufacturer: itemData.manufacturer || '',
        expiryDate: itemData.expiryDate || '',
        description: itemData.description || '',
        storageLocation: itemData.storageLocation || ''
      });
    }
  }, [itemData, isEditing]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Call the onSubmit function passed from the parent component
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="py-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="itemName" className="form-label fw-medium">
            Item Name
          </label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            placeholder="Enter item name"
            value={formData.itemName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="sku" className="form-label fw-medium">
              SKU
            </label>
            <input
              type="text"
              className="form-control"
              id="sku"
              placeholder="Enter SKU"
              value={formData.sku}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="category" className="form-label fw-medium">
              Category
            </label>
            <select
              className="form-select"
              id="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option>Medical Supplies</option>
              <option>General Supplies</option>
              <option>Pharmaceuticals</option>
              <option>Equipment</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="initialStock" className="form-label fw-medium">
              {isEditing ? 'Current Stock' : 'Initial Stock'}
            </label>
            <input
              type="number"
              className="form-control"
              id="initialStock"
              placeholder="Enter quantity"
              value={formData.initialStock}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="unitPrice" className="form-label fw-medium">
              Unit Price
            </label>
            <input
              type="text"
              className="form-control"
              id="unitPrice"
              placeholder="Enter unit price"
              value={formData.unitPrice}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="manufacturer" className="form-label fw-medium">
              Manufacturer
            </label>
            <input
              type="text"
              className="form-control"
              id="manufacturer"
              placeholder="Enter manufacturer"
              value={formData.manufacturer}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="expiryDate" className="form-label fw-medium">
              Expiry Date
            </label>
            <input
              type="date"
              className="form-control"
              id="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="form-label fw-medium">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="4"
            placeholder="Enter item description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="storageLocation" className="form-label fw-medium">
            Storage Location
          </label>
          <input
            type="text"
            className="form-control"
            id="storageLocation"
            placeholder="Enter storage location"
            value={formData.storageLocation}
            onChange={handleChange}
          />
        </div>
        
        <div className="d-flex justify-content-end gap-2 mt-4">
          <button
            type="button"
            className="btn btn-outline-dark border"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn fw-semibold"
            style={{backgroundColor: "#F3FF47"}}
          >
            {isEditing ? 'Update Item' : 'Save Item'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewInventory;