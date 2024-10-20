import { Post } from "src";
import { Base } from "src/base";

export class Posts extends Base {
  getPostById(id: number): Promise<Post> {
    return this.invoke(`/posts/${id}`);
  }
}
