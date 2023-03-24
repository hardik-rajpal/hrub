import { Router } from 'express';
import UtilsController from '@controllers/utils.controller';
import { Routes } from '@interfaces/routes.interface';

class UtilsRoute implements Routes {
  public path = '/';
  public router = Router();
  public utilsController = new UtilsController();

  constructor(path:string) {
    this.path = path;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/counter/add`, this.utilsController.addToCounter);
  }
}

export default UtilsRoute;
