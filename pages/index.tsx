import type { NextPage } from 'next';
import { Button, Htag, Rating, Tag } from 'components';
import { useState } from 'react';

const Home: NextPage = () => {
  const [rating, setRating] = useState<number>(4);
  
  return (
    <>
      <Htag tag="h3">Text</Htag>
      <Button appearance="primary" arrow="right">Button</Button>
      <Button appearance="ghost">Button</Button>
      <Tag size="s" color="red"> Small </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </>
  );
};

export default Home;
