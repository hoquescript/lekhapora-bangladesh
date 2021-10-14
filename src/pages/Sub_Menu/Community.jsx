import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import Header from '../../components/Community/Header';
import AnnouncePost from '../../components/Community/AnnouncePost';
import PostList from '../../components/Community/PostList';
import axios from '../../config/axios';

const Community = () => {
  const matches = useMediaQuery('(max-width:1200px)');
  const [posts, setPosts] = useState([]);

  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);

  useEffect(() => {
    axios.get(`${userType}/course/${courseId}/post`).then((res) => {
      setPosts(res.data);
    });
  }, [courseId, userType]);

  return (
    <>
      <Header />
      <div style={{ width: matches ? '94%' : '70%', margin: '0 auto' }}>
        <AnnouncePost posts={posts} setPosts={setPosts} />
        <PostList posts={posts} />
      </div>
    </>
  );
};

export default Community;
