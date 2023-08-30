# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TodosController, '#create' do
  let!(:params) { { todo: { title: 'Read New Book', completed: false } } }

  context 'with valid params' do
    it 'create todo task' do
      post(todos_path, params:)
      expect(status).to eq(200)
      expect(json['title']).to eq('Read New Book')
      expect(json['completed']).to be_falsy
    end
  end
end
