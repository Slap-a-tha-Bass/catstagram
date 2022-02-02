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
export interface Posts {
  id: string;
  user_id: string;
  img_url: string;
  caption: string;
  _created: Date;
}
export interface pgResponse {
  command: string;
  rowCount: number;
  oid: string;
  rows: Object[];
  fields: Object[];
}
