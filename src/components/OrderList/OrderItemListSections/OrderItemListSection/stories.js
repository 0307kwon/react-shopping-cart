import OrderItemListSection from '.';
import { ORDER_LIST_MOCK } from '../../../../mocks/mockData';

export default {
  component: OrderItemListSection,
  title: 'components/OrderList/OrderItemListSection',
};

const Template = (args) => <OrderItemListSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  order: ORDER_LIST_MOCK[0],
};