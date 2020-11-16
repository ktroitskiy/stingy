import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class BotService {
  token: string;
  bot: TelegramBot;

  constructor() {
    this.token = '1434595744:AAGHZD6UyFF6-zu_HTlDgpCWC6NoR-dJbrM';
    this.bot = new TelegramBot(this.token, { polling: true });

    this.createBotBootstrap();
  }

  createBotBootstrap() {
    this.bot.onText(/\/start/, (msg) => this.onStart(msg));
    this.bot.on('message', (msg) => this.onMessage(msg));

    console.log('Бот работает!');
  }

  onStart(msg) {
    this.bot.sendMessage(msg.chat.id, 'Расход или доход?', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Расход',
              callback_data: '1',
            },
          ],
          [
            {
              text: 'Доход',
              callback_data: '1',
            },
          ],
        ],
      },
    });
  }

  onMessage(msg) {
    const textMessage = msg.text.toString().toLowerCase();
    const chatId = msg.chat.id;

    if (textMessage === 'расход') {
      this.requestExpense(chatId);
    }

    if (textMessage === 'доход') {
      // this.requestIncome(chatId);
    }
  }

  requestExpense(chatId) {
    this.bot.sendMessage(
      chatId,
      'Введи какое количество денег было потрачено',
      {
        reply_markup: {
          inline_keyboard: [[]],
        },
      },
    );

    return '1';
  }
}
