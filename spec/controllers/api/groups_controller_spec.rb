# ### Groups Controller
# `GET /api/groups/`
# `GET /api/session/groups/`
# `POST /api/groups/`
# `PATCH /api/groups/`
# `DELETE /api/groups/`

require 'rails_helper'

RSpec.describe Api::GroupsController, type: :controller do
  describe "while not logged in" do
    before do
      allow(controller).to receive(:user_signed_in?).and_return(false)
    end

    it "rejects unauthorized requests" do
      get :index
      expect(controller).to respond_with(403)
    end

  end

  describe "while logged in" do
    let(:current_user) { create(:user) }
    before do
      allow(controller).to receive(:current_user).and_return(current_user)
    end

    describe "GET index" do
      it "renders the index template" do
        get :index
        expect(controller).to render_template(:index)
      end
    end

    describe "GET show" do
      it "renders the show template if the user is a member" do
        group = create(:group)
        group.add_member(current_user)
        get :show, params: { id: group.id }
        expect(controller).to render_template(:show)
      end

      it "renders the show template if the user is an admin" do
        group = create(:group)
        current_user.update!(admin: true)
        get :show, params: { id: group.id }
        expect(controller).to render_template(:show)
      end

      it "responds with 401 if the user is not a member" do
        group = create(:group)
        get :show, params: { id: group.id }
        expect(controller).to respond_with(401)
      end
    end

    describe "GET current_user_groups" do
      it "renders the current_user_groups template" do
        get :current_user_groups
        expect(controller).to render_template(:index)
      end
    end

    describe "POST create" do
      it "creates a new group with valid params" do
        post :create, params: {
          group: { name: "Group name", description: "Description", zipcode: "11215" }
        }
        expect(controller).to render_template(:show)
        expect(Group.exists?(name: "Group name")).to be(true)
      end

      it "rejects invalid params" do
        post :create, params: { group: { description: "Description" } }
        expect(controller).to respond_with(422)
        expect(Group.exists?(description: "Description")).to be(false)
      end

    end

    describe "PATCH update" do
      it "updates a group with valid params" do
        group = create(:group, name: "Original")
        patch :update, params: { id: group.id, group: { name: "Updated" } }
        expect(controller).to render_template(:show)
        expect(Group.find(group.id).name).to eq("Updated")
      end

      it "renders 422 with invalid params" do
        group = create(:group)
        patch :update, params: { id: group.id, group: { name: "" } }
        expect(controller).to respond_with(422)
      end
    end

    describe "DELETE destroy" do
      it "destroys the group if it exists" do
        group = create(:group)
        delete :destroy, params: { id: group.id }
        expect(controller).to render_template(:show)
        expect(Group.exists?(id: group.id)).to be(false)
      end
    end

  end
end
