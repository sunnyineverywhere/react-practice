import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';
import Assignment from './pages/Assignment';
import youtubeData from './data/youtubeData.json';

function App() {
  console.log('id: ', youtubeData['data'][0]['id'], "-> 영상 번호");
  console.log('channelId: ', youtubeData['data'][0]['channelId'], "-> 채널 아이디");
  console.log('date: ', youtubeData['data'][0]['date'], "-> 올린 날짜");
  console.log('title: ', youtubeData['data'][0]['title'], "-> 영상 이름");
  console.log('thumbnail: ', youtubeData['data'][0]['thumbnail'], "-> 썸네일 이미지");
  console.log('description: ', youtubeData['data'][0]['description'], "-> 영상 설명");
  console.log('channelTitle: ', youtubeData['data'][0]['channelTitle'], "-> 채널 이름");
  console.log('category: ', youtubeData['data'][0]['category'], "-> 카테고리");
  console.log('viewCount: ', youtubeData['data'][0]['viewCount'], "-> 조회수");
  console.log('likeCount: ', youtubeData['data'][0]['likeCount'], "-> 좋아요 수");
  console.log('channelUrl: ', youtubeData['data'][0]['channelUrl'], "-> 채널 주소 youtube.com/blackpinkofficial 이렇게");
  console.log('channelThumbnail: ', youtubeData['data'][0]['channelThumbnail'], "-> 채널 썸네일 이미지");
  

  return (
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/explore" element={<Explore />} />
      <Route path = "/subscription" element={<Subscription />} />
      <Route path = "/assignment" element={<Assignment />} />
    </Routes>

    

  );
}

export default App;
