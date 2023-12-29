import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserPreferenceModuleBase } from "./base/userPreference.module.base";
import { UserPreferenceService } from "./userPreference.service";
import { UserPreferenceController } from "./userPreference.controller";
import { UserPreferenceResolver } from "./userPreference.resolver";

@Module({
  imports: [UserPreferenceModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserPreferenceController],
  providers: [UserPreferenceService, UserPreferenceResolver],
  exports: [UserPreferenceService],
})
export class UserPreferenceModule {}
