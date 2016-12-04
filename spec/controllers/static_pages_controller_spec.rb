require 'rails_helper'

RSpec.describe StaticPagesController, type: :controller do
  describe "GET root" do

    describe "when a user is logged in" do
      it "renders the root template" do
        allow(controller).to receive(:current_user) { User.new }
        get :root
        expect(controller).to render_template("root")
      end
    end

    describe "when a user is not logged in" do
      it "redirects to /welcome" do
        get :root
        expect(controller).to redirect_to("/welcome")
      end
    end
  end

  describe "GET welcome" do

    describe "when a user is logged in" do
      before do
        allow(controller).to receive(:user_signed_in?).and_return(true)
      end

      it "redirects the root template" do
        get :welcome
        expect(controller).to redirect_to("/")
      end
    end

    describe "when a user is not logged in" do
      before do
        allow(controller).to receive(:user_signed_in?).and_return(false)
      end

      it "renders welcome" do
        get :welcome
        expect(controller).to render_template("welcome")
      end
    end
  end
end
