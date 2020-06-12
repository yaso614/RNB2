import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
 const followerList = [{ nickname: '제로초'}, { nickname: '바보'}, { nickname: '바보'}];
 const followingList = [{ nickname: '제로초'}, { nickname: '바보'}, { nickname: '바보'}];

 return (
   <>
    <Head>
      <title>내 프로필 | NodeBird</title>
    </Head>
    <Header>
      <NicknameEditForm />
      <FollowList heade="팔로잉 목록" data={followingList} />
      <FollowList heade="팔로워 목록" data={followerList} />
    </Header>
   </>
 )
};

export default Profile;
