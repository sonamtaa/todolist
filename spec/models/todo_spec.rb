# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Todo do
  describe 'validations' do
    it { is_expected.to validate_presence_of(:title) }
  end
end
