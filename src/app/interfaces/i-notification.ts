export interface INotification {
  title: string;
  message: string;
  type?: 'info' | 'warning' | 'success' | 'error';
  persistant?: boolean;
  id?: string;
}
