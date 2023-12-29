/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumMealMealType } from "./EnumMealMealType";
import { EnumMealTag } from "./EnumMealTag";

@ObjectType()
class Meal {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumMealMealType,
  })
  @IsEnum(EnumMealMealType)
  @IsOptional()
  @Field(() => EnumMealMealType, {
    nullable: true,
  })
  mealType?: "Breakfast" | "Lunch" | "Dinner" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumMealTag,
    isArray: true,
  })
  @IsEnum(EnumMealTag, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumMealTag], {
    nullable: true,
  })
  tag?: Array<"Vegan" | "GlutenFree" | "HighProtein" | "Keto">;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Meal as Meal };