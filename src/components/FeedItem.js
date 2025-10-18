import React from 'react';
import UserCard from './UserCard';
import '../styles/FeedItem.css';

const FeedItem = ({ item, onFollowToggle }) => {
  const { singer, songName, image, backgroundColor, user, comment } = item;

  const handleFollowClick = () => {
    onFollowToggle(user.name, item.id);
  };

  return (
    <article className="feed-item" style={{ '--bg-color': backgroundColor }}>
      <div className="feed-item__content">
        {/* Song Information */}
        <div className="song-info">
          <div className="song-image-container">
            <img 
              src={image} 
              alt={`${singer} - ${songName}`}
              className="song-image"
            />
            <div className="song-overlay">
              <div className="play-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="song-details">
            <h3 className="song-artist">{singer}</h3>
            <h4 className="song-title">{songName}</h4>
          </div>
        </div>

        {/* User Comment Section */}
        <div className="user-comment-section">
          <UserCard 
            user={user} 
            onFollowToggle={handleFollowClick}
          />
          <div className="comment-content">
            <p className="comment-text">{comment}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="feed-item__actions">
          <button className="action-btn action-btn--like" aria-label="Like">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>Like</span>
          </button>
          
          <button className="action-btn action-btn--comment" aria-label="Comment">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
            <span>Comment</span>
          </button>
          
          <button className="action-btn action-btn--share" aria-label="Share">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
            <span>Share</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default FeedItem;
