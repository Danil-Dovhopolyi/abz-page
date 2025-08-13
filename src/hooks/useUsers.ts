import { useCallback, useState } from 'react';
import { getUsers } from '../api/getUsers';
import type { User } from '../api/types';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const loadUsers = useCallback(async () => {
    if (loading) return;

    try {
      setLoading(true);
      setButtonLoading(page > 1);
      setError(null);

      const data = await getUsers(page);

      setUsers((prev) => {
        const newUsers = data.users.filter(
          (newUser) => !prev.some((existingUser) => existingUser.id === newUser.id)
        );
        return [...prev, ...newUsers];
      });

      setHasMore(data.page < data.total_pages);
      setIsInitialLoad(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to load users');
      setHasMore(false);
    } finally {
      setLoading(false);
      setButtonLoading(false);
    }
  }, [page]);

  return {
    users,
    hasMore,
    loading,
    error,
    isInitialLoad,
    buttonLoading,
    setPage,
    loadUsers
  };
};