# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :review do
    user_id 1
    business_id 1
    manufacturer_id 1
    rating 1
    title "MyString"
    body "MyString"
  end
end
