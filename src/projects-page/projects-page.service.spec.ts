import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsPageService } from './projects-page.service';

describe('ProjectsPageService', () => {
  let service: ProjectsPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsPageService],
    }).compile();

    service = module.get<ProjectsPageService>(ProjectsPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
