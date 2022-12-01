class TemplatesController < ApplicationController

    def index 
        @templates = Template.all
        render json: @templates, status: :ok
    end

    def show 
        @template = Template.find(params[:id])
        render json: @template, status: :ok
    end
    

end
