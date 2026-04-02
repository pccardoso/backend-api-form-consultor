import { Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(email: string, password: string) {

    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Senha inválida');
    }

    const payload = {
      id: user.id,
      email: user.email,
      department: user.department
    };

    return {
      access_token: this.jwtService.sign(payload),
    };

  }

  async register(name: string, email: string, password: string, department: string) {

    const existingUser = await this.usersService.findByEmail(email);

    if (existingUser) {
      throw new UnauthorizedException('Email já registrado');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await this.usersService.createUser({
      name,
      email,
      password: hashedPassword,
      department
    });

    const payload = {
      id: newUser.id,
      email: newUser.email,
      department: newUser.department
    };

    return {
      access_token: this.jwtService.sign(payload),
    };

  }

}