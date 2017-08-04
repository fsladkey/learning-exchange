require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe "while not logged in" do
    before do
      allow(controller).to receive(:user_signed_in?).and_return(false)
    end

    it "rejects unauthorized requests" do
      user = build(:user)
      get :show, params: { username: user.username }
      expect(controller).to respond_with(401)
    end

  end

  describe "while logged in" do
    let(:current_user) { create(:user) }
    before do
      allow(controller).to receive(:current_user) { current_user }
    end

    describe "GET show" do
      it "renders the show template" do
        user = create(:user)
        get :show, params: { username: user.username }
        expect(controller).to render_template(:show)
      end
    end

    describe "PATCH update" do
      it "updates a user with valid params" do
        patch :update, params: { id: current_user.id, user: { username: "Updated" } }
        expect(controller).to render_template(:show)
        expect(User.find(current_user.id).username).to eq("Updated")
      end

      it "renders 422 with invalid params" do
        patch :update, params: { id: current_user.id, user: { username: "" } }
        expect(controller).to respond_with(422)
      end

    end

    describe "DELETE destroy" do
      # it "allows users to destroy their account" do
      #   delete :destroy, params: { id: current_user.id }
      #   expect(controller).to render_template(:show)
      #   expect(User.exists?(id: current_user.id)).to be(false)
      # end
    end

  end
end
