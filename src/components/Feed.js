import React, { useState, useEffect } from 'react';
import FeedItem from './FeedItem';
import { mockApi } from '../utils/mockApi';
import '../styles/Feed.css';

const Feed = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadFeedItems();
  }, []);

  const loadFeedItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const items = await mockApi.getFeedItems();
      setFeedItems(items);
    } catch (err) {
      setError('Failed to load feed items');
      console.error('Error loading feed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFollowToggle = async (userId, itemId) => {
    try {
      const newFollowStatus = await mockApi.toggleFollow(userId, itemId);
      setFeedItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId
            ? { ...item, user: { ...item.user, isFollowing: newFollowStatus } }
            : item
        )
      );
    } catch (err) {
      console.error('Error toggling follow:', err);
    }
  };

  if (loading) {
    return (
      <div className="feed-loading">
        <div className="loading-spinner"></div>
        <p>Loading your music feed...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="feed-error">
        <p>{error}</p>
        <button onClick={loadFeedItems} className="btn btn--primary">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="feed">
      <div className="feed-header">
        <h2 className="feed-title">Music Feed</h2>
        <p className="feed-subtitle">Discover what your friends are listening to</p>
      </div>
      
      <div className="feed-items">
        {feedItems.map(item => (
          <FeedItem
            key={item.id}
            item={item}
            onFollowToggle={handleFollowToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
