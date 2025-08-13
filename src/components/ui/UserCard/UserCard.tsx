import type { UserCardProps } from './types';
import './UserCard.scss';

export const UserCard: React.FC<UserCardProps> = ({ user, variant = 'normal' }) => {
  return (
    <div className={`user-card user-card--${variant}`}>
      <img className="user-card__photo" src={user.photo} alt={user.name} />
      <h3 className="user-card__name body">{user.name}</h3>
      <div className="user-card__info">
        <p className="body">{user.position}</p>
        <p className="body tooltip" title={user.email}>
          {user.email}
        </p>
        <p className="body">{user.phone}</p>
      </div>
    </div>
  );
};
