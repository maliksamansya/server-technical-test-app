// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(id: string, username: string) {
    const payload = { id, username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(payload: any) {
    // Logic to validate user (e.g., fetching from database)
    return { userId: payload.sub, username: payload.username };
  }
}
