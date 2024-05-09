import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  private user = [
    {
      id: 1,
      name: 'John Doe',
      password: 'password123',
    },
    {
      id: 2,
      name: 'Jane Doe',
      password: 'password456',
    },
  ];
  async login({ name, password }: AuthPayloadDto) {
    if (
      this.user.find((user) => user.name === name && user.password === password)
    ) {
      return {
        message: 'Login successful',
      };
    } else {
      if (this.user.find((user) => user.name === name)) {
        return {
          message: 'Password is incorrect',
        };
      } else {
        return {
          message: 'User not found',
        };
      }
    }
  }
}
