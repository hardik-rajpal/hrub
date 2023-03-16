import GoogleService from '@/services/google.service';
import { NextFunction, Request, Response } from 'express';

class GoogleController {
  public async getBlogPosts(req: Request, res: Response, next: NextFunction){
    try {
      console.log(req.params)
        if(req.query.id!==undefined){
          res.send(await GoogleService.getBlogPostById(req.query.id.toString()))
        }
        else{
          res.send(await GoogleService.getBlogs());
        }
    } catch (error) {
      next(error);
    }
  };
}

export default GoogleController;
