require 'spec_helper'

feature "user adds a review", %q{
  As a User
  I want review a business or manufacturer
  So that others know what I think about a business's service
} do

  # Acceptance Criteria
  # - I must be logged in
  # - I must supply a title
  # - I must supply a body of text
  # - I must supply a business to review
  # - I must supply a rating

  scenario "valid user adds a review with valid attributes" do
    user = FactoryGirl.create(:user, email: 'dave@gmail.com')
    sign_in_as(user)

    visit new_review_path
    fill_in "Title", with: "Great gate"
    fill_in "Body", with: " This saved my life. This saved my life. This saved my life."
    select '5', from: 'Rating'
    select 'Waltco', from: 'Manufacturer'
    click_on "Create Review"

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
