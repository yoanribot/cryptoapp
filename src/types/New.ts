export type News = {
   value: New[],
};

export type New = {
  name: string,
  description: string,
  url: string,
  image: Image,
  datePublished: string,
  provider: {
    name: string,
    image: Image,
  }[]
}

type Image = {
  thumbnail: {
    contentUrl: string,
  }
}