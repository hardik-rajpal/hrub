import GoogleService from '@/services/google.service';
import { NextFunction, Request, Response } from 'express';

class GoogleController {
  public async getBlogPosts(req: Request, res: Response, next: NextFunction){
    try {
        res.send(await GoogleService.getBlogs());
    } catch (error) {
      next(error);
    }
  };
}

export default GoogleController;
