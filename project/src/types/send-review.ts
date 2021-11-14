type SendReview = {
  id: number | string,
  body: {
    rating:  number;
    comment: string;
  }
}

export default SendReview;
