class S3Controller < ApplicationController
  def direct_post
    data = S3_BUCKET.presigned_post(key: "#{SecureRandom.uuid}", success_action_status: '201', acl: 'public-read')
    render json: { url: data.url, fields: data.fields }, status: :ok
  end
end

# class S3Controller < ApplicationController
#   def create
#     create_blob

#     render_success(
#       data: {
#         url: @blob.service_url_for_direct_upload(expires_in: 30.minutes),
#         headers: @blob.service_headers_for_direct_upload,
#         signed_id: @blob.signed_id
#       }
#     )
#   end

#   private
  
#   def create_blob
#     @blob = ActiveStorage::Blob.create_before_direct_upload!(
#       filename: blob_params[:filename],
#       byte_size: blob_params[:byte_size],
#       checksum: blob_params[:checksum],
#       content_type: blob_params[:content_type]
#     )
#   end
  
#   def blob_params
#     params.require(:file).permit(:filename, :byte_size, :checksum, :content_type)
#   end
# end
# view raw