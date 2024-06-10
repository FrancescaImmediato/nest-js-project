// import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
// import { TimeEntriesService } from './time-entries.service';
// import { TimeEntry } from './time-entry.entity';

// @Controller('time-entries')
// export class TimeEntriesController {
//   constructor(private readonly timeEntriesService: TimeEntriesService) {}

//   @Get()
//   findAll(): Promise<TimeEntry[]> {
//     return this.timeEntriesService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: number): Promise<TimeEntry> {
//     return this.timeEntriesService.findOne(id);
//   }

//   @Post()
//   create(@Body() timeEntry: TimeEntry): Promise<TimeEntry> {
//     return this.timeEntriesService.create(timeEntry);
//   }

//   @Put(':id')
//   update(@Param('id') id: number, @Body() timeEntry: TimeEntry): Promise<TimeEntry> {
//     return this.timeEntriesService.update(id, timeEntry);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: number): Promise<void> {
//     return this.timeEntriesService.remove(id);
//   }
// }
