export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: 'Scale' | 'Gavel' | 'Shield' | 'FileText' | 'Building' | 'Users';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  STREAMING = 'STREAMING',
  ERROR = 'ERROR'
}