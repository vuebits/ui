export interface TableHeader {
  label: string;
  for: string;
}

export type TableItem = {[key in string]: any};

export interface TableColumn {
  width?: number;
  style?: {[key: string]: any};
};
