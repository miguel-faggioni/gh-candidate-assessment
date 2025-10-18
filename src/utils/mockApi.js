// Mock API service for feed data
const mockFeedData = [
  {
    id: 1,
    singer: "Taylor Swift",
    songName: "Anti-Hero",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face",
    backgroundColor: "#FF6B6B",
    user: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      bio: "Music lover and concert enthusiast 🎵",
      isFollowing: false
    },
    comment: "This song hits different every time I listen to it. Taylor's storytelling is unmatched! 🔥"
  },
  {
    id: 2,
    singer: "The Weeknd",
    songName: "Blinding Lights",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
    backgroundColor: "#4ECDC4",
    user: {
      name: "Mike Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      bio: "Producer & DJ | Electronic music addict",
      isFollowing: true
    },
    comment: "The synthwave vibes in this track are absolutely incredible. Perfect for late night drives! 🌃"
  },
  {
    id: 3,
    singer: "Billie Eilish",
    songName: "Bad Guy",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
    backgroundColor: "#45B7D1",
    user: {
      name: "Emma Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      bio: "Indie music curator | Coffee enthusiast ☕",
      isFollowing: false
    },
    comment: "Billie's unique style and this bass line are just *chef's kiss* 👌"
  },
  {
    id: 4,
    singer: "Drake",
    songName: "God's Plan",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
    backgroundColor: "#96CEB4",
    user: {
      name: "Alex Thompson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      bio: "Hip-hop head | Basketball fan 🏀",
      isFollowing: true
    },
    comment: "This track never gets old. Drake's flow and the message behind it are timeless 💯"
  },
  {
    id: 5,
    singer: "Ariana Grande",
    songName: "Thank U, Next",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
    backgroundColor: "#FFEAA7",
    user: {
      name: "Jessica Park",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      bio: "Pop culture enthusiast | Fashion lover 👗",
      isFollowing: false
    },
    comment: "Ariana's growth and this anthem of self-love is everything we needed! ✨"
  },
  {
    id: 6,
    singer: "Post Malone",
    songName: "Circles",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
    backgroundColor: "#DDA0DD",
    user: {
      name: "Ryan Miller",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      bio: "Music producer | Studio rat 🎧",
      isFollowing: true
    },
    comment: "Post Malone's versatility is insane. This track shows his range perfectly 🎤"
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  // Get all feed items
  async getFeedItems() {
    await delay(800); // Simulate network delay
    return [...mockFeedData];
  },

  // Get a single feed item by ID
  async getFeedItem(id) {
    await delay(300);
    return mockFeedData.find(item => item.id === id);
  },

  // Toggle follow status for a user
  async toggleFollow(userId, itemId) {
    await delay(500);
    const item = mockFeedData.find(item => item.id === itemId);
    if (item && item.user.name === userId) {
      item.user.isFollowing = !item.user.isFollowing;
      return item.user.isFollowing;
    }
    return false;
  },

  // Add a new comment (simulated)
  async addComment(itemId, comment) {
    await delay(400);
    const item = mockFeedData.find(item => item.id === itemId);
    if (item) {
      // In a real app, this would add to the database
      return { success: true, comment };
    }
    return { success: false };
  }
};

export default mockApi;
