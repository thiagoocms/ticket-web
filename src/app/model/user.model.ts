export interface User {
   id: number | undefined,
   name: string,
   documentNumber: string,
   documentType: string,
   login: string,
   password: string,
   profile: UserProfileEnum
}

export enum UserProfileEnum {

   ADMIN = "ADMIN",
   EMPLOYEE = "EMPLOYEE",
   USER = "USER"

}