import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
// import { BotService } from './bot/bot.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private botService: BotService,
  ) {}

  // @Get()
  // getBotDialog(@Res() res) {
  //   this.botService.botMessage();
  //   res.status(HttpStatus.OK).send('Bot service started');
  // }
}
