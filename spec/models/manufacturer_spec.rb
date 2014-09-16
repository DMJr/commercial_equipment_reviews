require 'spec_helper'

describe Manufacturer do
  describe "#name" do
    it { should have_valid(:name).when("maxon", "waltco") }
    it { should_not have_valid(:name).when("abcd123", nil, "") }
  end
  describe "#description" do
    it { should have_valid(:description).when("Based in california this is a great company.", "Yup, we're great!") }
    # it { should_not have_valid(:description).when("abcd123", nil, "") }
  end
  describe "#user_id" do
    it { should belong_to :user }

    it { should have_valid(:user).when(FactoryGirl.build(:user, password: "abcd1234")) }
    it { should_not have_valid(:user).when(nil) }
  end
end
