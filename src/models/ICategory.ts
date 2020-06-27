import GIFObject from '@/models/IGIFObject';

// https://developers.giphy.com/docs/api/schema#category-object
interface ICategory {
  name: string;
  gif: GIFObject;
}

export default ICategory;
