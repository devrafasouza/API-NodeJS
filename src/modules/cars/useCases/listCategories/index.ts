import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoryController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const caregoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(caregoriesRepository);
const listCategoriesController = new ListCategoryController(
  listCategoriesUseCase,
);

export { listCategoriesController };
