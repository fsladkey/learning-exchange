class Api::CommentsController < Api::ApiController

  def create
    @comment = current_user.authored_comments.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors, status: 422
    end
  end

  def update
    if comment.update(comment_params)
      render :show
    else
      render json: comment.errors, status: 422
    end
  end

  def destroy
    comment.destroy
    render :show
  end

  private

  def comment
    @comment ||= current_user.comments.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body, :commentable_id, :commentable_type)
  end

end
