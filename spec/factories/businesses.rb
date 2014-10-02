# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :business do
    name "MyString"
    description "MyText"
    user_id 1
    owner "MyString"
    address1 "MyString"
    address2 "MyString"
    city "MyString"
    state "MyString"
    zip 1
  end
end
