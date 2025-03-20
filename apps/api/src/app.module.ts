import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscoveryModule } from './discovery/discovery.module';

@Module({
  imports: [DiscoveryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
