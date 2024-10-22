import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BankTransactionModuleBase } from "./base/bankTransaction.module.base";
import { BankTransactionService } from "./bankTransaction.service";
import { BankTransactionController } from "./bankTransaction.controller";
import { BankTransactionResolver } from "./bankTransaction.resolver";

@Module({
  imports: [BankTransactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [BankTransactionController],
  providers: [BankTransactionService, BankTransactionResolver],
  exports: [BankTransactionService],
})
export class BankTransactionModule {}
