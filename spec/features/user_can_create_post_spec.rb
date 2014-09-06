require 'spec_helper'

feature "user adds a post", %q{
  As a User
  I want create posts
  So that users can have more informaiton
} do

  # Acceptance Criteria
  # - I must be logged in
  # - I must supply a title
  # - I must supply a body of text

  scenario "valid user adds a post with valid attributes" do
    user = FactoryGirl.create(:user, email: 'dave@gmail.com')
    sign_in_as(user)

    visit new_post_path
    fill_in "Title", with: "Great gate"
    fill_in "Body", with: " This saved my life. This saved my life. This saved my life."
    click_on "Create Post"

    expect(page).to have_content "Post created successfully."
  end

  scenario "valid user adds a post with invalid attributes" do
    user = FactoryGirl.create(:user)
    sign_in_as(user)

    visit new_post_path
    click_on "Create Post"

    expect(page).to have_content "Please create an account before posting."
  end

end
