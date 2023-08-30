# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TodosController, '#show' do
  let!(:todo) { create(:todo) }

  context 'with valid params' do
    it 'create todo task' do
      get todo_path(todo.id), params: {}
      expect(status).to eq(200)
      expect(json['title']).to eq(todo.title)
      expect(json['completed']).to be_falsy
    end
  end
end
