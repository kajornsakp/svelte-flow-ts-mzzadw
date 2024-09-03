export interface YAMLData {
  [key: string]: any;
}

export interface CodeSmell {
  description: string;
  severity: 'low' | 'medium' | 'high';
}
