import { Controller, Delete, Get, UseGuards, Param } from '@nestjs/common';
import { UsersService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {

    constructor(private readonly usersService: UsersService) {}

    @ApiOperation({ summary: 'Listar usuários', description: 'Retorna uma lista de todos os usuários' })
    @Get('all')
    async getAll() {
        return await this.usersService.getAll();
    }

    @ApiOperation({ summary: 'Deletar usuário', description: 'Deleta um usuário específico com base no ID' })
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.usersService.deleteUser(id);
    }

}
