/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TaxReturn as PrismaTaxReturn } from "@prisma/client";

export class TaxReturnServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TaxReturnCountArgs, "select">
  ): Promise<number> {
    return this.prisma.taxReturn.count(args);
  }

  async taxReturns(
    args: Prisma.TaxReturnFindManyArgs
  ): Promise<PrismaTaxReturn[]> {
    return this.prisma.taxReturn.findMany(args);
  }
  async taxReturn(
    args: Prisma.TaxReturnFindUniqueArgs
  ): Promise<PrismaTaxReturn | null> {
    return this.prisma.taxReturn.findUnique(args);
  }
  async createTaxReturn(
    args: Prisma.TaxReturnCreateArgs
  ): Promise<PrismaTaxReturn> {
    return this.prisma.taxReturn.create(args);
  }
  async updateTaxReturn(
    args: Prisma.TaxReturnUpdateArgs
  ): Promise<PrismaTaxReturn> {
    return this.prisma.taxReturn.update(args);
  }
  async deleteTaxReturn(
    args: Prisma.TaxReturnDeleteArgs
  ): Promise<PrismaTaxReturn> {
    return this.prisma.taxReturn.delete(args);
  }
}
