import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DoctorPrescriptionModuleBase } from "./base/doctorPrescription.module.base";
import { DoctorPrescriptionService } from "./doctorPrescription.service";
import { DoctorPrescriptionController } from "./doctorPrescription.controller";
import { DoctorPrescriptionResolver } from "./doctorPrescription.resolver";

@Module({
  imports: [DoctorPrescriptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [DoctorPrescriptionController],
  providers: [DoctorPrescriptionService, DoctorPrescriptionResolver],
  exports: [DoctorPrescriptionService],
})
export class DoctorPrescriptionModule {}
