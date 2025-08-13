import type { User } from "../../../api/types";

export type UserCardVariant = 'normal';

export interface UserCardProps {
  user: User;
  variant?: UserCardVariant;
}