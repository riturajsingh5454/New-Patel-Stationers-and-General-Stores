export interface Product {
  id: string;
  name: string;
  hindiName: string;
  category: string;
  description?: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  hindiName: string;
  items: Product[];
}

export interface NavItem {
  label: string;
  hindiLabel: string;
  href: string;
}
