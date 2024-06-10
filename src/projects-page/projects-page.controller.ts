import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectsPageService } from './projects-page.service';
import { CreateProjectsPageDto } from './dto/create-projects-page.dto';
import { UpdateProjectsPageDto } from './dto/update-projects-page.dto';

@Controller('projects-page')
export class ProjectsPageController {
  constructor(private readonly projectsPageService: ProjectsPageService) {}

  @Post()
  create(@Body() createProjectsPageDto: CreateProjectsPageDto) {
    return this.projectsPageService.create(createProjectsPageDto);
  }

  @Get()
  findAll() {
    return this.projectsPageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsPageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectsPageDto: UpdateProjectsPageDto) {
    return this.projectsPageService.update(+id, updateProjectsPageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsPageService.remove(+id);
  }
}
