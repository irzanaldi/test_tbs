import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { tbsModule } from './tbs/tbs.module';

@Module({
  imports: [tbsModule, MongooseModule.forRoot("mongodb://127.0.0.1:27017/tbs")],
})
export class AppModule { }
