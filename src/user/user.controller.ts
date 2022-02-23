import {
  Req,
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { CreateUserDto } from '@app/user/dto/createUser.dto';
import { IUserResponse } from '@app/types/userResponse.interface';
import { LoginUserDto } from '@app/user/dto/loginUser.dto';
import { Request} from "express";
import { ExpressRequestInterface } from "@app/types/expressRequest.interface";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('users')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<IUserResponse> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserResponse(user);
  }
  @Post('users/login')
  @UsePipes(new ValidationPipe())
  async login(
    @Body('user') loginUserDto: LoginUserDto,
  ): Promise<IUserResponse> {
    const user = await this.userService.login(loginUserDto);
    return this.userService.buildUserResponse(user);
  }
  @Get('user')
  async currentUser(
    @Req() req: ExpressRequestInterface,
  ): Promise<IUserResponse> {
    console.log(req.user);
    return this.userService.buildUserResponse(req.user);
  }
}
