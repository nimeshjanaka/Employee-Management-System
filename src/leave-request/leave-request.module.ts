import { Module } from '@nestjs/common';
import { LeaveRequestService } from './leave-request.service';
import { LeaveRequestController } from './leave-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveRequest } from './entity/leave-request.entity';
import { User } from 'src/user/entity/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LeaveRequest,User])],
  controllers: [LeaveRequestController],
  providers: [LeaveRequestService],
})
export class LeaveRequestModule {}
