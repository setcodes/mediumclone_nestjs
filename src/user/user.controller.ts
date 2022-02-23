import {
  Req,
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe, UseGuards
} from "@nestjs/common";
import { UserService } from '@app/user/user.service';
import { CreateUserDto } from '@app/user/dto/createUser.dto';
import { IUserResponse } from '@app/types/userResponse.interface';
import { LoginUserDto } from '@app/user/dto/loginUser.dto';
import { Request} from "express";
import { ExpressRequestInterface } from "@app/types/expressRequest.interface";
import { User } from "@app/decorators/user.decorator";
import { UserEntity } from "@app/user/user.entity";
import { AuthGuard } from "@app/guards/auth.guard";

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
  // @UseGuards(AuthGuard)
  async currentUser(
    @User() user: UserEntity,
    @User('id') userId: number,
  ): Promise<IUserResponse> {
    // console.log(req.user);
    console.log('user', userId);
    return this.userService.buildUserResponse(user);
  }
}
