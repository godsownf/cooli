export interface Cookie {
  id: string;
  name: string;
  value: string;
  domain: string;
  path: string;
  expiry: string;
  secure: boolean;
  httpOnly: boolean;
}

export interface SessionBackup {
  timestamp: string;
  cookies: Cookie[];
  userAgent: string;
}
