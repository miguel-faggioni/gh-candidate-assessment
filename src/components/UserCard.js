import React from 'react';
import '../styles/UserCard.css';

const UserCard = ({ user, onFollowToggle, comment }) => {
  const { name, image, bio, isFollowing } = user;

  const src = `https://picsum.photos/seed/${name}/44/44`
  
  return (
    <div className="user-card">
      <div className="user-card__avatar">
        <img 
          src={src} 
          alt={name}
          className="user-avatar"
        />
      </div>

    <div className="not_avatar">
      <div className="user-card__info">
        <div className="user-info">
          <div className="user-name-row">
            <h4 className="user-name">{name}</h4>
    <span className="following-dot">•</span>
            <span className="following-status">{!isFollowing && 'Not '}Following</span>
          </div>
          <p className="user-bio">{bio}</p>
        </div>
      </div>

    <div className="bottom_row">
    <p className="comment-text">"{comment}"</p>
    
      <div className="user-card__actions">
        <button 
          className="like-btn"
          aria-label="Like"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
    </div>
    </div>
    </div>
    </div>
  );
};

export default UserCard;
