import { apiClient } from './config';
import type { UsersResponse } from './types';

export const getUsers = async (page: number = 1, count: number = 6): Promise<UsersResponse> => {
  try {
    const response = await apiClient.get<UsersResponse>('/users', {
      params: {
        page,
        count,
      }
    });

    if (response.data.success) {
      return response.data;
    } else {
      throw new Error('Failed to fetch users');
    }
  } catch (error) {
    throw error;
  }
};