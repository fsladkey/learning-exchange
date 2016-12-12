require 'rails_helper'

# ### Events Controller
# `GET /api/events/`
# `GET /api/session/events/`
# `POST /api/events/`
# `PATCH /api/events/`
# `DELETE /api/events/`

RSpec.describe Api::EventsController, type: :controller do
  describe "while not logged in" do
    before do
      allow(controller).to receive(:user_signed_in?).and_return(false)
    end

    it "rejects unauthorized requests" do
      get :index
      expect(controller).to respond_with(401)
    end

  end

  describe "while logged in" do
    let(:current_user) { create(:user) }

    before do
      allow(controller).to receive(:current_user) { current_user }
    end

    describe "GET index" do
      it "renders the index template" do
        get :index
        expect(controller).to render_template(:index)
      end
    end

    describe "GET show" do
      it "renders the index template" do
        event = create(:event, creator: current_user)
        get :show, params: { id: event.id }
        expect(controller).to render_template(:show)
      end
    end

    describe "GET current_user_events" do
      it "renders the current_user_events template" do
        get :current_user_events
        expect(controller).to render_template(:index)
      end
    end

    describe "POST create" do
      it "creates a new group with valid params" do
        event_params = build(:event, name: "name").as_json
        post :create, params: { event: event_params }

        expect(controller).to render_template(:show)
        expect(Event.exists?(name: "name")).to be(true)
      end

      it "rejects invalid params" do
        post :create, params: { event: { name: "Description" } }
        expect(controller).to respond_with(422)
        expect(Event.exists?(name: "name")).to be(false)
      end

    end

    describe "PATCH update" do
      it "updates a group with valid params" do
        event = create(:event, name: "Original", creator: current_user)
        patch :update, params: {
          id: event.id,
          event: { name: "Updated" }
        }
        expect(controller).to render_template(:show)
        expect(Event.find(event.id).name).to eq("Updated")
      end

      it "renders 422 with invalid params" do
        event = create(:event, creator: current_user)
        patch :update, params: { id: event.id, event: { name: "" } }
        expect(controller).to respond_with(422)
      end
    end

    describe "DELETE destroy" do
      it "destroys the group if it exists" do
        event = create(:event, creator: current_user)
        delete :destroy, params: { id: event.id }
        expect(controller).to render_template(:show)
        expect(Event.exists?(id: event.id)).to be(false)
      end
    end

  end
end
