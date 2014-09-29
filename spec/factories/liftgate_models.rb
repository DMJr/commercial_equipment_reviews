# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :liftgate_model do
    name "MyString"
    description "MyText"
    manufacturer_id 1
  end
end
