/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UserPreference } from "@prisma/client";

export class UserPreferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserPreferenceCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserPreferenceCountArgs>
  ): Promise<number> {
    return this.prisma.userPreference.count(args);
  }

  async userPreferences<T extends Prisma.UserPreferenceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserPreferenceFindManyArgs>
  ): Promise<UserPreference[]> {
    return this.prisma.userPreference.findMany(args);
  }
  async userPreference<T extends Prisma.UserPreferenceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserPreferenceFindUniqueArgs>
  ): Promise<UserPreference | null> {
    return this.prisma.userPreference.findUnique(args);
  }
  async createUserPreference<T extends Prisma.UserPreferenceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserPreferenceCreateArgs>
  ): Promise<UserPreference> {
    return this.prisma.userPreference.create<T>(args);
  }
  async updateUserPreference<T extends Prisma.UserPreferenceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserPreferenceUpdateArgs>
  ): Promise<UserPreference> {
    return this.prisma.userPreference.update<T>(args);
  }
  async deleteUserPreference<T extends Prisma.UserPreferenceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserPreferenceDeleteArgs>
  ): Promise<UserPreference> {
    return this.prisma.userPreference.delete(args);
  }
}
