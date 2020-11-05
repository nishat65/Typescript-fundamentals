namespace App {
 export interface store {
  name: string,
  quantity?: number,
  items?: string[]
 }

 export type manager = {
  fullname: string,
 }

 export type displayCollection = (args: string[]) => string[]
}