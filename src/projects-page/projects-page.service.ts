import { Injectable } from '@nestjs/common';
import { CreateProjectsPageDto } from './dto/create-projects-page.dto';
import { UpdateProjectsPageDto } from './dto/update-projects-page.dto';



@Injectable()
export class ProjectsPageService {
  create(createProjectsPageDto: CreateProjectsPageDto) {
    return 'This action adds a new projectsPage';
  }

  findAll() {
    return `This action returns all projectsPage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectsPage`;
  }

  update(id: number, updateProjectsPageDto: UpdateProjectsPageDto) {
    return `This action updates a #${id} projectsPage`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectsPage`;
  }
}
