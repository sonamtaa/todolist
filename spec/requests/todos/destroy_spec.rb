# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TodosController, '#destroy' do
  let!(:todo) { create(:todo) }

  context 'with valid params' do
    it 'create todo task' do
      delete todo_path(todo.id), params: {}
      expect(status).to eq(204)
    end
  end
end
