export class BlogEntity {
  constructor(
    public title: string,
    public author: string,
    public content: string,
    public imgUrl: string,
    public dateOfPublication: string
  ) {}
}
