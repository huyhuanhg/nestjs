import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ChatModule } from './modules/chat/chat.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [AuthModule, ChatModule, UserModule],
})
export class AppModule {}
