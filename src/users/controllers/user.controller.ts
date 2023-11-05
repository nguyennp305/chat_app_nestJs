import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Query,
} from '@nestjs/common';
import { Routes, Services } from '../../utils/constants';
import { UserAlreadyExists } from '../exceptions/UserAlreadyExists';
import { IUserService } from '../interfaces/user';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(Routes.USERS)
@Controller(Routes.USERS)
export class UsersController {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {}

  // search user theo username
  @Get('search')
  searchUsers(@Query('username') username: string) {
    console.log(username);
    if (!username)
      throw new HttpException('Provide a valid query', HttpStatus.BAD_REQUEST);
    return this.userService.searchUsers(username);
  }

  // check username exists
  @Get('check')
  async checkUsername(@Query('username') username: string) {
    if (!username)
      throw new HttpException('Invalid Query', HttpStatus.BAD_REQUEST);
    const user = await this.userService.findUser({ username });
    if (user) throw new UserAlreadyExists();
    return HttpStatus.OK;
  }
}
