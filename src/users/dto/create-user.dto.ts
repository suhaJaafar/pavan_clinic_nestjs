import { IsEmail, IsEnum, IsString } from "class-validator";
import { Role } from "../enums/role.enum";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsEnum(Role)
    @ApiProperty({
        enum: Role,
        default: Role.Regular,
    })
    role: Role;

}
