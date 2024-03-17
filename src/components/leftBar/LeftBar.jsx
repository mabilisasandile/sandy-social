
import React, { useContext } from 'react';
import './leftBar.scss';
import image from '../../images/social-image.webp';
import friends from '../../images/friends.jpeg';
import groups from '../../images/groups.jpeg';
import market from '../../images/market.jpeg';
import watch from '../../images/watch.jpeg';
import memories from '../../images/memories.jpeg';
import events from '../../images/events.jpeg';
import gaming from '../../images/gaming.jpeg';
import gallery from '../../images/gallery.jpeg';
import videos from '../../images/videos.jpeg';
import fundraiser from '../../images/fundraiser.jpeg';
import tutorials from '../../images/tutorials.jpeg';
import courses from '../../images/courses.jpeg'; 
import messages from '../../images/messages.jpeg';
import { AuthContext } from '../../context/authContext';

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className='leftBar'>
      <div className='container'>
        <div className='menu'>
          <div className='user'>
            <img src={currentUser.profilePic} alt='' />
            <span>{currentUser.name}</span>
          </div>
          <div className='item'>
            <img src={friends} alt='' />
            <span>Friends</span>
          </div>
          <div className='item'>
            <img src={groups} alt='' />
            <span>Groups</span>
          </div>
          <div className='item'>
            <img src={market} alt='' />
            <span>Marketplace</span>
          </div>
          <div className='item'>
            <img src={watch} alt='' />
            <span>Watch</span>
          </div>
          <div className='item'>
            <img src={memories} alt='' />
            <span>Memories</span>
          </div>
        </div>

        <hr/>
        <div className='menu'>
          <span>Your shortcuts</span>
          <div className='item'>
            <img src={events} alt='' />
            <span>Events</span>
          </div>
          <div className='item'>
            <img src={gaming} alt='' />
            <span>Gaming</span>
          </div>
          <div className='item'>
            <img src={gallery} alt='' />
            <span>Gallery</span>
          </div>
          <div className='item'>
            <img src={videos} alt='' />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />

        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={fundraiser} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LeftBar;