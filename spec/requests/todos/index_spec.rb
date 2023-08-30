# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TodosController, '#index' do
  let!(:todo) { create(:todo) }
  let!(:todoa) { create(:todo) }
  let!(:todob) { create(:todo) }

  context 'with valid params' do
    it 'create todo task' do
      get todos_path, params: {}
      expect(status).to eq(200)
      expect(json.count).to eq(3)
      expect(json.first['title']).to eq(todo.title)
      expect(json.first['completed']).to be_falsy
    end
  end
end
