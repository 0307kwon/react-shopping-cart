import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductListPage from '.';
import store from '../../states/store';

describe('ProductListPage', () => {
  test('상품 리스트를 불러온다.', async () => {
    render(
      <Provider store={store}>
        <ProductListPage />
      </Provider>
    );

    await waitFor(() => screen.getByText('test product name'));
  });
});