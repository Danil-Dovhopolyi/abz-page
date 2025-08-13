import { useEffect } from 'react';
import { useUsers } from '../../hooks/useUsers';
import { Button } from '../ui/Button/Button';
import { UserCard } from '../ui/UserCard/UserCard';
import './Users.scss';

export const Users = () => {
  const { users, hasMore, loading, error, isInitialLoad, buttonLoading, setPage, loadUsers } =
    useUsers();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <section className="users">
      <div className="container">
        <h2 className="users__title heading-1">Working with GET request</h2>
        {error && <p className="users__error body">{error}</p>}
        {isInitialLoad && loading ? (
          <p className="users__loading body">Loading users...</p>
        ) : (
          <>
            <div className="users__grid">
              {users.map((user) => (
                <UserCard key={user.id} user={user} variant="normal" />
              ))}
            </div>
            {hasMore && (
              <Button
                variant="normal"
                onClick={() => setPage((p) => p + 1)}
                disabled={loading}
                className="users__show-more">
                {buttonLoading ? 'Loading...' : 'Show more'}
              </Button>
            )}
          </>
        )}
      </div>
    </section>
  );
};
