import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsPageController } from './projects-page.controller';
import { ProjectsPageService } from './projects-page.service';

describe('ProjectsPageController', () => {
  let controller: ProjectsPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsPageController],
      providers: [ProjectsPageService],
    }).compile();

    controller = module.get<ProjectsPageController>(ProjectsPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
