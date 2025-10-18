import React from 'react';
import '../styles/UserCard.css';

const UserCard = ({ user, onFollowToggle }) => {
  const { name, image, bio, isFollowing } = user;

  return (
    <div className="user-card">
      <div className="user-card__avatar">
        <img 
          src={image} 
          alt={name}
          className="user-avatar"
        />
      </div>
      
      <div className="user-card__info">
        <div className="user-info">
          <h4 className="user-name">{name}</h4>
          <p className="user-bio">{bio}</p>
        </div>
        
        <button 
          className={`follow-btn ${isFollowing ? 'follow-btn--following' : 'follow-btn--not-following'}`}
          onClick={onFollowToggle}
          aria-label={isFollowing ? 'Unfollow' : 'Follow'}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
