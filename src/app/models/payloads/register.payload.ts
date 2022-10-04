export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
}

export interface RegisterPayload extends CreateUserPayload {
  id: number;
  city: string;
  confirmPassword: string;
}
