import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaxReturnServiceBase } from "./base/taxReturn.service.base";

@Injectable()
export class TaxReturnService extends TaxReturnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
