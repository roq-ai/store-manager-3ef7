import queryString from 'query-string';
import { StockInterface, StockGetQueryInterface } from 'interfaces/stock';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getStocks = async (query?: StockGetQueryInterface): Promise<PaginatedInterface<StockInterface>> => {
  return fetcher('/api/stocks', {}, query);
};

export const createStock = async (stock: StockInterface) => {
  return fetcher('/api/stocks', { method: 'POST', body: JSON.stringify(stock) });
};

export const updateStockById = async (id: string, stock: StockInterface) => {
  return fetcher(`/api/stocks/${id}`, { method: 'PUT', body: JSON.stringify(stock) });
};

export const getStockById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/stocks/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteStockById = async (id: string) => {
  return fetcher(`/api/stocks/${id}`, { method: 'DELETE' });
};
