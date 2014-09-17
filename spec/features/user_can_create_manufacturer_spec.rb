require 'spec_helper'

feature "user adds a post", %q{
  As a User
  I want a new manufacturer profile
  So that users can have more informaiton
} do

  # Acceptance Criteria
  # - I must be logged in
  # - I must supply a name
  # - I must supply a description

  scenario "valid user adds a manufacturer with valid attributes" do
    user = FactoryGirl.create(:user, email: 'dave@gmail.com')
    sign_in_as(user)

    visit new_manufacturer_path
    fill_in "Name", with: "Maxon"
    fill_in "Description", with: " This saved my life. This saved my life. This saved my life."
    click_on "Create Manufacturer"

    expect(page).to have_content "Success."
  end

  scenario "valid user adds a post with invalid attributes" do
    user = FactoryGirl.create(:user)
    sign_in_as(user)

    visit new_manufacturer_path
    click_on "Create Manufacturer"

    expect(page).to have_content "Please create an account before posting."
  end
end
