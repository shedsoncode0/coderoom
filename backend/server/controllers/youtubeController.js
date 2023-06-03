const getYoutubePlaylist = async () => {
  async function getPlaylistVideos(playlistId, apiKey) {
    try {
      const maxResults = 50; // Maximum number of results per API request
      let videos = [];
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}`
      );
      videos = videos.concat(response.data.items);
      return videos;
    } catch (error) {
      console.error('Error fetching playlist videos:', error);
      throw error;
    }
  }

  try {
    const playlistId = req.query.playlistId;
    const apiKey = 'YOUR_YOUTUBE_API_KEY';

    const videos = await getPlaylistVideos(playlistId, apiKey);
    res.json(videos);
  } catch (error) {
    console.error('Error fetching playlist videos:', error);
    res.status(500).json({ error: 'Failed to fetch playlist videos' });
  }
};
