import { Module } from '@nestjs/common';
import { ProjectsPageService } from './projects-page.service';
import { ProjectsPageController } from './projects-page.controller';

@Module({
  controllers: [ProjectsPageController],
  providers: [ProjectsPageService],
})
export class ProjectsPageModule {}
