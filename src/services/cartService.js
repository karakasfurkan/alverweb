const CART_STORAGE_KEY = 'shopping_cart';

export const getCartItems = () => {
  const cart = localStorage.getItem(CART_STORAGE_KEY);
  try {
    return cart ? JSON.parse(cart) : [];
  } catch (e) {
    console.error("Sepet bilgileri okunurken hata oluştu, sepet temizleniyor.", e);
    localStorage.removeItem(CART_STORAGE_KEY);
    return [];
  }
};

export const saveCartItems = (items) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
};

export const addToCart = (product, quantity = 1) => {
  const cartItems = getCartItems();
  const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

  if (existingItemIndex > -1) {
    cartItems[existingItemIndex].quantity += quantity;
  } else {
    cartItems.push({ ...product, quantity });
  }
  saveCartItems(cartItems);
  console.log(`${quantity} adet ${product.name} sepete eklendi.`);
};

export const removeFromCart = (productId) => {
  let cartItems = getCartItems();
  cartItems = cartItems.filter(item => item.id !== productId);
  saveCartItems(cartItems);
  console.log('Sepetten çıkarıldı:', productId);
};

export const clearCart = () => {
  localStorage.removeItem(CART_STORAGE_KEY);
  console.log('Sepet temizlendi.');
};