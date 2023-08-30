# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TodosController, '#update' do
  let!(:todo) { create(:todo) }
  let!(:params) { { todo: { title: 'Build New Project', completed: true } } }

  context 'with valid params' do
    it 'create todo task' do
      put(todo_path(todo.id), params:)
      expect(status).to eq(200)
      expect(json['title']).to eq('Build New Project')
      expect(json['completed']).to be_truthy
    end
  end
end
