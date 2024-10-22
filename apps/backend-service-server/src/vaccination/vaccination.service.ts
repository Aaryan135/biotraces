import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VaccinationServiceBase } from "./base/vaccination.service.base";

@Injectable()
export class VaccinationService extends VaccinationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
