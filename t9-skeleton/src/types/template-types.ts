// template-specific types

export type Status = 'idle' | 'loading';

export type LoadingStatus = 'loading' | 'loaded' | 'not-loaded';

export type ComponentImporter = () => Promise<{ default: () => JSX.Element }>;

interface URLV2 {
  exact?: boolean;
  is: string;
  type?: '404' | '302' | '2xx';
}

export interface LazyComponent {
  component: () => JSX.Element;
  import?: ComponentImporter;
  status?: LoadingStatus;
  transition?: {
    key?: () => string;
    level?: number;
  };
  protected?: {
    isAccessible: () => boolean;
    redirectTo: string;
  };
  url: URLV2;
  operationName?: string;
}

export type ActionStatus = 'pending' | 'done' | 'not-called';

export interface LazyAction {
  status: ActionStatus;
  actionPromises: Array<() => Promise<void>>;
  repeatable?: boolean;
  url: URLV2;
  operationName?: string;
}

export interface Err {
  code?: string;
  message: string;
}
