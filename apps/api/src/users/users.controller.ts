import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('api/v1/users')
export class UsersController {
  @Get()
  getUsers() {
    return [
      { id: 'user_1', email: 'admin@creditcheck.africa', role: 'Super Admin', status: 'active' },
      { id: 'user_2', email: 'ops@creditcheck.africa', role: 'Admin', status: 'active' },
    ];
  }

  @Get(':id')
  getUser(@Param('id') string) {
    return { id, email: 'admin@creditcheck.africa', role: 'Super Admin', status: 'active' };
  }

  @Post()
  createUser(@Body() body: any) {
    return {
      success: true,
      message: 'User created successfully',
      user: {
        ...body,
        defaultPassword: 'Temp@1234',
      },
    };
  }

  @Patch(':id')
  updateUser(@Param('id') string, @Body() body: any) {
    return { success: true, id, ...body };
  }

  @Delete(':id')
  deleteUser(@Param('id') string) {
    return { success: true, id, deleted: true };
  }
}
