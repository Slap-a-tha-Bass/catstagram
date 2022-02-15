import { Request } from "express";

export interface Users {
  id?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  password?: string;
  isVerified?: number;
  _created?: Date;
  user_id?: string;
}
export interface Posts {
  id?: string;
  user_id?: string;
  img_url?: string;
  caption?: string;
  _created?: Date;
}
export interface pgResponse {
  command?: string;
  rowCount?: number;
  oid?: string;
  rows?: Object[];
  fields?: Object[];
}
export interface ReqUser extends Request {
  user?: Users;
  userid?: string;
}
export interface IPost {
  id: string;
  user_id: string;
  img_url: string;
  caption: string;
  _created: Date;
  username: string;
  first_name: string;
  last_name: string;
}
export interface IComments {
  id?: string;
  user_id?: string;
  post_id?: string;
  content?: string;
  _created?: Date;
}
