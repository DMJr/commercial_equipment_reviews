require 'spec_helper'

feature "user adds a post", %q{
  As a User
  I can add my business
  So that users can find me
} do

  # Acceptance Criteria
  # - I must be logged in
  # - I must supply a name
  # - I must supply a phone number

  scenario "valid user adds a manufacturer with valid attributes" do
    user = FactoryGirl.create(:user, email: 'dave@gmail.com')
    sign_in_as(user)

    visit new_business_path
    fill_in "Name", with: "Ricks Automotive"
    fill_in "Phone", with: "5083376069"
    click_on "Create Business"

    expect(page).to have_content "Success."
  end

  scenario "valid user adds a post with invalid attributes" do
    user = FactoryGirl.create(:user)
    sign_in_as(user)

    visit new_manufacturer_path
    click_on "Create Business"

    expect(page).to have_content "Please create an account before posting."
  end
end
