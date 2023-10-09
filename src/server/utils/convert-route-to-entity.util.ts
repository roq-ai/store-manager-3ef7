const mapping: Record<string, string> = {
  products: 'product',
  sales: 'sales',
  stocks: 'stock',
  stores: 'store',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
