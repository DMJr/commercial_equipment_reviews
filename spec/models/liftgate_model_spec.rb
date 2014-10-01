require 'spec_helper'

describe LiftgateModel do
  describe "#name" do
    it { should have_valid(:name).when("bmra", "rc") }
    it { should_not have_valid(:name).when("abcd123", nil, "") }
  end
  describe "#description" do
    it { should have_valid(:description).when("Based in california this is a great company.", "Yup, we're great!") }
  end
end
