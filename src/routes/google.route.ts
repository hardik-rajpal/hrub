import { Router } from 'express';
import GoogleController from '@controllers/google.controller';
import { Routes } from '@interfaces/routes.interface';

class GoogleRoute implements Routes {
  public path = '/';
  public router = Router();
  public googleController = new GoogleController();

  constructor(path:string) {
    this.path = path;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/blogposts`, this.googleController.getBlogPosts);
  }
}

export default GoogleRoute;
