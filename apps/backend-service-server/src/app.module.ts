import { Module } from "@nestjs/common";
import { ReportModule } from "./report/report.module";
import { MedicalRecordModule } from "./medicalRecord/medicalRecord.module";
import { TaxReturnModule } from "./taxReturn/taxReturn.module";
import { EducationRecordModule } from "./educationRecord/educationRecord.module";
import { VaccinationModule } from "./vaccination/vaccination.module";
import { DoctorPrescriptionModule } from "./doctorPrescription/doctorPrescription.module";
import { BankDetailModule } from "./bankDetail/bankDetail.module";
import { BankTransactionModule } from "./bankTransaction/bankTransaction.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    ReportModule,
    MedicalRecordModule,
    TaxReturnModule,
    EducationRecordModule,
    VaccinationModule,
    DoctorPrescriptionModule,
    BankDetailModule,
    BankTransactionModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
