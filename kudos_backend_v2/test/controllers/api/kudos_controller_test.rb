require "test_helper"

class Api::KudosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_kudos_index_url
    assert_response :success
  end
end
