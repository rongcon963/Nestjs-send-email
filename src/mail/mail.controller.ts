import { Body, Controller, Post } from "@nestjs/common";
import { MailService } from "./mail.service";
import { UserDto } from "src/user/dto/user.dto";

@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Post()
  async sendMail(@Body() userDto: UserDto) {
    return await this.mailService.sendUserConfirmation(userDto);
  }
}