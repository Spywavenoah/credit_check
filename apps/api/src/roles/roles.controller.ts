import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Roles')
@Controller('api/v1/roles')
export class RolesController {
  @Get()
  @ApiOperation({ summary: 'List all roles' })
  findAll() {
    return [
      { id: 'role_1', name: 'Super Admin', description: 'Full platform access' },
      { id: 'role_2', name: 'Admin', description: 'Administrative access' },
      { id: 'role_3', name: 'Support Agent', description: 'Support account' },
      { id: 'role_4', name: 'Compliance Officer', description: 'Compliance and reporting access' },
    ];
  }

  @Post()
  @ApiBody({ schema: { example: { name: 'Finance Operations', description: 'Handles finance operations' } } })
  create(@Body() body: any) {
    return {
      success: true,
      message: 'Role created successfully',
      role: { id: 'role_new', ...body },
    };
  }

  @Patch(':id')
  update(@Param('id') string, @Body() body: any) {
    return { success: true, id, ...body };
  }
}
