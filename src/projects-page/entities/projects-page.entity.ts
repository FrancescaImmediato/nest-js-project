import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProjectsPage {
   @PrimaryGeneratedColumn()
   id: number;
 
   @Column()
   name: string;
 
   @Column({ default: 0 })
   totalHours: number;
}


// GET /projects - Retrieve all projects
// GET /projects/:id - Retrieve a specific project by ID
// POST /projects - Create a new project
// PUT /projects/:id - Update an existing project by ID
// DELETE /projects/:id - Delete a project by ID