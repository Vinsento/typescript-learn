import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Tag } from '@/components/Tag/Tag';
import { Title } from '@/components/Title/Title';
import { Button } from '@/components/Button/Button';

export default function Home() {
  return (
    <>
      <Title tag='h1'>Heading</Title>
      <Tag size='s' bgColor='blue' href='/'>
        Desing
      </Tag>
      <Paragraph fontSize='s'>Hello! I am a paragrhaph 14</Paragraph>
      <Button appearance='secondary' arrow='right'>
        Button
      </Button>
    </>
  );
}
