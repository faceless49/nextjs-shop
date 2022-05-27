import type { NextPage } from 'next';
import { Button, Htag } from 'components';

const Home: NextPage = () => {
  return (
    <>
      <Htag tag='h3'>Text</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost'>Button</Button>
    </>
  );
};

export default Home;
