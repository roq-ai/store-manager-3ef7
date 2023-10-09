import queryString from 'query-string';
import { VendorInterface, VendorGetQueryInterface } from 'interfaces/vendor';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVendors = async (query?: VendorGetQueryInterface): Promise<PaginatedInterface<VendorInterface>> => {
  return fetcher('/api/vendors', {}, query);
};

export const createVendor = async (vendor: VendorInterface) => {
  return fetcher('/api/vendors', { method: 'POST', body: JSON.stringify(vendor) });
};

export const updateVendorById = async (id: string, vendor: VendorInterface) => {
  return fetcher(`/api/vendors/${id}`, { method: 'PUT', body: JSON.stringify(vendor) });
};

export const getVendorById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/vendors/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteVendorById = async (id: string) => {
  return fetcher(`/api/vendors/${id}`, { method: 'DELETE' });
};
