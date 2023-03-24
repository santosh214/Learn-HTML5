import { useRouter } from 'next/router';
import Element from '../../components/text.json';
const Tag = () => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <>
      <p>Tag: {tag}</p>
    </>
  );
};

export default Tag;
