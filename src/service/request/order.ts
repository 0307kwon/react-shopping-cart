import { nanoid } from 'nanoid';
import APIClient from '../../API';
import { ItemInCart, Order } from '../../types';

export const requestOrderItems = (items: ItemInCart[]) => {
  const newOrder: Order = { id: nanoid(), items };
  APIClient.post<Order>('/order', newOrder);
};