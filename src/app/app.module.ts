import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './api/app.controller';
import { AppService } from './application/services/app.service';
import { CustomersModule } from 'src/customers/customers.module';
import { AccountsModule } from 'src/accounts/accounts.module';
import { TransactionsModule } from 'src/transactions/transactions.module';

@Module({
  imports: [
    CustomersModule,
    AccountsModule,
    TransactionsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'banking-nest-heroku-lab1.cbubmmcgjs98.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'rootuser',
      password: 'usuariofinal',
      database: 'bd_final',
      synchronize: true,
      migrations: ['dist/app/infra/migrations/*.js', 'app/infra/migrations/*.js'],
      cli: {
        migrationsDir: './app/infra/migrations',
      },
      migrationsRun: true,
      logging: true,
      timezone: '+0',
      entities: [
        'dist/**/command/infra/persistence/typeorm/entities/**.typeorm.js',
        '**/command/infra/persistence/typeorm/entities/**.typeorm.js',
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
