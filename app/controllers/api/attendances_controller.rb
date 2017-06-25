class Api::AttendancesController < Api::ApiController

def create
  @attendance = current_user.attendances.create!(event_id: attendance_params[:event_id])
  render :show
end

def destroy
  @attendance = Attendance.find(params[:id])
  @attendance.destroy
  render :show
end

def attendance_params
  params.require(:attendance).permit(:event_id)
end
    
end
