import { VFC } from 'react';
import { OrderItem } from '../../../types';
import List from '../../shared/List';
import OrderConfirmListItem from './OrderConfirmListItem';
import { InnerTitle, OrderItemListContainer } from './style';

interface Props {
  title: string;
  items: OrderItem[];
}

const OrderConfirmSection: VFC<Props> = ({ title, items }) => {
  return (
    <OrderItemListContainer>
      <InnerTitle>
        {title} ({items.length}건)
      </InnerTitle>
      <List>
        {items.map((item) => (
          <OrderConfirmListItem item={item} />
        ))}
      </List>
    </OrderItemListContainer>
  );
};

export default OrderConfirmSection;