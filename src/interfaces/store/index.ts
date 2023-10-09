import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StoreInterface {
  id?: string;
  name: string;
  location: string;
  manager_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface StoreGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  manager_id?: string;
}
