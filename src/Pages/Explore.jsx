import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: 'Rectangle 15 (1).png',
    title: 'Breakfast',
  },
  {
    img: 'Rectangle 15 (2).png',
    title: 'Burger',
  },
  {
    img: 'Rectangle 15 (3).png',
    title: 'Camera',
  },
  {
    img: 'Rectangle 15 (4).png',
    title: 'Coffee',
  },
  {
    img: 'Rectangle 15 (5).png',
    title: 'Hats',
  },
  {
    img: 'Rectangle 15 (6).png',
    title: 'Honey',
  },
  {
    img: 'Rectangle 15 (7).png',
    title: 'Basketball',
  },
  {
    img: 'Rectangle 15 (8).png',
    title: 'Fern',
  },
  {
    img: 'Rectangle 15 (9).png',
    title: 'Mushrooms',
  },
  {
    img: 'Rectangle 15 (10).png',
    title: 'Tomato basil',
  },
  {
    img: 'Rectangle 15.png',
    title: 'Sea star',
  },
  {
    img: 'Rectangle 20.png',
    title: 'Bike',
  },
];

export default function Explore() {
  return (
    
    <ImageList sx={{ width: "60%", height: "100%",marginInline:"auto" }} cols={3} rowHeight="13rem" >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


