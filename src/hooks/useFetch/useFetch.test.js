import useFetch from '.';
import { renderHook } from '@testing-library/react-hooks';
import { requestProductList } from '../../service/request/productList';
import { NETWORK_ERROR } from '../../constants/error';

describe('useFetch', () => {
  test('loading', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(() => requestProductList()));

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
  });

  test('error', async () => {
    const { result } = renderHook(() =>
      useFetch(() => {
        throw new Error('에러났어용');
      })
    );

    expect(result.error).toEqual(Error(NETWORK_ERROR));
  });

  test('data fetch', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(() => requestProductList()));

    await waitForNextUpdate();

    expect(result.current.data).not.toBe(null);
  });
});
