# frozen_string_literal: true

FactoryBot.define do
  factory :todo do
    title { Faker::Name.name }
    completed { false }
  end
end
