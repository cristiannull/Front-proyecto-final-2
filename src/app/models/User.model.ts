export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  age: number | null;
  rol: Rol;
}

export interface Rol {
  _id: string;
  name: string;
}
