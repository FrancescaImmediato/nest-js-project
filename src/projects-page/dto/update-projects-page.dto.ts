import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectsPageDto } from './create-projects-page.dto';

export class UpdateProjectsPageDto extends PartialType(CreateProjectsPageDto) {}
