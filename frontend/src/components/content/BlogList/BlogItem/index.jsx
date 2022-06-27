import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';
import { UilAngleRightB } from '@iconscout/react-unicons'

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <Link className='blogItem-link' to={`/blog/${id}`}>
        <h4>{title}</h4>
      </Link>
      <p className='blogItem-desc'>{description?.substring(0, 75) + `...`}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          <UilAngleRightB />
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
