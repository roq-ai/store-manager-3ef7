import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface SalesInterface {
  id?: string;
  product_id: string;
  quantity: number;
  total_price: number;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  _count?: {};
}

export interface SalesGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
}
