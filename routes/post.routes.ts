import { Router } from "express";
import PostController from "../controllers/post.controller";
const postRouter = Router();

const postController = new PostController();

postRouter.post('/post', postController.createPost)
postRouter.get('/post', postController.getPostsByUser);

export default postRouter;
