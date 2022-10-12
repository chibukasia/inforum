class ApplicationController < ActionController::API
    include ActionController::Cookies 
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :response_to_unprocessable_entity

    # Private methods 
    private 

    # Handles validation errors 
    def response_to_unprocessable_entity(invalid) 
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity 
    end
end
