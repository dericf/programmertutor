export interface ContactFormResponse {
  success: boolean;
  error?: string;
}

export interface ContactFormSubmitData {
  name: string;
  email: string;
  course: string;
  message: string;
  agreedToTerms: boolean;
  token: string;
}