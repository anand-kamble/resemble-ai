interface PostType {
  title: string;
  rank?: number;
  url?: string;
  points: number;
  author: string;
  time_posted: number;
  descendants?: number;
}

export default PostType;