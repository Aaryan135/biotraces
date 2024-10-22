import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DoctorPrescriptionServiceBase } from "./base/doctorPrescription.service.base";

@Injectable()
export class DoctorPrescriptionService extends DoctorPrescriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
