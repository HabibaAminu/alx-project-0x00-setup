export interface User {
  id?: string  // Unique identifier for the user
  name?: string // Full name of the user;
  email: string // Email address of the user
  password: string // Password for the user account
} 
export interface PillProps {
  title: string // Title to be displayed in the pill component
}