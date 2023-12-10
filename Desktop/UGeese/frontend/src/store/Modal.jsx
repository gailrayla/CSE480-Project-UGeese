import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export default function ItemModal({ open, onClose }) {
  const handleOk = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleBuyNow = () => {
    // Implement the logic for handling "Buy Now"
    // For example, you can redirect to a checkout page or perform other actions
    console.log('Buy Now clicked');
  };

  const handleAddToWishlist = () => {
    // Implement the logic for handling "Add to Wishlist"
    // For example, you can add the item to the user's wishlist
    console.log('Add to Wishlist clicked');
  };

  return (
    <>
      <Modal title="Goose Details" visible={open} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <p>I am your study companion! Quack quack!</p>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
          {/* "Buy Now" button */}
          <Button onClick={handleBuyNow}>
            Buy Now
          </Button>

          {/* "Add to Wishlist" button */}
          <Button onClick={handleAddToWishlist} style={{ marginLeft: '8px' }}>
            Add to Wishlist
          </Button>
        </div>
      </Modal>
    </>
  );
}
