import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'DEV_Users',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      logging: true,
      logger: 'file',
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
