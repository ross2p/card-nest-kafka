import { UserModule } from './user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ApplicationConfig } from 'card-common';

async function bootstrap() {
  const app = await ApplicationConfig.create(UserModule);
  app.init({ globalPrefix: 'user' }).connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'user',
        brokers: [process.env.KAFKA_BROKER!],
      },
      consumer: {
        groupId: 'user-consumer',
      },
    },
  });
  await app.start();
}
void bootstrap();
