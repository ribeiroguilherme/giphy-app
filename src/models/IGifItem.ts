export default interface IGifItem {
  title: string;
  slug: string;
  images: {
    downsized: {
      height: string;
      width: string;
      url: string;
    };
  };
};
