export interface Users {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  isVerified?: number;
  _created?: Date;
}
export interface pgResponse {
  command: string;
  rowCount: number;
  oid: string;
  rows: string[];
}
