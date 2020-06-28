// https://developers.giphy.com/docs/api/schema#gif-object
interface IGIFObject {
  title: string;
  images: {
      original: {
        url: string;
      };
      fixed_width: {
        url: string;
      };
  };
}

export default IGIFObject;
