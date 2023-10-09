import { SalesInterface } from 'interfaces/sales';
import { StockInterface } from 'interfaces/stock';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  vendor_id: string;
  created_at?: any;
  updated_at?: any;
  sales?: SalesInterface[];
  stock?: StockInterface[];
  vendor?: VendorInterface;
  _count?: {
    sales?: number;
    stock?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  vendor_id?: string;
}
