/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DoctorPrescriptionWhereInput } from "./DoctorPrescriptionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DoctorPrescriptionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DoctorPrescriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => DoctorPrescriptionWhereInput)
  @IsOptional()
  @Field(() => DoctorPrescriptionWhereInput, {
    nullable: true,
  })
  every?: DoctorPrescriptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => DoctorPrescriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => DoctorPrescriptionWhereInput)
  @IsOptional()
  @Field(() => DoctorPrescriptionWhereInput, {
    nullable: true,
  })
  some?: DoctorPrescriptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => DoctorPrescriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => DoctorPrescriptionWhereInput)
  @IsOptional()
  @Field(() => DoctorPrescriptionWhereInput, {
    nullable: true,
  })
  none?: DoctorPrescriptionWhereInput;
}
export { DoctorPrescriptionListRelationFilter as DoctorPrescriptionListRelationFilter };
