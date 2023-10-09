interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Inventory Manager', 'Store Manager', 'Business Owner'],
  tenantName: 'Vendor',
  applicationName: 'Store Manager',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user information',
    'Manage vendor details',
    'Manage product information',
    'Manage sales and stock',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/fe4b9d00-1275-41ad-877d-896c103883e2',
};
